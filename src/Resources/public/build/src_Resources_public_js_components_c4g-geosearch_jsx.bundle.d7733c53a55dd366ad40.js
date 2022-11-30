"use strict";(self.webpackChunkmapsbundle=self.webpackChunkmapsbundle||[]).push([["src_Resources_public_js_components_c4g-geosearch_jsx"],{"./src/Resources/public/js/components/c4g-geosearch.jsx":(e,t,o)=>{var s=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js"),n=o("./node_modules/@babel/runtime/helpers/typeof.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=s(o("./node_modules/@babel/runtime/helpers/typeof.js")),r=s(o("./node_modules/@babel/runtime/helpers/classCallCheck.js")),l=s(o("./node_modules/@babel/runtime/helpers/createClass.js")),i=s(o("./node_modules/@babel/runtime/helpers/assertThisInitialized.js")),c=s(o("./node_modules/@babel/runtime/helpers/inherits.js")),u=s(o("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),p=s(o("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),d=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var o=x(t);if(o&&o.has(e))return o.get(e);var s={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var l=a?Object.getOwnPropertyDescriptor(e,r):null;l&&(l.get||l.set)?Object.defineProperty(s,r,l):s[r]=e[r]}return s.default=e,o&&o.set(e,s),s}(o("./node_modules/react/index.js")),h=o("./node_modules/ol/control.js"),f=o("./src/Resources/public/js/c4g-maps-i18n.js"),g=o("./src/Resources/public/js/c4g-maps-constant.js"),m=o("./node_modules/ol/proj.js"),C=o("./node_modules/ol/easing.js"),y=o("./node_modules/ol/source.js"),v=o("./node_modules/ol/layer.js"),b=o("./node_modules/ol/style.js"),w=o("./node_modules/ol/index.js"),k=o("./node_modules/ol/geom.js"),R=o("./node_modules/ol/render.js"),S=o("./node_modules/ol/Observable.js"),j=o("./src/Resources/public/js/c4g-maps-utils.js"),_=o("./node_modules/ol/extent.js");function x(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,o=new WeakMap;return(x=function(e){return e?o:t})(e)}var P=d.default.lazy((function(){return o.e("src_Resources_public_js_components_c4g-geosearch-results_jsx").then(o.bind(o,"./src/Resources/public/js/components/c4g-geosearch-results.jsx"))})),E=d.default.lazy((function(){return Promise.resolve().then(o.bind(o,"./src/Resources/public/js/components/c4g-titlebar.jsx"))})),T=function(e){(0,c.default)(n,e);var t,o,s=(t=n,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,s=(0,p.default)(t);if(o){var n=(0,p.default)(this).constructor;e=Reflect.construct(s,arguments,n)}else e=s.apply(this,arguments);return(0,u.default)(this,e)});function n(e){var t;(0,r.default)(this,n),(t=s.call(this,e)).langConstants=(0,f.getLanguage)(e.mapController.data),t.clickControl=t.clickControl.bind((0,i.default)(t)),t.doneFunction=t.doneFunction.bind((0,i.default)(t));var o=document.createElement("div"),a=document.createElement("button");if(a.setAttribute("aria-label",t.langConstants.CTRL_GEOSEARCH),a.setAttribute("title",t.langConstants.CTRL_GEOSEARCH),o.className="c4g-geosearch ol-control ol-unselectable",o.appendChild(a),jQuery(a).on("click",(function(){t.clickControl()})),e.external&&(o.className+=" c4g-external"),e.mapController.data.geosearch.inputCssSelector){var l=document.querySelector(e.mapController.data.geosearch.inputCssSelector);l.setAttribute("id","c4g-geosearch-input"),l.addEventListener("keydown",(function(e){t.inputCallback(e)})),t.input=l}else{var c=document.createElement("input");c.setAttribute("id","c4g-geosearch-input"),e.collapsed?jQuery(c).addClass("c4g-close"):jQuery(c).addClass("c4g-open"),c.addEventListener("keydown",(function(e){t.inputCallback(e)})),o.appendChild(c),t.input=c;var u=document.createElement("span");u.addEventListener("click",(function(){t.clickControl(!0)})),jQuery(u).addClass("searchSpan");var p=document.createElement("i");p.innerHTML='<i class="far fa-times-circle"></i>',u.appendChild(p),o.appendChild(u)}t.controlElement=o;var d=new h.Control({element:o,target:e.target});if(e.mapController.map.addControl(d),t.config={},e.mapController.data.geosearch.searchKey&&e.mapController.data.geosearch.url?(t.config.url=e.mapController.data.geosearch.url+"search.php",t.config.key=e.mapController.data.geosearch.searchKey,t.config.params=e.mapController.data.geosearch.params):t.config.url=e.mapController.data.api.geosearch+"/"+e.mapController.data.profile,t.config.zoomlevel=e.searchZoom,t.config.zoombounds=e.zoomBounds,t.config.quicksearch=e.quicksearch||!0,t.config.animate=e.animate,t.config.markResult=e.markResult,t.config.animateDuration=e.animateDuration,t.config.resultDuration=e.resultDuration,t.config.popup=e.popup,t.config.autopick=e.autopick,t.config.mapController=e.mapController,t.config.results=e.results,t.config.resultStyle=e.resultStyle,t.config.resultStyle&&parseInt(t.config.resultStyle,10)>0){var g=(0,i.default)(t);e.mapController.proxy.locationStyleController.arrLocStyles[t.config.resultStyle]?t.config.resultStyle=e.mapController.proxy.locationStyleController.arrLocStyles[t.config.resultStyle].style:e.mapController.proxy.locationStyleController.loadLocationStyles([t.config.resultStyle],{done:function(){g.config.resultStyle=e.mapController.proxy.locationStyleController.arrLocStyles[g.config.resultStyle].style}})}return t.config.collapsed=e.collapsed,t.config.resultCount=e.resultCount,t.config.caching=e.caching,t.config.placeholder=e.placeholder,t.state={open:!e.collapsed,query:"",results:[],currentCoordinate:[],openResults:!1,currentResult:null},t.inputCallback=t.inputCallback.bind((0,i.default)(t)),t.startSearch=t.startSearch.bind((0,i.default)(t)),t.zoomTo=t.zoomTo.bind((0,i.default)(t)),t.closeResults=t.closeResults.bind((0,i.default)(t)),t.openResults=t.openResults.bind((0,i.default)(t)),t.close=t.close.bind((0,i.default)(t)),t.closeResultsCompletely=t.closeResultsCompletely.bind((0,i.default)(t)),t}return(0,l.default)(n,[{key:"render",value:function(){var e=this,t=this.state.open&&this.state.openResults?"c4g-open":"c4g-close";this.props.extDiv&&(t+=" external ");var o="";this.state.openResults&&this.config.results&&(o=d.default.createElement(P,{className:t,results:this.state.results,extDiv:this.props.extResultsDiv,zoomFunc:function(t){e.setState({currentResult:e.state.results[t]}),e.zoomTo(t)},closeResults:this.closeResults,headline:this.props.resultsHeadline,currentResult:this.state.currentResult,resultsDiv:this.props.resultsDiv,open:this.state.results.length>0,openResults:this.openResults,closeCb:this.closeResultsCompletely}));var s="",n="";this.props.external||(s="c4g-titlebar-close",n=this.clickControl);var a=this.props.headline;a||(a=this.langConstants.GEOSEARCH);var r=null;return this.props.external&&(r=d.default.createElement("div",{className:"c4g-geosearch-filter"},d.default.createElement("input",{type:"text",onKeyDown:this.inputCallback,id:"c4g-geosearch-input",placeholder:this.config.placeholder,"aria-label":this.config.placeholder}),d.default.createElement("button",{className:g.cssConstants.GEOSEARCH_START,type:"button",title:this.langConstants.CTRL_START_SEARCH,onMouseUp:this.startSearch}))),this.props.external||this.state.open&&this.state.openResults?d.default.createElement(d.default.Fragment,null,d.default.createElement("div",{className:g.cssConstants.GEOSEARCH_WRAPPER+" "+t+" c4g-horizon"},d.default.createElement(d.Suspense,{fallback:d.default.createElement("div",null,"Loading...")},d.default.createElement(E,{wrapperClass:"c4g-geosearch-header",header:a,headerClass:"c4g-geosearch-headline",detailBtnClass:"",detailBtnCb:"",closeBtnClass:s,closeBtnCb:n,closeBtnTitle:this.langConstants.CLOSE})),r,o)):null}},{key:"closeResultsCompletely",value:function(){this.setState({openResults:!1})}},{key:"componentDidUpdate",value:function(e,t,o){this.props.mapController&&this.props.mapController.data&&this.props.mapController.data.geosearch&&this.props.mapController.data.geosearch.results&&(this.state.open?(t.open!==this.state.open&&this.state.results&&this.state.results.length&&this.props.mapController.setOpenComponent(this),this.state.openResults&&!this.props.extResultsDiv&&jQuery(".c4g-geosearch-container-right").addClass("c4g-open").removeClass("c4g-close")):jQuery(".c4g-geosearch-container-right").addClass("c4g-close").removeClass("c4g-open"),this.props.mapController.data.caching&&!this.state.open&&j.utils.getValue("panel")===this.constructor.name&&j.utils.storeValue("panel",""))}},{key:"close",value:function(){this.setState({open:!1})}},{key:"startSearch",value:function(e){e.stopPropagation();var t=document.querySelector(g.cssConstants.GEOSEARCH_START);try{t.blur()}catch(e){}var o=jQuery("#c4g-geosearch-input");o.val()&&this.findLocation(o.val())}},{key:"inputCallback",value:function(e){if(e.stopPropagation(),13===e.which){var t=jQuery("#c4g-geosearch-input");return t.val()&&this.findLocation(t.val()),!1}}},{key:"clickControl",value:function(e){(void 0!==e?e:this.state.open)?(this.setState({open:!1}),this.props.external||jQuery(this.input).addClass("c4g-close").removeClass("c4g-open")):(this.setState({open:!0}),this.props.external||(jQuery(this.input).removeClass("c4g-close").addClass("c4g-open"),this.input.focus()))}},{key:"closeResults",value:function(){this.setState({detailOpenResults:!1})}},{key:"openResults",value:function(){this.setState({detailOpenResults:!0})}},{key:"findLocation",value:function(e,t){var o,s=this;if((o=this.props.mapController).map,o.spinner.show(),this.config.animate,this.config.animateDuration,this.config.markResult,"object"===(0,a.default)(t)&&(void 0!==t.animate&&t.animate,void 0!==t.markResult&&t.markResult),this.config.quicksearch){var n={format:"json",q:e};if(this.config.resultCount&&(n.limit=this.config.resultCount),this.config.key&&(n.key=this.config.key),this.config.params)for(var r in this.config.params)this.config.params.hasOwnProperty(r)&&(n[r]=this.config.params[r]);var l=j.utils.callHookFunctions(window.c4gMapsHooks.hook_search,[n,this]);if(l&&l.length>0)for(var i in this.config.mapController.spinner.hide(),l)l.hasOwnProperty(i)&&this.doneFunction(l[i]);else jQuery.ajax({dataType:"json",url:this.config.url,data:n}).done(this.doneFunction).fail((function(){})).always((function(){s.config.mapController.spinner.hide()}))}}},{key:"doneFunction",value:function(e){var t,o,s,n,r=this.props.mapController.map,l=this.config.animate,i=(this.config.animateDuration,this.config.markResult);if(e&&e.length&&e.length>0){if(t=r.getView(),e[0]){n=e[0],this.results=e,o=t.getCenter(),s=(0,m.transform)([parseFloat(n.lon),parseFloat(n.lat)],"EPSG:4326","EPSG:3857"),l?this.flyTo(r,s,this.config.zoomlevel,this.config.zoombounds,n.bounding_box,i,this.config.resultDuration,l,this.config.animateDuration,r.getView()):(this.completeSearch(this.config.markResult,this.config.animate,void 0,this.config.animateDuration,s,this.config.resultDuration),t.setCenter(s),this.config.zoomlevel>=0&&r.getView().setZoom(this.config.zoomlevel));var c=r.getPixelFromCoordinate(s),u=r.forEachFeatureAtPixel(c,(function(e,t){return e}),{hitTolerance:4}),p=r.forEachFeatureAtPixel(c,(function(e,t){return t}),{hitTolerance:4});if(u=u&&u.get("features")&&u.get("features").length>0?u.get("features")[0]:u,this.config.popup){var d,h={};u&&u.get("popup")?h=u.get("popup"):p&&p.popup?h=p.popup:u=!1;var C=this;if(u){var y=u.getGeometry();if(y instanceof k.Point)var v=y.getCoordinates();else v=s;window.c4gMapsPopup.popup.setPosition(v);var b=this.props.mapController.data;h.content&&("3"!==b.popupHandling&&(window.c4gMapsPopup.$content&&window.c4gMapsPopup.$content.html(""),window.c4gMapsPopup.$popup&&window.c4gMapsPopup.$popup.addClass(g.cssConstants.ACTIVE).addClass(g.cssConstants.LOADING),window.c4gMapsPopup.spinner.show()),!1===h.async||"0"==h.async?((d={}).popup=h,d.feature=u,d.layer=p,void 0!==window.c4gMapsHooks&&"object"===(0,a.default)(window.c4gMapsHooks.proxy_fillPopup)&&j.utils.callHookFunctions(window.c4gMapsHooks.proxy_fillPopup,{popup:d,mapController:this.props.mapController}),this.props.mapController.proxy.popupController.currentPopup||this.props.mapController.proxy.popupController.addPopUp(!1),this.props.mapController.proxy.popupController.setPopup(d)):jQuery.ajax({dataType:"json",url:this.props.mapController.proxy.api_infowindow_url+"/"+h.content}).done((function(e){var t={async:h.async,content:e.content,popup:h.popup,routing_link:h.routing_link};(d={}).popup=t,d.feature=u,d.layer=p,void 0!==window.c4gMapsHooks&&"object"===(0,a.default)(window.c4gMapsHooks.proxy_fillPopup)&&j.utils.callHookFunctions(window.c4gMapsHooks.proxy_fillPopup,{popup:d,mapController:C.props.mapController}),C.props.mapController.proxy.popupController.currentPopup||C.props.mapController.proxy.popupController.addPopUp(!1),C.props.mapController.proxy.popupController.setPopup(d)})))}else window&&window.c4gMapsPopup&&window.c4gMapsPopup.popup&&jQuery(window.c4gMapsPopup.popup).removeClass(g.cssConstants.ACTIVE)}this.config.autopick&&this.config.mapController.geopicker&&"function"==typeof this.config.mapController.geopicker.pick&&this.config.mapController.geopicker.pick(s)}else{var w=(0,f.getLanguage)(this.options.mapController.data);alert(w.SEARCH_NOT_FOUND)}if(this.results){for(var R=[],S=0;S<this.results.length;S++)R.push(this.results[S].display_name);this.props.mapController.hideOtherComponents(this),this.setState({results:R,open:!0,currentCoordinate:o,openResults:!0,currentResult:R[0]}),this.props.mapController.setOpenComponent(this)}}}},{key:"flyTo",value:function(e,t,o,s,n,a,r,l,i,c){var u,p=i,d=o,h=2,f=!1,g=this;function y(o){if(--h,!(f||0!==h&&o)){if(f=!0,s&&n&&null!==n[0]&&null!==n[1]&&null!==n[2]&&null!==n[3]){var y=[];y.push(parseFloat(n[2])),y.push(parseFloat(n[0])),y.push(parseFloat(n[3])),y.push(parseFloat(n[1])),u=(0,m.transformExtent)(y,"EPSG:4326","EPSG:3857"),window.setTimeout((function(){c.fit(u,e.getSize(),{minZoom:c.get("minZoom")||2,maxZoom:d||c.get("maxZoom")||18,duration:p/2,easing:C.easeOut})}),p)}g.completeSearch(a,l,"bounce",i,t,r)}}e.getView().animate({center:t,duration:p},y),e.getView().animate({zoom:d-1,duration:p/2},{zoom:d,duration:p/2},y)}},{key:"completeSearch",value:function(e,t,o,s,n,a){if(e){var r,l,i,c;l=new y.Vector;var u=this.config.resultStyle;u&&"0"!==u||(u=[new b.Style({image:new b.Circle({radius:7,snapToPixel:!1,stroke:new b.Stroke({color:"rgba(200, 0, 0, 0.9)",width:2,opacity:.9})})}),new b.Style({image:new b.Circle({radius:20,snapToPixel:!1,stroke:new b.Stroke({color:"rgba(200, 0, 0, 0.9)",width:2,opacity:.9})})}),new b.Style({image:new b.Circle({radius:33,snapToPixel:!1,stroke:new b.Stroke({color:"rgba(200, 0, 0, 0.9)",width:2,opacity:.9})})})]),i=new v.Vector({style:u,source:l,zIndex:99999}),this.props.mapController.map.addLayer(i),r=function(){l.addFeature(new w.Feature(new k.Point(n)))},c=function(e){var t,o,s,n;o=(new Date).getTime(),s=a,t=function(t){var a,r,i,c,u;a=(0,R.getVectorContext)(t),r=t.frameState,u=e.getGeometry().clone(),c=(i=r.time-o)/s,(0,C.linear)(1-c),(0,C.linear)(c);var p=new b.Style;if(a.setStyle(p),a.drawGeometry(u,null),i>s)return l.clear(),void(0,S.unByKey)(n);r.animate=!0},n=i.on("postrender",t)},l.on("addfeature",(function(e){c(e.feature)})),t?window.setTimeout(r,s/2):r()}}},{key:"zoomTo",value:function(e){var t,o,s,n,a=(t=this.props.mapController.map).getView(),r=this.state.currentCoordinate;if(o=this.results[e],s=(0,m.transform)([parseFloat(o.lon),parseFloat(o.lat)],"EPSG:4326","EPSG:3857"),this.config.animate){a.getResolution();var l=a.calculateExtent(t.getSize());if((0,_.containsCoordinate)(l,s))n="zoom";else{if(Math.abs(r[0]-s[0])>Math.abs(r[1]-s[1]))Math.abs(r[0]-s[0]),(0,_.getWidth)(l);else Math.abs(r[1]-s[1]),(0,_.getHeight)(l);n="bounce"}this.flyTo(t,s,this.config.zoomlevel,this.config.zoombounds,o.bounding_box,this.config.markResult,this.config.resultDuration,this.config.animate,this.config.animateDuration,a)}else this.completeSearch(this.config.markResult,this.config.animate,n,this.config.animateDuration,s,this.config.resultDuration),t.getView().setCenter(s),this.config.zoomlevel>=0&&t.getView().setZoom(this.config.zoomlevel)}}]),n}(d.Component);t.default=T}}]);