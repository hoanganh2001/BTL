import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'enviroment/enviroment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductManagementSerivce {
  constructor(private _httpClient: HttpClient) {}

  getItemsOnSearch(body: any): Observable<any> {
    return this._httpClient.get(`${environment.endpoint}/admin/products`, {
      params: body,
    });
  }

  getProductDetail(id: number): Observable<any> {
    return this._httpClient.get(`${environment.endpoint}/product-detail/` + id);
  }

  deleteItem(id: number): Observable<any> {
    return this._httpClient.delete(
      `${environment.endpoint}/admin/product/` + id,
    );
  }
}
