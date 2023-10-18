import { CategoryComponent } from './category/category.component';
import { Route } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

export const ProductsRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'products',
  },
  {
    path: 'products',
    component: ProductListComponent,
  },
  {
    path: 'products',
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
