(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7562],{34659:function(e,t,r){"use strict";var n=r(95318),o=r(20862);t.Z=void 0;var a=o(r(67294)),l=(0,n(r(2108)).default)(a.createElement("path",{d:"M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z"}),"ShowChart");t.Z=l},24433:function(e,t,r){"use strict";var n=r(22122),o=r(2949),a=r(67294),l=(r(45697),r(59864),r(86010)),i=r(52543),c=r(33901),s={small:-16,medium:null},d=a.forwardRef((function(e,t){var r=e.children,i=e.classes,d=e.className,u=e.max,m=void 0===u?5:u,p=e.spacing,f=void 0===p?"medium":p,h=(0,o.Z)(e,["children","classes","className","max","spacing"]),x=m<2?2:m,g=a.Children.toArray(r).filter((function(e){return a.isValidElement(e)})),b=g.length>x?g.length-x+1:0,j=f&&void 0!==s[f]?s[f]:-f;return a.createElement("div",(0,n.Z)({className:(0,l.Z)(i.root,d),ref:t},h),g.slice(0,g.length-b).map((function(e,t){return a.cloneElement(e,{className:(0,l.Z)(e.props.className,i.avatar),style:(0,n.Z)({zIndex:g.length-t,marginLeft:0===t?void 0:j},e.props.style)})})),b?a.createElement(c.Z,{className:i.avatar,style:{zIndex:0,marginLeft:j}},"+",b):null)}));t.Z=(0,i.Z)((function(e){return{root:{display:"flex"},avatar:{border:"2px solid ".concat(e.palette.background.default),marginLeft:-8,"&:first-child":{marginLeft:0}}}}),{name:"MuiAvatarGroup"})(d)},44437:function(e,t,r){"use strict";var n=r(85893),o=r(26265),a=r(38347),l=r(67294),i=r(45697),c=r.n(i),s=r(86010),d=r(24433),u=r(41120),m=r(868),p=r(52795),f=r(88241);function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var g=(0,u.Z)((function(e){return{rootAvatarGroup:function(t){return{"& .MuiAvatar-root":{borderColor:t.avatarStyle.outlineColor,borderWidth:t.avatarStyle.outlineThickness,marginLeft:-t.spacing,transition:"all 0.30s ease","&:first-child":{marginLeft:0},"&:hover":{borderColor:t.avatarActiveStyle.outlineColor?t.avatarActiveStyle.outlineColor:e.palette.primary.main,borderWidth:t.avatarActiveStyle.outlineThickness,boxShadow:"rgba(0,0,0,0.2) 0px 2px ".concat(t.avatarActiveStyle.elevation,"px -1px"),zIndex:"".concat(t.totalRecords," !important")}},"&:hover .Cmt-hoverEffect":{marginLeft:0}}}}})),b=function(e,t){if(e&&t>0)return e.substr(0,t).toUpperCase()},j=function(e){var t=e.items,r=e.max,o=e.srcKey,i=e.titleKey,c=e.phCharLength,u=e.avatarSize,h=e.onItemClick,j=e.onMoreClick,v=e.spacing,y=e.expandable,Z=e.renderItemSummary,C=e.renderMore,S=e.moreVisibleOn,k=e.itemStyle,O=e.activeItemStyle,P=e.tooltipProps,R=(0,a.Z)(e,["items","max","srcKey","titleKey","phCharLength","avatarSize","onItemClick","onMoreClick","spacing","expandable","renderItemSummary","renderMore","moreVisibleOn","itemStyle","activeItemStyle","tooltipProps"]),w=t.length,N=t.slice(0,r<w?r-1:r),I=r<w?t.slice(r-1,w):[],L=(0,l.useState)(!1),z=L[0],T=L[1],E=(0,l.useState)(S&&"click"!==S&&I.length&&C?C(I):""),A=E[0],K=E[1],_="click"===S?{open:z}:{};(0,l.useEffect)((function(){z?K(C(I)):"click"===S&&K("")}),[z]);var D=g({spacing:v,avatarStyle:function(){return x({outlineColor:"#fafafa",outlineThickness:2},k)},avatarActiveStyle:function(){return x({outlineColor:"",outlineThickness:2,elevation:3},O)},totalRecords:w}),M=function(e,t){h&&h(e,t)};return(0,n.jsxs)(d.Z,x(x({className:(0,s.Z)(D.rootAvatarGroup,"Cmt-root-avatar-group"),max:r},R),{},{children:[N.map((function(e,t){return Z?(0,n.jsx)(m.ZP,x(x({title:Z(e,t)},P),{},{children:(0,n.jsx)(f.Z,{className:y?"Cmt-hoverEffect":"",alt:e[i],src:e[o],size:u,onClick:function(){return M(e,t)},style:{cursor:"pointer",zIndex:t},children:b(e[i],c)})}),t):(0,n.jsx)(f.Z,{className:y?"Cmt-hoverEffect":"",alt:e[i],src:e[o],size:u,onClick:function(){return M(e,t)},style:{cursor:"pointer",zIndex:t},children:b(e[i],c)},t)})),r<w&&(0,n.jsx)(m.ZP,x(x({title:A},_),{},{children:(0,n.jsx)(f.Z,{className:(0,s.Z)("Cmt-avatar-more",y?"Cmt-hoverEffect":""),alt:I.length.toString(),size:u,style:{cursor:"pointer",zIndex:r},onClick:function(){"function"===(j&&typeof j)&&j(),"click"===S&&T(!z)},children:(0,n.jsx)(p.Z,{onClickAway:function(){return T(!1)},children:(0,n.jsxs)("div",{children:["+",I.length]})})})}))]}))};j.prototype={items:c().array.isRequired,max:c().number,spacing:c().number,srcKey:c().string,titleKey:c().string,phCharLength:c().number,avatarSize:c().oneOfType([c().oneOf(["small","medium","large"]),c().number]),onItemClick:c().func,onMoreClick:c().func,expandable:c().bool,renderItemSummary:c().func,renderMore:c().func,moreVisibleOn:c().oneOf(["hover","click"]),itemStyle:c().object,activeItemStyle:c().object,tooltipProps:c().object},j.defaultProps={items:[],max:5,spacing:8,srcKey:"src",titleKey:"title",phCharLength:1,avatarSize:"medium",expandable:!1,moreVisibleOn:"hover",itemStyle:{outlineColor:"#fafafa",outlineThickness:2},activeItemStyle:{outlineColor:"",outlineThickness:2,elevation:1}},t.Z=j},87562:function(e,t,r){"use strict";r.d(t,{Z:function(){return J}});var n=r(85893),o=r(67294),a=r(14490),l=r(5239),i=r(34659),c=r(15467),s=r(16657),d=r(22318),u=r(44437),m=r(91482),p=r(28889),f=r(88241),h=r(41120),x=r(59693),g=(0,h.Z)((function(e){return{cardRoot:{position:"relative","& .Cmt-root-avatar-group":{position:"relative",marginLeft:-4}},subTitleRoot:{fontSize:12,color:e.palette.text.disabled,marginBottom:0,marginTop:4},productView:{backgroundColor:(0,x.Fq)(e.palette.common.dark,.04),padding:"8px 24px",marginLeft:-24,marginRight:-24,display:"flex",alignItems:"center",marginTop:-10},updateProductListScrollbar:{height:240,padding:"8px 24px 8px 8px"},listItem:{display:"flex",alignItems:"center",marginBottom:8,"&:last-child":{marginBottom:0}},listItemTitle:{marginLeft:8},collapseRoot:{color:e.palette.text.primary,"& g.recharts-layer":{fill:e.palette.text.primary}}}})),b=function(e){var t=e.selectedProducts,r=g();return(0,n.jsx)(u.Z,{items:t,srcKey:"logo",spacing:0,max:5,titleKey:"name",renderItemSummary:function(e,t){return(0,n.jsx)(d.Z,{color:"inherit",children:e.name},t)},renderMore:function(e){return t=e,(0,n.jsx)(p.Z,{p:1,children:(0,n.jsx)(m.Z,{data:t,renderRow:function(e,t){return(0,n.jsxs)(p.Z,{className:r.listItem,children:[(0,n.jsx)(f.Z,{src:e.logo,size:"small"}),(0,n.jsx)(d.Z,{className:r.listItemTitle,variant:"h4",component:"h4",children:e.name})]},t)}})});var t}})},j=r(26265),v=r(83750),y=r(99613),Z=r(82302),C=r(57394),S=r(17196),k=r(868),O=r(17812),P=r(78513),R=r(84618),w=r(15527),N=r(1747),I=r(51964),L=r.n(I),z=r(86010),T=(0,h.Z)((function(e){return{scrollbarRoot:(0,j.Z)({height:251,marginLeft:-24,marginRight:-24},e.breakpoints.up("xl"),{height:269}),tableRowRoot:{position:"relative",transition:"all .2s",borderTop:"solid 1px ".concat(e.palette.borderColor.main),"&:hover":{backgroundColor:(0,x.Fq)(e.palette.primary.main,.08),transform:"translateY(-4px)",boxShadow:"0 3px 10px 0 ".concat((0,x.Fq)(e.palette.common.dark,.2)),borderTopColor:"transparent","& $tableCellRoot":{color:e.palette.text.primary,"&:last-child":{color:e.palette.error.main},"&.success":{color:e.palette.success.main}}},"&:last-child":{borderBottom:"solid 1px ".concat(e.palette.borderColor.main)}},tableCellRoot:{paddingLeft:10,paddingRight:10,paddingTop:5,paddingBottom:5,fontSize:14,letterSpacing:.4,color:e.palette.common.dark,borderBottom:"0 none","&:first-child":{paddingLeft:24},"&:last-child":{textAlign:"right",paddingRight:24}},tableRowCellRoot:{fontSize:12,"&:last-child":{paddingRight:64}},blockRoot:{display:"block",fontSize:14}}})),E=[{label:"View Profile"},{label:"More"}],A=function(e){var t=e.selectedProducts,r=T();return(0,n.jsx)(L(),{className:r.scrollbarRoot,children:(0,n.jsx)(p.Z,{className:"Cmt-table-responsive",children:(0,n.jsxs)(Z.Z,{children:[(0,n.jsx)(v.Z,{children:(0,n.jsxs)(C.Z,{children:[(0,n.jsx)(S.Z,{className:(0,z.Z)(r.tableCellRoot,r.tableRowCellRoot),children:"Product"}),(0,n.jsx)(S.Z,{className:(0,z.Z)(r.tableCellRoot,r.tableRowCellRoot),children:"Sales"}),(0,n.jsx)(S.Z,{className:(0,z.Z)(r.tableCellRoot,r.tableRowCellRoot),children:"Income(USD)"})]})}),(0,n.jsx)(y.Z,{children:t.map((function(e,t){var o=e.sales_data.sales_inflation>0;return(0,n.jsxs)(C.Z,{className:r.tableRowRoot,children:[(0,n.jsx)(S.Z,{className:r.tableCellRoot,children:e.name}),(0,n.jsx)(S.Z,{className:r.tableCellRoot,children:(0,n.jsxs)(p.Z,{display:"flex",alignItems:"center",justifyContent:"space-around",children:[(0,n.jsx)(p.Z,{component:"span",children:e.sales_data.sold_qty}),(0,n.jsxs)(p.Z,{display:"flex",alignItems:"center",children:[(0,n.jsx)(p.Z,{component:"span",ml:1,color:o?"green":"red",children:e.sales_data.sales_inflation}),(0,n.jsx)(p.Z,{color:o?"green":"red",ml:1,children:o?(0,n.jsx)(R.Z,{className:r.blockRoot}):(0,n.jsx)(w.Z,{className:r.blockRoot})})]})]})}),(0,n.jsx)(S.Z,{className:r.tableCellRoot,children:(0,n.jsxs)(p.Z,{display:"flex",alignItems:"center",justifyContent:"flex-end",children:[e.sales_data.income,(0,n.jsx)(N.Z,{TriggerComponent:(0,n.jsx)(k.ZP,{title:"More",children:(0,n.jsx)(O.Z,{size:"small",style:{marginLeft:10},children:(0,n.jsx)(P.Z,{})})}),items:E,onItemClick:function(){}})]})})]},t)}))})]})})})},K=r(78026);function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var D=function(e){var t=e.data.map((function(e){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_(Object(r),!0).forEach((function(t){(0,j.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({name:e.name,color:e.colorCode},e.sales_data)}));return(0,n.jsx)(K.h2,{width:"100%",height:268,children:(0,n.jsxs)(K.vz,{barSize:35,data:t,margin:{top:35,right:0,left:0,bottom:-8},children:[(0,n.jsx)(K.Kc,{dataKey:"name",axisLine:!1,tickLine:!1}),(0,n.jsx)(K.B2,{hide:!0}),(0,n.jsxs)(K.$Q,{dataKey:"sold_qty",children:[(0,n.jsx)(K.e3,{dataKey:"sold_qty",content:function(e,t,r){return function(e){var t=e.x,r=e.y,o=e.value;return(0,n.jsx)("text",{x:t+15,y:r,dy:-20,textAnchor:"middle",children:o})}(e)}}),t.map((function(e,t){return(0,n.jsx)(K.bL,{fill:e.color},"cell-".concat(t))}))]})]})})},M=r(64121),B=r(82598),V=r(282),q=r(63957),W=r(52387),F=r(71554),G=function(e){var t=e.item,r=e.selectedProducts,a=e.addProduct,l=e.removeProduct,i=(0,o.useCallback)((function(){return r.some((function(e){return e.id===t.id}))}),[r,t]),c=(0,o.useState)(i()),s=c[0],d=c[1];(0,o.useEffect)((function(){d(i())}),[i]);return(0,n.jsx)("div",{style:{display:"flex",alignItems:"center",minWidth:"160px"},children:(0,n.jsx)(F.Z,{checked:s,label:t.name,onChange:function(e){e.target.checked?a(t):l(t.id)},color:"secondary"})})},U=function(e){var t=e.selectedProducts,r=e.productsList,a=e.addProduct,l=e.removeProduct,i=o.useState(null),c=(0,M.Z)(i,2),s=c[0],d=c[1],u=g(),f=Boolean(s),h=f?"simple-popover":void 0;return(0,n.jsxs)("div",{children:[(0,n.jsxs)(p.Z,{ml:{sm:1,md:4},children:[(0,n.jsx)(B.Z,{xsDown:!0,children:(0,n.jsx)(V.Z,{onClick:function(e){d(e.currentTarget)},children:"+ ADD"})}),(0,n.jsx)(B.Z,{smUp:!0,children:(0,n.jsx)(O.Z,{children:(0,n.jsx)(q.Z,{})})})]}),(0,n.jsx)(W.ZP,{id:h,open:f,anchorEl:s,onClose:function(){d(null)},anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},children:(0,n.jsx)(p.Z,{p:2,children:(0,n.jsx)(L(),{className:u.updateProductListScrollbar,children:(0,n.jsx)(m.Z,{data:r,renderRow:function(e,r){return(0,n.jsx)(G,{item:e,selectedProducts:t,addProduct:a,removeProduct:l},r)}})})})})]})},$=r(66037),J=function(){var e=c.vZ.productsList,t=g(),r=(0,o.useState)(e),d=r[0],u=r[1],m=(0,o.useState)(!1),f=m[0],h=m[1];return(0,n.jsxs)(a.Z,{className:t.cardRoot,children:[(0,n.jsx)(l.Z,{title:"Weekly Sales",subTitle:"12 - 18 June, 2020",subTitleProps:{className:t.subTitleRoot},children:(0,n.jsx)(O.Z,{onClick:function(){return h(!f)},edge:"end",style:{marginTop:-6},children:(0,n.jsx)(i.Z,{})})}),(0,n.jsxs)(s.Z,{children:[(0,n.jsxs)(p.Z,{className:t.productView,children:[(0,n.jsx)(b,{selectedProducts:d}),(0,n.jsx)(U,{selectedProducts:d,productsList:e,addProduct:function(e){var t=d.concat(e);u(t)},removeProduct:function(e){var t=d.filter((function(t){return t.id!==e}));u(t)}})]}),(0,n.jsx)($.Z,{className:t.collapseRoot,in:f,timeout:"auto",unmountOnExit:!0,children:(0,n.jsx)(D,{data:d})}),(0,n.jsx)($.Z,{in:!f,timeout:"auto",unmountOnExit:!0,children:(0,n.jsx)(A,{selectedProducts:d})})]})]})}}}]);