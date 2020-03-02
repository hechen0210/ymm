import React from "react";
import {Input, Button, Alert} from "rsuite";

export interface IProps {
    formValue: any
    onModify: (formValue: any) => void
    onEdit: (formValue: any) => void
    oldType: string
}

export default class TextMessage extends React.Component<IProps, any> {

    handleFrom = (name: string, value: string) => {
        let formValue = this.props.formValue
        formValue[name] = value
        this.setState({
            formValue: formValue
        })
        this.props.onModify(formValue)
    }

    render() {
        return (
            <div>
                <Input
                    componentClass="textarea"
                    rows={3}
                    style={{width: "100%", minHeight: "300px"}}
                    defaultValue={this.props.oldType === "text" ? this.props.formValue.content : ""}
                    onChange={(content) => {
                        this.handleFrom("content", content)
                    }}
                />
            </div>
        )
    }
}