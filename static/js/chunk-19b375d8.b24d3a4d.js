(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-19b375d8"],{"1e13":function(t,n,e){},"3c34":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"app-container documentation-container"},[e("el-row",{staticStyle:{width:"100%"}},[e("el-col",{staticClass:"card-panel-col",attrs:{xs:9,sm:9,lg:9}},[e("el-input",{attrs:{placeholder:"Title"}})],1),e("el-col",{staticClass:"card-panel-col",attrs:{xs:9,sm:9,lg:9}},[e("el-input",{attrs:{placeholder:"Link"}})],1),e("el-col",{staticClass:"card-panel-col",attrs:{xs:6,sm:6,lg:6}},[e("el-button",[t._v("Save")])],1)],1),e("a",{staticClass:"document-btn",attrs:{target:"_blank",href:"https://github.com/hoangvanvietanh"}},[t._v("Việt Anh")]),e("dropdown-menu",{staticClass:"document-btn",attrs:{items:t.articleList,title:"Việt Anh"}})],1)},i=[],s=e("7c70"),c={name:"Documentation",components:{DropdownMenu:s["a"]},data:function(){return{articleList:[{title:"Việt Anh",href:"https://github.com/hoangvanvietanh"},{title:"Việt Anh",href:"https://github.com/hoangvanvietanh"},{title:"Việt Anh",href:"https://github.com/hoangvanvietanh"},{title:"Việt Anh",href:"https://github.com/hoangvanvietanh"},{title:"Việt Anh",href:"https://github.com/hoangvanvietanh"},{title:"Việt Anh",href:"https://github.com/hoangvanvietanh"},{title:"Việt Anh",href:"https://github.com/hoangvanvietanh"},{title:"Việt Anh",href:"https://github.com/hoangvanvietanh"},{title:"Việt Anh",href:"https://github.com/hoangvanvietanh"}]}}},r=c,l=(e("48d0"),e("2877")),h=Object(l["a"])(r,a,i,!1,null,"b9f65514",null);n["default"]=h.exports},"48d0":function(t,n,e){"use strict";var a=e("1e13"),i=e.n(a);i.a},"4ba3":function(t,n,e){"use strict";var a=e("7626"),i=e.n(a);i.a},7626:function(t,n,e){},"7c70":function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"share-dropdown-menu",class:{active:t.isActive}},[e("div",{staticClass:"share-dropdown-menu-wrapper"},[e("span",{staticClass:"share-dropdown-menu-title",on:{click:function(n){return n.target!==n.currentTarget?null:t.clickTitle(n)}}},[t._v(t._s(t.title))]),t._l(t.items,(function(n,a){return e("div",{key:a,staticClass:"share-dropdown-menu-item"},[n.href?e("a",{attrs:{href:n.href,target:"_blank"}},[t._v(t._s(n.title))]):e("span",[t._v(t._s(n.title))])])}))],2)])},i=[],s={props:{items:{type:Array,default:function(){return[]}},title:{type:String,default:"vue"}},data:function(){return{isActive:!1}},methods:{clickTitle:function(){this.isActive=!this.isActive}}},c=s,r=(e("4ba3"),e("2877")),l=Object(r["a"])(c,a,i,!1,null,null,null);n["a"]=l.exports}}]);