import{j as s,b as e,R as n}from"./index-bbd1ebcb.js";import{C as o,E as r,O as i}from"./Environment-bbcc9cfa.js";import{A as l,O as u,H as a}from"./OpenAssetFolderButton-b71f53ab.js";import{u as d}from"./assets_hooks-1bb9fe8a.js";import{C as m}from"./ContactShadows-9c4c6fb1.js";function c({asset:t}){return s.jsxs(l,{placement:"bottom",children:[s.jsx(u,{asset:t}),s.jsx(a,{lang:"replace",icon:"/icons/Map.svg"}),s.jsx(a,{lang:"edit",icon:"/icons/Management.svg"})]})}function b({}){const t=d();return t?s.jsx(p,{asset:t}):s.jsx(e.MiddleSpinner,{})}function p({asset:t}){return t.data,s.jsxs("div",{style:{},children:[s.jsxs(o,{shadows:!0,className:"gl-canvas",style:{height:"100vh"},children:[s.jsx("ambientLight",{}),s.jsx(n.Suspense,{fallback:"",children:s.jsx(r,{preset:"sunset",ground:{height:1,radius:0}})}),s.jsx(m,{position:[0,-.8,0],opacity:.25,scale:10,blur:1.5,far:.8}),s.jsx(i,{makeDefault:!0,target:[0,.15,0],enableDamping:!1,maxPolarAngle:Math.PI/2}),s.jsx("spotLight",{intensity:.5,angle:.1,penumbra:1,position:[10,15,10],castShadow:!0})]}),s.jsx(c,{asset:t})]})}export{b as default};