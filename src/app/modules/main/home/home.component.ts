import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector       : 'example',
    templateUrl    : './home.component.html',
    styleUrls      : ['./home.component.scss'],
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent
{
    /**
     * Constructor
     */
    constructor()
    {
    }
}
