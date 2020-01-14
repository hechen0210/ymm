import {withRouter} from "react-router"
import Message from "../../component/message"
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {infoAction, modifyAction, updateAction} from "../../actions/message";

const mapStateToProps = (state: any) => ({
    info: state.Message.info
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    getInfo: (type: string) => dispatch(infoAction(type)),
    onEdit: (formValue: any) => dispatch(updateAction(formValue)),
    onModify: (formValue: any) => dispatch(modifyAction(formValue))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Message))