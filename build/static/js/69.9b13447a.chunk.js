"use strict";(self.webpackChunkapp_cc=self.webpackChunkapp_cc||[]).push([[69],{2967:(e,l,a)=>{a.d(l,{Z:()=>o,h:()=>i});var s=a(4569),n=a.n(s);const r="https://appcc-api.apps.ham.org.br",t=n().create({baseURL:`${r}`,headers:{"Content-Type":"application/json"}}),i=n().create({baseURL:`${r}`,headers:{"Content-Type":"application/json"}}),o=t},9757:(e,l,a)=>{a.d(l,{Z:()=>n});a(2791);var s=a(184);const n=e=>{let{titulo:l,children:a,localidade:n}=e;return(0,s.jsxs)("header",{children:[(0,s.jsxs)("p",{children:[(0,s.jsxs)("strong",{children:[l," |"]})," ",n]}),(0,s.jsx)("div",{className:"options",children:a})]})}},5808:(e,l,a)=>{a.d(l,{Z:()=>t});a(2791);var s=a(5409);const n="style_btn_vk__TX3nv";var r=a(184);const t=e=>{let{childToParent:l}=e;return(0,r.jsx)("div",{children:(0,r.jsx)("table",{children:(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(s.Z,{className:n,color:"dark",onClick:()=>l("1"),children:"\xa01"})}),(0,r.jsx)("td",{children:(0,r.jsx)(s.Z,{className:n,color:"dark",onClick:()=>l("2"),children:"2"})}),(0,r.jsx)("td",{children:(0,r.jsx)(s.Z,{className:n,color:"dark",onClick:()=>l("3"),children:"3"})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(s.Z,{className:n,color:"dark",onClick:()=>l("4"),children:"4"})}),(0,r.jsx)("td",{children:(0,r.jsx)(s.Z,{className:n,color:"dark",onClick:()=>l("5"),children:"5"})}),(0,r.jsx)("td",{children:(0,r.jsx)(s.Z,{className:n,color:"dark",onClick:()=>l("6"),children:"6"})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(s.Z,{className:n,color:"dark",onClick:()=>l("7"),children:"7"})}),(0,r.jsx)("td",{children:(0,r.jsx)(s.Z,{className:n,color:"dark",onClick:()=>l("8"),children:"8"})}),(0,r.jsx)("td",{children:(0,r.jsx)(s.Z,{className:n,color:"dark",onClick:()=>l("9"),children:"9"})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(s.Z,{className:n,color:"danger",onClick:()=>l("zerar"),children:"X"})}),(0,r.jsx)("td",{children:(0,r.jsx)(s.Z,{className:n,color:"dark",onClick:()=>l("0"),children:"0"})}),(0,r.jsx)("td",{children:(0,r.jsx)(s.Z,{className:n,color:"brand",onClick:()=>l("apagar"),children:"<"})})]})]})})})}},9775:(e,l,a)=>{a.d(l,{ZP:()=>f,Z_:()=>p,hP:()=>x,h_:()=>h});var s=a(2791),n=a(3229),r=a(2835),t=a(1828),i=a(1694),o=a.n(i),d=a(1245),c=a(6457),u=a(184);const p=e=>{let{children:l,isOpen:a,setIsOpen:r,hasIcon:t}=e;const i=(0,s.useRef)(null),d=(0,s.useCallback)(((e,l)=>(i.current=e,l(e))),[]);return(0,u.jsx)(n.s,{children:e=>{var n;let{ref:i}=e;return s.cloneElement(l.props.isButtonGroup?(0,u.jsx)("span",{className:"visually-hidden",children:"Toggle Dropdown"}):l,{ref:e=>d(e,i),onClick:()=>{var e;null!==l&&void 0!==l&&null!==(e=l.props)&&void 0!==e&&e.onClick&&l.props.onClick(),r(!a)},className:o()({"dropdown-toggle":t,"dropdown-toggle-split":l.props.isButtonGroup,show:a},null===l||void 0===l||null===(n=l.props)||void 0===n?void 0:n.className),"aria-expanded":a})}})};p.defaultProps={isOpen:!1,setIsOpen:null,hasIcon:!0},p.displayName="DropdownToggle";const h=e=>{let{isOpen:l,setIsOpen:a,children:n,className:t,isAlignmentEnd:i,breakpoint:d,size:p,direction:h,isCloseAfterLeave:m,...x}=e;const j=(0,s.useRef)(null),f=(0,s.useCallback)(((e,l)=>(j.current=e,l(e))),[]),v=("up"===h?"top":"end"===h&&"right")||"start"===h&&"left"||"bottom",b=i?"end":"start",{darkModeStatus:g}=(0,c.Z)();return l?(0,u.jsx)(r.r,{placement:d?"bottom-start":`${v}-${b}`,modifiers:[{name:"flip",options:{fallbackPlacements:[`top-${b}`,`bottom-${b}`]}}],children:e=>{let{ref:l,style:s,placement:r}=e;return(0,u.jsx)("ul",{role:"presentation",ref:e=>f(e,l),style:d?null:s,"data-placement":r,className:o()("dropdown-menu","show",{"dropdown-menu-dark":g},{[`dropdown-menu-${p}`]:p,"dropdown-menu-end":!i&&d,[`dropdown-menu${d?`-${d}`:""}-${i?"end":"start"}`]:i||d},t),"data-bs-popper":d?"static":null,onMouseLeave:m?()=>a(!1):null,...x,children:n})}}):null};h.defaultProps={isOpen:!1,setIsOpen:null,className:null,isAlignmentEnd:!1,breakpoint:null,size:null,direction:null,isCloseAfterLeave:!0},h.displayName="DropdownMenu";const m=(0,s.forwardRef)(((e,l)=>{let{children:a,className:s,...n}=e;return(0,u.jsx)("li",{ref:l,className:o()("dropdown-item-wrapper",s),...n,children:a})}));m.defaultProps={className:null};const x=(0,s.forwardRef)(((e,l)=>{var a;let{children:n,isHeader:r,isDivider:t,isText:i,...d}=e;var c,p,h;return r?(0,u.jsx)(m,{ref:l,...d,children:(0,s.cloneElement)("string"===typeof n?(0,u.jsx)("h6",{children:n}):n,{className:o()("dropdown-header",null===n||void 0===n||null===(c=n.props)||void 0===c?void 0:c.className)})}):t?(0,u.jsx)(m,{ref:l,...d,children:(0,u.jsx)("hr",{className:o()("dropdown-divider",null===n||void 0===n||null===(p=n.props)||void 0===p?void 0:p.className)})}):i?(0,u.jsx)(m,{ref:l,...d,children:(0,s.cloneElement)("string"===typeof n?(0,u.jsx)("div",{children:n}):n,{className:o()("dropdown-item-text","dropdown-item","disabled",null===n||void 0===n||null===(h=n.props)||void 0===h?void 0:h.className)})}):(0,u.jsx)(m,{ref:l,...d,children:(0,s.cloneElement)("string"===typeof n?(0,u.jsx)("span",{children:n}):n,{className:o()("dropdown-item",null===n||void 0===n||null===(a=n.props)||void 0===a?void 0:a.className)})})}));x.defaultProps={children:null,isHeader:!1,isDivider:!1,isText:!1};const j=e=>{let{tag:l,children:a,isOpen:n,setIsOpen:r,direction:i,isButtonGroup:c,className:p}=e;const[h,m]=(0,s.useState)(!(null===n||!r)&&n),x=(0,s.useRef)(null),j=(0,s.useCallback)((()=>{null!==n&&r?r(!1):m(!1)}),[n,r]);return(0,d.Z)(x,"mousedown",j),(0,d.Z)(x,"touchstart",j),(0,u.jsx)(t.dK,{children:(0,u.jsx)(l,{ref:x,className:o()({[`drop${i}`]:i&&!c,"btn-group":c},p),children:a.map(((e,l)=>["DropdownMenu","DropdownToggle"].includes(e.type.displayName)?s.cloneElement(e,{isOpen:null!==n&&r?n:h,setIsOpen:null!==n&&r?r:m,direction:i,key:l}):e))})})};j.defaultProps={tag:"div",isOpen:null,setIsOpen:null,className:null,direction:"down",isButtonGroup:!1},j.displayName="Dropdown";const f=j},1477:(e,l,a)=>{a.d(l,{fe:()=>m,mz:()=>x,xB:()=>h,r6:()=>p,ZP:()=>f});var s=a(2791),n=a(1694),r=a.n(n),t=a(1856),i=a(68),o=a(7528),d=a(7097);function c(e,l){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:window;const n=(0,s.useRef)();(0,s.useEffect)((()=>{n.current=l}),[l]),(0,s.useEffect)((()=>{if(!(a&&a.addEventListener))return;const l=e=>n.current(e);return a.addEventListener(e,l),()=>{a.removeEventListener(e,l)}}),[e,a])}var u=a(184);const p=(0,s.forwardRef)(((e,l)=>{let{tag:a,id:s,children:n,className:t,...i}=e;return(0,u.jsx)(d.Z,{tag:a,ref:l,id:s,className:r()("modal-title",t),...i,children:n})}));p.defaultProps={className:null,tag:"h5"};const h=(0,s.forwardRef)(((e,l)=>{let{children:a,className:s,setIsOpen:n,...t}=e;return(0,u.jsxs)("div",{ref:l,className:r()("modal-header",s),...t,children:[a,n&&(0,u.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close",onClick:()=>n(!1)})]})}));h.defaultProps={className:null,setIsOpen:null};const m=(0,s.forwardRef)(((e,l)=>{let{children:a,className:s,...n}=e;return(0,u.jsx)("div",{ref:l,className:r()("modal-body",s),...n,children:a})}));m.defaultProps={className:null};const x=(0,s.forwardRef)(((e,l)=>{let{children:a,className:s,...n}=e;return(0,u.jsx)("div",{ref:l,className:r()("modal-footer",s),...n,children:a})}));x.defaultProps={className:null};const j=e=>{let{children:l,isOpen:a,setIsOpen:n,id:d,titleId:p,isStaticBackdrop:h,isScrollable:m,isCentered:x,size:j,fullScreen:f,isAnimation:v,...b}=e;const g=(0,s.useRef)(null),_=(0,s.useRef)(null);(0,s.useLayoutEffect)((()=>(a&&document.body.classList.add("modal-open"),()=>{document.body.classList.remove("modal-open")})));const N=e=>{!_.current||_.current.contains(e.target)||h||n(!1)};c("mousedown",N),c("touchstart",N);const y=e=>{_.current&&!_.current.contains(e.target)&&h&&(g.current.classList.add("modal-static"),setTimeout((()=>g.current.classList.remove("modal-static")),300))};c("mousedown",y),c("touchstart",y);c("keydown",(e=>{"Escape"===e.key&&n(!1)}));const k=v?{initial:{opacity:0,y:"-50%"},animate:{opacity:1,x:"0%",y:"0%"},exit:{opacity:0,y:"-50%"},transition:{ease:"easeInOut",duration:.3}}:null;return(0,u.jsx)(o.Z,{children:(0,u.jsx)(t.M,{exitBeforeEnter:!0,children:a&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i.E.div,{ref:g,className:r()("modal",{fade:v},"show"),role:"dialog",style:{display:"block"},id:d,tabIndex:"-1","aria-labelledby":p,"aria-hidden":"true","data-bs-backdrop":h?"static":null,"data-bs-keyboard":h?"false":null,...k,...b,children:(0,u.jsx)("div",{ref:_,className:r()("modal-dialog",{"modal-dialog-scrollable":m,"modal-dialog-centered":x,[`modal-${j}`]:j,["modal-fullscreen"+("string"===typeof f?`-${f}-down`:"")]:f}),children:(0,u.jsx)("div",{className:"modal-content",children:l})})},"modal"),(0,u.jsx)("div",{className:r()("modal-backdrop",{fade:v},"show")})]})})})};j.defaultProps={id:null,titleId:null,isStaticBackdrop:!1,isScrollable:!1,isCentered:!1,size:null,fullScreen:!1,isAnimation:!0};const f=j},7485:(e,l,a)=>{a.d(l,{Z:()=>m});var s=a(2791),n=a(948),r=a(8313),t=a.n(r),i=a(1694),o=a.n(i),d=a(7528),c=a(184);const u=e=>{let{isTouched:l,invalidFeedback:a,validFeedback:n,isTooltip:r}=e;const t=(0,s.useRef)(null);return(0,s.useEffect)((()=>{if(r)for(let n=0;n<(null===t||void 0===t||null===(e=t.current)||void 0===e?void 0:e.parentNode.classList.length);n+=1){var e,l,a,s;if(["input-group"].includes(null===t||void 0===t||null===(l=t.current)||void 0===l?void 0:l.parentNode.classList[n]))null===t||void 0===t||null===(a=t.current)||void 0===a||a.parentNode.parentNode.classList.add("position-relative");else null===t||void 0===t||null===(s=t.current)||void 0===s||s.parentNode.classList.add("position-relative")}})),l&&a?(0,c.jsx)("div",{ref:t,className:o()({"invalid-feedback":!r,"invalid-tooltip":r}),children:a}):!a&&n&&(0,c.jsx)("div",{ref:t,className:o()({"valid-feedback":!r,"valid-tooltip":r}),children:n})};u.defaultProps={isTouched:!1,invalidFeedback:null,validFeedback:null,isTooltip:!1};const p=u,h=(0,s.forwardRef)(((e,l)=>{let{type:a,id:s,name:r,className:i,required:u,placeholder:h,autoComplete:m,ariaDescribedby:x,ariaLabelledby:j,ariaLabel:f,list:v,title:b,size:g,disabled:_,readOnly:N,multiple:y,value:k,min:C,max:A,step:w,isValid:O,isTouched:Z,invalidFeedback:I,validFeedback:S,isValidMessage:P,isTooltipFeedback:E,onBlur:T,onChange:D,onFocus:F,onInput:B,onInvalid:L,onSelect:R,component:$,mask:z,format:V,...M}=e;const U={id:s,name:null===r?s:r,type:v?null:a,className:o()({"form-control":"plaintext"!==N&&"range"!==a,"form-range":"range"===a,"form-control-plaintext":"plaintext"===N,"form-control-color":"color"===a,[`form-control-${g}`]:g,"is-invalid":!O&&Z&&I,"is-valid":!O&&Z&&!I},i),required:u,placeholder:h,title:b,list:v?`${s}-list`:null,disabled:_,readOnly:!!N,multiple:y,autoComplete:m,"aria-describedby":x,"aria-label":f,"aria-labelledby":j,value:k,min:C,max:A,step:w,onBlur:T,onChange:N?null:D,onFocus:F,onInput:B,onInvalid:L,onSelect:R,...M},G={mask:z,format:V,onBlur:()=>T,onChange:N?null:()=>D,onFocus:()=>F,onInput:()=>B,onInvalid:()=>L,onSelect:()=>R},H={mask:z},X=v&&(0,c.jsx)(d.Z,{children:(0,c.jsx)("datalist",{id:`${s}-list`,children:v.map((e=>(0,c.jsx)("option",{"aria-labelledby":e,value:e},e)))})}),q=P&&(0,c.jsx)(p,{isTouched:Z,invalidFeedback:I,validFeedback:S,isTooltip:E});return"NumberFormat"===$||V?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.Z,{ref:l,...U,...G}),X,q]}):"InputMask"===$||z?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t(),{ref:l,...U,...H}),X,q]}):(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("input",{ref:l,...U}),X,q]})}));h.defaultProps={component:null,type:"text",id:null,name:null,size:null,className:null,required:!1,placeholder:null,title:null,list:null,autoComplete:null,disabled:!1,multiple:!1,readOnly:!1,ariaDescribedby:null,ariaLabelledby:null,ariaLabel:null,value:void 0,min:null,max:null,step:null,isTouched:!1,isValid:!1,invalidFeedback:null,validFeedback:null,isValidMessage:!0,isTooltipFeedback:!1,onBlur:null,onChange:null,onFocus:null,onInput:null,onInvalid:null,onSelect:null,mask:null,format:null};const m=h},7069:(e,l,a)=>{a.r(l),a.d(l,{default:()=>N});var s=a(2791),n=a(97),r=a.n(n),t=a(6871),i=a(1006),o=a(840),d=a(1649),c=a(7485),u=a(5409),p=a(1477),h=a(9757),m=a(9775),x=a(1595),j=a(4455),f=a(2967),v=a(9476),b=a(5808);const g={grandArea:"style_grandArea__Y5jpk",_area_teclado:"style__area_teclado__Ub5no",webcam_area:"style_webcam_area__QdIE-",cam:"style_cam__sBeJL",area_header_info_patient:"style_area_header_info_patient__bolG1",_area_photo_and_chapa:"style__area_photo_and_chapa__2Wuqf",_area_inputs:"style__area_inputs__1BtQV",btn_save:"style_btn_save__62aGO",input_chapa:"style_input_chapa__LFbdU"};var _=a(184);const N=()=>{const e=(0,t.s0)(),l=(0,t.TH)(),a=(0,s.useRef)(null),n=(0,s.useRef)(null),[N,y]=(0,s.useState)([]),[k,C]=(0,s.useState)(""),[A,w]=(0,s.useState)(!1),[O,Z]=(0,s.useState)(!1),[I,S]=(0,s.useState)(!1),[P,E]=(0,s.useState)(""),[T,D]=(0,s.useState)(!1),[F,B]=(0,s.useState)(!1);(0,s.useEffect)((()=>{l.state?(console.log(l.state.DADOS),y(l.state.DADOS)):e("/")}),[l,k,e]);const L=async(l,a)=>{if(!(n.current.value.length<4)){S(!0);try{const s=(await f.Z.get(`/retornaCodUsuario?codchapa=${n.current.value}`)).data[0];if(!s){const e=(await f.Z.get(`/erroUserCracha/${a}`)).data;return S(!1),E(`${e}`),void D(!0)}const r=s.CD_USUARIO,t=await f.h.post("/rekognition/face",{imageSource:l,internCode:1,keyName:a,option:"compare",PAPEL_ACAO:156});if(!0===t.data[0].resposta&&t.data[0].user===r)S(!1),Z(!0),await(0,v.Z)(N,r),(async()=>{e("/")})();else switch(t.data[0].codigo){case 0:S(!1),B(!0);break;case 1:S(!1),w(!0),await(async(e,l,a,s,n)=>{let r;try{r=(await f.Z.post("/salvarHistoricoAutenticacao",{aviso:e,badge:a,filename:n,autenticado:s,etapa:l})).data}catch(t){console.log(t)}return r})(N.COD_AVISO,N.PROX_ETAPA,a,"N",`${a}_${r}_${N.COD_AVISO}_${N.PROX_ETAPA}`),await(async(e,l,a,s,n,r,t)=>{let i;try{i=(await f.Z.post("/uploadImage",{autenticado:t,image:e,badge:l,filename:r,user:a,etapa:n,aviso:s})).data}catch(o){console.log(o)}return i})(l,a,r,N.COD_AVISO,N.PROX_ETAPA,`${a}_${r}_${N.COD_AVISO}_${N.PROX_ETAPA}`,"N")}}catch(s){console.log(s)}}};return(0,_.jsxs)(i.Z,{title:d.Q.INDUCAO_ASSINATURA_DESFAZER_ETAPA.text,children:[(0,_.jsx)(h.Z,{titulo:"Sala de Preparo",localidade:"Assinatura Colaborador",children:(0,_.jsxs)(m.ZP,{children:[(0,_.jsx)(m.Z_,{children:(0,_.jsx)(u.Z,{color:"light",icon:"menu",isLight:!0})}),(0,_.jsx)(m.h_,{children:(0,_.jsx)(m.hP,{onClick:()=>(localStorage.removeItem("CAPP-local"),void e("/")),children:"Alterar Local"})})]})}),(0,_.jsxs)(o.Z,{children:[(0,_.jsxs)("div",{className:g.container,children:[(0,_.jsx)("header",{children:(0,_.jsx)("div",{children:(0,_.jsx)(x.ZP,{className:g.area_header_info_patient,children:(0,_.jsxs)(x.eW,{children:[(0,_.jsx)("h3",{children:"Paciente"}),(0,_.jsx)("h1",{children:N?N.PACIENTE:"- - "})]})})})}),(0,_.jsxs)("main",{className:g.grandArea,children:[(0,_.jsx)("div",{className:g._area_photo_and_chapa,children:(0,_.jsx)("div",{className:g.webcam_area,children:(0,_.jsx)(r(),{ref:a,className:g.cam,audio:!1,screenshotFormat:"image/jpeg",videoConstraints:{width:540,height:880,facingMode:"user"}})})}),(0,_.jsx)("div",{className:g._area_teclado,children:(0,_.jsxs)("div",{style:{padding:"1rem"},children:[(0,_.jsxs)("div",{style:{width:"400px"},children:[(0,_.jsx)("h2",{children:"Informe o c\xf3digo do crach\xe1"}),(0,_.jsx)(c.Z,{className:g.input_chapa,type:"number",disabled:!0,ref:n}),(0,_.jsx)("br",{})]}),(0,_.jsx)("div",{style:{width:"400px"},children:(0,_.jsx)(b.Z,{childToParent:e=>{const l=e;if("apagar"===l){const e=n.current.value.substring(0,n.current.value.length-1);n.current.value=e,console.log(`Valor do input: ${n.current.value}`)}else"zerar"===l?(n.current.value="",console.log(`Valor do input: ${n.current.value}`)):(C(l),n.current.value+=l)}})}),(0,_.jsxs)("div",{className:g._area_inputs,children:[(0,_.jsx)("div",{children:(0,_.jsx)(u.Z,{className:g.btn_save,color:"success",icon:"user",onClick:()=>{const e=a.current.getScreenshot().replace("data:image/jpeg;base64,","");L(e,n.current.value)},children:"Assinar"})}),(0,_.jsx)("div",{children:(0,_.jsx)(j.Z,{onClick:()=>e(-1),icon:"reply",color:"#fff",size:"5x",forceFamily:"material"})})]})]})})]})]}),(0,_.jsxs)(p.ZP,{isCentered:!0,isAnimation:!1,id:"example-modal",isOpen:A,titleId:"example-title",children:[(0,_.jsx)(p.xB,{style:{backgroundColor:"#FE5B3A",color:"#fff"},children:(0,_.jsx)(p.r6,{id:"example-title",children:"AVISO"})}),(0,_.jsxs)(p.fe,{className:"ModalBody",children:[(0,_.jsxs)("h1",{children:["Usu\xe1rio n\xe3o encontrado",(0,_.jsx)("br",{})]}),"Por favor, tente novamente."]}),(0,_.jsx)(p.mz,{children:(0,_.jsx)(u.h,{isToolbar:"true",size:"lg",children:(0,_.jsx)(u.Z,{color:"light",onClick:()=>{w(!1)},children:"FECHAR"})})})]}),(0,_.jsxs)(p.ZP,{isCentered:!0,isAnimation:!1,id:"sucess-modal",isOpen:O,titleId:"example-titlea",children:[(0,_.jsx)(p.xB,{style:{backgroundColor:"#37BBAA",color:"#fff"},children:(0,_.jsx)(p.r6,{id:"example-title",children:"AVISO"})}),(0,_.jsxs)(p.fe,{className:"ModalBody",children:[(0,_.jsx)("h1",{children:"ASSINADO COM SUCESSO!"}),(0,_.jsx)("br",{}),(0,_.jsx)("br",{})]})]}),(0,_.jsxs)(p.ZP,{isCentered:!0,isAnimation:!1,id:"loading",isOpen:I,titleId:"loading",children:[(0,_.jsx)(p.xB,{style:{backgroundColor:"#636363",color:"#fff"},children:(0,_.jsx)(p.r6,{id:"example-title",children:"ASSINANDO..."})}),(0,_.jsxs)(p.fe,{className:"ModalBody",children:[(0,_.jsx)("br",{}),(0,_.jsx)("h1",{children:"Assinando...Por favor, aguarde..."}),(0,_.jsx)("br",{}),(0,_.jsx)("br",{})]})]}),(0,_.jsxs)(p.ZP,{isCentered:!0,isAnimation:!1,isOpen:T,children:[(0,_.jsx)(p.xB,{style:{backgroundColor:"#FE5B3A",color:"#fff"},children:(0,_.jsx)(p.r6,{id:"example-title",children:"AVISO"})}),(0,_.jsxs)(p.fe,{className:"ModalBody",children:[(0,_.jsx)("h1",{children:P}),(0,_.jsx)("br",{})]}),(0,_.jsx)(p.mz,{children:(0,_.jsx)(u.h,{isToolbar:"true",size:"lg",children:(0,_.jsx)(u.Z,{className:"btn-style",color:"light",onClick:()=>D(!1),children:"FECHAR"})})})]}),(0,_.jsxs)(p.ZP,{isCentered:!0,isAnimation:!1,isOpen:F,children:[(0,_.jsx)(p.xB,{style:{backgroundColor:"#FE5B3A",color:"#fff"},children:(0,_.jsx)(p.r6,{id:"example-title",children:"AVISO"})}),(0,_.jsxs)(p.fe,{className:"ModalBody",children:[(0,_.jsxs)("h1",{children:["Face n\xe3o cadastrada!",(0,_.jsx)("br",{})]}),(0,_.jsx)("h3",{children:"Por favor, realize o cadastro e tente novamente."})]}),(0,_.jsx)(p.mz,{children:(0,_.jsx)(u.h,{isToolbar:"true",size:"lg",children:(0,_.jsx)(u.Z,{className:"btn-style",color:"light",onClick:()=>B(!1),children:"FECHAR"})})})]})]})]})}},9476:(e,l,a)=>{a.d(l,{Z:()=>r});var s=a(2967);const n=JSON.parse(localStorage.getItem("CAPP-local"));const r=async function(e,l){const a=new Date,r=new Date(a.getTime());let t;try{const a={avisoCirurgia:e.COD_AVISO,dtEtapa:r,cdEtapa:e.CD_ETAPA,usuario:l,salaCirurgia:e.CD_SAL_CIR,tipoAcao:"D",sublocalidade:n.CODIGO_SUBLOCALIDADE};await s.Z.post("/avancarEtapasCirurgia",a)&&(t=!0)}catch(i){console.log(i),t=!1}return t}}}]);
//# sourceMappingURL=69.9b13447a.chunk.js.map