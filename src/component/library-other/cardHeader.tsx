import React from "react";
import {Checkbox, Icon} from "rsuite";

export interface IProps {
    id: number
    onSelect: (id: number) => void
}

export default class Header extends React.Component<IProps, any> {
    // constructor(props: Readonly<IProps>) {
    //     super(props);
    // }
    render() {
        return (
            <div>
                <Checkbox/>
                <Icon icon="pencil"/>
            </div>
        )
    }
}