import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {SkaterService} from "../../../shared/services/skating/skater.service";

@Component({
    selector       : 'example',
    templateUrl    : './home.component.html',
    styleUrls      : ['./home.component.scss'],
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent
{

    constructor(private skaterService: SkaterService) {
    }

    ngOnInit(): void {

        this.skaterService.find();

    }
}
