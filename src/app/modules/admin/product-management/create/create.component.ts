import { map } from 'rxjs';
import { BrandService } from './../../../brands/brand.service';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'app/modules/products/products.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as customBuild from '../../../../shared/component/ck-editor/build/ckeditor';
import lgZoom from 'lightgallery/plugins/zoom';
import { getErrorText, validateFormControls } from 'app/shared/constant';
import * as dayjs from 'dayjs';
import { ProductManagementSerivce } from '../products.service';
import { typeData } from '../products.type';

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
  imageInfos?: any = [];

  constructor(
    private _brandService: BrandService,
    private _productService: ProductService,
    private _productManagementService: ProductManagementSerivce,
    private _formBuilder: FormBuilder,
  ) {
    // Validators.required
    this.createProductForm = this._formBuilder.group({
      name: ['', [Validators.required]],
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
          });
        };

        reader.readAsDataURL(file);
      }
    });
  }

  removeFile(item) {
    const index = Array.from(this.selectedFiles).findIndex((file) => {
      return file.name === item.name;
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
      if (!this.typeList) this.typeField.disable();
      if (!this.featureList) this.featureField.disable();
    });
  }

  createProduct() {
    if (this.isClicked) {
      return;
    }
    this.isClicked = true;

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
      console.log(getErrorText(validateResult.errors[0]));
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
    this._productManagementService
      .createItem(createProductBody)
      .subscribe((res) => {
        this.isClicked = false;
        console.log(res.message);
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
