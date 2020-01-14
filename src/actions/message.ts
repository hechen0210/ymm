import {GET_MESSAGE, MODIFY_MESSAGE, UPDATE_MESSAGE} from "../constants/actions";

export interface message {
    type: string
    info: any,
    update: boolean,
}

function infoAction(replyType: string) {
    return {
        type: GET_MESSAGE,
        replyType
    }
}

function updateAction(formValue: any) {
    return {
        type: UPDATE_MESSAGE,
        formValue
    }
}

function modifyAction(formValue: any) {
    return {
        type: MODIFY_MESSAGE,
        info: formValue
    }
}

export {
    infoAction,
    updateAction,
    modifyAction
}