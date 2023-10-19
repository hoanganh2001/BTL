import { Route } from '@angular/router';
import { ContactComponent } from './contact.component';

export const ContactRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'contact',
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
];
