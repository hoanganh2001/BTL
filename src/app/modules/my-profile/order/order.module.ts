import { NgModule } from '@angular/core';
import { OrderComponent } from './order.component';
import { SharedModule } from 'app/shared/shared.module';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  imports: [SharedModule, MatExpansionModule],
  declarations: [OrderComponent],
})
export class OrderModule {}
