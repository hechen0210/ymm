import ajax from "../utils/ajax";
import {call, put, take} from "redux-saga/effects";
import {PASSWORD_UPDATE} from "../constants/api";
import {Alert} from "rsuite";
import {CHANGE_PASSWORD, GET_QRCODE_LIST} from "../constants/actions";
import {push} from "connected-react-router";

function* updatePassword(oldPassword: string, newPassword: string, repeat: string) {
    try {
        const result = yield call(ajax.post, PASSWORD_UPDATE, {
            oldPassword: oldPassword,
            newPassword: newPassword,
            repeat: repeat
        })
        if (result.code === 200) {
            Alert.success(result.message)
        }else if (result.code === 403) {
            yield put({type: GET_QRCODE_LIST, message: result.message})
            yield put(push("/login"))
        }
    } catch (e) {

    }
}

function* watchPassword() {
    while (true) {
        const changePassword = yield take(CHANGE_PASSWORD)
        yield call(updatePassword, changePassword.oldPassword, changePassword.newPassword, changePassword.repeat)
    }
}

export {
    watchPassword
}