import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { ProductRoutes } from './product.routing';
import { ProductListModule } from './product-list/product-list.module';

@NgModule({
  imports: [
    RouterModule.forChild(ProductRoutes),
    SharedModule,
    ProductListModule,
  ],
  declarations: [],
})
export class ProductModule {}
