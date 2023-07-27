var T=Object.defineProperty;var A=(n,s,i)=>s in n?T(n,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):n[s]=i;var C=(n,s,i)=>(A(n,typeof s!="symbol"?s+"":s,i),i);import{P as S,z as _,F as h,j as e,b as t,w as P,k as v,x as g,R as u,a1 as E,a2 as w,V as B,c as M,a3 as z}from"./index-bbd1ebcb.js";import{U as I,a as R}from"./UniversalAssetList-8b9736f0.js";import{u as F}from"./assets_hooks-1bb9fe8a.js";import"./CreateAssetWithFileContent-d3f9b504.js";import"./ImagesApi-25c337aa.js";const m=class{static async Activate(s,i){S.IsDesktop()&&_.ReadFileStringSafe(h.GetPathInProject(s,`Translations/${i}.json`),"[]")}static async LoadAll(){return new Map}static T(s){return s.search("$")===0&&m.LANGS.get(m.ACTIVE_LANGUAGE),s}static async SaveSplit(s,i,o){}static FromJson(s){for(const i of s);}};let j=m;C(j,"ACTIVE_LANGUAGE","en"),C(j,"LANGS",new Map);function Q({answer:n,index:s,onRefresh:i,iconsSize:o}){const a=o??"1.5em";function r(){n.RemoveFromParent(),i()}function c(){n._parent.RotateAnswers(s,-1),i()}function d(){n._parent.RotateAnswers(s,1),i()}return e.jsxs(t.Stack,{direction:"horizontal",gap:1,children:[e.jsx(t.IconClickButton,{size:a,image:"/icons/Arrow.Down.svg",onClick:d}),e.jsx(t.IconClickButton,{size:a,image:"/icons/Arrow.Up.svg",onClick:c}),n._parent.answers.length>2&&e.jsx(t.IconClickButton,{size:a,image:"/icons/Delete.svg",onClick:r})]})}function y({index:n,question:s,onFullRefresh:i}){function o(){s.RemoveFromParent(),i()}function a(){s.Rotate(n,-1),i()}function r(){s.Rotate(n,1),i()}return e.jsxs(t.Stack,{direction:"horizontal",gap:1,style:{marginLeft:"5em"},children:[e.jsx(t.IconClickButton,{size:"1.25em",image:"/icons/Arrow.Down.svg",onClick:r}),e.jsx(t.IconClickButton,{size:"1.25em",image:"/icons/Arrow.Up.svg",onClick:a}),s._parent.questions.length>1&&e.jsx(t.IconClickButton,{size:"1.25em",image:"/icons/Delete.svg",onClick:o})]})}function G({question:n,onRefresh:s}){const{projectuid:i}=P(),o=v();function a(){const r=e.jsx(t.Offcanvas,{closeEnabled:!0,onClose:o.popElement,width:"1000px",header:e.jsx(t.OffcanvasTitle,{children:"select"}),children:e.jsx(I,{md:4,assetDefinition:g.get(n.content_type),parentProjectUid:i,mode:R.SELECT,onSelect:c=>{n.content_uid=c.uid,o.popElement(),s()}})});o.pushElement(r)}if(n.content_type==="")return e.jsx(e.Fragment,{});{let r=h.GetPlatformPath("Images/ProjectPreview.png"),c=e.jsx(e.Fragment,{}),d=e.jsx(e.Fragment,{});return n.content_uid!==""?(d=e.jsx(e.Fragment,{children:e.jsx(t.Typography,{children:n.content_uid})}),c=e.jsx(e.Fragment,{children:e.jsx(t.Button,{label:"replace",onClick:a})})):c=e.jsx(e.Fragment,{children:e.jsx(t.Button,{label:"select",onClick:a})}),e.jsxs(t.Card,{children:[e.jsx(t.CardMedia,{sx:{height:100},image:h.ConvertFilePath(r)}),e.jsx(t.CardContent,{children:d}),e.jsx(t.CardActions,{children:c})]})}}function N({exam:n,index:s,question:i,onRefresh:o}){const[a]=t.T(),[r,c]=u.useState([i]),[d,l]=u.useState(r[0].answers);function x(){l([...i.answers]),c([i])}function p(){i.AddRandomAnswer(),x()}return e.jsx(t.Card,{style:{backgroundColor:t.Colors.WhiteMiddle},children:e.jsx(t.CardContent,{children:e.jsxs(t.Stack,{gap:3,children:[e.jsx(t.Card,{children:e.jsxs(t.Stack,{gap:3,direction:"horizontal",style:{padding:"0.5em"},children:[s+1,".",e.jsx(U,{question:i,onRefresh:o,index:s})]})}),e.jsxs(t.Row,{children:[e.jsx(t.Col,{xs:4,children:e.jsxs(t.Stack,{gap:3,children:[e.jsx(t.Card,{style:{padding:"0.5em"},children:e.jsxs(t.Stack,{gap:3,direction:"horizontal",children:[e.jsxs(t.TextMicro,{children:[a("type"),":"]}),e.jsx(D,{question:i,onRefresh:o})]})}),e.jsx(G,{question:i,onRefresh:o})]})}),e.jsxs(t.Col,{children:[e.jsx(t.Stack,{gap:3,children:r[0].answers.map((f,b)=>e.jsx("div",{className:"hstack gap-3",children:e.jsx(t.Card,{style:{padding:"0.35em"},children:e.jsx(V,{answer:f,index:b,onRefresh:x})})},f.uid))}),e.jsx(t.Button,{style:{marginTop:"1em"},label:"add",onClick:p})]})]})]})})})}function U({question:n,index:s,onRefresh:i}){const[o,a]=u.useState(n.header);function r(l){const x=l.target.value;n.header=x,a(x)}function c(){n.isMultiChoice=!n.isMultiChoice,i()}const d=n.isMultiChoice?"/icons/Checkbox.Ok.svg":"/icons/Radio.On.svg";return e.jsxs(t.Stack,{gap:3,direction:"horizontal",children:[e.jsx("input",{type:"text",value:o,onChange:r}),e.jsx(t.TextMicro,{children:j.T(o)}),e.jsx(t.IconClickButton,{image:d,onClick:c}),e.jsx(y,{index:s,question:n,onFullRefresh:i})]})}function V({answer:n,index:s,onRefresh:i}){const[o,a]=u.useState(n.text);function r(x){const p=x.target.value;n.text=p,a(p)}function c(){if(n._parent.isMultiChoice)n.isRight=!n.isRight,i();else{for(const x of n._parent.answers)x.isRight=!1;n.isRight=!0,i()}}const d=n._parent.isMultiChoice;let l="";return d?l=n.isRight?"/icons/Checkbox.Ok.svg":"/icons/Checkbox.Empty.svg":l=n.isRight?"/icons/Radio.On.svg":"/icons/Radio.Off.svg",e.jsxs(t.Stack,{direction:"horizontal",gap:3,children:[e.jsx(t.IconClickButton,{image:l,size:"1.5em",onClick:c}),e.jsxs("b",{children:[s+1,"."]}),e.jsx("input",{type:"text",value:o,onChange:r}),e.jsx("div",{style:{width:"3em"}}),e.jsx(Q,{answer:n,onRefresh:i,index:s})]})}function D({question:n,onRefresh:s}){var d;const i=u.useRef();t.T();const[o,a]=u.useState(!1);function r(l){l==="none"?n.content_type="":n.content_type=l,n.content_uid="",a(!1),s()}const c=n.content_type===""?"/icons/Checkbox.Empty.svg":`/icons/${(d=g.get(n.content_type))==null?void 0:d.ICON}`;return e.jsxs("div",{ref:i,children:[e.jsx(t.IconClickButton,{image:c,onClick:()=>a(!0)}),e.jsx(t.Popover,{id:n.uid,open:o,anchorEl:i.current,onClose:()=>a(!1),anchorOrigin:{vertical:"bottom",horizontal:"left"},style:{backgroundColor:"rgba(0, 0, 0, 0.5)"},children:e.jsx("div",{style:{padding:"1em",backgroundColor:t.Colors.WhiteMiddle},children:e.jsxs(t.Stack,{gap:2,children:[e.jsx(k,{icon:"/icons/Checkbox.Empty.svg",value:"none",contentTypeChanged:r}),E.ToArray().map(l=>{var x;return e.jsx(k,{icon:`/icons/${(x=g.get(l))==null?void 0:x.ICON}`,value:l,contentTypeChanged:r})})]})})})]})}function k({icon:n,value:s,contentTypeChanged:i}){const[o]=t.T();return e.jsx(t.Card,{style:{cursor:"pointer"},onClick:()=>{i(s)},children:e.jsxs(t.Stack,{direction:"horizontal",gap:3,children:[e.jsx(t.IconClickButton,{image:n,size:"2em",style:{margin:"0.5em"}}),e.jsx(t.Typography,{children:o(s)})]})},s)}function L({onSelected:n,onClose:s}){const[i]=t.T(),o=w.ToArray(),[a,r]=u.useState(o[0]);return e.jsxs(t.Modal,{size:"lg",closeEnabled:!0,onHide:s,header:e.jsx(t.ModalTitle,{children:i("create.question")}),children:[e.jsxs(t.Row,{style:{padding:"1em"},children:[e.jsx(t.Col,{xs:3,children:e.jsx(t.Card,{children:e.jsx(t.CardContent,{children:e.jsx(t.ButtonGroup,{orientation:"vertical","aria-label":"vertical contained button group",variant:"text",children:o.map(c=>e.jsx(t.Button,{label:`question.${c}`,onClick:()=>r(c)},c))})})})}),e.jsx(t.Col,{children:e.jsxs(t.Card,{children:[e.jsx(t.CardMedia,{sx:{height:140},image:h.ConvertFilePath(h.GetPlatformPath("/Images/Question.Text.png"))}),e.jsx(t.CardContent,{children:e.jsx(t.Typography,{})})]})})]}),e.jsx("div",{children:e.jsx(t.Button,{label:"select",onClick:()=>{n(a),s()}})})]})}function O({exam:n,onRefresh:s}){const[i,o]=u.useState([]);function a(){o([...n.questions])}return u.useEffect(a,[]),e.jsx("div",{className:"vstack gap-3",children:e.jsxs(t.Card,{style:{backgroundColor:t.Colors.WhiteMiddle},children:[e.jsx(t.CardContent,{children:e.jsx("div",{className:"vstack gap-2",children:i.map((r,c)=>e.jsx(W,{onFullRefresh:()=>{a(),s()},question:r,index:c},r.uid))})}),e.jsx(t.CardActions,{children:e.jsx($,{exam:n,onRefresh:()=>{a(),s()}})})]})})}function W({question:n,onFullRefresh:s,index:i}){return e.jsx(t.PaperBox,{children:e.jsxs("div",{className:"hstack gap-1",style:{margin:"0.25em"},children:[e.jsxs("b",{children:[i+1,"."]}),e.jsx(t.Typography,{children:n.header}),e.jsx("div",{className:"hstack gap-1",style:{marginLeft:"auto"},children:e.jsx(y,{index:i,question:n,onFullRefresh:s})})]})})}function $({exam:n,onRefresh:s}){const i=n,o=v();function a(){o.pushElement(e.jsx(L,{onClose:o.popElement,onSelected:r=>{i.CreateQuestionOfType(r),s()}}))}return e.jsxs(e.Fragment,{children:[e.jsx(t.Button,{label:"add",onClick:a}),e.jsx(H,{})]})}function H(){return e.jsx(t.Button,{label:"print"})}function J({asset:n}){return e.jsx(e.Fragment,{children:"Files"})}function Z({question:n,index:s}){return e.jsx(t.Card,{style:{backgroundColor:t.Colors.WhiteMiddle},children:e.jsx(t.CardContent,{children:e.jsxs(t.Stack,{gap:3,children:[e.jsx(t.Card,{children:e.jsxs(t.Stack,{gap:3,direction:"horizontal",style:{padding:"0.5em"},children:[s+1,"."]})}),n.answers.map((i,o)=>e.jsx("div",{className:"hstack gap-3",children:e.jsxs(t.Card,{style:{padding:"0.35em"},children:[o+1,"."]})},i.uid))]})})})}function K({asset:n}){const s=n.data;return e.jsx(t.Stack,{gap:3,children:s.questions.map((i,o)=>e.jsx(Z,{question:i,index:o},i.uid))})}function ae({}){const n=F();return n?e.jsx(B,{style:{padding:"0em",paddingTop:"3em"},children:e.jsx(X,{asset:n})}):e.jsx(t.MiddleSpinner,{})}function X({asset:n}){const[s]=t.T(),[i,o]=u.useState("0");return e.jsxs("div",{className:"vstack gap-3",children:[e.jsx(t.Card,{children:e.jsxs(t.Tabs,{value:i,onChange:(a,r)=>{o(r)},centered:!0,children:[e.jsx(t.Tab,{value:"0",label:s("edit")}),e.jsx(t.Tab,{value:"1",label:s("preview")}),e.jsx(t.Tab,{value:"files",label:s("files")})]})}),e.jsxs(t.Switch,{condition:i,children:[e.jsx(t.Case,{value:"0",children:e.jsx(Y,{asset:n})}),e.jsx(t.Case,{value:"1",children:e.jsx(K,{asset:n})}),e.jsx(t.Case,{value:"files",children:e.jsx(J,{asset:n})})]})]})}function Y({asset:n}){const[s,i]=u.useState([n.data]);function o(){i([n.data])}return crypto.randomUUID(),e.jsx(t.Stack,{gap:3,children:e.jsxs(t.Row,{children:[e.jsx(t.Col,{xs:3,children:e.jsxs(t.Stack,{gap:3,children:[e.jsx(q,{asset:n}),e.jsx(O,{exam:s[0],onRefresh:o})]})}),e.jsx(t.Col,{children:e.jsx("div",{className:"vstack gap-3",children:s[0].questions.map((a,r)=>e.jsx(N,{exam:s[0],index:r,question:a,onRefresh:o},a.uid))})})]})})}function q({asset:n}){const s=M(),i=n.data;async function o(){s.lock(),await z.UploadAssetData(n.parent_project_uid,n.uid,i.ToJson()),s.unlock()}return e.jsxs(t.Card,{style:{backgroundColor:t.Colors.WhiteMiddle},children:[e.jsx(t.CardMedia,{sx:{height:120},image:h.ConvertFilePathRnd(n.GetPreviewPath())}),e.jsx(t.CardContent,{children:e.jsx(t.Typography,{children:n.name})}),e.jsxs(t.CardActions,{children:[e.jsx(t.Button,{onClick:o,label:"save"}),e.jsx(t.Button,{label:"snapshot"}),e.jsx(t.Button,{label:"rename"})]})]})}export{ae as default};
