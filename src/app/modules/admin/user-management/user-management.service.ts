import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'enviroment/enviroment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserManagementSerivce {
  constructor(private _httpClient: HttpClient) {}

  getUsersOnSearch(body: any): Observable<any> {
    return this._httpClient.get(`${environment.endpoint}/admin/users`, {
      params: body,
    });
  }

  getUserDetail(id: number): Observable<any> {
    return this._httpClient
      .get(`${environment.endpoint}/admin/user/` + id)
      .pipe();
  }

  createUser(body): Observable<any> {
    return this._httpClient.post(`${environment.endpoint}/admin/user`, body);
  }

  editUser(body, id: number): Observable<any> {
    return this._httpClient.put(
      `${environment.endpoint}/admin/user/` + id,
      body,
    );
  }

  updateUserStatus(body, id: number): Observable<any> {
    return this._httpClient.put(
      `${environment.endpoint}/admin/user/status/` + id,
      body,
    );
  }

  changePassword(body, id: number): Observable<any> {
    return this._httpClient.put(
      `${environment.endpoint}/admin/user/change-password/` + id,
      body,
    );
  }
}
