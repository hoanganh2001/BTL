import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  Constant,
  getErrorText,
  validateFormControls,
} from 'app/shared/constant';
import * as dayjs from 'dayjs';
import { UserManagementSerivce } from '../user-management.service';
import { IOption, popUpData, userList } from '../user-management.type';
import { NotificationService } from 'app/core/service/notification';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateUserComponent implements OnInit {
  UserForm?: FormGroup;
  UserDetail?: userList;
  isClicked: boolean = false;
  isEdit: boolean = false;
  isDetail: boolean = false;
  type: string;
  roleList: IOption[] = [
    { value: 1, name: 'Admin' },
    { value: 2, name: 'User' },
  ];
  constructor(
    public dialogRef: MatDialogRef<CreateUserComponent>,
    @Inject(MAT_DIALOG_DATA) data: popUpData,
    private _UserManagementService: UserManagementSerivce,
    private _formBuilder: FormBuilder,
    private _notiService: NotificationService,
  ) {
    this.type = data.type;
    if (this.type === 'edit') {
      this.isEdit = true;
      this.UserDetail = data.user;
    } else if (this.type === 'detail') {
      this.isDetail = true;
      this.UserDetail = data.user;
    }
    // Validators.required
    this.UserForm = this._formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      password: ['', this.type === 'create' ? [Validators.required] : []],
      phone: ['', []],
      role: ['', [Validators.required]],
      address: ['', []],
      last_signin: ['', []],
      create_date: ['', []],
    });
  }

  ngOnInit() {
    if (this.isEdit) {
      this.getUserDetail(this.UserDetail);
    } else if (this.isDetail) {
      this.UserForm.disable();
      this.getUserDetail(this.UserDetail);
    }
  }

  getUserDetail(userDetail: userList) {
    this.nameField?.setValue(userDetail.name || null);
    this.emailField?.setValue(userDetail.email || null);
    this.phoneField?.setValue(userDetail.phone || null);
    this.addressField?.setValue(userDetail.address || null);
    this.roleField?.setValue(userDetail.role_id);
    this.createDateField?.setValue(
      dayjs(userDetail.create_date).format('DD/M/YYYY HH:mm:ss') || null,
    );
    this.lastSigninField?.setValue(
      userDetail.last_signin
        ? dayjs(userDetail.last_signin).format('DD/M/YYYY HH:mm:ss')
        : null,
    );
  }

  async createUser() {
    if (this.isClicked) {
      return;
    }
    this.isClicked = true;

    let formValidate = {
      isValidated: true,
      errors: [],
    };

    this.UserForm.markAllAsTouched();

    const validateResult = validateFormControls(this.UserForm, formValidate);

    if (!validateResult.isValidated) {
      this._notiService.showError(getErrorText(validateResult.errors[0]));
      this.isClicked = false;
      return;
    }

    const model = this.UserForm.getRawValue();
    const createUserBody = {
      name: model.name,
      password: model.password,
      email: model.email,
      phone: model.phone,
      create_date: dayjs().toJSON(),
      address: model.address,
    };

    if (this.isEdit) {
      delete createUserBody['password'];
      delete createUserBody['create_date'];
      this._UserManagementService
        .editUser(createUserBody, this.UserDetail.id)
        .subscribe((res) => {
          this.isClicked = false;
          this._notiService.showSuccess(res.message);
          this.dialogRef.close(true);
        });
    } else {
      this._UserManagementService
        .createUser(createUserBody)
        .subscribe((res) => {
          this.isClicked = false;
          this._notiService.showSuccess(res.message);
          this.dialogRef.close(true);
        });
    }
  }

  get nameField() {
    return this.UserForm?.get('name');
  }

  get passwordField() {
    return this.UserForm?.get('password');
  }

  get emailField() {
    return this.UserForm?.get('email');
  }

  get phoneField() {
    return this.UserForm?.get('phone');
  }

  get roleField() {
    return this.UserForm?.get('role');
  }

  get addressField() {
    return this.UserForm?.get('address');
  }

  get createDateField() {
    return this.UserForm?.get('create_date');
  }

  get lastSigninField() {
    return this.UserForm?.get('last_signin');
  }
}
