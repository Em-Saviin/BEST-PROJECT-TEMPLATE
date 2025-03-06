/**
 * Kendo UI v2025.1.227 (http://www.telerik.com/kendo-ui)
 * Copyright 2025 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.
 *
 * Kendo UI commercial licenses may be obtained at
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
 * If you do not own a commercial license, this file shall be governed by the trial license terms.
 */
import"./kendo.html.icon.js";import{s as svgIcons}from"./kendo.svg-icons.cmn.chunk.js";const __meta__={id:"icons",name:"Icons",category:"web",description:"The Icons set provides both FontIcon and SvgIcon components along with the SVG icons collection from @progress/kendo-svg-icons",depends:["core","html.icon","svg-icons.cmn.chunk"]};!function(n){var e=window.kendo,o=e.html,t=e.ui.Widget,i=n.extend,c=t.extend({init:function(i,c){var s=this;t.fn.init.call(s,i,c),delete c.name,s._icon=new o.HTMLFontIcon(i,n.extend({},c)),s.element=s.wrapper=s._icon.element,e.notify(s)},options:i({},o.HTMLFontIcon.fn.options,{name:"FontIcon"}),setOptions:function(e){var i=this;t.fn.setOptions.call(i,e),i._icon=new o.HTMLFontIcon(i.element,n.extend({},i.options))}}),s=t.extend({init:function(i,c){var s=this;t.fn.init.call(s,i,c),delete c.name,s._icon=new o.HTMLSvgIcon(i,n.extend({},c)),s.element=s.wrapper=s._icon.element,e.notify(s)},options:i({},o.HTMLSvgIcon.fn.options,{name:"SvgIcon"}),setOptions:function(e){var i=this;t.fn.setOptions.call(i,e),e.icon&&this.element.html(""),i._icon=new o.HTMLSvgIcon(i.element,n.extend({},i.options))}});e.ui.plugin(c),e.ui.plugin(s),e.setDefaults("iconType","svg"),e.ui.svgIcons=svgIcons,e.ui.icon=o.renderIcon}(window.kendo.jQuery);var kendo$1=kendo;export{__meta__,kendo$1 as default};
//# sourceMappingURL=kendo.icons.js.map
