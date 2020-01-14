import {GET_DATA_LIST, SET_CONDITION} from "../constants/actions";

export interface dataCondition {
    area: string
    start_time: string
    end_time: string
}

export interface data {
    type: string
    list: any
    total: number
    condition: dataCondition
}

function getListAction(condition: dataCondition, page: number, pageSize: number) {
    return {
        type: GET_DATA_LIST,
        condition,
        page,
        pageSize
    }
}

function setConditionAction(condition: dataCondition) {
    return {
        type: SET_CONDITION,
        condition
    }
}

export {
    getListAction,
    setConditionAction
}