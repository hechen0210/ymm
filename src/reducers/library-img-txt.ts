import {library} from "../actions/library";
import {
    CLEAN_DONE,
    GET_LIB_INFO_SHOW,
    GET_LIB_LIST_SHOW,
    MODIFY_LIB,
    SELECT_LIB,
    SYNC_COMPLETED,
    SYNC_LIB
} from "../constants/actions";

export const initState = {
    list: [],
    picList: [],
    total: 0,
    synced: false,
    formValue: {
        "id": 0,
        "title": "",
        "author": "",
        "content": "",
        "show_cover_pic": false,
        "source_url": "",
        "comment": "2"
    },
    info: [],
    done: false
}
export default (state = initState, action: library) => {
    if (action.type === GET_LIB_LIST_SHOW) {
        if (action.libType === "image") {
            return Object.assign({}, state, {
                picList: action.list,
                total: action.total
            })
        }
        return Object.assign({}, state, {
            list: action.list,
            total: action.total
        })
    } else if (action.type === SELECT_LIB) {
        return Object.assign({}, state, {
            info: action.info
        })
    } else if (action.type === MODIFY_LIB) {
        return Object.assign({}, state, {
            formValue: action.formValue
        })
    } else if (action.type === SYNC_LIB) {
        return Object.assign({}, state, {
            synced: false
        })
    } else if (action.type === SYNC_COMPLETED) {
        return Object.assign({}, state, {
            synced: true
        })
    } else if (action.type === GET_LIB_INFO_SHOW) {
        return Object.assign({}, state, {
            formValue: action.info,
            done: true
        })
    } else if (action.type === CLEAN_DONE) {
        return Object.assign({}, state, {
                done: false
            }
        )
    }
    return state
}