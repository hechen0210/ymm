import {withRouter} from "react-router"
import Brand from "../../component/brand";
import {Dispatch} from "redux";
import {deleteAction, getListAction, updateAction, modifyAction} from "../../actions/brand";
import {connect} from "react-redux";

const mapStateToProps = (state: any) => ({
    list: state.Brand.list,
    total: state.Brand.total,
    update: state.Brand.update,
    del: state.Brand.del,
    formValue: state.Brand.formValue
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    getList: (page: number, pageSize: number) => dispatch(getListAction(page, pageSize)),
    onUpdate: (id: number, name: string, type: string) => dispatch(updateAction(id, name, type)),
    onDel: (id: number, type: string) => dispatch(deleteAction(id, type)),
    onModify: (formValue: any) => dispatch(modifyAction(formValue))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Brand))