import {shop} from "../actions/shop";
import {DELETE_SHOP, GET_SHOP_LIST, MODIFY_SHOP, UPDATE_SHOP} from "../constants/actions";

export const initState = {
    list: [],
    total: 0,
    formValue: {
        id: 0,
        area_id: 0,
        brand_id: 0,
        type_id: 0,
        province: 0,
        city: 0,
        name: "",
        mark: ""
    }
}

export default (state = initState, action: shop) => {
    if (action.type === GET_SHOP_LIST) {
        return Object.assign({}, state, {
            list: action.list,
            total: action.total
        })
    } else if (action.type === UPDATE_SHOP) {
        return Object.assign({}, state, {
            update: action.update
        })
    } else if (action.type === DELETE_SHOP) {
        return Object.assign({}, state, {
            del: action.del
        })
    } else if (action.type === MODIFY_SHOP) {
        return Object.assign({}, state, {
            formValue: action.formValue
        })
    }
    return state
}