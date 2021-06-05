(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7348],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},485:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return u},default:function(){return s}});var r=n(2122),i=n(9756),a=(n(7294),n(3905)),l={id:"julia",title:"Julia",sidebar_label:"Julia"},o={unversionedId:"julia",id:"julia",isDocsHomePage:!1,title:"Julia",description:"What",source:"@site/docs/segment-julia.md",sourceDirName:".",slug:"/julia",permalink:"/docs/julia",editUrl:"https://github.com/jandedobbeleer/oh-my-posh/edit/main/docs/docs/segment-julia.md",version:"current",sidebar_label:"Julia",frontMatter:{id:"julia",title:"Julia",sidebar_label:"Julia"},sidebar:"docs",previous:{title:"Java",permalink:"/docs/java"},next:{title:"Kubectl Context",permalink:"/docs/kubectl"}},u=[{value:"What",id:"what",children:[]},{value:"Sample Configuration",id:"sample-configuration",children:[]},{value:"Properties",id:"properties",children:[]}],p={toc:u};function s(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"what"},"What"),(0,a.kt)("p",null,"Display the currently active julia version."),(0,a.kt)("h2",{id:"sample-configuration"},"Sample Configuration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "julia",\n  "style": "powerline",\n  "powerline_symbol": "\\uE0B0",\n  "foreground": "#ffffff",\n  "background": "#4063D8",\n  "properties": {\n    "prefix": " \\uE624 "\n  }\n}\n')),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"display_version: ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean")," - display the julia version - defaults to ",(0,a.kt)("inlineCode",{parentName:"li"},"true")),(0,a.kt)("li",{parentName:"ul"},"display_error: ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean")," - show the error context when failing to retrieve the version information - defaults to ",(0,a.kt)("inlineCode",{parentName:"li"},"true")),(0,a.kt)("li",{parentName:"ul"},"missing_command_text: ",(0,a.kt)("inlineCode",{parentName:"li"},"string")," - text to display when the command is missing - defaults to empty"),(0,a.kt)("li",{parentName:"ul"},"display_mode: ",(0,a.kt)("inlineCode",{parentName:"li"},"string")," - determines when the segment is displayed",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"always"),": the segment is always displayed"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"files"),": the segment is only displayed when ",(0,a.kt)("inlineCode",{parentName:"li"},"*.jl")," files are present (default)")))))}s.isMDXComponent=!0}}]);