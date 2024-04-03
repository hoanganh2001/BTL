import { Constant } from './../../../shared/constant';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import {
  NgForm,
  UntypedFormGroup,
  UntypedFormBuilder,
  Validators,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationService } from 'app/core/service/notification';
import { UserManagementSerivce } from 'app/modules/admin/user-management/user-management.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {
  readonly BANKING_DETAIL = Constant.BANKING_DETAIL;
  @ViewChild('changePasswordNgForm') changePasswordNgForm: NgForm;

  changePasswordForm: UntypedFormGroup;

  total: number;
  qrCode: string = '';

  constructor(
    public matDialogRef: MatDialogRef<PaymentComponent>,
    private _formBuilder: UntypedFormBuilder,
    private _userManagementService: UserManagementSerivce,
    private _notiService: NotificationService,
    @Inject(MAT_DIALOG_DATA) data,
  ) {
    this.total = data.total;
  }

  ngOnInit(): void {
    //create the form
    this.changePasswordForm = this._formBuilder.group({
      newPassword: ['', [Validators.required, Validators.pattern('.{6,}')]],
    });

    this.qrCode = `https://img.vietqr.io/image/${this.BANKING_DETAIL.BANK}-${
      this.BANKING_DETAIL.ACCOUNT
    }-compact2.jpg?amount=${this.total}&addInfo=${''}&accountName=3Kshop`;
  }
  btnClose() {
    this.matDialogRef.close();
  }

  // Change password
  btnChange() {
    const data = {
      new_password: this.changePasswordForm.get('newPassword').value,
    };

    if (this.changePasswordForm.invalid) {
      return;
    }
    this.changePasswordForm.disable();
    // this._userManagementService.changePassword(data, this.id).subscribe(
    //   (res) => {
    //     this._notiService.showSuccess(res.message);
    //     this.matDialogRef.close();
    //   },
    //   (error) => {
    //     this._notiService.showError(error?.err.message);
    //   },
    // );
  }
}
