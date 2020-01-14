import {EXPANDED, UNEXPAND} from "../constants/actions";

export interface Layout {
    type: boolean
}

export default function expandAction() {
    const isExpand = localStorage.getItem("expand")
    if (isExpand === null || isExpand === "true") {
        localStorage.setItem("expand", "false")
    } else {
        localStorage.setItem("expand", "true")
    }
    return {
        type: isExpand === null || isExpand === "true" ? UNEXPAND : EXPANDED
    }
}

