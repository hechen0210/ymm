import {CHANGE_PASSWORD} from "../constants/actions";

export interface SettingAction {
    type: string,
    errorMessage: string
}

export function changePassword(oldPassword: string, newPassword: string, repeat: string) {
    let errorMessage = ""
    return {
        type: CHANGE_PASSWORD,
        oldPassword: oldPassword,
        newPassword: newPassword,
        repeat: repeat,
        errorMessage: errorMessage
    }
}
