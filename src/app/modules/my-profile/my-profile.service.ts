import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'enviroment/enviroment';
import { Observable } from 'rxjs';
import { Constant } from 'app/shared/constant';

@Injectable({
  providedIn: 'root',
})
export class MyProfileService {
  readonly SUBMENU_TYPE = Constant.SUBMENU_TYPE;

  constructor(private _httpClient: HttpClient) {}

  getProfile(): Observable<any> {
    return this._httpClient.get(`${environment.endpoint}/my-profile`);
  }
}
