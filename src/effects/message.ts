import ajax from "../utils/ajax";
import {call, put, take} from "redux-saga/effects";
import {GET_MESSAGE, GET_MESSAGE_INFO, UPDATE_MESSAGE} from "../constants/actions";
import {MESSAGE_INFO, MESSAGE_UPDATE} from "../constants/api";
import {push} from "connected-react-router";
import {Alert} from "rsuite";

function* info(type: string) {
    try {
        const result = yield call(ajax.get, MESSAGE_INFO, {type: type})
        if (result.code === 200) {
            yield put({
                type: GET_MESSAGE_INFO,
                info: result.data,
                message: result.message
            })
        } else if (result.code === 403) {
            yield put(push("/login"))
        }
    } catch (e) {

    }
}

function* update(formValue: any) {
    try {
        const result = yield call(ajax.post, MESSAGE_UPDATE, {
            ...formValue
        })
        if (result.code === 200) {
            yield put({type: UPDATE_MESSAGE, update: true, message: result.message})
            Alert.success(result.message)
        } else {
            Alert.error(result.message)
        }
    } catch (e) {

    }
}

function* watchMessageInfo() {
    while (true) {
        const infoAction = yield take(GET_MESSAGE)
        yield call(info, infoAction.replyType)
    }
}

function* watchMessageUpdate() {
    while (true) {
        const updateAction = yield take(UPDATE_MESSAGE)
        yield call(update, updateAction.formValue)
    }
}


export {
    watchMessageInfo,
    watchMessageUpdate,
}