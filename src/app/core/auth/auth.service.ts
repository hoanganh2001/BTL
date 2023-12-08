import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'enviroment/enviroment';
import { CookieService } from 'ngx-cookie-service';
import {
  Observable,
  of,
  switchMap,
  map,
  BehaviorSubject,
  tap,
  lastValueFrom,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _authenticated: boolean = false;
  private _role: string = '';
  test = new BehaviorSubject<any>('');

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
    return this._httpClient.post(`${environment.endpoint}/login`, body).pipe(
      switchMap((response: any) => {
        this._authenticated = true;
        this._role = response.role;
        // Return a new observable with the response
        return of(response);
      }),
    );
  }

  signUp(body: any): Observable<any> {
    return this._httpClient.post(`${environment.endpoint}/sign-up`, body).pipe(
      switchMap((response: any) => {
        this._authenticated = true;
        // Return a new observable with the response
        return of(response);
      }),
    );
  }

  getRole(): Observable<any> {
    return this._httpClient.get(`${environment.endpoint}/account-role`).pipe(
      map((res: any) => res.data),
      // Store the last postcode in a local property.
      tap((value) => (this._role = value)),
      // The postcode is outputted here to all subscribers
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

  async checkAdmin(): Promise<boolean> {
    if (this.sessionId) {
      if (this._role === '') {
        const a = await lastValueFrom(this.getRole());
        return a === 'admin';
      } else if (this._role === 'admin') {
        return true;
      }
    }
    if (!this.sessionId) {
      return false;
    }
  }
}
