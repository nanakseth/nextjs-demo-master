(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3865,1378],{37109:function(e,t,a){"use strict";var n=a(85893),r=a(26265),i=(a(67294),a(28889)),o=a(41120),l=a(59693),u=(0,o.Z)((function(e){var t,a;return{authWrap:(t={width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",backgroundImage:function(e){return"bgColor"===e.variant?"URL(/images/auth/auth-bg-pattern.png)":""},backgroundPosition:function(e){return"bgColor"===e.variant?"center center":""},backgroundRepeat:function(e){return"bgColor"===e.variant?"no-repeat":""},backgroundSize:function(e){return"bgColor"===e.variant?"cover":""},position:"relative",padding:20},(0,r.Z)(t,e.breakpoints.up("sm"),{padding:40}),(0,r.Z)(t,"&:before",{content:'""',position:"absolute",left:0,top:0,zIndex:1,width:"100%",height:"100%",backgroundColor:function(t){return"bgColor"===t.variant?(0,l.Fq)(e.palette.primary.main,.5):""}}),t),authCard:(a={position:"relative",zIndex:3,maxWidth:function(e){return"default"===e.variant?"850px":"550px"},width:"100%",boxShadow:"0px 2px 2px rgba(0, 0, 0, 0.14), 0px 3px 1px rgba(0, 0, 0, 0.12), 0px 1px 5px rgba(0, 0, 0, 0.2)",borderRadius:4,backgroundColor:e.palette.background.paper,color:e.palette.text.secondary,display:"flex",flexDirection:"column"},(0,r.Z)(a,e.breakpoints.up("md"),{flexDirection:"row"}),(0,r.Z)(a,e.breakpoints.up("xl"),{maxWidth:function(e){return"default"===e.variant?"1050px":"750px"}}),a)}}));t.Z=function(e){var t=e.children,a=e.variant,r=u({variant:a});return(0,n.jsx)(i.Z,{className:r.authWrap,children:(0,n.jsx)(i.Z,{className:r.authCard,children:t})})}},41378:function(e,t,a){"use strict";a.r(t);var n=a(85893),r=a(26265),i=a(67294),o=a(28889),l=a(39803),u=a(96277),s=a(282),d=a(41120),c=a(59693),p=a(89934),x=a(22318),m=a(37109),g=a(41664),f=a(46079),h=a(37876),b=(0,d.Z)((function(e){var t;return{authThumb:(0,r.Z)({backgroundColor:(0,c.Fq)(e.palette.primary.main,.12),display:"flex",alignItems:"center",justifyContent:"center",padding:20},e.breakpoints.up("md"),{width:"50%",order:2}),authContent:(t={padding:30},(0,r.Z)(t,e.breakpoints.up("md"),{width:function(e){return"default"===e.variant?"50%":"100%"},order:1}),(0,r.Z)(t,e.breakpoints.up("xl"),{padding:50}),t),titleRoot:{marginBottom:14,color:e.palette.text.primary},textFieldRoot:{"& .MuiOutlinedInput-notchedOutline":{borderColor:(0,c.Fq)(e.palette.common.dark,.12)}},textCapital:{textTransform:"capitalize"},textAcc:{textAlign:"center","& a":{marginLeft:4}},alrTextRoot:(0,r.Z)({textAlign:"center"},e.breakpoints.up("sm"),{textAlign:"right"})}}));t.default=function(e){var t=e.variant,a=void 0===t?"default":t,r=e.wrapperVariant,d=void 0===r?"default":r,c=b({variant:a}),v=(0,f.a)(),Z=v.isLoading,j=v.error,C=v.userSignup,k=v.renderSocialMediaLogin,w=(0,i.useState)("Demo User"),y=w[0],N=w[1],R=(0,i.useState)("demo@example.com"),F=R[0],I=R[1],M=(0,i.useState)("demo#123"),S=M[0],W=M[1];return(0,n.jsxs)(m.Z,{variant:d,children:["default"===a?(0,n.jsx)(o.Z,{className:c.authThumb,children:(0,n.jsx)(p.Z,{src:"/images/auth/sign-up-img.png"})}):null,(0,n.jsxs)(o.Z,{className:c.authContent,children:[(0,n.jsx)(o.Z,{mb:7,children:(0,n.jsx)(p.Z,{src:"/images/logo.png"})}),(0,n.jsx)(x.Z,{component:"div",variant:"h1",className:c.titleRoot,children:"Create an account"}),(0,n.jsxs)("form",{children:[(0,n.jsx)(o.Z,{mb:2,children:(0,n.jsx)(l.Z,{label:(0,n.jsx)(u.Z,{id:"appModule.name"}),fullWidth:!0,onChange:function(e){return N(e.target.value)},defaultValue:y,margin:"normal",variant:"outlined",className:c.textFieldRoot})}),(0,n.jsx)(o.Z,{mb:2,children:(0,n.jsx)(l.Z,{label:(0,n.jsx)(u.Z,{id:"appModule.email"}),fullWidth:!0,onChange:function(e){return I(e.target.value)},defaultValue:F,margin:"normal",variant:"outlined",className:c.textFieldRoot})}),(0,n.jsx)(o.Z,{mb:2,children:(0,n.jsx)(l.Z,{type:"password",label:(0,n.jsx)(u.Z,{id:"appModule.password"}),fullWidth:!0,onChange:function(e){return W(e.target.value)},defaultValue:S,margin:"normal",variant:"outlined",className:c.textFieldRoot})}),(0,n.jsxs)(o.Z,{display:"flex",flexDirection:{xs:"column",sm:"row"},alignItems:{sm:"center"},justifyContent:{sm:"space-between"},mb:3,children:[(0,n.jsx)(o.Z,{mb:{xs:2,sm:0},children:(0,n.jsx)(s.Z,{onClick:function(){C({name:y,email:F,password:S})},variant:"contained",color:"primary",children:(0,n.jsx)(u.Z,{id:"appModule.regsiter"})})}),(0,n.jsx)(x.Z,{className:c.alrTextRoot,children:(0,n.jsx)(g.default,{href:"/signin",children:(0,n.jsx)("a",{children:(0,n.jsx)(u.Z,{id:"signUp.alreadyMember"})})})})]})]}),k(),(0,n.jsx)(h.L,{loading:Z,error:j})]})]})}},43865:function(e,t,a){"use strict";a.r(t);var n=a(85893),r=(a(67294),a(41378));t.default=function(){return(0,n.jsx)(r.default,{variant:"standard"})}}}]);