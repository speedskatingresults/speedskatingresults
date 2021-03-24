import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {countryRoutes} from 'app/modules/main/country/country.routing';
import {CountryComponent} from './country.component';
import {CommonModule} from '@angular/common';


@NgModule({
  declarations: [CountryComponent],
  imports: [
    RouterModule.forChild(countryRoutes),
    CommonModule,
  ]
})
export class CountryModule {
}
