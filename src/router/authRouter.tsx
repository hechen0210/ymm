import React from "react";
import PrivateRoute from "../component/privateRoute";
import PageLoading from "../component/loading";
import Layout from "../container/layout";
import {
    AREA_DATA_LIST,
    AREA_LIST,
    AUTO_REPLY_KEY_WORDS,
    AUTO_REPLY_MESSAGE, AUTO_REPLY_SUBSCRIBE,
    BRAND_LIST,
    MENU_LIST, QRCODE_LIST,
    SETTING,
    SHOP_LIST,
    TYPE_LIST
} from "../constants/urls";

const Switch = require("react-router-dom").Switch;

const Main = PageLoading(() => import("../container/main"))
const Setting = PageLoading(() => import("../container/setting"))
const Area = PageLoading(() => import("../container/area"))
const Brand = PageLoading(() => import("../container/brand"))
const Type = PageLoading(() => import("../container/type"))
const Menu = PageLoading(() => import("../container/menu"))
const KeyWords = PageLoading(() => import("../container/replay/keyWords"))
const Message = PageLoading(() => import("../container/replay/message"))
const Subscribe = PageLoading(() => import("../container/replay/subscribe"))
const Shop = PageLoading(() => import("../container/shop"))
const Qrcode = PageLoading(() => import("../container/qrcode"))
const AreaData = PageLoading(() => import("../container/data"))
export default class AuthRouter extends React.Component<any, any> {
    render() {
        return (
            <Switch>
                <Layout>
                    <PrivateRoute exact path="/" component={Area}/>
                    <PrivateRoute exact path={SETTING} component={Setting}/>
                    <PrivateRoute exact path={AREA_LIST} component={Area}/>
                    <PrivateRoute exact path={BRAND_LIST} component={Brand}/>
                    <PrivateRoute exact path={TYPE_LIST} component={Type}/>
                    <PrivateRoute exact path={MENU_LIST} component={Menu}/>
                    <PrivateRoute exact path={AUTO_REPLY_KEY_WORDS} component={KeyWords}/>
                    <PrivateRoute exact path={AUTO_REPLY_MESSAGE} component={Message}/>
                    <PrivateRoute exact path={AUTO_REPLY_SUBSCRIBE} component={Subscribe}/>
                    <PrivateRoute exact path={SHOP_LIST} component={Shop}/>
                    <PrivateRoute exact path={QRCODE_LIST} component={Qrcode}/>
                    <PrivateRoute exact path={AREA_DATA_LIST} component={AreaData}/>
                </Layout>
            </Switch>
        )
    }
}
