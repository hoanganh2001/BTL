import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'enviroment/enviroment';
import { Observable } from 'rxjs';
import { NewsList } from './news.type';
import { BaseResponse } from 'app/core/models/base-response.model';

@Injectable({
  providedIn: 'root',
})
export class NewManagementSerivce {
  constructor(private _httpClient: HttpClient) {}

  getNewsOnSearch(body: any): Observable<BaseResponse<NewsList>> {
    return this._httpClient.get(`${environment.endpoint}/admin/news`, {
      params: body,
    });
  }

  deleteNew(id: number): Observable<any> {
    return this._httpClient.delete(`${environment.endpoint}/admin/new/` + id);
  }

  createNew(body): Observable<any> {
    return this._httpClient.post(`${environment.endpoint}/admin/new`, body);
  }

  editNew(body, id: number): Observable<any> {
    return this._httpClient.put(
      `${environment.endpoint}/admin/new/` + id,
      body,
    );
  }

  uploadFile(id: number, formData: any): Observable<any> {
    return this._httpClient.post(
      `${environment.endpoint}/admin/new/${id}/images`,
      formData,
    );
  }
}
