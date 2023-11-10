import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { pageList } from './paginator.types';

@Component({
  selector: 'paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent implements OnInit, OnChanges {
  @Input() length: number;
  @Input() offset: number;
  @Input() limit: number;
  @Output() handelPaggingEvent = new EventEmitter();

  pageList: pageList[] = [];

  constructor() {}

  ngOnInit() {
    if (this.length > this.limit) {
      const pageTotal = this.length / this.limit;
      for (let i = 0; i < Math.ceil(pageTotal); i++) {
        const currPage = this.offset === 0 ? 0 : this.offset / this.limit;
        this.pageList.push({
          pageIndex: i + 1,
          active: currPage === i,
        });
      }
      this.length = this.length;
    }
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if ('length' in changes || 'offset' in changes) {
      if (
        this.length > this.limit ||
        (changes['offset'].currentValue === 0 &&
          changes['offset'].previousValue !== 0)
      ) {
        this.pageList = [];
        const pageTotal = this.length / this.limit;
        for (let i = 0; i < Math.ceil(pageTotal); i++) {
          const currPage = this.offset === 0 ? 0 : this.offset / this.limit;
          this.pageList.push({
            pageIndex: i + 1,
            active: currPage === i,
          });
        }
        this.length = this.length;
      }
    }
  }
  handelPagging(page?: number, action?: number) {
    if (!action) {
      this.pageList = this.pageList.map((t) => {
        t.active = t.pageIndex === page;
        return t;
      });
      this.handelPaggingEvent.emit({
        length: this.length,
        limit: this.limit,
        offset: this.limit * (page - 1),
      });
    } else {
      const activePage = this.pageList.findIndex((t) => t.active);
      this.pageList = this.pageList.map((t, i, a) => {
        if (i === activePage) {
          a[i].active = false;
          a[i + action].active = true;
        }
        return t;
      });
      this.handelPaggingEvent.emit({
        length: this.length,
        limit: this.limit,
        offset:
          this.limit * (this.pageList.find((t) => t.active).pageIndex - 1),
      });
    }
  }

  isIndexShow(i: number, length: number): boolean {
    const activePage = this.pageList.find((t) => t.active).pageIndex;
    if (activePage > 3 && activePage < length - 3) {
      return i >= activePage - 2 && i <= activePage + 2;
    } else if (activePage >= length - 3) {
      return i > length - 5;
    }
    return i < 6;
  }
}
