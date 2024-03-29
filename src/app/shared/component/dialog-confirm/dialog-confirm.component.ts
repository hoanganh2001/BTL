/* eslint-disable no-unused-vars */
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { titleFormat } from './dialog-confirm.types';
import {
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'dialog-comfirm',
  templateUrl: './dialog-confirm.component.html',
  styleUrls: ['./dialog-confirm.component.scss'],
})
export class DialogConfirmComponent {
  id: any;
  title?: titleFormat;
  reasonControl = new FormControl('', [Validators.required]);
  constructor(
    public dialogRef: MatDialogRef<DialogConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) data,
  ) {
    this.title = data.title;
    this.id = data.order_id;
  }

  // close action
  handleCloseAction(): void {
    this.dialogRef.close();
  }
  // confrim action
  handleConfirmAction(): void {
    const data = this.title.input
      ? { id: this.id, message: this.reasonControl.getRawValue() }
      : { id: this.id };
    this.dialogRef.close(data);
  }
}
