import ajax from "../utils/ajax";
import {call, put, take} from "redux-saga/effects";
import {LIBRARY_DEL, LIBRARY_LIST, LIBRARY_SYNC, LIBRARY_UPDATE} from "../constants/api";
import {push} from "connected-react-router";
import {DEL_LIB, GET_LIB_LIST, GET_LIB_LIST_SHOW, SYNC_LIB, UPDATE_LIB} from "../constants/actions";
import {Alert} from "rsuite";

function* getList(type: string, title: string, page: number, pageSize: number) {
    try {
        const result = yield call(ajax.get, LIBRARY_LIST, {type: type, title: title, page: page, pageSize: pageSize})
        if (result.code === 200) {
            yield put({
                type: GET_LIB_LIST_SHOW,
                libType: type,
                list: result.data.list,
                total: result.data.total
            })
        } else if (result.code === 403) {
            yield put(push("/login"))
        } else {
            Alert.error(result.message)
        }
    } catch (e) {

    }
}

function* update(formValue: any) {
    try {
        const result = yield call(ajax.post, LIBRARY_UPDATE, {...formValue})
        if (result.code === 200) {
            yield call(getList, "news", "", 0, 0)
            yield put({type: UPDATE_LIB, update: true, message: result.message})
            Alert.success(result.message)
        } else if (result.code === 403) {
            yield put(push("/login"))
        } else {
            Alert.error(result.message)
        }
    } catch (e) {

    }
}

function* del(id: number, type: string) {
    try {
        const result = yield call(ajax.get, LIBRARY_DEL, {id: id, type: type})
        if (result.code === 200) {
            yield call(getList, type, "", 0, 0)
            yield put({type: DEL_LIB, update: true, message: result.message})
            Alert.success(result.message)
        } else if (result.code === 403) {
            yield put(push("/login"))
        } else {
            Alert.error(result.message)
        }
    } catch (e) {

    }
}

function* sync(type: string) {
    try {
        const result = yield call(ajax.get, LIBRARY_SYNC, {type: type})
        if (result.code === 200) {
            yield call(getList, type, "", 0, 0)
            Alert.success(result.message)
        } else if (result.code === 403) {
            yield put(push("/login"))
        } else {
            Alert.error(result.message)
        }
    } catch (e) {

    }
}

function* watchLibList() {
    while (true) {
        const listAction = yield take(GET_LIB_LIST)
        yield call(getList, listAction.libType, listAction.title, listAction.page, listAction.pageSize)
    }
}

function* watchLibUpdate() {
    while (true) {
        const updateAction = yield take(UPDATE_LIB)
        yield call(update, updateAction.formValue)
    }
}

function* watchLibDel() {
    while (true) {
        const delAction = yield take(DEL_LIB)
        yield call(del, delAction.id, delAction.libType)
    }
}

function* watchSync() {
    while (true) {
        const syncAction = yield take(SYNC_LIB)
        yield call(sync, syncAction.libType)
    }
}

export {
    watchLibList,
    watchLibUpdate,
    watchLibDel,
    watchSync
}