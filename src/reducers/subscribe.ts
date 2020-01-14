import {message} from "../actions/message";
import {
    GET_SUBSCRIBE_INFO,
    MODIFY_SUBSCRIBE,
    UPDATE_SUBSCRIBE
} from "../constants/actions";

export const initState = {
    info: {
        "id": 0,
        "type": "subscribe",
        "message_type": "text",
        "content": ""
    },
    update: false,
}

export default (state = initState, action: message) => {
    console.log(action)
    if (action.type === GET_SUBSCRIBE_INFO) {
        return Object.assign({}, state, {
            info: action.info
        })
    } else if (action.type === UPDATE_SUBSCRIBE) {
        return Object.assign({}, state, {
            update: action.update
        })
    } else if (action.type === MODIFY_SUBSCRIBE) {
        return Object.assign({}, state, {
            info: action.info
        })
    }
    return state
}