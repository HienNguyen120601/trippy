import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestinationComponent } from './destination.component';
import { Routes, RouterModule } from '@angular/router';
import { LoadingModule } from '@core/component/loading';
import { BannerModule } from '@core/component/banner';
import { BannerBotModule } from '@core/component/bannerBot';

const routes: Routes = [
  {
    path: '',
    component: DestinationComponent,
  },
];
@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    LoadingModule,
    BannerModule,
    BannerBotModule,
  ],
  declarations: [DestinationComponent],
})
export class DestinationModule {}
