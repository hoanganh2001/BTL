import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import RouterConfig from 'app/core/config/router.config';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchFormControl = new FormControl('', []);

  readonly routerURL = RouterConfig;
  isShow: boolean = false;

  constructor() {}

  ngOnInit() {}

  showInput() {
    if (this.searchFormControl.value === '') this.isShow = !this.isShow;
  }
}
