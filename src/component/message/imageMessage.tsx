import React from "react";
import {Icon} from "rsuite";

export interface IProps {
    formValue: any
    onModify: (formValue: any) => void
    onEdit: (formValue: any) => void
    oldType: string
}


export default class ImageMessage extends React.Component<IProps, any> {
    constructor(props: Readonly<IProps>) {
        super(props);
        this.state = {
            showLib: false,
        }
    }

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
                <div>
                    <span onClick={() => {
                        this.setState({
                            showLib: true
                        })
                    }}>
                    {
                        this.props.formValue.content !== "" && this.props.oldType === "image" ?
                            <img src={this.props.formValue.content} width={134} height={134}
                                 style={{verticalAlign: "top"}}/> :
                            <Icon icon="plus" style={{color: "#e5e5ea", fontSize: "18px"}}/>
                    }
                    </span>
                </div>
            </div>

        )
    }

}