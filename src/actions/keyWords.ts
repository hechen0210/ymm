import {DELETE_KEY_WORDS, GET_KEY_WORDS_LIST, MODIFY_KEY_WORDS, UPDATE_KEY_WORDS} from "../constants/actions";

export interface keyWords {
    type: string
    list: any,
    total: number,
    update: boolean,
    del: boolean,
    formValue: any
}


function getListAction(replyType: string, page: number, pageSize: number) {
    return {
        type: GET_KEY_WORDS_LIST,
        replyType,
        page,
        pageSize,
    }
}

function updateAction(formValue: any) {
    return {
        type: UPDATE_KEY_WORDS,
        formValue
    }
}

function deleteAction(id: number, editType: string) {
    return {
        type: DELETE_KEY_WORDS,
        id,
        editType,
    }
}

function modifyAction(formValue: any) {
    return {
        type: MODIFY_KEY_WORDS,
        formValue
    }
}

export {
    getListAction,
    updateAction,
    deleteAction,
    modifyAction
}