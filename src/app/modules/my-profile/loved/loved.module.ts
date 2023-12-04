import { NgModule } from '@angular/core';
import { LovedComponent } from './loved.component';
import { SharedModule } from 'app/shared/shared.module';
import { ItemListModule } from 'app/shared/component/item-list/item-list.module';
import { PaginatorModule } from 'app/shared/component/paginator/paginator.module';

@NgModule({
  imports: [SharedModule, ItemListModule, PaginatorModule],
  declarations: [LovedComponent],
  exports: [LovedComponent],
})
export class LovedModule {}
