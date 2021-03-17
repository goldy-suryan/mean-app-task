import { state } from "@angular/animations"
import { createReducer, on } from "@ngrx/store"
import { add_user, ILogin, auth_user } from "./login.action"


export interface ILoginState {
    user: ILogin;
    isAuthenticated: boolean;
}

const initialState = {
    user: {},
    isAuthenticated: false
}

const _loginReducer = createReducer(initialState,
    on(add_user, (state, { username, password }) => {
        return {
            ...state,
            user: { ...state.user, username, password }
        }
    }),
    on(auth_user, (state, action) => {
      return {
          ...state,
          isAuthenticated: action.isAuthenticated
      }  
    })
)

export function loginReducer(state, action) {
    return _loginReducer(state, action)
}