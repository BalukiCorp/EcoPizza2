import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
 { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  {path: 'petition', loadChildren: './petition/petition.module#PetitionPageModule'},
  { path: 'login', loadChildren: './login/login.module#LoginPageModule'},
  { path: 'user', loadChildren: './user/user.module#UserPageModule' },
  { path: 'order', loadChildren: './order/order.module#OrderPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
