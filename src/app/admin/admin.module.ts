import { AdminComponent } from './admin.component';
import { SharedModule } from './../core/shared/shared.module';
import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';


@NgModule({
    imports: [
        SharedModule,
        AdminRoutingModule
    ],
    exports: [],
    declarations: [
        AdminComponent
    ],
    providers: [],
})
export class AdminModule { }
