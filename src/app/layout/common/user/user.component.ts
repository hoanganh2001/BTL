import { Component, OnInit } from '@angular/core';
import { MatMenu } from '@angular/material/menu';
import { Router } from '@angular/router';
import { AuthService } from 'app/core/auth/auth.service';
import RouterConfig from 'app/core/config/router.config';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  readonly routerURL = RouterConfig;
  isLogIn: boolean = false;

  constructor(
    private _router: Router,
    private _cookieService: CookieService,
    private _authService: AuthService,
  ) {}

  ngOnInit() {
    this._authService.check().subscribe((value) => {
      this.isLogIn = value;
    });
  }

  handleClickUser() {
    this._authService.check().subscribe((value) => {
      this.isLogIn = value;
      if (!this.isLogIn) return this.redirectToSignIn();
    });
  }

  redirectToSignIn() {
    this._router.navigateByUrl(this.routerURL.SIGN_IN);
  }

  redirectToMyProfile() {
    this._router.navigateByUrl(this.routerURL.MY_PROFILE);
  }

  signOut() {
    this._cookieService.deleteAll('/');
    window.location.href = this.routerURL.HOME;
  }
}
