/*
 * This file is part of con4gis,
 * the gis-kit for Contao CMS.
 *
 * @package    con4gis
 * @version    6
 * @author     con4gis contributors (see "authors.txt")
 * @license    LGPL-3.0-or-later
 * @copyright  Küstenschmiede GmbH Software & Design
 * @link       https://www.con4gis.org
 */
import {C4gLayer} from "./c4g-layer"
import {utils} from "./c4g-maps-utils"
import {cssConstants} from "./c4g-maps-constant";
import {Customtab} from "./c4g-maps-control-starboardplugin-customtab";
import {Style} from "ol/style";
import {Text} from "ol/style";
import {Fill} from "ol/style";
import {Vector as VectorSource} from "ol/source";
import {transformExtent} from "ol/proj";
import {transform} from "ol/proj";
import {Point, LineString, Polygon, MultiPolygon} from "ol/geom";
import {Feature} from "ol";
import OSMXML from "ol/format/OSMXML";
import {all} from "ol/loadingstrategy";
import {bbox} from "ol/loadingstrategy";
import {Vector} from "ol/layer";
import {Cluster} from "ol/source";
import Circle from "ol/geom/Circle";
import {fromLonLat} from "ol/proj";
import {GeoJSON} from "ol/format";
import {getCenter, boundingExtent} from "ol/extent";
import {Group} from "ol/layer";
import * as olFormat from "ol/format";
import ol_layer_AnimatedCluster from "ol-ext/layer/AnimatedCluster";

export class C4gLayerController {

  constructor(proxy) {
    this.proxy = proxy;
    this.mapController = proxy.options.mapController;
    this.arrLayers = {};
    this.layerRequests = {};
    this.ovpKey = this.mapController.data.ovp_key;
  }
  
  loadLayers () {
    let self = this;
    if (this.mapId === 0) {
      return false;
    }
    
    jQuery.ajax(this.proxy.api_layer_url,{
      dataType: this.mapController.data.jsonp ? "jsonp" : "json"

    }).done(function (data) {
      self.addLayers(data.layer, data.foreignLayers);
      self.proxy.layers_loaded = true;
      utils.callHookFunctions(self.proxy.hook_layer_loaded, self.proxy.layerIds);
      utils.callHookFunctions(window.c4gMapsHooks.proxy_layer_loaded, {layerIds: self.proxy.layerIds, proxy: self.proxy});
      self.proxy.checkLocationStyles({
        done: function () {
          self.drawLayerInitial();
          utils.callHookFunctions(window.c4gMapsHooks.proxy_layer_drawn, {layerIds: self.proxy.layerIds, proxy: self.proxy});
        }
      });
      return true;
    }).fail(function () {
      // @TODO: error-messages
      //   1) Visible message 4 users (i18n)
      //   2) Technical console.warn
      console.warn('An error occured while trying to load the layers...');
      return false;
    }).always(function () {
      // this.proxy.starboard.spinner.hide();
    });
  } // end of "loadLayer()"

  addLayers(layers, foreignLayers) {
    var i,
      j,
      k,
      p,
      isVisible,
      layer,
      storedItem,
      linkItems,
      uid,
      currentZoom,
      fnHandleAndAppendLayerChilds,
      endlessLoopId,
      parentId,
      parentIds,
      permalinkedLayers,
      child,
      fnHandleChilds,
      key,
      starboard,
      fnAddToHook;

    let self = this;
    isVisible = false;

    permalinkedLayers = this.mapController.data.layers || [];

    fnHandleAndAppendLayerChilds = function (objItem) {
      var toggle,
        entryWrapper;

      if (objItem.hasChilds) {
        objItem.visibleChilds = self.addLayers(objItem.childs, foreignLayers);
      }
    }; // end of "fnHandleAndAppendLayerChilds()"

    // wrapper function to avoid closure accessibility
    fnAddToHook = function(layer) {
      var layername, layerid, layericon;

      if (layer.childs && layer.childs.length > 0) {
        layername = layer.name;
        layerid = layer.tabId;
        layericon = layer.awesomeicon;
        starboard = self.proxy.options.mapController.controls.starboard;
        if (!starboard) {
          self.proxy.options.mapController.initializeStarboard();
          starboard = self.proxy.options.mapController.controls.starboard;
        }
        starboard.hook_layerswitcher_loaded.push(function(){
          starboard.starboardTabs = starboard.starboardTabs || {};
          starboard.starboardTabs[layerid] = new Customtab(starboard, {
            name: layername,
            tabId: layerid,
            awesomeicon: layericon
          });
        });
      }
    };

    if (layers && layers.length > 0) {
      for (i = 0; i < layers.length; i += 1) {
        if (this.arrLayers[layers[i].id]) {
          layer = this.arrLayers[layers[i].id];
        } else {
          layer = new C4gLayer(layers[i]);//layers[i];
        }

        linkItems = false;
        if (typeof layer.content === "object") {
          layer.content = utils.objectToArray(layer.content);
        }

        // endless-loop prevention
        //
        parentId = layer.pid;
        parentIds = {};
        // build parent-ids chain
        while (self.arrLayers[parentId]) {
          if (parentIds[parentId]) {
            console.warn('Caught endless-loop (ID: ' + layer.id + ')');
            break;
          }
          parentIds[parentId] = true;
          parentId = this.arrLayers[parentId].pid;
        }

        if (layer.content && layer.content[0] && layer.content[0].cssClass) {
          layer.cssClass = layer.content[0].cssClass;
        }


        if (!parentIds[parentId]) {

          // prepare layer data if they are a new starboard tab
          if (layer.type === "startab") {
            layer.editable = true;
            layer.renderSpecial = true;
            layer.tabId = layer.id;
            if (!layer.layername) {
              layer.display = true;
            }
            // iterate childs and tell them to not load in layerswitcher
            fnHandleChilds = function(fLayer) {
              for (let count = 0; count < fLayer.childs.length; count++) {
                let childArr = fLayer.childs[count];
                childArr.editable = true;
                childArr.tabId = fLayer.tabId;
                childArr.renderSpecial = true;
                if (self.arrLayers[childArr.id]) {
                  child = self.arrLayers[childArr.id];
                } else {
                  child = new C4gLayer(childArr);//layers[i];
                }
                // set renderSpecial to remove it from normal layerswitcher
                self.arrLayers[child.id] = child;
                fLayer.childs[count] = child;
                if (child.hasChilds) {
                  // recursive call
                  fnHandleChilds(child);
                }
              }
            }; // end of fnHandleChilds

            if (layer.hasChilds) {
              fnHandleChilds(layer);
            }
            fnAddToHook(layer);
          }

          uid = layer.id || utils.getUniqueId();
          this.arrLayers[uid] = layer;
          if(this.proxy.checkLayerIsActiveForZoom(layer.id)){
            layer.isInactive = false;
          }
          else{
            layer.isInactive = true;
          }

          this.proxy.layerIds.push(layer.id);

          if (layer.display) {
            isVisible = true;
            fnHandleAndAppendLayerChilds(layer);
          } else if (layer.pid && this.arrLayers[layer.pid]) {
            // set hide when layers are not displayed in the starboard
            layer.hide = this.arrLayers[layer.pid].hide;
          }

          var visible = false;
          if (permalinkedLayers.length > 0) {
            for (p = 0; p < permalinkedLayers.length; p += 1) {
              if (permalinkedLayers[p] == layer.id) {
                visible = true;
                break;
              }
            }
          }

          if ((layer.hide !== "1") || (visible)) {
            this.proxy.activeLayerIds[layer.id] = 'invisible';
          }

        }
      } // end of for-loop

      // wrapperElement.appendChild(wrapper);
    }

    return isVisible;
  } // end of "addLayers()"

