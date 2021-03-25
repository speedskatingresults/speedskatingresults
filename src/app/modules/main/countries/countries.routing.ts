import {Route} from '@angular/router';
import {CountriesComponent} from './countries.component';
import {CountryDetailsComponent} from './country-details/country-details.component';

export const countriesRoutes: Route[] = [{
  path: '',
  component: CountriesComponent
},
  {
    path: ':code',
    component: CountryDetailsComponent
  }
];
