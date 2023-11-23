import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import RouterConfig from 'app/core/config/router.config';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  readonly routerURL = RouterConfig;

  constructor(private _router: Router) {}

  ngOnInit() {}

  redirectToSignIn() {
    this._router.navigateByUrl(this.routerURL.MY_PROFILE);
  }
}
