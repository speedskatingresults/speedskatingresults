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
import {SkatersComponent} from './skaters.component';
import {SkatersRoutes} from './skaters.routing';
import {ListComponent} from './list/list.component';
import {SearchModule} from '../../../layout/common/search/search.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {SkaterComponent} from './skater/skater.component';
import {PersonalRecordsBoxComponent} from './skater/personal-records-box/personal-records-box.component';
import {SeasonBestsBoxComponent} from './skater/season-bests-box/season-bests-box.component';
import { PersonalResultsBoxComponent } from './skater/personal-results-box/personal-results-box.component';
import { SeasonBestsChartBoxComponent } from './skater/season-bests-chart-box/season-bests-chart-box.component';
import {NgApexchartsModule} from 'ng-apexcharts';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [
    SkatersComponent,
    ListComponent,
    SkaterComponent,
    PersonalRecordsBoxComponent,
    SeasonBestsBoxComponent,
    PersonalResultsBoxComponent,
    SeasonBestsChartBoxComponent
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
    NgApexchartsModule,
    MatPaginatorModule,
  ]
})
export class SkatersModule {
}
