(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6d1b5364"],{"6f82":function(e,t,n){},"9fe6":function(e,t,n){"use strict";var i=n("6f82"),o=n.n(i);o.a},bee3:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-row",{staticClass:"panel-group",staticStyle:{padding:"30px"},attrs:{gutter:40}},[n("splitpanes",{staticStyle:{height:"80vh"}},[n("pane",{attrs:{"min-size":"20"}},[n("div",{staticStyle:{width:"100%",height:"85vh"},attrs:{id:"jsoneditor"}})]),n("pane",{attrs:{"in-size":"20"}},[n("div",{staticStyle:{width:"100%",height:"85vh"},attrs:{id:"jsoneditor2"}})])],1)],1)},o=[],s=n("61f0"),a=n.n(s),r=(n("f241"),n("512e")),d=(n("c1ea"),{name:"json-editor",components:{Splitpanes:r["Splitpanes"],Pane:r["Pane"]},mounted:function(){this.test()},methods:{test:function(){var e=document.getElementById("jsoneditor"),t=document.getElementById("jsoneditor2"),n={modes:["text","code","tree","form","view"],mode:"code"},i={modes:["text","code","tree","form","view"],mode:"view"},o=new a.a(e,n),s=new a.a(t,i),r={Array:[1,2,3],Boolean:!0,Null:null,Number:123,Object:{a:"b",c:"d"},String:"Hello World"};o.set(r),s.set(r)}}}),l=d,c=(n("9fe6"),n("2877")),u=Object(c["a"])(l,i,o,!1,null,null,null);t["default"]=u.exports}}]);