import ajax from "../utils/ajax";
import {call, put, take} from "redux-saga/effects";
import {DELETE_MENU, GET_MENU_LIST, GET_MENU_LIST_SHOW, UPDATE_MENU} from "../constants/actions";
import {MENU_DEL, MENU_LIST, MENU_UPDATE} from "../constants/api";
import {push} from "connected-react-router";
import {Alert} from "rsuite";

function* list(page: number, pageSize: number) {
    try {
        const result = yield call(ajax.get, MENU_LIST, {page: page, pageSize: pageSize})
        if (result.code === 200) {
            yield put({
                type: GET_MENU_LIST_SHOW,
                list: result.data.list,
                total: result.data.total,
                message: result.message
            })
        } else if (result.code === 403) {
            yield put({type: GET_MENU_LIST, message: result.message})
            yield put(push("/login"))
        }
    } catch (e) {

    }
}

function* update(id: number, name: string, type: string) {
    try {
        const result = yield call(ajax.post, MENU_UPDATE, {id: id, name: name, type: type})
        if (result.code === 200) {
            yield call(list, 0, 20)
            yield put({type: UPDATE_MENU, update: true, message: result.message})
            Alert.success(result.message)
        } else {
            Alert.error(result.message)
        }
    } catch (e) {

    }
}

function* del(id: number, type: string) {
    try {
        const result = yield call(ajax.get, MENU_DEL, {id: id, type: type})
        if (result.code === 200) {
            yield call(list, 0, 20)
            yield put({type: DELETE_MENU, del: true, message: result.message})
            Alert.success(result.message)
        } else {
            Alert.error(result.message)
        }
    } catch (e) {

    }
}

function* watchMenuList() {
    while (true) {
        const listAction = yield take(GET_MENU_LIST)
        yield call(list, listAction.page, listAction.pageSize)
    }
}

function* watchMenuUpdate() {
    while (true) {
        const updateAction = yield take(UPDATE_MENU)
        yield call(update, updateAction.id, updateAction.name, updateAction.editMenu)
    }
}

function* watchMenuDel() {
    while (true) {
        const delAction = yield take(DELETE_MENU)
        yield call(del, delAction.id, delAction.editMenu)
    }
}

export {
    watchMenuList,
    watchMenuUpdate,
    watchMenuDel
}