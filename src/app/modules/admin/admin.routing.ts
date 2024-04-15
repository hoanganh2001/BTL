import { Route } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductManagementComponent } from './product-management/product.component';
import { OrderManagementComponent } from './order-management/order.component';
import { CategoryManagementComponent } from './category-management/category.component';
import { NewsManagementComponent } from './news-management/news.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { BrandManagementComponent } from './brand-management/brand-management.component';
import { CouponManagementComponent } from './coupon-management/coupon-management.component';

export const AdminRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: DashboardComponent,
  },
  {
    path: 'product',
    component: ProductManagementComponent,
  },
  {
    path: 'order',
    component: OrderManagementComponent,
  },
  {
    path: 'category',
    component: CategoryManagementComponent,
  },
  {
    path: 'news',
    component: NewsManagementComponent,
  },
  {
    path: 'user',
    component: UserManagementComponent,
  },
  {
    path: 'brand',
    component: BrandManagementComponent,
  },
  {
    path: 'coupon',
    component: CouponManagementComponent,
  },
];
