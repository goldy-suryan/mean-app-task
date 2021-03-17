import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ILoginState } from "./login.reducer";

export const Login_State = 'user';

const getUserState = createFeatureSelector<ILoginState>(Login_State);

export const getUser = createSelector(getUserState, (state) => state.user);

export const getUserAuthentication = createSelector(getUserState, (state) => state.isAuthenticated);