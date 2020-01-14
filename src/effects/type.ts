import ajax from "../utils/ajax";
import {call, put, take} from "redux-saga/effects";
import {ALL_TYPE, DELETE_TYPE, GET_TYPE_LIST, GET_TYPE_LIST_SHOW, UPDATE_TYPE} from "../constants/actions";
import {TYPE_ALL, TYPE_DEL, TYPE_LIST, TYPE_UPDATE} from "../constants/api";
import {push} from "connected-react-router";
import {Alert} from "rsuite";

function* list(page = 0, pageSize = 0) {
    try {
        let result = {code: 0, data: {list: "", total: ""}, message: ""}
        if (pageSize === 0) {
            result = yield call(ajax.get, TYPE_ALL)
        } else {
            result = yield call(ajax.get, TYPE_LIST, {page: page, pageSize: pageSize})
        }
        if (result.code === 200) {
            yield put({
                type: GET_TYPE_LIST_SHOW,
                list: result.data.list,
                total: result.data.total,
                message: result.message
            })
        } else if (result.code === 403) {
            yield put({type: GET_TYPE_LIST, message: result.message})
            yield put(push("/login"))
        }
    } catch (e) {

    }
}

function* update(id: number, name: string, type: string) {
    try {
        const result = yield call(ajax.post, TYPE_UPDATE, {id: id, name: name, type: type})
        if (result.code === 200) {
            yield call(list, 0, 20)
            yield put({type: UPDATE_TYPE, update: true, message: result.message})
            Alert.success(result.message)
        } else {
            Alert.error(result.message)
        }
    } catch (e) {

    }
}

function* del(id: number, type: string) {
    try {
        const result = yield call(ajax.get, TYPE_DEL, {id: id, type: type})
        if (result.code === 200) {
            yield call(list, 0, 20)
            yield put({type: DELETE_TYPE, del: true, message: result.message})
            Alert.success(result.message)
        } else {
            Alert.error(result.message)
        }
    } catch (e) {

    }
}

function* watchTypeList() {
    while (true) {
        const listAction = yield take(GET_TYPE_LIST)
        yield call(list, listAction.page, listAction.pageSize)
    }
}

function* watchTypeUpdate() {
    while (true) {
        const updateAction = yield take(UPDATE_TYPE)
        yield call(update, updateAction.id, updateAction.name, updateAction.editType)
    }
}

function* watchTypeDel() {
    while (true) {
        const delAction = yield take(DELETE_TYPE)
        yield call(del, delAction.id, delAction.editType)
    }
}

function* watchTypeAll() {
    while (true) {
        yield take(ALL_TYPE)
        yield call(list)
    }
}

export {
    watchTypeList,
    watchTypeUpdate,
    watchTypeDel,
    watchTypeAll
}