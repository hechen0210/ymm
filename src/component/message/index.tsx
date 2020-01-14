import React from "react";
import TextMessage from "./textMessage";
import "../../sass/reply.scss"
import Media from "./media";

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
            formValue: ""
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
                                         onEdit={this.props.onEdit}/> : ""
                    }
                </div>
            </div>
        )
    }
}