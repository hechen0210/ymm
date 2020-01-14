import React from "react";
import {Button, Divider, Icon, Table} from "rsuite";
import "../../sass/qrcode.scss"

export interface IProps {
    list: any
    total: number
    getList: (page: number, pageSize: number) => void
    // formValue: any
    // areaList: any
    // brandList: any
    // typeList: any
    // province: any
    // city: any
    // getArea: () => void,
    // getBrand: () => void,
    // getType: () => void,
    // getProvince: () => void,
    // getCity: (provinceId: number) => void,
    // onUpdate: (formValue: any) => void
    // onModify: (formValue: any) => void
    onCreate: () => void
    onDownLoad: (id: number, name: string) => void
    onDel: (id: number) => void
}

export default class Qrcode extends React.Component<IProps, any> {
    constructor(props: Readonly<IProps>) {
        super(props);
        this.state = {
            page: 1,
            show: false
        }
    }

    componentDidMount(): void {
        this.props.getList(0, 20)
    }

    render() {
        const {Column, HeaderCell, Cell, Pagination} = Table;
        const ActionCell = ({rowData, dataKey, ...props}: any) => {
            return (
                <Cell {...props} className="link-group">
                    <a role="button" onClick={() => {
                        this.props.onDownLoad(rowData.id, rowData.name)
                    }}>下载</a>
                    <Divider vertical/>
                    <a role="button" onClick={() => {
                        this.props.onDel(rowData.id)
                    }}>删除</a>
                </Cell>
            );
        };
        return (
            <div id="page">
                <Button color="orange" onClick={() => {
                    this.props.onCreate()
                }}>
                    <Icon icon="plus"/> 创建二维码
                </Button>
                <Divider/>
                <Table loading={false} data={this.props.list} style={{marginLeft: 25, marginRight: 25}}
                       autoHeight={true}>
                    <Column width={50} align="center" fixed>
                        <HeaderCell>ID</HeaderCell>
                        <Cell dataKey="id"/>
                    </Column>
                    <Column flexGrow={4}>
                        <HeaderCell>二维码名称</HeaderCell>
                        <Cell dataKey="name"/>
                    </Column>
                    <Column flexGrow={3}>
                        <HeaderCell>类型</HeaderCell>
                        <Cell dataKey="forever"/>
                    </Column>
                    {/*<Column flexGrow={3}>*/}
                    {/*    <HeaderCell>有效期</HeaderCell>*/}
                    {/*    <Cell dataKey="lastName"/>*/}
                    {/*</Column>*/}
                    <Column flexGrow={3}>
                        <HeaderCell>区域</HeaderCell>
                        <Cell dataKey="area"/>
                    </Column>
                    {/*<Column flexGrow={3}>*/}
                    {/*    <HeaderCell>品牌</HeaderCell>*/}
                    {/*    <Cell dataKey="city"/>*/}
                    {/*</Column>*/}
                    {/*<Column flexGrow={3}>*/}
                    {/*    <HeaderCell>性质</HeaderCell>*/}
                    {/*    <Cell dataKey="city"/>*/}
                    {/*</Column>*/}
                    {/*<Column flexGrow={3}>*/}
                    {/*    <HeaderCell>省份</HeaderCell>*/}
                    {/*    <Cell dataKey="city"/>*/}
                    {/*</Column>*/}
                    {/*<Column flexGrow={3}>*/}
                    {/*    <HeaderCell>城市</HeaderCell>*/}
                    {/*    <Cell dataKey="city"/>*/}
                    {/*</Column>*/}
                    {/*<Column flexGrow={3}>*/}
                    {/*    <HeaderCell>门店</HeaderCell>*/}
                    {/*    <Cell dataKey="city"/>*/}
                    {/*</Column>*/}
                    <Column flexGrow={2}>
                        <HeaderCell></HeaderCell>
                        <ActionCell dataKey="id"/>
                    </Column>
                </Table>
                {
                    this.props.total > 0 ? <Pagination
                        activePage={this.state.page}
                        displayLength={20}
                        total={this.props.total}
                        renderLengthMenu={() => {
                            return ""
                        }}
                        onChangePage={page => {
                            this.props.getList(page, 20)
                            this.setState({
                                page: page
                            })
                        }}
                    /> : ""
                }
            </div>
        )
    }
}