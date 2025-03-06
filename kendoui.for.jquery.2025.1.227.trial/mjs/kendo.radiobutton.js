/**
 * Kendo UI v2025.1.227 (http://www.telerik.com/kendo-ui)
 * Copyright 2025 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.
 *
 * Kendo UI commercial licenses may be obtained at
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
 * If you do not own a commercial license, this file shall be governed by the trial license terms.
 */
import"./kendo.toggleinputbase.js";import"./kendo.html.input.js";const __meta__={id:"radiobutton",name:"RadioButton",category:"web",description:"The RadioButton widget is used to display an input of type radio.",depends:["toggleinputbase","html.input"]};!function(){var e=window.kendo,t=e.ui,n=t.ToggleInputBase,o=n.extend({init:function(e,t){n.fn.init.call(this,e,t),t&&t.value&&t.value.length&&this.element.attr("value",t.value)},options:{name:"RadioButton",checked:null,value:"",enabled:!0,encoded:!0,label:null,size:"medium",wrapperClass:"k-radio-wrap"},RENDER_INPUT:e.html.renderRadioButton,NS:".kendoRadioButton"});e.cssProperties.registerPrefix("RadioButton","k-radio-"),t.plugin(o)}(window.kendo.jQuery);var kendo$1=kendo;export{__meta__,kendo$1 as default};
//# sourceMappingURL=kendo.radiobutton.js.map
