(this.webpackJsonpwikifrontend=this.webpackJsonpwikifrontend||[]).push([[0],{43:function(e,t,n){},44:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n(0),o=n.n(r),i=n(5),a=n.n(i),s=(n(43),n(19)),l=n(25),d=n(11),j=(n(44),n(34)),b=n.n(j),u=n(85),h=n(88),p=n(90),f=n(89),O=Object(u.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center",overflow:"none"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3),maxWidth:"50%",maxHeight:"75%",overflow:"scroll"}}}));function m(e){var t=O(),n=o.a.useState(!1),r=Object(d.a)(n,2),i=r[0],a=r[1];return Object(c.jsxs)("div",{children:[Object(c.jsx)("button",{style:{margin:1,backgroundColor:"#4424D6",color:"#D4EDF7",borderRadius:5,height:"2.5rem",width:"6.5rem",fontWeight:600,border:0},type:"button",onClick:function(){a(!0)},children:"...Read More"}),Object(c.jsx)(h.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:t.modal,open:i,onClose:function(){a(!1)},closeAfterTransition:!0,BackdropComponent:p.a,BackdropProps:{timeout:500},children:Object(c.jsx)(f.a,{in:i,children:Object(c.jsx)("div",{className:t.paper,children:i?Object(c.jsx)("p",{id:"transition-modal-description",children:"... "+e.postContent.substring(70)}):Object(c.jsx)("p",{children:e.postContent.substring(0,70)+"..."})})})})]})}var x=function(e){var t=Object(r.useState)([]),n=Object(d.a)(t,2),o=n[0],i=n[1];Object(r.useEffect)((function(){b.a.get("https://safe-cliffs-03637.herokuapp.com/articles").then((function(e){i(e.data)})).catch((function(e){}))}),[]);var a=o.filter((function(t,n){return t.title.toLowerCase().includes(e.search.toLowerCase())}));return console.log(a),Object(c.jsx)("div",{children:Object(c.jsx)("form",{children:Object(c.jsx)("ul",{children:a.map((function(t,n){return Object(c.jsxs)("li",{className:"posts",children:[Object(c.jsx)("img",{src:"https://safe-cliffs-03637.herokuapp.com/".concat(t.image),alt:"postImage"}),""!==e.title?Object(c.jsxs)("p",{style:{fontWeight:800,color:"#347B98"},children:[t.title," "]}):null,Object(c.jsx)("br",{})," ",Object(c.jsx)("hr",{}),Object(c.jsx)("p",{children:t.content.substring(0,70)+"..."}),t.content.length>70?Object(c.jsx)(m,{postID:t._id,postContent:t.content}):null]},t._id)}))})})})};var g=function(){var e=(new Date).getFullYear();return Object(c.jsxs)("footer",{children:["Blake Marshall Copyright \u24d2 ",e]})};var v=function(){var e=Object(r.useState)({title:"",content:""}),t=Object(d.a)(e,2),n=t[0],o=t[1];function i(e){var t=e.target,n=t.name,c=t.value;o((function(e){return console.log(e),Object(l.a)(Object(l.a)({},e),{},Object(s.a)({},n,c))}))}return Object(c.jsxs)("div",{className:"grid-container",children:[Object(c.jsxs)("div",{className:"banner",children:[Object(c.jsx)("h1",{children:"\ud83c\udf0e RESTful Wiki Search"}),Object(c.jsx)("form",{children:Object(c.jsx)("input",{style:{margin:"1rem 0rem 1rem 0rem",border:0,height:"3rem",borderRadius:"10px"},value:n.title,name:"title",type:"text",placeholder:"  Search for a Wiki ...  \ud83d\udd0e",onChange:i,onTouchEnd:i})}),Object(c.jsx)("hr",{})]}),Object(c.jsx)("div",{className:"post",children:Object(c.jsx)(x,{search:n.title})}),Object(c.jsx)("div",{className:"footer",children:Object(c.jsx)(g,{})})]})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,92)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),o(e),i(e)}))};a.a.render(Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(v,{})}),document.getElementById("root")),C()}},[[67,1,2]]]);
//# sourceMappingURL=main.d40651fd.chunk.js.map