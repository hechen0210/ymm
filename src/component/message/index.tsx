import React from "react";
import TextMessage from "./textMessage";
import "../../sass/reply.scss"
import {Alert, Button, Icon} from "rsuite";
import ImageMessage from "./imageMessage";

export interface IProps {
    info: any
    onEdit: (formValue: any) => void
    onModify: (formValue: any) => void
    getInfo: (type: string) => void
}

export default class Index extends React.Component<IProps, any> {
    constructor(props: Readonly<IProps>) {
        super(props);
        this.state = {
            formValue: [],
            oldType: props.info.message_type
        }
    }

    componentDidMount(): void {
        this.props.getInfo("message")
    }

    handleChange = (type: string) => {
        let formValue = this.props.info
        formValue["message_type"] = type
        this.setState({
            formValue: formValue
        })
        this.props.onModify(formValue)
    }


    handleUpdate = () => {
        const content = this.props.info.content.trim()
        const messageType = this.props.info.message_type.trim()
        if (!content) {
            Alert.error("消息内容不能为空")
            return false
        }
        if (!messageType) {
            Alert.error("消息类型错误")
            return false
        }
        this.props.onEdit(this.props.info)
    }


    render() {
        return (
            <div id="page">
                <div style={{margin: "0 25px"}}>
                    <div className="message-header" style={{padding: "25px 0 15px"}}>
                        <span className={this.props.info.message_type === "text" ? "active" : ""} onClick={() => {
                            this.handleChange("text")
                        }}>文字</span>
                    </div>
                    {
                        this.props.info.message_type === "text" ?
                            <TextMessage formValue={this.props.info} onModify={this.props.onModify}
                                         onEdit={this.props.onEdit} oldType={this.state.oldType}/> : ""
                    }
                    <Button appearance="primary" style={{marginTop: "20px", float: "right"}}
                            onClick={this.handleUpdate}>提交</Button>
                </div>
            </div>
        )
    }
}