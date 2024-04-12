import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { productResponseData } from 'app/modules/home/home.types';
import { ProductService } from 'app/modules/products/products.service';
import { paginatorData } from 'app/shared/component/paginator/paginator.types';
import { Constant, getImgUrl } from 'app/shared/constant';
import { map } from 'rxjs';

@Component({
  selector: 'app-loved',
  templateUrl: './loved.component.html',
  styleUrls: ['./loved.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LovedComponent implements OnInit {
  productList = {
    type: Constant.TYPE_LIST.PRODUCT_ONLY,
    data: [],
  };

  paginator: paginatorData = {
    length: 0,
    limit: 28,
    offset: 0,
  };

  pagging: {};
  constructor(
    private _productService: ProductService,
    private _changeDetectorRef: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    this.getProductList({});
  }

  getProductList(body) {
    this._productService
      .getFavoriteProduct(body)
      .pipe(
        map((value: any) => {
          value.data = value.data.map((res: productResponseData) => {
            return {
              id: res.id,
              price: res.price,
              create_date: res.create_date,
              discount: res.discount,
              image: res.thumbnail_url,
              name: res.name,
              view: res.view_number,
              gift: res.gift_id,
              isFavorite: res.favorite,
            };
          });

          return value;
        }),
      )
      .subscribe({
        next: (res) => {
          if (res) {
            this.productList.data = res.data;
            this.paginator.length = res.meta.length;
            this.paginator.offset = res.meta.offset ? res.meta.offset : 0;
            this.paginator.limit = res.meta.limit;
            this._changeDetectorRef.markForCheck();
          }
        },
      });
  }

  handelPagging(page: paginatorData) {
    this.pagging = {
      ...this.pagging,
      offset: page.offset,
      limit: page.limit,
    };

    this.getProductList(this.pagging);
  }
}
