import {Injectable} from '@angular/core';
import {IUser} from './user.model';

@Injectable()
export class AuthService{

    currentUser:IUser;
    isAuthenticated:Boolean;

    login(userName,password){
        if(userName && password){
            this.isAuthenticated = true;
        }
        this.currentUser = {
            id:1,
            userName:'sshamim',
            firstName:'salim',
            lastName:'shamim',
            password:'123456'
        }
        return this.currentUser;
    }
}