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

  getCategoryById(id: number): Observable<any> {
    return this._httpClient.get(`${environment.endpoint}/admin/category/${id}`);
  }

  createCategory(body): Observable<any> {
    return this._httpClient.post(
      `${environment.endpoint}/admin/category`,
      body,
    );
  }

  updateCategory(body, id: number): Observable<any> {
    return this._httpClient.put(
      `${environment.endpoint}/admin/category/${id}`,
      body,
    );
  }

  deleteCategory(id: number): Observable<any> {
    return this._httpClient.delete(
      `${environment.endpoint}/admin/category/${id}`,
    );
  }
}
