/**
 * Kendo UI v2025.1.227 (http://www.telerik.com/kendo-ui)
 * Copyright 2025 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.
 *
 * Kendo UI commercial licenses may be obtained at
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
 * If you do not own a commercial license, this file shall be governed by the trial license terms.
 */
import{r as register}from"./kendo.ripple.cmn.chunk.js";const __meta__={id:"ripplecontainer",name:"RippleContainer",category:"web",depends:["core","ripple.cmn.chunk"]};!function(e){var n=window.kendo.ui,t=n.Widget,i=e.extend,o=t.extend({init:function(e,n){var o=this;t.fn.init.call(o,e),(e=o.wrapper=o.element).addClass("k-ripple-container"),o.options=i({},o.options,n),o.registerListeners()},options:{name:"RippleContainer",elements:[{selector:".k-button:not(li)"},{selector:".k-list-ul > .k-list-item",options:{global:!0}},{selector:".k-checkbox-label, .k-radio-label"},{selector:".k-checkbox, .k-radio",options:{events:["focusin","animationend","click"]}}]},removeListeners:function(){},registerListeners:function(){var e=this,n=e.element[0],t=e.options.elements;e.removeListeners();var i=register(n,t);e.removeListeners=i},destroy:function(){t.fn.destroy.call(this),this.removeListeners()}});n.plugin(o)}(window.kendo.jQuery);var kendo$1=kendo;export{__meta__,kendo$1 as default};
//# sourceMappingURL=kendo.ripple.js.map
