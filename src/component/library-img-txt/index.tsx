import React from "react";
import {Button, ControlLabel, FormControl, Divider, Form, FormGroup, Icon, Table} from "rsuite";
import "../../sass/library.scss"
import Edit from "./edit";

export interface IProps {
    list: any
    picList: any
    total: number
    selected: any
    formValue: any
    synced: boolean
    done: boolean
    getList: (type: string, title: string, page: number, pageSize: number) => void
    onDel: (id: number, type: string) => void
    onUpdate: (formValue: any) => void
    onSelect: (info: any) => void
    onModify: (formValue: any) => void
    onSync: (type: string) => void
    getInfo: (id: number) => void
    cleanDone: () => void
}

export default class LibraryImgTxt extends React.Component<IProps, any> {
    constructor(props: Readonly<IProps>) {
        super(props);
        this.state = {
            page: 1,
            searchTile: "",
            show: false,
            sync: false,
            syncLoading: false,
            id: 0
        }
    }

    componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<any>, snapshot?: any): void {
        if (!prevProps.synced && this.props.synced) {
            this.setState({
                sync: false,
                syncLoading: false,
            })
        }
    }

    componentDidMount(): void {
        this.props.getList("news", "", 1, 20)
    }

    add = () => {
        this.setState({
            show: true,
        })
    }

    close = () => {
        let modify = this.props.onModify
        this.setState({
            show: false,
            id: 0
        }, function () {
            setTimeout(function () {
                modify({
                    "id": 0,
                    "title": "",
                    "author": "",
                    "content": "",
                    "show_cover_pic": false,
                    "source_url": "",
                    "comment": "2"
                })
            }, 500)
        })
    }

    render() {
        const {Column, HeaderCell, Cell, Pagination} = Table;
        const ActionCell = ({rowData, dataKey, ...props}: any) => {
            return (
                <Cell {...props} className="link-group">
                    <a role="button" onClick={() => {
                        this.setState({
                            id: rowData.id,
                            show: true
                        })
                    }}>编辑</a>
                    <Divider vertical={true}/>
                    <a href={rowData.url} target="_blank">查看</a>
                    <Divider vertical={true}/>
                    <a role="button" onClick={() => {
                        this.props.onDel(rowData.id, "image")
                    }}>删除</a>
                </Cell>
            );
        };
        const ImgCell = ({rowData, dataKey, ...props}: any) => {
            return (
                <Cell {...props}>
                    <img height={54} src={rowData.cover_pic} alt={rowData.name}/>
                </Cell>
            )
        }
        return (
            <div id="page">
                <Edit id={this.state.id}
                      show={this.state.show}
                      formValue={this.props.formValue}
                      onEdit={this.props.onUpdate}
                      onClose={this.close}
                      onModify={this.props.onModify}
                      onUpdate={this.props.onUpdate}
                      onSelect={this.props.onSelect}
                      getPicList={this.props.getList}
                      picList={this.props.picList}
                      total={this.props.total}
                      selected={this.props.selected}
                      getInfo={this.props.getInfo}
                      done={this.props.done}
                      cleanDone={this.props.cleanDone}
                />
                <div className="header">
                    <div>
                        <Button color="orange" onClick={this.add}>
                            <Icon icon="plus"/> 新增素材
                        </Button>
                        <Button color="green" disabled={this.state.sync} loading={this.state.syncLoading}
                                onClick={() => {
                                    this.setState({
                                        sync: true,
                                        syncLoading: true,
                                    })
                                    this.props.onSync("news")
                                }}>
                            <Icon icon="repeat"/> 获取已有素材
                        </Button>
                    </div>

                    <Form layout="inline">
                        <FormGroup>
                            <ControlLabel>标题</ControlLabel>
                            <FormControl name="title" onChange={(e) => {
                                this.setState({
                                    searchTitle: e
                                })
                            }}/>
                        </FormGroup>
                        <Button className="form-button" appearance="primary" onClick={() => {
                            this.props.getList("news", "", 1, 20)
                        }}>查询</Button>
                    </Form>
                </div>
                <Divider/>
                <Table loading={false} data={this.props.list} style={{marginLeft: 25, marginRight: 25}}
                       autoHeight={true} rowHeight={80}>
                    <Column width={50} align="center" verticalAlign="middle" fixed>
                        <HeaderCell>ID</HeaderCell>
                        <Cell dataKey="id"/>
                    </Column>
                    <Column flexGrow={6} align="center" verticalAlign="middle">
                        <HeaderCell>标题</HeaderCell>
                        <Cell dataKey="title"/>
                    </Column>
                    <Column flexGrow={4} align="center" verticalAlign="middle">
                        <HeaderCell>封面</HeaderCell>
                        <ImgCell datakey="cover_pic"/>
                    </Column>
                    <Column flexGrow={2} align="center" verticalAlign="middle">
                        <HeaderCell>是否显示封面</HeaderCell>
                        <Cell dataKey="show_cover_pic"/>
                    </Column>
                    <Column flexGrow={3} align="center" verticalAlign="middle">
                        <HeaderCell>是否开启评论</HeaderCell>
                        <Cell dataKey="comment"/>
                    </Column>
                    <Column flexGrow={3} align="center" verticalAlign="middle">
                        <HeaderCell>创建时间</HeaderCell>
                        <Cell dataKey="created_at"/>
                    </Column>
                    <Column flexGrow={6} align="center" verticalAlign="middle">
                        <HeaderCell></HeaderCell>
                        <ActionCell dataKey="id"/>
                    </Column>
                </Table>
                {
                    this.props.total > 0 ? <Pagination
                        activePage={this.state.page}
                        displayLength={20}
                        renderLengthMenu={() => {
                            return ""
                        }}
                        total={this.props.total}
                        onChangePage={page => {
                            this.props.getList("image", "", 1, 20)
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