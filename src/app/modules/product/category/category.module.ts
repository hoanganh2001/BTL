import { NgModule } from '@angular/core';
import { CategoryComponent } from './category.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ItemListModule } from 'src/app/shared/component/item-list/item-list.module';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
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
  declarations: [CategoryComponent],
})
export class CategoryModule {}
