(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{124:function(e,t,n){},125:function(e,t,n){},126:function(e,t,n){},127:function(e,t,n){},224:function(e,t,n){},225:function(e,t,n){},228:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n(83),a=n.n(s),r=n(49),l=n(3),i=n(2),o=n(48),u=n.n(o),j=(n(90),n(91),n(92),n.p+"static/media/teaching-animate.a73ce344.svg"),d=n(5),b=n.n(d),m=n(9),h=n.n(m),x=n(0),O=function(e){var t=Object(c.useState)(""),n=Object(i.a)(t,2),s=n[0],a=n[1],r=Object(c.useState)(""),l=Object(i.a)(r,2),o=l[0],u=l[1],d=Object(c.useState)("student"),m=Object(i.a)(d,2),O=m[0],f=m[1],p=Object(c.useState)(!1),g=Object(i.a)(p,2),N=g[0],v=g[1];Object(c.useEffect)((function(){return N&&("teacher"===O&&b.a.emit("joinTeacher",{name:s,role:O},(function(t){u(t.room),e.loginStatus({name:s,role:O,room:t.room}),v(!1),f("student")})),"student"===O&&!0===N&&b.a.emit("joinStudent",{name:s,room:o,role:O},(function(t){"joinedSuccessfully"===t?e.loginStatus({name:s,role:O,room:o}):h.a.fire({title:"Error",text:t,type:"error"}),v(!1)}))),function(){a(""),f("student"),u(""),v(!1)}}),[N]);return Object(x.jsx)("div",{className:"wrapper mt-5 p-5",children:Object(x.jsx)("div",{className:"container",children:Object(x.jsxs)("div",{className:"row align-items-center justify-content-center ",children:[Object(x.jsx)("div",{className:"col-lg-5 col-sm-12 ",children:Object(x.jsx)("img",{className:"px-4",src:j,alt:""})}),Object(x.jsx)("div",{className:"col-sm-12 col-lg-5",children:Object(x.jsx)("div",{className:"card card-signin my-5",children:Object(x.jsxs)("div",{className:"card-body",children:[Object(x.jsxs)("h5",{className:"card-title text-center",children:["Welcome ",s," !!"]}),Object(x.jsxs)("form",{className:"form-signin",children:[Object(x.jsxs)("div",{className:"form-label-group",children:[Object(x.jsx)("input",{type:"text",id:"inputName",value:s,autoComplete:"off",className:"form-control",onChange:function(e){return a(e.target.value)},onPaste:function(e){return a(e.target.value)},placeholder:"First Name",required:!0,autoFocus:!0}),Object(x.jsx)("label",{htmlFor:"inputName",children:"Enter Name"})]}),Object(x.jsx)("div",{className:"form-label-group",children:Object(x.jsxs)("select",{className:"form-control",onChange:function(e){return f(e.target.value)},placeholder:"Select Role",children:[Object(x.jsx)("option",{value:"student",children:"Student"}),Object(x.jsx)("option",{value:"teacher",children:"Teacher"})]})}),function(e){if("student"===e)return Object(x.jsxs)("div",{className:"form-label-group",children:[Object(x.jsx)("input",{type:"number",id:"inputCode",autoComplete:"off",className:"form-control",onChange:function(e){return u(e.target.value)},onPaste:function(e){return u(e.target.value)},placeholder:"First Name",required:!0}),Object(x.jsx)("label",{htmlFor:"inputCode",children:"Enter Room Code"})]})}(O),Object(x.jsx)("button",{onClick:function(e){return function(e){if(e.preventDefault(),!s)return h.a.fire({title:"Warning",text:"Fill up all the blanks",type:"warning"}),!1;if(s&&O){if("teacher"===O)return!0;if("student"===O)return!!o||(h.a.fire({title:"Warning",text:"Fill up all the blanks",type:"warning",dangerMode:!0}),!1)}return!1}(e)?v(!0):null},className:"btn btn-lg btn-primary btn-block text-uppercase",type:"button",children:"Best of Luck !!"})]})]})})})]})})})},f=n.p+"static/media/wait.85adba7b.svg",p=(n(124),n(125),function(e){return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("div",{className:"box mx-1",children:Object(x.jsx)("h3",{className:"text-center",children:e.number})})})}),g=(n(126),function(e){var t;return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("div",{className:"list",children:Object(x.jsxs)("ul",{children:[Object(x.jsx)("h3",{className:"text-center bg-success ",children:"Participants"}),Object(x.jsx)("li",{className:"lstHeader",children:"Teacher"}),e.teacherList?(t=e.teacherList,Object(x.jsx)("li",{children:t[1]})):null,Object(x.jsxs)("li",{className:"lstHeader",children:["Students (",e.studentList?e.studentList.length:0,")"]}),e.studentList?function(e){var t=[];return e.forEach((function(e){t.push(Object(x.jsx)("li",{children:e[1]},e[0]))})),t}(e.studentList):null]})})})}),N=function(e){var t=Object(c.useState)(!1),n=Object(i.a)(t,2),s=n[0],a=n[1],r=Object(c.useState)([]),l=Object(i.a)(r,2),o=l[0],u=l[1],j=Object(c.useState)([]),d=Object(i.a)(j,2),m=d[0],O=d[1],N=Object(c.useState)([!0]),v=Object(i.a)(N,2),S=v[0],y=v[1],C=Object(c.useState)(""),w=Object(i.a)(C,2),F=w[0],k=w[1],E=Object(c.useState)(2),L=Object(i.a)(E,2),P=L[0],A=L[1],q=Object(c.useState)(!1),B=Object(i.a)(q,2),D=B[0],R=B[1],T=e.name.slice(0).split(" ").map((function(e){return e[0].toUpperCase()+e.substr(1).toLowerCase()})).join(" ");Object(c.useEffect)((function(){b.a.emit("isPoll",{room:e.room},(function(e){e&&(a(!0),k(e.question),A(e.optionNumber),y(!0),R(!0))}))}),[]),Object(c.useEffect)((function(){D||(s?b.a.once("pollEnded",(function(e){a(!1),y(!0)})):b.a.once("pollStarted",(function(e){k(e.question),A(e.optionNumber),a(!0)})))}),[s]),Object(c.useEffect)((function(){b.a.once("strengthUpdate",(function(t){if(t.strength&&(u(t.strength.students),O(t.strength.teacher)),"classEnded"===t.strength)return h.a.fire({title:"Announcement",text:"Class has Ended",type:"info"}).then((function(){e.back(!0)})),function(){u([]),a(!1),y(!0),u([]),O([]),R(!1)}}))}),[o]);var I=function(t,n){t.preventDefault(),R(!1),b.a.emit("updatePoll",{room:e.room,index:n},(function(e){y(!1)}))};return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{className:"row w-100 bg-warning py-2  justify-content-center align-items-center",children:[Object(x.jsx)("div",{className:"col-md-6 col-sm-12",children:Object(x.jsx)("h3",{className:"text-center",children:"Room Code :  "})}),Object(x.jsx)("div",{className:"col-md-6 col-sm-12",children:Object(x.jsx)("div",{className:"d-flex",children:function(e){e=e.toString();for(var t=[],n=0;n<e.length;n++)t.push(Object(x.jsx)(p,{number:e.charAt(n)},n));return t}(e.room)})})]}),Object(x.jsx)("div",{className:"context text-center py-2",children:Object(x.jsxs)("div",{className:"row  h-100 align-items-center justify-content-center",children:[Object(x.jsx)("div",{className:"col-lg-9 col-sm-12",children:s?Object(x.jsx)("div",{className:"external",children:Object(x.jsxs)("div",{className:"card inner",children:[Object(x.jsxs)("h3",{className:"card-header text-danger",children:[Object(x.jsx)("span",{className:"blink",children:Object(x.jsx)("span",{className:"dot"})}),"Live Polling Is Up"]}),Object(x.jsxs)("div",{className:"card-body",children:[Object(x.jsx)("p",{className:"card-text my-3",children:F}),function(e){for(var t=["A","B","C","D"],n=[],c=0;c<P;c++)n.push(Object(x.jsx)("button",{className:"btn btn-success mx-2 px-3",value:c,onClick:function(e){return I(e,e.target.value)},disabled:!S,children:t[c]},c));return n}()]})]})}):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("img",{className:"wait px-5",src:f}),Object(x.jsxs)("h1",{className:"text-light px-5",children:[T,", Wait for your Teacher !!!"]})]})}),Object(x.jsx)("div",{className:"col-lg-3 col-sm-12 align-self-start",children:Object(x.jsx)(g,{teacherList:m,studentList:o,children:"  "})})]})})]})},v=(n(127),n(84)),S=function(e){var t=["A","B","C","D"],n=function(e){var t=0;return e.forEach((function(e){t+=e})),t};return Object(x.jsxs)("div",{children:[Object(x.jsxs)("h5",{className:"card-title font ",children:[e.poll?n(e.poll):0," student responeded out of ",e.data?e.data.length:0]}),Object(x.jsx)(v.Bar,{data:{labels:function(){for(var n=[],c=0;c<e.optionNumber;c++)n.push("".concat(t[c]," ( ").concat(e.poll[c]," )"));return n}(),datasets:[{label:"Votes",data:e.poll?function(e){var t=[];return e.forEach((function(c){t.push(c/n(e)*100)})),t}(e.poll):function(){for(var t,n=[];t<e.optionNumber;t++)n.push(0);return n},backgroundColor:"#ffba08",borderColor:"#faa307",borderWidth:1.5}]},height:300,width:600,options:{maintainAspectRatio:!0,scales:{yAxes:[{ticks:{beginAtZero:!0,max:100}}],xAxes:[{barPercentage:.4}]}}})]})},y=function(e){return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("div",{className:"external",children:Object(x.jsxs)("div",{className:"card inner",children:[Object(x.jsxs)("h3",{className:"card-header text-danger",children:[Object(x.jsx)("span",{className:"blink",children:Object(x.jsx)("span",{className:"dot"})}),"Live Polling"]}),Object(x.jsxs)("div",{className:"card-body",children:[Object(x.jsx)("button",{className:"btn btn-success mx-2 px-3",onClick:function(t){return e.end(t,!0)},children:"End Poll"}),Object(x.jsx)("p",{className:"card-text",children:e.question}),Object(x.jsx)(S,{data:e.data,poll:e.poll,optionNumber:e.optionNumber})]})]})})})},C=function(e){var t=Object(c.useState)([]),n=Object(i.a)(t,2),s=n[0],a=n[1],r=Object(c.useState)(!1),l=Object(i.a)(r,2),o=l[0],u=l[1],j=Object(c.useState)([]),d=Object(i.a)(j,2),m=d[0],O=d[1],N=Object(c.useState)(!0),v=Object(i.a)(N,2),S=v[0],C=v[1],w=Object(c.useState)("Is the topic cleared ?"),F=Object(i.a)(w,2),k=F[0],E=F[1],L=Object(c.useState)(2),P=Object(i.a)(L,2),A=P[0],q=P[1];Object(c.useEffect)((function(){b.a.once("strengthUpdate",(function(e){e.strength?a(e.strength.students):a([])}))}),[s]),Object(c.useEffect)((function(){0!==m.length&&b.a.once("updatedPoll",(function(e){O(e.data.pollData)}))}),[m]);var B=e.name.slice(0).split(" ").map((function(e){return e[0].toUpperCase()+e.substr(1).toLowerCase()})).join(" ");return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{className:"row w-100 bg-warning py-2  justify-content-center align-items-center",children:[Object(x.jsx)("div",{className:"col-md-6 col-sm-12",children:Object(x.jsx)("h3",{className:"text-center",children:"Room Code :  "})}),Object(x.jsx)("div",{className:"col-md-6 col-sm-12",children:Object(x.jsx)("div",{className:"d-flex",children:function(e){e=e.toString();for(var t=[],n=0;n<e.length;n++)t.push(Object(x.jsx)(p,{number:e.charAt(n)},n));return t}(e.room)})})]}),Object(x.jsxs)("div",{className:"context text-center py-2",children:[(S^o)&S?Object(x.jsx)("button",{className:"btn btn-success mx-2 px-3",onClick:function(e){C(!1),u(!1)},children:"Create Poll"}):Object(x.jsx)(x.Fragment,{}),Object(x.jsxs)("div",{className:"row  h-100 align-items-center justify-content-center",children:[Object(x.jsxs)("div",{className:"col-lg-9 col-sm-12",children:[(S^o)&S?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("img",{className:"wait ",src:f}),Object(x.jsxs)("h1",{className:"text-light px-5",children:[B,", you haven't created the poll!!!"]})]}):null,S^o||S?null:Object(x.jsx)("div",{className:"external",children:Object(x.jsxs)("div",{className:"card inner",children:[Object(x.jsxs)("h3",{className:"card-header text-danger",children:[Object(x.jsx)("span",{className:"blink",children:Object(x.jsx)("span",{className:"dot"})}),"Create Live Poll"]}),Object(x.jsxs)("div",{className:"card-body",children:[Object(x.jsxs)("div",{className:"form-label-group",children:[Object(x.jsx)("input",{type:"text",id:"inputQuestion",value:k,autoComplete:"off",className:"form-control",onChange:function(e){return E(e.target.value)},onPaste:function(e){return E(e.target.value)},placeholder:"Question",required:!0,autoFocus:!0}),Object(x.jsx)("label",{htmlFor:"inputQuestion",children:"Enter Question"})]}),Object(x.jsxs)("div",{className:"form-label-group",children:[Object(x.jsx)("input",{type:"number",id:"inputOption",value:A,autoComplete:"off",className:"form-control",onChange:function(e){return q(e.target.value)},onPaste:function(e){return q(e.target.value)},placeholder:"Number of Option",required:!0,autoFocus:!0}),Object(x.jsx)("label",{htmlFor:"inputOption",children:"Enter Question"})]}),S^o||S?null:Object(x.jsx)("button",{className:"btn btn-success mx-2 px-3",onClick:function(t){return function(t){if(A<5&&A>0){for(var n=[],c=0;c<A;c++)n.push(0);t.preventDefault(),b.a.emit("startPoll",{room:e.room,question:k,optionNumber:A},(function(e){e.error?(h.a.fire({title:"Error",text:e.error,type:"error"}),u(!1),O([])):(u(!0),C(!1),O(n))}))}else h.a.fire({title:"Reached Limitation",text:"You can have maximum 4 option",type:"warning"})}(t)},children:"Create Poll"})]})]})}),(S^o)&o?Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(y,{data:s,poll:m,question:k,optionNumber:A,end:function(t,n){return n?function(t){t.preventDefault(),h.a.fire({title:"Are you sure?",text:"The Graph would not be available again. Please a have look on it",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, end the poll!"}).then((function(t){t.value&&(u(!1),C(!0),b.a.emit("endPoll",{room:e.room},(function(e){O([]),q(2),E("Is the topic cleared ?")})))}))}(t):null}})}):null]}),Object(x.jsx)("div",{className:"col-lg-3 col-sm-12 align-self-start mr-auto",children:Object(x.jsx)(g,{studentList:s,teacherList:[0,B,"teacher"],children:" "})})]})]})]})},w=(n(224),function(e){return Object(x.jsxs)("div",{className:"intro",children:[Object(x.jsx)(u.a,{options:{strings:['<h3 class="textSans">\u0917\u0941\u0930\u0941\u0930\u094d\u092c\u094d\u0930\u0939\u094d\u092e\u093e \u0917\u094d\u0930\u0941\u0930\u0941\u0930\u094d\u0935\u093f\u0937\u094d\u0923\u0941\u0903 \u0917\u0941\u0930\u0941\u0930\u094d\u0926\u0947\u0935\u094b \u092e\u0939\u0947\u0936\u094d\u0935\u0930\u0903 \u0964 <br/> \u0917\u0941\u0930\u0941\u0903 \u0938\u093e\u0915\u094d\u0937\u093e\u0924\u094d \u092a\u0930\u0902 \u092c\u094d\u0930\u0939\u094d\u092e \u0924\u0938\u094d\u092e\u0948 \u0936\u094d\u0930\u0940 \u0917\u0941\u0930\u0935\u0947 \u0928\u092e\u0903 \u0965</h3>',,"<h3 class='textSans'>\u092d\u093e\u0935\u093e\u0930\u094d\u0925 : \u0917\u0941\u0930\u0941 \u092c\u094d\u0930\u0939\u094d\u092e\u093e \u0939\u0948, \u0917\u0941\u0930\u0941 \u0935\u093f\u0937\u094d\u0923\u0941 \u0939\u0948, \u0917\u0941\u0930\u0941 \u0939\u093f \u0936\u0902\u0915\u0930 \u0939\u0948; \u0917\u0941\u0930\u0941 \u0939\u093f \u0938\u093e\u0915\u094d\u0937\u093e\u0924\u094d \u092a\u0930\u092c\u094d\u0930\u0939\u094d\u092e \u0939\u0948;<br/> \u0909\u0928 \u0938\u0926\u094d\u0917\u0941\u0930\u0941 \u0915\u094b \u092a\u094d\u0930\u0923\u093e\u092e \u0964</h3>","<h3 class='textSans'>\u0927\u0930\u094d\u092e\u091c\u094d\u091e\u094b \u0927\u0930\u094d\u092e\u0915\u0930\u094d\u0924\u093e \u091a \u0938\u0926\u093e \u0927\u0930\u094d\u092e\u092a\u0930\u093e\u092f\u0923\u0903 \u0964<br/> \u0924\u0924\u094d\u0924\u094d\u0935\u0947\u092d\u094d\u092f\u0903 \u0938\u0930\u094d\u0935\u0936\u093e\u0938\u094d\u0924\u094d\u0930\u093e\u0930\u094d\u0925\u093e\u0926\u0947\u0936\u0915\u094b \u0917\u0941\u0930\u0941\u0930\u0941\u091a\u094d\u092f\u0924\u0947 \u0965</h3>","<h3 class='textSans'>\u092d\u093e\u0935\u093e\u0930\u094d\u0925 : \u0927\u0930\u094d\u092e \u0915\u094b \u091c\u093e\u0928\u0928\u0947\u0935\u093e\u0932\u0947, \u0927\u0930\u094d\u092e \u092e\u0941\u0924\u093e\u092c\u093f\u0915 \u0906\u091a\u0930\u0923 \u0915\u0930\u0928\u0947\u0935\u093e\u0932\u0947, \u0927\u0930\u094d\u092e\u092a\u0930\u093e\u092f\u0923,<br/> \u0914\u0930 \u0938\u092c \u0936\u093e\u0938\u094d\u0924\u094d\u0930\u094b\u0902 \u092e\u0947\u0902 \u0938\u0947 \u0924\u0924\u094d\u0924\u094d\u0935\u094b\u0902 \u0915\u093e \u0906\u0926\u0947\u0936 \u0915\u0930\u0928\u0947\u0935\u093e\u0932\u0947 \u0917\u0941\u0930\u0941 \u0915\u0939\u0947 \u091c\u093e\u0924\u0947 \u0939\u0948\u0902 \u0964</h3>","<h3 class='textSans'>\u092a\u094d\u0930\u0947\u0930\u0915\u0903 \u0938\u0942\u091a\u0915\u0936\u094d\u0935\u0948\u0935 \u0935\u093e\u091a\u0915\u094b \u0926\u0930\u094d\u0936\u0915\u0938\u094d\u0924\u0925\u093e \u0964<br/> \u0936\u093f\u0915\u094d\u0937\u0915\u094b \u092c\u094b\u0927\u0915\u0936\u094d\u091a\u0948\u0935 \u0937\u0921\u0947\u0924\u0947 \u0917\u0941\u0930\u0935\u0903 \u0938\u094d\u092e\u0943\u0924\u093e\u0903 \u0965</h3>","<h3 class='textSans'>\u092a\u094d\u0930\u0947\u0930\u0923\u093e \u0926\u0947\u0928\u0947\u0935\u093e\u0932\u0947, \u0938\u0942\u091a\u0928 \u0926\u0947\u0928\u0947\u0935\u093e\u0932\u0947, ( \u0938\u091a ) \u092c\u0924\u093e\u0928\u0947\u0935\u093e\u0932\u0947, ( \u0930\u093e\u0938\u094d\u0924\u093e ) \u0926\u093f\u0916\u093e\u0928\u0947\u0935\u093e\u0932\u0947, \u0936\u093f\u0915\u094d\u0937\u093e \u0926\u0947\u0928\u0947\u0935\u093e\u0932\u0947,<br/> \u0914\u0930 \u092c\u094b\u0927 \u0915\u0930\u093e\u0928\u0947\u0935\u093e\u0932\u0947 \u2013 \u092f\u0947 \u0938\u092c \u0917\u0941\u0930\u0941 \u0938\u092e\u093e\u0928 \u0939\u0948 \u0964</h3>"],autoStart:!0,loop:!0}}),e.login?Object(x.jsx)(x.Fragment,{}):Object(x.jsxs)("div",{className:"font",children:[Object(x.jsxs)("h1",{className:"text-light",children:[Object(x.jsx)("span",{className:"logo-name  mb-2",children:"Shiksha Yogi"}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),"REAL TIME  ",Object(x.jsxs)("span",{className:"live blink",children:[Object(x.jsx)("span",{className:"dot"}),"LIVE POLLING"]})]}),Object(x.jsx)("h3",{className:"color",children:"For New Online Generation"})]})]})}),F=function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(""),r=Object(i.a)(a,2),l=r[0],o=r[1],u=Object(c.useState)([]),j=Object(i.a)(u,2);j[0],j[1];return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:"main",children:Object(x.jsx)(w,{login:n})}),n?null:Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(O,{loginStatus:function(e){return function(e){s(!0),o(e)}(e)}})," "]}),"student"===l.role?Object(x.jsx)(N,{name:l.name,back:function(e){return function(e){e&&(s(!1),o(""))}(e)},room:l.room}):null,"teacher"===l.role?Object(x.jsx)(C,{name:l.name,room:l.room}):null]})},k=(n(225),function(){return Object(x.jsx)("footer",{className:"d-flex justify-content-center align-items-center bg-dark py-4",children:Object(x.jsx)("h5",{children:"Copyright \xa9  2021 All rights reserved | Made By \u2665 Vishal Kishore "})})}),E=function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(r.a,{children:Object(x.jsx)(l.c,{children:Object(x.jsx)(l.a,{})})}),Object(x.jsx)(F,{}),Object(x.jsx)(k,{})]})};a.a.render(Object(x.jsx)(E,{}),document.querySelector("#root"))},5:function(e,t,n){var c=n(93);e.exports=c("https://vishal-kishore.herokuapp.com/")},91:function(e,t,n){},92:function(e,t,n){}},[[228,1,2]]]);
//# sourceMappingURL=main.def578b4.chunk.js.map