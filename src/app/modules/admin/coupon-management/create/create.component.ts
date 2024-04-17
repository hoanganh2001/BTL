import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as customBuild from '../../../../shared/component/ck-editor/build/ckeditor';
import lgZoom from 'lightgallery/plugins/zoom';
import { getErrorText, validateFormControls } from 'app/shared/constant';
import * as dayjs from 'dayjs';
import { NotificationService } from 'app/core/service/notification';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { CouponManagementSerivce } from '../coupon-management.service';
import { Coupon, imageDetailList, popUpData } from '../coupon-management.type';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateCouponComponent implements OnInit {
  public Editor = customBuild;
  settings = {
    counter: false,
    plugins: [lgZoom],
  };

  unitList = ['percent', 'price'];

  CouponForm?: FormGroup;
  fileAction: string = '';
  isClicked: boolean = false;
  isEdit: boolean = false;
  isDetail: boolean = false;
  newItem?: Coupon;
  type: string;
  maxLength: number;
  minDate = dayjs().toDate();

  constructor(
    public dialogRef: MatDialogRef<CreateCouponComponent>,
    @Inject(MAT_DIALOG_DATA) data: popUpData,
    private _couponManagementService: CouponManagementSerivce,
    private _formBuilder: FormBuilder,
    private _notiService: NotificationService,
    private _sanitizer: DomSanitizer,
  ) {
    this.type = data.type;
    if (this.type === 'edit') {
      this.isEdit = true;
      this.newItem = data.item;
    } else if (this.type === 'detail') {
      this.isDetail = true;
      this.newItem = data.item;
    }
    // Validators.required
    this.CouponForm = this._formBuilder.group({
      name: ['', [Validators.required]],
      value: ['', [Validators.required]],
      unit: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
      start_date: ['', [Validators.required]],
      expired_date: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    if (this.isEdit) {
      this.getNewDetail(this.newItem);
    } else if (this.isDetail) {
      this.CouponForm.disable();
      this.getNewDetail(this.newItem);
    }

    this.unitField.valueChanges.subscribe((value) => {
      if (value && value === 'percent') {
        if (!this.valueField.hasValidator(Validators.max(100))) {
          this.maxLength = 100;
        }
      } else {
        if (this.valueField.hasValidator(Validators.max(100))) {
          this.maxLength = null;
        }
      }
    });
  }

  getNewDetail(item: Coupon) {
    this.nameField?.setValue(item?.name);
    this.valueField?.setValue(item?.value);
    this.unitField?.setValue(item?.unit);
    this.quantityField?.setValue(item?.quantity);
    this.startDateField?.setValue(item?.start_date);
    this.expiredDateField?.setValue(item?.expired_date);
  }

  async createProduct() {
    if (this.isClicked) {
      return;
    }
    this.isClicked = true;
    let formValidate = {
      isValidated: true,
      errors: [],
    };

    this.CouponForm.markAllAsTouched();
    const validateResult = validateFormControls(this.CouponForm, formValidate);
    if (!validateResult.isValidated) {
      this._notiService.showError(getErrorText(validateResult.errors[0]));
      this.isClicked = false;
      return;
    }

    const model = this.CouponForm.getRawValue();
    const createProductBody = {
      name: model.name,
      value: model.value,
      unit: model.unit,
      quantity: model.quantity,
      start_date: dayjs(model.start_date).toISOString(),
      expired_date: dayjs(model.expired_date).toISOString(),
    };
    if (this.isEdit) {
      this._couponManagementService
        .editCoupon(createProductBody, this.newItem.id)
        .subscribe((res) => {
          this.dialogRef.close(true);
          this._notiService.showSuccess(res.message);
        });
    } else {
      this._couponManagementService
        .createCoupon(createProductBody)
        .subscribe((res) => {
          this.dialogRef.close(true);
          this._notiService.showSuccess(res.message);
        });
    }
  }

  get nameField() {
    return this.CouponForm?.get('name');
  }

  get valueField() {
    return this.CouponForm?.get('value');
  }

  get unitField() {
    return this.CouponForm?.get('unit');
  }

  get quantityField() {
    return this.CouponForm?.get('quantity');
  }

  get startDateField() {
    return this.CouponForm?.get('start_date');
  }

  get expiredDateField() {
    return this.CouponForm?.get('expired_date');
  }
}
