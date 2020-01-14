import React from "react";
import {
    Drawer,
    Button,
    FormGroup,
    ControlLabel,
    Form,
    SelectPicker,
    Nav
} from "rsuite";

export interface IProps {
    show: boolean
    type: string
    formValue: any
    areaList: any
    brandList: any
    typeList: any
    province: any
    city: any
    getArea: () => void,
    getBrand: () => void,
    getType: () => void,
    getProvince: () => void,
    getCity: (provinceId: number) => void,
    onUpdate: (formValue: any) => void
    onModify: (formValue: any) => void
    onClose: () => void
}

export default class Edit extends React.Component<IProps, any> {
    constructor(props: Readonly<IProps>) {
        super(props);
        this.state = {
            batch: true
        }
    }

    componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<any>, snapshot?: any): void {
        if (!prevProps.show && this.props.show) {
            this.props.getArea()
            this.props.getBrand()
            this.props.getType()
            this.props.getProvince()
            if (this.props.formValue.id > 0) {
                this.props.getCity(this.props.formValue.province)
            }
        }
    }

    handleFrom = (name: string, value: string) => {
        let formValue = this.props.formValue
        formValue[name] = value
        this.setState({
            formValue: formValue
        })
        this.props.onModify(formValue)
    }

    handleUpdate = () => {
        this.props.onUpdate(this.props.formValue)
    }

    render() {
        return (
            <Drawer
                show={this.props.show}
                onHide={this.props.onClose}
                size="sm"
            >
                <Drawer.Header>
                    <Drawer.Title>生成二维码</Drawer.Title>
                </Drawer.Header>
                <Nav appearance="tabs">
                    <Nav.Item>Default Item</Nav.Item>
                    <Nav.Item active>Active Item</Nav.Item>
                </Nav>
                {
                    this.state.batch ? <Drawer.Body>

                    </Drawer.Body> : <Drawer.Body>
                        <Form fluid>
                            <FormGroup>
                                <ControlLabel>区域</ControlLabel>
                                <SelectPicker
                                    data={this.props.areaList}
                                    defaultValue={this.props.formValue.area}
                                    block={true} cleanable={false}
                                    onChange={(e) => {
                                        this.handleFrom("area_id", e)
                                    }}
                                />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>品牌</ControlLabel>
                                <SelectPicker
                                    data={this.props.brandList}
                                    defaultValue={this.props.formValue.brand}
                                    block={true} cleanable={false}
                                    onChange={(e) => {
                                        this.handleFrom("brand_id", e)
                                    }}
                                />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>性质</ControlLabel>
                                <SelectPicker
                                    data={this.props.typeList}
                                    defaultValue={this.props.formValue.type}
                                    block={true} cleanable={false}
                                    onChange={(e) => {
                                        this.handleFrom("type_id", e)
                                    }}
                                />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>省份</ControlLabel>
                                <SelectPicker
                                    data={this.props.province}
                                    defaultValue={this.props.formValue.province}
                                    block={true} cleanable={false}
                                    onChange={(e) => {
                                        this.handleFrom("province", e)
                                    }}
                                />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>城市</ControlLabel>
                                <SelectPicker
                                    data={this.props.city}
                                    defaultValue={this.props.formValue.city}
                                    block={true} cleanable={false}
                                    onChange={(e) => {
                                        this.handleFrom("city", e)
                                    }}
                                />
                            </FormGroup>
                        </Form>
                    </Drawer.Body>
                }

                <Drawer.Footer>
                    <Button onClick={this.handleUpdate} appearance="primary">生成二维码</Button>
                    <Button onClick={this.props.onClose} appearance="subtle">取消</Button>
                </Drawer.Footer>
            </Drawer>
        )
    }
}