webpackJsonp([0],{CH3F:function(t,i){},JV7o:function(t,i){t.exports="data:image/gif;base64,R0lGODlhJQAlAJECAL3L2AYrTv///wAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFCgACACwAAAAAJQAlAAACi5SPqcvtDyGYIFpF690i8xUw3qJBwUlSadmcLqYmGQu6KDIeM13beGzYWWy3DlB4IYaMk+Dso2RWkFCfLPcRvFbZxFLUDTt21BW56TyjRep1e20+i+eYMR145W2eefj+6VFmgTQi+ECVY8iGxcg35phGo/iDFwlTyXWphwlm1imGRdcnuqhHeop6UAAAIfkEBQoAAgAsEAACAAQACwAAAgWMj6nLXAAh+QQFCgACACwVAAUACgALAAACFZQvgRi92dyJcVJlLobUdi8x4bIhBQAh+QQFCgACACwXABEADAADAAACBYyPqcsFACH5BAUKAAIALBUAFQAKAAsAAAITlGKZwWoMHYxqtmplxlNT7ixGAQAh+QQFCgACACwQABgABAALAAACBYyPqctcACH5BAUKAAIALAUAFQAKAAsAAAIVlC+BGL3Z3IlxUmUuhtR2LzHhsiEFACH5BAUKAAIALAEAEQAMAAMAAAIFjI+pywUAIfkEBQoAAgAsBQAFAAoACwAAAhOUYJnAagwdjGq2amXGU1PuLEYBACH5BAUKAAIALBAAAgAEAAsAAAIFhI+py1wAIfkEBQoAAgAsFQAFAAoACwAAAhWUL4AIvdnciXFSZS6G1HYvMeGyIQUAIfkEBQoAAgAsFwARAAwAAwAAAgWEj6nLBQAh+QQFCgACACwVABUACgALAAACE5RgmcBqDB2MarZqZcZTU+4sRgEAIfkEBQoAAgAsEAAYAAQACwAAAgWEj6nLXAAh+QQFCgACACwFABUACgALAAACFZQvgAi92dyJcVJlLobUdi8x4bIhBQAh+QQFCgACACwBABEADAADAAACBYSPqcsFADs="},NwFh:function(t,i){},Wtgt:function(t,i){},h5Ia:function(t,i){},o2D7:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var o=e("4YfN"),n=e.n(o),s=e("9rMa"),A=e("41jX"),r=e("uRer"),c=(e("Wtgt"),{data:function(){var t=this;return{index:0,swiperOption:{notNextTick:!0,initialSlide:this.imgIndex||"",onSlideChangeEnd:function(i){t.activeIndex(i.activeIndex),Object(r.a)(".mark")}}}},props:{imgIndex:Number},computed:n()({},Object(s.e)({num:function(t){return t.Photo.num}}),Object(s.c)({list:"Photo/list"})),components:{swiper:A.swiper,swiperSlide:A.swiperSlide},methods:n()({},Object(s.d)({isFlagF:"Photo/isFlagF"}),{isFlag:function(){this.isFlagF()},activeIndex:function(t){this.index=t+1}}),mounted:function(){this.index=this.imgIndex+1},updated:function(){Object(r.a)(".mark")}}),a={render:function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("div",{staticClass:"mark",on:{click:t.isFlag}},[o("div",[o("swiper",{ref:"mySwiper",attrs:{options:t.swiperOption}},t._l(t.list.List,function(t,i){return o("swiper-slide",{key:i},[o("li",[o("img",{attrs:{"data-src":t.Url,src:e("JV7o")}})])])})),t._v(" "),o("div",{staticClass:"page"},[t._v(t._s(t.index)+"/"+t._s(t.num))]),t._v(" "),o("button",{staticClass:"btn"},[t._v("询问低价")])],1)])},staticRenderFns:[]};var l=e("C7Lr")(c,a,!1,function(t){e("h5Ia")},"data-v-ebd9a242",null).exports,u={computed:n()({},Object(s.e)({imgList:function(t){return t.Photo.imgList}}),Object(s.c)({list:"Photo/list"})),methods:n()({},Object(s.d)({isFlagT:"Photo/isFlagT"}),{imgTap:function(t,i){this.isFlagT({ind:i,count:this.list.Count})}}),mounted:function(){console.log(this.imgList)},updated:function(){console.log(this.$refs),window.addEventListener("scroll",function(){console.log(456)})}},d={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{ref:"list",staticClass:"list"},[e("ul",t._l(t.list.List,function(i,o){return e("li",{on:{click:function(e){t.imgTap(i.Id,o)}}},[e("img",{attrs:{"data-src":i.Url,src:""}})])}))])},staticRenderFns:[]};var g=e("C7Lr")(u,d,!1,function(t){e("CH3F")},"data-v-49f03727",null).exports,h={computed:n()({},Object(s.e)({imgList:function(t){return t.image.imgList},flag:function(t){return t.Photo.flag},isImgs:function(t){return t.Photo.isImgs},ind:function(t){return t.Photo.ind},colorId:function(t){return t.imgColor.colorId},carId:function(t){return t.imgType.carId},colorName:function(t){return t.imgColor.colorName},typeName:function(t){return t.imgType.typeName}}),Object(s.c)({list:"image/list"})),components:{ImgDetail:l,ImgList:g},methods:n()({},Object(s.b)({photos:"Photo/photos",getColorList:"imgColor/getColorList"}),Object(s.d)({isFlagT:"Photo/isFlagT",isImages:"Photo/isImages",isFlagF:"Photo/isFlagF"}),{imgTap:function(t,i,e){console.log(this.colorId),this.isFlagT({ind:i,count:e}),this.colorId||this.carId?this.photos({SerialID:this.$route.query.id,ImageID:t,ColorID:this.colorId?this.colorId:"",CarID:this.carId?this.carId:""}):this.photos({SerialID:this.$route.query.id,ImageID:t})},getImgs:function(t){this.isImages(!0),this.colorId?this.photos({SerialID:this.$route.query.id,ImageID:t,ColorID:this.colorId}):this.photos({SerialID:this.$route.query.id,ImageID:t})},imgColor:function(t){this.$router.push({path:"/imgColor",query:{id:this.$route.query.id}})},imgType:function(){this.$router.push({path:"/typeList",query:{id:this.$route.query.id}})}}),mounted:function(){this.isImages(!1),this.isFlagF()},updated:function(){}},m={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("div",{staticClass:"images"},[e("div",{staticClass:"navTop"},[e("p",{attrs:{"data-hover":"hover"},on:{click:t.imgColor}},[e("span",[t._v(t._s(t.colorName))])]),t._v(" "),e("p",{attrs:{"data-hover":"hover"},on:{click:t.imgType}},[e("span",[e("em",[t._v(t._s(t.typeName))])])])]),t._v(" "),e("div",{staticClass:"img"},t._l(t.list,function(i,o){return e("ul",{key:o},[t._l(i.List,function(o,n){return e("li",{key:n,on:{click:function(e){t.imgTap(i.Id,n,i.Count)}}},[e("img",{attrs:{src:o.Url,alt:""}})])}),t._v(" "),e("div",{on:{click:function(e){t.getImgs(i.Id)}}},[e("p",[t._v(t._s(i.Name))]),t._v(" "),e("p",[t._v(t._s(i.Count)+"张>")])])],2)}))]),t._v(" "),t.isImgs?e("ImgList"):t._e(),t._v(" "),t.flag?e("ImgDetail",{attrs:{imgIndex:t.ind}}):t._e()],1)},staticRenderFns:[]};var I=e("C7Lr")(h,m,!1,function(t){e("NwFh")},"data-v-06335176",null);i.default=I.exports},uRer:function(t,i,e){"use strict";i.a=function(t){var i=document.querySelectorAll("[data-src]"),e=function(){i.forEach(function(t){var i;(i=t.getBoundingClientRect()).top>=0&&i.top<window.innerHeight+10&&i.left>=0&&i.left<=window.innerWidth&&i.right>=0&&i.right<=window.innerWidth&&!function(t){return t.src===t.dataset.src}(t)&&(t.src=t.dataset.src)})};e(),document.querySelector(t).addEventListener("scroll",e)}}});
//# sourceMappingURL=0.534608d320c096657b7e.js.map