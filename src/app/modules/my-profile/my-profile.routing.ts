import { Route } from '@angular/router';
import { MyProfileComponent } from './my-profile.component';
import { AccountComponent } from './account/account.component';
import { LovedComponent } from './loved/loved.component';
import { OrderComponent } from './order/order.component';

export const MyProfileRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'my-profile',
  },
  {
    path: 'my-profile',
    component: MyProfileComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'account',
      },
      {
        path: 'account',
        component: AccountComponent,
      },
      {
        path: 'loved',
        component: LovedComponent,
      },
      {
        path: 'order',
        component: OrderComponent,
      },
    ],
  },
];
