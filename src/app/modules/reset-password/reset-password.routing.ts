import { Route } from '@angular/router';
import { ResetPasswordComponent } from './reset-password.component';

export const ResetPasswordRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'reset-password',
  },
  {
    path: 'reset-password',
    component: ResetPasswordComponent,
  },
];
