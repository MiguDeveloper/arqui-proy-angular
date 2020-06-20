import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from './../../core/shared/shared.module';
import { UserDetailComponent } from './containers/user-detail/user-detail.component';
import { UsersListComponent } from './containers/users-list/users-list.component';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        SharedModule,
        UserRoutingModule
    ],
    exports: [],
    declarations: [
        UserDetailComponent,
        UsersListComponent
    ],
    providers: [],
})
export class UserModule { }
