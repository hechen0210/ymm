import {
    GET_SUBSCRIBE,
    MODIFY_SUBSCRIBE,
    UPDATE_SUBSCRIBE
} from "../constants/actions";

export interface message {
    type: string
    info: any,
    update: boolean,
}

function infoAction(replyType: string) {
    return {
        type: GET_SUBSCRIBE,
        replyType
    }
}

function updateAction(formValue: any) {
    return {
        type: UPDATE_SUBSCRIBE,
        formValue
    }
}

function modifyAction(formValue: any) {
    return {
        type: MODIFY_SUBSCRIBE,
        info:formValue
    }
}

export {
    infoAction,
    updateAction,
    modifyAction
}