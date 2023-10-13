import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { HomeRoutes } from './home.routing';
import { ItemListModule } from '../../shared/component/item-list/item-list.module';
import { BannerAdsModule } from './common/banner-ads/banner-ads.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(HomeRoutes),
    ItemListModule,
    BannerAdsModule,
  ],
  declarations: [HomeComponent],
})
export class HomeModule {}
