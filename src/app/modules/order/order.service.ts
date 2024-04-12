import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, filter } from 'rxjs';
import { environment } from 'enviroment/enviroment';
import { NotificationService } from 'app/core/service/notification';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(
    private _httpClient: HttpClient,
    private _notiService: NotificationService,
  ) {}

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
    this._notiService.showSuccess('Thêm vào giỏ hàng thành công!');
    this.getCart(localStorage['cart']);
  }

  removeFromCart(id?: number) {
    if (id) {
      const cart = JSON.parse(localStorage['cart']).filter((t) => t.id !== id);
      if (cart?.length <= 0) {
        localStorage.removeItem('cart');
      } else {
        localStorage['cart'] = JSON.stringify(cart);
      }
    } else {
      localStorage.removeItem('cart');
    }
    this.getCart(localStorage['cart'] || null);
  }

  updateQuantity(id: number, quantity: number) {
    const cart = JSON.parse(localStorage['cart']);
    cart
      .map((item) => {
        item.quantity = item.id === id ? quantity : item.quantity;
        return item.quantity > 0 ? item : null;
      })
      .filter((t) => t);
    localStorage['cart'] = JSON.stringify(cart || null);
    this.getCart(localStorage['cart']);
  }

  getCartItems() {
    return JSON.parse(localStorage['cart'] || null);
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

  cancelOrder(body): Observable<any> {
    return this._httpClient.post(`${environment.endpoint}/order/cancel`, body);
  }

  getInvoice(id): Observable<any> {
    return this._httpClient.get(`${environment.endpoint}/order/invoice/` + id);
  }

  getCoupon(body): Observable<any> {
    return this._httpClient.get(`${environment.endpoint}/order/coupon`, {
      params: body,
    });
  }
}
