(this.webpackJsonpadmin=this.webpackJsonpadmin||[]).push([[13],{726:function(e,t,a){},869:function(e,t,a){"use strict";a.r(t);var n=a(16),r=a(42),o=a(6);var l=a(129),c=a(31),i=a(32),u=a(34),s=a(33),m=a(35),p=a(0),d=a.n(p),f=a(864),g=a(852),E=a(54),h=a(62),y=(a(726),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={page:1,show:!1},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.getList(0,20)}},{key:"render",value:function(){var e=this,t=f.a.Column,a=f.a.HeaderCell,n=f.a.Cell,r=f.a.Pagination;return d.a.createElement("div",{id:"page"},d.a.createElement(E.a,{color:"orange",onClick:function(){e.props.onCreate()}},d.a.createElement(h.a,{icon:"plus"})," \u521b\u5efa\u4e8c\u7ef4\u7801"),d.a.createElement(g.a,null),d.a.createElement(f.a,{loading:!1,data:this.props.list,style:{marginLeft:25,marginRight:25},autoHeight:!0},d.a.createElement(t,{width:50,align:"center",fixed:!0},d.a.createElement(a,null,"ID"),d.a.createElement(n,{dataKey:"id"})),d.a.createElement(t,{flexGrow:4},d.a.createElement(a,null,"\u4e8c\u7ef4\u7801\u540d\u79f0"),d.a.createElement(n,{dataKey:"name"})),d.a.createElement(t,{flexGrow:3},d.a.createElement(a,null,"\u7c7b\u578b"),d.a.createElement(n,{dataKey:"forever"})),d.a.createElement(t,{flexGrow:3},d.a.createElement(a,null,"\u533a\u57df"),d.a.createElement(n,{dataKey:"area"})),d.a.createElement(t,{flexGrow:2},d.a.createElement(a,null),d.a.createElement((function(t){var a=t.rowData,r=(t.dataKey,Object(l.a)(t,["rowData","dataKey"]));return d.a.createElement(n,Object.assign({},r,{className:"link-group"}),d.a.createElement("a",{role:"button",onClick:function(){e.props.onDownLoad(a.id,a.name)}},"\u4e0b\u8f7d"),d.a.createElement(g.a,{vertical:!0}),d.a.createElement("a",{role:"button",onClick:function(){e.props.onDel(a.id)}},"\u5220\u9664"))}),{dataKey:"id"}))),this.props.total>0?d.a.createElement(r,{activePage:this.state.page,displayLength:20,total:this.props.total,renderLengthMenu:function(){return""},onChangePage:function(t){e.props.getList(t,20),e.setState({page:t})}}):"")}}]),t}(d.a.Component));t.default=Object(n.o)(Object(r.c)((function(e){return{list:e.Qrcode.list,total:e.Qrcode.total}}),(function(e){return{getList:function(t,a){return e(function(e,t){return{type:o.t,page:e,pageSize:t}}(t,a))},onCreate:function(){return e({type:o.c})},onDownLoad:function(t,a){return e(function(e,t){return{type:o.h,id:e,name:t}}(t,a))},onDel:function(t){return e(function(e){return{type:o.g,id:e}}(t))}}}))(y))}}]);
//# sourceMappingURL=13.5d723c6f.chunk.js.map