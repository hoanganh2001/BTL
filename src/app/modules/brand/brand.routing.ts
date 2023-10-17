import { Route } from '@angular/router';
import { BrandListComponent } from './brand-list/brand-list.component';
import { BrandProductDetailComponent } from './brand-product-detail/brand-product-detail.component';

export const BrandRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'brand',
  },
  {
    path: 'brand',
    component: BrandListComponent,
  },
  {
    path: 'brand',
    children: [
      {
        path: ':brandName',
        component: BrandProductDetailComponent,
      },
    ],
  },
];
