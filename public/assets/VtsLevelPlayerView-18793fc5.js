import{b as i,j as e,F as d,R as j}from"./index-bbd1ebcb.js";function r({icon:n,text:t}){return i.T(),e.jsxs(i.Stack,{direction:"horizontal",children:[n&&e.jsx(i.IconClickButton,{image:n}),e.jsx("h4",{style:{marginLeft:"0.5em",marginTop:"0.25em"},children:t})]})}function u({}){const[n]=i.T();return e.jsx(i.Card,{style:{backgroundColor:i.Colors.WhiteMiddle,padding:"0.5em",height:"100%"},children:e.jsxs(i.Stack,{gap:2,children:[e.jsx(r,{text:`${n("training.materials")}:`,icon:"/icons/Create.Pdf.svg"}),e.jsx(m,{}),e.jsx(r,{text:`${n("roles")}:`,icon:"/icons/Users.svg"}),e.jsx(p,{})]})})}function m({}){const[n]=i.T();function t(){alert("Videos clicked")}function s(){alert("Documents clicked")}return e.jsxs(e.Fragment,{children:[e.jsx(i.Card,{style:{cursor:"pointer"},onClick:t,children:e.jsxs(i.Stack,{gap:3,direction:"horizontal",style:{margin:"1em"},children:[e.jsx(i.IconClickButton,{image:"/icons/Create.Video.svg",size:"2em"}),e.jsx(i.Typography,{children:n("videos")})]})}),e.jsx(i.Card,{style:{cursor:"pointer"},onClick:s,children:e.jsxs(i.Stack,{gap:3,direction:"horizontal",style:{margin:"1em"},children:[e.jsx(i.IconClickButton,{image:"/icons/Create.Pdf.svg",size:"2em"}),e.jsx(i.Typography,{children:n("documents")})]})})]})}function p({}){const[n]=i.T();function t(){alert("Roles clicked")}return e.jsx(e.Fragment,{children:e.jsx(i.Card,{style:{cursor:"pointer"},onClick:t,children:e.jsxs(i.Stack,{gap:3,direction:"horizontal",style:{margin:"1em"},children:[e.jsx(i.IconClickButton,{image:"/icons/Users.svg",size:"2em"}),e.jsx(i.Typography,{children:n("Role")})]})})})}function C({}){const[n]=i.T();return e.jsx(i.Card,{style:{backgroundColor:i.Colors.WhiteMiddle,padding:"0.5em",height:"100%"},children:e.jsxs(i.Stack,{gap:2,children:[e.jsx(r,{icon:"/icons/Time.svg",text:`${n("times")}:`}),e.jsx(k,{}),e.jsx(r,{icon:"/icons/Time.svg",text:`${n("tasks")}:`}),e.jsx(y,{}),e.jsx(r,{icon:"/icons/Alarm.svg",text:`${n("penalizations")}:`}),e.jsx(f,{})]})})}function k({}){return e.jsxs(i.Stack,{gap:2,children:[e.jsx(c,{lang:"vts.time.expected",time:"00:15:00"}),e.jsx(c,{lang:"vts.time.training",time:"00:0:00"}),e.jsx(c,{lang:"vts.time.penalisations",time:"00:0:00"}),e.jsx(c,{lang:"vts.time.total",time:"00:0:00"})]})}function c({lang:n,time:t}){const[s]=i.T();return e.jsx(i.Card,{style:{padding:"0.75em"},children:e.jsxs(i.Row,{children:[e.jsx(i.Col,{children:s(n)}),":",e.jsx(i.Col,{children:t})]})})}function y({}){const n=["A","B","C","D"];return e.jsx(i.Stack,{gap:2,children:n.map((t,s)=>e.jsx(i.Card,{style:{padding:"0.5em"},children:e.jsxs(i.Stack,{direction:"horizontal",gap:2,children:[e.jsx(i.IconClickButton,{image:"/icons/Arrow.Up.svg",size:"0.75em"}),e.jsxs("div",{children:[s+1,"."]}),e.jsx("div",{children:t}),e.jsx("div",{style:{marginLeft:"auto"},children:e.jsx(i.IconClickButton,{image:"/icons/Checkbox.Ok.svg"})})]})},t))})}function f({}){const n=["A","B","C","D","E","F","G","H"];return e.jsx(i.Stack,{gap:2,style:{},children:n.map((t,s)=>e.jsx(i.Card,{style:{padding:"0.75em"},children:e.jsxs(i.Stack,{direction:"horizontal",gap:1,children:[e.jsxs("div",{children:[s+1,"."]}),e.jsx("div",{children:t}),e.jsx("div",{style:{marginLeft:"auto"},children:"20 s"})]})},t))})}function v({}){const[n]=i.T();return e.jsxs(i.Card,{style:{backgroundColor:i.Colors.WhiteMiddle,padding:"0.5em",height:"100%"},children:[e.jsx("div",{style:{textAlign:"center"},children:e.jsx(r,{text:n("preview")})}),e.jsxs(i.Stack,{gap:3,children:[e.jsx(i.Card,{children:e.jsx("img",{style:{height:"500px",width:"100%",margin:"1em",objectFit:"contain"},src:d.ConvertFilePath(d.GetPlatformPath("Images/VtsDefaultPreview.png"))})}),e.jsx(P,{})]})]})}function P({}){i.T();function n(){o(e.jsx(x,{onLoad:l}))}function t(){o(e.jsx(T,{onPause:s}))}function s(){o(e.jsx(h,{onPlay:t,onUnload:n}))}function l(){o(e.jsx(h,{onPlay:t,onUnload:n}))}const[g,o]=j.useState(e.jsx(x,{onLoad:l}));return e.jsx(i.Stack,{direction:"horizontal",gap:3,children:g})}function a({children:n,onClick:t}){return e.jsx(i.Card,{style:{cursor:"pointer",marginLeft:"auto",marginRight:"auto",position:"relative",padding:"1em"},onClick:t,children:j.Children.toArray(n)})}function x({onLoad:n}){const[t]=i.T();return e.jsx(a,{onClick:n,children:e.jsxs(i.Stack,{direction:"horizontal",gap:2,children:[e.jsx(i.IconClickButton,{image:"/icons/Load.svg"}),e.jsx("h3",{children:t("load")})]})})}function h({onUnload:n,onPlay:t}){const[s]=i.T();return e.jsxs(i.Stack,{gap:3,direction:"horizontal",style:{marginLeft:"auto",marginRight:"auto"},children:[e.jsx(a,{onClick:n,children:e.jsxs(i.Stack,{direction:"horizontal",gap:2,children:[e.jsx(i.IconClickButton,{image:"/icons/Stop.svg"}),e.jsx("h3",{children:s("unload")})]})}),e.jsx(a,{onClick:t,children:e.jsxs(i.Stack,{direction:"horizontal",gap:2,children:[e.jsx(i.IconClickButton,{image:"/icons/Play.svg"}),e.jsx("h3",{children:s("play")})]})})]})}function T({onPause:n}){const[t]=i.T();return e.jsx(i.Stack,{gap:3,direction:"horizontal",style:{marginLeft:"auto",marginRight:"auto"},children:e.jsx(a,{onClick:n,children:e.jsxs(i.Stack,{direction:"horizontal",gap:2,children:[e.jsx(i.IconClickButton,{image:"/icons/Pause.svg"}),e.jsx("h3",{children:t("pause")})]})})})}function L({}){return e.jsx("div",{style:{margin:"2em"},children:e.jsx(S,{})})}function S({}){return e.jsxs(i.Stack,{gap:3,children:[e.jsx(i.Card,{style:{backgroundColor:i.Colors.WhiteMiddle},children:e.jsx(i.Tabs,{value:"0",centered:!0,children:e.jsx(i.Tab,{value:"0",label:"Training name"})})}),e.jsxs(i.Row,{style:{height:"100%"},children:[e.jsx(i.Col,{xs:3,style:{paddingRight:0},children:e.jsx(u,{})}),e.jsx(i.Col,{children:e.jsx(v,{})}),e.jsx(i.Col,{xs:3,style:{paddingLeft:0},children:e.jsx(C,{})})]})]})}export{L as default};
