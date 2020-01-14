import {withRouter} from "react-router"
import Menu from "../../component/menu";
import {Dispatch} from "redux";
import {deleteAction, getListAction, updateAction, modifyAction} from "../../actions/menu";
import {connect} from "react-redux";

const mapStateToProps = (state: any) => ({
    list: state.Menu.list,
    total: state.Menu.total,
    update: state.Menu.update,
    del: state.Menu.del,
    formValue: state.Menu.formValue
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    getList: (page: number, pageSize: number) => dispatch(getListAction(page, pageSize)),
    onUpdate: (id: number, name: string, type: string) => dispatch(updateAction(id, name, type)),
    onDel: (id: number, type: string) => dispatch(deleteAction(id, type)),
    onModify: (formValue: any) => dispatch(modifyAction(formValue))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Menu))