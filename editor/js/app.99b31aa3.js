(function(t){function e(e){for(var n,o,i=e[0],l=e[1],c=e[2],d=0,f=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&f.push(s[o][0]),s[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(f.length)f.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,i=1;i<a.length;i++){var l=a[i];0!==s[l]&&(n=!1)}n&&(r.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},s={app:0},r=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/editor/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("85ec"),s=a.n(n);s.a},"0a07":function(t,e,a){},"48b1":function(t,e,a){"use strict";var n=a("0a07"),s=a.n(n);s.a},5339:function(t,e,a){"use strict";var n=a("c975d"),s=a.n(n);s.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("Navbar"),a("transition",{attrs:{name:"slide"}},[a("router-view")],1)],1)},r=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",["Home"==t.$route.name?a("v-app-bar",{staticClass:"appbar",attrs:{color:"#fff",blue:"",flat:""}},[a("router-link",{staticClass:"link",attrs:{to:"/"}},[a("v-toolbar-title",{staticClass:"title"},[t._v("Varnam Editor")])],1),a("v-spacer"),a("div",{staticClass:"lang"},[a("v-select",{attrs:{items:t.langs,value:"Malayalam",label:"Language",outlined:"",dense:""},model:{value:t.lang,callback:function(e){t.lang=e},expression:"lang"}})],1),a("router-link",{staticClass:"link",attrs:{to:"/settings"}},[a("v-btn",{staticClass:"settings",attrs:{depressed:"",color:"#4C5DF5"}},[a("v-icon",[t._v("mdi-cog")]),t._v(" Settings ")],1)],1)],1):a("v-app-bar",{staticClass:"appbar",attrs:{color:"#fff",blue:"",flat:""}},[a("router-link",{staticClass:"link",attrs:{to:"/"}},[a("v-toolbar-title",{staticClass:"title"},[t._v("Varnam Editor")])],1),a("v-spacer"),a("router-link",{staticClass:"link",attrs:{to:"/"}},[a("v-btn",{staticClass:"settings",attrs:{depressed:"",color:"#4C5DF5"}},[a("v-icon",[t._v("mdi-arrow-left")]),t._v(" Back ")],1)],1)],1),a("hr")],1)},i=[],l=(a("b64b"),{name:"Navbar",data:function(){return{langs:Object.keys(this.$LANGS)}},computed:{lang:{get:function(){return this.$store.state.lang},set:function(t){this.$store.commit("setLang",t)}}}}),c=l,u=(a("5339"),a("2877")),d=a("6544"),f=a.n(d),v=a("40dc"),g=a("8336"),p=a("132d"),h=a("b974"),m=a("2fa4"),C=a("2a7f"),b=Object(u["a"])(c,o,i,!1,null,"8794d412",null),y=b.exports;f()(b,{VAppBar:v["a"],VBtn:g["a"],VIcon:p["a"],VSelect:h["a"],VSpacer:m["a"],VToolbarTitle:C["a"]});var _={name:"App",components:{Navbar:y},data:function(){return{}}},k=_,w=(a("034f"),a("7496")),x=Object(u["a"])(k,s,r,!1,null,null,null),A=x.exports;f()(x,{VApp:w["a"]});var S=a("8c4f"),T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("v-container",{staticClass:"main"},[a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:9}},[a("Editor")],1),a("v-col",{attrs:{cols:3}},[a("Panel")],1)],1)],1)],1)},E=[],V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"textarea"},[a("v-textarea",{ref:"editor",attrs:{outlined:"",name:"translate",label:"Type your content",rows:"20",color:"#4C5DF5"},model:{value:t.inputText,callback:function(e){t.inputText=e},expression:"inputText"}})],1)},O=[],P=(a("99af"),a("c975"),a("baa5"),a("d3b7"),1),$=!0,R={UNKNOWN:0,SHIFT:16,CTRL:17,ALT:18,LEFT:37,UP:38,RIGHT:39,DOWN:40,DEL:46,TAB:9,RETURN:13,ESC:27,COMMA:188,PAGEUP:33,PAGEDOWN:34,BACKSPACE:8,SPACE:32},N={name:"Editor",data:function(){return{cachedSuggestions:[],inputText:""}},computed:{lang:function(){return this.$store.state.lang},suggestions:function(){return this.$store.state.suggestions}},methods:{init:function(){var t=this,e=this.$refs.editor.$el.getElementsByTagName("textarea")[0];e.addEventListener("keyup",(function(a){var n=a.altKey||a.metaKey||a.ctrlKey,s=n||a.shiftKey;switch(a.keyCode){case R.UNKNOWN:case R.SHIFT:case R.CTRL:case R.ALT:case R.RETURN:break;case R.TAB:if(!s&&$)break;case R.ESC:case R.UP:case R.DOWN:case R.LEFT:case R.RIGHT:break;default:if(a.keyCode>=48&&a.keyCode<=57||a.keyCode>=96&&a.keyCode<=105)break;if(!n){var r=t.getChunk(e);r.length>=P&&(t.showCachedSuggestions(t.getChunk(e))||t.transliterate(t.getChunk(e)))}break}})),e.addEventListener("keydown",(function(a){var n=a.altKey||a.metaKey||a.ctrlKey||a.shiftKey;if(!n){if(a.keyCode>=48&&a.keyCode<=57){var s=a.keyCode-48;a.preventDefault(),"undefined"!==typeof t.suggestions[s]&&t.replaceWord(e,t.suggestions[s])}a.keyCode==R.SPACE&&"undefined"!==typeof t.suggestions[1]&&t.replaceWord(e,t.suggestions[1]),localStorage["varnam-input"]=e.value}}))},getChunk:function(t){var e=this.inputText,a=this.getCurrentWordPos(t),n=a[0],s=a[1];return e.substr(n,s-n)},replaceWord:function(t,e){var a=this.inputText,n=this.getCurrentWordPos(t),s=n[0],r=n[1];this.inputText=a.substring(0,s)+e+a.substring(r,a.length),this.setCursorPosition(t,s+e.length),this.$store.commit("clearSuggestions")},setCursorPosition:function(t,e){if(t.setSelectionRange)t.setSelectionRange(e,e);else if(t.createTextRange){var a=t.createTextRange();a.collapse(!0),a.moveEnd("character",e),a.moveStart("character",e),a.select()}},showCachedSuggestions:function(t){return"undefined"!==typeof this.cachedSuggestions[t]&&(this.$store.commit("setSuggestions",this.cachedSuggestions[t]),!0)},getCurrentWordPos:function(t){var e,a,n,s=[" ","\n","\r","\t"],r=this.inputText,o=t.selectionEnd,i=r.substr(0,o),l=-1;for(e=0;e<s.length;e++)a=s[e],n=i.lastIndexOf(a),n>l&&(l=n);while(o<r.length){if(-1!=s.indexOf(r[o]))break;++o}return l<0?[0,o]:[l+1,o]},transliterate:function(t){var e=this;fetch(this.$VARNAM_API_URL+"/tl/".concat(this.lang,"/").concat(t)).then((function(t){return t.json()})).then((function(t){return e.$store.commit("setSuggestions",t)}))}},mounted:function(){this.init()}},j=N,W=a("a844"),F=Object(u["a"])(j,V,O,!1,null,null,null),L=F.exports;f()(F,{VTextarea:W["a"]});var D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"panel"},[a("v-container",[a("div",{staticClass:"suggestions"},[a("p",{staticClass:"title"},[t._v("Word Suggestions")]),t._l(t.$store.state.suggestions,(function(e,n){return[a("v-row",{key:e.key,attrs:{align:"start",justify:"center"}},[a("v-card",{staticClass:"card",attrs:{outlined:""}},[a("v-btn",{staticClass:"sug-id",attrs:{depressed:"",color:"#4C5DF5"}},[t._v(t._s(n))]),a("span",{staticClass:"sug-word"},[t._v(t._s(e))])],1)],1)]})),a("div",{staticClass:"add-word"},[a("v-btn",{staticClass:"sug-add",attrs:{depressed:"",color:"#4C5DF5"}},[t._v("Add Word")])],1)],2)])],1)},K=[],M={name:"Panel"},I=M,U=(a("f916"),a("b0af")),B=a("a523"),H=a("0fd9"),G=Object(u["a"])(I,D,K,!1,null,"cdd14e26",null),J=G.exports;f()(G,{VBtn:g["a"],VCard:U["a"],VContainer:B["a"],VRow:H["a"]});var q={name:"Home",components:{Editor:L,Panel:J}},z=q,Q=(a("aa9e"),a("62ad")),X=Object(u["a"])(z,T,E,!1,null,"7c24330c",null),Y=X.exports;f()(X,{VCol:Q["a"],VContainer:B["a"],VRow:H["a"]});var Z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"settings"},[a("AddWords"),a("Navbar")],1)},tt=[],et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main"},[a("AddWordsForm"),a("v-container",{staticClass:"wordsection"},[a("div",t._l(t.wordlist,(function(e){return a("v-row",{key:e.key,staticClass:"word",attrs:{"no-gutters":""}},[a("v-col",[a("span",{staticClass:"english"},[t._v(t._s(e.english))])]),a("v-col",[a("span",{staticClass:"regional"},[t._v(t._s(e.regional))])]),a("v-col",[a("span",{staticClass:"votes"},[a("v-btn",{staticClass:"vote",attrs:{depressed:"",color:"#4C5DF5"}},[a("v-icon",[t._v("mdi-arrow-up-box")]),t._v(" "+t._s(e.votes)+" ")],1)],1)])],1)})),1)])],1)},at=[],nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"addwords"},[a("v-form",[a("v-row",[a("v-col",{attrs:{cols:5}},[a("v-text-field",{attrs:{label:"English Word",outlined:"",color:"#4C5DF5"}})],1),a("v-col",{attrs:{cols:5}},[a("v-text-field",{attrs:{label:"The word in your language",outlined:"",color:"#4C5DF5"}})],1),a("v-col",{attrs:{cols:2}},[a("div",{staticClass:"add-word"},[a("v-btn",{staticClass:"sug-add",attrs:{depressed:"",color:"#4C5DF5"}},[t._v("Add Word")])],1)])],1)],1)],1)},st=[],rt={name:"AddWordsForm"},ot=rt,it=(a("48b1"),a("4bd4")),lt=a("8654"),ct=Object(u["a"])(ot,nt,st,!1,null,"e9d19a60",null),ut=ct.exports;f()(ct,{VBtn:g["a"],VCol:Q["a"],VForm:it["a"],VRow:H["a"],VTextField:lt["a"]});var dt={name:"AddWords",components:{AddWordsForm:ut},data:function(){return{wordlist:[{key:1,english:"Firefox",regional:"ഫയർഫോക്സ് ",votes:50},{key:2,english:"Chrome",regional:"ക്രോം",votes:40},{key:3,english:"English",regional:"ഇംഗ്ലീഷ്",votes:100}]}}},ft=dt,vt=(a("a6aa"),Object(u["a"])(ft,et,at,!1,null,"cfacc364",null)),gt=vt.exports;f()(vt,{VBtn:g["a"],VCol:Q["a"],VContainer:B["a"],VIcon:p["a"],VRow:H["a"]});var pt={name:"Settings",components:{AddWords:gt}},ht=pt,mt=Object(u["a"])(ht,Z,tt,!1,null,null,null),Ct=mt.exports;n["a"].use(S["a"]);var bt=[{path:"/",name:"Home",component:Y},{path:"/settings",name:"Settings",component:Ct}],yt=new S["a"]({routes:bt}),_t=yt,kt=a("2909"),wt=a("2f62");n["a"].use(wt["a"]);var xt=new wt["a"].Store({state:{lang:"ml",suggestions:[]},mutations:{setSuggestions:function(t,e){t.suggestions=[e.input].concat(Object(kt["a"])(e.result))},clearSuggestions:function(t){t.suggestions=[]},setLang:function(t,e){t.lang=e}},actions:{},modules:{}}),At=a("f309");n["a"].use(At["a"]);var St=new At["a"]({});n["a"].config.productionTip=!1,window.$VARNAM_API_URL="https://api.varnamproject.com",n["a"].prototype.$VARNAM_API_URL=window.$VARNAM_API_URL,n["a"].prototype.$LANGS={ml:"Malayalam",hi:"Hindi",kn:"Kannada"},new n["a"]({router:_t,store:xt,vuetify:St,render:function(t){return t(A)}}).$mount("#app")},7129:function(t,e,a){},"85ec":function(t,e,a){},a6aa:function(t,e,a){"use strict";var n=a("7129"),s=a.n(n);s.a},aa9e:function(t,e,a){"use strict";var n=a("ede9"),s=a.n(n);s.a},c975d:function(t,e,a){},d07a:function(t,e,a){},ede9:function(t,e,a){},f916:function(t,e,a){"use strict";var n=a("d07a"),s=a.n(n);s.a}});
//# sourceMappingURL=app.99b31aa3.js.map