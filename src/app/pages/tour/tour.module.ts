import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TourComponent } from './tour.component';
import { Routes, RouterModule } from '@angular/router';
import { LoadingModule } from '@core/component/loading';
import { BannerModule } from '@core/component/banner';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const routes: Routes = [
  {
    path: '',
    component: TourComponent
  },
]
@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    LoadingModule,
    BannerModule,
    FontAwesomeModule
  ],
  declarations: [TourComponent]
})
export class TourModule { }
