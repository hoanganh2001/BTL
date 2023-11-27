import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyProfileService } from '../my-profile.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  accountDetailForm?: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _myProfile: MyProfileService,
  ) {
    this.accountDetailForm = this._formBuilder.group({
      name: ['', []],
      address: ['', []],
      phone: ['', [Validators.pattern(/\d{10}/)]],
      email: ['', [Validators.required, Validators.email]],
      old_password: ['', []],
      confirm_password: ['', []],
      new_password: ['', []],
    });
  }

  ngOnInit() {
    this.getMyProfile();
  }

  getMyProfile() {
    this._myProfile
      .getProfile()
      .pipe(
        map((res) => {
          return res.data;
        }),
      )
      .subscribe((res) => {
        if (res) {
          this.nameField.setValue(res.name || '');
          this.addressField.setValue(res.address || '');
          this.phoneField.setValue(res.phone || '');
          this.emailField.setValue(res.email || '');
        }
      });
  }

  updateInfo() {
    const model = this.accountDetailForm.getRawValue();
    const body = {
      name: model.name || null,
      address: model.address || null,
      phone: model.phone || null,
      email: model.email,
      old_password: model.old_password,
      confirm_password: model.confirm_password,
      new_password: model.new_password,
    };
    this._myProfile
      .updateMyProfile(body)
      .pipe(
        map((res) => {
          return res;
        }),
      )
      .subscribe((res) => {
        this.getMyProfile();
        alert(res.message);
      });
  }

  get nameField() {
    return this.accountDetailForm?.get('name');
  }

  get addressField() {
    return this.accountDetailForm?.get('address');
  }

  get phoneField() {
    return this.accountDetailForm?.get('phone');
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
