import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { BrandListModule } from './brand-list/brand-list.module';
import { RouterModule } from '@angular/router';
import { BrandProductListModule } from './brand-product-list/brand-product-list.module';
import { BrandsRoutes } from './brands.routing';

@NgModule({
  imports: [
    RouterModule.forChild(BrandsRoutes),
    SharedModule,
    BrandListModule,
    BrandProductListModule,
  ],
})
export class BrandsModule {}
