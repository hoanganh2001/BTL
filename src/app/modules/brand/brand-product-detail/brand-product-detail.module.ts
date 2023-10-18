import { NgModule } from '@angular/core';
import { BrandProductDetailComponent } from './brand-product-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ItemListModule } from 'src/app/shared/component/item-list/item-list.module';
import { FilterAndSortModule } from 'src/app/shared/component/filter-and-sort/filter-and-sort.module';

@NgModule({
  imports: [
    SharedModule,
    ItemListModule,
    FilterAndSortModule,
    MatCheckboxModule,
    MatSelectModule,
    MatInputModule,
  ],
  declarations: [BrandProductDetailComponent],
})
export class BrandProductDetailModule {}
