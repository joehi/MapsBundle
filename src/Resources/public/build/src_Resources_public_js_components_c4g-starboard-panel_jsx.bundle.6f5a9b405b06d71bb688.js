"use strict";(self.webpackChunkmapsbundle=self.webpackChunkmapsbundle||[]).push([["src_Resources_public_js_components_c4g-starboard-panel_jsx"],{"./src/Resources/public/js/components/c4g-starboard-layer-element.jsx":(e,t,r)=>{var a=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js"),s=r("./node_modules/@babel/runtime/helpers/typeof.js");Object.defineProperty(t,"__esModule",{value:!0}),t.C4gStarboardLayerElement=void 0;var l=a(r("./node_modules/@babel/runtime/helpers/defineProperty.js")),o=a(r("./node_modules/@babel/runtime/helpers/classCallCheck.js")),n=a(r("./node_modules/@babel/runtime/helpers/createClass.js")),i=a(r("./node_modules/@babel/runtime/helpers/assertThisInitialized.js")),c=a(r("./node_modules/@babel/runtime/helpers/inherits.js")),p=a(r("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),u=a(r("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),d=b(r("./node_modules/react/index.js")),h=(b(r("./node_modules/ol/extent.js")),r("./src/Resources/public/js/c4g-maps-constant.js")),f=r("./src/Resources/public/js/components/c4g-starboard-style.jsx"),y=r("./node_modules/ol/layer.js");function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(m=function(e){return e?r:t})(e)}function b(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==s(e)&&"function"!=typeof e)return{default:e};var r=m(t);if(r&&r.has(e))return r.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var n=l?Object.getOwnPropertyDescriptor(e,o):null;n&&(n.get||n.set)?Object.defineProperty(a,o,n):a[o]=e[o]}return a.default=e,r&&r.set(e,a),a}var g=function(e){(0,c.default)(s,e);var t,r,a=(t=s,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,u.default)(t);if(r){var s=(0,u.default)(this).constructor;e=Reflect.construct(a,arguments,s)}else e=a.apply(this,arguments);return(0,p.default)(this,e)});function s(e){var t;return(0,o.default)(this,s),t=a.call(this,e),(0,i.default)(t),t.layerClick=t.layerClick.bind((0,i.default)(t)),t.layerZoomTo=t.layerZoomTo.bind((0,i.default)(t)),t.spanClick=t.spanClick.bind((0,i.default)(t)),t.changeCollapseState=t.changeCollapseState.bind((0,i.default)(t)),t.parentCallback=t.parentCallback.bind((0,i.default)(t)),t}return(0,n.default)(s,[{key:"showLayer",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=this,r=!1,a=!1;e?Array.isArray(e)?r=e:e instanceof y.Vector&&(a=e):(r=r||t.props.layer.features,a=a||t.props.layer.vectorLayer),r=r||t.props.layer.features;var s=t.props.mapController.proxy.layerController;r&&r.length>0?s.show(t.props.layer.loader,r,t.props.id):a?s.show(t.props.layer.loader,a,t.props.id):s.show(!1,!1,t.props.id),t.props.mapController.setLayerStateWithId(t.props.id,!0)}},{key:"hideLayer",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=this,r=!1,a=!1;e?Array.isArray(e)?r=e:e instanceof y.Vector&&(a=e):(r=r||t.props.layer.features,a=a||t.props.layer.vectorLayer);var s=t.props.mapController.proxy.layerController;r&&r.length>0?s.hide(t.props.layer.loader,r,t.props.id):a?s.hide(t.props.layer.loader,a,t.props.id):s.hide(!1,!1,t.props.id),t.props.mapController.setLayerStateWithId(t.props.id,!1)}},{key:"changeChildState",value:function(e,t,r){if(r?this.showLayer(e.features||e.vectorLayer):this.hideLayer(e.features||e.vectorLayer),e.childs&&e.childs.length>0)for(var a in e.childs)e.childs.hasOwnProperty(a)&&t.childStates[a].active!==r&&(t.childStates[a]=this.changeChildState(e.childs[a],t.childStates[a],r));return this.props.mapController.setLayerStateWithId(t.id,r),t.active=r,t}},{key:"parentCallback",value:function(e,t){var r=this.props.layerStates;r.childStates[e]=t,r.active!=t.active&&(t.active?this.showLayer():this.hideLayer()),this.props.parentCallback(this.props.keyId,r)}},{key:"layerEnter",value:function(e){13===e.which&&this.layerClick(e)}},{key:"layerClick",value:function(e){if(e.stopPropagation(),e.nativeEvent.stopImmediatePropagation(),this.props.layerStates.greyed)return!1;if(this.props.layerStates.active)this.hideLayer();else if(this.showLayer(),this.props.layerStates.collapsed){var t=this.props.layerStates;t.collapsed=!1,this.props.changeCollapseState(this.props.keyId,t)}var r=this.props.layerStates;if(this.props.layer.childs&&this.props.layer.childs.length>0&&!this.props.layer.ignoreChilds){var a=this.props.layer.childs;for(var s in a)a.hasOwnProperty(s)&&r.childStates[s].active!==r.active&&(r.childStates[s]=this.changeChildState(a[s],r.childStates[s],r.active))}}},{key:"layerZoomTo",value:function(e){var t=this;this.props.layerStates.active||this.layerClick(e),this.props.mapController.proxy.layerController.zoomTo(this.props.layer),this.props.mapController.proxy.layerController.setChildFeatureFlag(this.props.layer,"markLocstyle",!0),window.setTimeout((function(){t.props.mapController.proxy.layerController.setChildFeatureFlag(t.props.layer,"markLocstyle",!1)}),3e3)}},{key:"layerZoomToEnter",value:function(e){13===e.which&&this.layerZoomTo(e)}},{key:"changeCollapseState",value:function(e,t){this.props.layerStates.childStates[e]=t,this.props.changeCollapseState(this.props.keyId,this.props.layerStates)}},{key:"spanClick",value:function(e){e.stopPropagation(),e.nativeEvent.stopImmediatePropagation(),this.props.layerStates.collapsed=!this.props.layerStates.collapsed,this.props.changeCollapseState(this.props.keyId,this.props.layerStates)}},{key:"render",value:function(){var e=this,t=null,r=null;"1"===this.props.mapController.data.starboard.showLocstyles&&this.props.layer.locstyle&&this.props.styleData&&this.props.styleData.arrLocStyles&&this.props.styleData.arrLocStyles[this.props.layer.locstyle]?t=this.props.layer.zoomTo?d.default.createElement(f.C4gStarboardStyle,{styleData:this.props.styleData,styleId:this.props.layer.locstyle,tooltip:this.props.lang.STARBOARD_ELEMENT_ZOOM_BEFORE+this.props.layer.name+this.props.lang.STARBOARD_ELEMENT_ZOOM_AFTER,clickEvent:this.layerZoomTo}):d.default.createElement(f.C4gStarboardStyle,{styleData:this.props.styleData,styleId:this.props.layer.locstyle,tooltip:this.props.layer.name}):this.props.layer.zoomTo&&!this.props.mapController.data.starboard.invertZoomActivate&&(r=d.default.createElement("span",{className:"c4g-geojson-button",title:this.props.lang.STARBOARD_ELEMENT_ZOOM_BEFORE+this.props.layer.name+this.props.lang.STARBOARD_ELEMENT_ZOOM_AFTER,onMouseUp:function(t){return e.layerZoomTo(t)}}));var a=this.props.layerStates.active?h.cssConstants.ACTIVE:h.cssConstants.INACTIVE;this.props.layerStates.greyed&&(a+=" "+h.cssConstants.DISABLED);var o,n,i=this.props.layerStates.collapsed?h.cssConstants.CLOSE:h.cssConstants.OPEN,c=this.props.layer.childs;if(this.props.mapController.data.starboard.invertZoomActivate&&this.props.layer.zoomTo?(o=d.default.createElement(d.default.Fragment,null,d.default.createElement("a",(0,l.default)({tabIndex:1,title:this.props.layer.name,alt:this.props.lang.STARBOARD_ELEMENT_TRIGGER_1+this.props.layer.name+this.props.lang.STARBOARD_ELEMENT_TRIGGER_2,className:"c4g-starboard-text",onKeyPress:function(t){return e.layerEnter(t)},onMouseUp:function(t){return e.layerZoomTo(t)}},"onKeyPress",(function(t){return e.layerZoomToEnter(t)})),this.props.layer.name)),n=d.default.createElement("a",{className:a+" c4g-starboard-checkbox-icon",onMouseUp:function(t){return e.layerClick(t)}})):o=d.default.createElement("a",{tabIndex:1,title:this.props.layer.name,alt:this.props.lang.STARBOARD_ELEMENT_TRIGGER_1+this.props.layer.name+this.props.lang.STARBOARD_ELEMENT_TRIGGER_2,className:a,onKeyPress:function(t){return e.layerEnter(t)},onMouseUp:function(t){return e.layerClick(t)}},this.props.layer.name),c&&c.length){var p=d.default.createElement("span",{alt:this.props.lang.STARBOARD_ELEMENT_CHILDS,className:h.cssConstants.ICON,onMouseUp:function(t){return e.spanClick(t)}});return d.default.createElement("li",{"data-layer-id":this.props.id,className:i+" c4g-starboard-list-element"},p,t,r,o,n,d.default.createElement("ul",null,c.map((function(t,r){if(e.props.byPassChilds||e.props.filterFunc(e.props.strFilter,t,e.props.layerStates.childStates[r]))return d.default.createElement(s,{key:r,keyId:r,id:t.id,mapController:e.props.mapController,parentCallback:e.parentCallback,strFilter:e.props.strFilter,filterFunc:e.props.filterFunc,changeCollapseState:e.changeCollapseState,lang:e.props.lang,byPassChilds:e.props.byPassChilds||e.props.filterFunc(e.props.strFilter,t,!1,!1),layerStates:e.props.layerStates.childStates[r],layer:t,styleData:e.props.styleData,fnResize:e.props.fnResize})}))))}return this.layerClick,this.props.layer.zoomTo&&(this.layerZoomTo,a="c4g-geojson-button",n=null),d.default.createElement("li",{"data-layer-id":this.props.id,tabIndex:1,className:i+" c4g-starboard-list-element"},t,r,o,n)}}]),s}(d.Component);t.C4gStarboardLayerElement=g},"./src/Resources/public/js/components/c4g-starboard-layerswitcher.jsx":(e,t,r)=>{var a=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js"),s=r("./node_modules/@babel/runtime/helpers/typeof.js");Object.defineProperty(t,"__esModule",{value:!0}),t.StarboardLayerswitcher=void 0;var l=a(r("./node_modules/@babel/runtime/helpers/classCallCheck.js")),o=a(r("./node_modules/@babel/runtime/helpers/createClass.js")),n=a(r("./node_modules/@babel/runtime/helpers/assertThisInitialized.js")),i=a(r("./node_modules/@babel/runtime/helpers/inherits.js")),c=a(r("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),p=a(r("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),u=a(r("./node_modules/@babel/runtime/helpers/defineProperty.js")),d=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!==s(e)&&"function"!=typeof e)return{default:e};var r=y(t);if(r&&r.has(e))return r.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var n=l?Object.getOwnPropertyDescriptor(e,o):null;n&&(n.get||n.set)?Object.defineProperty(a,o,n):a[o]=e[o]}return a.default=e,r&&r.set(e,a),a}(r("./node_modules/react/index.js")),h=r("./src/Resources/public/js/c4g-maps-constant.js"),f=r("./src/Resources/public/js/components/c4g-starboard-layer-element.jsx");function y(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(y=function(e){return e?r:t})(e)}var m=function(e){(0,i.default)(s,e);var t,r,a=(t=s,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,p.default)(t);if(r){var s=(0,p.default)(this).constructor;e=Reflect.construct(a,arguments,s)}else e=a.apply(this,arguments);return(0,c.default)(this,e)});function s(e){var t;return(0,l.default)(this,s),t=a.call(this,e),(0,u.default)((0,n.default)(t),"getInitialStates",(function(){for(var e in t.initialCounterOff=0,t.initialCounterOn=0,t.props.layerStates)if(t.props.layerStates.hasOwnProperty(e)&&(t.props.layerStates[e].active?t.initialCounterOn++:t.initialCounterOff++,t.props.layerStates[e].childStates))for(var r in t.props.layerStates[e].childStates)t.props.layerStates[e].childStates.hasOwnProperty(r)&&t.getInitialStateChild(t.props.layerStates[e].childStates[r]);return t.initialCounterOn>t.initialCounterOff})),(0,u.default)((0,n.default)(t),"callbackFunction",(function(e,r){var a=t.props.layerStates;a[e]=r,t.props.parentCallback(a)})),(0,n.default)(t),t.setLayerFilter=t.setLayerFilter.bind((0,n.default)(t)),t.toggleAllLayers=t.toggleAllLayers.bind((0,n.default)(t)),t.changeCollapseState=t.changeCollapseState.bind((0,n.default)(t)),t.state={initialized:!1,layerFilter:""},t}return(0,o.default)(s,[{key:"getInitialStateChild",value:function(e){if(e.active?this.initialCounterOn++:this.initialCounterOff++,e.childStates)for(var t in e.childStates)e.childStates.hasOwnProperty(t)&&this.getInitialStateChild(e.childStates[t])}},{key:"setLayerFilter",value:function(){var e=jQuery(".c4g-starboard-layertree-filter-field").val()||"";this.setState({layerFilter:e})}},{key:"filterFunc",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],s=!1;if(t&&t.name&&(-1!==t.name.toLowerCase().indexOf(e.toLowerCase())||-1!==t.name.toUpperCase().indexOf(e.toUpperCase())))s=!0,e&&r&&(r.collapsed=!1);else if(t.tags&&t.tags.find((function(t){return-1!==t.toLowerCase().indexOf(e.toLowerCase())})))s=!0,e&&r&&(r.collapsed=!1);else if(a)for(var l in t.childs)t.childs.hasOwnProperty(l)&&!s&&(s=this.filterFunc(e,t.childs[l],r.childStates[l]),e&&s&&r&&(r.collapsed=!1));return s}},{key:"toggleAllLayers",value:function(){var e=this,t=this.props.layerStates,r=this.props.objLayers;t=e.buttonEnabled?function t(r,a){for(var s=0;s<a.length;s++)a[s].active&&e.props.mapController.proxy.layerController.hide(r[s].loader,r[s].features||r[s].vectorLayer),a[s].active=!1,a[s].childStates&&a[s].childStates.length>0&&(a[s].childStates=t(r[s].childs,a[s].childStates));return e.buttonEnabled=!1,a}(r,t):function t(r,a){for(var s=0;s<a.length;s++)a[s].active||e.props.mapController.proxy.layerController.show(r[s].loader,r[s].features||r[s].vectorLayer),a[s].active=!0,a[s].childStates&&a[s].childStates.length>0&&(a[s].childStates=t(r[s].childs,a[s].childStates));return e.buttonEnabled=!0,a}(r,t),this.props.parentCallback(t)}},{key:"changeCollapseState",value:function(e,t){}},{key:"render",value:function(){var e,t,r,a=this;if(!(this.props.layerStates&&this.props.layerStates.length>0)||this.initialCounterOff&&this.initialCounterOn||(this.buttonEnabled=this.getInitialStates()),e=this.props.objLayers,t=this.props.layerStates,!this.props.active)return null;r="",this.props.mapController.data.layerswitcher.filter&&(r=d.default.createElement("div",{className:"c4g-starboard-layertree-filter without-button"},d.default.createElement("input",{className:"c4g-starboard-layertree-filter-field",type:"text",onInput:this.setLayerFilter,placeholder:""})));var s;return s=this.props.mapController.data.starboard.button?d.default.createElement("a",{className:"c4g-starboard-headline-link "+(this.buttonEnabled?"c4g-active":"c4g-inactive"),onMouseUp:this.toggleAllLayers},this.props.headline||this.props.lang.LAYERSWITCHER_TOGGLE_ALL):d.default.createElement("div",{className:"contentHeadline"},this.props.headline),d.default.createElement(d.default.Fragment,null,s,r,d.default.createElement("div",{className:"c4g-content-layertree"},d.default.createElement("div",{className:h.cssConstants.STARBOARD_LAYERTREE},d.default.createElement("ul",null,e.map((function(e,r){if(a.filterFunc(a.state.layerFilter,e,t[r]))return d.default.createElement(f.C4gStarboardLayerElement,{key:r,keyId:r,id:e.id,mapController:a.props.mapController,parentCallback:a.callbackFunction,layer:e,styleData:a.props.styleData,changeCollapseState:a.props.changeCollapseState,layerStates:t[r],lang:a.props.lang,byPassChilds:a.filterFunc(a.state.layerFilter,e,!1,!1),strFilter:a.state.layerFilter,filterFunc:a.filterFunc,fnResize:a.props.fnResize})}))))))}}]),s}(d.Component);t.StarboardLayerswitcher=m},"./src/Resources/public/js/components/c4g-starboard-panel.jsx":(e,t,r)=>{var a=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js"),s=r("./node_modules/@babel/runtime/helpers/typeof.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(r("./node_modules/@babel/runtime/helpers/classCallCheck.js")),o=a(r("./node_modules/@babel/runtime/helpers/createClass.js")),n=a(r("./node_modules/@babel/runtime/helpers/assertThisInitialized.js")),i=a(r("./node_modules/@babel/runtime/helpers/inherits.js")),c=a(r("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),p=a(r("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),u=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!==s(e)&&"function"!=typeof e)return{default:e};var r=b(t);if(r&&r.has(e))return r.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var n=l?Object.getOwnPropertyDescriptor(e,o):null;n&&(n.get||n.set)?Object.defineProperty(a,o,n):a[o]=e[o]}return a.default=e,r&&r.set(e,a),a}(r("./node_modules/react/index.js")),d=r("./node_modules/ol/control.js"),h=r("./src/Resources/public/js/c4g-maps-constant.js"),f=r("./src/Resources/public/js/components/c4g-starboard-layerswitcher.jsx"),y=r("./src/Resources/public/js/c4g-maps-i18n.js"),m=r("./src/Resources/public/js/c4g-maps-utils.js");function b(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(b=function(e){return e?r:t})(e)}var g=u.default.lazy((function(){return Promise.resolve().then(r.bind(r,"./src/Resources/public/js/components/c4g-titlebar.jsx"))})),C=function(e){(0,i.default)(s,e);var t,r,a=(t=s,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,p.default)(t);if(r){var s=(0,p.default)(this).constructor;e=Reflect.construct(a,arguments,s)}else e=a.apply(this,arguments);return(0,c.default)(this,e)});function s(e){var t;(0,l.default)(this,s),t=a.call(this,e);var r=(0,n.default)(t),o=document.createElement("div"),i=document.createElement("button");t.langConstants=(0,y.getLanguage)(e.mapController.data),i.title=t.langConstants.CTRL_STARBOARD,o.className="c4g-starboard-control ol-unselectable ol-control ",e.open?o.className+="c4g-open":o.className+="c4g-close",e.external&&(o.className+=" c4g-external"),o.appendChild(i),jQuery(o).on("click",(function(e){r.state.open?r.close():r.open()}));var c=e.mapController,p=new d.Control({element:o,target:e.target});return c.mapsControls.controls.horizontalPanel=p,c.map.addControl(p),t.open=t.open.bind((0,n.default)(t)),t.slideOutCollidingElements=t.slideOutCollidingElements.bind((0,n.default)(t)),t.resizeFunction=t.resizeFunction.bind((0,n.default)(t)),t.close=t.close.bind((0,n.default)(t)),t.createStylingForIcon=t.createStylingForIcon.bind((0,n.default)(t)),t.state={direction:e.direction||"right",open:e.open||!1,className:e.className||"c4g-starboard-panel",childs:e.childs||[],control:p,activeTab:0},t}return(0,o.default)(s,[{key:"componentDidMount",value:function(){}},{key:"setActiveTab",value:function(e){this.setState({activeTab:e})}},{key:"render",value:function(){var e=this,t=this.props.mapController.data;this.state.className,this.state.direction,this.state.open,this.state.open?jQuery(this.state.control.element).addClass("c4g-open").removeClass("c4g-close"):jQuery(this.state.control.element).removeClass("c4g-open").addClass("c4g-close");var r="",a=[];if(this.props.tabLayers.length>0){var s=u.default.createElement("button",{key:this.props.tabLayers.length,title:this.langConstants.STARBOARD_VIEW_TRIGGER_LAYERSWITCHER,className:"c4g-starboard-view-trigger-layerswitcher",onMouseUp:function(){e.setActiveTab(0)}});a.push(s),a.push(this.props.tabLayers.map((function(t,r){var a=t.awesomeIcon;return e.createStylingForIcon(a,r),u.default.createElement("button",{key:r,title:t[0].name,className:"c4g-starboard-view-trigger-tab-"+r,onMouseUp:function(){e.setActiveTab(r+1)}})}))),r=u.default.createElement("div",{className:"c4g-starboard-switcher"},a)}var l="";return this.props.tabLayers.length>0&&(l=u.default.createElement(u.default.Fragment,null,this.props.tabLayers.map((function(t,r){return u.default.createElement(f.StarboardLayerswitcher,{key:r,mapController:e.props.mapController,objLayers:e.props.tabLayers[r],parentCallback:e.props.tabCallback,layerStates:e.props.tabStates,openfunc:e.open,headline:t[0].name,open:e.state.open,active:r+1===e.state.activeTab})})))),u.default.createElement("div",{className:h.cssConstants.STARBOARD_WRAPPER},u.default.createElement(u.Suspense,{fallback:u.default.createElement("div",null,"Loading...")},u.default.createElement(g,{wrapperClass:"c4g-starboard-header",headerClass:h.cssConstants.STARBOARD_HEADLINE,header:t.starboard.label||this.langConstants.STARBOARD,closeBtnClass:h.cssConstants.STARBOARD_CLOSE,closeBtnCb:this.close,closeBtnTitle:this.langConstants.CLOSE})),r,u.default.createElement("div",{className:h.cssConstants.STARBOARD_CONTENT_CONTAINER},u.default.createElement(f.StarboardLayerswitcher,{key:this.props.tabLayers.length,mapController:this.props.mapController,lang:this.langConstants,objLayers:this.props.objLayers,styleData:this.props.styleData,parentCallback:this.props.parentCallback,layerStates:this.props.layerStates,changeCollapseState:this.props.changeCollapseState,openfunc:this.open,headline:t.layerswitcher.label,open:this.state.open,active:0===e.state.activeTab}),l))}},{key:"createStylingForIcon",value:function(e,t){var r=document.createElement("style");r.appendChild(document.createTextNode("")),document.head.appendChild(r),r.sheet.insertRule("button.c4g-starboard-view-trigger-tab-"+t+':before {\n  content: "\\'+e+"\";\n  font-family: 'Font Awesome 5 Free';\n  font-weight: 900;\n  font-size: inherit;\n}")}},{key:"open",value:function(){var e=this;this.setState({open:!0},(function(){return e.slideOutCollidingElements()})),this.props.mapController.setOpenComponent(this)}},{key:"close",value:function(){var e=this;this.setState({open:!1},(function(){return e.slideInCollidingElements()}))}},{key:"resizeFunction",value:function(){var e=this;window.requestAnimationFrame((function(){e.slideOutCollidingElements()}))}},{key:"componentDidUpdate",value:function(e,t,r){this.state.open?this.slideOutCollidingElements():this.slideInCollidingElements(),this.props.mapController.data.caching&&!this.state.open&&m.utils.getValue("panel")===this.constructor.name&&m.utils.storeValue("panel","")}},{key:"slideOutCollidingElements",value:function(){jQuery(".c4g-starboard-container").addClass("c4g-open").removeClass("c4g-close")}},{key:"slideInCollidingElements",value:function(){jQuery(".c4g-starboard-container").addClass("c4g-close").removeClass("c4g-open")}}]),s}(u.Component);t.default=C},"./src/Resources/public/js/components/c4g-starboard-style.jsx":(e,t,r)=>{var a=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js"),s=r("./node_modules/@babel/runtime/helpers/typeof.js");Object.defineProperty(t,"__esModule",{value:!0}),t.C4gStarboardStyle=void 0;var l=a(r("./node_modules/@babel/runtime/helpers/classCallCheck.js")),o=a(r("./node_modules/@babel/runtime/helpers/createClass.js")),n=a(r("./node_modules/@babel/runtime/helpers/inherits.js")),i=a(r("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),c=a(r("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),p=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!==s(e)&&"function"!=typeof e)return{default:e};var r=y(t);if(r&&r.has(e))return r.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var n=l?Object.getOwnPropertyDescriptor(e,o):null;n&&(n.get||n.set)?Object.defineProperty(a,o,n):a[o]=e[o]}return a.default=e,r&&r.set(e,a),a}(r("./node_modules/react/index.js")),u=a(r("./node_modules/ol/Feature.js")),d=r("./node_modules/ol/geom.js"),h=r("./src/Resources/public/js/c4g-maps-constant.js"),f=r("./src/Resources/public/js/c4g-maps-utils.js");function y(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(y=function(e){return e?r:t})(e)}var m=function(e){(0,n.default)(s,e);var t,r,a=(t=s,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=(0,c.default)(t);if(r){var s=(0,c.default)(this).constructor;e=Reflect.construct(a,arguments,s)}else e=a.apply(this,arguments);return(0,i.default)(this,e)});function s(e){return(0,l.default)(this,s),a.call(this,e)}return(0,o.default)(s,[{key:"enterEvent",value:function(e){13===e.which&&this.props.clickEvent(e)}},{key:"render",value:function(){var e=this,t=null,r=this.props.styleData.arrLocStyles[this.props.styleId],a=r.locStyleArr,s=r.style&&r.style(new u.default({geometry:new d.Point(0,0)}),"EPSG:4326")?r.style(new u.default({geometry:new d.Point(0,0)}),"EPSG:4326"):null,l=Array.isArray(s)?s[0]:s,o=a?a.styletype:"default",n=this.props.tooltip||"";if(!a||"cust_icon"!==o&&"cust_icon_svg"!==o&&"photo"!==o){var i,c,y;switch(o){case"point":i=h.cssConstants.STARBOARD_LOCSTYLE_POINT;break;case"square":i=h.cssConstants.STARBOARD_LOCSTYLE_SQUARE;break;case"star":i=h.cssConstants.STARBOARD_LOCSTYLE_STAR;break;case"x":i=h.cssConstants.STARBOARD_LOCSTYLE_X;break;case"cross":i=h.cssConstants.STARBOARD_LOCSTYLE_CROSS;break;case"triangle":i=h.cssConstants.STARBOARD_LOCSTYLE_TRIANGLE;break;default:i=h.cssConstants.STARBOARD_LOCSTYLE}l&&l.getFill()&&l.getStroke()?(c=l.getFill().getColor(),y=l.getStroke().getColor()):a&&a.fillcolor&&a.strokecolor&&(c=f.utils.getRgbaFromHexAndOpacity(a.fillcolor[0],a.fillcolor[1]),y=f.utils.getRgbaFromHexAndOpacity(a.strokecolor[0],a.strokecolor[1]));var m={"--var-color":c,"--var-bordercolor":y};t=this.props.clickEvent?p.default.createElement("span",{className:i,style:m,title:n,onMouseUp:function(t){return e.props.clickEvent(t)}}):p.default.createElement("span",{className:i,style:m,title:n})}else{var b,g=null;if(a.icon_src&&-1!==a.icon_src.indexOf(".")||a.svgSrc&&-1!==a.svgSrc.indexOf("."))b="cust_icon"===o||"photo"===o?a.icon_src:a.svgSrc,g=p.default.createElement("img",{src:b,style:{height:25,width:25}});else if(l){var C=l.getImage&&"function"==typeof l.getImage&&l.getImage()?l.getImage():null;if(!C||!C.getSrc())return null;g=p.default.createElement("img",{src:C.getSrc(),style:{height:25,width:25}})}t=this.props.clickEvent?p.default.createElement("span",{tabIndex:1,className:h.cssConstants.STARBOARD_LOCSTYLE,title:n,onKeyPress:function(t){return e.enterEvent(t)},onMouseUp:function(t){return e.props.clickEvent(t)}},g):p.default.createElement("span",{className:h.cssConstants.STARBOARD_LOCSTYLE,title:n},g)}return t}}]),s}(p.Component);t.C4gStarboardStyle=m}}]);