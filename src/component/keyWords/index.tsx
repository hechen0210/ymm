import React from "react";
import {Button, Divider, Icon, Table} from "rsuite";
import "../../sass/reply.scss"
import KeyWordsEdit from "./keyWordsEdit";
import KeyWordsInfo from "./keyWordsInfo";
import {initState} from "../../reducers/keyWords"

export interface IProps {
    list: any
    total: number
    update: boolean
    formValue: any
    getList: (type: string, page: number, pageSize: number) => void
    onUpdate: (formValue: any) => void
    onDel: (id: number, type: string) => void,
    onModify: (formValue: any) => void,
}

export default class Index extends React.Component<IProps, any> {
    constructor(props: Readonly<IProps>) {
        super(props)
        this.state = {
            show: false,
            showInfo: false,
            info: initState.formValue,
            title: "添加回复",
            page: 1
        }
        this.add = this.add.bind(this)
    }

    componentDidMount(): void {
        this.props.getList("key_words", 0, 20)
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
                modify(initState.formValue)
            }, 500)
        })
    }

    closeInfo = () => {
        this.setState({
            showInfo: false
        })
    }

    render() {
        const {Column, HeaderCell, Cell, Pagination} = Table;
        const ActionCell = ({rowData, dataKey, ...props}: any) => {
            return (
                <Cell {...props} className="link-group">
                    <a onClick={() => {
                        this.props.onModify({
                            "id": rowData.id,
                            "name": rowData.name,
                            "key_words": rowData.key_words,
                            "content": rowData.content.split(","),
                            "reply_type": rowData.reply_type.toString(),
                            "type": "key_words"
                        })
                        this.setState({
                            title: "编辑回复",
                            show: true
                        })

                    }}>编辑</a>
                    <Divider vertical/>
                    <a onClick={() => {
                        this.setState({
                            showInfo: true,
                            info: {
                                "id": rowData.id,
                                "name": rowData.name,
                                "key_words": rowData.key_words,
                                "content": rowData.content.split(","),
                                "reply_type": rowData.reply_type.toString(),
                                "type": "key_words"
                            }
                        })
                    }}>详情</a>
                    <Divider vertical/>
                    <a onClick={() => {
                        this.props.onDel(rowData.id, "key_words")
                    }}>删除</a>
                </Cell>
            );
        };
        const KeyCell = ({rowData, dataKey, ...props}: any) => {
            const data = rowData["key_words"]
            let keyWords = ""
            data.forEach((item: any, index: number) => {
                keyWords += item.words + ","
            })
            if (keyWords.length > 0) {
                keyWords = keyWords.substr(0, keyWords.length - 1)
            }
            return <Cell {...props}>{keyWords}</Cell>
        }
        console.log(this.props.list)
        return (
            <div id="page">
                <KeyWordsEdit show={this.state.show} onClose={this.close} title={this.state.title}
                              formValue={this.props.formValue} onModify={this.props.onModify}
                              onUpdate={this.props.onUpdate}/>
                <KeyWordsInfo info={this.state.info} show={this.state.showInfo} onClose={this.closeInfo}/>
                <Button color="orange" onClick={this.add}>
                    <Icon icon="plus"/> 新增回复
                </Button>
                <Divider/>
                <Table loading={false} data={this.props.list} style={{marginLeft: 25, marginRight: 25}}>
                    <Column width={50} align="center" fixed>
                        <HeaderCell>Id</HeaderCell>
                        <Cell dataKey="id"/>
                    </Column>
                    <Column flexGrow={4}>
                        <HeaderCell>规则名称</HeaderCell>
                        <Cell dataKey="name"/>
                    </Column>
                    <Column flexGrow={9}>
                        <HeaderCell>关键字</HeaderCell>
                        <KeyCell dataKey="key_words"/>
                    </Column>
                    <Column flexGrow={9}>
                        <HeaderCell>回复内容</HeaderCell>
                        <Cell dataKey="content"/>
                    </Column>
                    <Column flexGrow={3}>
                        <HeaderCell></HeaderCell>
                        <ActionCell dataKey="id"/>
                    </Column>
                </Table>
                {
                    this.props.total > 0 ? <Pagination
                        activePage={this.state.page}
                        total={this.props.total}
                        renderLengthMenu={() => {
                            return ""
                        }}
                        renderTotal={() => {
                            return <div>总数:{this.props.total}</div>
                        }}
                        onChangePage={page => {
                            this.props.getList("key_words", page, 20)
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