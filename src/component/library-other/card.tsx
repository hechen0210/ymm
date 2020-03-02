import React from "react";
import {Alert, Button, Icon, Modal, Uploader, Divider, Panel, Pagination} from "rsuite";
import {getCookie} from "../../utils/cookie";
import {DOMAIN, UPLOAD} from "../../constants/api";
import "../../sass/library.scss"

export interface IProps {
    total: number
    show: boolean
    picList: any
    clean: boolean
    getPicList: (type: string, title: string, page: number, pageSize: number) => void
    onSelect: (info: any) => void
    onClose: (type: string) => void
}

export default class Card extends React.Component<IProps, any> {
    constructor(props: Readonly<IProps>) {
        super(props);
        this.state = {
            page: 1,
            searchTile: "",
            upload: false,
            loading: false,
            selected: ""
        }
    }

    componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<any>, snapshot?: any): void {
        if (!prevProps.show && this.props.show) {
            this.props.getPicList("image", "", 0, 20)
        }
    }

    close = () => {
        this.props.onClose("image")
    }

    render() {
        return (
            <div>
                <Modal backdrop={true} show={this.props.show} onHide={this.close}
                       size="lg">
                    <Modal.Header>
                        <Modal.Title>
                            <span>图片素材</span>
                        </Modal.Title>
                        <Divider/>
                        <Uploader className="upload"
                                  onUpload={value => {
                                      this.setState({
                                          upload: true,
                                          loading: true
                                      })
                                  }}
                                  onSuccess={(response: any, file) => {
                                      if (response.code === 200) {
                                          this.props.getPicList("image", "", 0, 20)
                                          Alert.success(response.message)
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
                            <Button style={{background: "#4caf50", color: "#ffffff"}} loading={this.state.loading}>
                                <Icon icon="plus"/> 上传图片
                            </Button>
                        </Uploader>
                    </Modal.Header>
                    <Modal.Body style={{marginTop: 0}}>
                        <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
                            {
                                this.props.picList.map((item: any) => {
                                    return <Panel className="picItem" key={item.id}
                                                  style={{border: this.state.selected.id === item.id ? "1px solid #4caf50" : ""}}>
                                        <img src={item.url} alt={item.name} height="145" width="145" onClick={() => {
                                            this.setState({
                                                selected: item
                                            })
                                        }}/>
                                        <span style={{
                                            display: "block",
                                            textAlign: "center",
                                            overflow: "hidden"
                                        }}>{item.name}</span>
                                    </Panel>
                                })
                            }
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <div>
                            {
                                this.props.total > 0 ? <Pagination
                                    activePage={this.state.page}
                                    pages={Math.ceil(this.props.total / 20)}
                                    maxButtons={10}
                                    ellipsis={true}
                                    onSelect={(page: any) => {
                                        const more = this.props.getPicList
                                        this.setState({
                                            page: page
                                        }, function () {
                                            more("image", "", page, 20)
                                        })
                                    }}
                                /> : ""
                            }
                        </div>
                        <Button onClick={() => {
                            this.props.onSelect(this.state.selected)
                            if (this.props.clean) {
                                this.setState({
                                    selected: false
                                })
                            }
                            this.close()
                        }} appearance="primary">
                            确定
                        </Button>
                        <Button onClick={this.close} appearance="subtle">
                            关闭
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}