import React from "react";
import {
    Drawer,
    Button,
    FormGroup,
    ControlLabel,
    FormControl,
    Form,
    SelectPicker,
    Uploader, Alert
} from "rsuite";

export interface IProps {
    show: boolean
    type: string
    title: string
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
    // constructor(props: Readonly<IProps>) {
    //     super(props);
    // }

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
        if (this.props.formValue.area_id === 0) {
            Alert.error("区域不能为空")
            return
        }
        if (this.props.formValue.brand_id === 0) {
            Alert.error("品牌不能为空")
            return
        }
        if (this.props.formValue.type_id === 0) {
            Alert.error("性质不能为空")
            return
        }
        if (this.props.formValue.province === 0) {
            Alert.error("省份不能为空")
            return
        }
        if (this.props.formValue.city === 0) {
            Alert.error("城市不能为空")
            return
        }
        if (this.props.formValue.mark === "") {
            Alert.error("门店编码不能为空")
            return;
        }
        if (this.props.formValue.name === "") {
            Alert.error("门店名称不能为空")
            return;
        }
        this.props.onUpdate(this.props.formValue)
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
                        {
                            this.props.type === "add" ? <div>
                                <FormGroup>
                                    <ControlLabel>门店编码</ControlLabel>
                                    <FormControl name="mark" onChange={(e) => {
                                        this.handleFrom("mark", e)
                                    }}/>
                                </FormGroup>
                                <FormGroup>
                                    <ControlLabel>门店名称</ControlLabel>
                                    <FormControl name="name" onChange={(e) => {
                                        this.handleFrom("name", e)
                                    }}/>
                                </FormGroup>
                            </div> : ""
                        }
                        {
                            this.props.type === "import" ? <Uploader
                                onChange={value => {
                                    console.log(value, '0000');
                                }}
                                action="//jsonplaceholder.typicode.com/posts/"
                            /> : ""
                        }
                    </Form>
                </Drawer.Body>
                <Drawer.Footer>
                    <Button onClick={this.handleUpdate} appearance="primary">提交</Button>
                    <Button onClick={this.props.onClose} appearance="subtle">取消</Button>
                </Drawer.Footer>
            </Drawer>
        )
    }
}