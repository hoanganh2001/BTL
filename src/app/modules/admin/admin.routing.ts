import { Route } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductManagementComponent } from './product-management/product.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CreateProductComponent } from './product-management/create/create.component';
import { OrderManagementComponent } from './order-management/order.component';
import { CategoryManagementComponent } from './category-management/category.component';
import { NewsManagementComponent } from './news-management/news.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { SpecificationTemplateManagementComponent } from './specification-template/specification-template.component';

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
    path: 'product',
    children: [{ path: 'create', component: CreateProductComponent }],
  },
  {
    path: 'order',
    component: OrderManagementComponent,
  },
  {
    path: 'order',
    children: [{ path: 'create', component: CreateProductComponent }],
  },
  {
    path: 'category',
    component: CategoryManagementComponent,
  },
  {
    path: 'category',
    children: [{ path: 'create', component: CreateProductComponent }],
  },
  {
    path: 'news',
    component: NewsManagementComponent,
  },
  {
    path: 'news',
    children: [{ path: 'create', component: CreateProductComponent }],
  },
  {
    path: 'user',
    component: UserManagementComponent,
  },
  {
    path: 'user',
    children: [{ path: 'create', component: CreateProductComponent }],
  },
  {
    path: 'template',
    component: SpecificationTemplateManagementComponent,
  },
  {
    path: 'template',
    children: [{ path: 'create', component: CreateProductComponent }],
  },
  {
    path: 'my-profile',
    component: UserProfileComponent,
  },
];
