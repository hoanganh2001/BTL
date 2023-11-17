import { Component, OnInit } from '@angular/core';
import { OrderService } from './order.service';
import { cartData } from './order.types';
import { map } from 'rxjs';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  allComplete: boolean = false;
  cartList: cartData[];
  totalPrice: number = 0;
  constructor(private _orderService: OrderService) {}
  ngOnInit() {
    this.getCartList();
  }
  check() {
    this.allComplete = !this.allComplete;
  }

  getCartList() {
    this.cartList = this._orderService.getCartItems();

    const body = { id: this.cartList.map((t) => t.id) };
    this._orderService
      .getItemsOnCart(body)
      .pipe(
        map((res) => {
          return res.data.map((item) => ({
            id: item.id,
            name: item.name,
            image: item.image,
            price: item.price,
            discount: item.discount,
          }));
        }),
      )
      .subscribe((res) => {
        this.cartList = res.map((item) => ({
          ...item,
          quantity: this.cartList.find((t) => t.id === item.id).quantity,
        }));
        this.getTotal(this.cartList);
      });
  }

  getDiscountPrice(cost: number, discount: number): number {
    return cost * (1 - discount / 100);
  }

  getTotal(list: cartData[]) {
    this.totalPrice = 0;
    list.forEach((item) => {
      const price = item.discount
        ? this.getDiscountPrice(item.price, item.discount)
        : item.price;

      this.totalPrice += price * item.quantity;
    });
  }

  updateQuantity(quantity: number, id: number) {
    if (quantity <= 0) {
      this.remove(id);
    } else {
      this._orderService.updateQuantity(id, quantity);
    }
    this.getTotal(this.cartList);
  }

  remove(id: number) {
    this._orderService.removeFromCart(id);
    this.cartList = this.cartList.filter((t) => parseInt(t.id) !== id);
    this.getTotal(this.cartList);
  }
}
