(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[799],{37109:function(e,t,n){"use strict";var r=n(85893),a=n(26265),i=(n(67294),n(28889)),o=n(41120),l=n(59693),s=(0,o.Z)((function(e){var t,n;return{authWrap:(t={width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",backgroundImage:function(e){return"bgColor"===e.variant?"URL(/images/auth/auth-bg-pattern.png)":""},backgroundPosition:function(e){return"bgColor"===e.variant?"center center":""},backgroundRepeat:function(e){return"bgColor"===e.variant?"no-repeat":""},backgroundSize:function(e){return"bgColor"===e.variant?"cover":""},position:"relative",padding:20},(0,a.Z)(t,e.breakpoints.up("sm"),{padding:40}),(0,a.Z)(t,"&:before",{content:'""',position:"absolute",left:0,top:0,zIndex:1,width:"100%",height:"100%",backgroundColor:function(t){return"bgColor"===t.variant?(0,l.Fq)(e.palette.primary.main,.5):""}}),t),authCard:(n={position:"relative",zIndex:3,maxWidth:function(e){return"default"===e.variant?"850px":"550px"},width:"100%",boxShadow:"0px 2px 2px rgba(0, 0, 0, 0.14), 0px 3px 1px rgba(0, 0, 0, 0.12), 0px 1px 5px rgba(0, 0, 0, 0.2)",borderRadius:4,backgroundColor:e.palette.background.paper,color:e.palette.text.secondary,display:"flex",flexDirection:"column"},(0,a.Z)(n,e.breakpoints.up("md"),{flexDirection:"row"}),(0,a.Z)(n,e.breakpoints.up("xl"),{maxWidth:function(e){return"default"===e.variant?"1050px":"750px"}}),n)}}));t.Z=function(e){var t=e.children,n=e.variant,a=s({variant:n});return(0,r.jsx)(i.Z,{className:a.authWrap,children:(0,r.jsx)(i.Z,{className:a.authCard,children:t})})}},90799:function(e,t,n){"use strict";n.r(t);var r=n(85893),a=n(64121),i=n(26265),o=n(67294),l=n(39803),s=n(96277),u=n(282),d=n(28889),c=n(66037),p=n(17812),x=n(41120),h=n(59693),m=n(89934),f=n(22318),g=n(37109),b=n(11163),Z=n(44562),v=n(80366),j=n(46079),k=n(41664),C=n(37876),w=(0,x.Z)((function(e){var t;return{authThumb:(0,i.Z)({backgroundColor:(0,h.Fq)(e.palette.primary.main,.12),display:"flex",alignItems:"center",justifyContent:"center",padding:20},e.breakpoints.up("md"),{width:"50%",order:2}),authContent:(t={padding:30},(0,i.Z)(t,e.breakpoints.up("md"),{order:1,width:function(e){return"default"===e.variant?"50%":"100%"}}),(0,i.Z)(t,e.breakpoints.up("xl"),{padding:50}),t),titleRoot:{marginBottom:14,color:e.palette.text.primary},textFieldRoot:{"& .MuiOutlinedInput-notchedOutline":{borderColor:(0,h.Fq)(e.palette.common.dark,.12)}},alertRoot:{marginBottom:10}}}));t.default=function(e){var t=e.variant,n=void 0===t?"default":t,i=e.wrapperVariant,x=void 0===i?"default":i,h=w({variant:n}),y=(0,j.a)(),R=y.isLoading,N=y.error,F=y.sendPasswordResetEmail,I=o.useState(!1),S=(0,a.Z)(I,2),z=S[0],W=S[1],D=(0,o.useState)("demo@example.com"),M=D[0],P=D[1],_=(0,b.useRouter)();return(0,r.jsxs)(g.Z,{variant:x,children:["default"===n?(0,r.jsx)(d.Z,{className:h.authThumb,children:(0,r.jsx)(m.Z,{src:"/images/auth/forgot-img.png"})}):null,(0,r.jsxs)(d.Z,{className:h.authContent,children:[(0,r.jsx)(d.Z,{mb:7,children:(0,r.jsx)(m.Z,{src:"/images/logo.png"})}),(0,r.jsx)(f.Z,{component:"div",variant:"h1",className:h.titleRoot,children:"ForgotPassword"}),(0,r.jsx)(c.Z,{in:z,children:(0,r.jsx)(Z.Z,{variant:"outlined",severity:"success",className:h.alertRoot,action:(0,r.jsx)(p.Z,{"aria-label":"close",color:"inherit",size:"small",onClick:function(){W(!1)},children:(0,r.jsx)(v.Z,{fontSize:"inherit"})}),children:"A mail has been sent on your email address with reset password link."})}),(0,r.jsxs)("form",{children:[(0,r.jsx)(d.Z,{mb:5,children:(0,r.jsx)(l.Z,{label:(0,r.jsx)(s.Z,{id:"appModule.email"}),fullWidth:!0,onChange:function(e){return P(e.target.value)},defaultValue:M,margin:"normal",variant:"outlined",className:h.textFieldRoot})}),(0,r.jsx)(d.Z,{mb:5,children:(0,r.jsx)(u.Z,{onClick:function(){F(M,(function(){_.push("/")}))},variant:"contained",color:"primary",children:(0,r.jsx)(s.Z,{id:"appModule.resetPassword"})})}),(0,r.jsx)(d.Z,{children:(0,r.jsxs)(f.Z,{children:["Don't remember your email?",(0,r.jsx)(d.Z,{component:"span",ml:2,children:(0,r.jsx)(k.default,{href:"/signin",children:(0,r.jsx)("a",{children:(0,r.jsx)(s.Z,{id:"appModule.contactSupport"})})})})]})})]}),(0,r.jsx)(C.L,{loading:R,error:N})]})]})}}}]);