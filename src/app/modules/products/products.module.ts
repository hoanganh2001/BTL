import { ProductDetailModule } from './product-detail/product-detail.module';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { ProductsRoutes } from './products.routing';
import { ProductListModule } from './product-list/product-list.module';
import { CategoryModule } from './category/category.module';

@NgModule({
  imports: [
    RouterModule.forChild(ProductsRoutes),
    SharedModule,
    ProductListModule,
    CategoryModule,
    ProductDetailModule,
  ],
})
export class ProductsModule {}
