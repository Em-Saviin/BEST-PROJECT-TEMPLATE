/**
 * Kendo UI v2025.1.227 (http://www.telerik.com/kendo-ui)
 * Copyright 2025 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.
 *
 * Kendo UI commercial licenses may be obtained at
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
 * If you do not own a commercial license, this file shall be governed by the trial license terms.
 */
import"./kendo.core.js";const __meta__={id:"loaderContainer.chunk",name:"LoaderContainerChunk",category:"web",description:"A reusable outputed chunk of code",depends:["core"],hidden:!0,chunk:!0};let $=kendo.jQuery;function useLoaderContainer(e,r){var a=this,o=a.wrapper;if(e&&a.loader){if(!a.wrapper.find(".k-loader-container").length){var d={message:"Loading...",overlayColor:"dark",themeColor:"primary"};d=$.extend({},d,r);const e=kendo.html.renderLoaderContainer($("<div></div>"),d),n=a.wrapper.width(),i=$("<div class='k-loading-pdf-mask'></div>"),t=a.wrapper.clone().removeAttr("id").addClass("k-loading-pdf-progress").width(n);i.append(t),i.append(e),a.mask=i,o.append(i),a.wrapperClone=i.find(".k-pivotgrid"),a.loaderOverlay=i.find(".k-loader-container"),a.loader.element.insertBefore(i.find(".k-loader-container-label"))}}else a.loaderOverlay.length&&(kendo.destroy(a.loaderOverlay),a.mask.remove())}export{useLoaderContainer as u};export{__meta__};
//# sourceMappingURL=kendo.loaderContainer.chunk.js.map
