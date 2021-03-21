import { Injectable } from '@angular/core';
import jwt_decode from "jwt-decode";
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { auth_user, remove_user } from '../components/login/state/login.action';

@Injectable({
    providedIn: 'root'
})

export class AuthService {

    constructor(private router: Router,
                private store: Store) {}

    isLoggedIn() {
        let token = localStorage.getItem("token");
        if (!token) return false;
        if(token) {
            if (Date.now() >= <any>jwt_decode(token)) {
                return false;
            }
            // this.store.dispatch(auth_user({isAuthenticated: true}));
            return true;
        }
        return false;
    }

    logOut() {
        this.store.dispatch(auth_user({isAuthenticated: false}));
        this.store.dispatch(remove_user({username: '', password: ''}));
        localStorage.removeItem("token");
        this.router.navigate(['/'])
    }
}