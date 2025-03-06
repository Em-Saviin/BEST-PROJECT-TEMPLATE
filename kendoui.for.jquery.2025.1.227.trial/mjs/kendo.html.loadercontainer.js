/**
 * Kendo UI v2025.1.227 (http://www.telerik.com/kendo-ui)
 * Copyright 2025 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.
 *
 * Kendo UI commercial licenses may be obtained at
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
 * If you do not own a commercial license, this file shall be governed by the trial license terms.
 */
import"./kendo.html.base.js";const __meta__={id:"html.loadercontainer",name:"Html.LoaderContainer",category:"web",description:"HTML rendering utility for Kendo UI for jQuery.",depends:["html.base"],features:[]};!function(e){var n=window.kendo,o=n.html.HTMLBase,a=o.extend({init:function(n,a){var r=this;o.fn.init.call(r,n,a),r.options=e.extend({},r.options,a),r._wrapper(),r._overlay(),r._innerContainer()},options:{name:"HTMLLoaderContainer",themeColor:"base",overlayColor:"dark",cssClass:"",message:"Loading...",loaderPosition:"start"},_wrapper:function(){var n,o=this.options;n=e(`<div class="k-loader-container k-loader-container-lg k-loader-${o.loaderPosition}${o.cssClass?` ${o.cssClass}`:""}"></div>`),this.wrapper=n},_overlay:function(){var n,o="k-overlay-"+this.options.overlayColor;n=e(`<div class='k-loader-container-overlay ${o}'></div>`),this.wrapper.append(n)},_innerContainer:function(){var n,o,a=this;o=e("<div class='k-loader-container-inner k-loader-container-panel'></div>"),a.loaderContainer=o,n=a._initMessage(),o.append(n),a.wrapper.append(o)},_initMessage:function(){var n=this.options,o=this.options.message;return e(`<div class='k-loader-container-label !k-text-${n.themeColor}'>${o}</div>`)}});e.extend(n.html,{renderLoaderContainer:function(n,o){return n&&!e.isPlainObject(n)||(o=n,n=e("<div></div>")),new a(n,o).html()},HTMLLoaderContainer:a})}(window.kendo.jQuery);var kendo$1=kendo;export{__meta__,kendo$1 as default};
//# sourceMappingURL=kendo.html.loadercontainer.js.map
