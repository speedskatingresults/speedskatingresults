import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-skaters',
    templateUrl: './skaters.component.html',
    styleUrls: ['./skaters.component.scss']
})
export class SkatersComponent implements OnInit {

    name: string;
    country:string;
    private sub: any;

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.name = params['name'];
            this.country = params['country'];
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
