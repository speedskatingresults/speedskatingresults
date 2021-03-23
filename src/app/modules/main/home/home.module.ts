import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SharedModule} from 'app/shared/shared.module';
import {HomeComponent} from 'app/modules/main/home/home.component';
import {homeRoutes} from 'app/modules/main/home/home.routing';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatDividerModule} from '@angular/material/divider';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    RouterModule.forChild(homeRoutes),
    SharedModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatTableModule,
    MatSortModule,
    MatDividerModule,
    MatProgressBarModule,
  ]
})
export class HomeModule {
}
