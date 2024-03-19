"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[62733],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return g}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),f=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=f(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=f(r),g=o,m=u["".concat(l,".").concat(g)]||u[g]||p[g]||a;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var f=2;f<a;f++)i[f]=r[f];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7754:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return s},metadata:function(){return f},toc:function(){return p}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],s={title:"How to make a custom reforge",sidebar_position:2},l=void 0,f={unversionedId:"reforges/how-to-make-a-custom-reforge",id:"reforges/how-to-make-a-custom-reforge",title:"How to make a custom reforge",description:"Default configs",source:"@site/docs/reforges/how-to-make-a-custom-reforge.md",sourceDirName:"reforges",slug:"/reforges/how-to-make-a-custom-reforge",permalink:"/reforges/how-to-make-a-custom-reforge",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/reforges/how-to-make-a-custom-reforge.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"How to make a custom reforge",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"The Gameplay",permalink:"/reforges/the-gameplay"},next:{title:"has_reforge",permalink:"/reforges/reforges-effects/conditions/has_reforge"}},c={},p=[{value:"Default configs",id:"default-configs",level:2},{value:"How to add reforges",id:"how-to-add-reforges",level:2},{value:"Example Reforge Config",id:"example-reforge-config",level:2},{value:"Understanding all the sections",id:"understanding-all-the-sections",level:2},{value:"Stone",id:"stone",level:3},{value:"Effects &amp; Conditions",id:"effects--conditions",level:3}],u={toc:p};function g(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"default-configs"},"Default configs"),(0,a.kt)("p",null,"The default configs can be found ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Auxilor/Reforges/tree/master/eco-core/core-plugin/src/main/resources/reforges"},"here"),".\nYou can find additional user-created configs on ",(0,a.kt)("a",{parentName:"p",href:"https://lrcdb.auxilor.io/"},"lrcdb"),"."),(0,a.kt)("h2",{id:"how-to-add-reforges"},"How to add reforges"),(0,a.kt)("p",null,"Each reforge is its own config file, placed in the ",(0,a.kt)("inlineCode",{parentName:"p"},"/reforges/")," folder, and you can add or remove them as you please. There's an example config called ",(0,a.kt)("inlineCode",{parentName:"p"},"_example.yml")," to help you out!"),(0,a.kt)("p",null,"The ID of the reforge is the file name. This is what you use in commands and in the ",(0,a.kt)("a",{parentName:"p",href:"https://plugins.auxilor.io/all-plugins/the-item-lookup-system"},"Item Lookup System"),".\nID's must be lowercase letters, numbers, and underscores only."),(0,a.kt)("h2",{id:"example-reforge-config"},"Example Reforge Config"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'name: "<gradient:#AAFFA9>Dynamic</gradient:#11FFBD>" # The display name for the reforge\ndescription: # The lore to add to an item with this reforge:\n- "&a+5% &fDamage"\n- "&a+10% &fCrit Damage"\ntargets: # The targets that this reforge can be applied to\n- melee\n\nprice: # (Optional) The price required to apply this reforge, overrides the default reforge price\n  value: 100000\n  type: coins # See here: https://plugins.auxilor.io/all-plugins/prices\n  display: "&6$%value%"\n\n# Options for the reforge stone\nstone:\n  enabled: true # If this reforge requires the use of a reforge stone\n  name: "<gradient:#AAFFA9>Dynamic</gradient:#11FFBD>&f Reforge Stone" # The display name of the stone\n  lore: # The lore of the stone\n  - "&7Place on the right of the"\n  - "&7reforge menu to apply the"\n  - "<gradient:#AAFFA9>Dynamic</gradient:#11FFBD>&7 reforge!"\n  item: player_head texture:eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvMmM0YTY1YzY4OWIyZDM2NDA5MTAwYTYwYzJhYjhkM2QwYTY3Y2U5NGVlYTNjMWY3YWM5NzRmZDg5MzU2OGI1ZCJ9fX0=\n  craftable: true # If the reforge stone should be craftable\n\n  recipe: # The recipe, read here for more: https://plugins.auxilor.io/all-plugins/the-item-lookup-system#crafting-recipes\n    - ""\n    - ecoitems:blank_reforge_stone ? air\n    - ""\n  \n    - iron_block\n    - daylight_sensor\n    - iron_block\n  \n    - ""\n    - phantom_membrane\n    - ""\n\n# The effects of the reforge (i.e. the functionality)\n# See here: https://plugins.auxilor.io/effects/configuring-an-effect\neffects:\n  - id: damage_multiplier\n    args:\n      multiplier: 1.05\n    triggers:\n    - melee_attack\n  - id: crit_multiplier\n    args:\n      multiplier: 1.1\n    triggers:\n    - melee_attack\n\n# The conditions required to use the reforge\nconditions: [ ]\n\n# Effects to run when the reforge is applied to an item.\non-reforge-effects: [ ]\n')),(0,a.kt)("h2",{id:"understanding-all-the-sections"},"Understanding all the sections"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"name:")," The name of the reforge, shown in lore and in the display name"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"description:")," The reforge description shown in-game. Set to ",(0,a.kt)("inlineCode",{parentName:"p"},"description: []")," to remove all lines."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"targets:")," The items this reforge can be applied to, from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Auxilor/Reforges/blob/master/eco-core/core-plugin/src/main/resources/target.yml"},"targets.yml"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"price:")," The price to apply the reforge, read here for more info: ",(0,a.kt)("a",{parentName:"p",href:"https://plugins.auxilor.io/all-plugins/prices"},"Prices")),(0,a.kt)("h3",{id:"stone"},"Stone"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"enabled:")," If a reforge stone is required for this reforge (true/false)."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"name:")," The item name in-game."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"lore:")," The item lore shown in-game. Set to ",(0,a.kt)("inlineCode",{parentName:"p"},"lore: []")," to remove all lore lines."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"item:")," The base stone item, read here for more: ",(0,a.kt)("a",{parentName:"p",href:"https://plugins.auxilor.io/all-plugins/the-item-lookup-system"},"Item Lookup System"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"craftable:")," If the stone should be craftable (true/false)."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"recipe:")," The recipe, read here for more info: ",(0,a.kt)("a",{parentName:"p",href:"https://plugins.auxilor.io/all-plugins/the-item-lookup-system#crafting-recipes"},"Crafting Recipes")),(0,a.kt)("h3",{id:"effects--conditions"},"Effects & Conditions"),(0,a.kt)("p",null,"The effects section is the core functionality of the EcoItem. You can configure effects, conditions, filters, mutators and triggers in this section to run whilst the item is held or used."),(0,a.kt)("p",null,"Check out ",(0,a.kt)("a",{parentName:"p",href:"https://plugins.auxilor.io/effects/configuring-an-effect"},"Configuring an Effect")," to understand how to configure this section correctly."),(0,a.kt)("p",null,"For more advanced users or setups, you can configure chains in this section to string together different effects under one trigger. Check out ",(0,a.kt)("a",{parentName:"p",href:"https://plugins.auxilor.io/effects/configuring-a-chain"},"Configuring an Effect Chain")," for more info."))}g.isMDXComponent=!0}}]);