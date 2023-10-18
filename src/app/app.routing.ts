import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    data: {
      layout: 'classic',
    },
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./modules/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: '',
        loadChildren: () =>
          import('./modules/products/products.module').then(
            (m) => m.ProductsModule,
          ),
      },
      {
        path: '',
        loadChildren: () =>
          import('./modules/brands/brands.module').then((m) => m.BrandsModule),
      },
      {
        path: '',
        loadChildren: () =>
          import('./modules/news/news.module').then((m) => m.NewsModule),
      },
      {
        path: '',
        loadChildren: () =>
          import('./modules/promotion/promotion.module').then(
            (m) => m.PromotionModule,
          ),
      },
      {
        path: '**',
        loadChildren: () =>
          import(
            './modules/products/product-detail/product-detail.module'
          ).then((m) => m.ProductDetailModule),
      },
    ],
  },
];
