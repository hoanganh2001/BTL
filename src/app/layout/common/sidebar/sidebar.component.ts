import { Component, OnInit } from '@angular/core';
import { RouteInfo } from './sidebar.types';
import RouterConfig from 'app/core/config/router.config';

export const ROUTES: RouteInfo[] = [
  {
    path: RouterConfig.ADMIN_DASHBOARD,
    title: 'Dashboard',
    icon: 'dashboard',
    class: '',
  },
  {
    path: RouterConfig.ADMIN_ORDER,
    title: 'Order Management',
    icon: 'shopping_cart',
    class: '',
  },
  {
    path: RouterConfig.ADMIN_PRODUCT,
    title: 'Product Management',
    icon: 'content_paste',
    class: '',
  },
  {
    path: RouterConfig.ADMIN_CATEGORY,
    title: 'Category Management',
    icon: 'category',
    class: '',
  },
  {
    path: RouterConfig.ADMIN_BRAND,
    title: 'Brand Management',
    icon: 'category',
    class: '',
  },
  {
    path: RouterConfig.ADMIN_COUPON,
    title: 'Coupon Management',
    icon: 'category',
    class: '',
  },
  {
    path: RouterConfig.ADMIN_NEWS,
    title: 'New Management',
    icon: 'newspaper',
    class: '',
  },
  {
    path: RouterConfig.ADMIN_USER,
    title: 'User Management',
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
