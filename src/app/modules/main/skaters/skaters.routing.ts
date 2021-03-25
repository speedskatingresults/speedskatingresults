import {Route} from '@angular/router';
import {SkatersComponent} from './skaters.component';
import {SkaterComponent} from './skater/skater.component';

export const SkatersRoutes: Route[] = [
  {
    path: '',
    component: SkatersComponent
  },
  {
    path: ':id',
    component: SkaterComponent
  },
];
