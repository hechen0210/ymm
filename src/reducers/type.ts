import {type} from "../actions/type";
import {ALL_TYPE, DELETE_TYPE, GET_TYPE_LIST_SHOW, MODIFY_TYPE, UPDATE_TYPE} from "../constants/actions";

const initState = {
    list: [],
    total: 0,
    update: false,
    formValue: {"id": 0, "name": ""}
}

export default (state = initState, action: type) => {
    if (action.type === GET_TYPE_LIST_SHOW || action.type === ALL_TYPE) {
        return Object.assign({}, state, {
            list: action.list,
            total: action.total
        })
    } else if (action.type === UPDATE_TYPE) {
        return Object.assign({}, state, {
            update: action.update
        })
    } else if (action.type === DELETE_TYPE) {
        return Object.assign({}, state, {
            del: action.del
        })
    } else if (action.type === MODIFY_TYPE) {
        return Object.assign({}, state, {
            formValue: action.formValue
        })
    }
    return state
}