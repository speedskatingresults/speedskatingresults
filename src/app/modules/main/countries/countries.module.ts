import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {countriesRoutes} from 'app/modules/main/countries/countries.routing';
import {CountriesComponent} from './countries.component';
import {CommonModule} from '@angular/common';
import {CountryDetailsComponent} from './country-details/country-details.component';
import {NationalRecordsBoxComponent} from './national-records-box/national-records-box.component';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {SharedModule} from 'app/shared/shared.module';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [CountriesComponent, CountryDetailsComponent, NationalRecordsBoxComponent],
  imports: [
    RouterModule.forChild(countriesRoutes),
    CommonModule,
    SharedModule,
    MatTableModule,
    MatSortModule,
    MatInputModule,
    MatIconModule,
  ]
})
export class CountriesModule {
}
