import {message} from "../actions/message";
import {GET_MESSAGE_INFO, MODIFY_MESSAGE, UPDATE_MESSAGE} from "../constants/actions";

export const initState = {
    info: {
        "id": 0,
        "type": "message",
        "message_type": "text",
        "content": ""
    },
    update: false,
}

export default (state = initState, action: message) => {
    if (action.type === GET_MESSAGE_INFO) {
        return Object.assign({}, state, {
            info: action.info
        })
    } else if (action.type === UPDATE_MESSAGE) {
        return Object.assign({}, state, {
            update: action.update
        })
    } else if (action.type === MODIFY_MESSAGE) {
        return Object.assign({}, state, {
            formValue: action.info
        })
    }
    return state
}