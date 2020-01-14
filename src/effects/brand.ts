import ajax from "../utils/ajax";
import {call, put, take} from "redux-saga/effects";
import {ALL_BRAND, DELETE_BRAND, GET_BRAND_LIST, GET_BRAND_LIST_SHOW, UPDATE_BRAND} from "../constants/actions";
import {BRAND_ALL, BRAND_DEL, BRAND_LIST, BRAND_UPDATE} from "../constants/api";
import {push} from "connected-react-router";
import {Alert} from "rsuite";

function* list(page = 0, pageSize = 0) {
    try {
        let result = {code: 0, data: {list: "", total: ""}, message: ""}
        if (pageSize === 0) {
            result = yield call(ajax.get, BRAND_ALL)
        } else {
            result = yield call(ajax.get, BRAND_LIST, {page: page, pageSize: pageSize})
        }
        if (result.code === 200) {
            yield put({
                type: GET_BRAND_LIST_SHOW,
                list: result.data.list,
                total: result.data.total,
                message: result.message
            })
        } else if (result.code === 403) {
            yield put({type: GET_BRAND_LIST, message: result.message})
            yield put(push("/login"))
        }
    } catch (e) {

    }
}

function* update(id: number, name: string, type: string) {
    try {
        const result = yield call(ajax.post, BRAND_UPDATE, {id: id, name: name, type: type})
        if (result.code === 200) {
            yield call(list, 0, 20)
            yield put({type: UPDATE_BRAND, update: true, message: result.message})
            Alert.success(result.message)
        } else {
            Alert.error(result.message)
        }
    } catch (e) {

    }
}

function* del(id: number, type: string) {
    try {
        const result = yield call(ajax.get, BRAND_DEL, {id: id, type: type})
        if (result.code === 200) {
            yield call(list, 0, 20)
            yield put({type: DELETE_BRAND, del: true, message: result.message})
            Alert.success(result.message)
        } else {
            Alert.error(result.message)
        }
    } catch (e) {

    }
}

function* watchBrandList() {
    while (true) {
        const listAction = yield take(GET_BRAND_LIST)
        yield call(list, listAction.page, listAction.pageSize)
    }
}

function* watchBrandUpdate() {
    while (true) {
        const updateAction = yield take(UPDATE_BRAND)
        yield call(update, updateAction.id, updateAction.name, updateAction.editType)
    }
}

function* watchBrandDel() {
    while (true) {
        const delAction = yield take(DELETE_BRAND)
        yield call(del, delAction.id, delAction.editType)
    }
}

function* watchBrandAll() {
    while (true) {
        const allAction = yield take(ALL_BRAND)
        yield call(list)
    }
}

export {
    watchBrandList,
    watchBrandUpdate,
    watchBrandDel,
    watchBrandAll
}