import {withRouter} from "react-router"
import {Dispatch} from "redux";
import {connect} from "react-redux";
import Library from "../../component/library-img-txt";
import {
    cleanDoneAction,
    delAction,
    getInfoAction,
    getListAction,
    modifyAction,
    selectAction,
    syncAction,
    updateAction
} from "../../actions/library";

const mapStateToProps = (state: any) => ({
    list: state.LibraryImgTxt.list,
    picList: state.LibraryImgTxt.picList,
    total: state.LibraryImgTxt.total,
    selected: state.LibraryImgTxt.info,
    formValue: state.LibraryImgTxt.formValue,
    synced: state.LibraryImgTxt.synced,
    done: state.LibraryImgTxt.done
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    getList: (type: string, title: string, page: number, pageSize: number) => dispatch(getListAction(type, title, page, pageSize)),
    onUpdate: (formValue: any) => dispatch(updateAction(formValue)),
    onSelect: (info: any) => dispatch(selectAction(info)),
    onDel: (id: number, type: string) => dispatch(delAction(id, type)),
    onModify: (formValue: any) => dispatch(modifyAction(formValue)),
    onSync: (type: string) => dispatch(syncAction(type)),
    getInfo: (id: number) => dispatch(getInfoAction(id)),
    cleanDone: () => dispatch(cleanDoneAction())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Library))