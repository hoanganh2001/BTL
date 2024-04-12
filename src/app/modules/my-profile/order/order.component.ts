import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ResponseCodeEnum } from 'app/core/enums/response-code.enums';
import { NotificationService } from 'app/core/service/notification';
import { OrderService } from 'app/modules/order/order.service';
import { DialogConfirmComponent } from 'app/shared/component/dialog-confirm/dialog-confirm.component';
import { paginatorData } from 'app/shared/component/paginator/paginator.types';
import { Constant, getConfirmData } from 'app/shared/constant';
import * as dayjs from 'dayjs';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  dialogRef: MatDialogRef<DialogConfirmComponent>;
  orderList: any;
  panelOpenState = false;
  paginator: paginatorData = {
    length: 0,
    limit: 28,
    offset: 0,
  };
  orderPagging: any;

  constructor(
    private _orderService: OrderService,
    private _notiService: NotificationService,
    public _dialog: MatDialog,
  ) {}

  ngOnInit() {
    this.getOrderList();
  }

  getOrderList() {
    this._orderService.getOrderList().subscribe((res) => {
      this.orderList = res.data.map((t) => {
        t.char = t.coupon_unit
          ? Constant.COUPON_TYPE[t.coupon_unit?.toUpperCase()]
          : null;
        return t;
      });
    });
  }
  getDiscountPrice(cost: number, discount: number): number {
    return cost * (1 - discount / 100);
  }

  getTotal(list: any[]) {
    let total = 0;
    list.forEach((item) => {
      const price = item[5] ? this.getDiscountPrice(item[4], item[5]) : item[4];

      total += price * item[3];
    });
    return total;
  }

  handelPagging(page: paginatorData) {
    this.orderPagging = {
      ...this.orderPagging,
      offset: page.offset,
      limit: page.limit,
    };
    this.getOrderList();
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
        data['date'] = dayjs().toISOString();
        this._orderService.cancelOrder(data).subscribe({
          next: (res) => {
            if (res.message) {
              this._notiService.showSuccess(res.message);
              this.getOrderList();
            }
          },
          error(err) {
            this._notiService?.showError(err.error.message);
          },
        });
      }
    });
  }

  getInvoice(id: number) {
    this._orderService.getInvoice(id).subscribe({
      next: (res) => {
        window.open('/', '_blank').document.write(res.data);
      },
      error(err) {
        this._notiService?.showError(err.error.message);
      },
    });
  }

  getImgUrl(id: string): string {
    return (
      (id?.includes('/')
        ? Constant.IMG_DIR.SHOP
        : Constant.IMG_DIR.GOOGLE_DRIVE) + id
    );
  }
}
