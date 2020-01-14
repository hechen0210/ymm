import {DELETE_MENU, GET_MENU_LIST, MODIFY_MENU, UPDATE_MENU} from "../constants/actions";

export interface menu {
    type: string
    list: any,
    total: number,
    update: boolean,
    del: boolean,
    formValue: any
}


function getListAction(page: number, pageSize: number) {
    return {
        type: GET_MENU_LIST,
        page,
        pageSize,
    }
}

function updateAction(id: number, name: string, editType: string) {
    return {
        type: UPDATE_MENU,
        id,
        name,
        editType,
    }
}

function deleteAction(id: number, editType: string) {
    return {
        type: DELETE_MENU,
        id,
        editType,
    }
}

function modifyAction(formValue: any) {
    return {
        type: MODIFY_MENU,
        formValue
    }
}

export {
    getListAction,
    updateAction,
    deleteAction,
    modifyAction
}