(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2355],{79921:function(e,n,t){var a={"./ImgMediaCard.txt":95158,"./MediaCard.txt":53763,"./MediaControlCard.txt":4614,"./OutlinedCard.txt":18195,"./RecipeReviewCard.txt":21099,"./SimpleCard.txt":33160};function r(e){var n=o(e);return t(n)}function o(e){if(!t.o(a,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=o,e.exports=r,r.id=79921},57948:function(e,n,t){"use strict";t.d(n,{nB:function(){return j},dx:function(){return k},Vr:function(){return f},mr:function(){return u}});var a=t(85893),r=t(38347),o=t(26265),i=(t(67294),t(41120)),s=t(28889),l=t(22318),c=t(86010);function d(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?d(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var p=(0,i.Z)((function(e){return{pageHeaderRoot:(0,o.Z)({display:"flex",flexDirection:"column"},e.breakpoints.up("sm"),{alignItems:"center",flexDirection:"row"}),titleRoot:(0,o.Z)({},e.breakpoints.down("xs"),{marginBottom:10})}})),u=function(e){var n=e.heading,t=e.breadcrumbComponent,o=e.children,i=(0,r.Z)(e,["heading","breadcrumbComponent","children"]),d=p();return(0,a.jsxs)(s.Z,m(m({className:(0,c.Z)(d.pageHeaderRoot,"page-header"),mb:{xs:5,md:6,lg:8}},i),{},{children:[(0,a.jsx)(l.Z,{component:"div",variant:"h1",className:(0,c.Z)(d.titleRoot,"title"),children:n}),(0,a.jsx)(s.Z,{ml:{sm:"auto"},children:t}),o]}))},h=t(10770),g=t(41664),y=(0,i.Z)((function(){return{textSm:{fontSize:12},linkBlock:{display:"block",color:"inherit"}}})),f=function(e){var n=e.items,t=((0,r.Z)(e,["items"]),y());return(0,a.jsx)(h.Z,{className:"bread-crumbs","aria-label":"breadcrumb {...rest}",children:n.map((function(e,n){return e.isActive?(0,a.jsx)(l.Z,{className:t.textSm,color:"textPrimary",children:e.label},n):(0,a.jsx)(g.default,{href:e.link||"/",children:(0,a.jsx)("a",{className:(0,c.Z)(t.textSm,t.linkBlock),children:e.label})},n)}))})},x=t(41749),b=t(14490),C=t(67757),v=t(75322),j=function(e){var n=e.SourceCodeComponent,t=e.SettingsComponent,r=e.children;return(0,a.jsx)(v.Z,{children:(0,a.jsxs)(C.Z,{children:[(0,a.jsxs)(x.Z,{item:!0,xs:12,md:7,children:[(0,a.jsx)(u,{heading:"Preview"}),(0,a.jsx)(s.Z,{mb:8,children:r}),(0,a.jsx)(b.Z,{children:n})]}),(0,a.jsx)(x.Z,{item:!0,xs:12,md:5,children:t})]})})},Z=t(42890),k=function(e){var n=e.pageTitle,t=e.menus,r=e.children,o=[{label:"Home",link:"/"},{label:"Material UI Components",link:"/components/mui"},{label:n,isActive:!0}];return(0,a.jsx)(Z.Z,{pageTitle:n,breadcrumbs:o,menus:t,children:r})}},42890:function(e,n,t){"use strict";var a=t(85893),r=t(26265),o=(t(67294),t(28889)),i=t(82598),s=t(22318),l=t(62822),c=t(50998),d=t(95757),m=t(41120),p=t(75322),u=(0,m.Z)((function(e){var n;return{root:{display:"flex",flexWrap:"wrap"},contentArea:(n={width:"100%"},(0,r.Z)(n,e.breakpoints.up("sm"),{paddingRight:e.typography.pxToRem(30),width:"calc(100% - ".concat(e.typography.pxToRem(175),")")}),(0,r.Z)(n,e.breakpoints.up("lg"),{paddingRight:e.typography.pxToRem(54)}),n),contentSidebar:{width:e.typography.pxToRem(175),height:"calc(100vh - ".concat(e.typography.pxToRem(102),")"),position:"sticky",top:30,overflowY:"auto",flexShrink:0}}}));n.Z=function(e){var n=e.pageTitle,t=e.menus,r=e.breadcrumbs,m=e.children,h=u();return(0,a.jsx)(p.Z,{heading:n,breadcrumbs:r,children:(0,a.jsxs)(o.Z,{className:h.root,children:[(0,a.jsx)(o.Z,{className:h.contentArea,children:m}),(0,a.jsx)(i.Z,{xsDown:!0,children:(0,a.jsxs)(o.Z,{className:h.contentSidebar,children:[(0,a.jsx)(s.Z,{component:"h4",variant:"h4",children:"Contents"}),(0,a.jsx)(l.Z,{children:t.map((function(e,n){return(0,a.jsx)(c.Z,{dense:!0,button:!0,component:"a",href:"#".concat(e.link),children:(0,a.jsx)(d.Z,{primary:e.label})},n)}))})]})})]})})}},75322:function(e,n,t){"use strict";var a=t(26265),r=t(85893),o=(t(67294),t(28889)),i=t(57948),s=t(82285),l=t(32427),c=t(86010);function d(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?d(Object(t),!0).forEach((function(n){(0,a.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var p=(0,l.Z)((function(e){return{pageFull:{width:"100%"}}}));n.Z=function(e){var n=e.heading,t=e.breadcrumbs,a=e.children,l=e.className,d=e.restProps,u=p();return(0,r.jsx)(s.Z,{in:!0,direction:"up",mountOnEnter:!0,unmountOnExit:!0,children:(0,r.jsxs)(o.Z,m(m({className:(0,c.Z)(u.pageFull,l)},d),{},{children:[(n||t)&&(0,r.jsx)(i.mr,{heading:n,breadcrumbComponent:t&&(0,r.jsx)(i.Vr,{items:t})}),a]}))})}},32355:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return G}});var a=t(85893),r=t(67294),o=t(57948),i=t(28889),s=t(22318),l=t(94111),c=t(39137),d=t(41120),m=t(59693),p=t(18463),u=t(51907),h=t(79912),g=t(282),y=(0,d.Z)((function(e){return{root:{minWidth:275,maxWidth:345,margin:"0 auto",backgroundColor:(0,m.$n)(e.palette.background.paper,.1)},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}}}));function f(){var e=y(),n=(0,a.jsx)("span",{className:e.bullet,children:"\u2022"});return(0,a.jsxs)(p.Z,{className:e.root,children:[(0,a.jsxs)(h.Z,{children:[(0,a.jsx)(s.Z,{className:e.title,color:"textSecondary",gutterBottom:!0,children:"Word of the Day"}),(0,a.jsxs)(s.Z,{variant:"h5",component:"h2",children:["be",n,"nev",n,"o",n,"lent"]}),(0,a.jsx)(s.Z,{className:e.pos,color:"textSecondary",children:"adjective"}),(0,a.jsxs)(s.Z,{variant:"body2",component:"p",children:["well meaning and kindly.",(0,a.jsx)("br",{}),'"a benevolent smile"']})]}),(0,a.jsx)(u.Z,{children:(0,a.jsx)(g.Z,{size:"small",children:"Learn More"})})]})}var x=(0,d.Z)((function(e){return{root:{minWidth:275,maxWidth:345,margin:"0 auto",backgroundColor:(0,m.$n)(e.palette.background.paper,.1)},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}}}));function b(){var e=x(),n=(0,a.jsx)("span",{className:e.bullet,children:"\u2022"});return(0,a.jsxs)(p.Z,{className:e.root,variant:"outlined",children:[(0,a.jsxs)(h.Z,{children:[(0,a.jsx)(s.Z,{className:e.title,color:"textSecondary",gutterBottom:!0,children:"Word of the Day"}),(0,a.jsxs)(s.Z,{variant:"h5",component:"h2",children:["be",n,"nev",n,"o",n,"lent"]}),(0,a.jsx)(s.Z,{className:e.pos,color:"textSecondary",children:"adjective"}),(0,a.jsxs)(s.Z,{variant:"body2",component:"p",children:["well meaning and kindly.",(0,a.jsx)("br",{}),'"a benevolent smile"']})]}),(0,a.jsx)(u.Z,{children:(0,a.jsx)(g.Z,{size:"small",children:"Learn More"})})]})}var C=t(26265),v=t(64121),j=t(86010),Z=t(94697),k=t(951),S=t(66037),T=t(33901),w=t(17812),B=t(20907),N=t(76324),A=t(53093),O=t(64566),I=t(78513),M=(0,d.Z)((function(e){return{root:{maxWidth:345,margin:"0 auto",backgroundColor:(0,m.$n)(e.palette.background.paper,.1)},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:B.Z[500]}}}));function R(){var e=M(),n=r.useState(!1),t=(0,v.Z)(n,2),o=t[0],i=t[1];return(0,a.jsxs)(p.Z,{className:e.root,children:[(0,a.jsx)(Z.Z,{avatar:(0,a.jsx)(T.Z,{"aria-label":"recipe",className:e.avatar,children:"R"}),action:(0,a.jsx)(w.Z,{"aria-label":"settings",children:(0,a.jsx)(I.Z,{})}),title:"Shrimp and Chorizo Paella",subheader:"September 14, 2016"}),(0,a.jsx)(k.Z,{className:e.media,image:"https://via.placeholder.com/1500x1000",title:"Paella dish"}),(0,a.jsx)(h.Z,{children:(0,a.jsx)(s.Z,{variant:"body2",color:"textSecondary",component:"p",children:"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."})}),(0,a.jsxs)(u.Z,{disableSpacing:!0,children:[(0,a.jsx)(w.Z,{"aria-label":"add to favorites",children:(0,a.jsx)(N.Z,{})}),(0,a.jsx)(w.Z,{"aria-label":"share",children:(0,a.jsx)(A.Z,{})}),(0,a.jsx)(w.Z,{className:(0,j.Z)(e.expand,(0,C.Z)({},e.expandOpen,o)),onClick:function(){i(!o)},"aria-expanded":o,"aria-label":"show more",children:(0,a.jsx)(O.Z,{})})]}),(0,a.jsx)(S.Z,{in:o,timeout:"auto",unmountOnExit:!0,children:(0,a.jsxs)(h.Z,{children:[(0,a.jsx)(s.Z,{paragraph:!0,children:"Method:"}),(0,a.jsx)(s.Z,{paragraph:!0,children:"Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes."}),(0,a.jsx)(s.Z,{paragraph:!0,children:"Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add piment\xf3n, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil."}),(0,a.jsx)(s.Z,{paragraph:!0,children:"Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook again without stirring, until mussels have opened and rice is just tender, 5 to 7 minutes more. (Discard any mussels that don\u2019t open.)"}),(0,a.jsx)(s.Z,{children:"Set aside off of the heat to let rest for 10 minutes, and then serve."})]})})]})}var z=t(89738),P=(0,d.Z)((function(e){return{root:{maxWidth:345,margin:"0 auto",backgroundColor:(0,m.$n)(e.palette.background.paper,.1)},media:{height:140}}}));function L(){var e=P();return(0,a.jsxs)(p.Z,{className:e.root,children:[(0,a.jsxs)(z.Z,{children:[(0,a.jsx)(k.Z,{className:e.media,image:"https://via.placeholder.com/1500x1000",title:"Contemplative Reptile"}),(0,a.jsxs)(h.Z,{children:[(0,a.jsx)(s.Z,{gutterBottom:!0,variant:"h5",component:"h2",children:"Lizard"}),(0,a.jsx)(s.Z,{variant:"body2",color:"textSecondary",component:"p",children:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"})]})]}),(0,a.jsxs)(u.Z,{children:[(0,a.jsx)(g.Z,{size:"small",color:"primary",children:"Share"}),(0,a.jsx)(g.Z,{size:"small",color:"primary",children:"Learn More"})]})]})}var D=(0,d.Z)((function(e){return{root:{maxWidth:345,margin:"0 auto",backgroundColor:(0,m.$n)(e.palette.background.paper,.1)}}}));function W(){var e=D();return(0,a.jsxs)(p.Z,{className:e.root,children:[(0,a.jsxs)(z.Z,{children:[(0,a.jsx)(k.Z,{component:"img",alt:"Contemplative Reptile",height:"140",image:"https://via.placeholder.com/1500x1000",title:"Contemplative Reptile"}),(0,a.jsxs)(h.Z,{children:[(0,a.jsx)(s.Z,{gutterBottom:!0,variant:"h5",component:"h2",children:"Lizard"}),(0,a.jsx)(s.Z,{variant:"body2",color:"textSecondary",component:"p",children:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"})]})]}),(0,a.jsxs)(u.Z,{children:[(0,a.jsx)(g.Z,{size:"small",color:"primary",children:"Share"}),(0,a.jsx)(g.Z,{size:"small",color:"primary",children:"Learn More"})]})]})}var E=t(8920),H=t(20008),F=t(66652),q=t(81246),$=(0,d.Z)((function(e){return{root:{display:"flex",maxWidth:345,margin:"0 auto",backgroundColor:(0,m.$n)(e.palette.background.paper,.1)},details:{display:"flex",flexDirection:"column",flex:"1 0 auto"},content:{flex:"1 0 auto"},cover:{width:151},controls:{display:"flex",alignItems:"center",paddingLeft:e.spacing(2),paddingBottom:e.spacing(2)},playIcon:{height:38,width:38}}}));function _(){var e=$(),n=(0,E.Z)();return(0,a.jsxs)(p.Z,{className:e.root,children:[(0,a.jsxs)(i.Z,{className:e.details,children:[(0,a.jsxs)(h.Z,{className:e.content,children:[(0,a.jsx)(s.Z,{component:"h5",variant:"h5",children:"Live From Space"}),(0,a.jsx)(s.Z,{variant:"subtitle1",color:"textSecondary",children:"Mac Miller"})]}),(0,a.jsxs)(i.Z,{className:e.controls,children:[(0,a.jsx)(w.Z,{"aria-label":"previous",children:"rtl"===n.direction?(0,a.jsx)(q.Z,{}):(0,a.jsx)(H.Z,{})}),(0,a.jsx)(w.Z,{"aria-label":"play/pause",children:(0,a.jsx)(F.Z,{className:e.playIcon})}),(0,a.jsx)(w.Z,{"aria-label":"next",children:"rtl"===n.direction?(0,a.jsx)(H.Z,{}):(0,a.jsx)(q.Z,{})})]})]}),(0,a.jsx)(k.Z,{className:e.cover,image:"https://via.placeholder.com/1500x1000",title:"Live from space album cover"})]})}var V=(0,l.Z)((function(e){return{section:{"&:not(:last-child)":{marginBottom:e.typography.pxToRem(32)}},sectionHeading:{marginBottom:e.typography.pxToRem(16)}}})),U=t(79921),Y=[{label:"Simple Card",link:"simple-card",component:(0,a.jsx)(f,{}),filename:"./SimpleCard.txt"},{label:"Outlined Card",link:"outlined-card",component:(0,a.jsx)(b,{}),filename:"./OutlinedCard.txt"},{label:"Complex Interaction",link:"complex-interaction",component:(0,a.jsx)(R,{}),filename:"./RecipeReviewCard.txt"},{label:"Media",link:"media",component:(0,a.jsx)(L,{}),filename:"./MediaCard.txt"},{label:"Image Media",link:"img-media",component:(0,a.jsx)(W,{}),filename:"./ImgMediaCard.txt"},{label:"UI Controls",link:"ui-controls",component:(0,a.jsx)(_,{}),filename:"./MediaControlCard.txt"}];function G(){var e=V();return(0,a.jsx)(o.dx,{pageTitle:"Card",menus:Y,children:Y.map((function(n,t){return(0,a.jsxs)(i.Z,{id:n.link,className:e.section,children:[(0,a.jsx)(s.Z,{component:"h3",variant:"inherit",className:e.sectionHeading,children:n.label}),(0,a.jsx)(c.Z,{code:U(n.filename).default,language:"jsx",children:n.component})]},t)}))})}},95158:function(e,n,t){"use strict";t.r(n),n.default='import React from \'react\';\nimport { lighten, makeStyles } from \'@material-ui/core/styles\';\nimport Card from \'@material-ui/core/Card\';\nimport CardActionArea from \'@material-ui/core/CardActionArea\';\nimport CardActions from \'@material-ui/core/CardActions\';\nimport CardContent from \'@material-ui/core/CardContent\';\nimport CardMedia from \'@material-ui/core/CardMedia\';\nimport Button from \'@material-ui/core/Button\';\nimport Typography from \'@material-ui/core/Typography\';\n\nconst useStyles = makeStyles(theme => ({\n  root: {\n    maxWidth: 345,\n    margin: \'0 auto\',\n    backgroundColor: lighten(theme.palette.background.paper, 0.1),\n  },\n}));\n\nexport default function ImgMediaCard() {\n  const classes = useStyles();\n\n  return (\n    <Card className={classes.root}>\n      <CardActionArea>\n        <CardMedia\n          component="img"\n          alt="Contemplative Reptile"\n          height="140"\n          image={\'https://via.placeholder.com/1500x1000\'}\n          title="Contemplative Reptile"\n        />\n        <CardContent>\n          <Typography gutterBottom variant="h5" component="h2">\n            Lizard\n          </Typography>\n          <Typography variant="body2" color="textSecondary" component="p">\n            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents\n            except Antarctica\n          </Typography>\n        </CardContent>\n      </CardActionArea>\n      <CardActions>\n        <Button size="small" color="primary">\n          Share\n        </Button>\n        <Button size="small" color="primary">\n          Learn More\n        </Button>\n      </CardActions>\n    </Card>\n  );\n}\n'},53763:function(e,n,t){"use strict";t.r(n),n.default="import React from 'react';\nimport { lighten, makeStyles } from '@material-ui/core/styles';\nimport Card from '@material-ui/core/Card';\nimport CardActionArea from '@material-ui/core/CardActionArea';\nimport CardActions from '@material-ui/core/CardActions';\nimport CardContent from '@material-ui/core/CardContent';\nimport CardMedia from '@material-ui/core/CardMedia';\nimport Button from '@material-ui/core/Button';\nimport Typography from '@material-ui/core/Typography';\n\nconst useStyles = makeStyles(theme => ({\n  root: {\n    maxWidth: 345,\n    margin: '0 auto',\n    backgroundColor: lighten(theme.palette.background.paper, 0.1),\n  },\n  media: {\n    height: 140,\n  },\n}));\n\nexport default function MediaCard() {\n  const classes = useStyles();\n\n  return (\n    <Card className={classes.root}>\n      <CardActionArea>\n        <CardMedia\n          className={classes.media}\n          image={'https://via.placeholder.com/1500x1000'}\n          title=\"Contemplative Reptile\"\n        />\n        <CardContent>\n          <Typography gutterBottom variant=\"h5\" component=\"h2\">\n            Lizard\n          </Typography>\n          <Typography variant=\"body2\" color=\"textSecondary\" component=\"p\">\n            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents\n            except Antarctica\n          </Typography>\n        </CardContent>\n      </CardActionArea>\n      <CardActions>\n        <Button size=\"small\" color=\"primary\">\n          Share\n        </Button>\n        <Button size=\"small\" color=\"primary\">\n          Learn More\n        </Button>\n      </CardActions>\n    </Card>\n  );\n}\n"},4614:function(e,n,t){"use strict";t.r(n),n.default="import React from 'react';\nimport { lighten, makeStyles, useTheme } from '@material-ui/core/styles';\nimport Card from '@material-ui/core/Card';\nimport CardContent from '@material-ui/core/CardContent';\nimport CardMedia from '@material-ui/core/CardMedia';\nimport IconButton from '@material-ui/core/IconButton';\nimport Typography from '@material-ui/core/Typography';\nimport SkipPreviousIcon from '@material-ui/icons/SkipPrevious';\nimport PlayArrowIcon from '@material-ui/icons/PlayArrow';\nimport SkipNextIcon from '@material-ui/icons/SkipNext';\nimport { Box } from '@material-ui/core';\n\nconst useStyles = makeStyles(theme => ({\n  root: {\n    display: 'flex',\n    maxWidth: 345,\n    margin: '0 auto',\n    backgroundColor: lighten(theme.palette.background.paper, 0.1),\n  },\n  details: {\n    display: 'flex',\n    flexDirection: 'column',\n    flex: '1 0 auto',\n  },\n  content: {\n    flex: '1 0 auto',\n  },\n  cover: {\n    width: 151,\n  },\n  controls: {\n    display: 'flex',\n    alignItems: 'center',\n    paddingLeft: theme.spacing(2),\n    paddingBottom: theme.spacing(2),\n  },\n  playIcon: {\n    height: 38,\n    width: 38,\n  },\n}));\n\nexport default function MediaControlCard() {\n  const classes = useStyles();\n  const theme = useTheme();\n\n  return (\n    <Card className={classes.root}>\n      <Box className={classes.details}>\n        <CardContent className={classes.content}>\n          <Typography component=\"h5\" variant=\"h5\">\n            Live From Space\n          </Typography>\n          <Typography variant=\"subtitle1\" color=\"textSecondary\">\n            Mac Miller\n          </Typography>\n        </CardContent>\n        <Box className={classes.controls}>\n          <IconButton aria-label=\"previous\">\n            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}\n          </IconButton>\n          <IconButton aria-label=\"play/pause\">\n            <PlayArrowIcon className={classes.playIcon} />\n          </IconButton>\n          <IconButton aria-label=\"next\">{theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}</IconButton>\n        </Box>\n      </Box>\n      <CardMedia\n        className={classes.cover}\n        image={'https://via.placeholder.com/1500x1000'}\n        title=\"Live from space album cover\"\n      />\n    </Card>\n  );\n}\n"},18195:function(e,n,t){"use strict";t.r(n),n.default="import React from 'react';\nimport { lighten, makeStyles } from '@material-ui/core/styles';\nimport Card from '@material-ui/core/Card';\nimport CardActions from '@material-ui/core/CardActions';\nimport CardContent from '@material-ui/core/CardContent';\nimport Button from '@material-ui/core/Button';\nimport Typography from '@material-ui/core/Typography';\n\nconst useStyles = makeStyles(theme => ({\n  root: {\n    minWidth: 275,\n    maxWidth: 345,\n    margin: '0 auto',\n    backgroundColor: lighten(theme.palette.background.paper, 0.1),\n  },\n  bullet: {\n    display: 'inline-block',\n    margin: '0 2px',\n    transform: 'scale(0.8)',\n  },\n  title: {\n    fontSize: 14,\n  },\n  pos: {\n    marginBottom: 12,\n  },\n}));\n\nexport default function OutlinedCard() {\n  const classes = useStyles();\n  const bull = <span className={classes.bullet}>\u2022</span>;\n\n  return (\n    <Card className={classes.root} variant=\"outlined\">\n      <CardContent>\n        <Typography className={classes.title} color=\"textSecondary\" gutterBottom>\n          Word of the Day\n        </Typography>\n        <Typography variant=\"h5\" component=\"h2\">\n          be{bull}nev{bull}o{bull}lent\n        </Typography>\n        <Typography className={classes.pos} color=\"textSecondary\">\n          adjective\n        </Typography>\n        <Typography variant=\"body2\" component=\"p\">\n          well meaning and kindly.\n          <br />\n          {'\"a benevolent smile\"'}\n        </Typography>\n      </CardContent>\n      <CardActions>\n        <Button size=\"small\">Learn More</Button>\n      </CardActions>\n    </Card>\n  );\n}\n"},21099:function(e,n,t){"use strict";t.r(n),n.default="import React from 'react';\nimport { lighten, makeStyles } from '@material-ui/core/styles';\nimport clsx from 'clsx';\nimport Card from '@material-ui/core/Card';\nimport CardHeader from '@material-ui/core/CardHeader';\nimport CardMedia from '@material-ui/core/CardMedia';\nimport CardContent from '@material-ui/core/CardContent';\nimport CardActions from '@material-ui/core/CardActions';\nimport Collapse from '@material-ui/core/Collapse';\nimport Avatar from '@material-ui/core/Avatar';\nimport IconButton from '@material-ui/core/IconButton';\nimport Typography from '@material-ui/core/Typography';\nimport { red } from '@material-ui/core/colors';\nimport FavoriteIcon from '@material-ui/icons/Favorite';\nimport ShareIcon from '@material-ui/icons/Share';\nimport ExpandMoreIcon from '@material-ui/icons/ExpandMore';\nimport MoreVertIcon from '@material-ui/icons/MoreVert';\n\nconst useStyles = makeStyles(theme => ({\n  root: {\n    maxWidth: 345,\n    margin: '0 auto',\n    backgroundColor: lighten(theme.palette.background.paper, 0.1),\n  },\n  media: {\n    height: 0,\n    paddingTop: '56.25%', // 16:9\n  },\n  expand: {\n    transform: 'rotate(0deg)',\n    marginLeft: 'auto',\n    transition: theme.transitions.create('transform', {\n      duration: theme.transitions.duration.shortest,\n    }),\n  },\n  expandOpen: {\n    transform: 'rotate(180deg)',\n  },\n  avatar: {\n    backgroundColor: red[500],\n  },\n}));\n\nexport default function RecipeReviewCard() {\n  const classes = useStyles();\n  const [expanded, setExpanded] = React.useState(false);\n\n  const handleExpandClick = () => {\n    setExpanded(!expanded);\n  };\n\n  return (\n    <Card className={classes.root}>\n      <CardHeader\n        avatar={\n          <Avatar aria-label=\"recipe\" className={classes.avatar}>\n            R\n          </Avatar>\n        }\n        action={\n          <IconButton aria-label=\"settings\">\n            <MoreVertIcon />\n          </IconButton>\n        }\n        title=\"Shrimp and Chorizo Paella\"\n        subheader=\"September 14, 2016\"\n      />\n      <CardMedia\n        className={classes.media}\n        image={'https://via.placeholder.com/1500x1000'}\n        title=\"Paella dish\"\n      />\n      <CardContent>\n        <Typography variant=\"body2\" color=\"textSecondary\" component=\"p\">\n          This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of\n          frozen peas along with the mussels, if you like.\n        </Typography>\n      </CardContent>\n      <CardActions disableSpacing>\n        <IconButton aria-label=\"add to favorites\">\n          <FavoriteIcon />\n        </IconButton>\n        <IconButton aria-label=\"share\">\n          <ShareIcon />\n        </IconButton>\n        <IconButton\n          className={clsx(classes.expand, {\n            [classes.expandOpen]: expanded,\n          })}\n          onClick={handleExpandClick}\n          aria-expanded={expanded}\n          aria-label=\"show more\">\n          <ExpandMoreIcon />\n        </IconButton>\n      </CardActions>\n      <Collapse in={expanded} timeout=\"auto\" unmountOnExit>\n        <CardContent>\n          <Typography paragraph>Method:</Typography>\n          <Typography paragraph>\n            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.\n          </Typography>\n          <Typography paragraph>\n            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and\n            chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate\n            and set aside, leaving chicken and chorizo in the pan. Add piment\xf3n, bay leaves, garlic, tomatoes, onion, salt\n            and pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add saffron broth and\n            remaining 4 1/2 cups chicken broth; bring to a boil.\n          </Typography>\n          <Typography paragraph>\n            Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring, until\n            most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and mussels,\n            tucking them down into the rice, and cook again without stirring, until mussels have opened and rice is just\n            tender, 5 to 7 minutes more. (Discard any mussels that don\u2019t open.)\n          </Typography>\n          <Typography>Set aside off of the heat to let rest for 10 minutes, and then serve.</Typography>\n        </CardContent>\n      </Collapse>\n    </Card>\n  );\n}\n"},33160:function(e,n,t){"use strict";t.r(n),n.default="import React from 'react';\nimport { lighten, makeStyles } from '@material-ui/core/styles';\nimport Card from '@material-ui/core/Card';\nimport CardActions from '@material-ui/core/CardActions';\nimport CardContent from '@material-ui/core/CardContent';\nimport Button from '@material-ui/core/Button';\nimport Typography from '@material-ui/core/Typography';\n\nconst useStyles = makeStyles(theme => ({\n  root: {\n    minWidth: 275,\n    maxWidth: 345,\n    margin: '0 auto',\n    backgroundColor: lighten(theme.palette.background.paper, 0.1),\n  },\n  bullet: {\n    display: 'inline-block',\n    margin: '0 2px',\n    transform: 'scale(0.8)',\n  },\n  title: {\n    fontSize: 14,\n  },\n  pos: {\n    marginBottom: 12,\n  },\n}));\n\nexport default function SimpleCard() {\n  const classes = useStyles();\n  const bull = <span className={classes.bullet}>\u2022</span>;\n\n  return (\n    <Card className={classes.root}>\n      <CardContent>\n        <Typography className={classes.title} color=\"textSecondary\" gutterBottom>\n          Word of the Day\n        </Typography>\n        <Typography variant=\"h5\" component=\"h2\">\n          be{bull}nev{bull}o{bull}lent\n        </Typography>\n        <Typography className={classes.pos} color=\"textSecondary\">\n          adjective\n        </Typography>\n        <Typography variant=\"body2\" component=\"p\">\n          well meaning and kindly.\n          <br />\n          {'\"a benevolent smile\"'}\n        </Typography>\n      </CardContent>\n      <CardActions>\n        <Button size=\"small\">Learn More</Button>\n      </CardActions>\n    </Card>\n  );\n}\n"}}]);