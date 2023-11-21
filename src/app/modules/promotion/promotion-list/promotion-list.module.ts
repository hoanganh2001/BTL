import { NgModule } from '@angular/core';
import { PromotionListComponent } from './promotion-list.component';
import { FilterAndSortModule } from 'app/shared/component/filter-and-sort/filter-and-sort.module';
import { ItemListModule } from 'app/shared/component/item-list/item-list.module';
import { SharedModule } from 'app/shared/shared.module';
import { PaginatorModule } from 'app/shared/component/paginator/paginator.module';

@NgModule({
  imports: [SharedModule, ItemListModule, FilterAndSortModule, PaginatorModule],
  declarations: [PromotionListComponent],
})
export class PromotionListModule {}
