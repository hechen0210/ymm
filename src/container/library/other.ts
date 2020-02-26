import {withRouter} from "react-router"
import {Dispatch} from "redux";
import {connect} from "react-redux";
import LibraryOther from "../../component/library-other";
import {delAction, getListAction, selectAction, syncAction, updateAction} from "../../actions/library";

const mapStateToProps = (state: any) => ({
    list: state.LibraryOther.list,
    total: state.LibraryOther.total,
    selected: state.LibraryOther.id
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    getList: (type: string, title: string, page: number, pageSize: number) => dispatch(getListAction(type, title, page, pageSize)),
    onUpdate: (formValue: any) => dispatch(updateAction(formValue)),
    onSelect: (id: number) => dispatch(selectAction(id)),
    onDel: (id: number, type: string) => dispatch(delAction(id, type)),
    onSync:(type:string)=>dispatch(syncAction(type))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LibraryOther))