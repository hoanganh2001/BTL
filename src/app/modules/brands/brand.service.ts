import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/enviroment/enviroment';
import { brandResponseData } from './brand.types';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  constructor(private _httpClient: HttpClient) {}

  /**
   * Get approval request list on search pop up
   *
   *
   */
  getBrands(body: any): Observable<any> {
    return this._httpClient.get(`${environment.endpoint}/brands`, {
      params: body,
    });
  }
}
