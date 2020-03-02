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
    Tooltip,
    Dropdown,
    Icon, Input
} from "rsuite";
import Images from "../library-other/card";
import News from "../library-img-txt/card"

export interface IProps {
    total: number,
    show: boolean,
    picList: any,
    newsList: any,
    title: string,
    formValue: any,
    selected: any,
    onClose: () => void,
    onUpdate: (formValue: any) => void,
    onModify: (formValue: any) => void,
    getPicList: (type: string, title: string, page: number, pageSize: number) => void
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
            imageLayer: false,
            newsLayer: false,
        }
    }

    addReplay = (key: string) => {
        if (key === "text") {
            let content = this.props.formValue.content
            let item = {"type": key}
            content.push(item)
            this.handleFrom("content", content)
        } else {
            const layer = key + "Layer"
            this.setState({
                [layer]: true
            })
        }
    }

    handleFrom = (name: string, value: any) => {
        let formValue = this.props.formValue
        formValue[name] = value
        formValue["type"] = "key_words"
        this.setState({
            formValue: formValue
        })
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

    closeLayer = (type: string) => {
        const layer = type + "Layer"
        this.setState({
            [layer]: false
        })
    }

    onImgSelect = (info: any) => {
        let content = this.props.formValue.content
        let item = {"type": "image", "id": info.id, "pic_url": info.url, "title": info.name}
        content.push(item)
        this.handleFrom("content", content)
    }

    onNewsSelect = (info: any) => {
        let content = this.props.formValue.content
        let item = {"type": "news", "id": info.id, "pic_url": info.cover_pic, "title": info.title}
        content.push(item)
        this.handleFrom("content", content)
    }

    render() {
        return (
            <Drawer
                show={this.props.show}
                onHide={this.props.onClose}
                size="md"
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
                                    <Dropdown
                                        renderTitle={() => {
                                            return <Button color="green">+</Button>
                                        }}
                                        placement="rightEnd"
                                        onSelect={this.addReplay}
                                    >
                                        <Dropdown.Item eventKey="news"><Icon
                                            icon="newspaper-o"/> 图文消息</Dropdown.Item>
                                        <Dropdown.Item eventKey="text"><Icon
                                            icon="file-text"/> 文本消息</Dropdown.Item>
                                        <Dropdown.Item eventKey="image"><Icon
                                            icon="image"/> 图片消息</Dropdown.Item>
                                    </Dropdown>
                                </Whisper>
                            </div>
                            {
                                this.props.formValue.content.map((item: any, index: number) => {
                                    if (item.type === "text" || item.type === "news" || item.type === "image") {
                                        return <div key={index} className="reply-attach-before"
                                                    style={{marginBottom: "15px"}}>
                                            {
                                                index >= 0 ? <Whisper placement="top" trigger="hover"
                                                                      speaker={<Tooltip>删除</Tooltip>}>
                                                    <Button color="red" onClick={() => {
                                                        let inputList = this.props.formValue.content
                                                        let newInput = [...inputList.slice(0, index)]
                                                        newInput.push(...inputList.slice(index + 1))
                                                        this.handleFrom("content", newInput)
                                                    }}>x</Button>
                                                </Whisper> : ""
                                            }
                                            {
                                                item.type === "text" ?
                                                    <FormControl name="content[]"
                                                                 componentClass="textarea"
                                                                 rows={5}
                                                                 value={item.content}
                                                                 onChange={(e) => {
                                                                     this.props.formValue.content[index].content = e
                                                                     this.handleFrom("content", this.props.formValue.content)
                                                                 }}/> : item.type === "news" ?
                                                    <div>
                                                        <img height="145" src={item.pic_url} alt=""/>
                                                        <span style={{
                                                            display: "block",
                                                            textAlign: "center",
                                                            overflow: "hidden"
                                                        }}>{item.title}</span></div> : item.type === "image" ?
                                                        <div>
                                                            <img height="145" src={item.pic_url} alt=""/>
                                                            <span style={{
                                                                display: "block",
                                                                textAlign: "center",
                                                                overflow: "hidden"
                                                            }}>{item.title}</span>
                                                        </div> : ""
                                            }
                                        </div>
                                    }
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
                <Images show={this.state.imageLayer}
                        picList={this.props.picList.list}
                        total={this.props.picList.total}
                        getPicList={this.props.getPicList}
                        onSelect={this.onImgSelect}
                        onClose={this.closeLayer}
                        clean={true}/>
                <News show={this.state.newsLayer}
                      newsList={this.props.newsList.list}
                      total={this.props.newsList.total}
                      clean={true}
                      getNewsList={this.props.getPicList}
                      onSelect={this.onNewsSelect}
                      onClose={this.closeLayer}/>
            </Drawer>
        )
    }
}