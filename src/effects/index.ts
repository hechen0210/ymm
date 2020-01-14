import {all, fork} from "redux-saga/effects"
import {watchLogin, watchLogout} from "./login";
import {watchAreaList, watchAreaUpdate, watchAreaDel, watchAreaAll} from "./area";
import {watchBrandList, watchBrandUpdate, watchBrandDel, watchBrandAll} from "./brand";
import {watchTypeList, watchTypeUpdate, watchTypeDel, watchTypeAll} from "./type";
import {watchReplyList, watchReplyUpdate, watchReplyDel} from "./keyWords";
import {watchMessageInfo, watchMessageUpdate} from "./message";
import {watchCityList, watchProvinceList} from "./city";
import {watchMenuList, watchMenuUpdate, watchMenuDel} from "./menu";
import {watchQrcodeList, watchQrcodeCreate, watchQrcodeDel, watchQrcodeDownLoad} from "./qrcode";
import {watchDataList} from "./data";
import {watchSubscribeInfo, watchSubscribeUpdate} from "./subscribe";

function* effects() {
    yield all([
        fork(watchLogin),
        fork(watchLogout),
        fork(watchAreaList),
        fork(watchAreaUpdate),
        fork(watchAreaDel),
        fork(watchAreaAll),
        fork(watchBrandList),
        fork(watchBrandUpdate),
        fork(watchBrandDel),
        fork(watchBrandAll),
        fork(watchTypeList),
        fork(watchTypeUpdate),
        fork(watchTypeDel),
        fork(watchTypeAll),
        fork(watchReplyList),
        fork(watchReplyUpdate),
        fork(watchReplyDel),
        fork(watchMessageInfo),
        fork(watchMessageUpdate),
        fork(watchSubscribeInfo),
        fork(watchSubscribeUpdate),
        fork(watchCityList),
        fork(watchProvinceList),
        fork(watchMenuList),
        fork(watchMenuUpdate),
        fork(watchMenuDel),
        fork(watchQrcodeList),
        fork(watchQrcodeCreate),
        fork(watchQrcodeDel),
        fork(watchQrcodeDownLoad),
        fork(watchDataList),
    ])
}

export default effects