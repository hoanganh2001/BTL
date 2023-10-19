import { Route } from '@angular/router';
import { PolicyComponent } from './policy.component';

export const PolicyRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'policy',
  },
  {
    path: 'policy',
    children: [
      {
        path: ':policyName',
        component: PolicyComponent,
      },
    ],
  },
];
