(this.webpackJsonpwikifrontend=this.webpackJsonpwikifrontend||[]).push([[4],{109:function(t,e,n){"use strict";n.r(e);var o=n(2),c=n(27),s=n(1),i=n.n(s),r=n(80),a=n.n(r),l=n(65),d=n(107),p=n(105),j=n(108),b=Object(l.a)((function(t){return{modal:{display:"flex",alignItems:"center",justifyContent:"center",overflow:"none"},paper:{backgroundColor:t.palette.background.paper,border:"2px solid #000",boxShadow:t.shadows[5],padding:t.spacing(2,4,3),maxWidth:"50%",maxHeight:"75%",overflow:"scroll"}}}));function u(t){var e=b(),n=i.a.useState(!1),s=Object(c.a)(n,2),r=s[0],a=s[1];return Object(o.jsxs)("div",{children:[Object(o.jsx)("button",{type:"button",onClick:function(){a(!0)},children:"...Read More"}),Object(o.jsx)(d.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:e.modal,open:r,onClose:function(){a(!1)},closeAfterTransition:!0,BackdropComponent:p.a,BackdropProps:{timeout:500},children:Object(o.jsx)(j.a,{in:r,children:Object(o.jsx)("div",{className:e.paper,children:r?Object(o.jsx)("p",{id:"transition-modal-description",children:"... "+t.postContent.substring(70)}):Object(o.jsx)("p",{children:t.postContent.substring(0,70)+"..."})})})})]})}e.default=function(t){var e=Object(s.useState)([]),n=Object(c.a)(e,2),i=n[0],r=n[1];Object(s.useEffect)((function(){a.a.get("https://safe-cliffs-03637.herokuapp.com/articles").then((function(t){console.log(t.data),r(t.data)})).catch((function(t){console.log(t)}))}),[]);var l=i.filter((function(e,n){return e.title.toLowerCase().includes(t.search.toLowerCase())}));return console.log(l),Object(o.jsx)("div",{children:Object(o.jsx)("form",{children:Object(o.jsx)("ul",{children:l.map((function(e,n){return Object(o.jsxs)("li",{className:"posts",children:[Object(o.jsx)("img",{style:{height:95,width:210},src:"https://safe-cliffs-03637.herokuapp.com/".concat(e.image),alt:"postImage"}),""!==t.title?Object(o.jsxs)("p",{style:{fontWeight:800,color:"#347B98"},children:[e.title," "]}):null,Object(o.jsx)("br",{})," ",Object(o.jsx)("hr",{}),Object(o.jsx)("p",{children:e.content.substring(0,70)+"..."}),e.content.length>70?Object(o.jsx)(u,{postID:e._id,postContent:e.content}):null]},e._id)}))})})})}}}]);
//# sourceMappingURL=4.cc88da9c.chunk.js.map