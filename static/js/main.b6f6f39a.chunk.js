(this.webpackJsonpaviatest=this.webpackJsonpaviatest||[]).push([[0],{19:function(e,t,s){},25:function(e,t,s){"use strict";s.r(t);var a=s(5),c=s(1),n=s.n(c),i=s(6),r=s.n(i),o=(s(19),s.p+"static/media/Logo.309a1b5d.svg"),l=s(0);var d=function(){return Object(l.jsx)("div",{className:"header",children:Object(l.jsx)("img",{className:"header__logo",src:o,alt:"\u043b\u043e\u0433\u043e"})})},j=s(13),b=s(2),h=s(3);var m=function(){var e=n.a.useState(!0),t=Object(b.a)(e,2),s=t[0],a=t[1],c=n.a.useState(!1),i=Object(b.a)(c,2),r=i[0],o=i[1],d=n.a.useState(!1),m=Object(b.a)(d,2),u=m[0],_=m[1],O=n.a.useState(!1),g=Object(b.a)(O,2),f=g[0],x=g[1],p=n.a.useState(!1),v=Object(b.a)(p,2),N=v[0],k=v[1],y=Object(h.b)(),S=Object(h.c)((function(e){return e.stopsArray}));function A(e){e.target.checked?y({type:"CHANGE_ARRAY",payload:[].concat(Object(j.a)(S),[+e.target.value])}):y({type:"CHANGE_ARRAY",payload:S.filter((function(t){return t!==+e.target.value}))})}return Object(l.jsxs)("div",{className:"sidebar",children:[Object(l.jsx)("h1",{className:"sidebar__header",children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a"}),Object(l.jsxs)("div",{className:"sidebar__item",children:[Object(l.jsx)("input",{className:"sidebar__checkbox",checked:s,type:"checkbox",id:"all",onChange:function(e){a(e.target.checked),y({type:"TOGGLE_STOPS",payload:e.target.checked})}}),Object(l.jsx)("label",{className:"sidebar__label ".concat(s?"sidebar__label_checked":""),htmlFor:"all"}),"\u0412\u0441\u0435"]}),Object(l.jsxs)("div",{className:"sidebar__item",children:[Object(l.jsx)("input",{className:"sidebar__checkbox",value:0,checked:r,type:"checkbox",id:"zerostops",onChange:function(e){o(!r),A(e)}}),Object(l.jsx)("label",{className:"sidebar__label ".concat(r?"sidebar__label_checked":""),htmlFor:"zerostops"}),"\u0411\u0435\u0437 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a"]}),Object(l.jsxs)("div",{className:"sidebar__item",children:[Object(l.jsx)("input",{className:"sidebar__checkbox",value:1,checked:u,type:"checkbox",id:"1stop",onChange:function(e){_(!u),A(e)}}),Object(l.jsx)("label",{className:"sidebar__label ".concat(u?"sidebar__label_checked":""),htmlFor:"1stop"}),"1 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0430"]}),Object(l.jsxs)("div",{className:"sidebar__item",children:[Object(l.jsx)("input",{className:"sidebar__checkbox",value:2,checked:f,type:"checkbox",id:"2stops",onChange:function(e){x(!f),A(e)}}),Object(l.jsx)("label",{className:"sidebar__label ".concat(f?"sidebar__label_checked":""),htmlFor:"2stops"}),"2 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438"]}),Object(l.jsxs)("div",{className:"sidebar__item",children:[Object(l.jsx)("input",{className:"sidebar__checkbox",value:3,checked:N,type:"checkbox",id:"3stops",onChange:function(e){k(!N),A(e)}}),Object(l.jsx)("label",{className:"sidebar__label ".concat(N?"sidebar__label_checked":""),htmlFor:"3stops"}),"3 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438"]})]})};var u=function(e){var t=e.data,s=new Date(t.segments[0].date),a=(s.getHours()+Math.floor(t.segments[0].duration/60))%24,c=(s.getMinutes()+t.segments[0].duration%60)%60,n=new Date(t.segments[0].date),i=(n.getHours()+Math.floor(t.segments[1].duration/60))%24,r=(n.getMinutes()+t.segments[1].duration%60)%60;return Object(l.jsxs)("div",{className:"main__ticket",children:[Object(l.jsxs)("div",{className:"main__header",children:[Object(l.jsxs)("h2",{className:"main__price",children:[t.price,"\u0440"]}),Object(l.jsx)("img",{className:"main__logo",src:"https://pics.avs.io/99/36/".concat(t.carrier,".png"),alt:"\u041b\u043e\u0433\u043e"})]}),Object(l.jsxs)("div",{className:"main__info",children:[Object(l.jsxs)("div",{className:"main__info-item",children:[Object(l.jsxs)("h3",{className:"main__info-header",children:[t.segments[0].origin," \u2013 ",t.segments[0].destination]}),Object(l.jsxs)("div",{className:"main__info-value",children:[s.getHours()<10?"0".concat(s.getHours()):"".concat(s.getHours()),":",s.getMinutes()<10?"0".concat(s.getMinutes()):"".concat(s.getMinutes())," \u2013 ",a<10?"0".concat(a):"".concat(a),":",c<10?"0".concat(c):"".concat(c)]})]}),Object(l.jsxs)("div",{className:"main__info-item",children:[Object(l.jsx)("h3",{className:"main__info-header",children:"\u0412 \u043f\u0443\u0442\u0438"}),Object(l.jsxs)("div",{className:"main__info-value",children:[Math.floor(t.segments[0].duration/60),"\u0447 ",t.segments[0].duration%60,"\u043c"]})]}),Object(l.jsx)("div",{className:"main__info-item",children:0!==t.segments[0].stops.length?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h3",{className:"main__info-header",children:1===t.segments[0].stops.length?"1 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0430":"".concat(t.segments[0].stops.length," \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438")}),Object(l.jsx)("div",{className:"main__info-value",children:t.segments[0].stops.reduce((function(e,t){return e+", "+t}))})," "]}):Object(l.jsx)("h3",{className:"main__info-header",children:"0 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a"})}),Object(l.jsxs)("div",{className:"main__info-item",children:[Object(l.jsxs)("h3",{className:"main__info-header",children:[t.segments[1].origin," \u2013 ",t.segments[1].destination]}),Object(l.jsxs)("div",{className:"main__info-value",children:[n.getHours()<10?"0".concat(n.getHours()):"".concat(n.getHours()),":",n.getMinutes()<10?"0".concat(n.getMinutes()):"".concat(n.getMinutes())," \u2013 ",i<10?"0".concat(i):"".concat(i),":",r<10?"0".concat(r):"".concat(r)]})]}),Object(l.jsxs)("div",{className:"main__info-item",children:[Object(l.jsx)("h3",{className:"main__info-header",children:"\u0412 \u043f\u0443\u0442\u0438"}),Object(l.jsxs)("div",{className:"main__info-value",children:[Math.floor(t.segments[1].duration/60),"\u0447 ",t.segments[1].duration%60,"\u043c"]})]}),Object(l.jsx)("div",{className:"main__info-item",children:0!==t.segments[1].stops.length?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h3",{className:"main__info-header",children:1===t.segments[1].stops.length?"1 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0430":"".concat(t.segments[1].stops.length," \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438")}),Object(l.jsx)("div",{className:"main__info-value",children:t.segments[1].stops.reduce((function(e,t){return e+", "+t}))})]}):Object(l.jsx)("h3",{className:"main__info-header",children:"0 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a"})})]})]})},_=s(11),O=s(12),g=new(function(){function e(t){Object(_.a)(this,e),this._url=t}return Object(O.a)(e,[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject(e.status)}},{key:"getSearchId",value:function(){return fetch("".concat(this._url,"/search")).then(this._checkResponse)}},{key:"getInitialTickets",value:function(e){return fetch("".concat(this._url,"/tickets?searchId=").concat(e)).then(this._checkResponse)}}]),e}())("https://front-test.beta.aviasales.ru");var f=function(){var e=n.a.useState([]),t=Object(b.a)(e,2),s=t[0],a=t[1],c=n.a.useState([]),i=Object(b.a)(c,2),r=i[0],o=i[1],d=n.a.useState(!0),j=Object(b.a)(d,2),m=j[0],_=j[1],O=n.a.useState(!1),f=Object(b.a)(O,2),x=f[0],p=f[1],v=n.a.useState(!0),N=Object(b.a)(v,2),k=N[0],y=N[1],S=n.a.useState(5),A=Object(b.a)(S,2),C=A[0],M=A[1],H=Object(h.c)((function(e){return e.isAllStopsChecked})),R=Object(h.c)((function(e){return e.stopsArray}));function E(e,t){return e.segments[0].duration+e.segments[1].duration-(t.segments[0].duration+t.segments[1].duration)}function F(e,t){return e.price-t.price}return n.a.useEffect((function(){g.getSearchId().then((function(e){g.getInitialTickets(e.searchId).then((function(e){a(e.tickets.sort(E)),y(!1)}))}))}),[]),n.a.useEffect((function(){if(H)return o(s);o(s.filter((function(e){var t=e.segments[0].stops.length+e.segments[1].stops.length;return R.some((function(e){return t===e}))})))}),[H,R,s]),Object(l.jsxs)("div",{className:"main",children:[Object(l.jsxs)("div",{className:"main__tabs",children:[Object(l.jsx)("button",{className:"main__tab ".concat(m?"main__tab_is-active":""),onClick:function(){_(!0),p(!1),a(r.sort(E))},children:"\u0421\u0430\u043c\u044b\u0439 \u0431\u044b\u0441\u0442\u0440\u044b\u0439"}),Object(l.jsx)("button",{className:"main__tab ".concat(x?"main__tab_is-active":""),onClick:function(){_(!1),p(!0),a(r.sort(F))},children:"\u0421\u0430\u043c\u044b\u0439 \u0434\u0435\u0448\u0435\u0432\u044b\u0439"})]}),!k&&r.slice(0,C).map((function(e,t){return Object(l.jsx)(u,{data:e},t)})),Object(l.jsx)("button",{className:"main__button",onClick:function(){M(C+5)},children:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0435\u0449\u0435 5 \u0431\u0438\u043b\u0435\u0442\u043e\u0432!"})]})};var x=function(){return Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)(d,{}),Object(l.jsxs)("div",{className:"content",children:[Object(l.jsx)(m,{}),Object(l.jsx)(f,{})]})]})},p=s(14),v={isAllStopsChecked:!0,stopsArray:[]},N=Object(p.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_STOPS":return Object(a.a)(Object(a.a)({},e),{},{isAllStopsChecked:t.payload});case"CHANGE_ARRAY":return Object(a.a)(Object(a.a)({},e),{},{stopsArray:t.payload});default:return e}}));r.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(h.a,{store:N,children:Object(l.jsx)(x,{})})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.b6f6f39a.chunk.js.map