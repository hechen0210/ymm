import {area} from "../actions/area";
import {ALL_AREA, DELETE_AREA, GET_AREA_LIST_SHOW, MODIFY_AREA, UPDATE_AREA} from "../constants/actions";

const initState = {
    list: [],
    total: 0,
    update: false,
    formValue: {"id": 0, "name": ""}
}

export default (state = initState, action: area) => {
    if (action.type === GET_AREA_LIST_SHOW || action.type === ALL_AREA) {
        return Object.assign({}, state, {
            list: action.list,
            total: action.total
        })
    } else if (action.type === UPDATE_AREA) {
        return Object.assign({}, state, {
            update: action.update
        })
    } else if (action.type === DELETE_AREA) {
        return Object.assign({}, state, {
            del: action.del
        })
    } else if (action.type === MODIFY_AREA) {
        return Object.assign({}, state, {
            formValue: action.formValue
        })
    }
    return state
}