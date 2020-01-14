import {city} from "../actions/city";

const initState = {
    list: [],
    total: 0
}

function City(state = initState, action: city) {
    return Object.assign({}, state, {
        list: action.list,
        total: action.total
    })
}

function Province(state = initState, action: city) {
    return Object.assign({}, state, {
        list: action.list,
        total: action.total
    })
}

export {
    City,
    Province
}