(this["webpackJsonpfurnitures-admin"]=this["webpackJsonpfurnitures-admin"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),u=n(6),l=n.n(u),i=(n(13),n(1)),c=n(2),o=n(4),m=n(3),s=function(){return a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"\u5099\u54c1\u540d"),a.a.createElement("th",null,"\u500b\u6570"),a.a.createElement("th",null,"\u500b\u6570\u3092\u5909\u66f4"),a.a.createElement("th",null,"\u5099\u54c1\u4e00\u89a7\u304b\u3089\u524a\u9664")))},f=function(e){var t=e.furnitureData.map((function(t,n){return a.a.createElement("tr",{key:n},a.a.createElement("td",null,t.name),a.a.createElement("td",null,t.numberOf),a.a.createElement("td",null,a.a.createElement("button",{onClick:function(){return e.changeFurniture(n)}},"\u5909\u66f4")),a.a.createElement("td",null,a.a.createElement("button",{onClick:function(){return e.removeFurniture(n)}},"\u524a\u9664")))}));return a.a.createElement("tbody",null,t)},h=function(e){Object(o.a)(n,e);var t=Object(m.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h2",null,"\u5099\u54c1\u4e00\u89a7"),a.a.createElement("table",null,a.a.createElement(s,null),a.a.createElement(f,{furnitureData:this.props.furnitureData,changeFurniture:this.props.changeFurniture,removeFurniture:this.props.removeFurniture})))}}]),n}(r.Component),b=n(7),p=function(e){Object(o.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),u=0;u<r;u++)a[u]=arguments[u];return(e=t.call.apply(t,[this].concat(a))).initialState={name:"",numberOf:0},e.state=e.initialState,e.handleChange=function(t){var n=t.target,r=n.name,a=n.value;e.setState(Object(b.a)({},r,a))},e.submitForm=function(){e.props.addFurniture(e.state),e.setState(e.initialState)},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.numberOf;return a.a.createElement(a.a.Fragment,null,a.a.createElement("h2",null,"\u5099\u54c1\u3092\u8ffd\u52a0"),a.a.createElement("form",null,a.a.createElement("label",{htmlFor:"name"},"\u5099\u54c1\u540d"),a.a.createElement("input",{type:"text",name:"name",id:"name",value:t,onChange:this.handleChange}),a.a.createElement("label",{htmlFor:"job"},"\u500b\u6570"),a.a.createElement("input",{type:"number",name:"numberOf",id:"numberOf",value:n,onChange:this.handleChange}),a.a.createElement("input",{type:"button",value:"\u8ffd\u52a0",onClick:this.submitForm})))}}]),n}(r.Component),E=function(e){Object(o.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),u=0;u<r;u++)a[u]=arguments[u];return(e=t.call.apply(t,[this].concat(a))).state={furnitures:[{name:"LAN\u30b1\u30fc\u30d6\u30eb",numberOf:30},{name:"\u30e2\u30cb\u30bf",numberOf:10},{name:"HDMI\u30b1\u30fc\u30d6\u30eb",numberOf:15},{name:"\u30ce\u30fc\u30c8PC",numberOf:5}],changeFurnitureFlag:!1},e.changeFurniture=function(t){alert(t),e.setState({changeFurnitureFlag:!0})},e.removeFurniture=function(t){var n=e.state.furnitures.filter((function(e,n){return n!==t}));e.setState({furnitures:n})},e.changeFurniture=function(t){var n=e.state.furnitures.slice(),r=n[t].numberOf;r=parseInt(prompt("\u500b\u6570\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002",n[t].numberOf)),isNaN(r)&&(r=n[t].numberOf,alert("\u6570\u5b57\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\uff01")),n[t].numberOf=r,e.setState({furnitures:n})},e.addFurniture=function(t){var n=e.state.furnitures.slice();n.push(t),e.setState({furnitures:n})},e}return Object(c.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{className:"container"},a.a.createElement("h1",null,"\u5099\u54c1\u7ba1\u7406Web\u30a2\u30d7\u30ea"),a.a.createElement("p",null,"\u5099\u54c1\u6570\u3092\u7ba1\u7406\u3059\u308bWeb\u30a2\u30d7\u30ea\u3067\u3059\u3002"),a.a.createElement(h,{furnitureData:this.state.furnitures,changeFurniture:this.changeFurniture,removeFurniture:this.removeFurniture}),a.a.createElement(p,{addFurniture:this.addFurniture}))}}]),n}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.f368d8a7.chunk.js.map