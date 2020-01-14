import {Layout} from "../actions/layout";
import {EXPANDED, UNEXPAND} from "../constants/actions";

export default (state = "", action: Layout) => {
    return Object.assign({}, state, {
        expand: [EXPANDED, UNEXPAND].indexOf(action.type) > -1 ? action.type === EXPANDED : true
    })
}