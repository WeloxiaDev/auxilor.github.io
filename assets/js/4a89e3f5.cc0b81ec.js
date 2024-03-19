"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[89988],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),f=i,g=m["".concat(c,".").concat(f)]||m[f]||p[f]||r;return n?a.createElement(g,o(o({ref:t},u),{},{components:n})):a.createElement(g,o({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},11184:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=["components"],l={title:"How to configure Magic",sidebar_position:4},c=void 0,s={unversionedId:"ecoskills/how-to-configure-magic",id:"ecoskills/how-to-configure-magic",title:"How to configure Magic",description:"Magic",source:"@site/docs/ecoskills/how-to-configure-magic.md",sourceDirName:"ecoskills",slug:"/ecoskills/how-to-configure-magic",permalink:"/ecoskills/how-to-configure-magic",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/ecoskills/how-to-configure-magic.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"How to configure Magic",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"How to make an Effect",permalink:"/ecoskills/how-to-make-an-effect"},next:{title:"add_stat",permalink:"/ecoskills/ecoskills-effects/effects/add_stat"}},u={},p=[{value:"Magic",id:"magic",level:2},{value:"Default configs",id:"default-configs",level:2},{value:"How to add magic types",id:"how-to-add-magic-types",level:2},{value:"Example Magic Config",id:"example-magic-config",level:2},{value:"Understanding all the sections",id:"understanding-all-the-sections",level:2},{value:"Using Magic in Effects",id:"using-magic-in-effects",level:2},{value:"Optional Effect Arguments",id:"optional-effect-arguments",level:3},{value:"<code>&lt;magic&gt;_cost</code>",id:"magic_cost",level:6},{value:"<code>price</code>",id:"price",level:6}],m={toc:p};function f(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"magic"},"Magic"),(0,r.kt)("p",null,"Magic is an optional feature in EcoSkills that provide the ability to create naturally regenerating\namounts of things like Mana, which can then be used in other plugins, for example in EcoItems or EcoEnchants."),(0,r.kt)("h2",{id:"default-configs"},"Default configs"),(0,r.kt)("p",null,"The default configs can be found ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Auxilor/EcoSkills/tree/master/eco-core/core-plugin/src/main/resources/skills"},"here"),"."),(0,r.kt)("h2",{id:"how-to-add-magic-types"},"How to add magic types"),(0,r.kt)("p",null,"Each magic type is its own config file, placed in the ",(0,r.kt)("inlineCode",{parentName:"p"},"/magic_types/")," folder, and you can add or remove them as you please. There's an example config called ",(0,r.kt)("inlineCode",{parentName:"p"},"_example.yml")," to help you out!"),(0,r.kt)("p",null,"The ID of the Magic is the file name. This is what you use in commands, effects and placeholders.\nID's must be lowercase letters, numbers, and underscores only."),(0,r.kt)("h2",{id:"example-magic-config"},"Example Magic Config"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'name: "&#40ffe6\ud83c\udf0a Mana" # The name of the magic type, shown to players\n\n# The rate at which the magic type regenerates per second\nregen-rate: "0.02 * %ecoskills_mana_limit%"\n\n# The maximum amount of this type a player can have\nlimit: "100 + %ecoskills_wisdom%"\n\n# If players should join with full magic (true) or empty magic (false)\njoin-on-full: true\n')),(0,r.kt)("h2",{id:"understanding-all-the-sections"},"Understanding all the sections"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"name:")," The name of the magic in-game."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"regen-rate:")," The rate that the magic regenerates per second."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"limit:")," The maximum amount of magic the player can have."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"join-on-full:")," If the player's magic should be full when they join the server (true/false)."),(0,r.kt)("h2",{id:"using-magic-in-effects"},"Using Magic in Effects"),(0,r.kt)("p",null,"You can use your magic in other plugins by utilising the ",(0,r.kt)("a",{parentName:"p",href:"https://plugins.auxilor.io/all-plugins/prices"},"price")," system."),(0,r.kt)("h3",{id:"optional-effect-arguments"},"Optional Effect Arguments"),(0,r.kt)("p",null,"You can use optional effect arguments to use magic in your effects: "),(0,r.kt)("h6",{id:"magic_cost"},(0,r.kt)("inlineCode",{parentName:"h6"},"<magic>_cost")),(0,r.kt)("p",null,"The magic cost (e.g. mana) required to use or activate this effect."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"args:\n  mana_cost: 10\n")),(0,r.kt)("h6",{id:"price"},(0,r.kt)("inlineCode",{parentName:"h6"},"price")),(0,r.kt)("p",null,"The price required to use or activate this effect."),(0,r.kt)("p",null,"This supports all known prices: supports money, items, points, second currencies, etc.\nRead more about the system here: ",(0,r.kt)("a",{parentName:"p",href:"https://plugins.auxilor.io/all-plugins/prices"},"Prices")),(0,r.kt)("p",null,"Looks like this in config:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'args:\n  price:\n    value: 100 * %v%\n    type: mana\n    display: "&#40ffe6%value% \ud83c\udf0a Mana"\n')))}f.isMDXComponent=!0}}]);