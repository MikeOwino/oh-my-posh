(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6512,1265,4440,5573],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),d=o,h=c["".concat(i,".").concat(d)]||c[d]||m[d]||l;return n?a.createElement(h,r(r({ref:t},u),{},{components:n})):a.createElement(h,r({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,r=new Array(l);r[0]=c;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var p=2;p<l;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8215:function(e,t,n){"use strict";var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},1395:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var a=n(7294),o=n(944),l=n(6010),r="tabItem_1uMI",s="tabItemActive_2DSg";var i=37,p=39;var u=function(e){var t=e.lazy,n=e.block,u=e.defaultValue,m=e.values,c=e.groupId,d=e.className,h=(0,o.Z)(),f=h.tabGroupChoices,g=h.setTabGroupChoices,k=(0,a.useState)(u),y=k[0],b=k[1],v=a.Children.toArray(e.children),w=[];if(null!=c){var N=f[c];null!=N&&N!==y&&m.some((function(e){return e.value===N}))&&b(N)}var T=function(e){var t=e.currentTarget,n=w.indexOf(t),a=m[n].value;b(a),null!=c&&(g(c,a),setTimeout((function(){var e,n,a,o,l,r,i,p;(e=t.getBoundingClientRect(),n=e.top,a=e.left,o=e.bottom,l=e.right,r=window,i=r.innerHeight,p=r.innerWidth,n>=0&&l<=p&&o<=i&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},x=function(e){var t,n;switch(e.keyCode){case p:var a=w.indexOf(e.target)+1;n=w[a]||w[0];break;case i:var o=w.indexOf(e.target)-1;n=w[o]||w[w.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},d)},m.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,l.Z)("tabs__item",r,{"tabs__item--active":y===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:x,onFocus:T,onClick:T},n)}))),t?(0,a.cloneElement)(v.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},9443:function(e,t,n){"use strict";var a=(0,n(7294).createContext)(void 0);t.Z=a},944:function(e,t,n){"use strict";var a=n(7294),o=n(9443);t.Z=function(){var e=(0,a.useContext)(o.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},861:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u},default:function(){return c}});var a=n(2122),o=n(9756),l=(n(7294),n(3905)),r=n(1395),s=n(8215),i={},p={unversionedId:"install-customize-cmd",id:"install-customize-cmd",isDocsHomePage:!1,title:"install-customize-cmd",description:"<Tabs",source:"@site/docs/install-customize-cmd.mdx",sourceDirName:".",slug:"/install-customize-cmd",permalink:"/docs/install-customize-cmd",editUrl:"https://github.com/jandedobbeleer/oh-my-posh/edit/main/docs/docs/install-customize-cmd.mdx",version:"current",frontMatter:{}},u=[],m={toc:u};function c(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(r.Z,{defaultValue:"powershell",groupId:"shell",values:[{label:"powershell",value:"powershell"},{label:"zsh",value:"zsh"},{label:"bash",value:"bash"},{label:"fish",value:"fish"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"powershell",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"Export-PoshTheme -FilePath ~/.mytheme.omp.json -Format json\n")),(0,l.kt)("p",null,"Once you're done editing, adjust your ",(0,l.kt)("inlineCode",{parentName:"p"},"$PROFILE")," to use your newly created theme."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"oh-my-posh --init --shell pwsh --config ~/.mytheme.omp.json | Invoke-Expression\n"))),(0,l.kt)(s.Z,{value:"zsh",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'export_poshconfig "~/.mytheme.omp.json" json\n')),(0,l.kt)("p",null,"Once you're done editing, adjust ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.zshrc")," to use your newly created theme."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'eval "$(oh-my-posh --init --shell zsh --config ~/.mytheme.omp.json)"\n')),(0,l.kt)("p",null,"When adjusted, reload your profile for the changes to take effect."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},". ~/.zshrc\n"))),(0,l.kt)(s.Z,{value:"bash",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'export_poshconfig "~/.mytheme.omp.json" json\n')),(0,l.kt)("p",null,"Once you're done editing, adjust ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.bashrc")," to use your newly created theme."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'eval "$(oh-my-posh --init --shell bash --config ~/.mytheme.omp.json)"\n')),(0,l.kt)("p",null,"When adjusted, reload your profile for the changes to take effect."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},". ~/.bashrc\n"))),(0,l.kt)(s.Z,{value:"fish",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'export_poshconfig "~/.mytheme.omp.json" json\n')),(0,l.kt)("p",null,"Once you're done editing, adjust ",(0,l.kt)("inlineCode",{parentName:"p"},"config.fish")," to use your newly created theme."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"oh-my-posh --init --shell fish --config ~/.mytheme.omp.json | source\n")),(0,l.kt)("p",null,"Once adjusted, reload your config for the changes to take effect."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},". ~/.config/fish/config.fish\n")))))}c.isMDXComponent=!0},4101:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return r},metadata:function(){return s},toc:function(){return i},default:function(){return u}});var a=n(2122),o=n(9756),l=(n(7294),n(3905)),r={},s={unversionedId:"install-customize",id:"install-customize",isDocsHomePage:!1,title:"install-customize",description:"At this point you're good to go. The jandedobbeleer.omp.json theme displays most common use-cases",source:"@site/docs/install-customize.md",sourceDirName:".",slug:"/install-customize",permalink:"/docs/install-customize",editUrl:"https://github.com/jandedobbeleer/oh-my-posh/edit/main/docs/docs/install-customize.md",version:"current",frontMatter:{}},i=[],p={toc:i};function u(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"At this point you're good to go. The ",(0,l.kt)("inlineCode",{parentName:"p"},"jandedobbeleer.omp.json")," theme displays most common use-cases\nin your prompt so 9/10 you'll be more than happy with it. However, if you want to explore additional\nfunctionality, going through the additional steps below will help you get started."),(0,l.kt)("h4",{id:"change-the-theme"},"Change the theme"),(0,l.kt)("p",null,"We downloaded all the themes and set ",(0,l.kt)("inlineCode",{parentName:"p"},"jandedobbeleer.omp.json")," as the one to use.\nHowever, there are ",(0,l.kt)("a",{parentName:"p",href:"/docs/themes"},"a lot more")," to be discovered and maybe there are some you like better."),(0,l.kt)("h4",{id:"override-the-theme-settings"},"Override the theme settings"),(0,l.kt)("p",null,"Maybe there's a theme you like, but you don't fancy the colors. Or, maybe there's a segment you\nwant to tweak/add, or replace some of the icons with a different one. Whatever the case, read through all\navailable options first, by starting with the ",(0,l.kt)("a",{parentName:"p",href:"/docs/configure"},"configuration guide"),"."),(0,l.kt)("p",null,"You can output the current theme to the format you like (",(0,l.kt)("inlineCode",{parentName:"p"},"json"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"yaml")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"toml"),") which can be used to tweak\nand store as your custom theme."))}u.isMDXComponent=!0},3452:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u},default:function(){return c}});var a=n(2122),o=n(9756),l=(n(7294),n(3905)),r=n(1395),s=n(8215),i={},p={unversionedId:"install-shells",id:"install-shells",isDocsHomePage:!1,title:"install-shells",description:"If you have no idea which shell you're currently using, Oh my Posh has a utility switch that can you tell you (not relevant",source:"@site/docs/install-shells.mdx",sourceDirName:".",slug:"/install-shells",permalink:"/docs/install-shells",editUrl:"https://github.com/jandedobbeleer/oh-my-posh/edit/main/docs/docs/install-shells.mdx",version:"current",frontMatter:{}},u=[{value:"Nu &lt; 0.32.0",id:"nu--0320",children:[]},{value:"Nu &gt;= 0.32.0",id:"nu--0320-1",children:[]}],m={toc:u};function c(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"If you have no idea which shell you're currently using, Oh my Posh has a utility switch that can you tell you (not relevant\nfor the Powershell module)."))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"oh-my-posh --print-shell\n")),(0,l.kt)(r.Z,{defaultValue:"powershell",groupId:"shell",values:[{label:"powershell",value:"powershell"},{label:"zsh",value:"zsh"},{label:"bash",value:"bash"},{label:"fish",value:"fish"},{label:"nu",value:"nu"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"powershell",mdxType:"TabItem"},(0,l.kt)("p",null,"Edit ",(0,l.kt)("inlineCode",{parentName:"p"},"$PROFILE")," in your preferred PowerShell version and add the following line."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"oh-my-posh --init --shell pwsh --config ~/.mytheme.omp.json | Invoke-Expression\n")),(0,l.kt)("p",null,"Once added, reload your profile for the changes to take effect."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},". $PROFILE\n"))),(0,l.kt)(s.Z,{value:"zsh",mdxType:"TabItem"},(0,l.kt)("p",null,"Add the following to ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.zshrc"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'eval "$(oh-my-posh --init --shell zsh --config ~/.mytheme.omp.json)"\n')),(0,l.kt)("p",null,"Once added, reload your profile for the changes to take effect."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"source ~/.zshrc\n"))),(0,l.kt)(s.Z,{value:"bash",mdxType:"TabItem"},(0,l.kt)("p",null,"Add the following to ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.bashrc")," (or ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.profile")," on MacOS):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'eval "$(oh-my-posh --init --shell bash --config ~/.mytheme.omp.json)"\n')),(0,l.kt)("p",null,"Once added, reload your profile for the changes to take effect."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},". ~/.bashrc\n")),(0,l.kt)("p",null,"Or, when using ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.profile"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},". ~/.profile\n"))),(0,l.kt)(s.Z,{value:"fish",mdxType:"TabItem"},(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"It's advised to be on the latest version of fish. Versions below 3.1.2 have issues displaying the prompt."))),(0,l.kt)("p",null,"Initialize Oh my Posh in ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.config/fish/config.fish"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"oh-my-posh --init --shell fish --config ~/.poshthemes/jandedobbeleer.omp.json | source\n")),(0,l.kt)("p",null,"Once added, reload your config for the changes to take effect."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},". ~/.config/fish/config.fish\n"))),(0,l.kt)(s.Z,{value:"nu",mdxType:"TabItem"},(0,l.kt)("p",null,"Set the prompt and restart nu shell:"),(0,l.kt)("h3",{id:"nu--0320"},"Nu < 0.32.0"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'config set prompt  "= `{{$(oh-my-posh --config ~/.poshthemes/jandedobbeleer.omp.json | str collect)}}`"\n')),(0,l.kt)("h3",{id:"nu--0320-1"},"Nu >= 0.32.0"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'config set prompt  "(oh-my-posh --config ~/.poshthemes/jandedobbeleer.omp.json | str collect)"\n')),(0,l.kt)("p",null,"Restart nu shell for the changes to take effect."))))}c.isMDXComponent=!0},266:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return m},metadata:function(){return c},toc:function(){return d},default:function(){return f}});var a=n(2122),o=n(9756),l=(n(7294),n(3905)),r=n(1395),s=n(8215),i=n(3452),p=n(4101),u=n(861),m={id:"windows",title:"Windows",sidebar_label:"\u229e Windows"},c={unversionedId:"windows",id:"windows",isDocsHomePage:!1,title:"Windows",description:"Setup your terminal",source:"@site/docs/install-windows.mdx",sourceDirName:".",slug:"/windows",permalink:"/docs/windows",editUrl:"https://github.com/jandedobbeleer/oh-my-posh/edit/main/docs/docs/install-windows.mdx",version:"current",sidebar_label:"\u229e Windows",frontMatter:{id:"windows",title:"Windows",sidebar_label:"\u229e Windows"},sidebar:"docs",previous:{title:"PowerShell",permalink:"/docs/pwsh"},next:{title:"macOS",permalink:"/docs/macos"}},d=[{value:"Setup your terminal",id:"setup-your-terminal",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Replace your existing prompt",id:"replace-your-existing-prompt",children:[]},{value:"Customize",id:"customize",children:[]}],h={toc:d};function f(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"setup-your-terminal"},"Setup your terminal"),(0,l.kt)("p",null,"While Oh my Posh works on the standard terminal, we advise using the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/microsoft/terminal"},"Windows Terminal"),"."),(0,l.kt)("h3",{id:"installation"},"Installation"),(0,l.kt)(r.Z,{defaultValue:"winget",groupId:"install",values:[{label:"winget",value:"winget"},{label:"scoop",value:"scoop"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"winget",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"winget install JanDeDobbeleer.OhMyPosh\n")),(0,l.kt)("p",null,"This installs a couple of things:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"oh-my-posh.exe")," - Windows executable, added to your ",(0,l.kt)("inlineCode",{parentName:"li"},"$PATH")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"oh-my-posh-wsl")," - Linux executable, added to your ",(0,l.kt)("inlineCode",{parentName:"li"},"$PATH")," for use in the WSL"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"themes")," - The latest Oh my Posh themes")),(0,l.kt)("p",null,"If you want to use a standard theme, you can find them in ",(0,l.kt)("inlineCode",{parentName:"p"},"~\\AppData\\Local\\Programs\\oh-my-posh\\themes\\"),",\nreferencing them as such\nwill always keep them compatible with the binary when updating Oh my Posh.")),(0,l.kt)(s.Z,{value:"scoop",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"scoop install https://github.com/JanDeDobbeleer/oh-my-posh/releases/latest/download/oh-my-posh.json\n")),(0,l.kt)("p",null,"This installs a couple of things:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"oh-my-posh.exe")," - Windows executable, added to your ",(0,l.kt)("inlineCode",{parentName:"li"},"$PATH")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"oh-my-posh-wsl")," - Linux executable, added to your ",(0,l.kt)("inlineCode",{parentName:"li"},"$PATH")," for use in the WSL"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"themes")," - The latest Oh my Posh themes")),(0,l.kt)("p",null,"If you want to use a standard theme, you can find them in ",(0,l.kt)("inlineCode",{parentName:"p"},"~\\scoop\\apps\\oh-my-posh\\current\\themes\\"),",\nreferencing them as such\nwill always keep them compatible with the binary when updating Oh my Posh."))),(0,l.kt)("p",null,"For the ",(0,l.kt)("inlineCode",{parentName:"p"},"$PATH")," to reload, a reboot is advised."),(0,l.kt)("h3",{id:"usage"},"Usage"),(0,l.kt)("h4",{id:"preview-the-themes"},"Preview the themes"),(0,l.kt)(r.Z,{defaultValue:"winget",groupId:"install",values:[{label:"winget",value:"winget"},{label:"scoop",value:"scoop"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"winget",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},'Get-ChildItem -Path "~\\AppData\\Local\\Programs\\oh-my-posh\\themes\\*" -Include \'*.omp.json\' | Sort-Object Name | ForEach-Object -Process {\n    $esc = [char]27\n    Write-Host ""\n    Write-Host "$esc[1m$($_.BaseName)$esc[0m"\n    Write-Host ""\n    oh-my-posh --config $($_.FullName) --pwd $PWD\n    Write-Host ""\n}\n'))),(0,l.kt)(s.Z,{value:"scoop",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},'Get-ChildItem -Path "$(scoop prefix oh-my-posh)\\themes\\*" -Include \'*.omp.json\' | Sort-Object Name | ForEach-Object -Process {\n    $esc = [char]27\n    Write-Host ""\n    Write-Host "$esc[1m$($_.BaseName)$esc[0m"\n    Write-Host ""\n    oh-my-posh --config $($_.FullName) --pwd $PWD\n    Write-Host ""\n}\n')))),(0,l.kt)("h4",{id:"update"},"Update"),(0,l.kt)(r.Z,{defaultValue:"winget",groupId:"install",values:[{label:"winget",value:"winget"},{label:"scoop",value:"scoop"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"winget",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"winget upgrade JanDeDobbeleer.OhMyPosh\n"))),(0,l.kt)(s.Z,{value:"scoop",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"scoop update oh-my-posh\n")))),(0,l.kt)("h3",{id:"replace-your-existing-prompt"},"Replace your existing prompt"),(0,l.kt)(r.Z,{defaultValue:"winget",groupId:"install",values:[{label:"winget",value:"winget"},{label:"scoop",value:"scoop"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"winget",mdxType:"TabItem"},(0,l.kt)("p",null,"You can find the themes scoop installs inside the ",(0,l.kt)("inlineCode",{parentName:"p"},"~\\AppData\\Local\\Programs\\oh-my-posh\\themes\\")," folder.\nTo use ",(0,l.kt)("inlineCode",{parentName:"p"},"jandedobbeleer.omp.json")," for example, you can refer to it using ",(0,l.kt)("inlineCode",{parentName:"p"},'~\\AppData\\Local\\Programs\\oh-my-posh\\themes\\jandedobbeleer.omp.json"'),"\nwhen setting the prompt using the ",(0,l.kt)("inlineCode",{parentName:"p"},"--config")," flag.")),(0,l.kt)(s.Z,{value:"scoop",mdxType:"TabItem"},(0,l.kt)("p",null,"You can find the themes scoop installs inside the ",(0,l.kt)("inlineCode",{parentName:"p"},'"$(scoop prefix oh-my-posh)\\themes\\"')," folder.\nTo use ",(0,l.kt)("inlineCode",{parentName:"p"},"jandedobbeleer.omp.json")," for example, you can refer to it using ",(0,l.kt)("inlineCode",{parentName:"p"},'"$(scoop prefix oh-my-posh)\\themes\\jandedobbeleer.omp.json"'),"\nwhen setting the prompt using the ",(0,l.kt)("inlineCode",{parentName:"p"},"--config")," flag."))),(0,l.kt)("p",null,"The guides below use an imaginary theme called ",(0,l.kt)("inlineCode",{parentName:"p"},"mytheme.omp.json"),", so make sure to replace that with your own, or one of the\nincluded themes."),(0,l.kt)(i.default,{mdxType:"Shells"}),(0,l.kt)("h3",{id:"customize"},"Customize"),(0,l.kt)(p.default,{mdxType:"Customize"}),(0,l.kt)(u.default,{mdxType:"CustomizeCmd"}),(0,l.kt)("p",null,"\ud83c\udf89\ud83c\udf89\ud83c\udf89"))}f.isMDXComponent=!0},6010:function(e,t,n){"use strict";function a(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:function(){return o}})}}]);