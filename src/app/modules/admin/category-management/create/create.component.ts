import { map } from 'rxjs';
import { BrandService } from './../../../brands/brand.service';
import { Component, Inject, OnInit } from '@angular/core';
import { ProductService } from 'app/modules/products/products.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as customBuild from '../../../../shared/component/ck-editor/build/ckeditor';
import lgZoom from 'lightgallery/plugins/zoom';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from 'app/core/service/notification';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CategoryManagementSerivce } from '../category.service';
import { popUpData, typeData } from '../category.type';
import { imageDetailList } from '../../product-management/products.type';

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
  thumbnailImg?: imageDetailList;
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
    private _productManagementService: CategoryManagementSerivce,
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
    this.getListBrand();
    this.getCategoryList();
    this.categoryField.valueChanges.subscribe((value) => {
      if (value) {
        const template = this.categoryList.find((t) => (t.id = value)).template;
        this.specificationField.setValue(template);
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
          return res.data.map((item) => ({
            id: item.id,
            name: item.name,
            template: item.specification_template,
          }));
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
