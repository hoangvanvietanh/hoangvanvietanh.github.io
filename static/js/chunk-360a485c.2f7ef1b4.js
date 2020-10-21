(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-360a485c"],{2017:function(t,e,n){"use strict";var s=n("cafe"),o=n.n(s);o.a},"555b":function(t,e,n){},"9ed6":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login-container"},[n("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:t.loginForm,rules:t.loginRules,autocomplete:"on","label-position":"left"}},[n("div",{staticClass:"title-container"},[n("h3",{staticClass:"title"},[t._v("Login Form")])]),n("el-form-item",{attrs:{prop:"username"}},[n("span",{staticClass:"svg-container"},[n("svg-icon",{attrs:{"icon-class":"user"}})],1),n("el-input",{ref:"username",attrs:{placeholder:"Username",name:"username",type:"text",tabindex:"1",autocomplete:"on"},model:{value:t.loginForm.username,callback:function(e){t.$set(t.loginForm,"username",e)},expression:"loginForm.username"}})],1),n("el-tooltip",{attrs:{content:"Caps lock is On",placement:"right",manual:""},model:{value:t.capsTooltip,callback:function(e){t.capsTooltip=e},expression:"capsTooltip"}},[n("el-form-item",{attrs:{prop:"password"}},[n("span",{staticClass:"svg-container"},[n("svg-icon",{attrs:{"icon-class":"password"}})],1),n("el-input",{key:t.passwordType,ref:"password",attrs:{type:t.passwordType,placeholder:"Password",name:"password",tabindex:"2",autocomplete:"on"},on:{blur:function(e){t.capsTooltip=!1}},nativeOn:{keyup:[function(e){return t.checkCapslock(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleLogin(e)}]},model:{value:t.loginForm.password,callback:function(e){t.$set(t.loginForm,"password",e)},expression:"loginForm.password"}}),n("span",{staticClass:"show-pwd",on:{click:t.showPwd}},[n("svg-icon",{attrs:{"icon-class":"password"===t.passwordType?"eye":"eye-open"}})],1)],1)],1),n("el-button",{staticStyle:{width:"100%","margin-bottom":"5px"},attrs:{loading:t.loading,type:"primary"},nativeOn:{click:function(e){return e.preventDefault(),t.handleLogin(e)}}},[t._v("Login")]),n("el-button",{staticStyle:{width:"100%","margin-bottom":"30px","margin-left":"0px"},attrs:{type:"primary"},nativeOn:{click:function(e){return e.preventDefault(),t.handleRegister(e)}}},[t._v("Register")]),n("el-button",{staticStyle:{width:"100%","margin-bottom":"30px","margin-left":"0px"},attrs:{type:"primary"},on:{click:function(e){t.showDialog=!0}}},[t._v("Or connect with")])],1),n("el-dialog",{attrs:{title:"Or connect with",visible:t.showDialog},on:{"update:visible":function(e){t.showDialog=e}}},[t._v(" Can not be simulated on local, so please combine you own business simulation! ! ! "),n("br"),n("br"),n("br"),n("social-sign")],1)],1)},o=[],i=(n("13d5"),n("b64b"),n("61f7")),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"social-signup-container"},[n("div",{staticClass:"sign-btn",on:{click:function(e){return t.wechatHandleClick("wechat")}}},[n("span",{staticClass:"wx-svg-container"},[n("svg-icon",{staticClass:"icon",attrs:{"icon-class":"wechat"}})],1),t._v(" WeChat ")]),n("div",{staticClass:"sign-btn",on:{click:function(e){return t.tencentHandleClick("tencent")}}},[n("span",{staticClass:"qq-svg-container"},[n("svg-icon",{staticClass:"icon",attrs:{"icon-class":"qq"}})],1),t._v(" QQ ")])])},r=[],c={name:"SocialSignin",methods:{wechatHandleClick:function(t){alert("ok")},tencentHandleClick:function(t){alert("ok")}}},l=c,u=(n("edc1"),n("2877")),p=Object(u["a"])(l,a,r,!1,null,"c817cede",null),d=p.exports,g={name:"Login",components:{SocialSign:d},data:function(){var t=function(t,e,n){Object(i["f"])(e)?n():n(new Error("Please enter the correct user name"))},e=function(t,e,n){e.length<6?n(new Error("The password can not be less than 6 digits")):n()};return{loginForm:{username:"",password:""},loginRules:{username:[{required:!0,trigger:"blur",validator:t}],password:[{required:!0,trigger:"blur",validator:e}]},passwordType:"password",capsTooltip:!1,loading:!1,showDialog:!1,redirect:void 0,otherQuery:{}}},watch:{$route:{handler:function(t){var e=t.query;e&&(this.redirect=e.redirect,this.otherQuery=this.getOtherQuery(e))},immediate:!0}},created:function(){},mounted:function(){""===this.loginForm.username?this.$refs.username.focus():""===this.loginForm.password&&this.$refs.password.focus()},destroyed:function(){},methods:{checkCapslock:function(t){var e=t.key;this.capsTooltip=e&&1===e.length&&e>="A"&&e<="Z"},showPwd:function(){var t=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick((function(){t.$refs.password.focus()}))},handleLogin:function(){var t=this;this.$refs.loginForm.validate((function(e){if(!e)return console.log("error submit!!"),!1;t.loading=!0,t.$store.dispatch("user/login",t.loginForm).then((function(){t.$router.push({path:t.redirect||"/",query:t.otherQuery}),t.loading=!1})).catch((function(){t.loading=!1}))}))},handleRegister:function(){this.$router.push({path:"/register"})},getOtherQuery:function(t){return Object.keys(t).reduce((function(e,n){return"redirect"!==n&&(e[n]=t[n]),e}),{})}}},h=g,f=(n("2017"),n("a168"),Object(u["a"])(h,s,o,!1,null,"10ea85cd",null));e["default"]=f.exports},a168:function(t,e,n){"use strict";var s=n("555b"),o=n.n(s);o.a},cafe:function(t,e,n){},edc1:function(t,e,n){"use strict";var s=n("eea3"),o=n.n(s);o.a},eea3:function(t,e,n){}}]);