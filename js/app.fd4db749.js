(function(t){function e(e){for(var s,o,n=e[0],c=e[1],l=e[2],d=0,v=[];d<n.length;d++)o=n[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&v.push(i[o][0]),i[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(v.length)v.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,n=1;n<a.length;n++){var c=a[n];0!==i[c]&&(s=!1)}s&&(r.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},i={app:0},r=[];function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/headshot-barbershop/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],c=n.push.bind(n);n.push=e,n=n.slice();for(var l=0;l<n.length;l++)e(n[l]);var u=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0247":function(t,e,a){"use strict";a("81b3")},"16d7":function(t,e,a){t.exports=a.p+"img/7.8b5e3026.jpg"},"1ddb":function(t,e,a){t.exports=a.p+"img/3-s.ffbc3ab9.png"},"1f80":function(t,e,a){t.exports=a.p+"img/1.c6470c5d.jpg"},"26e5":function(t,e,a){t.exports=a.p+"img/6.058f4279.jpg"},"277a":function(t,e,a){t.exports=a.p+"img/borderWaves.b5381f92.svg"},"39ca":function(t,e,a){"use strict";a("7542")},4195:function(t,e,a){t.exports=a.p+"img/8.2633ddbe.jpg"},"47f4":function(t,e,a){},"51c0":function(t,e,a){t.exports=a.p+"img/bgHero.20ed3843.jpg"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("Navigation",{attrs:{color:t.color,flat:t.flat}}),a("v-main",{staticClass:"pt-0"},[a("HomeSection"),a("WorkSection"),a("Services"),a("CoWorkers"),a("Maps")],1),a("Footer"),a("v-scale-transition",[a("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.fab,expression:"fab"},{name:"scroll",rawName:"v-scroll",value:t.onScroll,expression:"onScroll"}],attrs:{fab:"",dark:"",fixed:"",bottom:"",right:"",color:"secondary"},on:{click:t.toTop}},[a("v-icon",[t._v("mdi-arrow-up")])],1)],1)],1)},r=[],o=(a("0481"),a("4069"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-navigation-drawer",{attrs:{app:"",temporary:"",dark:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",[a("v-list-item",[a("v-list-item-content",{staticClass:"logotext-mobile"},[a("v-list-item-title",{staticClass:"maintext-mobile text-h6"},[t._v(" Headshot ")]),a("v-list-item-subtitle",{staticClass:"subtext-mobile"},[t._v(" barbershop ")])],1)],1)],1),a("v-divider"),a("v-list",{attrs:{dense:""}},t._l(t.items,(function(e,s){var i=e[0],r=e[1],o=e[2];return a("v-list-item",{key:s,attrs:{link:""},on:{click:function(e){return t.$vuetify.goTo(o)}}},[a("v-list-item-icon",{staticClass:"justify-center"},[a("v-icon",[t._v(t._s(i))])],1),a("v-list-item-content",[a("v-list-item-title",{staticClass:"subtitile-1"},[t._v(" "+t._s(r)+" ")])],1)],1)})),1)],1),a("v-app-bar",{staticClass:"px-10",class:{expand:t.flat},attrs:{app:"",color:t.color,flat:t.flat,dark:""}},[a("v-toolbar-title",{staticClass:"overline"},[a("h2",{staticClass:"main-text"},[t._v("headshot")]),a("h3",{staticClass:"submain-text"},[t._v("barbershop.")])]),a("v-spacer"),t.isXs?a("v-app-bar-nav-icon",{staticClass:"mr-4",on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}):a("div",[a("v-btn",{attrs:{text:""},on:{click:function(e){return t.$vuetify.goTo("#home")}}},[a("span",{staticClass:"mr-2"},[t._v("Главная")])]),a("v-btn",{attrs:{text:""},on:{click:function(e){return t.$vuetify.goTo("#about")}}},[a("span",{staticClass:"mr-2"},[t._v("О нас")])]),a("v-btn",{attrs:{text:""},on:{click:function(e){return t.$vuetify.goTo("#work")}}},[a("span",{staticClass:"mr-2"},[t._v("Работы")])]),a("v-btn",{attrs:{text:""},on:{click:function(e){return t.$vuetify.goTo("#services")}}},[a("span",{staticClass:"mr-2"},[t._v("Услуги")])]),a("v-btn",{attrs:{text:""},on:{click:function(e){return t.$vuetify.goTo("#coworkers")}}},[a("span",{staticClass:"mr-2"},[t._v("Специалисты")])])],1)],1)],1)}),n=[],c={data:function(){return{drawer:null,isXs:!1,items:[["mdi-circle-outline","Главная","#home"],["mdi-circle-slice-1","О нас","#about"],["mdi-circle-slice-2","Работы","#work"],["mdi-circle-slice-3","Услуги","#services"],["mdi-circle-slice-4","Специалисты","#coworkers"]]}},props:{color:String,flat:Boolean},methods:{onResize:function(){this.isXs=window.innerWidth<850}},watch:{isXs:function(t){t||this.drawer&&(this.drawer=!1)}},mounted:function(){this.onResize(),window.addEventListener("resize",this.onResize,{passive:!0})}},l=c,u=(a("a195"),a("2877")),d=a("6544"),v=a.n(d),p=a("40dc"),f=a("5bc1"),m=a("8336"),g=a("ce7e"),x=a("132d"),h=a("8860"),b=a("da13"),C=a("5d23"),w=a("34c3"),_=a("f774"),y=a("2fa4"),V=a("2a7f"),k=Object(u["a"])(l,o,n,!1,null,"350c15ec",null),j=k.exports;v()(k,{VAppBar:p["a"],VAppBarNavIcon:f["a"],VBtn:m["a"],VDivider:g["a"],VIcon:x["a"],VList:h["a"],VListItem:b["a"],VListItemContent:C["a"],VListItemIcon:w["a"],VListItemSubtitle:C["b"],VListItemTitle:C["c"],VNavigationDrawer:_["a"],VSpacer:y["a"],VToolbarTitle:V["a"]});var L=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{attrs:{id:"home"}},[s("v-parallax",{attrs:{dark:"",src:a("51c0"),height:"750"}},[s("v-row",{attrs:{align:"center",justify:"center"}},[s("v-col",{attrs:{cols:"10"}},[s("v-row",{attrs:{align:"center",justify:"center"}},[s("v-col",{attrs:{cols:"12",md:"6",xl:"8"}},[s("h1",{staticClass:"display-2 font-weight-bold mb-4"},[t._v("МЫ")]),s("h3",{staticClass:"font-weight-regular"},[t._v(" традиционный барбершоп без лишнего пафоса "),s("br"),t._v(" а с домашней и уютной атмосферой ")])]),s("v-col",{staticClass:"hidden-sm-and-down",attrs:{cols:"12",md:"6",xl:"4"}})],1)],1)],1),s("div",{staticClass:"svg-border-waves text-white"},[s("v-img",{attrs:{src:a("277a")}})],1)],1),s("v-container",{staticClass:"mt-2",attrs:{fluid:"",id:"about"}},[s("v-row",{attrs:{align:"center",justify:"center"}},[s("v-col",{attrs:{cols:"10"}},[s("v-row",{attrs:{align:"center",justify:"space-around"}},[s("v-col",{staticClass:"text-center pa-15",attrs:{cols:"12",md:"6",lg:"6",xs:"6"}},[s("v-img",{staticClass:"d-block ml-auto mr-auto",attrs:{src:a("a105"),"max-width":"160px"}}),s("p",{staticClass:"font-weight-regular pt-10"},[t._v(" Опытные мастера, упор на качество услуг, профессиональный подход, комфортная обстановка "),s("br"),t._v(" и развитый сервис - лишь часть преимуществ мужского пространства. ")])],1)],1)],1)],1)],1)],1)},S=[],O={data:function(){return{dialog:!1}}},T=O,N=(a("cb9f"),a("d115"),a("e1da"),a("62ad")),$=a("a523"),B=a("adda"),I=a("8b9c"),Y=a("0fd9"),P=Object(u["a"])(T,L,S,!1,null,null,null),R=P.exports;v()(P,{VCol:N["a"],VContainer:$["a"],VImg:B["a"],VParallax:I["a"],VRow:Y["a"]});var z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{attrs:{id:"work"}},[a("v-container",{staticClass:"mt-2 pa-10"},[a("h1",{staticClass:"pretty-header right-line-header"},[t._v("РАБОТЫ")]),a("v-row",{attrs:{align:"center",justify:"center"}},t._l(t.items,(function(e,s){return a("v-col",{key:s,staticClass:"d-flex child-flex",attrs:{cols:"12",md:"4"}},[a("v-img",{staticClass:"grey lighten-2",attrs:{src:e.img,"lazy-src":e.img,"aspect-ratio":"1"},scopedSlots:t._u([{key:"placeholder",fn:function(){return[a("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[a("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}],null,!0)})],1)})),1)],1)],1)},E=[],A={data:function(){return{items:[{id:1,title:"#1",img:a("1f80"),text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"},{id:2,title:"2",img:a("6f6a"),text:"Lorem ipsum dolor."},{id:3,title:"3",img:a("d863"),text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.."},{id:4,title:"4",img:a("8b71"),text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.."},{id:5,title:"5",img:a("d6e6"),text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.."},{id:6,title:"6",img:a("26e5"),text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.."},{id:7,title:"7",img:a("16d7"),text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.."},{id:8,title:"7",img:a("4195"),text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.."},{id:9,title:"7",img:a("4195"),text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.."}]}},mounted:function(){},methods:{}},M=A,W=(a("39ca"),a("490a")),H=Object(u["a"])(M,z,E,!1,null,null,null),Q=H.exports;v()(H,{VCol:N["a"],VContainer:$["a"],VImg:B["a"],VProgressCircular:W["a"],VRow:Y["a"]});var D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{attrs:{id:"services"}},[a("div",{staticClass:"bg"},[a("v-container",{staticClass:"mt-2 pa-10"},[a("h1",{staticClass:"pretty-header-services right-line-header-parallax"},[t._v("услуги")]),a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12",md:"6",lg:"4",xl:"4"}},[a("v-card",{staticClass:"mx-auto red--text",attrs:{outlined:"",color:"transparent"}},[a("v-card-text",{staticClass:"text-center white--text"},[a("p",{staticClass:"text-h3"},[t._v(" 30"),a("small",{staticClass:"caption"},[t._v("BYN")])]),a("p",{staticClass:"font-weight-regular"},[t._v(" стрижка бороды "),a("br"),t._v(" и усов ")])])],1)],1),a("v-col",{attrs:{cols:"12",md:"6",lg:"4",xl:"4","offset-sm":"0","offset-lg":"4"}},[a("v-card",{staticClass:"mx-auto red--text",attrs:{outlined:"",color:"transparent"}},[a("v-card-text",{staticClass:"text-center white--text"},[a("p",{staticClass:"text-h3"},[t._v(" 40"),a("small",{staticClass:"caption"},[t._v("BYN")])]),a("p",{staticClass:"font-weight-regular"},[t._v(" стрижка ")])])],1)],1)],1),a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12",md:"6",lg:"4",xl:"4"}},[a("v-card",{staticClass:"mx-auto red--text",attrs:{outlined:"",color:"transparent"}},[a("v-card-text",{staticClass:"text-center white--text"},[a("p",{staticClass:"text-h3"},[t._v(" 30"),a("small",{staticClass:"caption"},[t._v("BYN")])]),a("p",{staticClass:"font-weight-regular"},[t._v(" бритьё головы ")])])],1)],1),a("v-col",{attrs:{cols:"12",md:"6",lg:"4",xl:"4","offset-sm":"0","offset-lg":"4"}},[a("v-card",{staticClass:"mx-auto red--text",attrs:{outlined:"",color:"transparent"}},[a("v-card-text",{staticClass:"text-center white--text"},[a("p",{staticClass:"text-h3"},[t._v(" 60"),a("small",{staticClass:"caption"},[t._v("BYN")])]),a("p",{staticClass:"font-weight-regular"},[t._v(" комплекс "),a("br"),t._v(" (стрижка + борода) ")])])],1)],1)],1),a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12",md:"6",lg:"4",xl:"4"}},[a("v-card",{staticClass:"mx-auto red--text",attrs:{outlined:"",color:"transparent"}},[a("v-card-text",{staticClass:"text-center white--text"},[a("p",{staticClass:"text-h3"},[t._v(" 30"),a("small",{staticClass:"caption"},[t._v("BYN")])]),a("p",{staticClass:"font-weight-regular"},[t._v(" стрижка машинкой ")])])],1)],1),a("v-col",{attrs:{cols:"12",md:"6",lg:"4",xl:"4"}},[a("v-card",{staticClass:"mx-auto red--text",attrs:{outlined:"",color:"transparent"}},[a("v-card-text",{staticClass:"text-center white--text"},[a("p",{staticClass:"text-h3"},[t._v(" 30"),a("small",{staticClass:"caption"},[t._v("BYN")])]),a("p",{staticClass:"font-weight-regular"},[t._v(" детская стрижка (от 5 до 12 лет) ")])])],1)],1),a("v-col",{attrs:{cols:"12",md:"6",lg:"4",xl:"4"}},[a("v-card",{staticClass:"mx-auto red--text",attrs:{outlined:"",color:"transparent"}},[a("v-card-text",{staticClass:"text-center white--text"},[a("p",{staticClass:"text-h3"},[t._v(" 65"),a("small",{staticClass:"caption"},[t._v("BYN")])]),a("p",{staticClass:"font-weight-regular"},[t._v(" стрижка отец и сын ")])])],1)],1)],1)],1)],1)])},F=[],X=(a("cb18"),a("b0af")),J=a("99d9"),G={},q=Object(u["a"])(G,D,F,!1,null,"4d8328f0",null),K=q.exports;v()(q,{VCard:X["a"],VCardText:J["a"],VCol:N["a"],VContainer:$["a"],VRow:Y["a"]});var U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{attrs:{id:"coworkers"}},[a("v-container",{staticClass:"mt-2 pa-10",attrs:{id:"features"}},[a("h1",{staticClass:"pretty-header right-line-header"},[t._v("специалисты")]),a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"12",md:"12",lg:"12",xl:"12"}},[a("v-card",{staticClass:"pa-5",attrs:{elevation:"0",color:"grey lighten-5",tile:""}},[a("v-row",[a("v-col",{attrs:{cols:"12",md:"6",lg:"6",xl:"6"}},[a("v-card",{staticClass:"pa-5",attrs:{elevation:"0",color:"transparent",tile:""}},[a("h2",{staticClass:"overline font-weight-bold"},[t._v("Команда")]),a("p",[t._v("«HeadShot Barbershop (ХедШот)» собрал вокруг себя талантливых мастеров с серьезным опытом, профессиональными навыками и современными техниками. Каждый из них уделяет особое внимание личным запросам своих клиентов и стремиться создать тот образ, который подчеркнет собственный стиль и индивидуальность. ")])])],1),a("v-divider",{attrs:{inset:"",vertical:""}}),a("v-col",{attrs:{cols:"12",md:"6",lg:"6",xl:"6"}},[a("v-card",{staticClass:"pa-5",attrs:{elevation:"0",color:"transparent",tile:""}},[a("h2",{staticClass:"overline font-weight-bold"},[t._v("Преимущества")]),a("ul",[a("li",[t._v("Комфортная и уютная атмосфера")]),a("li",[t._v("Комфортная и уютная атмосфера")]),a("li",[t._v("Опытные специалисты, любящие свое дело")]),a("li",[t._v("Профессиональные услуги по доступным ценам")]),a("li",[t._v("Индивидуальный и внимательный подход к каждому")]),a("li",[t._v("Wi-Fi, ароматный чай/кофе, журналы и пресса")])])])],1)],1),a("v-divider"),a("v-row",{attrs:{align:"center",justify:"space-around"}},t._l(t.features,(function(e,s){return a("v-col",{key:s,attrs:{cols:"12",md:"4",lg:"4",xl:"4"}},[a("v-card",{staticClass:"text-center pa-15",attrs:{elevation:"0",color:"grey lighten-5",tile:""}},[a("v-img",{staticClass:"d-block ml-auto mr-auto",attrs:{"max-width":"190px",src:e.img,alt:e.title}}),a("h3",{staticClass:"overline"},[t._v(t._s(e.title))]),t._v(" - ")],1)],1)})),1)],1)],1)],1)],1)],1)},Z=[],tt={data:function(){return{dialog:!1,features:[{img:a("64fd"),title:"Алексей",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit."},{img:a("6b58"),title:"Роман",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit."},{img:a("1ddb"),title:"Александр",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit."}]}},methods:{}},et=tt,at=(a("a34f"),Object(u["a"])(et,U,Z,!1,null,null,null)),st=at.exports;v()(at,{VCard:X["a"],VCol:N["a"],VContainer:$["a"],VDivider:g["a"],VImg:B["a"],VRow:Y["a"]});var it=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-container",{staticClass:"mt-2",attrs:{fluid:"",id:"maps"}},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"10"}},[a("v-row",{attrs:{align:"center",justify:"space-around"}},[a("v-col",{staticClass:"text-center pa-15",attrs:{cols:"12",md:"6",lg:"6",xs:"6"}},[a("v-icon",{attrs:{color:"black","x-large":""}},[t._v("mdi-map-marker")]),a("p",{staticClass:"font-weight-regular pt-10"},[t._v(" Барбершоп находится в шаговой доступности от станции метро «Площадь Победы» и работает без выходных, что позволяет с комфортом спланировать свою запись. ")])],1)],1)],1)],1)],1),a("iframe",{staticStyle:{border:"0"},attrs:{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2350.04031318252!2d27.565724015957535!3d53.913259539796286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcf97b8a97cb9%3A0xfbd1799a6ec29d90!2z0YPQuy4g0JrQuNGB0LXQu9GR0LLQsCAxNiwg0JzQuNC90YHQug!5e0!3m2!1sru!2sby!4v1645347166071!5m2!1sru!2sby",width:"100%",height:"450",allowfullscreen:"",loading:"lazy"}}),a("v-container",[a("v-row",{attrs:{justify:"space-around"}},[a("v-col",{staticClass:"text-center",attrs:{cols:"12",md:"6",lg:"4",xl:"4"}},[a("v-icon",{attrs:{color:"black"}},[t._v("mdi-clock-time-five-outline")]),a("p",[t._v("до 22:00")])],1),a("v-col",{staticClass:"text-center",attrs:{cols:"12",md:"6",lg:"4",xl:"4"}},[a("v-icon",{attrs:{color:"black"}},[t._v("mdi-map-marker-check-outline")]),a("p",[t._v("Минск, ул. Киселёва, 16")])],1),a("v-col",{staticClass:"text-center",attrs:{cols:"12",md:"6",lg:"4",xl:"4"}},[a("v-icon",{attrs:{color:"black"}},[t._v("mdi-cellphone")]),a("p",[t._v("+375(29)700-13-71")])],1)],1),a("v-divider")],1)],1)},rt=[],ot={},nt=Object(u["a"])(ot,it,rt,!1,null,null,null),ct=nt.exports;v()(nt,{VCol:N["a"],VContainer:$["a"],VDivider:g["a"],VIcon:x["a"],VRow:Y["a"]});var lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-container",[a("v-row",{attrs:{justify:"space-around"}},[a("v-col",{staticClass:"text-center pa-15",attrs:{cols:"12"}},[a("v-avatar",{attrs:{color:"black",size:"17"}}),a("div",{staticClass:"footer-logo overline"},[a("h2",{staticClass:"main-text font-weight-black"},[t._v("headshot")]),a("h2",{staticClass:"submain-text font-weight-black"},[t._v("barbershop")]),a("p",[t._v("© "+t._s((new Date).getFullYear())+" | УНП: 193581628")])])],1)],1)],1),a("v-footer",{attrs:{dark:""}})],1)},ut=[],dt={data:function(){return{icons:["mdi-instagram"]}}},vt=dt,pt=(a("85e6"),a("8212")),ft=a("553a"),mt=Object(u["a"])(vt,lt,ut,!1,null,"16568a45",null),gt=mt.exports;v()(mt,{VAvatar:pt["a"],VCol:N["a"],VContainer:$["a"],VFooter:ft["a"],VRow:Y["a"]});var xt={name:"App",components:{Navigation:j,HomeSection:R,WorkSection:Q,Services:K,CoWorkers:st,Maps:ct,Footer:gt},data:function(){return{fab:null,color:"",flat:null}},created:function(){var t=window.pageYOffset||0;t<=60&&(this.color="transparent",this.flat=!0)},watch:{fab:function(t){t?(this.color="secondary",this.flat=!1):(this.color="transparent",this.flat=!0)}},methods:{onScroll:function(t){if("undefined"!==typeof window){var e=window.pageYOffset||t.target.scrollTop||0;this.fab=e>60}},toTop:function(){this.$vuetify.goTo(0)}}},ht=xt,bt=(a("0247"),a("7496")),Ct=a("f6c4"),wt=a("0789"),_t=a("269a"),yt=a.n(_t),Vt=a("f977"),kt=Object(u["a"])(ht,i,r,!1,null,"abab1be8",null),jt=kt.exports;v()(kt,{VApp:bt["a"],VBtn:m["a"],VIcon:x["a"],VMain:Ct["a"],VScaleTransition:wt["c"]}),yt()(kt,{Scroll:Vt["b"]});var Lt=a("f309");s["a"].use(Lt["a"]);var St=new Lt["a"]({});s["a"].config.productionTip=!1,new s["a"]({vuetify:St,render:function(t){return t(jt)}}).$mount("#app")},"64fd":function(t,e,a){t.exports=a.p+"img/1-l.91a9a7f4.png"},"6b58":function(t,e,a){t.exports=a.p+"img/2-r.eb230a24.png"},"6f6a":function(t,e,a){t.exports=a.p+"img/2.d4e6ee9e.jpg"},"705d":function(t,e,a){},7542:function(t,e,a){},"81b3":function(t,e,a){},"85e6":function(t,e,a){"use strict";a("b77a")},8895:function(t,e,a){},"8b71":function(t,e,a){t.exports=a.p+"img/4.f57039eb.jpg"},a105:function(t,e,a){t.exports=a.p+"img/brand.13ca5358.png"},a195:function(t,e,a){"use strict";a("ea81")},a244:function(t,e,a){},a34f:function(t,e,a){"use strict";a("705d")},b77a:function(t,e,a){},cb18:function(t,e,a){"use strict";a("8895")},cb9f:function(t,e,a){"use strict";a("47f4")},ccdb:function(t,e,a){},d115:function(t,e,a){"use strict";a("ccdb")},d6e6:function(t,e,a){t.exports=a.p+"img/5.5eaea3af.jpg"},d863:function(t,e,a){t.exports=a.p+"img/3.ccd274a8.jpg"},e1da:function(t,e,a){"use strict";a("a244")},ea81:function(t,e,a){}});
//# sourceMappingURL=app.fd4db749.js.map