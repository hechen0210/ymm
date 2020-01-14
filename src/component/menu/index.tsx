import React from "react";
import {Button, Divider, Icon, Table} from "rsuite";
import "../../sass/menu.scss"
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
            show: true,
            title: "添加菜单",
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
                    <a>编辑</a>
                    <Divider vertical/>
                    <a href="">删除</a>
                </Cell>
            );
        };
        return (
            <div id="page">
                <Edit show={this.state.show} onClose={this.close} title={this.state.title}
                      formValue={this.props.formValue}/>
                <Button color="orange" onClick={this.add}>
                    <Icon icon="plus"/> 新增菜单
                </Button>
                <Button color="red" onClick={this.add}>
                    <Icon icon="upload"/> 更新菜单
                </Button>
                <Divider/>
                <Table loading={false} data={this.props.list} style={{marginLeft: 25, marginRight: 25}}>
                    <Column width={50} align="center" fixed>
                        <HeaderCell>ID</HeaderCell>
                        <Cell dataKey="id"/>
                    </Column>
                    <Column flexGrow={5}>
                        <HeaderCell>菜单名称</HeaderCell>
                        <Cell dataKey="name"/>
                    </Column>
                    <Column flexGrow={1}>
                        <HeaderCell>排序</HeaderCell>
                        <Cell dataKey="order"/>
                    </Column>
                    <Column flexGrow={3}>
                        <HeaderCell>跳转类型</HeaderCell>
                        <Cell dataKey="type"/>
                    </Column>
                    <Column flexGrow={3}>
                        <HeaderCell>跳转地址</HeaderCell>
                        <Cell dataKey="pagepath"/>
                    </Column>
                    <Column flexGrow={6}>
                        <HeaderCell></HeaderCell>
                        <ActionCell dataKey="id"/>
                    </Column>
                </Table>
                {
                    this.props.total > 0 ? <Pagination
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
                        activePage={this.state.page}
                        displayLength={20}
                        total={this.props.total}
                        renderTotal={() => {
                            return <div>总数:{this.state.total}</div>
                        }}
                    /> : ""
                }
            </div>
        )
    }
}