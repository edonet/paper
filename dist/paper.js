!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("React"),require("ReactDOM")):"function"==typeof define&&define.amd?define(["React","ReactDOM"],e):"object"==typeof exports?exports.paper=e(require("React"),require("ReactDOM")):t.paper=e(t.React,t.ReactDOM)}(this,function(t,e){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="./",e(e.s=1)}([function(e,n){e.exports=t},function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function h(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function f(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function p(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function d(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function y(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function v(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function m(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function b(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function w(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}function g(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function x(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function O(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function k(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function j(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function T(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function E(t){var e=t.views,n=void 0===e?[]:e,r=t.onTap,o=t.onChange,i=function(t,e){if(r){var n=e.target,o=e.target.tagName,i="",a="";if("evenodd"===n.getAttribute("fill-rule"))return;"circle"===o?(a="point",i=n.getAttribute("id")):"path"!==o&&"rect"!==o||(a="area",i=n.getAttribute("id")),r({id:i,type:a,x:t[0].x,y:t[0].y})}};return $t(tt,{onChange:o},void 0,n.map(function(t,e){return S.a.createElement(Mt,St({key:e,onTap:i},t))}))}Object.defineProperty(e,"__esModule",{value:!0});var M=n(0),S=n.n(M),$=n(2),_=n.n($),P=("function"==typeof Symbol&&Symbol.iterator,Object.keys,Object.assign),A=(function(t){}(0),function(){var t=["t","webkitT","MozT","msT","OT"],e=document.createElement("div").style,n=!0,r=!1,o=void 0;try{for(var i,a=t[Symbol.iterator]();!(n=(i=a.next()).done);n=!0){var u=i.value;if(u+"ransform"in e)return u.slice(0,-1)}}catch(t){r=!0,o=t}finally{try{!n&&a.return&&a.return()}finally{if(r)throw o}}return""}()),C=function(t){return A?A+t.charAt(0).toUpperCase()+t.substr(1):t},R=C("perspective")in document.createElement("div").style,z=window.requestAnimationFrame||window.windowebkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return setTimeout(t,1e3/60)},V=function(t){return function(e){t||z(function(){return t&&t(),t=null}),t=e}},D=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t;return{position:"absolute",top:t,right:e,bottom:arguments.length>2&&void 0!==arguments[2]?arguments[2]:t,left:arguments.length>3&&void 0!==arguments[3]?arguments[3]:e}},H=function(t){return function(e){return r({},t,e)}}(C("transform")),I=(function(t){}(C("transition")),function(t,e,n){return H("translate("+(t||0)+", "+(e||0)+")"+(R?" translateZ("+(n||0)+")":""))}),q=function(t,e){var n=!1,r=+new Date,o=function o(){if(n)return!1;var i=Math.min(1,(new Date-r)/t);!1!==e(i)&&i<1&&z(o)};return t>0&&z(o),{stop:function(){return n=!0}}},B=function(t){switch(t){case"linear":return function(t){return t};case"ease-in-out":return function(t){return t-Math.sin(2*Math.PI*t)/(2*Math.PI)};case"ease-in":return function(t){return Math.pow(t,3)};case"ease-out":return function(t){return Math.pow(t-1,3)+1};case"back-in":return function(t){var e=1.70158;return t*t*((e+1)*t-e)};case"back-out":return function(t){t-=1;var e=1.70158;return t*t*((e+1)*t+e)+1};case"elastic":return function(t){return t<.4?Math.pow(2.5*t,3):Math.sin(5*t*Math.PI)*Math.cos(.5*t*Math.PI)/3+1};case"bounce":return function(t){var e=7.5625,n=2.75;return t<1/n?e*t*t:t<2/n?(t-=1.5/n,e*t*t+.75):t<2.5/n?(t-=2.25/n,e*t*t+.9375):(t-=2.625/n,e*t*t+.984375)};default:return function(t){return t}}},N=function(t){return function(e){var n=new Image;n.onload=function(){return t(null,n)},n.onerror=function(){return t(new Error("加载图片失败，请稍后再试。"))},n.src=e}},F=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),L=function(){function t(e){o(this,t),this.disabled=!1,this.status="pending",this.updater=e,this.touch={}}return F(t,[{key:"onTouchStart",value:function(t){var e=this;"pending"===this.status&&this.invoke(t,function(t){e.status="touching",e.touch.sx=t.pageX,e.touch.sy=t.pageY,e.touch.st=+new Date,e.emit("moveReady")})}},{key:"onTouchMove",value:function(t){var e=this;if("pending"===this.status)return this.onTouchStart(t);"touching"===this.status&&this.invoke(t,function(t){var n=e.touch,r=n.x,o=n.y,i=n.t;if(e.touch.x=t.pageX,e.touch.y=t.pageY,e.touch.t=+new Date,!e.touch.direction)return e.touch.dx=e.touch.x-e.touch.sx,e.touch.dy=e.touch.y-e.touch.sy,e.touch.dt=e.touch.t-e.touch.st,e.touch.direction=Math.abs(e.touch.dx)>Math.abs(e.touch.dy)?"x":"y",e.emit("moveStart");e.touch.dx=r?e.touch.x-r:0,e.touch.dy=o?e.touch.y-o:0,e.touch.dt=i?e.touch.t-i:0,e.emit("moving")})}},{key:"onTouchEnd",value:function(t){var e=this;"touching"===this.status&&this.invoke(t,function(){e.touch.t||(e.touch.t=+new Date,e.touch.dt=e.touch.t-e.touch.st),e.emit("moveEnd")}),this.touch={},this.status="pending"}},{key:"invoke",value:function(t,e){this.disabled||e(t.touches[0])}},{key:"emit",value:function(t){this.updater&&this.updater(t,this.touch)}}]),t}(),W=L,Z=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),X=function(){function t(e){i(this,t),this.$$model={target:null,overlap:0,max:0,updater:function(t,e){return t&&P(t.style,I(e+"%"))}},this.$$updater=V(),this.updateView(e)}return Z(t,[{key:"updateView",value:function(t){P(this.$$model,t),this.$$model.target&&!this.$$model.views&&(this.$$model.views=this.$$model.target.childNodes||[]),this.$$model.max=this.$$model.views?100*((this.$$model.views.length||1)-1):0,this.$$model.target&&this.refresh()}},{key:"refresh",value:function(t){var e=this.$$model,n=e.target,r=e.max,o=e.value;n&&(t=Math.max(-30,Math.min(r+30,t||o||0)))!==o&&this.$$updater(this.refreshView.bind(this,t))}},{key:"refreshView",value:function(t){var e=this.$$model,n=e.target,r=e.views,o=e.updater,i=e.overlap;if(o(n,-(this.$$model.value=t)),r&&r.length){var a=parseInt(t/100),u=100*a+i*(t%100)/100;[].forEach.call(r,function(t,e){if(e<a)return o(t,u+100*(e-a));o(t,e===a?u:100*e)})}}},{key:"scrollTo",value:function(t){this.refresh(t)}},{key:"scrollBy",value:function(t){this.refresh(this.$$model.value+t)}},{key:"animateTo",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"ease-in-out",o=this.$$model,i=o.target,a=o.value,u=o.max,s=B(r),c=0;if(i)return t=Math.max(0,Math.min(u,t)),(c=t-a)&&q(n,function(t){e.refreshView(a+c*s(t))})}},{key:"getPosition",value:function(){return this.$$model.value}},{key:"getSize",value:function(){return this.$$model.views.length}},{key:"destroy",value:function(){this.value=null,this.views=null}}]),t}(),Y=X,U=function(){var t="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(e,n,r,o){var i=e&&e.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var u in i)void 0===n[u]&&(n[u]=i[u]);else n||(n=i||{});if(1===a)n.children=o;else if(a>1){for(var s=Array(a),c=0;c<a;c++)s[c]=arguments[c+3];n.children=s}return{$$typeof:t,type:e,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),G=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),J=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},K=J({},D(),{overflow:"hidden"}),Q=function(t){function e(t){var n;a(this,e);for(var r=arguments.length,o=Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];var s=u(this,(n=e.__proto__||Object.getPrototypeOf(e)).call.apply(n,[this,t].concat(o)));return s.curr=0,s.target=null,s.gesture=[],s.swiper=new Y,s.handleMount=s.handleMount.bind(s),s.handleEvent=s.handleEvent.bind(s),s.handleTouchMove=s.handleTouchMove.bind(s),s.touchHandler={onTouchStart:s.handleEvent("onTouchStart"),onTouchMove:s.handleEvent("onTouchMove"),onTouchEnd:s.handleEvent("onTouchEnd"),onTouchCancel:s.handleEvent("onTouchEnd")},s.gesture.push(new W(s.handleTouchMove)),s}return s(e,t),G(e,[{key:"render",value:function(){var t=this.props,e=t.style,n=t.className,r=t.children,o=void 0;return o=J({className:n,style:J({},K,{overflow:"visible"},e),ref:this.handleMount},this.touchHandler),S.a.createElement("div",o,M.Children.map(r,function(t){return U("div",{style:K},void 0,t)}))}},{key:"componentDidUpdate",value:function(){this.swiper.updateView()}},{key:"handleMount",value:function(t){t?this.initialize(t):this.destroy()}},{key:"initialize",value:function(t){this.target=t,this.width=t.clientWidth,this.height=t.clientHeight,this.swiper.updateView({target:t,views:t.childNodes,overlap:this.props.overlap||0})}},{key:"handleEvent",value:function(t){var e=this;return function(n){return e.gesture.forEach(function(e){return t in e&&e[t](n)})}}},{key:"handleTouchMove",value:function(t,e){if(this.animater&&this.animater.stop(),!this.width||"x"!==e.direction)return!1;if("moving"===t)return this.swiper.scrollBy(-100*e.dx/this.width);if("moveEnd"===t){var n=this.swiper.getPosition(),r=Math.round(n/100);e.dx&&Math.abs(e.x-e.sx)<.5*this.width&&Math.abs(e.dx/e.dt)>.3&&(r+=e.dx>0?-1:1),r=Math.max(0,Math.min(r,this.swiper.getSize()-1)),this.props.onChange&&this.curr!==r&&this.props.onChange(this.curr=r),this.swiper.animateTo(100*r,250,"ease-out")}}},{key:"destroy",value:function(){this.target=null,this.width=null,this.height=null,this.swiper.destroy()}}]),e}(M.Component),tt=Q,et="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},nt=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),rt=function(){function t(){c(this,t),this.events={}}return nt(t,[{key:"on",value:function(t,e){var n=this;return"string"!=typeof t?("object"===(void 0===t?"undefined":et(t))&&Object.keys(t).forEach(function(e){return n.on(e,t[e])}),this):"function"!=typeof e?this:(t in this.events?this.events[t].push(e):this.events[t]=[e],this)}},{key:"off",value:function(t,e){return void 0===t?(this.events={},this):"string"!=typeof t?this:void 0===e?(delete this.events[t],this):("function"==typeof e&&t in this.events&&(this.events[t]=this.events[t].filter(function(t){return t!==e})),this)}},{key:"emit",value:function(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return"string"!=typeof t?this:(t in this.events&&this.events[t].length&&this.events[t].forEach(function(t){return t.apply(void 0,n)}),"$$emit"in this.events&&this.events.$$emit.length&&this.events.$$emit.forEach(function(e){return e.apply(void 0,[t].concat(n))}),this)}}]),t}(),ot=rt,it=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},at=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),ut=function(t){function e(){h(this,e);var t=l(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return t.target=null,t.view={},t.size={},t.matrix={x:0,y:0,scale:1},t.animater=null,t.$$updater=V(),t.updateView=t.updateView.bind(t),t}return f(e,t),at(e,[{key:"update",value:function(t,e){var n=e.width,r=e.height;if(this.target=t,t&&1===t.nodeType){var o=t.parentNode||{};this.size.width=n||t.clientWidth,this.size.height=r||t.clientHeight,this.view.width=o.clientWidth||this.size.width,this.view.height=o.clientHeight||this.size.height,this.matrix.minScale=this.view.width/this.size.width,this.matrix.maxScale=Math.max(this.size.width/this.view.width,3)}this.$$updater(this.updateView)}},{key:"updateView",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.matrix,e=t.x,n=t.y,r=t.scale;this.target&&(P(this.target.style,it({display:"block"},H("translate("+e+"px, "+n+"px)"+(R?" translateZ(0)":"")+" scale("+r*this.matrix.minScale+")"))),this.emit("update",this.matrix))}},{key:"translateTo",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.matrix.scale;t===this.matrix.x&&e===this.matrix.y&&n===this.matrix.scale||(this.matrix.x=t,this.matrix.y=e,this.matrix.scale=n,this.$$updater(this.updateView))}},{key:"translateBy",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;this.translateTo(this.matrix.x*n+t,this.matrix.y*n+e,this.matrix.scale*n)}},{key:"overflow",value:function(t){var e=this.matrix,n=e.x,r=e.scale,o=Math.min(0,this.view.width-r*this.view.width),i=n+t;return i>0||i<o}},{key:"reset",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.cx,n=void 0===e?0:e,r=t.cy,o=void 0===r?0:r,i=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:250,u=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"ease-out",s=this.matrix,c=s.x,h=s.y,l=s.scale,f=s.minScale,p=s.maxScale,d=Math.max(1,Math.min(p,l)),y=d*this.view.width,v=d*f*this.size.height,m=Math.min(0,Math.max(this.view.width-y,(c-n)*d/l+n))-c,b=Math.min(0,Math.max(this.view.height-v,(h-o)*d/l+o))-h,w=d-l,g=B(u);(m||b||w)&&(this.animater=q(a,function(t){t=g(t),i.matrix.x=c+m*t,i.matrix.y=h+b*t,i.matrix.scale=l+w*t,i.updateView()}))}},{key:"coordinate",value:function(t,e){if(this.target){var n=this.target.parentNode.getBoundingClientRect(),r=this.matrix,o=r.scale*r.minScale;t=(t-n.left-r.x)/o,e=(e-n.top-r.y)/o}return{x:t,y:e}}},{key:"stopAnimation",value:function(){this.animater&&this.animater.stop()}}]),e}(ot),st=ut,ct=function(){function t(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{!r&&u.return&&u.return()}finally{if(o)throw i}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),ht=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),lt=function(t){function e(){p(this,e);var t=d(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return t.disabled=!1,t.listener=function(e){return function(n){return t.disabled||t.emit(e,n)}},t.on("touchStart",function(e){return t.onTouchStart(e,e.touches)}),t.on("touchMove",function(e){return t.onTouchMove(e,e.touches)}),t.on("touchEnd",function(e){return t.onTouchEnd(e,e.touches)}),t}return y(e,t),ht(e,[{key:"onTouchStart",value:function(t,e){if(this.status="start",this.touches=[].map.call(e,function(t){var e={};return e.sx=t.pageX,e.sy=t.pageY,e.st=+new Date,e}),1===this.touches.length)return this.emit("moveStart",this.touches,t);this.emit("scaleStart",this.touches,t)}},{key:"onTouchMove",value:function(t,e){var n=this;return"pending"===this.status?this.onTouchStart(t,e):(this.status="touching",this.touches=[].map.call(e,function(t,e){var r=n.touches[e]||{},o=r.x,i=r.y,a=r.t;return r.x=t.pageX,r.y=t.pageY,r.t=+new Date,r.ox=o||r.x,r.oy=i||r.y,r.ot=a||r.t,r.direction?(r.dx=r.x-r.ox,r.dy=r.y-r.oy,r.dt=r.t-r.ot):(r.dx=r.x-r.sx,r.dy=r.y-r.sy,r.dt=r.t-r.st,r.direction=Math.abs(r.dx)>Math.abs(r.dy)?"x":"y"),r}),1===this.touches.length?this.emit("moving",this.touches,t):void this.emit("scaling",this.touches,t))}},{key:"onTouchEnd",value:function(t,e){if(this.status="pending",0===e.length){var n=this.touches[0],r=n.st,o=n.direction,i=!this.disableTap&&!o&&new Date-r<500;return this.disableTap=!1,this.emit(i?"tap":"moveEnd",this.touches,t)}this.emit("scaleEnd",this.touches,t),this.disableTap=!0}},{key:"getScale",value:function(){if(this.touches.length>1){var t=ct(this.touches,2),e=t[0],n=t[1],r=Math.sqrt(Math.pow(e.x-n.x,2)+Math.pow(e.y-n.y,2)),o=Math.sqrt(Math.pow(e.ox-n.ox,2)+Math.pow(e.oy-n.oy,2)),i={x:(e.x+n.x)/2,y:(e.y+n.y)/2},a={x:(e.ox+n.ox)/2,y:(e.oy+n.oy)/2},u=r/o;return{scale:u,dx:i.x-u*a.x,dy:i.y-u*a.y}}return null}},{key:"createListener",value:function(){return{onTouchStart:this.listener("touchStart"),onTouchMove:this.listener("touchMove"),onTouchEnd:this.listener("touchEnd"),onTouchCancel:this.listener("touchEnd")}}}]),e}(ot),ft=lt,pt=function(){function t(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{!r&&u.return&&u.return()}finally{if(o)throw i}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),dt=function(){var t="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(e,n,r,o){var i=e&&e.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var u in i)void 0===n[u]&&(n[u]=i[u]);else n||(n=i||{});if(1===a)n.children=o;else if(a>1){for(var s=Array(a),c=0;c<a;c++)s[c]=arguments[c+3];n.children=s}return{$$typeof:t,type:e,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),yt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},vt=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),mt=function(t){function e(t){var n;v(this,e);for(var r=arguments.length,o=Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];var a=m(this,(n=e.__proto__||Object.getPrototypeOf(e)).call.apply(n,[this,t].concat(o)));return a.scaler=new st,a.toucher=new ft,a.toucher.on("moving",a.onMoveViewHandler.bind(a)),a.toucher.on("scaling",a.onScaleViewHandler.bind(a)),a.toucher.on("touchEnd",a.onTouchEndHandler.bind(a)),a.toucher.on("tap",a.onTapHandler.bind(a)),a.scaler.on("update",function(t){a.props.onScale&&a.props.onScale(t.scale)}),a}return b(e,t),vt(e,[{key:"render",value:function(){var t=this,e=this.props,n=e.width,r=e.height,o=yt({},this.toucher.createListener(),{ref:function(e){return t.scaler.update(e,{width:n,height:r})},style:{width:n,height:r,display:"none",position:"absolute",top:0,left:0,WebkitTransformOrigin:"0 0",transformOrigin:"0 0"}});return dt("div",{style:D()},void 0,S.a.createElement("div",o,this.props.children))}},{key:"onMoveViewHandler",value:function(t,e){var n=pt(t,1),r=n[0];if(null===this.stopPropagation&&(this.stopPropagation=this.scaler.overflow(r.dx)),!1===this.stopPropagation)return r&&this.scaler.translateBy(r.dx,r.dy),e.stopPropagation()}},{key:"onTouchEndHandler",value:function(){var t={cx:0,cy:0},e=this.toucher.touches;if(e.length>1){var n=pt(e,2),r=n[0],o=n[1];t={cx:(r.x+o.x)/2,cy:(r.y+o.y)/2}}this.stopPropagation=null,this.scaler.reset(t)}},{key:"onScaleViewHandler",value:function(t,e){var n=this.toucher.getScale();n&&n.scale&&(this.scaler.translateBy(n.dx,n.dy,n.scale),e.stopPropagation())}},{key:"onTapHandler",value:function(t,e){if(this.props.onTap&&t.length){var n=t[0],r=n.sx,o=n.sy;this.props.onTap([this.scaler.coordinate(r,o)],e)}}}]),e}(M.Component),bt=mt,wt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},gt=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),xt=function(t){function e(t){var n;g(this,e);for(var r=arguments.length,o=Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];var a=x(this,(n=e.__proto__||Object.getPrototypeOf(e)).call.apply(n,[this,t].concat(o)));return a.$$render=S.a.createElement,a}return O(e,t),gt(e,[{key:"render",value:function(){var t=this,e=this.props,n=e.graph,r=void 0===n?[]:n,o=w(e,["graph"]),i=r.map(function(e,n){var r=e.type,o=w(e,["type"]);return r&&t.$$render(r,wt({key:n},o))});return S.a.createElement("svg",o,i)}}]),e}(M.Component),Ot=xt,kt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},jt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Tt=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),Et=function(t){function e(t){var n;k(this,e);for(var r=arguments.length,o=Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];var a=j(this,(n=e.__proto__||Object.getPrototypeOf(e)).call.apply(n,[this,t].concat(o)));return a.url=null,a.state={status:"loading",scale:1},a.updateScale=function(t){return a.setState({scale:t})},a.$$loader=N(a.loadImage.bind(a)),a}return T(e,t),Tt(e,[{key:"render",value:function(){return this.props.path&&this.props.path!==this.url?(this.$$loader(this.url=this.props.path),null):"ready"===this.state.status?this.renderFigure():null}},{key:"renderFigure",value:function(){var t=this.props,e=t.id,n=t.positionList,r=void 0===n?[]:n,o=t.problemList,i=void 0===o?[]:o,a=t.mark,u=void 0!==a&&a,s=this.state.scale,c={id:e,style:{background:"url("+this.url+") no-repeat center",overflow:"hidden"}},h={fill:"white",fillOpacity:0,stroke:"red",strokeWidth:1.5/s},l=(.5*(s-1)+1)/s,f={r:10*l,stroke:"white",strokeWidth:10*l,strokeOpacity:0},p=[];if(u){var d=this.size,y=d.width,v=d.height,m="M0, 0v"+v+"h"+y+"v"+-v+"Z"+r.map(function(t){var e=t.coordinate;if(!e||"object"!==(void 0===e?"undefined":jt(e)))return"";if(Array.isArray(e))return"M"+e.map(function(t){return t.join(", ")}).join("L")+"Z";if("x"in e){var n=e.x,r=e.y,o=e.width;return"M"+n+", "+r+"h"+o+"v"+e.height+"h"+-o+"Z"}return""}).join("");p.push({type:"path",d:m,fill:"black",fillOpacity:.3,fillRule:"evenodd",stroke:"none"})}return r.forEach(function(t){var e=t.id,n=t.coordinate;return n&&"object"===(void 0===n?"undefined":jt(n))?Array.isArray(n)?p.push(kt({id:e,type:"path"},h,{d:"M"+n.map(function(t){return t.join(", ")}).join("L")+"Z"})):"x"in n?p.push(kt({id:e,type:"rect"},h,n)):void 0:""}),i.forEach(function(t){var e=t.id,n=t.color,r=void 0===n?"red":n,o=t.coordinate,i=o.x,a=o.y;return p.push(kt({id:e,type:"circle",fill:r},f,{cx:i,cy:a}))}),S.a.createElement(bt,kt({},this.size,{onScale:this.updateScale,onTap:this.props.onTap}),S.a.createElement(Ot,kt({},this.size,c,{graph:p})))}},{key:"loadImage",value:function(t,e){if(t)return this.setState({status:"error"});this.size={width:e.width,height:e.height},this.setState({status:"ready"})}}]),e}(M.Component),Mt=Et,St=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},$t=function(){var t="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(e,n,r,o){var i=e&&e.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var u in i)void 0===n[u]&&(n[u]=i[u]);else n||(n=i||{});if(1===a)n.children=o;else if(a>1){for(var s=Array(a),c=0;c<a;c++)s[c]=arguments[c+3];n.children=s}return{$$typeof:t,type:e,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}();n.d(e,"render",function(){return _t}),n.d(e,"unmount",function(){return Pt});var _t=function(t,e){if("string"==typeof t&&(t=document.getElementById(t)),!t||1!==t.nodeType)throw new Error("获取节点失败，无法加载画布");_.a.render(S.a.createElement(E,e),t)},Pt=function(t){return _.a.unmountComponentAtNode("string"==typeof t?document.getElementById(t):t)}},function(t,n){t.exports=e}])});