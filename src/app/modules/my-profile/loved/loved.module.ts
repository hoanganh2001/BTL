import { NgModule } from '@angular/core';
import { LovedComponent } from './loved.component';
import { SharedModule } from 'app/shared/shared.module';
import { ItemListModule } from 'app/shared/component/item-list/item-list.module';

@NgModule({
  imports: [SharedModule, ItemListModule],
  declarations: [LovedComponent],
  exports: [LovedComponent],
})
export class LovedModule {}
