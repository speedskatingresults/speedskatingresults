import { NgModule } from '@angular/core';
import { TreoScrollResetDirective } from '@treo/directives/scroll-reset/scroll-reset.directive';

@NgModule({
    declarations: [
        TreoScrollResetDirective
    ],
    exports     : [
        TreoScrollResetDirective
    ]
})
export class TreoScrollResetModule
{
}
