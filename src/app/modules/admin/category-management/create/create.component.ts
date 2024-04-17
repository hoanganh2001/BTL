import { Component, Inject, OnInit } from '@angular/core';
import { ProductService } from 'app/modules/products/products.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as customBuild from '../../../../shared/component/ck-editor/build/ckeditor';
import { NotificationService } from 'app/core/service/notification';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CategoryManagementSerivce } from '../category.service';
import { popUpData, typeData } from '../category.type';
import { validateFormControls, getErrorText } from 'app/shared/constant';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateCategoryComponent implements OnInit {
  public Editor = customBuild;
  createCategoryForm?: FormGroup;

  typeList?: typeData[] = [];
  featureList?: typeData[] = [];
  fileAction: string = '';
  isClicked: boolean = false;
  isEdit: boolean = false;
  isDetail: boolean = false;
  categoryID?: number;
  type: string;

  constructor(
    public dialogRef: MatDialogRef<CreateCategoryComponent>,
    @Inject(MAT_DIALOG_DATA) data: popUpData,
    private _productService: ProductService,
    private _categoryManagementService: CategoryManagementSerivce,
    private _formBuilder: FormBuilder,
    private _notiService: NotificationService,
  ) {
    this.type = data.type;
    if (this.type === 'edit') {
      this.isEdit = true;
    } else if (this.type === 'detail') {
      this.isDetail = true;
    }
    this.categoryID = data.category_id;
    // Validators.required
    this.createCategoryForm = this._formBuilder.group({
      name: ['', [Validators.required]],
      type: ['', []],
      feature: ['', []],
      specification: ['', []],
    });
  }

  onReady(eventData) {
    eventData.plugins.get('FileRepository').createUploadAdapter = function (
      loader,
    ) {
      return new UploadAdapter(loader);
    };
  }

  ngOnInit() {
    if (this.isEdit || this.isDetail) {
      this.getCategoryDetail(this.categoryID);
      this.getTypeAndFeature(this.categoryID);
    }
    if (this.isDetail) {
      this.createCategoryForm.disable();
    }
  }

  getTypeAndFeature(id: number) {
    const body = {
      category_id: id,
    };
    this._productService.getTypeAndFeature(body).subscribe((res) => {
      this.typeList = res.data['type'];
      this.featureList = res.data['feature'];
      this.typeField.setValue(this.typeList.map((t) => t.id));
      this.featureField.setValue(this.featureList.map((t) => t.id));
    });
  }

  getCategoryDetail(id: number) {
    this._categoryManagementService.getCategoryById(id).subscribe({
      next: (res) => {
        if (res?.data) {
          this.nameField.setValue(res.data.name);
          this.specificationField.setValue(res.data.specification || '');
        }
      },
      error: (err) => {
        this._notiService.showError(err.error.message);
      },
    });
  }

  addOption(e, type: string) {
    e.stopPropagation();
    e.preventDefault();
    if (type === 'type') {
      this.typeList.push({ name: '', id: null });
    } else {
      this.featureList.push({ name: '', id: null });
    }
  }

  onInputClick(e) {
    e.stopPropagation();
  }

  saveType(type: string, index: number) {
    if (type === 'type') {
      this.typeList[index].id = 0;
    } else {
      this.featureList[index].id = 0;
    }
  }

  saveCategory() {
    if (this.isClicked) {
      return;
    }
    this.isClicked = true;

    let formValidate = {
      isValidated: true,
      errors: [],
    };

    this.createCategoryForm.markAllAsTouched();

    const validateResult = validateFormControls(
      this.createCategoryForm,
      formValidate,
    );
    if (!validateResult.isValidated) {
      this._notiService.showError(getErrorText(validateResult.errors[0]));
      this.isClicked = false;
      return;
    }

    const model = this.createCategoryForm.getRawValue();
    const createProductBody = {
      name: model.name,
      type:
        model.type && model.type.length > 0
          ? model.type?.filter((t) => t)
          : null,
      feature:
        model.feature && model.feature.length > 0
          ? model.feature?.filter((t) => t)
          : null,
      specification: model.specification || null,
    };
    if (this.isEdit) {
      this._categoryManagementService
        .updateCategory(createProductBody, this.categoryID)
        .subscribe({
          next: (res) => {
            if (res) {
              this.dialogRef.close(true);
              this._notiService.showSuccess(res.message);
            }
          },
          error: (err) => {
            this.dialogRef.close(true);
            this._notiService.showError(err.error.message);
          },
        });
    } else {
      this._categoryManagementService
        .createCategory(createProductBody)
        .subscribe({
          next: (res) => {
            if (res) {
              this.dialogRef.close(true);
              this._notiService.showSuccess(res.message);
            }
          },
          error: (err) => {
            this.dialogRef.close(true);
            this._notiService.showError(err.error.message);
          },
        });
    }
  }

  get nameField() {
    return this.createCategoryForm?.get('name');
  }

  get typeField() {
    return this.createCategoryForm?.get('type');
  }

  get featureField() {
    return this.createCategoryForm?.get('feature');
  }

  get specificationField() {
    return this.createCategoryForm?.get('specification');
  }
}

export class UploadAdapter {
  private loader;
  constructor(loader: any) {
    this.loader = loader;
  }
  public async upload(): Promise<any> {
    const file = await this.loader.file;
    return this.readThis(file);
  }
  readThis(file: File): Promise<any> {
    let imagePromise: Promise<any> = new Promise((resolve, reject) => {
      const myReader: FileReader = new FileReader();
      myReader.onloadend = (e) => {
        resolve({ default: myReader.result });
      };
      myReader.readAsDataURL(file);
    });
    return imagePromise;
  }
}
