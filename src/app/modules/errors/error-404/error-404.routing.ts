import { Route } from '@angular/router';
import {Error404Component} from "./error-404.component";

export const error404Routes: Route[] = [
    {
        path     : '',
        component: Error404Component
    }
];
