import {connect} from "react-redux";
import Login from "../../component/login";
import {isLogin} from "../../types";
import {Dispatch} from "redux";
import {loginAction} from "../../actions/login";
import {isAuth} from "../../utils/auth";
import {withRouter} from "react-router"

const mapStateToProps = (state: any): { isLogin: isLogin, message: string } => ({
    isLogin: isAuth(),
    message: state.Login.message
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onLogin: (account: string, password: string) => dispatch(loginAction(account, password)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))
