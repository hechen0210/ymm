import {all, fork} from "redux-saga/effects"
import {watchLogin, watchLogout} from "./login";
import {watchAreaList, watchAreaUpdate, watchAreaDel, watchAreaAll} from "./area";
import {watchReplyList, watchReplyUpdate, watchReplyDel} from "./keyWords";
import {watchMessageInfo, watchMessageUpdate} from "./message";
import {watchQrcodeList, watchQrcodeCreate, watchQrcodeDel, watchQrcodeDownLoad} from "./qrcode";
import {watchDataList} from "./data";
import {watchSubscribeInfo, watchSubscribeUpdate} from "./subscribe";
import {watchPassword} from "./setting";

function* effects() {
    yield all([
        fork(watchLogin),
        fork(watchLogout),
        fork(watchPassword),
        fork(watchAreaList),
        fork(watchAreaUpdate),
        fork(watchAreaDel),
        fork(watchAreaAll),
        fork(watchReplyList),
        fork(watchReplyUpdate),
        fork(watchReplyDel),
        fork(watchMessageInfo),
        fork(watchMessageUpdate),
        fork(watchSubscribeInfo),
        fork(watchSubscribeUpdate),
        fork(watchQrcodeList),
        fork(watchQrcodeCreate),
        fork(watchQrcodeDel),
        fork(watchQrcodeDownLoad),
        fork(watchDataList),
    ])
}

export default effects