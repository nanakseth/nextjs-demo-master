(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4912],{34589:function(e,t,n){var o={"./LabelBottomNavigation.txt":7801,"./SimpleBottomNavigation.txt":35446};function a(e){var t=r(e);return n(t)}function r(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}a.keys=function(){return Object.keys(o)},a.resolve=r,e.exports=a,a.id=34589},48665:function(e,t,n){"use strict";var o=n(22122),a=n(2949),r=n(67294),i=(n(45697),n(86010)),c=n(52543),l=n(32467),s=r.forwardRef((function(e,t){var n=e.classes,c=e.className,s=e.icon,u=e.label,m=e.onChange,p=e.onClick,d=e.selected,f=e.showLabel,h=e.value,v=(0,a.Z)(e,["classes","className","icon","label","onChange","onClick","selected","showLabel","value"]);return r.createElement(l.Z,(0,o.Z)({ref:t,className:(0,i.Z)(n.root,c,d?n.selected:!f&&n.iconOnly),focusRipple:!0,onClick:function(e){m&&m(e,h),p&&p(e)}},v),r.createElement("span",{className:n.wrapper},s,r.createElement("span",{className:(0,i.Z)(n.label,d?n.selected:!f&&n.iconOnly)},u)))}));t.Z=(0,c.Z)((function(e){return{root:{transition:e.transitions.create(["color","padding-top"],{duration:e.transitions.duration.short}),padding:"6px 12px 8px",minWidth:80,maxWidth:168,color:e.palette.text.secondary,flex:"1","&$iconOnly":{paddingTop:16},"&$selected":{paddingTop:6,color:e.palette.primary.main}},selected:{},iconOnly:{},wrapper:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"100%",flexDirection:"column"},label:{fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(12),opacity:1,transition:"font-size 0.2s, opacity 0.2s",transitionDelay:"0.1s","&$iconOnly":{opacity:0,transitionDelay:"0s"},"&$selected":{fontSize:e.typography.pxToRem(14)}}}}),{name:"MuiBottomNavigationAction"})(s)},25881:function(e,t,n){"use strict";var o=n(22122),a=n(2949),r=n(67294),i=(n(59864),n(45697),n(86010)),c=n(52543),l=r.forwardRef((function(e,t){var n=e.children,c=e.classes,l=e.className,s=e.component,u=void 0===s?"div":s,m=e.onChange,p=e.showLabels,d=void 0!==p&&p,f=e.value,h=(0,a.Z)(e,["children","classes","className","component","onChange","showLabels","value"]);return r.createElement(u,(0,o.Z)({className:(0,i.Z)(c.root,l),ref:t},h),r.Children.map(n,(function(e,t){if(!r.isValidElement(e))return null;var n=void 0===e.props.value?t:e.props.value;return r.cloneElement(e,{selected:n===f,showLabel:void 0!==e.props.showLabel?e.props.showLabel:d,value:n,onChange:m})})))}));t.Z=(0,c.Z)((function(e){return{root:{display:"flex",justifyContent:"center",height:56,backgroundColor:e.palette.background.paper}}}),{name:"MuiBottomNavigation"})(l)},10770:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var o=n(22122),a=n(85061),r=n(2949),i=n(67294),c=(n(59864),n(45697),n(86010)),l=n(52543),s=n(22318),u=n(59693),m=(0,n(63786).Z)(i.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),p=n(32467);var d=(0,l.Z)((function(e){return{root:{display:"flex",marginLeft:e.spacing(.5),marginRight:e.spacing(.5),backgroundColor:e.palette.grey[100],color:e.palette.grey[700],borderRadius:2,cursor:"pointer","&:hover, &:focus":{backgroundColor:e.palette.grey[200]},"&:active":{boxShadow:e.shadows[0],backgroundColor:(0,u._4)(e.palette.grey[200],.12)}},icon:{width:24,height:16}}}),{name:"PrivateBreadcrumbCollapsed"})((function(e){var t=e.classes,n=(0,r.Z)(e,["classes"]);return i.createElement(p.Z,(0,o.Z)({component:"li",className:t.root,focusRipple:!0},n),i.createElement(m,{className:t.icon}))}));var f=i.forwardRef((function(e,t){var n=e.children,l=e.classes,u=e.className,m=e.component,p=void 0===m?"nav":m,f=e.expandText,h=void 0===f?"Show path":f,v=e.itemsAfterCollapse,g=void 0===v?1:v,b=e.itemsBeforeCollapse,x=void 0===b?1:b,y=e.maxItems,Z=void 0===y?8:y,j=e.separator,N=void 0===j?"/":j,w=(0,r.Z)(e,["children","classes","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"]),O=i.useState(!1),k=O[0],C=O[1],B=i.Children.toArray(n).filter((function(e){return i.isValidElement(e)})).map((function(e,t){return i.createElement("li",{className:l.li,key:"child-".concat(t)},e)}));return i.createElement(s.Z,(0,o.Z)({ref:t,component:p,color:"textSecondary",className:(0,c.Z)(l.root,u)},w),i.createElement("ol",{className:l.ol},function(e,t,n){return e.reduce((function(o,a,r){return r<e.length-1?o=o.concat(a,i.createElement("li",{"aria-hidden":!0,key:"separator-".concat(r),className:t},n)):o.push(a),o}),[])}(k||Z&&B.length<=Z?B:function(e){return x+g>=e.length?e:[].concat((0,a.Z)(e.slice(0,x)),[i.createElement(d,{"aria-label":h,key:"ellipsis",onClick:function(e){C(!0);var t=e.currentTarget.parentNode.querySelector("a[href],button,[tabindex]");t&&t.focus()}})],(0,a.Z)(e.slice(e.length-g,e.length)))}(B),l.separator,N)))})),h=(0,l.Z)({root:{},ol:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"},li:{},separator:{display:"flex",userSelect:"none",marginLeft:8,marginRight:8}},{name:"MuiBreadcrumbs"})(f)},76324:function(e,t,n){"use strict";var o=n(95318),a=n(20862);t.Z=void 0;var r=a(n(67294)),i=(0,o(n(2108)).default)(r.createElement("path",{d:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"}),"Favorite");t.Z=i},13871:function(e,t,n){"use strict";var o=n(95318),a=n(20862);t.Z=void 0;var r=a(n(67294)),i=(0,o(n(2108)).default)(r.createElement("path",{d:"M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"}),"Folder");t.Z=i},59832:function(e,t,n){"use strict";var o=n(95318),a=n(20862);t.Z=void 0;var r=a(n(67294)),i=(0,o(n(2108)).default)(r.createElement("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"}),"LocationOn");t.Z=i},93246:function(e,t,n){"use strict";var o=n(95318),a=n(20862);t.Z=void 0;var r=a(n(67294)),i=(0,o(n(2108)).default)(r.createElement("path",{d:"M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"}),"Restore");t.Z=i},57948:function(e,t,n){"use strict";n.d(t,{nB:function(){return j},dx:function(){return w},Vr:function(){return g},mr:function(){return d}});var o=n(85893),a=n(38347),r=n(26265),i=(n(67294),n(41120)),c=n(28889),l=n(22318),s=n(86010);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p=(0,i.Z)((function(e){return{pageHeaderRoot:(0,r.Z)({display:"flex",flexDirection:"column"},e.breakpoints.up("sm"),{alignItems:"center",flexDirection:"row"}),titleRoot:(0,r.Z)({},e.breakpoints.down("xs"),{marginBottom:10})}})),d=function(e){var t=e.heading,n=e.breadcrumbComponent,r=e.children,i=(0,a.Z)(e,["heading","breadcrumbComponent","children"]),u=p();return(0,o.jsxs)(c.Z,m(m({className:(0,s.Z)(u.pageHeaderRoot,"page-header"),mb:{xs:5,md:6,lg:8}},i),{},{children:[(0,o.jsx)(l.Z,{component:"div",variant:"h1",className:(0,s.Z)(u.titleRoot,"title"),children:t}),(0,o.jsx)(c.Z,{ml:{sm:"auto"},children:n}),r]}))},f=n(10770),h=n(41664),v=(0,i.Z)((function(){return{textSm:{fontSize:12},linkBlock:{display:"block",color:"inherit"}}})),g=function(e){var t=e.items,n=((0,a.Z)(e,["items"]),v());return(0,o.jsx)(f.Z,{className:"bread-crumbs","aria-label":"breadcrumb {...rest}",children:t.map((function(e,t){return e.isActive?(0,o.jsx)(l.Z,{className:n.textSm,color:"textPrimary",children:e.label},t):(0,o.jsx)(h.default,{href:e.link||"/",children:(0,o.jsx)("a",{className:(0,s.Z)(n.textSm,n.linkBlock),children:e.label})},t)}))})},b=n(41749),x=n(14490),y=n(67757),Z=n(75322),j=function(e){var t=e.SourceCodeComponent,n=e.SettingsComponent,a=e.children;return(0,o.jsx)(Z.Z,{children:(0,o.jsxs)(y.Z,{children:[(0,o.jsxs)(b.Z,{item:!0,xs:12,md:7,children:[(0,o.jsx)(d,{heading:"Preview"}),(0,o.jsx)(c.Z,{mb:8,children:a}),(0,o.jsx)(x.Z,{children:t})]}),(0,o.jsx)(b.Z,{item:!0,xs:12,md:5,children:n})]})})},N=n(42890),w=function(e){var t=e.pageTitle,n=e.menus,a=e.children,r=[{label:"Home",link:"/"},{label:"Material UI Components",link:"/components/mui"},{label:t,isActive:!0}];return(0,o.jsx)(N.Z,{pageTitle:t,breadcrumbs:r,menus:n,children:a})}},42890:function(e,t,n){"use strict";var o=n(85893),a=n(26265),r=(n(67294),n(28889)),i=n(82598),c=n(22318),l=n(62822),s=n(50998),u=n(95757),m=n(41120),p=n(75322),d=(0,m.Z)((function(e){var t;return{root:{display:"flex",flexWrap:"wrap"},contentArea:(t={width:"100%"},(0,a.Z)(t,e.breakpoints.up("sm"),{paddingRight:e.typography.pxToRem(30),width:"calc(100% - ".concat(e.typography.pxToRem(175),")")}),(0,a.Z)(t,e.breakpoints.up("lg"),{paddingRight:e.typography.pxToRem(54)}),t),contentSidebar:{width:e.typography.pxToRem(175),height:"calc(100vh - ".concat(e.typography.pxToRem(102),")"),position:"sticky",top:30,overflowY:"auto",flexShrink:0}}}));t.Z=function(e){var t=e.pageTitle,n=e.menus,a=e.breadcrumbs,m=e.children,f=d();return(0,o.jsx)(p.Z,{heading:t,breadcrumbs:a,children:(0,o.jsxs)(r.Z,{className:f.root,children:[(0,o.jsx)(r.Z,{className:f.contentArea,children:m}),(0,o.jsx)(i.Z,{xsDown:!0,children:(0,o.jsxs)(r.Z,{className:f.contentSidebar,children:[(0,o.jsx)(c.Z,{component:"h4",variant:"h4",children:"Contents"}),(0,o.jsx)(l.Z,{children:n.map((function(e,t){return(0,o.jsx)(s.Z,{dense:!0,button:!0,component:"a",href:"#".concat(e.link),children:(0,o.jsx)(u.Z,{primary:e.label})},t)}))})]})})]})})}},75322:function(e,t,n){"use strict";var o=n(26265),a=n(85893),r=(n(67294),n(28889)),i=n(57948),c=n(82285),l=n(32427),s=n(86010);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p=(0,l.Z)((function(e){return{pageFull:{width:"100%"}}}));t.Z=function(e){var t=e.heading,n=e.breadcrumbs,o=e.children,l=e.className,u=e.restProps,d=p();return(0,a.jsx)(c.Z,{in:!0,direction:"up",mountOnEnter:!0,unmountOnExit:!0,children:(0,a.jsxs)(r.Z,m(m({className:(0,s.Z)(d.pageFull,l)},u),{},{children:[(t||n)&&(0,a.jsx)(i.mr,{heading:t,breadcrumbComponent:n&&(0,a.jsx)(i.Vr,{items:n})}),o]}))})}},64912:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return O}});var o=n(85893),a=n(67294),r=n(57948),i=n(28889),c=n(22318),l=n(94111),s=n(64121),u=n(41120),m=n(25881),p=n(48665),d=n(93246),f=n(76324),h=n(59832),v=(0,u.Z)((function(e){return{root:{width:500,backgroundColor:e.palette.background.default}}}));function g(){var e=v(),t=a.useState(0),n=(0,s.Z)(t,2),r=n[0],i=n[1];return(0,o.jsxs)(m.Z,{value:r,onChange:function(e,t){i(t)},showLabels:!0,className:e.root,children:[(0,o.jsx)(p.Z,{label:"Recents",icon:(0,o.jsx)(d.Z,{})}),(0,o.jsx)(p.Z,{label:"Favorites",icon:(0,o.jsx)(f.Z,{})}),(0,o.jsx)(p.Z,{label:"Nearby",icon:(0,o.jsx)(h.Z,{})})]})}var b=n(13871),x=(0,u.Z)((function(e){return{root:{width:500,backgroundColor:e.palette.background.default}}}));function y(){var e=x(),t=a.useState("recents"),n=(0,s.Z)(t,2),r=n[0],i=n[1];return(0,o.jsxs)(m.Z,{value:r,onChange:function(e,t){i(t)},className:e.root,children:[(0,o.jsx)(p.Z,{label:"Recents",value:"recents",icon:(0,o.jsx)(d.Z,{})}),(0,o.jsx)(p.Z,{label:"Favorites",value:"favorites",icon:(0,o.jsx)(f.Z,{})}),(0,o.jsx)(p.Z,{label:"Nearby",value:"nearby",icon:(0,o.jsx)(h.Z,{})}),(0,o.jsx)(p.Z,{label:"Folder",value:"folder",icon:(0,o.jsx)(b.Z,{})})]})}var Z=n(39137),j=(0,l.Z)((function(e){return{section:{"&:not(:last-child)":{marginBottom:e.typography.pxToRem(32)}},sectionHeading:{marginBottom:e.typography.pxToRem(16)}}})),N=n(34589),w=[{label:"Bottom Navigation",link:"bottom-navigation",component:(0,o.jsx)(g,{}),filename:"./SimpleBottomNavigation.txt"},{label:"Bottom Navigation with no label",link:"bottom-navigation-with-no-label",component:(0,o.jsx)(y,{}),filename:"./LabelBottomNavigation.txt"}];function O(){var e=j();return(0,o.jsx)(r.dx,{pageTitle:"Bottom Navigation",menus:w,children:w.map((function(t,n){return(0,o.jsxs)(i.Z,{id:t.link,className:e.section,children:[(0,o.jsx)(c.Z,{component:"h3",variant:"inherit",className:e.sectionHeading,children:t.label}),(0,o.jsx)(Z.Z,{code:N(t.filename).default,language:"jsx",children:t.component})]},n)}))})}},7801:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport BottomNavigation from '@material-ui/core/BottomNavigation';\nimport BottomNavigationAction from '@material-ui/core/BottomNavigationAction';\nimport FolderIcon from '@material-ui/icons/Folder';\nimport RestoreIcon from '@material-ui/icons/Restore';\nimport FavoriteIcon from '@material-ui/icons/Favorite';\nimport LocationOnIcon from '@material-ui/icons/LocationOn';\n\nconst useStyles = makeStyles(theme => ({\n  root: {\n    width: 500,\n    backgroundColor: theme.palette.background.default,\n  },\n}));\n\nexport default function LabelBottomNavigation() {\n  const classes = useStyles();\n  const [value, setValue] = React.useState('recents');\n\n  const handleChange = (event, newValue) => {\n    setValue(newValue);\n  };\n\n  return (\n    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>\n      <BottomNavigationAction label=\"Recents\" value=\"recents\" icon={<RestoreIcon />} />\n      <BottomNavigationAction label=\"Favorites\" value=\"favorites\" icon={<FavoriteIcon />} />\n      <BottomNavigationAction label=\"Nearby\" value=\"nearby\" icon={<LocationOnIcon />} />\n      <BottomNavigationAction label=\"Folder\" value=\"folder\" icon={<FolderIcon />} />\n    </BottomNavigation>\n  );\n}\n"},35446:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport BottomNavigation from '@material-ui/core/BottomNavigation';\nimport BottomNavigationAction from '@material-ui/core/BottomNavigationAction';\nimport RestoreIcon from '@material-ui/icons/Restore';\nimport FavoriteIcon from '@material-ui/icons/Favorite';\nimport LocationOnIcon from '@material-ui/icons/LocationOn';\n\nconst useStyles = makeStyles(theme => ({\n  root: {\n    width: 500,\n    backgroundColor: theme.palette.background.default,\n  },\n}));\n\nexport default function SimpleBottomNavigation() {\n  const classes = useStyles();\n  const [value, setValue] = React.useState(0);\n\n  return (\n    <BottomNavigation\n      value={value}\n      onChange={(event, newValue) => {\n        setValue(newValue);\n      }}\n      showLabels\n      className={classes.root}>\n      <BottomNavigationAction label=\"Recents\" icon={<RestoreIcon />} />\n      <BottomNavigationAction label=\"Favorites\" icon={<FavoriteIcon />} />\n      <BottomNavigationAction label=\"Nearby\" icon={<LocationOnIcon />} />\n    </BottomNavigation>\n  );\n}\n"}}]);