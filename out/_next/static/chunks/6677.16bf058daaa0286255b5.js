(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6677],{65762:function(e,n,t){var o={"./CustomizedDividers.txt":14667,"./StandaloneToggleButton.txt":76653,"./ToggleButtonNotEmpty.txt":42997,"./ToggleButtonSizes.txt":59521,"./ToggleButtonsExclusive.txt":68885,"./ToggleButtonsMultiple.txt":459,"./VerticalToggleButtons.txt":36883};function l(e){var n=i(e);return t(n)}function i(e){if(!t.o(o,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return o[e]}l.keys=function(){return Object.keys(o)},l.resolve=i,e.exports=l,l.id=65762},57948:function(e,n,t){"use strict";t.d(n,{nB:function(){return B},dx:function(){return F},Vr:function(){return x},mr:function(){return d}});var o=t(85893),l=t(38347),i=t(26265),r=(t(67294),t(41120)),a=t(28889),u=t(22318),s=t(86010);function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function g(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var m=(0,r.Z)((function(e){return{pageHeaderRoot:(0,i.Z)({display:"flex",flexDirection:"column"},e.breakpoints.up("sm"),{alignItems:"center",flexDirection:"row"}),titleRoot:(0,i.Z)({},e.breakpoints.down("xs"),{marginBottom:10})}})),d=function(e){var n=e.heading,t=e.breadcrumbComponent,i=e.children,r=(0,l.Z)(e,["heading","breadcrumbComponent","children"]),c=m();return(0,o.jsxs)(a.Z,g(g({className:(0,s.Z)(c.pageHeaderRoot,"page-header"),mb:{xs:5,md:6,lg:8}},r),{},{children:[(0,o.jsx)(u.Z,{component:"div",variant:"h1",className:(0,s.Z)(c.titleRoot,"title"),children:n}),(0,o.jsx)(a.Z,{ml:{sm:"auto"},children:t}),i]}))},f=t(10770),p=t(41664),h=(0,r.Z)((function(){return{textSm:{fontSize:12},linkBlock:{display:"block",color:"inherit"}}})),x=function(e){var n=e.items,t=((0,l.Z)(e,["items"]),h());return(0,o.jsx)(f.Z,{className:"bread-crumbs","aria-label":"breadcrumb {...rest}",children:n.map((function(e,n){return e.isActive?(0,o.jsx)(u.Z,{className:t.textSm,color:"textPrimary",children:e.label},n):(0,o.jsx)(p.default,{href:e.link||"/",children:(0,o.jsx)("a",{className:(0,s.Z)(t.textSm,t.linkBlock),children:e.label})},n)}))})},v=t(41749),b=t(14490),j=t(67757),T=t(75322),B=function(e){var n=e.SourceCodeComponent,t=e.SettingsComponent,l=e.children;return(0,o.jsx)(T.Z,{children:(0,o.jsxs)(j.Z,{children:[(0,o.jsxs)(v.Z,{item:!0,xs:12,md:7,children:[(0,o.jsx)(d,{heading:"Preview"}),(0,o.jsx)(a.Z,{mb:8,children:l}),(0,o.jsx)(b.Z,{children:n})]}),(0,o.jsx)(v.Z,{item:!0,xs:12,md:5,children:t})]})})},Z=t(42890),F=function(e){var n=e.pageTitle,t=e.menus,l=e.children,i=[{label:"Home",link:"/"},{label:"Material UI Components",link:"/components/mui"},{label:n,isActive:!0}];return(0,o.jsx)(Z.Z,{pageTitle:n,breadcrumbs:i,menus:t,children:l})}},42890:function(e,n,t){"use strict";var o=t(85893),l=t(26265),i=(t(67294),t(28889)),r=t(82598),a=t(22318),u=t(62822),s=t(50998),c=t(95757),g=t(41120),m=t(75322),d=(0,g.Z)((function(e){var n;return{root:{display:"flex",flexWrap:"wrap"},contentArea:(n={width:"100%"},(0,l.Z)(n,e.breakpoints.up("sm"),{paddingRight:e.typography.pxToRem(30),width:"calc(100% - ".concat(e.typography.pxToRem(175),")")}),(0,l.Z)(n,e.breakpoints.up("lg"),{paddingRight:e.typography.pxToRem(54)}),n),contentSidebar:{width:e.typography.pxToRem(175),height:"calc(100vh - ".concat(e.typography.pxToRem(102),")"),position:"sticky",top:30,overflowY:"auto",flexShrink:0}}}));n.Z=function(e){var n=e.pageTitle,t=e.menus,l=e.breadcrumbs,g=e.children,f=d();return(0,o.jsx)(m.Z,{heading:n,breadcrumbs:l,children:(0,o.jsxs)(i.Z,{className:f.root,children:[(0,o.jsx)(i.Z,{className:f.contentArea,children:g}),(0,o.jsx)(r.Z,{xsDown:!0,children:(0,o.jsxs)(i.Z,{className:f.contentSidebar,children:[(0,o.jsx)(a.Z,{component:"h4",variant:"h4",children:"Contents"}),(0,o.jsx)(u.Z,{children:t.map((function(e,n){return(0,o.jsx)(s.Z,{dense:!0,button:!0,component:"a",href:"#".concat(e.link),children:(0,o.jsx)(c.Z,{primary:e.label})},n)}))})]})})]})})}},75322:function(e,n,t){"use strict";var o=t(26265),l=t(85893),i=(t(67294),t(28889)),r=t(57948),a=t(82285),u=t(32427),s=t(86010);function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function g(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var m=(0,u.Z)((function(e){return{pageFull:{width:"100%"}}}));n.Z=function(e){var n=e.heading,t=e.breadcrumbs,o=e.children,u=e.className,c=e.restProps,d=m();return(0,l.jsx)(a.Z,{in:!0,direction:"up",mountOnEnter:!0,unmountOnExit:!0,children:(0,l.jsxs)(i.Z,g(g({className:(0,s.Z)(d.pageFull,u)},c),{},{children:[(n||t)&&(0,l.jsx)(r.mr,{heading:n,breadcrumbComponent:t&&(0,l.jsx)(r.Vr,{items:t})}),o]}))})}},6677:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return Q}});var o=t(85893),l=t(67294),i=t(57948),r=t(28889),a=t(22318),u=t(94111),s=t(39137),c=t(64121),g=t(56312),m=t(57552),d=t(51828),f=t(44001),p=t(5391),h=t(26663);function x(){var e=l.useState("left"),n=(0,c.Z)(e,2),t=n[0],i=n[1];return(0,o.jsxs)(h.Z,{value:t,exclusive:!0,onChange:function(e,n){i(n)},"aria-label":"text alignment",children:[(0,o.jsx)(p.Z,{value:"left","aria-label":"left aligned",children:(0,o.jsx)(g.Z,{})}),(0,o.jsx)(p.Z,{value:"center","aria-label":"centered",children:(0,o.jsx)(m.Z,{})}),(0,o.jsx)(p.Z,{value:"right","aria-label":"right aligned",children:(0,o.jsx)(d.Z,{})}),(0,o.jsx)(p.Z,{value:"justify","aria-label":"justified",disabled:!0,children:(0,o.jsx)(f.Z,{})})]})}var v=t(92760),b=t(89396),j=t(68921),T=t(20590),B=t(89039);function Z(){var e=l.useState((function(){return["bold","italic"]})),n=(0,c.Z)(e,2),t=n[0],i=n[1];return(0,o.jsxs)(h.Z,{value:t,onChange:function(e,n){i(n)},"aria-label":"text formatting",children:[(0,o.jsx)(p.Z,{value:"bold","aria-label":"bold",children:(0,o.jsx)(v.Z,{})}),(0,o.jsx)(p.Z,{value:"italic","aria-label":"italic",children:(0,o.jsx)(b.Z,{})}),(0,o.jsx)(p.Z,{value:"underlined","aria-label":"underlined",children:(0,o.jsx)(j.Z,{})}),(0,o.jsxs)(p.Z,{value:"color","aria-label":"color",disabled:!0,children:[(0,o.jsx)(T.Z,{}),(0,o.jsx)(B.Z,{})]})]})}var F=t(41749),y=t(67757);function A(){var e=l.useState("left"),n=(0,c.Z)(e,2),t=n[0],i=n[1],r=function(e,n){i(n)};return(0,o.jsxs)(y.Z,{spacing:2,direction:"column",alignItems:"center",children:[(0,o.jsx)(F.Z,{item:!0,children:(0,o.jsxs)(h.Z,{size:"small",value:t,exclusive:!0,onChange:r,children:[(0,o.jsx)(p.Z,{value:"left",children:(0,o.jsx)(g.Z,{fontSize:"small"})}),(0,o.jsx)(p.Z,{value:"center",children:(0,o.jsx)(m.Z,{fontSize:"small"})}),(0,o.jsx)(p.Z,{value:"right",children:(0,o.jsx)(d.Z,{fontSize:"small"})}),(0,o.jsx)(p.Z,{value:"justify",children:(0,o.jsx)(f.Z,{fontSize:"small"})})]})}),(0,o.jsx)(F.Z,{item:!0,children:(0,o.jsxs)(h.Z,{size:"medium",value:t,exclusive:!0,onChange:r,children:[(0,o.jsx)(p.Z,{value:"left",children:(0,o.jsx)(g.Z,{})}),(0,o.jsx)(p.Z,{value:"center",children:(0,o.jsx)(m.Z,{})}),(0,o.jsx)(p.Z,{value:"right",children:(0,o.jsx)(d.Z,{})}),(0,o.jsx)(p.Z,{value:"justify",children:(0,o.jsx)(f.Z,{})})]})}),(0,o.jsx)(F.Z,{item:!0,children:(0,o.jsxs)(h.Z,{size:"large",value:t,exclusive:!0,onChange:r,children:[(0,o.jsx)(p.Z,{value:"left",children:(0,o.jsx)(g.Z,{})}),(0,o.jsx)(p.Z,{value:"center",children:(0,o.jsx)(m.Z,{})}),(0,o.jsx)(p.Z,{value:"right",children:(0,o.jsx)(d.Z,{})}),(0,o.jsx)(p.Z,{value:"justify",children:(0,o.jsx)(f.Z,{})})]})})]})}var I=t(3133),w=t(79361),C=t(53081);function S(){var e=l.useState("list"),n=(0,c.Z)(e,2),t=n[0],i=n[1];return(0,o.jsxs)(h.Z,{orientation:"vertical",value:t,exclusive:!0,onChange:function(e,n){i(n)},children:[(0,o.jsx)(p.Z,{value:"list","aria-label":"list",children:(0,o.jsx)(I.Z,{})}),(0,o.jsx)(p.Z,{value:"module","aria-label":"module",children:(0,o.jsx)(w.Z,{})}),(0,o.jsx)(p.Z,{value:"quilt","aria-label":"quilt",children:(0,o.jsx)(C.Z,{})})]})}var G=t(41120),R=t(45387),k=t(32889),O=t(31964),D=(0,G.Z)((function(e){return{toggleContainer:{margin:e.spacing(2,0)}}}));function z(){var e=l.useState("left"),n=(0,c.Z)(e,2),t=n[0],i=n[1],r=l.useState((function(){return["phone"]})),a=(0,c.Z)(r,2),u=a[0],s=a[1],x=D();return(0,o.jsxs)(y.Z,{spacing:2,children:[(0,o.jsx)(F.Z,{item:!0,sm:12,md:6,children:(0,o.jsx)("div",{className:x.toggleContainer,children:(0,o.jsxs)(h.Z,{value:t,exclusive:!0,onChange:function(e,n){null!==n&&i(n)},"aria-label":"text alignment",children:[(0,o.jsx)(p.Z,{value:"left","aria-label":"left aligned",children:(0,o.jsx)(g.Z,{})}),(0,o.jsx)(p.Z,{value:"center","aria-label":"centered",children:(0,o.jsx)(m.Z,{})}),(0,o.jsx)(p.Z,{value:"right","aria-label":"right aligned",children:(0,o.jsx)(d.Z,{})}),(0,o.jsx)(p.Z,{value:"justify","aria-label":"justified",disabled:!0,children:(0,o.jsx)(f.Z,{})})]})})}),(0,o.jsx)(F.Z,{item:!0,sm:12,md:6,children:(0,o.jsx)("div",{className:x.toggleContainer,children:(0,o.jsxs)(h.Z,{value:u,onChange:function(e,n){n.length&&s(n)},"aria-label":"device",children:[(0,o.jsx)(p.Z,{value:"laptop","aria-label":"laptop",children:(0,o.jsx)(R.Z,{})}),(0,o.jsx)(p.Z,{value:"tv","aria-label":"tv",children:(0,o.jsx)(k.Z,{})}),(0,o.jsx)(p.Z,{value:"phone","aria-label":"phone",children:(0,o.jsx)(O.Z,{})})]})})})]})}var N=t(41959);function P(){var e=l.useState(!1),n=(0,c.Z)(e,2),t=n[0],i=n[1];return(0,o.jsx)(p.Z,{value:"check",selected:t,onChange:function(){i(!t)},children:(0,o.jsx)(N.Z,{})})}var L=t(52543),V=t(55517),E=t(79895),J=(0,G.Z)((function(e){return{paper:{display:"flex",border:"1px solid ".concat(e.palette.divider),flexWrap:"wrap"},divider:{margin:e.spacing(1,.5)}}})),M=(0,L.Z)((function(e){return{grouped:{margin:e.spacing(.5),border:"none","&:not(:first-child)":{borderRadius:e.shape.borderRadius},"&:first-child":{borderRadius:e.shape.borderRadius}}}}))(h.Z);function U(){var e=l.useState("left"),n=(0,c.Z)(e,2),t=n[0],i=n[1],r=l.useState((function(){return["italic"]})),a=(0,c.Z)(r,2),u=a[0],s=a[1],h=J();return(0,o.jsx)("div",{children:(0,o.jsxs)(E.Z,{elevation:0,className:h.paper,children:[(0,o.jsxs)(M,{size:"small",value:t,exclusive:!0,onChange:function(e,n){i(n)},"aria-label":"text alignment",children:[(0,o.jsx)(p.Z,{value:"left","aria-label":"left aligned",children:(0,o.jsx)(g.Z,{})}),(0,o.jsx)(p.Z,{value:"center","aria-label":"centered",children:(0,o.jsx)(m.Z,{})}),(0,o.jsx)(p.Z,{value:"right","aria-label":"right aligned",children:(0,o.jsx)(d.Z,{})}),(0,o.jsx)(p.Z,{value:"justify","aria-label":"justified",disabled:!0,children:(0,o.jsx)(f.Z,{})})]}),(0,o.jsx)(V.Z,{flexItem:!0,orientation:"vertical",className:h.divider}),(0,o.jsxs)(M,{size:"small",value:u,onChange:function(e,n){s(n)},"aria-label":"text formatting",children:[(0,o.jsx)(p.Z,{value:"bold","aria-label":"bold",children:(0,o.jsx)(v.Z,{})}),(0,o.jsx)(p.Z,{value:"italic","aria-label":"italic",children:(0,o.jsx)(b.Z,{})}),(0,o.jsx)(p.Z,{value:"underlined","aria-label":"underlined",children:(0,o.jsx)(j.Z,{})}),(0,o.jsxs)(p.Z,{value:"color","aria-label":"color",disabled:!0,children:[(0,o.jsx)(T.Z,{}),(0,o.jsx)(B.Z,{})]})]})]})})}var _=(0,u.Z)((function(e){return{section:{"&:not(:last-child)":{marginBottom:e.typography.pxToRem(32)}},sectionHeading:{marginBottom:e.typography.pxToRem(16)}}})),H=t(65762),q=[{label:"Exclusive selection",link:"exclusive-selection",component:(0,o.jsx)(x,{}),filename:"./ToggleButtonsExclusive.txt"},{label:"Multiple selection",link:"multiple-selection",component:(0,o.jsx)(Z,{}),filename:"./ToggleButtonsMultiple.txt"},{label:"Sizes",link:"sizes",component:(0,o.jsx)(A,{}),filename:"./ToggleButtonSizes.txt"},{label:"Vertical buttons",link:"vertical-buttons",component:(0,o.jsx)(S,{}),filename:"./VerticalToggleButtons.txt"},{label:"Enforce value set",link:"enforce-value-set",component:(0,o.jsx)(z,{}),filename:"./ToggleButtonNotEmpty.txt"},{label:"Standalone toggle button",link:"standalone-toggle-button",component:(0,o.jsx)(P,{}),filename:"./StandaloneToggleButton.txt"},{label:"Customized toggle button",link:"customized-toggle-button",component:(0,o.jsx)(U,{}),filename:"./CustomizedDividers.txt"}];function Q(){var e=_();return(0,o.jsx)(i.dx,{pageTitle:"Toggle Buttons",menus:q,children:q.map((function(n,t){return(0,o.jsxs)(r.Z,{id:n.link,className:e.section,children:[(0,o.jsx)(a.Z,{component:"h3",variant:"inherit",className:e.sectionHeading,children:n.label}),(0,o.jsx)(s.Z,{code:H(n.filename).default,language:"jsx",children:n.component})]},t)}))})}},14667:function(e,n,t){"use strict";t.r(n),n.default="import React from 'react';\nimport { makeStyles, withStyles } from '@material-ui/core/styles';\nimport FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';\nimport FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';\nimport FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';\nimport FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';\nimport FormatBoldIcon from '@material-ui/icons/FormatBold';\nimport FormatItalicIcon from '@material-ui/icons/FormatItalic';\nimport FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined';\nimport FormatColorFillIcon from '@material-ui/icons/FormatColorFill';\nimport ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';\nimport Divider from '@material-ui/core/Divider';\nimport Paper from '@material-ui/core/Paper';\nimport ToggleButton from '@material-ui/lab/ToggleButton';\nimport ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';\n\nconst useStyles = makeStyles(theme => ({\n  paper: {\n    display: 'flex',\n    border: `1px solid ${theme.palette.divider}`,\n    flexWrap: 'wrap',\n  },\n  divider: {\n    margin: theme.spacing(1, 0.5),\n  },\n}));\n\nconst StyledToggleButtonGroup = withStyles(theme => ({\n  grouped: {\n    margin: theme.spacing(0.5),\n    border: 'none',\n    '&:not(:first-child)': {\n      borderRadius: theme.shape.borderRadius,\n    },\n    '&:first-child': {\n      borderRadius: theme.shape.borderRadius,\n    },\n  },\n}))(ToggleButtonGroup);\n\nexport default function CustomizedDividers() {\n  const [alignment, setAlignment] = React.useState('left');\n  const [formats, setFormats] = React.useState(() => ['italic']);\n\n  const handleFormat = (event, newFormats) => {\n    setFormats(newFormats);\n  };\n\n  const handleAlignment = (event, newAlignment) => {\n    setAlignment(newAlignment);\n  };\n\n  const classes = useStyles();\n\n  return (\n    <div>\n      <Paper elevation={0} className={classes.paper}>\n        <StyledToggleButtonGroup\n          size=\"small\"\n          value={alignment}\n          exclusive\n          onChange={handleAlignment}\n          aria-label=\"text alignment\">\n          <ToggleButton value=\"left\" aria-label=\"left aligned\">\n            <FormatAlignLeftIcon />\n          </ToggleButton>\n          <ToggleButton value=\"center\" aria-label=\"centered\">\n            <FormatAlignCenterIcon />\n          </ToggleButton>\n          <ToggleButton value=\"right\" aria-label=\"right aligned\">\n            <FormatAlignRightIcon />\n          </ToggleButton>\n          <ToggleButton value=\"justify\" aria-label=\"justified\" disabled>\n            <FormatAlignJustifyIcon />\n          </ToggleButton>\n        </StyledToggleButtonGroup>\n        <Divider flexItem orientation=\"vertical\" className={classes.divider} />\n        <StyledToggleButtonGroup size=\"small\" value={formats} onChange={handleFormat} aria-label=\"text formatting\">\n          <ToggleButton value=\"bold\" aria-label=\"bold\">\n            <FormatBoldIcon />\n          </ToggleButton>\n          <ToggleButton value=\"italic\" aria-label=\"italic\">\n            <FormatItalicIcon />\n          </ToggleButton>\n          <ToggleButton value=\"underlined\" aria-label=\"underlined\">\n            <FormatUnderlinedIcon />\n          </ToggleButton>\n          <ToggleButton value=\"color\" aria-label=\"color\" disabled>\n            <FormatColorFillIcon />\n            <ArrowDropDownIcon />\n          </ToggleButton>\n        </StyledToggleButtonGroup>\n      </Paper>\n    </div>\n  );\n}\n"},76653:function(e,n,t){"use strict";t.r(n),n.default="import React from 'react';\nimport CheckIcon from '@material-ui/icons/Check';\nimport ToggleButton from '@material-ui/lab/ToggleButton';\n\nexport default function StandaloneToggleButton() {\n  const [selected, setSelected] = React.useState(false);\n\n  return (\n    <ToggleButton\n      value=\"check\"\n      selected={selected}\n      onChange={() => {\n        setSelected(!selected);\n      }}>\n      <CheckIcon />\n    </ToggleButton>\n  );\n}\n"},42997:function(e,n,t){"use strict";t.r(n),n.default='import React from \'react\';\nimport { makeStyles } from \'@material-ui/core/styles\';\nimport FormatAlignLeftIcon from \'@material-ui/icons/FormatAlignLeft\';\nimport FormatAlignCenterIcon from \'@material-ui/icons/FormatAlignCenter\';\nimport FormatAlignRightIcon from \'@material-ui/icons/FormatAlignRight\';\nimport FormatAlignJustifyIcon from \'@material-ui/icons/FormatAlignJustify\';\nimport LaptopIcon from \'@material-ui/icons/Laptop\';\nimport TvIcon from \'@material-ui/icons/Tv\';\nimport PhoneAndroidIcon from \'@material-ui/icons/PhoneAndroid\';\nimport Grid from \'@material-ui/core/Grid\';\nimport ToggleButton from \'@material-ui/lab/ToggleButton\';\nimport ToggleButtonGroup from \'@material-ui/lab/ToggleButtonGroup\';\n\nconst useStyles = makeStyles(theme => ({\n  toggleContainer: {\n    margin: theme.spacing(2, 0),\n  },\n}));\n\nexport default function ToggleButtonNotEmpty() {\n  const [alignment, setAlignment] = React.useState(\'left\');\n  const [formats, setFormats] = React.useState(() => [\'phone\']);\n\n  const handleFormat = (event, newFormats) => {\n    if (newFormats.length) {\n      setFormats(newFormats);\n    }\n  };\n\n  const handleAlignment = (event, newAlignment) => {\n    if (newAlignment !== null) {\n      setAlignment(newAlignment);\n    }\n  };\n\n  const classes = useStyles();\n\n  return (\n    <Grid container spacing={2}>\n      <Grid item sm={12} md={6}>\n        <div className={classes.toggleContainer}>\n          <ToggleButtonGroup value={alignment} exclusive onChange={handleAlignment} aria-label="text alignment">\n            <ToggleButton value="left" aria-label="left aligned">\n              <FormatAlignLeftIcon />\n            </ToggleButton>\n            <ToggleButton value="center" aria-label="centered">\n              <FormatAlignCenterIcon />\n            </ToggleButton>\n            <ToggleButton value="right" aria-label="right aligned">\n              <FormatAlignRightIcon />\n            </ToggleButton>\n            <ToggleButton value="justify" aria-label="justified" disabled>\n              <FormatAlignJustifyIcon />\n            </ToggleButton>\n          </ToggleButtonGroup>\n        </div>\n      </Grid>\n      <Grid item sm={12} md={6}>\n        <div className={classes.toggleContainer}>\n          <ToggleButtonGroup value={formats} onChange={handleFormat} aria-label="device">\n            <ToggleButton value="laptop" aria-label="laptop">\n              <LaptopIcon />\n            </ToggleButton>\n            <ToggleButton value="tv" aria-label="tv">\n              <TvIcon />\n            </ToggleButton>\n            <ToggleButton value="phone" aria-label="phone">\n              <PhoneAndroidIcon />\n            </ToggleButton>\n          </ToggleButtonGroup>\n        </div>\n      </Grid>\n    </Grid>\n  );\n}\n'},59521:function(e,n,t){"use strict";t.r(n),n.default='import React from \'react\';\nimport FormatAlignLeftIcon from \'@material-ui/icons/FormatAlignLeft\';\nimport FormatAlignCenterIcon from \'@material-ui/icons/FormatAlignCenter\';\nimport FormatAlignRightIcon from \'@material-ui/icons/FormatAlignRight\';\nimport FormatAlignJustifyIcon from \'@material-ui/icons/FormatAlignJustify\';\nimport Grid from \'@material-ui/core/Grid\';\nimport ToggleButton from \'@material-ui/lab/ToggleButton\';\nimport ToggleButtonGroup from \'@material-ui/lab/ToggleButtonGroup\';\n\nexport default function ToggleButtonSizes() {\n  const [alignment, setAlignment] = React.useState(\'left\');\n\n  const handleChange = (event, newAlignment) => {\n    setAlignment(newAlignment);\n  };\n\n  return (\n    <Grid container spacing={2} direction="column" alignItems="center">\n      <Grid item>\n        <ToggleButtonGroup size="small" value={alignment} exclusive onChange={handleChange}>\n          <ToggleButton value="left">\n            <FormatAlignLeftIcon fontSize="small" />\n          </ToggleButton>\n          <ToggleButton value="center">\n            <FormatAlignCenterIcon fontSize="small" />\n          </ToggleButton>\n          <ToggleButton value="right">\n            <FormatAlignRightIcon fontSize="small" />\n          </ToggleButton>\n          <ToggleButton value="justify">\n            <FormatAlignJustifyIcon fontSize="small" />\n          </ToggleButton>\n        </ToggleButtonGroup>\n      </Grid>\n      <Grid item>\n        <ToggleButtonGroup size="medium" value={alignment} exclusive onChange={handleChange}>\n          <ToggleButton value="left">\n            <FormatAlignLeftIcon />\n          </ToggleButton>\n          <ToggleButton value="center">\n            <FormatAlignCenterIcon />\n          </ToggleButton>\n          <ToggleButton value="right">\n            <FormatAlignRightIcon />\n          </ToggleButton>\n          <ToggleButton value="justify">\n            <FormatAlignJustifyIcon />\n          </ToggleButton>\n        </ToggleButtonGroup>\n      </Grid>\n      <Grid item>\n        <ToggleButtonGroup size="large" value={alignment} exclusive onChange={handleChange}>\n          <ToggleButton value="left">\n            <FormatAlignLeftIcon />\n          </ToggleButton>\n          <ToggleButton value="center">\n            <FormatAlignCenterIcon />\n          </ToggleButton>\n          <ToggleButton value="right">\n            <FormatAlignRightIcon />\n          </ToggleButton>\n          <ToggleButton value="justify">\n            <FormatAlignJustifyIcon />\n          </ToggleButton>\n        </ToggleButtonGroup>\n      </Grid>\n    </Grid>\n  );\n}\n'},68885:function(e,n,t){"use strict";t.r(n),n.default='import React from \'react\';\nimport FormatAlignLeftIcon from \'@material-ui/icons/FormatAlignLeft\';\nimport FormatAlignCenterIcon from \'@material-ui/icons/FormatAlignCenter\';\nimport FormatAlignRightIcon from \'@material-ui/icons/FormatAlignRight\';\nimport FormatAlignJustifyIcon from \'@material-ui/icons/FormatAlignJustify\';\nimport ToggleButton from \'@material-ui/lab/ToggleButton\';\nimport ToggleButtonGroup from \'@material-ui/lab/ToggleButtonGroup\';\n\nexport default function ToggleButtonsExclusive() {\n  const [alignment, setAlignment] = React.useState(\'left\');\n\n  const handleAlignment = (event, newAlignment) => {\n    setAlignment(newAlignment);\n  };\n\n  return (\n    <ToggleButtonGroup value={alignment} exclusive onChange={handleAlignment} aria-label="text alignment">\n      <ToggleButton value="left" aria-label="left aligned">\n        <FormatAlignLeftIcon />\n      </ToggleButton>\n      <ToggleButton value="center" aria-label="centered">\n        <FormatAlignCenterIcon />\n      </ToggleButton>\n      <ToggleButton value="right" aria-label="right aligned">\n        <FormatAlignRightIcon />\n      </ToggleButton>\n      <ToggleButton value="justify" aria-label="justified" disabled>\n        <FormatAlignJustifyIcon />\n      </ToggleButton>\n    </ToggleButtonGroup>\n  );\n}\n'},459:function(e,n,t){"use strict";t.r(n),n.default="import React from 'react';\nimport FormatBoldIcon from '@material-ui/icons/FormatBold';\nimport FormatItalicIcon from '@material-ui/icons/FormatItalic';\nimport FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined';\nimport FormatColorFillIcon from '@material-ui/icons/FormatColorFill';\nimport ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';\nimport ToggleButton from '@material-ui/lab/ToggleButton';\nimport ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';\n\nexport default function ToggleButtonsMultiple() {\n  const [formats, setFormats] = React.useState(() => ['bold', 'italic']);\n\n  const handleFormat = (event, newFormats) => {\n    setFormats(newFormats);\n  };\n\n  return (\n    <ToggleButtonGroup value={formats} onChange={handleFormat} aria-label=\"text formatting\">\n      <ToggleButton value=\"bold\" aria-label=\"bold\">\n        <FormatBoldIcon />\n      </ToggleButton>\n      <ToggleButton value=\"italic\" aria-label=\"italic\">\n        <FormatItalicIcon />\n      </ToggleButton>\n      <ToggleButton value=\"underlined\" aria-label=\"underlined\">\n        <FormatUnderlinedIcon />\n      </ToggleButton>\n      <ToggleButton value=\"color\" aria-label=\"color\" disabled>\n        <FormatColorFillIcon />\n        <ArrowDropDownIcon />\n      </ToggleButton>\n    </ToggleButtonGroup>\n  );\n}\n"},36883:function(e,n,t){"use strict";t.r(n),n.default="import React from 'react';\nimport ViewListIcon from '@material-ui/icons/ViewList';\nimport ViewModuleIcon from '@material-ui/icons/ViewModule';\nimport ViewQuiltIcon from '@material-ui/icons/ViewQuilt';\nimport ToggleButton from '@material-ui/lab/ToggleButton';\nimport ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';\n\nexport default function VerticalToggleButtons() {\n  const [view, setView] = React.useState('list');\n\n  const handleChange = (event, nextView) => {\n    setView(nextView);\n  };\n\n  return (\n    <ToggleButtonGroup orientation=\"vertical\" value={view} exclusive onChange={handleChange}>\n      <ToggleButton value=\"list\" aria-label=\"list\">\n        <ViewListIcon />\n      </ToggleButton>\n      <ToggleButton value=\"module\" aria-label=\"module\">\n        <ViewModuleIcon />\n      </ToggleButton>\n      <ToggleButton value=\"quilt\" aria-label=\"quilt\">\n        <ViewQuiltIcon />\n      </ToggleButton>\n    </ToggleButtonGroup>\n  );\n}\n"}}]);