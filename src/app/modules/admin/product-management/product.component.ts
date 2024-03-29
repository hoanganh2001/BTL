import { Component, OnInit } from '@angular/core';
import { ProductManagementSerivce } from './products.service';
import { paginatorData } from 'app/shared/component/paginator/paginator.types';
import { debounceTime, map } from 'rxjs';
import { productManagementResponseData } from './products.type';
import { SortHeader } from '../admin.types';
import { FormControl } from '@angular/forms';
import RouterConfig from 'app/core/config/router.config';
import { Params, Router } from '@angular/router';
import { Constant, getConfirmData } from 'app/shared/constant';
import {
  MatDialogRef,
  MatDialogConfig,
  MatDialog,
} from '@angular/material/dialog';
import { CreateProductComponent } from './create/create.component';
import { DialogConfirmComponent } from 'app/shared/component/dialog-confirm/dialog-confirm.component';
import { NotificationService } from 'app/core/service/notification';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductManagementComponent implements OnInit {
  searchControl = new FormControl('');
  confirmDialogRef: MatDialogRef<CreateProductComponent>;
  dialogRef: MatDialogRef<DialogConfirmComponent>;

  readonly RouteConfig = RouterConfig;

  constructor(
    private _productManagementService: ProductManagementSerivce,
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
  productSearchBody: any = {};
  productList: any[];
  ngOnInit() {
    this.productSearchBody = {
      limit: this.paginator.limit,
      offset: this.paginator.offset,
    };
    this.getProductList(this.productSearchBody);

    this.searchControl.valueChanges
      .pipe(
        debounceTime(300),
        map((value) => value.trim()),
      )
      .subscribe((value) => {
        if (value) {
          this.productSearchBody = {
            ...this.productSearchBody,
            offset: 0,
            name: value,
          };
          this.getProductList(this.productSearchBody);
        } else if (value === '' && !this.searchControl.pristine) {
          delete this.productSearchBody['name'];
          this.getProductList(this.productSearchBody);
        }
      });
  }

  getProductList(body: any) {
    this._productManagementService
      .getProductsOnSearch(body)
      .pipe(
        map((value: any) => {
          value.data = value.data.map((res: productManagementResponseData) => ({
            id: res.id,
            price: res.price,
            create_date: res.create_date,
            discount: res.discount,
            image:
              (res.thumbnail_file?.includes('/')
                ? Constant.IMG_DIR.SHOP
                : Constant.IMG_DIR.GOOGLE_DRIVE) + res.thumbnail_file,
            name: res.name,
            view: res.view_number,
            gift: res.gift_id,
            category_id: res.category_id,
            category_name: res.category_name,
          }));
          return value;
        }),
      )
      .subscribe({
        next: (res) => {
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
    this.productSearchBody = {
      ...this.productSearchBody,
      limit: pagging.pageSize,
      offset: pagging.pageIndex * pagging.pageSize,
    };
    // call api get list form
    this.getProductList(this.productSearchBody);
  }

  handleSortItem(data) {
    this.productSearchBody = {
      ...this.productSearchBody,
      limit: this.paginator.limit,
      offset: 0,
      sort_by: data.direction,
      order_by: data.active,
    };

    this.getProductList(this.productSearchBody);
  }

  deleteProduct(e, id: number) {
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
        this._productManagementService.deleteProduct(data.id).subscribe({
          next: (res) => {
            if (res.message) {
              this._notiService.showSuccess(res.message);
              this.getProductList(this.productSearchBody);
            }
          },
          error(err) {
            this._notiService?.showError(err.error.message);
          },
        });
      }
    });
  }

  openProductPopup(type: string, product_id?: number, e?) {
    if (type === 'edit') e.stopPropagation();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      type: type,
      product_id: product_id,
    };
    dialogConfig.width = '100%';
    dialogConfig.height = '80vh';

    this.confirmDialogRef = this._dialog.open(
      CreateProductComponent,
      dialogConfig,
    );
    this.confirmDialogRef.afterClosed().subscribe((isChange) => {
      if (isChange) this.getProductList(this.productSearchBody);
    });
  }
}
