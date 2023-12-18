import { Route } from '@angular/router';
import { ProductDetailComponent } from './product-detail.component';

export const ProductsDetailRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'detail',
  },
  {
    path: 'detail',
    children: [
      {
        path: ':productId',
        component: ProductDetailComponent,
      },
    ],
  },
];
