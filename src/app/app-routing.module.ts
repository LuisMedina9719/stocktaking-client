import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'folder',
    loadChildren: () => import('./folder/folder.module').then(m => m.FolderPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./common/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'products',
    children: [
      {
        path: ':categoryId',
        loadChildren: () =>
          import('./pages/products/products.module').then(
            m => m.ProductsPageModule
          )
      },
    ]
  },
  {
    path: 'product/:productId',
    loadChildren: () => import('./pages/product/product.module').then(m => m.ProductPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./common/cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./common/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./common/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./common/login/login.module').then( m => m.LoginPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
