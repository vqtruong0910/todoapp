"use strict";(self.webpackChunktodos=self.webpackChunktodos||[]).push([[735],{4735:function(n,e,o){o.r(e),o.d(e,{default:function(){return g}});var t=o(1413),c=o(885),s=o(2791),r=o(9195),i=o(3233),a=o(3247),l=o(1701),d=o(184);var u=function(n){var e=n.handleClickEditFolder,o=n.handleClickDeleteFolder;return(0,d.jsxs)("div",{className:"edit-and-delete",children:[(0,d.jsx)("span",{className:"svg-edit",onClick:e,children:a.Z}),(0,d.jsx)("span",{className:"svg-delete",onClick:o,children:l.Z})]})},f=o(5281),h=o(3504),p=o(6871),v=o(2338);function m(){var n,e,a=(0,s.useContext)(i.Z),l=(0,c.Z)(a,3),m=l[0],g=(l[1],l[2]),C=(0,s.useState)(!1),x=(0,c.Z)(C,2),j=(x[0],x[1],(0,r.cI)({mode:"onBlur"})),Z=j.register,b=j.handleSubmit,w=j.setValue,L=j.setFocus,k=j.formState.errors,y=(0,p.s0)(),N=(0,s.useCallback)((function(n){(0,f.vK)(n.inputfolder),w("inputfolder","",{shouldDirty:!0}),L("inputfolder")}),[]),H=(0,s.useCallback)((function(n){y("/edit-folder/".concat(n))}),[]),A=(0,s.useCallback)((function(n){o.g.confirm("Are you sure you want to delete it?")&&(0,f.vE)(n)}),[]);return(0,d.jsxs)("div",{className:"wrapper",children:[(0,d.jsxs)("div",{className:"header",children:[(0,d.jsx)("div",{className:"gradient",children:(0,d.jsx)("h1",{children:"Tasks Lists"})}),(0,d.jsx)("p",{children:"A list of files"}),(0,d.jsx)("form",{onSubmit:b(N),children:(0,d.jsxs)("div",{className:"bar-add-folder",children:[(0,d.jsxs)("div",{className:"bar-input",children:[(0,d.jsx)("input",(0,t.Z)({type:"text",placeholder:"Add your new folder..."},Z("inputfolder",{required:"Please enter before pressing submit",pattern:{value:/^([^!@#$&%^()-_=+<>?;:'"{[}]\|.,`~*]|[a-zA-Z0-9 ])+$/g,message:"Do not enter special characters"}}))),"required"===(null===(n=k.inputfolder)||void 0===n?void 0:n.type)&&(0,d.jsx)("p",{children:k.inputfolder.message}),"pattern"===(null===(e=k.inputfolder)||void 0===e?void 0:e.type)&&(0,d.jsx)("p",{children:k.inputfolder.message})]}),(0,d.jsx)("div",{className:"submit-add",children:(0,d.jsx)("button",{children:"Add folder"})}),(0,d.jsx)("br",{})]})})]}),(0,d.jsxs)("div",{className:"folder",children:[!g&&(0,d.jsx)(v.Z,{}),(0,d.jsx)("ul",{className:"list",children:m.map((function(n,e){return(0,d.jsxs)("li",{children:[(0,d.jsx)(h.rU,{to:"/folder?todo=".concat(e),children:n.name}),(0,d.jsx)(u,{handleClickEditFolder:function(){H(e)},handleClickDeleteFolder:function(){A(n.id)}})]},e)}))})]})]})}var g=(0,s.memo)(m)},2338:function(n,e,o){var t=o(184);e.Z=function(){return(0,t.jsx)("div",{className:"wrapper-loading-data",children:(0,t.jsx)("div",{className:"loader"})})}},5281:function(n,e,o){o.d(e,{vK:function(){return v},vm:function(){return C},yp:function(){return Z},vE:function(){return m},hY:function(){return j},j2:function(){return h},wD:function(){return g},Vq:function(){return x}});var t=o(2982),c=o(1413),s=o(6724),r=o(2810),i=o(2426),a=o(3971),l=o(797),d=(0,i.ZF)({apiKey:"AIzaSyC_geW_7W4F64snJv1yhfeRlGf6GG2lzb8",authDomain:"todoapp-ffbef.firebaseapp.com",projectId:"todoapp-ffbef",storageBucket:"todoapp-ffbef.appspot.com",messagingSenderId:"1065321165477",appId:"1:1065321165477:web:5d4fef2136faff20a4934c",measurementId:"G-NT471LTG1W"}),u=((0,l.IH)(d),(0,a.ad)(d)),f=(o(9673),(0,s.hJ)(u,"todos")),h=(0,s.IO)(f,(0,s.Xo)("name")),p=function(n,e){return n.slice(0,e).concat(n.slice(e+1))},v=function(n){(0,s.ET)(f,{name:n,list:[]}).then((function(){console.log("Add success")})).catch((function(n){console.log(n)}))},m=function(n){var e=(0,s.JU)(u,"todos",n);(0,s.oe)(e).then((function(){console.log("Xoa thanh cong")})).catch((function(n){console.log(n)}))},g=function(n,e){var o=(0,s.JU)(u,"todos",n);(0,s.r7)(o,{name:e}).then((function(){console.log("Cap nhat thanh cong")})).catch((function(n){console.log(n)}))},C=function(n,e,o,t,c,i){var a=(0,s.JU)(u,"todos",n);(0,s.r7)(a,{list:(0,s.vr)({id:(0,r.Z)(),content:e,date:o,priority:t,todo:c,completed:i})}).then((function(){console.log("Them thanh cong")})).catch((function(n){console.log(n)}))},x=function(n,e,o,r,i,a,l,d){var f=(0,s.JU)(u,"todos",n),h=(0,t.Z)(o);h[e]=(0,c.Z)((0,c.Z)({},h[e]),{},{content:r,date:i,completed:d,priority:a,todo:l}),(0,s.r7)(f,{list:(0,t.Z)(h)}).then((function(){console.log("Cap nhat thanh cong")})).catch((function(n){console.log(n)}))},j=function(n,e,o){var c=(0,s.JU)(u,"todos",e);(0,s.r7)(c,{list:(0,t.Z)(p(n,o))}).then((function(){console.log("Xoa thanh cong")})).catch((function(n){console.log(n)}))},Z=function(n,e,o,r){var i=(0,s.JU)(u,"todos",n),a=(0,t.Z)(o);a[e]=(0,c.Z)((0,c.Z)({},a[e]),{},{completed:!r}),(0,s.r7)(i,{list:(0,t.Z)(a)}).then((function(){console.log("Cap nhat thanh cong")})).catch((function(n){console.log(n)}))}},1701:function(n,e,o){var t=o(184),c=(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:(0,t.jsx)("path",{d:"M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM394.8 466.1C393.2 492.3 372.3 512 346.9 512H101.1C75.75 512 54.77 492.3 53.19 466.1L31.1 128H416L394.8 466.1z"})});e.Z=c},3247:function(n,e,o){var t=o(184),c=(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:(0,t.jsx)("path",{d:"M490.3 40.4C512.2 62.27 512.2 97.73 490.3 119.6L460.3 149.7L362.3 51.72L392.4 21.66C414.3-.2135 449.7-.2135 471.6 21.66L490.3 40.4zM172.4 241.7L339.7 74.34L437.7 172.3L270.3 339.6C264.2 345.8 256.7 350.4 248.4 353.2L159.6 382.8C150.1 385.6 141.5 383.4 135 376.1C128.6 370.5 126.4 361 129.2 352.4L158.8 263.6C161.6 255.3 166.2 247.8 172.4 241.7V241.7zM192 63.1C209.7 63.1 224 78.33 224 95.1C224 113.7 209.7 127.1 192 127.1H96C78.33 127.1 64 142.3 64 159.1V416C64 433.7 78.33 448 96 448H352C369.7 448 384 433.7 384 416V319.1C384 302.3 398.3 287.1 416 287.1C433.7 287.1 448 302.3 448 319.1V416C448 469 405 512 352 512H96C42.98 512 0 469 0 416V159.1C0 106.1 42.98 63.1 96 63.1H192z"})});e.Z=c},3233:function(n,e,o){var t=(0,o(2791).createContext)();e.Z=t},9673:function(n,e,o){o.d(e,{mu:function(){return t}});o(5803);var t=function(n){return{type:"LOAD_DATA",payload:{data:n}}}}}]);
//# sourceMappingURL=735.1eb2d79d.chunk.js.map