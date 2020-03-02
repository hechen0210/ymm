import {library} from "../actions/library";
import {GET_LIB_LIST_SHOW, SELECT_LIB, SYNC_COMPLETED, SYNC_LIB} from "../constants/actions";

export const initState = {
    list: [],
    total: 0,
    synced: false,
}

export default (state = initState, action: library) => {
    if (action.type === GET_LIB_LIST_SHOW) {
        return Object.assign({}, state, {
            list: action.list,
            total: action.total
        })
    } else if (action.type === SELECT_LIB) {
        return Object.assign({}, state, {
            id: action.id
        })
    } else if (action.type === SYNC_LIB) {
        return Object.assign({}, state, {
            synced: false
        })
    } else if (action.type === SYNC_COMPLETED) {
        return Object.assign({}, state, {
            synced: true
        })
    }
    return state
}