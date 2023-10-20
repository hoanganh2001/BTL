import { Component, OnInit } from '@angular/core';
import RouterConfig from 'src/app/core/config/router.config';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  readonly routerURL = RouterConfig;

  constructor() {}

  ngOnInit() {}
}
