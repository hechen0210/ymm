import React from "react";
import "../../sass/data.scss"
import {Divider, Table, Form, FormGroup, SelectPicker, ControlLabel, DateRangePicker, Button} from "rsuite";
import {dataCondition} from "../../actions/data";
import moment from 'moment'

export interface IProps {
    list: any
    total: number
    condition: any
    areaList: any,
    getAreaList: () => void,
    getList: (condition: dataCondition, page: number, pageSize: number) => void
    setCondition: (condition: dataCondition) => void
}

export default class Data extends React.Component<IProps, any> {
    constructor(props: Readonly<IProps>) {
        super(props);
        this.state = {
            page: 1,
            condition: "",
            data: []
        }
    }

    componentDidMount(): void {
        this.props.getAreaList()
        this.props.getList(this.props.condition, this.state.page, 20)
    }

    handleForm = (name: string, data: any) => {
        let condition = this.props.condition
        if (name === "date") {
            condition["start_time"] = moment(data[0]).format('YYYY-MM-DD 00:00:00')
            condition["end_time"] = moment(data[1]).add("days", 1).format('YYYY-MM-DD 00:00:00')
        } else {
            condition[name] = data
        }
        this.setState({
            condition: condition
        })
        this.props.setCondition(condition)
    }

    render() {
        const {Column, HeaderCell, Cell, Pagination} = Table;
        return (
            <div id="page">
                <div style={{padding: "24px 0 0 24px"}}>
                    <Form layout="inline">
                        <FormGroup>
                            <ControlLabel>区域</ControlLabel>
                            <SelectPicker
                                data={this.props.areaList}
                                style={{width: 224, marginLeft: 10}}
                                searchable={false} onChange={(e) => {
                                this.handleForm("area", e)
                            }}/>
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>日期</ControlLabel>
                            <DateRangePicker
                                style={{marginLeft: 10}}
                                onChange={(e) => {
                                    this.handleForm("date", e)
                                }}
                            />
                        </FormGroup>
                        <Button className="form-button" appearance="primary" onClick={() => {
                            this.props.getList(this.props.condition, 0, 20)
                        }}>查询</Button>
                    </Form>
                </div>
                <Divider/>
                <Table loading={false} data={this.props.list} style={{marginLeft: 25, marginRight: 25}}
                       autoHeight={true}>
                    <Column width={50} align="center" fixed>
                        <HeaderCell>ID</HeaderCell>
                        <Cell dataKey="id"/>
                    </Column>
                    <Column flexGrow={4}>
                        <HeaderCell>区域名称</HeaderCell>
                        <Cell dataKey="area"/>
                    </Column>
                    <Column flexGrow={3}>
                        <HeaderCell>关注人数</HeaderCell>
                        <Cell dataKey="sub_num"/>
                    </Column>
                    <Column flexGrow={3}>
                        <HeaderCell>取消关注人数</HeaderCell>
                        <Cell dataKey="unsub_num"/>
                    </Column>
                    <Column flexGrow={3}>
                        <HeaderCell>总关注人数</HeaderCell>
                        <Cell dataKey="total"/>
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
                            this.props.getList(this.props.condition, page, 20)
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