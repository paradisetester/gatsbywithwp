(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{184:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"pageQuery",function(){return d});var a=n(7),r=n.n(a),i=n(0),c=n(188),o=n(192),s=n(190),l=n(189),u=n(186),m=function(t){function n(){return t.apply(this,arguments)||this}return r()(n,t),n.prototype.render=function(){var t=this.props.data;return e.createElement(s.a,null,e.createElement("div",{css:{marginBottom:Object(u.a)(1)}},e.createElement("h1",null,"Pages"),t.allWordpressPage.edges.map(function(t){var n=t.node;return e.createElement("div",{key:n.slug},e.createElement(c.a,{to:n.slug,css:{textDecoration:"none"}},e.createElement("h3",null,n.title)),e.createElement("div",{dangerouslySetInnerHTML:{__html:n.excerpt}}),e.createElement("span",null,e.createElement(o.b,{size:14,css:{position:"relative",bottom:1}})," ",n.date))})),e.createElement("hr",null),e.createElement("h1",null,"Posts"),t.allWordpressPost.edges.map(function(t){var n=t.node;return e.createElement("div",{css:{marginBottom:Object(u.a)(2)},key:n.slug},e.createElement(c.a,{to:n.slug,css:{textDecoration:"none"}},e.createElement("h3",null,n.title)),e.createElement("div",{dangerouslySetInnerHTML:{__html:n.excerpt}}),e.createElement(l.a,{node:n}))}))},n}(i.Component);t.default=m;var d="2837483614"}.call(this,n(82))},186:function(e,t,n){"use strict";n.d(t,"a",function(){return s}),n.d(t,"b",function(){return l});var a=n(194),r=n.n(a),i=n(195),c=n.n(i);c.a.headerLineHeight=1.1,c.a.overrideThemeStyles=function(){return{a:{color:"rgb(60,99,243)"},h1:{lineHeight:1}}};var o=new r.a(c.a),s=o.rhythm,l=o.scale},187:function(e,t,n){var a;e.exports=(a=n(191))&&a.default||a},188:function(e,t,n){"use strict";(function(e){var a=n(0),r=n.n(a),i=n(4),c=n.n(i),o=n(36),s=n.n(o);n.d(t,"a",function(){return s.a});n(187),r.a.createContext({});c.a.object,c.a.string.isRequired,c.a.func,c.a.func}).call(this,n(82))},189:function(e,t,n){"use strict";(function(e){n(193),n(0);var a=n(192),r=n(186);t.a=function(t){var n=t.node,i=t.className,c=void 0===i?"":i;return e.createElement("div",{css:{marginTop:Object(r.a)(-.5)},className:c},e.createElement("span",{style:{marginRight:Object(r.a)(1)}},e.createElement(a.b,{size:14,style:{position:"relative",bottom:1}})," ",n.date),n.categories&&n.categories.map(function(t){return e.createElement("span",{style:{marginRight:Object(r.a)(1)},key:t.name},e.createElement(a.a,{size:14,style:{position:"relative",bottom:1}})," ",t.name)}),n.tags&&n.tags.map(function(t){return e.createElement("span",{key:t.name},e.createElement(a.c,{size:14,style:{position:"relative",bottom:1}})," ",t.name)}))}}).call(this,n(82))},190:function(e,t,n){"use strict";(function(e){var a=n(7),r=n.n(a),i=n(0),c=n(4),o=n.n(c),s=n(188),l=n(186),u={maxWidth:700,margin:"0 auto",padding:Object(l.a)(.75)},m=function(t){function n(){return t.apply(this,arguments)||this}return r()(n,t),n.prototype.render=function(){return e.createElement("div",null,e.createElement("div",{css:{background:"rgb(207, 58, 62)",marginBottom:Object(l.a)(1),padding:Object(l.a)(1)+" 0px","@media screen and (min-width: 500px)":{padding:Object(l.a)(2)+" 0px"}}},e.createElement("div",{css:u},e.createElement("h1",{css:{margin:0,fontSize:Object(l.b)(1.5).fontSize,lineHeight:1,"@media screen and (min-width: 500px)":{fontSize:Object(l.b)(1.9).fontSize,lineHeight:1}}},e.createElement(s.a,{css:{color:"rgb(224,203,144)",":hover":{color:"rgb(224,203,144)",textDecoration:"none"}},to:"/"},"Gatsby + Wordpress!!")))),e.createElement("div",{css:u},this.props.children))},n}(i.Component);m.propTypes={children:o.a.object.isRequired},t.a=m}).call(this,n(82))},191:function(e,t,n){"use strict";n.r(t);n(58);var a=n(0),r=n.n(a),i=n(4),c=n.n(i),o=n(59),s=n(2),l=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=l}}]);
//# sourceMappingURL=component---src-pages-index-js-bc2be412860b4fe618be.js.map