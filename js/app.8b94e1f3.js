(function(e){function t(t){for(var a,o,i=t[0],l=t[1],s=t[2],u=0,m=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&m.push(c[o][0]),c[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);d&&d(t);while(m.length)m.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,o=1;o<n.length;o++){var l=n[o];0!==c[l]&&(a=!1)}a&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},c={app:0},r=[];function o(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"0a125d6c"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=c[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,a){n=c[e]=[t,a]}));t.push(n[2]=a);var r,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=o(e);var s=new Error;r=function(t){l.onerror=l.onload=null,clearTimeout(u);var n=c[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",s.name="ChunkLoadError",s.type=a,s.request=r,n[1](s)}c[e]=void 0}};var u=setTimeout((function(){r({type:"timeout",target:l})}),12e4);l.onerror=l.onload=r,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/vue-test/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var d=s;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0c39":function(e,t,n){},"0d29":function(e,t,n){"use strict";var a=n("7a23"),c={class:"l-container"},r={class:"b-accordion"},o=Object(a["createElementVNode"])("h2",null,"Заголовок accordion",-1);function i(e,t,n,i,l,s){var u=Object(a["resolveComponent"])("vue-collapsible-panel"),d=Object(a["resolveComponent"])("vue-collapsible-panel-group");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",c,[Object(a["createElementVNode"])("div",r,[o,Object(a["createVNode"])(d,{accordion:"",data:l.AccData},{default:Object(a["withCtx"])((function(){return[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(l.AccData,(function(e){return Object(a["openBlock"])(),Object(a["createBlock"])(u,{key:e,expanded:e.show},{title:Object(a["withCtx"])((function(){return[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.titleHead),1)]})),content:Object(a["withCtx"])((function(){return[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.teaser),1)]})),_:2},1032,["expanded"])})),128))]})),_:1},8,["data"])])])}var l=[{id:1,show:!0,titleHead:"Head 1",teaser:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi aperiam asperiores corporis cum delectus deserunt eligendi expedita, hic impedit magni minima nemo nesciunt numquam obcaecati pariatur sint sit vero."},{id:2,show:!1,titleHead:"Head 2",teaser:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi aperiam asperiores corporis cum delectus deserunt eligendi expedita, hic impedit magni minima nemo nesciunt numquam obcaecati pariatur sint sit vero."},{id:3,show:!1,titleHead:"Head 3",teaser:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi aperiam asperiores corporis cum delectus deserunt eligendi expedita, hic impedit magni minima nemo nesciunt numquam obcaecati pariatur sint sit vero."}],s=n("9adf"),u=(n("36f4"),{name:"Acc",components:{VueCollapsiblePanelGroup:s["VueCollapsiblePanelGroup"],VueCollapsiblePanel:s["VueCollapsiblePanel"]},data:function(){return{AccData:l}},props:{data:{type:Array,default:function(){return[]}}}}),d=n("6b0d"),m=n.n(d);const b=m()(u,[["render",i]]);t["a"]=b},"1a24":function(e,t,n){"use strict";n("0c39")},"4d7d":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23");function c(e,t,n,c,r,o){var i=Object(a["resolveComponent"])("Header"),l=Object(a["resolveComponent"])("router-view"),s=Object(a["resolveComponent"])("Footer"),u=Object(a["resolveComponent"])("main-container");return Object(a["openBlock"])(),Object(a["createBlock"])(u,null,{header:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(i)]})),default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(l)]})),footer:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(s)]})),_:1})}n("b0c0");var r=function(e){return Object(a["pushScopeId"])("data-v-69fe5f60"),e=e(),Object(a["popScopeId"])(),e},o={class:"b-header"},i={class:"l-container"},l={class:"b-header__top"},s=Object(a["createTextVNode"])(" logo "),u={class:"b-header__nav"},d={class:"b-header__nav-list"},m={class:"b-header__auth"},b={class:"b-header__bottom"},p={class:"b-header__search"},j={action:"#"},O=["placeholder"],f=r((function(){return Object(a["createElementVNode"])("button",{type:"submit"},"Поиск",-1)})),v=r((function(){return Object(a["createElementVNode"])("span",{class:"modal__title"},"Модальное окно",-1)})),h=r((function(){return Object(a["createElementVNode"])("div",{class:"modal__content"},[Object(a["createElementVNode"])("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam assumenda at culpa deserunt dignissimos eius eligendi excepturi fuga impedit laudantium necessitatibus obcaecati omnis perspiciatis provident, sint vitae voluptatibus voluptatum.")],-1)}));function g(e,t,n,c,r,g){var _=Object(a["resolveComponent"])("router-link"),V=Object(a["resolveComponent"])("vue-final-modal");return Object(a["openBlock"])(),Object(a["createElementBlock"])(a["Fragment"],null,[Object(a["createElementVNode"])("header",o,[Object(a["createElementVNode"])("div",i,[Object(a["createElementVNode"])("div",l,[Object(a["createVNode"])(_,{title:r.logoTitle,to:"/",class:"b-header__logo"},{default:Object(a["withCtx"])((function(){return[s]})),_:1},8,["title"]),Object(a["createElementVNode"])("nav",u,[Object(a["createElementVNode"])("ul",d,[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(r.headerNav,(function(e,t){return Object(a["openBlock"])(),Object(a["createElementBlock"])("li",{class:Object(a["normalizeClass"])(["b-header__nav-item",g.isActiveClassHadnler(e.path)]),key:t},[Object(a["createVNode"])(_,{class:"b-header__nav-link",to:e.path},{default:Object(a["withCtx"])((function(){return[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.name),1)]})),_:2},1032,["to"])],2)})),128))])]),Object(a["createElementVNode"])("div",m,[Object(a["createElementVNode"])("a",{onClick:t[0]||(t[0]=function(e){return r.showModal=!0}),href:"#"},"Вход")])]),Object(a["createElementVNode"])("div",b,[Object(a["createElementVNode"])("div",p,[Object(a["createElementVNode"])("form",j,[Object(a["withDirectives"])(Object(a["createElementVNode"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return r.headerSesrch=e}),placeholder:r.headerSearchPlaceholder},null,8,O),[[a["vModelText"],r.headerSesrch]]),f])])])])]),Object(a["createVNode"])(V,{modelValue:r.showModal,"onUpdate:modelValue":t[3]||(t[3]=function(e){return r.showModal=e}),classes:"b-modal-container","content-class":"b-modal-content"},{default:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("button",{class:"modal__close",onClick:t[2]||(t[2]=function(e){return r.showModal=!1})}," x "),v,h]})),_:1},8,["modelValue"])],64)}var _=[{name:"О компании",path:"/about"},{name:"Каталог",path:"/catalog"},{name:"Отзывы",path:"/feedback"},{name:"Контакты",path:"/contacts"}],V=n("43df"),k={name:"Header",props:{msg:String},components:{VueFinalModal:V["a"]},data:function(){return{headerNav:_,logoTitle:"Производственная комопания",headerSearchPlaceholder:"Что ищем?",headerSesrch:"",showModal:!1}},methods:{isActiveClassHadnler:function(e){return e===this.$route.path?"b-header__nav-item_active":""}}},E=(n("6241"),n("6b0d")),N=n.n(E);const w=N()(k,[["render",g],["__scopeId","data-v-69fe5f60"]]);var C=w,y={class:"b-footer"},S=Object(a["createElementVNode"])("div",{class:"l-container"}," footer ",-1),x=[S];function B(e,t){return Object(a["openBlock"])(),Object(a["createElementBlock"])("footer",y,x)}const A={},T=N()(A,[["render",B]]);var L=T,D={class:"l-footer-push"},F={class:"l-content"};function q(e,t){return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",D,[Object(a["createElementVNode"])("header",null,[Object(a["renderSlot"])(e.$slots,"header")]),Object(a["createElementVNode"])("div",F,[Object(a["renderSlot"])(e.$slots,"default")]),Object(a["createElementVNode"])("footer",null,[Object(a["renderSlot"])(e.$slots,"footer")])])}const M={},P=N()(M,[["render",q]]);var H=P,z={components:{Header:C,Footer:L,MainContainer:H}};const I=N()(z,[["render",c]]);var $=I,R=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),U={class:"l-container"},G=Object(a["createElementVNode"])("h1",null,"Главная страница",-1),J={class:"b-tabs"},K={class:"l-container"},Q=Object(a["createElementVNode"])("h2",null,"Способ получения",-1),W=Object(a["createElementVNode"])("p",null,"Вы сами выбираете, куда хотите получить деньги",-1),X={class:"b-tabs__left"},Y={class:"b-tabs__right"};function Z(e,t,n,c,r,o){var i=Object(a["resolveComponent"])("CarouselMain"),l=Object(a["resolveComponent"])("Features"),s=Object(a["resolveComponent"])("tab"),u=Object(a["resolveComponent"])("tabs"),d=Object(a["resolveComponent"])("Acc");return Object(a["openBlock"])(),Object(a["createElementBlock"])(a["Fragment"],null,[Object(a["createElementVNode"])("div",U,[G,Object(a["createVNode"])(i,{data:r.SliderMainData},null,8,["data"]),Object(a["createVNode"])(l,{data:r.FeaturesData},null,8,["data"]),Object(a["createElementVNode"])("div",J,[Object(a["createElementVNode"])("div",K,[Q,W,Object(a["createVNode"])(u,{data:r.TabsData,modelValue:c.active,"onUpdate:modelValue":t[0]||(t[0]=function(e){return c.active=e})},{default:Object(a["withCtx"])((function(){return[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(r.TabsData,(function(e){return Object(a["openBlock"])(),Object(a["createBlock"])(s,{title:e.titleTab,key:e},{default:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("div",X,[Object(a["createElementVNode"])("div",{class:"b-tabs__image",style:Object(a["normalizeStyle"])({backgroundImage:"url("+e.image+")"})},null,4)]),Object(a["createElementVNode"])("div",Y,[Object(a["createElementVNode"])("h2",null,Object(a["toDisplayString"])(e.title),1),Object(a["createElementVNode"])("p",null,Object(a["toDisplayString"])(e.teaser),1)])]})),_:2},1032,["title"])})),128))]})),_:1},8,["data","modelValue"])])])]),Object(a["createVNode"])(d)],64)}var ee=[{id:1,image:n("5745"),title:"Заголовок первого слайда",teaser:"Описание первого слайда"},{id:2,image:n("ba85"),title:"Заголовок второго слайда",teaser:"Описание второго слайда"},{id:3,image:n("5745"),title:"Заголовок третьего слайда",teaser:"Описание третьего слайда"}],te=[{id:"1",icon:n("abc7"),title:"Наши преимущества 1",teaser:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at beatae corporis dolorem earum enim excepturi in iste iure molestias natus nemo nostrum possimus quia quos, sed ullam veritatis, voluptatem!"},{id:"2",icon:n("abc7"),title:"Наши преимущества 2",teaser:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at beatae corporis dolorem earum enim excepturi in iste iure molestias natus nemo nostrum possimus quia quos, sed ullam veritatis, voluptatem!"},{id:"3",icon:n("abc7"),title:"Наши преимущества 3",teaser:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at beatae corporis dolorem earum enim excepturi in iste iure molestias natus nemo nostrum possimus quia quos, sed ullam veritatis, voluptatem!"},{id:"4",icon:n("abc7"),title:"Наши преимущества 4",teaser:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at beatae corporis dolorem earum enim excepturi in iste iure molestias natus nemo nostrum possimus quia quos, sed ullam veritatis, voluptatem!"}],ne=[{id:1,titleTab:"Таб 1",title:"Заголовок первого слайда",teaser:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi aperiam asperiores corporis cum delectus deserunt eligendi expedita, hic impedit magni minima nemo nesciunt numquam obcaecati pariatur sint sit vero.",image:n("ba85")},{id:1,titleTab:"Таб 2",title:"Заголовок второго слайда",teaser:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi aperiam asperiores corporis cum delectus deserunt eligendi expedita, hic impedit magni minima nemo nesciunt numquam obcaecati pariatur sint sit vero.",image:n("5745")},{id:1,titleTab:"Таб 3",title:"Заголовок третьего слайда",teaser:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi aperiam asperiores corporis cum delectus deserunt eligendi expedita, hic impedit magni minima nemo nesciunt numquam obcaecati pariatur sint sit vero.",image:n("ba85")},{id:1,titleTab:"Таб 4",title:"Заголовок четвертого слайда",teaser:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi aperiam asperiores corporis cum delectus deserunt eligendi expedita, hic impedit magni minima nemo nesciunt numquam obcaecati pariatur sint sit vero.",image:n("5745")}],ae={class:"l-container"},ce={class:"slider__ctn"};function re(e,t,n,c,r,o){var i=Object(a["resolveComponent"])("swiper-slide"),l=Object(a["resolveComponent"])("swiper");return Object(a["openBlock"])(),Object(a["createBlock"])(l,{"slides-per-view":1,"space-between":50,onSwiper:c.onSwiper,onSlideChange:c.onSlideChange,class:"slider"},{default:Object(a["withCtx"])((function(){return[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(n.data,(function(e){return Object(a["openBlock"])(),Object(a["createBlock"])(i,{key:e.id,style:Object(a["normalizeStyle"])({backgroundImage:"url("+e.image+")"})},{default:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("div",ae,[Object(a["createElementVNode"])("div",ce,[Object(a["createElementVNode"])("h2",null,Object(a["toDisplayString"])(e.title),1),Object(a["createElementVNode"])("p",null,Object(a["toDisplayString"])(e.teaser),1)])])]})),_:2},1032,["style"])})),128))]})),_:1},8,["onSwiper","onSlideChange"])}var oe=n("90ea"),ie=n("a16a"),le=(n("bbe3"),{name:"home",components:{Swiper:oe["a"],SwiperSlide:ie["a"]},setup:function(){var e=function(e){console.log(e)},t=function(){console.log("slide change")};return{onSwiper:e,onSlideChange:t}},props:{data:{type:Array,default:function(){return[]}}}});n("b2b0");const se=N()(le,[["render",re]]);var ue=se,de={class:"l-container"},me={class:"features"},be=["src"],pe={class:"features__title"},je={class:"features__teaser"};function Oe(e,t,n,c,r,o){return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",de,[Object(a["createElementVNode"])("div",me,[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(n.data,(function(e){return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",{class:"features__item",key:e.id},[Object(a["createElementVNode"])("img",{src:e.icon,class:"features__icon"},null,8,be),Object(a["createElementVNode"])("h3",pe,Object(a["toDisplayString"])(e.title),1),Object(a["createElementVNode"])("div",je,Object(a["toDisplayString"])(e.teaser),1)])})),128))])])}var fe={name:"Features",props:{data:{type:Array,default:function(){return[]}}}};n("1a24");const ve=N()(fe,[["render",Oe]]);var he=ve,ge={class:"b-tabs__nav"},_e=["onClick"],Ve={class:"b-tabs__ctn"};function ke(e,t,n,c,r,o){return Object(a["openBlock"])(),Object(a["createElementBlock"])(a["Fragment"],null,[Object(a["createElementVNode"])("ul",ge,[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(c.tabs,(function(e,t){return Object(a["openBlock"])(),Object(a["createElementBlock"])("li",{key:t,class:Object(a["normalizeClass"])([c.active===t?"b-tabs__item_active":"b-tabs__item",""]),onClick:function(e){return c.selectTab(t)}},Object(a["toDisplayString"])(e.props.title),11,_e)})),128))]),Object(a["createElementVNode"])("div",Ve,[Object(a["renderSlot"])(e.$slots,"default")])],64)}n("a9e3");var Ee={name:"Tabs",props:{modelValue:{type:[String,Number]}},emits:["update:modelValue"],setup:function(e,t){t.slots;var n=t.emit,c=Object(a["computed"])((function(){return e.modelValue})),r=Object(a["ref"])([]);function o(e){n("update:modelValue",e)}return Object(a["provide"])("tabsState",{active:c,tabs:r}),{tabs:r,active:c,selectTab:o}}};const Ne=N()(Ee,[["render",ke]]);var we=Ne,Ce={key:0,class:"b-tabs__wrapper"};function ye(e,t,n,c,r,o){return c.isActive?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",Ce,[Object(a["renderSlot"])(e.$slots,"default")])):Object(a["createCommentVNode"])("",!0)}n("c740");var Se={name:"Tab",props:{title:String},setup:function(e){var t=Object(a["getCurrentInstance"])(),n=Object(a["inject"])("tabsState"),c=n.tabs,r=n.active,o=Object(a["computed"])((function(){return c.value.findIndex((function(e){return e.uid===t.uid}))})),i=Object(a["computed"])((function(){return o.value===r.value}));return Object(a["watchEffect"])((function(){-1===o.value&&c.value.push(t)})),{isActive:i}}};const xe=N()(Se,[["render",ye]]);var Be=xe,Ae=n("0d29"),Te={name:"home",components:{CarouselMain:ue,Features:he,Tabs:we,Tab:Be,Acc:Ae["a"]},data:function(){return{FeaturesData:te,SliderMainData:ee,TabsData:ne,sideBarClass:"desktop-sidebar"}},setup:function(){var e=Object(a["ref"])(0);return{active:e}},mounted:function(){this.handleResize(),window.addEventListener("resize",this.handleResize)},unmounted:function(){window.removeEventListener("resize",this.handleResize)},methods:{handleResize:function(){this.sideBarClass=window.matchMedia("(max-width: 600px)").matches?"mobile-sidebar":"mobile-sidebar mobile-sidebar_inner asd"},getPic:function(e){return this.data_response.user_Image_path+e}}};const Le=N()(Te,[["render",Z]]);var De=Le,Fe=[{path:"/",name:"Home",component:De},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/catalog",name:"Catalog",component:function(){return n.e("about").then(n.bind(null,"247d"))}},{path:"/contacts",name:"Contacts",component:function(){return n.e("about").then(n.bind(null,"c93c"))}},{path:"/feedback",name:"Feedback",component:function(){return n.e("about").then(n.bind(null,"6e7a"))}}],qe=Object(R["a"])({history:Object(R["b"])("/vue-test/"),routes:Fe}),Me=qe;n("a41b");Object(a["createApp"])($).use(Me).mount("#app")},5745:function(e,t,n){e.exports=n.p+"img/slide1.c111e89c.png"},6241:function(e,t,n){"use strict";n("4d7d")},a41b:function(e,t,n){},ab7a:function(e,t,n){},abc7:function(e,t,n){e.exports=n.p+"img/man.6ebd0736.png"},b2b0:function(e,t,n){"use strict";n("ab7a")},ba85:function(e,t,n){e.exports=n.p+"img/slide2.c9b91cc9.png"}});
//# sourceMappingURL=app.8b94e1f3.js.map