import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ViewStadiumComponent } from './pages/view-stadium/view-stadium.component';
import { AddStadiumComponent } from './pages/add-stadium/add-stadium.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { UsersComponent } from './pages/users/users.component';
import { PromotionComponent } from './pages/promotion/promotion.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';


const routes: Routes = [
  {
    path: '/',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'view-stadium',
    component: ViewStadiumComponent
  },
  {
    path: 'add-stadium',
    component: AddStadiumComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'reports',
    component: ReportsComponent
  },
  {
    path: 'promotion',
    component: PromotionComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'privacy',
    component: PrivacyComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuperAdminRoutingModule { }
