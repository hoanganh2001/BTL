import { Component, OnInit } from '@angular/core';
import { Constant } from 'src/app/shared/constant';

@Component({
  selector: 'app-loved',
  templateUrl: './loved.component.html',
  styleUrls: ['./loved.component.scss'],
})
export class LovedComponent implements OnInit {
  productList = {
    type: Constant.TYPE_LIST.PRODUCT_ONLY,
    data: [],
  };
  constructor() {}

  ngOnInit() {}
}
