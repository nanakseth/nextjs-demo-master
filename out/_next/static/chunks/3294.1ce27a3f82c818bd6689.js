(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3294],{10770:function(e,t,r){"use strict";r.d(t,{Z:function(){return b}});var o=r(22122),n=r(85061),i=r(2949),a=r(67294),l=(r(59864),r(45697),r(86010)),c=r(52543),s=r(22318),u=r(59693),d=(0,r(63786).Z)(a.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),p=r(32467);var m=(0,c.Z)((function(e){return{root:{display:"flex",marginLeft:e.spacing(.5),marginRight:e.spacing(.5),backgroundColor:e.palette.grey[100],color:e.palette.grey[700],borderRadius:2,cursor:"pointer","&:hover, &:focus":{backgroundColor:e.palette.grey[200]},"&:active":{boxShadow:e.shadows[0],backgroundColor:(0,u._4)(e.palette.grey[200],.12)}},icon:{width:24,height:16}}}),{name:"PrivateBreadcrumbCollapsed"})((function(e){var t=e.classes,r=(0,i.Z)(e,["classes"]);return a.createElement(p.Z,(0,o.Z)({component:"li",className:t.root,focusRipple:!0},r),a.createElement(d,{className:t.icon}))}));var f=a.forwardRef((function(e,t){var r=e.children,c=e.classes,u=e.className,d=e.component,p=void 0===d?"nav":d,f=e.expandText,b=void 0===f?"Show path":f,h=e.itemsAfterCollapse,g=void 0===h?1:h,x=e.itemsBeforeCollapse,v=void 0===x?1:x,j=e.maxItems,y=void 0===j?8:j,O=e.separator,Z=void 0===O?"/":O,w=(0,i.Z)(e,["children","classes","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"]),S=a.useState(!1),C=S[0],P=S[1],k=a.Children.toArray(r).filter((function(e){return a.isValidElement(e)})).map((function(e,t){return a.createElement("li",{className:c.li,key:"child-".concat(t)},e)}));return a.createElement(s.Z,(0,o.Z)({ref:t,component:p,color:"textSecondary",className:(0,l.Z)(c.root,u)},w),a.createElement("ol",{className:c.ol},function(e,t,r){return e.reduce((function(o,n,i){return i<e.length-1?o=o.concat(n,a.createElement("li",{"aria-hidden":!0,key:"separator-".concat(i),className:t},r)):o.push(n),o}),[])}(C||y&&k.length<=y?k:function(e){return v+g>=e.length?e:[].concat((0,n.Z)(e.slice(0,v)),[a.createElement(m,{"aria-label":b,key:"ellipsis",onClick:function(e){P(!0);var t=e.currentTarget.parentNode.querySelector("a[href],button,[tabindex]");t&&t.focus()}})],(0,n.Z)(e.slice(e.length-g,e.length)))}(k),c.separator,Z)))})),b=(0,c.Z)({root:{},ol:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"},li:{},separator:{display:"flex",userSelect:"none",marginLeft:8,marginRight:8}},{name:"MuiBreadcrumbs"})(f)},67925:function(e,t,r){"use strict";r.d(t,{Z:function(){return f}});var o=r(85893),n=r(38347),i=r(26265),a=r(67294),l=r(28889),c=(r(36591),r(6694),r(46066)),s=r(86010),u=(0,r(41120).Z)((function(e){return{root:{display:"flex",alignItems:"center",padding:"8px 66px 8px 18px",borderBottom:"1px solid ".concat(e.palette.grey[300])},btnRoot:{textTransform:"capitalize",padding:"5px 8px",fontWeight:500,fontSize:16,lineHeight:1},sliderRoot:function(t){return{position:"relative","&.top":{paddingTop:25,"& .slick-dots":{bottom:"auto",left:0,right:0,top:0,zIndex:2}},"&.top-left":{paddingTop:25,"& .slick-dots":{width:"auto",left:0,bottom:"auto",right:"auto",top:0,zIndex:2}},"&.top-right":{paddingTop:25,"& .slick-dots":{left:"auto",width:"auto",bottom:"auto",right:0,top:0,zIndex:2}},"&.bottom":{"& .slick-dots":{left:0,right:0,zIndex:2}},"&.bottom-left":{"& .slick-dots":{left:0,right:"auto",width:"auto",zIndex:2}},"&.bottom-right":{"& .slick-dots":{left:"auto",width:"auto",right:0,zIndex:2}},"& .slick-prev":{left:20,zIndex:10},"& .slick-next":{right:20},"& .slick-prev:before, & .slick-next:before":{color:e.palette.text.primary},"& .slick-dots":{"& li, & li button, & li button:before":{width:t.dotSize,height:t.dotSize,lineHeight:1},"& li button:before":{fontSize:0,content:'""',backgroundColor:t.color,borderRadius:"50%",boxSizing:"border-box"},"& li.slick-active button:before":{backgroundColor:t.activeColor}},"&.outline":{"& .slick-dots":{"& li button:before":{backgroundColor:"transparent",border:"2px solid ".concat(t.color)},"& li.slick-active button:before":{backgroundColor:"transparent",borderColor:t.activeColor}}}}}}}));function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var m=function(e){var t=e.data,r=e.dotSize,i=e.outline,a=e.color,d=e.activeColor,m=e.dotPosition,f=e.renderRow,b=e.settings,h=(0,n.Z)(e,["data","dotSize","outline","color","activeColor","dotPosition","renderRow","settings"]),g=function(e){return p({dots:!0,infinite:!0,arrows:!1,speed:500,slidesToShow:3,slidesToScroll:3},e)}(b),x=u({dotSize:r,outline:i,color:a,activeColor:d});return(0,o.jsx)(l.Z,p(p({},h),{},{children:(0,o.jsx)(c.Z,p(p({className:(0,s.Z)(x.sliderRoot,m,{outline:i})},g),{},{children:t.map((function(e,t){return f(e,t)}))}))}))},f=a.memo(m);m.defaultProps={dotPosition:"bottom",dotSize:10,color:"#7c7c7c",activeColor:"#333333"}},57948:function(e,t,r){"use strict";r.d(t,{nB:function(){return O},dx:function(){return w},Vr:function(){return g},mr:function(){return m}});var o=r(85893),n=r(38347),i=r(26265),a=(r(67294),r(41120)),l=r(28889),c=r(22318),s=r(86010);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p=(0,a.Z)((function(e){return{pageHeaderRoot:(0,i.Z)({display:"flex",flexDirection:"column"},e.breakpoints.up("sm"),{alignItems:"center",flexDirection:"row"}),titleRoot:(0,i.Z)({},e.breakpoints.down("xs"),{marginBottom:10})}})),m=function(e){var t=e.heading,r=e.breadcrumbComponent,i=e.children,a=(0,n.Z)(e,["heading","breadcrumbComponent","children"]),u=p();return(0,o.jsxs)(l.Z,d(d({className:(0,s.Z)(u.pageHeaderRoot,"page-header"),mb:{xs:5,md:6,lg:8}},a),{},{children:[(0,o.jsx)(c.Z,{component:"div",variant:"h1",className:(0,s.Z)(u.titleRoot,"title"),children:t}),(0,o.jsx)(l.Z,{ml:{sm:"auto"},children:r}),i]}))},f=r(10770),b=r(41664),h=(0,a.Z)((function(){return{textSm:{fontSize:12},linkBlock:{display:"block",color:"inherit"}}})),g=function(e){var t=e.items,r=((0,n.Z)(e,["items"]),h());return(0,o.jsx)(f.Z,{className:"bread-crumbs","aria-label":"breadcrumb {...rest}",children:t.map((function(e,t){return e.isActive?(0,o.jsx)(c.Z,{className:r.textSm,color:"textPrimary",children:e.label},t):(0,o.jsx)(b.default,{href:e.link||"/",children:(0,o.jsx)("a",{className:(0,s.Z)(r.textSm,r.linkBlock),children:e.label})},t)}))})},x=r(41749),v=r(14490),j=r(67757),y=r(75322),O=function(e){var t=e.SourceCodeComponent,r=e.SettingsComponent,n=e.children;return(0,o.jsx)(y.Z,{children:(0,o.jsxs)(j.Z,{children:[(0,o.jsxs)(x.Z,{item:!0,xs:12,md:7,children:[(0,o.jsx)(m,{heading:"Preview"}),(0,o.jsx)(l.Z,{mb:8,children:n}),(0,o.jsx)(v.Z,{children:t})]}),(0,o.jsx)(x.Z,{item:!0,xs:12,md:5,children:r})]})})},Z=r(42890),w=function(e){var t=e.pageTitle,r=e.menus,n=e.children,i=[{label:"Home",link:"/"},{label:"Material UI Components",link:"/components/mui"},{label:t,isActive:!0}];return(0,o.jsx)(Z.Z,{pageTitle:t,breadcrumbs:i,menus:r,children:n})}},42890:function(e,t,r){"use strict";var o=r(85893),n=r(26265),i=(r(67294),r(28889)),a=r(82598),l=r(22318),c=r(62822),s=r(50998),u=r(95757),d=r(41120),p=r(75322),m=(0,d.Z)((function(e){var t;return{root:{display:"flex",flexWrap:"wrap"},contentArea:(t={width:"100%"},(0,n.Z)(t,e.breakpoints.up("sm"),{paddingRight:e.typography.pxToRem(30),width:"calc(100% - ".concat(e.typography.pxToRem(175),")")}),(0,n.Z)(t,e.breakpoints.up("lg"),{paddingRight:e.typography.pxToRem(54)}),t),contentSidebar:{width:e.typography.pxToRem(175),height:"calc(100vh - ".concat(e.typography.pxToRem(102),")"),position:"sticky",top:30,overflowY:"auto",flexShrink:0}}}));t.Z=function(e){var t=e.pageTitle,r=e.menus,n=e.breadcrumbs,d=e.children,f=m();return(0,o.jsx)(p.Z,{heading:t,breadcrumbs:n,children:(0,o.jsxs)(i.Z,{className:f.root,children:[(0,o.jsx)(i.Z,{className:f.contentArea,children:d}),(0,o.jsx)(a.Z,{xsDown:!0,children:(0,o.jsxs)(i.Z,{className:f.contentSidebar,children:[(0,o.jsx)(l.Z,{component:"h4",variant:"h4",children:"Contents"}),(0,o.jsx)(c.Z,{children:r.map((function(e,t){return(0,o.jsx)(s.Z,{dense:!0,button:!0,component:"a",href:"#".concat(e.link),children:(0,o.jsx)(u.Z,{primary:e.label})},t)}))})]})})]})})}},75322:function(e,t,r){"use strict";var o=r(26265),n=r(85893),i=(r(67294),r(28889)),a=r(57948),l=r(82285),c=r(32427),s=r(86010);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p=(0,c.Z)((function(e){return{pageFull:{width:"100%"}}}));t.Z=function(e){var t=e.heading,r=e.breadcrumbs,o=e.children,c=e.className,u=e.restProps,m=p();return(0,n.jsx)(l.Z,{in:!0,direction:"up",mountOnEnter:!0,unmountOnExit:!0,children:(0,n.jsxs)(i.Z,d(d({className:(0,s.Z)(m.pageFull,c)},u),{},{children:[(t||r)&&(0,n.jsx)(a.mr,{heading:t,breadcrumbComponent:r&&(0,n.jsx)(a.Vr,{items:r})}),o]}))})}},23294:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return w}});var o=r(85893),n=r(67294),i=r(57948),a=r(26265),l=r(13502),c=r(61974),s=r(60788);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p=function(){var e=(0,n.useContext)(l.Z),t=e.dotPosition,r=e.setDotPosition,i=e.dotStyle,a=e.setDotStyle,u=e.settings,p=e.setCarouselSettings,m=(0,n.useState)("horizontal"),f=m[0],b=m[1];return(0,n.useEffect)((function(){p(d(d({},u),{},"vertical"===f?{vertical:!0,verticalSwiping:!0}:{vertical:!1,verticalSwiping:!1}))}),[f]),(0,o.jsxs)(c.f5,{title:"Cmt Carousel",children:[(0,o.jsx)(c.r4,{title:"Carousel Mode",children:[{label:"Vertical Mode",value:"vertical"},{label:"Horizontal Mode",value:"horizontal"}].map((function(e,t){return(0,o.jsx)(s.Z,{name:"carousel-mode",label:e.label,value:e.value,checked:f===e.value,onChange:function(){return b(e.value)}},t)}))}),(0,o.jsx)(c.r4,{title:"Dot Style",children:[{label:"Outline",value:"outline"},{label:"Contained",value:"contained"}].map((function(e,t){return(0,o.jsx)(s.Z,{name:"dot-style",label:e.label,value:e.value,checked:i===e.value,onChange:function(){return a(e.value)}},t)}))}),(0,o.jsx)(c.r4,{title:"Dot Position",children:[{label:"Top Center",value:"top"},{label:"Top Left",value:"top-left"},{label:"Top Right",value:"top-right"},{label:"Bottom Center",value:"bottom"},{label:"Bottom Left",value:"bottom-left"},{label:"Bottom Right",value:"bottom-right"}].map((function(e,n){return(0,o.jsx)(s.Z,{style:{minWidth:170},name:"dot-position",label:e.label,value:e.value,checked:t===e.value,onChange:function(){return r(e.value)}},n)}))})]})},m=r(28889),f=r(10266),b=r(67925),h=r(64812),g=r(41120),x=r(10887),v=r(22318),j=(0,g.Z)((function(e){return{itemRoot:{padding:1,"& .Cmt-media-object":{paddingLeft:20,paddingRight:20},"& .Cmt-avatar":{height:80,width:80},"& .Cmt-media-header":{marginBottom:12},"& .Cmt-media-image":{marginRight:8}},titleRoot:{fontSize:16},descText:{color:e.palette.text.secondary}}})),y=function(){var e=j(),t=(0,n.useContext)(l.Z),r=t.dotPosition,i=t.dotStyle,a=t.settings,c=f.K.carouselImages;return(0,o.jsx)(b.Z,{outline:"outline"===i,color:"#6200EE",activeColor:"#6200EE",dotSize:10,settings:a,data:c,dotPosition:r,renderRow:function(t,r){return(0,o.jsx)(m.Z,{className:e.itemRoot,children:(0,o.jsx)(x.c2,{children:(0,o.jsx)(h.Z,{avatar:t.profile_pic,avatarPos:"center",title:t.title,titleProps:{className:e.titleRoot},children:(0,o.jsx)(v.Z,{variant:"body2",className:e.descText,children:t.description})})})},r)}})},O=function(e){var t=e.children,r=(0,n.useState)("bottom"),i=r[0],a=r[1],c=(0,n.useState)("outline"),s=c[0],u=c[1],d=(0,n.useState)({slidesToShow:1,slidesToScroll:1,arrows:!0,initialSlide:1,swipeToSlide:!0,vertical:!1,verticalSwiping:!1,adaptiveHeight:!0}),p=d[0],m=d[1];return(0,o.jsx)(l.Z.Provider,{value:{dotPosition:i,setDotPosition:a,dotStyle:s,setDotStyle:u,settings:p,setCarouselSettings:m},children:t})},Z=function(){var e=(0,n.useContext)(l.Z),t=e.dotPosition,r=e.dotStyle,i=e.settings,a=f.K.carouselImages,s=JSON.stringify(a,null,2),u=JSON.stringify(i,null,2);return(0,o.jsx)(c.fB,{sourceCode:"\n<CmtCarousel\n  outline={".concat("outline"===r,'}\n  color="#6200EE"\n  activeColor="#6200EE"\n  dotSize={10}\n  settings={settings}\n  data={carouselImages}\n  dotPosition="').concat(t,'"\n  renderRow={renderRow}\n/>\n\nconst renderRow = (item, index) => {\n  return (\n    <Box key={index} className={classes.itemRoot}>\n      <JumboCard>\n        <CmtMediaObject\n          avatar={item.profile_pic}\n          avatarPos="center"\n          title={item.title}\n          titleProps={{ className: classes.titleRoot }}>\n          <Typography variant="body2" className={classes.descText}>\n            {item.description}\n          </Typography>\n        </CmtMediaObject>\n      </JumboCard>\n    </Box>\n  );\n};\n\nconst settings = ').concat(u,";\n\nconst carouselImages = ").concat(s,";\n")})},w=function(){return(0,o.jsx)(O,{children:(0,o.jsx)(i.nB,{SourceCodeComponent:(0,o.jsx)(Z,{}),SettingsComponent:(0,o.jsx)(p,{}),children:(0,o.jsx)(y,{})})})}}}]);