"use strict";(self.webpackChunktodos=self.webpackChunktodos||[]).push([[351],{4351:function(n,e,t){t.r(e);var o=t(1413),r=t(885),c=t(2791),a=t(6871),s=t(3233),i=t(9195),u=t(5281),f=t(184);e.default=function(){var n,e,t,l=(0,a.UO)().folderId,d=(0,c.useContext)(s.Z),p=(0,r.Z)(d,2),h=p[0],m=(p[1],(0,a.s0)()),v=(0,i.cI)({mode:"onBlur",defaultValues:{name:null===(n=h[l])||void 0===n?void 0:n.name}}),g=v.register,Z=v.handleSubmit,x=v.setFocus,b=v.formState.errors,w=(0,c.useCallback)((function(n){(0,u.wD)(h[l].id,n.name),m("/")}),[]);return(0,c.useEffect)((function(){x("name")}),[]),(0,f.jsx)("div",{className:"edit-page",children:(0,f.jsxs)("div",{className:"container",children:[(0,f.jsx)("div",{className:"gradient",children:(0,f.jsx)("h1",{children:"Edit Folder"})}),(0,f.jsx)("h3",{children:"Name Folder"}),(0,f.jsxs)("form",{onSubmit:Z(w),children:[(0,f.jsxs)("div",{className:"wrapper-edit",children:[(0,f.jsx)("div",{className:"edit",children:(0,f.jsx)("input",(0,o.Z)({type:"text"},g("name",{required:"Please enter before pressing submit",pattern:{value:/^([^!@#$&%^()-_=+<>?;:'"{[}]\|.,`~*]|[a-zA-Z0-9 ])+$/,message:"Please enter before pressing submit"}})))}),"required"===(null===(e=b.name)||void 0===e?void 0:e.type)&&(0,f.jsx)("p",{children:b.name.message}),"pattern"===(null===(t=b.name)||void 0===t?void 0:t.type)&&(0,f.jsx)("p",{children:b.name.message})]}),(0,f.jsx)("button",{children:"Save"})]})]})})}},5281:function(n,e,t){t.d(e,{vK:function(){return g},vm:function(){return b},yp:function(){return j},vE:function(){return Z},hY:function(){return y},j2:function(){return m},wD:function(){return x},Vq:function(){return w}});var o=t(2982),r=t(4165),c=t(1413),a=t(5861),s=t(6724),i=t(2810),u=t(2426),f=t(3971),l=t(797),d=(0,u.ZF)({apiKey:"AIzaSyC_geW_7W4F64snJv1yhfeRlGf6GG2lzb8",authDomain:"todoapp-ffbef.firebaseapp.com",projectId:"todoapp-ffbef",storageBucket:"todoapp-ffbef.appspot.com",messagingSenderId:"1065321165477",appId:"1:1065321165477:web:5d4fef2136faff20a4934c",measurementId:"G-NT471LTG1W"}),p=((0,l.IH)(d),(0,f.ad)(d)),h=(t(9673),(0,s.hJ)(p,"todos")),m=(0,s.IO)(h,(0,s.Xo)("name")),v=function(n,e){return n.slice(0,e).concat(n.slice(e+1))},g=function(n){(0,s.ET)(h,{name:n,list:[]}).then((function(){console.log("Add success")})).catch((function(n){console.log(n)}))},Z=function(n){var e=(0,s.JU)(p,"todos",n);(0,s.oe)(e).then((function(){console.log("Xoa thanh cong")})).catch((function(n){console.log(n)}))},x=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e,t){var o;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=(0,s.JU)(p,"todos",e),n.next=3,(0,s.r7)(o,{name:t}).then((function(){console.log("Cap nhat thanh cong")})).catch((function(n){console.log(n)}));case 3:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),b=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e,t,o,c,a,u){var f;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return f=(0,s.JU)(p,"todos",e),n.next=3,(0,s.r7)(f,{list:(0,s.vr)({id:(0,i.Z)(),content:t,date:o,priority:c,todo:a,completed:u})}).then((function(){console.log("Them thanh cong")})).catch((function(n){console.log(n)}));case 3:case"end":return n.stop()}}),n)})));return function(e,t,o,r,c,a){return n.apply(this,arguments)}}(),w=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e,t,a,i,u,f,l,d){var h,m;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return h=(0,s.JU)(p,"todos",e),(m=(0,o.Z)(a))[t]=(0,c.Z)((0,c.Z)({},m[t]),{},{content:i,date:u,completed:d,priority:f,todo:l}),n.next=5,(0,s.r7)(h,{list:(0,o.Z)(m)}).then((function(){console.log("Cap nhat thanh cong")})).catch((function(n){console.log(n)}));case 5:case"end":return n.stop()}}),n)})));return function(e,t,o,r,c,a,s,i){return n.apply(this,arguments)}}(),y=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e,t,c){var a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=(0,s.JU)(p,"todos",t),n.next=3,(0,s.r7)(a,{list:(0,o.Z)(v(e,c))}).then((function(){console.log("Xoa thanh cong")})).catch((function(n){console.log(n)}));case 3:case"end":return n.stop()}}),n)})));return function(e,t,o){return n.apply(this,arguments)}}(),j=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e,t,a,i){var u,f;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return u=(0,s.JU)(p,"todos",e),(f=(0,o.Z)(a))[t]=(0,c.Z)((0,c.Z)({},f[t]),{},{completed:!i}),n.next=5,(0,s.r7)(u,{list:(0,o.Z)(f)}).then((function(){console.log("Cap nhat thanh cong")})).catch((function(n){console.log(n)}));case 5:case"end":return n.stop()}}),n)})));return function(e,t,o,r){return n.apply(this,arguments)}}()},3233:function(n,e,t){var o=(0,t(2791).createContext)();e.Z=o},9673:function(n,e,t){t.d(e,{mu:function(){return o}});t(5803);var o=function(n){return{type:"LOAD_DATA",payload:{data:n}}}}}]);
//# sourceMappingURL=351.c4851154.chunk.js.map