"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9007],{62410:function(r,e,o){o.d(e,{cn:function(){return l},Gp:function(){return i},oe:function(){return a}});function t(){for(var r,e=0,o="";e<arguments.length;)(r=arguments[e++])&&(r=function r(e){var o,t,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(o=0;o<e.length;o++)e[o]&&(t=r(e[o]))&&(n&&(n+=" "),n+=t);else for(o in e)e[o]&&(n&&(n+=" "),n+=o);return n}(r))&&(o&&(o+=" "),o+=r);return o}var n=o(67294);function i(r){return(0,n.forwardRef)(r)}var a=(o,e,r=!0)=>{var t;return e?(t=e.reduce((r,e)=>e in o?{...r,[e]:o[e]}:r,{}),r?[Object.keys(o).filter(r=>!e.includes(r)).reduce((r,e)=>({...r,[e]:o[e]}),{}),t]:[o,t]):[o,{}]},l=t},29118:function(y,r,e){e.d(r,{tv:function(){return cr}});var o=["0","xs","sm","md","lg","xl","2xl","3xl","4xl","5xl","6xl","7xl","8xl","9xl","1","2","3","3.5","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","20","24","28","32","36","40","44","48","52","56","60","64","72","80","96"].map(r=>"unit-"+r),h=r=>"boolean"==typeof r?""+r:0===r?"0":r,w=r=>!r||"object"!=typeof r||0===Object.keys(r).length,O=(r,e)=>JSON.stringify(r)===JSON.stringify(e);function t(r){var e=[];return function e(r,o){r.forEach(function(r){Array.isArray(r)?e(r,o):o.push(r)})}(r,e),e}var x=(...r)=>t(r).filter(Boolean),c=(r,e)=>{var o,t,n,i,a={},l=Object.keys(r),s=Object.keys(e);for(o of l)s.includes(o)?(t=r[o],n=e[o],"object"==typeof t&&"object"==typeof n?a[o]=c(t,n):Array.isArray(t)||Array.isArray(n)?a[o]=x(n,t):a[o]=n+" "+t):a[o]=r[o];for(i of s)l.includes(i)||(a[i]=e[i]);return a},k=r=>r&&"string"==typeof r?r.replace(/\s+/g," ").trim():r,s="-";function G(r){o=(a=r).theme,e=a.prefix,t={nextPart:new Map,validators:[]},function(r,o){return o?r.map(function(r){return[r[0],r[1].map(function(r){return"string"==typeof r?o+r:"object"==typeof r?Object.fromEntries(Object.entries(r).map(function(r){var e=r[0],r=r[1];return[o+e,r]})):r})]}):r}(Object.entries(a.classGroups),e).forEach(function(r){var e=r[0];!function o(r,t,n,i){r.forEach(function(r){if("string"!=typeof r)return"function"==typeof r?N(r)?void o(r(i),t,n,i):void t.validators.push({validator:r,classGroupId:n}):void Object.entries(r).forEach(function(r){var e=r[0],r=r[1];o(r,u(t,e),n,i)});(""===r?t:u(t,r)).classGroupId=n})}(r[1],t,e,o)});var o,e,t,n=t,i=r.conflictingClassGroups,a=r.conflictingClassGroupModifiers,l=void 0===a?{}:a;return{getClassGroupId:function(r){var e=r.split(s);return""===e[0]&&1!==e.length&&e.shift(),function r(e,o){if(0===e.length)return o.classGroupId;var t=e[0];t=o.nextPart.get(t);t=t?r(e.slice(1),t):void 0;if(t)return t;if(0===o.validators.length)return;var n=e.join(s);return o.validators.find(function(r){r=r.validator;return r(n)})?.classGroupId}(e,n)||function(r){if(d.test(r)){r=d.exec(r)[1],r=r?.substring(0,r.indexOf(":"));if(r)return"arbitrary.."+r}}(r)},getConflictingClassGroupIds:function(r,e){var o=i[r]||[];return e&&l[r]?[].concat(o,l[r]):o}}}var d=/^\[(.+)\]$/;function u(r,e){var o=r;return e.split(s).forEach(function(r){o.nextPart.has(r)||o.nextPart.set(r,{nextPart:new Map,validators:[]}),o=o.nextPart.get(r)}),o}function N(r){return r.isThemeGetter}var p="!";function P(r){return{cache:(o=r.cacheSize)<1?{get:function(){},set:function(){}}:(t=0,n=new Map,i=new Map,{get:function(r){var e=n.get(r);return void 0!==e?e:void 0!==(e=i.get(r))?(a(r,e),e):void 0},set:function(r,e){n.has(r)?n.set(r,e):a(r,e)}}),splitModifiers:(c=r.separator||":",d=1===c.length,u=c[0],f=c.length,function(r){for(var e,o=[],t=0,n=0,i=0;i<r.length;i++){var a=r[i];if(0===t){if(a===u&&(d||r.slice(i,i+f)===c)){o.push(r.slice(n,i)),n=i+f;continue}if("/"===a){e=i;continue}}"["===a?t++:"]"===a&&t--}var l=0===o.length?r:r.substring(n),s=l.startsWith(p);return{modifiers:o,hasImportantModifier:s,baseClassName:s?l.substring(1):l,maybePostfixModifierPosition:e&&n<e?e-n:void 0}}),...G(r)};var c,d,u,f,o,t,n,i;function a(r,e){n.set(r,e),o<++t&&(t=0,i=n,n=new Map)}}var S=/\s+/;function I(r,e){var c=e.splitModifiers,d=e.getClassGroupId,n=e.getConflictingClassGroupIds,i=new Set;return r.trim().split(S).map(function(r){var e=c(r),o=e.modifiers,t=e.hasImportantModifier,n=e.baseClassName,e=e.maybePostfixModifierPosition,i=d(e?n.substring(0,e):n),a=Boolean(e);if(!i){if(!e)return{isTailwindClass:!1,originalClassName:r};if(!(i=d(n)))return{isTailwindClass:!1,originalClassName:r};a=!1}var l,s,n=((e=o).length<=1?e:(l=[],s=[],e.forEach(function(r){"["===r[0]?(l.push.apply(l,s.sort().concat([r])),s=[]):s.push(r)}),l.push.apply(l,s.sort()),l)).join(":");return{isTailwindClass:!0,modifierId:t?n+p:n,classGroupId:i,originalClassName:r,hasPostfixModifier:a}}).reverse().filter(function(r){if(r.isTailwindClass){var e=r.modifierId,o=r.classGroupId,r=r.hasPostfixModifier,t=e+o;if(i.has(t))return!1;i.add(t),n(o,r).forEach(function(r){return i.add(e+r)})}return!0}).reverse().map(function(r){return r.originalClassName}).join(" ")}function V(){for(var r,e=0,o="";e<arguments.length;)(r=arguments[e++])&&(r=function r(e){if("string"==typeof e)return e;var o;var t="";for(var n=0;n<e.length;n++)e[n]&&(o=r(e[n]))&&(t&&(t+=" "),t+=o);return t}(r))&&(o&&(o+=" "),o+=r);return o}function n(){for(var o,t,n,r=arguments.length,i=new Array(r),e=0;e<r;e++)i[e]=arguments[e];var a=function(r){var e=i[0],e=i.slice(1).reduce(function(r,e){return e(r)},e());return o=P(e),t=o.cache.get,n=o.cache.set,(a=l)(r)};function l(r){var e=t(r);return e||(e=I(r,o),n(r,e),e)}return function(){return a(V.apply(null,arguments))}}function $(e){function r(r){return r[e]||[]}return r.isThemeGetter=!0,r}var i=/^\[(?:([a-z-]+):)?(.+)\]$/i,E=/^\d+\/\d+$/,T=new Set(["px","full","screen"]),R=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,W=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,L=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;function B(r){return K(r)||T.has(r)||E.test(r)||q(r)}function q(r){return a(r,"length",rr)}function Q(r){return a(r,"size",l)}function U(r){return a(r,"position",l)}function X(r){return a(r,"url",er)}function J(r){return a(r,"number",K)}function K(r){return!Number.isNaN(Number(r))}function Y(r){return r.endsWith("%")&&K(r.slice(0,-1))}function _(r){return f(r)||a(r,"number",f)}function D(r){return i.test(r)}function F(){return!0}function H(r){return R.test(r)}function Z(r){return a(r,"",or)}function a(r,e,o){r=i.exec(r);return!!r&&(r[1]?r[1]===e:o(r[2]))}function rr(r){return W.test(r)}function l(){return!1}function er(r){return r.startsWith("url(")}function f(r){return Number.isInteger(Number(r))}function or(r){return L.test(r)}function b(){function r(){return["auto","contain","none"]}function e(){return["auto","hidden","clip","visible","scroll"]}function o(){return["auto",D,m]}function t(){return[D,m]}function n(){return["",B]}function i(){return["auto",K,D]}function a(){return["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"]}function l(){return["solid","dashed","dotted","double","none"]}function s(){return["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"]}function c(){return["start","end","center","between","around","evenly","stretch"]}function d(){return["","0",D]}function u(){return["auto","avoid","all","avoid-page","page","left","right","column"]}function f(){return[K,J]}function p(){return[K,D]}var b=$("colors"),m=$("spacing"),g=$("blur"),v=$("brightness"),y=$("borderColor"),h=$("borderRadius"),w=$("borderSpacing"),x=$("borderWidth"),k=$("contrast"),j=$("grayscale"),z=$("hueRotate"),C=$("invert"),A=$("gap"),M=$("gradientColorStops"),O=$("gradientColorStopPositions"),G=$("inset"),N=$("margin"),P=$("opacity"),S=$("padding"),I=$("saturate"),V=$("scale"),E=$("sepia"),T=$("skew"),R=$("space"),W=$("translate");return{cacheSize:500,theme:{colors:[F],spacing:[B],blur:["none","",H,D],brightness:f(),borderColor:[b],borderRadius:["none","","full",H,D],borderSpacing:t(),borderWidth:n(),contrast:f(),grayscale:d(),hueRotate:p(),invert:d(),gap:t(),gradientColorStops:[b],gradientColorStopPositions:[Y,q],inset:o(),margin:o(),opacity:f(),padding:t(),saturate:f(),scale:f(),sepia:d(),skew:p(),space:t(),translate:t()},classGroups:{aspect:[{aspect:["auto","square","video",D]}],container:["container"],columns:[{columns:[H]}],"break-after":[{"break-after":u()}],"break-before":[{"break-before":u()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none"]}],clear:[{clear:["left","right","both","none"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[].concat(a(),[D])}],overflow:[{overflow:e()}],"overflow-x":[{"overflow-x":e()}],"overflow-y":[{"overflow-y":e()}],overscroll:[{overscroll:r()}],"overscroll-x":[{"overscroll-x":r()}],"overscroll-y":[{"overscroll-y":r()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[G]}],"inset-x":[{"inset-x":[G]}],"inset-y":[{"inset-y":[G]}],start:[{start:[G]}],end:[{end:[G]}],top:[{top:[G]}],right:[{right:[G]}],bottom:[{bottom:[G]}],left:[{left:[G]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",_]}],basis:[{basis:o()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",D]}],grow:[{grow:d()}],shrink:[{shrink:d()}],order:[{order:["first","last","none",_]}],"grid-cols":[{"grid-cols":[F]}],"col-start-end":[{col:["auto",{span:["full",_]},D]}],"col-start":[{"col-start":i()}],"col-end":[{"col-end":i()}],"grid-rows":[{"grid-rows":[F]}],"row-start-end":[{row:["auto",{span:[_]},D]}],"row-start":[{"row-start":i()}],"row-end":[{"row-end":i()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",D]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",D]}],gap:[{gap:[A]}],"gap-x":[{"gap-x":[A]}],"gap-y":[{"gap-y":[A]}],"justify-content":[{justify:["normal"].concat(c())}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal"].concat(c(),["baseline"])}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[].concat(c(),["baseline"])}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[S]}],px:[{px:[S]}],py:[{py:[S]}],ps:[{ps:[S]}],pe:[{pe:[S]}],pt:[{pt:[S]}],pr:[{pr:[S]}],pb:[{pb:[S]}],pl:[{pl:[S]}],m:[{m:[N]}],mx:[{mx:[N]}],my:[{my:[N]}],ms:[{ms:[N]}],me:[{me:[N]}],mt:[{mt:[N]}],mr:[{mr:[N]}],mb:[{mb:[N]}],ml:[{ml:[N]}],"space-x":[{"space-x":[R]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[R]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit",D,m]}],"min-w":[{"min-w":["min","max","fit",D,B]}],"max-w":[{"max-w":["0","none","full","min","max","fit","prose",{screen:[H]},H,D]}],h:[{h:[D,m,"auto","min","max","fit"]}],"min-h":[{"min-h":["min","max","fit",D,B]}],"max-h":[{"max-h":[D,m,"min","max","fit"]}],"font-size":[{text:["base",H,q]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",J]}],"font-family":[{font:[F]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",D]}],"line-clamp":[{"line-clamp":["none",K,J]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",D,B]}],"list-image":[{"list-image":["none",D]}],"list-style-type":[{list:["none","disc","decimal",D]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[b]}],"placeholder-opacity":[{"placeholder-opacity":[P]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[b]}],"text-opacity":[{"text-opacity":[P]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[].concat(l(),["wavy"])}],"text-decoration-thickness":[{decoration:["auto","from-font",B]}],"underline-offset":[{"underline-offset":["auto",D,B]}],"text-decoration-color":[{decoration:[b]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],indent:[{indent:t()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",D]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",D]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[P]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[].concat(a(),[U])}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Q]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},X]}],"bg-color":[{bg:[b]}],"gradient-from-pos":[{from:[O]}],"gradient-via-pos":[{via:[O]}],"gradient-to-pos":[{to:[O]}],"gradient-from":[{from:[M]}],"gradient-via":[{via:[M]}],"gradient-to":[{to:[M]}],rounded:[{rounded:[h]}],"rounded-s":[{"rounded-s":[h]}],"rounded-e":[{"rounded-e":[h]}],"rounded-t":[{"rounded-t":[h]}],"rounded-r":[{"rounded-r":[h]}],"rounded-b":[{"rounded-b":[h]}],"rounded-l":[{"rounded-l":[h]}],"rounded-ss":[{"rounded-ss":[h]}],"rounded-se":[{"rounded-se":[h]}],"rounded-ee":[{"rounded-ee":[h]}],"rounded-es":[{"rounded-es":[h]}],"rounded-tl":[{"rounded-tl":[h]}],"rounded-tr":[{"rounded-tr":[h]}],"rounded-br":[{"rounded-br":[h]}],"rounded-bl":[{"rounded-bl":[h]}],"border-w":[{border:[x]}],"border-w-x":[{"border-x":[x]}],"border-w-y":[{"border-y":[x]}],"border-w-s":[{"border-s":[x]}],"border-w-e":[{"border-e":[x]}],"border-w-t":[{"border-t":[x]}],"border-w-r":[{"border-r":[x]}],"border-w-b":[{"border-b":[x]}],"border-w-l":[{"border-l":[x]}],"border-opacity":[{"border-opacity":[P]}],"border-style":[{border:[].concat(l(),["hidden"])}],"divide-x":[{"divide-x":[x]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[x]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[P]}],"divide-style":[{divide:l()}],"border-color":[{border:[y]}],"border-color-x":[{"border-x":[y]}],"border-color-y":[{"border-y":[y]}],"border-color-t":[{"border-t":[y]}],"border-color-r":[{"border-r":[y]}],"border-color-b":[{"border-b":[y]}],"border-color-l":[{"border-l":[y]}],"divide-color":[{divide:[y]}],"outline-style":[{outline:[""].concat(l())}],"outline-offset":[{"outline-offset":[D,B]}],"outline-w":[{outline:[B]}],"outline-color":[{outline:[b]}],"ring-w":[{ring:n()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[b]}],"ring-opacity":[{"ring-opacity":[P]}],"ring-offset-w":[{"ring-offset":[B]}],"ring-offset-color":[{"ring-offset":[b]}],shadow:[{shadow:["","inner","none",H,Z]}],"shadow-color":[{shadow:[F]}],opacity:[{opacity:[P]}],"mix-blend":[{"mix-blend":s()}],"bg-blend":[{"bg-blend":s()}],filter:[{filter:["","none"]}],blur:[{blur:[g]}],brightness:[{brightness:[v]}],contrast:[{contrast:[k]}],"drop-shadow":[{"drop-shadow":["","none",H,D]}],grayscale:[{grayscale:[j]}],"hue-rotate":[{"hue-rotate":[z]}],invert:[{invert:[C]}],saturate:[{saturate:[I]}],sepia:[{sepia:[E]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[g]}],"backdrop-brightness":[{"backdrop-brightness":[v]}],"backdrop-contrast":[{"backdrop-contrast":[k]}],"backdrop-grayscale":[{"backdrop-grayscale":[j]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[z]}],"backdrop-invert":[{"backdrop-invert":[C]}],"backdrop-opacity":[{"backdrop-opacity":[P]}],"backdrop-saturate":[{"backdrop-saturate":[I]}],"backdrop-sepia":[{"backdrop-sepia":[E]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[w]}],"border-spacing-x":[{"border-spacing-x":[w]}],"border-spacing-y":[{"border-spacing-y":[w]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",D]}],duration:[{duration:p()}],ease:[{ease:["linear","in","out","in-out",D]}],delay:[{delay:p()}],animate:[{animate:["none","spin","ping","pulse","bounce",D]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[V]}],"scale-x":[{"scale-x":[V]}],"scale-y":[{"scale-y":[V]}],rotate:[{rotate:[_,D]}],"translate-x":[{"translate-x":[W]}],"translate-y":[{"translate-y":[W]}],"skew-x":[{"skew-x":[T]}],"skew-y":[{"skew-y":[T]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",D]}],accent:[{accent:["auto",b]}],appearance:["appearance-none"],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",D]}],"caret-color":[{caret:[b]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":t()}],"scroll-mx":[{"scroll-mx":t()}],"scroll-my":[{"scroll-my":t()}],"scroll-ms":[{"scroll-ms":t()}],"scroll-me":[{"scroll-me":t()}],"scroll-mt":[{"scroll-mt":t()}],"scroll-mr":[{"scroll-mr":t()}],"scroll-mb":[{"scroll-mb":t()}],"scroll-ml":[{"scroll-ml":t()}],"scroll-p":[{"scroll-p":t()}],"scroll-px":[{"scroll-px":t()}],"scroll-py":[{"scroll-py":t()}],"scroll-ps":[{"scroll-ps":t()}],"scroll-pe":[{"scroll-pe":t()}],"scroll-pt":[{"scroll-pt":t()}],"scroll-pr":[{"scroll-pr":t()}],"scroll-pb":[{"scroll-pb":t()}],"scroll-pl":[{"scroll-pl":t()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","pinch-zoom","manipulation",{pan:["x","left","right","y","up","down"]}]}],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",D]}],fill:[{fill:[b,"none"]}],"stroke-w":[{stroke:[B,J]}],stroke:[{stroke:[b,"none"]}],sr:["sr-only","not-sr-only"]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}var tr=n(b);function nr(r,e){for(var o in e)!function r(e,o,t){if(!ir.call(e,o)||ar.has(typeof t)||null===t)return void(e[o]=t);if(Array.isArray(t)&&Array.isArray(e[o]))return void(e[o]=e[o].concat(t));if("object"==typeof t&&"object"==typeof e[o])if(null===e[o])e[o]=t;else for(var n in t)r(e[o],n,t[n])}(r,o,e[o]);return r}var ir=Object.prototype.hasOwnProperty,ar=new Set(["string","number","boolean"]);var lr={twMerge:!0,twMergeConfig:{},responsiveVariants:!1},m=r=>r||void 0,j=(...r)=>m(t(r).filter(Boolean).join(" ")),g=null,z={},C=!1,A=(...e)=>r=>r.twMerge?(g&&!C||(C=!1,g=w(z)?tr:function(r){for(var e=arguments.length,o=new Array(1<e?e-1:0),t=1;t<e;t++)o[t-1]=arguments[t];return n.apply(void 0,("function"==typeof r?[b,r]:[function(){return nr(b(),r)}]).concat(o))}(z)),m(g(j(e)))):j(e),M=(r,e)=>{for(var o in e)r.hasOwnProperty(o)?r[o]=j(r[o],e[o]):r[o]=e[o];return r},sr=(r,e)=>{let{extend:n=null,slots:l={},variants:o={},compoundVariants:s=[],compoundSlots:d=[],defaultVariants:t={}}=r,b={...lr,...e},u=null!=n&&n.base?j(n.base,null==r?void 0:r.base):null==r?void 0:r.base,m=null!=n&&n.variants&&!w(n.variants)?c(o,n.variants):o,g=null!=n&&n.defaultVariants&&!w(n.defaultVariants)?{...n.defaultVariants,...t}:t,v=(w(b.twMergeConfig)||O(b.twMergeConfig,z)||(C=!0,z=b.twMergeConfig),w(null==n?void 0:n.slots)),i=w(l)?{}:{base:j(null==r?void 0:r.base,v&&(null==n?void 0:n.base)),...l},y=v?i:M({...null==n?void 0:n.slots},w(i)?{base:null==r?void 0:r.base}:i),a=f=>{if(w(m)&&w(l)&&v)return A(u,null==f?void 0:f.class,null==f?void 0:f.className)(b);if(s&&!Array.isArray(s))throw new TypeError('The "compoundVariants" prop must be an array. Received: '+typeof s);if(d&&!Array.isArray(d))throw new TypeError('The "compoundSlots" prop must be an array. Received: '+typeof d);let p=(o,r,e=[],t)=>{let n=e;if("string"==typeof r)n=n.concat(k(r).split(" ").map(r=>o+":"+r));else if(Array.isArray(r))n=n.concat(r.reduce((r,e)=>r.concat(o+":"+e),[]));else if("object"==typeof r&&"string"==typeof t)for(var i in r){var a;r.hasOwnProperty(i)&&i===t&&((i=r[i])&&"string"==typeof i?(a=k(i),n[t]?n[t]=n[t].concat(a.split(" ").map(r=>o+":"+r)):n[t]=a.split(" ").map(r=>o+":"+r)):Array.isArray(i)&&0<i.length&&(n[t]=i.reduce((r,e)=>r.concat(o+":"+e),[])))}return n},i=(r,e=m,o=null,t=null)=>{var n=e[r];if(!n||w(n))return null;t=null!=(e=null==t?void 0:t[r])?e:null==f?void 0:f[r];if(null===t)return null;let i=h(t),a=Array.isArray(b.responsiveVariants)&&0<b.responsiveVariants.length||!0===b.responsiveVariants,l=null==g?void 0:g[r],s=[];if("object"==typeof i&&a)for(var[c,d]of Object.entries(i)){var u=n[d];"initial"===c?l=d:Array.isArray(b.responsiveVariants)&&!b.responsiveVariants.includes(c)||(s=p(c,u,s,o))}e=n[i]||n[h(l)];return"object"==typeof s&&"string"==typeof o&&s[o]?M(s,e):0<s.length?(s.push(e),s):e},o={};for(var r in f)void 0!==f[r]&&(o[r]=f[r]);let c=(r,e)=>{r="object"==typeof(null==f?void 0:f[r])?{[r]:null==(r=f[r])?void 0:r.initial}:{};return{...g,...o,...r,...e}},t=(r=[],e)=>{var o,t,n,i=[];for({class:o,className:t,...n}of r){let r=!0;for(var[a,l]of Object.entries(n)){var s=c(a,e);if(Array.isArray(l)){if(!l.includes(s[a])){r=!1;break}}else if(s[a]!==l){r=!1;break}}r&&(o&&i.push(o),t)&&i.push(t)}return i},a=r=>{var e=t(s,r),r=t(null==n?void 0:n.compoundVariants,r);return x(r,e)};if(w(l)&&v)return A(u,m?Object.keys(m).map(r=>i(r,m)):null,a(),null==f?void 0:f.class,null==f?void 0:f.className)(b);var e={};if("object"==typeof y&&!w(y))for(let o of Object.keys(y))e[o]=r=>{var e;return A(y[o],((r,e)=>{if(!m||"object"!=typeof m)return null;var o,t=new Array;for(o in m){var n=i(o,m,r,e),n="base"===r&&"string"==typeof n?n:n&&n[r];n&&(t[t.length]=n)}return t})(o,r),(null!=(e=(r=>{r=a(r);if(!Array.isArray(r))return r;var e,o={};for(e of r)if("string"==typeof e&&(o.base=A(o.base,e)(b)),"object"==typeof e)for(var[t,n]of Object.entries(e))o[t]=A(o[t],n)(b);return o})(r))?e:[])[o],(null!=(e=(e=>{if(d.length<1)return null;var r,o,t,n,i={};for({slots:r=[],class:o,className:t,...n}of d){if(!w(n)){let r=!0;for(var a of Object.keys(n)){var l=c(a,e)[a];if(void 0===l||(Array.isArray(n[a])?!n[a].includes(l):n[a]!==l)){r=!1;break}}if(!r)continue}for(var s of r)i[s]=i[s]||[],i[s].push([o,t])}return i})(r))?e:[])[o],null==r?void 0:r.class,null==r?void 0:r.className)(b)};return e};return a.variantKeys=(()=>{if(m&&"object"==typeof m)return Object.keys(m)})(),a.extend=n,a.base=u,a.slots=y,a.variants=m,a.defaultVariants=g,a.compoundSlots=d,a.compoundVariants=s,a},v=["small","medium","large"],cr=(r,e)=>{return sr(r,{...e,twMerge:null==(r=null==e?void 0:e.twMerge)||r,twMergeConfig:{...null==e?void 0:e.twMergeConfig,theme:{...null==(r=null==e?void 0:e.twMergeConfig)?void 0:r.theme,opacity:["disabled"],spacing:["divider","unit",...o],borderWidth:v,borderRadius:v},classGroups:{...null==(r=null==e?void 0:e.twMergeConfig)?void 0:r.classGroups,shadow:[{shadow:v}],"font-size":[{text:["tiny",...v]}],"bg-image":["bg-stripe-gradient"],"min-w":[{"min-w":["unit",...o]}],"min-h":[{"min-h":["unit",...o]}]}}})}}}]);