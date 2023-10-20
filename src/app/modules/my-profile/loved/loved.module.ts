import { NgModule } from '@angular/core';
import { LovedComponent } from './loved.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ItemListModule } from 'src/app/shared/component/item-list/item-list.module';

@NgModule({
  imports: [SharedModule, ItemListModule],
  declarations: [LovedComponent],
  exports: [LovedComponent],
})
export class LovedModule {}
