import { Component, OnInit } from '@angular/core';
import { Constant } from 'app/shared/constant';
import { ProductService } from '../../products/products.service';
import { map } from 'rxjs';
import { productResponseData } from '../../home/home.types';
import { paginatorData } from 'app/shared/component/paginator/paginator.types';
import { PromotionService } from '../promotion.service';

@Component({
  selector: 'app-promotion-list',
  templateUrl: './promotion-list.component.html',
  styleUrls: ['./promotion-list.component.scss'],
})
export class PromotionListComponent implements OnInit {
  sortOption = {
    title: 'SẮP XẾP THEO:',
    type: Constant.TYPE_SORT_FILTER.SORT,
    sorts: [
      {
        id: 'create_date desc',
        name: 'mới nhất',
      },
      {
        id: 'create_date',
        name: 'cũ nhất',
      },
      {
        id: 'price',
        name: 'Giá thấp đến cao',
      },
      {
        id: 'price desc',
        name: 'Giá cao đến thấp',
      },
    ],
  };

  productList = {
    type: Constant.TYPE_LIST.PRODUCT_ONLY,
    data: [],
  };

  paginator: paginatorData = {
    length: 0,
    limit: 30,
    offset: 0,
  };
  productSearchBody: any = {
    limit: 30,
  };

  categoriesOption = {
    type: Constant.TYPE_SORT_FILTER.FILTER_CATEGORY,
    categories: [],
  };
  constructor(
    private _productService: ProductService,
    private _promotionService: PromotionService,
  ) {}

  ngOnInit() {
    this.getProductList(this.productSearchBody);
    this.getCategoryList();
  }

  getCategoryList() {
    this._productService
      .getCategoriesList()
      .pipe(
        map((res) => {
          return res.data.map((item) => ({
            id: item.id,
            name: item.name,
            active: false,
          }));
        }),
      )
      .subscribe((res) => {
        if (res) this.categoriesOption.categories = res;
      });
  }

  getProductList(body) {
    this._promotionService
      .getPromotionalProduct(body)
      .pipe(
        map((res) => {
          res.data = res.data.map((res: productResponseData) => ({
            id: res.id,
            price: res.price,
            create_date: res.create_date,
            discount: res.discount,
            image: res.image,
            name: res.name,
            view: res.view_number,
            gift: res.gift_id,
          }));
          return res;
        }),
      )
      .subscribe((res) => {
        if (res) {
          this.productList.data = res.data;
          this.paginator.length = res.meta.length;
          this.paginator.offset = res.meta.offset ? res.meta.offset : 0;
          this.paginator.limit = res.meta.limit;
        }
      });
  }

  handelPagging(page: paginatorData) {
    this.productSearchBody = {
      ...this.productSearchBody,
      offset: page.offset,
      limit: page.limit,
    };

    this.getProductList(this.productSearchBody);
  }

  sortData(data) {
    const sortData = data.split(' ');
    this.productSearchBody = {
      ...this.productSearchBody,
      offset: 0,
      order_by: sortData[0],
      sort_by: sortData[1],
    };

    if (sortData.length === 1) {
      delete this.productSearchBody['sort_by'];
    }

    this.getProductList(this.productSearchBody);
  }

  filterCategory(id: number) {
    this.categoriesOption.categories = this.categoriesOption.categories.map(
      (t) => {
        t.active = t.id === id;
        return t;
      },
    );
    this.productSearchBody = {
      category_id: id,
      limit: 30,
      offset: 0,
    };
    this.getProductList(this.productSearchBody);
  }
}
