import { CategoryComponent } from './category/category.component';
import { Route } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

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
      {
        path: ':category',
        children: [
          {
            path: 'detail',
            component: ProductDetailComponent,
          },
        ],
      },
    ],
  },
];
