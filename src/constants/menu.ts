import {
    AREA_DATA_LIST,
    AREA_LIST,
    AUTO_REPLY_KEY_WORDS,
    AUTO_REPLY_MESSAGE, AUTO_REPLY_SUBSCRIBE,
    BRAND_LIST,
    CITY_LIST,
    MENU_LIST, QRCODE_LIST, SHOP_LIST,
    TYPE_LIST
} from "./urls";

export const menuList = [
    {
        "name": "系统设置",
        "key": "2",
        "url": "",
        "icon": "",
        "sub": [
            {
                "name": "区域列表",
                "key": "2-1",
                "url": AREA_LIST
            },
            {
                "name": "品牌列表",
                "key": "2-2",
                "url": BRAND_LIST
            },
            {
                "name": "性质列表",
                "key": "2-3",
                "url": TYPE_LIST
            },
            {
                "name": "城市列表",
                "key": "2-4",
                "url": CITY_LIST
            }
        ]
    },
    {
        "name": "菜单管理",
        "key": "3",
        "url": "",
        "icon": "",
        "sub": [
            {
                "name": "菜单列表",
                "key": "3-1",
                "url": MENU_LIST
            },
        ]
    },
    {
        "name": "自动回复",
        "key": "4",
        "url": "",
        "icon": "",
        "sub": [
            {
                "name": "关键词回复",
                "key": "4-1",
                "url": AUTO_REPLY_KEY_WORDS
            },
            {
                "name": "收到消息回复",
                "key": "4-2",
                "url": AUTO_REPLY_MESSAGE
            },
            {
                "name": "关注回复",
                "key": "4-3",
                "url": AUTO_REPLY_SUBSCRIBE
            },
        ]
    },
    {
        "name": "门店管理",
        "key": "5",
        "url": "",
        "icon": "",
        "sub": [
            {
                "name": "门店列表",
                "key": "5-1",
                "url": SHOP_LIST
            },
        ]
    },
    {
        "name": "二维码管理",
        "key": "6",
        "url": "",
        "icon": "",
        "sub": [
            {
                "name": "二维码列表",
                "key": "6-1",
                "url": QRCODE_LIST
            },
        ]
    },
    {
        "name": "数据管理",
        "key": "7",
        "url": "",
        "icon": "",
        "sub": [
            {
                "name": "区域数据",
                "key": "7-1",
                "url": AREA_DATA_LIST
            },
        ]
    }
]

export function getActiveKey() {
    const url = window.location.pathname
    for (let i = 0; i < menuList.length; i++) {
        for (let j = 0; j < menuList[i].sub.length; j++) {
            if (menuList[i].sub[j].url === url) {
                return menuList[i].sub[j].key
            }
        }
    }
    return ""
}