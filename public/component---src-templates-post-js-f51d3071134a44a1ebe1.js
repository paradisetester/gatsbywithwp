(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{183:function(e,t,a){"use strict";a.r(t),function(e){a.d(t,"pageQuery",function(){return f});var i=a(7),r=a.n(i),s=a(0),n=a(4),o=a.n(n),l=a(189),d=(a(197),a(190)),c=a(186),u=function(t){function a(){return t.apply(this,arguments)||this}return r()(a,t),a.prototype.render=function(){var t=this.props.data.wordpressPost;return e.createElement(d.a,null,e.createElement("h1",{dangerouslySetInnerHTML:{__html:t.title}}),e.createElement(l.a,{node:t,css:{marginBottom:Object(c.a)(.5)}}),e.createElement("div",{dangerouslySetInnerHTML:{__html:t.content}}))},a}(s.Component);u.propTypes={data:o.a.object.isRequired,edges:o.a.array},t.default=u;var f="1238642366"}.call(this,a(82))},186:function(e,t,a){"use strict";a.d(t,"a",function(){return l}),a.d(t,"b",function(){return d});var i=a(194),r=a.n(i),s=a(195),n=a.n(s);n.a.headerLineHeight=1.1,n.a.overrideThemeStyles=function(){return{a:{color:"rgb(60,99,243)"},h1:{lineHeight:1}}};var o=new r.a(n.a),l=o.rhythm,d=o.scale},187:function(e,t,a){var i;e.exports=(i=a(191))&&i.default||i},188:function(e,t,a){"use strict";(function(e){var i=a(0),r=a.n(i),s=a(4),n=a.n(s),o=a(36),l=a.n(o);a.d(t,"a",function(){return l.a});a(187),r.a.createContext({});n.a.object,n.a.string.isRequired,n.a.func,n.a.func}).call(this,a(82))},189:function(e,t,a){"use strict";(function(e){a(193),a(0);var i=a(192),r=a(186);t.a=function(t){var a=t.node,s=t.className,n=void 0===s?"":s;return e.createElement("div",{css:{marginTop:Object(r.a)(-.5)},className:n},e.createElement("span",{style:{marginRight:Object(r.a)(1)}},e.createElement(i.b,{size:14,style:{position:"relative",bottom:1}})," ",a.date),a.categories&&a.categories.map(function(t){return e.createElement("span",{style:{marginRight:Object(r.a)(1)},key:t.name},e.createElement(i.a,{size:14,style:{position:"relative",bottom:1}})," ",t.name)}),a.tags&&a.tags.map(function(t){return e.createElement("span",{key:t.name},e.createElement(i.c,{size:14,style:{position:"relative",bottom:1}})," ",t.name)}))}}).call(this,a(82))},190:function(e,t,a){"use strict";(function(e){var i=a(7),r=a.n(i),s=a(0),n=a(4),o=a.n(n),l=a(188),d=a(186),c={maxWidth:700,margin:"0 auto",padding:Object(d.a)(.75)},u=function(t){function a(){return t.apply(this,arguments)||this}return r()(a,t),a.prototype.render=function(){return e.createElement("div",null,e.createElement("div",{css:{background:"rgb(207, 58, 62)",marginBottom:Object(d.a)(1),padding:Object(d.a)(1)+" 0px","@media screen and (min-width: 500px)":{padding:Object(d.a)(2)+" 0px"}}},e.createElement("div",{css:c},e.createElement("h1",{css:{margin:0,fontSize:Object(d.b)(1.5).fontSize,lineHeight:1,"@media screen and (min-width: 500px)":{fontSize:Object(d.b)(1.9).fontSize,lineHeight:1}}},e.createElement(l.a,{css:{color:"rgb(224,203,144)",":hover":{color:"rgb(224,203,144)",textDecoration:"none"}},to:"/"},"Gatsby + Wordpress!!")))),e.createElement("div",{css:c},this.props.children))},a}(s.Component);u.propTypes={children:o.a.object.isRequired},t.a=u}).call(this,a(82))},191:function(e,t,a){"use strict";a.r(t);a(58);var i=a(0),r=a.n(i),s=a(4),n=a.n(s),o=a(59),l=a(2),d=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};d.propTypes={location:n.a.shape({pathname:n.a.string.isRequired}).isRequired},t.default=d},197:function(e,t,a){"use strict";var i=a(8);t.__esModule=!0,t.default=void 0;var r,s=i(a(7)),n=i(a(37)),o=i(a(84)),l=i(a(44)),d=i(a(0)),c=i(a(4)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f=Object.create({}),p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},h=new WeakMap;var g=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){if(h.has(e.target)){var t=h.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),h.delete(e.target),t())}})},{rootMargin:"200px"})),r);return a&&(a.observe(e),h.set(e,t)),function(){a.unobserve(e),h.delete(e)}},m=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",s=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ';return"<picture>"+i+"<img "+(e.width?'width="'+e.width+'" ':"")+(e.height?'height="'+e.height+'" ':"")+a+r+t+n+s+(e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"")+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},b=d.default.forwardRef(function(e,t){var a=e.sizes,i=e.srcSet,r=e.src,s=e.style,n=e.onLoad,c=e.onError,u=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return d.default.createElement("img",(0,l.default)({sizes:a,srcSet:i,src:r},u,{onLoad:n,onError:c,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},s)}))});b.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var y=function(e){function t(t){var a;a=e.call(this,t)||this;var i=!0,r=!1,s=t.fadeIn,o=p(t);!o&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=!1,r=!0),"undefined"==typeof window&&(i=!1),t.critical&&(i=!0,r=!1);var l=!(t.critical&&!t.fadeIn);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,IOSupported:r,fadeIn:s,hasNoScript:l,seenBefore:o},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)((0,n.default)(a))),a.handleRef=a.handleRef.bind((0,n.default)((0,n.default)(a))),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&(this.cleanUpListeners=g(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,s=void 0===r?{}:r,n=e.imgStyle,o=void 0===n?{}:n,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,h=e.fluid,g=e.fixed,y=e.backgroundColor,v=e.Tag,S=e.itemProp,w=this.state.imgLoaded||!1===this.state.fadeIn,E=!0===this.state.fadeIn&&!this.state.imgCached,L=(0,l.default)({opacity:w?1:0,transition:E?"opacity 0.5s":"none"},o),R="boolean"==typeof y?"lightgray":y,O={transitionDelay:"0.5s"},z=(0,l.default)({opacity:this.state.imgLoaded?0:1},E&&O,o,f),j={title:t,alt:this.state.isVisible?"":a,style:z,className:p};if(h){var I=h;return d.default.createElement(v,{className:(i||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},s),ref:this.handleRef,key:"fluid-"+JSON.stringify(I.srcSet)},d.default.createElement(v,{style:{width:"100%",paddingBottom:100/I.aspectRatio+"%"}}),R&&d.default.createElement(v,{title:t,style:(0,l.default)({backgroundColor:R,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},E&&O)}),I.base64&&d.default.createElement(b,(0,l.default)({src:I.base64},j)),I.tracedSVG&&d.default.createElement(b,(0,l.default)({src:I.tracedSVG},j)),this.state.isVisible&&d.default.createElement("picture",null,I.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:I.srcSetWebp,sizes:I.sizes}),d.default.createElement(b,{alt:a,title:t,sizes:I.sizes,src:I.src,crossOrigin:this.props.crossOrigin,srcSet:I.srcSet,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,l.default)({alt:a,title:t},I))}}))}if(g){var T=g,x=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:T.width,height:T.height},s);return"inherit"===s.display&&delete x.display,d.default.createElement(v,{className:(i||"")+" gatsby-image-wrapper",style:x,ref:this.handleRef,key:"fixed-"+JSON.stringify(T.srcSet)},R&&d.default.createElement(v,{title:t,style:(0,l.default)({backgroundColor:R,width:T.width,opacity:this.state.imgLoaded?0:1,height:T.height},E&&O)}),T.base64&&d.default.createElement(b,(0,l.default)({src:T.base64},j)),T.tracedSVG&&d.default.createElement(b,(0,l.default)({src:T.tracedSVG},j)),this.state.isVisible&&d.default.createElement("picture",null,T.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:T.srcSetWebp,sizes:T.sizes}),d.default.createElement(b,{alt:a,title:t,width:T.width,height:T.height,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,l.default)({alt:a,title:t},T))}}))}return null},t}(d.default.Component);y.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var v=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),S=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});y.propTypes={resolutions:v,sizes:S,fixed:v,fluid:S,fadeIn:c.default.bool,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string};var w=y;t.default=w}}]);
//# sourceMappingURL=component---src-templates-post-js-f51d3071134a44a1ebe1.js.map