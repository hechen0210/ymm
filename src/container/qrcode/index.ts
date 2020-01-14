import {withRouter} from "react-router"
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {createAction, delAction, downAction, getListAction, modifyAction, updateAction} from "../../actions/qrcode";
import Qrcode from "../../component/qrcode";

const mapStateToProps = (state: any) => ({
    list: state.Qrcode.list,
    total: state.Qrcode.total,
    // formValue: state.Qrcode.formValue,
    // areaList: state.Area.list,
    // brandList: state.Brand.list,
    // typeList: state.ShopType.list,
    // province: state.Province.list,
    // city: state.City.list,
})
const mapDispatchToProps = (dispatch: Dispatch) => ({
    // getArea: () => dispatch(getAreaAll()),
    // getBrand: () => dispatch(getBrandAll()),
    // getType: () => dispatch(getTypeAll()),
    // getProvince: () => dispatch(getProvince()),
    // getCity: (provinceId: number) => dispatch(getCity(0, 0, provinceId)),
    getList: (page: number, pageSize: number) => dispatch(getListAction(page, pageSize)),
    // onUpdate: (formValue: any) => dispatch(updateAction(formValue)),
    // onModify: (formValue: any) => dispatch(modifyAction(formValue))
    onCreate: () => dispatch(createAction()),
    onDownLoad: (id: number, name: string) => dispatch(downAction(id, name)),
    onDel: (id: number) => dispatch(delAction(id))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Qrcode))