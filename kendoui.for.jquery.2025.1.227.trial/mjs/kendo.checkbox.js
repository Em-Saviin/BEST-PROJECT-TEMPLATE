/**
 * Kendo UI v2025.1.227 (http://www.telerik.com/kendo-ui)
 * Copyright 2025 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.
 *
 * Kendo UI commercial licenses may be obtained at
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
 * If you do not own a commercial license, this file shall be governed by the trial license terms.
 */
import"./kendo.toggleinputbase.js";import"./kendo.html.input.js";const __meta__={id:"checkbox",name:"CheckBox",category:"web",description:"The CheckBox widget is used to display boolean value input.",depends:["toggleinputbase","html.input"]};!function(){var e=window.kendo,o=e.ui,n=o.ToggleInputBase.extend({options:{name:"CheckBox",checked:null,enabled:!0,encoded:!0,label:null,rounded:"medium",size:"medium",wrapperClass:"k-checkbox-wrap"},RENDER_INPUT:e.html.renderCheckBox,NS:".kendoCheckBox",value:function(e){return"string"==typeof e&&(e="true"===e),this.check.apply(this,[e])}});e.cssProperties.registerPrefix("CheckBox","k-checkbox-"),e.cssProperties.registerValues("CheckBox",[{prop:"rounded",values:e.cssProperties.roundedValues.concat([["full","full"]])}]),o.plugin(n)}(window.kendo.jQuery);var kendo$1=kendo;export{__meta__,kendo$1 as default};
//# sourceMappingURL=kendo.checkbox.js.map
