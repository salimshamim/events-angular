import { NgModule } from "@angular/core";
import {ProfileComponent} from './user-profile.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {routes} from './user.routes';
import {LoginComponent} from './login.component';
import {FormsModule} from '@angular/forms';

@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes)
    ],


    declarations: [ProfileComponent, LoginComponent],

    
    
    providers:[],

})

export class UserModule{

}