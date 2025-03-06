/**
 * Kendo UI v2025.1.227 (http://www.telerik.com/kendo-ui)
 * Copyright 2025 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.
 *
 * Kendo UI commercial licenses may be obtained at
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
 * If you do not own a commercial license, this file shall be governed by the trial license terms.
 */
import"./kendo.core.js";const __meta__={id:"prefix-suffix-containers.chunk",name:"PrefixSuffixContainersChunk",category:"web",description:"A reusable outputed chunk of code",depends:["core"],hidden:!0,chunk:!0};let $=kendo.jQuery;function addInputPrefixSuffixContainers({widget:e,wrapper:t,options:n,prefixInsertBefore:i,suffixInsertAfter:r}){var o,a,p=n.prefixOptions,s=n.suffixOptions,f=p.template||p.icon,c=s.template||s.icon,l=(r=r||i,n.layoutFlow),u=l?"vertical"==l?"horizontal":"vertical":"horizontal",d=`<span class="k-input-separator k-input-separator-${"vertical"==l?"horizontal":"vertical"}"></span>`;p&&f&&((o=t.children(".k-input-prefix"))[0]||(o=$(`<span class="k-input-prefix k-input-prefix-${u}" />`),i?o.insertBefore(i):o.prependTo(t)),p.icon&&o.html(kendo.html.renderIcon({icon:p.icon})),p.template&&o.html(kendo.template(p.template)({})),p.separator&&$(d).insertAfter(o)),s&&c&&((a=t.children(".k-input-suffix"))[0]||(a=$(`<span class="k-input-suffix k-input-suffix-${u}" />`).appendTo(t),r?a.insertAfter(r):a.appendTo(t)),s.icon&&a.html(kendo.html.renderIcon({icon:s.icon})),s.template&&a.html(kendo.template(s.template)({})),s.separator&&$(d).insertBefore(a)),e._prefixContainer=o,e._suffixContainer=a}export{addInputPrefixSuffixContainers as a};export{__meta__};
//# sourceMappingURL=kendo.prefix-suffix-containers.chunk.js.map
