import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import RouterConfig from 'app/core/config/router.config';
import { OrderService } from 'app/modules/order/order.service';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  constructor(private _router: Router, private _orderService: OrderService) {}
  cartNumber: number;

  ngOnInit() {
    this.getCartQuantity();
  }
  getCartQuantity() {
    this._orderService.cartSubject$.subscribe((value) => {
      this.cartNumber = value ? JSON.parse(value)?.length : null;
    });
  }

  redirectTo() {
    this._router.navigateByUrl(RouterConfig.ORDER);
  }
}
