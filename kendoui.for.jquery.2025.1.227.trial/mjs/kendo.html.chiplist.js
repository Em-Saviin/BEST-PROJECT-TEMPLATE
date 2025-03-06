/**
 * Kendo UI v2025.1.227 (http://www.telerik.com/kendo-ui)
 * Copyright 2025 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.
 *
 * Kendo UI commercial licenses may be obtained at
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
 * If you do not own a commercial license, this file shall be governed by the trial license terms.
 */
import"./kendo.html.base.js";const __meta__={id:"html.chiplist",name:"Html.ChipList",category:"web",description:"HTML rendering utility for Kendo UI for jQuery.",depends:["html.base"],features:[]};!function(e){var t=window.kendo,i=t.html.HTMLBase,a=i.extend({init:function(e,t){var a=this;i.fn.init.call(a,e,t),a.wrapper=a.element.addClass("k-chip-list"),a._applyAriaAttributes(t),a._addClasses()},options:{name:"HTMLChipList",size:"medium",stylingOptions:["size"]},_applyAriaAttributes:function(t){var i=this,a=((t=e.extend({selectable:"none"},t)).attributes||{})["aria-label"];"none"!==t.selectable?i.element.attr({"aria-multiselectable":"multiple"===t.selectable,role:"listbox","aria-label":a||i.element.attr("id")+" listbox","aria-orientation":"horizontal"}):i.element.removeAttr("role aria-label aria-multiselectable aria-orientation")}});e.extend(t.html,{renderChipList:function(t,i){return(undefined===arguments[0]||e.isPlainObject(arguments[0]))&&(i=t,t=e("<div></div>")),new a(t,i).html()},HTMLChipList:a}),t.cssProperties.registerPrefix("HTMLChipList","k-chip-list-")}(window.kendo.jQuery);var kendo$1=kendo;export{__meta__,kendo$1 as default};
//# sourceMappingURL=kendo.html.chiplist.js.map
