import { Component, OnInit } from '@angular/core';
import { RouteInfo } from './sidebar.types';
import RouterConfig from 'app/core/config/router.config';

export const ROUTES: RouteInfo[] = [
  {
    path: RouterConfig.ADMIN_DASHBOARD,
    title: 'Thống kê',
    icon: 'dashboard',
    class: '',
  },
  {
    path: RouterConfig.ADMIN_ORDER,
    title: 'Quản lý đơn hàng',
    icon: 'shopping_cart',
    class: '',
  },
  {
    path: RouterConfig.ADMIN_PRODUCT,
    title: 'Quản lý sản phẩm',
    icon: 'content_paste',
    class: '',
  },
  {
    path: RouterConfig.ADMIN_CATEGORY,
    title: 'Quản lý danh mục',
    icon: 'category',
    class: '',
  },
  {
    path: RouterConfig.ADMIN_BRAND,
    title: 'Quản lý thương hiệu',
    icon: 'store',
    class: '',
  },
  {
    path: RouterConfig.ADMIN_COUPON,
    title: 'Quản lý mã giảm giá',
    icon: 'confirmation_number',
    class: '',
  },
  {
    path: RouterConfig.ADMIN_NEWS,
    title: 'Quản lý tin tức',
    icon: 'newspaper',
    class: '',
  },
  {
    path: RouterConfig.ADMIN_USER,
    title: 'Quản lý tài khoản',
    icon: 'person',
    class: '',
  },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  readonly RouterConfig = RouterConfig;
  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
  }
  isMobileMenu() {
    // if (window.width > 991) {
    //   return false;
    // }
    // return true;
  }
}
