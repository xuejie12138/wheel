webpackJsonp([5],{BwmT:function(t,o,i){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var e=i("4YfN"),r=i.n(e),n=i("9rMa"),s={computed:r()({},Object(n.e)({colorList:function(t){return t.imgColor.colorList},ind:function(t){return t.imgColor.ind},list:function(t){return t.imgColor.list}}),Object(n.c)({year:"imgColor/year"})),methods:r()({},Object(n.b)({getColorList:"imgColor/getColorList",getImgList:"image/getImgList"}),Object(n.d)({changColorList:"imgColor/changColorList",colorId:"imgColor/colorId"}),{getImgs:function(t){this.$router.back(-1),Number(t)?(this.colorId(t),this.getImgList({SerialID:this.$route.query.id,ColorID:t})):(this.colorId(),this.getImgList({SerialID:this.$route.query.id}))}}),mounted:function(){this.getColorList(this.$route.query.id)},updated:function(){}},l={render:function(){var t=this,o=t.$createElement,i=t._self._c||o;return i("div",{staticClass:"color-list"},[i("div",{staticClass:"all-color",on:{click:t.getImgs}},[t._v("全部颜色")]),t._v(" "),i("div",{staticClass:"nav-list"},t._l(t.year,function(o,e){return i("span",{key:e,class:t.ind==e?"active":"",on:{click:function(o){t.changColorList(e)}}},[t._v(t._s(o))])})),t._v(" "),i("ul",t._l(t.list,function(o,e){return i("li",{key:e,on:{click:function(i){t.getImgs(o.ColorId)}}},[i("span",{style:{"background-color":o.Value}}),t._v(t._s(o.Name))])}))])},staticRenderFns:[]};var c=i("C7Lr")(s,l,!1,function(t){i("epJ8")},"data-v-07641a94",null);o.default=c.exports},epJ8:function(t,o){}});
//# sourceMappingURL=5.913aca0964c5539ccc14.js.map