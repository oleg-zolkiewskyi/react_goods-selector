(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var s=c(3),o=c.n(s),n=c(4),a=c(5),l=c(8),r=c(7),d=c(1),i=c.n(d),u=(c(13),c(6)),p=c.n(u),h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],j=c(0),b=function(e){Object(l.a)(c,e);var t=Object(r.a)(c);function c(){var e;Object(n.a)(this,c);for(var s=arguments.length,o=new Array(s),a=0;a<s;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).state={selectedGood:"Jam"},e}return Object(a.a)(c,[{key:"render",value:function(){var e=this,t=this.state.selectedGood;return Object(j.jsxs)("main",{className:"App",children:[Object(j.jsxs)("header",{className:"App__header",children:[Object(j.jsx)("h1",{className:"App__title",children:t?"".concat(t," is selected"):"No goods selected"}),this.state.selectedGood.length>0&&Object(j.jsx)("button",{type:"button",className:"App__clear",onClick:function(){e.setState({selectedGood:""})},children:"Clear"})]}),Object(j.jsx)("ul",{children:h.map((function(c){return Object(j.jsxs)("li",{className:p()("Good",{"Good--active":c===t}),children:[c,c===t&&Object(j.jsx)("button",{type:"button",className:"Good__remove",onClick:function(){e.setState({selectedGood:""})},children:"Remove"}),c!==t&&Object(j.jsx)("button",{type:"button",className:"Good__select",onClick:function(){e.setState({selectedGood:c})},children:"Select"})]},c)}))})]})}}]),c}(i.a.Component);o.a.render(Object(j.jsx)(b,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.fdedf63f.chunk.js.map