import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {countryRoutes} from 'app/modules/main/country/country.routing';
import {CountryComponent} from './country.component';
import {CommonModule} from '@angular/common';
import {CountryDetailsComponent} from './country-details/country-details.component';
import {NationalRecordsBoxComponent} from './national-records-box/national-records-box.component';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import { SharedModule } from 'app/shared/shared.module';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [CountryComponent, CountryDetailsComponent, NationalRecordsBoxComponent],
  imports: [
    RouterModule.forChild(countryRoutes),
    CommonModule,
    SharedModule,
    MatTableModule,
    MatSortModule,
    MatInputModule,
    MatIconModule,
  ]
})
export class CountryModule {
}
