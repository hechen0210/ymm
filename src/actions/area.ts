import {ALL_AREA, DELETE_AREA, GET_AREA_LIST, MODIFY_AREA, UPDATE_AREA} from "../constants/actions";

export interface area {
    type: string
    list: any,
    total: number,
    update: boolean,
    del: boolean,
    formValue: any
}


function getListAction(page: number, pageSize: number) {
    return {
        type: GET_AREA_LIST,
        page,
        pageSize,
    }
}

function updateAction(id: number, name: string, editType: string) {
    return {
        type: UPDATE_AREA,
        id,
        name,
        editType,
    }
}

function deleteAction(id: number, editType: string) {
    return {
        type: DELETE_AREA,
        id,
        editType,
    }
}

function modifyAction(formValue: any) {
    return {
        type: MODIFY_AREA,
        formValue
    }
}

function getAreaAll() {
    return {
        type: ALL_AREA
    }
}

export {
    getListAction,
    updateAction,
    deleteAction,
    modifyAction,
    getAreaAll,
}