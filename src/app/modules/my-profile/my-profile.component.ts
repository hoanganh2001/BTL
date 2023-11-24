import { Component, OnInit } from '@angular/core';
import RouterConfig from 'app/core/config/router.config';
import { MyProfileService } from './my-profile.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss'],
})
export class MyProfileComponent implements OnInit {
  readonly MyProfileURL = RouterConfig.MY_PROFILE;

  constructor(private _myProfile: MyProfileService) {}

  ngOnInit() {}
}
