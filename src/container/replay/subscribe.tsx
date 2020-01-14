import {withRouter} from "react-router"
import Subscribe from "../../component/subscribe"
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {infoAction, modifyAction, updateAction} from "../../actions/subscribe";

const mapStateToProps = (state: any) => ({
    info: state.Subscribe.info
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    getInfo: (type: string) => dispatch(infoAction(type)),
    onEdit: (formValue: any) => dispatch(updateAction(formValue)),
    onModify: (formValue: any) => dispatch(modifyAction(formValue))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Subscribe))