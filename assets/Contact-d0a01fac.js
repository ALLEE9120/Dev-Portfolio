import{j as s,P as g}from"./index-03945b69.js";import{a as N,b as k}from"./index.esm-9819eea7.js";const m={_origin:"https://api.emailjs.com"},T=(t,e="https://api.emailjs.com")=>{m._userID=t,m._origin=e},v=(t,e,o)=>{if(!t)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!e)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!o)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class f{constructor(e){this.status=e.status,this.text=e.responseText}}const j=(t,e,o={})=>new Promise((d,r)=>{const a=new XMLHttpRequest;a.addEventListener("load",({target:i})=>{const p=new f(i);p.status===200||p.text==="OK"?d(p):r(p)}),a.addEventListener("error",({target:i})=>{r(new f(i))}),a.open("POST",m._origin+t,!0),Object.keys(o).forEach(i=>{a.setRequestHeader(i,o[i])}),a.send(e)}),q=(t,e,o,d)=>{const r=d||m._userID;return v(r,t,e),j("/api/v1.0/email/send",JSON.stringify({lib_version:"3.2.0",user_id:r,service_id:t,template_id:e,template_params:o}),{"Content-type":"application/json"})},C=t=>{let e;if(typeof t=="string"?e=document.querySelector(t):e=t,!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return e},F=(t,e,o,d)=>{const r=d||m._userID,a=C(o);v(r,t,e);const i=new FormData(a);return i.append("lib_version","3.2.0"),i.append("service_id",t),i.append("template_id",e),i.append("user_id",r),j("/api/v1.0/email/send-form",i)},L={init:T,send:q,sendForm:F};function M({color:t,bgColor:e}){const o=["Name","Email"],d={color:t},r={color:t,border:`2px solid ${t}`},a={border:`1px solid ${t}`,backgroundColor:"transparent",zIndex:"10",width:"100%"},i={position:"relative",width:"100%"},p={color:t,marginLeft:"12px",fontSize:"1.2rem",fontWeight:"500",letterSpacing:"1px",position:"absolute",top:"8px",zIndex:"0",transition:"all 0.5s ease-in-out"},b={border:`1px solid ${t}`,zIndex:"10",width:"100%",padding:"10px",cursor:"pointer",transition:"all 0.5s ease-in-out",color:t,backgroundColor:e},u=n=>{const l=n.target.previousSibling;n.target.value!==""?l.style.opacity="0":l.style.opacity="1"},h=n=>{n.target.nextSibling.focus()},S=n=>{n.target.style.backgroundColor=t,n.target.style.color=e},w=n=>{n.target.style.backgroundColor=e,n.target.style.color=t},_=n=>{n.preventDefault();const l=n.target;L.sendForm("service_wn0moae","template_qoabhmp",l,"N2SIozkNfMSTZXMWo").then(c=>{console.log(c.text),alert("Message Sent, I will get back to you shortly",c.text)},c=>{console.log(c.text),alert("An error occurred, Please try again",c.text)});const x=l.querySelectorAll("input"),y=l.querySelector("textarea");x.forEach(c=>{c.type!=="submit"&&(c.value="",c.previousSibling.style.opacity="1",y.value="",y.previousSibling.style.opacity="1")})};return s.jsxs("div",{className:"contact-div",style:d,children:[s.jsx("div",{className:"contact-title top",children:s.jsx("h1",{children:"<div id='contact'>"})}),s.jsxs("div",{className:"contact-container",children:[s.jsxs("div",{className:"contact-left",children:[s.jsx("h1",{children:"Get in touch"}),s.jsx("p",{children:"Feel free to reach out to me for any questions or just to say hi!"}),s.jsxs("div",{className:"socials",children:[s.jsx("h2",{className:"gray",children:"// socials"}),s.jsx("a",{href:"https://github.com/ALLEE9120",className:"social-link",children:s.jsx(N,{style:{marginRight:"20px",fontSize:"30px",color:t}})}),s.jsx("a",{href:"https://www.linkedin.com/in/mo-ar/",className:"social-link",children:s.jsx(k,{style:{marginRight:"20px",fontSize:"30px",color:t}})})]})]}),s.jsxs("form",{className:"contact-form",style:r,onSubmit:_,children:[o.map((n,l)=>s.jsxs("div",{style:i,children:[s.jsx("span",{style:p,onClick:h,children:n}),s.jsx("input",{type:"text",id:n,name:n,style:a,onChange:u})]},l)),s.jsxs("div",{style:i,children:[s.jsx("span",{style:p,onClick:h,children:"Message"}),s.jsx("textarea",{type:"text",id:"message",name:"message",style:a,onChange:u})]}),s.jsx("div",{style:i,children:s.jsx("input",{type:"submit",value:"Submit",style:b,onMouseOver:S,onMouseOut:w})})]})]}),s.jsx("div",{className:"contact-title bottom",children:s.jsx("h1",{children:"</div>"})})]})}M.propTypes={color:g.string,bgColor:g.string};export{M as default};
