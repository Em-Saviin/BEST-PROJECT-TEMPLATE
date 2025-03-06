/**
 * Kendo UI v2025.1.227 (http://www.telerik.com/kendo-ui)
 * Copyright 2025 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.
 *
 * Kendo UI commercial licenses may be obtained at
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
 * If you do not own a commercial license, this file shall be governed by the trial license terms.
 */
import"./kendo.core.js";import{I as IntlService,W as Workbook,a as Worksheet}from"./kendo.ooxml.cmn.chunk.js";const __meta__={id:"ooxml",name:"XLSX generation",category:"framework",advanced:!0,depends:["core","ooxml.cmn.chunk"]};!function(o){IntlService.register({toString:kendo.toString});let e=kendo.ConvertClass(Workbook);var n=e.prototype.toDataURL;Object.assign(e.prototype,{toDataURL:function(){var o=n.call(this);if("string"!=typeof o)throw new Error("The toDataURL method can be used only with jsZip 2. Either include jsZip 2 or use the toDataURLAsync method.");return o},toDataURLAsync:function(){var e=o.Deferred(),t=n.call(this);return"string"==typeof t?t=e.resolve(t):t&&t.then&&t.then((function(o){e.resolve(o)}),(function(){e.reject()})),e.promise()}}),window.kendo.ooxml=window.kendo.ooxml||{},window.kendo.ooxml.IntlService=IntlService,window.kendo.ooxml.Workbook=e,window.kendo.ooxml.Worksheet=kendo.ConvertClass(Worksheet),window.kendo.ooxml.createZip=function(){if("undefined"==typeof JSZip)throw new Error("JSZip not found. Check http://docs.telerik.com/kendo-ui/framework/excel/introduction#requirements for more details.");return new JSZip}}(window.kendo.jQuery);export{__meta__};
//# sourceMappingURL=kendo.ooxml.js.map
