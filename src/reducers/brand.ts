import {brand} from "../actions/brand";
import {ALL_BRAND, DELETE_BRAND, GET_BRAND_LIST_SHOW, MODIFY_BRAND, UPDATE_BRAND} from "../constants/actions";

const initState = {
    list: [],
    total: 0,
    update: false,
    formValue: {"id": 0, "name": ""}
}

export default (state = initState, action: brand) => {
    if (action.type === GET_BRAND_LIST_SHOW || action.type === ALL_BRAND) {
        return Object.assign({}, state, {
            list: action.list,
            total: action.total
        })
    } else if (action.type === UPDATE_BRAND) {
        return Object.assign({}, state, {
            update: action.update
        })
    } else if (action.type === DELETE_BRAND) {
        return Object.assign({}, state, {
            del: action.del
        })
    } else if (action.type === MODIFY_BRAND) {
        return Object.assign({}, state, {
            formValue: action.formValue
        })
    }
    return state
}