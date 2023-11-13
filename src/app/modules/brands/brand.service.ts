import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { environment } from 'src/enviroment/enviroment';
import { brandResponseData } from './brand.types';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  constructor(private _httpClient: HttpClient) {}

  private brandId: BehaviorSubject<number> = new BehaviorSubject<number>(null);
  public brandIdSubject$: Observable<number> = this.brandId.asObservable();
  getBrandId(id: number) {
    this.brandId.next(id);
  }

  getBrands(body: any): Observable<any> {
    return this._httpClient.get(`${environment.endpoint}/brands`, {
      params: body,
    });
  }

  getBrandsCategories(body: any): Observable<any> {
    return this._httpClient.get(`${environment.endpoint}/categories-of-brand`, {
      params: body,
    });
  }
}
