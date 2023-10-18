import { Route } from '@angular/router';
import { BrandListComponent } from './brand-list/brand-list.component';
import { BrandProductListComponent } from './brand-product-list/brand-product-list.component';
import { ProductDetailComponent } from '../products/product-detail/product-detail.component';

export const BrandsRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'brands',
  },
  {
    path: 'brands',
    component: BrandListComponent,
  },
  {
    path: 'brands',
    children: [
      {
        path: ':brandName',
        component: BrandProductListComponent,
      },
    ],
  },
];
