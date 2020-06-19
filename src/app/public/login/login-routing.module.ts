import { LoginComponent } from './containers/login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'login'},
    {path: 'login', component: LoginComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)]
})
export class LoginRoutingModule{}