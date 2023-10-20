import { Component, OnInit } from '@angular/core';
import RouterConfig from 'src/app/core/config/router.config';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss'],
})
export class MyProfileComponent implements OnInit {
  readonly MyProfileURL = RouterConfig.MY_PROFILE;

  constructor() {}

  ngOnInit() {}
}
