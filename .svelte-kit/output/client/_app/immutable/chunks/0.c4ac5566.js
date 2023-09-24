import{s as bl,A as _t,e as Ke,a as kt,c as Ze,b as tt,g as Rt,f as he,o as Y,i as Je,h as ft,B as St,C as Dt,D as Pt,L as ed,G as is,H as os,u as Wu,S as up,ad as fp,t as td,d as rd,k as dp,p as zu,ae as hp,n as pp,T as gp}from"./scheduler.08130eb6.js";import{S as ml,i as yl,t as X,g as or,b as ge,e as sr,c as ss,a as as,m as cs,d as ls}from"./index.dcfd4ecf.js";import"./ProgressBar.svelte_svelte_type_style_lang.797fb494.js";import{L as Hu}from"./LinkButton.ce190434.js";import{p as wp}from"./stores.e77d4b23.js";import{_ as Ri}from"./preload-helper.a4192956.js";const bp=t=>({}),Gu=t=>({}),mp=t=>({}),Vu=t=>({}),yp=t=>({}),qu=t=>({});function Qu(t){let e,r,n;const o=t[22].lead,i=_t(o,t,t[21],qu);return{c(){e=Ke("div"),i&&i.c(),this.h()},l(s){e=Ze(s,"DIV",{class:!0});var a=tt(e);i&&i.l(a),a.forEach(he),this.h()},h(){Y(e,"class",r="app-bar-slot-lead "+t[4])},m(s,a){Je(s,e,a),i&&i.m(e,null),n=!0},p(s,a){i&&i.p&&(!n||a&2097152)&&St(i,o,s,s[21],n?Pt(o,s[21],a,yp):Dt(s[21]),qu),(!n||a&16&&r!==(r="app-bar-slot-lead "+s[4]))&&Y(e,"class",r)},i(s){n||(X(i,s),n=!0)},o(s){ge(i,s),n=!1},d(s){s&&he(e),i&&i.d(s)}}}function Ku(t){let e,r,n;const o=t[22].trail,i=_t(o,t,t[21],Vu);return{c(){e=Ke("div"),i&&i.c(),this.h()},l(s){e=Ze(s,"DIV",{class:!0});var a=tt(e);i&&i.l(a),a.forEach(he),this.h()},h(){Y(e,"class",r="app-bar-slot-trail "+t[2])},m(s,a){Je(s,e,a),i&&i.m(e,null),n=!0},p(s,a){i&&i.p&&(!n||a&2097152)&&St(i,o,s,s[21],n?Pt(o,s[21],a,mp):Dt(s[21]),Vu),(!n||a&4&&r!==(r="app-bar-slot-trail "+s[2]))&&Y(e,"class",r)},i(s){n||(X(i,s),n=!0)},o(s){ge(i,s),n=!1},d(s){s&&he(e),i&&i.d(s)}}}function Zu(t){let e,r,n;const o=t[22].headline,i=_t(o,t,t[21],Gu);return{c(){e=Ke("div"),i&&i.c(),this.h()},l(s){e=Ze(s,"DIV",{class:!0});var a=tt(e);i&&i.l(a),a.forEach(he),this.h()},h(){Y(e,"class",r="app-bar-row-headline "+t[5])},m(s,a){Je(s,e,a),i&&i.m(e,null),n=!0},p(s,a){i&&i.p&&(!n||a&2097152)&&St(i,o,s,s[21],n?Pt(o,s[21],a,bp):Dt(s[21]),Gu),(!n||a&32&&r!==(r="app-bar-row-headline "+s[5]))&&Y(e,"class",r)},i(s){n||(X(i,s),n=!0)},o(s){ge(i,s),n=!1},d(s){s&&he(e),i&&i.d(s)}}}function vp(t){let e,r,n,o,i,s,a,c,l,d,p=t[8].lead&&Qu(t);const g=t[22].default,w=_t(g,t,t[21],null);let b=t[8].trail&&Ku(t),A=t[8].headline&&Zu(t);return{c(){e=Ke("div"),r=Ke("div"),p&&p.c(),n=kt(),o=Ke("div"),w&&w.c(),s=kt(),b&&b.c(),c=kt(),A&&A.c(),this.h()},l(y){e=Ze(y,"DIV",{class:!0,"data-testid":!0,role:!0,"aria-label":!0,"aria-labelledby":!0});var S=tt(e);r=Ze(S,"DIV",{class:!0});var m=tt(r);p&&p.l(m),n=Rt(m),o=Ze(m,"DIV",{class:!0});var _=tt(o);w&&w.l(_),_.forEach(he),s=Rt(m),b&&b.l(m),m.forEach(he),c=Rt(S),A&&A.l(S),S.forEach(he),this.h()},h(){Y(o,"class",i="app-bar-slot-default "+t[3]),Y(r,"class",a="app-bar-row-main "+t[6]),Y(e,"class",l="app-bar "+t[7]),Y(e,"data-testid","app-bar"),Y(e,"role","toolbar"),Y(e,"aria-label",t[0]),Y(e,"aria-labelledby",t[1])},m(y,S){Je(y,e,S),ft(e,r),p&&p.m(r,null),ft(r,n),ft(r,o),w&&w.m(o,null),ft(r,s),b&&b.m(r,null),ft(e,c),A&&A.m(e,null),d=!0},p(y,[S]){y[8].lead?p?(p.p(y,S),S&256&&X(p,1)):(p=Qu(y),p.c(),X(p,1),p.m(r,n)):p&&(or(),ge(p,1,1,()=>{p=null}),sr()),w&&w.p&&(!d||S&2097152)&&St(w,g,y,y[21],d?Pt(g,y[21],S,null):Dt(y[21]),null),(!d||S&8&&i!==(i="app-bar-slot-default "+y[3]))&&Y(o,"class",i),y[8].trail?b?(b.p(y,S),S&256&&X(b,1)):(b=Ku(y),b.c(),X(b,1),b.m(r,null)):b&&(or(),ge(b,1,1,()=>{b=null}),sr()),(!d||S&64&&a!==(a="app-bar-row-main "+y[6]))&&Y(r,"class",a),y[8].headline?A?(A.p(y,S),S&256&&X(A,1)):(A=Zu(y),A.c(),X(A,1),A.m(e,null)):A&&(or(),ge(A,1,1,()=>{A=null}),sr()),(!d||S&128&&l!==(l="app-bar "+y[7]))&&Y(e,"class",l),(!d||S&1)&&Y(e,"aria-label",y[0]),(!d||S&2)&&Y(e,"aria-labelledby",y[1])},i(y){d||(X(p),X(w,y),X(b),X(A),d=!0)},o(y){ge(p),ge(w,y),ge(b),ge(A),d=!1},d(y){y&&he(e),p&&p.d(),w&&w.d(y),b&&b.d(),A&&A.d()}}}const Ap="flex flex-col",Cp="grid items-center",xp="",Ep="flex-none flex justify-between items-center",_p="flex-auto",Sp="flex-none flex items-center space-x-4";function Dp(t,e,r){let n,o,i,s,a,c,{$$slots:l={},$$scope:d}=e;const p=ed(l);let{background:g="bg-surface-100-800-token"}=e,{border:w=""}=e,{padding:b="p-4"}=e,{shadow:A=""}=e,{spacing:y="space-y-4"}=e,{gridColumns:S="grid-cols-[auto_1fr_auto]"}=e,{gap:m="gap-4"}=e,{regionRowMain:_=""}=e,{regionRowHeadline:x=""}=e,{slotLead:E=""}=e,{slotDefault:D=""}=e,{slotTrail:u=""}=e,{label:C=""}=e,{labelledby:T=""}=e;return t.$$set=B=>{r(23,e=is(is({},e),os(B))),"background"in B&&r(9,g=B.background),"border"in B&&r(10,w=B.border),"padding"in B&&r(11,b=B.padding),"shadow"in B&&r(12,A=B.shadow),"spacing"in B&&r(13,y=B.spacing),"gridColumns"in B&&r(14,S=B.gridColumns),"gap"in B&&r(15,m=B.gap),"regionRowMain"in B&&r(16,_=B.regionRowMain),"regionRowHeadline"in B&&r(17,x=B.regionRowHeadline),"slotLead"in B&&r(18,E=B.slotLead),"slotDefault"in B&&r(19,D=B.slotDefault),"slotTrail"in B&&r(20,u=B.slotTrail),"label"in B&&r(0,C=B.label),"labelledby"in B&&r(1,T=B.labelledby),"$$scope"in B&&r(21,d=B.$$scope)},t.$$.update=()=>{r(7,n=`${Ap} ${g} ${w} ${y} ${b} ${A} ${e.class??""}`),t.$$.dirty&114688&&r(6,o=`${Cp} ${S} ${m} ${_}`),t.$$.dirty&131072&&r(5,i=`${xp} ${x}`),t.$$.dirty&262144&&r(4,s=`${Ep} ${E}`),t.$$.dirty&524288&&r(3,a=`${_p} ${D}`),t.$$.dirty&1048576&&r(2,c=`${Sp} ${u}`)},e=os(e),[C,T,c,a,s,i,o,n,p,g,w,b,A,y,S,m,_,x,E,D,u,d,l]}class Pp extends ml{constructor(e){super(),yl(this,e,Dp,vp,bl,{background:9,border:10,padding:11,shadow:12,spacing:13,gridColumns:14,gap:15,regionRowMain:16,regionRowHeadline:17,slotLead:18,slotDefault:19,slotTrail:20,label:0,labelledby:1})}}const Ip=t=>({}),Yu=t=>({}),Tp=t=>({}),Ju=t=>({}),Bp=t=>({}),Xu=t=>({}),Op=t=>({}),e0=t=>({}),kp=t=>({}),t0=t=>({}),Rp=t=>({}),r0=t=>({});function n0(t){let e,r,n;const o=t[19].header,i=_t(o,t,t[18],r0);return{c(){e=Ke("header"),i&&i.c(),this.h()},l(s){e=Ze(s,"HEADER",{id:!0,class:!0});var a=tt(e);i&&i.l(a),a.forEach(he),this.h()},h(){Y(e,"id","shell-header"),Y(e,"class",r="flex-none "+t[8])},m(s,a){Je(s,e,a),i&&i.m(e,null),n=!0},p(s,a){i&&i.p&&(!n||a&262144)&&St(i,o,s,s[18],n?Pt(o,s[18],a,Rp):Dt(s[18]),r0),(!n||a&256&&r!==(r="flex-none "+s[8]))&&Y(e,"class",r)},i(s){n||(X(i,s),n=!0)},o(s){ge(i,s),n=!1},d(s){s&&he(e),i&&i.d(s)}}}function i0(t){let e,r;const n=t[19].sidebarLeft,o=_t(n,t,t[18],t0);return{c(){e=Ke("aside"),o&&o.c(),this.h()},l(i){e=Ze(i,"ASIDE",{id:!0,class:!0});var s=tt(e);o&&o.l(s),s.forEach(he),this.h()},h(){Y(e,"id","sidebar-left"),Y(e,"class",t[7])},m(i,s){Je(i,e,s),o&&o.m(e,null),r=!0},p(i,s){o&&o.p&&(!r||s&262144)&&St(o,n,i,i[18],r?Pt(n,i[18],s,kp):Dt(i[18]),t0),(!r||s&128)&&Y(e,"class",i[7])},i(i){r||(X(o,i),r=!0)},o(i){ge(o,i),r=!1},d(i){i&&he(e),o&&o.d(i)}}}function o0(t){let e,r,n;const o=t[19].pageHeader,i=_t(o,t,t[18],e0),s=i||Np();return{c(){e=Ke("header"),s&&s.c(),this.h()},l(a){e=Ze(a,"HEADER",{id:!0,class:!0});var c=tt(e);s&&s.l(c),c.forEach(he),this.h()},h(){Y(e,"id","page-header"),Y(e,"class",r="flex-none "+t[5])},m(a,c){Je(a,e,c),s&&s.m(e,null),n=!0},p(a,c){i&&i.p&&(!n||c&262144)&&St(i,o,a,a[18],n?Pt(o,a[18],c,Op):Dt(a[18]),e0),(!n||c&32&&r!==(r="flex-none "+a[5]))&&Y(e,"class",r)},i(a){n||(X(s,a),n=!0)},o(a){ge(s,a),n=!1},d(a){a&&he(e),s&&s.d(a)}}}function Np(t){let e;return{c(){e=td("(slot:header)")},l(r){e=rd(r,"(slot:header)")},m(r,n){Je(r,e,n)},d(r){r&&he(e)}}}function s0(t){let e,r,n;const o=t[19].pageFooter,i=_t(o,t,t[18],Xu),s=i||Mp();return{c(){e=Ke("footer"),s&&s.c(),this.h()},l(a){e=Ze(a,"FOOTER",{id:!0,class:!0});var c=tt(e);s&&s.l(c),c.forEach(he),this.h()},h(){Y(e,"id","page-footer"),Y(e,"class",r="flex-none "+t[3])},m(a,c){Je(a,e,c),s&&s.m(e,null),n=!0},p(a,c){i&&i.p&&(!n||c&262144)&&St(i,o,a,a[18],n?Pt(o,a[18],c,Bp):Dt(a[18]),Xu),(!n||c&8&&r!==(r="flex-none "+a[3]))&&Y(e,"class",r)},i(a){n||(X(s,a),n=!0)},o(a){ge(s,a),n=!1},d(a){a&&he(e),s&&s.d(a)}}}function Mp(t){let e;return{c(){e=td("(slot:footer)")},l(r){e=rd(r,"(slot:footer)")},m(r,n){Je(r,e,n)},d(r){r&&he(e)}}}function a0(t){let e,r;const n=t[19].sidebarRight,o=_t(n,t,t[18],Ju);return{c(){e=Ke("aside"),o&&o.c(),this.h()},l(i){e=Ze(i,"ASIDE",{id:!0,class:!0});var s=tt(e);o&&o.l(s),s.forEach(he),this.h()},h(){Y(e,"id","sidebar-right"),Y(e,"class",t[6])},m(i,s){Je(i,e,s),o&&o.m(e,null),r=!0},p(i,s){o&&o.p&&(!r||s&262144)&&St(o,n,i,i[18],r?Pt(n,i[18],s,Tp):Dt(i[18]),Ju),(!r||s&64)&&Y(e,"class",i[6])},i(i){r||(X(o,i),r=!0)},o(i){ge(o,i),r=!1},d(i){i&&he(e),o&&o.d(i)}}}function c0(t){let e,r,n;const o=t[19].footer,i=_t(o,t,t[18],Yu);return{c(){e=Ke("footer"),i&&i.c(),this.h()},l(s){e=Ze(s,"FOOTER",{id:!0,class:!0});var a=tt(e);i&&i.l(a),a.forEach(he),this.h()},h(){Y(e,"id","shell-footer"),Y(e,"class",r="flex-none "+t[2])},m(s,a){Je(s,e,a),i&&i.m(e,null),n=!0},p(s,a){i&&i.p&&(!n||a&262144)&&St(i,o,s,s[18],n?Pt(o,s[18],a,Ip):Dt(s[18]),Yu),(!n||a&4&&r!==(r="flex-none "+s[2]))&&Y(e,"class",r)},i(s){n||(X(i,s),n=!0)},o(s){ge(i,s),n=!1},d(s){s&&he(e),i&&i.d(s)}}}function $p(t){let e,r,n,o,i,s,a,c,l,d,p,g,w,b,A,y=t[10].header&&n0(t),S=t[10].sidebarLeft&&i0(t),m=t[10].pageHeader&&o0(t);const _=t[19].default,x=_t(_,t,t[18],null);let E=t[10].pageFooter&&s0(t),D=t[10].sidebarRight&&a0(t),u=t[10].footer&&c0(t);return{c(){e=Ke("div"),y&&y.c(),r=kt(),n=Ke("div"),S&&S.c(),o=kt(),i=Ke("div"),m&&m.c(),s=kt(),a=Ke("main"),x&&x.c(),l=kt(),E&&E.c(),p=kt(),D&&D.c(),g=kt(),u&&u.c(),this.h()},l(C){e=Ze(C,"DIV",{id:!0,class:!0,"data-testid":!0});var T=tt(e);y&&y.l(T),r=Rt(T),n=Ze(T,"DIV",{class:!0});var B=tt(n);S&&S.l(B),o=Rt(B),i=Ze(B,"DIV",{id:!0,class:!0});var M=tt(i);m&&m.l(M),s=Rt(M),a=Ze(M,"MAIN",{id:!0,class:!0});var j=tt(a);x&&x.l(j),j.forEach(he),l=Rt(M),E&&E.l(M),M.forEach(he),p=Rt(B),D&&D.l(B),B.forEach(he),g=Rt(T),u&&u.l(T),T.forEach(he),this.h()},h(){Y(a,"id","page-content"),Y(a,"class",c="flex-auto "+t[4]),Y(i,"id","page"),Y(i,"class",d=t[1]+" "+l0),Wu(i,"scrollbarGutter",t[0]),Y(n,"class","flex-auto "+Fp),Y(e,"id","appShell"),Y(e,"class",t[9]),Y(e,"data-testid","app-shell")},m(C,T){Je(C,e,T),y&&y.m(e,null),ft(e,r),ft(e,n),S&&S.m(n,null),ft(n,o),ft(n,i),m&&m.m(i,null),ft(i,s),ft(i,a),x&&x.m(a,null),ft(i,l),E&&E.m(i,null),ft(n,p),D&&D.m(n,null),ft(e,g),u&&u.m(e,null),w=!0,b||(A=up(i,"scroll",t[20]),b=!0)},p(C,[T]){C[10].header?y?(y.p(C,T),T&1024&&X(y,1)):(y=n0(C),y.c(),X(y,1),y.m(e,r)):y&&(or(),ge(y,1,1,()=>{y=null}),sr()),C[10].sidebarLeft?S?(S.p(C,T),T&1024&&X(S,1)):(S=i0(C),S.c(),X(S,1),S.m(n,o)):S&&(or(),ge(S,1,1,()=>{S=null}),sr()),C[10].pageHeader?m?(m.p(C,T),T&1024&&X(m,1)):(m=o0(C),m.c(),X(m,1),m.m(i,s)):m&&(or(),ge(m,1,1,()=>{m=null}),sr()),x&&x.p&&(!w||T&262144)&&St(x,_,C,C[18],w?Pt(_,C[18],T,null):Dt(C[18]),null),(!w||T&16&&c!==(c="flex-auto "+C[4]))&&Y(a,"class",c),C[10].pageFooter?E?(E.p(C,T),T&1024&&X(E,1)):(E=s0(C),E.c(),X(E,1),E.m(i,null)):E&&(or(),ge(E,1,1,()=>{E=null}),sr()),(!w||T&2&&d!==(d=C[1]+" "+l0))&&Y(i,"class",d),T&1&&Wu(i,"scrollbarGutter",C[0]),C[10].sidebarRight?D?(D.p(C,T),T&1024&&X(D,1)):(D=a0(C),D.c(),X(D,1),D.m(n,null)):D&&(or(),ge(D,1,1,()=>{D=null}),sr()),C[10].footer?u?(u.p(C,T),T&1024&&X(u,1)):(u=c0(C),u.c(),X(u,1),u.m(e,null)):u&&(or(),ge(u,1,1,()=>{u=null}),sr()),(!w||T&512)&&Y(e,"class",C[9])},i(C){w||(X(y),X(S),X(m),X(x,C),X(E),X(D),X(u),w=!0)},o(C){ge(y),ge(S),ge(m),ge(x,C),ge(E),ge(D),ge(u),w=!1},d(C){C&&he(e),y&&y.d(),S&&S.d(),m&&m.d(),x&&x.d(C),E&&E.d(),D&&D.d(),u&&u.d(),b=!1,A()}}}const Up="w-full h-full flex flex-col overflow-hidden",Fp="w-full h-full flex overflow-hidden",l0="flex-1 overflow-x-hidden flex flex-col",Lp="flex-none overflow-x-hidden overflow-y-auto",jp="flex-none overflow-x-hidden overflow-y-auto";function Wp(t,e,r){let n,o,i,s,a,c,l,d,{$$slots:p={},$$scope:g}=e;const w=ed(p);let{scrollbarGutter:b="auto"}=e,{regionPage:A=""}=e,{slotHeader:y="z-10"}=e,{slotSidebarLeft:S="w-auto"}=e,{slotSidebarRight:m="w-auto"}=e,{slotPageHeader:_=""}=e,{slotPageContent:x=""}=e,{slotPageFooter:E=""}=e,{slotFooter:D=""}=e;function u(C){fp.call(this,t,C)}return t.$$set=C=>{r(21,e=is(is({},e),os(C))),"scrollbarGutter"in C&&r(0,b=C.scrollbarGutter),"regionPage"in C&&r(1,A=C.regionPage),"slotHeader"in C&&r(11,y=C.slotHeader),"slotSidebarLeft"in C&&r(12,S=C.slotSidebarLeft),"slotSidebarRight"in C&&r(13,m=C.slotSidebarRight),"slotPageHeader"in C&&r(14,_=C.slotPageHeader),"slotPageContent"in C&&r(15,x=C.slotPageContent),"slotPageFooter"in C&&r(16,E=C.slotPageFooter),"slotFooter"in C&&r(17,D=C.slotFooter),"$$scope"in C&&r(18,g=C.$$scope)},t.$$.update=()=>{r(9,n=`${Up} ${e.class??""}`),t.$$.dirty&2048&&r(8,o=`${y}`),t.$$.dirty&4096&&r(7,i=`${Lp} ${S}`),t.$$.dirty&8192&&r(6,s=`${jp} ${m}`),t.$$.dirty&16384&&r(5,a=`${_}`),t.$$.dirty&32768&&r(4,c=`${x}`),t.$$.dirty&65536&&r(3,l=`${E}`),t.$$.dirty&131072&&r(2,d=`${D}`)},e=os(e),[b,A,d,l,c,a,s,i,o,n,w,y,S,m,_,x,E,D,g,p,u]}class zp extends ml{constructor(e){super(),yl(this,e,Wp,$p,bl,{scrollbarGutter:0,regionPage:1,slotHeader:11,slotSidebarLeft:12,slotSidebarRight:13,slotPageHeader:14,slotPageContent:15,slotPageFooter:16,slotFooter:17})}}const Hp="1.10.12",Gp=t=>t,Zs=t=>t,Vp=()=>`viem@${Hp}`;class $ extends Error{constructor(e,r={}){var i;super(),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docsPath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"metaMessages",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"shortMessage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ViemError"}),Object.defineProperty(this,"version",{enumerable:!0,configurable:!0,writable:!0,value:Vp()});const n=r.cause instanceof $?r.cause.details:(i=r.cause)!=null&&i.message?r.cause.message:r.details,o=r.cause instanceof $&&r.cause.docsPath||r.docsPath;this.message=[e||"An error occurred.","",...r.metaMessages?[...r.metaMessages,""]:[],...o?[`Docs: https://viem.sh${o}.html${r.docsSlug?`#${r.docsSlug}`:""}`]:[],...n?[`Details: ${n}`]:[],`Version: ${this.version}`].join(`
`),r.cause&&(this.cause=r.cause),this.details=n,this.docsPath=o,this.metaMessages=r.metaMessages,this.shortMessage=e}walk(e){return nd(this,e)}}function nd(t,e){return e!=null&&e(t)?t:t&&typeof t=="object"&&"cause"in t?nd(t.cause,e):e?null:t}class gc extends ${constructor({blockNumber:e,chain:r,contract:n}){super(`Chain "${r.name}" does not support contract "${n.name}".`,{metaMessages:["This could be due to any of the following:",...e&&n.blockCreated&&n.blockCreated>e?[`- The contract "${n.name}" was not deployed until block ${n.blockCreated} (current block ${e}).`]:[`- The chain does not have the contract "${n.name}" configured.`]]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDoesNotSupportContract"})}}class qp extends ${constructor({chain:e,currentChainId:r}){super(`The current chain of the wallet (id: ${r}) does not match the target chain for the transaction (id: ${e.id} – ${e.name}).`,{metaMessages:[`Current Chain ID:  ${r}`,`Expected Chain ID: ${e.id} – ${e.name}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainMismatchError"})}}class Qp extends ${constructor(){super(["No chain was provided to the request.","Please provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient."].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainNotFoundError"})}}class id extends ${constructor(){super("No chain was provided to the Client."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ClientChainNotConfiguredError"})}}function od({chain:t,currentChainId:e}){if(!t)throw new Qp;if(e!==t.id)throw new qp({chain:t,currentChainId:e})}function vl(t,e={}){const{fees:r=t.fees,formatters:n=t.formatters,serializers:o=t.serializers}=e;return{...t,fees:r,formatters:n,serializers:o}}function Yn({blockNumber:t,chain:e,contract:r}){var o;const n=(o=e==null?void 0:e.contracts)==null?void 0:o[r];if(!n)throw new gc({chain:e,contract:{name:r}});if(t&&n.blockCreated&&n.blockCreated>t)throw new gc({blockNumber:t,chain:e,contract:{name:r,blockCreated:n.blockCreated}});return n.address}class Kp extends ${constructor({max:e,min:r,signed:n,size:o,value:i}){super(`Number "${i}" is not in safe ${o?`${o*8}-bit ${n?"signed":"unsigned"} `:""}integer range ${e?`(${r} to ${e})`:`(above ${r})`}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntegerOutOfRangeError"})}}class Zp extends ${constructor(e){super(`Hex value "${e}" is not a valid boolean. The hex value must be "0x0" (false) or "0x1" (true).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidHexBooleanError"})}}class Yp extends ${constructor({givenSize:e,maxSize:r}){super(`Size cannot exceed ${r} bytes. Given size: ${e} bytes.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeOverflowError"})}}function Kt(t,{strict:e=!0}={}){return!t||typeof t!="string"?!1:e?/^0x[0-9a-fA-F]*$/.test(t):t.startsWith("0x")}function ze(t){return Kt(t,{strict:!1})?Math.ceil((t.length-2)/2):t.length}function Jr(t,{dir:e="left"}={}){let r=typeof t=="string"?t.replace("0x",""):t,n=0;for(let o=0;o<r.length-1&&r[e==="left"?o:r.length-o-1].toString()==="0";o++)n++;return r=e==="left"?r.slice(n):r.slice(0,r.length-n),typeof t=="string"?(r.length===1&&e==="right"&&(r=`${r}0`),`0x${r.length%2===1?`0${r}`:r}`):r}class sd extends ${constructor({offset:e,position:r,size:n}){super(`Slice ${r==="start"?"starting":"ending"} at offset "${e}" is out-of-bounds (size: ${n}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SliceOffsetOutOfBoundsError"})}}class ad extends ${constructor({size:e,targetSize:r,type:n}){super(`${n.charAt(0).toUpperCase()}${n.slice(1).toLowerCase()} size (${e}) exceeds padding size (${r}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeExceedsPaddingSizeError"})}}function Jn(t,{dir:e,size:r=32}={}){return typeof t=="string"?xr(t,{dir:e,size:r}):Jp(t,{dir:e,size:r})}function xr(t,{dir:e,size:r=32}={}){if(r===null)return t;const n=t.replace("0x","");if(n.length>r*2)throw new ad({size:Math.ceil(n.length/2),targetSize:r,type:"hex"});return`0x${n[e==="right"?"padEnd":"padStart"](r*2,"0")}`}function Jp(t,{dir:e,size:r=32}={}){if(r===null)return t;if(t.length>r)throw new ad({size:t.length,targetSize:r,type:"bytes"});const n=new Uint8Array(r);for(let o=0;o<r;o++){const i=e==="right";n[i?o:r-o-1]=t[i?o:t.length-o-1]}return n}const Xp=Array.from({length:256},(t,e)=>e.toString(16).padStart(2,"0"));function dr(t,e={}){return typeof t=="number"||typeof t=="bigint"?ne(t,e):typeof t=="string"?Al(t,e):typeof t=="boolean"?cd(t,e):Ni(t,e)}function cd(t,e={}){const r=`0x${Number(t)}`;return typeof e.size=="number"?(Mr(r,{size:e.size}),Jn(r,{size:e.size})):r}function Ni(t,e={}){let r="";for(let o=0;o<t.length;o++)r+=Xp[t[o]];const n=`0x${r}`;return typeof e.size=="number"?(Mr(n,{size:e.size}),Jn(n,{dir:"right",size:e.size})):n}function ne(t,e={}){const{signed:r,size:n}=e,o=BigInt(t);let i;n?r?i=(1n<<BigInt(n)*8n-1n)-1n:i=2n**(BigInt(n)*8n)-1n:typeof t=="number"&&(i=BigInt(Number.MAX_SAFE_INTEGER));const s=typeof i=="bigint"&&r?-i-1n:0;if(i&&o>i||o<s){const c=typeof t=="bigint"?"n":"";throw new Kp({max:i?`${i}${c}`:void 0,min:`${s}${c}`,signed:r,size:n,value:`${t}${c}`})}const a=`0x${(r&&o<0?(1n<<BigInt(n*8))+BigInt(o):o).toString(16)}`;return n?Jn(a,{size:n}):a}const eg=new TextEncoder;function Al(t,e={}){const r=eg.encode(t);return Ni(r,e)}const tg=new TextEncoder;function Dr(t,e={}){return typeof t=="number"||typeof t=="bigint"?ng(t,e):typeof t=="boolean"?rg(t,e):Kt(t)?Cl(t,e):ar(t,e)}function rg(t,e={}){const r=new Uint8Array(1);return r[0]=Number(t),typeof e.size=="number"?(Mr(r,{size:e.size}),Jn(r,{size:e.size})):r}function Cl(t,e={}){let r=t;e.size&&(Mr(r,{size:e.size}),r=Jn(r,{dir:"right",size:e.size}));let n=r.slice(2);n.length%2&&(n=`0${n}`);const o=new Uint8Array(n.length/2);for(let i=0;i<o.length;i++){const s=i*2,a=n.slice(s,s+2),c=Number.parseInt(a,16);if(Number.isNaN(c)||c<0)throw new $(`Invalid byte sequence ("${a}" in "${n}").`);o[i]=c}return o}function ng(t,e){const r=ne(t,e);return Cl(r)}function ar(t,e={}){const r=tg.encode(t);return typeof e.size=="number"?(Mr(r,{size:e.size}),Jn(r,{dir:"right",size:e.size})):r}function Mr(t,{size:e}){if(ze(t)>e)throw new Yp({givenSize:ze(t),maxSize:e})}function Ys(t,e={}){const{signed:r}=e;e.size&&Mr(t,{size:e.size});const n=BigInt(t);if(!r)return n;const o=(t.length-2)/2,i=(1n<<BigInt(o)*8n-1n)-1n;return n<=i?n:n-BigInt(`0x${"f".padStart(o*2,"f")}`)-1n}function ig(t,e={}){let r=t;if(e.size&&(Mr(r,{size:e.size}),r=Jr(r)),Jr(r)==="0x00")return!1;if(Jr(r)==="0x01")return!0;throw new Zp(r)}function at(t,e={}){return Number(Ys(t,e))}function ld(t,e={}){let r=Cl(t);return e.size&&(Mr(r,{size:e.size}),r=Jr(r,{dir:"right"})),new TextDecoder().decode(r)}const ud={"0x0":"legacy","0x1":"eip2930","0x2":"eip1559"};function fd(t){const e={...t,blockHash:t.blockHash?t.blockHash:null,blockNumber:t.blockNumber?BigInt(t.blockNumber):null,chainId:t.chainId?at(t.chainId):void 0,gas:t.gas?BigInt(t.gas):void 0,gasPrice:t.gasPrice?BigInt(t.gasPrice):void 0,maxFeePerGas:t.maxFeePerGas?BigInt(t.maxFeePerGas):void 0,maxPriorityFeePerGas:t.maxPriorityFeePerGas?BigInt(t.maxPriorityFeePerGas):void 0,nonce:t.nonce?at(t.nonce):void 0,to:t.to?t.to:null,transactionIndex:t.transactionIndex?Number(t.transactionIndex):null,type:t.type?ud[t.type]:void 0,typeHex:t.type?t.type:void 0,value:t.value?BigInt(t.value):void 0,v:t.v?BigInt(t.v):void 0};return e.type==="legacy"&&(delete e.accessList,delete e.maxFeePerGas,delete e.maxPriorityFeePerGas),e.type==="eip2930"&&(delete e.maxFeePerGas,delete e.maxPriorityFeePerGas),e}function dd(t){var r;const e=(r=t.transactions)==null?void 0:r.map(n=>typeof n=="string"?n:fd(n));return{...t,baseFeePerGas:t.baseFeePerGas?BigInt(t.baseFeePerGas):null,difficulty:t.difficulty?BigInt(t.difficulty):void 0,gasLimit:t.gasLimit?BigInt(t.gasLimit):void 0,gasUsed:t.gasUsed?BigInt(t.gasUsed):void 0,hash:t.hash?t.hash:null,logsBloom:t.logsBloom?t.logsBloom:null,nonce:t.nonce?t.nonce:null,number:t.number?BigInt(t.number):null,size:t.size?BigInt(t.size):void 0,timestamp:t.timestamp?BigInt(t.timestamp):void 0,transactions:e,totalDifficulty:t.totalDifficulty?BigInt(t.totalDifficulty):null}}function Ut(t,{args:e,eventName:r}={}){return{...t,blockHash:t.blockHash?t.blockHash:null,blockNumber:t.blockNumber?BigInt(t.blockNumber):null,logIndex:t.logIndex?Number(t.logIndex):null,transactionHash:t.transactionHash?t.transactionHash:null,transactionIndex:t.transactionIndex?Number(t.transactionIndex):null,...r?{args:e,eventName:r}:{}}}const og={"0x0":"reverted","0x1":"success"};function sg(t){return{...t,blockNumber:t.blockNumber?BigInt(t.blockNumber):null,contractAddress:t.contractAddress?t.contractAddress:null,cumulativeGasUsed:t.cumulativeGasUsed?BigInt(t.cumulativeGasUsed):null,effectiveGasPrice:t.effectiveGasPrice?BigInt(t.effectiveGasPrice):null,gasUsed:t.gasUsed?BigInt(t.gasUsed):null,logs:t.logs?t.logs.map(e=>Ut(e)):null,to:t.to?t.to:null,transactionIndex:t.transactionIndex?at(t.transactionIndex):null,status:t.status?og[t.status]:null,type:t.type?ud[t.type]||t.type:null}}const ag={legacy:"0x0",eip2930:"0x1",eip1559:"0x2"};function Js(t){return{...t,gas:typeof t.gas<"u"?ne(t.gas):void 0,gasPrice:typeof t.gasPrice<"u"?ne(t.gasPrice):void 0,maxFeePerGas:typeof t.maxFeePerGas<"u"?ne(t.maxFeePerGas):void 0,maxPriorityFeePerGas:typeof t.maxPriorityFeePerGas<"u"?ne(t.maxPriorityFeePerGas):void 0,nonce:typeof t.nonce<"u"?ne(t.nonce):void 0,type:typeof t.type<"u"?ag[t.type]:void 0,value:typeof t.value<"u"?ne(t.value):void 0}}class Mi extends ${constructor({address:e}){super(`Address "${e}" is invalid.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAddressError"})}}const cg={gwei:9,wei:18},lg={ether:-9,wei:9},ug={ether:-18,gwei:-9};function us(t,e){let r=t.toString();const n=r.startsWith("-");n&&(r=r.slice(1)),r=r.padStart(e,"0");let[o,i]=[r.slice(0,r.length-e),r.slice(r.length-e)];return i=i.replace(/(0+)$/,""),`${n?"-":""}${o||"0"}${i?`.${i}`:""}`}function ht(t,e="wei"){return us(t,lg[e])}class Dn extends ${constructor({cause:e,message:r}={}){var o;const n=(o=r==null?void 0:r.replace("execution reverted: ",""))==null?void 0:o.replace("execution reverted","");super(`Execution reverted ${n?`with reason: ${n}`:"for an unknown reason"}.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ExecutionRevertedError"})}}Object.defineProperty(Dn,"code",{enumerable:!0,configurable:!0,writable:!0,value:3});Object.defineProperty(Dn,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/execution reverted/});class fs extends ${constructor({cause:e,maxFeePerGas:r}={}){super(`The fee cap (\`maxFeePerGas\`${r?` = ${ht(r)} gwei`:""}) cannot be higher than the maximum allowed value (2^256-1).`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooHigh"})}}Object.defineProperty(fs,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/});class wc extends ${constructor({cause:e,maxFeePerGas:r}={}){super(`The fee cap (\`maxFeePerGas\`${r?` = ${ht(r)}`:""} gwei) cannot be lower than the block base fee.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooLow"})}}Object.defineProperty(wc,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/});class bc extends ${constructor({cause:e,nonce:r}={}){super(`Nonce provided for the transaction ${r?`(${r}) `:""}is higher than the next one expected.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooHighError"})}}Object.defineProperty(bc,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too high/});class mc extends ${constructor({cause:e,nonce:r}={}){super([`Nonce provided for the transaction ${r?`(${r}) `:""}is lower than the current nonce of the account.`,"Try increasing the nonce or find the latest nonce with `getTransactionCount`."].join(`
`),{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooLowError"})}}Object.defineProperty(mc,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too low|transaction already imported|already known/});class yc extends ${constructor({cause:e,nonce:r}={}){super(`Nonce provided for the transaction ${r?`(${r}) `:""}exceeds the maximum allowed nonce.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceMaxValueError"})}}Object.defineProperty(yc,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce has max value/});class vc extends ${constructor({cause:e}={}){super(["The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account."].join(`
`),{cause:e,metaMessages:["This error could arise when the account does not have enough funds to:"," - pay for the total gas fee,"," - pay for the value to send."," ","The cost of the transaction is calculated as `gas * gas fee + value`, where:"," - `gas` is the amount of gas needed for transaction to execute,"," - `gas fee` is the gas fee,"," - `value` is the amount of ether to send to the recipient."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InsufficientFundsError"})}}Object.defineProperty(vc,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/insufficient funds/});class Ac extends ${constructor({cause:e,gas:r}={}){super(`The amount of gas ${r?`(${r}) `:""}provided for the transaction exceeds the limit allowed for the block.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooHighError"})}}Object.defineProperty(Ac,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too high|gas limit reached/});class Cc extends ${constructor({cause:e,gas:r}={}){super(`The amount of gas ${r?`(${r}) `:""}provided for the transaction is too low.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooLowError"})}}Object.defineProperty(Cc,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too low/});class xc extends ${constructor({cause:e}){super("The transaction type is not supported for this chain.",{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionTypeNotSupportedError"})}}Object.defineProperty(xc,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/transaction type not valid/});class ds extends ${constructor({cause:e,maxPriorityFeePerGas:r,maxFeePerGas:n}={}){super([`The provided tip (\`maxPriorityFeePerGas\`${r?` = ${ht(r)} gwei`:""}) cannot be higher than the fee cap (\`maxFeePerGas\`${n?` = ${ht(n)} gwei`:""}).`].join(`
`),{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TipAboveFeeCapError"})}}Object.defineProperty(ds,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max priority fee per gas higher than max fee per gas|tip higher than fee cap/});class Xs extends ${constructor({cause:e}){super(`An error occurred while executing: ${e==null?void 0:e.shortMessage}`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownNodeError"})}}const fg=/^0x[a-fA-F0-9]{40}$/;function Bn(t){return fg.test(t)}function cr(t){return typeof t[0]=="string"?xl(t):dg(t)}function dg(t){let e=0;for(const o of t)e+=o.length;const r=new Uint8Array(e);let n=0;for(const o of t)r.set(o,n),n+=o.length;return r}function xl(t){return`0x${t.reduce((e,r)=>e+r.replace("0x",""),"")}`}function El(t,e="wei"){return us(t,cg[e])}function Co(t){const e=Object.entries(t).map(([n,o])=>o===void 0||o===!1?null:[n,o]).filter(Boolean),r=e.reduce((n,[o])=>Math.max(n,o.length),0);return e.map(([n,o])=>`  ${`${n}:`.padEnd(r+1)}  ${o}`).join(`
`)}class hg extends ${constructor(){super(["Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.","Use `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others."].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeConflictError"})}}class pg extends ${constructor({transaction:e}){super("Cannot infer a transaction type from provided transaction.",{metaMessages:["Provided Transaction:","{",Co(e),"}","","To infer the type, either provide:","- a `type` to the Transaction, or","- an EIP-1559 Transaction with `maxFeePerGas`, or","- an EIP-2930 Transaction with `gasPrice` & `accessList`, or","- a Legacy Transaction with `gasPrice`"]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidSerializableTransactionError"})}}class gg extends ${constructor(e,{account:r,docsPath:n,chain:o,data:i,gas:s,gasPrice:a,maxFeePerGas:c,maxPriorityFeePerGas:l,nonce:d,to:p,value:g}){const w=Co({chain:o&&`${o==null?void 0:o.name} (id: ${o==null?void 0:o.id})`,from:r==null?void 0:r.address,to:p,value:typeof g<"u"&&`${El(g)} ${(o==null?void 0:o.nativeCurrency.symbol)||"ETH"}`,data:i,gas:s,gasPrice:typeof a<"u"&&`${ht(a)} gwei`,maxFeePerGas:typeof c<"u"&&`${ht(c)} gwei`,maxPriorityFeePerGas:typeof l<"u"&&`${ht(l)} gwei`,nonce:d});super(e.shortMessage,{cause:e,docsPath:n,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Request Arguments:",w].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionExecutionError"}),this.cause=e}}class hd extends ${constructor({blockHash:e,blockNumber:r,blockTag:n,hash:o,index:i}){let s="Transaction";n&&i!==void 0&&(s=`Transaction at block time "${n}" at index "${i}"`),e&&i!==void 0&&(s=`Transaction at block hash "${e}" at index "${i}"`),r&&i!==void 0&&(s=`Transaction at block number "${r}" at index "${i}"`),o&&(s=`Transaction with hash "${o}"`),super(`${s} could not be found.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionNotFoundError"})}}class pd extends ${constructor({hash:e}){super(`Transaction receipt with hash "${e}" could not be found. The Transaction may not be processed on a block yet.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionReceiptNotFoundError"})}}class wg extends ${constructor({hash:e}){super(`Timed out while waiting for transaction with hash "${e}" to be confirmed.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WaitForTransactionReceiptTimeoutError"})}}function bg(t){if(t.type)return t.type;if(typeof t.maxFeePerGas<"u"||typeof t.maxPriorityFeePerGas<"u")return"eip1559";if(typeof t.gasPrice<"u")return typeof t.accessList<"u"?"eip2930":"legacy";throw new pg({transaction:t})}const mg=vl({id:5,network:"goerli",name:"Goerli",nativeCurrency:{name:"Goerli Ether",symbol:"ETH",decimals:18},rpcUrls:{alchemy:{http:["https://eth-goerli.g.alchemy.com/v2"],webSocket:["wss://eth-goerli.g.alchemy.com/v2"]},infura:{http:["https://goerli.infura.io/v3"],webSocket:["wss://goerli.infura.io/ws/v3"]},default:{http:["https://rpc.ankr.com/eth_goerli"]},public:{http:["https://rpc.ankr.com/eth_goerli"]}},blockExplorers:{etherscan:{name:"Etherscan",url:"https://goerli.etherscan.io"},default:{name:"Etherscan",url:"https://goerli.etherscan.io"}},contracts:{ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0x56522D00C410a43BFfDF00a9A569489297385790",blockCreated:8765204},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:6507670}},testnet:!0}),yg=vl({id:100,name:"Gnosis",network:"gnosis",nativeCurrency:{decimals:18,name:"Gnosis",symbol:"xDAI"},rpcUrls:{default:{http:["https://rpc.gnosischain.com"]},public:{http:["https://rpc.gnosischain.com"]}},blockExplorers:{etherscan:{name:"Gnosisscan",url:"https://gnosisscan.io"},default:{name:"Gnosis Chain Explorer",url:"https://blockscout.com/xdai/mainnet"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:21022491}}}),Di=vl({id:1,network:"homestead",name:"Ethereum",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{alchemy:{http:["https://eth-mainnet.g.alchemy.com/v2"],webSocket:["wss://eth-mainnet.g.alchemy.com/v2"]},infura:{http:["https://mainnet.infura.io/v3"],webSocket:["wss://mainnet.infura.io/ws/v3"]},default:{http:["https://cloudflare-eth.com"]},public:{http:["https://cloudflare-eth.com"]}},blockExplorers:{etherscan:{name:"Etherscan",url:"https://etherscan.io"},default:{name:"Etherscan",url:"https://etherscan.io"}},contracts:{ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0xc0497E381f536Be9ce14B0dD3817cBcAe57d2F62",blockCreated:16966585},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:14353601}}});var gd=class extends Error{constructor({chainId:t,connectorId:e}){super(`Chain "${t}" not configured for connector "${e}".`),this.name="ChainNotConfiguredForConnectorError"}},Qr=class extends Error{constructor(){super(...arguments),this.name="ConnectorNotFoundError",this.message="Connector not found"}};function hs(t){return typeof t=="string"?Number.parseInt(t,t.trim().substring(0,2)==="0x"?16:10):typeof t=="bigint"?Number(t):t}var yC=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function vg(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function wd(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var r=function n(){return this instanceof n?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};r.prototype=e.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(t).forEach(function(n){var o=Object.getOwnPropertyDescriptor(t,n);Object.defineProperty(r,n,o.get?o:{enumerable:!0,get:function(){return t[n]}})}),r}var bd={exports:{}};(function(t){var e=Object.prototype.hasOwnProperty,r="~";function n(){}Object.create&&(n.prototype=Object.create(null),new n().__proto__||(r=!1));function o(c,l,d){this.fn=c,this.context=l,this.once=d||!1}function i(c,l,d,p,g){if(typeof d!="function")throw new TypeError("The listener must be a function");var w=new o(d,p||c,g),b=r?r+l:l;return c._events[b]?c._events[b].fn?c._events[b]=[c._events[b],w]:c._events[b].push(w):(c._events[b]=w,c._eventsCount++),c}function s(c,l){--c._eventsCount===0?c._events=new n:delete c._events[l]}function a(){this._events=new n,this._eventsCount=0}a.prototype.eventNames=function(){var l=[],d,p;if(this._eventsCount===0)return l;for(p in d=this._events)e.call(d,p)&&l.push(r?p.slice(1):p);return Object.getOwnPropertySymbols?l.concat(Object.getOwnPropertySymbols(d)):l},a.prototype.listeners=function(l){var d=r?r+l:l,p=this._events[d];if(!p)return[];if(p.fn)return[p.fn];for(var g=0,w=p.length,b=new Array(w);g<w;g++)b[g]=p[g].fn;return b},a.prototype.listenerCount=function(l){var d=r?r+l:l,p=this._events[d];return p?p.fn?1:p.length:0},a.prototype.emit=function(l,d,p,g,w,b){var A=r?r+l:l;if(!this._events[A])return!1;var y=this._events[A],S=arguments.length,m,_;if(y.fn){switch(y.once&&this.removeListener(l,y.fn,void 0,!0),S){case 1:return y.fn.call(y.context),!0;case 2:return y.fn.call(y.context,d),!0;case 3:return y.fn.call(y.context,d,p),!0;case 4:return y.fn.call(y.context,d,p,g),!0;case 5:return y.fn.call(y.context,d,p,g,w),!0;case 6:return y.fn.call(y.context,d,p,g,w,b),!0}for(_=1,m=new Array(S-1);_<S;_++)m[_-1]=arguments[_];y.fn.apply(y.context,m)}else{var x=y.length,E;for(_=0;_<x;_++)switch(y[_].once&&this.removeListener(l,y[_].fn,void 0,!0),S){case 1:y[_].fn.call(y[_].context);break;case 2:y[_].fn.call(y[_].context,d);break;case 3:y[_].fn.call(y[_].context,d,p);break;case 4:y[_].fn.call(y[_].context,d,p,g);break;default:if(!m)for(E=1,m=new Array(S-1);E<S;E++)m[E-1]=arguments[E];y[_].fn.apply(y[_].context,m)}}return!0},a.prototype.on=function(l,d,p){return i(this,l,d,p,!1)},a.prototype.once=function(l,d,p){return i(this,l,d,p,!0)},a.prototype.removeListener=function(l,d,p,g){var w=r?r+l:l;if(!this._events[w])return this;if(!d)return s(this,w),this;var b=this._events[w];if(b.fn)b.fn===d&&(!g||b.once)&&(!p||b.context===p)&&s(this,w);else{for(var A=0,y=[],S=b.length;A<S;A++)(b[A].fn!==d||g&&!b[A].once||p&&b[A].context!==p)&&y.push(b[A]);y.length?this._events[w]=y.length===1?y[0]:y:s(this,w)}return this},a.prototype.removeAllListeners=function(l){var d;return l?(d=r?r+l:l,this._events[d]&&s(this,d)):(this._events=new n,this._eventsCount=0),this},a.prototype.off=a.prototype.removeListener,a.prototype.addListener=a.prototype.on,a.prefixed=r,a.EventEmitter=a,t.exports=a})(bd);var Ag=bd.exports;const Cg=vg(Ag);var _l=(t,e,r)=>{if(!e.has(t))throw TypeError("Cannot "+r)},xe=(t,e,r)=>(_l(t,e,"read from private field"),r?r.call(t):e.get(t)),ut=(t,e,r)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,r)},$i=(t,e,r,n)=>(_l(t,e,"write to private field"),n?n.call(t,r):e.set(t,r),r),Qe=(t,e,r)=>(_l(t,e,"access private method"),r),Sl=class extends Cg{constructor({chains:t=[Di,mg],options:e}){super(),this.chains=t,this.options=e}getBlockExplorerUrls(t){const{default:e,...r}=t.blockExplorers??{};if(e)return[e.url,...Object.values(r).map(n=>n.url)]}isChainUnsupported(t){return!this.chains.some(e=>e.id===t)}setStorage(t){this.storage=t}};function $r(t,{includeName:e=!1}={}){if(t.type!=="function"&&t.type!=="event"&&t.type!=="error")throw new Ng(t.type);return`${t.name}(${ea(t.inputs,{includeName:e})})`}function ea(t,{includeName:e=!1}={}){return t?t.map(r=>xg(r,{includeName:e})).join(e?", ":","):""}function xg(t,{includeName:e}){return t.type.startsWith("tuple")?`(${ea(t.components,{includeName:e})})${t.type.slice(5)}`:t.type+(e&&t.name?` ${t.name}`:"")}class Eg extends ${constructor({docsPath:e}){super(["A constructor was not found on the ABI.","Make sure you are using the correct ABI and that the constructor exists on it."].join(`
`),{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiConstructorNotFoundError"})}}class u0 extends ${constructor({docsPath:e}){super(["Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.","Make sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists."].join(`
`),{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiConstructorParamsNotFoundError"})}}class Dl extends ${constructor({data:e,params:r,size:n}){super([`Data size of ${n} bytes is too small for given parameters.`].join(`
`),{metaMessages:[`Params: (${ea(r,{includeName:!0})})`,`Data:   ${e} (${n} bytes)`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingDataSizeTooSmallError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=e,this.params=r,this.size=n}}class ta extends ${constructor(){super('Cannot decode zero data ("0x") with ABI parameters.'),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingZeroDataError"})}}class _g extends ${constructor({expectedLength:e,givenLength:r,type:n}){super([`ABI encoding array length mismatch for type ${n}.`,`Expected length: ${e}`,`Given length: ${r}`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingArrayLengthMismatchError"})}}class Sg extends ${constructor({expectedSize:e,value:r}){super(`Size of bytes "${r}" (bytes${ze(r)}) does not match expected size (bytes${e}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingBytesSizeMismatchError"})}}class Dg extends ${constructor({expectedLength:e,givenLength:r}){super(["ABI encoding params/values length mismatch.",`Expected length (params): ${e}`,`Given length (values): ${r}`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingLengthMismatchError"})}}class md extends ${constructor(e,{docsPath:r}){super([`Encoded error signature "${e}" not found on ABI.`,"Make sure you are using the correct ABI and that the error exists on it.",`You can look up the decoded signature here: https://openchain.xyz/signatures?query=${e}.`].join(`
`),{docsPath:r}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiErrorSignatureNotFoundError"}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.signature=e}}class Pg extends ${constructor({docsPath:e}){super("Cannot extract event signature from empty topics.",{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventSignatureEmptyTopicsError"})}}class Ig extends ${constructor(e,{docsPath:r}){super([`Encoded event signature "${e}" not found on ABI.`,"Make sure you are using the correct ABI and that the event exists on it.",`You can look up the signature here: https://openchain.xyz/signatures?query=${e}.`].join(`
`),{docsPath:r}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventSignatureNotFoundError"})}}class f0 extends ${constructor(e,{docsPath:r}={}){super([`Event ${e?`"${e}" `:""}not found on ABI.`,"Make sure you are using the correct ABI and that the event exists on it."].join(`
`),{docsPath:r}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventNotFoundError"})}}class ps extends ${constructor(e,{docsPath:r}={}){super([`Function ${e?`"${e}" `:""}not found on ABI.`,"Make sure you are using the correct ABI and that the function exists on it."].join(`
`),{docsPath:r}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionNotFoundError"})}}class Tg extends ${constructor(e,{docsPath:r}){super([`Function "${e}" does not contain any \`outputs\` on ABI.`,"Cannot decode function result without knowing what the parameter types are.","Make sure you are using the correct ABI and that the function exists on it."].join(`
`),{docsPath:r}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionOutputsNotFoundError"})}}class Bg extends ${constructor({expectedSize:e,givenSize:r}){super(`Expected bytes${e}, got bytes${r}.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BytesSizeMismatchError"})}}class tn extends ${constructor({abiItem:e,data:r,params:n,size:o}){super([`Data size of ${o} bytes is too small for non-indexed event parameters.`].join(`
`),{metaMessages:[`Params: (${ea(n,{includeName:!0})})`,`Data:   ${r} (${o} bytes)`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DecodeLogDataMismatch"}),Object.defineProperty(this,"abiItem",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.abiItem=e,this.data=r,this.params=n,this.size=o}}class Xn extends ${constructor({abiItem:e,param:r}){super([`Expected a topic for indexed event parameter${r.name?` "${r.name}"`:""} on event "${$r(e,{includeName:!0})}".`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DecodeLogTopicsMismatch"}),Object.defineProperty(this,"abiItem",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.abiItem=e}}class Og extends ${constructor(e,{docsPath:r}){super([`Type "${e}" is not a valid encoding type.`,"Please provide a valid ABI type."].join(`
`),{docsPath:r}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiEncodingType"})}}class kg extends ${constructor(e,{docsPath:r}){super([`Type "${e}" is not a valid decoding type.`,"Please provide a valid ABI type."].join(`
`),{docsPath:r}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiDecodingType"})}}class Rg extends ${constructor(e){super([`Value "${e}" is not a valid array.`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidArrayError"})}}class Ng extends ${constructor(e){super([`"${e}" is not a valid definition type.`,'Valid types: "function", "event", "error"'].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidDefinitionTypeError"})}}class Mg extends ${constructor(e){super(`Filter type "${e}" is not supported.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FilterTypeNotSupportedError"})}}const $g=/((function|event)\s)?(.*)(\((.*)\))/;function yd(t){const e=t.match($g),r=(e==null?void 0:e[2])||void 0,n=e==null?void 0:e[3],o=(e==null?void 0:e[5])||void 0;return{type:r,name:n,params:o}}function Ug(t){return yd(t).name}function Fg(t){const e=yd(t).params,r=e==null?void 0:e.split(",").map(n=>n.trim().split(" "));return r==null?void 0:r.map(n=>({type:n[0],name:n[1]==="indexed"?n[2]:n[1],...n[1]==="indexed"?{indexed:!0}:{}}))}const vd=t=>{if(typeof t=="string"){const e=Ug(t),r=Fg(t)||[];return`${e}(${r.map(({type:n})=>n).join(",")})`}return $r(t)},Lg=t=>vd(t);function d0(t){if(!Number.isSafeInteger(t)||t<0)throw new Error(`Wrong positive integer: ${t}`)}function Ad(t,...e){if(!(t instanceof Uint8Array))throw new Error("Expected Uint8Array");if(e.length>0&&!e.includes(t.length))throw new Error(`Expected Uint8Array of length ${e}, not of length=${t.length}`)}function h0(t,e=!0){if(t.destroyed)throw new Error("Hash instance has been destroyed");if(e&&t.finished)throw new Error("Hash#digest() has already been called")}function jg(t,e){Ad(t);const r=e.outputLen;if(t.length<r)throw new Error(`digestInto() expects output buffer of length at least ${r}`)}const Go=BigInt(2**32-1),p0=BigInt(32);function Wg(t,e=!1){return e?{h:Number(t&Go),l:Number(t>>p0&Go)}:{h:Number(t>>p0&Go)|0,l:Number(t&Go)|0}}function zg(t,e=!1){let r=new Uint32Array(t.length),n=new Uint32Array(t.length);for(let o=0;o<t.length;o++){const{h:i,l:s}=Wg(t[o],e);[r[o],n[o]]=[i,s]}return[r,n]}const Hg=(t,e,r)=>t<<r|e>>>32-r,Gg=(t,e,r)=>e<<r|t>>>32-r,Vg=(t,e,r)=>e<<r-32|t>>>64-r,qg=(t,e,r)=>t<<r-32|e>>>64-r;/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */const Qg=t=>t instanceof Uint8Array,Kg=t=>new Uint32Array(t.buffer,t.byteOffset,Math.floor(t.byteLength/4)),Zg=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;if(!Zg)throw new Error("Non little-endian hardware is not supported");function Yg(t){if(typeof t!="string")throw new Error(`utf8ToBytes expected string, got ${typeof t}`);return new Uint8Array(new TextEncoder().encode(t))}function Cd(t){if(typeof t=="string"&&(t=Yg(t)),!Qg(t))throw new Error(`expected Uint8Array, got ${typeof t}`);return t}class Jg{clone(){return this._cloneInto()}}function Xg(t){const e=n=>t().update(Cd(n)).digest(),r=t();return e.outputLen=r.outputLen,e.blockLen=r.blockLen,e.create=()=>t(),e}const[xd,Ed,_d]=[[],[],[]],ew=BigInt(0),pi=BigInt(1),tw=BigInt(2),rw=BigInt(7),nw=BigInt(256),iw=BigInt(113);for(let t=0,e=pi,r=1,n=0;t<24;t++){[r,n]=[n,(2*r+3*n)%5],xd.push(2*(5*n+r)),Ed.push((t+1)*(t+2)/2%64);let o=ew;for(let i=0;i<7;i++)e=(e<<pi^(e>>rw)*iw)%nw,e&tw&&(o^=pi<<(pi<<BigInt(i))-pi);_d.push(o)}const[ow,sw]=zg(_d,!0),g0=(t,e,r)=>r>32?Vg(t,e,r):Hg(t,e,r),w0=(t,e,r)=>r>32?qg(t,e,r):Gg(t,e,r);function aw(t,e=24){const r=new Uint32Array(10);for(let n=24-e;n<24;n++){for(let s=0;s<10;s++)r[s]=t[s]^t[s+10]^t[s+20]^t[s+30]^t[s+40];for(let s=0;s<10;s+=2){const a=(s+8)%10,c=(s+2)%10,l=r[c],d=r[c+1],p=g0(l,d,1)^r[a],g=w0(l,d,1)^r[a+1];for(let w=0;w<50;w+=10)t[s+w]^=p,t[s+w+1]^=g}let o=t[2],i=t[3];for(let s=0;s<24;s++){const a=Ed[s],c=g0(o,i,a),l=w0(o,i,a),d=xd[s];o=t[d],i=t[d+1],t[d]=c,t[d+1]=l}for(let s=0;s<50;s+=10){for(let a=0;a<10;a++)r[a]=t[s+a];for(let a=0;a<10;a++)t[s+a]^=~r[(a+2)%10]&r[(a+4)%10]}t[0]^=ow[n],t[1]^=sw[n]}r.fill(0)}class Pl extends Jg{constructor(e,r,n,o=!1,i=24){if(super(),this.blockLen=e,this.suffix=r,this.outputLen=n,this.enableXOF=o,this.rounds=i,this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,d0(n),0>=this.blockLen||this.blockLen>=200)throw new Error("Sha3 supports only keccak-f1600 function");this.state=new Uint8Array(200),this.state32=Kg(this.state)}keccak(){aw(this.state32,this.rounds),this.posOut=0,this.pos=0}update(e){h0(this);const{blockLen:r,state:n}=this;e=Cd(e);const o=e.length;for(let i=0;i<o;){const s=Math.min(r-this.pos,o-i);for(let a=0;a<s;a++)n[this.pos++]^=e[i++];this.pos===r&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;const{state:e,suffix:r,pos:n,blockLen:o}=this;e[n]^=r,r&128&&n===o-1&&this.keccak(),e[o-1]^=128,this.keccak()}writeInto(e){h0(this,!1),Ad(e),this.finish();const r=this.state,{blockLen:n}=this;for(let o=0,i=e.length;o<i;){this.posOut>=n&&this.keccak();const s=Math.min(n-this.posOut,i-o);e.set(r.subarray(this.posOut,this.posOut+s),o),this.posOut+=s,o+=s}return e}xofInto(e){if(!this.enableXOF)throw new Error("XOF is not possible for this instance");return this.writeInto(e)}xof(e){return d0(e),this.xofInto(new Uint8Array(e))}digestInto(e){if(jg(e,this),this.finished)throw new Error("digest() was already called");return this.writeInto(e),this.destroy(),e}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,this.state.fill(0)}_cloneInto(e){const{blockLen:r,suffix:n,outputLen:o,rounds:i,enableXOF:s}=this;return e||(e=new Pl(r,n,o,s,i)),e.state32.set(this.state32),e.pos=this.pos,e.posOut=this.posOut,e.finished=this.finished,e.rounds=i,e.suffix=n,e.outputLen=o,e.enableXOF=s,e.destroyed=this.destroyed,e}}const cw=(t,e,r)=>Xg(()=>new Pl(e,t,r)),lw=cw(1,136,256/8);function st(t,e){const r=e||"hex",n=lw(Kt(t,{strict:!1})?Dr(t):t);return r==="bytes"?n:dr(n)}const uw=t=>st(Dr(t)),Il=t=>uw(Lg(t));function je(t,e,r,{strict:n}={}){return Kt(t,{strict:!1})?dw(t,e,r,{strict:n}):fw(t,e,r,{strict:n})}function Sd(t,e){if(typeof e=="number"&&e>0&&e>ze(t)-1)throw new sd({offset:e,position:"start",size:ze(t)})}function Dd(t,e,r){if(typeof e=="number"&&typeof r=="number"&&ze(t)!==r-e)throw new sd({offset:r,position:"end",size:ze(t)})}function fw(t,e,r,{strict:n}={}){Sd(t,e);const o=t.slice(e,r);return n&&Dd(o,e,r),o}function dw(t,e,r,{strict:n}={}){Sd(t,e);const o=`0x${t.replace("0x","").slice((e??0)*2,(r??t.length)*2)}`;return n&&Dd(o,e,r),o}function xo(t,e){if(t.length!==e.length)throw new Dg({expectedLength:t.length,givenLength:e.length});const r=hw({params:t,values:e}),n=Bl(r);return n.length===0?"0x":n}function hw({params:t,values:e}){const r=[];for(let n=0;n<t.length;n++)r.push(Tl({param:t[n],value:e[n]}));return r}function Tl({param:t,value:e}){const r=ra(t.type);if(r){const[n,o]=r;return gw(e,{length:n,param:{...t,type:o}})}if(t.type==="tuple")return vw(e,{param:t});if(t.type==="address")return pw(e);if(t.type==="bool")return bw(e);if(t.type.startsWith("uint")||t.type.startsWith("int")){const n=t.type.startsWith("int");return mw(e,{signed:n})}if(t.type.startsWith("bytes"))return ww(e,{param:t});if(t.type==="string")return yw(e);throw new Og(t.type,{docsPath:"/docs/contract/encodeAbiParameters"})}function Bl(t){let e=0;for(let i=0;i<t.length;i++){const{dynamic:s,encoded:a}=t[i];s?e+=32:e+=ze(a)}const r=[],n=[];let o=0;for(let i=0;i<t.length;i++){const{dynamic:s,encoded:a}=t[i];s?(r.push(ne(e+o,{size:32})),n.push(a),o+=ze(a)):r.push(a)}return cr([...r,...n])}function pw(t){if(!Bn(t))throw new Mi({address:t});return{dynamic:!1,encoded:xr(t.toLowerCase())}}function gw(t,{length:e,param:r}){const n=e===null;if(!Array.isArray(t))throw new Rg(t);if(!n&&t.length!==e)throw new _g({expectedLength:e,givenLength:t.length,type:`${r.type}[${e}]`});let o=!1;const i=[];for(let s=0;s<t.length;s++){const a=Tl({param:r,value:t[s]});a.dynamic&&(o=!0),i.push(a)}if(n||o){const s=Bl(i);if(n){const a=ne(i.length,{size:32});return{dynamic:!0,encoded:i.length>0?cr([a,s]):a}}if(o)return{dynamic:!0,encoded:s}}return{dynamic:!1,encoded:cr(i.map(({encoded:s})=>s))}}function ww(t,{param:e}){const[,r]=e.type.split("bytes"),n=ze(t);if(!r){let o=t;return n%32!==0&&(o=xr(o,{dir:"right",size:Math.ceil((t.length-2)/2/32)*32})),{dynamic:!0,encoded:cr([xr(ne(n,{size:32})),o])}}if(n!==parseInt(r))throw new Sg({expectedSize:parseInt(r),value:t});return{dynamic:!1,encoded:xr(t,{dir:"right"})}}function bw(t){return{dynamic:!1,encoded:xr(cd(t))}}function mw(t,{signed:e}){return{dynamic:!1,encoded:ne(t,{size:32,signed:e})}}function yw(t){const e=Al(t),r=Math.ceil(ze(e)/32),n=[];for(let o=0;o<r;o++)n.push(xr(je(e,o*32,(o+1)*32),{dir:"right"}));return{dynamic:!0,encoded:cr([xr(ne(ze(e),{size:32})),...n])}}function vw(t,{param:e}){let r=!1;const n=[];for(let o=0;o<e.components.length;o++){const i=e.components[o],s=Array.isArray(t)?o:i.name,a=Tl({param:i,value:t[s]});n.push(a),a.dynamic&&(r=!0)}return{dynamic:r,encoded:r?Bl(n):cr(n.map(({encoded:o})=>o))}}function ra(t){const e=t.match(/^(.*)\[(\d+)?\]$/);return e?[e[2]?Number(e[2]):null,e[1]]:void 0}const Aw=t=>st(Dr(t)),Ol=t=>je(Aw(vd(t)),0,4);function Eo({abi:t,args:e=[],name:r}){const n=Kt(r,{strict:!1}),o=t.filter(i=>n?i.type==="function"?Ol(i)===r:i.type==="event"?Il(i)===r:!1:"name"in i&&i.name===r);if(o.length!==0){if(o.length===1)return o[0];for(const i of o){if(!("inputs"in i))continue;if(!e||e.length===0){if(!i.inputs||i.inputs.length===0)return i;continue}if(!i.inputs||i.inputs.length===0||i.inputs.length!==e.length)continue;if(e.every((a,c)=>{const l="inputs"in i&&i.inputs[c];return l?Ec(a,l):!1}))return i}return o[0]}}function Ec(t,e){const r=typeof t,n=e.type;switch(n){case"address":return Bn(t);case"bool":return r==="boolean";case"function":return r==="string";case"string":return r==="string";default:return n==="tuple"&&"components"in e?Object.values(e.components).every((o,i)=>Ec(Object.values(t)[i],o)):/^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(n)?r==="number"||r==="bigint":/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(n)?r==="string"||t instanceof Uint8Array:/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(n)?Array.isArray(t)&&t.every(o=>Ec(o,{...e,type:n.replace(/(\[[0-9]{0,}\])$/,"")})):!1}}function _o({abi:t,eventName:e,args:r}){var a;let n=t[0];if(e&&(n=Eo({abi:t,args:r,name:e}),!n))throw new f0(e,{docsPath:"/docs/contract/encodeEventTopics"});if(n.type!=="event")throw new f0(void 0,{docsPath:"/docs/contract/encodeEventTopics"});const o=$r(n),i=Il(o);let s=[];if(r&&"inputs"in n){const c=(a=n.inputs)==null?void 0:a.filter(d=>"indexed"in d&&d.indexed),l=Array.isArray(r)?r:Object.values(r).length>0?(c==null?void 0:c.map(d=>r[d.name]))??[]:[];l.length>0&&(s=(c==null?void 0:c.map((d,p)=>Array.isArray(l[p])?l[p].map((g,w)=>b0({param:d,value:l[p][w]})):l[p]?b0({param:d,value:l[p]}):null))??[])}return[i,...s]}function b0({param:t,value:e}){if(t.type==="string"||t.type==="bytes")return st(Dr(e));if(t.type==="tuple"||t.type.match(/^(.*)\[(\d+)?\]$/))throw new Mg(t.type);return xo([t],[e])}function na(t,{method:e}){var n,o;const r={};return t.transport.type==="fallback"&&((o=(n=t.transport).onResponse)==null||o.call(n,({method:i,response:s,status:a,transport:c})=>{a==="success"&&e===i&&(r[s]=c.request)})),i=>r[i]||t.request}async function Pd(t,{address:e,abi:r,args:n,eventName:o,fromBlock:i,strict:s,toBlock:a}){const c=na(t,{method:"eth_newFilter"}),l=o?_o({abi:r,args:n,eventName:o}):void 0,d=await t.request({method:"eth_newFilter",params:[{address:e,fromBlock:typeof i=="bigint"?ne(i):i,toBlock:typeof a=="bigint"?ne(a):a,topics:l}]});return{abi:r,args:n,eventName:o,id:d,request:c(d),strict:s,type:"event"}}function It(t){return typeof t=="string"?{address:t,type:"json-rpc"}:t}function Ur({abi:t,args:e,functionName:r}){let n=t[0];if(r&&(n=Eo({abi:t,args:e,name:r}),!n))throw new ps(r,{docsPath:"/docs/contract/encodeFunctionData"});if(n.type!=="function")throw new ps(void 0,{docsPath:"/docs/contract/encodeFunctionData"});const o=$r(n),i=Ol(o),s="inputs"in n&&n.inputs?xo(n.inputs,e??[]):void 0;return xl([i,s??"0x"])}const Id={1:"An `assert` condition failed.",17:"Arithmic operation resulted in underflow or overflow.",18:"Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",33:"Attempted to convert to an invalid type.",34:"Attempted to access a storage byte array that is incorrectly encoded.",49:"Performed `.pop()` on an empty array",50:"Array index is out of bounds.",65:"Allocated too much memory or created an array which is too large.",81:"Attempted to call a zero-initialized variable of internal function type."},Cw={inputs:[{name:"message",type:"string"}],name:"Error",type:"error"},xw={inputs:[{name:"reason",type:"uint256"}],name:"Panic",type:"error"};function kl(t,e){const r=e?`${e}${t.toLowerCase()}`:t.substring(2).toLowerCase(),n=st(ar(r),"bytes"),o=(e?r.substring(`${e}0x`.length):r).split("");for(let i=0;i<40;i+=2)n[i>>1]>>4>=8&&o[i]&&(o[i]=o[i].toUpperCase()),(n[i>>1]&15)>=8&&o[i+1]&&(o[i+1]=o[i+1].toUpperCase());return`0x${o.join("")}`}function $t(t,e){if(!Bn(t))throw new Mi({address:t});return kl(t,e)}function ia(t,e){if(e==="0x"&&t.length>0)throw new ta;if(ze(e)&&ze(e)<32)throw new Dl({data:e,params:t,size:ze(e)});return Ew({data:e,params:t})}function Ew({data:t,params:e}){const r=[];let n=0;for(let o=0;o<e.length;o++){if(n>=ze(t))throw new Dl({data:t,params:e,size:ze(t)});const i=e[o],{consumed:s,value:a}=Pn({data:t,param:i,position:n});r.push(a),n+=s}return r}function Pn({data:t,param:e,position:r}){const n=ra(e.type);if(n){const[i,s]=n;return Sw(t,{length:i,param:{...e,type:s},position:r})}if(e.type==="tuple")return Bw(t,{param:e,position:r});if(e.type==="string")return Tw(t,{position:r});if(e.type.startsWith("bytes"))return Pw(t,{param:e,position:r});const o=je(t,r,r+32,{strict:!0});if(e.type.startsWith("uint")||e.type.startsWith("int"))return Iw(o,{param:e});if(e.type==="address")return _w(o);if(e.type==="bool")return Dw(o);throw new kg(e.type,{docsPath:"/docs/contract/decodeAbiParameters"})}function _w(t){return{consumed:32,value:kl(je(t,-20))}}function Sw(t,{param:e,length:r,position:n}){if(!r){const s=at(je(t,n,n+32,{strict:!0})),a=at(je(t,s,s+32,{strict:!0}));let c=0;const l=[];for(let d=0;d<a;++d){const p=Pn({data:je(t,s+32),param:e,position:c});c+=p.consumed,l.push(p.value)}return{value:l,consumed:32}}if(gs(e)){const s=ra(e.type),a=!(s!=null&&s[0]);let c=0;const l=[];for(let d=0;d<r;++d){const p=at(je(t,n,n+32,{strict:!0})),g=Pn({data:je(t,p),param:e,position:a?c:d*32});c+=g.consumed,l.push(g.value)}return{value:l,consumed:32}}let o=0;const i=[];for(let s=0;s<r;++s){const a=Pn({data:t,param:e,position:n+o});o+=a.consumed,i.push(a.value)}return{value:i,consumed:o}}function Dw(t){return{consumed:32,value:ig(t)}}function Pw(t,{param:e,position:r}){const[n,o]=e.type.split("bytes");if(!o){const s=at(je(t,r,r+32,{strict:!0})),a=at(je(t,s,s+32,{strict:!0}));return a===0?{consumed:32,value:"0x"}:{consumed:32,value:je(t,s+32,s+32+a,{strict:!0})}}return{consumed:32,value:je(t,r,r+parseInt(o),{strict:!0})}}function Iw(t,{param:e}){const r=e.type.startsWith("int");return{consumed:32,value:parseInt(e.type.split("int")[1]||"256")>48?Ys(t,{signed:r}):at(t,{signed:r})}}function Tw(t,{position:e}){const r=at(je(t,e,e+32,{strict:!0})),n=at(je(t,r,r+32,{strict:!0}));return n===0?{consumed:32,value:""}:{consumed:32,value:ld(Jr(je(t,r+32,r+32+n,{strict:!0})))}}function Bw(t,{param:e,position:r}){const n=e.components.length===0||e.components.some(({name:s})=>!s),o=n?[]:{};let i=0;if(gs(e)){const s=at(je(t,r,r+32,{strict:!0}));for(let a=0;a<e.components.length;++a){const c=e.components[a],l=Pn({data:je(t,s),param:c,position:i});i+=l.consumed,o[n?a:c==null?void 0:c.name]=l.value}return{consumed:32,value:o}}for(let s=0;s<e.components.length;++s){const a=e.components[s],c=Pn({data:t,param:a,position:r+i});i+=c.consumed,o[n?s:a==null?void 0:a.name]=c.value}return{consumed:i,value:o}}function gs(t){var n;const{type:e}=t;if(e==="string"||e==="bytes"||e.endsWith("[]"))return!0;if(e==="tuple")return(n=t.components)==null?void 0:n.some(gs);const r=ra(t.type);return!!(r&&gs({...t,type:r[1]}))}function Ow({abi:t,data:e}){const r=je(e,0,4);if(r==="0x")throw new ta;const o=[...t||[],Cw,xw].find(i=>i.type==="error"&&r===Ol($r(i)));if(!o)throw new md(r,{docsPath:"/docs/contract/decodeErrorResult"});return{abiItem:o,args:"inputs"in o&&o.inputs&&o.inputs.length>0?ia(o.inputs,je(e,4)):void 0,errorName:o.name}}const ct=(t,e,r)=>JSON.stringify(t,(n,o)=>{const i=typeof o=="bigint"?o.toString():o;return typeof e=="function"?e(n,i):i},r);function Td({abiItem:t,args:e,includeFunctionName:r=!0,includeName:n=!1}){if("name"in t&&"inputs"in t&&t.inputs)return`${r?t.name:""}(${t.inputs.map((o,i)=>`${n&&o.name?`${o.name}: `:""}${typeof e[i]=="object"?ct(e[i]):e[i]}`).join(", ")})`}class Bd extends ${constructor(e,{account:r,docsPath:n,chain:o,data:i,gas:s,gasPrice:a,maxFeePerGas:c,maxPriorityFeePerGas:l,nonce:d,to:p,value:g}){const w=r?It(r):void 0,b=Co({from:w==null?void 0:w.address,to:p,value:typeof g<"u"&&`${El(g)} ${(o==null?void 0:o.nativeCurrency.symbol)||"ETH"}`,data:i,gas:s,gasPrice:typeof a<"u"&&`${ht(a)} gwei`,maxFeePerGas:typeof c<"u"&&`${ht(c)} gwei`,maxPriorityFeePerGas:typeof l<"u"&&`${ht(l)} gwei`,nonce:d});super(e.shortMessage,{cause:e,docsPath:n,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Raw Call Arguments:",b].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"CallExecutionError"}),this.cause=e}}class Rl extends ${constructor(e,{abi:r,args:n,contractAddress:o,docsPath:i,functionName:s,sender:a}){const c=Eo({abi:r,args:n,name:s}),l=c?Td({abiItem:c,args:n,includeFunctionName:!1,includeName:!1}):void 0,d=c?$r(c,{includeName:!0}):void 0,p=Co({address:o&&Gp(o),function:d,args:l&&l!=="()"&&`${[...Array((s==null?void 0:s.length)??0).keys()].map(()=>" ").join("")}${l}`,sender:a});super(e.shortMessage||`An unknown error occurred while executing the contract function "${s}".`,{cause:e,docsPath:i,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Contract Call:",p].filter(Boolean)}),Object.defineProperty(this,"abi",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"args",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"contractAddress",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"formattedArgs",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"functionName",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"sender",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionExecutionError"}),this.abi=r,this.args=n,this.cause=e,this.contractAddress=o,this.functionName=s,this.sender=a}}class _c extends ${constructor({abi:e,data:r,functionName:n,message:o}){let i,s,a,c;if(r&&r!=="0x")try{s=Ow({abi:e,data:r});const{abiItem:d,errorName:p,args:g}=s;if(p==="Error")c=g[0];else if(p==="Panic"){const[w]=g;c=Id[w]}else{const w=d?$r(d,{includeName:!0}):void 0,b=d&&g?Td({abiItem:d,args:g,includeFunctionName:!1,includeName:!1}):void 0;a=[w?`Error: ${w}`:"",b&&b!=="()"?`       ${[...Array((p==null?void 0:p.length)??0).keys()].map(()=>" ").join("")}${b}`:""]}}catch(d){i=d}else o&&(c=o);let l;i instanceof md&&(l=i.signature,a=[`Unable to decode signature "${l}" as it was not found on the provided ABI.`,"Make sure you are using the correct ABI and that the error exists on it.",`You can look up the decoded signature here: https://openchain.xyz/signatures?query=${l}.`]),super(c&&c!=="execution reverted"||l?[`The contract function "${n}" reverted with the following ${l?"signature":"reason"}:`,c||l].join(`
`):`The contract function "${n}" reverted.`,{cause:i,metaMessages:a}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionRevertedError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"reason",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=s,this.reason=c,this.signature=l}}class kw extends ${constructor({functionName:e}){super(`The contract function "${e}" returned no data ("0x").`,{metaMessages:["This could be due to any of the following:",`  - The contract does not have the function "${e}",`,"  - The parameters passed to the contract function may be invalid, or","  - The address is not a contract."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionZeroDataError"})}}class Nl extends ${constructor({data:e,message:r}){super(r||""),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:3}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RawContractError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=e}}class Pi extends ${constructor({body:e,details:r,headers:n,status:o,url:i}){super("HTTP request failed.",{details:r,metaMessages:[o&&`Status: ${o}`,`URL: ${Zs(i)}`,e&&`Request body: ${ct(e)}`].filter(Boolean)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"HttpRequestError"}),Object.defineProperty(this,"body",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"headers",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"status",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"url",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.body=e,this.headers=n,this.status=o,this.url=i}}class Rw extends ${constructor({body:e,details:r,url:n}){super("WebSocket request failed.",{details:r,metaMessages:[`URL: ${Zs(n)}`,`Request body: ${ct(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WebSocketRequestError"})}}class Ml extends ${constructor({body:e,error:r,url:n}){super("RPC Request failed.",{cause:r,details:r.message,metaMessages:[`URL: ${Zs(n)}`,`Request body: ${ct(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcRequestError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.code=r.code}}class Sc extends ${constructor({body:e,url:r}){super("The request took too long to respond.",{details:"The request timed out.",metaMessages:[`URL: ${Zs(r)}`,`Request body: ${ct(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TimeoutError"})}}const Nw=-1;class wt extends ${constructor(e,{code:r,docsPath:n,metaMessages:o,shortMessage:i}){super(i,{cause:e,docsPath:n,metaMessages:o||(e==null?void 0:e.metaMessages)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.name=e.name,this.code=e instanceof Ml?e.code:r??Nw}}class ei extends wt{constructor(e,r){super(e,r),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderRpcError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=r.data}}class Ui extends wt{constructor(e){super(e,{code:Ui.code,shortMessage:"Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ParseRpcError"})}}Object.defineProperty(Ui,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32700});class Fi extends wt{constructor(e){super(e,{code:Fi.code,shortMessage:"JSON is not a valid request object."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidRequestRpcError"})}}Object.defineProperty(Fi,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32600});class Li extends wt{constructor(e){super(e,{code:Li.code,shortMessage:"The method does not exist / is not available."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotFoundRpcError"})}}Object.defineProperty(Li,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32601});class ji extends wt{constructor(e){super(e,{code:ji.code,shortMessage:["Invalid parameters were provided to the RPC method.","Double check you have provided the correct parameters."].join(`
`)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidParamsRpcError"})}}Object.defineProperty(ji,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32602});class On extends wt{constructor(e){super(e,{code:On.code,shortMessage:"An internal error was received."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InternalRpcError"})}}Object.defineProperty(On,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32603});class rn extends wt{constructor(e){super(e,{code:rn.code,shortMessage:["Missing or invalid parameters.","Double check you have provided the correct parameters."].join(`
`)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidInputRpcError"})}}Object.defineProperty(rn,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32e3});class Wi extends wt{constructor(e){super(e,{code:Wi.code,shortMessage:"Requested resource not found."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceNotFoundRpcError"})}}Object.defineProperty(Wi,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32001});class kn extends wt{constructor(e){super(e,{code:kn.code,shortMessage:"Requested resource not available."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceUnavailableRpcError"})}}Object.defineProperty(kn,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32002});class zi extends wt{constructor(e){super(e,{code:zi.code,shortMessage:"Transaction creation failed."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionRejectedRpcError"})}}Object.defineProperty(zi,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32003});class Hi extends wt{constructor(e){super(e,{code:Hi.code,shortMessage:"Method is not implemented."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotSupportedRpcError"})}}Object.defineProperty(Hi,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32004});class Gi extends wt{constructor(e){super(e,{code:Gi.code,shortMessage:"Request exceeds defined limit."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"LimitExceededRpcError"})}}Object.defineProperty(Gi,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32005});class Vi extends wt{constructor(e){super(e,{code:Vi.code,shortMessage:"Version of JSON-RPC protocol is not supported."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"JsonRpcVersionUnsupportedError"})}}Object.defineProperty(Vi,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32006});class dt extends ei{constructor(e){super(e,{code:dt.code,shortMessage:"User rejected the request."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UserRejectedRequestError"})}}Object.defineProperty(dt,"code",{enumerable:!0,configurable:!0,writable:!0,value:4001});class qi extends ei{constructor(e){super(e,{code:qi.code,shortMessage:"The requested method and/or account has not been authorized by the user."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnauthorizedProviderError"})}}Object.defineProperty(qi,"code",{enumerable:!0,configurable:!0,writable:!0,value:4100});class Qi extends ei{constructor(e){super(e,{code:Qi.code,shortMessage:"The Provider does not support the requested method."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnsupportedProviderMethodError"})}}Object.defineProperty(Qi,"code",{enumerable:!0,configurable:!0,writable:!0,value:4200});class Ki extends ei{constructor(e){super(e,{code:Ki.code,shortMessage:"The Provider is disconnected from all chains."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderDisconnectedError"})}}Object.defineProperty(Ki,"code",{enumerable:!0,configurable:!0,writable:!0,value:4900});class Zi extends ei{constructor(e){super(e,{code:Zi.code,shortMessage:"The Provider is not connected to the requested chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDisconnectedError"})}}Object.defineProperty(Zi,"code",{enumerable:!0,configurable:!0,writable:!0,value:4901});class lr extends ei{constructor(e){super(e,{code:lr.code,shortMessage:"An error occurred when attempting to switch chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SwitchChainError"})}}Object.defineProperty(lr,"code",{enumerable:!0,configurable:!0,writable:!0,value:4902});class Mw extends wt{constructor(e){super(e,{shortMessage:"An unknown RPC error occurred."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownRpcError"})}}const $w=3;function Yi(t,{abi:e,address:r,args:n,docsPath:o,functionName:i,sender:s}){const{code:a,data:c,message:l,shortMessage:d}=t instanceof Nl?t:t instanceof $?t.walk(g=>"data"in g)||t.walk():{};let p=t;return t instanceof ta?p=new kw({functionName:i}):[$w,On.code].includes(a)&&(c||l||d)&&(p=new _c({abi:e,data:typeof c=="object"?c.data:c,functionName:i,message:d??l})),new Rl(p,{abi:e,args:n,contractAddress:r,docsPath:o,functionName:i,sender:s})}class ti extends ${constructor({docsPath:e}={}){super(["Could not find an Account to execute with this Action.","Please provide an Account with the `account` argument on the Action, or by supplying an `account` to the WalletClient."].join(`
`),{docsPath:e,docsSlug:"account"}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AccountNotFoundError"})}}class Uw extends ${constructor(e,{account:r,docsPath:n,chain:o,data:i,gas:s,gasPrice:a,maxFeePerGas:c,maxPriorityFeePerGas:l,nonce:d,to:p,value:g}){const w=Co({from:r==null?void 0:r.address,to:p,value:typeof g<"u"&&`${El(g)} ${(o==null?void 0:o.nativeCurrency.symbol)||"ETH"}`,data:i,gas:s,gasPrice:typeof a<"u"&&`${ht(a)} gwei`,maxFeePerGas:typeof c<"u"&&`${ht(c)} gwei`,maxPriorityFeePerGas:typeof l<"u"&&`${ht(l)} gwei`,nonce:d});super(e.shortMessage,{cause:e,docsPath:n,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Estimate Gas Arguments:",w].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EstimateGasExecutionError"}),this.cause=e}}function $l(t,e){const r=(t.details||"").toLowerCase(),n=t.walk(o=>o.code===Dn.code);return n instanceof $?new Dn({cause:t,message:n.details}):Dn.nodeMessage.test(r)?new Dn({cause:t,message:t.details}):fs.nodeMessage.test(r)?new fs({cause:t,maxFeePerGas:e==null?void 0:e.maxFeePerGas}):wc.nodeMessage.test(r)?new wc({cause:t,maxFeePerGas:e==null?void 0:e.maxFeePerGas}):bc.nodeMessage.test(r)?new bc({cause:t,nonce:e==null?void 0:e.nonce}):mc.nodeMessage.test(r)?new mc({cause:t,nonce:e==null?void 0:e.nonce}):yc.nodeMessage.test(r)?new yc({cause:t,nonce:e==null?void 0:e.nonce}):vc.nodeMessage.test(r)?new vc({cause:t}):Ac.nodeMessage.test(r)?new Ac({cause:t,gas:e==null?void 0:e.gas}):Cc.nodeMessage.test(r)?new Cc({cause:t,gas:e==null?void 0:e.gas}):xc.nodeMessage.test(r)?new xc({cause:t}):ds.nodeMessage.test(r)?new ds({cause:t,maxFeePerGas:e==null?void 0:e.maxFeePerGas,maxPriorityFeePerGas:e==null?void 0:e.maxPriorityFeePerGas}):new Xs({cause:t})}function Fw(t,{docsPath:e,...r}){let n=$l(t,r);return n instanceof Xs&&(n=t),new Uw(n,{docsPath:e,...r})}function Ul(t,{format:e}){return e?Object.keys(e({})).reduce((n,o)=>(t!=null&&t.hasOwnProperty(o)&&(n[o]=t[o]),n),{}):{}}function So(t){const{account:e,gasPrice:r,maxFeePerGas:n,maxPriorityFeePerGas:o,to:i}=t,s=e?It(e):void 0;if(s&&!Bn(s.address))throw new Mi({address:s.address});if(i&&!Bn(i))throw new Mi({address:i});if(typeof r<"u"&&(typeof n<"u"||typeof o<"u"))throw new hg;if(n&&n>2n**256n-1n)throw new fs({maxFeePerGas:n});if(o&&n&&o>n)throw new ds({maxFeePerGas:n,maxPriorityFeePerGas:o})}class Lw extends ${constructor(){super("`baseFeeMultiplier` must be greater than 1."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BaseFeeScalarError"})}}class Fl extends ${constructor(){super("Chain does not support EIP-1559 fees."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Eip1559FeesNotSupportedError"})}}class jw extends ${constructor({maxPriorityFeePerGas:e}){super(`\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${ht(e)} gwei).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MaxFeePerGasTooLowError"})}}class Ww extends ${constructor({blockHash:e,blockNumber:r}){let n="Block";e&&(n=`Block at hash "${e}"`),r&&(n=`Block at number "${r}"`),super(`${n} could not be found.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BlockNotFoundError"})}}async function Pr(t,{blockHash:e,blockNumber:r,blockTag:n,includeTransactions:o}={}){var d,p,g;const i=n??"latest",s=o??!1,a=r!==void 0?ne(r):void 0;let c=null;if(e?c=await t.request({method:"eth_getBlockByHash",params:[e,s]}):c=await t.request({method:"eth_getBlockByNumber",params:[a||i,s]}),!c)throw new Ww({blockHash:e,blockNumber:r});return(((g=(p=(d=t.chain)==null?void 0:d.formatters)==null?void 0:p.block)==null?void 0:g.format)||dd)(c)}async function Ll(t){const e=await t.request({method:"eth_gasPrice"});return BigInt(e)}async function zw(t,e){return Od(t,e)}async function Od(t,e){var i,s,a;const{block:r,chain:n=t.chain,request:o}=e||{};if(typeof((i=n==null?void 0:n.fees)==null?void 0:i.defaultPriorityFee)=="function"){const c=r||await Pr(t);return n.fees.defaultPriorityFee({block:c,client:t,request:o})}else if((s=n==null?void 0:n.fees)!=null&&s.defaultPriorityFee)return(a=n==null?void 0:n.fees)==null?void 0:a.defaultPriorityFee;try{const c=await t.request({method:"eth_maxPriorityFeePerGas"});return Ys(c)}catch{const[c,l]=await Promise.all([r?Promise.resolve(r):Pr(t),Ll(t)]);if(typeof c.baseFeePerGas!="bigint")throw new Fl;const d=l-c.baseFeePerGas;return d<0n?0n:d}}async function Hw(t,e){return Dc(t,e)}async function Dc(t,e){var g,w;const{block:r,chain:n=t.chain,request:o,type:i="eip1559"}=e||{},s=await(async()=>{var b,A;return typeof((b=n==null?void 0:n.fees)==null?void 0:b.baseFeeMultiplier)=="function"?n.fees.baseFeeMultiplier({block:r,client:t,request:o}):((A=n==null?void 0:n.fees)==null?void 0:A.baseFeeMultiplier)??1.2})();if(s<1)throw new Lw;const c=10**(((g=s.toString().split(".")[1])==null?void 0:g.length)??0),l=b=>b*BigInt(Math.ceil(s*c))/BigInt(c),d=r||await Pr(t);if(typeof((w=n==null?void 0:n.fees)==null?void 0:w.estimateFeesPerGas)=="function")return n.fees.estimateFeesPerGas({block:r,client:t,multiply:l,request:o,type:i});if(i==="eip1559"){if(typeof d.baseFeePerGas!="bigint")throw new Fl;const b=o!=null&&o.maxPriorityFeePerGas?o.maxPriorityFeePerGas:await Od(t,{block:d,chain:n,request:o}),A=l(d.baseFeePerGas);return{maxFeePerGas:(o==null?void 0:o.maxFeePerGas)??A+b,maxPriorityFeePerGas:b}}return{gasPrice:(o==null?void 0:o.gasPrice)??l(await Ll(t))}}async function kd(t,{address:e,blockTag:r="latest",blockNumber:n}){const o=await t.request({method:"eth_getTransactionCount",params:[e,n?ne(n):r]});return at(o)}async function oa(t,e){const{account:r=t.account,chain:n,gas:o,nonce:i,type:s}=e;if(!r)throw new ti;const a=It(r),c=await Pr(t,{blockTag:"latest"}),l={...e,from:a.address};if(typeof i>"u"&&(l.nonce=await kd(t,{address:a.address,blockTag:"pending"})),typeof s>"u")try{l.type=bg(l)}catch{l.type=typeof c.baseFeePerGas=="bigint"?"eip1559":"legacy"}if(l.type==="eip1559"){const{maxFeePerGas:d,maxPriorityFeePerGas:p}=await Dc(t,{block:c,chain:n,request:l});if(typeof e.maxPriorityFeePerGas>"u"&&e.maxFeePerGas&&e.maxFeePerGas<p)throw new jw({maxPriorityFeePerGas:p});l.maxPriorityFeePerGas=p,l.maxFeePerGas=d}else{if(typeof e.maxFeePerGas<"u"||typeof e.maxPriorityFeePerGas<"u")throw new Fl;const{gasPrice:d}=await Dc(t,{block:c,chain:n,request:l,type:"legacy"});l.gasPrice=d}return typeof o>"u"&&(l.gas=await jl(t,{...l,account:{address:a.address,type:"json-rpc"}})),So(l),l}async function jl(t,e){var o,i,s;const r=e.account??t.account;if(!r)throw new ti({docsPath:"/docs/actions/public/estimateGas"});const n=It(r);try{const{accessList:a,blockNumber:c,blockTag:l,data:d,gas:p,gasPrice:g,maxFeePerGas:w,maxPriorityFeePerGas:b,nonce:A,to:y,value:S,...m}=n.type==="local"?await oa(t,e):e,x=(c?ne(c):void 0)||l;So(e);const E=((s=(i=(o=t.chain)==null?void 0:o.formatters)==null?void 0:i.transactionRequest)==null?void 0:s.format)||Js,D=E({...Ul(m,{format:E}),from:n.address,accessList:a,data:d,gas:p,gasPrice:g,maxFeePerGas:w,maxPriorityFeePerGas:b,nonce:A,to:y,value:S}),u=await t.request({method:"eth_estimateGas",params:x?[D,x]:[D]});return BigInt(u)}catch(a){throw Fw(a,{...e,account:n,chain:t.chain})}}async function Gw(t,{abi:e,address:r,args:n,functionName:o,...i}){const s=Ur({abi:e,args:n,functionName:o});try{return await jl(t,{data:s,to:r,...i})}catch(a){const c=i.account?It(i.account):void 0;throw Yi(a,{abi:e,address:r,args:n,docsPath:"/docs/contract/estimateContractGas",functionName:o,sender:c==null?void 0:c.address})}}const m0="/docs/contract/decodeEventLog";function Do({abi:t,data:e,strict:r,topics:n}){const o=r??!0,[i,...s]=n;if(!i)throw new Pg({docsPath:m0});const a=t.find(b=>b.type==="event"&&i===Il($r(b)));if(!(a&&"name"in a)||a.type!=="event")throw new Ig(i,{docsPath:m0});const{name:c,inputs:l}=a,d=l==null?void 0:l.some(b=>!("name"in b&&b.name));let p=d?[]:{};const g=l.filter(b=>"indexed"in b&&b.indexed);if(s.length>0)for(let b=0;b<g.length;b++){const A=g[b],y=s[b];if(!y)throw new Xn({abiItem:a,param:A});p[A.name||b]=Vw({param:A,value:y})}const w=l.filter(b=>!("indexed"in b&&b.indexed));if(w.length>0){if(e&&e!=="0x")try{const b=ia(w,e);if(b)if(d)p=[...p,...b];else for(let A=0;A<w.length;A++)p[w[A].name]=b[A]}catch(b){if(o)throw b instanceof Dl?new tn({abiItem:a,data:b.data,params:b.params,size:b.size}):b}else if(o)throw new tn({abiItem:a,data:"0x",params:w,size:0})}return{eventName:c,args:Object.values(p).length>0?p:void 0}}function Vw({param:t,value:e}){return t.type==="string"||t.type==="bytes"||t.type==="tuple"||t.type.match(/^(.*)\[(\d+)?\]$/)?e:(ia([t],e)||[])[0]}async function Wl(t,{address:e,blockHash:r,fromBlock:n,toBlock:o,event:i,events:s,args:a,strict:c}={}){const l=c??!1,d=s??(i?[i]:void 0);let p=[];d&&(p=[d.flatMap(w=>_o({abi:[w],eventName:w.name,args:a}))],i&&(p=p[0]));let g;return r?g=await t.request({method:"eth_getLogs",params:[{address:e,topics:p,blockHash:r}]}):g=await t.request({method:"eth_getLogs",params:[{address:e,topics:p,fromBlock:typeof n=="bigint"?ne(n):n,toBlock:typeof o=="bigint"?ne(o):o}]}),g.map(w=>{var b;try{const{eventName:A,args:y}=d?Do({abi:d,data:w.data,topics:w.topics,strict:l}):{eventName:void 0,args:void 0};return Ut(w,{args:y,eventName:A})}catch(A){let y,S;if(A instanceof tn||A instanceof Xn){if(l)return;y=A.abiItem.name,S=(b=A.abiItem.inputs)==null?void 0:b.some(m=>!("name"in m&&m.name))}return Ut(w,{args:S?[]:{},eventName:y})}}).filter(Boolean)}async function Rd(t,{abi:e,address:r,args:n,blockHash:o,eventName:i,fromBlock:s,toBlock:a,strict:c}){const l=i?Eo({abi:e,name:i}):void 0,d=l?void 0:e.filter(p=>p.type==="event");return Wl(t,{address:r,args:n,blockHash:o,event:l,events:d,fromBlock:s,toBlock:a,strict:c})}const Ma="/docs/contract/decodeFunctionResult";function ri({abi:t,args:e,functionName:r,data:n}){let o=t[0];if(r&&(o=Eo({abi:t,args:e,name:r}),!o))throw new ps(r,{docsPath:Ma});if(o.type!=="function")throw new ps(void 0,{docsPath:Ma});if(!o.outputs)throw new Tg(o.name,{docsPath:Ma});const i=ia(o.outputs,n);if(i&&i.length>1)return i;if(i&&i.length===1)return i[0]}const Pc=[{inputs:[{components:[{name:"target",type:"address"},{name:"allowFailure",type:"bool"},{name:"callData",type:"bytes"}],name:"calls",type:"tuple[]"}],name:"aggregate3",outputs:[{components:[{name:"success",type:"bool"},{name:"returnData",type:"bytes"}],name:"returnData",type:"tuple[]"}],stateMutability:"view",type:"function"}],Nd=[{inputs:[],name:"ResolverNotFound",type:"error"},{inputs:[],name:"ResolverWildcardNotSupported",type:"error"}],Md=[...Nd,{name:"resolve",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes"},{name:"data",type:"bytes"}],outputs:[{name:"",type:"bytes"},{name:"address",type:"address"}]}],qw=[...Nd,{name:"reverse",type:"function",stateMutability:"view",inputs:[{type:"bytes",name:"reverseName"}],outputs:[{type:"string",name:"resolvedName"},{type:"address",name:"resolvedAddress"},{type:"address",name:"reverseResolver"},{type:"address",name:"resolver"}]}],y0=[{name:"text",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"key",type:"string"}],outputs:[{name:"",type:"string"}]}],v0=[{name:"addr",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"}],outputs:[{name:"",type:"address"}]},{name:"addr",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"coinType",type:"uint256"}],outputs:[{name:"",type:"bytes"}]}],Qw=[{inputs:[{internalType:"address",name:"_signer",type:"address"},{internalType:"bytes32",name:"_hash",type:"bytes32"},{internalType:"bytes",name:"_signature",type:"bytes"}],stateMutability:"nonpayable",type:"constructor"}],Kw="0x82ad56cb";function Zw(t,{docsPath:e,...r}){let n=$l(t,r);return n instanceof Xs&&(n=t),new Bd(n,{docsPath:e,...r})}const $a=new Map;function zl({fn:t,id:e,shouldSplitBatch:r,wait:n=0}){const o=async()=>{const l=a();i();const d=l.map(({args:p})=>p);d.length!==0&&t(d).then(p=>{l.forEach(({pendingPromise:g},w)=>{var b;return(b=g.resolve)==null?void 0:b.call(g,[p[w],p])})}).catch(p=>{l.forEach(({pendingPromise:g})=>{var w;return(w=g.reject)==null?void 0:w.call(g,p)})})},i=()=>$a.delete(e),s=()=>a().map(({args:l})=>l),a=()=>$a.get(e)||[],c=l=>$a.set(e,[...a(),l]);return{flush:i,async schedule(l){const d={},p=new Promise((b,A)=>{d.resolve=b,d.reject=A});return(r==null?void 0:r([...s(),l]))&&o(),a().length>0?(c({args:l,pendingPromise:d}),p):(c({args:l,pendingPromise:d}),setTimeout(o,n),p)}}}async function sa(t,e){var S,m,_,x;const{account:r=t.account,batch:n=!!((S=t.batch)!=null&&S.multicall),blockNumber:o,blockTag:i="latest",accessList:s,data:a,gas:c,gasPrice:l,maxFeePerGas:d,maxPriorityFeePerGas:p,nonce:g,to:w,value:b,...A}=e,y=r?It(r):void 0;try{So(e);const D=(o?ne(o):void 0)||i,u=((x=(_=(m=t.chain)==null?void 0:m.formatters)==null?void 0:_.transactionRequest)==null?void 0:x.format)||Js,C=u({...Ul(A,{format:u}),from:y==null?void 0:y.address,accessList:s,data:a,gas:c,gasPrice:l,maxFeePerGas:d,maxPriorityFeePerGas:p,nonce:g,to:w,value:b});if(n&&Yw({request:C}))try{return await Jw(t,{...C,blockNumber:o,blockTag:i})}catch(B){if(!(B instanceof id)&&!(B instanceof gc))throw B}const T=await t.request({method:"eth_call",params:D?[C,D]:[C]});return T==="0x"?{data:void 0}:{data:T}}catch(E){const D=Xw(E),{offchainLookup:u,offchainLookupSignature:C}=await Ri(()=>import("./ccip.d3ce3fa7.js"),[],import.meta.url);if((D==null?void 0:D.slice(0,10))===C&&w)return{data:await u(t,{data:D,to:w})};throw Zw(E,{...e,account:y,chain:t.chain})}}function Yw({request:t}){const{data:e,to:r,...n}=t;return!(!e||e.startsWith(Kw)||!r||Object.values(n).filter(o=>typeof o<"u").length>0)}async function Jw(t,e){var A;const{batchSize:r=1024,wait:n=0}=typeof((A=t.batch)==null?void 0:A.multicall)=="object"?t.batch.multicall:{},{blockNumber:o,blockTag:i="latest",data:s,multicallAddress:a,to:c}=e;let l=a;if(!l){if(!t.chain)throw new id;l=Yn({blockNumber:o,chain:t.chain,contract:"multicall3"})}const p=(o?ne(o):void 0)||i,{schedule:g}=zl({id:`${t.uid}.${p}`,wait:n,shouldSplitBatch(y){return y.reduce((m,{data:_})=>m+(_.length-2),0)>r*2},fn:async y=>{const S=y.map(x=>({allowFailure:!0,callData:x.data,target:x.to})),m=Ur({abi:Pc,args:[S],functionName:"aggregate3"}),_=await t.request({method:"eth_call",params:[{data:m,to:l},p]});return ri({abi:Pc,args:[S],functionName:"aggregate3",data:_||"0x"})}}),[{returnData:w,success:b}]=await g({data:s,to:c});if(!b)throw new Nl({data:w});return w==="0x"?{data:void 0}:{data:w}}function Xw(t){if(!(t instanceof $))return;const e=t.walk();return typeof e.data=="object"?e.data.data:e.data}async function Ir(t,{abi:e,address:r,args:n,functionName:o,...i}){const s=Ur({abi:e,args:n,functionName:o});try{const{data:a}=await sa(t,{data:s,to:r,...i});return ri({abi:e,args:n,functionName:o,data:a||"0x"})}catch(a){throw Yi(a,{abi:e,address:r,args:n,docsPath:"/docs/contract/readContract",functionName:o})}}async function e2(t,{abi:e,address:r,args:n,dataSuffix:o,functionName:i,...s}){const a=s.account?It(s.account):void 0,c=Ur({abi:e,args:n,functionName:i});try{const{data:l}=await sa(t,{batch:!1,data:`${c}${o?o.replace("0x",""):""}`,to:r,...s});return{result:ri({abi:e,args:n,functionName:i,data:l||"0x"}),request:{abi:e,address:r,args:n,dataSuffix:o,functionName:i,...s}}}catch(l){throw Yi(l,{abi:e,address:r,args:n,docsPath:"/docs/contract/simulateContract",functionName:i,sender:a==null?void 0:a.address})}}const Ua=new Map,A0=new Map;let t2=0;function ni(t,e,r){const n=++t2,o=()=>Ua.get(t)||[],i=()=>{const d=o();Ua.set(t,d.filter(p=>p.id!==n))},s=()=>{const d=A0.get(t);o().length===1&&d&&d(),i()},a=o();if(Ua.set(t,[...a,{id:n,fns:e}]),a&&a.length>0)return s;const c={};for(const d in e)c[d]=(...p)=>{const g=o();g.length!==0&&g.forEach(w=>{var b,A;return(A=(b=w.fns)[d])==null?void 0:A.call(b,...p)})};const l=r(c);return typeof l=="function"&&A0.set(t,l),s}async function ws(t){return new Promise(e=>setTimeout(e,t))}function Po(t,{emitOnBegin:e,initialWaitTime:r,interval:n}){let o=!0;const i=()=>o=!1;return(async()=>{let a;e&&(a=await t({unpoll:i}));const c=await(r==null?void 0:r(a))??n;await ws(c);const l=async()=>{o&&(await t({unpoll:i}),await ws(n),l())};l()})(),i}const r2=new Map,n2=new Map;function i2(t){const e=(o,i)=>({clear:()=>i.delete(o),get:()=>i.get(o),set:s=>i.set(o,s)}),r=e(t,r2),n=e(t,n2);return{clear:()=>{r.clear(),n.clear()},promise:r,response:n}}async function o2(t,{cacheKey:e,cacheTime:r=1/0}){const n=i2(e),o=n.response.get();if(o&&r>0&&new Date().getTime()-o.created.getTime()<r)return o.data;let i=n.promise.get();i||(i=t(),n.promise.set(i));try{const s=await i;return n.response.set({created:new Date,data:s}),s}finally{n.promise.clear()}}const s2=t=>`blockNumber.${t}`;async function Io(t,{cacheTime:e=t.cacheTime,maxAge:r}={}){const n=await o2(()=>t.request({method:"eth_blockNumber"}),{cacheKey:s2(t.uid),cacheTime:r??e});return BigInt(n)}async function aa(t,{filter:e}){const r="strict"in e&&e.strict;return(await e.request({method:"eth_getFilterChanges",params:[e.id]})).map(o=>{var i;if(typeof o=="string")return o;try{const{eventName:s,args:a}="abi"in e&&e.abi?Do({abi:e.abi,data:o.data,topics:o.topics,strict:r}):{eventName:void 0,args:void 0};return Ut(o,{args:a,eventName:s})}catch(s){let a,c;if(s instanceof tn||s instanceof Xn){if("strict"in e&&e.strict)return;a=s.abiItem.name,c=(i=s.abiItem.inputs)==null?void 0:i.some(l=>!("name"in l&&l.name))}return Ut(o,{args:c?[]:{},eventName:a})}}).filter(Boolean)}async function ca(t,{filter:e}){return e.request({method:"eth_uninstallFilter",params:[e.id]})}function a2(t,{abi:e,address:r,args:n,batch:o=!0,eventName:i,onError:s,onLogs:a,poll:c,pollingInterval:l=t.pollingInterval,strict:d}){return(typeof c<"u"?c:t.transport.type!=="webSocket")?(()=>{const b=ct(["watchContractEvent",r,n,o,t.uid,i,l]),A=d??!1;return ni(b,{onLogs:a,onError:s},y=>{let S,m,_=!1;const x=Po(async()=>{var E;if(!_){try{m=await Pd(t,{abi:e,address:r,args:n,eventName:i,strict:A})}catch{}_=!0;return}try{let D;if(m)D=await aa(t,{filter:m});else{const u=await Io(t);S&&S!==u?D=await Rd(t,{abi:e,address:r,args:n,fromBlock:S+1n,toBlock:u,strict:A}):D=[],S=u}if(D.length===0)return;o?y.onLogs(D):D.forEach(u=>y.onLogs([u]))}catch(D){m&&D instanceof rn&&(_=!1),(E=y.onError)==null||E.call(y,D)}},{emitOnBegin:!0,interval:l});return async()=>{m&&await ca(t,{filter:m}),x()}})})():(()=>{let b=!0,A=()=>b=!1;return(async()=>{try{const y=i?_o({abi:e,eventName:i,args:n}):[],{unsubscribe:S}=await t.transport.subscribe({params:["logs",{address:r,topics:y}],onData(m){var x;if(!b)return;const _=m.result;try{const{eventName:E,args:D}=Do({abi:e,data:_.data,topics:_.topics,strict:d}),u=Ut(_,{args:D,eventName:E});a([u])}catch(E){let D,u;if(E instanceof tn||E instanceof Xn){if(d)return;D=E.abiItem.name,u=(x=E.abiItem.inputs)==null?void 0:x.some(T=>!("name"in T&&T.name))}const C=Ut(_,{args:u?[]:{},eventName:D});a([C])}},onError(m){s==null||s(m)}});A=S,b||A()}catch(y){s==null||s(y)}})(),A})()}function c2(t,{docsPath:e,...r}){let n=$l(t,r);return n instanceof Xs&&(n=t),new gg(n,{docsPath:e,...r})}async function Ji(t){const e=await t.request({method:"eth_chainId"});return at(e)}async function Hl(t,{serializedTransaction:e}){return t.request({method:"eth_sendRawTransaction",params:[e]})}async function Gl(t,e){var A,y,S;const{account:r=t.account,chain:n=t.chain,accessList:o,data:i,gas:s,gasPrice:a,maxFeePerGas:c,maxPriorityFeePerGas:l,nonce:d,to:p,value:g,...w}=e;if(!r)throw new ti({docsPath:"/docs/actions/wallet/sendTransaction"});const b=It(r);try{So(e);let m;if(n!==null&&(m=await Ji(t),od({currentChainId:m,chain:n})),b.type==="local"){const E=await oa(t,{account:b,accessList:o,chain:n,data:i,gas:s,gasPrice:a,maxFeePerGas:c,maxPriorityFeePerGas:l,nonce:d,to:p,value:g,...w});m||(m=await Ji(t));const D=(A=n==null?void 0:n.serializers)==null?void 0:A.transaction,u=await b.signTransaction({...E,chainId:m},{serializer:D});return await Hl(t,{serializedTransaction:u})}const _=((S=(y=n==null?void 0:n.formatters)==null?void 0:y.transactionRequest)==null?void 0:S.format)||Js,x=_({...Ul(w,{format:_}),accessList:o,data:i,from:b.address,gas:s,gasPrice:a,maxFeePerGas:c,maxPriorityFeePerGas:l,nonce:d,to:p,value:g});return await t.request({method:"eth_sendTransaction",params:[x]})}catch(m){throw c2(m,{...e,account:b,chain:e.chain||void 0})}}async function l2(t,{abi:e,address:r,args:n,dataSuffix:o,functionName:i,...s}){const a=Ur({abi:e,args:n,functionName:i});return await Gl(t,{data:`${a}${o?o.replace("0x",""):""}`,to:r,...s})}async function u2(t,{chain:e}){const{id:r,name:n,nativeCurrency:o,rpcUrls:i,blockExplorers:s}=e;await t.request({method:"wallet_addEthereumChain",params:[{chainId:ne(r),chainName:n,nativeCurrency:o,rpcUrls:i.default.http,blockExplorerUrls:s?Object.values(s).map(({url:a})=>a):void 0}]})}const Ic=256;let Vo=Ic,qo;function f2(t=11){if(!qo||Vo+t>Ic*2){qo="",Vo=0;for(let e=0;e<Ic;e++)qo+=(256+Math.random()*256|0).toString(16).substring(1)}return qo.substring(Vo,Vo+++t)}function $d(t){const{batch:e,cacheTime:r=t.pollingInterval??4e3,key:n="base",name:o="Base Client",pollingInterval:i=4e3,type:s="base"}=t,a=t.chain,c=t.account?It(t.account):void 0,{config:l,request:d,value:p}=t.transport({chain:a,pollingInterval:i}),g={...l,...p},w={account:c,batch:e,cacheTime:r,chain:a,key:n,name:o,pollingInterval:i,request:d,transport:g,type:s,uid:f2()};function b(A){return y=>{const S=y(A);for(const _ in w)delete S[_];const m={...A,...S};return Object.assign(m,{extend:b(m)})}}return Object.assign(w,{extend:b(w)})}function Ud(t,{delay:e=100,retryCount:r=2,shouldRetry:n=()=>!0}={}){return new Promise((o,i)=>{const s=async({count:a=0}={})=>{const c=async({error:l})=>{const d=typeof e=="function"?e({count:a,error:l}):e;d&&await ws(d),s({count:a+1})};try{const l=await t();o(l)}catch(l){if(a<r&&await n({count:a,error:l}))return c({error:l});i(l)}};s()})}const Fd=t=>"code"in t?t.code!==-1&&t.code!==-32004&&t.code!==-32005&&t.code!==-32042&&t.code!==-32603:t instanceof Pi&&t.status?t.status!==403&&t.status!==408&&t.status!==413&&t.status!==429&&t.status!==500&&t.status!==502&&t.status!==503&&t.status!==504:!1;function d2(t,{retryDelay:e=150,retryCount:r=3}={}){return async n=>Ud(async()=>{try{return await t(n)}catch(o){const i=o;switch(i.code){case Ui.code:throw new Ui(i);case Fi.code:throw new Fi(i);case Li.code:throw new Li(i);case ji.code:throw new ji(i);case On.code:throw new On(i);case rn.code:throw new rn(i);case Wi.code:throw new Wi(i);case kn.code:throw new kn(i);case zi.code:throw new zi(i);case Hi.code:throw new Hi(i);case Gi.code:throw new Gi(i);case Vi.code:throw new Vi(i);case dt.code:throw new dt(i);case qi.code:throw new qi(i);case Qi.code:throw new Qi(i);case Ki.code:throw new Ki(i);case Zi.code:throw new Zi(i);case lr.code:throw new lr(i);case 5e3:throw new dt(i);default:throw o instanceof $?o:new Mw(i)}}},{delay:({count:o,error:i})=>{var s;if(i&&i instanceof Pi){const a=(s=i==null?void 0:i.headers)==null?void 0:s.get("Retry-After");if(a!=null&&a.match(/\d/))return parseInt(a)*1e3}return~~(1<<o)*e},retryCount:r,shouldRetry:({error:o})=>!Fd(o)})}function la({key:t,name:e,request:r,retryCount:n=3,retryDelay:o=150,timeout:i,type:s},a){return{config:{key:t,name:e,request:r,retryCount:n,retryDelay:o,timeout:i,type:s},request:d2(r,{retryCount:n,retryDelay:o}),value:a}}function Vl(t,e={}){const{key:r="custom",name:n="Custom Provider",retryDelay:o}=e;return({retryCount:i})=>la({key:r,name:n,request:t.request.bind(t),retryCount:e.retryCount??i,retryDelay:o,type:"custom"})}function C0(t,e={}){const{key:r="fallback",name:n="Fallback",rank:o=!1,retryCount:i,retryDelay:s}=e;return({chain:a,pollingInterval:c=4e3,timeout:l})=>{let d=t,p=()=>{};const g=la({key:r,name:n,async request({method:w,params:b}){const A=async(y=0)=>{const S=d[y]({chain:a,retryCount:0,timeout:l});try{const m=await S.request({method:w,params:b});return p({method:w,params:b,response:m,transport:S,status:"success"}),m}catch(m){if(p({error:m,method:w,params:b,transport:S,status:"error"}),Fd(m)||y===d.length-1)throw m;return A(y+1)}};return A()},retryCount:i,retryDelay:s,type:"fallback"},{onResponse:w=>p=w,transports:d.map(w=>w({chain:a,retryCount:0}))});if(o){const w=typeof o=="object"?o:{};h2({chain:a,interval:w.interval??c,onTransports:b=>d=b,sampleCount:w.sampleCount,timeout:w.timeout,transports:d,weights:w.weights})}return g}}function h2({chain:t,interval:e=4e3,onTransports:r,sampleCount:n=10,timeout:o=1e3,transports:i,weights:s={}}){const{stability:a=.7,latency:c=.3}=s,l=[],d=async()=>{const p=await Promise.all(i.map(async b=>{const A=b({chain:t,retryCount:0,timeout:o}),y=Date.now();let S,m;try{await A.request({method:"net_listening"}),m=1}catch{m=0}finally{S=Date.now()}return{latency:S-y,success:m}}));l.push(p),l.length>n&&l.shift();const g=Math.max(...l.map(b=>Math.max(...b.map(({latency:A})=>A)))),w=i.map((b,A)=>{const y=l.map(E=>E[A].latency),m=1-y.reduce((E,D)=>E+D,0)/y.length/g,_=l.map(E=>E[A].success),x=_.reduce((E,D)=>E+D,0)/_.length;return x===0?[0,A]:[c*m+a*x,A]}).sort((b,A)=>A[0]-b[0]);r(w.map(([,b])=>i[b])),await ws(e),d()};d()}class Ld extends ${constructor(){super("No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.",{docsPath:"/docs/clients/intro"})}}var Cn=null;typeof WebSocket<"u"?Cn=WebSocket:typeof MozWebSocket<"u"?Cn=MozWebSocket:typeof global<"u"?Cn=global.WebSocket||global.MozWebSocket:typeof window<"u"?Cn=window.WebSocket||window.MozWebSocket:typeof self<"u"&&(Cn=self.WebSocket||self.MozWebSocket);const Qo=Cn;function jd(t,{errorInstance:e,timeout:r,signal:n}){return new Promise((o,i)=>{(async()=>{let s;try{const a=new AbortController;r>0&&(s=setTimeout(()=>{n?a.abort():i(e)},r)),o(await t({signal:a==null?void 0:a.signal}))}catch(a){a.name==="AbortError"&&i(e),i(a)}finally{clearTimeout(s)}})()})}let Tc=0;async function p2(t,{body:e,fetchOptions:r={},timeout:n=1e4}){var a;const{headers:o,method:i,signal:s}=r;try{const c=await jd(async({signal:d})=>await fetch(t,{...r,body:Array.isArray(e)?ct(e.map(g=>({jsonrpc:"2.0",id:g.id??Tc++,...g}))):ct({jsonrpc:"2.0",id:e.id??Tc++,...e}),headers:{...o,"Content-Type":"application/json"},method:i||"POST",signal:s||(n>0?d:void 0)}),{errorInstance:new Sc({body:e,url:t}),timeout:n,signal:!0});let l;if((a=c.headers.get("Content-Type"))!=null&&a.startsWith("application/json")?l=await c.json():l=await c.text(),!c.ok)throw new Pi({body:e,details:ct(l.error)||c.statusText,headers:c.headers,status:c.status,url:t});return l}catch(c){throw c instanceof Pi||c instanceof Sc?c:new Pi({body:e,details:c.message,url:t})}}const Fa=new Map;async function La(t){let e=Fa.get(t);if(e)return e;const{schedule:r}=zl({id:t,fn:async()=>{let i=Qo;Qo.constructor||(i=Qo.WebSocket);const s=new i(t),a=new Map,c=new Map,l=({data:p})=>{const g=JSON.parse(p),w=g.method==="eth_subscription",b=w?g.params.subscription:g.id,A=w?c:a,y=A.get(b);y&&y({data:p}),w||A.delete(b)},d=()=>{Fa.delete(t),s.removeEventListener("close",d),s.removeEventListener("message",l)};return s.addEventListener("close",d),s.addEventListener("message",l),s.readyState===Qo.CONNECTING&&await new Promise((p,g)=>{s&&(s.onopen=p,s.onerror=g)}),e=Object.assign(s,{requests:a,subscriptions:c}),Fa.set(t,e),[e]}}),[n,[o]]=await r();return o}function g2(t,{body:e,onResponse:r}){if(t.readyState===t.CLOSED||t.readyState===t.CLOSING)throw new Rw({body:e,url:t.url,details:"Socket is closed."});const n=Tc++,o=({data:i})=>{var a;const s=JSON.parse(i);typeof s.id=="number"&&n!==s.id||(r==null||r(s),e.method==="eth_subscribe"&&typeof s.result=="string"&&t.subscriptions.set(s.result,o),e.method==="eth_unsubscribe"&&t.subscriptions.delete((a=e.params)==null?void 0:a[0]))};return t.requests.set(n,o),t.send(JSON.stringify({jsonrpc:"2.0",...e,id:n})),t}async function w2(t,{body:e,timeout:r=1e4}){return jd(()=>new Promise(n=>In.webSocket(t,{body:e,onResponse:n})),{errorInstance:new Sc({body:e,url:t.url}),timeout:r})}const In={http:p2,webSocket:g2,webSocketAsync:w2};function b2(t,e={}){const{batch:r,fetchOptions:n,key:o="http",name:i="HTTP JSON-RPC",retryDelay:s}=e;return({chain:a,retryCount:c,timeout:l})=>{const{batchSize:d=1e3,wait:p=0}=typeof r=="object"?r:{},g=e.retryCount??c,w=l??e.timeout??1e4,b=t||(a==null?void 0:a.rpcUrls.default.http[0]);if(!b)throw new Ld;return la({key:o,name:i,async request({method:A,params:y}){const S={method:A,params:y},{schedule:m}=zl({id:`${t}`,wait:p,shouldSplitBatch(D){return D.length>d},fn:D=>In.http(b,{body:D,fetchOptions:n,timeout:w})}),_=async D=>r?m(D):[await In.http(b,{body:D,fetchOptions:n,timeout:w})],[{error:x,result:E}]=await _(S);if(x)throw new Ml({body:S,error:x,url:b});return E},retryCount:g,retryDelay:s,timeout:w,type:"http"},{url:t})}}function ql(t,e){var n,o,i;if(!(t instanceof $))return!1;const r=t.walk(s=>s instanceof _c);return r instanceof _c?!!(((n=r.data)==null?void 0:n.errorName)==="ResolverNotFound"||((o=r.data)==null?void 0:o.errorName)==="ResolverWildcardNotSupported"||(i=r.reason)!=null&&i.includes("Wildcard on non-extended resolvers is not supported")||e==="reverse"&&r.reason===Id[50]):!1}function Wd(t){if(t.length!==66||t.indexOf("[")!==0||t.indexOf("]")!==65)return null;const e=`0x${t.slice(1,65)}`;return Kt(e)?e:null}function Xo(t){let e=new Uint8Array(32).fill(0);if(!t)return Ni(e);const r=t.split(".");for(let n=r.length-1;n>=0;n-=1){const o=Wd(r[n]),i=o?Dr(o):st(ar(r[n]),"bytes");e=st(cr([e,i]),"bytes")}return Ni(e)}function m2(t){return`[${t.slice(2)}]`}function y2(t){const e=new Uint8Array(32).fill(0);return t?Wd(t)||st(ar(t)):Ni(e)}function ua(t){const e=t.replace(/^\.|\.$/gm,"");if(e.length===0)return new Uint8Array(1);const r=new Uint8Array(ar(e).byteLength+2);let n=0;const o=e.split(".");for(let i=0;i<o.length;i++){let s=ar(o[i]);s.byteLength>255&&(s=ar(m2(y2(o[i])))),r[n]=s.length,r.set(s,n+1),n+=s.length+1}return r.byteLength!==n+1?r.slice(0,n+1):r}async function v2(t,{blockNumber:e,blockTag:r,coinType:n,name:o,universalResolverAddress:i}){let s=i;if(!s){if(!t.chain)throw new Error("client chain not configured. universalResolverAddress is required.");s=Yn({blockNumber:e,chain:t.chain,contract:"ensUniversalResolver"})}try{const a=Ur({abi:v0,functionName:"addr",...n!=null?{args:[Xo(o),BigInt(n)]}:{args:[Xo(o)]}}),c=await Ir(t,{address:s,abi:Md,functionName:"resolve",args:[dr(ua(o)),a],blockNumber:e,blockTag:r});if(c[0]==="0x")return null;const l=ri({abi:v0,args:n!=null?[Xo(o),BigInt(n)]:void 0,functionName:"addr",data:c[0]});return l==="0x"||Jr(l)==="0x00"?null:l}catch(a){if(ql(a,"resolve"))return null;throw a}}class A2 extends ${constructor({data:e}){super("Unable to extract image from metadata. The metadata may be malformed or invalid.",{metaMessages:["- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.","",`Provided data: ${JSON.stringify(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarInvalidMetadataError"})}}class gi extends ${constructor({reason:e}){super(`ENS NFT avatar URI is invalid. ${e}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarInvalidNftUriError"})}}class Ql extends ${constructor({uri:e}){super(`Unable to resolve ENS avatar URI "${e}". The URI may be malformed, invalid, or does not respond with a valid image.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarUriResolutionError"})}}class C2 extends ${constructor({namespace:e}){super(`ENS NFT avatar namespace "${e}" is not supported. Must be "erc721" or "erc1155".`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarUnsupportedNamespaceError"})}}const x2=/(?<protocol>https?:\/\/[^\/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/,E2=/^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/,_2=/^data:([a-zA-Z\-/+]*);base64,([^"].*)/,S2=/^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;async function D2(t){try{const e=await fetch(t,{method:"HEAD"});if(e.status===200){const r=e.headers.get("content-type");return r==null?void 0:r.startsWith("image/")}return!1}catch(e){return typeof e=="object"&&typeof e.response<"u"||!globalThis.hasOwnProperty("Image")?!1:new Promise(r=>{const n=new Image;n.onload=()=>{r(!0)},n.onerror=()=>{r(!1)},n.src=t})}}function x0(t,e){return t?t.endsWith("/")?t.slice(0,-1):t:e}function zd({uri:t,gatewayUrls:e}){const r=_2.test(t);if(r)return{uri:t,isOnChain:!0,isEncoded:r};const n=x0(e==null?void 0:e.ipfs,"https://ipfs.io"),o=x0(e==null?void 0:e.arweave,"https://arweave.net"),i=t.match(x2),{protocol:s,subpath:a,target:c,subtarget:l=""}=(i==null?void 0:i.groups)||{},d=s==="ipns:/"||a==="ipns/",p=s==="ipfs:/"||a==="ipfs/"||E2.test(t);if(t.startsWith("http")&&!d&&!p){let w=t;return e!=null&&e.arweave&&(w=t.replace(/https:\/\/arweave.net/g,e==null?void 0:e.arweave)),{uri:w,isOnChain:!1,isEncoded:!1}}if((d||p)&&c)return{uri:`${n}/${d?"ipns":"ipfs"}/${c}${l}`,isOnChain:!1,isEncoded:!1};if(s==="ar:/"&&c)return{uri:`${o}/${c}${l||""}`,isOnChain:!1,isEncoded:!1};let g=t.replace(S2,"");if(g.startsWith("<svg")&&(g=`data:image/svg+xml;base64,${btoa(g)}`),g.startsWith("data:")||g.startsWith("{"))return{uri:g,isOnChain:!0,isEncoded:!1};throw new Ql({uri:t})}function Hd(t){if(typeof t!="object"||!("image"in t)&&!("image_url"in t)&&!("image_data"in t))throw new A2({data:t});return t.image||t.image_url||t.image_data}async function P2({gatewayUrls:t,uri:e}){try{const r=await fetch(e).then(o=>o.json());return await Kl({gatewayUrls:t,uri:Hd(r)})}catch{throw new Ql({uri:e})}}async function Kl({gatewayUrls:t,uri:e}){const{uri:r,isOnChain:n}=zd({uri:e,gatewayUrls:t});if(n||await D2(r))return r;throw new Ql({uri:e})}function I2(t){let e=t;e.startsWith("did:nft:")&&(e=e.replace("did:nft:","").replace(/_/g,"/"));const[r,n,o]=e.split("/"),[i,s]=r.split(":"),[a,c]=n.split(":");if(!i||i.toLowerCase()!=="eip155")throw new gi({reason:"Only EIP-155 supported"});if(!s)throw new gi({reason:"Chain ID not found"});if(!c)throw new gi({reason:"Contract address not found"});if(!o)throw new gi({reason:"Token ID not found"});if(!a)throw new gi({reason:"ERC namespace not found"});return{chainID:parseInt(s),namespace:a.toLowerCase(),contractAddress:c,tokenID:o}}async function T2(t,{nft:e}){if(e.namespace==="erc721")return Ir(t,{address:e.contractAddress,abi:[{name:"tokenURI",type:"function",stateMutability:"view",inputs:[{name:"tokenId",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"tokenURI",args:[BigInt(e.tokenID)]});if(e.namespace==="erc1155")return Ir(t,{address:e.contractAddress,abi:[{name:"uri",type:"function",stateMutability:"view",inputs:[{name:"_id",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"uri",args:[BigInt(e.tokenID)]});throw new C2({namespace:e.namespace})}async function B2(t,{gatewayUrls:e,record:r}){return/eip155:/i.test(r)?O2(t,{gatewayUrls:e,record:r}):Kl({uri:r,gatewayUrls:e})}async function O2(t,{gatewayUrls:e,record:r}){const n=I2(r),o=await T2(t,{nft:n}),{uri:i,isOnChain:s,isEncoded:a}=zd({uri:o,gatewayUrls:e});if(s&&(i.includes("data:application/json;base64,")||i.startsWith("{"))){const l=a?atob(i.replace("data:application/json;base64,","")):i,d=JSON.parse(l);return Kl({uri:Hd(d),gatewayUrls:e})}let c=n.tokenID;return n.namespace==="erc1155"&&(c=c.replace("0x","").padStart(64,"0")),P2({gatewayUrls:e,uri:i.replace(/(?:0x)?{id}/,c)})}async function Gd(t,{blockNumber:e,blockTag:r,name:n,key:o,universalResolverAddress:i}){let s=i;if(!s){if(!t.chain)throw new Error("client chain not configured. universalResolverAddress is required.");s=Yn({blockNumber:e,chain:t.chain,contract:"ensUniversalResolver"})}try{const a=await Ir(t,{address:s,abi:Md,functionName:"resolve",args:[dr(ua(n)),Ur({abi:y0,functionName:"text",args:[Xo(n),o]})],blockNumber:e,blockTag:r});if(a[0]==="0x")return null;const c=ri({abi:y0,functionName:"text",data:a[0]});return c===""?null:c}catch(a){if(ql(a,"resolve"))return null;throw a}}async function k2(t,{blockNumber:e,blockTag:r,gatewayUrls:n,name:o,universalResolverAddress:i}){const s=await Gd(t,{blockNumber:e,blockTag:r,key:"avatar",name:o,universalResolverAddress:i});if(!s)return null;try{return await B2(t,{record:s,gatewayUrls:n})}catch{return null}}async function R2(t,{address:e,blockNumber:r,blockTag:n,universalResolverAddress:o}){let i=o;if(!i){if(!t.chain)throw new Error("client chain not configured. universalResolverAddress is required.");i=Yn({blockNumber:r,chain:t.chain,contract:"ensUniversalResolver"})}const s=`${e.toLowerCase().substring(2)}.addr.reverse`;try{return(await Ir(t,{address:i,abi:qw,functionName:"reverse",args:[dr(ua(s))],blockNumber:r,blockTag:n}))[0]}catch(a){if(ql(a,"reverse"))return null;throw a}}async function N2(t,{blockNumber:e,blockTag:r,name:n,universalResolverAddress:o}){let i=o;if(!i){if(!t.chain)throw new Error("client chain not configured. universalResolverAddress is required.");i=Yn({blockNumber:e,chain:t.chain,contract:"ensUniversalResolver"})}const[s]=await Ir(t,{address:i,abi:[{inputs:[{type:"bytes"}],name:"findResolver",outputs:[{type:"address"},{type:"bytes32"}],stateMutability:"view",type:"function"}],functionName:"findResolver",args:[dr(ua(n))],blockNumber:e,blockTag:r});return s}async function M2(t){const e=na(t,{method:"eth_newBlockFilter"}),r=await t.request({method:"eth_newBlockFilter"});return{id:r,request:e(r),type:"block"}}async function Vd(t,{address:e,args:r,event:n,events:o,fromBlock:i,strict:s,toBlock:a}={}){const c=o??(n?[n]:void 0),l=na(t,{method:"eth_newFilter"});let d=[];c&&(d=[c.flatMap(g=>_o({abi:[g],eventName:g.name,args:r}))],n&&(d=d[0]));const p=await t.request({method:"eth_newFilter",params:[{address:e,fromBlock:typeof i=="bigint"?ne(i):i,toBlock:typeof a=="bigint"?ne(a):a,...d.length?{topics:d}:{}}]});return{abi:c,args:r,eventName:n?n.name:void 0,fromBlock:i,id:p,request:l(p),strict:s,toBlock:a,type:"event"}}async function qd(t){const e=na(t,{method:"eth_newPendingTransactionFilter"}),r=await t.request({method:"eth_newPendingTransactionFilter"});return{id:r,request:e(r),type:"transaction"}}async function $2(t,{address:e,blockNumber:r,blockTag:n="latest"}){const o=r?ne(r):void 0,i=await t.request({method:"eth_getBalance",params:[e,o||n]});return BigInt(i)}async function U2(t,{blockHash:e,blockNumber:r,blockTag:n="latest"}={}){const o=r!==void 0?ne(r):void 0;let i;return e?i=await t.request({method:"eth_getBlockTransactionCountByHash",params:[e]}):i=await t.request({method:"eth_getBlockTransactionCountByNumber",params:[o||n]}),at(i)}async function F2(t,{address:e,blockNumber:r,blockTag:n="latest"}){const o=r!==void 0?ne(r):void 0,i=await t.request({method:"eth_getCode",params:[e,o||n]});if(i!=="0x")return i}function L2(t){var e;return{baseFeePerGas:t.baseFeePerGas.map(r=>BigInt(r)),gasUsedRatio:t.gasUsedRatio,oldestBlock:BigInt(t.oldestBlock),reward:(e=t.reward)==null?void 0:e.map(r=>r.map(n=>BigInt(n)))}}async function j2(t,{blockCount:e,blockNumber:r,blockTag:n="latest",rewardPercentiles:o}){const i=r?ne(r):void 0,s=await t.request({method:"eth_feeHistory",params:[ne(e),i||n,o]});return L2(s)}async function W2(t,{filter:e}){const r=e.strict??!1;return(await e.request({method:"eth_getFilterLogs",params:[e.id]})).map(o=>{var i;try{const{eventName:s,args:a}="abi"in e&&e.abi?Do({abi:e.abi,data:o.data,topics:o.topics,strict:r}):{eventName:void 0,args:void 0};return Ut(o,{args:a,eventName:s})}catch(s){let a,c;if(s instanceof tn||s instanceof Xn){if("strict"in e&&e.strict)return;a=s.abiItem.name,c=(i=s.abiItem.inputs)==null?void 0:i.some(l=>!("name"in l&&l.name))}return Ut(o,{args:c?[]:{},eventName:a})}}).filter(Boolean)}async function z2(t,{address:e,blockNumber:r,blockTag:n="latest",slot:o}){const i=r!==void 0?ne(r):void 0;return await t.request({method:"eth_getStorageAt",params:[e,o,i||n]})}async function Zl(t,{blockHash:e,blockNumber:r,blockTag:n,hash:o,index:i}){var d,p,g;const s=n||"latest",a=r!==void 0?ne(r):void 0;let c=null;if(o?c=await t.request({method:"eth_getTransactionByHash",params:[o]}):e?c=await t.request({method:"eth_getTransactionByBlockHashAndIndex",params:[e,ne(i)]}):(a||s)&&(c=await t.request({method:"eth_getTransactionByBlockNumberAndIndex",params:[a||s,ne(i)]})),!c)throw new hd({blockHash:e,blockNumber:r,blockTag:s,hash:o,index:i});return(((g=(p=(d=t.chain)==null?void 0:d.formatters)==null?void 0:p.transaction)==null?void 0:g.format)||fd)(c)}async function H2(t,{hash:e,transactionReceipt:r}){const[n,o]=await Promise.all([Io(t),e?Zl(t,{hash:e}):void 0]),i=(r==null?void 0:r.blockNumber)||(o==null?void 0:o.blockNumber);return i?n-i+1n:0n}async function Bc(t,{hash:e}){var o,i,s;const r=await t.request({method:"eth_getTransactionReceipt",params:[e]});if(!r)throw new pd({hash:e});return(((s=(i=(o=t.chain)==null?void 0:o.formatters)==null?void 0:i.transactionReceipt)==null?void 0:s.format)||sg)(r)}async function G2(t,e){var A;const{allowFailure:r=!0,batchSize:n,blockNumber:o,blockTag:i,contracts:s,multicallAddress:a}=e,c=n??(typeof((A=t.batch)==null?void 0:A.multicall)=="object"&&t.batch.multicall.batchSize||1024);let l=a;if(!l){if(!t.chain)throw new Error("client chain not configured. multicallAddress is required.");l=Yn({blockNumber:o,chain:t.chain,contract:"multicall3"})}const d=[[]];let p=0,g=0;for(let y=0;y<s.length;y++){const{abi:S,address:m,args:_,functionName:x}=s[y];try{const E=Ur({abi:S,args:_,functionName:x});g+=(E.length-2)/2,c>0&&g>c&&d[p].length>0&&(p++,g=(E.length-2)/2,d[p]=[]),d[p]=[...d[p],{allowFailure:!0,callData:E,target:m}]}catch(E){const D=Yi(E,{abi:S,address:m,args:_,docsPath:"/docs/contract/multicall",functionName:x});if(!r)throw D;d[p]=[...d[p],{allowFailure:!0,callData:"0x",target:m}]}}const w=await Promise.allSettled(d.map(y=>Ir(t,{abi:Pc,address:l,args:[y],blockNumber:o,blockTag:i,functionName:"aggregate3"}))),b=[];for(let y=0;y<w.length;y++){const S=w[y];if(S.status==="rejected"){if(!r)throw S.reason;for(let _=0;_<d[y].length;_++)b.push({status:"failure",error:S.reason,result:void 0});continue}const m=S.value;for(let _=0;_<m.length;_++){const{returnData:x,success:E}=m[_],{callData:D}=d[y][_],{abi:u,address:C,functionName:T,args:B}=s[b.length];try{if(D==="0x")throw new ta;if(!E)throw new Nl({data:x});const M=ri({abi:u,args:B,data:x,functionName:T});b.push(r?{result:M,status:"success"}:M)}catch(M){const j=Yi(M,{abi:u,address:C,args:B,docsPath:"/docs/contract/multicall",functionName:T});if(!r)throw j;b.push({error:j,result:void 0,status:"failure"})}}}if(b.length!==s.length)throw new $("multicall results mismatch");return b}const V2=/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,q2=/^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;function Q2({domain:t,message:e,primaryType:r,types:n}){const o=typeof t>"u"?{}:t,i={EIP712Domain:Xd({domain:o}),...n};Jd({domain:o,message:e,primaryType:r,types:i});const s=["0x1901"];return o&&s.push(K2({domain:o,types:i})),r!=="EIP712Domain"&&s.push(Qd({data:e,primaryType:r,types:i})),st(cr(s))}function K2({domain:t,types:e}){return Qd({data:t,primaryType:"EIP712Domain",types:e})}function Qd({data:t,primaryType:e,types:r}){const n=Kd({data:t,primaryType:e,types:r});return st(n)}function Kd({data:t,primaryType:e,types:r}){const n=[{type:"bytes32"}],o=[Z2({primaryType:e,types:r})];for(const i of r[e]){const[s,a]=Yd({types:r,name:i.name,type:i.type,value:t[i.name]});n.push(s),o.push(a)}return xo(n,o)}function Z2({primaryType:t,types:e}){const r=dr(Y2({primaryType:t,types:e}));return st(r)}function Y2({primaryType:t,types:e}){let r="";const n=Zd({primaryType:t,types:e});n.delete(t);const o=[t,...Array.from(n).sort()];for(const i of o)r+=`${i}(${e[i].map(({name:s,type:a})=>`${a} ${s}`).join(",")})`;return r}function Zd({primaryType:t,types:e},r=new Set){const n=t.match(/^\w*/u),o=n==null?void 0:n[0];if(r.has(o)||e[o]===void 0)return r;r.add(o);for(const i of e[o])Zd({primaryType:i.type,types:e},r);return r}function Yd({types:t,name:e,type:r,value:n}){if(t[r]!==void 0)return[{type:"bytes32"},st(Kd({data:n,primaryType:r,types:t}))];if(r==="bytes")return n=`0x${(n.length%2?"0":"")+n.slice(2)}`,[{type:"bytes32"},st(n)];if(r==="string")return[{type:"bytes32"},st(dr(n))];if(r.lastIndexOf("]")===r.length-1){const o=r.slice(0,r.lastIndexOf("[")),i=n.map(s=>Yd({name:e,type:o,types:t,value:s}));return[{type:"bytes32"},st(xo(i.map(([s])=>s),i.map(([,s])=>s)))]}return[{type:r},n]}function Jd({domain:t,message:e,primaryType:r,types:n}){const o=n,i=(s,a)=>{for(const c of s){const{name:l,type:d}=c,p=d,g=a[l],w=p.match(q2);if(w&&(typeof g=="number"||typeof g=="bigint")){const[y,S,m]=w;ne(g,{signed:S==="int",size:parseInt(m)/8})}if(p==="address"&&typeof g=="string"&&!Bn(g))throw new Mi({address:g});const b=p.match(V2);if(b){const[y,S]=b;if(S&&ze(g)!==parseInt(S))throw new Bg({expectedSize:parseInt(S),givenSize:ze(g)})}const A=o[p];A&&i(A,g)}};if(o.EIP712Domain&&t&&i(o.EIP712Domain,t),r!=="EIP712Domain"){const s=o[r];i(s,e)}}function Xd({domain:t}){return[typeof(t==null?void 0:t.name)=="string"&&{name:"name",type:"string"},(t==null?void 0:t.version)&&{name:"version",type:"string"},typeof(t==null?void 0:t.chainId)=="number"&&{name:"chainId",type:"uint256"},(t==null?void 0:t.verifyingContract)&&{name:"verifyingContract",type:"address"},(t==null?void 0:t.salt)&&{name:"salt",type:"bytes32"}].filter(Boolean)}const ja="/docs/contract/encodeDeployData";function eh({abi:t,args:e,bytecode:r}){if(!e||e.length===0)return r;const n=t.find(i=>"type"in i&&i.type==="constructor");if(!n)throw new Eg({docsPath:ja});if(!("inputs"in n))throw new u0({docsPath:ja});if(!n.inputs||n.inputs.length===0)throw new u0({docsPath:ja});const o=xo(n.inputs,e);return xl([r,o])}function J2(t,e){const r=(()=>typeof t=="string"?ar(t):t.raw instanceof Uint8Array?t.raw:Dr(t.raw))(),n=ar(`Ethereum Signed Message:
${r.length}`);return st(cr([n,r]),e)}const X2="0x60806040523480156200001157600080fd5b50604051620007003803806200070083398101604081905262000034916200056f565b6000620000438484846200004f565b9050806000526001601ff35b600080846001600160a01b0316803b806020016040519081016040528181526000908060200190933c90507f6492649264926492649264926492649264926492649264926492649264926492620000a68462000451565b036200021f57600060608085806020019051810190620000c79190620005ce565b8651929550909350915060000362000192576000836001600160a01b031683604051620000f5919062000643565b6000604051808303816000865af19150503d806000811462000134576040519150601f19603f3d011682016040523d82523d6000602084013e62000139565b606091505b5050905080620001905760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b505b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90620001c4908b90869060040162000661565b602060405180830381865afa158015620001e2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200020891906200069d565b6001600160e01b031916149450505050506200044a565b805115620002b157604051630b135d3f60e11b808252906001600160a01b03871690631626ba7e9062000259908890889060040162000661565b602060405180830381865afa15801562000277573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200029d91906200069d565b6001600160e01b031916149150506200044a565b8251604114620003195760405162461bcd60e51b815260206004820152603a6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e677468000000000000606482015260840162000187565b620003236200046b565b506020830151604080850151855186939260009185919081106200034b576200034b620006c9565b016020015160f81c9050601b81148015906200036b57508060ff16601c14155b15620003cf5760405162461bcd60e51b815260206004820152603b6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c75650000000000606482015260840162000187565b6040805160008152602081018083528a905260ff83169181019190915260608101849052608081018390526001600160a01b038a169060019060a0016020604051602081039080840390855afa1580156200042e573d6000803e3d6000fd5b505050602060405103516001600160a01b031614955050505050505b9392505050565b60006020825110156200046357600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b03811681146200049f57600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620004d5578181015183820152602001620004bb565b50506000910152565b600082601f830112620004f057600080fd5b81516001600160401b03808211156200050d576200050d620004a2565b604051601f8301601f19908116603f01168101908282118183101715620005385762000538620004a2565b816040528381528660208588010111156200055257600080fd5b62000565846020830160208901620004b8565b9695505050505050565b6000806000606084860312156200058557600080fd5b8351620005928162000489565b6020850151604086015191945092506001600160401b03811115620005b657600080fd5b620005c486828701620004de565b9150509250925092565b600080600060608486031215620005e457600080fd5b8351620005f18162000489565b60208501519093506001600160401b03808211156200060f57600080fd5b6200061d87838801620004de565b935060408601519150808211156200063457600080fd5b50620005c486828701620004de565b6000825162000657818460208701620004b8565b9190910192915050565b828152604060208201526000825180604084015262000688816060850160208701620004b8565b601f01601f1916919091016060019392505050565b600060208284031215620006b057600080fd5b81516001600160e01b0319811681146200044a57600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572";/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */BigInt(0);BigInt(1);BigInt(2);function eb(t,e){if(t.length!==e.length)return!1;for(let r=0;r<t.length;r++)if(t[r]!==e[r])return!1;return!0}function tb(t,e){const r=Kt(t)?Dr(t):t,n=Kt(e)?Dr(e):e;return eb(r,n)}async function th(t,{address:e,hash:r,signature:n,...o}){const i=Kt(n)?n:dr(n);try{const{data:s}=await sa(t,{data:eh({abi:Qw,args:[e,r,i],bytecode:X2}),...o});return tb(s??"0x0","0x1")}catch(s){if(s instanceof Bd)return!1;throw s}}async function rb(t,{address:e,message:r,signature:n,...o}){const i=J2(r);return th(t,{address:e,hash:i,signature:n,...o})}async function nb(t,{address:e,signature:r,message:n,primaryType:o,types:i,domain:s,...a}){const c=Q2({message:n,primaryType:o,types:i,domain:s});return th(t,{address:e,hash:c,signature:r,...a})}function rh(t,{emitOnBegin:e=!1,emitMissed:r=!1,onBlockNumber:n,onError:o,poll:i,pollingInterval:s=t.pollingInterval}){const a=typeof i<"u"?i:t.transport.type!=="webSocket";let c;return a?(()=>{const p=ct(["watchBlockNumber",t.uid,e,r,s]);return ni(p,{onBlockNumber:n,onError:o},g=>Po(async()=>{var w;try{const b=await Io(t,{cacheTime:0});if(c){if(b===c)return;if(b-c>1&&r)for(let A=c+1n;A<b;A++)g.onBlockNumber(A,c),c=A}(!c||b>c)&&(g.onBlockNumber(b,c),c=b)}catch(b){(w=g.onError)==null||w.call(g,b)}},{emitOnBegin:e,interval:s}))})():(()=>{let p=!0,g=()=>p=!1;return(async()=>{try{const{unsubscribe:w}=await t.transport.subscribe({params:["newHeads"],onData(b){var y;if(!p)return;const A=Ys((y=b.result)==null?void 0:y.number);n(A,c),c=A},onError(b){o==null||o(b)}});g=w,p||g()}catch(w){o==null||o(w)}})(),g})()}async function ib(t,{confirmations:e=1,hash:r,onReplaced:n,pollingInterval:o=t.pollingInterval,timeout:i}){const s=ct(["waitForTransactionReceipt",t.uid,r]);let a,c,l,d=!1;return new Promise((p,g)=>{i&&setTimeout(()=>g(new wg({hash:r})),i);const w=ni(s,{onReplaced:n,resolve:p,reject:g},b=>{const A=rh(t,{emitMissed:!0,emitOnBegin:!0,poll:!0,pollingInterval:o,async onBlockNumber(y){if(d)return;let S=y;const m=_=>{A(),_(),w()};try{if(l){if(e>1&&(!l.blockNumber||S-l.blockNumber+1n<e))return;m(()=>b.resolve(l));return}if(a||(d=!0,await Ud(async()=>{a=await Zl(t,{hash:r}),a.blockNumber&&(S=a.blockNumber)},{delay:({count:_})=>~~(1<<_)*200,retryCount:6}),d=!1),l=await Bc(t,{hash:r}),e>1&&(!l.blockNumber||S-l.blockNumber+1n<e))return;m(()=>b.resolve(l))}catch(_){if(a&&(_ instanceof hd||_ instanceof pd))try{c=a;const E=(await Pr(t,{blockNumber:S,includeTransactions:!0})).transactions.find(({from:u,nonce:C})=>u===c.from&&C===c.nonce);if(!E||(l=await Bc(t,{hash:E.hash}),e>1&&(!l.blockNumber||S-l.blockNumber+1n<e)))return;let D="replaced";E.to===c.to&&E.value===c.value?D="repriced":E.from===E.to&&E.value===0n&&(D="cancelled"),m(()=>{var u;(u=b.onReplaced)==null||u.call(b,{reason:D,replacedTransaction:c,transaction:E,transactionReceipt:l}),b.resolve(l)})}catch(x){m(()=>b.reject(x))}else m(()=>b.reject(_))}}})})})}function ob(t,{blockTag:e="latest",emitMissed:r=!1,emitOnBegin:n=!1,onBlock:o,onError:i,includeTransactions:s,poll:a,pollingInterval:c=t.pollingInterval}){const l=typeof a<"u"?a:t.transport.type!=="webSocket",d=s??!1;let p;return l?(()=>{const b=ct(["watchBlocks",t.uid,r,n,d,c]);return ni(b,{onBlock:o,onError:i},A=>Po(async()=>{var y;try{const S=await Pr(t,{blockTag:e,includeTransactions:d});if(S.number&&(p!=null&&p.number)){if(S.number===p.number)return;if(S.number-p.number>1&&r)for(let m=(p==null?void 0:p.number)+1n;m<S.number;m++){const _=await Pr(t,{blockNumber:m,includeTransactions:d});A.onBlock(_,p),p=_}}(!(p!=null&&p.number)||e==="pending"&&!(S!=null&&S.number)||S.number&&S.number>p.number)&&(A.onBlock(S,p),p=S)}catch(S){(y=A.onError)==null||y.call(A,S)}},{emitOnBegin:n,interval:c}))})():(()=>{let b=!0,A=()=>b=!1;return(async()=>{try{const{unsubscribe:y}=await t.transport.subscribe({params:["newHeads"],onData(S){var x,E,D;if(!b)return;const _=(((D=(E=(x=t.chain)==null?void 0:x.formatters)==null?void 0:E.block)==null?void 0:D.format)||dd)(S.result);o(_,p),p=_},onError(S){i==null||i(S)}});A=y,b||A()}catch(y){i==null||i(y)}})(),A})()}function sb(t,{address:e,args:r,batch:n=!0,event:o,events:i,onError:s,onLogs:a,poll:c,pollingInterval:l=t.pollingInterval,strict:d}){const p=typeof c<"u"?c:t.transport.type!=="webSocket",g=d??!1;return p?(()=>{const A=ct(["watchEvent",e,r,n,t.uid,o,l]);return ni(A,{onLogs:a,onError:s},y=>{let S,m,_=!1;const x=Po(async()=>{var E;if(!_){try{m=await Vd(t,{address:e,args:r,event:o,events:i,strict:g})}catch{}_=!0;return}try{let D;if(m)D=await aa(t,{filter:m});else{const u=await Io(t);S&&S!==u?D=await Wl(t,{address:e,args:r,event:o,events:i,fromBlock:S+1n,toBlock:u}):D=[],S=u}if(D.length===0)return;n?y.onLogs(D):D.forEach(u=>y.onLogs([u]))}catch(D){m&&D instanceof rn&&(_=!1),(E=y.onError)==null||E.call(y,D)}},{emitOnBegin:!0,interval:l});return async()=>{m&&await ca(t,{filter:m}),x()}})})():(()=>{let A=!0,y=()=>A=!1;return(async()=>{try{const S=i??(o?[o]:void 0);let m=[];S&&(m=[S.flatMap(x=>_o({abi:[x],eventName:x.name,args:r}))],o&&(m=m[0]));const{unsubscribe:_}=await t.transport.subscribe({params:["logs",{address:e,topics:m}],onData(x){var D;if(!A)return;const E=x.result;try{const{eventName:u,args:C}=Do({abi:S,data:E.data,topics:E.topics,strict:g}),T=Ut(E,{args:C,eventName:u});a([T])}catch(u){let C,T;if(u instanceof tn||u instanceof Xn){if(d)return;C=u.abiItem.name,T=(D=u.abiItem.inputs)==null?void 0:D.some(M=>!("name"in M&&M.name))}const B=Ut(E,{args:T?[]:{},eventName:C});a([B])}},onError(x){s==null||s(x)}});y=_,A||y()}catch(S){s==null||s(S)}})(),y})()}function ab(t,{batch:e=!0,onError:r,onTransactions:n,poll:o,pollingInterval:i=t.pollingInterval}){return(typeof o<"u"?o:t.transport.type!=="webSocket")?(()=>{const l=ct(["watchPendingTransactions",t.uid,e,i]);return ni(l,{onTransactions:n,onError:r},d=>{let p;const g=Po(async()=>{var w;try{if(!p)try{p=await qd(t);return}catch(A){throw g(),A}const b=await aa(t,{filter:p});if(b.length===0)return;e?d.onTransactions(b):b.forEach(A=>d.onTransactions([A]))}catch(b){(w=d.onError)==null||w.call(d,b)}},{emitOnBegin:!0,interval:i});return async()=>{p&&await ca(t,{filter:p}),g()}})})():(()=>{let l=!0,d=()=>l=!1;return(async()=>{try{const{unsubscribe:p}=await t.transport.subscribe({params:["newPendingTransactions"],onData(g){if(!l)return;const w=g.result;n([w])},onError(g){r==null||r(g)}});d=p,l||d()}catch(p){r==null||r(p)}})(),d})()}function cb(t){return{call:e=>sa(t,e),createBlockFilter:()=>M2(t),createContractEventFilter:e=>Pd(t,e),createEventFilter:e=>Vd(t,e),createPendingTransactionFilter:()=>qd(t),estimateContractGas:e=>Gw(t,e),estimateGas:e=>jl(t,e),getBalance:e=>$2(t,e),getBlock:e=>Pr(t,e),getBlockNumber:e=>Io(t,e),getBlockTransactionCount:e=>U2(t,e),getBytecode:e=>F2(t,e),getChainId:()=>Ji(t),getContractEvents:e=>Rd(t,e),getEnsAddress:e=>v2(t,e),getEnsAvatar:e=>k2(t,e),getEnsName:e=>R2(t,e),getEnsResolver:e=>N2(t,e),getEnsText:e=>Gd(t,e),getFeeHistory:e=>j2(t,e),estimateFeesPerGas:e=>Hw(t,e),getFilterChanges:e=>aa(t,e),getFilterLogs:e=>W2(t,e),getGasPrice:()=>Ll(t),getLogs:e=>Wl(t,e),estimateMaxPriorityFeePerGas:e=>zw(t,e),getStorageAt:e=>z2(t,e),getTransaction:e=>Zl(t,e),getTransactionConfirmations:e=>H2(t,e),getTransactionCount:e=>kd(t,e),getTransactionReceipt:e=>Bc(t,e),multicall:e=>G2(t,e),prepareTransactionRequest:e=>oa(t,e),readContract:e=>Ir(t,e),sendRawTransaction:e=>Hl(t,e),simulateContract:e=>e2(t,e),verifyMessage:e=>rb(t,e),verifyTypedData:e=>nb(t,e),uninstallFilter:e=>ca(t,e),waitForTransactionReceipt:e=>ib(t,e),watchBlocks:e=>ob(t,e),watchBlockNumber:e=>rh(t,e),watchContractEvent:e=>a2(t,e),watchEvent:e=>sb(t,e),watchPendingTransactions:e=>ab(t,e)}}function E0(t){const{key:e="public",name:r="Public Client"}=t;return $d({...t,key:e,name:r,type:"publicClient"}).extend(cb)}function lb(t,{abi:e,args:r,bytecode:n,...o}){const i=eh({abi:e,args:r,bytecode:n});return Gl(t,{...o,data:i})}async function ub(t){return(await t.request({method:"eth_accounts"})).map(r=>kl(r))}async function fb(t){return await t.request({method:"wallet_getPermissions"})}async function db(t){return(await t.request({method:"eth_requestAccounts"})).map(r=>$t(r))}async function hb(t,e){return t.request({method:"wallet_requestPermissions",params:[e]})}async function pb(t,{account:e=t.account,message:r}){if(!e)throw new ti({docsPath:"/docs/actions/wallet/signMessage"});const n=It(e);if(n.type==="local")return n.signMessage({message:r});const o=(()=>typeof r=="string"?Al(r):r.raw instanceof Uint8Array?dr(r.raw):r.raw)();return t.request({method:"personal_sign",params:[o,n.address]})}async function gb(t,e){var l,d,p,g;const{account:r=t.account,chain:n=t.chain,...o}=e;if(!r)throw new ti({docsPath:"/docs/actions/wallet/signTransaction"});const i=It(r);So({account:i,...e});const s=await Ji(t);n!==null&&od({currentChainId:s,chain:n});const a=(n==null?void 0:n.formatters)||((l=t.chain)==null?void 0:l.formatters),c=((d=a==null?void 0:a.transactionRequest)==null?void 0:d.format)||Js;return i.type==="local"?i.signTransaction({chainId:s,...o},{serializer:(g=(p=t.chain)==null?void 0:p.serializers)==null?void 0:g.transaction}):await t.request({method:"eth_signTransaction",params:[{...c(o),chainId:ne(s),from:i.address}]})}async function wb(t,{account:e=t.account,domain:r,message:n,primaryType:o,types:i}){if(!e)throw new ti({docsPath:"/docs/actions/wallet/signTypedData"});const s=It(e),a={EIP712Domain:Xd({domain:r}),...i};if(Jd({domain:r,message:n,primaryType:o,types:a}),s.type==="local")return s.signTypedData({domain:r,primaryType:o,types:a,message:n});const c=ct({domain:r??{},primaryType:o,types:a,message:n},(l,d)=>Kt(d)?d.toLowerCase():d);return t.request({method:"eth_signTypedData_v4",params:[s.address,c]})}async function bb(t,{id:e}){await t.request({method:"wallet_switchEthereumChain",params:[{chainId:ne(e)}]})}async function mb(t,e){return await t.request({method:"wallet_watchAsset",params:e})}function yb(t){return{addChain:e=>u2(t,e),deployContract:e=>lb(t,e),getAddresses:()=>ub(t),getChainId:()=>Ji(t),getPermissions:()=>fb(t),prepareTransactionRequest:e=>oa(t,e),requestAddresses:()=>db(t),requestPermissions:e=>hb(t,e),sendRawTransaction:e=>Hl(t,e),sendTransaction:e=>Gl(t,e),signMessage:e=>pb(t,e),signTransaction:e=>gb(t,e),signTypedData:e=>wb(t,e),switchChain:e=>bb(t,e),watchAsset:e=>mb(t,e),writeContract:e=>l2(t,e)}}function Yl(t){const{key:e="wallet",name:r="Wallet Client",transport:n}=t;return $d({...t,key:e,name:r,transport:i=>n({...i,retryCount:0}),type:"walletClient"}).extend(yb)}function vb(t,e={}){const{key:r="webSocket",name:n="WebSocket JSON-RPC",retryDelay:o}=e;return({chain:i,retryCount:s,timeout:a})=>{var p;const c=e.retryCount??s,l=a??e.timeout??1e4,d=t||((p=i==null?void 0:i.rpcUrls.default.webSocket)==null?void 0:p[0]);if(!d)throw new Ld;return la({key:r,name:n,async request({method:g,params:w}){const b={method:g,params:w},A=await La(d),{error:y,result:S}=await In.webSocketAsync(A,{body:b,timeout:l});if(y)throw new Ml({body:b,error:y,url:d});return S},retryCount:c,retryDelay:o,timeout:l,type:"webSocket"},{getSocket(){return La(d)},async subscribe({params:g,onData:w,onError:b}){const A=await La(d),{result:y}=await new Promise((S,m)=>In.webSocket(A,{body:{method:"eth_subscribe",params:g},onResponse(_){if(_.error){m(_.error),b==null||b(_.error);return}if(typeof _.id=="number"){S(_);return}_.method==="eth_subscription"&&w(_.params)}}));return{subscriptionId:y,async unsubscribe(){return new Promise(S=>In.webSocket(A,{body:{method:"eth_unsubscribe",params:[y]},onResponse:S}))}}}})}}function Ab(t){var r;if(!t)return"Injected";const e=n=>{if(n.isApexWallet)return"Apex Wallet";if(n.isAvalanche)return"Core Wallet";if(n.isBackpack)return"Backpack";if(n.isBifrost)return"Bifrost Wallet";if(n.isBitKeep)return"BitKeep";if(n.isBitski)return"Bitski";if(n.isBlockWallet)return"BlockWallet";if(n.isBraveWallet)return"Brave Wallet";if(n.isCoin98)return"Coin98 Wallet";if(n.isCoinbaseWallet)return"Coinbase Wallet";if(n.isDawn)return"Dawn Wallet";if(n.isDefiant)return"Defiant";if(n.isDesig)return"Desig Wallet";if(n.isEnkrypt)return"Enkrypt";if(n.isExodus)return"Exodus";if(n.isFordefi)return"Fordefi";if(n.isFrame)return"Frame";if(n.isFrontier)return"Frontier Wallet";if(n.isGamestop)return"GameStop Wallet";if(n.isHaqqWallet)return"HAQQ Wallet";if(n.isHyperPay)return"HyperPay Wallet";if(n.isImToken)return"ImToken";if(n.isHaloWallet)return"Halo Wallet";if(n.isKuCoinWallet)return"KuCoin Wallet";if(n.isMathWallet)return"MathWallet";if(n.isNovaWallet)return"Nova Wallet";if(n.isOkxWallet||n.isOKExWallet)return"OKX Wallet";if(n.isOneInchIOSWallet||n.isOneInchAndroidWallet)return"1inch Wallet";if(n.isOpera)return"Opera";if(n.isPhantom)return"Phantom";if(n.isPortal)return"Ripio Portal";if(n.isRabby)return"Rabby Wallet";if(n.isRainbow)return"Rainbow";if(n.isStatus)return"Status";if(n.isSubWallet)return"SubWallet";if(n.isTalisman)return"Talisman";if(n.isTally)return"Taho";if(n.isTokenPocket)return"TokenPocket";if(n.isTokenary)return"Tokenary";if(n.isTrust||n.isTrustWallet)return"Trust Wallet";if(n.isTTWallet)return"TTWallet";if(n.isXDEFI)return"XDEFI Wallet";if(n.isZeal)return"Zeal";if(n.isZerion)return"Zerion";if(n.isMetaMask)return"MetaMask"};if((r=t.providers)!=null&&r.length){const n=new Set;let o=1;for(const s of t.providers){let a=e(s);a||(a=`Unknown Wallet #${o}`,o+=1),n.add(a)}const i=[...n];return i.length?i:i[0]??"Injected"}return e(t)??"Injected"}var es,nh=class extends Sl{constructor({chains:t,options:e}={}){const r={shimDisconnect:!0,getProvider(){if(typeof window>"u")return;const o=window.ethereum;return o!=null&&o.providers?o.providers[0]:o},...e};super({chains:t,options:r}),this.id="injected",ut(this,es,void 0),this.shimDisconnectKey=`${this.id}.shimDisconnect`,this.onAccountsChanged=o=>{o.length===0?this.emit("disconnect"):this.emit("change",{account:$t(o[0])})},this.onChainChanged=o=>{const i=hs(o),s=this.isChainUnsupported(i);this.emit("change",{chain:{id:i,unsupported:s}})},this.onDisconnect=async o=>{var i;o.code===1013&&await this.getProvider()&&await this.getAccount()||(this.emit("disconnect"),this.options.shimDisconnect&&((i=this.storage)==null||i.removeItem(this.shimDisconnectKey)))};const n=r.getProvider();if(typeof r.name=="string")this.name=r.name;else if(n){const o=Ab(n);r.name?this.name=r.name(o):typeof o=="string"?this.name=o:this.name=o[0]}else this.name="Injected";this.ready=!!n}async connect({chainId:t}={}){var e;try{const r=await this.getProvider();if(!r)throw new Qr;r.on&&(r.on("accountsChanged",this.onAccountsChanged),r.on("chainChanged",this.onChainChanged),r.on("disconnect",this.onDisconnect)),this.emit("message",{type:"connecting"});const n=await r.request({method:"eth_requestAccounts"}),o=$t(n[0]);let i=await this.getChainId(),s=this.isChainUnsupported(i);return t&&i!==t&&(i=(await this.switchChain(t)).id,s=this.isChainUnsupported(i)),this.options.shimDisconnect&&((e=this.storage)==null||e.setItem(this.shimDisconnectKey,!0)),{account:o,chain:{id:i,unsupported:s}}}catch(r){throw this.isUserRejectedRequestError(r)?new dt(r):r.code===-32002?new kn(r):r}}async disconnect(){var e;const t=await this.getProvider();t!=null&&t.removeListener&&(t.removeListener("accountsChanged",this.onAccountsChanged),t.removeListener("chainChanged",this.onChainChanged),t.removeListener("disconnect",this.onDisconnect),this.options.shimDisconnect&&((e=this.storage)==null||e.removeItem(this.shimDisconnectKey)))}async getAccount(){const t=await this.getProvider();if(!t)throw new Qr;const e=await t.request({method:"eth_accounts"});return $t(e[0])}async getChainId(){const t=await this.getProvider();if(!t)throw new Qr;return t.request({method:"eth_chainId"}).then(hs)}async getProvider(){const t=this.options.getProvider();return t&&$i(this,es,t),xe(this,es)}async getWalletClient({chainId:t}={}){const[e,r]=await Promise.all([this.getProvider(),this.getAccount()]),n=this.chains.find(o=>o.id===t);if(!e)throw new Error("provider is required.");return Yl({account:r,chain:n,transport:Vl(e)})}async isAuthorized(){var t;try{if(this.options.shimDisconnect&&!((t=this.storage)!=null&&t.getItem(this.shimDisconnectKey)))return!1;if(!await this.getProvider())throw new Qr;return!!await this.getAccount()}catch{return!1}}async switchChain(t){var n,o,i;const e=await this.getProvider();if(!e)throw new Qr;const r=ne(t);try{return await Promise.all([e.request({method:"wallet_switchEthereumChain",params:[{chainId:r}]}),new Promise(s=>this.on("change",({chain:a})=>{(a==null?void 0:a.id)===t&&s()}))]),this.chains.find(s=>s.id===t)??{id:t,name:`Chain ${r}`,network:`${r}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpcUrls:{default:{http:[""]},public:{http:[""]}}}}catch(s){const a=this.chains.find(c=>c.id===t);if(!a)throw new gd({chainId:t,connectorId:this.id});if(s.code===4902||((o=(n=s==null?void 0:s.data)==null?void 0:n.originalError)==null?void 0:o.code)===4902)try{if(await e.request({method:"wallet_addEthereumChain",params:[{chainId:r,chainName:a.name,nativeCurrency:a.nativeCurrency,rpcUrls:[((i=a.rpcUrls.public)==null?void 0:i.http[0])??""],blockExplorerUrls:this.getBlockExplorerUrls(a)}]}),await this.getChainId()!==t)throw new dt(new Error("User rejected switch after adding network."));return a}catch(c){throw new dt(c)}throw this.isUserRejectedRequestError(s)?new dt(s):new lr(s)}}async watchAsset({address:t,decimals:e=18,image:r,symbol:n}){const o=await this.getProvider();if(!o)throw new Qr;return o.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:t,decimals:e,image:r,symbol:n}}})}isUserRejectedRequestError(t){return t.code===4001}};es=new WeakMap;var Jl=(t,e,r)=>{if(!e.has(t))throw TypeError("Cannot "+r)},Wa=(t,e,r)=>(Jl(t,e,"read from private field"),r?r.call(t):e.get(t)),za=(t,e,r)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,r)},Ko=(t,e,r,n)=>(Jl(t,e,"write to private field"),n?n.call(t,r):e.set(t,r),r),Cb=(t,e,r)=>(Jl(t,e,"access private method"),r);const xb=t=>(e,r,n)=>{const o=n.subscribe;return n.subscribe=(s,a,c)=>{let l=s;if(a){const d=(c==null?void 0:c.equalityFn)||Object.is;let p=s(n.getState());l=g=>{const w=s(g);if(!d(p,w)){const b=p;a(p=w,b)}},c!=null&&c.fireImmediately&&a(p,p)}return o(l)},t(e,r,n)},Eb=xb;function _b(t,e){let r;try{r=t()}catch{return}return{getItem:o=>{var i;const s=c=>c===null?null:JSON.parse(c,e==null?void 0:e.reviver),a=(i=r.getItem(o))!=null?i:null;return a instanceof Promise?a.then(s):s(a)},setItem:(o,i)=>r.setItem(o,JSON.stringify(i,e==null?void 0:e.replacer)),removeItem:o=>r.removeItem(o)}}const Xi=t=>e=>{try{const r=t(e);return r instanceof Promise?r:{then(n){return Xi(n)(r)},catch(n){return this}}}catch(r){return{then(n){return this},catch(n){return Xi(n)(r)}}}},Sb=(t,e)=>(r,n,o)=>{let i={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:y=>y,version:0,merge:(y,S)=>({...S,...y}),...e},s=!1;const a=new Set,c=new Set;let l;try{l=i.getStorage()}catch{}if(!l)return t((...y)=>{console.warn(`[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`),r(...y)},n,o);const d=Xi(i.serialize),p=()=>{const y=i.partialize({...n()});let S;const m=d({state:y,version:i.version}).then(_=>l.setItem(i.name,_)).catch(_=>{S=_});if(S)throw S;return m},g=o.setState;o.setState=(y,S)=>{g(y,S),p()};const w=t((...y)=>{r(...y),p()},n,o);let b;const A=()=>{var y;if(!l)return;s=!1,a.forEach(m=>m(n()));const S=((y=i.onRehydrateStorage)==null?void 0:y.call(i,n()))||void 0;return Xi(l.getItem.bind(l))(i.name).then(m=>{if(m)return i.deserialize(m)}).then(m=>{if(m)if(typeof m.version=="number"&&m.version!==i.version){if(i.migrate)return i.migrate(m.state,m.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return m.state}).then(m=>{var _;return b=i.merge(m,(_=n())!=null?_:w),r(b,!0),p()}).then(()=>{S==null||S(b,void 0),s=!0,c.forEach(m=>m(b))}).catch(m=>{S==null||S(void 0,m)})};return o.persist={setOptions:y=>{i={...i,...y},y.getStorage&&(l=y.getStorage())},clearStorage:()=>{l==null||l.removeItem(i.name)},getOptions:()=>i,rehydrate:()=>A(),hasHydrated:()=>s,onHydrate:y=>(a.add(y),()=>{a.delete(y)}),onFinishHydration:y=>(c.add(y),()=>{c.delete(y)})},A(),b||w},Db=(t,e)=>(r,n,o)=>{let i={storage:_b(()=>localStorage),partialize:A=>A,version:0,merge:(A,y)=>({...y,...A}),...e},s=!1;const a=new Set,c=new Set;let l=i.storage;if(!l)return t((...A)=>{console.warn(`[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`),r(...A)},n,o);const d=()=>{const A=i.partialize({...n()});return l.setItem(i.name,{state:A,version:i.version})},p=o.setState;o.setState=(A,y)=>{p(A,y),d()};const g=t((...A)=>{r(...A),d()},n,o);let w;const b=()=>{var A,y;if(!l)return;s=!1,a.forEach(m=>{var _;return m((_=n())!=null?_:g)});const S=((y=i.onRehydrateStorage)==null?void 0:y.call(i,(A=n())!=null?A:g))||void 0;return Xi(l.getItem.bind(l))(i.name).then(m=>{if(m)if(typeof m.version=="number"&&m.version!==i.version){if(i.migrate)return i.migrate(m.state,m.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return m.state}).then(m=>{var _;return w=i.merge(m,(_=n())!=null?_:g),r(w,!0),d()}).then(()=>{S==null||S(w,void 0),w=n(),s=!0,c.forEach(m=>m(w))}).catch(m=>{S==null||S(void 0,m)})};return o.persist={setOptions:A=>{i={...i,...A},A.storage&&(l=A.storage)},clearStorage:()=>{l==null||l.removeItem(i.name)},getOptions:()=>i,rehydrate:()=>b(),hasHydrated:()=>s,onHydrate:A=>(a.add(A),()=>{a.delete(A)}),onFinishHydration:A=>(c.add(A),()=>{c.delete(A)})},i.skipHydration||b(),w||g},Pb=(t,e)=>"getStorage"in e||"serialize"in e||"deserialize"in e?Sb(t,e):Db(t,e),Ib=Pb,_0=t=>{let e;const r=new Set,n=(c,l)=>{const d=typeof c=="function"?c(e):c;if(!Object.is(d,e)){const p=e;e=l??typeof d!="object"?d:Object.assign({},e,d),r.forEach(g=>g(e,p))}},o=()=>e,a={setState:n,getState:o,subscribe:c=>(r.add(c),()=>r.delete(c)),destroy:()=>{r.clear()}};return e=t(n,o,a),a},Tb=t=>t?_0(t):_0;function ih(t,e){if(Object.is(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;if(t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(const[n,o]of t)if(!Object.is(o,e.get(n)))return!1;return!0}if(t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(const n of t)if(!e.has(n))return!1;return!0}const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!1;for(let n=0;n<r.length;n++)if(!Object.prototype.hasOwnProperty.call(e,r[n])||!Object.is(t[r[n]],e[r[n]]))return!1;return!0}function Bb(t){let e=0;function r(){return t[e++]<<8|t[e++]}let n=r(),o=1,i=[0,1];for(let E=1;E<n;E++)i.push(o+=r());let s=r(),a=e;e+=s;let c=0,l=0;function d(){return c==0&&(l=l<<8|t[e++],c=8),l>>--c&1}const p=31,g=2**p,w=g>>>1,b=w>>1,A=g-1;let y=0;for(let E=0;E<p;E++)y=y<<1|d();let S=[],m=0,_=g;for(;;){let E=Math.floor(((y-m+1)*o-1)/_),D=0,u=n;for(;u-D>1;){let B=D+u>>>1;E<i[B]?u=B:D=B}if(D==0)break;S.push(D);let C=m+Math.floor(_*i[D]/o),T=m+Math.floor(_*i[D+1]/o)-1;for(;!((C^T)&w);)y=y<<1&A|d(),C=C<<1&A,T=T<<1&A|1;for(;C&~T&b;)y=y&w|y<<1&A>>>1|d(),C=C<<1^w,T=(T^w)<<1|w|1;m=C,_=1+T-C}let x=n-4;return S.map(E=>{switch(E-x){case 3:return x+65792+(t[a++]<<16|t[a++]<<8|t[a++]);case 2:return x+256+(t[a++]<<8|t[a++]);case 1:return x+t[a++];default:return E-1}})}function Ob(t){let e=0;return()=>t[e++]}function oh(t){return Ob(Bb(kb(t)))}function kb(t){let e=[];[..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"].forEach((o,i)=>e[o.charCodeAt(0)]=i);let r=t.length,n=new Uint8Array(6*r>>3);for(let o=0,i=0,s=0,a=0;o<r;o++)a=a<<6|e[t.charCodeAt(o)],s+=6,s>=8&&(n[i++]=a>>(s-=8));return n}function Rb(t){return t&1?~t>>1:t>>1}function Nb(t,e){let r=Array(t);for(let n=0,o=0;n<t;n++)r[n]=o+=Rb(e());return r}function Tr(t,e=0){let r=[];for(;;){let n=t(),o=t();if(!o)break;e+=n;for(let i=0;i<o;i++)r.push(e+i);e+=o+1}return r}function sh(t){return eo(()=>{let e=Tr(t);if(e.length)return e})}function ah(t){let e=[];for(;;){let r=t();if(r==0)break;e.push(Mb(r,t))}for(;;){let r=t()-1;if(r<0)break;e.push($b(r,t))}return e.flat()}function eo(t){let e=[];for(;;){let r=t(e.length);if(!r)break;e.push(r)}return e}function ch(t,e,r){let n=Array(t).fill().map(()=>[]);for(let o=0;o<e;o++)Nb(t,r).forEach((i,s)=>n[s].push(i));return n}function Mb(t,e){let r=1+e(),n=e(),o=eo(e);return ch(o.length,1+t,e).flatMap((s,a)=>{let[c,...l]=s;return Array(o[a]).fill().map((d,p)=>{let g=p*n;return[c+p*r,l.map(w=>w+g)]})})}function $b(t,e){let r=1+e();return ch(r,1+t,e).map(o=>[o[0],o.slice(1)])}function Ub(t){let e=[],r=Tr(t);return o(n([]),[]),e;function n(i){let s=t(),a=eo(()=>{let c=Tr(t).map(l=>r[l]);if(c.length)return n(c)});return{S:s,B:a,Q:i}}function o({S:i,B:s},a,c){if(!(i&4&&c===a[a.length-1])){i&2&&(c=a[a.length-1]),i&1&&e.push(a);for(let l of s)for(let d of l.Q)o(l,[...a,d],c)}}}var Ft=oh("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");const S0=new Map([[8217,"apostrophe"],[8260,"fraction slash"],[12539,"middle dot"]]),D0=4;function Fb(t){return t.toString(16).toUpperCase().padStart(2,"0")}function lh(t){return`{${Fb(t)}}`}function Lb(t){let e=[];for(let r=0,n=t.length;r<n;){let o=t.codePointAt(r);r+=o<65536?1:2,e.push(o)}return e}function Rn(t){let r=t.length;if(r<4096)return String.fromCodePoint(...t);let n=[];for(let o=0;o<r;)n.push(String.fromCodePoint(...t.slice(o,o+=4096)));return n.join("")}function jb(t,e){let r=t.length,n=r-e.length;for(let o=0;n==0&&o<r;o++)n=t[o]-e[o];return n}var Xl=oh("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");function Ai(t){return t>>24&255}function uh(t){return t&16777215}const Wb=new Map(sh(Xl).flatMap((t,e)=>t.map(r=>[r,e+1<<24]))),zb=new Set(Tr(Xl)),fh=new Map,Oc=new Map;for(let[t,e]of ah(Xl)){if(!zb.has(t)&&e.length==2){let[r,n]=e,o=Oc.get(r);o||(o=new Map,Oc.set(r,o)),o.set(n,t)}fh.set(t,e.reverse())}const to=44032,bs=4352,ms=4449,ys=4519,dh=19,hh=21,Nn=28,vs=hh*Nn,Hb=dh*vs,Gb=to+Hb,Vb=bs+dh,qb=ms+hh,Qb=ys+Nn;function ph(t){return t>=to&&t<Gb}function Kb(t,e){if(t>=bs&&t<Vb&&e>=ms&&e<qb)return to+(t-bs)*vs+(e-ms)*Nn;if(ph(t)&&e>ys&&e<Qb&&(t-to)%Nn==0)return t+(e-ys);{let r=Oc.get(t);return r&&(r=r.get(e),r)?r:-1}}function gh(t){let e=[],r=[],n=!1;function o(i){let s=Wb.get(i);s&&(n=!0,i|=s),e.push(i)}for(let i of t)for(;;){if(i<128)e.push(i);else if(ph(i)){let s=i-to,a=s/vs|0,c=s%vs/Nn|0,l=s%Nn;o(bs+a),o(ms+c),l>0&&o(ys+l)}else{let s=fh.get(i);s?r.push(...s):o(i)}if(!r.length)break;i=r.pop()}if(n&&e.length>1){let i=Ai(e[0]);for(let s=1;s<e.length;s++){let a=Ai(e[s]);if(a==0||i<=a){i=a;continue}let c=s-1;for(;;){let l=e[c+1];if(e[c+1]=e[c],e[c]=l,!c||(i=Ai(e[--c]),i<=a))break}i=Ai(e[s])}}return e}function Zb(t){let e=[],r=[],n=-1,o=0;for(let i of t){let s=Ai(i),a=uh(i);if(n==-1)s==0?n=a:e.push(a);else if(o>0&&o>=s)s==0?(e.push(n,...r),r.length=0,n=a):r.push(a),o=s;else{let c=Kb(n,a);c>=0?n=c:o==0&&s==0?(e.push(n),n=a):(r.push(a),o=s)}}return n>=0&&e.push(n,...r),e}function wh(t){return gh(t).map(uh)}function Yb(t){return Zb(gh(t))}const bh=65039,mh=".",yh=1,P0=45;function ii(){return new Set(Tr(Ft))}const Jb=new Map(ah(Ft)),Xb=ii(),As=ii(),I0=new Set(Tr(Ft).map(function(t){return this[t]},[...As])),em=ii();ii();const tm=sh(Ft);function T0(){return new Set([Tr(Ft).map(t=>tm[t]),Tr(Ft)].flat(2))}const rm=Ft(),ro=eo(t=>{let e=eo(Ft).map(r=>r+96);if(e.length){let r=t>=rm;e[0]-=32,e=Rn(e),r&&(e=`Restricted[${e}]`);let n=T0(),o=T0(),i=[...n,...o].sort((a,c)=>a-c),s=!Ft();return{N:e,P:n,M:s,R:r,V:new Set(i)}}}),B0=ii(),no=new Map;[...B0,...ii()].sort((t,e)=>t-e).map((t,e,r)=>{let n=Ft(),o=r[e]=n?r[e-n]:{V:[],M:new Map};o.V.push(t),B0.has(t)||no.set(t,o)});for(let{V:t,M:e}of new Set(no.values())){let r=[];for(let o of t){let i=ro.filter(a=>a.V.has(o)),s=r.find(({G:a})=>i.some(c=>a.has(c)));s||(s={G:new Set,V:[]},r.push(s)),s.V.push(o),i.forEach(a=>s.G.add(a))}let n=r.flatMap(({G:o})=>[...o]);for(let{G:o,V:i}of r){let s=new Set(n.filter(a=>!o.has(a)));for(let a of i)e.set(a,s)}}let io=new Set,vh=new Set;for(let t of ro)for(let e of t.V)(io.has(e)?vh:io).add(e);for(let t of io)!no.has(t)&&!vh.has(t)&&no.set(t,yh);const nm=new Set([...io,...wh(io)]);class im extends Array{get is_emoji(){return!0}}const om=Ub(Ft).map(t=>im.from(t)).sort(jb),Ah=new Map;for(let t of om){let e=[Ah];for(let r of t){let n=e.map(o=>{let i=o.get(r);return i||(i=new Map,o.set(r,i)),i});r===bh?e.push(...n):e=n}for(let r of e)r.V=t}function fa(t,e=lh){let r=[];lm(t[0])&&r.push("◌");let n=0,o=t.length;for(let i=0;i<o;i++){let s=t[i];Ch(s)&&(r.push(Rn(t.slice(n,i))),r.push(e(s)),n=i+1)}return r.push(Rn(t.slice(n,o))),r.join("")}function eu(t){return(Ch(t)?"":`${tu(fa([t]))} `)+lh(t)}function tu(t){return`"${t}"‎`}function sm(t){if(t.length>=4&&t[2]==P0&&t[3]==P0)throw new Error(`invalid label extension: "${Rn(t.slice(0,4))}"`)}function am(t){for(let r=t.lastIndexOf(95);r>0;)if(t[--r]!==95)throw new Error("underscore allowed only at start")}function cm(t){let e=t[0],r=S0.get(e);if(r)throw Ii(`leading ${r}`);let n=t.length,o=-1;for(let i=1;i<n;i++){e=t[i];let s=S0.get(e);if(s){if(o==i)throw Ii(`${r} + ${s}`);o=i+1,r=s}}if(o==n)throw Ii(`trailing ${r}`)}function lm(t){return As.has(t)}function Ch(t){return em.has(t)}function um(t){return pm(fm(t,Yb,bm))}function fm(t,e,r){if(!t)return[];let n=0;return t.split(mh).map(o=>{let i=Lb(o),s={input:i,offset:n};n+=i.length+1;let a;try{let c=s.tokens=wm(i,e,r),l=c.length,d;if(l)if(a=c.flat(),am(a),!(s.emoji=l>1||c[0].is_emoji)&&a.every(g=>g<128))sm(a),d="ASCII";else{let g=c.flatMap(w=>w.is_emoji?[]:w);if(!g.length)d="Emoji";else{if(As.has(a[0]))throw Ii("leading combining mark");for(let A=1;A<l;A++){let y=c[A];if(!y.is_emoji&&As.has(y[0]))throw Ii(`emoji + combining mark: "${Rn(c[A-1])} + ${fa([y[0]])}"`)}cm(a);let w=[...new Set(g)],[b]=hm(w);gm(b,g),dm(b,w),d=b.N}}else throw new Error("empty label");s.type=d}catch(c){s.error=c}return s.output=a,s})}function dm(t,e){let r,n=[];for(let o of e){let i=no.get(o);if(i===yh)return;if(i){let s=i.M.get(o);if(r=r?r.filter(a=>s.has(a)):[...s],!r.length)return}else n.push(o)}if(r){for(let o of r)if(n.every(i=>o.V.has(i)))throw new Error(`whole-script confusable: ${t.N}/${o.N}`)}}function hm(t){let e=ro;for(let r of t){let n=e.filter(o=>o.V.has(r));if(!n.length)throw ro.some(o=>o.V.has(r))?Eh(e[0],r):xh(r);if(e=n,n.length==1)break}return e}function pm(t){return t.map(({input:e,error:r,output:n})=>{if(r){let o=r.message;throw new Error(t.length==1?o:`Invalid label ${tu(fa(e))}: ${o}`)}return Rn(n)}).join(mh)}function xh(t){return new Error(`disallowed character: ${eu(t)}`)}function Eh(t,e){let r=eu(e),n=ro.find(o=>o.P.has(e));return n&&(r=`${n.N} ${r}`),new Error(`illegal mixture: ${t.N} + ${r}`)}function Ii(t){return new Error(`illegal placement: ${t}`)}function gm(t,e){let{V:r,M:n}=t;for(let o of e)if(!r.has(o))throw Eh(t,o);if(n){let o=wh(e);for(let i=1,s=o.length;i<s;i++)if(I0.has(o[i])){let a=i+1;for(let c;a<s&&I0.has(c=o[a]);a++)for(let l=i;l<a;l++)if(o[l]==c)throw new Error(`duplicate non-spacing marks: ${eu(c)}`);if(a-i>D0)throw new Error(`excessive non-spacing marks: ${tu(fa(o.slice(i-1,a)))} (${a-i}/${D0})`);i=a}}}function wm(t,e,r){let n=[],o=[];for(t=t.slice().reverse();t.length;){let i=mm(t);if(i)o.length&&(n.push(e(o)),o=[]),n.push(r(i));else{let s=t.pop();if(nm.has(s))o.push(s);else{let a=Jb.get(s);if(a)o.push(...a);else if(!Xb.has(s))throw xh(s)}}}return o.length&&n.push(e(o)),n}function bm(t){return t.filter(e=>e!=bh)}function mm(t,e){let r=Ah,n,o=t.length;for(;o&&(r=r.get(t[--o]),!!r);){let{V:i}=r;i&&(n=i,e&&e.push(...t.slice(o).reverse()),t.length=o)}return n}function ym(t){return um(t)}function vm(t,e,{batch:r={multicall:{wait:32}},pollingInterval:n=4e3,rank:o,retryCount:i,retryDelay:s,stallTimeout:a}={}){if(!t.length)throw new Error("must have at least one chain");let c=[];const l={},d={};for(const p of t){let g=!1;for(const w of e){const b=w(p);b&&(g=!0,c.some(({id:A})=>A===p.id)||(c=[...c,b.chain]),l[p.id]=[...l[p.id]||[],...b.rpcUrls.http],b.rpcUrls.webSocket&&(d[p.id]=[...d[p.id]||[],...b.rpcUrls.webSocket]))}if(!g)throw new Error([`Could not find valid provider configuration for chain "${p.name}".
`,"You may need to add `jsonRpcProvider` to `configureChains` with the chain's RPC URLs.","Read more: https://wagmi.sh/core/providers/jsonRpc"].join(`
`))}return{chains:c,publicClient:({chainId:p})=>{const g=c.find(A=>A.id===p)??t[0],w=l[g.id];if(!w||!w[0])throw new Error(`No providers configured for chain "${g.id}"`);const b=E0({batch:r,chain:g,transport:C0(w.map(A=>b2(A,{timeout:a})),{rank:o,retryCount:i,retryDelay:s}),pollingInterval:n});return Object.assign(b,{chains:c})},webSocketPublicClient:({chainId:p})=>{const g=c.find(A=>A.id===p)??t[0],w=d[g.id];if(!w||!w[0])return;const b=E0({batch:r,chain:g,transport:C0(w.map(A=>vb(A,{timeout:a})),{rank:o,retryCount:i,retryDelay:s}),pollingInterval:n});return Object.assign(b,{chains:c})}}}var Am=class extends Error{constructor({chainId:t,connectorId:e}){super(`Chain "${t}" not configured${e?` for connector "${e}"`:""}.`),this.name="ChainNotConfigured"}},Cm=class extends Error{constructor(){super(...arguments),this.name="ConnectorAlreadyConnectedError",this.message="Connector already connected"}},xm=class extends Error{constructor(){super(...arguments),this.name="ConfigChainsNotFound",this.message="No chains were found on the wagmi config. Some functions that require a chain may not work."}},Em=class extends Error{constructor({connector:t}){super(`"${t.name}" does not support programmatic chain switching.`),this.name="SwitchChainNotSupportedError"}},kc=(t,{find:e,replace:r})=>t&&e(t)?r(t):typeof t!="object"?t:Array.isArray(t)?t.map(n=>kc(n,{find:e,replace:r})):t instanceof Object?Object.entries(t).reduce((n,[o,i])=>({...n,[o]:kc(i,{find:e,replace:r})}),{}):t;function _m(t){const e=JSON.parse(t);return kc(e,{find:n=>typeof n=="string"&&n.startsWith("#bigint."),replace:n=>BigInt(n.replace("#bigint.",""))})}function O0(t){return typeof t=="number"?t:t==="wei"?0:Math.abs(ug[t])}function k0(t,e){return t.slice(0,e).join(".")||"."}function R0(t,e){const{length:r}=t;for(let n=0;n<r;++n)if(t[n]===e)return n+1;return 0}function Sm(t,e){const r=typeof t=="function",n=typeof e=="function",o=[],i=[];return function(a,c){if(typeof c=="object")if(o.length){const l=R0(o,this);l===0?o[o.length]=this:(o.splice(l),i.splice(l)),i[i.length]=a;const d=R0(o,c);if(d!==0)return n?e.call(this,a,c,k0(i,d)):`[ref=${k0(i,d)}]`}else o[0]=c,i[0]=a;return r?t.call(this,a,c):c}}function Dm(t,e,r,n){return JSON.stringify(t,Sm((o,i)=>{const s=typeof i=="bigint"?`#bigint.${i.toString()}`:i;return(e==null?void 0:e(o,s))||s},n),r??void 0)}var Pm={getItem:t=>"",setItem:(t,e)=>null,removeItem:t=>null};function Im({deserialize:t=_m,key:e="wagmi",serialize:r=Dm,storage:n}){return{...n,getItem:(o,i=null)=>{const s=n.getItem(`${e}.${o}`);try{return s?t(s):i}catch(a){return console.warn(a),i}},setItem:(o,i)=>{if(i===null)n.removeItem(`${e}.${o}`);else try{n.setItem(`${e}.${o}`,r(i))}catch(s){console.error(s)}},removeItem:o=>n.removeItem(`${e}.${o}`)}}var N0="store",xn,Ci,Rc,_h,Tm=class{constructor({autoConnect:t=!1,connectors:e=[new nh],publicClient:r,storage:n=Im({storage:typeof window<"u"?window.localStorage:Pm}),logger:o={warn:console.warn},webSocketPublicClient:i}){var l,d;za(this,Rc),this.publicClients=new Map,this.webSocketPublicClients=new Map,za(this,xn,void 0),za(this,Ci,void 0),this.args={autoConnect:t,connectors:e,logger:o,publicClient:r,storage:n,webSocketPublicClient:i};let s="disconnected",a;if(t)try{const p=n.getItem(N0),g=(l=p==null?void 0:p.state)==null?void 0:l.data;s=g!=null&&g.account?"reconnecting":"connecting",a=(d=g==null?void 0:g.chain)==null?void 0:d.id}catch{}const c=typeof e=="function"?e():e;c.forEach(p=>p.setStorage(n)),this.store=Tb(Eb(Ib(()=>({connectors:c,publicClient:this.getPublicClient({chainId:a}),status:s,webSocketPublicClient:this.getWebSocketPublicClient({chainId:a})}),{name:N0,storage:n,partialize:p=>{var g,w;return{...t&&{data:{account:(g=p==null?void 0:p.data)==null?void 0:g.account,chain:(w=p==null?void 0:p.data)==null?void 0:w.chain}},chains:p==null?void 0:p.chains}},version:2}))),this.storage=n,Ko(this,Ci,n==null?void 0:n.getItem("wallet")),Cb(this,Rc,_h).call(this),t&&typeof window<"u"&&setTimeout(async()=>await this.autoConnect(),0)}get chains(){return this.store.getState().chains}get connectors(){return this.store.getState().connectors}get connector(){return this.store.getState().connector}get data(){return this.store.getState().data}get error(){return this.store.getState().error}get lastUsedChainId(){var t,e;return(e=(t=this.data)==null?void 0:t.chain)==null?void 0:e.id}get publicClient(){return this.store.getState().publicClient}get status(){return this.store.getState().status}get subscribe(){return this.store.subscribe}get webSocketPublicClient(){return this.store.getState().webSocketPublicClient}setState(t){const e=typeof t=="function"?t(this.store.getState()):t;this.store.setState(e,!0)}clearState(){this.setState(t=>({...t,chains:void 0,connector:void 0,data:void 0,error:void 0,status:"disconnected"}))}async destroy(){var t,e;this.connector&&await((e=(t=this.connector).disconnect)==null?void 0:e.call(t)),Ko(this,xn,!1),this.clearState(),this.store.destroy()}async autoConnect(){if(Wa(this,xn))return;Ko(this,xn,!0),this.setState(r=>{var n;return{...r,status:(n=r.data)!=null&&n.account?"reconnecting":"connecting"}});const t=Wa(this,Ci)?[...this.connectors].sort(r=>r.id===Wa(this,Ci)?-1:1):this.connectors;let e=!1;for(const r of t){if(!r.ready||!r.isAuthorized||!await r.isAuthorized())continue;const o=await r.connect();this.setState(i=>({...i,connector:r,chains:r==null?void 0:r.chains,data:o,status:"connected"})),e=!0;break}return e||this.setState(r=>({...r,data:void 0,status:"disconnected"})),Ko(this,xn,!1),this.data}setConnectors(t){this.args={...this.args,connectors:t};const e=typeof t=="function"?t():t;e.forEach(r=>r.setStorage(this.args.storage)),this.setState(r=>({...r,connectors:e}))}getPublicClient({chainId:t}={}){let e=this.publicClients.get(-1);if(e&&(e==null?void 0:e.chain.id)===t||(e=this.publicClients.get(t??-1),e))return e;const{publicClient:r}=this.args;return e=typeof r=="function"?r({chainId:t}):r,this.publicClients.set(t??-1,e),e}setPublicClient(t){var r,n;const e=(n=(r=this.data)==null?void 0:r.chain)==null?void 0:n.id;this.args={...this.args,publicClient:t},this.publicClients.clear(),this.setState(o=>({...o,publicClient:this.getPublicClient({chainId:e})}))}getWebSocketPublicClient({chainId:t}={}){let e=this.webSocketPublicClients.get(-1);if(e&&(e==null?void 0:e.chain.id)===t||(e=this.webSocketPublicClients.get(t??-1),e))return e;const{webSocketPublicClient:r}=this.args;return e=typeof r=="function"?r({chainId:t}):r,e&&this.webSocketPublicClients.set(t??-1,e),e}setWebSocketPublicClient(t){var r,n;const e=(n=(r=this.data)==null?void 0:r.chain)==null?void 0:n.id;this.args={...this.args,webSocketPublicClient:t},this.webSocketPublicClients.clear(),this.setState(o=>({...o,webSocketPublicClient:this.getWebSocketPublicClient({chainId:e})}))}setLastUsedConnector(t=null){var e;(e=this.storage)==null||e.setItem("wallet",t)}};xn=new WeakMap;Ci=new WeakMap;Rc=new WeakSet;_h=function(){const t=a=>{this.setState(c=>({...c,data:{...c.data,...a}}))},e=()=>{this.clearState()},r=a=>{this.setState(c=>({...c,error:a}))};this.store.subscribe(({connector:a})=>a,(a,c)=>{var l,d,p,g,w,b;(l=c==null?void 0:c.off)==null||l.call(c,"change",t),(d=c==null?void 0:c.off)==null||d.call(c,"disconnect",e),(p=c==null?void 0:c.off)==null||p.call(c,"error",r),a&&((g=a.on)==null||g.call(a,"change",t),(w=a.on)==null||w.call(a,"disconnect",e),(b=a.on)==null||b.call(a,"error",r))});const{publicClient:n,webSocketPublicClient:o}=this.args;(typeof n=="function"||typeof o=="function")&&this.store.subscribe(({data:a})=>{var c;return(c=a==null?void 0:a.chain)==null?void 0:c.id},a=>{this.setState(c=>({...c,publicClient:this.getPublicClient({chainId:a}),webSocketPublicClient:this.getWebSocketPublicClient({chainId:a})}))})};var Nc;function Bm(t){const e=new Tm(t);return Nc=e,e}function hr(){if(!Nc)throw new Error("No wagmi config found. Ensure you have set up a config: https://wagmi.sh/react/config");return Nc}async function M0({chainId:t,connector:e}){const r=hr(),n=r.connector;if(n&&e.id===n.id)throw new Cm;try{r.setState(i=>({...i,status:"connecting"}));const o=await e.connect({chainId:t});return r.setLastUsedConnector(e.id),r.setState(i=>({...i,connector:e,chains:e==null?void 0:e.chains,data:o,status:"connected"})),r.storage.setItem("connected",!0),{...o,connector:e}}catch(o){throw r.setState(i=>({...i,status:i.connector?"connected":"disconnected"})),o}}async function Om(){const t=hr();t.connector&&await t.connector.disconnect(),t.clearState(),t.storage.removeItem("connected")}var km=[{type:"event",name:"Approval",inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"event",name:"Transfer",inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"function",name:"allowance",stateMutability:"view",inputs:[{name:"owner",type:"address"},{name:"spender",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"approve",stateMutability:"nonpayable",inputs:[{name:"spender",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"balanceOf",stateMutability:"view",inputs:[{name:"account",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"decimals",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint8"}]},{type:"function",name:"name",stateMutability:"view",inputs:[],outputs:[{name:"",type:"string"}]},{type:"function",name:"symbol",stateMutability:"view",inputs:[],outputs:[{name:"",type:"string"}]},{type:"function",name:"totalSupply",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"sender",type:"address"},{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]}],Rm=[{type:"event",name:"Approval",inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"event",name:"Transfer",inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"function",name:"allowance",stateMutability:"view",inputs:[{name:"owner",type:"address"},{name:"spender",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"approve",stateMutability:"nonpayable",inputs:[{name:"spender",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"balanceOf",stateMutability:"view",inputs:[{name:"account",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"decimals",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint8"}]},{type:"function",name:"name",stateMutability:"view",inputs:[],outputs:[{name:"",type:"bytes32"}]},{type:"function",name:"symbol",stateMutability:"view",inputs:[],outputs:[{name:"",type:"bytes32"}]},{type:"function",name:"totalSupply",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"sender",type:"address"},{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]}];function oi({chainId:t}={}){const e=hr();return t&&e.getPublicClient({chainId:t})||e.publicClient}async function Nm({chainId:t,contracts:e,blockNumber:r,blockTag:n,...o}){const i=oi({chainId:t});if(!i.chains)throw new xm;if(t&&i.chain.id!==t)throw new Am({chainId:t});return i.multicall({allowFailure:o.allowFailure??!0,blockNumber:r,blockTag:n,contracts:e})}async function Mm({address:t,account:e,chainId:r,abi:n,args:o,functionName:i,blockNumber:s,blockTag:a}){return oi({chainId:r}).readContract({abi:n,address:t,account:e,functionName:i,args:o,blockNumber:s,blockTag:a})}async function $m({contracts:t,blockNumber:e,blockTag:r,...n}){const{allowFailure:o=!0}=n;try{const i=oi(),s=t.reduce((d,p,g)=>{const w=p.chainId??i.chain.id;return{...d,[w]:[...d[w]||[],{contract:p,index:g}]}},{}),a=()=>Object.entries(s).map(([d,p])=>Nm({allowFailure:o,chainId:parseInt(d),contracts:p.map(({contract:g})=>g),blockNumber:e,blockTag:r})),c=(await Promise.all(a())).flat(),l=Object.values(s).flatMap(d=>d.map(({index:p})=>p));return c.reduce((d,p,g)=>(d&&(d[l[g]]=p),d),[])}catch(i){if(i instanceof Rl)throw i;const s=()=>t.map(a=>Mm({...a,blockNumber:e,blockTag:r}));return o?(await Promise.allSettled(s())).map(a=>a.status==="fulfilled"?{result:a.value,status:"success"}:{error:a.reason,result:void 0,status:"failure"}):await Promise.all(s())}}async function Um({address:t,chainId:e,formatUnits:r,token:n}){const o=hr(),i=oi({chainId:e});if(n){const l=async({abi:d})=>{const p={abi:d,address:n,chainId:e},[g,w,b]=await $m({allowFailure:!1,contracts:[{...p,functionName:"balanceOf",args:[t]},{...p,functionName:"decimals"},{...p,functionName:"symbol"}]});return{decimals:w,formatted:us(g??"0",O0(r??w)),symbol:b,value:g}};try{return await l({abi:km})}catch(d){if(d instanceof Rl){const{symbol:p,...g}=await l({abi:Rm});return{symbol:ld(Jr(p,{dir:"right"})),...g}}throw d}}const s=[...o.publicClient.chains||[],...o.chains??[]],a=await i.getBalance({address:t}),c=s.find(l=>l.id===i.chain.id);return{decimals:(c==null?void 0:c.nativeCurrency.decimals)??18,formatted:us(a??"0",O0(r??18)),symbol:(c==null?void 0:c.nativeCurrency.symbol)??"ETH",value:a}}function Mc(){const{data:t,connector:e,status:r}=hr();switch(r){case"connected":return{address:t==null?void 0:t.account,connector:e,isConnected:!0,isConnecting:!1,isDisconnected:!1,isReconnecting:!1,status:r};case"reconnecting":return{address:t==null?void 0:t.account,connector:e,isConnected:!!(t!=null&&t.account),isConnecting:!1,isDisconnected:!1,isReconnecting:!0,status:r};case"connecting":return{address:t==null?void 0:t.account,connector:e,isConnected:!1,isConnecting:!0,isDisconnected:!1,isReconnecting:!1,status:r};case"disconnected":return{address:void 0,connector:void 0,isConnected:!1,isConnecting:!1,isDisconnected:!0,isReconnecting:!1,status:r}}}function $c(){var o,i,s,a;const t=hr(),e=(i=(o=t.data)==null?void 0:o.chain)==null?void 0:i.id,r=t.chains??[],n=[...((s=t.publicClient)==null?void 0:s.chains)||[],...r].find(c=>c.id===e)??{id:e,name:`Chain ${e}`,network:`${e}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpcUrls:{default:{http:[""]},public:{http:[""]}}};return{chain:e?{...n,...(a=t.data)==null?void 0:a.chain,id:e}:void 0,chains:r}}async function Fm({chainId:t}){const{connector:e}=hr();if(!e)throw new Qr;if(!e.switchChain)throw new Em({connector:e});return e.switchChain(t)}function Lm(t,{selector:e=r=>r}={}){const r=hr(),n=()=>t(Mc());return r.subscribe(({data:i,connector:s,status:a})=>e({address:i==null?void 0:i.account,connector:s,status:a}),n,{equalityFn:ih})}function jm(t,{selector:e=r=>r}={}){const r=hr(),n=()=>t($c());return r.subscribe(({data:i,chains:s})=>{var a;return e({chainId:(a=i==null?void 0:i.chain)==null?void 0:a.id,chains:s})},n,{equalityFn:ih})}async function Wm({name:t,chainId:e}){return await oi({chainId:e}).getEnsAvatar({name:ym(t)})}async function zm({address:t,chainId:e}){return oi({chainId:e}).getEnsName({address:$t(t)})}const Hm=Symbol(),$0=Object.getPrototypeOf,Uc=new WeakMap,Gm=t=>t&&(Uc.has(t)?Uc.get(t):$0(t)===Object.prototype||$0(t)===Array.prototype),Vm=t=>Gm(t)&&t[Hm]||null,U0=(t,e=!0)=>{Uc.set(t,e)},Ha=t=>typeof t=="object"&&t!==null,yr=new WeakMap,xi=new WeakSet,qm=(t=Object.is,e=(l,d)=>new Proxy(l,d),r=l=>Ha(l)&&!xi.has(l)&&(Array.isArray(l)||!(Symbol.iterator in l))&&!(l instanceof WeakMap)&&!(l instanceof WeakSet)&&!(l instanceof Error)&&!(l instanceof Number)&&!(l instanceof Date)&&!(l instanceof String)&&!(l instanceof RegExp)&&!(l instanceof ArrayBuffer),n=l=>{switch(l.status){case"fulfilled":return l.value;case"rejected":throw l.reason;default:throw l}},o=new WeakMap,i=(l,d,p=n)=>{const g=o.get(l);if((g==null?void 0:g[0])===d)return g[1];const w=Array.isArray(l)?[]:Object.create(Object.getPrototypeOf(l));return U0(w,!0),o.set(l,[d,w]),Reflect.ownKeys(l).forEach(b=>{if(Object.getOwnPropertyDescriptor(w,b))return;const A=Reflect.get(l,b),y={value:A,enumerable:!0,configurable:!0};if(xi.has(A))U0(A,!1);else if(A instanceof Promise)delete y.value,y.get=()=>p(A);else if(yr.has(A)){const[S,m]=yr.get(A);y.value=i(S,m(),p)}Object.defineProperty(w,b,y)}),Object.preventExtensions(w)},s=new WeakMap,a=[1,1],c=l=>{if(!Ha(l))throw new Error("object required");const d=s.get(l);if(d)return d;let p=a[0];const g=new Set,w=(T,B=++a[0])=>{p!==B&&(p=B,g.forEach(M=>M(T,B)))};let b=a[1];const A=(T=++a[1])=>(b!==T&&!g.size&&(b=T,S.forEach(([B])=>{const M=B[1](T);M>p&&(p=M)})),p),y=T=>(B,M)=>{const j=[...B];j[1]=[T,...j[1]],w(j,M)},S=new Map,m=(T,B)=>{if(g.size){const M=B[3](y(T));S.set(T,[B,M])}else S.set(T,[B])},_=T=>{var B;const M=S.get(T);M&&(S.delete(T),(B=M[1])==null||B.call(M))},x=T=>(g.add(T),g.size===1&&S.forEach(([M,j],G)=>{const Q=M[3](y(G));S.set(G,[M,Q])}),()=>{g.delete(T),g.size===0&&S.forEach(([M,j],G)=>{j&&(j(),S.set(G,[M]))})}),E=Array.isArray(l)?[]:Object.create(Object.getPrototypeOf(l)),u=e(E,{deleteProperty(T,B){const M=Reflect.get(T,B);_(B);const j=Reflect.deleteProperty(T,B);return j&&w(["delete",[B],M]),j},set(T,B,M,j){const G=Reflect.has(T,B),Q=Reflect.get(T,B,j);if(G&&(t(Q,M)||s.has(M)&&t(Q,s.get(M))))return!0;_(B),Ha(M)&&(M=Vm(M)||M);let K=M;if(M instanceof Promise)M.then(q=>{M.status="fulfilled",M.value=q,w(["resolve",[B],q])}).catch(q=>{M.status="rejected",M.reason=q,w(["reject",[B],q])});else{!yr.has(M)&&r(M)&&(K=c(M));const q=!xi.has(K)&&yr.get(K);q&&m(B,q)}return Reflect.set(T,B,K,j),w(["set",[B],M,Q]),!0}});s.set(l,u);const C=[E,A,i,x];return yr.set(u,C),Reflect.ownKeys(l).forEach(T=>{const B=Object.getOwnPropertyDescriptor(l,T);"value"in B&&(u[T]=l[T],delete B.value,delete B.writable),Object.defineProperty(E,T,B)}),u})=>[c,yr,xi,t,e,r,n,o,i,s,a],[Qm]=qm();function Tt(t={}){return Qm(t)}function To(t,e,r){const n=yr.get(t);let o;const i=[],s=n[3];let a=!1;const l=s(d=>{if(i.push(d),r){e(i.splice(0));return}o||(o=Promise.resolve().then(()=>{o=void 0,a&&e(i.splice(0))}))});return a=!0,()=>{a=!1,l()}}function vC(t,e){const r=yr.get(t),[n,o,i]=r;return i(n,o(),e)}function Sh(t){return xi.add(t),t}function er(t,e,r,n){let o=t[e];return To(t,()=>{const i=t[e];Object.is(o,i)||r(o=i)},n)}const Ei={FOUR_MINUTES_MS:24e4,TEN_SEC_MS:1e4,ONE_SEC_MS:1e3,RESTRICTED_TIMEZONES:["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"]},oe={isMobile(){return typeof window<"u"?!!(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)):!1},isAndroid(){const t=navigator.userAgent.toLowerCase();return oe.isMobile()&&t.includes("android")},isIos(){const t=navigator.userAgent.toLowerCase();return oe.isMobile()&&(t.includes("iphone")||t.includes("ipad"))},isClient(){return typeof window<"u"},isPairingExpired(t){return t?t-Date.now()<=Ei.TEN_SEC_MS:!0},isAllowedRetry(t){return Date.now()-t>=Ei.ONE_SEC_MS},copyToClopboard(t){navigator.clipboard.writeText(t)},getPairingExpiry(){return Date.now()+Ei.FOUR_MINUTES_MS},getPlainAddress(t){return t.split(":")[2]},async wait(t){return new Promise(e=>{setTimeout(e,t)})},debounce(t,e=500){let r;return(...n)=>{function o(){t(...n)}r&&clearTimeout(r),r=setTimeout(o,e)}},isHttpUrl(t){return t.startsWith("http://")||t.startsWith("https://")},formatNativeUrl(t,e){if(oe.isHttpUrl(t))return this.formatUniversalUrl(t,e);let r=t;r.includes("://")||(r=t.replaceAll("/","").replaceAll(":",""),r=`${r}://`),r.endsWith("/")||(r=`${r}/`);const n=encodeURIComponent(e);return{redirect:`${r}wc?uri=${n}`,href:r}},formatUniversalUrl(t,e){if(!oe.isHttpUrl(t))return this.formatNativeUrl(t,e);let r=t;r.endsWith("/")||(r=`${r}/`);const n=encodeURIComponent(e);return{redirect:`${r}wc?uri=${n}`,href:r}},openHref(t,e){window.open(t,e,"noreferrer noopener")},async preloadImage(t){const e=new Promise((r,n)=>{const o=new Image;o.onload=r,o.onerror=n,o.crossOrigin="anonymous",o.src=t});return Promise.race([e,oe.wait(2e3)])},formatBalance(t,e){let r;return t==="0.0"?r="0":typeof t=="string"&&t.length>6?r=t.substring(0,6):typeof t=="string"&&(r=t),r?`${r} ${e}`:"0.0000"},isRestrictedRegion(){try{const{timeZone:t}=new Intl.DateTimeFormat().resolvedOptions(),e=t.toUpperCase();return Ei.RESTRICTED_TIMEZONES.includes(e)}catch{return!1}},getApiUrl(){return oe.isRestrictedRegion()?"https://api.web3modal.org":"https://api.web3modal.com"},getBlockchainApiUrl(){return oe.isRestrictedRegion()?"https://rpc.walletconnect.org":"https://rpc.walletconnect.com"}},Le=Tt({isConnected:!1}),Se={state:Le,subscribe(t){return To(Le,()=>t(Le))},subscribeKey(t,e){return er(Le,t,e)},setIsConnected(t){Le.isConnected=t},setCaipAddress(t){Le.caipAddress=t,Le.address=t?oe.getPlainAddress(t):void 0},setBalance(t,e){Le.balance=t,Le.balanceSymbol=e},setProfileName(t){Le.profileName=t},setProfileImage(t){Le.profileImage=t},setAddressExplorerUrl(t){Le.addressExplorerUrl=t},resetAccount(){Le.isConnected=!1,Le.caipAddress=void 0,Le.address=void 0,Le.balance=void 0,Le.balanceSymbol=void 0,Le.profileName=void 0,Le.profileImage=void 0,Le.addressExplorerUrl=void 0}};class Dh{constructor({baseUrl:e}){this.baseUrl=e}async get({headers:e,...r}){const n=this.createUrl(r);return(await fetch(n,{method:"GET",headers:e})).json()}async getBlob({headers:e,...r}){const n=this.createUrl(r);return(await fetch(n,{method:"GET",headers:e})).blob()}async post({body:e,headers:r,...n}){const o=this.createUrl(n);return(await fetch(o,{method:"POST",headers:r,body:e?JSON.stringify(e):void 0})).json()}async put({body:e,headers:r,...n}){const o=this.createUrl(n);return(await fetch(o,{method:"PUT",headers:r,body:e?JSON.stringify(e):void 0})).json()}async delete({body:e,headers:r,...n}){const o=this.createUrl(n);return(await fetch(o,{method:"DELETE",headers:r,body:e?JSON.stringify(e):void 0})).json()}createUrl({path:e,params:r}){const n=new URL(e,this.baseUrl);return r&&Object.entries(r).forEach(([o,i])=>{i&&n.searchParams.append(o,i)}),n}}const Ga="WALLETCONNECT_DEEPLINK_CHOICE",F0="@w3m/recent",nn={setWalletConnectDeepLink({href:t,name:e}){try{localStorage.setItem(Ga,JSON.stringify({href:t,name:e}))}catch{console.info("Unable to set WalletConnect deep link")}},getWalletConnectDeepLink(){try{const t=localStorage.getItem(Ga);if(t)return JSON.parse(t)}catch{console.info("Unable to get WalletConnect deep link")}},deleteWalletConnectDeepLink(){try{localStorage.removeItem(Ga)}catch{console.info("Unable to delete WalletConnect deep link")}},setWeb3ModalRecent(t){try{const e=nn.getRecentWallets();e.find(n=>n.id===t.id)||(e.unshift(t),e.length>2&&e.pop(),localStorage.setItem(F0,JSON.stringify(e)))}catch{console.info("Unable to set Web3Modal recent")}},getRecentWallets(){try{const t=localStorage.getItem(F0);return t?JSON.parse(t):[]}catch{console.info("Unable to get Web3Modal recent")}return[]}},mr=Tt({walletImages:{},networkImages:{},connectorImages:{},tokenImages:{}}),Er={state:mr,subscribeNetworkImages(t){return To(mr.networkImages,()=>t(mr.networkImages))},subscribeKey(t,e){return er(mr,t,e)},setWalletImage(t,e){mr.walletImages[t]=e},setNetworkImage(t,e){mr.networkImages[t]=e},setConnectorImage(t,e){mr.connectorImages[t]=e},setTokenImage(t,e){mr.tokenImages[t]=e}},mn=Tt({connectors:[]}),on={state:mn,subscribeKey(t,e){return er(mn,t,e)},setConnectors(t){mn.connectors=t},addConnector(t){mn.connectors.push(t)},removeConnectorById(t){mn.connectors=mn.connectors.filter(e=>e.id!==t)}},wi=Tt({open:!1,selectedNetworkId:void 0}),Mn={state:wi,subscribe(t){return To(wi,()=>t(wi))},set(t){Object.assign(wi,{...wi,...t})}},nt=Tt({supportsAllNetworks:!0,isDefaultCaipNetwork:!1}),Oe={state:nt,subscribeKey(t,e){return er(nt,t,e)},_getClient(){if(!nt._client)throw new Error("NetworkController client not set");return nt._client},setClient(t){nt._client=Sh(t)},setCaipNetwork(t){nt.caipNetwork=t,Mn.set({selectedNetworkId:t==null?void 0:t.id})},setDefaultCaipNetwork(t){nt.caipNetwork=t,Mn.set({selectedNetworkId:t==null?void 0:t.id}),nt.isDefaultCaipNetwork=!0},setRequestedCaipNetworks(t){nt.requestedCaipNetworks=t},async getApprovedCaipNetworksData(){const t=await this._getClient().getApprovedCaipNetworksData();nt.supportsAllNetworks=t.supportsAllNetworks,nt.approvedCaipNetworkIds=t.approvedCaipNetworkIds},async switchActiveNetwork(t){await this._getClient().switchCaipNetwork(t),nt.caipNetwork=t},resetNetwork(){nt.isDefaultCaipNetwork||(nt.caipNetwork=void 0),nt.approvedCaipNetworkIds=void 0,nt.supportsAllNetworks=!0}},zt=Tt({projectId:""}),$e={state:zt,subscribeKey(t,e){return er(zt,t,e)},setProjectId(t){zt.projectId=t},setIncludeWalletIds(t){zt.includeWalletIds=t},setExcludeWalletIds(t){zt.excludeWalletIds=t},setFeaturedWalletIds(t){zt.featuredWalletIds=t},setTokens(t){zt.tokens=t},setTermsConditionsUrl(t){zt.termsConditionsUrl=t},setPrivacyPolicyUrl(t){zt.privacyPolicyUrl=t},setCustomWallets(t){zt.customWallets=t}},Km=oe.getApiUrl(),Ht=new Dh({baseUrl:Km}),Zm="40",L0="4",Ym="w3m",Xe=Tt({sdkVersion:"html-wagmi-undefined",page:1,count:0,featured:[],recommended:[],wallets:[],search:[]}),le={state:Xe,subscribeKey(t,e){return er(Xe,t,e)},setSdkVersion(t){Xe.sdkVersion=t},_getApiHeaders(){return{"x-project-id":$e.state.projectId,"x-sdk-type":Ym,"x-sdk-version":Xe.sdkVersion}},async _fetchWalletImage(t){const e=`${Ht.baseUrl}/getWalletImage/${t}`,r=await Ht.getBlob({path:e,headers:le._getApiHeaders()});Er.setWalletImage(t,URL.createObjectURL(r))},async _fetchNetworkImage(t){const e=`${Ht.baseUrl}/public/getAssetImage/${t}`,r=await Ht.getBlob({path:e,headers:le._getApiHeaders()});Er.setNetworkImage(t,URL.createObjectURL(r))},async _fetchConnectorImage(t){const e=`${Ht.baseUrl}/public/getAssetImage/${t}`,r=await Ht.getBlob({path:e,headers:le._getApiHeaders()});Er.setConnectorImage(t,URL.createObjectURL(r))},async fetchNetworkImages(){const{requestedCaipNetworks:t}=Oe.state,e=t==null?void 0:t.map(({imageId:r})=>r).filter(Boolean);e&&await Promise.allSettled(e.map(r=>le._fetchNetworkImage(r)))},async fetchConnectorImages(){const{connectors:t}=on.state,e=t.map(({imageId:r})=>r).filter(Boolean);await Promise.allSettled(e.map(r=>le._fetchConnectorImage(r)))},async fetchFeaturedWallets(){const{featuredWalletIds:t}=$e.state;if(t!=null&&t.length){const{data:e}=await Ht.get({path:"/getWallets",headers:le._getApiHeaders(),params:{page:"1",entries:t!=null&&t.length?String(t.length):L0,include:t==null?void 0:t.join(",")}});e.sort((n,o)=>t.indexOf(n.id)-t.indexOf(o.id));const r=e.map(n=>n.image_id).filter(Boolean);await Promise.allSettled(r.map(n=>le._fetchWalletImage(n))),Xe.featured=e}},async fetchRecommendedWallets(){const{includeWalletIds:t,excludeWalletIds:e,featuredWalletIds:r}=$e.state,n=[...e??[],...r??[]].filter(Boolean),{data:o,count:i}=await Ht.get({path:"/getWallets",headers:le._getApiHeaders(),params:{page:"1",entries:L0,include:t==null?void 0:t.join(","),exclude:n==null?void 0:n.join(",")}}),s=nn.getRecentWallets(),a=o.map(l=>l.image_id).filter(Boolean),c=s.map(l=>l.image_id).filter(Boolean);await Promise.allSettled([...a,...c].map(l=>le._fetchWalletImage(l))),Xe.recommended=o,Xe.count=i??0},async fetchWallets({page:t}){const{includeWalletIds:e,excludeWalletIds:r,featuredWalletIds:n}=$e.state,o=[...Xe.recommended.map(({id:c})=>c),...r??[],...n??[]].filter(Boolean),{data:i,count:s}=await Ht.get({path:"/getWallets",headers:le._getApiHeaders(),params:{page:String(t),entries:Zm,include:e==null?void 0:e.join(","),exclude:o.join(",")}}),a=i.map(c=>c.image_id).filter(Boolean);await Promise.allSettled([...a.map(c=>le._fetchWalletImage(c)),oe.wait(300)]),Xe.wallets=[...Xe.wallets,...i],Xe.count=s>Xe.count?s:Xe.count,Xe.page=t},async searchWallet({search:t}){const{includeWalletIds:e,excludeWalletIds:r}=$e.state;Xe.search=[];const{data:n}=await Ht.get({path:"/getWallets",headers:le._getApiHeaders(),params:{page:"1",entries:"100",search:t,include:e==null?void 0:e.join(","),exclude:r==null?void 0:r.join(",")}}),o=n.map(i=>i.image_id).filter(Boolean);await Promise.allSettled([...o.map(i=>le._fetchWalletImage(i)),oe.wait(300)]),Xe.search=n},prefetch(){Xe.prefetchPromise=Promise.race([Promise.allSettled([le.fetchFeaturedWallets(),le.fetchRecommendedWallets(),le.fetchNetworkImages(),le.fetchConnectorImages()]),oe.wait(3e3)])}},et=Tt({view:"Connect",history:["Connect"]}),ae={state:et,subscribeKey(t,e){return er(et,t,e)},push(t,e){t!==et.view&&(et.view=t,et.history.push(t),et.data=e)},reset(t){et.view=t,et.history=[t]},replace(t){et.history.length>1&&et.history.at(-1)!==t&&(et.view=t,et.history[et.history.length-1]=t)},goBack(){if(et.history.length>1){et.history.pop();const[t]=et.history.slice(-1);t&&(et.view=t)}}},Zo=Tt({open:!1}),Ye={state:Zo,subscribeKey(t,e){return er(Zo,t,e)},async open(t){await le.state.prefetchPromise,t!=null&&t.view?ae.reset(t.view):Se.state.isConnected?ae.reset("Account"):ae.reset("Connect"),Zo.open=!0,Mn.set({open:!0})},close(){Zo.open=!1,Mn.set({open:!1})}},qe=Tt({wcError:!1,buffering:!1}),ve={state:qe,subscribeKey(t,e){return er(qe,t,e)},_getClient(){if(!qe._client)throw new Error("ConnectionController client not set");return qe._client},setClient(t){qe._client=Sh(t)},connectWalletConnect(){qe.wcPromise=this._getClient().connectWalletConnect(t=>{qe.wcUri=t,qe.wcPairingExpiry=oe.getPairingExpiry()})},async connectExternal(t){var e,r;await((r=(e=this._getClient()).connectExternal)==null?void 0:r.call(e,t))},checkInjectedInstalled(t){var e,r;return(r=(e=this._getClient()).checkInjectedInstalled)==null?void 0:r.call(e,t)},resetWcConnection(){qe.wcUri=void 0,qe.wcPairingExpiry=void 0,qe.wcPromise=void 0,qe.wcLinking=void 0,qe.recentWallet=void 0,nn.deleteWalletConnectDeepLink()},setWcLinking(t){qe.wcLinking=t},setWcError(t){qe.wcError=t,qe.buffering=!1},setRecentWallet(t){qe.recentWallet=t},setBuffering(t){qe.buffering=t},async disconnect(){await this._getClient().disconnect(),this.resetWcConnection()}},nr=Tt({message:"",variant:"success",open:!1}),Nt={state:nr,subscribeKey(t,e){return er(nr,t,e)},showSuccess(t){nr.message=t,nr.variant="success",nr.open=!0},showError(t){nr.message=t,nr.variant="error",nr.open=!0},hide(){nr.open=!1}},yn=Tt({themeMode:"dark",themeVariables:{}}),Ct={state:yn,subscribe(t){return To(yn,()=>t(yn))},setThemeMode(t){yn.themeMode=t},setThemeVariables(t){yn.themeVariables={...yn.themeVariables,...t}}},Jm=oe.getBlockchainApiUrl(),Xm=new Dh({baseUrl:Jm}),e3={fetchIdentity({caipChainId:t,address:e}){return Xm.get({path:`/v1/identity/${e}`,params:{chainId:t,projectId:$e.state.projectId}})}},ot={getWalletImage(t){if(t!=null&&t.image_url)return t==null?void 0:t.image_url;if(t!=null&&t.image_id)return Er.state.walletImages[t.image_id]},getNetworkImage(t){if(t!=null&&t.imageUrl)return t==null?void 0:t.imageUrl;if(t!=null&&t.imageId)return Er.state.networkImages[t.imageId]},getConnectorImage(t){if(t!=null&&t.imageId)return Er.state.connectorImages[t.imageId]}};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ts=window,ru=ts.ShadowRoot&&(ts.ShadyCSS===void 0||ts.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,nu=Symbol(),j0=new WeakMap;let Ph=class{constructor(e,r,n){if(this._$cssResult$=!0,n!==nu)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o;const r=this.t;if(ru&&e===void 0){const n=r!==void 0&&r.length===1;n&&(e=j0.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&j0.set(r,e))}return e}toString(){return this.cssText}};const Vt=t=>new Ph(typeof t=="string"?t:t+"",void 0,nu),H=(t,...e)=>{const r=t.length===1?t[0]:e.reduce((n,o,i)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[i+1],t[0]);return new Ph(r,t,nu)},t3=(t,e)=>{ru?t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet):e.forEach(r=>{const n=document.createElement("style"),o=ts.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=r.cssText,t.appendChild(n)})},W0=ru?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(const n of e.cssRules)r+=n.cssText;return Vt(r)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Va;const Cs=window,z0=Cs.trustedTypes,r3=z0?z0.emptyScript:"",H0=Cs.reactiveElementPolyfillSupport,Fc={toAttribute(t,e){switch(e){case Boolean:t=t?r3:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},Ih=(t,e)=>e!==t&&(e==e||t==t),qa={attribute:!0,type:String,converter:Fc,reflect:!1,hasChanged:Ih},Lc="finalized";let En=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var r;this.finalize(),((r=this.h)!==null&&r!==void 0?r:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((r,n)=>{const o=this._$Ep(n,r);o!==void 0&&(this._$Ev.set(o,n),e.push(o))}),e}static createProperty(e,r=qa){if(r.state&&(r.attribute=!1),this.finalize(),this.elementProperties.set(e,r),!r.noAccessor&&!this.prototype.hasOwnProperty(e)){const n=typeof e=="symbol"?Symbol():"__"+e,o=this.getPropertyDescriptor(e,n,r);o!==void 0&&Object.defineProperty(this.prototype,e,o)}}static getPropertyDescriptor(e,r,n){return{get(){return this[r]},set(o){const i=this[e];this[r]=o,this.requestUpdate(e,i,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||qa}static finalize(){if(this.hasOwnProperty(Lc))return!1;this[Lc]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const r=this.properties,n=[...Object.getOwnPropertyNames(r),...Object.getOwnPropertySymbols(r)];for(const o of n)this.createProperty(o,r[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const r=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const o of n)r.unshift(W0(o))}else e!==void 0&&r.push(W0(e));return r}static _$Ep(e,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(r=>r(this))}addController(e){var r,n;((r=this._$ES)!==null&&r!==void 0?r:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((n=e.hostConnected)===null||n===void 0||n.call(e))}removeController(e){var r;(r=this._$ES)===null||r===void 0||r.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,r)=>{this.hasOwnProperty(r)&&(this._$Ei.set(r,this[r]),delete this[r])})}createRenderRoot(){var e;const r=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return t3(r,this.constructor.elementStyles),r}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(r=>{var n;return(n=r.hostConnected)===null||n===void 0?void 0:n.call(r)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(r=>{var n;return(n=r.hostDisconnected)===null||n===void 0?void 0:n.call(r)})}attributeChangedCallback(e,r,n){this._$AK(e,n)}_$EO(e,r,n=qa){var o;const i=this.constructor._$Ep(e,n);if(i!==void 0&&n.reflect===!0){const s=(((o=n.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?n.converter:Fc).toAttribute(r,n.type);this._$El=e,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$El=null}}_$AK(e,r){var n;const o=this.constructor,i=o._$Ev.get(e);if(i!==void 0&&this._$El!==i){const s=o.getPropertyOptions(i),a=typeof s.converter=="function"?{fromAttribute:s.converter}:((n=s.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?s.converter:Fc;this._$El=i,this[i]=a.fromAttribute(r,s.type),this._$El=null}}requestUpdate(e,r,n){let o=!0;e!==void 0&&(((n=n||this.constructor.getPropertyOptions(e)).hasChanged||Ih)(this[e],r)?(this._$AL.has(e)||this._$AL.set(e,r),n.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,n))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(r){Promise.reject(r)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,i)=>this[i]=o),this._$Ei=void 0);let r=!1;const n=this._$AL;try{r=this.shouldUpdate(n),r?(this.willUpdate(n),(e=this._$ES)===null||e===void 0||e.forEach(o=>{var i;return(i=o.hostUpdate)===null||i===void 0?void 0:i.call(o)}),this.update(n)):this._$Ek()}catch(o){throw r=!1,this._$Ek(),o}r&&this._$AE(n)}willUpdate(e){}_$AE(e){var r;(r=this._$ES)===null||r===void 0||r.forEach(n=>{var o;return(o=n.hostUpdated)===null||o===void 0?void 0:o.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((r,n)=>this._$EO(n,this[n],r)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};En[Lc]=!0,En.elementProperties=new Map,En.elementStyles=[],En.shadowRootOptions={mode:"open"},H0==null||H0({ReactiveElement:En}),((Va=Cs.reactiveElementVersions)!==null&&Va!==void 0?Va:Cs.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Qa;const xs=window,$n=xs.trustedTypes,G0=$n?$n.createPolicy("lit-html",{createHTML:t=>t}):void 0,jc="$lit$",vr=`lit$${(Math.random()+"").slice(9)}$`,Th="?"+vr,n3=`<${Th}>`,sn=document,oo=()=>sn.createComment(""),so=t=>t===null||typeof t!="object"&&typeof t!="function",Bh=Array.isArray,i3=t=>Bh(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",Ka=`[ 	
\f\r]`,bi=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,V0=/-->/g,q0=/>/g,Gr=RegExp(`>|${Ka}(?:([^\\s"'>=/]+)(${Ka}*=${Ka}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Q0=/'/g,K0=/"/g,Oh=/^(?:script|style|textarea|title)$/i,kh=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),k=kh(1),W=kh(2),an=Symbol.for("lit-noChange"),Ue=Symbol.for("lit-nothing"),Z0=new WeakMap,Kr=sn.createTreeWalker(sn,129,null,!1);function Rh(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return G0!==void 0?G0.createHTML(e):e}const o3=(t,e)=>{const r=t.length-1,n=[];let o,i=e===2?"<svg>":"",s=bi;for(let a=0;a<r;a++){const c=t[a];let l,d,p=-1,g=0;for(;g<c.length&&(s.lastIndex=g,d=s.exec(c),d!==null);)g=s.lastIndex,s===bi?d[1]==="!--"?s=V0:d[1]!==void 0?s=q0:d[2]!==void 0?(Oh.test(d[2])&&(o=RegExp("</"+d[2],"g")),s=Gr):d[3]!==void 0&&(s=Gr):s===Gr?d[0]===">"?(s=o??bi,p=-1):d[1]===void 0?p=-2:(p=s.lastIndex-d[2].length,l=d[1],s=d[3]===void 0?Gr:d[3]==='"'?K0:Q0):s===K0||s===Q0?s=Gr:s===V0||s===q0?s=bi:(s=Gr,o=void 0);const w=s===Gr&&t[a+1].startsWith("/>")?" ":"";i+=s===bi?c+n3:p>=0?(n.push(l),c.slice(0,p)+jc+c.slice(p)+vr+w):c+vr+(p===-2?(n.push(void 0),a):w)}return[Rh(t,i+(t[r]||"<?>")+(e===2?"</svg>":"")),n]};let Wc=class Nh{constructor({strings:e,_$litType$:r},n){let o;this.parts=[];let i=0,s=0;const a=e.length-1,c=this.parts,[l,d]=o3(e,r);if(this.el=Nh.createElement(l,n),Kr.currentNode=this.el.content,r===2){const p=this.el.content,g=p.firstChild;g.remove(),p.append(...g.childNodes)}for(;(o=Kr.nextNode())!==null&&c.length<a;){if(o.nodeType===1){if(o.hasAttributes()){const p=[];for(const g of o.getAttributeNames())if(g.endsWith(jc)||g.startsWith(vr)){const w=d[s++];if(p.push(g),w!==void 0){const b=o.getAttribute(w.toLowerCase()+jc).split(vr),A=/([.?@])?(.*)/.exec(w);c.push({type:1,index:i,name:A[2],strings:b,ctor:A[1]==="."?a3:A[1]==="?"?l3:A[1]==="@"?u3:da})}else c.push({type:6,index:i})}for(const g of p)o.removeAttribute(g)}if(Oh.test(o.tagName)){const p=o.textContent.split(vr),g=p.length-1;if(g>0){o.textContent=$n?$n.emptyScript:"";for(let w=0;w<g;w++)o.append(p[w],oo()),Kr.nextNode(),c.push({type:2,index:++i});o.append(p[g],oo())}}}else if(o.nodeType===8)if(o.data===Th)c.push({type:2,index:i});else{let p=-1;for(;(p=o.data.indexOf(vr,p+1))!==-1;)c.push({type:7,index:i}),p+=vr.length-1}i++}}static createElement(e,r){const n=sn.createElement("template");return n.innerHTML=e,n}};function Un(t,e,r=t,n){var o,i,s,a;if(e===an)return e;let c=n!==void 0?(o=r._$Co)===null||o===void 0?void 0:o[n]:r._$Cl;const l=so(e)?void 0:e._$litDirective$;return(c==null?void 0:c.constructor)!==l&&((i=c==null?void 0:c._$AO)===null||i===void 0||i.call(c,!1),l===void 0?c=void 0:(c=new l(t),c._$AT(t,r,n)),n!==void 0?((s=(a=r)._$Co)!==null&&s!==void 0?s:a._$Co=[])[n]=c:r._$Cl=c),c!==void 0&&(e=Un(t,c._$AS(t,e.values),c,n)),e}let s3=class{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var r;const{el:{content:n},parts:o}=this._$AD,i=((r=e==null?void 0:e.creationScope)!==null&&r!==void 0?r:sn).importNode(n,!0);Kr.currentNode=i;let s=Kr.nextNode(),a=0,c=0,l=o[0];for(;l!==void 0;){if(a===l.index){let d;l.type===2?d=new iu(s,s.nextSibling,this,e):l.type===1?d=new l.ctor(s,l.name,l.strings,this,e):l.type===6&&(d=new f3(s,this,e)),this._$AV.push(d),l=o[++c]}a!==(l==null?void 0:l.index)&&(s=Kr.nextNode(),a++)}return Kr.currentNode=sn,i}v(e){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,r),r+=n.strings.length-2):n._$AI(e[r])),r++}},iu=class Mh{constructor(e,r,n,o){var i;this.type=2,this._$AH=Ue,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=n,this.options=o,this._$Cp=(i=o==null?void 0:o.isConnected)===null||i===void 0||i}get _$AU(){var e,r;return(r=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&r!==void 0?r:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=Un(this,e,r),so(e)?e===Ue||e==null||e===""?(this._$AH!==Ue&&this._$AR(),this._$AH=Ue):e!==this._$AH&&e!==an&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):i3(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==Ue&&so(this._$AH)?this._$AA.nextSibling.data=e:this.$(sn.createTextNode(e)),this._$AH=e}g(e){var r;const{values:n,_$litType$:o}=e,i=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=Wc.createElement(Rh(o.h,o.h[0]),this.options)),o);if(((r=this._$AH)===null||r===void 0?void 0:r._$AD)===i)this._$AH.v(n);else{const s=new s3(i,this),a=s.u(this.options);s.v(n),this.$(a),this._$AH=s}}_$AC(e){let r=Z0.get(e.strings);return r===void 0&&Z0.set(e.strings,r=new Wc(e)),r}T(e){Bh(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,o=0;for(const i of e)o===r.length?r.push(n=new Mh(this.k(oo()),this.k(oo()),this,this.options)):n=r[o],n._$AI(i),o++;o<r.length&&(this._$AR(n&&n._$AB.nextSibling,o),r.length=o)}_$AR(e=this._$AA.nextSibling,r){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,r);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){var r;this._$AM===void 0&&(this._$Cp=e,(r=this._$AP)===null||r===void 0||r.call(this,e))}};class da{constructor(e,r,n,o,i){this.type=1,this._$AH=Ue,this._$AN=void 0,this.element=e,this.name=r,this._$AM=o,this.options=i,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=Ue}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,r=this,n,o){const i=this.strings;let s=!1;if(i===void 0)e=Un(this,e,r,0),s=!so(e)||e!==this._$AH&&e!==an,s&&(this._$AH=e);else{const a=e;let c,l;for(e=i[0],c=0;c<i.length-1;c++)l=Un(this,a[n+c],r,c),l===an&&(l=this._$AH[c]),s||(s=!so(l)||l!==this._$AH[c]),l===Ue?e=Ue:e!==Ue&&(e+=(l??"")+i[c+1]),this._$AH[c]=l}s&&!o&&this.j(e)}j(e){e===Ue?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}let a3=class extends da{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Ue?void 0:e}};const c3=$n?$n.emptyScript:"";let l3=class extends da{constructor(){super(...arguments),this.type=4}j(e){e&&e!==Ue?this.element.setAttribute(this.name,c3):this.element.removeAttribute(this.name)}};class u3 extends da{constructor(e,r,n,o,i){super(e,r,n,o,i),this.type=5}_$AI(e,r=this){var n;if((e=(n=Un(this,e,r,0))!==null&&n!==void 0?n:Ue)===an)return;const o=this._$AH,i=e===Ue&&o!==Ue||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,s=e!==Ue&&(o===Ue||i);i&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var r,n;typeof this._$AH=="function"?this._$AH.call((n=(r=this.options)===null||r===void 0?void 0:r.host)!==null&&n!==void 0?n:this.element,e):this._$AH.handleEvent(e)}}let f3=class{constructor(e,r,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Un(this,e)}};const Y0=xs.litHtmlPolyfillSupport;Y0==null||Y0(Wc,iu),((Qa=xs.litHtmlVersions)!==null&&Qa!==void 0?Qa:xs.litHtmlVersions=[]).push("2.8.0");const d3=(t,e,r)=>{var n,o;const i=(n=r==null?void 0:r.renderBefore)!==null&&n!==void 0?n:e;let s=i._$litPart$;if(s===void 0){const a=(o=r==null?void 0:r.renderBefore)!==null&&o!==void 0?o:null;i._$litPart$=s=new iu(e.insertBefore(oo(),a),a,void 0,r??{})}return s._$AI(t),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Za,Ya;let F=class extends En{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,r;const n=super.createRenderRoot();return(e=(r=this.renderOptions).renderBefore)!==null&&e!==void 0||(r.renderBefore=n.firstChild),n}update(e){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=d3(r,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return an}};F.finalized=!0,F._$litElement$=!0,(Za=globalThis.litElementHydrateSupport)===null||Za===void 0||Za.call(globalThis,{LitElement:F});const J0=globalThis.litElementPolyfillSupport;J0==null||J0({LitElement:F});((Ya=globalThis.litElementVersions)!==null&&Ya!==void 0?Ya:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const U=t=>e=>typeof e=="function"?((r,n)=>(customElements.define(r,n),n))(t,e):((r,n)=>{const{kind:o,elements:i}=n;return{kind:o,elements:i,finisher(s){customElements.define(r,s)}}})(t,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const h3=(t,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(r){r.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(r){r.createProperty(e.key,t)}},p3=(t,e,r)=>{e.constructor.createProperty(r,t)};function R(t){return(e,r)=>r!==void 0?p3(t,e,r):h3(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function J(t){return R({...t,state:!0})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ja;((Ja=window.HTMLSlotElement)===null||Ja===void 0?void 0:Ja.prototype.assignedElements)!=null;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const de=t=>t??Ue;var pr=globalThis&&globalThis.__decorate||function(t,e,r,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,r,i):s(e,r))||i);return o>3&&i&&Object.defineProperty(e,r,i),i};let Zt=class extends F{constructor(){super(),this.unsubscribe=[],this.networkImages=Er.state.networkImages,this.disabled=!1,this.balance="show",this.address=Se.state.address,this.balanceVal=Se.state.balance,this.balanceSymbol=Se.state.balanceSymbol,this.profileName=Se.state.profileName,this.profileImage=Se.state.profileImage,this.network=Oe.state.caipNetwork,this.unsubscribe.push(Se.subscribe(e=>{e.isConnected?(this.address=e.address,this.balanceVal=e.balance,this.profileName=e.profileName,this.profileImage=e.profileImage,this.balanceSymbol=e.balanceSymbol):(this.address="",this.balanceVal="",this.profileName="",this.profileImage="",this.balanceSymbol="")}),Oe.subscribeKey("caipNetwork",e=>this.network=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){var n;const e=this.networkImages[((n=this.network)==null?void 0:n.imageId)??""],r=this.balance==="show";return k`
      <wui-account-button
        .disabled=${!!this.disabled}
        address=${de(this.profileName??this.address)}
        ?isProfileName=${!!this.profileName}
        networkSrc=${de(e)}
        avatarSrc=${de(this.profileImage)}
        balance=${r?oe.formatBalance(this.balanceVal,this.balanceSymbol):""}
        @click=${this.onClick.bind(this)}
      >
      </wui-account-button>
    `}onClick(){Ye.open()}};pr([R({type:Boolean})],Zt.prototype,"disabled",void 0);pr([R()],Zt.prototype,"balance",void 0);pr([J()],Zt.prototype,"address",void 0);pr([J()],Zt.prototype,"balanceVal",void 0);pr([J()],Zt.prototype,"balanceSymbol",void 0);pr([J()],Zt.prototype,"profileName",void 0);pr([J()],Zt.prototype,"profileImage",void 0);pr([J()],Zt.prototype,"network",void 0);Zt=pr([U("w3m-account-button")],Zt);var pn=globalThis&&globalThis.__decorate||function(t,e,r,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,r,i):s(e,r))||i);return o>3&&i&&Object.defineProperty(e,r,i),i};let Br=class extends F{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.balance=void 0,this.size=void 0,this.label=void 0,this.loadingLabel=void 0,this.isAccount=Se.state.isConnected,this.unsubscribe.push(Se.subscribeKey("isConnected",e=>{this.isAccount=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return this.isAccount?k`
          <w3m-account-button
            .disabled=${!!this.disabled}
            balance=${de(this.balance)}
          >
          </w3m-account-button>
        `:k`
          <w3m-connect-button
            size=${de(this.size)}
            label=${de(this.label)}
            loadingLabel=${de(this.loadingLabel)}
          ></w3m-connect-button>
        `}};pn([R({type:Boolean})],Br.prototype,"disabled",void 0);pn([R()],Br.prototype,"balance",void 0);pn([R()],Br.prototype,"size",void 0);pn([R()],Br.prototype,"label",void 0);pn([R()],Br.prototype,"loadingLabel",void 0);pn([J()],Br.prototype,"isAccount",void 0);Br=pn([U("w3m-button")],Br);var Bo=globalThis&&globalThis.__decorate||function(t,e,r,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,r,i):s(e,r))||i);return o>3&&i&&Object.defineProperty(e,r,i),i};let Fn=class extends F{constructor(){super(),this.unsubscribe=[],this.size="md",this.label="Connect Wallet",this.loadingLabel="Connecting...",this.open=Ye.state.open,this.unsubscribe.push(Ye.subscribeKey("open",e=>this.open=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return k`
      <wui-connect-button
        size=${de(this.size)}
        .loading=${this.open}
        @click=${this.onClick.bind(this)}
      >
        ${this.open?this.loadingLabel:this.label}
      </wui-connect-button>
    `}onClick(){this.open?Ye.close():Ye.open()}};Bo([R()],Fn.prototype,"size",void 0);Bo([R()],Fn.prototype,"label",void 0);Bo([R()],Fn.prototype,"loadingLabel",void 0);Bo([J()],Fn.prototype,"open",void 0);Fn=Bo([U("w3m-connect-button")],Fn);let Ti,_r,Sr;function g3(t,e){Ti=document.createElement("style"),_r=document.createElement("style"),Sr=document.createElement("style"),Ti.textContent=Tn(t).core.cssText,_r.textContent=Tn(t).dark.cssText,Sr.textContent=Tn(t).light.cssText,document.head.appendChild(Ti),document.head.appendChild(_r),document.head.appendChild(Sr),$h(e)}function $h(t){_r&&Sr&&(t==="light"?(_r.removeAttribute("media"),Sr.media="enabled"):(Sr.removeAttribute("media"),_r.media="enabled"))}function w3(t){Ti&&_r&&Sr&&(Ti.textContent=Tn(t).core.cssText,_r.textContent=Tn(t).dark.cssText,Sr.textContent=Tn(t).light.cssText)}function Tn(t){return{core:H`
      :root {
        --w3m-color-mix-strength: ${Vt(t!=null&&t["--w3m-color-mix-strength"]?`${t["--w3m-color-mix-strength"]}%`:"0%")};
        --w3m-font-family: ${Vt((t==null?void 0:t["--w3m-font-family"])||"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif")};
        --w3m-font-size-master: ${Vt((t==null?void 0:t["--w3m-font-size-master"])||"10px")};
        --w3m-border-radius-master: ${Vt((t==null?void 0:t["--w3m-border-radius-master"])||"4px")};
        --w3m-z-index: ${Vt((t==null?void 0:t["--w3m-z-index"])||100)};

        --wui-font-family: var(--w3m-font-family);

        --wui-font-size-micro: var(--w3m-font-size-master);
        --wui-font-size-tiny: calc(var(--w3m-font-size-master) * 1.2);
        --wui-font-size-small: calc(var(--w3m-font-size-master) * 1.4);
        --wui-font-size-paragraph: calc(var(--w3m-font-size-master) * 1.6);
        --wui-font-size-large: calc(var(--w3m-font-size-master) * 2);

        --wui-border-radius-5xs: var(--w3m-border-radius-master);
        --wui-border-radius-4xs: calc(var(--w3m-border-radius-master) * 1.5);
        --wui-border-radius-3xs: calc(var(--w3m-border-radius-master) * 2);
        --wui-border-radius-xxs: calc(var(--w3m-border-radius-master) * 3);
        --wui-border-radius-xs: calc(var(--w3m-border-radius-master) * 4);
        --wui-border-radius-s: calc(var(--w3m-border-radius-master) * 5);
        --wui-border-radius-m: calc(var(--w3m-border-radius-master) * 7);
        --wui-border-radius-l: calc(var(--w3m-border-radius-master) * 9);
        --wui-border-radius-3xl: calc(var(--w3m-border-radius-master) * 20);

        --wui-font-weight-regular: 500;
        --wui-font-weight-medium: 600;
        --wui-font-weight-bold: 700;

        --wui-letter-spacing-large: -0.8px;
        --wui-letter-spacing-paragraph: -0.64px;
        --wui-letter-spacing-small: -0.56px;
        --wui-letter-spacing-tiny: -0.48px;
        --wui-letter-spacing-micro: -0.2px;

        --wui-spacing-0: 0px;
        --wui-spacing-4xs: 2px;
        --wui-spacing-3xs: 4px;
        --wui-spacing-xxs: 6px;
        --wui-spacing-2xs: 7px;
        --wui-spacing-xs: 8px;
        --wui-spacing-1xs: 10px;
        --wui-spacing-s: 12px;
        --wui-spacing-m: 14px;
        --wui-spacing-l: 16px;
        --wui-spacing-2l: 18px;
        --wui-spacing-xl: 20px;
        --wui-spacing-xxl: 24px;
        --wui-spacing-3xl: 40px;

        --wui-icon-box-size-xs: 20px;
        --wui-icon-box-size-sm: 24px;
        --wui-icon-box-size-md: 32px;
        --wui-icon-box-size-lg: 40px;

        --wui-icon-size-inherit: inherit;
        --wui-icon-size-xxs: 10px;
        --wui-icon-size-xs: 12px;
        --wui-icon-size-sm: 14px;
        --wui-icon-size-md: 16px;
        --wui-icon-size-lg: 20px;

        --wui-wallet-image-size-inherit: inherit;
        --wui-wallet-image-size-sm: 40px;
        --wui-wallet-image-size-md: 56px;
        --wui-wallet-image-size-lg: 80px;

        --wui-box-size-md: 100px;
        --wui-box-size-lg: 120px;

        --wui-ease-out-power-2: cubic-bezier(0, 0, 0.22, 1);
        --wui-ease-out-power-1: cubic-bezier(0, 0, 0.55, 1);

        --wui-ease-in-power-3: cubic-bezier(0.66, 0, 1, 1);
        --wui-ease-in-power-2: cubic-bezier(0.45, 0, 1, 1);
        --wui-ease-in-power-1: cubic-bezier(0.3, 0, 1, 1);

        --wui-ease-inout-power-1: cubic-bezier(0.45, 0, 0.55, 1);

        --wui-duration-lg: 200ms;
        --wui-duration-md: 125ms;
        --wui-duration-sm: 75ms;

        --wui-path-network: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --wui-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --wui-color-inherit: inherit;

        --wui-color-inverse-100: #fff;
        --wui-color-inverse-000: #000;

        --wui-cover: rgba(0, 0, 0, 0.3);

        --wui-color-blue-100: var(--wui-color-blue-base-100);
        --wui-color-blue-015: var(--wui-color-accent-base-015);

        --wui-color-accent-100: var(--wui-color-accent-base-100);
        --wui-color-accent-090: var(--wui-color-accent-base-090);
        --wui-color-accent-080: var(--wui-color-accent-base-080);

        --wui-accent-glass-090: var(--wui-accent-glass-base-090);
        --wui-accent-glass-080: var(--wui-accent-glass-base-080);
        --wui-accent-glass-020: var(--wui-accent-glass-base-020);
        --wui-accent-glass-015: var(--wui-accent-glass-base-015);
        --wui-accent-glass-010: var(--wui-accent-glass-base-010);
        --wui-accent-glass-005: var(--wui-accent-glass-base-005);
        --wui-accent-glass-002: var(--wui-accent-glass-base-002);

        --wui-color-fg-100: var(--wui-color-fg-base-100);
        --wui-color-fg-125: var(--wui-color-fg-base-125);
        --wui-color-fg-150: var(--wui-color-fg-base-150);
        --wui-color-fg-175: var(--wui-color-fg-base-175);
        --wui-color-fg-200: var(--wui-color-fg-base-200);
        --wui-color-fg-225: var(--wui-color-fg-base-225);
        --wui-color-fg-250: var(--wui-color-fg-base-250);
        --wui-color-fg-275: var(--wui-color-fg-base-275);
        --wui-color-fg-300: var(--wui-color-fg-base-300);

        --wui-color-bg-100: var(--wui-color-bg-base-100);
        --wui-color-bg-125: var(--wui-color-bg-base-125);
        --wui-color-bg-150: var(--wui-color-bg-base-150);
        --wui-color-bg-175: var(--wui-color-bg-base-175);
        --wui-color-bg-200: var(--wui-color-bg-base-200);
        --wui-color-bg-225: var(--wui-color-bg-base-225);
        --wui-color-bg-250: var(--wui-color-bg-base-250);
        --wui-color-bg-275: var(--wui-color-bg-base-275);
        --wui-color-bg-300: var(--wui-color-bg-base-300);

        --wui-color-success-100: var(--wui-color-success-base-100);
        --wui-color-error-100: var(--wui-color-error-base-100);

        --wui-icon-box-bg-error-100: var(--wui-icon-box-bg-error-base-100);
        --wui-icon-box-bg-blue-100: var(--wui-icon-box-bg-blue-base-100);
        --wui-icon-box-bg-success-100: var(--wui-icon-box-bg-success-base-100);
        --wui-icon-box-bg-inverse-100: var(--wui-icon-box-bg-inverse-base-100);

        --wui-all-wallets-bg-100: var(--wui-all-wallets-bg-base-100);

        --wui-avatar-border: var(--wui-avatar-border-base);

        --wui-box-shadow-blue: rgba(71, 161, 255, 0.16);
      }

      @supports (background: color-mix(in srgb, white 50%, black)) {
        :root {
          --wui-box-shadow-blue: color-mix(in srgb, var(--wui-color-accent-100) 16%, transparent);

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            var(--w3m-default)
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            var(--w3m-default)
          );

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );

          --wui-accent-glass-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-accent-glass-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-accent-glass-020: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 20%,
            transparent
          );
          --wui-accent-glass-015: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 15%,
            transparent
          );
          --wui-accent-glass-010: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 10%,
            transparent
          );
          --wui-accent-glass-005: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 5%,
            transparent
          );
          --wui-color-accent-002: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 2%,
            transparent
          );

          --wui-color-fg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-100)
          );
          --wui-color-fg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-125)
          );
          --wui-color-fg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-150)
          );
          --wui-color-fg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-175)
          );
          --wui-color-fg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-200)
          );
          --wui-color-fg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-225)
          );
          --wui-color-fg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-250)
          );
          --wui-color-fg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-275)
          );
          --wui-color-fg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-300)
          );

          --wui-color-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-100)
          );
          --wui-color-bg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-125)
          );
          --wui-color-bg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-150)
          );
          --wui-color-bg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-175)
          );
          --wui-color-bg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-200)
          );
          --wui-color-bg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-225)
          );
          --wui-color-bg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-250)
          );
          --wui-color-bg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-275)
          );
          --wui-color-bg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-300)
          );

          --wui-color-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-100)
          );
          --wui-color-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-100)
          );

          --wui-icon-box-bg-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-error-base-100)
          );
          --wui-icon-box-bg-accent-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-blue-base-100)
          );
          --wui-icon-box-bg-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-success-base-100)
          );
          --wui-icon-box-bg-inverse-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-inverse-base-100)
          );

          --wui-all-wallets-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-all-wallets-bg-base-100)
          );

          --wui-avatar-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-avatar-border-base)
          );
        }
      }
    `,light:H`
      :root {
        --w3m-color-mix: ${Vt((t==null?void 0:t["--w3m-color-mix"])||"#fff")};
        --w3m-accent: ${Vt((t==null?void 0:t["--w3m-accent"])||"#47a1ff")};
        --w3m-default: #fff;

        --wui-color-blue-base-100: #47a1ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #59aaff;
        --wui-color-accent-base-080: #6cb4ff;

        --wui-accent-glass-base-090: rgba(71, 161, 255, 0.9);
        --wui-accent-glass-base-080: rgba(71, 161, 255, 0.8);
        --wui-accent-glass-base-020: rgba(71, 161, 255, 0.2);
        --wui-accent-glass-base-015: rgba(71, 161, 255, 0.15);
        --wui-accent-glass-base-010: rgba(71, 161, 255, 0.1);
        --wui-accent-glass-base-005: rgba(71, 161, 255, 0.05);
        --wui-accent-glass-base-002: rgba(71, 161, 255, 0.02);

        --wui-color-fg-base-100: #e4e7e7;
        --wui-color-fg-base-125: #d0d5d5;
        --wui-color-fg-base-150: #a8b1b1;
        --wui-color-fg-base-175: #a8b0b0;
        --wui-color-fg-base-200: #949e9e;
        --wui-color-fg-base-225: #868f8f;
        --wui-color-fg-base-250: #788080;
        --wui-color-fg-base-275: #788181;
        --wui-color-fg-base-300: #6e7777;

        --wui-color-bg-base-100: #141414;
        --wui-color-bg-base-125: #191a1a;
        --wui-color-bg-base-150: #1e1f1f;
        --wui-color-bg-base-175: #222525;
        --wui-color-bg-base-200: #272a2a;
        --wui-color-bg-base-225: #2c3030;
        --wui-color-bg-base-250: #313535;
        --wui-color-bg-base-275: #363b3b;
        --wui-color-bg-base-300: #3b4040;

        --wui-color-success-base-100: #26d962;
        --wui-color-error-base-100: #f25a67;

        --wui-icon-box-bg-error-base-100: #3c2426;
        --wui-icon-box-bg-blue-base-100: #20303f;
        --wui-icon-box-bg-success-base-100: #1f3a28;
        --wui-icon-box-bg-inverse-base-100: #243240;

        --wui-all-wallets-bg-base-100: #222b35;

        --wui-avatar-border-base: #252525;

        --wui-gray-glass-001: rgba(255, 255, 255, 0.01);
        --wui-gray-glass-002: rgba(255, 255, 255, 0.02);
        --wui-gray-glass-005: rgba(255, 255, 255, 0.05);
        --wui-gray-glass-010: rgba(255, 255, 255, 0.1);
        --wui-gray-glass-015: rgba(255, 255, 255, 0.15);
        --wui-gray-glass-020: rgba(255, 255, 255, 0.2);
        --wui-gray-glass-025: rgba(255, 255, 255, 0.25);
        --wui-gray-glass-030: rgba(255, 255, 255, 0.3);
        --wui-gray-glass-060: rgba(255, 255, 255, 0.6);
        --wui-gray-glass-080: rgba(255, 255, 255, 0.8);
      }
    `,dark:H`
      :root {
        --w3m-color-mix: ${Vt((t==null?void 0:t["--w3m-color-mix"])||"#000")};
        --w3m-accent: ${Vt((t==null?void 0:t["--w3m-accent"])||"#3396ff")};
        --w3m-default: #000;

        --wui-color-blue-base-100: #3396ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #2d7dd2;
        --wui-color-accent-base-080: #2978cc;

        --wui-accent-glass-base-090: rgba(51, 150, 255, 0.9);
        --wui-accent-glass-base-080: rgba(51, 150, 255, 0.8);
        --wui-accent-glass-base-020: rgba(51, 150, 255, 0.2);
        --wui-accent-glass-base-015: rgba(51, 150, 255, 0.15);
        --wui-accent-glass-base-010: rgba(51, 150, 255, 0.1);
        --wui-accent-glass-base-005: rgba(51, 150, 255, 0.05);
        --wui-accent-glass-base-002: rgba(51, 150, 255, 0.02);

        --wui-color-fg-base-100: #141414;
        --wui-color-fg-base-125: #2d3131;
        --wui-color-fg-base-150: #474d4d;
        --wui-color-fg-base-175: #636d6d;
        --wui-color-fg-base-200: #798686;
        --wui-color-fg-base-225: #828f8f;
        --wui-color-fg-base-250: #8b9797;
        --wui-color-fg-base-275: #95a0a0;
        --wui-color-fg-base-300: #9ea9a9;

        --wui-color-bg-base-100: #ffffff;
        --wui-color-bg-base-125: #f5fafa;
        --wui-color-bg-base-150: #f3f8f8;
        --wui-color-bg-base-175: #eef4f4;
        --wui-color-bg-base-200: #eaf1f1;
        --wui-color-bg-base-225: #e5eded;
        --wui-color-bg-base-250: #e1e9e9;
        --wui-color-bg-base-275: #dce7e7;
        --wui-color-bg-base-300: #d8e3e3;

        --wui-color-success-base-100: #26b562;
        --wui-color-error-base-100: #f05142;

        --wui-icon-box-bg-error-base-100: #f4dfdd;
        --wui-icon-box-bg-blue-base-100: #d9ecfb;
        --wui-icon-box-bg-success-base-100: #daf0e4;
        --wui-icon-box-bg-inverse-base-100: #dcecfc;

        --wui-all-wallets-bg-base-100: #e8f1fa;

        --wui-avatar-border-base: #f3f4f4;

        --wui-gray-glass-001: rgba(0, 0, 0, 0.01);
        --wui-gray-glass-002: rgba(0, 0, 0, 0.02);
        --wui-gray-glass-005: rgba(0, 0, 0, 0.05);
        --wui-gray-glass-010: rgba(0, 0, 0, 0.1);
        --wui-gray-glass-015: rgba(0, 0, 0, 0.15);
        --wui-gray-glass-020: rgba(0, 0, 0, 0.2);
        --wui-gray-glass-025: rgba(0, 0, 0, 0.25);
        --wui-gray-glass-030: rgba(0, 0, 0, 0.3);
        --wui-gray-glass-060: rgba(0, 0, 0, 0.6);
        --wui-gray-glass-080: rgba(0, 0, 0, 0.8);
      }
    `}}const te=H`
  *,
  *::after,
  *::before,
  :host {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    font-family: var(--wui-font-family);
    backface-visibility: hidden;
  }
`,He=H`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    outline: none;
    border: 1px solid transparent;
    column-gap: var(--wui-spacing-3xs);
    background-color: transparent;
    text-decoration: none;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-005);
    }

    button:active:enabled {
      transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
      background-color: var(--wui-gray-glass-010);
    }

    button[data-variant='fill']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }
  }

  button:disabled {
    cursor: not-allowed;
    background-color: var(--wui-gray-glass-005);
  }

  button[data-variant='shade']:disabled,
  button[data-variant='accent']:disabled {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-gray-glass-015);
    filter: grayscale(1);
  }

  button:disabled > wui-wallet-image,
  button:disabled > wui-all-wallets-image,
  button:disabled > wui-network-image,
  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-transaction-visual,
  button:disabled > wui-logo {
    filter: grayscale(1);
  }

  button:focus-visible,
  a:focus-visible {
    border: 1px solid var(--wui-color-accent-100);
    background-color: var(--wui-gray-glass-005);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  button[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  button[data-variant='fill']:disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
  }

  button[data-variant='fill']:disabled > wui-icon {
    color: var(--wui-gray-glass-015);
  }

  button[data-variant='shade'] {
    color: var(--wui-color-fg-200);
  }

  button[data-variant='accent'] {
    color: var(--wui-color-accent-100);
  }

  button[data-variant='fullWidth'] {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    height: 56px;
    border: none;
    background-color: var(--wui-gray-glass-002);
    color: var(--wui-color-fg-200);
    gap: var(--wui-spacing-xs);
  }

  button:active:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  button[data-variant='fill']:active:enabled {
    background-color: var(--wui-color-accent-080);
    border: 1px solid var(--wui-gray-glass-010);
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`,ou=H`
  .wui-color-inherit {
    color: var(--wui-color-inherit);
  }

  .wui-color-accent-100 {
    color: var(--wui-color-accent-100);
  }

  .wui-color-error-100 {
    color: var(--wui-color-error-100);
  }

  .wui-color-success-100 {
    color: var(--wui-color-success-100);
  }

  .wui-color-inverse-100 {
    color: var(--wui-color-inverse-100);
  }

  .wui-color-inverse-000 {
    color: var(--wui-color-inverse-000);
  }

  .wui-color-fg-100 {
    color: var(--wui-color-fg-100);
  }

  .wui-color-fg-200 {
    color: var(--wui-color-fg-200);
  }

  .wui-color-fg-300 {
    color: var(--wui-color-fg-300);
  }

  .wui-bg-color-inherit {
    background-color: var(--wui-color-inherit);
  }

  .wui-bg-color-blue-100 {
    background-color: var(--wui-color-accent-100);
  }

  .wui-bg-color-error-100 {
    background-color: var(--wui-color-error-100);
  }

  .wui-bg-color-success-100 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-inverse-100 {
    background-color: var(--wui-color-inverse-100);
  }

  .wui-bg-color-inverse-000 {
    background-color: var(--wui-color-inverse-000);
  }

  .wui-bg-color-fg-100 {
    background-color: var(--wui-color-fg-100);
  }

  .wui-bg-color-fg-200 {
    background-color: var(--wui-color-fg-200);
  }

  .wui-bg-color-fg-300 {
    background-color: var(--wui-color-fg-300);
  }
`,b3=H`
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-color-bg-125);
    overflow: hidden;
  }
`;var m3=globalThis&&globalThis.__decorate||function(t,e,r,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,r,i):s(e,r))||i);return o>3&&i&&Object.defineProperty(e,r,i),i};let zc=class extends F{render(){return k`<slot></slot>`}};zc.styles=[te,b3];zc=m3([U("wui-card")],zc);const y3=H`
  :host {
    display: flex;
    aspect-ratio: 1 / 1;
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }
`,v3=W`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#000" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M28.77 23.3c-.69 1.99-2.75 5.52-4.87 5.56-1.4.03-1.86-.84-3.46-.84-1.61 0-2.12.81-3.45.86-2.25.1-5.72-5.1-5.72-9.62 0-4.15 2.9-6.2 5.42-6.25 1.36-.02 2.64.92 3.47.92.83 0 2.38-1.13 4.02-.97.68.03 2.6.28 3.84 2.08-3.27 2.14-2.76 6.61.75 8.25ZM24.2 7.88c-2.47.1-4.49 2.69-4.2 4.84 2.28.17 4.47-2.39 4.2-4.84Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,A3=W`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 1.99a1 1 0 0 1 1 1v7.58l2.46-2.46a1 1 0 0 1 1.41 1.42L7.7 13.69a1 1 0 0 1-1.41 0L2.12 9.53A1 1 0 0 1 3.54 8.1L6 10.57V3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,C3=W`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13 7.99a1 1 0 0 1-1 1H4.4l2.46 2.46a1 1 0 1 1-1.41 1.41L1.29 8.7a1 1 0 0 1 0-1.41L5.46 3.1a1 1 0 0 1 1.41 1.42L4.41 6.99H12a1 1 0 0 1 1 1Z"
    clip-rule="evenodd"
  />
</svg>`,x3=W`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1 7.99a1 1 0 0 1 1-1h7.58L7.12 4.53A1 1 0 1 1 8.54 3.1l4.16 4.17a1 1 0 0 1 0 1.41l-4.16 4.17a1 1 0 1 1-1.42-1.41l2.46-2.46H2a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,E3=W`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 13.99a1 1 0 0 1-1-1V5.4L3.54 7.86a1 1 0 0 1-1.42-1.41L6.3 2.28a1 1 0 0 1 1.41 0l4.17 4.17a1 1 0 1 1-1.41 1.41L8 5.4v7.59a1 1 0 0 1-1 1Z"
    clip-rule="evenodd"
  />
</svg>`,_3=W`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4 6.4a1 1 0 0 1-.46.89 6.98 6.98 0 0 0 .38 6.18A7 7 0 0 0 16.46 7.3a1 1 0 0 1-.47-.92 7 7 0 0 0-12 .03Zm-2.02-.5a9 9 0 1 1 16.03 8.2A9 9 0 0 1 1.98 5.9Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.03 8.63c-1.46-.3-2.72-.75-3.6-1.35l-.02-.01-.14-.11a1 1 0 0 1 1.2-1.6l.1.08c.6.4 1.52.74 2.69 1 .16-.99.39-1.88.67-2.65.3-.79.68-1.5 1.15-2.02A2.58 2.58 0 0 1 9.99 1c.8 0 1.45.44 1.92.97.47.52.84 1.23 1.14 2.02.29.77.52 1.66.68 2.64a8 8 0 0 0 2.7-1l.26-.18h.48a1 1 0 0 1 .12 2c-.86.51-2.01.91-3.34 1.18a22.24 22.24 0 0 1-.03 3.19c1.45.29 2.7.73 3.58 1.31a1 1 0 0 1-1.1 1.68c-.6-.4-1.56-.76-2.75-1-.15.8-.36 1.55-.6 2.2-.3.79-.67 1.5-1.14 2.02-.47.53-1.12.97-1.92.97-.8 0-1.45-.44-1.91-.97a6.51 6.51 0 0 1-1.15-2.02c-.24-.65-.44-1.4-.6-2.2-1.18.24-2.13.6-2.73.99a1 1 0 1 1-1.1-1.67c.88-.58 2.12-1.03 3.57-1.31a22.03 22.03 0 0 1-.04-3.2Zm2.2-1.7c.15-.86.34-1.61.58-2.24.24-.65.51-1.12.76-1.4.25-.28.4-.29.42-.29.03 0 .17.01.42.3.25.27.52.74.77 1.4.23.62.43 1.37.57 2.22a19.96 19.96 0 0 1-3.52 0Zm-.18 4.6a20.1 20.1 0 0 1-.03-2.62 21.95 21.95 0 0 0 3.94 0 20.4 20.4 0 0 1-.03 2.63 21.97 21.97 0 0 0-3.88 0Zm.27 2c.13.66.3 1.26.49 1.78.24.65.51 1.12.76 1.4.25.28.4.29.42.29.03 0 .17-.01.42-.3.25-.27.52-.74.77-1.4.19-.5.36-1.1.49-1.78a20.03 20.03 0 0 0-3.35 0Z"
    clip-rule="evenodd"
  />
</svg>`,S3=W`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M12.04 2.65c.47.3.6.91.3 1.38l-5.78 9a1 1 0 0 1-1.61.1L1.73 9.27A1 1 0 1 1 3.27 8L5.6 10.8l5.05-7.85a1 1 0 0 1 1.38-.3Z"
    clip-rule="evenodd"
  />
</svg>`,D3=W`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1.46 4.96a1 1 0 0 1 1.41 0L8 10.09l5.13-5.13a1 1 0 1 1 1.41 1.41l-5.83 5.84a1 1 0 0 1-1.42 0L1.46 6.37a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,P3=W`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M11.04 1.46a1 1 0 0 1 0 1.41L5.91 8l5.13 5.13a1 1 0 1 1-1.41 1.41L3.79 8.71a1 1 0 0 1 0-1.42l5.84-5.83a1 1 0 0 1 1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,I3=W`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.96 14.54a1 1 0 0 1 0-1.41L10.09 8 4.96 2.87a1 1 0 0 1 1.41-1.41l5.84 5.83a1 1 0 0 1 0 1.42l-5.84 5.83a1 1 0 0 1-1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,T3=W`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.54 11.04a1 1 0 0 1-1.41 0L8 5.92l-5.13 5.12a1 1 0 1 1-1.41-1.41l5.83-5.84a1 1 0 0 1 1.42 0l5.83 5.84a1 1 0 0 1 0 1.41Z"
    clip-rule="evenodd"
  />
</svg>`,B3=W`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 2.99a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-7 5a7 7 0 1 1 14 0 7 7 0 0 1-14 0Zm7-4a1 1 0 0 1 1 1v2.58l1.85 1.85a1 1 0 0 1-1.41 1.42L6.29 8.69A1 1 0 0 1 6 8v-3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,O3=W`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M2.54 2.54a1 1 0 0 1 1.42 0L8 6.6l4.04-4.05a1 1 0 1 1 1.42 1.42L9.4 8l4.05 4.04a1 1 0 0 1-1.42 1.42L8 9.4l-4.04 4.05a1 1 0 0 1-1.42-1.42L6.6 8 2.54 3.96a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,k3=W`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 3a7 7 0 0 0-6.85 8.44l8.29-8.3C10.97 3.06 10.49 3 10 3Zm3.49.93-9.56 9.56c.32.55.71 1.06 1.16 1.5L15 5.1a7.03 7.03 0 0 0-1.5-1.16Zm2.7 2.8-9.46 9.46a7 7 0 0 0 9.46-9.46ZM1.99 5.9A9 9 0 1 1 18 14.09 9 9 0 0 1 1.98 5.91Z"
    clip-rule="evenodd"
  />
</svg>`,R3=W`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm10.66-2.65a1 1 0 0 1 .23 1.06L9.83 9.24a1 1 0 0 1-.59.58l-2.83 1.06A1 1 0 0 1 5.13 9.6l1.06-2.82a1 1 0 0 1 .58-.59L9.6 5.12a1 1 0 0 1 1.06.23ZM7.9 7.89l-.13.35.35-.13.12-.35-.34.13Z"
    clip-rule="evenodd"
  />
</svg>`,N3=W`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.5 0h1.67c.68 0 1.26 0 1.73.04.5.05.97.14 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73V6.5c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.43.03-.95.03-1.57.03 0 .62 0 1.14-.04 1.57-.04.5-.14.97-.4 1.42-.29.52-.72.95-1.24 1.24-.44.26-.92.35-1.41.4-.48.04-1.05.04-1.74.04H4.83c-.68 0-1.26 0-1.73-.04-.5-.05-.97-.14-1.42-.4-.52-.3-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.42A20.9 20.9 0 0 1 0 11.17V9.5c0-.69 0-1.26.04-1.74.05-.5.14-.97.4-1.41.3-.52.72-.95 1.24-1.25.45-.25.92-.35 1.42-.4.43-.03.95-.03 1.57-.03 0-.62 0-1.14.04-1.57.04-.5.14-.97.4-1.42.29-.52.72-.95 1.24-1.24.44-.26.92-.35 1.41-.4A20.9 20.9 0 0 1 9.5 0ZM4.67 6.67c-.63 0-1.06 0-1.4.03-.35.03-.5.09-.6.14-.2.12-.38.3-.5.5-.05.1-.1.24-.14.6C2 8.32 2 8.8 2 9.54v1.59c0 .73 0 1.22.03 1.6.04.35.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h1.58c.74 0 1.22 0 1.6-.03.36-.04.5-.1.6-.15.2-.11.38-.29.5-.5.05-.09.1-.24.14-.6.03-.33.03-.76.03-1.39-.6 0-1.13 0-1.57-.04-.5-.04-.97-.14-1.41-.4-.52-.29-.95-.72-1.25-1.24a3.39 3.39 0 0 1-.4-1.41c-.03-.44-.03-.96-.03-1.57Zm3.27-4.64c-.36.04-.5.1-.6.15-.2.11-.38.29-.5.5-.05.09-.1.24-.14.6-.03.37-.03.86-.03 1.6v1.58c0 .74 0 1.22.03 1.6.03.36.09.5.14.6.12.2.3.38.5.5.1.05.24.1.6.14.38.03.86.03 1.6.03h1.59c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6V4.87c0-.73 0-1.22-.03-1.6a1.46 1.46 0 0 0-.15-.6c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.14-.37-.03-.86-.03-1.6-.03H9.55c-.74 0-1.22 0-1.6.03Z"
    clip-rule="evenodd"
  />
</svg>`,M3=W` <svg fill="none" viewBox="0 0 13 4">
  <path fill="currentColor" d="M.5 0h12L8.9 3.13a3.76 3.76 0 0 1-4.8 0L.5 0Z" />
</svg>`,$3=W`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13.66 2H6.34c-1.07 0-1.96 0-2.68.08-.74.08-1.42.25-2.01.68a4 4 0 0 0-.89.89c-.43.6-.6 1.27-.68 2.01C0 6.38 0 7.26 0 8.34v.89c0 1.07 0 1.96.08 2.68.08.74.25 1.42.68 2.01a4 4 0 0 0 .89.89c.6.43 1.27.6 2.01.68a27 27 0 0 0 2.68.08h7.32a27 27 0 0 0 2.68-.08 4.03 4.03 0 0 0 2.01-.68 4 4 0 0 0 .89-.89c.43-.6.6-1.27.68-2.01.08-.72.08-1.6.08-2.68v-.89c0-1.07 0-1.96-.08-2.68a4.04 4.04 0 0 0-.68-2.01 4 4 0 0 0-.89-.89c-.6-.43-1.27-.6-2.01-.68C15.62 2 14.74 2 13.66 2ZM2.82 4.38c.2-.14.48-.25 1.06-.31C4.48 4 5.25 4 6.4 4h7.2c1.15 0 1.93 0 2.52.07.58.06.86.17 1.06.31a2 2 0 0 1 .44.44c.14.2.25.48.31 1.06.07.6.07 1.37.07 2.52v.77c0 1.15 0 1.93-.07 2.52-.06.58-.17.86-.31 1.06a2 2 0 0 1-.44.44c-.2.14-.48.25-1.06.32-.6.06-1.37.06-2.52.06H6.4c-1.15 0-1.93 0-2.52-.06-.58-.07-.86-.18-1.06-.32a2 2 0 0 1-.44-.44c-.14-.2-.25-.48-.31-1.06C2 11.1 2 10.32 2 9.17V8.4c0-1.15 0-1.93.07-2.52.06-.58.17-.86.31-1.06a2 2 0 0 1 .44-.44Z"
    clip-rule="evenodd"
  />
  <path fill="currentColor" d="M6.14 17.57a1 1 0 1 0 0 2h7.72a1 1 0 1 0 0-2H6.14Z" />
</svg>`,U3=W`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.07 1h.57a1 1 0 0 1 0 2h-.52c-.98 0-1.64 0-2.14.06-.48.05-.7.14-.84.24-.13.1-.25.22-.34.35-.1.14-.2.35-.25.83-.05.5-.05 1.16-.05 2.15v2.74c0 .99 0 1.65.05 2.15.05.48.14.7.25.83.1.14.2.25.34.35.14.1.36.2.84.25.5.05 1.16.05 2.14.05h.52a1 1 0 0 1 0 2h-.57c-.92 0-1.69 0-2.3-.07a3.6 3.6 0 0 1-1.8-.61c-.3-.22-.57-.49-.8-.8a3.6 3.6 0 0 1-.6-1.79C.5 11.11.5 10.35.5 9.43V6.58c0-.92 0-1.7.06-2.31a3.6 3.6 0 0 1 .62-1.8c.22-.3.48-.57.79-.79a3.6 3.6 0 0 1 1.8-.61C4.37 1 5.14 1 6.06 1ZM9.5 3a1 1 0 0 1 1.42 0l4.28 4.3a1 1 0 0 1 0 1.4L10.93 13a1 1 0 0 1-1.42-1.42L12.1 9H6.8a1 1 0 1 1 0-2h5.3L9.51 4.42a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,F3=W`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,L3=W`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M4.25 7a.63.63 0 0 0-.63.63v3.97c0 .28-.2.51-.47.54l-.75.07a.93.93 0 0 1-.9-.47A7.51 7.51 0 0 1 5.54.92a7.5 7.5 0 0 1 9.54 4.62c.12.35.06.72-.16 1-.74.97-1.68 1.78-2.6 2.44V4.44a.64.64 0 0 0-.63-.64h-1.06c-.35 0-.63.3-.63.64v5.5c0 .23-.12.42-.32.5l-.52.23V6.05c0-.36-.3-.64-.64-.64H7.45c-.35 0-.64.3-.64.64v4.97c0 .25-.17.46-.4.52a5.8 5.8 0 0 0-.45.11v-4c0-.36-.3-.65-.64-.65H4.25ZM14.07 12.4A7.49 7.49 0 0 1 3.6 14.08c4.09-.58 9.14-2.5 11.87-6.6v.03a7.56 7.56 0 0 1-1.41 4.91Z"
  />
</svg>`,j3=W`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.71 2.99a.57.57 0 0 0-.57.57 1 1 0 0 1-1 1c-.58 0-.96 0-1.24.03-.27.03-.37.07-.42.1a.97.97 0 0 0-.36.35c-.04.08-.09.21-.11.67a2.57 2.57 0 0 1 0 5.13c.02.45.07.6.11.66.09.15.21.28.36.36.07.04.21.1.67.12a2.57 2.57 0 0 1 5.12 0c.46-.03.6-.08.67-.12a.97.97 0 0 0 .36-.36c.03-.04.07-.14.1-.41.02-.29.03-.66.03-1.24a1 1 0 0 1 1-1 .57.57 0 0 0 0-1.15 1 1 0 0 1-1-1c0-.58 0-.95-.03-1.24a1.04 1.04 0 0 0-.1-.42.97.97 0 0 0-.36-.36 1.04 1.04 0 0 0-.42-.1c-.28-.02-.65-.02-1.24-.02a1 1 0 0 1-1-1 .57.57 0 0 0-.57-.57ZM5.15 13.98a1 1 0 0 0 .99-1v-.78a.57.57 0 0 1 1.14 0v.78a1 1 0 0 0 .99 1H8.36a66.26 66.26 0 0 0 .73 0 3.78 3.78 0 0 0 1.84-.38c.46-.26.85-.64 1.1-1.1.23-.4.32-.8.36-1.22.02-.2.03-.4.03-.63a2.57 2.57 0 0 0 0-4.75c0-.23-.01-.44-.03-.63a2.96 2.96 0 0 0-.35-1.22 2.97 2.97 0 0 0-1.1-1.1c-.4-.22-.8-.31-1.22-.35a8.7 8.7 0 0 0-.64-.04 2.57 2.57 0 0 0-4.74 0c-.23 0-.44.02-.63.04-.42.04-.83.13-1.22.35-.46.26-.84.64-1.1 1.1-.33.57-.37 1.2-.39 1.84a21.39 21.39 0 0 0 0 .72v.1a1 1 0 0 0 1 .99h.78a.57.57 0 0 1 0 1.15h-.77a1 1 0 0 0-1 .98v.1a63.87 63.87 0 0 0 0 .73c0 .64.05 1.27.38 1.83.26.47.64.85 1.1 1.11.56.32 1.2.37 1.84.38a20.93 20.93 0 0 0 .72 0h.1Z"
    clip-rule="evenodd"
  />
</svg>`,W3=W`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.74 3.99a1 1 0 0 1 1-1H11a1 1 0 0 1 1 1v6.26a1 1 0 0 1-2 0V6.4l-6.3 6.3a1 1 0 0 1-1.4-1.42l6.29-6.3H4.74a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,z3=W`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1877F2" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M26 12.38h-2.89c-.92 0-1.61.38-1.61 1.34v1.66H26l-.36 4.5H21.5v12H17v-12h-3v-4.5h3V12.5c0-3.03 1.6-4.62 5.2-4.62H26v4.5Z"
        />
      </g>
    </g>
    <path
      fill="#1877F2"
      d="M40 20a20 20 0 1 0-23.13 19.76V25.78H11.8V20h5.07v-4.4c0-5.02 3-7.79 7.56-7.79 2.19 0 4.48.4 4.48.4v4.91h-2.53c-2.48 0-3.25 1.55-3.25 3.13V20h5.54l-.88 5.78h-4.66v13.98A20 20 0 0 0 40 20Z"
    />
    <path
      fill="#fff"
      d="m27.79 25.78.88-5.78h-5.55v-3.75c0-1.58.78-3.13 3.26-3.13h2.53V8.2s-2.3-.39-4.48-.39c-4.57 0-7.55 2.77-7.55 7.78V20H11.8v5.78h5.07v13.98a20.15 20.15 0 0 0 6.25 0V25.78h4.67Z"
    />
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,H3=W`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 3a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Zm2.63 5.25a1 1 0 0 1 1-1h8.75a1 1 0 1 1 0 2H3.63a1 1 0 0 1-1-1Zm2.62 5.25a1 1 0 0 1 1-1h3.5a1 1 0 0 1 0 2h-3.5a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,G3=W`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1B1F23" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M8 19.89a12 12 0 1 1 15.8 11.38c-.6.12-.8-.26-.8-.57v-3.3c0-1.12-.4-1.85-.82-2.22 2.67-.3 5.48-1.31 5.48-5.92 0-1.31-.47-2.38-1.24-3.22.13-.3.54-1.52-.12-3.18 0 0-1-.32-3.3 1.23a11.54 11.54 0 0 0-6 0c-2.3-1.55-3.3-1.23-3.3-1.23a4.32 4.32 0 0 0-.12 3.18 4.64 4.64 0 0 0-1.24 3.22c0 4.6 2.8 5.63 5.47 5.93-.34.3-.65.83-.76 1.6-.69.31-2.42.84-3.5-1 0 0-.63-1.15-1.83-1.23 0 0-1.18-.02-.09.73 0 0 .8.37 1.34 1.76 0 0 .7 2.14 4.03 1.41v2.24c0 .31-.2.68-.8.57A12 12 0 0 1 8 19.9Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,V3=W`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#fff" fill-opacity=".05" />
      <g clip-path="url(#c)">
        <path
          fill="#4285F4"
          d="M20 17.7v4.65h6.46a5.53 5.53 0 0 1-2.41 3.61l3.9 3.02c2.26-2.09 3.57-5.17 3.57-8.82 0-.85-.08-1.67-.22-2.46H20Z"
        />
        <path
          fill="#34A853"
          d="m13.27 22.17-.87.67-3.11 2.42A12 12 0 0 0 20 31.9c3.24 0 5.96-1.07 7.94-2.9l-3.9-3.03A7.15 7.15 0 0 1 20 27.12a7.16 7.16 0 0 1-6.72-4.94v-.01Z"
        />
        <path
          fill="#FBBC05"
          d="M9.29 14.5a11.85 11.85 0 0 0 0 10.76l3.99-3.1a7.19 7.19 0 0 1 0-4.55l-4-3.1Z"
        />
        <path
          fill="#EA4335"
          d="M20 12.66c1.77 0 3.34.61 4.6 1.8l3.43-3.44A11.51 11.51 0 0 0 20 7.89c-4.7 0-8.74 2.69-10.71 6.62l3.99 3.1A7.16 7.16 0 0 1 20 12.66Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,q3=W`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M8.51 5.66a.83.83 0 0 0-.57-.2.83.83 0 0 0-.52.28.8.8 0 0 0-.25.52 1 1 0 0 1-2 0c0-.75.34-1.43.81-1.91a2.75 2.75 0 0 1 4.78 1.92c0 1.24-.8 1.86-1.25 2.2l-.04.03c-.47.36-.5.43-.5.65a1 1 0 1 1-2 0c0-1.25.8-1.86 1.24-2.2l.04-.04c.47-.36.5-.43.5-.65 0-.3-.1-.49-.24-.6ZM9.12 11.87a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z"
    clip-rule="evenodd"
  />
</svg>`,Q3=W`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    d="M6 10.49a1 1 0 1 0 2 0v-2a1 1 0 0 0-2 0v2ZM7 4.49a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 14.99a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5-7a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
    clip-rule="evenodd"
  />
</svg>`,K3=W`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.83 1.34h6.34c.68 0 1.26 0 1.73.04.5.05.97.15 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73v3.71c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.47.03-1.05.03-1.73.03H4.83c-.68 0-1.26 0-1.73-.04-.5-.04-.97-.14-1.42-.4-.52-.29-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.41A20.9 20.9 0 0 1 0 9.88v-3.7c0-.7 0-1.27.04-1.74.05-.5.14-.97.4-1.42.3-.52.72-.95 1.24-1.24.45-.25.92-.35 1.42-.4.47-.04 1.05-.04 1.73-.04ZM3.28 3.38c-.36.03-.51.08-.6.14-.21.11-.39.29-.5.5a.8.8 0 0 0-.08.19l5.16 3.44c.45.3 1.03.3 1.48 0L13.9 4.2a.79.79 0 0 0-.08-.2c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.13-.37-.04-.86-.04-1.6-.04H4.88c-.73 0-1.22 0-1.6.04ZM14 6.54 9.85 9.31a3.33 3.33 0 0 1-3.7 0L2 6.54v3.3c0 .74 0 1.22.03 1.6.04.36.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h6.25c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6v-3.3Z"
    clip-rule="evenodd"
  />
</svg>`,Z3=W`<svg fill="none" viewBox="0 0 20 20">
  <path fill="currentColor" d="M10.81 5.81a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3 4.75A4.75 4.75 0 0 1 7.75 0h4.5A4.75 4.75 0 0 1 17 4.75v10.5A4.75 4.75 0 0 1 12.25 20h-4.5A4.75 4.75 0 0 1 3 15.25V4.75ZM7.75 2A2.75 2.75 0 0 0 5 4.75v10.5A2.75 2.75 0 0 0 7.75 18h4.5A2.75 2.75 0 0 0 15 15.25V4.75A2.75 2.75 0 0 0 12.25 2h-4.5Z"
    clip-rule="evenodd"
  />
</svg>`,Y3=W`<svg fill="none" viewBox="0 0 22 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M16.32 13.62a3.14 3.14 0 1 1-.99 1.72l-1.6-.93a3.83 3.83 0 0 1-3.71 1 3.66 3.66 0 0 1-1.74-1l-1.6.94a3.14 3.14 0 1 1-1-1.73l1.6-.94a3.7 3.7 0 0 1 0-2 3.81 3.81 0 0 1 1.8-2.33c.29-.17.6-.3.92-.38V6.1a3.14 3.14 0 1 1 2 0l-.01.02v1.85H12a3.82 3.82 0 0 1 2.33 1.8 3.7 3.7 0 0 1 .39 2.91l1.6.93ZM2.6 16.54a1.14 1.14 0 0 0 1.98-1.14 1.14 1.14 0 0 0-1.98 1.14ZM11 2.01a1.14 1.14 0 1 0 0 2.28 1.14 1.14 0 0 0 0-2.28Zm1.68 10.45c.08-.19.14-.38.16-.58v-.05l.02-.13v-.13a1.92 1.92 0 0 0-.24-.8l-.11-.15a1.89 1.89 0 0 0-.74-.6 1.86 1.86 0 0 0-.77-.17h-.19a1.97 1.97 0 0 0-.89.34 1.98 1.98 0 0 0-.61.74 1.99 1.99 0 0 0-.16.9v.05a1.87 1.87 0 0 0 .24.74l.1.15c.12.16.26.3.42.42l.16.1.13.07.04.02a1.84 1.84 0 0 0 .76.17h.17a2 2 0 0 0 .91-.35 1.78 1.78 0 0 0 .52-.58l.03-.05a.84.84 0 0 0 .05-.11Zm5.15 4.5a1.14 1.14 0 0 0 1.14-1.97 1.13 1.13 0 0 0-1.55.41c-.32.55-.13 1.25.41 1.56Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.63 9.43a1.5 1.5 0 1 0 1.5-2.6 1.5 1.5 0 0 0-1.5 2.6Zm.32-1.55a.5.5 0 0 1 .68-.19.5.5 0 0 1 .18.68.5.5 0 0 1-.68.19.5.5 0 0 1-.18-.68ZM17.94 8.88a1.5 1.5 0 1 1-2.6-1.5 1.5 1.5 0 1 1 2.6 1.5ZM16.9 7.69a.5.5 0 0 0-.68.19.5.5 0 0 0 .18.68.5.5 0 0 0 .68-.19.5.5 0 0 0-.18-.68ZM9.75 17.75a1.5 1.5 0 1 1 2.6 1.5 1.5 1.5 0 1 1-2.6-1.5Zm1.05 1.18a.5.5 0 0 0 .68-.18.5.5 0 0 0-.18-.68.5.5 0 0 0-.68.18.5.5 0 0 0 .18.68Z"
    clip-rule="evenodd"
  />
</svg>`,J3=W`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.13 1h1.71c1.46 0 2.63 0 3.56.1.97.1 1.8.33 2.53.85a5 5 0 0 1 1.1 1.11c.53.73.75 1.56.86 2.53.1.93.1 2.1.1 3.55v1.72c0 1.45 0 2.62-.1 3.55-.1.97-.33 1.8-.86 2.53a5 5 0 0 1-1.1 1.1c-.73.53-1.56.75-2.53.86-.93.1-2.1.1-3.55.1H9.13c-1.45 0-2.62 0-3.56-.1-.96-.1-1.8-.33-2.52-.85a5 5 0 0 1-1.1-1.11 5.05 5.05 0 0 1-.86-2.53c-.1-.93-.1-2.1-.1-3.55V9.14c0-1.45 0-2.62.1-3.55.1-.97.33-1.8.85-2.53a5 5 0 0 1 1.1-1.1 5.05 5.05 0 0 1 2.53-.86C6.51 1 7.67 1 9.13 1ZM5.79 3.09a3.1 3.1 0 0 0-1.57.48 3 3 0 0 0-.66.67c-.24.32-.4.77-.48 1.56-.1.82-.1 1.88-.1 3.4v1.6c0 1.15 0 2.04.05 2.76l.41-.42c.5-.5.93-.92 1.32-1.24.41-.33.86-.6 1.43-.7a3 3 0 0 1 .94 0c.35.06.66.2.95.37a17.11 17.11 0 0 0 .8.45c.1-.08.2-.2.41-.4l.04-.03a27 27 0 0 1 1.95-1.84 4.03 4.03 0 0 1 1.91-.94 4 4 0 0 1 1.25 0c.73.11 1.33.46 1.91.94l.64.55V9.2c0-1.52 0-2.58-.1-3.4a3.1 3.1 0 0 0-.48-1.56 3 3 0 0 0-.66-.67 3.1 3.1 0 0 0-1.56-.48C13.37 3 12.3 3 10.79 3h-1.6c-1.52 0-2.59 0-3.4.09Zm11.18 10-.04-.05a26.24 26.24 0 0 0-1.83-1.74c-.45-.36-.73-.48-.97-.52a2 2 0 0 0-.63 0c-.24.04-.51.16-.97.52-.46.38-1.01.93-1.83 1.74l-.02.02c-.17.18-.34.34-.49.47a2.04 2.04 0 0 1-1.08.5 1.97 1.97 0 0 1-1.25-.27l-.79-.46-.02-.02a.65.65 0 0 0-.24-.1 1 1 0 0 0-.31 0c-.08.02-.21.06-.49.28-.3.24-.65.59-1.2 1.14l-.56.56-.65.66a3 3 0 0 0 .62.6c.33.24.77.4 1.57.49.81.09 1.88.09 3.4.09h1.6c1.52 0 2.58 0 3.4-.09a3.1 3.1 0 0 0 1.56-.48 3 3 0 0 0 .66-.67c.24-.32.4-.77.49-1.56l.07-1.12Zm-8.02-1.03ZM4.99 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
    clip-rule="evenodd"
  />
</svg>`,X3=W`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 0a1 1 0 0 1 1 1v5.38a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1ZM5.26 2.6a1 1 0 0 1-.28 1.39 5.46 5.46 0 1 0 6.04 0 1 1 0 1 1 1.1-1.67 7.46 7.46 0 1 1-8.25 0 1 1 0 0 1 1.4.28Z"
    clip-rule="evenodd"
  />
</svg>`,e5=W`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M3 6a3 3 0 0 1 3-3h1a1 1 0 1 0 0-2H6a5 5 0 0 0-5 5v1a1 1 0 0 0 2 0V6ZM13 1a1 1 0 1 0 0 2h1a3 3 0 0 1 3 3v1a1 1 0 1 0 2 0V6a5 5 0 0 0-5-5h-1ZM3 13a1 1 0 1 0-2 0v1a5 5 0 0 0 5 5h1a1 1 0 1 0 0-2H6a3 3 0 0 1-3-3v-1ZM19 13a1 1 0 1 0-2 0v1a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1.01a5 5 0 0 0 5-5v-1ZM5.3 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05A1.5 1.5 0 0 0 9.2 8.14c.06-.2.06-.43.06-.89s0-.7-.06-.89A1.5 1.5 0 0 0 8.14 5.3c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM10.8 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM5.26 12.75c0-.46 0-.7.05-.89a1.5 1.5 0 0 1 1.06-1.06c.19-.05.42-.05.89-.05.46 0 .7 0 .88.05.52.14.93.54 1.06 1.06.06.2.06.43.06.89s0 .7-.06.89a1.5 1.5 0 0 1-1.06 1.06c-.19.05-.42.05-.88.05-.47 0-.7 0-.9-.05a1.5 1.5 0 0 1-1.05-1.06c-.05-.2-.05-.43-.05-.89ZM10.8 11.86c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06Z"
  />
</svg>`,t5=W`<svg fill="none" viewBox="0 0 14 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.94 1.04a1 1 0 0 1 .7 1.23l-.48 1.68a5.85 5.85 0 0 1 8.53 4.32 5.86 5.86 0 0 1-11.4 2.56 1 1 0 0 1 1.9-.57 3.86 3.86 0 1 0 1.83-4.5l1.87.53a1 1 0 0 1-.55 1.92l-4.1-1.15a1 1 0 0 1-.69-1.23l1.16-4.1a1 1 0 0 1 1.23-.7Z"
    clip-rule="evenodd"
  />
</svg>`,r5=W`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.36 4.21a5.14 5.14 0 1 0 0 10.29 5.14 5.14 0 0 0 0-10.29ZM1.64 9.36a7.71 7.71 0 1 1 14 4.47l2.52 2.5a1.29 1.29 0 1 1-1.82 1.83l-2.51-2.51A7.71 7.71 0 0 1 1.65 9.36Z"
    clip-rule="evenodd"
  />
</svg>`,n5=W`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.76.3a1 1 0 0 1 0 1.4L4.07 4.4h9a1 1 0 1 1 0 2h-9l2.69 2.68a1 1 0 1 1-1.42 1.42L.95 6.09a1 1 0 0 1 0-1.4l4.4-4.4a1 1 0 0 1 1.4 0Zm6.49 9.21a1 1 0 0 1 1.41 0l4.39 4.4a1 1 0 0 1 0 1.4l-4.39 4.4a1 1 0 0 1-1.41-1.42l2.68-2.68h-9a1 1 0 0 1 0-2h9l-2.68-2.68a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,i5=W`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.48 2.18a1 1 0 0 1 1.41 0l2.68 2.68a1 1 0 1 1-1.41 1.42l-.98-.98v4.56a1 1 0 0 1-2 0V5.3l-.97.98A1 1 0 0 1 .79 4.86l2.69-2.68Zm6.34 2.93a1 1 0 0 1 1 1v4.56l.97-.98a1 1 0 1 1 1.42 1.42l-2.69 2.68a1 1 0 0 1-1.41 0l-2.68-2.68a1 1 0 0 1 1.41-1.42l.98.98V6.1a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,o5=W`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg> `,s5=W`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5A3E85" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M18.22 25.7 20 23.91h3.34l2.1-2.1v-6.68H15.4v8.78h2.82v1.77Zm3.87-8.16h1.25v3.66H22.1v-3.66Zm-3.34 0H20v3.66h-1.25v-3.66ZM20 7.9a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm6.69 14.56-3.66 3.66h-2.72l-1.77 1.78h-1.88V26.1H13.3v-9.82l.94-2.4H26.7v8.56Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,a5=W`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1D9BF0" />
      <path
        fill="#fff"
        d="M30 13.81c-.74.33-1.53.55-2.36.65.85-.51 1.5-1.32 1.8-2.27-.79.47-1.66.8-2.6 1a4.1 4.1 0 0 0-7 3.73c-3.4-.17-6.42-1.8-8.45-4.28a4.1 4.1 0 0 0 1.27 5.47c-.67-.02-1.3-.2-1.86-.5a4.1 4.1 0 0 0 3.3 4.07c-.58.15-1.21.19-1.86.07a4.1 4.1 0 0 0 3.83 2.85A8.25 8.25 0 0 1 10 26.3a11.62 11.62 0 0 0 6.29 1.84c7.62 0 11.92-6.44 11.66-12.2.8-.59 1.5-1.3 2.05-2.13Z"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,c5=W`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="m14.36 4.74.01.42c0 4.34-3.3 9.34-9.34 9.34A9.3 9.3 0 0 1 0 13.03a6.6 6.6 0 0 0 4.86-1.36 3.29 3.29 0 0 1-3.07-2.28c.5.1 1 .07 1.48-.06A3.28 3.28 0 0 1 .64 6.11v-.04c.46.26.97.4 1.49.41A3.29 3.29 0 0 1 1.11 2.1a9.32 9.32 0 0 0 6.77 3.43 3.28 3.28 0 0 1 5.6-3 6.59 6.59 0 0 0 2.08-.8 3.3 3.3 0 0 1-1.45 1.82A6.53 6.53 0 0 0 16 3.04c-.44.66-1 1.23-1.64 1.7Z"
  />
</svg>`,l5=W`
  <svg fill="none" viewBox="0 0 48 44">
    <path
      style="fill: var(--wui-color-bg-300);"
      d="M4.56 8.64c-1.23 1.68-1.23 4.08-1.23 8.88v8.96c0 4.8 0 7.2 1.23 8.88.39.55.87 1.02 1.41 1.42C7.65 38 10.05 38 14.85 38h14.3c4.8 0 7.2 0 8.88-1.22a6.4 6.4 0 0 0 1.41-1.42c.83-1.14 1.1-2.6 1.19-4.92a6.4 6.4 0 0 0 5.16-4.65c.21-.81.21-1.8.21-3.79 0-1.98 0-2.98-.22-3.79a6.4 6.4 0 0 0-5.15-4.65c-.1-2.32-.36-3.78-1.19-4.92a6.4 6.4 0 0 0-1.41-1.42C36.35 6 33.95 6 29.15 6h-14.3c-4.8 0-7.2 0-8.88 1.22a6.4 6.4 0 0 0-1.41 1.42Z"
    />
    <path
      style="fill: var(--wui-color-fg-200);"
      fill-rule="evenodd"
      d="M2.27 11.33a6.4 6.4 0 0 1 6.4-6.4h26.66a6.4 6.4 0 0 1 6.4 6.4v1.7a6.4 6.4 0 0 1 5.34 6.3v5.34a6.4 6.4 0 0 1-5.34 6.3v1.7a6.4 6.4 0 0 1-6.4 6.4H8.67a6.4 6.4 0 0 1-6.4-6.4V11.33ZM39.6 31.07h-6.93a9.07 9.07 0 1 1 0-18.14h6.93v-1.6a4.27 4.27 0 0 0-4.27-4.26H8.67a4.27 4.27 0 0 0-4.27 4.26v21.34a4.27 4.27 0 0 0 4.27 4.26h26.66a4.27 4.27 0 0 0 4.27-4.26v-1.6Zm-6.93-16a6.93 6.93 0 0 0 0 13.86h8a4.27 4.27 0 0 0 4.26-4.26v-5.34a4.27 4.27 0 0 0-4.26-4.26h-8Z"
      clip-rule="evenodd"
    />
  </svg>
`,u5=W`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 5.5c0-1.8 1.46-3.25 3.25-3.25H14.5c1.8 0 3.25 1.46 3.25 3.25v.28A3.25 3.25 0 0 1 20 8.88v2.24c0 1.45-.94 2.68-2.25 3.1v.28c0 1.8-1.46 3.25-3.25 3.25H3.25A3.25 3.25 0 0 1 0 14.5v-9Zm15.75 8.88h-2.38a4.38 4.38 0 0 1 0-8.76h2.38V5.5c0-.69-.56-1.25-1.25-1.25H3.25C2.56 4.25 2 4.81 2 5.5v9c0 .69.56 1.25 1.25 1.25H14.5c.69 0 1.25-.56 1.25-1.25v-.13Zm-2.38-6.76a2.37 2.37 0 1 0 0 4.75h3.38c.69 0 1.25-.55 1.25-1.24V8.87c0-.69-.56-1.24-1.25-1.24h-3.38Z"
    clip-rule="evenodd"
  />
</svg>`,f5=W`<svg fill="none" viewBox="0 0 96 67">
  <path
    fill="currentColor"
    d="M25.32 18.8a32.56 32.56 0 0 1 45.36 0l1.5 1.47c.63.62.63 1.61 0 2.22l-5.15 5.05c-.31.3-.82.3-1.14 0l-2.07-2.03a22.71 22.71 0 0 0-31.64 0l-2.22 2.18c-.31.3-.82.3-1.14 0l-5.15-5.05a1.55 1.55 0 0 1 0-2.22l1.65-1.62Zm56.02 10.44 4.59 4.5c.63.6.63 1.6 0 2.21l-20.7 20.26c-.62.61-1.63.61-2.26 0L48.28 41.83a.4.4 0 0 0-.56 0L33.03 56.21c-.63.61-1.64.61-2.27 0L10.07 35.95a1.55 1.55 0 0 1 0-2.22l4.59-4.5a1.63 1.63 0 0 1 2.27 0L31.6 43.63a.4.4 0 0 0 .57 0l14.69-14.38a1.63 1.63 0 0 1 2.26 0l14.69 14.38a.4.4 0 0 0 .57 0l14.68-14.38a1.63 1.63 0 0 1 2.27 0Z"
  />
  <path
    stroke="#000"
    stroke-opacity=".1"
    d="M25.67 19.15a32.06 32.06 0 0 1 44.66 0l1.5 1.48c.43.42.43 1.09 0 1.5l-5.15 5.05a.31.31 0 0 1-.44 0l-2.07-2.03a23.21 23.21 0 0 0-32.34 0l-2.22 2.18a.31.31 0 0 1-.44 0l-5.15-5.05a1.05 1.05 0 0 1 0-1.5l1.65-1.63ZM81 29.6l4.6 4.5c.42.41.42 1.09 0 1.5l-20.7 20.26c-.43.43-1.14.43-1.57 0L48.63 41.47a.9.9 0 0 0-1.26 0L32.68 55.85c-.43.43-1.14.43-1.57 0L10.42 35.6a1.05 1.05 0 0 1 0-1.5l4.59-4.5a1.13 1.13 0 0 1 1.57 0l14.68 14.38a.9.9 0 0 0 1.27 0l-.35-.35.35.35L47.22 29.6a1.13 1.13 0 0 1 1.56 0l14.7 14.38a.9.9 0 0 0 1.26 0L79.42 29.6a1.13 1.13 0 0 1 1.57 0Z"
  />
</svg>`,d5=W`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M11 6.67a1 1 0 1 0-2 0v2.66a1 1 0 0 0 2 0V6.67ZM10 14.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-7 9a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"
    clip-rule="evenodd"
  />
</svg>`,h5=W`<svg fill="none" viewBox="0 0 24 24">
  <path
    style="fill: var(--wui-color-accent-100);"
    d="M10.2 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM10.2 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0Z"
  />
</svg>`;var ha=globalThis&&globalThis.__decorate||function(t,e,r,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,r,i):s(e,r))||i);return o>3&&i&&Object.defineProperty(e,r,i),i};const p5={allWallets:h5,apple:v3,arrowBottom:A3,arrowLeft:C3,arrowRight:x3,arrowTop:E3,browser:_3,checkmark:S3,chevronBottom:D3,chevronLeft:P3,chevronRight:I3,chevronTop:T3,clock:B3,close:O3,compass:R3,coinPlaceholder:k3,copy:N3,cursor:M3,desktop:$3,disconnect:U3,discord:F3,etherscan:L3,extension:j3,externalLink:W3,facebook:z3,filters:H3,github:G3,google:V3,helpCircle:q3,infoCircle:Q3,mail:K3,mobile:Z3,networkPlaceholder:Y3,nftPlaceholder:J3,off:X3,qrCode:e5,refresh:t5,search:r5,swapHorizontal:n5,swapVertical:i5,telegram:o5,twitch:s5,twitter:a5,twitterIcon:c5,wallet:u5,walletConnect:f5,walletPlaceholder:l5,warningCircle:d5};let Ln=class extends F{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300"}render(){return this.style.cssText=`
      --local-color: ${`var(--wui-color-${this.color});`}
      --local-width: ${`var(--wui-icon-size-${this.size});`}
    `,k`${p5[this.name]}`}};Ln.styles=[te,ou,y3];ha([R()],Ln.prototype,"size",void 0);ha([R()],Ln.prototype,"name",void 0);ha([R()],Ln.prototype,"color",void 0);Ln=ha([U("wui-icon")],Ln);const g5=H`
  :host {
    display: block;
    width: 100%;
    height: 100%;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`;var su=globalThis&&globalThis.__decorate||function(t,e,r,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,r,i):s(e,r))||i);return o>3&&i&&Object.defineProperty(e,r,i),i};let ao=class extends F{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image"}render(){return k`<img src=${this.src} alt=${this.alt} />`}};ao.styles=[te,ou,g5];su([R()],ao.prototype,"src",void 0);su([R()],ao.prototype,"alt",void 0);ao=su([U("wui-image")],ao);const w5=H`
  :host {
    display: block;
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
  }

  svg {
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  use {
    stroke: var(--wui-color-accent-100);
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var b5=globalThis&&globalThis.__decorate||function(t,e,r,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,r,i):s(e,r))||i);return o>3&&i&&Object.defineProperty(e,r,i),i};let Hc=class extends F{render(){return k`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `}};Hc.styles=[te,w5];Hc=b5([U("wui-loading-hexagon")],Hc);const m5=H`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 14px;
    height: 14px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  svg {
    animation: rotate 2s linear infinite;
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`;var au=globalThis&&globalThis.__decorate||function(t,e,r,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,r,i):s(e,r))||i);return o>3&&i&&Object.defineProperty(e,r,i),i};let co=class extends F{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText=`--local-color: var(--wui-color-${this.color});`,this.dataset.size=this.size,k`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};co.styles=[te,m5];au([R()],co.prototype,"color",void 0);au([R()],co.prototype,"size",void 0);co=au([U("wui-loading-spinner")],co);const y5=H`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var Uh=globalThis&&globalThis.__decorate||function(t,e,r,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,r,i):s(e,r))||i);return o>3&&i&&Object.defineProperty(e,r,i),i};let Es=class extends F{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const e=this.radius>50?50:this.radius,n=36-e,o=116+n,i=245+n,s=360+n*1.75;return k`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${e}
          stroke-dasharray="${o} ${i}"
          stroke-dashoffset=${s}
        />
      </svg>
    `}};Es.styles=[te,y5];Uh([R({type:Number})],Es.prototype,"radius",void 0);Es=Uh([U("wui-loading-thumbnail")],Es);const v5=H`
  :host {
    display: block;
    outline: 1px solid var(--wui-gray-glass-005);
    background: linear-gradient(
      90deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 2.5s linear infinite reverse;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`;var pa=globalThis&&globalThis.__decorate||function(t,e,r,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,r,i):s(e,r))||i);return o>3&&i&&Object.defineProperty(e,r,i),i};let jn=class extends F{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m"}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
      border-radius: ${`clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px)`};
    `,k`<slot></slot>`}};jn.styles=[v5];pa([R()],jn.prototype,"width",void 0);pa([R()],jn.prototype,"height",void 0);pa([R()],jn.prototype,"borderRadius",void 0);jn=pa([U("wui-shimmer")],jn);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fh={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Lh=t=>(...e)=>({_$litDirective$:t,values:e});let jh=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,n){this._$Ct=e,this._$AM=r,this._$Ci=n}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const A5=Lh(class extends jh{constructor(t){var e;if(super(t),t.type!==Fh.ATTRIBUTE||t.name!=="class"||((e=t.strings)===null||e===void 0?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var r,n;if(this.it===void 0){this.it=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in e)e[i]&&!(!((r=this.nt)===null||r===void 0)&&r.has(i))&&this.it.add(i);return this.render(e)}const o=t.element.classList;this.it.forEach(i=>{i in e||(o.remove(i),this.it.delete(i))});for(const i in e){const s=!!e[i];s===this.it.has(i)||!((n=this.nt)===null||n===void 0)&&n.has(i)||(s?(o.add(i),this.it.add(i)):(o.remove(i),this.it.delete(i)))}return an}}),C5=H`
  :host {
    display: flex !important;
  }

  slot {
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }
`;var ga=globalThis&&globalThis.__decorate||function(t,e,r,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,r,i):s(e,r))||i);return o>3&&i&&Object.defineProperty(e,r,i),i};let Wn=class extends F{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left"}render(){const e={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0};return this.style.cssText=`
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `,k`<slot class=${A5(e)}></slot>`}};Wn.styles=[te,C5];ga([R()],Wn.prototype,"variant",void 0);ga([R()],Wn.prototype,"color",void 0);ga([R()],Wn.prototype,"align",void 0);Wn=ga([U("wui-text")],Wn);const x5=W`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="30" />
  <circle cx="30" cy="30" r="3" fill="#fff" />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m45.32 17.9-.88-.42.88.42.02-.05c.1-.2.21-.44.26-.7l-.82-.15.82.16a2 2 0 0 0-.24-1.4c-.13-.23-.32-.42-.47-.57a8.42 8.42 0 0 1-.04-.04l-.04-.04a2.9 2.9 0 0 0-.56-.47l-.51.86.5-.86a2 2 0 0 0-1.4-.24c-.26.05-.5.16-.69.26l-.05.02-15.05 7.25-.1.05c-1.14.55-1.85.89-2.46 1.37a7 7 0 0 0-1.13 1.14c-.5.6-.83 1.32-1.38 2.45l-.05.11-7.25 15.05-.02.05c-.1.2-.21.43-.26.69a2 2 0 0 0 .24 1.4l.85-.5-.85.5c.13.23.32.42.47.57l.04.04.04.04c.15.15.34.34.56.47a2 2 0 0 0 1.41.24l-.2-.98.2.98c.25-.05.5-.17.69-.26l.05-.02-.42-.87.42.87 15.05-7.25.1-.05c1.14-.55 1.85-.89 2.46-1.38a7 7 0 0 0 1.13-1.13 12.87 12.87 0 0 0 1.43-2.56l7.25-15.05Z"
  />
  <path
    fill="#1DC956"
    d="M33.38 32.72 30.7 29.3 15.86 44.14l.2.2a1 1 0 0 0 1.14.2l15.1-7.27a3 3 0 0 0 1.08-4.55Z"
  />
  <path
    fill="#86F999"
    d="m26.62 27.28 2.67 3.43 14.85-14.85-.2-.2a1 1 0 0 0-1.14-.2l-15.1 7.27a3 3 0 0 0-1.08 4.55Z"
  />
  <circle cx="30" cy="30" r="3" fill="#fff" transform="rotate(45 30 30)" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
</svg> `,E5=W`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#clip0_7734_50402)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#EB8B47"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M19 52C24.5228 52 29 47.5228 29 42C29 36.4772 24.5228 32 19 32C13.4772 32 9 36.4772 9 42C9 47.5228 13.4772 52 19 52Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.8437 8.3264C42.4507 7.70891 41.5493 7.70891 41.1564 8.32641L28.978 27.4638C28.5544 28.1295 29.0326 29.0007 29.8217 29.0007H54.1783C54.9674 29.0007 55.4456 28.1295 55.022 27.4638L42.8437 8.3264Z"
      fill="white"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.3348 11.6456C42.659 11.7608 42.9061 12.1492 43.4005 12.926L50.7332 24.4488C51.2952 25.332 51.5763 25.7737 51.5254 26.1382C51.4915 26.3808 51.3698 26.6026 51.1833 26.7614C50.9031 27 50.3796 27 49.3327 27H34.6673C33.6204 27 33.0969 27 32.8167 26.7614C32.6302 26.6026 32.5085 26.3808 32.4746 26.1382C32.4237 25.7737 32.7048 25.332 33.2669 24.4488L40.5995 12.926C41.0939 12.1492 41.341 11.7608 41.6652 11.6456C41.8818 11.5687 42.1182 11.5687 42.3348 11.6456ZM35.0001 26.999C38.8661 26.999 42.0001 23.865 42.0001 19.999C42.0001 23.865 45.1341 26.999 49.0001 26.999H35.0001Z"
      fill="#FF974C"
    />
    <path
      d="M10.1061 9.35712C9.9973 9.67775 9.99867 10.0388 9.99978 10.3323C9.99989 10.3611 10 10.3893 10 10.4167V25.5833C10 25.6107 9.99989 25.6389 9.99978 25.6677C9.99867 25.9612 9.9973 26.3222 10.1061 26.6429C10.306 27.2317 10.7683 27.694 11.3571 27.8939C11.6777 28.0027 12.0388 28.0013 12.3323 28.0002C12.3611 28.0001 12.3893 28 12.4167 28H19C24.5228 28 29 23.5228 29 18C29 12.4772 24.5228 8 19 8H12.4167C12.3893 8 12.3611 7.99989 12.3323 7.99978C12.0388 7.99867 11.6778 7.9973 11.3571 8.10614C10.7683 8.306 10.306 8.76834 10.1061 9.35712Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="19" cy="18" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
    <circle cx="19" cy="42" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="clip0_7734_50402">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,_5=W`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#1DC956"
      d="M0 25.01c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02.11 15.65.11 24.9.11h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.13 60 15.76 60 25v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-3.45 1.97-8.08 1.97-17.33 1.97H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 49.1 0 44.46 0 35.21v-10.2Z"
    />
    <path
      fill="#2BEE6C"
      d="M16.1 60c-3.82-.18-6.4-.64-8.53-1.86a15 15 0 0 1-5.6-5.6C.55 50.06.16 46.97.04 41.98L4.2 40.6a4 4 0 0 0 2.48-2.39l4.65-12.4a2 2 0 0 1 2.5-1.2l2.53.84a2 2 0 0 0 2.43-1l2.96-5.94a2 2 0 0 1 3.7.32l3.78 12.58a2 2 0 0 0 3.03 1.09l3.34-2.23a2 2 0 0 0 .65-.7l5.3-9.72a2 2 0 0 1 1.42-1.01l4.14-.69a2 2 0 0 1 1.6.44l3.9 3.24a2 2 0 0 0 2.7-.12l4.62-4.63c.08 2.2.08 4.8.08 7.93v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-2.13 1.22-4.7 1.68-8.54 1.86H16.11Z"
    />
    <path
      fill="#fff"
      d="m.07 43.03-.05-2.1 3.85-1.28a3 3 0 0 0 1.86-1.79l4.66-12.4a3 3 0 0 1 3.75-1.8l2.53.84a1 1 0 0 0 1.21-.5l2.97-5.94a3 3 0 0 1 5.56.48l3.77 12.58a1 1 0 0 0 1.51.55l3.34-2.23a1 1 0 0 0 .33-.35l5.3-9.71a3 3 0 0 1 2.14-1.53l4.13-.69a3 3 0 0 1 2.41.66l3.9 3.24a1 1 0 0 0 1.34-.06l5.28-5.28c.05.85.08 1.75.1 2.73L56 22.41a3 3 0 0 1-4.04.19l-3.9-3.25a1 1 0 0 0-.8-.21l-4.13.69a1 1 0 0 0-.72.5l-5.3 9.72a3 3 0 0 1-.97 1.05l-3.34 2.23a3 3 0 0 1-4.53-1.63l-3.78-12.58a1 1 0 0 0-1.85-.16l-2.97 5.94a3 3 0 0 1-3.63 1.5l-2.53-.84a1 1 0 0 0-1.25.6l-4.65 12.4a5 5 0 0 1-3.1 3L.07 43.02Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M49.5 19a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M45 .28v59.66l-2 .1V.19c.7.02 1.37.05 2 .1Z" />
    <path fill="#2BEE6C" d="M47.5 19a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
    <path
      stroke="#fff"
      stroke-opacity=".1"
      d="M.5 25.01c0-4.63 0-8.08.24-10.8.25-2.7.73-4.64 1.66-6.28a14.5 14.5 0 0 1 5.42-5.41C9.46 1.58 11.39 1.1 14.1.85A133 133 0 0 1 24.9.61h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.67a14.5 14.5 0 0 1 5.42 5.4c.93 1.65 1.41 3.58 1.66 6.3.24 2.71.24 6.16.24 10.79v10.2c0 4.64 0 8.08-.24 10.8-.25 2.7-.73 4.65-1.66 6.28a14.5 14.5 0 0 1-5.42 5.42c-1.63.93-3.57 1.41-6.28 1.66-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.66a14.5 14.5 0 0 1-5.42-5.42C1.47 50.66 1 48.72.74 46.01A133 133 0 0 1 .5 35.2v-10.2Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg>`,S5=W`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="30" />
    <path
      fill="#E87DE8"
      d="M57.98.01v19.5a4.09 4.09 0 0 0-2.63 2.29L50.7 34.2a2 2 0 0 1-2.5 1.2l-2.53-.84a2 2 0 0 0-2.42 1l-2.97 5.94a2 2 0 0 1-3.7-.32L32.8 28.6a2 2 0 0 0-3.02-1.09l-3.35 2.23a2 2 0 0 0-.64.7l-5.3 9.72a2 2 0 0 1-1.43 1.01l-4.13.69a2 2 0 0 1-1.61-.44l-3.9-3.24a2 2 0 0 0-2.69.12L2.1 42.93.02 43V.01h57.96Z"
    />
    <path
      fill="#fff"
      d="m61.95 16.94.05 2.1-3.85 1.28a3 3 0 0 0-1.86 1.79l-4.65 12.4a3 3 0 0 1-3.76 1.8l-2.53-.84a1 1 0 0 0-1.2.5l-2.98 5.94a3 3 0 0 1-5.55-.48l-3.78-12.58a1 1 0 0 0-1.5-.55l-3.35 2.23a1 1 0 0 0-.32.35l-5.3 9.72a3 3 0 0 1-2.14 1.52l-4.14.69a3 3 0 0 1-2.41-.66l-3.9-3.24a1 1 0 0 0-1.34.06l-5.28 5.28c-.05-.84-.08-1.75-.1-2.73l3.97-3.96a3 3 0 0 1 4.04-.19l3.89 3.25a1 1 0 0 0 .8.21l4.14-.68a1 1 0 0 0 .71-.51l5.3-9.71a3 3 0 0 1 .97-1.06l3.34-2.23a3 3 0 0 1 4.54 1.63l3.77 12.58a1 1 0 0 0 1.86.16l2.96-5.93a3 3 0 0 1 3.64-1.5l2.52.83a1 1 0 0 0 1.25-.6l4.66-12.4a5 5 0 0 1 3.1-2.99l4.43-1.48Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M35.5 27a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M31 0v60h-2V0h2Z" />
    <path fill="#E87DE8" d="M33.5 27a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,D5=W`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#987DE8" rx="30" />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="m15.48 28.37 11.97-19.3a3 3 0 0 1 5.1 0l11.97 19.3a6 6 0 0 1 .9 3.14v.03a6 6 0 0 1-1.16 3.56L33.23 50.2a4 4 0 0 1-6.46 0L15.73 35.1a6 6 0 0 1-1.15-3.54v-.03a6 6 0 0 1 .9-3.16Z"
      clip-rule="evenodd"
    />
    <path
      fill="#643CDD"
      d="M30.84 10.11a1 1 0 0 0-.84-.46V24.5l12.6 5.53a2 2 0 0 0-.28-1.4L30.84 10.11Z"
    />
    <path
      fill="#BDADEB"
      d="M30 9.65a1 1 0 0 0-.85.46L17.66 28.64a2 2 0 0 0-.26 1.39L30 24.5V9.65Z"
    />
    <path
      fill="#643CDD"
      d="M30 50.54a1 1 0 0 0 .8-.4l11.24-15.38c.3-.44-.2-1-.66-.73l-9.89 5.68a3 3 0 0 1-1.5.4v10.43Z"
    />
    <path
      fill="#BDADEB"
      d="m17.97 34.76 11.22 15.37c.2.28.5.41.8.41V40.11a3 3 0 0 1-1.49-.4l-9.88-5.68c-.47-.27-.97.3-.65.73Z"
    />
    <path
      fill="#401AB3"
      d="M42.6 30.03 30 24.5v13.14a3 3 0 0 0 1.5-.4l10.14-5.83a2 2 0 0 0 .95-1.38Z"
    />
    <path
      fill="#7C5AE2"
      d="M30 37.64V24.46l-12.6 5.57a2 2 0 0 0 .97 1.39l10.13 5.82a3 3 0 0 0 1.5.4Z"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,P5=W`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="3" />
  <path
    fill="#1FAD7E"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 29.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 19.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#86F999"
    stroke="#fff"
    stroke-width="2"
    d="m46.69 21.06-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-6.32-3.51-.18-.1c-2.33-1.3-3.72-2.06-5.22-2.33a9 9 0 0 0-3.08 0c-1.5.27-2.9 1.04-5.22 2.33l-.17.1-6.33 3.51-.05.03c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45Z"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,I5=W`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#C653C6" rx="3" />
  <path
    fill="#fff"
    d="M20.03 15.22C20 15.6 20 16.07 20 17v2.8c0 1.14 0 1.7-.2 2.12-.15.31-.3.5-.58.71-.37.28-1.06.42-2.43.7-.59.12-1.11.29-1.6.51a9 9 0 0 0-4.35 4.36C10 30 10 32.34 10 37c0 4.66 0 7 .84 8.8a9 9 0 0 0 4.36 4.36C17 51 19.34 51 24 51h12c4.66 0 7 0 8.8-.84a9 9 0 0 0 4.36-4.36C50 44 50 41.66 50 37c0-4.66 0-7-.84-8.8a9 9 0 0 0-4.36-4.36c-.48-.22-1-.39-1.6-.5-1.36-.29-2.05-.43-2.42-.7-.27-.22-.43-.4-.58-.72-.2-.42-.2-.98-.2-2.11V17c0-.93 0-1.4-.03-1.78a9 9 0 0 0-8.19-8.19C31.4 7 30.93 7 30 7s-1.4 0-1.78.03a9 9 0 0 0-8.19 8.19Z"
  />
  <path
    fill="#E87DE8"
    d="M22 17c0-.93 0-1.4.04-1.78a7 7 0 0 1 6.18-6.18C28.6 9 29.07 9 30 9s1.4 0 1.78.04a7 7 0 0 1 6.18 6.18c.04.39.04.85.04 1.78v4.5a1.5 1.5 0 0 1-3 0V17c0-.93 0-1.4-.08-1.78a4 4 0 0 0-3.14-3.14C31.39 12 30.93 12 30 12s-1.4 0-1.78.08a4 4 0 0 0-3.14 3.14c-.08.39-.08.85-.08 1.78v4.5a1.5 1.5 0 0 1-3 0V17Z"
  />
  <path
    fill="#E87DE8"
    fill-rule="evenodd"
    d="M12 36.62c0-4.32 0-6.48.92-8.09a7 7 0 0 1 2.61-2.61C17.14 25 19.3 25 23.62 25h6.86c.46 0 .7 0 .9.02 2.73.22 4.37 2.43 4.62 4.98.27-2.7 2.11-5 5.02-5A6.98 6.98 0 0 1 48 31.98v5.4c0 4.32 0 6.48-.92 8.09a7 7 0 0 1-2.61 2.61c-1.61.92-3.77.92-8.09.92h-5.86c-.46 0-.7 0-.9-.02-2.73-.22-4.37-2.43-4.62-4.98-.26 2.58-1.94 4.82-4.71 4.99l-.7.01c-.55 0-.82 0-1.05-.02a7 7 0 0 1-6.52-6.52c-.02-.23-.02-.5-.02-1.05v-4.79Zm21.24-.27a4 4 0 1 0-6.48 0 31.28 31.28 0 0 1 1.57 2.23c.17.4.17.81.17 1.24V42.5a1.5 1.5 0 0 0 3 0V39.82c0-.43 0-.85.17-1.24.09-.2.58-.87 1.57-2.23Z"
    clip-rule="evenodd"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,T5=W`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#EB8B47"
      d="M0 24.9c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02 0 15.65 0 24.9 0h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.02 60 15.65 60 24.9v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6C48.98 60 44.35 60 35.1 60H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 48.98 0 44.35 0 35.1V24.9Z"
    />
    <path
      stroke="#062B2B"
      stroke-opacity=".1"
      d="M.5 24.9c0-4.64 0-8.08.24-10.8.25-2.7.73-4.65 1.66-6.28A14.5 14.5 0 0 1 7.82 2.4C9.46 1.47 11.39 1 14.1.74A133 133 0 0 1 24.9.5h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.66a14.5 14.5 0 0 1 5.42 5.42c.93 1.63 1.41 3.57 1.66 6.28.24 2.72.24 6.16.24 10.8v10.2c0 4.63 0 8.08-.24 10.8-.25 2.7-.73 4.64-1.66 6.28a14.5 14.5 0 0 1-5.42 5.41c-1.63.94-3.57 1.42-6.28 1.67-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.67a14.5 14.5 0 0 1-5.42-5.4C1.47 50.53 1 48.6.74 45.88A133 133 0 0 1 .5 35.1V24.9Z"
    />
    <path
      fill="#FF974C"
      stroke="#fff"
      stroke-width="2"
      d="M39.2 29.2a13 13 0 1 0-18.4 0l1.3 1.28a12.82 12.82 0 0 1 2.1 2.39 6 6 0 0 1 .6 1.47c.2.76.2 1.56.2 3.17v11.24c0 1.08 0 1.61.13 2.12a4 4 0 0 0 .41.98c.26.45.64.83 1.4 1.6l.3.29c.65.65.98.98 1.36 1.09.26.07.54.07.8 0 .38-.11.7-.44 1.36-1.1l3.48-3.47c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.47-.48c-.65-.65-.98-.98-1.09-1.36a1.5 1.5 0 0 1 0-.8c.1-.38.44-.7 1.1-1.36l.47-.48c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.48-.5c-.65-.64-.98-.97-1.08-1.35a1.5 1.5 0 0 1 0-.79c.1-.38.42-.7 1.06-1.36l5.46-5.55Z"
    />
    <circle cx="30" cy="17" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg> `,B5=W`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#00ACE6" rx="30" />
    <circle cx="64" cy="39" r="50" fill="#1AC6FF" stroke="#fff" stroke-width="2" />
    <circle cx="78" cy="30" r="50" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="72" cy="15" r="35" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-17" r="45" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-5" r="50" stroke="#fff" stroke-width="2" />
    <circle cx="30" cy="45" r="4" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="39.5" cy="27.5" r="4" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="16" cy="24" r="4" fill="#19C6FF" stroke="#fff" stroke-width="2" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg>`,O5=W`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="3" />
    <path
      fill="#E87DE8"
      stroke="#fff"
      stroke-width="2"
      d="M52.1 47.34c0-4.24-1.44-9.55-5.9-12.4a2.86 2.86 0 0 0-1.6-3.89v-.82c0-1.19-.52-2.26-1.35-3a4.74 4.74 0 0 0-2.4-6.26v-5.5a11.31 11.31 0 1 0-22.63 0v2.15a3.34 3.34 0 0 0-1.18 5.05 4.74 4.74 0 0 0-.68 6.44A5.22 5.22 0 0 0 14 35.92c-3.06 4.13-6.1 8.3-6.1 15.64 0 2.67.37 4.86.74 6.39a20.3 20.3 0 0 0 .73 2.39l.02.04v.01l.92-.39-.92.4.26.6h38.26l.3-.49-.87-.51.86.5.02-.01.03-.07a16.32 16.32 0 0 0 .57-1.05c.36-.72.85-1.74 1.33-2.96a25.51 25.51 0 0 0 1.94-9.07Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M26.5 29.5c-3-.5-5.5-3-5.5-7v-7c0-.47 0-.7.03-.9a3 3 0 0 1 2.58-2.57c.2-.03.42-.03.89-.03 2 0 2.5-2.5 2.5-2.5s0 2.5 2.5 2.5c1.4 0 2.1 0 2.65.23a3 3 0 0 1 1.62 1.62c.23.55.23 1.25.23 2.65v6c0 4-3 7-6.5 7 1.35.23 4 0 6.5-2v9.53C34 38.5 31.5 40 28 40s-6-1.5-6-2.97L24 34l2.5 1.5v-6ZM26 47h4.5c2.5 0 3 4 3 5.5h-3l-1-1.5H26v-4Zm-6.25 5.5H24V57h-8c0-1 1-4.5 3.75-4.5Z"
      clip-rule="evenodd"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="3" /></clipPath>
  </defs>
</svg> `,k5=W`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#794CFF" rx="3" />
  <path
    fill="#987DE8"
    stroke="#fff"
    stroke-width="2"
    d="M33 22.5v-1H16v5H8.5V36H13v-5h3v7.5h17V31h1v7.5h17v-17H34v5h-1v-4Z"
  />
  <path fill="#fff" d="M37.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M42.5 25h5v10h-5z" />
  <path fill="#fff" d="M19.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M24.5 25h5v10h-5z" />
  <path fill="#fff" d="M12 30.5h4V37h-4v-6.5Z" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,R5=W`<svg
  viewBox="0 0 60 60"
  fill="none"
>
  <g clip-path="url(#1)">
    <rect width="60" height="60" rx="30" fill="#00ACE6" />
    <path
      d="M59 73C59 89.0163 46.0163 102 30 102C13.9837 102 1 89.0163 1 73C1 56.9837 12 44 30 44C48 44 59 56.9837 59 73Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M18.6904 19.9015C19.6264 15.3286 23.3466 11.8445 27.9708 11.2096C29.3231 11.024 30.6751 11.0238 32.0289 11.2096C36.6532 11.8445 40.3733 15.3286 41.3094 19.9015C41.4868 20.7681 41.6309 21.6509 41.7492 22.5271C41.8811 23.5041 41.8811 24.4944 41.7492 25.4715C41.6309 26.3476 41.4868 27.2304 41.3094 28.097C40.3733 32.6699 36.6532 36.154 32.0289 36.7889C30.6772 36.9744 29.3216 36.9743 27.9708 36.7889C23.3466 36.154 19.6264 32.6699 18.6904 28.097C18.513 27.2304 18.3689 26.3476 18.2506 25.4715C18.1186 24.4944 18.1186 23.5041 18.2506 22.5271C18.3689 21.6509 18.513 20.7681 18.6904 19.9015Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="24.5" cy="23.5" r="1.5" fill="white" />
    <circle cx="35.5" cy="23.5" r="1.5" fill="white" />
    <path
      d="M31 20L28 28H32"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>
  <rect x="0.5" y="0.5" width="59" height="59" rx="29.5" stroke="white" stroke-opacity="0.1" />
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" rx="30" fill="white" />
    </clipPath>
  </defs>
</svg> `,N5=W`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#1)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#794CFF"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M35.1403 31.5016C35.1193 30.9637 35.388 30.4558 35.8446 30.1707C36.1207 29.9982 36.4761 29.8473 36.7921 29.7685C37.3143 29.6382 37.8664 29.7977 38.2386 30.1864C38.8507 30.8257 39.3004 31.6836 39.8033 32.408C40.2796 33.0942 41.4695 33.2512 41.9687 32.5047C42.4839 31.7341 42.9405 30.8229 43.572 30.1399C43.9375 29.7447 44.4866 29.5756 45.0111 29.6967C45.3283 29.7701 45.6863 29.9147 45.9655 30.0823C46.4269 30.3595 46.7045 30.8626 46.6928 31.4008C46.6731 32.3083 46.3764 33.2571 46.2158 34.1473C46.061 35.0048 46.9045 35.8337 47.7592 35.664C48.6464 35.4878 49.5899 35.1747 50.497 35.1391C51.0348 35.1181 51.5427 35.3868 51.8279 35.8433C52.0004 36.1195 52.1513 36.4749 52.2301 36.7908C52.3604 37.3131 52.2009 37.8651 51.8121 38.2374C51.1729 38.8495 50.3151 39.2991 49.5908 39.8019C48.9046 40.2782 48.7473 41.4683 49.4939 41.9675C50.2644 42.4827 51.1757 42.9393 51.8587 43.5708C52.2539 43.9362 52.423 44.4854 52.3018 45.0099C52.2285 45.3271 52.0839 45.6851 51.9162 45.9642C51.6391 46.4257 51.1359 46.7032 50.5978 46.6916C49.6903 46.6719 48.7417 46.3753 47.8516 46.2146C46.9939 46.0598 46.1648 46.9035 46.3346 47.7583C46.5108 48.6454 46.8239 49.5888 46.8594 50.4958C46.8805 51.0336 46.6117 51.5415 46.1552 51.8267C45.879 51.9992 45.5236 52.15 45.2077 52.2289C44.6854 52.3592 44.1334 52.1997 43.7611 51.8109C43.1491 51.1718 42.6996 50.314 42.1968 49.5897C41.7203 48.9034 40.5301 48.7463 40.0309 49.493C39.5157 50.2634 39.0592 51.1746 38.4278 51.8574C38.0623 52.2527 37.5132 52.4218 36.9887 52.3006C36.6715 52.2273 36.3135 52.0826 36.0343 51.915C35.5729 51.6379 35.2953 51.1347 35.307 50.5966C35.3267 49.6891 35.6233 48.7405 35.7839 47.8505C35.9388 46.9928 35.0951 46.1636 34.2402 46.3334C33.3531 46.5096 32.4098 46.8227 31.5028 46.8582C30.9649 46.8793 30.457 46.6105 30.1719 46.154C29.9994 45.8778 29.8485 45.5224 29.7697 45.2065C29.6394 44.6842 29.7989 44.1322 30.1877 43.7599C30.8269 43.1479 31.6847 42.6982 32.4091 42.1954C33.0954 41.7189 33.2522 40.5289 32.5056 40.0297C31.7351 39.5145 30.824 39.058 30.1411 38.4265C29.7459 38.0611 29.5768 37.5119 29.698 36.9875C29.7713 36.6702 29.9159 36.3122 30.0836 36.0331C30.3607 35.5717 30.8638 35.2941 31.402 35.3058C32.3095 35.3255 33.2583 35.6221 34.1485 35.7828C35.006 35.9376 35.8349 35.094 35.6652 34.2393C35.489 33.3521 35.1759 32.4087 35.1403 31.5016Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M20.7706 8.22357C20.9036 7.51411 21.5231 7 22.2449 7H23.7551C24.4769 7 25.0964 7.51411 25.2294 8.22357C25.5051 9.69403 25.4829 11.6321 27.1202 12.2606C27.3092 12.3331 27.4958 12.4105 27.6798 12.4926C29.2818 13.2072 30.6374 11.8199 31.8721 10.9752C32.4678 10.5676 33.2694 10.6421 33.7798 11.1525L34.8477 12.2204C35.3581 12.7308 35.4326 13.5323 35.025 14.128C34.1802 15.3627 32.7931 16.7183 33.5077 18.3202C33.5898 18.5043 33.6672 18.6909 33.7398 18.88C34.3683 20.5171 36.3061 20.4949 37.7764 20.7706C38.4859 20.9036 39 21.5231 39 22.2449V23.7551C39 24.4769 38.4859 25.0964 37.7764 25.2294C36.3061 25.5051 34.3685 25.483 33.7401 27.1201C33.6675 27.3093 33.59 27.4961 33.5079 27.6803C32.7934 29.282 34.1803 30.6374 35.025 31.8719C35.4326 32.4677 35.3581 33.2692 34.8477 33.7796L33.7798 34.8475C33.2694 35.3579 32.4678 35.4324 31.8721 35.0248C30.6376 34.1801 29.2823 32.7934 27.6806 33.508C27.4962 33.5903 27.3093 33.6678 27.12 33.7405C25.483 34.3688 25.5051 36.3062 25.2294 37.7764C25.0964 38.4859 24.4769 39 23.7551 39H22.2449C21.5231 39 20.9036 38.4859 20.7706 37.7764C20.4949 36.3062 20.517 34.3688 18.88 33.7405C18.6908 33.6678 18.5039 33.5903 18.3196 33.5081C16.7179 32.7936 15.3625 34.1804 14.1279 35.0251C13.5322 35.4327 12.7307 35.3582 12.2203 34.8478L11.1524 33.7799C10.642 33.2695 10.5675 32.4679 10.9751 31.8722C11.8198 30.6376 13.2067 29.2822 12.4922 27.6804C12.41 27.4962 12.3325 27.3093 12.2599 27.1201C11.6315 25.483 9.69392 25.5051 8.22357 25.2294C7.51411 25.0964 7 24.4769 7 23.7551V22.2449C7 21.5231 7.51411 20.9036 8.22357 20.7706C9.69394 20.4949 11.6317 20.5171 12.2602 18.88C12.3328 18.6909 12.4103 18.5042 12.4924 18.3201C13.207 16.7181 11.8198 15.3625 10.975 14.1278C10.5674 13.5321 10.6419 12.7305 11.1523 12.2201L12.2202 11.1522C12.7306 10.6418 13.5322 10.5673 14.1279 10.9749C15.3626 11.8197 16.7184 13.2071 18.3204 12.4925C18.5044 12.4105 18.6909 12.3331 18.8799 12.2606C20.5171 11.6321 20.4949 9.69403 20.7706 8.22357Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="23" cy="23" r="6" fill="#794CFF" stroke="white" stroke-width="2" />
    <circle cx="41" cy="41" r="4" fill="#794CFF" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,M5=H`
  :host {
    display: block;
    width: 55px;
    height: 55px;
  }
`;var Wh=globalThis&&globalThis.__decorate||function(t,e,r,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,r,i):s(e,r))||i);return o>3&&i&&Object.defineProperty(e,r,i),i};const $5={browser:x5,dao:E5,defi:_5,defiAlt:S5,eth:D5,layers:P5,lock:I5,login:T5,network:B5,nft:O5,noun:k5,profile:R5,system:N5};let _s=class extends F{constructor(){super(...arguments),this.name="browser"}render(){return k`${$5[this.name]}`}};_s.styles=[te,M5];Wh([R()],_s.prototype,"name",void 0);_s=Wh([U("wui-visual")],_s);const Te={getSpacingStyles(t,e){if(Array.isArray(t))return t[e]?`var(--wui-spacing-${t[e]})`:void 0;if(typeof t=="string")return`var(--wui-spacing-${t})`},getFormattedDate(t){return new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(t)},getHostName(t){return new URL(t).hostname},getTruncateString(t,e,r){return t.length<=e?t:r==="end"?`${t.substring(0,e)}...`:r==="start"?`...${t.substring(t.length-e)}`:`${t.substring(0,Math.floor(e/2))}...${t.substring(t.length-Math.floor(e/2))}`},generateAvatarColors(t){const r=t.toLowerCase().replace(/^0x/iu,"").substring(0,6),n=this.hexToRgb(r),o=[];for(let i=0;i<5;i+=1){const s=this.tintColor(n,.15*i);o.push(`rgb(${s[0]}, ${s[1]}, ${s[2]})`)}return`
    --local-color-1: ${o[0]};
    --local-color-2: ${o[1]};
    --local-color-3: ${o[2]};
    --local-color-4: ${o[3]};
    --local-color-5: ${o[4]};
   `},hexToRgb(t){const e=parseInt(t,16),r=e>>16&255,n=e>>8&255,o=e&255;return[r,n,o]},tintColor(t,e){const[r,n,o]=t,i=Math.round(r+(255-r)*e),s=Math.round(n+(255-n)*e),a=Math.round(o+(255-o)*e);return[i,s,a]},isNumber(t){return{number:/^[0-9]+$/u}.number.test(t)},getColorTheme(t){return t||(typeof window<"u"&&window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":"dark")}},U5=H`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var yt=globalThis&&globalThis.__decorate||function(t,e,r,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,r,i):s(e,r))||i);return o>3&&i&&Object.defineProperty(e,r,i),i};let lt=class extends F{render(){return this.style.cssText=`
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&Te.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&Te.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&Te.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&Te.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&Te.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&Te.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&Te.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&Te.getSpacingStyles(this.margin,3)};
    `,k`<slot></slot>`}};lt.styles=[te,U5];yt([R()],lt.prototype,"flexDirection",void 0);yt([R()],lt.prototype,"flexWrap",void 0);yt([R()],lt.prototype,"flexBasis",void 0);yt([R()],lt.prototype,"flexGrow",void 0);yt([R()],lt.prototype,"flexShrink",void 0);yt([R()],lt.prototype,"alignItems",void 0);yt([R()],lt.prototype,"justifyContent",void 0);yt([R()],lt.prototype,"columnGap",void 0);yt([R()],lt.prototype,"rowGap",void 0);yt([R()],lt.prototype,"gap",void 0);yt([R()],lt.prototype,"padding",void 0);yt([R()],lt.prototype,"margin",void 0);lt=yt([U("wui-flex")],lt);const F5=H`
  :host {
    display: block;
    width: 64px;
    height: 64px;
    outline: 8px solid var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host([data-variant='generated']) {
      --mixed-local-color-1: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-1)
      );
      --mixed-local-color-2: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-2)
      );
      --mixed-local-color-3: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-3)
      );
      --mixed-local-color-4: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-4)
      );
      --mixed-local-color-5: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-5)
      );
    }
  }

  :host([data-variant='generated']) {
    outline: 8px solid var(--wui-avatar-border);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    outline: 8px solid var(--wui-avatar-border);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`;var wa=globalThis&&globalThis.__decorate||function(t,e,r,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,r,i):s(e,r))||i);return o>3&&i&&Object.defineProperty(e,r,i),i};let zn=class extends F{constructor(){super(...arguments),this.imageSrc=void 0,this.alt=void 0,this.address=void 0}render(){return k`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc)return this.dataset.variant="image",k`<wui-image src=${this.imageSrc} alt=${this.alt??"avatar"}></wui-image>`;if(this.address){this.dataset.variant="generated";const e=Te.generateAvatarColors(this.address);return this.style.cssText=e,null}return this.dataset.variant="default",null}};zn.styles=[te,F5];wa([R()],zn.prototype,"imageSrc",void 0);wa([R()],zn.prototype,"alt",void 0);wa([R()],zn.prototype,"address",void 0);zn=wa([U("wui-avatar")],zn);const L5=H`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-gray-glass-020);
    border-radius: var(--local-border-radius);
    border: var(--local-border);
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`;var Fr=globalThis&&globalThis.__decorate||function(t,e,r,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,r,i):s(e,r))||i);return o>3&&i&&Object.defineProperty(e,r,i),i};let Yt=class extends F{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){let e="xxs";switch(this.size){case"lg":e="lg";break;case"md":e="md";break;case"sm":e="xs";break;default:e="xxs"}const r=this.size==="lg",n=r?"12%":"16%",o=r?"xxs":"3xl",i=this.background==="opaque",s=this.backgroundColor==="accent-100"&&i||this.backgroundColor==="success-100"&&i||this.backgroundColor==="error-100"&&i||this.backgroundColor==="inverse-100"&&i;return this.style.cssText=`
       --local-bg-value: ${s?`var(--wui-icon-box-bg-${this.backgroundColor})`:`var(--wui-color-${this.backgroundColor})`};
       --local-bg-mix: ${s?"100%":n};
       --local-border-radius: var(--wui-border-radius-${o});
       --local-size: var(--wui-icon-box-size-${this.size});
       --local-border: ${this.borderColor==="wui-color-bg-125"?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}
   `,k` <wui-icon color=${this.iconColor} size=${e} name=${this.icon}></wui-icon> `}};Yt.styles=[te,He,L5];Fr([R()],Yt.prototype,"size",void 0);Fr([R()],Yt.prototype,"backgroundColor",void 0);Fr([R()],Yt.prototype,"iconColor",void 0);Fr([R()],Yt.prototype,"background",void 0);Fr([R({type:Boolean})],Yt.prototype,"border",void 0);Fr([R()],Yt.prototype,"borderColor",void 0);Fr([R()],Yt.prototype,"icon",void 0);Yt=Fr([U("wui-icon-box")],Yt);const j5=H`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    background: var(--wui-gray-glass-002);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-005);
  }

  button:disabled {
    background: var(--wui-gray-glass-015);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-flex > wui-avatar {
    filter: grayscale(1);
  }

  button:has(wui-image) {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-3xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
  }

  wui-text {
    color: var(--wui-color-fg-100);
  }

  wui-flex > wui-text {
    color: var(--wui-color-fg-200);
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    outline: 2px solid var(--wui-gray-glass-005);
  }

  wui-flex {
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    padding: 4px var(--wui-spacing-m) 4px var(--wui-spacing-xxs);
  }

  wui-flex.local-no-balance {
    border-radius: 0px;
    border: none;
    background: transparent;
  }

  wui-avatar {
    width: 20px;
    height: 20px;
    outline: 2px solid var(--wui-gray-glass-010);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }

    button:active:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }
  }
`;var gn=globalThis&&globalThis.__decorate||function(t,e,r,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,r,i):s(e,r))||i);return o>3&&i&&Object.defineProperty(e,r,i),i};let ur=class extends F{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.balance=void 0,this.disabled=!1,this.isProfileName=!1,this.address=""}render(){return k`
      <button ?disabled=${this.disabled}>
        ${this.balanceTemplate()}
        <wui-flex
          gap="xxs"
          alignItems="center"
          class=${de(this.balance?void 0:"local-no-balance")}
        >
          <wui-avatar
            .imageSrc=${this.avatarSrc}
            alt=${this.address}
            address=${this.address}
          ></wui-avatar>
          <wui-text variant="paragraph-600" color="inherit">
            ${Te.getTruncateString(this.address,8,this.isProfileName?"end":"middle")}
          </wui-text>
        </wui-flex>
      </button>
    `}balanceTemplate(){if(this.balance){const e=this.networkSrc?k`<wui-image src=${this.networkSrc}></wui-image>`:k`
            <wui-icon-box
              size="sm"
              iconColor="fg-200"
              backgroundColor="fg-300"
              icon="networkPlaceholder"
            ></wui-icon-box>
          `;return k`
        ${e}
        <wui-text variant="paragraph-600" color="inherit"> ${this.balance} </wui-text>
      `}return null}};ur.styles=[te,He,j5];gn([R()],ur.prototype,"networkSrc",void 0);gn([R()],ur.prototype,"avatarSrc",void 0);gn([R()],ur.prototype,"balance",void 0);gn([R({type:Boolean})],ur.prototype,"disabled",void 0);gn([R({type:Boolean})],ur.prototype,"isProfileName",void 0);gn([R()],ur.prototype,"address",void 0);ur=gn([U("wui-account-button")],ur);const W5=H`
  :host {
    position: relative;
    border-radius: inherit;
    overflow: hidden;
    background-color: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }
`;var Oo=globalThis&&globalThis.__decorate||function(t,e,r,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,r,i):s(e,r))||i);return o>3&&i&&Object.defineProperty(e,r,i),i};let cn=class extends F{constructor(){super(...arguments),this.size="md",this.name=""}render(){let e="xxs";return this.size==="lg"?e="m":this.size==="md"?e="xs":e="xxs",this.style.cssText=`
       --local-border-radius: var(--wui-border-radius-${e});
       --local-size: var(--wui-wallet-image-size-${this.size});
   `,this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),k` ${this.templateVisual()}`}templateVisual(){return this.imageSrc?k`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?k`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`:k`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};cn.styles=[te,W5];Oo([R()],cn.prototype,"size",void 0);Oo([R()],cn.prototype,"name",void 0);Oo([R()],cn.prototype,"imageSrc",void 0);Oo([R()],cn.prototype,"walletIcon",void 0);cn=Oo([U("wui-wallet-image")],cn);const z5=H`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }
`;var zh=globalThis&&globalThis.__decorate||function(t,e,r,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,r,i):s(e,r))||i);return o>3&&i&&Object.defineProperty(e,r,i),i};const Xa=4;let Ss=class extends F{constructor(){super(...arguments),this.walletImages=[]}render(){const e=this.walletImages.length<Xa;return k`${this.walletImages.slice(0,Xa).map(({src:r,walletName:n})=>k`
          <wui-wallet-image
            size="inherit"
            imageSrc=${r}
            name=${de(n)}
          ></wui-wallet-image>
        `)}
    ${e?[...Array(Xa-this.walletImages.length)].map(()=>k` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`):null}`}};Ss.styles=[te,z5];zh([R({type:Array})],Ss.prototype,"walletImages",void 0);Ss=zh([U("wui-all-wallets-image")],Ss);const H5=H`
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-010);
  }

  button[data-size='sm'] {
    padding: 6.75px 10px 7.25px;
  }

  ::slotted(*) {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transition: all 200ms ease-in-out;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`;var ko=globalThis&&globalThis.__decorate||function(t,e,r,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,r,i):s(e,r))||i);return o>3&&i&&Object.defineProperty(e,r,i),i};let ln=class extends F{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.loading=!1,this.variant="fill"}render(){this.style.cssText=`
    --local-width: ${this.variant==="fullWidth"?"100%":"auto"};
    --local-opacity-100: ${this.loading?0:1};
    --local-opacity-000: ${this.loading?1:0};`;const e=this.size==="md"?"paragraph-600":"small-600";return k`
      <button
        data-variant=${this.variant}
        data-size=${this.size}
        ?disabled=${this.disabled||this.loading}
        ontouchstart
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft"></slot>
        <wui-text variant=${e} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}loadingTemplate(){return this.loading?k`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:k``}};ln.styles=[te,He,H5];ko([R()],ln.prototype,"size",void 0);ko([R({type:Boolean})],ln.prototype,"disabled",void 0);ko([R({type:Boolean})],ln.prototype,"loading",void 0);ko([R()],ln.prototype,"variant",void 0);ln=ko([U("wui-button")],ln);const Hh=W`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`,G5=H`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-gray-glass-010);
    stroke-width: 1px;
  }
`;var Gh=globalThis&&globalThis.__decorate||function(t,e,r,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,r,i):s(e,r))||i);return o>3&&i&&Object.defineProperty(e,r,i),i};let Ds=class extends F{constructor(){super(...arguments),this.type="wallet"}render(){return k`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){return this.type==="network"?k` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${Hh}`:k`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};Ds.styles=[te,He,G5];Gh([R()],Ds.prototype,"type",void 0);Ds=Gh([U("wui-card-select-loader")],Ds);const V5=W`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`,q5=H`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    fill: var(--wui-gray-glass-002);
  }

  svg > path {
    stroke: var(--local-stroke);
    transition: stroke var(--wui-ease-out-power-1) var(--wui-duration-lg);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: var(--wui-gray-glass-002);
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`;var Ro=globalThis&&globalThis.__decorate||function(t,e,r,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,r,i):s(e,r))||i);return o>3&&i&&Object.defineProperty(e,r,i),i};let un=class extends F{constructor(){super(...arguments),this.size="md",this.name="uknown",this.selected=!1}render(){const e=this.size==="lg";return this.style.cssText=`
      --local-stroke: ${this.selected?"var(--wui-color-accent-100)":"var(--wui-gray-glass-010)"};
      --local-path: ${e?"var(--wui-path-network-lg)":"var(--wui-path-network)"};
      --local-width: ${e?"86px":"48px"};
      --local-height: ${e?"96px":"54px"};
      --local-icon-size: ${e?"42px":"24px"};
    `,k`${this.templateVisual()} ${e?V5:Hh}`}templateVisual(){return this.imageSrc?k`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:k`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};un.styles=[te,q5];Ro([R()],un.prototype,"size",void 0);Ro([R()],un.prototype,"name",void 0);Ro([R()],un.prototype,"imageSrc",void 0);Ro([R({type:Boolean})],un.prototype,"selected",void 0);un=Ro([U("wui-network-image")],un);const Q5=H`
  button {
    flex-direction: column;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-0);
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
  }

  button > wui-text {
    color: var(--wui-color-fg-100);
    max-width: 64px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-accent-glass-010);
  }
`;var si=globalThis&&globalThis.__decorate||function(t,e,r,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,r,i):s(e,r))||i);return o>3&&i&&Object.defineProperty(e,r,i),i};let Or=class extends F{constructor(){super(...arguments),this.name="unknown",this.type="wallet",this.imageSrc=void 0,this.disabled=!1,this.selected=!1}render(){return k`
      <button data-selected=${de(this.selected)} ?disabled=${this.disabled} ontouchstart>
        ${this.imageTemplate()}
        <wui-text variant="tiny-500" color=${this.selected?"accent-100":"inherit"}>
          ${this.name}
        </wui-text>
      </button>
    `}imageTemplate(){return this.type==="network"?k`
        <wui-network-image
          .selected=${this.selected}
          imageSrc=${de(this.imageSrc)}
          name=${this.name}
        >
        </wui-network-image>
      `:k`
      <wui-wallet-image size="md" imageSrc=${de(this.imageSrc)} name=${this.name}>
      </wui-wallet-image>
    `}};Or.styles=[te,He,Q5];si([R()],Or.prototype,"name",void 0);si([R()],Or.prototype,"type",void 0);si([R()],Or.prototype,"imageSrc",void 0);si([R({type:Boolean})],Or.prototype,"disabled",void 0);si([R({type:Boolean})],Or.prototype,"selected",void 0);Or=si([U("wui-card-select")],Or);const K5=H`
  a {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  a.disabled > wui-icon,
  a.disabled > wui-image {
    filter: grayscale(1);
  }

  a[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  a[data-variant='shade'] {
    background-color: transparent;
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  a[data-variant='transparent'] {
    column-gap: var(--wui-spacing-xxs);
    background-color: transparent;
    padding: 7px var(--wui-spacing-s) 7px 10px;
    color: var(--wui-color-fg-150);
  }

  a[data-variant='transparent']:has(wui-text:first-child) {
    padding: 7px var(--wui-spacing-s);
  }

  a[data-variant='fill'],
  a[data-variant='shade'] {
    column-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  a[data-variant='fill']:has(wui-text:first-child),
  a[data-variant='shade']:has(wui-text:first-child) {
    padding: 8.5px var(--wui-spacing-m) 9.5px var(--wui-spacing-m);
  }

  a[data-variant='fill'] > wui-image,
  a[data-variant='shade'] > wui-image {
    width: 24px;
    height: 24px;
  }

  a[data-variant='fill'] > wui-image {
    border: 1px solid var(--wui-color-accent-090);
  }

  a[data-variant='shade'] > wui-image {
    border: 1px solid var(--wui-gray-glass-010);
  }

  a[data-variant='fill'] > wui-icon,
  a[data-variant='shade'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-image {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  a[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  a[data-variant='shade']:focus-visible {
    background-color: var(--wui-gray-glass-015);
  }

  a[data-variant='transparent']:focus-visible {
    background-color: var(--wui-gray-glass-005);
  }

  a.disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
    pointer-events: none;
  }

  @media (hover: hover) and (pointer: fine) {
    a[data-variant='fill']:hover {
      background-color: var(--wui-color-accent-090);
    }

    a[data-variant='shade']:hover {
      background-color: var(--wui-gray-glass-015);
    }

    a[data-variant='transparent']:hover {
      background-color: var(--wui-gray-glass-005);
    }
  }

  a[data-variant='fill']:active {
    background-color: var(--wui-color-accent-080);
  }

  a[data-variant='shade']:active {
    background-color: var(--wui-gray-glass-020);
  }

  a[data-variant='transparent']:active {
    background-color: var(--wui-gray-glass-010);
  }
`;var ai=globalThis&&globalThis.__decorate||function(t,e,r,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,r,i):s(e,r))||i);return o>3&&i&&Object.defineProperty(e,r,i),i};let kr=class extends F{constructor(){super(...arguments),this.variant="fill",this.imageSrc=void 0,this.disabled=!1,this.icon="externalLink",this.href=""}render(){const e=this.variant==="transparent"?"small-600":"paragraph-600";return k`
      <a
        rel="noreferrer"
        target="_blank"
        href=${this.href}
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
      >
        ${this.imageTemplate()}
        <wui-text variant=${e} color="inherit">
          ${Te.getHostName(this.href)}
        </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </a>
    `}imageTemplate(){return this.imageSrc?k`<wui-image src=${this.imageSrc}></wui-image>`:null}};kr.styles=[te,He,K5];ai([R()],kr.prototype,"variant",void 0);ai([R()],kr.prototype,"imageSrc",void 0);ai([R({type:Boolean})],kr.prototype,"disabled",void 0);ai([R()],kr.prototype,"icon",void 0);ai([R()],kr.prototype,"href",void 0);kr=ai([U("wui-chip")],kr);const Z5=H`
  :host {
    position: relative;
    display: block;
  }

  button {
    background: var(--wui-color-accent-100);
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    gap: var(--wui-spacing-xs);
  }

  button.loading {
    background: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    border: 1px solid var(--wui-gray-glass-010);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-080);
    }
  }

  button:focus-visible {
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-color-accent-090);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-size='sm'] {
    padding: 6.75px 10px 7.25px;
  }

  ::slotted(*) {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
    color: var(--wui-color-inverse-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'] + wui-text {
    padding-left: var(--wui-spacing-3xs);
  }

  wui-loading-spinner {
    width: 14px;
    height: 14px;
  }

  wui-loading-spinner::slotted(svg) {
    width: 10px !important;
    height: 10px !important;
  }

  button[data-size='sm'] > wui-loading-spinner {
    width: 12px;
    height: 12px;
  }
`;var cu=globalThis&&globalThis.__decorate||function(t,e,r,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,r,i):s(e,r))||i);return o>3&&i&&Object.defineProperty(e,r,i),i};let lo=class extends F{constructor(){super(...arguments),this.size="md",this.loading=!1}render(){const e=this.size==="md"?"paragraph-600":"small-600";return k`
      <button data-size=${this.size} ?disabled=${this.loading} ontouchstart>
        ${this.loadingTemplate()}
        <wui-text variant=${e} color=${this.loading?"accent-100":"inherit"}>
          <slot></slot>
        </wui-text>
      </button>
    `}loadingTemplate(){return this.loading?k`<wui-loading-spinner size=${this.size} color="accent-100"></wui-loading-spinner>`:null}};lo.styles=[te,He,Z5];cu([R()],lo.prototype,"size",void 0);cu([R({type:Boolean})],lo.prototype,"loading",void 0);lo=cu([U("wui-connect-button")],lo);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Y5=t=>t.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Bi=(t,e)=>{var r,n;const o=t._$AN;if(o===void 0)return!1;for(const i of o)(n=(r=i)._$AO)===null||n===void 0||n.call(r,e,!1),Bi(i,e);return!0},Ps=t=>{let e,r;do{if((e=t._$AM)===void 0)break;r=e._$AN,r.delete(t),t=e}while((r==null?void 0:r.size)===0)},Vh=t=>{for(let e;e=t._$AM;t=e){let r=e._$AN;if(r===void 0)e._$AN=r=new Set;else if(r.has(t))break;r.add(t),e4(e)}};function J5(t){this._$AN!==void 0?(Ps(this),this._$AM=t,Vh(this)):this._$AM=t}function X5(t,e=!1,r=0){const n=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(e)if(Array.isArray(n))for(let i=r;i<n.length;i++)Bi(n[i],!1),Ps(n[i]);else n!=null&&(Bi(n,!1),Ps(n));else Bi(this,t)}const e4=t=>{var e,r,n,o;t.type==Fh.CHILD&&((e=(n=t)._$AP)!==null&&e!==void 0||(n._$AP=X5),(r=(o=t)._$AQ)!==null&&r!==void 0||(o._$AQ=J5))};class t4 extends jh{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,r,n){super._$AT(e,r,n),Vh(this),this.isConnected=e._$AU}_$AO(e,r=!0){var n,o;e!==this.isConnected&&(this.isConnected=e,e?(n=this.reconnected)===null||n===void 0||n.call(this):(o=this.disconnected)===null||o===void 0||o.call(this)),r&&(Bi(this,e),Ps(this))}setValue(e){if(Y5(this._$Ct))this._$Ct._$AI(e,this);else{const r=[...this._$Ct._$AH];r[this._$Ci]=e,this._$Ct._$AI(r,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qh=()=>new r4;class r4{}const ec=new WeakMap,Qh=Lh(class extends t4{render(t){return Ue}update(t,[e]){var r;const n=e!==this.G;return n&&this.G!==void 0&&this.ot(void 0),(n||this.rt!==this.lt)&&(this.G=e,this.dt=(r=t.options)===null||r===void 0?void 0:r.host,this.ot(this.lt=t.element)),Ue}ot(t){var e;if(typeof this.G=="function"){const r=(e=this.dt)!==null&&e!==void 0?e:globalThis;let n=ec.get(r);n===void 0&&(n=new WeakMap,ec.set(r,n)),n.get(this.G)!==void 0&&this.G.call(this.dt,void 0),n.set(this.G,t),t!==void 0&&this.G.call(this.dt,t)}else this.G.value=t}get rt(){var t,e,r;return typeof this.G=="function"?(e=ec.get((t=this.dt)!==null&&t!==void 0?t:globalThis))===null||e===void 0?void 0:e.get(this.G):(r=this.G)===null||r===void 0?void 0:r.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}}),n4=H`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  input {
    width: 100%;
    border-radius: var(--wui-border-radius-xxs);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    font-size: var(--wui-font-size-paragraph);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-paragraph);
    color: var(--wui-color-fg-100);
    transition: all var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    caret-color: var(--wui-color-accent-100);
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
    background: var(--wui-gray-glass-015);
  }

  input:disabled::placeholder,
  input:disabled + wui-icon {
    color: var(--wui-color-fg-300);
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }

  input:focus:enabled {
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
    background-color: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px var(--wui-spacing-s);
  }

  wui-icon + .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px 36px;
  }

  wui-icon[data-input='sm'] {
    left: var(--wui-spacing-s);
  }

  .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-m);
  }

  wui-icon + .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) 42px;
  }

  wui-icon[data-input='md'] {
    left: var(--wui-spacing-m);
  }

  input:placeholder-shown ~ ::slotted(wui-input-element),
  input:placeholder-shown ~ ::slotted(wui-icon) {
    opacity: 0;
    pointer-events: none;
  }

  ::slotted(wui-input-element),
  ::slotted(wui-icon) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: all var(--wui-ease-in-power-2) var(--wui-duration-md);
  }

  ::slotted(wui-input-element) {
    right: var(--wui-spacing-m);
  }

  ::slotted(wui-icon) {
    right: 0px;
  }
`;var wn=globalThis&&globalThis.__decorate||function(t,e,r,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,r,i):s(e,r))||i);return o>3&&i&&Object.defineProperty(e,r,i),i};let fr=class extends F{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.placeholder="",this.type="text",this.inputElementRef=qh()}render(){const e=`wui-size-${this.size}`;return k` ${this.templateIcon()}
      <input
        ${Qh(this.inputElementRef)}
        class=${e}
        type=${this.type}
        enterkeyhint=${de(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
      />
      <slot></slot>`}templateIcon(){return this.icon?k`<wui-icon
        data-input=${this.size}
        size="md"
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}dispatchInputChangeEvent(){var e;this.dispatchEvent(new CustomEvent("inputChange",{detail:(e=this.inputElementRef.value)==null?void 0:e.value,bubbles:!0,composed:!0}))}};fr.styles=[te,He,n4];wn([R()],fr.prototype,"size",void 0);wn([R()],fr.prototype,"icon",void 0);wn([R({type:Boolean})],fr.prototype,"disabled",void 0);wn([R()],fr.prototype,"placeholder",void 0);wn([R()],fr.prototype,"type",void 0);wn([R()],fr.prototype,"keyHint",void 0);fr=wn([U("wui-input-text")],fr);const i4=H`
  :host {
    position: relative;
    display: inline-block;
  }

  wui-icon {
    padding: var(--wui-spacing-xl);
    cursor: pointer;
    transition: all var(--wui-duration-lg) var(--wui-ease-in-power-1);
  }

  wui-icon:hover {
    color: var(--wui-color-fg-200) !important;
  }

  wui-icon::part(chevronRight) {
    width: 12px;
    height: 12px;
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`;var Kh=globalThis&&globalThis.__decorate||function(t,e,r,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,r,i):s(e,r))||i);return o>3&&i&&Object.defineProperty(e,r,i),i};let Is=class extends F{render(){return k`
      <wui-input-text placeholder="Email" icon="mail" size="md">
        <wui-icon size="inherit" color="fg-100" name="chevronRight"></wui-icon>
      </wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?k`<wui-text variant="tiny-500" color="error-100">${this.errorMessage}</wui-text>`:null}};Is.styles=[te,i4];Kh([R()],Is.prototype,"errorMessage",void 0);Is=Kh([U("wui-email-input")],Is);const o4=H`
  button {
    border-radius: var(--wui-border-radius-xxs);
    color: var(--wui-color-fg-100);
    padding: var(--wui-spacing-2xs);
  }

  @media (max-width: 700px) {
    button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`;var No=globalThis&&globalThis.__decorate||function(t,e,r,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,r,i):s(e,r))||i);return o>3&&i&&Object.defineProperty(e,r,i),i};let fn=class extends F{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){return k`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};fn.styles=[te,He,ou,o4];No([R()],fn.prototype,"size",void 0);No([R({type:Boolean})],fn.prototype,"disabled",void 0);No([R()],fn.prototype,"icon",void 0);No([R()],fn.prototype,"iconColor",void 0);fn=No([U("wui-icon-link")],fn);const s4=H`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  button:active:enabled {
    background-color: var(--wui-color-fg-225);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }
  }
`;var Zh=globalThis&&globalThis.__decorate||function(t,e,r,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,r,i):s(e,r))||i);return o>3&&i&&Object.defineProperty(e,r,i),i};let Ts=class extends F{constructor(){super(...arguments),this.icon="copy"}render(){return k`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};Ts.styles=[te,He,s4];Zh([R()],Ts.prototype,"icon",void 0);Ts=Zh([U("wui-input-element")],Ts);const a4=H`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-gray-glass-005);
    font-family: var(--wui-font-family);
    font-size: var(--wui-font-size-large);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-large);
    text-align: center;
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    transition: all var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
    background: var(--wui-gray-glass-015);
  }

  input:focus:enabled {
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
    background-color: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-gray-glass-010);
  }
`;var Yh=globalThis&&globalThis.__decorate||function(t,e,r,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,r,i):s(e,r))||i);return o>3&&i&&Object.defineProperty(e,r,i),i};let Bs=class extends F{constructor(){super(...arguments),this.disabled=!1}render(){return k`<input
      type="number"
      maxlength="1"
      inputmode="numeric"
      autofocus
      ?disabled=${this.disabled}
    /> `}};Bs.styles=[te,He,a4];Yh([R({type:Boolean})],Bs.prototype,"disabled",void 0);Bs=Yh([U("wui-input-numeric")],Bs);const c4=H`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-gray-glass-015);
  }
`;var Jh=globalThis&&globalThis.__decorate||function(t,e,r,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,r,i):s(e,r))||i);return o>3&&i&&Object.defineProperty(e,r,i),i};let Os=class extends F{constructor(){super(...arguments),this.disabled=!1}render(){return k`
      <button ?disabled=${this.disabled} ontouchstart>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};Os.styles=[te,He,c4];Jh([R({type:Boolean})],Os.prototype,"disabled",void 0);Os=Jh([U("wui-link")],Os);const l4=H`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 11px 18px 11px var(--wui-spacing-s);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  button > wui-flex {
    flex: 1;
  }

  button > wui-image {
    width: 32px;
    height: 32px;
    outline: 2px solid var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  button > wui-icon-box[data-variant='blue'] {
    outline: 2px solid var(--wui-accent-glass-005);
  }

  button > wui-icon-box[data-variant='overlay'] {
    outline: 2px solid var(--wui-gray-glass-005);
  }

  button > wui-icon {
    width: 14px;
    height: 14px;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button[data-loading='true'] > wui-icon {
    transition: opacity 200ms ease-in-out;
    opacity: 0;
  }

  wui-loading-spinner {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`;var gr=globalThis&&globalThis.__decorate||function(t,e,r,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,r,i):s(e,r))||i);return o>3&&i&&Object.defineProperty(e,r,i),i};let Lt=class extends F{constructor(){super(...arguments),this.variant="icon",this.disabled=!1,this.imageSrc=void 0,this.alt=void 0,this.chevron=!1,this.loading=!1}render(){return k`
      <button
        ?disabled=${this.loading?!0:!!this.disabled}
        data-loading=${this.loading}
        ontouchstart
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `}visualTemplate(){if(this.variant==="image"&&this.imageSrc)return k`<wui-image src=${this.imageSrc} alt=${this.alt??"list item"}></wui-image>`;if(this.variant==="icon"&&this.icon&&this.iconVariant){const e=this.iconVariant==="blue"?"accent-100":"fg-200";return k`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          background="transparent"
          iconColor=${e}
          backgroundColor=${e}
          size="md"
        ></wui-icon-box>
      `}return null}loadingTemplate(){return this.loading?k`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:k``}chevronTemplate(){return this.chevron?k`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`:null}};Lt.styles=[te,He,l4];gr([R()],Lt.prototype,"icon",void 0);gr([R()],Lt.prototype,"variant",void 0);gr([R()],Lt.prototype,"iconVariant",void 0);gr([R({type:Boolean})],Lt.prototype,"disabled",void 0);gr([R()],Lt.prototype,"imageSrc",void 0);gr([R()],Lt.prototype,"alt",void 0);gr([R({type:Boolean})],Lt.prototype,"chevron",void 0);gr([R({type:Boolean})],Lt.prototype,"loading",void 0);Lt=gr([U("wui-list-item")],Lt);const u4=H`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    border: 1px solid var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  :host([data-type='minted']),
  :host([data-type='nftSent']),
  :host([data-type='bought']) {
    border-radius: var(--wui-border-radius-xs);
  }

  wui-image {
    display: block;
    border-radius: inherit;
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }

  wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }
`;var lu=globalThis&&globalThis.__decorate||function(t,e,r,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,r,i):s(e,r))||i);return o>3&&i&&Object.defineProperty(e,r,i),i};const f4=["withdrawed","buy","cryptoSent","nftSent"],X0=["deposited","received","bought","minted"],ef=["minted","bought","nftSent"],d4=["deposited","withdrawed","cryptoSent","buy","received"];let uo=class extends F{constructor(){super(...arguments),this.type="buy"}render(){let e="accent-100",r="arrowTop";return f4.includes(this.type)?(e="accent-100",r="arrowTop"):X0.includes(this.type)&&ef.includes(this.type)||X0.includes(this.type)&&d4.includes(this.type)?(e="success-100",r="arrowBottom"):(e="accent-100",r="swapVertical"),this.dataset.type=this.type,k`
      ${this.templateVisual()}
      <wui-icon-box
        size="xs"
        iconColor=${e}
        backgroundColor=${e}
        background="opaque"
        .icon=${r}
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
    `}templateVisual(){return this.imageSrc?k`<wui-image src=${this.imageSrc} alt=${this.type}></wui-image>`:ef.includes(this.type)?k`<wui-icon size="inherit" color="fg-200" name="nftPlaceholder"></wui-icon>`:k`<wui-icon size="inherit" color="fg-200" name="coinPlaceholder"></wui-icon>`}};uo.styles=[te,u4];lu([R()],uo.prototype,"type",void 0);lu([R()],uo.prototype,"imageSrc",void 0);uo=lu([U("wui-transaction-visual")],uo);const h4=H`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  button > wui-flex > wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  button > wui-flex > wui-text:nth-child(2) {
    text-transform: uppercase;
  }

  button:disabled {
    color: var(--wui-color-fg-300);
  }
`;var ci=globalThis&&globalThis.__decorate||function(t,e,r,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,r,i):s(e,r))||i);return o>3&&i&&Object.defineProperty(e,r,i),i};let Rr=class extends F{constructor(){super(...arguments),this.type="bought",this.disabled=!1,this.imageSrc="",this.date=new Date,this.transactionDetail=""}render(){const r=this.type==="nftSent"||this.type==="cryptoSent"?"Sent":this.type,n=Te.getFormattedDate(this.date);return k`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-transaction-visual
          type=${this.type}
          imageSrc=${this.imageSrc}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="3xs">
          <wui-text variant="paragraph-600" color="fg-100">${r}</wui-text>
          <wui-text variant="small-500" color="fg-200">${this.transactionDetail}</wui-text>
        </wui-flex>
        <wui-text variant="micro-700" color="fg-300">${n}</wui-text>
      </button>
    `}};Rr.styles=[te,He,h4];ci([R()],Rr.prototype,"type",void 0);ci([R({type:Boolean})],Rr.prototype,"disabled",void 0);ci([R()],Rr.prototype,"imageSrc",void 0);ci([R({attribute:!1})],Rr.prototype,"date",void 0);ci([R()],Rr.prototype,"transactionDetail",void 0);Rr=ci([U("wui-list-transaction")],Rr);const p4=H`
  :host {
    display: block;
    padding: 3.5px 5px !important;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }
`;var Xh=globalThis&&globalThis.__decorate||function(t,e,r,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,r,i):s(e,r))||i);return o>3&&i&&Object.defineProperty(e,r,i),i};let ks=class extends F{constructor(){super(...arguments),this.variant="main"}render(){return this.dataset.variant=this.variant,k`
      <wui-text data-variant=${this.variant} variant="micro-700" color="inherit">
        <slot></slot>
      </wui-text>
    `}};ks.styles=[te,p4];Xh([R()],ks.prototype,"variant",void 0);ks=Xh([U("wui-tag")],ks);const g4=H`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`;var tr=globalThis&&globalThis.__decorate||function(t,e,r,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,r,i):s(e,r))||i);return o>3&&i&&Object.defineProperty(e,r,i),i};let Et=class extends F{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.disabled=!1,this.showAllWallets=!1}render(){return k`
      <button ?disabled=${this.disabled} ontouchstart>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?k` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?k` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?k`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
      ></wui-wallet-image>`:!this.showAllWallets&&!this.imageSrc?k`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`:null}templateStatus(){return this.tagLabel&&this.tagVariant?k`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:this.icon?k`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`:null}};Et.styles=[te,He,g4];tr([R({type:Array})],Et.prototype,"walletImages",void 0);tr([R()],Et.prototype,"imageSrc",void 0);tr([R()],Et.prototype,"name",void 0);tr([R()],Et.prototype,"tagLabel",void 0);tr([R()],Et.prototype,"tagVariant",void 0);tr([R()],Et.prototype,"icon",void 0);tr([R()],Et.prototype,"walletIcon",void 0);tr([R({type:Boolean})],Et.prototype,"disabled",void 0);tr([R({type:Boolean})],Et.prototype,"showAllWallets",void 0);Et=tr([U("wui-list-wallet")],Et);const w4=H`
  :host {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-010);
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`;var e1=globalThis&&globalThis.__decorate||function(t,e,r,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,r,i):s(e,r))||i);return o>3&&i&&Object.defineProperty(e,r,i),i};let Rs=class extends F{constructor(){super(...arguments),this.logo="google"}render(){return k`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};Rs.styles=[te,w4];e1([R()],Rs.prototype,"logo",void 0);Rs=e1([U("wui-logo")],Rs);const b4=H`
  :host {
    display: block;
  }

  button {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var uu=globalThis&&globalThis.__decorate||function(t,e,r,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,r,i):s(e,r))||i);return o>3&&i&&Object.defineProperty(e,r,i),i};let fo=class extends F{constructor(){super(...arguments),this.logo="google",this.disabled=!1}render(){return k`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-logo logo=${this.logo}></wui-logo>
      </button>
    `}};fo.styles=[te,He,b4];uu([R()],fo.prototype,"logo",void 0);uu([R({type:Boolean})],fo.prototype,"disabled",void 0);fo=uu([U("wui-logo-select")],fo);const m4=H`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-s) var(--wui-spacing-2xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-gray-glass-005);
    color: var(--wui-color-fg-100);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-010);
    }

    button:active:enabled {
      background-color: var(--wui-gray-glass-015);
    }
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    outline: 2px solid var(--wui-gray-glass-005);
  }
`;var fu=globalThis&&globalThis.__decorate||function(t,e,r,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,r,i):s(e,r))||i);return o>3&&i&&Object.defineProperty(e,r,i),i};let ho=class extends F{constructor(){super(...arguments),this.imageSrc=void 0,this.disabled=!1}render(){return k`
      <button ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant="paragraph-600" color="inherit">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){return this.imageSrc?k`<wui-image src=${this.imageSrc}></wui-image>`:k`
      <wui-icon-box
        size="sm"
        iconColor="inverse-100"
        backgroundColor="fg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};ho.styles=[te,He,m4];fu([R()],ho.prototype,"imageSrc",void 0);fu([R({type:Boolean})],ho.prototype,"disabled",void 0);ho=fu([U("wui-network-button")],ho);const y4=H`
  :host {
    position: relative;
    display: block;
  }
`;var t1=globalThis&&globalThis.__decorate||function(t,e,r,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,r,i):s(e,r))||i);return o>3&&i&&Object.defineProperty(e,r,i),i};let Ns=class extends F{constructor(){super(...arguments),this.length=6,this.numerics=[],this.handleKeyDown=(e,r)=>{const n=e.target,o=this.getInputElement(n),i=["ArrowLeft","ArrowRight","Shift","Delete"];if(!o)return;i.includes(e.key)&&e.preventDefault();const s=o.selectionStart;switch(e.key){case"ArrowLeft":s&&o.setSelectionRange(s+1,s+1),this.focusInputField("prev",r);break;case"ArrowRight":this.focusInputField("next",r);break;case"Shift":this.focusInputField("next",r);break;case"Delete":o.value===""?this.focusInputField("prev",r):o.value="";break;case"Backspace":o.value===""?this.focusInputField("prev",r):o.value="";break}},this.focusInputField=(e,r)=>{if(e==="next"){const n=r+1,o=this.numerics[n<this.length?n:r],i=o?this.getInputElement(o):void 0;i&&i.focus()}if(e==="prev"){const n=r-1,o=this.numerics[n>-1?n:r],i=o?this.getInputElement(o):void 0;i&&i.focus()}}}firstUpdated(){var r;const e=(r=this.shadowRoot)==null?void 0:r.querySelectorAll("wui-input-numeric");e&&(this.numerics=Array.from(e))}render(){return k`
      <wui-flex gap="xxs">
        ${[...Array(this.length)].map((e,r)=>k`
            <wui-input-numeric
              @input=${n=>this.handleInput(n,r)}
              @keydown=${n=>this.handleKeyDown(n,r)}
            >
            </wui-input-numeric>
          `)}
      </wui-flex>
    `}handleInput(e,r){const n=e.target,o=this.getInputElement(n);if(o){const i=o.value;e.inputType==="insertFromPaste"?this.handlePaste(o,i,r):Te.isNumber(i)&&e.data?(o.value=e.data,this.focusInputField("next",r)):o.value=""}}handlePaste(e,r,n){const o=r[0];if(o&&Te.isNumber(o)){e.value=o;const s=r.substring(1);if(n+1<this.length&&s.length){const a=this.numerics[n+1],c=a?this.getInputElement(a):void 0;c&&this.handlePaste(c,s,n+1)}else this.focusInputField("next",n)}else e.value=""}getInputElement(e){var r;return(r=e.shadowRoot)!=null&&r.querySelector("input")?e.shadowRoot.querySelector("input"):null}};Ns.styles=[te,y4];t1([R({type:Number})],Ns.prototype,"length",void 0);Ns=t1([U("wui-otp")],Ns);var Mo={},v4=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},r1={},vt={};let du;const A4=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];vt.getSymbolSize=function(e){if(!e)throw new Error('"version" cannot be null or undefined');if(e<1||e>40)throw new Error('"version" should be in range from 1 to 40');return e*4+17};vt.getSymbolTotalCodewords=function(e){return A4[e]};vt.getBCHDigit=function(t){let e=0;for(;t!==0;)e++,t>>>=1;return e};vt.setToSJISFunction=function(e){if(typeof e!="function")throw new Error('"toSJISFunc" is not a valid function.');du=e};vt.isKanjiModeEnabled=function(){return typeof du<"u"};vt.toSJIS=function(e){return du(e)};var ba={};(function(t){t.L={bit:1},t.M={bit:0},t.Q={bit:3},t.H={bit:2};function e(r){if(typeof r!="string")throw new Error("Param is not a string");switch(r.toLowerCase()){case"l":case"low":return t.L;case"m":case"medium":return t.M;case"q":case"quartile":return t.Q;case"h":case"high":return t.H;default:throw new Error("Unknown EC Level: "+r)}}t.isValid=function(n){return n&&typeof n.bit<"u"&&n.bit>=0&&n.bit<4},t.from=function(n,o){if(t.isValid(n))return n;try{return e(n)}catch{return o}}})(ba);function n1(){this.buffer=[],this.length=0}n1.prototype={get:function(t){const e=Math.floor(t/8);return(this.buffer[e]>>>7-t%8&1)===1},put:function(t,e){for(let r=0;r<e;r++)this.putBit((t>>>e-r-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(t){const e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var C4=n1;function $o(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new Uint8Array(t*t),this.reservedBit=new Uint8Array(t*t)}$o.prototype.set=function(t,e,r,n){const o=t*this.size+e;this.data[o]=r,n&&(this.reservedBit[o]=!0)};$o.prototype.get=function(t,e){return this.data[t*this.size+e]};$o.prototype.xor=function(t,e,r){this.data[t*this.size+e]^=r};$o.prototype.isReserved=function(t,e){return this.reservedBit[t*this.size+e]};var x4=$o,i1={};(function(t){const e=vt.getSymbolSize;t.getRowColCoords=function(n){if(n===1)return[];const o=Math.floor(n/7)+2,i=e(n),s=i===145?26:Math.ceil((i-13)/(2*o-2))*2,a=[i-7];for(let c=1;c<o-1;c++)a[c]=a[c-1]-s;return a.push(6),a.reverse()},t.getPositions=function(n){const o=[],i=t.getRowColCoords(n),s=i.length;for(let a=0;a<s;a++)for(let c=0;c<s;c++)a===0&&c===0||a===0&&c===s-1||a===s-1&&c===0||o.push([i[a],i[c]]);return o}})(i1);var o1={};const E4=vt.getSymbolSize,tf=7;o1.getPositions=function(e){const r=E4(e);return[[0,0],[r-tf,0],[0,r-tf]]};var s1={};(function(t){t.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const e={N1:3,N2:3,N3:40,N4:10};t.isValid=function(o){return o!=null&&o!==""&&!isNaN(o)&&o>=0&&o<=7},t.from=function(o){return t.isValid(o)?parseInt(o,10):void 0},t.getPenaltyN1=function(o){const i=o.size;let s=0,a=0,c=0,l=null,d=null;for(let p=0;p<i;p++){a=c=0,l=d=null;for(let g=0;g<i;g++){let w=o.get(p,g);w===l?a++:(a>=5&&(s+=e.N1+(a-5)),l=w,a=1),w=o.get(g,p),w===d?c++:(c>=5&&(s+=e.N1+(c-5)),d=w,c=1)}a>=5&&(s+=e.N1+(a-5)),c>=5&&(s+=e.N1+(c-5))}return s},t.getPenaltyN2=function(o){const i=o.size;let s=0;for(let a=0;a<i-1;a++)for(let c=0;c<i-1;c++){const l=o.get(a,c)+o.get(a,c+1)+o.get(a+1,c)+o.get(a+1,c+1);(l===4||l===0)&&s++}return s*e.N2},t.getPenaltyN3=function(o){const i=o.size;let s=0,a=0,c=0;for(let l=0;l<i;l++){a=c=0;for(let d=0;d<i;d++)a=a<<1&2047|o.get(l,d),d>=10&&(a===1488||a===93)&&s++,c=c<<1&2047|o.get(d,l),d>=10&&(c===1488||c===93)&&s++}return s*e.N3},t.getPenaltyN4=function(o){let i=0;const s=o.data.length;for(let c=0;c<s;c++)i+=o.data[c];return Math.abs(Math.ceil(i*100/s/5)-10)*e.N4};function r(n,o,i){switch(n){case t.Patterns.PATTERN000:return(o+i)%2===0;case t.Patterns.PATTERN001:return o%2===0;case t.Patterns.PATTERN010:return i%3===0;case t.Patterns.PATTERN011:return(o+i)%3===0;case t.Patterns.PATTERN100:return(Math.floor(o/2)+Math.floor(i/3))%2===0;case t.Patterns.PATTERN101:return o*i%2+o*i%3===0;case t.Patterns.PATTERN110:return(o*i%2+o*i%3)%2===0;case t.Patterns.PATTERN111:return(o*i%3+(o+i)%2)%2===0;default:throw new Error("bad maskPattern:"+n)}}t.applyMask=function(o,i){const s=i.size;for(let a=0;a<s;a++)for(let c=0;c<s;c++)i.isReserved(c,a)||i.xor(c,a,r(o,c,a))},t.getBestMask=function(o,i){const s=Object.keys(t.Patterns).length;let a=0,c=1/0;for(let l=0;l<s;l++){i(l),t.applyMask(l,o);const d=t.getPenaltyN1(o)+t.getPenaltyN2(o)+t.getPenaltyN3(o)+t.getPenaltyN4(o);t.applyMask(l,o),d<c&&(c=d,a=l)}return a}})(s1);var ma={};const Cr=ba,Yo=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],Jo=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];ma.getBlocksCount=function(e,r){switch(r){case Cr.L:return Yo[(e-1)*4+0];case Cr.M:return Yo[(e-1)*4+1];case Cr.Q:return Yo[(e-1)*4+2];case Cr.H:return Yo[(e-1)*4+3];default:return}};ma.getTotalCodewordsCount=function(e,r){switch(r){case Cr.L:return Jo[(e-1)*4+0];case Cr.M:return Jo[(e-1)*4+1];case Cr.Q:return Jo[(e-1)*4+2];case Cr.H:return Jo[(e-1)*4+3];default:return}};var a1={},ya={};const Oi=new Uint8Array(512),Ms=new Uint8Array(256);(function(){let e=1;for(let r=0;r<255;r++)Oi[r]=e,Ms[e]=r,e<<=1,e&256&&(e^=285);for(let r=255;r<512;r++)Oi[r]=Oi[r-255]})();ya.log=function(e){if(e<1)throw new Error("log("+e+")");return Ms[e]};ya.exp=function(e){return Oi[e]};ya.mul=function(e,r){return e===0||r===0?0:Oi[Ms[e]+Ms[r]]};(function(t){const e=ya;t.mul=function(n,o){const i=new Uint8Array(n.length+o.length-1);for(let s=0;s<n.length;s++)for(let a=0;a<o.length;a++)i[s+a]^=e.mul(n[s],o[a]);return i},t.mod=function(n,o){let i=new Uint8Array(n);for(;i.length-o.length>=0;){const s=i[0];for(let c=0;c<o.length;c++)i[c]^=e.mul(o[c],s);let a=0;for(;a<i.length&&i[a]===0;)a++;i=i.slice(a)}return i},t.generateECPolynomial=function(n){let o=new Uint8Array([1]);for(let i=0;i<n;i++)o=t.mul(o,new Uint8Array([1,e.exp(i)]));return o}})(a1);const c1=a1;function hu(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}hu.prototype.initialize=function(e){this.degree=e,this.genPoly=c1.generateECPolynomial(this.degree)};hu.prototype.encode=function(e){if(!this.genPoly)throw new Error("Encoder not initialized");const r=new Uint8Array(e.length+this.degree);r.set(e);const n=c1.mod(r,this.genPoly),o=this.degree-n.length;if(o>0){const i=new Uint8Array(this.degree);return i.set(n,o),i}return n};var _4=hu,l1={},Lr={},pu={};pu.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40};var rr={};const u1="[0-9]+",S4="[A-Z $%*+\\-./:]+";let po="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";po=po.replace(/u/g,"\\u");const D4="(?:(?![A-Z0-9 $%*+\\-./:]|"+po+`)(?:.|[\r
]))+`;rr.KANJI=new RegExp(po,"g");rr.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");rr.BYTE=new RegExp(D4,"g");rr.NUMERIC=new RegExp(u1,"g");rr.ALPHANUMERIC=new RegExp(S4,"g");const P4=new RegExp("^"+po+"$"),I4=new RegExp("^"+u1+"$"),T4=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");rr.testKanji=function(e){return P4.test(e)};rr.testNumeric=function(e){return I4.test(e)};rr.testAlphanumeric=function(e){return T4.test(e)};(function(t){const e=pu,r=rr;t.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},t.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},t.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},t.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},t.MIXED={bit:-1},t.getCharCountIndicator=function(i,s){if(!i.ccBits)throw new Error("Invalid mode: "+i);if(!e.isValid(s))throw new Error("Invalid version: "+s);return s>=1&&s<10?i.ccBits[0]:s<27?i.ccBits[1]:i.ccBits[2]},t.getBestModeForData=function(i){return r.testNumeric(i)?t.NUMERIC:r.testAlphanumeric(i)?t.ALPHANUMERIC:r.testKanji(i)?t.KANJI:t.BYTE},t.toString=function(i){if(i&&i.id)return i.id;throw new Error("Invalid mode")},t.isValid=function(i){return i&&i.bit&&i.ccBits};function n(o){if(typeof o!="string")throw new Error("Param is not a string");switch(o.toLowerCase()){case"numeric":return t.NUMERIC;case"alphanumeric":return t.ALPHANUMERIC;case"kanji":return t.KANJI;case"byte":return t.BYTE;default:throw new Error("Unknown mode: "+o)}}t.from=function(i,s){if(t.isValid(i))return i;try{return n(i)}catch{return s}}})(Lr);(function(t){const e=vt,r=ma,n=ba,o=Lr,i=pu,s=7973,a=e.getBCHDigit(s);function c(g,w,b){for(let A=1;A<=40;A++)if(w<=t.getCapacity(A,b,g))return A}function l(g,w){return o.getCharCountIndicator(g,w)+4}function d(g,w){let b=0;return g.forEach(function(A){const y=l(A.mode,w);b+=y+A.getBitsLength()}),b}function p(g,w){for(let b=1;b<=40;b++)if(d(g,b)<=t.getCapacity(b,w,o.MIXED))return b}t.from=function(w,b){return i.isValid(w)?parseInt(w,10):b},t.getCapacity=function(w,b,A){if(!i.isValid(w))throw new Error("Invalid QR Code version");typeof A>"u"&&(A=o.BYTE);const y=e.getSymbolTotalCodewords(w),S=r.getTotalCodewordsCount(w,b),m=(y-S)*8;if(A===o.MIXED)return m;const _=m-l(A,w);switch(A){case o.NUMERIC:return Math.floor(_/10*3);case o.ALPHANUMERIC:return Math.floor(_/11*2);case o.KANJI:return Math.floor(_/13);case o.BYTE:default:return Math.floor(_/8)}},t.getBestVersionForData=function(w,b){let A;const y=n.from(b,n.M);if(Array.isArray(w)){if(w.length>1)return p(w,y);if(w.length===0)return 1;A=w[0]}else A=w;return c(A.mode,A.getLength(),y)},t.getEncodedBits=function(w){if(!i.isValid(w)||w<7)throw new Error("Invalid QR Code version");let b=w<<12;for(;e.getBCHDigit(b)-a>=0;)b^=s<<e.getBCHDigit(b)-a;return w<<12|b}})(l1);var f1={};const Gc=vt,d1=1335,B4=21522,rf=Gc.getBCHDigit(d1);f1.getEncodedBits=function(e,r){const n=e.bit<<3|r;let o=n<<10;for(;Gc.getBCHDigit(o)-rf>=0;)o^=d1<<Gc.getBCHDigit(o)-rf;return(n<<10|o)^B4};var h1={};const O4=Lr;function Hn(t){this.mode=O4.NUMERIC,this.data=t.toString()}Hn.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)};Hn.prototype.getLength=function(){return this.data.length};Hn.prototype.getBitsLength=function(){return Hn.getBitsLength(this.data.length)};Hn.prototype.write=function(e){let r,n,o;for(r=0;r+3<=this.data.length;r+=3)n=this.data.substr(r,3),o=parseInt(n,10),e.put(o,10);const i=this.data.length-r;i>0&&(n=this.data.substr(r),o=parseInt(n,10),e.put(o,i*3+1))};var k4=Hn;const R4=Lr,tc=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function Gn(t){this.mode=R4.ALPHANUMERIC,this.data=t}Gn.getBitsLength=function(e){return 11*Math.floor(e/2)+6*(e%2)};Gn.prototype.getLength=function(){return this.data.length};Gn.prototype.getBitsLength=function(){return Gn.getBitsLength(this.data.length)};Gn.prototype.write=function(e){let r;for(r=0;r+2<=this.data.length;r+=2){let n=tc.indexOf(this.data[r])*45;n+=tc.indexOf(this.data[r+1]),e.put(n,11)}this.data.length%2&&e.put(tc.indexOf(this.data[r]),6)};var N4=Gn,M4=function(e){for(var r=[],n=e.length,o=0;o<n;o++){var i=e.charCodeAt(o);if(i>=55296&&i<=56319&&n>o+1){var s=e.charCodeAt(o+1);s>=56320&&s<=57343&&(i=(i-55296)*1024+s-56320+65536,o+=1)}if(i<128){r.push(i);continue}if(i<2048){r.push(i>>6|192),r.push(i&63|128);continue}if(i<55296||i>=57344&&i<65536){r.push(i>>12|224),r.push(i>>6&63|128),r.push(i&63|128);continue}if(i>=65536&&i<=1114111){r.push(i>>18|240),r.push(i>>12&63|128),r.push(i>>6&63|128),r.push(i&63|128);continue}r.push(239,191,189)}return new Uint8Array(r).buffer};const $4=M4,U4=Lr;function Vn(t){this.mode=U4.BYTE,typeof t=="string"&&(t=$4(t)),this.data=new Uint8Array(t)}Vn.getBitsLength=function(e){return e*8};Vn.prototype.getLength=function(){return this.data.length};Vn.prototype.getBitsLength=function(){return Vn.getBitsLength(this.data.length)};Vn.prototype.write=function(t){for(let e=0,r=this.data.length;e<r;e++)t.put(this.data[e],8)};var F4=Vn;const L4=Lr,j4=vt;function qn(t){this.mode=L4.KANJI,this.data=t}qn.getBitsLength=function(e){return e*13};qn.prototype.getLength=function(){return this.data.length};qn.prototype.getBitsLength=function(){return qn.getBitsLength(this.data.length)};qn.prototype.write=function(t){let e;for(e=0;e<this.data.length;e++){let r=j4.toSJIS(this.data[e]);if(r>=33088&&r<=40956)r-=33088;else if(r>=57408&&r<=60351)r-=49472;else throw new Error("Invalid SJIS character: "+this.data[e]+`
Make sure your charset is UTF-8`);r=(r>>>8&255)*192+(r&255),t.put(r,13)}};var W4=qn,p1={exports:{}};(function(t){var e={single_source_shortest_paths:function(r,n,o){var i={},s={};s[n]=0;var a=e.PriorityQueue.make();a.push(n,0);for(var c,l,d,p,g,w,b,A,y;!a.empty();){c=a.pop(),l=c.value,p=c.cost,g=r[l]||{};for(d in g)g.hasOwnProperty(d)&&(w=g[d],b=p+w,A=s[d],y=typeof s[d]>"u",(y||A>b)&&(s[d]=b,a.push(d,b),i[d]=l))}if(typeof o<"u"&&typeof s[o]>"u"){var S=["Could not find a path from ",n," to ",o,"."].join("");throw new Error(S)}return i},extract_shortest_path_from_predecessor_list:function(r,n){for(var o=[],i=n;i;)o.push(i),r[i],i=r[i];return o.reverse(),o},find_path:function(r,n,o){var i=e.single_source_shortest_paths(r,n,o);return e.extract_shortest_path_from_predecessor_list(i,o)},PriorityQueue:{make:function(r){var n=e.PriorityQueue,o={},i;r=r||{};for(i in n)n.hasOwnProperty(i)&&(o[i]=n[i]);return o.queue=[],o.sorter=r.sorter||n.default_sorter,o},default_sorter:function(r,n){return r.cost-n.cost},push:function(r,n){var o={value:r,cost:n};this.queue.push(o),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};t.exports=e})(p1);var z4=p1.exports;(function(t){const e=Lr,r=k4,n=N4,o=F4,i=W4,s=rr,a=vt,c=z4;function l(S){return unescape(encodeURIComponent(S)).length}function d(S,m,_){const x=[];let E;for(;(E=S.exec(_))!==null;)x.push({data:E[0],index:E.index,mode:m,length:E[0].length});return x}function p(S){const m=d(s.NUMERIC,e.NUMERIC,S),_=d(s.ALPHANUMERIC,e.ALPHANUMERIC,S);let x,E;return a.isKanjiModeEnabled()?(x=d(s.BYTE,e.BYTE,S),E=d(s.KANJI,e.KANJI,S)):(x=d(s.BYTE_KANJI,e.BYTE,S),E=[]),m.concat(_,x,E).sort(function(u,C){return u.index-C.index}).map(function(u){return{data:u.data,mode:u.mode,length:u.length}})}function g(S,m){switch(m){case e.NUMERIC:return r.getBitsLength(S);case e.ALPHANUMERIC:return n.getBitsLength(S);case e.KANJI:return i.getBitsLength(S);case e.BYTE:return o.getBitsLength(S)}}function w(S){return S.reduce(function(m,_){const x=m.length-1>=0?m[m.length-1]:null;return x&&x.mode===_.mode?(m[m.length-1].data+=_.data,m):(m.push(_),m)},[])}function b(S){const m=[];for(let _=0;_<S.length;_++){const x=S[_];switch(x.mode){case e.NUMERIC:m.push([x,{data:x.data,mode:e.ALPHANUMERIC,length:x.length},{data:x.data,mode:e.BYTE,length:x.length}]);break;case e.ALPHANUMERIC:m.push([x,{data:x.data,mode:e.BYTE,length:x.length}]);break;case e.KANJI:m.push([x,{data:x.data,mode:e.BYTE,length:l(x.data)}]);break;case e.BYTE:m.push([{data:x.data,mode:e.BYTE,length:l(x.data)}])}}return m}function A(S,m){const _={},x={start:{}};let E=["start"];for(let D=0;D<S.length;D++){const u=S[D],C=[];for(let T=0;T<u.length;T++){const B=u[T],M=""+D+T;C.push(M),_[M]={node:B,lastCount:0},x[M]={};for(let j=0;j<E.length;j++){const G=E[j];_[G]&&_[G].node.mode===B.mode?(x[G][M]=g(_[G].lastCount+B.length,B.mode)-g(_[G].lastCount,B.mode),_[G].lastCount+=B.length):(_[G]&&(_[G].lastCount=B.length),x[G][M]=g(B.length,B.mode)+4+e.getCharCountIndicator(B.mode,m))}}E=C}for(let D=0;D<E.length;D++)x[E[D]].end=0;return{map:x,table:_}}function y(S,m){let _;const x=e.getBestModeForData(S);if(_=e.from(m,x),_!==e.BYTE&&_.bit<x.bit)throw new Error('"'+S+'" cannot be encoded with mode '+e.toString(_)+`.
 Suggested mode is: `+e.toString(x));switch(_===e.KANJI&&!a.isKanjiModeEnabled()&&(_=e.BYTE),_){case e.NUMERIC:return new r(S);case e.ALPHANUMERIC:return new n(S);case e.KANJI:return new i(S);case e.BYTE:return new o(S)}}t.fromArray=function(m){return m.reduce(function(_,x){return typeof x=="string"?_.push(y(x,null)):x.data&&_.push(y(x.data,x.mode)),_},[])},t.fromString=function(m,_){const x=p(m,a.isKanjiModeEnabled()),E=b(x),D=A(E,_),u=c.find_path(D.map,"start","end"),C=[];for(let T=1;T<u.length-1;T++)C.push(D.table[u[T]].node);return t.fromArray(w(C))},t.rawSplit=function(m){return t.fromArray(p(m,a.isKanjiModeEnabled()))}})(h1);const va=vt,rc=ba,H4=C4,G4=x4,V4=i1,q4=o1,Vc=s1,qc=ma,Q4=_4,$s=l1,K4=f1,Z4=Lr,nc=h1;function Y4(t,e){const r=t.size,n=q4.getPositions(e);for(let o=0;o<n.length;o++){const i=n[o][0],s=n[o][1];for(let a=-1;a<=7;a++)if(!(i+a<=-1||r<=i+a))for(let c=-1;c<=7;c++)s+c<=-1||r<=s+c||(a>=0&&a<=6&&(c===0||c===6)||c>=0&&c<=6&&(a===0||a===6)||a>=2&&a<=4&&c>=2&&c<=4?t.set(i+a,s+c,!0,!0):t.set(i+a,s+c,!1,!0))}}function J4(t){const e=t.size;for(let r=8;r<e-8;r++){const n=r%2===0;t.set(r,6,n,!0),t.set(6,r,n,!0)}}function X4(t,e){const r=V4.getPositions(e);for(let n=0;n<r.length;n++){const o=r[n][0],i=r[n][1];for(let s=-2;s<=2;s++)for(let a=-2;a<=2;a++)s===-2||s===2||a===-2||a===2||s===0&&a===0?t.set(o+s,i+a,!0,!0):t.set(o+s,i+a,!1,!0)}}function ey(t,e){const r=t.size,n=$s.getEncodedBits(e);let o,i,s;for(let a=0;a<18;a++)o=Math.floor(a/3),i=a%3+r-8-3,s=(n>>a&1)===1,t.set(o,i,s,!0),t.set(i,o,s,!0)}function ic(t,e,r){const n=t.size,o=K4.getEncodedBits(e,r);let i,s;for(i=0;i<15;i++)s=(o>>i&1)===1,i<6?t.set(i,8,s,!0):i<8?t.set(i+1,8,s,!0):t.set(n-15+i,8,s,!0),i<8?t.set(8,n-i-1,s,!0):i<9?t.set(8,15-i-1+1,s,!0):t.set(8,15-i-1,s,!0);t.set(n-8,8,1,!0)}function ty(t,e){const r=t.size;let n=-1,o=r-1,i=7,s=0;for(let a=r-1;a>0;a-=2)for(a===6&&a--;;){for(let c=0;c<2;c++)if(!t.isReserved(o,a-c)){let l=!1;s<e.length&&(l=(e[s]>>>i&1)===1),t.set(o,a-c,l),i--,i===-1&&(s++,i=7)}if(o+=n,o<0||r<=o){o-=n,n=-n;break}}}function ry(t,e,r){const n=new H4;r.forEach(function(c){n.put(c.mode.bit,4),n.put(c.getLength(),Z4.getCharCountIndicator(c.mode,t)),c.write(n)});const o=va.getSymbolTotalCodewords(t),i=qc.getTotalCodewordsCount(t,e),s=(o-i)*8;for(n.getLengthInBits()+4<=s&&n.put(0,4);n.getLengthInBits()%8!==0;)n.putBit(0);const a=(s-n.getLengthInBits())/8;for(let c=0;c<a;c++)n.put(c%2?17:236,8);return ny(n,t,e)}function ny(t,e,r){const n=va.getSymbolTotalCodewords(e),o=qc.getTotalCodewordsCount(e,r),i=n-o,s=qc.getBlocksCount(e,r),a=n%s,c=s-a,l=Math.floor(n/s),d=Math.floor(i/s),p=d+1,g=l-d,w=new Q4(g);let b=0;const A=new Array(s),y=new Array(s);let S=0;const m=new Uint8Array(t.buffer);for(let u=0;u<s;u++){const C=u<c?d:p;A[u]=m.slice(b,b+C),y[u]=w.encode(A[u]),b+=C,S=Math.max(S,C)}const _=new Uint8Array(n);let x=0,E,D;for(E=0;E<S;E++)for(D=0;D<s;D++)E<A[D].length&&(_[x++]=A[D][E]);for(E=0;E<g;E++)for(D=0;D<s;D++)_[x++]=y[D][E];return _}function iy(t,e,r,n){let o;if(Array.isArray(t))o=nc.fromArray(t);else if(typeof t=="string"){let l=e;if(!l){const d=nc.rawSplit(t);l=$s.getBestVersionForData(d,r)}o=nc.fromString(t,l||40)}else throw new Error("Invalid data");const i=$s.getBestVersionForData(o,r);if(!i)throw new Error("The amount of data is too big to be stored in a QR Code");if(!e)e=i;else if(e<i)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+i+`.
`);const s=ry(e,r,o),a=va.getSymbolSize(e),c=new G4(a);return Y4(c,e),J4(c),X4(c,e),ic(c,r,0),e>=7&&ey(c,e),ty(c,s),isNaN(n)&&(n=Vc.getBestMask(c,ic.bind(null,c,r))),Vc.applyMask(n,c),ic(c,r,n),{modules:c,version:e,errorCorrectionLevel:r,maskPattern:n,segments:o}}r1.create=function(e,r){if(typeof e>"u"||e==="")throw new Error("No input text");let n=rc.M,o,i;return typeof r<"u"&&(n=rc.from(r.errorCorrectionLevel,rc.M),o=$s.from(r.version),i=Vc.from(r.maskPattern),r.toSJISFunc&&va.setToSJISFunction(r.toSJISFunc)),iy(e,o,n,i)};var g1={},gu={};(function(t){function e(r){if(typeof r=="number"&&(r=r.toString()),typeof r!="string")throw new Error("Color should be defined as hex string");let n=r.slice().replace("#","").split("");if(n.length<3||n.length===5||n.length>8)throw new Error("Invalid hex color: "+r);(n.length===3||n.length===4)&&(n=Array.prototype.concat.apply([],n.map(function(i){return[i,i]}))),n.length===6&&n.push("F","F");const o=parseInt(n.join(""),16);return{r:o>>24&255,g:o>>16&255,b:o>>8&255,a:o&255,hex:"#"+n.slice(0,6).join("")}}t.getOptions=function(n){n||(n={}),n.color||(n.color={});const o=typeof n.margin>"u"||n.margin===null||n.margin<0?4:n.margin,i=n.width&&n.width>=21?n.width:void 0,s=n.scale||4;return{width:i,scale:i?4:s,margin:o,color:{dark:e(n.color.dark||"#000000ff"),light:e(n.color.light||"#ffffffff")},type:n.type,rendererOpts:n.rendererOpts||{}}},t.getScale=function(n,o){return o.width&&o.width>=n+o.margin*2?o.width/(n+o.margin*2):o.scale},t.getImageWidth=function(n,o){const i=t.getScale(n,o);return Math.floor((n+o.margin*2)*i)},t.qrToImageData=function(n,o,i){const s=o.modules.size,a=o.modules.data,c=t.getScale(s,i),l=Math.floor((s+i.margin*2)*c),d=i.margin*c,p=[i.color.light,i.color.dark];for(let g=0;g<l;g++)for(let w=0;w<l;w++){let b=(g*l+w)*4,A=i.color.light;if(g>=d&&w>=d&&g<l-d&&w<l-d){const y=Math.floor((g-d)/c),S=Math.floor((w-d)/c);A=p[a[y*s+S]?1:0]}n[b++]=A.r,n[b++]=A.g,n[b++]=A.b,n[b]=A.a}}})(gu);(function(t){const e=gu;function r(o,i,s){o.clearRect(0,0,i.width,i.height),i.style||(i.style={}),i.height=s,i.width=s,i.style.height=s+"px",i.style.width=s+"px"}function n(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}t.render=function(i,s,a){let c=a,l=s;typeof c>"u"&&(!s||!s.getContext)&&(c=s,s=void 0),s||(l=n()),c=e.getOptions(c);const d=e.getImageWidth(i.modules.size,c),p=l.getContext("2d"),g=p.createImageData(d,d);return e.qrToImageData(g.data,i,c),r(p,l,d),p.putImageData(g,0,0),l},t.renderToDataURL=function(i,s,a){let c=a;typeof c>"u"&&(!s||!s.getContext)&&(c=s,s=void 0),c||(c={});const l=t.render(i,s,c),d=c.type||"image/png",p=c.rendererOpts||{};return l.toDataURL(d,p.quality)}})(g1);var w1={};const oy=gu;function nf(t,e){const r=t.a/255,n=e+'="'+t.hex+'"';return r<1?n+" "+e+'-opacity="'+r.toFixed(2).slice(1)+'"':n}function oc(t,e,r){let n=t+e;return typeof r<"u"&&(n+=" "+r),n}function sy(t,e,r){let n="",o=0,i=!1,s=0;for(let a=0;a<t.length;a++){const c=Math.floor(a%e),l=Math.floor(a/e);!c&&!i&&(i=!0),t[a]?(s++,a>0&&c>0&&t[a-1]||(n+=i?oc("M",c+r,.5+l+r):oc("m",o,0),o=0,i=!1),c+1<e&&t[a+1]||(n+=oc("h",s),s=0)):o++}return n}w1.render=function(e,r,n){const o=oy.getOptions(r),i=e.modules.size,s=e.modules.data,a=i+o.margin*2,c=o.color.light.a?"<path "+nf(o.color.light,"fill")+' d="M0 0h'+a+"v"+a+'H0z"/>':"",l="<path "+nf(o.color.dark,"stroke")+' d="'+sy(s,i,o.margin)+'"/>',d='viewBox="0 0 '+a+" "+a+'"',g='<svg xmlns="http://www.w3.org/2000/svg" '+(o.width?'width="'+o.width+'" height="'+o.width+'" ':"")+d+' shape-rendering="crispEdges">'+c+l+`</svg>
`;return typeof n=="function"&&n(null,g),g};const ay=v4,Qc=r1,b1=g1,cy=w1;function wu(t,e,r,n,o){const i=[].slice.call(arguments,1),s=i.length,a=typeof i[s-1]=="function";if(!a&&!ay())throw new Error("Callback required as last argument");if(a){if(s<2)throw new Error("Too few arguments provided");s===2?(o=r,r=e,e=n=void 0):s===3&&(e.getContext&&typeof o>"u"?(o=n,n=void 0):(o=n,n=r,r=e,e=void 0))}else{if(s<1)throw new Error("Too few arguments provided");return s===1?(r=e,e=n=void 0):s===2&&!e.getContext&&(n=r,r=e,e=void 0),new Promise(function(c,l){try{const d=Qc.create(r,n);c(t(d,e,n))}catch(d){l(d)}})}try{const c=Qc.create(r,n);o(null,t(c,e,n))}catch(c){o(c)}}Mo.create=Qc.create;Mo.toCanvas=wu.bind(null,b1.render);Mo.toDataURL=wu.bind(null,b1.renderToDataURL);Mo.toString=wu.bind(null,function(t,e,r){return cy.render(t,r)});const ly=.1,of=2.5,ir=7;function sc(t,e,r){return t===e?!1:(t-e<0?e-t:t-e)<=r+ly}function uy(t,e){const r=Array.prototype.slice.call(Mo.create(t,{errorCorrectionLevel:e}).modules.data,0),n=Math.sqrt(r.length);return r.reduce((o,i,s)=>(s%n===0?o.push([i]):o[o.length-1].push(i))&&o,[])}const fy={generate(t,e,r){const n="#141414",o="transparent",s=[],a=uy(t,"Q"),c=e/a.length,l=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];l.forEach(({x:A,y})=>{const S=(a.length-ir)*c*A,m=(a.length-ir)*c*y,_=.45;for(let x=0;x<l.length;x+=1){const E=c*(ir-x*2);s.push(W`
            <rect
              fill=${x===2?n:o}
              width=${x===0?E-5:E}
              rx= ${x===0?(E-5)*_:E*_}
              ry= ${x===0?(E-5)*_:E*_}
              stroke=${n}
              stroke-width=${x===0?5:0}
              height=${x===0?E-5:E}
              x= ${x===0?m+c*x+5/2:m+c*x}
              y= ${x===0?S+c*x+5/2:S+c*x}
            />
          `)}});const d=Math.floor((r+25)/c),p=a.length/2-d/2,g=a.length/2+d/2-1,w=[];a.forEach((A,y)=>{A.forEach((S,m)=>{if(a[y][m]&&!(y<ir&&m<ir||y>a.length-(ir+1)&&m<ir||y<ir&&m>a.length-(ir+1))&&!(y>p&&y<g&&m>p&&m<g)){const _=y*c+c/2,x=m*c+c/2;w.push([_,x])}})});const b={};return w.forEach(([A,y])=>{var S;b[A]?(S=b[A])==null||S.push(y):b[A]=[y]}),Object.entries(b).map(([A,y])=>{const S=y.filter(m=>y.every(_=>!sc(m,_,c)));return[Number(A),S]}).forEach(([A,y])=>{y.forEach(S=>{s.push(W`<circle cx=${A} cy=${S} fill=${n} r=${c/of} />`)})}),Object.entries(b).filter(([A,y])=>y.length>1).map(([A,y])=>{const S=y.filter(m=>y.some(_=>sc(m,_,c)));return[Number(A),S]}).map(([A,y])=>{y.sort((m,_)=>m<_?-1:1);const S=[];for(const m of y){const _=S.find(x=>x.some(E=>sc(m,E,c)));_?_.push(m):S.push([m])}return[A,S.map(m=>[m[0],m[m.length-1]])]}).forEach(([A,y])=>{y.forEach(([S,m])=>{s.push(W`
              <line
                x1=${A}
                x2=${A}
                y1=${S}
                y2=${m}
                stroke=${n}
                stroke-width=${c/(of/2)}
                stroke-linecap="round"
              />
            `)})}),s}},dy=H`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    outline: 1px solid var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.2);
  }
`;var li=globalThis&&globalThis.__decorate||function(t,e,r,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,r,i):s(e,r))||i);return o>3&&i&&Object.defineProperty(e,r,i),i};let Nr=class extends F{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0}render(){return this.dataset.theme=this.theme,this.style.cssText=`--local-size: ${this.size}px`,k`${this.templateVisual()} ${this.templateSvg()}`}templateSvg(){const e=this.theme==="light"?this.size:this.size-32;return W`
      <svg height=${e} width=${e}>
        ${fy.generate(this.uri,e,e/4)}
      </svg>
    `}templateVisual(){return this.imageSrc?k`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:k`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};Nr.styles=[te,dy];li([R()],Nr.prototype,"uri",void 0);li([R({type:Number})],Nr.prototype,"size",void 0);li([R()],Nr.prototype,"theme",void 0);li([R()],Nr.prototype,"imageSrc",void 0);li([R()],Nr.prototype,"alt",void 0);Nr=li([U("wui-qr-code")],Nr);const hy=H`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;var py=globalThis&&globalThis.__decorate||function(t,e,r,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,r,i):s(e,r))||i);return o>3&&i&&Object.defineProperty(e,r,i),i};let Kc=class extends F{constructor(){super(...arguments),this.inputComponentRef=qh()}render(){return k`
      <wui-input-text
        ${Qh(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){const e=this.inputComponentRef.value,r=e==null?void 0:e.inputElementRef.value;r&&(r.value="",r.focus(),r.dispatchEvent(new Event("input")))}};Kc.styles=[te,hy];Kc=py([U("wui-search-bar")],Kc);const gy=H`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-xs);
    align-items: center;
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-color-bg-175);
    box-shadow:
      0px 14px 64px -4px rgba(0, 0, 0, 0.15),
      0px 8px 22px -6px rgba(0, 0, 0, 0.15);
  }
`;var Uo=globalThis&&globalThis.__decorate||function(t,e,r,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,r,i):s(e,r))||i);return o>3&&i&&Object.defineProperty(e,r,i),i};let dn=class extends F{constructor(){super(...arguments),this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="checkmark",this.message=""}render(){return k`
      <wui-icon-box
        size="sm"
        iconColor=${this.iconColor}
        backgroundColor=${this.backgroundColor}
        icon=${this.icon}
      ></wui-icon-box>
      <wui-text variant="paragraph-500" color="fg-100">${this.message}</wui-text>
    `}};dn.styles=[te,gy];Uo([R()],dn.prototype,"backgroundColor",void 0);Uo([R()],dn.prototype,"iconColor",void 0);Uo([R()],dn.prototype,"icon",void 0);Uo([R()],dn.prototype,"message",void 0);dn=Uo([U("wui-snackbar")],dn);const wy=H`
  :host {
    display: inline-flex;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  button {
    width: var(--local-tab-width);
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    color: var(--wui-color-fg-125);
  }
`;var jr=globalThis&&globalThis.__decorate||function(t,e,r,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,r,i):s(e,r))||i);return o>3&&i&&Object.defineProperty(e,r,i),i};let Jt=class extends F{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.activeTab=0,this.localTabWidth="100px",this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText=`
      --local-tab: ${this.activeTab};
      --local-tab-width: ${this.localTabWidth};
    `,this.dataset.type=this.isDense?"flex":"block",this.tabs.map((e,r)=>{const n=r===this.activeTab;return k`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(r)}
          data-active=${n}
        >
          <wui-icon size="sm" color="inherit" name=${e.icon}></wui-icon>
          <wui-text variant="small-600" color="inherit"> ${e.label} </wui-text>
        </button>
      `})}firstUpdated(){this.shadowRoot&&this.isDense&&(this.buttons=[...this.shadowRoot.querySelectorAll("button")],setTimeout(()=>{this.animateTabs(0,!0)},0))}onTabClick(e){this.buttons&&this.animateTabs(e,!1),this.activeTab=e,this.onTabChange(e)}animateTabs(e,r){const n=this.buttons[this.activeTab],o=this.buttons[e],i=n==null?void 0:n.querySelector("wui-text"),s=o==null?void 0:o.querySelector("wui-text"),a=o==null?void 0:o.getBoundingClientRect(),c=s==null?void 0:s.getBoundingClientRect();n&&i&&!r&&e!==this.activeTab&&(i.animate([{opacity:0}],{duration:200,easing:"ease",fill:"forwards"}),n.animate([{width:"34px"}],{duration:500,easing:"ease",fill:"forwards"})),o&&a&&c&&s&&(e!==this.activeTab||r)&&(this.localTabWidth=`${Math.round(a.width+c.width)+6}px`,o.animate([{width:`${a.width+c.width}px`}],{duration:r?0:500,fill:"forwards",easing:"ease"}),s.animate([{opacity:1}],{duration:r?0:250,delay:r?0:50,fill:"forwards",easing:"ease"}))}};Jt.styles=[te,He,wy];jr([R({type:Array})],Jt.prototype,"tabs",void 0);jr([R()],Jt.prototype,"onTabChange",void 0);jr([R({type:Array})],Jt.prototype,"buttons",void 0);jr([R({type:Boolean})],Jt.prototype,"disabled",void 0);jr([J()],Jt.prototype,"activeTab",void 0);jr([J()],Jt.prototype,"localTabWidth",void 0);jr([J()],Jt.prototype,"isDense",void 0);Jt=jr([U("wui-tabs")],Jt);const by=H`
  :host {
    display: block;
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    background-color: var(--wui-color-fg-100);
    color: var(--wui-color-bg-100);
    position: relative;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  wui-icon[data-placement='top'] {
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`;var bu=globalThis&&globalThis.__decorate||function(t,e,r,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,r,i):s(e,r))||i);return o>3&&i&&Object.defineProperty(e,r,i),i};let go=class extends F{constructor(){super(...arguments),this.placement="top",this.message=""}render(){return k`<wui-icon
        data-placement=${this.placement}
        color="fg-100"
        size="inherit"
        name="cursor"
      ></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>`}};go.styles=[te,He,by];bu([R()],go.prototype,"placement",void 0);bu([R()],go.prototype,"message",void 0);go=bu([U("wui-tooltip")],go);const my=H`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var Bt=globalThis&&globalThis.__decorate||function(t,e,r,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,r,i):s(e,r))||i);return o>3&&i&&Object.defineProperty(e,r,i),i};let gt=class extends F{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&Te.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&Te.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&Te.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&Te.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&Te.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&Te.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&Te.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&Te.getSpacingStyles(this.margin,3)};
    `,k`<slot></slot>`}};gt.styles=[te,my];Bt([R()],gt.prototype,"gridTemplateRows",void 0);Bt([R()],gt.prototype,"gridTemplateColumns",void 0);Bt([R()],gt.prototype,"justifyItems",void 0);Bt([R()],gt.prototype,"alignItems",void 0);Bt([R()],gt.prototype,"justifyContent",void 0);Bt([R()],gt.prototype,"alignContent",void 0);Bt([R()],gt.prototype,"columnGap",void 0);Bt([R()],gt.prototype,"rowGap",void 0);Bt([R()],gt.prototype,"gap",void 0);Bt([R()],gt.prototype,"padding",void 0);Bt([R()],gt.prototype,"margin",void 0);gt=Bt([U("wui-grid")],gt);const yy=H`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: var(--wui-gray-glass-005);
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 10px;
    background-color: var(--wui-color-bg-125);
  }
`;var m1=globalThis&&globalThis.__decorate||function(t,e,r,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,r,i):s(e,r))||i);return o>3&&i&&Object.defineProperty(e,r,i),i};let Us=class extends F{constructor(){super(...arguments),this.text=""}render(){return k`${this.template()}`}template(){return this.text?k`<wui-text variant="small-500" color="fg-200">${this.text}</wui-text>`:null}};Us.styles=[te,yy];m1([R()],Us.prototype,"text",void 0);Us=m1([U("wui-separator")],Us);const vy=H`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  wui-card {
    max-width: 360px;
    width: 100%;
    position: relative;
    animation-delay: 0.3s;
    animation-duration: 0.2s;
    animation-name: zoom-in;
    animation-fill-mode: backwards;
    animation-timing-function: var(--wui-ease-out-power-2);
    outline: none;
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: none;
      animation-name: slide-in;
    }
  }
`;var y1=globalThis&&globalThis.__decorate||function(t,e,r,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,r,i):s(e,r))||i);return o>3&&i&&Object.defineProperty(e,r,i),i};const sf="scroll-lock";let wo=class extends F{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.open=Ye.state.open,this.initializeTheming(),le.prefetch(),this.unsubscribe.push(Ye.subscribeKey("open",e=>e?this.onOpen():this.onClose()))}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.onRemoveKeyboardListener()}render(){return this.open?k`
          <wui-flex @click=${this.onOverlayClick.bind(this)}>
            <wui-card role="alertdialog" aria-modal="true" tabindex="0">
              <w3m-header></w3m-header>
              <w3m-router></w3m-router>
              <w3m-snackbar></w3m-snackbar>
            </wui-card>
          </wui-flex>
        `:null}onOverlayClick(e){e.target===e.currentTarget&&Ye.close()}initializeTheming(){const{themeVariables:e,themeMode:r}=Ct.state,n=Te.getColorTheme(r);g3(e,n)}async onClose(){this.onScrollUnlock(),await this.animate([{opacity:1},{opacity:0}],{duration:200,easing:"ease",fill:"forwards"}).finished,Nt.hide(),this.open=!1,this.onRemoveKeyboardListener()}async onOpen(){this.onScrollLock(),this.open=!0,await this.animate([{opacity:0},{opacity:1}],{duration:200,easing:"ease",fill:"forwards",delay:300}).finished,this.onAddKeyboardListener()}onScrollLock(){const e=document.createElement("style");e.dataset.w3m=sf,e.textContent=`
      html, body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `,document.head.appendChild(e)}onScrollUnlock(){const e=document.head.querySelector(`style[data-w3m="${sf}"]`);e&&e.remove()}onAddKeyboardListener(){var r;this.abortController=new AbortController;const e=(r=this.shadowRoot)==null?void 0:r.querySelector("wui-card");e==null||e.focus(),window.addEventListener("keydown",n=>{if(n.key==="Escape")Ye.close();else if(n.key==="Tab"){const{tagName:o}=n.target;o&&!o.includes("W3M-")&&!o.includes("WUI-")&&(e==null||e.focus())}},this.abortController)}onRemoveKeyboardListener(){var e;(e=this.abortController)==null||e.abort(),this.abortController=void 0}};wo.styles=vy;y1([J()],wo.prototype,"open",void 0);wo=y1([U("w3m-modal")],wo);const Ay=Object.freeze(Object.defineProperty({__proto__:null,get W3mModal(){return wo}},Symbol.toStringTag,{value:"Module"}));var Aa=globalThis&&globalThis.__decorate||function(t,e,r,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,r,i):s(e,r))||i);return o>3&&i&&Object.defineProperty(e,r,i),i};let bo=class extends F{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.network=Oe.state.caipNetwork,this.connected=Se.state.isConnected,this.unsubscribe.push(Oe.subscribeKey("caipNetwork",e=>this.network=e),Se.subscribeKey("isConnected",e=>this.connected=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){var e;return k`
      <wui-network-button
        .disabled=${!!this.disabled}
        imageSrc=${de(ot.getNetworkImage(this.network))}
        @click=${this.onClick.bind(this)}
      >
        ${((e=this.network)==null?void 0:e.name)??(this.connected?"Unknown Network":"Select Network")}
      </wui-network-button>
    `}onClick(){Ye.open({view:"Networks"})}};Aa([R({type:Boolean})],bo.prototype,"disabled",void 0);Aa([J()],bo.prototype,"network",void 0);Aa([J()],bo.prototype,"connected",void 0);bo=Aa([U("w3m-network-button")],bo);const Cy=H`
  :host {
    display: block;
    will-change: transform, opacity;
  }
`;var v1=globalThis&&globalThis.__decorate||function(t,e,r,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,r,i):s(e,r))||i);return o>3&&i&&Object.defineProperty(e,r,i),i};let Fs=class extends F{constructor(){super(),this.resizeObserver=void 0,this.prevHeight="0px",this.prevHistoryLength=1,this.unsubscribe=[],this.view=ae.state.view,this.unsubscribe.push(ae.subscribeKey("view",e=>this.onViewChange(e)))}firstUpdated(){this.resizeObserver=new ResizeObserver(async([e])=>{const r=`${e==null?void 0:e.contentRect.height}px`;this.prevHeight!=="0px"&&(await this.animate([{height:this.prevHeight},{height:r}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.style.height="auto"),this.prevHeight=r}),this.resizeObserver.observe(this.getWrapper())}disconnectedCallback(){var e;(e=this.resizeObserver)==null||e.unobserve(this.getWrapper()),this.unsubscribe.forEach(r=>r())}render(){return k`<div>${this.viewTemplate()}</div>`}viewTemplate(){switch(this.view){case"Connect":return k`<w3m-connect-view></w3m-connect-view>`;case"ConnectingWalletConnect":return k`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingExternal":return k`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"AllWallets":return k`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"Networks":return k`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return k`<w3m-network-switch-view></w3m-network-switch-view>`;case"Account":return k`<w3m-account-view></w3m-account-view>`;case"WhatIsAWallet":return k`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"WhatIsANetwork":return k`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"GetWallet":return k`<w3m-get-wallet-view></w3m-get-wallet-view>`;default:return k`<w3m-connect-view></w3m-connect-view>`}}async onViewChange(e){const{history:r}=ae.state;let n=-10,o=10;r.length<this.prevHistoryLength&&(n=10,o=-10),this.prevHistoryLength=r.length,await this.animate([{opacity:1,transform:"translateX(0px)"},{opacity:0,transform:`translateX(${n}px)`}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.view=e,await this.animate([{opacity:0,transform:`translateX(${o}px)`},{opacity:1,transform:"translateX(0px)"}],{duration:150,easing:"ease",fill:"forwards",delay:50}).finished}getWrapper(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("div")}};Fs.styles=Cy;v1([J()],Fs.prototype,"view",void 0);Fs=v1([U("w3m-router")],Fs);const xy=H`
  wui-flex {
    width: 100%;
  }

  :host > wui-flex:first-child {
    transform: translateY(calc(var(--wui-spacing-xxs) * -1));
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }
`;var Wr=globalThis&&globalThis.__decorate||function(t,e,r,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,r,i):s(e,r))||i);return o>3&&i&&Object.defineProperty(e,r,i),i};let Xt=class extends F{constructor(){super(),this.usubscribe=[],this.networkImages=Er.state.networkImages,this.address=Se.state.address,this.profileImage=Se.state.profileImage,this.profileName=Se.state.profileName,this.balance=Se.state.balance,this.balanceSymbol=Se.state.balanceSymbol,this.network=Oe.state.caipNetwork,this.disconecting=!1,this.usubscribe.push(Se.subscribe(e=>{e.address?(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName,this.balance=e.balance,this.balanceSymbol=e.balanceSymbol):Ye.close()}),Oe.subscribeKey("caipNetwork",e=>{e!=null&&e.id&&(this.network=e)}))}disconnectedCallback(){this.usubscribe.forEach(e=>e())}render(){var r,n;if(!this.address)throw new Error("w3m-account-view: No account provided");const e=this.networkImages[((r=this.network)==null?void 0:r.imageId)??""];return k`
      <wui-flex
        flexDirection="column"
        .padding=${["0","s","m","s"]}
        alignItems="center"
        gap="l"
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${de(this.profileImage)}
        ></wui-avatar>

        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="large-600" color="fg-100">
              ${this.profileName?Te.getTruncateString(this.profileName,20,"end"):Te.getTruncateString(this.address,8,"middle")}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
          <wui-flex gap="s" flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-500" color="fg-200">
              ${oe.formatBalance(this.balance,this.balanceSymbol)}
            </wui-text>

            ${this.explorerBtnTemplate()}
          </wui-flex>
        </wui-flex>
      </wui-flex>

      <wui-flex flexDirection="column" gap="xs" .padding=${["0","s","s","s"]}>
        <wui-list-item
          .variant=${e?"image":"icon"}
          iconVariant="overlay"
          icon="networkPlaceholder"
          imageSrc=${de(e)}
          ?chevron=${this.isMultiNetwork()}
          @click=${this.onNetworks.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-100">
            ${((n=this.network)==null?void 0:n.name)??"Unknown"}
          </wui-text>
        </wui-list-item>
        <wui-list-item
          variant="icon"
          iconVariant="overlay"
          icon="disconnect"
          ?chevron=${!1}
          .loading=${this.disconecting}
          @click=${this.onDisconnect.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>
    `}explorerBtnTemplate(){const{addressExplorerUrl:e}=Se.state;return e?k`
      <wui-button size="sm" variant="shade" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `:null}isMultiNetwork(){const{requestedCaipNetworks:e}=Oe.state;return e?e.length>1:!1}onCopyAddress(){try{this.address&&(oe.copyToClopboard(this.address),Nt.showSuccess("Address copied"))}catch{Nt.showError("Failed to copy")}}onNetworks(){this.isMultiNetwork()&&ae.push("Networks")}async onDisconnect(){try{this.disconecting=!0,await ve.disconnect(),Ye.close()}catch{Nt.showError("Failed to disconnect")}finally{this.disconecting=!1}}onExplorer(){const{addressExplorerUrl:e}=Se.state;e&&oe.openHref(e,"_blank")}};Xt.styles=xy;Wr([J()],Xt.prototype,"address",void 0);Wr([J()],Xt.prototype,"profileImage",void 0);Wr([J()],Xt.prototype,"profileName",void 0);Wr([J()],Xt.prototype,"balance",void 0);Wr([J()],Xt.prototype,"balanceSymbol",void 0);Wr([J()],Xt.prototype,"network",void 0);Wr([J()],Xt.prototype,"disconecting",void 0);Xt=Wr([U("w3m-account-view")],Xt);var A1=globalThis&&globalThis.__decorate||function(t,e,r,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,r,i):s(e,r))||i);return o>3&&i&&Object.defineProperty(e,r,i),i};let Zc=class extends F{constructor(){super(...arguments),this.search="",this.onDebouncedSearch=oe.debounce(e=>{this.search=e})}render(){const e=this.search.length>=2;return k`
      <wui-flex padding="s" gap="s">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${e?k`<w3m-all-wallets-search query=${this.search}></w3m-all-wallets-search>`:k`<w3m-all-wallets-list></w3m-all-wallets-list>`}
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}qrButtonTemplate(){return oe.isMobile()?k`
        <wui-icon-box
          size="lg"
          iconcolor="accent-100"
          backgroundcolor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){ae.push("ConnectingWalletConnect")}};A1([J()],Zc.prototype,"search",void 0);Zc=A1([U("w3m-all-wallets-view")],Zc);const Ey=H`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var C1=globalThis&&globalThis.__decorate||function(t,e,r,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,r,i):s(e,r))||i);return o>3&&i&&Object.defineProperty(e,r,i),i};let Ls=class extends F{constructor(){super(),this.unsubscribe=[],this.connectors=on.state.connectors,this.unsubscribe.push(on.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return k`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.walletConnectConnectorTemplate()} ${this.recentTemplate()} ${this.featuredTemplate()}
        ${this.customTemplate()} ${this.recommendedTemplate()} ${this.connectorsTemplate()}
        ${this.allWalletsTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}walletConnectConnectorTemplate(){if(oe.isMobile())return null;const e=this.connectors.find(r=>r.type==="WALLET_CONNECT");return e?k`
      <wui-list-wallet
        imageSrc=${de(ot.getConnectorImage(e))}
        name=${e.name??"Unknown"}
        @click=${()=>this.onConnector(e)}
        tagLabel="qr code"
        tagVariant="main"
      >
      </wui-list-wallet>
    `:null}customTemplate(){const{customWallets:e}=$e.state;return e!=null&&e.length?this.filterOutRecentWallets(e).map(n=>k`
        <wui-list-wallet
          imageSrc=${de(ot.getWalletImage(n))}
          name=${n.name??"Unknown"}
          @click=${()=>ae.push("ConnectingWalletConnect",{wallet:n})}
        >
        </wui-list-wallet>
      `):null}featuredTemplate(){const{featured:e}=le.state;return e.length?this.filterOutRecentWallets(e).map(n=>k`
        <wui-list-wallet
          imageSrc=${de(ot.getWalletImage(n))}
          name=${n.name??"Unknown"}
          @click=${()=>ae.push("ConnectingWalletConnect",{wallet:n})}
        >
        </wui-list-wallet>
      `):null}recentTemplate(){return nn.getRecentWallets().map(r=>k`
        <wui-list-wallet
          imageSrc=${de(ot.getWalletImage(r))}
          name=${r.name??"Unknown"}
          @click=${()=>ae.push("ConnectingWalletConnect",{wallet:r})}
          tagLabel="recent"
          tagVariant="shade"
        >
        </wui-list-wallet>
      `)}connectorsTemplate(){return this.connectors.map(e=>{if(e.type==="WALLET_CONNECT")return null;let r,n;if(e.type==="INJECTED"){if(!ve.checkInjectedInstalled())return null;r="installed",n="success"}return k`
        <wui-list-wallet
          imageSrc=${de(ot.getConnectorImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnector(e)}
          tagLabel=${de(r)}
          tagVariant=${de(n)}
        >
        </wui-list-wallet>
      `})}allWalletsTemplate(){return k`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${()=>ae.push("AllWallets")}
        tagLabel=${`${le.state.count}+`}
        tagVariant="shade"
      ></wui-list-wallet>
    `}recommendedTemplate(){const{recommended:e,featured:r}=le.state,{customWallets:n}=$e.state;if(!e.length||r.length||n!=null&&n.length)return null;const[o,i]=this.filterOutRecentWallets(e);return[o,i].map(s=>k`
        <wui-list-wallet
          imageSrc=${de(ot.getWalletImage(s))}
          name=${(s==null?void 0:s.name)??"Unknown"}
          @click=${()=>ae.push("ConnectingWalletConnect",{wallet:s})}
        >
        </wui-list-wallet>
      `)}onConnector(e){e.type==="WALLET_CONNECT"?oe.isMobile()?ae.push("AllWallets"):ae.push("ConnectingWalletConnect"):ae.push("ConnectingExternal",{connector:e})}filterOutRecentWallets(e){const n=nn.getRecentWallets().map(i=>i.id);return e.filter(i=>!n.includes(i.id))}};Ls.styles=Ey;C1([J()],Ls.prototype,"connectors",void 0);Ls=C1([U("w3m-connect-view")],Ls);const _y=H`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-button {
    display: none;
  }

  [data-retry='true'] wui-button {
    display: block;
    opacity: 1;
  }
`;var ui=globalThis&&globalThis.__decorate||function(t,e,r,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,r,i):s(e,r))||i);return o>3&&i&&Object.defineProperty(e,r,i),i};class At extends F{constructor(){var e,r,n,o;super(),this.wallet=(e=ae.state.data)==null?void 0:e.wallet,this.connector=(r=ae.state.data)==null?void 0:r.connector,this.timeout=void 0,this.secondaryBtnLabel="Try again",this.secondaryBtnIcon="refresh",this.secondaryLabel="Accept connection request in the wallet",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=ot.getWalletImage(this.wallet)??ot.getConnectorImage(this.connector),this.name=((n=this.wallet)==null?void 0:n.name)??((o=this.connector)==null?void 0:o.name)??"Wallet",this.isRetrying=!1,this.uri=ve.state.wcUri,this.error=ve.state.wcError,this.ready=!1,this.showRetry=!1,this.buffering=!1,this.onRetry=void 0,this.unsubscribe.push(ve.subscribeKey("wcUri",i=>{var s;this.uri=i,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,(s=this.onConnect)==null||s.call(this))}),ve.subscribeKey("wcError",i=>this.error=i),ve.subscribeKey("buffering",i=>this.buffering=i))}firstUpdated(){var e;(e=this.onAutoConnect)==null||e.call(this),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),clearTimeout(this.timeout)}render(){var n;(n=this.onRender)==null||n.call(this),this.onShowRetry();const e=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel;let r=`Continue in ${this.name}`;return this.buffering&&(r="Connecting..."),this.error&&(r="Connection declined"),k`
      <wui-flex
        data-error=${de(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${de(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${r}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${e}</wui-text>
        </wui-flex>

        <wui-button
          variant="accent"
          ?disabled=${!this.error&&this.buffering}
          @click=${this.onTryAgain.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
          ${this.secondaryBtnLabel}
        </wui-button>
      </wui-flex>

      ${this.isWalletConnect?k`
            <wui-flex .padding=${["0","xl","xl","xl"]}>
              <wui-button variant="fullWidth" @click=${this.onCopyUri}>
                <wui-icon size="sm" color="inherit" slot="iconLeft" name="copy"></wui-icon>
                Copy Link
              </wui-button>
            </wui-flex>
          `:null}
    `}onShowRetry(){var e;this.error&&!this.showRetry&&(this.showRetry=!0,((e=this.shadowRoot)==null?void 0:e.querySelector("wui-button")).animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"}))}onTryAgain(){var e,r;this.buffering||(ve.setWcError(!1),this.onRetry?(this.isRetrying=!0,(e=this.onRetry)==null||e.call(this)):(r=this.onConnect)==null||r.call(this))}loaderTemplate(){const e=Ct.state.themeVariables["--w3m-border-radius-master"],r=e?parseInt(e.replace("px",""),10):4;return k`<wui-loading-thumbnail radius=${r*9}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(oe.copyToClopboard(this.uri),Nt.showSuccess("Link copied"))}catch{Nt.showError("Failed to copy")}}}At.styles=_y;ui([J()],At.prototype,"uri",void 0);ui([J()],At.prototype,"error",void 0);ui([J()],At.prototype,"ready",void 0);ui([J()],At.prototype,"showRetry",void 0);ui([J()],At.prototype,"buffering",void 0);ui([R()],At.prototype,"onRetry",void 0);var Sy=globalThis&&globalThis.__decorate||function(t,e,r,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,r,i):s(e,r))||i);return o>3&&i&&Object.defineProperty(e,r,i),i};let af=class extends At{constructor(){if(super(),!this.connector)throw new Error("w3m-connecting-view: No connector provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),this.isWalletConnect=!1}async onConnectProxy(){try{this.error=!1,this.connector&&(await ve.connectExternal(this.connector.id),Ye.close())}catch{this.error=!0}}};af=Sy([U("w3m-connecting-external-view")],af);var mu=globalThis&&globalThis.__decorate||function(t,e,r,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,r,i):s(e,r))||i);return o>3&&i&&Object.defineProperty(e,r,i),i};let js=class extends F{constructor(){var e;super(),this.interval=void 0,this.lastRetry=Date.now(),this.wallet=(e=ae.state.data)==null?void 0:e.wallet,this.platform=void 0,this.platforms=[],this.initializeConnection(),this.interval=setInterval(this.initializeConnection.bind(this),Ei.TEN_SEC_MS)}disconnectedCallback(){clearTimeout(this.interval)}render(){return this.wallet?(this.determinePlatforms(),k`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
    `):k`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`}async initializeConnection(e=!1){try{const{wcPairingExpiry:r}=ve.state;(e||oe.isPairingExpired(r))&&(ve.connectWalletConnect(),await ve.state.wcPromise,this.storeWalletConnectDeeplink(),Ye.close())}catch{ve.setWcError(!0),oe.isAllowedRetry(this.lastRetry)&&(Nt.showError("Declined"),this.lastRetry=Date.now(),this.initializeConnection(!0))}}storeWalletConnectDeeplink(){const{wcLinking:e,recentWallet:r}=ve.state;e&&nn.setWalletConnectDeepLink(e),r&&nn.setWeb3ModalRecent(r)}determinePlatforms(){if(!this.wallet)throw new Error("w3m-connecting-wc-view:determinePlatforms No wallet");if(this.platform)return;const{connectors:e}=on.state,{mobile_link:r,desktop_link:n,webapp_link:o,injected:i}=this.wallet,s=(i==null?void 0:i.map(({injected_id:b})=>b).filter(Boolean))??[],a=s.length,c=r,l=o,d=e.find(b=>b.type==="INJECTED"),p=ve.checkInjectedInstalled(s),g=a&&p&&d,w=n&&!oe.isMobile();g&&this.platforms.push("injected"),c&&this.platforms.push(oe.isMobile()?"mobile":"qrcode"),l&&this.platforms.push("web"),w&&this.platforms.push("desktop"),!g&&a&&this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"injected":return k`<w3m-connecting-wc-injected></w3m-connecting-wc-injected>`;case"desktop":return k`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"web":return k`
          <w3m-connecting-wc-web .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-web>
        `;case"mobile":return k`
          <w3m-connecting-wc-mobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return k`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return k`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?k`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(e){var n;const r=(n=this.shadowRoot)==null?void 0:n.querySelector("div");r&&(await r.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=e,r.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};mu([J()],js.prototype,"platform",void 0);mu([J()],js.prototype,"platforms",void 0);js=mu([U("w3m-connecting-wc-view")],js);var Dy=globalThis&&globalThis.__decorate||function(t,e,r,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,r,i):s(e,r))||i);return o>3&&i&&Object.defineProperty(e,r,i),i};const Py="https://walletconnect.com/explorer";let cf=class extends F{render(){return k`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.recommendedWalletsTemplate()}
        <wui-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          @click=${()=>{oe.openHref("https://walletconnect.com/explorer?type=wallet","_blank")}}
        ></wui-list-wallet>
      </wui-flex>
    `}recommendedWalletsTemplate(){const{recommended:e,featured:r}=le.state,{customWallets:n}=$e.state;return[...r,...n??[],...e].slice(0,4).map(i=>k`
        <wui-list-wallet
          name=${i.name??"Unknown"}
          tagVariant="main"
          imageSrc=${de(ot.getWalletImage(i))}
          @click=${()=>{oe.openHref(i.homepage??Py,"_blank")}}
        ></wui-list-wallet>
      `)}};cf=Dy([U("w3m-get-wallet-view")],cf);const Iy=H`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`;var Ca=globalThis&&globalThis.__decorate||function(t,e,r,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,r,i):s(e,r))||i);return o>3&&i&&Object.defineProperty(e,r,i),i};let Qn=class extends F{constructor(){var e;super(),this.network=(e=ae.state.data)==null?void 0:e.network,this.unsubscribe=[],this.showRetry=!1,this.error=!1,this.currentNetwork=Oe.state.caipNetwork,this.unsubscribe.push(Oe.subscribeKey("caipNetwork",r=>{var n;(r==null?void 0:r.id)!==((n=this.currentNetwork)==null?void 0:n.id)&&ae.goBack()}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){this.onSwitchNetwork()}render(){if(!this.network)throw new Error("w3m-network-switch-view: No network provided");this.onShowRetry();const e=this.error?"Switch declined":"Approve in wallet",r=this.error?"Switch can be declined if chain is not supported by a wallet or previous request is still active":"Accept connection request in your wallet";return k`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${de(ot.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error?null:k`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            ?border=${!0}
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">${e}</wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${r}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="fill"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `}onShowRetry(){var e;this.error&&!this.showRetry&&(this.showRetry=!0,((e=this.shadowRoot)==null?void 0:e.querySelector("wui-button")).animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"}))}async onSwitchNetwork(){try{this.error=!1,this.network&&await Oe.switchActiveNetwork(this.network)}catch{this.error=!0}}};Qn.styles=Iy;Ca([J()],Qn.prototype,"showRetry",void 0);Ca([J()],Qn.prototype,"error",void 0);Ca([J()],Qn.prototype,"currentNetwork",void 0);Qn=Ca([U("w3m-network-switch-view")],Qn);var x1=globalThis&&globalThis.__decorate||function(t,e,r,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,r,i):s(e,r))||i);return o>3&&i&&Object.defineProperty(e,r,i),i};let Yc=class extends F{constructor(){super(),this.unsubscribe=[],this.caipNetwork=Oe.state.caipNetwork,this.unsubscribe.push(Oe.subscribeKey("caipNetwork",e=>this.caipNetwork=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return k`
      <wui-grid padding="s" gridTemplateColumns="repeat(4, 1fr)" rowGap="l" columnGap="xs">
        ${this.networksTemplate()}
      </wui-grid>

      <wui-separator></wui-separator>

      <wui-flex padding="s" flexDirection="column" gap="m" alignItems="center">
        <wui-text variant="small-500" color="fg-300" align="center">
          Your connected wallet may not support some of the networks available for this dApp
        </wui-text>
        <wui-link @click=${()=>ae.push("WhatIsANetwork")}>
          <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
          What is a network
        </wui-link>
      </wui-flex>
    `}networksTemplate(){const{approvedCaipNetworkIds:e,requestedCaipNetworks:r,supportsAllNetworks:n}=Oe.state,o=e,i=r;return o!=null&&o.length&&(i==null||i.sort((s,a)=>o.indexOf(a.id)-o.indexOf(s.id))),i==null?void 0:i.map(s=>{var a;return k`
        <wui-card-select
          .selected=${((a=this.caipNetwork)==null?void 0:a.id)===s.id}
          imageSrc=${de(ot.getNetworkImage(s))}
          type="network"
          name=${s.name??s.id}
          @click=${()=>this.onSwitchNetwork(s)}
          .disabled=${!n&&!(o!=null&&o.includes(s.id))}
        ></wui-card-select>
      `})}async onSwitchNetwork(e){const{isConnected:r}=Se.state,{approvedCaipNetworkIds:n,supportsAllNetworks:o,caipNetwork:i}=Oe.state;r&&(i==null?void 0:i.id)!==e.id?n!=null&&n.includes(e.id)?await Oe.switchActiveNetwork(e):o&&ae.push("SwitchNetwork",{network:e}):r||(Oe.setCaipNetwork(e),ae.push("Connect"))}};x1([J()],Yc.prototype,"caipNetwork",void 0);Yc=x1([U("w3m-networks-view")],Yc);var Ty=globalThis&&globalThis.__decorate||function(t,e,r,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,r,i):s(e,r))||i);return o>3&&i&&Object.defineProperty(e,r,i),i};const By=[{images:["network","layers","system"],title:"The system’s nuts and bolts",text:"A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services."},{images:["noun","defiAlt","dao"],title:"Designed for different uses",text:"Each network is designed differently, and may therefore suit certain apps and experiences."}];let lf=class extends F{render(){return k`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${By}></w3m-help-widget>
        <wui-button
          variant="fill"
          size="sm"
          @click=${()=>{oe.openHref("https://ethereum.org/en/developers/docs/networks/","_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};lf=Ty([U("w3m-what-is-a-network-view")],lf);var Oy=globalThis&&globalThis.__decorate||function(t,e,r,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,r,i):s(e,r))||i);return o>3&&i&&Object.defineProperty(e,r,i),i};const ky=[{images:["login","profile","lock"],title:"One login for all of web3",text:"Log in to any app by connecting your wallet. Say goodbye to countless passwords!"},{images:["defi","nft","eth"],title:"A home for your digital assets",text:"A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs."},{images:["browser","noun","dao"],title:"Your gateway to a new web",text:"With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more."}];let uf=class extends F{render(){return k`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${ky}></w3m-help-widget>
        <wui-button variant="fill" size="sm" @click=${()=>ae.push("GetWallet")}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a Wallet
        </wui-button>
      </wui-flex>
    `}};uf=Oy([U("w3m-what-is-a-wallet-view")],uf);const Ry=H`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 76px);
  }

  @media (max-width: 435px) {
    wui-grid {
      grid-template-columns: repeat(auto-fill, 77px);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;var Fo=globalThis&&globalThis.__decorate||function(t,e,r,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,r,i):s(e,r))||i);return o>3&&i&&Object.defineProperty(e,r,i),i};const ff="local-paginator";let hn=class extends F{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.initial=!le.state.wallets.length,this.wallets=le.state.wallets,this.recommended=le.state.recommended,this.featured=le.state.featured,this.unsubscribe.push(le.subscribeKey("wallets",e=>this.wallets=e),le.subscribeKey("recommended",e=>this.recommended=e),le.subscribeKey("featured",e=>this.featured=e))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){var e;this.unsubscribe.forEach(r=>r()),(e=this.paginationObserver)==null||e.disconnect()}render(){return k`
      <wui-grid
        data-scroll=${!this.initial}
        .padding=${["0","s","s","s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.initial?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){var r;const e=(r=this.shadowRoot)==null?void 0:r.querySelector("wui-grid");this.initial&&e&&(await le.fetchWallets({page:1}),await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.initial=!1,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(e,r){return[...Array(e)].map(()=>k`
        <wui-card-select-loader type="wallet" id=${de(r)}></wui-card-select-loader>
      `)}walletsTemplate(){return[...this.featured,...this.recommended,...this.wallets].map(r=>k`
        <wui-card-select
          imageSrc=${de(ot.getWalletImage(r))}
          type="wallet"
          name=${r.name}
          @click=${()=>this.onConnectWallet(r)}
        ></wui-card-select>
      `)}paginationLoaderTemplate(){const{wallets:e,recommended:r,featured:n,count:o}=le.state,i=window.innerWidth<352?3:4,s=e.length+r.length;let c=Math.ceil(s/i)*i-s+i;return c-=e.length?n.length%i:0,o===0||[...n,...e,...r].length<o?this.shimmerTemplate(c,ff):null}createPaginationObserver(){var r;const e=(r=this.shadowRoot)==null?void 0:r.querySelector(`#${ff}`);e&&(this.paginationObserver=new IntersectionObserver(([n])=>{if(n!=null&&n.isIntersecting&&!this.initial){const{page:o,count:i,wallets:s}=le.state;s.length<i&&le.fetchWallets({page:o+1})}}),this.paginationObserver.observe(e))}onConnectWallet(e){const{connectors:r}=on.state,n=r.find(({explorerId:o})=>o===e.id);n?ae.push("ConnectingExternal",{connector:n}):ae.push("ConnectingWalletConnect",{wallet:e})}};hn.styles=Ry;Fo([J()],hn.prototype,"initial",void 0);Fo([J()],hn.prototype,"wallets",void 0);Fo([J()],hn.prototype,"recommended",void 0);Fo([J()],hn.prototype,"featured",void 0);hn=Fo([U("w3m-all-wallets-list")],hn);const Ny=H`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }
`;var yu=globalThis&&globalThis.__decorate||function(t,e,r,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,r,i):s(e,r))||i);return o>3&&i&&Object.defineProperty(e,r,i),i};let mo=class extends F{constructor(){super(...arguments),this.prevQuery="",this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?k`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){this.query!==this.prevQuery&&(this.prevQuery=this.query,this.loading=!0,await le.searchWallet({search:this.query}),this.loading=!1)}walletsTemplate(){const{search:e}=le.state;return e.length?k`
      <wui-grid
        .padding=${["0","s","s","s"]}
        gridTemplateColumns="repeat(4, 1fr)"
        rowGap="l"
        columnGap="xs"
      >
        ${e.map(r=>k`
            <wui-card-select
              imageSrc=${de(ot.getWalletImage(r))}
              type="wallet"
              name=${r.name}
              @click=${()=>this.onConnectWallet(r)}
            ></wui-card-select>
          `)}
      </wui-grid>
    `:k`
        <wui-flex justifyContent="center" alignItems="center" gap="s" flexDirection="column">
          <wui-icon-box
            size="lg"
            iconcolor="fg-200"
            backgroundcolor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text color="fg-200" variant="paragraph-500">No Wallet found</wui-text>
        </wui-flex>
      `}onConnectWallet(e){const{connectors:r}=on.state,n=r.find(({explorerId:o})=>o===e.id);n?ae.push("ConnectingExternal",{connector:n}):ae.push("ConnectingWalletConnect",{wallet:e})}};mo.styles=Ny;yu([J()],mo.prototype,"loading",void 0);yu([R()],mo.prototype,"query",void 0);mo=yu([U("w3m-all-wallets-search")],mo);var xa=globalThis&&globalThis.__decorate||function(t,e,r,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,r,i):s(e,r))||i);return o>3&&i&&Object.defineProperty(e,r,i),i};let yo=class extends F{constructor(){super(),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0,this.buffering=!1,this.unsubscribe.push(ve.subscribeKey("buffering",e=>this.buffering=e))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.generateTabs();return k`
      <wui-flex justifyContent="center" .padding=${["l","0","0","0"]}>
        <wui-tabs
          ?disabled=${this.buffering}
          .tabs=${e}
          .onTabChange=${this.onTabChange.bind(this)}
        ></wui-tabs>
      </wui-flex>
    `}generateTabs(){const e=this.platforms.map(r=>r==="injected"?{label:"Browser",icon:"extension",platform:"injected"}:r==="mobile"?{label:"Mobile",icon:"mobile",platform:"mobile"}:r==="qrcode"?{label:"Mobile",icon:"mobile",platform:"qrcode"}:r==="web"?{label:"Webapp",icon:"browser",platform:"web"}:r==="desktop"?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"});return this.platformTabs=e.map(({platform:r})=>r),e}onTabChange(e){var n;const r=this.platformTabs[e];r&&((n=this.onSelectPlatfrom)==null||n.call(this,r))}};xa([R({type:Array})],yo.prototype,"platforms",void 0);xa([R()],yo.prototype,"onSelectPlatfrom",void 0);xa([J()],yo.prototype,"buffering",void 0);yo=xa([U("w3m-connecting-header")],yo);var My=globalThis&&globalThis.__decorate||function(t,e,r,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,r,i):s(e,r))||i);return o>3&&i&&Object.defineProperty(e,r,i),i};let df=class extends At{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this)}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.timeout=setTimeout(()=>{var e;(e=this.onConnect)==null||e.call(this)},200))}onConnectProxy(){var e;if((e=this.wallet)!=null&&e.desktop_link&&this.uri)try{this.error=!1;const{desktop_link:r,name:n}=this.wallet,{redirect:o,href:i}=oe.formatNativeUrl(r,this.uri);ve.setWcLinking({name:n,href:i}),ve.setRecentWallet(this.wallet),oe.openHref(o,"_self")}catch{this.error=!0}}};df=My([U("w3m-connecting-wc-desktop")],df);var $y=globalThis&&globalThis.__decorate||function(t,e,r,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,r,i):s(e,r))||i);return o>3&&i&&Object.defineProperty(e,r,i),i};let hf=class extends At{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-injected: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this)}async onConnectProxy(){try{this.error=!1,await ve.connectExternal("injected"),Ye.close()}catch{this.error=!0}}};hf=$y([U("w3m-connecting-wc-injected")],hf);var Uy=globalThis&&globalThis.__decorate||function(t,e,r,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,r,i):s(e,r))||i);return o>3&&i&&Object.defineProperty(e,r,i),i};let pf=class extends At{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-mobile: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),document.addEventListener("visibilitychange",this.onBuffering.bind(this))}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("visibilitychange",this.onBuffering.bind(this))}onRenderProxy(){var e;!this.ready&&this.uri&&(this.ready=!0,(e=this.onConnect)==null||e.call(this))}onConnectProxy(){var e;if((e=this.wallet)!=null&&e.mobile_link&&this.uri)try{this.error=!1;const{mobile_link:r,name:n}=this.wallet,{redirect:o,href:i}=oe.formatNativeUrl(r,this.uri);ve.setWcLinking({name:n,href:i}),ve.setRecentWallet(this.wallet),oe.openHref(o,"_self")}catch{this.error=!0}}onBuffering(){const e=oe.isIos();(document==null?void 0:document.visibilityState)==="visible"&&!this.error&&e&&(ve.setBuffering(!0),setTimeout(()=>{ve.setBuffering(!1)},5e3))}};pf=Uy([U("w3m-connecting-wc-mobile")],pf);const Fy=H`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`;var Ly=globalThis&&globalThis.__decorate||function(t,e,r,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,r,i):s(e,r))||i);return o>3&&i&&Object.defineProperty(e,r,i),i};let Jc=class extends At{constructor(){super(),this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),k`
      <wui-flex padding="xl" flexDirection="column" gap="xl" alignItems="center">
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>

        <wui-button variant="fullWidth" @click=${this.onCopyUri}>
          <wui-icon size="sm" color="inherit" slot="iconLeft" name="copy"></wui-icon>
          Copy Link
        </wui-button>
      </wui-flex>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const e=this.getBoundingClientRect().width-40,r=this.wallet?this.wallet.name:void 0;return ve.setWcLinking(void 0),ve.setRecentWallet(this.wallet),k`<wui-qr-code
      size=${e}
      theme=${Ct.state.themeMode}
      uri=${this.uri}
      imageSrc=${de(ot.getWalletImage(this.wallet))}
      alt=${de(r)}
    ></wui-qr-code>`}};Jc.styles=Fy;Jc=Ly([U("w3m-connecting-wc-qrcode")],Jc);var jy=globalThis&&globalThis.__decorate||function(t,e,r,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,r,i):s(e,r))||i);return o>3&&i&&Object.defineProperty(e,r,i),i};let gf=class extends F{constructor(){var e;super(...arguments),this.wallet=(e=ae.state.data)==null?void 0:e.wallet}render(){if(!this.wallet)throw new Error("w3m-connecting-wc-unsupported: No wallet provided");return k`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${de(ot.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-flex flexDirection="column" alignItems="center" gap="xxs">
          <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
          <wui-text variant="small-500" color="fg-200" align="center">
            Download and install ${this.wallet.name} to continue
          </wui-text>
        </wui-flex>

        ${this.downloadBtnTemplate()}
      </wui-flex>
    `}downloadBtnTemplate(){if(!this.wallet)throw new Error("w3m-connecting-wc-unsupported:onDownload No wallet provided");const{homepage:e}=this.wallet;return e?k`
      <wui-button
        size="sm"
        variant="fill"
        @click=${()=>oe.openHref(e,"_blank")}
      >
        <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        Download
      </wui-button>
    `:null}};gf=jy([U("w3m-connecting-wc-unsupported")],gf);var Wy=globalThis&&globalThis.__decorate||function(t,e,r,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,r,i):s(e,r))||i);return o>3&&i&&Object.defineProperty(e,r,i),i};let wf=class extends At{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel="Open and continue in a new browser tab",this.secondaryBtnIcon="externalLink"}onConnectProxy(){var e;if((e=this.wallet)!=null&&e.webapp_link&&this.uri)try{this.error=!1;const{webapp_link:r,name:n}=this.wallet,{redirect:o,href:i}=oe.formatUniversalUrl(r,this.uri);ve.setWcLinking({name:n,href:i}),ve.setRecentWallet(this.wallet),oe.openHref(o,"_blank")}catch{this.error=!0}}};wf=Wy([U("w3m-connecting-wc-web")],wf);const zy=H`
  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }
`;var Ea=globalThis&&globalThis.__decorate||function(t,e,r,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,r,i):s(e,r))||i);return o>3&&i&&Object.defineProperty(e,r,i),i};function bf(){var o,i,s,a,c,l;const t=(i=(o=ae.state.data)==null?void 0:o.connector)==null?void 0:i.name,e=(a=(s=ae.state.data)==null?void 0:s.wallet)==null?void 0:a.name,r=(l=(c=ae.state.data)==null?void 0:c.network)==null?void 0:l.name,n=e??t;return{Connect:"Connect Wallet",Account:void 0,ConnectingExternal:n??"Connect Wallet",ConnectingWalletConnect:n??"WalletConnect",Networks:"Choose Network",SwitchNetwork:r??"Switch Network",AllWallets:"All Wallets",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a wallet?",GetWallet:"Get a Wallet"}}let Kn=class extends F{constructor(){super(),this.unsubscribe=[],this.heading=bf()[ae.state.view],this.buffering=!1,this.showBack=!1,this.unsubscribe.push(ae.subscribeKey("view",e=>{this.onViewChange(e),this.onHistoryChange()}),ve.subscribeKey("buffering",e=>this.buffering=e))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){return k`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.dynamicButtonTemplate()} ${this.titleTemplate()}
        <wui-icon-link
          ?disabled=${this.buffering}
          icon="close"
          @click=${Ye.close}
        ></wui-icon-link>
      </wui-flex>
      ${this.separatorTemplate()}
    `}titleTemplate(){return k`<wui-text variant="paragraph-700" color="fg-100">${this.heading}</wui-text>`}dynamicButtonTemplate(){const{view:e}=ae.state,r=e==="Connect";return this.showBack?k`<wui-icon-link
        id="dynamic"
        icon="chevronLeft"
        ?disabled=${this.buffering}
        @click=${ae.goBack}
      ></wui-icon-link>`:k`<wui-icon-link
      data-hidden=${!r}
      id="dynamic"
      icon="helpCircle"
      @click=${()=>ae.push("WhatIsAWallet")}
    ></wui-icon-link>`}separatorTemplate(){return this.heading?k`<wui-separator></wui-separator>`:null}getPadding(){return this.heading?["l","2l","l","2l"]:["l","2l","0","2l"]}async onViewChange(e){var n;const r=(n=this.shadowRoot)==null?void 0:n.querySelector("wui-text");if(r){const o=bf()[e];await r.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.heading=o,r.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})}}async onHistoryChange(){var n;const{history:e}=ae.state,r=(n=this.shadowRoot)==null?void 0:n.querySelector("#dynamic");e.length>1&&!this.showBack&&r?(await r.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,r.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):e.length<=1&&this.showBack&&r&&(await r.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,r.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};Kn.styles=[zy];Ea([J()],Kn.prototype,"heading",void 0);Ea([J()],Kn.prototype,"buffering",void 0);Ea([J()],Kn.prototype,"showBack",void 0);Kn=Ea([U("w3m-header")],Kn);var E1=globalThis&&globalThis.__decorate||function(t,e,r,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,r,i):s(e,r))||i);return o>3&&i&&Object.defineProperty(e,r,i),i};let Xc=class extends F{constructor(){super(...arguments),this.data=[]}render(){return k`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        ${this.data.map(e=>k`
            <wui-flex flexDirection="column" alignItems="center" gap="xl">
              <wui-flex flexDirection="row" justifyContent="center" gap="1xs">
                ${e.images.map(r=>k`<wui-visual name=${r}></wui-visual>`)}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="xxs">
              <wui-text variant="paragraph-500" color="fg-100" align="center">
                ${e.title}
              </wui-text>
              <wui-text variant="small-500" color="fg-200" align="center">${e.text}</wui-text>
            </wui-flex>
          `)}
      </wui-flex>
    `}};E1([R({type:Array})],Xc.prototype,"data",void 0);Xc=E1([U("w3m-help-widget")],Xc);const Hy=H`
  wui-flex {
    background-color: var(--wui-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 600;
  }
`;var Gy=globalThis&&globalThis.__decorate||function(t,e,r,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,r,i):s(e,r))||i);return o>3&&i&&Object.defineProperty(e,r,i),i};let el=class extends F{render(){const{termsConditionsUrl:e,privacyPolicyUrl:r}=$e.state;return!e&&!r?null:k`
      <wui-flex .padding=${["m","s","s","s"]} justifyContent="center">
        <wui-text color="fg-250" variant="small-500" align="center">
          By connecting your wallet, you agree to our <br />
          ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-flex>
    `}andTemplate(){const{termsConditionsUrl:e,privacyPolicyUrl:r}=$e.state;return e&&r?"and":""}termsTemplate(){const{termsConditionsUrl:e}=$e.state;return e?k`<a href=${e}>Terms of Service</a>`:null}privacyTemplate(){const{privacyPolicyUrl:e}=$e.state;return e?k`<a href=${e}>Privacy Policy</a>`:null}};el.styles=[Hy];el=Gy([U("w3m-legal-footer")],el);const Vy=H`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
  }
`;var _1=globalThis&&globalThis.__decorate||function(t,e,r,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,r,i):s(e,r))||i);return o>3&&i&&Object.defineProperty(e,r,i),i};const qy={success:{backgroundColor:"success-100",iconColor:"success-100",icon:"checkmark"},error:{backgroundColor:"error-100",iconColor:"error-100",icon:"close"}};let Ws=class extends F{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=Nt.state.open,this.unsubscribe.push(Nt.subscribeKey("open",e=>{this.open=e,this.onOpen()}))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach(e=>e())}render(){const{message:e,variant:r}=Nt.state,n=qy[r];return k`
      <wui-snackbar
        message=${e}
        backgroundColor=${n.backgroundColor}
        iconColor=${n.iconColor}
        icon=${n.icon}
      ></wui-snackbar>
    `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout=setTimeout(()=>Nt.hide(),2500)):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};Ws.styles=Vy;_1([J()],Ws.prototype,"open",void 0);Ws=_1([U("w3m-snackbar")],Ws);let mf=!1;class Qy{constructor(e){this.initPromise=void 0,this.setIsConnected=r=>{Se.setIsConnected(r)},this.setCaipAddress=r=>{Se.setCaipAddress(r)},this.setBalance=(r,n)=>{Se.setBalance(r,n)},this.setProfileName=r=>{Se.setProfileName(r)},this.setProfileImage=r=>{Se.setProfileImage(r)},this.resetAccount=()=>{Se.resetAccount()},this.setCaipNetwork=r=>{Oe.setCaipNetwork(r)},this.getCaipNetwork=()=>Oe.state.caipNetwork,this.setRequestedCaipNetworks=r=>{Oe.setRequestedCaipNetworks(r)},this.getApprovedCaipNetworksData=()=>Oe.getApprovedCaipNetworksData(),this.resetNetwork=()=>{Oe.resetNetwork()},this.setConnectors=r=>{on.setConnectors(r)},this.resetWcConnection=()=>{ve.resetWcConnection()},this.fetchIdentity=r=>e3.fetchIdentity(r),this.setAddressExplorerUrl=r=>{Se.setAddressExplorerUrl(r)},this.initControllers(e),this.initOrContinue()}async open(e){await this.initOrContinue(),Ye.open(e)}async close(){await this.initOrContinue(),Ye.close()}getThemeMode(){return Ct.state.themeMode}getThemeVariables(){return Ct.state.themeVariables}setThemeMode(e){Ct.setThemeMode(e),$h(Ct.state.themeMode)}setThemeVariables(e){Ct.setThemeVariables(e),w3(Ct.state.themeVariables)}subscribeTheme(e){return Ct.subscribe(e)}getState(){return{...Mn.state}}subscribeState(e){return Mn.subscribe(e)}initControllers(e){Oe.setClient(e.networkControllerClient),Oe.setDefaultCaipNetwork(e.defaultChain),$e.setProjectId(e.projectId),$e.setIncludeWalletIds(e.includeWalletIds),$e.setExcludeWalletIds(e.excludeWalletIds),$e.setFeaturedWalletIds(e.featuredWalletIds),$e.setTokens(e.tokens),$e.setTermsConditionsUrl(e.termsConditionsUrl),$e.setPrivacyPolicyUrl(e.privacyPolicyUrl),$e.setCustomWallets(e.customWallets),ve.setClient(e.connectionControllerClient),le.setSdkVersion(e._sdkVersion),e.themeMode&&Ct.setThemeMode(e.themeMode),e.themeVariables&&Ct.setThemeVariables(e.themeVariables)}async initOrContinue(){return!this.initPromise&&!mf&&oe.isClient()&&(mf=!0,this.initPromise=new Promise(async e=>{await Promise.all([Ri(()=>import("./index.91945a29.js"),[],import.meta.url),Ri(()=>Promise.resolve().then(()=>Ay),void 0,import.meta.url)]);const r=document.createElement("w3m-modal");document.body.insertAdjacentElement("beforeend",r),e()})),this.initPromise}}const Zr="walletConnect",vu="injected",Au="coinbaseWallet",Cu="safe",xu="ledger",qt="eip155",Ky="wallet_addEthereumChain",Zy="wagmi.wallet",S1="3.0.0-beta.4",tl={1:"692ed6ba-e569-459a-556a-776476829e00",42161:"600a9a04-c1b9-42ca-6785-9b4b6ff85200",43114:"30c46e53-e989-45fb-4549-be3bd4eb3b00",56:"93564157-2e8e-4ce7-81df-b264dbee9b00",250:"06b26297-fe0c-4733-5d6b-ffa5498aac00",10:"ab9c186a-c52f-464b-2906-ca59d760a400",137:"41d04d42-da3b-4453-8506-668cc0727900",100:"02b53f6a-e3d4-479e-1cb4-21178987d100",9001:"f926ff41-260d-4028-635e-91913fc28e00",324:"b310f07f-4ef7-49f3-7073-2a0a39685800",314:"5a73b3dd-af74-424e-cae0-0de859ee9400",4689:"34e68754-e536-40da-c153-6ef2e7188a00",1088:"3897a66d-40b9-4833-162f-a2c90531c900",1284:"161038da-44ae-4ec7-1208-0ea569454b00",1285:"f1d73bb6-5450-4e18-38f7-fb6484264a00",7777777:"845c60df-d429-4991-e687-91ae45791600",42220:"ab781bbc-ccc6-418d-d32d-789b15da1f00",8453:"7289c336-3981-4081-c5f4-efc26ac64a00",1313161554:"3ff73439-a619-4894-9262-4470c773a100"},Yy={[Au]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[Cu]:"461db637-8616-43ce-035a-d89b8a1d5800",[xu]:"54a1aa77-d202-4f8d-0fb2-5d2bb6db0300",[Zr]:"ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400",[vu]:"07ba87ed-43aa-4adf-4540-9e6a2b9cae00"},Jy={[Au]:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",[Cu]:"225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f",[xu]:"19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927"},Xy={[vu]:"Browser Wallet",[Zr]:"WalletConnect",[Au]:"Coinbase",[xu]:"Ledger",[Cu]:"Safe"},e6={[vu]:"INJECTED",[Zr]:"WALLET_CONNECT"};function t6(t){if(t)return{id:`${qt}:${t.id}`,name:t.name,imageId:tl[t.id]}}function r6(t){if(!t)return;const e={};return Object.entries(t).forEach(([r,n])=>{e[`${qt}:${r}`]=n}),e}function mi(t){return t?Number(t.split(":")[1]):void 0}class n6 extends Qy{constructor(e){const{wagmiConfig:r,chains:n,defaultChain:o,tokens:i,chainImages:s,_sdkVersion:a,...c}=e;if(!r)throw new Error("web3modal:constructor - wagmiConfig is undefined");if(!c.projectId)throw new Error("web3modal:constructor - projectId is undefined");if(!r.connectors.find(p=>p.id===Zr))throw new Error("web3modal:constructor - WalletConnectConnector is required");const l={switchCaipNetwork:async p=>{const g=mi(p==null?void 0:p.id);g&&await Fm({chainId:g})},async getApprovedCaipNetworksData(){var g,w,b,A;const p=localStorage.getItem(Zy);if(p!=null&&p.includes(Zr)){const y=r.connectors.find(E=>E.id===Zr);if(!y)throw new Error("networkControllerClient:getApprovedCaipNetworks - connector is undefined");const m=(w=(g=(await y.getProvider()).signer)==null?void 0:g.session)==null?void 0:w.namespaces,_=(b=m==null?void 0:m[qt])==null?void 0:b.methods,x=(A=m==null?void 0:m[qt])==null?void 0:A.chains;return{supportsAllNetworks:_==null?void 0:_.includes(Ky),approvedCaipNetworkIds:x}}return{approvedCaipNetworkIds:void 0,supportsAllNetworks:!0}}},d={connectWalletConnect:async p=>{var b;const g=r.connectors.find(A=>A.id===Zr);if(!g)throw new Error("connectionControllerClient:getWalletConnectUri - connector is undefined");g.on("message",A=>{A.type==="display_uri"&&(p(A.data),g.removeAllListeners())});const w=mi((b=this.getCaipNetwork())==null?void 0:b.id);await M0({connector:g,chainId:w})},connectExternal:async p=>{var b;const g=r.connectors.find(A=>A.id===p);if(!g)throw new Error("connectionControllerClient:connectExternal - connector is undefined");const w=mi((b=this.getCaipNetwork())==null?void 0:b.id);await M0({connector:g,chainId:w})},checkInjectedInstalled(p){return window!=null&&window.ethereum?p?p.some(g=>{var w;return!!((w=window.ethereum)!=null&&w[String(g)])}):!!window.ethereum:!1},disconnect:Om};super({networkControllerClient:l,connectionControllerClient:d,defaultChain:t6(o),tokens:r6(i),_sdkVersion:a??`html-wagmi-${S1}`,...c}),this.hasSyncedConnectedAccount=!1,this.options=void 0,this.options=e,this.syncRequestedNetworks(n,s),this.syncConnectors(r.connectors),Lm(()=>this.syncAccount()),jm(()=>this.syncNetwork(s))}getState(){const e=super.getState();return{...e,selectedNetworkId:mi(e.selectedNetworkId)}}subscribeState(e){return super.subscribeState(r=>e({...r,selectedNetworkId:mi(r.selectedNetworkId)}))}syncRequestedNetworks(e,r){const n=e==null?void 0:e.map(o=>({id:`${qt}:${o.id}`,name:o.name,imageId:tl[o.id],imageUrl:r==null?void 0:r[o.id]}));this.setRequestedCaipNetworks(n??[])}async syncAccount(){const{address:e,isConnected:r}=Mc(),{chain:n}=$c();if(this.resetAccount(),r&&e&&n){const o=`${qt}:${n.id}:${e}`;this.setIsConnected(r),this.setCaipAddress(o),await Promise.all([this.syncProfile(e),this.syncBalance(e,n),this.getApprovedCaipNetworksData()]),this.hasSyncedConnectedAccount=!0}else!r&&this.hasSyncedConnectedAccount&&(this.resetWcConnection(),this.resetNetwork())}async syncNetwork(e){var i,s;const{address:r,isConnected:n}=Mc(),{chain:o}=$c();if(o){const a=String(o.id),c=`${qt}:${a}`;if(this.setCaipNetwork({id:c,name:o.name,imageId:tl[o.id],imageUrl:e==null?void 0:e[o.id]}),n&&r){const l=`${qt}:${o.id}:${r}`;if(this.setCaipAddress(l),(s=(i=o.blockExplorers)==null?void 0:i.default)!=null&&s.url){const d=`${o.blockExplorers.default.url}/address/${r}`;this.setAddressExplorerUrl(d)}this.hasSyncedConnectedAccount&&await this.syncBalance(r,o)}}}async syncProfile(e){try{const{name:r,avatar:n}=await this.fetchIdentity({caipChainId:`${qt}:${Di.id}`,address:e});this.setProfileName(r),this.setProfileImage(n)}catch{const r=await zm({address:e,chainId:Di.id});if(r){this.setProfileName(r);const n=await Wm({name:r,chainId:Di.id});n&&this.setProfileImage(n)}}}async syncBalance(e,r){var o,i,s;const n=await Um({address:e,chainId:r.id,token:(s=(i=(o=this.options)==null?void 0:o.tokens)==null?void 0:i[r.id])==null?void 0:s.address});this.setBalance(n.formatted,n.symbol)}syncConnectors(e){const r=e.map(({id:n,name:o})=>({id:n,explorerId:Jy[n],imageId:Yy[n],name:Xy[n]??o,type:e6[n]??"EXTERNAL"}));this.setConnectors(r??[])}}var D1={},_a={};_a.byteLength=s6;_a.toByteArray=c6;_a.fromByteArray=f6;var Qt=[],xt=[],i6=typeof Uint8Array<"u"?Uint8Array:Array,ac="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(var vn=0,o6=ac.length;vn<o6;++vn)Qt[vn]=ac[vn],xt[ac.charCodeAt(vn)]=vn;xt["-".charCodeAt(0)]=62;xt["_".charCodeAt(0)]=63;function P1(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var r=t.indexOf("=");r===-1&&(r=e);var n=r===e?0:4-r%4;return[r,n]}function s6(t){var e=P1(t),r=e[0],n=e[1];return(r+n)*3/4-n}function a6(t,e,r){return(e+r)*3/4-r}function c6(t){var e,r=P1(t),n=r[0],o=r[1],i=new i6(a6(t,n,o)),s=0,a=o>0?n-4:n,c;for(c=0;c<a;c+=4)e=xt[t.charCodeAt(c)]<<18|xt[t.charCodeAt(c+1)]<<12|xt[t.charCodeAt(c+2)]<<6|xt[t.charCodeAt(c+3)],i[s++]=e>>16&255,i[s++]=e>>8&255,i[s++]=e&255;return o===2&&(e=xt[t.charCodeAt(c)]<<2|xt[t.charCodeAt(c+1)]>>4,i[s++]=e&255),o===1&&(e=xt[t.charCodeAt(c)]<<10|xt[t.charCodeAt(c+1)]<<4|xt[t.charCodeAt(c+2)]>>2,i[s++]=e>>8&255,i[s++]=e&255),i}function l6(t){return Qt[t>>18&63]+Qt[t>>12&63]+Qt[t>>6&63]+Qt[t&63]}function u6(t,e,r){for(var n,o=[],i=e;i<r;i+=3)n=(t[i]<<16&16711680)+(t[i+1]<<8&65280)+(t[i+2]&255),o.push(l6(n));return o.join("")}function f6(t){for(var e,r=t.length,n=r%3,o=[],i=16383,s=0,a=r-n;s<a;s+=i)o.push(u6(t,s,s+i>a?a:s+i));return n===1?(e=t[r-1],o.push(Qt[e>>2]+Qt[e<<4&63]+"==")):n===2&&(e=(t[r-2]<<8)+t[r-1],o.push(Qt[e>>10]+Qt[e>>4&63]+Qt[e<<2&63]+"=")),o.join("")}var Eu={};/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */Eu.read=function(t,e,r,n,o){var i,s,a=o*8-n-1,c=(1<<a)-1,l=c>>1,d=-7,p=r?o-1:0,g=r?-1:1,w=t[e+p];for(p+=g,i=w&(1<<-d)-1,w>>=-d,d+=a;d>0;i=i*256+t[e+p],p+=g,d-=8);for(s=i&(1<<-d)-1,i>>=-d,d+=n;d>0;s=s*256+t[e+p],p+=g,d-=8);if(i===0)i=1-l;else{if(i===c)return s?NaN:(w?-1:1)*(1/0);s=s+Math.pow(2,n),i=i-l}return(w?-1:1)*s*Math.pow(2,i-n)};Eu.write=function(t,e,r,n,o,i){var s,a,c,l=i*8-o-1,d=(1<<l)-1,p=d>>1,g=o===23?Math.pow(2,-24)-Math.pow(2,-77):0,w=n?0:i-1,b=n?1:-1,A=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(a=isNaN(e)?1:0,s=d):(s=Math.floor(Math.log(e)/Math.LN2),e*(c=Math.pow(2,-s))<1&&(s--,c*=2),s+p>=1?e+=g/c:e+=g*Math.pow(2,1-p),e*c>=2&&(s++,c/=2),s+p>=d?(a=0,s=d):s+p>=1?(a=(e*c-1)*Math.pow(2,o),s=s+p):(a=e*Math.pow(2,p-1)*Math.pow(2,o),s=0));o>=8;t[r+w]=a&255,w+=b,a/=256,o-=8);for(s=s<<o|a,l+=o;l>0;t[r+w]=s&255,w+=b,s/=256,l-=8);t[r+w-b]|=A*128};/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */(function(t){const e=_a,r=Eu,n=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;t.Buffer=a,t.SlowBuffer=m,t.INSPECT_MAX_BYTES=50;const o=2147483647;t.kMaxLength=o,a.TYPED_ARRAY_SUPPORT=i(),!a.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function i(){try{const v=new Uint8Array(1),f={foo:function(){return 42}};return Object.setPrototypeOf(f,Uint8Array.prototype),Object.setPrototypeOf(v,f),v.foo()===42}catch{return!1}}Object.defineProperty(a.prototype,"parent",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.buffer}}),Object.defineProperty(a.prototype,"offset",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.byteOffset}});function s(v){if(v>o)throw new RangeError('The value "'+v+'" is invalid for option "size"');const f=new Uint8Array(v);return Object.setPrototypeOf(f,a.prototype),f}function a(v,f,h){if(typeof v=="number"){if(typeof f=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return p(v)}return c(v,f,h)}a.poolSize=8192;function c(v,f,h){if(typeof v=="string")return g(v,f);if(ArrayBuffer.isView(v))return b(v);if(v==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof v);if(Ee(v,ArrayBuffer)||v&&Ee(v.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(Ee(v,SharedArrayBuffer)||v&&Ee(v.buffer,SharedArrayBuffer)))return A(v,f,h);if(typeof v=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');const P=v.valueOf&&v.valueOf();if(P!=null&&P!==v)return a.from(P,f,h);const I=y(v);if(I)return I;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof v[Symbol.toPrimitive]=="function")return a.from(v[Symbol.toPrimitive]("string"),f,h);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof v)}a.from=function(v,f,h){return c(v,f,h)},Object.setPrototypeOf(a.prototype,Uint8Array.prototype),Object.setPrototypeOf(a,Uint8Array);function l(v){if(typeof v!="number")throw new TypeError('"size" argument must be of type number');if(v<0)throw new RangeError('The value "'+v+'" is invalid for option "size"')}function d(v,f,h){return l(v),v<=0?s(v):f!==void 0?typeof h=="string"?s(v).fill(f,h):s(v).fill(f):s(v)}a.alloc=function(v,f,h){return d(v,f,h)};function p(v){return l(v),s(v<0?0:S(v)|0)}a.allocUnsafe=function(v){return p(v)},a.allocUnsafeSlow=function(v){return p(v)};function g(v,f){if((typeof f!="string"||f==="")&&(f="utf8"),!a.isEncoding(f))throw new TypeError("Unknown encoding: "+f);const h=_(v,f)|0;let P=s(h);const I=P.write(v,f);return I!==h&&(P=P.slice(0,I)),P}function w(v){const f=v.length<0?0:S(v.length)|0,h=s(f);for(let P=0;P<f;P+=1)h[P]=v[P]&255;return h}function b(v){if(Ee(v,Uint8Array)){const f=new Uint8Array(v);return A(f.buffer,f.byteOffset,f.byteLength)}return w(v)}function A(v,f,h){if(f<0||v.byteLength<f)throw new RangeError('"offset" is outside of buffer bounds');if(v.byteLength<f+(h||0))throw new RangeError('"length" is outside of buffer bounds');let P;return f===void 0&&h===void 0?P=new Uint8Array(v):h===void 0?P=new Uint8Array(v,f):P=new Uint8Array(v,f,h),Object.setPrototypeOf(P,a.prototype),P}function y(v){if(a.isBuffer(v)){const f=S(v.length)|0,h=s(f);return h.length===0||v.copy(h,0,0,f),h}if(v.length!==void 0)return typeof v.length!="number"||Fe(v.length)?s(0):w(v);if(v.type==="Buffer"&&Array.isArray(v.data))return w(v.data)}function S(v){if(v>=o)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+o.toString(16)+" bytes");return v|0}function m(v){return+v!=v&&(v=0),a.alloc(+v)}a.isBuffer=function(f){return f!=null&&f._isBuffer===!0&&f!==a.prototype},a.compare=function(f,h){if(Ee(f,Uint8Array)&&(f=a.from(f,f.offset,f.byteLength)),Ee(h,Uint8Array)&&(h=a.from(h,h.offset,h.byteLength)),!a.isBuffer(f)||!a.isBuffer(h))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(f===h)return 0;let P=f.length,I=h.length;for(let O=0,N=Math.min(P,I);O<N;++O)if(f[O]!==h[O]){P=f[O],I=h[O];break}return P<I?-1:I<P?1:0},a.isEncoding=function(f){switch(String(f).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},a.concat=function(f,h){if(!Array.isArray(f))throw new TypeError('"list" argument must be an Array of Buffers');if(f.length===0)return a.alloc(0);let P;if(h===void 0)for(h=0,P=0;P<f.length;++P)h+=f[P].length;const I=a.allocUnsafe(h);let O=0;for(P=0;P<f.length;++P){let N=f[P];if(Ee(N,Uint8Array))O+N.length>I.length?(a.isBuffer(N)||(N=a.from(N)),N.copy(I,O)):Uint8Array.prototype.set.call(I,N,O);else if(a.isBuffer(N))N.copy(I,O);else throw new TypeError('"list" argument must be an Array of Buffers');O+=N.length}return I};function _(v,f){if(a.isBuffer(v))return v.length;if(ArrayBuffer.isView(v)||Ee(v,ArrayBuffer))return v.byteLength;if(typeof v!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof v);const h=v.length,P=arguments.length>2&&arguments[2]===!0;if(!P&&h===0)return 0;let I=!1;for(;;)switch(f){case"ascii":case"latin1":case"binary":return h;case"utf8":case"utf-8":return br(v).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return h*2;case"hex":return h>>>1;case"base64":return We(v).length;default:if(I)return P?-1:br(v).length;f=(""+f).toLowerCase(),I=!0}}a.byteLength=_;function x(v,f,h){let P=!1;if((f===void 0||f<0)&&(f=0),f>this.length||((h===void 0||h>this.length)&&(h=this.length),h<=0)||(h>>>=0,f>>>=0,h<=f))return"";for(v||(v="utf8");;)switch(v){case"hex":return De(this,f,h);case"utf8":case"utf-8":return Q(this,f,h);case"ascii":return L(this,f,h);case"latin1":case"binary":return Z(this,f,h);case"base64":return G(this,f,h);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ke(this,f,h);default:if(P)throw new TypeError("Unknown encoding: "+v);v=(v+"").toLowerCase(),P=!0}}a.prototype._isBuffer=!0;function E(v,f,h){const P=v[f];v[f]=v[h],v[h]=P}a.prototype.swap16=function(){const f=this.length;if(f%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let h=0;h<f;h+=2)E(this,h,h+1);return this},a.prototype.swap32=function(){const f=this.length;if(f%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let h=0;h<f;h+=4)E(this,h,h+3),E(this,h+1,h+2);return this},a.prototype.swap64=function(){const f=this.length;if(f%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let h=0;h<f;h+=8)E(this,h,h+7),E(this,h+1,h+6),E(this,h+2,h+5),E(this,h+3,h+4);return this},a.prototype.toString=function(){const f=this.length;return f===0?"":arguments.length===0?Q(this,0,f):x.apply(this,arguments)},a.prototype.toLocaleString=a.prototype.toString,a.prototype.equals=function(f){if(!a.isBuffer(f))throw new TypeError("Argument must be a Buffer");return this===f?!0:a.compare(this,f)===0},a.prototype.inspect=function(){let f="";const h=t.INSPECT_MAX_BYTES;return f=this.toString("hex",0,h).replace(/(.{2})/g,"$1 ").trim(),this.length>h&&(f+=" ... "),"<Buffer "+f+">"},n&&(a.prototype[n]=a.prototype.inspect),a.prototype.compare=function(f,h,P,I,O){if(Ee(f,Uint8Array)&&(f=a.from(f,f.offset,f.byteLength)),!a.isBuffer(f))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof f);if(h===void 0&&(h=0),P===void 0&&(P=f?f.length:0),I===void 0&&(I=0),O===void 0&&(O=this.length),h<0||P>f.length||I<0||O>this.length)throw new RangeError("out of range index");if(I>=O&&h>=P)return 0;if(I>=O)return-1;if(h>=P)return 1;if(h>>>=0,P>>>=0,I>>>=0,O>>>=0,this===f)return 0;let N=O-I,V=P-h;const se=Math.min(N,V),Be=this.slice(I,O),Ne=f.slice(h,P);for(let _e=0;_e<se;++_e)if(Be[_e]!==Ne[_e]){N=Be[_e],V=Ne[_e];break}return N<V?-1:V<N?1:0};function D(v,f,h,P,I){if(v.length===0)return-1;if(typeof h=="string"?(P=h,h=0):h>2147483647?h=2147483647:h<-2147483648&&(h=-2147483648),h=+h,Fe(h)&&(h=I?0:v.length-1),h<0&&(h=v.length+h),h>=v.length){if(I)return-1;h=v.length-1}else if(h<0)if(I)h=0;else return-1;if(typeof f=="string"&&(f=a.from(f,P)),a.isBuffer(f))return f.length===0?-1:u(v,f,h,P,I);if(typeof f=="number")return f=f&255,typeof Uint8Array.prototype.indexOf=="function"?I?Uint8Array.prototype.indexOf.call(v,f,h):Uint8Array.prototype.lastIndexOf.call(v,f,h):u(v,[f],h,P,I);throw new TypeError("val must be string, number or Buffer")}function u(v,f,h,P,I){let O=1,N=v.length,V=f.length;if(P!==void 0&&(P=String(P).toLowerCase(),P==="ucs2"||P==="ucs-2"||P==="utf16le"||P==="utf-16le")){if(v.length<2||f.length<2)return-1;O=2,N/=2,V/=2,h/=2}function se(Ne,_e){return O===1?Ne[_e]:Ne.readUInt16BE(_e*O)}let Be;if(I){let Ne=-1;for(Be=h;Be<N;Be++)if(se(v,Be)===se(f,Ne===-1?0:Be-Ne)){if(Ne===-1&&(Ne=Be),Be-Ne+1===V)return Ne*O}else Ne!==-1&&(Be-=Be-Ne),Ne=-1}else for(h+V>N&&(h=N-V),Be=h;Be>=0;Be--){let Ne=!0;for(let _e=0;_e<V;_e++)if(se(v,Be+_e)!==se(f,_e)){Ne=!1;break}if(Ne)return Be}return-1}a.prototype.includes=function(f,h,P){return this.indexOf(f,h,P)!==-1},a.prototype.indexOf=function(f,h,P){return D(this,f,h,P,!0)},a.prototype.lastIndexOf=function(f,h,P){return D(this,f,h,P,!1)};function C(v,f,h,P){h=Number(h)||0;const I=v.length-h;P?(P=Number(P),P>I&&(P=I)):P=I;const O=f.length;P>O/2&&(P=O/2);let N;for(N=0;N<P;++N){const V=parseInt(f.substr(N*2,2),16);if(Fe(V))return N;v[h+N]=V}return N}function T(v,f,h,P){return Me(br(f,v.length-h),v,h,P)}function B(v,f,h,P){return Me(hi(f),v,h,P)}function M(v,f,h,P){return Me(We(f),v,h,P)}function j(v,f,h,P){return Me(Ho(f,v.length-h),v,h,P)}a.prototype.write=function(f,h,P,I){if(h===void 0)I="utf8",P=this.length,h=0;else if(P===void 0&&typeof h=="string")I=h,P=this.length,h=0;else if(isFinite(h))h=h>>>0,isFinite(P)?(P=P>>>0,I===void 0&&(I="utf8")):(I=P,P=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");const O=this.length-h;if((P===void 0||P>O)&&(P=O),f.length>0&&(P<0||h<0)||h>this.length)throw new RangeError("Attempt to write outside buffer bounds");I||(I="utf8");let N=!1;for(;;)switch(I){case"hex":return C(this,f,h,P);case"utf8":case"utf-8":return T(this,f,h,P);case"ascii":case"latin1":case"binary":return B(this,f,h,P);case"base64":return M(this,f,h,P);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return j(this,f,h,P);default:if(N)throw new TypeError("Unknown encoding: "+I);I=(""+I).toLowerCase(),N=!0}},a.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function G(v,f,h){return f===0&&h===v.length?e.fromByteArray(v):e.fromByteArray(v.slice(f,h))}function Q(v,f,h){h=Math.min(v.length,h);const P=[];let I=f;for(;I<h;){const O=v[I];let N=null,V=O>239?4:O>223?3:O>191?2:1;if(I+V<=h){let se,Be,Ne,_e;switch(V){case 1:O<128&&(N=O);break;case 2:se=v[I+1],(se&192)===128&&(_e=(O&31)<<6|se&63,_e>127&&(N=_e));break;case 3:se=v[I+1],Be=v[I+2],(se&192)===128&&(Be&192)===128&&(_e=(O&15)<<12|(se&63)<<6|Be&63,_e>2047&&(_e<55296||_e>57343)&&(N=_e));break;case 4:se=v[I+1],Be=v[I+2],Ne=v[I+3],(se&192)===128&&(Be&192)===128&&(Ne&192)===128&&(_e=(O&15)<<18|(se&63)<<12|(Be&63)<<6|Ne&63,_e>65535&&_e<1114112&&(N=_e))}}N===null?(N=65533,V=1):N>65535&&(N-=65536,P.push(N>>>10&1023|55296),N=56320|N&1023),P.push(N),I+=V}return q(P)}const K=4096;function q(v){const f=v.length;if(f<=K)return String.fromCharCode.apply(String,v);let h="",P=0;for(;P<f;)h+=String.fromCharCode.apply(String,v.slice(P,P+=K));return h}function L(v,f,h){let P="";h=Math.min(v.length,h);for(let I=f;I<h;++I)P+=String.fromCharCode(v[I]&127);return P}function Z(v,f,h){let P="";h=Math.min(v.length,h);for(let I=f;I<h;++I)P+=String.fromCharCode(v[I]);return P}function De(v,f,h){const P=v.length;(!f||f<0)&&(f=0),(!h||h<0||h>P)&&(h=P);let I="";for(let O=f;O<h;++O)I+=Ge[v[O]];return I}function ke(v,f,h){const P=v.slice(f,h);let I="";for(let O=0;O<P.length-1;O+=2)I+=String.fromCharCode(P[O]+P[O+1]*256);return I}a.prototype.slice=function(f,h){const P=this.length;f=~~f,h=h===void 0?P:~~h,f<0?(f+=P,f<0&&(f=0)):f>P&&(f=P),h<0?(h+=P,h<0&&(h=0)):h>P&&(h=P),h<f&&(h=f);const I=this.subarray(f,h);return Object.setPrototypeOf(I,a.prototype),I};function re(v,f,h){if(v%1!==0||v<0)throw new RangeError("offset is not uint");if(v+f>h)throw new RangeError("Trying to access beyond buffer length")}a.prototype.readUintLE=a.prototype.readUIntLE=function(f,h,P){f=f>>>0,h=h>>>0,P||re(f,h,this.length);let I=this[f],O=1,N=0;for(;++N<h&&(O*=256);)I+=this[f+N]*O;return I},a.prototype.readUintBE=a.prototype.readUIntBE=function(f,h,P){f=f>>>0,h=h>>>0,P||re(f,h,this.length);let I=this[f+--h],O=1;for(;h>0&&(O*=256);)I+=this[f+--h]*O;return I},a.prototype.readUint8=a.prototype.readUInt8=function(f,h){return f=f>>>0,h||re(f,1,this.length),this[f]},a.prototype.readUint16LE=a.prototype.readUInt16LE=function(f,h){return f=f>>>0,h||re(f,2,this.length),this[f]|this[f+1]<<8},a.prototype.readUint16BE=a.prototype.readUInt16BE=function(f,h){return f=f>>>0,h||re(f,2,this.length),this[f]<<8|this[f+1]},a.prototype.readUint32LE=a.prototype.readUInt32LE=function(f,h){return f=f>>>0,h||re(f,4,this.length),(this[f]|this[f+1]<<8|this[f+2]<<16)+this[f+3]*16777216},a.prototype.readUint32BE=a.prototype.readUInt32BE=function(f,h){return f=f>>>0,h||re(f,4,this.length),this[f]*16777216+(this[f+1]<<16|this[f+2]<<8|this[f+3])},a.prototype.readBigUInt64LE=Ie(function(f){f=f>>>0,me(f,"offset");const h=this[f],P=this[f+7];(h===void 0||P===void 0)&&bt(f,this.length-8);const I=h+this[++f]*2**8+this[++f]*2**16+this[++f]*2**24,O=this[++f]+this[++f]*2**8+this[++f]*2**16+P*2**24;return BigInt(I)+(BigInt(O)<<BigInt(32))}),a.prototype.readBigUInt64BE=Ie(function(f){f=f>>>0,me(f,"offset");const h=this[f],P=this[f+7];(h===void 0||P===void 0)&&bt(f,this.length-8);const I=h*2**24+this[++f]*2**16+this[++f]*2**8+this[++f],O=this[++f]*2**24+this[++f]*2**16+this[++f]*2**8+P;return(BigInt(I)<<BigInt(32))+BigInt(O)}),a.prototype.readIntLE=function(f,h,P){f=f>>>0,h=h>>>0,P||re(f,h,this.length);let I=this[f],O=1,N=0;for(;++N<h&&(O*=256);)I+=this[f+N]*O;return O*=128,I>=O&&(I-=Math.pow(2,8*h)),I},a.prototype.readIntBE=function(f,h,P){f=f>>>0,h=h>>>0,P||re(f,h,this.length);let I=h,O=1,N=this[f+--I];for(;I>0&&(O*=256);)N+=this[f+--I]*O;return O*=128,N>=O&&(N-=Math.pow(2,8*h)),N},a.prototype.readInt8=function(f,h){return f=f>>>0,h||re(f,1,this.length),this[f]&128?(255-this[f]+1)*-1:this[f]},a.prototype.readInt16LE=function(f,h){f=f>>>0,h||re(f,2,this.length);const P=this[f]|this[f+1]<<8;return P&32768?P|4294901760:P},a.prototype.readInt16BE=function(f,h){f=f>>>0,h||re(f,2,this.length);const P=this[f+1]|this[f]<<8;return P&32768?P|4294901760:P},a.prototype.readInt32LE=function(f,h){return f=f>>>0,h||re(f,4,this.length),this[f]|this[f+1]<<8|this[f+2]<<16|this[f+3]<<24},a.prototype.readInt32BE=function(f,h){return f=f>>>0,h||re(f,4,this.length),this[f]<<24|this[f+1]<<16|this[f+2]<<8|this[f+3]},a.prototype.readBigInt64LE=Ie(function(f){f=f>>>0,me(f,"offset");const h=this[f],P=this[f+7];(h===void 0||P===void 0)&&bt(f,this.length-8);const I=this[f+4]+this[f+5]*2**8+this[f+6]*2**16+(P<<24);return(BigInt(I)<<BigInt(32))+BigInt(h+this[++f]*2**8+this[++f]*2**16+this[++f]*2**24)}),a.prototype.readBigInt64BE=Ie(function(f){f=f>>>0,me(f,"offset");const h=this[f],P=this[f+7];(h===void 0||P===void 0)&&bt(f,this.length-8);const I=(h<<24)+this[++f]*2**16+this[++f]*2**8+this[++f];return(BigInt(I)<<BigInt(32))+BigInt(this[++f]*2**24+this[++f]*2**16+this[++f]*2**8+P)}),a.prototype.readFloatLE=function(f,h){return f=f>>>0,h||re(f,4,this.length),r.read(this,f,!0,23,4)},a.prototype.readFloatBE=function(f,h){return f=f>>>0,h||re(f,4,this.length),r.read(this,f,!1,23,4)},a.prototype.readDoubleLE=function(f,h){return f=f>>>0,h||re(f,8,this.length),r.read(this,f,!0,52,8)},a.prototype.readDoubleBE=function(f,h){return f=f>>>0,h||re(f,8,this.length),r.read(this,f,!1,52,8)};function ce(v,f,h,P,I,O){if(!a.isBuffer(v))throw new TypeError('"buffer" argument must be a Buffer instance');if(f>I||f<O)throw new RangeError('"value" argument is out of bounds');if(h+P>v.length)throw new RangeError("Index out of range")}a.prototype.writeUintLE=a.prototype.writeUIntLE=function(f,h,P,I){if(f=+f,h=h>>>0,P=P>>>0,!I){const V=Math.pow(2,8*P)-1;ce(this,f,h,P,V,0)}let O=1,N=0;for(this[h]=f&255;++N<P&&(O*=256);)this[h+N]=f/O&255;return h+P},a.prototype.writeUintBE=a.prototype.writeUIntBE=function(f,h,P,I){if(f=+f,h=h>>>0,P=P>>>0,!I){const V=Math.pow(2,8*P)-1;ce(this,f,h,P,V,0)}let O=P-1,N=1;for(this[h+O]=f&255;--O>=0&&(N*=256);)this[h+O]=f/N&255;return h+P},a.prototype.writeUint8=a.prototype.writeUInt8=function(f,h,P){return f=+f,h=h>>>0,P||ce(this,f,h,1,255,0),this[h]=f&255,h+1},a.prototype.writeUint16LE=a.prototype.writeUInt16LE=function(f,h,P){return f=+f,h=h>>>0,P||ce(this,f,h,2,65535,0),this[h]=f&255,this[h+1]=f>>>8,h+2},a.prototype.writeUint16BE=a.prototype.writeUInt16BE=function(f,h,P){return f=+f,h=h>>>0,P||ce(this,f,h,2,65535,0),this[h]=f>>>8,this[h+1]=f&255,h+2},a.prototype.writeUint32LE=a.prototype.writeUInt32LE=function(f,h,P){return f=+f,h=h>>>0,P||ce(this,f,h,4,4294967295,0),this[h+3]=f>>>24,this[h+2]=f>>>16,this[h+1]=f>>>8,this[h]=f&255,h+4},a.prototype.writeUint32BE=a.prototype.writeUInt32BE=function(f,h,P){return f=+f,h=h>>>0,P||ce(this,f,h,4,4294967295,0),this[h]=f>>>24,this[h+1]=f>>>16,this[h+2]=f>>>8,this[h+3]=f&255,h+4};function z(v,f,h,P,I){Ce(f,P,I,v,h,7);let O=Number(f&BigInt(4294967295));v[h++]=O,O=O>>8,v[h++]=O,O=O>>8,v[h++]=O,O=O>>8,v[h++]=O;let N=Number(f>>BigInt(32)&BigInt(4294967295));return v[h++]=N,N=N>>8,v[h++]=N,N=N>>8,v[h++]=N,N=N>>8,v[h++]=N,h}function ee(v,f,h,P,I){Ce(f,P,I,v,h,7);let O=Number(f&BigInt(4294967295));v[h+7]=O,O=O>>8,v[h+6]=O,O=O>>8,v[h+5]=O,O=O>>8,v[h+4]=O;let N=Number(f>>BigInt(32)&BigInt(4294967295));return v[h+3]=N,N=N>>8,v[h+2]=N,N=N>>8,v[h+1]=N,N=N>>8,v[h]=N,h+8}a.prototype.writeBigUInt64LE=Ie(function(f,h=0){return z(this,f,h,BigInt(0),BigInt("0xffffffffffffffff"))}),a.prototype.writeBigUInt64BE=Ie(function(f,h=0){return ee(this,f,h,BigInt(0),BigInt("0xffffffffffffffff"))}),a.prototype.writeIntLE=function(f,h,P,I){if(f=+f,h=h>>>0,!I){const se=Math.pow(2,8*P-1);ce(this,f,h,P,se-1,-se)}let O=0,N=1,V=0;for(this[h]=f&255;++O<P&&(N*=256);)f<0&&V===0&&this[h+O-1]!==0&&(V=1),this[h+O]=(f/N>>0)-V&255;return h+P},a.prototype.writeIntBE=function(f,h,P,I){if(f=+f,h=h>>>0,!I){const se=Math.pow(2,8*P-1);ce(this,f,h,P,se-1,-se)}let O=P-1,N=1,V=0;for(this[h+O]=f&255;--O>=0&&(N*=256);)f<0&&V===0&&this[h+O+1]!==0&&(V=1),this[h+O]=(f/N>>0)-V&255;return h+P},a.prototype.writeInt8=function(f,h,P){return f=+f,h=h>>>0,P||ce(this,f,h,1,127,-128),f<0&&(f=255+f+1),this[h]=f&255,h+1},a.prototype.writeInt16LE=function(f,h,P){return f=+f,h=h>>>0,P||ce(this,f,h,2,32767,-32768),this[h]=f&255,this[h+1]=f>>>8,h+2},a.prototype.writeInt16BE=function(f,h,P){return f=+f,h=h>>>0,P||ce(this,f,h,2,32767,-32768),this[h]=f>>>8,this[h+1]=f&255,h+2},a.prototype.writeInt32LE=function(f,h,P){return f=+f,h=h>>>0,P||ce(this,f,h,4,2147483647,-2147483648),this[h]=f&255,this[h+1]=f>>>8,this[h+2]=f>>>16,this[h+3]=f>>>24,h+4},a.prototype.writeInt32BE=function(f,h,P){return f=+f,h=h>>>0,P||ce(this,f,h,4,2147483647,-2147483648),f<0&&(f=4294967295+f+1),this[h]=f>>>24,this[h+1]=f>>>16,this[h+2]=f>>>8,this[h+3]=f&255,h+4},a.prototype.writeBigInt64LE=Ie(function(f,h=0){return z(this,f,h,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),a.prototype.writeBigInt64BE=Ie(function(f,h=0){return ee(this,f,h,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function ue(v,f,h,P,I,O){if(h+P>v.length)throw new RangeError("Index out of range");if(h<0)throw new RangeError("Index out of range")}function pe(v,f,h,P,I){return f=+f,h=h>>>0,I||ue(v,f,h,4),r.write(v,f,h,P,23,4),h+4}a.prototype.writeFloatLE=function(f,h,P){return pe(this,f,h,!0,P)},a.prototype.writeFloatBE=function(f,h,P){return pe(this,f,h,!1,P)};function we(v,f,h,P,I){return f=+f,h=h>>>0,I||ue(v,f,h,8),r.write(v,f,h,P,52,8),h+8}a.prototype.writeDoubleLE=function(f,h,P){return we(this,f,h,!0,P)},a.prototype.writeDoubleBE=function(f,h,P){return we(this,f,h,!1,P)},a.prototype.copy=function(f,h,P,I){if(!a.isBuffer(f))throw new TypeError("argument should be a Buffer");if(P||(P=0),!I&&I!==0&&(I=this.length),h>=f.length&&(h=f.length),h||(h=0),I>0&&I<P&&(I=P),I===P||f.length===0||this.length===0)return 0;if(h<0)throw new RangeError("targetStart out of bounds");if(P<0||P>=this.length)throw new RangeError("Index out of range");if(I<0)throw new RangeError("sourceEnd out of bounds");I>this.length&&(I=this.length),f.length-h<I-P&&(I=f.length-h+P);const O=I-P;return this===f&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(h,P,I):Uint8Array.prototype.set.call(f,this.subarray(P,I),h),O},a.prototype.fill=function(f,h,P,I){if(typeof f=="string"){if(typeof h=="string"?(I=h,h=0,P=this.length):typeof P=="string"&&(I=P,P=this.length),I!==void 0&&typeof I!="string")throw new TypeError("encoding must be a string");if(typeof I=="string"&&!a.isEncoding(I))throw new TypeError("Unknown encoding: "+I);if(f.length===1){const N=f.charCodeAt(0);(I==="utf8"&&N<128||I==="latin1")&&(f=N)}}else typeof f=="number"?f=f&255:typeof f=="boolean"&&(f=Number(f));if(h<0||this.length<h||this.length<P)throw new RangeError("Out of range index");if(P<=h)return this;h=h>>>0,P=P===void 0?this.length:P>>>0,f||(f=0);let O;if(typeof f=="number")for(O=h;O<P;++O)this[O]=f;else{const N=a.isBuffer(f)?f:a.from(f,I),V=N.length;if(V===0)throw new TypeError('The value "'+f+'" is invalid for argument "value"');for(O=0;O<P-h;++O)this[O+h]=N[O%V]}return this};const fe={};function be(v,f,h){fe[v]=class extends h{constructor(){super(),Object.defineProperty(this,"message",{value:f.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${v}]`,this.stack,delete this.name}get code(){return v}set code(I){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:I,writable:!0})}toString(){return`${this.name} [${v}]: ${this.message}`}}}be("ERR_BUFFER_OUT_OF_BOUNDS",function(v){return v?`${v} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),be("ERR_INVALID_ARG_TYPE",function(v,f){return`The "${v}" argument must be of type number. Received type ${typeof f}`},TypeError),be("ERR_OUT_OF_RANGE",function(v,f,h){let P=`The value of "${v}" is out of range.`,I=h;return Number.isInteger(h)&&Math.abs(h)>2**32?I=ye(String(h)):typeof h=="bigint"&&(I=String(h),(h>BigInt(2)**BigInt(32)||h<-(BigInt(2)**BigInt(32)))&&(I=ye(I)),I+="n"),P+=` It must be ${f}. Received ${I}`,P},RangeError);function ye(v){let f="",h=v.length;const P=v[0]==="-"?1:0;for(;h>=P+4;h-=3)f=`_${v.slice(h-3,h)}${f}`;return`${v.slice(0,h)}${f}`}function Ae(v,f,h){me(f,"offset"),(v[f]===void 0||v[f+h]===void 0)&&bt(f,v.length-(h+1))}function Ce(v,f,h,P,I,O){if(v>h||v<f){const N=typeof f=="bigint"?"n":"";let V;throw O>3?f===0||f===BigInt(0)?V=`>= 0${N} and < 2${N} ** ${(O+1)*8}${N}`:V=`>= -(2${N} ** ${(O+1)*8-1}${N}) and < 2 ** ${(O+1)*8-1}${N}`:V=`>= ${f}${N} and <= ${h}${N}`,new fe.ERR_OUT_OF_RANGE("value",V,v)}Ae(P,I,O)}function me(v,f){if(typeof v!="number")throw new fe.ERR_INVALID_ARG_TYPE(f,"number",v)}function bt(v,f,h){throw Math.floor(v)!==v?(me(v,h),new fe.ERR_OUT_OF_RANGE(h||"offset","an integer",v)):f<0?new fe.ERR_BUFFER_OUT_OF_BOUNDS:new fe.ERR_OUT_OF_RANGE(h||"offset",`>= ${h?1:0} and <= ${f}`,v)}const wr=/[^+/0-9A-Za-z-_]/g;function Hr(v){if(v=v.split("=")[0],v=v.trim().replace(wr,""),v.length<2)return"";for(;v.length%4!==0;)v=v+"=";return v}function br(v,f){f=f||1/0;let h;const P=v.length;let I=null;const O=[];for(let N=0;N<P;++N){if(h=v.charCodeAt(N),h>55295&&h<57344){if(!I){if(h>56319){(f-=3)>-1&&O.push(239,191,189);continue}else if(N+1===P){(f-=3)>-1&&O.push(239,191,189);continue}I=h;continue}if(h<56320){(f-=3)>-1&&O.push(239,191,189),I=h;continue}h=(I-55296<<10|h-56320)+65536}else I&&(f-=3)>-1&&O.push(239,191,189);if(I=null,h<128){if((f-=1)<0)break;O.push(h)}else if(h<2048){if((f-=2)<0)break;O.push(h>>6|192,h&63|128)}else if(h<65536){if((f-=3)<0)break;O.push(h>>12|224,h>>6&63|128,h&63|128)}else if(h<1114112){if((f-=4)<0)break;O.push(h>>18|240,h>>12&63|128,h>>6&63|128,h&63|128)}else throw new Error("Invalid code point")}return O}function hi(v){const f=[];for(let h=0;h<v.length;++h)f.push(v.charCodeAt(h)&255);return f}function Ho(v,f){let h,P,I;const O=[];for(let N=0;N<v.length&&!((f-=2)<0);++N)h=v.charCodeAt(N),P=h>>8,I=h%256,O.push(I),O.push(P);return O}function We(v){return e.toByteArray(Hr(v))}function Me(v,f,h,P){let I;for(I=0;I<P&&!(I+h>=f.length||I>=v.length);++I)f[I+h]=v[I];return I}function Ee(v,f){return v instanceof f||v!=null&&v.constructor!=null&&v.constructor.name!=null&&v.constructor.name===f.name}function Fe(v){return v!==v}const Ge=function(){const v="0123456789abcdef",f=new Array(256);for(let h=0;h<16;++h){const P=h*16;for(let I=0;I<16;++I)f[P+I]=v[h]+v[I]}return f}();function Ie(v){return typeof BigInt>"u"?Ve:v}function Ve(){throw new Error("BigInt not supported")}})(D1);var Xf;typeof window<"u"&&(window.Buffer||(window.Buffer=D1.Buffer),window.global||(window.global=window),window.process||(window.process={}),(Xf=window.process)!=null&&Xf.env||(window.process={env:{}}));var _i,_n,d6=class extends Sl{constructor({chains:t,options:e}){super({chains:t,options:{reloadOnDisconnect:!1,...e}}),this.id="coinbaseWallet",this.name="Coinbase Wallet",this.ready=!0,ut(this,_i,void 0),ut(this,_n,void 0),this.onAccountsChanged=r=>{r.length===0?this.emit("disconnect"):this.emit("change",{account:$t(r[0])})},this.onChainChanged=r=>{const n=hs(r),o=this.isChainUnsupported(n);this.emit("change",{chain:{id:n,unsupported:o}})},this.onDisconnect=()=>{this.emit("disconnect")}}async connect({chainId:t}={}){try{const e=await this.getProvider();e.on("accountsChanged",this.onAccountsChanged),e.on("chainChanged",this.onChainChanged),e.on("disconnect",this.onDisconnect),this.emit("message",{type:"connecting"});const r=await e.enable(),n=$t(r[0]);let o=await this.getChainId(),i=this.isChainUnsupported(o);return t&&o!==t&&(o=(await this.switchChain(t)).id,i=this.isChainUnsupported(o)),{account:n,chain:{id:o,unsupported:i}}}catch(e){throw/(user closed modal|accounts received is empty)/i.test(e.message)?new dt(e):e}}async disconnect(){if(!xe(this,_n))return;const t=await this.getProvider();t.removeListener("accountsChanged",this.onAccountsChanged),t.removeListener("chainChanged",this.onChainChanged),t.removeListener("disconnect",this.onDisconnect),t.disconnect(),t.close()}async getAccount(){const e=await(await this.getProvider()).request({method:"eth_accounts"});return $t(e[0])}async getChainId(){const t=await this.getProvider();return hs(t.chainId)}async getProvider(){var t;if(!xe(this,_n)){let e=(await Ri(()=>import("./index.55c88adb.js").then(s=>s.i),["./index.55c88adb.js","./events.3c6e9eb7.js"],import.meta.url)).default;typeof e!="function"&&typeof e.default=="function"&&(e=e.default),$i(this,_i,new e(this.options));const r=(t=xe(this,_i).walletExtension)==null?void 0:t.getChainId(),n=this.chains.find(s=>this.options.chainId?s.id===this.options.chainId:s.id===r)||this.chains[0],o=this.options.chainId||(n==null?void 0:n.id),i=this.options.jsonRpcUrl||(n==null?void 0:n.rpcUrls.default.http[0]);$i(this,_n,xe(this,_i).makeWeb3Provider(i,o))}return xe(this,_n)}async getWalletClient({chainId:t}={}){const[e,r]=await Promise.all([this.getProvider(),this.getAccount()]),n=this.chains.find(o=>o.id===t);if(!e)throw new Error("provider is required.");return Yl({account:r,chain:n,transport:Vl(e)})}async isAuthorized(){try{return!!await this.getAccount()}catch{return!1}}async switchChain(t){var n;const e=await this.getProvider(),r=ne(t);try{return await e.request({method:"wallet_switchEthereumChain",params:[{chainId:r}]}),this.chains.find(o=>o.id===t)??{id:t,name:`Chain ${r}`,network:`${r}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpcUrls:{default:{http:[""]},public:{http:[""]}}}}catch(o){const i=this.chains.find(s=>s.id===t);if(!i)throw new gd({chainId:t,connectorId:this.id});if(o.code===4902)try{return await e.request({method:"wallet_addEthereumChain",params:[{chainId:r,chainName:i.name,nativeCurrency:i.nativeCurrency,rpcUrls:[((n=i.rpcUrls.public)==null?void 0:n.http[0])??""],blockExplorerUrls:this.getBlockExplorerUrls(i)}]}),i}catch(s){throw new dt(s)}throw new lr(o)}}async watchAsset({address:t,decimals:e=18,image:r,symbol:n}){return(await this.getProvider()).request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:t,decimals:e,image:r,symbol:n}}})}};_i=new WeakMap;_n=new WeakMap;var _u={},Sa={},ie={},I1={};(function(t){Object.defineProperty(t,"__esModule",{value:!0});function e(a,c){var l=a>>>16&65535,d=a&65535,p=c>>>16&65535,g=c&65535;return d*g+(l*g+d*p<<16>>>0)|0}t.mul=Math.imul||e;function r(a,c){return a+c|0}t.add=r;function n(a,c){return a-c|0}t.sub=n;function o(a,c){return a<<c|a>>>32-c}t.rotl=o;function i(a,c){return a<<32-c|a>>>c}t.rotr=i;function s(a){return typeof a=="number"&&isFinite(a)&&Math.floor(a)===a}t.isInteger=Number.isInteger||s,t.MAX_SAFE_INTEGER=9007199254740991,t.isSafeInteger=function(a){return t.isInteger(a)&&a>=-t.MAX_SAFE_INTEGER&&a<=t.MAX_SAFE_INTEGER}})(I1);Object.defineProperty(ie,"__esModule",{value:!0});var T1=I1;function h6(t,e){return e===void 0&&(e=0),(t[e+0]<<8|t[e+1])<<16>>16}ie.readInt16BE=h6;function p6(t,e){return e===void 0&&(e=0),(t[e+0]<<8|t[e+1])>>>0}ie.readUint16BE=p6;function g6(t,e){return e===void 0&&(e=0),(t[e+1]<<8|t[e])<<16>>16}ie.readInt16LE=g6;function w6(t,e){return e===void 0&&(e=0),(t[e+1]<<8|t[e])>>>0}ie.readUint16LE=w6;function B1(t,e,r){return e===void 0&&(e=new Uint8Array(2)),r===void 0&&(r=0),e[r+0]=t>>>8,e[r+1]=t>>>0,e}ie.writeUint16BE=B1;ie.writeInt16BE=B1;function O1(t,e,r){return e===void 0&&(e=new Uint8Array(2)),r===void 0&&(r=0),e[r+0]=t>>>0,e[r+1]=t>>>8,e}ie.writeUint16LE=O1;ie.writeInt16LE=O1;function rl(t,e){return e===void 0&&(e=0),t[e]<<24|t[e+1]<<16|t[e+2]<<8|t[e+3]}ie.readInt32BE=rl;function nl(t,e){return e===void 0&&(e=0),(t[e]<<24|t[e+1]<<16|t[e+2]<<8|t[e+3])>>>0}ie.readUint32BE=nl;function il(t,e){return e===void 0&&(e=0),t[e+3]<<24|t[e+2]<<16|t[e+1]<<8|t[e]}ie.readInt32LE=il;function ol(t,e){return e===void 0&&(e=0),(t[e+3]<<24|t[e+2]<<16|t[e+1]<<8|t[e])>>>0}ie.readUint32LE=ol;function zs(t,e,r){return e===void 0&&(e=new Uint8Array(4)),r===void 0&&(r=0),e[r+0]=t>>>24,e[r+1]=t>>>16,e[r+2]=t>>>8,e[r+3]=t>>>0,e}ie.writeUint32BE=zs;ie.writeInt32BE=zs;function Hs(t,e,r){return e===void 0&&(e=new Uint8Array(4)),r===void 0&&(r=0),e[r+0]=t>>>0,e[r+1]=t>>>8,e[r+2]=t>>>16,e[r+3]=t>>>24,e}ie.writeUint32LE=Hs;ie.writeInt32LE=Hs;function b6(t,e){e===void 0&&(e=0);var r=rl(t,e),n=rl(t,e+4);return r*4294967296+n-(n>>31)*4294967296}ie.readInt64BE=b6;function m6(t,e){e===void 0&&(e=0);var r=nl(t,e),n=nl(t,e+4);return r*4294967296+n}ie.readUint64BE=m6;function y6(t,e){e===void 0&&(e=0);var r=il(t,e),n=il(t,e+4);return n*4294967296+r-(r>>31)*4294967296}ie.readInt64LE=y6;function v6(t,e){e===void 0&&(e=0);var r=ol(t,e),n=ol(t,e+4);return n*4294967296+r}ie.readUint64LE=v6;function k1(t,e,r){return e===void 0&&(e=new Uint8Array(8)),r===void 0&&(r=0),zs(t/4294967296>>>0,e,r),zs(t>>>0,e,r+4),e}ie.writeUint64BE=k1;ie.writeInt64BE=k1;function R1(t,e,r){return e===void 0&&(e=new Uint8Array(8)),r===void 0&&(r=0),Hs(t>>>0,e,r),Hs(t/4294967296>>>0,e,r+4),e}ie.writeUint64LE=R1;ie.writeInt64LE=R1;function A6(t,e,r){if(r===void 0&&(r=0),t%8!==0)throw new Error("readUintBE supports only bitLengths divisible by 8");if(t/8>e.length-r)throw new Error("readUintBE: array is too short for the given bitLength");for(var n=0,o=1,i=t/8+r-1;i>=r;i--)n+=e[i]*o,o*=256;return n}ie.readUintBE=A6;function C6(t,e,r){if(r===void 0&&(r=0),t%8!==0)throw new Error("readUintLE supports only bitLengths divisible by 8");if(t/8>e.length-r)throw new Error("readUintLE: array is too short for the given bitLength");for(var n=0,o=1,i=r;i<r+t/8;i++)n+=e[i]*o,o*=256;return n}ie.readUintLE=C6;function x6(t,e,r,n){if(r===void 0&&(r=new Uint8Array(t/8)),n===void 0&&(n=0),t%8!==0)throw new Error("writeUintBE supports only bitLengths divisible by 8");if(!T1.isSafeInteger(e))throw new Error("writeUintBE value must be an integer");for(var o=1,i=t/8+n-1;i>=n;i--)r[i]=e/o&255,o*=256;return r}ie.writeUintBE=x6;function E6(t,e,r,n){if(r===void 0&&(r=new Uint8Array(t/8)),n===void 0&&(n=0),t%8!==0)throw new Error("writeUintLE supports only bitLengths divisible by 8");if(!T1.isSafeInteger(e))throw new Error("writeUintLE value must be an integer");for(var o=1,i=n;i<n+t/8;i++)r[i]=e/o&255,o*=256;return r}ie.writeUintLE=E6;function _6(t,e){e===void 0&&(e=0);var r=new DataView(t.buffer,t.byteOffset,t.byteLength);return r.getFloat32(e)}ie.readFloat32BE=_6;function S6(t,e){e===void 0&&(e=0);var r=new DataView(t.buffer,t.byteOffset,t.byteLength);return r.getFloat32(e,!0)}ie.readFloat32LE=S6;function D6(t,e){e===void 0&&(e=0);var r=new DataView(t.buffer,t.byteOffset,t.byteLength);return r.getFloat64(e)}ie.readFloat64BE=D6;function P6(t,e){e===void 0&&(e=0);var r=new DataView(t.buffer,t.byteOffset,t.byteLength);return r.getFloat64(e,!0)}ie.readFloat64LE=P6;function I6(t,e,r){e===void 0&&(e=new Uint8Array(4)),r===void 0&&(r=0);var n=new DataView(e.buffer,e.byteOffset,e.byteLength);return n.setFloat32(r,t),e}ie.writeFloat32BE=I6;function T6(t,e,r){e===void 0&&(e=new Uint8Array(4)),r===void 0&&(r=0);var n=new DataView(e.buffer,e.byteOffset,e.byteLength);return n.setFloat32(r,t,!0),e}ie.writeFloat32LE=T6;function B6(t,e,r){e===void 0&&(e=new Uint8Array(8)),r===void 0&&(r=0);var n=new DataView(e.buffer,e.byteOffset,e.byteLength);return n.setFloat64(r,t),e}ie.writeFloat64BE=B6;function O6(t,e,r){e===void 0&&(e=new Uint8Array(8)),r===void 0&&(r=0);var n=new DataView(e.buffer,e.byteOffset,e.byteLength);return n.setFloat64(r,t,!0),e}ie.writeFloat64LE=O6;var Wt={};Object.defineProperty(Wt,"__esModule",{value:!0});function k6(t){for(var e=0;e<t.length;e++)t[e]=0;return t}Wt.wipe=k6;Object.defineProperty(Sa,"__esModule",{value:!0});var it=ie,sl=Wt,R6=20;function N6(t,e,r){for(var n=1634760805,o=857760878,i=2036477234,s=1797285236,a=r[3]<<24|r[2]<<16|r[1]<<8|r[0],c=r[7]<<24|r[6]<<16|r[5]<<8|r[4],l=r[11]<<24|r[10]<<16|r[9]<<8|r[8],d=r[15]<<24|r[14]<<16|r[13]<<8|r[12],p=r[19]<<24|r[18]<<16|r[17]<<8|r[16],g=r[23]<<24|r[22]<<16|r[21]<<8|r[20],w=r[27]<<24|r[26]<<16|r[25]<<8|r[24],b=r[31]<<24|r[30]<<16|r[29]<<8|r[28],A=e[3]<<24|e[2]<<16|e[1]<<8|e[0],y=e[7]<<24|e[6]<<16|e[5]<<8|e[4],S=e[11]<<24|e[10]<<16|e[9]<<8|e[8],m=e[15]<<24|e[14]<<16|e[13]<<8|e[12],_=n,x=o,E=i,D=s,u=a,C=c,T=l,B=d,M=p,j=g,G=w,Q=b,K=A,q=y,L=S,Z=m,De=0;De<R6;De+=2)_=_+u|0,K^=_,K=K>>>32-16|K<<16,M=M+K|0,u^=M,u=u>>>32-12|u<<12,x=x+C|0,q^=x,q=q>>>32-16|q<<16,j=j+q|0,C^=j,C=C>>>32-12|C<<12,E=E+T|0,L^=E,L=L>>>32-16|L<<16,G=G+L|0,T^=G,T=T>>>32-12|T<<12,D=D+B|0,Z^=D,Z=Z>>>32-16|Z<<16,Q=Q+Z|0,B^=Q,B=B>>>32-12|B<<12,E=E+T|0,L^=E,L=L>>>32-8|L<<8,G=G+L|0,T^=G,T=T>>>32-7|T<<7,D=D+B|0,Z^=D,Z=Z>>>32-8|Z<<8,Q=Q+Z|0,B^=Q,B=B>>>32-7|B<<7,x=x+C|0,q^=x,q=q>>>32-8|q<<8,j=j+q|0,C^=j,C=C>>>32-7|C<<7,_=_+u|0,K^=_,K=K>>>32-8|K<<8,M=M+K|0,u^=M,u=u>>>32-7|u<<7,_=_+C|0,Z^=_,Z=Z>>>32-16|Z<<16,G=G+Z|0,C^=G,C=C>>>32-12|C<<12,x=x+T|0,K^=x,K=K>>>32-16|K<<16,Q=Q+K|0,T^=Q,T=T>>>32-12|T<<12,E=E+B|0,q^=E,q=q>>>32-16|q<<16,M=M+q|0,B^=M,B=B>>>32-12|B<<12,D=D+u|0,L^=D,L=L>>>32-16|L<<16,j=j+L|0,u^=j,u=u>>>32-12|u<<12,E=E+B|0,q^=E,q=q>>>32-8|q<<8,M=M+q|0,B^=M,B=B>>>32-7|B<<7,D=D+u|0,L^=D,L=L>>>32-8|L<<8,j=j+L|0,u^=j,u=u>>>32-7|u<<7,x=x+T|0,K^=x,K=K>>>32-8|K<<8,Q=Q+K|0,T^=Q,T=T>>>32-7|T<<7,_=_+C|0,Z^=_,Z=Z>>>32-8|Z<<8,G=G+Z|0,C^=G,C=C>>>32-7|C<<7;it.writeUint32LE(_+n|0,t,0),it.writeUint32LE(x+o|0,t,4),it.writeUint32LE(E+i|0,t,8),it.writeUint32LE(D+s|0,t,12),it.writeUint32LE(u+a|0,t,16),it.writeUint32LE(C+c|0,t,20),it.writeUint32LE(T+l|0,t,24),it.writeUint32LE(B+d|0,t,28),it.writeUint32LE(M+p|0,t,32),it.writeUint32LE(j+g|0,t,36),it.writeUint32LE(G+w|0,t,40),it.writeUint32LE(Q+b|0,t,44),it.writeUint32LE(K+A|0,t,48),it.writeUint32LE(q+y|0,t,52),it.writeUint32LE(L+S|0,t,56),it.writeUint32LE(Z+m|0,t,60)}function N1(t,e,r,n,o){if(o===void 0&&(o=0),t.length!==32)throw new Error("ChaCha: key size must be 32 bytes");if(n.length<r.length)throw new Error("ChaCha: destination is shorter than source");var i,s;if(o===0){if(e.length!==8&&e.length!==12)throw new Error("ChaCha nonce must be 8 or 12 bytes");i=new Uint8Array(16),s=i.length-e.length,i.set(e,s)}else{if(e.length!==16)throw new Error("ChaCha nonce with counter must be 16 bytes");i=e,s=o}for(var a=new Uint8Array(64),c=0;c<r.length;c+=64){N6(a,i,t);for(var l=c;l<c+64&&l<r.length;l++)n[l]=r[l]^a[l-c];$6(i,0,s)}return sl.wipe(a),o===0&&sl.wipe(i),n}Sa.streamXOR=N1;function M6(t,e,r,n){return n===void 0&&(n=0),sl.wipe(r),N1(t,e,r,r,n)}Sa.stream=M6;function $6(t,e,r){for(var n=1;r--;)n=n+(t[e]&255)|0,t[e]=n&255,n>>>=8,e++;if(n>0)throw new Error("ChaCha: counter overflow")}var M1={},zr={};Object.defineProperty(zr,"__esModule",{value:!0});function U6(t,e,r){return~(t-1)&e|t-1&r}zr.select=U6;function F6(t,e){return(t|0)-(e|0)-1>>>31&1}zr.lessOrEqual=F6;function $1(t,e){if(t.length!==e.length)return 0;for(var r=0,n=0;n<t.length;n++)r|=t[n]^e[n];return 1&r-1>>>8}zr.compare=$1;function L6(t,e){return t.length===0||e.length===0?!1:$1(t,e)!==0}zr.equal=L6;(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e=zr,r=Wt;t.DIGEST_LENGTH=16;var n=function(){function s(a){this.digestLength=t.DIGEST_LENGTH,this._buffer=new Uint8Array(16),this._r=new Uint16Array(10),this._h=new Uint16Array(10),this._pad=new Uint16Array(8),this._leftover=0,this._fin=0,this._finished=!1;var c=a[0]|a[1]<<8;this._r[0]=c&8191;var l=a[2]|a[3]<<8;this._r[1]=(c>>>13|l<<3)&8191;var d=a[4]|a[5]<<8;this._r[2]=(l>>>10|d<<6)&7939;var p=a[6]|a[7]<<8;this._r[3]=(d>>>7|p<<9)&8191;var g=a[8]|a[9]<<8;this._r[4]=(p>>>4|g<<12)&255,this._r[5]=g>>>1&8190;var w=a[10]|a[11]<<8;this._r[6]=(g>>>14|w<<2)&8191;var b=a[12]|a[13]<<8;this._r[7]=(w>>>11|b<<5)&8065;var A=a[14]|a[15]<<8;this._r[8]=(b>>>8|A<<8)&8191,this._r[9]=A>>>5&127,this._pad[0]=a[16]|a[17]<<8,this._pad[1]=a[18]|a[19]<<8,this._pad[2]=a[20]|a[21]<<8,this._pad[3]=a[22]|a[23]<<8,this._pad[4]=a[24]|a[25]<<8,this._pad[5]=a[26]|a[27]<<8,this._pad[6]=a[28]|a[29]<<8,this._pad[7]=a[30]|a[31]<<8}return s.prototype._blocks=function(a,c,l){for(var d=this._fin?0:2048,p=this._h[0],g=this._h[1],w=this._h[2],b=this._h[3],A=this._h[4],y=this._h[5],S=this._h[6],m=this._h[7],_=this._h[8],x=this._h[9],E=this._r[0],D=this._r[1],u=this._r[2],C=this._r[3],T=this._r[4],B=this._r[5],M=this._r[6],j=this._r[7],G=this._r[8],Q=this._r[9];l>=16;){var K=a[c+0]|a[c+1]<<8;p+=K&8191;var q=a[c+2]|a[c+3]<<8;g+=(K>>>13|q<<3)&8191;var L=a[c+4]|a[c+5]<<8;w+=(q>>>10|L<<6)&8191;var Z=a[c+6]|a[c+7]<<8;b+=(L>>>7|Z<<9)&8191;var De=a[c+8]|a[c+9]<<8;A+=(Z>>>4|De<<12)&8191,y+=De>>>1&8191;var ke=a[c+10]|a[c+11]<<8;S+=(De>>>14|ke<<2)&8191;var re=a[c+12]|a[c+13]<<8;m+=(ke>>>11|re<<5)&8191;var ce=a[c+14]|a[c+15]<<8;_+=(re>>>8|ce<<8)&8191,x+=ce>>>5|d;var z=0,ee=z;ee+=p*E,ee+=g*(5*Q),ee+=w*(5*G),ee+=b*(5*j),ee+=A*(5*M),z=ee>>>13,ee&=8191,ee+=y*(5*B),ee+=S*(5*T),ee+=m*(5*C),ee+=_*(5*u),ee+=x*(5*D),z+=ee>>>13,ee&=8191;var ue=z;ue+=p*D,ue+=g*E,ue+=w*(5*Q),ue+=b*(5*G),ue+=A*(5*j),z=ue>>>13,ue&=8191,ue+=y*(5*M),ue+=S*(5*B),ue+=m*(5*T),ue+=_*(5*C),ue+=x*(5*u),z+=ue>>>13,ue&=8191;var pe=z;pe+=p*u,pe+=g*D,pe+=w*E,pe+=b*(5*Q),pe+=A*(5*G),z=pe>>>13,pe&=8191,pe+=y*(5*j),pe+=S*(5*M),pe+=m*(5*B),pe+=_*(5*T),pe+=x*(5*C),z+=pe>>>13,pe&=8191;var we=z;we+=p*C,we+=g*u,we+=w*D,we+=b*E,we+=A*(5*Q),z=we>>>13,we&=8191,we+=y*(5*G),we+=S*(5*j),we+=m*(5*M),we+=_*(5*B),we+=x*(5*T),z+=we>>>13,we&=8191;var fe=z;fe+=p*T,fe+=g*C,fe+=w*u,fe+=b*D,fe+=A*E,z=fe>>>13,fe&=8191,fe+=y*(5*Q),fe+=S*(5*G),fe+=m*(5*j),fe+=_*(5*M),fe+=x*(5*B),z+=fe>>>13,fe&=8191;var be=z;be+=p*B,be+=g*T,be+=w*C,be+=b*u,be+=A*D,z=be>>>13,be&=8191,be+=y*E,be+=S*(5*Q),be+=m*(5*G),be+=_*(5*j),be+=x*(5*M),z+=be>>>13,be&=8191;var ye=z;ye+=p*M,ye+=g*B,ye+=w*T,ye+=b*C,ye+=A*u,z=ye>>>13,ye&=8191,ye+=y*D,ye+=S*E,ye+=m*(5*Q),ye+=_*(5*G),ye+=x*(5*j),z+=ye>>>13,ye&=8191;var Ae=z;Ae+=p*j,Ae+=g*M,Ae+=w*B,Ae+=b*T,Ae+=A*C,z=Ae>>>13,Ae&=8191,Ae+=y*u,Ae+=S*D,Ae+=m*E,Ae+=_*(5*Q),Ae+=x*(5*G),z+=Ae>>>13,Ae&=8191;var Ce=z;Ce+=p*G,Ce+=g*j,Ce+=w*M,Ce+=b*B,Ce+=A*T,z=Ce>>>13,Ce&=8191,Ce+=y*C,Ce+=S*u,Ce+=m*D,Ce+=_*E,Ce+=x*(5*Q),z+=Ce>>>13,Ce&=8191;var me=z;me+=p*Q,me+=g*G,me+=w*j,me+=b*M,me+=A*B,z=me>>>13,me&=8191,me+=y*T,me+=S*C,me+=m*u,me+=_*D,me+=x*E,z+=me>>>13,me&=8191,z=(z<<2)+z|0,z=z+ee|0,ee=z&8191,z=z>>>13,ue+=z,p=ee,g=ue,w=pe,b=we,A=fe,y=be,S=ye,m=Ae,_=Ce,x=me,c+=16,l-=16}this._h[0]=p,this._h[1]=g,this._h[2]=w,this._h[3]=b,this._h[4]=A,this._h[5]=y,this._h[6]=S,this._h[7]=m,this._h[8]=_,this._h[9]=x},s.prototype.finish=function(a,c){c===void 0&&(c=0);var l=new Uint16Array(10),d,p,g,w;if(this._leftover){for(w=this._leftover,this._buffer[w++]=1;w<16;w++)this._buffer[w]=0;this._fin=1,this._blocks(this._buffer,0,16)}for(d=this._h[1]>>>13,this._h[1]&=8191,w=2;w<10;w++)this._h[w]+=d,d=this._h[w]>>>13,this._h[w]&=8191;for(this._h[0]+=d*5,d=this._h[0]>>>13,this._h[0]&=8191,this._h[1]+=d,d=this._h[1]>>>13,this._h[1]&=8191,this._h[2]+=d,l[0]=this._h[0]+5,d=l[0]>>>13,l[0]&=8191,w=1;w<10;w++)l[w]=this._h[w]+d,d=l[w]>>>13,l[w]&=8191;for(l[9]-=8192,p=(d^1)-1,w=0;w<10;w++)l[w]&=p;for(p=~p,w=0;w<10;w++)this._h[w]=this._h[w]&p|l[w];for(this._h[0]=(this._h[0]|this._h[1]<<13)&65535,this._h[1]=(this._h[1]>>>3|this._h[2]<<10)&65535,this._h[2]=(this._h[2]>>>6|this._h[3]<<7)&65535,this._h[3]=(this._h[3]>>>9|this._h[4]<<4)&65535,this._h[4]=(this._h[4]>>>12|this._h[5]<<1|this._h[6]<<14)&65535,this._h[5]=(this._h[6]>>>2|this._h[7]<<11)&65535,this._h[6]=(this._h[7]>>>5|this._h[8]<<8)&65535,this._h[7]=(this._h[8]>>>8|this._h[9]<<5)&65535,g=this._h[0]+this._pad[0],this._h[0]=g&65535,w=1;w<8;w++)g=(this._h[w]+this._pad[w]|0)+(g>>>16)|0,this._h[w]=g&65535;return a[c+0]=this._h[0]>>>0,a[c+1]=this._h[0]>>>8,a[c+2]=this._h[1]>>>0,a[c+3]=this._h[1]>>>8,a[c+4]=this._h[2]>>>0,a[c+5]=this._h[2]>>>8,a[c+6]=this._h[3]>>>0,a[c+7]=this._h[3]>>>8,a[c+8]=this._h[4]>>>0,a[c+9]=this._h[4]>>>8,a[c+10]=this._h[5]>>>0,a[c+11]=this._h[5]>>>8,a[c+12]=this._h[6]>>>0,a[c+13]=this._h[6]>>>8,a[c+14]=this._h[7]>>>0,a[c+15]=this._h[7]>>>8,this._finished=!0,this},s.prototype.update=function(a){var c=0,l=a.length,d;if(this._leftover){d=16-this._leftover,d>l&&(d=l);for(var p=0;p<d;p++)this._buffer[this._leftover+p]=a[c+p];if(l-=d,c+=d,this._leftover+=d,this._leftover<16)return this;this._blocks(this._buffer,0,16),this._leftover=0}if(l>=16&&(d=l-l%16,this._blocks(a,c,d),c+=d,l-=d),l){for(var p=0;p<l;p++)this._buffer[this._leftover+p]=a[c+p];this._leftover+=l}return this},s.prototype.digest=function(){if(this._finished)throw new Error("Poly1305 was finished");var a=new Uint8Array(16);return this.finish(a),a},s.prototype.clean=function(){return r.wipe(this._buffer),r.wipe(this._r),r.wipe(this._h),r.wipe(this._pad),this._leftover=0,this._fin=0,this._finished=!0,this},s}();t.Poly1305=n;function o(s,a){var c=new n(s);c.update(a);var l=c.digest();return c.clean(),l}t.oneTimeAuth=o;function i(s,a){return s.length!==t.DIGEST_LENGTH||a.length!==t.DIGEST_LENGTH?!1:e.equal(s,a)}t.equal=i})(M1);(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e=Sa,r=M1,n=Wt,o=ie,i=zr;t.KEY_LENGTH=32,t.NONCE_LENGTH=12,t.TAG_LENGTH=16;var s=new Uint8Array(16),a=function(){function c(l){if(this.nonceLength=t.NONCE_LENGTH,this.tagLength=t.TAG_LENGTH,l.length!==t.KEY_LENGTH)throw new Error("ChaCha20Poly1305 needs 32-byte key");this._key=new Uint8Array(l)}return c.prototype.seal=function(l,d,p,g){if(l.length>16)throw new Error("ChaCha20Poly1305: incorrect nonce length");var w=new Uint8Array(16);w.set(l,w.length-l.length);var b=new Uint8Array(32);e.stream(this._key,w,b,4);var A=d.length+this.tagLength,y;if(g){if(g.length!==A)throw new Error("ChaCha20Poly1305: incorrect destination length");y=g}else y=new Uint8Array(A);return e.streamXOR(this._key,w,d,y,4),this._authenticate(y.subarray(y.length-this.tagLength,y.length),b,y.subarray(0,y.length-this.tagLength),p),n.wipe(w),y},c.prototype.open=function(l,d,p,g){if(l.length>16)throw new Error("ChaCha20Poly1305: incorrect nonce length");if(d.length<this.tagLength)return null;var w=new Uint8Array(16);w.set(l,w.length-l.length);var b=new Uint8Array(32);e.stream(this._key,w,b,4);var A=new Uint8Array(this.tagLength);if(this._authenticate(A,b,d.subarray(0,d.length-this.tagLength),p),!i.equal(A,d.subarray(d.length-this.tagLength,d.length)))return null;var y=d.length-this.tagLength,S;if(g){if(g.length!==y)throw new Error("ChaCha20Poly1305: incorrect destination length");S=g}else S=new Uint8Array(y);return e.streamXOR(this._key,w,d.subarray(0,d.length-this.tagLength),S,4),n.wipe(w),S},c.prototype.clean=function(){return n.wipe(this._key),this},c.prototype._authenticate=function(l,d,p,g){var w=new r.Poly1305(d);g&&(w.update(g),g.length%16>0&&w.update(s.subarray(g.length%16))),w.update(p),p.length%16>0&&w.update(s.subarray(p.length%16));var b=new Uint8Array(8);g&&o.writeUint64LE(g.length,b),w.update(b),o.writeUint64LE(p.length,b),w.update(b);for(var A=w.digest(),y=0;y<A.length;y++)l[y]=A[y];w.clean(),n.wipe(A),n.wipe(b)},c}();t.ChaCha20Poly1305=a})(_u);var U1={},Lo={},Su={};Object.defineProperty(Su,"__esModule",{value:!0});function j6(t){return typeof t.saveState<"u"&&typeof t.restoreState<"u"&&typeof t.cleanSavedState<"u"}Su.isSerializableHash=j6;Object.defineProperty(Lo,"__esModule",{value:!0});var Gt=Su,W6=zr,z6=Wt,F1=function(){function t(e,r){this._finished=!1,this._inner=new e,this._outer=new e,this.blockSize=this._outer.blockSize,this.digestLength=this._outer.digestLength;var n=new Uint8Array(this.blockSize);r.length>this.blockSize?this._inner.update(r).finish(n).clean():n.set(r);for(var o=0;o<n.length;o++)n[o]^=54;this._inner.update(n);for(var o=0;o<n.length;o++)n[o]^=106;this._outer.update(n),Gt.isSerializableHash(this._inner)&&Gt.isSerializableHash(this._outer)&&(this._innerKeyedState=this._inner.saveState(),this._outerKeyedState=this._outer.saveState()),z6.wipe(n)}return t.prototype.reset=function(){if(!Gt.isSerializableHash(this._inner)||!Gt.isSerializableHash(this._outer))throw new Error("hmac: can't reset() because hash doesn't implement restoreState()");return this._inner.restoreState(this._innerKeyedState),this._outer.restoreState(this._outerKeyedState),this._finished=!1,this},t.prototype.clean=function(){Gt.isSerializableHash(this._inner)&&this._inner.cleanSavedState(this._innerKeyedState),Gt.isSerializableHash(this._outer)&&this._outer.cleanSavedState(this._outerKeyedState),this._inner.clean(),this._outer.clean()},t.prototype.update=function(e){return this._inner.update(e),this},t.prototype.finish=function(e){return this._finished?(this._outer.finish(e),this):(this._inner.finish(e),this._outer.update(e.subarray(0,this.digestLength)).finish(e),this._finished=!0,this)},t.prototype.digest=function(){var e=new Uint8Array(this.digestLength);return this.finish(e),e},t.prototype.saveState=function(){if(!Gt.isSerializableHash(this._inner))throw new Error("hmac: can't saveState() because hash doesn't implement it");return this._inner.saveState()},t.prototype.restoreState=function(e){if(!Gt.isSerializableHash(this._inner)||!Gt.isSerializableHash(this._outer))throw new Error("hmac: can't restoreState() because hash doesn't implement it");return this._inner.restoreState(e),this._outer.restoreState(this._outerKeyedState),this._finished=!1,this},t.prototype.cleanSavedState=function(e){if(!Gt.isSerializableHash(this._inner))throw new Error("hmac: can't cleanSavedState() because hash doesn't implement it");this._inner.cleanSavedState(e)},t}();Lo.HMAC=F1;function H6(t,e,r){var n=new F1(t,e);n.update(r);var o=n.digest();return n.clean(),o}Lo.hmac=H6;Lo.equal=W6.equal;Object.defineProperty(U1,"__esModule",{value:!0});var yf=Lo,vf=Wt,G6=function(){function t(e,r,n,o){n===void 0&&(n=new Uint8Array(0)),this._counter=new Uint8Array(1),this._hash=e,this._info=o;var i=yf.hmac(this._hash,n,r);this._hmac=new yf.HMAC(e,i),this._buffer=new Uint8Array(this._hmac.digestLength),this._bufpos=this._buffer.length}return t.prototype._fillBuffer=function(){this._counter[0]++;var e=this._counter[0];if(e===0)throw new Error("hkdf: cannot expand more");this._hmac.reset(),e>1&&this._hmac.update(this._buffer),this._info&&this._hmac.update(this._info),this._hmac.update(this._counter),this._hmac.finish(this._buffer),this._bufpos=0},t.prototype.expand=function(e){for(var r=new Uint8Array(e),n=0;n<r.length;n++)this._bufpos===this._buffer.length&&this._fillBuffer(),r[n]=this._buffer[this._bufpos++];return r},t.prototype.clean=function(){this._hmac.clean(),vf.wipe(this._buffer),vf.wipe(this._counter),this._bufpos=0},t}(),V6=U1.HKDF=G6,Da={},Pa={},Ia={};Object.defineProperty(Ia,"__esModule",{value:!0});Ia.BrowserRandomSource=void 0;const Af=65536;class q6{constructor(){this.isAvailable=!1,this.isInstantiated=!1;const e=typeof self<"u"?self.crypto||self.msCrypto:null;e&&e.getRandomValues!==void 0&&(this._crypto=e,this.isAvailable=!0,this.isInstantiated=!0)}randomBytes(e){if(!this.isAvailable||!this._crypto)throw new Error("Browser random byte generator is not available.");const r=new Uint8Array(e);for(let n=0;n<r.length;n+=Af)this._crypto.getRandomValues(r.subarray(n,n+Math.min(r.length-n,Af)));return r}}Ia.BrowserRandomSource=q6;function Q6(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Ta={};const K6={},Z6=Object.freeze(Object.defineProperty({__proto__:null,default:K6},Symbol.toStringTag,{value:"Module"})),Y6=wd(Z6);Object.defineProperty(Ta,"__esModule",{value:!0});Ta.NodeRandomSource=void 0;const J6=Wt;class X6{constructor(){if(this.isAvailable=!1,this.isInstantiated=!1,typeof Q6<"u"){const e=Y6;e&&e.randomBytes&&(this._crypto=e,this.isAvailable=!0,this.isInstantiated=!0)}}randomBytes(e){if(!this.isAvailable||!this._crypto)throw new Error("Node.js random byte generator is not available.");let r=this._crypto.randomBytes(e);if(r.length!==e)throw new Error("NodeRandomSource: got fewer bytes than requested");const n=new Uint8Array(e);for(let o=0;o<n.length;o++)n[o]=r[o];return(0,J6.wipe)(r),n}}Ta.NodeRandomSource=X6;Object.defineProperty(Pa,"__esModule",{value:!0});Pa.SystemRandomSource=void 0;const ev=Ia,tv=Ta;class rv{constructor(){if(this.isAvailable=!1,this.name="",this._source=new ev.BrowserRandomSource,this._source.isAvailable){this.isAvailable=!0,this.name="Browser";return}if(this._source=new tv.NodeRandomSource,this._source.isAvailable){this.isAvailable=!0,this.name="Node";return}}randomBytes(e){if(!this.isAvailable)throw new Error("System random byte generator is not available.");return this._source.randomBytes(e)}}Pa.SystemRandomSource=rv;(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.randomStringForEntropy=t.randomString=t.randomUint32=t.randomBytes=t.defaultRandomSource=void 0;const e=Pa,r=ie,n=Wt;t.defaultRandomSource=new e.SystemRandomSource;function o(l,d=t.defaultRandomSource){return d.randomBytes(l)}t.randomBytes=o;function i(l=t.defaultRandomSource){const d=o(4,l),p=(0,r.readUint32LE)(d);return(0,n.wipe)(d),p}t.randomUint32=i;const s="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";function a(l,d=s,p=t.defaultRandomSource){if(d.length<2)throw new Error("randomString charset is too short");if(d.length>256)throw new Error("randomString charset is too long");let g="";const w=d.length,b=256-256%w;for(;l>0;){const A=o(Math.ceil(l*256/b),p);for(let y=0;y<A.length&&l>0;y++){const S=A[y];S<b&&(g+=d.charAt(S%w),l--)}(0,n.wipe)(A)}return g}t.randomString=a;function c(l,d=s,p=t.defaultRandomSource){const g=Math.ceil(l/(Math.log(d.length)/Math.LN2));return a(g,d,p)}t.randomStringForEntropy=c})(Da);var Ba={};(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e=ie,r=Wt;t.DIGEST_LENGTH=32,t.BLOCK_SIZE=64;var n=function(){function a(){this.digestLength=t.DIGEST_LENGTH,this.blockSize=t.BLOCK_SIZE,this._state=new Int32Array(8),this._temp=new Int32Array(64),this._buffer=new Uint8Array(128),this._bufferLength=0,this._bytesHashed=0,this._finished=!1,this.reset()}return a.prototype._initState=function(){this._state[0]=1779033703,this._state[1]=3144134277,this._state[2]=1013904242,this._state[3]=2773480762,this._state[4]=1359893119,this._state[5]=2600822924,this._state[6]=528734635,this._state[7]=1541459225},a.prototype.reset=function(){return this._initState(),this._bufferLength=0,this._bytesHashed=0,this._finished=!1,this},a.prototype.clean=function(){r.wipe(this._buffer),r.wipe(this._temp),this.reset()},a.prototype.update=function(c,l){if(l===void 0&&(l=c.length),this._finished)throw new Error("SHA256: can't update because hash was finished.");var d=0;if(this._bytesHashed+=l,this._bufferLength>0){for(;this._bufferLength<this.blockSize&&l>0;)this._buffer[this._bufferLength++]=c[d++],l--;this._bufferLength===this.blockSize&&(i(this._temp,this._state,this._buffer,0,this.blockSize),this._bufferLength=0)}for(l>=this.blockSize&&(d=i(this._temp,this._state,c,d,l),l%=this.blockSize);l>0;)this._buffer[this._bufferLength++]=c[d++],l--;return this},a.prototype.finish=function(c){if(!this._finished){var l=this._bytesHashed,d=this._bufferLength,p=l/536870912|0,g=l<<3,w=l%64<56?64:128;this._buffer[d]=128;for(var b=d+1;b<w-8;b++)this._buffer[b]=0;e.writeUint32BE(p,this._buffer,w-8),e.writeUint32BE(g,this._buffer,w-4),i(this._temp,this._state,this._buffer,0,w),this._finished=!0}for(var b=0;b<this.digestLength/4;b++)e.writeUint32BE(this._state[b],c,b*4);return this},a.prototype.digest=function(){var c=new Uint8Array(this.digestLength);return this.finish(c),c},a.prototype.saveState=function(){if(this._finished)throw new Error("SHA256: cannot save finished state");return{state:new Int32Array(this._state),buffer:this._bufferLength>0?new Uint8Array(this._buffer):void 0,bufferLength:this._bufferLength,bytesHashed:this._bytesHashed}},a.prototype.restoreState=function(c){return this._state.set(c.state),this._bufferLength=c.bufferLength,c.buffer&&this._buffer.set(c.buffer),this._bytesHashed=c.bytesHashed,this._finished=!1,this},a.prototype.cleanSavedState=function(c){r.wipe(c.state),c.buffer&&r.wipe(c.buffer),c.bufferLength=0,c.bytesHashed=0},a}();t.SHA256=n;var o=new Int32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]);function i(a,c,l,d,p){for(;p>=64;){for(var g=c[0],w=c[1],b=c[2],A=c[3],y=c[4],S=c[5],m=c[6],_=c[7],x=0;x<16;x++){var E=d+x*4;a[x]=e.readUint32BE(l,E)}for(var x=16;x<64;x++){var D=a[x-2],u=(D>>>17|D<<32-17)^(D>>>19|D<<32-19)^D>>>10;D=a[x-15];var C=(D>>>7|D<<32-7)^(D>>>18|D<<32-18)^D>>>3;a[x]=(u+a[x-7]|0)+(C+a[x-16]|0)}for(var x=0;x<64;x++){var u=(((y>>>6|y<<26)^(y>>>11|y<<21)^(y>>>25|y<<7))+(y&S^~y&m)|0)+(_+(o[x]+a[x]|0)|0)|0,C=((g>>>2|g<<32-2)^(g>>>13|g<<32-13)^(g>>>22|g<<32-22))+(g&w^g&b^w&b)|0;_=m,m=S,S=y,y=A+u|0,A=b,b=w,w=g,g=u+C|0}c[0]+=g,c[1]+=w,c[2]+=b,c[3]+=A,c[4]+=y,c[5]+=S,c[6]+=m,c[7]+=_,d+=64,p-=64}return d}function s(a){var c=new n;c.update(a);var l=c.digest();return c.clean(),l}t.hash=s})(Ba);var Du={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.sharedKey=t.generateKeyPair=t.generateKeyPairFromSeed=t.scalarMultBase=t.scalarMult=t.SHARED_KEY_LENGTH=t.SECRET_KEY_LENGTH=t.PUBLIC_KEY_LENGTH=void 0;const e=Da,r=Wt;t.PUBLIC_KEY_LENGTH=32,t.SECRET_KEY_LENGTH=32,t.SHARED_KEY_LENGTH=32;function n(x){const E=new Float64Array(16);if(x)for(let D=0;D<x.length;D++)E[D]=x[D];return E}const o=new Uint8Array(32);o[0]=9;const i=n([56129,1]);function s(x){let E=1;for(let D=0;D<16;D++){let u=x[D]+E+65535;E=Math.floor(u/65536),x[D]=u-E*65536}x[0]+=E-1+37*(E-1)}function a(x,E,D){const u=~(D-1);for(let C=0;C<16;C++){const T=u&(x[C]^E[C]);x[C]^=T,E[C]^=T}}function c(x,E){const D=n(),u=n();for(let C=0;C<16;C++)u[C]=E[C];s(u),s(u),s(u);for(let C=0;C<2;C++){D[0]=u[0]-65517;for(let B=1;B<15;B++)D[B]=u[B]-65535-(D[B-1]>>16&1),D[B-1]&=65535;D[15]=u[15]-32767-(D[14]>>16&1);const T=D[15]>>16&1;D[14]&=65535,a(u,D,1-T)}for(let C=0;C<16;C++)x[2*C]=u[C]&255,x[2*C+1]=u[C]>>8}function l(x,E){for(let D=0;D<16;D++)x[D]=E[2*D]+(E[2*D+1]<<8);x[15]&=32767}function d(x,E,D){for(let u=0;u<16;u++)x[u]=E[u]+D[u]}function p(x,E,D){for(let u=0;u<16;u++)x[u]=E[u]-D[u]}function g(x,E,D){let u,C,T=0,B=0,M=0,j=0,G=0,Q=0,K=0,q=0,L=0,Z=0,De=0,ke=0,re=0,ce=0,z=0,ee=0,ue=0,pe=0,we=0,fe=0,be=0,ye=0,Ae=0,Ce=0,me=0,bt=0,wr=0,Hr=0,br=0,hi=0,Ho=0,We=D[0],Me=D[1],Ee=D[2],Fe=D[3],Ge=D[4],Ie=D[5],Ve=D[6],v=D[7],f=D[8],h=D[9],P=D[10],I=D[11],O=D[12],N=D[13],V=D[14],se=D[15];u=E[0],T+=u*We,B+=u*Me,M+=u*Ee,j+=u*Fe,G+=u*Ge,Q+=u*Ie,K+=u*Ve,q+=u*v,L+=u*f,Z+=u*h,De+=u*P,ke+=u*I,re+=u*O,ce+=u*N,z+=u*V,ee+=u*se,u=E[1],B+=u*We,M+=u*Me,j+=u*Ee,G+=u*Fe,Q+=u*Ge,K+=u*Ie,q+=u*Ve,L+=u*v,Z+=u*f,De+=u*h,ke+=u*P,re+=u*I,ce+=u*O,z+=u*N,ee+=u*V,ue+=u*se,u=E[2],M+=u*We,j+=u*Me,G+=u*Ee,Q+=u*Fe,K+=u*Ge,q+=u*Ie,L+=u*Ve,Z+=u*v,De+=u*f,ke+=u*h,re+=u*P,ce+=u*I,z+=u*O,ee+=u*N,ue+=u*V,pe+=u*se,u=E[3],j+=u*We,G+=u*Me,Q+=u*Ee,K+=u*Fe,q+=u*Ge,L+=u*Ie,Z+=u*Ve,De+=u*v,ke+=u*f,re+=u*h,ce+=u*P,z+=u*I,ee+=u*O,ue+=u*N,pe+=u*V,we+=u*se,u=E[4],G+=u*We,Q+=u*Me,K+=u*Ee,q+=u*Fe,L+=u*Ge,Z+=u*Ie,De+=u*Ve,ke+=u*v,re+=u*f,ce+=u*h,z+=u*P,ee+=u*I,ue+=u*O,pe+=u*N,we+=u*V,fe+=u*se,u=E[5],Q+=u*We,K+=u*Me,q+=u*Ee,L+=u*Fe,Z+=u*Ge,De+=u*Ie,ke+=u*Ve,re+=u*v,ce+=u*f,z+=u*h,ee+=u*P,ue+=u*I,pe+=u*O,we+=u*N,fe+=u*V,be+=u*se,u=E[6],K+=u*We,q+=u*Me,L+=u*Ee,Z+=u*Fe,De+=u*Ge,ke+=u*Ie,re+=u*Ve,ce+=u*v,z+=u*f,ee+=u*h,ue+=u*P,pe+=u*I,we+=u*O,fe+=u*N,be+=u*V,ye+=u*se,u=E[7],q+=u*We,L+=u*Me,Z+=u*Ee,De+=u*Fe,ke+=u*Ge,re+=u*Ie,ce+=u*Ve,z+=u*v,ee+=u*f,ue+=u*h,pe+=u*P,we+=u*I,fe+=u*O,be+=u*N,ye+=u*V,Ae+=u*se,u=E[8],L+=u*We,Z+=u*Me,De+=u*Ee,ke+=u*Fe,re+=u*Ge,ce+=u*Ie,z+=u*Ve,ee+=u*v,ue+=u*f,pe+=u*h,we+=u*P,fe+=u*I,be+=u*O,ye+=u*N,Ae+=u*V,Ce+=u*se,u=E[9],Z+=u*We,De+=u*Me,ke+=u*Ee,re+=u*Fe,ce+=u*Ge,z+=u*Ie,ee+=u*Ve,ue+=u*v,pe+=u*f,we+=u*h,fe+=u*P,be+=u*I,ye+=u*O,Ae+=u*N,Ce+=u*V,me+=u*se,u=E[10],De+=u*We,ke+=u*Me,re+=u*Ee,ce+=u*Fe,z+=u*Ge,ee+=u*Ie,ue+=u*Ve,pe+=u*v,we+=u*f,fe+=u*h,be+=u*P,ye+=u*I,Ae+=u*O,Ce+=u*N,me+=u*V,bt+=u*se,u=E[11],ke+=u*We,re+=u*Me,ce+=u*Ee,z+=u*Fe,ee+=u*Ge,ue+=u*Ie,pe+=u*Ve,we+=u*v,fe+=u*f,be+=u*h,ye+=u*P,Ae+=u*I,Ce+=u*O,me+=u*N,bt+=u*V,wr+=u*se,u=E[12],re+=u*We,ce+=u*Me,z+=u*Ee,ee+=u*Fe,ue+=u*Ge,pe+=u*Ie,we+=u*Ve,fe+=u*v,be+=u*f,ye+=u*h,Ae+=u*P,Ce+=u*I,me+=u*O,bt+=u*N,wr+=u*V,Hr+=u*se,u=E[13],ce+=u*We,z+=u*Me,ee+=u*Ee,ue+=u*Fe,pe+=u*Ge,we+=u*Ie,fe+=u*Ve,be+=u*v,ye+=u*f,Ae+=u*h,Ce+=u*P,me+=u*I,bt+=u*O,wr+=u*N,Hr+=u*V,br+=u*se,u=E[14],z+=u*We,ee+=u*Me,ue+=u*Ee,pe+=u*Fe,we+=u*Ge,fe+=u*Ie,be+=u*Ve,ye+=u*v,Ae+=u*f,Ce+=u*h,me+=u*P,bt+=u*I,wr+=u*O,Hr+=u*N,br+=u*V,hi+=u*se,u=E[15],ee+=u*We,ue+=u*Me,pe+=u*Ee,we+=u*Fe,fe+=u*Ge,be+=u*Ie,ye+=u*Ve,Ae+=u*v,Ce+=u*f,me+=u*h,bt+=u*P,wr+=u*I,Hr+=u*O,br+=u*N,hi+=u*V,Ho+=u*se,T+=38*ue,B+=38*pe,M+=38*we,j+=38*fe,G+=38*be,Q+=38*ye,K+=38*Ae,q+=38*Ce,L+=38*me,Z+=38*bt,De+=38*wr,ke+=38*Hr,re+=38*br,ce+=38*hi,z+=38*Ho,C=1,u=T+C+65535,C=Math.floor(u/65536),T=u-C*65536,u=B+C+65535,C=Math.floor(u/65536),B=u-C*65536,u=M+C+65535,C=Math.floor(u/65536),M=u-C*65536,u=j+C+65535,C=Math.floor(u/65536),j=u-C*65536,u=G+C+65535,C=Math.floor(u/65536),G=u-C*65536,u=Q+C+65535,C=Math.floor(u/65536),Q=u-C*65536,u=K+C+65535,C=Math.floor(u/65536),K=u-C*65536,u=q+C+65535,C=Math.floor(u/65536),q=u-C*65536,u=L+C+65535,C=Math.floor(u/65536),L=u-C*65536,u=Z+C+65535,C=Math.floor(u/65536),Z=u-C*65536,u=De+C+65535,C=Math.floor(u/65536),De=u-C*65536,u=ke+C+65535,C=Math.floor(u/65536),ke=u-C*65536,u=re+C+65535,C=Math.floor(u/65536),re=u-C*65536,u=ce+C+65535,C=Math.floor(u/65536),ce=u-C*65536,u=z+C+65535,C=Math.floor(u/65536),z=u-C*65536,u=ee+C+65535,C=Math.floor(u/65536),ee=u-C*65536,T+=C-1+37*(C-1),C=1,u=T+C+65535,C=Math.floor(u/65536),T=u-C*65536,u=B+C+65535,C=Math.floor(u/65536),B=u-C*65536,u=M+C+65535,C=Math.floor(u/65536),M=u-C*65536,u=j+C+65535,C=Math.floor(u/65536),j=u-C*65536,u=G+C+65535,C=Math.floor(u/65536),G=u-C*65536,u=Q+C+65535,C=Math.floor(u/65536),Q=u-C*65536,u=K+C+65535,C=Math.floor(u/65536),K=u-C*65536,u=q+C+65535,C=Math.floor(u/65536),q=u-C*65536,u=L+C+65535,C=Math.floor(u/65536),L=u-C*65536,u=Z+C+65535,C=Math.floor(u/65536),Z=u-C*65536,u=De+C+65535,C=Math.floor(u/65536),De=u-C*65536,u=ke+C+65535,C=Math.floor(u/65536),ke=u-C*65536,u=re+C+65535,C=Math.floor(u/65536),re=u-C*65536,u=ce+C+65535,C=Math.floor(u/65536),ce=u-C*65536,u=z+C+65535,C=Math.floor(u/65536),z=u-C*65536,u=ee+C+65535,C=Math.floor(u/65536),ee=u-C*65536,T+=C-1+37*(C-1),x[0]=T,x[1]=B,x[2]=M,x[3]=j,x[4]=G,x[5]=Q,x[6]=K,x[7]=q,x[8]=L,x[9]=Z,x[10]=De,x[11]=ke,x[12]=re,x[13]=ce,x[14]=z,x[15]=ee}function w(x,E){g(x,E,E)}function b(x,E){const D=n();for(let u=0;u<16;u++)D[u]=E[u];for(let u=253;u>=0;u--)w(D,D),u!==2&&u!==4&&g(D,D,E);for(let u=0;u<16;u++)x[u]=D[u]}function A(x,E){const D=new Uint8Array(32),u=new Float64Array(80),C=n(),T=n(),B=n(),M=n(),j=n(),G=n();for(let L=0;L<31;L++)D[L]=x[L];D[31]=x[31]&127|64,D[0]&=248,l(u,E);for(let L=0;L<16;L++)T[L]=u[L];C[0]=M[0]=1;for(let L=254;L>=0;--L){const Z=D[L>>>3]>>>(L&7)&1;a(C,T,Z),a(B,M,Z),d(j,C,B),p(C,C,B),d(B,T,M),p(T,T,M),w(M,j),w(G,C),g(C,B,C),g(B,T,j),d(j,C,B),p(C,C,B),w(T,C),p(B,M,G),g(C,B,i),d(C,C,M),g(B,B,C),g(C,M,G),g(M,T,u),w(T,j),a(C,T,Z),a(B,M,Z)}for(let L=0;L<16;L++)u[L+16]=C[L],u[L+32]=B[L],u[L+48]=T[L],u[L+64]=M[L];const Q=u.subarray(32),K=u.subarray(16);b(Q,Q),g(K,K,Q);const q=new Uint8Array(32);return c(q,K),q}t.scalarMult=A;function y(x){return A(x,o)}t.scalarMultBase=y;function S(x){if(x.length!==t.SECRET_KEY_LENGTH)throw new Error(`x25519: seed must be ${t.SECRET_KEY_LENGTH} bytes`);const E=new Uint8Array(x);return{publicKey:y(E),secretKey:E}}t.generateKeyPairFromSeed=S;function m(x){const E=(0,e.randomBytes)(32,x),D=S(E);return(0,r.wipe)(E),D}t.generateKeyPair=m;function _(x,E,D=!1){if(x.length!==t.PUBLIC_KEY_LENGTH)throw new Error("X25519: incorrect secret key length");if(E.length!==t.PUBLIC_KEY_LENGTH)throw new Error("X25519: incorrect public key length");const u=A(x,E);if(D){let C=0;for(let T=0;T<u.length;T++)C|=u[T];if(C===0)throw new Error("X25519: invalid shared key")}return u}t.sharedKey=_})(Du);function Pu(t){return globalThis.Buffer!=null?new Uint8Array(t.buffer,t.byteOffset,t.byteLength):t}function L1(t=0){return globalThis.Buffer!=null&&globalThis.Buffer.allocUnsafe!=null?Pu(globalThis.Buffer.allocUnsafe(t)):new Uint8Array(t)}function Cf(t,e){e||(e=t.reduce((o,i)=>o+i.length,0));const r=L1(e);let n=0;for(const o of t)r.set(o,n),n+=o.length;return Pu(r)}function nv(t,e){if(t.length>=255)throw new TypeError("Alphabet too long");for(var r=new Uint8Array(256),n=0;n<r.length;n++)r[n]=255;for(var o=0;o<t.length;o++){var i=t.charAt(o),s=i.charCodeAt(0);if(r[s]!==255)throw new TypeError(i+" is ambiguous");r[s]=o}var a=t.length,c=t.charAt(0),l=Math.log(a)/Math.log(256),d=Math.log(256)/Math.log(a);function p(b){if(b instanceof Uint8Array||(ArrayBuffer.isView(b)?b=new Uint8Array(b.buffer,b.byteOffset,b.byteLength):Array.isArray(b)&&(b=Uint8Array.from(b))),!(b instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(b.length===0)return"";for(var A=0,y=0,S=0,m=b.length;S!==m&&b[S]===0;)S++,A++;for(var _=(m-S)*d+1>>>0,x=new Uint8Array(_);S!==m;){for(var E=b[S],D=0,u=_-1;(E!==0||D<y)&&u!==-1;u--,D++)E+=256*x[u]>>>0,x[u]=E%a>>>0,E=E/a>>>0;if(E!==0)throw new Error("Non-zero carry");y=D,S++}for(var C=_-y;C!==_&&x[C]===0;)C++;for(var T=c.repeat(A);C<_;++C)T+=t.charAt(x[C]);return T}function g(b){if(typeof b!="string")throw new TypeError("Expected String");if(b.length===0)return new Uint8Array;var A=0;if(b[A]!==" "){for(var y=0,S=0;b[A]===c;)y++,A++;for(var m=(b.length-A)*l+1>>>0,_=new Uint8Array(m);b[A];){var x=r[b.charCodeAt(A)];if(x===255)return;for(var E=0,D=m-1;(x!==0||E<S)&&D!==-1;D--,E++)x+=a*_[D]>>>0,_[D]=x%256>>>0,x=x/256>>>0;if(x!==0)throw new Error("Non-zero carry");S=E,A++}if(b[A]!==" "){for(var u=m-S;u!==m&&_[u]===0;)u++;for(var C=new Uint8Array(y+(m-u)),T=y;u!==m;)C[T++]=_[u++];return C}}}function w(b){var A=g(b);if(A)return A;throw new Error(`Non-${e} character`)}return{encode:p,decodeUnsafe:g,decode:w}}var iv=nv,ov=iv;const sv=t=>{if(t instanceof Uint8Array&&t.constructor.name==="Uint8Array")return t;if(t instanceof ArrayBuffer)return new Uint8Array(t);if(ArrayBuffer.isView(t))return new Uint8Array(t.buffer,t.byteOffset,t.byteLength);throw new Error("Unknown type, must be binary type")},av=t=>new TextEncoder().encode(t),cv=t=>new TextDecoder().decode(t);class lv{constructor(e,r,n){this.name=e,this.prefix=r,this.baseEncode=n}encode(e){if(e instanceof Uint8Array)return`${this.prefix}${this.baseEncode(e)}`;throw Error("Unknown type, must be binary type")}}class uv{constructor(e,r,n){if(this.name=e,this.prefix=r,r.codePointAt(0)===void 0)throw new Error("Invalid prefix character");this.prefixCodePoint=r.codePointAt(0),this.baseDecode=n}decode(e){if(typeof e=="string"){if(e.codePointAt(0)!==this.prefixCodePoint)throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);return this.baseDecode(e.slice(this.prefix.length))}else throw Error("Can only multibase decode strings")}or(e){return j1(this,e)}}class fv{constructor(e){this.decoders=e}or(e){return j1(this,e)}decode(e){const r=e[0],n=this.decoders[r];if(n)return n.decode(e);throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)}}const j1=(t,e)=>new fv({...t.decoders||{[t.prefix]:t},...e.decoders||{[e.prefix]:e}});class dv{constructor(e,r,n,o){this.name=e,this.prefix=r,this.baseEncode=n,this.baseDecode=o,this.encoder=new lv(e,r,n),this.decoder=new uv(e,r,o)}encode(e){return this.encoder.encode(e)}decode(e){return this.decoder.decode(e)}}const Oa=({name:t,prefix:e,encode:r,decode:n})=>new dv(t,e,r,n),jo=({prefix:t,name:e,alphabet:r})=>{const{encode:n,decode:o}=ov(r,e);return Oa({prefix:t,name:e,encode:n,decode:i=>sv(o(i))})},hv=(t,e,r,n)=>{const o={};for(let d=0;d<e.length;++d)o[e[d]]=d;let i=t.length;for(;t[i-1]==="=";)--i;const s=new Uint8Array(i*r/8|0);let a=0,c=0,l=0;for(let d=0;d<i;++d){const p=o[t[d]];if(p===void 0)throw new SyntaxError(`Non-${n} character`);c=c<<r|p,a+=r,a>=8&&(a-=8,s[l++]=255&c>>a)}if(a>=r||255&c<<8-a)throw new SyntaxError("Unexpected end of data");return s},pv=(t,e,r)=>{const n=e[e.length-1]==="=",o=(1<<r)-1;let i="",s=0,a=0;for(let c=0;c<t.length;++c)for(a=a<<8|t[c],s+=8;s>r;)s-=r,i+=e[o&a>>s];if(s&&(i+=e[o&a<<r-s]),n)for(;i.length*r&7;)i+="=";return i},rt=({name:t,prefix:e,bitsPerChar:r,alphabet:n})=>Oa({prefix:e,name:t,encode(o){return pv(o,n,r)},decode(o){return hv(o,n,r,t)}}),gv=Oa({prefix:"\0",name:"identity",encode:t=>cv(t),decode:t=>av(t)}),wv=Object.freeze(Object.defineProperty({__proto__:null,identity:gv},Symbol.toStringTag,{value:"Module"})),bv=rt({prefix:"0",name:"base2",alphabet:"01",bitsPerChar:1}),mv=Object.freeze(Object.defineProperty({__proto__:null,base2:bv},Symbol.toStringTag,{value:"Module"})),yv=rt({prefix:"7",name:"base8",alphabet:"01234567",bitsPerChar:3}),vv=Object.freeze(Object.defineProperty({__proto__:null,base8:yv},Symbol.toStringTag,{value:"Module"})),Av=jo({prefix:"9",name:"base10",alphabet:"0123456789"}),Cv=Object.freeze(Object.defineProperty({__proto__:null,base10:Av},Symbol.toStringTag,{value:"Module"})),xv=rt({prefix:"f",name:"base16",alphabet:"0123456789abcdef",bitsPerChar:4}),Ev=rt({prefix:"F",name:"base16upper",alphabet:"0123456789ABCDEF",bitsPerChar:4}),_v=Object.freeze(Object.defineProperty({__proto__:null,base16:xv,base16upper:Ev},Symbol.toStringTag,{value:"Module"})),Sv=rt({prefix:"b",name:"base32",alphabet:"abcdefghijklmnopqrstuvwxyz234567",bitsPerChar:5}),Dv=rt({prefix:"B",name:"base32upper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",bitsPerChar:5}),Pv=rt({prefix:"c",name:"base32pad",alphabet:"abcdefghijklmnopqrstuvwxyz234567=",bitsPerChar:5}),Iv=rt({prefix:"C",name:"base32padupper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",bitsPerChar:5}),Tv=rt({prefix:"v",name:"base32hex",alphabet:"0123456789abcdefghijklmnopqrstuv",bitsPerChar:5}),Bv=rt({prefix:"V",name:"base32hexupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV",bitsPerChar:5}),Ov=rt({prefix:"t",name:"base32hexpad",alphabet:"0123456789abcdefghijklmnopqrstuv=",bitsPerChar:5}),kv=rt({prefix:"T",name:"base32hexpadupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV=",bitsPerChar:5}),Rv=rt({prefix:"h",name:"base32z",alphabet:"ybndrfg8ejkmcpqxot1uwisza345h769",bitsPerChar:5}),Nv=Object.freeze(Object.defineProperty({__proto__:null,base32:Sv,base32hex:Tv,base32hexpad:Ov,base32hexpadupper:kv,base32hexupper:Bv,base32pad:Pv,base32padupper:Iv,base32upper:Dv,base32z:Rv},Symbol.toStringTag,{value:"Module"})),Mv=jo({prefix:"k",name:"base36",alphabet:"0123456789abcdefghijklmnopqrstuvwxyz"}),$v=jo({prefix:"K",name:"base36upper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"}),Uv=Object.freeze(Object.defineProperty({__proto__:null,base36:Mv,base36upper:$v},Symbol.toStringTag,{value:"Module"})),Fv=jo({name:"base58btc",prefix:"z",alphabet:"123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"}),Lv=jo({name:"base58flickr",prefix:"Z",alphabet:"123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"}),jv=Object.freeze(Object.defineProperty({__proto__:null,base58btc:Fv,base58flickr:Lv},Symbol.toStringTag,{value:"Module"})),Wv=rt({prefix:"m",name:"base64",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",bitsPerChar:6}),zv=rt({prefix:"M",name:"base64pad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",bitsPerChar:6}),Hv=rt({prefix:"u",name:"base64url",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",bitsPerChar:6}),Gv=rt({prefix:"U",name:"base64urlpad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",bitsPerChar:6}),Vv=Object.freeze(Object.defineProperty({__proto__:null,base64:Wv,base64pad:zv,base64url:Hv,base64urlpad:Gv},Symbol.toStringTag,{value:"Module"})),W1=Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"),qv=W1.reduce((t,e,r)=>(t[r]=e,t),[]),Qv=W1.reduce((t,e,r)=>(t[e.codePointAt(0)]=r,t),[]);function Kv(t){return t.reduce((e,r)=>(e+=qv[r],e),"")}function Zv(t){const e=[];for(const r of t){const n=Qv[r.codePointAt(0)];if(n===void 0)throw new Error(`Non-base256emoji character: ${r}`);e.push(n)}return new Uint8Array(e)}const Yv=Oa({prefix:"🚀",name:"base256emoji",encode:Kv,decode:Zv}),Jv=Object.freeze(Object.defineProperty({__proto__:null,base256emoji:Yv},Symbol.toStringTag,{value:"Module"}));new TextEncoder;new TextDecoder;const xf={...wv,...mv,...vv,...Cv,..._v,...Nv,...Uv,...jv,...Vv,...Jv};function z1(t,e,r,n){return{name:t,prefix:e,encoder:{name:t,prefix:e,encode:r},decoder:{decode:n}}}const Ef=z1("utf8","u",t=>"u"+new TextDecoder("utf8").decode(t),t=>new TextEncoder().encode(t.substring(1))),cc=z1("ascii","a",t=>{let e="a";for(let r=0;r<t.length;r++)e+=String.fromCharCode(t[r]);return e},t=>{t=t.substring(1);const e=L1(t.length);for(let r=0;r<t.length;r++)e[r]=t.charCodeAt(r);return e}),H1={utf8:Ef,"utf-8":Ef,hex:xf.base16,latin1:cc,ascii:cc,binary:cc,...xf};function Mt(t,e="utf8"){const r=H1[e];if(!r)throw new Error(`Unsupported encoding "${e}"`);return(e==="utf8"||e==="utf-8")&&globalThis.Buffer!=null&&globalThis.Buffer.from!=null?Pu(globalThis.Buffer.from(t,"utf-8")):r.decoder.decode(`${r.prefix}${t}`)}function jt(t,e="utf8"){const r=H1[e];if(!r)throw new Error(`Unsupported encoding "${e}"`);return(e==="utf8"||e==="utf-8")&&globalThis.Buffer!=null&&globalThis.Buffer.from!=null?globalThis.Buffer.from(t.buffer,t.byteOffset,t.byteLength).toString("utf8"):r.encoder.encode(t).substring(1)}var _f=globalThis&&globalThis.__spreadArray||function(t,e,r){if(r||arguments.length===2)for(var n=0,o=e.length,i;n<o;n++)(i||!(n in e))&&(i||(i=Array.prototype.slice.call(e,0,n)),i[n]=e[n]);return t.concat(i||Array.prototype.slice.call(e))},Xv=function(){function t(e,r,n){this.name=e,this.version=r,this.os=n,this.type="browser"}return t}(),e8=function(){function t(e){this.version=e,this.type="node",this.name="node",this.os=process.platform}return t}(),t8=function(){function t(e,r,n,o){this.name=e,this.version=r,this.os=n,this.bot=o,this.type="bot-device"}return t}(),r8=function(){function t(){this.type="bot",this.bot=!0,this.name="bot",this.version=null,this.os=null}return t}(),n8=function(){function t(){this.type="react-native",this.name="react-native",this.version=null,this.os=null}return t}(),i8=/alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/,o8=/(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,Sf=3,s8=[["aol",/AOLShield\/([0-9\._]+)/],["edge",/Edge\/([0-9\._]+)/],["edge-ios",/EdgiOS\/([0-9\._]+)/],["yandexbrowser",/YaBrowser\/([0-9\._]+)/],["kakaotalk",/KAKAOTALK\s([0-9\.]+)/],["samsung",/SamsungBrowser\/([0-9\.]+)/],["silk",/\bSilk\/([0-9._-]+)\b/],["miui",/MiuiBrowser\/([0-9\.]+)$/],["beaker",/BeakerBrowser\/([0-9\.]+)/],["edge-chromium",/EdgA?\/([0-9\.]+)/],["chromium-webview",/(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["chrome",/(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["phantomjs",/PhantomJS\/([0-9\.]+)(:?\s|$)/],["crios",/CriOS\/([0-9\.]+)(:?\s|$)/],["firefox",/Firefox\/([0-9\.]+)(?:\s|$)/],["fxios",/FxiOS\/([0-9\.]+)/],["opera-mini",/Opera Mini.*Version\/([0-9\.]+)/],["opera",/Opera\/([0-9\.]+)(?:\s|$)/],["opera",/OPR\/([0-9\.]+)(:?\s|$)/],["pie",/^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],["pie",/^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/],["netfront",/^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],["ie",/Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],["ie",/MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],["ie",/MSIE\s(7\.0)/],["bb10",/BB10;\sTouch.*Version\/([0-9\.]+)/],["android",/Android\s([0-9\.]+)/],["ios",/Version\/([0-9\._]+).*Mobile.*Safari.*/],["safari",/Version\/([0-9\._]+).*Safari/],["facebook",/FB[AS]V\/([0-9\.]+)/],["instagram",/Instagram\s([0-9\.]+)/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Mobile/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Gecko\)$/],["curl",/^curl\/([0-9\.]+)$/],["searchbot",i8]],Df=[["iOS",/iP(hone|od|ad)/],["Android OS",/Android/],["BlackBerry OS",/BlackBerry|BB10/],["Windows Mobile",/IEMobile/],["Amazon OS",/Kindle/],["Windows 3.11",/Win16/],["Windows 95",/(Windows 95)|(Win95)|(Windows_95)/],["Windows 98",/(Windows 98)|(Win98)/],["Windows 2000",/(Windows NT 5.0)|(Windows 2000)/],["Windows XP",/(Windows NT 5.1)|(Windows XP)/],["Windows Server 2003",/(Windows NT 5.2)/],["Windows Vista",/(Windows NT 6.0)/],["Windows 7",/(Windows NT 6.1)/],["Windows 8",/(Windows NT 6.2)/],["Windows 8.1",/(Windows NT 6.3)/],["Windows 10",/(Windows NT 10.0)/],["Windows ME",/Windows ME/],["Windows CE",/Windows CE|WinCE|Microsoft Pocket Internet Explorer/],["Open BSD",/OpenBSD/],["Sun OS",/SunOS/],["Chrome OS",/CrOS/],["Linux",/(Linux)|(X11)/],["Mac OS",/(Mac_PowerPC)|(Macintosh)/],["QNX",/QNX/],["BeOS",/BeOS/],["OS/2",/OS\/2/]];function a8(t){return t?Pf(t):typeof document>"u"&&typeof navigator<"u"&&navigator.product==="ReactNative"?new n8:typeof navigator<"u"?Pf(navigator.userAgent):u8()}function c8(t){return t!==""&&s8.reduce(function(e,r){var n=r[0],o=r[1];if(e)return e;var i=o.exec(t);return!!i&&[n,i]},!1)}function Pf(t){var e=c8(t);if(!e)return null;var r=e[0],n=e[1];if(r==="searchbot")return new r8;var o=n[1]&&n[1].split(".").join("_").split("_").slice(0,3);o?o.length<Sf&&(o=_f(_f([],o,!0),f8(Sf-o.length),!0)):o=[];var i=o.join("."),s=l8(t),a=o8.exec(t);return a&&a[1]?new t8(r,i,s,a[1]):new Xv(r,i,s)}function l8(t){for(var e=0,r=Df.length;e<r;e++){var n=Df[e],o=n[0],i=n[1],s=i.exec(t);if(s)return o}return null}function u8(){var t=typeof process<"u"&&process.version;return t?new e8(process.version.slice(1)):null}function f8(t){for(var e=[],r=0;r<t;r++)e.push("0");return e}var Xr={};/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var al=function(t,e){return al=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var o in n)n.hasOwnProperty(o)&&(r[o]=n[o])},al(t,e)};function d8(t,e){al(t,e);function r(){this.constructor=t}t.prototype=e===null?Object.create(e):(r.prototype=e.prototype,new r)}var cl=function(){return cl=Object.assign||function(e){for(var r,n=1,o=arguments.length;n<o;n++){r=arguments[n];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},cl.apply(this,arguments)};function h8(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(r[n[o]]=t[n[o]]);return r}function p8(t,e,r,n){var o=arguments.length,i=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(o<3?s(i):o>3?s(e,r,i):s(e,r))||i);return o>3&&i&&Object.defineProperty(e,r,i),i}function g8(t,e){return function(r,n){e(r,n,t)}}function w8(t,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(t,e)}function b8(t,e,r,n){function o(i){return i instanceof r?i:new r(function(s){s(i)})}return new(r||(r=Promise))(function(i,s){function a(d){try{l(n.next(d))}catch(p){s(p)}}function c(d){try{l(n.throw(d))}catch(p){s(p)}}function l(d){d.done?i(d.value):o(d.value).then(a,c)}l((n=n.apply(t,e||[])).next())})}function m8(t,e){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,o,i,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(l){return function(d){return c([l,d])}}function c(l){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,o&&(i=l[0]&2?o.return:l[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,l[1])).done)return i;switch(o=0,i&&(l=[l[0]&2,i.value]),l[0]){case 0:case 1:i=l;break;case 4:return r.label++,{value:l[1],done:!1};case 5:r.label++,o=l[1],l=[0];continue;case 7:l=r.ops.pop(),r.trys.pop();continue;default:if(i=r.trys,!(i=i.length>0&&i[i.length-1])&&(l[0]===6||l[0]===2)){r=0;continue}if(l[0]===3&&(!i||l[1]>i[0]&&l[1]<i[3])){r.label=l[1];break}if(l[0]===6&&r.label<i[1]){r.label=i[1],i=l;break}if(i&&r.label<i[2]){r.label=i[2],r.ops.push(l);break}i[2]&&r.ops.pop(),r.trys.pop();continue}l=e.call(t,r)}catch(d){l=[6,d],o=0}finally{n=i=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}function y8(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}function v8(t,e){for(var r in t)r!=="default"&&!e.hasOwnProperty(r)&&(e[r]=t[r])}function ll(t){var e=typeof Symbol=="function"&&Symbol.iterator,r=e&&t[e],n=0;if(r)return r.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function G1(t,e){var r=typeof Symbol=="function"&&t[Symbol.iterator];if(!r)return t;var n=r.call(t),o,i=[],s;try{for(;(e===void 0||e-- >0)&&!(o=n.next()).done;)i.push(o.value)}catch(a){s={error:a}}finally{try{o&&!o.done&&(r=n.return)&&r.call(n)}finally{if(s)throw s.error}}return i}function A8(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(G1(arguments[e]));return t}function C8(){for(var t=0,e=0,r=arguments.length;e<r;e++)t+=arguments[e].length;for(var n=Array(t),o=0,e=0;e<r;e++)for(var i=arguments[e],s=0,a=i.length;s<a;s++,o++)n[o]=i[s];return n}function vo(t){return this instanceof vo?(this.v=t,this):new vo(t)}function x8(t,e,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=r.apply(t,e||[]),o,i=[];return o={},s("next"),s("throw"),s("return"),o[Symbol.asyncIterator]=function(){return this},o;function s(g){n[g]&&(o[g]=function(w){return new Promise(function(b,A){i.push([g,w,b,A])>1||a(g,w)})})}function a(g,w){try{c(n[g](w))}catch(b){p(i[0][3],b)}}function c(g){g.value instanceof vo?Promise.resolve(g.value.v).then(l,d):p(i[0][2],g)}function l(g){a("next",g)}function d(g){a("throw",g)}function p(g,w){g(w),i.shift(),i.length&&a(i[0][0],i[0][1])}}function E8(t){var e,r;return e={},n("next"),n("throw",function(o){throw o}),n("return"),e[Symbol.iterator]=function(){return this},e;function n(o,i){e[o]=t[o]?function(s){return(r=!r)?{value:vo(t[o](s)),done:o==="return"}:i?i(s):s}:i}}function _8(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=t[Symbol.asyncIterator],r;return e?e.call(t):(t=typeof ll=="function"?ll(t):t[Symbol.iterator](),r={},n("next"),n("throw"),n("return"),r[Symbol.asyncIterator]=function(){return this},r);function n(i){r[i]=t[i]&&function(s){return new Promise(function(a,c){s=t[i](s),o(a,c,s.done,s.value)})}}function o(i,s,a,c){Promise.resolve(c).then(function(l){i({value:l,done:a})},s)}}function S8(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t}function D8(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var r in t)Object.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function P8(t){return t&&t.__esModule?t:{default:t}}function I8(t,e){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return e.get(t)}function T8(t,e,r){if(!e.has(t))throw new TypeError("attempted to set private field on non-instance");return e.set(t,r),r}const B8=Object.freeze(Object.defineProperty({__proto__:null,get __assign(){return cl},__asyncDelegator:E8,__asyncGenerator:x8,__asyncValues:_8,__await:vo,__awaiter:b8,__classPrivateFieldGet:I8,__classPrivateFieldSet:T8,__createBinding:y8,__decorate:p8,__exportStar:v8,__extends:d8,__generator:m8,__importDefault:P8,__importStar:D8,__makeTemplateObject:S8,__metadata:w8,__param:g8,__read:G1,__rest:h8,__spread:A8,__spreadArrays:C8,__values:ll},Symbol.toStringTag,{value:"Module"})),ka=wd(B8);var lc={},yi={},If;function O8(){if(If)return yi;If=1,Object.defineProperty(yi,"__esModule",{value:!0}),yi.delay=void 0;function t(e){return new Promise(r=>{setTimeout(()=>{r(!0)},e)})}return yi.delay=t,yi}var Vr={},uc={},qr={},Tf;function k8(){return Tf||(Tf=1,Object.defineProperty(qr,"__esModule",{value:!0}),qr.ONE_THOUSAND=qr.ONE_HUNDRED=void 0,qr.ONE_HUNDRED=100,qr.ONE_THOUSAND=1e3),qr}var fc={},Bf;function R8(){return Bf||(Bf=1,function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.ONE_YEAR=t.FOUR_WEEKS=t.THREE_WEEKS=t.TWO_WEEKS=t.ONE_WEEK=t.THIRTY_DAYS=t.SEVEN_DAYS=t.FIVE_DAYS=t.THREE_DAYS=t.ONE_DAY=t.TWENTY_FOUR_HOURS=t.TWELVE_HOURS=t.SIX_HOURS=t.THREE_HOURS=t.ONE_HOUR=t.SIXTY_MINUTES=t.THIRTY_MINUTES=t.TEN_MINUTES=t.FIVE_MINUTES=t.ONE_MINUTE=t.SIXTY_SECONDS=t.THIRTY_SECONDS=t.TEN_SECONDS=t.FIVE_SECONDS=t.ONE_SECOND=void 0,t.ONE_SECOND=1,t.FIVE_SECONDS=5,t.TEN_SECONDS=10,t.THIRTY_SECONDS=30,t.SIXTY_SECONDS=60,t.ONE_MINUTE=t.SIXTY_SECONDS,t.FIVE_MINUTES=t.ONE_MINUTE*5,t.TEN_MINUTES=t.ONE_MINUTE*10,t.THIRTY_MINUTES=t.ONE_MINUTE*30,t.SIXTY_MINUTES=t.ONE_MINUTE*60,t.ONE_HOUR=t.SIXTY_MINUTES,t.THREE_HOURS=t.ONE_HOUR*3,t.SIX_HOURS=t.ONE_HOUR*6,t.TWELVE_HOURS=t.ONE_HOUR*12,t.TWENTY_FOUR_HOURS=t.ONE_HOUR*24,t.ONE_DAY=t.TWENTY_FOUR_HOURS,t.THREE_DAYS=t.ONE_DAY*3,t.FIVE_DAYS=t.ONE_DAY*5,t.SEVEN_DAYS=t.ONE_DAY*7,t.THIRTY_DAYS=t.ONE_DAY*30,t.ONE_WEEK=t.SEVEN_DAYS,t.TWO_WEEKS=t.ONE_WEEK*2,t.THREE_WEEKS=t.ONE_WEEK*3,t.FOUR_WEEKS=t.ONE_WEEK*4,t.ONE_YEAR=t.ONE_DAY*365}(fc)),fc}var Of;function V1(){return Of||(Of=1,function(t){Object.defineProperty(t,"__esModule",{value:!0});const e=ka;e.__exportStar(k8(),t),e.__exportStar(R8(),t)}(uc)),uc}var kf;function N8(){if(kf)return Vr;kf=1,Object.defineProperty(Vr,"__esModule",{value:!0}),Vr.fromMiliseconds=Vr.toMiliseconds=void 0;const t=V1();function e(n){return n*t.ONE_THOUSAND}Vr.toMiliseconds=e;function r(n){return Math.floor(n/t.ONE_THOUSAND)}return Vr.fromMiliseconds=r,Vr}var Rf;function M8(){return Rf||(Rf=1,function(t){Object.defineProperty(t,"__esModule",{value:!0});const e=ka;e.__exportStar(O8(),t),e.__exportStar(N8(),t)}(lc)),lc}var An={},Nf;function $8(){if(Nf)return An;Nf=1,Object.defineProperty(An,"__esModule",{value:!0}),An.Watch=void 0;class t{constructor(){this.timestamps=new Map}start(r){if(this.timestamps.has(r))throw new Error(`Watch already started for label: ${r}`);this.timestamps.set(r,{started:Date.now()})}stop(r){const n=this.get(r);if(typeof n.elapsed<"u")throw new Error(`Watch already stopped for label: ${r}`);const o=Date.now()-n.started;this.timestamps.set(r,{started:n.started,elapsed:o})}get(r){const n=this.timestamps.get(r);if(typeof n>"u")throw new Error(`No timestamp found for label: ${r}`);return n}elapsed(r){const n=this.get(r);return n.elapsed||Date.now()-n.started}}return An.Watch=t,An.default=t,An}var dc={},vi={},Mf;function U8(){if(Mf)return vi;Mf=1,Object.defineProperty(vi,"__esModule",{value:!0}),vi.IWatch=void 0;class t{}return vi.IWatch=t,vi}var $f;function F8(){return $f||($f=1,function(t){Object.defineProperty(t,"__esModule",{value:!0}),ka.__exportStar(U8(),t)}(dc)),dc}(function(t){Object.defineProperty(t,"__esModule",{value:!0});const e=ka;e.__exportStar(M8(),t),e.__exportStar($8(),t),e.__exportStar(F8(),t),e.__exportStar(V1(),t)})(Xr);var Pe={};Object.defineProperty(Pe,"__esModule",{value:!0});Pe.getLocalStorage=Pe.getLocalStorageOrThrow=Pe.getCrypto=Pe.getCryptoOrThrow=Q1=Pe.getLocation=Pe.getLocationOrThrow=Iu=Pe.getNavigator=Pe.getNavigatorOrThrow=q1=Pe.getDocument=Pe.getDocumentOrThrow=Pe.getFromWindowOrThrow=Pe.getFromWindow=void 0;function bn(t){let e;return typeof window<"u"&&typeof window[t]<"u"&&(e=window[t]),e}Pe.getFromWindow=bn;function fi(t){const e=bn(t);if(!e)throw new Error(`${t} is not defined in Window`);return e}Pe.getFromWindowOrThrow=fi;function L8(){return fi("document")}Pe.getDocumentOrThrow=L8;function j8(){return bn("document")}var q1=Pe.getDocument=j8;function W8(){return fi("navigator")}Pe.getNavigatorOrThrow=W8;function z8(){return bn("navigator")}var Iu=Pe.getNavigator=z8;function H8(){return fi("location")}Pe.getLocationOrThrow=H8;function G8(){return bn("location")}var Q1=Pe.getLocation=G8;function V8(){return fi("crypto")}Pe.getCryptoOrThrow=V8;function q8(){return bn("crypto")}Pe.getCrypto=q8;function Q8(){return fi("localStorage")}Pe.getLocalStorageOrThrow=Q8;function K8(){return bn("localStorage")}Pe.getLocalStorage=K8;var Tu={};Object.defineProperty(Tu,"__esModule",{value:!0});var K1=Tu.getWindowMetadata=void 0;const Uf=Pe;function Z8(){let t,e;try{t=Uf.getDocumentOrThrow(),e=Uf.getLocationOrThrow()}catch{return null}function r(){const p=t.getElementsByTagName("link"),g=[];for(let w=0;w<p.length;w++){const b=p[w],A=b.getAttribute("rel");if(A&&A.toLowerCase().indexOf("icon")>-1){const y=b.getAttribute("href");if(y)if(y.toLowerCase().indexOf("https:")===-1&&y.toLowerCase().indexOf("http:")===-1&&y.indexOf("//")!==0){let S=e.protocol+"//"+e.host;if(y.indexOf("/")===0)S+=y;else{const m=e.pathname.split("/");m.pop();const _=m.join("/");S+=_+"/"+y}g.push(S)}else if(y.indexOf("//")===0){const S=e.protocol+y;g.push(S)}else g.push(y)}}return g}function n(...p){const g=t.getElementsByTagName("meta");for(let w=0;w<g.length;w++){const b=g[w],A=["itemprop","property","name"].map(y=>b.getAttribute(y)).filter(y=>y?p.includes(y):!1);if(A.length&&A){const y=b.getAttribute("content");if(y)return y}}return""}function o(){let p=n("name","og:site_name","og:title","twitter:title");return p||(p=t.title),p}function i(){return n("description","og:description","twitter:description","keywords")}const s=o(),a=i(),c=e.origin,l=r();return{description:a,url:c,icons:l,name:s}}K1=Tu.getWindowMetadata=Z8;var Ao={},Y8=t=>encodeURIComponent(t).replace(/[!'()*]/g,e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`),Z1="%[a-f0-9]{2}",Ff=new RegExp("("+Z1+")|([^%]+?)","gi"),Lf=new RegExp("("+Z1+")+","gi");function ul(t,e){try{return[decodeURIComponent(t.join(""))]}catch{}if(t.length===1)return t;e=e||1;var r=t.slice(0,e),n=t.slice(e);return Array.prototype.concat.call([],ul(r),ul(n))}function J8(t){try{return decodeURIComponent(t)}catch{for(var e=t.match(Ff)||[],r=1;r<e.length;r++)t=ul(e,r).join(""),e=t.match(Ff)||[];return t}}function X8(t){for(var e={"%FE%FF":"��","%FF%FE":"��"},r=Lf.exec(t);r;){try{e[r[0]]=decodeURIComponent(r[0])}catch{var n=J8(r[0]);n!==r[0]&&(e[r[0]]=n)}r=Lf.exec(t)}e["%C2"]="�";for(var o=Object.keys(e),i=0;i<o.length;i++){var s=o[i];t=t.replace(new RegExp(s,"g"),e[s])}return t}var eA=function(t){if(typeof t!="string")throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof t+"`");try{return t=t.replace(/\+/g," "),decodeURIComponent(t)}catch{return X8(t)}},tA=(t,e)=>{if(!(typeof t=="string"&&typeof e=="string"))throw new TypeError("Expected the arguments to be of type `string`");if(e==="")return[t];const r=t.indexOf(e);return r===-1?[t]:[t.slice(0,r),t.slice(r+e.length)]},rA=function(t,e){for(var r={},n=Object.keys(t),o=Array.isArray(e),i=0;i<n.length;i++){var s=n[i],a=t[s];(o?e.indexOf(s)!==-1:e(s,a,t))&&(r[s]=a)}return r};(function(t){const e=Y8,r=eA,n=tA,o=rA,i=m=>m==null,s=Symbol("encodeFragmentIdentifier");function a(m){switch(m.arrayFormat){case"index":return _=>(x,E)=>{const D=x.length;return E===void 0||m.skipNull&&E===null||m.skipEmptyString&&E===""?x:E===null?[...x,[d(_,m),"[",D,"]"].join("")]:[...x,[d(_,m),"[",d(D,m),"]=",d(E,m)].join("")]};case"bracket":return _=>(x,E)=>E===void 0||m.skipNull&&E===null||m.skipEmptyString&&E===""?x:E===null?[...x,[d(_,m),"[]"].join("")]:[...x,[d(_,m),"[]=",d(E,m)].join("")];case"colon-list-separator":return _=>(x,E)=>E===void 0||m.skipNull&&E===null||m.skipEmptyString&&E===""?x:E===null?[...x,[d(_,m),":list="].join("")]:[...x,[d(_,m),":list=",d(E,m)].join("")];case"comma":case"separator":case"bracket-separator":{const _=m.arrayFormat==="bracket-separator"?"[]=":"=";return x=>(E,D)=>D===void 0||m.skipNull&&D===null||m.skipEmptyString&&D===""?E:(D=D===null?"":D,E.length===0?[[d(x,m),_,d(D,m)].join("")]:[[E,d(D,m)].join(m.arrayFormatSeparator)])}default:return _=>(x,E)=>E===void 0||m.skipNull&&E===null||m.skipEmptyString&&E===""?x:E===null?[...x,d(_,m)]:[...x,[d(_,m),"=",d(E,m)].join("")]}}function c(m){let _;switch(m.arrayFormat){case"index":return(x,E,D)=>{if(_=/\[(\d*)\]$/.exec(x),x=x.replace(/\[\d*\]$/,""),!_){D[x]=E;return}D[x]===void 0&&(D[x]={}),D[x][_[1]]=E};case"bracket":return(x,E,D)=>{if(_=/(\[\])$/.exec(x),x=x.replace(/\[\]$/,""),!_){D[x]=E;return}if(D[x]===void 0){D[x]=[E];return}D[x]=[].concat(D[x],E)};case"colon-list-separator":return(x,E,D)=>{if(_=/(:list)$/.exec(x),x=x.replace(/:list$/,""),!_){D[x]=E;return}if(D[x]===void 0){D[x]=[E];return}D[x]=[].concat(D[x],E)};case"comma":case"separator":return(x,E,D)=>{const u=typeof E=="string"&&E.includes(m.arrayFormatSeparator),C=typeof E=="string"&&!u&&p(E,m).includes(m.arrayFormatSeparator);E=C?p(E,m):E;const T=u||C?E.split(m.arrayFormatSeparator).map(B=>p(B,m)):E===null?E:p(E,m);D[x]=T};case"bracket-separator":return(x,E,D)=>{const u=/(\[\])$/.test(x);if(x=x.replace(/\[\]$/,""),!u){D[x]=E&&p(E,m);return}const C=E===null?[]:E.split(m.arrayFormatSeparator).map(T=>p(T,m));if(D[x]===void 0){D[x]=C;return}D[x]=[].concat(D[x],C)};default:return(x,E,D)=>{if(D[x]===void 0){D[x]=E;return}D[x]=[].concat(D[x],E)}}}function l(m){if(typeof m!="string"||m.length!==1)throw new TypeError("arrayFormatSeparator must be single character string")}function d(m,_){return _.encode?_.strict?e(m):encodeURIComponent(m):m}function p(m,_){return _.decode?r(m):m}function g(m){return Array.isArray(m)?m.sort():typeof m=="object"?g(Object.keys(m)).sort((_,x)=>Number(_)-Number(x)).map(_=>m[_]):m}function w(m){const _=m.indexOf("#");return _!==-1&&(m=m.slice(0,_)),m}function b(m){let _="";const x=m.indexOf("#");return x!==-1&&(_=m.slice(x)),_}function A(m){m=w(m);const _=m.indexOf("?");return _===-1?"":m.slice(_+1)}function y(m,_){return _.parseNumbers&&!Number.isNaN(Number(m))&&typeof m=="string"&&m.trim()!==""?m=Number(m):_.parseBooleans&&m!==null&&(m.toLowerCase()==="true"||m.toLowerCase()==="false")&&(m=m.toLowerCase()==="true"),m}function S(m,_){_=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},_),l(_.arrayFormatSeparator);const x=c(_),E=Object.create(null);if(typeof m!="string"||(m=m.trim().replace(/^[?#&]/,""),!m))return E;for(const D of m.split("&")){if(D==="")continue;let[u,C]=n(_.decode?D.replace(/\+/g," "):D,"=");C=C===void 0?null:["comma","separator","bracket-separator"].includes(_.arrayFormat)?C:p(C,_),x(p(u,_),C,E)}for(const D of Object.keys(E)){const u=E[D];if(typeof u=="object"&&u!==null)for(const C of Object.keys(u))u[C]=y(u[C],_);else E[D]=y(u,_)}return _.sort===!1?E:(_.sort===!0?Object.keys(E).sort():Object.keys(E).sort(_.sort)).reduce((D,u)=>{const C=E[u];return C&&typeof C=="object"&&!Array.isArray(C)?D[u]=g(C):D[u]=C,D},Object.create(null))}t.extract=A,t.parse=S,t.stringify=(m,_)=>{if(!m)return"";_=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},_),l(_.arrayFormatSeparator);const x=C=>_.skipNull&&i(m[C])||_.skipEmptyString&&m[C]==="",E=a(_),D={};for(const C of Object.keys(m))x(C)||(D[C]=m[C]);const u=Object.keys(D);return _.sort!==!1&&u.sort(_.sort),u.map(C=>{const T=m[C];return T===void 0?"":T===null?d(C,_):Array.isArray(T)?T.length===0&&_.arrayFormat==="bracket-separator"?d(C,_)+"[]":T.reduce(E(C),[]).join("&"):d(C,_)+"="+d(T,_)}).filter(C=>C.length>0).join("&")},t.parseUrl=(m,_)=>{_=Object.assign({decode:!0},_);const[x,E]=n(m,"#");return Object.assign({url:x.split("?")[0]||"",query:S(A(m),_)},_&&_.parseFragmentIdentifier&&E?{fragmentIdentifier:p(E,_)}:{})},t.stringifyUrl=(m,_)=>{_=Object.assign({encode:!0,strict:!0,[s]:!0},_);const x=w(m.url).split("?")[0]||"",E=t.extract(m.url),D=t.parse(E,{sort:!1}),u=Object.assign(D,m.query);let C=t.stringify(u,_);C&&(C=`?${C}`);let T=b(m.url);return m.fragmentIdentifier&&(T=`#${_[s]?d(m.fragmentIdentifier,_):m.fragmentIdentifier}`),`${x}${C}${T}`},t.pick=(m,_,x)=>{x=Object.assign({parseFragmentIdentifier:!0,[s]:!1},x);const{url:E,query:D,fragmentIdentifier:u}=t.parseUrl(m,x);return t.stringifyUrl({url:E,query:o(D,_),fragmentIdentifier:u},x)},t.exclude=(m,_,x)=>{const E=Array.isArray(_)?D=>!_.includes(D):(D,u)=>!_(D,u);return t.pick(m,E,x)}})(Ao);const nA={waku:{publish:"waku_publish",batchPublish:"waku_batchPublish",subscribe:"waku_subscribe",batchSubscribe:"waku_batchSubscribe",subscription:"waku_subscription",unsubscribe:"waku_unsubscribe",batchUnsubscribe:"waku_batchUnsubscribe"},irn:{publish:"irn_publish",batchPublish:"irn_batchPublish",subscribe:"irn_subscribe",batchSubscribe:"irn_batchSubscribe",subscription:"irn_subscription",unsubscribe:"irn_unsubscribe",batchUnsubscribe:"irn_batchUnsubscribe"},iridium:{publish:"iridium_publish",batchPublish:"iridium_batchPublish",subscribe:"iridium_subscribe",batchSubscribe:"iridium_batchSubscribe",subscription:"iridium_subscription",unsubscribe:"iridium_unsubscribe",batchUnsubscribe:"iridium_batchUnsubscribe"}},iA=":";function Q9(t){const[e,r]=t.split(iA);return{namespace:e,reference:r}}function K9(t,e=[]){const r=[];return Object.keys(t).forEach(n=>{if(e.length&&!e.includes(n))return;const o=t[n];r.push(...o.accounts)}),r}function Y1(t,e){return t.includes(":")?[t]:e.chains||[]}const J1="base10",pt="base16",fl="base64pad",Bu="utf8",X1=0,Wo=1,oA=0,jf=1,dl=12,Ou=32;function Z9(){const t=Du.generateKeyPair();return{privateKey:jt(t.secretKey,pt),publicKey:jt(t.publicKey,pt)}}function Y9(){const t=Da.randomBytes(Ou);return jt(t,pt)}function J9(t,e){const r=Du.sharedKey(Mt(t,pt),Mt(e,pt),!0),n=new V6(Ba.SHA256,r).expand(Ou);return jt(n,pt)}function X9(t){const e=Ba.hash(Mt(t,pt));return jt(e,pt)}function e7(t){const e=Ba.hash(Mt(t,Bu));return jt(e,pt)}function sA(t){return Mt(`${t}`,J1)}function Ra(t){return Number(jt(t,J1))}function t7(t){const e=sA(typeof t.type<"u"?t.type:X1);if(Ra(e)===Wo&&typeof t.senderPublicKey>"u")throw new Error("Missing sender public key for type 1 envelope");const r=typeof t.senderPublicKey<"u"?Mt(t.senderPublicKey,pt):void 0,n=typeof t.iv<"u"?Mt(t.iv,pt):Da.randomBytes(dl),o=new _u.ChaCha20Poly1305(Mt(t.symKey,pt)).seal(n,Mt(t.message,Bu));return aA({type:e,sealed:o,iv:n,senderPublicKey:r})}function r7(t){const e=new _u.ChaCha20Poly1305(Mt(t.symKey,pt)),{sealed:r,iv:n}=ep(t.encoded),o=e.open(n,r);if(o===null)throw new Error("Failed to decrypt");return jt(o,Bu)}function aA(t){if(Ra(t.type)===Wo){if(typeof t.senderPublicKey>"u")throw new Error("Missing sender public key for type 1 envelope");return jt(Cf([t.type,t.senderPublicKey,t.iv,t.sealed]),fl)}return jt(Cf([t.type,t.iv,t.sealed]),fl)}function ep(t){const e=Mt(t,fl),r=e.slice(oA,jf),n=jf;if(Ra(r)===Wo){const a=n+Ou,c=a+dl,l=e.slice(n,a),d=e.slice(a,c),p=e.slice(c);return{type:r,sealed:p,iv:d,senderPublicKey:l}}const o=n+dl,i=e.slice(n,o),s=e.slice(o);return{type:r,sealed:s,iv:i}}function n7(t,e){const r=ep(t);return cA({type:Ra(r.type),senderPublicKey:typeof r.senderPublicKey<"u"?jt(r.senderPublicKey,pt):void 0,receiverPublicKey:e==null?void 0:e.receiverPublicKey})}function cA(t){const e=(t==null?void 0:t.type)||X1;if(e===Wo){if(typeof(t==null?void 0:t.senderPublicKey)>"u")throw new Error("missing sender public key");if(typeof(t==null?void 0:t.receiverPublicKey)>"u")throw new Error("missing receiver public key")}return{type:e,senderPublicKey:t==null?void 0:t.senderPublicKey,receiverPublicKey:t==null?void 0:t.receiverPublicKey}}function i7(t){return t.type===Wo&&typeof t.senderPublicKey=="string"&&typeof t.receiverPublicKey=="string"}var lA=Object.defineProperty,Wf=Object.getOwnPropertySymbols,uA=Object.prototype.hasOwnProperty,fA=Object.prototype.propertyIsEnumerable,zf=(t,e,r)=>e in t?lA(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Hf=(t,e)=>{for(var r in e||(e={}))uA.call(e,r)&&zf(t,r,e[r]);if(Wf)for(var r of Wf(e))fA.call(e,r)&&zf(t,r,e[r]);return t};const dA="ReactNative",mt={reactNative:"react-native",node:"node",browser:"browser",unknown:"unknown"},hA="js";function tp(){return typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u"}function ku(){return!q1()&&!!Iu()&&navigator.product===dA}function Ru(){return!tp()&&!!Iu()}function zo(){return ku()?mt.reactNative:tp()?mt.node:Ru()?mt.browser:mt.unknown}function pA(t,e){let r=Ao.parse(t);return r=Hf(Hf({},r),e),t=Ao.stringify(r),t}function o7(){return K1()||{name:"",description:"",url:"",icons:[""]}}function gA(){if(zo()===mt.reactNative&&typeof global<"u"&&typeof(global==null?void 0:global.Platform)<"u"){const{OS:r,Version:n}=global.Platform;return[r,n].join("-")}const t=a8();if(t===null)return"unknown";const e=t.os?t.os.replace(" ","").toLowerCase():"unknown";return t.type==="browser"?[e,t.name,t.version].join("-"):[e,t.version].join("-")}function wA(){var t;const e=zo();return e===mt.browser?[e,((t=Q1())==null?void 0:t.host)||"unknown"].join(":"):e}function bA(t,e,r){const n=gA(),o=wA();return[[t,e].join("-"),[hA,r].join("-"),n,o].join("/")}function s7({protocol:t,version:e,relayUrl:r,sdkVersion:n,auth:o,projectId:i,useOnCloseEvent:s}){const a=r.split("?"),c=bA(t,e,n),l={auth:o,ua:c,projectId:i,useOnCloseEvent:s||void 0},d=pA(a[1]||"",l);return a[0]+"?"+d}function Yr(t,e){return t.filter(r=>e.includes(r)).length===t.length}function a7(t){return Object.fromEntries(t.entries())}function c7(t){return new Map(Object.entries(t))}function l7(t=Xr.FIVE_MINUTES,e){const r=Xr.toMiliseconds(t||Xr.FIVE_MINUTES);let n,o,i;return{resolve:s=>{i&&n&&(clearTimeout(i),n(s))},reject:s=>{i&&o&&(clearTimeout(i),o(s))},done:()=>new Promise((s,a)=>{i=setTimeout(()=>{a(new Error(e))},r),n=s,o=a})}}function u7(t,e,r){return new Promise(async(n,o)=>{const i=setTimeout(()=>o(new Error(r)),e);try{const s=await t;n(s)}catch(s){o(s)}clearTimeout(i)})}function rp(t,e){if(typeof e=="string"&&e.startsWith(`${t}:`))return e;if(t.toLowerCase()==="topic"){if(typeof e!="string")throw new Error('Value must be "string" for expirer target type: topic');return`topic:${e}`}else if(t.toLowerCase()==="id"){if(typeof e!="number")throw new Error('Value must be "number" for expirer target type: id');return`id:${e}`}throw new Error(`Unknown expirer target type: ${t}`)}function f7(t){return rp("topic",t)}function d7(t){return rp("id",t)}function h7(t){const[e,r]=t.split(":"),n={id:void 0,topic:void 0};if(e==="topic"&&typeof r=="string")n.topic=r;else if(e==="id"&&Number.isInteger(Number(r)))n.id=Number(r);else throw new Error(`Invalid target, expected id:number or topic:string, got ${e}:${r}`);return n}function p7(t,e){return Xr.fromMiliseconds((e||Date.now())+Xr.toMiliseconds(t))}function g7(t){return Date.now()>=Xr.toMiliseconds(t)}function w7(t,e){return`${t}${e?`:${e}`:""}`}function hc(t=[],e=[]){return[...new Set([...t,...e])]}async function b7({id:t,topic:e,wcDeepLink:r}){try{if(!r)return;const n=typeof r=="string"?JSON.parse(r):r;let o=n==null?void 0:n.href;if(typeof o!="string")return;o.endsWith("/")&&(o=o.slice(0,-1));const i=`${o}/wc?requestId=${t}&sessionTopic=${e}`,s=zo();s===mt.browser?i.startsWith("https://")?window.open(i,"_blank","noreferrer noopener"):window.open(i,"_self","noreferrer noopener"):s===mt.reactNative&&typeof(global==null?void 0:global.Linking)<"u"&&await global.Linking.openURL(i)}catch(n){console.error(n)}}const mA="irn";function m7(t){return(t==null?void 0:t.relay)||{protocol:mA}}function y7(t){const e=nA[t];if(typeof e>"u")throw new Error(`Relay Protocol not supported: ${t}`);return e}var yA=Object.defineProperty,Gf=Object.getOwnPropertySymbols,vA=Object.prototype.hasOwnProperty,AA=Object.prototype.propertyIsEnumerable,Vf=(t,e,r)=>e in t?yA(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,CA=(t,e)=>{for(var r in e||(e={}))vA.call(e,r)&&Vf(t,r,e[r]);if(Gf)for(var r of Gf(e))AA.call(e,r)&&Vf(t,r,e[r]);return t};function xA(t,e="-"){const r={},n="relay"+e;return Object.keys(t).forEach(o=>{if(o.startsWith(n)){const i=o.replace(n,""),s=t[o];r[i]=s}}),r}function v7(t){const e=t.indexOf(":"),r=t.indexOf("?")!==-1?t.indexOf("?"):void 0,n=t.substring(0,e),o=t.substring(e+1,r).split("@"),i=typeof r<"u"?t.substring(r):"",s=Ao.parse(i);return{protocol:n,topic:EA(o[0]),version:parseInt(o[1],10),symKey:s.symKey,relay:xA(s)}}function EA(t){return t.startsWith("//")?t.substring(2):t}function _A(t,e="-"){const r="relay",n={};return Object.keys(t).forEach(o=>{const i=r+e+o;t[o]&&(n[i]=t[o])}),n}function A7(t){return`${t.protocol}:${t.topic}@${t.version}?`+Ao.stringify(CA({symKey:t.symKey},_A(t.relay)))}var SA=Object.defineProperty,DA=Object.defineProperties,PA=Object.getOwnPropertyDescriptors,qf=Object.getOwnPropertySymbols,IA=Object.prototype.hasOwnProperty,TA=Object.prototype.propertyIsEnumerable,Qf=(t,e,r)=>e in t?SA(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,BA=(t,e)=>{for(var r in e||(e={}))IA.call(e,r)&&Qf(t,r,e[r]);if(qf)for(var r of qf(e))TA.call(e,r)&&Qf(t,r,e[r]);return t},OA=(t,e)=>DA(t,PA(e));function di(t){const e=[];return t.forEach(r=>{const[n,o]=r.split(":");e.push(`${n}:${o}`)}),e}function kA(t){const e=[];return Object.values(t).forEach(r=>{e.push(...di(r.accounts))}),e}function RA(t,e){const r=[];return Object.values(t).forEach(n=>{di(n.accounts).includes(e)&&r.push(...n.methods)}),r}function NA(t,e){const r=[];return Object.values(t).forEach(n=>{di(n.accounts).includes(e)&&r.push(...n.events)}),r}function C7(t,e){const r=GA(t,e);if(r)throw new Error(r.message);const n={};for(const[o,i]of Object.entries(t))n[o]={methods:i.methods,events:i.events,chains:i.accounts.map(s=>`${s.split(":")[0]}:${s.split(":")[1]}`)};return n}function np(t){return t.includes(":")}function MA(t){return np(t)?t.split(":")[0]:t}function ip(t){var e,r,n;const o={};if(!Nu(t))return o;for(const[i,s]of Object.entries(t)){const a=np(i)?[i]:s.chains,c=s.methods||[],l=s.events||[],d=MA(i);o[d]=OA(BA({},o[d]),{chains:hc(a,(e=o[d])==null?void 0:e.chains),methods:hc(c,(r=o[d])==null?void 0:r.methods),events:hc(l,(n=o[d])==null?void 0:n.events)})}return o}const $A={INVALID_METHOD:{message:"Invalid method.",code:1001},INVALID_EVENT:{message:"Invalid event.",code:1002},INVALID_UPDATE_REQUEST:{message:"Invalid update request.",code:1003},INVALID_EXTEND_REQUEST:{message:"Invalid extend request.",code:1004},INVALID_SESSION_SETTLE_REQUEST:{message:"Invalid session settle request.",code:1005},UNAUTHORIZED_METHOD:{message:"Unauthorized method.",code:3001},UNAUTHORIZED_EVENT:{message:"Unauthorized event.",code:3002},UNAUTHORIZED_UPDATE_REQUEST:{message:"Unauthorized update request.",code:3003},UNAUTHORIZED_EXTEND_REQUEST:{message:"Unauthorized extend request.",code:3004},USER_REJECTED:{message:"User rejected.",code:5e3},USER_REJECTED_CHAINS:{message:"User rejected chains.",code:5001},USER_REJECTED_METHODS:{message:"User rejected methods.",code:5002},USER_REJECTED_EVENTS:{message:"User rejected events.",code:5003},UNSUPPORTED_CHAINS:{message:"Unsupported chains.",code:5100},UNSUPPORTED_METHODS:{message:"Unsupported methods.",code:5101},UNSUPPORTED_EVENTS:{message:"Unsupported events.",code:5102},UNSUPPORTED_ACCOUNTS:{message:"Unsupported accounts.",code:5103},UNSUPPORTED_NAMESPACE_KEY:{message:"Unsupported namespace key.",code:5104},USER_DISCONNECTED:{message:"User disconnected.",code:6e3},SESSION_SETTLEMENT_FAILED:{message:"Session settlement failed.",code:7e3},WC_METHOD_UNSUPPORTED:{message:"Unsupported wc_ method.",code:10001}},UA={NOT_INITIALIZED:{message:"Not initialized.",code:1},NO_MATCHING_KEY:{message:"No matching key.",code:2},RESTORE_WILL_OVERRIDE:{message:"Restore will override.",code:3},RESUBSCRIBED:{message:"Resubscribed.",code:4},MISSING_OR_INVALID:{message:"Missing or invalid.",code:5},EXPIRED:{message:"Expired.",code:6},UNKNOWN_TYPE:{message:"Unknown type.",code:7},MISMATCHED_TOPIC:{message:"Mismatched topic.",code:8},NON_CONFORMING_NAMESPACES:{message:"Non conforming namespaces.",code:9}};function Ar(t,e){const{message:r,code:n}=UA[t];return{message:e?`${r} ${e}`:r,code:n}}function Zn(t,e){const{message:r,code:n}=$A[t];return{message:e?`${r} ${e}`:r,code:n}}function Na(t,e){return Array.isArray(t)?typeof e<"u"&&t.length?t.every(e):!0:!1}function Nu(t){return Object.getPrototypeOf(t)===Object.prototype&&Object.keys(t).length}function en(t){return typeof t>"u"}function Ot(t,e){return e&&en(t)?!0:typeof t=="string"&&!!t.trim().length}function Mu(t,e){return e&&en(t)?!0:typeof t=="number"&&!isNaN(t)}function x7(t,e){const{requiredNamespaces:r}=e,n=Object.keys(t.namespaces),o=Object.keys(r);let i=!0;return Yr(o,n)?(n.forEach(s=>{const{accounts:a,methods:c,events:l}=t.namespaces[s],d=di(a),p=r[s];(!Yr(Y1(s,p),d)||!Yr(p.methods,c)||!Yr(p.events,l))&&(i=!1)}),i):!1}function Gs(t){return Ot(t,!1)&&t.includes(":")?t.split(":").length===2:!1}function FA(t){if(Ot(t,!1)&&t.includes(":")){const e=t.split(":");if(e.length===3){const r=e[0]+":"+e[1];return!!e[2]&&Gs(r)}}return!1}function E7(t){if(Ot(t,!1))try{return typeof new URL(t)<"u"}catch{return!1}return!1}function _7(t){var e;return(e=t==null?void 0:t.proposer)==null?void 0:e.publicKey}function S7(t){return t==null?void 0:t.topic}function D7(t,e){let r=null;return Ot(t==null?void 0:t.publicKey,!1)||(r=Ar("MISSING_OR_INVALID",`${e} controller public key should be a string`)),r}function Kf(t){let e=!0;return Na(t)?t.length&&(e=t.every(r=>Ot(r,!1))):e=!1,e}function LA(t,e,r){let n=null;return Na(e)&&e.length?e.forEach(o=>{n||Gs(o)||(n=Zn("UNSUPPORTED_CHAINS",`${r}, chain ${o} should be a string and conform to "namespace:chainId" format`))}):Gs(t)||(n=Zn("UNSUPPORTED_CHAINS",`${r}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)),n}function jA(t,e,r){let n=null;return Object.entries(t).forEach(([o,i])=>{if(n)return;const s=LA(o,Y1(o,i),`${e} ${r}`);s&&(n=s)}),n}function WA(t,e){let r=null;return Na(t)?t.forEach(n=>{r||FA(n)||(r=Zn("UNSUPPORTED_ACCOUNTS",`${e}, account ${n} should be a string and conform to "namespace:chainId:address" format`))}):r=Zn("UNSUPPORTED_ACCOUNTS",`${e}, accounts should be an array of strings conforming to "namespace:chainId:address" format`),r}function zA(t,e){let r=null;return Object.values(t).forEach(n=>{if(r)return;const o=WA(n==null?void 0:n.accounts,`${e} namespace`);o&&(r=o)}),r}function HA(t,e){let r=null;return Kf(t==null?void 0:t.methods)?Kf(t==null?void 0:t.events)||(r=Zn("UNSUPPORTED_EVENTS",`${e}, events should be an array of strings or empty array for no events`)):r=Zn("UNSUPPORTED_METHODS",`${e}, methods should be an array of strings or empty array for no methods`),r}function op(t,e){let r=null;return Object.values(t).forEach(n=>{if(r)return;const o=HA(n,`${e}, namespace`);o&&(r=o)}),r}function P7(t,e,r){let n=null;if(t&&Nu(t)){const o=op(t,e);o&&(n=o);const i=jA(t,e,r);i&&(n=i)}else n=Ar("MISSING_OR_INVALID",`${e}, ${r} should be an object with data`);return n}function GA(t,e){let r=null;if(t&&Nu(t)){const n=op(t,e);n&&(r=n);const o=zA(t,e);o&&(r=o)}else r=Ar("MISSING_OR_INVALID",`${e}, namespaces should be an object with data`);return r}function VA(t){return Ot(t.protocol,!0)}function I7(t,e){let r=!1;return e&&!t?r=!0:t&&Na(t)&&t.length&&t.forEach(n=>{r=VA(n)}),r}function T7(t){return typeof t=="number"}function B7(t){return typeof t<"u"&&typeof t!==null}function O7(t){return!(!t||typeof t!="object"||!t.code||!Mu(t.code,!1)||!t.message||!Ot(t.message,!1))}function k7(t){return!(en(t)||!Ot(t.method,!1))}function R7(t){return!(en(t)||en(t.result)&&en(t.error)||!Mu(t.id,!1)||!Ot(t.jsonrpc,!1))}function N7(t){return!(en(t)||!Ot(t.name,!1))}function M7(t,e){return!(!Gs(e)||!kA(t).includes(e))}function $7(t,e,r){return Ot(r,!1)?RA(t,e).includes(r):!1}function U7(t,e,r){return Ot(r,!1)?NA(t,e).includes(r):!1}function F7(t,e,r){let n=null;const o=qA(t),i=QA(e),s=Object.keys(o),a=Object.keys(i),c=Zf(Object.keys(t)),l=Zf(Object.keys(e)),d=c.filter(p=>!l.includes(p));return d.length&&(n=Ar("NON_CONFORMING_NAMESPACES",`${r} namespaces keys don't satisfy requiredNamespaces.
      Required: ${d.toString()}
      Received: ${Object.keys(e).toString()}`)),Yr(s,a)||(n=Ar("NON_CONFORMING_NAMESPACES",`${r} namespaces chains don't satisfy required namespaces.
      Required: ${s.toString()}
      Approved: ${a.toString()}`)),Object.keys(e).forEach(p=>{if(!p.includes(":")||n)return;const g=di(e[p].accounts);g.includes(p)||(n=Ar("NON_CONFORMING_NAMESPACES",`${r} namespaces accounts don't satisfy namespace accounts for ${p}
        Required: ${p}
        Approved: ${g.toString()}`))}),s.forEach(p=>{n||(Yr(o[p].methods,i[p].methods)?Yr(o[p].events,i[p].events)||(n=Ar("NON_CONFORMING_NAMESPACES",`${r} namespaces events don't satisfy namespace events for ${p}`)):n=Ar("NON_CONFORMING_NAMESPACES",`${r} namespaces methods don't satisfy namespace methods for ${p}`))}),n}function qA(t){const e={};return Object.keys(t).forEach(r=>{var n;r.includes(":")?e[r]=t[r]:(n=t[r].chains)==null||n.forEach(o=>{e[o]={methods:t[r].methods,events:t[r].events}})}),e}function Zf(t){return[...new Set(t.map(e=>e.includes(":")?e.split(":")[0]:e))]}function QA(t){const e={};return Object.keys(t).forEach(r=>{if(r.includes(":"))e[r]=t[r];else{const n=di(t[r].accounts);n==null||n.forEach(o=>{e[o]={accounts:t[r].accounts.filter(i=>i.includes(`${o}:`)),methods:t[r].methods,events:t[r].events}})}}),e}function L7(t,e){return Mu(t,!1)&&t<=e.max&&t>=e.min}function j7(){const t=zo();return new Promise(e=>{switch(t){case mt.browser:e(KA());break;case mt.reactNative:e(ZA());break;case mt.node:e(YA());break;default:e(!0)}})}function KA(){return Ru()&&(navigator==null?void 0:navigator.onLine)}async function ZA(){if(ku()&&typeof global<"u"&&global!=null&&global.NetInfo){const t=await(global==null?void 0:global.NetInfo.fetch());return t==null?void 0:t.isConnected}return!0}function YA(){return!0}function W7(t){switch(zo()){case mt.browser:JA(t);break;case mt.reactNative:XA(t);break}}function JA(t){Ru()&&(window.addEventListener("online",()=>t(!0)),window.addEventListener("offline",()=>t(!1)))}function XA(t){ku()&&typeof global<"u"&&global!=null&&global.NetInfo&&(global==null||global.NetInfo.addEventListener(e=>t(e==null?void 0:e.isConnected)))}const pc={};class z7{static get(e){return pc[e]}static set(e,r){pc[e]=r}static delete(e){delete pc[e]}}var sp="eip155",eC="store",ap="requestedChains",hl="wallet_addEthereumChain",Re,ki,rs,pl,$u,cp,ns,gl,wl,lp,Vs,Uu,Sn,Si,qs,Fu,Qs,Lu,Ks,ju,tC=class extends Sl{constructor(t){super({...t,options:{isNewChainsStale:!0,...t.options}}),ut(this,rs),ut(this,$u),ut(this,ns),ut(this,wl),ut(this,Vs),ut(this,Sn),ut(this,qs),ut(this,Qs),ut(this,Ks),this.id="walletConnect",this.name="WalletConnect",this.ready=!0,ut(this,Re,void 0),ut(this,ki,void 0),this.onAccountsChanged=e=>{e.length===0?this.emit("disconnect"):this.emit("change",{account:$t(e[0])})},this.onChainChanged=e=>{const r=Number(e),n=this.isChainUnsupported(r);this.emit("change",{chain:{id:r,unsupported:n}})},this.onDisconnect=()=>{Qe(this,Sn,Si).call(this,[]),this.emit("disconnect")},this.onDisplayUri=e=>{this.emit("message",{type:"display_uri",data:e})},this.onConnect=()=>{this.emit("connect",{})},Qe(this,rs,pl).call(this)}async connect({chainId:t,pairingTopic:e}={}){var r,n,o,i,s;try{let a=t;if(!a){const b=(r=this.storage)==null?void 0:r.getItem(eC),A=(i=(o=(n=b==null?void 0:b.state)==null?void 0:n.data)==null?void 0:o.chain)==null?void 0:i.id;A&&!this.isChainUnsupported(A)?a=A:a=(s=this.chains[0])==null?void 0:s.id}if(!a)throw new Error("No chains found on connector.");const c=await this.getProvider();Qe(this,wl,lp).call(this);const l=Qe(this,ns,gl).call(this);if(c.session&&l&&await c.disconnect(),!c.session||l){const b=this.chains.filter(A=>A.id!==a).map(A=>A.id);this.emit("message",{type:"connecting"}),await c.connect({pairingTopic:e,chains:[a],optionalChains:b.length?b:void 0}),Qe(this,Sn,Si).call(this,this.chains.map(({id:A})=>A))}const d=await c.enable(),p=$t(d[0]),g=await this.getChainId(),w=this.isChainUnsupported(g);return{account:p,chain:{id:g,unsupported:w}}}catch(a){throw/user rejected/i.test(a==null?void 0:a.message)?new dt(a):a}}async disconnect(){const t=await this.getProvider();try{await t.disconnect()}catch(e){if(!/No matching key/i.test(e.message))throw e}finally{Qe(this,Vs,Uu).call(this),Qe(this,Sn,Si).call(this,[])}}async getAccount(){const{accounts:t}=await this.getProvider();return $t(t[0])}async getChainId(){const{chainId:t}=await this.getProvider();return t}async getProvider({chainId:t}={}){return xe(this,Re)||await Qe(this,rs,pl).call(this),t&&await this.switchChain(t),xe(this,Re)}async getWalletClient({chainId:t}={}){const[e,r]=await Promise.all([this.getProvider({chainId:t}),this.getAccount()]),n=this.chains.find(o=>o.id===t);if(!e)throw new Error("provider is required.");return Yl({account:r,chain:n,transport:Vl(e)})}async isAuthorized(){try{const[t,e]=await Promise.all([this.getAccount(),this.getProvider()]),r=Qe(this,ns,gl).call(this);if(!t)return!1;if(r&&e.session){try{await e.disconnect()}catch{}return!1}return!0}catch{return!1}}async switchChain(t){var r,n;const e=this.chains.find(o=>o.id===t);if(!e)throw new lr(new Error("chain not found on connector."));try{const o=await this.getProvider(),i=Qe(this,Qs,Lu).call(this),s=Qe(this,Ks,ju).call(this);if(!i.includes(t)&&s.includes(hl)){await o.request({method:hl,params:[{chainId:ne(e.id),blockExplorerUrls:[(n=(r=e.blockExplorers)==null?void 0:r.default)==null?void 0:n.url],chainName:e.name,nativeCurrency:e.nativeCurrency,rpcUrls:[...e.rpcUrls.default.http]}]});const c=Qe(this,qs,Fu).call(this);c.push(t),Qe(this,Sn,Si).call(this,c)}return await o.request({method:"wallet_switchEthereumChain",params:[{chainId:ne(t)}]}),e}catch(o){const i=typeof o=="string"?o:o==null?void 0:o.message;throw/user rejected request/i.test(i)?new dt(o):new lr(o)}}};Re=new WeakMap;ki=new WeakMap;rs=new WeakSet;pl=async function(){return!xe(this,ki)&&typeof window<"u"&&$i(this,ki,Qe(this,$u,cp).call(this)),xe(this,ki)};$u=new WeakSet;cp=async function(){const{EthereumProvider:t,OPTIONAL_EVENTS:e,OPTIONAL_METHODS:r}=await Ri(()=>import("./index.es.f8b2c498.js"),["./index.es.f8b2c498.js","./preload-helper.a4192956.js","./events.3c6e9eb7.js"],import.meta.url),[n,...o]=this.chains.map(({id:i})=>i);if(n){const{projectId:i,showQrModal:s=!0,qrModalOptions:a,metadata:c,relayUrl:l}=this.options;$i(this,Re,await t.init({showQrModal:s,qrModalOptions:a,projectId:i,optionalMethods:r,optionalEvents:e,chains:[n],optionalChains:o.length?o:void 0,rpcMap:Object.fromEntries(this.chains.map(d=>[d.id,d.rpcUrls.default.http[0]])),metadata:c,relayUrl:l}))}};ns=new WeakSet;gl=function(){if(Qe(this,Ks,ju).call(this).includes(hl)||!this.options.isNewChainsStale)return!1;const e=Qe(this,qs,Fu).call(this),r=this.chains.map(({id:o})=>o),n=Qe(this,Qs,Lu).call(this);return n.length&&!n.some(o=>r.includes(o))?!1:!r.every(o=>e.includes(o))};wl=new WeakSet;lp=function(){xe(this,Re)&&(Qe(this,Vs,Uu).call(this),xe(this,Re).on("accountsChanged",this.onAccountsChanged),xe(this,Re).on("chainChanged",this.onChainChanged),xe(this,Re).on("disconnect",this.onDisconnect),xe(this,Re).on("session_delete",this.onDisconnect),xe(this,Re).on("display_uri",this.onDisplayUri),xe(this,Re).on("connect",this.onConnect))};Vs=new WeakSet;Uu=function(){xe(this,Re)&&(xe(this,Re).removeListener("accountsChanged",this.onAccountsChanged),xe(this,Re).removeListener("chainChanged",this.onChainChanged),xe(this,Re).removeListener("disconnect",this.onDisconnect),xe(this,Re).removeListener("session_delete",this.onDisconnect),xe(this,Re).removeListener("display_uri",this.onDisplayUri),xe(this,Re).removeListener("connect",this.onConnect))};Sn=new WeakSet;Si=function(t){var e;(e=this.storage)==null||e.setItem(ap,t)};qs=new WeakSet;Fu=function(){var t;return((t=this.storage)==null?void 0:t.getItem(ap))??[]};Qs=new WeakSet;Lu=function(){var n,o,i;if(!xe(this,Re))return[];const t=(n=xe(this,Re).session)==null?void 0:n.namespaces;return t?((i=(o=ip(t)[sp])==null?void 0:o.chains)==null?void 0:i.map(s=>parseInt(s.split(":")[1]||"")))??[]:[]};Ks=new WeakSet;ju=function(){var n,o;if(!xe(this,Re))return[];const t=(n=xe(this,Re).session)==null?void 0:n.namespaces;return t?((o=ip(t)[sp])==null?void 0:o.methods)??[]:[]};function rC(){return function(t){return t.rpcUrls.public.http[0]?{chain:t,rpcUrls:t.rpcUrls.public}:null}}const nC=oe.getBlockchainApiUrl();function iC({projectId:t}){return function(r){if(![1,5,11155111,10,420,42161,421613,137,80001,42220,1313161554,1313161555,56,97,43114,43113,100,8453,84531,7777777,999,324,280].includes(r.id))return null;const o=`${nC}/v1/?chainId=${qt}:${r.id}&projectId=${t}`;return{chain:{...r,rpcUrls:{...r.rpcUrls,default:{http:[o]}}},rpcUrls:{http:[o]}}}}function oC({projectId:t,chains:e,appName:r}){const{publicClient:n}=vm(e,[iC({projectId:t}),rC()],{retryCount:1,stallTimeout:3e3});return Bm({autoConnect:!0,connectors:[new tC({chains:e,options:{projectId:t,showQrModal:!1}}),new nh({chains:e,options:{shimDisconnect:!0}}),new d6({chains:e,options:{appName:r}})],publicClient:n})}function sC(t){return new n6({...t,_sdkVersion:`html-wagmi-${S1}`})}function aC(t){let e;const r=t[1].default,n=_t(r,t,t[2],null);return{c(){n&&n.c()},l(o){n&&n.l(o)},m(o,i){n&&n.m(o,i),e=!0},p(o,i){n&&n.p&&(!e||i&4)&&St(n,r,o,o[2],e?Pt(r,o[2],i,null):Dt(o[2]),null)},i(o){e||(X(n,o),e=!0)},o(o){ge(n,o),e=!1},d(o){n&&n.d(o)}}}function Yf(t){let e,r='<a href="/">INNOVATION STATION</a>';return{c(){e=Ke("strong"),e.innerHTML=r,this.h()},l(n){e=Ze(n,"STRONG",{class:!0,"data-svelte-h":!0}),gp(e)!=="svelte-nasmab"&&(e.innerHTML=r),this.h()},h(){Y(e,"class","logo svelte-kgv073")},m(n,o){Je(n,e,o)},d(n){n&&he(e)}}}function cC(t){let e,r=t[0].url.pathname!=="/"&&Yf();return{c(){r&&r.c(),e=zu()},l(n){r&&r.l(n),e=zu()},m(n,o){r&&r.m(n,o),Je(n,e,o)},p(n,o){n[0].url.pathname!=="/"?r||(r=Yf(),r.c(),r.m(e.parentNode,e)):r&&(r.d(1),r=null)},d(n){n&&he(e),r&&r.d(n)}}}function lC(t){let e,r,n,o,i,s;return e=new Hu({props:{name:"STUDIO",link:"studio"}}),n=new Hu({props:{name:"MARKET",link:"market"}}),{c(){ss(e.$$.fragment),r=kt(),ss(n.$$.fragment),o=kt(),i=Ke("w3m-button"),this.h()},l(a){as(e.$$.fragment,a),r=Rt(a),as(n.$$.fragment,a),o=Rt(a),i=Ze(a,"W3M-BUTTON",{label:!0}),tt(i).forEach(he),this.h()},h(){hp(i,"label","Connect")},m(a,c){cs(e,a,c),Je(a,r,c),cs(n,a,c),Je(a,o,c),Je(a,i,c),s=!0},p:pp,i(a){s||(X(e.$$.fragment,a),X(n.$$.fragment,a),s=!0)},o(a){ge(e.$$.fragment,a),ge(n.$$.fragment,a),s=!1},d(a){a&&(he(r),he(o),he(i)),ls(e,a),ls(n,a)}}}function uC(t){let e,r;return e=new Pp({props:{background:"bg-transparent",$$slots:{trail:[lC],lead:[cC]},$$scope:{ctx:t}}}),{c(){ss(e.$$.fragment)},l(n){as(e.$$.fragment,n)},m(n,o){cs(e,n,o),r=!0},p(n,o){const i={};o&5&&(i.$$scope={dirty:o,ctx:n}),e.$set(i)},i(n){r||(X(e.$$.fragment,n),r=!0)},o(n){ge(e.$$.fragment,n),r=!1},d(n){ls(e,n)}}}function fC(t){let e,r;return e=new zp({props:{$$slots:{header:[uC],default:[aC]},$$scope:{ctx:t}}}),{c(){ss(e.$$.fragment)},l(n){as(e.$$.fragment,n)},m(n,o){cs(e,n,o),r=!0},p(n,[o]){const i={};o&5&&(i.$$scope={dirty:o,ctx:n}),e.$set(i)},i(n){r||(X(e.$$.fragment,n),r=!0)},o(n){ge(e.$$.fragment,n),r=!1},d(n){ls(e,n)}}}const Jf="1b0aad06235a3007b00055160c73fe1d";function dC(t,e,r){let n;dp(t,wp,c=>r(0,n=c));let{$$slots:o={},$$scope:i}=e;const s=[Di,yg],a=oC({chains:s,projectId:Jf,appName:"Web3Modal"});return sC({wagmiConfig:a,projectId:Jf,chains:s}),t.$$set=c=>{"$$scope"in c&&r(2,i=c.$$scope)},[n,o,i]}class H7 extends ml{constructor(e){super(),yl(this,e,dC,fC,bl,{})}}export{ct as $,Lt as A,Rr as B,Et as C,fo as D,Rs as E,ho as F,un as G,Ns as H,Nr as I,Kc as J,dn as K,Jt as L,ks as M,go as N,uo as O,cn as P,lt as Q,gt as R,Us as S,vg as T,Te as U,Tt as V,zc as W,To as X,vC as Y,$ as Z,Zs as _,w3 as a,tp as a$,Bn as a0,Mi as a1,Ow as a2,sa as a3,cr as a4,xo as a5,Pi as a6,Kt as a7,H as a8,R as a9,i7 as aA,t7 as aB,n7 as aC,r7 as aD,ep as aE,Ra as aF,pt as aG,u7 as aH,j7 as aI,s7 as aJ,W7 as aK,Wo as aL,p7 as aM,A7 as aN,v7 as aO,l7 as aP,w7 as aQ,Zn as aR,g7 as aS,B7 as aT,E7 as aU,Ot as aV,h7 as aW,f7 as aX,d7 as aY,ku as aZ,Ru as a_,J as aa,F as ab,W as ac,k as ad,A5 as ae,de as af,U as ag,Mo as ah,wd as ai,yC as aj,Xr as ak,ie as al,Wt as am,Da as an,Mt as ao,jt as ap,Cf as aq,en as ar,_7 as as,S7 as at,Ar as au,Z9 as av,Y9 as aw,J9 as ax,X9 as ay,cA as az,Ln as b,a7 as b0,c7 as b1,e7 as b2,m7 as b3,y7 as b4,Na as b5,o7 as b6,Nu as b7,C7 as b8,b7 as b9,x7 as ba,z7 as bb,I7 as bc,P7 as bd,GA as be,F7 as bf,O7 as bg,VA as bh,D7 as bi,M7 as bj,k7 as bk,$7 as bl,L7 as bm,R7 as bn,N7 as bo,U7 as bp,T7 as bq,MA as br,np as bs,hc as bt,Q9 as bu,K9 as bv,Y6 as bw,D1 as bx,H7 as by,ao as c,Hc as d,co as e,Es as f,jn as g,Wn as h,g3 as i,_s as j,ur as k,Ss as l,zn as m,ln as n,Ds as o,Or as p,kr as q,lo as r,$h as s,Is as t,Yt as u,fn as v,Ts as w,Bs as x,fr as y,Os as z};