  loadLayerContent(itemUid) {

    var self = this,
      i,
      layers,
      features,
      featureProjection,
      dataProjection,
      layerGroup,
      contentData,
      requestData,
      requestContentData,
      requestVectorSource,
      vectorLayer,
      vectorSource,
      vectorStyle,
      clusterSource,
      styleForCluster,
      refreshInterval,
      refreshAjaxVars,
      fnAttachDataToLayer;

    refreshAjaxVars = {};

    fnAttachDataToLayer = function (layer, data) {
      data.properties = data.properties || {};

      layer.popup = data.popup || data.properties.popup || false;
      layer.tooltip = data.tooltip || data.properties.tooltip || false;
      layer.tooltip_length = data.tooltip_length || data.properties.tooltip_length || false;
      layer.label = data.label || data.properties.label || false;
      layer.zoom_onclick = data.zoom_onclick || data.properties.zoom_onclick || false;
    };

    if (this.arrLayers[itemUid].content) {
      layers = [];

          var contentFeatures = [];
          for (i = 0; i < this.arrLayers[itemUid].content.length; i += 1) {
          contentData = this.arrLayers[itemUid].content[i];
          styleForCluster = function (feature, resolution) {

            var size,
              style,
              fFeatures,
              iconOffset,
              radius,
              k,
              fillcolor,
              fontcolor;

            if (contentData && contentData.locationStyle && self.proxy.locationStyleController.arrLocStyles[contentData.locationStyle]) {
              style = self.proxy.locationStyleController.arrLocStyles[contentData.locationStyle].style(feature, resolution);

              if (!style) {
                style = [];
                self.fittingExtends[itemUid] = vectorSource.getExtent();
              }

              if (feature !== undefined && feature !== null && feature.self !== window) {
                if(feature.get('features')){
                  fFeatures = feature.get('features');
                }
                else{
                  fFeatures = [];
                  fFeatures[0] = feature;
                }
                size = fFeatures.length;
                if (size > 1) {
                  if (fFeatures[0].getStyle() && size < 1000) { // limit for performance
                    style[0] = fFeatures[0].getStyle()[0];
                    for (k = 0; k < fFeatures.length; k += 1) {
                      if (!fFeatures[k].getStyle()) {
                        style = self.proxy.locationStyleController.arrLocStyles[contentData.locationStyle].style(fFeatures[0], resolution);
                        break;
                      }
                    }
                  } else {
                    style = self.proxy.locationStyleController.arrLocStyles[contentData.locationStyle].style(fFeatures[0], resolution);
                  }
                  if (!style) {
                    style = [];
                  }

                  // calculate bubble-offset
                  iconOffset = [0, 0];
                  if (style[0]) {
                    if (typeof style[0].getImage() && style[0].getImage().getRadius && typeof style[0].getImage().getRadius === "function") {
                      radius = parseInt(style[0].getImage().getRadius(), 10);
                      if (radius) {
                        iconOffset = [0, radius];
                      }
                    } else if (style[0].getImage() && style[0].getImage().getAnchor && typeof style[0].getImage().getAnchor === "function") {
                      iconOffset = style[0].getImage().getAnchor() || [0, 0];
                    }
                  }

                  fillcolor = utils.getRgbaFromHexAndOpacity('4975A8',{
                    unit: '%',
                    value: 70
                  });

                  if (contentData.cluster_fillcolor) {
                    fillcolor = utils.getRgbaFromHexAndOpacity(contentData.cluster_fillcolor,{
                      unit: '%',
                      value: 70
                    });
                  }
                  fontcolor = '#FFFFFF';
                  if (contentData.cluster_fontcolor) {
                    fontcolor = utils.getRgbaFromHexAndOpacity(contentData.cluster_fontcolor,{
                      unit: '%',
                      value: 100
                    });
                  }

                  style.push(
                    new Style({
                      text: new Text({
                        text: "●",
                        font: "60px sans-serif",
                        offsetX: -1 * iconOffset[0],
                        offsetY: -1 * iconOffset[1],
                        fill: new Fill({
                          color: fillcolor
                        })
                      })
                    })
                  );
                  style.push(
                    new Style({
                      text: new Text({
                        text: size.toString(),
                        offsetX: -1 * iconOffset[0],
                        offsetY: -1 * iconOffset[1] + 3,
                        fill: new Fill({
                          color: fontcolor
                        })
                      })
                    })
                  );
                } else if (size === 1 && fFeatures[0].getStyle()) {
                  return fFeatures[0].getStyle();
                }
              }

            }
            return style;
          }; // end of styleForCluster()

          if (contentData && (contentData.type === "urlData")) {
            requestData = {};
            requestData.url = contentData.data.url;
            if (contentData.data.params) {
              requestData.params = decodeURIComponent(contentData.data.params);
            }

            if (contentData.settings.boundingBox) {
              requestContentData = contentData;
              requestVectorSource = new VectorSource({
                loader: function (extent, resolution, projection) {
                  var boundingArray,
                    strBoundingBox,
                    url;
                  boundingArray = transformExtent(extent, projection, 'EPSG:4326');
                  //different cases for Overpass_QL and XML query format
                  if(requestData.params && requestData.params.substr(0, 1).trim() === "<"){
                    strBoundingBox = '<bbox-query s="' + boundingArray[1] + '" n="' + boundingArray[3] + '" w="' + boundingArray[0] + '" e="' + boundingArray[2] + '"/>';

                  }
                  else{
                    strBoundingBox = boundingArray[1] + ',' + boundingArray[0] + ',' + boundingArray[3] + ',' + boundingArray[2];
                  }

                  url = requestData.url;
                  if (url.indexOf('{key}') > -1) {
                    url = url.replace('{key}', self.ovpKey);
                  }

                  if (requestData.params) {
                    const bboxTag = requestData.params.indexOf('(bbox)') >= 0 ? /\(bbox\)/g : /\{{bbox\}}/g
                    url += url.includes("?") ? "&" : "?";
                    url += 'data=' + encodeURIComponent(requestData.params.replace(bboxTag, strBoundingBox));
                  }

                  if (self.layerRequests === undefined) {
                    self.layerRequests = {};
                  }
                  if (self.layerRequests['layerRequest' + itemUid] !== undefined) {
                    self.layerRequests['layerRequest' + itemUid].abort();
                  }

                  self.layerRequests['layerRequest' + itemUid] = jQuery.ajax({
                    url: url
                  }).done(function (response) {
                    var j,
                      format,
                      feature,
                      rFeatures,
                      osmNodes,
                      osmNds,
                      nodeIdx,
                      ndIdx,
                      infoNodes,
                      newTag,
                      ref;

                    delete self.layerRequests['layerRequest' + itemUid];

                    // preprocessing the osm_xml to find relation-nodes with information
                    if (response && response.children && response.children[0]) {
                      // 1) find nodes with data
                      osmNodes = response.children[0].getElementsByTagName('node');
                      if (osmNodes) {
                        infoNodes = {};
                        for (nodeIdx in osmNodes) {
                          if (osmNodes.hasOwnProperty(nodeIdx) && osmNodes[nodeIdx] && osmNodes[nodeIdx].children && osmNodes[nodeIdx].children.length > 0) {
                            infoNodes[osmNodes[nodeIdx].getAttribute('id')] = osmNodes[nodeIdx];
                            // infoNodes[osmNodes[nodeIdx].getAttribute('id')] = nodeIdx;
                          }
                        }
                      }

                      // 2) check and handle relations
                      osmNds = response.children[0].getElementsByTagName('nd');
                      if (osmNds) {
                        for (ndIdx in osmNds) {
                          if (ndIdx) {
                            if (osmNds.hasOwnProperty(ndIdx) && osmNds[ndIdx]) {
                              try {

                                ref = osmNds[ndIdx].getAttribute('ref');
                                if (infoNodes && ref && infoNodes[ref]) {
                                  if (requestContentData && requestContentData.settings) {
                                    if (requestContentData.settings.showAdditionalGeometries) {
                                      // mark as additional information
                                      if (response) {
                                        newTag = response.createElement('tag');
                                        if (newTag && osmNds[ndIdx].parentElement && osmNds[ndIdx].parentElement.getAttribute('id')) {
                                          newTag.setAttribute('k', 'c4g_osm_ref');
                                          newTag.setAttribute('v', osmNds[ndIdx].parentElement.getAttribute('id'));
                                          infoNodes[ref].appendChild(newTag);
                                        }
                                      }
                                    } else {
                                      // remove additional information
                                      infoNodes[ref].innerHTML = '';
                                    }
                                  }
                                }
                              } catch (e) {
                                console.warn('Could not check and handle relations.');
                              }
                            }
                          }
                        }
                      }
                      // import osm_xml
                      format = new OSMXML();
                      if (format && response) {
                        try {
                          rFeatures = format.readFeatures(response, {featureProjection: projection});
                        } catch (e) {
                          console.warn('Can not read feature.');
                          //console.log(e.stack);
                        }
                      }

                      // postprocessing features
                      if (rFeatures && rFeatures.length > 0) {
                        for (j = 0; j < rFeatures.length; j += 1) {

                          if (rFeatures[j].getGeometry().getType() === "Point") {
                            rFeatures[j].set('osm_type', 'node');
                          } else {
                            rFeatures[j].set('osm_type', 'way');
                          }
                          rFeatures[j].set('c4g_type', 'osm');
                          rFeatures[j].set('cluster_zoom', contentData.cluster_zoom);
                          rFeatures[j].set('cluster_popup', contentData.cluster_popup);
                          rFeatures[j].set('loc_linkurl', contentData.loc_linkurl);
                          rFeatures[j].set('hover_location', contentData.hover_location);
                          rFeatures[j].set('hover_style', contentData.hover_style);
                          rFeatures[j].set('zoom_onclick', contentData.data.zoom_onclick);
                          rFeatures[j].set('label', contentData.data.label);

                          if (requestContentData.settings.forceNodes) {
                            // convert tracks and areas to points
                            if (rFeatures[j].getGeometry().getType() === "Polygon") {
                              let centerPoint = rFeatures[j].getGeometry().getInteriorPoint().getCoordinates();
                              rFeatures[j].setGeometry(new Point([centerPoint[0],centerPoint[1]]));
                            } else if (rFeatures[j].getGeometry().getType() === "LineString") {
                              let lineExtent = rFeatures[j].getGeometry().getExtent();
                              let centerPoint = getCenter(lineExtent);
                              rFeatures[j].setGeometry(new Point(centerPoint));
                            }
                          }
                        }
                      }

                    }
                    else if (response && response.elements) {
                      rFeatures = [];
                      for (let elementId = 0; elementId < response.elements.length; elementId++) {
                        let element = response.elements[elementId];
                        if (element.type ==="node" && !element.tags) {
                          continue;
                        }
                        let tempFeature = self.featureFromOverpass(element,response.elements, contentData, requestContentData.settings.forceNodes);
                        let addFeature = requestVectorSource.getFeatureById(element.id);
                        if(tempFeature && !addFeature){
                          rFeatures.push(tempFeature);
                        }
                      }
                    }
                    try {
                      requestVectorSource.addFeatures(rFeatures);
                    } catch (e) {
                      console.warn('Could not add features to source. The "forceNodes"-option should be used.');
                    }
                    //self.combineLayers(self);
                  }); // end of AJAX

                },
                strategy: bbox,
                projection: 'EPSG:3857'
              });

              vectorSource = requestVectorSource;
            } else {

              if (typeof olFormat[contentData.format] === "function") {

                //StaticVector
                vectorSource = new VectorSource({
                  format: new olFormat[contentData.format](),
                  url: requestData.url,
                  projection: 'EPSG:3857',
                  strategy: all
                });

                if (contentData.settings && contentData.settings.refresh === true) {
                  if (self.layerRequests === undefined) {
                    self.layerRequests = {};
                  }

                  refreshInterval = (typeof contentData.settings.interval === 'number') ? contentData.settings.interval : 10000;
                  /* do it with better ajax-handling
                   self.layerRequests['layerRequest' + itemUid] = window.setInterval(function () {
                   vectorSource.clear();
                   }, refreshInterval);
                   */

                  // Anfang Einschub neue AJAX-Layer
                  refreshAjaxVars.blnHasPositionIds = false;
                  refreshAjaxVars.arrPositionIds = [];
                  refreshAjaxVars.objFeatures = {};

                  vectorSource.set('refreshInterval', refreshInterval);

                  vectorSource.set('refreshFunction', function () {

                    if (!vectorSource.get('hasIds')) {
                      vectorSource.forEachFeature(function (feature) {
                        if (feature.get('positionId')) {
                          refreshAjaxVars.blnHasPositionIds = true;
                          refreshAjaxVars.arrPositionIds.push(feature.get('positionId'));
                          refreshAjaxVars.objFeatures[feature.get('positionId')] = feature;
                        }
                      });
                      if (refreshAjaxVars.blnHasPositionIds) {
                        vectorSource.set('hasIds', true);
                      }
                    }

                    jQuery.ajax({
                      url: requestData.url,
                      done: function (data) {

                        if (data.renewableResponse) {
                          // update of stations
                          jQuery.each(data.features, function (index, featureData) {
                            if (featureData.type && featureData.type === "Feature") {
                              var feature = (new olFormat[contentData.format]()).readFeature(featureData, {
                                dataProjection: 'EPSG:4326',
                                featureProjection: 'EPSG:3857'
                              });
                              var layer = self.arrLayers[featureData.properties.id];
                              var popupContent = featureData.properties.popup;
                              layer.vectorLayer.getLayers().forEach(function(element, index, array) {
                                if (!self.proxy.locationStyleController.arrLocStyles[featureData.properties.styleId]) {
                                  self.proxy.locationStyleController.loadLocationStyles([featureData.properties.styleId], {done: function() {
                                      element.setStyle(self.proxy.locationStyleController.arrLocStyles[featureData.properties.styleId].style);
                                    }});
                                } else {
                                  element.setStyle(self.proxy.locationStyleController.arrLocStyles[featureData.properties.styleId].style);
                                }
                                element.getSource().forEachFeature(function(nestedFeature) {
                                  nestedFeature.set('popup', popupContent);
                                });
                              });
                              layer.content[0].locationStyle = featureData.properties.styleId;

                              if (!self.proxy.locationStyleController.arrLocStyles[featureData.properties.styleId]) {
                                self.proxy.locationStyleController.loadLocationStyles([featureData.properties.styleId], {done: function() {
                                    feature.setStyle(self.proxy.locationStyleController.arrLocStyles[featureData.properties.styleId].style);
                                  }});
                              } else {
                                feature.setStyle(self.proxy.locationStyleController.arrLocStyles[featureData.properties.styleId].style);
                              }

                              if (self.proxy.activeLayerIds[layer.id]) {
                                self.hideLayer(layer.id);
                                self.showLayer(layer.id);
                              }
                              // vectorSource.addFeature(feature);
                            }
                          });
                        }

                        if (data.features) {

                          refreshAjaxVars.arrNewPositionIds = [];
                          refreshAjaxVars.objNewFeatures = {};

                          jQuery.each(data.features, function (index, featureData) {
                            if (featureData.type && featureData.type == "Feature") {
                              refreshAjaxVars.feature = (new olFormat[contentData.format]()).readFeature(featureData, {
                                dataProjection: 'EPSG:4326',
                                featureProjection: 'EPSG:3857'
                              });
                              refreshAjaxVars.feature.set('cluster_zoom', contentData.cluster_zoom);
                              refreshAjaxVars.feature.set('loc_linkurl', contentData.loc_linkurl);
                              refreshAjaxVars.feature.set('hover_location', contentData.hover_location);
                              refreshAjaxVars.feature.set('hover_style', contentData.hover_style);
                              if (refreshAjaxVars.feature.get('positionId')) {
                                refreshAjaxVars.arrNewPositionIds.push(refreshAjaxVars.feature.get('positionId'));
                                refreshAjaxVars.objNewFeatures[refreshAjaxVars.feature.get('positionId')] = refreshAjaxVars.feature;
                              }
                            }
                          });

                          jQuery.each(refreshAjaxVars.arrPositionIds, function (index, positionId) {
                            if (refreshAjaxVars.arrNewPositionIds.indexOf(positionId) == -1) {
                              // positions id in neuer antwort nicht mehr enthalten -> lösche feature
                              if (typeof refreshAjaxVars.objFeatures[positionId] !== "undefined") {
                                vectorSource.removeFeature(refreshAjaxVars.objFeatures[positionId]);
                                delete(refreshAjaxVars.arrPositionIds[index]);
                              }
                            }
                          });

                          jQuery.each(refreshAjaxVars.arrNewPositionIds, function (index, positionId) {
                            if (refreshAjaxVars.arrPositionIds.indexOf(positionId) == -1) {
                              // positions id ist noch nicht vorhanden -> neues feature
                              refreshAjaxVars.arrPositionIds.push(positionId);
                              refreshAjaxVars.objFeatures[positionId] = refreshAjaxVars.objNewFeatures[positionId];
                              vectorSource.addFeature(refreshAjaxVars.objNewFeatures[positionId]);
                            }
                          });
                        }

                      }
                    });
                  });

                  self.proxy.requestFunctions['request_' + itemUid] = {
                    'function': vectorSource.get('refreshFunction'),
                    'interval': refreshInterval
                  };


                  // Ende Einschub neue AJAX-Layer

                }

              } else {
                console.warn('Format type ' + contentData.format + ' in ol.format not found.');
              }
            }

            if (contentData.settings.cluster) {

              window.clusterSource = new Cluster({
                distance: 40,
                //threshold: 2, //minimum element count
                source: vectorSource,
                zoom: contentData.cluster_zoom
              });
              //console.log(clusterSource);
              this.styleForCluster = styleForCluster;

              //vectorLayer = utils.getVectorLayer(clusterSource, styleForCluster);

              vectorLayer = new ol_layer_AnimatedCluster(
                {	name: 'Cluster',
                  source: window.clusterSource,
                  // Use a style function for cluster symbolisation
                  style: styleForCluster
                });


            } else {
              if(self.proxy.locationStyleController.arrLocStyles[contentData.locationStyle] && self.proxy.locationStyleController.arrLocStyles[contentData.locationStyle].fnStyleFunction) {

                vectorStyle = Function("feature","data","map",self.proxy.locationStyleController.arrLocStyles[contentData.locationStyle].fnStyleFunction);
                vectorLayer = utils.getVectorLayer(vectorSource, vectorStyle, self.arrLayers[itemUid]);

              }
              else{
                vectorLayer = utils.getVectorLayer(vectorSource, self.proxy.locationStyleController.arrLocStyles[contentData.locationStyle] ? self.proxy.locationStyleController.arrLocStyles[contentData.locationStyle].style : null, self.arrLayers[itemUid]);
              }
            }

            /* Fit to extend */
            if (contentData.settings && contentData.settings.fitToExtend) {

              self.fittingExtends = self.fittingExtends || {};

              vectorSource.on('change', function () {

                // check currently stored id's
                for (i in self.fittingExtends) {
                  if (self.fittingExtends.hasOwnProperty(i)) {
                    if (typeof self.proxy.activeLayerIds[i] === "undefined" || self.proxy.activeLayerIds[0] == "invisible") {
                      delete self.fittingExtends[i];
                    }
                  }
                }

                self.fittingExtends[itemUid] = vectorSource.getExtent();//vectorSource.getFeatures();
                utils.fitToExtents(self.fittingExtends, self.mapController.map);
              });

            }
            // end of fit to extend

            fnAttachDataToLayer(vectorLayer, contentData.data);
            layers.push(vectorLayer);
          } else if ((this.arrLayers[itemUid].type === "table") || (this.arrLayers[itemUid].type === "link")) {
            var layerContent = this.arrLayers[itemUid].content;
            contentData = layerContent[0];
            if (contentData && contentData.data.properties && contentData.data.properties.projection) {
              dataProjection = contentData.data.properties.projection;
              featureProjection = this.mapController.map.getView().getProjection();
            } else {
              dataProjection = undefined;
            }

            // force all nodes into one layer

            var contentFeature = new olFormat[layerContent[i].format]({}).readFeatures(layerContent[i].data, {
              featureProjection: featureProjection,
              dataProjection: dataProjection
            })[0];
            contentFeature.set('cluster_zoom', contentData.cluster_zoom);
            contentFeature.set('cluster_popup', contentData.cluster_popup);
            contentFeature.set('loc_linkurl', contentData.loc_linkurl);
            contentFeature.set('hover_location', contentData.hover_location);
            contentFeature.set('hover_style', contentData.hover_style);
            contentFeature.set('popup', layerContent[i].data.properties.popup);
            contentFeature.set('zoom_onclick', contentData.zoom_onclick);
            contentFeatures.push(contentFeature);


            if (i+1 === this.arrLayers[itemUid].content.length) {
              vectorSource = new VectorSource({
                features: contentFeatures,
                projection: 'EPSG:3857',
                format: new GeoJSON(),

              });
              if (contentData && contentData.settings && contentData.settings.cluster) {
                clusterSource = new Cluster({
                  distance: 40,
                  zoom: contentData.cluster_zoom,

                  //threshold: 2, //minimum element count
                  source: vectorSource
                });
                //vectorLayer = utils.getVectorLayer(clusterSource, styleForCluster);

                vectorLayer = new ol_layer_AnimatedCluster(
                  {	name: 'Cluster',
                    source: clusterSource,
                    // Use a style function for cluster symbolisation
                    style: styleForCluster
                  });

              } else {
                vectorLayer = utils.getVectorLayer(vectorSource, contentData && self.proxy.locationStyleController.arrLocStyles[contentData.locationStyle] ? self.proxy.locationStyleController.arrLocStyles[contentData.locationStyle].style : null, self.arrLayers[itemUid]);
              }
              layers.push(vectorLayer);
            }
            //return;
          } else {
            if (this.arrLayers[itemUid].content.length > 1) {
              //TODO: refactoren und kürzen!
              // we have overpass request with reassigned forum layers
              // forum layers can not be drawn via the normal drawLayer, because they do not have a Uid
              if (contentData && (typeof olFormat[contentData.format] === "function")) {
                if (contentData.data.properties && contentData.data.properties.projection) {
                  dataProjection = contentData.data.properties.projection;
                  featureProjection = this.mapController.map.getView().getProjection();
                } else {
                  dataProjection = undefined;
                }

                features = (new olFormat[contentData.format]({})).readFeatures(contentData.data, {
                  featureProjection: featureProjection,
                  dataProjection: dataProjection
                });

                var missingStyles = [];
                var unstyledFeatures = [];
                for (let j = 0; j < features.length; j += 1) {
                  if (features[j].get('styleId')) {
                    if (self.proxy.locationStyleController.arrLocStyles[features[j].get('styleId')] && self.proxy.locationStyleController.arrLocStyles[features[j].get('styleId')].style) {
                      features[j].setStyle(self.proxy.locationStyleController.arrLocStyles[features[j].get('styleId')].style);
                    } else {
                      missingStyles.push(features[j].get('styleId'));
                      unstyledFeatures.push(features[j]);
                    }
                  }
                }

                vectorStyle = self.proxy.locationStyleController.arrLocStyles[contentData.locationStyle] && self.proxy.locationStyleController.arrLocStyles[contentData.locationStyle].style;

                if (missingStyles.length > 0) {
                  //TODO there are unstyled features because some styles were not loaded
                } else {
                  vectorSource = new VectorSource({
                    features: features,
                    projection: 'EPSG:3857',
                    format: new GeoJSON()
                  });
                  clusterSource = new Cluster({
                    distance: 40,
                    zoom: contentData.cluster_zoom,

                    //threshold: 2, //minimum element count
                    source: vectorSource
                  });

                  vectorLayer = utils.getVectorLayer(clusterSource, vectorStyle, self.arrLayers[itemUid]);
                  if (contentData.data && contentData.data.properties) {
                      if (contentData.data.properties.popup) {
                          vectorLayer.popup = contentData.data.properties.popup;
                      }
                      if (contentData.data.properties.tooltip) {
                          vectorLayer.tooltip = contentData.data.properties.tooltip;
                      }
                      if (contentData.data.properties.label) {
                          vectorLayer.label = contentData.data.properties.label;
                      }
                      if (contentData.data.properties.onclick_zoom) {
                          vectorLayer.onclick_zoom = contentData.data.properties.onclick_zoom;
                      }
                  }
                  layers.push(vectorLayer);

                }

              } else {
                if (contentData) {
                  console.warn('Format type ' + contentData.format + ' in ol.format not found.');
                } else {
                  //no contentData, maybe a link
                }
              }
            } else {
              // normal, not overpass layer
              self.drawLayer(itemUid);
              return;
            }
          }
        }
      // add vector layer group
      layerGroup = new Group({
        layers: layers
      });
      this.arrLayers[itemUid].vectorLayer = layerGroup;
      self.mapController.map.addLayer(layerGroup);
      //self.combine(self);

    }
    else if(this.arrLayers[itemUid].async_content == 1){
          styleForCluster = function(feature, resolution){
              var styleId,
                  style,
                  iconOffset,
                  radius,
                  fillcolor,
                  fontcolor;
              if(feature && feature.get('features')){
                  if(styleId = feature.get('features')[0].get('locationStyle')){
                      if(self.proxy.locationStyleController.arrLocStyles[styleId] && self.proxy.locationStyleController.arrLocStyles[styleId].style){
                          style = self.proxy.locationStyleController.arrLocStyles[styleId].style(feature.get('features')[0],resolution);
                      }
                  }
                  if(!style){
                      style = [];
                  }
                  if(feature.get('features').length > 1){
                      // calculate bubble-offset
                      iconOffset = [0, 0];
                      if (style[0]) {
                          if (typeof style[0].getImage().getRadius === "function") {
                              radius = parseInt(style[0].getImage().getRadius(), 10);
                              if (radius) {
                                  iconOffset = [0, radius];
                              }
                          } else if (typeof style[0].getImage().getAnchor === "function") {
                              iconOffset = style[0].getImage().getAnchor() || [0, 0];
                          }
                      }

                      fillcolor = utils.getRgbaFromHexAndOpacity('4975A8',{
                          unit: '%',
                          value: 70
                      });

                      if(contentData.cluster_fillcolor) {
                          fillcolor = utils.getRgbaFromHexAndOpacity(contentData.cluster_fillcolor,{
                              unit: '%',
                              value: 70
                          });
                      }
                      if(feature.get('features')[0].get('cluster_fillcolor')){
                          fillcolor = utils.getRgbaFromHexAndOpacity(feature.get('features')[0].get('cluster_fillcolor'),{
                              unit: '%',
                              value: 70
                          });
                      }
                      fontcolor = '#FFFFFF';
                      if(feature.get('features')[0].get('cluster_fontcolor')){
                          fontcolor = utils.getRgbaFromHexAndOpacity(feature.get('features')[0].get('cluster_fontcolor'),{
                              unit: '%',
                              value: 100
                          });
                      }

                      style.push(
                          new Style({
                              text: new Text({
                                  text: "●",
                                  font: "60px sans-serif",
                                  offsetX: -1 * iconOffset[0],
                                  offsetY: -1 * iconOffset[1],
                                  fill: new Fill({
                                      color: fillcolor
                                  })
                              })
                          })
                      );
                      style.push(
                          new Style({
                              text: new Text({
                                  text: feature.get('features').length.toString(),
                                  offsetX: -1 * iconOffset[0],
                                  offsetY: -1 * iconOffset[1] + 3,
                                  fill: new Fill({
                                      color: fontcolor
                                  })
                              })
                          })
                      );
                  }

              }

              if(style){
                  return style;
              }
          };
          requestVectorSource = new VectorSource({
              loader: function (extent, resolution, projection) {
                  var boundingArray,
                      strBoundingBox,
                      url;
                  self.mapController.spinner.show();
                  boundingArray = transformExtent(extent, projection, 'EPSG:4326');
                  strBoundingBox = boundingArray[0]+','+boundingArray[1]+';'+boundingArray[2]+','+boundingArray[3];
                  if (self.layerRequests === undefined) {
                      self.layerRequests = {};
                  }
                  if (self.layerRequests['layerDataRequest' + itemUid] !== undefined) {
                      self.layerRequests['layerDataRequest' + itemUid].abort();
                  }
                  if(!self.proxy.locationStyleController.arrLocStyles[self.arrLayers[itemUid].locstyle]){
                      self.proxy.locationStyleController.loadLocationStyles([self.arrLayers[itemUid].locstyle], {done: function() {}});
                  }

                  self.layerRequests['layerDataRequest' + itemUid] = jQuery.ajax({
                      url: self.proxy.api_layercontentdata_url + '/' + self.arrLayers[itemUid].id +'/'+strBoundingBox,
                  }).done( function (data){
                      if(data.length > 0 && !contentFeatures){
                          contentFeatures = [];
                      }
                      let layer = self.arrLayers[itemUid];
                      loopData:
                          for(let i = 0; i < data.length; i++){
                              contentData = data[i];
                              for(let j = 0; j < contentFeatures.length; j++){
                                  if(contentData.id === contentFeatures[j].id) continue loopData;
                              }
                              var resultCoordinate = transform([parseFloat(contentData['geox']), parseFloat(contentData['geoy'])], 'EPSG:4326', 'EPSG:3857')
                              var point = new Point(resultCoordinate);
                              contentFeature = new Feature(point);
                              contentFeature.setId(contentData.id);
                              if (layer.cluster) {
                                contentFeature.set('cluster_zoom', layer.cluster.zoom);
                                contentFeature.set('cluster_popup', layer.cluster.popup);
                                contentFeature.set('cluster_fillcolor', layer.cluster.fillcolor);
                                contentFeature.set('cluster_fontcolor', layer.cluster.fontcolor);
                              }

                              contentFeature.set('loc_linkurl', layer.loc_linkurl);
                              contentFeature.set('hover_location', layer.hover_location);
                              contentFeature.set('hover_style', layer.hover_style);
                              let popup = contentData['popup'] ? contentData['popup'] : jQuery.extend({},layer.popup);
                              if(popup && popup.content && popup.content.search && popup.content.search('itemId')){
                                popup.content = popup.content.replace('itemId',contentData['id']);
                              }
                              if(contentData['label']){
                                   contentFeature.set('label',contentData['label'])
                              }
                              if(contentData['tooltip']){
                                  contentFeature.set('tooltip',contentData['tooltip'])
                              }
                              contentFeature.set('popup', popup);
                              contentFeature.set('zoom_onclick', layer.zoom_onclick);
                              contentFeature.set('tid', contentData['id']);
                              let locstyle = contentData['locstyle'] || layer.locstyle;
                              contentFeature.set('locationStyle', locstyle);
                              if(locstyle && self.proxy.locationStyleController.arrLocStyles[locstyle] && self.proxy.locationStyleController.arrLocStyles[locstyle].style){
                                  contentFeature.setStyle(self.proxy.locationStyleController.arrLocStyles[locstyle].style);
                                  contentFeatures.push(contentFeature);
                              }
                              else{
                                  if (!unstyledFeatures) {
                                    unstyledFeatures = [];
                                  }
                                  if (!missingStyles) {
                                    missingStyles = [];
                                  }
                                  contentFeature.set('styleId',locstyle);
                                  unstyledFeatures.push(contentFeature);
                                  missingStyles[locstyle] = locstyle;
                              }

                          }
                      if(missingStyles){
                          self.proxy.locationStyleController.loadLocationStyles(missingStyles, {done: function() {
                                  for(i = 0; i < unstyledFeatures.length; i++){
                                      var styleId =unstyledFeatures[i].get('styleId');
                                      unstyledFeatures[i].setStyle(self.proxy.locationStyleController.arrLocStyles[styleId].style);
                                      requestVectorSource.addFeature(unstyledFeatures[i]);
                                  }
                                  missingStyles = undefined;
                              }});
                      }

                      if(data.length > 0){
                          requestVectorSource.addFeatures(contentFeatures);
                      }
                  })
                      .always(function () {
                          self.mapController.spinner.hide();
                      })

              },
              strategy: bbox
          });

          if(this.arrLayers[itemUid].cluster){
            let layer = self.arrLayers[itemUid];
            let map = self.mapController.map;
            let currentZoom = map.getView().getZoom();
            let clusterDistance = this.arrLayers[itemUid].cluster.distance || 20;
            if (currentZoom >= layer.cluster.zoom) {
              clusterDistance = 0;
            }

            clusterSource = new Cluster({
              distance: clusterDistance,
              //threshold: 2, //minimum element count
              source: requestVectorSource
            });
              vectorLayer = new ol_layer_AnimatedCluster(
                  {	name: 'Cluster',
                      source: clusterSource,
                      // Use a style function for cluster symbolisation
                      style: styleForCluster
                  });
          }
          else{
              vectorLayer = new Vector(
                  {
                      name: 'Layer',
                      source: requestVectorSource
                  }
              );
          }
          layers = layers || [];
          layers.push(vectorLayer);
        layerGroup = new Group({
            layers: layers
        });
        this.arrLayers[itemUid].vectorLayer = layerGroup;
        self.mapController.map.addLayer(layerGroup);


      }
       else{
        self.mapController.spinner.show();
        jQuery.ajax({
          dataType: self.mapController.data.jsonp ? "jsonp" : "json",
          url: self.proxy.api_layercontent_url + '/' + self.arrLayers[itemUid].id,
        }).done(function(data){
            let j,
                newLocationStyles;

            if (data.length > 0) {
                newLocationStyles = [];

                for (j = 0; j < data.length; j += 1) {

                    self.arrLayers[itemUid].content = self.arrLayers[itemUid].content || [];

                    self.arrLayers[itemUid].content.push(data[j]);
                    newLocationStyles.push(data[j].locationStyle);
  
                }

                self.proxy.checkLocationStyles({
                    done: function () {
                        // @TODO: check this!
                        self.loadLayerContent(itemUid);
                    }
                });

            }
        }).always(function () {
            self.mapController.spinner.hide();
        });
      }


  } // end of "loadLayerContent()"
  featureFromOverpass(element, elements, contentData, forceNodes){
    let feature = null;
    if(element.type == "node"){
      if(element.tags){
        let point = new Point([element.lon,element.lat]).transform('EPSG:4326','EPSG:3857');
        feature = new Feature({
          geometry: point
        });
        feature.set('osm_type', 'node');
      }
    }
    else if(element.type == "way"){
      if(element.tags){
        feature = new Feature(this.geomFromWay(element, elements, forceNodes));
      }
      else{
        let geom = this.geomFromWay(element, elements, forceNodes);
        feature = new Feature(geom);
      }

    }
    else if(element.type === "relation"){
      let multiPolygon = null;
      let multiLineString = null;
      let arrCoords = null;
      let point = null;
        for(let i = 0; i< element.members.length; i++){
          if(element.members[i].role === "outer"){ //@ToDo add handling for outer border
            continue;
          }
          let member = elements.find(function(objMemb){
            return objMemb.id === element.members[i].ref;
          });
          if(member){
            let geom;
            if(member.type === 'node'){
              geom = new Point([member.lon,member.lat]).transform('EPSG:4326','EPSG:3857');
            }
            else{
              geom = this.geomFromWay(member, elements, true);
            }
            if(geom.getType() === 'Point'){
              if(!arrCoords){
                arrCoords = [];

              }
              arrCoords.push(geom.getCoordinates());
            }
            else if(geom.getType() === 'Polygon') {
              if(multiPolygon){
                multiPolygon.appendPolygon(geom);
              }
              else{
                multiPolygon = new MultiPolygon(geom.getCoordinates());
              }
            }
            else if(geom.getType() === 'LineString') {
              if(multiLineString){
                multiLineString.appendLineString(geom);
              }
              else{
                multiLineString = new LineString(geom.getCoordinates());
              }
            }
          }

        }
        if(arrCoords){
          let extent = boundingExtent(arrCoords);
          point = new Point(getCenter(extent));
        }
        if(point || multiPolygon || multiLineString){
          feature = new Feature(point ? point : (multiLineString ? multiLineString : multiPolygon));
        }
    }
    if(feature){
      feature.setId(element.id);
      feature.set('c4g_type', 'osm');
      feature.set('cluster_zoom', contentData.cluster_zoom || '');
      feature.set('cluster_popup', contentData.cluster_popup || '');
      feature.set('loc_linkurl', contentData.loc_linkurl || '');
      feature.set('hover_location', contentData.hover_location || '');
      feature.set('hover_style', contentData.hover_style || '');
      feature.set('tid', element.id);
      if(contentData.data){
        feature.set('zoom_onclick', contentData.data.zoom_onclick || '');
        feature.set('label', contentData.data.label || '');
      }

      for(let tags in element.tags){
        feature.set(tags, element.tags[tags]);
      }
      return feature;
    }

  }
  geomFromWay(element, elements, forceNodes){
    let arrCoords = [];
    for (let i = 0; i < element.nodes.length; i++) {
      let node = elements.find(function(objNode) {
        return objNode.id === element.nodes[i];
      });
      if (node) {
        arrCoords.push(transform([node.lon,node.lat],'EPSG:4326','EPSG:3857'));
      }
    }
    if (arrCoords && arrCoords[0] && arrCoords[0][0] == arrCoords[arrCoords.length-1][0] && arrCoords[0][1] == arrCoords[arrCoords.length-1][1]) { //polygon
      delete arrCoords[arrCoords.length-1];
      arrCoords.length = arrCoords.length-1;
      let polygon = new Polygon([arrCoords]);
      // polygon.transform('EPSG:4326','EPSG:3857');
      if (forceNodes) {
        // convert tracks and areas to points
        let tempPoint = polygon.getInteriorPoint();
        let tempCoords = tempPoint.getCoordinates();
        return new Point([tempCoords[0],tempCoords[1]]);
      }
      else {
        return polygon;
      }
    }
    else { //linestring
      let lineString = new LineString(arrCoords);
      if (forceNodes) {
        if(arrCoords.length > 0) {
          let lineExtent = boundingExtent(arrCoords);
          let lineCenter = getCenter(lineExtent);
          return new Point([lineCenter[0], lineCenter[1]]);
        }

      }
      else{
        return lineString;
      }

    }
  }
  hideLayer(layerUid, keepLayer) {

    var layer,
      i,
      j;

    layer = this.arrLayers[layerUid];
    if (!layer) {
      //console.warn('Cannot hide unknown layer (' + layerUid + ')');
      return false;
    }

    // check if layer is listed as "active"
    // otherwise there is nothing to remove or change
    if (this.proxy.activeLayerIds[layerUid]) {
      // remove layer from map (if it was visible before)
      if (this.proxy.activeLayerIds[layerUid] === 'visible' && layer.vectorLayer) {
        // [info]: do not use "layer.vectorLayer.setVisible(false);"
        //         see "showLayer()" for more information
        this.mapController.map.removeLayer(layer.vectorLayer);
      }
      // only mark as "invisible" if "keepLayer" is "true"
      // this is needed for the zoom-bounds
      if (keepLayer) {
        this.proxy.activeLayerIds[layerUid] = 'invisible';
      } else {
        delete this.proxy.activeLayerIds[layerUid];
      }
    }

    // childs needed to be checked independent from its parents state


    //ToDo loading problem
    if (layer && layer.hasChilds) {
      for (i = 0; i < layer.childs.length; i += 1) {
        this.hideLayer(layer.childs[i].id);
      }
    }
    if(layer.isInactive){
      utils.callHookFunctions(this.proxy.hook_layer_visibility, layerUid);
      return
    }
    layer.isInactive = true;

    if (this.layerRequests && typeof this.layerRequests['layer_request_' + layerUid] !== "undefined") {
      if (typeof this.layerRequests['layer_request_' + layerUid] == "number") {
        try {
          window.clearInterval(this.layerRequests['layer_request_' + layerUid]);
          delete this.layerRequests['layer_request_' + layerUid];
        } catch (e) {

        }
      }
    }
    //this.combineLayers(this);
    this.mapController.map.getView().setCenter([this.mapController.map.getView().getCenter()[0]+0.001,this.mapController.map.getView().getCenter()[1]]);
    // hooks
    utils.callHookFunctions(this.proxy.hook_layer_visibility, layerUid);
  } // end of "hideLayer()"

