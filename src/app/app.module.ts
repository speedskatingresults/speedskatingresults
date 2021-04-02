import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ExtraOptions, PreloadAllModules, RouterModule} from '@angular/router';
import {MarkdownModule} from 'ngx-markdown';
import {TreoModule} from '@treo';
import {TreoConfigModule} from '@treo/services/config';
import {TreoMockApiModule} from '@treo/lib/mock-api';
import {CoreModule} from 'app/core/core.module';
import {appConfig} from 'app/core/config/app.config';
import {mockDataServices} from 'app/data/mock';
import {LayoutModule} from 'app/layout/layout.module';
import {AppComponent} from 'app/app.component';
import {appRoutes} from 'app/app.routing';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes, {
      scrollPositionRestoration: 'enabled',
      preloadingStrategy: PreloadAllModules,
      relativeLinkResolution: 'legacy',
      initialNavigation: 'enabled'
    }),

    // Treo & Treo Mock API
    TreoModule,
    TreoConfigModule.forRoot(appConfig),
    TreoMockApiModule.forRoot(mockDataServices),

    // Core
    CoreModule,

    // Layout
    LayoutModule,

    // 3rd party modules
    MarkdownModule.forRoot({}),

    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production})
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
