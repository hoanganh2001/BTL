import { Component, OnInit } from '@angular/core';
import { ProductManagementSerivce } from './products.service';
import { paginatorData } from 'app/shared/component/paginator/paginator.types';
import { map } from 'rxjs';
import { productManagementResponseData } from './products.type';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductManagementComponent implements OnInit {
  constructor(private _productManagementService: ProductManagementSerivce) {}

  paginator: paginatorData = {
    length: 0,
    limit: 20,
    offset: 0,
    page: 0,
  };
  productSearchBody: any = {};
  productList: any[];
  ngOnInit() {
    this.productSearchBody = {
      limit: this.paginator.limit,
      offset: this.paginator.offset,
    };
    this.getProductList(this.productSearchBody);
  }

  getProductList(body: any) {
    this._productManagementService
      .getItemsOnSearch(body)
      .pipe(
        map((value: any) => {
          value.data = value.data.map((res: productManagementResponseData) => ({
            id: res.id,
            price: res.price,
            create_date: res.create_date,
            discount: res.discount,
            image: res.image,
            name: res.name,
            view: res.view_number,
            gift: res.gift_id,
            category_id: res.category_id,
            category_name: res.category_name,
          }));
          return value;
        }),
      )
      .subscribe({
        next: (res) => {
          if (res) {
            this.productList = res.data;
            this.paginator.length = res.meta.length;
            this.paginator.offset = res.meta.offset ? res.meta.offset : 0;
            this.paginator.limit = res.meta.limit;
            this.paginator.page =
              res.meta.offset === 0 ? 0 : res.meta.offset / res.meta.limit;
          }
        },
      });
  }
  changePage(pagging) {
    // update payload body
    this.productSearchBody = {
      ...this.productSearchBody,
      limit: pagging.pageSize,
      offset: pagging.pageIndex * pagging.pageSize,
    };
    // call api get list form
    this.getProductList(this.productSearchBody);
  }

  deleteProduct(id: number) {
    this._productManagementService.deleteItem(id).subscribe((res) => {
      this.getProductList(this.productSearchBody);
    });
  }
}
