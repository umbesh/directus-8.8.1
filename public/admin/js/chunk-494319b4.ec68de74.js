(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-494319b4"],{"22c1":function(e,t,n){},5339:function(e,t,n){"use strict";var l=n("22c1"),u=n.n(l);u.a},"53ca":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));n("a4d3"),n("e01a"),n("d28b"),n("d3b7"),n("3ca3"),n("ddb0");function l(e){return l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}},"8db2":function(e,t){e.exports={props:{id:{type:String,required:!0},name:{type:String,required:!0},value:{type:null,default:null},type:{type:String,required:!0},length:{type:[String,Number],default:null},readonly:{type:Boolean,default:!1},collection:{type:String,default:null},primaryKey:{type:[Number,String],default:null},required:{type:Boolean,default:!1},options:{type:Object,default:()=>({})},newItem:{type:Boolean,default:!1},relation:{type:Object,default:null},fields:{type:Object,default:null},values:{type:Object,default:null},width:{type:String,default:null,validator(e){return["half","half-left","half-right","full","fill"].includes(e)}}}}},"900d":function(e,t,n){"use strict";n.r(t);var l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-select",{attrs:{id:e.name,value:e.userID,disabled:e.readonly,options:e.choices,placeholder:e.options.placeholder},on:{input:function(t){return e.$emit("input",t)}}})},u=[],r=(n("4160"),n("b64b"),n("159b"),n("53ca")),o=n("8db2"),i=n.n(o),a={mixins:[i.a],computed:{userID:function(){return this.value?"object"===Object(r["a"])(this.value)?this.value.id:this.value:null},choices:function(){var e=this,t=this.$store.state.users||{},n={};return Object.keys(t).forEach((function(l){n[l]=e.$helpers.micromustache.render(e.options.template,t[l])})),n}}},c=a,s=(n("5339"),n("2877")),p=Object(s["a"])(c,l,u,!1,null,"3e30bcbb",null);t["default"]=p.exports}}]);
//# sourceMappingURL=chunk-494319b4.ec68de74.js.map