import { CategoryComponent } from './category/category.component';
import { Route } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';

export const ProductRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'product',
  },
  {
    path: 'product',
    component: ProductListComponent,
  },
  {
    path: 'product',
    children: [
      {
        path: ':category',
        component: CategoryComponent,
      },
    ],
  },
];
