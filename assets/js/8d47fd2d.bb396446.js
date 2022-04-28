"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[3349],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return r?n.createElement(k,o(o({ref:t},c),{},{components:r})):n.createElement(k,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},90:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return d}});var n=r(7462),a=r(3366),l=(r(7294),r(3905)),o=["components"],i={title:"PlaceholderAPI",sidebar_position:5},s=void 0,p={unversionedId:"ecoskills/placeholderapi",id:"ecoskills/placeholderapi",title:"PlaceholderAPI",description:"| Placeholder                               | Description                                                                              |",source:"@site/docs/ecoskills/placeholderapi.md",sourceDirName:"ecoskills",slug:"/ecoskills/placeholderapi",permalink:"/ecoskills/placeholderapi",editUrl:"https://github.com/Auxilor/docs/tree/main/packages/create-docusaurus/templates/shared/docs/ecoskills/placeholderapi.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"PlaceholderAPI",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Effects",permalink:"/ecoskills/effects"},next:{title:"API",permalink:"/ecoskills/api"}},c={},d=[],u={toc:d};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Placeholder"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"%ecoskills_average_skill_level%")),(0,l.kt)("td",{parentName:"tr",align:null},"The average skill level for a player")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"%ecoskills_total_skill_level%")),(0,l.kt)("td",{parentName:"tr",align:null},"The total skill level for a player: all skill levels added together")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"%ecoskills_<id>%")),(0,l.kt)("td",{parentName:"tr",align:null},"Get the level that a player has for any given effect, stat, or skill")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"%ecoskills_<id>_numeral%")),(0,l.kt)("td",{parentName:"tr",align:null},"Get the level that a player has for any given effect, stat, or skill, as a roman numeral")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"%ecoskills_<stat>_name%")),(0,l.kt)("td",{parentName:"tr",align:null},"Get the formatted name (icon and color) of any stat. Used internally for configuration")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"%ecoskills_<stat>_base%")),(0,l.kt)("td",{parentName:"tr",align:null},"Get the base level that a player has for any stat (before modifiers are applied)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"%ecoskills_<stat>_bonus%")),(0,l.kt)("td",{parentName:"tr",align:null},"Get the bonus levels that a player has for any stat (from modifiers)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"%ecoskills_<skill>_percentage_progress%")),(0,l.kt)("td",{parentName:"tr",align:null},"Shows the percentage progress until the next skill level")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"%ecoskills_<skill>_current_xp%")),(0,l.kt)("td",{parentName:"tr",align:null},"Shows the current skill XP")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"%ecoskills_<skill>_required_xp%")),(0,l.kt)("td",{parentName:"tr",align:null},"Shows the skill XP required for the next level")))))}m.isMDXComponent=!0}}]);