import {LOGIN, LOGOUT} from "../constants/actions";

export interface LoginAction {
    type: string
    message: string
}

export interface LogoutAction {
    type: string
}

export function loginAction(account: string, password: string) {
    return {
        type: LOGIN,
        account,
        password,
    }
}

export function logoutAction() {
    return {
        type: LOGOUT
    }
}