import {withRouter} from "react-router"
import {Dispatch} from "redux";
import {deleteAction, getListAction, updateAction, modifyAction} from "../../actions/keyWords";
import {connect} from "react-redux";
import keyWords from "../../component/keyWords";

const mapStateToProps = (state: any) => ({
    list: state.KeyWords.list,
    total: state.KeyWords.total,
    update: state.KeyWords.update,
    del: state.KeyWords.del,
    formValue: state.KeyWords.formValue
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    getList: (type: string, page: number, pageSize: number) => dispatch(getListAction(type, page, pageSize)),
    onUpdate: (formValue: any) => dispatch(updateAction(formValue)),
    onDel: (id: number, type: string) => dispatch(deleteAction(id, type)),
    onModify: (formValue: any) => dispatch(modifyAction(formValue))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(keyWords))