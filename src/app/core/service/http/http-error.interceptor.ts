import RouterConfig from '../../config/router.config';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { catchError, from, lastValueFrom, tap } from 'rxjs';

import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Router } from '@angular/router';
import { throwError } from 'rxjs/internal/observable/throwError';
import { ResponseCodeEnum } from '../../enums/response-code.enums';

export const MAXRETRIES = 2;
export const DELAYMS = 2000;

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  private isShowNotification: boolean = true;
  constructor(private _cookieService: CookieService, private _router: Router) {}
  /**
   * Intercept
   *
   * @param request
   * @param next
   */
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    let newHeaders = new HttpHeaders();

    const newReq = request.clone({
      withCredentials: true,
    });

    return from(this.handle(newReq, next));
  }

  async handle(req: HttpRequest<any>, next: HttpHandler) {
    return await lastValueFrom(
      next.handle(req).pipe(
        tap(async (event: any) => {
          if (
            event.body &&
            event.body?.code &&
            event.body?.code == ResponseCodeEnum.UNAUTHORIZED
          ) {
            this._cookieService.deleteAll('/');
          }

          if (
            event.body &&
            event.body?.code &&
            event.body?.code === ResponseCodeEnum.FORBIDDEN
          ) {
            if (this.isShowNotification)
              await this._router.navigate([RouterConfig.HOME]);
          }
        }),
        catchError((error) => {
          // Catch "401 Unauthorized" responses
          if (
            error instanceof HttpErrorResponse &&
            error.status === ResponseCodeEnum.UNAUTHORIZED
          ) {
            this._cookieService.deleteAll('/');
          }

          return throwError(error);
        }),
      ),
    );
  }
}
