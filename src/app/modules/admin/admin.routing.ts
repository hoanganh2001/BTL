import { Route } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductManagementComponent } from './product-management/product.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

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
    path: 'my-profile',
    component: UserProfileComponent,
  },
];
