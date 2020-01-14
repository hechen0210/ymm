import {ALL_TYPE, DELETE_TYPE, GET_TYPE_LIST, MODIFY_TYPE, UPDATE_TYPE} from "../constants/actions";

export interface type {
    type: string
    list: any,
    total: number,
    update: boolean,
    del: boolean,
    formValue: any
}


function getListAction(page: number, pageSize: number) {
    return {
        type: GET_TYPE_LIST,
        page,
        pageSize,
    }
}

function updateAction(id: number, name: string, editType: string) {
    return {
        type: UPDATE_TYPE,
        id,
        name,
        editType,
    }
}

function deleteAction(id: number, editType: string) {
    return {
        type: DELETE_TYPE,
        id,
        editType,
    }
}

function modifyAction(formValue: any) {
    return {
        type: MODIFY_TYPE,
        formValue
    }
}

function getTypeAll() {
    return {
        type: ALL_TYPE
    }
}

export {
    getListAction,
    updateAction,
    deleteAction,
    modifyAction,
    getTypeAll
}