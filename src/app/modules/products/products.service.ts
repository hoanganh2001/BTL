import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'enviroment/enviroment';
import { Observable, map } from 'rxjs';
import { Constant } from 'app/shared/constant';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  readonly SUBMENU_TYPE = Constant.SUBMENU_TYPE;

  constructor(private _httpClient: HttpClient) {}

  getCategoriesOnSearch(body?: any): Observable<any> {
    return this._httpClient.get(`${environment.endpoint}/categories`, {
      params: body,
    });
  }

  getTypeAndFeature(body: any): Observable<any> {
    return this._httpClient.get(`${environment.endpoint}/type-feature-list`, {
      params: body,
    });
  }

  getCategoriesList(): Observable<any> {
    return this._httpClient.get(`${environment.endpoint}/categories-list`);
  }

  getItemsOnSearch(body: any): Observable<any> {
    return this._httpClient.get(`${environment.endpoint}/products`, {
      params: body,
    });
  }

  getBrandsOnCategory(body: any): Observable<any> {
    return this._httpClient.get(
      `${environment.endpoint}/brands-with-category`,
      {
        params: body,
      },
    );
  }

  getProductDetail(id: number): Observable<any> {
    return this._httpClient.get(`${environment.endpoint}/product-detail/` + id);
  }

  addWistList(id: number): Observable<any> {
    return this._httpClient.post(
      `${environment.endpoint}/product-favorite/` + id,
      {},
    );
  }

  getFavoriteProduct(body): Observable<any> {
    return this._httpClient.get(
      `${environment.endpoint}/product-favorite`,
      body,
    );
  }
}
