import{b as a,R as x,j as s,V as h,t as u,v as t,w as m,E as p,A as c,x as C}from"./index-bbd1ebcb.js";import{U as T}from"./UniversalAssetList-8b9736f0.js";import{T as b}from"./TabContext-548fad2c.js";import"./assets_hooks-1bb9fe8a.js";import"./CreateAssetWithFileContent-d3f9b504.js";import"./ImagesApi-25c337aa.js";function P({}){a.T();const[e,n]=x.useState("world"),d=(r,o)=>{n(o)};return s.jsx(h,{children:s.jsxs("div",{className:"vstack gap-3",children:[s.jsx(b,{value:e,children:s.jsx(a.Box,{sx:{borderBottom:1,borderColor:"divider",bgcolor:"background.paper"},children:s.jsxs(u,{value:e,onChange:d,"aria-label":"Asset tabs",textColor:"inherit",children:[s.jsx(t,{label:"World",value:"world"}),s.jsx(t,{label:"Media",value:"media"}),s.jsx(t,{label:"Data",value:"data"}),s.jsx(t,{label:"Vts",value:"vts"})]})})}),s.jsxs(a.Switch,{condition:e,children:[s.jsx(a.Case,{value:"world",children:s.jsx(i,{type:"world"})}),s.jsx(a.Case,{value:"media",children:s.jsx(i,{type:"media"})}),s.jsx(a.Case,{value:"data",children:s.jsx(i,{type:"data"})}),s.jsx(a.Case,{value:"vts",children:s.jsx(i,{type:"vts"})})]})]})})}function i({type:e}){const[n]=a.T(),{projectuid:d}=m(),[r,o]=p.Cookie.useCookie(`assets-tab-${e}`,c[`${e}Assets`]()[0].TYPE),j=(l,v)=>{o(v)};return x.useEffect(()=>{o(c[`${e}Assets`]()[0].TYPE)},[e]),s.jsxs("div",{className:"vstack gap-3",children:[s.jsx(b,{value:r,children:s.jsx(a.Box,{sx:{borderBottom:1,borderColor:"divider",bgcolor:"background.paper"},children:s.jsx(u,{value:r,onChange:j,"aria-label":"Asset tabs",variant:"scrollable",scrollButtons:"auto",textColor:"inherit",children:c[`${e}Assets`]().map(l=>s.jsx(t,{label:n(l.LANG_PLURAL),value:l.TYPE},l.TYPE))})})}),s.jsx(T,{parentProjectUid:d??"",assetDefinition:C.get(r)})]})}export{P as default};
