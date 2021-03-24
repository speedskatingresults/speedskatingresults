import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {countryRoutes} from 'app/modules/main/country/country.routing';
import {CountryComponent} from './country.component';
import {CommonModule} from '@angular/common';
import {CountryDetailsComponent} from './country-details/country-details.component';
import {NationalRecordsBoxComponent} from './national-records-box/national-records-box.component';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';


@NgModule({
  declarations: [CountryComponent, CountryDetailsComponent, NationalRecordsBoxComponent],
  imports: [
    RouterModule.forChild(countryRoutes),
    CommonModule,
    MatTableModule,
    MatSortModule,
  ]
})
export class CountryModule {
}
