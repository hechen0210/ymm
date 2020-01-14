import React from "react";
import {Modal, Form, FormGroup, FormControl, ControlLabel, Button, Alert} from "rsuite";

export interface IProps {
    show: boolean,
    formValue: any,
    onEdit: (id: number, name: string, type: string) => void,
    onClose: () => void,
    onModify: (formValue: any) => void
}

export default class Edit extends React.Component<IProps, any> {
    constructor(props: Readonly<IProps>) {
        super(props);
        this.state = {
            show: true,
            formValue: ""
        }
    }

    handleFrom = (name: string, value: string) => {
        let formValue = this.props.formValue
        formValue[name] = value
        this.setState({
            formValue:formValue
        })
        this.props.onModify(formValue)
    }

    handleUpdate = () => {
        const id = this.props.formValue.id
        const name = this.props.formValue.name.trim()
        if (!name) {
            Alert.error("性质名称不能为空")
            return false
        }
        this.props.onEdit(id, name, "type")
    }

    render() {
        return (
            <div>
                <Modal backdrop={true} show={this.props.show} onHide={this.props.onClose}
                       size="xs">
                    <Modal.Header>
                        <Modal.Title>新增性质</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form fluid>
                            <FormGroup>
                                <ControlLabel>性质名称</ControlLabel>
                                <FormControl name="name" value={this.props.formValue.name} onChange={(e) => {
                                    this.handleFrom("name", e)
                                }}/>
                            </FormGroup>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleUpdate} appearance="primary">
                            提交
                        </Button>
                        <Button onClick={this.props.onClose} appearance="subtle">
                            取消
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}