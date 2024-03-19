"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[77820],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return u}});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),p=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=p(e.components);return o.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(t),u=r,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||a;return t?o.createElement(h,s(s({ref:n},c),{},{components:t})):o.createElement(h,s({ref:n},c))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,s=new Array(a);s[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<a;p++)s[p]=t[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},15665:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return d}});var o=t(87462),r=t(63366),a=(t(67294),t(3905)),s=["components"],i={title:"Commands and Permissions",sidebar_position:5},l=void 0,p={unversionedId:"ecoshop/commands-and-permissions",id:"ecoshop/commands-and-permissions",title:"Commands and Permissions",description:"/ecoshop reload (Reload the plugin)",source:"@site/docs/ecoshop/commands-and-permissions.md",sourceDirName:"ecoshop",slug:"/ecoshop/commands-and-permissions",permalink:"/ecoshop/commands-and-permissions",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/ecoshop/commands-and-permissions.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Commands and Permissions",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"EcoShop Triggers",permalink:"/ecoshop/ecoshop-effects/triggers/"},next:{title:"API",permalink:"/ecoshop/api"}},c={},d=[{value:"<code>/ecoshop reload</code> (Reload the plugin)",id:"ecoshop-reload-reload-the-plugin",level:2},{value:"<code>/ecoshop resetbuys</code> (Resets how many times a player has bought an item)",id:"ecoshop-resetbuys-resets-how-many-times-a-player-has-bought-an-item",level:2},{value:"<code>/sell</code> (Opens the Sell GUI)",id:"sell-opens-the-sell-gui",level:2},{value:"<code>/sell hand/all/handall</code> (Sells items directly)",id:"sell-handallhandall-sells-items-directly",level:2}],m={toc:d};function u(e){var n=e.components,t=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"ecoshop-reload-reload-the-plugin"},(0,a.kt)("inlineCode",{parentName:"h2"},"/ecoshop reload")," (Reload the plugin)"),(0,a.kt)("p",null,"Permission: ",(0,a.kt)("inlineCode",{parentName:"p"},"ecoshop.command.reload")),(0,a.kt)("h2",{id:"ecoshop-resetbuys-resets-how-many-times-a-player-has-bought-an-item"},(0,a.kt)("inlineCode",{parentName:"h2"},"/ecoshop resetbuys")," (Resets how many times a player has bought an item)"),(0,a.kt)("p",null,"Permission: ",(0,a.kt)("inlineCode",{parentName:"p"},"ecoshop.command.resetbuys")),(0,a.kt)("p",null,"General Usage: ",(0,a.kt)("inlineCode",{parentName:"p"},"/ecoshop resetbuys <player> <id>")),(0,a.kt)("h2",{id:"sell-opens-the-sell-gui"},(0,a.kt)("inlineCode",{parentName:"h2"},"/sell")," (Opens the Sell GUI)"),(0,a.kt)("p",null,"Permission: ",(0,a.kt)("inlineCode",{parentName:"p"},"ecoshop.command.sell")),(0,a.kt)("h2",{id:"sell-handallhandall-sells-items-directly"},(0,a.kt)("inlineCode",{parentName:"h2"},"/sell hand/all/handall")," (Sells items directly)"),(0,a.kt)("p",null,"Permissions: ",(0,a.kt)("inlineCode",{parentName:"p"},"ecoshop.command.sell.hand"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ecoshop.command.sell.all"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ecoshop.command.sell.handall")),(0,a.kt)("h1",{id:"other-commands-and-permissions"},"Other Commands and Permissions"),(0,a.kt)("p",null,"Shops each have their own command that you specify in config,\nand they have the ",(0,a.kt)("inlineCode",{parentName:"p"},"ecoshop.open.<id>")," permission, for example ",(0,a.kt)("inlineCode",{parentName:"p"},"/shop")," would\nhave ",(0,a.kt)("inlineCode",{parentName:"p"},"ecoshop.open.shop")," as its permission."),(0,a.kt)("p",null,"If you want to make buying/selling an item require a permission,\nthe permission nodes are ",(0,a.kt)("inlineCode",{parentName:"p"},"ecoshop.buy.<id>")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"ecoshop.sell.<id>"),".\nBy default, all players have this permission."))}u.isMDXComponent=!0}}]);