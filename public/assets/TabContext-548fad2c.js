import{N as t,j as u}from"./index-bbd1ebcb.js";const c=t.createContext(null);function i(){const[e,n]=t.useState(null);return t.useEffect(()=>{n(`mui-p-${Math.round(Math.random()*1e5)}`)},[]),e}function x(e){const{children:n,value:r}=e,o=i(),s=t.useMemo(()=>({idPrefix:o,value:r}),[o,r]);return u.jsx(c.Provider,{value:s,children:n})}export{x as T};