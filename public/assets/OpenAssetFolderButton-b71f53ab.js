import{u as l,j as r,am as c,R as u,c as d,P as p,F as f,z as h}from"./index-bbd1ebcb.js";const x={width:"50px",height:"50px",padding:"7px"};function g({icon:t,lang:s,onClick:o,disabled:e,isActive:n}){const[i]=l();return r.jsxs("div",{style:{width:"50px",height:"70px",cursor:e?"":"pointer"},onClick:a=>{!e&&o&&o(a)},children:[r.jsx("div",{style:{borderRadius:"25%",backgroundColor:n?"rgb(100, 0, 0)":"rgba(150, 150, 150, 0.8)"},children:r.jsx("div",{style:{width:"55px",height:"50px"},children:r.jsx(c,{style:{...x},src:t})})}),s&&r.jsx("div",{style:{textAlign:"center",color:"white",margin:"auto"},children:i(s)})]})}function b({children:t,placement:s}){return r.jsx("div",{style:{position:"absolute",...j(s)},children:r.jsx("div",{className:m(s),children:u.Children.toArray(t)})})}function m(t){return t==="bottom"||t==="top"?"hstack gap-3":"vstack gap-3"}function j(t){const s="10px";if(t==="bottom")return{bottom:s,left:"50%",transform:"translate(-50%)"};if(t==="top")return{top:s,left:"50%",transform:"translate(-50%)"};if(t==="left")return{top:"50%",left:s,transform:"translate(0%, -50%)"};if(t==="right")return{top:"50%",right:s,transform:"translate(0%, -50%)"}}function v({asset:t}){const s=d(),o=()=>{s.lock();const e=f.NormalizePath(t.GetFolderPath());h.OpenFolder(e),setTimeout(s.unlock,1e3)};return p.IsDesktop()?r.jsx(g,{lang:"open",icon:"/icons/Projects.svg",onClick:o}):r.jsx(r.Fragment,{})}export{b as A,g as H,v as O};
