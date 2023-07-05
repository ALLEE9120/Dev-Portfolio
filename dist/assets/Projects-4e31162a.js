import{r as g,j as e,P as t}from"./index-03945b69.js";import{F as v,a as y}from"./index.esm-9819eea7.js";function o({color:s,title:i,description:d,techStack:m,bgColor:j,link:a,githubLink:c}){const[l,n]=g.useState(null),u={display:"flex",marginBottom:"80px"},p=r=>{n(r.target.className)},h=()=>{n(null)};return e.jsxs("div",{className:"allinfo-div",style:u,children:[e.jsx("h1",{className:"project-title",children:i}),e.jsx("p",{style:{color:s},children:d}),e.jsxs("div",{className:"project-stack",children:[e.jsx("h2",{className:"gray",children:"// Tech Stack"}),e.jsx("ul",{children:m.map((r,x)=>e.jsx("li",{style:{color:j,backgroundColor:s},children:r},x))})]}),e.jsx("h2",{className:"gray",children:"// See it in action"}),e.jsxs("div",{className:"project-links",children:[a&&e.jsxs("a",{onMouseOver:p,onMouseOut:h,style:{color:l==="Demo"?"#3182CE":s},className:"Demo",href:a,children:["Visit Site ",e.jsx(v,{style:{marginLeft:"20px"}})]}),c&&e.jsxs("a",{onMouseOver:p,onMouseOut:h,style:{color:l==="Code"?"#3182CE":s},className:"Code",href:c,children:["See the code",e.jsx(y,{style:{marginLeft:"20px"}})]})]})]})}o.propTypes={color:t.string,title:t.string,description:t.string,techStack:t.array,bgColor:t.string,link:t.string,githubLink:t.string};function k({color:s,bgColor:i}){return e.jsxs("div",{className:"projects-div",children:[e.jsx("div",{className:"projects-title top",children:e.jsx("h1",{children:"<div id='projects'>"})}),e.jsx(o,{color:s,title:"TripItEasy",description:"Mobile travel web app that simplifies users experience to create trips and add activities to their trips.",bgColor:i,techStack:["Ruby on Rails","Javascript","BootStrap","SCSS","SQLite","Google Maps API","Heroku"],link:"https://tripiteasy.herokuapp.com/",githubLink:"https://github.com/chiara-muller/TripItEasy"}),e.jsx(o,{color:s,title:"This Portfolio",description:"Not much to say here! This one just gave me a good excuse to spend a week practicing with React.",bgColor:i,techStack:["React","Javascript","SCSS","Vite","Heroku"],githubLink:"https://github.com/ALLEE9120/Dev-Portfolio"}),e.jsx("div",{className:"projects-title bottom",children:e.jsx("h1",{children:"</div>"})})]})}k.propTypes={color:t.string,bgColor:t.string};export{k as default};
