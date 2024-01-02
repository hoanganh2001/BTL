import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'enviroment/enviroment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryManagementSerivce {
  constructor(private _httpClient: HttpClient) {}

  getCategories(body: any): Observable<any> {
    return this._httpClient.get(`${environment.endpoint}/admin/categories`, {
      params: body,
    });
  }
}
