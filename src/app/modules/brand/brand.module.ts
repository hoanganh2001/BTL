import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { BrandListModule } from './brand-list/brand-list.module';
import { BrandRoutes } from './brand.routing';
import { RouterModule } from '@angular/router';
import { BrandProductDetailModule } from './brand-product-detail/brand-product-detail.module';

@NgModule({
  imports: [
    RouterModule.forChild(BrandRoutes),
    SharedModule,
    BrandListModule,
    BrandProductDetailModule,
  ],
})
export class BrandModule {}
