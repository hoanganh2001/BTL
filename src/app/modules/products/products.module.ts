import { ProductDetailModule } from './product-detail/product-detail.module';
import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { ProductsRoutes } from './products.routing';
import { ProductListModule } from './product-list/product-list.module';
import { CategoryModule } from './category/category.module';
import { PaginatorModule } from 'app/shared/component/paginator/paginator.module';

@NgModule({
  imports: [
    RouterModule.forChild(ProductsRoutes),
    SharedModule,
    ProductListModule,
    CategoryModule,
    ProductDetailModule,
    PaginatorModule,
  ],
})
export class ProductsModule {}
