(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-Ticekets-Ticekets"],{"8ae6":function(t,n,e){"use strict";e.r(n);var i=e("b006"),a=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,function(){return i[t]})}(o);n["default"]=a.a},aa85:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"pages"},[e("v-uni-view",{staticClass:"contBody"},[e("v-uni-view",{staticClass:"title_box"},[e("v-uni-image",{attrs:{src:"../../static/imgs/redpack.png",mode:"aspectFit"}}),e("v-uni-view",{staticClass:"title_prs"},[e("v-uni-text",[t._v("￥")]),e("v-uni-text",[t._v(t._s(t.infos.courrentCouponMoney||"0"))])],1)],1),1==t.infos.is_get_coupon?[e("v-uni-view",{staticClass:"canUse"},[e("v-uni-image",{staticClass:"ewm_code",attrs:{src:t.infos.qrcode,mode:"aspectFit"}}),e("v-uni-view",{staticClass:"ewm_codeNum"},[t._v("请尽快持二维码到线下门店进行消费")])],1),e("v-uni-view",{staticClass:"Empty"}),e("v-uni-view",{staticClass:"rule"},[e("v-uni-text",[t._v("有效期：")]),e("v-uni-text",[t._v(t._s(t.infos.create_time+"-"+t.infos.use_end_time))])],1)]:t._e(),1!=t.infos.is_get_coupon?[e("v-uni-view",{staticClass:"canUse"},[e("v-uni-view",{staticClass:"ewm_codeNum",on:{click:function(n){n=t.$handleEvent(n),t.getCoupon()}}},[t._v("马上领取")])],1)]:t._e(),e("v-uni-view",{staticClass:"rule",on:{click:function(n){n=t.$handleEvent(n),t.Goaddr(n)}}},[e("v-uni-text",[t._v("使用地址：")]),e("v-uni-text",[t._v("四川省成都市高新区蜀锦路88号新中泰国际大厦A座1607室")])],1),e("v-uni-view",{staticClass:"rule",on:{click:function(n){n=t.$handleEvent(n),t.callS(n)}}},[e("v-uni-text",[t._v("联系电话：")]),e("v-uni-text",[t._v("028-85245456")])],1)],2)],1)},a=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return a})},b006:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={data:function(){return{infos:{}}},onLoad:function(){this.getInfo()},methods:{getCoupon:function(){var t=this;this.$http.req(this.$url.getCoupon,{coupon_id:this.infos.couponId},"get").then(function(n){if(200==n.data.code){uni.showToast({title:"领取成功",icon:"none",duration:1e3});var e=t;setTimeout(function(){e.getInfo()},1e3)}})},getInfo:function(){var t=this;this.$http.req(this.$url.saleTicket).then(function(n){t.infos=n.data.data.info})},Goaddr:function(){this.$pub_fun.open_map()},callS:function(){this.$pub_fun.Call_Tel()}}};n.default=i},b7f1:function(t,n,e){"use strict";var i=e("e909"),a=e.n(i);a.a},e909:function(t,n,e){var i=e("f829");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("51815bec",i,!0,{sourceMap:!1,shadowMode:!1})},ee1a:function(t,n,e){"use strict";e.r(n);var i=e("aa85"),a=e("8ae6");for(var o in a)"default"!==o&&function(t){e.d(n,t,function(){return a[t]})}(o);e("b7f1");var s=e("2877"),c=Object(s["a"])(a["default"],i["a"],i["b"],!1,null,"38684b5a",null);n["default"]=c.exports},f829:function(t,n,e){n=t.exports=e("2350")(!1),n.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.pages[data-v-38684b5a]{background:#f1d35e;padding:%?40?% %?50?%;width:calc(100vw - %?100?%);height:calc(100vh - %?80?%)}.pages .contBody[data-v-38684b5a]{text-align:center;padding:%?30?% %?20?%;background:#fff;width:calc(100% - %?40?%);border-radius:%?15?%}.pages .contBody .title_box[data-v-38684b5a]{position:relative;overflow:auto;margin:0 auto;width:%?474?%;height:%?225?%}.pages .contBody .title_box uni-image[data-v-38684b5a]{width:100%;height:100%}.pages .contBody .title_box .title_prs[data-v-38684b5a]{position:absolute;top:0;width:100%;line-height:%?225?%;text-align:center}.pages .contBody .title_box .title_prs uni-text[data-v-38684b5a]:first-child{color:#f1d35e;padding-left:%?20?%;font-size:%?40?%}.pages .contBody .title_box .title_prs uni-text[data-v-38684b5a]:nth-child(2){color:#f1d35e;margin-left:%?20?%;font-weight:700;font-size:%?120?%}.pages .contBody .canUse[data-v-38684b5a]{margin:%?50?% 0 %?20?%;text-align:center}.pages .contBody .ewm_code[data-v-38684b5a]{height:%?248?%;display:inline-block;width:%?238?%}.pages .contBody .ewm_codeNum[data-v-38684b5a]{text-align:center;font-size:%?28?%;color:#333}.pages .contBody .Empty[data-v-38684b5a]{height:%?1?%;background:#ccc;width:100%}.pages .contBody .rule[data-v-38684b5a]{margin-top:%?30?%;font-size:%?24?%;color:#000;height:auto;overflow:hidden}.pages .contBody .rule uni-text[data-v-38684b5a]:first-child{width:%?150?%;display:inline-block;text-align:left;float:left}.pages .contBody .rule uni-text[data-v-38684b5a]:nth-child(2){float:left;width:calc(100% - %?150?%);display:inline-block;text-align:left;word-break:break-all}',""])}}]);