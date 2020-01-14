import React, {SyntheticEvent} from "react";
import {Form, FormGroup, ControlLabel, FormControl, ButtonToolbar, Button, Alert} from "rsuite";
import "../../sass/login.scss";
import {ACCOUNT_EMPTY, PASSWORD_EMPTY} from "../../constants/language";

export interface IState {
    account: string
    password: string
}

export interface IProps {
    isLogin: boolean,
    message: string,
    onLogin: (account: string, password: string) => void,
}

export default class Login extends React.Component<IProps, IState> {
    constructor(props: Readonly<IProps>) {
        super(props);
        this.state = {
            account: "",
            password: ""
        }
    }

    handleClick = (e: SyntheticEvent) => {
        e.persist();
        let account = this.state.account.trim()
        let password = this.state.password.trim()
        if (!account) {
            Alert.error(ACCOUNT_EMPTY)
            return
        }
        if (!password) {
            Alert.error(PASSWORD_EMPTY)
            return
        }
        this.props.onLogin(account, password)
    }

    render() {
        return (
            <div className="loginPage">
                <div className="login">
                    <Form
                        layout="horizontal"
                        onSubmit={this.handleClick.bind(this)}
                    >
                        <FormGroup>
                            <ControlLabel>账号</ControlLabel>
                            <FormControl
                                name="account"
                                autocompelte="off"
                                onChange={e => {
                                    this.setState({
                                        account: e
                                    })
                                }}
                            />
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>密码</ControlLabel>
                            <FormControl
                                name="password"
                                type="password"
                                onChange={e => {
                                    this.setState({
                                        password: e
                                    })
                                }}
                            />
                        </FormGroup>
                        <FormGroup>
                            <ButtonToolbar>
                                <Button
                                    appearance="primary"
                                    className="submitButton"
                                    onClick={this.handleClick.bind(this)}
                                >登录</Button>
                            </ButtonToolbar>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        )
    }
}
