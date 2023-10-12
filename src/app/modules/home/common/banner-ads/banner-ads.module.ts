import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerAdsComponent } from './banner-ads.component';

@NgModule({
  imports: [CommonModule],
  declarations: [BannerAdsComponent],
  exports: [BannerAdsComponent],
})
export class BannerAdsModule {}
