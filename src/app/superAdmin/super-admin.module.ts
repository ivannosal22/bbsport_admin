import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperAdminRoutingModule } from './super-admin-routing.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AddStadiumComponent } from './pages/add-stadium/add-stadium.component';
import { ViewStadiumComponent } from './pages/view-stadium/view-stadium.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { UsersComponent } from './pages/users/users.component';
import { NgChartjsModule } from 'ng-chartjs';
import { AgmCoreModule } from '@agm/core';
import { PromotionComponent } from './pages/promotion/promotion.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { AngularEditorModule } from '@kolkov/angular-editor';

@NgModule({
  declarations: [
    AddStadiumComponent,
    ViewStadiumComponent,
    DashboardComponent,
    ReportsComponent,
    UsersComponent,
    PromotionComponent,
    AboutUsComponent,
    PrivacyComponent

  ],
  imports: [
    CommonModule,
    SuperAdminRoutingModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
    FormsModule,
    NgChartjsModule,
    AngularEditorModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyALqmDEpru4ETRhPvAHNZXrMFvI0nOzNG4',
      libraries: ['places']
    })
  ]
})
export class SuperAdminModule { }
