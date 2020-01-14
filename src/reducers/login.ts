import {LoginAction, LogoutAction} from "../actions/login";
import {LOGIN, LOGIN_RESULT} from "../constants/actions";

function Login(state = "", action: LoginAction) {
    switch (action.type) {
        case LOGIN:
            return Object.assign({}, state, {
                message: "登录中"
            })
        case LOGIN_RESULT:
            return Object.assign({}, state, {
                message: action.message
            })
        default:
            return state
    }
}

function Logout(state = "", action: LogoutAction) {
    return state
}

export {
    Login,
    Logout
}