"use strict";(self.webpackChunktodos=self.webpackChunktodos||[]).push([[113],{5281:function(n,t,o){o.d(t,{vK:function(){return m},vm:function(){return D},yp:function(){return w},vE:function(){return I},hY:function(){return k},j2:function(){return Z},wD:function(){return g},Vq:function(){return y}});var e=o(2982),r=o(4165),c=o(1413),a=o(5861),i=o(6724),u=o(2810),s=o(2426),d=o(3971),f=o(797),l=(0,s.ZF)({apiKey:"AIzaSyC_geW_7W4F64snJv1yhfeRlGf6GG2lzb8",authDomain:"todoapp-ffbef.firebaseapp.com",projectId:"todoapp-ffbef",storageBucket:"todoapp-ffbef.appspot.com",messagingSenderId:"1065321165477",appId:"1:1065321165477:web:5d4fef2136faff20a4934c",measurementId:"G-NT471LTG1W"}),p=((0,f.IH)(l),(0,d.ad)(l)),h=(o(9673),(0,i.hJ)(p,"todos")),Z=(0,i.IO)(h,(0,i.Xo)("name")),v=function(n,t){return n.slice(0,t).concat(n.slice(t+1))},m=function(n){(0,i.ET)(h,{name:n,list:[]}).then((function(){console.log("Add success")})).catch((function(n){console.log(n)}))},I=function(n){var t=(0,i.JU)(p,"todos",n);(0,i.oe)(t).then((function(){console.log("Xoa thanh cong")})).catch((function(n){console.log(n)}))},g=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t,o){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=(0,i.JU)(p,"todos",t),n.next=3,(0,i.r7)(e,{name:o}).then((function(){console.log("Cap nhat thanh cong")})).catch((function(n){console.log(n)}));case 3:case"end":return n.stop()}}),n)})));return function(t,o){return n.apply(this,arguments)}}(),D=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t,o,e,c,a,s){var d;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return d=(0,i.JU)(p,"todos",t),n.next=3,(0,i.r7)(d,{list:(0,i.vr)({id:(0,u.Z)(),content:o,date:e,priority:c,todo:a,completed:s})}).then((function(){console.log("Them thanh cong")})).catch((function(n){console.log(n)}));case 3:case"end":return n.stop()}}),n)})));return function(t,o,e,r,c,a){return n.apply(this,arguments)}}(),y=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t,o,a,u,s,d,f,l){var h,Z;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return h=(0,i.JU)(p,"todos",t),(Z=(0,e.Z)(a))[o]=(0,c.Z)((0,c.Z)({},Z[o]),{},{content:u,date:s,completed:l,priority:d,todo:f}),n.next=5,(0,i.r7)(h,{list:(0,e.Z)(Z)}).then((function(){console.log("Cap nhat thanh cong")})).catch((function(n){console.log(n)}));case 5:case"end":return n.stop()}}),n)})));return function(t,o,e,r,c,a,i,u){return n.apply(this,arguments)}}(),k=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t,o,c){var a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=(0,i.JU)(p,"todos",o),n.next=3,(0,i.r7)(a,{list:(0,e.Z)(v(t,c))}).then((function(){console.log("Xoa thanh cong")})).catch((function(n){console.log(n)}));case 3:case"end":return n.stop()}}),n)})));return function(t,o,e){return n.apply(this,arguments)}}(),w=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t,o,a,u){var s,d;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s=(0,i.JU)(p,"todos",t),(d=(0,e.Z)(a))[o]=(0,c.Z)((0,c.Z)({},d[o]),{},{completed:!u}),n.next=5,(0,i.r7)(s,{list:(0,e.Z)(d)}).then((function(){console.log("Cap nhat thanh cong")})).catch((function(n){console.log(n)}));case 5:case"end":return n.stop()}}),n)})));return function(t,o,e,r){return n.apply(this,arguments)}}()},3233:function(n,t,o){var e=(0,o(2791).createContext)();t.Z=e},8113:function(n,t,o){o.r(t),o.d(t,{default:function(){return p}});var e=o(1413),r=o(885),c=o(6724),a=o(2791),i=o(5281),u=o(9673),s=o(3233),d=o(2982),f=function(n,t){var o,r,c,a,i=t.type,u=t.payload;switch(i){case"ADD_TODO":(o=(0,d.Z)(n))[u.folderId]=(0,e.Z)((0,e.Z)({},n[u.folderId]),{},{list:[].concat((0,d.Z)(n[u.folderId].list),[{id:u.id,content:u.content,date:u.date,completed:u.complete,priority:u.priority,todo:u.todo}])});break;case"DELETE_TODO":(o=(0,d.Z)(n))[u.folderId]=(0,e.Z)((0,e.Z)({},n[u.folderId]),{},{list:(0,d.Z)((r=n,c=u.folderId,a=u.todoId,r[c].list.slice(0,a).concat(r[c].list.slice(a+1))))});break;case"EDIT_TODO":(o=(0,d.Z)(n))[u.folderId].list[u.todoId]={id:u.id,content:u.content,date:u.date,completed:u.complete,priority:u.priority,todo:u.todo};break;case"COMPLETE_TODO":(o=(0,d.Z)(n))[u.folderId].list[u.todoId]=(0,e.Z)((0,e.Z)({},n[u.folderId].list[u.todoId]),{},{completed:!u.isCompleted});break;case"ADD_FOLDER":o=[].concat((0,d.Z)(n),[{id:u.id,name:u.name,list:[]}]);break;case"DELETE_FOLDER":o=function(n,t){return n.slice(0,t).concat(n.slice(t+1))}(n,u.folderId);break;case"EDIT_FOLDER":(o=(0,d.Z)(n))[u.folderId]=(0,e.Z)((0,e.Z)({},n[u.folderId]),{},{name:u.name});break;case"LOAD_DATA":o=(0,d.Z)(u.data);break;default:throw new Error("Invalid action")}return o},l=o(184);var p=function(n){var t=n.children,o=(0,a.useReducer)(f,[]),d=(0,r.Z)(o,2),p=d[0],h=d[1],Z=(0,a.useState)(!1),v=(0,r.Z)(Z,2),m=v[0],I=v[1];return(0,a.useEffect)((function(){var n=(0,c.cf)(i.j2,(function(n){var t=n.docs.map((function(n){return(0,e.Z)((0,e.Z)({},n.data()),{},{id:n.id})}));h((0,u.mu)(t)),I(0!==t.length)}));return function(){n()}}),[]),(0,l.jsx)(s.Z.Provider,{value:[p,h,m],children:t})}},9673:function(n,t,o){o.d(t,{mu:function(){return e}});o(5803);var e=function(n){return{type:"LOAD_DATA",payload:{data:n}}}}}]);
//# sourceMappingURL=113.5f4d442d.chunk.js.map