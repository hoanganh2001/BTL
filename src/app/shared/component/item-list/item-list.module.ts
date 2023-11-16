import { NgModule } from '@angular/core';
import { ItemListComponent } from './item-list.component';
import { SharedModule } from '../../shared.module';
import { ToastModule } from '../toast';

@NgModule({
  imports: [SharedModule, ToastModule],
  declarations: [ItemListComponent],
  exports: [ItemListComponent],
})
export class ItemListModule {}
