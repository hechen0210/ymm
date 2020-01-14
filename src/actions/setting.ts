import {CHANGE_PASSWORD} from "../constants/actions";

export interface SettingAction {
    type: string,
    errorMessage: string
}

export function changePassword(oldPassword: string, newPassword: string, repeat: string) {
    return {
        type: CHANGE_PASSWORD,
        oldPassword,
        newPassword,
        repeat,
    }
}
