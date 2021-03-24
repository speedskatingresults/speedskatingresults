import {ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {countries} from 'app/data/countries';

@Component({
    selector: 'search-skaters',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit {
    @Input() country;
    @Input() familyName;
    @Input() givenName;

    countries = countries;

    searchForm = this.formBuilder.group({});

    constructor(private formBuilder: FormBuilder, private router: Router) {
    }

    ngOnInit(): void {
        this.searchForm = this.formBuilder.group({
            country: this.country ?? 'all',
            givenName: this.givenName,
            familyName: this.familyName
        });
    }

    submit(): void {

        const country = this.searchForm.value.country;
        const familyName = this.searchForm.value.familyName;
        const givenName = this.searchForm.value.givenName;

    }
}
