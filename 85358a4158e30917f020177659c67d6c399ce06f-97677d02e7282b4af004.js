(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"2rMq":function(e,t,n){var r;!function(){"use strict";var a=!("undefined"==typeof window||!window.document||!window.document.createElement),o={canUseDOM:a,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:a&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:a&&!!window.screen};void 0===(r=function(){return o}.call(t,n,t,e))||(e.exports=r)}()},"7oih":function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("Wbzz"),i=n("zwU1"),c=n.n(i),u=function(e){var t=e.siteTitle,n=Object(r.useState)(!1),i=n[0],u=n[1];return a.a.createElement("nav",{className:"navbar is-dark",role:"navigation","aria-label":"main navigation"},a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"navbar-brand"},a.a.createElement(o.Link,{className:"navbar-item",to:"/"},a.a.createElement("img",{src:c.a,alt:"logo",height:"28",style:{marginRight:16}}),a.a.createElement("b",null,t)),a.a.createElement("a",{href:"/",role:"button",className:"navbar-burger "+(i?"is-active":""),"aria-label":"menu","aria-expanded":"false",onClick:function(e){e.preventDefault(),u(!i)}},a.a.createElement("span",{"aria-hidden":"true"}),a.a.createElement("span",{"aria-hidden":"true"}),a.a.createElement("span",{"aria-hidden":"true"}))),a.a.createElement("div",{className:"navbar-menu is-dark "+(i?"is-active":"")},a.a.createElement("div",{className:"navbar-end"},a.a.createElement("a",{href:"/resume.pdf",className:"navbar-item"},"Resume"),a.a.createElement(o.Link,{to:"/blogs",className:"navbar-item"},"Blogs")))))};u.defaultProps={siteTitle:""};var s=u,l=function(){return a.a.createElement("footer",{className:"footer"},a.a.createElement("div",{className:"content has-text-centered"},a.a.createElement("p",null,"Hans's website ",(new Date).getFullYear()),a.a.createElement("p",null,"Built with love with `bulma` and `gatsby.js`")))};t.a=function(e){var t=e.children,n=Object(o.useStaticQuery)("3649515864");return a.a.createElement(a.a.Fragment,null,a.a.createElement(s,{siteTitle:n.site.siteMetadata.title}),a.a.createElement("main",null,t),a.a.createElement(l,null))}},"8+s/":function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var a=n("q1tI"),o=r(a),i=r(n("2rMq")),c=r(n("Gytx"));function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l=[],T=void 0;function f(){T=e(l.map((function(e){return e.props}))),A.canUseDOM?t(T):n&&(T=n(T))}var A=function(e){function t(){return u(this,t),s(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.peek=function(){return T},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=T;return T=void 0,l=[],e},t.prototype.shouldComponentUpdate=function(e){return!c(e,this.props)},t.prototype.componentWillMount=function(){l.push(this),f()},t.prototype.componentDidUpdate=function(){f()},t.prototype.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),f()},t.prototype.render=function(){return o.createElement(r,this.props)},t}(a.Component);return A.displayName="SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")",A.canUseDOM=i.canUseDOM,A}}},EYWl:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("TJpk"),i=n.n(o),c=n("Wbzz");function u(e){var t=e.description,n=e.lang,r=e.meta,o=e.title,u=Object(c.useStaticQuery)("63159454").site,s=t||u.siteMetadata.description;return a.a.createElement(i.a,{htmlAttributes:{lang:n},title:o,titleTemplate:"%s | "+u.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:o},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:u.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:s}].concat(r)})}u.defaultProps={lang:"en",meta:[],description:""},t.a=u},Gytx:function(e,t){e.exports=function(e,t,n,r){var a=n?n.call(r,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var o=Object.keys(e),i=Object.keys(t);if(o.length!==i.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(t),u=0;u<o.length;u++){var s=o[u];if(!c(s))return!1;var l=e[s],T=t[s];if(!1===(a=n?n.call(r,l,T,s):void 0)||void 0===a&&l!==T)return!1}return!0}},TJpk:function(e,t,n){t.__esModule=!0,t.Helmet=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=T(n("q1tI")),i=T(n("17x9")),c=T(n("8+s/")),u=T(n("bmMU")),s=n("v1p5"),l=n("hFT/");function T(e){return e&&e.__esModule?e:{default:e}}function f(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function A(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function E(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var p,d,h,m=(0,c.default)(s.reducePropsToState,s.handleClientStateChange,s.mapStateOnServer)((function(){return null})),y=(p=m,h=d=function(e){function t(){return A(this,t),E(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,u.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case l.TAG_NAMES.SCRIPT:case l.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case l.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,a=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return r({},a,((t={})[n.type]=[].concat(a[n.type]||[],[r({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,a=e.child,o=e.newProps,i=e.newChildProps,c=e.nestedChildren;switch(a.type){case l.TAG_NAMES.TITLE:return r({},o,((t={})[a.type]=c,t.titleAttributes=r({},i),t));case l.TAG_NAMES.BODY:return r({},o,{bodyAttributes:r({},i)});case l.TAG_NAMES.HTML:return r({},o,{htmlAttributes:r({},i)})}return r({},o,((n={})[a.type]=r({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=r({},t);return Object.keys(e).forEach((function(t){var a;n=r({},n,((a={})[t]=e[t],a))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return o.default.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=f(a,["children"]),c=(0,s.convertReactPropstoHtmlAttributes)(i);switch(n.warnOnInvalidChildren(e,o),e.type){case l.TAG_NAMES.LINK:case l.TAG_NAMES.META:case l.TAG_NAMES.NOSCRIPT:case l.TAG_NAMES.SCRIPT:case l.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:c,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:c,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=f(e,["children"]),a=r({},n);return t&&(a=this.mapChildrenToProps(t,a)),o.default.createElement(p,a)},a(t,null,[{key:"canUseDOM",set:function(e){p.canUseDOM=e}}]),t}(o.default.Component),d.propTypes={base:i.default.object,bodyAttributes:i.default.object,children:i.default.oneOfType([i.default.arrayOf(i.default.node),i.default.node]),defaultTitle:i.default.string,defer:i.default.bool,encodeSpecialCharacters:i.default.bool,htmlAttributes:i.default.object,link:i.default.arrayOf(i.default.object),meta:i.default.arrayOf(i.default.object),noscript:i.default.arrayOf(i.default.object),onChangeClientState:i.default.func,script:i.default.arrayOf(i.default.object),style:i.default.arrayOf(i.default.object),title:i.default.string,titleAttributes:i.default.object,titleTemplate:i.default.string},d.defaultProps={defer:!0,encodeSpecialCharacters:!0},d.peek=p.peek,d.rewind=function(){var e=p.rewind();return e||(e=(0,s.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},h);y.renderStatic=y.rewind,t.Helmet=y,t.default=y},bmMU:function(e,t,n){"use strict";var r=Array.isArray,a=Object.keys,o=Object.prototype.hasOwnProperty,i="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var c,u,s,l=r(t),T=r(n);if(l&&T){if((u=t.length)!=n.length)return!1;for(c=u;0!=c--;)if(!e(t[c],n[c]))return!1;return!0}if(l!=T)return!1;var f=t instanceof Date,A=n instanceof Date;if(f!=A)return!1;if(f&&A)return t.getTime()==n.getTime();var E=t instanceof RegExp,p=n instanceof RegExp;if(E!=p)return!1;if(E&&p)return t.toString()==n.toString();var d=a(t);if((u=d.length)!==a(n).length)return!1;for(c=u;0!=c--;)if(!o.call(n,d[c]))return!1;if(i&&t instanceof Element&&n instanceof Element)return t===n;for(c=u;0!=c--;)if(!("_owner"===(s=d[c])&&t.$$typeof||e(t[s],n[s])))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},"hFT/":function(e,t){t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var n=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},r=(t.VALID_TAG_NAMES=Object.keys(n).map((function(e){return n[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(r).reduce((function(e,t){return e[r[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},v1p5:function(e,t,n){(function(e){t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=u(n("q1tI")),i=u(n("6qGY")),c=n("hFT/");function u(e){return e&&e.__esModule?e:{default:e}}var s,l=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},T=function(e){var t=d(e,c.TAG_NAMES.TITLE),n=d(e,c.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,(function(){return t}));var r=d(e,c.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},f=function(e){return d(e,c.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},A=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return a({},e,t)}),{})},E=function(e,t){return t.filter((function(e){return void 0!==e[c.TAG_NAMES.BASE]})).map((function(e){return e[c.TAG_NAMES.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},p=function(e,t,n){var a={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&b("Helmet: "+e+' should be of type "Array". Instead found type "'+r(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var r={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),i=0;i<o.length;i++){var u=o[i],s=u.toLowerCase();-1===t.indexOf(s)||n===c.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||s===c.TAG_PROPERTIES.REL&&"stylesheet"===e[s].toLowerCase()||(n=s),-1===t.indexOf(u)||u!==c.TAG_PROPERTIES.INNER_HTML&&u!==c.TAG_PROPERTIES.CSS_TEXT&&u!==c.TAG_PROPERTIES.ITEM_PROP||(n=u)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return a[n]||(a[n]={}),r[n]||(r[n]={}),!a[n][l]&&(r[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(r),u=0;u<o.length;u++){var s=o[u],l=(0,i.default)({},a[s],r[s]);a[s]=l}return e}),[]).reverse()},d=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},h=(s=Date.now(),function(e){var t=Date.now();t-s>16?(s=t,e(t)):setTimeout((function(){h(e)}),0)}),m=function(e){return clearTimeout(e)},y="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||h:e.requestAnimationFrame||h,S="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||m:e.cancelAnimationFrame||m,b=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},v=null,R=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,u=e.noscriptTags,s=e.onChangeClientState,l=e.scriptTags,T=e.styleTags,f=e.title,A=e.titleAttributes;M(c.TAG_NAMES.BODY,r),M(c.TAG_NAMES.HTML,a),g(f,A);var E={baseTag:w(c.TAG_NAMES.BASE,n),linkTags:w(c.TAG_NAMES.LINK,o),metaTags:w(c.TAG_NAMES.META,i),noscriptTags:w(c.TAG_NAMES.NOSCRIPT,u),scriptTags:w(c.TAG_NAMES.SCRIPT,l),styleTags:w(c.TAG_NAMES.STYLE,T)},p={},d={};Object.keys(E).forEach((function(e){var t=E[e],n=t.newTags,r=t.oldTags;n.length&&(p[e]=n),r.length&&(d[e]=E[e].oldTags)})),t&&t(),s(e,p,d)},P=function(e){return Array.isArray(e)?e.join(""):e},g=function(e,t){void 0!==e&&document.title!==e&&(document.title=P(e)),M(c.TAG_NAMES.TITLE,t)},M=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(c.HELMET_ATTRIBUTE),a=r?r.split(","):[],o=[].concat(a),i=Object.keys(t),u=0;u<i.length;u++){var s=i[u],l=t[s]||"";n.getAttribute(s)!==l&&n.setAttribute(s,l),-1===a.indexOf(s)&&a.push(s);var T=o.indexOf(s);-1!==T&&o.splice(T,1)}for(var f=o.length-1;f>=0;f--)n.removeAttribute(o[f]);a.length===o.length?n.removeAttribute(c.HELMET_ATTRIBUTE):n.getAttribute(c.HELMET_ATTRIBUTE)!==i.join(",")&&n.setAttribute(c.HELMET_ATTRIBUTE,i.join(","))}},w=function(e,t){var n=document.head||document.querySelector(c.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+c.HELMET_ATTRIBUTE+"]"),a=Array.prototype.slice.call(r),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===c.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===c.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var u=void 0===t[r]?"":t[r];n.setAttribute(r,u)}n.setAttribute(c.HELMET_ATTRIBUTE,"true"),a.some((function(e,t){return i=t,n.isEqualNode(e)}))?a.splice(i,1):o.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:o}},C=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},O=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[c.REACT_TAG_MAP[n]||n]=e[n],t}),t)},_=function(e,t,n){switch(e){case c.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[c.HELMET_ATTRIBUTE]=!0,a=O(n,r),[o.default.createElement(c.TAG_NAMES.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=C(n),o=P(t);return a?"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+a+">"+l(o,r)+"</"+e+">":"<"+e+" "+c.HELMET_ATTRIBUTE+'="true">'+l(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case c.ATTRIBUTE_NAMES.BODY:case c.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return O(t)},toString:function(){return C(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})[c.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach((function(e){var n=c.REACT_TAG_MAP[e]||e;if(n===c.TAG_PROPERTIES.INNER_HTML||n===c.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),o.default.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===c.TAG_PROPERTIES.INNER_HTML||e===c.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+l(r[t],n)+'"';return e?e+" "+a:a}),""),o=r.innerHTML||r.cssText||"",i=-1===c.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[c.HTML_TAG_MAP[n]||n]=e[n],t}),t)},t.handleClientStateChange=function(e){v&&S(v),e.defer?v=y((function(){R(e,(function(){v=null}))})):(R(e),v=null)},t.mapStateOnServer=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,u=e.noscriptTags,s=e.scriptTags,l=e.styleTags,T=e.title,f=void 0===T?"":T,A=e.titleAttributes;return{base:_(c.TAG_NAMES.BASE,t,r),bodyAttributes:_(c.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:_(c.ATTRIBUTE_NAMES.HTML,a,r),link:_(c.TAG_NAMES.LINK,o,r),meta:_(c.TAG_NAMES.META,i,r),noscript:_(c.TAG_NAMES.NOSCRIPT,u,r),script:_(c.TAG_NAMES.SCRIPT,s,r),style:_(c.TAG_NAMES.STYLE,l,r),title:_(c.TAG_NAMES.TITLE,{title:f,titleAttributes:A},r)}},t.reducePropsToState=function(e){return{baseTag:E([c.TAG_PROPERTIES.HREF],e),bodyAttributes:A(c.ATTRIBUTE_NAMES.BODY,e),defer:d(e,c.HELMET_PROPS.DEFER),encode:d(e,c.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:A(c.ATTRIBUTE_NAMES.HTML,e),linkTags:p(c.TAG_NAMES.LINK,[c.TAG_PROPERTIES.REL,c.TAG_PROPERTIES.HREF],e),metaTags:p(c.TAG_NAMES.META,[c.TAG_PROPERTIES.NAME,c.TAG_PROPERTIES.CHARSET,c.TAG_PROPERTIES.HTTPEQUIV,c.TAG_PROPERTIES.PROPERTY,c.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:p(c.TAG_NAMES.NOSCRIPT,[c.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:f(e),scriptTags:p(c.TAG_NAMES.SCRIPT,[c.TAG_PROPERTIES.SRC,c.TAG_PROPERTIES.INNER_HTML],e),styleTags:p(c.TAG_NAMES.STYLE,[c.TAG_PROPERTIES.CSS_TEXT],e),title:T(e),titleAttributes:A(c.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=y,t.warn=b}).call(this,n("yLpj"))},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n},zwU1:function(e,t){e.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=85358a4158e30917f020177659c67d6c399ce06f-97677d02e7282b4af004.js.map