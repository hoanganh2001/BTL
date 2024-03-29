import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'enviroment/enviroment';
import {
  NewDetailResponseData,
  NewListResponseData,
  paginatorParams,
} from './news.types';
import { BaseResponse } from 'app/core/models/base-response.model';
import { formatCKContent, getImgUrl } from 'app/shared/constant';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private _httpClient: HttpClient) {}

  /**
   * Get approval request list on search pop up
   *
   *
   */
  getNewLastest(): Observable<any> {
    return this._httpClient.get(`${environment.endpoint}/news-lastest`).pipe(
      map((res: BaseResponse<NewListResponseData>) => {
        if (res && res.data)
          return res.data.map((item: NewListResponseData) => ({
            id: item.id,
            create_date: item.create_date,
            img: getImgUrl(item.image),
            name: item.name,
            view: item.view,
            author: item.author,
          }));
      }),
    );
  }

  getNewList(body: any): Observable<any> {
    return this._httpClient
      .get(`${environment.endpoint}/news-list`, { params: body })
      .pipe(
        map((res: BaseResponse<NewListResponseData>) => {
          if (res && res.data)
            return {
              data: res.data.map((item: NewListResponseData) => ({
                id: item.id,
                create_date: item.create_date,
                img: getImgUrl(item.image),
                name: item.name,
                view: item.view,
                author: item.author,
              })),
              length: res.meta.length,
            };
        }),
      );
  }

  getNewDetail(id: string) {
    return this._httpClient.get(`${environment.endpoint}/new/` + id).pipe(
      map((res: any) => {
        if (res && res.data) {
          return {
            id: res.data[0].id,
            create_date: res.data[0].create_date,
            img: getImgUrl(res.data[0].image),
            name: res.data[0].name,
            view: res.data[0].view,
            author: res.data[0].author,
            content: formatCKContent(res.data[0].content),
          };
        }
      }),
    );
  }
}
