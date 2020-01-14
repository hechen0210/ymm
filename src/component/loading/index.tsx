import React from "react";
import Loadable from 'react-loadable'
import {Loader} from "rsuite";

const PageLoading = (component: any) => {
    return Loadable({
        loader: component,
        loading: () => <Loader backdrop center size="sm" content="加载中..." vertical/>
    })
}

export default PageLoading
