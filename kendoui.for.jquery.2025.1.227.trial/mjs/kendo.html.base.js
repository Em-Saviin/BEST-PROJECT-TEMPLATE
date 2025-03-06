/**
 * Kendo UI v2025.1.227 (http://www.telerik.com/kendo-ui)
 * Copyright 2025 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.
 *
 * Kendo UI commercial licenses may be obtained at
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
 * If you do not own a commercial license, this file shall be governed by the trial license terms.
 */
import"./kendo.core.js";const __meta__={id:"html.base",name:"Html.Base",category:"web",description:"",depends:["core"],features:[]};!function(e){var t=window.kendo,a=t.Class;t.html=t.html||{};var s=a.extend({init:function(t,a){this.element=e(t),delete(a=a||{}).name,this._initOptions(a)},options:{stylingOptions:[]},_addClasses:function(){var e=this,a=e.options,s=a.stylingOptions,n=e.wrapper.data("added-classes");s=s.map((function(e){var s;return"themeColor"!==e||(s=t.cssProperties.getValidClass({widget:a.name,propName:"fillMode",value:a.fillMode}))&&0!==s.length?t.cssProperties.getValidClass({widget:a.name,propName:e,value:a[e],fill:a.fillMode}):""})),n&&e.wrapper.removeClass(n.join(" ")),e.wrapper.data("added-classes",s),e.wrapper.addClass(s.join(" "))},html:function(){return this.wrapper[0].outerHTML}});e.extend(t.html,{HTMLBase:s})}(window.kendo.jQuery);var kendo$1=kendo;export{__meta__,kendo$1 as default};
//# sourceMappingURL=kendo.html.base.js.map
