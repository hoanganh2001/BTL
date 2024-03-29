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
import { NewsList, imageDetailList, popUpData, typeData } from '../news.type';
import { NotificationService } from 'app/core/service/notification';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { NewManagementSerivce } from '../news.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateNewComponent implements OnInit {
  public Editor = customBuild;
  settings = {
    counter: false,
    plugins: [lgZoom],
  };

  NewsForm?: FormGroup;
  isChangeThumbnail: boolean = false;
  fileAction: string = '';
  isClicked: boolean = false;
  selectedFiles?: File[] = [];
  imageInfos?: imageDetailList;
  fileUploaded?: imageDetailList[] = [];
  isEdit: boolean = false;
  isDetail: boolean = false;
  newItem?: NewsList;
  type: string;

  constructor(
    public dialogRef: MatDialogRef<CreateNewComponent>,
    @Inject(MAT_DIALOG_DATA) data: popUpData,
    private _newManagementService: NewManagementSerivce,
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
    this.NewsForm = this._formBuilder.group({
      name: ['', [Validators.required]],
      author: ['', [Validators.required]],
      view: ['', []],
      create_date: ['', []],
      update_date: ['', []],
      content: ['', []],
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
    this.disableField();
    if (this.isEdit) {
      this.getNewDetail(this.newItem);
    } else if (this.isDetail) {
      this.NewsForm.disable();
      this.getNewDetail(this.newItem);
    }
  }

  disableField() {
    this.authorField.disable();
    this.createDateField.disable();
    this.updateDateField.disable();
    this.viewField.disable();
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

  getNewDetail(item: NewsList) {
    this.nameField?.setValue(item?.name);
    this.authorField?.setValue(item?.author);
    this.viewField?.setValue(item?.view_number || 0);
    this.createDateField?.setValue(item?.create_date || null);
    this.updateDateField?.setValue(item?.update_date);
    item.content = formatCKContent(item.content);
    this.contentField?.setValue(item.content || '');
    this.imageInfos = {
      id: item?.thumbnail_id,
      name: item?.name,
      url: item.thumbnail_url,
    };
  }

  async createProduct() {
    if (this.isClicked) {
      return;
    }
    // this.isClicked = true;

    let formValidate = {
      isValidated: true,
      errors: [],
    };

    this.NewsForm.markAllAsTouched();
    if (this.selectedFiles.length < 1 && !this.imageInfos) {
      this._notiService.showError('Must have at least 1 image!');
      this.isClicked = false;
      return;
    }

    const validateResult = validateFormControls(this.NewsForm, formValidate);
    if (!validateResult.isValidated) {
      this._notiService.showError(getErrorText(validateResult.errors[0]));
      this.isClicked = false;
      return;
    }

    const model = this.NewsForm.getRawValue();
    const createProductBody = {
      name: model.name,
      author_id: 3,
      content: model.content,
      create_date: dayjs().toJSON(),
      update_date: dayjs().toJSON(),
    };

    if (this.isEdit) {
      delete createProductBody['create_date'];
      delete createProductBody['author_id'];
      this._newManagementService
        .editNew(createProductBody, this.newItem.id)
        .subscribe((res) => {
          this.isClicked = false;
          if (this.selectedFiles.length && this.isChangeThumbnail) {
            const formData = new FormData();
            this.selectedFiles.forEach((file, i) => {
              formData.append('ufile', file);
            });
            this._newManagementService
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
      this._newManagementService
        .createNew(createProductBody)
        .subscribe((res) => {
          this.isClicked = false;
          if (this.selectedFiles.length) {
            const formData = new FormData();
            this.selectedFiles.forEach((file, i) => {
              formData.append('ufile', file);
            });
            this._newManagementService
              .uploadFile(res.new_id, formData)
              .subscribe((res) => {
                this._notiService.showSuccess(res.message);
              });
          }
        });
    }
  }

  get nameField() {
    return this.NewsForm?.get('name');
  }

  get authorField() {
    return this.NewsForm?.get('author');
  }

  get viewField() {
    return this.NewsForm?.get('view');
  }

  get createDateField() {
    return this.NewsForm?.get('create_date');
  }

  get updateDateField() {
    return this.NewsForm?.get('update_date');
  }

  get contentField() {
    return this.NewsForm?.get('content');
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
