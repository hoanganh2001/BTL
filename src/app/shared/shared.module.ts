import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CurrencyFormatPipe } from './pipe/currencyFormat.pipe';
import { DateFormatPipe, DateToNowPipe } from './pipe/dateToNow.pipe';
import { NotificationModule } from 'app/core/service/notification';
import { ToastrModule } from 'ngx-toastr';
import { DialogConfirmModule } from './component/dialog-confirm/dialog-confirm.module';
import { MatDialogModule } from '@angular/material/dialog';
import { AppMaxNumberDirective } from './directives/app-max-number.directive';

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
    DialogConfirmModule,
    MatDialogModule,
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
    ToastrModule,
    AppMaxNumberDirective,
  ],
  declarations: [
    CurrencyFormatPipe,
    DateToNowPipe,
    DateFormatPipe,
    AppMaxNumberDirective,
  ],
})
export class SharedModule {}
