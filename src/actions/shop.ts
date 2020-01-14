import {DELETE_SHOP, GET_SHOP_LIST, MODIFY_SHOP, UPDATE_SHOP} from "../constants/actions";

export interface shop {
    type: string,
    list: any,
    total: number,
    update: boolean,
    del: boolean,
    formValue: any
}

function getListAction(page: number, pageSize: number) {
    return {
        type: GET_SHOP_LIST,
        page,
        pageSize,
    }
}

function updateAction(formValue: any) {
    return {
        type: UPDATE_SHOP,
        formValue
    }
}

function deleteAction(id: number, editType: string) {
    return {
        type: DELETE_SHOP,
        id,
        editType,
    }
}

function modifyAction(formValue: any) {
    return {
        type: MODIFY_SHOP,
        formValue
    }
}


export {
    getListAction,
    updateAction,
    deleteAction,
    modifyAction,
}