import ajax from "../utils/ajax";
import {call, put, take} from "redux-saga/effects";
import {DELETE_KEY_WORDS, GET_KEY_WORDS_LIST, GET_KEY_WORDS_LIST_SHOW, UPDATE_KEY_WORDS} from "../constants/actions";
import {KEY_WORDS_DEL, KEY_WORDS_LIST, KEY_WORDS_UPDATE} from "../constants/api";
import {push} from "connected-react-router";
import {Alert} from "rsuite";

function* list(type: string, page: number, pageSize: number) {
    try {
        const result = yield call(ajax.get, KEY_WORDS_LIST, {type: type, page: page, pageSize: pageSize})
        if (result.code === 200) {
            let list = []
            if (result.data.total > 0) {
                list = result.data.list
            }
            yield put({
                type: GET_KEY_WORDS_LIST_SHOW,
                list: list,
                total: result.data.total,
                message: result.message
            })
        } else if (result.code === 403) {
            yield put({type: GET_KEY_WORDS_LIST, message: result.message})
            yield put(push("/login"))
        }
    } catch (e) {

    }
}

function* update(formValue: any) {
    try {
        const result = yield call(ajax.post, KEY_WORDS_UPDATE, {
            id: formValue.id,
            name: formValue.name,
            key_words: JSON.stringify(formValue.key_words),
            match_type: formValue.match_type,
            content: JSON.stringify(formValue.content),
            reply_type: formValue.reply_type,
            type: formValue.type
        })
        if (result.code === 200) {
            yield call(list, formValue.type, 0, 20)
            yield put({type: UPDATE_KEY_WORDS, update: true, message: result.message})
            Alert.success(result.message)
        } else {
            Alert.error(result.message)
        }
    } catch (e) {

    }
}

function* del(id: number, type: string) {
    try {
        const result = yield call(ajax.get, KEY_WORDS_DEL, {id: id, type: type})
        if (result.code === 200) {
            yield call(list, type, 0, 20)
            yield put({type: DELETE_KEY_WORDS, del: true, message: result.message})
            Alert.success(result.message)
        } else {
            Alert.error(result.message)
        }
    } catch (e) {

    }
}

function* watchReplyList() {
    while (true) {
        const listAction = yield take(GET_KEY_WORDS_LIST)
        yield call(list, listAction.replyType, listAction.page, listAction.pageSize)
    }
}

function* watchReplyUpdate() {
    while (true) {
        const updateAction = yield take(UPDATE_KEY_WORDS)
        yield call(update, updateAction.formValue)
    }
}

function* watchReplyDel() {
    while (true) {
        const delAction = yield take(DELETE_KEY_WORDS)
        yield call(del, delAction.id, delAction.editReply)
    }
}

export {
    watchReplyList,
    watchReplyUpdate,
    watchReplyDel
}