import {Route} from '@angular/router';
import {AuthGuard} from 'app/core/auth/guards/auth.guard';
import {NoAuthGuard} from 'app/core/auth/guards/noAuth.guard';
import {LayoutComponent} from 'app/layout/layout.component';
import {InitialDataResolver} from 'app/app.resolvers';

export const appRoutes: Route[] = [
  {path: '', pathMatch : 'full', redirectTo: 'home'},

  {
    path: '',
    component: LayoutComponent,
    resolve: {
      initialData: InitialDataResolver,
    },
    children: [
      {
        path: 'home',
        loadChildren: () => import('app/modules/main/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'skaters',
        loadChildren: () => import('app/modules/main/skaters/skaters.module').then(m => m.SkatersModule)
      },
      {
        path: 'countries',
        loadChildren: () => import('app/modules/main/countries/countries.module').then(m => m.CountriesModule)
      },
      {
        path: '404-not-found',
        pathMatch: 'full',
        loadChildren: () => import('app/modules/errors/error-404/error-404.module').then(m => m.Error404Module)
      },
      {path: '**', redirectTo: '404-not-found'}
    ]
  }
];
