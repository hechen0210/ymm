import {getCookie, setCookie} from "./cookie";
import {loginInfo} from "../types";


const expire = 0

const setAuth = (info: loginInfo) => {
    setCookie("uid", info.uid, expire)
    setCookie("account", info.account, expire)
    setCookie("name", info.name, expire)
    setCookie("token", info.token, expire)
}

const clearAuth = () => {
    setCookie("uid", "", -1)
    setCookie("account", "", -1)
    setCookie("name", "", -1)
    setCookie("token", "", -1)
}

const isAuth = () => {
    if (getCookie("account") && getCookie("token")) {
        return true
    }
    return false

}

const getLoginInfo = () => {
    let loginInfo = {
        uid: getCookie("uid"),
        account: getCookie("account"),
        name: getCookie("name"),
        token: getCookie("token")
    }
    return loginInfo
}

export {
    setAuth,
    clearAuth,
    isAuth,
    getLoginInfo
}
