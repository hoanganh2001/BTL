import { Component, Input, OnInit } from '@angular/core';
import { Constant } from '../../constant';
import { SortFilterData } from './filter-and-sort.type';

@Component({
  selector: 'filter-and-sort',
  templateUrl: './filter-and-sort.component.html',
  styleUrls: ['./filter-and-sort.component.scss'],
})
export class FilterAndSortComponent implements OnInit {
  @Input() data?: SortFilterData;

  readonly TYPE_SORT_FILTER = Constant.TYPE_SORT_FILTER;
  readonly FILTER_TYPE = Constant.FILTER_TYPE;

  constructor() {}

  ngOnInit() {}
  sortData() {}
  filterData() {}
}
