"use strict";(self.webpackChunkauxilor_docs=self.webpackChunkauxilor_docs||[]).push([[56025],{3905:function(e,o,n){n.d(o,{Zo:function(){return p},kt:function(){return d}});var t=n(67294);function r(e,o,n){return o in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n,e}function i(e,o){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{};o%2?i(Object(n),!0).forEach((function(o){r(e,o,n[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))}))}return e}function l(e,o){if(null==e)return{};var n,t,r=function(e,o){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],o.indexOf(n)>=0||(r[n]=e[n]);return r}(e,o);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],o.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=t.createContext({}),c=function(e){var o=t.useContext(s),n=o;return e&&(n="function"==typeof e?e(o):a(a({},o),e)),n},p=function(e){var o=c(e.components);return t.createElement(s.Provider,{value:o},e.children)},m={inlineCode:"code",wrapper:function(e){var o=e.children;return t.createElement(t.Fragment,{},o)}},b=t.forwardRef((function(e,o){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=c(n),d=r,j=b["".concat(s,".").concat(d)]||b[d]||m[d]||i;return n?t.createElement(j,a(a({ref:o},p),{},{components:n})):t.createElement(j,a({ref:o},p))}));function d(e,o){var n=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=b;var l={};for(var s in o)hasOwnProperty.call(o,s)&&(l[s]=o[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}b.displayName="MDXCreateElement"},50780:function(e,o,n){n.r(o),n.d(o,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return m}});var t=n(87462),r=n(63366),i=(n(67294),n(3905)),a=["components"],l={title:"Commands and Permissions",sidebar_position:4},s=void 0,c={unversionedId:"ecojobs/commands-and-permissions",id:"ecojobs/commands-and-permissions",title:"Commands and Permissions",description:"/ecojobs unlock (Unlock a job)",source:"@site/docs/ecojobs/commands-and-permissions.md",sourceDirName:"ecojobs",slug:"/ecojobs/commands-and-permissions",permalink:"/ecojobs/commands-and-permissions",editUrl:"https://github.com/Auxilor/auxilor.github.io/tree/master/docs/ecojobs/commands-and-permissions.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Commands and Permissions",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"PlaceholderAPI",permalink:"/ecojobs/placeholderapi"},next:{title:"API",permalink:"/ecojobs/api"}},p={},m=[{value:"<code>/ecojobs unlock</code> (Unlock a job)",id:"ecojobs-unlock-unlock-a-job",level:2},{value:"<code>/ecojobs reset</code> (Reset a job)",id:"ecojobs-reset-reset-a-job",level:2},{value:"<code>/ecojobs givexp</code> (Give xp to a job)",id:"ecojobs-givexp-give-xp-to-a-job",level:2},{value:"<code>/jobs</code> (Open the jobs menu)",id:"jobs-open-the-jobs-menu",level:2},{value:"<code>/jobs join</code> (Join a job)",id:"jobs-join-join-a-job",level:2},{value:"<code>/jobs leave</code> (Leave a job)",id:"jobs-leave-leave-a-job",level:2},{value:"<code>/ecojobs import</code> (Import a job from lrcdb)",id:"ecojobs-import-import-a-job-from-lrcdb",level:2},{value:"<code>/ecojobs export</code> (Export a job to lrcdb)",id:"ecojobs-export-export-a-job-to-lrcdb",level:2},{value:"<code>ecojobs.limit.&lt;limit&gt;</code>",id:"ecojobslimitlimit",level:2}],b={toc:m};function d(e){var o=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,t.Z)({},b,n,{components:o,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"ecojobs-unlock-unlock-a-job"},(0,i.kt)("inlineCode",{parentName:"h2"},"/ecojobs unlock")," (Unlock a job)"),(0,i.kt)("p",null,"Permission: ",(0,i.kt)("inlineCode",{parentName:"p"},"ecojobs.command.unlock")),(0,i.kt)("p",null,"Usage: ",(0,i.kt)("inlineCode",{parentName:"p"},"/ecojobs unlock <player> <job>")),(0,i.kt)("h2",{id:"ecojobs-reset-reset-a-job"},(0,i.kt)("inlineCode",{parentName:"h2"},"/ecojobs reset")," (Reset a job)"),(0,i.kt)("p",null,"Permission: ",(0,i.kt)("inlineCode",{parentName:"p"},"ecojobs.command.reset")),(0,i.kt)("p",null,"Usage: ",(0,i.kt)("inlineCode",{parentName:"p"},"/ecojobs reset <player> <job>")),(0,i.kt)("h2",{id:"ecojobs-givexp-give-xp-to-a-job"},(0,i.kt)("inlineCode",{parentName:"h2"},"/ecojobs givexp")," (Give xp to a job)"),(0,i.kt)("p",null,"Permission: ",(0,i.kt)("inlineCode",{parentName:"p"},"ecojobs.command.givexp")),(0,i.kt)("p",null,"Usage: ",(0,i.kt)("inlineCode",{parentName:"p"},"/ecojobs givexp <player> <job> <amount>")),(0,i.kt)("h2",{id:"jobs-open-the-jobs-menu"},(0,i.kt)("inlineCode",{parentName:"h2"},"/jobs")," (Open the jobs menu)"),(0,i.kt)("p",null,"Permission: ",(0,i.kt)("inlineCode",{parentName:"p"},"ecojobs.command.jobs")),(0,i.kt)("h2",{id:"jobs-join-join-a-job"},(0,i.kt)("inlineCode",{parentName:"h2"},"/jobs join")," (Join a job)"),(0,i.kt)("p",null,"Permission: ",(0,i.kt)("inlineCode",{parentName:"p"},"ecojobs.command.join")),(0,i.kt)("p",null,"Usage: ",(0,i.kt)("inlineCode",{parentName:"p"},"/jobs join <job>")),(0,i.kt)("h2",{id:"jobs-leave-leave-a-job"},(0,i.kt)("inlineCode",{parentName:"h2"},"/jobs leave")," (Leave a job)"),(0,i.kt)("p",null,"Permission: ",(0,i.kt)("inlineCode",{parentName:"p"},"ecojobs.command.leave")),(0,i.kt)("p",null,"Usage: ",(0,i.kt)("inlineCode",{parentName:"p"},"/jobs leave")),(0,i.kt)("h2",{id:"ecojobs-import-import-a-job-from-lrcdb"},(0,i.kt)("inlineCode",{parentName:"h2"},"/ecojobs import")," (Import a job from ",(0,i.kt)("a",{parentName:"h2",href:"https://lrcdb.auxilor.io/"},"lrcdb"),")"),(0,i.kt)("p",null,"Permission: ",(0,i.kt)("inlineCode",{parentName:"p"},"ecojobs.command.import")),(0,i.kt)("p",null,"General Usage: ",(0,i.kt)("inlineCode",{parentName:"p"},"/ecojobs import <id>")),(0,i.kt)("p",null,"Find jobs on ",(0,i.kt)("a",{parentName:"p",href:"https://lrcdb.auxilor.io/"},"lrcdb")),(0,i.kt)("h2",{id:"ecojobs-export-export-a-job-to-lrcdb"},(0,i.kt)("inlineCode",{parentName:"h2"},"/ecojobs export")," (Export a job to ",(0,i.kt)("a",{parentName:"h2",href:"https://lrcdb.auxilor.io/"},"lrcdb"),")"),(0,i.kt)("p",null,"Permission: ",(0,i.kt)("inlineCode",{parentName:"p"},"ecojobs.command.export")),(0,i.kt)("p",null,"General Usage: ",(0,i.kt)("inlineCode",{parentName:"p"},"/ecojobs export <id>")),(0,i.kt)("h2",{id:"ecojobslimitlimit"},(0,i.kt)("inlineCode",{parentName:"h2"},"ecojobs.limit.<limit>")),(0,i.kt)("p",null,"Sets the limit for the max amount of jobs the player can join at once"))}d.isMDXComponent=!0}}]);