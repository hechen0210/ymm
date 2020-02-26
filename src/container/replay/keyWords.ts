import {withRouter} from "react-router"
import {Dispatch} from "redux";
import {deleteAction, getListAction, updateAction, modifyAction} from "../../actions/keyWords";
import {connect} from "react-redux";
import keyWords from "../../component/keyWords";
import * as libAction from "../../actions/library"

const mapStateToProps = (state: any) => ({
    list: state.KeyWords.list,
    picList: {"total": state.LibraryOther.total, "list": state.LibraryOther.list},
    newsList: {"total": state.LibraryImgTxt.total, "list": state.LibraryImgTxt.list},
    total: state.KeyWords.total,
    update: state.KeyWords.update,
    del: state.KeyWords.del,
    formValue: state.KeyWords.formValue,
    selected: state.LibraryImgTxt.info,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    getList: (type: string, page: number, pageSize: number) => dispatch(getListAction(type, page, pageSize)),
    onUpdate: (formValue: any) => dispatch(updateAction(formValue)),
    onDel: (id: number, type: string) => dispatch(deleteAction(id, type)),
    onModify: (formValue: any) => dispatch(modifyAction(formValue)),
    getPicList: (type: string, title: string, page: number, pageSize: number) => dispatch(libAction.getListAction(type, title, page, pageSize))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(keyWords))