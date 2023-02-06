"use strict";(self.webpackChunktodos=self.webpackChunktodos||[]).push([[735],{4735:function(n,e,t){t.r(e),t.d(e,{default:function(){return x}});var o=t(1413),r=t(885),c=t(2791),a=t(9195),s=t(3233),i=t(3247),u=t(1701),l=t(184);var d=function(n){var e=n.handleClickEditFolder,t=n.handleClickDeleteFolder;return(0,l.jsxs)("div",{className:"edit-and-delete",children:[(0,l.jsx)("span",{className:"svg-edit",onClick:e,children:i.Z}),(0,l.jsx)("span",{className:"svg-delete",onClick:t,children:u.Z})]})},f=t(5281),h=t(3504),p=t(6871),v=t(2338);function m(){var n,e,i=(0,c.useContext)(s.Z),u=(0,r.Z)(i,3),m=u[0],x=(u[1],u[2]),g=(0,c.useState)(!1),C=(0,r.Z)(g,2),Z=(C[0],C[1],(0,a.cI)({mode:"onBlur"})),j=Z.register,w=Z.handleSubmit,b=Z.setValue,k=Z.setFocus,y=Z.formState.errors,L=(0,p.s0)(),N=(0,c.useCallback)((function(n){(0,f.vK)(n.inputfolder),b("inputfolder","",{shouldDirty:!0}),k("inputfolder")}),[]),H=(0,c.useCallback)((function(n){L("/edit-folder/".concat(n))}),[]),A=(0,c.useCallback)((function(n){t.g.confirm("Ban co chac chan muon xoa danh muc nay chu\nNeu ok toan bo du lieu di cung cung se bi mat")&&(0,f.vE)(n)}),[]);return(0,l.jsxs)("div",{className:"wrapper",children:[(0,l.jsxs)("div",{className:"header",children:[(0,l.jsx)("div",{className:"gradient",children:(0,l.jsx)("h1",{children:"Tasks Lists"})}),(0,l.jsx)("p",{children:"A list of files"}),(0,l.jsx)("form",{onSubmit:w(N),children:(0,l.jsxs)("div",{className:"bar-add-folder",children:[(0,l.jsxs)("div",{className:"bar-input",children:[(0,l.jsx)("input",(0,o.Z)({type:"text",placeholder:"Add your new folder..."},j("inputfolder",{required:"Please enter before pressing submit",pattern:{value:/^([^!@#$&%^()-_=+<>?;:'"{[}]\|.,`~*]|[a-zA-Z0-9 ])+$/g,message:"Do not enter special characters"}}))),"required"===(null===(n=y.inputfolder)||void 0===n?void 0:n.type)&&(0,l.jsx)("p",{children:y.inputfolder.message}),"pattern"===(null===(e=y.inputfolder)||void 0===e?void 0:e.type)&&(0,l.jsx)("p",{children:y.inputfolder.message})]}),(0,l.jsx)("div",{className:"submit-add",children:(0,l.jsx)("button",{children:"Add folder"})}),(0,l.jsx)("br",{})]})})]}),(0,l.jsxs)("div",{className:"folder",children:[!x&&(0,l.jsx)(v.Z,{}),(0,l.jsx)("ul",{className:"list",children:m.map((function(n,e){return(0,l.jsxs)("li",{children:[(0,l.jsx)(h.rU,{to:"/folder?todo=".concat(e),children:n.name}),(0,l.jsx)(d,{handleClickEditFolder:function(){H(e)},handleClickDeleteFolder:function(){A(n.id)}})]},e)}))})]})]})}var x=(0,c.memo)(m)},2338:function(n,e,t){var o=t(184);e.Z=function(){return(0,o.jsx)("div",{className:"wrapper-loading-data",children:(0,o.jsx)("div",{className:"loader"})})}},5281:function(n,e,t){t.d(e,{vK:function(){return x},vm:function(){return Z},yp:function(){return b},vE:function(){return g},hY:function(){return w},j2:function(){return v},wD:function(){return C},Vq:function(){return j}});var o=t(2982),r=t(4165),c=t(1413),a=t(5861),s=t(6724),i=t(2810),u=t(2426),l=t(3971),d=t(797),f=(0,u.ZF)({apiKey:"AIzaSyC_geW_7W4F64snJv1yhfeRlGf6GG2lzb8",authDomain:"todoapp-ffbef.firebaseapp.com",projectId:"todoapp-ffbef",storageBucket:"todoapp-ffbef.appspot.com",messagingSenderId:"1065321165477",appId:"1:1065321165477:web:5d4fef2136faff20a4934c",measurementId:"G-NT471LTG1W"}),h=((0,d.IH)(f),(0,l.ad)(f)),p=(t(9673),(0,s.hJ)(h,"todos")),v=(0,s.IO)(p,(0,s.Xo)("name")),m=function(n,e){return n.slice(0,e).concat(n.slice(e+1))},x=function(n){(0,s.ET)(p,{name:n,list:[]}).then((function(){console.log("Add success")})).catch((function(n){console.log(n)}))},g=function(n){var e=(0,s.JU)(h,"todos",n);(0,s.oe)(e).then((function(){console.log("Xoa thanh cong")})).catch((function(n){console.log(n)}))},C=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e,t){var o;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=(0,s.JU)(h,"todos",e),n.next=3,(0,s.r7)(o,{name:t}).then((function(){console.log("Cap nhat thanh cong")})).catch((function(n){console.log(n)}));case 3:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),Z=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e,t,o,c,a,u){var l;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return l=(0,s.JU)(h,"todos",e),n.next=3,(0,s.r7)(l,{list:(0,s.vr)({id:(0,i.Z)(),content:t,date:o,priority:c,todo:a,completed:u})}).then((function(){console.log("Them thanh cong")})).catch((function(n){console.log(n)}));case 3:case"end":return n.stop()}}),n)})));return function(e,t,o,r,c,a){return n.apply(this,arguments)}}(),j=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e,t,a,i,u,l,d,f){var p,v;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return p=(0,s.JU)(h,"todos",e),(v=(0,o.Z)(a))[t]=(0,c.Z)((0,c.Z)({},v[t]),{},{content:i,date:u,completed:f,priority:l,todo:d}),n.next=5,(0,s.r7)(p,{list:(0,o.Z)(v)}).then((function(){console.log("Cap nhat thanh cong")})).catch((function(n){console.log(n)}));case 5:case"end":return n.stop()}}),n)})));return function(e,t,o,r,c,a,s,i){return n.apply(this,arguments)}}(),w=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e,t,c){var a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=(0,s.JU)(h,"todos",t),n.next=3,(0,s.r7)(a,{list:(0,o.Z)(m(e,c))}).then((function(){console.log("Xoa thanh cong")})).catch((function(n){console.log(n)}));case 3:case"end":return n.stop()}}),n)})));return function(e,t,o){return n.apply(this,arguments)}}(),b=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e,t,a,i){var u,l;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return u=(0,s.JU)(h,"todos",e),(l=(0,o.Z)(a))[t]=(0,c.Z)((0,c.Z)({},l[t]),{},{completed:!i}),n.next=5,(0,s.r7)(u,{list:(0,o.Z)(l)}).then((function(){console.log("Cap nhat thanh cong")})).catch((function(n){console.log(n)}));case 5:case"end":return n.stop()}}),n)})));return function(e,t,o,r){return n.apply(this,arguments)}}()},1701:function(n,e,t){var o=t(184),r=(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:(0,o.jsx)("path",{d:"M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM394.8 466.1C393.2 492.3 372.3 512 346.9 512H101.1C75.75 512 54.77 492.3 53.19 466.1L31.1 128H416L394.8 466.1z"})});e.Z=r},3247:function(n,e,t){var o=t(184),r=(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:(0,o.jsx)("path",{d:"M490.3 40.4C512.2 62.27 512.2 97.73 490.3 119.6L460.3 149.7L362.3 51.72L392.4 21.66C414.3-.2135 449.7-.2135 471.6 21.66L490.3 40.4zM172.4 241.7L339.7 74.34L437.7 172.3L270.3 339.6C264.2 345.8 256.7 350.4 248.4 353.2L159.6 382.8C150.1 385.6 141.5 383.4 135 376.1C128.6 370.5 126.4 361 129.2 352.4L158.8 263.6C161.6 255.3 166.2 247.8 172.4 241.7V241.7zM192 63.1C209.7 63.1 224 78.33 224 95.1C224 113.7 209.7 127.1 192 127.1H96C78.33 127.1 64 142.3 64 159.1V416C64 433.7 78.33 448 96 448H352C369.7 448 384 433.7 384 416V319.1C384 302.3 398.3 287.1 416 287.1C433.7 287.1 448 302.3 448 319.1V416C448 469 405 512 352 512H96C42.98 512 0 469 0 416V159.1C0 106.1 42.98 63.1 96 63.1H192z"})});e.Z=r},3233:function(n,e,t){var o=(0,t(2791).createContext)();e.Z=o},9673:function(n,e,t){t.d(e,{mu:function(){return o}});t(5803);var o=function(n){return{type:"LOAD_DATA",payload:{data:n}}}}}]);
//# sourceMappingURL=735.ccf9af6c.chunk.js.map