import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { LoginModule } from './login/login.module';
import { SharedModule } from './../core/shared/shared.module';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        SharedModule,
        LoginModule,
        PublicRoutingModule
    ],
    exports: [],
    declarations: [
        PublicComponent
    ],
    providers: [],
})
export class PublicModule { }
