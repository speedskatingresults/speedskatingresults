import {Route} from '@angular/router';
import {AuthGuard} from 'app/core/auth/guards/auth.guard';
import {NoAuthGuard} from 'app/core/auth/guards/noAuth.guard';
import {LayoutComponent} from 'app/layout/layout.component';
import {InitialDataResolver} from 'app/app.resolvers';

export const appRoutes: Route[] = [

  // Redirect empty path to '/home'
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
  },


  // Redirect signed in user to the '/example'
  // {path: 'signed-in-redirect', pathMatch : 'full', redirectTo: 'example'},

  // Auth routes (guest)
  // {
  //     path: '',
  //     canActivate: [NoAuthGuard],
  //     canActivateChild: [NoAuthGuard],
  //     component: LayoutComponent,
  //     data: {
  //         layout: 'empty'
  //     },
  //     children: [
  //         {path: 'confirmation-required', loadChildren: () => import('app/modules/auth/confirmation-required/confirmation-required.module').then(m => m.AuthConfirmationRequiredModule)},
  //         {path: 'forgot-password', loadChildren: () => import('app/modules/auth/forgot-password/forgot-password.module').then(m => m.AuthForgotPasswordModule)},
  //         {path: 'reset-password', loadChildren: () => import('app/modules/auth/reset-password/reset-password.module').then(m => m.AuthResetPasswordModule)},
  //         {path: 'sign-in', loadChildren: () => import('app/modules/auth/sign-in/sign-in.module').then(m => m.AuthSignInModule)},
  //         {path: 'sign-up', loadChildren: () => import('app/modules/auth/sign-up/sign-up.module').then(m => m.AuthSignUpModule)}
  //     ]
  // },

  // Landing routes
  // {
  //     path: '',
  //     component: LayoutComponent,
  //     data: {
  //         layout: 'empty'
  //     },
  //     children: [
  //         {path: 'home', loadChildren: () => import('app/modules/landing/home/home.module').then(m => m.LandingHomeModule)},
  //     ]
  // },

  // Admin routes
  // {
  //     path: '',
  //     canActivate: [AuthGuard],
  //     canActivateChild: [AuthGuard],
  //     component: LayoutComponent,
  //     resolve: {
  //         initialData: InitialDataResolver,
  //     },
  //     children: [
  //
  //         // Example
  //         {path: 'example', loadChildren: () => import('app/modules/admin/example/example.module').then(m => m.ExampleModule)}
  //
  //         // 404 & Catch all
  //         // {path: '404-not-found', pathMatch: 'full', loadChildren: () => import('app/modules/admin/pages/errors/error-404/error-404.module').then(m => m.Error404Module)},
  //         // {path: '**', redirectTo: '404-not-found'}
  //     ]
  // }
];
