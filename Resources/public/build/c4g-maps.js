!function(e){function t(a){if(r[a])return r[a].exports;var o=r[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};t.m=e,t.c=r,t.d=function(e,r,a){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/build/",t(t.s="mToF")}({"0nAa":function(e,t,r){"use strict";r.d(t,"a",function(){return i});var a=r("1wOy"),o=r("fZpj"),n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};this.c4g=this.c4g||{},this.c4g.maps=this.c4g.maps||{},this.c4g.maps.misc=this.c4g.maps.misc||{},function(e,t){t.maps.misc.MapHover=function(t){if(this.options=t||{},this.options=e.extend({activate:!0},this.options),!this.options.mapController)return console.warn("MapHover needs a mapController"),!1;this.listenerKey=!1,this.map=this.options.mapController.map,this.lastFeatureStyle=null,this.lastHoveredFeature=null,this.hoverTooltip=new a.a({map:this.map,offset:[10,10],horizontal:!0,closeable:!1}),this.hoverTooltip.hide(),this.options.activate&&this.activate()},t.maps.misc.MapHover.prototype=e.extend(t.maps.misc.MapHover.prototype,{activate:function(){this.listenerKey||(this.listenerKey=this.map.on("pointermove",this.getHoverFunction(),this))},deactivate:function(){this.listenerKey&&(ol.Observable.unByKey(this.listenerKey),this.listenerKey=!1)},isActive:function(){return!!this.listenerKey},getHoverFunction:function(){var r=this;return function(a){var i,s,l,c,u,p,h,d,m=r.options.mapController.data,b=r.options.mapController.proxy;if(s=!1,i=r.map.forEachFeatureAtPixel(a.pixel,function(e,t){return{feature:e,layer:t}}),h=r.map.getView().getResolution(),!i)return r.hoverTooltip.hide(),d=document.querySelector("canvas"),e(d).css("cursor","default"),"1"===m.hover_popups&&"1"!=m.hover_popups_stay&&t.maps.popup.$popup.removeClass(t.maps.constant.css.ACTIVE),r.lastHoveredFeature&&r.lastFeatureStyle&&(r.lastHoveredFeature.setStyle(r.lastFeatureStyle),r.lastHoveredFeature=null),!1;if(d=document.querySelector("canvas"),e(d).css("cursor","pointer"),i.feature&&"function"==typeof i.feature.get&&i.feature.get("features")&&(i.feature.get("features")[1]?s=!0:i.feature=i.feature.get("features")[0]),i.feature.getGeometry()&&i.feature.getGeometry()instanceof ol.geom.LineString)return!1;if(i.feature.get("hover_location")||r.lastHoveredFeature&&r.lastHoveredFeature.get("hover_location")){if(r.lastHoveredFeature&&i.feature===r.lastHoveredFeature)return!1;if(r.lastFeatureStyle&&r.lastHoveredFeature&&i.feature!==r.lastHoveredFeature&&(r.lastFeatureStyle?r.lastHoveredFeature.setStyle(r.lastFeatureStyle):r.lastLayerStyle&&r.lastHoveredFeature.setStyle(r.lastLayerStyle)),i.feature&&n(i.feature.getStyleFunction)&&"function"==typeof i.feature.getStyleFunction&&"function"==typeof i.feature.getStyleFunction())r.lastHoveredFeature=i.feature,r.lastLayerStyle=i.layer.getStyle(),r.lastFeatureStyle=r.lastLayerStyle(r.lastHoveredFeature),i.feature.get("hover_style")&&b.locationStyleController.arrLocStyles[i.feature.get("hover_style")]&&(b.locationStyleController.arrLocStyles[i.feature.get("hover_style")].fnStyleFunction?i.feature.setStyle(Function("feature","data","map",b.locationStyleController.arrLocStyles[i.feature.get("hover_style")].fnStyleFunction)(i.feature)):i.feature.setStyle(b.locationStyleController.arrLocStyles[i.feature.get("hover_style")].style(i.feature)));else if(i.layer&&n(i.layer.getStyleFunction)&&"function"==typeof i.layer.getStyleFunction&&"function"==typeof i.layer.getStyleFunction()&&(i.feature?r.lastHoveredFeature=i.feature:(r.lastHoveredFeature=i.layer.getSource().getFeatures()[0],r.lastHoveredFeature=r.lastHoveredFeature.get("features")[0]),r.lastLayerStyle=i.layer.getStyle(),r.lastFeatureStyle=r.lastLayerStyle(r.lastHoveredFeature),i.feature.get("hover_style"))){if(!b.locationStyleController.arrLocStyles[i.feature.get("hover_style")]){var g=[];return g.push(i.feature.get("hover_style")),b.locationStyleController.loadLocationStyles(g),r.lastHoveredFeature=null,null}b.locationStyleController.arrLocStyles[i.feature.get("hover_style")].fnStyleFunction?i.feature.setStyle(Function("feature","data","map",b.locationStyleController.arrLocStyles[i.feature.get("hover_style")].fnStyleFunction)(i.feature)):i.feature.setStyle(b.locationStyleController.arrLocStyles[i.feature.get("hover_style")].style(i.feature))}}if(i&&i.feature&&i.feature.get("styleUrl"))return!1;if(l=!1,!s&&i.feature&&"function"==typeof i.feature.get&&(i.feature.get("tooltip")||i.feature.get("graphicTitle"))?(l=i.feature.get("tooltip"),l?"object"===(void 0===l?"undefined":n(l))&&l.element&&l.element.childNodes[1]&&(l=l.element.childNodes[1].innerHTML):l=i.feature.get("graphicTitle")):i.feature&&n(i.feature.getStyleFunction)&&"function"==typeof i.feature.getStyleFunction&&"function"==typeof i.feature.getStyleFunction()&&b.locationStyleController.arrLocStyles&&b.locationStyleController.arrLocStyles[i.feature.getStyleFunction()(h)]&&b.locationStyleController.arrLocStyles[i.feature.getStyleFunction()(h)].tooltip?l=b.locationStyleController.arrLocStyles[i.feature.getStyleFunction()(h)].tooltip:i.layer&&n(i.layer.getStyleFunction)&&"function"==typeof i.layer.getStyleFunction&&"function"==typeof i.layer.getStyleFunction()&&b.locationStyleController.arrLocStyles&&b.locationStyleController.arrLocStyles[i.layer.getStyleFunction()()]&&b.locationStyleController.arrLocStyles[i.layer.getStyleFunction()()].tooltip?l=b.locationStyleController.arrLocStyles[i.layer.getStyleFunction()()].tooltip:i.layer&&"function"==typeof i.layer.getStyleFunction&&"function"==typeof i.layer.getStyleFunction()&&b.locationStyleController.arrLocStyles&&b.locationStyleController.arrLocStyles[i.layer.getStyleFunction()(null,null,1)]&&b.locationStyleController.arrLocStyles[i.layer.getStyleFunction()(null,null,1)].tooltip?l=b.locationStyleController.arrLocStyles[i.layer.getStyleFunction()(null,null,1)].tooltip:i.layer&&i.layer.tooltip&&(l=i.layer.tooltip),s&&i.feature.get("features"))if(u=i.feature.get("features"),u[0].get("tooltip")&&u[0].get("tooltip_length")){l=u[0].get("tooltip"),p=parseInt(u[0].get("tooltip_length"));for(var y=1;y<u.length;y++)u[y].get("tooltip")&&""!=u[y].get("tooltip")&&(l=l+", "+u[y].get("tooltip"));l.length>p+3&&(l=l.slice(0,p))&&(l+="...")}else if(i.layer.tooltip&&i.layer.tooltip_length){for(c=l,l="",p=parseInt(i.layer.tooltip_length),y=0;y<u.length;y++){var f=o.a.replaceAllPlaceholders(c,u[y],i.layer);""!=f&&(l=""==l?f:l+", "+f)}l.length>p+3&&(l=l.slice(0,p))&&(l+="...")}if(l?(l=o.a.decodeGeoJsonProperty(l),i.feature.get("features"),l=o.a.replaceAllPlaceholders(l,i.feature,i.layer),l.trim()?(r.hoverTooltip.setPosition(a.coordinate),r.hoverTooltip.setContent(l),r.hoverTooltip.show()):r.hoverTooltip.hide()):r.hoverTooltip.hide(),"1"===m.hover_popups&&!s&&i.feature){var _={};if(i.feature.get("popup"))_=i.feature.get("popup");else{if(i.feature.get("loc_linkurl"))return;if(!i.layer||!i.layer.popup)return;_=i.layer.popup}var k=i.feature.getGeometry().getCoordinates();if(!k||k&&k[0]&&k[0].length){var v=i.feature.getGeometry().getExtent();k=r.map.getCoordinateFromPixel(a.pixel),k=[(v[0]+v[2])/2,(v[1]+v[3])/2]}if(t.maps.popup.popup.setPosition(k),_.content)if(t.maps.popup.$content.html(""),t.maps.popup.$popup.addClass(t.maps.constant.css.ACTIVE).addClass(t.maps.constant.css.LOADING),t.maps.popup.spinner.show(),!1===_.async){var w={};w.popup=_,w.feature=i.feature,w.layer=i.layer,void 0!==t.maps.hook&&"object"===n(t.maps.hook.proxy_fillPopup)&&o.a.callHookFunctions(t.maps.hook.proxy_fillPopup,w),b.setPopup(w,b)}else e.ajax({dataType:"json",url:b.api_infowindow_url+"/"+_.content,done:function(e){var r={async:_.async,content:e.content,popup:_.popup,routing_link:_.routing_link},a={};a.popup=r,a.feature=i.feature,a.layer=i.layer,void 0!==t.maps.hook&&"object"===n(t.maps.hook.proxy_fillPopup)&&o.a.callHookFunctions(t.maps.hook.proxy_fillPopup,a),b.setPopup(a,b)}});else t.maps.popup.$popup.removeClass(t.maps.constant.css.ACTIVE)}}},changeFeatureStyles:function(){}})}(jQuery,this.c4g);var i=this.c4g.maps.misc.MapHover},"1wOy":function(e,t,r){"use strict";r.d(t,"a",function(){return o});var a=r("TewV");this.c4g=this.c4g||{},this.c4g.maps=this.c4g.maps||{},this.c4g.maps.misc=this.c4g.maps.misc||{},function(e,t){t.maps.misc.TooltipPopUp=function(t){var r,o,n;r=this,this.options=t||{},this.options=e.extend({horizontal:!1,closeable:!1,offset:[1,-1],position:[0,0]},this.options),o="",this.options.className&&(o=" "+this.options.className),this.options.horizontal&&(o+=" "+a.a.HORIZONTAL),this.options.closeable&&(o+=" "+a.a.CLOSEABLE),this.element=document.createElement("div"),this.element.className=a.a.TOOLTIP_POPUP+o,this.options.closeable&&(n=document.createElement("button"),n.className=a.a.ICON+" "+a.a.POPUP_CLOSE,this.element.appendChild(n),e(n).click(function(){r.close()})),this.contentContainer=document.createElement("div"),this.element.appendChild(this.contentContainer),this.overlay=new ol.Overlay({element:this.element,insertFirst:!1,offset:this.options.offset,positioning:"bottom-left"}),this.options.map&&this.options.map.addOverlay(this.overlay),this.options.position&&this.overlay.setPosition(this.options.position)},t.maps.misc.TooltipPopUp.prototype=e.extend(t.maps.misc.TooltipPopUp.prototype,{close:function(){"function"==typeof this.options.closeFunction&&this.options.closeFunction(),this.options.map&&this.options.map.removeOverlay(this.overlay)},show:function(){e(this.element).hasClass(a.a.HIDE)&&e(this.element).removeClass(a.a.HIDE)},hide:function(){e(this.element).hasClass(a.a.HIDE)||e(this.element).addClass(a.a.HIDE)},getContent:function(){return this.contentContainer.innerHTML},getPosition:function(){return this.overlay.getPosition()},setContent:function(e){this.contentContainer.innerHTML=e},setPosition:function(e){this.overlay.setPosition(e)}})}(jQuery,this.c4g);var o=this.c4g.maps.misc.TooltipPopUp},"5wSt":function(e,t,r){"use strict";r.d(t,"a",function(){return n});var a=r("TewV"),o=r("g1Hq");this.c4g=this.c4g||{},this.c4g.maps=this.c4g.maps||{},this.c4g.maps.control=this.c4g.maps.control||{},function(e,t){t.maps.control.Grid=function(t){var r,n,i=this,s=t||{},l=new ol.Graticule({showLabels:!0});s=e.extend({className:a.a.GRATICULE,switchable:!0,tipLabel:o.a.CTRL_GRID,label:"#",disableLabel:"[]"},s);var c=function(){l.setMap(i.getMap()),e(r).addClass(a.a.ENABLED)},u=function(){l.setMap(null),e(r).removeClass(a.a.ENABLED)},p=function(e){e.stopPropagation(),this.blur(),l.getMap()?u():c()};r=document.createElement("div"),r.className=s.className+" "+a.a.OL_UNSELECTABLE+" "+a.a.OL_CONTROL,s.switchable&&(n=document.createElement("button"),n.title=s.tipLabel,r.appendChild(n),n.addEventListener("click",p,!1),n.addEventListener("touchstart",p,!1)),ol.control.Control.call(this,{element:r,target:s.target})},ol.inherits(t.maps.control.Grid,ol.control.Control),t.maps.control.Grid.prototype=e.extend(t.maps.control.Grid.prototype,{})}(jQuery,this.c4g);var n=this.c4g.maps.control.Grid},"82Py":function(e,t,r){"use strict";r.d(t,"a",function(){return i});var a=r("muuc"),o=r("g1Hq"),n=r("TewV");this.c4g=this.c4g||{},this.c4g.maps=this.c4g.maps||{},this.c4g.maps.control=this.c4g.maps.control||{},function(e,t){t.maps.control.Router=function(t){if(this.options=e.extend({name:"router",create:!0,mapController:void 0,headline:o.a.ROUTER,direction:"left"},t),!this.options.mapController)return!1;this.index=0,a.a.call(this,this.options)},ol.inherits(t.maps.control.Router,a.a),t.maps.control.Router.prototype=e.extend(t.maps.control.Router.prototype,{init:function(){var e,t,r,a;return e=this,this.spinner.show(),this.options.mapController.proxy.locationStyleController.loadLocationStyles([this.options.mapController.data.router_from_locstyle,this.options.mapController.data.router_to_locstyle,this.options.mapController.data.router_point_locstyle]),this.routingAltWaySource=new ol.source.Vector,this.routingWaySource=new ol.source.Vector,this.routerWayLayer=new ol.layer.Vector({source:this.routingWaySource,zIndex:1,style:[new ol.style.Style({stroke:new ol.style.Stroke({color:"rgba(255, 255, 255, 0.6)",width:8})}),new ol.style.Style({stroke:new ol.style.Stroke({color:"rgba(0, 51, 119, 0.9)",width:4})})]}),this.routerAltWayLayer=new ol.layer.Vector({source:this.routingAltWaySource,zIndex:0,style:[new ol.style.Style({stroke:new ol.style.Stroke({color:"rgba(255, 255, 255, 0.6)",width:8})}),new ol.style.Style({stroke:new ol.style.Stroke({color:"rgba(0, 51, 119, 0.4)",width:4})})]}),r=new ol.interaction.Select({style:[new ol.style.Style({stroke:new ol.style.Stroke({color:"rgba(255, 255, 255, 0.0)",width:8})}),new ol.style.Style({stroke:new ol.style.Stroke({color:"rgba(255, 51, 119, 0.0)",width:4})})]}),r.on("select",function(t){if(t.selected[0]){var r=t.selected[0].getGeometry();r&&r instanceof ol.geom.LineString&&e.showAltRoute(e.response,t.selected[0].getId())}}),e.options.mapController.map.addInteraction(r),this.routingHintSource=new ol.source.Vector,this.routerHintLayer=new ol.layer.Vector({source:this.routingHintSource,style:function(t,r){return!e.options.mapController.proxy||e.options.mapController.proxy.locationStyleController.arrLocStyles[e.options.mapController.data.router_point_locstyle].style(t,r)}}),this.locationsSource=new ol.source.Vector,this.locationsLayer=new ol.layer.Vector({source:this.locationsSource,zIndex:2}),this.routerLayerGroup=new ol.layer.Group({layers:new ol.Collection([this.routerWayLayer,this.routerAltWayLayer,this.locationsLayer,this.routerHintLayer]),visible:!0}),this.options.mapController.map.addLayer(this.routerLayerGroup),t=this.addUserInterface(),t.activate(),a=this.options.mapController.data.profile,this.geoSearchApi=this.options.mapController.data.api.geosearch+"/"+a,this.geoReverseSearchApi=this.options.mapController.data.api.geosearch_reverse+"/"+a,this.routingApi=this.options.mapController.data.api.routing+"/"+a,this.spinner.hide(),!0},preOpenFunction:function(e){this.addMapInputInteraction(),e&&e.toLonLat&&(this.performReverseSearch(this.$toInput,e.toLonLat),this.toValue=new ol.geom.Point([e.toLonLat[1],e.toLonLat[0]]))},preHideFunction:function(){this.removeMapInputInteraction()},preCloseFunction:function(){if(this.routingWaySource.clear(),this.routingAltWaySource.clear(),this.routingHintSource.clear(),this.locationsSource.clear(),e(this.routerInstructionsWrapper).empty(),this.clearInput(this.$fromInput),this.overValue)for(var t in this.overValue){this.clearOver(this.$overInput,t);var r=document.getElementById(t);r&&r.parentNode.parentNode.removeChild(r.parentNode)}this.clearInput(this.$toInput),this.removeMapInputInteraction()},removeMapInputInteraction:function(){var e=this;this.options.mapController.map.un("click",e.fnMapRouterInteraction)},addMapInputInteraction:function(){var e,t=this;t.fnMapRouterInteraction=function(r){e=ol.proj.toLonLat(r.coordinate),""===t.$fromInput.val()?(t.performReverseSearch(t.$fromInput,e),t.fromValue=new ol.geom.Point(e)):""===t.$toInput.val()?(t.performReverseSearch(t.$toInput,e),t.toValue=new ol.geom.Point(e)):t.$overInput&&""===t.$overInput.val()&&(t.performReverseSearch(t.$overInput,e),t.overValue||(t.overValue={}),t.overValue[t.index]=new ol.geom.Point(e),t.$buttonOver.prop("disabled",!1))},this.options.mapController.map.on("click",t.fnMapRouterInteraction),t.options.mapController.map.getInteractions().getArray()[9]?t.options.mapController.map.getInteractions().getArray()[9].setActive(!0):t.options.mapController.map.getInteractions().getArray()[8].setActive(!0)},addUserInterface:function(){var t=this,r=void 0,a=void 0,i=void 0,s=void 0,l=[],c=void 0,u=void 0,p=void 0,h=void 0,d=void 0,m=void 0,b=void 0,g=void 0;if(r=this,a=document.createElement("div"),i=document.createElement("div"),r.routerViewContentWrapper=i,this.fromInputWrapper=document.createElement("div"),this.fromInputWrapper.className=n.a.ROUTER_INPUT_WRAPPER,this.fromInput=document.createElement("input"),this.fromInput.type="text",this.fromInput.className=n.a.ROUTER_INPUT_FROM,this.fromInput.id=this.fromInput.name="routingFrom",c=document.createElement("label"),c.setAttribute("for","routingFrom"),c.innerHTML=o.a.ROUTER_FROM_LABEL,h=document.createElement("button"),h.className=n.a.ROUTER_INPUT_CLEAR,h.title=o.a.ROUTER_CLEAR_TITLE,h.innerHTML=o.a.ROUTER_CLEAR_HTML,this.$routerFromClear=e(h),b=document.createElement("button"),b.className=n.a.ROUTER_SWITCH,b.title=o.a.ROUTER_SWITCH,this.$switchFromTo=e(b),g=document.createElement("button"),g.className=n.a.ROUTER_OVER,g.title=o.a.ROUTER_OVER,this.$buttonOver=e(g),s=document.createElement("button"),s.className=n.a.ROUTER_PRINT,s.title=o.a.ROUTER_PRINT,this.$print=e(s),this.routerButtonBar=document.createElement("div"),this.routerButtonBar.className=n.a.ROUTER_BUTTONBAR,this.routerButtonBar.appendChild(b),this.routerButtonBar.appendChild(g),this.routerButtonBar.appendChild(s),"2"==this.options.mapController.data.router_api_selection)if(1==Object.keys(this.options.mapController.data.router_profiles).length)this.routeProfile=[],this.routeProfile.active=Object.keys(this.options.mapController.data.router_profiles)[0];else if(Object.keys(this.options.mapController.data.router_profiles).length>1){if(this.routeProfile=document.createElement("div"),e(this.routeProfile).addClass(n.a.ROUTER_PROFILE_WRAPPER),this.options.mapController.data.router_profiles[0]&&(l.car=document.createElement("button"),e(l.car).addClass(n.a.ROUTER_PROFILE_CAR),this.$routeProfileCar=e(l.car),this.routeProfile.appendChild(l.car),this.$routeProfileCar.click(function(e){r.clearSiblings(this),r.routeProfile.active="0",r.recalculateRoute()})),this.options.mapController.data.router_profiles[1]&&(l.hgv=document.createElement("button"),e(l.hgv).addClass(n.a.ROUTER_PROFILE_HGV),this.routeProfile.appendChild(l.hgv),this.$routeProfileHgv=e(l.hgv),this.$routeProfileHgv.click(function(e){r.clearSiblings(this),r.routeProfile.active="1",r.recalculateRoute()})),this.options.mapController.data.router_profiles[2]||this.options.mapController.data.router_profiles[3]||this.options.mapController.data.router_profiles[4]||this.options.mapController.data.router_profiles[5]||this.options.mapController.data.router_profiles[6]||this.options.mapController.data.router_profiles[7]){var y=document.createElement("span");l.bike=document.createElement("button"),l.bike.list=document.createElement("ul"),this.$routeProfileBike=e(l.bike);for(var f=2;f<8;f++)this.options.mapController.data.router_profiles[f]&&function(){var a=document.createElement("li");a.innerHTML=t.options.mapController.data.router_profiles[f],e(a).data("profile",[f]),e(a).click(function(t){r.childClick(e(a))}),t.$routeProfileBike.data("profile")||(t.$routeProfileBike.data("profile",f),e(a).addClass(n.a.ACTIVE)),l.bike.list.appendChild(a)}();e(l.bike).addClass(n.a.ROUTER_PROFILE_BIKE),1==l.bike.list.children.length?(this.routeProfile.appendChild(l.bike),this.$routeProfileBike.click(function(t){r.clearSiblings(this),r.routeProfile.active=e(this).data("profile"),r.recalculateRoute()})):(y.appendChild(l.bike),y.appendChild(l.bike.list),this.routeProfile.appendChild(y),this.$routeProfileBike.click(function(t){r.clearSiblings(e(this).parent()),r.routeProfile.active=e(this).data("profile"),r.recalculateRoute()}))}if(this.options.mapController.data.router_profiles[8]||this.options.mapController.data.router_profiles[9]){var _=document.createElement("span");l.foot=document.createElement("button"),l.foot.list=document.createElement("ul"),this.$routeProfileFoot=e(l.foot);for(var k=8;k<10;k++)if(this.options.mapController.data.router_profiles[k]){var v=document.createElement("li");v.innerHTML=this.options.mapController.data.router_profiles[k],e(v).data("profile",[k]),e(v).click(function(t){r.childClick(e(this))}),this.$routeProfileFoot.data("profile")||(this.$routeProfileFoot.data("profile",k),e(v).addClass(n.a.ACTIVE)),l.foot.list.appendChild(v)}e(l.foot).addClass(n.a.ROUTER_PROFILE_FOOT),1==l.foot.list.children.length?(this.routeProfile.appendChild(l.foot),this.$routeProfileFoot.click(function(t){r.clearSiblings(this),r.routeProfile.active=e(this).data("profile"),r.recalculateRoute()})):(_.appendChild(l.foot),_.appendChild(l.foot.list),this.routeProfile.appendChild(_),this.$routeProfileFoot.click(function(t){r.clearSiblings(e(this).parent()),r.routeProfile.active=e(this).data("profile"),r.recalculateRoute()}))}this.options.mapController.data.router_profiles[10]&&(l.wheelchair=document.createElement("button"),e(l.wheelchair).addClass(n.a.ROUTER_PROFILE_WHEELCHAIR),this.$routeProfileWheelchair=e(l.wheelchair),this.routeProfile.appendChild(l.wheelchair),this.$routeProfileWheelchair.click(function(e){r.clearSiblings(this),r.routeProfile.active="10",r.recalculateRoute()})),this.childClick=function(e){r.routeProfile.active=e.data("profile"),r.clearSiblings(e),r.recalculateRoute()},this.clearSiblings=function(t){for(var r=e(t).parent().children(),a=0;a<r.length;a++)e(r[a]).removeClass(n.a.ACTIVE);e(t).addClass(n.a.ACTIVE)};for(var w in this.options.mapController.data.router_profiles)if(this.options.mapController.data.router_profiles.hasOwnProperty(w)){this.routeProfile.active=w;break}}else console.warn("No Router Profiles enabled");return this.fromInputWrapper.appendChild(c),this.fromInputWrapper.appendChild(this.fromInput),this.fromInputWrapper.appendChild(h),g&&"0"==this.options.mapController.data.router_api_selection&&this.$buttonOver.hide(),this.$routerFromClear.hide(),this.$routerFromClear.click(function(e){e.preventDefault(),r.clearInput(r.$fromInput)}),this.$buttonOver.click(function(t){t.preventDefault(),r.index++,r.$buttonOver.prop("disabled",!0),r.overInputWrapper=document.createElement("div"),r.overInputWrapper.className=n.a.ROUTER_INPUT_WRAPPER,r.overInput=document.createElement("input"),r.overInput.type="text",r.overInput.className=n.a.ROUTER_INPUT_FROM,r.overInput.id=r.overInput.name="routingOver",u=document.createElement("label"),u.setAttribute("for","routingFrom"),u.innerHTML=o.a.ROUTER_Label_Interim,d=document.createElement("button"),d.className=n.a.ROUTER_INPUT_CLEAR,d.title=o.a.ROUTER_CLEAR_TITLE,d.innerHTML=o.a.ROUTER_CLEAR_HTML,d.id=r.index,r.$routerOverClear=e(d),r.overInputWrapper.appendChild(u),r.overInputWrapper.appendChild(r.overInput),r.overInputWrapper.appendChild(d),a.appendChild(r.overInputWrapper),r.$routerOverClear.click(function(t){t.preventDefault(),r.clearOver(r.$overInput,this.id),e(this).parent().remove()}),r.$overInput=e(r.overInput),r.$overInput.on("change",function(){r.performSearch(r.$overInput,"overValue")})}),this.$switchFromTo.click(function(e){e.preventDefault();var t=document.getElementById("routingFrom").value;document.getElementById("routingFrom").value=document.getElementById("routingTo").value,document.getElementById("routingTo").value=t;var a=r.fromValue;r.fromValue=r.toValue,r.toValue=a,r.recalculateRoute()}),this.$print.click(function(e){e.preventDefault();var t=document.getElementsByClassName("c4g-router-instructions-wrapper")[0];if(t){var r=window.open("","","left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0");r.document.write(t.innerHTML),r.document.close(),r.focus(),r.print(),r.close()}}),this.$fromInput=e(this.fromInput),this.$fromInput.on("change",function(){r.performSearch(r.$fromInput,"fromValue"),""!==r.$fromInput.val()?r.$routerFromClear.show():r.$routerFromClear.hide()}),a.appendChild(this.routerButtonBar),this.routeProfile&&this.routeProfile.children&&a.appendChild(this.routeProfile),a.appendChild(this.fromInputWrapper),this.toInputWrapper=document.createElement("div"),this.toInputWrapper.className=n.a.ROUTER_INPUT_WRAPPER,this.toInput=document.createElement("input"),this.toInput.type="text",this.toInput.className=n.a.ROUTER_INPUT_TO,this.toInput.id=this.toInput.name="routingTo",p=document.createElement("label"),p.setAttribute("for","routingTo"),p.innerHTML=o.a.ROUTER_TO_LABEL,m=document.createElement("button"),m.className=n.a.ROUTER_INPUT_CLEAR,m.title=o.a.ROUTER_CLEAR_TITLE,m.innerHTML=o.a.ROUTER_CLEAR_HTML,this.$routerToClear=e(m),this.toInputWrapper.appendChild(p),this.toInputWrapper.appendChild(this.toInput),this.toInputWrapper.appendChild(m),this.$routerToClear.hide(),r.$routerToClear.click(function(e){e.preventDefault(),r.clearInput(r.$toInput)}),this.$toInput=e(this.toInput),this.$toInput.on("change",function(){r.performSearch(r.$toInput,"toValue"),""!==r.$toInput.val()?r.$routerToClear.show():r.$routerToClear.hide()}),a.appendChild(this.toInputWrapper),r.statusBar.appendChild(this.getAttribution()),this.addView({name:"router-view",triggerConfig:{tipLabel:o.a.ROUTER_VIEW_ADDRESS_INPUT,className:n.a.ROUTER_VIEW_ADDRESS_INPUT,withHeadline:!1},sectionElements:[{section:this.topToolbar,element:a},{section:this.contentContainer,element:i}]})},setInput:function(e,t){if(!t)return!1;t=ol.proj.toLonLat(t),e?(this.performReverseSearch(this.$fromInput,t),this.fromValue=new ol.geom.Point(t)):(this.performReverseSearch(this.$toInput,t),this.toValue=new ol.geom.Point(t)),this.recalculateRoute()},getAttribution:function(){var e=this,t=void 0,r=void 0,a=void 0,o=void 0,i=void 0;switch(e.options.mapController.data.router_api_selection){case"0":case"1":r='<a target="_blank" href="http://project-osrm.org/">Project OSRM</a>';break;case"2":r='<a target="_blank" href="https://openrouteservice.org/">openrouteservice</a>'}switch(e.options.mapController.data.geosearch.geosearch_engine){case"1":t='- Geocoder by <a target="_blank" href="https://nominatim.openstreetmap.org/">OpenStreetMap</a> ';break;case"2":t='- Geocoder by <a target="_blank" href="http://www.mapquest.com/">MapQuest</a> ';break;case"3":t="- Nominatim-Geocoder ";break;case"4":t='- Geocoder by <a target="_blank" href="https://www.con4gis.org/kartendienste.html">con4gis</a> '}switch(e.options.mapController.data.router_api_selection){case"0":case"1":a='- OSRM hosting by <a target="_blank" href="http://algo2.iti.kit.edu/">KIT</a>';break;case"2":a='\'- ORS hosting by <a target="_blank" href="https://www.geog.uni-heidelberg.de/gis/heigit_en.html">HeiGIT</a>\''}return i=r+t+a,o=document.createElement("div"),o.className=n.a.ROUTER_ATTRIBUTION_WRAPPER,o.innerHTML=i,e.options.mapController.data.router_attribution&&(o.innerHTML=e.options.mapController.data.router_attribution),o},recalculateRoute:function(){var e,t=this.options.mapController.proxy;if(this.locationsSource.clear(),this.fromValue&&(e=new ol.Feature({geometry:this.fromValue.clone().transform("EPSG:4326","EPSG:3857")}),this.options.mapController.data.router_from_locstyle&&t.locationStyleController.arrLocStyles[this.options.mapController.data.router_from_locstyle]&&e.setStyle(t.locationStyleController.arrLocStyles[this.options.mapController.data.router_from_locstyle].style),this.locationsSource.addFeature(e)),this.toValue&&(e=new ol.Feature({geometry:this.toValue.clone().transform("EPSG:4326","EPSG:3857")}),this.options.mapController.data.router_to_locstyle&&t.locationStyleController.arrLocStyles[this.options.mapController.data.router_to_locstyle]&&e.setStyle(t.locationStyleController.arrLocStyles[this.options.mapController.data.router_to_locstyle].style),this.locationsSource.addFeature(e)),this.overValue)for(var r in this.overValue)e=new ol.Feature({geometry:this.overValue[r].clone().transform("EPSG:4326","EPSG:3857")}),this.options.mapController.data.router_interim_locstyle&&t.locationStyleController.arrLocStyles[this.options.mapController.data.router_interim_locstyle]&&e.setStyle(t.locationStyleController.arrLocStyles[this.options.mapController.data.router_interim_locstyle].style),this.locationsSource.addFeature(e);this.fromValue&&this.toValue&&(this.overValue?this.performViaRoute(this.fromValue,this.toValue,this.overValue):this.performViaRoute(this.fromValue,this.toValue))},performViaRoute:function(e,t,r){var a,o,n,i,s;if(o=this,n=[e.getCoordinates()[1],e.getCoordinates()[0]],i=[t.getCoordinates()[1],t.getCoordinates()[0]],r){s=new Array;for(var l in r)s.push([r[l].getCoordinates()[1],r[l].getCoordinates()[0]])}if("1"==this.options.mapController.data.router_api_selection||"2"==this.options.mapController.data.router_api_selection){if(a=o.routingApi+"/"+n,r)for(var c=0;c<s.length;c++)a+="/"+s[c];return a+="/"+i,this.routeProfile&&this.routeProfile.active&&(a+="?profile="+this.routeProfile.active),this.spinner.show(),jQuery.ajax({url:a}).done(function(e){o.response=e,e&&o.showRoute(e)}).always(function(){o.spinner.hide(),o.update()}),""}return a=o.routingApi+"?output=json&instructions=true&alt=false&loc_from="+n+"&loc_to="+i,this.spinner.show(),jQuery.ajax({url:a}).done(function(e){e&&o.showRoute(e)}).always(function(){o.spinner.hide(),o.update()}),""},showRoute:function(e){this.showRouteLayer(e,0),this.showRouteInstructions(e,0)},showAltRoute:function(e,t){this.showRouteLayer(e,t),this.showRouteInstructions(e,t)},showRouteLayer:function(t,r){var a,o,n,i,s,l,r=r||0;t&&(this.routingWaySource.clear(),this.routingAltWaySource.clear(),a=this.options.mapController.map.getView(),"1"==this.options.mapController.data.router_api_selection||"2"==this.options.mapController.data.router_api_selection?(o=new ol.format.Polyline,t.routes&&t.routes[1]&&(1==r?(i=o.readFeatures(t.routes[0].geometry,{dataProjection:"EPSG:4326",featureProjection:a.getProjection()}),i[0].setId(0)):(i=o.readFeatures(t.routes[1].geometry,{dataProjection:"EPSG:4326",featureProjection:a.getProjection()}),i[0].setId(1))),n=o.readFeatures(t.routes[r].geometry,{dataProjection:"EPSG:4326",featureProjection:a.getProjection()}),n[0].setId(r)):(o=new ol.format.Polyline({factor:this.options.mapController.data.router_viaroute_precision||1e6}),n=o.readFeatures(t.route_geometry,{dataProjection:"EPSG:4326",featureProjection:a.getProjection()})),"1"==this.options.mapController.data.router_alternative&&t.routes&&t.routes.length>1&&t.routes[1]&&this.routingAltWaySource.addFeatures(i),this.routingWaySource.addFeatures(n),this.options.mapController.map.renderSync(),a.animate({start:+new Date,duration:2e3,resolution:a.getResolution(),center:[0,0]}),l=0,this.options.mapController.activePortside&&this.options.mapController.activePortside.container&&(l=e(this.options.mapController.activePortside.container).outerWidth()),s=0,this.options.mapController.activeStarboard&&this.options.mapController.activeStarboard.container&&(s=e(this.options.mapController.activeStarboard.container).outerWidth()),a.fit(n[0].getGeometry(),this.options.mapController.map.getSize(),{padding:[0,s,0,l]}))},getInstructionIcon:function(e,t){var r="";switch(e){case"right":r="turn-right.png";break;case"left":r="turn-left.png";break;case"sharp left":r="sharp-left.png";break;case"sharp right":r="sharp-right.png";break;case"slight left":r="slight-left.png";break;case"slight right":r="slight-right.png";break;case"uturn":r="u-turn.png";break;case"straight":r="continue.png";break;default:r="default.png"}switch(t){case"depart":r="head.png";break;case"arrive":r="target.png";break;case"roundabout":r="round-about.png"}return"bundles/con4gismaps/vendor/osrm/images/"+r},getInstructionIconORS:function(e){var t=void 0;switch(e){case 0:t="turn-left.png";break;case 1:t="turn-right.png";break;case 2:t="sharp-left.png";break;case 3:t="sharp-right.png";break;case 4:t="slight-left.png";break;case 5:t="slight-right.png";break;case 6:t="continue.png";break;case 7:case 8:t="round-about.png";break;case 9:t="u-turn.png";break;case 10:t="target.png";break;case 11:t="head.png";break;case 12:t="slight-left.png";break;case 13:t="slight-right.png"}return document.getElementsByTagName("base")[0].href+"bundles/con4gismaps/vendor/osrm/images/"+t},getTypeText:function(e){var t;switch(e){case"turn":t="ROUTER_5.X_TYPE_0";break;case"new name":t="ROUTER_5.X_TYPE_1";break;case"depart":t="ROUTER_5.X_TYPE_2";break;case"arrive":t="ROUTER_5.X_TYPE_3";break;case"merge":t="ROUTER_5.X_TYPE_4";break;case"on ramp":t="ROUTER_5.X_TYPE_5";break;case"off ramp":t="ROUTER_5.X_TYPE_6";break;case"fork":t="ROUTER_5.X_TYPE_7";break;case"end of road":t="ROUTER_5.X_TYPE_8";break;case"use lane":t="ROUTER_5.X_TYPE_9";break;case"continue":t="ROUTER_5.X_TYPE_10";break;case"roundabout":case"exit roundabout":t="ROUTER_5.X_TYPE_11";break;case"rotary":case"exit rotary":t="ROUTER_5.X_TYPE_12";break;case"roundabout turn":t="ROUTER_5.X_TYPE_13";break;case"notification":t="ROUTER_5.X_TYPE_14"}return o.a[t]},getModifierText:function(e){var t;switch(e){case"uturn":t="ROUTER_5.X_MOD_0";break;case"sharp right":t="ROUTER_5.X_MOD_1";break;case"right":t="ROUTER_5.X_MOD_2";break;case"slight right":t="ROUTER_5.X_MOD_3";break;case"straight":t="ROUTER_5.X_MOD_4";break;case"slight left":t="ROUTER_5.X_MOD_5";break;case"left":t="ROUTER_5.X_MOD_6";break;case"sharp left":t="ROUTER_5.X_MOD_7";break;default:t="ROUTER_5.X_MOD_8"}return o.a[t]},getDrivingInstructionIcon:function(e){var t,r;switch(t=e.replace(/^11-\d{1,}$/,"11"),r="default.png",t){case"1":r="continue.png";break;case"2":r="slight-right.png";break;case"3":r="turn-right.png";break;case"4":r="sharp-right.png";break;case"5":r="u-turn.png";break;case"6":r="sharp-left.png";break;case"7":r="turn-left.png";break;case"8":r="slight-left.png";break;case"10":r="head.png";break;case"11":r="round-about.png";break;case"15":r="target.png"}return document.getElementsByTagName("base")[0].href+"bundles/con4gismaps/vendor/osrm/images/"+r},getText:function(e){var t="ROUTER_"+e;return void 0===o.a[t]&&console.warn(t+" can't find in language files."),o.a[t]},getDrivingInstruction:function(e){var t,r;return t="DIRECTION_"+e.replace(/^11-\d{2,}$/,"11-x"),r=this.getText(t),r||(r=this.getText("DIRECTION_0")),r},showRouteInstructions:function(t,r){var a,i,s,l,c,u,p,h,d,m,r=r||0,b="",g="",y="",f="";if(a=this,void 0===a.routerInstructionsWrapper?(a.routerInstructionsWrapper=document.createElement("div"),a.routerInstructionsWrapper.className=n.a.ROUTER_INSTRUCTIONS_WRAPPER,a.routerViewContentWrapper.appendChild(a.routerInstructionsWrapper)):e(a.routerInstructionsWrapper).empty(),s=document.createElement("div"),s.className=n.a.ROUTER_INSTRUCTIONS_HEADER,t){if("1"==this.options.mapController.data.router_api_selection?(t.routes[r].legs[0].summary&&(b=t.routes[r].legs[0].summary.split(",")[0],g=t.routes[r].legs[0].summary.split(",")[1],t.routes[r].legs[1]&&(g=t.routes[r].legs[1].summary.split(",")[1])),y=this.toHumanDistance(t.routes[r].distance),f=this.toHumanTime(t.routes[r].duration)):"0"==this.options.mapController.data.router_api_selection?(t.route_name&&(b=t.route_name[0],g=t.route_name[1]),t.route_summary&&(y=this.toHumanDistance(t.route_summary.total_distance),f=this.toHumanTime(t.route_summary.total_time))):"2"==this.options.mapController.data.router_api_selection&&(f=this.toHumanTime(t.routes[r].summary.duration),y=this.toHumanDistance(t.routes[r].summary.distance)),b&&g?s.innerHTML="<label>"+o.a.ROUTER_VIEW_LABEL_ROUTE+"</label> <em>"+b+" &#8594; "+g+"</em><br><label>"+o.a.ROUTER_VIEW_LABEL_DISTANCE+"</label> <em>"+y+"</em><br><label>"+o.a.ROUTER_VIEW_LABEL_TIME+"</label> <em>"+f+"</em><br>":this.routeProfile.active&&(s.innerHTML="<label>"+o.a.ROUTER_VIEW_LABEL_PROFILE+"</label> <em>"+this.options.mapController.data.router_profiles[this.routeProfile.active]+"</em><br><label>"+o.a.ROUTER_VIEW_LABEL_DISTANCE+"</label> <em>"+y+"</em><br><label>"+o.a.ROUTER_VIEW_LABEL_TIME+"</label> <em>"+f+"</em><br>"),a.routerInstructionsWrapper.appendChild(s),i=document.createElement("div"),l='<table class="'+n.a.ROUTER_INSTRUCTIONS_TABLE+'" cellpadding="0" cellspacing="0">',"1"===this.options.mapController.data.router_api_selection)for(m=0;m<t.routes[r].legs.length;m+=1)for(d=0;d<t.routes[r].legs[m].steps.length;d+=1){c=t.routes[r].legs[m].steps[d],u=c.maneuver.type,c.maneuver.modifier&&(p=c.maneuver.modifier),h=n.a.ROUTER_INSTRUCTIONS_ITEM_ODD,d%2==0&&(h=n.a.ROUTER_INSTRUCTIONS_ITEM_EVEN),h+=" "+n.a.ROUTER_INSTRUCTIONS_ITEM,l+='<tr class="'+h+'">',l+='<td class="'+n.a.ROUTER_INSTRUCTIONS_ITEM_DIRECTION+'">',l+='<img class="'+n.a.ROUTER_INSTRUCTIONS_ITEM_DIRECTION_ICON+'" src="'+this.getInstructionIcon(p,u)+'" alt=""/>',l+="</td>",l+='<td class="'+n.a.ROUTER_INSTRUCTIONS_ITEM_DIRECTION_TEXT+'" data-pos="'+c.maneuver.location+'">';var _=this.getTypeText(c.maneuver.type).replace(/%s/,c.name).replace(/%m/,this.getModifierText(c.maneuver.modifier)).replace(/%z/,c.maneuver.exit);_=c.name.length<1?_.replace(/\[.*?\]/g,""):_.replace(/\[(.*)\]/,"$1"),l+=_,l+="</div>",l+="</td>",l+='<td class="'+n.a.ROUTER_INSTRUCTIONS_ITEM_DIRECTION_DISTANCE+'">',d!==t.routes[r].legs[0].steps.length-1&&(l+=this.toHumanDistance(c.distance)),l+="</td>",l+="</tr>"}else if("0"===this.options.mapController.data.router_api_selection)for(d=0;d<t.route_instructions.length;d+=1)c=t.route_instructions[d],h=n.a.ROUTER_INSTRUCTIONS_ITEM_ODD,d%2==0&&(h=n.a.ROUTER_INSTRUCTIONS_ITEM_EVEN),h+=" "+n.a.ROUTER_INSTRUCTIONS_ITEM,l+='<tr class="'+h+'">',l+='<td class="'+n.a.ROUTER_INSTRUCTIONS_ITEM_DIRECTION+'">',l+='<img class="'+n.a.ROUTER_INSTRUCTIONS_ITEM_DIRECTION_ICON+'" src="'+this.getDrivingInstructionIcon(c[0])+'" alt=""/>',l+="</td>",l+='<td class="'+n.a.ROUTER_INSTRUCTIONS_ITEM_DIRECTION_TEXT+'" data-pos="'+c[3]+'">',""!==c[1]?l+=this.getDrivingInstruction(c[0]).replace(/\[(.*)\]/,"$1").replace(/%s/,c[1]).replace(/%d/,this.getText(c[6])):l+=this.getDrivingInstruction(c[0]).replace(/\[(.*)\]/,"").replace(/%d/,this.getText(c[6])),l+="</div>",l+="</td>",l+='<td class="'+n.a.ROUTER_INSTRUCTIONS_ITEM_DIRECTION_DISTANCE+'">',d!==t.route_instructions.length-1&&(l+=this.toHumanDistance(c[5])),l+="</td>",l+="</tr>";else if("2"===this.options.mapController.data.router_api_selection)for(m=0;m<t.routes[r].segments.length;m+=1)for(d=0;d<t.routes[r].segments[m].steps.length;d+=1)c=t.routes[r].segments[m].steps[d],u=c.type,h=n.a.ROUTER_INSTRUCTIONS_ITEM_ODD,d%2==0&&(h=n.a.ROUTER_INSTRUCTIONS_ITEM_EVEN),h+=" "+n.a.ROUTER_INSTRUCTIONS_ITEM,l+='<tr class="'+h+'">',l+='<td class="'+n.a.ROUTER_INSTRUCTIONS_ITEM_DIRECTION+'">',l+='<img class="'+n.a.ROUTER_INSTRUCTIONS_ITEM_DIRECTION_ICON+'" src="'+this.getInstructionIconORS(u)+'" alt=""/>',l+="</td>",c.maneuver?l+='<td class="'+n.a.ROUTER_INSTRUCTIONS_ITEM_DIRECTION_TEXT+'" data-pos="'+c.maneuver.location+'">':l+='<td class="'+n.a.ROUTER_INSTRUCTIONS_ITEM_DIRECTION_TEXT+'" data-pos="0">',l+=c.instruction,l+="</div>",l+="</td>",l+='<td class="'+n.a.ROUTER_INSTRUCTIONS_ITEM_DIRECTION_DISTANCE+'">',d!==t.routes[r].segments[0].steps.length-1&&(l+=this.toHumanDistance(c.distance)),l+="</td>",l+="</tr>";l+="</table>",i.innerHTML=l,a.routerInstructionsWrapper.appendChild(i),this.adjustInstructionMapInteraction()}},adjustInstructionMapInteraction:function(t){var r,a,o,n=this;r=function(e){if(n.routingWaySource&&n.routingWaySource.getFeatures()&&"0"==n.options.mapController.data.router_api_selection){var t=n.routingWaySource.getFeatures()[0];if(t){var r=t.getGeometry().getCoordinates()[e.data("pos")];n.routingHintSource.clear();var a=new ol.Feature({geometry:new ol.geom.Point(r)});n.routingHintSource.addFeature(a),n.options.mapController.map.getView().setCenter(r)}}if(n.routingWaySource&&n.options.mapController.data.router_api_selection>="1"){n.routingHintSource.clear();var o=e.data("pos"),i=o.split(",");i[0]=parseFloat(i[0]),i[1]=parseFloat(i[1]);var s=ol.proj.fromLonLat(i),a=new ol.Feature({geometry:new ol.geom.Point(s)});n.routingHintSource.addFeature(a),n.options.mapController.map.getView().setCenter(s)}},a=function(e){if(n.routingWaySource&&n.routingWaySource.getFeatures()&&"0"==n.options.mapController.data.router_api_selection){var t=n.routingWaySource.getFeatures()[0];if(t){n.routingHintSource.clear();var r=new ol.Feature({geometry:new ol.geom.Point(t.getGeometry().getCoordinates()[e.data("pos")])});n.routingHintSource.addFeature(r)}}if(n.routingWaySource&&n.routingWaySource.getFeatures()&&n.options.mapController.data.router_api_selection>="1"){var t=n.routingWaySource.getFeatures()[0];if(t){n.routingHintSource.clear();var a=e.data("pos"),o=a.split(",");o[0]=parseFloat(o[0]),o[1]=parseFloat(o[1]);var i=ol.proj.fromLonLat(o),r=new ol.Feature({geometry:new ol.geom.Point(i)});n.routingHintSource.addFeature(r)}}},o=function(){n.routingHintSource.clear()},e("[data-pos]",t).each(function(t,n){var i=e(n);i.click(function(){r(i)}),i.on("mouseenter",function(){a(i)}),i.on("mouseleave",function(){o()})})},clearInput:function(t){t.val(""),t.trigger("change"),this.routingWaySource.clear(),this.routingAltWaySource.clear(),this.routingHintSource.clear(),e(this.routerInstructionsWrapper).empty(),this.recalculateRoute(),this.update()},clearOver:function(t,r){this.overValue&&delete this.overValue[r],this.$buttonOver.prop("disabled",!1),e(this.routerInstructionsWrapper).empty(),this.recalculateRoute(),this.update()},performReverseSearch:function(e,t){var r,a=this;r=this.geoReverseSearchApi+"?format=json&lat="+t[1]+"&lon="+t[0],this.spinner.show(),jQuery.ajax({url:r}).done(function(t){if(t){var r="";t.address&&(t.address.city&&(r=t.address.city,t.address.road&&(r=", "+r)),t.address.town&&(r=t.address.town,t.address.road&&(r=", "+r)),t.address.road&&(t.address.house_number&&(r=" "+t.address.house_number+r),r=t.address.road+r)),""===r&&(r=t.display_name),e.val(r),"routingFrom"===e.attr("name")?a.$routerFromClear.show():"routingTo"===e.attr("name")&&a.$routerToClear.show(),a.recalculateRoute()}}).always(function(){a.spinner.hide()})},performSearch:function(e,t){var r,a,n,i,s;return i=this,""===e.val()?(delete i[t],""):(r=i.options.mapController.map,a=r.getView().calculateExtent(r.getSize()),a=ol.proj.transformExtent(a,r.getView().getProjection(),"EPSG:4326"),n="&viewbox="+a[0]+","+a[1]+","+a[2]+","+a[3],s=i.geoSearchApi+"?format=json&limit=1&q="+encodeURI(e.val())+n,jQuery.ajax({url:s}).done(function(r){r.length>0?"overValue"===t?(i.overValue||(i.overValue={}),i.overValue[i.index]=new ol.geom.Point([parseFloat(r[0].lon),parseFloat(r[0].lat)]),i.$buttonOver.prop("disabled",!1)):i[t]=new ol.geom.Point([parseFloat(r[0].lon),parseFloat(r[0].lat)]):(alert(o.a.ROUTER_VIEW_ALERT_ADDRESS),i.clearInput(e),delete i[t]),i.recalculateRoute()}).error(function(){alert(o.a.ROUTER_VIEW_ALERT_GEOCODING)}),"")},toHumanDistance:function(e){var t;return t=parseInt(e,10),t/=1e3,t>=100?t.toFixed(0)+"&nbsp;km":t>=10?t.toFixed(1)+"&nbsp;km":t>=.1?t.toFixed(2)+"&nbsp;km":(1e3*t).toFixed(0)+"&nbsp;m"},toHumanTime:function(e){var t,r,a;return t=parseInt(e,10),r=parseInt(t/60,10),t%=60,a=parseInt(r/60,10),r%=60,0===a&&0===r?t+"&nbsp;s":0===a?r+"&nbsp;min":a+"&nbsp;h&nbsp;"+r+"&nbsp;min"}})}(jQuery,this.c4g);var i=this.c4g.maps.control.Router},"8ypq":function(e,t,r){"use strict";r.d(t,"a",function(){return a}),this.c4g=this.c4g||{},this.c4g.maps=this.c4g.maps||{},this.c4g.maps.config=this.c4g.maps.config||{},function(e,t){t.maps.config.osm=e.extend(t.maps.config.osm,{CycleMap:{attributions:'Style by <a target="_blank" href="http://www.opencyclemap.org/">OpenCycleMap</a> '+ol.source.OSM.ATTRIBUTION,crossOrigin:"anonymous",minZoom:0,maxZoom:19,url:"https://{a-c}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png"},German:{attributions:'Style by <a target="_blank" href="http://www.openstreetmap.de/germanstyle.html">openstreetmap.de</a> '+ol.source.OSM.ATTRIBUTION,crossOrigin:"anonymous",minZoom:0,maxZoom:19,url:"https://{a-c}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png"},GermanTransport:{attributions:'Style by <a target="_blank" href="http://www.memomaps.de">Memomaps</a> '+ol.source.OSM.ATTRIBUTION,minZoom:0,maxZoom:19,url:"http://tile.memomaps.de/tilegen/{z}/{x}/{y}.png"},LandscapeMap:{attributions:'Style by <a target="_blank" href="http://www.opencyclemap.org/">OpenCycleMap</a> '+ol.source.OSM.ATTRIBUTION,crossOrigin:"anonymous",minZoom:0,maxZoom:19,url:"https://{a-c}.tile.opencyclemap.org/landscape/{z}/{x}/{y}.png"},Mapnik:{attributions:ol.source.OSM.ATTRIBUTION,crossOrigin:"anonymous"},TransportMap:{attributions:'Style by <a target="_blank" href="http://www.opencyclemap.org/">OpenCycleMap</a> '+ol.source.OSM.ATTRIBUTION,minZoom:0,maxZoom:19,crossOrigin:"anonymous",url:"http://{a-c}.tile2.opencyclemap.org/transport/{z}/{x}/{y}.png"},NONE:""}),t.maps.config.stamen=e.extend(t.maps.config.stamen,{Toner:{attributions:ol.source.OSM.ATTRIBUTION,layer:"toner",minZoom:0,maxZoom:18,crossOrigin:"anonymous"},TonerLabels:{attributions:ol.source.OSM.ATTRIBUTION,layer:"toner-labels",minZoom:0,maxZoom:18,crossOrigin:"anonymous"},TonerLines:{attributions:ol.source.OSM.ATTRIBUTION,layer:"toner-lines",minZoom:0,maxZoom:18,crossOrigin:"anonymous"},Terrain:{attributions:ol.source.OSM.ATTRIBUTION,layer:"terrain",minZoom:0,maxZoom:18,crossOrigin:"anonymous"},Watercolor:{attributions:ol.source.OSM.ATTRIBUTION,layer:"watercolor",minZoom:0,maxZoom:18,crossOrigin:"anonymous"},NONE:""}),t.maps.config.mapquest=e.extend(t.maps.config.mapquest,{MapQuestOpen:{layer:"osm"},MapQuestHyb:{layer:"hyb"},MapQuestSat:{layer:"sat"},NONE:""}),t.maps.config.mapbox={Mapbox:{tileSize:[512,512],attributions:'© <a target="_blank" href="https://www.mapbox.com/about/maps/">Mapbox</a> '+ol.source.OSM.ATTRIBUTION,minZoom:0,maxZoom:22,crossOrigin:"anonymous"},MapboxClassic:{attributions:'© <a target="_blank" href="https://www.mapbox.com/about/maps/">Mapbox</a> '+ol.source.OSM.ATTRIBUTION,minZoom:0,maxZoom:22,crossOrigin:"anonymous"}},t.maps.config.klokan={OpenMapTiles:{format:new ol.format.MVT,tileGrid:ol.tilegrid.createXYZ({tileSize:512,maxZoom:22}),tilePixelRatio:8,attributions:'© <a target="_blank" href="https://openmaptiles.org/">OpenMapTiles</a> '+ol.source.OSM.ATTRIBUTION,minZoom:0,maxZoom:22,crossOrigin:"anonymous"},TileHosting:{format:new ol.format.MVT,tileGrid:ol.tilegrid.createXYZ({tileSize:512,maxZoom:22}),tilePixelRatio:8,attributions:'© <a target="_blank" href="https://tilehosting.com/">TileHosting</a> '+ol.source.OSM.ATTRIBUTION,minZoom:0,maxZoom:22,crossOrigin:"anonymous"}},t.maps.config.here={HERE:{tileSize:[512,512],attributions:'Map Tiles © <a target="_blank" href="https://developer.here.com">HERE</a> '+ol.source.OSM.ATTRIBUTION,minZoom:0,maxZoom:22,crossOrigin:"anonymous"}},t.maps.config.thunderforest={Thunderforest:{tileSize:[512,512],attributions:'Map Tiles © <a target="_blank" href="https://www.thunderforest.com/">Thunderforest</a> '+ol.source.OSM.ATTRIBUTION,minZoom:0,maxZoom:19,crossOrigin:"anonymous"}}}(jQuery,this.c4g);var a=this.c4g.maps.config},"AV+b":function(e,t,r){"use strict";r.d(t,"a",function(){return i});var a=r("TewV"),o=r("g1Hq"),n=r("muuc");this.c4g=this.c4g||{},this.c4g.maps=this.c4g.maps||{},this.c4g.maps.control=this.c4g.maps.control||{},function(e,t){t.maps.control.Infopage=function(t){if(this.options=e.extend({className:a.a.INFOPAGE,name:"infopage",headline:o.a.INFOPAGE,create:!0,mapController:void 0,direction:"left"},t),!this.options.mapController)return!1;this.mainSection=document.createElement("div"),n.a.call(this,this.options)},ol.inherits(t.maps.control.Infopage,n.a),t.maps.control.Infopage.prototype=e.extend(t.maps.control.Infopage.prototype,{init:function(){var e=this;this.spinner.show(),this.viewInfopage=this.addInfoView(),this.viewInfopage.activate();e.options.mapController.proxy,e.options.mapController.map;return this.mainSectionInfo=document.createElement("p"),this.mainSectionInfo.innerHTML=e.options.mapController.data.infopage,this.mainSection.appendChild(this.mainSectionInfo),this.contentContainer.setElement(this.mainSection),this.spinner.hide(),!0},addInfoView:function(){return this.addView({name:"info",triggerConfig:{tipLabel:o.a.INFOPAGE_VIEW_TRIGGER,className:a.a.INFOPAGE_VIEW_TRIGGER,withHeadline:!1},sectionElements:[{section:this.contentContainer,element:this.mainSection},{section:this.topToolbar,element:this.viewTriggerBar}]})},addInfopage:function(e){var t,r;return t=this,t.addInfopage({name:"Infopage",triggerConfig:{tipLabel:"Infopage",className:"c4g_infopage_trigger",withHeadline:!1},sectionElements:[{section:t.topToolbar,element:t.viewTriggerBar}],initFunction:function(){return t.spinner.show(),r=new ol.Collection,t.spinner.hide(),!0},activateFunction:function(){},deactivateFunction:function(){}})}})}(jQuery,this.c4g);var i=this.c4g.maps.control.Infopage},DLzr:function(e,t,r){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}r.d(t,"a",function(){return l});var o=r("eeiK"),n=r("TewV"),i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),l=function(){function e(t){a(this,e),this.proxy=t,this.mapController=t.options.mapController,this.arrLocStyles=[]}return s(e,[{key:"loadLocationStyles",value:function(e,t){var r=void 0,a={},s={},l=this,c=1,u=void 0;if(r=t&&"object"===(void 0===t?"undefined":i(t))?t:{},u=function(e,t){t&&(a[t]=!1,s[t]=!1),jQuery.ajax({dataType:l.proxy.options.mapController.data.jsonp?"jsonp":"json",url:l.proxy.api_locstyle_url,data:{ids:e}}).done(function(e){var a=void 0,n=void 0,i=!0;if(e.length>0)for(a=0;a<e.length;a+=1)n=e[a],l.arrLocStyles[n.id]=new o.a(n,l);if(t){s[t]=!0;for(var c in s)if(s.hasOwnProperty(c)&&!s[c]){i=!1;break}}!r.done||"function"!=typeof r.done||t&&!i||r.done()}).always(function(e,o){var i=!0;if(t){a[t]=!0;for(var s in a)if(a.hasOwnProperty(s)&&!a[s]){i=!1;break}}!r.always||"function"!=typeof r.always||t&&!i||r.always(),$(l.proxy.options.mapController.spinner.element).hasClass(n.a.HIDE)||l.proxy.options.mapController.spinner.hide()}).fail(function(e,t,r){console.warn(r)})},e.length>100)for(;e.length>0;)u(e.splice(0,100),c),c++;else u(e)}}]),e}()},EK57:function(e,t,r){"use strict";r.d(t,"a",function(){return c});var a=r("muuc"),o=r("fZpj"),n=r("mV96"),i=r("xx1Y"),s=(r("yNLE"),"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e});this.c4g=this.c4g||{},this.c4g.maps=this.c4g.maps||{},this.c4g.maps.control=this.c4g.maps.control||{};var l=this.c4g;!function(e,t){t.maps.control.Starboard=function(t){this.options=e.extend({create:!0,extDiv:!1,defaultOpen:!1,mapController:void 0,name:"starboard",direction:"right",filter:!1},t),!this.options.headline||this.options.headline.length,this.hook_layerswitcher_loaded=this.hook_layerswitcher_loaded||[],a.a.call(this,this.options)},ol.inherits(t.maps.control.Starboard,a.a),t.maps.control.Starboard.prototype=e.extend(t.maps.control.Starboard.prototype,{init:function(){var e,r,a,l,c,u,p=!1;return!!this.initialized||(c=this,this.plugins={},u=function(){for(a in c.options.mapController.proxy.layerController.arrLayers)if(c.options.mapController.proxy.layerController.arrLayers.hasOwnProperty(a)&&(l=c.options.mapController.proxy.layerController.arrLayers[a],!l.renderSpecial)){r=!0;break}if(r&&c.options.mapController.proxy.layerController.arrLayers)for(var u in c.options.mapController.proxy.layerController.arrLayers)c.options.mapController.proxy.layerController.arrLayers[u].display&&(p=!0);if(c.options.layerSwitcherCreate&&r&&p&&(c.plugins.layerswitcher=new i.a(c)),o.a.callHookFunctions(c.hook_layerswitcher_loaded),void 0!==t.maps.hook&&"object"===s(t.maps.hook.starboard_loadPlugins)){o.a.callHookFunctions(t.maps.hook.starboard_loadPlugins,c);for(e in c.plugins)c.plugins.hasOwnProperty(e)&&c.plugins[e].activate()}c.options.baselayerSwitcherCreate&&(c.plugins.baselayerswitcher=new n.a(c),c.plugins.baselayerswitcher.activate()),c.plugins.layerswitcher&&c.plugins.layerswitcher.activate()},this.options.mapController.proxy.layers_loaded?u():(this.spinner.show(),this.options.mapController.proxy.hook_layer_loaded.push(function(e){c.spinner.hide(),u()})),this.initialized=!0,!0)}})}(jQuery,l);var c=this.c4g.maps.control.Starboard},HIHD:function(e,t,r){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}r.d(t,"a",function(){return u});var o=r("lshJ"),n=r("fZpj"),i=r("yNLE"),s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),c=this.c4g,u=function(){function e(t){a(this,e),this.proxy=t,this.mapController=t.options.mapController,this.arrLayers={},this.layerRequests={}}return l(e,[{key:"loadLayers",value:function(){var e=this;if(0===this.mapId)return!1;jQuery.ajax(this.proxy.api_layer_url,{dataType:this.mapController.data.jsonp?"jsonp":"json"}).done(function(t){return e.addLayers(t.layer,t.foreignLayers),e.proxy.layers_loaded=!0,n.a.callHookFunctions(e.proxy.hook_layer_loaded,e.proxy.layerIds),e.proxy.checkLocationStyles({done:function(){e.drawLayerInitial()}}),!0}).fail(function(){return console.warn("An error occured while trying to load the layers..."),!1}).always(function(){})}},{key:"addLayers",value:function(e,t){var r,a,l,c,u,p,h,d,m,b,g,y,f,_=this;if(l=!1,m=this.mapController.data.layers||[],p=function(e){e.hasChilds&&(e.visibleChilds=_.addLayers(e.childs,t))},f=function(e){var t,r,a;e.childs&&e.childs.length>0&&(t=e.name,r=e.tabId,a=e.awesomeicon,y=_.proxy.options.mapController.controls.starboard,y||(_.proxy.options.mapController.initializeStarboard(),y=_.proxy.options.mapController.controls.starboard),y.hook_layerswitcher_loaded.push(function(){y.starboardTabs=y.starboardTabs||{},y.starboardTabs[r]=new i.a(y,{name:t,tabId:r,awesomeicon:a})}))},e&&e.length>0)for(r=0;r<e.length;r+=1){for(c=this.arrLayers[e[r].id]?this.arrLayers[e[r].id]:new o.a(e[r]),!1,"object"===s(c.content)&&(c.content=n.a.objectToArray(c.content)),h=c.pid,d={};_.arrLayers[h];){if(d[h]){console.warn("Caught endless-loop (ID: "+c.id+")");break}d[h]=!0,h=this.arrLayers[h].pid}if(c.content&&c.content[0]&&c.content[0].cssClass&&(c.cssClass=c.content[0].cssClass),!d[h]){"startab"===c.type&&(c.editable=!0,c.renderSpecial=!0,c.tabId=c.id,c.layername||(c.display=!0),g=function(e){for(var t=0;t<e.childs.length;t++){var r=e.childs[t];r.editable=!0,r.tabId=e.tabId,r.renderSpecial=!0,b=_.arrLayers[r.id]?_.arrLayers[r.id]:new o.a(r),_.arrLayers[b.id]=b,e.childs[t]=b,b.hasChilds&&g(b)}},c.hasChilds&&g(c),f(c)),u=c.id||n.a.getUniqueId(),this.arrLayers[u]=c,this.proxy.checkLayerIsActiveForZoom(c.id)?c.isInactive=!1:c.isInactive=!0,this.proxy.layerIds.push(c.id),c.display?(l=!0,p(c)):c.pid&&this.arrLayers[c.pid]&&(c.hide=this.arrLayers[c.pid].hide);var k=!1;if(m.length>0)for(a=0;a<m.length;a+=1)if(m[a]==c.id){k=!0;break}("1"!==c.hide||k)&&(this.proxy.activeLayerIds[c.id]="invisible")}}return l}},{key:"loadLayerContent",value:function(e){var t,r,a,o,i,l,u,p,h,d,m,b,g,y,f,_,k,v,w=this;if(k={},v=function(e,t){t.properties=t.properties||{},e.popup=t.popup||t.properties.popup||!1,e.tooltip=t.tooltip||t.properties.tooltip||!1,e.tooltip_length=t.tooltip_length||t.properties.tooltip_length||!1,e.label=t.label||t.properties.label||!1,e.zoom_onclick=t.zoom_onclick||t.properties.zoom_onclick||!1},this.arrLayers[e].content){r=[];var S=[];for(t=0;t<this.arrLayers[e].content.length;t+=1)if(u=this.arrLayers[e].content[t],f=function(t,r){var a,o,i,l,c,p,h,d;if(u&&u.locationStyle&&w.proxy.locationStyleController.arrLocStyles[u.locationStyle]&&(o=w.proxy.locationStyleController.arrLocStyles[u.locationStyle].style(t,r),o||(o=[],w.fittingExtends[e]=b.getExtent()),void 0!==t&&null!==t&&t.self!==window))if(t.get("features")?i=t.get("features"):(i=[],i[0]=t),(a=i.length)>1){if(i[0].getStyle()&&a<1e3){for(o[0]=i[0].getStyle()[0],p=0;p<i.length;p+=1)if(!i[p].getStyle()){o=w.proxy.locationStyleController.arrLocStyles[u.locationStyle].style(i[0],r);break}}else o=w.proxy.locationStyleController.arrLocStyles[u.locationStyle].style(i[0],r);o||(o=[]),l=[0,0],o[0]&&(s(o[0].getImage())&&o[0].getImage().getRadius&&"function"==typeof o[0].getImage().getRadius?(c=parseInt(o[0].getImage().getRadius(),10))&&(l=[0,c]):o[0].getImage()&&o[0].getImage().getAnchor&&"function"==typeof o[0].getImage().getAnchor&&(l=o[0].getImage().getAnchor()||[0,0])),h=n.a.getRgbaFromHexAndOpacity("4975A8",{unit:"%",value:70}),u.cluster_fillcolor&&(h=n.a.getRgbaFromHexAndOpacity(u.cluster_fillcolor,{unit:"%",value:70})),d="#FFFFFF",u.cluster_fontcolor&&(d=n.a.getRgbaFromHexAndOpacity(u.cluster_fontcolor,{unit:"%",value:100})),o.push(new ol.style.Style({text:new ol.style.Text({text:"●",font:"60px sans-serif",offsetX:-1*l[0],offsetY:-1*l[1],fill:new ol.style.Fill({color:h})})})),o.push(new ol.style.Style({text:new ol.style.Text({text:a.toString(),offsetX:-1*l[0],offsetY:-1*l[1]+3,fill:new ol.style.Fill({color:d})})}))}else if(1===a&&i[0].getStyle())return i[0].getStyle();return o},u&&"urlData"===u.type)p={},p.url=u.data.url,u.data.params&&(p.params=decodeURIComponent(u.data.params)),u.settings.boundingBox?(h=u,d=new ol.source.Vector({loader:function(t,r,a){var o,n,i;o=ol.proj.transformExtent(t,a,"EPSG:4326"),n="<"==p.params.substr(0,1)?'<bbox-query s="'+o[1]+'" n="'+o[3]+'" w="'+o[0]+'" e="'+o[2]+'"/>':o[1]+","+o[0]+","+o[3]+","+o[2],i=p.url;var s=p.params.indexOf("(bbox)")>=0?/\(bbox\)/g:/\{{bbox\}}/g;p.params&&(i+="?data="+encodeURIComponent(p.params.replace(s,n))),void 0===w.layerRequests&&(w.layerRequests={}),void 0!==w.layerRequests["layerRequest"+e]&&w.layerRequests["layerRequest"+e].abort(),w.layerRequests["layerRequest"+e]=jQuery.ajax({url:i}).done(function(t){var r,o,n,i,s,l,p,m,b,g,y;if(delete w.layerRequests["layerRequest"+e],t&&t.children&&t.children[0]){if(s=t.children[0].getElementsByTagName("node")){b={};for(p in s)s.hasOwnProperty(p)&&s[p]&&s[p].children&&s[p].children.length>0&&(b[s[p].getAttribute("id")]=s[p])}if(l=t.children[0].getElementsByTagName("nd"))for(m in l)if(m&&l.hasOwnProperty(m)&&l[m])try{y=l[m].getAttribute("ref"),b&&y&&b[y]&&h&&h.settings&&(h.settings.showAdditionalGeometries?t&&(g=t.createElement("tag"))&&l[m].parentElement&&l[m].parentElement.getAttribute("id")&&(g.setAttribute("k","c4g_osm_ref"),g.setAttribute("v",l[m].parentElement.getAttribute("id")),b[y].appendChild(g)):b[y].innerHTML="")}catch(e){console.warn("Could not check and handle relations.")}if((o=new ol.format.OSMXML)&&t)try{i=o.readFeatures(t,{featureProjection:a})}catch(e){console.warn("Can not read feature.")}if(i&&i.length>0)for(r=0;r<i.length;r+=1){if("Point"===i[r].getGeometry().getType()?i[r].set("osm_type","node"):i[r].set("osm_type","way"),i[r].set("c4g_type","osm"),i[r].set("cluster_zoom",u.cluster_zoom),i[r].set("cluster_popup",u.cluster_popup),i[r].set("loc_linkurl",u.loc_linkurl),i[r].set("hover_location",u.hover_location),i[r].set("hover_style",u.hover_style),i[r].set("zoom_onclick",u.data.zoom_onclick),i[r].set("label",u.data.label),h.settings.forceNodes)if("Polygon"===i[r].getGeometry().getType()){var f=i[r].getGeometry().getInteriorPoint().getCoordinates();i[r].setGeometry(new ol.geom.Point(f))}else if("LineString"===i[r].getGeometry().getType()){var _=i[r].getGeometry().getExtent();centerPoint=ol.extent.getCenter(_),i[r].setGeometry(new ol.geom.Point(centerPoint))}i[r].get("c4g_osm_ref")&&(h.settings.additionalStyle||i[r].setStyle(c.maps.utils.reduceStyle(h.locationStyle)))}}else if(t&&t.elements){i=[];for(var k=0;k<t.elements.length;k++){(function(e){var r=t.elements[e];if("node"==r.type){if(!r.tags)return"continue";var a=new ol.geom.Point([r.lon,r.lat]).transform("EPSG:4326","EPSG:3857");n=new ol.Feature({geometry:a,id:r.id}),n.set("osm_type","node")}else if("way"==r.type){for(var o=[],s=0;s<r.nodes.length;s++)!function(e){var a=t.elements.find(function(t){return t.id===r.nodes[e]});o.push([a.lon,a.lat])}(s);if(o[0][0]==o[o.length-1][0]&&o[0][1]==o[o.length-1][1]){delete o[o.length-1],o.length=o.length-1;var l=new ol.geom.Polygon([o]);if(l.transform("EPSG:4326","EPSG:3857"),h.settings.forceNodes){var c=n.getGeometry().getInteriorPoint().getCoordinates();n.setGeometry(new ol.geom.Point(c))}n=new ol.Feature({geometry:l,id:r.id})}else{var p=new ol.geom.LineString([o]);if(p.transform("EPSG:4326","EPSG:3857"),n=new ol.Feature({geometry:p,id:r.id}),h.settings.forceNodes){var d=n.getGeometry().getExtent();centerPoint=ol.extent.getCenter(d),n.setGeometry(new ol.geom.Point(centerPoint))}}n.set("osm_type","way")}n.set("c4g_type","osm"),n.set("cluster_zoom",u.cluster_zoom),n.set("cluster_popup",u.cluster_popup),n.set("loc_linkurl",u.loc_linkurl),n.set("hover_location",u.hover_location),n.set("hover_style",u.hover_style),n.set("zoom_onclick",u.data.zoom_onclick),n.set("label",u.data.label);for(var m in r.tags)n.set(m,r.tags[m]);i.push(n)})(k)}}try{d.addFeatures(i)}catch(e){console.warn('Could not add features to source. The "forceNodes"-option should be used.')}})},strategy:ol.loadingstrategy.bbox}),b=d):"function"==typeof ol.format[u.format]?(b=new ol.source.Vector({format:new ol.format[u.format],url:p.url,projection:"EPSG:3857",strategy:ol.loadingstrategy.all}),u.settings&&!0===u.settings.refresh&&(void 0===w.layerRequests&&(w.layerRequests={}),_="number"==typeof u.settings.interval?u.settings.interval:1e4,k.blnHasPositionIds=!1,k.arrPositionIds=[],k.objFeatures={},b.set("refreshInterval",_),b.set("refreshFunction",function(){b.get("hasIds")||(b.forEachFeature(function(e){e.get("positionId")&&(k.blnHasPositionIds=!0,k.arrPositionIds.push(e.get("positionId")),k.objFeatures[e.get("positionId")]=e)}),k.blnHasPositionIds&&b.set("hasIds",!0)),jQuery.ajax({url:p.url,done:function(e){e.renewableResponse&&jQuery.each(e.features,function(e,t){if(t.type&&"Feature"===t.type){var r=(new ol.format[u.format]).readFeature(t,{dataProjection:"EPSG:4326",featureProjection:"EPSG:3857"}),a=w.arrLayers[t.properties.id],o=t.properties.popup;a.vectorLayer.getLayers().forEach(function(e,r,a){w.proxy.locationStyleController.arrLocStyles[t.properties.styleId]?e.setStyle(w.proxy.locationStyleController.arrLocStyles[t.properties.styleId].style):w.proxy.locationStyleController.loadLocationStyles([t.properties.styleId],{done:function(){e.setStyle(w.proxy.locationStyleController.arrLocStyles[t.properties.styleId].style)}}),e.getSource().forEachFeature(function(e){e.set("popup",o)})}),a.content[0].locationStyle=t.properties.styleId,w.proxy.locationStyleController.arrLocStyles[t.properties.styleId]?r.setStyle(w.proxy.locationStyleController.arrLocStyles[t.properties.styleId].style):w.proxy.locationStyleController.loadLocationStyles([t.properties.styleId],{done:function(){r.setStyle(w.proxy.locationStyleController.arrLocStyles[t.properties.styleId].style)}}),w.proxy.activeLayerIds[a.id]&&(w.hideLayer(a.id),w.showLayer(a.id))}}),e.features&&(k.arrNewPositionIds=[],k.objNewFeatures={},jQuery.each(e.features,function(e,t){t.type&&"Feature"==t.type&&(k.feature=(new ol.format[u.format]).readFeature(t,{dataProjection:"EPSG:4326",featureProjection:"EPSG:3857"}),k.feature.set("cluster_zoom",u.cluster_zoom),k.feature.set("loc_linkurl",u.loc_linkurl),k.feature.set("hover_location",u.hover_location),k.feature.set("hover_style",u.hover_style),k.feature.get("positionId")&&(k.arrNewPositionIds.push(k.feature.get("positionId")),k.objNewFeatures[k.feature.get("positionId")]=k.feature))}),jQuery.each(k.arrPositionIds,function(e,t){-1==k.arrNewPositionIds.indexOf(t)&&void 0!==k.objFeatures[t]&&(b.removeFeature(k.objFeatures[t]),delete k.arrPositionIds[e])}),jQuery.each(k.arrNewPositionIds,function(e,t){-1==k.arrPositionIds.indexOf(t)&&(k.arrPositionIds.push(t),k.objFeatures[t]=k.objNewFeatures[t],b.addFeature(k.objNewFeatures[t]))}))}})}),w.proxy.requestFunctions["request_"+e]={function:b.get("refreshFunction"),interval:_})):console.warn("Format type "+u.format+" in ol.format not found."),u.settings.cluster?(y=new ol.source.Cluster({distance:40,source:b,zoom:u.cluster_zoom}),this.styleForCluster=f,m=new ol.layer.AnimatedCluster({name:"Cluster",source:y,style:f})):m=n.a.getVectorLayer(b,w.proxy.locationStyleController.arrLocStyles[u.locationStyle]?w.proxy.locationStyleController.arrLocStyles[u.locationStyle].style:null),u.settings&&u.settings.fitToExtend&&(w.fittingExtends=w.fittingExtends||{},b.on("change",function(){for(t in w.fittingExtends)w.fittingExtends.hasOwnProperty(t)&&(void 0!==w.proxy.activeLayerIds[t]&&"invisible"!=w.proxy.activeLayerIds[0]||delete w.fittingExtends[t]);w.fittingExtends[e]=b.getExtent(),n.a.fitToExtents(w.fittingExtends,w.mapController.map)})),v(m,u.data),r.push(m);else if("table"===this.arrLayers[e].type||"link"===this.arrLayers[e].type){var C=this.arrLayers[e].content;u=C[0],u&&u.data.properties&&u.data.properties.projection?(i=u.data.properties.projection,o=this.mapController.map.getView().getProjection()):i=void 0;var E=new ol.format[C[t].format]({}).readFeatures(C[t].data,{featureProjection:o,dataProjection:i})[0];E.set("cluster_zoom",u.cluster_zoom),E.set("cluster_popup",u.cluster_popup),E.set("loc_linkurl",u.loc_linkurl),E.set("hover_location",u.hover_location),E.set("hover_style",u.hover_style),E.set("popup",C[t].data.properties.popup),E.set("zoom_onclick",u.zoom_onclick),S.push(E),t+1===this.arrLayers[e].content.length&&(b=new ol.source.Vector({features:S,projection:"EPSG:3857",format:new ol.format.GeoJSON}),u&&u.settings&&u.settings.cluster?(y=new ol.source.Cluster({distance:40,zoom:u.cluster_zoom,source:b}),m=new ol.layer.AnimatedCluster({name:"Cluster",source:y,style:f})):m=n.a.getVectorLayer(b,u&&w.proxy.locationStyleController.arrLocStyles[u.locationStyle]?w.proxy.locationStyleController.arrLocStyles[u.locationStyle].style:null),r.push(m))}else{if(!(this.arrLayers[e].content.length>1))return void w.drawLayer(e);if(u&&"function"==typeof ol.format[u.format]){u.data.properties&&u.data.properties.projection?(i=u.data.properties.projection,o=this.mapController.map.getView().getProjection()):i=void 0,a=new ol.format[u.format]({}).readFeatures(u.data,{featureProjection:o,dataProjection:i});for(var T=[],R=[],O=0;O<a.length;O+=1)a[O].get("styleId")&&(w.proxy.locationStyleController.arrLocStyles[a[O].get("styleId")]&&w.proxy.locationStyleController.arrLocStyles[a[O].get("styleId")].style?a[O].setStyle(w.proxy.locationStyleController.arrLocStyles[a[O].get("styleId")].style):(T.push(a[O].get("styleId")),R.push(a[O])));g=w.proxy.locationStyleController.arrLocStyles[u.locationStyle]&&w.proxy.locationStyleController.arrLocStyles[u.locationStyle].style,T.length>0||(b=new ol.source.Vector({features:a,projection:"EPSG:3857",format:new ol.format.GeoJSON}),y=new ol.source.Cluster({distance:40,zoom:u.cluster_zoom,source:b}),m=n.a.getVectorLayer(y,g),u.data&&u.data.properties&&(u.data.properties.popup&&(m.popup=u.data.properties.popup),u.data.properties.tooltip&&(m.tooltip=u.data.properties.tooltip),u.data.properties.label&&(m.label=u.data.properties.label),u.data.properties.onclick_zoom&&(m.onclick_zoom=u.data.properties.onclick_zoom)),r.push(m))}else u&&console.warn("Format type "+u.format+" in ol.format not found.")}l=new ol.layer.Group({layers:r}),this.arrLayers[e].vectorLayer=l,w.mapController.map.addLayer(l)}else if(1==this.arrLayers[e].async_content){if(f=function(e,t){var r,a,o,i,s,l;if(e&&e.get("features")&&((r=e.get("features")[0].get("locationStyle"))&&w.proxy.locationStyleController.arrLocStyles[r]&&w.proxy.locationStyleController.arrLocStyles[r].style&&(a=w.proxy.locationStyleController.arrLocStyles[r].style(e.get("features")[0],t)),a||(a=[]),e.get("features").length>1&&(o=[0,0],a[0]&&("function"==typeof a[0].getImage().getRadius?(i=parseInt(a[0].getImage().getRadius(),10))&&(o=[0,i]):"function"==typeof a[0].getImage().getAnchor&&(o=a[0].getImage().getAnchor()||[0,0])),s=n.a.getRgbaFromHexAndOpacity("4975A8",{unit:"%",value:70}),u.cluster_fillcolor&&(s=n.a.getRgbaFromHexAndOpacity(u.cluster_fillcolor,{unit:"%",value:70})),e.get("features")[0].get("cluster_fillcolor")&&(s=n.a.getRgbaFromHexAndOpacity(e.get("features")[0].get("cluster_fillcolor"),{unit:"%",value:70})),l="#FFFFFF",e.get("features")[0].get("cluster_fontcolor")&&(l=n.a.getRgbaFromHexAndOpacity(e.get("features")[0].get("cluster_fontcolor"),{unit:"%",value:100})),a.push(new ol.style.Style({text:new ol.style.Text({text:"●",font:"60px sans-serif",offsetX:-1*o[0],offsetY:-1*o[1],fill:new ol.style.Fill({color:s})})})),a.push(new ol.style.Style({text:new ol.style.Text({text:e.get("features").length.toString(),offsetX:-1*o[0],offsetY:-1*o[1]+3,fill:new ol.style.Fill({color:l})})})))),a)return a},d=new ol.source.Vector({loader:function(r,a,o){var n,i;w.mapController.spinner.show(),n=ol.proj.transformExtent(r,o,"EPSG:4326"),i=n[0]+","+n[1]+";"+n[2]+","+n[3],void 0===w.layerRequests&&(w.layerRequests={}),void 0!==w.layerRequests["layerDataRequest"+e]&&w.layerRequests["layerDataRequest"+e].abort(),w.proxy.locationStyleController.arrLocStyles[w.arrLayers[e].locstyle]||w.proxy.locationStyleController.loadLocationStyles([w.arrLayers[e].locstyle],{done:function(){}}),w.layerRequests["layerDataRequest"+e]=jQuery.ajax({url:w.proxy.api_layercontentdata_url+"/"+w.arrLayers[e].id+"/"+i}).done(function(r){r.length>0&&!S&&(S=[]);var a=w.arrLayers[e];e:for(var o=0;o<r.length;o++){u=r[o];for(var n=0;n<S.length;n++)if(u.id===S[n].id)continue e;var i=ol.proj.transform([parseFloat(u.geox),parseFloat(u.geoy)],"EPSG:4326","EPSG:3857"),s=new ol.geom.Point(i);E=new ol.Feature(s),E.setId(u.id),E.set("cluster_zoom",a.cluster.zoom),E.set("cluster_popup",a.cluster.popup),E.set("cluster_fillcolor",a.cluster.fillcolor),E.set("cluster_fontcolor",a.cluster.fontcolor),E.set("loc_linkurl",a.loc_linkurl),E.set("hover_location",a.hover_location),E.set("hover_style",a.hover_style);var l=u.popup?u.popup:$.extend({},a.popup);l&&l.content&&l.content.search&&l.content.search("itemId")&&(l.content=l.content.replace("itemId",u.id)),u.label&&E.set("label",u.label),u.tooltip&&E.set("tooltip",u.tooltip),E.set("popup",l),E.set("zoom_onclick",a.zoom_onclick),E.set("tid",u.id);var c=u.locstyle||a.locstyle;E.set("locationStyle",c),c&&w.proxy.locationStyleController.arrLocStyles[c]&&w.proxy.locationStyleController.arrLocStyles[c].style?(E.setStyle(w.proxy.locationStyleController.arrLocStyles[c].style),S.push(E)):(R||(R=[]),T||(T=[]),E.set("styleId",c),R.push(E),T[c]=c)}T&&w.proxy.locationStyleController.loadLocationStyles(T,{done:function(){for(t=0;t<R.length;t++){var e=R[t].get("styleId");R[t].setStyle(w.proxy.locationStyleController.arrLocStyles[e].style),d.addFeature(R[t])}T=void 0}}),r.length>0&&d.addFeatures(S)}).always(function(){w.mapController.spinner.hide()})},strategy:ol.loadingstrategy.bbox}),this.arrLayers[e].cluster){var L=w.arrLayers[e],I=w.mapController.map,A=I.getView().getZoom(),x=this.arrLayers[e].cluster.distance||20;A>=L.cluster.zoom&&(x=0),y=new ol.source.Cluster({distance:x,source:d}),m=new ol.layer.AnimatedCluster({name:"Cluster",source:y,style:f})}else m=new ol.layer.Vector({name:"Layer",source:d});r=r||[],r.push(m),l=new ol.layer.Group({layers:r}),this.arrLayers[e].vectorLayer=l,w.mapController.map.addLayer(l)}else w.mapController.spinner.show(),jQuery.ajax({dataType:w.mapController.data.jsonp?"jsonp":"json",url:w.proxy.api_layercontent_url+"/"+w.arrLayers[e].id}).done(function(t){var r=void 0,a=void 0;if(t.length>0){for(a=[],r=0;r<t.length;r+=1)w.arrLayers[e].content=w.arrLayers[e].content||[],w.arrLayers[e].content.push(t[r]),a.push(t[r].locationStyle);w.proxy.checkLocationStyles({done:function(){w.loadLayerContent(e)}})}}).always(function(){w.mapController.spinner.hide()})}},{key:"hideLayer",value:function(e,t){var r,a;if(!(r=this.arrLayers[e]))return!1;if(this.proxy.activeLayerIds[e]&&("visible"===this.proxy.activeLayerIds[e]&&r.vectorLayer&&this.mapController.map.removeLayer(r.vectorLayer),t?this.proxy.activeLayerIds[e]="invisible":delete this.proxy.activeLayerIds[e]),r&&r.hasChilds)for(a=0;a<r.childs.length;a+=1)this.hideLayer(r.childs[a].id);if(r.isInactive)return void n.a.callHookFunctions(this.proxy.hook_layer_visibility,e);if(r.isInactive=!0,this.layerRequests&&void 0!==this.layerRequests["layer_request_"+e]&&"number"==typeof this.layerRequests["layer_request_"+e])try{window.clearInterval(this.layerRequests["layer_request_"+e]),delete this.layerRequests["layer_request_"+e]}catch(e){}this.mapController.map.getView().setCenter([this.mapController.map.getView().getCenter()[0]+.001,this.mapController.map.getView().getCenter()[1]]),n.a.callHookFunctions(this.proxy.hook_layer_visibility,e)}},{key:"hideChildLayer",value:function(e,t){var r=this.arrLayers[e];t=t.replace(e,""),r.vectorLayer.getLayers().getArray()[t].set("visible",!1)}},{key:"showChildLayer",value:function(e,t){var r=this.arrLayers[e];t=t.replace(e,""),r.vectorLayer.getLayers().getArray()[t].set("visible",!0)}},{key:"showLayer",value:function(e){var t,r,a,o,i;if(i=this.proxy.checkLayerIsActiveForZoom(e),t=this.arrLayers[e],i&&"visible"!==this.proxy.activeLayerIds[e]){if(t&&t.vectorLayer){if(a=!0,r=this.mapController.map.getLayers(),r.forEach(function(e,r,o){e===t.vectorLayer&&(a=!1)}),a){if(t.vectorLayer.getLayers().getArray()[0]&&t.vectorLayer.getLayers().getArray()[0].popup&&t.vectorLayer.getLayers().getArray()[0].popup.showPopupOnActive){c.maps.popup.$content.html(""),c.maps.popup.$popup.addClass(c.maps.constant.css.ACTIVE).addClass(c.maps.constant.css.LOADING),c.maps.popup.spinner.show();var l=t.vectorLayer.getLayers().getArray()[0].popup,u=t.vectorLayer.getLayers().getArray()[0].getSource().getFeatures();u[0].getGeometry().getCoordinates();if(!1===l.async){var p={};p.popup=l,p.feature=u[0],p.layer=t.vectorLayer.getLayers().getArray()[0],void 0!==c.maps.hook&&"object"===s(c.maps.hook.proxy_fillPopup)&&n.a.callHookFunctions(c.maps.hook.proxy_fillPopup,p),this.proxy.setPopup(p)}else{var h=this;jQuery.ajax({dataType:"json",url:h.api_infowindow_url+"/"+l.content,done:function(e){var r={async:l.async,content:e.content,popup:l.popup,routing_link:l.routing_link},a={};a.popup=r,a.feature=u[0],a.layer=t,void 0!==c.maps.hook&&"object"===s(c.maps.hook.proxy_fillPopup)&&n.a.callHookFunctions(c.maps.hook.proxy_fillPopup,a),h.proxy.setPopup(a)}})}}this.mapController.map.addLayer(t.vectorLayer)}}else this.loadLayerContent(e);this.proxy.activeLayerIds[e]="visible"}if(t&&t.hasChilds&&i)for(o=0;o<t.childs.length;o+=1)this.showLayer(t.childs[o].id);t&&i&&(t.isInactive=!1),void 0!==this.proxy.requestFunctions["request_"+e]&&this.layerRequests&&void 0===this.layerRequests["layer_request_"+e]&&(this.layerRequests["layer_request_"+e]=window.setInterval(this.proxy.requestFunctions["request_"+e].function,this.proxy.requestFunctions["request_"+e].interval)),n.a.callHookFunctions(this.proxy.hook_layer_visibility,e)}},{key:"drawLayer",value:function(e){var t,r,a,o,i,l,u,p,h,d,m,b,g,y,f;if(t=this,r=this.arrLayers[e],o=[],r.content&&r.content.length>0)for(i=0;i<r.content.length;i+=1)if(a=r.content[i])if("function"==typeof ol.format[a.format]){if(a.data.properties&&a.data.properties.projection?(d=a.data.properties.projection,m=this.mapController.map.getView().getProjection()):d=void 0,"OSMXML"===a.format)continue;if(a.data.geometry&&"Circle"===a.data.geometry.type){h=[];var _=new ol.Feature(new ol.geom.Circle(ol.proj.fromLonLat(a.data.geometry.center),parseFloat(a.data.geometry.radius)));_.set("styleId",a.locationStyle),h.push(_)}else h=new ol.format[a.format]({}).readFeatures(a.data,{featureProjection:m,dataProjection:d});for(u=[],p=[],l=0;l<h.length;l+=1)h[l].set("hover_location",a.hover_location),h[l].set("hover_style",a.hover_style),h[l].get("styleId")?t.proxy.locationStyleController.arrLocStyles[h[l].get("styleId")]&&t.proxy.locationStyleController.arrLocStyles[h[l].get("styleId")].style?h[l].setStyle(t.proxy.locationStyleController.arrLocStyles[h[l].get("styleId")].style):(u.push(h[l].get("styleId")),p.push(h[l])):a.locationStyle&&(t.proxy.locationStyleController.arrLocStyles[a.locationStyle]&&t.proxy.locationStyleController.arrLocStyles[a.locationStyle].style||(u.push(a.locationStyle),p.push(h[l]),h[l].set("styleId",a.locationStyle)));if(y=t.proxy.locationStyleController.arrLocStyles[a.locationStyle]&&t.proxy.locationStyleController.arrLocStyles[a.locationStyle].style,t.proxy.locationStyleController.arrLocStyles[a.locationStyle]&&t.proxy.locationStyleController.arrLocStyles[a.locationStyle].fnStyleFunction&&(y=Function("feature","data","map",t.proxy.locationStyleController.arrLocStyles[a.locationStyle].fnStyleFunction)),u.length>0)this.proxy.locationStyleController.loadLocationStyles(u,{done:function(){var r,o,i,s,l;for(r=0;r<p.length;r+=1)t.proxy.locationStyleController.arrLocStyles[p[r].get("styleId")]&&p[r].setStyle(t.proxy.locationStyleController.arrLocStyles[p[r].get("styleId")].style);l=new ol.source.Vector({features:h,projection:"EPSG:3857",format:new ol.format.GeoJSON}),s=n.a.getVectorLayer(l,y),t.arrLayers[e].fVectorLayer?(o=t.arrLayers[e].vectorLayer,i=o.getLayers(),a.data&&a.data.properties&&(a.data.properties.popup&&(s.popup=a.data.properties.popup),a.data.properties.tooltip&&(s.tooltip=a.data.properties.tooltip),a.data.properties.label&&(s.label=a.data.properties.label),a.data.properties.zoom_onclick&&(s.zoom_onclick=a.data.properties.zoom_onclick)),i.push(s),o.setLayers(i)):(a.data&&a.data.properties&&(a.data.properties.popup&&(s.popup=a.data.properties.popup),a.data.properties.tooltip&&(s.tooltip=a.data.properties.tooltip),a.data.properties.label&&(s.label=a.data.properties.label),a.data.properties.zoom_onclick&&(s.zoom_onclick=a.data.properties.zoom_onclick)),o=new ol.layer.Group({layers:[s]}),t.arrLayers[e].vectorLayer=o,t.mapController.map.addLayer(o))}});else if(r.split_geojson)for(var k=0;k<h.length;k++){b=new ol.source.Vector({projection:"EPSG:3857",format:new ol.format.GeoJSON}),b.addFeature(h[k]),g=n.a.getVectorLayer(b,y);for(var v=0;v<r.geojson_attributes.split(",").length;v++)g.set(r.geojson_attributes.split(",")[v],h[k].get(r.geojson_attributes.split(",")[v]));o.push(g),a.data.properties.popup&&(g.popup=a.data.properties.popup),a.data.properties.tooltip&&(g.tooltip=a.data.properties.tooltip),a.data.properties.label&&(g.label=a.data.properties.label),a.data.properties.zoom_onclick&&(g.zoom_onclick=a.data.properties.zoom_onclick)}else b=new ol.source.Vector({features:h,projection:"EPSG:3857",format:new ol.format.GeoJSON}),g=n.a.getVectorLayer(b,y),a.data&&a.data.properties&&(a.data.properties.popup&&(g.popup=a.data.properties.popup),a.data.properties.tooltip&&(g.tooltip=a.data.properties.tooltip),a.data.properties.label&&(g.label=a.data.properties.label),a.data.properties.zoom_onclick&&(g.zoom_onclick=a.data.properties.zoom_onclick)),o.push(g)}else console.warn("Format type "+a.format+" in ol.format not found.");if(f=new ol.layer.Group({layers:o}),this.arrLayers[e].vectorLayer=f,this.mapController.map.addLayer(f),f.getLayers().getArray()[0]&&f.getLayers().getArray()[0].popup&&f.getLayers().getArray()[0].popup.showPopupOnActive){c.maps.popup.$content.html(""),c.maps.popup.$popup.addClass(c.maps.constant.css.ACTIVE).addClass(c.maps.constant.css.LOADING),c.maps.popup.spinner.show();var w=f.getLayers().getArray()[0].popup,S=f.getLayers().getArray()[0];h[0].getGeometry().getCoordinates();if(!1===w.async){var C={};C.popup=w,C.feature=h[0],C.layer=S,void 0!==c.maps.hook&&"object"===s(c.maps.hook.proxy_fillPopup)&&n.a.callHookFunctions(c.maps.hook.proxy_fillPopup,C),t.proxy.setPopup(C)}else jQuery.ajax({dataType:"json",url:t.api_infowindow_url+"/"+w.content,done:function(e){var r={async:w.async,content:e.content,popup:w.popup,routing_link:w.routing_link},a={};a.popup=r,a.feature=h[0],a.layer=S,void 0!==c.maps.hook&&"object"===s(c.maps.hook.proxy_fillPopup)&&n.a.callHookFunctions(c.maps.hook.proxy_fillPopup,a),t.proxy.setPopup(a)}})}}},{key:"drawLayerInitial",value:function(){var e,t;for(e in this.proxy.activeLayerIds)this.proxy.activeLayerIds.hasOwnProperty(e)&&this.showLayer(e);for(var r in this.arrLayers)this.arrLayers.hasOwnProperty(r)&&(t=this.arrLayers[r],"1"===t.hide&&this.hideLayer(t.id))}}]),e}()},OdJH:function(e,t,r){"use strict";r.d(t,"a",function(){return o});var a=r("TewV");this.c4g=this.c4g||{},this.c4g.maps=this.c4g.maps||{},this.c4g.maps.control=this.c4g.maps.control||{},function(e,t){t.maps.control.Zoomlevel=function(t){var r,o;if(this,!t||!t.mapView)return console.warn("Zoomlevel control needs to know the map."),!1;t=e.extend({className:a.a.ZOOM_LEVEL,undefinedHTML:""},t),r=document.createElement("div"),r.className=t.className,r.innerHTML=t.mapView.getZoom(),o=function(){r.innerHTML=parseInt(t.mapView.getZoom())},t.mapView.on("change:resolution",o),ol.control.Control.call(this,{element:r,target:t.target})},ol.inherits(t.maps.control.Zoomlevel,ol.control.Control),t.maps.control.Zoomlevel.prototype=e.extend(t.maps.control.Zoomlevel.prototype,{})}(jQuery,this.c4g);var o=this.c4g.maps.control.Zoomlevel},P9zL:function(e,t,r){"use strict";r.d(t,"a",function(){return l});var a=r("TewV"),o=r("g1Hq"),n=r("fZpj"),i=r("muuc"),s=r("1wOy");this.c4g=this.c4g||{},this.c4g.maps=this.c4g.maps||{},this.c4g.maps.control=this.c4g.maps.control||{},function(e,t){t.maps.control.Measuretools=function(t){this.options=e.extend({name:"measure",headline:o.a.MEASURETOOLS,create:!0,mapController:void 0,direction:"left",firstElement:!0},t),this.mainSection=document.createElement("div"),i.a.call(this,this.options)},ol.inherits(t.maps.control.Measuretools,i.a),t.maps.control.Measuretools.prototype=e.extend(t.maps.control.Measuretools.prototype,{init:function(){return this.spinner.show(),this.measureLineLayer=new ol.layer.Vector({source:new ol.source.Vector}),this.measurePolygonLayer=new ol.layer.Vector({source:new ol.source.Vector}),this.measureCircleLayer=new ol.layer.Vector({source:new ol.source.Vector}),this.measureFreehandLayer=new ol.layer.Vector({source:new ol.source.Vector}),this.measureLayerGroup=new ol.layer.Group({layers:new ol.Collection([this.measureFreehandLayer,this.measureCircleLayer,this.measurePolygonLayer,this.measureLineLayer]),visible:!0}),this.options.mapController.map.addLayer(this.measureLayerGroup),this.viewMeasureSelect=this.addSelectView(),this.viewMeasureSelect.activate(),this.viewMeasureLine=this.addMeasureView({type:"LineString"}),this.viewMeasureArea=this.addMeasureView({type:"Polygon"}),this.viewMeasureRadius=this.addMeasureView({type:"Circle"}),this.viewMeasureFreehand=this.addMeasureView({type:"Freehand"}),this.mainSectionInfo=document.createElement("p"),this.mainSectionInfo.innerHTML=o.a.MEASURETOOLS_INFO,this.mainSectionInfo.innerHTML+="<br><br><sub>"+o.a.MEASURETOOLS_INFO_ADDITIONAL+"<sub>",this.mainSection.appendChild(this.mainSectionInfo),this.contentContainer.appendChild(this.mainSection),this.spinner.hide(),!0},preCloseFunction:function(){var e,t,r,a,o;if(this.measureLayerGroup.getVisible()){for(this.measureLayerGroup.setVisible(!1),e=this.measureLineLayer.getSource().getFeatures(),o=0;o<e.length;o+=1)e[o].get("tooltip").hide();for(t=this.measurePolygonLayer.getSource().getFeatures(),o=0;o<t.length;o+=1)t[o].get("tooltip").hide();for(r=this.measureCircleLayer.getSource().getFeatures(),o=0;o<r.length;o+=1)r[o].get("tooltip").hide();for(a=this.measureFreehandLayer.getSource().getFeatures(),o=0;o<a.length;o+=1)a[o].get("tooltip").hide()}},preOpenFunction:function(){var e,t,r,a,o;if(!this.measureLayerGroup.getVisible()){for(this.measureLayerGroup.setVisible(!0),e=this.measureLineLayer.getSource().getFeatures(),o=0;o<e.length;o+=1)e[o].get("tooltip").show();for(t=this.measurePolygonLayer.getSource().getFeatures(),o=0;o<t.length;o+=1)t[o].get("tooltip").show();for(r=this.measureCircleLayer.getSource().getFeatures(),o=0;o<r.length;o+=1)r[o].get("tooltip").show();for(a=this.measureFreehandLayer.getSource().getFeatures(),o=0;o<a.length;o+=1)a[o].get("tooltip").show()}},addSelectView:function(){return this.addView({name:"select",triggerConfig:{tipLabel:o.a.MEASURETOOLS_VIEW_TRIGGER_SELECT,className:a.a.MEASURETOOLS_VIEW_TRIGGER_SELECT,withHeadline:!0},sectionElements:[{section:this.contentContainer,element:this.mainSection},{section:this.topToolbar,element:this.viewTriggerBar}]})},addMeasureView:function(t){var r,i,l,c,u,p;return r=this,t=e.extend({type:"LineString"},t),i="MEASURETOOLS_VIEW_TRIGGER_DRAW_"+t.type.toUpperCase(),r.addView({name:"draw:"+t.type.toLowerCase(),triggerConfig:{tipLabel:o.a[i],className:a.a[i],withHeadline:!0},sectionElements:[{section:r.topToolbar,element:r.viewTriggerBar}],initFunction:function(){var a,i,h,d,m,b,g,y;return r.spinner.show(),a=1,l="freehand"===t.type.toLowerCase()?r.measureFreehandLayer.getSource():"circle"===t.type.toLowerCase()?r.measureCircleLayer.getSource():"polygon"===t.type.toLowerCase()?r.measurePolygonLayer.getSource():r.measureLineLayer.getSource(),u=new ol.Collection,p=t.type,"Freehand"==p&&(p="LineString"),c=new ol.interaction.Draw({features:u,source:l,type:p,freehand:"Freehand"==t.type}),d=function(t){var n,i,s,l,c,u,p,h,d,b,g;if(!t instanceof ol.Feature)return!1;1===r.mainSection.childElementCount&&r.mainSection.children[0]===r.mainSectionInfo&&r.mainSection.removeChild(r.mainSectionInfo),t.getGeometry()instanceof ol.geom.LineString?(h=o.a.LENGTH,d=o.a.LINE,b=!1,g=!1):t.getGeometry()instanceof ol.geom.Polygon?(h=o.a.PERIMETER,d=o.a.POLYGON,b=!0,g=!1):t.getGeometry()instanceof ol.geom.Circle?(h=o.a.RADIUS,d=o.a.CIRCLE,b=!0,g=!0):(h=o.a.LENGTH,d=o.a.FREEHAND,b=!1,g=!1),n=document.createElement("div"),i=document.createElement("div"),i.className="c4g_maps_portside_measure_element",r.options.firstElement&&(i.className="c4g_maps_portside_measure_element c4g_maps_portside_measure_element_first",r.options.firstElement=!1),n.appendChild(i),s=document.createElement("label"),s.setAttribute("for","measureElement_"+a),s.innerHTML=o.a.NAME+": ",i.appendChild(s),l=document.createElement("input"),l.type="text",l.name="measureElement_"+a,l.value=d+" "+a,e(l).change(function(e){m(t)}),i.appendChild(l),t.set("listElementValueName",l),c=document.createElement("p"),c.className="c4g_maps_portside_measure_paragraph",u=document.createElement("strong"),u.innerHTML=h+": ",c.appendChild(u),p=document.createElement("span"),p.innerHTML="...",c.appendChild(p),n.appendChild(c),t.set("listElementValueLine",p),b&&(c=document.createElement("p"),c.className="c4g_maps_portside_measure_paragraph_surfacearea",u=document.createElement("strong"),u.innerHTML=o.a.SURFACEAREA+": ",c.appendChild(u),p=document.createElement("span"),p.innerHTML="...",c.appendChild(p),n.appendChild(c),t.set("listElementValueArea",p)),g&&t.set("listElementValueRadius",p),a+=1,r.mainSection.appendChild(n),t.set("listElement",n),r.update()},m=function(e){var t,r,a,o,i,s;t=e.get("tooltip"),a=e.get("listElementValueName").value,o=n.a.measureGeometry(e.getGeometry(),!0),r="<strong>"+a+"</strong><br>",e.set("measuredLength",o),e.get("listElementValueLine").innerHTML=o.htmlValue,"circle"===e.get("geometryType")?(s=n.a.measureGeometry(e.getGeometry()),e.set("measuredRadius",s),e.get("listElementValueRadius").innerHTML=s.htmlValue,r+=s.htmlValue,i=n.a.measureGeometry(e.getGeometry(),!1,!0),e.set("measuredArea",i),e.get("listElementValueArea").innerHTML=i.htmlValue):"polygon"===e.get("geometryType")?(i=n.a.measureGeometry(e.getGeometry()),e.set("measuredArea",i),e.get("listElementValueArea").innerHTML=i.htmlValue,r+=i.htmlValue):r+=o.htmlValue,t.setContent(r)},y=function(e){r.mainSection.removeChild(e.get("listElement")),r.mainSection.childElementCount<1&&(r.mainSection.appendChild(r.mainSectionInfo),r.update())},b=function(e){var t=n.a.measureGeometry(e.getGeometry(),!0),r=t.htmlValue,a=r.match(/\d/g);return a=a.join("")},g=function(){var e="0.00 m",t=e.match(/\d/g);return t=t.join(""),t=8},c.on("drawstart",function(e){i=e.feature,h=new s.a({map:r.options.mapController.map,position:e.coordinate,horizontal:!0,closeable:!0,closeFunction:function(){var t=b(e.feature),r=g();t!=r&&t>r?(y(e.feature),l.removeFeature(e.feature)):y(e.feature)}}),i.set("tooltip",h),i.set("geometryType",t.type.toLowerCase()),d(i)},r),r.options.mapController.map.on("pointermove",function(e){i&&h&&(h.setPosition(e.coordinate),m(i))},r),c.on("drawend",function(e){i&&h&&(m(i),i=null,h=null)},r),r.spinner.hide(),!0},activateFunction:function(){r.options.mapController.mapHover.deactivate(),u.clear(),r.options.mapController.map.addInteraction(c)},deactivateFunction:function(){if(r.options.mapController.mapHover.activate(),"point"!==t.type.toLowerCase())try{c.finishDrawing()}catch(e){}r.options.mapController.map.removeInteraction(c)}})}})}(jQuery,this.c4g);var l=this.c4g.maps.control.Measuretools},Rq5T:function(e,t,r){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}r.d(t,"a",function(){return u});var o=r("ZBmQ"),n=r("g6iq"),i=r("8ypq"),s=r("fZpj"),l=(r("g1Hq"),r("TewV")),c=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),u=function(){function e(t){a(this,e),this.proxy=t,this.mapController=t.options.mapController,this.arrBaselayers={},this.baselayerIds=[]}return c(e,[{key:"loadBaseLayers",value:function(){var e;e=this,jQuery.ajax(this.proxy.api_baselayer_url,{dataType:this.mapController.data.jsonp?"jsonp":"json"}).done(function(t){return t.baselayer&&e.addBaseLayers(t.baselayer),!0}).fail(function(){return console.warn("An error occured while trying to load the baselayers. Do you have configured a default profile with baselayers?"),e.mapController.spinner.hide(),!1}).always(function(){})}},{key:"addBaseLayers",value:function(e){var t,r,a,i;if(e.sort(function(e,t){return!e.sort&&!t.sort||parseInt(e.sort,10)===parseInt(t.sort,10)?e.name&&t.name?e.name.toLowerCase()>t.name.toLowerCase()?1:-1:t.name?1:-1:e.sort&&t.sort?parseInt(e.sort,10)>parseInt(t.sort,10)?1:-1:t.sort?1:-1}),e.length>0)for(a=0;a<e.length;a+=1)if(t=e[a],r=t.id||s.a.getUniqueId(),this.baselayerIds.push(r),this.arrBaselayers[r]||(this.arrBaselayers[r]=new o.a(t,this)),this.mapController.data.baselayer&&parseInt(r,10)===parseInt(this.mapController.data.baselayer,10)&&this.showBaseLayer(r),this.arrBaselayers[r].hasOverlays)for(i=0;i<this.arrBaselayers[r].overlays.length;i++)this.arrBaselayers[r].overlayController.arrOverlays[this.arrBaselayers[r].overlays[i].id]||(this.arrBaselayers[r].overlayController.arrOverlays[this.arrBaselayers[r].overlays[i].id]=new n.a(this.arrBaselayers[r].overlays[i],this.mapController),this.arrBaselayers[r].overlayController.arrOverlays[this.arrBaselayers[r].overlays[i].id].layer=this.arrBaselayers[r].overlayController.showOverlayLayer(this.arrBaselayers[r].overlays[i].id));this.activeBaselayerId||(e.length>0&&e[0].id?r=e[0].id:(r=0,this.baselayerIds.push(r),this.arrBaselayers[r]||(this.arrBaselayers[r]={id:0,name:"c4g_default",provider:"osm",style:"Mapnik"})),this.showBaseLayer(r)),this.proxy.baselayers_loaded=!0,s.a.callHookFunctions(this.proxy.hook_baselayer_loaded,this.baselayerIds)}},{key:"createBaseLayer",value:function(e,t,r){var a;switch(e=e||{},t.provider){case"custom":var o=!0;t.url?(e.url=t.url,o=!1):t.urls&&(e.urls=t.urls,o=!1),o?console.warn("custom url(s) missing -> switch to default"):a=new ol.layer.Tile({source:new ol.source.XYZ(e),extent:t.extend});case"osm":if(r.osm[t.style])a=new ol.layer.Tile({source:new ol.source.OSM($.extend(r.osm[t.style],e))});else if(r.stamen[t.style])a=new ol.layer.Tile({source:new ol.source.Stamen($.extend(r.stamen[t.style],e))});else if("osm_custom"===t.style){var n=!0;t.url?(e.url=t.url,n=!1):t.urls&&(e.urls=t.urls,n=!1),n?console.warn("custom url(s) missing -> switch to default"):a=new ol.layer.Tile({source:new ol.source.XYZ(e)})}else console.warn("unsupported osm-style -> switch to default");break;case"mapbox":t.api_key&&t.app_id&&t.mapbox_type?"Mapbox"===t.mapbox_type?(e.url=t.url+t.app_id+"/tiles/{z}/{x}/{y}?access_token="+t.api_key,a=new ol.layer.Tile({source:new ol.source.XYZ(jQuery.extend(r.mapbox[t.mapbox_type],e))})):(e.url=t.url_classic+t.app_id+"/{z}/{x}/{y}.png?access_token="+t.api_key,a=new ol.layer.Tile({source:new ol.source.XYZ(jQuery.extend(r.mapbox[t.mapbox_type],e))})):t.hide_in_be?(e.url="con4gis/baseLayerTileService/"+t.id+"/{z}/{x}/{y}",a=new ol.layer.Tile({source:new ol.source.XYZ($.extend(r.mapbox[t.mapbox_type],e))})):console.warn("wrong mapbox configuration!");break;case"klokan":t.api_key&&t.klokan_type?"OpenMapTiles"===t.klokan_type?(e.url=t.url+"{z}/{x}/{y}.pbf",a=new ol.layer.VectorTile({source:new ol.source.VectorTile(jQuery.extend(r.klokan[t.klokan_type],e))}),fetch(t.url+"/styles/"+t.style+"/style.json").then(function(e){e.json().then(function(e){olms.applyStyle(a,e,"openmaptiles")})})):(e.url=t.url+"/data/v3/{z}/{x}/{y}.pbf?key="+t.api_key,a=new ol.layer.VectorTile({source:new ol.source.VectorTile(jQuery.extend(r.klokan[t.klokan_type],e))}),fetch(t.url+"/styles/"+t.style+"/style.json?key="+t.api_key).then(function(e){e.json().then(function(e){olms.applyStyle(a,e,"openmaptiles")})})):console.warn("wrong klokan configuration!");break;case"here":t.api_key&&t.app_id&&t.here_type?("normal"==t.style?e.url="https://{1-4}.base.maps.cit.api.here.com/maptile/2.1/maptile/newest/normal.day/{z}/{x}/{y}/256/png?app_id="+t.app_id+"&app_code="+t.api_key:"transit"==t.style?e.url="https://{1-4}.base.maps.cit.api.here.com/maptile/2.1/maptile/newest/normal.day.transit/{z}/{x}/{y}/256/png?app_id="+t.app_id+"&app_code="+t.api_key:"pedestrian"==t.style?e.url="https://{1-4}.base.maps.cit.api.here.com/maptile/2.1/maptile/newest/pedestrian.day/{z}/{x}/{y}/256/png?app_id="+t.app_id+"&app_code="+t.api_key:"terrain"==t.style?e.url="https://{1-4}.aerial.maps.cit.api.here.com/maptile/2.1/maptile/newest/terrain.day/{z}/{x}/{y}/256/png?app_id="+t.app_id+"&app_code="+t.api_key:"satellite"==t.style?e.url="https://{1-4}.aerial.maps.cit.api.here.com/maptile/2.1/maptile/newest/satellite.day/{z}/{x}/{y}/256/png?app_id="+t.app_id+"&app_code="+t.api_key:"hybrid"==t.style&&(e.url="https://{1-4}.aerial.maps.cit.api.here.com/maptile/2.1/maptile/newest/hybrid.day/{z}/{x}/{y}/256/png?app_id="+t.app_id+"&app_code="+t.api_key),a=new ol.layer.Tile({source:new ol.source.XYZ($.extend(r.here[t.here_type],e))})):t.hide_in_be?(e.url=e.url="con4gis/baseLayerTileService/"+t.id+"/{z}/{x}/{y}",a=new ol.layer.Tile({source:new ol.source.XYZ($.extend(r.mapbox[t.here_type],e))})):console.warn("wrong HERE configuration!");break;case"thunder":t.api_key&&t.thunderforest_type?(t.style&&(e.url="https://tile.thunderforest.com/"+t.style+"/{z}/{x}/{y}.png?apikey="+t.api_key),a=new ol.layer.Tile({source:new ol.source.XYZ(jQuery.extend(r.thunderforest[t.thunderforest_type],e))})):t.hide_in_be?(e.url="con4gis/baseLayerTileService/"+t.id+"/{z}/{x}/{y}",a=new ol.layer.Tile({source:new ol.source.XYZ(jQuery.extend(r.mapbox[t.thunderforest_type],e))})):console.warn("wrong Thunderforest configuration!");break;case"google":console.warn("google-maps are currently unsupported");break;case"bing":t.api_key&&t.style?a=new ol.layer.Tile({source:new ol.source.BingMaps({culture:navigator.languages?navigator.languages[0]:navigator.language||navigator.userLanguage,key:t.api_key,imagerySet:t.style})}):console.warn("wrong bing-key or invalid imagery-set!");break;case"wms":a=-1!==t.url.indexOf("https")?new ol.layer.Tile({source:new ol.source.TileWMS({url:t.url,params:{LAYERS:t.params.layers,VERSION:t.params.version,TRANSPARENT:t.params.transparent},gutter:t.gutter,attributions:t.attribution+" "+ol.source.OSM.ATTRIBUTION,crossOrigin:"anonymous"})}):new ol.layer.Tile({source:new ol.source.TileWMS({url:t.url,params:{LAYERS:t.params.layers,VERSION:t.params.version,TRANSPARENT:t.params.transparent},gutter:t.gutter,attributions:t.attribution+" "+ol.source.OSM.ATTRIBUTION})});break;case"owm":a=new ol.layer.Tile({source:new ol.source.XYZ({url:t.url+t.app_id+"/{z}/{x}/{y}?hash="+t.api_key,attributions:t.attribution+" "+ol.source.OSM.ATTRIBUTION})});break;case"group":var i=[];for(var s in t.layerGroup)if(t.layerGroup.hasOwnProperty(s)){var l=this.createBaseLayer(null,t.layerGroup[s],r),c=this.proxy.options.mapController.map.getView().getResolutionForZoom(t.layerGroup[s].minZoom),u=this.proxy.options.mapController.map.getView().getResolutionForZoom(t.layerGroup[s].maxZoom);l.setMinResolution(u),l.setMaxResolution(c),i.push(l)}a=new ol.layer.Group({layers:i});break;default:console.warn("unsupported provider")}return a}},{key:"showBaseLayer",value:function(e){var t=void 0,r=void 0,a=void 0,o=void 0,c=[],u=void 0,p=void 0,h=void 0,d=void 0,m=this.arrBaselayers[e];if(void 0!==m&&!m.layer){if(c.osm=i.a.osm,c.stamen=i.a.stamen,c.mapbox=i.a.mapbox,c.klokan=i.a.klokan,c.here=i.a.here,c.thunderforest=i.a.thunderforest,p={},m.attribution)p.attributions?p.attributions=p.attributions+" "+m.attribution:p.attributions=ol.source.OSM.ATTRIBUTION+" "+m.attribution;else if(!p.attributions)switch(m.provider){case"osm":c.stamen[m.style]?p.attributions=c.stamen[m.style].attributions:c.osm[m.style]?p.attributions=c.osm[m.style].attributions:p.attributions=ol.source.OSM.ATTRIBUTION;break;case"mapbox":p.attributions=c.mapbox[m.mapbox_type].attributions;break;case"klokan":p.attributions=c.klokan[m.klokan_type].attributions;break;case"here":p.attributions=c.here[m.here_type].attributions;break;case"thunder":p.attributions=c.thunderforest[m.thunderforest_type].attributions;break;default:p.attributions=ol.source.OSM.ATTRIBUTION}if(this.mapController.data&&this.mapController.data.attribution&&this.mapController.data.attribution.additional)if(p.attributions){var b=this.mapController.data.attribution.additional;for(_=!1,h=0;h<p.attributions.length;h+=1)if(p.attributions[h]==b){_=!0;break}_||(p.attributions=p.attributions+" "+b)}else p.attributions=this.mapController.data.attribution.additional;var g="";if(this.mapController.data.geosearch){var y=this.mapController.data.geosearch.geosearch_engine;if(this.mapController.data&&this.mapController.data.attribution){switch(y){case"4":g="";break;case"3":this.mapController.data.geosearch.custom_attribution&&(g=this.mapController.data.geosearch.custom_attribution);break;case"2":g='Nominatim Search Courtesy of <a href="http://www.mapquest.com/" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" alt="" />';break;case"1":default:g='Nominatim Search Courtesy of <a href="http://wiki.openstreetmap.org/wiki/Nominatim_usage_policy" target="_blank">OpenStreetMap</a>'}var f=g,_=!1;for(p.attributions||(p.attributions=[]),h=0;h<p.attributions.length;h+=1)if(p.attributions[h]==f){_=!0;break}p.attributions=_?f:p.attributions+" "+f}}if(m.sorting&&(p.sort=m.sorting),m.minZoom&&m.minZoom>=0&&(p.minZoom=m.minZoom),m.maxZoom&&m.maxZoom>=0&&(p.maxZoom=m.maxZoom),u=this.createBaseLayer(p,m,c),m.hasOverlays)for(h=0;h<m.overlays.length;h++)m.overlayController.arrOverlays[m.overlays[h].id]||(m.overlayController.arrOverlays[m.overlays[h].id]=new n.a(m.overlays[h],this.mapController),m.overlayController.arrOverlays[m.overlays[h].id].layer=m.overlayController.showOverlayLayer(m.overlays[h].id));this.arrBaselayers[e].layer=u}if(t=this.mapController.map.getLayers(),"baseMapsLayer"===t.item(0).get("checkSum")&&(o=t.item(0).getLayers(),void 0!==this.arrBaselayers[e])){r=this.arrBaselayers[e].layer,r&&(a=!0,o.forEach(function(e,t,o){e&&e===r?(e.setVisible(!0),a=!1):e?e.setVisible(!1):a=!1},this),a&&o.push(r)),d=this.mapController.map.getView();var k=d.getZoom(),v=d.getCenter();if(m.minZoom&&m.minZoom>=0||m.maxZoom&&m.maxZoom>=0){m.minZoom&&d.getZoom()<m.minZoom?d.setZoom(m.minZoom):m.maxZoom&&d.getZoom()>m.maxZoom&&d.setZoom(m.maxZoom);var w=this.mapController.data;if(w.zoomlevel||w.mouseposition){var S=document.createElement("div");S.className=l.a.CONTROL_CONTAINER_TL+" "+l.a.OL_UNSELECTABLE,this.mapController.$overlaycontainer_stopevent.prepend(S);var C=document.createElement("div");C.className=l.a.CONTROL_CONTAINER_BL+" "+l.a.OL_UNSELECTABLE,$(S).after(C),this.mapController.leftSlideElements.push(C);document.createElement("div").className=l.a.CONTROL_CONTAINER_BL_SUB+" "+l.a.OL_UNSELECTABLE;var E=new ol.View({center:v,projection:d.getProjection(),zoom:k,minZoom:parseInt(m.minZoom,10)||0,maxZoom:parseInt(m.maxZoom,10)||19,rotation:d.getRotation(),resolution:d.getResolution()});this.mapController.map.setView(E),s.a.redrawMapView(this.mapController)}}}if(void 0!==m&&(this.proxy.activeBaselayerId=m.id,s.a.callHookFunctions(this.proxy.hook_baselayer_visibility,m),void 0!==m)){var w=this.mapController.data;w.cesium&&w.cesium.enable&&(w.cesium.always||m.cesium)?(this.ol3d||(this.ol3d=new olcs.OLCesium({map:this.mapController.map,createSynchronizers:!1})),this.ol3d.setEnabled(!0)):this.ol3d&&this.ol3d.getEnabled()&&(this.ol3d.setEnabled(!1),s.a.redrawMapView(this.mapController))}}}]),e}()},TewV:function(e,t,r){"use strict";r.d(t,"a",function(){return a}),this.c4g=this.c4g||{},this.c4g.maps=this.c4g.maps||{},this.c4g.maps.constant=this.c4g.maps.constant||{},function(e,t){t.maps.constant.css=e.extend(t.maps.constant.css,{OPEN:"c4g-open",CLOSE:"c4g-close",CLOSEABLE:"c4g-closeable",ENABLED:"c4g-enabled",DISABLED:"c4g-disabled",HIDE:"c4g-hide",ICON:"c4g-icon",CONTROL:"c4g-control",COPY:"c4g-copy",REFRESH:"c4g-refresh",ACTIVE:"c4g-active",INACTIVE:"c4g-inactive",LOADING:"c4g-loading",ANIMATION_SPIN:"c4g-animation-spin",LARGE:"c4g-large",SMALL:"c4g-small",HORIZONTAL:"c4g-horizontal",VERTICAL:"c4g-vertical",ATTRIBUTION_LOGO:"c4g-attribution-logo",CONTROL_CONTAINER_TL:"c4g-control-container-top-left",CONTROL_CONTAINER_TR:"c4g-control-container-top-right",CONTROL_CONTAINER_BL:"c4g-control-container-bottom-left",CONTROL_CONTAINER_BL_SUB:"c4g-control-container-bottom-left-sub",CONTROL_CONTAINER_BR:"c4g-control-container-bottom-right",EDITOR_DRAW_CONTENT_POINT:"c4g-draw-content-point",EDITOR_DRAW_CONTENT_FREEHAND:"c4g-draw-content-freehand",EDITOR_DRAW_CONTENT_LINESTRING:"c4g-draw-content-line",EDITOR_DRAW_CONTENT_POLYGON:"c4g-draw-content-polygon",EDITOR_DRAW_CONTENT_CIRCLE:"c4g-draw-content-circle",EDITOR_DRAW_CONTENT_PROJECT:"c4g-draw-content-project",EDITOR_DRAW_TRIGGER:"c4g-draw-trigger",EDITOR_CONTENT_SELECT:"c4g-content-select",EDITOR_DRAW_OPTIONS:"c4g-editor-draw-options",EDITOR_FEATURE_APPLY:"c4g-editor-feature-apply",EDITOR_FEATURE_DELETE:"c4g-editor-feature-delete",EDITOR_FEATURE_MODIFY:"c4g-editor-feature-modify",EDITOR_VIEW_TRIGGER_SELECT:"c4g-editor-view-trigger-select",EDITOR_VIEW_TRIGGER_DRAW_POINT:"c4g-editor-view-trigger-draw-point",EDITOR_VIEW_TRIGGER_DRAW_FREEHAND:"c4g-editor-view-trigger-draw-freehand",EDITOR_VIEW_TRIGGER_DRAW_LINESTRING:"c4g-editor-view-trigger-draw-line",EDITOR_VIEW_TRIGGER_DRAW_POLYGON:"c4g-editor-view-trigger-draw-polygon",EDITOR_VIEW_TRIGGER_DRAW_CIRCLE:"c4g-editor-view-trigger-draw-circle",GEOSEARCH:"c4g-geosearch",GEOSEARCH_WRAPPER:"c4g-geosearch-wrapper",GEOSEARCH_TRIGGER:"c4g-geosearch-trigger",GEOSEARCH_START:"c4g-geosearch-start",GRATICULE:"c4g-graticule",MEASURETOOLS_VIEW_TRIGGER_SELECT:"c4g-measuretools-view-trigger-select",MEASURETOOLS_VIEW_TRIGGER_DRAW_LINESTRING:"c4g-measuretools-view-trigger-draw-line",MEASURETOOLS_VIEW_TRIGGER_DRAW_POLYGON:"c4g-measuretools-view-trigger-draw-polygon",MEASURETOOLS_VIEW_TRIGGER_DRAW_CIRCLE:"c4g-measuretools-view-trigger-draw-circle",MEASURETOOLS_VIEW_TRIGGER_DRAW_FREEHAND:"c4g-measuretools-view-trigger-draw-freehand",PRINT:"c4g-print",INFOPAGE_VIEW_TRIGGER:"c4g-infopage-view-trigger",INFOPAGE:"c4g-infopage",ADDITIONALPANEL_VIEW_TRIGGER:"c4g-additionalpanel-view-trigger",ADDITIONALPANEL:"c4g-additionalpanel",ACCOUNT_VIEW_TRIGGER:"c4g-account-view-trigger",ACCOUNT:"c4g-account",OVERVIEWMAP:"c4g-overviewmap",OVERVIEWMAP_WRAPPER:"c4g-overviewmap-wrapper",GEOBOOKMARKS:"c4g-geobookmarks",PERMALINK:"c4g-permalink",PERMALINK_POPUP:"c4g-permalink-popup",POPUP_CLOSE:"c4g-popup-close",POPUP_ROUTE_WRAPPER:"c4g-popup-route-wrapper",POPUP_ROUTE_FROM:"c4g-popup-route-from",POPUP_ROUTE_TO:"c4g-popup-route-to",PORTSIDE:"c4g-portside",PORTSIDE_CONTAINER:"c4g-portside-container",PORTSIDE_CONTROL:"c4g-portside-control",PORTSIDE_WRAPPER:"c4g-portside-wrapper",PORTSIDE_TITLEBAR:"c4g-portside-titlebar",PORTSIDE_TOP_TOOLBAR:"c4g-portside-top-toolbar",PORTSIDE_CONTENT_CONTAINER:"c4g-portside-content-container",PORTSIDE_BOTTOM_TOOLBAR:"c4g-portside-bottom-toolbar",PORTSIDE_STATUSBAR:"c4g-portside-statusbar",PORTSIDE_VIEWTRIGGERBAR:"c4g-portside-viewtriggerbar",PORTSIDE_HEADLINE:"c4g-portside-headline",PORTSIDE_BUTTONBAR:"c4g-portside-buttonbar",PORTSIDE_BUTTON:"c4g-portside-button",PORTSIDE_HIDE:"c4g-portside-hide",PORTSIDE_CLOSE:"c4g-portside-close",SPINNER:"c4g-spinner",STARBOARD:"c4g-starboard",STARBOARD_CONTAINER:"c4g-starboard-container",STARBOARD_CONTROL:"c4g-starboard-control",STARBOARD_WRAPPER:"c4g-starboard-wrapper",STARBOARD_TITLEBAR:"c4g-starboard-titlebar",STARBOARD_CONTENT_CONTAINER:"c4g-starboard-content-container",STARBOARD_BOTTOM_TOOLBAR:"c4g-starboard-bottom-toolbar",STARBOARD_STATUSBAR:"c4g-starboard-statusbar",STARBOARD_VIEWTRIGGERBAR:"c4g-starboard-viewtriggerbar",STARBOARD_HEADLINE:"c4g-starboard-headline",STARBOARD_BUTTONBAR:"c4g-starboard-buttonbar",STARBOARD_BUTTON:"c4g-starboard-button",STARBOARD_VIEW_TRIGGER_BASELAYERSWITCHER:"c4g-starboard-view-trigger-baselayerswitcher",STARBOARD_VIEW_TRIGGER_LAYERSWITCHER:"c4g-starboard-view-trigger-layerswitcher",STARBOARD_CLOSE:"c4g-starboard-close",STARBOARD_CONTENT_BASELAYERSWITCHER:"c4g-content-baselayerswitcher",STARBOARD_BASELAYERTREE:"c4g-baselayertree",STARBOARD_LAYERTREE:"c4g-layertree",STARBOARD_CONTENT_LAYERSWITCHER:"c4g-content-layerswitcher",TOOLTIP_POPUP:"c4g-tooltip-popup",ZOOM_LEVEL:"c4g-zoom-level",ROUTER_INPUT_WRAPPER:"c4g-router-input-wrapper",ROUTER_PROFILE_WRAPPER:"c4g-router-profile-wrapper",ROUTER_INPUT_FROM:"c4g-router-input-from",ROUTER_INPUT_TO:"c4g-router-input-to",ROUTER_INPUT_CLEAR:"c4g-router-input-clear",ROUTER_BUTTONBAR:"c4g-router-buttonbar",ROUTER_ATTRIBUTION_WRAPPER:"c4g-router-attribution-wrapper",ROUTER_INSTRUCTIONS_WRAPPER:"c4g-router-instructions-wrapper",ROUTER_INSTRUCTIONS_HEADER:"c4g-router-instructions-header",ROUTER_SWITCH:"c4g-router-switch",ROUTER_OVER:"c4g-router-over",ROUTER_PRINT:"c4g-router-print",ROUTER_PROFILE_CAR:"c4g-router-profile-car",ROUTER_PROFILE_HGV:"c4g-router-profile-hgv",ROUTER_PROFILE_BIKE:"c4g-router-profile-bike",ROUTER_PROFILE_FOOT:"c4g-router-profile-foot",ROUTER_PROFILE_WHEELCHAIR:"c4g-router-profile-wheelchair",ROUTER_INSTRUCTIONS_TABLE:"c4g-router-instruction-table",ROUTER_INSTRUCTIONS_ITEM:"c4g-router-instruction-item",ROUTER_INSTRUCTIONS_ITEM_ODD:"c4g-router-instruction-item--odd",ROUTER_INSTRUCTIONS_ITEM_EVEN:"c4g-router-instruction-item--even",ROUTER_INSTRUCTIONS_ITEM_DIRECTION:"c4g-router-instruction-item_direction",ROUTER_INSTRUCTIONS_ITEM_DIRECTION_ICON:"c4g-router-instruction-item_direction-icon",ROUTER_INSTRUCTIONS_ITEM_DIRECTION_TEXT:"c4g-router-instruction-item_text",ROUTER_INSTRUCTIONS_ITEM_DIRECTION_DISTANCE:"c4g-router-instruction-item_distance",OL_CONTROL:"ol-control",OL_UNSELECTABLE:"ol-unselectable",OL_OVERLAYCONTAINER:"ol-overlaycontainer",OL_OVERLAYCONTAINER_SE:"ol-overlaycontainer-stopevent",OL_VIEWPORT:"ol-viewport",OL_ZOOM:"ol-zoom",OL_ZOOM_IN:"ol-zoom-in",OL_ZOOM_EXT:"ol-zoom-extent",OL_ZOOM_HOME:"ol-zoom-home",OL_ZOOM_POS:"ol-zoom-position",OL_ZOOM_WITH_EXT:"ol-zoom-with-extent",OL_ZOOM_WITH_HOME:"ol-zoom-with-home",OL_ZOOM_WITH_POS:"ol-zoom-with-position",OL_ZOOM_SLIDER:"ol-zoom-slider",OL_ZOOM_WITH_SLIDER:"ol-zoom-with-slider",NONE:""})}(jQuery,this.c4g);var a=this.c4g.maps.constant.css},TmeX:function(e,t,r){"use strict";r.d(t,"a",function(){return o});var a=r("TewV");r("g1Hq");this.c4g=this.c4g||{},this.c4g.maps=this.c4g.maps||{},this.c4g.maps.control=this.c4g.maps.control||{},function(e,t){t.maps.control.Position=function(r){var o,n,i=r||{};if(i=e.extend({className:a.a.OL_ZOOM_POS,switchable:!0,enabled:!0,mapController:void 0},i),!i.mapController)return!1;var s=i.mapController.map.getView(),l=(i.mapController.data,function(e){e.stopPropagation(),this.blur();var r=new ol.Geolocation({tracking:!0,projection:s.getProjection()});r.on("change",function(e){s.setCenter(r.getPosition()),s.setZoom(18),r.setTracking(!1),i.mapController.map.setView(s),t.maps.utils.redrawMapView(i.mapController)})});o=document.createElement("div"),o.className=i.className+" "+a.a.OL_UNSELECTABLE+" button",i.switchable&&(n=document.createElement("button"),n.title=i.tipLabel,o.appendChild(n),n.addEventListener("click",l,!1),n.addEventListener("touchstart",l,!1)),ol.control.Control.call(this,{element:o,target:i.target})},ol.inherits(t.maps.control.Position,ol.control.Control),t.maps.control.Position.prototype=e.extend(t.maps.control.Position.prototype,{})}(jQuery,this.c4g);var o=this.c4g.maps.control.Position},W9KH:function(e,t,r){"use strict";r.d(t,"a",function(){return n});var a=r("TewV"),o=r("g1Hq");this.c4g=this.c4g||{},this.c4g.maps=this.c4g.maps||{},this.c4g.maps.control=this.c4g.maps.control||{},function(e,t){t.maps.control.OverviewMap=function(t){var r,n,i;return t=e.extend({collapsed:!0,tipLabel:o.a.CTRL_OVERVIEWMAP,layers:[new ol.layer.Tile({source:new ol.source.OSM})]},t),r=document.createElement("div"),r.className=a.a.OL_CONTROL+" "+a.a.OVERVIEWMAP+" "+a.a.OL_UNSELECTABLE,t.collapsed?r.className+=" "+a.a.CLOSE:r.className+=" "+a.a.OPEN,t.target.appendChild(r),n=document.createElement("button"),n.title=t.tipLabel,r.appendChild(n),i=document.createElement("span"),i.className=a.a.ICON,n.appendChild(i),e(n).click(function(){e(r).hasClass(a.a.CLOSE)?e(r).removeClass(a.a.CLOSE).addClass(a.a.OPEN):e(r).addClass(a.a.CLOSE).removeClass(a.a.OPEN);try{this.blur()}catch(e){}}),new ol.control.OverviewMap({collapsible:!1,collapsed:!1,target:r,layers:t.layers})},t.maps.control.OverviewMap.prototype=e.extend(t.maps.control.OverviewMap.prototype,{})}(jQuery,this.c4g);var n=this.c4g.maps.control.OverviewMap},XztD:function(e,t,r){"use strict";/*
  K?stenschmiede GmbH Software & Design 2011 - 2018
 @author     K?stenschmiede <http://www.kuestenschmiede.de>
 @license    http://opensource.org/licenses/lgpl-3.0.html
*/
function trim(b) {
    return b.replace(/^\s+/, "").replace(/\s+$/, "");
}
function isMobile() {
    return (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|android|ipad|playbook|silk/i.test(navigator.userAgent || navigator.vendor || window.opera) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test((navigator.userAgent || navigator.vendor || window.opera).substr(0, 4))
    );
}function translate(b) {
    var a = trim(b);return "yes" == a || "Yes" == a ? "Ja" : "no" == a ? "Nein" : "No" == a ? "nein" : "limited" == a ? "Eingeschr\xE4nkt" : "designated" == a ? "Ja" : "wood" == a ? "Holz" : "metal" == a ? "Metall" : "concrete" == a ? "Beton" : "plastic" == a ? "Plastik" : "stone" == a ? "Stein" : "steel" == a ? "Stahl" : "brick" == a ? "Ziegel" : "reinforced_concrete" == a ? "Stahlbeton" : "masonry" == a ? "Mauerwerk" : b;
}
var fnStandardInfoPopup = function fnStandardInfoPopup(b, a) {
    var c = b.getProperties(),
        d = "",
        e;if ("function" === typeof a) {
        var f = a.call(b)[0].getImage();if (f) try {
            e = f.getSrc();
        } catch (g) {
            e = "";
        }
    } else {
        f = a.getImage();try {
            e = f.getSrc();
        } catch (h) {
            e = "";
        }
    }d += fnHeader(c, e);d += fnContent(c);d += fnFooter(c, b.get("osm_type") + "/" + b.getId());return '<div class="c4g_popup_text">' + d + "</div>";
},
    fnReducedInfoPopup = function fnReducedInfoPopup(b, a) {
    var c = b.getProperties(),
        d = "",
        e = !1,
        f;f = "function" === typeof a ? a.call(b)[0].getImage().getSrc() : a.getImage().getSrc();if ("restaurant" == c.amenity || "pub" == c.amenity || "biergarten" == c.amenity) e = !0;"hotel" == c.tourism && (e = !0);"guest_house" == c.tourism && (e = !0);"chalet" == c.tourism && (e = !0);"hostel" == c.tourism && (e = !0);"alpine_hut" == c.tourism && (e = !0);if ("artwork" == c.tourism || "artwork" == c.amenity) e = !0;if ("museum" == c.tourism || "museum" == c.amenity) e = !0;"cinema" == c.amenity && (e = !0);"theatre" == c.amenity && (e = !0);if ("attraction" == c.amenity || "fountain" == c.amenity || "monument" == c.historic || "city_gate" == c.historic || "ruins" == c.historic || "castle" == c.historic || "attraction" == c.tourism) e = !0;"playground" == c.leisure && (e = !0);c.aerialway && (e = !0);if ("swimming_pool" == c.amenity || "swimming_pool" == c.leisure || "swimming" == c.sport) e = !0;"station" == c.railway && (e = !0);"swimming" == c.sport && (e = !0);"swimming_pool" == c.leisure && (e = !0);"swimming_pool" == c.amenity && (e = !0);"waterpark" == c.leisure && (e = !0);c.water_park && (e = !0);"sports_centre" == c.leisure && (e = !0);switch (e) {case !1:
            d += fnHeader(c, f);d += fnContent(c);d += fnFooter(c, b.get("osm_type") + "/" + b.getId());break;case !0:
            d += fnHeader(c, f);}return '<div class="c4g_popup_text">' + d + "</div>";
};
function fnHeader(b, a) {
    var c = "",
        d = "32px";a && -1 != a.indexOf("icon_mapcil") && (d = "250px", a = a.replace("icon_mapcil", "logo_mapcil"));if (b.name || b["piste:name"] || b["xmas:name"] || b["xmas:location"]) {
        if (b.name) var e = b.name;b["piste:name"] && (e = b["piste:name"]);b["xmas:name"] && (e = b["xmas:name"]);b["xmas:location"] && (e = b["xmas:location"]);c += a ? '<img src="' + a + '" width="' + d + '" name="' + e + '" alt="' + e + '"><div class="c4g_popup_header_featurename">' + e + "</div>" : '<name="' + e + '" alt="' + e + '"><div class="c4g_popup_header_featurename">' + e + "</div>";
    } else a && (c += '<img src="' + a + '" width="' + d + '" name="' + a + '" alt="' + a + '">');c += fnGetTranslate_Type(b);return '<div class="c4g_popup_header">' + c + "</div>";
}
function fnFooter(b, a) {
    var c = "",
        d = !1;b["addr:housename"] && (c += "Geb\xE4udename: " + b["addr:housename"] + "<br/>", d = !0);b["addr:floor"] ? (c += "Etage: " + b["addr:floor"] + "<br/>", d = !0) : b["addr:level"] && (c += "Etage: " + b["addr:level"] + "<br/>", d = !0);b["addr:street"] && (c += b["addr:street"], c = b["addr:housenumber"] ? c + (" " + b["addr:housenumber"] + "<br/>") : c + "<br/>", d = !0);b["addr:postcode"] && (c += b["addr:postcode"] + " ");b["addr:city"] && (c += b["addr:city"] + "<br/>", d = !0);if (b.sqkm) if (b.sqkm = "" + b.sqkm, 3 < b.sqkm.length) {
        var e = b.sqkm.length % 3,
            f = 0 < e ? b.sqkm.substring(0, e) : "";for (i = 0; i < Math.floor(b.sqkm.length / 3); i++) {
            f = 0 == e && 0 == i ? f + b.sqkm.substring(e + 3 * i, e + 3 * i + 3) : f + ("." + b.sqkm.substring(e + 3 * i, e + 3 * i + 3));
        }c += "Fl\xE4che: " + f + " Km\xB2<br/>";
    } else c += "Fl\xE4che " + b.sqkm + "<br/>";b["contact:phone"] && (c = isMobile() ? c + ('Telefon: <a href="tel:' + b["contact:phone"] + '">' + b["contact:phone"] + "</a><br/>") : c + ('Telefon: <a href="callto:' + b["contact:phone"] + '">' + b["contact:phone"] + "</a><br/>"), d = !0);b.phone && (c = isMobile() ? c + ('Telefon: <a href="tel:' + b.phone + '">' + b.phone + "</a><br/>") : c + ('Telefon: <a href="callto:' + b.phone + '">' + b.phone + "</a><br/>"), d = !0);b["contact:fax"] ? (c += "Telefax: " + b["contact:fax"] + "<br/>", d = !0) : b.fax && (c += "Telefax: " + b.fax + "<br/>", d = !0);b["contact:email"] ? (c += 'E-Mail-Adresse: <a href="mailto:' + b["contact:email"] + '">' + b["contact:email"] + "</a><br/>", d = !0) : b.email && (c += 'E-Mail-Adresse: <a href="mailto:' + b.email + '">' + b.email + "</a><br/>", d = !0);d && (c += "<br/>");if (b.opening_hours) {
        d = b.opening_hours;for (e = 0; 0 == e || 0 < d.indexOf(";");) {
            d = d.replace("PH", "FT"), d = d.replace("Tu", "Di"), d = d.replace("We", "Mi"), d = d.replace("Th", "Do"), d = d.replace("Su", "So"), d = d.replace("Mar", "M\xE4r"), d = d.replace("May", "Mai"), d = d.replace("Oct", "Okt"), d = d.replace("Dec", "Dez"), d = d.replace('"Please make a reservation"', '"Bitte vereinbaren Sie einen Termin"'), d = d.replace("off", "ausgenommen"), 0 < e && (d = d.replace(";", "<br/>")), e++;
        }c += "\xD6ffnungszeiten: <br/><div class=\"c4g_open_text\">" + d + "</div>";c = 0 < d.indexOf("FT") ? c + "(FT = Feiertag)<br/>" : c + "<br/>";
    }if (b["xmas:opening_hours"]) {
        d = b["xmas:opening_hours"];for (e = 0; 0 == e || 0 < d.indexOf(";");) {
            d = d.replace("PH", "FT"), d = d.replace("Tu", "Di"), d = d.replace("We", "Mi"), d = d.replace("Th", "Do"), d = d.replace("Su", "So"), d = d.replace("Mar", "M\xE4r"), d = d.replace("May", "Mai"), d = d.replace("Oct", "Okt"), d = d.replace("Dec", "Dez"), 0 < e && (d = d.replace(";", "<br/>")), e++;
        }c += "\xD6ffnungszeiten: <br/><div class=\"c4g_open_text\">" + d + "</div>";c = 0 < d.indexOf("FT") ? c + "(FT = Feiertag)<br/>" : c + "<br/>";
    }b["xmas:url"] && (d = "", d = b["xmas:url"], trim(d), -1 == d.indexOf("https://", 0) && -1 == d.indexOf("http://", 0) && (d = "http://" + d), c += 'Website: <a href="' + d + '" target="_blank">Link zur Website</a><br/>');b["contact:website"] ? (d = b["contact:website"], trim(d), -1 == d.indexOf("https://", 0) && -1 == d.indexOf("http://", 0) && (d = "http://" + d), c += 'Website: <a href="' + d + '" target="_blank">Link zur Website</a><br/>') : b.website && (d = b.website, trim(d), -1 == d.indexOf("https://", 0) && -1 == d.indexOf("http://", 0) && (d = "http://" + d), c += 'Website: <a href="' + d + '" target="_blank">Link zur Website</a><br/>');b.wikipedia && (d = b.wikipedia, trim(d), -1 == d.indexOf("https://", 0) && -1 == d.indexOf("http://", 0) && (d = "https://wikipedia.org/wiki/" + d), c += 'Wikipedia: <a href="' + d + '" target="_blank">Link zu Wikipedia</a><br/>');b.wikimedia_commons && (d = b.wikimedia_commons, trim(d), -1 == d.indexOf("https://", 0) && -1 == d.indexOf("http://", 0) && (d = "https://commons.wikimedia.org/wiki/" + d), c += 'Wikimedia: <a href="' + d + '" target="_blank">Link zu Wikimedia</a><br/>');b["contact:webcam"] && (d = b["contact:webcam"], trim(d), -1 == d.indexOf("https://", 0) && -1 == d.indexOf("http://", 0) && (d = "http://" + d), c += 'Webcam: <a href="' + d + '" target="_blank">Link zur Webcam</a><br/>');b.image && (c += '<img src="' + b.image + '" width="200px" name="' + b.name + '" alt="' + b.name + '"><br/>');d = "";b.internet_access && (d += "Internetzugriff: " + translate(b.internet_access) + "<br/>");b["internet_access:fee"] && (d += "Internet Geb\xFChr: " + translate(b["internet_access:fee"]) + "<br/>");b["wifi_access:operator"] && (d += "wifi Betreiber: " + b["wifi_access:operator"] + "<br/>");b["wifi_access:technology"] && (d += "wifi Technologie: " + b["wifi_access:technology"] + "<br/>");b["wifi_access:ssid"] && (d += "wifi ssid: " + b["wifi_access:ssid"] + "<br/>");"" != d && (c += 'Internetzugang vorhanden<br/><div class="c4g_shop_internet_access">' + d + "</div><br/>");b.wheelchair && (c += "rollstuhlgeeignet: " + translate(b.wheelchair) + "<br/>");b["wheelchair:description"] && (c += "Beschreibung: " + b["wheelchair:description"] + "<br/>");b["wheelchair:entrance_width"] && (c += "Breite des Eingangs in CM: " + b["wheelchair:entrance_width"] + "<br/>");b["wheelchair:step_height"] && (c += "H\xF6he der Stufe am Eingang in CM: " + b["wheelchair:step_height"] + "<br/>");b["wheelchair:rooms"] && (c += "Anzahl rollstuhlgerechter R\xE4ume: " + b["wheelchair:rooms"] + "<br/>");b["wheelchair:places"] && (c += "Anzahl der Rollstuhlpl\xE4tze: " + b["wheelchair:places"] + "<br/>");b["cent:places"] && (c += "Anzahl der Rollstuhlpl\xE4tze: " + b["wheelchair:places"] + "<br/>");b["ramp:wheelchair"] && (c += "Rampe f\xFCr Rollstuhlfahrer: " + b["ramp:wheelchair"] + "<br/>");b["capacity:disabled"] && (c += "Behindertenparkpl\xE4tze: " + translate(b["capacity:disabled"]) + "<br/>");b["toilets:wheelchair"] && (c += "Behinderdengerechte Toilette: " + translate(b["toilets:wheelchair"]) + "<br/>");b.centralkey && (c += "Zentralschl\xFCssel: " + b.centralkey + "<br/>");b.note && (c += b.note + "<br/>");b.description && (c += b.description + "<br/>");b.operator && (c += "Betreiber: " + b.operator + "<br/>");b.ref && (c += "Referenz: " + b.ref + "<br/>");"yes" == b.lit && (c += "Dieses Objekt ist beleuchtet.<br/>");b.shop && (d = "", b.brand && (d += "Markenzeichen: " + b.brand + "<br/>"), b.sells && (d += "Verkaufs: " + b.sells + "<br/>"), b.origin && (d += "Herkunftsl\xE4nder: " + b.origin + "<br/>"), "yes" == b.wholesale && (d += "Gro\xDFh\xE4ndler: Ja<br/>"), "" != d && (c += 'Weitere Angaben zum Shop: <br/><div class="c4g_shop_text">' + d + "</div><br/>"));a && (d = a, trim(d), d = d.replace(/\./, "/"), c = c + "<br/>" + ('OSM:    <a href="http://www.openstreetmap.org/' + d + '" target="_blank">Link zur OpenStreetMap</a><br/>'));return c = '<div class="c4g_popup_footer">' + c + "</div>";
}
function fnGetTranslate_Type(b) {
    var a = "";if ("doctors" == b.amenity || "doctor" == b.healthcare) a += "Arzt<br/>";if ("hospital" == b.amenity || "clinic" == b.amenity || "hospital" == b.healthcare || "clinic" == b.healthcare) a = "yes" == b.emergency ? a + "Krankenhaus mit Notaufnahme<br/>" : a + "Krankenhaus<br/>";"dentist" == b.amenity && (a += "Zahnarzt<br/>");if ("pharmacy" == b.amenity || "pharmacy" == b["health_facility:type"]) a += "Apotheke<br/>";if ("physiotherapist" == b.healthcare || "yes" == b["health_speciality:physiotherapy"]) a += "Physiotherapeut<br/>";
    if ("occupational_therapist" == b.healthcare || "yes" == b["health_speciality:occupational_therapy"] || "yes" == b["health_specialty:occupational_therapy"]) a += "Ergotherapeut<br/>";if ("psychotherapist" == b.healthcare || "yes" == b["health_speciality:psychotherapy"]) a += "Psychotherapeut<br/>";"alternative" == b.healthcare && (a += "Alternativ- und Komplement\xE4rmediziner<br/>");"midwife" == b.healthcare && (a += "Hebamme<br/>");if ("speech_therapist" == b.healthcare || "yes" == b["health_speciality:speech_therapy"]) a += "Logop\xE4de<br/>";
    "yes" == b["health_speciality:music_therapy"] && (a += "Musiktherapeut<br/>");"veterinary" == b.amenity && (a += "Tierarzt<br/>");"fire_station" == b.amenity && (a += "Feuerwehrhaus<br/>");"fire_extinguisher" == b.emergency && (a += "Feuerl\xF6scher<br/>");"aed" == b.emergency && (a += "Mobiler Defibrilator<br/>");"defibrillator" == b.emergency && (a += "Mobiler Defibrilator<br/>");"phone" == b.emergency && (a += "Notrufs\xE4ule<br/>");"police" == b.amenity && (a += "Polizeiwache<br/>");"ambulance_station" == b.emergency && (a += "Rettungswache<br/>");
    "technical" == b.emergency_service && (a += "Technisches Hilfswerk<br/>");"water" == b.emergency_service && (a += "Wasserrettungsstation<br/>");"baywatch" == b.waterway && (a += "Wasserwacht<br/>");"air" == b.emergency_service && (a += "Rettungshubschrauber<br/>");"emergency_access_point" == b.highway && (a += "Notfallpunkt<br/>");if ("lifeboat_station" == b.amenity || "lifeboat_station" == b.emergency) a += "Rettungsbootstation<br/>";"life_ring" == b.emergency && (a += "Rettungsring<br/>");"siren" == b.emergency && (a += "Sirene<br/>");"life_ring" == b.amenity && (a += "Rettungsring<br/>");"rescue_station" == b.amenity && (a += "Rettungsstation<br/>");"fire_hydrant" == b.emergency && ("underground" == b["fire_hydrant:type"] ? a += "Unterflurhydrant<br/>" : "pillar" == b["fire_hydrant:type"] ? a += "\xDCberflurhydrant<br/>" : "wall" == b["fire_hydrant:type"] ? a += "Wandhydrant<br/>" : "pond" == b["fire_hydrant:type"] && (a += "Saugstelle<br/>"));"suction_point" == b.emergency && (a += "Saugstelle<br/>");"fire_water_pond" == b.emergency && (a += "L\xF6schteich<br/>");"mountain" == b.emergency_service && (a += "Bergrettungsstation<br/>");"water_tank" == b.emergency && (a += "L\xF6schwassertank<br/>");"container" == b.recycling_type && (a += "Recycling Container<br/>");"recycling" == b.amenity && "yes" == b["recycling:excrement"] || "pump-out" == b["seamark:small_craft_facility:category"] ? a += "Absaugstation<br/>" : "recycling" == b.amenity && (a += "Wertstoffhof<br/>");"yes" == b["diet:pescetarian"] ? a += "pescetarische Gerichte vorhanden<br/>" : "only" == b["diet:pescetarian"] && (a += "nur pescetarische Gerichte<br/>");"yes" == b["diet:vegetarian"] ? a += "vegetarische Gerichte vorhanden<br/>" : "only" == b["diet:vegetarian"] && (a += "nur vegetarische Gerichte<br/>");"yes" == b["diet:lacto_vegetarian"] ? a += "lacto-vegetarische Gerichte vorhanden<br/>" : "only" == b["diet:lacto_vegetarian"] && (a += "nur lacto-vegetarische Gerichte<br/>");"yes" == b["diet:ovo_vegetarian"] ? a += "ovo-vegetarische Gerichte vorhanden<br/>" : "only" == b["diet:ovo_vegetarian"] && (a += "nur ovo-vegetarische Gerichte<br/>");"yes" == b["diet:vegan"] ? a += "vegane Gerichte vorhanden<br/>" : "only" == b["diet:vegan"] && (a += "nur vegane Gerichte<br/>");"yes" == b["diet:fruitarian"] ? a += "frutarische Gerichte vorhanden<br/>" : "only" == b["diet:fruitarian"] && (a += "nur frutarische Gerichte<br/>");"yes" == b["diet:raw"] ? a += "rohk\xF6stliche Gerichte vorhanden<br/>" : "only" == b["diet:raw"] && (a += "nur rohk\xF6stliche Gerichte<br/>");"yes" == b["diet:gluten_free"] ? a += "glutenfreie Gerichte vorhanden<br/>" : "only" == b["diet:gluten_free"] && (a += "nur glutenfreie Gerichte<br/>");"yes" == b["diet:dairy_free"] ? a += "milchfreie Gerichte vorhanden<br/>" : "only" == b["diet:dairy_free"] && (a += "nur milchfreie Gerichte<br/>");"yes" == b["diet:lactose_free"] ? a += "laktosefreie Gerichte vorhanden<br/>" : "only" == b["diet:lactose_free"] && (a += "nur laktosefreie Gerichte<br/>");"yes" == b["diet:halal"] ? a += "Hal\u0101l Gerichte vorhanden<br/>" : "only" == b["diet:halal"] && (a += "nur Hal\u0101l Gerichte<br/>");"yes" == b["diet:kosher"] ? a += "koschere Gerichte vorhanden<br/>" : "only" == b["diet:kosher"] && (a += "nur koschere Gerichte<br/>");"pub" == b.amenity && (a += "Gastst\xE4tte<br/>");"bar" == b.amenity && (a += "Bar<br/>");"yes" == b.frozen_yogurt && (a += "Frozen Yogurt im Angebot<br/>");"yes" == b.slush_ice && (a += "Slush Ice im Angebot<br/>");"yes" == b.cake && (a += "Kuchenteilchen, Geb\xE4ck etc. im Angebot<br/>");"yes" == b.coffee && (a += "Kaffeegetr\xE4nke im Angebot<br/>");"yes" == b.drinks && (a += "Getr\xE4nke im Angebot<br/>");"biergarten" == b.amenity && (a += "Biergarten<br/>");"restaurant" == b.amenity && (a += "Restaurant<br/>");"fast_food" == b.amenity && (a += "Fast Food Restaurant<br/>");if (("cafe" == b.amenity || "coffee_shop" == b.amenity) && "ice_cream" != b.cuisine) a += "Caf\xE9, Bistro<br/>";if ("cafe" == b.amenity && "ice_cream" == b.cuisine || "ice_cream" == b.amenity) a += "Eiscafe<br/>";"alpine_hut" == b.tourism && (a += "Bergh\xFCtte<br/>");"aquarium" == b.tourism && (a += "Aquarium<br/>");"apartment" == b.tourism && (a += "Ferienwohnung<br/>");"attraction" == b.tourism && (a += "Sehensw\xFCrdigkeit<br/>");"artwork" == b.tourism && (a += "Skulptur<br/>");"camp_site" == b.tourism && (a += "Campingplatz<br/>");"caravan_site" == b.tourism && (a += "Wohnmobilstellplatz<br/>");
    "chalet" == b.tourism && (a += "Ferienwohnung /-haus<br/>");"gallery" == b.tourism && (a += "Kunstgalerie<br/>");"guest_house" == b.tourism && (a += "Pension, Gasthaus, Bed & Breakfast<br/>");"hostel" == b.tourism && (a += "Jugendherberge, Hostel<br/>");"hotel" == b.tourism && (a += "Hotel<br/>");"motel" == b.tourism && (a += "Motel<br/>");"museum" == b.tourism && (a += "Museum<br/>");"picnic_site" == b.tourism && (a += "Rast- und Picknickplatz<br/>");"theme_park" == b.tourism && (a += "Freizeit- oder Themenpark<br/>");"viewpoint" == b.tourism && (a += "Aussichtspunkt<br/>");
    "wilderness_hut" == b.tourism && (a += "Schutzh\xFCtte<br/>");"wine_cellar" == b.tourism && (a += "Weinkeller<br/>");"zoo" == b.tourism && (a += "Zoo / Tierpark<br/>", "enclosure" == b.zoo && (a += "mit Wildgehege<br/>"), "petting_zoo" == b.zoo && (a += "mit Streichelzoo<br/>"), "falconry" == b.zoo && (a += "mit Falknerei<br/>"));"trail_riding_station" == b.tourism && (a += "Wanderreitstation<br/>");"fishing" == b.club && (a += "Angelverein<br/>");"sport" == b.club && "fishing" == b.sport && (a += "fishing club<br/>");"amateur_radio" == b.club && (a += "Amateurfunker<br/>");
    "art" == b.club && (a += "Kunstverein<br/>");"astronomy" == b.club && (a += "Astronomieverein<br/>");"automobile" == b.club && (a += "Automobilverein<br/>");"board_games" == b.club && (a += "Brettspielverein<br/>");"card_games" == b.club && (a += "Kartenspielverein<br/>");"charity" == b.club && (a += "Charity-Verein<br/>");"chess" == b.club && (a += "Schachverein<br/>");"cinema" == b.club && (a += "Kinoverein<br/>");"cooking" == b.club && (a += "Kochverein<br/>");"culture" == b.club && (a += "Kulturverein<br/>");"doityourself" == b.club && (a += "doityourself-Verein<br/>");
    "equestrian" == b.club && (a += "Reitverein<br/>");"ethnic" == b.club && (a += "Ethnischer Verein<br/>");"fan" == b.club && (a += "Fanverein<br/>");"freemasonry" == b.club && (a += "Freimaurer-Verein<br/>");"game" == b.club && (a += "Spieleverein<br/>");"history" == b.club && (a += "Historischer-Verein / Verein f\xFCr Geschichte<br/>");"hunting" == b.club && (a += "Jagdverein<br/>");"linux" == b.club && (a += "Linux-Verein<br/>");"motorcycle" == b.club && (a += "Motorradverein<br/>");"music" == b.club && (a += "Musikverein<br/>");"nature" == b.club && (a += "Naturverein<br/>");
    "nudism" == b.club && (a += "Nudisten-Verein / FKK-Verein<br/>");"photography" == b.club && (a += "Fotografieverein<br/>");"politics" == b.club && (a += "Verein f\xFCr Politik<br/>");"relegion" == b.club && (a += "Politischer-Verein<br/>");"scout" == b.club && (a += "Pfadfinderin/Pfadfinder<br/>");"smoke" == b.club && (a += "Raucherverein<br/>");"sport" == b.club && (a += "Sportverein<br/>");"theatre" == b.club && (a += "Theaterverein<br/>");"veterans" == b.club && (a += "Veteranen<br/>");"amusement_arcade" == b.leisure && (a += "Spielhalle<br/>");"beach_resort" == b.leisure && (a += "Standbad<br/>");"bird_hide" == b.leisure && (a += "Vogelbeobachtungspunkt<br/>");"common" == b.leisure && (a += "\xD6ffentliche Gr\xFCnfl\xE4chen<br/>");"club" == b.leisure && (a += "Club/Verein<br/>");"dance" == b.leisure && (a += "Tanzen<br/>");"dog_park" == b.leisure && (a += "Hundepark<br/>");"firepit" == b.leisure && (a += "Feuerstelle<br/>");"fishing" == b.leisure && (a += "Angelstelle<br/>");"garden" == b.leisure && (a += "Garten<br/>");"golf_course" == b.leisure && (a += "Golfplatz<br/>");"hackerspace" == b.leisure && (a += "Ort f\xFCr Hackertreffen<br/>");
    "horse_riding" == b.leisure && (a += "Reitstall / Reiterhof<br/>");"ice_rink" == b.leisure && (a += "Eislaufbahn<br/>");"nature_reserve" == b.leisure && (a += "Naturschutzgebiet (NSG)<br/>");"park" == b.leisure && (a += "Gr\xFCnanlage<br/>");"miniature_golf" == b.leisure && (a += "Minigolf<br/>");"pitch" == b.leisure && (a += "Spielfeld<br/>");"pitch" == b.leisure && "yes" == b.building && (a += "Sporthalle<br/>");"playground" == b.leisure && "yes" == b.building ? a += "Spielscheune<br/>" : "playground" == b.leisure && (a += "Spielplatz<br/>");"social_club" == b.leisure && (a += "Treffpunkt f\xFCr Freizeitgruppen<br/>");"spa" == b.leisure && (a += "Heilbad / Spa<br/>");"sports_centre" == b.leisure && (a += "Sportzentrum<br/>");"climbing_adventure" == b.sport && (a += "Seilgarten<br/>");"stadium" == b.leisure && (a += "Stadion<br/>");"swimming_pool" == b.leisure && (a += "Schwimmbecken<br/>");"track" == b.leisure && (a += "Rennbahn<br/>");"water_park" == b.leisure && (a += "Wasserpark<br/>");"wildlife_hide" == b.leisure && (a += "Wildbeobachtungspunkt<br/>");"adult_gaming_centre" == b.leisure && (a += "Spielothek<br/>");
    "bowling_alley" == b.leisure && "10pin" == b.sport && (a += "Bowlingcenter<br/>");"bowling_alley" == b.leisure && "9pin" == b.sport && (a += "Kegelbahn<br/>");if ("karting" == b.sport || "motor" == b.sport) a += "Kart-/Motorsport<br/>";if ("darts" == b.sport || "dart" == b.sport) a += "Darts<br/>";if (b["piste:type"]) switch (b["piste:type"]) {case "skitour":
            a += "Piste f\xFCr Skitouren<br/>";break;case "downhill":
            a += "Skiabfahrt<br/>";break;case "sled":
            a += "Rodelberg / Rodelstrecke<br/>";break;case "nordic":
            a += "Langlauf Piste<br/>";break;case "hike":
            a += "Schneeschuh- und Winterwanderweg<br/>";break;case "snow_park":
            a += "Snow-Park<br/>";}if (b.sport) switch (b.sport) {case "surfing":
            a += "Surfen<br/>";break;case "kitesurfing":
            a += "Kitesurfen<br/>";break;case "water_ski":
            a += "Wasserski<br/>";}if (b.aerialway) switch (b.aerialway) {case "cable_bar":
            a += "Lift mit Gondeln<br/>";break;case "gondola":
            a += "Lift mit Gondeln<br/>";break;case "chair_lift":
            a += "Sessellift<br/>";break;case "mixed_lift":
            a += "Lift mit Sesseln und Gondeln<br/>";break;case "drag_lift":
            a += "Skilift<br/>";
            break;case "t-bar":
            a += "T-Lift<br/>";break;case "t-bar":
            a += "T-Lift (einseitig)<br/>";break;case "platter":
            a += "Lift mit Sitzscheibe<br/>";break;case "rope_tow":
            a += "B\xFCgellift<br/>";break;case "magic_carpet":
            a += "Bef\xF6rderungsband<br/>";break;default:
            a += "unbekannt";}"mosque" == b.building && (a += "Moschee<br/>");"synagogue" == b.building && (a += "Synagoge<br/>");"apartments" == b.building && (a += "Wohnung<br/>");"farm" == b.building && (a += "Farm<br/>");"hotel" == b.building && (a += "Hotel<br/>");"house" == b.building && (a += "Haus<br/>");"detached" == b.building && (a += "Freistehend<br/>");"residential" == b.building && (a += "Residenz<br/>");if ("domitory" == b.building || "residential plus" == b.building) a += "Wohnheim<br/>";"terrace" == b.building && (a += "Terrasse<br/>");"houseboat" == b.building && (a += "Hausboot<br/>");"bungalow" == b.building && (a += "Bungalow<br/>");"static_caravan" == b.building && (a += "Stehender Wohnwagen<br/>");"commercial" == b.building && (a += "Kommerziell<br/>");"retail" == b.building && (a += "Verkauf<br/>");"warehouse" == b.building && (a += "Lagerhaus<br/>");"bakehouse" == b.building && (a += "Backstube<br/>");"temple" == b.building && (a += "Tempel<br/>");"shrine" == b.building && (a += "Schrein<br/>");"civic" == b.building && (a += "B\xFCrgerlich<br/>");"stadium" == b.building && (a += "Stadium<br/>");"train_station" == b.building && (a += "Bahnhof<br/>");"university" == b.building && (a += "Universit\xE4t<br/>");"public" == b.building && (a += "\xD6ffentliches Geb\xE4ude<br/>");"bridge" == b.building && (a += "Br\xFCcke<br/>");"bunker" == b.building && (a += "Bunker<br/>");"cabin" == b.building && (a += "H\xFCtte<br/>");"conservatory" == b.building && (a += "Wintergarten<br/>");"construction" == b.building && (a += "Im Bau<br/>");"garage" == b.building && (a += "Garage<br/>");"garages" == b.building && (a += "Garagen<br/>");"greenhouse" == b.building && (a += "Gew\xE4chshaus<br/>");"hangar" == b.building && (a += "Hangar<br/>");"hut" == b.building && (a += "H\xFCtte<br/>");"pavillion" == b.building && (a += "Pavillion<br/>");"roof" == b.building && (a += "\xDCberdacht<br/>");"shed" == b.building && (a += "Gartenh\xE4uschen<br/>");
    "transformer_tower" == b.building && (a += "Transformator Turm<br/>");"service" == b.building && (a += "Service-Stelle<br/>");"kiosk" == b.building && (a += "Kiosk<br/>");"carport" == b.building && (a += "Carport<br/>");"ruins" == b.building && (a += "Ruinen<br/>");"gambling" == b.amenity && (a += "Spielhalle<br/>");"library" == b.amenity && (a += "B\xFCcherei<br/>");"fountain" == b.amenity && (a += "Brunnen<br/>");"attraction" == b.amenity && (a += "Sehensw\xFCrdigkeit<br/>");if ("social_centre" == b.amenity || "club" == b.amenity) a += "Verein / Club<br/>";
    "townhall" == b.amenity && (a += "Rathaus / B\xFCrgerhaus<br/>");"bench" == b.amenity && (a += "Parkbank<br/>");if ("grave_yard" == b.amenity || "cemetery" == b.landuse) a += "Friedhof<br/>";"post_box" == b.amenity && (a += "Briefkasten<br/>");"post_office" == b.amenity && (a += "Postamt<br/>");"telephone" == b.amenity && (a += "Telefon<br/>");"atm" == b.amenity && (a += "Geldautomat<br/>");"bank" == b.amenity && (a += "Bankfiliale<br/>");"toilets" == b.amenity && "yes" == b.diaper ? a += "\xD6ffentliche Toilette mit Wickeltisch<br/>" : "toilets" == b.amenity && (a += "\xD6ffentliche Toilette<br/>");"school" == b.amenity && "1" == b["isced:level"] ? a += "Grundschule<br/>" : "school" == b.amenity && "2" == b["isced:level"] ? a += "Sekundarstufe I<br/>" : "school" == b.amenity && "3" == b["isced:level"] ? a += "Sekundarstufe II<br/>" : "school" == b.amenity && (a += "Schule<br/>");"kindergarten" == b.amenity && (a += "Kindergarten<br/>");"internet_cafe" == b.amenity && (a += "Internetcaf\xE9<br/>");"daycare" == b.amenity && (a += "Kinder- und Jugendtagesst\xE4tte<br/>");"childcare" == b.amenity && (a += "Kinder- und Jugendtagesst\xE4tte<br/>");
    "university" == b.amenity && (a += "Universit\xE4t/Hochschule<br/>");"college" == b.amenity && (a += "Universit\xE4t/Hochschule<br/>");"shelter" == b.amenity && (a += "Unterstand<br/>");"bbq" == b.amenity && (a += "Grillplatz<br/>");"nightclub" == b.amenity && (a += "Diskothek / Nachtklub<br/>");"bicycle_parking" == b.amenity && (a += "Fahrradparkplatz<br/>");"bicycle_rental" == b.amenity && (a += "Fahrradverleih<br/>");"boat_sharing" == b.amenity && (a += "Bootsverleih<br/>");"car_sharing" == b.amenity && (a += "Car-Sharing<br/>");"cinema" == b.amenity && (a += "Kino<br/>");"swimming_pool" == b.amenity && (a += "Schwimmbad<br/>");if ("embassy" == b.amenity || "embassy" == b.diplomatic) a += "Botschaft<br/>";"embassy" == b.amenity && "consulate" == b.diplomatic && (a += "Konsulate<br/>");"embassy" == b.amenity && "consulate_general" == b.diplomatic && (a += "Generalkonsulate<br/>");"embassy" == b.amenity && "honorary_consulate" == b.diplomatic && (a += "Honorarkonsulate<br/>");"embassy" == b.amenity && "permanent_mission" == b.diplomatic && (a += "St\xE4ndige Vertretung<br/>");"embassy" == b.amenity && "delegation" == b.diplomatic && (a += "Delegation<br/>");"embassy" == b.amenity && "high_commission" == b.diplomatic && (a += "Hochkommissariat<br/>");"Barfusspfad" == b.amenity && (a += "Barfu\xDFpfad<br/>");"casino" == b.amenity && (a += "Casino<br/>");"spa" == b.amenity && (a += "Heilbad / Spa<br/>");"stables" == b.amenity && (a += "Reitstall / Reiterhof<br/>");"watering_place" == b.amenity && (a += "Wasserstelle / Tr\xE4nke<br/>");"yes" == b.watering_place && (a += "Wasserstelle / Tr\xE4nke<br/>");"water_point" == b.amenity && (a += "gro\xDFe Trinkwasserstelle<br/>");
    "taxi" == b.amenity && (a += "Taxi<br/>");"car_wash" == b.amenity && (a += "Autowaschanlage<br/>");"brothel" == b.amenity && (a += "Bordell, Freudenhaus<br/>");"stripclub" == b.amenity && (a += "Stripclub<br/>");"swingerclub" == b.amenity && (a += "Swingerclub<br/>");"planetarium" == b.amenity && (a += "Planetarium<br/>");"courthouse" == b.amenity && (a += "Gericht<br/>");"crematorium" == b.amenity && (a += "Krematorium<br/>");if ("crypt" == b.amenity || "crypt" == b.building) a += "Krypta<br/>";"hunting_stand" == b.amenity && (a += "Hochsitz<br/>");"photo_booth" == b.amenity && (a += "Fotoautomat<br/>");"prison" == b.amenity && (a += "Gef\xE4ngnis<br/>");"ranger_station" == b.amenity && (a += "National Park Ranger Station<br/>");"register_office" == b.amenity && (a += "Standesamt<br/>");"marketplace" == b.amenity && (a += "Marktplatz / Wochenmarkt<br/>");"solarium" == b.amenity && (a += "Solarium<br/>");"sauna" == b.amenity && (a += "Sauna<br/>");"shower" == b.amenity && (a += "\xF6ffentliche Dusche<br/>");if ("waste_disposal" == b.amenity && (a += "M\xFCllentsorgung auf \xF6ffentlichen Pl\xE4tzen<br/>", b.waste)) switch (a += "Art: ", b.waste) {case "trash":
            a += "Allgemeiner M\xFCll<br/>";break;case "oil":
            a += "Oil<br/>";break;case "drugs":
            a += "Pharmazeutisch<br/>";break;case "organic":
            a += "Kompost<br/>";break;case "plastic":
            a += "Plastik<br/>";break;case "rubble":
            a += "Schutt<br/>";break;case "cigarettes":
            a += "Zigaretten<br/>";break;default:
            a += "Allgemeiner M\xFCll<br/>";}if ("waste_basket" == b.amenity || "dog_excrement" == b.waste) a += "Hunde-Code M\xFCllcontainer<br/>";if ("scout_camp" == b.amenity || "scout_hut" == b.amenity || "scout_hall" == b.amenity) a += "Pfadfinderheim<br/>";"ferry_terminal" == b.amenity && (a += "F\xE4hrhafen<br/>");"bureau_de_change" == b.amenity && (a += "Geldwechselstube<br/>");"youth_club" == b.amenity && (a += "Jugendzentrum<br/>");"festival_grounds" == b.amenity && (a += "Festivalgel\xE4nde<br/>");if ("yes" == b.openfire || "yes" == b.fireplace) a += "Offene Feuerstelle<br/>";if ("vending_machine" == b.amenity) if (b.vending) switch (b.vending) {case "admission_tickets":
            a += "Eintrittskartenautomat<br/>";break;case "animal_feed":
            a += "Tierfutterautomat<br/>";
            break;case "bicycle_tube":
            a += "Fahrradschlauchautomat<br/>";break;case "books":
            a += "B\xFCcherautomat<br/>";break;case "candles":
            a += "Kerzenautomat<br/>";break;case "cigarettes":
            a += "Zigarettenautomat<br/>";break;case "chemist":
            a += "Apotheken/Drogerie Automat<br/>";break;case "condoms":
            a += "Kondomautomat<br/>";break;case "drinks":
            a += "Getr\xE4nkeautomat<br/>";break;case "electronics":
            a += "Automat f\xFCr Elektro-Zubeh\xF6r<br/>";break;case "elongated_coin":
            a += "M\xFCnzpr\xE4gungsautomat<br/>";break;
        case "excrement_bags":
            a += "Hundet\xFCtenspender<br/>";break;case "feminine_hygiene":
            a += "Automat f\xFCr Damenhygieneprodukte<br/>";break;case "first_aid":
            a += "Erste-Hilfe-Automat<br/>";break;case "fishing_tackle":
            a += "Automat f\xFCr Angelzubeh\xF6r<br/>";break;case "fishing_bait":
            a += "Angelk\xF6derautomat<br/>";break;case "flowers":
            a += "Blumenautomat<br/>";break;case "food":
            a += "Lebensmittel-Automat<br/>";break;case "ice_cubes":
            a += "Eisw\xFCrfelautomat<br/>";break;case "ice_cream":
            a += "Automat f\xFCr Speiseeis<br/>";
            break;case "ink_cartridges":
            a += "Druckerpatronen Automat<br/>";break;case "laundry_detergent":
            a += "Waschmittelautomat<br/>";break;case "public_transport_tickets":
            a += "Fahrkartenautomat<br/>";break;case "newspaper":
            a += "Zeitungsautomat<br/>";break;case "parcel_pickup":
            a += "Packstation<br/>";break;case "parcel_mail_in":
            a += "Paketstation<br/>";break;case "parking_tickets":
            a += "Parkscheinautomat<br/>";break;case "photos":
            a += "Fotoautomat<br/>";break;case "sex_toys":
            a += "Automat f\xFCr Sexspielzeug<br/>";break;
        case "SIM_cards":
            a += "Automat f\xFCr SIM Karten<br/>";break;case "stamps":
            a += "Briefmarkenautomat<br/>";break;case "sweets":
            a += "S\xFC\xDFigkeitenautomat<br/>";break;case "syringes":
            a += "Spritzenautomat<br/>";break;case "toll":
            a += "Maut-Automat<br/>";break;case "toys":
            a += "Spielzeugautomat<br/>";break;case "umbrellas":
            a += "Regenschirmautomat<br/>";break;default:
            a += "Verkaufsautomat<br/>";} else a += "Verkaufsautomat<br/>";"arts_centre" == b.amenity && (a += "Kulturzentrum<br/>");"artwork" == b.amenity && (a += "Kunstwerk / Kunstobjekt<br/>");
    "museum" == b.amenity && (a += "Museum<br/>");"theatre" == b.amenity && (a += "Theater<br/>");"cathedral" == b.building && (a += "Kathedrale<br/>");"church" == b.building && (a += "Kirche<br/>");"chapel" == b.building && (a += "Kapelle<br/>");"place_of_worship" == b.amenity && (a += "Kirche / Kultst\xE4tte<br/>");"village" == b.abandoned && (a += "Verlassene Stadt<br/>");"theme_park" == b["abandoned:tourism"] && (a += "Verlassener Vergn\xFCgungspark<br/>");"prison_camp" == b["abandoned:amenity"] && "concentration_camp" == ["concentration_camp"] && (a += "KZ Gedenkst\xE4tte<br/>");"yes" == b.abandoned && "bunker" == b.military && (a += "Verlassene Bunkeranlage<br/>");"yes" == b.abandoned && "barracks" == b.military && (a += "Verlassene Milit\xE4rbaracken<br/>");"yes" == b.abandoned && "airfield" == b.military && (a += "Verlassene Milit\xE4rflugplatz<br/>");"monastery" == b.historic && (a += "Historisches Kloster<br/>");"monastery" == b.amenity && (a += "Kloster<br/>");"monastery" == b.building && (a += "Kloster<br/>");"manor" == b.historic && (a += "Gutshaus / Herrenhaus<br/>");"boundary_stone" == b.historic && (a += "Historischer Grenzstein<br/>");"milestone" == b.historic && (a += "Historischer Meilenstein<br/>");"monument" == b.historic && (a += "Monument<br/>");"palace" == b.historic && (a += "Palast<br/>");"mine" == b.historic && (a += "Verlassene Mine<br/>");"ruins" == b.historic && (a += "Ruine<br/>");"harbour" == b.historic_usage && (a += "historischer Hafen<br/>");"rune_stone" == b.historic && (a += "Runenstein<br/>");"battlefield" == b.historic && (a += "Schlachtfeld<br/>");"blacksmith" == b.historic && (a += "Historische Schmiede<br/>");
    if ("tree_shrine" == b.historic || "wayside_shrine" == b.historic) a += "Schrein / Bildstock<br/>";"city_gate" == b.historic && (a += "Stadttor<br/>");"wayside_cross" == b.historic && (a += "Wegkreuz<br/>");"monument" == b.amenity && (a += "Denkmal<br/>");"memorial" == b.historic && (a += "Denkmal<br/>");"optical_telegraph" == b.historic && (a += "Optischer Telegraph<br/>");if ("castle" == b.historic) if (b.castle_type) switch (b.castle_type) {case "defensive":
            a += "Burg<br/>";break;case "palace":
            a += "Palast<br/>";break;case "stately":
            a += "Schloss<br/>";
            break;case "manor":
            a += "Herrenhaus<br/>";break;case "fortress":
            a += "Festung<br/>";break;case "castrum":
            a += "R\xF6misches Milit\xE4rlager<br/>";break;case "shiro":
            a += "Shiro<br/>";break;case "kremlin":
            a += "Kreml<br/>";break;default:
            a += "Schloss / Burg<br/>";} else a += "Schloss / Burg<br/>";"archaeological_site" == b.historic && (a += "Arch\xE4ologische Fundst\xE4tte<br/>");if ("tomb" == b.historic) if (b.tomb) switch (b.tomb) {case "tumulus":
            a += "H\xFCgelgrab<br/>";break;case "rock-cut":
            a += "Felsgrab<br/>";break;
        case "hypogeum":
            a += "Hypog\xE4um<br/>";break;case "war_grave":
            a += "Soldatenfriedhof<br/>";break;case "mausoleum":
            a += "Mausoleum<br/>";break;case "columbarium":
            a += "Kolumbarium<br/>";break;case "crypt":
            a += "Krypta<br/>";break;case "pyramid":
            a += "Pyramide<br/>";break;case "sarcophagus":
            a += "Sarkophag<br/>";break;case "vault":
            a += "Gruft<br/>";break;case "tombstone":
            a += "Grabstein<br/>";break;default:
            a += "Historische Grabst\xE4tte<br/>";} else a += "Historische Grabst\xE4tte<br/>";"accountant" == b.office && (a += "Buchhalter / Wirtschaftpr\xFCfer<br/>");"administrative" == b.office && (a += "Kreis- bzw. Gemeindebeh\xF6rde<br/>");"architect" == b.office && (a += "Architekturb\xFCro<br/>");"association" == b.office && (a += "Verein, Vereinigung bzw. Interessengemeinschaft<br/>");"physician" == b.office && (a += "Arzt<br/>");"camping" == b.office && (a += "Rezeption Campingplatz oder B\xFCro Freizeitpark<br/>");"company" == b.office && (a += "Sitz einer privaten Firma<br/>");"educational_institution" == b.office && (a += "Bildungseinrichtung<br/>");
    "employment_agency" == b.office && (a += "Job-Center / Arbeitsvermittlung<br/>");"estate_agent" == b.office && (a += "Immobilienmakler / Wohnungsbaugenossenschaft<br/>");"forestry" == b.office && (a += "Forstamt<br/>");"foundation" == b.office && (a += "Gesch\xE4ftsstelle einer Stiftung<br/>");"government" == b.office && (a += "Beh\xF6rde / Regierungseinrichtung<br/>");"guide" == b.office && (a += "B\xFCro f\xFCr Touristenf\xFChrungen<br/>");"insurance" == b.office && (a += "Versicherungsb\xFCro<br/>");"it" == b.office && (a += "IT-Unternehmen<br/>");
    "lawyer" == b.office && (a += "Rechtsanwaltskanzlei<br/>");"newspaper" == b.office && (a += "Zeitungsredaktion<br/>");"ngo" == b.office && (a += "B\xFCro einer Nichtregierungsorganisation<br/>");"notary" == b.office && (a += "Notar<br/>");"political_party" == b.office && (a += "B\xFCro einer politischen Partei<br/>");"quango" == b.office && (a += "B\xFCro einer halbstaatlichen Organisation<br/>");"realtor" == b.office && (a += "Immobilienmakler / Wohnungsbaugenossenschaft<br/>");"real_estate_agent" == b.office && (a += "Immobilienmakler / Wohnungsbaugenossenschaft<br/>");
    "register" == b.office && (a += "Standesamt<br/>");"religion" == b.office && (a += "B\xFCro einer religi\xF6sen Instanz<br/>");"research" == b.office && (a += "Forschungsunternehmen oder -institut<br/>");"tax" == b.office && (a += "Finanzamt<br/>");"telecommunication" == b.office && (a += "Telekommunikationsfirma<br/>");"travel_agent" == b.office && (a += "Sitz eines Reiseunternehmens<br/>");"water_utility" == b.office && (a += "Wasserwirtschaftsamt<br/>");"therapist" == b.office && (a += "Therapeut<br/>");"city" == b.place && (a += "Gro\xDFstadt<br/>");
    "town" == b.place && (a += "Stadt/Kleinstadt<br/>");"village" == b.place && (a += "Dorf<br/>");"continent" == b.place && (a += "Kontinent<br/>");"ocean" == b.place && (a += "Ozean</br>");"track" == b.highway && (a += "Forst-, Wald und Feldweg<br/>");"raceway" == b.highway && (a += "Motorsportbahn<br/>");"designated" == b.bicycle && (a += "Radweg<br/>");"path" == b.highway && (a += "Fu\xDFweg<br/>");"parking" == b.amenity && (a += "Parkplatz<br/>");"services" == b.highway && (a += "Rastst\xE4tte<br/>");"rest_area" == b.highway && (a += "Rastplatz<br/>");"turning_circle" == b.highway && (a += "Wendeplatz/Wendehammer<br/>");"service" == b.highway && (a += "Zufahrtsstra\xDFe / Erschlie\xDFungsweg<br/>");"motorway" == b.highway && (a += "Autobahn<br/>");"motorway_junction" == b.highway && (a += "Autobahnauffahrt<br/>");"bridleway" == b.highway && (a += "Reitweg<br/>");"yes" == b.oneway && (a += "Einbahnstra\xDFe<br/>");"yes" == b.park_ride && (a += "Park and Ride<br/>");"unknown" == b.park_ride && (a += "Park and Ride<br/>");"bus" == b.park_ride && (a += "Park and Ride<br/>");"tram" == b.park_ride && (a += "Park and Ride<br/>");
    "bus_stop" == b.highway && (a += "Bushaltestelle<br/>");"pedestrian" == b.highway && (a += "Fu\xDFg\xE4ngerzone<br/>");"street_lamp" == b.highway && (a += "Strassenlaterne<br/>");"traffic_signals" == b.highway && (a += "Ampel<br/>");"traffic_signals" == b.crossing && (a += "Fu\xDFg\xE4ngerampel<br/>");"speed_camera" == b.highway && (a += "Blitzer<br/>");"yes" == b.traffic_calming && (ret += "Verkehrsberuhigter Bereich</br>");"bump" == b.traffic_calming && (a += "Kurze Bodenwelle</br>");"chicane" == b.traffic_calming && (a += "Zu umfahrendenes Hinderniss</br>");
    "choker" == b.traffic_calming && (a += "Fahrbahnverengung, zu umfahrende Hindernisse m\xF6glich</br>");"cushion" == b.traffic_calming && (a += "Bodenwelle mit L\xFCcken aus mehreren rechteckigen Huckeln</br>");"hump" == b.traffic_calming && (a += "vergleichbare Bodenwelle mit etwar einer L\xE4nge von 2-4M</br>");"island" == b.traffic_calming && (a += "Eine Verkehrsinsel</br>");"rumble_strip" == b.traffic_calming && (a += "Holperstreifen</br>");"table" == b.traffic_calming && (a += "lange Bodenwellen mit flachen Mittelst\xFCck</br>");
    "buoy_cardinal" == b["seamark:type"] && (a += "Kardinalstonne<br/>");"buoy_lateral" == b["seamark:type"] && (a += "Lateraltonne<br/>");"buoy_isolated_danger" == b["seamark:type"] && (a += "Gefahrentonne<br/>");"perch" == b["seamark:beacon_lateral:shape"] && (a += "Pricke<br/>");"fuel" == b.amenity && "fuel_station" == b["seamark:small_craft_facility:category"] ? a += "Schiffstankstelle<br/>" : "fuel" == b.amenity && (a += "Tankstelle<br/>");if ("charging_station" == b.amenity) {
        var a = a + "Ladestation / Stromtankstelle<br/>",
            c = b.voltage;if (b.car) {
            switch (b.car) {case "yes":
                    a += "F\xFCr Autos: Ja";break;case "no":
                    a += "F\xFCr Autos: Nein";break;default:
                    a += "F\xFCr Autos: Unbekannt";}a += "<br/>";
        } else a += "F\xFCr Autos: Unbekannt<br/>";if (b.bicycle) {
            switch (b.bicycle) {case "yes":
                    a += "F\xFCr E-Bike: Ja";break;case "no":
                    a += "F\xFCr E-Bike: Nein";break;default:
                    a += "F\xFCr E-Bike: Unbekannt";}a += "<br/>";
        } else a += "F\xFCr E-Bike: Unbekannt<br/>";"no" == b["socket:schuko"] && (a += "Stecker Schuko: Nein<br/>");"yes" == b["socket:schuko"] && (a += "Stecker Schuko: Ja<br/>");"no" == b["socket:cee_blue"] && (a += "Stecker CEE Blau: Nein<br/>");"yes" == b["socket:cee_blue"] && (a += "Stecker CEE Blau: Ja<br/>");"no" == b["socket:cee_red_16a"] && (a += "Stecker CEE Rot 16a: Nein<br/>");"yes" == b["socket:cee_red_16a"] && (a += "Stecker CEE Rot 16a: Ja<br/>");"no" == b["socket:cee_red_32a"] && (a += "Stecker CEE Rot 32a: Nein<br/>");"yes" == b["socket:cee_red_32a"] && (a += "Stecker CEE Rot 32a: Ja<br/>");"no" == b["socket:cee_red_64a"] && (a += "Stecker CEE Rot 64a: Nein<br/>");"yes" == b["socket:cee_red_64a"] && (a += "Stecker CEE Rot 64a: Ja<br/>");
        "no" == b["socket:cee_red_125a"] && (a += "Stecker CEE Rot 125a: Nein<br/>");"yes" == b["socket:cee_red_125a"] && (a += "Stecker CEE Rot 125a: Ja<br/>");"no" == b["socket:nema_5_15"] && (a += "Stecker Nema 5 15: Nein<br/>");"yes" == b["socket:nema_5_15"] && (a += "Stecker Nema 5 15: Ja<br/>");"no" == b["socket:nema_5_20"] && (a += "Stecker Nema 5 20: Nein<br/>");"yes" == b["socket:nema_5_20"] && (a += "Stecker Nema 5 20: Ja<br/>");"no" == b["socket:nema_14_30"] && (a += "Stecker Nema 14 30: Nein<br/>");"yes" == b["socket:nema_14_30"] && (a += "Stecker Nema 14 30: Ja<br/>");"Nein" == b["socket:nema_14_50"] && (a += "Stecker Nema 14  50: Nein<br/>");"yes" == b["socket:nema_14_50"] && (a += "Stecker Nema 14 50: Ja<br/>");"nein" == b["socket:bs1363"] && (a += "Stecker BS 1363: Nein<br/>");"yes" == b["socket:bs1363"] && (a += "Stecker BS 1363: Ja<br/>");"no" == b["socket:type1"] && (a += "Stecker Typ 1:Nein<br/>");"yes" == b["socket:type1"] && (a += "Stecker Typ 1: Ja<br/>");"no" == b["socket:type1_combo"] && (a += "Stecker Typ 1 Kombo: Nein<br/>");"yes" == b["socket:type1_combo"] && (a += "Stecker Typ 1 Kombo: Ja<br/>");"Nein" == b["socket:type2"] && (a += "Stecker Typ 2: Nein<br/>");"yes" == b["socket:type2"] && (a += "Stecker Typ 2: Ja<br/>");"no" == b["socket:type2_combo"] && (a += "Stecker Typ 2 Kombo: Nein<br/>");"yes" == b["socket:type2_combo"] && (a += "Stecker Typ 2 Kombo: Ja<br/>");"no" == b["socket:type3"] && (a += "Stecker Typ: Nein<br/>");"yes" == b["socket:type3"] && (a += "Stecker Typ 3: Ja<br/>");"no" == b["socket:chademo"] && (a += "Stecker CHAdeMO: Nein<br/>");"yes" == b["socket:chademo"] && (a += "Stecker CHAdeMO: Ja<br/>");
        "no" == b["socket:magne_charge"] && (a += "Stecker Magne : Nein<br/>");"yes" == b["socket:magne_charge"] && (a += "Stecker Magne : Ja<br/>");"no" == b["socket:tesla_standard"] && (a += "Stecker Tesla Standard: Nein<br/>");"yes" == b["socket:tesla_standard"] && (a += "Stecker Tesla Standard: Nein<br/>");"no" == b["socket:tesla_supercharge"] && (a += "Stecker Tesla Schnellladestation: Nein<br/>");"yes" == b["socket:tesla_supercharge"] && (a += "Stecker Tesla Schnellladestation: Ja<br/>");"no" == b["socket:tesla_roadster"] && (a += "Stecker Tesla Roadster: Nein<br/>");
        "yes" == b["socket:tesla_roadster"] && (a += "Stecker Tesla Roadster: Ja<br/>");b["socket:schuko"] && (a += "Stecker Schuko: " + b["socket:schuko"] + "<br/>");b["socket:cee_blue"] && (a += "Stecker CEE Blau: " + b["socket:cee_blue"] + "<br/>");b["socket:cee_red_16a"] && (a += "Stecker CEE Rot 16a: " + b["socket:cee_red_16a"] + "<br/>");b["socket:cee_red_32a"] && (a += "Stecker CEE Rot 32a: " + b["socket:cee_red_32a"] + "<br/>");b["socket:cee_red_64a"] && (a += "Stecker CEE Rot 64a: " + b["socket:cee_red_64a"] + "<br/>");b["socket:cee_red_125a"] && (a += "Stecker CEE Rot 125a: " + b["socket:cee_red_125a"] + "<br/>");b["socket:nema_5_15"] && (a += "Stecker Nema 5 15: " + b["socket:nema_5_15"] + "<br/>");b["socket:nema_5_20"] && (a += "Stecker Nema 5 20: " + b["socket:nema_5_20"] + "<br/>");b["socket:nema_14_30"] && (a += "Stecker Nema 14 30: " + b["socket:nema_14_30"] + "<br/>");b["socket:nema_14_50"] && (a += "Stecker Nema 14 50: " + b["socket:nema_14_50"] + "<br/>");b["socket:bs1363"] && (a += "Stecker BS 1363: " + b["socket:bs1363"] + "<br/>");b["socket:type1"] && (a += "Stecker Typ 1: " + b["socket:type1"] + "<br/>");b["socket:type1_combo"] && (a += "Stecker Typ 1 Kombo: " + b["socket:schuko"] + "<br/>");b["socket:type2"] && (a += "Stecker Typ 2: " + b["socket:type2"] + "<br/>");b["socket:type2_combo"] && (a += "Stecker Typ 2 Kombo: " + b["socket:type2_combo"] + "<br/>");b["socket:type3"] && (a += "Stecker Typ 3: " + b["socket:type3"] + "<br/>");b["socket:chademo"] && (a += "Stecker CHAdeMO: " + b["socket:chademo"] + "<br/>");b["socket:magne_charge"] && (a += "Stecker Magne : " + b["socket:magne_charge"] + "<br/>");b["socket:tesla_standard"] && (a += "Stecker Tesla Standard: " + b["socket:tesla_standard"] + "<br/>");b["socket:tesla_supercharge"] && (a += "Stecker Tesla Schnellladestation: " + b["socket:tesla_supercharge"] + "<br/>");b["socket:tesla_roadster"] && (a += "Stecker Tesla Roadster: " + b["socket:tesla_roadster"] + "<br/>");a += "<br/>";b.voltage && (a += "Volt: " + c + "<br/>");
    }"yes" == b.tunnel && (a += "Tunnel<br/>");if (b.bridge) switch (a += "Br\xFCcken-Typ: ", b.bridge) {case "swing":
            a += "Drehbr\xFCcke";break;case "aqueduct":
            a += "Historische Wasserpipeline";break;
        case "bascule":
            a += "Klapp bzw. Wippbr\xFCcke";break;case "boardwalk":
            a += "Bohlenweg";break;case "cantilever":
            a += "Auslegerbr\xFCcke";break;case "covered":
            a += "gedeckte Br\xFCcke";break;case "drawbridge":
            a += "Klappbr\xFCcke";break;case "humpback":
            a += "Drehbr\xFCcke";break;case "lift":
            a += "Hubbr\xFCcke";break;case "low_water_crossing":
            a += "Irische Br\xFCcke";break;case "moveable":
            a += "Bewegliche Br\xFCcken";break;case "pontoon":
            a += "Schwimmbr\xFCcke";break;case "suspension":
            a += "H\xE4ngebr\xFCcke";
            break;case "trestle":
            a += "Trestle-Br\xFCcke";break;case "viaduct":
            a += "Viadukt";}if (b["bridge:movable"]) switch (b["bridge:movable"]) {case "swing":
            a += "Drehbr\xFCcke";break;case "bascule":
            a += "Klapp bzw. Wippbr\xFCcke";break;case "drawbridge":
            a += "Klappbr\xFCcke";break;case "lift":
            a += "Hubbr\xFCcke";break;case "submersible":
            a += "Senkbr\xFCcke";break;case "transporter":
            a += "Schwebef\xE4hre";break;case "retractable":
            a += "Schubbr\xFCcke";}if ("nursing_home" == b.amenity || "retirement_home" == b.amenity) a += "Seniorenheim / Pflegeheim<br/>";"social_facility" == b.amenity && (a += "Allg. soziale Einrichtung<br/>");if (b.social_facility) {
        "group_home" == b.social_facility && "senior" == b["social_facility:for"] && (a += "Seniorenheim<br/>");"assisted_living" == b.social_facility && (a += "Betreutes Wohnen<br/>");"outreach" == b.social_facility && (a += "Beratungsstelle<br/>");"workshop" == b.social_facility && (a += "soziale Werkstatt<br/>");if ("ambulatory_care" == b.social_facility || "healthcare" == b.social_facility) a += "Ambulanter Pflegedienst<br/>";
        "shelter" == b.social_facility && "senior" == b["social_facility:for"] && (a += "Tages- u. Kurzzeitpflege<br/>");"shelter" == b.social_facility && "abused" == b["social_facility:for"] && (a += "Notunterkunft<br/>");"food_bank" == b.social_facility && (a += "Lebensmittelhilfe<br/>");"hospice" == b.social_facility && (a += "Hospiz<br/>");
    }b.brewery && (a += "Ausgeschenkte Biersorten: " + b.brewery + "<br/>");"alcohol" == b.shop && (a += "Spirituosenladen<br/>");"bakery" == b.shop && (a += "B\xE4ckerei<br/>");"beverages" == b.shop && (a += "Getr\xE4nkehandel<br/>");
    "butcher" == b.shop && (a += "Fleischerei<br/>");"cheese" == b.shop && (a += "K\xE4sefachgesch\xE4ft<br/>");"chocolate" == b.shop && (a += "Schokoladenfachgesch\xE4ft<br/>");"coffee" == b.shop && (a += "Kaffeefachgesch\xE4ft<br/>");"confectionery" == b.shop && (a += "S\xFC\xDFwarenladen<br/>");"convenience" == b.shop && (a += "Lebensmittelgesch\xE4ft<br/>");"deli" == b.shop && (a += "Feinkostladen<br/>");"dairy" == b.shop && (a += "Milchladen<br/>");"farm" == b.shop && (a += "Hofladen<br/>");"greengrocer" == b.shop && (a += "Gem\xFCseh\xE4ndler<br/>");
    "grocery" == b.shop && (a += "Lebensmittelgesch\xE4ft<br/>");"organic" == b.shop && (a += "Bio-Laden, Reformhaus<br/>");"pasta" == b.shop && (a += "Pastagesch\xE4ft<br/>");"seafood" == b.shop && (a += "Fischfachgesch\xE4ft<br/>");"tea" == b.shop && (a += "Teefachgesch\xE4ft<br/>");"wine" == b.shop && (a += "Weinhandlung<br/>");"department_store" == b.shop && (a += "Kaufhaus<br/>");"general" == b.shop && (a += "Gemischtwarenhandlung<br/>");"kiosk" == b.shop && (a += "Kiosk<br/>");"mall" == b.shop && (a += "Einkaufszentrum<br/>");"supermarket" == b.shop && (a += "Supermarkt<br/>");"baby_goods" == b.shop && (a += "Babyfachmarkt<br/>");"bag" == b.shop && (a += "Taschen und Koffer<br/>");"boutique" == b.shop && (a += "Boutique<br/>");"clothes" == b.shop && (a += "Bekleidung<br/>");"fabric" == b.shop && (a += "Textilgesch\xE4ft<br/>");"fashion" == b.shop && (a += "Fashion<br/>");"jewelry" == b.shop && (a += "Juwelier<br/>");"leather" == b.shop && (a += "Lederwaren<br/>");"shoes" == b.shop && (a += "Schuhfachgesch\xE4ft<br/>");"variety_store" == b.shop && (a += "Ein-Euro-Laden<br/>");"chemist" == b.shop && (a += "Drogerie<br/>");
    "cosmetics" == b.shop && (a += "Kosmetikfachgesch\xE4ft<br/>");"drugstore" == b.shop && (a += "Drogerie oder Apotheke (veraltet)<br/>");"perfumery" == b.shop && (a += "Parf\xFCmerie<br/>");"erotic" == b.shop && (a += "Erotikhandel<br/>");"hairdresser" == b.shop && (a += "Friseur<br/>");"hearing_aids" == b.shop && (a += "H\xF6rger\xE4te<br/>");"herbalist" == b.shop && (a += "Kr\xE4uterhandel<br/>");"massage" == b.shop && (a += "Massagesalon<br/>");"medical_supply" == b.shop && (a += "Sanit\xE4tshaus<br/>");"optician" == b.shop && (a += "Optiker<br/>");
    "tattoo" == b.shop && (a += "T\xE4towierer<br/>");"bathroom_furnishing" == b.shop && (a += "Badm\xF6bel und -accessoires<br/>");"doityourself" == b.shop && (a += "Baumarkt/Baustoffhandel<br/>");"energy" == b.shop && (a += "Energiehandel<br/>");"florist" == b.shop && (a += "Blumengesch\xE4ft<br/>");"furnace" == b.shop && (a += "Ofenfachgesch\xE4ft<br/>");"garden_centre" == b.shop && (a += "Gartencenter<br/>");"gas" == b.shop && (a += "Fachgesch\xE4ft f\xFCr technische Gase<br/>");"glaziery" == b.shop && (a += "Glaserei<br/>");"hardware" == b.shop && (a += "Eisenwaren<br/>");"houseware" == b.shop && (a += "Haushaltswaren und Inneneinrichtung<br/>");"locksmith" == b.shop && (a += "Schl\xFCsseldienst<br/>");"paint" == b.shop && (a += "Farbenfachgesch\xE4ft<br/>");"trade" == b.shop && (a += "Baustoffhandel<br/>");"antiques" == b.shop && (a += "Antiquit\xE4ten<br/>");"bed" == b.shop && (a += "Betten- und Matratzengesch\xE4ft<br/>");"candles" == b.shop && (a += "Kerzengesch\xE4ft<br/>");"carpet" == b.shop && (a += "Teppichfachhandel<br/>");"curtain" == b.shop && (a += "Gardinenfachgesch\xE4ft<br/>");
    "furniture" == b.shop && (a += "M\xF6bel- und Einrichtungshaus<br/>");"interior_decoration" == b.shop && (a += "Innendekoration / Raumausstattung<br/>");"kitchen" == b.shop && (a += "K\xFCchen<br/>");"window_blind" == b.shop && (a += "Jalousien und Roll\xE4den<br/>");"computer" == b.shop && (a += "Computer-Fachh\xE4ndler<br/>");"electronics" == b.shop && (a += "Elektronikmarkt<br/>");"hifi" == b.shop && (a += "Hifi-Fachh\xE4ndler<br/>");"mobile_phone" == b.shop && (a += "Handy-Shop<br/>");"radiotechnics" == b.shop && (a += "Radio- und Fernsehtechnik<br/>");
    "vacuum_cleaner" == b.shop && (a += "Staubsaugerfachgesch\xE4ft<br/>");"bicycle" == b.shop && (a += "Fahrradfachgesch\xE4ft<br/>");"car" == b.shop && (a += "Autohaus<br/>");"car_repair" == b.shop && (a += "Autowerkstatt<br/>");"car_parts" == b.shop && (a += "Autoteilefachgesch\xE4ft<br/>");if ("dive" == b.shop || "scuba_diving" == b.shop) a += "Tauchausr\xFCstung<br/>";"fishing" == b.shop && (a += "Angelfachgesch\xE4ft<br/>");"free_flying" == b.shop && (a += "Fallschirmausr\xFCstung<br/>");"hunting" == b.shop && (a += "Jagdausr\xFCstung<br/>");
    "motorcycle" == b.shop && (a += "Motorradgesch\xE4ft<br/>");"outdoor" == b.shop && (a += "Trekking-/Outdoorladen<br/>");"sports" == b.shop && (a += "Sportgesch\xE4ft<br/>");"tyres" == b.shop && (a += "Reifenfachhandel<br/>");"water_sports" == b.shop && (a += "Wassersportbedarf<br/>");"art" == b.shop && (a += "Kunstladen<br/>");"craft" == b.shop && (a += "Kunsthandwerk<br/>");"frame" == b.shop && (a += "Bilderrahmengesch\xE4ft<br/>");"music" == b.shop && (a += "Musikgesch\xE4ft<br/>");"music_instrument" == b.shop && (a += "Musikhaus<br/>");"photo" == b.shop && (a += "Fotofachgesch\xE4ft<br/>");"video" == b.shop && (a += "Videothek<br/>");"video_games" == b.shop && (a += "Videospiele<br/>");"anime" == b.shop && (a += "Anime<br/>");"books" == b.shop && (a += "Buchhandlung<br/>");"gift" == b.shop && (a += "Andenken, Reisemitbringsel, Souveniershop<br/>");"newsagent" == b.shop && (a += "Zeitungsh\xE4ndler<br/>");"stationery" == b.shop && (a += "Schreibwaren<br/>");"ticket" == b.shop && (a += "Ticketshop<br/>");"copyshop" == b.shop && (a += "Kopierladen<br/>");"funeral_directors" == b.shop && (a += "Bestattungsunternehmen<br/>");
    "laundry" == b.shop && (a += "Waschsalon / W\xE4scherei<br/>");"dry_cleaning" == b.shop && (a += "chemische Reinigung<br/>");"money_lender" == b.shop && (a += "Geldverleiher<br/>");"pawnbroker" == b.shop && (a += "Pfandhaus / Pfandleiher<br/>");"pet" == b.shop && (a += "Zoo- und Tierhandlung<br/>");"pyrotechnics" == b.shop && (a += "Feuerwerk<br/>");"religion" == b.shop && (a += "Religi\xF6se Artikel<br/>");"beauty" == b.shop && (a += "Sch\xF6nheitssalon<br/>");"solarium" == b.shop && (a += "Solarium<br/>");"tobacco" == b.shop && (a += "Tabakwaren<br/>");
    "toys" == b.shop && (a += "Spielwaren<br/>");"travel_agency" == b.shop && (a += "Reiseb\xFCro<br/>");"market_hall" == b.shop && (a += "Markthalle<br/>");"vacant" == b.shop && (a += "leerstehendes Ladenlokal<br/>");"weapons" == b.shop && (a += "Waffenladen<br/>");"lottery" == b.gambling && (a += "Lottoannahmestelle<br/>");"fish" == b.pet && (a += "Aquaristik<br/>");"agriucultural_engines" == b.craft && (a += "Landmaschinenbau<br/>");"basket_maker" == b.craft && (a += "Korbmacher<br/>");"beekeeper" == b.craft && (a += "Imker<br/>");"blacksmith" == b.craft && (a += "Schmied<br/>");"brewery" == b.craft && (a += "Brauerei<br/>");"yes" == b.microbrewery && (a += "Hausbrauerei<br/>");"boatbuilder" == b.craft && (a += "Bootsbauer<br/>");"bookbinder" == b.craft && (a += "Buchbinder<br/>");"builder" == b.craft && (a += "Hausbau<br/>");"carpenter" == b.craft && (a += "Tischler/Schreiner, Zimmermann<br/>");"carpet_layer" == b.craft && (a += "Teppichleger<br/>");"caterer" == b.craft && (a += "Catering<br/>");"clockmaker" == b.craft && (a += "Uhrmacher<br/>");"confectionery" == b.craft && (a += "Konditorei<br/>");"dressmaker" == b.craft && (a += "Schneider<br/>");"electrician" == b.craft && (a += "Elektriker<br/>");"gardener" == b.craft && (a += "Garten- und Landschaftsbauer<br/>");"glaziery" == b.craft && (a += "Glaserei<br/>");"handicraft" == b.craft && (a += "Handwerkskunst<br/>");"hvac" == b.craft && (a += "K\xE4lteanlagenbauer f\xFCr L\xFCftungs-, Heizungs- und Klimatechnik<br/>");"insulation" == b.craft && (a += "W\xE4rmed\xE4mmung von Geb\xE4uden<br/>");"jeweller" == b.craft && (a += "Juwelier, Gold-/Silber-Schmied<br/>");"key_cutter" == b.craft && (a += "Schl\xFCsselmacher<br/>");"locksmith" == b.craft && (a += "Schl\xFCsseldienst<br/>");"metal_construction" == b.craft && (a += "Metallbauer<br/>");"optician" == b.craft && (a += "Optiker<br/>");"painter" == b.craft && (a += "Maler<br/>");"parquet_layer" == b.craft && (a += "Parkettverleger<br/>");"photographer" == b.craft && (a += "Fotograf<br/>");"photographic_laboratory" == b.craft && (a += "Fotolabor<br/>");"plasterer" == b.craft && (a += "Gipser, Verputzer, Stuckateur<br/>");"plumber" == b.craft && (a += "Anlagenmechaniker Sanit\xE4r-, Heizungs- und Klimatechnik.<br/>");
    "pottery" == b.craft && (a += "T\xF6pferei<br/>");"rigger" == b.craft && (a += "Riggemacher (Takelage f\xFCr Segelschiffe)<br/>");"roofer" == b.craft && (a += "Dachdecker<br/>");"saddler" == b.craft && (a += "Sattler<br/>");"sailmaker" == b.craft && (a += "Segelmacher<br/>");"sawmill" == b.craft && (a += "Holzverarbeitungsbetrieb<br/>");"scaffolder" == b.craft && (a += "Ger\xFCstbauer<br/>");"sculptor" == b.craft && (a += "Bildhauer<br/>");"shoemaker" == b.craft && (a += "Schuhmacher<br/>");"stand_builder" == b.craft && (a += "Messe- / Standbauer<br/>");
    "stonemason" == b.craft && (a += "Steinmetz<br/>");"sun_protection" == b.craft && (a += "Rolladen- und Jalousiebauer<br/>");"sweep" == b.craft && (a += "Schornsteinfeger<br/>");"tailor" == b.craft && (a += "Schneider<br/>");"tiler" == b.craft && (a += "Fliesen-, Platten- und Mosaikleger<br/>");"tinsmith" == b.craft && (a += "Spengler, Klempner<br/>");"upholsterer" == b.craft && (a += "Polsterer<br/>");"watchmaker" == b.craft && (a += "Uhrmacher<br/>");"window_construction" == b.craft && (a += "Fensterbauer<br/>");"machines" == b.rental && (a += "Maschinenverleih<br/>");
    "car_rental" == b.amenity && (a += "Autoverleih<br/>");"allotments" == b.landuse && (a += "Schrebergarten<br/>");"basin" == b.landuse && (a += "Regenwasserr\xFCckhaltebecken<br/>");"brownfield" == b.landuse && (a += "Vorher bebautes Land<br/>");"commercial" == b.landuse && (a += "Industriegebiet<br/>");"construction" == b.landuse && (a += "Baugebiet<br/>");"farmland" == b.landuse && (a += "Ackerfl\xE4che<br/>");"farmyard" == b.landuse && (a += "landwirtschaftlicher Betrieb<br/>");"forest" == b.landuse && (a += "Forst<br/>");"garages" == b.landuse && (a += "Garagenkomplex<br/>");"grass" == b.landuse && (a += "Rasenfl\xE4chen<br/>");"greenfield" == b.landuse && (a += "Bauerwartungsland<br/>");"greenhouse_horticulture" == b.landuse && (a += "Gew\xE4chshaus-Fl\xE4che<br/>");"industrial" == b.landuse && (a += "Gewerbe-/Industriegebiet<br/>");"landfill" == b.landuse && (a += "M\xFClldeponie<br/>");"meadow" == b.landuse && (a += "Gr\xFCnfl\xE4che<br/>");"orchard" == b.landuse && (a += "Obstplantage<br/>");"plant_nursery" == b.landuse && (a += "Baumschule<br/>");"quarry" == b.landuse && (a += "Sand- und Kiesgrube<br/>");"railway" == b.landuse && (a += "Gebiet f\xFCr Eisenbahnnutzung<br/>");"recreation_ground" == b.landuse && (a += "Erholungsgebiet<br/>");"reservoir" == b.landuse && (a += "Wasserreservoir<br/>");"residential" == b.landuse && (a += "Wohngebiet<br/>");"retail" == b.landuse && (a += "Einkaufszentrum<br/>");"salt_pond" == b.landuse && (a += "Saline<br/>");"village_green" == b.landuse && (a += "Gr\xFCnfl\xE4che<br/>");"vineyard" == b.landuse && (a += "Weinberg<br/>");"pond" == b.landuse && (a += "kleiner Teich<br/>");"salt_pond" == b.landuse && (a += "Saline<br/>");"animal_keeping" == b.landuse && (a += "Weide, Paddock f\xFCr Tierhaltung<br/>");"yes" == b.entrance && (a += "Eingang zum Geb\xE4ude<br/>");"main" == b.entrance && (a += "Haupteingang<br/>");"service" == b.entrance && (a += "Hinterausgang f\xFCr Angestellte oder Zulieferer<br/>");"exit" == b.entrance && (a += "Ausgang des Geb\xE4udes<br/>");"emergency" == b.entrance && (a += "Notausgang<br/>");"bay" == b.natural && (a += "Bucht<br/>");"beach" == b.natural && (a += "Strand<br/>");"wood" == b.natural && (a += "nat\xFCrlicher Wald<br/>");
    "glacier" == b.natural && (a += "Gletscher<br/>");"cave_entrance" == b.natural && (a += "H\xF6hle<br/>");"spring" == b.natural && (a += "nat\xFCrliche Quelle<br/>");"waterfall" == b.natural && (a += "Wasserfall<br/>");"scrub" == b.natural && (a += "unkultiviertes Buschland<br/>");"grassland" == b.natural && (a += "unkultiviertes Grasland<br/>");"wetland" == b.natural && (a += "Feuchtgebiet<br/>");"tree" == b.natural && (a += "Baum");"peak" == b.natural && "yes" == b["summit:cross"] && (a += "Gipfelkreuz<br/>");"tree_row" == b.natural && (a += "Baumreihe / Allee<br/>");
    "heath" == b.natural && (a += "Heide<br/>");"moor" == b.natural && (a += "Hochmoor<br/>");"grassland" == b.natural && (a += "unkultiviertes Grasland<br/>");"fell" == b.natural && (a += "Grasland oberhalb der Baumgrenze<br/>");"bare_rock" == b.natural && (a += "Nackter Fels<br/>");"scree" == b.natural && (a += "Schutt (Hangschutt)<br/>");"volcano" == b.natural && (a += "Vulkan<br/>");"valley" == b.natural && (a += "Tal<br/>");"stone" == b.natural && (a += "Findling<br/>");"sea" == b.natural && (a += "Meer<br/>");"national_park" == b.boundary && (a += "Nationalpark<br/>");
    "protected_area" == b.boundary && (a += "Schutzgebiet<br/>");"yes" == b.mountain_pass && (a += "Gebirgspass<br/>");"waterfall" == b.waterway && (a += "Wasserfall<br/>");"canal" == b.waterway && (a += "Kanal<br/>");"canal" == b.water && (a += "Kanal<br/>");"river" == b.waterway && (a += "Fluss<br/>");"river" == b.water && (a += "Fluss<br/>");"riverbank" == b.waterway && (a += "Fluss<br/>");"ditch" == b.waterway && (a += "Entw\xE4sserungsgraben<br/>");"stream" == b.waterway && (a += "Bach<br/>");"ferry" == b.route && (a += "F\xE4hrverbindung<br/>");"turning_point" == b.waterway && (a += "Wendestelle<br/>");if ("lake" == b.water || "water" == b.natural) a += "See<br/>";"cove" == b.water && (a += "kleine Bucht<br/>");"lagoon" == b.water && (a += "Lagune<br/>");"pond" == b.water && (a += "Teich<br/>");"reservoir" == b.water && (a += "Wasserreservoir<br/>");"oxbow" == b.water && (a += "Altwassersee<br/>");"lock" == b.water && (a += "Schleusenkammer<br/>");"moat" == b.water && (a += "Burggraben<br/>");"wastewater" == b.water && (a += "Kl\xE4ranlage<br/>");"guest" == b.mooring && "pier" == b.man_made || "visitor_berth" == b["seamark:small_craft_facility:category"] ? a += "Gastliegeplatz<br/>" : "pier" == b.man_made && (a += "Anlegestelle<br/>");"boatyard" == b.waterway && (a += "Schiffswerft<br/>");"mooring" == b["seamark:type"] && "dolphin" == b["seamark:mooring:category"] && (a += "Dalben<br/>");"foot" == b.route && (a += "Wanderweg<br/>");"hiking" == b.route && (a += "Wanderweg<br/>");if ("yes" == b.hiking && "information" == b.tourism) a += "Wegweiser<br/>";else if ("information" == b.tourism && "information" == b.tourism) if (b.information) switch (b.information) {case "board":
            a += "Informationstafel<br/>";break;case "map":
            a += "Informationstafel mit Karte<br/>";break;case "office":
            a += "Touristeninformation<br/>";break;case "terminal":
            a += "Informationsterminal<br/>";break;case "audioguide":
            a += "Audioguide<br/>";break;case "guidepost":
            a += "Wegweiser<br/>";break;case "tactile_map":
            a += "Blindenkarte 2D<br/>";break;case "tactile_model":
            a += "Blindenkarte 3D<br/>";break;case "route_marker":
            a += "Wegerkennungsmarker<br/>";break;default:
            a += "Informationstafel<br/>";} else a += "Informationstafel<br/>";"bicycle" == b.route && (a += "Radwanderweg<br/>");
    "mtb" == b.route && (a += "Mountainbikeroute<br/>");"horse" == b.route && (a += "Reitwanderweg<br/>");"coastline" == b.natural && (a += "K\xFCstenlinie<br/>");"cliff" == b.natural && (a += "Klippe<br/>");"dam" == b.waterway && (a += "Staudamm<br/>");"weir" == b.waterway && (a += "Wehr<br/>");"lock_gate" == b.waterway && (a += "Schleusentor<br/>");"yes" == b.lock && (a += "Schleuse<br/>");"sluice_gate" == b.waterway && (a += "Siel<br/>");"pumping_station" == b.man_made && (a += "Sch\xF6pfwerk<br/>");"groyne" == b.man_made && (a += "Buhne<br/>");"dyke" == b.man_made && (a += "Deich<br/>");"levee" == b.man_made && (a += "Deich<br/>");"watermill" == b.man_made && (a += "Wasserm\xFChle<br/>");"airfield" == b.military && (a += "Milit\xE4rflugplatz<br/>");"naval_base" == b.military && (a += "Marinest\xFCtzpunkt<br/>");"range" == b.military && (a += "Waffen\xFCbungsplatz<br/>");"military" == b.landuse && (a += "milit\xE4risch genutztes Gebiet<br/>");"training_area" == b.military && (a += "Truppen\xFCbungsplatz<br/>");"exclusion_zone" == b.military && (a += "milit\xE4risch genutztes Gebiet<br/>");"danger_area" == b.military && (a += "milit\xE4rische Gefahrenzone<br/>");"barracks" == b.military && (a += "Kaserne<br/>");"nuclear_explosion_site" == b.military && (a += "Atomwaffentestgel\xE4nde<br/>");"yes" == b.construction ? a += "Baustelle<br/>" : "construction" == b.highway && (a += "Baustelle<br/>");"petroleum_well" == b.man_made && (a += "Erd\xF6lpumpe<br/>");"storage_tank" == b.man_made && (a += "Speichertank<br/>");"wastewater_plant" == b.man_made && (a += "Kl\xE4ranlage<br/>");"silo" == b.man_made && (a += "Silo<br/>");"water_tower" == b.man_made && (a += "Wasserturm<br/>");"windmill" == b.man_made && (a += "Windm\xFChle<br/>");"monitoring_station" == b.man_made && (a += "Messstation");"crane" == b.man_made && (a += "Kran");"lighthouse" == b.man_made && (a += "Leuchtturm");"beacon" == b.man_made && (a += "Leuchtfeuer");"breakwater" == b.man_made && (a += "Wellenbrecher");"lamp" == b.man_made && "street_lamp" == b["lamp:type"] && (a += "Strassenlaterne<br/>");"lantern" == b.light_source && (a += "Strassenlaterne<br/>");"floodlight" == b.light_source && (a += "Flutlicht<br/>");"signal_lamp" == b.light_source && (a += "Signallicht<br/>");"aviation" == b.light_source && (a += "Befeuerung<br/>");"warning" == b.light_source && (a += "Warnlicht<br/>");if (b.light_source && b["light:method"]) switch (a += "Licht Art: ", b["light:method"]) {case "gas":
            a += "Gas";break;case "electric":
            a += "Elektrisch";break;case "incandescent":
            a += "strahlend";break;case "halogen":
            a += "Halogen";break;case "discharge":
            a += "Entladungslicht";break;case "metal-halide":
            a += "Halogen-Metalldampflampe";break;case "neon":
            a += "Neon";break;case "sodium":
            a += "Natriumdampflampe";
            break;case "high_pressure_sodium":
            a += "Hochdruck Natriumdampflampe";break;case "low_pressure_sodium":
            a += "Niedrigdruck Natriumdampflampe";break;case "fluorescent":
            a += "Fluoreszenzlampe";break;case "mercury":
            a += "Quecksilberlampe";break;case "LED":
            a += "LED";break;case "laser":
            a += "Laser";break;case "arc":
            a += "Lichtbogen";break;default:
            a += "Unbekannt";}"drinking_water" == b.amenity && (a += "Trinkwasser<br/>");"yes" == b.drinking_water && (a += "Trinkwasser<br/>");"works" == b.man_made ? a += "Industriegeb\xE4ude<br/>" : "industrial" == b.building ? a += "Industriegeb\xE4ude<br/>" : "industrial" == b.landuse ? a += "Industriegebiet<br/>" : "industrial" == b.abutters ? a += "Industriegebiet<br/>" : "commercial" == b.abutters && (a += "Gewerbegebiet<br/>");if (b["generator:source"]) switch (a += "Anlagen-Typ: ", b["generator:source"]) {case "biomass":
            a += "Biogasanlage";break;case "biofuel":
            a += "Biogasanlage";break;case "biogas":
            a += "Biogasanlage";break;case "coal":
            a += "Kohlekraftwerk";break;case "oil":
            a += "\xD6lraffinerie";break;case "waste":
            a += "M\xFCllverbrennungsanlage";
            break;case "wind":
            a += "Windkraftwerk";break;case "solar":
            a += "Solarkraftwerk";break;case "hydro":
            a += "Wasserkraftwerk";break;case "tidal":
            a += "Gezeitenkraftwerk";break;case "wave":
            a += "Wellenkraftwerk";break;case "geothermal":
            a += "Geothermie";break;case "osmotic":
            a += "Osmosekraftwerk";break;case "nuclear":
            a += "Atomkraftwerk";break;default:
            a += "unbekannt<br/>";}"photovoltaic" == b.power_source && (a += "Solarkraftwerk");"line" == b.power && (a += "Hochspannungs-\xDCbertragungsleitung<br/>");"cable" == b.power && (a += "Untergrundkabel<br/>");
    "cable_distribution_cabinet" == b.power && (a += "Kabelverteilerschrank<br/>");"plant" == b.power && (a += "Elektrizit\xE4tskraftwerk<br/>");"station" == b.power && (a += "Elektrizit\xE4tskraftwerk<br/>");"sub_station" == b.power && (a += "Elektrizit\xE4tskraftwerk<br/>");"compensator" == b.power && (a += "Kompensator<br/>");"converter" == b.power && (a += "Konverter<br/>");"generator" == b.power && (a += "Generator<br/>");"heliostat" == b.power && (a += "Heliostat<br/>");"insulator" == b.power && (a += "Isulator<br/>");"busbar" == b.line && (a += "Sammelschiene<br/>");
    "bay" == b.line && (a += "Verbindung Schaltung und Sammelschiene<br/>");"minor_line" == b.power && (a += "Nebenlinie<br/>");"pole" == b.power && (a += "Pfahl<br/>");"portal" == b.power && (a += "H-f\xF6rmiger Mast<br/>");"catenary_mast" == b.power && (a += "Fahrleitungsmast<br/>");"substation" == b.power && (a += "Umspannwerk<br/>");"switch" == b.power && (a += "Lastschalter<br/>");"terminal" == b.power && (a += "Terminal / Anschluss<br/>");"tower" == b.power && (a += "Hochspannungsleitungs<br/>");"transformer" == b.power && (a += "Nebenlinie<br/>");if (b.barrier) switch (b.barrier) {case "bollard":
            a += "Poller, Pfosten<br/>";break;case "cycle_barrier":
            a += "Umlaufsperre, Dr\xE4ngelgitter<br/>";break;case "gate":
            a += "Tor, Schranke<br/>";break;case "chain":
            a += "Kette<br/>";break;case "lift_gate":
            a += "Schlagbaum<br/>";break;case "wall":
            a += "L\xE4rmschutzwand<br/>";break;case "toll_booth":
            a += "Mautstelle<br/>";break;case "fence":
            switch (b.fence_type) {case "barbed_wire":
                    a += "Stacheldrahtzaun<br/>";break;case "wood":
                    a += "Holzzaun<br/>";break;case "chain_link":
                    a += "Maschendrahtzaun<br/>";break;case "electric":
                    a += "Weidezaun<br/>";break;case "railing":
                    a += "Gel\xE4nder<br/>";break;case "wire":
                    a += "einfacher Drahtzaun<br/>";break;case "metal":
                    a += "Metallzaun<br/>";break;case "pole":
                    a += "Holzpf\xE4hle<br/>";break;default:
                    a += "Zaun<br/>";}break;case "block":
            a += "Block<br/>";break;case "ditch":
            a += "Graben<br/>";break;case "border_control":
            a += "Grenzkontrolle<br/>";break;case "hedge":
            a += "Hecke<br/>";break;case "retaining_wall":
            a += "St\xFCtzmauer<br/>";break;case "cattle_grid":
            a += "Weiderost<br/>";break;case "horse_stile":
            a += "Zaun\xFCbertritt<br/>";break;default:
            a += "unbekannt<br/>";}"noise_barrier" == b.wall && (a += "L\xE4rmschutzwand<br/>");"retaining_wall" == b.designation && (a += "L\xE4rmschutzwand<br/>");"noise_barrier" == b.designation && (a += "L\xE4rmschutzwand<br/>");"surveillance" == b.man_made && (a += "\xDCberwachter Bereich<br/>");if (b.aeroway) switch (a += "Flughafen: ", b.aeroway) {case "aerodrome":
            a += "Flugplatz";break;case "apron":
            a += "Vorfeld";break;case "gate":
            a += "gate";break;case "helipad":
            a += "Hubschrauberlandeplatz";break;
        case "hangar":
            a += "Hangar";break;case "runway":
            a += "Start-/Landebahn";break;case "taxiway":
            a += "Rollweg";break;case "terminal":
            a += "Flughafengeb\xE4ude";break;default:
            a += "unbekannt<br/>";}"halt" == b.railway && (a += "Bahn-Haltepunkt<br/>");"crossing" == b.railway && (a += "Bahn\xFCbergang<br/>");"level_crossing" == b.railway && (a += "Bahn\xFCbergang<br/>");"station" == b.railway && (a += "Bahnhof<br/>");"bus_station" == b.amenity && (a += "Busbahnhof<br/>");"bus_station" == !b.amenity && "station" == b.public_transport && "yes" == b.bus && (a += "Busbahnhof<br/>");"rail" == b.railway && (a += "Bahnlinie<br/>", "contact_line" == b.electrified && (a += "elektrifizierte Bahntrasse mit Oberleitung<br/>"));"tram" == b.railway && (a += "Stra\xDFenbahnlinie<br/>");if ("slipway" == b["seamark:small_craft_facility:category"] || "slipway" == b.harbour || "slipway" == b.leisure) a += "Slipanlage<br/>";if ("harbour" == b["seamark:type"]) if (b["seamark:harbour:category"]) switch (b["seamark:harbour:category"]) {case "ferry":
            a += "F\xE4hrhafen<br/>";break;case "container":
            a += "Containerhafen<br/>";
            break;case "marina":
            "marina" != b.leisure && (a += "Jachthafen<br/>");break;case "navel_base":
            a += "Marine-Hafen<br/>";break;case "tanker":
            a += "Hafen f\xFCr \xD6ltanker<br/>";break;case "passenger":
            a += "Personenschifffahrt<br/>";break;case "bulk":
            a += "Sch\xFCttgut-Hafen<br/>";break;default:
            a += "Hafen<br/>";} else a += "Hafen<br/>";"marina" == b.leisure && (a += "Jachthafen<br/>");"wreck" == b.historic && (a += "Wrack<br/>");"animal_shelter" == b.amenity && (a += "Tierheim<br/>");"shelter" == b.animal && (a += "Tierheim<br/>");"horse_walker" == b.animal && (a += "Pferdelauftrainer<br/>");"yes" == b.animal_shelter && (a += "Tierheim<br/>");"dog" == b.animal_shelter && (a += "Tierheim<br/>");"cat" == b.animal_shelter && (a += "Tierheim<br/>");"animal_boarding" == b.amenity && (a += "Tierpension<br/>");"yes" == b.animal_boarding && (a += "Tierpension<br/>");"dog" == b.animal_boarding && (a += "Tierpension<br/>");"horse" == b.animal_boarding && (a += "Tierpension<br/>");"cat" == b.animal_boarding && (a += "Tierpension<br/>");"dog;cat" == b.animal_boarding && (a += "Tierpension<br/>");"cat;dog" == b.animal_boarding && (a += "Tierpension<br/>");if ("school" == b.animal || "sport" == b.animal || "animal_training" == b.amenity) a += "Tiertraining<br/>";"swimming" == b.animal && (a += "Badestelle f\xFCr Hunde<br/>");if ("feeding_place" == b.amenity || "animal_feeding" == b.man_made || "animal_feeding" == b.amenity) a += "F\xFCtterungsstelle<br/>";if ("wildlife_feeding" == b.amenity || "deer_feeding" == b.amenity || "game_feeding" == b.amenity) a += "Wildf\xFCtterung<br/>";if ("cratch" == b.amenity || "cratch" == b.man_made || "feeding_rack" == b.amenity) a += "Futterraufe<br/>";
    "manger" == b.amenity && (a += "Krippe<br/>");"birdhouse" == b.man_made && (a += "Vogelhaus<br/>");"stork" == b.birds_nest && (a += "Storchennest<br/>");"nest_box" == b.amenity && (a += "Nistkasten<br/>");"wellness" == b.animal && (a += "Hundesalon<br/>");"cemetery" == b.animal && (a += "Kleintierfriedhof<br/>");if ("stable" == b.building || "stable" == b["building:use"]) a += "Pferdestall<br/>";"cowshed" == b.building && (a += "Kuhstall<br/>");"sty" == b.building && (a += "Schweinestall<br/>");"barn" == b.building && (a += "Scheune / landwirtsch. Lagerhalle<br/>");
    "farm_auxiliary" == b.building && (a += "landwirtschaftl. Nebengeb\xE4ude<br/>");if (b["river:waterway_distance"] || "milestone" == b.waterway) a += "Flusskilometer<br/>";"milestone" == b.highway && (a += "Strassenkilometer<br/>");"market" == b["xmas:feature"] && (a += "Weihnachtsmarkt<br/>");"tree" == b["xmas:feature"] && (a += "Weihnachtsbaumverkauf<br/>");"event" == b["xmas:feature"] && (a += "Weihnachtsevent<br/>");"pyramid" == b["xmas:feature"] && (a += "Weihnachtspyramide<br/>");return '<div class="c4g_popup_header_featuretype">' + a + "<br/> </div>";
}
var fnContent = function fnContent(b) {
    var a;a = "" + fnContentGeneralInformations(b);a += fnContentHealthcare(b);a += fnContentAerodrome(b);a += fnContentCuisine(b);a += fnContentShipping(b);a += fnContentHydrants(b);a += fnContentSports(b);a += fnContentStreetsTraffic(b);a += fnContentInformationCity(b);a += fnContentEmergency(b);a += fnContentStorage(b);a += fnContentAmenity(b);a += fnContentTourism(b);a += fnContentRoute(b);a += fnContentPetrol(b);a += fnContentBarriers(b);a += fnContentLanduse(b);a += fnContentNatural(b);a += fnKlosterAdditional(b);a += fnSicherheitAdditional(b);a += fnAdditionalBuildingInfos(b);a += fnKraftwerkInfo(b);a += fnMessstation(b);a += fnWertstoffinfo(b);(a += fnContentProtectedArea(b)) && (a = "<br/>" + a);return '<div class="c4g_popup_content">' + a + "</div>";
},
    fnContentAerodrome = function fnContentAerodrome(b) {
    var a = "";b.aerodrome && ("international" == b.aerodrome && (a += "Flughafentype: internationaler Flugplatz<br/>"), "regional" == b.aerodrome && (a += "Flughafentype: regionaler Flugplatz<br/>"), "gliding" == b.aerodrome && (a += "Flughafentype: Segelflugplatz<br/>"), "private" == b.aerodrome && (a += "Flughafentype: Privatflugplatz<br/>"));b.iata && (a += "IATA-Code: " + b.iata + "<br/>");b.icao && (a += "ICAO-Code: " + b.icao + "<br/>");return a;
},
    fnContentNatural = function fnContentNatural(b) {
    var a = "";if (b.forest || b.wood) {
        if ("broadleaved" == b.leaf_type || "deciduous" == b.wood) a += "Laubwald<br/>";if ("needleleaved" == b.leaf_type || "coniferous" == b.wood) a += "Nadelwald<br/>";if ("mixed" == b.leaf_type || "mixed" == b.wood) a += "Mischwald<br/>";"leafless" == b.leaf_type && (a += "Blattlose Vegetation<br/>");"evergreen" == b.wood && (a += "immergr\xFCn<br/>");
        "palm" == b.wood && (a += "Palmen<br/>");"nipa_palm" == b.wood && (a += "Nipapalmen<br/>");"eucalypt" == b.wood && (a += "Eukalypten<br/>");if ("filao" == b.wood || "casuarina" == b.wood) a += "Kasuarinengew\xE4chse<br/>";
    }if ("tree" == b.natural && (!b["genus:de"] && !b["species:de"] && b.leaf_type && (a = "broadleaved" == b.leaf_type || "deciduous" == b.leaf_type || "broadleafed" == b.leaf_type ? a + "Laubbaum<br/>" : a + "Nadelbaum<br/>"), b.genus && (a += b.genus + "<br/>"), b["genus:de"] && (a += b["genus:de"] + "<br/>"), b.species && (a += b.species + "<br/>"), b["species:de"] && (a += b["species:de"] + "<br/>"), "landmark" == b.denotation && (a += "durch Gr\xF6\xDFe und herausragender Position sich deutlich aus seinem Umfeld hervorhebender Baum.<br/>"), "natural_monument" == b.denotation || "yes" == b.monument)) a += "alter, unter besonderem Schutz stehender Baum.<br/>";"manger" == b["feeding:type"] && (a += "Futterbeh\xE4lter: Futterraufe<br/>");"automated" == b["feeding:type"] && (a += "Automat<br/>");if (b["feeding:for"]) switch (b["feeding:for"]) {case "sheep":
            a += "Tier: Schaaf<br/>";break;case "horse":
            a += "Tier: Pferd<br/>";break;case "cow":
            a += "Tier: Kuh<br/>";break;case "rabbit":
            a += "Tier: Kaninchen<br/>";break;case "bunny":
            a += "Tier: Hase<br/>";break;case "cat":
            a += "Tier: Katze </br>";break;case "swan":
            a += "Tier: Schwan </br>";break;case "guinea pig":
            a += "Tier: Meerschweinchen </br>";break;case "donkey":
            a += "Tier: Esel </br>";break;case "squirrel":
            a += "Tier: Eichh\xF6rnchen </br>";break;case "pig":
            a += "Tier: Schwein </br>";break;case "deer":
            a += "Tier: Reh </br>";break;case "guinea pig":
            a += "Tier: Meerschweinchen </br>";
            break;case "monkey":
            a += "Tier: Affe </br>";break;case "camel":
            a += "Tier: Kamel </br>";break;case "goat":
            a += "Tier: Ziege </br>";break;case "hamster":
            a += "Tier: Hamster </br>";break;case "alpaca":
            a += "Tier: Alpaka </br>";break;default:
            a += "Tiere: nicht bekannt<br/>";}if (b["feeding:fodder"]) switch (b["feeding:fodder"]) {case "hay":
            a += "F\xFCttern mit: Heu</br>";break;case "grain":
            a += "F\xFCttern mit: Getreide</br>";break;case "corn":
            a += "F\xFCttern mit: Korn</*br>";break;default:
            a += "F\xFCttern mit: nicht bekannt</br>";}"volcano" == b.natural && "active" == b.status && (a += "Aktiver Vulkan<br/>");"volcano" == b.natural && "dormant" == b.status && (a += "Ruhender Vulkan<br/>");"volcano" == b.natural && "extinct" == b.status && (a += "Erloschener Vulkan<br/>");"volcano" == b.natural && "stratovolcano" == b.type && (a += "Vulkantyp:Schichtvulkan<br/>");"volcano" == b.natural && "shield" == b.type && (a += "Vulkantyp:Schildvulkan<br/>");"volcano" == b.natural && "scoria" == b.type && (a += "Vulkantyp:Schlacken- und Aschenkegel<br/>");return a;
},
    fnContentProtectedArea = function fnContentProtectedArea(b) {
    var a = "",
        c = "";"protected_area" == b.boundary && (b.protect_class && (c = b.protect_class), b.protect_id && (c = b.protect_id), "1" == c && (a = "Beschreibung: Strenges Naturreservat, Wildnisgebiet<br/>"), "2" == c && (a = "Beschreibung: Nationalpark<br/>"), "3" == c && (a = "Beschreibung: Naturmonument<br/>"), "4" == c && (a = "Beschreibung: Biotop/Artenschutzgebiet mit Management<br/>"), "5" == c && (a = "Beschreibung: Gesch\xFCtzte Landschaft/Gesch\xFCtztes marines Gebiet<br/>"), "6" == c && (a = "Beschreibung: Ressourcenschutzgebiet mit Management<br/>"), "7" == c && (a = "Beschreibung: Lokal gesch\xFCtzte Bereiche<br/>"), "97" == c && (a = "Beschreibung: Gesch\xFCtzt oder ausgezeichnet durch Vereinbarungen auf kontinentaler Ebene<br/>"), "98" == c && (a = "Beschreibung: Gesch\xFCtzt oder ausgezeichnet durch zwischenstaatliche- oder internationale Vereinbarungen<br/>"), "99" == c && (a = "andere <br/>"), "21" == c && (a = "Beschreibung: Gemeindebefinden (heilige Orte, assoziatice Orte)<br/>"), "22" == c && (a = "Beschreibung: Kulturelle Werte (Kulturg\xFCter, historisches Erbe, Denkmalschutz)<br/>"), "23" == c && (a = "Beschreibung: Schutz zu Gundsten der Wirtschaft<br/>"), "24" == c && (a = "Beschreibung: Politische Schutzgebiete<br/>"), "25" == c && (a = "Beschreibung: Milit\xE4rische Schutzgebiete<br/>"), "26" == c && (a = "Beschreibung: Historische Schutzgebiete<br/>"), "29" == c && (a = "Beschreibung: Weitere gesellschaftliche Schutzgebiete<br/>"), "11" == c && (a = "Beschreibung: Bodenschutz (Vorgabe zum Fruchtbarkeitserhalt und Erosionsschutz)<br/>"), "12" == c && (a = "Beschreibung: Wasserschutzgebiet (Trinkwasserschutzgebiet, Heilquellenschutzgebiet,..)<br/>"), "13" == c && (a = "Beschreibung: Klima und Luft (Kaltluftenstehung/Frischluftversorgung, Immissionsschutz,..)<br/>"), "14" == c && (a = "Beschreibung: Artenschutzgebiet (Angelverbot, Fischereischutzzone, Jagdschutzgebiet, Vogelschutzgebiet,..)<br/>"), "15" == c && (a = "Beschreibung: \"Standortausstattung\": Retentionsraum (gesetzlich gesch\xFCtztes \xDCberschwemmungsgebiet) <br/>"), "16" == c && (a = "Beschreibung: Dauerhafte Gefahrenbereiche (Lebensschutz, Bodenbewegungsgebiet,..)<br/>"), "19" == c && (a = "Beschreibung: Weitere nationale Gebiete<br/>"));
    return a;
},
    fnContentLanduse = function fnContentLanduse(b) {
    var a = "";"quarry" == b.landuse && b.resource && (a += "Resource: " + b.resource + "<br/>");"open_stable" == b["animal_keeping:type"] && (a += "Offenstall<br/>");"field_shelter" == b["animal_keeping:type"] && (a += "Weide mit Unterstand<br/>");"paddock" == b["animal_keeping:type"] && (a += "Paddock<br/>");b.animal_keeping && (a += "Tiere: Perde<br/>");return a;
},
    fnMessstation = function fnMessstation(b) {
    var a = "";"yes" == b["monitoring:water_level"] && (a += "Pegelstand<br/>");"yes" == b["monitoring:seismic_activity"] && (a += "seismische Aktivit\xE4ten<br/>");"yes" == b["monitoring:tide_gauge"] && (a += "Tidestand<br/>");"yes" == b["monitoring:weather"] && (a += "Wetterdaten<br/>");"yes" == b["monitoring:air_quality"] && (a += "Luftqualit\xE4t<br/>");return a;
},
    fnContentRoute = function fnContentRoute(b) {
    var a = "";b.route && ("yes" == b.roundtrip && (a += "Rundweg<br/>"), b.length && (a += "L\xE4nge/Distanz: " + b.length + "<br/>"), b.distance && (a += "L\xE4nge/Distanz: " + b.distance + "<br/>"), b.symbol && (a += "Symbol: " + b.symbol + "<br/>"));return a;
},
    fnContentPetrol = function fnContentPetrol(b) {
    var a = "";"fuel" == b.amenity && ("yes" == b["fuel:biodiesel"] && (a += "Biodiesel<br/>"), "yes" == b["fuel:e85"] && (a += "Ethanol<br/>"), "yes" == b["fuel:e10"] && (a += "E10<br/>"), "yes" == b["fuel:lpg"] && (a += "Autogas<br/>"), "yes" == b["fuel:cng"] && (a += "Erdgas<br/>"), "diesel" == b.fuel && (a += "Diesel<br/>"), "lpg" == b.fuel && (a += "Autogas<br/>"), "yes" == b["fuel:octane_95"] && (a += "Super Bleifrei<br/>"), "yes" == b["fuel:octane_98"] && (a += "Super Plus<br/>"), "yes" == b["fuel:octane_100"] && (a += "V-Power Racing<br/>"), "yes" == b["fuel:octane_102"] && (a += "Ultimate<br/>"), "yes" == b["fuel:diesel"] && (a += "Diesel<br/>"), "yes" == b["fuel:electricity"] && (a += "Ladestation / Stromtankstelle<br/>"));return a;
},
    fnContentHistoric = function fnContentHistoric(b) {
    var a = "";if ("archaeological_site" == b.historic && b.site_type) switch (b.site_type) {case "megalith":
            a += "Megalith<br/>";break;case "bigstone":
            a += "Findling<br/>";break;case "tumulus":
            a += "H\xFCgelgrab<br/>";break;case "fortification":
            a += "historischer Graben / Wall<br/>";break;default:
            a += "unbekannt<br/>";}return a;
},
    fnContentBarriers = function fnContentBarriers(b, a) {
    var c = "";if ("wall" == b.barrier || "bollard" == b.barrier) b.material && (c += "Material: " + translate(b.material) + "<br/>");return c;
},
    fnContentTourism = function fnContentTourism(b) {
    var a = "";if ("camp_site" == b.tourism) {
        "yes" == b.dog && (a += "Hunde erlaubt<br/>");"no" == b.dog && (a += "Hunde nicht erlaubt<br/>");b.stars && (a += b.stars + "Sterne<br/>");b.caravans && (a += "Wohnmobilstellpl\xE4tze<br/>");if ("yes" == b.openfire || "yes" == b.fireplace) a += "Feuerstellen vorhanden<br/>";"yes" == b.washing_machine && (a += "Waschmaschinen<br/>");"yes" == b.dryer && (a += "Trockner<br/>");"yes" == b.group_only && (a += "Nutzung nur durch Gruppen<br/>");"reception" == b.camp_site && (a += "Reception vorhanden<br/>");
    }"information" == b.tourism && "map" == b.information && ("topo" == b.map_type && (a += "Topografische Karte</br>"), "street" == b.map_type && (a += "Stra\xDFenkarte</br>"), "scheme" == b.map_type && (a += "Schematische Karte</br>"), "toposcope" == b.map_type && (a += "Schematische Karte</br>"));"information" == b.tourism && "map" == b.information && ("site" == b.map_size && (a += "Karte einer Anlage</br>"), "city" == b.map_size && (a += "Stadtplan</br>"), "region" == b.map_size && (a += "Karte der Region</br>"));"geology" == b.board_type && (a += "Geologische Informationen<br/>");"history" == b.board_type && (a += "Historische Informationen<br/>");"nature" == b.board_type && (a += "Informationen \xFCber Natur<br/>");"notice" == b.board_type && (a += "Allgemeine Information<br/>");"plants" == b.board_type && (a += "Informationen \xFCber Pflanzen<br/>");"wildlife" == b.board_type && (a += "Informationen \xFCber Wild<br/>");return a;
},
    fnContentAmenity = function fnContentAmenity(b) {
    var a = "";"boat_sharing" == b.amenity && (a += b.boattype + "<br/>");"embassy" == b.amenity && (a += b.country + "<br/>");if (b.vending) switch (b.vending) {case "admission_tickets":
            a += "Tickets<br/>";break;case "animal_feed":
            a += "Tierfutter<br/>";break;case "books":
            a += "B\xFCcher<br/>";break;case "candles":
            a += "Kerzen<br/>";break;case "cigarettes":
            a += "Zigaretten<br/>";break;case "condoms":
            a += "Kondome<br/>";break;case "drinks":
            a += "Getr\xE4nke<br/>";break;case "first_aid":
            a += "Erste Hilfe Artikel<br/>";break;
        case "fishing_tackle":
            a += "Angelequipment<br/>";break;case "flowers":
            a += "Blumen<br/>";break;case "ice_cream":
            a += "Eis<br/>";break;case "laundry_detergent":
            a += "Waschmittel<br/>";break;case "newspapers":
            a += "Zeitung<br/>";break;case "SIM_cards":
            a += "SIM-Karten<br/>";break;case "sweets":
            a += "S\xFC\xDFigkeiten<br/>";break;case "parcel_pickup":
            a += "Paketstation<br/>";break;case "ice_cubes":
            a += "Eisw\xFCrfel<br/>";break;case "public_transport_tickets":
            a += "Tickets f\xFCr \xF6ffentliche Verkehrsmittel<br/>";
            break;case "parking_ticket":
            a += "Parkticket<br/>";break;case "sex_toys":
            a += "Sexspielzeug<br/>";break;case "stamps":
            a += "Briefmarken<br/>";break;case "toll":
            a += "Mauttickets<br/>";break;case "umbrellas":
            a += "Regenschirme<br/>";break;default:
            a += "Inhalt unbekannt<br/>";}"post_box" == b.amenity && (b.collection_times && (a += "Leerungszeiten: " + b.collection_times + "<br/>"), "yes" == b.drive_through && (a += "Vom Auto aus erreichbar. <br/>"));return a;
},
    fnContentStorage = function fnContentStorage(b) {
    var a = "";if ("storage_tank" == b.man_made) {
        if (b.content) {
            var c = b.content;switch (c) {case "fuel":
                    c = "Diesel";break;case "oil":
                    c = "\xD6l";break;case "gas":
                    c = "Gas";break;case "slurry":
                    c = "G\xFClle";break;case "cement":
                    c = "Zement";break;case "water":
                    c = "Wasser";break;case "manure":
                    c = "D\xFCnger";break;case "silage":
                    c = "Silage";}a += "Inhalt: " + c + "<br/>";
        }if (b.contents) {
            c = b.contents;switch (c) {case "fuel":
                    c = "Diesel";break;case "oil":
                    c = "\xD6l";break;case "gas":
                    c = "Gas";break;case "slurry":
                    c = "G\xFClle";break;case "cement":
                    c = "Zement";break;case "water":
                    c = "Wasser";break;
                case "manure":
                    c = "D\xFCnger";break;case "silage":
                    c = "Silage";}a += "Inhalt: " + c + "<br/>";
        }
    }b.storage && ("gas" == b.storage && (a += "Inhalt: Gas<br/>"), "oil" == b.storage && (a += "Inhalt: \xD6l<br/>"));return a;
},
    fnContentInformationCity = function fnContentInformationCity(b) {
    var a = "";b["name:de"] && (a += "deutscher Name: " + b["name:de"] + "<br/>");if (1E4 <= b.population) if (b.population = "" + b.population, 3 < b.population.length) {
        var c = b.population.length % 3,
            d = 0 < c ? b.population.substring(0, c) : "";for (i = 0; i < Math.floor(b.population.length / 3); i++) {
            d = 0 == c && 0 == i ? d + b.population.substring(c + 3 * i, c + 3 * i + 3) : d + ("." + b.population.substring(c + 3 * i, c + 3 * i + 3));
        }a += "Einwohnerzahl: " + d + "<br/>";
    } else a += "Einwohnerzahl " + b.population + "<br/>";1E4 >= b.population && (a += "Einwohnerzahl: " + b.population + "<br/>");return a;
},
    fnContentEmergency = function fnContentEmergency(b) {
    var a = "";b.lifeboat && ("inshore" == b.lifeboat ? a += "Einsatzgebiet: Inshore (Binnen)<br/>" : "offshore" == b.lifeboat && (a += "Einsatzgebiet: Offshore (Buten)<br/>"));b["lifeboat:class"] && (a += "Bootstyp: " + b["lifeboat:class"] + "<br/>");if (b["siren:type"]) {
        var c = b["siren:type"];switch (c) {case "mechanical":
                c = "mechanisch";break;case "electronic":
                c = "elektronisch";break;case "pneumatic":
                c = "pneumatisch";break;case "electromechanic":
                c = "elektromechanisch";}a += "Typ: " + c + "<br/>";
    }if (b["siren:purpose"]) {
        c = b["siren:purpose"];switch (c) {case "air_raid":
                c = "Luftschutz";break;case "tornado":
                c = "Tornado";break;case "storm":
                c = "Sturm";break;case "civil_defense":
                c = "Bev\xF6lkerungsschutz";break;case "fire":
                c = "Feuer";}a += "Nutzung: " + c + "<br/>";
    }b["siren:model"] && (a += "Model: " + b["siren:model"] + "<br/>");b["siren:range"] && (a += "H\xF6rweite: " + b["siren:range"] + "<br/>");return a;
},
    fnContentCuisine = function fnContentCuisine(b) {
    var a = "";if (b.cuisine) {
        var c = "",
            a = ("supermarket" == b.shop || "convenience" == b.shop || "deli" == b.shop || "organic" == b.shop) && "restaurant" != b.amenity ? a + "Spezialit\xE4ten: " : a + "K\xFCche: ";"arabic" == b.cuisine && (c += "arabisch<br/>");"italian" == b.cuisine && (c += " italienisch<br/>");"international" == b.cuisine && (c += " international<br/>");"regional" == b.cuisine && (c += " regional<br/>");"chinese" == b.cuisine && (c += " chinesisch<br/>");"greek" == b.cuisine && (c += " griechisch<br/>");"african" == b.cuisine && (c += " afrikanisch<br/>");"german" == b.cuisine && (c += " deutsch<br/>");"mexican" == b.cuisine && (c += " mexikanisch<br/>");"french" == b.cuisine && (c += " franz\xF6sisch<br/>");"indian" == b.cuisine && (c += " indisch<br/>");"iranian" == b.cuisine && (c += " iranisch<br/>");"lebanese" == b.cuisine && (c += " libanesisch<br/>");"thai" == b.cuisine && (c += " thail\xE4ndisch<br/>");"balkan" == b.cuisine && (c += " balkan<br/>");"turkish" == b.cuisine && (c += " t\xFCrkisch<br/>");"bavarian" == b.cuisine && (c += " bayrisch<br/>");"czech" == b.cuisine && (c += " tschechisch<br/>");"portuguese" == b.cuisine && (c += " portugiesisch<br/>");"spanish" == b.cuisine && (c += " spanisch<br/>");"japanese" == b.cuisine && (c += " japanisch<br/>");"fish" == b.cuisine && (c += " Fisch<br/>");"brazilian" == b.cuisine && (c += " brasilianisch<br/>");"asian" == b.cuisine && (c += " asiatisch<br/>");"mediterranean" == b.cuisine && (c += " mediterran<br/>");"seafood" == b.cuisine && (c += " Meeresfr\xFCchte<br/>");"ice_cream" == b.cuisine && (c += " Eiscrem<br/>");"burger" == b.cuisine && (c += " Fast Food<br/>");"frozen_yogurt" == b.cuisine && (c += " Frozen Yogurt<br/>");"" == c && (c = b.cuisine + "<br/>");a += c;
    }return a;
},
    fnContentShipping = function fnContentShipping(b) {
    var a = "";b.harbour = "yes";"yes" == b["access:tide"] && (a += "Zufahrtsbeschr\xE4nkung durch Tide</br>");"yes" == b["access:swell"] && (a += "Zufahrtsbeschr\xE4nkung durch Schwell</br>");"yes" == b["access:ice"] && (a += "Zufahrtsbeschr\xE4nkung durch Eis</br>");b.vhf_channel && (a += "UKW-Kanal: " + b.vhf_channel + "</br>");b.mmsi && (a += "MMSI-Nummer: " + b.mmsi + "</br>");b["harbour:information"] && (a += "Information :" + b["harbour:information"] + "</br>");"yes" == b.motorboat && (a += "Fahren mit Motor erlaubt</br>");"no" == b.motorboat && (a += "Fahren mit Motor nicht erlaubt</br>");b.CEMT && (a += "CEMT: " + b.CEMT + "</br>");"yes" == b.intermittent && (a += "Fluss zeitweise ausgetrocknet</br>");"yes" == b.tidal && (a += "Gezeiten beeinflussen die Str\xF6mung</br>");b.draft && (a += "Fahrwassertiefe: " + b.draft + " m</br>");if ("slipway" == b.leisure || "slipway" == b.harbour) "hand" == b.operating && (a += "Funktionsweise: Handbetrieb, Slipwagen<br/>"), "car" == b.operating && (a += "Funktionsweise: mit Auto, Bootsanh\xE4nger<br/>"), "cable_winch" == b.operating && (a += "Funktionsweise: Seilwinde<br/>"), "travellift" == b.operating && (a += "Funktionsweise: Travellift<br/>"), "crane" == b.man_made && (a += "mit Kran<br/>", b["crane:maxload"] && (a += "Maximale Last: " + b["crane:maxload"] + "<br/>"), b["ship:maxdraft"] && (a += "Maximaler Tiefgang: " + b["ship:maxdraft"] + "<br/>"), b["ship:maxlength"] && (a += "Maximale Bootsl\xE4nge: " + b["ship:maxlength"] + "<br/>")), "yes" == b.vehicle && (a += "Mit Fahrzeug erreichbar<br/>");a += fnWreckInfo(b);if ("ferry" == b.route || "ferry_terminal" == b.amenity || "yes" == b.ferry) {
        var c = b.duration;"" != c && "undefined" != c && null != c && (a += "Fahrtzeit in Std. : " + c + "<br/>");"yes" == b.motorcar && (a += "Autos erlaubt <br/>");"no" == b.motorcar && (a += "Autos nicht erlaubt <br/>");"no" == b.motor_vehicle && (a += "Fahrzeuge nicht erlaubt <br/>");"yes" == b.motor_vehicle && (a += "Fahrzeuge erlaubt <br/>");"yes" == b.vehicle && (a += "Fahrzeuge erlaubt <br/>");"no" == b.vehicle && (a += "Keine Fahrzeuge<br/>");"no" == b.bicycle && (a += "Keine Fahrr\xE4der<br/>");"no" == b.bicycle && (a += "Fahrr\xE4der erlaubt<br/>");"yes" == b.hgv && (a += "LKW erlaubt <br/>");"no" == b.hgv && (a += "LKW nicht erlaubt <br/>");"yes" == b.foot && (a += "Fussg\xE4nger erlaubt <br/>");"no" == b.foot && (a += "Fussg\xE4nger nicht erlaubt <br/>");"yes" == b.bicycle && (a += "Fahrradfahrer erlaubt <br/>");"no" == b.bicycle && (a += "Fahrradfahrer nicht erlaubt <br/>");"yes" == b["ferry:cable"] && (a += "Seilf\xE4hre<br/>");
    }if (b["seamark:light:1:colour"]) {
        c = b["seamark:light:1:colour"];switch (c) {case "white":
                c = "Wei\xDF";break;case "red":
                c = "Rot";break;case "green":
                c = "Gr\xFCn";break;case "blue":
                c = "Blau";break;case "yellow":
                c = "Gelb";break;case "amber":
                c = "Bernsteinfarben";}a += "Farbe des Lichts: " + c + "<br/>";
    }"lighthouse" == b.man_made && (b["seamark:light:1:character"] && (a += "Rhytmus des Lichtes: " + b["seamark:light:1:character"] + "<br/>"), b["seamark:light:1:period"] && (a += "Periode: " + b["seamark:light:1:period"] + "<br/>"), b["seamark:light:1:height"] && (a += "H\xF6he: " + b["seamark:light:1:height"] + " m<br/>"), b["seamark:light:1:range"] && (a += "Reichweite: " + b["seamark:light:1:range"] + " sm<br/>"));if (b["seamark:light:colour"]) {
        c = b["seamark:light:colour"];switch (c) {case "white":
                c = "Wei\xDF";break;case "red":
                c = "Rot";break;case "green":
                c = "Gr\xFCn";break;case "blue":
                c = "Blau";break;case "yellow":
                c = "Gelb";break;case "amber":
                c = "Bernsteinfarben";}a += "Farbe des Lichts: " + c + "<br/>";
    }"lighthouse" == b.man_made && (b["seamark:light:character"] && (a += "Rhytmus des Lichtes: " + b["seamark:light:character"] + "<br/>"), b["seamark:light:height"] && (a += "H\xF6he: " + b["seamark:light:height"] + " m<br/>"), b["seamark:light:range"] && (a += "Reichweite: " + b["seamark:light:range"] + " sm<br/>"), b["seamark:light:period"] && (a += "Periode: " + b["seamark:light:period"] + "<br/>"));return a;
},
    fnContentHydrants = function fnContentHydrants(b) {
    var a = "";if ("fire_hydrant" == b.emergency) {
        var c = b["fire_hydrant:count"];"undefined" != c && null != c && "" != c && (a += "Anzahl: " + c + "<br/>");c = b["fire_hydrant:diameter"];
        "undefined" != c && null != c && "" != c && (a += "Rohrdurchmesser: " + c + " mm<br/>");c = b["fire_hydrant:pressure"];"undefined" != c && null != c && "" != c && (a = "suction" == c ? a + "Druck in bar / Saugleitung: Saugleitung<br/>" : a + ("Druck in bar / Saugleitung: " + c + "<br/>"));c = b["fire_hydrant:position"];"undefined" != c && null != c && "" != c && ("lane" == c ? a += "Position: Fahrbahn<br/>" : "parking_lot" == c ? a += "Position: Parkbucht<br/>" : "sidewalk" == c ? a += "Position: B\xFCrgersteig<br/>" : "green" == c && (a += "Position: Wiese<br/>"));c = b.water_volume;
        "undefined" != c && null != c && "" != c && (a += "Volumen: " + c + "<br/>");c = b["fire_hydrant:awwa_class"];"undefined" != c && null != c && "" != c ? a += "AWWA Klasse: " + c + "<br/>" : (c = b.flow_rate, "undefined" != c && null != c && "" != c && (a += "Durchfluss: " + c + "<br/>"));c = b.water_source;"undefined" != c && null != c && "" != c && "main" != c && (a += "Wasserquelle: " + c + "<br/>");c = b["couplings:type"];"undefined" != c && null != c && "" != c && (a += "Kopplungstyp: " + c + "<br/>");c = b["couplings:diameter"];"undefined" != c && null != c && "" != c && (a += "Kopplungsdurchmesser: " + c + "<br/>");c = b["pillar:type"];"dry_barrel" === c && (a += "Typ \xDCberflurhydrant: " + c + "<br/>");"fire_hydrant" === b["disused:emergency"] && (a += "Aktuell unbrauchbar.");"" == a && (a = "Keine Details vorhanden.");
    }return a;
},
    fnContentStreetsTraffic = function fnContentStreetsTraffic(b) {
    var a = "";"yes" == b["red_turn:right"] && (a += "Ampel mit Gr\xFCnpfeil<br/>");"no" == b["red_turn:right"] && (a += "Ampel ohne Gr\xFCnpfeil<br/>");b.bridge && (b.height && (a += "H\xF6he \xFCber dem Grund: " + b.height + " m<br/>"), b.length && (a += "L\xE4nge der Br\xFCcke: " + b.length + " m<br/>"), b.bridge_ref && (a += "Bauwerksnummer: " + b.bridge_ref + "<br/>"), b.start_date && (a += "Baujahr: " + b.start_date + "</br>;"), b.maxweight && (a += "Tragf\xE4higkeit: " + b.maxweight + " t</br>"));b.highway && "yes" == b.toll && (a += "Mautpflichtige Stra\xDFe<br/>");"yes" == b["toll:hgv"] && (a += "Mautpflichtige Stra\xDFe f\xFCr LKWs<br/>");if (b.surface) {
        var c = b.surface,
            a = a + "Oberfl\xE4che: ";switch (c) {case "grass":
                a += "Gras<br/>";break;case "paved":
                a += "versiegelt<br/>";break;case "asphalt":
                a += "Asphalt<br/>";
                break;case "cobblestone":
                a += "Naturstein unbehauen<br/>";break;case "sett":
                a += "behauenes Steinpflaster<br/>";break;case "concrete":
                a += "Beton<br/>";break;case "unpaved":
                a += "ohne Stra\xDFenbelag<br/>";break;case "paving_stones":
                a += "Pflastersteine<br/>";break;case "compacted":
                a += "verdichtete Deckschicht aus Natursteinmaterial<br/>";break;case "dirt":
                a += "unbefestigt<br/>";break;case "fine_gravel":
                a += "Splitt/Kies<br/>";break;case "grass_paver":
                a += "Rasengittersteine<br/>";break;case "gravel":
                a += "Schotter<br/>";
                break;case "earth":
                a += "naturbelassene Oberfl\xE4che<br/>";break;case "ground":
                a += "naturbelassene Oberfl\xE4che<br/>";break;case "metal":
                a += "Metall<br/>";break;case "mud":
                a += "Matsch, Morast<br/>";break;case "sand":
                a += "Sand<br/>";break;case "wood":
                a += "Holz<br/>";break;case "tartan":
                a += "Tartan- oder Kunststoffbelag<br/>";break;case "artificial_turf":
                a += "Kunstrasen<br/>";break;case "clay":
                a += "Ascheplatz<br/>";break;default:
                a += "unbekannt<br/>";}
    }"grade1" == b.tracktype && (a += "Wegbeschaffenheit: Befestigter Weg (Asphalt, Beton oder Pflastersteine)<br/>");
    "grade2" == b.tracktype && (a += "Wegbeschaffenheit: Befestigter Weg (Schotter oder andere verdichtete Materialien)<br/>");"grade3" == b.tracktype && (a += "Wegbeschaffenheit: Befestigter oder ausgebesserter Weg, der harten und weichen Untergrund enth\xE4lt (z. B. Feinschotter-, Sand- oder Erdweg)<br/>");"grade4" == b.tracktype && (a += "Wegbeschaffenheit: Unbefestigter Weg, haupts\xE4chlich weiche Materialien, Pflanzenwuchs entlang der Spurmitte (z. B. Gras-, Sand- oder Erdweg)<br/>");"grade5" == b.tracktype && (a += "Wegbeschaffenheit: Unbefestigter Weg, Oberfl\xE4che besteht aus Sand, Erde etc., oft nur Abdruck in Gras, teilweise schwer von umgebendem Gel\xE4nde unterscheidbar<br/>");"yes" == b.motorcycle && (a += "<br/>mit dem Auto befahrbar.<br/>");"no" == b.motorcycle && (a += "<br/>keine motorisierten Fahrzeuge zugelassen.<br/>");"excellent" == b.trail_visibility && (a += "Wegerkennbarkeit: Gut ausgewiesener Weg<br/>");"good" == b.trail_visibility && (a += "Wegerkennbarkeit: Wegmarkierung sichbar, aber manchmal etwas schwer zu finden<br/>");
    "intermediate" == b.trail_visibility && (a += "Wegerkennbarkeit: Weg nicht durchgegend sichbar<br/>");"bad" == b.trail_visibility && (a += "Wegerkennbarkeit: Wegspur ist kaum zu erkennen<br/>");"horrible" == b.trail_visibility && (a += "Wegerkennbarkeit: Oft kein Weg vorhanden<br/>");"no" == b.trail_visibility && (a += "Wegerkennbarkeit: Meistens keine Wegspur zu erkennen<br/>");"hiking" == b.sac_scale && (a += "Weg: Weg gut gebahnt. (Schwierigskeitstyp: 1)</br>");"mountain_hiking" == b.sac_scale && (a += "Weg: Durchgehend gut ersichtlicher und gut begehbarer Weg (Schwierigskeitstyp: 2)</br>");
    "demanding_mountain_hiking" == b.sac_scale && (a += "Weg: Heikle Stellen k\xF6nnen mit Seilen oder Ketten gesichert sein. Leitern sind m\xF6glich. Eventuell sind die H\xE4nde f\xFCrs Gleichgewicht n\xF6tig. (Schwierigskeitstyp: 3)</br>");"alphine_hiking" == b.sac_scale && (a += "Weg: Wegspur kaum vorhanden. An gewissen Stellen ben\xF6tigt man die H\xE4nde zum weiterkommen (Schwierigskeitstyp: 4)</br>");"demanding_alphine_hiking" == b.sac_scale && (a += "Weg: Oft weglos, einzelne einfache Kletterstellen bis II. (Schwierigskeitstyp: 5)</br>");
    "difficult_alpine_hiking" == b.sac_scale && (a += "Weg: Schwieriges Alpinenwandern,Kletterstellen bis II. Schwierigskeitstyp: 6</br>");b["mtb:name"] && (a += "Fahrradstrecke :" + b["mtb:name"] + "</br>");"0" == b["mtb:scale"] && (a += "Mountainbikestrecke: Keine besondere Schwierigkeiten.</br>Wegbeschaffenheit: fester und griffiger Untergrund.</br>Hindernisse: Keine Hindernisse</br>Gef\xE4lle: Leicht bis m\xE4\xDFig</br>Kurven: weit</br>Fahrtechnik: keine besonderes fahrtechnisches K\xF6nnen n\xF6tig</br>");
    "1" == b["mtb:scale"] && (a += "Mountainbikestrecke: Der Weg enth\xE4lt flache Wurzeln und kleinere Steine. H\xE4ufig auch vereizelte Wasserrinnen und Erosionssch\xE4den</br>Wegbeschaffenheit: loserer Untergrund m\xF6glich, kleine Wurzeln und Steine</br>Hindernisse: kleine Hindernisse, Wasserrinnen, Erosionssch\xE4den</br>Gef\xE4lle: bis zu 40%</br>Kurven: eng</br>Fahrtechnik: Fahrtechnische Grundkentnisse n\xF6tig. Hindernisse k\xF6nnen \xFCberrollt werden</br>");"2" == b["mtb:scale"] && (a += "Mountainbikestrecke: Der Weg enth\xE4lt gr\xF6\xDFere Wurzeln und Steine. H\xE4ufig auch vereizelte Wasserrinnen und Erosionssch\xE4den</br>Wegbeschaffenheit: Untergrund meist nicht verfestigt, gr\xF6\xDFere Wurzeln und Steine</br>Hindernisse:  flache Abs\xE4tze und Treppen</br>Gef\xE4lle: bis zu 70%</br>Kurven: leichte Spitzkehren</br>Fahrtechnik: Fortgeschrittene Fahrtechnik n\xF6tig.</br>");"3" == b["mtb:scale"] && (a += "Mountainbikestrecke: Auf dem Weg findet man verblockte Singletrails mit vielen gr\xF6\xDFeren Felsbrocken und/oder Wurzelpassagen</br>Wegbeschaffenheit: verblockt, viele gro\xDFe Wurzeln/Felsen - rutschiger Untergrund, loses Ger\xF6ll</br>Hindernisse:  hohe Abs\xE4tze</br>Gef\xE4lle: 70% oder mehr</br>Kurven: enge Spitzkehren</br>Fahrtechnik: Sehr gute Bike-Beherrschung n\xF6tig.</br>");
    "4" == b["mtb:scale"] && (a += "Mountainbikestrecke: Auf dem Weg sind sehr steile und stark verblockte Singletrails mit gro\xDFen Felsbrocken und/oder anspruchsvollen Wurzelpassagen, dazwischen h\xE4ufig loses Ger\xF6ll und extreme Steilrampen</br>Wegbeschaffenheit: verblockt, viele gro\xDFe Wurzeln/Felsen - rutschiger Untergrund, loses Ger\xF6ll</br>Hindernisse:  Steilrampen, kaum fahrbare Abs\xE4tze</br>Gef\xE4lle: 70% oder mehr</br>Kurven:  \xD6senartige Spitzkehren</br>Fahrtechnik: Perfekte Bike-Beherrschung mit Trial-Techniken n\xF6tig.</br>");
    "5" == b["mtb:scale"] && (a += "Mountainbikestrecke: Der weg wird charakterisiert durch blockartiges Gel\xE4nde mit Gegenanstiegen, Ger\xF6llfeldern und Erdrutschen, \xF6senartigen Spitzkehren, mehreren hohen, direkt aufeinanderfolgenden Abs\xE4tzen und Hindernissen wie umgefallenen B\xE4umen</br>Wegbeschaffenheit: verblockt mit Gegenanstiegen / rutschiger Untergrund, loses Ger\xF6ll / der Weg ist eher ein Wandersteig</br>Hindernisse:  Steilrampen, kaum fahrbare Abs\xE4tze</br>Gef\xE4lle: 70% oder mehr</br>Kurven:  \xD6senartige Spitzkehren mit Hindernissen</br>Fahrtechnik: excellente Bike-Beherrschung spezieller Trial-Techniken n\xF6tig.</br>");
    "6" == b["mtb:scale"] && (a += "Mountainbikestrecke: Der weg ist hochanspruchsvoll, und selbst f\xFCr Profis und Trial-Fahrer nicht passierbar</br>Wegbeschaffenheit:  Gro\xDFteils nur noch kletterbar</br>Hindernisse: Abs\xE4tze > 2 m, Leitern, Trittstufen, Kletterstellen bei denen man beide H\xE4nde braucht.</br>Gef\xE4lle: 100% oder mehr</br>Kurven: - </br>Fahrtechnik:  hier reicht auch die beste Fahrtechnik nicht mehr</br>");"10" == b.maxspeed && (a += "Vekehrsber\xFChigter Bereich. Hier gilt eine maximale Fahrgeschwindigkeit von 10 Km/h sowie die Regel rechts vor links.</br>");
    "30" == b.maxspeed && (a += "Vekehrsber\xFChigter Bereich. Hier gilt rechts vor links sowie eine maximale Geschwindigkeit von 30 Km/h</br>");"50" == b.maxspeed && (a += "Maximal erlaubte Geschwindigkeit von 50 Km/h darf nicht \xFCberschritten werden </br>");"70" == b.maxspeed && (a += "Maximal erlaubte Geschwindigkeit von 50 Km/h darf nicht \xFCberschritten werden </br>");"80" == b.maxspeed && (a += "Maximale Geschwindigkeit von 80 Km/h darf nicht \xFCberschritten werden.</br>");"100" == b.maxspeed && (a += "Maximale Geschwindigkeit von 100 Km/h darf nicht \xFCberschritten werden.</br>");
    "no" == b.overtaking && (a += "\xDCberholverbot, Fahrzeuge d\xFCrfen nicht \xFCberholen !</br>");"yes" == b.noexit && (a += "Die Stra\xDFe endet hier, es handelt sich um eine Sackgasse</br>");"yes" == b.oneway && (a += "Es handelt sich hier um eine Einbahnstra\xDFe, sie d\xFCrfen diese Stra\xDFe nur in eine Richtung befahren</br>");"designated" == b.priority_road && (a += "Es handelt sich hierbei um eine Vorfahrtsstra\xDFe, derjenige, der sich auf dieser befindet, hat gegen\xFCber anderen Fahrzeugen die Vorfahrt!</br>");
    "end" == b.priority_road && (a += "Die Vorfahrtsstra\xDFe endet hier und die Regelung wird aufgehoben</br>");"emergency_bay" == b.highway && (a += "Hier befindet sich eine Bucht die nur in Notf\xE4llen zur Benuzung zur Verf\xFCgung steht</br>");"yes" == b.traffic_calming && (a += "Verkehrsberuhigter Bereich</br>");"bump" == b.traffic_calming && (a += "Kurze Bodenwelle</br>");"chicane" == b.traffic_calming && (a += "Zu umfahrendenes Hinderniss</br>");"choker" == b.traffic_calming && (a += "Fahrbahnverengung, zu umfahrende Hindernisse m\xF6glich</br>");
    "cushion" == b.traffic_calming && (a += "Bodenwelle mit L\xFCcken aus mehreren rechteckigen Huckeln</br>");"hump" == b.traffic_calming && (a += "vergleichbare Bodenwelle mit etwar einer L\xE4nge von 2-4M</br>");"island" == b.traffic_calming && (a += "Eine Verkehrsinsel</br>");"rumble_strip" == b.traffic_calming && (a += "Holperstreifen</br>");"table" == b.traffic_calming && (a += "lange Bodenwellen mit flachen Mittelst\xFCck</br>");if ("parking" == b.amenity && ("yes" == b.fee && (a += "kostenpflichtig<br/>"), c = b["capacity:women"], "" != c && "no" != c && null != c)) {
        var d = "unbekannt";"yes" != c && (d = c);a += "Frauenparkpl\xE4tze (Anzahl: " + d + ") <br/>";
    }b.park_ride && ("bus" == b.park_ride && (a += "Busanbindung<br/>"), "tram" == b.park_ride && (a += "Bahnanbindung<br/>"), "unknown" == b.park_ride && (a += "Verkehrsmittel unbekannt<br/>"));b["railway:position"] && (a += "Streckenkilometer<br/>Position: " + b["railway:position"] + "<br/>");b.uic_ref && (a += "UIC: " + b.uic_ref + "<br/>");return a;
},
    fnContentSports = function fnContentSports(b) {
    var a = "";"9pin" == b.sport && (a += "M\xF6gliche Sportart: Kegeln<br/>");
    "10pin" == b.sport && (a += "M\xF6gliche Sportart: Bowling<br/>");"american_football" == b.sport && (a += "M\xF6gliche Sportart: American Football<br/>");"aikido" == b.sport && (a += "M\xF6gliche Sportart: Aikido<br/>");"archery" == b.sport && (a += "M\xF6gliche Sportart: Bogenschie\xDFen<br/>");"athletics" == b.sport && (a += "M\xF6gliche Sportart: Leichtathletik<br/>");"australian_football" == b.sport && (a += "M\xF6gliche Sportart: Australian Football<br/>");"base" == b.sport && (a += "M\xF6gliche Sportart: Objektspringen<br/>");
    "badminton" == b.sport && (a += "M\xF6gliche Sportart: Badminton<br/>");"baseball" == b.sport && (a += "M\xF6gliche Sportart: Baseball<br/>");"basketball" == b.sport && (a += "M\xF6gliche Sportart: Basketball<br/>");"beachvolleyball" == b.sport && (a += "M\xF6gliche Sportart: Beachvolleyball<br/>");"bmx" == b.sport && (a += "M\xF6gliche Sportart: BMX<br/>");"boules" == b.sport && (a += "M\xF6gliche Sportart: Boccia<br/>");"boule" == b.sport && (a += "M\xF6gliche Sportart: Boccia<br/>");"bowls" == b.sport && (a += "M\xF6gliche Sportart: Bowls<br/>");
    "boxing" == b.sport && (a += "M\xF6gliche Sportart: Boxen<br/>");"canadian_football" == b.sport && (a += "M\xF6gliche Sportart: Canadian Football<br/>");"canoe" == b.sport && (a += "M\xF6gliche Sportart: Paddeln<br/>");"chess" == b.sport && (a += "M\xF6gliche Sportart: Schach<br/>");"cliff_diving" == b.sport && (a += "M\xF6gliche Sportart: Klippenspringen<br/>");"climbing" == b.sport && (a += "M\xF6gliche Sportart: Klettern<br/>");"climbing_adventure" == b.sport && (a += "M\xF6gliche Sportart: Klettern<br/>");"cricket" == b.sport && (a += "M\xF6gliche Sportart: Cricket<br/>");"cricket_nets" == b.sport && (a += "M\xF6gliche Sportart: Cricket Netz<br/>");"croquet" == b.sport && (a += "M\xF6gliche Sportart: Croquet<br/>");"curling" == b.sport && (a += "M\xF6gliche Sportart: Curling<br/>");"cycling" == b.sport && (a += "M\xF6gliche Sportart: Radrennen, Radsport<br/>");"dog_racing" == b.sport && (a += "M\xF6gliche Sportart: Hunderennen<br/>");if ("darts" == b.sport || "dart" == b.sport) a += "Darts<br/>";"fencing" == b.sport && (a += "M\xF6gliche Sportart: Fechten<br/>");
    "equestrian" == b.sport && (a += "M\xF6gliche Sportart: Reiten<br/>");"football" == b.sport && (a += "M\xF6gliche Sportart: American Football<br/>");"free_flying" == b.sport && (a += "M\xF6gliche Sportart: Freeflying<br/>");"gaelic_games" == b.sport && (a += "M\xF6gliche Sportart: Gaelic games<br/>");"golf" == b.sport && (a += "M\xF6gliche Sportart: Golf<br/>");"gymnastics" == b.sport && (a += "M\xF6gliche Sportart: Gymnastik<br/>");"hockey" == b.sport && (a += "M\xF6gliche Sportart: Hockey<br/>");"horseshoes" == b.sport && (a += "M\xF6gliche Sportart: Hufeisenwerfen<br/>");"horse_racing" == b.sport && (a += "M\xF6gliche Sportart: Pferderennen<br/>");"ice_stock" == b.sport && (a += "M\xF6gliche Sportart: Eisstockschie\xDFen<br/>");"judo" == b.sport && (a += "M\xF6gliche Sportart: Judo<br/>");"karting" == b.sport && (a += "M\xF6gliche Sportart: Kartfahren<br/>");"kitesurfing" == b.sport && (a += "M\xF6gliche Sportart: Kitesurfing<br/>");"korfball" == b.sport && (a += "M\xF6gliche Sportart: Korfball<br/>");"motor" == b.sport && (a += "M\xF6gliche Sportart: Motorsport<br/>");
    "multi" == b.sport && (a += "M\xF6gliche Sportart: Mehrfachsport<br/>");"obstacle_course" == b.sport && (a += "M\xF6gliche Sportart: Hindernislauf<br/>");"orienteering" == b.sport && (a += "M\xF6gliche Sportart: Orientierungslauf<br/>");"paddle_tennis" == b.sport && (a += "M\xF6gliche Sportart: Paddle-Tennis<br/>");"paragliding" == b.sport && (a += "M\xF6gliche Sportart: Gleitschirmfliegen<br/>");"Pelota" == b.sport && (a += "M\xF6gliche Sportart: Pelota<br/>");"rasquet" == b.sport && (a += "M\xF6gliche Sportart: Racquetball<br/>");
    "rowing" == b.sport && (a += "M\xF6gliche Sportart: Rudern<br/>");"rugby_league" == b.sport && (a += "M\xF6gliche Sportart: Rugby League<br/>");"rugby_union" == b.sport && (a += "M\xF6gliche Sportart: Rugby Union<br/>");"running" == b.sport && (a += "M\xF6gliche Sportart: Laufsport<br/>");"scuba_diving" == b.sport && (a += "M\xF6gliche Sportart: Sporttauchen<br/>");"shooting" == b.sport && (a += "M\xF6gliche Sportart: Sportschie\xDFen<br/>");"skating" == b.sport && (a += "M\xF6gliche Sportart: Eislaufsport<br/>");"skateboard" == b.sport && (a += "M\xF6gliche Sportart: Skateboard<br/>");"skiing" == b.sport && (a += "M\xF6gliche Sportart: Skifahren<br/>");"soccer" == b.sport && (a += "M\xF6gliche Sportart: Fu\xDFball<br/>");"surfing" == b.sport && (a += "M\xF6gliche Sportart: Surfen<br/>");"swimming" == b.sport && (a += "M\xF6gliche Sportart: Schwimmen<br/>");"table_tennis" == b.sport && (a += "M\xF6gliche Sportart: Tischtennis<br/>");"taekwondo" == b.sport && (a += "M\xF6gliche Sportart: Taekwondo<br/>");"team_handball" == b.sport && (a += "M\xF6gliche Sportart: Handball<br/>");
    "tennis" == b.sport && (a += "M\xF6gliche Sportart: Tennis<br/>");"toboggan" == b.sport && (a += "M\xF6gliche Sportart: Rodeln<br/>");"volleyball" == b.sport && (a += "M\xF6gliche Sportart: Volleyball<br/>");"water_ski" == b.sport && (a += "M\xF6gliche Sportart: Wasserski<br/>");"weightlifting" == b.sport && (a += "M\xF6gliche Sportart: Gewichtheben<br/>");"wrestling" == b.sport && (a += "M\xF6gliche Sportart: Ringen<br/>");return a;
};
function fnArztInfo(b) {
    var a = "",
        c = "",
        d = b["healthcare:speciality"];"" != d && ("general" == d && (c += "Allgemeinmedizin<br/>"), "allergology" == d && (c += "Allergologie<br/>"), "anaesthetics" == d && (c += "An\xE4sthesiologie<br/>"), "biochemistry" == d && (c += "Medizinische und chemische Labordiagnostik<br/>"), "biological_haematology" == d && (c += "Biologische H\xE4matologie<br/>"), "biology" == d && (c += "Medizinische Biologie<br/>"), "cardiology" == d && (c += "Kardiologie<br/>"), "cardiac_surgery" == d && (c += "Kardiovaskularchirurgie<br/>"), "child_psychiatry" == d && (c += "Kinder- u. Jugendpsychatrie<br/>"), "dental_oral_maxillo_facial_surgery" == d && (c += "Zahn-, Mund-, Kiefer- und Gesichtschirurgie<br/>"), "dermatology" == d && (c += "Hautkrankheiten<br/>"), "dermatovenereology" == d && (c += "Haut- und Geschlechtskrankheiten<br/>"), "diagnostic_radiology" == d && (c += "Diagnostische Radiologie<br/>"), "emergency" == d && (c += "Unfall- und Notfallmedizin<br/>"), "endocrinology" == d && (c += "Endokrinologie<br/>"), "gastroenterological_surgery" == d && (c += "Gastroenterologische Chirurgie<br/>"), "gastroenterology" == d && (c += "Gastroenterologie<br/>"), "geriatrics" == d && (c += "Geriatrie<br/>"), "gynaecology" == d && (c += "Geburtshilfe und Frauenheilkunde<br/>"), "haematology" == d && (c += "Allgemeine H\xE4matologie<br/>"), "hepatology" == d && (c += "Hepatologie<br/>"), "immunology" == d && (c += "Immunologie<br/>"), "infectious_diseases" == d && (c += "Ansteckende Krankheiten<br/>"), "intensive" == d && (c += "Intensivmedizin<br/>"), "internal" == d && (c += "Allgemeine (innere) Medizin<br/>"), "maxillofacial_surgery" == d && (c += "Mund-Kiefer-Gesichtschirurgie<br/>"), "nephrology" == d && (c += "Nierenkrankheiten<br/>"), "neurology" == d && (c += "Neurologie<br/>"), "neurophysiology" == d && (c += "Klinische Neurophysiologie<br/>"), "neuropsychiatry" == d && (c += "Neuropsychiatrie(Neurologie und Psychiatrie)<br/>"), "neurosurgery" == d && (c += "Neurochirurgie<br/>"), "nuclear" == d && (c += "Nuklearmedizin<br/>"), "occupational" == d && (c += "Arbeitsmedizin <br/>"), "oncology" == d && (c += "Onkologie<br/>"), "ophthalmology" == d && (c += "Augenheilkunde<br/>"), "orthopaedics" == d && (c += "Orthop\xE4die<br/>"), "otolaryngology" == d && (c += "Hals-Nasen-Ohren-Heilkunde<br/>"), "paediatric_surgery" == d && (c += "Kinderchirurgie<br/>"), "paediatrics" == d && (c += "Kinderheilkunde<br/>"), "palliative" == d && (c += "Palliativmedizin<br/>"), "physiatry" == d && (c += "Physikalischeund Rehabilitative Medizin<br/>"), "plastic_surgery" == d && (c += "Plastische Chirurgie<br/>"), "proctology" == d && (c += "Proktologie<br/>"), "psychiatry" == d && (c += "Psychiatrie<br/>"), "pulmonology" == d && (c += "Lungen- und Bronchialheilkunde<br/>"), "radiology" == d && (c += "Radiologie<br/>"), "radiotherapy" == d && (c += "Strahlentherapie<br/>"), "rheumatology" == d && (c += "Rheumatologie<br/>"), "stomatology" == d && (c += "Stomatologie<br/>"), "surgery" == d && (c += "Chirurgie<br/>"), "surgical_oncology" == d && (c += "Krebschirurgie<br/>"), "thoracic_surgery" == d && (c += "Thoraxchirurgie<br/>"), "transplant" == d && (c += "Transplantationsmedizin<br/>"), "trauma" == d && (c += "Unfallchirurgie<br/>"), "tropical" == d && (c += "Tropenmedizin<br/>"), "urology" == d && (c += "Urologie<br/>"), "vascular_surgery" == d && (c += "Gef\xE4\xDFchirurgie<br/>"), "venereology" == d && (c += "Geschlechtskrankheiten<br/>"), "acupuncture" == d && (c += "Akupunktur<br/>"), "naturopathy" == d && (c += "Naturheilkunde<br/>"), "chiropractic" == d && (c += "Chiropraktik <br/>"), "homeopathy" == d && (c += "Hom\xF6opathie<br/>"), "osteopathy" == d && (c += "Osteopathie<br/>"));"" != b.health_specialty && ("yes" == b["health_specialty:family_medicine"] && (c += "Allgemeinmedizin<br/>"), "yes" == b["health_specialty:emergency_medicine"] && (c += "Notfallmedizin<br/>"), "yes" == b["health_specialty:anaesthesiology"] && (c += "An\xE4sthesie<br/>"), "yes" == b["health_specialty:dermatology"] && (c += "Dermatologie<br/>"), "yes" == b["health_specialty:ear_nose_throat"] && (c += "Hals, Nasen, Ohren (HNO)<br/>"), "yes" == b["health_specialty:occupational_medicine"] && (c += "Arbeitsnmedizin<br/>"), "yes" == b["health_specialty:internal_medicine"] && (c += "innere Medizin<br/>"), "yes" == b["health_specialty:neurology"] && (c += "Neurologie<br/>"), "yes" == b["health_specialty:ophthalmology"] && (c += "Augenheilkunde<br/>"), "yes" == b["health_specialty:palliative_medicine"] && (c += "Palliativmedizin<br/>"), "yes" == b["health_specialty:psychiatry"] && (c += "Psychatrie<br/>"), "yes" == b["health_specialty:gynaecology"] && (c += "Gyn\xE4kologie<br/>"), "yes" == b["health_specialty:urology"] && (c += "Urologie<br/>"), "yes" == b["health_specialty:pain_medicine"] && (c += "Schmerzmedizin<br/>"), "yes" == b["health_specialty:environmental_medicine"] && (c += "Umweltmedizin<br/>"), "yes" == b["health_specialty:intensive_care_medicin"] && (c += "Intensivmedizin<br/>"), "yes" == b["health_specialty:paediatrics"] && (c += "Kinder- u. Jugendmedizin<br/>"), "yes" == b["health_specialty:physiatry"] && (c += "Physikalische und Rehabilitative Medizin<br/>"), "yes" == b["health_specialty:radiology"] && (c += "Radiologie<br/>"), "yes" == b["health_specialty:general"] && (c += "Allgemeinmedizin<br/>"), "yes" == b["health_specialty:occupational_therapy"] && (c += "Ergotherapie<br/>"), "yes" == b["health_specialty:pulmonology"] && (c += "Pneumologie<br/>"), "yes" == b["health_specialty:acupuncture"] && (c += "Akupunktur<br/>"), "yes" == b["health_specialty:orthopaedics"] && (c += "Orthop\xE4die<br/>"), "yes" == b["health_specialty:chiropractic"] && (c += "Chiropraktik<br/>"), "yes" == b["health_specialty:sports_medicine"] && (c += "Sportmedizin<br/>"));"" != c && (a = a + "Fachgebiete: " + ('<div class="c4g_open_text">' + c + "</div>"));return a;
}
function fnKraftwerkInfo(b) {
    var a = "";if (b["generator:method"]) {
        a += "Erzeugungsart: ";switch (b["generator:method"]) {case "combustion":
                a += "Verbrennung";break;case "thermal":
                a += "thermische Nutzung (z.B. Solarthermie)";break;case "pumping":
                a += "durch Pumpen (z.B. die Nutzung von Geothermie)";break;case "photovoltaic":
                a += "Photovoltaik";break;case "gasification":
                a += "Vergasung, danach Verbrennung";break;case "anaerobic_digestion":
                a += "Erzeugung von Biogas durch Verg\xE4rung";break;case "pyrolysis":
                a += "Pyrolyse, Aufspaltung durch hohe Temperaturen";
                break;case "fission":
                a += "Kernspaltung";break;case "fusion":
                a += "Kernfusion";break;default:
                a += "unbekannt<br/>";}a += "<br/>";
    }if (b.power_source) {
        a += "Erzeugungsart: ";switch (b.power_source) {case "photovoltaic":
                a += "Photovoltaik";break;default:
                a += "unbekannt<br/>";}a += "<br/>";
    }b["generator:output:electricity"] && (a += "elekt. Energieerzeugung: " + b["generator:output:electricity"] + "<br/>");b["generator:output:heat"] && (a += "therm. Energieerzeugung: " + b["generator:output:heat"] + "<br/>");b["generator:output:cold"] && (a += "therm. Energieerzeugung: " + b["generator:output:cold"] + "<br/>");b["generator:output"] && (a += "Nennleistung: " + b["generator:output"] + "<br/>");b["generator:output:hot_air"] && (a += "Art des Transportmediums: " + b["generator:output:hot_air"] + "<br/>");b["generator:output:cold_water"] && (a += "Art des Transportmediums: " + b["generator:output:cold_water"] + "<br/>");b["generator:output:cold_air"] && (a += "Art des Transportmediums: " + b["generator:output:cold_air"] + "<br/>");b["generator:output:compressed_air"] && (a += "Art des Transportmediums: " + b["generator:output:compressed_air"] + "<br/>");b["generator:output:steam"] && (a += "Art des Transportmediums: " + b["generator:output:steam"] + "<br/>");b["generator:output:vacuum"] && (a += "Art des Transportmediums: " + b["generator:output:vacuum"] + "<br/>");b["generator:output:battery_charging"] && (a += "Art des Transportmediums: " + b["generator:output:battery_charging"] + "<br/>");"PWR" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");"BWR-1" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");"BWR-2" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");"BWR-3" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");"BWR-4" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");"BWR-5" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");"BWR-6" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");"PHWR" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");"GCR" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");"FBR" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");"RBMK-1000" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");"RBMK-1500" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");"VVER" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");"CANDU" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");"CPR-1000" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");"EPR" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");"tokamak" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");"stellarator" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");"ICF" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");"cold-fusion" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");"wind_turbine" == b["generator:method"] && "horizontal_axis" == b["generator:type"] && (a += "Generatortyp: Horizontal-Achsen Windenergieanlage<br/>");"wind_turbine" == b["generator:method"] && "vertical_turbine" == b["generator:type"] && (a += "Generatortyp: Vertikalrotor<br/>");"francis_turbine" == b["generator:type"] && (a += "Generatortyp: Francis-Turbine<br/>");"kaplan_turbine" == b["generator:type"] && (a += "Generatortyp: Kaplan-Turbine<br/>");"pelton_turbine" == b["generator:type"] && (a += "Generatortyp: Pelton-Turbine<br/>");"stream" == b["generator:method"] && "horizontal_axis" == b["generator:type"] && (a += "Generatortyp: Gezeitenstromgenerator mit horizontaler Achse<br/>");"stream" == b["generator:method"] && "vertical_axis" == b["generator:type"] && (a += "Generatortyp: Gezeitenstromgenerator mit vertikaler Achse<br/>");"steam_turbine" == b["generator:type"] && (a += "Generatortyp: Dampfturbine<br/>");"heat_pump" == b["generator:type"] && (a += "Generatortyp: W\xE4rmepumpe<br/>");"solar_thermal_collector" == b["generator:type"] && (a += "Generatortyp: Sonnenkollektor<br/>");"solar_photovoltaic_panel" == b["generator:type"] && (a += "Generatortyp: Photovoltaic-System<br/>");"steam_generator" == b["generator:type"] && (a += "Generatortyp: Dampfgenerator<br/>");"gas_turbine" == b["generator:type"] && (a += "Generatortyp: Gasturbine<br/>");"combined_cycle" == b["generator:type"] && (a += "Generatortyp: Dampfgenerator<br/>");"reciprocating_engine" == b["generator:type"] && (a += "Generatortyp: Verbrennungsmotor/Blockheizkraftwerk<br/>");return a;
}
function fnWertstoffinfo(b) {
    var a = "";if ("container" == b.recycling_type || "centre" == b.recycling_type || "recycling" == b.amenity) "yes" == b["recycling:glass"] && (a += "Altglascontainer</br>"), "yes" == b["recycling:shoes"] && (a += "Schuhentsorgung</br>"), "yes" == b["recycling:cooking_oil"] && (a += "Speise-\xD6l-Entsorgung</br>"), "yes" == b["recycling:paper"] && (a += "Papierentsorgung</br>"), "yes" == b["recycling:engine_oil"] && (a += "\xD6l-Entsorgung (Maschinen-, Alt-und Motor\xF6l)</br>"), "yes" == b["recycling:clothes"] && (a += "Altkleidercontainer</br>"), "yes" == b["recycling:car_batteries"] && (a += "Auto-Batterien-Entsorgung</br>"), "yes" == b["recycling:cans"] && (a += "Blechdosenentsorgung</br>"), "yes" == b["recycling:scrap_metal"] && (a += "Altmetallentsorgung</br>"), "yes" == b["recycling:plastic"] && (a += "Plastikentsorgung</br>"), "yes" == b["recycling:batterries"] && (a += "Batterieentsorgung</br>"), "yes" == b["recycling:plastic_bottles"] && (a += "Plastikflaschenentsorgung</br>"), "yes" == b["recycling:green_waste"] && (a += "Gr\xFCnabf\xE4lle</br>"), "yes" == b["recycling:hardcore"] && (a += "Bauschutt und Stra\xDFenmaterial Entsorgung</br>");return a;
}
var fnContentGeneralInformations = function fnContentGeneralInformations(b) {
    var a = "";b.width && (a += "Breite: " + b.width + " m<br/>");b.height && (a += "H\xF6he: " + b.height + " m<br/>");b.maxwidth && (a += "Maximalbreite: " + b.maxwidth + " m<br/>");b.maxheight && (a += "Maximalh\xF6he: " + b.maxheight + " m<br/>");b.maxweight && (a += "Maximalgewicht: " + b.maxweight + " t<br/>");b.maxspeed && (a += "H\xF6chstgeschwindigkeit: " + b.maxspeed + " km/h<br/>");b.min_age && (a += "Mindestalter: " + b.min_age + "<br/>");b.max_age && (a += "Maximalalter: " + b.max_age + "<br/>");"yes" == b.nudism && (a += "Freik\xF6rperkultur<br/>");"yes" == b.ruins && (a += "Ruine<br/>");b.ele && (a += "H\xF6he \xFCber NN: " + b.ele + " m<br/>");b["xmas:day_date"] && (a += "Dauer von - bis: " + b["xmas:day_date"] + "<br/>");b["rotor:diameter"] && (a += "Rotordurchmesser: " + b["rotor:diameter"] + " m<br/>");b["xmas:note"] && (a += "Hinweis: " + b["xmas:note"] + "<br/>");"port" == b["seamark:beacon_lateral:category"] && (a += "Backbord<br/>");"starboard" == b["seamark:beacon_lateral:category"] && (a += "Steuerbord<br/>");"yes" == b["service:bicycle:retail"] && (a += "Fahrradverkauf<br/>");"yes" == b["service:bicycle:repair"] && (a += "Fahrradreparatur<br/>");"yes" == b["service:bicycle:rental"] && (a += "Fahrradverleih<br/>");"yes" == b["service:bicycle:pump"] && (a += "Benutzung einer Luftpumpe m\xF6glich<br/>");"yes" == b["service:bicycle:diy"] && (a += "Benutzung von Werkzeug m\xF6glich<br/>");"yes" == b["service:bicycle:cleaning"] && (a += "Fahrr\xE4der werden gewaschen<br/>");"yes" == b["service:bicycle:second_hand"] && (a += "Verkauf von gebrauchten Fahrr\xE4dern<br/>");"yes" == b["service:bicycle:charging"] && (a += "Elektro-Fahrr\xE4der k\xF6nnen geladen werden<br/>");"yes" == b.cafe && (a += "Kleine Caf\xE9-Ecke<br/>");"yes" == b.breakfast && (a += "Besonderes Fr\xFChst\xFCcksangebot<br/>");"yes" == b.snack && (a += "Back-Snacks warm oder kalt<br/>");"yes" == b.indoor_seating && (a += "Sitzm\xF6glichkeiten im Innenbereich<br/>");"yes" == b.outdoor_seating && (a += "Sitzm\xF6glichkeiten im Au\xDFenbereich<br/>");"yes" == b.self_service && (a += "Selbstbedienungsb\xE4ckerei<br/>");"yes" == b.bakehouse && (a += "Backstube<br/>");"yes" == b.pastry_shop && (a += "Geb\xE4ck aus der Konditorei<br/>");"yes" == b.fair_trade && (a += "einige Fair-Trade-Produkte im Sortiment<br/>");"only" == b.fair_trade && (a += "fast ausschlie\xDFlich Fair-Trade-Produkte im Sortiment<br/>");"no" == b.fair_trade && (a += "keine Fair-Trade-Produkte im Sortiment<br/>");return a;
},
    fnContentHealthcare = function fnContentHealthcare(b) {
    var a = "";if ("doctors" == b.amenity || "physician" == b.office || "doctor" == b.healthcare) a += fnArztInfo(b), b.medical_area && (a += b.medical_area + "<br/>"), b.type && (a += b.type + "<br/>"), b["doctors:de"] && (a += b["doctors:de"] + "<br/>"), b["note:de"] && (a += b["note:de"] + "<br/>");"yes" == b.dispensing && (a += "Apotheke mit Rezepteinl\xF6sung<br/>");"abused" == b["social_facility:for"] && (a += "Einrichtung f\xFCr: Menschen die Misshandlung erlitten haben<br/>");"child" == b["social_facility:for"] && (a += "Einrichtung f\xFCr: Kinder<br/>");"disabled" == b["social_facility:for"] && (a += "Einrichtung f\xFCr: Menschen mit k\xF6rperlicher oder geistiger Behinderung<br/>");"diseased" == b["social_facility:for"] && (a += "Einrichtung f\xFCr: Erkrankte Menschen<br/>");"drug_addicted" == b["social_facility:for"] && (a += "Einrichtung f\xFCr: Drogens\xFCchtige<br/>");"homeless" == b["social_facility:for"] && (a += "Einrichtung f\xFCr: Obdachlose<br/>");"juvenile" == b["social_facility:for"] && (a += "Einrichtung f\xFCr: Jugendliche und Teenager<br/>");"mental_health" == b["social_facility:for"] && (a += "Einrichtung f\xFCr: Menschen mit psychischen Problemen<br/>");"migrant" == b["social_facility:for"] && (a += "Einrichtung f\xFCr: Menschen mit Migrationshintergrund<br/>");"orphan" == b["social_facility:for"] && (a += "Einrichtung f\xFCr: Waisen<br/>");"senior" == b["social_facility:for"] && (a += "Einrichtung f\xFCr: Senioren<br/>");"underprivileged" == b["social_facility:for"] && (a += "Einrichtung f\xFCr: Arme oder benachteiligte Menschen<br/>");"unemployed" == b["social_facility:for"] && (a += "Einrichtung f\xFCr: Arbeitslose<br/>");"victim" == b["social_facility:for"] && (a += "Einrichtung f\xFCr: Opfer eines Verbrechens<br/>");
    return a;
};
function fnAdditionalBuildingInfos(b) {
    var a = "";b["building:color"] && (a += "Geb\xE4udenfarbe: " + b["building:color"] + "</br>");b["building:height"] && (a += "Geb\xE4udenh\xF6he: " + b["building:height"] + " m</br>");b["building:level"] && (a += "Etage: " + b["building:level"] + "</br>");b["building:part"] && (a += "Geb\xE4udeteile: " + b["building:part"] + "</br>");b["roof:color"] && (a += "Dachfarbe: " + b["roof:colour"] + "</br>");b["roof:shape"] && (a += "Dachform: " + b["roof:shape"] + "</br>");b["roof:height"] && (a += "Dachh\xF6he: " + b["roof:height"] + " m</br>");b["roof:material"] && (a += "Dachmaterial: " + b["roof:material"] + " </br>");b["roof:orientation"] && (a += "Dachausrichtung: " + b["roof:orientation"] + " </br>");b["roof:direction"] && (a += "Dachausrichtung: " + b["roof:direction"] + " </br>");b["building:type"] && (a += "Geb\xE4udentyp: " + b["building:type"] + "</br>");return a;
}
function fnSicherheitAdditional(b) {
    var a = "";"surveillance" == b.man_made && ("indoor" == b.surveillance && (a += "Innenbereich wird \xFCberwacht"), "outdoor" == b.surveillance && (a += "Au\xDFenbereich wird \xFCberwacht"), "public" == b.surveillance && (a += "\xD6ffentliche \xDCberwachung"), "camera" == b["surveillance:type"] && (a += "\xDCberwachungstyp: Kamera"), "guard" == b["surveillance:type"] && (a += "\xDCberwachungstyp: W\xE4chter"), "ALPR" == b["surveillance:type"] && (a += "\xDCberwachungstyp: ALPR"), "town" == b["surveillance:zone"] && (a += "\xDCberwachungsbereich: Ort"), "parking" == b["surveillance:zone"] && (a += "\xDCberwachungsbereich: Parkplatz"), "traffic" == b["surveillance:zone"] && (a += "\xDCberwachungsbereich: Verkehr"), "shop" == b["surveillance:zone"] && (a += "\xDCberwachungsbereich: Shops"), "bank" == b["surveillance:zone"] && (a += "\xDCberwachungsbereich: Bank"), "building" == b["surveillance:zone"] && (a += "\xDCberwachungsbereich: Geb\xE4ude"));return a;
}
function fnWreckInfo(b) {
    var a = "";"wreck" == b.historic && (b["wreck:date_sunk"] && (a += "Gesunken am: " + b["wreck:date_sunk"] + "<br/>"), b["wreck:depth"] && (a += "Tiefe: " + b["wreck:depth"] + "<br/>"), b["wreck:clearance"] && (a += "Freiraum: " + b["wreck:clearance"] + "<br/>"), b["wreck:date_commissioned"] && (a += "Anerkannt seit: " + b["wreck:date_commissioned"] + "<br/>"), b["wreck:gross_tonnage"] && (a += "Gewicht: " + b["wreck:gross_tonnage"] + "<br/>"), b["wreck:length"] && (a += "L\xE4nge: " + b["wreck:length"] + "<br/>"), b["wreck:width"] && (a += "Breite: " + b["wreck:width"] + "<br/>"), b["wreck:cargo"] && (a = "timber" == b["wreck:cargo"] ? a + "Ladung: Holz<br/>" : "coal" == b["wreck:cargo"] ? a + "Ladung: Kohle<br/>" : a + ("Ladung: " + b["wreck:cargo"] + "<br/>")), "yes" == b["wreck:visible_at_low_tide"] && (a += "Sichtbar bei Niedrigwasser: Ja<br/>"), "no" == b["wreck:visible_at_low_tide"] && (a += "Sichtbar bei Niedrigwasser: Nein<br/>"), "yes" == b["wreck:visible_at_high_tide"] && (a += "Sichtbar bei Hochwasser: Ja<br/>"), "no" == b["wreck:visible_at_high_tide"] && (a += "Sichtbar bei Hochwasser: Nein<br/>"), "yes" == b.access && (a += "Zutritt m\xF6glich<br/>"), "no" == b.access && (a += "Zutritt nicht m\xF6glich<br/>"), "permit_required" == b.access && (a += "Zutritt nur mit Genehmigung<br/>"));return a;
}
function fnKlosterAdditional(b) {
    var a = "";if (b["monastery:type"]) switch (b["monastery:type"]) {case "monastery":
            a += "Typ: Kl\xF6sterliche Gemeinschaft (monastery)<br/>";break;case "convent":
            a += "Typ: Bettelm\xF6nch Gemeinschaft (convent)<br/>";break;case "canonry":
            a += "Typ: Kanonikat (canonry)<br/>";break;case "commandry":
            a += "Typ: Milit\xE4r gef\xFChrt (commandry)<br/>";break;case "hermitage":
            a += "Typ: Einsiedelei (hermitage)<br/>";break;default:
            a += "Typ: unbekannt<br/>";}b["community:gender"] && ("male" == b["community:gender"] && (a += "Geschlecht: M\xE4nnergemeinschaft<br/>"), "female" == b["community:gender"] && (a += "Geschlecht: Frauengemeinschaft<br/>"));b.religious_rank && ("abbey" == b.religious_rank ? a += "Religi\xF6ser Rang: Abtei<br/>" : "abbey" == b.religious_rank && (a += "Religi\xF6ser Rang: Erzabtei<br/>"));"yes" == b.shrine && (a += "Besonderheit: Heiligengrab / Reliquienschrein<br/>");"yes" == b.sanctuary && (a += "Besonderheit: Heiligtum / Altarraum (Sanktuar)<br/>");if (b.religion) switch (b.religion) {case "animist":
            a += "Religion: animistisch<br/><br/>";break;case "bahai":
            a += "Religion: bahai<br/>";break;case "buddhist":
            a += "Religion: buddhistisch<br/>";break;case "christian":
            a += "Religion: christlich<br/>";break;case "hindu":
            a += "Religion: hinduistisch<br/>";break;case "IglesiaNiCristo":
            a += "Religion: IglesiaNiCristo<br/>";break;case "jain":
            a += "Religion: jain<br/>";break;case "jewish":
            a += "Religion: j\xFCdisch<br/>";break;case "multifaith":
            a += "Religion: pluralistisch<br/>";break;case "muslim":
            a += "Religion: muslimisch<br/>";
            type += "Moschee<br/>";break;case "pagan":
            a += "Religion: heidnisch<br/>";break;case "pastafarian":
            a += "Religion: pastafarisch<br/>";break;case "scientologist":
            a += "Religion: scientologisch<br/>";break;case "shinto":
            a += "Religion: schintoistisch<br/>";break;case "sikh":
            a += "Religion: sikh<br/>";break;case "spiritualist":
            a += "Religion: spiritistisch<br/>";break;case "taoist":
            a += "Religion: taoistisch<br/>";break;case "unitarian":
            a += "Religion: unitarian<br/>";break;case "yazidi":
            a += "Religion: yazidi<br/>";break;
        case "zoroastrian":
            a += "Religion: zoroastrisch<br/>";break;default:
            a += "Religion: unbekannt<br/>";}if (b.denomination) switch (b.denomination) {case "anglican":
            a += "Konfession: Anglikanische Gemeinschaft<br/><br/>";break;case "baptist":
            a += "Konfession: Baptisten<br/>";break;case "catholic":
            a += "Konfession: Katholische Kirche, ohne genauere Spezifizierung<br/>";break;case "roman_catholic":
            a += "Konfession: R\xF6misch-Katholische Kirche<br/>";break;case "old_catholic":
            a += "Konfession: Altkatholische Kirche (Schweiz: Christ-Katholisch)<br/>";
            break;case "greek_catholic":
            a += "Konfession: Griechisch-Katholische Kirche, Sammelbezeichnung f\xFCr die mit Rom unierten Ostkirchen des byzantinischen Ritus<br/>";break;case "evangelical":
            a += "Konfession: Evangelikalismus ist eine theologische Richtung innerhalb des Protestantismus. Achtung! Nicht verwechseln mit der evangelischen (= protestantischen) Kirche<br/>";break;case "jehovahs_witness":
            a += "Konfession: Zeugen Jehovas<br/>";break;case "lutheran":
            a += "Konfession: Lutheraner, evangelisch-lutherisch<br/>";
            break;case "mennonite":
            a += "Konfession: Mennoniten<br/>";break;case "messianic_jewish":
            a += "Konfession: Messianische Juden, stehen theologisch den evangelikalen Christen nahe.<br/>";break;case "methodist":
            a += "Konfession: Methodist Church (engl. Methodism)<br/>";break;case "mormon":
            a += "Konfession: Mormonen<br/>";break;case "new_apostolic":
            a += "Konfession: Neuapostolische Kirche<br/>";break;case "orthodox":
            a += "Konfession: Orthodox, ohne genauere Spezifizierung<br/>";break;case "greek_orthodox":
            a += "Konfession: Griechisch-Orthodox<br/>";
            break;case "coptic_orthodox":
            a += "Konfession: Koptische Kirche, ist die christliche altorientalische Kirche \xC4gyptens.<br/>";break;case "pentecostal":
            a += "Konfession: Pfingstbewegung<br/>";break;case "presbyterian":
            a += "Konfession: Presbyterianische Kirchen<br/>";break;case "protestant":
            a += "Konfession: Evangelische Kirchen<br/>";break;case "quaker":
            a += "Konfession: Qu\xE4ker<br/>";break;case "reformed":
            a += "Konfession: Evangelisch-reformierte<br/>";break;case "russian_orthodox":
            a += "Konfession: Russisch-Orthodox<br/>";
            break;case "seventh_day_adventist":
            a += "Konfession: Siebenten-Tags-Adventisten<br/>";break;case "christian_community":
            a += "Konfession: Die Christengemeinschaft ist eine christliche Kirche, die sich als selbst\xE4ndige Kultusgemeinschaft versteht.<br/>";break;case "adventist":
            a += "Konfession: Adventisten, nicht alle Adventisten sind Siebenten-Tags-Adventisten.<br/>";break;case "alliance":
            a += "Konfession: Christian and Missionary Alliance (C&MA) is an evangelical Protestant denomination within Christianity.<br/>";
            break;case "assemblies_of_god":
            a += "Konfession: Assemblies of God, ist eine pfingstlerische Denomination.<br/>";break;case "apostolic":
            a += "Konfession: Apostolische Kirche<br/>";break;case "armenian_apostolic":
            a += "Konfession: Armenische Apostolische Kirche, ist eine altorientalische Kirche.<br/>";break;case "assyrian":
            a += "Konfession: Assyrische Kirche des Ostens, auch Apostolische Kirche des Ostens, ist eine autokephale und v\xF6llig eigenst\xE4ndige Ostkirche syrischer Tradition in Nachfolge des altchristlichen Katholikats von Seleukia-Ktesiphon.<br/>";
            break;case "christ_scientist":
            a += "Konfession: Christian Science (deutsch: Christliche Wissenschaft) ging aus der Neugeist-Bewegung hervor.<br/>";break;case "church_of_scotland":
            a += "Konfession: Church of Scotland (dt. Kirche Schottlands) ist die Nationalkirche in Schottland. Im Sprachgebrauch auch \u201Ethe Kirk\u201C genannt.<br/>";break;case "czechoslovak_hussite":
            a += "Konfession: Tschechoslowakische Hussitische Kirche, ist eine christliche Kirche, die durch Abspaltung von der R\xF6misch-Katholischen Kirche entstanden ist. Oft auch Neuhussitische Kirche genannt, vornehmlich in Tschechien verbreitet, aber auch in der Slowakei<br/>";
            break;case "dutch_reformed":
            a += "Konfession: Niederl\xE4ndisch-reformierte Kirche, (einschlie\xDFlich NGK und \xE4hnliche Kirchen in S\xFCdafrika)<br/>";break;case "exclusive_brethren":
            a += "Konfession: Exclusive Brethren<br/>";break;case "foursquare":
            a += "Konfession: International Church of the Foursquare Gospel<br/>";break;case "kimbanguist":
            a += "Konfession: Kimbanguistenkirche, ist eine afrikanische, unabh\xE4ngige, christliche Kirche.<br/>";break;case "living_waters_church":
            a += "Konfession: Living Waters Christian Church<br/>";
            break;case "mariavite":
            a += "Konfession: Mariavitismus<br/>";break;case "maronite":
            a += "Konfession: Syrisch-maronitische Kirche, ist eine mit Rom unierte, christliche Kirche, die den r\xF6mischen Papst als Oberhaupt anerkennt.<br/>";break;case "moravian":
            a += "Konfession: Herrnhuter Br\xFCdergemeine, (auch: Unitas Fratrum, Evangelische oder Erneuerte Br\xFCder-Unit\xE4t, engl. Moravian Church) ist eine aus der b\xF6hmischen Reformation herkommende \xFCberkonfessionell-christliche Glaubensbewegung.<br/>";
            break;case "nazarene":
            a += "Konfession: Kirche des Nazareners, ist eine Freikirche und Heiligungsgemeinde in methodistischer Tradition.<br/>";break;case "nondenominational":
            a += "Konfession: Nondenominational Christianity<br/>";break;case "old_believers":
            a += "Konfession: Altorthodoxe, (h\xE4ufiger Altgl\xE4ubige) ist eine Sammelbezeichnung f\xFCr religi\xF6se Str\xF6mungen und Gruppen innerhalb der russisch-orthodoxen Tradition.<br/>";break;case "polish_catholic":
            a += "Konfession: Polnisch-Katholische Kirche<br/>";
            break;case "salvation_army":
            a += "Konfession: Heilsarmee, ist eine christliche Freikirche mit ausgepr\xE4gter sozialer T\xE4tigkeit.<br/>";break;case "santo_daime":
            a += "Konfession: Santo Daime, ist einer synkretistischen religi\xF6se Bewegung aus Brasilien.<br/>";break;case "serbian_orthodox":
            a += "Konfession: Serbisch-Orthodoxe Kirche, bezeichnet die orthodoxe Kirche von Serbien und die ihr nachgeordneten Kirchen.<br/>";break;case "spiritism":
            a += "Konfession: Spiritismus, oder Spiritualismus die Lehre des Spiritisten Allan Kardec<br/>";
            break;case "united":
            a += "Konfession: United Church of Canada, ist die zweitgr\xF6\xDFte Kirche in Kanada.<br/>";break;case "united_church_of_christ":
            a += "Konfession: United Church of Christ, ist eine Kirche in den USA.<br/>";break;case "united_free_church_of_scotland":
            a += "Konfession: United Free Church of Scotland, ist eine presbyterianische Freikirche in Schottland.<br/>";break;case "united_methodist":
            a += "Konfession: Evangelisch-methodistische Kirche, (engl. United Methodist Church (UMC)) ist eine christliche Kirche in der wesleyanischen Tradition.<br/>";
            break;case "united_reformed":
            a += "Konfession: United Reformed Church, (Vereinigte Reformierte Kirche, URC) ist eine reformierte Kirche in Gro\xDFbritannien.<br/>";break;case "uniting":
            a += "Konfession: Uniting Church in Australia (UCA) ist die drittgr\xF6\xDFte christliche Denomination in Australien.<br/>";break;case "church_of_sweden":
            a += "Konfession: Schwedische Kirche, ist die evangelisch-lutherische Kirche und ehemalige Staatskirche Schwedens.<br/>";break;case "mission_covenant_church_of_sweden":
            a += "Konfession: Schwedische Missionskirche ist eine reformierte Kirche in Schweden.<br/>";break;case "alternative":
            a += "Konfession: alternative<br/>";break;case "ashkenazi":
            a += "Konfession: ashkenazi<br/>";break;case "buchari":
            a += "Konfession: buchari<br/>";break;case "conservative":
            a += "Konfession: conservative<br/>";break;case "egalitarian":
            a += "Konfession: egalitarian<br/>";break;case "hasidic":
            a += "Konfession: hasidic<br/>";break;case "humanistic":
            a += "Konfession: humanistic<br/>";break;case "kabbalah":
            a += "Konfession: kabbalah<br/>";break;case "kabbalistic":
            a += "Konfession: kabbalistic<br/>";break;case "karaite":
            a += "Konfession: karaite<br/>";break;case "liberal":
            a += "Konfession: liberal<br/>";break;case "lubavitch":
            a += "Konfession: lubavitch<br/>";break;case "lubavitch_messianic":
            a += "Konfession: lubavitch_messianic<br/>";break;case "mizrachi_baghdadi":
            a += "Konfession: mizrachi_baghdadi<br/>";break;case "mizrachi_chida":
            a += "Konfession: mizrachi_chida<br/>";break;case "mizrachi_jerusalemite":
            a += "Konfession: mizrachi_jerusalemite<br/>";
            break;case "mizrachi_livorno":
            a += "Konfession: mizrachi_livorno<br/>";break;case "mizrachi_moroccan":
            a += "Konfession: mizrachi_moroccan<br/>";break;case "modern_orthodox":
            a += "Konfession: modern_orthodox<br/>";break;case "neo_orthodox":
            a += "Konfession: neo_orthodox<br/>";break;case "nondenominational":
            a += "Konfession: nondenominational<br/>";break;case "orthodox":
            a += "Konfession: orthodox<br/>";break;case "orthodox_ashkenaz":
            a += "Konfession: orthodox_ashkenaz<br/>";break;case "orthodox_sefard":
            a += "Konfession: orthodox_sefard<br/>";
            break;case "progressive":
            a += "Konfession: progressive<br/>";break;case "reconstructionist":
            a += "Konfession: reconstructionist<br/>";break;case "reform":
            a += "Konfession: reform<br/>";break;case "renewal":
            a += "Konfession: renewal<br/>";break;case "samaritan":
            a += "Konfession: samaritan<br/>";break;case "sefardi":
            a += "Konfession: sefardi<br/>";break;case "sefardi_amsterdam":
            a += "Konfession: sefardi_amsterdam<br/>";break;case "sefardi_london":
            a += "Konfession: sefardi_london<br/>";break;case "traditional":
            a += "Konfession: traditional<br/>";
            break;case "ultra_orthodox":
            a += "Konfession: ultra_orthodox<br/>";break;case "unaffiliated":
            a += "Konfession: unaffiliated<br/>";break;case "yemenite":
            a += "Konfession: yemenite<br/>";break;case "yemenite_baladi":
            a += "Konfession: yemenite_baladi<br/>";break;case "yemenite_shami":
            a += "Konfession: yemenite_shami<br/>";break;case "ahmadiya":
            a += "Konfession: ahmadiya<br/>";break;case "alaouite":
            a += "Konfession: alaouite<br/>";break;case "druze":
            a += "Konfession: druze<br/>";break;case "ibadi":
            a += "Konfession: ibadi<br/>";
            break;case "ismaili":
            a += "Konfession: ismaili<br/>";break;case "shia":
            a += "Konfession: shia<br/>";break;case "sunni":
            a += "Konfession: sunni<br/>";break;case "nichiren":
            a += "Konfession: nichiren<br/>";break;case "jodo_shinshu":
            a += "Konfession: jodo_shinshu<br/>";break;case "jodo_shu":
            a += "Konfession: jodo_shu<br/>";break;case "vajrayana":
            a += "Konfession: vajrayana<br/>";break;case "shingon_shu":
            a += "Konfession: shingon_shu<br/>";break;case "zen":
            a += "Konfession: zen<br/>";break;case "thai_mahanikaya":
            a += "Konfession: thai_mahanikaya<br/>";
            break;case "thai_thammayut":
            a += "Konfession: thai_thammayut<br/>";break;case "asatru":
            a += "Konfession: asatru<br/>";break;case "celtic":
            a += "Konfession: celtic<br/>";break;case "greco-roman":
            a += "Konfession: greco-roman<br/>";break;case "wicca":
            a += "Konfession: wicca<br/>";break;case "irani":
            a += "Konfession: irani<br/>";break;case "parsi":
            a += "Konfession: parsi<br/>";break;default:
            a += "unbekannt<br/>";}if (b.community) switch (b.community) {case "AA":
            a += "Ordensgemeinschaft (AA): Augustinians of the Assumption <br/>";
            break;case "BSCM":
            a += "Ordensgemeinschaft (BSCM): Adorers of the Sacred Heart of Jesus of Montmartre <br/>";break;case "CBMV":
            a += "Ordensgemeinschaft (CBMV): Augustiner-Chorfrauen B.M.V.<br/>";break;case "CO":
            a += "Ordensgemeinschaft (CO): Oratorians<br/>";break;case "CMC":
            a += "Ordensgemeinschaft (CMC): Congregation of the Mother Co-Redemptrix<br/>";break;case "CRSP":
            a += "Ordensgemeinschaft (CRSP): Kongregation der Regularkleriker vom hl. Paulus (Barnabiten)<br/>";break;case "CSJ":
            a += "Ordensgemeinschaft (CSJ): Carmel Saint-Joseph<br/>";
            break;case "CSSP":
            a += "Ordensgemeinschaft (CSSP): Congr\xE9gation du Saint-Esprit<br/>";break;case "CSSR":
            a += "Ordensgemeinschaft (CSSR): Congr\xE9gation du Tr\xE8s Saint R\xE9dempteur<br/>";break;case "FCJM":
            a += "Ordensgemeinschaft (FCJM): Franciscan Sisters, Daughters of the Sacred Heart of Jesus and Mary<br/>";break;case "FMGB":
            a += "Ordensgemeinschaft (FMGB): Suore Francescane Missionarie di Ges\xF9 Bambino<br/>";break;case "FMH":
            a += "Ordensgemeinschaft (FMH): Congregatio Filiarum Mariae Sanctissimae ab Horto<br/>";
            break;case "FMM":
            a += "Ordensgemeinschaft (FMM): Franciscaines missionnaires de Marie<br/>";break;case "FSC":
            a += "Ordensgemeinschaft (FSC): Fr\xE8res des \xC9coles chr\xE9tiennes<br/>";break;case "MCCI":
            a += "Ordensgemeinschaft (MCCI): Missionnaires comboniens du Sacr\xE9-C\u0153ur<br/>";break;case "MSFS":
            a += "Ordensgemeinschaft (MSFS): Missionnaires de Saint Fran\xE7ois de Sales<br/>";break;case "OCart":
            a += "Ordensgemeinschaft (OCart): Order of the Carthusians<br/>";break;case "OCC":
            a += "Ordensgemeinschaft (OCC): Ordre de Notre Dame du Mont-Carmel<br/>";
            break;case "OCD":
            a += "Ordensgemeinschaft (OCD): Ordre des Carmes d\xE9chaux<br/>";break;case "OCSO":
            a += "Ordensgemeinschaft (OCSO): Zisterzienserorden der strengeren Observanz (Trappisten)<br/>";break;case "OFM":
            a += "Ordensgemeinschaft (OFM): Ordre des Fr\xE8res Mineurs (Franziskaner)<br/>";break;case "OFMCap":
            a += "Ordensgemeinschaft (OFMCap): Ordre des Fr\xE8res Mineurs Capucins<br/>";break;case "OFMConv":
            a += "Ordensgemeinschaft (OFMConv): Ordre des Fr\xE8res Mineurs Conventuels<br/>";break;case "OFS":
            a += "Ordensgemeinschaft (OFS): Franciscans secular Third Order<br/>";break;case "OMI":
            a += "Ordensgemeinschaft (OMI): Oblats de Marie<br/>";break;case "OP":
            a += "Ordensgemeinschaft (OP): Ordre des Fr\xE8res Pr\xEAcheurs<br/>";break;case "OPraem":
            a += "Ordensgemeinschaft (OPraem): Ordre des chanoines r\xE9guliers de Pr\xE9montr\xE9<br/>";break;case "OSB":
            a += "Ordensgemeinschaft (OSB): Order of Saint Benedict<br/>";break;case "OSC":
            a += "Ordensgemeinschaft (OSC): Ordre de Sainte-Claire ou Ordre des Pauvres Dames<br/>";
            break;case "OSSS":
            a += "Ordensgemeinschaft (OSSS): Ordre de Sainte-Brigitte<br/>";break;case "OVM":
            a += "Ordensgemeinschaft (OVM): Order of the Visitation of Holy Mary (Salesianerinnen)<br/>";break;case "PSDP":
            a += "Ordensgemeinschaft (PSDP): Petites s\u0153urs des pauvres (Kleinen Schwestern der Armen)<br/>";break;case "PFJ":
            a += "Ordensgemeinschaft (PFJ): Petits Fr\xE8res de J\xE9sus<br/>";break;case "SDB":
            a += "Ordensgemeinschaft (SDB): Soci\xE9t\xE9 de Saint Fran\xE7ois de Sales<br/>";break;case "SJ":
            a += "Ordensgemeinschaft (SJ): Compagnie de J\xE9sus<br/>";break;case "SOC":
            a += "Ordensgemeinschaft (SOC): Order of Cistercians<br/>";break;case "SSCC":
            a += "Ordensgemeinschaft (SSCC): Congregation of the Sacred Hearts of Jesus and Mary<br/>";break;case "SSF":
            a += "Ordensgemeinschaft (SSF): Society of St Francis<br/>";break;case "SSJE":
            a += "Ordensgemeinschaft (SSJE): Society of St John the Evangelist<br/>";break;case "SSpS":
            a += "Ordensgemeinschaft (SSpS): Steyler Missionsschwestern<br/>";break;case "TOR":
            a += "Ordensgemeinschaft (TOR): Terzo Ordine Regolare di San Francesco<br/>";break;default:
            a += "unbekannt<br/>";}return a;
}var fnTestInfoPopup = function fnTestInfoPopup(b) {
    b = b.getProperties();var a = "",
        c;for (c in b) {
        a = a + c + "=" + b[c] + "<br/>";
    }return '<div class="c4g_popup_text" style="width:300px;">' + a + "</div>";
};

/***/ }),

/***/ "./Resources/public/js/c4g-maps-proxy.js":
/*!***********************************************!*\
  !*** ./Resources/public/js/c4g-maps-proxy.js ***!
  \***********************************************/
/*! exports provided: MapProxy */
/*! exports used: MapProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapProxy; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__c4g_baselayer_controller__ = __webpack_require__(/*! ./c4g-baselayer-controller */ "./Resources/public/js/c4g-baselayer-controller.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__c4g_layer_controller__ = __webpack_require__(/*! ./c4g-layer-controller */ "./Resources/public/js/c4g-layer-controller.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__c4g_locationstyle_controller__ = __webpack_require__(/*! ./c4g-locationstyle-controller */ "./Resources/public/js/c4g-locationstyle-controller.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__c4g_maps_misc_spinner__ = __webpack_require__(/*! ./c4g-maps-misc-spinner */ "./Resources/public/js/c4g-maps-misc-spinner.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__c4g_maps_utils__ = __webpack_require__(/*! ./c4g-maps-utils */ "./Resources/public/js/c4g-maps-utils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__c4g_maps_constant__ = __webpack_require__(/*! ./c4g-maps-constant */ "./Resources/public/js/c4g-maps-constant.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__c4g_maps_constant_i18n_de__ = __webpack_require__(/*! ./c4g-maps-constant-i18n-de */ "./Resources/public/js/c4g-maps-constant-i18n-de.js");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// 'namespace'
this.c4g = this.c4g || {};
this.c4g.maps = this.c4g.maps || {};

'use strict';









var c4g = this.c4g;
var MapProxy = function () {
  function MapProxy(options) {
    _classCallCheck(this, MapProxy);

    var mapData;

    this.options = jQuery.extend({
      mapController: false
    }, options);
    if (!this.options.mapController) {
      return false;
    }

    c4g.maps.editorStyles = c4g.maps.editorStyles || {};

    //window.c4gMapsHooks.proxy_fillPopup = [];

    this.hook_baselayer_loaded = [];
    this.hook_baselayer_visibility = [];
    this.hook_layer_loaded = [];
    this.hook_layer_visibility = [];
    this.hook_map_click = [];
    this.hook_map_zoom = [];

    // add global hook for accessibility when there is no proxy reference
    window.c4gMapsHooks.proxy_layer_loaded = window.c4gMapsHooks.proxy_layer_loaded || [];

    this.baselayerIds = [];
    this.activeBaselayerId = undefined;
    this.layerIds = [];
    this.activeLayerIds = {};

    this.requestFunctions = {};
    this.request = {};

    this.baselayers_loaded = false;
    this.layers_loaded = false;

    mapData = this.options.mapController.data;

    this.mapId = mapData.id;

    this.api_baselayer_url = this.options.mapController.data.api.baselayer + '/' + mapData.profile;
    this.api_layer_url = this.options.mapController.data.api.layer + '/' + this.mapId;
    this.api_layercontent_url = this.options.mapController.data.api.layercontent;
    //this.api_layercontentdata_url = this.options.mapController.data.api.layercontentdata;
    this.api_layercontentdata_url = "con4gis/layerContentDataService";
    this.api_locstyle_url = this.options.mapController.data.api.locstyle;
    this.api_infowindow_url = this.options.mapController.data.api.infowindow;
    this.options = options;

    // this.initialize();
  }

  _createClass(MapProxy, [{
    key: "initialize",
    value: function initialize() {
      var self, map;

      self = this;
      map = this.options.mapController.map;

      this.baselayerController = new __WEBPACK_IMPORTED_MODULE_0__c4g_baselayer_controller__["a" /* C4gBaselayerController */](this);
      this.baselayerController.loadBaseLayers();
      this.layerController = new __WEBPACK_IMPORTED_MODULE_1__c4g_layer_controller__["a" /* C4gLayerController */](this);
      this.layerController.loadLayers();
      this.locationStyleController = new __WEBPACK_IMPORTED_MODULE_2__c4g_locationstyle_controller__["a" /* C4gLocationStyleController */](this);
      this.addPopUp();

      //TODO check this, nearly the same as below
      map.on('change:view', function () {
        // zoom-observer
        //
        map.getView().on('change:resolution', function () {
          var layerId, layer;

          // check layer zoom-bounds
          // @TODO: Use "self.activeLayerIds = false" ?
          for (layerId in self.activeLayerIds) {
            if (self.activeLayerIds.hasOwnProperty(layerId)) {
              layer = self.layerController.arrLayers[layerId];
              if (self.checkLayerIsActiveForZoom(layerId)) {
                if (layer.isInactive) {
                  self.layerController.showLayer(layerId);
                }
              } else {
                self.layerController.hideLayer(layerId, true);
              }
            }
          }

          // hooks
          __WEBPACK_IMPORTED_MODULE_4__c4g_maps_utils__["a" /* utils */].callHookFunctions(self.hook_map_zoom);

          if (self.options.mapController.data.caching && map.getView().getZoom()) {
            __WEBPACK_IMPORTED_MODULE_4__c4g_maps_utils__["a" /* utils */].storeValue('zoom', map.getView().getZoom());
          }
        }); // end of "zoom-observer"
      }); // end of "zoom-observer"

      // zoom-observer
      //
      map.getView().on('change:resolution', function () {
        var layerId, layer;

        // check layer zoom-bounds
        // @TODO: Use "self.activeLayerIds = false" ?
        for (layerId in self.activeLayerIds) {
          if (self.activeLayerIds.hasOwnProperty(layerId)) {
            layer = self.layerController.arrLayers[layerId];
            if (self.checkLayerIsActiveForZoom(layerId)) {
              if (layer.isInactive) {
                self.layerController.showLayer(layerId);
              }
            } else {
              self.layerController.hideLayer(layerId, true);
            }
          }
        }

        // hooks
        __WEBPACK_IMPORTED_MODULE_4__c4g_maps_utils__["a" /* utils */].callHookFunctions(window.c4gMapsHooks.hook_map_zoom, self);

        if (self.options.mapController.data.caching && map.getView().getZoom()) {
          __WEBPACK_IMPORTED_MODULE_4__c4g_maps_utils__["a" /* utils */].storeValue('zoom', map.getView().getZoom());
        }
      }); // end of "zoom-observer"

      map.getView().on('change:center', function (evt) {
        if (self.options.mapController.data.caching) {
          var coordinate = ol.proj.toLonLat(map.getView().getCenter());
          if (coordinate) {
            __WEBPACK_IMPORTED_MODULE_4__c4g_maps_utils__["a" /* utils */].storeValue('lon', coordinate[0]);
            __WEBPACK_IMPORTED_MODULE_4__c4g_maps_utils__["a" /* utils */].storeValue('lat', coordinate[1]);
          }
        }
        window.c4gMapsHooks.map_center_changed = window.c4gMapsHooks.map_center_changed || [];
        __WEBPACK_IMPORTED_MODULE_4__c4g_maps_utils__["a" /* utils */].callHookFunctions(window.c4gMapsHooks.map_center_changed, map.getView().getCenter());
      }); // end of "center-observer"

      // click-observer
      //
      map.on('click', function (clickEvent) {

        var feature, fFeatures, layer, popupInfos, currentZoom, minZoom, newCenter, geometry, coord, setPopup, styleFunc, styleCluster, objPopup;

        //ToDo check new function call with ol 4.3
        feature = map.forEachFeatureAtPixel(clickEvent.pixel, function (feature, layer) {
          return feature;
        });

        layer = map.forEachFeatureAtPixel(clickEvent.pixel, function (feature, layer) {
          return layer;
        });

        if (layer && layer.getStyle()) {
          styleFunc = layer.getStyle();
          if (typeof styleFunc === "function" && styleFunc(feature, currentZoom) && styleFunc(feature, currentZoom)['0']) {
            styleCluster = styleFunc(feature, currentZoom)['0'].clone();
            if (styleCluster && styleCluster.getImage()) {
              styleCluster.getImage().setScale(styleCluster.getImage().getScale() * 0.7);
            }
          }
        }

        fFeatures = feature ? feature.get('features') : false;
        if (!(fFeatures && fFeatures.length === 1)) {
          // cluster multiple POI
          if (fFeatures) {
            if (fFeatures[0].get('cluster_popup') == 1) {
              map.getView().setCenter(clickEvent.coordinate);
              currentZoom = map.getView().getZoom();
              minZoom = self.options.mapController.data.cluster_all ? self.options.mapController.data.cluster_zoom : fFeatures['0'].get('cluster_zoom');
              if (currentZoom >= minZoom) {
                setPopup = [];
                setPopup.content = '';
                setPopup.async = false;
                for (var i = 0; i < fFeatures.length; i++) {
                  setPopup.content = setPopup.content.concat(fFeatures[i].get('popup').content);
                }
                feature = fFeatures[0].clone();
                feature.set('popup', setPopup);
              } else {
                map.getView().setZoom(currentZoom + 1);
              }
            } else {

              feature.setStyle(new ol.style.Style({
                image: new ol.style.Circle({
                  fill: new ol.style.Fill({
                    opacity: 0
                  }),
                  radius: 0
                })
              }));
              feature = false;

              // animation
              map.getView().animate({
                start: +new Date(),
                duration: 1000,
                resolution: map.getView().getResolution(),
                center: [0, 0]
                //rotation: Math.PI
              });

              currentZoom = map.getView().getZoom();
              newCenter = map.getCoordinateFromPixel(clickEvent.pixel);
              minZoom = self.options.mapController.data.cluster_all ? self.options.mapController.data.cluster_zoom : fFeatures['0'].get('cluster_zoom');

              //ToDo remove with structure element param
              if (currentZoom >= minZoom) {

                //if (currentZoom >= map.getView().getMaxZoom()) {
                //open the cluster after zooming
                var pix = map.getView().getResolution();
                var max = fFeatures.length;
                var r = pix * 12 * (0.5 + max / 4);
                for (var i = 0; i < max; i++) {
                  var a = 2 * Math.PI * i / max;
                  if (max == 2 || max == 4) a += Math.PI / 4;
                  var p = [newCenter[0] + r * Math.sin(a), newCenter[1] + r * Math.cos(a)];
                  var coordinate = ol.proj.toLonLat(p);
                  var f = [];
                  f.push(fFeatures[i]);
                  var cf = new ol.Feature({
                    geometry: new ol.geom.Point(p),
                    features: f,
                    style: fFeatures[i].get('style')
                  });
                  layer.getSource().addFeature(cf);
                  map.getView().setCenter(newCenter);
                }
              } else {
                currentZoom += 1;
              }

              map.getView().setCenter(newCenter);
              map.getView().setZoom(currentZoom);
            }
          }
        } else if (fFeatures && fFeatures.length === 1) {
          feature = fFeatures[0];
        }

        if (self.options.mapController.controls.editor && self.options.mapController.controls.editor.isOpen()) {
          // do not show popup when editor is open
          if (feature && feature.get('projectId')) {
            // but call click hooks
            var result = __WEBPACK_IMPORTED_MODULE_4__c4g_maps_utils__["a" /* utils */].callHookFunctions(self.hook_map_click, clickEvent);
            return false;
          }
        }
        popupInfos = {};
        if (feature && feature.get('popup')) {
          // single POI
          popupInfos = feature.get('popup');
        } else if (layer && layer.popup) {
          popupInfos = layer.popup;
        } else {
          feature = false;
        }
        if (feature && feature.get('loc_linkurl')) {
          if (self.options.mapController.data.link_newwindow === '1') {
            window.open(feature.get('loc_linkurl'));
          } else {
            window.open(feature.get('loc_linkurl'), "_self");
          }
        } else {
          if (feature && feature.get('zoom_onclick') && feature.get('zoom_onclick') != 0) {
            map.getView().setZoom(feature.get('zoom_onclick'));
            map.getView().setCenter(feature.getGeometry().getCoordinates());
          } else if (layer && layer.zoom_onclick && layer.zoom_onclick != 0) {
            map.getView().setZoom(layer.zoom_onclick);
            map.getView().setCenter(clickEvent.coordinate);
          }

          if (feature) {
            geometry = feature.getGeometry();
            if (geometry instanceof ol.geom.Point) {
              coord = geometry.getCoordinates();
            } else {
              coord = clickEvent.coordinate;
            }

            c4g.maps.popup.popup.setPosition(coord);
            if (popupInfos.content) {
              c4g.maps.popup.$content.html('');
              c4g.maps.popup.$popup.addClass(__WEBPACK_IMPORTED_MODULE_5__c4g_maps_constant__["a" /* cssConstants */].ACTIVE).addClass(__WEBPACK_IMPORTED_MODULE_5__c4g_maps_constant__["a" /* cssConstants */].LOADING);
              c4g.maps.popup.spinner.show();

              if (popupInfos.async === false || popupInfos.async == '0') {
                objPopup = {};
                objPopup.popup = popupInfos;
                objPopup.feature = feature;
                objPopup.layer = layer;
                // Call the popup hook for plugin specific popup content
                if (window.c4gMapsHooks !== undefined && _typeof(window.c4gMapsHooks.proxy_fillPopup) === 'object') {
                  __WEBPACK_IMPORTED_MODULE_4__c4g_maps_utils__["a" /* utils */].callHookFunctions(window.c4gMapsHooks.proxy_fillPopup, objPopup);
                }
                self.setPopup(objPopup);
              } else {
                jQuery.ajax({
                  dataType: "json",
                  url: self.api_infowindow_url + '/' + popupInfos.content
                }).done(function (data) {
                  var popupInfo = {
                    async: popupInfos.async,
                    content: data.content,
                    popup: popupInfos.popup,
                    routing_link: popupInfos.routing_link
                  };

                  objPopup = {};
                  objPopup.popup = popupInfo;
                  objPopup.feature = feature;
                  objPopup.layer = layer;

                  // Call the popup hook for plugin specific popup content
                  if (window.c4gMapsHooks !== undefined && _typeof(window.c4gMapsHooks.proxy_fillPopup) === 'object') {
                    __WEBPACK_IMPORTED_MODULE_4__c4g_maps_utils__["a" /* utils */].callHookFunctions(window.c4gMapsHooks.proxy_fillPopup, objPopup);
                  }

                  self.setPopup(objPopup);
                });
              }
            } else {
              c4g.maps.popup.$popup.removeClass(__WEBPACK_IMPORTED_MODULE_5__c4g_maps_constant__["a" /* cssConstants */].ACTIVE);
            }
          } else {
            c4g.maps.popup.$popup.removeClass(__WEBPACK_IMPORTED_MODULE_5__c4g_maps_constant__["a" /* cssConstants */].ACTIVE);
          }

          // hooks
          __WEBPACK_IMPORTED_MODULE_4__c4g_maps_utils__["a" /* utils */].callHookFunctions(window.c4gMapsHooks.hook_map_click, clickEvent);
        }
      }); // end of "click-observer"


      // this.options.mapController.map.getLayers().on('change:length', function(event) {
      //     ;
      // });

    } // end of "initial"*

  }, {
    key: "combine",
    value: function combine(proxy) {
      var func = function func(event) {
        proxy.combineLayers(proxy);
        proxy.options.mapController.map.un('postrender', func);
      };
      proxy.options.mapController.map.on('postrender', func);
    }
  }, {
    key: "setPopup",
    value: function setPopup(popupConfig) {
      var feature,
          layer,
          popupContent,
          router,
          routeButtonWrapper,
          routeFromButton,
          routeFromButtonSpan,
          routeToButton,
          routeToButtonSpan,
          routingHandler,
          self = this;

      feature = popupConfig.feature;
      layer = popupConfig.layer;

      popupContent = __WEBPACK_IMPORTED_MODULE_4__c4g_maps_utils__["a" /* utils */].replaceAllPlaceholders(popupConfig.popup.content, feature, layer);
      // @TODO: check for route-option & display "route-to"
      // NOTE: does not work async this way
      if (this.options.mapController.controls.router && popupConfig.popup.routing_link) {
        router = this.options.mapController.controls.router;

        routingHandler = function routingHandler(event) {
          if (self.options.mapController.activePortside !== router) {
            router.open();
          }

          router.setInput($(event.currentTarget).hasClass(__WEBPACK_IMPORTED_MODULE_5__c4g_maps_constant__["a" /* cssConstants */].POPUP_ROUTE_FROM), feature.getGeometry().getCoordinates());
        }; // end of "routingHandler()"

        routeButtonWrapper = document.createElement('div');
        routeButtonWrapper.className = __WEBPACK_IMPORTED_MODULE_5__c4g_maps_constant__["a" /* cssConstants */].POPUP_ROUTE_WRAPPER;

        routeFromButton = document.createElement('button');
        routeFromButton.className = __WEBPACK_IMPORTED_MODULE_5__c4g_maps_constant__["a" /* cssConstants */].ICON + ' ' + __WEBPACK_IMPORTED_MODULE_5__c4g_maps_constant__["a" /* cssConstants */].POPUP_ROUTE_FROM;
        jQuery(routeFromButton).click(routingHandler);
        routeButtonWrapper.appendChild(routeFromButton);

        routeFromButtonSpan = document.createElement('span');
        routeFromButtonSpan.innerHTML = __WEBPACK_IMPORTED_MODULE_6__c4g_maps_constant_i18n_de__["a" /* langConstants */].POPUP_ROUTE_FROM;
        routeFromButton.appendChild(routeFromButtonSpan);

        routeToButton = document.createElement('button');
        routeToButton.className = __WEBPACK_IMPORTED_MODULE_5__c4g_maps_constant__["a" /* cssConstants */].ICON + ' ' + __WEBPACK_IMPORTED_MODULE_5__c4g_maps_constant__["a" /* cssConstants */].POPUP_ROUTE_TO;
        jQuery(routeToButton).click(routingHandler);
        routeButtonWrapper.appendChild(routeToButton);

        routeToButtonSpan = document.createElement('span');
        routeToButtonSpan.innerHTML = __WEBPACK_IMPORTED_MODULE_6__c4g_maps_constant_i18n_de__["a" /* langConstants */].POPUP_ROUTE_TO;
        routeToButton.appendChild(routeToButtonSpan);
      }

      if (popupContent.trim() || router) {
        c4g.maps.popup.$content.html(popupContent);
        if (router) {
          c4g.maps.popup.$content.append(routeButtonWrapper);
        }
        if (feature.getGeometry() && feature.getGeometry() instanceof ol.geom.Point) {
          c4g.maps.popup.popup.setPosition(feature.getGeometry().getCoordinates());
        }
      } else {
        // hide popup if there is no valid content left
        c4g.maps.popup.$popup.removeClass(__WEBPACK_IMPORTED_MODULE_5__c4g_maps_constant__["a" /* cssConstants */].ACTIVE);
      }

      c4g.maps.popup.$popup.removeClass(__WEBPACK_IMPORTED_MODULE_5__c4g_maps_constant__["a" /* cssConstants */].LOADING);
      c4g.maps.popup.spinner.hide();
    } // end of "setPopup()"


  }, {
    key: "addPopUp",
    value: function addPopUp() {

      var popUpElement = void 0,
          popUpCloseElement = void 0,
          popUpContent = void 0,
          popup = void 0;

      popUpElement = document.createElement('div');
      popUpElement.setAttribute('id', 'c4g_popup_' + this.options.mapController.data.mapId);
      popUpElement.className = 'c4g-popup-wrapper';

      popUpCloseElement = document.createElement('button');
      popUpCloseElement.className = "c4g-popup-close c4g-icon";

      popUpContent = document.createElement('div');
      popUpContent.className = "c4g-popup-content";

      popUpElement.appendChild(popUpCloseElement);
      popUpElement.appendChild(popUpContent);

      jQuery(popUpCloseElement).click(function (event) {
        event.preventDefault();
        c4g.maps.popup.$popup.removeClass(__WEBPACK_IMPORTED_MODULE_5__c4g_maps_constant__["a" /* cssConstants */].ACTIVE);
      });

      popup = new ol.Overlay({
        autoPan: true,
        element: popUpElement,
        positioning: 'bottom-left',
        offset: [-50, 0] /*,
                         autoPan: true,
                         autoPanAnimation: {
                         duration: 250
                         },
                         autoPanMargin: 20*/
      });

      c4g.maps.popup = {};
      c4g.maps.popup.popup = popup;
      // attach a spinner to the popup
      c4g.maps.popup.spinner = new __WEBPACK_IMPORTED_MODULE_3__c4g_maps_misc_spinner__["a" /* Spinner */]({ target: popUpElement });

      this.options.mapController.map.addOverlay(popup);

      c4g.maps.popup.$popup = jQuery(c4g.maps.popup.popup.getElement());
      c4g.maps.popup.$content = jQuery('.c4g-popup-content', c4g.maps.popup.$popup);
    } // end of "addPopUp()"


    /**
     * @TODO: [checkLocationStyles description]
     *
     * @param   {[type]}  opt_options  [description]
     *
     * @return  {[type]}               [description]
     */

  }, {
    key: "checkLocationStyles",
    value: function checkLocationStyles(opt_options) {

      var options,
          neededLayerStyles,
          getLayerStyles,
          self = this;

      if (opt_options && (typeof opt_options === "undefined" ? "undefined" : _typeof(opt_options)) === "object") {
        options = opt_options;
      } else {
        options = {};
      }

      this.locationStyleController.arrLocStyles = this.locationStyleController.arrLocStyles || {};

      neededLayerStyles = [];
      getLayerStyles = function getLayerStyles(layers) {
        var i, element, index;

        // ToDo: Rekursion integrieren (test mit forum)
        for (index in layers) {
          if (layers.hasOwnProperty(index)) {
            element = layers[index];

            if (element.content) {
              for (i = 0; i < element.content.length; i += 1) {

                if (element.content[i]) {
                  if (element.content[i].locationStyle && element.content[i].locationStyle !== "0" && neededLayerStyles.indexOf(element.content[i].locationStyle) === -1 && (!self.locationStyleController.arrLocStyles[element.content[i].locationStyle] || self.locationStyleController.arrLocStyles[element.content[i].locationStyle].style === undefined)) {
                    neededLayerStyles.push(element.content[i].locationStyle);
                  }
                }
              }
            }
          }
        }
      };

      getLayerStyles(this.layerController.arrLayers);

      if (neededLayerStyles.length > 0) {
        this.locationStyleController.loadLocationStyles(neededLayerStyles, options);
      } else {
        if (options.done && typeof options.done === "function") {
          options.done();
        }
      }
    } // end of "checkLocationStyles()"

  }, {
    key: "combineLayers",
    value: function combineLayers(proxy) {

      var i,
          j,
          k,
          layerId,
          layers,
          contentDataLayer,
          contentData,
          layer,
          layerGroups = [],
          source,
          style,
          features = [],
          styles = [],
          oneFeature,
          feature,
          vectorSource,
          clusterSource,
          vectorLayer;

      if (proxy.options.mapController.data.cluster_all === '1') {
        contentData = proxy.options.mapController.data;
        for (i in proxy.activeLayerIds) {
          //loop to get all layers
          layers = c4g.maps.layers[i];

          if (layers.type === "gpx") {
            continue;
          }

          if (layers && layers.vectorLayer) {
            if (layers.vectorLayer.getLayers() && layers.vectorLayer.getLayers().getArray()[0] && layers.vectorLayer.getLayers().getArray()[0].getSource() && layers.vectorLayer.getLayers().getArray()[0].getSource().getFeatures().length > 0) {
              proxy.options.mapController.map.removeLayer(layers.vectorLayer);
            }

            contentDataLayer = layers.content;
            layers.vectorLayer.getLayers().content = contentDataLayer;
            layerGroups.push(layers.vectorLayer.getLayers());
          }
        }
        for (k = 0; k < layerGroups.length; k++) {
          //loop to extract features from layers
          if (layerGroups[k].getArray().length > 0) {
            layer = layerGroups[k].getArray();
            source = layer["0"].getSource();
            style = layer["0"].getStyle();

            oneFeature = true;
            feature = source.getFeatures();
            for (j = 0; j < feature.length; j++) {
              //loop over all features from a source
              if (feature[j].get("features")) {
                for (i = 0; i < feature[j].get("features").length; i++) {
                  //loop for clustered features
                  if (layerGroups[k].content[j]) {
                    style = this.locationStyleController.arrLocStyles[layerGroups[k].content[j].locationStyle];
                  } else if (layerGroups[k].content[0]) {
                    style = this.locationStyleController.arrLocStyles[layerGroups[k].content[0].locationStyle];
                  }

                  feature[j].get("features")[i].setStyle(style.style);
                  if (!feature[j].get("features")[i].get('popup')) {
                    feature[j].get("features")[i].set('popup', layer['0'].popup);
                  }
                }
                features.push(feature[j].get("features"));

                oneFeature = false;
              }
            }
            if (oneFeature) {
              //single not clustered feature
              if (feature.length >= 1) {
                if (!feature['0'].get('popup')) {
                  feature['0'].set('popup', layer.popup);
                }
                features.push(feature);
              }
            }
          }
        }

        vectorSource = new ol.source.Vector({
          projection: 'EPSG:3857'

        });

        for (i = 0; i < features.length; i++) {
          vectorSource.addFeatures(features[i]);
        }

        clusterSource = new ol.source.Cluster({
          distance: 40,
          //threshold: 2, //minimum element count
          source: vectorSource
        });
        var styleForCluster = function styleForCluster(feature, resolution) {
          if (feature && feature.get('features') && feature.get('features')['0'].getStyle()) {
            style = feature.get('features')['0'].getStyle()(feature);
            if (feature !== undefined && feature !== null && feature.self !== window) {
              var fFeatures = feature.get('features');
              var size = fFeatures.length;
              if (size > 1) {
                if (!style) {
                  style = [];
                }

                // calculate bubble-offset
                var iconOffset = [0, 0];
                if (style[0]) {
                  if (typeof style[0].getImage().getRadius === "function") {
                    var radius = parseInt(style[0].getImage().getRadius(), 10);
                    if (radius) {
                      iconOffset = [0, radius];
                    }
                  } else if (typeof style[0].getImage().getAnchor === "function") {
                    iconOffset = style[0].getImage().getAnchor() || [0, 0];
                  }
                }

                var fillcolor = __WEBPACK_IMPORTED_MODULE_4__c4g_maps_utils__["a" /* utils */].getRgbaFromHexAndOpacity('4975A8', {
                  unit: '%',
                  value: 70
                });

                if (contentData.cluster_fillcolor) {
                  fillcolor = __WEBPACK_IMPORTED_MODULE_4__c4g_maps_utils__["a" /* utils */].getRgbaFromHexAndOpacity(contentData.cluster_fillcolor, {
                    unit: '%',
                    value: 70
                  });
                }
                var fontcolor = contentData.cluster_fontcolor ? '#' + contentData.cluster_fontcolor : '#FFFFFF';

                style.push(new ol.style.Style({
                  text: new ol.style.Text({
                    text: "●",
                    font: "60px sans-serif",
                    offsetX: -1 * iconOffset[0],
                    offsetY: -1 * iconOffset[1],
                    fill: new ol.style.Fill({
                      color: fillcolor
                    })
                  })
                }));
                style.push(new ol.style.Style({
                  text: new ol.style.Text({
                    text: size.toString(),
                    offsetX: -1 * iconOffset[0],
                    offsetY: -1 * iconOffset[1] + 3,
                    fill: new ol.style.Fill({
                      color: fontcolor
                    })
                  })
                }));
              }
            }
          } else {
            if (feature && feature.get('features') && feature.get('features')['0'].getStyle()) {
              return feature.get('features')['0'].getStyle()(feature);
            } else {
              return null;
            }
          }
          return style;
        };

        //vectorLayer = self.getVectorLayer(clusterSource, styleForCluster);

        vectorLayer = new ol.layer.Vector({
          name: 'Cluster',
          source: clusterSource,
          style: styleForCluster

        });

        var allLayers = proxy.options.mapController.map.getLayers().getArray();
        var missingLayer = true;
        for (i = 0; i < allLayers.length; i++) {

          if (allLayers[i].clusters) {
            allLayers[i] = vectorLayer;
            missingLayer = false;
          }
        }
        if (missingLayer) {
          proxy.options.mapController.map.addLayer(vectorLayer);
        }
      }
    } //end of combineLayers


  }, {
    key: "checkLayerIsActiveForZoom",
    value: function checkLayerIsActiveForZoom(layerId, opt_zoom) {
      var layer, zoom, layerContent, locstyle;

      if (!this.layerController.arrLayers[layerId]) {
        return false;
      }

      layer = this.layerController.arrLayers[layerId];

      if (opt_zoom) {
        zoom = opt_zoom;
      } else if (this.options.mapController.map.getView().getZoom() > -1) {
        zoom = this.options.mapController.map.getView().getZoom();
      } else {
        zoom = false;
      }
      if (layer.zoom === undefined) {
        if (layer.content && layer.content.length > 0) {
          for (var i = 0; i < layer.content.length; i++) {
            layerContent = layer.content[i];
            if (layerContent.locationStyle) {
              locstyle = this.locationStyleController.arrLocStyles[layerContent.locationStyle];
              // TODO check all locstyles and take the most constraining zoom value
              if (locstyle) {
                layer.zoom = {};
                if (locstyle.maxzoom) {
                  layer.zoom.max = locstyle.maxzoom;
                }
                if (locstyle.minzoom) {
                  layer.zoom.min = locstyle.minzoom;
                }
                if (layer.zoom.max || layer.zoom.min) {
                  break;
                }
              }
            }
          }
        }
      }
      if (typeof zoom === "number" && layer.zoom && (layer.zoom.min > zoom || layer.zoom.max > 0 && layer.zoom.max < zoom)) {
        return false;
      }

      return true;
    } // end of "checkLayerIsActive()"

  }]);

  return MapProxy;
}();

/***/ }),

/***/ "./Resources/public/js/c4g-maps-utils.js":
/*!***********************************************!*\
  !*** ./Resources/public/js/c4g-maps-utils.js ***!
  \***********************************************/
/*! exports provided: utils */
/*! exports used: utils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return utils; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__ = __webpack_require__(/*! ./c4g-maps-constant */ "./Resources/public/js/c4g-maps-constant.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__c4g_maps_control_zoomlevel__ = __webpack_require__(/*! ./c4g-maps-control-zoomlevel */ "./Resources/public/js/c4g-maps-control-zoomlevel.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__c4g_maps_popup_info_de__ = __webpack_require__(/*! ./c4g-maps-popup-info-de */ "./Resources/public/js/c4g-maps-popup-info-de.js");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// "namespace"
this.c4g = this.c4g || {};
this.c4g.maps = this.c4g.maps || {};





(function ($, c4g) {
  'use strict';

  /**
   * c4g-Maps utility functions
   */

  c4g.maps.utils = $.extend(c4g.maps.utils, {
    /**
     *  Converts the first letter of a given string to uppercase, leaving the remaining string untouched.
     *
     *  @param    {string}    the string to capitalize
     *
     *  @return   {string}    the capitalized string
     */
    capitalizeFirstLetter: function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },

    /**
     * Generate an unique id.
     *
     * The id is 9 characters long and prefixed with an underscore.
     *
     * @return  {string}  The generated id.
     */
    getUniqueId: function getUniqueId() {
      // Math.random should be unique because of its seeding algorithm.
      // Convert it to base 36 (numbers + letters), and grab the first 9 characters
      // after the decimal.
      return '_' + Math.random().toString(36).substr(2, 9);
    },

    /**
     * Encode input strings for GeoJSON-Objects properly,
     * so they will not break the Code.
     * Transforms:
     *   \ -> \\;
     *   " -> '';
     *   Ä -> &Auml;
     *   ä -> &auml;
     *   Ö -> &Ouml;
     *   ö -> &ouml;
     *   Ü -> &Uuml;
     *   ü -> &uuml;
     *
     * @param   {string}  input  [description]
     *
     * @return  {string}         [description]
     */
    encodeGeoJsonProperty: function encodeGeoJsonProperty(input) {
      var output;

      if (!input) {
        return '';
      }

      output = input.replace(/\\/g, '\\\\').replace(/\"/g, '\'\'').replace(/Ä/g, '&Auml;').replace(/ä/g, '&auml;').replace(/Ö/g, '&Ouml;').replace(/ö/g, '&ouml;').replace(/Ü/g, '&Uuml;').replace(/ü/g, '&uuml;');

      return output;
    }, // end of encodeGeoJsonProperty()

    /**
     * Decode input strings for GeoJSON-Objects properly,
     * so they will be displayed correctly.
     * Transforms:
     *   \\     -> \;
     *   ''     -> ";
     *   &Auml; -> Ä
     *   &auml; -> ä
     *   &Ouml; -> Ö
     *   &ouml; -> ö
     *   &Uuml; -> Ü
     *   &uuml; -> ü
     *
     * @param   {string}  input  [description]
     *
     * @return  {string}         [description]
     */
    decodeGeoJsonProperty: function decodeGeoJsonProperty(input) {
      var output;

      if (!input) {
        return '';
      }
      if (typeof input !== "string") {
        input = input + "";
      }

      output = input.replace(/\\\\/g, '\\').replace(/\'\'/g, '\"').replace(/&Auml;/g, 'Ä').replace(/&auml;/g, 'ä').replace(/&Ouml;/g, 'Ö').replace(/&ouml;/g, 'ö').replace(/&Uuml;/g, 'Ü;').replace(/&uuml;/g, 'ü');

      return output;
    }, // end of decodeGeoJsonProperty()

    /**
     * Create or replace an URL-parameter.
     *
     * If `opt_getKey` is `false` or `undefined` the given parameter, `param`,
     * will be applied as "hash-parameter".
     * e.g.:
     *   https://myurl.de:port/path/to/maps#param
     * Note, that already existing "hash-parameters" will be overriden,
     * whereas existing "GET-parameters" stay untouched.
     *
     * If `opt_getKey` is set, it will be applied as "GET-parameter".
     * e.g.:
     *   https://myurl.de:port/path/to/maps?opt_getKey=param
     * If the key described by `opt_getKey` is already existing, its value will be overriden,
     * otherwise the key-value-pair will be appended appropriatly.
     * Already existing "hash-parameters" will stay untouched.
     *
     * If `opt_execute` is `false` or `undefined`, the function will return the new link as `string`,
     * otherwise the "href/location" will be changed directly in the browser, which can cause a pagereload.
     *
     * @param  {string}                    param        [description]
     * @param  {undefined|boolean|string}  opt_getKey   Default: `undefined`
     * @param  {undefined|boolean}         opt_execute  Default: `undefined`
     */
    setUrlParam: function setUrlParam(param, opt_getKey, opt_execute) {
      var link, searchParam, paramReplaced, i;

      if ((typeof param === "undefined" ? "undefined" : _typeof(param)) === undefined) {
        return false;
      }

      link = location.origin + location.pathname;

      if (!opt_getKey) {
        // use hash-parameter
        if (opt_execute) {
          location.hash = param;
          return true;
        }
        link += location.search + '#' + param;
      } else {
        // use GET-parameter
        if (location.search) {
          // there are already search-parameters
          paramReplaced = false;
          opt_getKey = opt_getKey.toLowerCase();
          // replace parameter if already existent
          searchParam = location.search.replace(/([^=\?\&]+)=([^&]+)/gi, function (match, key, value, offset, originString) {
            if (key === opt_getKey) {
              paramReplaced = true;
              return key + '=' + param;
            }
            return match;
          });
          // otherwise append as new parameter
          if (!paramReplaced) {
            searchParam += '&' + opt_getKey + '=' + param;
          }
        } else {
          // this will be the only search-parameter in the URL
          searchParam = '?' + opt_getKey + '=' + param;
        }
        if (opt_execute) {
          location.search = searchParam;
          return true;
        }
        link += searchParam + location.hash;
      }

      return link;
    }, // end of setUrlParam()

    /**
     * Get search or hash URL-parameter as string.
     *
     * If `opt_getKey` is `false` or `undefined`, the hash-parameter of the URL is returned,
     * otherwise it will search for a GET-parameter and return its value.
     *
     * If a parameter is not existent, or empty, an empty string will be returned.
     *
     * @param   {undefined|string}  opt_getKey  Default: `undefined`
     *
     * @return  {string}                        The found parameter.
     */
    getUrlParam: function getUrlParam(opt_getKey) {
      var param, regEx;

      if (!opt_getKey) {
        param = location.hash.substring(1);
      } else {
        if (!location.search) {
          param = '';
        } else {
          regEx = new RegExp('[\?\&]' + opt_getKey + '=([^&]+)', 'i');
          param = regEx.exec(location.search);
          param = param ? param[1] : '';
        }
      }

      return param;
    }, // end of getUrlParam()

    /**
     * Delta-encode an array of numbers.
     * Note that the array will be sorted (lowest to highest)
     * before encoding.
     *
     * So after the encoding the first value of the output contains
     * the smallest number of the set and each following number just
     * represents the offset to its previous neighbor.
     *
     * This is mostly efficient for high numbers, that are "close to each other".
     *
     * Example:
     *   [1337, 11, 101, 123, 96, 69, 42, 42]
     *   will be sorted
     *   [11, 42, 42, 69, 96, 101, 123, 1337]
     *   and encoded to
     *   [11, 31, 0, 27, 27, 5, 22, 1214]
     *
     * @param   {array<numbers>}  arrInput  [description]
     *
     * @return  {array<numbers>}            [description]
     */
    deltaEncode: function deltaEncode(arrInput) {
      var arrOutput, i;

      if (!arrInput) {
        return [];
      }
      if (arrInput.length === 1) {
        return arrInput;
      }

      arrInput.sort(function (a, b) {
        return a - b;
      });

      arrOutput = [];
      arrOutput[0] = arrInput[0];
      for (i = 1; i < arrInput.length; i += 1) {
        arrOutput[i] = arrInput[i] - arrInput[i - 1];
      }

      return arrOutput;
    }, // end of deltaEncode()

    /**
     * Decode a delta-encoded array.
     * See `deltaEncode` function for more detailed information.
     *
     * @param   {array<numbers>}  arrInput  [description]
     *
     * @return  {array<numbers>}            [description]
     */
    deltaDecode: function deltaDecode(arrInput) {
      var arrOutput, i;

      if (!arrInput) {
        return [];
      }

      arrOutput = [];
      arrOutput[0] = parseInt(arrInput[0], 10);
      if (isNaN(arrInput[0])) {
        return [];
      }
      for (i = 1; i < arrInput.length; i += 1) {
        arrOutput[i] = parseInt(arrInput[i], 10) + arrOutput[i - 1];
        if (isNaN(arrOutput[i])) {
          return [];
        }
      }

      return arrOutput;
    }, // end of deltaDecode()

    /**
     * Check and call functions in `arrHookFunctions` with given `parameters`.
     *
     * @param   {array<function>}   arrHookFunctions  [description]
     * @param   {mixed}             parameters        [description]
     */
    callHookFunctions: function callHookFunctions(arrHookFunctions, parameters) {
      var j;

      if (arrHookFunctions && arrHookFunctions.length > 0) {
        for (j = 0; j < arrHookFunctions.length; j += 1) {
          if (typeof arrHookFunctions[j] === 'function') {
            arrHookFunctions[j](parameters);
          }
        }
      }
    }, // end of "callHookFunctions()"

    /**
     * Convert a hex-formated color value into rgba()-format.
     *
     * @param   {string|number}  hex          [description]
     * @param   {string|number}  opt_opacity  [description]
     *
     * @return  {string}                      [description]
     */
    getRgbaFromHexAndOpacity: function getRgbaFromHexAndOpacity(hex, opt_opacity, opt_array) {

      var bigint, r, g, b, a;

      bigint = parseInt(hex, 16);
      if (opt_opacity && opt_opacity.value) {
        opt_opacity.value = parseInt(opt_opacity.value);
      }

      if (opt_opacity && typeof opt_opacity !== 'number') {
        if ((typeof opt_opacity === "undefined" ? "undefined" : _typeof(opt_opacity)) === 'object' && opt_opacity.value) {
          opt_opacity = opt_opacity.value;
        } else {
          opt_opacity = 100;
        }
      }

      r = bigint >> 16 & 255;
      g = bigint >> 8 & 255;
      b = bigint & 255;
      a = opt_opacity ? opt_opacity / 100 : 1;
      if (opt_array) {
        return [r, g, b, a];
      }

      return "rgba(" + r + "," + g + "," + b + "," + a + ")";
    },

    /**
     * Reduce a defined style, to a simpler version.
     *
     * The reduced style is the first style of the defined styleset,
     * with a 1px thick stroke and a circle with a 5px radius.
     *
     * This can be used to display additional geometries with a main-geometry,
     * without having to define a whole new style.
     *
     * @param   {number|string}           styleId  [description]
     *
     * @return  {array<ol.style.Style>}            [description]
     */
    reduceStyle: function reduceStyle(styleId) {
      var style, reducedStyle, fillStyle, strokeStyle;

      if (!c4g.maps.locationStyles[styleId] || !c4g.maps.locationStyles[styleId].style) {
        return [];
      }

      style = c4g.maps.locationStyles[styleId].style()[0];

      fillStyle = style.getFill();
      strokeStyle = style.getStroke();
      strokeStyle.setWidth(1);

      reducedStyle = new ol.style.Style({
        image: new ol.style.Circle({
          fill: fillStyle,
          stroke: strokeStyle,
          radius: 5
        }),
        // text: style.getText(),
        stroke: strokeStyle,
        fill: fillStyle
      });

      return [reducedStyle];
    }, // end of "reduceStyle"

    /**
     * Measure the dimensions of the given geometry.
     *
     * If the geometry is a `LineString` the function will measure its length,
     * is it a `Polygon` it will measure the acreage,
     * otherwise it will return `0`.
     *
     * If the optional `opt_forceLineMeasure` parameter is `true`
     * and the geometry is a `Polygon` it will measure its perimeter instead
     * of its acreage.
     *
     * @param   {ol.geom.LineString|ol.geom.Polygon}   geometry              [description]
     * @param   {undefined|boolean}                    opt_forceLineMeasure  [description]
     *
     * @return  {array<string>|number}                                       [description]
     */
    measureGeometry: function measureGeometry(geometry, opt_forceLineMeasure, opt_forceSurfaceMeasure) {
      var value, sphere, coordinates, coord1, coord2, result, i;

      if (!geometry) {
        return false;
      }

      //sphere = new ol.Sphere(6378137);
      result = {};

      if (geometry instanceof ol.geom.LineString || geometry instanceof ol.geom.Polygon && opt_forceLineMeasure) {

        coordinates = geometry.getCoordinates();
        if (geometry instanceof ol.geom.Polygon) {
          coordinates = coordinates[0];
        }
        value = 0;
        for (i = 0; i < coordinates.length - 1; i += 1) {
          coord1 = ol.proj.transform(coordinates[i], 'EPSG:3857', 'EPSG:4326');
          coord2 = ol.proj.transform(coordinates[i + 1], 'EPSG:3857', 'EPSG:4326');
          value += ol.sphere.getDistance(coord1, coord2, 6378137);
        }
        result.rawValue = (Math.round(value * 100) / 100).toFixed(2);
        if (value > 1000) {
          result.htmlValue = (Math.round(value / 1000 * 100) / 100).toFixed(2) + ' ' + 'km';
        } else {
          result.htmlValue = result.rawValue + ' ' + 'm';
        }
      } else if (geometry instanceof ol.geom.Polygon) {
        //geometry = /** @type {ol.geom.Polygon} */(geometry.clone().transform('EPSG:3857', 'EPSG:4326'));
        //coordinates = geometry.getLinearRing(0).getCoordinates();
        value = Math.abs(ol.sphere.getArea(geometry));
        result.rawValue = (Math.round(value * 100) / 100).toFixed(2);
        if (value > 10000) {
          result.htmlValue = (Math.round(value / 1000000 * 100) / 100).toFixed(2) + ' ' + 'km<sup>2</sup>';
        } else {
          result.htmlValue = result.rawValue + ' ' + 'm<sup>2</sup>';
        }
      } else if (geometry instanceof ol.geom.Circle && opt_forceSurfaceMeasure) {
        var center = geometry.getCenter();
        var radius = geometry.getRadius();
        var edgeCoordinate = [center[0] + radius, center[1]];
        //var wgs84Sphere = new ol.Sphere(6378137);
        var value = ol.sphere.getDistance(ol.proj.transform(center, 'EPSG:3857', 'EPSG:4326'), ol.proj.transform(edgeCoordinate, 'EPSG:3857', 'EPSG:4326'), 6378137);

        value = Math.PI * Math.sqrt(value);

        result.rawValue = (Math.round(value * 100) / 100).toFixed(2);
        if (value > 10000) {
          result.htmlValue = (Math.round(value / 1000000 * 100) / 100).toFixed(2) + ' ' + 'km<sup>2</sup>';
        } else {
          result.htmlValue = result.rawValue + ' ' + 'm<sup>2</sup>';
        }
      } else if (geometry instanceof ol.geom.Circle) {
        var center = geometry.getCenter();
        var radius = geometry.getRadius();
        var edgeCoordinate = [center[0] + radius, center[1]];
        //var wgs84Sphere = new ol.Sphere(6378137);
        var value = ol.sphere.getDistance(ol.proj.transform(center, 'EPSG:3857', 'EPSG:4326'), ol.proj.transform(edgeCoordinate, 'EPSG:3857', 'EPSG:4326'), 6378137);

        result.rawValue = (Math.round(value * 100) / 100).toFixed(2);
        if (result.rawValue > 10000) {
          result.htmlValue = (Math.round(value * 100 / 100) / 1000).toFixed(2) + ' ' + 'km';
        } else {
          result.htmlValue = result.rawValue + ' ' + 'm';
        }
      } else {
        result = 0;
      }

      return result;
    },

    /**
     * Calculate extent for an array of geometries.
     *
     * @param   {Array.<ol.geom.simpleGeometry>}  arrGeometries  [description]
     *
     * @return  {ol.Extent}                                      [description]
     */
    getExtentForGeometries: function getExtentForGeometries(arrGeometries) {
      var extentSource;

      if (!arrGeometries) {
        console.warn('Geometries missing for extent calculation');
        return false;
      }

      extentSource = new ol.source.Vector();
      extentSource.addFeatures(arrGeometries);

      return extentSource.getExtent() || ol.Extent([0, 0, 0, 0]);
    }, // end of getExtentForGeometries()

    /**
     * Fit view of `map` to a given array of `extents`.
     * Animated if `opt_animationDuration` is an integer > 0.
     *
     * @param   {object}     extents                 [description]
     * @param   {ol.Map}     map                    [description]
     * @param   {integer}    opt_animationDuration  [description]
     *
     * @return  {boolean}                           [description]
     */
    fitToExtents: function fitToExtents(extents, map, opt_padding, opt_animationDuration) {
      var view, padding, extent, key;

      if (!extents || !map) {
        console.warn('Missing extent or map for fitExtent');
        return false;
      }
      //extent = ol.extent.createEmpty();

      for (key in extents) {
        if (extents.hasOwnProperty(key)) {
          if (typeof extent === "undefined") {
            extent = extents[key];
          } else {
            ol.extent.extend(extent, extents[key]);
          }
        }
      }

      this.fitToExtent(extent, map, opt_padding, 5, 0, 0, 2);
    }, // end of fitToExtents

    /**
     * Fit view of `map` to a given `extent`.
     * Animated if `opt_animationDuration` is an integer > 0.
     *
     * @param   {ol.Extent}  extent                 [description]
     * @param   {ol.Map}     map                    [description]
     * @param   {array}      opt_padding            [description]
     * @param   {integer}    opt_animationDuration  [description]
     * @param   {integer}    opt_minZoom            [description]
     * @param   {integer}    opt_maxZoom            [description]
     * @param   {integer}    opt_minResolution      [description]
     *
     * @return  {boolean}                           [description]
     */
    fitToExtent: function fitToExtent(extent, map, opt_padding, opt_animationDuration, opt_minZoom, opt_maxZoom, opt_minResolution) {
      var view, padding, fitOptions;

      if (!extent || !map) {
        console.warn('Missing extent or map for fitExtent');
        return false;
      }

      view = map.getView();

      fitOptions = {
        'padding': opt_padding || [25, 25, 25, 25]
      };

      if (opt_minResolution && opt_minResolution > 0) {
        fitOptions.minResolution = opt_minResolution;
      }

      if (opt_minZoom && opt_minZoom >= 0) {
        fitOptions.minZoom = opt_minZoom;
      }

      if (opt_maxZoom && opt_maxZoom >= 0) {
        fitOptions.maxZoom = opt_maxZoom;
      }

      // animate the "fitting" when a duration is given and its greater than 0
      if (opt_animationDuration && opt_animationDuration > 0) {
        view.animate({
          start: +new Date(),
          duration: opt_animationDuration,
          resolution: view.getResolution(),
          center: [0, 0]
          //rotation: Math.PI
        });
        // map.beforeRender(
        //     ol.animation.pan({
        //       start: +new Date(),
        //       duration: opt_animationDuration,
        //       source: view.getCenter()
        //     }),
        //     ol.animation.zoom({
        //       start: +new Date(),
        //       duration: opt_animationDuration,
        //       resolution: view.getResolution()
        //     })
        // );
      }

      try {
        view.fit(extent, map.getSize(), { padding: [25, 25, 25, 25] });
        //view.fit(extent, map.getSize());
        //view.setZoom(view.getZoom()-1);
        return true;
      } catch (e) {
        return false;
      }
    }, // end of fitToExtent()

    /**
     * Convenience function to run all placeholder functions at once.
     *
     * @param   {string}                      strInput   [description]
     * @param   {ol.Feature}                  feature    [description]
     * @param   {ol.layer.Layer | undefined}  opt_layer  [description]
     *
     * @return  {string}                                 [description]
     */
    replaceAllPlaceholders: function replaceAllPlaceholders(strInput, feature, opt_layer) {
      var strOutput;

      // only check the first two parameters as they will be used by all placeholder-functions
      // -> for performance
      if (!strInput || !feature) {
        return strInput;
      }

      strOutput = this.replaceFunctionPlaceholders(strInput, feature, opt_layer);
      strOutput = this.replaceEditorVarsPlaceholders(strOutput, feature);
      strOutput = this.replaceAttributePlaceholders(strOutput, feature);

      return strOutput;
    }, // end of replaceAllPlaceholders()

    /**
     * Replace every occurance of `${FNfunctionName}`, in `strInput`,
     * with the result of `window.functionName(feature, style)`, if it exist.
     * Otherwise the placeholder will be simply removed (/replaced with '').
     * Style will be taken either from the feature, or the layer.
     *
     * @param   {string}          strInput  [description]
     * @param   {ol.Feature}      feature   [description]
     * @param   {ol.layer.Layer}  layer     [description]
     *
     * @return  {string}                    [description]
     */
    replaceFunctionPlaceholders: function replaceFunctionPlaceholders(strInput, feature, layer) {
      var strOutput;

      if (!strInput || !feature || !layer) {
        return strInput;
      }

      strOutput = strInput.replace(/\$\{FN([^\}]*)\}/g, function (match, functionName, offset, originString) {
        var style;

        // check if function exists
        if (typeof __WEBPACK_IMPORTED_MODULE_2__c4g_maps_popup_info_de__[functionName] === 'function') {
          // search style
          if (typeof feature.getStyle === 'function' && feature.getStyle() && typeof feature.getStyle() === 'function') {
            style = feature.getStyle();
          } else if (typeof layer.getStyle === 'function' && layer.getStyle()) {
            style = layer.getStyle();
          } else {
            return '';
          }
          return __WEBPACK_IMPORTED_MODULE_2__c4g_maps_popup_info_de__[functionName](feature, style);
        }
        return '';
      }); // end of replace()

      return strOutput;
    }, // end of replaceFunctionPlaceholders()

    /**
     * Replace placeholders, in `strInput`, for variables set by the geoEditor.
     * Valid placeholders are: ([key] represents the stringname of the variables key)
     *   `${EL[key]}`   =>  Label for the variable
     *   `${EVL[key]}`  =>  Label for the variable, if a value is set too
     *   `${EV[key]}`   =>  Value of the variable
     *   `${EVV[key]}`  =>  Same as `${EV[key]}`
     *
     * If no appropriate value can be found for a placeholder
     * it will simply be removed (/replaced with '').
     *
     * @param   {string}      strInput  [description]
     * @param   {ol.Feature}  feature   [description]
     *
     * @return  {string}                [description]
     */
    replaceEditorVarsPlaceholders: function replaceEditorVarsPlaceholders(strInput, feature) {
      var strOutput;

      if (!strInput || !feature || typeof feature.get !== 'function') {
        return strInput;
      }

      strOutput = strInput.replace(/\$\{(EV?[LV])([^\}]*)\}/g, function (match, type, evKey, offset, originString) {
        var editorVars, i;

        // check if feature has editorVars
        if (feature.get('editorVars')) {
          editorVars = feature.get('editorVars');
          // search for editorVar with key == evKey
          for (i = 0; i < editorVars.length; i += 1) {
            if (editorVars[i].key === evKey) {
              // if type is 'EVL' display label only if a value is set too
              if (type === 'EL' || type === 'EVL' && editorVars[i].value) {
                return editorVars[i].label;
              } else {
                return editorVars[i].value;
              }
            }
          }
        }
        return '';
      }); // end of replace()

      return strOutput;
    }, // end of replaceEditorVarsPlaceholders()

    /**
     * Replace every occurance of `${attr}`, in `strInput`,
     * with the result of `feature.get(attr)`, if it exist.
     * Otherwise the placeholder will be simply removed (/replaced with '').
     *
     * @param   {string}      strInput  [description]
     * @param   {ol.Feature}  feature   [description]
     *
     * @return  {string}                [description]
     */
    replaceAttributePlaceholders: function replaceAttributePlaceholders(strInput, feature) {
      var strOutput;

      if (!strInput || !feature || typeof feature.get !== 'function') {
        return strInput;
      }

      strOutput = strInput.replace(/\$\{([^\}]*)\}/g, function (match, attr, offset, originString) {
        return feature.get(attr) || '';
      }); // end of replace()

      return strOutput;
    }, // end of replaceAttributePlaceholders()

    objectToArray: function objectToArray(object) {
      if (object && (typeof object === "undefined" ? "undefined" : _typeof(object)) === 'object') {
        object = Object.keys(object).map(function (key) {
          return object[key];
        });
      }
      return object;
    }, // end of objectToArray()

    getVectorLayer: function getVectorLayer(source, style) {
      var fnStyle;

      // make sure that the style is a function
      if (typeof style === 'function') {
        fnStyle = style;
      } else if (style !== undefined) {
        fnStyle = function fnStyle() {
          return style;
        };
      }

      return new ol.layer.Vector({
        source: source,
        style: fnStyle
      });
    },
    // end of "getVectorLayer()"

    /**
     * Extracts the subdomain from the current request host and returns it.
     * @returns {string | *}
     */
    getCurrentSubdomain: function getCurrentSubdomain() {
      return window.location.href;
    },


    redrawMapView: function redrawMapView(mapController) {
      var mapData = mapController.data;
      var controlContainerTopLeft = document.createElement('div');
      controlContainerTopLeft.className = __WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["a" /* cssConstants */].CONTROL_CONTAINER_TL + ' ' + __WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["a" /* cssConstants */].OL_UNSELECTABLE;
      mapController.$overlaycontainer_stopevent.prepend(controlContainerTopLeft);

      var controlContainerBottomLeft = document.createElement('div');
      controlContainerBottomLeft.className = __WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["a" /* cssConstants */].CONTROL_CONTAINER_BL + ' ' + __WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["a" /* cssConstants */].OL_UNSELECTABLE;
      $(controlContainerTopLeft).after(controlContainerBottomLeft);
      mapController.leftSlideElements.push(controlContainerBottomLeft);

      var controlContainerBottomLeftSub = document.createElement('div');
      controlContainerBottomLeftSub.className = __WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["a" /* cssConstants */].CONTROL_CONTAINER_BL_SUB + ' ' + __WEBPACK_IMPORTED_MODULE_0__c4g_maps_constant__["a" /* cssConstants */].OL_UNSELECTABLE;

      if (mapData.scaleline) {
        mapController.map.removeControl(mapController.controls.scaleline);
        mapController.controls.scaleline = new ol.control.ScaleLine({
          mapView: mapController.map.getView(),
          target: controlContainerBottomLeft,
          undefinedHTML: 'N/A'
        });
        mapController.map.addControl(mapController.controls.scaleline);
      }

      $(controlContainerBottomLeft).append(controlContainerBottomLeftSub);

      if (mapData.zoomlevel) {
        mapController.map.removeControl(mapController.controls.zoomlevel);
        mapController.controls.zoomlevel = new __WEBPACK_IMPORTED_MODULE_1__c4g_maps_control_zoomlevel__["a" /* Zoomlevel */]({
          mapView: mapController.map.getView(),
          target: controlContainerBottomLeftSub,
          undefinedHTML: 'N/A'
        });
        mapController.map.addControl(mapController.controls.zoomlevel);
      }

      if (mapData.mouseposition) {
        mapController.map.removeControl(mapController.controls.mouseposition);
        mapController.controls.mouseposition = new ol.control.MousePosition({
          projection: 'EPSG:4326',
          coordinateFormat: ol.coordinate.toStringHDMS,
          target: controlContainerBottomLeftSub,
          undefinedHTML: 'N/A'
        });
        mapController.map.addControl(mapController.controls.mouseposition);
      }
    },
    getValue: function getValue(key) {
      return localStorage[key] || '';
    },
    storeValue: function storeValue(key, value) {
      localStorage[key] = value; // only strings
    }
  });
})(jQuery, this.c4g);

var utils = this.c4g.maps.utils;

/***/ }),

/***/ "./Resources/public/js/c4g-maps.js":
/*!*****************************************!*\
  !*** ./Resources/public/js/c4g-maps.js ***!
  \*****************************************/
/*! exports provided: MapController */
/*! exports used: MapController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapController; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__c4g_maps_proxy__ = __webpack_require__(/*! ./c4g-maps-proxy */ "./Resources/public/js/c4g-maps-proxy.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant__ = __webpack_require__(/*! ./c4g-maps-constant */ "./Resources/public/js/c4g-maps-constant.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant_i18n_de__ = __webpack_require__(/*! ./c4g-maps-constant-i18n-de */ "./Resources/public/js/c4g-maps-constant-i18n-de.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__c4g_maps_misc_spinner__ = __webpack_require__(/*! ./c4g-maps-misc-spinner */ "./Resources/public/js/c4g-maps-misc-spinner.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__c4g_maps_misc_maphover__ = __webpack_require__(/*! ./c4g-maps-misc-maphover */ "./Resources/public/js/c4g-maps-misc-maphover.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__c4g_maps_utils__ = __webpack_require__(/*! ./c4g-maps-utils */ "./Resources/public/js/c4g-maps-utils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__c4g_maps_control_portside_router__ = __webpack_require__(/*! ./c4g-maps-control-portside-router */ "./Resources/public/js/c4g-maps-control-portside-router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__c4g_maps_control_portside_measuretools__ = __webpack_require__(/*! ./c4g-maps-control-portside-measuretools */ "./Resources/public/js/c4g-maps-control-portside-measuretools.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__c4g_maps_control_print__ = __webpack_require__(/*! ./c4g-maps-control-print */ "./Resources/public/js/c4g-maps-control-print.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__c4g_maps_control_grid__ = __webpack_require__(/*! ./c4g-maps-control-grid */ "./Resources/public/js/c4g-maps-control-grid.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__c4g_maps_control_zoomlevel__ = __webpack_require__(/*! ./c4g-maps-control-zoomlevel */ "./Resources/public/js/c4g-maps-control-zoomlevel.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__c4g_maps_control_overviewmap__ = __webpack_require__(/*! ./c4g-maps-control-overviewmap */ "./Resources/public/js/c4g-maps-control-overviewmap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__c4g_maps_control_permalink__ = __webpack_require__(/*! ./c4g-maps-control-permalink */ "./Resources/public/js/c4g-maps-control-permalink.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__c4g_maps_control_starboard__ = __webpack_require__(/*! ./c4g-maps-control-starboard */ "./Resources/public/js/c4g-maps-control-starboard.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__c4g_maps_control_portside_editor__ = __webpack_require__(/*! ./c4g-maps-control-portside-editor */ "./Resources/public/js/c4g-maps-control-portside-editor.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__c4g_maps_control_portside_account__ = __webpack_require__(/*! ./c4g-maps-control-portside-account */ "./Resources/public/js/c4g-maps-control-portside-account.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__c4g_maps_interaction_geopicker__ = __webpack_require__(/*! ./c4g-maps-interaction-geopicker */ "./Resources/public/js/c4g-maps-interaction-geopicker.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__c4g_maps_control_home__ = __webpack_require__(/*! ./c4g-maps-control-home */ "./Resources/public/js/c4g-maps-control-home.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__c4g_maps_control_position__ = __webpack_require__(/*! ./c4g-maps-control-position */ "./Resources/public/js/c4g-maps-control-position.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__c4g_maps_control_portside_infopage__ = __webpack_require__(/*! ./c4g-maps-control-portside-infopage */ "./Resources/public/js/c4g-maps-control-portside-infopage.js");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// "namespace"
this.c4g = this.c4g || {};
this.c4g.maps = this.c4g.maps || {};

//for jslint
/*jslint browser:true*/
/*jslint todo:true */
/*global window*/
/*global ol*/
/*global Browser*/
/*global Document:true */
/*global jQuery*/
var c4g = this.c4g;






















(function ($, c4g) {
    'use strict';

    /**
     * [MapController description]
     * @param {json-object}  mapData  Object to configure con4gis-maps.
     *                                See "docs/mapData-values.md"
     *                                to get a list of valid values for this object.
     */

    c4g.maps.MapController = function (mapData) {

        //---
        this.map = null;
        // this.controls = null;
        this.leftSlideElements = [];
        this.rightSlideElements = [];

        var self = this,
            permalink = false,
            minZoom,
            maxZoom,
            view,
            geoLocation,
            controls = [],
            interactions = [],
            _displayAllLocations,
            domMapDiv,
            kinetic,
            controlContainerTopLeft,
            controlContainerBottomLeft,
            controlContainerTopRight,
            controlContainerBottomRight,
            controlContainerBottomLeftSub,
            starboard_label,
            logoLink,
            logoGraphic,
            removeElement,
            enableStarboard = true;

        //--
        mapData = $.extend({
            api: {},
            addIdToDiv: false,
            mapId: 1,
            mapDiv: 'c4g_map',
            center: {},
            calc_extent: 'CENTERZOOM',
            attribution: {},
            editor: {},
            measuretools: {},
            infopage: {},
            account: '',
            starboard: {},
            layerswitcher: {},
            baselayerswitcher: {},
            geosearch: {},
            additionalPanel: {}
        }, mapData);
        if (mapData.calc_extent === 'LOCATIONS') {
            mapData = $.extend({
                min_gap: 25
            }, mapData);
        }

        // center
        mapData.center = $.extend({
            lat: 52.22,
            lon: 9.43,
            rotation: 0,
            zoom: 6
        }, mapData.center);
        // attribution
        mapData.attribution = $.extend({
            enable: true,
            collapsed: false
        }, mapData.attribution);
        // geosearch
        mapData.geosearch = $.extend({
            enable: false,
            div: false
        }, mapData.geosearch);
        // permalink
        mapData.permalink = $.extend({
            enable: false,
            get_parameter: false
        }, mapData.permalink);
        this.data = mapData;
        if (mapData.addIdToDiv) {
            mapData.mapDiv += '_' + mapData.mapId;
        }
        // PHPStorm marks this as error, but it is none
        // This is needed for preventing an error with the OSM-Overpass API
        // which occurs when MooTools is loaded
        if (window.MooTools && Browser.Document) {
            Document = Browser.Document;
        }
        this.proxy = new __WEBPACK_IMPORTED_MODULE_0__c4g_maps_proxy__["a" /* MapProxy */]({ mapController: this });

        // check permalink
        if (mapData.permalink.enable) {
            permalink = __WEBPACK_IMPORTED_MODULE_5__c4g_maps_utils__["a" /* utils */].getUrlParam(mapData.permalink.get_parameter);

            if (permalink) {
                permalink = permalink.split('/');
                switch (permalink.length) {
                    case 6:
                        permalink[0] = parseFloat(permalink[0]);
                        mapData.center.lon = !isNaN(permalink[0]) ? permalink[0] : mapData.center.lon;
                        permalink[1] = parseFloat(permalink[1]);
                        mapData.center.lat = !isNaN(permalink[1]) ? permalink[1] : mapData.center.lat;
                        permalink[2] = parseInt(permalink[2], 10);
                        mapData.center.zoom = !isNaN(permalink[2]) ? permalink[2] : mapData.center.zoom;
                        permalink[3] = parseFloat(permalink[3]);
                        mapData.center.rotation = !isNaN(permalink[3]) ? permalink[3] : mapData.center.rotation;
                        permalink[4] = parseInt(permalink[4], 10);
                        mapData.baselayer = !isNaN(permalink[4]) ? permalink[4] : mapData.baselayer;
                        mapData.layers = permalink[5].split(':');
                        // decode deltaEncoding
                        mapData.layers = __WEBPACK_IMPORTED_MODULE_5__c4g_maps_utils__["a" /* utils */].deltaDecode(mapData.layers);
                        break;
                    case 2:
                        // baselayer and layers only
                        permalink[0] = parseInt(permalink[0], 10);
                        mapData.baselayer = !isNaN(permalink[0]) ? permalink[0] : mapData.baselayer;
                        mapData.layers = permalink[1].split(':');
                        // decode deltaEncoding
                        mapData.layers = __WEBPACK_IMPORTED_MODULE_5__c4g_maps_utils__["a" /* utils */].deltaDecode(mapData.layers);
                        break;
                    case 1:
                        // layers only
                        mapData.layers = permalink[0].split(':');
                        // decode deltaEncoding
                        mapData.layers = __WEBPACK_IMPORTED_MODULE_5__c4g_maps_utils__["a" /* utils */].deltaDecode(mapData.layers);
                        break;
                    default:
                        // invalid count of permalink parameters
                        permalink = false;
                }
                if (mapData.layers.length < 1) {
                    mapData.layers = false;
                    permalink = false;
                }
            } else {
                // just to make sure this var is really "false"
                permalink = false;
            }
        }

        if (mapData.minZoom && mapData.minZoom > 0) {
            minZoom = mapData.minZoom;
        } else {
            minZoom = 0;
        }

        if (mapData.maxZoom && mapData.maxZoom > 0) {
            maxZoom = mapData.maxZoom;
        } else {
            maxZoom = 19;
        }

        if (mapData.caching) {
            if (__WEBPACK_IMPORTED_MODULE_5__c4g_maps_utils__["a" /* utils */].getValue('lon') && __WEBPACK_IMPORTED_MODULE_5__c4g_maps_utils__["a" /* utils */].getValue('lat')) {
                mapData.center.lon = __WEBPACK_IMPORTED_MODULE_5__c4g_maps_utils__["a" /* utils */].getValue('lon');
                mapData.center.lat = __WEBPACK_IMPORTED_MODULE_5__c4g_maps_utils__["a" /* utils */].getValue('lat');
            }

            if (__WEBPACK_IMPORTED_MODULE_5__c4g_maps_utils__["a" /* utils */].getValue('zoom')) {
                mapData.center.zoom = __WEBPACK_IMPORTED_MODULE_5__c4g_maps_utils__["a" /* utils */].getValue('zoom');
            }
        }

        view = new ol.View({
            // projection: ol.proj.get('EPSG:4326'),
            // center: [parseFloat(mapData.center_lon), parseFloat(mapData.center_lat)],
            // minResolution: undefined,
            // maxResolution: undefined,
            center: ol.proj.transform([parseFloat(mapData.center.lon), parseFloat(mapData.center.lat)], 'EPSG:4326', 'EPSG:3857'),
            zoom: parseInt(mapData.center.zoom, 10),
            minZoom: parseInt(minZoom, 10),
            maxZoom: parseInt(maxZoom, 10),
            rotation: parseFloat(mapData.center.rotation)
        });

        // check userposition
        if (mapData.geolocation && !permalink) {
            geoLocation = new ol.Geolocation({
                //tracking: !mapData.geopicker,
                tracking: true,
                projection: view.getProjection()
            });
            geoLocation.on('change', function (evt) {
                if (geoLocation) {
                    view.setCenter(geoLocation.getPosition());
                    if (mapData.geolocation_zoom) {
                        view.setZoom(parseInt(mapData.geolocation_zoom, 10));
                    }
                    geoLocation.setTracking(false);
                    if (self.map) {
                        self.map.setView(view);
                        if (self.$overlaycontainer_stopevent) {
                            __WEBPACK_IMPORTED_MODULE_5__c4g_maps_utils__["a" /* utils */].redrawMapView(self);
                        }
                    }
                }
            });
        }

        // enable default Controls/Interactions if there is no profile
        // [note]: maybe change this in the future? -> "no default"-option?
        if (!mapData.profile) {
            controls = ol.control.defaults();
            interactions = ol.interaction.defaults();
        }

        // set default base layer when backend geopicker is enabled
        if (mapData.geopicker && mapData.geopicker.type === "backend") {
            if (mapData.default_baselayer) {
                this.proxy.hook_baselayer_loaded.push(function (baselayerIds) {
                    self.proxy.baselayerController.showBaseLayer(mapData.default_baselayer);
                });
            } // end inner if
            this.map = new ol.Map({
                controls: controls,
                interactions: interactions,
                layers: [new ol.layer.Group({
                    title: 'Base maps',
                    layers: [],
                    checkSum: 'baseMapsLayer'
                })],
                loadTilesWhileAnimating: true,
                target: mapData.mapDiv,
                view: view
            });
        } else {
            // initialize Map
            //

            if (mapData.default_baselayer) {
                this.proxy.hook_baselayer_loaded.push(function (baselayerIds) {
                    if (mapData.baselayer && baselayerIds.indexOf(mapData.baselayer.toString()) > -1) {
                        mapData.default_baselayer = mapData.baselayer;
                    }

                    if (mapData.caching) {
                        if (__WEBPACK_IMPORTED_MODULE_5__c4g_maps_utils__["a" /* utils */].getValue('baselayer')) {
                            mapData.default_baselayer = __WEBPACK_IMPORTED_MODULE_5__c4g_maps_utils__["a" /* utils */].getValue('baselayer');
                        }
                    }

                    self.proxy.baselayerController.showBaseLayer(mapData.default_baselayer);
                });
            }
            this.map = new ol.Map({
                controls: controls,
                interactions: interactions,
                layers: [new ol.layer.Group({
                    title: 'Base maps',
                    layers: [],
                    checkSum: 'baseMapsLayer'
                })],
                loadTilesWhileAnimating: true,
                target: mapData.mapDiv,
                view: view
            });
        }

        mapData.map = this.map;

        // set extent to make all locations visible if wanted
        if (mapData.calc_extent === "LOCATIONS") {
            _displayAllLocations = function displayAllLocations(layerIds) {
                var layers = self.proxy.layerController.arrLayers,
                    layer,
                    geometry,
                    coords,
                    padding,
                    coordinates,
                    extent,
                    featureList,
                    featureArray,
                    key,
                    vectorArray,
                    layerGroup,
                    center;
                // delete function from hook array
                delete this[this.indexOf(_displayAllLocations)];
                coordinates = [];
                // calculate resulting extent of all geometries
                for (key in layers) {
                    if (layers.hasOwnProperty(key)) {
                        layer = layers[key];
                        if (layer.type == "overpass") {
                            continue;
                        }
                        vectorArray = layer.content;
                        if (vectorArray === undefined) {
                            // catch case of linked layers
                            continue;
                        }
                        if ((typeof vectorArray === "undefined" ? "undefined" : _typeof(vectorArray)) === "object") {
                            vectorArray = __WEBPACK_IMPORTED_MODULE_5__c4g_maps_utils__["a" /* utils */].objectToArray(vectorArray);
                        }
                        layerGroup = layer.vectorLayer;
                        if (vectorArray && vectorArray.forEach && typeof vectorArray.forEach === 'function') {
                            vectorArray.forEach(function (vectorLayer) {
                                if (vectorLayer && vectorLayer.data && vectorLayer.data.geometry && vectorLayer.data.geometry.coordinates) {
                                    if (vectorLayer.data.geometry.type === "Point") {
                                        coords = ol.proj.transform([parseFloat(vectorLayer.data.geometry.coordinates[0]), parseFloat(vectorLayer.data.geometry.coordinates[1])], 'EPSG:4326', 'EPSG:3857');
                                        if (coords[0] == "Infinity" || coords[0] == "-Infinity") {
                                            return;
                                        }
                                        geometry = new ol.geom.Point(coords);
                                        coordinates.push(geometry.getCoordinates());
                                    }
                                }
                            });
                        }
                        if (layerGroup) {
                            // handle more complex geometries
                            featureList = layerGroup.getLayers();
                            featureArray = featureList.getArray();
                            featureArray.forEach(function (feature) {
                                if (layer.type === "kml") {
                                    var source = feature.getSource();
                                    //var sourceFeatures = source.getFeatures();
                                    source.getExtent().forEach(function (coordinate) {
                                        coordinates.push(coordinate);
                                    });
                                } else {
                                    coordinates.push(ol.extent.getTopRight(feature.getSource().getExtent()));
                                    coordinates.push(ol.extent.getTopLeft(feature.getSource().getExtent()));
                                    coordinates.push(ol.extent.getBottomRight(feature.getSource().getExtent()));
                                    coordinates.push(ol.extent.getBottomLeft(feature.getSource().getExtent()));
                                }
                            });
                        }
                    }
                }
                extent = ol.extent.boundingExtent(coordinates);
                if (extent[0] == "Infinity" || extent[0] == "-Infinity") {
                    return;
                }
                //TODO: catch case min_gap is already an array
                padding = [mapData.min_gap, mapData.min_gap, mapData.min_gap, mapData.min_gap];
                self.map.getView().fit(extent, self.map.getSize(), { padding: padding });
                center = self.map.getView().getCenter();
                if (isNaN(center[0])) {
                    self.map.getView().setCenter([50, 10]);
                    self.map.getView().setZoom(mapData.minZoom || 10);
                }
            };
            this.proxy.hook_layer_visibility.push(_displayAllLocations);
        }

        // set map-size and -margin
        domMapDiv = document.getElementById(mapData.mapDiv);

        if (domMapDiv && domMapDiv.style) {
            if (mapData.width) {
                domMapDiv.style.width = mapData.width;
            }
            if (mapData.height) {
                domMapDiv.style.height = mapData.height;
            }
            if (mapData.margin) {
                domMapDiv.style.margin = mapData.margin;
            }
        } else {
            console.warn('can not get element by id mapData.mapDiv');
            return;
        }

        this.map.updateSize();
        this.proxy.initialize();
        // this.proxy.loadBaseLayers();
        // this.proxy.loadLayers();
        // ---

        // save overlaycontainer
        this.$overlaycontainer_stopevent = $('#' + mapData.mapDiv + ' .' + __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant__["a" /* cssConstants */].OL_OVERLAYCONTAINER_SE);
        // add Spinner
        this.spinner = new __WEBPACK_IMPORTED_MODULE_3__c4g_maps_misc_spinner__["a" /* Spinner */]({ className: __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant__["a" /* cssConstants */].LARGE });
        // add mapHover
        this.mapHover = new __WEBPACK_IMPORTED_MODULE_4__c4g_maps_misc_maphover__["a" /* MapHover */]({ mapController: this });

        // add interactions ===
        //

        // mouse navigation
        if (mapData.mouse_nav) {
            // drag pan and kinetic scrolling
            if (mapData.mouse_nav.drag_pan) {
                kinetic = mapData.mouse_nav.kinetic ? new ol.Kinetic(-0.005, 0.05, 100) : null;
                this.map.addInteraction(new ol.interaction.DragPan({ kinetic: kinetic }));
            }
            // mousewheel zoom
            if (mapData.mouse_nav.wheel_zoom) {
                this.map.addInteraction(new ol.interaction.MouseWheelZoom());
            }
            // doubleclick zoom
            if (mapData.mouse_nav.doubleclick_zoom) {
                this.map.addInteraction(new ol.interaction.DoubleClickZoom());
            }
            // box zoom
            if (mapData.mouse_nav.drag_zoom) {
                this.map.addInteraction(new ol.interaction.DragZoom({ condition: ol.events.condition.shiftKeyOnly }));
            }
            // drag rotate (& zoom)
            if (mapData.mouse_nav.drag_rotate_zoom) {
                this.map.addInteraction(new ol.interaction.DragRotateAndZoom({ condition: ol.events.condition.altKeyOnly }));
            } else if (mapData.mouse_nav.drag_rotate) {
                this.map.addInteraction(new ol.interaction.DragRotate({ condition: ol.events.condition.altKeyOnly }));
            }
        }
        // touch navigation
        if (mapData.touch_nav) {
            // rotate (pinch)
            if (mapData.touch_nav.rotate) {
                this.map.addInteraction(new ol.interaction.PinchRotate());
            }
            // zoom (pinch)
            if (mapData.touch_nav.zoom) {
                this.map.addInteraction(new ol.interaction.PinchZoom({ constrainResolution: true }));
            }
        }
        // keyboard navigation
        if (mapData.keyboard_nav) {
            // pan (arrow keys)
            if (mapData.keyboard_nav.pan) {
                this.map.addInteraction(new ol.interaction.KeyboardPan());
            }
            // zoom ("+" and "-" key)
            if (mapData.keyboard_nav.zoom) {
                this.map.addInteraction(new ol.interaction.KeyboardZoom());
            }
        }
        // ===

        // add control-containers ===
        //
        // top-left
        controlContainerTopLeft = document.createElement('div');
        controlContainerTopLeft.className = __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant__["a" /* cssConstants */].CONTROL_CONTAINER_TL + ' ' + __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant__["a" /* cssConstants */].OL_UNSELECTABLE;
        this.$overlaycontainer_stopevent.prepend(controlContainerTopLeft);
        // bottom-left
        controlContainerBottomLeft = document.createElement('div');
        controlContainerBottomLeft.className = __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant__["a" /* cssConstants */].CONTROL_CONTAINER_BL + ' ' + __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant__["a" /* cssConstants */].OL_UNSELECTABLE;
        $(controlContainerTopLeft).after(controlContainerBottomLeft);
        // element needs to be moved when Portside will be opened
        this.leftSlideElements.push(controlContainerBottomLeft);
        // top-right
        controlContainerTopRight = document.createElement('div');
        controlContainerTopRight.className = __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant__["a" /* cssConstants */].CONTROL_CONTAINER_TR + ' ' + __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant__["a" /* cssConstants */].OL_UNSELECTABLE;
        $(controlContainerBottomLeft).after(controlContainerTopRight);
        // element needs to be moved when Starboard will be opened
        this.rightSlideElements.push(controlContainerTopRight);
        // bottom-right
        controlContainerBottomRight = document.createElement('div');
        controlContainerBottomRight.className = __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant__["a" /* cssConstants */].CONTROL_CONTAINER_BR + ' ' + __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant__["a" /* cssConstants */].OL_UNSELECTABLE;
        $(controlContainerTopRight).after(controlContainerBottomRight);
        // element needs to be moved when Starboard will be opened
        this.rightSlideElements.push(controlContainerBottomRight);
        // ===
        // add controls ===
        this.controls = {};
        //


        // account
        if (mapData.account && typeof __WEBPACK_IMPORTED_MODULE_15__c4g_maps_control_portside_account__["a" /* Account */] === 'function') {
            this.controls.account = new __WEBPACK_IMPORTED_MODULE_15__c4g_maps_control_portside_account__["a" /* Account */]({
                tipLabel: __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant_i18n_de__["a" /* langConstants */].CTRL_ACCOUNT,
                target: controlContainerTopLeft,
                caching: mapData.caching,
                mapController: this
            });
            this.map.addControl(this.controls.account);
        }

        // zoom-controls
        if (mapData.zoom_panel || mapData.zoom_slider) {
            this.controls.zoom = new ol.control.Zoom({
                zoomInLabel: ' ',
                zoomOutLabel: ' ',
                zoomInTipLabel: __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant_i18n_de__["a" /* langConstants */].CTRL_ZOOM_IN,
                zoomOutTipLabel: __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant_i18n_de__["a" /* langConstants */].CTRL_ZOOM_OUT,
                target: controlContainerTopLeft
            });
            this.map.addControl(this.controls.zoom);

            if (mapData.zoom_slider) {
                this.controls.zoomslider = new ol.control.ZoomSlider({
                    label: ' ',
                    tipLabel: __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant_i18n_de__["a" /* langConstants */].CTRL_ZOOM_SLIDER,
                    target: controlContainerTopLeft
                });
                this.map.addControl(this.controls.zoomslider);
            }
        }
        if (mapData.zoom_extent & !mapData.zoom_slider) {
            this.controls.zoom_extent = new ol.control.ZoomToExtent({
                label: ' ',
                tipLabel: __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant_i18n_de__["a" /* langConstants */].CTRL_ZOOM_EXT,
                target: controlContainerTopLeft
            });
            this.map.addControl(this.controls.zoom_extent);
        }
        if (mapData.zoom_home & !mapData.zoom_slider) {
            this.controls.zoom_home = new __WEBPACK_IMPORTED_MODULE_17__c4g_maps_control_home__["a" /* Home */]({
                label: ' ',
                disableLabel: ' ',
                tipLabel: __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant_i18n_de__["a" /* langConstants */].CTRL_ZOOM_HOME,
                target: controlContainerTopLeft,
                mapController: this
            });
            this.map.addControl(this.controls.zoom_home);
        }

        if (mapData.zoom_position & !mapData.zoom_slider) {
            this.controls.zoom_position = new __WEBPACK_IMPORTED_MODULE_18__c4g_maps_control_position__["a" /* Position */]({
                label: ' ',
                disableLabel: ' ',
                tipLabel: __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant_i18n_de__["a" /* langConstants */].CTRL_ZOOM_POS,
                target: controlContainerTopLeft,
                mapController: this
            });
            this.map.addControl(this.controls.zoom_position);
        }

        // combined zoom-controls
        if (mapData.zoom_slider) {
            $('#' + mapData.mapDiv + ' .' + __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant__["a" /* cssConstants */].OL_ZOOM).addClass(__WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant__["a" /* cssConstants */].OL_ZOOM_WITH_SLIDER).removeClass(__WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant__["a" /* cssConstants */].OL_ZOOM);
            $('#' + mapData.mapDiv + ' .' + __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant__["a" /* cssConstants */].OL_ZOOM_IN).after($('#' + mapData.mapDiv + ' .' + __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant__["a" /* cssConstants */].OL_ZOOM_SLIDER + ' button').addClass(__WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant__["a" /* cssConstants */].OL_ZOOM_SLIDER));
            $('#' + mapData.mapDiv + ' .' + __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant__["a" /* cssConstants */].OL_ZOOM_SLIDER + '.' + __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant__["a" /* cssConstants */].OL_CONTROL).remove();
        }

        if (mapData.zoom_panel && mapData.zoom_extent) {
            $('#' + mapData.mapDiv + ' .' + __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant__["a" /* cssConstants */].OL_ZOOM).addClass(__WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant__["a" /* cssConstants */].OL_ZOOM_WITH_EXT).removeClass(__WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant__["a" /* cssConstants */].OL_ZOOM);
            $('#' + mapData.mapDiv + ' .' + __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant__["a" /* cssConstants */].OL_ZOOM_IN).after($('#' + mapData.mapDiv + ' .' + __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant__["a" /* cssConstants */].OL_ZOOM_EXT + ' button').addClass(__WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant__["a" /* cssConstants */].OL_ZOOM_EXT));
            $('#' + mapData.mapDiv + ' .' + __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant__["a" /* cssConstants */].OL_ZOOM_EXT + '.' + __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant__["a" /* cssConstants */].OL_CONTROL).remove();
        }

        if (mapData.zoom_panel && mapData.zoom_home) {
            $('#' + mapData.mapDiv + ' .' + __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant__["a" /* cssConstants */].OL_ZOOM).addClass(__WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant__["a" /* cssConstants */].OL_ZOOM_WITH_HOME).removeClass(__WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant__["a" /* cssConstants */].OL_ZOOM);
            $('#' + mapData.mapDiv + ' .' + __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant__["a" /* cssConstants */].OL_ZOOM_IN).after($('#' + mapData.mapDiv + ' .' + __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant__["a" /* cssConstants */].OL_ZOOM_HOME + ' button').addClass(__WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant__["a" /* cssConstants */].OL_ZOOM_HOME));
            removeElement = controlContainerTopLeft.querySelector('.' + __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant__["a" /* cssConstants */].OL_ZOOM_HOME + '.' + __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant__["a" /* cssConstants */].OL_UNSELECTABLE + '.button');
            if (removeElement) {
                try {
                    removeElement.remove();
                } catch (err) {
                    //ie 11 error
                }
            }
        }

        if (mapData.zoom_panel && mapData.zoom_position) {
            $('#' + mapData.mapDiv + ' .' + __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant__["a" /* cssConstants */].OL_ZOOM).addClass(__WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant__["a" /* cssConstants */].OL_ZOOM_WITH_POS).removeClass(__WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant__["a" /* cssConstants */].OL_ZOOM);
            $('#' + mapData.mapDiv + ' .' + __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant__["a" /* cssConstants */].OL_ZOOM_IN).after($('#' + mapData.mapDiv + ' .' + __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant__["a" /* cssConstants */].OL_ZOOM_POS + ' button').addClass(__WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant__["a" /* cssConstants */].OL_ZOOM_POS));
            $('#' + mapData.mapDiv + ' .' + __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant__["a" /* cssConstants */].OL_ZOOM_POS + '.' + __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant__["a" /* cssConstants */].OL_CONTROL).remove();
            removeElement = controlContainerTopLeft.querySelector('.' + __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant__["a" /* cssConstants */].OL_ZOOM_POS + '.' + __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant__["a" /* cssConstants */].OL_UNSELECTABLE + '.button');
            if (removeElement) {
                try {
                    removeElement.remove();
                } catch (err) {
                    //ie 11 error
                }
            }
        }

        // fullscreen
        if (mapData.fullscreen) {
            this.controls.fullscreen = new ol.control.FullScreen({
                label: ' ',
                labelActive: ' ',
                tipLabel: __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant_i18n_de__["a" /* langConstants */].CTRL_FULLSCREEN,
                target: controlContainerTopLeft
            });
            this.map.addControl(this.controls.fullscreen);
        }

        // router
        if (mapData.router_enable && typeof __WEBPACK_IMPORTED_MODULE_6__c4g_maps_control_portside_router__["a" /* Router */] === 'function') {
            this.controls.router = new __WEBPACK_IMPORTED_MODULE_6__c4g_maps_control_portside_router__["a" /* Router */]({
                tipLabel: __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant_i18n_de__["a" /* langConstants */].CTRL_ROUTER,
                target: controlContainerTopLeft,
                caching: mapData.caching,
                mapController: this
            });
            this.map.addControl(this.controls.router);
        }
        // editor
        if (mapData.editor.enable && typeof __WEBPACK_IMPORTED_MODULE_14__c4g_maps_control_portside_editor__["a" /* Editor */] === 'function') {
            this.controls.editor = new __WEBPACK_IMPORTED_MODULE_14__c4g_maps_control_portside_editor__["a" /* Editor */]({
                tipLabel: __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant_i18n_de__["a" /* langConstants */].CTRL_EDITOR,
                type: mapData.editor.type || 'frontend',
                target: mapData.editor.target || controlContainerTopLeft,
                initOpen: mapData.editor.open || false,
                dataField: mapData.editor.data_field || false,
                caching: mapData.caching,
                mapController: this
            });
            this.map.addControl(this.controls.editor);
        }
        // measuretools
        if (mapData.measuretools.enable && typeof __WEBPACK_IMPORTED_MODULE_7__c4g_maps_control_portside_measuretools__["a" /* Measuretools */] === 'function') {
            this.controls.measuretools = new __WEBPACK_IMPORTED_MODULE_7__c4g_maps_control_portside_measuretools__["a" /* Measuretools */]({
                tipLabel: __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant_i18n_de__["a" /* langConstants */].CTRL_MEASURETOOLS,
                target: controlContainerTopLeft,
                caching: mapData.caching,
                mapController: this
            });
            this.map.addControl(this.controls.measuretools);
        }
        //
        if (mapData.print) {
            this.controls.print = new __WEBPACK_IMPORTED_MODULE_8__c4g_maps_control_print__["a" /* Print */]({
                label: "",
                tipLabel: __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant_i18n_de__["a" /* langConstants */].CTRL_PRINT,
                target: controlContainerTopLeft,
                mapController: this
            });
            this.map.addControl(this.controls.print);
        }

        // show graticule (grid)
        if (mapData.graticule) {
            this.controls.graticule = new __WEBPACK_IMPORTED_MODULE_9__c4g_maps_control_grid__["a" /* Grid */]({
                label: ' ',
                disableLabel: ' ',
                tipLabel: __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant_i18n_de__["a" /* langConstants */].CTRL_GRID,
                caching: mapData.caching,
                target: controlContainerTopLeft
            });
            this.map.addControl(this.controls.graticule);
        }
        // rotate-control
        //TODO: use something like "mapData.rotate"
        //   Check: mapData.mouse_nav (defined?)
        if (mapData.mouse_nav && (mapData.mouse_nav.drag_rotate || mapData.mouse_nav.drag_rotate && mapData.mouse_nav.drag_rotate_zoom)) {
            this.controls.rotate = new ol.control.Rotate({
                label: ' ',
                tipLabel: __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant_i18n_de__["a" /* langConstants */].CTRL_RESET_ROTATION,
                target: controlContainerTopLeft
            });
            this.map.addControl(this.controls.rotate);
        }
        // infopage
        if (mapData.infopage && typeof __WEBPACK_IMPORTED_MODULE_19__c4g_maps_control_portside_infopage__["a" /* Infopage */] === 'function') {
            this.controls.infopage = new __WEBPACK_IMPORTED_MODULE_19__c4g_maps_control_portside_infopage__["a" /* Infopage */]({
                tipLabel: __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant_i18n_de__["a" /* langConstants */].CTRL_INFOPAGE,
                target: controlContainerTopLeft,
                caching: mapData.caching,
                mapController: this
            });
            this.map.addControl(this.controls.infopage);
        }
        // additional panel
        // if (mapData.additionalPanel && typeof c4g.maps.control.additionalPanel === 'function') {
        //   this.controls.additionalPanel = new c4g.maps.control.additionalPanel({
        //     tipLabel: langConstants.CTRL_ADDITIONALPANEL,
        //     target: controlContainerTopLeft,
        //     caching: mapData.caching,
        //     mapController: this
        //   });
        //   this.map.addControl(this.controls.additionalPanel);
        // }


        // scaleline
        if (mapData.scaleline) {
            this.controls.scaleline = new ol.control.ScaleLine({
                target: controlContainerBottomLeft
            });
            this.map.addControl(this.controls.scaleline);
        }

        // zoom-level & mouse-position
        if (mapData.zoomlevel || mapData.mouseposition) {
            // wrapper for zoom-level and mouse-position
            controlContainerBottomLeftSub = document.createElement('div');
            controlContainerBottomLeftSub.className = __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant__["a" /* cssConstants */].CONTROL_CONTAINER_BL_SUB + ' ' + __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant__["a" /* cssConstants */].OL_UNSELECTABLE;
            $(controlContainerBottomLeft).append(controlContainerBottomLeftSub);
            // display zoom-level
            if (mapData.zoomlevel) {
                this.controls.zoomlevel = new __WEBPACK_IMPORTED_MODULE_10__c4g_maps_control_zoomlevel__["a" /* Zoomlevel */]({
                    mapView: view,
                    target: controlContainerBottomLeftSub,
                    undefinedHTML: 'N/A'
                });
                this.map.addControl(this.controls.zoomlevel);
            }
            // display mouse-position
            if (mapData.mouseposition) {
                this.controls.mouseposition = new ol.control.MousePosition({
                    projection: 'EPSG:4326',
                    coordinateFormat: ol.coordinate.toStringHDMS,
                    target: controlContainerBottomLeftSub,
                    undefinedHTML: 'N/A'
                });
                this.map.addControl(this.controls.mouseposition);
            }
        }

        // geosearch
        if (c4g.maps.control && c4g.maps.control.GeoSearch && typeof c4g.maps.control.GeoSearch === 'function' && mapData.geosearch.enable) {
            this.controls.geosearch = new c4g.maps.control.GeoSearch({
                mapController: this,
                target: controlContainerTopRight,
                extDiv: mapData.geosearch.div || false,
                collapsible: true,
                collapsed: mapData.geosearch.collapsed,
                label: ' ',
                collapsedLabel: '',
                // engineUrl: mapData.geosearch.engine,
                searchZoom: mapData.geosearch.searchzoom,
                zoomBounds: mapData.geosearch.zoombounds,
                quicksearch: true,
                animate: mapData.geosearch.animate,
                markResult: mapData.geosearch.markresult,
                popup: mapData.geosearch.popup,
                autopick: mapData.geopicker,
                caching: mapData.caching,
                results: mapData.geosearch.results
            });
            this.map.addControl(this.controls.geosearch);
        }

        // geobookmarks - not ready
        if (mapData.geobookmarks) {
            this.controls.geobookmarks = new ol.control.GeoBookmark({
                //target: controlContainerTopRight
                label: ' ',
                tipLabel: __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant_i18n_de__["a" /* langConstants */].CTRL_GEOBOOKMARKS,
                placeholder: __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant_i18n_de__["a" /* langConstants */].GEOBOOKMARKS_PLACEHOLDER,
                namespace: 'c4g_geobookmarks' /*,
                                              className: cssConstants.GEOBOOKMARKS*/ //ToDo implement for own styling
            });
            this.map.addControl(this.controls.geobookmarks);
            this.rightSlideElements.push('.ol-bookmark');
        }

        // overview-map
        if (mapData.overviewmap) {
            this.controls.overviewmap = new __WEBPACK_IMPORTED_MODULE_11__c4g_maps_control_overviewmap__["a" /* OverviewMap */]({
                target: controlContainerTopRight
            });
            this.map.addControl(this.controls.overviewmap);
        }

        // starboard
        if (mapData.geopicker && mapData.geopicker.type === "backend") {
            enableStarboard = false;
        }

        // popup margin
        //this.leftSlideElements.push('.ol-overlay-container');
        //this.rightSlideElements.push('.ol-overlay-container');

        if (typeof __WEBPACK_IMPORTED_MODULE_13__c4g_maps_control_starboard__["a" /* Starboard */] === 'function' && enableStarboard) {
            this.initializeStarboard();
        }

        // backend-geopicker
        if (mapData.geopicker && (mapData.geopicker.type === "backend" || mapData.geopicker.type === "frontend")) {
            this.controls.geopicker = new __WEBPACK_IMPORTED_MODULE_16__c4g_maps_interaction_geopicker__["a" /* GeoPicker */]({
                mapContainer: this
            });
            this.map.addInteraction(this.controls.geopicker);
            if (mapData.geopicker.type === "frontend") {
                // substring is needed here for taking out the #
                if (mapData.geopicker.input_geo_x && mapData.geopicker.input_geo_x) {
                    var geoxField = document.getElementById(mapData.geopicker.input_geo_x.substring(1));
                    var geoyField = document.getElementById(mapData.geopicker.input_geo_y.substring(1));
                    if (geoxField && geoyField) {
                        var locGeox = geoxField.value;
                        var locGeoy = geoyField.value;
                        if (locGeox && locGeoy) {
                            var numerized = [parseFloat(locGeox, 10), parseFloat(locGeoy, 10)];
                            var transformed = ol.proj.transform(numerized, ol.proj.get('EPSG:4326'), ol.proj.get('EPSG:3857'));
                            geoLocation = null;
                            this.map.getView().setCenter(transformed);
                        }
                    }
                }
            }
        }

        // show attribution
        if (mapData.attribution.enable) {
            // @TODO: create own attribution-control
            if (mapData.attribution.cfg_logo) {
                logoLink = document.createElement('a');
                logoLink.href = 'https://con4gis.org';
                logoLink.title = 'built with con4gis';
                logoLink.target = '_blank';
                logoLink.className = __WEBPACK_IMPORTED_MODULE_1__c4g_maps_constant__["a" /* cssConstants */].ATTRIBUTION_LOGO;
                logoGraphic = document.createElement('img');
                logoGraphic.src = 'bundles/con4gismaps/images/logo_con4gis.svg';
                logoLink.appendChild(logoGraphic);
                controlContainerBottomRight.appendChild(logoLink);
            }
            this.controls.attribution = new ol.control.Attribution({
                label: ' ',
                tipLabel: __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant_i18n_de__["a" /* langConstants */].CTRL_ATTRIBUTION,
                collapseLabel: ' ',
                target: controlContainerBottomRight
            });
            this.controls.attribution.setCollapsed(mapData.attribution.collapsed === '1');
            this.map.addControl(this.controls.attribution);
        }

        // show permalink
        if (mapData.permalink.enable) {
            this.controls.permalink = new __WEBPACK_IMPORTED_MODULE_12__c4g_maps_control_permalink__["a" /* Permalink */]({
                label: ' ',
                tipLabel: __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant_i18n_de__["a" /* langConstants */].CTRL_PERMALINK,
                mapController: this,
                getParameter: mapData.permalink.get_parameter,
                target: controlContainerBottomRight
            });
            this.map.addControl(this.controls.permalink);
        }

        //themeData
        if (mapData.themeData) {
            domMapDiv = document.getElementById(mapData.mapDiv);
            if (mapData.themeData['useglobal']) {
                domMapDiv = document.getElementById('wrapper');
            };

            if (mapData.themeData['maincolor']) {
                var mainColor = __WEBPACK_IMPORTED_MODULE_5__c4g_maps_utils__["a" /* utils */].getRgbaFromHexAndOpacity(mapData.themeData['maincolor'], mapData.themeData['mainopacity']);
                var fontColor = __WEBPACK_IMPORTED_MODULE_5__c4g_maps_utils__["a" /* utils */].getRgbaFromHexAndOpacity(mapData.themeData['fontcolor'], mapData.themeData['fontopacity']);
                var shadowColor = __WEBPACK_IMPORTED_MODULE_5__c4g_maps_utils__["a" /* utils */].getRgbaFromHexAndOpacity(mapData.themeData['shadowcolor'], mapData.themeData['shadowopacity']);

                if (domMapDiv && domMapDiv.style) {
                    domMapDiv.style.setProperty('--main-color', mainColor);
                    domMapDiv.style.setProperty('--font-color', fontColor);
                    domMapDiv.style.setProperty('--shadow-color', shadowColor);
                }
            }

            if (mapData.themeData['buttonradius']) {
                domMapDiv.style.setProperty('--button-radius-percent', mapData.themeData['buttonradius'] + '%');
                domMapDiv.style.setProperty('--button-radius-pixel', mapData.themeData['buttonradius'] + 'px');
            }
        }
        if (window.c4gMapsHooks !== undefined && Array.isArray(window.c4gMapsHooks.mapController_addControls)) {
            __WEBPACK_IMPORTED_MODULE_5__c4g_maps_utils__["a" /* utils */].callHookFunctions(window.c4gMapsHooks.mapController_addControls, { mapController: this, Container: controlContainerTopLeft });
        }
    };
    // Add methods
    c4g.maps.MapController.prototype = $.extend(c4g.maps.MapController.prototype, {
        initializeStarboard: function initializeStarboard() {
            var mapData = this.data;
            var starboard_label = void 0;
            if (mapData.starboard.label) {
                starboard_label = __WEBPACK_IMPORTED_MODULE_2__c4g_maps_constant_i18n_de__["a" /* langConstants */].CTRL_STARBOARD.replace('Starboard', mapData.starboard.label).replace('starboard', mapData.starboard.label);
            }

            this.controls.starboard = new __WEBPACK_IMPORTED_MODULE_13__c4g_maps_control_starboard__["a" /* Starboard */]({
                create: mapData.starboard.enable || false,
                headline: mapData.starboard.label,
                tipLabel: starboard_label || false,
                caching: mapData.caching,
                mapController: this,
                extDiv: mapData.starboard.div,
                defaultOpen: mapData.starboard.open,
                filter: mapData.starboard.filter,
                button: mapData.starboard.button,
                baselayerSwitcherCreate: mapData.baselayerswitcher.enable,
                baselayerSwitcherTitle: mapData.baselayerswitcher.label,
                layerSwitcherCreate: mapData.layerswitcher.enable,
                layerSwitcherTitle: mapData.layerswitcher.label
            });
            this.map.addControl(this.controls.starboard);
        }
    });
})(jQuery, this.c4g); // 'The End' :)    - ! Do not write stuff after this line ! -

var MapController = this.c4g.maps.MapController;

/***/ }),

/***/ "./Resources/public/js/c4g-overlay-controller.js":
/*!*******************************************************!*\
  !*** ./Resources/public/js/c4g-overlay-controller.js ***!
  \*******************************************************/
/*! exports provided: C4gOverlayController */
/*! exports used: C4gOverlayController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return C4gOverlayController; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__c4g_overlay__ = __webpack_require__(/*! ./c4g-overlay */ "./Resources/public/js/c4g-overlay.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var C4gOverlayController = function () {
    function C4gOverlayController(baselayer) {
        _classCallCheck(this, C4gOverlayController);

        this.baselayer = baselayer;
        this.arrOverlays = [];
    }

    _createClass(C4gOverlayController, [{
        key: 'showOverlayLayer',
        value: function showOverlayLayer(overlayId) {
            var self = this,
                overlayLayerConfig,
                osmSourceConfigs = c4g.maps.config.osm,
                stamenSourceConfigs = c4g.maps.config.stamen,
                layerOptions,
                overlayLayer,
                noUrl;

            layerOptions = {};
            overlayLayer = new ol.layer.Tile({
                source: new ol.source.OSM()
            });

            overlayLayerConfig = this.arrOverlays[overlayId];

            switch (overlayLayerConfig.provider) {
                case 'osm':
                    if (osmSourceConfigs[overlayLayerConfig.style]) {
                        overlayLayer = new ol.layer.Tile({
                            source: new ol.source.OSM(jQuery.extend(osmSourceConfigs[overlayLayerConfig.style], layerOptions))
                        });
                    } else if (stamenSourceConfigs[overlayLayerConfig.style]) {
                        // Stamen
                        overlayLayer = new ol.layer.Tile({
                            source: new ol.source.Stamen(jQuery.extend(stamenSourceConfigs[overlayLayerConfig.style], layerOptions))
                        });
                        // } else if (mapQuestSourceConfigs[overlayLayerConfig.style]) {
                        //   // mapQuest
                        //   overlayLayer = new ol.layer.Tile({
                        //     source: new ol.source.MapQuest(mapQuestSourceConfigs[overlayLayerConfig.style])
                        //   });
                    } else if (overlayLayerConfig.style === 'osm_custom') {
                        // custom
                        noUrl = true;
                        if (overlayLayerConfig.attribution) {
                            layerOptions.attributions = overlayLayerConfig.attribution + ' ' + ol.source.OSM.ATTRIBUTION;
                        }

                        if (overlayLayerConfig.url) {
                            layerOptions.url = overlayLayerConfig.url;
                            noUrl = false;
                        } else if (overlayLayerConfig.urls) {
                            layerOptions.urls = overlayLayerConfig.urls;
                            noUrl = false;
                        }
                        if (!noUrl) {
                            overlayLayer = new ol.layer.Tile({
                                source: new ol.source.XYZ(layerOptions)
                            });
                        } else {
                            console.warn('custom url(s) missing -> switch to default');
                        }
                    } else {
                        console.warn('unsupported osm-style -> switch to default');
                    }
                    break;
                case 'google':
                    //@todo
                    console.warn('google-maps are currently unsupported');
                    break;
                case 'bing':
                    if (baseLayerConfig.apiKey && overlayLayerConfig.style) {
                        overlayLayer = new ol.layer.Tile({
                            source: new ol.source.BingMaps({
                                culture: navigator.languages ? navigator.languages[0] : navigator.language || navigator.userLanguage,
                                key: overlayLayerConfig.apiKey,
                                imagerySet: overlayLayerConfig.style
                            })
                        });
                    } else {
                        console.warn('wrong bing-key or invalid imagery-set!');
                    }
                    break;
                case 'wms':
                    overlayLayer = new ol.layer.Tile({
                        source: new ol.source.TileWMS({
                            url: overlayLayerConfig.url,
                            params: {
                                LAYERS: overlayLayerConfig.params.layers,
                                VERSION: overlayLayerConfig.params.version,
                                //FORMAT: overlayLayerConfig.params.format,
                                TRANSPARENT: overlayLayerConfig.params.transparent
                            },
                            gutter: overlayLayerConfig.gutter,
                            attributions: overlayLayerConfig.attribution + ' ' + ol.source.OSM.ATTRIBUTION
                        })
                        //extent: ol.proj.transformExtent([5.59334, 50.0578, 9.74158, 52.7998], 'EPSG:4326', 'EPSG:3857')
                    });
                    break;
                case 'owm':
                    overlayLayer = new ol.layer.Tile({
                        source: new ol.source.XYZ({
                            url: overlayLayerConfig.url + overlayLayerConfig.app_id + '/{z}/{x}/{y}?hash=' + overlayLayerConfig.api_key,
                            attributions: overlayLayerConfig.attribution + ' ' + ol.source.OSM.ATTRIBUTION
                        })
                        //extent: ol.proj.transformExtent([5.59334, 50.0578, 9.74158, 52.7998], 'EPSG:4326', 'EPSG:3857')
                    });
                    break;
                default:
                    console.warn('unsupported provider');
                    break;
            }
            overlayLayer.setOpacity(parseInt(overlayLayerConfig.opacity) / 100);
            this.arrOverlays[overlayId].layer = overlayLayer;
            return this.arrOverlays[overlayId].layer;
        }
    }]);

    return C4gOverlayController;
}();

/***/ }),

/***/ "./Resources/public/js/c4g-overlay.js":
/*!********************************************!*\
  !*** ./Resources/public/js/c4g-overlay.js ***!
  \********************************************/
/*! exports provided: C4gOverlay */
/*! exports used: C4gOverlay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return C4gOverlay; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var C4gOverlay = function () {
    function C4gOverlay(overlayArr, mapController) {
        _classCallCheck(this, C4gOverlay);

        this.id = overlayArr['id'];
        this.pid = overlayArr['pid'];
        this.name = overlayArr['name'];
        this.provider = overlayArr['provider'];
        this.style = overlayArr['style'];
        this.url = overlayArr['url'];
        this.urls = overlayArr['urls'];
        this.opacity = overlayArr['opacity'];
        this.attribution = overlayArr['attribution'];
        this.gutter = overlayArr['gutter'];
        this.params = overlayArr['params'];
        this.layer = false;
        this.overlayArr = overlayArr;
        this.mapController = mapController;
    }

    _createClass(C4gOverlay, [{
        key: 'changeOpacity',
        value: function changeOpacity(value) {
            var layer;

            layer = this.layer;
            if (layer) {
                this.mapController.map.removeLayer(layer);
                layer.setOpacity(value / 100);
                this.mapController.map.addLayer(layer);
            }
        }
    }]);

    return C4gOverlay;
}();

/***/ })

/******/ });