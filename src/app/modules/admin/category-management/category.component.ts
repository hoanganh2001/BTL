import { Component, OnInit } from '@angular/core';
import { CategoryManagementSerivce } from './category.service';
import { paginatorData } from 'app/shared/component/paginator/paginator.types';
import { debounceTime, map } from 'rxjs';
import { SortHeader } from '../admin.types';
import { FormControl } from '@angular/forms';
import RouterConfig from 'app/core/config/router.config';
import { Router } from '@angular/router';
import {
  MatDialogRef,
  MatDialogConfig,
  MatDialog,
} from '@angular/material/dialog';
import { CreateCategoryComponent } from './create/create.component';
import { FlatNode, TreeNode } from './category.type';
import { FlatTreeControl } from '@angular/cdk/tree';
import {
  MatTreeFlattener,
  MatTreeFlatDataSource,
} from '@angular/material/tree';
import { DialogConfirmComponent } from 'app/shared/component/dialog-confirm/dialog-confirm.component';
import { getConfirmData } from 'app/shared/constant';
import { NotificationService } from 'app/core/service/notification';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryManagementComponent implements OnInit {
  searchControl = new FormControl('');
  confirmDialogRef: MatDialogRef<CreateCategoryComponent>;
  dialogRef: MatDialogRef<DialogConfirmComponent>;

  readonly RouteConfig = RouterConfig;

  constructor(
    private _categoryManagementService: CategoryManagementSerivce,
    private _router: Router,
    private _notiService: NotificationService,
    public _dialog: MatDialog,
  ) {}
  sort: SortHeader = {
    active: '',
    direction: '',
  };
  paginator: paginatorData = {
    length: 0,
    limit: 10,
    offset: 0,
    page: 0,
  };
  productSearchBody: any = {};
  categoryList: any[];

  //tree  constructor
  private _transformer = (node: TreeNode, level: number) => {
    return {
      id: node.id,
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<FlatNode>(
    (node) => node.level,
    (node) => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.children,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
  hasChild = (_: number, node: FlatNode) => node.expandable;
  getLevel = (node: FlatNode) => node.level;

  ngOnInit() {
    this.productSearchBody = {
      limit: this.paginator.limit,
      offset: this.paginator.offset,
    };

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
          this.getCategoriesList(this.productSearchBody);
        } else if (value === '' && !this.searchControl.pristine) {
          delete this.productSearchBody['name'];
          this.getCategoriesList(this.productSearchBody);
        }
      });
    this.getCategoriesList(this.productSearchBody);
  }

  getCategoriesList(body: any) {
    this._categoryManagementService.getCategories(body).subscribe({
      next: (res) => {
        this.categoryList = res.data.map((item) => ({
          id: item.id,
          name: item.name,
          children: [
            {
              name: 'Type',
              children: item.type,
            },
            {
              name: 'Feature',
              children: item.feature,
            },
          ],
        }));
        this.dataSource.data = this.categoryList;
        this.paginator.length = res.meta.length;
        this.paginator.offset = res.meta.offset ? res.meta.offset : 0;
        this.paginator.limit = res.meta.limit;
        this.paginator.page =
          res.meta.offset === 0 ? 0 : res.meta.offset / res.meta.limit;
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
  }

  openCategoryPopup(type: string, category_id?: number, e?) {
    if (type === 'edit') e.stopPropagation();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      type: type,
      category_id: category_id,
    };
    dialogConfig.width = '100%';
    dialogConfig.height = '80vh';

    this.confirmDialogRef = this._dialog.open(
      CreateCategoryComponent,
      dialogConfig,
    );
    this.confirmDialogRef.afterClosed().subscribe((isChange) => {
      if (isChange) {
        this.getCategoriesList(this.productSearchBody);
      }
    });
  }

  deleteCategory(e, id: number) {
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
        this._categoryManagementService.deleteCategory(data.id).subscribe({
          next: (res) => {
            if (res.message) {
              this._notiService.showSuccess(res.message);
              this.getCategoriesList(this.productSearchBody);
            }
          },
          error: (err) => {
            this._notiService?.showError(err.error.message);
          },
        });
      }
    });
  }
}
