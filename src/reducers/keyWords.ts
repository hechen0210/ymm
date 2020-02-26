import {keyWords} from "../actions/keyWords";
import {DELETE_KEY_WORDS, GET_KEY_WORDS_LIST_SHOW, MODIFY_KEY_WORDS, UPDATE_KEY_WORDS} from "../constants/actions";

export const initState = {
    list: [],
    total: 0,
    update: false,
    formValue: {
        "id": 0,
        "name": "",
        "match_type": "1",
        "key_words": [{
            "match": "1",
            "words": ""
        }],
        "content": [],
        "reply_type": "1",
        "type": "key_words"
    }
}

export default (state = initState, action: keyWords) => {
    if (action.type === GET_KEY_WORDS_LIST_SHOW) {
        return Object.assign({}, state, {
            list: action.list,
            total: action.total
        })
    } else if (action.type === UPDATE_KEY_WORDS) {
        return Object.assign({}, state, {
            update: action.update
        })
    } else if (action.type === DELETE_KEY_WORDS) {
        return Object.assign({}, state, {
            del: action.del
        })
    } else if (action.type === MODIFY_KEY_WORDS) {
        return Object.assign({}, state, {
            formValue: action.formValue
        })
    }
    return state
}