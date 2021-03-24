import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SpeedSkatingResultsApiService} from '../../../shared/services/speed-skating-results-api.service';

@Component({
    selector: 'app-skaters',
    templateUrl: './skaters.component.html',
    styleUrls: ['./skaters.component.scss']
})
export class SkatersComponent implements OnInit, OnDestroy {

    givenName: string;
    familyName: string;
    country: string;
    private sub: any;

    constructor(private route: ActivatedRoute, private speedSkatingResultsApiService: SpeedSkatingResultsApiService) {
    }

    ngOnInit(): void {
        this.sub = this.route.params.subscribe(params => {
            this.givenName = params['givenName'];
            this.familyName = params['familyName'];
            this.country = params['country'];
        });
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }
}
