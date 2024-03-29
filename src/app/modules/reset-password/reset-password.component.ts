import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import RouterConfig from 'app/core/config/router.config';
import * as dayjs from 'dayjs';
import * as duration from 'dayjs/plugin/duration';
import { ResetPasswordService } from './reset-password.service';
import { NotificationService } from 'app/core/service/notification';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
  otpSubmitForm?: FormGroup;
  resetPasswordForm?: FormGroup;
  previousURL: string;
  isConfirmOTP: boolean = false;
  userId?: number;
  constructor(
    private _formBuilder: FormBuilder,
    private _resetPasswordService: ResetPasswordService,
    private _router: Router,
    private _notiService: NotificationService,
  ) {
    this.otpSubmitForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      otp: ['', [Validators.required]],
    });
    this.resetPasswordForm = this._formBuilder.group({
      new_password: ['', [Validators.required]],
      confirm_password: ['', [Validators.required]],
    });
  }

  ngOnInit() {}

  timer = {
    emailCountDown: null,
    otpCountDown: null,
  };
  countDown(timeCompare, param: string) {
    const currentTime = dayjs();
    dayjs.extend(duration);
    if (currentTime.isAfter(timeCompare)) {
      this.timer[param] = null;
      return;
    }
    const timeDuration = timeCompare.valueOf() - currentTime.valueOf();
    this.timer[param] = dayjs.duration(timeDuration).seconds();
    setTimeout(() => {
      this.countDown(timeCompare, param);
    }, 1000);
  }

  getOTP() {
    const model = this.otpSubmitForm.getRawValue();
    const body = {
      email: model.email,
    };
    this._resetPasswordService.getOTP(body).subscribe({
      next: (res) => {
        if (res.type === 'fail') {
          this._notiService.showError(res.message);
        } else {
          this.countDown(dayjs().add(30, 's'), 'emailCountDown');
          this.countDown(dayjs().add(60, 's'), 'otpCountDown');
          this._notiService.showSuccess(res.message);
        }
      },
      error(err) {
        this._notiService.showError(err.error.message);
      },
    });
  }

  verifyOTP() {
    const model = this.otpSubmitForm.getRawValue();
    const body = {
      email: model.email,
      otp: model.otp,
    };
    console.log(this.otpSubmitForm);

    // this._resetPasswordService.verifyOTP(body).subscribe({
    //   next: (res) => {
    //     this.isConfirmOTP = true;
    //     this.userId = res.id;
    //     this._notiService.showSuccess(res.message);
    //   },
    //   error(err) {
    //     this._notiService.showError(err.error.message);
    //   },
    // });
  }

  resetPassword() {
    const model = this.resetPasswordForm.getRawValue();
    const body = {
      id: this.userId,
      password: model.new_password,
    };

    this._resetPasswordService.resetPassword(body).subscribe({
      next: (res) => {
        this._notiService.showSuccess(res.message);
        this._router.navigateByUrl(RouterConfig.SIGN_IN);
      },
      error(err) {
        this._notiService.showError(err.error.message);
      },
    });
  }

  get emailField() {
    return this.otpSubmitForm?.get('email');
  }

  get otpField() {
    return this.otpSubmitForm?.get('otp');
  }

  get registerNameField() {
    return this.otpSubmitForm?.get('name');
  }

  get registerEmailField() {
    return this.otpSubmitForm?.get('email');
  }

  get registerPasswordField() {
    return this.otpSubmitForm?.get('new_password');
  }
}
