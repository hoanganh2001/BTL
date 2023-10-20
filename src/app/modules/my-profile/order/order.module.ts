import { NgModule } from '@angular/core';
import { OrderComponent } from './order.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [SharedModule],
  declarations: [OrderComponent],
})
export class OrderModule {}
