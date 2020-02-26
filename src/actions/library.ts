import {DEL_LIB, GET_LIB_LIST, MODIFY_LIB, SELECT_LIB, SYNC_LIB, UPDATE_LIB} from "../constants/actions";

export interface library {
    id: number
    type: string
    list: any
    total: number
    formValue: any
    info: any
    libType: string
}

function getListAction(libType: string, title: string, page: number, pageSize: number) {
    return {
        type: GET_LIB_LIST,
        libType,
        title,
        page,
        pageSize
    }
}

function modifyAction(formValue: any) {
    return {
        type: MODIFY_LIB,
        formValue
    }
}

function updateAction(formValue: any) {
    return {
        type: UPDATE_LIB,
        formValue
    }
}

function delAction(id: number, libType: string) {
    return {
        type: DEL_LIB,
        id: id,
        libType
    }
}

function syncAction(libType: string) {
    return {
        type: SYNC_LIB,
        libType
    }
}

function selectAction(info: any) {
    return {
        type: SELECT_LIB,
        info
    }
}

export {
    getListAction,
    modifyAction,
    updateAction,
    delAction,
    selectAction,
    syncAction
}