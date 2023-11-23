import { Route } from '@angular/router';
import { SignInComponent } from './sign-in.component';

export const SignInRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'sign-in',
  },
  {
    path: 'sign-in',
    component: SignInComponent,
  },
];
