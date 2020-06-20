import { UserDetailComponent } from './containers/user-detail/user-detail.component';
import { UsersListComponent } from './containers/users-list/users-list.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path: '', component: UsersListComponent},
    {path: 'detail', component: UserDetailComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)]
})
export class UserRoutingModule{}