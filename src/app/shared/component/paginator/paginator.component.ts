import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { pageList, paginatorData } from './paginator.types';

@Component({
  selector: 'paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent implements OnInit {
  @Input() paginator: paginatorData;
  @Output() handelPaggingEvent = new EventEmitter();

  pageList: pageList[] = [];

  constructor() {}

  ngOnInit() {
    if (this.paginator.length > this.paginator.limit) {
      const pageTotal = this.paginator.length / this.paginator.limit;
      for (let i = 0; i < Math.ceil(pageTotal); i++) {
        const currPage =
          this.paginator.offset === 0
            ? 0
            : this.paginator.offset / this.paginator.limit;
        this.pageList.push({
          pageIndex: i + 1,
          active: currPage === i,
        });
      }
      this.paginator.length = this.paginator.length;
    }
  }

  handelPagging(page?: number, action?: number) {
    if (!action) {
      this.pageList = this.pageList.map((t) => {
        t.active = t.pageIndex === page;
        return t;
      });
      this.paginator = {
        ...this.paginator,
        offset: this.paginator.limit * (page - 1),
      };
    } else {
      const activePage = this.pageList.findIndex((t) => t.active);
      this.pageList = this.pageList.map((t, i, a) => {
        if (i === activePage) {
          a[i].active = false;
          a[i + action].active = true;
        }
        return t;
      });
      this.paginator = {
        ...this.paginator,
        offset:
          this.paginator.limit *
          (this.pageList.find((t) => t.active).pageIndex - 1),
      };
    }
    this.handelPaggingEvent.emit(this.paginator);
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
