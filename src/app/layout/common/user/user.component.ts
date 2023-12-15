import { Component, Input, OnInit } from '@angular/core';
import { MatMenu } from '@angular/material/menu';
import { Router } from '@angular/router';
import { AuthService } from 'app/core/auth/auth.service';
import RouterConfig from 'app/core/config/router.config';
import { CookieService } from 'ngx-cookie-service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  @Input() inAdminPage: boolean = false;
  readonly routerURL = RouterConfig;
  isLogIn: boolean = false;
  isAdmin: boolean = false;
  constructor(
    private _router: Router,
    private _cookieService: CookieService,
    private _authService: AuthService,
  ) {}

  ngOnInit() {
    this._authService.check().subscribe((value) => {
      this.isLogIn = value;
    });
    this.getUserRole();
  }

  async getUserRole() {
    this.isAdmin = await this._authService.checkAdmin();
  }

  handleClickUser() {
    this._authService.check().subscribe((value) => {
      this.isLogIn = value;
      if (!this.isLogIn) return this.redirectTo(this.routerURL.SIGN_IN);
    });
  }

  redirectTo(url: string) {
    this._router.navigateByUrl(url);
  }

  signOut() {
    this._cookieService.deleteAll('/');
    window.location.href = this.routerURL.HOME;
  }
}
