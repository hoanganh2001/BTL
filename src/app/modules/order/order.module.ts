import { NgModule } from '@angular/core';
import { OrderComponent } from './order.component';
import { SharedModule } from 'app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { OrderRoutes } from './order.routing';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@NgModule({
  imports: [
    RouterModule.forChild(OrderRoutes),
    SharedModule,
    MatInputModule,
    MatRadioModule,
    MatDialogModule,
  ],
  declarations: [OrderComponent],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {},
    },
  ],
})
export class OrderModule {}
