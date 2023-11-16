import { NgModule } from '@angular/core';
import { PromotionListComponent } from './promotion-list.component';
import { FilterAndSortModule } from 'src/app/shared/component/filter-and-sort/filter-and-sort.module';
import { ItemListModule } from 'src/app/shared/component/item-list/item-list.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { PaginatorModule } from 'src/app/shared/component/paginator/paginator.module';

@NgModule({
  imports: [SharedModule, ItemListModule, FilterAndSortModule, PaginatorModule],
  declarations: [PromotionListComponent],
})
export class PromotionListModule {}
