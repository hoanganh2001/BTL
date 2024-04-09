import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'enviroment/enviroment';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private _httpClient: HttpClient) {}

  /**
   * Get approval request list on search pop up
   *
   *
   */
  getItemsOnSearch(body: any): Observable<any> {
    return this._httpClient.get(`${environment.endpoint}/search`, {
      params: body,
    });
  }
}
