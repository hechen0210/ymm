import {withRouter} from "react-router"
import Setting from "../../component/setting";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {changePassword} from "../../actions/setting";

const mapStateToProps = (state: any) => ({
    errorMsg: state.Setting.ErrorMsg
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onSubmit: (oldPassword: string, newPassword: string, repeat: string) => dispatch(changePassword(oldPassword, newPassword, repeat))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Setting))