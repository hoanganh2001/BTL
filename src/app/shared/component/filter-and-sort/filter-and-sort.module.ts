import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FilterAndSortComponent } from './filter-and-sort.component';

@NgModule({
  imports: [SharedModule, MatCheckboxModule, MatSelectModule, MatInputModule],
  declarations: [FilterAndSortComponent],
  exports: [FilterAndSortComponent],
})
export class FilterAndSortModule {}
