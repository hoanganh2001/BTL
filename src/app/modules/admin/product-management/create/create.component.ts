import { map } from 'rxjs';
import { BrandService } from './../../../brands/brand.service';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'app/modules/products/products.service';
import { FormControl } from '@angular/forms';
import * as customBuild from '../../../../shared/component/ck-editor/build/ckeditor';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateProductComponent implements OnInit {
  constructor(
    private _brandService: BrandService,
    private _productService: ProductService,
  ) {}
  public Editor = customBuild;

  categoryControl = new FormControl('', []);

  brandList: { id: number; name: string };
  categoryList: { id: number; name: string };
  typeList: { id: number; name: string };
  featureList: { id: number; name: string };

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
    this.categoryControl.valueChanges.subscribe((value) => {
      if (value) {
        this.getTypeAndFeature(+value);
      }
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
    });
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
