import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector       : 'error-500',
    templateUrl    : './error-500.component.html',
    styleUrls      : ['./error-500.component.scss'],
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class Error500Component
{
    /**
     * Constructor
     */
    constructor()
    {
    }
}
