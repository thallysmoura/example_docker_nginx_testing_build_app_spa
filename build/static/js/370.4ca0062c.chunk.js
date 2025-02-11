"use strict";(self.webpackChunkapp_cc=self.webpackChunkapp_cc||[]).push([[370],{2967:(e,s,l)=>{l.d(s,{Z:()=>i,h:()=>o});var t=l(4569),a=l.n(t);const n="https://appcc-api.apps.ham.org.br",r=a().create({baseURL:`${n}`,headers:{"Content-Type":"application/json"}}),o=a().create({baseURL:`${n}`,headers:{"Content-Type":"application/json"}}),i=r},9757:(e,s,l)=>{l.d(s,{Z:()=>a});l(2791);var t=l(184);const a=e=>{let{titulo:s,children:l,localidade:a}=e;return(0,t.jsxs)("header",{children:[(0,t.jsxs)("p",{children:[(0,t.jsxs)("strong",{children:[s," |"]})," ",a]}),(0,t.jsx)("div",{className:"options",children:l})]})}},2208:(e,s,l)=>{l.d(s,{ZP:()=>c});var t=l(2791),a=l(1694),n=l.n(a),r=(l(3504),l(7097),l(4455)),o=l(184);const i=e=>{let{children:s,className:l,color:a,isDismissible:i,isOutline:c,isLight:d,shadow:u,icon:O,rounded:D,borderWidth:C,...A}=e;const[I,m]=(0,t.useState)(!0);return I?(0,o.jsxs)("div",{className:n()("alert",{[`alert-${a}`]:a&&!(d||c),"alert-dismissible":i,fade:i,show:i,[`alert-light-${a}`]:d,[`alert-outline-${a}`]:c,["shadow"+("md"!==u?`-${u}`:"")]:!!u&&"3d"!==u,[`border-${C}`]:C||0===C,["rounded"+("default"!==D?`-${D}`:"")]:D||0===D,[`shadow-3d-${a}`]:"3d"===u},l),...A,role:"alert",children:[O?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:"alert-icon",children:(0,o.jsx)(r.Z,{icon:O})}),(0,o.jsx)("div",{className:"alert-text",children:s})]}):s,i&&(0,o.jsx)("button",{type:"button",className:"btn-close","aria-label":"Close",onClick:()=>m(!1)})]}):null};i.defaultProps={borderWidth:null,className:null,color:"primary",icon:null,isDismissible:!1,isLight:!1,isOutline:!1,shadow:null,rounded:null};const c=i},1477:(e,s,l)=>{l.d(s,{fe:()=>C,mz:()=>A,xB:()=>D,r6:()=>O,ZP:()=>m});var t=l(2791),a=l(1694),n=l.n(a),r=l(1856),o=l(68),i=l(7528),c=l(7097);function d(e,s){let l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:window;const a=(0,t.useRef)();(0,t.useEffect)((()=>{a.current=s}),[s]),(0,t.useEffect)((()=>{if(!(l&&l.addEventListener))return;const s=e=>a.current(e);return l.addEventListener(e,s),()=>{l.removeEventListener(e,s)}}),[e,l])}var u=l(184);const O=(0,t.forwardRef)(((e,s)=>{let{tag:l,id:t,children:a,className:r,...o}=e;return(0,u.jsx)(c.Z,{tag:l,ref:s,id:t,className:n()("modal-title",r),...o,children:a})}));O.defaultProps={className:null,tag:"h5"};const D=(0,t.forwardRef)(((e,s)=>{let{children:l,className:t,setIsOpen:a,...r}=e;return(0,u.jsxs)("div",{ref:s,className:n()("modal-header",t),...r,children:[l,a&&(0,u.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close",onClick:()=>a(!1)})]})}));D.defaultProps={className:null,setIsOpen:null};const C=(0,t.forwardRef)(((e,s)=>{let{children:l,className:t,...a}=e;return(0,u.jsx)("div",{ref:s,className:n()("modal-body",t),...a,children:l})}));C.defaultProps={className:null};const A=(0,t.forwardRef)(((e,s)=>{let{children:l,className:t,...a}=e;return(0,u.jsx)("div",{ref:s,className:n()("modal-footer",t),...a,children:l})}));A.defaultProps={className:null};const I=e=>{let{children:s,isOpen:l,setIsOpen:a,id:c,titleId:O,isStaticBackdrop:D,isScrollable:C,isCentered:A,size:I,fullScreen:m,isAnimation:L,...p}=e;const h=(0,t.useRef)(null),f=(0,t.useRef)(null);(0,t.useLayoutEffect)((()=>(l&&document.body.classList.add("modal-open"),()=>{document.body.classList.remove("modal-open")})));const x=e=>{!f.current||f.current.contains(e.target)||D||a(!1)};d("mousedown",x),d("touchstart",x);const E=e=>{f.current&&!f.current.contains(e.target)&&D&&(h.current.classList.add("modal-static"),setTimeout((()=>h.current.classList.remove("modal-static")),300))};d("mousedown",E),d("touchstart",E);d("keydown",(e=>{"Escape"===e.key&&a(!1)}));const g=L?{initial:{opacity:0,y:"-50%"},animate:{opacity:1,x:"0%",y:"0%"},exit:{opacity:0,y:"-50%"},transition:{ease:"easeInOut",duration:.3}}:null;return(0,u.jsx)(i.Z,{children:(0,u.jsx)(r.M,{exitBeforeEnter:!0,children:l&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(o.E.div,{ref:h,className:n()("modal",{fade:L},"show"),role:"dialog",style:{display:"block"},id:c,tabIndex:"-1","aria-labelledby":O,"aria-hidden":"true","data-bs-backdrop":D?"static":null,"data-bs-keyboard":D?"false":null,...g,...p,children:(0,u.jsx)("div",{ref:f,className:n()("modal-dialog",{"modal-dialog-scrollable":C,"modal-dialog-centered":A,[`modal-${I}`]:I,["modal-fullscreen"+("string"===typeof m?`-${m}-down`:"")]:m}),children:(0,u.jsx)("div",{className:"modal-content",children:s})})},"modal"),(0,u.jsx)("div",{className:n()("modal-backdrop",{fade:L},"show")})]})})})};I.defaultProps={id:null,titleId:null,isStaticBackdrop:!1,isScrollable:!1,isCentered:!1,size:null,fullScreen:!1,isAnimation:!0};const m=I},1370:(e,s,l)=>{l.r(s),l.d(s,{default:()=>w});var t=l(2791),a=l(1006),n=l(840),r=l(1649),o=l(9757),i=l(6871);const c=()=>{const e=(0,i.s0)();(0,t.useEffect)((()=>{if(localStorage.getItem("CAPP-local")){const s=JSON.parse(localStorage.getItem("CAPP-local"));1===s.CODIGO_LOCALIDADE&&e("/salaPreparo/listagem",{state:{CODIGO_LOCALIDADE:1,CODIGO_SUBLOCALIDADE:s.CODIGO_SUBLOCALIDADE}}),2===s.CODIGO_LOCALIDADE&&e("/portaria/listagem",{state:{CODIGO_LOCALIDADE:2,CODIGO_SUBLOCALIDADE:s.CODIGO_SUBLOCALIDADE}}),3===s.CODIGO_LOCALIDADE&&e("/inducao/listagem",{state:{CODIGO_LOCALIDADE:3,CODIGO_SUBLOCALIDADE:s.CODIGO_SUBLOCALIDADE}}),4===s.CODIGO_LOCALIDADE&&e("/salaCirurgica/preparoLimpeza",{state:{CODIGO_LOCALIDADE:4,CODIGO_SUBLOCALIDADE:s.CODIGO_SUBLOCALIDADE}}),5===s.CODIGO_LOCALIDADE&&e("/rpa/listagem",{state:{CODIGO_LOCALIDADE:5,CODIGO_SUBLOCALIDADE:s.CODIGO_SUBLOCALIDADE}})}}),[e])};var d=l(1694),u=l.n(d),O=l(4455),D=l(7097),C=l(8328),A=l(2007),I=l.n(A);I().oneOfType([I().func,I().string,I().shape({$$typeof:I().symbol,render:I().func}),I().arrayOf(I().oneOfType([I().func,I().string,I().shape({$$typeof:I().symbol,render:I().func})]))]);const m=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],L="entering",p="entered",h="exiting",f="exited";var x=l(184);const E={[L]:"collapsing",[p]:"collapse show",[h]:"collapsing",[f]:"collapse"},g=e=>e.scrollHeight,b=e=>{let{tag:s,isOpen:l,className:a,isNavbar:n,children:r,isChildClone:o,...i}=e;const c=(0,t.useRef)(null),d=c.current,[O,D]=(0,t.useState)(null),A=((e,s)=>{const l=Array.isArray(s)?s:[s];let t,{length:a}=l;const n={};for(;a>0;)a-=1,t=l[a],n[t]=e[t];return n})(i,m),I=((e,s)=>{const l={};return Object.keys(e).forEach((t=>{-1===s.indexOf(t)&&(l[t]=e[t])})),l})(i,m);return(0,x.jsx)(C.ZP,{nodeRef:c,...A,in:l,onEntering:e=>{D(g(d)),i.onEntering(d,e)},onEntered:e=>{D(null),i.onEntered(d,e)},onExit:()=>{D(g(d)),i.onExit(d)},onExiting:()=>{d.offsetHeight;D(0),i.onExiting(d)},onExited:()=>{D(null),i.onExited(d)},children:e=>{const l=(e=>E[e]||"collapse")(e),i=u()(a,l,n&&"navbar-collapse"),d=null===O?null:{height:O};return o?(0,t.cloneElement)(r,{ref:c,style:{...I.style,...d},className:u()(i,r.props.className),...I}):(0,x.jsx)(s,{...I,style:{...I.style,...d},className:i,ref:c,children:r})}})};b.defaultProps={...C.ZP.defaultProps,isOpen:!1,appear:!1,enter:!0,exit:!0,tag:"div",timeout:350,isChildClone:!1,isNavbar:!1};const j=b,y=(0,t.forwardRef)(((e,s)=>{let{id:l,icon:t,title:a,children:n,tag:r,headerTag:o,overWriteColor:i,...c}=e;const d=c.activeItem===l;return(0,x.jsxs)(D.Z,{tag:r,ref:s,className:u()("accordion-item"),children:[(0,x.jsx)(D.Z,{tag:o,className:u()("accordion-header"),id:l,children:(0,x.jsxs)("button",{className:u()("accordion-button",{collapsed:!d,[`accordion-button-${i}`]:i}),type:"button","data-bs-toggle":"collapse","data-bs-target":`#${l}Collapse`,"aria-expanded":d,"aria-controls":`${l}Collapse`,onClick:()=>d?c.setActiveItem(null):c.setActiveItem(l),children:[t&&(0,x.jsx)(O.Z,{icon:t,className:"accordion-icon"}),a]})}),(0,x.jsx)(j,{isOpen:d,id:`${l}Collapse`,className:u()("accordion-collapse"),"aria-labelledby":l,"data-bs-parent":`#${c.parentId}`,children:(0,x.jsx)("div",{className:u()("accordion-body"),children:n})})]})}));y.defaultProps={parentId:null,icon:null,tag:"div",headerTag:"h2",overWriteColor:null},y.displayName="AccordionItem";const _=(0,t.forwardRef)(((e,s)=>{let{tag:l,id:a,activeItemId:n,children:r,shadow:o,color:i,isFlush:c,className:d}=e;const[O,C]=(0,t.useState)(!1===n?null:n||r.flat()[0].props.id);return(0,x.jsx)(D.Z,{tag:l,ref:s,className:u()("accordion",{"accordion-flush":c,"shadow-none":c,["shadow"+("default"!==o?`-${o}`:"")]:!!o},d),id:a,children:t.Children.map(r,(e=>{var s;return["AccordionItem"].includes(e.type.displayName)?(0,t.cloneElement)(e,{activeItem:O,setActiveItem:C,parentId:a,overWriteColor:(null===e||void 0===e||null===(s=e.props)||void 0===s?void 0:s.overWriteColor)||i}):(0,x.jsx)("code",{className:"d-block",children:"Only AccordionItem component should be used as a child."})}))})}));_.defaultProps={activeItemId:null,isFlush:!1,className:null,tag:"div",shadow:"default",color:"primary"};const v=_;var S=l(1477),N=l(2208),G=l(5409),U=l(2967);const B=()=>{const e={Header:{color:"#fff",backgroundColor:"#867AD5"},Body:{fontSize:"20px"},btn_style:{borderRadius:"100px !important",fontSize:"4px !important"}},s=(0,i.s0)(),[l,a]=(0,t.useState)([]),[n,r]=(0,t.useState)(!1),[o,c]=(0,t.useState)({CODIGO_LOCALIDADE:null,CODIGO_SUBLOCALIDADE:null,LOCALIDADE:null,SUBLOCALIDADE:null});return(0,t.useEffect)((()=>{(async()=>{try{const e=await U.Z.get("/listarLocalidades");e&&a((s=>[...s,e.data]))}catch(e){console.log(e)}})()}),[]),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(v,{id:"listagem-opcoes",activeItemId:"false",color:"primary",children:l.length?l[0].map((e=>(0,x.jsx)(y,{icon:e.ICON_NAME,id:e.CD_LOCALIDADE,title:e.DS_LOCALIDADE,children:e.SUB_LOCALIDADE.map((s=>(0,x.jsx)(N.ZP,{style:{cursor:"pointer"},onClick:()=>{return l=e.CD_LOCALIDADE,t=s.CD_ITEM,a=e.DS_LOCALIDADE,n=s.ITEM,o=s.CODIGO_SALA_CIRURGICA,r(!0),void c({CODIGO_LOCALIDADE:l,CODIGO_SUBLOCALIDADE:t,LOCALIDADE:a,SUBLOCALIDADE:n,CODIGO_SALA_CIRURGICA:o});var l,t,a,n,o},children:s.ITEM})))}))):(0,x.jsx)(y,{disabled:!0,id:"vazio",title:"Carregando..."})}),(0,x.jsxs)(S.ZP,{isCentered:!0,isAnimation:!1,isOpen:n,children:[(0,x.jsx)(S.xB,{style:e.Header,children:(0,x.jsx)(S.r6,{id:"example-title",children:"Confirma Localiza\xe7\xe3o"})}),(0,x.jsx)(S.fe,{style:e.Body,children:(0,x.jsxs)("p",{children:["Voc\xea confirma que est\xe1 na localidade:",(0,x.jsxs)("strong",{children:[" ",o.SUBLOCALIDADE," (",o.LOCALIDADE,")"]})]})}),(0,x.jsx)(S.mz,{children:(0,x.jsxs)(G.h,{isToolbar:"true",size:"lg",children:[(0,x.jsx)(G.Z,{style:e.btn_style,size:"lg",color:"success",onClick:()=>{localStorage.setItem("CAPP-local",JSON.stringify({CODIGO_LOCALIDADE:o.CODIGO_LOCALIDADE,CODIGO_SUBLOCALIDADE:o.CODIGO_SUBLOCALIDADE,LOCALIDADE:o.LOCALIDADE,SUBLOCALIDADE:o.SUBLOCALIDADE,CODIGO_SALA_CIRURGICA:o.CODIGO_SALA_CIRURGICA})),s("/rota",{state:{CODIGO_LOCALIDADE:o.CODIGO_LOCALIDADE,CODIGO_SUBLOCALIDADE:o.CODIGO_SUBLOCALIDADE,LOCALIDADE:o.LOCALIDADE,SUBLOCALIDADE:o.SUBLOCALIDADE,CODIGO_SALA_CIRURGICA:o.CODIGO_SALA_CIRURGICA}})},children:"SIM"}),(0,x.jsx)(G.Z,{style:e.btn_style,size:"lg",color:"danger",onClick:()=>{r(!1)},children:"N\xc3O"})]})})]})]})},w=()=>(0,x.jsxs)(a.Z,{title:r.Q.localChoice.text,children:[(0,x.jsx)(c,{}),(0,x.jsx)(o.Z,{titulo:"App CC ",localidade:"Configura\xe7\xe3o de Localidade",children:(0,x.jsx)("span",{children:" "})}),(0,x.jsx)(n.Z,{children:(0,x.jsxs)("div",{style:{marginTop:"20px"},children:[(0,x.jsxs)("p",{className:"text-center fs-2",children:["Selecione qual ",(0,x.jsx)("strong",{children:"localidade"})," o Tablet ficar\xe1"]}),(0,x.jsx)("br",{}),(0,x.jsx)(B,{})]})})]})}}]);
//# sourceMappingURL=370.4ca0062c.chunk.js.map