"use strict";(self.webpackChunktodos=self.webpackChunktodos||[]).push([[113],{5281:function(o,t,n){n.d(t,{vK:function(){return Z},vm:function(){return g},yp:function(){return E},vE:function(){return m},hY:function(){return D},j2:function(){return h},wD:function(){return I},Vq:function(){return v}});var e=n(2982),c=n(1413),a=n(6724),r=n(2810),d=n(2426),i=n(3971),l=n(797),f=(0,d.ZF)({apiKey:"AIzaSyC_geW_7W4F64snJv1yhfeRlGf6GG2lzb8",authDomain:"todoapp-ffbef.firebaseapp.com",projectId:"todoapp-ffbef",storageBucket:"todoapp-ffbef.appspot.com",messagingSenderId:"1065321165477",appId:"1:1065321165477:web:5d4fef2136faff20a4934c",measurementId:"G-NT471LTG1W"}),u=((0,l.IH)(f),(0,i.ad)(f)),s=(n(9673),(0,a.hJ)(u,"todos")),h=(0,a.IO)(s,(0,a.Xo)("name")),p=function(o,t){return o.slice(0,t).concat(o.slice(t+1))},Z=function(o){(0,a.ET)(s,{name:o,list:[]}).then((function(){console.log("Add success")})).catch((function(o){console.log(o)}))},m=function(o){var t=(0,a.JU)(u,"todos",o);(0,a.oe)(t).then((function(){console.log("Xoa thanh cong")})).catch((function(o){console.log(o)}))},I=function(o,t){var n=(0,a.JU)(u,"todos",o);(0,a.r7)(n,{name:t}).then((function(){console.log("Cap nhat thanh cong")})).catch((function(o){console.log(o)}))},g=function(o,t,n,e,c,d){var i=(0,a.JU)(u,"todos",o);(0,a.r7)(i,{list:(0,a.vr)({id:(0,r.Z)(),content:t,date:n,priority:e,todo:c,completed:d})}).then((function(){console.log("Them thanh cong")})).catch((function(o){console.log(o)}))},v=function(o,t,n,r,d,i,l,f){var s=(0,a.JU)(u,"todos",o),h=(0,e.Z)(n);h[t]=(0,c.Z)((0,c.Z)({},h[t]),{},{content:r,date:d,completed:f,priority:i,todo:l}),(0,a.r7)(s,{list:(0,e.Z)(h)}).then((function(){console.log("Cap nhat thanh cong")})).catch((function(o){console.log(o)}))},D=function(o,t,n){var c=(0,a.JU)(u,"todos",t);(0,a.r7)(c,{list:(0,e.Z)(p(o,n))}).then((function(){console.log("Xoa thanh cong")})).catch((function(o){console.log(o)}))},E=function(o,t,n,r){var d=(0,a.JU)(u,"todos",o),i=(0,e.Z)(n);i[t]=(0,c.Z)((0,c.Z)({},i[t]),{},{completed:!r}),(0,a.r7)(d,{list:(0,e.Z)(i)}).then((function(){console.log("Cap nhat thanh cong")})).catch((function(o){console.log(o)}))}},3233:function(o,t,n){var e=(0,n(2791).createContext)();t.Z=e},8113:function(o,t,n){n.r(t),n.d(t,{default:function(){return h}});var e=n(1413),c=n(885),a=n(6724),r=n(2791),d=n(5281),i=n(9673),l=n(3233),f=n(2982),u=function(o,t){var n,c,a,r,d=t.type,i=t.payload;switch(d){case"ADD_TODO":(n=(0,f.Z)(o))[i.folderId]=(0,e.Z)((0,e.Z)({},o[i.folderId]),{},{list:[].concat((0,f.Z)(o[i.folderId].list),[{id:i.id,content:i.content,date:i.date,completed:i.complete,priority:i.priority,todo:i.todo}])});break;case"DELETE_TODO":(n=(0,f.Z)(o))[i.folderId]=(0,e.Z)((0,e.Z)({},o[i.folderId]),{},{list:(0,f.Z)((c=o,a=i.folderId,r=i.todoId,c[a].list.slice(0,r).concat(c[a].list.slice(r+1))))});break;case"EDIT_TODO":(n=(0,f.Z)(o))[i.folderId].list[i.todoId]={id:i.id,content:i.content,date:i.date,completed:i.complete,priority:i.priority,todo:i.todo};break;case"COMPLETE_TODO":(n=(0,f.Z)(o))[i.folderId].list[i.todoId]=(0,e.Z)((0,e.Z)({},o[i.folderId].list[i.todoId]),{},{completed:!i.isCompleted});break;case"ADD_FOLDER":n=[].concat((0,f.Z)(o),[{id:i.id,name:i.name,list:[]}]);break;case"DELETE_FOLDER":n=function(o,t){return o.slice(0,t).concat(o.slice(t+1))}(o,i.folderId);break;case"EDIT_FOLDER":(n=(0,f.Z)(o))[i.folderId]=(0,e.Z)((0,e.Z)({},o[i.folderId]),{},{name:i.name});break;case"LOAD_DATA":n=(0,f.Z)(i.data);break;default:throw new Error("Invalid action")}return n},s=n(184);var h=function(o){var t=o.children,n=(0,r.useReducer)(u,[]),f=(0,c.Z)(n,2),h=f[0],p=f[1],Z=(0,r.useState)(!1),m=(0,c.Z)(Z,2),I=m[0],g=m[1];return(0,r.useEffect)((function(){var o=(0,a.cf)(d.j2,(function(o){var t=o.docs.map((function(o){return(0,e.Z)((0,e.Z)({},o.data()),{},{id:o.id})}));p((0,i.mu)(t)),g(0!==t.length)}));return function(){o()}}),[]),(0,s.jsx)(l.Z.Provider,{value:[h,p,I],children:t})}},9673:function(o,t,n){n.d(t,{mu:function(){return e}});n(5803);var e=function(o){return{type:"LOAD_DATA",payload:{data:o}}}}}]);
//# sourceMappingURL=113.fcfcadd9.chunk.js.map