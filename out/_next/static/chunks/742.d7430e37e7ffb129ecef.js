(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[742],{85919:function(e,n,r){var t={"./SimpleBackdrop.txt":16242};function o(e){var n=a(e);return r(n)}function a(e){if(!r.o(t,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t[e]}o.keys=function(){return Object.keys(t)},o.resolve=a,e.exports=o,o.id=85919},10770:function(e,n,r){"use strict";r.d(n,{Z:function(){return h}});var t=r(22122),o=r(85061),a=r(2949),c=r(67294),i=(r(59864),r(45697),r(86010)),s=r(52543),l=r(22318),u=r(59693),p=(0,r(63786).Z)(c.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),d=r(32467);var m=(0,s.Z)((function(e){return{root:{display:"flex",marginLeft:e.spacing(.5),marginRight:e.spacing(.5),backgroundColor:e.palette.grey[100],color:e.palette.grey[700],borderRadius:2,cursor:"pointer","&:hover, &:focus":{backgroundColor:e.palette.grey[200]},"&:active":{boxShadow:e.shadows[0],backgroundColor:(0,u._4)(e.palette.grey[200],.12)}},icon:{width:24,height:16}}}),{name:"PrivateBreadcrumbCollapsed"})((function(e){var n=e.classes,r=(0,a.Z)(e,["classes"]);return c.createElement(d.Z,(0,t.Z)({component:"li",className:n.root,focusRipple:!0},r),c.createElement(p,{className:n.icon}))}));var f=c.forwardRef((function(e,n){var r=e.children,s=e.classes,u=e.className,p=e.component,d=void 0===p?"nav":p,f=e.expandText,h=void 0===f?"Show path":f,x=e.itemsAfterCollapse,b=void 0===x?1:x,g=e.itemsBeforeCollapse,y=void 0===g?1:g,Z=e.maxItems,j=void 0===Z?8:Z,v=e.separator,k=void 0===v?"/":v,O=(0,a.Z)(e,["children","classes","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"]),w=c.useState(!1),S=w[0],C=w[1],N=c.Children.toArray(r).filter((function(e){return c.isValidElement(e)})).map((function(e,n){return c.createElement("li",{className:s.li,key:"child-".concat(n)},e)}));return c.createElement(l.Z,(0,t.Z)({ref:n,component:d,color:"textSecondary",className:(0,i.Z)(s.root,u)},O),c.createElement("ol",{className:s.ol},function(e,n,r){return e.reduce((function(t,o,a){return a<e.length-1?t=t.concat(o,c.createElement("li",{"aria-hidden":!0,key:"separator-".concat(a),className:n},r)):t.push(o),t}),[])}(S||j&&N.length<=j?N:function(e){return y+b>=e.length?e:[].concat((0,o.Z)(e.slice(0,y)),[c.createElement(m,{"aria-label":h,key:"ellipsis",onClick:function(e){C(!0);var n=e.currentTarget.parentNode.querySelector("a[href],button,[tabindex]");n&&n.focus()}})],(0,o.Z)(e.slice(e.length-b,e.length)))}(N),s.separator,k)))})),h=(0,s.Z)({root:{},ol:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"},li:{},separator:{display:"flex",userSelect:"none",marginLeft:8,marginRight:8}},{name:"MuiBreadcrumbs"})(f)},57948:function(e,n,r){"use strict";r.d(n,{nB:function(){return v},dx:function(){return O},Vr:function(){return b},mr:function(){return m}});var t=r(85893),o=r(38347),a=r(26265),c=(r(67294),r(41120)),i=r(28889),s=r(22318),l=r(86010);function u(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function p(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?u(Object(r),!0).forEach((function(n){(0,a.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var d=(0,c.Z)((function(e){return{pageHeaderRoot:(0,a.Z)({display:"flex",flexDirection:"column"},e.breakpoints.up("sm"),{alignItems:"center",flexDirection:"row"}),titleRoot:(0,a.Z)({},e.breakpoints.down("xs"),{marginBottom:10})}})),m=function(e){var n=e.heading,r=e.breadcrumbComponent,a=e.children,c=(0,o.Z)(e,["heading","breadcrumbComponent","children"]),u=d();return(0,t.jsxs)(i.Z,p(p({className:(0,l.Z)(u.pageHeaderRoot,"page-header"),mb:{xs:5,md:6,lg:8}},c),{},{children:[(0,t.jsx)(s.Z,{component:"div",variant:"h1",className:(0,l.Z)(u.titleRoot,"title"),children:n}),(0,t.jsx)(i.Z,{ml:{sm:"auto"},children:r}),a]}))},f=r(10770),h=r(41664),x=(0,c.Z)((function(){return{textSm:{fontSize:12},linkBlock:{display:"block",color:"inherit"}}})),b=function(e){var n=e.items,r=((0,o.Z)(e,["items"]),x());return(0,t.jsx)(f.Z,{className:"bread-crumbs","aria-label":"breadcrumb {...rest}",children:n.map((function(e,n){return e.isActive?(0,t.jsx)(s.Z,{className:r.textSm,color:"textPrimary",children:e.label},n):(0,t.jsx)(h.default,{href:e.link||"/",children:(0,t.jsx)("a",{className:(0,l.Z)(r.textSm,r.linkBlock),children:e.label})},n)}))})},g=r(41749),y=r(14490),Z=r(67757),j=r(75322),v=function(e){var n=e.SourceCodeComponent,r=e.SettingsComponent,o=e.children;return(0,t.jsx)(j.Z,{children:(0,t.jsxs)(Z.Z,{children:[(0,t.jsxs)(g.Z,{item:!0,xs:12,md:7,children:[(0,t.jsx)(m,{heading:"Preview"}),(0,t.jsx)(i.Z,{mb:8,children:o}),(0,t.jsx)(y.Z,{children:n})]}),(0,t.jsx)(g.Z,{item:!0,xs:12,md:5,children:r})]})})},k=r(42890),O=function(e){var n=e.pageTitle,r=e.menus,o=e.children,a=[{label:"Home",link:"/"},{label:"Material UI Components",link:"/components/mui"},{label:n,isActive:!0}];return(0,t.jsx)(k.Z,{pageTitle:n,breadcrumbs:a,menus:r,children:o})}},42890:function(e,n,r){"use strict";var t=r(85893),o=r(26265),a=(r(67294),r(28889)),c=r(82598),i=r(22318),s=r(62822),l=r(50998),u=r(95757),p=r(41120),d=r(75322),m=(0,p.Z)((function(e){var n;return{root:{display:"flex",flexWrap:"wrap"},contentArea:(n={width:"100%"},(0,o.Z)(n,e.breakpoints.up("sm"),{paddingRight:e.typography.pxToRem(30),width:"calc(100% - ".concat(e.typography.pxToRem(175),")")}),(0,o.Z)(n,e.breakpoints.up("lg"),{paddingRight:e.typography.pxToRem(54)}),n),contentSidebar:{width:e.typography.pxToRem(175),height:"calc(100vh - ".concat(e.typography.pxToRem(102),")"),position:"sticky",top:30,overflowY:"auto",flexShrink:0}}}));n.Z=function(e){var n=e.pageTitle,r=e.menus,o=e.breadcrumbs,p=e.children,f=m();return(0,t.jsx)(d.Z,{heading:n,breadcrumbs:o,children:(0,t.jsxs)(a.Z,{className:f.root,children:[(0,t.jsx)(a.Z,{className:f.contentArea,children:p}),(0,t.jsx)(c.Z,{xsDown:!0,children:(0,t.jsxs)(a.Z,{className:f.contentSidebar,children:[(0,t.jsx)(i.Z,{component:"h4",variant:"h4",children:"Contents"}),(0,t.jsx)(s.Z,{children:r.map((function(e,n){return(0,t.jsx)(l.Z,{dense:!0,button:!0,component:"a",href:"#".concat(e.link),children:(0,t.jsx)(u.Z,{primary:e.label})},n)}))})]})})]})})}},75322:function(e,n,r){"use strict";var t=r(26265),o=r(85893),a=(r(67294),r(28889)),c=r(57948),i=r(82285),s=r(32427),l=r(86010);function u(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function p(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?u(Object(r),!0).forEach((function(n){(0,t.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var d=(0,s.Z)((function(e){return{pageFull:{width:"100%"}}}));n.Z=function(e){var n=e.heading,r=e.breadcrumbs,t=e.children,s=e.className,u=e.restProps,m=d();return(0,o.jsx)(i.Z,{in:!0,direction:"up",mountOnEnter:!0,unmountOnExit:!0,children:(0,o.jsxs)(a.Z,p(p({className:(0,l.Z)(m.pageFull,s)},u),{},{children:[(n||r)&&(0,o.jsx)(c.mr,{heading:n,breadcrumbComponent:r&&(0,o.jsx)(c.Vr,{items:r})}),t]}))})}},90742:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return y}});var t=r(85893),o=r(67294),a=r(57948),c=r(28889),i=r(22318),s=r(94111),l=r(39137),u=r(64121),p=r(32692),d=r(95477),m=r(282),f=(0,r(41120).Z)((function(e){return{backdrop:{zIndex:e.zIndex.drawer+1,color:"#fff"}}}));function h(){var e=f(),n=o.useState(!1),r=(0,u.Z)(n,2),a=r[0],i=r[1];return(0,t.jsxs)(c.Z,{children:[(0,t.jsx)(m.Z,{variant:"outlined",color:"primary",onClick:function(){i(!a)},children:"Show backdrop"}),(0,t.jsx)(p.Z,{className:e.backdrop,open:a,onClick:function(){i(!1)},children:(0,t.jsx)(d.Z,{color:"inherit"})})]})}var x=(0,s.Z)((function(e){return{section:{"&:not(:last-child)":{marginBottom:e.typography.pxToRem(32)}},sectionHeading:{marginBottom:e.typography.pxToRem(16)}}})),b=r(85919),g=[{label:"Backdrop",link:"backdrop",component:(0,t.jsx)(h,{}),filename:"./SimpleBackdrop.txt"}];function y(){var e=x();return(0,t.jsx)(a.dx,{pageTitle:"Backdrop",menus:g,children:g.map((function(n,r){return(0,t.jsxs)(c.Z,{id:n.link,className:e.section,children:[(0,t.jsx)(i.Z,{component:"h3",variant:"inherit",className:e.sectionHeading,children:n.label}),(0,t.jsx)(l.Z,{code:b(n.filename).default,language:"jsx",children:n.component})]},r)}))})}},16242:function(e,n,r){"use strict";r.r(n),n.default="import React from 'react';\nimport Backdrop from '@material-ui/core/Backdrop';\nimport CircularProgress from '@material-ui/core/CircularProgress';\nimport Button from '@material-ui/core/Button';\nimport { makeStyles } from '@material-ui/core/styles';\nimport { Box } from '@material-ui/core';\n\nconst useStyles = makeStyles(theme => ({\n  backdrop: {\n    zIndex: theme.zIndex.drawer + 1,\n    color: '#fff',\n  },\n}));\n\nexport default function SimpleBackdrop() {\n  const classes = useStyles();\n  const [open, setOpen] = React.useState(false);\n  const handleClose = () => {\n    setOpen(false);\n  };\n  const handleToggle = () => {\n    setOpen(!open);\n  };\n\n  return (\n    <Box>\n      <Button variant=\"outlined\" color=\"primary\" onClick={handleToggle}>\n        Show backdrop\n      </Button>\n      <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>\n        <CircularProgress color=\"inherit\" />\n      </Backdrop>\n    </Box>\n  );\n}\n"}}]);