import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, filter } from 'rxjs';
import { environment } from 'src/enviroment/enviroment';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private _httpClient: HttpClient) {}

  private cart: BehaviorSubject<string> = new BehaviorSubject<string>(
    localStorage['cart'] || null,
  );
  public cartSubject$: Observable<string> = this.cart.asObservable();
  getCart(id: string) {
    this.cart.next(id);
  }

  addToCart(id: string) {
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

  removeFromCart(id: number) {
    const cart = JSON.parse(localStorage['cart']).filter((t) => t.id !== id);
    localStorage['cart'] = JSON.stringify(cart);
    this.getCart(localStorage['cart']);
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
}
