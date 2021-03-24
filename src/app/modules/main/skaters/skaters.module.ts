import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SharedModule} from 'app/shared/shared.module';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatDividerModule} from '@angular/material/divider';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {SkatersComponent} from "./skaters.component";
import {SkatersRoutes} from "./skaters.routing";
import { ListComponent } from './list/list.component';
import { SearchComponent } from './search/search.component';
import { ItemComponent } from './list/item/item.component';
import {SearchModule} from "../../../layout/common/search/search.module";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";

@NgModule({
  declarations: [
    SkatersComponent,
    ListComponent,
    SearchComponent,
    ItemComponent
  ],
  imports: [
    RouterModule.forChild(SkatersRoutes),
    SharedModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatTableModule,
    MatSortModule,
    MatDividerModule,
    MatProgressBarModule,
    SearchModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ]
})
export class SkatersModule {
}
