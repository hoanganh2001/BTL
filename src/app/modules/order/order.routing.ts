import { Route } from '@angular/router';
import { OrderComponent } from './order.component';

export const OrderRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'order',
  },
  {
    path: 'order',
    component: OrderComponent,
  },
];
