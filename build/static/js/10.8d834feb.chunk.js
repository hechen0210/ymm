(this.webpackJsonpadmin=this.webpackJsonpadmin||[]).push([[10],{438:function(e,t,a){},456:function(e,t,a){"use strict";a.d(t,"d",(function(){return r})),a.d(t,"e",(function(){return o})),a.d(t,"h",(function(){return l})),a.d(t,"b",(function(){return i})),a.d(t,"f",(function(){return s})),a.d(t,"g",(function(){return c})),a.d(t,"c",(function(){return u})),a.d(t,"a",(function(){return p}));var n=a(5);function r(e,t,a,r){return{type:n.s,libType:e,title:t,page:a,pageSize:r}}function o(e){return{type:n.F,formValue:e}}function l(e){return{type:n.Q,formValue:e}}function i(e,t){return{type:n.g,id:e,libType:t}}function c(e){return{type:n.M,libType:e}}function s(e){return{type:n.J,info:e}}function u(e){return{type:n.q,id:e}}function p(){return{type:n.c}}},501:function(e,t,a){"use strict";a.d(t,"a",(function(){return v}));var n=a(31),r=a(32),o=a(34),l=a(33),i=a(35),c=a(0),s=a.n(c),u=a(597),p=a(853),m=a(863),d=a(404),h=a(54),f=a(62),g=a(873),E=a(852),y=a(18),b=a(12),v=(a(438),function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(o.a)(this,Object(l.a)(t).call(this,e))).close=function(){a.props.onClose("image")},a.state={page:1,searchTile:"",upload:!1,loading:!1,selected:""},a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"componentDidUpdate",value:function(e,t,a){!e.show&&this.props.show&&this.props.getPicList("image","",0,20)}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement(u.a,{backdrop:!0,show:this.props.show,onHide:this.close,size:"lg"},s.a.createElement(u.a.Header,null,s.a.createElement(u.a.Title,null,s.a.createElement("span",null,"\u56fe\u7247\u7d20\u6750")),s.a.createElement(p.a,null),s.a.createElement(m.a,{className:"upload",onUpload:function(t){e.setState({upload:!0,loading:!0})},onSuccess:function(t,a){200===t.code?(e.props.getPicList("image","",0,20),d.a.success(t.message)):d.a.error(t.message),e.setState({upload:!1,loading:!1})},headers:{Authorization:"Bearer "+Object(y.a)("token")==="undefined"?"":Object(y.a)("token")},action:b.f+b.x,data:{type:"image"},fileListVisible:!1,disabled:this.state.upload},s.a.createElement(h.a,{style:{background:"#4caf50",color:"#ffffff"},loading:this.state.loading},s.a.createElement(f.a,{icon:"plus"})," \u4e0a\u4f20\u56fe\u7247"))),s.a.createElement(u.a.Body,{style:{marginTop:0}},s.a.createElement("div",{style:{display:"flex",flexDirection:"row",flexWrap:"wrap"}},this.props.picList.map((function(t){return s.a.createElement(g.a,{className:"picItem",key:t.id,style:{border:e.state.selected.id===t.id?"1px solid #4caf50":""}},s.a.createElement("img",{src:t.url,alt:t.name,height:"145",width:"145",onClick:function(){e.setState({selected:t})}}),s.a.createElement("span",{style:{display:"block",textAlign:"center",overflow:"hidden"}},t.name))})))),s.a.createElement(u.a.Footer,null,s.a.createElement("div",null,this.props.total>0?s.a.createElement(E.a,{activePage:this.state.page,pages:Math.ceil(this.props.total/20),maxButtons:10,ellipsis:!0,onSelect:function(t){var a=e.props.getPicList;e.setState({page:t},(function(){a("image","",t,20)}))}}):""),s.a.createElement(h.a,{onClick:function(){e.props.onSelect(e.state.selected),e.props.clean&&e.setState({selected:!1}),e.close()},appearance:"primary"},"\u786e\u5b9a"),s.a.createElement(h.a,{onClick:this.close,appearance:"subtle"},"\u5173\u95ed"))))}}]),t}(s.a.Component))},872:function(e,t,a){"use strict";a.r(t);var n=a(16),r=a(42),o=a(129),l=a(31),i=a(32),c=a(34),s=a(33),u=a(35),p=a(0),m=a.n(p),d=a(865),h=a(853),f=a(54),g=a(62),E=a(402),y=a(397),b=a(408),v=a(405),w=(a(438),a(754)),S=a.n(w),L=(a(849),a(863)),C=a(404),k=a(203),j=a(874),x=a(201),O=a(875),V=a(860),_=a(868),T=a(501),D=a(18),I=a(12),U=a(565),A=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(s.a)(t).call(this,e))).handleFrom=function(e,t){var n=a.props.formValue;n[e]=t,a.setState({formValue:n}),a.props.onModify(n)},a.setContent=function(e){a.setState({editorState:e}),a.handleFrom("content",e.toHTML())},a.handleUpdate=function(){var e=a.props.formValue;e.id>0?e.cover_pic=a.props.formValue.cover_pic_id:e.cover_pic=a.props.selected.media_id,a.props.onUpdate(e)},a.closeLibrary=function(){a.setState({showLib:!1})},a.state={formValue:"",showLib:!1,upload:!1,loading:!1,editorState:S.a.createEditorState(null)},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidUpdate",value:function(e,t,a){if(!e.show&&this.props.show&&(this.props.id>0&&this.props.getInfo(this.props.id),this.setState({editorState:S.a.createEditorState(this.props.formValue.content)})),!e.done&&this.props.done){var n=this.props.cleanDone;this.setState({editorState:S.a.createEditorState(this.props.formValue.content)},(function(){n()}))}}},{key:"render",value:function(){var e=this,t=[{key:"upload-img",type:"component",component:m.a.createElement(L.a,{style:{marginBottom:"5px"},onUpload:function(t){e.setState({upload:!0,loading:!0})},onSuccess:function(t,a){200===t.code?e.setContent(U.ContentUtils.insertMedias(e.state.editorState,[{type:"IMAGE",url:t.data}])):C.a.error(t.message),e.setState({upload:!1,loading:!1})},headers:{Authorization:"Bearer "+Object(D.a)("token")==="undefined"?"":Object(D.a)("token")},action:I.f+I.x,data:{type:"news"},fileListVisible:!1,disabled:this.state.upload},m.a.createElement(k.a,{className:"editUpload",style:{background:"none"},icon:m.a.createElement(g.a,{icon:"image"})}))}];return m.a.createElement("div",null,m.a.createElement(j.a,{backdrop:!0,show:this.props.show,onHide:this.props.onClose,size:"lg"},m.a.createElement(j.a.Header,null,m.a.createElement(j.a.Title,null,"\u65b0\u589e\u56fe\u6587\u7d20\u6750")),m.a.createElement(j.a.Body,null,m.a.createElement(E.a,{fluid:!0,className:"library-edit"},m.a.createElement(y.a,null,m.a.createElement(b.a,null,"\u6807\u9898"),m.a.createElement(v.a,{name:"title",value:this.props.formValue.title,onChange:function(t){e.handleFrom("title",t)}})),m.a.createElement(y.a,null,m.a.createElement(b.a,null,"\u4f5c\u8005"),m.a.createElement(v.a,{name:"author",value:this.props.formValue.author,onChange:function(t){e.handleFrom("author",t)}})),m.a.createElement(y.a,null,m.a.createElement(b.a,null,"\u6b63\u6587"),m.a.createElement(S.a,{value:this.state.editorState,controls:["undo","redo","remove-styles","font-size","bold","italic","underline","strike-through","text-color","text-align","text-indent","letter-spacing","list-ul","table","blockquote","hr","emoji"],extendControls:t,style:{border:"1px solid #e5e5ea"},onChange:this.setContent})),m.a.createElement(y.a,null,m.a.createElement(b.a,null,"\u5c01\u9762\u548c\u6458\u8981"),m.a.createElement(T.a,{show:this.state.showLib,picList:this.props.picList||[],getPicList:this.props.getPicList,onSelect:this.props.onSelect,total:this.props.total,onClose:this.closeLibrary,clean:!1}),m.a.createElement("div",{className:"cover"},m.a.createElement("span",{onClick:function(){e.setState({showLib:!0})}},0!==this.props.selected.length?m.a.createElement("img",{src:this.props.selected.url,alt:this.props.selected.name,width:134,height:134,style:{verticalAlign:"top"}}):""!==this.props.formValue.cover_pic?m.a.createElement("img",{src:this.props.formValue.cover_pic,width:134,height:134,style:{verticalAlign:"top"}}):m.a.createElement(g.a,{icon:"plus",style:{color:"#e5e5ea",fontSize:"18px"}})),m.a.createElement(x.a,{value:this.props.formValue.summary,componentClass:"textarea",rows:6,placeholder:"\u9009\u586b\uff0c\u6458\u8981\u4f1a\u5728\u8ba2\u9605\u53f7\u6d88\u606f\u3001\u8f6c\u53d1\u94fe\u63a5\u7b49\u6587\u7ae0\u5916\u7684\u573a\u666f\u663e\u9732\uff0c\u5e2e\u52a9\u8bfb\u8005\u5feb\u901f\u4e86\u89e3\u5185\u5bb9\uff0c\u5982\u4e0d\u586b\u5199\u5219\u9ed8\u8ba4\u6293\u53d6\u6b63\u6587\u524d54\u5b57",onChange:function(t){e.handleFrom("summary",t)}}))),m.a.createElement(y.a,{className:"form-group-line"},m.a.createElement(b.a,{style:{lineHeight:"30px"}},"\u663e\u793a\u5c01\u9762"),m.a.createElement(O.a,{size:"lg",checkedChildren:"\u663e\u793a",unCheckedChildren:"\u4e0d\u663e\u793a",checked:1===this.props.formValue.show_cover_pic,onChange:function(t){e.handleFrom("show_cover_pic",t?"1":"0")}})),m.a.createElement(y.a,null,m.a.createElement(b.a,null,"\u539f\u6587\u5730\u5740"),m.a.createElement(v.a,{name:"source_url",value:this.props.formValue.source_url,onChange:function(t){e.handleFrom("source_url",t)}})),m.a.createElement(y.a,{className:"form-group-line"},m.a.createElement(b.a,{style:{lineHeight:"36px"}},"\u5f00\u542f\u8bc4\u8bba"),m.a.createElement(V.a,{name:"comment",defaultValue:this.props.formValue.comment,onChange:function(t){e.handleFrom("comment",t)}},m.a.createElement(_.a,{value:"0"},"\u5173\u95ed"),m.a.createElement(_.a,{value:"1"},"\u7c89\u4e1d\u53ef\u8bc4\u8bba"),m.a.createElement(_.a,{value:"2"},"\u6240\u6709\u4eba\u53ef\u8bc4\u8bba"))))),m.a.createElement(j.a.Footer,null,m.a.createElement(f.a,{appearance:"primary",onClick:this.handleUpdate},"\u63d0\u4ea4"),m.a.createElement(f.a,{appearance:"subtle",onClick:this.props.onClose},"\u53d6\u6d88"))))}}]),t}(m.a.Component),M=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(s.a)(t).call(this,e))).add=function(){a.setState({show:!0})},a.close=function(){var e=a.props.onModify;a.setState({show:!1,id:0},(function(){setTimeout((function(){e({id:0,title:"",author:"",content:"",show_cover_pic:!1,source_url:"",comment:"2"})}),500)}))},a.state={page:1,searchTile:"",show:!1,sync:!1,syncLoading:!1,id:0},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidUpdate",value:function(e,t,a){!e.synced&&this.props.synced&&this.setState({sync:!1,syncLoading:!1})}},{key:"componentDidMount",value:function(){this.props.getList("news","",1,20)}},{key:"render",value:function(){var e=this,t=d.a.Column,a=d.a.HeaderCell,n=d.a.Cell,r=d.a.Pagination;return m.a.createElement("div",{id:"page"},m.a.createElement(A,{id:this.state.id,show:this.state.show,formValue:this.props.formValue,onEdit:this.props.onUpdate,onClose:this.close,onModify:this.props.onModify,onUpdate:this.props.onUpdate,onSelect:this.props.onSelect,getPicList:this.props.getList,picList:this.props.picList,total:this.props.total,selected:this.props.selected,getInfo:this.props.getInfo,done:this.props.done,cleanDone:this.props.cleanDone}),m.a.createElement("div",{className:"header"},m.a.createElement("div",null,m.a.createElement(f.a,{color:"orange",onClick:this.add},m.a.createElement(g.a,{icon:"plus"})," \u65b0\u589e\u7d20\u6750"),m.a.createElement(f.a,{color:"green",disabled:this.state.sync,loading:this.state.syncLoading,onClick:function(){e.setState({sync:!0,syncLoading:!0}),e.props.onSync("news")}},m.a.createElement(g.a,{icon:"repeat"})," \u83b7\u53d6\u5df2\u6709\u7d20\u6750")),m.a.createElement(E.a,{layout:"inline"},m.a.createElement(y.a,null,m.a.createElement(b.a,null,"\u6807\u9898"),m.a.createElement(v.a,{name:"title",onChange:function(t){e.setState({searchTitle:t})}})),m.a.createElement(f.a,{className:"form-button",appearance:"primary",onClick:function(){e.props.getList("news","",1,20)}},"\u67e5\u8be2"))),m.a.createElement(h.a,null),m.a.createElement(d.a,{loading:!1,data:this.props.list,style:{marginLeft:25,marginRight:25},autoHeight:!0,rowHeight:80},m.a.createElement(t,{width:50,align:"center",verticalAlign:"middle",fixed:!0},m.a.createElement(a,null,"ID"),m.a.createElement(n,{dataKey:"id"})),m.a.createElement(t,{flexGrow:6,align:"center",verticalAlign:"middle"},m.a.createElement(a,null,"\u6807\u9898"),m.a.createElement(n,{dataKey:"title"})),m.a.createElement(t,{flexGrow:4,align:"center",verticalAlign:"middle"},m.a.createElement(a,null,"\u5c01\u9762"),m.a.createElement((function(e){var t=e.rowData,a=(e.dataKey,Object(o.a)(e,["rowData","dataKey"]));return m.a.createElement(n,a,m.a.createElement("img",{height:54,src:t.cover_pic,alt:t.name}))}),{datakey:"cover_pic"})),m.a.createElement(t,{flexGrow:2,align:"center",verticalAlign:"middle"},m.a.createElement(a,null,"\u662f\u5426\u663e\u793a\u5c01\u9762"),m.a.createElement(n,{dataKey:"show_cover_pic"})),m.a.createElement(t,{flexGrow:3,align:"center",verticalAlign:"middle"},m.a.createElement(a,null,"\u662f\u5426\u5f00\u542f\u8bc4\u8bba"),m.a.createElement(n,{dataKey:"comment"})),m.a.createElement(t,{flexGrow:3,align:"center",verticalAlign:"middle"},m.a.createElement(a,null,"\u521b\u5efa\u65f6\u95f4"),m.a.createElement(n,{dataKey:"created_at"})),m.a.createElement(t,{flexGrow:6,align:"center",verticalAlign:"middle"},m.a.createElement(a,null),m.a.createElement((function(t){var a=t.rowData,r=(t.dataKey,Object(o.a)(t,["rowData","dataKey"]));return m.a.createElement(n,Object.assign({},r,{className:"link-group"}),m.a.createElement("a",{role:"button",onClick:function(){e.setState({id:a.id,show:!0})}},"\u7f16\u8f91"),m.a.createElement(h.a,{vertical:!0}),m.a.createElement("a",{href:a.url,target:"_blank"},"\u67e5\u770b"),m.a.createElement(h.a,{vertical:!0}),m.a.createElement("a",{role:"button",onClick:function(){e.props.onDel(a.id,"image")}},"\u5220\u9664"))}),{dataKey:"id"}))),this.props.total>0?m.a.createElement(r,{activePage:this.state.page,displayLength:20,renderLengthMenu:function(){return""},total:this.props.total,onChangePage:function(t){e.props.getList("image","",1,20),e.setState({page:t})}}):"")}}]),t}(m.a.Component),F=a(456);t.default=Object(n.o)(Object(r.c)((function(e){return{list:e.LibraryImgTxt.list,picList:e.LibraryImgTxt.picList,total:e.LibraryImgTxt.total,selected:e.LibraryImgTxt.info,formValue:e.LibraryImgTxt.formValue,synced:e.LibraryImgTxt.synced,done:e.LibraryImgTxt.done}}),(function(e){return{getList:function(t,a,n,r){return e(Object(F.d)(t,a,n,r))},onUpdate:function(t){return e(Object(F.h)(t))},onSelect:function(t){return e(Object(F.f)(t))},onDel:function(t,a){return e(Object(F.b)(t,a))},onModify:function(t){return e(Object(F.e)(t))},onSync:function(t){return e(Object(F.g)(t))},getInfo:function(t){return e(Object(F.c)(t))},cleanDone:function(){return e(Object(F.a)())}}}))(M))}}]);