import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ItemListModule } from '../../../shared/component/item-list/item-list.module';
import { FilterAndSortModule } from 'src/app/shared/component/filter-and-sort/filter-and-sort.module';

@NgModule({
  imports: [SharedModule, ItemListModule, FilterAndSortModule],
  declarations: [ProductListComponent],
})
export class ProductListModule {}
