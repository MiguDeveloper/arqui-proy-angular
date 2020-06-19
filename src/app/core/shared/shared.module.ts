import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import{FormsModule, ReactiveFormsModule} from '@angular/forms'

@NgModule({
    declarations: [],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterModule
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        RouterModule
    ],    
    providers: [],
})
export class SharedModule { }
