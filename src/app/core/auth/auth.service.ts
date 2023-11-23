import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'enviroment/enviroment';
import { CookieService } from 'ngx-cookie-service';
import { Observable, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _authenticated: boolean = false;
  get sessionId(): string {
    if (!this._cookieService.check('SessionID')) {
      return null;
    }
    return this._cookieService.get('SessionID') ?? '';
  }

  constructor(
    private _httpClient: HttpClient,
    private _cookieService: CookieService,
  ) {}

  logIn(body: any): Observable<any> {
    return this._httpClient
      .post(`${environment.endpoint}/login`, body, { withCredentials: true })
      .pipe(
        switchMap((response: any) => {
          this._authenticated = true;

          // Return a new observable with the response
          return of(response);
        }),
      );
  }

  /**
   * Check the authentication status
   */
  check(): Observable<boolean> {
    // Check if the user is logged in
    if (this.sessionId) {
      this._authenticated = true;
      return of(true);
    }

    // Check the access token availability
    if (!this.sessionId) {
      this._authenticated = false;
      return of(false);
    }
  }
}
