(this.webpackJsonpadmin=this.webpackJsonpadmin||[]).push([[14],{434:function(e,t,a){},699:function(e,t,a){"use strict";a.r(t);var n=a(16),r=a(3);var o=a(42),l=a(126),c=a(30),s=a(31),i=a(33),m=a(32),p=a(129),u=a(34),d=a(0),f=a.n(d),h=a(700),y=a(688),E=a(54),w=a(62);a(434);function v(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var k=a(401),b=a(689),g=a(399),_=a(394),C=a(404),V=a(402),j=a(193),O=a(194),N=a(687),K=a(697),S=a(712),F=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).handleFrom=function(e,t){var n=a.props.formValue;n[e]=t,n.type="key_words",a.setState({formValue:n}),a.props.onModify(n)},a.handleUpdate=function(){var e=a.props.formValue.name.trim(),t=a.props.formValue.key_words,n=a.props.formValue.content;return e?t[0]?n[0]?void a.props.onUpdate(a.props.formValue):(k.a.error("\u56de\u590d\u5185\u5bb9\u4e0d\u80fd\u4e3a\u7a7a"),!1):(k.a.error("\u5173\u952e\u8bcd\u4e0d\u80fd\u4e3a\u7a7a"),!1):(k.a.error("\u89c4\u5219\u540d\u79f0\u4e0d\u80fd\u4e3a\u7a7a"),!1)},a.state={show:!0,matchType:[{label:"\u534a\u5339\u914d",value:"1"},{label:"\u5168\u5339\u914d",value:"2"}],formValue:"",match:"1"},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return f.a.createElement(b.a,{show:this.props.show,onHide:this.props.onClose,size:"sm"},f.a.createElement(b.a.Header,null,f.a.createElement(b.a.Title,null,this.props.title)),f.a.createElement(b.a.Body,null,f.a.createElement(g.a,{fluid:!0},f.a.createElement(_.a,null,f.a.createElement(C.a,null,"\u89c4\u5219\u540d\u79f0"),f.a.createElement(V.a,{name:"name",value:this.props.formValue.name,onChange:function(t){e.handleFrom("name",t)}})),f.a.createElement(_.a,null,f.a.createElement(C.a,null,"\u5339\u914d\u65b9\u5f0f")),f.a.createElement(_.a,null,f.a.createElement("div",{className:"reply-attach-after"},f.a.createElement(C.a,null,"\u5173\u952e\u8bcd"),f.a.createElement(j.a,{placement:"top",trigger:"hover",speaker:f.a.createElement(O.a,null,"\u6dfb\u52a0")},f.a.createElement(E.a,{color:"green",onClick:function(){var t=e.props.formValue.key_words;t.push({match:"1",words:""}),e.handleFrom("key_words",t)}},"+"))),this.props.formValue.key_words.map((function(t,a){return f.a.createElement("div",{key:a,className:"reply-attach-before",style:{marginBottom:"15px"}},a>0?f.a.createElement(j.a,{placement:"top",trigger:"hover",speaker:f.a.createElement(O.a,null,"\u5220\u9664")},f.a.createElement(E.a,{color:"red",onClick:function(){var t=e.props.formValue.key_words,n=v(t.slice(0,a));n.push.apply(n,v(t.slice(a+1))),e.handleFrom("key_words",n)}},"x")):"",f.a.createElement(N.a,{data:e.state.matchType,defaultValue:t.match.toString(),searchable:!1,block:!0,cleanable:!1,onChange:function(t){e.setState({match:t})}}),f.a.createElement(V.a,{name:"key_words[]",value:t.words,onChange:function(t){e.props.formValue.key_words[a]={match:e.state.match,words:t},e.handleFrom("key_words",e.props.formValue.key_words)}}))}))),f.a.createElement(_.a,null,f.a.createElement("div",{className:"reply-attach-after"},f.a.createElement(C.a,null,"\u56de\u590d\u5185\u5bb9"),f.a.createElement(j.a,{placement:"top",trigger:"hover",speaker:f.a.createElement(O.a,null,"\u6dfb\u52a0")},f.a.createElement(E.a,{color:"green",onClick:function(){var t=e.props.formValue.content;t.push(""),e.handleFrom("content",t)}},"+"))),this.props.formValue.content.map((function(t,a){return f.a.createElement("div",{key:a,className:"reply-attach-before",style:{marginBottom:"15px"}},a>0?f.a.createElement(j.a,{placement:"top",trigger:"hover",speaker:f.a.createElement(O.a,null,"\u5220\u9664")},f.a.createElement(E.a,{color:"red",onClick:function(){var t=e.props.formValue.content,n=v(t.slice(0,a));n.push.apply(n,v(t.slice(a+1))),e.handleFrom("content",n)}},"x")):"",f.a.createElement(V.a,{name:"content[]",value:t,onChange:function(t){e.props.formValue.content[a]=t,e.handleFrom("content",e.props.formValue.content)}}))}))),f.a.createElement(_.a,null,f.a.createElement(C.a,null,"\u56de\u590d\u65b9\u5f0f"),f.a.createElement(K.a,{inline:!0,name:"reply_type",value:this.props.formValue.reply_type,onChange:function(t){e.handleFrom("reply_type",t)}},f.a.createElement(S.a,{value:"1"},"\u56de\u590d\u5168\u90e8"),f.a.createElement(S.a,{value:"2"},"\u968f\u673a\u4e00\u6761"))))),f.a.createElement(b.a.Footer,null,f.a.createElement(E.a,{onClick:this.handleUpdate,appearance:"primary"},"\u63d0\u4ea4"),f.a.createElement(E.a,{onClick:this.props.onClose,appearance:"subtle"},"\u53d6\u6d88")))}}]),t}(f.a.Component),x=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return f.a.createElement(b.a,{show:this.props.show,onHide:this.props.onClose,size:"xs"},f.a.createElement(b.a.Header,null,f.a.createElement(b.a.Title,null,"\u67e5\u770b\u8be6\u60c5")),f.a.createElement(b.a.Body,null,f.a.createElement("div",{className:"info-body"},f.a.createElement("div",{className:"info-header"},"\u89c4\u5219\u540d\u79f0"),f.a.createElement("div",{className:"info-content"},this.props.info.name)),f.a.createElement("div",{className:"info-body"},f.a.createElement("div",{className:"info-header"},"\u5173\u952e\u8bcd"),f.a.createElement("div",{className:"info-content"},this.props.info.key_words.map((function(e,t){return f.a.createElement("span",{key:t},e.words,"(","1"===e.match?"\u534a\u5339\u914d":"\u5168\u5339\u914d",")")})))),f.a.createElement("div",{className:"info-body"},f.a.createElement("div",{className:"info-header"},"\u56de\u590d\u5185\u5bb9"),f.a.createElement("div",{className:"info-content"},this.props.info.content.map((function(e,t){return f.a.createElement("span",{key:t,style:{display:"block"}},e)})))),f.a.createElement("div",{className:"info-body"},f.a.createElement("div",{className:"info-header"},"\u56de\u590d\u65b9\u5f0f"),f.a.createElement("div",{className:"info-content"},"1"===this.props.info.reply_type?"\u5168\u90e8\u56de\u590d":"\u968f\u673a\u4e00\u6761"))),f.a.createElement(b.a.Footer,null,f.a.createElement(E.a,{onClick:this.props.onClose,appearance:"primary"},"\u5173\u95ed")))}}]),t}(f.a.Component),T=a(182),D=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).add=function(){a.setState({show:!0})},a.close=function(){var e=a.props.onModify;a.setState({show:!1},(function(){setTimeout((function(){e(T.b.formValue)}),500)}))},a.closeInfo=function(){a.setState({showInfo:!1})},a.state={show:!1,showInfo:!1,info:T.b.formValue,title:"\u6dfb\u52a0\u56de\u590d",page:1},a.add=a.add.bind(Object(p.a)(a)),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.getList("key_words",0,20)}},{key:"componentDidUpdate",value:function(e,t,a){!e.update&&this.props.update&&this.close()}},{key:"render",value:function(){var e=this,t=h.a.Column,a=h.a.HeaderCell,n=h.a.Cell,r=h.a.Pagination;return f.a.createElement("div",{id:"page"},f.a.createElement(F,{show:this.state.show,onClose:this.close,title:this.state.title,formValue:this.props.formValue,onModify:this.props.onModify,onUpdate:this.props.onUpdate}),f.a.createElement(x,{info:this.state.info,show:this.state.showInfo,onClose:this.closeInfo}),f.a.createElement(E.a,{color:"orange",onClick:this.add},f.a.createElement(w.a,{icon:"plus"})," \u65b0\u589e\u56de\u590d"),f.a.createElement(y.a,null),f.a.createElement(h.a,{loading:!1,data:this.props.list,style:{marginLeft:25,marginRight:25},autoHeight:!0},f.a.createElement(t,{width:50,align:"center",fixed:!0},f.a.createElement(a,null,"Id"),f.a.createElement(n,{dataKey:"id"})),f.a.createElement(t,{flexGrow:4},f.a.createElement(a,null,"\u89c4\u5219\u540d\u79f0"),f.a.createElement(n,{dataKey:"name"})),f.a.createElement(t,{flexGrow:9},f.a.createElement(a,null,"\u5173\u952e\u5b57"),f.a.createElement((function(e){var t=e.rowData,a=(e.dataKey,Object(l.a)(e,["rowData","dataKey"])),r=t.key_words,o="";return r.forEach((function(e,t){o+=e.words+","})),o.length>0&&(o=o.substr(0,o.length-1)),f.a.createElement(n,a,o)}),{dataKey:"key_words"})),f.a.createElement(t,{flexGrow:9},f.a.createElement(a,null,"\u56de\u590d\u5185\u5bb9"),f.a.createElement(n,{dataKey:"content"})),f.a.createElement(t,{flexGrow:3},f.a.createElement(a,null),f.a.createElement((function(t){var a=t.rowData,r=(t.dataKey,Object(l.a)(t,["rowData","dataKey"]));return f.a.createElement(n,Object.assign({},r,{className:"link-group"}),f.a.createElement("a",{role:"button",onClick:function(){e.props.onModify({id:a.id,name:a.name,key_words:a.key_words,content:a.content.split(","),reply_type:a.reply_type.toString(),type:"key_words"}),e.setState({title:"\u7f16\u8f91\u56de\u590d",show:!0})}},"\u7f16\u8f91"),f.a.createElement(y.a,{vertical:!0}),f.a.createElement("a",{role:"button",onClick:function(){e.setState({showInfo:!0,info:{id:a.id,name:a.name,key_words:a.key_words,content:a.content.split(","),reply_type:a.reply_type.toString(),type:"key_words"}})}},"\u8be6\u60c5"),f.a.createElement(y.a,{vertical:!0}),f.a.createElement("a",{role:"button",onClick:function(){e.props.onDel(a.id,"key_words")}},"\u5220\u9664"))}),{dataKey:"id"}))),this.props.total>0?f.a.createElement(r,{activePage:this.state.page,total:this.props.total,renderLengthMenu:function(){return""},renderTotal:function(){return f.a.createElement("div",null,"\u603b\u6570:",e.props.total)},onChangePage:function(t){e.props.getList("key_words",t,20),e.setState({page:t})}}):"")}}]),t}(f.a.Component);t.default=Object(n.o)(Object(o.c)((function(e){return{list:e.KeyWords.list,total:e.KeyWords.total,update:e.KeyWords.update,del:e.KeyWords.del,formValue:e.KeyWords.formValue}}),(function(e){return{getList:function(t,a,n){return e(function(e,t,a){return{type:r.w,replyType:e,page:t,pageSize:a}}(t,a,n))},onUpdate:function(t){return e(function(e){return{type:r.ab,formValue:e}}(t))},onDel:function(t,a){return e(function(e,t){return{type:r.h,id:e,editType:t}}(t,a))},onModify:function(t){return e(function(e){return{type:r.P,formValue:e}}(t))}}}))(D))}}]);
//# sourceMappingURL=14.5ac49278.chunk.js.map