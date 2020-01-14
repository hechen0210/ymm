import React from "react";
import {Button, Divider, Icon, Table} from "rsuite";
import "../../sass/shop.scss"
import Edit from "./edit";
import {initState} from "../../reducers/shop";

export interface IProps {
    list: any
    getList: (page: number, pageSize: number) => void
    formValue: any
    areaList: any
    brandList: any
    typeList: any
    province: any
    city: any
    getArea: () => void,
    getBrand: () => void,
    getType: () => void,
    getProvince: () => void,
    getCity: (provinceId: number) => void,
    onUpdate: (formValue: any) => void
    onModify: (formValue: any) => void
}

export default class Shop extends React.Component<IProps, any> {
    constructor(props: Readonly<IProps>) {
        super(props);
        this.state = {
            show: false,
            title: "新增门店",
            type: "add"
        }
    }

    add = () => {
        this.setState({
            show: true
        })
    }

    close = () => {
        let modify = this.props.onModify
        this.setState({
            show: false
        }, function () {
            setTimeout(function () {
                modify(initState.formValue)
            }, 500)
        })
    }

    render() {
        const {Column, HeaderCell, Cell, Pagination} = Table;
        const ActionCell = ({rowData, dataKey, ...props}: any) => {
            return (
                <Cell {...props} className="link-group">
                    <a>编辑</a>
                    <Divider vertical/>
                    <a>删除</a>
                </Cell>
            );
        };
        return (
            <div id="page">
                <Edit
                    show={this.state.show}
                    title={this.state.title}
                    formValue={this.props.formValue}
                    getArea={this.props.getArea}
                    areaList={this.props.areaList}
                    getBrand={this.props.getBrand}
                    brandList={this.props.brandList}
                    getType={this.props.getType}
                    typeList={this.props.typeList}
                    getProvince={this.props.getProvince}
                    province={this.props.province}
                    getCity={this.props.getCity}
                    city={this.props.city}
                    onClose={this.close}
                    onUpdate={this.props.onUpdate} onModify={this.props.onModify}
                    type={this.state.type}
                />
                <Button color="orange" onClick={() => {
                    this.setState({
                        show: true
                    })
                }}>
                    <Icon icon="plus"/> 新增门店
                </Button>
                <Button color="red" onClick={() => {
                    this.setState({
                        show: true,
                        title: "导入门店",
                        type: "import"
                    })
                }}>
                    <Icon icon="cloud-upload"/> 导入列表
                </Button>
                <Divider/>
                <Table loading={false} data={this.props.list} style={{marginLeft: 25, marginRight: 25}}>
                    <Column width={50} align="center" fixed>
                        <HeaderCell>Id</HeaderCell>
                        <Cell dataKey="id"/>
                    </Column>
                    <Column flexGrow={3}>
                        <HeaderCell>门店编码</HeaderCell>
                        <Cell dataKey="firstName"/>
                    </Column>
                    <Column flexGrow={6}>
                        <HeaderCell>门店名称</HeaderCell>
                        <Cell dataKey="lastName"/>
                    </Column>
                    <Column flexGrow={3}>
                        <HeaderCell>品牌</HeaderCell>
                        <Cell dataKey="city"/>
                    </Column>
                    <Column flexGrow={3}>
                        <HeaderCell>性质</HeaderCell>
                        <Cell dataKey="city"/>
                    </Column>
                    <Column flexGrow={3}>
                        <HeaderCell>区域</HeaderCell>
                        <Cell dataKey="city"/>
                    </Column>
                    <Column flexGrow={3}>
                        <HeaderCell>省份</HeaderCell>
                        <Cell dataKey="city"/>
                    </Column>
                    <Column flexGrow={3}>
                        <HeaderCell>城市</HeaderCell>
                        <Cell dataKey="city"/>
                    </Column>
                    <Column flexGrow={6}>
                        <HeaderCell></HeaderCell>
                        <ActionCell dataKey="id"/>
                    </Column>
                </Table>

                <Pagination
                    lengthMenu={[
                        {
                            value: 10,
                            label: 10
                        },
                        {
                            value: 20,
                            label: 20
                        }
                    ]}
                    activePage={1}
                    displayLength={10}
                    total={20}
                    renderTotal={() => {
                        return <div>总数:0</div>
                    }}
                    // onChangePage={this.handleChangePage}
                    // onChangeLength={this.handleChangeLength}
                />
            </div>
        )
    }
}