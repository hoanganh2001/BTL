import { NgModule } from '@angular/core';
import { OrderComponent } from './order.component';
import { SharedModule } from 'app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { OrderRoutes } from './order.routing';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  imports: [
    RouterModule.forChild(OrderRoutes),
    SharedModule,
    MatInputModule,
    MatCheckboxModule,
  ],
  declarations: [OrderComponent],
})
export class OrderModule {}
