import {withRouter} from "react-router"
import Shop from "../../component/shop";
import {Dispatch} from "redux";
import {getAreaAll} from "../../actions/area";
import {getBrandAll} from "../../actions/brand";
import {getTypeAll} from "../../actions/type";
import {connect} from "react-redux";
import {getListAction, modifyAction, updateAction} from "../../actions/shop";
import {getCity, getProvince} from "../../actions/city";

const mapStateToProps = (state: any) => ({
    list: state.Shop.list,
    total: state.Shop.total,
    formValue: state.Shop.formValue,
    areaList: state.Area.list,
    brandList: state.Brand.list,
    typeList: state.ShopType.list,
    province: state.Province.list,
    city: state.City.list,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    getArea: () => dispatch(getAreaAll()),
    getBrand: () => dispatch(getBrandAll()),
    getType: () => dispatch(getTypeAll()),
    getProvince: () => dispatch(getProvince()),
    getCity: (provinceId: number) => dispatch(getCity(0, 0, provinceId)),
    getList: (page: number, pageSize: number) => dispatch(getListAction(page, pageSize)),
    onUpdate: (formValue: any) => dispatch(updateAction(formValue)),
    onModify: (formValue: any) => dispatch(modifyAction(formValue))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Shop))