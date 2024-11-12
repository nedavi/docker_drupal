/*!
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(()=>{var e={693:(e,t,o)=>{"use strict";o.d(t,{A:()=>r});var n=o(935),i=o.n(n)()((function(e){return e[1]}));i.push([e.id,".ck.ck-menu-bar{border:none;border-bottom:1px solid var(--ck-color-toolbar-border)}",""]);const r=i},935:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var o=e(t);return t[2]?"@media ".concat(t[2]," {").concat(o,"}"):o})).join("")},t.i=function(e,o,n){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(n)for(var r=0;r<this.length;r++){var s=this[r][0];null!=s&&(i[s]=!0)}for(var a=0;a<e.length;a++){var l=[].concat(e[a]);n&&i[l[0]]||(o&&(l[2]?l[2]="".concat(o," and ").concat(l[2]):l[2]=o),t.push(l))}},t}},591:(e,t,o)=>{"use strict";var n,i=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},r=function(){var e={};return function(t){if(void 0===e[t]){var o=document.querySelector(t);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}e[t]=o}return e[t]}}(),s=[];function a(e){for(var t=-1,o=0;o<s.length;o++)if(s[o].identifier===e){t=o;break}return t}function l(e,t){for(var o={},n=[],i=0;i<e.length;i++){var r=e[i],l=t.base?r[0]+t.base:r[0],c=o[l]||0,u="".concat(l," ").concat(c);o[l]=c+1;var d=a(u),h={css:r[1],media:r[2],sourceMap:r[3]};-1!==d?(s[d].references++,s[d].updater(h)):s.push({identifier:u,updater:v(h,t),references:1}),n.push(u)}return n}function c(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var i=o.nc;i&&(n.nonce=i)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var s=r(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(t)}return t}var u,d=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function h(e,t,o,n){var i=o?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=d(t,i);else{var r=document.createTextNode(i),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(r,s[t]):e.appendChild(r)}}function f(e,t,o){var n=o.css,i=o.media,r=o.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var p=null,b=0;function v(e,t){var o,n,i;if(t.singleton){var r=b++;o=p||(p=c(t)),n=h.bind(null,o,r,!1),i=h.bind(null,o,r,!0)}else o=c(t),n=f.bind(null,o,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(o)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=i());var o=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<o.length;n++){var i=a(o[n]);s[i].references--}for(var r=l(e,t),c=0;c<o.length;c++){var u=a(o[c]);0===s[u].references&&(s[u].updater(),s.splice(u,1))}o=r}}}},782:(e,t,o)=>{e.exports=o(237)("./src/core.js")},783:(e,t,o)=>{e.exports=o(237)("./src/engine.js")},311:(e,t,o)=>{e.exports=o(237)("./src/ui.js")},584:(e,t,o)=>{e.exports=o(237)("./src/utils.js")},237:e=>{"use strict";e.exports=CKEditor5.dll}},t={};function o(n){var i=t[n];if(void 0!==i)return i.exports;var r=t[n]={id:n,exports:{}};return e[n](r,r.exports,o),r.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.nc=void 0;var n={};(()=>{"use strict";o.r(n),o.d(n,{InlineEditor:()=>A});var e=o(782),t=o(584),i=o(311),r=o(783);class s extends i.EditorUI{constructor(e,t){super(e),this.view=t,this._toolbarConfig=(0,i.normalizeToolbarConfig)(e.config.get("toolbar"))}get element(){return this.view.editable.element}init(){const e=this.editor,t=this.view,o=e.editing.view,n=t.editable,i=o.document.getRoot();n.name=i.rootName,t.render();const r=n.element;this.setEditableElement(n.name,r),n.bind("isFocused").to(this.focusTracker),o.attachDomRoot(r),this._initPlaceholder(),this._initToolbar(),t.menuBarView&&this._initMenuBar(t.menuBarView),this.fire("ready")}destroy(){super.destroy();const e=this.view;this.editor.editing.view.detachDomRoot(e.editable.name),e.destroy()}_initToolbar(){const e=this.editor,t=this.view,o=t.editable.element,n=t.toolbar;t.panel.bind("isVisible").to(this.focusTracker,"isFocused"),t.bind("viewportTopOffset").to(this,"viewportOffset",(({top:e})=>e||0)),t.listenTo(e.ui,"update",(()=>{t.panel.isVisible&&t.panel.pin({target:o,positions:t.panelPositions})})),n.fillFromConfig(this._toolbarConfig,this.componentFactory),this.addToolbar(n)}_initPlaceholder(){const e=this.editor,t=e.editing.view,o=t.document.getRoot(),n=e.config.get("placeholder");if(n){const e="string"==typeof n?n:n[o.rootName];e&&(o.placeholder=e)}(0,r.enablePlaceholder)({view:t,element:o,isDirectHost:!1,keepOnFocus:!0})}}var a=o(591),l=o.n(a),c=o(693),u={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};l()(c.A,u);c.A.locals;const d=(0,t.toUnit)("px");class h extends i.EditorUIView{constructor(e,t,o,n={}){super(e),this.toolbar=new i.ToolbarView(e,{shouldGroupWhenFull:n.shouldToolbarGroupWhenFull,isFloating:!0}),n.useMenuBar&&(this.menuBarView=new i.MenuBarView(e)),this.set("viewportTopOffset",0),this.panel=new i.BalloonPanelView(e),this.panelPositions=this._getPanelPositions(),this.panel.extendTemplate({attributes:{class:"ck-toolbar-container"}}),this.editable=new i.InlineEditableUIView(e,t,o,{label:n.label}),this._resizeObserver=null}render(){super.render(),this.body.add(this.panel),this.registerChild(this.editable),this.menuBarView?this.panel.content.addMany([this.menuBarView,this.toolbar]):this.panel.content.add(this.toolbar);if(this.toolbar.options.shouldGroupWhenFull){const e=this.editable.element;this._resizeObserver=new t.ResizeObserver(e,(()=>{this.toolbar.maxWidth=d(new t.Rect(e).width)}))}}destroy(){super.destroy(),this._resizeObserver&&this._resizeObserver.destroy()}_getPanelPositionTop(e,t){let o;return o=e.top>t.height+this.viewportTopOffset?e.top-t.height:e.bottom>t.height+this.viewportTopOffset+50?this.viewportTopOffset:e.bottom,o}_getPanelPositions(){const e=[(e,t)=>({top:this._getPanelPositionTop(e,t),left:e.left,name:"toolbar_west",config:{withArrow:!1}}),(e,t)=>({top:this._getPanelPositionTop(e,t),left:e.left+e.width-t.width,name:"toolbar_east",config:{withArrow:!1}})];return"ltr"===this.locale.uiLanguageDirection?e:e.reverse()}}const f=function(e){return null!=e&&"object"==typeof e};const p="object"==typeof global&&global&&global.Object===Object&&global;var b="object"==typeof self&&self&&self.Object===Object&&self;const v=(p||b||Function("return this")()).Symbol;var g=Object.prototype,m=g.hasOwnProperty,w=g.toString,y=v?v.toStringTag:void 0;const T=function(e){var t=m.call(e,y),o=e[y];try{e[y]=void 0;var n=!0}catch(e){}var i=w.call(e);return n&&(t?e[y]=o:delete e[y]),i};var O=Object.prototype.toString;const j=function(e){return O.call(e)};var E=v?v.toStringTag:void 0;const P=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":E&&E in Object(e)?T(e):j(e)};const x=function(e,t){return function(o){return e(t(o))}}(Object.getPrototypeOf,Object);var S=Function.prototype,_=Object.prototype,C=S.toString,F=_.hasOwnProperty,M=C.call(Object);const B=function(e){if(!f(e)||"[object Object]"!=P(e))return!1;var t=x(e);if(null===t)return!0;var o=F.call(t,"constructor")&&t.constructor;return"function"==typeof o&&o instanceof o&&C.call(o)==M};const V=function(e){return f(e)&&1===e.nodeType&&!B(e)};class A extends((0,e.ElementApiMixin)(e.Editor)){constructor(o,n={}){if(!D(o)&&void 0!==n.initialData)throw new t.CKEditorError("editor-create-initial-data",null);super(n),this.config.define("menuBar.isVisible",!1),void 0===this.config.get("initialData")&&this.config.set("initialData",function(e){return D(e)?(0,t.getDataFromElement)(e):e}(o)),this.model.document.createRoot(),D(o)&&(this.sourceElement=o,(0,e.secureSourceElement)(this,o));const i=!this.config.get("toolbar.shouldNotGroupWhenFull"),r=this.config.get("menuBar"),a=new h(this.locale,this.editing.view,this.sourceElement,{shouldToolbarGroupWhenFull:i,useMenuBar:r.isVisible,label:this.config.get("label")});this.ui=new s(this,a),(0,e.attachToForm)(this)}destroy(){const e=this.getData();return this.ui.destroy(),super.destroy().then((()=>{this.sourceElement&&this.updateSourceElement(e)}))}static create(e,o={}){return new Promise((n=>{if(D(e)&&"TEXTAREA"===e.tagName)throw new t.CKEditorError("editor-wrong-element",null);const i=new this(e,o);n(i.initPlugins().then((()=>i.ui.init())).then((()=>i.data.init(i.config.get("initialData")))).then((()=>i.fire("ready"))).then((()=>i)))}))}}function D(e){return V(e)}})(),(window.CKEditor5=window.CKEditor5||{}).editorInline=n})();