  hideChildLayer(layerUid, childUid) {
    let layer = this.arrLayers[layerUid];
    childUid = childUid.replace(layerUid,'');
    let childLayer = layer.vectorLayer.getLayers().getArray()[childUid];
    childLayer.set('visible', false);
  }

  showChildLayer(layerUid, childUid) {
      let layer = this.arrLayers[layerUid];
      childUid = childUid.replace(layerUid,'');
      let childLayer = layer.vectorLayer.getLayers().getArray()[childUid];
      childLayer.set('visible', true);
  }

  showLayer(layerUid) {
    var layer,
      mapLayers,
      addLayer,
      i,
      j,
      activeForZoom;

    activeForZoom = this.proxy.checkLayerIsActiveForZoom(layerUid);
    layer = this.arrLayers[layerUid];

    if (activeForZoom) {
      if (this.proxy.activeLayerIds[layerUid] !== 'visible') {
        //if (layer.link_id) {
        //  this.proxy.activeLayerIds[layer.link_id] = 'visible';
        //} else
        if (layer && layer.vectorLayer) {
          // [info]: do not use: "layer.vectorLayer.setVisible(true);"
          //         Always add and remove Layers, so that the last
          //         clicked layer is always ontop of the others.

          // check if layer is really not already on the map
          // to prevent adding the same layer multiple times
          addLayer = true;
          mapLayers = this.mapController.map.getLayers();
          mapLayers.forEach(function (element, index, array) {
            if (element === layer.vectorLayer) {
              addLayer = false;
            }
          });
          if (addLayer) {
            if(layer.vectorLayer.getLayers().getArray()[0] && layer.vectorLayer.getLayers().getArray()[0].popup && layer.vectorLayer.getLayers().getArray()[0].popup.showPopupOnActive){

              this.proxy.currentPopup.$content.html('');
              this.proxy.currentPopup.$popup.addClass(cssConstants.ACTIVE).addClass(cssConstants.LOADING);
              this.proxy.currentPopup.spinner.show();
              var popupInfos = layer.vectorLayer.getLayers().getArray()[0].popup;
              var features = layer.vectorLayer.getLayers().getArray()[0].getSource().getFeatures();
              var coord = features['0'].getGeometry().getCoordinates();
              if (popupInfos.async === false) {
                var objPopup = {};
                objPopup.popup = popupInfos;
                objPopup.feature = features['0'];
                objPopup.layer = layer.vectorLayer.getLayers().getArray()[0];
                // Call the popup hook for plugin specific popup content
                if (window.c4gMapsHooks !== undefined && typeof window.c4gMapsHooks.proxy_fillPopup === 'object') {
                  utils.callHookFunctions(window.c4gMapsHooks.proxy_fillPopup, objPopup);
                }
                this.proxy.setPopup(objPopup);
              } else {
                var self = this;
                jQuery.ajax({
                  dataType: "json",
                  url: self.api_infowindow_url + '/' + popupInfos.content,
                  done: function (data) {
                    var popupInfo = {
                      async: popupInfos.async,
                      content: data.content,
                      popup: popupInfos.popup,
                      routing_link: popupInfos.routing_link
                    };

                    var objPopup = {};
                    objPopup.popup = popupInfo;
                    objPopup.feature = features['0'];
                    objPopup.layer = layer;

                    // Call the popup hook for plugin specific popup content
                    if (window.c4gMapsHooks !== undefined && typeof window.c4gMapsHooks.proxy_fillPopup === 'object') {
                      utils.callHookFunctions(window.c4gMapsHooks.proxy_fillPopup, objPopup);
                    }

                    self.proxy.setPopup(objPopup);
                  }
                });
              }
            }
            this.mapController.map.addLayer(layer.vectorLayer);
          }
        } else {
          this.loadLayerContent(layerUid);
        }
        this.proxy.activeLayerIds[layerUid] = 'visible';
      }
      else {
        //if (layer.link_id) {
        //  this.proxy.activeLayerIds[layer.link_id] = 'invisible';
        //} else {
        //this.proxy.activeLayerIds[layerUid] = 'invisible';
        //}
      }
    }

    if (layer && layer.hasChilds && activeForZoom) {
      for (i = 0; i < layer.childs.length; i += 1) {
        this.showLayer(layer.childs[i].id);
      }
    }

    if (layer && activeForZoom) {
      layer.isInactive = false;
    }

    if (typeof this.proxy.requestFunctions['request_' + layerUid] !== "undefined") {

      if (this.layerRequests && typeof this.layerRequests['layer_request_' + layerUid] === "undefined") {
        this.layerRequests['layer_request_' + layerUid] = window.setInterval(this.proxy.requestFunctions['request_' + layerUid].function, this.proxy.requestFunctions['request_' + layerUid].interval);
      }

    }
    //this.combineLayers(this);
    // hooks
    utils.callHookFunctions(this.proxy.hook_layer_visibility, layerUid);
  } // end of "showLayer()"

