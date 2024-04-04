import { Constant } from './../../../shared/constant';
import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {
  readonly BANKING_DETAIL = Constant.BANKING_DETAIL;
  total: number;
  qrCode: string = '';
  payment: string;
  orderId: string;

  constructor(
    public matDialogRef: MatDialogRef<PaymentComponent>,
    private _formBuilder: UntypedFormBuilder,
    @Inject(MAT_DIALOG_DATA) data,
  ) {
    this.total = data.total;
    this.payment = data.payment;
    this.orderId = data.id;
  }

  ngOnInit(): void {
    console.log();

    this.qrCode =
      this.payment === 'bank'
        ? `https://img.vietqr.io/image/${this.BANKING_DETAIL.BANK}-${
            this.BANKING_DETAIL.ACCOUNT
          }-compact2.jpg?amount=${
            this.total
          }&addInfo=${`Thanh toan ${this.orderId}`}&accountName=3Kshop`
        : 'https://lh3.google.com/u/1/d/1zt_UuwwkO89rESCZzLuelDaPXjjsGMC1=w1912-h966-iv1';
  }
  btnClose() {
    this.matDialogRef.close();
  }
}
