(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-54730df7"],{"082c":function(t,e,n){},"20ce":function(t,e,n){"use strict";var l=n("082c"),i=n.n(l);i.a},"53ca":function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));n("a4d3"),n("e01a"),n("d28b"),n("d3b7"),n("3ca3"),n("ddb0");function l(t){return l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}},"8db2":function(t,e){t.exports={props:{id:{type:String,required:!0},name:{type:String,required:!0},value:{type:null,default:null},type:{type:String,required:!0},length:{type:[String,Number],default:null},readonly:{type:Boolean,default:!1},collection:{type:String,default:null},primaryKey:{type:[Number,String],default:null},required:{type:Boolean,default:!1},options:{type:Object,default:()=>({})},newItem:{type:Boolean,default:!1},relation:{type:Object,default:null},fields:{type:Object,default:null},values:{type:Object,default:null},width:{type:String,default:null,validator(t){return["half","half-left","half-right","full","fill"].includes(t)}}}}},ddc0:function(t,e,n){"use strict";n.r(e);var l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-icon",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.tooltipCopy,expression:"tooltipCopy"}],class:{empty:t.empty},attrs:{name:"code"}})},i=[],o=(n("ac1f"),n("1276"),n("53ca")),u=n("8db2"),a=n.n(u),r={name:"ReadonlyCode",mixins:[a.a],computed:{lineCount:function(){if(!this.value)return 0;var t=this.value;return"object"===Object(o["a"])(this.value)&&(t=JSON.stringify(this.value)),t.split(/\r\n|\r|\n/).length},availableTypes:function(){return{"text/javascript":"JavaScript","application/json":"JSON","text/x-vue":"Vue","application/x-httpd-php":"PHP"}},language:function(){return this.availableTypes[this.options.language]},tooltipCopy:function(){return this.$tc("interfaces.code.loc",this.lineCount,{count:this.lineCount,lang:this.language})},empty:function(){return 0===this.lineCount}}},c=r,p=(n("20ce"),n("2877")),f=Object(p["a"])(c,l,i,!1,null,"461a4e8e",null);e["default"]=f.exports}}]);
//# sourceMappingURL=chunk-54730df7.54a96b83.js.map