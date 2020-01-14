import {withRouter} from "react-router"
import Data from "../../component/data";
import {Dispatch} from "redux";
import {getListAction, setConditionAction} from "../../actions/data";
import {connect} from "react-redux";
import {dataCondition} from "../../actions/data";
import {getAreaAll} from "../../actions/area";

const mapStateToProps = (state: any) => ({
    list: state.Data.list,
    total: state.Data.total,
    condition: state.Data.condition,
    areaList: state.Area.list
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    getAreaList: () => dispatch(getAreaAll()),
    getList: (condition: dataCondition, page: number, pageSize: number) => dispatch(getListAction(condition, page, pageSize)),
    setCondition: (condition: dataCondition) => dispatch(setConditionAction(condition))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Data))