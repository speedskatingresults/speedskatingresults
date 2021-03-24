import {Route} from '@angular/router';
import {CountryComponent} from './country.component';
import {SkatersComponent} from '../skaters/skaters.component';
import {CountryDetailsComponent} from './country-details/country-details.component';

export const countryRoutes: Route[] = [{
  path: '',
  component: CountryComponent
},
  {
    path: ':code',
    component: CountryDetailsComponent
  }
];
