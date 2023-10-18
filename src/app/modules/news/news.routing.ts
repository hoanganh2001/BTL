import { NewListComponent } from './new-list/new-list.component';
import { Route } from '@angular/router';

export const NewsRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'news',
  },
  {
    path: 'news',
    component: NewListComponent,
  },
];
