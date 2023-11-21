import { Component, OnInit } from '@angular/core';
import { NewListData, paginatorParams } from '../news.types';
import { NewsService } from '../news.service';
import RouterConfig from 'app/core/config/router.config';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.scss'],
})
export class NewListComponent implements OnInit {
  constructor(private _newsService: NewsService) {}

  readonly newsURL = RouterConfig.NEWS + '/';

  newList: NewListData[] = [];

  latestNewList: NewListData[] = [];

  categories = [
    {
      id: 'review',
      name: 'Đánh giá sản phẩm',
      count: 106,
    },
    {
      id: 'knowledge',
      name: 'Kiến thức âm thanh',
      count: 124,
    },
    {
      id: 'new',
      name: 'Tin tức',
      count: 27,
    },
    {
      id: 'video',
      name: 'Videos',
      count: 1256,
    },
    {
      id: 'event',
      name: 'Sự kiện',
      count: 3,
    },
  ];

  listLimit: paginatorParams = {
    limit: 10,
    offset: 0,
  };

  listTotal = 0;

  ngOnInit() {
    this.getLastestNewsList();
    this.getOtherNewsList(this.listLimit);
  }

  getLastestNewsList() {
    this._newsService.getNewLastest().subscribe((res) => {
      if (res) {
        this.latestNewList = res;
      }
    });
  }

  getOtherNewsList(body: paginatorParams) {
    this._newsService.getNewList(body).subscribe((res) => {
      if (res) {
        if (this.newList.length > 0) {
          this.newList = this.newList.concat(res.data);
        } else {
          this.newList = res.data;
          this.listTotal = res.length;
        }
      }
    });
  }

  showMore() {
    this.listLimit.offset += this.listLimit.limit;
    this.getOtherNewsList(this.listLimit);
  }
}
