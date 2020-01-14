import {
    CREATE_QRCODE,
    DEL_QRCODE,
    DOWNLOAD_QRCODE,
    GET_QRCODE_LIST,
    MODIFY_QRCODE,
    UPDATE_QRCODE
} from "../constants/actions";

export interface qrcode {
    type: string,
    list: any,
    total: number,
    page: number,
    pageSize: number,
    qrcode: string
}

function getListAction(page: number, pageSize: number) {
    return {
        type: GET_QRCODE_LIST,
        page,
        pageSize
    }
}

function updateAction(formValue: any) {
    return {
        type: UPDATE_QRCODE,
        formValue
    }
}

function modifyAction(formValue: any) {
    return {
        type: MODIFY_QRCODE,
        formValue
    }
}

function createAction() {
    return {
        type: CREATE_QRCODE
    }
}

function delAction(id: number) {
    return {
        type: DEL_QRCODE,
        id
    }
}

function downAction(id: number, name: string) {
    return {
        type: DOWNLOAD_QRCODE,
        id,
        name
    }
}

export {
    getListAction,
    updateAction,
    modifyAction,
    delAction,
    createAction,
    downAction,
}