import ajax from "../utils/ajax";
import {call, put, take} from "redux-saga/effects";
import {
    CREATE_QRCODE,
    DEL_QRCODE,
    DOWNLOAD_QRCODE,
    GET_QRCODE_LIST,
    GET_QRCODE_LIST_SHOW,
    UPDATE_QRCODE
} from "../constants/actions";
import {QRCODE_LIST, QRCODE_CREATE, QRCODE_DEL, QRCODE_DOWNLOAD} from "../constants/api";
import {push} from "connected-react-router";
import {Alert} from "rsuite";

function* list(page: number, pageSize: number) {
    try {

        const result = yield call(ajax.get, QRCODE_LIST, {page: page, pageSize: pageSize})
        if (result.code === 200) {
            yield put({
                type: GET_QRCODE_LIST_SHOW,
                list: result.data.list,
                total: result.data.total,
                message: result.message
            })
        } else if (result.code === 403) {
            yield put({type: GET_QRCODE_LIST, message: result.message})
            yield put(push("/login"))
        }
    } catch (e) {

    }
}

function* create() {
    try {
        const result = yield call(ajax.get, QRCODE_CREATE)
        if (result.code === 200) {
            yield call(list, 0, 20)
            yield put({type: UPDATE_QRCODE, update: true, message: result.message})
            Alert.success(result.message)
        } else {
            Alert.error(result.message)
        }
    } catch (e) {

    }
}

function* del(id: number) {
    try {
        const result = yield call(ajax.get, QRCODE_DEL, {id: id})
        if (result.code === 200) {
            yield call(list, 0, 20)
            yield put({type: DEL_QRCODE, del: true, message: result.message})
            Alert.success(result.message)
        } else {
            Alert.error(result.message)
        }
    } catch (e) {

    }
}

function base64ToBlob(code: string) {
    // let parts = code.split(';base64,');
    // let contentType = parts[0].split(':')[1];
    let raw = (window as any).atob(code);
    let rawLength = raw.length;
    let uInt8Array = new Uint8Array(rawLength);
    for (let i = 0; i < rawLength; ++i) {
        uInt8Array[i] = raw.charCodeAt(i);
    }
    return new Blob([uInt8Array], {type: "jpg"});
}

function* downLoad(id: number, name: string) {
    try {
        const result = yield call(ajax.get, QRCODE_DOWNLOAD, {id: id})
        if (result.code === 200) {
            let aLink = document.createElement('a');
            let blob = base64ToBlob(result.data);
            let evt = document.createEvent('HTMLEvents');
            evt.initEvent('click', true, true);
            aLink.download = name + ".jpg";
            aLink.href = URL.createObjectURL(blob);
            aLink.dispatchEvent(new MouseEvent('click', {bubbles: true, cancelable: true, view: window}));
        } else {
            Alert.error(result.message)
        }
    } catch (e) {

    }
}

function* watchQrcodeList() {
    while (true) {
        const listAction = yield take(GET_QRCODE_LIST)
        yield call(list, listAction.page, listAction.pageSize)
    }
}

function* watchQrcodeCreate() {
    while (true) {
        yield take(CREATE_QRCODE)
        yield call(create)
    }
}

function* watchQrcodeDel() {
    while (true) {
        const delAction = yield take(DEL_QRCODE)
        yield call(del, delAction.id)
    }
}

function* watchQrcodeDownLoad() {
    while (true) {
        const downLoadAction = yield take(DOWNLOAD_QRCODE)
        yield call(downLoad, downLoadAction.id, downLoadAction.name)
    }
}

export {
    watchQrcodeList,
    watchQrcodeCreate,
    watchQrcodeDel,
    watchQrcodeDownLoad
}