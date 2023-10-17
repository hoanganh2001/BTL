import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CurrencyFormatPipe } from './pipe/currencyFormat.pipe';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    CurrencyFormatPipe,
  ],
  declarations: [CurrencyFormatPipe],
})
export class SharedModule {}
