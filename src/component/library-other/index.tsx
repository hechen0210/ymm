import React from "react";
import {Alert, Button, Divider, Icon, Table, Uploader} from "rsuite";
import "../../sass/library.scss"
import {DOMAIN, UPLOAD} from "../../constants/api";
import {getCookie} from "../../utils/cookie";

export interface IProps {
    list: any
    total: number
    selected: any
    getList: (type: string, title: string, page: number, pageSize: number) => void
    onDel: (id: number, type: string) => void
    onUpdate: (formValue: any) => void
    onSelect: (id: number) => void
    onSync: (type: string) => void
}

export default class LibraryOther extends React.Component<IProps, any> {
    constructor(props: Readonly<IProps>) {
        super(props);
        this.state = {
            page: 1,
            searchTile: "",
            upload: false,
            loading: false
        }
    }

    componentDidMount(): void {
        this.props.getList("image", "", 1, 20)
    }

    render() {
        const {Column, HeaderCell, Cell, Pagination} = Table;
        const ActionCell = ({rowData, dataKey, ...props}: any) => {
            return (
                <Cell {...props} className="link-group">
                    <a role="button" onClick={() => {
                        this.props.onDel(rowData.id, "image")
                    }}>删除</a>
                </Cell>
            );
        };
        const ImgCell = ({rowData, dataKey, ...props}: any) => {
            return (
                <Cell {...props}>
                    <a href={rowData.url} target="_blank"><img height={54} src={rowData.url} alt={rowData.name}/></a>
                </Cell>
            )
        }
        return (
            <div id="page">
                <div className="header">
                    <div>
                        <Uploader className="upload"
                                  onUpload={value => {
                                      this.setState({
                                          upload: true,
                                          loading: true
                                      })
                                  }}
                                  onSuccess={(response: any, file) => {
                                      if (response.code === 200) {
                                          Alert.success(response.message)
                                          this.props.getList("image", "", 1, 20)
                                      } else {
                                          Alert.error(response.message)
                                      }
                                      this.setState({
                                          upload: false,
                                          loading: false
                                      })
                                  }}
                                  headers={{
                                      'Authorization': 'Bearer ' + getCookie('token') === "undefined" ? "" : getCookie("token"),
                                  }}
                                  action={DOMAIN + UPLOAD}
                                  data={{"type": "image"}}
                                  fileListVisible={false}
                                  disabled={this.state.upload}
                        >
                            <Button color="orange" loading={this.state.loading}>
                                <Icon icon="plus"/> 新增素材
                            </Button>
                        </Uploader>
                        <Button color="green" onClick={() => this.props.onSync("image")}>
                            <Icon icon="repeat"/> 获取已有素材
                        </Button>
                    </div>
                </div>
                <Divider/>
                <Table loading={false} data={this.props.list} style={{marginLeft: 25, marginRight: 25}}
                       autoHeight={true} rowHeight={80}>
                    <Column width={50} align="center" verticalAlign="middle" fixed>
                        <HeaderCell>ID</HeaderCell>
                        <Cell dataKey="id"/>
                    </Column>
                    <Column flexGrow={3} align="center" verticalAlign="middle">
                        <HeaderCell>图片名称</HeaderCell>
                        <Cell dataKey="name"/>
                    </Column>
                    <Column flexGrow={6} align="center" verticalAlign="middle">
                        <HeaderCell>图片</HeaderCell>
                        <ImgCell datakey="img"/>
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