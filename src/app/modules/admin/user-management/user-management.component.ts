import { Component, OnInit } from '@angular/core';
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
import { CreateUserComponent } from './create/create.component';
import { UserManagementSerivce } from './user-management.service';
import { BaseResponse } from 'app/core/models/base-response.model';
import { userList } from './user-management.type';
import { NotificationService } from 'app/core/service/notification';
import { ChangePasswordcomponent } from 'app/shared/component/change-password/change-password.component';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss'],
})
export class UserManagementComponent implements OnInit {
  searchControl = new FormControl('');
  confirmDialogRef: MatDialogRef<CreateUserComponent>;
  passwordDialogRef: MatDialogRef<ChangePasswordcomponent>;

  readonly RouteConfig = RouterConfig;

  constructor(
    private _userManagementService: UserManagementSerivce,
    public _dialog: MatDialog,
    private _notiService: NotificationService,
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
  userSearchBody: any = {};
  userList: any[];
  ngOnInit() {
    this.userSearchBody = {
      limit: this.paginator.limit,
      offset: this.paginator.offset,
    };
    this.getuserList(this.userSearchBody);

    this.searchControl.valueChanges
      .pipe(
        debounceTime(300),
        map((value) => value.trim()),
      )
      .subscribe((value) => {
        if (value) {
          this.userSearchBody = {
            ...this.userSearchBody,
            offset: 0,
            name: value,
          };
          this.getuserList(this.userSearchBody);
        } else if (value === '' && !this.searchControl.pristine) {
          delete this.userSearchBody['name'];
          this.getuserList(this.userSearchBody);
        }
      });
  }

  getuserList(body: any) {
    this._userManagementService
      .getUsersOnSearch(body)
      .pipe(
        map((value: BaseResponse<userList>) => {
          value.data = value.data.map((res) => ({
            id: res.id,
            name: res.name,
            last_signin: res.last_signin,
            create_date: res.create_date,
            email: res.email,
            phone: res.phone,
            address: res.address,
            role_id: res.role_id,
            role_name: res.role_name,
            status: res.status,
          }));
          return value;
        }),
      )
      .subscribe({
        next: (res) => {
          if (res) {
            this.userList = res.data;
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
    this.userSearchBody = {
      ...this.userSearchBody,
      limit: pagging.pageSize,
      offset: pagging.pageIndex * pagging.pageSize,
    };
    // call api get list form
    this.getuserList(this.userSearchBody);
  }

  handleSortItem(data) {
    this.userSearchBody = {
      ...this.userSearchBody,
      limit: this.paginator.limit,
      offset: 0,
      sort_by: data.direction,
      order_by: data.active,
    };

    this.getuserList(this.userSearchBody);
  }

  openUserPopup(type: string, user?: userList, e?) {
    if (type === 'edit') e.stopPropagation();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      type: type,
      user: user,
    };
    dialogConfig.width = '60vw';
    dialogConfig.height = '60vh';

    this.confirmDialogRef = this._dialog.open(
      CreateUserComponent,
      dialogConfig,
    );
    this.confirmDialogRef.afterClosed().subscribe((isChange) => {
      if (isChange) this.getuserList(this.userSearchBody);
    });
  }

  changePassword(id: number, e?) {
    e.stopPropagation();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      id: id,
    };
    dialogConfig.width = '600px';
    dialogConfig.minHeight = '280px';

    this.passwordDialogRef = this._dialog.open(
      ChangePasswordcomponent,
      dialogConfig,
    );
    this.passwordDialogRef.afterClosed().subscribe((id) => {
      if (id) this.getuserList(this.userSearchBody);
    });
  }

  updateUserStatus(e, id: number, status: boolean) {
    e.stopPropagation();
    const body = { status: status ? 1 : 0 };
    this._userManagementService.updateUserStatus(body, id).subscribe({
      next: (res) => {
        this._notiService.showSuccess(res.message);
      },
      error: (err) => {
        this._notiService.showError(err);
      },
    });
  }
}
