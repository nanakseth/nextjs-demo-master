(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2104],{8781:function(e,n,t){var o={"./ContextMenu.txt":19073,"./CustomizedMenus.txt":82191,"./FadeMenu.txt":28605,"./LongMenu.txt":41826,"./MenuListComposition.txt":52962,"./MenuPopupState.txt":38991,"./SimpleListMenu.txt":98575,"./SimpleMenu.txt":61486,"./TypographyMenu.txt":12356};function r(e){var n=i(e);return t(n)}function i(e){if(!t.o(o,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return o[e]}r.keys=function(){return Object.keys(o)},r.resolve=i,e.exports=r,r.id=8781},81506:function(e){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e},e.exports.default=e.exports,e.exports.__esModule=!0},99489:function(e){function n(t,o){return e.exports=n=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},e.exports.default=e.exports,e.exports.__esModule=!0,n(t,o)}e.exports=n,e.exports.default=e.exports,e.exports.__esModule=!0},10770:function(e,n,t){"use strict";t.d(n,{Z:function(){return h}});var o=t(22122),r=t(85061),i=t(2949),a=t(67294),l=(t(59864),t(45697),t(86010)),c=t(52543),s=t(22318),u=t(59693),m=(0,t(63786).Z)(a.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),p=t(32467);var d=(0,c.Z)((function(e){return{root:{display:"flex",marginLeft:e.spacing(.5),marginRight:e.spacing(.5),backgroundColor:e.palette.grey[100],color:e.palette.grey[700],borderRadius:2,cursor:"pointer","&:hover, &:focus":{backgroundColor:e.palette.grey[200]},"&:active":{boxShadow:e.shadows[0],backgroundColor:(0,u._4)(e.palette.grey[200],.12)}},icon:{width:24,height:16}}}),{name:"PrivateBreadcrumbCollapsed"})((function(e){var n=e.classes,t=(0,i.Z)(e,["classes"]);return a.createElement(p.Z,(0,o.Z)({component:"li",className:n.root,focusRipple:!0},t),a.createElement(m,{className:n.icon}))}));var f=a.forwardRef((function(e,n){var t=e.children,c=e.classes,u=e.className,m=e.component,p=void 0===m?"nav":m,f=e.expandText,h=void 0===f?"Show path":f,x=e.itemsAfterCollapse,y=void 0===x?1:x,g=e.itemsBeforeCollapse,M=void 0===g?1:g,b=e.maxItems,j=void 0===b?8:b,v=e.separator,I=void 0===v?"/":v,C=(0,i.Z)(e,["children","classes","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"]),Z=a.useState(!1),k=Z[0],S=Z[1],O=a.Children.toArray(t).filter((function(e){return a.isValidElement(e)})).map((function(e,n){return a.createElement("li",{className:c.li,key:"child-".concat(n)},e)}));return a.createElement(s.Z,(0,o.Z)({ref:n,component:p,color:"textSecondary",className:(0,l.Z)(c.root,u)},C),a.createElement("ol",{className:c.ol},function(e,n,t){return e.reduce((function(o,r,i){return i<e.length-1?o=o.concat(r,a.createElement("li",{"aria-hidden":!0,key:"separator-".concat(i),className:n},t)):o.push(r),o}),[])}(k||j&&O.length<=j?O:function(e){return M+y>=e.length?e:[].concat((0,r.Z)(e.slice(0,M)),[a.createElement(d,{"aria-label":h,key:"ellipsis",onClick:function(e){S(!0);var n=e.currentTarget.parentNode.querySelector("a[href],button,[tabindex]");n&&n.focus()}})],(0,r.Z)(e.slice(e.length-y,e.length)))}(O),c.separator,I)))})),h=(0,c.Z)({root:{},ol:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"},li:{},separator:{display:"flex",userSelect:"none",marginLeft:8,marginRight:8}},{name:"MuiBreadcrumbs"})(f)},2781:function(e,n,t){"use strict";var o=t(95318),r=t(20862);n.Z=void 0;var i=r(t(67294)),a=(0,o(t(2108)).default)(i.createElement(i.Fragment,null,i.createElement("circle",{cx:"12",cy:"19",r:"2"}),i.createElement("path",{d:"M10 3h4v12h-4z"})),"PriorityHigh");n.Z=a},57948:function(e,n,t){"use strict";t.d(n,{nB:function(){return v},dx:function(){return C},Vr:function(){return y},mr:function(){return d}});var o=t(85893),r=t(38347),i=t(26265),a=(t(67294),t(41120)),l=t(28889),c=t(22318),s=t(86010);function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var p=(0,a.Z)((function(e){return{pageHeaderRoot:(0,i.Z)({display:"flex",flexDirection:"column"},e.breakpoints.up("sm"),{alignItems:"center",flexDirection:"row"}),titleRoot:(0,i.Z)({},e.breakpoints.down("xs"),{marginBottom:10})}})),d=function(e){var n=e.heading,t=e.breadcrumbComponent,i=e.children,a=(0,r.Z)(e,["heading","breadcrumbComponent","children"]),u=p();return(0,o.jsxs)(l.Z,m(m({className:(0,s.Z)(u.pageHeaderRoot,"page-header"),mb:{xs:5,md:6,lg:8}},a),{},{children:[(0,o.jsx)(c.Z,{component:"div",variant:"h1",className:(0,s.Z)(u.titleRoot,"title"),children:n}),(0,o.jsx)(l.Z,{ml:{sm:"auto"},children:t}),i]}))},f=t(10770),h=t(41664),x=(0,a.Z)((function(){return{textSm:{fontSize:12},linkBlock:{display:"block",color:"inherit"}}})),y=function(e){var n=e.items,t=((0,r.Z)(e,["items"]),x());return(0,o.jsx)(f.Z,{className:"bread-crumbs","aria-label":"breadcrumb {...rest}",children:n.map((function(e,n){return e.isActive?(0,o.jsx)(c.Z,{className:t.textSm,color:"textPrimary",children:e.label},n):(0,o.jsx)(h.default,{href:e.link||"/",children:(0,o.jsx)("a",{className:(0,s.Z)(t.textSm,t.linkBlock),children:e.label})},n)}))})},g=t(41749),M=t(14490),b=t(67757),j=t(75322),v=function(e){var n=e.SourceCodeComponent,t=e.SettingsComponent,r=e.children;return(0,o.jsx)(j.Z,{children:(0,o.jsxs)(b.Z,{children:[(0,o.jsxs)(g.Z,{item:!0,xs:12,md:7,children:[(0,o.jsx)(d,{heading:"Preview"}),(0,o.jsx)(l.Z,{mb:8,children:r}),(0,o.jsx)(M.Z,{children:n})]}),(0,o.jsx)(g.Z,{item:!0,xs:12,md:5,children:t})]})})},I=t(42890),C=function(e){var n=e.pageTitle,t=e.menus,r=e.children,i=[{label:"Home",link:"/"},{label:"Material UI Components",link:"/components/mui"},{label:n,isActive:!0}];return(0,o.jsx)(I.Z,{pageTitle:n,breadcrumbs:i,menus:t,children:r})}},42890:function(e,n,t){"use strict";var o=t(85893),r=t(26265),i=(t(67294),t(28889)),a=t(82598),l=t(22318),c=t(62822),s=t(50998),u=t(95757),m=t(41120),p=t(75322),d=(0,m.Z)((function(e){var n;return{root:{display:"flex",flexWrap:"wrap"},contentArea:(n={width:"100%"},(0,r.Z)(n,e.breakpoints.up("sm"),{paddingRight:e.typography.pxToRem(30),width:"calc(100% - ".concat(e.typography.pxToRem(175),")")}),(0,r.Z)(n,e.breakpoints.up("lg"),{paddingRight:e.typography.pxToRem(54)}),n),contentSidebar:{width:e.typography.pxToRem(175),height:"calc(100vh - ".concat(e.typography.pxToRem(102),")"),position:"sticky",top:30,overflowY:"auto",flexShrink:0}}}));n.Z=function(e){var n=e.pageTitle,t=e.menus,r=e.breadcrumbs,m=e.children,f=d();return(0,o.jsx)(p.Z,{heading:n,breadcrumbs:r,children:(0,o.jsxs)(i.Z,{className:f.root,children:[(0,o.jsx)(i.Z,{className:f.contentArea,children:m}),(0,o.jsx)(a.Z,{xsDown:!0,children:(0,o.jsxs)(i.Z,{className:f.contentSidebar,children:[(0,o.jsx)(l.Z,{component:"h4",variant:"h4",children:"Contents"}),(0,o.jsx)(c.Z,{children:t.map((function(e,n){return(0,o.jsx)(s.Z,{dense:!0,button:!0,component:"a",href:"#".concat(e.link),children:(0,o.jsx)(u.Z,{primary:e.label})},n)}))})]})})]})})}},75322:function(e,n,t){"use strict";var o=t(26265),r=t(85893),i=(t(67294),t(28889)),a=t(57948),l=t(82285),c=t(32427),s=t(86010);function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var p=(0,c.Z)((function(e){return{pageFull:{width:"100%"}}}));n.Z=function(e){var n=e.heading,t=e.breadcrumbs,o=e.children,c=e.className,u=e.restProps,d=p();return(0,r.jsx)(l.Z,{in:!0,direction:"up",mountOnEnter:!0,unmountOnExit:!0,children:(0,r.jsxs)(i.Z,m(m({className:(0,s.Z)(d.pageFull,c)},u),{},{children:[(n||t)&&(0,r.jsx)(a.mr,{heading:n,breadcrumbComponent:t&&(0,r.jsx)(a.Vr,{items:t})}),o]}))})}},40129:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return ie}});var o=t(85893),r=t(67294),i=t(57948),a=t(28889),l=t(22318),c=t(94111),s=t(39137),u=t(64121),m=t(282),p=t(38396),d=t(85639);function f(){var e=r.useState(null),n=(0,u.Z)(e,2),t=n[0],i=n[1],l=function(){i(null)};return(0,o.jsxs)(a.Z,{children:[(0,o.jsx)(m.Z,{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){i(e.currentTarget)},children:"Open Menu"}),(0,o.jsxs)(p.Z,{id:"simple-menu",anchorEl:t,keepMounted:!0,open:Boolean(t),onClose:l,children:[(0,o.jsx)(d.Z,{onClick:l,children:"Profile"}),(0,o.jsx)(d.Z,{onClick:l,children:"My account"}),(0,o.jsx)(d.Z,{onClick:l,children:"Logout"})]})]})}var h=t(41120),x=t(62822),y=t(50998),g=t(95757),M=(0,h.Z)((function(e){return{root:{backgroundColor:e.palette.background.paper}}})),b=["Show some love to Material-UI","Show all notification content","Hide sensitive notification content","Hide all notification content"];function j(){var e=M(),n=r.useState(null),t=(0,u.Z)(n,2),i=t[0],l=t[1],c=r.useState(1),s=(0,u.Z)(c,2),m=s[0],f=s[1];return(0,o.jsxs)(a.Z,{className:e.root,children:[(0,o.jsx)(x.Z,{component:"nav","aria-label":"Device settings",children:(0,o.jsx)(y.Z,{button:!0,"aria-haspopup":"true","aria-controls":"lock-menu","aria-label":"when device is locked",onClick:function(e){l(e.currentTarget)},children:(0,o.jsx)(g.Z,{primary:"When device is locked",secondary:b[m]})})}),(0,o.jsx)(p.Z,{id:"lock-menu",anchorEl:i,keepMounted:!0,open:Boolean(i),onClose:function(){l(null)},children:b.map((function(e,n){return(0,o.jsx)(d.Z,{disabled:0===n,selected:n===m,onClick:function(e){return function(e,n){f(n),l(null)}(0,n)},children:e},e)}))})]})}var v=t(26265),I=t(52795),C=t(20170),Z=t(79895),k=t(96617),S=t(29829);function O(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function P(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?O(Object(t),!0).forEach((function(n){(0,v.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var w=(0,h.Z)((function(e){return{root:{display:"flex"},paper:{marginRight:e.spacing(4)}}}));function E(){var e=w(),n=r.useState(!1),t=(0,u.Z)(n,2),i=t[0],l=t[1],c=r.useRef(null),s=function(e){c.current&&c.current.contains(e.target)||l(!1)};function p(e){"Tab"===e.key&&(e.preventDefault(),l(!1))}var f=r.useRef(i);return r.useEffect((function(){!0===f.current&&!1===i&&c.current.focus(),f.current=i}),[i]),(0,o.jsxs)(a.Z,{className:e.root,children:[(0,o.jsx)(Z.Z,{className:e.paper,children:(0,o.jsxs)(S.Z,{children:[(0,o.jsx)(d.Z,{children:"Profile"}),(0,o.jsx)(d.Z,{children:"My account"}),(0,o.jsx)(d.Z,{children:"Logout"})]})}),(0,o.jsxs)(a.Z,{children:[(0,o.jsx)(m.Z,{ref:c,"aria-controls":i?"menu-list-grow":void 0,"aria-haspopup":"true",onClick:function(){l((function(e){return!e}))},children:"Toggle Menu Grow"}),(0,o.jsx)(k.Z,{open:i,anchorEl:c.current,role:void 0,transition:!0,disablePortal:!0,children:function(e){var n=e.TransitionProps,t=e.placement;return(0,o.jsx)(C.Z,P(P({},n),{},{style:{transformOrigin:"bottom"===t?"center top":"center bottom"},children:(0,o.jsx)(Z.Z,{children:(0,o.jsx)(I.Z,{onClickAway:s,children:(0,o.jsxs)(S.Z,{autoFocusItem:i,id:"menu-list-grow",onKeyDown:p,children:[(0,o.jsx)(d.Z,{onClick:s,children:"Profile"}),(0,o.jsx)(d.Z,{onClick:s,children:"My account"}),(0,o.jsx)(d.Z,{onClick:s,children:"Logout"})]})})})}))}})]})]})}var L=t(52543),T=t(46869),B=t(38497),R=t(78880),D=t(43910);function N(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}var A=(0,L.Z)({paper:{border:"1px solid #d3d4d5"}})((function(e){return(0,o.jsx)(p.Z,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?N(Object(t),!0).forEach((function(n){(0,v.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):N(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({elevation:0,getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},e))})),z=(0,L.Z)((function(e){return{root:{"&:focus":{backgroundColor:e.palette.primary.main,"& .MuiListItemIcon-root, & .MuiListItemText-primary":{color:e.palette.common.white}}}}}))(d.Z);function H(){var e=r.useState(null),n=(0,u.Z)(e,2),t=n[0],i=n[1];return(0,o.jsxs)(a.Z,{children:[(0,o.jsx)(m.Z,{"aria-controls":"customized-menu","aria-haspopup":"true",variant:"contained",color:"primary",onClick:function(e){i(e.currentTarget)},children:"Open Menu"}),(0,o.jsxs)(A,{id:"customized-menu",anchorEl:t,keepMounted:!0,open:Boolean(t),onClose:function(){i(null)},children:[(0,o.jsxs)(z,{children:[(0,o.jsx)(T.Z,{children:(0,o.jsx)(D.Z,{fontSize:"small"})}),(0,o.jsx)(g.Z,{primary:"Sent mail"})]}),(0,o.jsxs)(z,{children:[(0,o.jsx)(T.Z,{children:(0,o.jsx)(R.Z,{fontSize:"small"})}),(0,o.jsx)(g.Z,{primary:"Drafts"})]}),(0,o.jsxs)(z,{children:[(0,o.jsx)(T.Z,{children:(0,o.jsx)(B.Z,{fontSize:"small"})}),(0,o.jsx)(g.Z,{primary:"Inbox"})]})]})]})}var _=t(17812),F=t(78513),q=["None","Atria","Callisto","Dione","Ganymede","Hangouts Call","Luna","Oberon","Phobos","Pyxis","Sedna","Titania","Triton","Umbriel"];function Y(){var e=r.useState(null),n=(0,u.Z)(e,2),t=n[0],i=n[1],l=Boolean(t),c=function(){i(null)};return(0,o.jsxs)(a.Z,{children:[(0,o.jsx)(_.Z,{"aria-label":"more","aria-controls":"long-menu","aria-haspopup":"true",onClick:function(e){i(e.currentTarget)},children:(0,o.jsx)(F.Z,{})}),(0,o.jsx)(p.Z,{id:"long-menu",anchorEl:t,keepMounted:!0,open:l,onClose:c,PaperProps:{style:{maxHeight:216,width:"20ch"}},children:q.map((function(e){return(0,o.jsx)(d.Z,{selected:"Pyxis"===e,onClick:c,children:e},e)}))})]})}var G=t(2781),X=(0,h.Z)({root:{width:230}});function U(){var e=X();return(0,o.jsx)(Z.Z,{className:e.root,children:(0,o.jsxs)(S.Z,{children:[(0,o.jsxs)(d.Z,{children:[(0,o.jsx)(T.Z,{children:(0,o.jsx)(D.Z,{fontSize:"small"})}),(0,o.jsx)(l.Z,{variant:"inherit",children:"A short message"})]}),(0,o.jsxs)(d.Z,{children:[(0,o.jsx)(T.Z,{children:(0,o.jsx)(G.Z,{fontSize:"small"})}),(0,o.jsx)(l.Z,{variant:"inherit",children:"A very long text that overflows"})]}),(0,o.jsxs)(d.Z,{children:[(0,o.jsx)(T.Z,{children:(0,o.jsx)(R.Z,{fontSize:"small"})}),(0,o.jsx)(l.Z,{variant:"inherit",noWrap:!0,children:"A very long text that overflows"})]})]})})}var W=t(73637);function V(){var e=r.useState(null),n=(0,u.Z)(e,2),t=n[0],i=n[1],l=Boolean(t),c=function(){i(null)};return(0,o.jsxs)(a.Z,{children:[(0,o.jsx)(m.Z,{"aria-controls":"fade-menu","aria-haspopup":"true",onClick:function(e){i(e.currentTarget)},children:"Open with fade transition"}),(0,o.jsxs)(p.Z,{id:"fade-menu",anchorEl:t,keepMounted:!0,open:l,onClose:c,TransitionComponent:W.Z,children:[(0,o.jsx)(d.Z,{onClick:c,children:"Profile"}),(0,o.jsx)(d.Z,{onClick:c,children:"My account"}),(0,o.jsx)(d.Z,{onClick:c,children:"Logout"})]})]})}var K={mouseX:null,mouseY:null};function Q(){var e=r.useState(K),n=(0,u.Z)(e,2),t=n[0],i=n[1],c=function(){i(K)};return(0,o.jsxs)(a.Z,{onContextMenu:function(e){e.preventDefault(),i({mouseX:e.clientX-2,mouseY:e.clientY-4})},style:{cursor:"context-menu"},children:[(0,o.jsx)(l.Z,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ipsum purus, bibendum sit amet vulputate eget, porta semper ligula. Donec bibendum vulputate erat, ac fringilla mi finibus nec. Donec ac dolor sed dolor porttitor blandit vel vel purus. Fusce vel malesuada ligula. Nam quis vehicula ante, eu finibus est. Proin ullamcorper fermentum orci, quis finibus massa. Nunc lobortis, massa ut rutrum ultrices, metus metus finibus ex, sit amet facilisis neque enim sed neque. Quisque accumsan metus vel maximus consequat. Suspendisse lacinia tellus a libero volutpat maximus."}),(0,o.jsxs)(p.Z,{keepMounted:!0,open:null!==t.mouseY,onClose:c,anchorReference:"anchorPosition",anchorPosition:null!==t.mouseY&&null!==t.mouseX?{top:t.mouseY,left:t.mouseX}:void 0,children:[(0,o.jsx)(d.Z,{onClick:c,children:"Copy"}),(0,o.jsx)(d.Z,{onClick:c,children:"Print"}),(0,o.jsx)(d.Z,{onClick:c,children:"Highlight"}),(0,o.jsx)(d.Z,{onClick:c,children:"Email"})]})]})}var J=t(12563);function $(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function ee(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?$(Object(t),!0).forEach((function(n){(0,v.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):$(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function ne(){return(0,o.jsx)(J.ZP,{variant:"popover",popupId:"demo-popup-menu",children:function(e){return(0,o.jsxs)(r.Fragment,{children:[(0,o.jsx)(m.Z,ee(ee({variant:"contained",color:"primary"},(0,J.vW)(e)),{},{children:"Open Menu"})),(0,o.jsxs)(p.Z,ee(ee({},(0,J.wK)(e)),{},{children:[(0,o.jsx)(d.Z,{onClick:e.close,children:"Cake"}),(0,o.jsx)(d.Z,{onClick:e.close,children:"Death"})]}))]})}})}var te=(0,c.Z)((function(e){return{section:{"&:not(:last-child)":{marginBottom:e.typography.pxToRem(32)}},sectionHeading:{marginBottom:e.typography.pxToRem(16)}}})),oe=t(8781),re=[{label:"Simple Menu",link:"simple-menu",component:(0,o.jsx)(f,{}),filename:"./SimpleMenu.txt"},{label:"Selected menus",link:"selected-menus",component:(0,o.jsx)(j,{}),filename:"./SimpleListMenu.txt"},{label:"MenuList composition",link:"menu-list-composition",component:(0,o.jsx)(E,{}),filename:"./MenuListComposition.txt"},{label:"Customized menus",link:"customized-menus",component:(0,o.jsx)(H,{}),filename:"./CustomizedMenus.txt"},{label:"Max height menus",link:"max-height-menus",component:(0,o.jsx)(Y,{}),filename:"./LongMenu.txt"},{label:"Limitations",link:"limitations",component:(0,o.jsx)(U,{}),filename:"./TypographyMenu.txt"},{label:"Change transition",link:"change-transition",component:(0,o.jsx)(V,{}),filename:"./FadeMenu.txt"},{label:"Context menu",link:"context-menu",component:(0,o.jsx)(Q,{}),filename:"./ContextMenu.txt"},{label:"PopupState helper",link:"popup-state-helper",component:(0,o.jsx)(ne,{}),filename:"./MenuPopupState.txt"}];function ie(){var e=te();return(0,o.jsx)(i.dx,{pageTitle:"Menus",menus:re,children:re.map((function(n,t){return(0,o.jsxs)(a.Z,{id:n.link,className:e.section,children:[(0,o.jsx)(l.Z,{component:"h3",variant:"inherit",className:e.sectionHeading,children:n.label}),(0,o.jsx)(s.Z,{code:oe(n.filename).default,language:"jsx",children:n.component})]},t)}))})}},19073:function(e,n,t){"use strict";t.r(n),n.default="import React from 'react';\nimport Menu from '@material-ui/core/Menu';\nimport MenuItem from '@material-ui/core/MenuItem';\nimport Typography from '@material-ui/core/Typography';\nimport { Box } from '@material-ui/core';\n\nconst initialState = {\n  mouseX: null,\n  mouseY: null,\n};\n\nexport default function ContextMenu() {\n  const [state, setState] = React.useState(initialState);\n\n  const handleClick = event => {\n    event.preventDefault();\n    setState({\n      mouseX: event.clientX - 2,\n      mouseY: event.clientY - 4,\n    });\n  };\n\n  const handleClose = () => {\n    setState(initialState);\n  };\n\n  return (\n    <Box onContextMenu={handleClick} style={{ cursor: 'context-menu' }}>\n      <Typography>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ipsum purus, bibendum sit amet vulputate eget, porta\n        semper ligula. Donec bibendum vulputate erat, ac fringilla mi finibus nec. Donec ac dolor sed dolor porttitor blandit\n        vel vel purus. Fusce vel malesuada ligula. Nam quis vehicula ante, eu finibus est. Proin ullamcorper fermentum orci,\n        quis finibus massa. Nunc lobortis, massa ut rutrum ultrices, metus metus finibus ex, sit amet facilisis neque enim\n        sed neque. Quisque accumsan metus vel maximus consequat. Suspendisse lacinia tellus a libero volutpat maximus.\n      </Typography>\n      <Menu\n        keepMounted\n        open={state.mouseY !== null}\n        onClose={handleClose}\n        anchorReference=\"anchorPosition\"\n        anchorPosition={\n          state.mouseY !== null && state.mouseX !== null ? { top: state.mouseY, left: state.mouseX } : undefined\n        }>\n        <MenuItem onClick={handleClose}>Copy</MenuItem>\n        <MenuItem onClick={handleClose}>Print</MenuItem>\n        <MenuItem onClick={handleClose}>Highlight</MenuItem>\n        <MenuItem onClick={handleClose}>Email</MenuItem>\n      </Menu>\n    </Box>\n  );\n}\n"},82191:function(e,n,t){"use strict";t.r(n),n.default="import React from 'react';\nimport { withStyles } from '@material-ui/core/styles';\nimport Button from '@material-ui/core/Button';\nimport Menu from '@material-ui/core/Menu';\nimport MenuItem from '@material-ui/core/MenuItem';\nimport ListItemIcon from '@material-ui/core/ListItemIcon';\nimport ListItemText from '@material-ui/core/ListItemText';\nimport InboxIcon from '@material-ui/icons/MoveToInbox';\nimport DraftsIcon from '@material-ui/icons/Drafts';\nimport SendIcon from '@material-ui/icons/Send';\nimport { Box } from '@material-ui/core';\n\nconst StyledMenu = withStyles({\n  paper: {\n    border: '1px solid #d3d4d5',\n  },\n})(props => (\n  <Menu\n    elevation={0}\n    getContentAnchorEl={null}\n    anchorOrigin={{\n      vertical: 'bottom',\n      horizontal: 'center',\n    }}\n    transformOrigin={{\n      vertical: 'top',\n      horizontal: 'center',\n    }}\n    {...props}\n  />\n));\n\nconst StyledMenuItem = withStyles(theme => ({\n  root: {\n    '&:focus': {\n      backgroundColor: theme.palette.primary.main,\n      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {\n        color: theme.palette.common.white,\n      },\n    },\n  },\n}))(MenuItem);\n\nexport default function CustomizedMenus() {\n  const [anchorEl, setAnchorEl] = React.useState(null);\n\n  const handleClick = event => {\n    setAnchorEl(event.currentTarget);\n  };\n\n  const handleClose = () => {\n    setAnchorEl(null);\n  };\n\n  return (\n    <Box>\n      <Button aria-controls=\"customized-menu\" aria-haspopup=\"true\" variant=\"contained\" color=\"primary\" onClick={handleClick}>\n        Open Menu\n      </Button>\n      <StyledMenu id=\"customized-menu\" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>\n        <StyledMenuItem>\n          <ListItemIcon>\n            <SendIcon fontSize=\"small\" />\n          </ListItemIcon>\n          <ListItemText primary=\"Sent mail\" />\n        </StyledMenuItem>\n        <StyledMenuItem>\n          <ListItemIcon>\n            <DraftsIcon fontSize=\"small\" />\n          </ListItemIcon>\n          <ListItemText primary=\"Drafts\" />\n        </StyledMenuItem>\n        <StyledMenuItem>\n          <ListItemIcon>\n            <InboxIcon fontSize=\"small\" />\n          </ListItemIcon>\n          <ListItemText primary=\"Inbox\" />\n        </StyledMenuItem>\n      </StyledMenu>\n    </Box>\n  );\n}\n"},28605:function(e,n,t){"use strict";t.r(n),n.default="import React from 'react';\nimport Button from '@material-ui/core/Button';\nimport Menu from '@material-ui/core/Menu';\nimport MenuItem from '@material-ui/core/MenuItem';\nimport Fade from '@material-ui/core/Fade';\nimport { Box } from '@material-ui/core';\n\nexport default function FadeMenu() {\n  const [anchorEl, setAnchorEl] = React.useState(null);\n  const open = Boolean(anchorEl);\n\n  const handleClick = event => {\n    setAnchorEl(event.currentTarget);\n  };\n\n  const handleClose = () => {\n    setAnchorEl(null);\n  };\n\n  return (\n    <Box>\n      <Button aria-controls=\"fade-menu\" aria-haspopup=\"true\" onClick={handleClick}>\n        Open with fade transition\n      </Button>\n      <Menu id=\"fade-menu\" anchorEl={anchorEl} keepMounted open={open} onClose={handleClose} TransitionComponent={Fade}>\n        <MenuItem onClick={handleClose}>Profile</MenuItem>\n        <MenuItem onClick={handleClose}>My account</MenuItem>\n        <MenuItem onClick={handleClose}>Logout</MenuItem>\n      </Menu>\n    </Box>\n  );\n}\n"},41826:function(e,n,t){"use strict";t.r(n),n.default="import React from 'react';\nimport IconButton from '@material-ui/core/IconButton';\nimport Menu from '@material-ui/core/Menu';\nimport MenuItem from '@material-ui/core/MenuItem';\nimport MoreVertIcon from '@material-ui/icons/MoreVert';\nimport { Box } from '@material-ui/core';\n\nconst options = [\n  'None',\n  'Atria',\n  'Callisto',\n  'Dione',\n  'Ganymede',\n  'Hangouts Call',\n  'Luna',\n  'Oberon',\n  'Phobos',\n  'Pyxis',\n  'Sedna',\n  'Titania',\n  'Triton',\n  'Umbriel',\n];\n\nconst ITEM_HEIGHT = 48;\n\nexport default function LongMenu() {\n  const [anchorEl, setAnchorEl] = React.useState(null);\n  const open = Boolean(anchorEl);\n\n  const handleClick = event => {\n    setAnchorEl(event.currentTarget);\n  };\n\n  const handleClose = () => {\n    setAnchorEl(null);\n  };\n\n  return (\n    <Box>\n      <IconButton aria-label=\"more\" aria-controls=\"long-menu\" aria-haspopup=\"true\" onClick={handleClick}>\n        <MoreVertIcon />\n      </IconButton>\n      <Menu\n        id=\"long-menu\"\n        anchorEl={anchorEl}\n        keepMounted\n        open={open}\n        onClose={handleClose}\n        PaperProps={{\n          style: {\n            maxHeight: ITEM_HEIGHT * 4.5,\n            width: '20ch',\n          },\n        }}>\n        {options.map(option => (\n          <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>\n            {option}\n          </MenuItem>\n        ))}\n      </Menu>\n    </Box>\n  );\n}\n"},52962:function(e,n,t){"use strict";t.r(n),n.default="import React from 'react';\nimport Button from '@material-ui/core/Button';\nimport ClickAwayListener from '@material-ui/core/ClickAwayListener';\nimport Grow from '@material-ui/core/Grow';\nimport Paper from '@material-ui/core/Paper';\nimport Popper from '@material-ui/core/Popper';\nimport MenuItem from '@material-ui/core/MenuItem';\nimport MenuList from '@material-ui/core/MenuList';\nimport { makeStyles } from '@material-ui/core/styles';\nimport { Box } from '@material-ui/core';\n\nconst useStyles = makeStyles(theme => ({\n  root: {\n    display: 'flex',\n  },\n  paper: {\n    marginRight: theme.spacing(4),\n  },\n}));\n\nexport default function MenuListComposition() {\n  const classes = useStyles();\n  const [open, setOpen] = React.useState(false);\n  const anchorRef = React.useRef(null);\n\n  const handleToggle = () => {\n    setOpen(prevOpen => !prevOpen);\n  };\n\n  const handleClose = event => {\n    if (anchorRef.current && anchorRef.current.contains(event.target)) {\n      return;\n    }\n\n    setOpen(false);\n  };\n\n  function handleListKeyDown(event) {\n    if (event.key === 'Tab') {\n      event.preventDefault();\n      setOpen(false);\n    }\n  }\n\n  // return focus to the button when we transitioned from !open -> open\n  const prevOpen = React.useRef(open);\n  React.useEffect(() => {\n    if (prevOpen.current === true && open === false) {\n      anchorRef.current.focus();\n    }\n\n    prevOpen.current = open;\n  }, [open]);\n\n  return (\n    <Box className={classes.root}>\n      <Paper className={classes.paper}>\n        <MenuList>\n          <MenuItem>Profile</MenuItem>\n          <MenuItem>My account</MenuItem>\n          <MenuItem>Logout</MenuItem>\n        </MenuList>\n      </Paper>\n      <Box>\n        <Button\n          ref={anchorRef}\n          aria-controls={open ? 'menu-list-grow' : undefined}\n          aria-haspopup=\"true\"\n          onClick={handleToggle}>\n          Toggle Menu Grow\n        </Button>\n        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>\n          {({ TransitionProps, placement }) => (\n            <Grow {...TransitionProps} style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}>\n              <Paper>\n                <ClickAwayListener onClickAway={handleClose}>\n                  <MenuList autoFocusItem={open} id=\"menu-list-grow\" onKeyDown={handleListKeyDown}>\n                    <MenuItem onClick={handleClose}>Profile</MenuItem>\n                    <MenuItem onClick={handleClose}>My account</MenuItem>\n                    <MenuItem onClick={handleClose}>Logout</MenuItem>\n                  </MenuList>\n                </ClickAwayListener>\n              </Paper>\n            </Grow>\n          )}\n        </Popper>\n      </Box>\n    </Box>\n  );\n}\n"},38991:function(e,n,t){"use strict";t.r(n),n.default="import React from 'react';\nimport Button from '@material-ui/core/Button';\nimport Menu from '@material-ui/core/Menu';\nimport MenuItem from '@material-ui/core/MenuItem';\nimport PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';\n\nexport default function MenuPopupState() {\n  return (\n    <PopupState variant=\"popover\" popupId=\"demo-popup-menu\">\n      {popupState => (\n        <React.Fragment>\n          <Button variant=\"contained\" color=\"primary\" {...bindTrigger(popupState)}>\n            Open Menu\n          </Button>\n          <Menu {...bindMenu(popupState)}>\n            <MenuItem onClick={popupState.close}>Cake</MenuItem>\n            <MenuItem onClick={popupState.close}>Death</MenuItem>\n          </Menu>\n        </React.Fragment>\n      )}\n    </PopupState>\n  );\n}\n"},98575:function(e,n,t){"use strict";t.r(n),n.default="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport List from '@material-ui/core/List';\nimport ListItem from '@material-ui/core/ListItem';\nimport ListItemText from '@material-ui/core/ListItemText';\nimport MenuItem from '@material-ui/core/MenuItem';\nimport Menu from '@material-ui/core/Menu';\nimport { Box } from '@material-ui/core';\n\nconst useStyles = makeStyles(theme => ({\n  root: {\n    backgroundColor: theme.palette.background.paper,\n  },\n}));\n\nconst options = [\n  'Show some love to Material-UI',\n  'Show all notification content',\n  'Hide sensitive notification content',\n  'Hide all notification content',\n];\n\nexport default function SimpleListMenu() {\n  const classes = useStyles();\n  const [anchorEl, setAnchorEl] = React.useState(null);\n  const [selectedIndex, setSelectedIndex] = React.useState(1);\n\n  const handleClickListItem = event => {\n    setAnchorEl(event.currentTarget);\n  };\n\n  const handleMenuItemClick = (event, index) => {\n    setSelectedIndex(index);\n    setAnchorEl(null);\n  };\n\n  const handleClose = () => {\n    setAnchorEl(null);\n  };\n\n  return (\n    <Box className={classes.root}>\n      <List component=\"nav\" aria-label=\"Device settings\">\n        <ListItem\n          button\n          aria-haspopup=\"true\"\n          aria-controls=\"lock-menu\"\n          aria-label=\"when device is locked\"\n          onClick={handleClickListItem}>\n          <ListItemText primary=\"When device is locked\" secondary={options[selectedIndex]} />\n        </ListItem>\n      </List>\n      <Menu id=\"lock-menu\" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>\n        {options.map((option, index) => (\n          <MenuItem\n            key={option}\n            disabled={index === 0}\n            selected={index === selectedIndex}\n            onClick={event => handleMenuItemClick(event, index)}>\n            {option}\n          </MenuItem>\n        ))}\n      </Menu>\n    </Box>\n  );\n}\n"},61486:function(e,n,t){"use strict";t.r(n),n.default="import React from 'react';\nimport Button from '@material-ui/core/Button';\nimport Menu from '@material-ui/core/Menu';\nimport MenuItem from '@material-ui/core/MenuItem';\nimport { Box } from '@material-ui/core';\n\nexport default function SimpleMenu() {\n  const [anchorEl, setAnchorEl] = React.useState(null);\n\n  const handleClick = event => {\n    setAnchorEl(event.currentTarget);\n  };\n\n  const handleClose = () => {\n    setAnchorEl(null);\n  };\n\n  return (\n    <Box>\n      <Button aria-controls=\"simple-menu\" aria-haspopup=\"true\" onClick={handleClick}>\n        Open Menu\n      </Button>\n      <Menu id=\"simple-menu\" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>\n        <MenuItem onClick={handleClose}>Profile</MenuItem>\n        <MenuItem onClick={handleClose}>My account</MenuItem>\n        <MenuItem onClick={handleClose}>Logout</MenuItem>\n      </Menu>\n    </Box>\n  );\n}\n"},12356:function(e,n,t){"use strict";t.r(n),n.default="import React from 'react';\nimport MenuList from '@material-ui/core/MenuList';\nimport MenuItem from '@material-ui/core/MenuItem';\nimport Paper from '@material-ui/core/Paper';\nimport { makeStyles } from '@material-ui/core/styles';\nimport ListItemIcon from '@material-ui/core/ListItemIcon';\nimport Typography from '@material-ui/core/Typography';\nimport DraftsIcon from '@material-ui/icons/Drafts';\nimport SendIcon from '@material-ui/icons/Send';\nimport PriorityHighIcon from '@material-ui/icons/PriorityHigh';\n\nconst useStyles = makeStyles({\n  root: {\n    width: 230,\n  },\n});\n\nexport default function TypographyMenu() {\n  const classes = useStyles();\n\n  return (\n    <Paper className={classes.root}>\n      <MenuList>\n        <MenuItem>\n          <ListItemIcon>\n            <SendIcon fontSize=\"small\" />\n          </ListItemIcon>\n          <Typography variant=\"inherit\">A short message</Typography>\n        </MenuItem>\n        <MenuItem>\n          <ListItemIcon>\n            <PriorityHighIcon fontSize=\"small\" />\n          </ListItemIcon>\n          <Typography variant=\"inherit\">A very long text that overflows</Typography>\n        </MenuItem>\n        <MenuItem>\n          <ListItemIcon>\n            <DraftsIcon fontSize=\"small\" />\n          </ListItemIcon>\n          <Typography variant=\"inherit\" noWrap>\n            A very long text that overflows\n          </Typography>\n        </MenuItem>\n      </MenuList>\n    </Paper>\n  );\n}\n"}}]);