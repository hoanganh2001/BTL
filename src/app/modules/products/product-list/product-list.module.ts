import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { SharedModule } from 'app/shared/shared.module';
import { ItemListModule } from '../../../shared/component/item-list/item-list.module';
import { FilterAndSortModule } from 'app/shared/component/filter-and-sort/filter-and-sort.module';

@NgModule({
  imports: [SharedModule, ItemListModule, FilterAndSortModule],
  declarations: [ProductListComponent],
})
export class ProductListModule {}
