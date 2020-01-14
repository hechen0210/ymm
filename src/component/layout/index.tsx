import React from "react";
import {Container, Content} from 'rsuite';
import Menu from "./menu";
import Header from "./header"
import "../../sass/layout.scss"
import {expand, loginInfo} from "../../types";

export interface IProps {
    expand: expand,
    loginInfo: loginInfo,
    children: React.Component,
    onExpand: () => void,
    onLogout: () => void,
    onSetting: () => void,
    activeKey: string,
}

class Layout extends React.Component<IProps, any> {
    render() {
        return (
            <div id="container">
                <Container>
                    <Header expand={this.props.expand} loginInfo={this.props.loginInfo} onExpand={this.props.onExpand}
                            onLogout={this.props.onLogout} onSetting={this.props.onSetting}/>
                    <Container id="content">
                        <Menu expand={this.props.expand} activeKey={this.props.activeKey}/>
                        <Content id="main">
                            <div id="main-content">
                                {this.props.children}
                            </div>
                        </Content>
                    </Container>
                </Container>
            </div>
        );
    }
}

export default Layout
