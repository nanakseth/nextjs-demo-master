(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9492],{47331:function(e,t,n){var r={"./BasicSwitches.txt":48997,"./CustomizedSwitches.txt":30389,"./FormControlLabelPosition.txt":42275,"./SwitchLabels.txt":44635,"./SwitchesGroup.txt":16562,"./SwitchesSize.txt":41621};function o(e){var t=c(e);return n(t)}function c(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=c,e.exports=o,o.id=47331},10770:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var r=n(22122),o=n(85061),c=n(2949),a=n(67294),i=(n(59864),n(45697),n(86010)),l=n(52543),s=n(22318),m=n(59693),h=(0,n(63786).Z)(a.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),d=n(32467);var p=(0,l.Z)((function(e){return{root:{display:"flex",marginLeft:e.spacing(.5),marginRight:e.spacing(.5),backgroundColor:e.palette.grey[100],color:e.palette.grey[700],borderRadius:2,cursor:"pointer","&:hover, &:focus":{backgroundColor:e.palette.grey[200]},"&:active":{boxShadow:e.shadows[0],backgroundColor:(0,m._4)(e.palette.grey[200],.12)}},icon:{width:24,height:16}}}),{name:"PrivateBreadcrumbCollapsed"})((function(e){var t=e.classes,n=(0,c.Z)(e,["classes"]);return a.createElement(d.Z,(0,r.Z)({component:"li",className:t.root,focusRipple:!0},n),a.createElement(h,{className:t.icon}))}));var u=a.forwardRef((function(e,t){var n=e.children,l=e.classes,m=e.className,h=e.component,d=void 0===h?"nav":h,u=e.expandText,b=void 0===u?"Show path":u,f=e.itemsAfterCollapse,g=void 0===f?1:f,k=e.itemsBeforeCollapse,x=void 0===k?1:k,y=e.maxItems,j=void 0===y?8:y,w=e.separator,Z=void 0===w?"/":w,C=(0,c.Z)(e,["children","classes","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"]),S=a.useState(!1),O=S[0],v=S[1],P=a.Children.toArray(n).filter((function(e){return a.isValidElement(e)})).map((function(e,t){return a.createElement("li",{className:l.li,key:"child-".concat(t)},e)}));return a.createElement(s.Z,(0,r.Z)({ref:t,component:d,color:"textSecondary",className:(0,i.Z)(l.root,m)},C),a.createElement("ol",{className:l.ol},function(e,t,n){return e.reduce((function(r,o,c){return c<e.length-1?r=r.concat(o,a.createElement("li",{"aria-hidden":!0,key:"separator-".concat(c),className:t},n)):r.push(o),r}),[])}(O||j&&P.length<=j?P:function(e){return x+g>=e.length?e:[].concat((0,o.Z)(e.slice(0,x)),[a.createElement(p,{"aria-label":b,key:"ellipsis",onClick:function(e){v(!0);var t=e.currentTarget.parentNode.querySelector("a[href],button,[tabindex]");t&&t.focus()}})],(0,o.Z)(e.slice(e.length-g,e.length)))}(P),l.separator,Z)))})),b=(0,l.Z)({root:{},ol:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"},li:{},separator:{display:"flex",userSelect:"none",marginLeft:8,marginRight:8}},{name:"MuiBreadcrumbs"})(u)},6562:function(e,t,n){"use strict";var r=n(22122),o=n(2949),c=n(67294),a=(n(45697),n(86010)),i=n(52543),l=c.forwardRef((function(e,t){var n=e.classes,i=e.className,l=e.row,s=void 0!==l&&l,m=(0,o.Z)(e,["classes","className","row"]);return c.createElement("div",(0,r.Z)({className:(0,a.Z)(n.root,i,s&&n.row),ref:t},m))}));t.Z=(0,i.Z)({root:{display:"flex",flexDirection:"column",flexWrap:"wrap"},row:{flexDirection:"row"}},{name:"MuiFormGroup"})(l)},57948:function(e,t,n){"use strict";n.d(t,{nB:function(){return w},dx:function(){return C},Vr:function(){return g},mr:function(){return p}});var r=n(85893),o=n(38347),c=n(26265),a=(n(67294),n(41120)),i=n(28889),l=n(22318),s=n(86010);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){(0,c.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d=(0,a.Z)((function(e){return{pageHeaderRoot:(0,c.Z)({display:"flex",flexDirection:"column"},e.breakpoints.up("sm"),{alignItems:"center",flexDirection:"row"}),titleRoot:(0,c.Z)({},e.breakpoints.down("xs"),{marginBottom:10})}})),p=function(e){var t=e.heading,n=e.breadcrumbComponent,c=e.children,a=(0,o.Z)(e,["heading","breadcrumbComponent","children"]),m=d();return(0,r.jsxs)(i.Z,h(h({className:(0,s.Z)(m.pageHeaderRoot,"page-header"),mb:{xs:5,md:6,lg:8}},a),{},{children:[(0,r.jsx)(l.Z,{component:"div",variant:"h1",className:(0,s.Z)(m.titleRoot,"title"),children:t}),(0,r.jsx)(i.Z,{ml:{sm:"auto"},children:n}),c]}))},u=n(10770),b=n(41664),f=(0,a.Z)((function(){return{textSm:{fontSize:12},linkBlock:{display:"block",color:"inherit"}}})),g=function(e){var t=e.items,n=((0,o.Z)(e,["items"]),f());return(0,r.jsx)(u.Z,{className:"bread-crumbs","aria-label":"breadcrumb {...rest}",children:t.map((function(e,t){return e.isActive?(0,r.jsx)(l.Z,{className:n.textSm,color:"textPrimary",children:e.label},t):(0,r.jsx)(b.default,{href:e.link||"/",children:(0,r.jsx)("a",{className:(0,s.Z)(n.textSm,n.linkBlock),children:e.label})},t)}))})},k=n(41749),x=n(14490),y=n(67757),j=n(75322),w=function(e){var t=e.SourceCodeComponent,n=e.SettingsComponent,o=e.children;return(0,r.jsx)(j.Z,{children:(0,r.jsxs)(y.Z,{children:[(0,r.jsxs)(k.Z,{item:!0,xs:12,md:7,children:[(0,r.jsx)(p,{heading:"Preview"}),(0,r.jsx)(i.Z,{mb:8,children:o}),(0,r.jsx)(x.Z,{children:t})]}),(0,r.jsx)(k.Z,{item:!0,xs:12,md:5,children:n})]})})},Z=n(42890),C=function(e){var t=e.pageTitle,n=e.menus,o=e.children,c=[{label:"Home",link:"/"},{label:"Material UI Components",link:"/components/mui"},{label:t,isActive:!0}];return(0,r.jsx)(Z.Z,{pageTitle:t,breadcrumbs:c,menus:n,children:o})}},42890:function(e,t,n){"use strict";var r=n(85893),o=n(26265),c=(n(67294),n(28889)),a=n(82598),i=n(22318),l=n(62822),s=n(50998),m=n(95757),h=n(41120),d=n(75322),p=(0,h.Z)((function(e){var t;return{root:{display:"flex",flexWrap:"wrap"},contentArea:(t={width:"100%"},(0,o.Z)(t,e.breakpoints.up("sm"),{paddingRight:e.typography.pxToRem(30),width:"calc(100% - ".concat(e.typography.pxToRem(175),")")}),(0,o.Z)(t,e.breakpoints.up("lg"),{paddingRight:e.typography.pxToRem(54)}),t),contentSidebar:{width:e.typography.pxToRem(175),height:"calc(100vh - ".concat(e.typography.pxToRem(102),")"),position:"sticky",top:30,overflowY:"auto",flexShrink:0}}}));t.Z=function(e){var t=e.pageTitle,n=e.menus,o=e.breadcrumbs,h=e.children,u=p();return(0,r.jsx)(d.Z,{heading:t,breadcrumbs:o,children:(0,r.jsxs)(c.Z,{className:u.root,children:[(0,r.jsx)(c.Z,{className:u.contentArea,children:h}),(0,r.jsx)(a.Z,{xsDown:!0,children:(0,r.jsxs)(c.Z,{className:u.contentSidebar,children:[(0,r.jsx)(i.Z,{component:"h4",variant:"h4",children:"Contents"}),(0,r.jsx)(l.Z,{children:n.map((function(e,t){return(0,r.jsx)(s.Z,{dense:!0,button:!0,component:"a",href:"#".concat(e.link),children:(0,r.jsx)(m.Z,{primary:e.label})},t)}))})]})})]})})}},75322:function(e,t,n){"use strict";var r=n(26265),o=n(85893),c=(n(67294),n(28889)),a=n(57948),i=n(82285),l=n(32427),s=n(86010);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d=(0,l.Z)((function(e){return{pageFull:{width:"100%"}}}));t.Z=function(e){var t=e.heading,n=e.breadcrumbs,r=e.children,l=e.className,m=e.restProps,p=d();return(0,o.jsx)(i.Z,{in:!0,direction:"up",mountOnEnter:!0,unmountOnExit:!0,children:(0,o.jsxs)(c.Z,h(h({className:(0,s.Z)(p.pageFull,l)},m),{},{children:[(t||n)&&(0,o.jsx)(a.mr,{heading:t,breadcrumbComponent:n&&(0,o.jsx)(a.Vr,{items:n})}),r]}))})}},89492:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return H}});var r=n(85893),o=n(67294),c=n(57948),a=n(28889),i=n(22318),l=n(94111),s=n(26265),m=n(64121),h=n(9570);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){(0,s.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(){var e=o.useState({checkedA:!0,checkedB:!0}),t=(0,m.Z)(e,2),n=t[0],c=t[1],i=function(e){c(p(p({},n),{},(0,s.Z)({},e.target.name,e.target.checked)))};return(0,r.jsxs)(a.Z,{children:[(0,r.jsx)(h.Z,{checked:n.checkedA,onChange:i,name:"checkedA",inputProps:{"aria-label":"secondary checkbox"}}),(0,r.jsx)(h.Z,{checked:n.checkedB,onChange:i,color:"primary",name:"checkedB",inputProps:{"aria-label":"primary checkbox"}}),(0,r.jsx)(h.Z,{inputProps:{"aria-label":"primary checkbox"}}),(0,r.jsx)(h.Z,{disabled:!0,inputProps:{"aria-label":"disabled checkbox"}}),(0,r.jsx)(h.Z,{disabled:!0,checked:!0,inputProps:{"aria-label":"primary checkbox"}}),(0,r.jsx)(h.Z,{defaultChecked:!0,color:"default",inputProps:{"aria-label":"checkbox with default color"}})]})}var b=n(6562),f=n(30553);function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){(0,s.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function x(){var e=o.useState({checkedA:!0,checkedB:!0}),t=(0,m.Z)(e,2),n=t[0],c=t[1],a=function(e){c(k(k({},n),{},(0,s.Z)({},e.target.name,e.target.checked)))};return(0,r.jsxs)(b.Z,{row:!0,children:[(0,r.jsx)(f.Z,{control:(0,r.jsx)(h.Z,{checked:n.checkedA,onChange:a,name:"checkedA"}),label:"Secondary"}),(0,r.jsx)(f.Z,{control:(0,r.jsx)(h.Z,{checked:n.checkedB,onChange:a,name:"checkedB",color:"primary"}),label:"Primary"}),(0,r.jsx)(f.Z,{control:(0,r.jsx)(h.Z,{}),label:"Uncontrolled"}),(0,r.jsx)(f.Z,{disabled:!0,control:(0,r.jsx)(h.Z,{}),label:"Disabled"}),(0,r.jsx)(f.Z,{disabled:!0,control:(0,r.jsx)(h.Z,{checked:!0}),label:"Disabled"})]})}var y=n(96019),j=n(64436),w=n(30585);function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(n),!0).forEach((function(t){(0,s.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function S(){var e=o.useState({gilad:!0,jason:!1,antoine:!0}),t=(0,m.Z)(e,2),n=t[0],c=t[1],a=function(e){c(C(C({},n),{},(0,s.Z)({},e.target.name,e.target.checked)))};return(0,r.jsxs)(j.Z,{component:"fieldset",children:[(0,r.jsx)(y.Z,{component:"legend",children:"Assign responsibility"}),(0,r.jsxs)(b.Z,{children:[(0,r.jsx)(f.Z,{control:(0,r.jsx)(h.Z,{checked:n.gilad,onChange:a,name:"gilad"}),label:"Gilad Gray"}),(0,r.jsx)(f.Z,{control:(0,r.jsx)(h.Z,{checked:n.jason,onChange:a,name:"jason"}),label:"Jason Killian"}),(0,r.jsx)(f.Z,{control:(0,r.jsx)(h.Z,{checked:n.antoine,onChange:a,name:"antoine"}),label:"Antoine Llorca"})]}),(0,r.jsx)(w.Z,{children:"Be careful"})]})}var O=n(38347),v=n(52543),P=n(29791),F=n(41749);function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?B(Object(n),!0).forEach((function(t){(0,s.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var G=(0,v.Z)({switchBase:{color:P.Z[300],"&$checked":{color:P.Z[500]},"&$checked + $track":{backgroundColor:P.Z[500]}},checked:{},track:{}})(h.Z),R=(0,v.Z)((function(e){return{root:{width:42,height:26,padding:0,margin:e.spacing(2)},switchBase:{padding:1,"&$checked":{transform:"translateX(16px)",color:e.palette.common.white,"& + $track":{backgroundColor:"#52d869",opacity:1,border:"none"}},"&$focusVisible $thumb":{color:"#52d869",border:"6px solid #fff"}},thumb:{width:24,height:24},track:{borderRadius:13,border:"1px solid ".concat(e.palette.grey[400]),backgroundColor:e.palette.grey[50],opacity:1,transition:e.transitions.create(["background-color","border"])},checked:{},focusVisible:{}}}))((function(e){var t=e.classes,n=(0,O.Z)(e,["classes"]);return(0,r.jsx)(h.Z,L({focusVisibleClassName:t.focusVisible,disableRipple:!0,classes:{root:t.root,switchBase:t.switchBase,thumb:t.thumb,track:t.track,checked:t.checked}},n))})),D=(0,v.Z)((function(e){return{root:{width:28,height:16,padding:0,display:"flex"},switchBase:{padding:2,color:e.palette.grey[500],"&$checked":{transform:"translateX(12px)",color:e.palette.common.white,"& + $track":{opacity:1,backgroundColor:e.palette.primary.main,borderColor:e.palette.primary.main}}},thumb:{width:12,height:12,boxShadow:"none"},track:{border:"1px solid ".concat(e.palette.grey[500]),borderRadius:8,opacity:1,backgroundColor:e.palette.background.paper},checked:{}}}))(h.Z);function N(){var e=o.useState({checkedA:!0,checkedB:!0,checkedC:!0}),t=(0,m.Z)(e,2),n=t[0],c=t[1],a=function(e){c(L(L({},n),{},(0,s.Z)({},e.target.name,e.target.checked)))};return(0,r.jsxs)(b.Z,{children:[(0,r.jsx)(f.Z,{control:(0,r.jsx)(G,{checked:n.checkedA,onChange:a,name:"checkedA"}),label:"Custom color"}),(0,r.jsx)(f.Z,{control:(0,r.jsx)(R,{checked:n.checkedB,onChange:a,name:"checkedB"}),label:"iOS style"}),(0,r.jsx)(i.Z,{component:"div",children:(0,r.jsxs)(F.Z,{component:"label",container:!0,alignItems:"center",spacing:1,children:[(0,r.jsx)(F.Z,{item:!0,children:"Off"}),(0,r.jsx)(F.Z,{item:!0,children:(0,r.jsx)(D,{checked:n.checkedC,onChange:a,name:"checkedC"})}),(0,r.jsx)(F.Z,{item:!0,children:"On"})]})})]})}function A(){var e=o.useState(!1),t=(0,m.Z)(e,2),n=t[0],c=t[1],a=function(){c((function(e){return!e}))};return(0,r.jsxs)(b.Z,{children:[(0,r.jsx)(f.Z,{control:(0,r.jsx)(h.Z,{size:"small",checked:n,onChange:a}),label:"Small"}),(0,r.jsx)(f.Z,{control:(0,r.jsx)(h.Z,{checked:n,onChange:a}),label:"Normal"})]})}function E(){return(0,r.jsx)(j.Z,{component:"fieldset",children:(0,r.jsxs)(b.Z,{"aria-label":"position",row:!0,children:[(0,r.jsx)(f.Z,{value:"top",control:(0,r.jsx)(h.Z,{color:"primary"}),label:"Top",labelPlacement:"top"}),(0,r.jsx)(f.Z,{value:"start",control:(0,r.jsx)(h.Z,{color:"primary"}),label:"Start",labelPlacement:"start"}),(0,r.jsx)(f.Z,{value:"bottom",control:(0,r.jsx)(h.Z,{color:"primary"}),label:"Bottom",labelPlacement:"bottom"}),(0,r.jsx)(f.Z,{value:"end",control:(0,r.jsx)(h.Z,{color:"primary"}),label:"End",labelPlacement:"end"})]})})}var T=n(39137),$=(0,l.Z)((function(e){return{section:{"&:not(:last-child)":{marginBottom:e.typography.pxToRem(32)}},sectionHeading:{marginBottom:e.typography.pxToRem(16)}}})),z=n(47331),V=[{label:"Basic switches",link:"basic-switches",component:(0,r.jsx)(u,{}),filename:"./BasicSwitches.txt"},{label:"Switch with FormControlLabel",link:"switch-with-form-control-label",component:(0,r.jsx)(x,{}),filename:"./SwitchLabels.txt"},{label:"Switches with FormGroup",link:"switches-with-form-group",component:(0,r.jsx)(S,{}),filename:"./SwitchesGroup.txt"},{label:"Customized switches",link:"customized-switches",component:(0,r.jsx)(N,{}),filename:"./CustomizedSwitches.txt"},{label:"Sizes",link:"sizes",component:(0,r.jsx)(A,{}),filename:"./SwitchesSize.txt"},{label:"Label placement",link:"label-placement",component:(0,r.jsx)(E,{}),filename:"./FormControlLabelPosition.txt"}];function H(){var e=$();return(0,r.jsx)(c.dx,{pageTitle:"Switches",menus:V,children:V.map((function(t,n){return(0,r.jsxs)(a.Z,{id:t.link,className:e.section,children:[(0,r.jsx)(i.Z,{component:"h3",variant:"inherit",className:e.sectionHeading,children:t.label}),(0,r.jsx)(T.Z,{code:z(t.filename).default,language:"jsx",children:t.component})]},n)}))})}},48997:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport Switch from '@material-ui/core/Switch';\nimport { Box } from '@material-ui/core';\n\nexport default function BasicSwitches() {\n  const [state, setState] = React.useState({\n    checkedA: true,\n    checkedB: true,\n  });\n\n  const handleChange = event => {\n    setState({ ...state, [event.target.name]: event.target.checked });\n  };\n\n  return (\n    <Box>\n      <Switch\n        checked={state.checkedA}\n        onChange={handleChange}\n        name=\"checkedA\"\n        inputProps={{ 'aria-label': 'secondary checkbox' }}\n      />\n      <Switch\n        checked={state.checkedB}\n        onChange={handleChange}\n        color=\"primary\"\n        name=\"checkedB\"\n        inputProps={{ 'aria-label': 'primary checkbox' }}\n      />\n      <Switch inputProps={{ 'aria-label': 'primary checkbox' }} />\n      <Switch disabled inputProps={{ 'aria-label': 'disabled checkbox' }} />\n      <Switch disabled checked inputProps={{ 'aria-label': 'primary checkbox' }} />\n      <Switch defaultChecked color=\"default\" inputProps={{ 'aria-label': 'checkbox with default color' }} />\n    </Box>\n  );\n}\n"},30389:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport { withStyles } from '@material-ui/core/styles';\nimport { purple } from '@material-ui/core/colors';\nimport FormGroup from '@material-ui/core/FormGroup';\nimport FormControlLabel from '@material-ui/core/FormControlLabel';\nimport Switch from '@material-ui/core/Switch';\nimport Grid from '@material-ui/core/Grid';\nimport Typography from '@material-ui/core/Typography';\n\nconst PurpleSwitch = withStyles({\n  switchBase: {\n    color: purple[300],\n    '&$checked': {\n      color: purple[500],\n    },\n    '&$checked + $track': {\n      backgroundColor: purple[500],\n    },\n  },\n  checked: {},\n  track: {},\n})(Switch);\n\nconst IOSSwitch = withStyles(theme => ({\n  root: {\n    width: 42,\n    height: 26,\n    padding: 0,\n    margin: theme.spacing(2),\n  },\n  switchBase: {\n    padding: 1,\n    '&$checked': {\n      transform: 'translateX(16px)',\n      color: theme.palette.common.white,\n      '& + $track': {\n        backgroundColor: '#52d869',\n        opacity: 1,\n        border: 'none',\n      },\n    },\n    '&$focusVisible $thumb': {\n      color: '#52d869',\n      border: '6px solid #fff',\n    },\n  },\n  thumb: {\n    width: 24,\n    height: 24,\n  },\n  track: {\n    borderRadius: 26 / 2,\n    border: `1px solid ${theme.palette.grey[400]}`,\n    backgroundColor: theme.palette.grey[50],\n    opacity: 1,\n    transition: theme.transitions.create(['background-color', 'border']),\n  },\n  checked: {},\n  focusVisible: {},\n}))(({ classes, ...props }) => {\n  return (\n    <Switch\n      focusVisibleClassName={classes.focusVisible}\n      disableRipple\n      classes={{\n        root: classes.root,\n        switchBase: classes.switchBase,\n        thumb: classes.thumb,\n        track: classes.track,\n        checked: classes.checked,\n      }}\n      {...props}\n    />\n  );\n});\n\nconst AntSwitch = withStyles(theme => ({\n  root: {\n    width: 28,\n    height: 16,\n    padding: 0,\n    display: 'flex',\n  },\n  switchBase: {\n    padding: 2,\n    color: theme.palette.grey[500],\n    '&$checked': {\n      transform: 'translateX(12px)',\n      color: theme.palette.common.white,\n      '& + $track': {\n        opacity: 1,\n        backgroundColor: theme.palette.primary.main,\n        borderColor: theme.palette.primary.main,\n      },\n    },\n  },\n  thumb: {\n    width: 12,\n    height: 12,\n    boxShadow: 'none',\n  },\n  track: {\n    border: `1px solid ${theme.palette.grey[500]}`,\n    borderRadius: 16 / 2,\n    opacity: 1,\n      backgroundColor: theme.palette.background.paper,\n  },\n  checked: {},\n}))(Switch);\n\nexport default function CustomizedSwitches() {\n  const [state, setState] = React.useState({\n    checkedA: true,\n    checkedB: true,\n    checkedC: true,\n  });\n\n  const handleChange = event => {\n    setState({ ...state, [event.target.name]: event.target.checked });\n  };\n\n  return (\n    <FormGroup>\n      <FormControlLabel\n        control={<PurpleSwitch checked={state.checkedA} onChange={handleChange} name=\"checkedA\" />}\n        label=\"Custom color\"\n      />\n      <FormControlLabel\n        control={<IOSSwitch checked={state.checkedB} onChange={handleChange} name=\"checkedB\" />}\n        label=\"iOS style\"\n      />\n      <Typography component=\"div\">\n        <Grid component=\"label\" container alignItems=\"center\" spacing={1}>\n          <Grid item>Off</Grid>\n          <Grid item>\n            <AntSwitch checked={state.checkedC} onChange={handleChange} name=\"checkedC\" />\n          </Grid>\n          <Grid item>On</Grid>\n        </Grid>\n      </Typography>\n    </FormGroup>\n  );\n}\n"},42275:function(e,t,n){"use strict";n.r(t),t.default='import React from \'react\';\nimport Switch from \'@material-ui/core/Switch\';\nimport FormGroup from \'@material-ui/core/FormGroup\';\nimport FormControlLabel from \'@material-ui/core/FormControlLabel\';\nimport FormControl from \'@material-ui/core/FormControl\';\n\nexport default function FormControlLabelPosition() {\n  return (\n    <FormControl component="fieldset">\n      <FormGroup aria-label="position" row>\n        <FormControlLabel value="top" control={<Switch color="primary" />} label="Top" labelPlacement="top" />\n        <FormControlLabel value="start" control={<Switch color="primary" />} label="Start" labelPlacement="start" />\n        <FormControlLabel value="bottom" control={<Switch color="primary" />} label="Bottom" labelPlacement="bottom" />\n        <FormControlLabel value="end" control={<Switch color="primary" />} label="End" labelPlacement="end" />\n      </FormGroup>\n    </FormControl>\n  );\n}\n'},44635:function(e,t,n){"use strict";n.r(t),t.default='import React from \'react\';\nimport FormGroup from \'@material-ui/core/FormGroup\';\nimport FormControlLabel from \'@material-ui/core/FormControlLabel\';\nimport Switch from \'@material-ui/core/Switch\';\n\nexport default function SwitchLabels() {\n  const [state, setState] = React.useState({\n    checkedA: true,\n    checkedB: true,\n  });\n\n  const handleChange = event => {\n    setState({ ...state, [event.target.name]: event.target.checked });\n  };\n\n  return (\n    <FormGroup row>\n      <FormControlLabel\n        control={<Switch checked={state.checkedA} onChange={handleChange} name="checkedA" />}\n        label="Secondary"\n      />\n      <FormControlLabel\n        control={<Switch checked={state.checkedB} onChange={handleChange} name="checkedB" color="primary" />}\n        label="Primary"\n      />\n      <FormControlLabel control={<Switch />} label="Uncontrolled" />\n      <FormControlLabel disabled control={<Switch />} label="Disabled" />\n      <FormControlLabel disabled control={<Switch checked />} label="Disabled" />\n    </FormGroup>\n  );\n}\n'},16562:function(e,t,n){"use strict";n.r(t),t.default='import React from \'react\';\nimport FormLabel from \'@material-ui/core/FormLabel\';\nimport FormControl from \'@material-ui/core/FormControl\';\nimport FormGroup from \'@material-ui/core/FormGroup\';\nimport FormControlLabel from \'@material-ui/core/FormControlLabel\';\nimport FormHelperText from \'@material-ui/core/FormHelperText\';\nimport Switch from \'@material-ui/core/Switch\';\n\nexport default function SwitchesGroup() {\n  const [state, setState] = React.useState({\n    gilad: true,\n    jason: false,\n    antoine: true,\n  });\n\n  const handleChange = event => {\n    setState({ ...state, [event.target.name]: event.target.checked });\n  };\n\n  return (\n    <FormControl component="fieldset">\n      <FormLabel component="legend">Assign responsibility</FormLabel>\n      <FormGroup>\n        <FormControlLabel\n          control={<Switch checked={state.gilad} onChange={handleChange} name="gilad" />}\n          label="Gilad Gray"\n        />\n        <FormControlLabel\n          control={<Switch checked={state.jason} onChange={handleChange} name="jason" />}\n          label="Jason Killian"\n        />\n        <FormControlLabel\n          control={<Switch checked={state.antoine} onChange={handleChange} name="antoine" />}\n          label="Antoine Llorca"\n        />\n      </FormGroup>\n      <FormHelperText>Be careful</FormHelperText>\n    </FormControl>\n  );\n}\n'},41621:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport Switch from '@material-ui/core/Switch';\nimport FormGroup from '@material-ui/core/FormGroup';\nimport FormControlLabel from '@material-ui/core/FormControlLabel';\n\nexport default function SwitchesSize() {\n  const [checked, setChecked] = React.useState(false);\n\n  const toggleChecked = () => {\n    setChecked(prev => !prev);\n  };\n\n  return (\n    <FormGroup>\n      <FormControlLabel control={<Switch size=\"small\" checked={checked} onChange={toggleChecked} />} label=\"Small\" />\n      <FormControlLabel control={<Switch checked={checked} onChange={toggleChecked} />} label=\"Normal\" />\n    </FormGroup>\n  );\n}\n"}}]);