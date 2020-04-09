import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from './auth.service';

@Component({
    templateUrl: './login.component.html'
})

export class LoginComponent{
    userName;
    password;

    constructor(private router: Router, private auth: AuthService){

    }

    login(loginFormValues){
        console.log(loginFormValues);
        
        this.auth.login(loginFormValues.userName,loginFormValues.password);

        this.router.navigate(['events']);
        
    }

    handleCancel(){
        this.router.navigate(['events']);
    }
}