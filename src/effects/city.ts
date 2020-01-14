import ajax from "../utils/ajax";
import {call, put, take} from "redux-saga/effects";
import {GET_CITY_LIST, GET_PROVINCE_LIST} from "../constants/actions";
import {ALL_CITY_LIST, CITY_LIST, PROVINCE_LIST} from "../constants/api";
import {GET_CITY_LIST_SHOW} from "../constants/actions";
import {push} from "connected-react-router";

function* cityList(page = 0, pageSize = 0, provinceId = 0) {
    try {
        let result = {code: 0, data: {list: [], total: 0}, message: ""}
        if (provinceId === 0) {
            result = yield call(ajax.get, CITY_LIST, {page: page, pageSize: pageSize})
        } else {
            result = yield call(ajax.get, ALL_CITY_LIST)
        }
        if (result.code === 200) {
            yield put({
                type: GET_CITY_LIST_SHOW,
                list: result.data.list,
                total: result.data.total,
                message: result.message
            })
        } else if (result.code === 403) {
            yield put({type: GET_CITY_LIST, message: result.message})
            yield put(push("/login"))
        }
    } catch (e) {

    }
}

function* provinceList() {
    try {
        const result = yield call(ajax.get, PROVINCE_LIST)
        if (result.code === 200) {
            yield put({
                type: GET_PROVINCE_LIST,
                list: result.data.list,
                total: result.data.total,
                message: result.message
            })
        } else if (result.code === 403) {
            yield put({type: GET_CITY_LIST, message: result.message})
            yield put(push("/login"))
        }
    } catch (e) {

    }
}

function* watchCityList() {
    while (true) {
        const listAction = yield take(GET_CITY_LIST)
        yield call(cityList, listAction.page, listAction.pages, listAction.provinceId)
    }
}

function* watchProvinceList() {
    while (true) {
        yield take(GET_PROVINCE_LIST)
        yield call(provinceList)
    }
}

export {
    watchCityList,
    watchProvinceList
}