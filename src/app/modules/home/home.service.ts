import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/enviroment/enviroment';
import { productData } from '../products/products.type';
import { productResponseData } from './home.types';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private _httpClient: HttpClient) {}

  /**
   * Get approval request list on search pop up
   *
   *
   */
  getItemsOnSearch(body: any): Observable<any> {
    return this._httpClient
      .get(`${environment.endpoint}/products`, {
        params: body,
      })
      .pipe(
        map((res: any) => {
          return res.data.map((item: productResponseData) => ({
            id: item._id,
            category: item.category,
            cost: item.cost,
            create_date: item.create_date,
            discount: item.discount,
            img: item.img,
            name: item.name,
            view: item.view,
          }));
        }),
      );
  }
}
