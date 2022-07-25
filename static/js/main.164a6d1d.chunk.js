(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(4),c=a.n(l),o=(a(14),a(1)),s=(a(16),a(2)),m=a.n(s);function i(e){var t=Object(n.useState)("Enable Dark Mode"),a=Object(o.a)(t,2),l=a[0],c=a[1];return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("a",{className:"navbar-brand",href:"/"},e.title),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"/"},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"/"},"About"))),r.a.createElement("div",{className:"form-check form-switch mx-3",onClick:function(){c("Enable Dark Mode"===l?"Enable Light Mode":"Enable Dark Mode")}},r.a.createElement("input",{className:"form-check-input bg-".concat(e.mode),type:"checkbox",role:"switch",id:"flexSwitchCheckDefault","aria-checked":"true",onClick:e.toggleMode}),r.a.createElement("label",{className:"form-check-label text-".concat("light"===e.mode?"dark":"light"),htmlFor:"flexSwitchCheckDefault"},l)),r.a.createElement("form",{className:"d-flex",role:"search"},r.a.createElement("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),r.a.createElement("button",{className:"btn btn-outline-primary",type:"submit"},"Search")))))}function u(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),l=a[0],c=a[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,e.heading),r.a.createElement("textarea",{className:"form-control",value:l,onChange:function(e){c(e.target.value)},id:"myBox",rows:"8",style:{backgroundColor:"dark"===e.mode?"#000000":"white",color:"dark"===e.mode?"white":"#000000"}}),r.a.createElement("button",{className:"btn btn-primary my-3",onClick:function(){var t=l.toUpperCase();c(t),e.showAlert("Converted to UpperCase","success")}},"Convert to UpperCase"),r.a.createElement("button",{className:"btn btn-primary my-3 mx-2",onClick:function(){var t=l.toLowerCase();c(t),e.showAlert("Converted to LowerCase","success")}},"Convert to LowerCase"),r.a.createElement("button",{className:"btn btn-primary my-3 mx-2",onClick:function(){var t=l.split("").reverse().join("");c(t),e.showAlert("String Reversed","success")}},"Reverse"),r.a.createElement("button",{className:"btn btn-primary my-3 mx-2",onClick:function(){var t=l.split(/[ ]+/);c(t.join(" ")),e.showAlert("Extra space removed","success")}},"Remove Extra Spaces"),r.a.createElement("button",{className:"btn btn-primary my-3 mx-2",onClick:function(){c(""),e.showAlert("Cleared!!","success")}},"Clear Text"),r.a.createElement("button",{className:"btn btn-primary my-3 mx-2",onClick:function(){var t=document.getElementById("myBox");t.select(),navigator.clipboard.writeText(t.value),e.showAlert("Copied!!","success")}},"Copy Text")),r.a.createElement("div",{className:"conatiner my-3"},r.a.createElement("h2",null,"Preview"),r.a.createElement("hr",null),r.a.createElement("p",null,l.length>0?l:"Enter something in the above box"),r.a.createElement("hr",null),r.a.createElement("h2",null," Your Text Summary"),r.a.createElement("p",null,l.split(" ").length-1," words and ",l.length," characters"),r.a.createElement("p",null,.008*(l.split(" ").length-1)," Minutes to read"),r.a.createElement("br",null)))}function d(e){return r.a.createElement("div",{className:" text-center p-3 bg-".concat("dark"===e.mode?"dark":"light","\n      ")},"\xa92022 Copyright:",r.a.createElement("a",{className:"text",href:"https://www.linkedin.com/in/adarsh-sharma-438b9b1b9/"},"Linkedin Profile"))}i.protoTypes={title:m.a.string.isRequired,aboutText:m.a.string},i.defaultProps={title:"Set Name",aboutText:"About Name"};var b=function(e){return e.alert&&r.a.createElement("div",{className:"alert alert-".concat(e.alert.typ," alert-dismissible fade show "),role:"alert"},r.a.createElement("strong",null,function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.typ))," : ",e.alert.msg)};var h=function(){var e=Object(n.useState)("light"),t=Object(o.a)(e,2),a=t[0],l=t[1],c=function(e,t){p({msg:e,typ:t}),setTimeout(function(){p("","")},1e3)},s=Object(n.useState)("",""),m=Object(o.a)(s,2),h=m[0],p=m[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(i,{title:"TextUtils",mode:a,toggleMode:function(){"light"===a?(l("dark"),document.body.style.backgroundColor="black",document.body.style.color="white",c("Dark Mode has been Enabled","success"),document.title="TextUtils - DarkMode"):(l("light"),document.body.style.backgroundColor="white",document.body.style.color="black",c("Light Mode has been Enabled","success"),document.title="TextUtils - LightMode")}}),r.a.createElement(b,{alert:h,mode:a}),r.a.createElement("div",{className:"container my-3"},r.a.createElement(u,{heading:"Enter the text to analyse",mode:a,showAlert:c})),r.a.createElement(d,{mode:a}))},p=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,21)).then(function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,l=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),l(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null))),p()},5:function(e,t,a){e.exports=a(20)}},[[5,3,2]]]);
//# sourceMappingURL=main.164a6d1d.chunk.js.map