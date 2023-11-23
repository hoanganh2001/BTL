import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  accountDetailForm?: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
    this.accountDetailForm = this._formBuilder.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      display_name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      old_password: ['', []],
      confirm_password: ['', []],
      new_password: ['', []],
    });
  }

  ngOnInit() {}

  get firstNameField() {
    return this.accountDetailForm?.get('first_name');
  }

  get lastNameField() {
    return this.accountDetailForm?.get('last_name');
  }

  get displayNameField() {
    return this.accountDetailForm?.get('display_name');
  }

  get emailField() {
    return this.accountDetailForm?.get('email');
  }

  get oldPasswordField() {
    return this.accountDetailForm?.get('old_password');
  }

  get confirmPasswordField() {
    return this.accountDetailForm?.get('confirm_password');
  }

  get newPasswordField() {
    return this.accountDetailForm?.get('new_password');
  }
}
