(function(t){function e(e){for(var a,i,s=e[0],c=e[1],u=e[2],l=0,m=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&m.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(m.length)m.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(a=!1)}a&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},o=[];function i(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"6d93ca5e","chunk-2d0e95df":"b2e8dca4"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise((function(e,a){n=r[t]=[e,a]}));e.push(n[2]=a);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(t);var u=new Error;o=function(e){c.onerror=c.onload=null,clearTimeout(l);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",u.name="ChunkLoadError",u.type=a,u.request=o,n[1](u)}r[t]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/vueExpenseTracker/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0276":function(t,e,n){"use strict";n("2a3b")},"0f40":function(t,e,n){"use strict";n("6146")},"2a3b":function(t,e,n){},"3ceb":function(t,e,n){},5488:function(t,e,n){"use strict";n("3ceb")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),n("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),n("router-view")],1)},o=[],i=(n("159b"),{data:function(){return{links:""}},mounted:function(){var t=this,e=document.querySelectorAll("a");e.forEach((function(e){e.addEventListener("click",(function(n){n.preventDefault(),history.pushState({},"",e.href),t.$root.$emit("router-go")}))}))}}),s=i,c=(n("5c0b"),n("2877")),u=Object(c["a"])(s,r,o,!1,null,null,null),l=u.exports,d=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("ListComponent")],1)},f=[],v={name:"Home",components:{}},h=v,p=Object(c["a"])(h,m,f,!1,null,null,null),b=p.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("br"),n("br"),n("ShowForm",{attrs:{isOn:t.show_Form},on:{showForm:t.showForm}}),n("PaymentForm",{directives:[{name:"show",rawName:"v-show",value:t.formVisible,expression:"formVisible"}]}),n("PaymentList")],1)},g=[],y=n("5530"),w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"table"},[t._m(0),n("hr"),t._l(t.getList,(function(e,a){return n("div",{key:a},[n("div",{staticClass:"table__row"},[n("div",{staticClass:"table__col"},[t._v(t._s(a+1))]),n("div",{staticClass:"table__col"},[t._v(t._s(e.date))]),n("div",{staticClass:"table__col"},[t._v(t._s(e.category))]),n("div",{staticClass:"table__col"},[t._v(t._s(e.value))]),n("div",{staticClass:"table__col"},[n("div",{staticClass:"table__points",on:{click:function(n){return t.$modal.show(e)}}},[t._v(" : ")]),n("transition",{attrs:{name:"fade"}},[e.id==t.activeID?n("ModalWindow",{attrs:{item:e}}):t._e()],1)],1)]),n("hr")])}))],2)])},O=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"table__row"},[n("div",{staticClass:"table__col table__col_dark"},[t._v("№")]),n("div",{staticClass:"table__col table__col_dark"},[t._v("Date")]),n("div",{staticClass:"table__col table__col_dark"},[t._v("Category")]),n("div",{staticClass:"table__col table__col_dark"},[t._v("Value")]),n("div",{staticClass:"table__col table__col_dark"})])}],j=(n("b0c0"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal-window"},[n("div",{staticClass:"modal-window__item modal-window__item_edit",on:{click:function(e){return e.preventDefault(),t.editHandler.apply(null,arguments)}}},[t._v("Edit")]),n("div",{staticClass:"modal-window__item modal-window__item_remove",on:{click:function(e){return e.preventDefault(),t.removeHandler.apply(null,arguments)}}},[t._v("Remove")])])}),C=[],I=n("2f62"),$={name:"ModalWindow",props:["item"],data:function(){return{data:""}},computed:Object(y["a"])(Object(y["a"])({},Object(I["e"])(["currentItem"])),Object(I["e"])("general",["formVisible"])),methods:Object(y["a"])(Object(y["a"])(Object(y["a"])(Object(y["a"])({},Object(I["b"])(["removeItem"])),Object(I["d"])(["setCurrentItem"])),Object(I["d"])("general",["setFormVisible"])),{},{editHandler:function(){this.setFormVisible(!0),"edit"!==this.$route.name&&this.$router.push({name:"edit",params:this.item}),"edit"===this.$route.name&&this.setCurrentItem(this.item),this.$modal.hide()},removeHandler:function(){this.removeItem(this.item),this.$modal.hide()}})},E=$,F=(n("0276"),Object(c["a"])(E,j,C,!1,null,null,null)),k=F.exports,L={name:"PaymentList",components:{ModalWindow:k},data:function(){return{M_Window:!0,M_Window_Settings:{},activeID:null}},mounted:function(){this.$modal.EventBus.$on("shown",this.onShown),this.$modal.EventBus.$on("hide",this.onHide)},methods:Object(y["a"])(Object(y["a"])(Object(y["a"])({},Object(I["b"])(["fetchData"])),Object(I["d"])(["setList"])),{},{onShown:function(t){this.activeID=t.name.id},onHide:function(){this.activeID=null}}),computed:Object(y["a"])(Object(y["a"])({},Object(I["c"])(["getList","getFullValue"])),{},{getList:function(){return this.$store.getters.getList}}),created:function(){this.$store.commit("setList",this.fetchData())}},D=L,x=(n("5488"),Object(c["a"])(D,w,O,!1,null,null,null)),P=x.exports,V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.currentItem.date,expression:"currentItem.date"}],staticClass:"form__input",attrs:{placeholder:"Дата",type:"text"},domProps:{value:t.currentItem.date},on:{input:function(e){e.target.composing||t.$set(t.currentItem,"date",e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.currentItem.category,expression:"currentItem.category"}],staticClass:"form__input",attrs:{placeholder:"Категория",type:"text"},domProps:{value:t.currentItem.category},on:{input:function(e){e.target.composing||t.$set(t.currentItem,"category",e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.currentItem.value,expression:"currentItem.value",modifiers:{number:!0}}],staticClass:"form__input",attrs:{placeholder:"Сумма",type:"text"},domProps:{value:t.currentItem.value},on:{input:function(e){e.target.composing||t.$set(t.currentItem,"value",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),t.isEdited?n("button",{staticClass:"form__btn",on:{click:t.editHandler}},[t._v("EDIT")]):n("button",{directives:[{name:"show",rawName:"v-show",value:t.isNotEmpty,expression:"isNotEmpty"}],staticClass:"form__btn",on:{click:t.addItem}},[t._v("ADD")])])},S=[],T=[{category:"food",params:{value:200}},{category:"transport",params:{value:50}},{category:"entertainment",params:{value:2e3}}],H={name:"PaymentForm",data:function(){return{category:{},value:null}},methods:Object(y["a"])(Object(y["a"])(Object(y["a"])({},Object(I["d"])(["setList","addDataToList"])),Object(I["d"])("general",["setFormVisible"])),{},{formatDate:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,e=t.getDate();e<10&&(e="0"+e);var n=t.getMonth()+1;n<10&&(n="0"+n);var a=t.getFullYear()%100;return a<10&&(a="0"+a),e+"."+n+".20"+a},addItem:function(){var t=this.currentItem,e=t.category,n=t.date,a=t.value,r={id:this.$store.state.list.length+1,date:n||this.formatDate(),category:e,value:a};this.$store.commit("addDataToList",r),this.currentItem.value="",this.currentItem.category="",this.currentItem.date="",this.setFormVisible(!1)},getCoincidence:function(){return!0},setParams:function(){var t;this.getCoincidence()?(this.date=this.formatDate(),this.category=this.$route.name,this.value=null===(t=this.$route.params)||void 0===t?void 0:t.value):(this.date=null,this.category=null,this.value=null)},editHandler:function(){this.setFormVisible(!1)}}),mounted:function(){if(this.setParams(),this.isEdited){var t=this.currentItem,e=t.date,n=t.category,a=t.value;this.date=e,this.value=a,this.category=n}},computed:Object(y["a"])(Object(y["a"])(Object(y["a"])({},Object(I["e"])(["list","currentItem"])),Object(I["c"])(["getCategoryList"])),{},{getCategory:function(){return this.$store.getters.getCategoryList},list:function(){return T},isNotEmpty:function(){return this.currentItem.value&&this.currentItem.category&&this.currentItem.date},isEdited:function(){return"edit"===this.$route.name}})},M=H,N=(n("0f40"),Object(c["a"])(M,V,S,!1,null,null,null)),A=N.exports,W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"show_btn form__btn",on:{click:t.changeHandler}},[t._v(" ADD NEW COST")])},B=[],q={name:"ShowForm",props:["isOn"],data:function(){return{}},computed:Object(y["a"])({},Object(I["e"])("general",["formVisible"])),methods:Object(y["a"])(Object(y["a"])({show:function(t){this.$emit("showForm",!t)}},Object(I["d"])("general",["setFormVisible"])),{},{changeHandler:function(){this.setFormVisible()}})},J=q,R=Object(c["a"])(J,W,B,!1,null,null,null),U=R.exports,Y={name:"List",components:{PaymentList:P,PaymentForm:A,ShowForm:U},data:function(){return{show_Form:!1}},computed:Object(y["a"])({},Object(I["e"])("general",["formVisible"])),methods:{showForm:function(t){this.show_Form=t}}},z=Y,G=(n("59bd"),Object(c["a"])(z,_,g,!1,null,null,null)),K=G.exports;a["a"].use(d["a"]);var Q=[{path:"/",name:"Home",component:b},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/edit",name:"edit",component:K},{path:"/404",name:"404",component:function(){return n.e("chunk-2d0e95df").then(n.bind(null,"8cdb"))}},{path:"*",redirect:"/404"}],X=new d["a"]({mode:"history",base:"/vueExpenseTracker/",routes:Q}),Z=X,tt=(n("4de4"),{state:{page:[],formVisible:!1},mutations:{setFormVisible:function(t,e){t.formVisible=void 0!==e?e:!t.formVisible}},namespaced:!0});a["a"].use(I["a"]);var et=new I["a"].Store({state:{list:[],currentItem:{}},mutations:{setList:function(t,e){t.list=e},addDataToList:function(t,e){t.list.push(e)},setCurrentItem:function(t,e){a["a"].set(t,"currentItem",e)}},getters:{getList:function(t){return t.list}},actions:{fetchData:function(t){var e=t.commit;setTimeout((function(){var t=[{id:1,date:"28.03.2020",category:"Food",value:169},{id:2,date:"24.03.2020",category:"Transport",value:360},{id:3,date:"24.03.2020",category:"Food",value:532},{id:4,date:"20.03.2020",category:"Food",value:169},{id:5,date:"19.03.2020",category:"Navigation",value:50},{id:6,date:"12.03.2020",category:"Sport",value:450}];e("setList",t)}))},removeItem:function(t,e){var n=t.commit,a=t.state,r=a.list.filter((function(t){return t.id!==e.id}));n("setList",r)}},modules:{namespaced:!0,general:tt}}),nt={install:function(t){if(this.installed)return!0}};a["a"].prototype.$modal={EventBus:new a["a"],show:function(t,e){this.EventBus.$emit("shown",Object(y["a"])({name:t},e))},hide:function(){this.EventBus.$emit("hide")}},a["a"].component("ListComponent",K),a["a"].use(nt),a["a"].config.productionTip=!1,new a["a"]({router:Z,store:et,render:function(t){return t(l)}}).$mount("#app")},"59bd":function(t,e,n){"use strict";n("6925")},"5c0b":function(t,e,n){"use strict";n("9c0c")},6146:function(t,e,n){},6925:function(t,e,n){},"9c0c":function(t,e,n){}});
//# sourceMappingURL=app.ac0a5899.js.map