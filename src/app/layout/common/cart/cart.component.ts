import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import RouterConfig from 'src/app/core/config/router.config';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  constructor(private _router: Router) {}

  ngOnInit() {}

  redirectTo() {
    this._router.navigateByUrl(RouterConfig.ORDER);
  }
}
