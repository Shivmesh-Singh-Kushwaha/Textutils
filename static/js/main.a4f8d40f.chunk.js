(this.webpackJsonphello=this.webpackJsonphello||[]).push([[0],{10:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(4),r=a.n(n),l=a(2),o=a(0);function i(e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)("a",{className:"navbar-brand",href:"/",children:e.title}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(o.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link active","aria-current":"page",href:"/",children:"Home"})})}),Object(o.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(o.jsx)("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",id:"flexSwitchCheckDefault"}),Object(o.jsx)("label",{className:"form-check-label",htmlfor:"flexSwitchCheckDefault",children:"Enable Dark Mode"})]})]})]})})})}function b(e){var t=Object(c.useState)(""),a=Object(l.a)(t,2),s=a[0],n=a[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h1",{style:{color:"light"===e.mode?"black":"white"},children:e.heading}),Object(o.jsxs)("div",{className:"mb-3",children:[Object(o.jsx)("textarea",{className:"form-control",value:s,style:{backgroundColor:"dark"===e.mode?"grey":"white",color:"light"===e.mode?"black":"white"},onChange:function(e){n(e.target.value)},id:"Textarea",rows:"10"}),Object(o.jsx)("button",{className:"btn btn-primary mx-1 my-2",onClick:function(){var t=s.toUpperCase();n(t),e.showAlert("Converted to Upper Case","success")},children:"Convert to Uppercase"}),Object(o.jsx)("button",{className:"btn btn-primary mx-1 my-2",onClick:function(){var t=s.toLowerCase();n(t),e.showAlert("Converted to Lower Case","success")},children:"Convert to Lowercase"}),Object(o.jsx)("button",{className:"btn btn-primary mx-1 my-2",onClick:function(){n(""),e.showAlert("Cleared text","success")},children:"Clear"}),Object(o.jsx)("button",{className:"btn btn-primary mx-1 my-2",onClick:function(){var t=document.getElementById("Textarea");t.select(),navigator.clipboard.writeText(t.value),e.showAlert("Text copied","success")},children:"Copy text"}),Object(o.jsx)("button",{className:"btn btn-primary mx-1 my-2",onClick:function(){var t=s.split(/[ ]+/);n(t.join(" ")),e.showAlert("Spaces are removed","success")},children:"Remove Extra Spaces"})]})]}),Object(o.jsxs)("div",{className:"container my-3",style:{color:"light"===e.mode?"black":"white"},children:[Object(o.jsx)("h2",{children:"Your Text Summary"}),Object(o.jsxs)("p",{children:[s.split(" ").length-1," and ",s.length]}),Object(o.jsxs)("p",{children:[.008*s.split(" ").length," Minutes to read"]})]}),Object(o.jsxs)("div",{className:"container",style:{color:"dark"===e.mode?"white":"black"},children:[Object(o.jsx)("h2",{children:"Preview"}),Object(o.jsx)("p",{children:s})]})]})}function d(e){return e.alert&&Object(o.jsxs)("div",{class:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(o.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)})," : ",e.alert.msg]})}var j=function(){var e=Object(c.useState)("light"),t=Object(l.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(null),r=Object(l.a)(n,2),j=r[0],h=r[1],m=function(e,t){h({msg:e,type:t}),setTimeout((function(){h(null)}),1e3)},u=function(){"light"===a?(s("dark"),document.body.style.backgroundColor="#101138",m("Dark Mode is Open. ","success")):(s("light"),document.body.style.backgroundColor="white",m("Light Mode is Open. ","success"))};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(i,{title:"TextUtils",mode:a,toggleMode:u}),Object(o.jsx)(d,{alert:j}),Object(o.jsx)(b,{heading:"Enter the text here",mode:a,toggleMode:u,showAlert:m})]})};r.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(j,{})}),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.a4f8d40f.chunk.js.map