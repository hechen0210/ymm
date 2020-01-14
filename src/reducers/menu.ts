import {menu} from "../actions/menu";
import {DELETE_MENU, GET_MENU_LIST_SHOW, MODIFY_MENU, UPDATE_MENU} from "../constants/actions";

const initState = {
    list: [],
    total: 0,
    update: false,
    formValue: {"id": 0, "name": ""}
}

export default (state = initState, action: menu) => {
    if (action.type === GET_MENU_LIST_SHOW) {
        return Object.assign({}, state, {
            list: action.list,
            total: action.total
        })
    } else if (action.type === UPDATE_MENU) {
        return Object.assign({}, state, {
            update: action.update
        })
    } else if (action.type === DELETE_MENU) {
        return Object.assign({}, state, {
            del: action.del
        })
    } else if (action.type === MODIFY_MENU) {
        return Object.assign({}, state, {
            formValue: action.formValue
        })
    }
    return state
}