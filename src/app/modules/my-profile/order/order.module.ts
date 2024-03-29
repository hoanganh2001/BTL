import { NgModule } from '@angular/core';
import { OrderComponent } from './order.component';
import { SharedModule } from 'app/shared/shared.module';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  imports: [SharedModule, MatExpansionModule, MatChipsModule],
  declarations: [OrderComponent],
})
export class OrderModule {}
