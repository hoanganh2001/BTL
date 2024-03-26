import { Component, OnInit, ViewChild } from '@angular/core';
import { OrderManagementSerivce } from './order.service';
import { paginatorData } from 'app/shared/component/paginator/paginator.types';
import { debounceTime, map } from 'rxjs';
import { orderList } from './order.type';
import { SortHeader } from '../admin.types';
import { FormControl } from '@angular/forms';
import RouterConfig from 'app/core/config/router.config';
import { Router } from '@angular/router';
import { Constant } from 'app/shared/constant';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderManagementComponent implements OnInit {
  searchControl = new FormControl('');

  readonly RouteConfig = RouterConfig;
  readonly Constant = Constant;

  @ViewChild(MatAccordion) accordion: MatAccordion;

  constructor(
    private _orderManagementService: OrderManagementSerivce,
    private _router: Router,
  ) {}
  sort: SortHeader = {
    active: '',
    direction: '',
  };
  paginator: paginatorData = {
    length: 0,
    limit: 20,
    offset: 0,
    page: 0,
  };
  orderSearchBody: any = {};
  orderList: orderList[];
  ngOnInit() {
    this.orderSearchBody = {
      limit: this.paginator.limit,
      offset: this.paginator.offset,
    };
    this.getOrderList(this.orderSearchBody);

    this.searchControl.valueChanges
      .pipe(
        debounceTime(300),
        map((value) => value.trim()),
      )
      .subscribe((value) => {
        if (value) {
          this.orderSearchBody = {
            ...this.orderSearchBody,
            offset: 0,
            name: value,
          };
          this.getOrderList(this.orderSearchBody);
        } else if (value === '' && !this.searchControl.pristine) {
          delete this.orderSearchBody['name'];
          this.getOrderList(this.orderSearchBody);
        }
      });
  }

  getOrderList(body: any) {
    this._orderManagementService
      .getOrderOnSearch(body)
      .pipe(
        map((value: any) => {
          value.data = value.data.map((res: orderList) => ({
            id: res.id,
            user_id: res.user_id,
            name: res.name,
            address: res.address,
            email: res.email,
            phone_number: res.phone_number,
            note: res.note,
            coupon: res.coupon,
            payment: res.payment,
            create_date: res.create_date,
            update_date: res.update_date,
            status: res.status,
            status_name: res.status_name,
            product: res.product.map((t) => {
              t.image = Constant.IMG_DIR.SHOP + t.image;
              return t;
            }),
            isExpand: false,
          }));
          return value;
        }),
      )
      .subscribe({
        next: (res) => {
          if (res) {
            this.orderList = res.data;
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
    this.orderSearchBody = {
      ...this.orderSearchBody,
      limit: pagging.pageSize,
      offset: pagging.pageIndex * pagging.pageSize,
    };
    // call api get list form
    this.getOrderList(this.orderSearchBody);
  }

  handleSortItem(data) {
    this.orderSearchBody = {
      ...this.orderSearchBody,
      limit: this.paginator.limit,
      offset: 0,
      sort_by: data.direction,
      order_by: data.active,
    };

    this.getOrderList(this.orderSearchBody);
  }

  deleteProduct(e, id: number) {
    e.stopPropagation();
    this._orderManagementService.deleteProduct(id).subscribe((res) => {
      this.getOrderList(this.orderSearchBody);
    });
  }

  shippingOrder(id: number) {
    this._orderManagementService.shippingOrder(id).subscribe({
      next: (res) => {
        this.getOrderList(this.orderSearchBody);
      },
      error: (err) => {},
    });
  }
  successOrder(id: number) {
    this._orderManagementService.successOrder(id).subscribe({
      next: (res) => {
        this.getOrderList(this.orderSearchBody);
      },
      error: (err) => {},
    });
  }
  cancelOrder(id: number) {
    this._orderManagementService.cancelOrder(id).subscribe({
      next: (res) => {
        this.getOrderList(this.orderSearchBody);
      },
      error: (err) => {},
    });
  }

  handleAction(type: string, id?: number) {
    switch (type) {
      case 'onway':
        this.shippingOrder(id);
        break;
      case 'done':
        this.successOrder(id);
        break;
      case 'cancel':
        this.cancelOrder(id);
        break;
      default:
        return;
    }
  }

  toggleExpansion(id: number) {
    this.orderList = this.orderList.map((i) => {
      if (i.id === id) {
        i.isExpand = !i.isExpand;
      }
      return i;
    });
  }

  getDiscountPrice(cost: number, discount?: number): number {
    return discount ? cost * (1 - discount / 100) : 1;
  }

  getTotalValue(id: number): number {
    const list = this.orderList.find((t) => t.id === id).product;
    return list.reduce((total, i) => {
      return i.price * i.quantity * this.getDiscountPrice(i.price, i.discount);
    }, 0);
  }
}
