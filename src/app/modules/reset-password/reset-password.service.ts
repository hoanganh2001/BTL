import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'enviroment/enviroment';
import { Observable } from 'rxjs';
import { Constant } from 'app/shared/constant';

@Injectable({
  providedIn: 'root',
})
export class ResetPasswordService {
  readonly SUBMENU_TYPE = Constant.SUBMENU_TYPE;

  constructor(private _httpClient: HttpClient) {}

  getOTP(body): Observable<any> {
    return this._httpClient.post(`${environment.endpoint}/sendOTP`, body);
  }

  verifyOTP(body): Observable<any> {
    return this._httpClient.post(`${environment.endpoint}/verifyOTP`, body);
  }

  resetPassword(body): Observable<any> {
    return this._httpClient.put(`${environment.endpoint}/reset-password`, body);
  }
}
