import React from "react";
import {Button, Icon, Divider, Table} from "rsuite";
import "../../sass/system.scss"
import Edit from "./edit";

export interface IProps {
    list: any
    total: number
    update: boolean
    formValue: any
    getList: (page: number, pageSize: number) => void
    onUpdate: (id: number, name: string, type: string) => void
    onDel: (id: number, type: string) => void,
    onModify: (formValue: any) => void,
}

export default class Brand extends React.Component<IProps, any> {
    constructor(props: Readonly<IProps>) {
        super(props)
        this.state = {
            show: false,
            page: 1
        }
        this.add = this.add.bind(this)
    }

    componentDidMount(): void {
        this.props.getList(0, 20)
    }

    componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<any>, snapshot?: any): void {
        if (!prevProps.update && this.props.update) {
            this.close()
        }
    }

    add = () => {
        this.setState({
            show: true,
        })
    }

    close = () => {
        let modify = this.props.onModify
        this.setState({
            show: false
        }, function () {
            setTimeout(function () {
                modify({"id": 0, "name": ""})
            }, 500)
        })
    }

    render() {
        const {Column, HeaderCell, Cell, Pagination} = Table;
        const ActionCell = ({rowData, dataKey, ...props}: any) => {
            return (
                <Cell {...props} className="link-group">
                    <a onClick={() => {
                        this.props.onModify({"id": rowData.id, "name": rowData.name})
                        this.setState({
                            show: true
                        })
                    }}>编辑</a>
                    <Divider vertical/>
                    <a onClick={() => {
                        this.props.onDel(rowData.id, "brand")
                    }}>删除</a>
                </Cell>
            );
        };
        return (
            <div id="page">
                <Edit show={this.state.show} formValue={this.props.formValue} onEdit={this.props.onUpdate}
                      onClose={this.close} onModify={this.props.onModify}/>
                <Button color="orange" onClick={this.add}>
                    <Icon icon="plus"/> 新增品牌
                </Button>
                <Divider/>
                <Table loading={false} data={this.props.list} style={{marginLeft: 25, marginRight: 25}}>
                    <Column width={50} align="center" fixed>
                        <HeaderCell>ID</HeaderCell>
                        <Cell dataKey="id"/>
                    </Column>
                    <Column flexGrow={6}>
                        <HeaderCell>品牌名称</HeaderCell>
                        <Cell dataKey="name"/>
                    </Column>
                    <Column flexGrow={3}>
                        <HeaderCell>城市数量</HeaderCell>
                        <Cell dataKey="city_num"/>
                    </Column>
                    <Column flexGrow={3}>
                        <HeaderCell>门店数量</HeaderCell>
                        <Cell dataKey="shop_num"/>
                    </Column>
                    <Column flexGrow={6}>
                        <HeaderCell></HeaderCell>
                        <ActionCell dataKey="id"/>
                    </Column>
                </Table>
                {
                    this.props.total > 0 ? <Pagination
                        activePage={this.state.page}
                        renderLengthMenu={() => {
                            return ""
                        }}
                        total={this.props.total}
                        renderTotal={() => {
                            return <div>总数:{this.props.total}</div>
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