import { LoginComponent } from './containers/login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path: '', component: LoginComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)]
})
export class LoginRoutingModule{}