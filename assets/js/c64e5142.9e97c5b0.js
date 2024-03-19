"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[41298],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(r),f=o,m=d["".concat(u,".").concat(f)]||d[f]||l[f]||i;return r?n.createElement(m,a(a({ref:t},s),{},{components:r})):n.createElement(m,a({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},32227:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return l}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],c={title:"API",sidebar_position:5},u=void 0,p={unversionedId:"ecopets/api",id:"ecopets/api",title:"API",description:"Source Code",source:"@site/docs/ecopets/api.md",sourceDirName:"ecopets",slug:"/ecopets/api",permalink:"/ecopets/api",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/ecopets/api.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"API",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Commands and Permissions",permalink:"/ecopets/commands-and-permissions"},next:{title:"EcoJobs",permalink:"/ecojobs/"}},s={},l=[{value:"Source Code",id:"source-code",level:2},{value:"API",id:"api",level:2}],d={toc:l};function f(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"source-code"},"Source Code"),(0,i.kt)("p",null,"The source code can be found ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Auxilor/EcoPets"},"here"),":"),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)("p",null,"Add this to your build.gradle.kts:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kts"},'repositories {\n    maven("https://repo.auxilor.io/repository/maven-public/")\n}\n\ndependencies {\n    compileOnly("com.willfp:EcoPets:<version>")\n}\n')),(0,i.kt)("p",null,"The latest version available on the repo can be found ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Auxilor/EcoPets/tags"},"here")))}f.isMDXComponent=!0}}]);