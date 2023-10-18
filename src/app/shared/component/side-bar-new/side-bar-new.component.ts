import { Component, Input, OnInit } from '@angular/core';
import { sideBarCategory, sideBarNewList } from './side-bar-newt.type';

@Component({
  selector: 'side-bar-new',
  templateUrl: './side-bar-new.component.html',
  styleUrls: ['./side-bar-new.component.scss'],
})
export class SideBarNewComponent implements OnInit {
  @Input() newList?: sideBarNewList[];
  @Input() categories?: sideBarCategory[];
  constructor() {}

  ngOnInit() {}
}
