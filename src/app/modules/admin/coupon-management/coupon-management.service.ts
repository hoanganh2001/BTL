import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'enviroment/enviroment';
import { Observable } from 'rxjs';
import { Coupon } from './coupon-management.type';
import { BaseResponse } from 'app/core/models/base-response.model';

@Injectable({
  providedIn: 'root',
})
export class CouponManagementSerivce {
  constructor(private _httpClient: HttpClient) {}

  getCouponsOnSearch(body: any): Observable<BaseResponse<Coupon>> {
    return this._httpClient.get(`${environment.endpoint}/admin/coupons`, {
      params: body,
    });
  }

  deleteCoupon(id: number): Observable<any> {
    return this._httpClient.delete(
      `${environment.endpoint}/admin/coupon/` + id,
    );
  }

  createCoupon(body): Observable<any> {
    return this._httpClient.post(`${environment.endpoint}/admin/coupon`, body);
  }

  editCoupon(body, id: number): Observable<any> {
    return this._httpClient.put(
      `${environment.endpoint}/admin/coupon/` + id,
      body,
    );
  }
}
