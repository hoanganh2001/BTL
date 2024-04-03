import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as dayjs from 'dayjs';
import { environment } from 'enviroment/enviroment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderManagementSerivce {
  constructor(private _httpClient: HttpClient) {}

  getOrderOnSearch(body: any): Observable<any> {
    return this._httpClient.get(`${environment.endpoint}/admin/orders`, {
      params: body,
    });
  }

  deleteProduct(id: number): Observable<any> {
    return this._httpClient.delete(
      `${environment.endpoint}/admin/product/` + id,
    );
  }

  confirmOrder(id: number): Observable<any> {
    const params = {
      date: dayjs().toJSON(),
    };
    return this._httpClient.put(
      `${environment.endpoint}/admin/order/${id}/confirm`,
      { params },
    );
  }

  shippingOrder(id: number): Observable<any> {
    const params = {
      date: dayjs().toJSON(),
    };
    return this._httpClient.put(
      `${environment.endpoint}/admin/order/${id}/onway`,
      { params },
    );
  }

  successOrder(id: number): Observable<any> {
    const params = {
      date: dayjs().toJSON(),
    };
    return this._httpClient.put(
      `${environment.endpoint}/admin/order/${id}/success`,
      { params },
    );
  }

  cancelOrder(id: number): Observable<any> {
    const params = {
      date: dayjs().toJSON(),
    };
    return this._httpClient.put(
      `${environment.endpoint}/admin/order/${id}/cancel`,
      { params },
    );
  }

  createInvoice(id: number): Observable<any> {
    const params = {
      date: dayjs().toJSON(),
    };
    return this._httpClient.put(
      `${environment.endpoint}/admin/order/${id}/invoice`,
      { params },
    );
  }
}
