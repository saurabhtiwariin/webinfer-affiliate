import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'users',
    loadChildren: './modules/users/users.module#UsersModule'
  }, {
    path: 'brands',
    loadChildren: './modules/brands/brands.module#BrandsModule'
  },
  {
    path: 'homes',
    loadChildren: './modules/homes/homes.module#HomesModule'
  },
  {
    path: '',
    loadChildren: './modules/core/core.module#CoreModule'
  },
  // {
  //   path: '',
  //   //redirectTo: 'homes',
  //   redirectTo: '',
  //   pathMatch: 'full'
  // },
  {
    path: '**',
    redirectTo: '',
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
