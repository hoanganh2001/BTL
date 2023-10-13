import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { ProductRoutes } from './product.routing';
import { ProductListModule } from './product-list/product-list.module';
import { CategoryModule } from './category/category.module';

@NgModule({
  imports: [
    RouterModule.forChild(ProductRoutes),
    SharedModule,
    ProductListModule,
    CategoryModule,
  ],
  declarations: [],
})
export class ProductModule {}
