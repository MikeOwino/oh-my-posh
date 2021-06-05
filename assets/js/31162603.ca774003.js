(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6040],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=u(n),d=i,m=f["".concat(s,".").concat(d)]||f[d]||p[d]||a;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9800:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s},default:function(){return c}});var r=n(2122),i=n(9756),a=(n(7294),n(3905)),o={id:"azfunc",title:"Azure functions",sidebar_label:"Azure functions"},l={unversionedId:"azfunc",id:"azfunc",isDocsHomePage:!1,title:"Azure functions",description:"What",source:"@site/docs/segment-azfunc.md",sourceDirName:".",slug:"/azfunc",permalink:"/docs/azfunc",editUrl:"https://github.com/jandedobbeleer/oh-my-posh/edit/main/docs/docs/segment-azfunc.md",version:"current",sidebar_label:"Azure functions",frontMatter:{id:"azfunc",title:"Azure functions",sidebar_label:"Azure functions"},sidebar:"docs",previous:{title:"Azure Subscription",permalink:"/docs/az"},next:{title:"Battery",permalink:"/docs/battery"}},s=[{value:"What",id:"what",children:[]},{value:"Sample Configuration",id:"sample-configuration",children:[]},{value:"Properties",id:"properties",children:[]}],u={toc:s};function c(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"what"},"What"),(0,a.kt)("p",null,"Display the currently active Azure functions CLI version."),(0,a.kt)("h2",{id:"sample-configuration"},"Sample Configuration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "type": "azfunc",\n    "style": "powerline",\n    "powerline_symbol": "\ue0b0",\n    "foreground": "#ffffff",\n    "background": "#FEAC19",\n    "properties": {\n        "prefix": " \\uf0e7 ",\n        "display_version": true,\n        "display_mode": "files"\n    }\n}\n')),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"display_version: ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean")," - display the Azure functions CLI version - defaults to ",(0,a.kt)("inlineCode",{parentName:"li"},"true")),(0,a.kt)("li",{parentName:"ul"},"display_error: ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean")," - show the error context when failing to retrieve the version information - defaults to ",(0,a.kt)("inlineCode",{parentName:"li"},"true")),(0,a.kt)("li",{parentName:"ul"},"missing_command_text: ",(0,a.kt)("inlineCode",{parentName:"li"},"string")," - text to display when the command is missing - defaults to empty"),(0,a.kt)("li",{parentName:"ul"},"display_mode: ",(0,a.kt)("inlineCode",{parentName:"li"},"string")," - determines when the segment is displayed",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"always"),": the segment is always displayed"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"files"),": the segment is only displayed when a ",(0,a.kt)("inlineCode",{parentName:"li"},"host.json")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"local.settings.json")," files is present (default)")))))}c.isMDXComponent=!0}}]);