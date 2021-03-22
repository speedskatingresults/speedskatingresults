import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { ExampleComponent } from 'app/modules/admin/example/example.component';
import { exampleRoutes } from 'app/modules/admin/example/example.routing';

@NgModule({
    declarations: [
        ExampleComponent
    ],
    imports     : [
        RouterModule.forChild(exampleRoutes),
        SharedModule
    ]
})
export class ExampleModule
{
}
