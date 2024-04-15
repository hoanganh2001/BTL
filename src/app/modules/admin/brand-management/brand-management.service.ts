import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'enviroment/enviroment';
import { Observable } from 'rxjs';
import { BrandList } from './brand-management.type';
import { BaseResponse } from 'app/core/models/base-response.model';

@Injectable({
  providedIn: 'root',
})
export class BrandManagementSerivce {
  constructor(private _httpClient: HttpClient) {}

  getBrandsOnSearch(body: any): Observable<BaseResponse<BrandList>> {
    return this._httpClient.get(`${environment.endpoint}/admin/brands`, {
      params: body,
    });
  }

  deleteBrand(id: number): Observable<any> {
    return this._httpClient.delete(`${environment.endpoint}/admin/brand/` + id);
  }

  createBrand(body): Observable<any> {
    return this._httpClient.post(`${environment.endpoint}/admin/brand`, body);
  }

  editBrand(body, id: number): Observable<any> {
    return this._httpClient.put(
      `${environment.endpoint}/admin/brand/` + id,
      body,
    );
  }

  uploadFile(id: number, formData: any): Observable<any> {
    return this._httpClient.post(
      `${environment.endpoint}/admin/brand/${id}/images`,
      formData,
    );
  }
}
