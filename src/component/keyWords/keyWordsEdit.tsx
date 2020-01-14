import React from "react";
import {
    Drawer,
    Button,
    FormGroup,
    ControlLabel,
    FormControl,
    Form,
    Alert,
    RadioGroup,
    Radio,
    SelectPicker,
    Whisper,
    Tooltip
} from "rsuite";

export interface IProps {
    show: boolean,
    title: string,
    formValue: any,
    onClose: () => void,
    onUpdate: (formValue: any) => void,
    onModify: (formValue: any) => void,
}

export default class KeyWordsEdit extends React.Component<IProps, any> {
    constructor(props: Readonly<IProps>) {
        super(props);
        this.state = {
            show: true,
            matchType: [
                {
                    label: '半匹配',
                    value: '1',
                }, {
                    label: '全匹配',
                    value: '2',
                }
            ],
            formValue: "",
            match: "1",
        }
    }

    handleFrom = (name: string, value: any) => {
        let formValue = this.props.formValue
        formValue[name] = value
        formValue["type"] = "key_words"
        this.setState({
            formValue: formValue
        })
        console.log(formValue)
        this.props.onModify(formValue)
    }

    handleUpdate = () => {
        const name = this.props.formValue.name.trim()
        const keyWords = this.props.formValue.key_words
        const content = this.props.formValue.content
        if (!name) {
            Alert.error("规则名称不能为空")
            return false
        }
        if (!keyWords[0]) {
            Alert.error("关键词不能为空")
            return false
        }
        if (!content[0]) {
            Alert.error("回复内容不能为空")
            return false
        }
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
                    <Drawer.Title>{this.props.title}</Drawer.Title>
                </Drawer.Header>
                <Drawer.Body>
                    <Form fluid>
                        <FormGroup>
                            <ControlLabel>规则名称</ControlLabel>
                            <FormControl name="name" value={this.props.formValue.name} onChange={(e) => {
                                this.handleFrom("name", e)
                            }}/>
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>匹配方式</ControlLabel>

                        </FormGroup>
                        <FormGroup>
                            <div className="reply-attach-after">
                                <ControlLabel>关键词</ControlLabel>
                                <Whisper placement="top" trigger="hover" speaker={<Tooltip>添加</Tooltip>}>
                                    <Button color="green" onClick={() => {
                                        let keyWords = this.props.formValue.key_words
                                        keyWords.push({"match": "1", "words": ""})
                                        this.handleFrom("key_words", keyWords)
                                    }}>+</Button>
                                </Whisper>
                            </div>
                            {
                                this.props.formValue.key_words.map((item: any, index: number) => {
                                    console.log(item, item["match"], item.words)
                                    return <div key={index} className="reply-attach-before"
                                                style={{marginBottom: "15px"}}>
                                        {
                                            index > 0 ? <Whisper placement="top" trigger="hover"
                                                                 speaker={<Tooltip>删除</Tooltip>}>
                                                <Button color="red" onClick={() => {
                                                    let inputList = this.props.formValue.key_words
                                                    let newInput = [...inputList.slice(0, index)]
                                                    newInput.push(...inputList.slice(index + 1))
                                                    this.handleFrom("key_words", newInput)
                                                }}>x</Button>
                                            </Whisper> : ""
                                        }
                                        <SelectPicker data={this.state.matchType}
                                                      defaultValue={item.match.toString()}
                                                      searchable={false} block={true}
                                                      cleanable={false}
                                                      onChange={(e) => {
                                                          this.setState({
                                                              match: e
                                                          })
                                                      }}
                                        />
                                        <FormControl name="key_words[]" value={item.words}
                                                     onChange={(e) => {
                                                         this.props.formValue.key_words[index] = {
                                                             match: this.state.match,
                                                             words: e
                                                         }
                                                         this.handleFrom("key_words", this.props.formValue.key_words)
                                                     }}/>
                                    </div>
                                })
                            }
                        </FormGroup>
                        <FormGroup>
                            <div className="reply-attach-after">
                                <ControlLabel>回复内容</ControlLabel>
                                <Whisper placement="top" trigger="hover" speaker={<Tooltip>添加</Tooltip>}>
                                    <Button color="green" onClick={() => {
                                        let content = this.props.formValue.content
                                        content.push("")
                                        this.handleFrom("content", content)
                                    }}>+</Button>
                                </Whisper>
                            </div>
                            {
                                this.props.formValue.content.map((item: any, index: number) => {
                                    return <div key={index} className="reply-attach-before"
                                                style={{marginBottom: "15px"}}>
                                        {
                                            index > 0 ? <Whisper placement="top" trigger="hover"
                                                                 speaker={<Tooltip>删除</Tooltip>}>
                                                <Button color="red" onClick={() => {
                                                    let inputList = this.props.formValue.content
                                                    let newInput = [...inputList.slice(0, index)]
                                                    newInput.push(...inputList.slice(index + 1))
                                                    this.handleFrom("content", newInput)
                                                }}>x</Button>
                                            </Whisper> : ""
                                        }
                                        <FormControl name="content[]" value={item} onChange={(e) => {
                                            this.props.formValue.content[index] = e
                                            this.handleFrom("content", this.props.formValue.content)
                                        }}/>
                                    </div>
                                })
                            }
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>回复方式</ControlLabel>
                            <RadioGroup inline name="reply_type" value={this.props.formValue.reply_type}
                                        onChange={value => {
                                            this.handleFrom("reply_type", value)
                                        }}>
                                <Radio value="1">回复全部</Radio>
                                <Radio value="2">随机一条</Radio>
                            </RadioGroup>
                        </FormGroup>
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