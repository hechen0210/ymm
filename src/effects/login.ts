import {call, put, take} from "redux-saga/effects";
import {LOGIN, LOGIN_RESULT, LOGOUT} from "../constants/actions";
import ajax from "../utils/ajax";
import {push} from "connected-react-router";
import {setAuth} from "../utils/auth";
import {Alert} from "rsuite";

function* login(account: string, password: string) {
    try {
        const result = yield call(ajax.post, "login", {account: account, password: password})
        setAuth({
            uid: "1",
            account: account,
            name: result.name,
            token: "result.token"
        })
        // if (result.code === 200) {
        //     setAuth({
        //         uid: "1",
        //         account: account,
        //         name: result.name,
        //         token: result.token
        //     })
            yield put(push("/area-list"))
            yield put({type: LOGIN_RESULT, message: "登录成功"})
        // } else {
        //     yield put({type: LOGIN, message: "登录失败"})
        //     Alert.error("登录失败")
        // }
    } catch (e) {
        yield put({type: LOGIN_RESULT, message: "登录失败"})
    }
}

function* logout() {
    try {
        yield put(push("/login"))
        // yield put({})
    } catch (e) {

    }
}

function* watchLogin() {
    while (true) {
        const loginAction = yield take(LOGIN)
        yield call(login, loginAction.account, loginAction.password)
    }
}

function* watchLogout() {
    while (true) {
        yield take(LOGOUT)
        yield call(logout)
    }
}

export {
    watchLogin,
    watchLogout
}