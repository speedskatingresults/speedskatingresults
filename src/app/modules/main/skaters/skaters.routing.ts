import { Route } from '@angular/router';
import { SkatersComponent } from './skaters.component';

export const SkatersRoutes: Route[] = [
    {
        path     : '',
        component: SkatersComponent
    },
    {
        path     : 'search/:name/:country',
        component: SkatersComponent
    }
];
