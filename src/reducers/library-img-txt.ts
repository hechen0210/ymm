import {library} from "../actions/library";
import {GET_LIB_LIST_SHOW, SELECT_LIB} from "../constants/actions";

export const initState = {
    list: [],
    picList: [],
    total: 0,
    formValue: {
        "id": 0,
        "title": "",
        "author": "",
        "content": "",
        "show_cover_pic": false,
        "source_url": "",
        "comment": 0
    },
    info: []
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
    }
    return state
}