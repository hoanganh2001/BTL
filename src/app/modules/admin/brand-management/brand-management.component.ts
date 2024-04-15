import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  MatDialogRef,
  MatDialog,
  MatDialogConfig,
} from '@angular/material/dialog';
import RouterConfig from 'app/core/config/router.config';
import { BaseResponse } from 'app/core/models/base-response.model';
import { NotificationService } from 'app/core/service/notification';
import { DialogConfirmComponent } from 'app/shared/component/dialog-confirm/dialog-confirm.component';
import { paginatorData } from 'app/shared/component/paginator/paginator.types';
import { Constant, getConfirmData } from 'app/shared/constant';
import { debounceTime, map } from 'rxjs';
import { SortHeader } from '../admin.types';
import { BrandManagementSerivce } from './brand-management.service';
import { BrandList } from './brand-management.type';
import { CreateBrandComponent } from './create/create.component';

@Component({
  selector: 'app-brand-management',
  templateUrl: './brand-management.component.html',
  styleUrls: ['./brand-management.component.scss'],
})
export class BrandManagementComponent implements OnInit {
  searchControl = new FormControl('');
  confirmDialogRef: MatDialogRef<CreateBrandComponent>;
  dialogRef: MatDialogRef<DialogConfirmComponent>;

  readonly RouteConfig = RouterConfig;

  constructor(
    private _brandManagementService: BrandManagementSerivce,
    private _notiService: NotificationService,
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
    this._brandManagementService
      .getBrandsOnSearch(body)
      .pipe(
        map((value: BaseResponse<BrandList>) => {
          value.data = value.data.map((res) => ({
            id: res.id,
            name: res.name,
            thumbnail_url: res.thumbnail_url?.includes('https:')
              ? res.thumbnail_url
              : (res.thumbnail_url?.includes('/')
                  ? Constant.IMG_DIR.SHOP
                  : Constant.IMG_DIR.GOOGLE_DRIVE) + res.thumbnail_url,
          }));
          return value;
        }),
      )
      .subscribe({
        next: (res: BaseResponse<BrandList>) => {
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
    const confirmData = getConfirmData('delete');
    this.dialogRef = this._dialog.open(DialogConfirmComponent, {
      data: {
        order_id: id,
        title: confirmData,
      },
      autoFocus: false,
      restoreFocus: false,
      width: '500px',
      minHeight: confirmData.input ? '200px' : '150px',
    });
    this.dialogRef.afterClosed().subscribe((data) => {
      if (data) {
        this._brandManagementService.deleteBrand(data.id).subscribe({
          next: (res) => {
            if (res.message) {
              this._notiService.showSuccess(res.message);
              this.getNewList(this.newSearchBody);
            }
          },
          error(err) {
            this._notiService?.showError(err.error.message);
          },
        });
      }
    });
  }

  openProductPopup(type: string, newItem?: BrandList, e?) {
    if (type === 'edit') e.stopPropagation();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      type: type,
      item: newItem,
    };
    dialogConfig.width = '100%';
    dialogConfig.height = '80vh';

    this.confirmDialogRef = this._dialog.open(
      CreateBrandComponent,
      dialogConfig,
    );
    this.confirmDialogRef.afterClosed().subscribe((isChange) => {
      if (isChange) this.getNewList(this.newSearchBody);
    });
  }
}
