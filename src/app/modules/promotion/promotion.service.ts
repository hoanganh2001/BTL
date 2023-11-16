import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/enviroment/enviroment';
import { Observable } from 'rxjs';
import { Constant } from 'src/app/shared/constant';

@Injectable({
  providedIn: 'root',
})
export class PromotionService {
  readonly SUBMENU_TYPE = Constant.SUBMENU_TYPE;

  constructor(private _httpClient: HttpClient) {}

  getPromotionalProduct(body): Observable<any> {
    return this._httpClient.get(`${environment.endpoint}/promotional-product`, {
      params: body,
    });
  }
}
