import { NgModule } from "@angular/core";
import {ProfileComponent} from './user-profile.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {routes} from './user.routes';

@NgModule({
    imports:[
        CommonModule,
        RouterModule.forChild(routes)
    ],


    declarations: [ProfileComponent],

    
    
    providers:[],

})

export class UserModule{

}