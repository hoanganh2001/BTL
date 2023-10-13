import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ItemListModule } from '../../home/common/item-list/item-list.module';

@NgModule({
  imports: [SharedModule, ItemListModule],
  declarations: [ProductListComponent],
})
export class ProductListModule {}
