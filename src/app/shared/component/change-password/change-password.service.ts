import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ChangePassword } from './change-password.types';
import { environment } from 'enviroment/enviroment';

@Injectable({ providedIn: 'root' })
export class Handle2fAuth {
  //constructor
  constructor(private _httpClient: HttpClient) {}

  changePassword(model: ChangePassword): Observable<any> {
    return this._httpClient.post(
      `${environment.endpoint}/change-password`,
      model,
    );
  }
}
