import React from "react";
import {Input, Button, Alert} from "rsuite";

export interface IProps {
    formValue: any
    onModify: (formValue: any) => void
    onEdit: (formValue: any) => void
}

export default class TextMessage extends React.Component<IProps, any> {
    // constructor(props: Readonly<IProps>) {
    //     super(props);
    //
    // }

    handleFrom = (name: string, value: string) => {
        let formValue = this.props.formValue
        formValue[name] = value
        this.setState({
            formValue: formValue
        })
        this.props.onModify(formValue)
    }

    handleUpdate = () => {
        const content = this.props.formValue.content.trim()
        const messageType = this.props.formValue.message_type.trim()
        if (!content) {
            Alert.error("消息内容不能为空")
            return false
        }
        if (!messageType){
            Alert.error("消息类型错误")
            return false
        }
        this.props.onEdit(this.props.formValue)
    }

    render() {
        return (
            <div>
                <Input
                    componentClass="textarea"
                    rows={3}
                    style={{width: "100%", minHeight: "300px"}}
                    defaultValue={this.props.formValue.content}
                    onChange={(content) => {
                        this.handleFrom("content", content)
                    }}
                />
                <Button appearance="primary" style={{marginTop: "20px", float: "right"}}
                        onClick={this.handleUpdate}>提交</Button>
            </div>
        )
    }
}