(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6127,799],{37109:function(t,e,n){"use strict";var r=n(85893),a=n(26265),i=(n(67294),n(28889)),o=n(41120),l=n(59693),s=(0,o.Z)((function(t){var e,n;return{authWrap:(e={width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",backgroundImage:function(t){return"bgColor"===t.variant?"URL(/images/auth/auth-bg-pattern.png)":""},backgroundPosition:function(t){return"bgColor"===t.variant?"center center":""},backgroundRepeat:function(t){return"bgColor"===t.variant?"no-repeat":""},backgroundSize:function(t){return"bgColor"===t.variant?"cover":""},position:"relative",padding:20},(0,a.Z)(e,t.breakpoints.up("sm"),{padding:40}),(0,a.Z)(e,"&:before",{content:'""',position:"absolute",left:0,top:0,zIndex:1,width:"100%",height:"100%",backgroundColor:function(e){return"bgColor"===e.variant?(0,l.Fq)(t.palette.primary.main,.5):""}}),e),authCard:(n={position:"relative",zIndex:3,maxWidth:function(t){return"default"===t.variant?"850px":"550px"},width:"100%",boxShadow:"0px 2px 2px rgba(0, 0, 0, 0.14), 0px 3px 1px rgba(0, 0, 0, 0.12), 0px 1px 5px rgba(0, 0, 0, 0.2)",borderRadius:4,backgroundColor:t.palette.background.paper,color:t.palette.text.secondary,display:"flex",flexDirection:"column"},(0,a.Z)(n,t.breakpoints.up("md"),{flexDirection:"row"}),(0,a.Z)(n,t.breakpoints.up("xl"),{maxWidth:function(t){return"default"===t.variant?"1050px":"750px"}}),n)}}));e.Z=function(t){var e=t.children,n=t.variant,a=s({variant:n});return(0,r.jsx)(i.Z,{className:a.authWrap,children:(0,r.jsx)(i.Z,{className:a.authCard,children:e})})}},90799:function(t,e,n){"use strict";n.r(e);var r=n(85893),a=n(64121),i=n(26265),o=n(67294),l=n(39803),s=n(96277),u=n(282),d=n(28889),c=n(66037),p=n(17812),x=n(41120),h=n(59693),m=n(89934),f=n(22318),g=n(37109),b=n(11163),Z=n(44562),v=n(80366),j=n(46079),k=n(41664),C=n(37876),w=(0,x.Z)((function(t){var e;return{authThumb:(0,i.Z)({backgroundColor:(0,h.Fq)(t.palette.primary.main,.12),display:"flex",alignItems:"center",justifyContent:"center",padding:20},t.breakpoints.up("md"),{width:"50%",order:2}),authContent:(e={padding:30},(0,i.Z)(e,t.breakpoints.up("md"),{order:1,width:function(t){return"default"===t.variant?"50%":"100%"}}),(0,i.Z)(e,t.breakpoints.up("xl"),{padding:50}),e),titleRoot:{marginBottom:14,color:t.palette.text.primary},textFieldRoot:{"& .MuiOutlinedInput-notchedOutline":{borderColor:(0,h.Fq)(t.palette.common.dark,.12)}},alertRoot:{marginBottom:10}}}));e.default=function(t){var e=t.variant,n=void 0===e?"default":e,i=t.wrapperVariant,x=void 0===i?"default":i,h=w({variant:n}),y=(0,j.a)(),R=y.isLoading,N=y.error,F=y.sendPasswordResetEmail,I=o.useState(!1),S=(0,a.Z)(I,2),z=S[0],W=S[1],D=(0,o.useState)("demo@example.com"),M=D[0],P=D[1],_=(0,b.useRouter)();return(0,r.jsxs)(g.Z,{variant:x,children:["default"===n?(0,r.jsx)(d.Z,{className:h.authThumb,children:(0,r.jsx)(m.Z,{src:"/images/auth/forgot-img.png"})}):null,(0,r.jsxs)(d.Z,{className:h.authContent,children:[(0,r.jsx)(d.Z,{mb:7,children:(0,r.jsx)(m.Z,{src:"/images/logo.png"})}),(0,r.jsx)(f.Z,{component:"div",variant:"h1",className:h.titleRoot,children:"ForgotPassword"}),(0,r.jsx)(c.Z,{in:z,children:(0,r.jsx)(Z.Z,{variant:"outlined",severity:"success",className:h.alertRoot,action:(0,r.jsx)(p.Z,{"aria-label":"close",color:"inherit",size:"small",onClick:function(){W(!1)},children:(0,r.jsx)(v.Z,{fontSize:"inherit"})}),children:"A mail has been sent on your email address with reset password link."})}),(0,r.jsxs)("form",{children:[(0,r.jsx)(d.Z,{mb:5,children:(0,r.jsx)(l.Z,{label:(0,r.jsx)(s.Z,{id:"appModule.email"}),fullWidth:!0,onChange:function(t){return P(t.target.value)},defaultValue:M,margin:"normal",variant:"outlined",className:h.textFieldRoot})}),(0,r.jsx)(d.Z,{mb:5,children:(0,r.jsx)(u.Z,{onClick:function(){F(M,(function(){_.push("/")}))},variant:"contained",color:"primary",children:(0,r.jsx)(s.Z,{id:"appModule.resetPassword"})})}),(0,r.jsx)(d.Z,{children:(0,r.jsxs)(f.Z,{children:["Don't remember your email?",(0,r.jsx)(d.Z,{component:"span",ml:2,children:(0,r.jsx)(k.default,{href:"/signin",children:(0,r.jsx)("a",{children:(0,r.jsx)(s.Z,{id:"appModule.contactSupport"})})})})]})})]}),(0,r.jsx)(C.L,{loading:R,error:N})]})]})}},96127:function(t,e,n){"use strict";n.r(e);var r=n(85893),a=(n(67294),n(90799));e.default=function(){return(0,r.jsx)(a.default,{variant:"standard"})}}}]);