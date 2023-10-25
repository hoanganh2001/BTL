import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/enviroment/enviroment';
import {
  NewDetailResponseData,
  NewListResponseData,
  paginatorParams,
} from './news.types';
import { BaseResponse } from 'src/app/core/models/base-response.model';

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
            id: item._id,
            create_date: item.create_date,
            img: item.img,
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
                id: item._id,
                create_date: item.create_date,
                img: item.img,
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
    return this._httpClient
      .get(`${environment.endpoint}/new`, { params: { id: id } })
      .pipe(
        map((res: any) => {
          if (res && res.data) {
            return {
              id: res.data._id,
              create_date: res.data.create_date,
              img: res.data.img,
              name: res.data.name,
              view: res.data.view,
              author: res.data.author,
              content: res.data.content,
            };
          }
        }),
      );
  }
}
