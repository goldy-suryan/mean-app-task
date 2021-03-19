import { Router } from '@angular/router';
import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from "@ngrx/effects";
import { LoginService } from "src/app/services/login.service";
import { add_user, auth_user, login_success } from "./login.action";
import { mergeMap, map } from 'rxjs/operators';
import { Store } from "@ngrx/store";

@Injectable()

export class LoginEffect {
    constructor(private action: Actions, 
        private loginService: LoginService,
        private router: Router,
        private store: Store) { }

    login$ = createEffect(() => {
        return this.action.pipe(
            ofType(add_user),
            mergeMap(action => {
                return this.loginService.login({ username: action.username, password: action.password }).pipe(
                    map((data) => {
                        this.store.dispatch(auth_user({ isAuthenticated: true }));
                        localStorage.setItem('token', data['token']);
                        this.router.navigate(['/dashboard']);
                        return login_success()
                    })
                )
            })
        )
    })
}
