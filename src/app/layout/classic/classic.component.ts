import { Component, OnInit } from '@angular/core';
import RouterConfig from 'src/app/core/config/router.config';

@Component({
  selector: 'classic-layout',
  templateUrl: './classic.component.html',
  styleUrls: ['./classic.component.scss'],
})
export class ClassicComponent implements OnInit {
  isShow: boolean = false;
  readonly routeLink = RouterConfig;
  constructor() {}

  ngOnInit() {}
  showInput() {
    this.isShow = !this.isShow;
  }
}