  drawLayer(itemUid) {

    var self,
      element,
      elementContent,
      layers,
      i,
      j,
      missingStyles,
      unstyledFeatures,
      features,
      dataProjection,
      featureProjection,
      vectorSource,
      vectorLayer,
      vectorStyle,
      layerGroup;

    self = this;
    element = this.arrLayers[itemUid];

    // if (!element.hide) {

    layers = [];
    if (element.content && element.content.length > 0) {
      for (i = 0; i < element.content.length; i += 1) {

        elementContent = element.content[i];
        if (!elementContent) {
          continue;
        }
        if (typeof olFormat[elementContent.format] === "function") {

          // if (element.content[i].origType === 'single') {
          //   featureProjection = this.mapController.map.getView().getProjection();
          // } else {
          //   featureProjection = undefined;
          // }
          if (elementContent.data.properties && elementContent.data.properties.projection) {
            dataProjection = elementContent.data.properties.projection;
            featureProjection = this.mapController.map.getView().getProjection();
          } else {
            dataProjection = undefined;
          }

          if (elementContent.format === "OSMXML") {
            continue;
          }
          if (elementContent.data.geometry && elementContent.data.geometry.type === "Circle") {
            // draw circle geometries
            features = [];
            let feature = new Feature(
              new Circle(
                fromLonLat(elementContent.data.geometry.center),
                parseFloat(elementContent.data.geometry.radius)
              ));
            feature.set('styleId', elementContent.locationStyle);
            feature.set('label', elementContent.data.properties.label);
            features.push(feature);
          } else {
            // remaining geometries
            features = (new olFormat[elementContent.format]({})).readFeatures(elementContent.data, {
              featureProjection: featureProjection,
              dataProjection: dataProjection
            });
          }

          missingStyles = [];
          unstyledFeatures = [];
          for (j = 0; j < features.length; j += 1) {
            // features[j].setId(utils.getUniqueId());
            // features[j].set('projection', this.mapController.map.getView().getProjection());
            // features[j].set('projection', "EPSG:4326");
            features[j].set('hover_location', elementContent.hover_location);
            features[j].set('hover_style', elementContent.hover_style);
            if (features[j].get('styleId')) {
              if (self.proxy.locationStyleController.arrLocStyles[features[j].get('styleId')] && self.proxy.locationStyleController.arrLocStyles[features[j].get('styleId')].style) {
                features[j].setStyle(self.proxy.locationStyleController.arrLocStyles[features[j].get('styleId')].style);
              } else {
                missingStyles.push(features[j].get('styleId'));
                unstyledFeatures.push(features[j]);
              }
            } else if (elementContent.locationStyle) {
              // feature has no property styleId, but elementContent has locationstyle
              if (self.proxy.locationStyleController.arrLocStyles[elementContent.locationStyle] && self.proxy.locationStyleController.arrLocStyles[elementContent.locationStyle].style) {
                //features[j].setStyle(self.proxy.locationStyleController.arrLocStyles[elementContent.locationStyle].style);
              } else {
                missingStyles.push(elementContent.locationStyle);
                unstyledFeatures.push(features[j]);
                features[j].set('styleId', elementContent.locationStyle);
              }
            }
          }
          if (elementContent.hover_location && !self.proxy.locationStyleController.arrLocStyles[elementContent.hover_style]) {
            missingStyles.push(elementContent.hover_style);
          }
          vectorStyle = self.proxy.locationStyleController.arrLocStyles[elementContent.locationStyle] && self.proxy.locationStyleController.arrLocStyles[elementContent.locationStyle].style;
          if(self.proxy.locationStyleController.arrLocStyles[elementContent.locationStyle] && self.proxy.locationStyleController.arrLocStyles[elementContent.locationStyle].fnStyleFunction) {

            vectorStyle = Function("feature", "data", "map", self.proxy.locationStyleController.arrLocStyles[elementContent.locationStyle].fnStyleFunction);
          }
          if (missingStyles.length > 0) {
            this.proxy.locationStyleController.loadLocationStyles(missingStyles, {
              done: function () {
                var f,
                  fLayerGroup,
                  fLayers,
                  fVectorLayer,
                  fVectorSource;

                for (f = 0; f < unstyledFeatures.length; f += 1) {
                  if (self.proxy.locationStyleController.arrLocStyles[unstyledFeatures[f].get('styleId')]) {
                    let style;
                    if(self.proxy.locationStyleController.arrLocStyles[unstyledFeatures[f].get('styleId')] && self.proxy.locationStyleController.arrLocStyles[unstyledFeatures[f].get('styleId')].fnStyleFunction) {
                      style = Function("feature", "data", "map", self.proxy.locationStyleController.arrLocStyles[unstyledFeatures[f].get('styleId')].fnStyleFunction);
                    }
                    else {
                      style = self.proxy.locationStyleController.arrLocStyles[unstyledFeatures[f].get('styleId')].style
                    }
                    unstyledFeatures[f].setStyle(style);
                  }
                }

                fVectorSource = new VectorSource({
                  features: features,
                  projection: 'EPSG:3857',
                  format: new GeoJSON()
                });

                fVectorLayer = utils.getVectorLayer(fVectorSource, vectorStyle, element.zIndex);

                // layers.push(vectorLayer);
                if (self.arrLayers[itemUid].fVectorLayer) {
                  fLayerGroup = self.arrLayers[itemUid].vectorLayer;
                  fLayers = fLayerGroup.getLayers();

                  if (elementContent.data && elementContent.data.properties) {
                    if (elementContent.data.properties.popup) {
                      fVectorLayer.popup = elementContent.data.properties.popup;
                    }
                    if (elementContent.data.properties.tooltip) {
                      fVectorLayer.tooltip = elementContent.data.properties.tooltip;
                    }
                    if (elementContent.data.properties.label) {
                      fVectorLayer.label = elementContent.data.properties.label;
                    }
                    if (elementContent.data.properties.zoom_onclick) {
                      fVectorLayer.zoom_onclick = elementContent.data.properties.zoom_onclick;
                    }
                  }

                  fLayers.push(fVectorLayer);
                  fLayerGroup.setLayers(fLayers);
                } else {
                  if (elementContent.data && elementContent.data.properties) {
                    if (elementContent.data.properties.popup) {
                      fVectorLayer.popup = elementContent.data.properties.popup;
                    }
                    if (elementContent.data.properties.tooltip) {
                      fVectorLayer.tooltip = elementContent.data.properties.tooltip;
                    }
                    if (elementContent.data.properties.label) {
                      fVectorLayer.label = elementContent.data.properties.label;
                    }
                    if (elementContent.data.properties.zoom_onclick) {
                      fVectorLayer.zoom_onclick = elementContent.data.properties.zoom_onclick;
                    }
                  }
                  fLayerGroup = new Group({
                    layers: [fVectorLayer]
                  });
                  self.arrLayers[itemUid].vectorLayer = fLayerGroup;
                  self.mapController.map.addLayer(fLayerGroup);
                }

              }
            });
          } else {
            if(element.split_geojson) {
              for (let i = 0; i < features.length; i++) {
                vectorSource = new VectorSource({
                  projection: 'EPSG:3857',
                  format: new GeoJSON()
                });
                vectorSource.addFeature(features[i]);
                vectorLayer = utils.getVectorLayer(vectorSource, vectorStyle, element.zIndex);
                for(let j = 0; j< element.geojson_attributes.split(',').length; j++){
                  vectorLayer.set(element.geojson_attributes.split(',')[j],features[i].get(element.geojson_attributes.split(',')[j]))
                }
                layers.push(vectorLayer);
                if (elementContent.data.properties.popup) {
                  vectorLayer.popup = elementContent.data.properties.popup;
                }
                if (elementContent.data.properties.tooltip) {
                  vectorLayer.tooltip = elementContent.data.properties.tooltip;
                }
                if (elementContent.data.properties.label) {
                  vectorLayer.label = elementContent.data.properties.label;
                }
                if (elementContent.data.properties.zoom_onclick) {
                  vectorLayer.zoom_onclick = elementContent.data.properties.zoom_onclick;
                }
              }
            } else {
              vectorSource = new VectorSource({
                features: features,
                projection: 'EPSG:3857',
                format: new GeoJSON()
              });
              vectorLayer = utils.getVectorLayer(vectorSource, vectorStyle, element.zIndex);

              if (elementContent.data && elementContent.data.properties) {
                if (elementContent.data.properties.popup) {
                  vectorLayer.popup = elementContent.data.properties.popup;
                }
                if (elementContent.data.properties.tooltip) {
                  vectorLayer.tooltip = elementContent.data.properties.tooltip;
                }
                if (elementContent.data.properties.label) {
                  vectorLayer.label = elementContent.data.properties.label;
                }
                if (elementContent.data.properties.zoom_onclick) {
                  vectorLayer.zoom_onclick = elementContent.data.properties.zoom_onclick;
                }
              }

              layers.push(vectorLayer);
            }
          }

        }

        else {
          console.warn('Format type ' + elementContent.format + ' in ol.format not found.');
        }

      }
    }

    layerGroup = new Group({
      layers: layers
    });

    this.arrLayers[itemUid].vectorLayer = layerGroup;
    this.mapController.map.addLayer(layerGroup);
    if (layerGroup.getLayers().getArray()[0] && layerGroup.getLayers().getArray()[0].popup && layerGroup.getLayers().getArray()[0].popup.showPopupOnActive) {
      this.proxy.currentPopup.$content.html('');
      this.proxy.currentPopup.$popup.addClass(cssConstants.ACTIVE).addClass(cssConstants.LOADING);
      this.proxy.currentPopup.spinner.show();
      var popupInfos = layerGroup.getLayers().getArray()[0].popup;
      var layer = layerGroup.getLayers().getArray()[0];
      var coord = features['0'].getGeometry().getCoordinates();
      if (popupInfos.async === false) {
        var objPopup = {};
        objPopup.popup = popupInfos;
        objPopup.feature = features['0'];
        objPopup.layer = layer;
        // Call the popup hook for plugin specific popup content
        if (window.c4gMapsHooks !== undefined && typeof window.c4gMapsHooks.proxy_fillPopup === 'object') {
          utils.callHookFunctions(window.c4gMapsHooks.proxy_fillPopup, objPopup);
        }
        self.proxy.setPopup(objPopup);
      } else {
        jQuery.ajax({
          dataType: "json",
          url: self.api_infowindow_url + '/' + popupInfos.content,
          done: function (data) {
            var popupInfo = {
              async: popupInfos.async,
              content: data.content,
              popup: popupInfos.popup,
              routing_link: popupInfos.routing_link
            };

            var objPopup = {};
            objPopup.popup = popupInfo;
            objPopup.feature = features['0'];
            objPopup.layer = layer;

            // Call the popup hook for plugin specific popup content
            if (window.c4gMapsHooks !== undefined && typeof window.c4gMapsHooks.proxy_fillPopup === 'object') {
              utils.callHookFunctions(window.c4gMapsHooks.proxy_fillPopup, objPopup);
            }

            self.proxy.setPopup(objPopup);
          }
        });
      }
    }

    //hooks
    // }
  } // end of "drawLayer()"

  drawLayerInitial() {
    var layerId,
      layer;

    for (layerId in this.proxy.activeLayerIds) {
      if (this.proxy.activeLayerIds.hasOwnProperty(layerId)) {
        this.showLayer(layerId);
      }
    }
    for (let l in this.arrLayers) {
      if (this.arrLayers.hasOwnProperty(l)) {
        layer = this.arrLayers[l];
        if (layer.hide === "1") {
          this.hideLayer(layer.id);
        }
      }
    }
  } // end of "drawLayerInitial()"
}
