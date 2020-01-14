import {GET_CITY_LIST, GET_PROVINCE_LIST} from "../constants/actions";

export interface city {
    type: string
    list: any
    total: number
}


function getCity(page = 0, pageSize = 0, provinceId = 0) {
    return {
        type: GET_CITY_LIST,
        page,
        pageSize,
        provinceId
    }
}

function getProvince() {
    return {
        type: GET_PROVINCE_LIST
    }
}

export {
    getCity,
    getProvince
}