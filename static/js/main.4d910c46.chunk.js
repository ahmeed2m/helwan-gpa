(this["webpackJsonphelwan-gpa"]=this["webpackJsonphelwan-gpa"]||[]).push([[0],{176:function(e,t,n){e.exports=n(308)},182:function(e,t,n){},183:function(e,t,n){},308:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(28),o=n.n(r),i=(n(181),n(182),n(47)),s=n(48),l=n(49),u=n(50),d=n(54),h=n(165),p=n(33),m=(n(183),n(322)),v=n(39),b=n(320),f=n(60),g=n(317),k=n(318),j=n(319),y=n(309),E=n(321),w=n(323),A=n(112),C=function(e){return c.a.createElement(b.a,null,c.a.createElement(f.a,{id:"prev-gpa",style:{marginRight:"0px"}},"Previous GPA"),c.a.createElement(g.a,{htmlFor:"prev-gpa",type:"number",min:"1",onChange:function(t,n){var a=n.value;a>0&&e.handlePrevGPA(a)}}),c.a.createElement(f.a,{id:"prev-hours",style:{marginRight:"0px",marginLeft:"0px"}},"Previous Completed Hours"),c.a.createElement(g.a,{htmlFor:"prev-hours",type:"number",min:"1",onChange:function(t,n){e.handleprevHours(Number(n.value))}}))},x=function(e){var t=Object(a.useState)(e.subjects),n=Object(p.a)(t,2),r=n[0],o=n[1];function i(e){var t=r.map((function(t){return t.key===e.key?Object.assign({},t,{grade:e.subjectGPA,checked:e.checked}):t}));o(t)}function s(e){o(r.filter((function(t){return t.key!==e})))}Object(a.useEffect)((function(){var t=function(){var e=0,t=0,n=0;return r.map((function(a){var c=a.checked?2:3;1===a.grade?(t+=c,e+=c):e+=c,n+=c*a.grade})),{gpa:n/e,hours:e-t,attempt:t}}(),n=t.gpa,a=t.hours;n=n||0,a=a||0,e.onChange(n),e.onHours(a)}));var l=r.map((function(e){return c.a.createElement(E.a,{key:e.key,timeout:{enter:500,exit:50},classNames:"move"},c.a.createElement(S,{subjectGPA:e.grade,checked:e.checked,key:e.key,id:e.key,onSubjectChange:i,onSubjectRemove:s}))}));return c.a.createElement("div",{className:"SubjectList"},c.a.createElement(w.a,{className:"subjects"},l),c.a.createElement("div",{className:"plusButton"},c.a.createElement(P,{onSubmit:function(e){var t={grade:e.grade||"",checked:e.checked||!1,key:A.v4()};o([].concat(Object(h.a)(r),[t]))}})))},O=[{value:4,text:"A+"},{value:3.75,text:"A"},{value:3.4,text:"B+"},{value:3.1,text:"B"},{value:2.8,text:"C+"},{value:2.5,text:"C"},{value:2.25,text:"D+"},{value:2,text:"D"},{value:1,text:"F"}],S=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={checked:!1,subjectGPA:"",key:""},n.componentDidMount=function(){n.setState({checked:n.props.checked,subjectGPA:n.props.subjectGPA,key:n.props.id},(function(){n.props.form||n.props.onSubjectChange(n.state)}))},n.handleGradeChange=function(e,t){var a=t.value;n.setState({checked:n.state.checked,subjectGPA:a,key:n.props.id},(function(){n.props.form||n.props.onSubjectChange(n.state)}))},n.handleCheck=function(){n.setState({checked:!n.state.checked,subjectGPA:n.state.subjectGPA,key:n.props.id},(function(){n.props.form||n.props.onSubjectChange(n.state)}))},n.handleRemove=function(){n.props.onSubjectRemove(n.state.key)},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement(b.a,null,c.a.createElement(k.a,{label:"2 Hour subject?",style:{padding:"10px"},onClick:this.handleCheck,checked:this.state.checked}),c.a.createElement(j.a,{placeholder:"Grade",fluid:!0,selection:!0,options:O,onChange:this.handleGradeChange,value:this.state.subjectGPA}),c.a.createElement(b.a.Content,{extra:!0},c.a.createElement(y.a,{"aria-label":"remove subject",floated:"right",icon:"trash",color:"red",inverted:!0,onClick:this.handleRemove,style:{padding:"10px"}}),"Subject GPA : ",this.state.subjectGPA,c.a.createElement("br",null),"Hours : ",this.state.checked?"2":"3"))}}]),t}(c.a.Component),P=function(e){return c.a.createElement(y.a,{icon:"plus","aria-label":"add subject",onClick:function(){var t={grade:"",checked:!1,key:A.v4()};e.onSubmit(t)}})},G=function(e){var t=Object(a.useState)(0),n=Object(p.a)(t,2),r=n[0],o=n[1],i=Object(a.useState)(0),s=Object(p.a)(i,2),l=s[0],u=s[1],d=Object(a.useState)(0),h=Object(p.a)(d,2),b=h[0],f=h[1],g=Object(a.useState)(0),k=Object(p.a)(g,2),j=k[0],y=k[1],E=Object(a.useState)(0),w=Object(p.a)(E,2),A=w[0],O=w[1],S=Object(a.useState)(0),P=Object(p.a)(S,2),G=P[0],N=P[1];return Object(a.useEffect)((function(){N((r*l+A*b)/j)})),c.a.createElement("div",{className:"ui main"},c.a.createElement(m.a,{as:"h1",textAlign:"center",style:{padding:"10px"},dividing:!0},"FCAIH GPA Calculator"),c.a.createElement(C,{handlePrevGPA:function(e){o(e)},handleprevHours:function(e){u(e)}}),c.a.createElement("div",{className:"info"},c.a.createElement("b",null,"Current Term GPA : ",A?A.toFixed(2):"0.00"," "),c.a.createElement("br",null),c.a.createElement("b",null,"Cumulative GPA : ",G?G.toFixed(2):"0.00"," "),c.a.createElement("br",null),c.a.createElement("b",null,"Hours : ",j," ")),c.a.createElement(x,{subjects:e.subjects,onChange:function(e){O(e)},onHours:function(e){e=Number(e),f(e),y(l+e)}}),c.a.createElement("footer",{style:{paddingTop:"30px"},className:"bla"},c.a.createElement("a",{as:"a",href:"https://github.com/Ahmeed2m/helwan-gpa",rel:"noopener noreferrer",target:"_blank"},c.a.createElement(v.a,{name:"github",size:"big",style:{marginBottom:"9px"}}))))},N=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function H(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var R=n(112),W=[{grade:"",checked:!1,key:R.v4()},{grade:"",checked:!1,key:R.v4()},{grade:"",checked:!1,key:R.v4()},{grade:"",checked:!1,key:R.v4()},{grade:"",checked:!1,key:R.v4()},{grade:"",checked:!1,key:R.v4()}];o.a.render(c.a.createElement(G,{subjects:W}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/helwan-gpa",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/helwan-gpa","/service-worker.js");N?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):H(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):H(t,e)}))}}()}},[[176,1,2]]]);
//# sourceMappingURL=main.4d910c46.chunk.js.map