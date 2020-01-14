import React from "react";
import {
    Button,
    Drawer,
    Panel,
    ControlLabel,
    List
} from "rsuite";

export interface IProps {
    show: boolean,
    info: any,
    onClose: () => void
}

export default class KeyWordsInfo extends React.Component<IProps, any> {
    render() {
        return (
            <Drawer
                show={this.props.show}
                onHide={this.props.onClose}
                size="xs"
            >
                <Drawer.Header>
                    <Drawer.Title>查看详情</Drawer.Title>
                </Drawer.Header>
                <Drawer.Body>
                    <div className="info-body">
                        <div className="info-header">规则名称</div>
                        <div className="info-content">{this.props.info.name}</div>
                    </div>
                    <div className="info-body">
                        <div className="info-header">关键词</div>
                        <div className="info-content">
                            {
                                this.props.info.key_words.map((item: any, index: number) => {
                                    return <span key={index}>{item.words}({item.match === "1" ? "半匹配" : "全匹配"})</span>
                                })
                            }
                        </div>
                    </div>
                    <div className="info-body">
                        <div className="info-header">回复内容</div>
                        <div className="info-content">
                            {
                                this.props.info.content.map((item: any, index: number) => {
                                    return <span key={index} style={{display: "block"}}>{item}</span>
                                })
                            }
                        </div>
                    </div>
                    <div className="info-body">
                        <div className="info-header">回复方式</div>
                        <div className="info-content">{this.props.info.reply_type === "1" ? "全部回复" : "随机一条"}</div>
                    </div>
                </Drawer.Body>
                <Drawer.Footer>
                    <Button onClick={this.props.onClose} appearance="primary">关闭</Button>
                </Drawer.Footer>
            </Drawer>
        )
    }
}