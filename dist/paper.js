!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("React"),require("ReactDOM")):"function"==typeof define&&define.amd?define(["React","ReactDOM"],e):"object"==typeof exports?exports.paper=e(require("React"),require("ReactDOM")):t.paper=e(t.React,t.ReactDOM)}(this,function(t,e){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="./",e(e.s=1)}([function(e,n){e.exports=t},function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function h(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function f(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function p(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function d(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function y(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function v(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function m(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function b(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function g(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function w(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function x(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}function O(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function k(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function j(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function T(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function S(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function M(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function E(t){var e=localStorage.getItem(t);if(e)try{return JSON.parse(e)}catch(t){return{}}return{}}function $(t){var e=t?"app-paper:"+t:null,n=e?E(e):{},r=null,o=function(t){e&&(n=At({},n,t),r&&clearTimeout(r),r=setTimeout(function(){r=null,localStorage.setItem(e,JSON.stringify(n))},500))};return{get:function(t){return t?n[t]:n},set:o}}function P(t){var e=t.id,n=t.views,r=void 0===n?[]:n,o=t.onTap,i=t.onChange,a=t.mark,u=function(t,e){if(o){var n=e.target,r=e.target.tagName,i="",a="";if("evenodd"===n.getAttribute("fill-rule"))return;"circle"===r?(a="point",i=n.getAttribute("id")):"path"!==r&&"rect"!==r||(a="area",i=n.getAttribute("id")),o({id:i,type:a,x:t[0].x,y:t[0].y})}},s=$(e);return Rt(ot,{onChange:i,store:s},void 0,r.map(function(t,e){return A.a.createElement(_t,Ct({key:e,onTap:u,mark:a,store:s},t))}))}Object.defineProperty(e,"__esModule",{value:!0});var _=n(0),A=n.n(_),C=n(2),R=n.n(C),z=("function"==typeof Symbol&&Symbol.iterator,Object.keys,Object.assign),V=(function(t){}(0),function(){var t=["t","webkitT","MozT","msT","OT"],e=document.createElement("div").style,n=!0,r=!1,o=void 0;try{for(var i,a=t[Symbol.iterator]();!(n=(i=a.next()).done);n=!0){var u=i.value;if(u+"ransform"in e)return u.slice(0,-1)}}catch(t){r=!0,o=t}finally{try{!n&&a.return&&a.return()}finally{if(r)throw o}}return""}()),I=function(t){return V?V+t.charAt(0).toUpperCase()+t.substr(1):t},D=I("perspective")in document.createElement("div").style,H=window.requestAnimationFrame||window.windowebkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return setTimeout(t,1e3/60)},q=function(t){return function(e){t||H(function(){return t&&t(),t=null}),t=e}},N=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t;return{position:"absolute",top:t,right:e,bottom:arguments.length>2&&void 0!==arguments[2]?arguments[2]:t,left:arguments.length>3&&void 0!==arguments[3]?arguments[3]:e}},B=function(t){return function(e){return r({},t,e)}}(I("transform")),F=(function(t){}(I("transition")),function(t,e,n){return B("translate("+(t||0)+", "+(e||0)+")"+(D?" translateZ("+(n||0)+")":""))}),L=function(t,e){var n=!1,r=+new Date,o=function o(){if(n)return!1;var i=Math.min(1,(new Date-r)/t);!1!==e(i)&&i<1&&H(o)};return t>0&&H(o),{stop:function(){return n=!0}}},W=function(t){switch(t){case"linear":return function(t){return t};case"ease-in-out":return function(t){return t-Math.sin(2*Math.PI*t)/(2*Math.PI)};case"ease-in":return function(t){return Math.pow(t,3)};case"ease-out":return function(t){return Math.pow(t-1,3)+1};case"back-in":return function(t){var e=1.70158;return t*t*((e+1)*t-e)};case"back-out":return function(t){t-=1;var e=1.70158;return t*t*((e+1)*t+e)+1};case"elastic":return function(t){return t<.4?Math.pow(2.5*t,3):Math.sin(5*t*Math.PI)*Math.cos(.5*t*Math.PI)/3+1};case"bounce":return function(t){var e=7.5625,n=2.75;return t<1/n?e*t*t:t<2/n?(t-=1.5/n,e*t*t+.75):t<2.5/n?(t-=2.25/n,e*t*t+.9375):(t-=2.625/n,e*t*t+.984375)};default:return function(t){return t}}},Z=function(t){return function(e){var n=new Image;n.onload=function(){return t(null,n)},n.onerror=function(){return t(new Error("加载图片失败，请稍后再试。"))},n.src=e}},X=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),Y=function(){function t(e){o(this,t),this.disabled=!1,this.status="pending",this.updater=e,this.touch={}}return X(t,[{key:"onTouchStart",value:function(t){var e=this;"pending"===this.status&&this.invoke(t,function(t){e.status="touching",e.touch.sx=t.pageX,e.touch.sy=t.pageY,e.touch.st=+new Date,e.emit("moveReady")})}},{key:"onTouchMove",value:function(t){var e=this;if("pending"===this.status)return this.onTouchStart(t);"touching"===this.status&&this.invoke(t,function(t){var n=e.touch,r=n.x,o=n.y,i=n.t;if(e.touch.x=t.pageX,e.touch.y=t.pageY,e.touch.t=+new Date,!e.touch.direction)return e.touch.dx=e.touch.x-e.touch.sx,e.touch.dy=e.touch.y-e.touch.sy,e.touch.dt=e.touch.t-e.touch.st,e.touch.direction=Math.abs(e.touch.dx)>Math.abs(e.touch.dy)?"x":"y",e.emit("moveStart");e.touch.dx=r?e.touch.x-r:0,e.touch.dy=o?e.touch.y-o:0,e.touch.dt=i?e.touch.t-i:0,e.emit("moving")})}},{key:"onTouchEnd",value:function(t){var e=this;"touching"===this.status&&this.invoke(t,function(){e.touch.t||(e.touch.t=+new Date,e.touch.dt=e.touch.t-e.touch.st),e.emit("moveEnd")}),this.touch={},this.status="pending"}},{key:"invoke",value:function(t,e){this.disabled||e(t.touches[0])}},{key:"emit",value:function(t){this.updater&&this.updater(t,this.touch)}}]),t}(),J=Y,U=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),G=function(){function t(e){a(this,t),this.$$model={target:null,overlap:0,max:0,updater:function(t,e){return t&&z(t.style,F(e+"%"))}},this.$$updater=q(),this.updateView(e)}return U(t,[{key:"updateView",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.value,n=i(t,["value"]);z(this.$$model,n),this.$$model.target&&!this.$$model.views&&(this.$$model.views=this.$$model.target.childNodes||[]),this.$$model.max=this.$$model.views?100*((this.$$model.views.length||1)-1):0,this.$$model.target&&this.refresh(e,!0)}},{key:"refresh",value:function(t,e){var n=this.$$model,r=n.target,o=n.max,i=n.value;r&&(t=Math.max(-30,Math.min(o+30,t||i||0)),(e||t!==i)&&this.$$updater(this.refreshView.bind(this,t)))}},{key:"refreshView",value:function(t){var e=this.$$model,n=e.target,r=e.views,o=e.updater,i=e.overlap;if(o(n,-(this.$$model.value=t)),r&&r.length){var a=parseInt(t/100),u=100*a+i*(t%100)/100;[].forEach.call(r,function(t,e){if(e<a)return o(t,u+100*(e-a));o(t,e===a?u:100*e)})}}},{key:"scrollTo",value:function(t){this.refresh(t)}},{key:"scrollBy",value:function(t){this.refresh(this.$$model.value+t)}},{key:"animateTo",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"ease-in-out",o=this.$$model,i=o.target,a=o.value,u=o.max,s=W(r),c=0;if(i)return t=Math.max(0,Math.min(u,t)),(c=t-a)&&L(n,function(t){e.refreshView(a+c*s(t))})}},{key:"getPosition",value:function(){return this.$$model.value}},{key:"getSize",value:function(){return this.$$model.views.length}},{key:"destroy",value:function(){this.value=null,this.views=null}}]),t}(),K=G,Q=function(){var t="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(e,n,r,o){var i=e&&e.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var u in i)void 0===n[u]&&(n[u]=i[u]);else n||(n=i||{});if(1===a)n.children=o;else if(a>1){for(var s=Array(a),c=0;c<a;c++)s[c]=arguments[c+3];n.children=s}return{$$typeof:t,type:e,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),tt=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),et=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},nt=et({},N(),{overflow:"hidden"}),rt=function(t){function e(t){var n;u(this,e);for(var r=arguments.length,o=Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];var a=s(this,(n=e.__proto__||Object.getPrototypeOf(e)).call.apply(n,[this,t].concat(o)));return a.curr=0,a.target=null,a.gesture=[],a.swiper=new K,a.handleMount=a.handleMount.bind(a),a.handleEvent=a.handleEvent.bind(a),a.handleTouchMove=a.handleTouchMove.bind(a),a.touchHandler={onTouchStart:a.handleEvent("onTouchStart"),onTouchMove:a.handleEvent("onTouchMove"),onTouchEnd:a.handleEvent("onTouchEnd"),onTouchCancel:a.handleEvent("onTouchEnd")},a.gesture.push(new J(a.handleTouchMove)),a}return c(e,t),tt(e,[{key:"render",value:function(){var t=this.props,e=t.style,n=t.className,r=t.children,o=void 0;return o=et({className:n,style:et({},nt,{overflow:"visible"},e),ref:this.handleMount},this.touchHandler),A.a.createElement("div",o,_.Children.map(r,function(t,e){return Q("div",{style:nt},e,t)}))}},{key:"componentDidUpdate",value:function(){var t=this;this.swiper.updateView({value:100*(this.props.store.get("curr")||0)}),this.props.onChange&&setTimeout(function(){var e=t.swiper.getPosition(),n=parseInt(e/100);t.props.onChange(t.curr=n)},100)}},{key:"handleMount",value:function(t){t?this.initialize(t):this.destroy()}},{key:"initialize",value:function(t){var e=this;this.target=t,this.width=t.clientWidth,this.height=t.clientHeight,this.swiper.updateView({target:t,views:t.childNodes,overlap:this.props.overlap||0,value:100*(this.props.store.get("curr")||0)}),this.props.onChange&&setTimeout(function(){var t=e.swiper.getPosition(),n=parseInt(t/100);e.props.onChange(e.curr=n)},100)}},{key:"handleEvent",value:function(t){var e=this;return function(n){return e.gesture.forEach(function(e){return t in e&&e[t](n)})}}},{key:"handleTouchMove",value:function(t,e){if(this.animater&&this.animater.stop(),!this.width||"x"!==e.direction)return!1;if("moving"===t)return this.swiper.scrollBy(-100*e.dx/this.width);if("moveEnd"===t){var n=this.swiper.getPosition(),r=Math.round(n/100);e.dx&&Math.abs(e.x-e.sx)<.5*this.width&&Math.abs(e.dx/e.dt)>.3&&(r+=e.dx>0?-1:1),r=Math.max(0,Math.min(r,this.swiper.getSize()-1)),this.props.onChange&&this.curr!==r&&this.props.onChange(this.curr=r),this.props.store.set({curr:r}),this.swiper.animateTo(100*r,250,"ease-out")}}},{key:"destroy",value:function(){this.target=null,this.width=null,this.height=null,this.swiper.destroy()}}]),e}(_.Component),ot=rt,it="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},at=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),ut=function(){function t(){h(this,t),this.events={}}return at(t,[{key:"on",value:function(t,e){var n=this;return"string"!=typeof t?("object"===(void 0===t?"undefined":it(t))&&Object.keys(t).forEach(function(e){return n.on(e,t[e])}),this):"function"!=typeof e?this:(t in this.events?this.events[t].push(e):this.events[t]=[e],this)}},{key:"off",value:function(t,e){return void 0===t?(this.events={},this):"string"!=typeof t?this:void 0===e?(delete this.events[t],this):("function"==typeof e&&t in this.events&&(this.events[t]=this.events[t].filter(function(t){return t!==e})),this)}},{key:"emit",value:function(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return"string"!=typeof t?this:(t in this.events&&this.events[t].length&&this.events[t].forEach(function(t){return t.apply(void 0,n)}),"$$emit"in this.events&&this.events.$$emit.length&&this.events.$$emit.forEach(function(e){return e.apply(void 0,[t].concat(n))}),this)}}]),t}(),st=ut,ct=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ht=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),lt=function(t){function e(t){l(this,e);var n=f(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return n.target=null,n.view={},n.size={},n.matrix=ct({x:0,y:0,scale:1},t),n.animater=null,n.$$updater=q(),n.updateView=n.updateView.bind(n),n}return p(e,t),ht(e,[{key:"update",value:function(t,e){var n=e.width,r=e.height,o=e.matrix,i=void 0===o?null:o;if(this.target=t,t&&1===t.nodeType){var a=t.parentNode||{};this.size.width=n||t.clientWidth,this.size.height=r||t.clientHeight,this.view.width=a.clientWidth||this.size.width,this.view.height=a.clientHeight||this.size.height,this.matrix=ct({},this.matrix,i,{minScale:this.view.width/this.size.width,maxScale:Math.max(this.size.width/this.view.width,3)}),this.$$updater(this.updateView)}}},{key:"updateView",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.matrix,e=t.x,n=t.y,r=t.scale;this.target&&(z(this.target.style,ct({display:"block"},B("translate("+e+"px, "+n+"px)"+(D?" translateZ(0)":"")+" scale("+r*this.matrix.minScale+")"))),this.emit("update",this.matrix))}},{key:"translateTo",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.matrix.scale;t===this.matrix.x&&e===this.matrix.y&&n===this.matrix.scale||(this.matrix.x=t,this.matrix.y=e,this.matrix.scale=n,this.$$updater(this.updateView))}},{key:"translateBy",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;this.translateTo(this.matrix.x*n+t,this.matrix.y*n+e,this.matrix.scale*n)}},{key:"overflow",value:function(t){var e=this.matrix,n=e.x,r=e.scale,o=Math.min(0,this.view.width-r*this.view.width),i=n+t;return i>0||i<o}},{key:"reset",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.cx,n=void 0===e?0:e,r=t.cy,o=void 0===r?0:r,i=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:250,u=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"ease-out",s=this.matrix,c=s.x,h=s.y,l=s.scale,f=s.minScale,p=s.maxScale,d=Math.max(1,Math.min(p,l)),y=d*this.view.width,v=d*f*this.size.height,m=Math.min(0,Math.max(this.view.width-y,(c-n)*d/l+n))-c,b=Math.min(0,Math.max(this.view.height-v,(h-o)*d/l+o))-h,g=d-l,w=W(u);(m||b||g)&&(this.animater=L(a,function(t){t=w(t),i.matrix.x=c+m*t,i.matrix.y=h+b*t,i.matrix.scale=l+g*t,i.updateView()}))}},{key:"coordinate",value:function(t,e){if(this.target){var n=this.target.parentNode.getBoundingClientRect(),r=this.matrix,o=r.scale*r.minScale;t=(t-n.left-r.x)/o,e=(e-n.top-r.y)/o}return{x:t,y:e}}},{key:"stopAnimation",value:function(){this.animater&&this.animater.stop()}}]),e}(st),ft=lt,pt=function(){function t(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{!r&&u.return&&u.return()}finally{if(o)throw i}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),dt=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),yt=function(t){function e(){d(this,e);var t=y(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return t.disabled=!1,t.listener=function(e){return function(n){return t.disabled||t.emit(e,n)}},t.on("touchStart",function(e){return t.onTouchStart(e,e.touches)}),t.on("touchMove",function(e){return t.onTouchMove(e,e.touches)}),t.on("touchEnd",function(e){return t.onTouchEnd(e,e.touches)}),t}return v(e,t),dt(e,[{key:"onTouchStart",value:function(t,e){if(this.status="start",this.touches=[].map.call(e,function(t){var e={};return e.sx=t.pageX,e.sy=t.pageY,e.st=+new Date,e}),1===this.touches.length)return this.emit("moveStart",this.touches,t);this.emit("scaleStart",this.touches,t)}},{key:"onTouchMove",value:function(t,e){var n=this;return"pending"===this.status?this.onTouchStart(t,e):(this.status="touching",this.touches=[].map.call(e,function(t,e){var r=n.touches[e]||{},o=r.x,i=r.y,a=r.t;return r.x=t.pageX,r.y=t.pageY,r.t=+new Date,r.ox=o||r.x,r.oy=i||r.y,r.ot=a||r.t,r.direction?(r.dx=r.x-r.ox,r.dy=r.y-r.oy,r.dt=r.t-r.ot):(r.dx=r.x-r.sx,r.dy=r.y-r.sy,r.dt=r.t-r.st,r.direction=Math.abs(r.dx)>Math.abs(r.dy)?"x":"y"),r}),1===this.touches.length?this.emit("moving",this.touches,t):void this.emit("scaling",this.touches,t))}},{key:"onTouchEnd",value:function(t,e){if(this.status="pending",0===e.length){var n=this.touches[0],r=n.st,o=n.direction,i=!this.disableTap&&!o&&new Date-r<500;return this.disableTap=!1,this.emit(i?"tap":"moveEnd",this.touches,t)}this.emit("scaleEnd",this.touches,t),this.disableTap=!0}},{key:"getScale",value:function(){if(this.touches.length>1){var t=pt(this.touches,2),e=t[0],n=t[1],r=Math.sqrt(Math.pow(e.x-n.x,2)+Math.pow(e.y-n.y,2)),o=Math.sqrt(Math.pow(e.ox-n.ox,2)+Math.pow(e.oy-n.oy,2)),i={x:(e.x+n.x)/2,y:(e.y+n.y)/2},a={x:(e.ox+n.ox)/2,y:(e.oy+n.oy)/2},u=r/o;return{scale:u,dx:i.x-u*a.x,dy:i.y-u*a.y}}return null}},{key:"createListener",value:function(){return{onTouchStart:this.listener("touchStart"),onTouchMove:this.listener("touchMove"),onTouchEnd:this.listener("touchEnd"),onTouchCancel:this.listener("touchEnd")}}}]),e}(st),vt=yt,mt=function(){function t(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{!r&&u.return&&u.return()}finally{if(o)throw i}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),bt=function(){var t="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(e,n,r,o){var i=e&&e.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var u in i)void 0===n[u]&&(n[u]=i[u]);else n||(n=i||{});if(1===a)n.children=o;else if(a>1){for(var s=Array(a),c=0;c<a;c++)s[c]=arguments[c+3];n.children=s}return{$$typeof:t,type:e,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),gt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},wt=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),xt=function(t){function e(t){var n;b(this,e);for(var r=arguments.length,o=Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];var a=g(this,(n=e.__proto__||Object.getPrototypeOf(e)).call.apply(n,[this,t].concat(o)));return a.scaler=new ft(t.store.get("v"+t.id)),a.toucher=new vt,a.$$updater=function(t){return a.scaler.update(t,{width:a.props.width,height:a.props.height,matrix:a.props.store.get("v"+a.props.id)})},a.toucher.on("moving",a.onMoveViewHandler.bind(a)),a.toucher.on("scaling",a.onScaleViewHandler.bind(a)),a.toucher.on("touchEnd",a.onTouchEndHandler.bind(a)),a.toucher.on("tap",a.onTapHandler.bind(a)),a.scaler.on("update",function(e){a.props.store.set(m({},"v"+t.id,e)),a.props.onScale&&a.props.onScale(gt({},e))}),a}return w(e,t),wt(e,[{key:"render",value:function(){var t=this.props,e=t.width,n=t.height,r=gt({},this.toucher.createListener(),{ref:this.$$updater,style:{width:e,height:n,display:"none",position:"absolute",top:0,left:0,WebkitTransformOrigin:"0 0",transformOrigin:"0 0"}});return bt("div",{style:N()},void 0,A.a.createElement("div",r,this.props.children))}},{key:"onMoveViewHandler",value:function(t,e){var n=mt(t,1),r=n[0];if(null===this.stopPropagation&&(this.stopPropagation=this.scaler.overflow(r.dx)),!1===this.stopPropagation)return r&&this.scaler.translateBy(r.dx,r.dy),e.stopPropagation()}},{key:"onTouchEndHandler",value:function(){var t={cx:0,cy:0},e=this.toucher.touches;if(e.length>1){var n=mt(e,2),r=n[0],o=n[1];t={cx:(r.x+o.x)/2,cy:(r.y+o.y)/2}}this.stopPropagation=null,this.scaler.reset(t)}},{key:"onScaleViewHandler",value:function(t,e){var n=this.toucher.getScale();n&&n.scale&&(this.scaler.translateBy(n.dx,n.dy,n.scale),e.stopPropagation())}},{key:"onTapHandler",value:function(t,e){if(this.props.onTap&&t.length){var n=t[0],r=n.sx,o=n.sy;this.props.onTap([this.scaler.coordinate(r,o)],e)}}}]),e}(_.Component),Ot=xt,kt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},jt=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),Tt=function(t){function e(t){var n;O(this,e);for(var r=arguments.length,o=Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];var a=k(this,(n=e.__proto__||Object.getPrototypeOf(e)).call.apply(n,[this,t].concat(o)));return a.$$render=A.a.createElement,a}return j(e,t),jt(e,[{key:"render",value:function(){var t=this,e=this.props,n=e.graph,r=void 0===n?[]:n,o=x(e,["graph"]),i=r.map(function(e,n){var r=e.type,o=x(e,["type"]);return r&&t.$$render(r,kt({key:n},o))});return A.a.createElement("svg",o,i)}}]),e}(_.Component),St=Tt,Mt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Et="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$t=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),Pt=function(t){function e(t){var n;T(this,e);for(var r=arguments.length,o=Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];var a=S(this,(n=e.__proto__||Object.getPrototypeOf(e)).call.apply(n,[this,t].concat(o)));return a.url=null,a.state={status:"loading",matrix:{scale:1,minScale:1}},a.updateScale=function(t){return a.setState({matrix:t})},a.$$loader=Z(a.loadImage.bind(a)),a}return M(e,t),$t(e,[{key:"render",value:function(){return this.props.path&&this.props.path!==this.url?(this.$$loader(this.url=this.props.path),null):"ready"===this.state.status?this.renderFigure():null}},{key:"renderFigure",value:function(){var t=this.props,e=t.id,n=t.positionList,r=void 0===n?[]:n,o=t.problemList,i=void 0===o?[]:o,a=t.mark,u=void 0!==a&&a,s=this.state.matrix,c=s.scale,h=s.minScale,l={id:e,style:{background:"url("+this.url+") no-repeat center",overflow:"hidden"}},f={fill:"white",fillOpacity:0,stroke:"red",strokeWidth:Math.max(1,.8/(c*h))},p=(1-.2*(Math.min(c,4)-1))/h,d={r:8*p,stroke:"white",strokeWidth:8*p,strokeOpacity:0},y=[];if(u){var v=this.size,m=v.width,b=v.height,g="M0, 0v"+b+"h"+m+"v"+-b+"Z"+r.map(function(t){var e=t.coordinate;if(!e||"object"!==(void 0===e?"undefined":Et(e)))return"";if(Array.isArray(e))return"M"+e.map(function(t){return t.join(", ")}).join("L")+"Z";if("x"in e){var n=e.x,r=e.y,o=e.width;return"M"+n+", "+r+"h"+o+"v"+e.height+"h"+-o+"Z"}return""}).join("");y.push({type:"path",d:g,fill:"black",fillOpacity:.3,fillRule:"evenodd",stroke:"none"})}return r.forEach(function(t){var e=t.id,n=t.coordinate;return n&&"object"===(void 0===n?"undefined":Et(n))?Array.isArray(n)?y.push(Mt({id:e,type:"path"},f,{d:"M"+n.map(function(t){return t.join(", ")}).join("L")+"Z"})):"x"in n?y.push(Mt({id:e,type:"rect"},f,n)):void 0:""}),i.forEach(function(t){var e=t.id,n=t.color,r=void 0===n?"red":n,o=t.coordinate,i=o.x,a=o.y;return y.push(Mt({id:e,type:"circle",fill:r},d,{cx:i,cy:a}))}),A.a.createElement(Ot,Mt({},this.size,{onScale:this.updateScale,id:this.props.id,store:this.props.store,onTap:this.props.onTap}),A.a.createElement(St,Mt({},this.size,l,{graph:y})))}},{key:"loadImage",value:function(t,e){if(t)return this.setState({status:"error"});this.size={width:e.width,height:e.height},this.setState({status:"ready"})}}]),e}(_.Component),_t=Pt,At=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ct=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Rt=function(){var t="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(e,n,r,o){var i=e&&e.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var u in i)void 0===n[u]&&(n[u]=i[u]);else n||(n=i||{});if(1===a)n.children=o;else if(a>1){for(var s=Array(a),c=0;c<a;c++)s[c]=arguments[c+3];n.children=s}return{$$typeof:t,type:e,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}();n.d(e,"render",function(){return zt}),n.d(e,"unmount",function(){return Vt});var zt=function(t,e){if("string"==typeof t&&(t=document.getElementById(t)),!t||1!==t.nodeType)throw new Error("获取节点失败，无法加载画布");R.a.render(A.a.createElement(P,e),t)},Vt=function(t){return R.a.unmountComponentAtNode("string"==typeof t?document.getElementById(t):t)}},function(t,n){t.exports=e}])});