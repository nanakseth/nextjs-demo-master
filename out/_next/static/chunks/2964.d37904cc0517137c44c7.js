(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2964],{10770:function(e,r,t){"use strict";t.d(r,{Z:function(){return h}});var n=t(22122),o=t(85061),a=t(2949),i=t(67294),c=(t(59864),t(45697),t(86010)),l=t(52543),s=t(22318),u=t(59693),p=(0,t(63786).Z)(i.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),d=t(32467);var f=(0,l.Z)((function(e){return{root:{display:"flex",marginLeft:e.spacing(.5),marginRight:e.spacing(.5),backgroundColor:e.palette.grey[100],color:e.palette.grey[700],borderRadius:2,cursor:"pointer","&:hover, &:focus":{backgroundColor:e.palette.grey[200]},"&:active":{boxShadow:e.shadows[0],backgroundColor:(0,u._4)(e.palette.grey[200],.12)}},icon:{width:24,height:16}}}),{name:"PrivateBreadcrumbCollapsed"})((function(e){var r=e.classes,t=(0,a.Z)(e,["classes"]);return i.createElement(d.Z,(0,n.Z)({component:"li",className:r.root,focusRipple:!0},t),i.createElement(p,{className:r.icon}))}));var m=i.forwardRef((function(e,r){var t=e.children,l=e.classes,u=e.className,p=e.component,d=void 0===p?"nav":p,m=e.expandText,h=void 0===m?"Show path":m,g=e.itemsAfterCollapse,b=void 0===g?1:g,y=e.itemsBeforeCollapse,v=void 0===y?1:y,x=e.maxItems,j=void 0===x?8:x,Z=e.separator,O=void 0===Z?"/":Z,w=(0,a.Z)(e,["children","classes","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"]),k=i.useState(!1),C=k[0],S=k[1],P=i.Children.toArray(t).filter((function(e){return i.isValidElement(e)})).map((function(e,r){return i.createElement("li",{className:l.li,key:"child-".concat(r)},e)}));return i.createElement(s.Z,(0,n.Z)({ref:r,component:d,color:"textSecondary",className:(0,c.Z)(l.root,u)},w),i.createElement("ol",{className:l.ol},function(e,r,t){return e.reduce((function(n,o,a){return a<e.length-1?n=n.concat(o,i.createElement("li",{"aria-hidden":!0,key:"separator-".concat(a),className:r},t)):n.push(o),n}),[])}(C||j&&P.length<=j?P:function(e){return v+b>=e.length?e:[].concat((0,o.Z)(e.slice(0,v)),[i.createElement(f,{"aria-label":h,key:"ellipsis",onClick:function(e){S(!0);var r=e.currentTarget.parentNode.querySelector("a[href],button,[tabindex]");r&&r.focus()}})],(0,o.Z)(e.slice(e.length-b,e.length)))}(P),l.separator,O)))})),h=(0,l.Z)({root:{},ol:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"},li:{},separator:{display:"flex",userSelect:"none",marginLeft:8,marginRight:8}},{name:"MuiBreadcrumbs"})(m)},57948:function(e,r,t){"use strict";t.d(r,{nB:function(){return Z},dx:function(){return w},Vr:function(){return b},mr:function(){return f}});var n=t(85893),o=t(38347),a=t(26265),i=(t(67294),t(41120)),c=t(28889),l=t(22318),s=t(86010);function u(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?u(Object(t),!0).forEach((function(r){(0,a.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var d=(0,i.Z)((function(e){return{pageHeaderRoot:(0,a.Z)({display:"flex",flexDirection:"column"},e.breakpoints.up("sm"),{alignItems:"center",flexDirection:"row"}),titleRoot:(0,a.Z)({},e.breakpoints.down("xs"),{marginBottom:10})}})),f=function(e){var r=e.heading,t=e.breadcrumbComponent,a=e.children,i=(0,o.Z)(e,["heading","breadcrumbComponent","children"]),u=d();return(0,n.jsxs)(c.Z,p(p({className:(0,s.Z)(u.pageHeaderRoot,"page-header"),mb:{xs:5,md:6,lg:8}},i),{},{children:[(0,n.jsx)(l.Z,{component:"div",variant:"h1",className:(0,s.Z)(u.titleRoot,"title"),children:r}),(0,n.jsx)(c.Z,{ml:{sm:"auto"},children:t}),a]}))},m=t(10770),h=t(41664),g=(0,i.Z)((function(){return{textSm:{fontSize:12},linkBlock:{display:"block",color:"inherit"}}})),b=function(e){var r=e.items,t=((0,o.Z)(e,["items"]),g());return(0,n.jsx)(m.Z,{className:"bread-crumbs","aria-label":"breadcrumb {...rest}",children:r.map((function(e,r){return e.isActive?(0,n.jsx)(l.Z,{className:t.textSm,color:"textPrimary",children:e.label},r):(0,n.jsx)(h.default,{href:e.link||"/",children:(0,n.jsx)("a",{className:(0,s.Z)(t.textSm,t.linkBlock),children:e.label})},r)}))})},y=t(41749),v=t(14490),x=t(67757),j=t(75322),Z=function(e){var r=e.SourceCodeComponent,t=e.SettingsComponent,o=e.children;return(0,n.jsx)(j.Z,{children:(0,n.jsxs)(x.Z,{children:[(0,n.jsxs)(y.Z,{item:!0,xs:12,md:7,children:[(0,n.jsx)(f,{heading:"Preview"}),(0,n.jsx)(c.Z,{mb:8,children:o}),(0,n.jsx)(v.Z,{children:r})]}),(0,n.jsx)(y.Z,{item:!0,xs:12,md:5,children:t})]})})},O=t(42890),w=function(e){var r=e.pageTitle,t=e.menus,o=e.children,a=[{label:"Home",link:"/"},{label:"Material UI Components",link:"/components/mui"},{label:r,isActive:!0}];return(0,n.jsx)(O.Z,{pageTitle:r,breadcrumbs:a,menus:t,children:o})}},42890:function(e,r,t){"use strict";var n=t(85893),o=t(26265),a=(t(67294),t(28889)),i=t(82598),c=t(22318),l=t(62822),s=t(50998),u=t(95757),p=t(41120),d=t(75322),f=(0,p.Z)((function(e){var r;return{root:{display:"flex",flexWrap:"wrap"},contentArea:(r={width:"100%"},(0,o.Z)(r,e.breakpoints.up("sm"),{paddingRight:e.typography.pxToRem(30),width:"calc(100% - ".concat(e.typography.pxToRem(175),")")}),(0,o.Z)(r,e.breakpoints.up("lg"),{paddingRight:e.typography.pxToRem(54)}),r),contentSidebar:{width:e.typography.pxToRem(175),height:"calc(100vh - ".concat(e.typography.pxToRem(102),")"),position:"sticky",top:30,overflowY:"auto",flexShrink:0}}}));r.Z=function(e){var r=e.pageTitle,t=e.menus,o=e.breadcrumbs,p=e.children,m=f();return(0,n.jsx)(d.Z,{heading:r,breadcrumbs:o,children:(0,n.jsxs)(a.Z,{className:m.root,children:[(0,n.jsx)(a.Z,{className:m.contentArea,children:p}),(0,n.jsx)(i.Z,{xsDown:!0,children:(0,n.jsxs)(a.Z,{className:m.contentSidebar,children:[(0,n.jsx)(c.Z,{component:"h4",variant:"h4",children:"Contents"}),(0,n.jsx)(l.Z,{children:t.map((function(e,r){return(0,n.jsx)(s.Z,{dense:!0,button:!0,component:"a",href:"#".concat(e.link),children:(0,n.jsx)(u.Z,{primary:e.label})},r)}))})]})})]})})}},75322:function(e,r,t){"use strict";var n=t(26265),o=t(85893),a=(t(67294),t(28889)),i=t(57948),c=t(82285),l=t(32427),s=t(86010);function u(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?u(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var d=(0,l.Z)((function(e){return{pageFull:{width:"100%"}}}));r.Z=function(e){var r=e.heading,t=e.breadcrumbs,n=e.children,l=e.className,u=e.restProps,f=d();return(0,o.jsx)(c.Z,{in:!0,direction:"up",mountOnEnter:!0,unmountOnExit:!0,children:(0,o.jsxs)(a.Z,p(p({className:(0,s.Z)(f.pageFull,l)},u),{},{children:[(r||t)&&(0,o.jsx)(i.mr,{heading:r,breadcrumbComponent:t&&(0,o.jsx)(i.Vr,{items:t})}),n]}))})}},79657:function(e,r,t){"use strict";t.d(r,{Vu:function(){return o},i2:function(){return a},r6:function(){return i},m6:function(){return c}});var n=t(64121),o=function(e,r,t){if(e){if("color"===r)return{backgroundColor:t.color};if("gradient"===r)return{backgroundColor:t.gradientColors};if("image"===r)return{backgroundImage:t.image}}return{}},a=function(e,r,t){if(e){if("color"===r)return{overlay:{colors:t.color,opacity:t.opacity}};if("gradient"===r)return{overlay:{colors:t.gradientColors,opacity:t.opacity}}}return{}},i=function(e,r,t){if(e){if("color"===r)return" backgroundColor={'".concat(t.color,"'}");if("gradient"===r){var o=(0,n.Z)(t.gradientColors,2),a=o[0],i=o[1];return" backgroundColor={['".concat(a,"','").concat(i,"']}")}if("image"===r)return" backgroundImage={'".concat(t.image,"'}")}return""},c=function(e,r,t){if(e){if("color"===r)return" overlay={{ colors: '".concat(t.color,"', opacity: ").concat(t.opacity," }}");if("gradient"===r){var o=(0,n.Z)(t.gradientColors,2),a=o[0],i=o[1];return" overlay={{ colors: ['".concat(a,"','").concat(i,"'], opacity: ").concat(t.opacity," }}")}}return""}},62964:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return Z}});var n=t(85893),o=t(67294),a=t(57948),i=t(13502),c=t(61974),l=t(60788),s=function(){var e=(0,o.useContext)(i.Z),r=e.open,t=e.setOpen,a=e.variant,s=e.setVariant,u=e.direction,p=e.setDirection;(0,o.useEffect)((function(){t(!0)}),[u,t]);return(0,n.jsxs)(c.f5,{title:"Cmt Drawer",children:[(0,n.jsxs)(c.af,{heading:"Drawer",open:!0,children:[(0,n.jsx)(c.r4,{title:"Open",children:[{label:"Yes",value:!0},{label:"No",value:!1}].map((function(e,o){return(0,n.jsx)(l.Z,{name:"open",label:e.label,value:e.value,checked:r===e.value,onChange:function(){return t(e.value)}},o)}))}),(0,n.jsx)(c.r4,{title:"Anchor",children:[{label:"Left",value:"left"},{label:"Right",value:"right"},{label:"Top",value:"top"},{label:"Bottom",value:"bottom"}].map((function(e,r){return(0,n.jsx)(l.Z,{name:"anchor",label:e.label,value:e.value,checked:u===e.value,onChange:function(){return p(e.value)}},r)}))}),(0,n.jsx)(c.r4,{title:"Show Avatar",children:[{label:"Permanent",value:"permanent"},{label:"Persistent",value:"persistent"},{label:"Temporary",value:"temporary"}].map((function(e,r){return(0,n.jsx)(l.Z,{name:"variant",label:e.label,value:e.value,checked:a===e.value,onChange:function(){return s(e.value)}},r)}))})]}),(0,n.jsx)(c.V2,{}),(0,n.jsx)(c.d6,{})]})},u=t(26265),p=t(10266),d=t(28889),f=t(22318),m=t(42413),h=t(79657);function g(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function b(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?g(Object(t),!0).forEach((function(r){(0,u.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var y=(0,t(94111).Z)((function(e){return{textWhite:{color:e.palette.common.white}}})),v=function(){var e=y(),r=(0,o.useContext)(i.Z),t=r.open,a=r.setOpen,c=r.variant,l=r.direction,s=r.showBackground,u=r.backgroundStyle,g=r.showOverlay,v=r.overlayStyle,x=r.overlayOpacity,j=p.K.background,Z=p.K.overlay;Z.opacity=x;return(0,n.jsx)(m.Z,b(b(b({},(0,h.Vu)(s,u,j)),(0,h.i2)(g,v,Z)),{},{variant:c,anchor:l,open:t,onClose:function(){return a(!1)},children:(0,n.jsx)(d.Z,{className:function(){if(s&&"color"!==u||g&&x>.5)return e.textWhite}(),style:{width:305,padding:20},children:(0,n.jsx)(f.Z,{variant:"body2",children:"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."})})}))},x=function(e){var r=e.children,t=(0,o.useState)(!0),a=t[0],c=t[1],l=(0,o.useState)("temporary"),s=l[0],u=l[1],p=(0,o.useState)("left"),d=p[0],f=p[1],m=(0,o.useState)(!1),h=m[0],g=m[1],b=(0,o.useState)("color"),y=b[0],v=b[1],x=(0,o.useState)(!1),j=x[0],Z=x[1],O=(0,o.useState)("color"),w=O[0],k=O[1],C=(0,o.useState)(.3),S=C[0],P=C[1];return(0,n.jsx)(i.Z.Provider,{value:{open:a,setOpen:c,variant:s,setVariant:u,direction:d,setDirection:f,showBackground:h,setBackgroundVisibility:g,backgroundStyle:y,setBackgroundStyle:v,showOverlay:j,setOverlayVisibility:Z,overlayStyle:w,setOverlayStyle:k,overlayOpacity:S,setOverlayOpacity:P},children:r})},j=function(){var e=(0,o.useContext)(i.Z),r=e.open,t=e.variant,a=e.direction,l=e.showBackground,s=e.backgroundStyle,u=e.showOverlay,d=e.overlayStyle,f=p.K.background,m=p.K.overlay;return(0,n.jsx)(c.fB,{sourceCode:"\n<CmtDrawer"+(0,h.r6)(l,s,f)+(0,h.m6)(u,d,m)+'\n  variant="'.concat(t,'"\n  anchor="').concat(a,'"\n  open={').concat(r,'}\n  onClose={() => setOpen(false)}>\n  <Box\n    style={{\n      width:305,\n      padding: 20,\n    }}>\n    <Typography variant="body2">\n      This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of\n      frozen peas along with the mussels, if you like.\n    </Typography>\n  </Box>\n</CmtDrawer>')})},Z=function(){return(0,n.jsx)(x,{children:(0,n.jsx)(a.nB,{SourceCodeComponent:(0,n.jsx)(j,{}),SettingsComponent:(0,n.jsx)(s,{}),children:(0,n.jsx)(v,{})})})}}}]);