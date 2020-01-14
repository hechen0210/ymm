import ajax from "../utils/ajax";
import {call, put, take} from "redux-saga/effects";
import {ALL_AREA, DELETE_AREA, GET_AREA_LIST, GET_AREA_LIST_SHOW, UPDATE_AREA} from "../constants/actions";
import {AREA_ALL, AREA_DEL, AREA_LIST, AREA_UPDATE} from "../constants/api";
import {push} from "connected-react-router";
import {Alert} from "rsuite";

function* list(page = 0, pageSize = 0) {
    try {
        let result = {code: 0, data: {list: "", total: ""}, message: ""}
        if (pageSize === 0) {
            result = yield call(ajax.get, AREA_ALL)
        } else {
            result = yield call(ajax.get, AREA_LIST, {page: page, pageSize: pageSize})
        }
        if (result.code === 200) {
            yield put({
                type: GET_AREA_LIST_SHOW,
                list: result.data.list,
                total: result.data.total,
                message: result.message
            })
        } else if (result.code === 403) {
            yield put({type: GET_AREA_LIST, message: result.message})
            yield put(push("/login"))
        }
    } catch (e) {

    }
}

function* update(id: number, name: string, type: string) {
    try {
        const result = yield call(ajax.post, AREA_UPDATE, {id: id, name: name, type: type})
        if (result.code === 200) {
            yield call(list, 0, 20)
            yield put({type: UPDATE_AREA, update: true, message: result.message})
            Alert.success(result.message)
        } else {
            Alert.error(result.message)
        }
    } catch (e) {

    }
}

function* del(id: number, type: string) {
    try {
        const result = yield call(ajax.get, AREA_DEL, {id: id, type: type})
        if (result.code === 200) {
            yield call(list, 0, 20)
            yield put({type: DELETE_AREA, del: true, message: result.message})
            Alert.success(result.message)
        } else {
            Alert.error(result.message)
        }
    } catch (e) {

    }
}

function* watchAreaList() {
    while (true) {
        const listAction = yield take(GET_AREA_LIST)
        yield call(list, listAction.page, listAction.pageSize)
    }
}

function* watchAreaUpdate() {
    while (true) {
        const updateAction = yield take(UPDATE_AREA)
        yield call(update, updateAction.id, updateAction.name, updateAction.editType)
    }
}

function* watchAreaDel() {
    while (true) {
        const delAction = yield take(DELETE_AREA)
        yield call(del, delAction.id, delAction.editType)
    }
}

function* watchAreaAll() {
    while (true) {
        yield take(ALL_AREA)
        yield call(list)
    }
}

export {
    watchAreaList,
    watchAreaUpdate,
    watchAreaDel,
    watchAreaAll
}