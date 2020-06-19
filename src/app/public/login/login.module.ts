import { LoginComponent } from './containers/login/login.component';
import { LoginRoutingModule } from './login-routing.module';
import { SharedModule } from './../../core/shared/shared.module';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        SharedModule,
        LoginRoutingModule
    ],
    exports: [],
    declarations: [
        LoginComponent
    ],
    providers: [],
})
export class LoginModule { }
