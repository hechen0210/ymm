import React from "react";
import {Icon, Dropdown, Navbar} from "rsuite";
import {expand, loginInfo} from "../../types";

export interface IProps {
    expand: expand,
    loginInfo: loginInfo
    onExpand: () => void,
    onLogout: () => void,
    onSetting: () => void,
}

class Header extends React.Component<IProps, any> {
    render() {
        return (
            <Navbar id="header">
                <Navbar.Header onClick={this.props.onExpand}>
                    <Icon icon="bars" size="2x"/>
                </Navbar.Header>
                <Navbar.Body>
                    <a className="logo" href="/">管理后台</a>
                    <Dropdown title={this.props.loginInfo.account} trigger="hover" icon={<Icon icon="user" size="2x"/>}
                              className="user">
                        <Dropdown.Item panel className="menu">超级管理员</Dropdown.Item>
                        <Dropdown.Item divider/>
                        <Dropdown.Item className="menu" icon={<Icon icon="cog"/>}
                                       onSelect={this.props.onSetting}>设置</Dropdown.Item>
                        <Dropdown.Item className="menu" icon={<Icon icon="sign-out"/>}
                                       onSelect={this.props.onLogout}>退出</Dropdown.Item>
                    </Dropdown>
                </Navbar.Body>
            </Navbar>
        )
    }
}

export default Header
