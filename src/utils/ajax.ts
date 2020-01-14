import {getCookie} from "./cookie";
import axios, {} from "axios"
import {DOMAIN} from "../constants/api";
import {Alert} from "rsuite";

function setHeaders(header = {}) {
    return {
        'Content-Type': 'application/x-www-form-urlencoded', // 指定提交方式为表单提交
        'Authorization': 'Bearer ' + getCookie('token') === "undefined" ? "" : getCookie("token"),
        ...header
    }
}

async function post(url: string, data: object, header = {}) {
    try {
        return axios({
            method: "post",
            baseURL: DOMAIN,
            url: url,
            headers: setHeaders(header),
            data: JSON.stringify(data)
        }).then(response => {
            if (response.status === 200) {
                return response.data
            }
        }).catch(err => {
            throw "请求失败，请重试"
        })
    } catch (e) {
        Alert.error(e)
    }
}

async function get(url: string, data = {}, header = {}) {
    try {
        return axios({
            method: "get",
            baseURL: DOMAIN,
            url: url,
            headers: setHeaders(header),
            params: data
        }).then(response => {
            if (response.status === 200) {
                return response.data
            }
        }).catch(err => {
            throw "请求失败，请重试"
        })
    } catch (e) {
        Alert.error(e)
    }
}


export default {
    post,
    get
}