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
        path: '',
        loadChildren: () =>
          import('./modules/contact/contact.module').then(
            (m) => m.ContactModule,
          ),
      },
      {
        path: '',
        loadChildren: () =>
          import('./modules/about/about.module').then((m) => m.AboutModule),
      },
      {
        path: '',
        loadChildren: () =>
          import('./modules/policy/policy.module').then((m) => m.PolicyModule),
      },
      {
        path: '',
        loadChildren: () =>
          import('./modules/my-profile/my-profile.module').then(
            (m) => m.MyProfileModule,
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
