import { Component, OnInit } from '@angular/core';
import { OrderService } from 'app/modules/order/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  constructor(private _orderService: OrderService) {}

  ngOnInit() {
    this.getOrderList();
  }

  getOrderList() {
    this._orderService.getOrderList().subscribe();
  }
}
