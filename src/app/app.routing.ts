import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { InitialDataResolver } from './app.resolvers';
import { NoAuthGuard } from './core/auth/guards/noAuth.guard';
import { AuthGuard } from './core/auth/guards/auth.guard';

export const appRoutes: Routes = [
  {
    path: 'admin',
    component: LayoutComponent,
    data: {
      layout: 'admin',
    },
    resolve: {
      initialData: InitialDataResolver,
    },
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./modules/admin/admin.module').then((m) => m.AdminModule),
      },
    ],
  },
  {
    path: '',
    component: LayoutComponent,
    data: {
      layout: 'classic',
    },
    resolve: {
      initialData: InitialDataResolver,
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
          import('./modules/order/order.module').then((m) => m.OrderModule),
      },
      {
        path: '',
        canMatch: [NoAuthGuard],
        loadChildren: () =>
          import('./modules/sign-in/sign-in.module').then(
            (m) => m.SignInModule,
          ),
      },
      {
        path: '',
        canMatch: [AuthGuard],
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
