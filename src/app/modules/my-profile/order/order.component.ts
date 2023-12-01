import { Component, OnInit } from '@angular/core';
import { OrderService } from 'app/modules/order/order.service';
import { paginatorData } from 'app/shared/component/paginator/paginator.types';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  orderList: any;
  panelOpenState = false;
  paginator: paginatorData = {
    length: 0,
    limit: 28,
    offset: 0,
  };
  orderPagging: any;

  constructor(private _orderService: OrderService) {}

  ngOnInit() {
    this.getOrderList();
  }

  getOrderList() {
    this._orderService.getOrderList().subscribe((res) => {
      this.orderList = res.data;
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
    this._orderService.cancelOrder(id).subscribe((res) => {
      if (res.message) {
        console.log(res.message);
        this.getOrderList();
      }
    });
  }
}
