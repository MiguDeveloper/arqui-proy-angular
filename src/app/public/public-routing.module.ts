import { PublicComponent } from './public.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {
        path: '', component: PublicComponent, children: [
            { path: '', pathMatch: 'full', redirectTo: 'login'},
            { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) }
        ]
    },

]

@NgModule({
    imports: [RouterModule.forChild(routes)]
})
export class PublicRoutingModule { }