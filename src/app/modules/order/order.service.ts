import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, filter } from 'rxjs';
import { environment } from 'enviroment/enviroment';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private _httpClient: HttpClient) {}

  private cart: BehaviorSubject<string> = new BehaviorSubject<string>(
    localStorage['cart'] || null,
  );
  public cartSubject$: Observable<string> = this.cart.asObservable();
  getCart(cart: string) {
    this.cart.next(cart);
  }

  addToCart(id: number) {
    if (localStorage['cart']) {
      if (!localStorage['cart'].includes(id))
        localStorage['cart'] =
          localStorage['cart']
            .replace(']', '')
            .concat(',', JSON.stringify({ id: id, quantity: 1 })) + ']';
    } else {
      localStorage.setItem('cart', JSON.stringify([{ id: id, quantity: 1 }]));
    }
    this.getCart(localStorage['cart']);
  }

  removeFromCart(id?: number) {
    if (id) {
      const cart = JSON.parse(localStorage['cart']).filter((t) => t.id !== id);
      localStorage['cart'] = JSON.stringify(cart);
    } else {
      localStorage.removeItem('cart');
    }
    this.getCart(localStorage['cart'] || null);
  }

  updateQuantity(id: number, quantity: number) {
    const cart = JSON.parse(localStorage['cart']);
    cart.map((item) => {
      item.quantity = item.id === id ? quantity : item.quantity;
      return item;
    });
    localStorage['cart'] = JSON.stringify(cart);
    this.getCart(localStorage['cart']);
  }

  getCartItems() {
    return JSON.parse(localStorage['cart']);
  }

  getItemsOnCart(body: any): Observable<any> {
    return this._httpClient.get(`${environment.endpoint}/products`, {
      params: body,
    });
  }

  checkOut(body): Observable<any> {
    return this._httpClient.post(`${environment.endpoint}/check-out`, body);
  }

  getOrderList(): Observable<any> {
    return this._httpClient.get(`${environment.endpoint}/order`);
  }

  cancelOrder(id: number): Observable<any> {
    return this._httpClient.post(`${environment.endpoint}/order/cancel`, {
      id: id,
    });
  }
}