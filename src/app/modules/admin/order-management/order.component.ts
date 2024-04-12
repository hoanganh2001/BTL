import { Component, OnInit, ViewChild } from '@angular/core';
import { OrderManagementSerivce } from './order.service';
import { paginatorData } from 'app/shared/component/paginator/paginator.types';
import { debounceTime, map } from 'rxjs';
import { orderList } from './order.type';
import { SortHeader } from '../admin.types';
import { FormControl } from '@angular/forms';
import RouterConfig from 'app/core/config/router.config';
import { Router } from '@angular/router';
import { Constant, getConfirmData } from 'app/shared/constant';
import { MatAccordion } from '@angular/material/expansion';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { DialogConfirmComponent } from 'app/shared/component/dialog-confirm/dialog-confirm.component';
import * as dayjs from 'dayjs';
import { NotificationService } from 'app/core/service/notification';
import { OrderService } from 'app/modules/order/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderManagementComponent implements OnInit {
  dialogRef: MatDialogRef<DialogConfirmComponent>;

  searchControl = new FormControl('');

  readonly RouteConfig = RouterConfig;
  readonly Constant = Constant;

  @ViewChild(MatAccordion) accordion: MatAccordion;

  constructor(
    private _orderManagementService: OrderManagementSerivce,
    private _notiService: NotificationService,
    public _dialog: MatDialog,
    private _orderService: OrderService,
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
            id: value,
          };
          this.getOrderList(this.orderSearchBody);
        } else if (value === '' && !this.searchControl.pristine) {
          delete this.orderSearchBody['id'];
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
            payment: res.payment,
            create_date: res.create_date,
            update_date: res.update_date,
            coupon: res.coupon_value
              ? Constant.COUPON_TYPE[res.coupon_unit.toUpperCase()]
                ? res.coupon_value +
                  Constant.COUPON_TYPE[res.coupon_unit.toUpperCase()]
                : res.coupon_value
              : null,
            status: res.status,
            status_name: res.status_name,
            invoice: res.invoice,
            amount: res.amount,
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
    const confirmData = getConfirmData('delete');
    this.dialogRef = this._dialog.open(DialogConfirmComponent, {
      data: {
        order_id: id,
        title: confirmData,
      },
      autoFocus: false,
      restoreFocus: false,
      width: '500px',
      minHeight: confirmData.input ? '200px' : '150px',
    });
    this.dialogRef.afterClosed().subscribe((data) => {
      if (data) {
        this._orderManagementService.deleteProduct(data.id).subscribe({
          next: (res) => {
            if (res.message) {
              this._notiService.showSuccess(res.message);
              this.getOrderList(this.orderSearchBody);
            }
          },
          error(err) {
            this._notiService?.showError(err.error.message);
          },
        });
      }
    });
  }

  confirmOrder(id: number) {
    const confirmData = getConfirmData('confirm');
    this.dialogRef = this._dialog.open(DialogConfirmComponent, {
      data: {
        order_id: id,
        title: confirmData,
      },
      autoFocus: false,
      restoreFocus: false,
      width: '500px',
      minHeight: confirmData.input ? '200px' : '150px',
    });
    this.dialogRef.afterClosed().subscribe((data) => {
      if (data) {
        this._orderManagementService.confirmOrder(data.id).subscribe({
          next: (res) => {
            if (res.message) {
              if (res.isSuccess) {
                this._orderManagementService.createInvoice(data.id).subscribe();
              }
              this._notiService.showSuccess(res.message);
              this.getOrderList(this.orderSearchBody);
            }
          },
          error(err) {
            this._notiService?.showError(err.error.message);
          },
        });
      }
    });
  }
  shippingOrder(id: number) {
    const confirmData = getConfirmData('shipping');
    this.dialogRef = this._dialog.open(DialogConfirmComponent, {
      data: {
        order_id: id,
        title: confirmData,
      },
      autoFocus: false,
      restoreFocus: false,
      width: '500px',
      minHeight: confirmData.input ? '200px' : '150px',
    });
    this.dialogRef.afterClosed().subscribe((data) => {
      if (data) {
        this._orderManagementService.shippingOrder(data.id).subscribe({
          next: (res) => {
            if (res.message) {
              this._notiService.showSuccess(res.message);
              this.getOrderList(this.orderSearchBody);
            }
          },
          error(err) {
            this._notiService?.showError(err.error.message);
          },
        });
      }
    });
  }
  successOrder(id: number) {
    const confirmData = getConfirmData('success');
    this.dialogRef = this._dialog.open(DialogConfirmComponent, {
      data: {
        order_id: id,
        title: confirmData,
      },
      autoFocus: false,
      restoreFocus: false,
      width: '500px',
      minHeight: confirmData.input ? '200px' : '150px',
    });
    this.dialogRef.afterClosed().subscribe((data) => {
      if (data) {
        this._orderManagementService.successOrder(data.id).subscribe({
          next: (res) => {
            if (res.message) {
              this._notiService.showSuccess(res.message);
              this.getOrderList(this.orderSearchBody);
            }
          },
          error(err) {
            this._notiService?.showError(err.error.message);
          },
        });
      }
    });
  }
  cancelOrder(id: number) {
    const confirmData = getConfirmData('cancel');
    this.dialogRef = this._dialog.open(DialogConfirmComponent, {
      data: {
        order_id: id,
        title: confirmData,
      },
      autoFocus: false,
      restoreFocus: false,
      width: '500px',
      minHeight: '200px',
    });
    this.dialogRef.afterClosed().subscribe((data) => {
      if (data) {
        this._orderManagementService
          .cancelOrder(data.id, data.message)
          .subscribe({
            next: (res) => {
              if (res.message) {
                this._notiService.showSuccess(res.message);
                this.getOrderList(this.orderSearchBody);
              }
            },
            error(err) {
              this._notiService?.showError(err.error.message);
            },
          });
      }
    });
  }

  handleAction(type: string, id?: number, e?: any, invoiceId?: number) {
    e.stopPropagation();
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
      case 'confirm':
        this.confirmOrder(id);
        break;
      case 'invoice':
        this.openInvoice(invoiceId, id);
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
  openInvoice(invoiceId?: number, orderId?: number) {
    if (!invoiceId) {
      this._orderManagementService.createInvoice(orderId).subscribe({
        next: (res) => {
          this._notiService?.showSuccess(res.message);
          this.getOrderList(this.orderSearchBody);
        },
        error(err) {
          this._notiService?.showError(err.error.message);
        },
      });
      return;
    }
    this._orderService.getInvoice(invoiceId).subscribe({
      next: (res) => {
        window.open('/', '_blank').document.write(res.data);
      },
      error(err) {
        this._notiService?.showError(err.error.message);
      },
    });
  }
}
