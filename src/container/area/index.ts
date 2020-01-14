import {withRouter} from "react-router"
import Area from "../../component/area";
import {Dispatch} from "redux";
import {deleteAction, getListAction, updateAction, modifyAction} from "../../actions/area";
import {connect} from "react-redux";

const mapStateToProps = (state: any) => ({
    list: state.Area.list,
    total: state.Area.total,
    update: state.Area.update,
    del: state.Area.del,
    formValue: state.Area.formValue
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    getList: (page: number, pageSize: number) => dispatch(getListAction(page, pageSize)),
    onUpdate: (id: number, name: string, type: string) => dispatch(updateAction(id, name, type)),
    onDel: (id: number, type: string) => dispatch(deleteAction(id, type)),
    onModify: (formValue: any) => dispatch(modifyAction(formValue)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Area))