(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,n){e.exports=n(29)},24:function(e,t,n){},25:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},26:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(9),c=n.n(a),l=(n(24),n(10)),s=n(11),i=n(16),u=n(12),d=n(17),m=(n(25),n(26),n(15)),b=n(1);var f=function(e){var t=e.color;return r.a.createElement("div",{className:"key-inlay fall-off-screen",style:{backgroundColor:t,borderColor:t,boxShadow:"0 0 1rem ".concat(t)}})},p=function(e){var t=Object(o.useState)(new Audio(e)),n=Object(b.a)(t,1)[0],r=Object(o.useState)(!1),a=Object(b.a)(r,2),c=a[0],l=a[1];return[c,function(e){e&&(n.pause(),n.currentTime=0),n.play(),l(e)}]};var v=function(e){var t=e.letter,n=e.sound,a=e.color,c=Object(o.useState)(!1),l=Object(b.a)(c,2),s=l[0],i=l[1],u=p("sounds/".concat(n,".wav")),d=Object(b.a)(u,2),v=d[0],w=d[1],k=Object(o.useState)([]),F=Object(b.a)(k,2),y=F[0],h=F[1],j=Object(o.useState)(0),O=Object(b.a)(j,2),E=O[0],g=O[1],S={border:".4rem solid black",borderRadius:".5rem",margin:"0.3rem",fontSize:"1.5rem",padding:"0.5rem .4rem",transition:"all .07s ease",width:"8rem",textAlign:"center",color:"white",background:"rgba(0,0,0,0.65)",textShadow:"0 0 .5rem black",userSelect:"none",position:"relative",borderColor:a,boxShadow:v?"0 0 1rem ".concat(a):""},x=function(e){i(!0),w(!0);var t=[].concat(Object(m.a)(y),[{id:E,createdAt:Date.now()}]);h(t),g(E+1)},A=function(e){i(!1)},C=function(e){e.key.toUpperCase()===t&&x()},N=function(e){e.key.toUpperCase()===t&&A()};Object(o.useEffect)(function(){return document.addEventListener("keydown",C),document.addEventListener("keyup",N),function(){document.removeEventListener("keydown",C),document.removeEventListener("keydown",N)}}),console.log("about to render",y);var D=y.filter(function(e){return Date.now()-e.createdAt<5e3}).map(function(e){return r.a.createElement(f,{key:e.id,color:a})});return r.a.createElement("div",{className:s?"playing":"",style:S,onMouseUp:A,onMouseDown:x},r.a.createElement("div",{className:"kbd"},t),r.a.createElement("span",{className:"sound",style:{color:a}},n),D)},w=n(13),k=n.n(w),F=n(14),y=n.n(F),h=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"keys"},r.a.createElement(k.a,null,[{letter:"A",sound:"clap",color:"#FF0066"},{letter:"S",sound:"hihat",color:"#00FF00"},{letter:"D",sound:"kick",color:"#00FFFF"},{letter:"F",sound:"openhat",color:"#FFFF00"},{letter:"G",sound:"boom",color:"#9D00FF"},{letter:"H",sound:"ride",color:"#FF6600"},{letter:"J",sound:"snare",color:"#0033FF"},{letter:"K",sound:"tom",color:"#FF0000"},{letter:"L",sound:"tink",color:"#FF0066"}].map(function(e){var t=e.letter,n=e.sound,o=e.color;return r.a.createElement(y.a,{key:t,xs:4,xl:"auto",align:"center"},r.a.createElement(v,{letter:t,sound:n,color:o}))}))))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,1,2]]]);
//# sourceMappingURL=main.3606e774.chunk.js.map