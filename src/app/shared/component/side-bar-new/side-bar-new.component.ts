import { Component, Input, OnInit } from '@angular/core';
import { sideBarCategory } from './side-bar-newt.type';
import { NewListData } from 'src/app/modules/news/news.types';
import RouterConfig from 'src/app/core/config/router.config';

@Component({
  selector: 'side-bar-new',
  templateUrl: './side-bar-new.component.html',
  styleUrls: ['./side-bar-new.component.scss'],
})
export class SideBarNewComponent implements OnInit {
  @Input() newList?: NewListData[];
  @Input() categories?: sideBarCategory[];

  readonly newsURL = RouterConfig.NEWS + '/';

  constructor() {}

  ngOnInit() {}
}
