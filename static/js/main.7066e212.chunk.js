(this.webpackJsonpdashboard=this.webpackJsonpdashboard||[]).push([[0],{12:function(e,t,a){e.exports=a.p+"static/media/LogoSimple.bba900a1.png"},19:function(e,t,a){e.exports=a(45)},24:function(e,t,a){},25:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(11),l=a.n(r),c=(a(24),a(12)),s=a.n(c),i=(a(25),a(13)),u=a(14),p=a(17),d=a(15),h=a(18),m=a(16),f=a.n(m),b=a(27),v=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"GlobalInfo",value:function(){var e=this;this.state.Global||function(){var e;return f.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return e={"Content-Type":"application/json"},t.abrupt("return",new Promise((function(t,a){t(b.post("https://us-central1-tulip-develop-f5bcc.cloudfunctions.net/dashboard_global",{},{headers:e}))})));case 2:case"end":return t.stop()}}))}().then((function(t){console.log(t),e.setState({Global:o.a.createElement("div",null,o.a.createElement("p",null,"Utilisateurs ",t.data.Users),o.a.createElement("p",null,"Contrats ",t.data.Contracts),o.a.createElement("p",null,"Activations ",t.data.Activations))})}))}},{key:"render",value:function(){return o.a.createElement("div",null,this.GlobalInfo(),this.state.Global)}}]),t}(o.a.Component);var E=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("img",{src:s.a,className:"App-logo",alt:"logo"}),o.a.createElement(v,null),o.a.createElement("p",null,"Edit ",o.a.createElement("code",null,"src/App.js")," and save to reload."),o.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[19,1,2]]]);
//# sourceMappingURL=main.7066e212.chunk.js.map