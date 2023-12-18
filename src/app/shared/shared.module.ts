import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CurrencyFormatPipe } from './pipe/currencyFormat.pipe';
import { DateFormatPipe, DateToNowPipe } from './pipe/dateToNow.pipe';
import { NotificationModule } from 'app/core/service/notification';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NotificationModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    CurrencyFormatPipe,
    DateToNowPipe,
    DateFormatPipe,
    NotificationModule,
  ],
  declarations: [CurrencyFormatPipe, DateToNowPipe, DateFormatPipe],
})
export class SharedModule {}
