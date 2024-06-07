"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1920],{10902:function(e,t,n){n.d(t,{VS:function(){return o},Yv:function(){return a},Yx:function(){return r},sK:function(){return i}});var o=e=>{var t={top:{originY:1},bottom:{originY:0},left:{originX:1},right:{originX:0},"top-start":{originX:0,originY:1},"top-end":{originX:1,originY:1},"bottom-start":{originX:0,originY:0},"bottom-end":{originX:1,originY:0},"right-start":{originX:0,originY:0},"right-end":{originX:0,originY:1},"left-start":{originX:1,originY:0},"left-end":{originX:1,originY:1}};return(null==t?void 0:t[e])||{}},r=e=>{return{top:"top",bottom:"bottom",left:"left",right:"right","top-start":"top start","top-end":"top end","bottom-start":"bottom start","bottom-end":"bottom end","left-start":"left top","left-end":"left bottom","right-start":"right top","right-end":"right bottom"}[e]},a=(e,t)=>{if(t.includes("-")){var[t]=t.split("-");if(t.includes(e))return!1}return!0},i=(e,t)=>{return t.includes("-")?([,t]=t.split("-"),e+"-"+t):e}},70458:function(e,t,n){n.d(t,{Lj:function(){return o},y7:function(){return r}});var o={ease:[.36,.66,.4,1],easeIn:[.4,0,1,1],easeOut:[0,0,.2,1],easeInOut:[.4,0,.2,1],spring:[.155,1.105,.295,1.12],springOut:[.57,-.15,.62,.07],softSpring:[.16,1.11,.3,1.02]},r=(o.easeOut,o.easeIn,{scaleSpring:{enter:{transform:"scale(1)",opacity:1,transition:{type:"spring",bounce:0,duration:.3}},exit:{transform:"scale(0.6)",opacity:0,transition:{type:"easeOut",duration:.2}}},scaleSpringOpacity:{initial:{opacity:0,transform:"scale(0.8)"},enter:{opacity:1,transform:"scale(1)",transition:{type:"spring",bounce:0,duration:.3}},exit:{opacity:0,transform:"scale(0.7)",transition:{type:"easeOut",bounce:0,duration:.18}}},scale:{enter:{scale:1},exit:{scale:.95}},scaleFadeIn:{enter:{transform:"scale(1)",opacity:1,transition:{duration:.25,ease:o.easeIn}},exit:{transform:"scale(0.95)",opacity:0,transition:{duration:.2,ease:o.easeOut}}},scaleInOut:{enter:{transform:"scale(1)",opacity:1,transition:{duration:.4,ease:o.ease}},exit:{transform:"scale(1.03)",opacity:0,transition:{duration:.3,ease:o.ease}}},fade:{enter:{opacity:1,transition:{duration:.4,ease:o.ease}},exit:{opacity:0,transition:{duration:.3,ease:o.ease}}},collapse:{enter:{opacity:1,height:"auto",transition:{height:{type:"spring",bounce:0,duration:.3},opacity:{easings:"ease",duration:.4}}},exit:{opacity:0,height:0,transition:{easings:"ease",duration:.3}}}})},5120:function(e,t,n){n.d(t,{v:function(){return r}});var t=n(43649),o=n(29118),n=n(65512),r=(0,o.tv)({slots:{base:["z-0","relative","bg-transparent","before:content-['']","before:hidden","before:z-[-1]","before:absolute","before:rotate-45","before:w-2.5","before:h-2.5","before:rounded-sm","data-[arrow=true]:before:block","data-[placement=top]:before:-bottom-[calc(theme(spacing.5)/4_-_1.5px)]","data-[placement=top]:before:left-1/2","data-[placement=top]:before:-translate-x-1/2","data-[placement=top-start]:before:-bottom-[calc(theme(spacing.5)/4_-_1.5px)]","data-[placement=top-start]:before:left-3","data-[placement=top-end]:before:-bottom-[calc(theme(spacing.5)/4_-_1.5px)]","data-[placement=top-end]:before:right-3","data-[placement=bottom]:before:-top-[calc(theme(spacing.5)/4_-_1.5px)]","data-[placement=bottom]:before:left-1/2","data-[placement=bottom]:before:-translate-x-1/2","data-[placement=bottom-start]:before:-top-[calc(theme(spacing.5)/4_-_1.5px)]","data-[placement=bottom-start]:before:left-3","data-[placement=bottom-end]:before:-top-[calc(theme(spacing.5)/4_-_1.5px)]","data-[placement=bottom-end]:before:right-3","data-[placement=left]:before:-right-[calc(theme(spacing.5)/4_-_2px)]","data-[placement=left]:before:top-1/2","data-[placement=left]:before:-translate-y-1/2","data-[placement=left-start]:before:-right-[calc(theme(spacing.5)/4_-_3px)]","data-[placement=left-start]:before:top-1/4","data-[placement=left-end]:before:-right-[calc(theme(spacing.5)/4_-_3px)]","data-[placement=left-end]:before:bottom-1/4","data-[placement=right]:before:-left-[calc(theme(spacing.5)/4_-_2px)]","data-[placement=right]:before:top-1/2","data-[placement=right]:before:-translate-y-1/2","data-[placement=right-start]:before:-left-[calc(theme(spacing.5)/4_-_3px)]","data-[placement=right-start]:before:top-1/4","data-[placement=right-end]:before:-left-[calc(theme(spacing.5)/4_-_3px)]","data-[placement=right-end]:before:bottom-1/4",...n.Dh],content:["z-10","px-2.5","py-1","w-full","inline-flex","flex-col","items-center","justify-center","box-border","subpixel-antialiased","outline-none","box-border"],trigger:["z-10"],backdrop:["hidden"],arrow:[]},variants:{size:{sm:{content:"text-tiny"},md:{content:"text-small"},lg:{content:"text-medium"}},color:{default:{base:"before:bg-content1 before:shadow-small",content:"bg-content1"},foreground:{base:"before:bg-foreground",content:t.J.solid.foreground},primary:{base:"before:bg-primary",content:t.J.solid.primary},secondary:{base:"before:bg-secondary",content:t.J.solid.secondary},success:{base:"before:bg-success",content:t.J.solid.success},warning:{base:"before:bg-warning",content:t.J.solid.warning},danger:{base:"before:bg-danger",content:t.J.solid.danger}},radius:{none:{content:"rounded-none"},sm:{content:"rounded-small"},md:{content:"rounded-medium"},lg:{content:"rounded-large"},full:{content:"rounded-full"}},shadow:{sm:{content:"shadow-small"},md:{content:"shadow-medium"},lg:{content:"shadow-large"}},backdrop:{transparent:{},opaque:{backdrop:"bg-overlay/50 backdrop-opacity-disabled"},blur:{backdrop:"backdrop-blur-sm backdrop-saturate-150 bg-overlay/30"}},triggerScaleOnOpen:{true:{trigger:["aria-expanded:scale-[0.97]","aria-expanded:opacity-70","subpixel-antialiased"]},false:{}},disableAnimation:{true:{base:"animate-none"}}},defaultVariants:{color:"default",radius:"lg",size:"md",shadow:"md",backdrop:"transparent",disableAnimation:!1,triggerScaleOnOpen:!0},compoundVariants:[{backdrop:["opaque","blur"],class:{backdrop:"block w-full h-full fixed inset-0 -z-30"}}]})},93387:function(e,t,n){n.d(t,{G:function(){return o}});var t=n(67294),o=Boolean(null==globalThis?void 0:globalThis.document)?t.useLayoutEffect:t.useEffect},21620:function(z,e,t){t.d(e,{U4:function(){return Le},aV:function(){return Ce},Xj:function(){return Oe},N3:function(){return i},RP:function(){return Te},Ir:function(){return ye},Bq:function(){return ke},tN:function(){return ve},IB:function(){return we}});var e={dismiss:"تجاهل"},n={dismiss:"Отхвърляне"},o={dismiss:"Odstranit"},r={dismiss:"Luk"},H={dismiss:"Schließen"},D={dismiss:"Απόρριψη"},A={dismiss:"Dismiss"},B={dismiss:"Descartar"},W={dismiss:"Lõpeta"},Y={dismiss:"Hylkää"},X={dismiss:"Rejeter"},J={dismiss:"התעלם"},V={dismiss:"Odbaci"},K={dismiss:"Elutasítás"},U={dismiss:"Ignora"},j={dismiss:"閉じる"},Z={dismiss:"무시"},q={dismiss:"Atmesti"},G={dismiss:"Nerādīt"},Q={dismiss:"Lukk"},$={dismiss:"Negeren"},ee={dismiss:"Zignoruj"},te={dismiss:"Descartar"},ne={dismiss:"Dispensar"},oe={dismiss:"Revocare"},re={dismiss:"Пропустить"},ae={dismiss:"Zrušiť"},ie={dismiss:"Opusti"},se={dismiss:"Odbaci"},le={dismiss:"Avvisa"},ce={dismiss:"Kapat"},de={dismiss:"Скасувати"},ue={dismiss:"取消"},pe={dismiss:"關閉"},O=t(67294),L=t(768),k=t(65897),T=t(33685),c=t(28628),d=t(76644),s=t(73935),l=t(16769),fe=t(46822);function me(e){return e&&e.__esModule?e.default:e}const u={top:"top",bottom:"top",left:"left",right:"left"},P={top:"bottom",bottom:"top",left:"right",right:"left"},ge={top:"left",left:"top"},p={top:"height",left:"width"},S={width:"totalWidth",height:"totalHeight"},f={};let m="undefined"!=typeof document&&window.visualViewport;function v(e){let t=0,n=0,o=0,r=0,a=0,i=0;var s,l,c={},d=1<(null===m||void 0===m?void 0:m.scale);return"BODY"===e.tagName?(s=document.documentElement,o=s.clientWidth,r=s.clientHeight,t=null!=(l=null===m||void 0===m?void 0:m.width)?l:o,n=null!=(l=null===m||void 0===m?void 0:m.height)?l:r,c.top=s.scrollTop||e.scrollTop,c.left=s.scrollLeft||e.scrollLeft,m&&(a=m.offsetTop,i=m.offsetLeft)):({width:t,height:n,top:a,left:i}=y(e),c.top=e.scrollTop,c.left=e.scrollLeft,o=t,r=n),(0,L.Pf)()&&("BODY"===e.tagName||"HTML"===e.tagName)&&d&&(c.top=0,c.left=0,a=m.pageTop,i=m.pageLeft),{width:t,height:n,totalWidth:o,totalHeight:r,scroll:c,top:a,left:i}}function I(e,t,n,o,r,a,i){var r=r.scroll[e],s=o[p[e]],l=o.scroll[u[e]]+a,s=s+o.scroll[u[e]]-a,a=t-r+i[e]-o[u[e]],t=t-r+n+i[e]-o[u[e]];return a<l?l-a:s<t?Math.max(s-t,l-a):0}function _(n){if(!f[n]){let[e,t]=n.split(" ");var o=u[e]||"right",r=ge[o],a=(u[t]||(t="center"),p[o]),i=p[r];f[n]={placement:e,crossPlacement:t,axis:o,crossAxis:r,size:a,crossSize:i}}return f[n]}function N(e,t,n,o,r,a,i,s,l,c){var{placement:o,crossPlacement:d,axis:u,crossAxis:p,size:f,crossSize:m}=o,g={},d=(g[p]=e[p],"center"===d?g[p]+=(e[m]-n[m])/2:d!==p&&(g[p]+=e[m]-n[m]),g[p]+=a,e[p]-n[m]+l+c),a=e[p]+e[m]-l-c;return g[p]=(0,k.uZ)(g[p],d,a),o===u?(n=s?i[f]:t[S[f]],g[P[u]]=Math.floor(n-e[u]+r)):g[u]=Math.floor(e[u]+e[f]+r),g}function R(e,t,n,o,r,a){var{placement:a,axis:i,size:s}=a;return a===i?Math.max(0,n[i]-e[i]-e.scroll[i]+t[i]-o[i]-o[P[i]]-r):Math.max(0,e[s]+e[i]+e.scroll[i]-t[i]-n[i]-n[s]-o[i]-o[P[i]]-r)}function he(e,t,n,o,r,a,i,s,l,c,d,u,p,f,m,g){let h=_(e);var{size:e,crossAxis:b,crossSize:v,placement:y,crossPlacement:w}=h;let x=N(t,s,n,h,d,u,c,p,m,g),E=d;var O=R(s,c,t,r,a+d,h);i&&o[e]>O&&(o=N(t,s,n,i=_(P[y]+" "+w),d,u,c,p,m,g),O<R(s,c,t,r,a+d,i))&&(h=i,x=o,E=d);let L="bottom";"top"===h.axis?"top"===h.placement?L="top":"bottom"===h.placement&&(L="bottom"):"top"===h.crossAxis&&("top"===h.crossPlacement?L="bottom":"bottom"===h.crossPlacement&&(L="top"));e=I(b,x[b],n[v],s,l,a,c);x[b]+=e;y=x,w=s,O=c,i=p,o=r,d=a,r=n.height,C=L,i=i?O.height:w[S.height],O=null!=y.top?O.top+y.top:O.top+(i-y.bottom-r),i="top"!==C?Math.max(0,w.height+w.top+w.scroll.top-O-(o.top+o.bottom+d)):Math.max(0,O+r-(w.top+w.scroll.top)-(o.top+o.bottom+d));let T=Math.min(w.height-2*d,i);f&&f<T&&(T=f),n.height=Math.min(n.height,T),e=I(b,(x=N(t,s,n,h,E,u,c,p,m,g))[b],n[v],s,l,a,c),x[b]+=e;var y={},C=t[b]+.5*t[v]-n[b],O=m/2+g,r=n[v]-m/2-g,o=t[b]-n[b]+m/2,w=t[b]+t[v]-n[b]-m/2,d=(0,k.uZ)(C,o,w);return y[b]=(0,k.uZ)(d,O,r),{position:x,maxHeight:T,arrowOffsetLeft:y.left,arrowOffsetTop:y.top,placement:h.placement}}function be(e){var{placement:e,targetNode:t,overlayNode:n,scrollNode:o,padding:r,shouldFlip:a,boundaryElement:i,offset:s,crossOffset:l,maxHeight:c,arrowSize:d=0,arrowBoundaryOffset:u=0}=e,p=n instanceof HTMLElement?function(e){let t=e.offsetParent;t&&t===document.body&&"static"===window.getComputedStyle(t).position&&!x(t)&&(t=document.documentElement);if(null==t)for(t=e.parentElement;t&&!x(t);)t=t.parentElement;return t||document.documentElement}(n):document.documentElement,f=p===document.documentElement,m=window.getComputedStyle(p).position,m=!!m&&"static"!==m,g=f?y(t):w(t,p),f=(f||({marginTop:f,marginLeft:t}=window.getComputedStyle(t),g.top+=parseInt(f,10)||0,g.left+=parseInt(t,10)||0),y(n)),n=(t=n,t=window.getComputedStyle(t),{top:parseInt(t.marginTop,10)||0,bottom:parseInt(t.marginBottom,10)||0,left:parseInt(t.marginLeft,10)||0,right:parseInt(t.marginRight,10)||0}),t=(f.width+=n.left+n.right,f.height+=n.top+n.bottom,{top:o.scrollTop,left:o.scrollLeft,width:o.scrollWidth,height:o.scrollHeight}),o=v(i),h=v(p),b="BODY"===i.tagName?y(p):w(p,i);return"HTML"===p.tagName&&"BODY"===i.tagName&&(h.scroll.top=0,h.scroll.left=0),he(e,g,f,t,n,r,a,o,h,b,s,l,m,c,d,u)}function y(e){var{top:e,left:t,width:n,height:o}=e.getBoundingClientRect(),{scrollTop:r,scrollLeft:a,clientTop:i,clientLeft:s}=document.documentElement;return{top:e+r-i,left:t+a-s,width:n,height:o}}function w(e,t){var n,o,r,a,i=window.getComputedStyle(e);let s;return"fixed"===i.position?({top:r,left:a,width:n,height:o}=e.getBoundingClientRect(),s={top:r,left:a,width:n,height:o}):(s=y(e),r=y(t),a=window.getComputedStyle(t),r.top+=(parseInt(a.borderTopWidth,10)||0)-t.scrollTop,r.left+=(parseInt(a.borderLeftWidth,10)||0)-t.scrollLeft,s.top-=r.top,s.left-=r.left),s.top-=parseInt(i.marginTop,10)||0,s.left-=parseInt(i.marginLeft,10)||0,s}function x(e){e=window.getComputedStyle(e);return"none"!==e.transform||/transform|perspective/.test(e.willChange)||"none"!==e.filter||"paint"===e.contain||"backdropFilter"in e&&"none"!==e.backdropFilter||"WebkitBackdropFilter"in e&&"none"!==e.WebkitBackdropFilter}const C=new WeakMap;let M="undefined"!=typeof document&&window.visualViewport;function ve(o){let n=(0,T.bU)()["direction"],{arrowSize:r=0,targetRef:a,overlayRef:i,scrollRef:s=i,placement:l="bottom",containerPadding:c=12,shouldFlip:d=!0,boundaryElement:u="undefined"!=typeof document?document.body:null,offset:p=0,crossOffset:f=0,shouldUpdatePosition:t=!0,isOpen:m=!0,onClose:g,maxHeight:h,arrowBoundaryOffset:b=0}=o,[e,v]=(0,O.useState)({position:{},arrowOffsetLeft:void 0,arrowOffsetTop:void 0,maxHeight:void 0,placement:void 0});var y,o=[t,l,i.current,a.current,s.current,c,d,u,p,f,m,n,h,b,r];let w=(0,O.useRef)(null===M||void 0===M?void 0:M.scale),x=((0,O.useEffect)(()=>{m&&(w.current=null===M||void 0===M?void 0:M.scale)},[m]),(0,O.useCallback)(()=>{if(!1!==t&&m&&i.current&&a.current&&s.current&&u&&(null===M||void 0===M?void 0:M.scale)===w.current){!h&&i.current&&(i.current.style.maxHeight="none");let t=be({placement:(e=l,"rtl"===n?e.replace("start","right").replace("end","left"):e.replace("start","left").replace("end","right")),overlayNode:i.current,targetNode:a.current,scrollNode:s.current,padding:c,shouldFlip:d,boundaryElement:u,offset:p,crossOffset:f,maxHeight:h,arrowSize:r,arrowBoundaryOffset:b});var e;Object.keys(t.position).forEach(e=>i.current.style[e]=t.position[e]+"px"),i.current.style.maxHeight=null!=t.maxHeight?t.maxHeight+"px":void 0,v(t)}},o)),E=((0,L.bt)(x,o),y=x,(0,L.bt)(()=>(window.addEventListener("resize",y,!1),()=>{window.removeEventListener("resize",y,!1)}),[y]),(0,L.yU)({ref:i,onResize:x}),(0,O.useRef)(!1));(0,L.bt)(()=>{let e,t=()=>{E.current=!0,clearTimeout(e),e=setTimeout(()=>{E.current=!1},500),x()},n=()=>{E.current&&t()};return null!==M&&void 0!==M&&M.addEventListener("resize",t),null!==M&&void 0!==M&&M.addEventListener("scroll",n),()=>{null!==M&&void 0!==M&&M.removeEventListener("resize",t),null!==M&&void 0!==M&&M.removeEventListener("scroll",n)}},[x]);o=(0,O.useCallback)(()=>{E.current||g()},[g,E]);{let{triggerRef:t,isOpen:e,onClose:n}=o={triggerRef:a,isOpen:m,onClose:g&&o};(0,O.useEffect)(()=>{if(e&&null!==n){let e=e=>{var e=e.target;!t.current||e instanceof Node&&!e.contains(t.current)||(e=n||C.get(t.current))&&e()};return window.addEventListener("scroll",e,!0),()=>{window.removeEventListener("scroll",e,!0)}}},[e,n,t])}return{overlayProps:{style:{position:"absolute",zIndex:1e5,...e.position,maxHeight:e.maxHeight}},placement:e.placement,arrowProps:{"aria-hidden":"true",role:"presentation",style:{left:e.arrowOffsetLeft,top:e.arrowOffsetTop}},updatePosition:x}}const g=[];function ye(e,t){let{onClose:n,shouldCloseOnBlur:o,isOpen:r,isDismissable:a=!1,isKeyboardDismissDisabled:i=!1,shouldCloseOnInteractOutside:s}=e,l=((0,O.useEffect)(()=>(r&&g.push(t),()=>{var e=g.indexOf(t);0<=e&&g.splice(e,1)}),[r,t]),()=>{g[g.length-1]===t&&n&&n()});(0,d.Fc)({ref:t,onInteractOutside:a&&r?e=>{s&&!s(e.target)||(g[g.length-1]===t&&(e.stopPropagation(),e.preventDefault()),l())}:null,onInteractOutsideStart:e=>{s&&!s(e.target)||g[g.length-1]===t&&(e.stopPropagation(),e.preventDefault())}}),e=(0,d.L_)({isDisabled:!o,onBlurWithin:e=>{!e.relatedTarget||(0,c.cW)(e.relatedTarget)||s&&!s(e.relatedTarget)||n()}}).focusWithinProps;return{overlayProps:{onKeyDown:e=>{"Escape"!==e.key||i||(e.stopPropagation(),e.preventDefault(),l())},...e},underlayProps:{onPointerDown:e=>{e.target===e.currentTarget&&e.preventDefault()}}}}function we(e,t,n){var e=e["type"],o=t["isOpen"];(0,O.useEffect)(()=>{n&&n.current&&C.set(n.current,t.close)});let r=void 0;"menu"===e?r=!0:"listbox"===e&&(r="listbox");e=(0,L.Me)();return{triggerProps:{"aria-haspopup":r,"aria-expanded":o,"aria-controls":o?e:null,onPress:t.toggle},overlayProps:{id:e}}}"undefined"!=typeof document&&window.visualViewport,new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);const a=O.createContext(null);function xe(e){e=e.children;let t=(0,O.useContext)(a),[n,o]=(0,O.useState)(0);var r=(0,O.useMemo)(()=>({parent:t,modalCount:n,addModal(){o(e=>e+1),t&&t.addModal()},removeModal(){o(e=>e-1),t&&t.removeModal()}}),[t,n]);return O.createElement(a.Provider,{value:r},e)}function Ee(e){var t={modalProviderProps:{"aria-hidden":!!((t=(0,O.useContext)(a))&&0<t.modalCount)||null}}["modalProviderProps"];return O.createElement("div",{"data-overlay-container":!0,...e,...t})}function i(e){return O.createElement(xe,null,O.createElement(Ee,e))}function Oe(e){var t=(0,l.Av)();let{portalContainer:n=t?null:document.body,...o}=e;return O.useEffect(()=>{if(null!==n&&void 0!==n&&n.closest("[data-overlay-container]"))throw new Error("An OverlayContainer must not be inside another container. Please change the portalContainer prop.")},[n]),n?(e=O.createElement(i,o),s.createPortal(e,n)):null}var h={};function Le(e){let{onDismiss:t,...n}=e;e=(0,T.qb)(me(h),"@react-aria/overlays"),e=(0,L.bE)(n,e.format("dismiss"));return O.createElement(fe.T,null,O.createElement("button",{...e,tabIndex:-1,onClick:()=>{t&&t()},style:{width:1,height:1}}))}h={"ar-AE":e,"bg-BG":n,"cs-CZ":o,"da-DK":r,"de-DE":H,"el-GR":D,"en-US":A,"es-ES":B,"et-EE":W,"fi-FI":Y,"fr-FR":X,"he-IL":J,"hr-HR":V,"hu-HU":K,"it-IT":U,"ja-JP":j,"ko-KR":Z,"lt-LT":q,"lv-LV":G,"nb-NO":Q,"nl-NL":$,"pl-PL":ee,"pt-BR":te,"pt-PT":ne,"ro-RO":oe,"ru-RU":re,"sk-SK":ae,"sl-SI":ie,"sr-SP":se,"sv-SE":le,"tr-TR":ce,"uk-UA":de,"zh-CN":ue,"zh-TW":pe};let b=new WeakMap,E=[];function Te(e,t=document.body){let r=new Set(e),a=new Set,i=e=>{for(var t of e.querySelectorAll("[data-live-announcer], [data-react-aria-top-layer]"))r.add(t);var n=e=>{if(r.has(e)||a.has(e.parentElement)&&"row"!==e.parentElement.getAttribute("role"))return NodeFilter.FILTER_REJECT;for(var t of r)if(e.contains(t))return NodeFilter.FILTER_SKIP;return NodeFilter.FILTER_ACCEPT},o=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:n}),n=n(e);if(n===NodeFilter.FILTER_ACCEPT&&s(e),n!==NodeFilter.FILTER_REJECT){let e=o.nextNode();for(;null!=e;)s(e),e=o.nextNode()}},s=e=>{var t=null!=(t=b.get(e))?t:0;"true"===e.getAttribute("aria-hidden")&&0===t||(0===t&&e.setAttribute("aria-hidden","true"),a.add(e),b.set(e,t+1))},n=(E.length&&E[E.length-1].disconnect(),i(t),new MutationObserver(e=>{for(let t of e)if("childList"===t.type&&0!==t.addedNodes.length&&![...r,...a].some(e=>e.contains(t.target))){for(var n of t.removedNodes)n instanceof Element&&(r.delete(n),a.delete(n));for(var o of t.addedNodes)!(o instanceof HTMLElement||o instanceof SVGElement)||"true"!==o.dataset.liveAnnouncer&&"true"!==o.dataset.reactAriaTopLayer?o instanceof Element&&i(o):r.add(o)}})),o=(n.observe(t,{childList:!0,subtree:!0}),{observe(){n.observe(t,{childList:!0,subtree:!0})},disconnect(){n.disconnect()}});return E.push(o),()=>{n.disconnect();for(var e of a){var t=b.get(e);1===t?(e.removeAttribute("aria-hidden"),b.delete(e)):b.set(e,t-1)}o===E[E.length-1]?(E.pop(),E.length&&E[E.length-1].observe()):E.splice(E.indexOf(o),1)}}const F=O.createContext(null);function Ce(e){var t=(0,l.Av)(),{portalContainer:t=t?null:document.body,isExiting:n}=e;let[o,r]=(0,O.useState)(!1);var a=(0,O.useMemo)(()=>({contain:o,setContain:r}),[o,r]);if(!t)return null;let i=e.children;return e.disableFocusManagement||(i=O.createElement(c.MT,{restoreFocus:!0,contain:o&&!n},i)),i=O.createElement(F.Provider,{value:a},O.createElement(d.mk,null,i)),s.createPortal(i,t)}function ke(){var e=(0,O.useContext)(F);let t=null==e?void 0:e.setContain;(0,L.bt)(()=>{null!==t&&void 0!==t&&t(!0)},[t])}},46822:function(e,t,n){n.d(t,{S:function(){return d},T:function(){return o}});var i=n(768),s=n(67294),l=n(76644);const c={border:0,clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap"};function d(e={}){let{style:t,isFocusable:n}=e,[o,r]=(0,s.useState)(!1);var e=(0,l.L_)({isDisabled:!n,onFocusWithinChange:e=>r(e)})["focusWithinProps"],a=(0,s.useMemo)(()=>o?t:t?{...c,...t}:c,[o]);return{visuallyHiddenProps:{...e,style:a}}}function o(e){let{children:t,elementType:n="div",isFocusable:o,style:r,...a}=e;e=d(e).visuallyHiddenProps;return s.createElement(n,(0,i.dG)(a,e),t)}},5698:function(e,t,n){n.d(t,{d:function(){return o}});var a=n(67294),i=n(65897);function o(e){let[t,n]=(0,i.zk)(e.isOpen,e.defaultOpen||!1,e.onOpenChange);var e=(0,a.useCallback)(()=>{n(!0)},[n]),o=(0,a.useCallback)(()=>{n(!1)},[n]),r=(0,a.useCallback)(()=>{n(!t)},[n,t]);return{isOpen:t,setOpen:n,open:e,close:o,toggle:r}}}}]);