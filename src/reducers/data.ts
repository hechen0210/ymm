import {data} from "../actions/data";
import {GET_DATA_LIST_SHOW, SET_CONDITION} from "../constants/actions";

export const initState = {
    list: [],
    total: 0,
    condition: {
        area: "",
        start_time: "",
        end_time: ""
    }
}

export default (state = initState, action: data) => {
    if (action.type === GET_DATA_LIST_SHOW) {
        return Object.assign({}, state, {
            list: action.list,
            total: action.total
        })
    } else if (action.type === SET_CONDITION) {
        return Object.assign({}, state, {
            condition: action.condition
        })
    }
    return state
}