import { AboutComponent } from './about.component';
import { Route } from '@angular/router';

export const AboutRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'about',
  },
  {
    path: 'about',
    component: AboutComponent,
  },
];
