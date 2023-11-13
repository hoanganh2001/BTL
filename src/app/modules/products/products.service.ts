import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/enviroment/enviroment';
import { Observable, map } from 'rxjs';
import { Constant } from 'src/app/shared/constant';

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

  getProductDetail(id: string): Observable<any> {
    return this._httpClient.get(`${environment.endpoint}/product-detail/` + id);
  }
}
