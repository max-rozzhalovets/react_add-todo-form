(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a.n(n),r=a(2),c=a(6),s=a(7),o=a(1),l=(a(14),[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}]),u=a(9),d=a.n(u),m=a(0),j=function(e){var t=e.user,a=t.name,n=t.email;return Object(m.jsx)("a",{className:"UserInfo",href:"mailto:".concat(n),children:a})},b=function e(t){var a=t.todo,n=a.id,i=a.title,r=a.completed,c=a.user;return Object(m.jsxs)("article",{"data-id":n,className:d()({TodoInfo:e,"TodoInfo--completed":r}),children:[Object(m.jsx)("h2",{className:"TodoInfo__title",children:i}),c&&Object(m.jsx)(j,{user:c})]})},h=function(e){var t=e.todos;return Object(m.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(m.jsx)(b,{todo:e},e.id)}))})},f=/[0-9A-Z\u0410-\u0429\u042c\u042e\u042f\u0490\u0404\u0406\u0407 ]/,p=function(e){return l.find((function(t){return t.id===e}))||null},O=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){var t=e.userId;return Object(s.a)(Object(s.a)({},e),{},{user:p(t)})})),x=function(e){return Math.max.apply(Math,Object(c.a)(e.map((function(e){return e.id}))))+1},v=function(){var e=Object(o.useState)(O),t=Object(r.a)(e,2),a=t[0],n=t[1],i=Object(o.useState)(""),s=Object(r.a)(i,2),u=s[0],d=s[1],j=Object(o.useState)(0),b=Object(r.a)(j,2),v=b[0],y=b[1],S=Object(o.useState)(!0),N=Object(r.a)(S,2),I=N[0],g=N[1],C=Object(o.useState)(!0),_=Object(r.a)(C,2),k=_[0],D=_[1];return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"Add todo form"}),Object(m.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),""!==u&&0!==v)return n((function(e){return[].concat(Object(c.a)(e),[{id:x(a),title:u,completed:!1,userId:v,user:p(v)}])})),d(""),void y(0);""===u&&g(!1),0===v&&D(!1)},children:[Object(m.jsxs)("label",{className:"field",children:["Title:",Object(m.jsx)("input",{type:"text","data-cy":"titleInput",placeholder:"Enter the title",value:u,onChange:function(e){var t=e.target.value;(t[t.length-1]||"a").toUpperCase().match(f)&&d(t),g(!0)}}),!I&&Object(m.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(m.jsxs)("div",{className:"field",children:["User:",Object(m.jsxs)("select",{"data-cy":"userSelect",value:v,onChange:function(e){var t=e.target.value;y(+t),D(!0)},children:[Object(m.jsx)("option",{disabled:!0,value:0,children:"Choose a user"}),l.map((function(e){var t=e.id,a=e.name;return Object(m.jsx)("option",{value:t,children:a},t)}))]}),!k&&Object(m.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(m.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]}),Object(m.jsx)(h,{todos:a})]})};i.a.render(Object(m.jsx)(v,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.71e35f4e.chunk.js.map