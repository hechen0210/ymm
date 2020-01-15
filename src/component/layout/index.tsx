import React from "react";
import {Container, Content, Breadcrumb} from 'rsuite';
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
    active: any,
}

class Layout extends React.Component<IProps, any> {
    render() {
        return (
            <div id="container">
                <Container>
                    <Header expand={this.props.expand} loginInfo={this.props.loginInfo} onExpand={this.props.onExpand}
                            onLogout={this.props.onLogout} onSetting={this.props.onSetting}/>
                    <Container id="content">
                        <Menu expand={this.props.expand} active={this.props.active}/>
                        <Content id="main">
                            <Breadcrumb style={{marginBottom: 0}}>
                                <Breadcrumb.Item>首页</Breadcrumb.Item>
                                <Breadcrumb.Item active>{this.props.active.name}</Breadcrumb.Item>
                            </Breadcrumb>
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
