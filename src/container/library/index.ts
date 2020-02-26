import {withRouter} from "react-router"
import {Dispatch} from "redux";
import {connect} from "react-redux";
import Library from "../../component/library-img-txt";
import {delAction, getListAction, modifyAction, selectAction, updateAction} from "../../actions/library";

const mapStateToProps = (state: any) => ({
    list: state.LibraryImgTxt.list,
    picList: state.LibraryImgTxt.picList,
    total: state.LibraryImgTxt.total,
    selected: state.LibraryImgTxt.info,
    formValue: state.LibraryImgTxt.formValue
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    getList: (type: string, title: string, page: number, pageSize: number) => dispatch(getListAction(type, title, page, pageSize)),
    onUpdate: (formValue: any) => dispatch(updateAction(formValue)),
    onSelect: (info: any) => dispatch(selectAction(info)),
    onDel: (id: number, type: string) => dispatch(delAction(id, type)),
    onModify: (formValue: any) => dispatch(modifyAction(formValue))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Library))