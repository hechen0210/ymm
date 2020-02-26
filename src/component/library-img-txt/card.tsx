import React from "react";
import {Button, Divider, Modal, Pagination, Panel} from "rsuite";

export interface IProps {
    total: number
    show: boolean
    newsList: any
    clean: boolean
    getNewsList: (type: string, title: string, page: number, pageSize: number) => void
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
            this.props.getNewsList("news", "", 0, 20)
        }
    }

    close = () => {
        this.props.onClose("news")
    }

    render() {
        return (
            <div>
                <Modal backdrop={true} show={this.props.show} onHide={this.close}
                       size="lg">
                    <Modal.Header>
                        <Modal.Title>
                            <span>图文素材</span>
                        </Modal.Title>
                        <Divider/>
                    </Modal.Header>
                    <Modal.Body style={{marginTop: 0}}>
                        <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
                            {
                                this.props.newsList.map((item: any) => {
                                    return <Panel className="picItem" key={item.id}
                                                  style={{border: this.state.selected.id === item.id ? "1px solid #4caf50" : ""}}>
                                        <img src={item.cover_pic} alt={item.name} height="145" onClick={() => {
                                            this.setState({
                                                selected: item
                                            })
                                        }}/>
                                        <span style={{
                                            display: "block",
                                            textAlign: "center",
                                            overflow: "hidden"
                                        }}>{item.title}</span>
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
                                        const more = this.props.getNewsList
                                        this.setState({
                                            page: page
                                        }, function () {
                                            more("news", "", page, 20)
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