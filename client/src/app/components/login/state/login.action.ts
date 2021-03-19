import { createAction, props } from "@ngrx/store";
import { ELogin } from "./login.enum";

export interface ILogin {
    username: string;
    password: string;
}

export const add_user = createAction(ELogin.ADD_USER, props<ILogin>())

export const remove_user = createAction(ELogin.REMOVE_USER, props<ILogin>())

export const auth_user = createAction(ELogin.AUTH, props<any>())

export const login_success = createAction(ELogin.SUCCESS)