import ajax from "../utils/ajax";
import {call, take} from "redux-saga/effects";
import {PASSWORD_UPDATE} from "../constants/api";
import {Alert} from "rsuite";
import {CHANGE_PASSWORD} from "../constants/actions";

function* updatePassword(oldPassword: string, newPassword: string, repeat: string) {
    try {
        const result = yield call(ajax.post, PASSWORD_UPDATE, {
            oldPassword: oldPassword,
            newPassword: newPassword,
            repeat: repeat
        })
        if (result.code === 200) {
            Alert.success(result.message)
        } else {
            Alert.error(result.message)
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