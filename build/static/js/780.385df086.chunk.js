"use strict";(self.webpackChunkapp_cc=self.webpackChunkapp_cc||[]).push([[780],{2967:(e,l,n)=>{n.d(l,{Z:()=>t,h:()=>i});var s=n(4569),a=n.n(s);const r="https://appcc-api.apps.ham.org.br",o=a().create({baseURL:`${r}`,headers:{"Content-Type":"application/json"}}),i=a().create({baseURL:`${r}`,headers:{"Content-Type":"application/json"}}),t=o},9757:(e,l,n)=>{n.d(l,{Z:()=>a});n(2791);var s=n(184);const a=e=>{let{titulo:l,children:n,localidade:a}=e;return(0,s.jsxs)("header",{children:[(0,s.jsxs)("p",{children:[(0,s.jsxs)("strong",{children:[l," |"]})," ",a]}),(0,s.jsx)("div",{className:"options",children:n})]})}},5808:(e,l,n)=>{n.d(l,{Z:()=>o});n(2791);var s=n(5409);const a="style_btn_vk__TX3nv";var r=n(184);const o=e=>{let{childToParent:l}=e;return(0,r.jsx)("div",{children:(0,r.jsx)("table",{children:(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(s.Z,{className:a,color:"dark",onClick:()=>l("1"),children:"\xa01"})}),(0,r.jsx)("td",{children:(0,r.jsx)(s.Z,{className:a,color:"dark",onClick:()=>l("2"),children:"2"})}),(0,r.jsx)("td",{children:(0,r.jsx)(s.Z,{className:a,color:"dark",onClick:()=>l("3"),children:"3"})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(s.Z,{className:a,color:"dark",onClick:()=>l("4"),children:"4"})}),(0,r.jsx)("td",{children:(0,r.jsx)(s.Z,{className:a,color:"dark",onClick:()=>l("5"),children:"5"})}),(0,r.jsx)("td",{children:(0,r.jsx)(s.Z,{className:a,color:"dark",onClick:()=>l("6"),children:"6"})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(s.Z,{className:a,color:"dark",onClick:()=>l("7"),children:"7"})}),(0,r.jsx)("td",{children:(0,r.jsx)(s.Z,{className:a,color:"dark",onClick:()=>l("8"),children:"8"})}),(0,r.jsx)("td",{children:(0,r.jsx)(s.Z,{className:a,color:"dark",onClick:()=>l("9"),children:"9"})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(s.Z,{className:a,color:"danger",onClick:()=>l("zerar"),children:"X"})}),(0,r.jsx)("td",{children:(0,r.jsx)(s.Z,{className:a,color:"dark",onClick:()=>l("0"),children:"0"})}),(0,r.jsx)("td",{children:(0,r.jsx)(s.Z,{className:a,color:"brand",onClick:()=>l("apagar"),children:"<"})})]})]})})})}},9775:(e,l,n)=>{n.d(l,{ZP:()=>x,Z_:()=>p,hP:()=>f,h_:()=>m});var s=n(2791),a=n(3229),r=n(2835),o=n(1828),i=n(1694),t=n.n(i),d=n(1245),c=n(6457),u=n(184);const p=e=>{let{children:l,isOpen:n,setIsOpen:r,hasIcon:o}=e;const i=(0,s.useRef)(null),d=(0,s.useCallback)(((e,l)=>(i.current=e,l(e))),[]);return(0,u.jsx)(a.s,{children:e=>{var a;let{ref:i}=e;return s.cloneElement(l.props.isButtonGroup?(0,u.jsx)("span",{className:"visually-hidden",children:"Toggle Dropdown"}):l,{ref:e=>d(e,i),onClick:()=>{var e;null!==l&&void 0!==l&&null!==(e=l.props)&&void 0!==e&&e.onClick&&l.props.onClick(),r(!n)},className:t()({"dropdown-toggle":o,"dropdown-toggle-split":l.props.isButtonGroup,show:n},null===l||void 0===l||null===(a=l.props)||void 0===a?void 0:a.className),"aria-expanded":n})}})};p.defaultProps={isOpen:!1,setIsOpen:null,hasIcon:!0},p.displayName="DropdownToggle";const m=e=>{let{isOpen:l,setIsOpen:n,children:a,className:o,isAlignmentEnd:i,breakpoint:d,size:p,direction:m,isCloseAfterLeave:h,...f}=e;const v=(0,s.useRef)(null),x=(0,s.useCallback)(((e,l)=>(v.current=e,l(e))),[]),b=("up"===m?"top":"end"===m&&"right")||"start"===m&&"left"||"bottom",j=i?"end":"start",{darkModeStatus:k}=(0,c.Z)();return l?(0,u.jsx)(r.r,{placement:d?"bottom-start":`${b}-${j}`,modifiers:[{name:"flip",options:{fallbackPlacements:[`top-${j}`,`bottom-${j}`]}}],children:e=>{let{ref:l,style:s,placement:r}=e;return(0,u.jsx)("ul",{role:"presentation",ref:e=>x(e,l),style:d?null:s,"data-placement":r,className:t()("dropdown-menu","show",{"dropdown-menu-dark":k},{[`dropdown-menu-${p}`]:p,"dropdown-menu-end":!i&&d,[`dropdown-menu${d?`-${d}`:""}-${i?"end":"start"}`]:i||d},o),"data-bs-popper":d?"static":null,onMouseLeave:h?()=>n(!1):null,...f,children:a})}}):null};m.defaultProps={isOpen:!1,setIsOpen:null,className:null,isAlignmentEnd:!1,breakpoint:null,size:null,direction:null,isCloseAfterLeave:!0},m.displayName="DropdownMenu";const h=(0,s.forwardRef)(((e,l)=>{let{children:n,className:s,...a}=e;return(0,u.jsx)("li",{ref:l,className:t()("dropdown-item-wrapper",s),...a,children:n})}));h.defaultProps={className:null};const f=(0,s.forwardRef)(((e,l)=>{var n;let{children:a,isHeader:r,isDivider:o,isText:i,...d}=e;var c,p,m;return r?(0,u.jsx)(h,{ref:l,...d,children:(0,s.cloneElement)("string"===typeof a?(0,u.jsx)("h6",{children:a}):a,{className:t()("dropdown-header",null===a||void 0===a||null===(c=a.props)||void 0===c?void 0:c.className)})}):o?(0,u.jsx)(h,{ref:l,...d,children:(0,u.jsx)("hr",{className:t()("dropdown-divider",null===a||void 0===a||null===(p=a.props)||void 0===p?void 0:p.className)})}):i?(0,u.jsx)(h,{ref:l,...d,children:(0,s.cloneElement)("string"===typeof a?(0,u.jsx)("div",{children:a}):a,{className:t()("dropdown-item-text","dropdown-item","disabled",null===a||void 0===a||null===(m=a.props)||void 0===m?void 0:m.className)})}):(0,u.jsx)(h,{ref:l,...d,children:(0,s.cloneElement)("string"===typeof a?(0,u.jsx)("span",{children:a}):a,{className:t()("dropdown-item",null===a||void 0===a||null===(n=a.props)||void 0===n?void 0:n.className)})})}));f.defaultProps={children:null,isHeader:!1,isDivider:!1,isText:!1};const v=e=>{let{tag:l,children:n,isOpen:a,setIsOpen:r,direction:i,isButtonGroup:c,className:p}=e;const[m,h]=(0,s.useState)(!(null===a||!r)&&a),f=(0,s.useRef)(null),v=(0,s.useCallback)((()=>{null!==a&&r?r(!1):h(!1)}),[a,r]);return(0,d.Z)(f,"mousedown",v),(0,d.Z)(f,"touchstart",v),(0,u.jsx)(o.dK,{children:(0,u.jsx)(l,{ref:f,className:t()({[`drop${i}`]:i&&!c,"btn-group":c},p),children:n.map(((e,l)=>["DropdownMenu","DropdownToggle"].includes(e.type.displayName)?s.cloneElement(e,{isOpen:null!==a&&r?a:m,setIsOpen:null!==a&&r?r:h,direction:i,key:l}):e))})})};v.defaultProps={tag:"div",isOpen:null,setIsOpen:null,className:null,direction:"down",isButtonGroup:!1},v.displayName="Dropdown";const x=v},1477:(e,l,n)=>{n.d(l,{fe:()=>h,mz:()=>f,xB:()=>m,r6:()=>p,ZP:()=>x});var s=n(2791),a=n(1694),r=n.n(a),o=n(1856),i=n(68),t=n(7528),d=n(7097);function c(e,l){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:window;const a=(0,s.useRef)();(0,s.useEffect)((()=>{a.current=l}),[l]),(0,s.useEffect)((()=>{if(!(n&&n.addEventListener))return;const l=e=>a.current(e);return n.addEventListener(e,l),()=>{n.removeEventListener(e,l)}}),[e,n])}var u=n(184);const p=(0,s.forwardRef)(((e,l)=>{let{tag:n,id:s,children:a,className:o,...i}=e;return(0,u.jsx)(d.Z,{tag:n,ref:l,id:s,className:r()("modal-title",o),...i,children:a})}));p.defaultProps={className:null,tag:"h5"};const m=(0,s.forwardRef)(((e,l)=>{let{children:n,className:s,setIsOpen:a,...o}=e;return(0,u.jsxs)("div",{ref:l,className:r()("modal-header",s),...o,children:[n,a&&(0,u.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close",onClick:()=>a(!1)})]})}));m.defaultProps={className:null,setIsOpen:null};const h=(0,s.forwardRef)(((e,l)=>{let{children:n,className:s,...a}=e;return(0,u.jsx)("div",{ref:l,className:r()("modal-body",s),...a,children:n})}));h.defaultProps={className:null};const f=(0,s.forwardRef)(((e,l)=>{let{children:n,className:s,...a}=e;return(0,u.jsx)("div",{ref:l,className:r()("modal-footer",s),...a,children:n})}));f.defaultProps={className:null};const v=e=>{let{children:l,isOpen:n,setIsOpen:a,id:d,titleId:p,isStaticBackdrop:m,isScrollable:h,isCentered:f,size:v,fullScreen:x,isAnimation:b,...j}=e;const k=(0,s.useRef)(null),N=(0,s.useRef)(null);(0,s.useLayoutEffect)((()=>(n&&document.body.classList.add("modal-open"),()=>{document.body.classList.remove("modal-open")})));const w=e=>{!N.current||N.current.contains(e.target)||m||a(!1)};c("mousedown",w),c("touchstart",w);const g=e=>{N.current&&!N.current.contains(e.target)&&m&&(k.current.classList.add("modal-static"),setTimeout((()=>k.current.classList.remove("modal-static")),300))};c("mousedown",g),c("touchstart",g);c("keydown",(e=>{"Escape"===e.key&&a(!1)}));const y=b?{initial:{opacity:0,y:"-50%"},animate:{opacity:1,x:"0%",y:"0%"},exit:{opacity:0,y:"-50%"},transition:{ease:"easeInOut",duration:.3}}:null;return(0,u.jsx)(t.Z,{children:(0,u.jsx)(o.M,{exitBeforeEnter:!0,children:n&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i.E.div,{ref:k,className:r()("modal",{fade:b},"show"),role:"dialog",style:{display:"block"},id:d,tabIndex:"-1","aria-labelledby":p,"aria-hidden":"true","data-bs-backdrop":m?"static":null,"data-bs-keyboard":m?"false":null,...y,...j,children:(0,u.jsx)("div",{ref:N,className:r()("modal-dialog",{"modal-dialog-scrollable":h,"modal-dialog-centered":f,[`modal-${v}`]:v,["modal-fullscreen"+("string"===typeof x?`-${x}-down`:"")]:x}),children:(0,u.jsx)("div",{className:"modal-content",children:l})})},"modal"),(0,u.jsx)("div",{className:r()("modal-backdrop",{fade:b},"show")})]})})})};v.defaultProps={id:null,titleId:null,isStaticBackdrop:!1,isScrollable:!1,isCentered:!1,size:null,fullScreen:!1,isAnimation:!0};const x=v},7485:(e,l,n)=>{n.d(l,{Z:()=>h});var s=n(2791),a=n(948),r=n(8313),o=n.n(r),i=n(1694),t=n.n(i),d=n(7528),c=n(184);const u=e=>{let{isTouched:l,invalidFeedback:n,validFeedback:a,isTooltip:r}=e;const o=(0,s.useRef)(null);return(0,s.useEffect)((()=>{if(r)for(let a=0;a<(null===o||void 0===o||null===(e=o.current)||void 0===e?void 0:e.parentNode.classList.length);a+=1){var e,l,n,s;if(["input-group"].includes(null===o||void 0===o||null===(l=o.current)||void 0===l?void 0:l.parentNode.classList[a]))null===o||void 0===o||null===(n=o.current)||void 0===n||n.parentNode.parentNode.classList.add("position-relative");else null===o||void 0===o||null===(s=o.current)||void 0===s||s.parentNode.classList.add("position-relative")}})),l&&n?(0,c.jsx)("div",{ref:o,className:t()({"invalid-feedback":!r,"invalid-tooltip":r}),children:n}):!n&&a&&(0,c.jsx)("div",{ref:o,className:t()({"valid-feedback":!r,"valid-tooltip":r}),children:a})};u.defaultProps={isTouched:!1,invalidFeedback:null,validFeedback:null,isTooltip:!1};const p=u,m=(0,s.forwardRef)(((e,l)=>{let{type:n,id:s,name:r,className:i,required:u,placeholder:m,autoComplete:h,ariaDescribedby:f,ariaLabelledby:v,ariaLabel:x,list:b,title:j,size:k,disabled:N,readOnly:w,multiple:g,value:y,min:C,max:L,step:O,isValid:I,isTouched:Z,invalidFeedback:E,validFeedback:F,isValidMessage:T,isTooltipFeedback:P,onBlur:R,onChange:$,onFocus:S,onInput:B,onInvalid:D,onSelect:z,component:M,mask:_,format:A,...G}=e;const V={id:s,name:null===r?s:r,type:b?null:n,className:t()({"form-control":"plaintext"!==w&&"range"!==n,"form-range":"range"===n,"form-control-plaintext":"plaintext"===w,"form-control-color":"color"===n,[`form-control-${k}`]:k,"is-invalid":!I&&Z&&E,"is-valid":!I&&Z&&!E},i),required:u,placeholder:m,title:j,list:b?`${s}-list`:null,disabled:N,readOnly:!!w,multiple:g,autoComplete:h,"aria-describedby":f,"aria-label":x,"aria-labelledby":v,value:y,min:C,max:L,step:O,onBlur:R,onChange:w?null:$,onFocus:S,onInput:B,onInvalid:D,onSelect:z,...G},q={mask:_,format:A,onBlur:()=>R,onChange:w?null:()=>$,onFocus:()=>S,onInput:()=>B,onInvalid:()=>D,onSelect:()=>z},H={mask:_},U=b&&(0,c.jsx)(d.Z,{children:(0,c.jsx)("datalist",{id:`${s}-list`,children:b.map((e=>(0,c.jsx)("option",{"aria-labelledby":e,value:e},e)))})}),X=T&&(0,c.jsx)(p,{isTouched:Z,invalidFeedback:E,validFeedback:F,isTooltip:P});return"NumberFormat"===M||A?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a.Z,{ref:l,...V,...q}),U,X]}):"InputMask"===M||_?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(o(),{ref:l,...V,...H}),U,X]}):(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("input",{ref:l,...V}),U,X]})}));m.defaultProps={component:null,type:"text",id:null,name:null,size:null,className:null,required:!1,placeholder:null,title:null,list:null,autoComplete:null,disabled:!1,multiple:!1,readOnly:!1,ariaDescribedby:null,ariaLabelledby:null,ariaLabel:null,value:void 0,min:null,max:null,step:null,isTouched:!1,isValid:!1,invalidFeedback:null,validFeedback:null,isValidMessage:!0,isTooltipFeedback:!1,onBlur:null,onChange:null,onFocus:null,onInput:null,onInvalid:null,onSelect:null,mask:null,format:null};const h=m},4619:(e,l,n)=>{var s=n(2791),a="undefined"===typeof window,r="undefined"===typeof navigator;l.c=function(){if(a||r)return{error:"useIsOnline only works in a browser environment.",isOnline:!1,isOffline:!1};var e=s.useState(window.navigator.onLine),l=e[0],n=e[1];return s.useEffect((function(){var e=function(){return n(window.navigator.onLine)};return window.addEventListener("online",e),window.addEventListener("offline",e),function(){window.removeEventListener("online",e),window.removeEventListener("offline",e)}}),[l]),{error:null,isOffline:!l,isOnline:l}}}}]);
//# sourceMappingURL=780.385df086.chunk.js.map