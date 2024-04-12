import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../core/auth/auth.service';
import { Router } from '@angular/router';
import RouterConfig from 'app/core/config/router.config';
import * as dayjs from 'dayjs';
import { NotificationService } from 'app/core/service/notification';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  SignInForm?: FormGroup;
  SignUpForm?: FormGroup;
  isSignIn: boolean = false;
  previousURL: string;

  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthService,
    private _notiService: NotificationService,
    private _router: Router,
  ) {
    this.SignInForm = this._formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
    this.SignUpForm = this._formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      new_password: ['', [Validators.required, Validators.pattern('.{6,}')]],
    });
  }

  ngOnInit() {
    this.previousURL =
      this._router.lastSuccessfulNavigation?.previousNavigation?.finalUrl?.toString() ||
      '';
  }

  changeState(isSignIn: boolean) {
    this.isSignIn = isSignIn;
  }

  signIn() {
    const model = this.SignInForm.getRawValue();
    const body = {
      username: model.username,
      password: model.password,
    };
    this._authService.logIn(body).subscribe({
      next: (res) => {
        if (res?.isSuccess) {
          if (res.role === 'admin') {
            this._router.navigateByUrl(RouterConfig.ADMIN_DASHBOARD);
          } else {
            window.location.href = `http://localhost:4200` + this.previousURL;
          }
        } else {
          this._notiService.showError(res.message);
        }
      },
      error: (err) => {
        this._notiService.showError(err.error.message);
      },
    });
  }

  signUp() {
    const model = this.SignUpForm.getRawValue();
    const body = {
      name: model.name,
      email: model.email,
      password: model.new_password,
      create_date: dayjs().toJSON(),
    };

    this._authService.signUp(body).subscribe({
      next: (res) => {
        if (res.success) {
          this.isSignIn = false;
          this._notiService.showSuccess(res.message);
        } else {
          this._notiService.showError(res.message);
        }
      },
      error: (err) => {
        this._notiService.showError(err.error.message);
      },
    });
  }

  get usernameField() {
    return this.SignInForm?.get('username');
  }

  get passwordField() {
    return this.SignInForm?.get('password');
  }

  get registerNameField() {
    return this.SignInForm?.get('name');
  }

  get registerEmailField() {
    return this.SignInForm?.get('email');
  }

  get registerPasswordField() {
    return this.SignInForm?.get('new_password');
  }
}
