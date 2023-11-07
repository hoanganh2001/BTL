import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/enviroment/enviroment';
import { productResponseData } from '../home/home.types';
import { Observable, map } from 'rxjs';
import { Constant } from 'src/app/shared/constant';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  readonly SUBMENU_TYPE = Constant.SUBMENU_TYPE;

  constructor(private _httpClient: HttpClient) {}

  getCategoriesOnSearch(): Observable<any> {
    return this._httpClient.get(`${environment.endpoint}/categories`);
  }
}
