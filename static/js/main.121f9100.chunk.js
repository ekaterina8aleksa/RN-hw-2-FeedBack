(this.webpackJsonpfeedback=this.webpackJsonpfeedback||[]).push([[0],[,,,,,,function(e,t,a){e.exports={container:"Container_container__2EbbL"}},function(e,t,a){e.exports={section:"Section_section__2i3Lq"}},function(e,t,a){e.exports={item:"StatisticItem_item__2yps1"}},function(e,t,a){e.exports={list:"StatisticList_list__3u_M-"}},function(e,t,a){},function(e,t,a){e.exports={button:"FeedbackOptions_button__3m6dv"}},,,function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(2),o=a.n(r),l=a(3),i=a(4),u=a(5),s=a(13),b=a(12),d=a(6),m=a.n(d),v=function(e){var t=e.children;return c.a.createElement("div",{className:m.a.container},t)},f=a(7),p=a.n(f),k=function(e){var t=e.title,a=e.children;return c.a.createElement("section",{className:p.a.section},c.a.createElement("h2",null,t),a)},E=a(8),h=a.n(E),_=function(e){var t=e.label,a=e.value;return c.a.createElement("li",{className:h.a.item},t," : ",a)},g=a(9),F=a.n(g),y=function(e){var t=e.good,a=e.neutral,n=e.bad,r=e.total,o=e.positivePercentage;return c.a.createElement("ul",{className:F.a.list},c.a.createElement(_,{label:"Good",value:t}),c.a.createElement(_,{label:"Neutral",value:a}),c.a.createElement(_,{label:"Bad",value:n}),c.a.createElement(_,{label:"Total",value:r}),c.a.createElement(_,{label:"Positive feedback",value:"".concat(o," %")}))},N=a(10),O=a.n(N),P=function(e){var t=e.message;return c.a.createElement("p",{className:O.a.notfication},t)},j=a(11),x=a.n(j),S=function(e){var t=e.btnValue,a=e.onLeaveFeedback;return c.a.createElement("button",{type:"button",name:t,className:x.a.button,onClick:a},t)},C=function(e){Object(s.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={good:e.props.good,neutral:e.props.neutral,bad:e.props.bad},e.options=Object.keys(e.state),e.handleFeedbackCounter=function(t){var a=t.target.name;e.setState((function(e){return Object(l.a)({},a,e[a]+1)}))},e.countTotalFeedback=function(){return Object.values(e.state).reduce((function(e,t){return e+t}),0)},e.countPositiveFeedbackPercentage=function(t){var a=e.countTotalFeedback(),n=Math.round(100*t/a);return(0===n||isNaN(n))&&(n=0),n},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=this.countTotalFeedback(),a=this.state,n=a.good,r=a.neutral,o=a.bad,l=this.countPositiveFeedbackPercentage;return c.a.createElement(v,null,c.a.createElement(k,{title:"Please leave Feedback"},Object.keys(this.state).map((function(t){return c.a.createElement(S,{onLeaveFeedback:e.handleFeedbackCounter,btnValue:t,key:t})}))),c.a.createElement(k,{title:"Statistics"},t>0?c.a.createElement(y,{good:n,neutral:r,bad:o,total:t,positivePercentage:l(n)}):c.a.createElement(P,{message:"There are no FeedBacks =( "})))}}]),a}(n.Component);C.defaultProps={good:0,neutral:0,bad:0};var L=C;o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(L,null)),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.121f9100.chunk.js.map