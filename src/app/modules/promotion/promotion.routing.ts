import { Route } from '@angular/router';
import { PromotionListComponent } from './promotion-list/promotion-list.component';
import { ProductDetailComponent } from '../products/product-detail/product-detail.component';

export const PromotionRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'promotion',
  },
  {
    path: 'promotion',
    component: PromotionListComponent,
  },
];
