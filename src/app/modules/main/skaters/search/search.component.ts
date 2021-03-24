import {ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
    selector: 'search-skaters',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit {
    @Input() country = 'NED';
    @Input() name = '';

    searchForm = this.formBuilder.group({});

    constructor(private formBuilder: FormBuilder, private router: Router) {
    }

    ngOnInit(): void {
        this.searchForm = this.formBuilder.group({
            country: this.country ?? 'NED',
            name: this.name
        });
    }

    submit(): void {

        const country = this.searchForm.value.country;
        const name = this.searchForm.value.name;

        if (name) {

            this.router.navigate(['/skaters/search/', name, country]);

        }
    }
}
