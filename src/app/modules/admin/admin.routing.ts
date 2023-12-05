import { Route } from '@angular/router';
import { AdminComponent } from './admin.component';

export const AdminRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: AdminComponent,
  },
];
