"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[2264],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var f=n.createContext({}),l=function(e){var t=n.useContext(f),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(f.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,f=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=l(r),d=a,p=s["".concat(f,".").concat(d)]||s[d]||m[d]||o;return r?n.createElement(p,i(i({ref:t},u),{},{components:r})):n.createElement(p,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=s;var c={};for(var f in t)hasOwnProperty.call(t,f)&&(c[f]=t[f]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},2793:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return f},default:function(){return d},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return m}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],c={},f="damage_mainhand",l={unversionedId:"effects/all-effects/damage_mainhand",id:"effects/all-effects/damage_mainhand",title:"damage_mainhand",description:"Triggered Effect",source:"@site/docs/effects/all-effects/damage_mainhand.md",sourceDirName:"effects/all-effects",slug:"/effects/all-effects/damage_mainhand",permalink:"/effects/all-effects/damage_mainhand",editUrl:"https://github.com/Auxilor/docs/tree/main/packages/create-docusaurus/templates/shared/docs/effects/all-effects/damage_mainhand.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"damage_armor",permalink:"/effects/all-effects/damage_armor"},next:{title:"damage_multiplier",permalink:"/effects/all-effects/damage_multiplier"}},u={},m=[{value:"Triggered Effect",id:"triggered-effect",level:4}],s={toc:m};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"damage_mainhand"},(0,o.kt)("inlineCode",{parentName:"h1"},"damage_mainhand")),(0,o.kt)("h4",{id:"triggered-effect"},"Triggered Effect"),(0,o.kt)("p",null,"Damage a victim's mainhand item"),(0,o.kt)("h1",{id:"example-config"},"Example Config"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"- id: damage_mainhand\n  args:\n    damage: 1 # The amount of damage to deal\n  ...other config (eg triggers, filters, mutators, etc)\n")))}d.isMDXComponent=!0}}]);