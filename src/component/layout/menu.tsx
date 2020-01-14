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
        console.log(this.props.activeKey)
        return (
            <Sidebar
                id="menu"
                width={this.props.expand ? 200 : 56}
                collapsible
            >
                <Sidenav
                    expanded={this.props.expand}
                    appearance="subtle"
                    defaultOpenKeys={['2']}
                    activeKey={this.props.activeKey}
                >
                    <Sidenav.Body>
                        <Nav>
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
                                                        eventKey={subItem.key}>
                                                        {subItem.name}
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
