import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Constant } from '../../constant';
import { Filters, SortFilterData } from './filter-and-sort.type';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'filter-and-sort',
  templateUrl: './filter-and-sort.component.html',
  styleUrls: ['./filter-and-sort.component.scss'],
})
export class FilterAndSortComponent implements OnInit {
  @Input() data?: SortFilterData | Filters;
  @Output() handelFilterCategoryAction = new EventEmitter();
  @Output() handelFilterTypeAction = new EventEmitter();
  @Output() handelSortAction = new EventEmitter();

  sortFormControl = new FormControl('', []);

  readonly TYPE_SORT_FILTER = Constant.TYPE_SORT_FILTER;
  readonly FILTER_TYPE = Constant.FILTER_TYPE;

  constructor() {}

  ngOnInit() {
    if (this.data && this.data['sorts']) {
      this.sortFormControl.setValue(this.data['sorts'][0].id);
    }
  }
  sortData(value: string) {
    this.handelSortAction.emit(value);
  }
  filterCheckBox() {
    const data = this.data?.options?.map((item) => {
      return {
        type: item.type,
        ids: item.options
          .map((t) => {
            if (t.active) return t.id;
          })
          .filter((t) => t),
      };
    });
    console.log(data);

    if (data) this.handelFilterTypeAction.emit(data);
  }
  filterCategory(id: string) {
    console.log(id);

    this.handelFilterCategoryAction.emit(id);
  }
}
