import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../core/auth/auth.service';
import { Router } from '@angular/router';
import RouterConfig from 'app/core/config/router.config';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  SignInForm?: FormGroup;
  SignUpForm?: FormGroup;
  isSignIn: boolean = false;

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
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      new_password: ['', [Validators.required]],
    });
  }

  ngOnInit() {}

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
      this._router.navigateByUrl(RouterConfig.HOME);
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
