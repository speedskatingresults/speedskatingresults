import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector       : 'example',
    templateUrl    : './example.component.html',
    styleUrls      : ['./example.component.scss'],
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExampleComponent
{
    /**
     * Constructor
     */
    constructor()
    {
    }
}
