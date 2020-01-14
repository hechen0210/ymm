import Layout from "../../component/layout";
import {connect} from "react-redux";
import {withRouter} from "react-router"
import {getLoginInfo} from "../../utils/auth";
import {Dispatch} from "redux";
import expandAction from "../../actions/layout";
import {logoutAction} from "../../actions/login";
import {push} from "connected-react-router";
import {SETTING} from "../../constants/urls";
import {getActiveKey} from "../../constants/menu";

const mapStateToProps = (state: any, props: any) => ({
    loginInfo: getLoginInfo(),
    expand: state.Layout.expand,
    children: props.children,
    activeKey: getActiveKey(),
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onExpand: () => dispatch(expandAction()),
    onLogout: () => dispatch(logoutAction()),
    onSetting: () => dispatch(push(SETTING))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Layout))