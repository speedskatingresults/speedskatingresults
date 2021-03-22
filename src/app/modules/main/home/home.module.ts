import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { HomeComponent } from 'app/modules/main/home/home.component';
import { exampleRoutes } from 'app/modules/main/home/home.routing';

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports     : [
        RouterModule.forChild(exampleRoutes),
        SharedModule
    ]
})
export class HomeModule
{
}
