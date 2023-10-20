import { Component, Input, OnInit } from '@angular/core';
import { SubmenuData } from './sub-menu.type';
import { Constant } from 'src/app/shared/constant';

@Component({
  selector: 'sub-menu',
  templateUrl: './sub-menu.component.html',
  styleUrls: ['./sub-menu.component.scss'],
})
export class SubMenuComponent implements OnInit {
  @Input() subMenu?: SubmenuData;
  readonly SUBMENU_TYPE = Constant.SUBMENU_TYPE;
  constructor() {}
  selected_category: any = [];
  hoverList(a: any) {
    console.log(a);
  }
  ngOnInit() {
    this.selected_category = this.subMenu?.category?.data.find(
      (t) => t.active,
    )?.data;
  }

  hoverIn(id: number | string) {
    this.subMenu?.category?.data.forEach((item) => {
      item.active = item.id === id;
    });
    this.selected_category = this.subMenu?.category?.data.find(
      (t) => t.active,
    )?.data;
  }
}
