import { NgModule } from '@angular/core';
import { ItemListComponent } from './item-list.component';
import { SharedModule } from '../../shared.module';

@NgModule({
  imports: [SharedModule],
  declarations: [ItemListComponent],
  exports: [ItemListComponent],
})
export class ItemListModule {}
