import {ALL_BRAND, DELETE_BRAND, GET_BRAND_LIST, MODIFY_BRAND, UPDATE_BRAND} from "../constants/actions";

export interface brand {
    type: string
    list: any,
    total: number,
    update: boolean,
    del: boolean,
    formValue: any
}


function getListAction(page: number, pageSize: number) {
    return {
        type: GET_BRAND_LIST,
        page,
        pageSize,
    }
}

function updateAction(id: number, name: string, editType: string) {
    return {
        type: UPDATE_BRAND,
        id,
        name,
        editType,
    }
}

function deleteAction(id: number, editType: string) {
    return {
        type: DELETE_BRAND,
        id,
        editType,
    }
}

function modifyAction(formValue: any) {
    return {
        type: MODIFY_BRAND,
        formValue
    }
}

function getBrandAll() {
    return {
        type: ALL_BRAND
    }
}

export {
    getListAction,
    updateAction,
    deleteAction,
    modifyAction,
    getBrandAll
}