import {withRouter} from "react-router"
import Type from "../../component/type";
import {Dispatch} from "redux";
import {deleteAction, getListAction, updateAction, modifyAction} from "../../actions/type";
import {connect} from "react-redux";

const mapStateToProps = (state: any) => ({
    list: state.ShopType.list,
    total: state.ShopType.total,
    update: state.ShopType.update,
    del: state.ShopType.del,
    formValue: state.ShopType.formValue
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    getList: (page: number, pageSize: number) => dispatch(getListAction(page, pageSize)),
    onUpdate: (id: number, name: string, type: string) => dispatch(updateAction(id, name, type)),
    onDel: (id: number, type: string) => dispatch(deleteAction(id, type)),
    onModify: (formValue: any) => dispatch(modifyAction(formValue))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Type))