import { AdminComponent } from './admin.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path: '', component: AdminComponent, children: [
        {path: '', pathMatch: 'full', redirectTo: 'users'},
        {path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UserModule)}
    ]}
]

@NgModule({
    imports: [RouterModule.forChild(routes)]
})

export class AdminRoutingModule{}
