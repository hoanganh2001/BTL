import { Component, OnInit } from '@angular/core';
import { paginatorData } from 'app/shared/component/paginator/paginator.types';
import { debounceTime, map } from 'rxjs';
import { SortHeader } from '../admin.types';
import { FormControl } from '@angular/forms';
import RouterConfig from 'app/core/config/router.config';
import { Params, Router } from '@angular/router';
import { Constant } from 'app/shared/constant';
import {
  MatDialogRef,
  MatDialogConfig,
  MatDialog,
} from '@angular/material/dialog';
import { CreateNewComponent } from './create/create.component';
import { NewsList } from './news.type';
import { BaseResponse } from 'app/core/models/base-response.model';
import { NewManagementSerivce } from './news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsManagementComponent implements OnInit {
  searchControl = new FormControl('');
  confirmDialogRef: MatDialogRef<CreateNewComponent>;

  readonly RouteConfig = RouterConfig;

  constructor(
    private _newManagementService: NewManagementSerivce,
    private _router: Router,
    public _dialog: MatDialog,
  ) {}
  sort: SortHeader = {
    active: '',
    direction: '',
  };
  paginator: paginatorData = {
    length: 0,
    limit: 20,
    offset: 0,
    page: 0,
  };
  newSearchBody: any = {};
  productList: any[];
  ngOnInit() {
    this.newSearchBody = {
      limit: this.paginator.limit,
      offset: this.paginator.offset,
    };
    this.getNewList(this.newSearchBody);

    this.searchControl.valueChanges
      .pipe(
        debounceTime(300),
        map((value) => value.trim()),
      )
      .subscribe((value) => {
        if (value) {
          this.newSearchBody = {
            ...this.newSearchBody,
            offset: 0,
            name: value,
          };
          this.getNewList(this.newSearchBody);
        } else if (value === '' && !this.searchControl.pristine) {
          delete this.newSearchBody['name'];
          this.getNewList(this.newSearchBody);
        }
      });
  }

  getNewList(body: any) {
    this._newManagementService
      .getNewsOnSearch(body)
      .pipe(
        map((value: BaseResponse<NewsList>) => {
          value.data = value.data.map((res) => ({
            id: res.id,
            name: res.name,
            content: res.content,
            create_date: res.create_date,
            update_date: res.update_date,
            view_number: res.view_number,
            thumbnail_id: res.thumbnail_id,
            thumbnail_url:
              (res.thumbnail_url.includes('/')
                ? Constant.IMG_DIR.SHOP
                : Constant.IMG_DIR.GOOGLE_DRIVE) + res.thumbnail_url,
            author_id: res.author_id,
            author: res.author,
          }));
          return value;
        }),
      )
      .subscribe({
        next: (res: BaseResponse<NewsList>) => {
          if (res) {
            this.productList = res.data;
            this.paginator.length = res.meta.length;
            this.paginator.offset = res.meta.offset ? res.meta.offset : 0;
            this.paginator.limit = res.meta.limit;
            this.paginator.page =
              res.meta.offset === 0 ? 0 : res.meta.offset / res.meta.limit;
          }
        },
      });
  }
  changePage(pagging) {
    // update payload body
    this.newSearchBody = {
      ...this.newSearchBody,
      limit: pagging.pageSize,
      offset: pagging.pageIndex * pagging.pageSize,
    };
    // call api get list form
    this.getNewList(this.newSearchBody);
  }

  handleSortItem(data) {
    this.newSearchBody = {
      ...this.newSearchBody,
      limit: this.paginator.limit,
      offset: 0,
      sort_by: data.direction,
      order_by: data.active,
    };

    this.getNewList(this.newSearchBody);
  }

  deleteNew(e, id: number) {
    e.stopPropagation();
    this._newManagementService.deleteNew(id).subscribe((res) => {
      this.getNewList(this.newSearchBody);
    });
  }

  openProductPopup(type: string, newItem?: NewsList, e?) {
    if (type === 'edit') e.stopPropagation();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      type: type,
      item: newItem,
    };
    dialogConfig.width = '100%';
    dialogConfig.height = '80vh';

    this.confirmDialogRef = this._dialog.open(CreateNewComponent, dialogConfig);
    this.confirmDialogRef.afterClosed().subscribe((isChange) => {
      if (isChange) this.getNewList(this.newSearchBody);
    });
  }
}
