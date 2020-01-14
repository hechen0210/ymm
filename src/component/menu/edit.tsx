import React from "react";
import {
    Drawer,
    Button,
    FormGroup,
    ControlLabel,
    FormControl,
    Form,
    Alert,
    RadioGroup,
    Radio,
    SelectPicker
} from "rsuite";

export interface IProps {
    show: boolean,
    title: string,
    formValue: any,
    onClose: () => void,
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
            formValue: formValue
        })
        // this.props.onModify(formValue)
    }

    handleUpdate = () => {
        const id = this.props.formValue.id
        const name = this.props.formValue.name.trim()
        if (!name) {
            Alert.error("性质名称不能为空")
            return false
        }
    }

    render() {
        return (
            <Drawer
                show={this.props.show}
                onHide={this.props.onClose}
                size="xs"
            >
                <Drawer.Header>
                    <Drawer.Title>{this.props.title}</Drawer.Title>
                </Drawer.Header>
                <Drawer.Body>
                    <Form fluid>
                        <FormGroup>
                            <ControlLabel>菜单名称</ControlLabel>
                            <FormControl name="name" value={this.props.formValue.name} onChange={(e) => {
                                this.handleFrom("name", e)
                            }}/>
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>上级菜单</ControlLabel>
                            <SelectPicker data={this.props.formValue.menu} searchable={false} block={true}/>
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>菜单类型</ControlLabel>
                            <RadioGroup inline value={this.props.formValue.type} onChange={value => {
                                this.handleFrom("type", value)
                            }}>
                                <Radio value="click">发送消息</Radio>
                                <Radio value="view">跳转网页</Radio>
                                <Radio value="miniprogram">跳转小程序</Radio>
                            </RadioGroup>
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>小程序</ControlLabel>
                            <FormControl name="name" value={this.props.formValue.name} onChange={(e) => {
                                this.handleFrom("name", e)
                            }}/>
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>跳转地址</ControlLabel>
                            <FormControl name="name" value={this.props.formValue.name} onChange={(e) => {
                                this.handleFrom("name", e)
                            }}/>
                        </FormGroup>
                    </Form>
                </Drawer.Body>
                <Drawer.Footer>
                    <Button onClick={this.props.onClose} appearance="primary">提交</Button>
                    <Button onClick={this.props.onClose} appearance="subtle">取消</Button>
                </Drawer.Footer>
            </Drawer>
        )
    }
}