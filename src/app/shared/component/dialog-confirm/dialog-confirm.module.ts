import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DialogConfirmComponent } from './dialog-confirm.component';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DialogConfirmComponent],
  imports: [
    MatIconModule,
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
  ],
  exports: [DialogConfirmComponent],
  providers: [],
})
export class DialogConfirmModule {}
