import React from "react";
import {Icon, Sidebar, Nav, Sidenav, Dropdown} from "rsuite";
import {Link} from "react-router-dom";
import {menuList} from "../../constants/menu";

export interface IProps {
    activeKey: string
    expand: boolean
}

const NavLink = (props: any) => (<Nav.Item componentClass={Link} {...props} />);

class Menu extends React.Component<IProps, any> {
    render() {
        return (
            <Sidebar
                id="menu"
                width={this.props.expand ? 200 : 56}
                collapsible
            >
                <Sidenav
                    expanded={this.props.expand}
                    appearance="subtle"
                    activeKey="2-1"
                >
                    <Sidenav.Body>
                        <Nav>
                            <Nav.Item eventKey="1" icon={<Icon icon="dashboard"/>}>
                                Dashboard
                            </Nav.Item>
                            {
                                menuList.map((item, index) => {
                                    return <Dropdown
                                        eventKey={item.key}
                                        trigger="hover"
                                        title={item.name}
                                        icon={<Icon icon="folder-o"/>}
                                        placement="rightStart"
                                        key={item.key}
                                    >
                                        {
                                            item.sub.map((subItem, index) => {
                                                    return <NavLink
                                                        key={subItem.key}
                                                        to={subItem.url}
                                                        eventKey={subItem.key}>{subItem.name}
                                                    </NavLink>
                                                }
                                            )
                                        }
                                    </Dropdown>

                                })
                            }
                        </Nav>
                    </Sidenav.Body>
                </Sidenav>
            </Sidebar>
        )
    }
}

export default Menu
