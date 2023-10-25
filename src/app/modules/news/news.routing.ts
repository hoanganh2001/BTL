import { NewDetailComponent } from './new-detail/new-detail.component';
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
  {
    path: 'news',
    children: [
      {
        path: ':newId',
        component: NewDetailComponent,
      },
    ],
  },
];
