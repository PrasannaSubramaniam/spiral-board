(this["webpackJsonpmy-react-app"]=this["webpackJsonpmy-react-app"]||[]).push([[0],{11:function(e,s,c){},12:function(e,s,c){},13:function(e,s,c){"use strict";c.r(s);var t=c(0),a=c(1),n=c.n(a),r=c(4),d=c.n(r),l=(c(11),c(5)),i=c(2),j=(c(12),function(e){var s=e.rowsCount*e.rowsCount,c=Object(a.useState)("X"),r=Object(i.a)(c,2),d=r[0],j=r[1],u=Object(a.useState)({X:0,Y:0}),b=Object(i.a)(u,2),o=b[0],O=b[1],v=Object(a.useState)(0),x=Object(i.a)(v,2),h=x[0],f=x[1],m=Object(a.useState)(0),k=Object(i.a)(m,2),p=k[0],N=k[1],w=Object(a.useState)(null),X=Object(i.a)(w,2),y=X[0],C=X[1],Y=Object(a.useState)(null),S=Object(i.a)(Y,2),g=S[0],E=S[1],F=function(e){E(e.keyCode)};Object(a.useEffect)((function(){88===g&&L("X"),89===g&&L("Y")}),[g]),n.a.useEffect((function(){return window.addEventListener("keydown",F),function(){window.removeEventListener("keydown",F)}}),[]);var L=function(e){if(e==d){var c=Math.ceil(6*Math.random()),t=Object(l.a)({},o);t[d]=o[d]+c,"X"===d&&f(c),"Y"===d&&N(c),t[d]>s?(t[d]-=c,j("X"===d?"Y":"X"),O(t)):t[d]===s?(O(t),C("Player ".concat(d," WON"))):(t[d]=function(e){switch(e){case 1:return 23;case 5:return 14;case 21:return 42;case 29:return 85;case 36:return 58;case 68:return 89;case 78:return 99;case 25:return 3;case 35:return 10;case 47:return 7;case 57:return 38;case 77:return 52;case 97:return 61;default:return e}}(t[d]),O(t),j("X"===d?"Y":"X"))}},P=function(e){return Object(t.jsxs)("div",{className:"square",children:[Object(t.jsx)("span",{children:e}),e===o.X?Object(t.jsx)("div",{className:"player-x",children:"X"}):"",e===o.Y?Object(t.jsx)("div",{className:"player-y",children:"Y"}):""]})},D=function(e,s){var c=[];if(e%2==0)for(var a=s*e;a>s*e-s;a--)c.push(P(a));else for(var n=s*e-s+1;n<s*e+1;n++)c.push(P(n));return Object(t.jsx)("div",{className:"row",children:c})};return Object(t.jsxs)("div",{className:"app-container unselectable",children:[Object(t.jsx)("div",{className:"result-container",children:y||Object(t.jsxs)(t.Fragment,{children:[Object(t.jsxs)("div",{className:"result",children:["Player ",d,"'s Turn",Object(t.jsxs)("span",{children:["Click Roll Dice or press ",d]})]}),Object(t.jsxs)("div",{className:"dice-number",children:["X : ",h]}),Object(t.jsx)("div",{className:"roll-button button",onClick:function(){return L(d)},children:"Roll Dice"}),Object(t.jsxs)("div",{className:"dice-number",children:["Y : ",p]})]})}),Object(t.jsxs)("div",{className:"board-container",children:[function(e){for(var s=[],c=e;c>0;c--)s.push(D(c,e));return Object(t.jsx)("div",{className:"board",children:s})}(e.rowsCount),Object(t.jsxs)("div",{className:"ladders",children:[Object(t.jsx)("div",{class:"ladder-1 ladder"}),Object(t.jsx)("div",{class:"ladder-2 ladder"}),Object(t.jsx)("div",{class:"ladder-3 ladder"}),Object(t.jsx)("div",{class:"ladder-4 ladder"}),Object(t.jsx)("div",{class:"ladder-5 ladder"}),Object(t.jsx)("div",{class:"ladder-6 ladder"}),Object(t.jsx)("div",{class:"ladder-7 ladder"}),Object(t.jsx)("div",{class:"ladder-8 ladder"})]}),Object(t.jsxs)("div",{className:"snakes",children:[Object(t.jsx)("div",{class:"snake-1 snake"}),Object(t.jsx)("div",{class:"snake-2 snake"}),Object(t.jsx)("div",{class:"snake-3 snake"}),Object(t.jsx)("div",{class:"snake-4 snake"}),Object(t.jsx)("div",{class:"snake-5 snake"}),Object(t.jsx)("div",{class:"snake-6 snake"})]})]}),y?Object(t.jsx)("div",{className:"reset-button button",onClick:function(){j("X"),O({X:0,Y:0}),f(0),N(0),C(null)},children:"Reset"}):""]})}),u=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,14)).then((function(s){var c=s.getCLS,t=s.getFID,a=s.getFCP,n=s.getLCP,r=s.getTTFB;c(e),t(e),a(e),n(e),r(e)}))};d.a.render(Object(t.jsx)(n.a.StrictMode,{children:Object(t.jsx)(j,{rowsCount:10})}),document.getElementById("root")),u()}},[[13,1,2]]]);
//# sourceMappingURL=main.04377426.chunk.js.map