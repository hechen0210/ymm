import React from "react";
import BraftEditor, {ControlType, ExtendControlType, EditorState} from "braft-editor"
import 'braft-editor/dist/index.css'
import {
    Button,
    ControlLabel,
    Form,
    FormControl,
    FormGroup,
    Drawer,
    Toggle,
    Radio,
    RadioGroup,
    Input,
    Icon, Alert, Uploader,
    IconButton
} from "rsuite";
import "../../sass/library.scss"
import Card from "../library-other/card";
import {getCookie} from "../../utils/cookie";
import {DOMAIN, UPLOAD} from "../../constants/api";
// @ts-ignore
import {ContentUtils} from 'braft-utils'

export interface IProps {
    id: number
    total: number
    show: boolean,
    selected: any,
    picList: any,
    formValue: any,
    done: boolean,
    onEdit: (id: number, name: string, type: string) => void,
    onClose: () => void,
    onModify: (formValue: any) => void
    onUpdate: (formValue: any) => void
    onSelect: (info: any) => void
    getPicList: (type: string, title: string, page: number, pageSize: number) => void
    getInfo: (id: number) => void
    cleanDone: () => void
}

export default class Edit extends React.Component<IProps, any> {
    constructor(props: Readonly<IProps>) {
        super(props);
        this.state = {
            formValue: "",
            showLib: false,
            upload: false,
            loading: false,
            editorState: BraftEditor.createEditorState(null)
        }
    }

    componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<any>, snapshot?: any): void {
        if (!prevProps.show && this.props.show) {
            if (this.props.id > 0) {
                this.props.getInfo(this.props.id)
            }
            this.setState({
                editorState: BraftEditor.createEditorState(this.props.formValue.content)
            })
        }
        if (!prevProps.done && this.props.done) {
            const cleanDone = this.props.cleanDone
            this.setState({
                editorState: BraftEditor.createEditorState(this.props.formValue.content)
            }, function () {
                cleanDone()
            })
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

    setContent = (editorState: EditorState) => {
        this.setState({editorState})
        this.handleFrom("content", editorState.toHTML())
    }

    handleUpdate = () => {
        let formValue = this.props.formValue
        if (formValue.id > 0) {
            formValue["cover_pic"] = this.props.formValue.cover_pic_id
        } else {
            formValue["cover_pic"] = this.props.selected.media_id
        }
        this.props.onUpdate(formValue)
    }

    closeLibrary = () => {
        this.setState({
            showLib: false
        })
    }

    render() {
        const controls: ControlType[] = ["undo", "redo", "remove-styles", "font-size", "bold", "italic", "underline", "strike-through", "text-color", "text-align", "text-indent", "letter-spacing", "list-ul", "table", "blockquote", "hr", "emoji"]
        const extendControls: ExtendControlType[] = [{
            key: "upload-img",
            type: 'component',
            component: (
                <Uploader style={{marginBottom: "5px"}}
                          onUpload={value => {
                              this.setState({
                                  upload: true,
                                  loading: true
                              })
                          }}
                          onSuccess={(response: any, file) => {
                              if (response.code === 200) {
                                  this.setContent(ContentUtils.insertMedias(this.state.editorState, [{
                                      type: 'IMAGE',
                                      url: response.data
                                  }]))
                              } else {
                                  Alert.error(response.message)
                              }
                              this.setState({
                                  upload: false,
                                  loading: false
                              })
                          }}
                          headers={{
                              'Authorization': 'Bearer ' + getCookie('token') === "undefined" ? "" : getCookie("token"),
                          }}
                          action={DOMAIN + UPLOAD}
                          data={{"type": "news"}}
                          fileListVisible={false}
                          disabled={this.state.upload}
                >
                    <IconButton className="editUpload" style={{background: "none"}} icon={<Icon icon="image"/>}/>
                </Uploader>
            )
        }]
        return (

            <div>
                <Drawer backdrop={true} show={this.props.show} onHide={this.props.onClose}
                        size="lg">
                    <Drawer.Header>
                        <Drawer.Title>新增图文素材</Drawer.Title>
                    </Drawer.Header>
                    <Drawer.Body>
                        <Form fluid className="library-edit">
                            <FormGroup>
                                <ControlLabel>标题</ControlLabel>
                                <FormControl name="title" value={this.props.formValue.title} onChange={(value) => {
                                    this.handleFrom("title", value)
                                }}/>
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>作者</ControlLabel>
                                <FormControl name="author" value={this.props.formValue.author} onChange={(value) => {
                                    this.handleFrom("author", value)
                                }}/>
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>正文</ControlLabel>
                                <BraftEditor
                                    value={this.state.editorState}
                                    controls={controls}
                                    extendControls={extendControls}
                                    style={{border: "1px solid #e5e5ea"}}
                                    onChange={this.setContent}
                                />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>封面和摘要</ControlLabel>
                                <Card show={this.state.showLib}
                                      picList={this.props.picList || []}
                                      getPicList={this.props.getPicList}
                                      onSelect={this.props.onSelect}
                                      total={this.props.total}
                                      onClose={this.closeLibrary}
                                      clean={false}
                                />
                                <div className="cover">
                                    <span onClick={() => {
                                        this.setState({
                                            showLib: true
                                        })
                                    }}>
                                        {
                                            this.props.selected.length !== 0 ?
                                                <img src={this.props.selected.url} alt={this.props.selected.name}
                                                     width={134} height={134} style={{verticalAlign: "top"}}/> :
                                                this.props.formValue.cover_pic !== "" ?
                                                    <img src={this.props.formValue.cover_pic} width={134} height={134}
                                                         style={{verticalAlign: "top"}}/>
                                                    :
                                                    <Icon icon="plus" style={{color: "#e5e5ea", fontSize: "18px"}}/>
                                        }
                                        </span>
                                    < Input
                                        value={this.props.formValue.summary}
                                        componentClass="textarea"
                                        rows={6}
                                        placeholder="选填，摘要会在订阅号消息、转发链接等文章外的场景显露，帮助读者快速了解内容，如不填写则默认抓取正文前54字"
                                        onChange={(value) => {
                                            this.handleFrom("summary", value)
                                        }}
                                    />
                                </div>
                            </FormGroup>
                            <FormGroup className="form-group-line">
                                <ControlLabel style={{lineHeight: "30px"}}>显示封面</ControlLabel>
                                <Toggle
                                    size='lg'
                                    checkedChildren="显示"
                                    unCheckedChildren="不显示"
                                    checked={this.props.formValue.show_cover_pic === 1}
                                    onChange={(value) => {
                                        this.handleFrom("show_cover_pic", value ? "1" : "0")
                                    }}
                                />
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>原文地址</ControlLabel>
                                <FormControl name="source_url" value={this.props.formValue.source_url}
                                             onChange={(value) => {
                                                 this.handleFrom("source_url", value)
                                             }}/>
                            </FormGroup>
                            <FormGroup className="form-group-line">
                                <ControlLabel style={{lineHeight: "36px"}}>开启评论</ControlLabel>
                                <RadioGroup name="comment" defaultValue={this.props.formValue.comment}
                                            onChange={(value) => {
                                                this.handleFrom("comment", value)
                                            }}>
                                    <Radio value="0">关闭</Radio>
                                    <Radio value="1">粉丝可评论</Radio>
                                    <Radio value="2">所有人可评论</Radio>
                                </RadioGroup>
                            </FormGroup>
                        </Form>
                    </Drawer.Body>
                    <Drawer.Footer>
                        <Button appearance="primary" onClick={this.handleUpdate}>
                            提交
                        </Button>
                        <Button appearance="subtle" onClick={this.props.onClose}>
                            取消
                        </Button>
                    </Drawer.Footer>
                </Drawer>
            </div>
        )
    }
}