import {qrcode} from "../actions/qrcode";
import { GET_QRCODE_LIST_SHOW} from "../constants/actions";

export const initState = {
    list: [],
    total: 0,
    formValue: {},
    qrcode: ""
}

export default (state = initState, action: qrcode) => {
    if (action.type === GET_QRCODE_LIST_SHOW) {
        return Object.assign({}, state, {
            list: action.list,
            total: action.total
        })
    }
    return state
}