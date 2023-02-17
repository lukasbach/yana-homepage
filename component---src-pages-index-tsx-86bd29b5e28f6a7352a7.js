/*! For license information please see component---src-pages-index-tsx-86bd29b5e28f6a7352a7.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"3JFx":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l(n("NOtv")),o=l(n("t0y4")),a=l(n("s/rx")),i=l(n("4Y/j"));function l(e){return e&&e.__esModule?e:{default:e}}var s=(0,r.default)("youtube-player"),u={proxyEvents:function(e){var t={},n=function(n){var r="on"+n.slice(0,1).toUpperCase()+n.slice(1);t[r]=function(t){s('event "%s"',r,t),e.trigger(n,t)}},r=!0,o=!1,i=void 0;try{for(var l,u=a.default[Symbol.iterator]();!(r=(l=u.next()).done);r=!0){n(l.value)}}catch(c){o=!0,i=c}finally{try{!r&&u.return&&u.return()}finally{if(o)throw i}}return t},promisifyPlayer:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n={},r=function(r){t&&i.default[r]?n[r]=function(){for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];return e.then((function(e){var t=i.default[r],o=e.getPlayerState(),a=e[r].apply(e,n);return t.stateChangeRequired||Array.isArray(t.acceptableStates)&&-1===t.acceptableStates.indexOf(o)?new Promise((function(n){e.addEventListener("onStateChange",(function r(){var o=e.getPlayerState(),a=void 0;"number"==typeof t.timeout&&(a=setTimeout((function(){e.removeEventListener("onStateChange",r),n()}),t.timeout)),Array.isArray(t.acceptableStates)&&-1!==t.acceptableStates.indexOf(o)&&(e.removeEventListener("onStateChange",r),clearTimeout(a),n())}))})).then((function(){return a})):a}))}:n[r]=function(){for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];return e.then((function(e){return e[r].apply(e,n)}))}},a=!0,l=!1,s=void 0;try{for(var u,c=o.default[Symbol.iterator]();!(a=(u=c.next()).done);a=!0){var d=u.value;r(d)}}catch(f){l=!0,s=f}finally{try{!a&&c.return&&c.return()}finally{if(l)throw s}}return n}};t.default=u,e.exports=t.default},"4Y/j":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n("u6sg"),a=(r=o)&&r.__esModule?r:{default:r};t.default={pauseVideo:{acceptableStates:[a.default.ENDED,a.default.PAUSED],stateChangeRequired:!1},playVideo:{acceptableStates:[a.default.ENDED,a.default.PLAYING],stateChangeRequired:!1},seekTo:{acceptableStates:[a.default.ENDED,a.default.PLAYING,a.default.PAUSED],stateChangeRequired:!0,timeout:3e3}},e.exports=t.default},"D+Oc":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=l(n("MEFE")),a=l(n("MIx2")),i=l(n("3JFx"));function l(e){return e&&e.__esModule?e:{default:e}}var s=void 0;t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],l=(0,o.default)();if(s||(s=(0,a.default)(l)),t.events)throw new Error("Event handlers cannot be overwritten.");if("string"==typeof e&&!document.getElementById(e))throw new Error('Element "'+e+'" does not exist.');t.events=i.default.proxyEvents(l);var u=new Promise((function(n){"object"===(void 0===e?"undefined":r(e))&&e.playVideo instanceof Function?n(e):s.then((function(r){var o=new r.Player(e,t);return l.on("ready",(function(){n(o)})),null}))})),c=i.default.promisifyPlayer(u,n);return c.on=l.on,c.off=l.off,c},e.exports=t.default},MEFE:function(e,t,n){"use strict";var r;r=function(){var e={},t={};return e.on=function(e,n){var r={name:e,handler:n};return t[e]=t[e]||[],t[e].unshift(r),r},e.off=function(e){var n=t[e.name].indexOf(e);-1!==n&&t[e.name].splice(n,1)},e.trigger=function(e,n){var r,o=t[e];if(o)for(r=o.length;r--;)o[r].handler(n)},e},e.exports=r},MIx2:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n("MuZe"),a=(r=o)&&r.__esModule?r:{default:r};t.default=function(e){return new Promise((function(t){if(window.YT&&window.YT.Player&&window.YT.Player instanceof Function)t(window.YT);else{var n="http:"===window.location.protocol?"http:":"https:";(0,a.default)(n+"//www.youtube.com/iframe_api",(function(t){t&&e.trigger("error",t)}));var r=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=function(){r&&r(),t(window.YT)}}}))},e.exports=t.default},MuZe:function(e,t){function n(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function r(e,t){e.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,t(null,e))}}e.exports=function(e,t,o){var a=document.head||document.getElementsByTagName("head")[0],i=document.createElement("script");"function"==typeof t&&(o=t,t={}),t=t||{},o=o||function(){},i.type=t.type||"text/javascript",i.charset=t.charset||"utf8",i.async=!("async"in t)||!!t.async,i.src=e,t.attrs&&function(e,t){for(var n in t)e.setAttribute(n,t[n])}(i,t.attrs),t.text&&(i.text=""+t.text),("onload"in i?n:r)(i,o),i.onload||n(i,o),a.appendChild(i)}},NOtv:function(e,t,n){(function(r){function o(){var e;try{e=t.storage.debug}catch(n){}return!e&&void 0!==r&&"env"in r&&(e={}.DEBUG),e}(t=e.exports=n("lv48")).log=function(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},t.formatArgs=function(e){var n=this.useColors;if(e[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+e[0]+(n?"%c ":" ")+"+"+t.humanize(this.diff),!n)return;var r="color: "+this.color;e.splice(1,0,r,"color: inherit");var o=0,a=0;e[0].replace(/%[a-zA-Z%]/g,(function(e){"%%"!==e&&(o++,"%c"===e&&(a=o))})),e.splice(a,0,r)},t.save=function(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(n){}},t.load=o,t.useColors=function(){if("undefined"!=typeof window&&window.process&&"renderer"===window.process.type)return!0;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}},t.enable(o())}).call(this,n("8oxB"))},QeBL:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return z}));var r=n("dI71"),o=n("q1tI"),a=n.n(o),i=n("Hqvu"),l=n("gF/r"),s=n("+EA7"),u=n.n(s),c=n("aUsF"),d=n.n(c),f=n("D+Oc"),p=n.n(f);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=w(e);if(t){var o=w(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return v(this,n)}}function v(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?b(e):t}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){P(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function P(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function S(e){return x(x({},e),{},{playerVars:x({autoplay:0,start:0,end:0},e.playerVars)})}var C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(i,e);var t,n,r,o=g(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),P(b(t=o.call(this,e)),"onPlayerReady",(function(e){return t.props.onReady(e)})),P(b(t),"onPlayerError",(function(e){return t.props.onError(e)})),P(b(t),"onPlayerStateChange",(function(e){switch(t.props.onStateChange(e),e.data){case i.PlayerState.ENDED:t.props.onEnd(e);break;case i.PlayerState.PLAYING:t.props.onPlay(e);break;case i.PlayerState.PAUSED:t.props.onPause(e)}})),P(b(t),"onPlayerPlaybackRateChange",(function(e){return t.props.onPlaybackRateChange(e)})),P(b(t),"onPlayerPlaybackQualityChange",(function(e){return t.props.onPlaybackQualityChange(e)})),P(b(t),"createPlayer",(function(){if("undefined"!=typeof document){var e=x(x({},t.props.opts),{},{videoId:t.props.videoId});t.internalPlayer=p()(t.container,e),t.internalPlayer.on("ready",t.onPlayerReady),t.internalPlayer.on("error",t.onPlayerError),t.internalPlayer.on("stateChange",t.onPlayerStateChange),t.internalPlayer.on("playbackRateChange",t.onPlayerPlaybackRateChange),t.internalPlayer.on("playbackQualityChange",t.onPlayerPlaybackQualityChange)}})),P(b(t),"resetPlayer",(function(){return t.internalPlayer.destroy().then(t.createPlayer)})),P(b(t),"updatePlayer",(function(){t.internalPlayer.getIframe().then((function(e){t.props.id?e.setAttribute("id",t.props.id):e.removeAttribute("id"),t.props.className?e.setAttribute("class",t.props.className):e.removeAttribute("class")}))})),P(b(t),"getInternalPlayer",(function(){return t.internalPlayer})),P(b(t),"updateVideo",(function(){if(void 0!==t.props.videoId&&null!==t.props.videoId){var e=!1,n={videoId:t.props.videoId};"playerVars"in t.props.opts&&(e=1===t.props.opts.playerVars.autoplay,"start"in t.props.opts.playerVars&&(n.startSeconds=t.props.opts.playerVars.start),"end"in t.props.opts.playerVars&&(n.endSeconds=t.props.opts.playerVars.end)),e?t.internalPlayer.loadVideoById(n):t.internalPlayer.cueVideoById(n)}else t.internalPlayer.stopVideo()})),P(b(t),"refContainer",(function(e){t.container=e})),t.container=null,t.internalPlayer=null,t}return t=i,(n=[{key:"componentDidMount",value:function(){this.createPlayer()}},{key:"componentDidUpdate",value:function(e){(function(e,t){return e.id!==t.id||e.className!==t.className})(e,this.props)&&this.updatePlayer(),function(e,t){return!d()(S(e.opts),S(t.opts))}(e,this.props)&&this.resetPlayer(),function(e,t){if(e.videoId!==t.videoId)return!0;var n=e.opts.playerVars||{},r=t.opts.playerVars||{};return n.start!==r.start||n.end!==r.end}(e,this.props)&&this.updateVideo()}},{key:"componentWillUnmount",value:function(){this.internalPlayer.destroy()}},{key:"render",value:function(){return a.a.createElement("div",{className:this.props.containerClassName},a.a.createElement("div",{id:this.props.id,className:this.props.className,ref:this.refContainer}))}}])&&m(t.prototype,n),r&&m(t,r),i}(a.a.Component);P(C,"PlayerState",{UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5}),C.defaultProps={videoId:null,id:null,className:null,opts:{},containerClassName:"",onReady:function(){},onError:function(){},onPlay:function(){},onPause:function(){},onEnd:function(){},onStateChange:function(){},onPlaybackRateChange:function(){},onPlaybackQualityChange:function(){}};var O=C,k=n("IP2g"),I=n("wHSu"),j=function(e){var t={container:u()({position:"relative"}),overlay:u()({position:"absolute",top:0,right:0,bottom:0,left:0,display:"flex",justifyContent:"center",alignItems:"center",opacity:0,cursor:"pointer",":hover":{backgroundColor:"rgba(0,0,0,.5)",color:"white",opacity:1}}),overlayPaused:u()({backgroundColor:"rgba(0,0,0,.5)",color:"white",opacity:1})},n=Object(o.useState)(!1),r=n[0],a=n[1],i=Object(o.useRef)();return o.createElement("div",{className:[t.container,u()({width:e.width+"px",height:e.width/16*9+"px"})].join(" ")},o.createElement(O,{videoId:e.videoId,onReady:function(e){i.current=e.target,e.target.playVideo(),setTimeout((function(){return e.target.playVideo()}),1500)},onEnd:function(e){e.target.playVideoAt(0),e.target.playVideo()},onPause:function(e){a(!1)},onPlay:function(e){return a(!0)},onError:function(e){return e.target.playVideo()},opts:{width:e.width+"px",height:e.width/16*9+"px",playerVars:{autoplay:1,controls:0,disablekb:1,loop:1,modestbranding:1,showinfo:0}},containerClassName:u()({borderRadius:e.borderRadius+"px"}),className:u()({borderRadius:e.borderRadius+"px"})}),o.createElement("div",{className:[t.overlay,!r&&t.overlayPaused,u()({borderRadius:e.borderRadius+"px"})].join(" "),onClick:function(){i.current&&(r?i.current.pauseVideo():i.current.playVideo())}},o.createElement(k.a,{icon:r?I.b:I.c})))},N=function(e){var t={container:u()({display:"flex",marginTop:"100px",alignItems:"center","@media (max-width: 1300px)":{flexDirection:"column"}}),right:u()({marginLeft:"3em","> h2":{color:"#222",fontSize:"4em",lineHeight:"1",margin:0,fontStyle:"italic",fontWeight:800,"@media (max-width: 1300px)":{color:"#fff",marginBottom:".4em",marginTop:".8em"}},"> p":{color:"white",fontSize:"1.4em",lineHeight:"1.7","@media (min-width: 1800px)":{maxWidth:"20em"}}})};return o.createElement("div",{className:t.container},o.createElement("div",null,o.createElement(j,{videoId:"0BUB5IprutU",width:800,borderRadius:24})),o.createElement("div",{className:t.right},o.createElement("h2",null,"Powerful note-taking app"),o.createElement("p",null,"Yana is a intuitive notebook app that is easy to get started with and free to use. Organize your thoughts by tagging, searching and structuring your notes in tree views. Scribble in rich text notes, sketch scripts in code editors and more!")))},R=n("BGQs"),A=n("8tEE"),D=n("npJx"),V=n("3bvF"),_=n("+ZDr"),M=n.n(_),U=function(e){var t,n,r,a,i,l,s,c={container:u()({margin:"10em 0 12em 0",display:"flex",justifyContent:"center"}),inner:u()({width:"840px",display:"flex",justifyContent:"center",alignItems:"center"}),left:u()({}),right:u()({flexGrow:1,width:"350px",color:"white",marginLeft:"64px","> h2":{fontSize:"2em"},"> p":{marginBottom:"0"}}),downloadButton:u()({backgroundColor:R.a,padding:"16px 32px",border:"none",borderRadius:"12px",color:"white",display:"flex",alignItems:"center",cursor:"pointer"," :nth-child(1)":{fontSize:"1.6em",marginRight:"10px"}," :nth-child(2)":{fontSize:"1.6em",fontWeight:"bolder"},":hover":{backgroundColor:"white",color:R.a}})},d=Object(V.a)(),f="undefined"!=typeof window?(navigator.platform||navigator.appVersion||navigator.oscpu).toLowerCase():"";if(f.includes("win")||f.includes("wow"))t=A.e,n="Download for Windows",r=null!==(i=null===(l=d.assets.find((function(e){return e.name.includes(".exe")})))||void 0===l?void 0:l.downloadUrl)&&void 0!==i?i:"/download",a="win",console.log(null===(s=d.assets.find((function(e){return e.name.includes(".exe")})))||void 0===s?void 0:s.downloadUrl,d.assets,d,r,n);else if(f.includes("mac")){var p,y;t=A.a,n="Download for Mac",r=null!==(p=null===(y=d.assets.find((function(e){return e.name.includes(".dmg")})))||void 0===y?void 0:y.downloadUrl)&&void 0!==p?p:"/download",a="mac"}else if(f.includes("linux"))t=A.c,n="Download for Linux",r="/download",a="linux";else if(f.includes("ubuntu")){var m,h;t=A.d,n="Download for Ubuntu",r=null!==(m=null===(h=d.assets.find((function(e){return e.name.includes(".AppImage")})))||void 0===h?void 0:h.downloadUrl)&&void 0!==m?m:"/download",a="ubuntu"}else t=I.a,n="Download",r="/download",a="unkown";return o.createElement("div",{className:c.container},o.createElement("div",{className:c.inner},o.createElement("div",{className:c.left},o.createElement("a",{href:"#",onClick:function(){"undefined"!=typeof window&&window.gtag("event","download-from-highlight",{os:a,version:d.name}),window.open(r,"_blank")}},o.createElement(D.a,{icon:t},n))),o.createElement("div",{className:c.right},o.createElement("h2",null,"Get started within minutes"),o.createElement("p",null,"Just download the installer and start scribbling your notes. You can also ",o.createElement(M.a,{to:"/download"},"download Yana for a different platform")))))},L=["M311.1,9.41c73.22,26.85,63.86,93.38,140,116,41.53,12.34,64.78-1.37,106,23,8.74,5.17,54.24,32.08,51,61-4.18,37.25-84,31.7-108,85-18.83,41.78,19.8,68.26,5,109-28,77.14-209.28,99.87-234,56-11.69-20.73,16.93-46.91,5-62-23.71-30-140.14,68.88-217,29-49.12-25.48-72.71-102.75-51-134,17.2-24.75,59.66-16,64-34,5.91-24.48-70.37-50.17-66-78,4-25.3,68.65-14.35,110-63,26.53-31.21,12.53-50.56,37-78C187.06,1.34,257.57-10.21,311.1,9.41Z","M304,74.17c70.5,1.91,85.58-70.07,164-74,58.76-2.95,123.1,33.8,129,73,5.44,36.11-41.61,55.3-34,92,8.37,40.34,70.46,42.28,72,72,2,39.12-104.42,58.3-109,120-1.17,15.85,5.64,17.45,3,31-11.07,56.87-145.71,103-220,59-32.55-19.28-26.28-39.74-59-55-55.83-26.05-94.06,24.2-153,7C41.22,382.89-7.55,313.7,1,261.17c8.26-50.91,66.92-65.1,67-123,0-28.75-14.4-35.8-8-57,10.85-35.91,65.26-58.63,112-58C239.17,24.06,246.36,72.6,304,74.17Z","M470.47,115.16c18.64,8.21,39.3-38.37,90-46,5.93-.89,48.87-7.36,67,15,32.51,40.09-52.93,125.78-16,189,11.44,19.58,24.25,20.25,30,41,9.37,33.87-18.12,73.47-42,95-53.76,48.44-148.68,48.1-206,10-37.33-24.81-33.73-44.34-60-49-63.67-11.28-108.76,106.63-179,95-1.28-.21-29.5-5.3-45-28-30-43.89,19.19-107.39-5-131-20.79-20.29-65.65,18.22-90-2-28-23.29-14.39-112.38,33-142,28.56-17.85,59.22-6.82,70-27,10.42-19.53-14.62-36.73-10-64,7.09-42,80.2-83,136-68,50.65,13.62,64.93,71.9,95,65,22-5,21.56-37.41,53-47,14.38-4.39,34.84-3.83,49,7C471.06,51.57,450.5,106.37,470.47,115.16Z","M262,37.72c38.82-30.32,104.73-51.53,141-27,34.41,23.27,27.49,77.8,57,83,9.24,1.63,15.88-2.66,28-9,20.29-10.61,76.58-40,106-36,48.83,6.71,101.7,116.4,68,178-31.45,57.5-128.63,55.37-128,84,.48,22,57.78,22.64,71,63,9.46,28.88-8.37,63.72-29,83-23.47,21.93-52.16,25.21-60,26-98.34,9.89-153.41-116.73-217-98-32.11,9.46-23.31,43.3-66,74-67.28,48.39-185.21,33.44-205-12C8.6,402.17,96.47,358,82,284.72c-10.81-54.82-65.09-56.09-79-115-15.4-65.21,31.15-148.14,75-152,48.53-4.27,77,89.81,124,81C226.65,94.11,224.16,67.28,262,37.72Z"],T=function(e){return o.createElement("svg",{viewBox:"0 0 "+(e.width+80)+" "+(e.width*(488.62/672.65)+50),className:u()({position:"absolute",top:0,left:0,width:e.width+"px","> path":{fill:e.color}})},o.createElement("path",{d:L[e.form]}))},B=function(e){var t={container:u()({margin:"6em 0",display:"flex",justifyContent:"center",alignItems:"center",alignContent:"center"}),inner:u()({display:"flex",width:"1200px","@media (max-width: 1300px)":{width:"1000px"},"@media (max-width: 1100px)":{width:"700px",flexDirection:"column"}}),media:u()({width:"600px",height:"450px",position:"relative",display:"flex",justifyContent:"center",alignItems:"center"}),mediaInner:u()({width:"600px",height:"450px",position:"absolute",top:0,left:0,display:"flex",justifyContent:"center",alignItems:"center"}),text:u()({width:"600px",color:"white",alignSelf:"center","> h4":{fontSize:"4em"},"> p":{fontSize:"2em",lineHeight:"1.4"}}),textLeft:u()({paddingRight:"100px",textAlign:"right"}),textRight:u()({paddingLeft:"200px"})};return o.createElement("div",{className:t.container},o.createElement("div",{className:t.inner},e.invert&&o.createElement("div",{className:[t.text,t.textLeft].join(" ")},o.createElement("h4",null,e.title),o.createElement("p",null,e.text)),o.createElement("div",{className:t.media},o.createElement(T,{color:R.a,form:e.form,width:600}),o.createElement("div",{className:t.mediaInner},e.media)),!e.invert&&o.createElement("div",{className:[t.text,t.textRight].join(" ")},o.createElement("h4",null,e.title),o.createElement("p",null,e.text))))},F=n("b2pr"),Y=n("m4+0"),z=(n("OMi8"),function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){return o.createElement("div",null,o.createElement(Y.a,null),o.createElement(i.a,null,o.createElement(l.a,null),o.createElement(N,null)),o.createElement(U,null),o.createElement(B,{media:o.createElement(j,{width:500,borderRadius:24,videoId:"C4LzKL-i2ck"}),title:"Powerful notes editor",text:"Manage your notes in a rich text editor with tons of features, or manage code snippets in the editor that powers Visual Studio Code.",form:1}),o.createElement(B,{media:o.createElement(j,{width:500,borderRadius:24,videoId:"e1Cxk_Fzmn8"}),title:"Organize your thoughts",text:"Structure your notes with nesting, tags and a powerful search.",invert:!0,form:2}),o.createElement(B,{media:o.createElement(j,{width:500,borderRadius:24,videoId:"dgt9wkyx5_M"}),title:"A notebook that scales",text:"Manage ten thousands of notes with ease, so your notebook will never become the bottleneck.",form:3}),o.createElement(U,null),o.createElement("a",{href:"https://www.producthunt.com/posts/yana-3?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-yana-3",target:"_blank",style:{border:"none",textDecoration:"none !important",textAlign:"center",display:"block"}},o.createElement("img",{src:"https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=276473&theme=dark",alt:"Yana - Powerful & organizable note-taking app with lots of features | Product Hunt",width:"250",height:"54"})),o.createElement(F.a,null))},t}(o.Component))},aUsF:function(e,t,n){"use strict";e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;var r,o,a;if(Array.isArray(t)){if((r=t.length)!=n.length)return!1;for(o=r;0!=o--;)if(!e(t[o],n[o]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((r=(a=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(o=r;0!=o--;)if(!Object.prototype.hasOwnProperty.call(n,a[o]))return!1;for(o=r;0!=o--;){var i=a[o];if(!e(t[i],n[i]))return!1}return!0}return t!=t&&n!=n}},k2N2:function(e,t){var n=1e3,r=6e4,o=60*r,a=24*o;function i(e,t,n){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+n:Math.ceil(e/t)+" "+n+"s"}e.exports=function(e,t){t=t||{};var l,s=typeof e;if("string"===s&&e.length>0)return function(e){if((e=String(e)).length>100)return;var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(!t)return;var i=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return 315576e5*i;case"days":case"day":case"d":return i*a;case"hours":case"hour":case"hrs":case"hr":case"h":return i*o;case"minutes":case"minute":case"mins":case"min":case"m":return i*r;case"seconds":case"second":case"secs":case"sec":case"s":return i*n;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return i;default:return}}(e);if("number"===s&&!1===isNaN(e))return t.long?i(l=e,a,"day")||i(l,o,"hour")||i(l,r,"minute")||i(l,n,"second")||l+" ms":function(e){if(e>=a)return Math.round(e/a)+"d";if(e>=o)return Math.round(e/o)+"h";if(e>=r)return Math.round(e/r)+"m";if(e>=n)return Math.round(e/n)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},lv48:function(e,t,n){var r;function o(e){function n(){if(n.enabled){var e=n,o=+new Date,a=o-(r||o);e.diff=a,e.prev=r,e.curr=o,r=o;for(var i=new Array(arguments.length),l=0;l<i.length;l++)i[l]=arguments[l];i[0]=t.coerce(i[0]),"string"!=typeof i[0]&&i.unshift("%O");var s=0;i[0]=i[0].replace(/%([a-zA-Z%])/g,(function(n,r){if("%%"===n)return n;s++;var o=t.formatters[r];if("function"==typeof o){var a=i[s];n=o.call(e,a),i.splice(s,1),s--}return n})),t.formatArgs.call(e,i);var u=n.log||t.log||console.log.bind(console);u.apply(e,i)}}return n.namespace=e,n.enabled=t.enabled(e),n.useColors=t.useColors(),n.color=function(e){var n,r=0;for(n in e)r=(r<<5)-r+e.charCodeAt(n),r|=0;return t.colors[Math.abs(r)%t.colors.length]}(e),"function"==typeof t.init&&t.init(n),n}(t=e.exports=o.debug=o.default=o).coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){t.enable("")},t.enable=function(e){t.save(e),t.names=[],t.skips=[];for(var n=("string"==typeof e?e:"").split(/[\s,]+/),r=n.length,o=0;o<r;o++)n[o]&&("-"===(e=n[o].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){var n,r;for(n=0,r=t.skips.length;n<r;n++)if(t.skips[n].test(e))return!1;for(n=0,r=t.names.length;n<r;n++)if(t.names[n].test(e))return!0;return!1},t.humanize=n("k2N2"),t.names=[],t.skips=[],t.formatters={}},"s/rx":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=["ready","stateChange","playbackQualityChange","playbackRateChange","error","apiChange","volumeChange"],e.exports=t.default},t0y4:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=["cueVideoById","loadVideoById","cueVideoByUrl","loadVideoByUrl","playVideo","pauseVideo","stopVideo","getVideoLoadedFraction","cuePlaylist","loadPlaylist","nextVideo","previousVideo","playVideoAt","setShuffle","setLoop","getPlaylist","getPlaylistIndex","setOption","mute","unMute","isMuted","setVolume","getVolume","seekTo","getPlayerState","getPlaybackRate","setPlaybackRate","getAvailablePlaybackRates","getPlaybackQuality","setPlaybackQuality","getAvailableQualityLevels","getCurrentTime","getDuration","removeEventListener","getVideoUrl","getVideoEmbedCode","getOptions","getOption","addEventListener","destroy","setSize","getIframe"],e.exports=t.default},u6sg:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={BUFFERING:3,ENDED:0,PAUSED:2,PLAYING:1,UNSTARTED:-1,VIDEO_CUED:5},e.exports=t.default}}]);
//# sourceMappingURL=component---src-pages-index-tsx-86bd29b5e28f6a7352a7.js.map