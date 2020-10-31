(this["webpackJsonpexpense-tracker"]=this["webpackJsonpexpense-tracker"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),l=n.n(c),u=(n(13),n(2)),o=n(7),i=n(3),m={transactions:[{id:1,text:"Flower",amount:-20},{id:2,text:"Salary",amount:300},{id:3,text:"Book",amount:-10},{id:4,text:"Camera",amount:150}]},s=function(e,t){switch(t.type){case"DELETE_TRANSACTION":return Object(i.a)(Object(i.a)({},e),{},{transactions:e.transactions.filter((function(e){return e.id!==t.payload}))});case"ADD_TRANSACTION":return Object(i.a)(Object(i.a)({},e),{},{transactions:[t.payload].concat(Object(o.a)(e.transactions))});default:return e}},d=Object(a.createContext)(m),E=function(e){var t=e.children,n=Object(a.useReducer)(s,m),c=Object(u.a)(n,2),l=c[0],o=c[1];return r.a.createElement(d.Provider,{value:{transactions:l.transactions,deleteTransaction:function(e){o({type:"DELETE_TRANSACTION",payload:e})},addTransaction:function(e){o({type:"ADD_TRANSACTION",payload:e})}}},t)};var f=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(0),o=Object(u.a)(l,2),i=o[0],m=o[1],s=Object(a.useContext)(d).addTransaction;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Add new transaction"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t={id:Math.floor(1e6*Math.random()),text:n,amount:+i};s(t),c(""),m(0)}},r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{htmlFor:"text"},"Text"),r.a.createElement("input",{type:"text",value:n,onChange:function(e){return c(e.target.value)},placeholder:"Enter text..."})),r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{htmlFor:"amount"},"Amount ",r.a.createElement("br",null),"(negative - expense, positive - income)"),r.a.createElement("input",{type:"number",value:i,onChange:function(e){return m(e.target.value)},placeholder:"Enter amount..."})),r.a.createElement("button",{disabled:!n,className:"btn"},"Add transaction")))};var p=function(){var e=Object(a.useContext)(d).transactions.map((function(e){return e.amount})).reduce((function(e,t){return e+t}),0).toFixed(2);return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,"Your Balance"),r.a.createElement("h1",null,"$",e))};var v=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Expense Tracker"))};var b=function(e){var t=e.transaction,n=Object(a.useContext)(d).deleteTransaction,c=t.amount<0?"-":"+";return r.a.createElement("div",null,r.a.createElement("li",{className:t.amount<0?"minus":"plus"},t.text," ",r.a.createElement("span",null,c,"$",Math.abs(t.amount)),r.a.createElement("button",{className:"delete-btn",onClick:function(){return n(t.id)}},"x")))};var x=function(){var e=Object(a.useContext)(d).transactions;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"History"),r.a.createElement("ul",{id:"list",className:"list"},e.map((function(e){return r.a.createElement(b,{key:e.id,transaction:e})}))))};var h=function(){var e=Object(a.useContext)(d).transactions.map((function(e){return e.amount})),t=e.filter((function(e){return e>0})).reduce((function(e,t){return e+t}),0).toFixed(2),n=e.filter((function(e){return e<0})).reduce((function(e,t){return e+t}),0)*(-1).toFixed(2);return r.a.createElement("div",{className:"inc-exp-container"},r.a.createElement("div",null,r.a.createElement("h4",null,"Income"),r.a.createElement("p",{id:"money-plus",className:"money plus"},t)),r.a.createElement("div",null,r.a.createElement("h4",null,"Expense"),r.a.createElement("p",{id:"money-minus",className:"money minus"},n)))};var O=function(){return r.a.createElement(E,null,r.a.createElement(v,null),r.a.createElement("div",{className:"container"},r.a.createElement(p,null),r.a.createElement(h,null),r.a.createElement(x,null),r.a.createElement(f,null)))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root"))},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.0d22c071.chunk.js.map