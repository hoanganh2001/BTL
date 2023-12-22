import { map } from 'rxjs';
import { BrandService } from './../../../brands/brand.service';
import { Component, Inject, OnInit } from '@angular/core';
import { ProductService } from 'app/modules/products/products.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as customBuild from '../../../../shared/component/ck-editor/build/ckeditor';
import lgZoom from 'lightgallery/plugins/zoom';
import {
  Constant,
  getErrorText,
  validateFormControls,
} from 'app/shared/constant';
import * as dayjs from 'dayjs';
import { ProductManagementSerivce } from '../products.service';
import { imageDetailList, popUpData, typeData } from '../products.type';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from 'app/core/service/notification';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateProductComponent implements OnInit {
  public Editor = customBuild;
  settings = {
    counter: false,
    plugins: [lgZoom],
  };
  createProductForm?: FormGroup;

  brandList: typeData[];
  categoryList: typeData[];
  typeList?: typeData[];
  featureList?: typeData[];
  fileAction: string = '';
  isClicked: boolean = false;
  curIMG;
  selectedFiles?: File[] = [];
  imageInfos?: imageDetailList[] = [];
  fileUploaded?: imageDetailList[] = [];
  isEdit: boolean = false;
  isDetail: boolean = false;
  productID?: number;
  type: string;

  constructor(
    public dialogRef: MatDialogRef<CreateProductComponent>,
    @Inject(MAT_DIALOG_DATA) data: popUpData,
    private _brandService: BrandService,
    private _productService: ProductService,
    private _productManagementService: ProductManagementSerivce,
    private _formBuilder: FormBuilder,
    private _activeRoute: ActivatedRoute,
    private _notiService: NotificationService,
  ) {
    this.type = data.type;
    if (this.type === 'edit') {
      this.isEdit = true;
      this.productID = data.product_id;
    } else if (this.type === 'detail') {
      this.isDetail = true;
      this.productID = data.product_id;
    }
    // Validators.required
    this.createProductForm = this._formBuilder.group({
      name: ['abc', [Validators.required]],
      price: ['', [Validators.pattern(/\d/)]],
      discount: ['', []],
      quantity: ['', []],
      brand: ['', [Validators.required]],
      category: ['', [Validators.required]],
      type: ['', []],
      feature: ['', []],
      specification: ['', []],
      description: ['', []],
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
    this.featureField.disable();
    this.typeField.disable();
    if (this.isEdit) {
      this.getProductDetail(this.productID);
    } else if (this.isDetail) {
      this.createProductForm.disable();
      this.getProductDetail(this.productID);
    }
    this.getListBrand();
    this.getCategoryList();
    this.categoryField.valueChanges.subscribe((value) => {
      if (value) {
        this.getTypeAndFeature(+value);
      }
    });
  }

  previewImage(input) {
    let onlyDuplicateUpload = true;
    Array.from(input.target.files).forEach((f: File) => {
      if (!this.selectedFiles.some((sf) => sf.name === f.name)) {
        this.selectedFiles.push(f);
        onlyDuplicateUpload = false;
      }
    });
    if (onlyDuplicateUpload) return;
    this.selectedFiles.forEach((file) => {
      const alreadyUploaded = this.imageInfos.some((t) => t.name === file.name);
      if (file && !alreadyUploaded) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.curIMG = e.target.result;
          this.imageInfos.push({
            name: file.name,
            url: e.target.result,
            isThumbnail: false,
            isNew: true,
          });
        };

        reader.readAsDataURL(file);
      }
    });
  }

  removeFile(item) {
    if (this.isEdit) {
      if (item.isNew) {
        this.imageInfos = this.imageInfos.filter((t) => t.name !== item.name);
        this.selectedFiles = this.selectedFiles.filter(
          (t) => t.name !== item.name,
        );
      } else {
        this.imageInfos = this.imageInfos.filter((t) => t.id !== item.id);
      }
    } else {
      this.imageInfos = this.imageInfos.filter((t) => t.name !== item.name);
      this.selectedFiles = this.selectedFiles.filter(
        (t) => t.name !== item.name,
      );
    }
  }

  addThumbnailFile(item) {
    this.imageInfos = this.imageInfos.map((t) => {
      t.isThumbnail = JSON.stringify(t) === JSON.stringify(item);
      return t;
    });
  }

  getListBrand() {
    this._brandService
      .getBrands()
      .pipe(
        map((res) => {
          return res.data.map((item) => ({ id: item.id, name: item.name }));
        }),
      )
      .subscribe((data) => {
        this.brandList = data;
      });
  }

  getCategoryList() {
    this._productService
      .getCategoriesList()
      .pipe(
        map((res) => {
          return res.data.map((item) => ({ id: item.id, name: item.name }));
        }),
      )
      .subscribe((data) => {
        this.categoryList = data;
      });
  }

  getTypeAndFeature(id: number) {
    const body = {
      category_id: id,
    };
    this._productService.getTypeAndFeature(body).subscribe((res) => {
      this.typeList = res.data['type'];
      this.featureList = res.data['feature'];
      if (!this.isDetail) {
        this.typeField.enable();
        this.featureField.enable();
      }
    });
  }

  getProductDetail(id: number) {
    this._productManagementService
      .getProductDetail(id)
      .pipe(map((res) => res.data))
      .subscribe((res) => {
        this.nameField?.setValue(res.name);
        this.priceField?.setValue(res.price || 0);
        this.quantityField?.setValue(res.quantity || 0);
        this.discountField?.setValue(res.discount || 0);
        this.brandField?.setValue(res.brand_id);
        this.categoryField?.setValue(res.category_id);
        this.specificationField?.setValue(res.specification || null);
        this.descriptionField?.setValue(res.description || null);
        this.typeField?.setValue(res.type_id || null);
        this.featureField?.setValue(res.feature_id || null);
        if (res.file_id)
          res.file_id?.forEach((t) => {
            this.imageInfos.push({
              id: t[0],
              url: Constant.IMG_DIR.GOOGLE_DRIVE + t[1],
              isThumbnail: res.thumbnail === t[0],
            });
          });
        this.fileUploaded = structuredClone(this.imageInfos);
      });
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

    this.createProductForm.markAllAsTouched();

    const validateResult = validateFormControls(
      this.createProductForm,
      formValidate,
    );

    if (!validateResult.isValidated) {
      this._notiService.showError(getErrorText(validateResult.errors[0]));
      this.isClicked = false;
      return;
    }

    const model = this.createProductForm.getRawValue();
    const createProductBody = {
      detail: {
        name: model.name,
        price: model.price,
        discount: model.discount,
        quantity: model.quantity,
        create_date: dayjs().toJSON(),
        brand: model.brand,
        specification: model.specification,
        description: model.description,
      },
      type: {
        category: model.category,
        type: model.type,
        feature: model.feature,
      },
    };

    if (this.isEdit) {
      this._productManagementService
        .editProduct(createProductBody, this.productID)
        .subscribe((res) => {
          this.isClicked = false;
          const fileDel = this.fileUploaded.filter((t) =>
            this.imageInfos.every((d) => d.id !== t.id),
          );
          if (fileDel?.length > 0) {
            const delFileBody = {
              ids: fileDel.map((t) => t.id),
            };
            this._productManagementService
              .delFile(delFileBody, this.productID)
              .subscribe();
          }
          if (this.selectedFiles.length) {
            const formData = new FormData();
            this.selectedFiles.forEach((file, i) => {
              formData.append('ufile', file);
            });
            const thumbnailItem = this.imageInfos.find((t) => t.isThumbnail)
              ? this.imageInfos.find((t) => t.isThumbnail)
              : this.imageInfos[0];
            if (thumbnailItem.isNew) {
              const thumbnailIndex = this.selectedFiles.findIndex(
                (t) => t.name === thumbnailItem.name,
              );

              this._productManagementService
                .uploadFile(this.productID, formData, thumbnailIndex)
                .subscribe((res) => {
                  this._notiService.showSuccess(res.message);
                });
            } else {
              this._productManagementService
                .uploadThumbnailWithId(this.productID, thumbnailItem.id)
                .subscribe();
            }
          } else {
            const thumbnailItem = this.imageInfos.find((t) => t.isThumbnail)
              ? this.imageInfos.find((t) => t.isThumbnail)
              : this.imageInfos[0];
            this._productManagementService
              .uploadThumbnailWithId(this.productID, thumbnailItem.id)
              .subscribe();
          }
        });
    } else {
      this._productManagementService
        .createProduct(createProductBody)
        .subscribe((res) => {
          this.isClicked = false;
          if (this.selectedFiles.length) {
            const formData = new FormData();
            const thumbnailIndex =
              this.imageInfos.findIndex((t) => t.isThumbnail) >= 0
                ? this.imageInfos.findIndex((t) => t.isThumbnail)
                : 0;
            this.selectedFiles.forEach((file, i) => {
              formData.append('ufile', file);
            });
            this._productManagementService
              .uploadFile(res.product_id, formData, thumbnailIndex)
              .subscribe((res) => {
                this._notiService.showSuccess(res.message);
              });
          }
        });
    }
  }

  get nameField() {
    return this.createProductForm?.get('name');
  }

  get priceField() {
    return this.createProductForm?.get('price');
  }

  get quantityField() {
    return this.createProductForm?.get('ququantityantity');
  }

  get discountField() {
    return this.createProductForm?.get('discount');
  }

  get brandField() {
    return this.createProductForm?.get('brand');
  }

  get categoryField() {
    return this.createProductForm?.get('category');
  }

  get typeField() {
    return this.createProductForm?.get('type');
  }

  get featureField() {
    return this.createProductForm?.get('feature');
  }

  get specificationField() {
    return this.createProductForm?.get('specification');
  }

  get descriptionField() {
    return this.createProductForm?.get('description');
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
