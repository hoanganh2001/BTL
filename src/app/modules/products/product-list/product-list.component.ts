import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import RouterConfig from 'app/core/config/router.config';
import { Constant } from 'app/shared/constant';
import { ProductService } from '../products.service';
import { map } from 'rxjs';
import { categoryResponse } from '../products.type';
import { productResponseData } from '../../home/home.types';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  categoriesOption = {
    type: Constant.TYPE_SORT_FILTER.FILTER_CATEGORY,
    categories: [],
  };

  constructor(
    private _router: Router,
    private _productService: ProductService,
  ) {}

  ngOnInit() {
    this.getCategoriesList();
  }

  getCategoriesList() {
    this._productService
      .getCategoriesList()
      .pipe(
        map((value: categoryResponse) => {
          return value.data.map((item) => ({
            id: item.id,
            name: item.name,
            type: Constant.TYPE_LIST.PRODUCT,
            product_list: {
              header: item.name,
              type: Constant.TYPE_LIST.PRODUCT,
              link:
                RouterConfig.PRODUCT_CATEGORY +
                '/' +
                item.name.replace(' ', '-').replace('/', '-').toLowerCase(),
              isFirst: true,
              data: [],
            },
          }));
        }),
      )
      .subscribe((res) => {
        if (res) {
          this.categoriesOption.categories = res;
          this.getProductInCategory(this.categoriesOption.categories);
        }
      });
  }

  getProductInCategory(list) {
    list.forEach((item) => {
      const body = {
        limit: 9,
        category_id: item.id,
      };
      this._productService
        .getItemsOnSearch(body)
        .pipe(
          map((value: categoryResponse) => {
            return value.data.map((res: productResponseData) => ({
              id: res.id,
              price: res.price,
              create_date: res.create_date,
              discount: res.discount,
              image: res.image,
              name: res.name,
              view: res.view_number,
              gift: res.gift_id,
              isFavorite: res.favorite,
            }));
          }),
        )
        .subscribe((res) => {
          if (res) {
            if (item.product_list) item.product_list.data = res;
          }
        });
    });
  }

  scroll(id: number) {
    console.log(id);

    const el = document.getElementById(id.toString());
    el?.scrollIntoView(false);
  }

  redirectTo(path: any) {
    this._router.navigateByUrl(path);
  }
}
