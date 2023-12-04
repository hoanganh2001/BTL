import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'enviroment/enviroment';
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
            id: item.id,
            price: item.price,
            create_date: item.create_date,
            discount: item.discount,
            image: item.image,
            name: item.name,
            view: item.view_number,
            gift: item.gift_id,
            isFavorite: item.favorite,
          }));
        }),
      );
  }
}
