import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../core/auth/auth.service';
import { Router } from '@angular/router';
import RouterConfig from 'app/core/config/router.config';
import { environment } from 'enviroment/enviroment';
import * as dayjs from 'dayjs';

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
    private _router: Router,
  ) {
    this.SignInForm = this._formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
    this.SignUpForm = this._formBuilder.group({
      name: ['abcd', [Validators.required]],
      email: ['abc@123', [Validators.required, Validators.email]],
      new_password: ['1234', [Validators.required]],
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
    this._authService.logIn(body).subscribe((value) => {
      window.location.href = `http://localhost:4200` + this.previousURL;
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

    this._authService.signUp(body).subscribe((value) => {
      if (value.message === 'success') this.isSignIn = false;
      // window.location.href = `http://localhost:4200` + this.previousURL;
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
