import { NgModule } from '@angular/core';
import { ProductDetailComponent } from './product-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ItemListModule } from 'src/app/shared/component/item-list/item-list.module';
@NgModule({
  imports: [SharedModule, ItemListModule],
  declarations: [ProductDetailComponent],
})
export class ProductDetailModule {}
