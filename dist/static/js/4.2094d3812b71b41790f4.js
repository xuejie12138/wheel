webpackJsonp([4],{"2Lob":function(t,s){},K31e:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a={data:function(){return{code:"获取验证码"}},methods:{login:function(){_hmt.push(["_trackEvent","汽车报价","tap","登陆点击"]);var t=this.$refs.user.value,s=this.$refs.pass.value;"xuejie"===t&&"xj123456"===s?(window.sessionStorage.setItem("login",!0),window.localStorage.setItem("login",!0),this.$router.push("/index")):console.log(new Error("用户或验证码错误"))}}},r={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"login"},[e("div",{staticClass:"user"},[e("label",{attrs:{htmlFor:"user"}},[t._v("用户名：")]),e("input",{ref:"user",attrs:{type:"text",id:"user"}})]),t._v(" "),e("div",{staticClass:"pass"},[e("label",{attrs:{htmlFor:"pass"}},[t._v("密码：")]),e("input",{ref:"pass",attrs:{type:"password",id:"pass"}})]),t._v(" "),e("div",{staticClass:"code"},[e("input",{attrs:{type:"text"}}),e("span",[t._v(t._s(t.code))])]),t._v(" "),e("div",{staticClass:"btn"},[e("button",{on:{click:t.login}},[t._v("登陆")])]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"register"},[s("p",[this._v("注册")])])}]};var i=e("C7Lr")(a,r,!1,function(t){e("2Lob")},"data-v-9ff1b956",null);s.default=i.exports}});
//# sourceMappingURL=4.2094d3812b71b41790f4.js.map