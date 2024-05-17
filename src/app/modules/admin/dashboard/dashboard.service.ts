import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'enviroment/enviroment';
import { Observable } from 'rxjs';
import { BaseResponse } from 'app/core/models/base-response.model';

@Injectable({
  providedIn: 'root',
})
export class DashboardSerivce {
  constructor(private _httpClient: HttpClient) {}

  getStatistical(): Observable<BaseResponse<any>> {
    return this._httpClient.get(`${environment.endpoint}/admin/statistical`);
  }

  getCurrentStatistical(): Observable<BaseResponse<any>> {
    return this._httpClient.get(
      `${environment.endpoint}/admin/curent-statistical`,
    );
  }
}
