import{g as h,r as i,h as m,o as n,c as l,t as B,i as y,a as C,m as S,j as R,b as o,k as E,T as I,n as w,u as p,l as N,p as D}from"./index.4fb45a9c.js";const _=["for"],j=["name","id","value"],q={key:1,class:"input-tools d-f-center"},A={class:"btn btn--icon input-copy",title:"copy"},T={inheritAttrs:!1},x=Object.assign(T,{__name:"BaseInput",props:{label:{type:[String,Boolean]},isRequired:{type:Boolean,default:!1},containerClass:{type:String,default:""},id:{type:String,default:""},modelValue:{type:String,default:""},canEdit:{type:Boolean,default:!1},isReadonly:{type:Boolean,default:!1}},setup(e){const t=e,v=h();let u=i(!1);const c=i(null);t.isRequired&&m(()=>t.modelValue,a=>{a.length<1?u.value=!0:u.value=!1});let d=i(!1);t.canEdit&&m(()=>t.modelValue,(a,s)=>{a!==s&&(d.value=!0)});let r=i(t.isReadonly);const b=()=>{r.value=!1,c.value.focus()},g=()=>{c.value.blur(),r.value=!0,d.value=!1,v.success("\u2714\uFE0F")};return(a,s)=>{const f=N("Icon"),k=D("copy");return n(),l("div",{class:w(["input-container",[{"input-container--error":p(u)},{"input-container--disable":e.isReadonly},{"input-container--editing":!p(r)},e.containerClass]])},[e.label?(n(),l("label",{key:0,for:e.id,class:"label-base"},B(e.label),9,_)):y("",!0),C("input",S({ref_key:"input",ref:c,class:"input-base",name:e.id,id:e.id,value:e.modelValue,onInput:s[0]||(s[0]=V=>a.$emit("update:modelValue",V.target.value))},a.$attrs),null,16,j),e.canEdit?(n(),l("div",q,[R((n(),l("button",A,[o(f,{id:"copy"})])),[[k,t.modelValue]]),o(I,{name:"fadeX"},{default:E(()=>[p(d)?(n(),l("button",{key:0,class:"btn btn--icon input-save",onClick:g,title:"save"},[o(f,{id:"done"})])):(n(),l("button",{key:1,class:"btn btn--icon input-edit",onClick:b,title:"edit"},[o(f,{id:"pen"})]))]),_:1})])):y("",!0)],2)}}});export{x as _};
