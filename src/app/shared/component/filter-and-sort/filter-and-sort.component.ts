import { map } from 'rxjs';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Constant } from '../../constant';
import { Filters, SortFilterData, rangeInput } from './filter-and-sort.type';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'filter-and-sort',
  templateUrl: './filter-and-sort.component.html',
  styleUrls: ['./filter-and-sort.component.scss'],
})
export class FilterAndSortComponent implements OnInit {
  @Input() data?: Filters | SortFilterData;
  @Output() handelFilterCategoryAction = new EventEmitter();
  @Output() handelFilterTypeAction = new EventEmitter();
  @Output() handelFilterRangeAction = new EventEmitter();
  @Output() handelSortAction = new EventEmitter();
  sortFormControl = new FormControl('', []);
  rangeForm: FormGroup;

  readonly TYPE_SORT_FILTER = Constant.TYPE_SORT_FILTER;
  readonly FILTER_TYPE = Constant.FILTER_TYPE;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    if (this.data && this.data['sorts']) {
      this.sortFormControl.setValue(this.data['sorts'][0].id);
    }

    if (this.data && this.data.type === this.FILTER_TYPE.RANGE_INPUT) {
      this.rangeForm = this._formBuilder.group({
        startRange: [null],
        endRange: [null],
      });
      let tempValue;
      this.rangeForm.valueChanges
        .pipe(
          map((value) => {
            if (value.startRange) value.startRange = value.startRange * 1000000;
            if (value.endRange) value.endRange = value.endRange * 1000000;
            return value;
          }),
        )
        .subscribe((value: rangeInput) => {
          if (value) {
            if (JSON.stringify(tempValue) !== JSON.stringify(value)) {
              tempValue = value;
              this.filterRange(value);
            }
          }
        });
    }
  }
  sortData(value: string) {
    this.handelSortAction.emit(value);
  }
  filterType(id?: string) {
    if (id || this.data.type === this.TYPE_SORT_FILTER.FILTER_BRAND) {
      const data = this.data?.options
        ?.map((item) => {
          if (id && item.id === id) {
            item.active = !item.active;
          }
          return item.active ? item.id : null;
        })
        .filter((t) => t);
      if (data)
        this.handelFilterTypeAction.emit([
          {
            type: this.data?.id,
            ids: data,
          },
        ]);
    } else {
      const data = this.data?.options?.map((item) => {
        return {
          type: this.data?.id,
          ids: item.options
            .map((t) => {
              if (t.active) return t.id;
            })
            .filter((t) => t),
        };
      });
      if (data) this.handelFilterTypeAction.emit(data);
    }
  }

  filterRange(range: rangeInput) {
    this.handelFilterRangeAction.emit(range);
  }

  filterCategory(id: number) {
    this.rangeForm?.reset();
    this.handelFilterCategoryAction.emit(id);
  }
}
