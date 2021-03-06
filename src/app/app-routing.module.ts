import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: 'public/login', pathMatch: 'full'},
  {path: 'public', loadChildren: () => import('./public/public.module').then(m => m.PublicModule)},
  {path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
  {path: 'intranet', loadChildren: () => import('./intranet/intranet.module').then(m => m.IntranetModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
