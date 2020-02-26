import React from "react";
import PrivateRoute from "../component/privateRoute";
import PageLoading from "../component/loading";
import Layout from "../container/layout";
import {
    AREA_DATA_LIST,
    AREA_LIST,
    AUTO_REPLY_KEY_WORDS,
    AUTO_REPLY_MESSAGE, AUTO_REPLY_SUBSCRIBE, LIBRARY_IMG_TXT, LIBRARY_OTHER,
    QRCODE_LIST,
    SETTING,
} from "../constants/urls";

const Switch = require("react-router-dom").Switch;

const Setting = PageLoading(() => import("../container/setting"))
const Area = PageLoading(() => import("../container/area"))
const KeyWords = PageLoading(() => import("../container/replay/keyWords"))
const Message = PageLoading(() => import("../container/replay/message"))
const Subscribe = PageLoading(() => import("../container/replay/subscribe"))
const Qrcode = PageLoading(() => import("../container/qrcode"))
const AreaData = PageLoading(() => import("../container/data"))
const LibraryImgTxt = PageLoading(() => import("../container/library"))
const LibraryOther = PageLoading(() => import("../container/library/other"))
export default class AuthRouter extends React.Component<any, any> {
    render() {
        return (
            <Switch>
                <Layout>
                    <PrivateRoute exact path="/" component={Area}/>
                    <PrivateRoute exact path={SETTING} component={Setting}/>
                    <PrivateRoute exact path={AREA_LIST} component={Area}/>
                    <PrivateRoute exact path={LIBRARY_IMG_TXT} component={LibraryImgTxt}/>
                    <PrivateRoute exact path={LIBRARY_OTHER} component={LibraryOther}/>
                    <PrivateRoute exact path={AUTO_REPLY_KEY_WORDS} component={KeyWords}/>
                    <PrivateRoute exact path={AUTO_REPLY_MESSAGE} component={Message}/>
                    <PrivateRoute exact path={AUTO_REPLY_SUBSCRIBE} component={Subscribe}/>
                    <PrivateRoute exact path={QRCODE_LIST} component={Qrcode}/>
                    <PrivateRoute exact path={AREA_DATA_LIST} component={AreaData}/>
                </Layout>
            </Switch>
        )
    }
}
