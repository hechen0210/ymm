import ajax from "../utils/ajax";
import {call, put, take} from "redux-saga/effects";
import {push} from "connected-react-router";
import {dataCondition} from "../actions/data";
import {DATA_LIST} from "../constants/api";
import {GET_AREA_LIST, GET_DATA_LIST, GET_DATA_LIST_SHOW} from "../constants/actions";

function* getList(condition: dataCondition, page: number, pageSize: number) {
    try {
        const result = yield call(ajax.post, DATA_LIST, {...condition, page: page, pageSize: pageSize})
        if (result.code === 200) {
            let list = []
            if (result.data.total > 0) {
                list = result.data.list
            }
            yield put({
                type: GET_DATA_LIST_SHOW,
                list: list,
                total: result.data.total,
                message: result.message
            })
        } else if (result.code === 403) {
            yield put({type: GET_AREA_LIST, message: result.message})
            yield put(push("/login"))
        }
    } catch (e) {

    }
}

function* watchDataList() {
    while (true) {
        const listAction = yield take(GET_DATA_LIST)
        yield call(getList, listAction.condition, listAction.page, listAction.pageSize)
    }
}

export {
    watchDataList
}