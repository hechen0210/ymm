import {SettingAction} from "../actions/setting";
import {CHANGE_PASSWORD} from "../constants/actions";

export default (state = "", action: SettingAction) => {
    switch (action.type) {
        case CHANGE_PASSWORD:
            return Object.assign({}, state, {
                ErrorMessage: action.errorMessage
            })
        default:
            return state
    }
}