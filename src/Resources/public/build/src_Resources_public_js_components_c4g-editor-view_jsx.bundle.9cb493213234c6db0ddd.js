"use strict";(self.webpackChunkmapsbundle=self.webpackChunkmapsbundle||[]).push([["src_Resources_public_js_components_c4g-editor-view_jsx"],{"./src/Resources/public/js/c4g-popup-controller.js":(e,t,o)=>{var r=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.C4gPopupController=void 0;var n=r(o("./node_modules/@babel/runtime/helpers/classCallCheck.js")),s=r(o("./node_modules/@babel/runtime/helpers/createClass.js")),a=o("./src/Resources/public/js/c4g-popup.js"),l=function(){function e(t){(0,n.default)(this,e),this.mapController=t.options.mapController,this.mapData=t.options.mapController.data,this.popupHandling=parseInt(this.mapData.popupHandling,10),this.external=!!this.mapData.popupDiv,this.popups=[]}return(0,s.default)(e,[{key:"addPopup",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.popups.push(new a.C4gPopup(this)),e&&this.popups[this.popups.length-1].setContent(e)}},{key:"setPopup",value:function(e){this.popups[0]||this.popups.push(new a.C4gPopup(this)),this.popups[0].setContent(e)}},{key:"removePopup",value:function(){this.popups[0]&&this.popups[0].popup&&this.popups[0].popup.getMap()&&this.mapData.map.removeOverlay(this.popups[0].popup)}}]),e}();t.C4gPopupController=l},"./src/Resources/public/js/c4g-popup.js":(e,t,o)=>{var r=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js"),n=o("./node_modules/@babel/runtime/helpers/typeof.js");Object.defineProperty(t,"__esModule",{value:!0}),t.C4gPopup=void 0;var s=r(o("./node_modules/@babel/runtime/helpers/typeof.js")),a=r(o("./node_modules/@babel/runtime/helpers/classCallCheck.js")),l=r(o("./node_modules/@babel/runtime/helpers/createClass.js")),i=o("./node_modules/ol/index.js"),p=o("./src/Resources/public/js/c4g-maps-utils.js"),u=r(o("./node_modules/react-dom/index.js")),c=o("./src/Resources/public/js/components/c4g-popup-container.jsx"),d=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var o=f(t);if(o&&o.has(e))return o.get(e);var r={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var l=s?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(r,a,l):r[a]=e[a]}return r.default=e,o&&o.set(e,r),r}(o("./node_modules/react/index.js"));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,o=new WeakMap;return(f=function(e){return e?o:t})(e)}var m=function(){function e(t){(0,a.default)(this,e);var o=this;this.popupController=t;var r=document.createElement("div");r.setAttribute("id","c4g_popup_"+t.mapData.mapId),r.className="c4g-popup-wrapper c4g-active";var n=document.createElement("button");n.className="c4g-popup-close c4g-icon",jQuery(n).click((function(e){e.preventDefault(),t.mapController.map.removeOverlay(o.popup)}));var s=document.createElement("div");if(s.className="c4g-popup-content",r.appendChild(n),r.appendChild(s),this.popupContent=s,1===t.popupHandling||0===t.popupHandling){var l=1===t.popupHandling;this.popup=new i.Overlay({element:r,positioning:"bottom-left",offset:[-50,0],insertFirst:!1,autoPan:l,autoPanAnimation:{duration:250},autoPanMargin:20}),t.mapController.map.addOverlay(this.popup)}else if(2===t.popupHandling){$(r).addClass("c4g-popup-wrapper-nonose");var p=t.mapController.map.getView().getCenter();this.popup=new i.Overlay({position:p,element:r,positioning:"center-center",offset:[-50,0],autoPan:!1}),t.mapController.map.addOverlay(this.popup)}else if(3===t.popupHandling){var f={open:!0,alwaysExtended:!1,hideOther:t.mapController.hideOtherComponents,activeComps:t.mapController.getActiveComponents(),mapData:t.mapData,mapController:t.mapController};this.popupContainer&&(u.default.unmountComponentAtNode(this.popupContainer),delete t.mapController.components.popup,t.external||this.popupContainer.parentNode.removeChild(this.popupContainer)),f.external=t.external,this.popupContainer=t.external?document.querySelector("."+t.mapData.popupDiv):document.createElement("div"),this.popupContainer||(this.popupContainer=document.createElement("div"),f.external=!1),this.popupComponent=u.default.render(d.createElement(c.PopupContainer,f),this.popupContainer),f.external||(t.mapController.$overlaycontainer_stopevent.append(this.popupContainer),t.mapController.hideOtherComponents(this.currentPopup)),this.currentPopup=this.popupComponent,t.mapController.components.popup=this.popupComponent}}return(0,l.default)(e,[{key:"setContent",value:function(e){var t,o,r=e.feature,n=e.layer;if(r.get("features"))for(var a=r.get("features"),l=0;l<a.length;l++)t+=p.utils.replaceAllPlaceholders(e.popup.content,a[l],n,this.popupController.mapController.data.lang);else t=p.utils.replaceAllPlaceholders(e.popup.content,r,n,this.popupController.mapController.data.lang);if(o=document.createElement("div"),this.popupController.popupHandling<3)this.popup.getMap()||this.popupController.mapController.map.addOverlay(this.popup),o.innerHTML=t,this.popupContent.innerHTML="",this.popupContent.appendChild(o),this.popupController.popupHandling<2&&this.setPosition(r.getGeometry());else if(this.popupComponent){var i=this.popupController.mapController.getActiveComponents();this.popupComponent.state.open||this.popupComponent.open(i),this.popupComponent.setContent(t)}void 0!==window.c4gMapsHooks&&"object"===(0,s.default)(window.c4gMapsHooks.proxy_appendPopup)&&p.utils.callHookFunctions(window.c4gMapsHooks.proxy_appendPopup,{popup:e,content:t,mapController:this.popupController.mapController,comp:this.popupComponent||null,div:o})}},{key:"setPosition",value:function(e){if("Point"===e.getType())this.popup.setPosition(e.getCoordinates());else{var t=e.getExtent(),o=[(t[0]+t[2])/2,(t[1]+t[3])/2];this.popup.setPosition(o)}}}]),e}();t.C4gPopup=m},"./src/Resources/public/js/components/c4g-editor-view.jsx":(e,t,o)=>{var r=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js"),n=o("./node_modules/@babel/runtime/helpers/typeof.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=r(o("./node_modules/@babel/runtime/helpers/classCallCheck.js")),a=r(o("./node_modules/@babel/runtime/helpers/createClass.js")),l=r(o("./node_modules/@babel/runtime/helpers/assertThisInitialized.js")),i=r(o("./node_modules/@babel/runtime/helpers/inherits.js")),p=r(o("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),u=r(o("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),c=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var o=y(t);if(o&&o.has(e))return o.get(e);var r={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var l=s?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(r,a,l):r[a]=e[a]}return r.default=e,o&&o.set(e,r),r}(o("./node_modules/react/index.js")),d=(o("./node_modules/ol/layer.js"),o("./node_modules/ol/source.js"),o("./node_modules/ol/format.js")),f=o("./node_modules/ol/index.js"),m=o("./node_modules/ol/geom.js"),h=o("./node_modules/ol/interaction.js"),v=o("./src/Resources/public/js/c4g-maps-utils.js"),g=o("./src/Resources/public/js/components/c4g-starboard-style.jsx");function y(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,o=new WeakMap;return(y=function(e){return e?o:t})(e)}o("./src/Resources/public/js/c4g-popup-controller.js"),o("./src/Resources/public/js/c4g-maps-misc-tooltippopup.js");var b=function(e){(0,i.default)(n,e);var t,o,r=(t=n,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,u.default)(t);if(o){var n=(0,u.default)(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return(0,p.default)(this,e)});function n(e){var t;return(0,s.default)(this,n),t=r.call(this,e),(0,l.default)(t),t.state={freehand:!1,selectedFeature:!1,features:"[]",activeElement:e.elements[0]?e.elements[0].id:0,activeStyle:e.elements[0]?e.elements[0].styleId:0,selectMode:"modify"},t.interaction=null,t.changeJSON=t.changeJSON.bind((0,l.default)(t)),t.resetInteraction=t.resetInteraction.bind((0,l.default)(t)),t}return(0,a.default)(n,[{key:"render",value:function(){var e=this;if("select"!==this.props.mode&&this.props.active){var t;switch(this.resetInteraction(),this.props.mode){case"Point":t=new m.Point(0,0);break;case"LineString":t=new m.LineString([[0,0],[1,1]]);break;case"Polygon":t=new m.Polygon([[0,0],[1,1]])}var o=new f.Feature(t);o.set("locstyle",this.state.activeStyle),this.interaction=new h.Draw({source:this.props.editorLayer.getSource(),type:this.props.mode,snapTolerance:1,style:this.props.styleFunction(o),freehand:this.state.freehand}),this.interaction.on("drawend",(function(t){var o;if(t.feature.set("editorId",e.props.editorId),t.feature.set("locstyle",e.state.activeStyle),t.feature.set("elementId",e.state.activeElement),"Circle"===e.props.mode){var r=t.feature.getGeometry().clone().transform("EPSG:3857","EPSG:4326").getCenter(),n=t.feature.getGeometry().getRadius(),s=v.utils.measureGeometry(t.feature.getGeometry()).rawValue;o={type:"Feature",geometry:{type:"Point",coordinates:r},properties:{editorId:e.props.editorId,elementId:e.state.activeElement,locstyle:e.state.activeStyle,radius:n,realRadius:s}}}else o=(new d.GeoJSON).writeFeatureObject(t.feature,{dataProjection:"EPSG:4326",featureProjection:"EPSG:3857"});var a={source:e.props.editorLayer.getSource(),geojson:o,event:t,format:new d.GeoJSON};v.utils.callHookFunctions(window.c4gMapsHooks.hook_editor_draw,a),e.props.addFeature(o),e.props.countEditorId()})),this.props.mapController.map.addInteraction(this.interaction)}else"select"===this.props.mode&&this.props.active?(this.resetInteraction(),this.interaction=[],this.interaction.push(new h.Select({layers:[this.props.editorLayer],hitTolerance:20})),this.interaction.push(new h.Modify({features:this.state.selectedFeature?new f.Collection([this.state.selectedFeature]):new f.Collection([new f.Feature]),pixelTolerance:20})),this.interaction[0].on("select",(function(t){var o=t.selected[0];e.setState({selectedFeature:o})})),this.interaction[1].on("modifyend",(function(t){var o,r=t.features.getArray()[0];if(r.getGeometry()instanceof m.Circle){var n=r.getGeometry().clone().transform("EPSG:3857","EPSG:4326").getCenter(),s=r.getGeometry().getRadius(),a=v.utils.measureGeometry(event.feature.getGeometry()).rawValue;o={type:"Feature",geometry:{type:"Point",coordinates:n},properties:{editorId:r.get("editorId"),elementId:r.get("elementId"),locstyle:r.get("activeStyle"),radius:s,realRadius:a}}}else o=(new d.GeoJSON).writeFeatureObject(r,{dataProjection:"EPSG:4326",featureProjection:"EPSG:3857"});var l={source:e.props.editorLayer.getSource(),geojson:o,event:t,format:new d.GeoJSON};v.utils.callHookFunctions(window.c4gMapsHooks.hook_editor_modify,l),e.props.modifyFeature(o)})),this.props.mapController.map.addInteraction(this.interaction[0]),this.props.mapController.map.addInteraction(this.interaction[1])):this.resetInteraction();var r=null;this.props.elements&&this.props.elements.length>1&&(r=this.props.elements.map((function(t){var o,r,n=e.props.styleData.arrLocStyles[t.styleId],s=n.locStyleArr,a=s?s.styletype:"default";if(!s||"cust_icon"!==a&&"cust_icon_svg"!==a&&"photo"!==a){var l=n.style&&n.style(new f.Feature({geometry:new m.Point(0,0)}),"EPSG:4326")?n.style(new f.Feature({geometry:new m.Point(0,0)}),"EPSG:4326"):null,i=Array.isArray(l)?l[0]:l;i&&i.getFill()&&i.getStroke()?o=i.getFill().getColor():s&&s.fillcolor&&s.strokecolor&&(o=v.utils.getRgbaFromHexAndOpacity(s.fillcolor[0],s.fillcolor[1])),r=c.default.createElement("span",{title:t.name,className:"c4g-editor-locstyle",style:{backgroundColor:o}})}else r=c.default.createElement(g.C4gStarboardStyle,{tooltip:t.name,styleData:e.props.styleData,styleId:t.styleId});return c.default.createElement("button",{key:t.id,style:{height:"32px",width:"32px"},onMouseUp:function(){e.setState({activeElement:t.id,activeStyle:t.styleId})}},r)})));var n=null;if("LineStringPolygon".includes(this.props.mode)){var s="c4g-editor-view ";s+=this.state.freehand?"c4g-active":"c4g-inactive",n=c.default.createElement("a",{className:s,title:this.props.lang.EDITOR_VIEW_TRIGGER_DRAW_FREEHAND,onMouseUp:function(){e.changeFreehand()}},this.props.lang.EDITOR_VIEW_TRIGGER_DRAW_FREEHAND)}var a=[];if(this.state.selectedFeature&&"select"===this.props.mode)for(var l in n=c.default.createElement("div",{className:"c4g-editor-mode-switcher"},c.default.createElement("button",{title:this.props.lang.EDITOR_FEATURE_DELETE,className:"c4g-editor-feature-delete "+("remove"===this.state.selectMode?"c4g-active":"c4g-inactive"),onMouseUp:function(){e.removeActiveFeature()}})),this.props.editorVars)if(this.props.editorVars.hasOwnProperty(l)){var i=this.props.editorVars[l];if(i.caption&&i.key){var p=this.state.selectedFeature.get(i.key)?this.state.selectedFeature.get(i.key):"";a.push(c.default.createElement("form",{className:"c4g-editor-vars-input",key:l,onSubmit:function(e){e.preventDefault()}},c.default.createElement("label",null,i.caption,":",c.default.createElement("input",{type:"text",value:p,name:i.key,onChange:function(t){e.handleVarChange(t)}}))))}}return c.default.createElement(c.default.Fragment,null,c.default.createElement("div",null,n,c.default.createElement("div",{className:"c4g-editor-element-selection"},r)),c.default.createElement("div",{className:"c4g-editor-vars"},a))}},{key:"resetInteraction",value:function(){this.interaction&&(Array.isArray(this.interaction)?(this.props.mapController.map.removeInteraction(this.interaction[0]),this.props.mapController.map.removeInteraction(this.interaction[1])):this.props.mapController.map.removeInteraction(this.interaction))}},{key:"removeActiveFeature",value:function(){var e=(new d.GeoJSON).writeFeatureObject(this.state.selectedFeature,{dataProjection:"EPSG:4326",featureProjection:"EPSG:3857"});this.props.removeFeature(e),this.props.editorLayer.getSource().removeFeature(this.state.selectedFeature),this.setState({selectedFeature:!1})}},{key:"componentDidUpdate",value:function(e,t,o){var r=this;this.props.elements[0]&&e.mode!==this.props.mode&&(0===this.state.activeElement?this.setState({activeElement:this.props.elements[0].id,activeStyle:this.props.elements[0].styleId}):this.props.elements.find((function(e){return e.id===r.state.activeElement}))||this.setState({activeElement:this.props.elements[0].id,activeStyle:this.props.elements[0].styleId}))}},{key:"changeSelectMode",value:function(e){this.setState({selectMode:e})}},{key:"handleVarChange",value:function(e){var t=e.target.value,o=e.target.name;this.state.selectedFeature.set(o,t);var r=(new d.GeoJSON).writeFeatureObject(this.state.selectedFeature,{dataProjection:"EPSG:4326",featureProjection:"EPSG:3857"});this.props.modifyFeature(r),this.setState({selectedFeature:this.state.selectedFeature})}},{key:"changeFreehand",value:function(){this.setState({freehand:!this.state.freehand})}},{key:"changeJSON",value:function(e){this.setState({features:e.target.value})}}]),n}(c.Component);t.default=b},"./src/Resources/public/js/components/c4g-popup-container.jsx":(e,t,o)=>{var r=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js"),n=o("./node_modules/@babel/runtime/helpers/typeof.js");Object.defineProperty(t,"__esModule",{value:!0}),t.PopupContainer=void 0;var s=r(o("./node_modules/@babel/runtime/helpers/classCallCheck.js")),a=r(o("./node_modules/@babel/runtime/helpers/createClass.js")),l=r(o("./node_modules/@babel/runtime/helpers/assertThisInitialized.js")),i=r(o("./node_modules/@babel/runtime/helpers/inherits.js")),p=r(o("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),u=r(o("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),c=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var o=f(t);if(o&&o.has(e))return o.get(e);var r={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var l=s?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(r,a,l):r[a]=e[a]}return r.default=e,o&&o.set(e,r),r}(o("./node_modules/react/index.js")),d=o("./src/Resources/public/js/c4g-maps-i18n.js");function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,o=new WeakMap;return(f=function(e){return e?o:t})(e)}var m=c.default.lazy((function(){return o.e("src_Resources_public_js_components_c4g-titlebar_jsx").then(o.bind(o,"./src/Resources/public/js/components/c4g-titlebar.jsx"))})),h=function(e){(0,i.default)(n,e);var t,o,r=(t=n,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,u.default)(t);if(o){var n=(0,u.default)(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return(0,p.default)(this,e)});function n(e){var t;return(0,s.default)(this,n),(t=r.call(this,e)).state={content:"",open:e.open,detailsOpen:!1,activeComps:e.activeComps,conststr:!1},e.hideOther((0,l.default)(t)),t.routeButtons="",t.language=(0,d.getLanguage)(t.props.mapData),t.close=t.close.bind((0,l.default)(t)),t.toggleDetails=t.toggleDetails.bind((0,l.default)(t)),t}return(0,a.default)(n,[{key:"render",value:function(){var e=this.props.external?"c4g-popup-container ":"c4g-sideboard c4g-popup-container ";this.state.open?e+="c4g-open ":e+="c4g-close",this.props.alwaysExtended||this.state.detailsOpen?e+=" c4g-details-open":e+=" c4g-details-closed";var t="c4g-popup-header",o=c.default.createElement("div",null);return this.state.conststr&&(t+=" c4g-routing",o=c.default.createElement(this.state.conststr,{config:this.state.config})),this.state.content?c.default.createElement("div",{className:e},c.default.createElement("div",{className:"c4g-popup-wrapper"},c.default.createElement(c.Suspense,{fallback:c.default.createElement("div",null,"Loading...")},c.default.createElement(m,{wrapperClass:t,headerClass:"c4g-popup-header-headline",header:this.props.mapData.popupHeadline||"",closeBtnClass:"c4g-titlebar-close",closeBtnCb:this.close,closeBtnTitle:this.language.CLOSE,detailBtnClass:"",detailBtnCb:""},o)),c.default.createElement("div",{className:"c4g-popup-content",dangerouslySetInnerHTML:{__html:this.state.content}}))):null}},{key:"setAddButtons",value:function(e,t){this.setState({config:t,conststr:e})}},{key:"setContent",value:function(e){this.setState({content:e})}},{key:"open",value:function(e){this.props.external||this.props.hideOther(),this.setState({open:!0,activeComps:e})}},{key:"close",value:function(){if(this.state.activeComps)for(var e in this.state.activeComps)this.state.activeComps.hasOwnProperty(e)&&this.state.activeComps[e].setState({open:!0});var t={open:!1,content:this.props.external?"":this.state.content};this.setState(t)}},{key:"toggleDetails",value:function(){this.setState({detailsOpen:!this.state.detailsOpen})}}]),n}(c.Component);t.PopupContainer=h},"./src/Resources/public/js/components/c4g-starboard-style.jsx":(e,t,o)=>{var r=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js"),n=o("./node_modules/@babel/runtime/helpers/typeof.js");Object.defineProperty(t,"__esModule",{value:!0}),t.C4gStarboardStyle=void 0;var s=r(o("./node_modules/@babel/runtime/helpers/classCallCheck.js")),a=r(o("./node_modules/@babel/runtime/helpers/createClass.js")),l=r(o("./node_modules/@babel/runtime/helpers/inherits.js")),i=r(o("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),p=r(o("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),u=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var o=h(t);if(o&&o.has(e))return o.get(e);var r={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var l=s?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(r,a,l):r[a]=e[a]}return r.default=e,o&&o.set(e,r),r}(o("./node_modules/react/index.js")),c=r(o("./node_modules/ol/Feature.js")),d=o("./node_modules/ol/geom.js"),f=o("./src/Resources/public/js/c4g-maps-constant.js"),m=o("./src/Resources/public/js/c4g-maps-utils.js");function h(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,o=new WeakMap;return(h=function(e){return e?o:t})(e)}var v=function(e){(0,l.default)(n,e);var t,o,r=(t=n,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,p.default)(t);if(o){var n=(0,p.default)(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return(0,i.default)(this,e)});function n(e){return(0,s.default)(this,n),r.call(this,e)}return(0,a.default)(n,[{key:"enterEvent",value:function(e){13===e.which&&this.props.clickEvent(e)}},{key:"render",value:function(){var e=this,t=null,o=this.props.styleData.arrLocStyles[this.props.styleId],r=o.locStyleArr,n=o.style&&o.style(new c.default({geometry:new d.Point(0,0)}),"EPSG:4326")?o.style(new c.default({geometry:new d.Point(0,0)}),"EPSG:4326"):null,s=Array.isArray(n)?n[0]:n,a=r?r.styletype:"default",l=this.props.tooltip||"";if(!r||"cust_icon"!==a&&"cust_icon_svg"!==a&&"photo"!==a){var i,p,h;switch(a){case"point":i=f.cssConstants.STARBOARD_LOCSTYLE_POINT;break;case"square":i=f.cssConstants.STARBOARD_LOCSTYLE_SQUARE;break;case"star":i=f.cssConstants.STARBOARD_LOCSTYLE_STAR;break;case"x":i=f.cssConstants.STARBOARD_LOCSTYLE_X;break;case"cross":i=f.cssConstants.STARBOARD_LOCSTYLE_CROSS;break;case"triangle":i=f.cssConstants.STARBOARD_LOCSTYLE_TRIANGLE;break;default:i=f.cssConstants.STARBOARD_LOCSTYLE}s&&s.getFill()&&s.getStroke()?(p=s.getFill().getColor(),h=s.getStroke().getColor()):r&&r.fillcolor&&r.strokecolor&&(p=m.utils.getRgbaFromHexAndOpacity(r.fillcolor[0],r.fillcolor[1]),h=m.utils.getRgbaFromHexAndOpacity(r.strokecolor[0],r.strokecolor[1]));var v={"--var-color":p,"--var-bordercolor":h};t=this.props.clickEvent?u.default.createElement("span",{className:i,style:v,title:l,onMouseUp:function(t){return e.props.clickEvent(t)}}):u.default.createElement("span",{className:i,style:v,title:l})}else{var g,y=null;if(r.icon_src&&-1!==r.icon_src.indexOf(".")||r.svgSrc&&-1!==r.svgSrc.indexOf("."))g="cust_icon"===a||"photo"===a?r.icon_src:r.svgSrc,y=u.default.createElement("img",{src:g,style:{height:25,width:25}});else if(s){var b=s.getImage&&"function"==typeof s.getImage&&s.getImage()?s.getImage():null;if(!b||!b.getSrc())return null;y=u.default.createElement("img",{src:b.getSrc(),style:{height:25,width:25}})}t=this.props.clickEvent?u.default.createElement("span",{tabIndex:1,className:f.cssConstants.STARBOARD_LOCSTYLE,title:l,onKeyPress:function(t){return e.enterEvent(t)},onMouseUp:function(t){return e.props.clickEvent(t)}},y):u.default.createElement("span",{className:f.cssConstants.STARBOARD_LOCSTYLE,title:l},y)}return t}}]),n}(u.Component);t.C4gStarboardStyle=v}}]);