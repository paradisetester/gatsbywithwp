(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{181:function(e,t,a){"use strict";a.r(t),function(e){a.d(t,"pageQuery",function(){return h});var r=a(7),i=a.n(r),s=a(0),n=a(4),o=a.n(n),l=a(187),c=a(195),d=a.n(c),u=a(188),f=a(184),p=function(t){function a(){return t.apply(this,arguments)||this}return i()(a,t),a.prototype.render=function(){var t=this.props.data.wordpressPost;return e.createElement(u.a,null,e.createElement("h1",{dangerouslySetInnerHTML:{__html:t.title}}),e.createElement(l.a,{node:t,css:{marginBottom:Object(f.a)(.5)}}),e.createElement("div",{dangerouslySetInnerHTML:{__html:t.content}}),t.acf&&t.acf.page_builder_post&&t.acf.page_builder_post.map(function(t,a){if("WordPressAcf_image_gallery"===t.__typename)return e.createElement("div",{key:a+" image-gallery"},e.createElement("h2",null,"ACF Image Gallery"),t.pictures.map(function(t){var a=t.picture.localFile.childImageSharp.fluid;return e.createElement(d.a,{css:{marginBottom:Object(f.a)(1)},key:a.src,fluid:a})}));if("WordPressAcf_post_photo"===t.__typename){var r=t.photo.localFile.childImageSharp.fluid;return e.createElement("div",{key:a+"-photo"},e.createElement("h2",null,"ACF Post Photo"),e.createElement(d.a,{css:{marginBottom:Object(f.a)(1)},src:r.src,fluid:r}))}return null}))},a}(s.Component);p.propTypes={data:o.a.object.isRequired,edges:o.a.array},t.default=p;var h="1315854418"}.call(this,a(82))},184:function(e,t,a){"use strict";a.d(t,"a",function(){return l}),a.d(t,"b",function(){return c});var r=a(192),i=a.n(r),s=a(193),n=a.n(s);n.a.headerLineHeight=1.1,n.a.overrideThemeStyles=function(){return{a:{color:"rgb(60,99,243)"},h1:{lineHeight:1}}};var o=new i.a(n.a),l=o.rhythm,c=o.scale},185:function(e,t,a){var r;e.exports=(r=a(189))&&r.default||r},186:function(e,t,a){"use strict";(function(e){var r=a(0),i=a.n(r),s=a(4),n=a.n(s),o=a(36),l=a.n(o);a.d(t,"a",function(){return l.a});a(185),i.a.createContext({});n.a.object,n.a.string.isRequired,n.a.func,n.a.func}).call(this,a(82))},187:function(e,t,a){"use strict";(function(e){a(191),a(0);var r=a(190),i=a(184);t.a=function(t){var a=t.node,s=t.className,n=void 0===s?"":s;return e.createElement("div",{css:{marginTop:Object(i.a)(-.5)},className:n},e.createElement("span",{style:{marginRight:Object(i.a)(1)}},e.createElement(r.b,{size:14,style:{position:"relative",bottom:1}})," ",a.date),a.categories&&a.categories.map(function(t){return e.createElement("span",{style:{marginRight:Object(i.a)(1)},key:t.name},e.createElement(r.a,{size:14,style:{position:"relative",bottom:1}})," ",t.name)}),a.tags&&a.tags.map(function(t){return e.createElement("span",{key:t.name},e.createElement(r.c,{size:14,style:{position:"relative",bottom:1}})," ",t.name)}))}}).call(this,a(82))},188:function(e,t,a){"use strict";(function(e){var r=a(7),i=a.n(r),s=a(0),n=a(4),o=a.n(n),l=a(186),c=a(184),d={maxWidth:700,margin:"0 auto",padding:Object(c.a)(.75)},u=function(t){function a(){return t.apply(this,arguments)||this}return i()(a,t),a.prototype.render=function(){return e.createElement("div",null,e.createElement("div",{css:{background:"rgb(207, 58, 62)",marginBottom:Object(c.a)(1),padding:Object(c.a)(1)+" 0px","@media screen and (min-width: 500px)":{padding:Object(c.a)(2)+" 0px"}}},e.createElement("div",{css:d},e.createElement("h1",{css:{margin:0,fontSize:Object(c.b)(1.5).fontSize,lineHeight:1,"@media screen and (min-width: 500px)":{fontSize:Object(c.b)(1.9).fontSize,lineHeight:1}}},e.createElement(l.a,{css:{color:"rgb(224,203,144)",":hover":{color:"rgb(224,203,144)",textDecoration:"none"}},to:"/"},"Gatsby + Wordpress!!")))),e.createElement("div",{css:d},this.props.children))},a}(s.Component);u.propTypes={children:o.a.object.isRequired},t.a=u}).call(this,a(82))},189:function(e,t,a){"use strict";a.r(t);a(58);var r=a(0),i=a.n(r),s=a(4),n=a.n(s),o=a(59),l=a(2),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:n.a.shape({pathname:n.a.string.isRequired}).isRequired},t.default=c},195:function(e,t,a){"use strict";var r=a(8);t.__esModule=!0,t.default=void 0;var i,s=r(a(7)),n=r(a(37)),o=r(a(84)),l=r(a(44)),c=r(a(0)),d=r(a(4)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f=Object.create({}),p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},h=new WeakMap;var m=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){if(h.has(e.target)){var t=h.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),h.delete(e.target),t())}})},{rootMargin:"200px"})),i);return a&&(a.observe(e),h.set(e,t)),function(){a.unobserve(e),h.delete(e)}},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",s=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ';return"<picture>"+r+"<img "+(e.width?'width="'+e.width+'" ':"")+(e.height?'height="'+e.height+'" ':"")+a+i+t+n+s+(e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"")+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},b=c.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,s=e.style,n=e.onLoad,d=e.onError,u=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return c.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:i},u,{onLoad:n,onError:d,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},s)}))});b.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var y=function(e){function t(t){var a;a=e.call(this,t)||this;var r=!0,i=!1,s=t.fadeIn,o=p(t);!o&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=!1,i=!0),"undefined"==typeof window&&(r=!1),t.critical&&(r=!0,i=!1);var l=!(t.critical&&!t.fadeIn);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,IOSupported:i,fadeIn:s,hasNoScript:l,seenBefore:o},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)((0,n.default)(a))),a.handleRef=a.handleRef.bind((0,n.default)((0,n.default)(a))),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&(this.cleanUpListeners=m(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,s=void 0===i?{}:i,n=e.imgStyle,o=void 0===n?{}:n,d=e.placeholderStyle,f=void 0===d?{}:d,p=e.placeholderClassName,h=e.fluid,m=e.fixed,y=e.backgroundColor,v=e.Tag,S=e.itemProp,E=this.state.imgLoaded||!1===this.state.fadeIn,w=!0===this.state.fadeIn&&!this.state.imgCached,L=(0,l.default)({opacity:E?1:0,transition:w?"opacity 0.5s":"none"},o),R="boolean"==typeof y?"lightgray":y,O={transitionDelay:"0.5s"},j=(0,l.default)({opacity:this.state.imgLoaded?0:1},w&&O,o,f),I={title:t,alt:this.state.isVisible?"":a,style:j,className:p};if(h){var z=h;return c.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},s),ref:this.handleRef,key:"fluid-"+JSON.stringify(z.srcSet)},c.default.createElement(v,{style:{width:"100%",paddingBottom:100/z.aspectRatio+"%"}}),R&&c.default.createElement(v,{title:t,style:(0,l.default)({backgroundColor:R,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},w&&O)}),z.base64&&c.default.createElement(b,(0,l.default)({src:z.base64},I)),z.tracedSVG&&c.default.createElement(b,(0,l.default)({src:z.tracedSVG},I)),this.state.isVisible&&c.default.createElement("picture",null,z.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:z.srcSetWebp,sizes:z.sizes}),c.default.createElement(b,{alt:a,title:t,sizes:z.sizes,src:z.src,crossOrigin:this.props.crossOrigin,srcSet:z.srcSet,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t},z))}}))}if(m){var _=m,C=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:_.width,height:_.height},s);return"inherit"===s.display&&delete C.display,c.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:C,ref:this.handleRef,key:"fixed-"+JSON.stringify(_.srcSet)},R&&c.default.createElement(v,{title:t,style:(0,l.default)({backgroundColor:R,width:_.width,opacity:this.state.imgLoaded?0:1,height:_.height},w&&O)}),_.base64&&c.default.createElement(b,(0,l.default)({src:_.base64},I)),_.tracedSVG&&c.default.createElement(b,(0,l.default)({src:_.tracedSVG},I)),this.state.isVisible&&c.default.createElement("picture",null,_.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:_.srcSetWebp,sizes:_.sizes}),c.default.createElement(b,{alt:a,title:t,width:_.width,height:_.height,sizes:_.sizes,src:_.src,crossOrigin:this.props.crossOrigin,srcSet:_.srcSet,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t},_))}}))}return null},t}(c.default.Component);y.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var v=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),S=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});y.propTypes={resolutions:v,sizes:S,fixed:v,fluid:S,fadeIn:d.default.bool,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string};var E=y;t.default=E}}]);
//# sourceMappingURL=component---src-templates-post-js-a60aea3fcbcee86506a0.js.map