import React, {SyntheticEvent} from "react";
import {Nav, Form, FormControl, FormGroup, ControlLabel, ButtonToolbar, Button, HelpBlock, Alert} from "rsuite"
import "../../sass/setting.scss"
import {
    NEW_PASSWORD_EMPTY,
    NEW_PASSWORD_LENGTH_VALID,
    OLD_PASSWORD_EMPTY,
    REPEAT_PASSWORD_NOT_MATCH
} from "../../constants/language";

export interface IProps {
    onSubmit: (oldPassword: string, newPassword: string, repeat: string) => void
}

export default class Setting extends React.Component<IProps, any> {
    constructor(props: Readonly<IProps>) {
        super(props);
        this.state = {
            oldPassword: "",
            newPassword: "",
            repeat: "",
        }
    }

    handleSubmit = (e: SyntheticEvent) => {
        e.persist();
        this.setState({
            showError: 0
        })
        if (!this.state.oldPassword) {
            Alert.error(OLD_PASSWORD_EMPTY)
            return
        }
        if (!this.state.newPassword) {
            Alert.error(NEW_PASSWORD_EMPTY)
            return;
        }
        if (this.state.newPassword.length < 6 || this.state.newPassword.length > 18) {
            Alert.error(NEW_PASSWORD_LENGTH_VALID)
            return;
        }
        if (this.state.repeat !== this.state.newPassword) {
            Alert.error(REPEAT_PASSWORD_NOT_MATCH)
            return;
        }
        this.props.onSubmit(this.state.oldPassword, this.state.newPassword, this.state.repeat)
    }

    render() {
        return (
            <div id="setting">
                <div className="header">
                    <Nav activeKey="changePassword" appearance="subtle">
                        <Nav.Item eventKey="changePassword">修改密码</Nav.Item>
                    </Nav>
                </div>
                <div className="content">
                    <div key="changePassword">
                        <Form layout="horizontal">
                            <FormGroup>
                                <ControlLabel>原始密码</ControlLabel>
                                <FormControl name="name" type="password" onChange={e => {
                                    this.setState({
                                        oldPassword: e.trim()
                                    })
                                }}/>
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>新密码</ControlLabel>
                                <FormControl name="name" type="password" onChange={e => {
                                    this.setState({
                                        newPassword: e.trim()
                                    })
                                }}/>
                                <HelpBlock>新密码长度为6-18位</HelpBlock>
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>重复密码</ControlLabel>
                                <FormControl name="name" type="password" onChange={e => {
                                    this.setState({
                                        repeat: e.trim()
                                    })
                                }}/>
                            </FormGroup>
                            <FormGroup>
                                <ButtonToolbar>
                                    <Button appearance="primary" onClick={this.handleSubmit.bind(this)}>提交</Button>
                                </ButtonToolbar>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}