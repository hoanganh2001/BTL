import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { NewDetailData, NewListData } from '../news.types';
import { NewsService } from '../news.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-detail',
  templateUrl: './new-detail.component.html',
  styleUrls: ['./new-detail.component.scss'],
})
export class NewDetailComponent implements OnInit {
  newDetail?: NewDetailData;
  latestNewList: NewListData[] = [];
  newId?: string | null;

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

  constructor(
    private _sanitized: DomSanitizer,
    private _newsService: NewsService,
    private _activeRoute: ActivatedRoute,
  ) {}

  ngOnInit() {
    this._activeRoute.paramMap.subscribe((params) => {
      if (params && params.get('newId')) {
        this.newId = params.get('newId');
        if (this.newId) this.getNewDetail(this.newId);
      }
    });
    this.getLastestNewsList();
  }

  getNewDetail(id: string) {
    this._newsService.getNewDetail(id).subscribe((res) => {
      if (res) {
        this.newDetail = res;
        console.log(res.content);
      }
    });
  }

  getLastestNewsList() {
    this._newsService.getNewLastest().subscribe((res) => {
      if (res) {
        this.latestNewList = res;
      }
    });
  }

  getSafeHTML(content: string): SafeHtml {
    return this._sanitized.bypassSecurityTrustHtml(content);
  }
}
