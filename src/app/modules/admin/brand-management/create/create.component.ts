import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as customBuild from '../../../../shared/component/ck-editor/build/ckeditor';
import lgZoom from 'lightgallery/plugins/zoom';
import {
  formatCKContent,
  getErrorText,
  validateFormControls,
} from 'app/shared/constant';
import * as dayjs from 'dayjs';
import { NotificationService } from 'app/core/service/notification';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { BrandManagementSerivce } from '../brand-management.service';
import {
  imageDetailList,
  BrandList,
  popUpData,
} from '../brand-management.type';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateBrandComponent implements OnInit {
  public Editor = customBuild;
  settings = {
    counter: false,
    plugins: [lgZoom],
  };

  BrandsForm?: FormGroup;
  isChangeThumbnail: boolean = false;
  fileAction: string = '';
  isClicked: boolean = false;
  selectedFiles?: File[] = [];
  imageInfos?: imageDetailList;
  fileUploaded?: imageDetailList[] = [];
  isEdit: boolean = false;
  isDetail: boolean = false;
  newItem?: BrandList;
  type: string;

  constructor(
    public dialogRef: MatDialogRef<CreateBrandComponent>,
    @Inject(MAT_DIALOG_DATA) data: popUpData,
    private _brandManagementService: BrandManagementSerivce,
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
    this.BrandsForm = this._formBuilder.group({
      name: ['', [Validators.required]],
    });
  }

  dragFiles(e) {
    this.fileAction = e.type;
  }
  onReady(eventData) {
    eventData.plugins.get('FileRepository').createUploadAdapter = function (
      loader,
    ) {
      return new UploadAdapter(loader);
    };
  }

  ngOnInit() {
    if (this.isEdit) {
      this.getNewDetail(this.newItem);
    } else if (this.isDetail) {
      this.BrandsForm.disable();
      this.getNewDetail(this.newItem);
    }
  }

  previewImage(input) {
    if (this.type === 'edit') {
      this.isChangeThumbnail = true;
    }
    Array.from(input.target.files).forEach((f: File) => {
      if (!this.selectedFiles.some((sf) => sf.name === f.name)) {
        this.selectedFiles.push(f);
      }
    });
    this.selectedFiles.forEach((file) => {
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imageInfos = {
            name: file.name,
            url: e.target.result,
          };
        };

        reader.readAsDataURL(file);
      }
    });
  }

  getNewDetail(item: BrandList) {
    this.nameField?.setValue(item?.name);
    this.imageInfos = {
      id: item?.image,
      name: item?.name,
      url: item.thumbnail_url,
    };
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

    this.BrandsForm.markAllAsTouched();
    if (this.selectedFiles.length < 1 && !this.imageInfos) {
      this._notiService.showError('Must have at least 1 image!');
      this.isClicked = false;
      return;
    }

    const validateResult = validateFormControls(this.BrandsForm, formValidate);
    if (!validateResult.isValidated) {
      this._notiService.showError(getErrorText(validateResult.errors[0]));
      this.isClicked = false;
      return;
    }

    const model = this.BrandsForm.getRawValue();
    const createProductBody = {
      name: model.name,
    };

    if (this.isEdit) {
      this._brandManagementService
        .editBrand(createProductBody, this.newItem.id)
        .subscribe((res) => {
          this.isClicked = false;
          if (this.selectedFiles.length && this.isChangeThumbnail) {
            const formData = new FormData();
            this.selectedFiles.forEach((file, i) => {
              formData.append('ufile', file);
            });
            this._brandManagementService
              .uploadFile(res.new_id, formData)
              .subscribe((res) => {
                this.dialogRef.close(true);
                this._notiService.showSuccess(res.message);
              });
          } else {
            this.dialogRef.close(true);
            this._notiService.showSuccess(res.message);
          }
        });
    } else {
      this._brandManagementService
        .createBrand(createProductBody)
        .subscribe((res) => {
          this.isClicked = false;
          if (this.selectedFiles.length) {
            const formData = new FormData();
            this.selectedFiles.forEach((file, i) => {
              formData.append('ufile', file);
            });
            this._brandManagementService
              .uploadFile(res.brand_id, formData)
              .subscribe((res) => {
                this.dialogRef.close(true);
                this._notiService.showSuccess(res.message);
              });
          }
        });
    }
  }

  get nameField() {
    return this.BrandsForm?.get('name');
  }

  getSafeHTML(content: string): SafeHtml {
    return this._sanitizer.bypassSecurityTrustHtml(content);
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
