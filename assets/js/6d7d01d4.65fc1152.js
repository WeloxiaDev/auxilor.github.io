"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[29926],{3905:function(e,r,o){o.d(r,{Zo:function(){return f},kt:function(){return d}});var t=o(67294);function n(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}function a(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,t)}return o}function i(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?a(Object(o),!0).forEach((function(r){n(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}function p(e,r){if(null==e)return{};var o,t,n=function(e,r){if(null==e)return{};var o,t,n={},a=Object.keys(e);for(t=0;t<a.length;t++)o=a[t],r.indexOf(o)>=0||(n[o]=e[o]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)o=a[t],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=t.createContext({}),l=function(e){var r=t.useContext(s),o=r;return e&&(o="function"==typeof e?e(r):i(i({},r),e)),o},f=function(e){var r=l(e.components);return t.createElement(s.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},c=t.forwardRef((function(e,r){var o=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,f=p(e,["components","mdxType","originalType","parentName"]),c=l(o),d=n,g=c["".concat(s,".").concat(d)]||c[d]||m[d]||a;return o?t.createElement(g,i(i({ref:r},f),{},{components:o})):t.createElement(g,i({ref:r},f))}));function d(e,r){var o=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=c;var p={};for(var s in r)hasOwnProperty.call(r,s)&&(p[s]=r[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var l=2;l<a;l++)i[l]=o[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,o)}c.displayName="MDXCreateElement"},92309:function(e,r,o){o.r(r),o.d(r,{assets:function(){return f},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return m}});var t=o(87462),n=o(63366),a=(o(67294),o(3905)),i=["components"],p={title:"Commands and Permissions",sidebar_position:4},s=void 0,l={unversionedId:"reforges/commands-and-permissions",id:"reforges/commands-and-permissions",title:"Commands and Permissions",description:"/reforge, /reforges open",source:"@site/docs/reforges/commands-and-permissions.md",sourceDirName:"reforges",slug:"/reforges/commands-and-permissions",permalink:"/reforges/commands-and-permissions",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/reforges/commands-and-permissions.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Commands and Permissions",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"has_reforge",permalink:"/reforges/reforges-effects/conditions/has_reforge"},next:{title:"API",permalink:"/reforges/api"}},f={},m=[{value:"<code>/reforge, /reforges open &lt;player&gt;</code>",id:"reforge-reforges-open-player",level:2},{value:"<code>/reforges give (Give a player a reforge stone)</code>",id:"reforges-give-give-a-player-a-reforge-stone",level:2},{value:"<code>/reforges apply (Apply a reforge to a held item)</code>",id:"reforges-apply-apply-a-reforge-to-a-held-item",level:2},{value:"<code>/reforges import</code> (Import a reforge from lrcdb)",id:"reforges-import-import-a-reforge-from-lrcdb",level:2},{value:"<code>/reforges export</code> (Export a reforge to lrcdb)",id:"reforges-export-export-a-reforge-to-lrcdb",level:2}],c={toc:m};function d(e){var r=e.components,o=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,t.Z)({},c,o,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"reforge-reforges-open-player"},(0,a.kt)("inlineCode",{parentName:"h2"},"/reforge, /reforges open <player>")),(0,a.kt)("p",null,"Permission to open for yourself: ",(0,a.kt)("inlineCode",{parentName:"p"},"reforges.command.reforge")),(0,a.kt)("p",null,"Permission to open for someone else: ",(0,a.kt)("inlineCode",{parentName:"p"},"reforges.command.open")),(0,a.kt)("h2",{id:"reforges-give-give-a-player-a-reforge-stone"},(0,a.kt)("inlineCode",{parentName:"h2"},"/reforges give (Give a player a reforge stone)")),(0,a.kt)("p",null,"Permission: ",(0,a.kt)("inlineCode",{parentName:"p"},"reforges.command.give")),(0,a.kt)("p",null,"General usage: ",(0,a.kt)("inlineCode",{parentName:"p"},"/reforges give <player> <stone> [amount]")),(0,a.kt)("p",null,"For example, to give a player 2 Lavish reforge stones: ",(0,a.kt)("inlineCode",{parentName:"p"},"/reforges give <player> lavish 2")),(0,a.kt)("h2",{id:"reforges-apply-apply-a-reforge-to-a-held-item"},(0,a.kt)("inlineCode",{parentName:"h2"},"/reforges apply (Apply a reforge to a held item)")),(0,a.kt)("p",null,"Permission: ",(0,a.kt)("inlineCode",{parentName:"p"},"reforges.command.apply")),(0,a.kt)("p",null,"General usage: ",(0,a.kt)("inlineCode",{parentName:"p"},"/reforges apply <reforge> [player]")),(0,a.kt)("h2",{id:"reforges-import-import-a-reforge-from-lrcdb"},(0,a.kt)("inlineCode",{parentName:"h2"},"/reforges import")," (Import a reforge from ",(0,a.kt)("a",{parentName:"h2",href:"https://lrcdb.auxilor.io/"},"lrcdb"),")"),(0,a.kt)("p",null,"Permission: ",(0,a.kt)("inlineCode",{parentName:"p"},"reforges.command.import")),(0,a.kt)("p",null,"General Usage: ",(0,a.kt)("inlineCode",{parentName:"p"},"/reforges import <id>")),(0,a.kt)("p",null,"Find reforges on ",(0,a.kt)("a",{parentName:"p",href:"https://lrcdb.auxilor.io/"},"lrcdb")),(0,a.kt)("h2",{id:"reforges-export-export-a-reforge-to-lrcdb"},(0,a.kt)("inlineCode",{parentName:"h2"},"/reforges export")," (Export a reforge to ",(0,a.kt)("a",{parentName:"h2",href:"https://lrcdb.auxilor.io/"},"lrcdb"),")"),(0,a.kt)("p",null,"Permission: ",(0,a.kt)("inlineCode",{parentName:"p"},"reforges.command.export")),(0,a.kt)("p",null,"General Usage: ",(0,a.kt)("inlineCode",{parentName:"p"},"/reforges export <id>")))}d.isMDXComponent=!0}}]);