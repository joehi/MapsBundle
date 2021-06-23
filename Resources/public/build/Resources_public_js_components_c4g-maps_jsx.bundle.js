(self["webpackChunkmapsbundle"] = self["webpackChunkmapsbundle"] || []).push([["Resources_public_js_components_c4g-maps_jsx"],{

/***/ "./Resources/public/js/c4g-baselayer-controller.js":
/*!*********************************************************!*\
  !*** ./Resources/public/js/c4g-baselayer-controller.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.C4gBaselayerController = exports.OSM_REL_ATTRIBUTION = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _c4gBaselayer = __webpack_require__(/*! ./c4g-baselayer */ "./Resources/public/js/c4g-baselayer.js");

var _c4gOverlay = __webpack_require__(/*! ./c4g-overlay */ "./Resources/public/js/c4g-overlay.js");

var _c4gMapsConfig = __webpack_require__(/*! ./c4g-maps-config */ "./Resources/public/js/c4g-maps-config.js");

var _c4gMapsUtils = __webpack_require__(/*! ./c4g-maps-utils */ "./Resources/public/js/c4g-maps-utils.js");

var _Tile = _interopRequireDefault(__webpack_require__(/*! ol/layer/Tile */ "./node_modules/ol/layer/Tile.js"));

var _TileJSON = _interopRequireDefault(__webpack_require__(/*! ol/source/TileJSON */ "./node_modules/ol/source/TileJSON.js"));

var _source7 = __webpack_require__(/*! ol/source */ "./node_modules/ol/source.js");

var _VectorTile = _interopRequireDefault(__webpack_require__(/*! ol/source/VectorTile */ "./node_modules/ol/source/VectorTile.js"));

var _layer = __webpack_require__(/*! ol/layer */ "./node_modules/ol/layer.js");

var _Collection = _interopRequireDefault(__webpack_require__(/*! ol/Collection */ "./node_modules/ol/Collection.js"));

var _OLCesium = _interopRequireDefault(__webpack_require__(/*! ol-cesium/src/olcs/OLCesium.js */ "./node_modules/ol-cesium/src/olcs/OLCesium.js"));

var _olMapboxStyle = __webpack_require__(/*! ol-mapbox-style */ "./node_modules/ol-mapbox-style/dist/index.js");

var _VectorTile2 = _interopRequireDefault(__webpack_require__(/*! ol/layer/VectorTile */ "./node_modules/ol/layer/VectorTile.js"));

var _GeoImage = _interopRequireDefault(__webpack_require__(/*! ol-ext/source/GeoImage */ "./node_modules/ol-ext/source/GeoImage.js"));

var _Projection = _interopRequireDefault(__webpack_require__(/*! ol/proj/Projection */ "./node_modules/ol/proj/Projection.js"));

/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
//copy link to add noopener
var OSM_REL_ATTRIBUTION = '&#169; ' + '<a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> ' + 'contributors.';
exports.OSM_REL_ATTRIBUTION = OSM_REL_ATTRIBUTION;

var C4gBaselayerController = /*#__PURE__*/function () {
  function C4gBaselayerController(proxy) {
    (0, _classCallCheck2["default"])(this, C4gBaselayerController);
    this.proxy = proxy;
    this.mapController = proxy.options.mapController;
    this.arrBaselayers = {};
    this.baselayerIds = [];
    this.baseKeys = this.mapController.data.base_keys;
  }

  (0, _createClass2["default"])(C4gBaselayerController, [{
    key: "loadBaseLayers",
    value: function loadBaseLayers() {
      var self;
      self = this;
      jQuery.ajax(this.proxy.api_baselayer_url, {
        dataType: this.mapController.data.jsonp ? "jsonp" : "json"
      }).done(function (data) {
        if (data.baselayer) {
          self.addBaseLayers(data.baselayer);

          _c4gMapsUtils.utils.callHookFunctions(window.c4gMapsHooks.proxy_baselayer_loaded);
        }

        return true;
      }).fail(function () {
        // @TODO error-messages
        //   1) Visible message 4 users (i18n)
        //   2) Technical console.warn
        console.warn('An error occured while trying to load the baselayers. Do you have configured a default profile with baselayers?');
        self.mapController.spinner.hide();
        return false;
      }).always(function () {//self.mapController.spinner.hide();
      });
    } // end of "loadBaseLayers()"

  }, {
    key: "addBaseLayers",
    value: function addBaseLayers(baselayers) {
      var baselayer, uid, i, j; // build baselayer-list

      if (baselayers.length > 0) {
        for (i = 0; i < baselayers.length; i += 1) {
          baselayer = baselayers[i];
          uid = baselayer.id || _c4gMapsUtils.utils.getUniqueId();
          this.baselayerIds.push(uid);

          if (!this.arrBaselayers[uid]) {
            this.arrBaselayers[uid] = new _c4gBaselayer.C4gBaselayer(baselayer, this);
          } // @TODO: check initial baselayer-handling


          if (this.mapController.data.baselayer && parseInt(uid, 10) === parseInt(this.mapController.data.baselayer, 10)) {
            // check default from content/module (overrides profile settings)
            this.showBaseLayer(uid);
          } else if (this.mapController.data.default_baselayer && parseInt(uid, 10) === parseInt(this.mapController.data.default_baselayer, 10)) {
            // check default from profile
            this.showBaseLayer(uid);
          }
        }
      }

      if (!this.proxy.activeBaselayerId) {
        // no baselayer was activated
        if (baselayers.length > 0 && baselayers[0].id) {
          // take first baselayer if possible
          uid = baselayers[0].id;
        } else {
          // otherwise build default baselayer
          uid = 0;
          this.baselayerIds.push(uid);

          if (!this.arrBaselayers[uid]) {
            this.arrBaselayers[uid] = {
              id: 0,
              name: 'c4g_default',
              provider: 'osm',
              style: 'Mapnik'
            };
          }
        }

        this.showBaseLayer(uid);
      }

      this.proxy.baselayers_loaded = true;

      _c4gMapsUtils.utils.callHookFunctions(this.proxy.hook_baselayer_loaded, this.baselayerIds);
    } // end of "addBaseLayers()"

  }, {
    key: "createBaseLayer",
    value: function createBaseLayer(layerOptions, baseLayerConfig, sourceConfigs) {
      var newBaselayer = {};
      layerOptions = layerOptions || {};

      if (window.isSecureContext) {
        layerOptions.crossOrigin = 'anonymous';
      }

      var cookie = 1;
      var mapData = this.mapController.data;

      if (mapData.cookie) {
        cookie = 0;
        var arrCoookies = document.cookie.split(";");

        for (var i in arrCoookies) {
          if (arrCoookies.hasOwnProperty(i)) {
            if (arrCoookies[i].indexOf(mapData.cookie.name) > -1) {
              //the cookies exists
              if (!mapData.cookie.value || arrCoookies[i].indexOf(mapData.cookie.value) > -1) {
                //no value provided or matching value
                cookie = 2;
              }
            }
          }
        }
      }

      var dummyUrl = '../../../' + this.mapController.data.dummyBaselayer;
      var dummySource = null;

      if (dummyUrl) {
        dummySource = new _source7.XYZ({
          url: dummyUrl
        });
      }

      if (dummySource && cookie === 0) {
        newBaselayer = new _Tile["default"]();
        newBaselayer.setSource(dummySource);
      } else {
        switch (baseLayerConfig.provider) {
          case 'custom':
            // custom
            var noUrl = true;

            if (baseLayerConfig.url) {
              layerOptions.url = baseLayerConfig.url;
              noUrl = false;
            } else if (baseLayerConfig.urls) {
              layerOptions.urls = baseLayerConfig.urls;
              noUrl = false;
            }

            if (!noUrl) {
              newBaselayer = new _Tile["default"]({
                source: new _source7.XYZ(layerOptions),
                extent: baseLayerConfig.extend
              });
            } else {
              console.warn('custom url(s) missing -> switch to default');
            }

            break;

          case 'osm':
            if (sourceConfigs.osm[baseLayerConfig.style]) {
              newBaselayer = new _Tile["default"]({
                source: new _source7.OSM(jQuery.extend(sourceConfigs.osm[baseLayerConfig.style], layerOptions))
              });
            } else if (baseLayerConfig.style === 'osm_custom') {
              // custom
              var _noUrl = true;

              if (baseLayerConfig.url) {
                layerOptions.url = baseLayerConfig.url;
                _noUrl = false;
              } else if (baseLayerConfig.urls) {
                layerOptions.urls = baseLayerConfig.urls;
                _noUrl = false;
              }

              if (!_noUrl) {
                newBaselayer = new _Tile["default"]({
                  source: new _source7.XYZ(layerOptions)
                });
              } else {
                console.warn('custom url(s) missing -> switch to default');
              }
            } else {
              console.warn('unsupported osm-style -> switch to default');
            }

            break;

          case 'stamen':
            if (sourceConfigs.stamen[baseLayerConfig.style]) {
              // Stamen
              var source1, source2;

              if (baseLayerConfig.style === 'Watercolor') {
                newBaselayer = new _layer.Group({
                  layers: [new _Tile["default"](), new _Tile["default"]()]
                });
                source1 = new _source7.Stamen({
                  layer: 'watercolor'
                });
                source2 = new _source7.Stamen({
                  layer: 'terrain-labels'
                });
              } else {
                newBaselayer = new _Tile["default"]();
                source1 = new _source7.Stamen(jQuery.extend(sourceConfigs.stamen[baseLayerConfig.style]));
              }

              if (newBaselayer instanceof _layer.Group) {
                var array = newBaselayer.getLayers().getArray();
                array[0].setSource(source1);
                array[1].setSource(source2);
              } else {
                newBaselayer.setSource(source1);
              }
            } else {
              console.warn('unsupported osm-style -> switch to default');
            }

            break;

          case 'con4gisIo':
            var _config = this.baseKeys[baseLayerConfig.id];
            layerOptions.url = baseLayerConfig.url.replace('{key}', _config['key']);
            layerOptions.attributions = _config.attribution + ' ' + layerOptions.attributions;
            var source = new _source7.XYZ(layerOptions);
            newBaselayer = new _Tile["default"]();
            newBaselayer.setSource(source);
            break;

          case 'mapbox':
            if (baseLayerConfig.api_key && baseLayerConfig.app_id && baseLayerConfig.mapbox_type) {
              var _source;

              newBaselayer = new _Tile["default"]();

              if (baseLayerConfig.mapbox_type === 'Mapbox') {
                layerOptions.url = baseLayerConfig.url + baseLayerConfig.app_id + '/tiles/{z}/{x}/{y}?access_token=' + baseLayerConfig.api_key;
                _source = new _source7.XYZ(jQuery.extend(sourceConfigs.mapbox[baseLayerConfig.mapbox_type], layerOptions));
              } else {
                layerOptions.url = baseLayerConfig.url_classic + baseLayerConfig.app_id + '/{z}/{x}/{y}.png?access_token=' + baseLayerConfig.api_key;
                _source = new _source7.XYZ(jQuery.extend(sourceConfigs.mapbox[baseLayerConfig.mapbox_type], layerOptions));
              }

              newBaselayer.setSource(_source);
            } else if (baseLayerConfig.hide_in_be) {
              layerOptions.url = "con4gis/baseLayerTileService/" + baseLayerConfig.id + "/{z}/{x}/{y}";
              newBaselayer = new _Tile["default"]({
                source: new _source7.XYZ(jQuery.extend(sourceConfigs.mapbox[baseLayerConfig.mapbox_type], layerOptions))
              });
            } else {
              console.warn('wrong mapbox configuration!');
            }

            break;

          case 'mapz':
            newBaselayer = new _Tile["default"]();
            source = new _source7.XYZ(jQuery.extend(sourceConfigs.mapz, layerOptions));
            newBaselayer.setSource(source);
            break;

          case 'otm':
            newBaselayer = new _Tile["default"]();
            source = new _source7.XYZ(jQuery.extend(sourceConfigs.otm, layerOptions));
            newBaselayer.setSource(source);
            break;

          case 'klokan':
            if (baseLayerConfig.api_key && baseLayerConfig.klokan_type) {
              if (baseLayerConfig.url.charAt(baseLayerConfig.url.length - 1) != '/') {
                baseLayerConfig.url = baseLayerConfig.url + '/';
              }

              if (baseLayerConfig.klokan_type === 'OpenMapTiles') {
                layerOptions.url = baseLayerConfig.url + '{z}/{x}/{y}.pbf';
                newBaselayer = new _VectorTile2["default"]({
                  source: new _VectorTile["default"](jQuery.extend(sourceConfigs.klokan[baseLayerConfig.klokan_type], layerOptions))
                });
                fetch(baseLayerConfig.url + 'styles/' + baseLayerConfig.style + '.json').then(function (response) {
                  response.json().then(function (glStyle) {
                    (0, _olMapboxStyle.applyStyle)(newBaselayer, glStyle, 'openmaptiles');
                  });
                });
              } else {
                //layerOptions.url = baseLayerConfig.url + '{z}/{x}/{y}.pbf?key='+baseLayerConfig.api_key;
                newBaselayer = new _Tile["default"]();

                var _source2 = new _TileJSON["default"]({
                  url: baseLayerConfig.url + 'styles/' + baseLayerConfig.style + '.json?key=' + baseLayerConfig.api_key
                });

                newBaselayer.setSource(_source2); // newBaselayer = new VectorTileLayer({
                //   source: new VectorTileSource(jQuery.extend(
                //     sourceConfigs.klokan[baseLayerConfig.klokan_type],
                //     layerOptions))
                // });
                //
                // fetch(baseLayerConfig.url + baseLayerConfig.style+'/style.json?key='+baseLayerConfig.api_key).then(function(response) {
                //   response.json().then(function(glStyle) {
                //     applyStyle(newBaselayer, glStyle, 'openmaptiles');
                //   });
                // });
              }
            } else {
              console.warn('wrong klokan configuration!');
            }

            break;

          case 'here':
            if (baseLayerConfig.api_key && baseLayerConfig.app_id && baseLayerConfig.here_type) {
              if (baseLayerConfig.style === 'normal') {
                layerOptions.url = 'https://{1-4}.base.maps.cit.api.here.com/maptile/2.1/maptile/newest/normal.day/{z}/{x}/{y}/256/png' + '?app_id=' + baseLayerConfig.app_id + '&app_code=' + baseLayerConfig.api_key;
              } else if (baseLayerConfig.style === 'transit') {
                layerOptions.url = 'https://{1-4}.base.maps.cit.api.here.com/maptile/2.1/maptile/newest/normal.day.transit/{z}/{x}/{y}/256/png' + '?app_id=' + baseLayerConfig.app_id + '&app_code=' + baseLayerConfig.api_key;
              } else if (baseLayerConfig.style === 'pedestrian') {
                layerOptions.url = 'https://{1-4}.base.maps.cit.api.here.com/maptile/2.1/maptile/newest/pedestrian.day/{z}/{x}/{y}/256/png' + '?app_id=' + baseLayerConfig.app_id + '&app_code=' + baseLayerConfig.api_key;
              } else if (baseLayerConfig.style === 'terrain') {
                layerOptions.url = 'https://{1-4}.aerial.maps.cit.api.here.com/maptile/2.1/maptile/newest/terrain.day/{z}/{x}/{y}/256/png' + '?app_id=' + baseLayerConfig.app_id + '&app_code=' + baseLayerConfig.api_key;
              } else if (baseLayerConfig.style === 'satellite') {
                layerOptions.url = 'https://{1-4}.aerial.maps.cit.api.here.com/maptile/2.1/maptile/newest/satellite.day/{z}/{x}/{y}/256/png' + '?app_id=' + baseLayerConfig.app_id + '&app_code=' + baseLayerConfig.api_key;
              } else if (baseLayerConfig.style === 'hybrid') {
                layerOptions.url = 'https://{1-4}.aerial.maps.cit.api.here.com/maptile/2.1/maptile/newest/hybrid.day/{z}/{x}/{y}/256/png' + '?app_id=' + baseLayerConfig.app_id + '&app_code=' + baseLayerConfig.api_key;
              }

              var _source3 = new _source7.XYZ(jQuery.extend(sourceConfigs.here[baseLayerConfig.here_type], layerOptions));

              newBaselayer = new _Tile["default"]({
                preload: Infinity
              });
              newBaselayer.setSource(_source3);
            } else if (baseLayerConfig.hide_in_be) {
              layerOptions.url = layerOptions.url = "con4gis/baseLayerTileService/" + baseLayerConfig.id + "/{z}/{x}/{y}";
              newBaselayer = new _Tile["default"]({
                source: new _source7.XYZ(jQuery.extend(sourceConfigs.mapbox[baseLayerConfig.here_type], layerOptions))
              });
            } else {
              console.warn('wrong HERE configuration!');
            }

            break;

          case 'thunder':
            if (baseLayerConfig.api_key && baseLayerConfig.thunderforest_type) {
              if (baseLayerConfig.style) {
                layerOptions.url = "https://tile.thunderforest.com/" + baseLayerConfig.style + "/{z}/{x}/{y}.png?apikey=" + baseLayerConfig.api_key;
              }

              newBaselayer = new _Tile["default"]();
              source = new _source7.XYZ(jQuery.extend(sourceConfigs.thunderforest[baseLayerConfig.thunderforest_type], layerOptions));
              newBaselayer.setSource(source);
            } else if (baseLayerConfig.hide_in_be) {
              layerOptions.url = "con4gis/baseLayerTileService/" + baseLayerConfig.id + "/{z}/{x}/{y}";
              newBaselayer = new _Tile["default"]({
                source: new _source7.XYZ(jQuery.extend(sourceConfigs.mapbox[baseLayerConfig.thunderforest_type], layerOptions))
              });
            } else {
              console.warn('wrong Thunderforest configuration!');
            }

            break;

          case 'google':
            //@todo
            console.warn('google-maps are currently unsupported');
            break;

          case 'bing':
            if (baseLayerConfig.api_key && baseLayerConfig.style) {
              newBaselayer = new _Tile["default"]();

              var _source4 = new _source7.BingMaps({
                culture: navigator.languages ? navigator.languages[0] : navigator.language || navigator.userLanguage,
                key: baseLayerConfig.api_key,
                imagerySet: baseLayerConfig.style
              });

              newBaselayer.setSource(_source4);
            } else {
              console.warn('wrong bing-key or invalid imagery-set!');
            }

            break;

          case 'wms':
            if (baseLayerConfig.url.indexOf('https') !== -1) {
              newBaselayer = new _Tile["default"]({
                source: new _source7.TileWMS({
                  url: baseLayerConfig.url,
                  params: {
                    LAYERS: baseLayerConfig.params.layers,
                    VERSION: baseLayerConfig.params.version,
                    //FORMAT: baseLayerConfig.params.format,
                    TRANSPARENT: baseLayerConfig.params.transparent
                  },
                  gutter: baseLayerConfig.gutter,
                  attributions: baseLayerConfig.attribution + ' ' + OSM_REL_ATTRIBUTION,
                  crossOrigin: 'anonymous'
                }) //extent: ol.proj.transformExtent([5.59334, 50.0578, 9.74158, 52.7998], 'EPSG:4326', 'EPSG:3857')

              });
            } else {
              newBaselayer = new _Tile["default"]({
                source: new _source7.TileWMS({
                  url: baseLayerConfig.url,
                  params: {
                    LAYERS: baseLayerConfig.params.layers,
                    VERSION: baseLayerConfig.params.version,
                    //FORMAT: baseLayerConfig.params.format,
                    TRANSPARENT: baseLayerConfig.params.transparent
                  },
                  gutter: baseLayerConfig.gutter,
                  attributions: baseLayerConfig.attribution + ' ' + OSM_REL_ATTRIBUTION
                }) //extent: ol.proj.transformExtent([5.59334, 50.0578, 9.74158, 52.7998], 'EPSG:4326', 'EPSG:3857')

              });
            }

            break;

          case 'image':
            var projection = new _Projection["default"]({
              code: 'image',
              units: 'pixels',
              extent: baseLayerConfig.extent ? baseLayerConfig.extent : [0, 0, 1920, 1080]
            });
            newBaselayer = new _layer.Image({
              source: new _source7.ImageStatic({
                url: baseLayerConfig.imageSrc,
                imageExtent: baseLayerConfig.extent ? baseLayerConfig.extent : [0, 0, 1920, 1080],
                projection: projection
              })
            }); // const self = this;
            // setTimeout(function(){
            //   self.mapController.map.getView().setCenter(ol.extent.getCenter(baseLayerConfig.extent ? baseLayerConfig.extent : [0, 0, 886, 435]));
            //   self.mapController.map.getView().setZoom(18);
            //   }, 3000);

            break;

          case 'geoimage':
            var arrSource = JSON.parse(baseLayerConfig.geoImageJson);
            arrSource.url = baseLayerConfig.imageSrc ? baseLayerConfig.imageSrc : arrSource.url;
            newBaselayer = new _layer.Image(jQuery.extend({
              source: new _GeoImage["default"](arrSource)
            }, layerOptions));
            break;

          case 'owm':
            newBaselayer = new _Tile["default"]({
              source: new _source7.XYZ({
                url: baseLayerConfig.url + baseLayerConfig.app_id + '/{z}/{x}/{y}?hash=' + baseLayerConfig.api_key,
                attributions: baseLayerConfig.attribution + ' ' + OSM_REL_ATTRIBUTION
              }) //extent: ol.proj.transformExtent([5.59334, 50.0578, 9.74158, 52.7998], 'EPSG:4326', 'EPSG:3857')

            });
            break;

          case 'group':
            var baseLayerGroup = [];

            for (var index in baseLayerConfig['layerGroup']) {
              if (baseLayerConfig['layerGroup'].hasOwnProperty(index)) {
                var element = this.createBaseLayer(null, baseLayerConfig['layerGroup'][index], sourceConfigs);
                var maxZoom = this.proxy.options.mapController.map.getView().getResolutionForZoom(baseLayerConfig['layerGroup'][index]['minZoom']);
                var minZoom = this.proxy.options.mapController.map.getView().getResolutionForZoom(baseLayerConfig['layerGroup'][index]['maxZoom']);
                element.setMinResolution(minZoom);
                element.setMaxResolution(maxZoom);
                baseLayerGroup.push(element);
              }
            }

            newBaselayer = new _layer.Group({
              layers: baseLayerGroup
            });
            break;

          default:
            console.warn('unsupported provider');
            break;
        }
      }

      if (baseLayerConfig['consentId']) {
        if (typeof klaro !== "undefined" && klaro.getManager && klaro.getManager()) {
          var manager = klaro.getManager();
          var watcher;

          if (newBaselayer instanceof _Tile["default"]) {
            var _source5 = newBaselayer.getSource();

            if (!manager.getConsent(baseLayerConfig['consentId'])) {
              newBaselayer.setSource(dummySource);
            }

            watcher = {
              update: function update(watcher, action, consentStatus) {
                if (consentStatus[baseLayerConfig['consentId']]) {
                  newBaselayer.setSource(_source5);
                } else {
                  newBaselayer.setSource(dummySource);
                }
              }
            };
          } else if (newBaselayer instanceof _layer.Group) {
            var layers = newBaselayer.getLayers();

            if (!manager.getConsent(baseLayerConfig['consentId'])) {
              newBaselayer.setLayers(new _Collection["default"]([new _Tile["default"]({
                source: dummySource
              })]));
            }

            watcher = {
              update: function update(watcher, action, consentStatus) {
                if (consentStatus[baseLayerConfig['consentId']]) {
                  newBaselayer.setLayers(layers);
                } else {
                  newBaselayer.setLayers(new _Collection["default"]([new _Tile["default"]({
                    source: dummySource
                  })]));
                }
              }
            };
          }

          manager.watch(watcher);
        } else if (typeof HofffConsentManager !== "undefined") {
          if (newBaselayer instanceof _Tile["default"]) {
            var _source6 = newBaselayer.getSource();

            HofffConsentManager.addEventListener('consent:accepted', function (event) {
              if (event.consentId == baseLayerConfig['consentId']) {
                newBaselayer.setSource(_source6);
              }
            });
            HofffConsentManager.addEventListener('consent:revoked', function (event) {
              if (event.consentId == baseLayerConfig['consentId']) {
                newBaselayer.setSource(dummySource);
              }
            });

            if (!HofffConsentManager.requiresConsent(baseLayerConfig['consentId'])) {
              newBaselayer.setSource(dummySource);
            }
          } else if (newBaselayer instanceof _layer.Group) {
            var _layers = newBaselayer.getLayers();

            HofffConsentManager.addEventListener('consent:accepted', function (event) {
              if (event.consentId == baseLayerConfig['consentId']) {
                newBaselayer.setLayers(_layers);
              }
            });
            HofffConsentManager.addEventListener('consent:revoked', function (event) {
              if (event.consentId == baseLayerConfig['consentId']) {
                newBaselayer.setLayers(new _Collection["default"]());
              }
            });

            if (!HofffConsentManager.requiresConsent(baseLayerConfig['consentId'])) {
              newBaselayer.setLayers(new _Collection["default"]());
            }
          }
        }
      }

      return newBaselayer;
    }
  }, {
    key: "filterLayersForBaselayer",
    value: function filterLayersForBaselayer(baselayerId) {
      var arrLayers = this.proxy.layerController.arrLayers;

      for (var id in arrLayers) {
        if (arrLayers.hasOwnProperty(id)) {
          var layer = arrLayers[id];

          if (layer) {
            var showLayer = false;

            if (layer.activeForBaselayers === "all" || layer.renderSpecial) {
              continue;
            } else {
              if (layer.activeForBaselayers) {
                showLayer = !!layer.activeForBaselayers.includes(baselayerId);
              }
            }

            if (showLayer) {
              arrLayers[id].display = true;
              this.proxy.layerController.showLayer(id);
            } else {
              arrLayers[id].display = false;
              this.proxy.layerController.hideLayer(id);
            }
          }
        }
      } // let starboard = this.proxy.options.mapController.controls.starboard;
      // if (this.proxy.options.mapController.data.layerswitcher.enable) {
      //   if (starboard && starboard.initialized) {
      //     if (!starboard.plugins.layerswitcher) {
      //       starboard.plugins.layerswitcher = new Layerswitcher(starboard);
      //     }
      //     starboard.plugins.layerswitcher.loadContent();
      //     // starboard.plugins.layerswitcher.activate();
      //   }
      // }

    }
  }, {
    key: "showBaseLayer",
    value: function showBaseLayer(baseLayerUid) {
      var self = this,
          layers,
          baselayer,
          addBaselayer,
          baseLayers,
          sourceConfigs = [],
          newBaselayer,
          layerOptions,
          i,
          view;
      var baseLayerConfig = this.arrBaselayers[baseLayerUid];

      if (this.proxy.layers_loaded) {
        this.filterLayersForBaselayer(baseLayerUid);
      } else {
        this.proxy.hook_layer_loaded.push(function () {
          self.filterLayersForBaselayer(baseLayerUid);
        });
      }

      if (typeof baseLayerConfig !== "undefined" && !baseLayerConfig.layer) {
        // create layer
        sourceConfigs.osm = _c4gMapsConfig.config.osm;
        sourceConfigs.stamen = _c4gMapsConfig.config.stamen;
        sourceConfigs.otm = _c4gMapsConfig.config.otm; //mapQuestSourceConfigs = c4g.maps.config.mapquest;

        sourceConfigs.mapbox = _c4gMapsConfig.config.mapbox;
        sourceConfigs.mapz = _c4gMapsConfig.config.mapz;
        sourceConfigs.klokan = _c4gMapsConfig.config.klokan;
        sourceConfigs.here = _c4gMapsConfig.config.here;
        sourceConfigs.thunderforest = _c4gMapsConfig.config.thunderforest; //newBaselayer = new TileLayer({
        //  source: new OSM()
        //});

        layerOptions = {};

        if (baseLayerConfig.attribution) {
          if (layerOptions.attributions) {
            layerOptions.attributions = layerOptions.attributions + ' ' + baseLayerConfig.attribution;
          } else {
            layerOptions.attributions = OSM_REL_ATTRIBUTION + ' ' + baseLayerConfig.attribution;
          }
        } else if (!layerOptions.attributions) {
          switch (baseLayerConfig.provider) {
            case 'osm':
              if (sourceConfigs.osm[baseLayerConfig.style]) {
                layerOptions.attributions = sourceConfigs.osm[baseLayerConfig.style].attributions;
              } else {
                layerOptions.attributions = OSM_REL_ATTRIBUTION;
              }

              break;

            case 'stamen':
              layerOptions.attributions = sourceConfigs.stamen[baseLayerConfig.style].attributions;
              break;

            case 'mapbox':
              layerOptions.attributions = sourceConfigs.mapbox[baseLayerConfig.mapbox_type].attributions;
              break;

            case 'mapz':
              layerOptions.url = baseLayerConfig.url;
              layerOptions.attributions = sourceConfigs.mapz.attributions;
              break;

            case 'otm':
              layerOptions.url = baseLayerConfig.url;
              layerOptions.attributions = sourceConfigs.otm.attributions;
              break;

            case 'klokan':
              layerOptions.attributions = sourceConfigs.klokan[baseLayerConfig.klokan_type].attributions;
              break;

            case 'here':
              layerOptions.attributions = sourceConfigs.here[baseLayerConfig.here_type].attributions;
              break;

            case 'thunder':
              layerOptions.attributions = sourceConfigs.thunderforest[baseLayerConfig.thunderforest_type].attributions;
              break;

            case 'con4gisIo':
              layerOptions.attributions = 'Mapservices via <a href="https://con4gis.io" target="_blank" rel="noopener">con4gis.io</a>. ' + OSM_REL_ATTRIBUTION;
              break;

            default:
              layerOptions.attributions = OSM_REL_ATTRIBUTION;
              break;
          }
        } //ToDo helper class for attributions
        //additional attribution


        if (this.mapController.data && this.mapController.data.attribution && this.mapController.data.attribution.additional) {
          if (layerOptions.attributions) {
            var additionalAttribution = this.mapController.data.attribution.additional;
            exists = false;

            for (i = 0; i < layerOptions.attributions.length; i += 1) {
              if (layerOptions.attributions[i] === additionalAttribution) {
                exists = true;
                break;
              }
            }

            if (!exists) {
              layerOptions.attributions = layerOptions.attributions + ' ' + additionalAttribution;
            }
          } else {
            layerOptions.attributions = this.mapController.data.attribution.additional;
          }
        } //ToDo type class for geosearch_engine
        //geosearch attribution


        if (this.mapController.data.geosearch) {
          if (this.mapController.data && this.mapController.data.attribution) {
            var geosearchAttribution = this.mapController.data.attribution.geosearch ? this.mapController.data.attribution.geosearch : "";
            var exists = false;

            if (!layerOptions.attributions) {
              layerOptions.attributions = [];
            }

            for (i = 0; i < layerOptions.attributions.length; i += 1) {
              if (layerOptions.attributions[i] === geosearchAttribution) {
                exists = true;
                break;
              }
            }

            if (!exists) {
              layerOptions.attributions = layerOptions.attributions + ' ' + geosearchAttribution;
            } else {
              layerOptions.attributions = geosearchAttribution;
            }

            var routerAttribution = this.mapController.data.attribution.router ? " - " + this.mapController.data.attribution.router : "";
            var exists = false;

            if (!layerOptions.attributions) {
              layerOptions.attributions = [];
            }

            for (i = 0; i < layerOptions.attributions.length; i += 1) {
              if (layerOptions.attributions[i] === routerAttribution) {
                exists = true;
                break;
              }
            }

            if (!exists) {
              layerOptions.attributions = layerOptions.attributions + ' ' + routerAttribution;
            } else {
              layerOptions.attributions = routerAttribution;
            }
          }
        }

        if (baseLayerConfig.sorting) {
          layerOptions.sort = baseLayerConfig.sorting;
        }

        if (baseLayerConfig.minZoom && baseLayerConfig.minZoom >= 0) {
          layerOptions.minZoom = baseLayerConfig.minZoom;
        }

        if (baseLayerConfig.maxZoom && baseLayerConfig.maxZoom >= 0) {
          layerOptions.maxZoom = baseLayerConfig.maxZoom;
        }

        newBaselayer = this.createBaseLayer(layerOptions, baseLayerConfig, sourceConfigs);

        if (baseLayerConfig.hasOverlays) {
          for (i = 0; i < baseLayerConfig.overlays.length; i++) {
            if (!baseLayerConfig.overlayController.arrOverlays[baseLayerConfig.overlays[i].id]) {
              baseLayerConfig.overlayController.arrOverlays[baseLayerConfig.overlays[i].id] = new _c4gOverlay.C4gOverlay(baseLayerConfig.overlays[i], this.mapController);
              baseLayerConfig.overlayController.arrOverlays[baseLayerConfig.overlays[i].id].layer = baseLayerConfig.overlayController.showOverlayLayer(baseLayerConfig.overlays[i].id);
            }
          }
        }

        this.arrBaselayers[baseLayerUid].layer = newBaselayer;
      } else if (typeof baseLayerConfig === "undefined") {
        console.log("config " + baseLayerUid + " not found");
        return;
      } // // deactivate old overlays


      if (this.proxy.activeBaselayerId && this.proxy.activeBaselayerId !== baseLayerUid) {
        var oldBaselayer = this.arrBaselayers[this.proxy.activeBaselayerId];

        if (oldBaselayer.overlayController && oldBaselayer.overlayController.arrOverlays && oldBaselayer.overlayController.arrOverlays.length > 0) {
          for (var key in oldBaselayer.overlayController.arrOverlays) {
            if (oldBaselayer.overlayController.arrOverlays.hasOwnProperty(key) && key !== "length") {
              var overlay = oldBaselayer.overlayController.arrOverlays[key];
              overlay.changeOpacity(0);
            }
          }
        }
      } // activate current overlays


      baselayer = this.arrBaselayers[baseLayerUid];

      if (baselayer.overlayController && baselayer.overlayController.arrOverlays && baselayer.overlayController.arrOverlays.length > 0) {
        for (var _key in baselayer.overlayController.arrOverlays) {
          if (baselayer.overlayController.arrOverlays.hasOwnProperty(_key) && _key !== "length") {
            var _overlay = baselayer.overlayController.arrOverlays[_key];

            _overlay.changeOpacity(_overlay.opacity);
          }
        }
      }

      layers = this.mapController.map.getLayers(); // secure

      if (layers.item(0).get('checkSum') === "baseMapsLayer") {
        baseLayers = layers.item(0).getLayers();

        if (typeof this.arrBaselayers[baseLayerUid] !== "undefined") {
          baselayer = this.arrBaselayers[baseLayerUid].layer;

          if (baselayer) {
            addBaselayer = true;
            baseLayers.forEach(function (element, index, array) {
              if (element && element === baselayer) {
                element.setVisible(true);
                addBaselayer = false;
              } else if (element) {
                element.setVisible(false);
              } else {
                addBaselayer = false;
              }
            }, this);

            if (addBaselayer) {
              baseLayers.push(baselayer);
            }
          }

          view = this.mapController.map.getView();
          var zoom = view.getZoom();
          var center = view.getCenter();

          if (baseLayerConfig.minZoom && baseLayerConfig.minZoom >= 0 || baseLayerConfig.maxZoom && baseLayerConfig.maxZoom >= 0) {
            if (baseLayerConfig.minZoom && view.getZoom() < baseLayerConfig.minZoom) {
              view.setZoom(baseLayerConfig.minZoom);
            } else if (baseLayerConfig.maxZoom && view.getZoom() > baseLayerConfig.maxZoom) {
              view.setZoom(baseLayerConfig.maxZoom);
            }

            var mapData = this.mapController.data; // if (mapData.zoomlevel || mapData.mouseposition) {

            view.setMinZoom(parseInt(baseLayerConfig.minZoom, 10) || 0);
            view.setMaxZoom(parseInt(baseLayerConfig.maxZoom, 10) || 19);
            this.mapController.map.setView(view); // }
          }
        }
      }

      if (typeof baseLayerConfig !== "undefined") {
        this.proxy.activeBaselayerId = baseLayerConfig.id;

        _c4gMapsUtils.utils.callHookFunctions(this.proxy.hook_baselayer_visibility, baseLayerConfig);
        /**
         * Cesium integration
         */


        if (typeof baseLayerConfig !== "undefined") {
          var mapData = this.mapController.data;

          if (mapData.cesium && mapData.cesium.enable && (mapData.cesium.always || baseLayerConfig.cesium)) {
            if (!this.ol3d) {
              this.ol3d = new _OLCesium["default"]({
                map: this.mapController.map,
                createSynchronizers: false
                /*,
                time() {
                const val = timeElt.value;
                if (ol3d.getCesiumScene().globe.enableLighting && val) {
                const d = new Date();
                d.setUTCHours(val);
                return Cesium.JulianDate.fromDate(d);
                }
                return Cesium.JulianDate.now();
                }*/

              });
            }
            /*const scene = ol3d.getCesiumScene();
            const terrainProvider = new Cesium.CesiumTerrainProvider({
                url: '//assets.agi.com/stk-terrain/world',
                requestVertexNormals: true
            });
            scene.terrainProvider = terrainProvider;*/


            this.ol3d.setEnabled(true);
            /*window['toggleTime'] = function() {
                scene.globe.enableLighting = !scene.globe.enableLighting;
                if (timeElt.style.display == 'none') {
                    timeElt.style.display = 'inline-block';
                } else {
                    timeElt.style.display = 'none';
                }
            };*/

            if (!jQuery(".c4g-control-container-top-left").hasClass("c4g-cesium-enabled")) {
              jQuery(".c4g-control-container-top-left").addClass("c4g-cesium-enabled");
            }
          } else {
            if (this.ol3d && this.ol3d.getEnabled()) {
              this.ol3d.setEnabled(false);
            }

            if (jQuery(".c4g-control-container-top-left").hasClass("c4g-cesium-enabled")) {
              jQuery(".c4g-control-container-top-left").removeClass("c4g-cesium-enabled");
            }
          }
        }
      }
    } // end of "showBaseLayer()"

  }]);
  return C4gBaselayerController;
}();

exports.C4gBaselayerController = C4gBaselayerController;

/***/ }),

/***/ "./Resources/public/js/c4g-baselayer.js":
/*!**********************************************!*\
  !*** ./Resources/public/js/c4g-baselayer.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.C4gBaselayer = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _c4gOverlayController = __webpack_require__(/*! ./c4g-overlay-controller */ "./Resources/public/js/c4g-overlay-controller.js");

/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
var C4gBaselayer = function C4gBaselayer(baselayerArr, controller) {
  (0, _classCallCheck2["default"])(this, C4gBaselayer);
  this.id = baselayerArr['id'];
  this.pid = baselayerArr['pid'];
  this.name = baselayerArr['name'];
  this.display_name = baselayerArr['display_name'];
  this.provider = baselayerArr['provider'];
  this.osm_style = baselayerArr['osm_style'];
  this.osm_style_url1 = baselayerArr['osm_style_url1'];
  this.osm_style_url2 = baselayerArr['osm_style_url2'];
  this.osm_style_url3 = baselayerArr['osm_style_url3'];
  this.osm_style_url4 = baselayerArr['osm_style_url4'];
  this.osm_keyname = baselayerArr['osm_keyname'];
  this.mapbox_type = baselayerArr['mapbox_type'];
  this.bing_style = baselayerArr['bing_style'];
  this.style = baselayerArr['style'];
  this.attribution = baselayerArr['attribution'];
  this.params = baselayerArr['params'];
  this.wms_gutter = baselayerArr['wms_gutter'];
  this.minZoom = baselayerArr['minZoom'];
  this.maxZoom = baselayerArr['maxZoom'];
  this.protect_baselayer = baselayerArr['protect_baselayer'];
  this.permitted_groups = baselayerArr['permitted_groups'];
  this.api_key = baselayerArr['apiKey'] ? baselayerArr['apiKey'] : baselayerArr['api_key'];
  this.app_id = baselayerArr['app_id'];
  this.thunderforest_type = baselayerArr['thunderforest_type'];
  this.here_type = baselayerArr['here_type'];
  this.cesium = baselayerArr['cesium'];
  this.hide_in_be = baselayerArr['hide_in_be'];
  this.url = baselayerArr['url'];
  this.urls = baselayerArr['urls'];
  this.klokan_type = baselayerArr['klokan_type'];
  this.style_url = baselayerArr['style_url'];
  this.hasOverlays = baselayerArr['hasOverlays'];
  this.overlays = baselayerArr['overlays'];
  this.imageSrc = baselayerArr['image_src'];
  this.geoImageJson = baselayerArr['geoimage_json'];
  this.preview_image = baselayerArr['preview_image'];

  if (baselayerArr['layerGroup']) {
    var layerGroup = [];

    for (var index in baselayerArr['layerGroup']) {
      if (baselayerArr['layerGroup'].hasOwnProperty(index)) {
        layerGroup[index] = new C4gBaselayer(baselayerArr['layerGroup'][index]['entry']);
        layerGroup[index]['minZoom'] = baselayerArr['layerGroup'][index]['minZoom'];
        layerGroup[index]['maxZoom'] = baselayerArr['layerGroup'][index]['maxZoom'];
      }
    }

    this.layerGroup = layerGroup;
  }

  this.consentId = baselayerArr['consentId'] ? baselayerArr['consentId'] : false;
  this.overlayController = new _c4gOverlayController.C4gOverlayController(this);
  this.layer = false;
  this.controller = controller;
};

exports.C4gBaselayer = C4gBaselayer;

/***/ }),

/***/ "./Resources/public/js/c4g-layer-controller.js":
/*!*****************************************************!*\
  !*** ./Resources/public/js/c4g-layer-controller.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof3 = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.BetterLayerController = void 0;

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _source = __webpack_require__(/*! ol/source */ "./node_modules/ol/source.js");

var _proj = __webpack_require__(/*! ol/proj */ "./node_modules/ol/proj.js");

var _OSMXML = _interopRequireDefault(__webpack_require__(/*! ol/format/OSMXML */ "./node_modules/ol/format/OSMXML.js"));

var _loadingstrategy = __webpack_require__(/*! ol/loadingstrategy */ "./node_modules/ol/loadingstrategy.js");

var _layer = __webpack_require__(/*! ol/layer */ "./node_modules/ol/layer.js");

var olFormats = _interopRequireWildcard(__webpack_require__(/*! ol/format */ "./node_modules/ol/format.js"));

var _proj2 = _interopRequireDefault(__webpack_require__(/*! proj4 */ "./node_modules/proj4/lib/index.js"));

var _proj3 = __webpack_require__(/*! ol/proj/proj4 */ "./node_modules/ol/proj/proj4.js");

var _Projection = _interopRequireDefault(__webpack_require__(/*! ol/proj/Projection */ "./node_modules/ol/proj/Projection.js"));

var _Collection = _interopRequireDefault(__webpack_require__(/*! ol/Collection */ "./node_modules/ol/Collection.js"));

var _c4gMapsUtils = __webpack_require__(/*! ./c4g-maps-utils */ "./Resources/public/js/c4g-maps-utils.js");

var _style = __webpack_require__(/*! ol/style */ "./node_modules/ol/style.js");

var _geom = __webpack_require__(/*! ol/geom */ "./node_modules/ol/geom.js");

var _Feature = _interopRequireDefault(__webpack_require__(/*! ol/Feature */ "./node_modules/ol/Feature.js"));

var olExtent = _interopRequireWildcard(__webpack_require__(/*! ol/extent */ "./node_modules/ol/extent.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
var osmtogeojson = __webpack_require__(/*! osmtogeojson */ "./node_modules/osmtogeojson/index.js");

var olFormat = jQuery.extend({
  OSMXML: _OSMXML["default"]
}, olFormats);

var BetterLayerController = /*#__PURE__*/function () {
  function BetterLayerController(proxy) {
    (0, _classCallCheck2["default"])(this, BetterLayerController);
    this.handleZoom = this.handleZoom.bind(this);
    var scope = this;
    this.proxy = proxy;
    this.loaders = [];
    this.controllers = {};
    this.arrLocstyles = [];
    this.objIds = {};
    this.currentZoomLevel = 0;
    this.extent = {
      maxX: -Infinity,
      maxY: -Infinity,
      minX: Infinity,
      minY: Infinity
    };
    this.mapController = proxy.options.mapController;
    this.vectorCollection = new _Collection["default"]();

    this.loaderFunction = function (extent, resolution, projection) {
      for (var i in scope.loaders) {
        if (scope.loaders.hasOwnProperty(i)) {
          (function () {
            var requestData = scope.loaders[i];

            if (!requestData.preventLoading) {
              if (!requestData.params && !requestData.url) {
                var responseFunc = function responseFunc(data) {
                  var features = [];
                  var layer = scope.objLayers.find(function (element) {
                    return element.id == requestData.layerId;
                  }) || {};

                  for (var _i = 0; _i < data.length; _i++) {
                    var contentData = data[_i];
                    var feature = scope.parseOwnData(contentData, layer);
                    features.push(feature);
                  }

                  scope.addFeatures(features, requestData.chain);
                  scope.mapController.setObjLayers(scope.arrLayers);
                };

                scope.performOwnData(requestData, {
                  "extent": extent,
                  "resolution": resolution,
                  "projection": projection
                }, responseFunc);
              } else {
                var layer = scope.objLayers.find(function (element) {
                  return element.id == requestData.layerId;
                }) || {};
                scope.performOvp({
                  "url": requestData.url,
                  "params": requestData.params,
                  "locstyleId": requestData.locstyle,
                  "chain": requestData.chain,
                  "layer": layer
                }, {
                  "extent": extent,
                  "resolution": resolution,
                  "projection": projection
                });
              }
            } else {
              requestData.arrExtents.push(extent);
            }
          })();
        }
      }
    };

    this.vectorSource = new _source.Vector({
      features: this.vectorCollection,
      loader: this.loaderFunction,
      strategy: _loadingstrategy.bbox
    });

    this.clusterStyleFunction = function (feature, resolution) {
      var size = false;
      var returnStyle = [];

      if (feature && feature.get && feature.get('features')) {
        var features = feature.get('features');
        size = features.length;
        feature = features[0];
      }

      if (feature && feature.getStyle()) {
        returnStyle = feature.getStyle();
      } else if (feature && feature.get && feature.get('locstyle')) {
        var _locstyle = feature.get('locstyle');

        if (scope.proxy.locationStyleController.arrLocStyles && scope.proxy.locationStyleController.arrLocStyles[_locstyle] && scope.proxy.locationStyleController.arrLocStyles[_locstyle].style) {
          var style = scope.proxy.locationStyleController.arrLocStyles[_locstyle].style;

          if (typeof style === "function") {
            returnStyle = style(feature, resolution, false);
          } else {
            returnStyle = scope.proxy.locationStyleController.arrLocStyles[_locstyle].style;
          }
        }
      }

      if (size > 1 && returnStyle && Array.isArray(returnStyle)) {
        var zIndex = 0;

        if (returnStyle[0] && returnStyle[0].setZIndex && feature.get('zindex')) {
          zIndex += feature.get('zindex');
        }

        if (returnStyle[0] && returnStyle[0].setZIndex) {
          var geometry = feature.getGeometry().clone().transform("EPSG:3857", "EPSG:4326").getCoordinates();
          zIndex += 100 - geometry[1];
          returnStyle[0].setZIndex(zIndex);
        }

        var iconOffset = [0, 0];
        var scale = 1;

        if (returnStyle[0]) {
          if (returnStyle[0].getImage() && returnStyle[0].getImage().getRadius && typeof returnStyle[0].getImage().getRadius === "function") {
            var radius = parseInt(returnStyle[0].getImage().getRadius(), 10);

            if (radius) {
              iconOffset = [-radius, radius];
            }
          } else if (returnStyle[0].getImage() && returnStyle[0].getImage().getAnchor && typeof returnStyle[0].getImage().getAnchor === "function") {
            iconOffset = returnStyle[0].getImage().getAnchor() || [0, 0];
          }

          if (returnStyle[0].getImage() && returnStyle[0].getImage().getScale() && returnStyle[0].getImage().getScale() !== 1) {
            scale = returnStyle[0].getImage().getScale();
            iconOffset = [iconOffset[0] * scale, iconOffset[1] * scale];
          }

          if (scope.proxy.mapData.cluster_fillcolor) {
            var countFeatures = scope.vectorCollection.getLength();
            var scaleForCount = (size / countFeatures - 1 / countFeatures) * 2;
            scale += scaleForCount;
          }
        }

        var fillcolor = _c4gMapsUtils.utils.getRgbaFromHexAndOpacity(scope.proxy.mapData.cluster_fillcolor, {
          unit: '%',
          value: 70
        });

        var fontcolor = scope.proxy.mapData.cluster_fontcolor;

        if (feature.get('cluster_fillcolor')) {
          fillcolor = _c4gMapsUtils.utils.getRgbaFromHexAndOpacity(feature.get('cluster_fillcolor'), {
            unit: '%',
            value: 70
          });
        }

        if (feature.get('cluster_fontcolor')) {
          fontcolor = feature.get('cluster_fontcolor');
        }

        fontcolor = _c4gMapsUtils.utils.getRgbaFromHexAndOpacity(fontcolor);
        returnStyle.push(new _style.Style({
          text: new _style.Text({
            text: "●",
            font: "60px sans-serif",
            offsetX: -1 * iconOffset[0],
            offsetY: -1 * iconOffset[1],
            scale: scale,
            fill: new _style.Fill({
              color: fillcolor
            })
          }),
          zIndex: zIndex
        }));
        returnStyle.push(new _style.Style({
          text: new _style.Text({
            text: size.toString(),
            offsetX: -1 * iconOffset[0],
            offsetY: -1 * iconOffset[1] + 3,
            scale: scale,
            fill: new _style.Fill({
              color: fontcolor
            })
          }),
          zIndex: zIndex
        }));

        if (feature && feature.get("markLocstyle")) {
          var color = "#" + scope.proxy.mapData.starboard.colorZoomMarker;
          var markFill = new _style.Fill({
            color: color
          });

          var _radius;

          if (returnStyle[0].getImage() && returnStyle[0].getImage().getRadius && returnStyle[0].getImage().getRadius()) {
            _radius = parseInt(returnStyle[0].getImage().getRadius());
          } else if (returnStyle[0].getImage() && returnStyle[0].getImage().getIcon && returnStyle[0].getImage() && returnStyle[0].getImage().getIcon()) {
            _radius = returnStyle[0].getImage().getIcon().getSize();
            _radius = _radius[0];
          } else {
            _radius = 25;
          }

          var markStyle = new _style.Style({
            image: new _style.Circle({
              fill: markFill,
              radius: _radius
            }),
            fill: markFill
          });
          returnStyle.push(markStyle);
        }
      } else if (returnStyle && Array.isArray(returnStyle)) {
        var _zIndex = 0;

        if (returnStyle[0] && returnStyle[0].setZIndex && feature.get('zindex')) {
          _zIndex += feature.get('zindex');
        }

        if (returnStyle[0] && returnStyle[0].setZIndex) {
          var _geometry = feature.getGeometry().clone().transform("EPSG:3857", "EPSG:4326").getCoordinates();

          _geometry = typeof _geometry[0] == "number" ? _geometry : _geometry[0];
          _geometry = typeof _geometry[0] == "number" ? _geometry : _geometry[0];
          _zIndex += 100 - _geometry[1];
          returnStyle[0].setZIndex(_zIndex);
        }

        if (feature && feature.get("markLocstyle")) {
          var _color = "#" + scope.proxy.mapData.starboard.colorZoomMarker;

          var _markFill = new _style.Fill({
            color: _color
          });

          var _radius2;

          if (returnStyle[0].getImage() && returnStyle[0].getImage().getRadius && returnStyle[0].getImage().getRadius()) {
            _radius2 = parseInt(returnStyle[0].getImage().getRadius());
          } else if (returnStyle[0].getImage() && returnStyle[0].getImage().getIcon && returnStyle[0].getImage() && returnStyle[0].getImage().getIcon()) {
            _radius2 = returnStyle[0].getImage().getIcon().getSize();
            _radius2 = _radius2[0];
          } else {
            _radius2 = 25;
          }

          var _markStyle = new _style.Style({
            image: new _style.Circle({
              fill: _markFill,
              radius: _radius2
            }),
            fill: _markFill
          });

          returnStyle.push(_markStyle);
        }
      }

      return returnStyle;
    };

    if (this.mapController.data.cluster_all) {
      this.vectorSource = new _source.Cluster({
        source: this.vectorSource,
        geometryFunction: this.geometryFunction,
        distance: this.mapController.data.cluster_distance
      });
    }

    this.vectorLayer = new _layer.Vector({
      source: this.vectorSource,
      style: this.clusterStyleFunction
    });
    this.layerRequests = {};
    this.ovpKey = this.mapController.data.ovp_key;
    window.c4gMapsHooks.hook_map_zoom = window.c4gMapsHooks.hook_map_zoom || [];
    window.c4gMapsHooks.hook_map_zoom.push(this.handleZoom);
  }

  (0, _createClass2["default"])(BetterLayerController, [{
    key: "hide",
    value: function hide(id, hideElement, layerId) {
      var features, vectorLayer;

      if (Array.isArray(hideElement)) {
        features = hideElement;
      } else if (hideElement instanceof _layer.Vector) {
        vectorLayer = hideElement;
      } else {
        features = this.objIds[layerId];
      }

      if (features) {
        if (id >= 0) {
          var loader = this.loaders[id];

          if (loader) {
            this.loaders[id].preventLoading = true;

            if (loader.request) {
              loader.request.abort();
            }
          }
        }

        if (features.length > 0) {
          for (var featureId in features) {
            if (features.hasOwnProperty(featureId)) {
              this.vectorCollection.remove(features[featureId]);
            }
          }
        }
      } else if (vectorLayer) {
        this.mapController.map.removeLayer(vectorLayer);
      }
    }
  }, {
    key: "show",
    value: function show(id, hideElement, layerId) {
      var features, vectorLayer;

      if (Array.isArray(hideElement)) {
        features = hideElement;
        this.currentZoomLevel++;

        for (var i in features) {
          if (features.hasOwnProperty(i)) {
            if (this.mapController.filter) {
              features[i].set('zindex', this.currentZoomLevel);

              if (!!parseFloat(this.mapController.data.filterHandling)) {
                this.mapController.filter.hideFeatureMulti(features[i]);
              } else {
                this.mapController.filter.hideFeature(features[i]);
              }
            }
          }
        }
      } else if (hideElement instanceof _layer.Vector) {
        vectorLayer = hideElement;

        if (this.mapController.filter) {
          if (!!parseFloat(this.mapController.data.filterHandling)) {
            this.mapController.filter.filterLayerMulti(vectorLayer);
          } else {
            this.mapController.filter.filterLayer(vectorLayer);
          }
        }
      } else {
        features = this.objIds[layerId];
      }

      if (id >= 0 && this.loaders[id] && this.loaders[id].preventLoading) {
        this.loaders[id].preventLoading = false;

        for (var extentId in this.loaders[id].arrExtents) {
          if (this.loaders[id].arrExtents.hasOwnProperty(extentId) && this.vectorSource) {
            var extent = this.loaders[id].arrExtents[extentId];
            this.vectorSource.removeLoadedExtent(extent);
          }
        }

        this.loaders[id].arrExtents = [];
      }

      if (features) {
        this.vectorCollection.extend(features);
      } else if (vectorLayer) {
        this.mapController.map.addLayer(vectorLayer);
      }
    }
  }, {
    key: "zoomTo",
    value: function zoomTo(layer) {
      var extent;

      if (layer.childs && layer.childs.length) {
        for (var i in layer.childs) {
          if (layer.childs.hasOwnProperty(i)) {
            extent = this.getChildsExtent(extent, layer.childs[i]);
          }
        }
      }

      if (!layer.features || !layer.features.length) {
        extent = this.getExtentForLayer(extent, layer.id);
      } else {
        for (var _i2 in layer.features) {
          if (layer.features.hasOwnProperty(_i2)) {
            if (!extent) {
              extent = layer.features[_i2].getGeometry().clone().getExtent();
            } else {
              extent = olExtent.extend(extent, layer.features[_i2].getGeometry().clone().getExtent());
            }
          }
        }
      }

      if (!extent) {
        return;
      }

      var width = jQuery(".c4g-starboard-container").css('width');

      if (width) {
        width = width.split(".");
        width = Array.isArray(width) ? width[0] : width;
        width = parseInt(width) + 50;
      } else {
        width = 50;
      }

      var maxZoom = parseInt(this.proxy.mapData.starboard.maxZoom) || 22;
      this.mapController.map.getView().fit(extent, {
        padding: [50, width, 50, 50],
        duration: 500,
        maxZoom: maxZoom
      });
    }
  }, {
    key: "getChildsExtent",
    value: function getChildsExtent(extent, child) {
      if (child.childs && child.childs.length) {
        for (var i in child.childs) {
          if (child.childs.hasOwnProperty(i)) {
            extent = this.getChildsExtent(extent, child.childs[i]);
          }
        }
      }

      if (child.features && child.features.length) {
        for (var _i3 in child.features) {
          if (child.features.hasOwnProperty(_i3)) {
            if (!extent) {
              extent = child.features[_i3].getGeometry().clone().getExtent();
            } else {
              extent = olExtent.extend(extent, child.features[_i3].getGeometry().clone().getExtent());
            }
          }
        }
      } else {
        extent = this.getExtentForLayer(extent, child.id);
      }

      return extent;
    }
  }, {
    key: "getExtentForLayer",
    value: function getExtentForLayer(extent, layerId) {
      var features = this.objIds[layerId];

      if (features && features.length) {
        for (var i in features) {
          if (features.hasOwnProperty(i)) {
            if (!extent) {
              extent = features[i].getGeometry().getExtent();
            } else {
              extent = olExtent.extend(extent, features[i].getGeometry().getExtent());
            }
          }
        }
      }

      return extent;
    }
  }, {
    key: "setChildFeatureFlag",
    value: function setChildFeatureFlag(child, flag, value) {
      if (child.childs && child.childs.length) {
        for (var i in child.childs) {
          if (child.childs.hasOwnProperty(i)) {
            this.setChildFeatureFlag(child.childs[i], flag, value);
          }
        }
      }

      if (child.features && child.features.length) {
        for (var _i4 in child.features) {
          if (child.features.hasOwnProperty(_i4)) {
            child.features[_i4].set(flag, value);
          }
        }
      }
    }
  }, {
    key: "loadLayers",
    value: function loadLayers() {
      var self = this;

      if (this.proxy.mapId === 0) {
        window.setTimeout(function () {
          self.mapController.setLayersInitial([], []);
        }, 50);
        return false;
      }

      jQuery.ajax(this.proxy.api_layer_url, {
        dataType: this.mapController.data.jsonp ? "jsonp" : "json"
      }).done(function (data) {
        _c4gMapsUtils.utils.callHookFunctions(window.c4gMapsHooks.hook_layer, data);

        self.objLayers = data.layer;
        var structure = [];
        var features = [];
        var tabStructures = [];

        for (var layerId in data.layer) {
          if (data.layer.hasOwnProperty(layerId)) {
            if (data.layer[layerId].type === "startab") {
              var newTab = [self.getStructureFromLayer(data.layer[layerId], tabStructures.length)];
              newTab.awesomeIcon = data.layer[layerId].awesomeicon;
              tabStructures.push(newTab);
            } else {
              var newChild = self.getStructureFromLayer(data.layer[layerId], structure.length);

              if (newChild.hide_in_starboard) {
                structure = newChild.childs ? structure.concat(newChild.childs) : structure;
                features = newChild.features ? features.concat(newChild.features) : features;
              } else {
                structure.push(newChild);
              }
            }
          }
        }

        var arrStates = [];

        for (var structId in structure) {
          if (structure.hasOwnProperty(structId)) {
            arrStates.push(self.getInitialStates(structure[structId]));

            if (features) {
              features = features.concat(self.getFeaturesFromStruct(structure[structId]));
            }
          }
        }

        var tabStates = [];

        for (var _structId in tabStructures) {
          if (tabStructures.hasOwnProperty(_structId)) {
            tabStates.push(self.getInitialStates(tabStructures[_structId][0]));
          }
        }

        self.arrLayers = structure;
        self.proxy.locationStyleController.loadLocationStyles(self.arrLocstyles, {
          "done": function done(styleData) {
            self.mapController.setLocStyles(styleData);
            window.setTimeout(function () {
              var getZoom = self.mapController.map.getView().getZoom();
              self.mapController.map.getView().setZoom(getZoom + 0.265); // self.mapController.map.getView().setZoom(getZoom);
            }, 200);
            window.setTimeout(function () {
              var getZoom = self.mapController.map.getView().getZoom();
              self.mapController.map.getView().setZoom(getZoom - 0.265);
            }, 201);
          }
        });
        self.vectorCollection.extend(features);
        self.mapController.map.addLayer(self.vectorLayer);
        self.mapController.setLayersInitial(self.arrLayers, arrStates);
        self.mapController.setTabLayers(tabStructures, tabStates);

        if (self.proxy.mapData.calc_extent === "LOCATIONS" || self.proxy.mapData.calc_extent === "CENTERLOCS") {
          if (self.extent && !(self.extent.maxX === Infinity || self.extent.maxX === -Infinity)) {
            var view = self.mapController.map.getView();
            var padding = [parseInt(self.mapController.props.mapData.min_gap, 10), parseInt(self.mapController.props.mapData.min_gap, 10), parseInt(self.mapController.props.mapData.min_gap, 10), parseInt(self.mapController.props.mapData.min_gap, 10)];
            var extent = [self.extent.minX, self.extent.minY, self.extent.maxX, self.extent.maxY];

            if (self.proxy.mapData.calc_extent === "CENTERLOCS") {
              // ssss
              view.fit(extent, {
                maxZoom: self.mapController.data.center.zoom
              });
            } else {
              view.fit(extent, {
                padding: padding
              });
            }
          }
        }

        _c4gMapsUtils.utils.callHookFunctions(window.c4gMapsHooks.layer_loaded, self);

        return true;
      }).fail(function () {
        console.warn('An error occured while trying to load the layers...');
        return false;
      }).always(function () {// this.proxy.starboard.spinner.hide();
      });
    } // end of "loadLayer()"

  }, {
    key: "getInitialStates",
    value: function getInitialStates(layer) {
      var childStates = [];

      if (layer.childs && layer.childs.length > 0) {
        for (var childId in layer.childs) {
          if (layer.childs.hasOwnProperty(childId)) {
            childStates.push(this.getInitialStates(layer.childs[childId]));
          }
        }
      }

      var zoom = this.mapController.map.getView().getZoom();
      return {
        active: !layer.hide,
        collapsed: !parseFloat(layer.initial_opened),
        greyed: layer.zoom && !this.compareZoom(layer.zoom),
        id: layer.id,
        childStates: childStates
      };
    }
  }, {
    key: "getFeaturesFromStruct",
    value: function getFeaturesFromStruct(structure) {
      var features = [];
      var zoom = this.mapController.map.getView().getZoom();
      var greyed = structure.zoom && !this.compareZoom(structure.zoom);

      if (structure.childs && structure.childs.length > 0) {
        for (var structId in structure.childs) {
          if (structure.childs.hasOwnProperty(structId)) {
            features = features.concat(this.getFeaturesFromStruct(structure.childs[structId]));
          }
        }
      }

      if (structure.features && !greyed && !structure.hide) {
        features = features.concat(structure.features);
      }

      return features;
    }
  }, {
    key: "getStructureFromLayer",
    value: function getStructureFromLayer(layer, idChain) {
      var scope = this;
      var features = [];
      var childs = [];
      var hide = !!layer.hide;

      if (scope.mapController.data.layers && scope.mapController.data.layers.length > 0) {
        //hide or show according to permalink - overwrites layerService
        if (scope.mapController.data.layers.indexOf(layer.id) > -1) {
          //in permalink
          hide = false;
        } else {
          //not in permalink
          hide = true;
        }
      }

      if (layer.activeForBaselayers && layer.activeForBaselayers !== "all") {
        //initial handling for activate with baselayer
        var found = layer.activeForBaselayers.includes(scope.mapController.proxy.activeBaselayerId || scope.mapController.data.default_baselayer);
        hide = !found;
      }

      var vectorLayer = false;
      var loaderId = -1;
      var possibleLocstyle = layer.locstyle;

      if (layer.content && layer.content.length > 0) {
        features = this.getFeaturesForLayer(layer);
        possibleLocstyle = layer.locstyle || layer.content[0].locationStyle;
      }

      var checkLocstyle = this.arrLocstyles.findIndex(function (element) {
        return element === possibleLocstyle;
      });

      if (checkLocstyle === -1 && possibleLocstyle) {
        this.arrLocstyles.push(possibleLocstyle);
      }

      if (layer.async_content && layer.async_content != 0 && !layer.excludeFromSingleLayer) {
        var url = "";
        var locstyleId = 0;
        var params = "";
        var hoverLocation;
        var hoverStyle;
        var popup = false;
        var forceNodes = false;
        var showAddGeoms = false;
        var layerId = layer.id;

        if (layer.content && layer.content[0] && layer.content[0].data) {
          var data = layer.content[0].data;
          url = data.url;
          popup = data.popup;
          hoverLocation = data.hover_location;
          hoverStyle = data.hover_style;
          params = data.params;
          locstyleId = layer.locstyle;
        }

        if (layer.content && layer.content[0] && layer.content[0].settings) {
          forceNodes = layer.content[0].settings.forceNodes;
          showAddGeoms = !!layer.content[0].settings.showAdditionalGeometries;
        }

        checkLocstyle = this.arrLocstyles.findIndex(function (element) {
          return element === locstyleId;
        });

        if (checkLocstyle === -1 && locstyleId) {
          this.arrLocstyles.push(locstyleId);
        }

        loaderId = this.loaders.length;
        this.loaders.push({
          chain: idChain,
          url: url,
          preventLoading: hide,
          forceNodes: forceNodes,
          arrExtents: [],
          popup: popup,
          showAddGeoms: showAddGeoms,
          locstyleId: locstyleId,
          hover_location: hoverLocation,
          hover_style: hoverStyle,
          params: params,
          layerId: layerId
        });
      }

      if (layer.childs && layer.childs.length > 0) {
        for (var _layerId in layer.childs) {
          if (layer.childs.hasOwnProperty(_layerId)) {
            var childChain = idChain + "," + childs.length;
            var newChild = this.getStructureFromLayer(layer.childs[_layerId], childChain);

            if (newChild.hide_in_starboard) {
              childs = newChild.childs ? childs.concat(newChild.childs) : childs;
              features = newChild.features ? features.concat(newChild.features) : features;

              if (this.mapController.filter) {
                if (!!parseFloat(this.mapController.data.filterHandling)) {
                  this.mapController.filter.filterLayerMulti(vectorLayer);
                } else {
                  this.mapController.filter.filterLayer(vectorLayer);
                }
              }
            } else {
              childs.push(newChild);
            }
          }
        }
      } else if (layer.split_geojson) {
        var nameField = layer.geojson_attributes.split(',')[0];
        var zoomTo = !!layer.geojson_zoom;

        for (var featureId in features) {
          if (features.hasOwnProperty(featureId)) {
            childs.push({
              "features": [features[featureId]],
              "vectorLayer": false,
              "zoom": layer.zoom,
              "initial_opened": layer.initial_opened,
              "locstyle": possibleLocstyle,
              "zoomTo": zoomTo,
              "activateWithBl": layer.activeForBaselayers,
              "id": features[featureId].ol_uid,
              "name": features[featureId].get(nameField),
              "hide": hide,
              "childs": []
            });
          }
        }

        features = [];
      }

      if (layer.excludeFromSingleLayer) {
        var customStyleFunc = false;
        var vectorSource = new _source.Vector();
        var _popup = false;

        if (layer.async_content && layer.async_content !== "0") {
          var strategy = layer.type === "table" || layer.content && layer.content[0].settings.boundingBox ? _loadingstrategy.bbox : _loadingstrategy.all;
          vectorSource = new _source.Vector({
            "strategy": strategy
          });

          var _scope = this;

          var loaderFunc = function loaderFunc(extent, resolution, projection) {
            if (layer.content && layer.content[0].settings.boundingBox && (extent[0] === Infinity || extent[0] === -Infinity)) {
              vectorSource.removeLoadedExtent();
            } else if (layer.content && layer.content[0] && layer.content[0].data) {
              var content = layer.content[0];
              var _data = content.data;

              _scope.performOvp({
                "url": _data.url,
                "layerId": layer.id,
                "layer": layer,
                "vectorSource": vectorSource,
                "params": _data.params,
                "locstyleId": layer.locstyle
              }, {
                "extent": extent,
                "resolution": resolution,
                "projection": projection
              });
            } else if (layer.type === "table") {
              var responseFunc = function responseFunc(data) {
                var features = [];

                for (var i = 0; i < data.length; i++) {
                  var contentData = data[i];

                  var feature = _scope.parseOwnData(contentData, layer);

                  features.push(feature);
                }

                if (vectorSource instanceof _source.Cluster) {
                  vectorSource.getSource().addFeatures(features);
                } else {
                  vectorSource.addFeatures(features);
                }
              };

              _scope.performOwnData({
                "layerId": layer.id,
                "locstyleId": layer.locstyle
              }, {
                "extent": extent,
                "resolution": resolution,
                "projection": projection
              }, responseFunc);
            }
          };

          vectorSource.setLoader(loaderFunc);
        } else if (features && features.length) {
          vectorSource.addFeatures(features);
        } else {
          var content = layer.content[0];
          var featureProjection = "EPSG:3857";
          var dataProjection = "EPSG:4326";

          customStyleFunc = function customStyleFunc(feature, resolution) {
            var size = false;
            var returnStyle = [];

            if (feature && feature.get && feature.get('features')) {
              var _features = feature.get('features');

              size = _features.length;
              feature = _features[0];
            }

            if (layer && layer.locstyle && layer.locstyle !== "0") {
              if (scope.proxy.locationStyleController.arrLocStyles && scope.proxy.locationStyleController.arrLocStyles[layer.locstyle] && scope.proxy.locationStyleController.arrLocStyles[layer.locstyle].style) {
                var style = scope.proxy.locationStyleController.arrLocStyles[layer.locstyle].style;

                if (typeof style === "function") {
                  returnStyle = style(feature, resolution, false);
                } else {
                  returnStyle = scope.proxy.locationStyleController.arrLocStyles[locstyle].style;
                }
              }
            }

            if (size > 1 && returnStyle && Array.isArray(returnStyle)) {
              var iconOffset = [0, 0];

              if (returnStyle[0]) {
                if (returnStyle[0].getImage() && returnStyle[0].getImage().getRadius && typeof returnStyle[0].getImage().getRadius === "function") {
                  var radius = parseInt(returnStyle[0].getImage().getRadius(), 10);

                  if (radius) {
                    iconOffset = [-radius, radius];
                  }
                } else if (returnStyle[0].getImage() && returnStyle[0].getImage().getAnchor && typeof returnStyle[0].getImage().getAnchor === "function") {
                  iconOffset = returnStyle[0].getImage().getAnchor() || [0, 0];
                }
              }

              var fillcolor = _c4gMapsUtils.utils.getRgbaFromHexAndOpacity('4975A8', {
                unit: '%',
                value: 70
              });

              var fontcolor = '#FFFFFF';
              returnStyle.push(new _style.Style({
                text: new _style.Text({
                  text: "●",
                  font: "60px sans-serif",
                  offsetX: -1 * iconOffset[0],
                  offsetY: -1 * iconOffset[1],
                  fill: new _style.Fill({
                    color: fillcolor
                  })
                })
              }));
              returnStyle.push(new _style.Style({
                text: new _style.Text({
                  text: size.toString(),
                  offsetX: -1 * iconOffset[0],
                  offsetY: -1 * iconOffset[1] + 3,
                  fill: new _style.Fill({
                    color: fontcolor
                  })
                })
              }));
            }

            return returnStyle;
          };

          if (content) {
            if (content.data && content.data.properties && content.data.properties.projection && content.data.properties.projCode) {
              // if (!proj4(contentData.data.properties.projection)) {
              _proj2["default"].defs(content.data.properties.projection, content.data.properties.projCode);

              (0, _proj3.register)(_proj2["default"]); // }

              dataProjection = new _Projection["default"]({
                code: content.data.properties.projection
              });
            }

            var format = new olFormat[content['format']]({
              featureProjection: featureProjection,
              dataProjection: dataProjection
            });
            vectorSource = new _source.Vector({
              format: format,
              url: content.data.url
            });
            _popup = content.data && content.data.popup ? content.data.popup : false;
          }
        }

        if (layer.cluster) {
          vectorSource = new _source.Cluster({
            source: vectorSource,
            geometryFunction: this.geometryFunction,
            distance: parseInt(layer.cluster.distance, 10)
          });
        }

        vectorLayer = new _layer.Vector({
          source: vectorSource,
          style: customStyleFunc || this.clusterStyleFunction
        });
        vectorLayer.popup = _popup;
        scope.proxy.hook_locstyles_loaded.push(function (lostyleController) {
          vectorLayer.changed();
        });
        var greyed = layer.zoom && !this.compareZoom(layer.zoom);

        if (!hide && !greyed) {
          // vectorLayer.setZIndex(1);
          this.mapController.map.addLayer(vectorLayer);
        }

        features = false;
      }

      if (layer.hideInStarboard) {
        return {
          childs: childs,
          features: features,
          hide_in_starboard: true
        };
      } else {
        return {
          "features": features,
          "vectorLayer": vectorLayer,
          "loader": loaderId,
          "zoom": layer.zoom,
          "initial_opened": layer.initial_opened,
          "locstyle": possibleLocstyle,
          "activateWithBl": layer.activeForBaselayers,
          "id": layer.id,
          "name": layer.name,
          "tags": layer.tags,
          "hide": hide,
          "childs": childs,
          "addZoomTo": layer.addZoomTo
        };
      }
    }
  }, {
    key: "getFeaturesForLayer",
    value: function getFeaturesForLayer(layer) {
      var _this = this;

      var features = [];
      var featureProjection = "EPSG:3857";

      for (var contentId in layer.content) {
        if (layer.content.hasOwnProperty(contentId)) {
          var _ret = function () {
            var content = layer.content[contentId];
            var contentData = content.data;

            if (contentData) {
              var dataProjection = "EPSG:4326";

              if (contentData.properties && contentData.properties.projection && contentData.properties.projCode) {
                // if (!proj4(contentData.data.properties.projection)) {
                _proj2["default"].defs(contentData.properties.projection, contentData.properties.projCode);

                (0, _proj3.register)(_proj2["default"]); // }

                dataProjection = new _Projection["default"]({
                  code: contentData.properties.projection
                });
              }

              var format;

              if (layer.content[contentId].type === "urlData") {
                if (layer.type === "kml") {
                  return {
                    v: false
                  };
                } else if (layer.type === "gpx") {
                  return {
                    v: false
                  };
                }
              } else if (contentData.properties) {
                format = new olFormat[layer.content[contentId].type]({
                  featureProjection: featureProjection,
                  dataProjection: contentData.properties.projection
                });
              }

              var _locstyle2 = content.locationStyle || layer.locstyle;

              var checkLocstyle = _this.arrLocstyles.findIndex(function (element) {
                return element === _locstyle2;
              });

              if (checkLocstyle === -1 && _locstyle2) {
                _this.arrLocstyles.push(_locstyle2);
              }

              if (layer.content[contentId].type === "GeoJSON") {
                if (contentData.type === "FeatureCollection") {
                  for (var i in contentData.features) {
                    if (contentData.features.hasOwnProperty(i)) {
                      (function () {
                        var singleFeature = format.readFeature(contentData.features[i]);

                        if (!singleFeature.get('locstyle')) {
                          singleFeature.set('locstyle', _locstyle2);
                        } else {
                          checkLocstyle = _this.arrLocstyles.findIndex(function (element) {
                            return element === singleFeature.get('locstyle');
                          });

                          if (checkLocstyle === -1 && singleFeature.get('locstyle')) {
                            _this.arrLocstyles.push(singleFeature.get('locstyle'));
                          }
                        }

                        if (content.hover_location) {
                          singleFeature.set('hover_style', content.hover_style);
                          singleFeature.set('hover_location', content.hover_location);
                        }

                        if (content.loc_linkurl) {
                          singleFeature.set('loc_linkurl', content.loc_linkurl);
                        }

                        if (contentData.properties) {
                          if (!singleFeature.get('tooltip')) {
                            singleFeature.set('tooltip', contentData.properties.tooltip);
                          }

                          if (!singleFeature.get('label')) {
                            singleFeature.set('label', contentData.properties.label);
                          }

                          if (!singleFeature.get('popup')) {
                            singleFeature.set('popup', contentData.properties.popup);
                          }
                        }

                        features.push(singleFeature);
                      })();
                    }
                  }
                } else if (contentData && contentData.type) {
                  var feature = format.readFeature(contentData);
                  feature.set('locstyle', _locstyle2);
                  feature.set('noFilter', layer.noRealFilter);

                  if (content.hover_location) {
                    feature.set('hover_style', content.hover_style);
                    feature.set('hover_location', content.hover_location);
                  }

                  if (contentData.loc_linkurl) {
                    feature.set('loc_linkurl', contentData.loc_linkurl);
                  }

                  features.push(feature);
                }
              } else if (format) {
                fetch(contentData.url).then(function (response) {
                  response.text().then(function (text) {
                    var parser = new DOMParser();
                    var data = parser.parseFromString(text, "text/xml");
                    var tempFeatures = format.readFeature(data.childNodes[0].outerHTML);

                    for (var featId in tempFeatures) {
                      if (tempFeatures.hasOwnProperty(featId)) {
                        var _feature = tempFeatures[featId];

                        _feature.set('locstyle', _locstyle2);

                        if (contentData.hover_location) {
                          _feature.set('hover_style', contentData.hover_style);

                          _feature.set('hover_location', contentData.hover_location);
                        }

                        if (contentData.loc_linkurl) {
                          _feature.set('loc_linkurl', contentData.loc_linkurl);
                        }

                        features.push(_feature);
                      }
                    }
                  });
                });
              }
            }
          }();

          if ((0, _typeof2["default"])(_ret) === "object") return _ret.v;
        }
      }

      if (this.proxy.mapData.calc_extent === "LOCATIONS" || this.proxy.mapData.calc_extent === "CENTERLOCS") {
        for (var i in features) {
          if (features.hasOwnProperty(i)) {
            var extent = features[i].getGeometry().getExtent();

            if (this.extent.maxX < extent[2]) {
              this.extent.maxX = extent[2];
            }

            if (this.extent.maxY < extent[3]) {
              this.extent.maxY = extent[3];
            }

            if (this.extent.minX > extent[0]) {
              this.extent.minX = extent[0];
            }

            if (this.extent.minY > extent[1]) {
              this.extent.minY = extent[1];
            }
          }
        }
      }

      if (!this.objIds.hasOwnProperty(layer.id)) {
        if (!layer.split_geojson) {
          this.objIds[layer.id] = features;
        }

        return features;
      } else {
        return [];
      }
    }
  }, {
    key: "geometryFunction",
    value: function geometryFunction(feature) {
      var geometry = feature.getGeometry();

      if (geometry instanceof _geom.Point) {
        return geometry;
      } else {
        return null;
      }
    }
  }, {
    key: "performOvp",
    value: function performOvp(requestData, mapConf) {
      if (this.controllers[requestData.layerId]) {
        //abort request, if new exists
        this.controllers[requestData.layerId].abort();
        delete this.controllers[requestData.layerId];
      }

      var scope = this;
      this.controllers[requestData.layerId] = new AbortController();
      var signal = this.controllers[requestData.layerId].signal;
      var boundingArray = (0, _proj.transformExtent)(mapConf.extent, mapConf.projection, 'EPSG:4326');
      var strBoundingBox = "";
      var url = requestData.url;
      var params = decodeURIComponent(requestData.params);

      if (url) {
        if (url.indexOf('{key}') > -1) {
          url = url.replace('{key}', scope.ovpKey);
        }

        var bboxTag = params.indexOf('(bbox)') >= 0 ? /\(bbox\)/g : /\{{bbox\}}/g;
        url += url.includes("?") ? "&" : "?";

        if (params && params.substr(0, 1).trim() === "<") {
          strBoundingBox = '<bbox-query s="' + boundingArray[1] + '" n="' + boundingArray[3] + '" w="' + boundingArray[0] + '" e="' + boundingArray[2] + '"/>';
          url += 'data=' + encodeURIComponent(params.replace(bboxTag, strBoundingBox));
          fetch(url, {
            signal: signal
          }).then(function (response) {
            response.text().then(function (resp) {
              scope.parseOvpData(resp, requestData);
            })["catch"](function (error) {
              console.log(error.message);
            });
          })["catch"](function (error) {
            if (error.code && error.code !== 20) {
              console.log('Fetch Error :-S', error.message);
            }
          });
        } else {
          strBoundingBox = boundingArray[1] + ',' + boundingArray[0] + ',' + boundingArray[3] + ',' + boundingArray[2];
          url += 'data=' + encodeURIComponent(params.replace(bboxTag, strBoundingBox));
          fetch(url, {
            signal: signal
          }).then(function (response) {
            response.json().then(function (respo) {
              scope.parseOvpData(respo, requestData);
            })["catch"](function (error) {
              console.log(error.message);
            });
          })["catch"](function (error) {
            if (error.code && error.code !== 20) {
              console.log('Fetch Error :-S', error.message);
            }
          });
        }
      }
    }
  }, {
    key: "parseOvpData",
    value: function parseOvpData(response, requestData) {
      var layer = requestData.layer;
      var content = layer.content[0];
      var data = content.data;
      var features;

      if (typeof response === "string") {
        var text = response;

        if (!!!content.settings.showAdditionalGeometries) {
          var parser = new DOMParser();
          var xmlDoc = parser.parseFromString(response, "text/xml");
          var featuresDoc = xmlDoc.getElementsByTagName('way');

          for (var i = 0; i < featuresDoc.length; i++) {
            var singleFeature = featuresDoc[i];

            for (var j = 0; j < singleFeature.children.length; j++) {
              var nodeId = singleFeature.children[j].getAttribute('ref');
              var nodeElement = xmlDoc.getElementById(nodeId);

              while (nodeElement && nodeElement.children.length > 0) {
                nodeElement.removeChild(nodeElement.children[0]);
              }
            }
          }

          var serializer = new XMLSerializer();
          text = serializer.serializeToString(xmlDoc);
        }

        var format = new _OSMXML["default"]();

        try {
          features = format.readFeatures(text, {
            featureProjection: "EPSG:3857"
          });
        } catch (e) {
          console.warn('Can not read feature.');
        }
      } else if ((0, _typeof2["default"])(response) === "object") {
        var geojson = osmtogeojson(response);
        features = new olFormat.GeoJSON().readFeatures(geojson, {
          featureProjection: "EPSG:3857"
        });
      } else {
        return false;
      } // set popups for features


      if (data.popup) {
        for (var _i5 = 0; _i5 < features.length; _i5++) {
          var popup = {};

          for (var _j in data.popup) {
            if (data.popup.hasOwnProperty(_j)) {
              popup[_j] = data.popup[_j];
            }
          }

          features[_i5].set('popup', popup);

          features[_i5].set('noFilter', layer.noRealFilter);
        }
      }

      var requestDatas = layer.content && layer.content[0].settings ? layer.content[0].settings : {};

      for (var featureId in features) {
        if (features.hasOwnProperty(featureId)) {
          if (features[featureId].getGeometry().getType() === "Polygon") {
            if (requestDatas.forceNodes) {
              features[featureId].setGeometry(features[featureId].getGeometry().getInteriorPoint());
            }

            features[featureId].set('osm_type', 'way');
          } else if (features[featureId].getGeometry().getType() === "MultiPolygon") {
            if (requestDatas.forceNodes) {
              features[featureId].setGeometry(features[featureId].getGeometry()[0].getInteriorPoint());
            }

            features[featureId].set('osm_type', 'relation');
          } else if (features[featureId].getGeometry().getType() === "Point") {
            features[featureId].set('osm_type', 'node');
          }

          if (this.mapController.filter) {
            if (!!parseFloat(this.mapController.data.filterHandling)) {
              this.mapController.filter.hideFeatureMulti(features[featureId]);
            } else {
              this.mapController.filter.hideFeature(features[featureId]);
            }
          }

          features[featureId].set('locstyle', layer.locstyle);

          if (content.hover_location) {
            features[featureId].set('hover_style', content.hover_style);
            features[featureId].set('hover_location', content.hover_location);
          }

          if (content.loc_linkurl) {
            features[featureId].set('loc_linkurl', content.loc_linkurl);
          }

          if (content.cluster_fillcolor && content.cluster_fontcolor) {
            features[featureId].set('cluster_fillcolor', content.cluster_fillcolor);
            features[featureId].set('cluster_fontcolor', content.cluster_fontcolor);
          }
        }
      }

      if (requestData.chain || requestData.chain > -1) {
        this.addFeatures(features, requestData.chain);
        this.mapController.setObjLayers(this.arrLayers);
      } else {
        if (requestData.vectorSource instanceof _source.Cluster) {
          requestData.vectorSource.getSource().addFeatures(features);
        } else {
          requestData.vectorSource.addFeatures(features);
        }
      }
    }
  }, {
    key: "performOwnData",
    value: function performOwnData(requestData, mapConf, responseFunc) {
      var scope = this;

      if (this.controllers[requestData.layerId]) {
        //abort request, if new exists
        this.controllers[requestData.layerId].abort();
        delete this.controllers[requestData.layerId];
      }

      if (mapConf.extent[0] === Infinity || mapConf.extent[0] === -Infinity || mapConf.extent[1] === Infinity || mapConf.extent[1] === -Infinity || mapConf.extent[2] === Infinity || mapConf.extent[2] === -Infinity || mapConf.extent[3] === Infinity || mapConf.extent[3] === -Infinity) {
        return false;
      } // @Todelü implement handling for other projections


      var boundingArray = (0, _proj.transformExtent)(mapConf.extent, mapConf.projection, 'EPSG:4326');
      var strBoundingBox = boundingArray[0] + ',' + boundingArray[1] + ';' + boundingArray[2] + ',' + boundingArray[3];
      var url = scope.proxy.api_layercontentdata_url + '/' + requestData.layerId + '/' + strBoundingBox;
      this.controllers[requestData.layerId] = new AbortController();
      var signal = this.controllers[requestData.layerId].signal;
      fetch(url, {
        signal: signal
      }).then(function (response) {
        response.json().then(responseFunc)["catch"](function (error) {
          console.log(error.message);
        });
      })["catch"](function (error) {
        if (error.code && error.code !== 20) {
          console.log('Fetch Error :-S', error.message);
        }
      });
    }
  }, {
    key: "parseOwnData",
    value: function parseOwnData(contentData, layer) {
      var resultCoordinate = (0, _proj.transform)([parseFloat(contentData['geox']), parseFloat(contentData['geoy'])], 'EPSG:4326', 'EPSG:3857');
      var point = new _geom.Point(resultCoordinate);
      var contentFeature = new _Feature["default"](point);
      contentFeature.setId(contentData.id);
      contentFeature.set('noFilter', layer.noRealFilter);
      contentFeature.set('hover_location', layer.hover_location);
      contentFeature.set('hover_style', layer.hover_style);
      var popup = contentData['popup'] ? contentData['popup'] : jQuery.extend({}, layer.popup);

      if (popup && popup.content && popup.content.search && popup.content.search('itemId')) {
        popup.content = popup.content.replace('itemId', contentData['id']);
      }

      if (contentData['label']) {
        contentFeature.set('label', contentData['label']);
      }

      if (contentData['tooltip']) {
        contentFeature.set('tooltip', contentData['tooltip']);
      }

      if (contentData.loc_linkurl) {
        contentFeature.set('loc_linkurl', contentData.loc_linkurl);
      }

      contentFeature.set('popup', popup);
      contentFeature.set('zoom_onclick', layer.zoom_onclick);
      contentFeature.set('tid', contentData['id']);
      var locstyle = contentData['locstyle'] || layer.locstyle;
      contentFeature.set('locstyle', locstyle);

      if (this.mapController.filter) {
        if (!!parseFloat(this.mapController.data.filterHandling)) {
          this.mapController.filter.hideFeatureMulti(contentFeature);
        } else {
          this.mapController.filter.hideFeature(contentFeature);
        }
      }

      return contentFeature;
    }
  }, {
    key: "addFeatures",
    value: function addFeatures(features, chain) {
      var scope = this;
      var addedFeatures;
      var layer;
      var oldLength = scope.vectorCollection.getLength(); //necesarry to distinct redundant features

      scope.vectorCollection.extend(features);
      addedFeatures = scope.vectorCollection.getArray().slice(oldLength);

      if (typeof chain === "string") {
        var arrChain = chain.split(',');
        var i = 1;
        layer = scope.arrLayers[arrChain[0]];

        while (chain[i]) {
          layer = layer.childs[arrChain[i]];
          i++;
        }
      } else {
        layer = scope.arrLayers[chain];
      }

      if (layer.features) {
        layer.features = layer.features.concat(addedFeatures);
      } else if (layer.vectorLayer) {
        var source = layer.vectorLayer.getSource().getSource();
        source.addFeatures(features);
      }
    }
  }, {
    key: "handleZoom",
    value: function handleZoom(proxy) {
      var mapController = proxy.options.mapController;
      var childStates = mapController.state.arrLayerStates;
      var objLayers = mapController.state.objLayers;
      var zoom = mapController.map.getView().getZoom();

      for (var id in childStates) {
        if (childStates.hasOwnProperty(id) && objLayers[id]) {
          childStates[id] = this.handleZoomChilds(zoom, childStates[id], objLayers[id]);
        }
      }

      this.mapController ? this.mapController.setLayerStates(childStates) : '';
    }
  }, {
    key: "handleZoomChilds",
    value: function handleZoomChilds(zoom, childState, child) {
      for (var id in childState.childStates) {
        if (childState.childStates.hasOwnProperty(id)) {
          childState.childStates[id] = this.handleZoomChilds(zoom, childState.childStates[id], child.childs[id]);
        }
      }

      var greyed = child.zoom && !this.compareZoom(child.zoom);

      if (childState['greyed'] !== greyed) {
        if (greyed || !!child.hide) {
          this.hide(child.loader, child.features || child.vectorLayer);
        } else {
          this.show(child.loader, child.features || child.vectorLayer);
        }
      }

      childState['greyed'] = greyed;
      return childState;
    }
  }, {
    key: "compareZoom",
    value: function compareZoom(layerZoom) {
      var zoom = this.mapController.map.getView().getZoom();
      return parseInt(layerZoom.min, 10) < zoom && parseInt(layerZoom.max, 10) > zoom;
    }
  }]);
  return BetterLayerController;
}();

exports.BetterLayerController = BetterLayerController;

/***/ }),

/***/ "./Resources/public/js/c4g-locationstyle-controller.js":
/*!*************************************************************!*\
  !*** ./Resources/public/js/c4g-locationstyle-controller.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.C4gLocationStyleController = void 0;

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _c4gLocationstyle = __webpack_require__(/*! ./c4g-locationstyle */ "./Resources/public/js/c4g-locationstyle.js");

var _c4gMapsUtils = __webpack_require__(/*! ./c4g-maps-utils */ "./Resources/public/js/c4g-maps-utils.js");

/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
var C4gLocationStyleController = /*#__PURE__*/function () {
  function C4gLocationStyleController(proxy) {
    (0, _classCallCheck2["default"])(this, C4gLocationStyleController);
    this.proxy = proxy;
    this.mapController = proxy.options.mapController;
    this.arrLocStyles = {};
    this.resizeOnZoom = proxy.options.mapController.data.resizeLocstyles;
  }

  (0, _createClass2["default"])(C4gLocationStyleController, [{
    key: "loadLocationStyles",
    value: function loadLocationStyles(arrIds, opt_options) {
      var options,
          complete = {},
          success = {},
          self = this,
          count = 1,
          makeAjax;

      if (opt_options && (0, _typeof2["default"])(opt_options) === "object") {
        options = opt_options;
      } else {
        options = {};
      } // this.proxy.options.mapController.spinner.show();


      makeAjax = function makeAjax(styleIds, index) {
        if (index) {
          complete[index] = false;
          success[index] = false;
        } // get locationstyles over API


        jQuery.ajax({
          dataType: self.proxy.options.mapController.data.jsonp ? "jsonp" : "json",
          url: self.proxy.api_locstyle_url,
          data: {
            ids: styleIds
          }
        }).done(function (data) {
          var i,
              styleData,
              successful = true;

          if (data.length > 0) {
            for (i = 0; i < data.length; i += 1) {
              styleData = data[i];
              var style = new _c4gLocationstyle.C4gLocationStyle(styleData, self);
              style.style = style.getStyleFunction(styleData);
              self.arrLocStyles[styleData.id] = style;
            }

            self.proxy.layerController.vectorLayer.setStyle(self.proxy.layerController.clusterStyleFunction);
          }

          if (index) {
            success[index] = true;

            for (var key in success) {
              if (success.hasOwnProperty(key)) {
                if (!success[key]) {
                  successful = false;
                  break;
                }
              }
            }
          }

          if (options.done && typeof options.done === "function" && (index ? successful : true)) {
            options.done(self); // call hooks

            _c4gMapsUtils.utils.callHookFunctions(self.proxy.hook_locstyles_loaded, {
              locstyleController: self
            });
          }

          self.proxy.layerController.vectorLayer.changed();
        }).always(function (jXhr, strStatus) {
          var completed = true;

          if (index) {
            complete[index] = true;

            for (var key in complete) {
              if (complete.hasOwnProperty(key)) {
                if (!complete[key]) {
                  completed = false;
                  break;
                }
              }
            }
          }

          if (options.always && typeof options.always === "function" && (index ? completed : true)) {
            options.always();
          } // if (!jQuery(self.proxy.options.mapController.mapsControls.spinner.element).hasClass(cssConstants.HIDE)) {
          //   self.proxy.options.mapController.spinner.hide();
          // }

        }).fail(function (jqXHR, textStatus, errorThrown) {
          console.warn(errorThrown);
        });
      }; // split arrIds if it's too long


      if (arrIds.length > 100) {
        var n = 100;

        while (arrIds.length > 0) {
          makeAjax(arrIds.splice(0, n), count);
          count++;
        }
      } else if (arrIds.length > 0) {
        makeAjax(arrIds);
      } //});

    } // end of "loadLocationStyles()"

  }]);
  return C4gLocationStyleController;
}();

exports.C4gLocationStyleController = C4gLocationStyleController;

/***/ }),

/***/ "./Resources/public/js/c4g-locationstyle.js":
/*!**************************************************!*\
  !*** ./Resources/public/js/c4g-locationstyle.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.C4gLocationStyle = void 0;

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _c4gMapsUtils = __webpack_require__(/*! ./c4g-maps-utils */ "./Resources/public/js/c4g-maps-utils.js");

var _style = __webpack_require__(/*! ol/style */ "./node_modules/ol/style.js");

var _geom = __webpack_require__(/*! ol/geom */ "./node_modules/ol/geom.js");

var _Circle = _interopRequireDefault(__webpack_require__(/*! ol/style/Circle */ "./node_modules/ol/style/Circle.js"));

var _Photo = _interopRequireDefault(__webpack_require__(/*! ol-ext/style/Photo */ "./node_modules/ol-ext/style/Photo.js"));

/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
var C4gLocationStyle = /*#__PURE__*/function () {
  function C4gLocationStyle(locStyleArr, controller) {
    (0, _classCallCheck2["default"])(this, C4gLocationStyle);
    this.id = locStyleArr['id']; // this.style     = this.getStyleFunction(locStyleArr);

    this.editor = this.getStyleEditorConfig(locStyleArr);
    this.name = locStyleArr['name'];
    this.tooltip = locStyleArr['tooltip'];
    this.label = locStyleArr['label'];
    this.minzoom = locStyleArr['minzoom'];
    this.maxzoom = locStyleArr['maxzoom'];
    this.fnStyleFunction = locStyleArr['style_function_js'];

    if (this.fnStyleFunction && typeof this.fnStyleFunction === "string") {
      this.fnStyleFunction = this.fnStyleFunction.replace(/ol.Style./gi, "window.olStyle.");
      this.fnStyleFunction = this.fnStyleFunction.replace(/ol.Geom./gi, "window.olStyle.");

      if (!window.olStyle) {
        window.olStyle = {
          Stroke: _style.Stroke,
          Style: _style.Style,
          Icon: _style.Icon,
          Fill: _style.Fill,
          Point: _geom.Point,
          CircleStyle: _Circle["default"],
          Circle: _geom.Circle,
          Text: _style.Text
        };
      }
    }

    this.controller = controller;
    this.locStyleArr = locStyleArr;
  }

  (0, _createClass2["default"])(C4gLocationStyle, [{
    key: "getStyleFunction",
    value: function getStyleFunction(styleData) {
      var self, styleFunction, imageStyle, strokeStyle, fillStyle, textStyle, textStyleOutline, backgroundFill, backgroundStroke;
      self = this; // general

      strokeStyle = new _style.Stroke({
        color: _c4gMapsUtils.utils.getRgbaFromHexAndOpacity(styleData.strokecolor[0], styleData.strokecolor[1]),
        width: parseInt(styleData.strokewidth.value ? styleData.strokewidth.value : 2, 10)
      });
      fillStyle = new _style.Fill({
        color: _c4gMapsUtils.utils.getRgbaFromHexAndOpacity(styleData.fillcolor[0], styleData.fillcolor[1])
      });
      imageStyle = this.createImageStyle(styleData, strokeStyle, fillStyle); // build function

      styleFunction = function styleFunction(feature, projection, getId) {
        // if (self.fnStyleFunction) {
        //   return Function("feature","data","map",self.fnStyleFunction)(feature);
        // }
        var stylesArray, label;
        var mapZoom = self.controller.mapController.map.getView().getZoom();

        if (parseInt(self.locStyleArr.maxzoom, 10) && parseInt(self.locStyleArr.maxzoom, 10) < mapZoom) {
          return null;
        }

        if (parseInt(self.locStyleArr.minzoom, 10) && parseInt(self.locStyleArr.minzoom, 10) > mapZoom) {
          return null;
        }

        if (getId) {
          return styleData.id;
        } // check if this is a feature.styleFunction


        if (!feature) {
          projection = feature;
          feature = this;
        }

        stylesArray = [];

        if (feature && typeof feature.get === 'function' && feature.get('label')) {
          label = feature.get('label');
        } else if (styleData.label) {
          label = styleData.label;
        } else {
          label = false;
        }

        var defaultColor = self.controller.mapController.data.default_label_color; // label

        var newScale = self.getScaleFactor(styleData);

        if (label) {
          if (styleData.label_outl_color && styleData.label_outl_width.value) {
            textStyleOutline = new _style.Stroke({
              color: _c4gMapsUtils.utils.getRgbaFromHexAndOpacity(styleData.label_outl_color || defaultColor, {
                unit: '%',
                value: 100
              }),
              width: parseInt(styleData.label_outl_width.value, 10)
            });

            if (styleData.label_outl_box === "1") {
              backgroundFill = new _style.Fill({
                color: _c4gMapsUtils.utils.getRgbaFromHexAndOpacity(styleData.label_outl_color || defaultColor, {
                  unit: '%',
                  value: 100
                })
              });
            }
          }

          if (!styleData.label_offset) {
            styleData.label_offset = [0, 0, "px"];
          }

          var fontSize = styleData.font_size && (0, _typeof2["default"])(styleData.font_size) === "object" && styleData.font_size !== null ? styleData.font_size.value : styleData.font_size ? styleData.font_size : '13';
          var textOptions = {
            text: label,
            font: (styleData.font_weight || 'normal') + ' ' + (styleData.font_style || 'normal') + ' ' + fontSize + 'px ' + (styleData.font_family || 'sans-serif'),
            // scale: parseInt(styleData.font_size || 0, 10) || undefined,
            offsetX: parseInt(styleData.label_offset[0] || 0, 10),
            offsetY: parseInt(styleData.label_offset[1] || 0, 10),
            textAlign: styleData.label_align_hor,
            textBaseline: styleData.label_align_ver,
            scale: newScale,
            fill: new _style.Fill({
              color: _c4gMapsUtils.utils.getRgbaFromHexAndOpacity(styleData.font_color[0] || defaultColor, styleData.font_color[1])
            }),
            stroke: textStyleOutline
          };

          if (styleData.label_outl_box === "1") {
            textOptions.backgroundFill = backgroundFill;
            textOptions.backgroundStroke = textStyleOutline;
          }

          textStyle = new _style.Text(textOptions);
        } // check if image has to be resized


        if (imageStyle && newScale !== 0.0 && imageStyle.setScale) {
          imageStyle.setScale(newScale);
        } // check if label should be displayed


        var showLabelForZoom = false;
        var labelMinZoom = parseInt(self.locStyleArr.label_minzoom, 10);
        var labelMaxZoom = parseInt(self.locStyleArr.label_maxzoom, 10);

        if (mapZoom >= labelMinZoom && (labelMaxZoom >= mapZoom || labelMaxZoom === 0)) {
          showLabelForZoom = true;
        } // create style-object


        if (label && showLabelForZoom) {
          var zIndex;

          if (feature && feature.get && typeof feature.get === "function" && feature.get('zIndex')) {
            zIndex = feature.get('zIndex');
          }

          stylesArray.push(new _style.Style({
            image: imageStyle,
            text: textStyle,
            stroke: strokeStyle,
            fill: fillStyle,
            zIndex: zIndex
          }));
        } else {
          stylesArray.push(new _style.Style({
            image: imageStyle,
            stroke: strokeStyle,
            fill: fillStyle
          }));
        } // add line-arrows


        if (styleData.line_arrows && feature && typeof feature.getGeometry === 'function' && !(feature.getGeometry().getType() === 'Point') && typeof feature.getGeometry().forEachSegment === 'function') {
          var arrowStyles = self.createLineArrowStyles(styleData, feature, strokeStyle, fillStyle);
          stylesArray = stylesArray.concat(arrowStyles);
        }

        return stylesArray;
      };

      if (this.fnStyleFunction) {
        styleFunction = Function("feature", "data", "map", this.fnStyleFunction);
      }

      return styleFunction;
    } // end of "getStyleFunction()"

    /**
     * Determines the current scaling factor according to the current zoomlevel and the profile/locstyle settings.
     * @param styleData
     */

  }, {
    key: "getScaleFactor",
    value: function getScaleFactor(styleData) {
      var newScale = 0.0;
      var initialZoom, scaleFactor, factor, minScale, maxScale;
      var currentZoom = this.controller.mapController.map.getView().getZoom();
      var initialScale = "cust_icon_svgphoto".includes(styleData.styletype) ? parseFloat(styleData.icon_scale) : 1; // locstyle setting overwrites profile setting

      if (styleData.icon_resize_zoom) {
        initialZoom = parseInt(styleData.icon_resize_src_zoom, 10);
        scaleFactor = parseFloat(styleData.icon_resize_scale_factor);
        minScale = parseFloat(styleData.icon_resize_min_scale);
        maxScale = parseFloat(styleData.icon_resize_max_scale);
      } else if (this.controller.resizeOnZoom) {
        initialZoom = parseInt(this.controller.resizeOnZoom.srcZoom, 10);
        scaleFactor = parseFloat(this.controller.resizeOnZoom.scaleFactor);
        minScale = parseFloat(this.controller.resizeOnZoom.minScale);
        maxScale = parseFloat(this.controller.resizeOnZoom.maxScale);
      }

      if (currentZoom > initialZoom) {
        // resize image bigger
        factor = currentZoom - initialZoom;
        var scaleSummand = scaleFactor * factor;
        newScale = initialScale + scaleSummand;

        if (newScale > maxScale) {
          newScale = maxScale;
        }
      } else if (currentZoom < initialZoom) {
        // resize image smaller
        factor = initialZoom - currentZoom;

        var _scaleSummand = scaleFactor * factor;

        newScale = initialScale - _scaleSummand;

        if (newScale <= minScale) {
          newScale = minScale;
        }
      } else {
        // resize to initial size
        newScale = initialScale;
      }

      return newScale;
    }
  }, {
    key: "createImageStyle",
    value: function createImageStyle(styleData, strokeStyle, fillStyle) {
      var imageStyle; // image

      switch (styleData.styletype) {
        case 'square':
          imageStyle = new _style.RegularShape({
            fill: fillStyle,
            stroke: strokeStyle,
            points: 4,
            radius: styleData.radius.value || 10,
            angle: Math.PI / 4
          });
          break;

        case 'star':
          imageStyle = new _style.RegularShape({
            fill: fillStyle,
            stroke: strokeStyle,
            radius1: styleData.radius.value || 10,
            radius2: styleData.radius.value ? Math.floor(styleData.radius.value * 0.5) : 4,
            points: 5,
            angle: 0
          });
          break;

        case 'x':
          imageStyle = new _style.RegularShape({
            fill: fillStyle,
            stroke: strokeStyle,
            points: 4,
            radius: styleData.radius.value || 10,
            radius2: 0,
            angle: Math.PI / 4
          });
          break;

        case 'cross':
          imageStyle = new _style.RegularShape({
            fill: fillStyle,
            stroke: strokeStyle,
            points: 4,
            radius: styleData.radius.value || 10,
            radius2: 0,
            angle: 0
          });
          break;

        case 'triangle':
          imageStyle = new _style.RegularShape({
            fill: fillStyle,
            stroke: strokeStyle,
            points: 3,
            radius: styleData.radius.value || 10,
            rotation: Math.PI / 4,
            angle: 0
          });
          break;

        case 'ol_icon': // fallthrough

        case 'cust_icon':
          if (styleData.icon_src) {
            var width, height, offsetX, offsetY;
            width = styleData.icon_size[0] * styleData.icon_scale;
            height = styleData.icon_size[1] * styleData.icon_scale;
            offsetX = styleData.icon_offset[0] * styleData.icon_scale;
            offsetY = styleData.icon_offset[1] * styleData.icon_scale;
            var anchorX = 1 / (parseInt(width) / (parseInt(offsetX) * -1));
            var anchorY = 1 / (parseInt(height) / (parseInt(offsetY) * -1));
            imageStyle = new _style.Icon({
              anchor: [anchorX, anchorY],
              opacity: parseFloat(styleData.icon_opacity.value) / 100,
              src: styleData.icon_src,
              scale: parseFloat(styleData.icon_scale),
              size: [parseInt(styleData.icon_size[0], 10), parseInt(styleData.icon_size[1], 10)]
            });
          }

          break;

        case 'cust_icon_svg':
          if (styleData.svgSrc && styleData.icon_scale && styleData.icon_size) {
            var canvas = document.createElement('canvas');
            var ctx = canvas.getContext("2d");

            var _width, _height, _offsetX, _offsetY;

            _width = styleData.icon_size[0] * styleData.icon_scale;
            _height = styleData.icon_size[1] * styleData.icon_scale;
            _offsetX = styleData.icon_offset[0] * styleData.icon_scale;
            _offsetY = styleData.icon_offset[1] * styleData.icon_scale;

            var _anchorX = 1 / (parseInt(_width) / (parseInt(_offsetX) * -1));

            var _anchorY = 1 / (parseInt(_height) / (parseInt(_offsetY) * -1));

            canvas.width = _width;
            canvas.height = _height;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            var img = new Image();
            img.src = styleData.svgSrc;

            img.onload = function () {
              ctx.drawImage(img, 0, 0, _width, _height);
            };

            imageStyle = new _style.Icon({
              anchor: [_anchorX, _anchorY],
              img: canvas,
              imgSize: [canvas.width, canvas.height]
            });
          }

          break;

        case 'photo':
          imageStyle = new _Photo["default"]({
            kind: styleData.photoKind,
            crop: true,
            opacity: parseFloat(styleData.icon_opacity.value, 10) / 100,
            radius: parseFloat(styleData.radius.value, 10),
            shadow: true,
            stroke: strokeStyle,
            src: styleData.icon_src
          });
          break;

        case 'point':
          imageStyle = new _Circle["default"]({
            fill: fillStyle,
            stroke: strokeStyle,
            radius: styleData.radius.value || 7
          });
          break;

        default:
          imageStyle = new _Circle["default"]({
            fill: fillStyle,
            stroke: strokeStyle,
            radius: styleData.radius.value || 7
          });
      }

      return imageStyle;
    }
  }, {
    key: "createLineArrowStyles",
    value: function createLineArrowStyles(styleData, feature, strokeStyle, fillStyle) {
      var scope = this;
      var stylesArray = [];
      var arrowSize = styleData.line_arrows_radius ? parseInt(styleData.line_arrows_radius.value, 10) * 2 : 0;
      var arrowSizeUnit = arrowSize + styleData.line_arrows_radius.unit;
      feature.getGeometry().forEachSegment(function (start, end) {
        //if minzoom is 0 (unlimited), hide arrows if they are bigger than the segment
        var arrows_minzoom = parseInt(styleData.line_arrows_minzoom, 10);
        var start_pixel = scope.controller.mapController.map.getPixelFromCoordinate(start);
        var end_pixel = scope.controller.mapController.map.getPixelFromCoordinate(end); // euclid-distance between start and end

        var segmentLength = Math.sqrt(Math.pow(end_pixel[1] - start_pixel[1], 2) + Math.pow(end_pixel[0] - start_pixel[0], 2));

        if (arrows_minzoom < 0 && arrowSize + parseInt(styleData.strokewidth.value, 10) < segmentLength || arrows_minzoom >= 0 && scope.controller.mapController.map.getView().getZoom() >= arrows_minzoom) {
          // forward arrows
          stylesArray.push(new _style.Style({
            geometry: new _geom.Point(end),
            text: new _style.Text({
              text: "ᐳ",
              font: arrowSizeUnit + " sans-serif",
              offsetX: 0,
              offsetY: 1,
              fill: fillStyle,
              stroke: strokeStyle,
              textAlign: 'right',
              rotateWithView: true,
              rotation: -Math.atan2(end[1] - start[1], end[0] - start[0])
            })
          })); // backward arrows (if wanted)

          if (styleData.line_arrows_back) {
            stylesArray.push(new _style.Style({
              geometry: new _geom.Point(start),
              text: new _style.Text({
                text: "ᐳ",
                font: arrowSizeUnit + " sans-serif",
                offsetX: 0,
                offsetY: -1,
                fill: fillStyle,
                stroke: strokeStyle,
                textAlign: 'right',
                rotateWithView: true,
                rotation: -Math.atan2(start[1] - end[1], start[0] - end[0])
              })
            }));
          }
        }
      });
      return stylesArray;
    }
  }, {
    key: "getStyleEditorConfig",
    value: function getStyleEditorConfig(styleData) {
      var editorConfig; // create editor-config

      editorConfig = {};
      editorConfig.collect = styleData.editor_collect || undefined;
      editorConfig.iconSrc = styleData.editor_icon || undefined;
      editorConfig.vars = styleData.editor_vars || undefined;
      editorConfig.sort = styleData.editor_sort || false;

      if (editorConfig.sort) {
        editorConfig.sort = parseInt(editorConfig.sort, 10) || false;
      }

      return editorConfig;
    } // end of "getStyleEditorConfig()"

  }]);
  return C4gLocationStyle;
}();

exports.C4gLocationStyle = C4gLocationStyle;

/***/ }),

/***/ "./Resources/public/js/c4g-maps-config.js":
/*!************************************************!*\
  !*** ./Resources/public/js/c4g-maps-config.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.config = exports.OSM_REL_ATTRIBUTION = void 0;

var _format = __webpack_require__(/*! ol/format */ "./node_modules/ol/format.js");

var _tilegrid = __webpack_require__(/*! ol/tilegrid */ "./node_modules/ol/tilegrid.js");

/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
//copy link to add noopener
var OSM_REL_ATTRIBUTION = '&#169; ' + '<a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> ' + 'contributors.';
exports.OSM_REL_ATTRIBUTION = OSM_REL_ATTRIBUTION;
var config = {
  osm: {
    CycleMap: {
      attributions: 'Style by <a target="_blank" rel="noopener" href="https://www.opencyclemap.org/">OpenCycleMap</a>' + ' ' + OSM_REL_ATTRIBUTION,
      crossOrigin: 'anonymous',
      minZoom: 0,
      maxZoom: 19,
      url: 'https://{a-c}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png'
    },
    German: {
      attributions: 'Style by <a target="_blank" rel="noopener" href="https://www.openstreetmap.de/germanstyle.html">openstreetmap.de</a>' + ' ' + OSM_REL_ATTRIBUTION,
      crossOrigin: 'anonymous',
      minZoom: 0,
      maxZoom: 19,
      url: 'https://{a-c}.tile.openstreetmap.de/{z}/{x}/{y}.png'
    },
    LandscapeMap: {
      attributions: 'Style by <a target="_blank" rel="noopener" href="https://www.opencyclemap.org/">OpenCycleMap</a>' + ' ' + OSM_REL_ATTRIBUTION,
      crossOrigin: 'anonymous',
      minZoom: 0,
      maxZoom: 19,
      url: 'https://{a-c}.tile.opencyclemap.org/landscape/{z}/{x}/{y}.png'
    },
    Mapnik: {
      attributions: OSM_REL_ATTRIBUTION,
      crossOrigin: 'anonymous'
    },
    NONE: '' // last line

  },
  stamen: {
    Toner: {
      attributions: 'Map tiles by <a target="_blank" rel="noopener" href="https://stamen.com">Stamen Design</a>, under <a  target="_blank" rel="noopener" href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a  target="_blank" rel="noopener" href="http://openstreetmap.org">OpenStreetMap</a>, under <a  target="_blank" rel="noopener" href="http://www.openstreetmap.org/copyright">ODbL</a>.',
      layer: 'toner',
      minZoom: 0,
      maxZoom: 18,
      crossOrigin: 'anonymous'
    },
    TonerLabels: {
      attributions: 'Map tiles by <a target="_blank" rel="noopener" href="https://stamen.com">Stamen Design</a>, under <a target="_blank" rel="noopener" href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a target="_blank" rel="noopener" href="http://openstreetmap.org">OpenStreetMap</a>, under <a target="_blank" rel="noopener" href="http://www.openstreetmap.org/copyright">ODbL</a>.',
      layer: 'toner-labels',
      minZoom: 0,
      maxZoom: 18,
      crossOrigin: 'anonymous'
    },
    TonerLines: {
      attributions: 'Map tiles by <a target="_blank" rel="noopener" href="https://stamen.com">Stamen Design</a>, under <a target="_blank" rel="noopener" href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a target="_blank" rel="noopener" href="http://openstreetmap.org">OpenStreetMap</a>, under <a target="_blank" rel="noopener" href="http://www.openstreetmap.org/copyright">ODbL</a>.',
      layer: 'toner-lines',
      minZoom: 0,
      maxZoom: 18,
      crossOrigin: 'anonymous'
    },
    Terrain: {
      attributions: 'Map tiles by <a target="_blank" rel="noopener" href="https://stamen.com">Stamen Design</a>, under <a target="_blank" rel="noopener" href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a target="_blank" rel="noopener" href="http://openstreetmap.org">OpenStreetMap</a>, under <a target="_blank" rel="noopener" href="http://www.openstreetmap.org/copyright">ODbL</a>.',
      layer: 'terrain',
      minZoom: 0,
      maxZoom: 18,
      crossOrigin: 'anonymous'
    },
    Watercolor: {
      attributions: 'Map tiles by <a target="_blank" rel="noopener" href="https://stamen.com">Stamen Design</a>, under <a target="_blank" rel="noopener" href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a target="_blank" rel="noopener" href="http://openstreetmap.org">OpenStreetMap</a>, under <a target="_blank" rel="noopener" href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>.',
      layer: 'watercolor',
      minZoom: 0,
      maxZoom: 18,
      crossOrigin: 'anonymous'
    },
    NONE: ''
  },
  mapquest: {
    MapQuestOpen: {
      layer: 'osm'
    },
    MapQuestHyb: {
      layer: 'hyb'
    },
    MapQuestSat: {
      layer: 'sat'
    },
    NONE: ''
  },
  mapbox: {
    Mapbox: {
      tileSize: [512, 512],
      attributions: '© <a target="_blank" rel="noopener" href="https://www.mapbox.com/about/maps/">Mapbox</a>' + ' ' + OSM_REL_ATTRIBUTION,
      minZoom: 0,
      maxZoom: 22,
      crossOrigin: 'anonymous'
    },
    MapboxClassic: {
      attributions: '© <a target="_blank" rel="noopener" href="https://www.mapbox.com/about/maps/">Mapbox</a>' + ' ' + OSM_REL_ATTRIBUTION,
      minZoom: 0,
      maxZoom: 22,
      crossOrigin: 'anonymous'
    }
  },
  otm: {
    attributions: 'Kartendaten: ' + OSM_REL_ATTRIBUTION + ', SRTN | Kartendarstellung © <a target="_blank" rel="noopener" href="https://opentopomap.org/">OpenTopoMap</a> (<a target="_blank" rel="noopener" href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
  },
  mapz: {
    attributions: '© 2021 <a target=\"_blank\" href=\"http://www.mapz.com\">mapz.com </a>' + ' ' + OSM_REL_ATTRIBUTION,
    minZoom: 0,
    maxZoom: 22,
    tilePixelRatio: 2
  },
  klokan: {
    OpenMapTiles: {
      format: new _format.MVT(),
      tileGrid: (0, _tilegrid.createXYZ)({
        tileSize: 512,
        maxZoom: 22
      }),
      //ToDo maxZoom from configuration
      tilePixelRatio: 8,
      attributions: '© <a target="_blank" rel="noopener" href="https://openmaptiles.org/">OpenMapTiles</a>' + ' ' + OSM_REL_ATTRIBUTION,
      minZoom: 0,
      maxZoom: 22,
      crossOrigin: 'anonymous'
    },
    TileHosting: {
      format: new _format.MVT(),
      tileGrid: (0, _tilegrid.createXYZ)({
        tileSize: 512,
        maxZoom: 22
      }),
      //ToDo maxZoom from configuration
      tilePixelRatio: 8,
      attributions: '© <a target="_blank" rel="noopener" href="https://tilehosting.com/">TileHosting</a>' + ' ' + OSM_REL_ATTRIBUTION,
      minZoom: 0,
      maxZoom: 22,
      crossOrigin: 'anonymous'
    }
  },
  here: {
    HERE: {
      tileSize: [512, 512],
      attributions: 'Map Tiles &copy; ' + new Date().getFullYear() + ' ' + '<a target="_blank" rel="noopener" href="https://developer.here.com">HERE</a>' + ' ' + OSM_REL_ATTRIBUTION,
      minZoom: 0,
      maxZoom: 22,
      crossOrigin: 'anonymous'
    }
  },
  thunderforest: {
    Thunderforest: {
      tileSize: [512, 512],
      attributions: 'Map Tiles © <a target="_blank" rel="noopener" href="https://www.thunderforest.com/">Thunderforest</a>' + ' ' + OSM_REL_ATTRIBUTION,
      minZoom: 0,
      maxZoom: 19,
      crossOrigin: 'anonymous'
    }
  }
};
exports.config = config;

/***/ }),

/***/ "./Resources/public/js/c4g-maps-constant-i18n-de.js":
/*!**********************************************************!*\
  !*** ./Resources/public/js/c4g-maps-constant-i18n-de.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

/**
 * Language constants (en)
 */

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.langConstantsGerman = void 0;
var langConstantsGerman = {
  LANG: 'de',
  NAME: 'Name',
  HIDE: 'Zuklappen',
  CLOSE: 'Schließen',
  POINT: 'POI',
  FREEHAND: 'Freihand',
  LINE: 'Linie',
  POLYGON: 'Fläche',
  CIRCLE: 'Kreis',
  PERIMETER: 'Umfang',
  LENGTH: 'Länge',
  SURFACEAREA: 'Flächeninhalt',
  RADIUS: 'Radius',
  REFRESH: 'Aktualisieren',
  ACCEPT: 'Akzeptieren',
  COPY_TO_CLIPBOARD: 'In Zwischenablage kopieren',
  CTRL_ZOOM_IN: 'Vergrößern',
  CTRL_ZOOM_OUT: 'Verkleinern',
  CTRL_ZOOM_EXT: 'Maximal verkleinern',
  CTRL_ZOOM_HOME: 'Zur ursprünglichen Position',
  CTRL_ZOOM_POS: 'Zum aktuellen Standort',
  CTRL_ZOOM_SLIDER: 'Zoom Slider',
  CTRL_RESET_ROTATION: 'Rotation (touch, ctrl+shift+mouse) zurücksetzen',
  CTRL_PORTSIDE: 'Portside ein-/ausblenden',
  CTRL_ROUTER: 'Router ein-/ausblenden',
  CTRL_MEASURETOOLS: 'Messwerkzeuge ein-/ausblenden',
  CTRL_INFOPAGE: 'Infoseite ein-/ausblenden',
  CTRL_ADDITIONALPANEL: 'Panel ein-/ausblenden',
  CTRL_ACCOUNT: 'Account ein-/ausblenden',
  CTRL_ZOOMLEVEL: 'Zoom',
  CTRL_MOUSECOORDS: 'Lon/Lat',
  CTRL_GEOSEARCH: 'Suche ein-/ausblenden',
  CTRL_START_SEARCH: 'Suche starten',
  CTRL_OVERVIEWMAP: 'Übersichtskarte ein-/ausblenden',
  CTRL_SIDEBOARD: 'Sideboard ein-/ausblenden',
  CTRL_STARBOARD: 'Starboard ein-/ausblenden',
  CTRL_ATTRIBUTION: 'Attribution anzeigen',
  CTRL_GRID: 'Gitter ein-/ausblenden',
  CTRL_PERMALINK: 'Permalink generieren',
  CTRL_FULLSCREEN: 'Vollbildmodus ein-/ausschalten',
  CTRL_PRINT: 'Karte exportieren',
  CTRL_BASELAYER: 'Basiskartenwechsler ein-/ausschalten',
  CTRL_INFOAREA: 'Infobereich öffnen/schließen',
  STARBOARD: 'Kartenelemente',
  STARBOARD_BASELAYER: 'Basiskarten',
  STARBOARD_LAYER: 'Ebenen',
  STARBOARD_VIEW_TRIGGER_BASELAYERSWITCHER: 'Basiskarten',
  STARBOARD_VIEW_TRIGGER_LAYERSWITCHER: 'Kartenelemente',
  STARBOARD_ELEMENT_ZOOM: 'Auf Element zoomen',
  STARBOARD_ELEMENT_ZOOM_BEFORE: 'Zu ',
  STARBOARD_ELEMENT_ZOOM_AFTER: ' zoomen',
  LAYERSWITCHER_TOGGLE_ALL: "Alle Elemente",
  SIDEBOARD: 'Sideboard',
  RESET_FILTER: 'Filter zurücksetzen',
  GEOSEARCH: 'Suche',
  OVERVIEWMAP: 'Übersichtskarte',
  MEASURETOOLS: 'Messwerkzeuge',
  MEASURETOOLS_INFO: 'Wählen Sie einen Messtyp overviewaus und starten Sie die Messung durch das Klicken in die Karte.',
  MEASURETOOLS_INFO_ADDITIONAL: '(Einzelne Messungen können mit einem Doppelklick beendet werden.)',
  MEASURETOOLS_VIEW_TRIGGER_SELECT: 'Auswahl Modus',
  MEASURETOOLS_VIEW_TRIGGER_DRAW_LINESTRING: 'Strecken messen',
  MEASURETOOLS_VIEW_TRIGGER_DRAW_POLYGON: 'Flächen messen',
  MEASURETOOLS_VIEW_TRIGGER_DRAW_CIRCLE: 'Radius messen',
  MEASURETOOLS_VIEW_TRIGGER_DRAW_FREEHAND: 'Freihand messen',
  INFOPAGE: 'Informationen',
  ADDITIONALPANEL: 'Panel',
  ADDITIONALPANEL_VIEW_TRIGGER: 'Panel anzeigen',
  ACCOUNT: 'Account',
  ACCOUNT_VIEW_TRIGGER: 'Account anzeigen',
  SEARCH_NOT_FOUND: 'Die Lokation konnte nicht gefunden werden. Bitte versuchen Sie eine andere Eingabe.',
  NONE: '' // last line

};
exports.langConstantsGerman = langConstantsGerman;

/***/ }),

/***/ "./Resources/public/js/c4g-maps-constant-i18n-en.js":
/*!**********************************************************!*\
  !*** ./Resources/public/js/c4g-maps-constant-i18n-en.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.langConstantsEnglish = void 0;

/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

/**
 * Language constants (en)
 */
var langConstantsEnglish = {
  LANG: 'en',
  NAME: 'Name',
  HIDE: 'Hide',
  CLOSE: 'Close',
  POINT: 'POI',
  FREEHAND: 'freehand',
  LINE: 'Line',
  POLYGON: 'Area',
  CIRCLE: 'Circle',
  PERIMETER: 'Perimeter',
  LENGTH: 'Length',
  SURFACEAREA: 'Surface area',
  RADIUS: 'Radius',
  REFRESH: 'Refresh',
  ACCEPT: 'Accept',
  COPY_TO_CLIPBOARD: 'Copy to clipboard',
  CTRL_ZOOM_IN: 'Zoom in',
  CTRL_ZOOM_OUT: 'Zoom out',
  CTRL_ZOOM_EXT: 'Fit to extent',
  CTRL_ZOOM_HOME: 'jump to initial position',
  CTRL_ZOOM_POS: 'jump to browser/device position',
  CTRL_ZOOM_SLIDER: 'Zoom slider',
  CTRL_RESET_ROTATION: 'Reset rotation (touch, ctrl+shift+mouse)',
  CTRL_PORTSIDE: 'Toggle portside',
  CTRL_EDITOR: 'Toggle editor',
  CTRL_MEASURETOOLS: 'Toggle measuretools',
  CTRL_INFOPAGE: 'Toggle infopage',
  CTRL_ADDITIONALPANEL: 'Toggle panel',
  CTRL_ACCOUNT: 'Toggle account',
  CTRL_ZOOMLEVEL: 'Zoom',
  CTRL_MOUSECOORDS: 'Lon/Lat',
  CTRL_GEOSEARCH: 'Toggle geosearch',
  CTRL_START_SEARCH: 'start search',
  CTRL_OVERVIEWMAP: 'Toggle overviewmap',
  CTRL_SIDEBOARD: 'Toggle sideboard',
  CTRL_STARBOARD: 'Toggle starboard',
  CTRL_ATTRIBUTION: 'Show attribution',
  CTRL_GRID: 'Toggle grid',
  CTRL_PERMALINK: 'Generate Permalink',
  CTRL_FULLSCREEN: 'Toggle fullscreen-mode',
  CTRL_PRINT: 'Export map',
  CTRL_BASELAYER: 'Switch base map changer on/off',
  CTRL_INFOAREA: 'Open/close info area',
  EDITOR: 'Editor',
  EDITOR_ENABLE_INSTANT_MEASURE: 'Measure while drawing',
  EDITOR_ENABLE_FREEHAND_DRAW: 'Freehand draw',
  EDITOR_FEATURE_APPLY: 'End modification',
  EDITOR_FEATURE_DELETE: 'Delete feature',
  EDITOR_FEATURE_MODIFY: 'Modify feature',
  EDITOR_SELECT_INFO: 'Click an element on the map to select it.',
  EDITOR_SELECT_INFO_ADDITIONAL: '[ctrl] + [click] for multiselect <br>[shift] for boxselect',
  EDITOR_VIEW_TRIGGER_SELECT: 'Select-mode',
  EDITOR_VIEW_TRIGGER_DRAW_POINT: 'Add POIs',
  EDITOR_VIEW_TRIGGER_DRAW_FREEHAND: 'Draw freehand',
  EDITOR_VIEW_TRIGGER_DRAW_LINESTRING: 'Add tracks',
  EDITOR_VIEW_TRIGGER_DRAW_POLYGON: 'Add areas',
  EDITOR_VIEW_TRIGGER_DRAW_CIRCLE: 'Add circles',
  STARBOARD: 'Layerswitcher',
  STARBOARD_BASELAYER: 'Baselayer',
  STARBOARD_LAYER: 'Layer',
  STARBOARD_VIEW_TRIGGER_BASELAYERSWITCHER: 'Baselayerswitcher',
  STARBOARD_VIEW_TRIGGER_LAYERSWITCHER: 'Map elements',
  STARBOARD_ELEMENT_ZOOM: 'Zoom to element',
  STARBOARD_ELEMENT_ZOOM_BEFORE: 'Zoom to element ',
  STARBOARD_ELEMENT_ZOOM_AFTER: '',
  LAYERSWITCHER_TOGGLE_ALL: "All elements",
  RESET_FILTER: 'Reset filter',
  MEASURETOOLS: 'Measuretools',
  MEASURETOOLS_INFO: 'Select a measuretype and start measuring by clicking on the map.',
  MEASURETOOLS_INFO_ADDITIONAL: '(To stop a measurement, double-click on the map.)',
  MEASURETOOLS_VIEW_TRIGGER_SELECT: 'Select-mode',
  MEASURETOOLS_VIEW_TRIGGER_DRAW_LINESTRING: 'Measure tracks',
  MEASURETOOLS_VIEW_TRIGGER_DRAW_POLYGON: 'Measure areas',
  MEASURETOOLS_VIEW_TRIGGER_DRAW_CIRCLE: 'Measure radius',
  MEASURETOOLS_VIEW_TRIGGER_DRAW_FREEHAND: 'Measure freehand',
  GEOSEARCH: 'Search',
  OVERVIEWMAP: 'Overview map',
  INFOPAGE: 'Infopage',
  INFOPAGE_VIEW_TRIGGER: 'Show informations',
  ADDITIONALPANEL: 'Panel',
  ADDITIONALPANEL_VIEW_TRIGGER: 'Show panel',
  ACCOUNT: 'Account',
  ACCOUNT_VIEW_TRIGGER: 'Show account',
  SEARCH_NOT_FOUND: 'Location not found. Sorry... :(',
  NONE: '' // last line

};
exports.langConstantsEnglish = langConstantsEnglish;

/***/ }),

/***/ "./Resources/public/js/c4g-maps-constant.js":
/*!**************************************************!*\
  !*** ./Resources/public/js/c4g-maps-constant.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.cssConstants = void 0;
var cssConstants = {
  OPEN: 'c4g-open',
  CLOSE: 'c4g-close',
  CLOSEABLE: 'c4g-closeable',
  ENABLED: 'c4g-enabled',
  DISABLED: 'c4g-disabled',
  HIDE: 'c4g-hide',
  ICON: 'c4g-icon',
  CONTROL: 'c4g-control',
  COPY: 'c4g-copy',
  REFRESH: 'c4g-refresh',
  ACTIVE: 'c4g-active',
  INACTIVE: 'c4g-inactive',
  LOADING: 'c4g-loading',
  ANIMATION_SPIN: 'c4g-animation-spin',
  LARGE: 'c4g-large',
  SMALL: 'c4g-small',
  HORIZONTAL: 'c4g-horizontal',
  VERTICAL: 'c4g-vertical',
  ATTRIBUTION_LOGO: 'c4g-attribution-logo',
  CONTROL_CONTAINER_TL: 'c4g-control-container-top-left',
  CONTROL_CONTAINER_TR: 'c4g-control-container-top-right',
  CONTROL_CONTAINER_BL: 'c4g-control-container-bottom-left',
  CONTROL_CONTAINER_BL_SUB: 'c4g-control-container-bottom-left-sub',
  CONTROL_CONTAINER_BR: 'c4g-control-container-bottom-right',
  GEOSEARCH: 'c4g-geosearch',
  GEOSEARCH_WRAPPER: 'c4g-geosearch-wrapper',
  GEOSEARCH_TRIGGER: 'c4g-geosearch-trigger',
  GEOSEARCH_START: 'c4g-geosearch-start',
  GRATICULE: 'c4g-graticule',
  MEASURETOOLS_VIEW_TRIGGER_SELECT: 'c4g-measuretools-view-trigger-select',
  MEASURETOOLS_VIEW_TRIGGER_DRAW_LINESTRING: 'c4g-measuretools-view-trigger-draw-line',
  MEASURETOOLS_VIEW_TRIGGER_DRAW_POLYGON: 'c4g-measuretools-view-trigger-draw-polygon',
  MEASURETOOLS_VIEW_TRIGGER_DRAW_CIRCLE: 'c4g-measuretools-view-trigger-draw-circle',
  MEASURETOOLS_VIEW_TRIGGER_DRAW_FREEHAND: 'c4g-measuretools-view-trigger-draw-freehand',
  PRINT: 'c4g-print',
  INFOPAGE_VIEW_TRIGGER: 'c4g-infopage-view-trigger',
  INFOPAGE: 'c4g-infopage',
  ADDITIONALPANEL_VIEW_TRIGGER: 'c4g-additionalpanel-view-trigger',
  ADDITIONALPANEL: 'c4g-additionalpanel',
  OVERVIEWMAP: 'c4g-overviewmap',
  OVERVIEWMAP_WRAPPER: 'c4g-overviewmap-wrapper',
  PERMALINK: 'c4g-permalink',
  PERMALINK_POPUP: 'c4g-permalink-popup',
  POPUP_CLOSE: 'c4g-popup-close',
  POPUP_ROUTE_WRAPPER: 'c4g-popup-route-wrapper',
  POPUP_ROUTE_FROM: 'c4g-popup-route-from',
  POPUP_ROUTE_TO: 'c4g-popup-route-to',
  PORTSIDE: 'c4g-portside',
  PORTSIDE_CONTAINER: 'c4g-portside-container',
  PORTSIDE_CONTROL: 'c4g-portside-control',
  PORTSIDE_WRAPPER: 'c4g-portside-wrapper',
  PORTSIDE_TITLEBAR: 'c4g-portside-titlebar',
  PORTSIDE_TOP_TOOLBAR: 'c4g-portside-top-toolbar',
  PORTSIDE_CONTENT_CONTAINER: 'c4g-portside-content-container',
  PORTSIDE_BOTTOM_TOOLBAR: 'c4g-portside-bottom-toolbar',
  PORTSIDE_STATUSBAR: 'c4g-portside-statusbar',
  PORTSIDE_VIEWTRIGGERBAR: 'c4g-portside-viewtriggerbar',
  PORTSIDE_HEADLINE: 'c4g-portside-headline',
  PORTSIDE_BUTTONBAR: 'c4g-portside-buttonbar',
  PORTSIDE_BUTTON: 'c4g-portside-button',
  PORTSIDE_HIDE: 'c4g-portside-hide',
  PORTSIDE_CLOSE: 'c4g-portside-close',
  SPINNER: 'c4g-spinner',
  STARBOARD: 'c4g-starboard',
  STARBOARD_CONTAINER: 'c4g-starboard-container',
  STARBOARD_CONTROL: 'c4g-starboard-control',
  STARBOARD_WRAPPER: 'c4g-starboard-wrapper',
  STARBOARD_TITLEBAR: 'c4g-starboard-titlebar',
  STARBOARD_CONTENT_CONTAINER: 'c4g-starboard-content-container',
  STARBOARD_BOTTOM_TOOLBAR: 'c4g-starboard-bottom-toolbar',
  STARBOARD_STATUSBAR: 'c4g-starboard-statusbar',
  STARBOARD_VIEWTRIGGERBAR: 'c4g-starboard-viewtriggerbar',
  STARBOARD_HEADLINE: 'c4g-starboard-headline',
  STARBOARD_BUTTONBAR: 'c4g-starboard-buttonbar',
  STARBOARD_BUTTON: 'c4g-starboard-button',
  STARBOARD_VIEW_TRIGGER_BASELAYERSWITCHER: 'c4g-starboard-view-trigger-baselayerswitcher',
  STARBOARD_VIEW_TRIGGER_LAYERSWITCHER: 'c4g-starboard-view-trigger-layerswitcher',
  STARBOARD_CLOSE: 'c4g-starboard-close',
  STARBOARD_CONTENT_BASELAYERSWITCHER: 'c4g-content-baselayerswitcher',
  STARBOARD_BASELAYERTREE: 'c4g-baselayertree',
  STARBOARD_LAYERTREE: 'c4g-layertree',
  STARBOARD_CONTENT_LAYERSWITCHER: 'c4g-content-layerswitcher',
  STARBOARD_LOCSTYLE: 'c4g-starboard-locstyle',
  STARBOARD_LOCSTYLE_POINT: 'c4g-starboard-locstyle-point',
  STARBOARD_LOCSTYLE_SQUARE: 'c4g-starboard-locstyle-square',
  STARBOARD_LOCSTYLE_STAR: 'c4g-starboard-locstyle-star',
  STARBOARD_LOCSTYLE_X: 'c4g-starboard-locstyle-x',
  STARBOARD_LOCSTYLE_CROSS: 'c4g-starboard-locstyle-cross',
  STARBOARD_LOCSTYLE_TRIANGLE: 'c4g-starboard-locstyle-triangle',
  TOOLTIP_POPUP: 'c4g-tooltip-popup',
  ZOOM_LEVEL: 'c4g-zoom-level',
  OL_CONTROL: 'ol-control',
  OL_UNSELECTABLE: 'ol-unselectable',
  OL_OVERLAYCONTAINER: 'ol-overlaycontainer',
  OL_OVERLAYCONTAINER_SE: 'ol-overlaycontainer-stopevent',
  OL_VIEWPORT: 'ol-viewport',
  OL_ZOOM: 'ol-zoom',
  OL_ZOOM_IN: 'ol-zoom-in',
  OL_ZOOM_EXT: 'ol-zoom-extent',
  OL_ZOOM_HOME: 'ol-zoom-home',
  OL_ZOOM_POS: 'ol-zoom-position',
  OL_ZOOM_WITH_EXT: 'ol-zoom-with-extent',
  OL_ZOOM_WITH_HOME: 'ol-zoom-with-home',
  OL_ZOOM_WITH_POS: 'ol-zoom-with-position',
  OL_ZOOM_SLIDER: 'ol-zoom-slider',
  OL_ZOOM_WITH_SLIDER: 'ol-zoom-with-slider',
  NONE: '' // last line

};
exports.cssConstants = cssConstants;

/***/ }),

/***/ "./Resources/public/js/c4g-maps-control-zoomlevel.js":
/*!***********************************************************!*\
  !*** ./Resources/public/js/c4g-maps-control-zoomlevel.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Zoomlevel = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _c4gMapsConstant = __webpack_require__(/*! ./c4g-maps-constant */ "./Resources/public/js/c4g-maps-constant.js");

var _control = __webpack_require__(/*! ol/control */ "./node_modules/ol/control.js");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

'use strict';

var Zoomlevel = /*#__PURE__*/function (_Control) {
  (0, _inherits2["default"])(Zoomlevel, _Control);

  var _super = _createSuper(Zoomlevel);

  function Zoomlevel(options) {
    var _this;

    (0, _classCallCheck2["default"])(this, Zoomlevel);
    _this = _super.call(this, options);
    var self, element, updateZoomlevel;
    self = (0, _assertThisInitialized2["default"])(_this);

    if (!options || !options.mapController) {
      console.warn('Zoomlevel control needs to know the map.');
      return (0, _possibleConstructorReturn2["default"])(_this, false);
    } // default options


    options = jQuery.extend({
      className: _c4gMapsConstant.cssConstants.ZOOM_LEVEL,
      undefinedHTML: ''
    }, options);
    var mapView = options.mapController.map.getView();
    element = document.createElement('div');
    element.className = options.className;
    element.innerHTML = parseInt(mapView.getZoom());

    updateZoomlevel = function updateZoomlevel() {
      element.innerHTML = parseInt(mapView.getZoom());
    };

    options.mapController.map.getView().on('change:resolution', function () {
      updateZoomlevel();
    });
    _this.view = mapView; // inheritance-stuff

    _control.Control.call((0, _assertThisInitialized2["default"])(_this), {
      element: element,
      target: options.target
    });

    return _this;
  }

  return Zoomlevel;
}(_control.Control);

exports.Zoomlevel = Zoomlevel;

/***/ }),

/***/ "./Resources/public/js/c4g-maps-controls.js":
/*!**************************************************!*\
  !*** ./Resources/public/js/c4g-maps-controls.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.MapsControls = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _c4gMapsConstant = __webpack_require__(/*! ./c4g-maps-constant */ "./Resources/public/js/c4g-maps-constant.js");

var _c4gMapsControlZoomlevel = __webpack_require__(/*! ./c4g-maps-control-zoomlevel */ "./Resources/public/js/c4g-maps-control-zoomlevel.js");

var _c4gMapsInteractionGeopicker = __webpack_require__(/*! ./c4g-maps-interaction-geopicker */ "./Resources/public/js/c4g-maps-interaction-geopicker.js");

var _c4gMapsInteractionGeopickerGeojson = __webpack_require__(/*! ./c4g-maps-interaction-geopicker-geojson */ "./Resources/public/js/c4g-maps-interaction-geopicker-geojson.js");

var _proj = __webpack_require__(/*! ol/proj */ "./node_modules/ol/proj.js");

var _control = __webpack_require__(/*! ol/control */ "./node_modules/ol/control.js");

var _coordinate = __webpack_require__(/*! ol/coordinate */ "./node_modules/ol/coordinate.js");

var _c4gMapsI18n = __webpack_require__(/*! ./c4g-maps-i18n */ "./Resources/public/js/c4g-maps-i18n.js");

/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
var langConstants = {};
'use strict';

var MapsControls = /*#__PURE__*/function () {
  /**
   * [MapController description]
   * @param {json-object}  mapData  Object to configure con4gis-maps.
   *                                See "docs/mapData-values.md"
   *                                to get a list of valid values for this object.
   */
  function MapsControls(mapController) {
    (0, _classCallCheck2["default"])(this, MapsControls);
    this.mapController = mapController;
    this.controls = {};
    this.leftSlideElements = [];
    this.rightSlideElements = [];
    langConstants = (0, _c4gMapsI18n.getLanguage)(mapController.data);
  }

  (0, _createClass2["default"])(MapsControls, [{
    key: "init",
    value: function init() {
      var map = this.mapController.map;
      var proxy = this.mapController.proxy;
      var mapData = this.mapController.data; // add control-containers ===
      //
      // top-left

      var controlContainerTopLeft = document.createElement('div');
      controlContainerTopLeft.className = _c4gMapsConstant.cssConstants.CONTROL_CONTAINER_TL + ' ' + _c4gMapsConstant.cssConstants.OL_UNSELECTABLE;
      this.mapController.$overlaycontainer_stopevent.prepend(controlContainerTopLeft);
      this.controlContainerTopLeft = controlContainerTopLeft; // bottom-left

      var controlContainerBottomLeft = document.createElement('div');
      controlContainerBottomLeft.className = _c4gMapsConstant.cssConstants.CONTROL_CONTAINER_BL + ' ' + _c4gMapsConstant.cssConstants.OL_UNSELECTABLE;
      jQuery(controlContainerTopLeft).after(controlContainerBottomLeft); // element needs to be moved when Portside will be opened

      this.leftSlideElements.push(controlContainerBottomLeft); // top-right

      var controlContainerTopRight = document.createElement('div');
      controlContainerTopRight.className = _c4gMapsConstant.cssConstants.CONTROL_CONTAINER_TR + ' ' + _c4gMapsConstant.cssConstants.OL_UNSELECTABLE;
      jQuery(controlContainerBottomLeft).after(controlContainerTopRight); // element needs to be moved when Starboard will be opened

      this.rightSlideElements.push(controlContainerTopRight); // bottom-right

      var controlContainerBottomRight = document.createElement('div');
      controlContainerBottomRight.className = _c4gMapsConstant.cssConstants.CONTROL_CONTAINER_BR + ' ' + _c4gMapsConstant.cssConstants.OL_UNSELECTABLE;
      jQuery(controlContainerTopRight).after(controlContainerBottomRight); // element needs to be moved when Starboard will be opened

      this.rightSlideElements.push(controlContainerBottomRight);
      var buttons = [{
        name: 'layerswitcher',
        sort: mapData.layerswitcher.enable
      }, {
        name: 'baselayerswitcher',
        sort: mapData.baselayerswitcher.enable
      }, {
        name: 'geosearch',
        sort: mapData.geosearch.enable
      }, {
        name: 'legend',
        sort: mapData.legend.enable
      }, {
        name: 'measure',
        sort: mapData.measuretools.enable
      }, {
        name: 'permalink',
        sort: mapData.permalink.enable
      }];

      var sortBy = function sortBy(key) {
        return function (a, b) {
          return a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : 0;
        };
      };

      buttons.sort(sortBy('sort'));

      for (var i = 0; i < buttons.length; i++) {
        var button = buttons[i];

        if (parseInt(button.sort) <= 0) {
          continue;
        }

        switch (button.name) {
          case 'overview':
            var ovmTarget = document.createElement("div");
            ovmTarget.className = "c4g-sideboard c4g-overviewmap-container c4g-close";
            this.mapController.$overlaycontainer_stopevent.append(ovmTarget); // const scope = this;
            // const addOverviewMap = function() {
            //     var overviewMapOptions = {
            //         target: controlContainerTopLeft,
            //         mapController: scope.mapController,
            //         ovmTarget: ovmTarget,
            //         layers: [proxy.baselayerController.arrBaselayers[proxy.activeBaselayerId].layer]
            //     };
            //
            //     if (scope.overviewMap) {
            //         // we are reloading the overview map, so keep the collapsed-property
            //         overviewMapOptions.collapsed = !scope.overviewMap.isOpen();
            //     }
            //
            //     scope.overviewMap = new OverviewMap(overviewMapOptions);
            //     scope.controls.overviewmap = scope.overviewMap.getOverviewMap();
            //     map.addControl(scope.controls.overviewmap);
            // };
            //
            // if (proxy.baselayers_loaded) {
            //     addOverviewMap();
            // } else {
            //     proxy.hook_baselayer_loaded.push(addOverviewMap);
            // }
            //
            // // add hook to synchronize overviewmap with baselayer
            // window.c4gMapsHooks.baselayer_changed = window.c4gMapsHooks.baselayer_changed || [];
            // window.c4gMapsHooks.baselayer_changed.push(function(baselayerId) {
            //     map.removeControl(scope.controls.overviewmap);
            //     scope.overviewMap.removeFromMap();
            //     addOverviewMap();
            // });

            break;

          default:
        }
      } // backend-geopicker


      if (mapData.geopicker && (mapData.geopicker.type === "backend" || mapData.geopicker.type === "frontend")) {
        this.controls.geopicker = new _c4gMapsInteractionGeopicker.GeoPicker({
          mapContainer: this.mapController
        });
        this.mapController.map.addInteraction(this.controls.geopicker);

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
                var transformed = (0, _proj.transform)(numerized, (0, _proj.get)('EPSG:4326'), (0, _proj.get)('EPSG:3857'));
                this.mapController.map.getView().setCenter(transformed);
              }
            }
          }
        }
      } else if (mapData.geopicker && mapData.geopicker.type) {
        this.controls.geopicker = new _c4gMapsInteractionGeopickerGeojson.GeoPickerGeoJSON({
          mapContainer: this.mapController
        });
        this.mapController.map.addInteraction(this.controls.geopicker);
      } //con4gis logo


      if (mapData.attribution.cfg_logo) {
        var logoLink = document.createElement('a');
        logoLink.href = 'https://con4gis.org';
        logoLink.title = 'built with con4gis';
        logoLink.target = '_blank';
        logoLink.rel = 'noopener noreferrer';
        logoLink.className = _c4gMapsConstant.cssConstants.ATTRIBUTION_LOGO;
        var logoGraphic = document.createElement('img');
        logoGraphic.src = 'bundles/con4gismaps/images/logo_con4gis.svg';
        logoGraphic.alt = 'con4gis logo';
        logoGraphic.height = '24px';
        logoGraphic.width = '67px';
        logoLink.appendChild(logoGraphic);
        controlContainerBottomLeft.appendChild(logoLink);
      } // scaleline


      if (mapData.scaleline) {
        this.controls.scaleline = new _control.ScaleLine({
          target: controlContainerBottomLeft
        });
        map.addControl(this.controls.scaleline);
      } // zoom-level & mouse-position


      if (mapData.zoomlevel || mapData.mouseposition) {
        // wrapper for zoom-level and mouse-position
        var controlContainerBottomLeftSub = document.createElement('div');
        controlContainerBottomLeftSub.className = _c4gMapsConstant.cssConstants.CONTROL_CONTAINER_BL_SUB + ' ' + _c4gMapsConstant.cssConstants.OL_UNSELECTABLE;
        jQuery(controlContainerBottomLeft).append(controlContainerBottomLeftSub); // display zoom-level

        if (mapData.zoomlevel) {
          this.controls.zoomlevel = new _c4gMapsControlZoomlevel.Zoomlevel({
            mapController: this.mapController,
            target: controlContainerBottomLeftSub,
            undefinedHTML: 'N/A'
          });
          map.addControl(this.controls.zoomlevel);
        } // display mouse-position


        if (mapData.mouseposition) {
          this.controls.mouseposition = new _control.MousePosition({
            projection: 'EPSG:4326',
            coordinateFormat: _coordinate.toStringHDMS,
            target: controlContainerBottomLeftSub,
            undefinedHTML: 'N/A'
          });
          map.addControl(this.controls.mouseposition);
        }
      } // show attribution


      if (mapData.attribution.enable) {
        var attrOptions = {
          label: ' ',
          tipLabel: langConstants.CTRL_ATTRIBUTION,
          collapseLabel: ' ',
          target: mapData.attribution.div ? mapData.attribution.div : controlContainerBottomLeft,
          collapsible: !mapData.attribution.div && !mapData.attribution.always_show
        };

        if (mapData.attribution.div) {
          attrOptions["className"] = "ol-attribution ol-attribution-ext-div";
        }

        this.controls.attribution = new _control.Attribution(attrOptions);

        if (!mapData.attribution.always_show) {
          this.controls.attribution.setCollapsed(mapData.attribution.div ? false : mapData.attribution.collapsed === '1');
        }

        map.addControl(this.controls.attribution);
      }
    }
  }]);
  return MapsControls;
}();

exports.MapsControls = MapsControls;

/***/ }),

/***/ "./Resources/public/js/c4g-maps-i18n.js":
/*!**********************************************!*\
  !*** ./Resources/public/js/c4g-maps-i18n.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getLanguage = getLanguage;

var _c4gMapsConstantI18nDe = __webpack_require__(/*! ./c4g-maps-constant-i18n-de */ "./Resources/public/js/c4g-maps-constant-i18n-de.js");

var _c4gMapsConstantI18nEn = __webpack_require__(/*! ./c4g-maps-constant-i18n-en */ "./Resources/public/js/c4g-maps-constant-i18n-en.js");

/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

/**
 *  This script imports all different languages and exports the one that is valid for the configured language.
 */
function getLanguage(mapData) {
  if (mapData && mapData.lang === "de") {
    return _c4gMapsConstantI18nDe.langConstantsGerman;
  } else if (mapData && mapData.lang === "en") {
    return _c4gMapsConstantI18nEn.langConstantsEnglish;
  } else {
    // fallback
    return _c4gMapsConstantI18nEn.langConstantsEnglish;
  }
}

/***/ }),

/***/ "./Resources/public/js/c4g-maps-interaction-geopicker-geojson.js":
/*!***********************************************************************!*\
  !*** ./Resources/public/js/c4g-maps-interaction-geopicker-geojson.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.GeoPickerGeoJSON = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _interaction = __webpack_require__(/*! ol/interaction */ "./node_modules/ol/interaction.js");

var _ol = __webpack_require__(/*! ol */ "./node_modules/ol/index.js");

var _geom = __webpack_require__(/*! ol/geom */ "./node_modules/ol/geom.js");

var _style = __webpack_require__(/*! ol/style */ "./node_modules/ol/style.js");

var _layer = __webpack_require__(/*! ol/layer */ "./node_modules/ol/layer.js");

var _format = __webpack_require__(/*! ol/format */ "./node_modules/ol/format.js");

var _source = __webpack_require__(/*! ol/source */ "./node_modules/ol/source.js");

var _proj = __webpack_require__(/*! ol/proj */ "./node_modules/ol/proj.js");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

'use strict';

var GeoPickerGeoJSON = /*#__PURE__*/function (_Draw) {
  (0, _inherits2["default"])(GeoPickerGeoJSON, _Draw);

  var _super = _createSuper(GeoPickerGeoJSON);

  /**
   *
   * @param options
   * @returns {boolean}
   * @constructor
   */
  function GeoPickerGeoJSON(options) {
    var _this;

    (0, _classCallCheck2["default"])(this, GeoPickerGeoJSON);
    var mapData = options.mapContainer.data;
    var vectorSource = new _source.Vector({});
    var vectorLayer = new _layer.Vector({
      source: vectorSource
    });
    options.mapContainer.map.addLayer(vectorLayer);
    _this = _super.call(this, {
      type: mapData.geopicker.type,
      freehand: true,
      // style: this.geoPickerStyleFunction,
      source: vectorSource
    });
    _this.vectorSource = vectorSource;
    _this.$fieldGeoJSON = jQuery(mapData.geopicker.input_geojson);

    if (_this.$fieldGeoJSON.val()) {
      try {
        var geojson = new _format.GeoJSON({
          dataProjection: "EPSG:4326",
          featureProjection: "EPSG:3857"
        });
        var feature = geojson.readFeature(_this.$fieldGeoJSON.val());

        _this.vectorSource.addFeature(feature);
      } catch (e) {
        console.log(e);
      }
    }

    _this.on('drawstart', function (event) {
      _this.vectorSource.clear();
    });

    _this.on('drawend', function (event) {
      var geojson = new _format.GeoJSON({
        dataProjection: "EPSG:4326",
        featureProjection: "EPSG:3857"
      });
      var strFeature = geojson.writeFeature(event.feature);

      _this.$fieldGeoJSON.val(strFeature);
    });

    return _this;
  }

  return GeoPickerGeoJSON;
}(_interaction.Draw);

exports.GeoPickerGeoJSON = GeoPickerGeoJSON;

/***/ }),

/***/ "./Resources/public/js/c4g-maps-interaction-geopicker.js":
/*!***************************************************************!*\
  !*** ./Resources/public/js/c4g-maps-interaction-geopicker.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.GeoPicker = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _interaction = __webpack_require__(/*! ol/interaction */ "./node_modules/ol/interaction.js");

var _ol = __webpack_require__(/*! ol */ "./node_modules/ol/index.js");

var _geom = __webpack_require__(/*! ol/geom */ "./node_modules/ol/geom.js");

var _style = __webpack_require__(/*! ol/style */ "./node_modules/ol/style.js");

var _layer = __webpack_require__(/*! ol/layer */ "./node_modules/ol/layer.js");

var _source = __webpack_require__(/*! ol/source */ "./node_modules/ol/source.js");

var _proj = __webpack_require__(/*! ol/proj */ "./node_modules/ol/proj.js");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

'use strict';

var GeoPicker = /*#__PURE__*/function (_Interaction) {
  (0, _inherits2["default"])(GeoPicker, _Interaction);

  var _super = _createSuper(GeoPicker);

  /**
   *
   * @param options
   * @returns {boolean}
   * @constructor
   */
  function GeoPicker(options) {
    var _this;

    (0, _classCallCheck2["default"])(this, GeoPicker);
    var mapData, mapContainer, lat, lon, latIdx, lonIdx, latRnd, lonRnd;
    _this = _super.call(this, {
      handleEvent: options.handleEvent
    });
    _this.options = options || {};

    if (!_this.options.mapContainer || !_this.options.mapContainer.data) {
      console.warn('The GeoPicker needs a "mapContainer" in order to work.');
      return (0, _possibleConstructorReturn2["default"])(_this, false);
    }

    mapData = _this.options.mapContainer.data;
    mapContainer = _this.options.mapContainer; // configurate geopicker

    _this.$fieldGeoX = jQuery(mapData.geopicker.input_geo_x);
    _this.$fieldGeoY = jQuery(mapData.geopicker.input_geo_y);
    _this.opticLayerSource = new _source.Vector({});
    _this.opticLayerVector = new _layer.Vector({
      source: _this.opticLayerSource,
      style: _this.geoPickerStyleFunction
    });
    _this.opticLayerFeature = null;

    if (_this.$fieldGeoX.val() && _this.$fieldGeoY.val()) {
      lat = _this.$fieldGeoY.val();
      lon = _this.$fieldGeoX.val();

      if (mapData.geopicker.anonymous) {
        _this.$fieldGeoY.remove();

        _this.$fieldGeoX.remove();

        latIdx = lat.indexOf('.');
        lonIdx = lon.indexOf('.');
        lat = lat.replace(/\D/g, "");
        lon = lon.replace(/\D/g, "");
        latRnd = Math.round(Math.random() * (9999999999 - 1) + 1);
        lonRnd = Math.round(Math.random() * (9999999999 - 1) + 1);

        if (latRnd > 4999999999) {
          lat = parseInt(lat) - latRnd;
        } else {
          lat = parseInt(lat) + latRnd;
        }

        if (lonRnd < 5000000000) {
          lon = parseInt(lon) - lonRnd;
        } else {
          lon = parseInt(lon) + lonRnd;
        }

        lat = lat + "";
        lon = lon + "";
        lat = lat.substr(0, latIdx) + '.' + lat.substr(latIdx, lat.length - latIdx);
        lon = lon.substr(0, lonIdx) + '.' + lon.substr(lonIdx, lon.length - lonIdx);
      }

      _this.opticLayerFeature = new _ol.Feature({
        geometry: new _geom.Point((0, _proj.fromLonLat)([parseFloat(lon), parseFloat(lat)])),
        pickerColor: [0, 180, 100, 1],
        anonymous: mapData.geopicker.anonymous
      });

      _this.opticLayerSource.addFeature(_this.opticLayerFeature);

      mapContainer.map.getView().fit(_this.opticLayerSource.getExtent(), mapContainer.map.getSize()); // set zoom so we can see some tiles without error

      mapContainer.map.getView().setZoom(15);
    } else if (mapData.geoLocation && typeof mapData.geoLocation.setTracking === 'function') {
      mapData.geoLocation.setTracking(true);
    }

    mapContainer.map.addLayer(_this.opticLayerVector); //TODO wenn geopicker.clickDisabled (oder so) gesetzt ist, this.options.handleEvent = function(){}

    return _this;
  }

  (0, _createClass2["default"])(GeoPicker, [{
    key: "geoPickerStyleFunction",
    value: function geoPickerStyleFunction(feature, projection, getId) {
      var color, white, result;

      if (getId) {
        return -1;
      }

      white = [255, 255, 255, 1];

      if (feature && typeof feature.get === 'function' && feature.get('pickerColor')) {
        color = feature.get('pickerColor');
      } else {
        color = [200, 0, 0, 0.7];
      }

      result = [];

      if (feature && typeof feature.get === 'function' && !feature.get('anonymous')) {
        result.push(new _style.Style({
          image: new _style.Circle({
            radius: 2,
            fill: new _style.Fill({
              color: color
            }),
            stroke: new _style.Stroke({
              color: white,
              width: 2
            })
          }),
          zIndex: Infinity
        }));
        result.push(new _style.Style({
          image: new _style.Circle({
            radius: 20,
            stroke: new _style.Stroke({
              color: white,
              width: 4
            })
          }),
          zIndex: Infinity
        }));
        result.push(new _style.Style({
          image: new _style.Circle({
            radius: 20,
            stroke: new _style.Stroke({
              color: color,
              width: 2
            })
          }),
          zIndex: Infinity
        }));
        result.push(new _style.Style({
          image: new _style.Circle({
            radius: 40,
            stroke: new _style.Stroke({
              color: white,
              width: 4
            })
          }),
          zIndex: Infinity
        }));
        result.push(new _style.Style({
          image: new _style.Circle({
            radius: 40,
            stroke: new _style.Stroke({
              color: color,
              width: 2
            })
          }),
          zIndex: Infinity
        }));
      }

      result.push(new _style.Style({
        image: new _style.Circle({
          radius: 60,
          stroke: new _style.Stroke({
            color: white,
            width: 4
          })
        }),
        zIndex: Infinity
      }));
      result.push(new _style.Style({
        image: new _style.Circle({
          radius: 60,
          stroke: new _style.Stroke({
            color: color,
            width: 2
          })
        }),
        zIndex: Infinity
      }));
      return result;
    }
  }, {
    key: "handleEvent",
    value: function handleEvent(mapBrowserEvent) {
      if (mapBrowserEvent.type === "singleclick") {
        if (!this.options.disableClickEvent && !this.options.mapContainer.data.geopicker.disabled) {
          return !this.pick(mapBrowserEvent.coordinate);
        }
      }

      return true;
    }
  }, {
    key: "pick",
    value: function pick(coordinate) {
      var arrLatLon;
      arrLatLon = (0, _proj.toLonLat)(coordinate);
      this.opticLayerFeature = new _ol.Feature({
        geometry: new _geom.Point(coordinate)
      });
      this.opticLayerSource.clear();
      this.opticLayerSource.addFeature(this.opticLayerFeature);
      this.$fieldGeoX.val(arrLatLon[0]);
      this.$fieldGeoY.val(arrLatLon[1]);
      this.$fieldGeoX.change();
      this.$fieldGeoY.change();
      return true;
    }
  }]);
  return GeoPicker;
}(_interaction.Interaction);

exports.GeoPicker = GeoPicker;

/***/ }),

/***/ "./Resources/public/js/c4g-maps-misc-maphover.js":
/*!*******************************************************!*\
  !*** ./Resources/public/js/c4g-maps-misc-maphover.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.MapHover = void 0;

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _c4gMapsMiscTooltippopup = __webpack_require__(/*! ./c4g-maps-misc-tooltippopup */ "./Resources/public/js/c4g-maps-misc-tooltippopup.js");

var _c4gMapsUtils = __webpack_require__(/*! ./c4g-maps-utils */ "./Resources/public/js/c4g-maps-utils.js");

var _Observable = __webpack_require__(/*! ol/Observable */ "./node_modules/ol/Observable.js");

var _c4gMapsConstant = __webpack_require__(/*! ./c4g-maps-constant */ "./Resources/public/js/c4g-maps-constant.js");

/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
'use strict';

var MapHover = /*#__PURE__*/function () {
  /**
   * @TODO
   * [MapHover description]
   *
   * @constructor
   *
   * @param {Object=} opt_options Control options.
   */
  function MapHover(options) {
    (0, _classCallCheck2["default"])(this, MapHover);
    this.options = options || {}; // default options

    this.options = jQuery.extend({
      // mapController: undefined,
      activate: true
    }, this.options);

    if (!this.options.mapController) {
      console.warn('MapHover needs a mapController');
      return false;
    } // set needed vars


    this.listenerKey = false;
    this.map = this.options.mapController.map;
    this.lastFeatureStyle = null;
    this.lastHoveredFeature = null; // create tooltip

    this.hoverTooltip = new _c4gMapsMiscTooltippopup.TooltipPopUp({
      map: this.map,
      offset: [10, 10],
      orientation: this.options.mapController.data.tooltipOrientation || "bottom-left",
      horizontal: true,
      closeable: false
    });
    this.hoverTooltip.hide();

    if (this.options.activate) {
      this.activate();
    }
  }
  /**
   * @TODO: [activate description]
   *
   * @return  {[type]}  [description]
   */


  (0, _createClass2["default"])(MapHover, [{
    key: "activate",
    value: function activate() {
      if (!this.listenerKey) {
        this.listenerKey = this.map.on('pointermove', this.getHoverFunction(), this); //this.map.on('pointermove', this.changeFeatureStyles(), this);
      }
    } // end of "activate()"

    /**
     * @TODO: [deactivate description]
     *
     * @return  {[type]}  [description]
     */

  }, {
    key: "deactivate",
    value: function deactivate() {
      if (this.listenerKey) {
        (0, _Observable.unByKey)(this.listenerKey);
        this.listenerKey = false;
      }
    } // end of "deactivate()"

    /**
     * @TODO: [isActive description]
     *
     * @return  {[type]}  [description]
     */

  }, {
    key: "isActive",
    value: function isActive() {
      if (this.listenerKey) {
        return true;
      }

      return false;
    } // end of "getState()"

    /**
     * @TODO: [getHoverFunction description]
     *
     * @return  {[type]}  [description]
     */

  }, {
    key: "getHoverFunction",
    value: function getHoverFunction() {
      var self = this;
      return function (event) {
        var hovered,
            clustered,
            tooltipContent,
            tooltipHelper,
            features,
            tooltipLength,
            resolution,
            canvas,
            mapData = self.options.mapController.data,
            proxy = self.options.mapController.proxy;
        clustered = false;
        hovered = self.map.forEachFeatureAtPixel(event.pixel, function (feature, layer) {
          return {
            feature: feature,
            layer: layer
          };
        });
        resolution = self.map.getView().getResolution();

        if (!hovered) {
          self.hoverTooltip.hide();
          canvas = document.querySelector(".ol-viewport");
          jQuery(canvas).css('cursor', 'default');

          if (mapData.hover_popups === '1' && mapData.hover_popups_stay != '1') {
            window.c4gMapsPopup.$popup.removeClass(_c4gMapsConstant.cssConstants.ACTIVE);
          }

          if (self.lastHoveredFeature && self.lastFeatureStyle) {
            self.lastHoveredFeature.setStyle(false);
            self.lastHoveredFeature = null;
          }

          return false;
        }

        canvas = document.querySelector(".ol-viewport");
        jQuery(canvas).css('cursor', 'pointer');

        if (hovered.feature && typeof hovered.feature.get === 'function' && hovered.feature.get('features')) {
          if (hovered.feature.get('features')[1]) {
            clustered = true;
          } else {
            hovered.feature = hovered.feature.get('features')[0];
          }
        }

        if (hovered.feature.getGeometry() && hovered.feature.getGeometry().getType() === 'LineString') {
          return false;
        }

        if (hovered.feature.get("hover_location") || self.lastHoveredFeature && self.lastHoveredFeature.get("hover_location")) {
          if (self.lastHoveredFeature && hovered.feature === self.lastHoveredFeature) {
            return false;
          } //set back styles when the features are not hovered anymore


          if (self.lastFeatureStyle) {
            if (self.lastHoveredFeature) {
              if (hovered.feature !== self.lastHoveredFeature) {
                if (self.lastFeatureStyle) {
                  self.lastHoveredFeature.setStyle(self.lastFeatureStyle); //console.log("Changed back feature style");
                } else if (self.lastLayerStyle) {
                  self.lastHoveredFeature.setStyle(self.lastLayerStyle); //console.log("Changed back layer-feature style");
                }
              }
            }
          }

          if (hovered.feature && (0, _typeof2["default"])(hovered.feature.getStyleFunction) && typeof hovered.feature.getStyleFunction === 'function' && typeof hovered.feature.getStyleFunction() === 'function') {
            self.lastHoveredFeature = hovered.feature;

            if (!(self.lastFeatureStyle = hovered.feature.getStyle())) {
              self.lastLayerStyle = hovered.layer.getStyle();
              self.lastFeatureStyle = self.lastLayerStyle(self.lastHoveredFeature);
            } //TODO get onhover style from db (vllt schon in proxy drin?)


            if (hovered.feature.get('hover_style') && proxy.locationStyleController.arrLocStyles[hovered.feature.get("hover_style")]) {
              if (proxy.locationStyleController.arrLocStyles[hovered.feature.get("hover_style")].fnStyleFunction) {
                hovered.feature.setStyle(Function("feature", "data", "map", proxy.locationStyleController.arrLocStyles[hovered.feature.get("hover_style")].fnStyleFunction)(hovered.feature));
              } else {
                var style = proxy.locationStyleController.arrLocStyles[hovered.feature.get("hover_style")].style(hovered.feature);
                hovered.feature.setStyle(style);
              }
            }
          } else if (hovered.layer && (0, _typeof2["default"])(hovered.layer.getStyleFunction) && typeof hovered.layer.getStyleFunction === 'function' && typeof hovered.layer.getStyleFunction() === 'function') {
            if (hovered.feature) {
              self.lastHoveredFeature = hovered.feature;
            } else {
              self.lastHoveredFeature = hovered.layer.getSource().getFeatures()[0];
              self.lastHoveredFeature = self.lastHoveredFeature.get('features')[0];
            }

            self.lastLayerStyle = hovered.layer.getStyle();
            self.lastFeatureStyle = self.lastLayerStyle(self.lastHoveredFeature);

            if (hovered.feature.get('hover_style')) {
              if (!proxy.locationStyleController.arrLocStyles[hovered.feature.get("hover_style")]) {
                var arrIds = [];
                arrIds.push(hovered.feature.get("hover_style"));
                proxy.locationStyleController.loadLocationStyles(arrIds);
                self.lastHoveredFeature = null;
                return null;
              }

              if (proxy.locationStyleController.arrLocStyles[hovered.feature.get("hover_style")].fnStyleFunction) {
                hovered.feature.setStyle(Function("feature", "data", "map", proxy.locationStyleController.arrLocStyles[hovered.feature.get("hover_style")].fnStyleFunction)(hovered.feature));
              } else {
                var _style = proxy.locationStyleController.arrLocStyles[hovered.feature.get("hover_style")].style(hovered.feature);

                hovered.feature.setStyle(_style);
              }
            }
          }
        }

        if (hovered && hovered.feature && hovered.feature.get('styleUrl')) {
          //if this property is set, we have a feature that has none of our styles => no tooltip
          return false;
        } // catch the case the layer is a baselayer (vector tiles)


        if (hovered && hovered.layer && hovered.layer.type === "VECTOR_TILE") {
          return false;
        } // set hover tooltips


        tooltipContent = false;

        if (!clustered && hovered.feature && typeof hovered.feature.get === 'function' && (hovered.feature.get('tooltip') || hovered.feature.get('graphicTitle'))) {
          tooltipContent = hovered.feature.get('tooltip');

          if (!tooltipContent) {
            tooltipContent = hovered.feature.get('graphicTitle');
          } else if ((0, _typeof2["default"])(tooltipContent) === 'object' && tooltipContent.element && tooltipContent.element.childNodes[1]) {
            tooltipContent = tooltipContent.element.childNodes[1].innerHTML;
          } // @TODO: Check & fix

        } else if (hovered.feature && (0, _typeof2["default"])(hovered.feature.getStyleFunction) && hovered.feature.get('locstyle') && proxy.locationStyleController.arrLocStyles && proxy.locationStyleController.arrLocStyles[hovered.feature.get('locstyle')] && proxy.locationStyleController.arrLocStyles[hovered.feature.get('locstyle')].tooltip) {
          tooltipContent = proxy.locationStyleController.arrLocStyles[hovered.feature.get('locstyle')].tooltip; // @TODO: Check
        } else if (hovered.layer && (0, _typeof2["default"])(hovered.layer.getStyleFunction) && typeof hovered.layer.getStyleFunction === 'function' && typeof hovered.layer.getStyleFunction() === 'function' && proxy.locationStyleController.arrLocStyles && proxy.locationStyleController.arrLocStyles[hovered.layer.getStyleFunction()()] && proxy.locationStyleController.arrLocStyles[hovered.layer.getStyleFunction()()].tooltip) {
          tooltipContent = proxy.locationStyleController.arrLocStyles[hovered.layer.getStyleFunction()()].tooltip;
        } else if (hovered.layer && typeof hovered.layer.getStyleFunction === 'function' && typeof hovered.layer.getStyleFunction() === 'function' && proxy.locationStyleController.arrLocStyles && proxy.locationStyleController.arrLocStyles[hovered.layer.getStyleFunction()(null, null, 1)] && proxy.locationStyleController.arrLocStyles[hovered.layer.getStyleFunction()(null, null, 1)].tooltip) {
          tooltipContent = proxy.locationStyleController.arrLocStyles[hovered.layer.getStyleFunction()(null, null, 1)].tooltip;
        } else if (hovered.layer && hovered.layer.tooltip) {
          tooltipContent = hovered.layer.tooltip;
        }

        if (clustered && hovered.feature.get('features')) {
          features = hovered.feature.get('features');

          if (features[0].get('tooltip') && features[0].get('tooltip_length')) {
            tooltipContent = features[0].get('tooltip');
            tooltipLength = parseInt(features[0].get('tooltip_length'));

            for (var i = 1; i < features.length; i++) {
              if (features[i].get('tooltip') && features[i].get('tooltip') != '') {
                tooltipContent = tooltipContent + ', ' + features[i].get('tooltip');
              }
            }

            if (tooltipContent.length > tooltipLength + 3) {
              if (tooltipContent = tooltipContent.slice(0, tooltipLength)) {
                tooltipContent = tooltipContent + '...';
              }
            }
          } else if (hovered.layer.tooltip && hovered.layer.tooltip_length) {
            tooltipHelper = tooltipContent;
            tooltipContent = '';
            tooltipLength = parseInt(hovered.layer.tooltip_length);

            for (i = 0; i < features.length; i++) {
              var singleTooltip = _c4gMapsUtils.utils.replaceAllPlaceholders(tooltipHelper, features[i], hovered.layer, mapData.lang);

              if (singleTooltip != '') {
                if (tooltipContent == '') tooltipContent = singleTooltip;else tooltipContent = tooltipContent + ', ' + singleTooltip;
              }
            }

            if (tooltipContent.length > tooltipLength + 3) {
              if (tooltipContent = tooltipContent.slice(0, tooltipLength)) {
                tooltipContent = tooltipContent + '...';
              }
            }
          }
        }

        if (tooltipContent) {
          tooltipContent = _c4gMapsUtils.utils.decodeGeoJsonProperty(tooltipContent); // replace placeholders if possible

          if (hovered.feature.get('features')) {}

          tooltipContent = _c4gMapsUtils.utils.replaceAllPlaceholders(tooltipContent, hovered.feature, hovered.layer, mapData.lang);

          if (tooltipContent.trim()) {
            // popup config
            self.hoverTooltip.setPosition(event.coordinate);
            self.hoverTooltip.setContent(tooltipContent);
            self.hoverTooltip.show();
          } else {
            self.hoverTooltip.hide();
          }
        } else {
          self.hoverTooltip.hide();
        }

        if (mapData.hover_popups === '1' && !clustered && hovered.feature) {
          var popupInfos = {};

          if (hovered.feature.get('popup')) {
            popupInfos = hovered.feature.get('popup');
          } else if (hovered.feature.get('loc_linkurl')) {
            return;
          } else if (hovered.layer && hovered.layer.popup) {
            popupInfos = hovered.layer.popup;
          } else {
            return;
          }

          var coord = hovered.feature.getGeometry().getCoordinates();

          if (!coord || coord && coord[0] && coord[0].length) {
            var extent = hovered.feature.getGeometry().getExtent();
            coord = self.map.getCoordinateFromPixel(event.pixel);
            coord = [(extent[0] + extent[2]) / 2, (extent[1] + extent[3]) / 2];
          }

          window.c4gMapsPopup.popup.setPosition(coord);

          if (popupInfos.content) {
            self.options.mapController.proxy.popupController.addPopUp(popupInfos.content);

            if (self.options.mapController.proxy.mapData.popupHandling !== '3') {
              window.c4gMapsPopup.$content.html('');
              window.c4gMapsPopup.$popup.addClass(_c4gMapsConstant.cssConstants.ACTIVE).addClass(_c4gMapsConstant.cssConstants.LOADING);
              window.c4gMapsPopup.spinner.show();
            }

            if (popupInfos.async === false || popupInfos.async == '0') {
              var objPopup = {};
              objPopup.popup = popupInfos;
              objPopup.feature = hovered.feature;
              objPopup.layer = hovered.layer; // Call the popup hook for plugin specific popup content

              if (window.c4gMapsHooks !== undefined && (0, _typeof2["default"])(window.c4gMapsHooks.proxy_fillPopup) === 'object') {
                _c4gMapsUtils.utils.callHookFunctions(window.c4gMapsHooks.proxy_fillPopup, {
                  popup: objPopup,
                  mapController: self.options.mapController
                });
              }

              self.options.mapController.proxy.popupController.setPopup(objPopup);
            } else {
              jQuery.ajax({
                dataType: "json",
                url: self.options.mapController.proxy.api_infowindow_url + '/' + popupInfos.content
              }).done(function (data) {
                var popupInfo = {
                  async: popupInfos.async,
                  content: data.content,
                  popup: popupInfos.popup,
                  routing_link: popupInfos.routing_link
                };
                var objPopup = {};
                objPopup.popup = popupInfo;
                objPopup.feature = hovered.feature;
                objPopup.layer = hovered.layer; // Call the popup hook for plugin specific popup content

                if (window.c4gMapsHooks !== undefined && (0, _typeof2["default"])(window.c4gMapsHooks.proxy_fillPopup) === 'object') {
                  _c4gMapsUtils.utils.callHookFunctions(window.c4gMapsHooks.proxy_fillPopup, {
                    popup: objPopup,
                    mapController: self.options.mapController
                  });
                }

                self.options.mapController.proxy.popupController.setPopup(objPopup);
              });
            }
          } else {
            if (self.options.mapController.proxy.mapData.popupHandling !== '3') {
              window.c4gMapsPopup.$popup.removeClass(_c4gMapsConstant.cssConstants.ACTIVE);
            } else {
              self.options.mapController.proxy.popupController.close();
            }
          }
        }
      };
    } // end of "getHoverFunction()"

  }, {
    key: "changeFeatureStyles",
    value: function changeFeatureStyles() {//TODO: change style of features which are hovered and have the option to change style on hover enabled
    }
  }]);
  return MapHover;
}();

exports.MapHover = MapHover;

/***/ }),

/***/ "./Resources/public/js/c4g-maps-misc-spinner.js":
/*!******************************************************!*\
  !*** ./Resources/public/js/c4g-maps-misc-spinner.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Spinner = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _c4gMapsConstant = __webpack_require__(/*! ./c4g-maps-constant */ "./Resources/public/js/c4g-maps-constant.js");

/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
'use strict';

var Spinner = /*#__PURE__*/function () {
  /**
   * @TODO
   * [Spinner description]
   *
   * @constructor
   *
   * @param {Object=} opt_options Control options.
   */
  function Spinner(opt_options) {
    (0, _classCallCheck2["default"])(this, Spinner);
    var options, target, spinnerSpan;
    options = opt_options || {}; // default options

    options = jQuery.extend({
      className: '',
      target: '.' + _c4gMapsConstant.cssConstants.OL_VIEWPORT
    }, options);

    if (options.className) {
      options.className = ' ' + options.className;
    }

    this.element = document.createElement('div');
    this.element.className = _c4gMapsConstant.cssConstants.SPINNER + options.className + ' ' + _c4gMapsConstant.cssConstants.HIDE;
    jQuery(options.target).append(this.element);
    spinnerSpan = document.createElement('span');
    spinnerSpan.className = _c4gMapsConstant.cssConstants.ICON + ' ' + _c4gMapsConstant.cssConstants.ANIMATION_SPIN;
    this.element.appendChild(spinnerSpan);
    this.additionalActivationCounter = 0;
  }

  (0, _createClass2["default"])(Spinner, [{
    key: "show",
    value: function show() {
      if (jQuery(this.element).hasClass(_c4gMapsConstant.cssConstants.HIDE)) {
        jQuery(this.element).removeClass(_c4gMapsConstant.cssConstants.HIDE);
      } else {
        this.additionalActivationCounter += 1;
      }
    }
  }, {
    key: "hide",
    value: function hide() {
      if (jQuery(this.element).hasClass(_c4gMapsConstant.cssConstants.HIDE)) {//console.warn('Spinner is already hidden.');
      } else {
        if (this.additionalActivationCounter === 0) {
          jQuery(this.element).addClass(_c4gMapsConstant.cssConstants.HIDE);
        } else {
          this.additionalActivationCounter -= 1;
        }
      }
    }
  }]);
  return Spinner;
}();

exports.Spinner = Spinner;

/***/ }),

/***/ "./Resources/public/js/c4g-maps-misc-tooltippopup.js":
/*!***********************************************************!*\
  !*** ./Resources/public/js/c4g-maps-misc-tooltippopup.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.TooltipPopUp = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _c4gMapsConstant = __webpack_require__(/*! ./c4g-maps-constant */ "./Resources/public/js/c4g-maps-constant.js");

var _ol = __webpack_require__(/*! ol */ "./node_modules/ol/index.js");

/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
'use strict';

var TooltipPopUp = /*#__PURE__*/function () {
  /**
   * @TODO
   * [TooltipPopUp description]
   *
   * @constructor
   *
   * @param {Object=} opt_options Control options.
   */
  function TooltipPopUp(opt_options) {
    (0, _classCallCheck2["default"])(this, TooltipPopUp);
    var self, addClassName, closeButton;
    self = this;
    this.options = opt_options || {}; // default options

    this.options = jQuery.extend({
      // className: ''
      // closeFunction: null
      // map: null
      horizontal: false,
      closeable: false,
      offset: [1, -1],
      position: [0, 0]
    }, this.options); // prepare additional classes

    addClassName = '';

    if (this.options.className) {
      addClassName = ' ' + this.options.className;
    }

    if (this.options.horizontal) {
      addClassName += ' ' + _c4gMapsConstant.cssConstants.HORIZONTAL;
    }

    if (this.options.closeable) {
      addClassName += ' ' + _c4gMapsConstant.cssConstants.CLOSEABLE;
    }

    this.element = document.createElement('div');
    this.element.className = _c4gMapsConstant.cssConstants.TOOLTIP_POPUP + addClassName;

    if (this.options.closeable) {
      closeButton = document.createElement('button');
      closeButton.className = _c4gMapsConstant.cssConstants.ICON + ' ' + _c4gMapsConstant.cssConstants.POPUP_CLOSE;
      this.element.appendChild(closeButton);
      jQuery(closeButton).click(function () {
        self.close();
      });
    }

    this.contentContainer = document.createElement('div');
    this.element.appendChild(this.contentContainer);
    this.overlay = new _ol.Overlay({
      element: this.element,
      insertFirst: false,
      offset: this.options.offset,
      positioning: this.options.orientation
    });

    if (this.options.map) {
      this.options.map.addOverlay(this.overlay);
    }

    if (this.options.position) {
      this.overlay.setPosition(this.options.position);
    }
  }

  (0, _createClass2["default"])(TooltipPopUp, [{
    key: "close",
    value: function close() {
      if (typeof this.options.closeFunction === 'function') {
        this.options.closeFunction();
      }

      if (this.options.map) {
        this.options.map.removeOverlay(this.overlay);
      }
    }
    /**
     * @TODO
     * [show description]
     *
     * @return  {[type]}  [description]
     */

  }, {
    key: "show",
    value: function show() {
      if (jQuery(this.element).hasClass(_c4gMapsConstant.cssConstants.HIDE)) {
        jQuery(this.element).removeClass(_c4gMapsConstant.cssConstants.HIDE);
      }
    }
    /**
     * @TODO
     * [hide description]
     *
     * @return  {[type]}  [description]
     */

  }, {
    key: "hide",
    value: function hide() {
      if (!jQuery(this.element).hasClass(_c4gMapsConstant.cssConstants.HIDE)) {
        jQuery(this.element).addClass(_c4gMapsConstant.cssConstants.HIDE);
      }
    }
    /**
     * @TODO
     * [getContent description]
     *
     */

  }, {
    key: "getContent",
    value: function getContent() {
      return this.contentContainer.innerHTML;
    }
    /**
     * @TODO
     * [getPosition description]
     *
     */

  }, {
    key: "getPosition",
    value: function getPosition() {
      return this.overlay.getPosition();
    }
    /**
     * @TODO
     * [setContent description]
     *
     * @param  {[type]}  content  [description]
     */

  }, {
    key: "setContent",
    value: function setContent(content) {
      this.contentContainer.innerHTML = content;
    }
    /**
     * @TODO
     * [setPosition description]
     *
     * @param  {[type]}  coordinates  [description]
     */

  }, {
    key: "setPosition",
    value: function setPosition(coordinates) {
      this.overlay.setPosition(coordinates);
    }
  }]);
  return TooltipPopUp;
}(); // End of "add methods to TooltipPopUp"


exports.TooltipPopUp = TooltipPopUp;

/***/ }),

/***/ "./Resources/public/js/c4g-maps-popup-info-de.js":
/*!*******************************************************!*\
  !*** ./Resources/public/js/c4g-maps-popup-info-de.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.trim = trim;
exports.isMobile = isMobile;
exports.fnHeader = fnHeader;
exports.fnFooter = fnFooter;
exports.fnGetTranslate_Type = fnGetTranslate_Type;
exports.fnArztInfo = fnArztInfo;
exports.fnKraftwerkInfo = fnKraftwerkInfo;
exports.fnWertstoffinfo = fnWertstoffinfo;
exports.fnAdditionalBuildingInfos = fnAdditionalBuildingInfos;
exports.fnSicherheitAdditional = fnSicherheitAdditional;
exports.fnWreckInfo = fnWreckInfo;
exports.fnKlosterAdditional = fnKlosterAdditional;
exports.fnContentSports = exports.fnContentStreetsTraffic = exports.fnContentHydrants = exports.fnContentShipping = exports.fnContentCuisine = exports.fnContentEmergency = exports.fnContentInformationCity = exports.fnContentStorage = exports.fnContentAmenity = exports.fnContentTourism = exports.fnContentBarriers = exports.fnContentHistoric = exports.fnContentPetrol = exports.fnContentRoute = exports.fnMessstation = exports.fnContentLanduse = exports.fnContentProtectedArea = exports.fnContentNatural = exports.fnContentAerodrome = exports.fnContent = exports.fnReducedInfoPopup = exports.fnStandardInfoPopup = void 0;

/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
function trim(b) {
  return b.replace(/^\s+/, "").replace(/\s+$/, "");
}

function isMobile() {
  return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|android|ipad|playbook|silk/i.test(navigator.userAgent || navigator.vendor || window.opera) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test((navigator.userAgent || navigator.vendor || window.opera).substr(0, 4));
}

function translate(b) {
  var a = trim(b);
  return "yes" == a || "Yes" == a ? "Ja" : "no" == a ? "Nein" : "No" == a ? "nein" : "limited" == a ? "Eingeschr\xE4nkt" : "designated" == a ? "Ja" : "wood" == a ? "Holz" : "metal" == a ? "Metall" : "concrete" == a ? "Beton" : "plastic" == a ? "Plastik" : "stone" == a ? "Stein" : "steel" == a ? "Stahl" : "brick" == a ? "Ziegel" : "reinforced_concrete" == a ? "Stahlbeton" : "masonry" == a ? "Mauerwerk" : b;
}

var fnStandardInfoPopup = function fnStandardInfoPopup(feature, imageSrc) {
  var attr = feature.getProperties();
  var result = "";
  result += fnHeader(attr, imageSrc);
  result += fnContent(attr);
  result += fnFooter(attr, feature.get("osm_type") + "/" + feature.getId());
  result = '<div class="c4g_popup_text">' + result + "</div>";
  return result;
},
    fnReducedInfoPopup = function fnReducedInfoPopup(b, a) {
  var c = b.getProperties(),
      d = "",
      e = !1,
      f;
  f = "function" === typeof a ? a.call(b)[0].getImage().getSrc() : a.getImage().getSrc();
  if ("restaurant" == c.amenity || "pub" == c.amenity || "biergarten" == c.amenity) e = !0;
  "hotel" == c.tourism && (e = !0);
  "guest_house" == c.tourism && (e = !0);
  "chalet" == c.tourism && (e = !0);
  "hostel" == c.tourism && (e = !0);
  "alpine_hut" == c.tourism && (e = !0);
  if ("artwork" == c.tourism || "artwork" == c.amenity) e = !0;
  if ("museum" == c.tourism || "museum" == c.amenity) e = !0;
  "cinema" == c.amenity && (e = !0);
  "theatre" == c.amenity && (e = !0);
  if ("attraction" == c.amenity || "fountain" == c.amenity || "monument" == c.historic || "city_gate" == c.historic || "ruins" == c.historic || "castle" == c.historic || "attraction" == c.tourism) e = !0;
  "playground" == c.leisure && (e = !0);
  c.aerialway && (e = !0);
  if ("swimming_pool" == c.amenity || "swimming_pool" == c.leisure || "swimming" == c.sport) e = !0;
  "station" == c.railway && (e = !0);
  "swimming" == c.sport && (e = !0);
  "swimming_pool" == c.leisure && (e = !0);
  "swimming_pool" == c.amenity && (e = !0);
  "waterpark" == c.leisure && (e = !0);
  c.water_park && (e = !0);
  "sports_centre" == c.leisure && (e = !0);

  switch (e) {
    case !1:
      d += fnHeader(c, f);
      d += fnContent(c);
      d += fnFooter(c, b.get("osm_type") + "/" + b.getId());
      break;

    case !0:
      d += fnHeader(c, f);
  }

  return '<div class="c4g_popup_text">' + d + "</div>";
};

exports.fnReducedInfoPopup = fnReducedInfoPopup;
exports.fnStandardInfoPopup = fnStandardInfoPopup;

function fnHeader(b, a) {
  var c = "",
      d = "32px";

  if (b.name || b["piste:name"] || b["xmas:name"] || b["xmas:location"]) {
    if (b.name) var e = b.name;
    b["piste:name"] && (e = b["piste:name"]);
    b["xmas:name"] && (e = b["xmas:name"]);
    b["xmas:location"] && (e = b["xmas:location"]);
    c += a ? '<img src="' + a + '" width="' + d + '" name="' + e + '" alt="' + e + '"><div class="c4g_popup_header_featurename">' + e + "</div>" : '<name="' + e + '" alt="' + e + '"><div class="c4g_popup_header_featurename">' + e + "</div>";
  } else a && (c += '<img src="' + a + '" width="' + d + '" name="' + a + '" alt="' + a + '">');

  c += fnGetTranslate_Type(b);
  return '<div class="c4g_popup_header">' + c + "</div>";
}

function fnFooter(b, a) {
  var c = "",
      d = !1;
  b["addr:housename"] && (c += "Geb\xE4udename: " + b["addr:housename"] + "<br/>", d = !0);
  b["addr:floor"] ? (c += "Etage: " + b["addr:floor"] + "<br/>", d = !0) : b["addr:level"] && (c += "Etage: " + b["addr:level"] + "<br/>", d = !0);
  b["addr:street"] && (c += b["addr:street"], c = b["addr:housenumber"] ? c + (" " + b["addr:housenumber"] + "<br/>") : c + "<br/>", d = !0);
  b["addr:postcode"] && (c += b["addr:postcode"] + " ");
  b["addr:city"] && (c += b["addr:city"] + "<br/>", d = !0);
  if (b.sqkm) if (b.sqkm = "" + b.sqkm, 3 < b.sqkm.length) {
    var e = b.sqkm.length % 3,
        f = 0 < e ? b.sqkm.substring(0, e) : "";

    for (var i = 0; i < Math.floor(b.sqkm.length / 3); i++) {
      f = 0 == e && 0 == i ? f + b.sqkm.substring(e + 3 * i, e + 3 * i + 3) : f + ("." + b.sqkm.substring(e + 3 * i, e + 3 * i + 3));
    }

    c += "Fl\xE4che: " + f + " Km\xB2<br/>";
  } else c += "Fl\xE4che " + b.sqkm + "<br/>";
  b["contact:phone"] && (c = isMobile() ? c + ('Telefon: <a href="tel:' + b["contact:phone"] + '">' + b["contact:phone"] + "</a><br/>") : c + ('Telefon: <a href="callto:' + b["contact:phone"] + '">' + b["contact:phone"] + "</a><br/>"), d = !0);
  b.phone && (c = isMobile() ? c + ('Telefon: <a href="tel:' + b.phone + '">' + b.phone + "</a><br/>") : c + ('Telefon: <a href="callto:' + b.phone + '">' + b.phone + "</a><br/>"), d = !0);
  b["contact:fax"] ? (c += "Telefax: " + b["contact:fax"] + "<br/>", d = !0) : b.fax && (c += "Telefax: " + b.fax + "<br/>", d = !0);
  b["contact:email"] ? (c += 'E-Mail-Adresse: <a href="mailto:' + b["contact:email"] + '">' + b["contact:email"] + "</a><br/>", d = !0) : b.email && (c += 'E-Mail-Adresse: <a href="mailto:' + b.email + '">' + b.email + "</a><br/>", d = !0);
  d && (c += "<br/>");

  if (b.opening_hours) {
    d = b.opening_hours;

    for (e = 0; 0 == e || 0 < d.indexOf(";");) {
      d = d.replace("PH", "FT"), d = d.replace("Tu", "Di"), d = d.replace("We", "Mi"), d = d.replace("Th", "Do"), d = d.replace("Su", "So"), d = d.replace("Mar", "M\xE4r"), d = d.replace("May", "Mai"), d = d.replace("Oct", "Okt"), d = d.replace("Dec", "Dez"), d = d.replace('"Please make a reservation"', '"Bitte vereinbaren Sie einen Termin"'), d = d.replace("off", "ausgenommen"), 0 < e && (d = d.replace(";", "<br/>")), e++;
    }

    c += "\xD6ffnungszeiten: <br/><div class=\"c4g_open_text\">" + d + "</div>";
    c = 0 < d.indexOf("FT") ? c + "(FT = Feiertag)<br/>" : c + "<br/>";
  }

  if (b["xmas:opening_hours"]) {
    d = b["xmas:opening_hours"];

    for (e = 0; 0 == e || 0 < d.indexOf(";");) {
      d = d.replace("PH", "FT"), d = d.replace("Tu", "Di"), d = d.replace("We", "Mi"), d = d.replace("Th", "Do"), d = d.replace("Su", "So"), d = d.replace("Mar", "M\xE4r"), d = d.replace("May", "Mai"), d = d.replace("Oct", "Okt"), d = d.replace("Dec", "Dez"), 0 < e && (d = d.replace(";", "<br/>")), e++;
    }

    c += "\xD6ffnungszeiten: <br/><div class=\"c4g_open_text\">" + d + "</div>";
    c = 0 < d.indexOf("FT") ? c + "(FT = Feiertag)<br/>" : c + "<br/>";
  }

  b["xmas:url"] && (d = "", d = b["xmas:url"], trim(d), -1 == d.indexOf("https://", 0) && -1 == d.indexOf("http://", 0) && (d = "http://" + d), c += 'Website: <a href="' + d + '" target="_blank">Link zur Website</a><br/>');
  b["contact:website"] ? (d = b["contact:website"], trim(d), -1 == d.indexOf("https://", 0) && -1 == d.indexOf("http://", 0) && (d = "http://" + d), c += 'Website: <a href="' + d + '" target="_blank">Link zur Website</a><br/>') : b.website && (d = b.website, trim(d), -1 == d.indexOf("https://", 0) && -1 == d.indexOf("http://", 0) && (d = "http://" + d), c += 'Website: <a href="' + d + '" target="_blank">Link zur Website</a><br/>');
  b.wikipedia && (d = b.wikipedia, trim(d), -1 == d.indexOf("https://", 0) && -1 == d.indexOf("http://", 0) && (d = "https://wikipedia.org/wiki/" + d), c += 'Wikipedia: <a href="' + d + '" target="_blank">Link zu Wikipedia</a><br/>');
  b.wikimedia_commons && (d = b.wikimedia_commons, trim(d), -1 == d.indexOf("https://", 0) && -1 == d.indexOf("http://", 0) && (d = "https://commons.wikimedia.org/wiki/" + d), c += 'Wikimedia: <a href="' + d + '" target="_blank">Link zu Wikimedia</a><br/>');
  b["contact:webcam"] && (d = b["contact:webcam"], trim(d), -1 == d.indexOf("https://", 0) && -1 == d.indexOf("http://", 0) && (d = "http://" + d), c += 'Webcam: <a href="' + d + '" target="_blank">Link zur Webcam</a><br/>');
  b.image && (c += '<img src="' + b.image + '" width="200px" name="' + b.name + '" alt="' + b.name + '"><br/>');
  d = "";
  b.internet_access && (d += "Internetzugriff: " + translate(b.internet_access) + "<br/>");
  b["internet_access:fee"] && (d += "Internet Geb\xFChr: " + translate(b["internet_access:fee"]) + "<br/>");
  b["wifi_access:operator"] && (d += "wifi Betreiber: " + b["wifi_access:operator"] + "<br/>");
  b["wifi_access:technology"] && (d += "wifi Technologie: " + b["wifi_access:technology"] + "<br/>");
  b["wifi_access:ssid"] && (d += "wifi ssid: " + b["wifi_access:ssid"] + "<br/>");
  "" != d && (c += 'Internetzugang vorhanden<br/><div class="c4g_shop_internet_access">' + d + "</div><br/>");
  b.wheelchair && (c += "rollstuhlgeeignet: " + translate(b.wheelchair) + "<br/>");
  b["wheelchair:description"] && (c += "Beschreibung: " + b["wheelchair:description"] + "<br/>");
  b["wheelchair:entrance_width"] && (c += "Breite des Eingangs in CM: " + b["wheelchair:entrance_width"] + "<br/>");
  b["wheelchair:step_height"] && (c += "H\xF6he der Stufe am Eingang in CM: " + b["wheelchair:step_height"] + "<br/>");
  b["wheelchair:rooms"] && (c += "Anzahl rollstuhlgerechter R\xE4ume: " + b["wheelchair:rooms"] + "<br/>");
  b["wheelchair:places"] && (c += "Anzahl der Rollstuhlpl\xE4tze: " + b["wheelchair:places"] + "<br/>");
  b["cent:places"] && (c += "Anzahl der Rollstuhlpl\xE4tze: " + b["wheelchair:places"] + "<br/>");
  b["ramp:wheelchair"] && (c += "Rampe f\xFCr Rollstuhlfahrer: " + b["ramp:wheelchair"] + "<br/>");
  b["capacity:disabled"] && (c += "Behindertenparkpl\xE4tze: " + translate(b["capacity:disabled"]) + "<br/>");
  b["toilets:wheelchair"] && (c += "Behinderdengerechte Toilette: " + translate(b["toilets:wheelchair"]) + "<br/>");
  b.centralkey && (c += "Zentralschl\xFCssel: " + b.centralkey + "<br/>");
  b.note && (c += b.note + "<br/>");
  b.description && (c += b.description + "<br/>");
  b.operator && (c += "Betreiber: " + b.operator + "<br/>");
  b.ref && (c += "Referenz: " + b.ref + "<br/>");
  "yes" == b.lit && (c += "Dieses Objekt ist beleuchtet.<br/>");
  b.shop && (d = "", b.brand && (d += "Markenzeichen: " + b.brand + "<br/>"), b.sells && (d += "Verkaufs: " + b.sells + "<br/>"), b.origin && (d += "Herkunftsl\xE4nder: " + b.origin + "<br/>"), "yes" == b.wholesale && (d += "Gro\xDFh\xE4ndler: Ja<br/>"), "" != d && (c += 'Weitere Angaben zum Shop: <br/><div class="c4g_shop_text">' + d + "</div><br/>"));
  a && (d = a, trim(d), d = d.replace(/\./, "/"), c = c + "<br/>" + ('OSM:    <a href="http://www.openstreetmap.org/' + d + '" target="_blank">Link zur OpenStreetMap</a><br/>'));
  return c = '<div class="c4g_popup_footer">' + c + "</div>";
}

function fnGetTranslate_Type(b) {
  var a = "";
  if ("doctors" == b.amenity || "doctor" == b.healthcare) a += "Arzt<br/>";
  if ("hospital" == b.amenity || "clinic" == b.amenity || "hospital" == b.healthcare || "clinic" == b.healthcare) a = "yes" == b.emergency ? a + "Krankenhaus mit Notaufnahme<br/>" : a + "Krankenhaus<br/>";
  "dentist" == b.amenity && (a += "Zahnarzt<br/>");
  if ("pharmacy" == b.amenity || "pharmacy" == b["health_facility:type"]) a += "Apotheke<br/>";
  if ("physiotherapist" == b.healthcare || "yes" == b["health_speciality:physiotherapy"]) a += "Physiotherapeut<br/>";
  if ("occupational_therapist" == b.healthcare || "yes" == b["health_speciality:occupational_therapy"] || "yes" == b["health_specialty:occupational_therapy"]) a += "Ergotherapeut<br/>";
  if ("psychotherapist" == b.healthcare || "yes" == b["health_speciality:psychotherapy"]) a += "Psychotherapeut<br/>";
  "alternative" == b.healthcare && (a += "Alternativ- und Komplement\xE4rmediziner<br/>");
  "midwife" == b.healthcare && (a += "Hebamme<br/>");
  if ("speech_therapist" == b.healthcare || "yes" == b["health_speciality:speech_therapy"]) a += "Logop\xE4de<br/>";
  "yes" == b["health_speciality:music_therapy"] && (a += "Musiktherapeut<br/>");
  "veterinary" == b.amenity && (a += "Tierarzt<br/>");
  "fire_station" == b.amenity && (a += "Feuerwehrhaus<br/>");
  "fire_extinguisher" == b.emergency && (a += "Feuerl\xF6scher<br/>");
  "aed" == b.emergency && (a += "Mobiler Defibrilator<br/>");
  "defibrillator" == b.emergency && (a += "Mobiler Defibrilator<br/>");
  "phone" == b.emergency && (a += "Notrufs\xE4ule<br/>");
  "police" == b.amenity && (a += "Polizeiwache<br/>");
  "ambulance_station" == b.emergency && (a += "Rettungswache<br/>");
  "technical" == b.emergency_service && (a += "Technisches Hilfswerk<br/>");
  "water" == b.emergency_service && (a += "Wasserrettungsstation<br/>");
  "baywatch" == b.waterway && (a += "Wasserwacht<br/>");
  "air" == b.emergency_service && (a += "Rettungshubschrauber<br/>");
  "emergency_access_point" == b.highway && (a += "Notfallpunkt<br/>");
  if ("lifeboat_station" == b.amenity || "lifeboat_station" == b.emergency) a += "Rettungsbootstation<br/>";
  "life_ring" == b.emergency && (a += "Rettungsring<br/>");
  "siren" == b.emergency && (a += "Sirene<br/>");
  "life_ring" == b.amenity && (a += "Rettungsring<br/>");
  "rescue_station" == b.amenity && (a += "Rettungsstation<br/>");
  "fire_hydrant" == b.emergency && ("underground" == b["fire_hydrant:type"] ? a += "Unterflurhydrant<br/>" : "pillar" == b["fire_hydrant:type"] ? a += "\xDCberflurhydrant<br/>" : "wall" == b["fire_hydrant:type"] ? a += "Wandhydrant<br/>" : "pond" == b["fire_hydrant:type"] && (a += "Saugstelle<br/>"));
  "suction_point" == b.emergency && (a += "Saugstelle<br/>");
  "fire_water_pond" == b.emergency && (a += "L\xF6schteich<br/>");
  "mountain" == b.emergency_service && (a += "Bergrettungsstation<br/>");
  "water_tank" == b.emergency && (a += "L\xF6schwassertank<br/>");
  "container" == b.recycling_type && (a += "Recycling Container<br/>");
  "recycling" == b.amenity && "yes" == b["recycling:excrement"] || "pump-out" == b["seamark:small_craft_facility:category"] ? a += "Absaugstation<br/>" : "recycling" == b.amenity && (a += "Wertstoffhof<br/>");
  "yes" == b["diet:pescetarian"] ? a += "pescetarische Gerichte vorhanden<br/>" : "only" == b["diet:pescetarian"] && (a += "nur pescetarische Gerichte<br/>");
  "yes" == b["diet:vegetarian"] ? a += "vegetarische Gerichte vorhanden<br/>" : "only" == b["diet:vegetarian"] && (a += "nur vegetarische Gerichte<br/>");
  "yes" == b["diet:lacto_vegetarian"] ? a += "lacto-vegetarische Gerichte vorhanden<br/>" : "only" == b["diet:lacto_vegetarian"] && (a += "nur lacto-vegetarische Gerichte<br/>");
  "yes" == b["diet:ovo_vegetarian"] ? a += "ovo-vegetarische Gerichte vorhanden<br/>" : "only" == b["diet:ovo_vegetarian"] && (a += "nur ovo-vegetarische Gerichte<br/>");
  "yes" == b["diet:vegan"] ? a += "vegane Gerichte vorhanden<br/>" : "only" == b["diet:vegan"] && (a += "nur vegane Gerichte<br/>");
  "yes" == b["diet:fruitarian"] ? a += "frutarische Gerichte vorhanden<br/>" : "only" == b["diet:fruitarian"] && (a += "nur frutarische Gerichte<br/>");
  "yes" == b["diet:raw"] ? a += "rohk\xF6stliche Gerichte vorhanden<br/>" : "only" == b["diet:raw"] && (a += "nur rohk\xF6stliche Gerichte<br/>");
  "yes" == b["diet:gluten_free"] ? a += "glutenfreie Gerichte vorhanden<br/>" : "only" == b["diet:gluten_free"] && (a += "nur glutenfreie Gerichte<br/>");
  "yes" == b["diet:dairy_free"] ? a += "milchfreie Gerichte vorhanden<br/>" : "only" == b["diet:dairy_free"] && (a += "nur milchfreie Gerichte<br/>");
  "yes" == b["diet:lactose_free"] ? a += "laktosefreie Gerichte vorhanden<br/>" : "only" == b["diet:lactose_free"] && (a += "nur laktosefreie Gerichte<br/>");
  "yes" == b["diet:halal"] ? a += "Hal\u0101l Gerichte vorhanden<br/>" : "only" == b["diet:halal"] && (a += "nur Hal\u0101l Gerichte<br/>");
  "yes" == b["diet:kosher"] ? a += "koschere Gerichte vorhanden<br/>" : "only" == b["diet:kosher"] && (a += "nur koschere Gerichte<br/>");
  "pub" == b.amenity && (a += "Gastst\xE4tte<br/>");
  "bar" == b.amenity && (a += "Bar<br/>");
  "yes" == b.frozen_yogurt && (a += "Frozen Yogurt im Angebot<br/>");
  "yes" == b.slush_ice && (a += "Slush Ice im Angebot<br/>");
  "yes" == b.cake && (a += "Kuchenteilchen, Geb\xE4ck etc. im Angebot<br/>");
  "yes" == b.coffee && (a += "Kaffeegetr\xE4nke im Angebot<br/>");
  "yes" == b.drinks && (a += "Getr\xE4nke im Angebot<br/>");
  "biergarten" == b.amenity && (a += "Biergarten<br/>");
  "restaurant" == b.amenity && (a += "Restaurant<br/>");
  "fast_food" == b.amenity && (a += "Fast Food Restaurant<br/>");
  if (("cafe" == b.amenity || "coffee_shop" == b.amenity) && "ice_cream" != b.cuisine) a += "Caf\xE9, Bistro<br/>";
  if ("cafe" == b.amenity && "ice_cream" == b.cuisine || "ice_cream" == b.amenity) a += "Eiscafe<br/>";
  "alpine_hut" == b.tourism && (a += "Bergh\xFCtte<br/>");
  "aquarium" == b.tourism && (a += "Aquarium<br/>");
  "apartment" == b.tourism && (a += "Ferienwohnung<br/>");
  "attraction" == b.tourism && (a += "Sehensw\xFCrdigkeit<br/>");
  "artwork" == b.tourism && (a += "Skulptur<br/>");
  "camp_site" == b.tourism && (a += "Campingplatz<br/>");
  "caravan_site" == b.tourism && (a += "Wohnmobilstellplatz<br/>");
  "chalet" == b.tourism && (a += "Ferienwohnung /-haus<br/>");
  "gallery" == b.tourism && (a += "Kunstgalerie<br/>");
  "guest_house" == b.tourism && (a += "Pension, Gasthaus, Bed & Breakfast<br/>");
  "hostel" == b.tourism && (a += "Jugendherberge, Hostel<br/>");
  "hotel" == b.tourism && (a += "Hotel<br/>");
  "motel" == b.tourism && (a += "Motel<br/>");
  "museum" == b.tourism && (a += "Museum<br/>");
  "picnic_site" == b.tourism && (a += "Rast- und Picknickplatz<br/>");
  "theme_park" == b.tourism && (a += "Freizeit- oder Themenpark<br/>");
  "viewpoint" == b.tourism && (a += "Aussichtspunkt<br/>");
  "wilderness_hut" == b.tourism && (a += "Schutzh\xFCtte<br/>");
  "wine_cellar" == b.tourism && (a += "Weinkeller<br/>");
  "zoo" == b.tourism && (a += "Zoo / Tierpark<br/>", "enclosure" == b.zoo && (a += "mit Wildgehege<br/>"), "petting_zoo" == b.zoo && (a += "mit Streichelzoo<br/>"), "falconry" == b.zoo && (a += "mit Falknerei<br/>"));
  "trail_riding_station" == b.tourism && (a += "Wanderreitstation<br/>");
  "fishing" == b.club && (a += "Angelverein<br/>");
  "sport" == b.club && "fishing" == b.sport && (a += "fishing club<br/>");
  "amateur_radio" == b.club && (a += "Amateurfunker<br/>");
  "art" == b.club && (a += "Kunstverein<br/>");
  "astronomy" == b.club && (a += "Astronomieverein<br/>");
  "automobile" == b.club && (a += "Automobilverein<br/>");
  "board_games" == b.club && (a += "Brettspielverein<br/>");
  "card_games" == b.club && (a += "Kartenspielverein<br/>");
  "charity" == b.club && (a += "Charity-Verein<br/>");
  "chess" == b.club && (a += "Schachverein<br/>");
  "cinema" == b.club && (a += "Kinoverein<br/>");
  "cooking" == b.club && (a += "Kochverein<br/>");
  "culture" == b.club && (a += "Kulturverein<br/>");
  "doityourself" == b.club && (a += "doityourself-Verein<br/>");
  "equestrian" == b.club && (a += "Reitverein<br/>");
  "ethnic" == b.club && (a += "Ethnischer Verein<br/>");
  "fan" == b.club && (a += "Fanverein<br/>");
  "freemasonry" == b.club && (a += "Freimaurer-Verein<br/>");
  "game" == b.club && (a += "Spieleverein<br/>");
  "history" == b.club && (a += "Historischer-Verein / Verein f\xFCr Geschichte<br/>");
  "hunting" == b.club && (a += "Jagdverein<br/>");
  "linux" == b.club && (a += "Linux-Verein<br/>");
  "motorcycle" == b.club && (a += "Motorradverein<br/>");
  "music" == b.club && (a += "Musikverein<br/>");
  "nature" == b.club && (a += "Naturverein<br/>");
  "nudism" == b.club && (a += "Nudisten-Verein / FKK-Verein<br/>");
  "photography" == b.club && (a += "Fotografieverein<br/>");
  "politics" == b.club && (a += "Verein f\xFCr Politik<br/>");
  "relegion" == b.club && (a += "Politischer-Verein<br/>");
  "scout" == b.club && (a += "Pfadfinderin/Pfadfinder<br/>");
  "smoke" == b.club && (a += "Raucherverein<br/>");
  "sport" == b.club && (a += "Sportverein<br/>");
  "theatre" == b.club && (a += "Theaterverein<br/>");
  "veterans" == b.club && (a += "Veteranen<br/>");
  "amusement_arcade" == b.leisure && (a += "Spielhalle<br/>");
  "beach_resort" == b.leisure && (a += "Standbad<br/>");
  "bird_hide" == b.leisure && (a += "Vogelbeobachtungspunkt<br/>");
  "common" == b.leisure && (a += "\xD6ffentliche Gr\xFCnfl\xE4chen<br/>");
  "club" == b.leisure && (a += "Club/Verein<br/>");
  "dance" == b.leisure && (a += "Tanzen<br/>");
  "dog_park" == b.leisure && (a += "Hundepark<br/>");
  "firepit" == b.leisure && (a += "Feuerstelle<br/>");
  "fishing" == b.leisure && (a += "Angelstelle<br/>");
  "garden" == b.leisure && (a += "Garten<br/>");
  "golf_course" == b.leisure && (a += "Golfplatz<br/>");
  "hackerspace" == b.leisure && (a += "Ort f\xFCr Hackertreffen<br/>");
  "horse_riding" == b.leisure && (a += "Reitstall / Reiterhof<br/>");
  "ice_rink" == b.leisure && (a += "Eislaufbahn<br/>");
  "nature_reserve" == b.leisure && (a += "Naturschutzgebiet (NSG)<br/>");
  "park" == b.leisure && (a += "Gr\xFCnanlage<br/>");
  "miniature_golf" == b.leisure && (a += "Minigolf<br/>");
  "pitch" == b.leisure && (a += "Spielfeld<br/>");
  "pitch" == b.leisure && "yes" == b.building && (a += "Sporthalle<br/>");
  "playground" == b.leisure && "yes" == b.building ? a += "Spielscheune<br/>" : "playground" == b.leisure && (a += "Spielplatz<br/>");
  "social_club" == b.leisure && (a += "Treffpunkt f\xFCr Freizeitgruppen<br/>");
  "spa" == b.leisure && (a += "Heilbad / Spa<br/>");
  "sports_centre" == b.leisure && (a += "Sportzentrum<br/>");
  "climbing_adventure" == b.sport && (a += "Seilgarten<br/>");
  "stadium" == b.leisure && (a += "Stadion<br/>");
  "swimming_pool" == b.leisure && (a += "Schwimmbecken<br/>");
  "track" == b.leisure && (a += "Rennbahn<br/>");
  "water_park" == b.leisure && (a += "Wasserpark<br/>");
  "wildlife_hide" == b.leisure && (a += "Wildbeobachtungspunkt<br/>");
  "adult_gaming_centre" == b.leisure && (a += "Spielothek<br/>");
  "bowling_alley" == b.leisure && "10pin" == b.sport && (a += "Bowlingcenter<br/>");
  "bowling_alley" == b.leisure && "9pin" == b.sport && (a += "Kegelbahn<br/>");
  if ("karting" == b.sport || "motor" == b.sport) a += "Kart-/Motorsport<br/>";
  if ("darts" == b.sport || "dart" == b.sport) a += "Darts<br/>";
  if (b["piste:type"]) switch (b["piste:type"]) {
    case "skitour":
      a += "Piste f\xFCr Skitouren<br/>";
      break;

    case "downhill":
      a += "Skiabfahrt<br/>";
      break;

    case "sled":
      a += "Rodelberg / Rodelstrecke<br/>";
      break;

    case "nordic":
      a += "Langlauf Piste<br/>";
      break;

    case "hike":
      a += "Schneeschuh- und Winterwanderweg<br/>";
      break;

    case "snow_park":
      a += "Snow-Park<br/>";
  }
  if (b.sport) switch (b.sport) {
    case "surfing":
      a += "Surfen<br/>";
      break;

    case "kitesurfing":
      a += "Kitesurfen<br/>";
      break;

    case "water_ski":
      a += "Wasserski<br/>";
  }
  if (b.aerialway) switch (b.aerialway) {
    case "cable_bar":
      a += "Lift mit Gondeln<br/>";
      break;

    case "gondola":
      a += "Lift mit Gondeln<br/>";
      break;

    case "chair_lift":
      a += "Sessellift<br/>";
      break;

    case "mixed_lift":
      a += "Lift mit Sesseln und Gondeln<br/>";
      break;

    case "drag_lift":
      a += "Skilift<br/>";
      break;

    case "t-bar":
      a += "T-Lift<br/>";
      break;

    case "t-bar":
      a += "T-Lift (einseitig)<br/>";
      break;

    case "platter":
      a += "Lift mit Sitzscheibe<br/>";
      break;

    case "rope_tow":
      a += "B\xFCgellift<br/>";
      break;

    case "magic_carpet":
      a += "Bef\xF6rderungsband<br/>";
      break;

    default:
      a += "unbekannt";
  }
  "mosque" == b.building && (a += "Moschee<br/>");
  "synagogue" == b.building && (a += "Synagoge<br/>");
  "apartments" == b.building && (a += "Wohnung<br/>");
  "farm" == b.building && (a += "Farm<br/>");
  "hotel" == b.building && (a += "Hotel<br/>");
  "house" == b.building && (a += "Haus<br/>");
  "detached" == b.building && (a += "Freistehend<br/>");
  "residential" == b.building && (a += "Residenz<br/>");
  if ("domitory" == b.building || "residential plus" == b.building) a += "Wohnheim<br/>";
  "terrace" == b.building && (a += "Terrasse<br/>");
  "houseboat" == b.building && (a += "Hausboot<br/>");
  "bungalow" == b.building && (a += "Bungalow<br/>");
  "static_caravan" == b.building && (a += "Stehender Wohnwagen<br/>");
  "commercial" == b.building && (a += "Kommerziell<br/>");
  "retail" == b.building && (a += "Verkauf<br/>");
  "warehouse" == b.building && (a += "Lagerhaus<br/>");
  "bakehouse" == b.building && (a += "Backstube<br/>");
  "temple" == b.building && (a += "Tempel<br/>");
  "shrine" == b.building && (a += "Schrein<br/>");
  "civic" == b.building && (a += "B\xFCrgerlich<br/>");
  "stadium" == b.building && (a += "Stadium<br/>");
  "train_station" == b.building && (a += "Bahnhof<br/>");
  "university" == b.building && (a += "Universit\xE4t<br/>");
  "public" == b.building && (a += "\xD6ffentliches Geb\xE4ude<br/>");
  "bridge" == b.building && (a += "Br\xFCcke<br/>");
  "bunker" == b.building && (a += "Bunker<br/>");
  "cabin" == b.building && (a += "H\xFCtte<br/>");
  "conservatory" == b.building && (a += "Wintergarten<br/>");
  "construction" == b.building && (a += "Im Bau<br/>");
  "garage" == b.building && (a += "Garage<br/>");
  "garages" == b.building && (a += "Garagen<br/>");
  "greenhouse" == b.building && (a += "Gew\xE4chshaus<br/>");
  "hangar" == b.building && (a += "Hangar<br/>");
  "hut" == b.building && (a += "H\xFCtte<br/>");
  "pavillion" == b.building && (a += "Pavillion<br/>");
  "roof" == b.building && (a += "\xDCberdacht<br/>");
  "shed" == b.building && (a += "Gartenh\xE4uschen<br/>");
  "transformer_tower" == b.building && (a += "Transformator Turm<br/>");
  "service" == b.building && (a += "Service-Stelle<br/>");
  "kiosk" == b.building && (a += "Kiosk<br/>");
  "carport" == b.building && (a += "Carport<br/>");
  "ruins" == b.building && (a += "Ruinen<br/>");
  "gambling" == b.amenity && (a += "Spielhalle<br/>");
  "library" == b.amenity && (a += "B\xFCcherei<br/>");
  "fountain" == b.amenity && (a += "Brunnen<br/>");
  "attraction" == b.amenity && (a += "Sehensw\xFCrdigkeit<br/>");
  if ("social_centre" == b.amenity || "club" == b.amenity) a += "Verein / Club<br/>";
  "townhall" == b.amenity && (a += "Rathaus / B\xFCrgerhaus<br/>");
  "bench" == b.amenity && (a += "Parkbank<br/>");
  if ("grave_yard" == b.amenity || "cemetery" == b.landuse) a += "Friedhof<br/>";
  "post_box" == b.amenity && (a += "Briefkasten<br/>");
  "post_office" == b.amenity && (a += "Postamt<br/>");
  "telephone" == b.amenity && (a += "Telefon<br/>");
  "atm" == b.amenity && (a += "Geldautomat<br/>");
  "bank" == b.amenity && (a += "Bankfiliale<br/>");
  "toilets" == b.amenity && "yes" == b.diaper ? a += "\xD6ffentliche Toilette mit Wickeltisch<br/>" : "toilets" == b.amenity && (a += "\xD6ffentliche Toilette<br/>");
  "school" == b.amenity && "1" == b["isced:level"] ? a += "Grundschule<br/>" : "school" == b.amenity && "2" == b["isced:level"] ? a += "Sekundarstufe I<br/>" : "school" == b.amenity && "3" == b["isced:level"] ? a += "Sekundarstufe II<br/>" : "school" == b.amenity && (a += "Schule<br/>");
  "kindergarten" == b.amenity && (a += "Kindergarten<br/>");
  "internet_cafe" == b.amenity && (a += "Internetcaf\xE9<br/>");
  "daycare" == b.amenity && (a += "Kinder- und Jugendtagesst\xE4tte<br/>");
  "childcare" == b.amenity && (a += "Kinder- und Jugendtagesst\xE4tte<br/>");
  "university" == b.amenity && (a += "Universit\xE4t/Hochschule<br/>");
  "college" == b.amenity && (a += "Universit\xE4t/Hochschule<br/>");
  "shelter" == b.amenity && (a += "Unterstand<br/>");
  "bbq" == b.amenity && (a += "Grillplatz<br/>");
  "nightclub" == b.amenity && (a += "Diskothek / Nachtklub<br/>");
  "bicycle_parking" == b.amenity && (a += "Fahrradparkplatz<br/>");
  "bicycle_rental" == b.amenity && (a += "Fahrradverleih<br/>");
  "boat_sharing" == b.amenity && (a += "Bootsverleih<br/>");
  "car_sharing" == b.amenity && (a += "Car-Sharing<br/>");
  "cinema" == b.amenity && (a += "Kino<br/>");
  "swimming_pool" == b.amenity && (a += "Schwimmbad<br/>");
  if ("embassy" == b.amenity || "embassy" == b.diplomatic) a += "Botschaft<br/>";
  "embassy" == b.amenity && "consulate" == b.diplomatic && (a += "Konsulate<br/>");
  "embassy" == b.amenity && "consulate_general" == b.diplomatic && (a += "Generalkonsulate<br/>");
  "embassy" == b.amenity && "honorary_consulate" == b.diplomatic && (a += "Honorarkonsulate<br/>");
  "embassy" == b.amenity && "permanent_mission" == b.diplomatic && (a += "St\xE4ndige Vertretung<br/>");
  "embassy" == b.amenity && "delegation" == b.diplomatic && (a += "Delegation<br/>");
  "embassy" == b.amenity && "high_commission" == b.diplomatic && (a += "Hochkommissariat<br/>");
  "Barfusspfad" == b.amenity && (a += "Barfu\xDFpfad<br/>");
  "casino" == b.amenity && (a += "Casino<br/>");
  "spa" == b.amenity && (a += "Heilbad / Spa<br/>");
  "stables" == b.amenity && (a += "Reitstall / Reiterhof<br/>");
  "watering_place" == b.amenity && (a += "Wasserstelle / Tr\xE4nke<br/>");
  "yes" == b.watering_place && (a += "Wasserstelle / Tr\xE4nke<br/>");
  "water_point" == b.amenity && (a += "gro\xDFe Trinkwasserstelle<br/>");
  "taxi" == b.amenity && (a += "Taxi<br/>");
  "car_wash" == b.amenity && (a += "Autowaschanlage<br/>");
  "brothel" == b.amenity && (a += "Bordell, Freudenhaus<br/>");
  "stripclub" == b.amenity && (a += "Stripclub<br/>");
  "swingerclub" == b.amenity && (a += "Swingerclub<br/>");
  "planetarium" == b.amenity && (a += "Planetarium<br/>");
  "courthouse" == b.amenity && (a += "Gericht<br/>");
  "crematorium" == b.amenity && (a += "Krematorium<br/>");
  if ("crypt" == b.amenity || "crypt" == b.building) a += "Krypta<br/>";
  "hunting_stand" == b.amenity && (a += "Hochsitz<br/>");
  "photo_booth" == b.amenity && (a += "Fotoautomat<br/>");
  "prison" == b.amenity && (a += "Gef\xE4ngnis<br/>");
  "ranger_station" == b.amenity && (a += "National Park Ranger Station<br/>");
  "register_office" == b.amenity && (a += "Standesamt<br/>");
  "marketplace" == b.amenity && (a += "Marktplatz / Wochenmarkt<br/>");
  "solarium" == b.amenity && (a += "Solarium<br/>");
  "sauna" == b.amenity && (a += "Sauna<br/>");
  "shower" == b.amenity && (a += "\xF6ffentliche Dusche<br/>");
  if ("waste_disposal" == b.amenity && (a += "M\xFCllentsorgung auf \xF6ffentlichen Pl\xE4tzen<br/>", b.waste)) switch (a += "Art: ", b.waste) {
    case "trash":
      a += "Allgemeiner M\xFCll<br/>";
      break;

    case "oil":
      a += "Oil<br/>";
      break;

    case "drugs":
      a += "Pharmazeutisch<br/>";
      break;

    case "organic":
      a += "Kompost<br/>";
      break;

    case "plastic":
      a += "Plastik<br/>";
      break;

    case "rubble":
      a += "Schutt<br/>";
      break;

    case "cigarettes":
      a += "Zigaretten<br/>";
      break;

    default:
      a += "Allgemeiner M\xFCll<br/>";
  }
  if ("waste_basket" == b.amenity || "dog_excrement" == b.waste) a += "Hunde-Code M\xFCllcontainer<br/>";
  if ("scout_camp" == b.amenity || "scout_hut" == b.amenity || "scout_hall" == b.amenity) a += "Pfadfinderheim<br/>";
  "ferry_terminal" == b.amenity && (a += "F\xE4hrhafen<br/>");
  "bureau_de_change" == b.amenity && (a += "Geldwechselstube<br/>");
  "youth_club" == b.amenity && (a += "Jugendzentrum<br/>");
  "festival_grounds" == b.amenity && (a += "Festivalgel\xE4nde<br/>");
  if ("yes" == b.openfire || "yes" == b.fireplace) a += "Offene Feuerstelle<br/>";
  if ("vending_machine" == b.amenity) if (b.vending) switch (b.vending) {
    case "admission_tickets":
      a += "Eintrittskartenautomat<br/>";
      break;

    case "animal_feed":
      a += "Tierfutterautomat<br/>";
      break;

    case "bicycle_tube":
      a += "Fahrradschlauchautomat<br/>";
      break;

    case "books":
      a += "B\xFCcherautomat<br/>";
      break;

    case "candles":
      a += "Kerzenautomat<br/>";
      break;

    case "cigarettes":
      a += "Zigarettenautomat<br/>";
      break;

    case "chemist":
      a += "Apotheken/Drogerie Automat<br/>";
      break;

    case "condoms":
      a += "Kondomautomat<br/>";
      break;

    case "drinks":
      a += "Getr\xE4nkeautomat<br/>";
      break;

    case "electronics":
      a += "Automat f\xFCr Elektro-Zubeh\xF6r<br/>";
      break;

    case "elongated_coin":
      a += "M\xFCnzpr\xE4gungsautomat<br/>";
      break;

    case "excrement_bags":
      a += "Hundet\xFCtenspender<br/>";
      break;

    case "feminine_hygiene":
      a += "Automat f\xFCr Damenhygieneprodukte<br/>";
      break;

    case "first_aid":
      a += "Erste-Hilfe-Automat<br/>";
      break;

    case "fishing_tackle":
      a += "Automat f\xFCr Angelzubeh\xF6r<br/>";
      break;

    case "fishing_bait":
      a += "Angelk\xF6derautomat<br/>";
      break;

    case "flowers":
      a += "Blumenautomat<br/>";
      break;

    case "food":
      a += "Lebensmittel-Automat<br/>";
      break;

    case "ice_cubes":
      a += "Eisw\xFCrfelautomat<br/>";
      break;

    case "ice_cream":
      a += "Automat f\xFCr Speiseeis<br/>";
      break;

    case "ink_cartridges":
      a += "Druckerpatronen Automat<br/>";
      break;

    case "laundry_detergent":
      a += "Waschmittelautomat<br/>";
      break;

    case "public_transport_tickets":
      a += "Fahrkartenautomat<br/>";
      break;

    case "newspaper":
      a += "Zeitungsautomat<br/>";
      break;

    case "parcel_pickup":
      a += "Packstation<br/>";
      break;

    case "parcel_mail_in":
      a += "Paketstation<br/>";
      break;

    case "parking_tickets":
      a += "Parkscheinautomat<br/>";
      break;

    case "photos":
      a += "Fotoautomat<br/>";
      break;

    case "sex_toys":
      a += "Automat f\xFCr Sexspielzeug<br/>";
      break;

    case "SIM_cards":
      a += "Automat f\xFCr SIM Karten<br/>";
      break;

    case "stamps":
      a += "Briefmarkenautomat<br/>";
      break;

    case "sweets":
      a += "S\xFC\xDFigkeitenautomat<br/>";
      break;

    case "syringes":
      a += "Spritzenautomat<br/>";
      break;

    case "toll":
      a += "Maut-Automat<br/>";
      break;

    case "toys":
      a += "Spielzeugautomat<br/>";
      break;

    case "umbrellas":
      a += "Regenschirmautomat<br/>";
      break;

    default:
      a += "Verkaufsautomat<br/>";
  } else a += "Verkaufsautomat<br/>";
  "arts_centre" == b.amenity && (a += "Kulturzentrum<br/>");
  "artwork" == b.amenity && (a += "Kunstwerk / Kunstobjekt<br/>");
  "museum" == b.amenity && (a += "Museum<br/>");
  "theatre" == b.amenity && (a += "Theater<br/>");
  "cathedral" == b.building && (a += "Kathedrale<br/>");
  "church" == b.building && (a += "Kirche<br/>");
  "chapel" == b.building && (a += "Kapelle<br/>");
  "place_of_worship" == b.amenity && (a += "Kirche / Kultst\xE4tte<br/>");
  "village" == b.abandoned && (a += "Verlassene Stadt<br/>");
  "theme_park" == b["abandoned:tourism"] && (a += "Verlassener Vergn\xFCgungspark<br/>");
  "prison_camp" == b["abandoned:amenity"] && "concentration_camp" == ["concentration_camp"] && (a += "KZ Gedenkst\xE4tte<br/>");
  "yes" == b.abandoned && "bunker" == b.military && (a += "Verlassene Bunkeranlage<br/>");
  "yes" == b.abandoned && "barracks" == b.military && (a += "Verlassene Milit\xE4rbaracken<br/>");
  "yes" == b.abandoned && "airfield" == b.military && (a += "Verlassene Milit\xE4rflugplatz<br/>");
  "monastery" == b.historic && (a += "Historisches Kloster<br/>");
  "monastery" == b.amenity && (a += "Kloster<br/>");
  "monastery" == b.building && (a += "Kloster<br/>");
  "manor" == b.historic && (a += "Gutshaus / Herrenhaus<br/>");
  "boundary_stone" == b.historic && (a += "Historischer Grenzstein<br/>");
  "milestone" == b.historic && (a += "Historischer Meilenstein<br/>");
  "monument" == b.historic && (a += "Monument<br/>");
  "palace" == b.historic && (a += "Palast<br/>");
  "mine" == b.historic && (a += "Verlassene Mine<br/>");
  "ruins" == b.historic && (a += "Ruine<br/>");
  "harbour" == b.historic_usage && (a += "historischer Hafen<br/>");
  "rune_stone" == b.historic && (a += "Runenstein<br/>");
  "battlefield" == b.historic && (a += "Schlachtfeld<br/>");
  "blacksmith" == b.historic && (a += "Historische Schmiede<br/>");
  if ("tree_shrine" == b.historic || "wayside_shrine" == b.historic) a += "Schrein / Bildstock<br/>";
  "city_gate" == b.historic && (a += "Stadttor<br/>");
  "wayside_cross" == b.historic && (a += "Wegkreuz<br/>");
  "monument" == b.amenity && (a += "Denkmal<br/>");
  "memorial" == b.historic && (a += "Denkmal<br/>");
  "optical_telegraph" == b.historic && (a += "Optischer Telegraph<br/>");
  if ("castle" == b.historic) if (b.castle_type) switch (b.castle_type) {
    case "defensive":
      a += "Burg<br/>";
      break;

    case "palace":
      a += "Palast<br/>";
      break;

    case "stately":
      a += "Schloss<br/>";
      break;

    case "manor":
      a += "Herrenhaus<br/>";
      break;

    case "fortress":
      a += "Festung<br/>";
      break;

    case "castrum":
      a += "R\xF6misches Milit\xE4rlager<br/>";
      break;

    case "shiro":
      a += "Shiro<br/>";
      break;

    case "kremlin":
      a += "Kreml<br/>";
      break;

    default:
      a += "Schloss / Burg<br/>";
  } else a += "Schloss / Burg<br/>";
  "archaeological_site" == b.historic && (a += "Arch\xE4ologische Fundst\xE4tte<br/>");
  if ("tomb" == b.historic) if (b.tomb) switch (b.tomb) {
    case "tumulus":
      a += "H\xFCgelgrab<br/>";
      break;

    case "rock-cut":
      a += "Felsgrab<br/>";
      break;

    case "hypogeum":
      a += "Hypog\xE4um<br/>";
      break;

    case "war_grave":
      a += "Soldatenfriedhof<br/>";
      break;

    case "mausoleum":
      a += "Mausoleum<br/>";
      break;

    case "columbarium":
      a += "Kolumbarium<br/>";
      break;

    case "crypt":
      a += "Krypta<br/>";
      break;

    case "pyramid":
      a += "Pyramide<br/>";
      break;

    case "sarcophagus":
      a += "Sarkophag<br/>";
      break;

    case "vault":
      a += "Gruft<br/>";
      break;

    case "tombstone":
      a += "Grabstein<br/>";
      break;

    default:
      a += "Historische Grabst\xE4tte<br/>";
  } else a += "Historische Grabst\xE4tte<br/>";
  "accountant" == b.office && (a += "Buchhalter / Wirtschaftpr\xFCfer<br/>");
  "administrative" == b.office && (a += "Kreis- bzw. Gemeindebeh\xF6rde<br/>");
  "architect" == b.office && (a += "Architekturb\xFCro<br/>");
  "association" == b.office && (a += "Verein, Vereinigung bzw. Interessengemeinschaft<br/>");
  "physician" == b.office && (a += "Arzt<br/>");
  "camping" == b.office && (a += "Rezeption Campingplatz oder B\xFCro Freizeitpark<br/>");
  "company" == b.office && (a += "Sitz einer privaten Firma<br/>");
  "educational_institution" == b.office && (a += "Bildungseinrichtung<br/>");
  "employment_agency" == b.office && (a += "Job-Center / Arbeitsvermittlung<br/>");
  "estate_agent" == b.office && (a += "Immobilienmakler / Wohnungsbaugenossenschaft<br/>");
  "forestry" == b.office && (a += "Forstamt<br/>");
  "foundation" == b.office && (a += "Gesch\xE4ftsstelle einer Stiftung<br/>");
  "government" == b.office && (a += "Beh\xF6rde / Regierungseinrichtung<br/>");
  "guide" == b.office && (a += "B\xFCro f\xFCr Touristenf\xFChrungen<br/>");
  "insurance" == b.office && (a += "Versicherungsb\xFCro<br/>");
  "it" == b.office && (a += "IT-Unternehmen<br/>");
  "lawyer" == b.office && (a += "Rechtsanwaltskanzlei<br/>");
  "newspaper" == b.office && (a += "Zeitungsredaktion<br/>");
  "ngo" == b.office && (a += "B\xFCro einer Nichtregierungsorganisation<br/>");
  "notary" == b.office && (a += "Notar<br/>");
  "political_party" == b.office && (a += "B\xFCro einer politischen Partei<br/>");
  "quango" == b.office && (a += "B\xFCro einer halbstaatlichen Organisation<br/>");
  "realtor" == b.office && (a += "Immobilienmakler / Wohnungsbaugenossenschaft<br/>");
  "real_estate_agent" == b.office && (a += "Immobilienmakler / Wohnungsbaugenossenschaft<br/>");
  "register" == b.office && (a += "Standesamt<br/>");
  "religion" == b.office && (a += "B\xFCro einer religi\xF6sen Instanz<br/>");
  "research" == b.office && (a += "Forschungsunternehmen oder -institut<br/>");
  "tax" == b.office && (a += "Finanzamt<br/>");
  "telecommunication" == b.office && (a += "Telekommunikationsfirma<br/>");
  "travel_agent" == b.office && (a += "Sitz eines Reiseunternehmens<br/>");
  "water_utility" == b.office && (a += "Wasserwirtschaftsamt<br/>");
  "therapist" == b.office && (a += "Therapeut<br/>");
  "city" == b.place && (a += "Gro\xDFstadt<br/>");
  "town" == b.place && (a += "Stadt/Kleinstadt<br/>");
  "village" == b.place && (a += "Dorf<br/>");
  "continent" == b.place && (a += "Kontinent<br/>");
  "ocean" == b.place && (a += "Ozean</br>");
  "track" == b.highway && (a += "Forst-, Wald und Feldweg<br/>");
  "raceway" == b.highway && (a += "Motorsportbahn<br/>");
  "designated" == b.bicycle && (a += "Radweg<br/>");
  "path" == b.highway && (a += "Fu\xDFweg<br/>");
  "parking" == b.amenity && (a += "Parkplatz<br/>");
  "services" == b.highway && (a += "Rastst\xE4tte<br/>");
  "rest_area" == b.highway && (a += "Rastplatz<br/>");
  "turning_circle" == b.highway && (a += "Wendeplatz/Wendehammer<br/>");
  "service" == b.highway && (a += "Zufahrtsstra\xDFe / Erschlie\xDFungsweg<br/>");
  "motorway" == b.highway && (a += "Autobahn<br/>");
  "motorway_junction" == b.highway && (a += "Autobahnauffahrt<br/>");
  "bridleway" == b.highway && (a += "Reitweg<br/>");
  "yes" == b.oneway && (a += "Einbahnstra\xDFe<br/>");
  "yes" == b.park_ride && (a += "Park and Ride<br/>");
  "unknown" == b.park_ride && (a += "Park and Ride<br/>");
  "bus" == b.park_ride && (a += "Park and Ride<br/>");
  "tram" == b.park_ride && (a += "Park and Ride<br/>");
  "bus_stop" == b.highway && (a += "Bushaltestelle<br/>");
  "pedestrian" == b.highway && (a += "Fu\xDFg\xE4ngerzone<br/>");
  "street_lamp" == b.highway && (a += "Strassenlaterne<br/>");
  "traffic_signals" == b.highway && (a += "Ampel<br/>");
  "traffic_signals" == b.crossing && (a += "Fu\xDFg\xE4ngerampel<br/>");
  "speed_camera" == b.highway && (a += "Blitzer<br/>");
  "yes" == b.traffic_calming && (ret += "Verkehrsberuhigter Bereich</br>");
  "bump" == b.traffic_calming && (a += "Kurze Bodenwelle</br>");
  "chicane" == b.traffic_calming && (a += "Zu umfahrendenes Hinderniss</br>");
  "choker" == b.traffic_calming && (a += "Fahrbahnverengung, zu umfahrende Hindernisse m\xF6glich</br>");
  "cushion" == b.traffic_calming && (a += "Bodenwelle mit L\xFCcken aus mehreren rechteckigen Huckeln</br>");
  "hump" == b.traffic_calming && (a += "vergleichbare Bodenwelle mit etwar einer L\xE4nge von 2-4M</br>");
  "island" == b.traffic_calming && (a += "Eine Verkehrsinsel</br>");
  "rumble_strip" == b.traffic_calming && (a += "Holperstreifen</br>");
  "table" == b.traffic_calming && (a += "lange Bodenwellen mit flachen Mittelst\xFCck</br>");
  "buoy_cardinal" == b["seamark:type"] && (a += "Kardinalstonne<br/>");
  "buoy_lateral" == b["seamark:type"] && (a += "Lateraltonne<br/>");
  "buoy_isolated_danger" == b["seamark:type"] && (a += "Gefahrentonne<br/>");
  "perch" == b["seamark:beacon_lateral:shape"] && (a += "Pricke<br/>");
  "fuel" == b.amenity && "fuel_station" == b["seamark:small_craft_facility:category"] ? a += "Schiffstankstelle<br/>" : "fuel" == b.amenity && (a += "Tankstelle<br/>");

  if ("charging_station" == b.amenity) {
    var a = a + "Ladestation / Stromtankstelle<br/>",
        c = b.voltage;

    if (b.car) {
      switch (b.car) {
        case "yes":
          a += "F\xFCr Autos: Ja";
          break;

        case "no":
          a += "F\xFCr Autos: Nein";
          break;

        default:
          a += "F\xFCr Autos: Unbekannt";
      }

      a += "<br/>";
    } else a += "F\xFCr Autos: Unbekannt<br/>";

    if (b.bicycle) {
      switch (b.bicycle) {
        case "yes":
          a += "F\xFCr E-Bike: Ja";
          break;

        case "no":
          a += "F\xFCr E-Bike: Nein";
          break;

        default:
          a += "F\xFCr E-Bike: Unbekannt";
      }

      a += "<br/>";
    } else a += "F\xFCr E-Bike: Unbekannt<br/>";

    "no" == b["socket:schuko"] && (a += "Stecker Schuko: Nein<br/>");
    "yes" == b["socket:schuko"] && (a += "Stecker Schuko: Ja<br/>");
    "no" == b["socket:cee_blue"] && (a += "Stecker CEE Blau: Nein<br/>");
    "yes" == b["socket:cee_blue"] && (a += "Stecker CEE Blau: Ja<br/>");
    "no" == b["socket:cee_red_16a"] && (a += "Stecker CEE Rot 16a: Nein<br/>");
    "yes" == b["socket:cee_red_16a"] && (a += "Stecker CEE Rot 16a: Ja<br/>");
    "no" == b["socket:cee_red_32a"] && (a += "Stecker CEE Rot 32a: Nein<br/>");
    "yes" == b["socket:cee_red_32a"] && (a += "Stecker CEE Rot 32a: Ja<br/>");
    "no" == b["socket:cee_red_64a"] && (a += "Stecker CEE Rot 64a: Nein<br/>");
    "yes" == b["socket:cee_red_64a"] && (a += "Stecker CEE Rot 64a: Ja<br/>");
    "no" == b["socket:cee_red_125a"] && (a += "Stecker CEE Rot 125a: Nein<br/>");
    "yes" == b["socket:cee_red_125a"] && (a += "Stecker CEE Rot 125a: Ja<br/>");
    "no" == b["socket:nema_5_15"] && (a += "Stecker Nema 5 15: Nein<br/>");
    "yes" == b["socket:nema_5_15"] && (a += "Stecker Nema 5 15: Ja<br/>");
    "no" == b["socket:nema_5_20"] && (a += "Stecker Nema 5 20: Nein<br/>");
    "yes" == b["socket:nema_5_20"] && (a += "Stecker Nema 5 20: Ja<br/>");
    "no" == b["socket:nema_14_30"] && (a += "Stecker Nema 14 30: Nein<br/>");
    "yes" == b["socket:nema_14_30"] && (a += "Stecker Nema 14 30: Ja<br/>");
    "Nein" == b["socket:nema_14_50"] && (a += "Stecker Nema 14  50: Nein<br/>");
    "yes" == b["socket:nema_14_50"] && (a += "Stecker Nema 14 50: Ja<br/>");
    "nein" == b["socket:bs1363"] && (a += "Stecker BS 1363: Nein<br/>");
    "yes" == b["socket:bs1363"] && (a += "Stecker BS 1363: Ja<br/>");
    "no" == b["socket:type1"] && (a += "Stecker Typ 1:Nein<br/>");
    "yes" == b["socket:type1"] && (a += "Stecker Typ 1: Ja<br/>");
    "no" == b["socket:type1_combo"] && (a += "Stecker Typ 1 Kombo: Nein<br/>");
    "yes" == b["socket:type1_combo"] && (a += "Stecker Typ 1 Kombo: Ja<br/>");
    "Nein" == b["socket:type2"] && (a += "Stecker Typ 2: Nein<br/>");
    "yes" == b["socket:type2"] && (a += "Stecker Typ 2: Ja<br/>");
    "no" == b["socket:type2_combo"] && (a += "Stecker Typ 2 Kombo: Nein<br/>");
    "yes" == b["socket:type2_combo"] && (a += "Stecker Typ 2 Kombo: Ja<br/>");
    "no" == b["socket:type3"] && (a += "Stecker Typ: Nein<br/>");
    "yes" == b["socket:type3"] && (a += "Stecker Typ 3: Ja<br/>");
    "no" == b["socket:chademo"] && (a += "Stecker CHAdeMO: Nein<br/>");
    "yes" == b["socket:chademo"] && (a += "Stecker CHAdeMO: Ja<br/>");
    "no" == b["socket:magne_charge"] && (a += "Stecker Magne : Nein<br/>");
    "yes" == b["socket:magne_charge"] && (a += "Stecker Magne : Ja<br/>");
    "no" == b["socket:tesla_standard"] && (a += "Stecker Tesla Standard: Nein<br/>");
    "yes" == b["socket:tesla_standard"] && (a += "Stecker Tesla Standard: Nein<br/>");
    "no" == b["socket:tesla_supercharge"] && (a += "Stecker Tesla Schnellladestation: Nein<br/>");
    "yes" == b["socket:tesla_supercharge"] && (a += "Stecker Tesla Schnellladestation: Ja<br/>");
    "no" == b["socket:tesla_roadster"] && (a += "Stecker Tesla Roadster: Nein<br/>");
    "yes" == b["socket:tesla_roadster"] && (a += "Stecker Tesla Roadster: Ja<br/>");
    b["socket:schuko"] && (a += "Stecker Schuko: " + b["socket:schuko"] + "<br/>");
    b["socket:cee_blue"] && (a += "Stecker CEE Blau: " + b["socket:cee_blue"] + "<br/>");
    b["socket:cee_red_16a"] && (a += "Stecker CEE Rot 16a: " + b["socket:cee_red_16a"] + "<br/>");
    b["socket:cee_red_32a"] && (a += "Stecker CEE Rot 32a: " + b["socket:cee_red_32a"] + "<br/>");
    b["socket:cee_red_64a"] && (a += "Stecker CEE Rot 64a: " + b["socket:cee_red_64a"] + "<br/>");
    b["socket:cee_red_125a"] && (a += "Stecker CEE Rot 125a: " + b["socket:cee_red_125a"] + "<br/>");
    b["socket:nema_5_15"] && (a += "Stecker Nema 5 15: " + b["socket:nema_5_15"] + "<br/>");
    b["socket:nema_5_20"] && (a += "Stecker Nema 5 20: " + b["socket:nema_5_20"] + "<br/>");
    b["socket:nema_14_30"] && (a += "Stecker Nema 14 30: " + b["socket:nema_14_30"] + "<br/>");
    b["socket:nema_14_50"] && (a += "Stecker Nema 14 50: " + b["socket:nema_14_50"] + "<br/>");
    b["socket:bs1363"] && (a += "Stecker BS 1363: " + b["socket:bs1363"] + "<br/>");
    b["socket:type1"] && (a += "Stecker Typ 1: " + b["socket:type1"] + "<br/>");
    b["socket:type1_combo"] && (a += "Stecker Typ 1 Kombo: " + b["socket:schuko"] + "<br/>");
    b["socket:type2"] && (a += "Stecker Typ 2: " + b["socket:type2"] + "<br/>");
    b["socket:type2_combo"] && (a += "Stecker Typ 2 Kombo: " + b["socket:type2_combo"] + "<br/>");
    b["socket:type3"] && (a += "Stecker Typ 3: " + b["socket:type3"] + "<br/>");
    b["socket:chademo"] && (a += "Stecker CHAdeMO: " + b["socket:chademo"] + "<br/>");
    b["socket:magne_charge"] && (a += "Stecker Magne : " + b["socket:magne_charge"] + "<br/>");
    b["socket:tesla_standard"] && (a += "Stecker Tesla Standard: " + b["socket:tesla_standard"] + "<br/>");
    b["socket:tesla_supercharge"] && (a += "Stecker Tesla Schnellladestation: " + b["socket:tesla_supercharge"] + "<br/>");
    b["socket:tesla_roadster"] && (a += "Stecker Tesla Roadster: " + b["socket:tesla_roadster"] + "<br/>");
    a += "<br/>";
    b.voltage && (a += "Volt: " + c + "<br/>");
  }

  "yes" == b.tunnel && (a += "Tunnel<br/>");
  if (b.bridge) switch (a += "Br\xFCcken-Typ: ", b.bridge) {
    case "swing":
      a += "Drehbr\xFCcke";
      break;

    case "aqueduct":
      a += "Historische Wasserpipeline";
      break;

    case "bascule":
      a += "Klapp bzw. Wippbr\xFCcke";
      break;

    case "boardwalk":
      a += "Bohlenweg";
      break;

    case "cantilever":
      a += "Auslegerbr\xFCcke";
      break;

    case "covered":
      a += "gedeckte Br\xFCcke";
      break;

    case "drawbridge":
      a += "Klappbr\xFCcke";
      break;

    case "humpback":
      a += "Drehbr\xFCcke";
      break;

    case "lift":
      a += "Hubbr\xFCcke";
      break;

    case "low_water_crossing":
      a += "Irische Br\xFCcke";
      break;

    case "moveable":
      a += "Bewegliche Br\xFCcken";
      break;

    case "pontoon":
      a += "Schwimmbr\xFCcke";
      break;

    case "suspension":
      a += "H\xE4ngebr\xFCcke";
      break;

    case "trestle":
      a += "Trestle-Br\xFCcke";
      break;

    case "viaduct":
      a += "Viadukt";
  }
  if (b["bridge:movable"]) switch (b["bridge:movable"]) {
    case "swing":
      a += "Drehbr\xFCcke";
      break;

    case "bascule":
      a += "Klapp bzw. Wippbr\xFCcke";
      break;

    case "drawbridge":
      a += "Klappbr\xFCcke";
      break;

    case "lift":
      a += "Hubbr\xFCcke";
      break;

    case "submersible":
      a += "Senkbr\xFCcke";
      break;

    case "transporter":
      a += "Schwebef\xE4hre";
      break;

    case "retractable":
      a += "Schubbr\xFCcke";
  }
  if ("nursing_home" == b.amenity || "retirement_home" == b.amenity) a += "Seniorenheim / Pflegeheim<br/>";
  "social_facility" == b.amenity && (a += "Allg. soziale Einrichtung<br/>");

  if (b.social_facility) {
    "group_home" == b.social_facility && "senior" == b["social_facility:for"] && (a += "Seniorenheim<br/>");
    "assisted_living" == b.social_facility && (a += "Betreutes Wohnen<br/>");
    "outreach" == b.social_facility && (a += "Beratungsstelle<br/>");
    "workshop" == b.social_facility && (a += "soziale Werkstatt<br/>");
    if ("ambulatory_care" == b.social_facility || "healthcare" == b.social_facility) a += "Ambulanter Pflegedienst<br/>";
    "shelter" == b.social_facility && "senior" == b["social_facility:for"] && (a += "Tages- u. Kurzzeitpflege<br/>");
    "shelter" == b.social_facility && "abused" == b["social_facility:for"] && (a += "Notunterkunft<br/>");
    "food_bank" == b.social_facility && (a += "Lebensmittelhilfe<br/>");
    "hospice" == b.social_facility && (a += "Hospiz<br/>");
  }

  b.brewery && (a += "Ausgeschenkte Biersorten: " + b.brewery + "<br/>");
  "alcohol" == b.shop && (a += "Spirituosenladen<br/>");
  "bakery" == b.shop && (a += "B\xE4ckerei<br/>");
  "beverages" == b.shop && (a += "Getr\xE4nkehandel<br/>");
  "butcher" == b.shop && (a += "Fleischerei<br/>");
  "cheese" == b.shop && (a += "K\xE4sefachgesch\xE4ft<br/>");
  "chocolate" == b.shop && (a += "Schokoladenfachgesch\xE4ft<br/>");
  "coffee" == b.shop && (a += "Kaffeefachgesch\xE4ft<br/>");
  "confectionery" == b.shop && (a += "S\xFC\xDFwarenladen<br/>");
  "convenience" == b.shop && (a += "Lebensmittelgesch\xE4ft<br/>");
  "deli" == b.shop && (a += "Feinkostladen<br/>");
  "dairy" == b.shop && (a += "Milchladen<br/>");
  "farm" == b.shop && (a += "Hofladen<br/>");
  "greengrocer" == b.shop && (a += "Gem\xFCseh\xE4ndler<br/>");
  "grocery" == b.shop && (a += "Lebensmittelgesch\xE4ft<br/>");
  "organic" == b.shop && (a += "Bio-Laden, Reformhaus<br/>");
  "pasta" == b.shop && (a += "Pastagesch\xE4ft<br/>");
  "seafood" == b.shop && (a += "Fischfachgesch\xE4ft<br/>");
  "tea" == b.shop && (a += "Teefachgesch\xE4ft<br/>");
  "wine" == b.shop && (a += "Weinhandlung<br/>");
  "department_store" == b.shop && (a += "Kaufhaus<br/>");
  "general" == b.shop && (a += "Gemischtwarenhandlung<br/>");
  "kiosk" == b.shop && (a += "Kiosk<br/>");
  "mall" == b.shop && (a += "Einkaufszentrum<br/>");
  "supermarket" == b.shop && (a += "Supermarkt<br/>");
  "baby_goods" == b.shop && (a += "Babyfachmarkt<br/>");
  "bag" == b.shop && (a += "Taschen und Koffer<br/>");
  "boutique" == b.shop && (a += "Boutique<br/>");
  "clothes" == b.shop && (a += "Bekleidung<br/>");
  "fabric" == b.shop && (a += "Textilgesch\xE4ft<br/>");
  "fashion" == b.shop && (a += "Fashion<br/>");
  "jewelry" == b.shop && (a += "Juwelier<br/>");
  "leather" == b.shop && (a += "Lederwaren<br/>");
  "shoes" == b.shop && (a += "Schuhfachgesch\xE4ft<br/>");
  "variety_store" == b.shop && (a += "Ein-Euro-Laden<br/>");
  "chemist" == b.shop && (a += "Drogerie<br/>");
  "cosmetics" == b.shop && (a += "Kosmetikfachgesch\xE4ft<br/>");
  "drugstore" == b.shop && (a += "Drogerie oder Apotheke (veraltet)<br/>");
  "perfumery" == b.shop && (a += "Parf\xFCmerie<br/>");
  "erotic" == b.shop && (a += "Erotikhandel<br/>");
  "hairdresser" == b.shop && (a += "Friseur<br/>");
  "hearing_aids" == b.shop && (a += "H\xF6rger\xE4te<br/>");
  "herbalist" == b.shop && (a += "Kr\xE4uterhandel<br/>");
  "massage" == b.shop && (a += "Massagesalon<br/>");
  "medical_supply" == b.shop && (a += "Sanit\xE4tshaus<br/>");
  "optician" == b.shop && (a += "Optiker<br/>");
  "tattoo" == b.shop && (a += "T\xE4towierer<br/>");
  "bathroom_furnishing" == b.shop && (a += "Badm\xF6bel und -accessoires<br/>");
  "doityourself" == b.shop && (a += "Baumarkt/Baustoffhandel<br/>");
  "energy" == b.shop && (a += "Energiehandel<br/>");
  "florist" == b.shop && (a += "Blumengesch\xE4ft<br/>");
  "furnace" == b.shop && (a += "Ofenfachgesch\xE4ft<br/>");
  "garden_centre" == b.shop && (a += "Gartencenter<br/>");
  "gas" == b.shop && (a += "Fachgesch\xE4ft f\xFCr technische Gase<br/>");
  "glaziery" == b.shop && (a += "Glaserei<br/>");
  "hardware" == b.shop && (a += "Eisenwaren<br/>");
  "houseware" == b.shop && (a += "Haushaltswaren und Inneneinrichtung<br/>");
  "locksmith" == b.shop && (a += "Schl\xFCsseldienst<br/>");
  "paint" == b.shop && (a += "Farbenfachgesch\xE4ft<br/>");
  "trade" == b.shop && (a += "Baustoffhandel<br/>");
  "antiques" == b.shop && (a += "Antiquit\xE4ten<br/>");
  "bed" == b.shop && (a += "Betten- und Matratzengesch\xE4ft<br/>");
  "candles" == b.shop && (a += "Kerzengesch\xE4ft<br/>");
  "carpet" == b.shop && (a += "Teppichfachhandel<br/>");
  "curtain" == b.shop && (a += "Gardinenfachgesch\xE4ft<br/>");
  "furniture" == b.shop && (a += "M\xF6bel- und Einrichtungshaus<br/>");
  "interior_decoration" == b.shop && (a += "Innendekoration / Raumausstattung<br/>");
  "kitchen" == b.shop && (a += "K\xFCchen<br/>");
  "window_blind" == b.shop && (a += "Jalousien und Roll\xE4den<br/>");
  "computer" == b.shop && (a += "Computer-Fachh\xE4ndler<br/>");
  "electronics" == b.shop && (a += "Elektronikmarkt<br/>");
  "hifi" == b.shop && (a += "Hifi-Fachh\xE4ndler<br/>");
  "mobile_phone" == b.shop && (a += "Handy-Shop<br/>");
  "radiotechnics" == b.shop && (a += "Radio- und Fernsehtechnik<br/>");
  "vacuum_cleaner" == b.shop && (a += "Staubsaugerfachgesch\xE4ft<br/>");
  "bicycle" == b.shop && (a += "Fahrradfachgesch\xE4ft<br/>");
  "car" == b.shop && (a += "Autohaus<br/>");
  "car_repair" == b.shop && (a += "Autowerkstatt<br/>");
  "car_parts" == b.shop && (a += "Autoteilefachgesch\xE4ft<br/>");
  if ("dive" == b.shop || "scuba_diving" == b.shop) a += "Tauchausr\xFCstung<br/>";
  "fishing" == b.shop && (a += "Angelfachgesch\xE4ft<br/>");
  "free_flying" == b.shop && (a += "Fallschirmausr\xFCstung<br/>");
  "hunting" == b.shop && (a += "Jagdausr\xFCstung<br/>");
  "motorcycle" == b.shop && (a += "Motorradgesch\xE4ft<br/>");
  "outdoor" == b.shop && (a += "Trekking-/Outdoorladen<br/>");
  "sports" == b.shop && (a += "Sportgesch\xE4ft<br/>");
  "tyres" == b.shop && (a += "Reifenfachhandel<br/>");
  "water_sports" == b.shop && (a += "Wassersportbedarf<br/>");
  "art" == b.shop && (a += "Kunstladen<br/>");
  "craft" == b.shop && (a += "Kunsthandwerk<br/>");
  "frame" == b.shop && (a += "Bilderrahmengesch\xE4ft<br/>");
  "music" == b.shop && (a += "Musikgesch\xE4ft<br/>");
  "music_instrument" == b.shop && (a += "Musikhaus<br/>");
  "photo" == b.shop && (a += "Fotofachgesch\xE4ft<br/>");
  "video" == b.shop && (a += "Videothek<br/>");
  "video_games" == b.shop && (a += "Videospiele<br/>");
  "anime" == b.shop && (a += "Anime<br/>");
  "books" == b.shop && (a += "Buchhandlung<br/>");
  "gift" == b.shop && (a += "Andenken, Reisemitbringsel, Souveniershop<br/>");
  "newsagent" == b.shop && (a += "Zeitungsh\xE4ndler<br/>");
  "stationery" == b.shop && (a += "Schreibwaren<br/>");
  "ticket" == b.shop && (a += "Ticketshop<br/>");
  "copyshop" == b.shop && (a += "Kopierladen<br/>");
  "funeral_directors" == b.shop && (a += "Bestattungsunternehmen<br/>");
  "laundry" == b.shop && (a += "Waschsalon / W\xE4scherei<br/>");
  "dry_cleaning" == b.shop && (a += "chemische Reinigung<br/>");
  "money_lender" == b.shop && (a += "Geldverleiher<br/>");
  "pawnbroker" == b.shop && (a += "Pfandhaus / Pfandleiher<br/>");
  "pet" == b.shop && (a += "Zoo- und Tierhandlung<br/>");
  "pyrotechnics" == b.shop && (a += "Feuerwerk<br/>");
  "religion" == b.shop && (a += "Religi\xF6se Artikel<br/>");
  "beauty" == b.shop && (a += "Sch\xF6nheitssalon<br/>");
  "solarium" == b.shop && (a += "Solarium<br/>");
  "tobacco" == b.shop && (a += "Tabakwaren<br/>");
  "toys" == b.shop && (a += "Spielwaren<br/>");
  "travel_agency" == b.shop && (a += "Reiseb\xFCro<br/>");
  "market_hall" == b.shop && (a += "Markthalle<br/>");
  "vacant" == b.shop && (a += "leerstehendes Ladenlokal<br/>");
  "weapons" == b.shop && (a += "Waffenladen<br/>");
  "lottery" == b.gambling && (a += "Lottoannahmestelle<br/>");
  "fish" == b.pet && (a += "Aquaristik<br/>");
  "agriucultural_engines" == b.craft && (a += "Landmaschinenbau<br/>");
  "basket_maker" == b.craft && (a += "Korbmacher<br/>");
  "beekeeper" == b.craft && (a += "Imker<br/>");
  "blacksmith" == b.craft && (a += "Schmied<br/>");
  "brewery" == b.craft && (a += "Brauerei<br/>");
  "yes" == b.microbrewery && (a += "Hausbrauerei<br/>");
  "boatbuilder" == b.craft && (a += "Bootsbauer<br/>");
  "bookbinder" == b.craft && (a += "Buchbinder<br/>");
  "builder" == b.craft && (a += "Hausbau<br/>");
  "carpenter" == b.craft && (a += "Tischler/Schreiner, Zimmermann<br/>");
  "carpet_layer" == b.craft && (a += "Teppichleger<br/>");
  "caterer" == b.craft && (a += "Catering<br/>");
  "clockmaker" == b.craft && (a += "Uhrmacher<br/>");
  "confectionery" == b.craft && (a += "Konditorei<br/>");
  "dressmaker" == b.craft && (a += "Schneider<br/>");
  "electrician" == b.craft && (a += "Elektriker<br/>");
  "gardener" == b.craft && (a += "Garten- und Landschaftsbauer<br/>");
  "glaziery" == b.craft && (a += "Glaserei<br/>");
  "handicraft" == b.craft && (a += "Handwerkskunst<br/>");
  "hvac" == b.craft && (a += "K\xE4lteanlagenbauer f\xFCr L\xFCftungs-, Heizungs- und Klimatechnik<br/>");
  "insulation" == b.craft && (a += "W\xE4rmed\xE4mmung von Geb\xE4uden<br/>");
  "jeweller" == b.craft && (a += "Juwelier, Gold-/Silber-Schmied<br/>");
  "key_cutter" == b.craft && (a += "Schl\xFCsselmacher<br/>");
  "locksmith" == b.craft && (a += "Schl\xFCsseldienst<br/>");
  "metal_construction" == b.craft && (a += "Metallbauer<br/>");
  "optician" == b.craft && (a += "Optiker<br/>");
  "painter" == b.craft && (a += "Maler<br/>");
  "parquet_layer" == b.craft && (a += "Parkettverleger<br/>");
  "photographer" == b.craft && (a += "Fotograf<br/>");
  "photographic_laboratory" == b.craft && (a += "Fotolabor<br/>");
  "plasterer" == b.craft && (a += "Gipser, Verputzer, Stuckateur<br/>");
  "plumber" == b.craft && (a += "Anlagenmechaniker Sanit\xE4r-, Heizungs- und Klimatechnik.<br/>");
  "pottery" == b.craft && (a += "T\xF6pferei<br/>");
  "rigger" == b.craft && (a += "Riggemacher (Takelage f\xFCr Segelschiffe)<br/>");
  "roofer" == b.craft && (a += "Dachdecker<br/>");
  "saddler" == b.craft && (a += "Sattler<br/>");
  "sailmaker" == b.craft && (a += "Segelmacher<br/>");
  "sawmill" == b.craft && (a += "Holzverarbeitungsbetrieb<br/>");
  "scaffolder" == b.craft && (a += "Ger\xFCstbauer<br/>");
  "sculptor" == b.craft && (a += "Bildhauer<br/>");
  "shoemaker" == b.craft && (a += "Schuhmacher<br/>");
  "stand_builder" == b.craft && (a += "Messe- / Standbauer<br/>");
  "stonemason" == b.craft && (a += "Steinmetz<br/>");
  "sun_protection" == b.craft && (a += "Rolladen- und Jalousiebauer<br/>");
  "sweep" == b.craft && (a += "Schornsteinfeger<br/>");
  "tailor" == b.craft && (a += "Schneider<br/>");
  "tiler" == b.craft && (a += "Fliesen-, Platten- und Mosaikleger<br/>");
  "tinsmith" == b.craft && (a += "Spengler, Klempner<br/>");
  "upholsterer" == b.craft && (a += "Polsterer<br/>");
  "watchmaker" == b.craft && (a += "Uhrmacher<br/>");
  "window_construction" == b.craft && (a += "Fensterbauer<br/>");
  "machines" == b.rental && (a += "Maschinenverleih<br/>");
  "car_rental" == b.amenity && (a += "Autoverleih<br/>");
  "allotments" == b.landuse && (a += "Schrebergarten<br/>");
  "basin" == b.landuse && (a += "Regenwasserr\xFCckhaltebecken<br/>");
  "brownfield" == b.landuse && (a += "Vorher bebautes Land<br/>");
  "commercial" == b.landuse && (a += "Industriegebiet<br/>");
  "construction" == b.landuse && (a += "Baugebiet<br/>");
  "farmland" == b.landuse && (a += "Ackerfl\xE4che<br/>");
  "farmyard" == b.landuse && (a += "landwirtschaftlicher Betrieb<br/>");
  "forest" == b.landuse && (a += "Forst<br/>");
  "garages" == b.landuse && (a += "Garagenkomplex<br/>");
  "grass" == b.landuse && (a += "Rasenfl\xE4chen<br/>");
  "greenfield" == b.landuse && (a += "Bauerwartungsland<br/>");
  "greenhouse_horticulture" == b.landuse && (a += "Gew\xE4chshaus-Fl\xE4che<br/>");
  "industrial" == b.landuse && (a += "Gewerbe-/Industriegebiet<br/>");
  "landfill" == b.landuse && (a += "M\xFClldeponie<br/>");
  "meadow" == b.landuse && (a += "Gr\xFCnfl\xE4che<br/>");
  "orchard" == b.landuse && (a += "Obstplantage<br/>");
  "plant_nursery" == b.landuse && (a += "Baumschule<br/>");
  "quarry" == b.landuse && (a += "Sand- und Kiesgrube<br/>");
  "railway" == b.landuse && (a += "Gebiet f\xFCr Eisenbahnnutzung<br/>");
  "recreation_ground" == b.landuse && (a += "Erholungsgebiet<br/>");
  "reservoir" == b.landuse && (a += "Wasserreservoir<br/>");
  "residential" == b.landuse && (a += "Wohngebiet<br/>");
  "retail" == b.landuse && (a += "Einkaufszentrum<br/>");
  "salt_pond" == b.landuse && (a += "Saline<br/>");
  "village_green" == b.landuse && (a += "Gr\xFCnfl\xE4che<br/>");
  "vineyard" == b.landuse && (a += "Weinberg<br/>");
  "pond" == b.landuse && (a += "kleiner Teich<br/>");
  "salt_pond" == b.landuse && (a += "Saline<br/>");
  "animal_keeping" == b.landuse && (a += "Weide, Paddock f\xFCr Tierhaltung<br/>");
  "yes" == b.entrance && (a += "Eingang zum Geb\xE4ude<br/>");
  "main" == b.entrance && (a += "Haupteingang<br/>");
  "service" == b.entrance && (a += "Hinterausgang f\xFCr Angestellte oder Zulieferer<br/>");
  "exit" == b.entrance && (a += "Ausgang des Geb\xE4udes<br/>");
  "emergency" == b.entrance && (a += "Notausgang<br/>");
  "bay" == b.natural && (a += "Bucht<br/>");
  "beach" == b.natural && (a += "Strand<br/>");
  "wood" == b.natural && (a += "nat\xFCrlicher Wald<br/>");
  "glacier" == b.natural && (a += "Gletscher<br/>");
  "cave_entrance" == b.natural && (a += "H\xF6hle<br/>");
  "spring" == b.natural && (a += "nat\xFCrliche Quelle<br/>");
  "waterfall" == b.natural && (a += "Wasserfall<br/>");
  "scrub" == b.natural && (a += "unkultiviertes Buschland<br/>");
  "grassland" == b.natural && (a += "unkultiviertes Grasland<br/>");
  "wetland" == b.natural && (a += "Feuchtgebiet<br/>");
  "tree" == b.natural && (a += "Baum");
  "peak" == b.natural && "yes" == b["summit:cross"] && (a += "Gipfelkreuz<br/>");
  "tree_row" == b.natural && (a += "Baumreihe / Allee<br/>");
  "heath" == b.natural && (a += "Heide<br/>");
  "moor" == b.natural && (a += "Hochmoor<br/>");
  "grassland" == b.natural && (a += "unkultiviertes Grasland<br/>");
  "fell" == b.natural && (a += "Grasland oberhalb der Baumgrenze<br/>");
  "bare_rock" == b.natural && (a += "Nackter Fels<br/>");
  "scree" == b.natural && (a += "Schutt (Hangschutt)<br/>");
  "volcano" == b.natural && (a += "Vulkan<br/>");
  "valley" == b.natural && (a += "Tal<br/>");
  "stone" == b.natural && (a += "Findling<br/>");
  "sea" == b.natural && (a += "Meer<br/>");
  "national_park" == b.boundary && (a += "Nationalpark<br/>");
  "protected_area" == b.boundary && (a += "Schutzgebiet<br/>");
  "yes" == b.mountain_pass && (a += "Gebirgspass<br/>");
  "waterfall" == b.waterway && (a += "Wasserfall<br/>");
  "canal" == b.waterway && (a += "Kanal<br/>");
  "canal" == b.water && (a += "Kanal<br/>");
  "river" == b.waterway && (a += "Fluss<br/>");
  "river" == b.water && (a += "Fluss<br/>");
  "riverbank" == b.waterway && (a += "Fluss<br/>");
  "ditch" == b.waterway && (a += "Entw\xE4sserungsgraben<br/>");
  "stream" == b.waterway && (a += "Bach<br/>");
  "ferry" == b.route && (a += "F\xE4hrverbindung<br/>");
  "turning_point" == b.waterway && (a += "Wendestelle<br/>");
  if ("lake" == b.water || "water" == b.natural) a += "See<br/>";
  "cove" == b.water && (a += "kleine Bucht<br/>");
  "lagoon" == b.water && (a += "Lagune<br/>");
  "pond" == b.water && (a += "Teich<br/>");
  "reservoir" == b.water && (a += "Wasserreservoir<br/>");
  "oxbow" == b.water && (a += "Altwassersee<br/>");
  "lock" == b.water && (a += "Schleusenkammer<br/>");
  "moat" == b.water && (a += "Burggraben<br/>");
  "wastewater" == b.water && (a += "Kl\xE4ranlage<br/>");
  "guest" == b.mooring && "pier" == b.man_made || "visitor_berth" == b["seamark:small_craft_facility:category"] ? a += "Gastliegeplatz<br/>" : "pier" == b.man_made && (a += "Anlegestelle<br/>");
  "boatyard" == b.waterway && (a += "Schiffswerft<br/>");
  "mooring" == b["seamark:type"] && "dolphin" == b["seamark:mooring:category"] && (a += "Dalben<br/>");
  "foot" == b.route && (a += "Wanderweg<br/>");
  "hiking" == b.route && (a += "Wanderweg<br/>");
  if ("yes" == b.hiking && "information" == b.tourism) a += "Wegweiser<br/>";else if ("information" == b.tourism && "information" == b.tourism) if (b.information) switch (b.information) {
    case "board":
      a += "Informationstafel<br/>";
      break;

    case "map":
      a += "Informationstafel mit Karte<br/>";
      break;

    case "office":
      a += "Touristeninformation<br/>";
      break;

    case "terminal":
      a += "Informationsterminal<br/>";
      break;

    case "audioguide":
      a += "Audioguide<br/>";
      break;

    case "guidepost":
      a += "Wegweiser<br/>";
      break;

    case "tactile_map":
      a += "Blindenkarte 2D<br/>";
      break;

    case "tactile_model":
      a += "Blindenkarte 3D<br/>";
      break;

    case "route_marker":
      a += "Wegerkennungsmarker<br/>";
      break;

    default:
      a += "Informationstafel<br/>";
  } else a += "Informationstafel<br/>";
  "bicycle" == b.route && (a += "Radwanderweg<br/>");
  "mtb" == b.route && (a += "Mountainbikeroute<br/>");
  "horse" == b.route && (a += "Reitwanderweg<br/>");
  "coastline" == b.natural && (a += "K\xFCstenlinie<br/>");
  "cliff" == b.natural && (a += "Klippe<br/>");
  "dam" == b.waterway && (a += "Staudamm<br/>");
  "weir" == b.waterway && (a += "Wehr<br/>");
  "lock_gate" == b.waterway && (a += "Schleusentor<br/>");
  "yes" == b.lock && (a += "Schleuse<br/>");
  "sluice_gate" == b.waterway && (a += "Siel<br/>");
  "pumping_station" == b.man_made && (a += "Sch\xF6pfwerk<br/>");
  "groyne" == b.man_made && (a += "Buhne<br/>");
  "dyke" == b.man_made && (a += "Deich<br/>");
  "levee" == b.man_made && (a += "Deich<br/>");
  "watermill" == b.man_made && (a += "Wasserm\xFChle<br/>");
  "airfield" == b.military && (a += "Milit\xE4rflugplatz<br/>");
  "naval_base" == b.military && (a += "Marinest\xFCtzpunkt<br/>");
  "range" == b.military && (a += "Waffen\xFCbungsplatz<br/>");
  "military" == b.landuse && (a += "milit\xE4risch genutztes Gebiet<br/>");
  "training_area" == b.military && (a += "Truppen\xFCbungsplatz<br/>");
  "exclusion_zone" == b.military && (a += "milit\xE4risch genutztes Gebiet<br/>");
  "danger_area" == b.military && (a += "milit\xE4rische Gefahrenzone<br/>");
  "barracks" == b.military && (a += "Kaserne<br/>");
  "nuclear_explosion_site" == b.military && (a += "Atomwaffentestgel\xE4nde<br/>");
  "yes" == b.construction ? a += "Baustelle<br/>" : "construction" == b.highway && (a += "Baustelle<br/>");
  "petroleum_well" == b.man_made && (a += "Erd\xF6lpumpe<br/>");
  "storage_tank" == b.man_made && (a += "Speichertank<br/>");
  "wastewater_plant" == b.man_made && (a += "Kl\xE4ranlage<br/>");
  "silo" == b.man_made && (a += "Silo<br/>");
  "water_tower" == b.man_made && (a += "Wasserturm<br/>");
  "windmill" == b.man_made && (a += "Windm\xFChle<br/>");
  "monitoring_station" == b.man_made && (a += "Messstation");
  "crane" == b.man_made && (a += "Kran");
  "lighthouse" == b.man_made && (a += "Leuchtturm");
  "beacon" == b.man_made && (a += "Leuchtfeuer");
  "breakwater" == b.man_made && (a += "Wellenbrecher");
  "lamp" == b.man_made && "street_lamp" == b["lamp:type"] && (a += "Strassenlaterne<br/>");
  "lantern" == b.light_source && (a += "Strassenlaterne<br/>");
  "floodlight" == b.light_source && (a += "Flutlicht<br/>");
  "signal_lamp" == b.light_source && (a += "Signallicht<br/>");
  "aviation" == b.light_source && (a += "Befeuerung<br/>");
  "warning" == b.light_source && (a += "Warnlicht<br/>");
  if (b.light_source && b["light:method"]) switch (a += "Licht Art: ", b["light:method"]) {
    case "gas":
      a += "Gas";
      break;

    case "electric":
      a += "Elektrisch";
      break;

    case "incandescent":
      a += "strahlend";
      break;

    case "halogen":
      a += "Halogen";
      break;

    case "discharge":
      a += "Entladungslicht";
      break;

    case "metal-halide":
      a += "Halogen-Metalldampflampe";
      break;

    case "neon":
      a += "Neon";
      break;

    case "sodium":
      a += "Natriumdampflampe";
      break;

    case "high_pressure_sodium":
      a += "Hochdruck Natriumdampflampe";
      break;

    case "low_pressure_sodium":
      a += "Niedrigdruck Natriumdampflampe";
      break;

    case "fluorescent":
      a += "Fluoreszenzlampe";
      break;

    case "mercury":
      a += "Quecksilberlampe";
      break;

    case "LED":
      a += "LED";
      break;

    case "laser":
      a += "Laser";
      break;

    case "arc":
      a += "Lichtbogen";
      break;

    default:
      a += "Unbekannt";
  }
  "drinking_water" == b.amenity && (a += "Trinkwasser<br/>");
  "yes" == b.drinking_water && (a += "Trinkwasser<br/>");
  "works" == b.man_made ? a += "Industriegeb\xE4ude<br/>" : "industrial" == b.building ? a += "Industriegeb\xE4ude<br/>" : "industrial" == b.landuse ? a += "Industriegebiet<br/>" : "industrial" == b.abutters ? a += "Industriegebiet<br/>" : "commercial" == b.abutters && (a += "Gewerbegebiet<br/>");
  if (b["generator:source"]) switch (a += "Anlagen-Typ: ", b["generator:source"]) {
    case "biomass":
      a += "Biogasanlage";
      break;

    case "biofuel":
      a += "Biogasanlage";
      break;

    case "biogas":
      a += "Biogasanlage";
      break;

    case "coal":
      a += "Kohlekraftwerk";
      break;

    case "oil":
      a += "\xD6lraffinerie";
      break;

    case "waste":
      a += "M\xFCllverbrennungsanlage";
      break;

    case "wind":
      a += "Windkraftwerk";
      break;

    case "solar":
      a += "Solarkraftwerk";
      break;

    case "hydro":
      a += "Wasserkraftwerk";
      break;

    case "tidal":
      a += "Gezeitenkraftwerk";
      break;

    case "wave":
      a += "Wellenkraftwerk";
      break;

    case "geothermal":
      a += "Geothermie";
      break;

    case "osmotic":
      a += "Osmosekraftwerk";
      break;

    case "nuclear":
      a += "Atomkraftwerk";
      break;

    default:
      a += "unbekannt<br/>";
  }
  "photovoltaic" == b.power_source && (a += "Solarkraftwerk");
  "line" == b.power && (a += "Hochspannungs-\xDCbertragungsleitung<br/>");
  "cable" == b.power && (a += "Untergrundkabel<br/>");
  "cable_distribution_cabinet" == b.power && (a += "Kabelverteilerschrank<br/>");
  "plant" == b.power && (a += "Elektrizit\xE4tskraftwerk<br/>");
  "station" == b.power && (a += "Elektrizit\xE4tskraftwerk<br/>");
  "sub_station" == b.power && (a += "Elektrizit\xE4tskraftwerk<br/>");
  "compensator" == b.power && (a += "Kompensator<br/>");
  "converter" == b.power && (a += "Konverter<br/>");
  "generator" == b.power && (a += "Generator<br/>");
  "heliostat" == b.power && (a += "Heliostat<br/>");
  "insulator" == b.power && (a += "Isulator<br/>");
  "busbar" == b.line && (a += "Sammelschiene<br/>");
  "bay" == b.line && (a += "Verbindung Schaltung und Sammelschiene<br/>");
  "minor_line" == b.power && (a += "Nebenlinie<br/>");
  "pole" == b.power && (a += "Pfahl<br/>");
  "portal" == b.power && (a += "H-f\xF6rmiger Mast<br/>");
  "catenary_mast" == b.power && (a += "Fahrleitungsmast<br/>");
  "substation" == b.power && (a += "Umspannwerk<br/>");
  "switch" == b.power && (a += "Lastschalter<br/>");
  "terminal" == b.power && (a += "Terminal / Anschluss<br/>");
  "tower" == b.power && (a += "Hochspannungsleitungs<br/>");
  "transformer" == b.power && (a += "Nebenlinie<br/>");
  if (b.barrier) switch (b.barrier) {
    case "bollard":
      a += "Poller, Pfosten<br/>";
      break;

    case "cycle_barrier":
      a += "Umlaufsperre, Dr\xE4ngelgitter<br/>";
      break;

    case "gate":
      a += "Tor, Schranke<br/>";
      break;

    case "chain":
      a += "Kette<br/>";
      break;

    case "lift_gate":
      a += "Schlagbaum<br/>";
      break;

    case "wall":
      a += "L\xE4rmschutzwand<br/>";
      break;

    case "toll_booth":
      a += "Mautstelle<br/>";
      break;

    case "fence":
      switch (b.fence_type) {
        case "barbed_wire":
          a += "Stacheldrahtzaun<br/>";
          break;

        case "wood":
          a += "Holzzaun<br/>";
          break;

        case "chain_link":
          a += "Maschendrahtzaun<br/>";
          break;

        case "electric":
          a += "Weidezaun<br/>";
          break;

        case "railing":
          a += "Gel\xE4nder<br/>";
          break;

        case "wire":
          a += "einfacher Drahtzaun<br/>";
          break;

        case "metal":
          a += "Metallzaun<br/>";
          break;

        case "pole":
          a += "Holzpf\xE4hle<br/>";
          break;

        default:
          a += "Zaun<br/>";
      }

      break;

    case "block":
      a += "Block<br/>";
      break;

    case "ditch":
      a += "Graben<br/>";
      break;

    case "border_control":
      a += "Grenzkontrolle<br/>";
      break;

    case "hedge":
      a += "Hecke<br/>";
      break;

    case "retaining_wall":
      a += "St\xFCtzmauer<br/>";
      break;

    case "cattle_grid":
      a += "Weiderost<br/>";
      break;

    case "horse_stile":
      a += "Zaun\xFCbertritt<br/>";
      break;

    default:
      a += "unbekannt<br/>";
  }
  "noise_barrier" == b.wall && (a += "L\xE4rmschutzwand<br/>");
  "retaining_wall" == b.designation && (a += "L\xE4rmschutzwand<br/>");
  "noise_barrier" == b.designation && (a += "L\xE4rmschutzwand<br/>");
  "surveillance" == b.man_made && (a += "\xDCberwachter Bereich<br/>");
  if (b.aeroway) switch (a += "Flughafen: ", b.aeroway) {
    case "aerodrome":
      a += "Flugplatz";
      break;

    case "apron":
      a += "Vorfeld";
      break;

    case "gate":
      a += "gate";
      break;

    case "helipad":
      a += "Hubschrauberlandeplatz";
      break;

    case "hangar":
      a += "Hangar";
      break;

    case "runway":
      a += "Start-/Landebahn";
      break;

    case "taxiway":
      a += "Rollweg";
      break;

    case "terminal":
      a += "Flughafengeb\xE4ude";
      break;

    default:
      a += "unbekannt<br/>";
  }
  "halt" == b.railway && (a += "Bahn-Haltepunkt<br/>");
  "crossing" == b.railway && (a += "Bahn\xFCbergang<br/>");
  "level_crossing" == b.railway && (a += "Bahn\xFCbergang<br/>");
  "station" == b.railway && (a += "Bahnhof<br/>");
  "bus_station" == b.amenity && (a += "Busbahnhof<br/>");
  "bus_station" == !b.amenity && "station" == b.public_transport && "yes" == b.bus && (a += "Busbahnhof<br/>");
  "rail" == b.railway && (a += "Bahnlinie<br/>", "contact_line" == b.electrified && (a += "elektrifizierte Bahntrasse mit Oberleitung<br/>"));
  "tram" == b.railway && (a += "Stra\xDFenbahnlinie<br/>");
  if ("slipway" == b["seamark:small_craft_facility:category"] || "slipway" == b.harbour || "slipway" == b.leisure) a += "Slipanlage<br/>";
  if ("harbour" == b["seamark:type"]) if (b["seamark:harbour:category"]) switch (b["seamark:harbour:category"]) {
    case "ferry":
      a += "F\xE4hrhafen<br/>";
      break;

    case "container":
      a += "Containerhafen<br/>";
      break;

    case "marina":
      "marina" != b.leisure && (a += "Jachthafen<br/>");
      break;

    case "navel_base":
      a += "Marine-Hafen<br/>";
      break;

    case "tanker":
      a += "Hafen f\xFCr \xD6ltanker<br/>";
      break;

    case "passenger":
      a += "Personenschifffahrt<br/>";
      break;

    case "bulk":
      a += "Sch\xFCttgut-Hafen<br/>";
      break;

    default:
      a += "Hafen<br/>";
  } else a += "Hafen<br/>";
  "marina" == b.leisure && (a += "Jachthafen<br/>");
  "wreck" == b.historic && (a += "Wrack<br/>");
  "animal_shelter" == b.amenity && (a += "Tierheim<br/>");
  "shelter" == b.animal && (a += "Tierheim<br/>");
  "horse_walker" == b.animal && (a += "Pferdelauftrainer<br/>");
  "yes" == b.animal_shelter && (a += "Tierheim<br/>");
  "dog" == b.animal_shelter && (a += "Tierheim<br/>");
  "cat" == b.animal_shelter && (a += "Tierheim<br/>");
  "animal_boarding" == b.amenity && (a += "Tierpension<br/>");
  "yes" == b.animal_boarding && (a += "Tierpension<br/>");
  "dog" == b.animal_boarding && (a += "Tierpension<br/>");
  "horse" == b.animal_boarding && (a += "Tierpension<br/>");
  "cat" == b.animal_boarding && (a += "Tierpension<br/>");
  "dog;cat" == b.animal_boarding && (a += "Tierpension<br/>");
  "cat;dog" == b.animal_boarding && (a += "Tierpension<br/>");
  if ("school" == b.animal || "sport" == b.animal || "animal_training" == b.amenity) a += "Tiertraining<br/>";
  "swimming" == b.animal && (a += "Badestelle f\xFCr Hunde<br/>");
  if ("feeding_place" == b.amenity || "animal_feeding" == b.man_made || "animal_feeding" == b.amenity) a += "F\xFCtterungsstelle<br/>";
  if ("wildlife_feeding" == b.amenity || "deer_feeding" == b.amenity || "game_feeding" == b.amenity) a += "Wildf\xFCtterung<br/>";
  if ("cratch" == b.amenity || "cratch" == b.man_made || "feeding_rack" == b.amenity) a += "Futterraufe<br/>";
  "manger" == b.amenity && (a += "Krippe<br/>");
  "birdhouse" == b.man_made && (a += "Vogelhaus<br/>");
  "stork" == b.birds_nest && (a += "Storchennest<br/>");
  "nest_box" == b.amenity && (a += "Nistkasten<br/>");
  "wellness" == b.animal && (a += "Hundesalon<br/>");
  "cemetery" == b.animal && (a += "Kleintierfriedhof<br/>");
  if ("stable" == b.building || "stable" == b["building:use"]) a += "Pferdestall<br/>";
  "cowshed" == b.building && (a += "Kuhstall<br/>");
  "sty" == b.building && (a += "Schweinestall<br/>");
  "barn" == b.building && (a += "Scheune / landwirtsch. Lagerhalle<br/>");
  "farm_auxiliary" == b.building && (a += "landwirtschaftl. Nebengeb\xE4ude<br/>");
  if (b["river:waterway_distance"] || "milestone" == b.waterway) a += "Flusskilometer<br/>";
  "milestone" == b.highway && (a += "Strassenkilometer<br/>");
  "market" == b["xmas:feature"] && (a += "Weihnachtsmarkt<br/>");
  "tree" == b["xmas:feature"] && (a += "Weihnachtsbaumverkauf<br/>");
  "event" == b["xmas:feature"] && (a += "Weihnachtsevent<br/>");
  "pyramid" == b["xmas:feature"] && (a += "Weihnachtspyramide<br/>");
  return '<div class="c4g_popup_header_featuretype">' + a + "<br/> </div>";
}

var fnContent = function fnContent(b) {
  var a;
  a = "" + fnContentGeneralInformations(b);
  a += fnContentHealthcare(b);
  a += fnContentAerodrome(b);
  a += fnContentCuisine(b);
  a += fnContentShipping(b);
  a += fnContentHydrants(b);
  a += fnContentSports(b);
  a += fnContentStreetsTraffic(b);
  a += fnContentInformationCity(b);
  a += fnContentEmergency(b);
  a += fnContentStorage(b);
  a += fnContentAmenity(b);
  a += fnContentTourism(b);
  a += fnContentRoute(b);
  a += fnContentPetrol(b);
  a += fnContentBarriers(b);
  a += fnContentLanduse(b);
  a += fnContentNatural(b);
  a += fnKlosterAdditional(b);
  a += fnSicherheitAdditional(b);
  a += fnAdditionalBuildingInfos(b);
  a += fnKraftwerkInfo(b);
  a += fnMessstation(b);
  a += fnWertstoffinfo(b);
  (a += fnContentProtectedArea(b)) && (a = "<br/>" + a);
  return '<div class="c4g_popup_content">' + a + "</div>";
},
    fnContentAerodrome = function fnContentAerodrome(b) {
  var a = "";
  b.aerodrome && ("international" == b.aerodrome && (a += "Flughafentype: internationaler Flugplatz<br/>"), "regional" == b.aerodrome && (a += "Flughafentype: regionaler Flugplatz<br/>"), "gliding" == b.aerodrome && (a += "Flughafentype: Segelflugplatz<br/>"), "private" == b.aerodrome && (a += "Flughafentype: Privatflugplatz<br/>"));
  b.iata && (a += "IATA-Code: " + b.iata + "<br/>");
  b.icao && (a += "ICAO-Code: " + b.icao + "<br/>");
  return a;
},
    fnContentNatural = function fnContentNatural(b) {
  var a = "";

  if (b.forest || b.wood) {
    if ("broadleaved" == b.leaf_type || "deciduous" == b.wood) a += "Laubwald<br/>";
    if ("needleleaved" == b.leaf_type || "coniferous" == b.wood) a += "Nadelwald<br/>";
    if ("mixed" == b.leaf_type || "mixed" == b.wood) a += "Mischwald<br/>";
    "leafless" == b.leaf_type && (a += "Blattlose Vegetation<br/>");
    "evergreen" == b.wood && (a += "immergr\xFCn<br/>");
    "palm" == b.wood && (a += "Palmen<br/>");
    "nipa_palm" == b.wood && (a += "Nipapalmen<br/>");
    "eucalypt" == b.wood && (a += "Eukalypten<br/>");
    if ("filao" == b.wood || "casuarina" == b.wood) a += "Kasuarinengew\xE4chse<br/>";
  }

  if ("tree" == b.natural && (!b["genus:de"] && !b["species:de"] && b.leaf_type && (a = "broadleaved" == b.leaf_type || "deciduous" == b.leaf_type || "broadleafed" == b.leaf_type ? a + "Laubbaum<br/>" : a + "Nadelbaum<br/>"), b.genus && (a += b.genus + "<br/>"), b["genus:de"] && (a += b["genus:de"] + "<br/>"), b.species && (a += b.species + "<br/>"), b["species:de"] && (a += b["species:de"] + "<br/>"), "landmark" == b.denotation && (a += "durch Gr\xF6\xDFe und herausragender Position sich deutlich aus seinem Umfeld hervorhebender Baum.<br/>"), "natural_monument" == b.denotation || "yes" == b.monument)) a += "alter, unter besonderem Schutz stehender Baum.<br/>";
  "manger" == b["feeding:type"] && (a += "Futterbeh\xE4lter: Futterraufe<br/>");
  "automated" == b["feeding:type"] && (a += "Automat<br/>");
  if (b["feeding:for"]) switch (b["feeding:for"]) {
    case "sheep":
      a += "Tier: Schaaf<br/>";
      break;

    case "horse":
      a += "Tier: Pferd<br/>";
      break;

    case "cow":
      a += "Tier: Kuh<br/>";
      break;

    case "rabbit":
      a += "Tier: Kaninchen<br/>";
      break;

    case "bunny":
      a += "Tier: Hase<br/>";
      break;

    case "cat":
      a += "Tier: Katze </br>";
      break;

    case "swan":
      a += "Tier: Schwan </br>";
      break;

    case "guinea pig":
      a += "Tier: Meerschweinchen </br>";
      break;

    case "donkey":
      a += "Tier: Esel </br>";
      break;

    case "squirrel":
      a += "Tier: Eichh\xF6rnchen </br>";
      break;

    case "pig":
      a += "Tier: Schwein </br>";
      break;

    case "deer":
      a += "Tier: Reh </br>";
      break;

    case "guinea pig":
      a += "Tier: Meerschweinchen </br>";
      break;

    case "monkey":
      a += "Tier: Affe </br>";
      break;

    case "camel":
      a += "Tier: Kamel </br>";
      break;

    case "goat":
      a += "Tier: Ziege </br>";
      break;

    case "hamster":
      a += "Tier: Hamster </br>";
      break;

    case "alpaca":
      a += "Tier: Alpaka </br>";
      break;

    default:
      a += "Tiere: nicht bekannt<br/>";
  }
  if (b["feeding:fodder"]) switch (b["feeding:fodder"]) {
    case "hay":
      a += "F\xFCttern mit: Heu</br>";
      break;

    case "grain":
      a += "F\xFCttern mit: Getreide</br>";
      break;

    case "corn":
      a += "F\xFCttern mit: Korn</*br>";
      break;

    default:
      a += "F\xFCttern mit: nicht bekannt</br>";
  }
  "volcano" == b.natural && "active" == b.status && (a += "Aktiver Vulkan<br/>");
  "volcano" == b.natural && "dormant" == b.status && (a += "Ruhender Vulkan<br/>");
  "volcano" == b.natural && "extinct" == b.status && (a += "Erloschener Vulkan<br/>");
  "volcano" == b.natural && "stratovolcano" == b.type && (a += "Vulkantyp:Schichtvulkan<br/>");
  "volcano" == b.natural && "shield" == b.type && (a += "Vulkantyp:Schildvulkan<br/>");
  "volcano" == b.natural && "scoria" == b.type && (a += "Vulkantyp:Schlacken- und Aschenkegel<br/>");
  return a;
},
    fnContentProtectedArea = function fnContentProtectedArea(b) {
  var a = "",
      c = "";
  "protected_area" == b.boundary && (b.protect_class && (c = b.protect_class), b.protect_id && (c = b.protect_id), "1" == c && (a = "Beschreibung: Strenges Naturreservat, Wildnisgebiet<br/>"), "2" == c && (a = "Beschreibung: Nationalpark<br/>"), "3" == c && (a = "Beschreibung: Naturmonument<br/>"), "4" == c && (a = "Beschreibung: Biotop/Artenschutzgebiet mit Management<br/>"), "5" == c && (a = "Beschreibung: Gesch\xFCtzte Landschaft/Gesch\xFCtztes marines Gebiet<br/>"), "6" == c && (a = "Beschreibung: Ressourcenschutzgebiet mit Management<br/>"), "7" == c && (a = "Beschreibung: Lokal gesch\xFCtzte Bereiche<br/>"), "97" == c && (a = "Beschreibung: Gesch\xFCtzt oder ausgezeichnet durch Vereinbarungen auf kontinentaler Ebene<br/>"), "98" == c && (a = "Beschreibung: Gesch\xFCtzt oder ausgezeichnet durch zwischenstaatliche- oder internationale Vereinbarungen<br/>"), "99" == c && (a = "andere <br/>"), "21" == c && (a = "Beschreibung: Gemeindebefinden (heilige Orte, assoziatice Orte)<br/>"), "22" == c && (a = "Beschreibung: Kulturelle Werte (Kulturg\xFCter, historisches Erbe, Denkmalschutz)<br/>"), "23" == c && (a = "Beschreibung: Schutz zu Gundsten der Wirtschaft<br/>"), "24" == c && (a = "Beschreibung: Politische Schutzgebiete<br/>"), "25" == c && (a = "Beschreibung: Milit\xE4rische Schutzgebiete<br/>"), "26" == c && (a = "Beschreibung: Historische Schutzgebiete<br/>"), "29" == c && (a = "Beschreibung: Weitere gesellschaftliche Schutzgebiete<br/>"), "11" == c && (a = "Beschreibung: Bodenschutz (Vorgabe zum Fruchtbarkeitserhalt und Erosionsschutz)<br/>"), "12" == c && (a = "Beschreibung: Wasserschutzgebiet (Trinkwasserschutzgebiet, Heilquellenschutzgebiet,..)<br/>"), "13" == c && (a = "Beschreibung: Klima und Luft (Kaltluftenstehung/Frischluftversorgung, Immissionsschutz,..)<br/>"), "14" == c && (a = "Beschreibung: Artenschutzgebiet (Angelverbot, Fischereischutzzone, Jagdschutzgebiet, Vogelschutzgebiet,..)<br/>"), "15" == c && (a = "Beschreibung: \"Standortausstattung\": Retentionsraum (gesetzlich gesch\xFCtztes \xDCberschwemmungsgebiet) <br/>"), "16" == c && (a = "Beschreibung: Dauerhafte Gefahrenbereiche (Lebensschutz, Bodenbewegungsgebiet,..)<br/>"), "19" == c && (a = "Beschreibung: Weitere nationale Gebiete<br/>"));
  return a;
},
    fnContentLanduse = function fnContentLanduse(b) {
  var a = "";
  "quarry" == b.landuse && b.resource && (a += "Resource: " + b.resource + "<br/>");
  "open_stable" == b["animal_keeping:type"] && (a += "Offenstall<br/>");
  "field_shelter" == b["animal_keeping:type"] && (a += "Weide mit Unterstand<br/>");
  "paddock" == b["animal_keeping:type"] && (a += "Paddock<br/>");
  b.animal_keeping && (a += "Tiere: Perde<br/>");
  return a;
},
    fnMessstation = function fnMessstation(b) {
  var a = "";
  "yes" == b["monitoring:water_level"] && (a += "Pegelstand<br/>");
  "yes" == b["monitoring:seismic_activity"] && (a += "seismische Aktivit\xE4ten<br/>");
  "yes" == b["monitoring:tide_gauge"] && (a += "Tidestand<br/>");
  "yes" == b["monitoring:weather"] && (a += "Wetterdaten<br/>");
  "yes" == b["monitoring:air_quality"] && (a += "Luftqualit\xE4t<br/>");
  return a;
},
    fnContentRoute = function fnContentRoute(b) {
  var a = "";
  b.route && ("yes" == b.roundtrip && (a += "Rundweg<br/>"), b.length && (a += "L\xE4nge/Distanz: " + b.length + "<br/>"), b.distance && (a += "L\xE4nge/Distanz: " + b.distance + "<br/>"), b.symbol && (a += "Symbol: " + b.symbol + "<br/>"));
  return a;
},
    fnContentPetrol = function fnContentPetrol(b) {
  var a = "";
  "fuel" == b.amenity && ("yes" == b["fuel:biodiesel"] && (a += "Biodiesel<br/>"), "yes" == b["fuel:e85"] && (a += "Ethanol<br/>"), "yes" == b["fuel:e10"] && (a += "E10<br/>"), "yes" == b["fuel:lpg"] && (a += "Autogas<br/>"), "yes" == b["fuel:cng"] && (a += "Erdgas<br/>"), "diesel" == b.fuel && (a += "Diesel<br/>"), "lpg" == b.fuel && (a += "Autogas<br/>"), "yes" == b["fuel:octane_95"] && (a += "Super Bleifrei<br/>"), "yes" == b["fuel:octane_98"] && (a += "Super Plus<br/>"), "yes" == b["fuel:octane_100"] && (a += "V-Power Racing<br/>"), "yes" == b["fuel:octane_102"] && (a += "Ultimate<br/>"), "yes" == b["fuel:diesel"] && (a += "Diesel<br/>"), "yes" == b["fuel:electricity"] && (a += "Ladestation / Stromtankstelle<br/>"));
  return a;
},
    fnContentHistoric = function fnContentHistoric(b) {
  var a = "";
  if ("archaeological_site" == b.historic && b.site_type) switch (b.site_type) {
    case "megalith":
      a += "Megalith<br/>";
      break;

    case "bigstone":
      a += "Findling<br/>";
      break;

    case "tumulus":
      a += "H\xFCgelgrab<br/>";
      break;

    case "fortification":
      a += "historischer Graben / Wall<br/>";
      break;

    default:
      a += "unbekannt<br/>";
  }
  return a;
},
    fnContentBarriers = function fnContentBarriers(b, a) {
  var c = "";
  if ("wall" == b.barrier || "bollard" == b.barrier) b.material && (c += "Material: " + translate(b.material) + "<br/>");
  return c;
},
    fnContentTourism = function fnContentTourism(b) {
  var a = "";

  if ("camp_site" == b.tourism) {
    "yes" == b.dog && (a += "Hunde erlaubt<br/>");
    "no" == b.dog && (a += "Hunde nicht erlaubt<br/>");
    b.stars && (a += b.stars + "Sterne<br/>");
    b.caravans && (a += "Wohnmobilstellpl\xE4tze<br/>");
    if ("yes" == b.openfire || "yes" == b.fireplace) a += "Feuerstellen vorhanden<br/>";
    "yes" == b.washing_machine && (a += "Waschmaschinen<br/>");
    "yes" == b.dryer && (a += "Trockner<br/>");
    "yes" == b.group_only && (a += "Nutzung nur durch Gruppen<br/>");
    "reception" == b.camp_site && (a += "Reception vorhanden<br/>");
  }

  "information" == b.tourism && "map" == b.information && ("topo" == b.map_type && (a += "Topografische Karte</br>"), "street" == b.map_type && (a += "Stra\xDFenkarte</br>"), "scheme" == b.map_type && (a += "Schematische Karte</br>"), "toposcope" == b.map_type && (a += "Schematische Karte</br>"));
  "information" == b.tourism && "map" == b.information && ("site" == b.map_size && (a += "Karte einer Anlage</br>"), "city" == b.map_size && (a += "Stadtplan</br>"), "region" == b.map_size && (a += "Karte der Region</br>"));
  "geology" == b.board_type && (a += "Geologische Informationen<br/>");
  "history" == b.board_type && (a += "Historische Informationen<br/>");
  "nature" == b.board_type && (a += "Informationen \xFCber Natur<br/>");
  "notice" == b.board_type && (a += "Allgemeine Information<br/>");
  "plants" == b.board_type && (a += "Informationen \xFCber Pflanzen<br/>");
  "wildlife" == b.board_type && (a += "Informationen \xFCber Wild<br/>");
  return a;
},
    fnContentAmenity = function fnContentAmenity(b) {
  var a = "";
  "boat_sharing" == b.amenity && (a += b.boattype + "<br/>");
  "embassy" == b.amenity && (a += b.country + "<br/>");
  if (b.vending) switch (b.vending) {
    case "admission_tickets":
      a += "Tickets<br/>";
      break;

    case "animal_feed":
      a += "Tierfutter<br/>";
      break;

    case "books":
      a += "B\xFCcher<br/>";
      break;

    case "candles":
      a += "Kerzen<br/>";
      break;

    case "cigarettes":
      a += "Zigaretten<br/>";
      break;

    case "condoms":
      a += "Kondome<br/>";
      break;

    case "drinks":
      a += "Getr\xE4nke<br/>";
      break;

    case "first_aid":
      a += "Erste Hilfe Artikel<br/>";
      break;

    case "fishing_tackle":
      a += "Angelequipment<br/>";
      break;

    case "flowers":
      a += "Blumen<br/>";
      break;

    case "ice_cream":
      a += "Eis<br/>";
      break;

    case "laundry_detergent":
      a += "Waschmittel<br/>";
      break;

    case "newspapers":
      a += "Zeitung<br/>";
      break;

    case "SIM_cards":
      a += "SIM-Karten<br/>";
      break;

    case "sweets":
      a += "S\xFC\xDFigkeiten<br/>";
      break;

    case "parcel_pickup":
      a += "Paketstation<br/>";
      break;

    case "ice_cubes":
      a += "Eisw\xFCrfel<br/>";
      break;

    case "public_transport_tickets":
      a += "Tickets f\xFCr \xF6ffentliche Verkehrsmittel<br/>";
      break;

    case "parking_ticket":
      a += "Parkticket<br/>";
      break;

    case "sex_toys":
      a += "Sexspielzeug<br/>";
      break;

    case "stamps":
      a += "Briefmarken<br/>";
      break;

    case "toll":
      a += "Mauttickets<br/>";
      break;

    case "umbrellas":
      a += "Regenschirme<br/>";
      break;

    default:
      a += "Inhalt unbekannt<br/>";
  }
  "post_box" == b.amenity && (b.collection_times && (a += "Leerungszeiten: " + b.collection_times + "<br/>"), "yes" == b.drive_through && (a += "Vom Auto aus erreichbar. <br/>"));
  return a;
},
    fnContentStorage = function fnContentStorage(b) {
  var a = "";

  if ("storage_tank" == b.man_made) {
    if (b.content) {
      var c = b.content;

      switch (c) {
        case "fuel":
          c = "Diesel";
          break;

        case "oil":
          c = "\xD6l";
          break;

        case "gas":
          c = "Gas";
          break;

        case "slurry":
          c = "G\xFClle";
          break;

        case "cement":
          c = "Zement";
          break;

        case "water":
          c = "Wasser";
          break;

        case "manure":
          c = "D\xFCnger";
          break;

        case "silage":
          c = "Silage";
      }

      a += "Inhalt: " + c + "<br/>";
    }

    if (b.contents) {
      c = b.contents;

      switch (c) {
        case "fuel":
          c = "Diesel";
          break;

        case "oil":
          c = "\xD6l";
          break;

        case "gas":
          c = "Gas";
          break;

        case "slurry":
          c = "G\xFClle";
          break;

        case "cement":
          c = "Zement";
          break;

        case "water":
          c = "Wasser";
          break;

        case "manure":
          c = "D\xFCnger";
          break;

        case "silage":
          c = "Silage";
      }

      a += "Inhalt: " + c + "<br/>";
    }
  }

  b.storage && ("gas" == b.storage && (a += "Inhalt: Gas<br/>"), "oil" == b.storage && (a += "Inhalt: \xD6l<br/>"));
  return a;
},
    fnContentInformationCity = function fnContentInformationCity(b) {
  var a = "";
  b["name:de"] && (a += "deutscher Name: " + b["name:de"] + "<br/>");
  if (1E4 <= b.population) if (b.population = "" + b.population, 3 < b.population.length) {
    var c = b.population.length % 3,
        d = 0 < c ? b.population.substring(0, c) : "";

    for (var i = 0; i < Math.floor(b.population.length / 3); i++) {
      d = 0 == c && 0 == i ? d + b.population.substring(c + 3 * i, c + 3 * i + 3) : d + ("." + b.population.substring(c + 3 * i, c + 3 * i + 3));
    }

    a += "Einwohnerzahl: " + d + "<br/>";
  } else a += "Einwohnerzahl " + b.population + "<br/>";
  1E4 >= b.population && (a += "Einwohnerzahl: " + b.population + "<br/>");
  return a;
},
    fnContentEmergency = function fnContentEmergency(b) {
  var a = "";
  b.lifeboat && ("inshore" == b.lifeboat ? a += "Einsatzgebiet: Inshore (Binnen)<br/>" : "offshore" == b.lifeboat && (a += "Einsatzgebiet: Offshore (Buten)<br/>"));
  b["lifeboat:class"] && (a += "Bootstyp: " + b["lifeboat:class"] + "<br/>");

  if (b["siren:type"]) {
    var c = b["siren:type"];

    switch (c) {
      case "mechanical":
        c = "mechanisch";
        break;

      case "electronic":
        c = "elektronisch";
        break;

      case "pneumatic":
        c = "pneumatisch";
        break;

      case "electromechanic":
        c = "elektromechanisch";
    }

    a += "Typ: " + c + "<br/>";
  }

  if (b["siren:purpose"]) {
    c = b["siren:purpose"];

    switch (c) {
      case "air_raid":
        c = "Luftschutz";
        break;

      case "tornado":
        c = "Tornado";
        break;

      case "storm":
        c = "Sturm";
        break;

      case "civil_defense":
        c = "Bev\xF6lkerungsschutz";
        break;

      case "fire":
        c = "Feuer";
    }

    a += "Nutzung: " + c + "<br/>";
  }

  b["siren:model"] && (a += "Model: " + b["siren:model"] + "<br/>");
  b["siren:range"] && (a += "H\xF6rweite: " + b["siren:range"] + "<br/>");
  return a;
},
    fnContentCuisine = function fnContentCuisine(b) {
  var a = "";

  if (b.cuisine) {
    var c = "",
        a = ("supermarket" == b.shop || "convenience" == b.shop || "deli" == b.shop || "organic" == b.shop) && "restaurant" != b.amenity ? a + "Spezialit\xE4ten: " : a + "K\xFCche: ";
    "arabic" == b.cuisine && (c += "arabisch<br/>");
    "italian" == b.cuisine && (c += " italienisch<br/>");
    "international" == b.cuisine && (c += " international<br/>");
    "regional" == b.cuisine && (c += " regional<br/>");
    "chinese" == b.cuisine && (c += " chinesisch<br/>");
    "greek" == b.cuisine && (c += " griechisch<br/>");
    "african" == b.cuisine && (c += " afrikanisch<br/>");
    "german" == b.cuisine && (c += " deutsch<br/>");
    "mexican" == b.cuisine && (c += " mexikanisch<br/>");
    "french" == b.cuisine && (c += " franz\xF6sisch<br/>");
    "indian" == b.cuisine && (c += " indisch<br/>");
    "iranian" == b.cuisine && (c += " iranisch<br/>");
    "lebanese" == b.cuisine && (c += " libanesisch<br/>");
    "thai" == b.cuisine && (c += " thail\xE4ndisch<br/>");
    "balkan" == b.cuisine && (c += " balkan<br/>");
    "turkish" == b.cuisine && (c += " t\xFCrkisch<br/>");
    "bavarian" == b.cuisine && (c += " bayrisch<br/>");
    "czech" == b.cuisine && (c += " tschechisch<br/>");
    "portuguese" == b.cuisine && (c += " portugiesisch<br/>");
    "spanish" == b.cuisine && (c += " spanisch<br/>");
    "japanese" == b.cuisine && (c += " japanisch<br/>");
    "fish" == b.cuisine && (c += " Fisch<br/>");
    "brazilian" == b.cuisine && (c += " brasilianisch<br/>");
    "asian" == b.cuisine && (c += " asiatisch<br/>");
    "mediterranean" == b.cuisine && (c += " mediterran<br/>");
    "seafood" == b.cuisine && (c += " Meeresfr\xFCchte<br/>");
    "ice_cream" == b.cuisine && (c += " Eiscrem<br/>");
    "burger" == b.cuisine && (c += " Fast Food<br/>");
    "frozen_yogurt" == b.cuisine && (c += " Frozen Yogurt<br/>");
    "" == c && (c = b.cuisine + "<br/>");
    a += c;
  }

  return a;
},
    fnContentShipping = function fnContentShipping(b) {
  var a = "";
  b.harbour = "yes";
  "yes" == b["access:tide"] && (a += "Zufahrtsbeschr\xE4nkung durch Tide</br>");
  "yes" == b["access:swell"] && (a += "Zufahrtsbeschr\xE4nkung durch Schwell</br>");
  "yes" == b["access:ice"] && (a += "Zufahrtsbeschr\xE4nkung durch Eis</br>");
  b.vhf_channel && (a += "UKW-Kanal: " + b.vhf_channel + "</br>");
  b.mmsi && (a += "MMSI-Nummer: " + b.mmsi + "</br>");
  b["harbour:information"] && (a += "Information :" + b["harbour:information"] + "</br>");
  "yes" == b.motorboat && (a += "Fahren mit Motor erlaubt</br>");
  "no" == b.motorboat && (a += "Fahren mit Motor nicht erlaubt</br>");
  b.CEMT && (a += "CEMT: " + b.CEMT + "</br>");
  "yes" == b.intermittent && (a += "Fluss zeitweise ausgetrocknet</br>");
  "yes" == b.tidal && (a += "Gezeiten beeinflussen die Str\xF6mung</br>");
  b.draft && (a += "Fahrwassertiefe: " + b.draft + " m</br>");
  if ("slipway" == b.leisure || "slipway" == b.harbour) "hand" == b.operating && (a += "Funktionsweise: Handbetrieb, Slipwagen<br/>"), "car" == b.operating && (a += "Funktionsweise: mit Auto, Bootsanh\xE4nger<br/>"), "cable_winch" == b.operating && (a += "Funktionsweise: Seilwinde<br/>"), "travellift" == b.operating && (a += "Funktionsweise: Travellift<br/>"), "crane" == b.man_made && (a += "mit Kran<br/>", b["crane:maxload"] && (a += "Maximale Last: " + b["crane:maxload"] + "<br/>"), b["ship:maxdraft"] && (a += "Maximaler Tiefgang: " + b["ship:maxdraft"] + "<br/>"), b["ship:maxlength"] && (a += "Maximale Bootsl\xE4nge: " + b["ship:maxlength"] + "<br/>")), "yes" == b.vehicle && (a += "Mit Fahrzeug erreichbar<br/>");
  a += fnWreckInfo(b);

  if ("ferry" == b.route || "ferry_terminal" == b.amenity || "yes" == b.ferry) {
    var c = b.duration;
    "" != c && "undefined" != c && null != c && (a += "Fahrtzeit in Std. : " + c + "<br/>");
    "yes" == b.motorcar && (a += "Autos erlaubt <br/>");
    "no" == b.motorcar && (a += "Autos nicht erlaubt <br/>");
    "no" == b.motor_vehicle && (a += "Fahrzeuge nicht erlaubt <br/>");
    "yes" == b.motor_vehicle && (a += "Fahrzeuge erlaubt <br/>");
    "yes" == b.vehicle && (a += "Fahrzeuge erlaubt <br/>");
    "no" == b.vehicle && (a += "Keine Fahrzeuge<br/>");
    "no" == b.bicycle && (a += "Keine Fahrr\xE4der<br/>");
    "no" == b.bicycle && (a += "Fahrr\xE4der erlaubt<br/>");
    "yes" == b.hgv && (a += "LKW erlaubt <br/>");
    "no" == b.hgv && (a += "LKW nicht erlaubt <br/>");
    "yes" == b.foot && (a += "Fussg\xE4nger erlaubt <br/>");
    "no" == b.foot && (a += "Fussg\xE4nger nicht erlaubt <br/>");
    "yes" == b.bicycle && (a += "Fahrradfahrer erlaubt <br/>");
    "no" == b.bicycle && (a += "Fahrradfahrer nicht erlaubt <br/>");
    "yes" == b["ferry:cable"] && (a += "Seilf\xE4hre<br/>");
  }

  if (b["seamark:light:1:colour"]) {
    c = b["seamark:light:1:colour"];

    switch (c) {
      case "white":
        c = "Wei\xDF";
        break;

      case "red":
        c = "Rot";
        break;

      case "green":
        c = "Gr\xFCn";
        break;

      case "blue":
        c = "Blau";
        break;

      case "yellow":
        c = "Gelb";
        break;

      case "amber":
        c = "Bernsteinfarben";
    }

    a += "Farbe des Lichts: " + c + "<br/>";
  }

  "lighthouse" == b.man_made && (b["seamark:light:1:character"] && (a += "Rhytmus des Lichtes: " + b["seamark:light:1:character"] + "<br/>"), b["seamark:light:1:period"] && (a += "Periode: " + b["seamark:light:1:period"] + "<br/>"), b["seamark:light:1:height"] && (a += "H\xF6he: " + b["seamark:light:1:height"] + " m<br/>"), b["seamark:light:1:range"] && (a += "Reichweite: " + b["seamark:light:1:range"] + " sm<br/>"));

  if (b["seamark:light:colour"]) {
    c = b["seamark:light:colour"];

    switch (c) {
      case "white":
        c = "Wei\xDF";
        break;

      case "red":
        c = "Rot";
        break;

      case "green":
        c = "Gr\xFCn";
        break;

      case "blue":
        c = "Blau";
        break;

      case "yellow":
        c = "Gelb";
        break;

      case "amber":
        c = "Bernsteinfarben";
    }

    a += "Farbe des Lichts: " + c + "<br/>";
  }

  "lighthouse" == b.man_made && (b["seamark:light:character"] && (a += "Rhytmus des Lichtes: " + b["seamark:light:character"] + "<br/>"), b["seamark:light:height"] && (a += "H\xF6he: " + b["seamark:light:height"] + " m<br/>"), b["seamark:light:range"] && (a += "Reichweite: " + b["seamark:light:range"] + " sm<br/>"), b["seamark:light:period"] && (a += "Periode: " + b["seamark:light:period"] + "<br/>"));
  return a;
},
    fnContentHydrants = function fnContentHydrants(b) {
  var a = "";

  if ("fire_hydrant" == b.emergency) {
    var c = b["fire_hydrant:count"];
    "undefined" != c && null != c && "" != c && (a += "Anzahl: " + c + "<br/>");
    c = b["fire_hydrant:diameter"];
    "undefined" != c && null != c && "" != c && (a += "Rohrdurchmesser: " + c + " mm<br/>");
    c = b["fire_hydrant:pressure"];
    "undefined" != c && null != c && "" != c && (a = "suction" == c ? a + "Druck in bar / Saugleitung: Saugleitung<br/>" : a + ("Druck in bar / Saugleitung: " + c + "<br/>"));
    c = b["fire_hydrant:position"];
    "undefined" != c && null != c && "" != c && ("lane" == c ? a += "Position: Fahrbahn<br/>" : "parking_lot" == c ? a += "Position: Parkbucht<br/>" : "sidewalk" == c ? a += "Position: B\xFCrgersteig<br/>" : "green" == c && (a += "Position: Wiese<br/>"));
    c = b.water_volume;
    "undefined" != c && null != c && "" != c && (a += "Volumen: " + c + "<br/>");
    c = b["fire_hydrant:awwa_class"];
    "undefined" != c && null != c && "" != c ? a += "AWWA Klasse: " + c + "<br/>" : (c = b.flow_rate, "undefined" != c && null != c && "" != c && (a += "Durchfluss: " + c + "<br/>"));
    c = b.water_source;
    "undefined" != c && null != c && "" != c && "main" != c && (a += "Wasserquelle: " + c + "<br/>");
    c = b["couplings:type"];
    "undefined" != c && null != c && "" != c && (a += "Kopplungstyp: " + c + "<br/>");
    c = b["couplings:diameter"];
    "undefined" != c && null != c && "" != c && (a += "Kopplungsdurchmesser: " + c + "<br/>");
    c = b["pillar:type"];
    "dry_barrel" === c && (a += "Typ \xDCberflurhydrant: " + c + "<br/>");
    "fire_hydrant" === b["disused:emergency"] && (a += "Aktuell unbrauchbar.");
    "" == a && (a = "Keine Details vorhanden.");
  }

  return a;
},
    fnContentStreetsTraffic = function fnContentStreetsTraffic(b) {
  var a = "";
  "yes" == b["red_turn:right"] && (a += "Ampel mit Gr\xFCnpfeil<br/>");
  "no" == b["red_turn:right"] && (a += "Ampel ohne Gr\xFCnpfeil<br/>");
  b.bridge && (b.height && (a += "H\xF6he \xFCber dem Grund: " + b.height + " m<br/>"), b.length && (a += "L\xE4nge der Br\xFCcke: " + b.length + " m<br/>"), b.bridge_ref && (a += "Bauwerksnummer: " + b.bridge_ref + "<br/>"), b.start_date && (a += "Baujahr: " + b.start_date + "</br>;"), b.maxweight && (a += "Tragf\xE4higkeit: " + b.maxweight + " t</br>"));
  b.highway && "yes" == b.toll && (a += "Mautpflichtige Stra\xDFe<br/>");
  "yes" == b["toll:hgv"] && (a += "Mautpflichtige Stra\xDFe f\xFCr LKWs<br/>");

  if (b.surface) {
    var c = b.surface,
        a = a + "Oberfl\xE4che: ";

    switch (c) {
      case "grass":
        a += "Gras<br/>";
        break;

      case "paved":
        a += "versiegelt<br/>";
        break;

      case "asphalt":
        a += "Asphalt<br/>";
        break;

      case "cobblestone":
        a += "Naturstein unbehauen<br/>";
        break;

      case "sett":
        a += "behauenes Steinpflaster<br/>";
        break;

      case "concrete":
        a += "Beton<br/>";
        break;

      case "unpaved":
        a += "ohne Stra\xDFenbelag<br/>";
        break;

      case "paving_stones":
        a += "Pflastersteine<br/>";
        break;

      case "compacted":
        a += "verdichtete Deckschicht aus Natursteinmaterial<br/>";
        break;

      case "dirt":
        a += "unbefestigt<br/>";
        break;

      case "fine_gravel":
        a += "Splitt/Kies<br/>";
        break;

      case "grass_paver":
        a += "Rasengittersteine<br/>";
        break;

      case "gravel":
        a += "Schotter<br/>";
        break;

      case "earth":
        a += "naturbelassene Oberfl\xE4che<br/>";
        break;

      case "ground":
        a += "naturbelassene Oberfl\xE4che<br/>";
        break;

      case "metal":
        a += "Metall<br/>";
        break;

      case "mud":
        a += "Matsch, Morast<br/>";
        break;

      case "sand":
        a += "Sand<br/>";
        break;

      case "wood":
        a += "Holz<br/>";
        break;

      case "tartan":
        a += "Tartan- oder Kunststoffbelag<br/>";
        break;

      case "artificial_turf":
        a += "Kunstrasen<br/>";
        break;

      case "clay":
        a += "Ascheplatz<br/>";
        break;

      default:
        a += "unbekannt<br/>";
    }
  }

  "grade1" == b.tracktype && (a += "Wegbeschaffenheit: Befestigter Weg (Asphalt, Beton oder Pflastersteine)<br/>");
  "grade2" == b.tracktype && (a += "Wegbeschaffenheit: Befestigter Weg (Schotter oder andere verdichtete Materialien)<br/>");
  "grade3" == b.tracktype && (a += "Wegbeschaffenheit: Befestigter oder ausgebesserter Weg, der harten und weichen Untergrund enth\xE4lt (z. B. Feinschotter-, Sand- oder Erdweg)<br/>");
  "grade4" == b.tracktype && (a += "Wegbeschaffenheit: Unbefestigter Weg, haupts\xE4chlich weiche Materialien, Pflanzenwuchs entlang der Spurmitte (z. B. Gras-, Sand- oder Erdweg)<br/>");
  "grade5" == b.tracktype && (a += "Wegbeschaffenheit: Unbefestigter Weg, Oberfl\xE4che besteht aus Sand, Erde etc., oft nur Abdruck in Gras, teilweise schwer von umgebendem Gel\xE4nde unterscheidbar<br/>");
  "yes" == b.motorcycle && (a += "<br/>mit dem Auto befahrbar.<br/>");
  "no" == b.motorcycle && (a += "<br/>keine motorisierten Fahrzeuge zugelassen.<br/>");
  "excellent" == b.trail_visibility && (a += "Wegerkennbarkeit: Gut ausgewiesener Weg<br/>");
  "good" == b.trail_visibility && (a += "Wegerkennbarkeit: Wegmarkierung sichbar, aber manchmal etwas schwer zu finden<br/>");
  "intermediate" == b.trail_visibility && (a += "Wegerkennbarkeit: Weg nicht durchgegend sichbar<br/>");
  "bad" == b.trail_visibility && (a += "Wegerkennbarkeit: Wegspur ist kaum zu erkennen<br/>");
  "horrible" == b.trail_visibility && (a += "Wegerkennbarkeit: Oft kein Weg vorhanden<br/>");
  "no" == b.trail_visibility && (a += "Wegerkennbarkeit: Meistens keine Wegspur zu erkennen<br/>");
  "hiking" == b.sac_scale && (a += "Weg: Weg gut gebahnt. (Schwierigskeitstyp: 1)</br>");
  "mountain_hiking" == b.sac_scale && (a += "Weg: Durchgehend gut ersichtlicher und gut begehbarer Weg (Schwierigskeitstyp: 2)</br>");
  "demanding_mountain_hiking" == b.sac_scale && (a += "Weg: Heikle Stellen k\xF6nnen mit Seilen oder Ketten gesichert sein. Leitern sind m\xF6glich. Eventuell sind die H\xE4nde f\xFCrs Gleichgewicht n\xF6tig. (Schwierigskeitstyp: 3)</br>");
  "alphine_hiking" == b.sac_scale && (a += "Weg: Wegspur kaum vorhanden. An gewissen Stellen ben\xF6tigt man die H\xE4nde zum weiterkommen (Schwierigskeitstyp: 4)</br>");
  "demanding_alphine_hiking" == b.sac_scale && (a += "Weg: Oft weglos, einzelne einfache Kletterstellen bis II. (Schwierigskeitstyp: 5)</br>");
  "difficult_alpine_hiking" == b.sac_scale && (a += "Weg: Schwieriges Alpinenwandern,Kletterstellen bis II. Schwierigskeitstyp: 6</br>");
  b["mtb:name"] && (a += "Fahrradstrecke :" + b["mtb:name"] + "</br>");
  "0" == b["mtb:scale"] && (a += "Mountainbikestrecke: Keine besondere Schwierigkeiten.</br>Wegbeschaffenheit: fester und griffiger Untergrund.</br>Hindernisse: Keine Hindernisse</br>Gef\xE4lle: Leicht bis m\xE4\xDFig</br>Kurven: weit</br>Fahrtechnik: keine besonderes fahrtechnisches K\xF6nnen n\xF6tig</br>");
  "1" == b["mtb:scale"] && (a += "Mountainbikestrecke: Der Weg enth\xE4lt flache Wurzeln und kleinere Steine. H\xE4ufig auch vereizelte Wasserrinnen und Erosionssch\xE4den</br>Wegbeschaffenheit: loserer Untergrund m\xF6glich, kleine Wurzeln und Steine</br>Hindernisse: kleine Hindernisse, Wasserrinnen, Erosionssch\xE4den</br>Gef\xE4lle: bis zu 40%</br>Kurven: eng</br>Fahrtechnik: Fahrtechnische Grundkentnisse n\xF6tig. Hindernisse k\xF6nnen \xFCberrollt werden</br>");
  "2" == b["mtb:scale"] && (a += "Mountainbikestrecke: Der Weg enth\xE4lt gr\xF6\xDFere Wurzeln und Steine. H\xE4ufig auch vereizelte Wasserrinnen und Erosionssch\xE4den</br>Wegbeschaffenheit: Untergrund meist nicht verfestigt, gr\xF6\xDFere Wurzeln und Steine</br>Hindernisse:  flache Abs\xE4tze und Treppen</br>Gef\xE4lle: bis zu 70%</br>Kurven: leichte Spitzkehren</br>Fahrtechnik: Fortgeschrittene Fahrtechnik n\xF6tig.</br>");
  "3" == b["mtb:scale"] && (a += "Mountainbikestrecke: Auf dem Weg findet man verblockte Singletrails mit vielen gr\xF6\xDFeren Felsbrocken und/oder Wurzelpassagen</br>Wegbeschaffenheit: verblockt, viele gro\xDFe Wurzeln/Felsen - rutschiger Untergrund, loses Ger\xF6ll</br>Hindernisse:  hohe Abs\xE4tze</br>Gef\xE4lle: 70% oder mehr</br>Kurven: enge Spitzkehren</br>Fahrtechnik: Sehr gute Bike-Beherrschung n\xF6tig.</br>");
  "4" == b["mtb:scale"] && (a += "Mountainbikestrecke: Auf dem Weg sind sehr steile und stark verblockte Singletrails mit gro\xDFen Felsbrocken und/oder anspruchsvollen Wurzelpassagen, dazwischen h\xE4ufig loses Ger\xF6ll und extreme Steilrampen</br>Wegbeschaffenheit: verblockt, viele gro\xDFe Wurzeln/Felsen - rutschiger Untergrund, loses Ger\xF6ll</br>Hindernisse:  Steilrampen, kaum fahrbare Abs\xE4tze</br>Gef\xE4lle: 70% oder mehr</br>Kurven:  \xD6senartige Spitzkehren</br>Fahrtechnik: Perfekte Bike-Beherrschung mit Trial-Techniken n\xF6tig.</br>");
  "5" == b["mtb:scale"] && (a += "Mountainbikestrecke: Der weg wird charakterisiert durch blockartiges Gel\xE4nde mit Gegenanstiegen, Ger\xF6llfeldern und Erdrutschen, \xF6senartigen Spitzkehren, mehreren hohen, direkt aufeinanderfolgenden Abs\xE4tzen und Hindernissen wie umgefallenen B\xE4umen</br>Wegbeschaffenheit: verblockt mit Gegenanstiegen / rutschiger Untergrund, loses Ger\xF6ll / der Weg ist eher ein Wandersteig</br>Hindernisse:  Steilrampen, kaum fahrbare Abs\xE4tze</br>Gef\xE4lle: 70% oder mehr</br>Kurven:  \xD6senartige Spitzkehren mit Hindernissen</br>Fahrtechnik: excellente Bike-Beherrschung spezieller Trial-Techniken n\xF6tig.</br>");
  "6" == b["mtb:scale"] && (a += "Mountainbikestrecke: Der weg ist hochanspruchsvoll, und selbst f\xFCr Profis und Trial-Fahrer nicht passierbar</br>Wegbeschaffenheit:  Gro\xDFteils nur noch kletterbar</br>Hindernisse: Abs\xE4tze > 2 m, Leitern, Trittstufen, Kletterstellen bei denen man beide H\xE4nde braucht.</br>Gef\xE4lle: 100% oder mehr</br>Kurven: - </br>Fahrtechnik:  hier reicht auch die beste Fahrtechnik nicht mehr</br>");
  "10" == b.maxspeed && (a += "Vekehrsber\xFChigter Bereich. Hier gilt eine maximale Fahrgeschwindigkeit von 10 Km/h sowie die Regel rechts vor links.</br>");
  "30" == b.maxspeed && (a += "Vekehrsber\xFChigter Bereich. Hier gilt rechts vor links sowie eine maximale Geschwindigkeit von 30 Km/h</br>");
  "50" == b.maxspeed && (a += "Maximal erlaubte Geschwindigkeit von 50 Km/h darf nicht \xFCberschritten werden </br>");
  "70" == b.maxspeed && (a += "Maximal erlaubte Geschwindigkeit von 50 Km/h darf nicht \xFCberschritten werden </br>");
  "80" == b.maxspeed && (a += "Maximale Geschwindigkeit von 80 Km/h darf nicht \xFCberschritten werden.</br>");
  "100" == b.maxspeed && (a += "Maximale Geschwindigkeit von 100 Km/h darf nicht \xFCberschritten werden.</br>");
  "no" == b.overtaking && (a += "\xDCberholverbot, Fahrzeuge d\xFCrfen nicht \xFCberholen !</br>");
  "yes" == b.noexit && (a += "Die Stra\xDFe endet hier, es handelt sich um eine Sackgasse</br>");
  "yes" == b.oneway && (a += "Es handelt sich hier um eine Einbahnstra\xDFe, sie d\xFCrfen diese Stra\xDFe nur in eine Richtung befahren</br>");
  "designated" == b.priority_road && (a += "Es handelt sich hierbei um eine Vorfahrtsstra\xDFe, derjenige, der sich auf dieser befindet, hat gegen\xFCber anderen Fahrzeugen die Vorfahrt!</br>");
  "end" == b.priority_road && (a += "Die Vorfahrtsstra\xDFe endet hier und die Regelung wird aufgehoben</br>");
  "emergency_bay" == b.highway && (a += "Hier befindet sich eine Bucht die nur in Notf\xE4llen zur Benuzung zur Verf\xFCgung steht</br>");
  "yes" == b.traffic_calming && (a += "Verkehrsberuhigter Bereich</br>");
  "bump" == b.traffic_calming && (a += "Kurze Bodenwelle</br>");
  "chicane" == b.traffic_calming && (a += "Zu umfahrendenes Hinderniss</br>");
  "choker" == b.traffic_calming && (a += "Fahrbahnverengung, zu umfahrende Hindernisse m\xF6glich</br>");
  "cushion" == b.traffic_calming && (a += "Bodenwelle mit L\xFCcken aus mehreren rechteckigen Huckeln</br>");
  "hump" == b.traffic_calming && (a += "vergleichbare Bodenwelle mit etwar einer L\xE4nge von 2-4M</br>");
  "island" == b.traffic_calming && (a += "Eine Verkehrsinsel</br>");
  "rumble_strip" == b.traffic_calming && (a += "Holperstreifen</br>");
  "table" == b.traffic_calming && (a += "lange Bodenwellen mit flachen Mittelst\xFCck</br>");

  if ("parking" == b.amenity && ("yes" == b.fee && (a += "kostenpflichtig<br/>"), c = b["capacity:women"], "" != c && "no" != c && null != c)) {
    var d = "unbekannt";
    "yes" != c && (d = c);
    a += "Frauenparkpl\xE4tze (Anzahl: " + d + ") <br/>";
  }

  b.park_ride && ("bus" == b.park_ride && (a += "Busanbindung<br/>"), "tram" == b.park_ride && (a += "Bahnanbindung<br/>"), "unknown" == b.park_ride && (a += "Verkehrsmittel unbekannt<br/>"));
  b["railway:position"] && (a += "Streckenkilometer<br/>Position: " + b["railway:position"] + "<br/>");
  b.uic_ref && (a += "UIC: " + b.uic_ref + "<br/>");
  return a;
},
    fnContentSports = function fnContentSports(b) {
  var a = "";
  "9pin" == b.sport && (a += "M\xF6gliche Sportart: Kegeln<br/>");
  "10pin" == b.sport && (a += "M\xF6gliche Sportart: Bowling<br/>");
  "american_football" == b.sport && (a += "M\xF6gliche Sportart: American Football<br/>");
  "aikido" == b.sport && (a += "M\xF6gliche Sportart: Aikido<br/>");
  "archery" == b.sport && (a += "M\xF6gliche Sportart: Bogenschie\xDFen<br/>");
  "athletics" == b.sport && (a += "M\xF6gliche Sportart: Leichtathletik<br/>");
  "australian_football" == b.sport && (a += "M\xF6gliche Sportart: Australian Football<br/>");
  "base" == b.sport && (a += "M\xF6gliche Sportart: Objektspringen<br/>");
  "badminton" == b.sport && (a += "M\xF6gliche Sportart: Badminton<br/>");
  "baseball" == b.sport && (a += "M\xF6gliche Sportart: Baseball<br/>");
  "basketball" == b.sport && (a += "M\xF6gliche Sportart: Basketball<br/>");
  "beachvolleyball" == b.sport && (a += "M\xF6gliche Sportart: Beachvolleyball<br/>");
  "bmx" == b.sport && (a += "M\xF6gliche Sportart: BMX<br/>");
  "boules" == b.sport && (a += "M\xF6gliche Sportart: Boccia<br/>");
  "boule" == b.sport && (a += "M\xF6gliche Sportart: Boccia<br/>");
  "bowls" == b.sport && (a += "M\xF6gliche Sportart: Bowls<br/>");
  "boxing" == b.sport && (a += "M\xF6gliche Sportart: Boxen<br/>");
  "canadian_football" == b.sport && (a += "M\xF6gliche Sportart: Canadian Football<br/>");
  "canoe" == b.sport && (a += "M\xF6gliche Sportart: Paddeln<br/>");
  "chess" == b.sport && (a += "M\xF6gliche Sportart: Schach<br/>");
  "cliff_diving" == b.sport && (a += "M\xF6gliche Sportart: Klippenspringen<br/>");
  "climbing" == b.sport && (a += "M\xF6gliche Sportart: Klettern<br/>");
  "climbing_adventure" == b.sport && (a += "M\xF6gliche Sportart: Klettern<br/>");
  "cricket" == b.sport && (a += "M\xF6gliche Sportart: Cricket<br/>");
  "cricket_nets" == b.sport && (a += "M\xF6gliche Sportart: Cricket Netz<br/>");
  "croquet" == b.sport && (a += "M\xF6gliche Sportart: Croquet<br/>");
  "curling" == b.sport && (a += "M\xF6gliche Sportart: Curling<br/>");
  "cycling" == b.sport && (a += "M\xF6gliche Sportart: Radrennen, Radsport<br/>");
  "dog_racing" == b.sport && (a += "M\xF6gliche Sportart: Hunderennen<br/>");
  if ("darts" == b.sport || "dart" == b.sport) a += "Darts<br/>";
  "fencing" == b.sport && (a += "M\xF6gliche Sportart: Fechten<br/>");
  "equestrian" == b.sport && (a += "M\xF6gliche Sportart: Reiten<br/>");
  "football" == b.sport && (a += "M\xF6gliche Sportart: American Football<br/>");
  "free_flying" == b.sport && (a += "M\xF6gliche Sportart: Freeflying<br/>");
  "gaelic_games" == b.sport && (a += "M\xF6gliche Sportart: Gaelic games<br/>");
  "golf" == b.sport && (a += "M\xF6gliche Sportart: Golf<br/>");
  "gymnastics" == b.sport && (a += "M\xF6gliche Sportart: Gymnastik<br/>");
  "hockey" == b.sport && (a += "M\xF6gliche Sportart: Hockey<br/>");
  "horseshoes" == b.sport && (a += "M\xF6gliche Sportart: Hufeisenwerfen<br/>");
  "horse_racing" == b.sport && (a += "M\xF6gliche Sportart: Pferderennen<br/>");
  "ice_stock" == b.sport && (a += "M\xF6gliche Sportart: Eisstockschie\xDFen<br/>");
  "judo" == b.sport && (a += "M\xF6gliche Sportart: Judo<br/>");
  "karting" == b.sport && (a += "M\xF6gliche Sportart: Kartfahren<br/>");
  "kitesurfing" == b.sport && (a += "M\xF6gliche Sportart: Kitesurfing<br/>");
  "korfball" == b.sport && (a += "M\xF6gliche Sportart: Korfball<br/>");
  "motor" == b.sport && (a += "M\xF6gliche Sportart: Motorsport<br/>");
  "multi" == b.sport && (a += "M\xF6gliche Sportart: Mehrfachsport<br/>");
  "obstacle_course" == b.sport && (a += "M\xF6gliche Sportart: Hindernislauf<br/>");
  "orienteering" == b.sport && (a += "M\xF6gliche Sportart: Orientierungslauf<br/>");
  "paddle_tennis" == b.sport && (a += "M\xF6gliche Sportart: Paddle-Tennis<br/>");
  "paragliding" == b.sport && (a += "M\xF6gliche Sportart: Gleitschirmfliegen<br/>");
  "Pelota" == b.sport && (a += "M\xF6gliche Sportart: Pelota<br/>");
  "rasquet" == b.sport && (a += "M\xF6gliche Sportart: Racquetball<br/>");
  "rowing" == b.sport && (a += "M\xF6gliche Sportart: Rudern<br/>");
  "rugby_league" == b.sport && (a += "M\xF6gliche Sportart: Rugby League<br/>");
  "rugby_union" == b.sport && (a += "M\xF6gliche Sportart: Rugby Union<br/>");
  "running" == b.sport && (a += "M\xF6gliche Sportart: Laufsport<br/>");
  "scuba_diving" == b.sport && (a += "M\xF6gliche Sportart: Sporttauchen<br/>");
  "shooting" == b.sport && (a += "M\xF6gliche Sportart: Sportschie\xDFen<br/>");
  "skating" == b.sport && (a += "M\xF6gliche Sportart: Eislaufsport<br/>");
  "skateboard" == b.sport && (a += "M\xF6gliche Sportart: Skateboard<br/>");
  "skiing" == b.sport && (a += "M\xF6gliche Sportart: Skifahren<br/>");
  "soccer" == b.sport && (a += "M\xF6gliche Sportart: Fu\xDFball<br/>");
  "surfing" == b.sport && (a += "M\xF6gliche Sportart: Surfen<br/>");
  "swimming" == b.sport && (a += "M\xF6gliche Sportart: Schwimmen<br/>");
  "table_tennis" == b.sport && (a += "M\xF6gliche Sportart: Tischtennis<br/>");
  "taekwondo" == b.sport && (a += "M\xF6gliche Sportart: Taekwondo<br/>");
  "team_handball" == b.sport && (a += "M\xF6gliche Sportart: Handball<br/>");
  "tennis" == b.sport && (a += "M\xF6gliche Sportart: Tennis<br/>");
  "toboggan" == b.sport && (a += "M\xF6gliche Sportart: Rodeln<br/>");
  "volleyball" == b.sport && (a += "M\xF6gliche Sportart: Volleyball<br/>");
  "water_ski" == b.sport && (a += "M\xF6gliche Sportart: Wasserski<br/>");
  "weightlifting" == b.sport && (a += "M\xF6gliche Sportart: Gewichtheben<br/>");
  "wrestling" == b.sport && (a += "M\xF6gliche Sportart: Ringen<br/>");
  return a;
};

exports.fnContentSports = fnContentSports;
exports.fnContentStreetsTraffic = fnContentStreetsTraffic;
exports.fnContentHydrants = fnContentHydrants;
exports.fnContentShipping = fnContentShipping;
exports.fnContentCuisine = fnContentCuisine;
exports.fnContentEmergency = fnContentEmergency;
exports.fnContentInformationCity = fnContentInformationCity;
exports.fnContentStorage = fnContentStorage;
exports.fnContentAmenity = fnContentAmenity;
exports.fnContentTourism = fnContentTourism;
exports.fnContentBarriers = fnContentBarriers;
exports.fnContentHistoric = fnContentHistoric;
exports.fnContentPetrol = fnContentPetrol;
exports.fnContentRoute = fnContentRoute;
exports.fnMessstation = fnMessstation;
exports.fnContentLanduse = fnContentLanduse;
exports.fnContentProtectedArea = fnContentProtectedArea;
exports.fnContentNatural = fnContentNatural;
exports.fnContentAerodrome = fnContentAerodrome;
exports.fnContent = fnContent;

function fnArztInfo(b) {
  var a = "",
      c = "",
      d = b["healthcare:speciality"];
  "" != d && ("general" == d && (c += "Allgemeinmedizin<br/>"), "allergology" == d && (c += "Allergologie<br/>"), "anaesthetics" == d && (c += "An\xE4sthesiologie<br/>"), "biochemistry" == d && (c += "Medizinische und chemische Labordiagnostik<br/>"), "biological_haematology" == d && (c += "Biologische H\xE4matologie<br/>"), "biology" == d && (c += "Medizinische Biologie<br/>"), "cardiology" == d && (c += "Kardiologie<br/>"), "cardiac_surgery" == d && (c += "Kardiovaskularchirurgie<br/>"), "child_psychiatry" == d && (c += "Kinder- u. Jugendpsychatrie<br/>"), "dental_oral_maxillo_facial_surgery" == d && (c += "Zahn-, Mund-, Kiefer- und Gesichtschirurgie<br/>"), "dermatology" == d && (c += "Hautkrankheiten<br/>"), "dermatovenereology" == d && (c += "Haut- und Geschlechtskrankheiten<br/>"), "diagnostic_radiology" == d && (c += "Diagnostische Radiologie<br/>"), "emergency" == d && (c += "Unfall- und Notfallmedizin<br/>"), "endocrinology" == d && (c += "Endokrinologie<br/>"), "gastroenterological_surgery" == d && (c += "Gastroenterologische Chirurgie<br/>"), "gastroenterology" == d && (c += "Gastroenterologie<br/>"), "geriatrics" == d && (c += "Geriatrie<br/>"), "gynaecology" == d && (c += "Geburtshilfe und Frauenheilkunde<br/>"), "haematology" == d && (c += "Allgemeine H\xE4matologie<br/>"), "hepatology" == d && (c += "Hepatologie<br/>"), "immunology" == d && (c += "Immunologie<br/>"), "infectious_diseases" == d && (c += "Ansteckende Krankheiten<br/>"), "intensive" == d && (c += "Intensivmedizin<br/>"), "internal" == d && (c += "Allgemeine (innere) Medizin<br/>"), "maxillofacial_surgery" == d && (c += "Mund-Kiefer-Gesichtschirurgie<br/>"), "nephrology" == d && (c += "Nierenkrankheiten<br/>"), "neurology" == d && (c += "Neurologie<br/>"), "neurophysiology" == d && (c += "Klinische Neurophysiologie<br/>"), "neuropsychiatry" == d && (c += "Neuropsychiatrie(Neurologie und Psychiatrie)<br/>"), "neurosurgery" == d && (c += "Neurochirurgie<br/>"), "nuclear" == d && (c += "Nuklearmedizin<br/>"), "occupational" == d && (c += "Arbeitsmedizin <br/>"), "oncology" == d && (c += "Onkologie<br/>"), "ophthalmology" == d && (c += "Augenheilkunde<br/>"), "orthopaedics" == d && (c += "Orthop\xE4die<br/>"), "otolaryngology" == d && (c += "Hals-Nasen-Ohren-Heilkunde<br/>"), "paediatric_surgery" == d && (c += "Kinderchirurgie<br/>"), "paediatrics" == d && (c += "Kinderheilkunde<br/>"), "palliative" == d && (c += "Palliativmedizin<br/>"), "physiatry" == d && (c += "Physikalischeund Rehabilitative Medizin<br/>"), "plastic_surgery" == d && (c += "Plastische Chirurgie<br/>"), "proctology" == d && (c += "Proktologie<br/>"), "psychiatry" == d && (c += "Psychiatrie<br/>"), "pulmonology" == d && (c += "Lungen- und Bronchialheilkunde<br/>"), "radiology" == d && (c += "Radiologie<br/>"), "radiotherapy" == d && (c += "Strahlentherapie<br/>"), "rheumatology" == d && (c += "Rheumatologie<br/>"), "stomatology" == d && (c += "Stomatologie<br/>"), "surgery" == d && (c += "Chirurgie<br/>"), "surgical_oncology" == d && (c += "Krebschirurgie<br/>"), "thoracic_surgery" == d && (c += "Thoraxchirurgie<br/>"), "transplant" == d && (c += "Transplantationsmedizin<br/>"), "trauma" == d && (c += "Unfallchirurgie<br/>"), "tropical" == d && (c += "Tropenmedizin<br/>"), "urology" == d && (c += "Urologie<br/>"), "vascular_surgery" == d && (c += "Gef\xE4\xDFchirurgie<br/>"), "venereology" == d && (c += "Geschlechtskrankheiten<br/>"), "acupuncture" == d && (c += "Akupunktur<br/>"), "naturopathy" == d && (c += "Naturheilkunde<br/>"), "chiropractic" == d && (c += "Chiropraktik <br/>"), "homeopathy" == d && (c += "Hom\xF6opathie<br/>"), "osteopathy" == d && (c += "Osteopathie<br/>"));
  "" != b.health_specialty && ("yes" == b["health_specialty:family_medicine"] && (c += "Allgemeinmedizin<br/>"), "yes" == b["health_specialty:emergency_medicine"] && (c += "Notfallmedizin<br/>"), "yes" == b["health_specialty:anaesthesiology"] && (c += "An\xE4sthesie<br/>"), "yes" == b["health_specialty:dermatology"] && (c += "Dermatologie<br/>"), "yes" == b["health_specialty:ear_nose_throat"] && (c += "Hals, Nasen, Ohren (HNO)<br/>"), "yes" == b["health_specialty:occupational_medicine"] && (c += "Arbeitsnmedizin<br/>"), "yes" == b["health_specialty:internal_medicine"] && (c += "innere Medizin<br/>"), "yes" == b["health_specialty:neurology"] && (c += "Neurologie<br/>"), "yes" == b["health_specialty:ophthalmology"] && (c += "Augenheilkunde<br/>"), "yes" == b["health_specialty:palliative_medicine"] && (c += "Palliativmedizin<br/>"), "yes" == b["health_specialty:psychiatry"] && (c += "Psychatrie<br/>"), "yes" == b["health_specialty:gynaecology"] && (c += "Gyn\xE4kologie<br/>"), "yes" == b["health_specialty:urology"] && (c += "Urologie<br/>"), "yes" == b["health_specialty:pain_medicine"] && (c += "Schmerzmedizin<br/>"), "yes" == b["health_specialty:environmental_medicine"] && (c += "Umweltmedizin<br/>"), "yes" == b["health_specialty:intensive_care_medicin"] && (c += "Intensivmedizin<br/>"), "yes" == b["health_specialty:paediatrics"] && (c += "Kinder- u. Jugendmedizin<br/>"), "yes" == b["health_specialty:physiatry"] && (c += "Physikalische und Rehabilitative Medizin<br/>"), "yes" == b["health_specialty:radiology"] && (c += "Radiologie<br/>"), "yes" == b["health_specialty:general"] && (c += "Allgemeinmedizin<br/>"), "yes" == b["health_specialty:occupational_therapy"] && (c += "Ergotherapie<br/>"), "yes" == b["health_specialty:pulmonology"] && (c += "Pneumologie<br/>"), "yes" == b["health_specialty:acupuncture"] && (c += "Akupunktur<br/>"), "yes" == b["health_specialty:orthopaedics"] && (c += "Orthop\xE4die<br/>"), "yes" == b["health_specialty:chiropractic"] && (c += "Chiropraktik<br/>"), "yes" == b["health_specialty:sports_medicine"] && (c += "Sportmedizin<br/>"));
  "" != c && (a = a + "Fachgebiete: " + ('<div class="c4g_open_text">' + c + "</div>"));
  return a;
}

function fnKraftwerkInfo(b) {
  var a = "";

  if (b["generator:method"]) {
    a += "Erzeugungsart: ";

    switch (b["generator:method"]) {
      case "combustion":
        a += "Verbrennung";
        break;

      case "thermal":
        a += "thermische Nutzung (z.B. Solarthermie)";
        break;

      case "pumping":
        a += "durch Pumpen (z.B. die Nutzung von Geothermie)";
        break;

      case "photovoltaic":
        a += "Photovoltaik";
        break;

      case "gasification":
        a += "Vergasung, danach Verbrennung";
        break;

      case "anaerobic_digestion":
        a += "Erzeugung von Biogas durch Verg\xE4rung";
        break;

      case "pyrolysis":
        a += "Pyrolyse, Aufspaltung durch hohe Temperaturen";
        break;

      case "fission":
        a += "Kernspaltung";
        break;

      case "fusion":
        a += "Kernfusion";
        break;

      default:
        a += "unbekannt<br/>";
    }

    a += "<br/>";
  }

  if (b.power_source) {
    a += "Erzeugungsart: ";

    switch (b.power_source) {
      case "photovoltaic":
        a += "Photovoltaik";
        break;

      default:
        a += "unbekannt<br/>";
    }

    a += "<br/>";
  }

  b["generator:output:electricity"] && (a += "elekt. Energieerzeugung: " + b["generator:output:electricity"] + "<br/>");
  b["generator:output:heat"] && (a += "therm. Energieerzeugung: " + b["generator:output:heat"] + "<br/>");
  b["generator:output:cold"] && (a += "therm. Energieerzeugung: " + b["generator:output:cold"] + "<br/>");
  b["generator:output"] && (a += "Nennleistung: " + b["generator:output"] + "<br/>");
  b["generator:output:hot_air"] && (a += "Art des Transportmediums: " + b["generator:output:hot_air"] + "<br/>");
  b["generator:output:cold_water"] && (a += "Art des Transportmediums: " + b["generator:output:cold_water"] + "<br/>");
  b["generator:output:cold_air"] && (a += "Art des Transportmediums: " + b["generator:output:cold_air"] + "<br/>");
  b["generator:output:compressed_air"] && (a += "Art des Transportmediums: " + b["generator:output:compressed_air"] + "<br/>");
  b["generator:output:steam"] && (a += "Art des Transportmediums: " + b["generator:output:steam"] + "<br/>");
  b["generator:output:vacuum"] && (a += "Art des Transportmediums: " + b["generator:output:vacuum"] + "<br/>");
  b["generator:output:battery_charging"] && (a += "Art des Transportmediums: " + b["generator:output:battery_charging"] + "<br/>");
  "PWR" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");
  "BWR-1" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");
  "BWR-2" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");
  "BWR-3" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");
  "BWR-4" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");
  "BWR-5" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");
  "BWR-6" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");
  "PHWR" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");
  "GCR" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");
  "FBR" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");
  "RBMK-1000" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");
  "RBMK-1500" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");
  "VVER" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");
  "CANDU" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");
  "CPR-1000" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");
  "EPR" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");
  "tokamak" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");
  "stellarator" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");
  "ICF" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");
  "cold-fusion" == b["generator:type"] && (a += "Generatortyp: " + b["generator:type"] + "<br/>");
  "wind_turbine" == b["generator:method"] && "horizontal_axis" == b["generator:type"] && (a += "Generatortyp: Horizontal-Achsen Windenergieanlage<br/>");
  "wind_turbine" == b["generator:method"] && "vertical_turbine" == b["generator:type"] && (a += "Generatortyp: Vertikalrotor<br/>");
  "francis_turbine" == b["generator:type"] && (a += "Generatortyp: Francis-Turbine<br/>");
  "kaplan_turbine" == b["generator:type"] && (a += "Generatortyp: Kaplan-Turbine<br/>");
  "pelton_turbine" == b["generator:type"] && (a += "Generatortyp: Pelton-Turbine<br/>");
  "stream" == b["generator:method"] && "horizontal_axis" == b["generator:type"] && (a += "Generatortyp: Gezeitenstromgenerator mit horizontaler Achse<br/>");
  "stream" == b["generator:method"] && "vertical_axis" == b["generator:type"] && (a += "Generatortyp: Gezeitenstromgenerator mit vertikaler Achse<br/>");
  "steam_turbine" == b["generator:type"] && (a += "Generatortyp: Dampfturbine<br/>");
  "heat_pump" == b["generator:type"] && (a += "Generatortyp: W\xE4rmepumpe<br/>");
  "solar_thermal_collector" == b["generator:type"] && (a += "Generatortyp: Sonnenkollektor<br/>");
  "solar_photovoltaic_panel" == b["generator:type"] && (a += "Generatortyp: Photovoltaic-System<br/>");
  "steam_generator" == b["generator:type"] && (a += "Generatortyp: Dampfgenerator<br/>");
  "gas_turbine" == b["generator:type"] && (a += "Generatortyp: Gasturbine<br/>");
  "combined_cycle" == b["generator:type"] && (a += "Generatortyp: Dampfgenerator<br/>");
  "reciprocating_engine" == b["generator:type"] && (a += "Generatortyp: Verbrennungsmotor/Blockheizkraftwerk<br/>");
  return a;
}

function fnWertstoffinfo(b) {
  var a = "";
  if ("container" == b.recycling_type || "centre" == b.recycling_type || "recycling" == b.amenity) "yes" == b["recycling:glass"] && (a += "Altglascontainer</br>"), "yes" == b["recycling:shoes"] && (a += "Schuhentsorgung</br>"), "yes" == b["recycling:cooking_oil"] && (a += "Speise-\xD6l-Entsorgung</br>"), "yes" == b["recycling:paper"] && (a += "Papierentsorgung</br>"), "yes" == b["recycling:engine_oil"] && (a += "\xD6l-Entsorgung (Maschinen-, Alt-und Motor\xF6l)</br>"), "yes" == b["recycling:clothes"] && (a += "Altkleidercontainer</br>"), "yes" == b["recycling:car_batteries"] && (a += "Auto-Batterien-Entsorgung</br>"), "yes" == b["recycling:cans"] && (a += "Blechdosenentsorgung</br>"), "yes" == b["recycling:scrap_metal"] && (a += "Altmetallentsorgung</br>"), "yes" == b["recycling:plastic"] && (a += "Plastikentsorgung</br>"), "yes" == b["recycling:batterries"] && (a += "Batterieentsorgung</br>"), "yes" == b["recycling:plastic_bottles"] && (a += "Plastikflaschenentsorgung</br>"), "yes" == b["recycling:green_waste"] && (a += "Gr\xFCnabf\xE4lle</br>"), "yes" == b["recycling:hardcore"] && (a += "Bauschutt und Stra\xDFenmaterial Entsorgung</br>");
  return a;
}

var fnContentGeneralInformations = function fnContentGeneralInformations(b) {
  var a = "";
  b.width && (a += "Breite: " + b.width + " m<br/>");
  b.height && (a += "H\xF6he: " + b.height + " m<br/>");
  b.maxwidth && (a += "Maximalbreite: " + b.maxwidth + " m<br/>");
  b.maxheight && (a += "Maximalh\xF6he: " + b.maxheight + " m<br/>");
  b.maxweight && (a += "Maximalgewicht: " + b.maxweight + " t<br/>");
  b.maxspeed && (a += "H\xF6chstgeschwindigkeit: " + b.maxspeed + " km/h<br/>");
  b.min_age && (a += "Mindestalter: " + b.min_age + "<br/>");
  b.max_age && (a += "Maximalalter: " + b.max_age + "<br/>");
  "yes" == b.nudism && (a += "Freik\xF6rperkultur<br/>");
  "yes" == b.ruins && (a += "Ruine<br/>");
  b.ele && (a += "H\xF6he \xFCber NN: " + b.ele + " m<br/>");
  b["xmas:day_date"] && (a += "Dauer von - bis: " + b["xmas:day_date"] + "<br/>");
  b["rotor:diameter"] && (a += "Rotordurchmesser: " + b["rotor:diameter"] + " m<br/>");
  b["xmas:note"] && (a += "Hinweis: " + b["xmas:note"] + "<br/>");
  "port" == b["seamark:beacon_lateral:category"] && (a += "Backbord<br/>");
  "starboard" == b["seamark:beacon_lateral:category"] && (a += "Steuerbord<br/>");
  "yes" == b["service:bicycle:retail"] && (a += "Fahrradverkauf<br/>");
  "yes" == b["service:bicycle:repair"] && (a += "Fahrradreparatur<br/>");
  "yes" == b["service:bicycle:rental"] && (a += "Fahrradverleih<br/>");
  "yes" == b["service:bicycle:pump"] && (a += "Benutzung einer Luftpumpe m\xF6glich<br/>");
  "yes" == b["service:bicycle:diy"] && (a += "Benutzung von Werkzeug m\xF6glich<br/>");
  "yes" == b["service:bicycle:cleaning"] && (a += "Fahrr\xE4der werden gewaschen<br/>");
  "yes" == b["service:bicycle:second_hand"] && (a += "Verkauf von gebrauchten Fahrr\xE4dern<br/>");
  "yes" == b["service:bicycle:charging"] && (a += "Elektro-Fahrr\xE4der k\xF6nnen geladen werden<br/>");
  "yes" == b.cafe && (a += "Kleine Caf\xE9-Ecke<br/>");
  "yes" == b.breakfast && (a += "Besonderes Fr\xFChst\xFCcksangebot<br/>");
  "yes" == b.snack && (a += "Back-Snacks warm oder kalt<br/>");
  "yes" == b.indoor_seating && (a += "Sitzm\xF6glichkeiten im Innenbereich<br/>");
  "yes" == b.outdoor_seating && (a += "Sitzm\xF6glichkeiten im Au\xDFenbereich<br/>");
  "yes" == b.self_service && (a += "Selbstbedienungsb\xE4ckerei<br/>");
  "yes" == b.bakehouse && (a += "Backstube<br/>");
  "yes" == b.pastry_shop && (a += "Geb\xE4ck aus der Konditorei<br/>");
  "yes" == b.fair_trade && (a += "einige Fair-Trade-Produkte im Sortiment<br/>");
  "only" == b.fair_trade && (a += "fast ausschlie\xDFlich Fair-Trade-Produkte im Sortiment<br/>");
  "no" == b.fair_trade && (a += "keine Fair-Trade-Produkte im Sortiment<br/>");
  return a;
},
    fnContentHealthcare = function fnContentHealthcare(b) {
  var a = "";
  if ("doctors" == b.amenity || "physician" == b.office || "doctor" == b.healthcare) a += fnArztInfo(b), b.medical_area && (a += b.medical_area + "<br/>"), b.type && (a += b.type + "<br/>"), b["doctors:de"] && (a += b["doctors:de"] + "<br/>"), b["note:de"] && (a += b["note:de"] + "<br/>");
  "yes" == b.dispensing && (a += "Apotheke mit Rezepteinl\xF6sung<br/>");
  "abused" == b["social_facility:for"] && (a += "Einrichtung f\xFCr: Menschen die Misshandlung erlitten haben<br/>");
  "child" == b["social_facility:for"] && (a += "Einrichtung f\xFCr: Kinder<br/>");
  "disabled" == b["social_facility:for"] && (a += "Einrichtung f\xFCr: Menschen mit k\xF6rperlicher oder geistiger Behinderung<br/>");
  "diseased" == b["social_facility:for"] && (a += "Einrichtung f\xFCr: Erkrankte Menschen<br/>");
  "drug_addicted" == b["social_facility:for"] && (a += "Einrichtung f\xFCr: Drogens\xFCchtige<br/>");
  "homeless" == b["social_facility:for"] && (a += "Einrichtung f\xFCr: Obdachlose<br/>");
  "juvenile" == b["social_facility:for"] && (a += "Einrichtung f\xFCr: Jugendliche und Teenager<br/>");
  "mental_health" == b["social_facility:for"] && (a += "Einrichtung f\xFCr: Menschen mit psychischen Problemen<br/>");
  "migrant" == b["social_facility:for"] && (a += "Einrichtung f\xFCr: Menschen mit Migrationshintergrund<br/>");
  "orphan" == b["social_facility:for"] && (a += "Einrichtung f\xFCr: Waisen<br/>");
  "senior" == b["social_facility:for"] && (a += "Einrichtung f\xFCr: Senioren<br/>");
  "underprivileged" == b["social_facility:for"] && (a += "Einrichtung f\xFCr: Arme oder benachteiligte Menschen<br/>");
  "unemployed" == b["social_facility:for"] && (a += "Einrichtung f\xFCr: Arbeitslose<br/>");
  "victim" == b["social_facility:for"] && (a += "Einrichtung f\xFCr: Opfer eines Verbrechens<br/>");
  return a;
};

function fnAdditionalBuildingInfos(b) {
  var a = "";
  b["building:color"] && (a += "Geb\xE4udenfarbe: " + b["building:color"] + "</br>");
  b["building:height"] && (a += "Geb\xE4udenh\xF6he: " + b["building:height"] + " m</br>");
  b["building:level"] && (a += "Etage: " + b["building:level"] + "</br>");
  b["building:part"] && (a += "Geb\xE4udeteile: " + b["building:part"] + "</br>");
  b["roof:color"] && (a += "Dachfarbe: " + b["roof:colour"] + "</br>");
  b["roof:shape"] && (a += "Dachform: " + b["roof:shape"] + "</br>");
  b["roof:height"] && (a += "Dachh\xF6he: " + b["roof:height"] + " m</br>");
  b["roof:material"] && (a += "Dachmaterial: " + b["roof:material"] + " </br>");
  b["roof:orientation"] && (a += "Dachausrichtung: " + b["roof:orientation"] + " </br>");
  b["roof:direction"] && (a += "Dachausrichtung: " + b["roof:direction"] + " </br>");
  b["building:type"] && (a += "Geb\xE4udentyp: " + b["building:type"] + "</br>");
  return a;
}

function fnSicherheitAdditional(b) {
  var a = "";
  "surveillance" == b.man_made && ("indoor" == b.surveillance && (a += "Innenbereich wird \xFCberwacht"), "outdoor" == b.surveillance && (a += "Au\xDFenbereich wird \xFCberwacht"), "public" == b.surveillance && (a += "\xD6ffentliche \xDCberwachung"), "camera" == b["surveillance:type"] && (a += "\xDCberwachungstyp: Kamera"), "guard" == b["surveillance:type"] && (a += "\xDCberwachungstyp: W\xE4chter"), "ALPR" == b["surveillance:type"] && (a += "\xDCberwachungstyp: ALPR"), "town" == b["surveillance:zone"] && (a += "\xDCberwachungsbereich: Ort"), "parking" == b["surveillance:zone"] && (a += "\xDCberwachungsbereich: Parkplatz"), "traffic" == b["surveillance:zone"] && (a += "\xDCberwachungsbereich: Verkehr"), "shop" == b["surveillance:zone"] && (a += "\xDCberwachungsbereich: Shops"), "bank" == b["surveillance:zone"] && (a += "\xDCberwachungsbereich: Bank"), "building" == b["surveillance:zone"] && (a += "\xDCberwachungsbereich: Geb\xE4ude"));
  return a;
}

function fnWreckInfo(b) {
  var a = "";
  "wreck" == b.historic && (b["wreck:date_sunk"] && (a += "Gesunken am: " + b["wreck:date_sunk"] + "<br/>"), b["wreck:depth"] && (a += "Tiefe: " + b["wreck:depth"] + "<br/>"), b["wreck:clearance"] && (a += "Freiraum: " + b["wreck:clearance"] + "<br/>"), b["wreck:date_commissioned"] && (a += "Anerkannt seit: " + b["wreck:date_commissioned"] + "<br/>"), b["wreck:gross_tonnage"] && (a += "Gewicht: " + b["wreck:gross_tonnage"] + "<br/>"), b["wreck:length"] && (a += "L\xE4nge: " + b["wreck:length"] + "<br/>"), b["wreck:width"] && (a += "Breite: " + b["wreck:width"] + "<br/>"), b["wreck:cargo"] && (a = "timber" == b["wreck:cargo"] ? a + "Ladung: Holz<br/>" : "coal" == b["wreck:cargo"] ? a + "Ladung: Kohle<br/>" : a + ("Ladung: " + b["wreck:cargo"] + "<br/>")), "yes" == b["wreck:visible_at_low_tide"] && (a += "Sichtbar bei Niedrigwasser: Ja<br/>"), "no" == b["wreck:visible_at_low_tide"] && (a += "Sichtbar bei Niedrigwasser: Nein<br/>"), "yes" == b["wreck:visible_at_high_tide"] && (a += "Sichtbar bei Hochwasser: Ja<br/>"), "no" == b["wreck:visible_at_high_tide"] && (a += "Sichtbar bei Hochwasser: Nein<br/>"), "yes" == b.access && (a += "Zutritt m\xF6glich<br/>"), "no" == b.access && (a += "Zutritt nicht m\xF6glich<br/>"), "permit_required" == b.access && (a += "Zutritt nur mit Genehmigung<br/>"));
  return a;
}

function fnKlosterAdditional(b) {
  var a = "";
  if (b["monastery:type"]) switch (b["monastery:type"]) {
    case "monastery":
      a += "Typ: Kl\xF6sterliche Gemeinschaft (monastery)<br/>";
      break;

    case "convent":
      a += "Typ: Bettelm\xF6nch Gemeinschaft (convent)<br/>";
      break;

    case "canonry":
      a += "Typ: Kanonikat (canonry)<br/>";
      break;

    case "commandry":
      a += "Typ: Milit\xE4r gef\xFChrt (commandry)<br/>";
      break;

    case "hermitage":
      a += "Typ: Einsiedelei (hermitage)<br/>";
      break;

    default:
      a += "Typ: unbekannt<br/>";
  }
  b["community:gender"] && ("male" == b["community:gender"] && (a += "Geschlecht: M\xE4nnergemeinschaft<br/>"), "female" == b["community:gender"] && (a += "Geschlecht: Frauengemeinschaft<br/>"));
  b.religious_rank && ("abbey" == b.religious_rank ? a += "Religi\xF6ser Rang: Abtei<br/>" : "abbey" == b.religious_rank && (a += "Religi\xF6ser Rang: Erzabtei<br/>"));
  "yes" == b.shrine && (a += "Besonderheit: Heiligengrab / Reliquienschrein<br/>");
  "yes" == b.sanctuary && (a += "Besonderheit: Heiligtum / Altarraum (Sanktuar)<br/>");
  if (b.religion) switch (b.religion) {
    case "animist":
      a += "Religion: animistisch<br/><br/>";
      break;

    case "bahai":
      a += "Religion: bahai<br/>";
      break;

    case "buddhist":
      a += "Religion: buddhistisch<br/>";
      break;

    case "christian":
      a += "Religion: christlich<br/>";
      break;

    case "hindu":
      a += "Religion: hinduistisch<br/>";
      break;

    case "IglesiaNiCristo":
      a += "Religion: IglesiaNiCristo<br/>";
      break;

    case "jain":
      a += "Religion: jain<br/>";
      break;

    case "jewish":
      a += "Religion: j\xFCdisch<br/>";
      break;

    case "multifaith":
      a += "Religion: pluralistisch<br/>";
      break;

    case "muslim":
      a += "Religion: muslimisch<br/>";
      type += "Moschee<br/>";
      break;

    case "pagan":
      a += "Religion: heidnisch<br/>";
      break;

    case "pastafarian":
      a += "Religion: pastafarisch<br/>";
      break;

    case "scientologist":
      a += "Religion: scientologisch<br/>";
      break;

    case "shinto":
      a += "Religion: schintoistisch<br/>";
      break;

    case "sikh":
      a += "Religion: sikh<br/>";
      break;

    case "spiritualist":
      a += "Religion: spiritistisch<br/>";
      break;

    case "taoist":
      a += "Religion: taoistisch<br/>";
      break;

    case "unitarian":
      a += "Religion: unitarian<br/>";
      break;

    case "yazidi":
      a += "Religion: yazidi<br/>";
      break;

    case "zoroastrian":
      a += "Religion: zoroastrisch<br/>";
      break;

    default:
      a += "Religion: unbekannt<br/>";
  }
  if (b.denomination) switch (b.denomination) {
    case "anglican":
      a += "Konfession: Anglikanische Gemeinschaft<br/><br/>";
      break;

    case "baptist":
      a += "Konfession: Baptisten<br/>";
      break;

    case "catholic":
      a += "Konfession: Katholische Kirche, ohne genauere Spezifizierung<br/>";
      break;

    case "roman_catholic":
      a += "Konfession: R\xF6misch-Katholische Kirche<br/>";
      break;

    case "old_catholic":
      a += "Konfession: Altkatholische Kirche (Schweiz: Christ-Katholisch)<br/>";
      break;

    case "greek_catholic":
      a += "Konfession: Griechisch-Katholische Kirche, Sammelbezeichnung f\xFCr die mit Rom unierten Ostkirchen des byzantinischen Ritus<br/>";
      break;

    case "evangelical":
      a += "Konfession: Evangelikalismus ist eine theologische Richtung innerhalb des Protestantismus. Achtung! Nicht verwechseln mit der evangelischen (= protestantischen) Kirche<br/>";
      break;

    case "jehovahs_witness":
      a += "Konfession: Zeugen Jehovas<br/>";
      break;

    case "lutheran":
      a += "Konfession: Lutheraner, evangelisch-lutherisch<br/>";
      break;

    case "mennonite":
      a += "Konfession: Mennoniten<br/>";
      break;

    case "messianic_jewish":
      a += "Konfession: Messianische Juden, stehen theologisch den evangelikalen Christen nahe.<br/>";
      break;

    case "methodist":
      a += "Konfession: Methodist Church (engl. Methodism)<br/>";
      break;

    case "mormon":
      a += "Konfession: Mormonen<br/>";
      break;

    case "new_apostolic":
      a += "Konfession: Neuapostolische Kirche<br/>";
      break;

    case "orthodox":
      a += "Konfession: Orthodox, ohne genauere Spezifizierung<br/>";
      break;

    case "greek_orthodox":
      a += "Konfession: Griechisch-Orthodox<br/>";
      break;

    case "coptic_orthodox":
      a += "Konfession: Koptische Kirche, ist die christliche altorientalische Kirche \xC4gyptens.<br/>";
      break;

    case "pentecostal":
      a += "Konfession: Pfingstbewegung<br/>";
      break;

    case "presbyterian":
      a += "Konfession: Presbyterianische Kirchen<br/>";
      break;

    case "protestant":
      a += "Konfession: Evangelische Kirchen<br/>";
      break;

    case "quaker":
      a += "Konfession: Qu\xE4ker<br/>";
      break;

    case "reformed":
      a += "Konfession: Evangelisch-reformierte<br/>";
      break;

    case "russian_orthodox":
      a += "Konfession: Russisch-Orthodox<br/>";
      break;

    case "seventh_day_adventist":
      a += "Konfession: Siebenten-Tags-Adventisten<br/>";
      break;

    case "christian_community":
      a += "Konfession: Die Christengemeinschaft ist eine christliche Kirche, die sich als selbst\xE4ndige Kultusgemeinschaft versteht.<br/>";
      break;

    case "adventist":
      a += "Konfession: Adventisten, nicht alle Adventisten sind Siebenten-Tags-Adventisten.<br/>";
      break;

    case "alliance":
      a += "Konfession: Christian and Missionary Alliance (C&MA) is an evangelical Protestant denomination within Christianity.<br/>";
      break;

    case "assemblies_of_god":
      a += "Konfession: Assemblies of God, ist eine pfingstlerische Denomination.<br/>";
      break;

    case "apostolic":
      a += "Konfession: Apostolische Kirche<br/>";
      break;

    case "armenian_apostolic":
      a += "Konfession: Armenische Apostolische Kirche, ist eine altorientalische Kirche.<br/>";
      break;

    case "assyrian":
      a += "Konfession: Assyrische Kirche des Ostens, auch Apostolische Kirche des Ostens, ist eine autokephale und v\xF6llig eigenst\xE4ndige Ostkirche syrischer Tradition in Nachfolge des altchristlichen Katholikats von Seleukia-Ktesiphon.<br/>";
      break;

    case "christ_scientist":
      a += "Konfession: Christian Science (deutsch: Christliche Wissenschaft) ging aus der Neugeist-Bewegung hervor.<br/>";
      break;

    case "church_of_scotland":
      a += "Konfession: Church of Scotland (dt. Kirche Schottlands) ist die Nationalkirche in Schottland. Im Sprachgebrauch auch \u201Ethe Kirk\u201C genannt.<br/>";
      break;

    case "czechoslovak_hussite":
      a += "Konfession: Tschechoslowakische Hussitische Kirche, ist eine christliche Kirche, die durch Abspaltung von der R\xF6misch-Katholischen Kirche entstanden ist. Oft auch Neuhussitische Kirche genannt, vornehmlich in Tschechien verbreitet, aber auch in der Slowakei<br/>";
      break;

    case "dutch_reformed":
      a += "Konfession: Niederl\xE4ndisch-reformierte Kirche, (einschlie\xDFlich NGK und \xE4hnliche Kirchen in S\xFCdafrika)<br/>";
      break;

    case "exclusive_brethren":
      a += "Konfession: Exclusive Brethren<br/>";
      break;

    case "foursquare":
      a += "Konfession: International Church of the Foursquare Gospel<br/>";
      break;

    case "kimbanguist":
      a += "Konfession: Kimbanguistenkirche, ist eine afrikanische, unabh\xE4ngige, christliche Kirche.<br/>";
      break;

    case "living_waters_church":
      a += "Konfession: Living Waters Christian Church<br/>";
      break;

    case "mariavite":
      a += "Konfession: Mariavitismus<br/>";
      break;

    case "maronite":
      a += "Konfession: Syrisch-maronitische Kirche, ist eine mit Rom unierte, christliche Kirche, die den r\xF6mischen Papst als Oberhaupt anerkennt.<br/>";
      break;

    case "moravian":
      a += "Konfession: Herrnhuter Br\xFCdergemeine, (auch: Unitas Fratrum, Evangelische oder Erneuerte Br\xFCder-Unit\xE4t, engl. Moravian Church) ist eine aus der b\xF6hmischen Reformation herkommende \xFCberkonfessionell-christliche Glaubensbewegung.<br/>";
      break;

    case "nazarene":
      a += "Konfession: Kirche des Nazareners, ist eine Freikirche und Heiligungsgemeinde in methodistischer Tradition.<br/>";
      break;

    case "nondenominational":
      a += "Konfession: Nondenominational Christianity<br/>";
      break;

    case "old_believers":
      a += "Konfession: Altorthodoxe, (h\xE4ufiger Altgl\xE4ubige) ist eine Sammelbezeichnung f\xFCr religi\xF6se Str\xF6mungen und Gruppen innerhalb der russisch-orthodoxen Tradition.<br/>";
      break;

    case "polish_catholic":
      a += "Konfession: Polnisch-Katholische Kirche<br/>";
      break;

    case "salvation_army":
      a += "Konfession: Heilsarmee, ist eine christliche Freikirche mit ausgepr\xE4gter sozialer T\xE4tigkeit.<br/>";
      break;

    case "santo_daime":
      a += "Konfession: Santo Daime, ist einer synkretistischen religi\xF6se Bewegung aus Brasilien.<br/>";
      break;

    case "serbian_orthodox":
      a += "Konfession: Serbisch-Orthodoxe Kirche, bezeichnet die orthodoxe Kirche von Serbien und die ihr nachgeordneten Kirchen.<br/>";
      break;

    case "spiritism":
      a += "Konfession: Spiritismus, oder Spiritualismus die Lehre des Spiritisten Allan Kardec<br/>";
      break;

    case "united":
      a += "Konfession: United Church of Canada, ist die zweitgr\xF6\xDFte Kirche in Kanada.<br/>";
      break;

    case "united_church_of_christ":
      a += "Konfession: United Church of Christ, ist eine Kirche in den USA.<br/>";
      break;

    case "united_free_church_of_scotland":
      a += "Konfession: United Free Church of Scotland, ist eine presbyterianische Freikirche in Schottland.<br/>";
      break;

    case "united_methodist":
      a += "Konfession: Evangelisch-methodistische Kirche, (engl. United Methodist Church (UMC)) ist eine christliche Kirche in der wesleyanischen Tradition.<br/>";
      break;

    case "united_reformed":
      a += "Konfession: United Reformed Church, (Vereinigte Reformierte Kirche, URC) ist eine reformierte Kirche in Gro\xDFbritannien.<br/>";
      break;

    case "uniting":
      a += "Konfession: Uniting Church in Australia (UCA) ist die drittgr\xF6\xDFte christliche Denomination in Australien.<br/>";
      break;

    case "church_of_sweden":
      a += "Konfession: Schwedische Kirche, ist die evangelisch-lutherische Kirche und ehemalige Staatskirche Schwedens.<br/>";
      break;

    case "mission_covenant_church_of_sweden":
      a += "Konfession: Schwedische Missionskirche ist eine reformierte Kirche in Schweden.<br/>";
      break;

    case "alternative":
      a += "Konfession: alternative<br/>";
      break;

    case "ashkenazi":
      a += "Konfession: ashkenazi<br/>";
      break;

    case "buchari":
      a += "Konfession: buchari<br/>";
      break;

    case "conservative":
      a += "Konfession: conservative<br/>";
      break;

    case "egalitarian":
      a += "Konfession: egalitarian<br/>";
      break;

    case "hasidic":
      a += "Konfession: hasidic<br/>";
      break;

    case "humanistic":
      a += "Konfession: humanistic<br/>";
      break;

    case "kabbalah":
      a += "Konfession: kabbalah<br/>";
      break;

    case "kabbalistic":
      a += "Konfession: kabbalistic<br/>";
      break;

    case "karaite":
      a += "Konfession: karaite<br/>";
      break;

    case "liberal":
      a += "Konfession: liberal<br/>";
      break;

    case "lubavitch":
      a += "Konfession: lubavitch<br/>";
      break;

    case "lubavitch_messianic":
      a += "Konfession: lubavitch_messianic<br/>";
      break;

    case "mizrachi_baghdadi":
      a += "Konfession: mizrachi_baghdadi<br/>";
      break;

    case "mizrachi_chida":
      a += "Konfession: mizrachi_chida<br/>";
      break;

    case "mizrachi_jerusalemite":
      a += "Konfession: mizrachi_jerusalemite<br/>";
      break;

    case "mizrachi_livorno":
      a += "Konfession: mizrachi_livorno<br/>";
      break;

    case "mizrachi_moroccan":
      a += "Konfession: mizrachi_moroccan<br/>";
      break;

    case "modern_orthodox":
      a += "Konfession: modern_orthodox<br/>";
      break;

    case "neo_orthodox":
      a += "Konfession: neo_orthodox<br/>";
      break;

    case "nondenominational":
      a += "Konfession: nondenominational<br/>";
      break;

    case "orthodox":
      a += "Konfession: orthodox<br/>";
      break;

    case "orthodox_ashkenaz":
      a += "Konfession: orthodox_ashkenaz<br/>";
      break;

    case "orthodox_sefard":
      a += "Konfession: orthodox_sefard<br/>";
      break;

    case "progressive":
      a += "Konfession: progressive<br/>";
      break;

    case "reconstructionist":
      a += "Konfession: reconstructionist<br/>";
      break;

    case "reform":
      a += "Konfession: reform<br/>";
      break;

    case "renewal":
      a += "Konfession: renewal<br/>";
      break;

    case "samaritan":
      a += "Konfession: samaritan<br/>";
      break;

    case "sefardi":
      a += "Konfession: sefardi<br/>";
      break;

    case "sefardi_amsterdam":
      a += "Konfession: sefardi_amsterdam<br/>";
      break;

    case "sefardi_london":
      a += "Konfession: sefardi_london<br/>";
      break;

    case "traditional":
      a += "Konfession: traditional<br/>";
      break;

    case "ultra_orthodox":
      a += "Konfession: ultra_orthodox<br/>";
      break;

    case "unaffiliated":
      a += "Konfession: unaffiliated<br/>";
      break;

    case "yemenite":
      a += "Konfession: yemenite<br/>";
      break;

    case "yemenite_baladi":
      a += "Konfession: yemenite_baladi<br/>";
      break;

    case "yemenite_shami":
      a += "Konfession: yemenite_shami<br/>";
      break;

    case "ahmadiya":
      a += "Konfession: ahmadiya<br/>";
      break;

    case "alaouite":
      a += "Konfession: alaouite<br/>";
      break;

    case "druze":
      a += "Konfession: druze<br/>";
      break;

    case "ibadi":
      a += "Konfession: ibadi<br/>";
      break;

    case "ismaili":
      a += "Konfession: ismaili<br/>";
      break;

    case "shia":
      a += "Konfession: shia<br/>";
      break;

    case "sunni":
      a += "Konfession: sunni<br/>";
      break;

    case "nichiren":
      a += "Konfession: nichiren<br/>";
      break;

    case "jodo_shinshu":
      a += "Konfession: jodo_shinshu<br/>";
      break;

    case "jodo_shu":
      a += "Konfession: jodo_shu<br/>";
      break;

    case "vajrayana":
      a += "Konfession: vajrayana<br/>";
      break;

    case "shingon_shu":
      a += "Konfession: shingon_shu<br/>";
      break;

    case "zen":
      a += "Konfession: zen<br/>";
      break;

    case "thai_mahanikaya":
      a += "Konfession: thai_mahanikaya<br/>";
      break;

    case "thai_thammayut":
      a += "Konfession: thai_thammayut<br/>";
      break;

    case "asatru":
      a += "Konfession: asatru<br/>";
      break;

    case "celtic":
      a += "Konfession: celtic<br/>";
      break;

    case "greco-roman":
      a += "Konfession: greco-roman<br/>";
      break;

    case "wicca":
      a += "Konfession: wicca<br/>";
      break;

    case "irani":
      a += "Konfession: irani<br/>";
      break;

    case "parsi":
      a += "Konfession: parsi<br/>";
      break;

    default:
      a += "unbekannt<br/>";
  }
  if (b.community) switch (b.community) {
    case "AA":
      a += "Ordensgemeinschaft (AA): Augustinians of the Assumption <br/>";
      break;

    case "BSCM":
      a += "Ordensgemeinschaft (BSCM): Adorers of the Sacred Heart of Jesus of Montmartre <br/>";
      break;

    case "CBMV":
      a += "Ordensgemeinschaft (CBMV): Augustiner-Chorfrauen B.M.V.<br/>";
      break;

    case "CO":
      a += "Ordensgemeinschaft (CO): Oratorians<br/>";
      break;

    case "CMC":
      a += "Ordensgemeinschaft (CMC): Congregation of the Mother Co-Redemptrix<br/>";
      break;

    case "CRSP":
      a += "Ordensgemeinschaft (CRSP): Kongregation der Regularkleriker vom hl. Paulus (Barnabiten)<br/>";
      break;

    case "CSJ":
      a += "Ordensgemeinschaft (CSJ): Carmel Saint-Joseph<br/>";
      break;

    case "CSSP":
      a += "Ordensgemeinschaft (CSSP): Congr\xE9gation du Saint-Esprit<br/>";
      break;

    case "CSSR":
      a += "Ordensgemeinschaft (CSSR): Congr\xE9gation du Tr\xE8s Saint R\xE9dempteur<br/>";
      break;

    case "FCJM":
      a += "Ordensgemeinschaft (FCJM): Franciscan Sisters, Daughters of the Sacred Heart of Jesus and Mary<br/>";
      break;

    case "FMGB":
      a += "Ordensgemeinschaft (FMGB): Suore Francescane Missionarie di Ges\xF9 Bambino<br/>";
      break;

    case "FMH":
      a += "Ordensgemeinschaft (FMH): Congregatio Filiarum Mariae Sanctissimae ab Horto<br/>";
      break;

    case "FMM":
      a += "Ordensgemeinschaft (FMM): Franciscaines missionnaires de Marie<br/>";
      break;

    case "FSC":
      a += "Ordensgemeinschaft (FSC): Fr\xE8res des \xC9coles chr\xE9tiennes<br/>";
      break;

    case "MCCI":
      a += "Ordensgemeinschaft (MCCI): Missionnaires comboniens du Sacr\xE9-C\u0153ur<br/>";
      break;

    case "MSFS":
      a += "Ordensgemeinschaft (MSFS): Missionnaires de Saint Fran\xE7ois de Sales<br/>";
      break;

    case "OCart":
      a += "Ordensgemeinschaft (OCart): Order of the Carthusians<br/>";
      break;

    case "OCC":
      a += "Ordensgemeinschaft (OCC): Ordre de Notre Dame du Mont-Carmel<br/>";
      break;

    case "OCD":
      a += "Ordensgemeinschaft (OCD): Ordre des Carmes d\xE9chaux<br/>";
      break;

    case "OCSO":
      a += "Ordensgemeinschaft (OCSO): Zisterzienserorden der strengeren Observanz (Trappisten)<br/>";
      break;

    case "OFM":
      a += "Ordensgemeinschaft (OFM): Ordre des Fr\xE8res Mineurs (Franziskaner)<br/>";
      break;

    case "OFMCap":
      a += "Ordensgemeinschaft (OFMCap): Ordre des Fr\xE8res Mineurs Capucins<br/>";
      break;

    case "OFMConv":
      a += "Ordensgemeinschaft (OFMConv): Ordre des Fr\xE8res Mineurs Conventuels<br/>";
      break;

    case "OFS":
      a += "Ordensgemeinschaft (OFS): Franciscans secular Third Order<br/>";
      break;

    case "OMI":
      a += "Ordensgemeinschaft (OMI): Oblats de Marie<br/>";
      break;

    case "OP":
      a += "Ordensgemeinschaft (OP): Ordre des Fr\xE8res Pr\xEAcheurs<br/>";
      break;

    case "OPraem":
      a += "Ordensgemeinschaft (OPraem): Ordre des chanoines r\xE9guliers de Pr\xE9montr\xE9<br/>";
      break;

    case "OSB":
      a += "Ordensgemeinschaft (OSB): Order of Saint Benedict<br/>";
      break;

    case "OSC":
      a += "Ordensgemeinschaft (OSC): Ordre de Sainte-Claire ou Ordre des Pauvres Dames<br/>";
      break;

    case "OSSS":
      a += "Ordensgemeinschaft (OSSS): Ordre de Sainte-Brigitte<br/>";
      break;

    case "OVM":
      a += "Ordensgemeinschaft (OVM): Order of the Visitation of Holy Mary (Salesianerinnen)<br/>";
      break;

    case "PSDP":
      a += "Ordensgemeinschaft (PSDP): Petites s\u0153urs des pauvres (Kleinen Schwestern der Armen)<br/>";
      break;

    case "PFJ":
      a += "Ordensgemeinschaft (PFJ): Petits Fr\xE8res de J\xE9sus<br/>";
      break;

    case "SDB":
      a += "Ordensgemeinschaft (SDB): Soci\xE9t\xE9 de Saint Fran\xE7ois de Sales<br/>";
      break;

    case "SJ":
      a += "Ordensgemeinschaft (SJ): Compagnie de J\xE9sus<br/>";
      break;

    case "SOC":
      a += "Ordensgemeinschaft (SOC): Order of Cistercians<br/>";
      break;

    case "SSCC":
      a += "Ordensgemeinschaft (SSCC): Congregation of the Sacred Hearts of Jesus and Mary<br/>";
      break;

    case "SSF":
      a += "Ordensgemeinschaft (SSF): Society of St Francis<br/>";
      break;

    case "SSJE":
      a += "Ordensgemeinschaft (SSJE): Society of St John the Evangelist<br/>";
      break;

    case "SSpS":
      a += "Ordensgemeinschaft (SSpS): Steyler Missionsschwestern<br/>";
      break;

    case "TOR":
      a += "Ordensgemeinschaft (TOR): Terzo Ordine Regolare di San Francesco<br/>";
      break;

    default:
      a += "unbekannt<br/>";
  }
  return a;
}

var fnTestInfoPopup = function fnTestInfoPopup(b) {
  b = b.getProperties();
  var a = "",
      c;

  for (c in b) {
    a = a + c + "=" + b[c] + "<br/>";
  }

  return '<div class="c4g_popup_text" style="width:300px;">' + a + "</div>";
};

/***/ }),

/***/ "./Resources/public/js/c4g-maps-popup-info-en.js":
/*!*******************************************************!*\
  !*** ./Resources/public/js/c4g-maps-popup-info-en.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.trim = trim;
exports.isMobile = isMobile;
exports.fnHeader = fnHeader;
exports.fnFooter = fnFooter;
exports.fnGetTranslate_Type = fnGetTranslate_Type;
exports.fnArztInfo = fnArztInfo;
exports.fnKraftwerkInfo = fnKraftwerkInfo;
exports.fnWertstoffinfo = fnWertstoffinfo;
exports.fnAdditionalBuildingInfos = fnAdditionalBuildingInfos;
exports.fnSicherheitAdditional = fnSicherheitAdditional;
exports.fnWreckInfo = fnWreckInfo;
exports.fnKlosterAdditional = fnKlosterAdditional;
exports.fnContentSports = exports.fnContentStreetsTraffic = exports.fnContentHydrants = exports.fnContentShipping = exports.fnContentCuisine = exports.fnContentEmergency = exports.fnContentInformationCity = exports.fnContentStorage = exports.fnContentAmenity = exports.fnContentTourism = exports.fnContentBarriers = exports.fnContentHistoric = exports.fnContentPetrol = exports.fnContentRoute = exports.fnMessstation = exports.fnContentLanduse = exports.fnContentProtectedArea = exports.fnContentNatural = exports.fnContentAerodrome = exports.fnContent = exports.fnReducedInfoPopup = exports.fnStandardInfoPopup = void 0;

/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
function trim(b) {
  return b.replace(/^\s+/, "").replace(/\s+$/, "");
}

function isMobile() {
  return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|android|ipad|playbook|silk/i.test(navigator.userAgent || navigator.vendor || window.opera) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test((navigator.userAgent || navigator.vendor || window.opera).substr(0, 4));
}

function translate(b) {
  var a = trim(b);
  return "yes" == a || "Yes" == a ? "yes" : "no" == a || "No" == a ? "no" : "limited" == a ? "limited" : "designated" == a ? "designated" : "wood" == a ? "wood" : "metal" == a ? "metal" : "concrete" == a ? "concrete" : "plastic" == a ? "plastic" : "stone" == a ? "stone" : "steel" == a ? "steel" : "brick" == a ? "brick" : "reinforced_concrete" == a ? "reinforced_concrete" : "masonry" == a ? "masonry" : b;
}

var fnStandardInfoPopup = function fnStandardInfoPopup(feature, imageSrc) {
  var attr = feature.getProperties();
  var result = "";
  result += fnHeader(attr, imageSrc);
  result += fnContent(attr);
  result += fnFooter(attr, feature.get("osm_type") + "/" + feature.getId());
  result = '<div class="c4g_popup_text">' + result + "</div>";
  return result;
},
    fnReducedInfoPopup = function fnReducedInfoPopup(b, a) {
  var c = b.getProperties(),
      d = "",
      e = !1,
      f;
  f = "function" === typeof a ? a.call(b)[0].getImage().getSrc() : a.getImage().getSrc();
  if ("restaurant" == c.amenity || "pub" == c.amenity || "biergarten" == c.amenity) e = !0;
  "hotel" == c.tourism && (e = !0);
  "guest_house" == c.tourism && (e = !0);
  "chalet" == c.tourism && (e = !0);
  "hostel" == c.tourism && (e = !0);
  "alpine_hut" == c.tourism && (e = !0);
  if ("artwork" == c.tourism || "artwork" == c.amenity) e = !0;
  if ("museum" == c.tourism || "museum" == c.amenity) e = !0;
  "cinema" == c.amenity && (e = !0);
  "theatre" == c.amenity && (e = !0);
  if ("attraction" == c.amenity || "fountain" == c.amenity || "monument" == c.historic || "city_gate" == c.historic || "ruins" == c.historic || "castle" == c.historic || "attraction" == c.tourism) e = !0;
  "playground" == c.leisure && (e = !0);
  c.aerialway && (e = !0);
  if ("swimming_pool" == c.amenity || "swimming_pool" == c.leisure || "swimming" == c.sport) e = !0;
  "station" == c.railway && (e = !0);
  "swimming" == c.sport && (e = !0);
  "swimming_pool" == c.leisure && (e = !0);
  "swimming_pool" == c.amenity && (e = !0);
  "waterpark" == c.leisure && (e = !0);
  c.water_park && (e = !0);
  "sports_centre" == c.leisure && (e = !0);

  switch (e) {
    case !1:
      d += fnHeader(c, f);
      d += fnContent(c);
      d += fnFooter(c, b.get("osm_type") + "/" + b.getId());
      break;

    case !0:
      d += fnHeader(c, f);
  }

  return '<div class="c4g_popup_text">' + d + "</div>";
};

exports.fnReducedInfoPopup = fnReducedInfoPopup;
exports.fnStandardInfoPopup = fnStandardInfoPopup;

function fnHeader(b, a) {
  var c = "",
      d = "32px";

  if (b.name || b["piste:name"] || b["xmas:name"] || b["xmas:location"]) {
    if (b.name) var e = b.name;
    b["piste:name"] && (e = b["piste:name"]);
    b["xmas:name"] && (e = b["xmas:name"]);
    b["xmas:location"] && (e = b["xmas:location"]);
    c += a ? '<img src="' + a + '" width="' + d + '" name="' + e + '" alt="' + e + '"><div class="c4g_popup_header_featurename">' + e + "</div>" : '<name="' + e + '" alt="' + e + '"><div class="c4g_popup_header_featurename">' + e + "</div>";
  } else a && (c += '<img src="' + a + '" width="' + d + '" name="' + a + '" alt="' + a + '">');

  c += fnGetTranslate_Type(b);
  return '<div class="c4g_popup_header">' + c + "</div>";
}

function fnFooter(b, a) {
  var c = "",
      d = !1;
  b["addr:housename"] && (c += "housename: " + b["addr:housename"] + "<br/>", d = !0);
  b["addr:floor"] ? (c += "floor: " + b["addr:floor"] + "<br/>", d = !0) : b["addr:level"] && (c += "level: " + b["addr:level"] + "<br/>", d = !0);
  b["addr:street"] && (c += b["addr:street"], c = b["addr:housenumber"] ? c + (" " + b["addr:housenumber"] + "<br/>") : c + "<br/>", d = !0);
  b["addr:postcode"] && (c += b["addr:postcode"] + " ");
  b["addr:city"] && (c += b["addr:city"] + "<br/>", d = !0);
  if (b.sqkm) if (b.sqkm = "" + b.sqkm, 3 < b.sqkm.length) {
    var e = b.sqkm.length % 3,
        f = 0 < e ? b.sqkm.substring(0, e) : "";

    for (var i = 0; i < Math.floor(b.sqkm.length / 3); i++) {
      f = 0 == e && 0 == i ? f + b.sqkm.substring(e + 3 * i, e + 3 * i + 3) : f + ("." + b.sqkm.substring(e + 3 * i, e + 3 * i + 3));
    }

    c += "area: " + f + " Km\xB2<br/>";
  } else c += "area " + b.sqkm + "<br/>";
  b["contact:phone"] && (c = isMobile() ? c + ('phone: <a href="tel:' + b["contact:phone"] + '">' + b["contact:phone"] + "</a><br/>") : c + ('phone: <a href="callto:' + b["contact:phone"] + '">' + b["contact:phone"] + "</a><br/>"), d = !0);
  b.phone && (c = isMobile() ? c + ('phone: <a href="tel:' + b.phone + '">' + b.phone + "</a><br/>") : c + ('phone: <a href="callto:' + b.phone + '">' + b.phone + "</a><br/>"), d = !0);
  b["contact:fax"] ? (c += "fax: " + b["contact:fax"] + "<br/>", d = !0) : b.fax && (c += "fax: " + b.fax + "<br/>", d = !0);
  b["contact:email"] ? (c += 'email: <a href="mailto:' + b["contact:email"] + '">' + b["contact:email"] + "</a><br/>", d = !0) : b.email && (c += 'email: <a href="mailto:' + b.email + '">' + b.email + "</a><br/>", d = !0);
  d && (c += "<br/>");

  if (b.opening_hours) {
    d = b.opening_hours;

    for (e = 0; 0 == e || 0 < d.indexOf(";");) {
      0 < e && (d = d.replace(";", "<br/>")), e++;
    }

    c += 'opening hours: <br/><div class="c4g_open_text">' + d + "</div>";
    c = 0 < d.indexOf("PH") ? c + "(PH = public holiday)<br/>" : c + "<br/>";
  }

  if (b["xmas:opening_hours"]) {
    d = b["xmas:opening_hours"];

    for (e = 0; 0 == e || 0 < d.indexOf(";");) {
      0 < e && (d = d.replace(";", "<br/>")), e++;
    }

    c += 'opening hours: <br/><div class="c4g_open_text">' + d + "</div>";
    c = 0 < d.indexOf("PH") ? c + "(PH = public holiday)<br/>" : c + "<br/>";
  }

  b["xmas:url"] && (d = "", d = b["xmas:url"], trim(d), -1 == d.indexOf("https://", 0) && -1 == d.indexOf("http://", 0) && (d = "http://" + d), c += 'website: <a href="' + d + '" target="_blank">website link</a><br/>');
  b["contact:website"] ? (d = b["contact:website"], trim(d), -1 == d.indexOf("https://", 0) && -1 == d.indexOf("http://", 0) && (d = "http://" + d), c += 'website: <a href="' + d + '" target="_blank">website link</a><br/>') : b.website && (d = b.website, trim(d), -1 == d.indexOf("https://", 0) && -1 == d.indexOf("http://", 0) && (d = "http://" + d), c += 'website: <a href="' + d + '" target="_blank">website link</a><br/>');
  b.wikipedia && (d = b.wikipedia, trim(d), -1 == d.indexOf("https://", 0) && -1 == d.indexOf("http://", 0) && (d = "https://wikipedia.org/wiki/" + d), c += 'Wikipedia: <a href="' + d + '" target="_blank">Wikipedia link</a><br/>');
  b.wikimedia_commons && (d = b.wikimedia_commons, trim(d), -1 == d.indexOf("https://", 0) && -1 == d.indexOf("http://", 0) && (d = "https://commons.wikimedia.org/wiki/" + d), c += 'Wikimedia: <a href="' + d + '" target="_blank">Wikimedia link</a><br/>');
  b["contact:webcam"] && (d = b["contact:webcam"], trim(d), -1 == d.indexOf("https://", 0) && -1 == d.indexOf("http://", 0) && (d = "http://" + d), c += 'webcam: <a href="' + d + '" target="_blank">webcam link</a><br/>');
  b.image && (c += '<img src="' + b.image + '" width="200px" name="' + b.name + '" alt="' + b.name + '"><br/>');
  d = "";
  b.internet_access && (d += "internet access: " + translate(b.internet_access) + "<br/>");
  b["internet_access:fee"] && (d += "fee: " + translate(b["internet_access:fee"]) + "<br/>");
  b["wifi_access:operator"] && (d += "wifi operator: " + b["wifi_access:operator"] + "<br/>");
  b["wifi_access:technology"] && (d += "wifi technology: " + b["wifi_access:technology"] + "<br/>");
  b["wifi_access:ssid"] && (d += "wifi ssid: " + b["wifi_access:ssid"] + "<br/>");
  "" != d && (c += 'internet access available<br/><div class="c4g_shop_internet_access">' + d + "</div><br/>");
  b.wheelchair && (c += "wheelchair: " + translate(b.wheelchair) + "<br/>");
  b["wheelchair:description"] && (c += "description: " + b["wheelchair:description"] + "<br/>");
  b["wheelchair:entrance_width"] && (c += "entrance width (cm): " + b["wheelchair:entrance_width"] + "<br/>");
  b["wheelchair:step_height"] && (c += "step height (cm): " + b["wheelchair:step_height"] + "<br/>");
  b["wheelchair:rooms"] && (c += "rooms: " + b["wheelchair:rooms"] + "<br/>");
  b["wheelchair:places"] && (c += "places: " + b["wheelchair:places"] + "<br/>");
  b["cent:places"] && (c += "places: " + b["wheelchair:places"] + "<br/>");
  b["ramp:wheelchair"] && (c += "ramp: " + b["ramp:wheelchair"] + "<br/>");
  b["capacity:disabled"] && (c += "capacity parking: " + translate(b["capacity:disabled"]) + "<br/>");
  b["toilets:wheelchair"] && (c += "toilets: " + translate(b["toilets:wheelchair"]) + "<br/>");
  b.centralkey && (c += "centralkey: " + b.centralkey + "<br/>");
  b.note && (c += b.note + "<br/>");
  b.description && (c += b.description + "<br/>");
  b.operator && (c += "operator: " + b.operator + "<br/>");
  b.ref && (c += "reference: " + b.ref + "<br/>");
  "yes" == b.lit && (c += "This object is illuimanted.<br/>");
  b.shop && (d = "", b.brand && (d += "brand: " + b.brand + "<br/>"), b.sells && (d += "sells: " + b.sells + "<br/>"), b.origin && (d += "source market: " + b.origin + "<br/>"), "yes" == b.wholesale && (d += "distributor: yes<br/>"), "" != d && (c += 'further particulars: <br/><div class="c4g_shop_text">' + d + "</div><br/>"));
  a && (d = a, trim(d), d = d.replace(/\./, "/"), c = c + "<br/>" + ('OSM:    <a href="http://www.openstreetmap.org/' + d + '" target="_blank">OpenStreetMap link</a><br/>'));
  return c = '<div class="c4g_popup_footer">' + c + "</div>";
}

function fnGetTranslate_Type(b) {
  var a = "";
  if ("doctors" == b.amenity || "doctor" == b.healthcare) a += "doctor<br/>";
  if ("hospital" == b.amenity || "clinic" == b.amenity || "hospital" == b.healthcare || "clinic" == b.healthcare) a = "yes" == b.emergency ? a + "hospital with emergency facilities<br/>" : a + "hospital<br/>";
  "dentist" == b.amenity && (a += "dentist<br/>");
  if ("pharmacy" == b.amenity || "pharmacy" == b["health_facility:type"]) a += "pharmacy<br/>";
  if ("physiotherapist" == b.healthcare || "yes" == b["health_speciality:physiotherapy"]) a += "physiotherapist<br/>";
  if ("occupational_therapist" == b.healthcare || "yes" == b["health_speciality:occupational_therapy"] || "yes" == b["health_specialty:occupational_therapy"]) a += "occupational_therapist<br/>";
  if ("psychotherapist" == b.healthcare || "yes" == b["health_speciality:psychotherapy"]) a += "psychotherapist<br/>";
  "alternative" == b.healthcare && (a += "alternative<br/>");
  "midwife" == b.healthcare && (a += "midwife<br/>");
  if ("speech_therapist" == b.healthcare || "yes" == b["health_speciality:speech_therapy"]) a += "speech_therapist<br/>";
  "yes" == b["health_speciality:music_therapy"] && (a += "music_therapy<br/>");
  "veterinary" == b.amenity && (a += "veterinary<br/>");
  "fire_station" == b.amenity && (a += "fire station<br/>");
  "fire_extinguisher" == b.emergency && (a += "fire extinguisher<br/>");
  "aed" == b.emergency && (a += "aed<br/>");
  "defibrillator" == b.emergency && (a += "defibrillator<br/>");
  "phone" == b.emergency && (a += "call box<br/>");
  "police" == b.amenity && (a += "police<br/>");
  "ambulance_station" == b.emergency && (a += "ambulance station<br/>");
  "technical" == b.emergency_service && (a += "technical<br/>");
  "water" == b.emergency_service && (a += "water<br/>");
  "baywatch" == b.waterway && (a += "baywatch<br/>");
  "air" == b.emergency_service && (a += "rescue helicopter<br/>");
  "emergency_access_point" == b.highway && (a += "emergency access point<br/>");
  if ("lifeboat_station" == b.amenity || "lifeboat_station" == b.emergency) a += "lifeboat station<br/>";
  "life_ring" == b.emergency && (a += "life ring<br/>");
  "siren" == b.emergency && (a += "siren<br/>");
  "life_ring" == b.amenity && (a += "life ring<br/>");
  "rescue_station" == b.amenity && (a += "rescue station<br/>");
  "fire_hydrant" == b.emergency && ("underground" == b["fire_hydrant:type"] ? a += "underground hydrant<br/>" : "pillar" == b["fire_hydrant:type"] ? a += "pillar hydrant<br/>" : "wall" == b["fire_hydrant:type"] ? a += "wall hydrant<br/>" : "pond" == b["fire_hydrant:type"] && (a += "suction point<br/>"));
  "suction_point" == b.emergency && (a += "suction point<br/>");
  "fire_water_pond" == b.emergency && (a += "fire protection pond<br/>");
  "mountain" == b.emergency_service && (a += "mountain rescue service<br/>");
  "water_tank" == b.emergency && (a += "fire water tank<br/>");
  "container" == b.recycling_type && (a += "Recycling container<br/>");
  "recycling" == b.amenity && "yes" == b["recycling:excrement"] || "pump-out" == b["seamark:small_craft_facility:category"] ? a += "suction station<br/>" : "recycling" == b.amenity && (a += " buyback centre<br/>");
  "yes" == b["diet:pescetarian"] ? a += "pescetarian available<br/>" : "only" == b["diet:pescetarian"] && (a += "just pescetarian<br/>");
  "yes" == b["diet:vegetarian"] ? a += "vegetarian vorhanden<br/>" : "only" == b["diet:vegetarian"] && (a += "just vegetarian<br/>");
  "yes" == b["diet:lacto_vegetarian"] ? a += "lacto_vegetarian available<br/>" : "only" == b["diet:lacto_vegetarian"] && (a += "just lacto vegetarian<br/>");
  "yes" == b["diet:ovo_vegetarian"] ? a += "ovo vegetarian available<br/>" : "only" == b["diet:ovo_vegetarian"] && (a += "just ovo_vegetarian<br/>");
  "yes" == b["diet:vegan"] ? a += "vegan available<br/>" : "only" == b["diet:vegan"] && (a += "just vegan<br/>");
  "yes" == b["diet:fruitarian"] ? a += "fruitarian available<br/>" : "only" == b["diet:fruitarian"] && (a += "hust fruitarian<br/>");
  "yes" == b["diet:raw"] ? a += "raw availaibe<br/>" : "only" == b["diet:raw"] && (a += "just raw<br/>");
  "yes" == b["diet:gluten_free"] ? a += "gluten free available<br/>" : "only" == b["diet:gluten_free"] && (a += "just gluten free<br/>");
  "yes" == b["diet:dairy_free"] ? a += "dairy free available<br/>" : "only" == b["diet:dairy_free"] && (a += "just dairy free<br/>");
  "yes" == b["diet:lactose_free"] ? a += "lactose free available<br/>" : "only" == b["diet:lactose_free"] && (a += "just lactose free<br/>");
  "yes" == b["diet:halal"] ? a += "halal available<br/>" : "only" == b["diet:halal"] && (a += "just halal<br/>");
  "yes" == b["diet:kosher"] ? a += "kosher available<br/>" : "only" == b["diet:kosher"] && (a += "just kosher<br/>");
  "pub" == b.amenity && (a += "pub<br/>");
  "bar" == b.amenity && (a += "bar<br/>");
  "yes" == b.frozen_yogurt && (a += "frozen yogurt<br/>");
  "yes" == b.slush_ice && (a += "slush ice<br/>");
  "yes" == b.cake && (a += "cake<br/>");
  "yes" == b.coffee && (a += "coffee<br/>");
  "yes" == b.drinks && (a += "drinks<br/>");
  "biergarten" == b.amenity && (a += "biergarten<br/>");
  "restaurant" == b.amenity && (a += "restaurant<br/>");
  "fast_food" == b.amenity && (a += "fast food<br/>");
  if (("cafe" == b.amenity || "coffee_shop" == b.amenity) && "ice_cream" != b.cuisine) a += "cafe<br/>";
  if ("cafe" == b.amenity && "ice_cream" == b.cuisine || "ice_cream" == b.amenity) a += "ice cream<br/>";
  "alpine_hut" == b.tourism && (a += "alpine hut<br/>");
  "aquarium" == b.tourism && (a += "aquarium<br/>");
  "apartment" == b.tourism && (a += "apartment<br/>");
  "attraction" == b.tourism && (a += "attraction<br/>");
  "artwork" == b.tourism && (a += "artwork<br/>");
  "camp_site" == b.tourism && (a += "camp site<br/>");
  "caravan_site" == b.tourism && (a += "caravan site<br/>");
  "chalet" == b.tourism && (a += "chalet<br/>");
  "gallery" == b.tourism && (a += "gallery<br/>");
  "guest_house" == b.tourism && (a += "guest house<br/>");
  "hostel" == b.tourism && (a += "hostel<br/>");
  "hotel" == b.tourism && (a += "hotel<br/>");
  "motel" == b.tourism && (a += "motel<br/>");
  "museum" == b.tourism && (a += "museum<br/>");
  "picnic_site" == b.tourism && (a += "picnic site<br/>");
  "theme_park" == b.tourism && (a += "theme park<br/>");
  "viewpoint" == b.tourism && (a += "viewpoint<br/>");
  "wilderness_hut" == b.tourism && (a += "wilderness_hut<br/>");
  "wine_cellar" == b.tourism && (a += "wine cellar<br/>");
  "zoo" == b.tourism && (a += "zoo<br/>", "enclosure" == b.zoo && (a += "enclosure<br/>"), "petting_zoo" == b.zoo && (a += "petting zoo<br/>"), "falconry" == b.zoo && (a += "falconry<br/>"));
  "trail_riding_station" == b.tourism && (a += "trail riding station<br/>");
  "fishing" == b.club && (a += "fishing club<br/>");
  "sport" == b.club && "fishing" == b.sport && (a += "fishing club<br/>");
  "amateur_radio" == b.club && (a += "amateur radio club<br/>");
  "art" == b.club && (a += "art club<br/>");
  "astronomy" == b.club && (a += "astronomy club<br/>");
  "automobile" == b.club && (a += "automobile club<br/>");
  "board_games" == b.club && (a += "board games club<br/>");
  "card_games" == b.club && (a += "card games club<br/>");
  "charity" == b.club && (a += "charity club<br/>");
  "chess" == b.club && (a += "chess club<br/>");
  "cinema" == b.club && (a += "cinema club<br/>");
  "cooking" == b.club && (a += "cooking club<br/>");
  "culture" == b.club && (a += "culture club<br/>");
  "doityourself" == b.club && (a += "doityourself club<br/>");
  "equestrian" == b.club && (a += "equestrian club<br/>");
  "ethnic" == b.club && (a += "ethnic club<br/>");
  "fan" == b.club && (a += "fan club<br/>");
  "freemasonry" == b.club && (a += "freemasonry club<br/>");
  "game" == b.club && (a += "game club<br/>");
  "history" == b.club && (a += "history club<br/>");
  "hunting" == b.club && (a += "hunting club<br/>");
  "linux" == b.club && (a += "linux club<br/>");
  "motorcycle" == b.club && (a += "motorcycle club<br/>");
  "music" == b.club && (a += "music club<br/>");
  "nature" == b.club && (a += "nature club<br/>");
  "nudism" == b.club && (a += "nudism club<br/>");
  "photography" == b.club && (a += "photography club<br/>");
  "politics" == b.club && (a += "politics club<br/>");
  "religion" == b.club && (a += "religion club<br/>");
  "scout" == b.club && (a += "scout club<br/>");
  "smoke" == b.club && (a += "smoke club<br/>");
  "sport" == b.club && (a += "sport club<br/>");
  "theatre" == b.club && (a += "theatre club<br/>");
  "veterans" == b.club && (a += "veterans club<br/>");
  "amusement_arcade" == b.leisure && (a += "penny arcade / gambling hall<br/>");
  "beach_resort" == b.leisure && (a += "beach resort<br/>");
  "bird_hide" == b.leisure && (a += "bird hide<br/>");
  "common" == b.leisure && (a += "common<br/>");
  "club" == b.leisure && (a += "club<br/>");
  "dance" == b.leisure && (a += "dance<br/>");
  "dog_park" == b.leisure && (a += "dog_park<br/>");
  "firepit" == b.leisure && (a += "firepit<br/>");
  "fishing" == b.leisure && (a += "fishing<br/>");
  "garden" == b.leisure && (a += "garden<br/>");
  "golf_course" == b.leisure && (a += "golf course<br/>");
  "hackerspace" == b.leisure && (a += "hackerspace<br/>");
  "horse_riding" == b.leisure && (a += "horse riding<br/>");
  "ice_rink" == b.leisure && (a += "ice rink<br/>");
  "nature_reserve" == b.leisure && (a += "nature reserve<br/>");
  "park" == b.leisure && (a += "park<br/>");
  "miniature_golf" == b.leisure && (a += "miniature golf<br/>");
  "pitch" == b.leisure && (a += "pitch<br/>");
  "pitch" == b.leisure && "yes" == b.building && (a += "gym<br/>");
  "playground" == b.leisure && "yes" == b.building ? a += "playground<br/>" : "playground" == b.leisure && (a += "playground<br/>");
  "social_club" == b.leisure && (a += "social club<br/>");
  "spa" == b.leisure && (a += "spa<br/>");
  "sports_centre" == b.leisure && (a += "sports centre<br/>");
  "climbing_adventure" == b.sport && (a += "climbing adventure<br/>");
  "stadium" == b.leisure && (a += "stadium<br/>");
  "swimming_pool" == b.leisure && (a += "swimming pool<br/>");
  "track" == b.leisure && (a += "track<br/>");
  "water_park" == b.leisure && (a += "water park<br/>");
  "wildlife_hide" == b.leisure && (a += "wildlife hide<br/>");
  "adult_gaming_centre" == b.leisure && (a += "adult gaming_centre<br/>");
  "bowling_alley" == b.leisure && "10pin" == b.sport && (a += "10pin bowling_alley<br/>");
  "bowling_alley" == b.leisure && "9pin" == b.sport && (a += "9pin bowling_alley<br/>");
  if ("karting" == b.sport || "motor" == b.sport) a += "karting<br/>";
  if ("darts" == b.sport || "dart" == b.sport) a += "Darts<br/>";
  if (b["piste:type"]) switch (b["piste:type"]) {
    case "skitour":
      a += "skitour<br/>";
      break;

    case "downhill":
      a += "downhill<br/>";
      break;

    case "sled":
      a += "sled<br/>";
      break;

    case "nordic":
      a += "nordic<br/>";
      break;

    case "hike":
      a += "hike<br/>";
      break;

    case "snow_park":
      a += "snow park<br/>";
  }
  if (b.sport) switch (b.sport) {
    case "surfing":
      a += "surfing<br/>";
      break;

    case "kitesurfing":
      a += "kitesurfing<br/>";
      break;

    case "water_ski":
      a += "water ski<br/>";
  }
  if (b.aerialway) switch (b.aerialway) {
    case "cable_bar":
      a += "cable bar<br/>";
      break;

    case "gondola":
      a += "gondola<br/>";
      break;

    case "chair_lift":
      a += "chair lift<br/>";
      break;

    case "mixed_lift":
      a += "mixed lift<br/>";
      break;

    case "drag_lift":
      a += "drag lift<br/>";
      break;

    case "t-bar":
      a += "t-bar<br/>";
      break;

    case "t-bar":
      a += "t-bar<br/>";
      break;

    case "platter":
      a += "platter<br/>";
      break;

    case "rope_tow":
      a += "rope tow<br/>";
      break;

    case "magic_carpet":
      a += "magic carpet<br/>";
      break;

    default:
      a += "unknown";
  }
  "mosque" == b.building && (a += "mosque<br/>");
  "synagogue" == b.building && (a += "synagogue<br/>");
  "temple" == b.building && (a += "temple<br/>");
  "apartments" == b.building && (a += "apartments<br/>");
  "farm" == b.building && (a += "farm<br/>");
  "hotel" == b.building && (a += "hotel<br/>");
  "house" == b.building && (a += "house<br/>");
  "detached" == b.building && (a += "detached<br/>");
  "residential" == b.building && (a += "residential<br/>");
  if ("domitory" == b.building || "residential plus" == b.building) a += "domitory<br/>";
  "terrace" == b.building && (a += "terrace<br/>");
  "houseboat" == b.building && (a += "houseboat<br/>");
  "bungalow" == b.building && (a += "bungalow<br/>");
  "static_caravan" == b.building && (a += "static caravan<br/>");
  "commercial" == b.building && (a += "commercial<br/>");
  "retail" == b.building && (a += "retail<br/>");
  "warehouse" == b.building && (a += "warehouse<br/>");
  "bakehouse" == b.building && (a += "bakehouse<br/>");
  "shrine" == b.building && (a += "shrine<br/>");
  "civic" == b.building && (a += "civic<br/>");
  "stadium" == b.building && (a += "stadium<br/>");
  "train_station" == b.building && (a += "train station<br/>");
  "university" == b.building && (a += "university<br/>");
  "public" == b.building && (a += "public<br/>");
  "bridge" == b.building && (a += "bridge<br/>");
  "bunker" == b.building && (a += "bunker<br/>");
  "cabin" == b.building && (a += "cabin<br/>");
  "conservatory" == b.building && (a += "conservatory<br/>");
  "construction" == b.building && (a += "construction<br/>");
  "garage" == b.building && (a += "garage<br/>");
  "garages" == b.building && (a += "garages<br/>");
  "greenhouse" == b.building && (a += "greenhouse<br/>");
  "hangar" == b.building && (a += "hangar<br/>");
  "hut" == b.building && (a += "hut<br/>");
  "pavillion" == b.building && (a += "pavillion<br/>");
  "roof" == b.building && (a += "roof<br/>");
  "shed" == b.building && (a += "shed<br/>");
  "transformer_tower" == b.building && (a += "transformer tower<br/>");
  "service" == b.building && (a += "service<br/>");
  "kiosk" == b.building && (a += "kiosk<br/>");
  "carport" == b.building && (a += "carport<br/>");
  "ruins" == b.building && (a += "ruins<br/>");
  "gambling" == b.amenity && (a += "penny arcade<br/>");
  "library" == b.amenity && (a += "library<br/>");
  "fountain" == b.amenity && (a += "fountain<br/>");
  "attraction" == b.amenity && (a += "attraction<br/>");
  if ("social_centre" == b.amenity || "club" == b.amenity) a += "social centre<br/>";
  "townhall" == b.amenity && (a += "townhall<br/>");
  "bench" == b.amenity && (a += "bench<br/>");
  if ("grave_yard" == b.amenity || "cemetery" == b.landuse) a += "grave yard<br/>";
  "post_box" == b.amenity && (a += "post box<br/>");
  "post_office" == b.amenity && (a += "post office<br/>");
  "telephone" == b.amenity && (a += "telephone<br/>");
  "atm" == b.amenity && (a += "atm<br/>");
  "bank" == b.amenity && (a += "bank<br/>");
  "toilets" == b.amenity && "yes" == b.diaper ? a += "toilets with diaper changing table<br/>" : "toilets" == b.amenity && (a += "toilets<br/>");
  "school" == b.amenity && "1" == b["isced:level"] ? a += "primary school<br/>" : "school" == b.amenity && "2" == b["isced:level"] ? a += "secondary school<br/>" : "school" == b.amenity && "3" == b["isced:level"] ? a += "secondary schools<br/>" : "school" == b.amenity && (a += "school<br/>");
  "kindergarten" == b.amenity && (a += "kindergarten<br/>");
  "internet_cafe" == b.amenity && (a += "internet cafe<br/>");
  "daycare" == b.amenity && (a += "daycare<br/>");
  "childcare" == b.amenity && (a += "childcare<br/>");
  "university" == b.amenity && (a += "university<br/>");
  "college" == b.amenity && (a += "college<br/>");
  "shelter" == b.amenity && (a += "shelter<br/>");
  "bbq" == b.amenity && (a += "bbq<br/>");
  "nightclub" == b.amenity && (a += "nightclub<br/>");
  "bicycle_parking" == b.amenity && (a += "bicycle parking<br/>");
  "bicycle_rental" == b.amenity && (a += "bicycle rental<br/>");
  "boat_sharing" == b.amenity && (a += "boat sharing<br/>");
  "car_sharing" == b.amenity && (a += "car sharing<br/>");
  "cinema" == b.amenity && (a += "cinema<br/>");
  "swimming_pool" == b.amenity && (a += "swimming pool<br/>");
  if ("embassy" == b.amenity || "embassy" == b.diplomatic) a += "embassy<br/>";
  "embassy" == b.amenity && "consulate" == b.diplomatic && (a += "consulate<br/>");
  "embassy" == b.amenity && "consulate_general" == b.diplomatic && (a += "consulate general<br/>");
  "embassy" == b.amenity && "honorary_consulate" == b.diplomatic && (a += "honorary consulate<br/>");
  "embassy" == b.amenity && "permanent_mission" == b.diplomatic && (a += "permanent mission<br/>");
  "embassy" == b.amenity && "delegation" == b.diplomatic && (a += "delegation<br/>");
  "embassy" == b.amenity && "high_commission" == b.diplomatic && (a += "high commission<br/>");
  "Barfusspfad" == b.amenity && (a += "barefoodpath<br/>");
  "casino" == b.amenity && (a += "casino<br/>");
  "spa" == b.amenity && (a += "spa<br/>");
  "stables" == b.amenity && (a += "stables<br/>");
  "watering_place" == b.amenity && (a += "watering place<br/>");
  "yes" == b.watering_place && (a += "watering place<br/>");
  "water_point" == b.amenity && (a += "water point<br/>");
  "taxi" == b.amenity && (a += "taxi<br/>");
  "car_wash" == b.amenity && (a += "car wash<br/>");
  "brothel" == b.amenity && (a += "brothel<br/>");
  "stripclub" == b.amenity && (a += "stripclub<br/>");
  "swingerclub" == b.amenity && (a += "swingerclub<br/>");
  "planetarium" == b.amenity && (a += "planetarium<br/>");
  "courthouse" == b.amenity && (a += "court house<br/>");
  "crematorium" == b.amenity && (a += "crematorium<br/>");
  if ("crypt" == b.amenity || "crypt" == b.building) a += "crypt<br/>";
  "hunting_stand" == b.amenity && (a += "hunting stand<br/>");
  "photo_booth" == b.amenity && (a += "photo booth<br/>");
  "prison" == b.amenity && (a += "prison<br/>");
  "ranger_station" == b.amenity && (a += "ranger station<br/>");
  "register_office" == b.amenity && (a += "register office<br/>");
  "marketplace" == b.amenity && (a += "marketplace<br/>");
  "solarium" == b.amenity && (a += "solarium<br/>");
  "sauna" == b.amenity && (a += "sauna<br/>");
  "shower" == b.amenity && (a += "shower<br/>");
  if ("waste_disposal" == b.amenity && (a += "waste disposal<br/>", b.waste)) switch (a += "Typ: ", b.waste) {
    case "trash":
      a += "General<br/>";
      break;

    case "oil":
      a += "Oil<br/>";
      break;

    case "drugs":
      a += "Pharmaceutical<br/>";
      break;

    case "organic":
      a += "Organic<br/>";
      break;

    case "plastic":
      a += "Plastic<br/>";
      break;

    case "rubble":
      a += "Rubble<br/>";
      break;

    case "cigarettes":
      a += "Cigarettes<br/>";
      break;

    default:
      a += "General<br/>";
  }
  if ("waste_basket" == b.amenity || "dog_excrement" == b.waste) a += "dog waste station<br/>";
  if ("scout_camp" == b.amenity || "scout_hut" == b.amenity || "scout_hall" == b.amenity) a += "scout camp<br/>";
  "ferry_terminal" == b.amenity && (a += "ferry terminal<br/>");
  "bureau_de_change" == b.amenity && (a += "bureau de change<br/>");
  "youth_club" == b.amenity && (a += "youth club<br/>");
  "festival_grounds" == b.amenity && (a += "festival grounds<br/>");
  if ("yes" == b.openfire || "yes" == b.fireplace) a += "fireplace<br/>";
  if ("vending_machine" == b.amenity) if (b.vending) switch (b.vending) {
    case "admission_tickets":
      a += "vending machine admission tickets<br/>";
      break;

    case "animal_feed":
      a += "vending machine animal feed<br/>";
      break;

    case "bicycle_tube":
      a += "vending machine bicycle tube<br/>";
      break;

    case "books":
      a += "vending machine books<br/>";
      break;

    case "candles":
      a += "vending machine candles<br/>";
      break;

    case "cigarettes":
      a += "vending machine cigarettes<br/>";
      break;

    case "chemist":
      a += "vending machine chemist<br/>";
      break;

    case "condoms":
      a += "vending machine condoms<br/>";
      break;

    case "drinks":
      a += "vending machine drinks<br/>";
      break;

    case "electronics":
      a += "vending machine electronics<br/>";
      break;

    case "elongated_coin":
      a += "vending machine elongated_coin<br/>";
      break;

    case "excrement_bags":
      a += "vending machine excrement_bags<br/>";
      break;

    case "feminine_hygiene":
      a += "vending machine feminine_hygiene<br/>";
      break;

    case "first_aid":
      a += "vending machine first_aid<br/>";
      break;

    case "fishing_tackle":
      a += "vending machine fishing tackle<br/>";
      break;

    case "fishing_bait":
      a += "vending machine fishing bait<br/>";
      break;

    case "flowers":
      a += "vending machine flowers<br/>";
      break;

    case "food":
      a += "vending machine food<br/>";
      break;

    case "ice_cubes":
      a += "vending machine ice cubes<br/>";
      break;

    case "ice_cream":
      a += "vending machine ice cream<br/>";
      break;

    case "ink_cartridges":
      a += "vending machine ink cartridges<br/>";
      break;

    case "laundry_detergent":
      a += "vending machine laundry detergent<br/>";
      break;

    case "public_transport_tickets":
      a += "vending machine public transport tickets<br/>";
      break;

    case "newspaper":
      a += "vending machine newspaper<br/>";
      break;

    case "parcel_pickup":
      a += "vending machine parcel pickup<br/>";
      break;

    case "parcel_mail_in":
      a += "Packege station<br/>";
      break;

    case "parking_tickets":
      a += "vending machine parking tickets<br/>";
      break;

    case "photos":
      a += "vending machine photos<br/>";
      break;

    case "sex_toys":
      a += "vending machine sex_toys<br/>";
      break;

    case "SIM_cards":
      a += "vending machine SIM_cards<br/>";
      break;

    case "stamps":
      a += "vending machine stamps<br/>";
      break;

    case "sweets":
      a += "vending machine sweets<br/>";
      break;

    case "syringes":
      a += "vending machine syringes<br/>";
      break;

    case "toll":
      a += "vending machine toll<br/>";
      break;

    case "toys":
      a += "vending machine toys<br/>";
      break;

    case "umbrellas":
      a += "vending machine umbrellas<br/>";
      break;

    default:
      a += "vending machine<br/>";
  } else a += "vending machine<br/>";
  "arts_centre" == b.amenity && (a += "arts centre<br/>");
  "artwork" == b.amenity && (a += "artwork<br/>");
  "museum" == b.amenity && (a += "museum<br/>");
  "theatre" == b.amenity && (a += "theatre<br/>");
  "cathedral" == b.building && (a += "cathedral<br/>");
  "church" == b.building && (a += "church<br/>");
  "chapel" == b.building && (a += "chapel<br/>");
  "place_of_worship" == b.amenity && (a += "place of worship<br/>");
  "village" == b.abandoned && (a += "abandoned village<br/>");
  "theme_park" == b["abandoned:tourism"] && (a += "abandoned theme park<br/>");
  "prison_camp" == b["abandoned:amenity"] && "concentration_camp" == ["concentration_camp"] && (a += "abandoned concentration camp<br/>");
  "yes" == b.abandoned && "bunker" == b.military && (a += "abandoned bunker<br/>");
  "yes" == b.abandoned && "barracks" == b.military && (a += "abandoned barracks<br/>");
  "yes" == b.abandoned && "airfield" == b.military && (a += "abandoned airfield<br/>");
  "monastery" == b.historic && (a += "historic monastery<br/>");
  "monastery" == b.amenity && (a += "monastery<br/>");
  "monastery" == b.building && (a += "monastery<br/>");
  "manor" == b.historic && (a += "historic manor<br/>");
  "boundary_stone" == b.historic && (a += "historic boundary stone<br/>");
  "milestone" == b.historic && (a += "historic milestone<br/>");
  "monument" == b.historic && (a += "monument<br/>");
  "palace" == b.historic && (a += "historic palace<br/>");
  "mine" == b.historic && (a += "historic mine<br/>");
  "ruins" == b.historic && (a += "ruins<br/>");
  "harbour" == b.historic_usage && (a += "historic harbour<br/>");
  "rune stone" == b.historic && (a += "rune stone<br/>");
  "battlefield" == b.historic && (a += "historic battlefield<br/>");
  "blacksmith" == b.historic && (a += "historic blacksmith<br/>");
  if ("tree_shrine" == b.historic || "wayside_shrine" == b.historic) a += "shrine<br/>";
  "city_gate" == b.historic && (a += "historic city gate<br/>");
  "wayside_cross" == b.historic && (a += "historic wayside cross<br/>");
  "monument" == b.amenity && (a += "monument<br/>");
  "memorial" == b.historic && (a += "memorial<br/>");
  "optical_telegraph" == b.historic && (a += "historic optical telegraph<br/>");
  if ("castle" == b.historic) if (b.castle_type) switch (b.castle_type) {
    case "defensive":
      a += "defensive castle<br/>";
      break;

    case "palace":
      a += "palace<br/>";
      break;

    case "stately":
      a += "stately castle<br/>";
      break;

    case "manor":
      a += "manor<br/>";
      break;

    case "fortress":
      a += "fortress<br/>";
      break;

    case "castrum":
      a += "castrum<br/>";
      break;

    case "shiro":
      a += "shiro<br/>";
      break;

    case "kremlin":
      a += "kremlin<br/>";
      break;

    default:
      a += "castle<br/>";
  } else a += "castle<br/>";
  "archaeological_site" == b.historic && (a += "archaeological site<br/>");
  if ("tomb" == b.historic) if (b.tomb) switch (b.tomb) {
    case "tumulus":
      a += "tumulus<br/>";
      break;

    case "rock-cut":
      a += "rock<br/>";
      break;

    case "hypogeum":
      a += "hypogeum<br/>";
      break;

    case "war_grave":
      a += "war grave<br/>";
      break;

    case "mausoleum":
      a += "mausoleum<br/>";
      break;

    case "columbarium":
      a += "columbarium<br/>";
      break;

    case "crypt":
      a += "crypt<br/>";
      break;

    case "pyramid":
      a += "pyramid<br/>";
      break;

    case "sarcophagus":
      a += "sarcophagus<br/>";
      break;

    case "vault":
      a += "vault<br/>";
      break;

    case "tombstone":
      a += "tombstone<br/>";
      break;

    default:
      a += "historic tomb<br/>";
  } else a += "historic tomb<br/>";
  "accountant" == b.office && (a += "accountant<br/>");
  "administrative" == b.office && (a += "administrative<br/>");
  "architect" == b.office && (a += "architect<br/>");
  "association" == b.office && (a += "association<br/>");
  "physician" == b.office && (a += "physician<br/>");
  "camping" == b.office && (a += "camping office<br/>");
  "company" == b.office && (a += "company<br/>");
  "educational_institution" == b.office && (a += "educational institution<br/>");
  "employment_agency" == b.office && (a += "employment agency<br/>");
  "estate_agent" == b.office && (a += "estate agent<br/>");
  "forestry" == b.office && (a += "forestry<br/>");
  "foundation" == b.office && (a += "foundation<br/>");
  "government" == b.office && (a += "government<br/>");
  "guide" == b.office && (a += "guide office<br/>");
  "insurance" == b.office && (a += "insurance<br/>");
  "it" == b.office && (a += "it office<br/>");
  "lawyer" == b.office && (a += "lawyer<br/>");
  "newspaper" == b.office && (a += "newspaper<br/>");
  "ngo" == b.office && (a += "ngo office<br/>");
  "notary" == b.office && (a += "notary<br/>");
  "political_party" == b.office && (a += "political party<br/>");
  "quango" == b.office && (a += "quango office<br/>");
  "realtor" == b.office && (a += "realtor<br/>");
  "real_estate_agent" == b.office && (a += "real estate agent<br/>");
  "register" == b.office && (a += "register<br/>");
  "religion" == b.office && (a += "religious office<br/>");
  "research" == b.office && (a += "research office<br/>");
  "tax" == b.office && (a += "tax office<br/>");
  "telecommunication" == b.office && (a += "telecommunication office<br/>");
  "travel_agent" == b.office && (a += "travel agent<br/>");
  "water_utility" == b.office && (a += "water utility office<br/>");
  "therapist" == b.office && (a += "therapist<br/>");
  "city" == b.place && (a += "city<br/>");
  "town" == b.place && (a += "town<br/>");
  "village" == b.place && (a += "village<br/>");
  "continent" == b.place && (a += "continent<br/>");
  "ocean" == b.place && (a += "ocean</br>");
  "track" == b.highway && (a += "track<br/>");
  "raceway" == b.highway && (a += "raceway<br/>");
  "designated" == b.bicycle && (a += "cycle path<br/>");
  "path" == b.highway && (a += "food path<br/>");
  "parking" == b.amenity && (a += "parking<br/>");
  "services" == b.highway && (a += "services<br/>");
  "rest_area" == b.highway && (a += "rest area<br/>");
  "turning_circle" == b.highway && (a += "turning circle<br/>");
  "service" == b.highway && (a += "service road<br/>");
  "motorway" == b.highway && (a += "motorway<br/>");
  "motorway_junction" == b.highway && (a += "motorway junction<br/>");
  "bridleway" == b.highway && (a += "bridleway<br/>");
  "yes" == b.oneway && (a += "oneway<br/>");
  "yes" == b.park_ride && (a += "park and ride<br/>");
  "unknown" == b.park_ride && (a += "park and ride<br/>");
  "bus" == b.park_ride && (a += "park and ride<br/>");
  "tram" == b.park_ride && (a += "park and ride<br/>");
  "bus_stop" == b.highway && (a += "bus stop<br/>");
  "pedestrian" == b.highway && (a += "pedestrian<br/>");
  "street_lamp" == b.highway && (a += "street lamp<br/>");
  "traffic_signals" == b.highway && (a += "traffic signals<br/>");
  "traffic_signals" == b.crossing && (a += "traffic signals<br/>");
  "speed_camera" == b.highway && (a += "speed camera<br/>");
  "yes" == b.traffic_calming && (ret += "traffic calming</br>");
  "bump" == b.traffic_calming && (a += "bump</br>");
  "chicane" == b.traffic_calming && (a += "chicane</br>");
  "choker" == b.traffic_calming && (a += "choker</br>");
  "cushion" == b.traffic_calming && (a += "cushion</br>");
  "hump" == b.traffic_calming && (a += "hump</br>");
  "island" == b.traffic_calming && (a += "island</br>");
  "rumble_strip" == b.traffic_calming && (a += "rumble_strip</br>");
  "table" == b.traffic_calming && (a += "table</br>");
  "buoy_cardinal" == b["seamark:type"] && (a += "buoy cardinal<br/>");
  "buoy_lateral" == b["seamark:type"] && (a += "buoy lateral<br/>");
  "buoy_isolated_danger" == b["seamark:type"] && (a += "buoy isolated_danger<br/>");
  "perch" == b["seamark:beacon_lateral:shape"] && (a += "perch<br/>");
  "fuel" == b.amenity && "fuel_station" == b["seamark:small_craft_facility:category"] ? a += "fuel station<br/>" : "fuel" == b.amenity && (a += "fuel<br/>");

  if ("charging_station" == b.amenity) {
    var a = a + "charging station<br/>",
        c = b.voltage;

    if (b.car) {
      switch (b.car) {
        case "yes":
          a += "Car: yes";
          break;

        case "no":
          a += "Car: No";
          break;

        default:
          a += "Cars: unkown";
      }

      a += "<br/>";
    } else a += "Cars: unkown<br/>";

    if (b.bicycle) {
      switch (b.bicycle) {
        case "yes":
          a += "E-Bike: yes";
          break;

        case "no":
          a += "E-Bike: no";
          break;

        default:
          a += "E-Bike: unkown";
      }

      a += "<br/>";
    } else a += "E-Bike: unkown<br/>";

    b["socket:schuko"] && (a += "Schuko socket: " + b["socket:schuko"] + "<br/>");
    b["socket:cee_blue"] && (a += "Cee blue socket " + b["socket:cee_blue"] + "<br/>");
    b["socket:cee_red_16a"] && (a += "Cee red 16a socket " + b["socket:cee_red_16a"] + "<br/>");
    b["socket:cee_red_32a"] && (a += "Cee red 32a socket " + b["socket:cee_red_32a"] + "<br/>");
    b["socket:cee_red_64a"] && (a += "Cee red 64a socket " + b["socket:cee_red_64a"] + "<br/>");
    b["socket:cee_red_125a"] && (a += "Cee red 125a socket " + b["socket:cee_red_125a"] + "<br/>");
    b["socket:nema_5_15"] && (a += "Nema 5 15 socket " + b["socket:nema_5_15"] + "<br/>");
    b["socket:nema_5_20"] && (a += "Nema 5 20 socket " + b["socket:nema_5_20"] + "<br/>");
    b["socket:nema_14_30"] && (a += "Nema 14 30 socket " + b["socket:nema_14_30"] + "<br/>");
    b["socket:nema_14_50"] && (a += "Nema 14 50 socket " + b["socket:nema_14_50"] + "<br/>");
    b["socket:bs1363"] && (a += "Bs1363 socket " + b["socket:bs1363"] + "<br/>");
    b["socket:type1"] && (a += "Type 1 socket " + b["socket:type1"] + "<br/>");
    b["socket:type1_combo"] && (a += "Type 1 combo socket " + b["socket:schuko"] + "<br/>");
    b["socket:type2"] && (a += "Type 2 socket " + b["socket:type2"] + "<br/>");
    b["socket:type2_combo"] && (a += "Type 2 combo socket " + b["socket:type2_combo"] + "<br/>");
    b["socket:type3"] && (a += "Type 3 socket " + b["socket:type3"] + "<br/>");
    b["socket:chademo"] && (a += "Chademo socket " + b["socket:chademo"] + "<br/>");
    b["socket:magne_charge"] && (a += "Magne charge socket " + b["socket:magne_charge"] + "<br/>");
    b["socket:tesla_standard"] && (a += "Tesla standard socket " + b["socket:tesla_standard"] + "<br/>");
    b["socket:tesla_supercharge"] && (a += "Tesla supercharge: " + b["socket:tesla_supercharge"] + "<br/>");
    b["socket:tesla_roadster"] && (a += "Tesla_roadster socket " + b["socket:tesla_roadster"] + "<br/>");
    a += "<br/>";
    b.voltage && (a += "Volt: " + c + "<br/>");
  }

  "yes" == b.tunnel && (a += "tunnel<br/>");
  if (b.bridge) switch (a += "bridge: ", b.bridge) {
    case "swing":
      a += "swing";
      break;

    case "aqueduct":
      a += "aqueduct";
      break;

    case "bascule":
      a += "flap bridge";
      break;

    case "boardwalk":
      a += "boardwalk";
      break;

    case "cantilever":
      a += "cantilever";
      break;

    case "covered":
      a += "covered";
      break;

    case "drawbridge":
      a += "drawbridge";
      break;

    case "humpback":
      a += "humpback";
      break;

    case "lift":
      a += "lift";
      break;

    case "low_water_crossing":
      a += "low water crossing";
      break;

    case "moveable":
      a += "moveable";
      break;

    case "pontoon":
      a += "pontoon";
      break;

    case "suspension":
      a += "suspension";
      break;

    case "trestle":
      a += "trestle";
      break;

    case "viaduct":
      a += "viaduct";
  }
  if (b["bridge:movable"]) switch (b["bridge:movable"]) {
    case "swing":
      a += "swing";
      break;

    case "bascule":
      a += "bascule";
      break;

    case "drawbridge":
      a += "drawbridge";
      break;

    case "lift":
      a += "lift";
      break;

    case "submersible":
      a += "submersible";
      break;

    case "transporter":
      a += "transporter";
      break;

    case "retractable":
      a += "retractable";
  }
  if ("nursing_home" == b.amenity || "retirement_home" == b.amenity) a += "nursing home / retirement home<br/>";
  "social_facility" == b.amenity && (a += "social facility<br/>");

  if (b.social_facility) {
    "group_home" == b.social_facility && "senior" == b["social_facility:for"] && (a += "senior group home<br/>");
    "assisted_living" == b.social_facility && (a += "assisted living<br/>");
    "outreach" == b.social_facility && (a += "outreach<br/>");
    "workshop" == b.social_facility && (a += "workshop<br/>");
    if ("ambulatory_care" == b.social_facility || "healthcare" == b.social_facility) a += "ambulatory care<br/>";
    "shelter" == b.social_facility && "senior" == b["social_facility:for"] && (a += "senior shelter<br/>");
    "shelter" == b.social_facility && "abused" == b["social_facility:for"] && (a += "abused shelter<br/>");
    "food_bank" == b.social_facility && (a += "food bank<br/>");
    "hospice" == b.social_facility && (a += "hospice<br/>");
  }

  b.brewery && (a += "brand of beer: " + b.brewery + "<br/>");
  "alcohol" == b.shop && (a += "alcohol shop<br/>");
  "bakery" == b.shop && (a += "bakery shop<br/>");
  "beverages" == b.shop && (a += "beverages shop<br/>");
  "butcher" == b.shop && (a += "butcher shop<br/>");
  "cheese" == b.shop && (a += "cheese shop<br/>");
  "chocolate" == b.shop && (a += "chocolate shop<br/>");
  "coffee" == b.shop && (a += "coffee shop<br/>");
  "confectionery" == b.shop && (a += "confectionery shop<br/>");
  "convenience" == b.shop && (a += "convenience shop<br/>");
  "deli" == b.shop && (a += "deli shop<br/>");
  "dairy" == b.shop && (a += "dairy shop<br/>");
  "farm" == b.shop && (a += "farm shop<br/>");
  "greengrocer" == b.shop && (a += "greengrocer shop<br/>");
  "grocery" == b.shop && (a += "grocery shop<br/>");
  "organic" == b.shop && (a += "organic shop<br/>");
  "pasta" == b.shop && (a += "pasta shop<br/>");
  "seafood" == b.shop && (a += "seafood shop<br/>");
  "tea" == b.shop && (a += "tea shop<br/>");
  "wine" == b.shop && (a += "wine shop<br/>");
  "department_store" == b.shop && (a += "department store<br/>");
  "general" == b.shop && (a += "general shop<br/>");
  "kiosk" == b.shop && (a += "kiosk<br/>");
  "mall" == b.shop && (a += "mall<br/>");
  "supermarket" == b.shop && (a += "supermarket<br/>");
  "baby_goods" == b.shop && (a += "baby goods shop<br/>");
  "bag" == b.shop && (a += "bag shop<br/>");
  "boutique" == b.shop && (a += "boutique<br/>");
  "clothes" == b.shop && (a += "clothes shop<br/>");
  "fabric" == b.shop && (a += "fabric shop<br/>");
  "fashion" == b.shop && (a += "fashion shop<br/>");
  "jewelry" == b.shop && (a += "jewelry shop<br/>");
  "leather" == b.shop && (a += "leather shop<br/>");
  "shoes" == b.shop && (a += "shoes shop<br/>");
  "variety_store" == b.shop && (a += "variety store<br/>");
  "chemist" == b.shop && (a += "chemist<br/>");
  "cosmetics" == b.shop && (a += "cosmetics shop<br/>");
  "drugstore" == b.shop && (a += "drugstore<br/>");
  "perfumery" == b.shop && (a += "perfumery<br/>");
  "erotic" == b.shop && (a += "erotic shop<br/>");
  "hairdresser" == b.shop && (a += "hairdresser<br/>");
  "hearing_aids" == b.shop && (a += "hearing aids<br/>");
  "herbalist" == b.shop && (a += "herbalist<br/>");
  "massage" == b.shop && (a += "massage<br/>");
  "medical_supply" == b.shop && (a += "medical supply shop<br/>");
  "optician" == b.shop && (a += "optician<br/>");
  "tattoo" == b.shop && (a += "tattoo<br/>");
  "bathroom_furnishing" == b.shop && (a += "bathroom furnishing<br/>");
  "doityourself" == b.shop && (a += "doityourself<br/>");
  "energy" == b.shop && (a += "energy<br/>");
  "florist" == b.shop && (a += "florist<br/>");
  "furnace" == b.shop && (a += "furnace shop<br/>");
  "garden_centre" == b.shop && (a += "garden centre<br/>");
  "gas" == b.shop && (a += "gas<br/>");
  "glaziery" == b.shop && (a += "glaziery<br/>");
  "hardware" == b.shop && (a += "hardware shop<br/>");
  "houseware" == b.shop && (a += "houseware shop<br/>");
  "locksmith" == b.shop && (a += "locksmith<br/>");
  "paint" == b.shop && (a += "paint shop<br/>");
  "trade" == b.shop && (a += "trade<br/>");
  "antiques" == b.shop && (a += "antiques shop<br/>");
  "bed" == b.shop && (a += "bed shop<br/>");
  "candles" == b.shop && (a += "candles shop<br/>");
  "carpet" == b.shop && (a += "carpet shop<br/>");
  "curtain" == b.shop && (a += "curtain shop<br/>");
  "furniture" == b.shop && (a += "furniture store<br/>");
  "interior_decoration" == b.shop && (a += "interior decoration company<br/>");
  "kitchen" == b.shop && (a += "kitchen shop<br/>");
  "window_blind" == b.shop && (a += "window blind shop<br/>");
  "computer" == b.shop && (a += "computer shop<br/>");
  "electronics" == b.shop && (a += "electronics shop<br/>");
  "hifi" == b.shop && (a += "hifi shop<br/>");
  "mobile_phone" == b.shop && (a += "mobile phone shop<br/>");
  "radiotechnics" == b.shop && (a += "radiotechnics shop<br/>");
  "vacuum_cleaner" == b.shop && (a += "vacuum cleaner shop<br/>");
  "bicycle" == b.shop && (a += "bicycle shop<br/>");
  "car" == b.shop && (a += "car shop<br/>");
  "car repair" == b.shop && (a += "car repair<br/>");
  "car_parts" == b.shop && (a += "car parts shop<br/>");
  if ("dive" == b.shop || "scuba_diving" == b.shop) a += "scuba diving shop<br/>";
  "fishing" == b.shop && (a += "fishing shop<br/>");
  "free_flying" == b.shop && (a += "free flying shop<br/>");
  "hunting" == b.shop && (a += "hunting shop<br/>");
  "motorcycle" == b.shop && (a += "motorcycle shop<br/>");
  "outdoor" == b.shop && (a += "outdoor shop<br/>");
  "sports" == b.shop && (a += "sports shop<br/>");
  "tyres" == b.shop && (a += "tyres<br/>");
  "water_sports" == b.shop && (a += "water sports shop<br/>");
  "art" == b.shop && (a += "art<br/>");
  "craft" == b.shop && (a += "craft<br/>");
  "frame" == b.shop && (a += "frame shop<br/>");
  "music" == b.shop && (a += "music shop<br/>");
  "music_instrument" == b.shop && (a += "music instruments shop<br/>");
  "photo" == b.shop && (a += "photo shop<br/>");
  "video" == b.shop && (a += "video<br/>");
  "video_games" == b.shop && (a += "video games<br/>");
  "anime" == b.shop && (a += "anime<br/>");
  "books" == b.shop && (a += "books shop<br/>");
  "gift" == b.shop && (a += "gift shop<br/>");
  "newsagent" == b.shop && (a += "newsagent<br/>");
  "stationery" == b.shop && (a += "stationery<br/>");
  "ticket" == b.shop && (a += "ticket shop<br/>");
  "copyshop" == b.shop && (a += "copyshop<br/>");
  "funeral_directors" == b.shop && (a += "funeral directors<br/>");
  "laundry" == b.shop && (a += "laundry<br/>");
  "dry_cleaning" == b.shop && (a += "dry cleaning<br/>");
  "money_lender" == b.shop && (a += "money lender<br/>");
  "pawnbroker" == b.shop && (a += "pawnbroker<br/>");
  "pet" == b.shop && (a += "pet shop<br/>");
  "pyrotechnics" == b.shop && (a += "pyrotechnics shop<br/>");
  "religion" == b.shop && (a += "religion<br/>");
  "beauty" == b.shop && (a += "beauty<br/>");
  "solarium" == b.shop && (a += "solarium<br/>");
  "tobacco" == b.shop && (a += "tobacco shop<br/>");
  "toys" == b.shop && (a += "toys shop<br/>");
  "travel_agency" == b.shop && (a += "travel agency<br/>");
  "market_hall" == b.shop && (a += "market hall<br/>");
  "vacant" == b.shop && (a += "vacant<br/>");
  "weapons" == b.shop && (a += "weapons shop<br/>");
  "lottery" == b.gambling && (a += "lottery<br/>");
  "fish" == b.pet && (a += "fishkeeping<br/>");
  "agriucultural_engines" == b.craft && (a += "agriucultural engines<br/>");
  "basket_maker" == b.craft && (a += "basket maker<br/>");
  "beekeeper" == b.craft && (a += "beekeeper<br/>");
  "blacksmith" == b.craft && (a += "blacksmith<br/>");
  "brewery" == b.craft && (a += "brewery<br/>");
  "yes" == b.microbrewery && (a += "micro-brewery<br/>");
  "boatbuilder" == b.craft && (a += "boatbuilder<br/>");
  "bookbinder" == b.craft && (a += "bookbinder<br/>");
  "builder" == b.craft && (a += "housebuilding<br/>");
  "carpenter" == b.craft && (a += "carpenter, woodworker, joiner<br/>");
  "carpet_layer" == b.craft && (a += "carpet layer<br/>");
  "caterer" == b.craft && (a += "caterer<br/>");
  "clockmaker" == b.craft && (a += "clockmaker<br/>");
  "confectionery" == b.craft && (a += "confectionery<br/>");
  "dressmaker" == b.craft && (a += "dressmaker<br/>");
  "electrician" == b.craft && (a += "electrician<br/>");
  "gardener" == b.craft && (a += "gardener, landscaper<br/>");
  "glaziery" == b.craft && (a += "glaziery<br/>");
  "handicraft" == b.craft && (a += "handicraft<br/>");
  "hvac" == b.craft && (a += "heating, ventilation and air-conditioning technology (HVAC)<br/>");
  "insulation" == b.craft && (a += "thermal insulation<br/>");
  "jeweller" == b.craft && (a += "jeweller, gold-/silversmiths<br/>");
  "key_cutter" == b.craft && (a += "key cutter<br/>");
  "locksmith" == b.craft && (a += "locksmith<br/>");
  "metal_construction" == b.craft && (a += "metalworker<br/>");
  "optician" == b.craft && (a += "optician<br/>");
  "painter" == b.craft && (a += "painter<br/>");
  "parquet_layer" == b.craft && (a += "parquet layer<br/>");
  "photographer" == b.craft && (a += "photographer<br/>");
  "photographic_laboratory" == b.craft && (a += "photographic laboratory<br/>");
  "plasterer" == b.craft && (a += "plasterer<br/>");
  "plumber" == b.craft && (a += "plumber<br/>");
  "pottery" == b.craft && (a += "pottery<br/>");
  "rigger" == b.craft && (a += "ship rigger<br/>");
  "roofer" == b.craft && (a += "roofer<br/>");
  "saddler" == b.craft && (a += "saddler<br/>");
  "sailmaker" == b.craft && (a += "sailmaker<br/>");
  "sawmill" == b.craft && (a += "sawmill<br/>");
  "scaffolder" == b.craft && (a += "scaffolder<br/>");
  "sculptor" == b.craft && (a += "sculptor<br/>");
  "shoemaker" == b.craft && (a += "shoemaker<br/>");
  "stand_builder" == b.craft && (a += "exhibition stand builder<br/>");
  "stonemason" == b.craft && (a += "stonemason<br/>");
  "sun_protection" == b.craft && (a += "constructor for sun protection, venetian blind, shutter<br/>");
  "sweep" == b.craft && (a += "chimney sweep<br/>");
  "tailor" == b.craft && (a += "tailor<br/>");
  "tiler" == b.craft && (a += "tiler<br/>");
  "tinsmith" == b.craft && (a += "tinsmith, metalworker<br/>");
  "upholsterer" == b.craft && (a += "upholsterer<br/>");
  "watchmaker" == b.craft && (a += "watchmaker<br/>");
  "window_construction" == b.craft && (a += "window constructor<br/>");
  "machines" == b.rental && (a += "rental park for machines<br/>");
  "car_rental" == b.amenity && (a += "car rental company<br/>");
  "allotments" == b.landuse && (a += "allotment garden<br/>");
  "basin" == b.landuse && (a += "holding reservoir<br/>");
  "brownfield" == b.landuse && (a += "brownfield<br/>");
  "commercial" == b.landuse && (a += "commercial area<br/>");
  "construction" == b.landuse && (a += "construction area<br/>");
  "farmland" == b.landuse && (a += "farmland<br/>");
  "farmyard" == b.landuse && (a += "farmyard<br/>");
  "forest" == b.landuse && (a += "forest<br/>");
  "garages" == b.landuse && (a += "garages<br/>");
  "grass" == b.landuse && (a += "grass<br/>");
  "greenfield" == b.landuse && (a += "greenfield<br/>");
  "greenhouse_horticulture" == b.landuse && (a += "greenhouse horticulture<br/>");
  "industrial" == b.landuse && (a += "industry area<br/>");
  "landfill" == b.landuse && (a += "landfill<br/>");
  "meadow" == b.landuse && (a += "meadow<br/>");
  "orchard" == b.landuse && (a += "orchard<br/>");
  "plant_nursery" == b.landuse && (a += "plant nursery<br/>");
  "quarry" == b.landuse && (a += "quarry<br/>");
  "railway" == b.landuse && (a += "railway<br/>");
  "recreation_ground" == b.landuse && (a += "recreation ground<br/>");
  "reservoir" == b.landuse && (a += "reservoir<br/>");
  "residential" == b.landuse && (a += "residential<br/>");
  "retail" == b.landuse && (a += "retrail<br/>");
  "salt_pond" == b.landuse && (a += "salt pond<br/>");
  "village_green" == b.landuse && (a += "village green<br/>");
  "vineyard" == b.landuse && (a += "vineyard<br/>");
  "pond" == b.landuse && (a += "pond<br/>");
  "salt_pond" == b.landuse && (a += "salt pond<br/>");
  "animal_keeping" == b.landuse && (a += "animal keeping<br/>");
  "yes" == b.entrance && (a += "entrance<br/>");
  "main" == b.entrance && (a += "main-entrance<br/>");
  "service" == b.entrance && (a += "rear exit for staffing and suppliers<br/>");
  "exit" == b.entrance && (a += "exit<br/>");
  "emergency" == b.entrance && (a += "emergency<br/>");
  "bay" == b.natural && (a += "bay<br/>");
  "beach" == b.natural && (a += "beach<br/>");
  "wood" == b.natural && (a += "wood<br/>");
  "glacier" == b.natural && (a += "glacier<br/>");
  "cave_entrance" == b.natural && (a += "cave entrance<br/>");
  "spring" == b.natural && (a += "spring<br/>");
  "waterfall" == b.natural && (a += "waterfall<br/>");
  "scrub" == b.natural && (a += "scrub<br/>");
  "grassland" == b.natural && (a += "grassland<br/>");
  "wetland" == b.natural && (a += "wetland<br/>");
  "tree" == b.natural && (a += "tree");
  "peak" == b.natural && "yes" == b["summit:cross"] && (a += "cross on the summit of a mountain<br/>");
  "tree_row" == b.natural && (a += "tree row, alley of trees<br/>");
  "heath" == b.natural && (a += "heath<br/>");
  "moor" == b.natural && (a += "moor<br/>");
  "grassland" == b.natural && (a += "grassland<br/>");
  "fell" == b.natural && (a += "grasland above the tree land<br/>");
  "bare_rock" == b.natural && (a += "bare rock<br/>");
  "scree" == b.natural && (a += "scree<br/>");
  "volcano" == b.natural && (a += "volcano<br/>");
  "valley" == b.natural && (a += "valley<br/>");
  "stone" == b.natural && (a += "stone<br/>");
  "sea" == b.natural && (a += "sea<br/>");
  "national_park" == b.boundary && (a += "national park<br/>");
  "protected_area" == b.boundary && (a += "protected area<br/>");
  "yes" == b.mountain_pass && (a += "mountain pass<br/>");
  "waterfall" == b.waterway && (a += "waterfall<br/>");
  "canal" == b.waterway && (a += "canal<br/>");
  "canal" == b.water && (a += "canal<br/>");
  "river" == b.waterway && (a += "river<br/>");
  "river" == b.water && (a += "river<br/>");
  "riverbank" == b.waterway && (a += "river<br/>");
  "ditch" == b.waterway && (a += "ditch<br/>");
  "stream" == b.waterway && (a += "stream<br/>");
  "ferry" == b.route && (a += "ferry<br/>");
  "turning_point" == b.waterway && (a += "turning point<br/>");
  if ("lake" == b.water || "water" == b.natural) a += "lake<br/>";
  "cove" == b.water && (a += "cove<br/>");
  "lagoon" == b.water && (a += "lagoon<br/>");
  "pond" == b.water && (a += "pond<br/>");
  "reservoir" == b.water && (a += "waterreservoir<br/>");
  "oxbow" == b.water && (a += "oxbow lake<br/>");
  "lock" == b.water && (a += "lock chamber<br/>");
  "moat" == b.water && (a += "castle moat<br/>");
  "wastewater" == b.water && (a += "wastewater treatment plant<br/>");
  "guest" == b.mooring && "pier" == b.man_made || "visitor_berth" == b["seamark:small_craft_facility:category"] ? a += "gastrointestinal<br/>" : "pier" == b.man_made && (a += "pier<br/>");
  "boatyard" == b.waterway && (a += "boatyard<br/>");
  "mooring" == b["seamark:type"] && "dolphin" == b["seamark:mooring:category"] && (a += "dolphin<br/>");
  "foot" == b.route && (a += "footpath<br/>");
  "hiking" == b.route && (a += "hiking trail<br/>");
  if ("yes" == b.hiking && "information" == b.tourism) a += "direction board<br/>";else if ("information" == b.tourism && "information" == b.tourism) if (b.information) switch (b.information) {
    case "board":
      a += "direction board<br/>";
      break;

    case "map":
      a += "direction board with a map<br/>";
      break;

    case "office":
      a += "tourist information office<br/>";
      break;

    case "terminal":
      a += "tourist information terminal<br/>";
      break;

    case "audioguide":
      a += "audioguide<br/>";
      break;

    case "guidepost":
      a += "guidepost<br/>";
      break;

    case "tactile_map":
      a += "tactile map<br/>";
      break;

    case "tactile_model":
      a += "tactile model<br/>";
      break;

    case "route_marker":
      a += "route marker<br/>";
      break;

    default:
      a += "direction board<br/>";
  } else a += "direction board<br/>";
  "bicycle" == b.route && (a += "cycle track<br/>");
  "mtb" == b.route && (a += "mountain bike route<br/>");
  "horse" == b.route && (a += "bridleway<br/>");
  "coastline" == b.natural && (a += "coastline<br/>");
  "cliff" == b.natural && (a += "cliff<br/>");
  "dam" == b.waterway && (a += "dam<br/>");
  "weir" == b.waterway && (a += "weir<br/>");
  "lock_gate" == b.waterway && (a += "lock gate<br/>");
  "yes" == b.lock && (a += "lock<br/>");
  "sluice_gate" == b.waterway && (a += "sluice gate<br/>");
  "pumping_station" == b.man_made && (a += "pumping station<br/>");
  "groyne" == b.man_made && (a += "groyne<br/>");
  "dyke" == b.man_made && (a += "dyke<br/>");
  "levee" == b.man_made && (a += "levee<br/>");
  "watermill" == b.man_made && (a += "watermill<br/>");
  "airfield" == b.military && (a += "military airfield<br/>");
  "naval_base" == b.military && (a += "naval base<br/>");
  "range" == b.military && (a += "military range<br/>");
  "military" == b.landuse && (a += "military land use<br/>");
  "training_area" == b.military && (a += "military training area<br/>");
  "exclusion_zone" == b.military && (a += "military exclusion zone<br/>");
  "danger_area" == b.military && (a += "military danger area<br/>");
  "barracks" == b.military && (a += "barracks<br/>");
  "nuclear_explosion_site" == b.military && (a += "military nuclear explosion site<br/>");
  "yes" == b.construction ? a += "construction<br/>" : "construction" == b.highway && (a += "construction<br/>");
  "petroleum_well" == b.man_made && (a += "petroleum well<br/>");
  "storage_tank" == b.man_made && (a += "storage tank<br/>");
  "wastewater_plant" == b.man_made && (a += "wastewater plant<br/>");
  "silo" == b.man_made && (a += "silo<br/>");
  "water_tower" == b.man_made && (a += "water tower<br/>");
  "windmill" == b.man_made && (a += "windmill<br/>");
  "monitoring_station" == b.man_made && (a += "monitoring station");
  "crane" == b.man_made && (a += "crane");
  "lighthouse" == b.man_made && (a += "lighthouse");
  "beacon" == b.man_made && (a += "beacon");
  "breakwater" == b.man_made && (a += "breakwater");
  "lamp" == b.man_made && "street_lamp" == b["lamp:type"] && (a += "street lamp<br/>");
  "lantern" == b.light_source && (a += "street lamp");
  "floodlight" == b.light_source && (a += "floodlight<br/>");
  "signal_lamp" == b.light_source && (a += "signal lamp<br/>");
  "aviation" == b.light_source && (a += "aviation<br/>");
  "warning" == b.light_source && (a += "warning<br/>");
  if (b.light_source && b["light:method"]) switch (a += "Light Typ: ", b["light:method"]) {
    case "gas":
      a += "Gas";
      break;

    case "electric":
      a += "electric";
      break;

    case "incandescent":
      a += "incandescent";
      break;

    case "halogen":
      a += "halogen";
      break;

    case "discharge":
      a += "discharge";
      break;

    case "metal-halide":
      a += "metal-halide";
      break;

    case "neon":
      a += "neon";
      break;

    case "sodium":
      a += "Natriumdampflampe";
      break;

    case "high_pressure_sodium":
      a += "high pressure sodium";
      break;

    case "low_pressure_sodium":
      a += "low pressure sodium";
      break;

    case "fluorescent":
      a += "Fluorescent";
      break;

    case "mercury":
      a += "Mercury";
      break;

    case "LED":
      a += "LED";
      break;

    case "laser":
      a += "Laser";
      break;

    case "arc":
      a += "Arc";
      break;

    default:
      a += "Unkown";
  }
  "drinking_water" == b.amenity && (a += "drinking water<br/>");
  "yes" == b.drinking_water && (a += "drinking water<br/>");
  "works" == b.man_made ? a += "industrial building<br/>" : "industrial" == b.building ? a += "industrial building<br/>" : "industrial" == b.landuse ? a += "industrial area<br/>" : "industrial" == b.abutters ? a += "industrial area<br/>" : "commercial" == b.abutters && (a += "commercial<br/>");
  if (b["generator:source"]) switch (a += "installation: ", b["generator:source"]) {
    case "biomass":
      a += "biomass";
      break;

    case "biofuel":
      a += "biofuel";
      break;

    case "biogas":
      a += "biogas";
      break;

    case "coal":
      a += "coal";
      break;

    case "oil":
      a += "oil";
      break;

    case "waste":
      a += "waste";
      break;

    case "wind":
      a += "wind";
      break;

    case "solar":
      a += "solar";
      break;

    case "hydro":
      a += "hydro";
      break;

    case "tidal":
      a += "tidal";
      break;

    case "wave":
      a += "wave";
      break;

    case "geothermal":
      a += "geothermal";
      break;

    case "osmotic":
      a += "osmotic";
      break;

    case "nuclear":
      a += "nuclear";
      break;

    default:
      a += "unknown<br/>";
  }
  "photovoltaic" == b.power_source && (a += "photovoltaic");
  "line" == b.power && (a += "power line<br/>");
  "cable" == b.power && (a += "cable<br/>");
  "cable_distribution_cabinet" == b.power && (a += "cable distribution cabinet<br/>");
  "plant" == b.power && (a += "plant<br/>");
  "station" == b.power && (a += "station<br/>");
  "sub_station" == b.power && (a += "substation<br/>");
  "compensator" == b.power && (a += "compensator<br/>");
  "converter" == b.power && (a += "converter<br/>");
  "generator" == b.power && (a += "generator<br/>");
  "heliostat" == b.power && (a += "heliostat<br/>");
  "insulator" == b.power && (a += "insulator<br/>");
  "busbar" == b.line && (a += "busbar<br/>");
  "bay" == b.line && (a += "bay<br/>");
  "minor_line" == b.power && (a += "minor line<br/>");
  "pole" == b.power && (a += "pole<br/>");
  "portal" == b.power && (a += "portal<br/>");
  "catenary_mast" == b.power && (a += "catenary mast<br/>");
  "substation" == b.power && (a += "substation<br/>");
  "switch" == b.power && (a += "switch<br/>");
  "terminal" == b.power && (a += "terminal<br/>");
  "tower" == b.power && (a += "tower<br/>");
  "transformer" == b.power && (a += "transformer<br/>");
  if (b.barrier) switch (b.barrier) {
    case "bollard":
      a += "bollard<br/>";
      break;

    case "cycle_barrier":
      a += "cycle barrier<br/>";
      break;

    case "gate":
      a += "gate<br/>";
      break;

    case "chain":
      a += "chain<br/>";
      break;

    case "lift_gate":
      a += "lift gate<br/>";
      break;

    case "wall":
      a += "wall<br/>";
      break;

    case "toll_booth":
      a += "toll booth<br/>";
      break;

    case "fence":
      switch (b.fence_type) {
        case "barbed_wire":
          a += "barbed wire<br/>";
          break;

        case "wood":
          a += "wood<br/>";
          break;

        case "chain_link":
          a += "chain link<br/>";
          break;

        case "electric":
          a += "electric<br/>";
          break;

        case "railing":
          a += "railing<br/>";
          break;

        case "wire":
          a += "wire<br/>";
          break;

        case "metal":
          a += "metal<br/>";
          break;

        case "pole":
          a += "pole<br/>";
          break;

        default:
          a += "fence<br/>";
      }

      break;

    case "block":
      a += "block<br/>";
      break;

    case "ditch":
      a += "ditch<br/>";
      break;

    case "border_control":
      a += "border control<br/>";
      break;

    case "hedge":
      a += "hedge<br/>";
      break;

    case "retaining_wall":
      a += "retaining wall<br/>";
      break;

    case "cattle_grid":
      a += "cattle grid<br/>";
      break;

    case "horse_stile":
      a += "horse stile<br/>";
      break;

    default:
      a += "unknown<br/>";
  }
  "noise_barrier" == b.wall && (a += "noise barrier<br/>");
  "retaining_wall" == b.designation && (a += "noise barrier<br/>");
  "noise_barrier" == b.designation && (a += "noise barrier<br/>");
  "surveillance" == b.man_made && (a += "surveillance<br/>");
  if (b.aeroway) switch (a += "airport: ", b.aeroway) {
    case "aerodrome":
      a += "airport";
      break;

    case "apron":
      a += "apron";
      break;

    case "gate":
      a += "gate";
      break;

    case "helipad":
      a += "helipad";
      break;

    case "hangar":
      a += "hangar";
      break;

    case "runway":
      a += "runway";
      break;

    case "taxiway":
      a += "taxiway";
      break;

    case "terminal":
      a += "terminal";
      break;

    default:
      a += "unknown<br/>";
  }
  "stop" == b.railway && (a += "railway stop<br/>");
  "crossing" == b.railway && (a += "crossing<br/>");
  "level_crossing" == b.railway && (a += "lvel crossing<br/>");
  "station" == b.railway && (a += "station<br/>");
  "bus_station" == b.amenity && (a += "bus station<br/>");
  "bus_station" == !b.amenity && "station" == b.public_transport && "yes" == b.bus && (a += "bus station<br/>");
  "rail" == b.railway && (a += "railway<br/>", "contact_line" == b.electrified && (a += "overhead contact line<br/>"));
  "tram" == b.railway && (a += "tram<br/>");
  if ("slipway" == b["seamark:small_craft_facility:category"] || "slipway" == b.harbour || "slipway" == b.leisure) a += "slipway<br/>";
  if ("harbour" == b["seamark:type"]) if (b["seamark:harbour:category"]) switch (b["seamark:harbour:category"]) {
    case "ferry":
      a += "ferry<br/>";
      break;

    case "container":
      a += "container<br/>";
      break;

    case "marina":
      "marina" != b.leisure && (a += "marina<br/>");
      break;

    case "navel_base":
      a += "navel base<br/>";
      break;

    case "tanker":
      a += "tanker<br/>";
      break;

    case "passenger":
      a += "passenger<br/>";
      break;

    case "bulk":
      a += "bulk<br/>";
      break;

    default:
      a += "habour<br/>";
  } else a += "habour<br/>";
  "marina" == b.leisure && (a += "marina<br/>");
  "wreck" == b.historic && (a += "wreck<br/>");
  "animal_shelter" == b.amenity && (a += "animal shelter<br/>");
  "shelter" == b.animal && (a += "shelter<br/>");
  "horse_walker" == b.animal && (a += "horse walker<br/>");
  "yes" == b.animal_shelter && (a += "animal shelter<br/>");
  "dog" == b.animal_shelter && (a += "animal shelter<br/>");
  "cat" == b.animal_shelter && (a += "animal shelter<br/>");
  "animal_boarding" == b.amenity && (a += "animal boarding<br/>");
  "yes" == b.animal_boarding && (a += "animal boarding<br/>");
  "dog" == b.animal_boarding && (a += "animal boarding<br/>");
  "horse" == b.animal_boarding && (a += "animal boarding<br/>");
  "cat" == b.animal_boarding && (a += "animal boarding<br/>");
  "dog;cat" == b.animal_boarding && (a += "animal boarding<br/>");
  "cat;dog" == b.animal_boarding && (a += "animal boarding<br/>");
  if ("school" == b.animal || "sport" == b.animal || "animal_training" == b.amenity) a += "animal training<br/>";
  "swimming" == b.animal && (a += "swimming for dogs<br/>");
  if ("feeding_place" == b.amenity || "animal_feeding" == b.man_made || "animal_feeding" == b.amenity) a += "animal feeding<br/>";
  if ("wildlife_feeding" == b.amenity || "deer_feeding" == b.amenity || "game_feeding" == b.amenity) a += "wildlife feeding<br/>";
  if ("cratch" == b.amenity || "cratch" == b.man_made || "feeding_rack" == b.amenity) a += "feeding rack<br/>";
  "manger" == b.amenity && (a += "manger<br/>");
  "birdhouse" == b.man_made && (a += "birdhouse<br/>");
  "stork" == b.birds_nest && (a += "storck<br/>");
  "nest_box" == b.amenity && (a += "nest box<br/>");
  "wellness" == b.animal && (a += "dog parlour<br/>");
  "cemetery" == b.animal && (a += "small animal cemetery<br/>");
  if ("stable" == b.building || "stable" == b["building:use"]) a += "stable<br/>";
  "cowshed" == b.building && (a += "cowshed<br/>");
  "sty" == b.building && (a += "sty<br/>");
  "barn" == b.building && (a += "barn<br/>");
  "farm_auxiliary" == b.building && (a += "farm auxiliary<br/>");
  if (b["river:waterway_distance"] || "milestone" == b.waterway) a += "milestone of waterway distance<br/>";
  "milestone" == b.highway && (a += "milestone<br/>");
  "market" == b["xmas:feature"] && (a += "Christmas fair<br/>");
  "tree" == b["xmas:feature"] && (a += "sale of Chrismas trees<br/>");
  "event" == b["xmas:feature"] && (a += "Chrismas event<br/>");
  "pyramid" == b["xmas:feature"] && (a += "Chrismas pyramid<br/>");
  return '<div class="c4g_popup_header_featuretype">' + a + "<br/> </div>";
}

var fnContent = function fnContent(b) {
  var a;
  a = "" + fnContentGeneralInformations(b);
  a += fnContentHealthcare(b);
  a += fnContentAerodrome(b);
  a += fnContentCuisine(b);
  a += fnContentShipping(b);
  a += fnContentHydrants(b);
  a += fnContentSports(b);
  a += fnContentStreetsTraffic(b);
  a += fnContentInformationCity(b);
  a += fnContentEmergency(b);
  a += fnContentStorage(b);
  a += fnContentAmenity(b);
  a += fnContentTourism(b);
  a += fnContentRoute(b);
  a += fnContentPetrol(b);
  a += fnContentBarriers(b);
  a += fnContentLanduse(b);
  a += fnContentNatural(b);
  a += fnKlosterAdditional(b);
  a += fnSicherheitAdditional(b);
  a += fnAdditionalBuildingInfos(b);
  a += fnKraftwerkInfo(b);
  a += fnMessstation(b);
  a += fnWertstoffinfo(b);
  (a += fnContentProtectedArea(b)) && (a = "<br/>" + a);
  return '<div class="c4g_popup_content">' + a + "</div>";
},
    fnContentAerodrome = function fnContentAerodrome(b) {
  var a = "";
  b.aerodrome && ("international" == b.aerodrome && (a += "type of airport: international<br/>"), "regional" == b.aerodrome && (a += "type of airport: regional<br/>"), "gliding" == b.aerodrome && (a += "type of airport: gliding<br/>"), "private" == b.aerodrome && (a += "type of airport: private<br/>"));
  b.iata && (a += "IATA-Code: " + b.iata + "<br/>");
  b.icao && (a += "ICAO-Code: " + b.icao + "<br/>");
  return a;
},
    fnContentNatural = function fnContentNatural(b) {
  var a = "";

  if (b.forest || b.wood) {
    if ("broadleaved" == b.leaf_type || "deciduous" == b.wood) a += "broadleaved<br/>";
    if ("needleleaved" == b.leaf_type || "coniferous" == b.wood) a += "needleleaved<br/>";
    if ("mixed" == b.leaf_type || "mixed" == b.wood) a += "mixed<br/>";
    "leafless" == b.leaf_type && (a += "leafless<br/>");
    "evergreen" == b.wood && (a += "evergreen<br/>");
    "palm" == b.wood && (a += "palm<br/>");
    "nipa_palm" == b.wood && (a += "nipa palm<br/>");
    "eucalypt" == b.wood && (a += "eucalypt<br/>");
    if ("filao" == b.wood || "casuarina" == b.wood) a += "casuarina<br/>";
  }

  if ("tree" == b.natural && (!b["genus:de"] && !b["species:de"] && b.leaf_type && (a = "broadleaved" == b.leaf_type || "deciduous" == b.leaf_type || "broadleafed" == b.leaf_type ? a + "broad-leaved<br/>" : a + "conifer<br/>"), b.genus && (a += b.genus + "<br/>"), b["genus:de"] && (a += b["genus:de"] + "<br/>"), b.species && (a += b.species + "<br/>"), b["species:de"] && (a += b["species:de"] + "<br/>"), "landmark" == b.denotation && (a += "landmark<br/>"), "natural_monument" == b.denotation || "yes" == b.monument)) a += "natural monument<br/>";
  "manger" == b["feeding:type"] && (a += "manger:rack for fodder<br/>");
  "automated" == b["feeding:type"] && (a += "automated<br/>");
  if (b["feeding:for"]) switch (b["feeding:for"]) {
    case "sheep":
      a += "animal: sheep<br/>";
      break;

    case "horse":
      a += "animal: horse<br/>";
      break;

    case "cow":
      a += "animal: cow<br/>";
      break;

    case "rabbit":
      a += "animal: rabbit<br/>";
      break;

    case "bunny":
      a += "animal: bunny<br/>";
      break;

    case "cat":
      a += "animal: cat </br>";
      break;

    case "swan":
      a += "animal: swan </br>";
      break;

    case "guinea pig":
      a += "animal: guinea pig </br>";
      break;

    case "donkey":
      a += "animal: donkey </br>";
      break;

    case "squirrel":
      a += "animal: squirrel </br>";
      break;

    case "pig":
      a += "animal: pig </br>";
      break;

    case "deer":
      a += "animal: deer </br>";
      break;

    case "guinea pig":
      a += "animal: guinea pig </br>";
      break;

    case "monkey":
      a += "animal: monkey </br>";
      break;

    case "camel":
      a += "animal: camel </br>";
      break;

    case "goat":
      a += "animal: goat </br>";
      break;

    case "hamster":
      a += "animal: hamster </br>";
      break;

    case "alpaca":
      a += "animal: alpaca </br>";
      break;

    default:
      a += "animal: unknown<br/>";
  }
  if (b["feeding:fodder"]) switch (b["feeding:fodder"]) {
    case "hay":
      a += "feed with: hay</br>";
      break;

    case "grain":
      a += "feed with: grain</br>";
      break;

    case "corn":
      a += "feed with: corn</*br>";
      break;

    default:
      a += "feed with: unknown</br>";
  }
  "volcano" == b.natural && "active" == b.status && (a += "active volcano<br/>");
  "volcano" == b.natural && "dormant" == b.status && (a += "dormant volcano<br/>");
  "volcano" == b.natural && "extinct" == b.status && (a += "extinct volcano<br/>");
  "volcano" == b.natural && "stratovolcano" == b.type && (a += "type of volcanism:stratovolcano<br/>");
  "volcano" == b.natural && "shield" == b.type && (a += "type of volcanism:shield<br/>");
  "volcano" == b.natural && "scoria" == b.type && (a += "type of volcanism:scoria<br/>");
  return a;
},
    fnContentProtectedArea = function fnContentProtectedArea(b) {
  var a = "",
      c = "";
  "protected_area" == b.boundary && (b.protect_class && (c = b.protect_class), b.protect_id && (c = b.protect_id), "1" == c && (a = "description: Strict Nature Reserve, Wilderness Area<br/>"), "2" == c && (a = "description: National Park<br/>"), "3" == c && (a = "description: Natural Monument or Feature<br/>"), "4" == c && (a = "description: Habitat/Species Management Area<br/>"), "5" == c && (a = "description: Protected Landscape/ Seascape<br/>"), "6" == c && (a = "description: Protected area with sustainable use of natural resources<br/>"), "7" == c && (a = "description: nature-feature area<br/>"), "97" == c && (a = "description: protected by continental agreements<br/>"), "98" == c && (a = "description: protected by interstate- or international conventions<br/>"), "99" == c && (a = "other continental or international national protected areas <br/>"), "21" == c && (a = "description: Community life: religious, sacred areas, associative locations, recreation<br/>"), "22" == c && (a = "description: Cultural assets (cultural assets and - efforts, districts historical heritage, monument conservation)<br/>"), "23" == c && (a = "description: Protection in favor of economics<br/>"), "24" == c && (a = "description: Political protection<br/>"), "25" == c && (a = "description: Military areas (military refuges, test area)<br/>"), "26" == c && (a = "description: Historic: for colonial-stuff and protectorates.<br/>"), "29" == c && (a = "description: other social protected areas<br/>"), "11" == c && (a = "description: soil: crop yield, erosion protection, ...<br/>"), "12" == c && (a = "description: water: water protection area, fresh water, drinking water, springs, ...<br/>"), "13" == c && (a = 'description: climate and -air: gasper supply/cold air, ...for emission-, immission control in OSM existent, see "Low Emission Zone" (LEZ)<br/>'), "14" == c && (a = "description: species: no fishing, protected for fishery, protected for hunting, plants, ...<br/>"), "15" == c && (a = "description: location condition: floodwater retention area, protection forest, grazing land, ...<br/>"), "16" == c && (a = 'description: longtime hazard area: contamination, earth-moving area, "problem sites" ...<br/>'), "19" == c && (a = "description: other national resources protected areas<br/>"));
  return a;
},
    fnContentLanduse = function fnContentLanduse(b) {
  var a = "";
  "quarry" == b.landuse && b.resource && (a += "Resource: " + b.resource + "<br/>");
  "open_stable" == b["animal_keeping:type"] && (a += "open stable<br/>");
  "field_shelter" == b["animal_keeping:type"] && (a += "field shelter<br/>");
  "paddock" == b["animal_keeping:type"] && (a += "paddock<br/>");
  b.animal_keeping && (a += "animals: horses<br/>");
  return a;
},
    fnMessstation = function fnMessstation(b) {
  var a = "";
  "yes" == b["monitoring:water_level"] && (a += "water level<br/>");
  "yes" == b["monitoring:seismic_activity"] && (a += "seismic activity<br/>");
  "yes" == b["monitoring:tide_gauge"] && (a += "tide gauge<br/>");
  "yes" == b["monitoring:weather"] && (a += "weather<br/>");
  "yes" == b["monitoring:air_quality"] && (a += "air quality<br/>");
  return a;
},
    fnContentRoute = function fnContentRoute(b) {
  var a = "";
  b.route && ("yes" == b.roundtrip && (a += "roundtrip<br/>"), b.length && (a += "length: " + b.length + "<br/>"), b.distance && (a += "distance: " + b.distance + "<br/>"), b.symbol && (a += "symbol: " + b.symbol + "<br/>"));
  return a;
},
    fnContentPetrol = function fnContentPetrol(b) {
  var a = "";
  "fuel" == b.amenity && ("yes" == b["fuel:biodiesel"] && (a += "biodiesel<br/>"), "yes" == b["fuel:e85"] && (a += "e85<br/>"), "yes" == b["fuel:e10"] && (a += "e10<br/>"), "yes" == b["fuel:lpg"] && (a += "lpg<br/>"), "yes" == b["fuel:cng"] && (a += "cng<br/>"), "diesel" == b.fuel && (a += "diesel<br/>"), "lpg" == b.fuel && (a += "lpg<br/>"), "yes" == b["fuel:octane_95"] && (a += "octane 95<br/>"), "yes" == b["fuel:octane_98"] && (a += "octane 98<br/>"), "yes" == b["fuel:octane_100"] && (a += "octane 100<br/>"), "yes" == b["fuel:octane_102"] && (a += "octane 102<br/>"), "yes" == b["fuel:diesel"] && (a += "diesel<br/>"), "yes" == b["fuel:electricity"] && (a += "charging station / loading station<br/>"));
  return a;
},
    fnContentHistoric = function fnContentHistoric(b) {
  var a = "";
  if ("archaeological_site" == b.historic && b.site_type) switch (b.site_type) {
    case "megalith":
      a += "megalith<br/>";
      break;

    case "bigstone":
      a += "bigstone<br/>";
      break;

    case "tumulus":
      a += "tumulus<br/>";
      break;

    case "fortification":
      a += "fortification<br/>";
      break;

    default:
      a += "unknown<br/>";
  }
  return a;
},
    fnContentBarriers = function fnContentBarriers(b, a) {
  var c = "";
  if ("wall" == b.barrier || "bollard" == b.barrier) b.material && (c += "material: " + translate(b.material) + "<br/>");
  return c;
},
    fnContentTourism = function fnContentTourism(b) {
  var a = "";

  if ("camp_site" == b.tourism) {
    "yes" == b.dog && (a += "dogs allowed<br/>");
    "no" == b.dog && (a += "dogs forbidden<br/>");
    b.stars && (a += b.stars + "stars<br/>");
    b.caravans && (a += "caravan sites<br/>");
    if ("yes" == b.openfire || "yes" == b.fireplace) a += "Thers is an openfire. <br/>";
    "yes" == b.washing_machine && (a += "washing machine<br/>");
    "yes" == b.dryer && (a += "dryer<br/>");
    "yes" == b.group_only && (a += "use for groups only<br/>");
    "reception" == b.camp_site && (a += "reception available<br/>");
  }

  "information" == b.tourism && "map" == b.information && ("topo" == b.map_type && (a += "topo</br>"), "street" == b.map_type && (a += "street</br>"), "scheme" == b.map_type && (a += "scheme</br>"), "toposcope" == b.map_type && (a += "toposcope</br>"));
  "information" == b.tourism && "map" == b.information && ("site" == b.map_size && (a += "map of site</br>"), "city" == b.map_size && (a += "city map</br>"), "region" == b.map_size && (a += "map of region</br>"));
  "geology" == b.board_type && (a += "geologic information<br/>");
  "history" == b.board_type && (a += "historic information<br/>");
  "nature" == b.board_type && (a += "information about nature<br/>");
  "notice" == b.board_type && (a += "general information<br/>");
  "plants" == b.board_type && (a += "information about plants<br/>");
  "wildlife" == b.board_type && (a += "information about wildlife<br/>");
  return a;
},
    fnContentAmenity = function fnContentAmenity(b) {
  var a = "";
  "boat_sharing" == b.amenity && (a += b.boattype + "<br/>");
  "embassy" == b.amenity && (a += b.country + "<br/>");
  if (b.vending) switch (b.vending) {
    case "admission_tickets":
      a += "tickets<br/>";
      break;

    case "animal_feed":
      a += "animal feed<br/>";
      break;

    case "books":
      a += "books<br/>";
      break;

    case "candles":
      a += "candles<br/>";
      break;

    case "cigarettes":
      a += "cigarettes<br/>";
      break;

    case "condoms":
      a += "condoms<br/>";
      break;

    case "drinks":
      a += "drinks<br/>";
      break;

    case "first_aid":
      a += "first aid articles<br/>";
      break;

    case "fishing_tackle":
      a += "fishing tackle<br/>";
      break;

    case "flowers":
      a += "flowers<br/>";
      break;

    case "ice_cream":
      a += "ice cream<br/>";
      break;

    case "laundry_detergent":
      a += "laundry detergent<br/>";
      break;

    case "newspapers":
      a += "newspapers<br/>";
      break;

    case "SIM_cards":
      a += "sIM-cards<br/>";
      break;

    case "sweets":
      a += "sweets<br/>";
      break;

    case "parcel_pickup":
      a += "parcel pickup<br/>";
      break;

    case "ice_cubes":
      a += "ice cubes<br/>";
      break;

    case "public_transport_tickets":
      a += "public transport tickets<br/>";
      break;

    case "parking_ticket":
      a += "parking tickets<br/>";
      break;

    case "sex_toys":
      a += "sex toys<br/>";
      break;

    case "stamps":
      a += "stamps<br/>";
      break;

    case "toll":
      a += "toll<br/>";
      break;

    case "umbrellas":
      a += "umbrellas<br/>";
      break;

    default:
      a += "content unknown<br/>";
  }
  "post_box" == b.amenity && (b.collection_times && (a += "collection times: " + b.collection_times + "<br/>"), "yes" == b.drive_through && (a += "accessible by car. <br/>"));
  return a;
},
    fnContentStorage = function fnContentStorage(b) {
  var a = "";

  if ("storage_tank" == b.man_made) {
    if (b.content) {
      var c = b.content;

      switch (c) {
        case "fuel":
          c = "fuel";
          break;

        case "oil":
          c = "oil";
          break;

        case "gas":
          c = "gas";
          break;

        case "slurry":
          c = "slurry";
          break;

        case "cement":
          c = "cement";
          break;

        case "water":
          c = "water";
          break;

        case "manure":
          c = "manure";
          break;

        case "silage":
          c = "silage";
      }

      a += "content: " + c + "<br/>";
    }

    if (b.contents) {
      c = b.contents;

      switch (c) {
        case "fuel":
          c = "fuel";
          break;

        case "oil":
          c = "oil";
          break;

        case "gas":
          c = "gas";
          break;

        case "slurry":
          c = "slurry";
          break;

        case "cement":
          c = "cement";
          break;

        case "water":
          c = "water";
          break;

        case "manure":
          c = "manure";
          break;

        case "silage":
          c = "silage";
      }

      a += "content: " + c + "<br/>";
    }
  }

  b.storage && ("gas" == b.storage && (a += "content: gas<br/>"), "oil" == b.storage && (a += "content: oil<br/>"));
  return a;
},
    fnContentInformationCity = function fnContentInformationCity(b) {
  var a = "";
  b["name:de"] && (a += "german name: " + b["name:de"] + "<br/>");
  if (1E4 <= b.population) if (b.population = "" + b.population, 3 < b.population.length) {
    var c = b.population.length % 3,
        d = 0 < c ? b.population.substring(0, c) : "";

    for (var i = 0; i < Math.floor(b.population.length / 3); i++) {
      d = 0 == c && 0 == i ? d + b.population.substring(c + 3 * i, c + 3 * i + 3) : d + ("." + b.population.substring(c + 3 * i, c + 3 * i + 3));
    }

    a += "population: " + d + "<br/>";
  } else a += "population " + b.population + "<br/>";
  1E4 >= b.population && (a += "population: " + b.population + "<br/>");
  return a;
},
    fnContentEmergency = function fnContentEmergency(b) {
  var a = "";
  b.lifeboat && ("inshore" == b.lifeboat ? a += "application: inshore<br/>" : "offshore" == b.lifeboat && (a += "application: offshore<br/>"));
  b["lifeboat:class"] && (a += "type of boat: " + b["lifeboat:class"] + "<br/>");

  if (b["siren:type"]) {
    var c = b["siren:type"];

    switch (c) {
      case "mechanical":
        c = "mechanical";
        break;

      case "electronic":
        c = "electronic";
        break;

      case "pneumatic":
        c = "pneumatic";
        break;

      case "electromechanic":
        c = "electromechanic";
    }

    a += "Typ: " + c + "<br/>";
  }

  if (b["siren:purpose"]) {
    c = b["siren:purpose"];

    switch (c) {
      case "air_raid":
        c = "air raid";
        break;

      case "tornado":
        c = "tornado";
        break;

      case "storm":
        c = "storm";
        break;

      case "civil_defense":
        c = "civil defence";
        break;

      case "fire":
        c = "fire";
    }

    a += "use: " + c + "<br/>";
  }

  b["siren:model"] && (a += "model: " + b["siren:model"] + "<br/>");
  b["siren:range"] && (a += "range of siren: " + b["siren:range"] + "<br/>");
  return a;
},
    fnContentCuisine = function fnContentCuisine(b) {
  var a = "";

  if (b.cuisine) {
    var c = "",
        a = ("supermarket" == b.shop || "convenience" == b.shop || "deli" == b.shop || "organic" == b.shop) && "restaurant" != b.amenity ? a + "specialties: " : a + "cuisine: ";
    "arabic" == b.cuisine && (c += "arabic<br/>");
    "italian" == b.cuisine && (c += " italian<br/>");
    "international" == b.cuisine && (c += " international<br/>");
    "regional" == b.cuisine && (c += " regional<br/>");
    "chinese" == b.cuisine && (c += " chinese<br/>");
    "greek" == b.cuisine && (c += " greek<br/>");
    "african" == b.cuisine && (c += " african<br/>");
    "german" == b.cuisine && (c += " german<br/>");
    "mexican" == b.cuisine && (c += " mexican<br/>");
    "french" == b.cuisine && (c += " french<br/>");
    "indian" == b.cuisine && (c += " indian<br/>");
    "iranian" == b.cuisine && (c += " iranian<br/>");
    "lebanese" == b.cuisine && (c += " lebanese<br/>");
    "thai" == b.cuisine && (c += " thai<br/>");
    "balkan" == b.cuisine && (c += " balkan<br/>");
    "turkish" == b.cuisine && (c += " turkish<br/>");
    "bavarian" == b.cuisine && (c += " bavarian<br/>");
    "czech" == b.cuisine && (c += " czech<br/>");
    "portuguese" == b.cuisine && (c += " portuguese<br/>");
    "spanish" == b.cuisine && (c += " spanish<br/>");
    "japanese" == b.cuisine && (c += " japanese<br/>");
    "fish" == b.cuisine && (c += " fish<br/>");
    "brazilian" == b.cuisine && (c += " brazilian<br/>");
    "asian" == b.cuisine && (c += " asian<br/>");
    "mediterranean" == b.cuisine && (c += "mediterranean<br/>");
    "seafood" == b.cuisine && (c += " seafood<br/>");
    "ice_cream" == b.cuisine && (c += " ice cream<br/>");
    "burger" == b.cuisine && (c += " burger<br/>");
    "frozen_yogurt" == b.cuisine && (c += " frozen yogurt<br/>");
    "" == c && (c = b.cuisine + "<br/>");
    a += c;
  }

  return a;
},
    fnContentShipping = function fnContentShipping(b) {
  var a = "";
  b.harbour = "yes";
  "yes" == b["access:tide"] && (a += "Access restricted by tide</br>");
  "yes" == b["access:swell"] && (a += "access restricted by swell</br>");
  "yes" == b["access:ice"] && (a += "access restricted by ice</br>");
  b.vhf_channel && (a += "UKW-Channel: " + b.vhf_channel + "</br>");
  b.mmsi && (a += "MMSI-Number: " + b.mmsi + "</br>");
  b["harbour:information"] && (a += "information :" + b["harbour:information"] + "</br>");
  "yes" == b.motorboat && (a += "motorboat allowed</br>");
  "no" == b.motorboat && (a += "motorboat prohibited </br>");
  b.CEMT && (a += "CEMT: " + b.CEMT + "</br>");
  "yes" == b.intermittent && (a += "river intermittent dried out</br>");
  "yes" == b.tidal && (a += "tidal influence the flow</br>");
  b.draft && (a += " driving depth of water: " + b.draft + " m</br>");
  if ("slipway" == b.leisure || "slipway" == b.harbour) "hand" == b.operating && (a += "operating: by hand<br/>"), "car" == b.operating && (a += "operating: by car, boat trailer<br/>"), "cable_winch" == b.operating && (a += "operating: with cable winch<br/>"), "travellift" == b.operating && (a += "operating: by travellift<br/>"), "crane" == b.man_made && (a += "by crane<br/>", b["crane:maxload"] && (a += "maxload: " + b["crane:maxload"] + "<br/>"), b["ship:maxdraft"] && (a += "maximum permissible draught: " + b["ship:maxdraft"] + "<br/>"), b["ship:maxlength"] && (a += "maximum permissible length of a ship: " + b["ship:maxlength"] + "<br/>")), "yes" == b.vehicle && (a += "accessible by vehicle<br/>");
  a += fnWreckInfo(b);
  if ("ferry" == b.route || "ferry_terminal" == b.amenity || "yes" == b.ferry) fahrzeit = b.duration, "" != fahrzeit && "undefined" != fahrzeit && null != fahrzeit && (a += "duration in hours : " + fahrzeit + "<br/>"), "yes" == b.motorcar && (a += "motorcars allowed<br/>"), "no" == b.motorcar && (a += "motorcars prohibited<br/>"), "no" == b.motor_vehicle && (a += "motor vehicles prohibited<br/>"), "yes" == b.motor_vehicle && (a += "motor vehicles allowed<br/>"), "yes" == b.vehicle && (a += "vehicles allowed<br/>"), "no" == b.vehicle && (a += "no vehicles<br/>"), "no" == b.bicycle && (a += "no bicycles<br/>"), "no" == b.bicycle && (a += "bicycles allowed<br/>"), "yes" == b.hgv && (a += "hgv allowed<br/>"), "no" == b.hgv && (a += "hgv prohibited<br/>"), "yes" == b.foot && (a += "pedestrian allowed<br/>"), "no" == b.foot && (a += "pedestrian prohibited <br/>"), "yes" == b.bicycle && (a += "cyclist allowed <br/>"), "no" == b.bicycle && (a += "cyclist prohibited <br/>"), "yes" == b["ferry:cable"] && (a += "cable ferry<br/>");

  if (b["seamark:light:1:colour"]) {
    var c = b["seamark:light:1:colour"];

    switch (c) {
      case "white":
        c = "white";
        break;

      case "red":
        c = "red";
        break;

      case "green":
        c = "green";
        break;

      case "blue":
        c = "blue";
        break;

      case "yellow":
        c = "yellow";
        break;

      case "amber":
        c = "amber";
    }

    a += "colour of light: " + c + "<br/>";
  }

  "lighthouse" == b.man_made && (b["seamark:light:1:character"] && (a += "light character: " + b["seamark:light:1:character"] + "<br/>"), b["seamark:light:1:period"] && (a += "period: " + b["seamark:light:1:period"] + "<br/>"), b["seamark:light:1:height"] && (a += "height: " + b["seamark:light:1:height"] + " m<br/>"), b["seamark:light:1:range"] && (a += "range: " + b["seamark:light:1:range"] + " sm<br/>"));

  if (b["seamark:light:colour"]) {
    c = b["seamark:light:colour"];

    switch (c) {
      case "white":
        c = "white";
        break;

      case "red":
        c = "red";
        break;

      case "green":
        c = "green";
        break;

      case "blue":
        c = "blue";
        break;

      case "yellow":
        c = "yellow";
        break;

      case "amber":
        c = "amber";
    }

    a += "colour of light: " + c + "<br/>";
  }

  "lighthouse" == b.man_made && (b["seamark:light:character"] && (a += "light character: " + b["seamark:light:character"] + "<br/>"), b["seamark:light:height"] && (a += "height: " + b["seamark:light:height"] + " m<br/>"), b["seamark:light:range"] && (a += "range: " + b["seamark:light:range"] + " sm<br/>"), b["seamark:light:period"] && (a += "period: " + b["seamark:light:period"] + "<br/>"));
  return a;
},
    fnContentHydrants = function fnContentHydrants(b) {
  var a = "";

  if ("fire_hydrant" == b.emergency) {
    var c = b["fire_hydrant:count"];
    "undefined" != c && null != c && "" != c && (a += "Number: " + c + "<br/>");
    c = b["fire_hydrant:diameter"];
    "undefined" != c && null != c && "" != c && (a += "Pipe diameter: " + c + " mm<br/>");
    c = b["fire_hydrant:pressure"];
    "undefined" != c && null != c && "" != c && (a = "suction" == c ? a + "Pressure in bar / Suction: Suction<br/>" : a + ("Pressure in bar / Suction: " + c + "<br/>"));
    c = b["fire_hydrant:position"];
    "undefined" != c && null != c && "" != c && ("lane" == c ? a += "Position: Lane<br/>" : "parking_lot" == c ? a += "Position: Parking Lot<br/>" : "sidewalk" == c ? a += "Position: Sidewalk<br/>" : "green" == c && (a += "Position: Green<br/>"));
    c = b.water_volume;
    "undefined" != c && null != c && "" != c && (a += "Volume: " + c + "<br/>");
    c = b["fire_hydrant:awwa_class"];
    "undefined" != c && null != c && "" != c ? a += "AWWA Class: " + c + "<br/>" : (c = b.flow_rate, "undefined" != c && null != c && "" != c && (a += "Flow rate: " + c + "<br/>"));
    c = b.water_source;
    "undefined" != c && null != c && "" != c && "main" != c && (a += "Water source: " + c + "<br/>");
    c = b["couplings:type"];
    "undefined" != c && null != c && "" != c && (a += "Couplings type: " + c + "<br/>");
    c = b["couplings:diameter"];
    "undefined" != c && null != c && "" != c && (a += "Couplings diameter: " + c + "<br/>");
    c = b["pillar:type"];
    "dry_barrel" === c && (a += "Pillar type: " + c + "<br/>");
    "fire_hydrant" === b["disused:emergency"] && (a += "Currently disused");
    "" == a && (a = "No details available.");
  }

  return a;
},
    fnContentStreetsTraffic = function fnContentStreetsTraffic(b) {
  var a = "";
  "yes" == b["red_turn:right"] && (a += "red turn: allowed to turn to the right<br/>");
  "no" == b["red_turn:right"] && (a += "red turn: prohibited to turn to the right<br/>");
  b.bridge && (b.height && (a += "height: " + b.height + " m<br/>"), b.length && (a += "length: " + b.length + " m<br/>"), b.bridge_ref && (a += "bridge ref: " + b.bridge_ref + "<br/>"), b.start_date && (a += "start date: " + b.start_date + "</br>;"), b.maxweight && (a += "maxweight: " + b.maxweight + " t</br>"));
  b.highway && "yes" == b.toll && (a += "toll highway<br/>");
  "yes" == b["toll:hgv"] && (a += "HGV toll<br/>");

  if (b.surface) {
    var c = b.surface,
        a = a + "surface: ";

    switch (c) {
      case "grass":
        a += "grass<br/>";
        break;

      case "paved":
        a += "paved<br/>";
        break;

      case "asphalt":
        a += "asphalt<br/>";
        break;

      case "cobblestone":
        a += "cobblestone<br/>";
        break;

      case "sett":
        a += "sett<br/>";
        break;

      case "concrete":
        a += "concrete<br/>";
        break;

      case "unpaved":
        a += "unpaved<br/>";
        break;

      case "paving_stones":
        a += "paving stones<br/>";
        break;

      case "compacted":
        a += "compacted<br/>";
        break;

      case "dirt":
        a += "dirt<br/>";
        break;

      case "fine_gravel":
        a += "fine gravel<br/>";
        break;

      case "grass_paver":
        a += "grass paver<br/>";
        break;

      case "gravel":
        a += "gravel<br/>";
        break;

      case "earth":
        a += "earth<br/>";
        break;

      case "ground":
        a += "ground<br/>";
        break;

      case "metal":
        a += "metal<br/>";
        break;

      case "mud":
        a += "mud<br/>";
        break;

      case "sand":
        a += "sand<br/>";
        break;

      case "wood":
        a += "wood<br/>";
        break;

      case "tartan":
        a += "tartan<br/>";
        break;

      case "artificial_turf":
        a += "artificial turf<br/>";
        break;

      case "clay":
        a += "clay<br/>";
        break;

      default:
        a += "unknown<br/>";
    }
  }

  "grade1" == b.tracktype && (a += "path surface: Solid. Usually a paved or heavily compacted hardcore surface.<br/>");
  "grade2" == b.tracktype && (a += "path surface: Mostly solid. Usually an unpaved track with surface of gravel mixed with a varying amount of sand, silt, and clay.<br/>");
  "grade3" == b.tracktype && (a += "path surface: Even mixture of hard and soft materials. Almost always an unpaved track.<br/>");
  "grade4" == b.tracktype && (a += "path surface: Mostly soft. Almost always an unpaved track prominently with soil/sand/grass, but with some hard materials, or compressed materials mixed in.<br/>");
  "grade5" == b.tracktype && (a += "path surface: Soft. Almost always an unpaved track lacking hard materials, uncompacted, with surface of soil/sand/grass.<br/>");
  "yes" == b.motorcycle && (a += "<br/>motorcyle allowed.<br/>");
  "no" == b.motorcycle && (a += "<br/>motorcycles prohibited.<br/>");
  "excellent" == b.trail_visibility && (a += "trail visibility: Unambiguous path or markers everywhere<br/>");
  "good" == b.trail_visibility && (a += "trail visibility: Next marker always visible, but sometimes has to be searched for.<br/>");
  "intermediate" == b.trail_visibility && (a += "trail visibility: Track mostly visible<br/>");
  "bad" == b.trail_visibility && (a += "trail visibility: Path sometimes invisible, route partly pathless<br/>");
  "horrible" == b.trail_visibility && (a += "trail visibility: Often pathless<br/>");
  "no" == b.trail_visibility && (a += "trail visibility: Mostly pathless<br/>");
  "hiking" == b.sac_scale && (a += "trail: Trail well cleared. (SAC Scale: T1 (yellow))</br>");
  "mountain_hiking" == b.sac_scale && (a += "trail: Trail with continuous line and balanced ascent (SAC Scale: T2 (red))</br>");
  "demanding_mountain_hiking" == b.sac_scale && (a += "trail: exposed sites may be secured with ropes or chains, possible need to use hands for balance (SAC Scale: T3 (red))</br>");
  "alphine_hiking" == b.sac_scale && (a += "trail: sometimes need for hand use to get ahead (SAC Scale: T4 (blue))</br>");
  "demanding_alphine_hiking" == b.sac_scale && (a += "trail: single plainly climbing up to second grade (SAC Scale: T5 (blue))</br>");
  "difficult_alpine_hiking" == b.sac_scale && (a += "trail: climbing up to second grade (SAC Scale: T6 (blue))</br>");
  b["mtb:name"] && (a += "cycleway :" + b["mtb:name"] + "</br>");
  "0" == b["mtb:scale"] && (a += "Mountainbikeroute: Very easy way - Gravel or packed earth. No particular difficulties. Mostly forest and meadow paths (highway=path). Sections with steps, rocks, or roots are not expected. Wide curves, easy to moderate slope. No special skills are needed to ride this. Easy to ride uphill.</br>Surface: solid and handy</br>Obstacles: no obstacles</br>Gradient: mild to moderate</br>Bends: wide</br>Driving skills: no special driving skills required</br>");
  "1" == b["mtb:scale"] && (a += "Mountainbikeroute: Smaller obstacles like roots and small stones. Erosion damage may increase difficulty. Soil may be loose in places. Tight turns, but no hairpin turns. Riding requires care and attention, but no special skill. Obstacles can be ridden over. Difficult to ride uphill.</br>Surface: loose surface possible, small roots and stones</br>Obstacles: small obstacles, water gutter, erosion damage</br>Gradient: < 40%</br>Bends: wide</br>Driving skills: basic driving skills required, obstacles can be passed over</br>");
  "2" == b["mtb:scale"] && (a += "Mountainbikeroute: Obstacles such as large rocks and stones. Soil is often loose.  Steps are expected. Wider hairpin turns, steepness of up to 70%. Requires some advanced riding skills. Only very skilled riders can go uphill on this.</br>Surface: surface usually not compacted, larger roots and stones.</br>Obstacles: plain steps and stairs</br>Gradient: < 70%</br>Bends: easy hairpins</br>Driving skills: advanced driving skills required</br>");
  "3" == b["mtb:scale"] && (a += "Mountainbikeroute: Many sections with large obstacles such as boulders and large roots. Many hairpin and off-balance turns. Slippery surface and talus sections may be found. The surface may be very slippery. Constant concentration and very good skills needed. Nearly impossible to ride uphill.</br>Surface: many large roots / rocks or slippery ground, loose scree</br>Obstacles: drags, hardly driveable steps</br>Gradient: >70%</br>Bends: bail like hairpins</br>Driving skills: perfect bike control with trial skills required, like moving the rear wheel only in hairpins</br>");
  "4" == b["mtb:scale"] && (a += "Mountainbikeroute: Very steep and difficult, with sections having large boulders and roots. Frequent loose debris. Very steep sections with very tight hairpin turns and high steps that will cause the chainring to hit the ground. Some trials techniques will be necessary. Nearly impossible to ride uphill.</br>Surface: many large roots / rocks or slippery ground, loose scree</br>Obstacles: drags, hardly driveable steps</br>Gradient: >70%</br>Bends: bail like hairpins</br>Driving skills: perfect bike control with trial skills required, like moving the rear wheel only in hairpins</br>");
  "5" == b["mtb:scale"] && (a += "Mountainbikeroute: Very steep and difficult with big boulder fields and debris, and landslides. Speed must be carried for counter-ascents. If at all only short passages are available for accelerating and braking. Fallen trees may make very steep passages even more difficult. Very few Mountainbikers can actually ride at this level. Most will have to push.</br>Surface: counter-ascents / rocks or slippery ground, loose scree / path is rather a Alpine hiking (>T4) path</br>Obstacles: drags, combinations of hardly driveable steps</br>Gradient: >70%</br>Bends: bail like hairpins with obstacles</br>Driving skills: excellent bike control with special trial skills required, moving the front and rear wheel is limited</br>");
  "6" == b["mtb:scale"] && (a += "Mountainbikeroute: Classify ways with 6 that are not rideable at all for a mtbiker. E.g. Chains or stemples (metal rungs) on a via ferrata or simply unsecured alpine pathes that are not even partly rideable for the very best mtbikers (using trial techniques). Steepness is often >45\xB0. If used for single points, then this highlights exceptionally difficult spots. Often spotting is impossible and falling may be lethal.</br>Surface: Path is rather a Alpine hiking (T5 or T6) path or bare rock without visible path.</br>Obstacles: Steps over 2m, rock faces,...</br>Gradient: >100%</br>Bends: no bends can be distinguished as such.</br>Driving skills: only the very best trial specialists or vertriders will try to ride these spots. Walking the place first to find a way to clear is needed.</br>");
  "10" == b.maxspeed && (a += 'traffic-calmed sector: maxspeed 10 Km/h and "right over left"</br>');
  "30" == b.maxspeed && (a += 'traffic-calmed sector: "right over left" and maxspeed 30 Km/h</br>');
  "50" == b.maxspeed && (a += "maxspeed 50 Km/h</br>");
  "70" == b.maxspeed && (a += "maxspeed 50 Km/h</br>");
  "80" == b.maxspeed && (a += "maxspeed 80 Km/h</br>");
  "100" == b.maxspeed && (a += "maxspeed  100 Km/h</br>");
  "no" == b.overtaking && (a += "No overtaking!</br>");
  "yes" == b.noexit && (a += "noexit</br>");
  "yes" == b.oneway && (a += "oneway</br>");
  "designated" == b.priority_road && (a += "priority road designated</br>");
  "end" == b.priority_road && (a += "priority road ends</br>");
  "emergency_bay" == b.highway && (a += "emergency bay</br>");
  "yes" == b.traffic_calming && (a += "traffic calming</br>");
  "bump" == b.traffic_calming && (a += "bump</br>");
  "chicane" == b.traffic_calming && (a += "chicane</br>");
  "choker" == b.traffic_calming && (a += "choker</br>");
  "cushion" == b.traffic_calming && (a += "cushion</br>");
  "hump" == b.traffic_calming && (a += "hump</br>");
  "island" == b.traffic_calming && (a += "island</br>");
  "rumble_strip" == b.traffic_calming && (a += "rumble strip</br>");
  "table" == b.traffic_calming && (a += "table</br>");

  if ("parking" == b.amenity && ("yes" == b.fee && (a += "fee required<br/>"), c = b["capacity:women"], "" != c && "no" != c && null != c)) {
    var d = "unkown";
    "yes" != c && (d = c);
    a += "ladies parking spaces (numbers: " + d + ") <br/>";
  }

  b.park_ride && ("bus" == b.park_ride && (a += "bus connection<br/>"), "tram" == b.park_ride && (a += "tram connection<br/>"), "unknown" == b.park_ride && (a += "park ride unkown<br/>"));
  b["railway:position"] && (a += "railway<br/>position: " + b["railway:position"] + "<br/>");
  b.uic_ref && (a += "UIC: " + b.uic_ref + "<br/>");
  return a;
},
    fnContentSports = function fnContentSports(b) {
  var a = "";
  "9pin" == b.sport && (a += "possible sport : 9pin<br/>");
  "10pin" == b.sport && (a += "possible sport : 10pin<br/>");
  "american_football" == b.sport && (a += "possible sport : american football<br/>");
  "aikido" == b.sport && (a += "possible sport : aikido<br/>");
  "archery" == b.sport && (a += "possible sport : archery<br/>");
  "athletics" == b.sport && (a += "possible sport : athletics<br/>");
  "australian_football" == b.sport && (a += "possible sport : australian football<br/>");
  "base" == b.sport && (a += "possible sport : base<br/>");
  "badminton" == b.sport && (a += "possible sport : badminton<br/>");
  "baseball" == b.sport && (a += "possible sport : baseball<br/>");
  "basketball" == b.sport && (a += "possible sport : basketball<br/>");
  "beachvolleyball" == b.sport && (a += "possible sport : beachvolleyball<br/>");
  "bmx" == b.sport && (a += "possible sport : bmx<br/>");
  "boules" == b.sport && (a += "possible sport : boules<br/>");
  "boule" == b.sport && (a += "possible sport : boule<br/>");
  "bowls" == b.sport && (a += "possible sport : bowls<br/>");
  "boxing" == b.sport && (a += "possible sport : boxing<br/>");
  "canadian_football" == b.sport && (a += "possible sport : canadian football<br/>");
  "canoe" == b.sport && (a += "possible sport : canoe<br/>");
  "chess" == b.sport && (a += "possible sport : chess<br/>");
  "cliff_diving" == b.sport && (a += "possible sport : cliff diving<br/>");
  "climbing" == b.sport && (a += "possible sport : climbing<br/>");
  "climbing_adventure" == b.sport && (a += "possible sport : adventure climbing<br/>");
  "cricket" == b.sport && (a += "possible sport : cricket<br/>");
  "cricket_nets" == b.sport && (a += "possible sport : cricket nets<br/>");
  "croquet" == b.sport && (a += "possible sport : croquet<br/>");
  "curling" == b.sport && (a += "possible sport : curling<br/>");
  "cycling" == b.sport && (a += "possible sport : cycling<br/>");
  if ("darts" == b.sport || "dart" == b.sport) a += "Darts<br/>";
  "dog_racing" == b.sport && (a += "possible sport : dog racing<br/>");
  "fencing" == b.sport && (a += "possible sport : fencing<br/>");
  "equestrian" == b.sport && (a += "possible sport : equestrian<br/>");
  "football" == b.sport && (a += "possible sport: american football<br/>");
  "free_flying" == b.sport && (a += "possible sport: free flying<br/>");
  "gaelic_games" == b.sport && (a += "possible sport: gaelic games<br/>");
  "golf" == b.sport && (a += "possible sport: golf<br/>");
  "gymnastics" == b.sport && (a += "possible sport: gymnastik<br/>");
  "hockey" == b.sport && (a += "possible sport: hockey<br/>");
  "horseshoes" == b.sport && (a += "possible sport: horseshoes<br/>");
  "horse_racing" == b.sport && (a += "possible sport: horse racing<br/>");
  "ice_stock" == b.sport && (a += "possible sport: ice stock<br/>");
  "judo" == b.sport && (a += "possible sport: judo<br/>");
  "karting" == b.sport && (a += "possible sport: karting<br/>");
  "kitesurfing" == b.sport && (a += "possible sport: kitesurfing<br/>");
  "korfball" == b.sport && (a += "possible sport: korfball<br/>");
  "motor" == b.sport && (a += "possible sport: motor<br/>");
  "multi" == b.sport && (a += "possible sport: multi<br/>");
  "obstacle_course" == b.sport && (a += "possible sport: obstacle course<br/>");
  "orienteering" == b.sport && (a += "possible sport: orienteering<br/>");
  "paddle_tennis" == b.sport && (a += "possible sport: paddle-tennis<br/>");
  "paragliding" == b.sport && (a += "possible sport: paragliding<br/>");
  "Pelota" == b.sport && (a += "possible sport: Pelota<br/>");
  "rasquet" == b.sport && (a += "possible sport: racquet<br/>");
  "rowing" == b.sport && (a += "possible sport: rowing<br/>");
  "rugby_league" == b.sport && (a += "possible sport: rugby league<br/>");
  "rugby_union" == b.sport && (a += "possible sport: rugby union<br/>");
  "running" == b.sport && (a += "possible sport: running<br/>");
  "scuba_diving" == b.sport && (a += "possible sport: scuba diving<br/>");
  "shooting" == b.sport && (a += "possible sport: shooting<br/>");
  "skating" == b.sport && (a += "possible sport: skating<br/>");
  "skateboard" == b.sport && (a += "possible sport: skateboard<br/>");
  "skiing" == b.sport && (a += "possible sport: skiing<br/>");
  "soccer" == b.sport && (a += "possible sport: soccer<br/>");
  "surfing" == b.sport && (a += "possible sport: surfing<br/>");
  "swimming" == b.sport && (a += "possible sport: swimming<br/>");
  "table_tennis" == b.sport && (a += "possible sport: table tennis<br/>");
  "taekwondo" == b.sport && (a += "possible sport: taekwondo<br/>");
  "team_handball" == b.sport && (a += "possible sport: team handball<br/>");
  "tennis" == b.sport && (a += "possible sport: tennis<br/>");
  "toboggan" == b.sport && (a += "possible sport: toboggan<br/>");
  "volleyball" == b.sport && (a += "possible sport: volleyball<br/>");
  "water_ski" == b.sport && (a += "possible sport: water ski<br/>");
  "weightlifting" == b.sport && (a += "possible sport: weightlifting<br/>");
  "wrestling" == b.sport && (a += "possible sport: wrestling<br/>");
  return a;
};

exports.fnContentSports = fnContentSports;
exports.fnContentStreetsTraffic = fnContentStreetsTraffic;
exports.fnContentHydrants = fnContentHydrants;
exports.fnContentShipping = fnContentShipping;
exports.fnContentCuisine = fnContentCuisine;
exports.fnContentEmergency = fnContentEmergency;
exports.fnContentInformationCity = fnContentInformationCity;
exports.fnContentStorage = fnContentStorage;
exports.fnContentAmenity = fnContentAmenity;
exports.fnContentTourism = fnContentTourism;
exports.fnContentBarriers = fnContentBarriers;
exports.fnContentHistoric = fnContentHistoric;
exports.fnContentPetrol = fnContentPetrol;
exports.fnContentRoute = fnContentRoute;
exports.fnMessstation = fnMessstation;
exports.fnContentLanduse = fnContentLanduse;
exports.fnContentProtectedArea = fnContentProtectedArea;
exports.fnContentNatural = fnContentNatural;
exports.fnContentAerodrome = fnContentAerodrome;
exports.fnContent = fnContent;

function fnArztInfo(b) {
  var a = "",
      c = "",
      d = b["healthcare:speciality"];
  "" != d && ("general" == d && (c += "general<br/>"), "allergology" == d && (c += "allergology<br/>"), "anaesthetics" == d && (c += "anaesthetics<br/>"), "biochemistry" == d && (c += "biochemistry<br/>"), "biological_haematology" == d && (c += "biological haematology<br/>"), "biology" == d && (c += "biology<br/>"), "cardiology" == d && (c += "cardiology<br/>"), "cardiac_surgery" == d && (c += "cardiac surgery<br/>"), "child_psychiatry" == d && (c += "child psychiatry<br/>"), "dental_oral_maxillo_facial_surgery" == d && (c += "dental-, oral-, maxillo- and facial-surgery<br/>"), "dermatology" == d && (c += "dermatology<br/>"), "dermatovenereology" == d && (c += "dermatovenereology<br/>"), "diagnostic_radiology" == d && (c += "diagnostic radiology<br/>"), "emergency" == d && (c += "emergency<br/>"), "endocrinology" == d && (c += "endocrinology<br/>"), "gastroenterological_surgery" == d && (c += "gastroenterological surgery<br/>"), "gastroenterology" == d && (c += "gastroenterology<br/>"), "geriatrics" == d && (c += "geriatrics<br/>"), "gynaecology" == d && (c += "gynaecology<br/>"), "haematology" == d && (c += "haematology<br/>"), "hepatology" == d && (c += "hepatology<br/>"), "immunology" == d && (c += "immunology<br/>"), "infectious_diseases" == d && (c += "infectious diseases<br/>"), "intensive" == d && (c += "intensive<br/>"), "internal" == d && (c += "internal<br/>"), "maxillofacial_surgery" == d && (c += "maxillofacial surgery<br/>"), "nephrology" == d && (c += "nephrology<br/>"), "neurology" == d && (c += "neurology<br/>"), "neurophysiology" == d && (c += "neurophysiology<br/>"), "neuropsychiatry" == d && (c += "neuropsychiatry<br/>"), "neurosurgery" == d && (c += "neurosurgery<br/>"), "nuclear" == d && (c += "nuclear<br/>"), "occupational" == d && (c += "occupational <br/>"), "oncology" == d && (c += "oncology<br/>"), "ophthalmology" == d && (c += "ophthalmology<br/>"), "orthopaedics" == d && (c += "orthopaedics<br/>"), "otolaryngology" == d && (c += "otolaryngology<br/>"), "paediatric_surgery" == d && (c += "paediatric surgery<br/>"), "paediatrics" == d && (c += "paediatrics<br/>"), "palliative" == d && (c += "palliative<br/>"), "physiatry" == d && (c += "physiatry<br/>"), "plastic_surgery" == d && (c += "plastic surgery<br/>"), "proctology" == d && (c += "proctology<br/>"), "psychiatry" == d && (c += "psychiatry<br/>"), "pulmonology" == d && (c += "pulmonology<br/>"), "radiology" == d && (c += "radiology<br/>"), "radiotherapy" == d && (c += "radiotherapy<br/>"), "rheumatology" == d && (c += "rheumatology<br/>"), "stomatology" == d && (c += "stomatology<br/>"), "surgery" == d && (c += "surgery<br/>"), "surgical_oncology" == d && (c += "surgical oncology<br/>"), "thoracic_surgery" == d && (c += "thoracic surgery<br/>"), "transplant" == d && (c += "transplant<br/>"), "trauma" == d && (c += "trauma<br/>"), "tropical" == d && (c += "tropical<br/>"), "urology" == d && (c += "urology<br/>"), "vascular_surgery" == d && (c += "vascular surgery<br/>"), "venereology" == d && (c += "venereology<br/>"), "acupuncture" == d && (c += "acupuncture<br/>"), "naturopathy" == d && (c += "naturopathy<br/>"), "chiropractic" == d && (c += "chiropractic <br/>"), "homeopathy" == d && (c += "homeopathy<br/>"), "osteopathy" == d && (c += "osteopathy<br/>"));
  "" != b.health_specialty && ("yes" == b["health_specialty:family_medicine"] && (c += "family medicine<br/>"), "yes" == b["health_specialty:emergency_medicine"] && (c += "emergency medicine<br/>"), "yes" == b["health_specialty:anaesthesiology"] && (c += "anaesthesiology<br/>"), "yes" == b["health_specialty:dermatology"] && (c += "dermatology<br/>"), "yes" == b["health_specialty:ear_nose_throat"] && (c += "ear, nose, throat (ENT specialist)<br/>"), "yes" == b["health_specialty:occupational_medicine"] && (c += "occupational medicine<br/>"), "yes" == b["health_specialty:internal_medicine"] && (c += "internal medicine<br/>"), "yes" == b["health_specialty:neurology"] && (c += "neurology<br/>"), "yes" == b["health_specialty:ophthalmology"] && (c += "ophthalmology<br/>"), "yes" == b["health_specialty:palliative_medicine"] && (c += "palliative medicine<br/>"), "yes" == b["health_specialty:psychiatry"] && (c += "psychiatry<br/>"), "yes" == b["health_specialty:gynaecology"] && (c += "gynaecology<br/>"), "yes" == b["health_specialty:urology"] && (c += "urology<br/>"), "yes" == b["health_specialty:pain_medicine"] && (c += "pain medicine<br/>"), "yes" == b["health_specialty:environmental_medicine"] && (c += "environmental medicine<br/>"), "yes" == b["health_specialty:intensive_care_medicin"] && (c += "intensive care medicin<br/>"), "yes" == b["health_specialty:paediatrics"] && (c += "paediatrics<br/>"), "yes" == b["health_specialty:physiatry"] && (c += "physiatry<br/>"), "yes" == b["health_specialty:radiology"] && (c += "radiology<br/>"), "yes" == b["health_specialty:general"] && (c += "general<br/>"), "yes" == b["health_specialty:occupational_therapy"] && (c += "occupational therapy<br/>"), "yes" == b["health_specialty:pulmonology"] && (c += "pulmonology<br/>"), "yes" == b["health_specialty:acupuncture"] && (c += "acupuncture<br/>"), "yes" == b["health_specialty:orthopaedics"] && (c += "orthopaedics<br/>"), "yes" == b["health_specialty:chiropractic"] && (c += "chiropractic<br/>"), "yes" == b["health_specialty:sports_medicine"] && (c += "sports medicine<br/>"));
  "" != c && (a = a + "subjects: " + ('<div class="c4g_open_text">' + c + "</div>"));
  return a;
}

function fnKraftwerkInfo(b) {
  var a = "";

  if (b["generator:method"]) {
    a += "method of generation: ";

    switch (b["generator:method"]) {
      case "combustion":
        a += "combustion";
        break;

      case "thermal":
        a += "thermal";
        break;

      case "pumping":
        a += "pumping";
        break;

      case "photovoltaic":
        a += "photovoltaic";
        break;

      case "gasification":
        a += "gasification";
        break;

      case "anaerobic_digestion":
        a += "anaerobic digestion";
        break;

      case "pyrolysis":
        a += "pyrolysis";
        break;

      case "fission":
        a += "fission";
        break;

      case "fusion":
        a += "fusion";
        break;

      default:
        a += "unknown<br/>";
    }

    a += "<br/>";
  }

  if (b.power_source) {
    a += "power source: ";

    switch (b.power_source) {
      case "photovoltaic":
        a += "photovoltaic";
        break;

      default:
        a += "unknown<br/>";
    }

    a += "<br/>";
  }

  b["generator:output:electricity"] && (a += "electricity generation: " + b["generator:output:electricity"] + "<br/>");
  b["generator:output:heat"] && (a += "heat generation: " + b["generator:output:heat"] + "<br/>");
  b["generator:output:cold"] && (a += "cold generation: " + b["generator:output:cold"] + "<br/>");
  b["generator:output"] && (a += "output: " + b["generator:output"] + "<br/>");
  b["generator:output:hot_air"] && (a += "hot-air generation: " + b["generator:output:hot_air"] + "<br/>");
  b["generator:output:cold_water"] && (a += "cold water generation: " + b["generator:output:cold_water"] + "<br/>");
  b["generator:output:cold_air"] && (a += "cold air generation: " + b["generator:output:cold_air"] + "<br/>");
  b["generator:output:compressed_air"] && (a += "compressed air generation: " + b["generator:output:compressed_air"] + "<br/>");
  b["generator:output:steam"] && (a += "steam generation: " + b["generator:output:steam"] + "<br/>");
  b["generator:output:vacuum"] && (a += "vacuum generation: " + b["generator:output:vacuum"] + "<br/>");
  b["generator:output:battery_charging"] && (a += "battery charging: " + b["generator:output:battery_charging"] + "<br/>");
  "PWR" == b["generator:type"] && (a += "generator type: " + b["generator:type"] + "<br/>");
  "BWR-1" == b["generator:type"] && (a += "generator type: " + b["generator:type"] + "<br/>");
  "BWR-2" == b["generator:type"] && (a += "generator type: " + b["generator:type"] + "<br/>");
  "BWR-3" == b["generator:type"] && (a += "generator type: " + b["generator:type"] + "<br/>");
  "BWR-4" == b["generator:type"] && (a += "generator type: " + b["generator:type"] + "<br/>");
  "BWR-5" == b["generator:type"] && (a += "generator type: " + b["generator:type"] + "<br/>");
  "BWR-6" == b["generator:type"] && (a += "generator type: " + b["generator:type"] + "<br/>");
  "PHWR" == b["generator:type"] && (a += "generator type: " + b["generator:type"] + "<br/>");
  "GCR" == b["generator:type"] && (a += "generator type: " + b["generator:type"] + "<br/>");
  "FBR" == b["generator:type"] && (a += "generator type: " + b["generator:type"] + "<br/>");
  "RBMK-1000" == b["generator:type"] && (a += "generator type: " + b["generator:type"] + "<br/>");
  "RBMK-1500" == b["generator:type"] && (a += "generator type: " + b["generator:type"] + "<br/>");
  "VVER" == b["generator:type"] && (a += "generator type: " + b["generator:type"] + "<br/>");
  "CANDU" == b["generator:type"] && (a += "generator type: " + b["generator:type"] + "<br/>");
  "CPR-1000" == b["generator:type"] && (a += "generator type: " + b["generator:type"] + "<br/>");
  "EPR" == b["generator:type"] && (a += "generator type: " + b["generator:type"] + "<br/>");
  "tokamak" == b["generator:type"] && (a += "generator type: " + b["generator:type"] + "<br/>");
  "stellarator" == b["generator:type"] && (a += "generator type: " + b["generator:type"] + "<br/>");
  "ICF" == b["generator:type"] && (a += "generator type: " + b["generator:type"] + "<br/>");
  "cold-fusion" == b["generator:type"] && (a += "generator type: " + b["generator:type"] + "<br/>");
  "wind_turbine" == b["generator:method"] && "horizontal_axis" == b["generator:type"] && (a += "generator method: horizontal axis wind turbine<br/>");
  "wind_turbine" == b["generator:method"] && "vertical_axis" == b["generator:type"] && (a += "generator method: vertical axis wind turbine<br/>");
  "francis_turbine" == b["generator:type"] && (a += "generator type: francis-turbine<br/>");
  "kaplan_turbine" == b["generator:type"] && (a += "generator type: kaplan-turbine<br/>");
  "pelton_turbine" == b["generator:type"] && (a += "generator type: pelton-turbine<br/>");
  "stream" == b["generator:method"] && "horizontal_axis" == b["generator:type"] && (a += "generator method: horizontal axis sea current power station<br/>");
  "stream" == b["generator:method"] && "vertical_axis" == b["generator:type"] && (a += "generator type: vertical axis sea current power station<br/>");
  "steam_turbine" == b["generator:type"] && (a += "generator type: steam turbine<br/>");
  "heat_pump" == b["generator:type"] && (a += "generator type: heat pump<br/>");
  "solar_thermal_collector" == b["generator:type"] && (a += "generator type: solar thermal collector<br/>");
  "solar_photovoltaic_panel" == b["generator:type"] && (a += "generator type: solar photovoltaic panel<br/>");
  "steam_generator" == b["generator:type"] && (a += "generator type: steam generator<br/>");
  "gas_turbine" == b["generator:type"] && (a += "generator type: gas turbine<br/>");
  "combined_cycle" == b["generator:type"] && (a += "generator type: combined cycle<br/>");
  "reciprocating_engine" == b["generator:type"] && (a += "generator type: reciprocating engine<br/>");
  return a;
}

function fnWertstoffinfo(b) {
  var a = "";
  if ("container" == b.recycling_type || "centre" == b.recycling_type || "recycling" == b.amenity) "yes" == b["recycling:glass"] && (a += "glass container</br>"), "yes" == b["recycling:shoes"] && (a += "shoe container</br>"), "yes" == b["recycling:cooking_oil"] && (a += "recycling of cooking oil</br>"), "yes" == b["recycling:paper"] && (a += "recycling of paper</br>"), "yes" == b["recycling:engine_oil"] && (a += "recycling of engine oil</br>"), "yes" == b["recycling:clothes"] && (a += "recycling of clothes</br>"), "yes" == b["recycling:car_batteries"] && (a += "recycling of car batteries</br>"), "yes" == b["recycling:cans"] && (a += "recycling of cans</br>"), "yes" == b["recycling:scrap_metal"] && (a += "recycling of scrap metal</br>"), "yes" == b["recycling:plastic"] && (a += "recycling of plastic</br>"), "yes" == b["recycling:batterries"] && (a += "recycling of batterries</br>"), "yes" == b["recycling:plastic_bottles"] && (a += "recycling of plastic bottles</br>"), "yes" == b["recycling:green_waste"] && (a += "recycling of green waste</br>"), "yes" == b["recycling:hardcore"] && (a += "recycling of hardcore</br>");
  return a;
}

var fnContentGeneralInformations = function fnContentGeneralInformations(b) {
  var a = "";
  b.width && (a += "width: " + b.width + " m<br/>");
  b.height && (a += "height: " + b.height + " m<br/>");
  b.maxwidth && (a += "maxwidth: " + b.maxwidth + " m<br/>");
  b.maxheight && (a += "maxheight: " + b.maxheight + " m<br/>");
  b.maxweight && (a += "maxweight: " + b.maxweight + " t<br/>");
  b.maxspeed && (a += "maxspeed: " + b.maxspeed + " km/h<br/>");
  b.min_age && (a += "minimum age: " + b.min_age + "<br/>");
  b.max_age && (a += "maximum age: " + b.max_age + "<br/>");
  "yes" == b.nudism && (a += "nudism<br/>");
  "yes" == b.ruins && (a += "ruins<br/>");
  b.ele && (a += "height above sea level: " + b.ele + " m<br/>");
  b["xmas:day_date"] && (a += "period from - till: " + b["xmas:day_date"] + "<br/>");
  b["rotor:diameter"] && (a += "diameter of rotor: " + b["rotor:diameter"] + " m<br/>");
  b["xmas:note"] && (a += "information: " + b["xmas:note"] + "<br/>");
  "port" == b["seamark:beacon_lateral:category"] && (a += "port<br/>");
  "starboard" == b["seamark:beacon_lateral:category"] && (a += "starboard<br/>");
  "yes" == b["service:bicycle:retail"] && (a += "retail bicycles<br/>");
  "yes" == b["service:bicycle:repair"] && (a += "repair bicycles<br/>");
  "yes" == b["service:bicycle:rental"] && (a += "rental bicycles<br/>");
  "yes" == b["service:bicycle:pump"] && (a += "use of a pump is possible<br/>");
  "yes" == b["service:bicycle:diy"] && (a += "diy is possible<br/>");
  "yes" == b["service:bicycle:cleaning"] && (a += "cleaning bicycles<br/>");
  "yes" == b["service:bicycle:second_hand"] && (a += "sale of second hand bicycles<br/>");
  "yes" == b["service:bicycle:charging"] && (a += "charging electric bikes is possible<br/>");
  "yes" == b.cafe && (a += "cafe<br/>");
  "yes" == b.breakfast && (a += "breakfast<br/>");
  "yes" == b.snack && (a += "snack<br/>");
  "yes" == b.indoor_seating && (a += "indoor seating<br/>");
  "yes" == b.outdoor_seating && (a += "outdoor seating<br/>");
  "yes" == b.self_service && (a += "self service<br/>");
  "yes" == b.bakehouse && (a += "bakehouse<br/>");
  "yes" == b.pastry_shop && (a += "pastry shop<br/>");
  "yes" == b.fair_trade && (a += "fair trade<br/>");
  "only" == b.fair_trade && (a += "only fair trade<br/>");
  "no" == b.fair_trade && (a += "no fair trade<br/>");
  return a;
},
    fnContentHealthcare = function fnContentHealthcare(b) {
  var a = "";
  if ("doctors" == b.amenity || "physician" == b.office || "doctor" == b.healthcare) a += fnArztInfo(b), b.medical_area && (a += b.medical_area + "<br/>"), b.type && (a += b.type + "<br/>"), b["doctors:de"] && (a += b["doctors:de"] + "<br/>"), b["note:de"] && (a += b["note:de"] + "<br/>");
  "yes" == b.dispensing && (a += "pharmacy with dispensing<br/>");
  "abused" == b["social_facility:for"] && (a += "social facility for: abused people<br/>");
  "child" == b["social_facility:for"] && (a += "social facility for: children<br/>");
  "disabled" == b["social_facility:for"] && (a += "social facility for: disabled people<br/>");
  "diseased" == b["social_facility:for"] && (a += "social facility for: diseased people<br/>");
  "drug_addicted" == b["social_facility:for"] && (a += "social facility for: drug addicted people<br/>");
  "homeless" == b["social_facility:for"] && (a += "social facility for: homeless<br/>");
  "juvenile" == b["social_facility:for"] && (a += "social facility for: juvenile and teenager<br/>");
  "mental_health" == b["social_facility:for"] && (a += "social facility for: people with mental health problems<br/>");
  "migrant" == b["social_facility:for"] && (a += "social facility for: migrants<br/>");
  "orphan" == b["social_facility:for"] && (a += "social facility for: orphans<br/>");
  "senior" == b["social_facility:for"] && (a += "social facility for: seniors<br/>");
  "underprivileged" == b["social_facility:for"] && (a += "social facility for: underprivileged people<br/>");
  "unemployed" == b["social_facility:for"] && (a += "social facility for: unemployed<br/>");
  "victim" == b["social_facility:for"] && (a += "social facility for: victims<br/>");
  return a;
};

function fnAdditionalBuildingInfos(b) {
  var a = "";
  b["building:color"] && (a += "building color: " + b["building:color"] + "</br>");
  b["building:height"] && (a += "building height: " + b["building:height"] + " m</br>");
  b["building:level"] && (a += "level: " + b["building:level"] + "</br>");
  b["building:part"] && (a += "building part: " + b["building:part"] + "</br>");
  b["roof:color"] && (a += "roof color: " + b["roof:colour"] + "</br>");
  b["roof:shape"] && (a += "roof shape: " + b["roof:shape"] + "</br>");
  b["roof:height"] && (a += "roof height: " + b["roof:height"] + " m</br>");
  b["roof:material"] && (a += "roof material: " + b["roof:material"] + " </br>");
  b["roof:orientation"] && (a += "roof orientation: " + b["roof:orientation"] + " </br>");
  b["roof:direction"] && (a += "roof direction: " + b["roof:direction"] + " </br>");
  b["building:type"] && (a += "building type: " + b["building:type"] + "</br>");
  return a;
}

function fnSicherheitAdditional(b) {
  var a = "";
  "surveillance" == b.man_made && ("indoor" == b.surveillance && (a += "indoor surveillance"), "outdoor" == b.surveillance && (a += "outdoor surveillance"), "public" == b.surveillance && (a += "public surveillance"), "camera" == b["surveillance:type"] && (a += "type of surveillance: camera"), "guard" == b["surveillance:type"] && (a += "type of surveillance: guard"), "ALPR" == b["surveillance:type"] && (a += "type of surveillance: ALPR"), "town" == b["surveillance:zone"] && (a += "zone of surveillance: town"), "parking" == b["surveillance:zone"] && (a += "zone of surveillance: parking"), "traffic" == b["surveillance:zone"] && (a += "zone of surveillance: traffic"), "shop" == b["surveillance:zone"] && (a += "zone of surveillance: shop"), "bank" == b["surveillance:zone"] && (a += "zone of surveillance: bank"), "building" == b["surveillance:zone"] && (a += "zone of surveillance: building"));
  return a;
}

function fnWreckInfo(b) {
  var a = "";
  "wreck" == b.historic && (b["wreck:date_sunk"] && (a += "sunk: " + b["wreck:date_sunk"] + "<br/>"), b["wreck:depth"] && (a += "depth: " + b["wreck:depth"] + "<br/>"), b["wreck:clearance"] && (a += "clearance: " + b["wreck:clearance"] + "<br/>"), b["wreck:date_commissioned"] && (a += "commissioned: " + b["wreck:date_commissioned"] + "<br/>"), b["wreck:gross_tonnage"] && (a += "gross tonnage: " + b["wreck:gross_tonnage"] + "<br/>"), b["wreck:length"] && (a += "length: " + b["wreck:length"] + "<br/>"), b["wreck:width"] && (a += "width: " + b["wreck:width"] + "<br/>"), b["wreck:cargo"] && (a = "timber" == b["wreck:cargo"] ? a + "cargo: timber<br/>" : "coal" == b["wreck:cargo"] ? a + "cargo: coal<br/>" : a + ("cargo: " + b["wreck:cargo"] + "<br/>")), "yes" == b["wreck:visible_at_low_tide"] && (a += "visible at low tide: yes<br/>"), "no" == b["wreck:visible_at_low_tide"] && (a += "visible at low tide: no<br/>"), "yes" == b["wreck:visible_at_high_tide"] && (a += "visible at high tide: yes<br/>"), "no" == b["wreck:visible_at_high_tide"] && (a += "visible at high tide: no<br/>"), "yes" == b.access && (a += "accessible<br/>"), "no" == b.access && (a += "no access possible<br/>"), "permit_required" == b.access && (a += "permit required for acces<br/>"));
  return a;
}

function fnKlosterAdditional(b) {
  var a = "";
  if (b["monastery:type"]) switch (b["monastery:type"]) {
    case "monastery":
      a += "type: monastery<br/>";
      break;

    case "convent":
      a += "type: convent<br/>";
      break;

    case "canonry":
      a += "type: canonry<br/>";
      break;

    case "commandry":
      a += "type: commandry<br/>";
      break;

    case "hermitage":
      a += "type: hermitage<br/>";
      break;

    default:
      a += "type: unknown<br/>";
  }
  b["community:gender"] && ("male" == b["community:gender"] && (a += "gender: male<br/>"), "female" == b["community:gender"] && (a += "gender: female<br/>"));
  b.religious_rank && ("abbey" == b.religious_rank ? a += "religious rank: abbey<br/>" : "abbey" == b.religious_rank && (a += "religious rank: abbey<br/>"));
  "yes" == b.shrine && (a += "feature: shrine<br/>");
  "yes" == b.sanctuary && (a += "feature: sanctuary<br/>");
  if (b.religion) switch (b.religion) {
    case "animist":
      a += "religion: animist<br/><br/>";
      break;

    case "bahai":
      a += "religion: bahai<br/>";
      break;

    case "buddhist":
      a += "religion: buddhist<br/>";
      break;

    case "christian":
      a += "religion: christian<br/>";
      break;

    case "hindu":
      a += "religion: hindu<br/>";
      break;

    case "IglesiaNiCristo":
      a += "religion: IglesiaNiCristo<br/>";
      break;

    case "jain":
      a += "religion: jain<br/>";
      break;

    case "jewish":
      a += "religion: jewish<br/>";
      break;

    case "multifaith":
      a += "religion: multifaith<br/>";
      break;

    case "muslim":
      a += "religion: muslim<br/>";
      type += "Mosque<br/>";
      break;

    case "pagan":
      a += "religion: pagan<br/>";
      break;

    case "pastafarian":
      a += "religion: pastafarian<br/>";
      break;

    case "scientologist":
      a += "religion: scientologist<br/>";
      break;

    case "shinto":
      a += "religion: shinto<br/>";
      break;

    case "sikh":
      a += "religion: sikh<br/>";
      break;

    case "spiritualist":
      a += "religion: spiritualist<br/>";
      break;

    case "taoist":
      a += "religion: taoist<br/>";
      break;

    case "unitarian":
      a += "religion: unitarian<br/>";
      break;

    case "yazidi":
      a += "religion: yazidi<br/>";
      break;

    case "zoroastrian":
      a += "eligion: zoroastrian<br/>";
      break;

    default:
      a += "religion: unknown<br/>";
  }
  if (b.denomination) switch (b.denomination) {
    case "anglican":
      a += "denomination: Anglican<br/><br/>";
      break;

    case "baptist":
      a += "denomination: Baptist<br/>";
      break;

    case "catholic":
      a += "denomination: Catholic<br/>";
      break;

    case "roman_catholic":
      a += "denomination: Roman Catholic<br/>";
      break;

    case "old_catholic":
      a += "denomination: Old Catholic<br/>";
      break;

    case "greek_catholic":
      a += "denomination: Greek Catholic<br/>";
      break;

    case "evangelical":
      a += "denomination: Evangelical";

    case "jehovahs_witness":
      a += "denomination: Jehovahs Witness<br/>";
      break;

    case "lutheran":
      a += "denomination: Lutheran<br/>";
      break;

    case "mennonite":
      a += "denomination: Mennonite<br/>";
      break;

    case "messianic_jewish":
      a += "denomination: Messianic Jewish<br/>";
      break;

    case "methodist":
      a += "denomination: Methodist<br/>";
      break;

    case "mormon":
      a += "denomination: Mormon<br/>";
      break;

    case "new_apostolic":
      a += "denomination: New Apostolic<br/>";
      break;

    case "orthodox":
      a += "denomination: Orthodox<br/>";
      break;

    case "greek_orthodox":
      a += "denomination: Greek Orthodox<br/>";
      break;

    case "coptic_orthodox":
      a += "denomination: coptic orthodox<br/>";
      break;

    case "pentecostal":
      a += "denomination: pentecostal<br/>";
      break;

    case "presbyterian":
      a += "denomination: Presbyterian<br/>";
      break;

    case "protestant":
      a += "denomination: Protestant<br/>";
      break;

    case "quaker":
      a += "denomination: Quaker<br/>";
      break;

    case "reformed":
      a += "denomination: Reformed<br/>";
      break;

    case "russian_orthodox":
      a += "denomination: Russian-Orthodox<br/>";
      break;

    case "seventh_day_adventist":
      a += "denomination: Seventh Day Adventist<br/>";
      break;

    case "christian_community":
      a += "denomination: Christian Community<br/>";
      break;

    case "adventist":
      a += "denomination: Adventist<br/>";
      break;

    case "alliance":
      a += "denomination: Alliance<br/>";
      break;

    case "assemblies_of_god":
      a += "denomination: Assemblies of God<br/>";
      break;

    case "apostolic":
      a += "denomination: Apostolic<br/>";
      break;

    case "armenian_apostolic":
      a += "denomination: Armenian Apostolic<br/>";
      break;

    case "assyrian":
      a += "denomination: Assyrian<br/>";
      break;

    case "christ_scientist":
      a += "denomination: Christ Scientist<br/>";
      break;

    case "church_of_scotland":
      a += "denomination: Church of Scotland<br/>";
      break;

    case "czechoslovak_hussite":
      a += "denomination: Czechoslovak Hussite<br/>";
      break;

    case "dutch_reformed":
      a += "denomination: Dutch Reformed<br/>";
      break;

    case "exclusive_brethren":
      a += "denomination: Exclusive Brethren<br/>";
      break;

    case "foursquare":
      a += "denomination: Foursquare<br/>";
      break;

    case "kimbanguist":
      a += "denomination: Kimbanguist<br/>";
      break;

    case "living_waters_church":
      a += "denomination: Living Waters Church<br/>";
      break;

    case "mariavite":
      a += "denomination: Mariavite<br/>";
      break;

    case "maronite":
      a += "denomination: Maronite<br/>";
      break;

    case "moravian":
      a += "denomination: Moravian<br/>";
      break;

    case "nazarene":
      a += "denomination: Nazarene<br/>";
      break;

    case "nondenominational":
      a += "denomination: Nondenominational<br/>";
      break;

    case "old_believers":
      a += "denomination: Old Believers<br/>";
      break;

    case "polish_catholic":
      a += "denomination: Polish-Catholic<br/>";
      break;

    case "salvation_army":
      a += "denomination: Salvation Army<br/>";
      break;

    case "santo_daime":
      a += "denomination: Santo Daime<br/>";
      break;

    case "serbian_orthodox":
      a += "denomination: Serbisch-Orthodox<br/>";
      break;

    case "spiritism":
      a += "denomination: Spiritism<br/>";
      break;

    case "united":
      a += "denomination: United<br/>";
      break;

    case "united_church_of_christ":
      a += "denomination: United Church of Christ<br/>";
      break;

    case "united_free_church_of_scotland":
      a += "denomination: United Free Church of Scotland<br/>";
      break;

    case "united_methodist":
      a += "denomination: United Methodist<br/>";
      break;

    case "united_reformed":
      a += "denomination: United Reformed<br/>";
      break;

    case "uniting":
      a += "denomination: Uniting<br/>";
      break;

    case "church_of_sweden":
      a += "denomination: Church of Sweden<br/>";
      break;

    case "mission_covenant_church_of_sweden":
      a += "denomination: Mission Covenant Church Of Sweden<br/>";
      break;

    case "alternative":
      a += "denomination: alternative<br/>";
      break;

    case "ashkenazi":
      a += "denomination: ashkenazi<br/>";
      break;

    case "buchari":
      a += "denomination: buchari<br/>";
      break;

    case "conservative":
      a += "denomination: conservative<br/>";
      break;

    case "egalitarian":
      a += "denomination: egalitarian<br/>";
      break;

    case "hasidic":
      a += "denomination: hasidic<br/>";
      break;

    case "humanistic":
      a += "denomination: humanistic<br/>";
      break;

    case "kabbalah":
      a += "denomination: kabbalah<br/>";
      break;

    case "kabbalistic":
      a += "denomination: kabbalistic<br/>";
      break;

    case "karaite":
      a += "denomination: karaite<br/>";
      break;

    case "liberal":
      a += "denomination: liberal<br/>";
      break;

    case "lubavitch":
      a += "denomination: lubavitch<br/>";
      break;

    case "lubavitch_messianic":
      a += "denomination: lubavitch messianic<br/>";
      break;

    case "mizrachi_baghdadi":
      a += "denomination: mizrachi baghdadi<br/>";
      break;

    case "mizrachi_chida":
      a += "denomination: mizrachi chida<br/>";
      break;

    case "mizrachi_jerusalemite":
      a += "denomination: mizrachi jerusalemite<br/>";
      break;

    case "mizrachi_livorno":
      a += "denomination: mizrachi livorno<br/>";
      break;

    case "mizrachi_moroccan":
      a += "denomination: mizrachi moroccan<br/>";
      break;

    case "modern_orthodox":
      a += "denomination: modern orthodox<br/>";
      break;

    case "neo_orthodox":
      a += "denomination: neo orthodox<br/>";
      break;

    case "nondenominational":
      a += "denomination: nondenominational<br/>";
      break;

    case "orthodox":
      a += "denomination: orthodox<br/>";
      break;

    case "orthodox_ashkenaz":
      a += "denomination: orthodox ashkenaz<br/>";
      break;

    case "orthodox_sefard":
      a += "denomination: orthodox sefard<br/>";
      break;

    case "progressive":
      a += "denomination: progressive<br/>";
      break;

    case "reconstructionist":
      a += "denomination: reconstructionist<br/>";
      break;

    case "reform":
      a += "denomination: reform<br/>";
      break;

    case "renewal":
      a += "denomination: renewal<br/>";
      break;

    case "samaritan":
      a += "denomination: samaritan<br/>";
      break;

    case "sefardi":
      a += "denomination: sefardi<br/>";
      break;

    case "sefardi_amsterdam":
      a += "denomination: sefardi amsterdam<br/>";
      break;

    case "sefardi_london":
      a += "denomination: sefardi london<br/>";
      break;

    case "traditional":
      a += "denomination: traditional<br/>";
      break;

    case "ultra_orthodox":
      a += "denomination: ultra orthodox<br/>";
      break;

    case "unaffiliated":
      a += "denomination: unaffiliated<br/>";
      break;

    case "yemenite":
      a += "denomination: yemenite<br/>";
      break;

    case "yemenite_baladi":
      a += "denomination: yemenite baladi<br/>";
      break;

    case "yemenite_shami":
      a += "denomination: yemenite shami<br/>";
      break;

    case "ahmadiya":
      a += "denomination: ahmadiya<br/>";
      break;

    case "alaouite":
      a += "denomination: alaouite<br/>";
      break;

    case "druze":
      a += "denomination: druze<br/>";
      break;

    case "ibadi":
      a += "denomination: ibadi<br/>";
      break;

    case "ismaili":
      a += "denomination: ismaili<br/>";
      break;

    case "shia":
      a += "denomination: shia<br/>";
      break;

    case "sunni":
      a += "denomination: sunni<br/>";
      break;

    case "nichiren":
      a += "denomination: nichiren<br/>";
      break;

    case "jodo_shinshu":
      a += "denomination: jodo shinshu<br/>";
      break;

    case "jodo_shu":
      a += "denomination: jodo shu<br/>";
      break;

    case "vajrayana":
      a += "denomination: vajrayana<br/>";
      break;

    case "shingon_shu":
      a += "denomination: shingon shu<br/>";
      break;

    case "zen":
      a += "denomination: zen<br/>";
      break;

    case "thai_mahanikaya":
      a += "denomination: thai mahanikaya<br/>";
      break;

    case "thai_thammayut":
      a += "denomination: thai thammayut<br/>";
      break;

    case "asatru":
      a += "denomination: asatru<br/>";
      break;

    case "celtic":
      a += "denomination: celtic<br/>";
      break;

    case "greco_roman":
      a += "denomination: greco roman<br/>";
      break;

    case "wicca":
      a += "denomination: wicca<br/>";
      break;

    case "irani":
      a += "denomination: irani<br/>";
      break;

    case "parsi":
      a += "denomination: parsi<br/>";
      break;

    default:
      a += "unknown<br/>";
  }
  if (b.community) switch (b.community) {
    case "AA":
      a += "community (AA): Augustinians of the Assumption <br/>";
      break;

    case "BSCM":
      a += "community (BSCM): Adorers of the Sacred Heart of Jesus of Montmartre <br/>";
      break;

    case "CBMV":
      a += "community (CBMV): Augustiner-Chorfrauen B.M.V.<br/>";
      break;

    case "CO":
      a += "community (CO): Oratorians<br/>";
      break;

    case "CMC":
      a += "community (CMC): Congregation of the Mother Co-Redemptrix<br/>";
      break;

    case "CRSP":
      a += "community (CRSP): Kongregation der Regularkleriker vom hl. Paulus (Barnabiten)<br/>";
      break;

    case "CSJ":
      a += "community (CSJ): Carmel Saint-Joseph<br/>";
      break;

    case "CSSP":
      a += "community (CSSP): Congr\xE9gation du Saint-Esprit<br/>";
      break;

    case "CSSR":
      a += "community (CSSR): Congr\xE9gation du Tr\xE8s Saint R\xE9dempteur<br/>";
      break;

    case "FCJM":
      a += "community (FCJM): Franciscan Sisters, Daughters of the Sacred Heart of Jesus and Mary<br/>";
      break;

    case "FMGB":
      a += "community (FMGB): Suore Francescane Missionarie di Ges\xF9 Bambino<br/>";
      break;

    case "FMH":
      a += "community(FMH): Congregatio Filiarum Mariae Sanctissimae ab Horto<br/>";
      break;

    case "FMM":
      a += "community (FMM): Franciscaines missionnaires de Marie<br/>";
      break;

    case "FSC":
      a += "community (FSC): Fr\xE8res des \xC9coles chr\xE9tiennes<br/>";
      break;

    case "MCCI":
      a += "community (MCCI): Missionnaires comboniens du Sacr\xE9-C\u0153ur<br/>";
      break;

    case "MSFS":
      a += "community (MSFS): Missionnaires de Saint Fran\xE7ois de Sales<br/>";
      break;

    case "OCart":
      a += "community (OCart): Order of the Carthusians<br/>";
      break;

    case "OCC":
      a += "community (OCC): Ordre de Notre Dame du Mont-Carmel<br/>";
      break;

    case "OCD":
      a += "community (OCD): Ordre des Carmes d\xE9chaux<br/>";
      break;

    case "OCSO":
      a += "community (OCSO): Trappists (lat. Ordo Cisterciensis Strictioris Observantiae)<br/>";
      break;

    case "OFM":
      a += "community (OFM): Ordre des Fr\xE8res Mineurs (Franziskaner)<br/>";
      break;

    case "OFMCap":
      a += "community (OFMCap): Ordre des Fr\xE8res Mineurs Capucins<br/>";
      break;

    case "OFMConv":
      a += "community (OFMConv): Ordre des Fr\xE8res Mineurs Conventuels<br/>";
      break;

    case "OFS":
      a += "community (OFS): Franciscans secular Third Order<br/>";
      break;

    case "OMI":
      a += "community (OMI): Oblats de Marie<br/>";
      break;

    case "OP":
      a += "community (OP): Ordre des Fr\xE8res Pr\xEAcheurs<br/>";
      break;

    case "OPraem":
      a += "community (OPraem): Ordre des chanoines r\xE9guliers de Pr\xE9montr\xE9<br/>";
      break;

    case "OSB":
      a += "community (OSB): Order of Saint Benedict<br/>";
      break;

    case "OSC":
      a += "community (OSC): Ordre de Sainte-Claire ou Ordre des Pauvres Dames<br/>";
      break;

    case "OSSS":
      a += "community (OSSS): Ordre de Sainte-Brigitte<br/>";
      break;

    case "OVM":
      a += "community (OVM): Order of the Visitation of Holy Mary (Salesianerinnen)<br/>";
      break;

    case "PSDP":
      a += "community (PSDP): Petites s\u0153urs des pauvres (Kleinen Schwestern der Armen)<br/>";
      break;

    case "PFJ":
      a += "community (PFJ): Petits Fr\xE8res de J\xE9sus<br/>";
      break;

    case "SDB":
      a += "community (SDB): Soci\xE9t\xE9 de Saint Fran\xE7ois de Sales<br/>";
      break;

    case "SJ":
      a += "community (SJ): Compagnie de J\xE9sus<br/>";
      break;

    case "SOC":
      a += "community (SOC): Order of Cistercians<br/>";
      break;

    case "SSCC":
      a += "community (SSCC): Congregation of the Sacred Hearts of Jesus and Mary<br/>";
      break;

    case "SSF":
      a += "community (SSF): Society of St Francis<br/>";
      break;

    case "SSJE":
      a += "community (SSJE): Society of St John the Evangelist<br/>";
      break;

    case "SSpS":
      a += "community (SSpS): Steyler Missionsschwestern<br/>";
      break;

    case "TOR":
      a += "community (TOR): Terzo Ordine Regolare di San Francesco<br/>";
      break;

    default:
      a += "unknown<br/>";
  }
  return a;
}

var fnTestInfoPopup = function fnTestInfoPopup(b) {
  b = b.getProperties();
  var a = "",
      c;

  for (c in b) {
    a = a + c + "=" + b[c] + "<br/>";
  }

  return '<div class="c4g_popup_text" style="width:300px;">' + a + "</div>";
};

/***/ }),

/***/ "./Resources/public/js/c4g-maps-proxy.js":
/*!***********************************************!*\
  !*** ./Resources/public/js/c4g-maps-proxy.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.MapProxy = void 0;

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _c4gBaselayerController = __webpack_require__(/*! ./c4g-baselayer-controller */ "./Resources/public/js/c4g-baselayer-controller.js");

var _c4gLayerController = __webpack_require__(/*! ./c4g-layer-controller */ "./Resources/public/js/c4g-layer-controller.js");

var _c4gLocationstyleController = __webpack_require__(/*! ./c4g-locationstyle-controller */ "./Resources/public/js/c4g-locationstyle-controller.js");

var _c4gPopupController = __webpack_require__(/*! ./c4g-popup-controller */ "./Resources/public/js/c4g-popup-controller.js");

var _c4gMapsUtils = __webpack_require__(/*! ./c4g-maps-utils */ "./Resources/public/js/c4g-maps-utils.js");

var _c4gMapsConstant = __webpack_require__(/*! ./c4g-maps-constant */ "./Resources/public/js/c4g-maps-constant.js");

var _c4gMapsI18n = __webpack_require__(/*! ./c4g-maps-i18n */ "./Resources/public/js/c4g-maps-i18n.js");

var _layer = __webpack_require__(/*! ol/layer */ "./node_modules/ol/layer.js");

var _geom = __webpack_require__(/*! ol/geom */ "./node_modules/ol/geom.js");

var _proj = __webpack_require__(/*! ol/proj */ "./node_modules/ol/proj.js");

var _style = __webpack_require__(/*! ol/style */ "./node_modules/ol/style.js");

var _ol = __webpack_require__(/*! ol */ "./node_modules/ol/index.js");

var _source = __webpack_require__(/*! ol/source */ "./node_modules/ol/source.js");

var langConstants = {};

var MapProxy = /*#__PURE__*/function () {
  function MapProxy(options) {
    (0, _classCallCheck2["default"])(this, MapProxy);
    var mapData;
    this.options = jQuery.extend({
      mapController: false
    }, options);

    if (!this.options.mapController) {
      return false;
    } // c4g.maps.editorStyles = c4g.maps.editorStyles || {};
    //window.c4gMapsHooks.proxy_fillPopup = [];


    this.hook_baselayer_loaded = [];
    this.hook_baselayer_visibility = [];
    this.hook_layer_loaded = [];
    this.hook_layer_visibility = [];
    this.hook_map_click = [];
    this.hook_map_zoom = [];
    this.hook_locstyles_loaded = []; // add global hook for accessibility when there is no proxy reference

    window.c4gMapsHooks = window.c4gMapsHooks || {};
    window.c4gMapsHooks.proxy_layer_loaded = window.c4gMapsHooks.proxy_layer_loaded || [];
    window.c4gMapsHooks.proxy_layer_drawn = window.c4gMapsHooks.proxy_layer_drawn || [];
    window.c4gMapsHooks.proxy_baselayer_loaded = window.c4gMapsHooks.proxy_baselayer_loaded || [];
    this.baselayerIds = [];
    this.activeBaselayerId = undefined;
    this.layerIds = [];
    this.activeLayerIds = {};
    this.requestFunctions = {};
    this.request = {};
    this.baselayers_loaded = false;
    this.layers_loaded = false;
    mapData = this.options.mapController.data;
    langConstants = (0, _c4gMapsI18n.getLanguage)(mapData);
    this.mapData = mapData;
    this.mapId = mapData.id;
    this.api_baselayer_url = this.options.mapController.data.api.baselayer + '/' + mapData.profile + '/' + this.mapData.lang;
    this.api_layer_url = this.options.mapController.data.api.layer + '/' + this.mapId + '/' + this.mapData.lang;
    this.api_layercontent_url = this.options.mapController.data.api.layercontent; //this.api_layercontentdata_url = this.options.mapController.data.api.layercontentdata;

    this.api_layercontentdata_url = "con4gis/layerContentDataService";
    this.api_locstyle_url = this.options.mapController.data.api.locstyle;
    this.api_infowindow_url = this.options.mapController.data.api.infowindow;
    this.options = options;
    this.clickObserverActive = true; // this.initialize();
  }

  (0, _createClass2["default"])(MapProxy, [{
    key: "initialize",
    value: function initialize() {
      var self, map;
      self = this;
      map = this.options.mapController.map;
      this.baselayerController = new _c4gBaselayerController.C4gBaselayerController(this);
      this.baselayerController.loadBaseLayers();
      this.layerController = new _c4gLayerController.BetterLayerController(this);
      this.layerController.loadLayers();
      this.locationStyleController = new _c4gLocationstyleController.C4gLocationStyleController(this);
      this.popupController = new _c4gPopupController.C4gPopupController(this);
      this.popupController.addPopUp(); //TODO check this, nearly the same as below

      map.on('change:view', function () {
        // zoom-observer
        //
        map.getView().on('change:resolution', function () {
          var layerId, layer; // check layer zoom-bounds
          // @TODO: Use "self.activeLayerIds = false" ?

          for (layerId in self.activeLayerIds) {
            if (self.activeLayerIds.hasOwnProperty(layerId)) {
              layer = self.layerController.arrLayers[layerId]; // if (self.checkLayerIsActiveForZoom(layerId)) {
              //   if (layer.isInactive) {
              //     self.layerController.showLayer(layerId);
              //   }
              // } else {
              //   self.layerController.hideLayer(layerId, true);
              // }
            }
          } // hooks


          _c4gMapsUtils.utils.callHookFunctions(self.hook_map_zoom, self);

          if (self.options.mapController.data.caching && map.getView().getZoom()) {
            _c4gMapsUtils.utils.storeValue('zoom', map.getView().getZoom());
          }
        }); // end of "zoom-observer"
      }); // end of "zoom-observer"
      // zoom-observer
      //

      map.getView().on('change:resolution', function () {
        var layerId, layer; // check layer zoom-bounds
        // @TODO: Use "self.activeLayerIds = false" ?

        for (layerId in self.activeLayerIds) {
          if (self.activeLayerIds.hasOwnProperty(layerId)) {
            layer = self.layerController.arrLayers[layerId]; // if (self.checkLayerIsActiveForZoom(layerId)) {
            //   if (layer.isInactive) {
            //     self.layerController.showLayer(layerId);
            //   }
            // } else {
            //   self.layerController.hideLayer(layerId, true);
            // }
          }
        } // hooks


        _c4gMapsUtils.utils.callHookFunctions(window.c4gMapsHooks.hook_map_zoom, self);

        if (self.options.mapController.data.caching && map.getView().getZoom()) {
          _c4gMapsUtils.utils.storeValue('zoom', map.getView().getZoom());
        }
      }); // end of "zoom-observer"

      map.getView().on('change:center', function (evt) {
        if (self.options.mapController.data.caching) {
          var coordinate = (0, _proj.toLonLat)(map.getView().getCenter());

          if (coordinate) {
            _c4gMapsUtils.utils.storeValue('lon', coordinate[0]);

            _c4gMapsUtils.utils.storeValue('lat', coordinate[1]);
          }
        }

        window.c4gMapsHooks.map_center_changed = window.c4gMapsHooks.map_center_changed || [];

        _c4gMapsUtils.utils.callHookFunctions(window.c4gMapsHooks.map_center_changed, map.getView().getCenter());
      }); // end of "center-observer"
      // click-observer
      //

      map.on('click', function (clickEvent) {
        var feature, fFeatures, layer, popupInfos, currentZoom, minZoom, newCenter, geometry, coord, setPopup, styleFunc, styleCluster, objPopup;

        if (!self.clickObserverActive) {
          return false;
        }

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
                  if (fFeatures[i].get && fFeatures[i].get('popup') && fFeatures[i].get('popup').content) {
                    setPopup.content = setPopup.content.concat(fFeatures[i].get('popup').content);
                  }
                }

                feature = fFeatures[0].clone();
                feature.set('popup', setPopup);
              } else {
                map.getView().setZoom(currentZoom + 1);
              }
            } else {
              layer.getSource().removeFeature(feature);
              currentZoom = map.getView().getZoom();
              newCenter = map.getCoordinateFromPixel(clickEvent.pixel);
              minZoom = self.options.mapController.data.cluster_zoom ? self.options.mapController.data.cluster_zoom : fFeatures['0'].get('cluster_zoom');

              if (currentZoom >= minZoom) {
                var f = [];
                var cf = []; //open the cluster after zooming

                var pix = map.getView().getResolution();
                var max = fFeatures.length;
                var clustDistance = self.options.mapController.data.cluster_dist_spider ? self.options.mapController.data.cluster_dist_spider : 20;
                var arrLinestring = [];
                var r = pix * clustDistance * (0.5 + max / 4);

                for (var i = 0; i < max; i++) {
                  var a = 2 * Math.PI * i / max;
                  if (max == 2 || max == 4) a += Math.PI / 4;
                  var p = [newCenter[0] + r * Math.sin(a), newCenter[1] + r * Math.cos(a)];
                  var coordinate = (0, _proj.toLonLat)(p);
                  var featureLinestring = new _ol.Feature(new _geom.LineString([newCenter, p]));
                  arrLinestring.push(featureLinestring);
                  f.push(fFeatures[i].getGeometry());
                  fFeatures[i].setGeometry(new _geom.Point(p));
                }

                layer.getSource().addFeatures(fFeatures);
                var stringSource = new _source.Vector({
                  features: arrLinestring
                });
                var stringStyle = new _style.Style({
                  stroke: new _style.Stroke({
                    width: 0.3,
                    color: "#000070"
                  })
                });
                var stringLayer = new _layer.Vector({
                  source: stringSource,
                  style: stringStyle
                });
                map.getView().on('change:resolution', function (evt) {
                  for (var id in f) {
                    if (f.hasOwnProperty(id) && fFeatures.hasOwnProperty(id)) {
                      fFeatures[id].setGeometry(f[id]);
                    }
                  }

                  cf = [];
                  f = [];
                  map.removeLayer(stringLayer);
                });
                map.addLayer(stringLayer);
              } else {
                currentZoom += 1;
                map.getView().setCenter(newCenter);
                map.getView().setZoom(currentZoom);
              }
            }
          }
        } else if (fFeatures && fFeatures.length === 1) {
          feature = fFeatures[0];
        }

        if (self.options.mapController.mapsControls.controls.editor && self.options.mapController.mapsControls.controls.editor.isOpen()) {
          // do not show popup when editor is open
          if (feature && feature.get('projectId')) {
            // but call click hooks
            var result = _c4gMapsUtils.utils.callHookFunctions(self.hook_map_click, clickEvent);

            return false;
          }
        }

        popupInfos = {};

        if (feature && feature.get('popup')) {
          // single POI
          popupInfos = feature.get('popup');

          if (popupInfos && popupInfos.content === "${FNfnStandardInfoPopup}") {
            var popupContent = "${FNfnStandardInfoPopup}";
            popupContent = _c4gMapsUtils.utils.replaceFunctionPlaceholders(popupContent, feature, layer, self.options.mapController.data.lang, self);
            popupInfos = popupInfos || {};
            popupInfos.content = popupContent;
            popupInfos.async = false;
          }
        } else if (layer && layer.popup) {
          popupInfos = layer.popup;
        } else {
          feature = false;
        }

        if (feature && feature.get('loc_linkurl')) {
          var link = feature.get('loc_linkurl');

          while (link.lastIndexOf("[") != -1) {
            var subStr = link.substring(link.lastIndexOf('[') + 1, link.lastIndexOf(']'));
            var featureElement = "";

            if (feature.get(subStr)) {
              featureElement = feature.get(subStr).toLowerCase();
              featureElement.replace(" ", "-");
              featureElement = encodeURIComponent(featureElement);
            }

            link = link.substring(0, link.lastIndexOf('[')) + featureElement + link.substring(link.lastIndexOf(']') + 1);
          }

          if (self.options.mapController.data.link_newwindow === '1') {
            window.open(link);
          } else {
            window.open(link, "_self");
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

            if (geometry.getType() === 'Point') {
              coord = geometry.getCoordinates();
            } else {
              coord = clickEvent.coordinate;
            }

            if (self.mapData.popupHandling !== '2') {
              window.c4gMapsPopup.popup.setPosition(coord);
            } else {
              window.c4gMapsPopup.popup.setPosition(self.options.mapController.map.getView().getCenter());
            }

            self.popupController.addPopUp(popupInfos.content);

            if (popupInfos.content) {
              if (self.mapData.popupHandling !== '3') {
                window.c4gMapsPopup.$content ? window.c4gMapsPopup.$content.html('') : false;
                window.c4gMapsPopup.$popup ? window.c4gMapsPopup.$popup.addClass(_c4gMapsConstant.cssConstants.ACTIVE).addClass(_c4gMapsConstant.cssConstants.LOADING) : false;
                window.c4gMapsPopup.spinner.show();
              }

              if (popupInfos.async === false || popupInfos.async == '0') {
                objPopup = {};
                objPopup.popup = popupInfos;
                objPopup.feature = feature;
                objPopup.layer = layer; // Call the popup hook for plugin specific popup content

                if (window.c4gMapsHooks !== undefined && (0, _typeof2["default"])(window.c4gMapsHooks.proxy_fillPopup) === 'object') {
                  _c4gMapsUtils.utils.callHookFunctions(window.c4gMapsHooks.proxy_fillPopup, {
                    popup: objPopup,
                    mapController: self.options.mapController
                  });
                }

                self.popupController.setPopup(objPopup);
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
                  objPopup.layer = layer; // Call the popup hook for plugin specific popup content

                  if (window.c4gMapsHooks !== undefined && (0, _typeof2["default"])(window.c4gMapsHooks.proxy_fillPopup) === 'object') {
                    _c4gMapsUtils.utils.callHookFunctions(window.c4gMapsHooks.proxy_fillPopup, {
                      popup: objPopup,
                      mapController: self.options.mapController
                    });
                  }

                  self.popupController.setPopup(objPopup);
                });
              }
            } else {
              if (self.mapData.popupHandling !== '3') {
                window.c4gMapsPopup.$popup.removeClass(_c4gMapsConstant.cssConstants.ACTIVE);
              } else {
                self.popupController.close();
              }
            }
          } else {
            if (self.mapData.popupHandling !== '3') {
              window.c4gMapsPopup.$popup.removeClass(_c4gMapsConstant.cssConstants.ACTIVE);
            } else {
              self.popupController.close();
            }
          } // hooks


          _c4gMapsUtils.utils.callHookFunctions(window.c4gMapsHooks.hook_map_click, clickEvent);
        }
      }); // end of "click-observer"
    } // end of "initial"*

  }, {
    key: "activateClickObserver",
    value: function activateClickObserver() {
      this.clickObserverActive = true;
    }
  }, {
    key: "deactivateClickObserver",
    value: function deactivateClickObserver() {
      this.clickObserverActive = false;
    }
  }, {
    key: "combine",
    value: function combine(proxy) {
      var func = function func(event) {
        proxy.combineLayers(proxy);
        proxy.options.mapController.map.un('postrender', func);
      };

      proxy.options.mapController.map.on('postrender', func);
    }
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

      if (opt_options && (0, _typeof2["default"])(opt_options) === "object") {
        options = opt_options;
      } else {
        options = {};
      }

      this.locationStyleController.arrLocStyles = this.locationStyleController.arrLocStyles || {};
      neededLayerStyles = [];

      getLayerStyles = function getLayerStyles(layers) {
        var i, element, index; // ToDo: Rekursion integrieren (test mit forum)

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

        vectorSource = new _source.Vector({
          projection: 'EPSG:3857'
        });

        for (i = 0; i < features.length; i++) {
          vectorSource.addFeatures(features[i]);
        }

        clusterSource = new _source.Cluster({
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
                } // calculate bubble-offset


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

                var fillcolor = _c4gMapsUtils.utils.getRgbaFromHexAndOpacity('4975A8', {
                  unit: '%',
                  value: 70
                });

                if (contentData.cluster_fillcolor) {
                  fillcolor = _c4gMapsUtils.utils.getRgbaFromHexAndOpacity(contentData.cluster_fillcolor, {
                    unit: '%',
                    value: 70
                  });
                }

                var fontcolor = contentData.cluster_fontcolor ? '#' + contentData.cluster_fontcolor : '#FFFFFF';
                style.push(new _style.Style({
                  text: new _style.Text({
                    text: "●",
                    font: "60px sans-serif",
                    offsetX: -1 * iconOffset[0],
                    offsetY: -1 * iconOffset[1],
                    fill: new _style.Fill({
                      color: fillcolor
                    })
                  })
                }));
                style.push(new _style.Style({
                  text: new _style.Text({
                    text: size.toString(),
                    offsetX: -1 * iconOffset[0],
                    offsetY: -1 * iconOffset[1] + 3,
                    fill: new _style.Fill({
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
        }; //vectorLayer = self.getVectorLayer(clusterSource, styleForCluster);


        vectorLayer = new _layer.Vector({
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
              locstyle = this.locationStyleController.arrLocStyles[layerContent.locationStyle]; // TODO check all locstyles and take the most constraining zoom value

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

exports.MapProxy = MapProxy;

/***/ }),

/***/ "./Resources/public/js/c4g-maps-utils.js":
/*!***********************************************!*\
  !*** ./Resources/public/js/c4g-maps-utils.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof3 = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.utils = void 0;

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

var popupFunctionsDE = _interopRequireWildcard(__webpack_require__(/*! ./c4g-maps-popup-info-de */ "./Resources/public/js/c4g-maps-popup-info-de.js"));

var popupFunctionsEN = _interopRequireWildcard(__webpack_require__(/*! ./c4g-maps-popup-info-en */ "./Resources/public/js/c4g-maps-popup-info-en.js"));

var _layer = __webpack_require__(/*! ol/layer */ "./node_modules/ol/layer.js");

var _Circle = _interopRequireDefault(__webpack_require__(/*! ol/geom/Circle */ "./node_modules/ol/geom/Circle.js"));

var _proj = __webpack_require__(/*! ol/proj */ "./node_modules/ol/proj.js");

var _sphere = __webpack_require__(/*! ol/sphere */ "./node_modules/ol/sphere.js");

var _interaction = __webpack_require__(/*! ol/interaction */ "./node_modules/ol/interaction.js");

var _source = __webpack_require__(/*! ol/source */ "./node_modules/ol/source.js");

var _extent = __webpack_require__(/*! ol/extent */ "./node_modules/ol/extent.js");

var _jsbi = _interopRequireDefault(__webpack_require__(/*! jsbi/dist/jsbi.mjs */ "./node_modules/jsbi/dist/jsbi.mjs"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
var popupFunctions = popupFunctionsDE;

if (typeof mapData !== "undefined") {
  if (mapData.lang === "de") {
    popupFunctions = popupFunctionsDE;
  } else if (mapData.lang === "en") {
    popupFunctions = popupFunctionsEN;
  } else {
    // fallback
    popupFunctions = popupFunctionsEN;
  }
} else {
  popupFunctions = popupFunctionsEN;
}

var utils = {
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
  },
  // end of encodeGeoJsonProperty()
  removeUmlauts: function removeUmlauts(input) {
    if (!input) {
      return '';
    }

    return input.toLowerCase().replace(/\s/g, "").replace(/\\/g, '\\\\').replace(/\"/g, '\'\'').replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss');
  },

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
  },
  // end of decodeGeoJsonProperty()

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

    if ((0, _typeof2["default"])(param) === undefined) {
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
        opt_getKey = opt_getKey.toLowerCase(); // replace parameter if already existent

        searchParam = location.search.replace(/([^=\?\&]+)=([^&]+)/gi, function (match, key, value, offset, originString) {
          if (key === opt_getKey) {
            paramReplaced = true;
            return key + '=' + param;
          }

          return match;
        }); // otherwise append as new parameter

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
  },
  // end of setUrlParam()

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
  },
  // end of getUrlParam()

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
      return _jsbi["default"].toNumber(_jsbi["default"].subtract(_jsbi["default"].BigInt(a), _jsbi["default"].BigInt(b)));
    });
    arrOutput = [];
    arrOutput[0] = arrInput[0].toString();

    for (i = 1; i < arrInput.length; i += 1) {
      arrOutput[i] = _jsbi["default"].subtract(_jsbi["default"].BigInt(arrInput[i]), _jsbi["default"].BigInt(arrInput[i - 1])).toString();
    }

    return arrOutput;
  },
  // end of deltaEncode()

  /**
   * Decode a delta-encoded array.
   * See `deltaEncode` function for more detailed information.
   *
   * @param   {array<numbers>}  arrInput  [description]
   *
   * @return  {array<numbers>}            [description]
   */
  deltaDecode: function deltaDecode(arrInput) {
    var arrOutput;

    if (!arrInput) {
      return [];
    }

    if (arrInput[0].indexOf("{") !== -1) {
      // cannot delta decode uuids
      return arrInput;
    }

    arrOutput = [];
    arrOutput[0] = _jsbi["default"].BigInt(arrInput[0]); // if (isNaN(arrInput[0])) {
    //   return [];
    // }

    for (var i = 1; i < arrInput.length; i += 1) {
      arrOutput[i] = _jsbi["default"].add(_jsbi["default"].BigInt(arrInput[i]), arrOutput[i - 1]);
    }

    for (var _i = 0; _i < arrOutput.length; _i++) {
      arrOutput[_i] = arrOutput[_i].toString();
    }

    return arrOutput;
  },
  // end of deltaDecode()

  /**
   * Check and call functions in `arrHookFunctions` with given `parameters`.
   *
   * @param   {array<function>}   arrHookFunctions  [description]
   * @param   {mixed}             parameters        [description]
   */
  callHookFunctions: function callHookFunctions(arrHookFunctions, parameters) {
    var j,
        arrResult = [];

    if (arrHookFunctions && arrHookFunctions.length > 0) {
      for (j = 0; j < arrHookFunctions.length; j += 1) {
        if (typeof arrHookFunctions[j] === 'function') {
          var tmpResult = arrHookFunctions[j](parameters);

          if (tmpResult) {
            arrResult.push(tmpResult);
          }
        }
      }
    }

    return arrResult;
  },
  // end of "callHookFunctions()"

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
      if ((0, _typeof2["default"])(opt_opacity) === 'object' && opt_opacity.value) {
        opt_opacity = opt_opacity.value;
      } else if (!opt_opacity) {
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
  getSingleCoordinateForGeom: function getSingleCoordinateForGeom(geometry) {
    var coordinate, x, y;
    var type = geometry.getType();

    switch (type) {
      case "Point":
        coordinate = geometry.getCoordinates();
        break;

      case "LineString":
      case "LinearRing":
        x = (geometry.getFirstCoordinate()[0] + geometry.getLastCoordinate()[0]) / 2;
        y = (geometry.getFirstCoordinate()[1] + geometry.getLastCoordinate()[1]) / 2;
        coordinate = [x, y];
        break;

      case "Polygon":
      case "MultiPoint":
        var coordinates = geometry.getCoordinates();
        var i;

        for (i = 0; i < coordinates.length; i++) {
          x += coordinates[i][0];
          y += coordinates[i][1];
        }

        coordinate = [x / i, y / i];
        break;

      default:
        coordinate = [0, 0];
        break;
    }

    return coordinate;
  },

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
    } //sphere = new ol.Sphere(6378137);


    result = {};

    if (geometry.getType() === 'LineString' || geometry.getType() === 'Polygon' && opt_forceLineMeasure) {
      coordinates = geometry.getCoordinates();

      if (geometry.getType() === 'Polygon') {
        coordinates = coordinates[0];
      }

      value = 0;

      for (i = 0; i < coordinates.length - 1; i += 1) {
        coord1 = (0, _proj.transform)(coordinates[i], 'EPSG:3857', 'EPSG:4326');
        coord2 = (0, _proj.transform)(coordinates[i + 1], 'EPSG:3857', 'EPSG:4326');
        value += (0, _sphere.getDistance)(coord1, coord2, 6378137);
      }

      result.rawValue = (Math.round(value * 100) / 100).toFixed(2);

      if (value > 1000) {
        result.htmlValue = (Math.round(value / 1000 * 100) / 100).toFixed(2) + ' ' + 'km';
      } else {
        result.htmlValue = result.rawValue + ' ' + 'm';
      }
    } else if (geometry.getType() === 'Polygon') {
      //geometry = /** @type {Polygon} */(geometry.clone().transform('EPSG:3857', 'EPSG:4326'));
      //coordinates = geometry.getLinearRing(0).getCoordinates();
      value = Math.abs((0, _sphere.getArea)(geometry));
      result.rawValue = (Math.round(value * 100) / 100).toFixed(2);

      if (value > 10000) {
        result.htmlValue = (Math.round(value / 1000000 * 100) / 100).toFixed(2) + ' ' + 'km<sup>2</sup>';
      } else {
        result.htmlValue = result.rawValue + ' ' + 'm<sup>2</sup>';
      }
    } else if (geometry.getType() === 'Circle' && opt_forceSurfaceMeasure) {
      var center = geometry.getCenter();
      var radius = geometry.getRadius();
      var edgeCoordinate = [center[0] + radius, center[1]]; //var wgs84Sphere = new ol.Sphere(6378137);

      var value = (0, _sphere.getDistance)((0, _proj.transform)(center, 'EPSG:3857', 'EPSG:4326'), (0, _proj.transform)(edgeCoordinate, 'EPSG:3857', 'EPSG:4326'), 6378137);
      value = Math.PI * Math.pow(value, 2);
      result.rawValue = (Math.round(value * 100) / 100).toFixed(2);

      if (value > 10000) {
        result.htmlValue = (Math.round(value / 1000000 * 100) / 100).toFixed(2) + ' ' + 'km<sup>2</sup>';
      } else {
        result.htmlValue = result.rawValue + ' ' + 'm<sup>2</sup>';
      }
    } else if (geometry.getType() === 'Circle') {
      var center = geometry.getCenter();
      var radius = geometry.getRadius();
      var edgeCoordinate = [center[0] + radius, center[1]]; //var wgs84Sphere = new ol.Sphere(6378137);

      var value = (0, _sphere.getDistance)((0, _proj.transform)(center, 'EPSG:3857', 'EPSG:4326'), (0, _proj.transform)(edgeCoordinate, 'EPSG:3857', 'EPSG:4326'), 6378137);
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

    extentSource = new _source.Vector();
    extentSource.addFeatures(arrGeometries);
    return extentSource.getExtent() || (0, _interaction.Extent)([0, 0, 0, 0]);
  },
  // end of getExtentForGeometries()

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
    } //extent = ol.extent.createEmpty();


    for (key in extents) {
      if (extents.hasOwnProperty(key)) {
        if (typeof extent === "undefined") {
          extent = extents[key];
        } else {
          (0, _extent.extend)(extent, extents[key]);
        }
      }
    }

    this.fitToExtent(extent, map, opt_padding, 5, 0, 0, 2);
  },
  // end of fitToExtents

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
    } // animate the "fitting" when a duration is given and its greater than 0


    if (opt_animationDuration && opt_animationDuration > 0) {
      view.animate({
        start: +new Date(),
        duration: opt_animationDuration,
        resolution: view.getResolution(),
        center: [0, 0]
      });
    }

    try {
      view.fit(extent, map.getSize(), {
        padding: [25, 25, 25, 25]
      }); //view.fit(extent, map.getSize());
      //view.setZoom(view.getZoom()-1);

      return true;
    } catch (e) {
      return false;
    }
  },
  // end of fitToExtent()

  /**
   * Convenience function to run all placeholder functions at once.
   *
   * @param   {string}                      strInput   [description]
   * @param   {ol.Feature}                  feature    [description]
   * @param   {ol.layer.Layer | undefined}  opt_layer  [description]
   * @param   {string}                      language   [description]
   *
   * @return  {string}                                 [description]
   */
  replaceAllPlaceholders: function replaceAllPlaceholders(strInput, feature, opt_layer, language) {
    var strOutput; // only check the first two parameters as they will be used by all placeholder-functions
    // -> for performance

    if (!strInput || !feature) {
      return strInput;
    }

    strOutput = this.replaceFunctionPlaceholders(strInput, feature, opt_layer, language);
    strOutput = this.replaceEditorVarsPlaceholders(strOutput, feature);
    strOutput = this.replaceAttributePlaceholders(strOutput, feature);
    return strOutput;
  },
  // end of replaceAllPlaceholders()

  /**
   * Replace every occurance of `${FNfunctionName}`, in `strInput`,
   * with the result of `window.functionName(feature, style)`, if it exist.
   * Otherwise the placeholder will be simply removed (/replaced with '').
   * Style will be taken either from the feature, or the layer.
   *
   * @param   {string}          strInput  [description]
   * @param   {ol.Feature}      feature   [description]
   * @param   {ol.layer.Layer}  layer     [description]
   * @param   {string}          language  [description]
   *
   * @return  {string}                    [description]
   */
  replaceFunctionPlaceholders: function replaceFunctionPlaceholders(strInput, feature, layer, language) {
    var proxy = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
    var strOutput;

    if (!strInput || !feature || !layer) {
      return strInput;
    }

    popupFunctions = language === 'de' || language === 'de-DE' ? popupFunctionsDE : popupFunctionsEN;
    strOutput = strInput.replace(/\$\{FN([^\}]*)\}/g, function (match, functionName, offset, originString) {
      // check if function exists
      if (typeof popupFunctions[functionName] === 'function') {
        // search style
        var styleSrc = "";

        if (proxy && feature.get('locstyle')) {
          var locstyleArr = proxy.locationStyleController.arrLocStyles[feature.get('locstyle')].locStyleArr;
          styleSrc = locstyleArr.icon_src ? locstyleArr.icon_src : locstyleArr.svgSrc ? locstyleArr.svgSrc : "";
        }

        return popupFunctions[functionName](feature, styleSrc);
      }

      return '';
    }); // end of replace()

    return strOutput;
  },
  // end of replaceFunctionPlaceholders()

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
      var editorVars, i; // check if feature has editorVars

      if (feature.get('editorVars')) {
        editorVars = feature.get('editorVars'); // search for editorVar with key == evKey

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
  },
  // end of replaceEditorVarsPlaceholders()

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
  },
  // end of replaceAttributePlaceholders()
  objectToArray: function objectToArray(object) {
    if (object && (0, _typeof2["default"])(object) === 'object') {
      object = Object.keys(object).map(function (key) {
        return object[key];
      });
    }

    return object;
  },
  // end of objectToArray()
  getVectorLayer: function getVectorLayer(source, style, zIndex) {
    var fnStyle; // make sure that the style is a function

    if (typeof style === 'function') {
      fnStyle = style;
    } else if (style !== undefined) {
      fnStyle = function fnStyle() {
        return style;
      };
    }

    return new _layer.Vector({
      source: source,
      style: fnStyle,
      zIndex: zIndex
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

  /**
   * Returns the current domain (without the subdomain)
   */
  getCurrentDomain: function getCurrentDomain() {
    var domain = window.location.hostname;
    var arrDomain = domain.split('.');

    if (arrDomain.length > 2) {
      // there is a subdomain
      return arrDomain[arrDomain.length - 2];
    } else {
      return arrDomain[0];
    }
  },
  getValue: function getValue(key) {
    return localStorage[key] || '';
  },
  storeValue: function storeValue(key, value) {
    localStorage[key] = value; // only strings
  },
  decodeHTML: function decodeHTML(html) {
    var txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  }
};
exports.utils = utils;

/***/ }),

/***/ "./Resources/public/js/c4g-overlay-controller.js":
/*!*******************************************************!*\
  !*** ./Resources/public/js/c4g-overlay-controller.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.C4gOverlayController = exports.OSM_REL_ATTRIBUTION = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _c4gMapsConfig = __webpack_require__(/*! ./c4g-maps-config */ "./Resources/public/js/c4g-maps-config.js");

var _source = __webpack_require__(/*! ol/source */ "./node_modules/ol/source.js");

var _layer = __webpack_require__(/*! ol/layer */ "./node_modules/ol/layer.js");

var _GeoImage = _interopRequireDefault(__webpack_require__(/*! ol-ext/source/GeoImage */ "./node_modules/ol-ext/source/GeoImage.js"));

/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
//copy link to add noopener
var OSM_REL_ATTRIBUTION = '&#169; ' + '<a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> ' + 'contributors.';
exports.OSM_REL_ATTRIBUTION = OSM_REL_ATTRIBUTION;

var C4gOverlayController = /*#__PURE__*/function () {
  function C4gOverlayController(baselayer) {
    (0, _classCallCheck2["default"])(this, C4gOverlayController);
    this.baselayer = baselayer;
    this.arrOverlays = [];
  }

  (0, _createClass2["default"])(C4gOverlayController, [{
    key: "showOverlayLayer",
    value: function showOverlayLayer(overlayId) {
      var self = this,
          overlayLayerConfig,
          osmSourceConfigs = _c4gMapsConfig.config.osm,
          stamenSourceConfigs = _c4gMapsConfig.config.stamen,
          layerOptions,
          overlayLayer,
          noUrl;
      layerOptions = {};
      overlayLayer = new _layer.Tile({
        source: new _source.OSM()
      });
      overlayLayerConfig = this.arrOverlays[overlayId];
      var isSecure = window.isSecureContext;

      if (isSecure) {
        layerOptions.crossOrigin = 'anonymous';
      }

      switch (overlayLayerConfig.provider) {
        case 'osm':
          if (osmSourceConfigs[overlayLayerConfig.style]) {
            overlayLayer = new _layer.Tile({
              source: new _source.OSM(jQuery.extend(osmSourceConfigs[overlayLayerConfig.style], layerOptions))
            });
          } else if (stamenSourceConfigs[overlayLayerConfig.style]) {
            // Stamen
            overlayLayer = new _layer.Tile({
              source: new _source.Stamen(jQuery.extend(stamenSourceConfigs[overlayLayerConfig.style], layerOptions))
            });
          } else if (overlayLayerConfig.style === 'osm_custom') {
            // custom
            noUrl = true;

            if (overlayLayerConfig.attribution) {
              layerOptions.attributions = overlayLayerConfig.attribution + ' ' + OSM_REL_ATTRIBUTION;
            }

            if (overlayLayerConfig.url) {
              layerOptions.url = overlayLayerConfig.url;
              noUrl = false;
            } else if (overlayLayerConfig.urls && overlayLayerConfig.urls.length > 0) {
              layerOptions.urls = overlayLayerConfig.urls;
              noUrl = false;
            }

            if (!noUrl) {
              overlayLayer = new _layer.Tile({
                source: new _source.XYZ(layerOptions)
              });
            } else {
              console.warn('custom url(s) missing -> switch to default');
            }
          } else {
            console.warn('unsupported osm-style -> switch to default');
          }

          break;

        case 'sea':
          // custom
          noUrl = true;

          if (overlayLayerConfig.attribution) {
            layerOptions.attributions = overlayLayerConfig.attribution + ' ' + OSM_REL_ATTRIBUTION;
          }

          if (overlayLayerConfig.urls) {
            layerOptions.urls = overlayLayerConfig.urls;
            noUrl = false;
          }

          if (!noUrl) {
            overlayLayer = new _layer.Tile({
              source: new _source.XYZ(layerOptions)
            });
          }

          break;

        case 'wms':
          overlayLayer = new _layer.Tile({
            source: new _source.TileWMS({
              url: overlayLayerConfig.url,
              params: {
                LAYERS: overlayLayerConfig.params.layers,
                VERSION: overlayLayerConfig.params.version,
                //FORMAT: overlayLayerConfig.params.format,
                TRANSPARENT: overlayLayerConfig.params.transparent
              },
              gutter: overlayLayerConfig.gutter,
              attributions: overlayLayerConfig.attribution + ' ' + OSM_REL_ATTRIBUTION
            }) //extent: ol.proj.transformExtent([5.59334, 50.0578, 9.74158, 52.7998], 'EPSG:4326', 'EPSG:3857')

          });
          break;

        case 'owm':
          overlayLayer = new _layer.Tile({
            source: new _source.XYZ({
              url: overlayLayerConfig.url + overlayLayerConfig.app_id + '/{z}/{x}/{y}?hash=' + overlayLayerConfig.api_key,
              attributions: overlayLayerConfig.attribution + ' ' + OSM_REL_ATTRIBUTION
            }) //extent: ol.proj.transformExtent([5.59334, 50.0578, 9.74158, 52.7998], 'EPSG:4326', 'EPSG:3857')

          });
          break;

        case 'geoimage':
          var objSource = JSON.parse(overlayLayerConfig.geoImageJson);
          objSource.url = overlayLayerConfig.imageSrc ? overlayLayerConfig.imageSrc : objSource.url;
          objSource.attributions = overlayLayerConfig.attribution;
          overlayLayer = new _layer.Image({
            source: new _GeoImage["default"](objSource)
          });
          break;

        default:
          console.warn('unsupported provider');
          break;
      }

      this.arrOverlays[overlayId].layer = overlayLayer; // this.arrOverlays[overlayId].changeOpacity(parseInt(overlayLayerConfig.opacity)/100);

      this.arrOverlays[overlayId].changeOpacity(overlayLayerConfig.opacity);
      return this.arrOverlays[overlayId].layer;
    }
  }]);
  return C4gOverlayController;
}();

exports.C4gOverlayController = C4gOverlayController;

/***/ }),

/***/ "./Resources/public/js/c4g-overlay.js":
/*!********************************************!*\
  !*** ./Resources/public/js/c4g-overlay.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.C4gOverlay = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
var C4gOverlay = /*#__PURE__*/function () {
  function C4gOverlay(overlayArr, mapController) {
    (0, _classCallCheck2["default"])(this, C4gOverlay);
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
    this.imageSrc = overlayArr['image_src'];
    this.geoImageJson = overlayArr['geoimage_json'];
    this.layer = false;
    this.overlayArr = overlayArr;
    this.mapController = mapController;
  }

  (0, _createClass2["default"])(C4gOverlay, [{
    key: "changeOpacity",
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

exports.C4gOverlay = C4gOverlay;

/***/ }),

/***/ "./Resources/public/js/c4g-router-time-conversions.js":
/*!************************************************************!*\
  !*** ./Resources/public/js/c4g-router-time-conversions.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.toHumanDistance = toHumanDistance;
exports.toHumanTime = toHumanTime;

/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

/**
 * Converts a distance in meters to a more readable format.
 * @param distanceInMeters  The distance to convert.
 * @returns {string}
 */
function toHumanDistance(distanceInMeters) {
  var distance, humanDistance;
  distance = parseInt(distanceInMeters, 10);
  distance = distance / 1000;

  if (distance >= 100) {
    humanDistance = distance.toFixed(0) + " " + 'km';
  } else if (distance >= 10) {
    humanDistance = distance.toFixed(1) + " " + 'km';
  } else if (distance >= 0.1) {
    humanDistance = distance.toFixed(2) + " " + 'km';
  } else {
    humanDistance = (distance * 1000).toFixed(0) + " " + 'm';
  }

  return humanDistance;
}
/**
 * Converts a time in seconds to a more readable format.
 * @param timeInSeconds     The time to convert.
 * @returns {string}
 */


function toHumanTime(timeInSeconds) {
  var seconds, minutes, hours, humanTime;
  seconds = parseInt(timeInSeconds, 10);
  minutes = parseInt(seconds / 60, 10);
  seconds = seconds % 60;
  hours = parseInt(minutes / 60, 10);
  minutes = minutes % 60;

  if (hours === 0 && minutes === 0) {
    humanTime = seconds + " " + 's';
  } else if (hours === 0) {
    humanTime = minutes + " " + 'min';
  } else {
    humanTime = hours + " " + 'h' + " " + minutes + " " + 'min';
  }

  return humanTime;
}

/***/ }),

/***/ "./Resources/public/js/c4g-routing-permalink.js":
/*!******************************************************!*\
  !*** ./Resources/public/js/c4g-routing-permalink.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.RoutingPermalink = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
var RoutingPermalink = /*#__PURE__*/function () {
  function RoutingPermalink(router) {
    (0, _classCallCheck2["default"])(this, RoutingPermalink);
    (0, _defineProperty2["default"])(this, "_router", void 0);
    this._router = router;
    this.linkFragments = {};
    this.rawFragments = {};
  }

  (0, _createClass2["default"])(RoutingPermalink, [{
    key: "router",
    get: function get() {
      return this._router;
    },
    set: function set(value) {
      this._router = value;
    }
    /**
     * Sets one key of this.linkFragments to the given value.
     * @param key
     * @param value
     */

  }, {
    key: "updateLinkFragments",
    value: function updateLinkFragments(key, value) {
      if (!this.linkFragments) {
        this.linkFragments = {};
      }

      this.linkFragments[key] = value;
      this.updateUrl();
    }
    /**
     * Checks the current values in this.linkFragments and updates the browser URL.
     */

  }, {
    key: "updateUrl",
    value: function updateUrl() {
      var url = "?mapsParams=";
      var fragments = this.linkFragments;

      if (fragments.mode && fragments.mode === "area") {
        url += fragments.mode ? "m:" + fragments.mode + "/" : "";
        url += fragments.addressArea ? "a:" + fragments.addressArea[0] + "," + fragments.addressArea[1] + "/" : "";
        url += fragments.detourArea ? "d:" + fragments.detourArea + "/" : "";
        url += fragments.searchType ? "s:" + fragments.searchType + "/" : "";
        url += fragments.forceStart ? "f:" + fragments.forceStart : "";
        var completeUrl = window.location.pathname + url;
        history.pushState({}, null, completeUrl);
      } else if (fragments.mode && fragments.mode === "route") {
        url += fragments.mode ? "m:" + fragments.mode + "/" : "";
        url += fragments.fromAddress ? "af:" + fragments.fromAddress[0] + "," + fragments.fromAddress[1] + "/" : "";
        url += fragments.toAddress ? "at:" + fragments.toAddress[0] + "," + fragments.toAddress[1] + "/" : "";
        url += fragments.detourRoute ? "d:" + fragments.detourRoute + "/" : "";
        url += fragments.searchType ? "s:" + fragments.searchType + "/" : "";
        url += fragments.forceStart ? "f:" + fragments.forceStart : "";

        var _completeUrl = window.location.pathname + url;

        history.pushState({}, null, _completeUrl);
      }
    }
    /**
     * Checks if there are GET params loaded into the mapData and triggers the search accordingly.
     * The first param is expected to be either "route" or "area" to indicate the type of search.
     * After that, the next param (or the next two, in case of "route") should be an address string.
     * The following parameters are detour/searchtype/forceStart.
     */

  }, {
    key: "handleInitialParams",
    value: function () {
      var _handleInitialParams = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var scope, arrParams, objParams, routerLayers, desiredButton, key, obj, innerKey, singleEntry, cmpValue;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.rawFragments = this.router.props.mapController.data.initialParams;
                scope = this;

                if (!this.rawFragments) {
                  _context.next = 30;
                  break;
                }

                _context.next = 5;
                return this.checkForOldParams();

              case 5:
                arrParams = this.rawFragments.split("/").map(function (pair) {
                  return pair.split(":");
                });
                objParams = {};
                arrParams.forEach(function (_ref) {
                  var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
                      key = _ref2[0],
                      value = _ref2[1];

                  return objParams[key] = value;
                });
                routerLayers = this.router.props.mapController.data.routerLayers;
                desiredButton = "";
                _context.t0 = _regenerator["default"].keys(routerLayers);

              case 11:
                if ((_context.t1 = _context.t0()).done) {
                  _context.next = 28;
                  break;
                }

                key = _context.t1.value;

                if (!routerLayers.hasOwnProperty(key)) {
                  _context.next = 26;
                  break;
                }

                obj = routerLayers[key];
                _context.t2 = _regenerator["default"].keys(obj);

              case 16:
                if ((_context.t3 = _context.t2()).done) {
                  _context.next = 26;
                  break;
                }

                innerKey = _context.t3.value;

                if (!obj.hasOwnProperty(innerKey)) {
                  _context.next = 24;
                  break;
                }

                singleEntry = obj[innerKey];
                cmpValue = objParams.s;

                if (!(singleEntry.mapLabel === cmpValue)) {
                  _context.next = 24;
                  break;
                }

                desiredButton = innerKey;
                return _context.abrupt("break", 28);

              case 24:
                _context.next = 16;
                break;

              case 26:
                _context.next = 11;
                break;

              case 28:
                // iterate buttons later on when the UI is built
                this.desiredButtonRouting = desiredButton;

                if (objParams.m === "area") {
                  this.handleInitialAreaSearch(objParams);
                } else if (objParams.m === "route") {
                  this.handleInitialRouteSearch(objParams);
                }

              case 30:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function handleInitialParams() {
        return _handleInitialParams.apply(this, arguments);
      }

      return handleInitialParams;
    }()
    /**
     * Checks the URL for the deprecated URL structure and converts it to the current structure.
     */

  }, {
    key: "checkForOldParams",
    value: function () {
      var _checkForOldParams = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        var strParams, params, arrFragments, fromCoords, toCoords, coords;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                strParams = "";
                params = this.router.props.mapController.data.initialParams;

                if (!(params.indexOf("m:") !== -1)) {
                  _context2.next = 4;
                  break;
                }

                return _context2.abrupt("return");

              case 4:
                arrFragments = params.split("/");
                strParams += "m:" + arrFragments[0] + "/";

                if (!(arrFragments[0] === "route")) {
                  _context2.next = 20;
                  break;
                }

                _context2.next = 9;
                return this.router.performGeoSearch(arrFragments[1]);

              case 9:
                fromCoords = _context2.sent;
                _context2.next = 12;
                return this.router.performGeoSearch(arrFragments[2]);

              case 12:
                toCoords = _context2.sent;
                strParams += "af:" + fromCoords.join() + "/";
                strParams += "at:" + toCoords.join() + "/";
                strParams += "d:" + arrFragments[3] + "/";
                strParams += "s:" + arrFragments[4] + "/";
                strParams += "f:" + arrFragments[5] + "/";
                _context2.next = 27;
                break;

              case 20:
                _context2.next = 22;
                return this.router.performGeoSearch(arrFragments[1]);

              case 22:
                coords = _context2.sent;
                strParams += "a:" + coords.join() + "/";
                strParams += "d:" + arrFragments[2] + "/";
                strParams += "s:" + arrFragments[3] + "/";
                strParams += "f:" + arrFragments[4] + "/";

              case 27:
                this.rawFragments = strParams;

              case 28:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function checkForOldParams() {
        return _checkForOldParams.apply(this, arguments);
      }

      return checkForOldParams;
    }()
  }, {
    key: "handleInitialAreaSearch",
    value: function handleInitialAreaSearch(objParams) {
      this.router.setState({
        mode: "area"
      });
      var center = objParams.a;

      if (center) {
        center = center.split(",");
      }

      var detour = objParams.d;
      var searchtype = objParams.s;
      var forceStart = objParams.f;

      if (detour || detour > 1) {
        this.updateLinkFragments("detour", detour); // jQuery(this.toggleDetourArea).val(detour);
        // jQuery(this.toggleDetourArea).trigger('input');
      }

      if (center && center.length === 2) {
        this.updateLinkFragments("addressArea", center);
        this.router.setAreaPoint(center);
      }

      if (searchtype) {
        this.updateLinkFragments("searchType", searchtype);
      }

      if (forceStart) {
        this.updateLinkFragments("forceStart", forceStart);
      } // activate area view


      jQuery(".c4g-portside-viewtriggerbar .c4g-area-search").click();
    }
  }, {
    key: "handleInitialRouteSearch",
    value: function handleInitialRouteSearch(objParams) {
      this.router.setState({
        mode: "route"
      });
      var fromAddress = objParams.af ? objParams.af.split(",").map(function (elem) {
        return parseFloat(elem);
      }) : null;
      var toAddress = objParams.at ? objParams.at.split(",").map(function (elem) {
        return parseFloat(elem);
      }) : null;
      var detour = objParams.d;
      var searchtype = objParams.s;
      var forceStart = objParams.f;

      if (detour) {
        jQuery(this.router.toggleDetourRoute).val(detour);
        jQuery(this.router.toggleDetourRoute).trigger('input');
        this.updateLinkFragments("detour", objParams.d);
      }

      if (fromAddress) {
        this.updateLinkFragments("fromAddress", fromAddress);
      }

      if (toAddress) {
        this.updateLinkFragments("toAddress", toAddress);
      }

      if (searchtype) {
        this.updateLinkFragments("searchType", objParams.s);
      }

      if (forceStart) {
        this.updateLinkFragments("forceStart", objParams.f);
      }

      if (fromAddress && toAddress) {
        this.router.setRouteFrom(fromAddress[0], fromAddress[1]);
        this.router.setRouteTo(toAddress[0], toAddress[1]);
      } // activate router view


      jQuery(".c4g-portside-viewtriggerbar .c4g-route-search").click();
    }
  }]);
  return RoutingPermalink;
}();

exports.RoutingPermalink = RoutingPermalink;

/***/ }),

/***/ "./Resources/public/js/components/c4g-autocomplete-input.jsx":
/*!*******************************************************************!*\
  !*** ./Resources/public/js/components/c4g-autocomplete-input.jsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.AutocompleteInput = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var AutocompleteInput = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(AutocompleteInput, _Component);

  var _super = _createSuper(AutocompleteInput);

  function AutocompleteInput(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, AutocompleteInput);
    _this = _super.call(this, props);
    _this.listenerRegistered = false;
    return _this;
  }

  (0, _createClass2["default"])(AutocompleteInput, [{
    key: "render",
    value: function render() {
      var scope = this;

      var submitFunction = function submitFunction() {
        var field = $("#" + scope.props.cssId);
        field.trigger('change');
        var performSearchCallback;

        if (scope.props.cssId.indexOf("area") !== -1) {
          performSearchCallback = function performSearchCallback() {
            scope.props.router.performArea();
          };
        } else {
          performSearchCallback = function performSearchCallback() {
            scope.props.router.performViaRoute();
          };
        }

        var value = scope.props.cssId.indexOf('From') !== -1 ? "fromValue" : "toValue";
        scope.props.router.performSearch(field, value, performSearchCallback);
      };

      var enterListener = function enterListener(event, opt_this) {
        if (event.keyCode === 13) {
          submitFunction();
        } else {
          if ($(event.currentTarget).val().length === 0 && !event.keyCode) {
            //deleted
            if (typeof scope.props.objFunctions.deleteFunction === "function") {
              scope.props.objFunctions.deleteFunction(event.currentTarget, event.currentTarget.id);
            } else {
              // over points
              scope.props.objFunctions[scope.props.index].deleteFunction(event.currentTarget, event.currentTarget.id);
            }
          } else {
            scope.counter = Math.floor(Date.now());
            setTimeout(function () {
              if (scope.counter && scope.counter + 400 < Math.floor(Date.now())) {
                delete scope.counter;

                if (!scope.props.objSettings.proxyUrl || !scope.props.objSettings.keyAutocomplete) {
                  var value = scope.props.cssId.indexOf('From') !== -1 ? "fromValue" : "toValue";
                  var field = $("#" + scope.props.cssId);
                  scope.props.router.performSearch(field, value);
                } else {
                  scope.autocompleteAddress($("#" + scope.props.cssId).val(), "#" + scope.props.cssId);
                }
              }
            }, 500);
          }
        }
      };

      return /*#__PURE__*/_react["default"].createElement("input", {
        id: this.props.cssId,
        type: "search",
        defaultValue: this.props.value,
        onKeyDown: enterListener,
        autoComplete: "off"
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var scope = this;
      var arrNames;

      if (this.props.cssId.indexOf("From") !== -1) {
        arrNames = this.props.containerAddresses.arrFromNames;
      } else if (this.props.cssId.indexOf("To") !== -1) {
        arrNames = this.props.containerAddresses.arrToNames;
      } else if (this.props.cssId.indexOf("Over") !== -1) {
        arrNames = this.props.containerAddresses.arrOverNames[this.props.index];
      } else if (this.props.cssId.indexOf("area") !== -1) {
        arrNames = this.props.containerAddresses.arrAreaNames;
      }

      var inputField = jQuery('#' + this.props.cssId);

      if (inputField && typeof inputField.autocomplete == 'function') {
        inputField.autocomplete({
          source: arrNames
        });
      } // only register listener once


      if (!this.listenerRegistered) {
        inputField.on('autocompleteselect', function (event, ui) {
          if (scope.props.index) {
            scope.props.objFunctions[scope.props.index].selectListener(event, ui);
          } else {
            scope.props.objFunctions.selectListener(event, ui);
          }
        });
        this.listenerRegistered = true;
      }
    }
  }, {
    key: "setCenter",
    value: function setCenter(center) {
      this.objSettings.center = center;
    }
  }, {
    key: "autocompleteAddress",
    value: function autocompleteAddress(input, cssClass) {
      var scope = this;
      var settings = scope.props.objSettings;
      var center;

      if (settings.center) {
        if (typeof settings.center === "function") {
          var objCenter = settings.center();
          center = objCenter[0] + "," + objCenter[1];
        } else {
          center = settings.center[0] + "," + settings.center[1];
        }
      } else if (settings.bBox) {
        center = (parseFloat(settings.bBox[0]) + parseFloat(settings.bBox[2])) / 2 + "," + (parseFloat(settings.bBox[1]) + parseFloat(settings.bBox[3])) / 2;
      }

      var url;

      if (center) {
        url = settings.proxyUrl + "autocomplete.php?format=json&key=" + settings.keyAutocomplete + "&q=" + input + "&center=" + center;
      } else {
        url = settings.proxyUrl + "autocomplete.php?format=json&key=" + settings.keyAutocomplete + "&q=" + input;
      }

      if (settings.geosearchParams) {
        for (var param in settings.geosearchParams) {
          if (settings.geosearchParams.hasOwnProperty(param)) {
            url += "&" + param + "=" + settings.geosearchParams[param];
          }
        }
      }

      $.ajax({
        url: url
      }).done(function (data) {
        var center;

        if (settings.center) {
          center = settings.center;
        } else if (settings.bBox) {
          center = [(parseFloat(settings.bBox[0]) + parseFloat(settings.bBox[2])) / 2, (parseFloat(settings.bBox[1]) + parseFloat(settings.bBox[3])) / 2];
        }

        if (data.length > 0) {
          if (data[0] && data[0].display_name && center) {
            // $(cssId).val(data[0].display_name);
            var arrAddresses = [];

            for (var i in data) {
              if (data.hasOwnProperty(i)) {
                if (settings.bBox && settings.bBox[0]) {
                  if (scope.isInBoundingBox(data[i].lon, data[i].lat, settings.bBox)) {
                    var distance = Math.sqrt((center[0] - data[i].lon) * (center[0] - data[i].lon) + (center[1] - data[i].lat) * (center[1] - data[i].lat));
                    var element = {
                      'dist': distance,
                      'pos': [data[i].lat, data[i].lon],
                      'name': data[i].display_name
                    };
                    arrAddresses.push(element);
                  }
                }
              }
            }

            arrAddresses.sort(function (a, b) {
              return a.dist - b.dist;
            });

            for (var _i in arrAddresses) {
              if (arrAddresses.hasOwnProperty(_i)) {
                if (cssClass.indexOf('from') !== -1) {
                  // do not add twice
                  if (!scope.props.containerAddresses.arrFromNames.includes(arrAddresses[_i].name)) {
                    scope.props.containerAddresses.arrFromNames.push(arrAddresses[_i].name);
                    scope.props.containerAddresses.arrFromPositions.push(arrAddresses[_i].pos);
                  }
                } else if (cssClass.indexOf('to') !== -1) {
                  if (!scope.props.containerAddresses.arrToNames.includes(arrAddresses[_i].name)) {
                    scope.props.containerAddresses.arrToNames.push(arrAddresses[_i].name);
                    scope.props.containerAddresses.arrToPositions.push(arrAddresses[_i].pos);
                  }
                } else if (cssClass.indexOf('over') !== -1) {
                  if (!scope.props.containerAddresses.arrOverNames[scope.props.index].includes(arrAddresses[_i].name)) {
                    scope.props.containerAddresses.arrOverNames[scope.props.index].push(arrAddresses[_i].name);
                    scope.props.containerAddresses.arrOverPositions[scope.props.index].push(arrAddresses[_i].pos);
                  }
                } else if (cssClass.indexOf('area') !== -1) {
                  if (!scope.props.containerAddresses.arrAreaNames.includes(arrAddresses[_i].name)) {
                    scope.props.containerAddresses.arrAreaNames.push(arrAddresses[_i].name);
                    scope.props.containerAddresses.arrAreaPositions.push(arrAddresses[_i].pos);
                  }
                } else {
                  console.log("This is weird ¯\\_(ツ)_/¯");
                }
              }
            } // trigger keydown event to show autocomplete options


            var _event = jQuery.Event("keydown", {
              keyCode: 8
            });

            $(cssClass).trigger(_event);
          }

          for (var _i2 in data) {
            if (data.hasOwnProperty(_i2)) {
              if (cssClass.indexOf('From') !== -1) {
                // do not add twice
                if (!scope.props.containerAddresses.arrFromNames.includes(data[_i2].display_name)) {
                  scope.props.containerAddresses.arrFromNames.push(data[_i2].display_name);
                  scope.props.containerAddresses.arrFromPositions.push([data[_i2].lat, data[_i2].lon]);
                }
              } else if (cssClass.indexOf('To') !== -1) {
                if (!scope.props.containerAddresses.arrToNames.includes(data[_i2].display_name)) {
                  scope.props.containerAddresses.arrToNames.push(data[_i2].display_name);
                  scope.props.containerAddresses.arrToPositions.push([data[_i2].lat, data[_i2].lon]);
                }
              } else if (cssClass.indexOf('Over') !== -1) {
                if (!scope.props.containerAddresses.arrOverNames[scope.props.index].includes(data[_i2].display_name)) {
                  scope.props.containerAddresses.arrOverNames[scope.props.index].push(data[_i2].display_name);
                  scope.props.containerAddresses.arrOverPositions[scope.props.index].push([data[_i2].lat, data[_i2].lon]);
                }
              } else if (cssClass.indexOf('area') !== -1) {
                if (!scope.props.containerAddresses.arrAreaNames.includes(data[_i2].display_name)) {
                  scope.props.containerAddresses.arrAreaNames.push(data[_i2].display_name);
                  scope.props.containerAddresses.arrAreaPositions.push([data[_i2].lat, data[_i2].lon]);
                }
              } else {
                console.log("This is weird ¯\\_(ツ)_/¯");
              }
            }
          }

          scope.props.router.setState({
            containerAddresses: scope.props.containerAddresses
          }); // trigger keydown event to show autocomplete options

          var event = jQuery.Event("keydown", {
            keyCode: 8
          });
          $(cssClass).trigger(event);
        }
      });
    }
  }, {
    key: "isInBoundingBox",
    value: function isInBoundingBox(longitude, latitude, bbox) {
      if (typeof longitude === "string") {
        longitude = parseFloat(longitude);
      }

      if (typeof latitude === "string") {
        latitude = parseFloat(latitude);
      }

      if (bbox[0] < longitude && longitude < bbox[2] && bbox[1] < latitude && latitude < bbox[3]) {
        return true;
      } else {
        return false;
      }
    }
  }]);
  return AutocompleteInput;
}(_react.Component);

exports.AutocompleteInput = AutocompleteInput;

/***/ }),

/***/ "./Resources/public/js/components/c4g-geosearch.jsx":
/*!**********************************************************!*\
  !*** ./Resources/public/js/components/c4g-geosearch.jsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof3 = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _control = __webpack_require__(/*! ol/control */ "./node_modules/ol/control.js");

var _c4gMapsI18n = __webpack_require__(/*! ./../c4g-maps-i18n */ "./Resources/public/js/c4g-maps-i18n.js");

var _c4gMapsConstant = __webpack_require__(/*! ./../c4g-maps-constant */ "./Resources/public/js/c4g-maps-constant.js");

var _proj = __webpack_require__(/*! ol/proj */ "./node_modules/ol/proj.js");

var _easing = __webpack_require__(/*! ol/easing */ "./node_modules/ol/easing.js");

var _source = __webpack_require__(/*! ol/source */ "./node_modules/ol/source.js");

var _layer = __webpack_require__(/*! ol/layer */ "./node_modules/ol/layer.js");

var _style = __webpack_require__(/*! ol/style */ "./node_modules/ol/style.js");

var _ol = __webpack_require__(/*! ol */ "./node_modules/ol/index.js");

var _geom = __webpack_require__(/*! ol/geom */ "./node_modules/ol/geom.js");

var _render = __webpack_require__(/*! ol/render */ "./node_modules/ol/render.js");

var _Observable = __webpack_require__(/*! ol/Observable */ "./node_modules/ol/Observable.js");

var _c4gMapsUtils = __webpack_require__(/*! ../c4g-maps-utils */ "./Resources/public/js/c4g-maps-utils.js");

var _extent = __webpack_require__(/*! ol/extent */ "./node_modules/ol/extent.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

//import {GeoSearchResults} from "./c4g-geosearch-results.jsx";
var GeoSearchResults = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "Resources_public_js_components_c4g-geosearch-results_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./c4g-geosearch-results.jsx */ "./Resources/public/js/components/c4g-geosearch-results.jsx"));
});

var Titlebar = /*#__PURE__*/_react["default"].lazy(function () {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./c4g-titlebar.jsx */ "./Resources/public/js/components/c4g-titlebar.jsx"));
});

var GeoSearch = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(GeoSearch, _Component);

  var _super = _createSuper(GeoSearch);

  function GeoSearch(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, GeoSearch);
    _this = _super.call(this, props);
    _this.langConstants = (0, _c4gMapsI18n.getLanguage)(props.mapController.data); // control
    // if (this.props.collapsed) {

    _this.clickControl = _this.clickControl.bind((0, _assertThisInitialized2["default"])(_this));
    _this.doneFunction = _this.doneFunction.bind((0, _assertThisInitialized2["default"])(_this));
    var element = document.createElement('div');
    var button = document.createElement('button');
    button.setAttribute('aria-label', _this.langConstants.CTRL_GEOSEARCH);
    button.setAttribute('title', _this.langConstants.CTRL_GEOSEARCH);
    element.className = "c4g-geosearch" + " ol-control " + "ol-unselectable";

    if (props.external) {
      element.className += " c4g-external";
    }

    element.appendChild(button);
    jQuery(button).on('click', _this.clickControl);
    var control = new _control.Control({
      element: element,
      target: props.target
    });
    props.mapController.map.addControl(control); // }
    // end control
    // prepare search-configuration
    //

    _this.config = {};

    if (props.mapController.data.geosearch.searchKey && props.mapController.data.geosearch.url) {
      _this.config.url = props.mapController.data.geosearch.url + "search.php";
      _this.config.key = props.mapController.data.geosearch.searchKey;
      _this.config.params = props.mapController.data.geosearch.params;
    } else {
      _this.config.url = props.mapController.data.api.geosearch + "/" + props.mapController.data.profile;
    } // zoomlevel when centering the found location


    _this.config.zoomlevel = props.searchZoom; // zoom to bounds instead of zoomlevel when centering the found location

    _this.config.zoombounds = props.zoomBounds; // quicksearch-option (instantly jump to the first found location)

    _this.config.quicksearch = props.quicksearch || true; // animation (animate flight to targeted location)

    _this.config.animate = props.animate; // highlight the result location

    _this.config.markResult = props.markResult;
    _this.config.animateDuration = props.animateDuration;
    _this.config.resultDuration = props.resultDuration;
    _this.config.popup = props.popup;
    _this.config.autopick = props.autopick;
    _this.config.mapController = props.mapController;
    _this.config.results = props.results;
    _this.config.resultStyle = props.resultStyle;

    if (_this.config.resultStyle && parseInt(_this.config.resultStyle, 10) > 0) {
      var scope = (0, _assertThisInitialized2["default"])(_this); // check if style is loaded, otherwise load it

      if (props.mapController.proxy.locationStyleController.arrLocStyles[_this.config.resultStyle]) {
        _this.config.resultStyle = props.mapController.proxy.locationStyleController.arrLocStyles[_this.config.resultStyle].style;
      } else {
        props.mapController.proxy.locationStyleController.loadLocationStyles([_this.config.resultStyle], {
          done: function done() {
            scope.config.resultStyle = props.mapController.proxy.locationStyleController.arrLocStyles[scope.config.resultStyle].style;
          }
        });
      }
    }

    _this.config.collapsed = props.collapsed;
    _this.config.resultCount = props.resultCount;
    _this.config.caching = props.caching;
    _this.config.placeholder = props.placeholder;
    _this.state = {
      open: !props.collapsed,
      query: "",
      // the search query
      results: [],
      currentCoordinate: [],
      openResults: false,
      // detailOpenResults: false,
      currentResult: null
    };
    _this.inputCallback = _this.inputCallback.bind((0, _assertThisInitialized2["default"])(_this));
    _this.startSearch = _this.startSearch.bind((0, _assertThisInitialized2["default"])(_this));
    _this.zoomTo = _this.zoomTo.bind((0, _assertThisInitialized2["default"])(_this));
    _this.closeResults = _this.closeResults.bind((0, _assertThisInitialized2["default"])(_this));
    _this.openResults = _this.openResults.bind((0, _assertThisInitialized2["default"])(_this));
    _this.close = _this.close.bind((0, _assertThisInitialized2["default"])(_this));
    _this.closeResultsCompletely = _this.closeResultsCompletely.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(GeoSearch, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var modeClass = this.state.open ? "c4g-open" : "c4g-close";

      if (this.props.extDiv) {
        modeClass += " external ";
      }

      var results = "";

      if (this.state.openResults && this.config.results) {
        results = /*#__PURE__*/_react["default"].createElement(GeoSearchResults, {
          className: modeClass,
          results: this.state.results,
          zoomFunc: function zoomFunc(idx) {
            _this2.setState({
              currentResult: _this2.state.results[idx]
            });

            _this2.zoomTo(idx);
          },
          closeResults: this.closeResults,
          headline: this.props.resultsHeadline,
          currentResult: this.state.currentResult,
          resultsDiv: this.props.resultsDiv,
          open: this.state.results.length > 0,
          openResults: this.openResults,
          closeCb: this.closeResultsCompletely
        });
      }

      var closeBtnClass = "";
      var closeBtnCb = "";

      if (this.config.collapsed) {
        closeBtnClass = "c4g-titlebar-close";
        closeBtnCb = this.close;
      }

      var headline = this.props.headline;

      if (!headline) {
        headline = this.langConstants.GEOSEARCH;
      }

      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
        className: _c4gMapsConstant.cssConstants.GEOSEARCH_WRAPPER + " " + modeClass + " c4g-horizon"
      }, /*#__PURE__*/_react["default"].createElement(_react.Suspense, {
        fallback: /*#__PURE__*/_react["default"].createElement("div", null, "Loading...")
      }, /*#__PURE__*/_react["default"].createElement(Titlebar, {
        wrapperClass: "c4g-geosearch-header",
        header: headline,
        headerClass: "c4g-geosearch-headline",
        detailBtnClass: "",
        detailBtnCb: "",
        closeBtnClass: closeBtnClass,
        closeBtnCb: closeBtnCb,
        closeBtnTitle: this.langConstants.CLOSE
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "c4g-geosearch-filter"
      }, /*#__PURE__*/_react["default"].createElement("input", {
        type: "text",
        onKeyDown: this.inputCallback,
        id: "c4g-geosearch-input",
        placeholder: this.config.placeholder,
        "aria-label": this.config.placeholder
      }), /*#__PURE__*/_react["default"].createElement("button", {
        className: _c4gMapsConstant.cssConstants.GEOSEARCH_START,
        type: "button",
        title: this.langConstants.CTRL_START_SEARCH,
        onMouseUp: this.startSearch
      })), results));
    }
  }, {
    key: "closeResultsCompletely",
    value: function closeResultsCompletely() {
      this.setState({
        openResults: false
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if (this.state.open) {
        if (prevState.open !== this.state.open) {
          this.props.mapController.setOpenComponent(this);
        }

        jQuery(".c4g-geosearch-container-right").addClass("c4g-open").removeClass("c4g-close");
      } else {
        jQuery(".c4g-geosearch-container-right").addClass("c4g-close").removeClass("c4g-open");
      }

      if (this.props.mapController.data.caching && !this.state.open) {
        var panelVal = _c4gMapsUtils.utils.getValue('panel');

        if (panelVal === this.constructor.name) {
          _c4gMapsUtils.utils.storeValue('panel', "");
        }
      }
    }
  }, {
    key: "close",
    value: function close() {
      this.setState({
        open: false
      });
    }
  }, {
    key: "startSearch",
    value: function startSearch(event) {
      event.stopPropagation();
      var button = document.querySelector(_c4gMapsConstant.cssConstants.GEOSEARCH_START);

      try {
        button.blur();
      } catch (ignore) {}

      var searchInput = jQuery("#c4g-geosearch-input");

      if (searchInput.val()) {
        this.findLocation(searchInput.val());
      }
    }
  }, {
    key: "inputCallback",
    value: function inputCallback(event) {
      event.stopPropagation();

      if (event.which === 13) {
        var searchInput = jQuery("#c4g-geosearch-input");

        if (searchInput.val()) {
          this.findLocation(searchInput.val());
        }

        return false;
      }
    }
  }, {
    key: "clickControl",
    value: function clickControl() {
      if (this.state.open) {
        this.setState({
          open: false
        });
        jQuery(this.props.mapController.searchContainer).removeClass("c4g-open").addClass("c4g-close");
      } else {
        // this.props.mapController.hideOtherComponents(this);
        this.setState({
          open: true
        });
        jQuery(this.props.mapController.searchContainer).removeClass("c4g-close").addClass("c4g-open");
        this.props.mapController.setOpenComponent(this);
      }
    }
  }, {
    key: "closeResults",
    value: function closeResults() {
      this.setState({
        detailOpenResults: false
      });
    }
  }, {
    key: "openResults",
    value: function openResults() {
      this.setState({
        detailOpenResults: true
      });
    }
  }, {
    key: "findLocation",
    value: function findLocation(location, opt_options) {
      var map, animate, animationDuration, markResult, mapController;
      var scope = this;
      mapController = this.props.mapController;
      map = mapController.map; // show spinner

      mapController.spinner.show();
      animate = this.config.animate;
      animationDuration = this.config.animateDuration;
      markResult = this.config.markResult;

      if ((0, _typeof2["default"])(opt_options) === 'object') {
        if (opt_options.animate !== undefined) {
          animate = opt_options.animate;
        }

        if (opt_options.markResult !== undefined) {
          markResult = opt_options.markResult;
        }
      }

      if (this.config.quicksearch) {
        var data = {
          format: "json",
          q: location
        };

        if (this.config.resultCount) {
          data.limit = this.config.resultCount;
        }

        if (this.config.key) {
          data.key = this.config.key;
        }

        if (this.config.params) {
          for (var param in this.config.params) {
            if (this.config.params.hasOwnProperty(param)) {
              data[param] = this.config.params[param];
            }
          }
        }

        var arrResults = _c4gMapsUtils.utils.callHookFunctions(window.c4gMapsHooks.hook_search, [data, this]);

        if (arrResults && arrResults.length > 0) {
          this.config.mapController.spinner.hide();

          for (var i in arrResults) {
            if (arrResults.hasOwnProperty(i)) {
              this.doneFunction(arrResults[i]);
            }
          }
        } else {
          // AJAX -> @nominatim
          jQuery.ajax({
            dataType: "json",
            url: this.config.url,
            data: data
          }).done(this.doneFunction).fail(function () {// @TODO
            // self.resultWrapper.innerHTML = 'ohoh!';
          }).always(function () {
            scope.config.mapController.spinner.hide();
          });
        }
      } else {// @TODO
      }
    }
  }, {
    key: "doneFunction",
    value: function doneFunction(results) {
      var mapView,
          currentCoordinate,
          resultCoordinate,
          coordDif,
          difContext,
          viewExtent,
          result,
          osmExtent,
          resolution,
          zoomType,
          flyTo,
          completeSearch,
          mapController = this.props.mapController,
          map = mapController.map,
          animate = this.config.animate,
          animationDuration = this.config.animateDuration,
          markResult = this.config.markResult;

      if (results && results.length && results.length > 0) {
        mapView = map.getView();

        if (results[0]) {
          result = results[0];
          this.results = results;
          currentCoordinate = mapView.getCenter();
          resultCoordinate = (0, _proj.transform)([parseFloat(result.lon), parseFloat(result.lat)], 'EPSG:4326', 'EPSG:3857');

          if (animate) {
            this.flyTo(map, resultCoordinate, this.config.zoomlevel, this.config.zoombounds, result.bounding_box, markResult, this.config.resultDuration, animate, this.config.animateDuration, map.getView());
          } else {
            this.completeSearch(this.config.markResult, this.config.animate, zoomType, this.config.animateDuration, resultCoordinate, this.config.resultDuration);
            mapView.setCenter(resultCoordinate);

            if (this.config.zoomlevel >= 0) {
              map.getView().setZoom(this.config.zoomlevel);
            }
          }

          var pixel = map.getPixelFromCoordinate(resultCoordinate);
          var feature = map.forEachFeatureAtPixel(pixel, function (feature, layer) {
            return feature;
          });
          var layer = map.forEachFeatureAtPixel(pixel, function (feature, layer) {
            return layer;
          });

          if (this.config.popup) {
            var popupInfos = {};

            if (feature && feature.get('popup')) {
              // single POI
              popupInfos = feature.get('popup');
            } else if (layer && layer.popup) {
              popupInfos = layer.popup;
            } else {
              feature = false;
            }

            if (feature) {
              var geometry = feature.getGeometry();

              if (geometry instanceof _geom.Point) {
                var coord = geometry.getCoordinates();
              } else {
                var coord = resultCoordinate;
              }

              window.c4gMapsPopup.popup.setPosition(coord);

              if (popupInfos.content) {
                window.c4gMapsPopup.$content.html('');
                window.c4gMapsPopup.popup.addClass(_c4gMapsConstant.cssConstants.ACTIVE).addClass(_c4gMapsConstant.cssConstants.LOADING);
                window.c4gMapsPopup.spinner.show();

                if (popupInfos.async === false || popupInfos.async == '0') {
                  var objPopup = {};
                  objPopup.popup = popupInfos;
                  objPopup.feature = feature;
                  objPopup.layer = layer; // Call the popup hook for plugin specific popup content

                  if (window.c4gMapsHooks !== undefined && (0, _typeof2["default"])(window.c4gMapsHooks.proxy_fillPopup) === 'object') {
                    _c4gMapsUtils.utils.callHookFunctions(window.c4gMapsHooks.proxy_fillPopup, objPopup);
                  }

                  this.config.mapController.proxy.setPopup(objPopup);
                } else {
                  jQuery.ajax({
                    dataType: "json",
                    url: this.api_infowindow_url + '/' + popupInfos.content,
                    done: function done(data) {
                      var popupInfo = {
                        async: popupInfos.async,
                        content: data.content,
                        popup: popupInfos.popup,
                        routing_link: popupInfos.routing_link
                      };
                      objPopup = {};
                      objPopup.popup = popupInfo;
                      objPopup.feature = feature;
                      objPopup.layer = layer; // Call the popup hook for plugin specific popup content

                      if (window.c4gMapsHooks !== undefined && (0, _typeof2["default"])(window.c4gMapsHooks.proxy_fillPopup) === 'object') {
                        _c4gMapsUtils.utils.callHookFunctions(window.c4gMapsHooks.proxy_fillPopup, objPopup);
                      }

                      this.setPopup(objPopup);
                    }
                  });
                }
              } else {
                window.c4gMapsPopup.popup.removeClass(_c4gMapsConstant.cssConstants.ACTIVE);
              }
            } else if (window && window.c4gMapsPopup && window.c4gMapsPopup.popup) {
              jQuery(window.c4gMapsPopup.popup).removeClass(_c4gMapsConstant.cssConstants.ACTIVE);
            }
          }

          if (this.config.autopick && this.config.mapController.geopicker && typeof this.config.mapController.geopicker.pick === 'function') {
            this.config.mapController.geopicker.pick(resultCoordinate);
          }
        } else {
          var langConstants = (0, _c4gMapsI18n.getLanguage)(this.options.mapController.data);
          alert(langConstants.SEARCH_NOT_FOUND);
        }

        if (this.results) {
          var _results = [];

          for (var i = 0; i < this.results.length; i++) {
            _results.push(this.results[i].display_name);
          }

          this.setState({
            results: _results,
            currentCoordinate: currentCoordinate,
            openResults: true,
            currentResult: _results[0]
          });
        }
      }
    }
  }, {
    key: "flyTo",
    value: function flyTo(map, location, zoomlevel, zoombounds, boundingbox, markResult, resultDuration, animate, animateDuration, mapView) {
      var duration = animateDuration;
      var zoom = zoomlevel;
      var parts = 2;
      var called = false;
      var extent;
      var scope = this;

      function callback(complete) {
        --parts;

        if (called) {
          return;
        }

        if (parts === 0 || !complete) {
          called = true;

          if (zoombounds && boundingbox && boundingbox[0] !== null && boundingbox[1] !== null && boundingbox[2] !== null && boundingbox[3] !== null) {
            // translate osm-extent to ol3-extent
            var osmExtent = [];
            osmExtent.push(parseFloat(boundingbox[2]));
            osmExtent.push(parseFloat(boundingbox[0]));
            osmExtent.push(parseFloat(boundingbox[3]));
            osmExtent.push(parseFloat(boundingbox[1]));
            extent = (0, _proj.transformExtent)(osmExtent, 'EPSG:4326', 'EPSG:3857');
            window.setTimeout(function () {
              var viewFit = mapView.fit(extent, map.getSize(), {
                minZoom: mapView.get('minZoom') || 2,
                maxZoom: zoom || mapView.get('maxZoom') || 18,
                duration: duration / 2,
                easing: _easing.easeOut
              });
            }, duration);
          }

          scope.completeSearch(markResult, animate, "bounce", animateDuration, location, resultDuration);
        }
      }

      map.getView().animate({
        center: location,
        duration: duration
      }, callback);
      map.getView().animate({
        zoom: zoom - 1,
        duration: duration / 2
      }, {
        zoom: zoom,
        duration: duration / 2
      }, callback);
    }
  }, {
    key: "completeSearch",
    value: function completeSearch(markResult, animate, zoomType, animationDuration, resultCoordinate, resultDuration) {
      // result marker & animation
      if (markResult) {
        var addMarker, markerSource, markerLayer, animateMarker;
        markerSource = new _source.Vector();
        var style = this.config.resultStyle;

        if (!style || style === "0") {
          style = [new _style.Style({
            image: new _style.Circle({
              radius: 7,
              snapToPixel: false,
              stroke: new _style.Stroke({
                color: 'rgba(200, 0, 0, ' + 0.9 + ')',
                width: 2,
                opacity: 0.9
              })
            })
          }), new _style.Style({
            image: new _style.Circle({
              radius: 20,
              snapToPixel: false,
              stroke: new _style.Stroke({
                color: 'rgba(200, 0, 0, ' + 0.9 + ')',
                width: 2,
                opacity: 0.9
              })
            })
          }), new _style.Style({
            image: new _style.Circle({
              radius: 33,
              snapToPixel: false,
              stroke: new _style.Stroke({
                color: 'rgba(200, 0, 0, ' + 0.9 + ')',
                width: 2,
                opacity: 0.9
              })
            })
          })];
        }

        markerLayer = new _layer.Vector({
          style: style,
          source: markerSource,
          zIndex: 99999
        });
        this.props.mapController.map.addLayer(markerLayer);

        addMarker = function addMarker() {
          markerSource.addFeature(new _ol.Feature(new _geom.Point(resultCoordinate)));
        };

        animateMarker = function animateMarker(feature) {
          var animationStep, start, duration, listenerKey;
          start = new Date().getTime();
          duration = resultDuration;

          animationStep = function animationStep(event) {
            var vectorContext, frameState, elapsed, elapsedRatio, radius, opacity, flashGeom;
            vectorContext = (0, _render.getVectorContext)(event);
            frameState = event.frameState;
            flashGeom = feature.getGeometry().clone();
            elapsed = frameState.time - start;
            elapsedRatio = elapsed / duration;
            radius = (0, _easing.linear)(1 - elapsedRatio) * 100;

            if (radius < 0) {
              radius = 0;
            }

            opacity = (0, _easing.linear)(elapsedRatio);
            var marker = new _style.Style();
            vectorContext.setStyle(marker);
            vectorContext.drawGeometry(flashGeom, null);

            if (elapsed > duration) {
              markerSource.clear();
              (0, _Observable.unByKey)(listenerKey);
              return;
            } // continue postrender animation


            frameState.animate = true;
          }; // end of "animationStep"


          listenerKey = markerLayer.on('postrender', animationStep);
        }; // end of "animateMarker"


        markerSource.on('addfeature', function (event) {
          animateMarker(event.feature);
        });

        if (animate) {
          if (zoomType === 'zoom') {
            window.setTimeout(addMarker, animationDuration / 2);
          } else {
            window.setTimeout(addMarker, animationDuration / 2);
          }
        } else {
          addMarker();
        }
      } // end of result marker & animation handling

    }
    /**
     * @TODO
     *
     * @param   {[type]}  location  [description]
     *
     * @return  {[type]}            [description]
     */

  }, {
    key: "zoomTo",
    value: function zoomTo(index) {
      var map, result, resultCoordinate, mapController, zoomType;
      var scope = this;
      mapController = this.props.mapController;
      map = mapController.map;
      var mapView = map.getView();
      var currentCoordinate = this.state.currentCoordinate;
      result = scope.results[index];
      resultCoordinate = (0, _proj.transform)([parseFloat(result.lon), parseFloat(result.lat)], 'EPSG:4326', 'EPSG:3857');

      if (this.config.animate) {
        var resolution = mapView.getResolution();
        var viewExtent = mapView.calculateExtent(map.getSize());

        if ((0, _extent.containsCoordinate)(viewExtent, resultCoordinate)) {
          zoomType = 'zoom';
        } else {
          if (Math.abs(currentCoordinate[0] - resultCoordinate[0]) > Math.abs(currentCoordinate[1] - resultCoordinate[1])) {
            var coordDif = Math.abs(currentCoordinate[0] - resultCoordinate[0]);
            var difContext = (0, _extent.getWidth)(viewExtent);
          } else {
            coordDif = Math.abs(currentCoordinate[1] - resultCoordinate[1]);
            difContext = (0, _extent.getHeight)(viewExtent);
          }

          if (coordDif > 0) {
            resolution *= coordDif / difContext;
          }

          zoomType = 'bounce';
        }

        this.flyTo(map, resultCoordinate, this.config.zoomlevel, this.config.zoombounds, result.bounding_box, this.config.markResult, this.config.resultDuration, this.config.animate, this.config.animateDuration, mapView);
      } else {
        this.completeSearch(this.config.markResult, this.config.animate, zoomType, this.config.animateDuration, resultCoordinate, this.config.resultDuration);
        map.getView().setCenter(resultCoordinate);

        if (this.config.zoomlevel >= 0) {
          map.getView().setZoom(this.config.zoomlevel);
        }
      }
    }
  }]);
  return GeoSearch;
}(_react.Component);

exports.default = GeoSearch;

/***/ }),

/***/ "./Resources/public/js/components/c4g-maps.jsx":
/*!*****************************************************!*\
  !*** ./Resources/public/js/components/c4g-maps.jsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _c4gMapsProxy = __webpack_require__(/*! ../c4g-maps-proxy */ "./Resources/public/js/c4g-maps-proxy.js");

var _c4gMapsConstant = __webpack_require__(/*! ../c4g-maps-constant */ "./Resources/public/js/c4g-maps-constant.js");

var _c4gMapsMiscSpinner = __webpack_require__(/*! ../c4g-maps-misc-spinner */ "./Resources/public/js/c4g-maps-misc-spinner.js");

var _c4gMapsMiscMaphover = __webpack_require__(/*! ../c4g-maps-misc-maphover */ "./Resources/public/js/c4g-maps-misc-maphover.js");

var _layer = __webpack_require__(/*! ol/layer */ "./node_modules/ol/layer.js");

var _c4gMapsUtils = __webpack_require__(/*! ../c4g-maps-utils */ "./Resources/public/js/c4g-maps-utils.js");

var _c4gMapsControls = __webpack_require__(/*! ../c4g-maps-controls */ "./Resources/public/js/c4g-maps-controls.js");

var _c4gMapsI18n = __webpack_require__(/*! ../c4g-maps-i18n */ "./Resources/public/js/c4g-maps-i18n.js");

var _ol = __webpack_require__(/*! ol */ "./node_modules/ol/index.js");

var _proj = __webpack_require__(/*! ol/proj */ "./node_modules/ol/proj.js");

var _interaction = __webpack_require__(/*! ol/interaction */ "./node_modules/ol/interaction.js");

var _control = __webpack_require__(/*! ol/control */ "./node_modules/ol/control.js");

var _geom = __webpack_require__(/*! ol/geom */ "./node_modules/ol/geom.js");

var _extent = __webpack_require__(/*! ol/extent */ "./node_modules/ol/extent.js");

var _condition = __webpack_require__(/*! ol/events/condition */ "./node_modules/ol/events/condition.js");

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _c4gGeosearch = _interopRequireDefault(__webpack_require__(/*! ./c4g-geosearch.jsx */ "./Resources/public/js/components/c4g-geosearch.jsx"));

var _Tile = _interopRequireDefault(__webpack_require__(/*! ol/layer/Tile */ "./node_modules/ol/layer/Tile.js"));

var _routingConstantI18nEn = __webpack_require__(/*! ./../routing-constant-i18n-en */ "./Resources/public/js/routing-constant-i18n-en.js");

var _routingConstantI18nDe = __webpack_require__(/*! ./../routing-constant-i18n-de */ "./Resources/public/js/routing-constant-i18n-de.js");

var _c4gRouterView = __webpack_require__(/*! ./c4g-router-view.jsx */ "./Resources/public/js/components/c4g-router-view.jsx");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var FeatureFilter = /*#__PURE__*/_react["default"].lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_opening_hours_build_opening_hours_js"), __webpack_require__.e("Resources_public_js_components_c4g-feature-filter_jsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./c4g-feature-filter.jsx */ "./Resources/public/js/components/c4g-feature-filter.jsx"));
});

var BaselayerSwitcher = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "Resources_public_js_components_c4g-baselayerswitcher_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./c4g-baselayerswitcher.jsx */ "./Resources/public/js/components/c4g-baselayerswitcher.jsx"));
});

var StarboardPanel = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "Resources_public_js_components_c4g-starboard-panel_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./c4g-starboard-panel.jsx */ "./Resources/public/js/components/c4g-starboard-panel.jsx"));
});

var Infopage = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "Resources_public_js_components_c4g-infopage_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./c4g-infopage.jsx */ "./Resources/public/js/components/c4g-infopage.jsx"));
});

var Measuretools = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "Resources_public_js_components_c4g-measuretools_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./c4g-measuretools.jsx */ "./Resources/public/js/components/c4g-measuretools.jsx"));
});

var Permalink = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "Resources_public_js_components_c4g-permalink_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./c4g-permalink.jsx */ "./Resources/public/js/components/c4g-permalink.jsx"));
});

var Zoom = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "Resources_public_js_components_c4g-zoom_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./c4g-zoom.jsx */ "./Resources/public/js/components/c4g-zoom.jsx"));
});

var ZoomExtent = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "Resources_public_js_components_c4g-zoom-extent_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./c4g-zoom-extent.jsx */ "./Resources/public/js/components/c4g-zoom-extent.jsx"));
});

var ZoomHome = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "Resources_public_js_components_c4g-zoom-home_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./c4g-zoom-home.jsx */ "./Resources/public/js/components/c4g-zoom-home.jsx"));
});

var ZoomPosition = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "Resources_public_js_components_c4g-zoom-position_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./c4g-zoom-position.jsx */ "./Resources/public/js/components/c4g-zoom-position.jsx"));
});

var Grid = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "Resources_public_js_components_c4g-grid_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./c4g-grid.jsx */ "./Resources/public/js/components/c4g-grid.jsx"));
});

var Rotate = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "Resources_public_js_components_c4g-rotate_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./c4g-rotate.jsx */ "./Resources/public/js/components/c4g-rotate.jsx"));
});

var Fullscreen = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "Resources_public_js_components_c4g-fullscreen_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./c4g-fullscreen.jsx */ "./Resources/public/js/components/c4g-fullscreen.jsx"));
});

var Print = /*#__PURE__*/_react["default"].lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_dom-to-image-more_src_dom-to-image-more_js-node_modules_file-saver_dist_-378b1b"), __webpack_require__.e("Resources_public_js_components_c4g-print_jsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./c4g-print.jsx */ "./Resources/public/js/components/c4g-print.jsx"));
});

var OverviewMap = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "Resources_public_js_components_c4g-overviewmap_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./c4g-overviewmap.jsx */ "./Resources/public/js/components/c4g-overviewmap.jsx"));
}); //const RouterView = React.lazy(() => import("./c4g-router-view.jsx"));


var EditorComponent = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "Resources_public_js_components_c4g-editor-component_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./c4g-editor-component.jsx */ "./Resources/public/js/components/c4g-editor-component.jsx"));
});

// import {EditorComponent} from "./c4g-editor-component.jsx";
var langRouteConstants = {};
var containerAddresses = {
  arrFromPositions: [],
  arrFromNames: [],
  arrToPositions: [],
  arrToNames: [],
  arrOverPositions: {},
  arrOverNames: {}
};
var langConstants = {};
'use strict';

var MapController = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(MapController, _Component);

  var _super = _createSuper(MapController);

  /**
   * [MapController description]
   * @param {json-object}  mapData  Object to configure con4gis-maps.
   *                                See "docs/mapData-values.md"
   *                                to get a list of valid values for this object.
   */
  function MapController(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, MapController);
    _this = _super.call(this, props); //---

    var mapData = props.mapData;
    _this.state = {
      objLayers: [],
      arrLayerStates: [],
      openComponent: null,
      objTabLayers: [],
      styleData: {},
      arrTabLayerStates: []
    };
    _this.setObjLayers = _this.setObjLayers.bind((0, _assertThisInitialized2["default"])(_this));
    _this.setLayerStates = _this.setLayerStates.bind((0, _assertThisInitialized2["default"])(_this));
    _this.changeActiveLayers = _this.changeActiveLayers.bind((0, _assertThisInitialized2["default"])(_this));
    _this.setTabStates = _this.setTabStates.bind((0, _assertThisInitialized2["default"])(_this));
    _this.setLocStyles = _this.setLocStyles.bind((0, _assertThisInitialized2["default"])(_this));
    _this.changeCollapseState = _this.changeCollapseState.bind((0, _assertThisInitialized2["default"])(_this));
    _this.map = null;
    langConstants = (0, _c4gMapsI18n.getLanguage)(mapData);
    var self = (0, _assertThisInitialized2["default"])(_this),
        permalink = false,
        minZoom,
        maxZoom,
        view,
        geoLocation,
        controls = [],
        interactions = [],
        displayAllLocations,
        domMapDiv,
        kinetic,
        starboard_label,
        enableStarboard = true; //--

    mapData = jQuery.extend({
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
      geosearch: {}
    }, mapData);

    if (mapData.calc_extent === 'LOCATIONS' || mapData.calc_extent === 'CENTERLOCS') {
      mapData = jQuery.extend({
        min_gap: 25
      }, mapData);
    } // center


    mapData.center = jQuery.extend({
      lat: 52.22,
      lon: 9.43,
      rotation: 0,
      zoom: 6
    }, mapData.center); // attribution

    mapData.attribution = jQuery.extend({
      enable: true,
      collapsed: false,
      collapsible: true
    }, mapData.attribution); // geosearch

    mapData.geosearch = jQuery.extend({
      enable: false,
      div: false
    }, mapData.geosearch); // permalink

    mapData.permalink = jQuery.extend({
      enable: false,
      get_parameter: false
    }, mapData.permalink);
    _this.data = mapData;

    if (mapData.addIdToDiv) {
      mapData.mapDiv += '_' + mapData.mapId;
    } // PHPStorm marks this as error, but it is none
    // This is needed for preventing an error with the OSM-Overpass API
    // which occurs when MooTools is loaded


    if (window.MooTools && Browser.Document) {
      Document = Browser.Document;
    } // check permalink


    if (mapData.permalink.enable) {
      permalink = _c4gMapsUtils.utils.getUrlParam(mapData.permalink.get_parameter);

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
            mapData.layers = permalink[5].split(':'); // decode deltaEncoding

            mapData.layers = _c4gMapsUtils.utils.deltaDecode(mapData.layers);
            break;

          case 3:
            permalink[0] = parseFloat(permalink[0]);
            mapData.center.lon = !isNaN(permalink[0]) ? permalink[0] : mapData.center.lon;
            permalink[1] = parseFloat(permalink[1]);
            mapData.center.lat = !isNaN(permalink[1]) ? permalink[1] : mapData.center.lat;
            permalink[2] = parseInt(permalink[2], 10);
            mapData.center.zoom = !isNaN(permalink[2]) ? permalink[2] : mapData.center.zoom; // disable zooming to all locations

            mapData.calc_extent = "CENTERZOOM";
            break;

          case 2:
            // baselayer and layers only
            permalink[0] = parseInt(permalink[0], 10);
            mapData.baselayer = !isNaN(permalink[0]) ? permalink[0] : mapData.baselayer;
            mapData.layers = permalink[1].split(':'); // decode deltaEncoding

            mapData.layers = _c4gMapsUtils.utils.deltaDecode(mapData.layers);
            break;

          case 1:
            // layers only
            mapData.layers = permalink[0].split(':'); // decode deltaEncoding

            mapData.layers = _c4gMapsUtils.utils.deltaDecode(mapData.layers);
            break;

          default:
            // invalid count of permalink parameters
            permalink = false;
            mapData.layers = false;
        }
      } else {
        // just to make sure this var is really "false"
        permalink = false;
      }
    } else {
      permalink = _c4gMapsUtils.utils.getUrlParam(mapData.permalink.get_parameter);

      if (permalink) {
        permalink = permalink.split('/');

        if (permalink.length === 3) {
          permalink[0] = parseFloat(permalink[0]);
          mapData.center.lon = !isNaN(permalink[0]) ? permalink[0] : mapData.center.lon;
          permalink[1] = parseFloat(permalink[1]);
          mapData.center.lat = !isNaN(permalink[1]) ? permalink[1] : mapData.center.lat;
          permalink[2] = parseInt(permalink[2], 10);
          mapData.center.zoom = !isNaN(permalink[2]) ? permalink[2] : mapData.center.zoom; // disable zooming to all locations

          mapData.calc_extent = "CENTERZOOM";
        } else if (permalink.length === 4) {
          permalink[0] = parseFloat(permalink[0]);
          mapData.center.lon = !isNaN(permalink[0]) ? permalink[0] : mapData.center.lon;
          permalink[1] = parseFloat(permalink[1]);
          mapData.center.lat = !isNaN(permalink[1]) ? permalink[1] : mapData.center.lat;
          permalink[2] = parseInt(permalink[2], 10);
          mapData.center.zoom = !isNaN(permalink[2]) ? permalink[2] : mapData.center.zoom;
          permalink[3] = parseInt(permalink[3], 10);
          mapData.default_baselayer = permalink[3]; // disable zooming to all locations

          mapData.calc_extent = "CENTERZOOM";
        }

        permalink = false;
      }
    }

    _this.proxy = new _c4gMapsProxy.MapProxy({
      mapController: (0, _assertThisInitialized2["default"])(_this)
    });
    _this.components = _this.components || {};
    _this.hideOtherComponents = _this.hideOtherComponents.bind((0, _assertThisInitialized2["default"])(_this));
    _this.hideOtherBottomComponents = _this.hideOtherBottomComponents.bind((0, _assertThisInitialized2["default"])(_this)); // add view observer to update permalink on center change, if a permalink exists
    // use other permalink variable to avoid interference with the actual permalink mechanism

    window.c4gMapsHooks.map_center_changed = window.c4gMapsHooks.map_center_changed || [];
    window.c4gMapsHooks.map_center_changed.push(function (center) {
      var currentPermalink = _c4gMapsUtils.utils.getUrlParam(mapData.permalink.get_parameter);

      if (currentPermalink) {
        if (currentPermalink) {
          currentPermalink = currentPermalink.split('/');

          if (currentPermalink.length >= 3) {
            center = (0, _proj.transform)(center, "EPSG:3857", "EPSG:4326");
            currentPermalink[0] = center[0];
            currentPermalink[1] = center[1];

            _c4gMapsUtils.utils.setUrlParam(currentPermalink.join('/'), mapData.permalink.get_parameter, true);
          }
        }
      }
    });
    window.c4gMapsHooks.hook_map_zoom = window.c4gMapsHooks.hook_map_zoom || [];
    window.c4gMapsHooks.hook_map_zoom.push(function (proxy) {
      var currentPermalink = _c4gMapsUtils.utils.getUrlParam(mapData.permalink.get_parameter);

      if (currentPermalink) {
        if (currentPermalink) {
          currentPermalink = currentPermalink.split('/');

          if (currentPermalink.length >= 3) {
            currentPermalink[2] = parseInt(view.getZoom(), 10) || currentPermalink[2];

            _c4gMapsUtils.utils.setUrlParam(currentPermalink.join('/'), mapData.permalink.get_parameter, true);
          }
        }
      }
    });

    if (mapData.permalink.withoutGenerator) {
      var currentPermalink = _c4gMapsUtils.utils.getUrlParam(mapData.permalink.get_parameter);

      if (!currentPermalink && mapData.center) {
        var _permalink = [];

        _permalink.push(mapData.center.lon);

        _permalink.push(mapData.center.lat);

        _permalink.push(mapData.center.zoom);

        _c4gMapsUtils.utils.setUrlParam(_permalink.join('/'), mapData.permalink.get_parameter, true);
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
      if (_c4gMapsUtils.utils.getValue('lon') && _c4gMapsUtils.utils.getValue('lat')) {
        mapData.center.lon = _c4gMapsUtils.utils.getValue('lon');
        mapData.center.lat = _c4gMapsUtils.utils.getValue('lat');
      }

      if (_c4gMapsUtils.utils.getValue('zoom')) {
        mapData.center.zoom = _c4gMapsUtils.utils.getValue('zoom');
      }
    }

    if (mapData.restr_bottomleft_lon && mapData.restr_bottomleft_lat && mapData.restr_topright_lon && mapData.restr_topright_lat) {
      var extent = [parseFloat(mapData.restr_bottomleft_lon), parseFloat(mapData.restr_bottomleft_lat), parseFloat(mapData.restr_topright_lon), parseFloat(mapData.restr_topright_lat)];
      extent = (0, _proj.transformExtent)(extent, "EPSG:4326", "EPSG:3857");
      view = new _ol.View({
        extent: extent,
        center: (0, _proj.transform)([parseFloat(mapData.center.lon), parseFloat(mapData.center.lat)], 'EPSG:4326', 'EPSG:3857'),
        zoom: parseFloat(mapData.center.zoom),
        minZoom: parseInt(minZoom, 10),
        maxZoom: parseInt(maxZoom, 10),
        rotation: parseFloat(mapData.center.rotation)
      });
    } else {
      view = new _ol.View({
        center: (0, _proj.transform)([parseFloat(mapData.center.lon), parseFloat(mapData.center.lat)], 'EPSG:4326', 'EPSG:3857'),
        zoom: parseFloat(mapData.center.zoom),
        minZoom: parseInt(minZoom, 10),
        maxZoom: parseInt(maxZoom, 10),
        rotation: parseFloat(mapData.center.rotation)
      });
    } // check userposition


    if (mapData.geolocation && !permalink) {
      geoLocation = new _ol.Geolocation({
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

            if (self.$overlaycontainer_stopevent) {// utils.redrawMapView(self);
            }
          }
        }
      });
    } // enable default Controls/Interactions if there is no profile
    // [note]: maybe change this in the future? -> "no default"-option?


    if (!mapData.profile) {
      controls = (0, _control.defaults)();
      interactions = (0, _interaction.defaults)();
    } // set default base layer when backend geopicker is enabled


    if (mapData.geopicker && mapData.geopicker.type === "backend") {
      if (mapData.default_baselayer) {
        _this.proxy.hook_baselayer_loaded.push(function (baselayerIds) {
          if (self.proxy.baselayerController.arrBaselayers.hasOwnProperty(mapData.default_baselayer)) {
            self.proxy.baselayerController.showBaseLayer(mapData.default_baselayer);
          }
        });
      } // end inner if


      _this.map = new _ol.Map({
        controls: controls,
        interactions: interactions,
        layers: [new _layer.Group({
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
        _this.proxy.hook_baselayer_loaded.push(function (baselayerIds) {
          if (mapData.baselayer && baselayerIds.indexOf(mapData.baselayer.toString()) > -1) {
            mapData.default_baselayer = mapData.baselayer;
          }

          if (mapData.caching) {
            if (_c4gMapsUtils.utils.getValue('baselayer')) {
              mapData.default_baselayer = _c4gMapsUtils.utils.getValue('baselayer');
            }
          }

          self.proxy.baselayerController.showBaseLayer(mapData.default_baselayer);
        });
      }

      _this.map = new _ol.Map({
        controls: controls,
        interactions: interactions,
        layers: [new _layer.Group({
          title: 'Base maps',
          layers: [],
          checkSum: 'baseMapsLayer'
        })],
        loadTilesWhileAnimating: true,
        target: mapData.mapDiv,
        view: view
      });
    }

    mapData.map = _this.map; // set map-size and -margin

    domMapDiv = document.getElementById(mapData.mapDiv);

    if (!domMapDiv) {
      domMapDiv = document.getElementById("#" + mapData.mapDiv);

      if (!domMapDiv) {
        domMapDiv = document.getElementById("." + mapData.mapDiv);
      }
    }

    if (domMapDiv && domMapDiv.style) {
      if (mapData.width) {
        if (mapData.margin) {
          var arrMargins = mapData.margin.split(" ");
          var rightMargin = 0;
          var leftMargin = 0;

          switch (arrMargins.length) {
            case 4:
              rightMargin = arrMargins[1];
              leftMargin = arrMargins[3];
              break;

            case 2:
              rightMargin = arrMargins[1];
              leftMargin = arrMargins[1];
              break;

            case 1:
              rightMargin = arrMargins[0];
              leftMargin = arrMargins[0];
              break;
          } // "==" is correct here since we want to check number and string


          if (leftMargin == 0) {
            leftMargin += "px";
          }

          if (rightMargin == 0) {
            rightMargin += "px";
          }

          domMapDiv.style.width = "calc(" + mapData.width + " - " + leftMargin + " - " + rightMargin + ")";
        } else {
          domMapDiv.style.width = mapData.width;
        }
      }

      if (mapData.height) {
        domMapDiv.style.height = mapData.height;
      } else {
        if (mapData.geopicker && mapData.geopicker.type === "backend") {
          var fieldsetHeight = domMapDiv.parentElement.parentElement.offsetHeight;
          domMapDiv.style.height = 'calc(100vh - ' + fieldsetHeight + 'px)';
          domMapDiv.style.minHeight = '480px';
          domMapDiv.style.maxWidth = '100vw';
        } else {
          if (domMapDiv.parentElement && domMapDiv.parentElement.parentElement && !domMapDiv.parentElement.parentElement.offsetHeight) {
            domMapDiv.style.height = '100vh';
          } else if (domMapDiv.parentElement && domMapDiv.parentElement.parentElement) {
            var height = domMapDiv.parentElement.parentElement.offsetHeight;

            if (height < 320) {
              height = 320; //minimal default value if not set in map configuration
            }

            domMapDiv.style.height = height + 'px';
          }
        }
      }

      if (mapData.margin) {
        domMapDiv.style.padding = mapData.margin;
      }
    } else {
      console.warn('can not get element by id mapData.mapDiv');
      return (0, _possibleConstructorReturn2["default"])(_this);
    } // save overlaycontainer


    _this.$overlaycontainer_stopevent = jQuery('#' + mapData.mapDiv + ' .' + _c4gMapsConstant.cssConstants.OL_OVERLAYCONTAINER_SE);

    _this.map.updateSize();

    _this.proxy.initialize(); // this.proxy.loadBaseLayers();
    // this.proxy.loadLayers();
    // ---
    // add Spinner


    _this.spinner = new _c4gMapsMiscSpinner.Spinner({
      className: _c4gMapsConstant.cssConstants.LARGE
    }); // add mapHover

    _this.mapHover = new _c4gMapsMiscMaphover.MapHover({
      mapController: (0, _assertThisInitialized2["default"])(_this)
    }); // add interactions ===
    //
    // mouse navigation

    if (mapData.mouse_nav) {
      // drag pan and kinetic scrolling
      if (mapData.mouse_nav.drag_pan) {
        kinetic = mapData.mouse_nav.kinetic ? new _ol.Kinetic(-0.005, 0.05, 100) : null;

        _this.map.addInteraction(new _interaction.DragPan({
          kinetic: kinetic
        }));
      } // mousewheel zoom


      if (mapData.mouse_nav.wheel_zoom) {
        _this.map.addInteraction(new _interaction.MouseWheelZoom());
      } // doubleclick zoom


      if (mapData.mouse_nav.doubleclick_zoom) {
        _this.map.addInteraction(new _interaction.DoubleClickZoom());
      } // box zoom


      if (mapData.mouse_nav.drag_zoom) {
        _this.map.addInteraction(new _interaction.DragZoom({
          condition: _condition.shiftKeyOnly
        }));
      } // drag rotate & zoom


      if (mapData.rotate) {
        var customCondition = function customCondition(mapBrowserEvent) {
          var browserEvent = mapBrowserEvent.originalEvent;
          return browserEvent.ctrlKey && browserEvent.shiftKey;
        };

        _this.map.addInteraction(new _interaction.DragRotateAndZoom({
          condition: customCondition
        }));
      }
    } // touch navigation


    if (mapData.touch_nav) {
      // rotate (pinch)
      if (mapData.touch_nav.rotate) {
        _this.map.addInteraction(new _interaction.PinchRotate());
      } // zoom (pinch)


      if (mapData.touch_nav.zoom) {
        _this.map.addInteraction(new _interaction.PinchZoom({
          constrainResolution: true
        }));
      }
    } // keyboard navigation


    if (mapData.keyboard_nav) {
      // pan (arrow keys)
      if (mapData.keyboard_nav.pan) {
        _this.map.addInteraction(new _interaction.KeyboardPan());
      } // zoom ("+" and "-" key)


      if (mapData.keyboard_nav.zoom) {
        _this.map.addInteraction(new _interaction.KeyboardZoom());
      }
    } // ===
    // add controls ===


    _this.mapsControls = new _c4gMapsControls.MapsControls((0, _assertThisInitialized2["default"])(_this));

    _this.mapsControls.init(); // add container for react components


    if (mapData.layerswitcher.enable) {
      if (mapData.starboard.div) {
        _this.reactContainer = document.querySelector("." + mapData.starboard.div);

        if (!_this.reactContainer) {
          _this.reactContainer = document.createElement('div');
          _this.reactContainer.className = "c4g-sideboard c4g-starboard-container ol-unselectable";

          _this.$overlaycontainer_stopevent.append(_this.reactContainer);
        } else {
          _this.reactContainer.className += " c4g-external c4g-starboard-container ol-unselectable";
        }
      } else {
        _this.reactContainer = document.createElement('div');
        _this.reactContainer.className = "c4g-sideboard c4g-starboard-container ol-unselectable";

        _this.$overlaycontainer_stopevent.append(_this.reactContainer);
      }

      if (mapData.starboard.open) {
        _this.reactContainer.className += " c4g-open";
      } else {
        _this.reactContainer.className += " c4g-close";
      }
    }

    if (mapData.baselayerswitcher.enable) {
      if (mapData.baselayerswitcher.div) {
        _this.baselayerContainer = document.querySelector("." + mapData.baselayerswitcher.div);

        if (!_this.baselayerContainer) {
          _this.baselayerContainer = document.createElement('div');
          _this.baselayerContainer.className = "c4g-sideboard c4g-baselayer-container ol-unselectable";

          _this.$overlaycontainer_stopevent.append(_this.baselayerContainer);
        } else {
          _this.baselayerContainer.className += " c4g-external c4g-baselayer-container ol-unselectable";
        }
      } else {
        _this.baselayerContainer = document.createElement('div');
        _this.baselayerContainer.className = "c4g-sideboard c4g-baselayer-container ol-unselectable";

        _this.$overlaycontainer_stopevent.append(_this.baselayerContainer);
      }

      if (mapData.starboard.open) {
        _this.baselayerContainer.className += " c4g-open";
      } else {
        _this.baselayerContainer.className += " c4g-close";
      }
    } // feature filter


    if (mapData.filterDiv) {
      mapData.filterDiv = mapData.filterDiv[0] === "." || mapData.filterDiv[0] === "#" ? mapData.filterDiv : "." + mapData.filterDiv;
      _this.filterContainer = document.createElement("div");

      _reactDom["default"].render( /*#__PURE__*/_react["default"].createElement(_react.Suspense, {
        fallback: /*#__PURE__*/_react["default"].createElement("div", null, "\"loading...\"")
      }, /*#__PURE__*/_react["default"].createElement(FeatureFilter, {
        target: document.querySelector(mapData.filterDiv),
        mapController: (0, _assertThisInitialized2["default"])(_this),
        direction: "top",
        className: "c4g-feature-filter"
      })), _this.filterContainer);

      $(mapData.filterDiv).append(_this.filterContainer);
    } // infopage container


    if (mapData.legend.enable) {
      if (mapData.legend.div) {
        _this.infoPageContainer = document.querySelector("." + mapData.legend.div);

        if (!_this.infoPageContainer) {
          _this.infoPageContainer = document.createElement('div');
          _this.infoPageContainer.className = "c4g-sideboard c4g-infopage-container ol-unselectable c4g-close";

          _this.$overlaycontainer_stopevent.append(_this.infoPageContainer);
        } else {
          _this.infoPageContainer.className += " c4g-external c4g-infopage-container ol-unselectable";
        }
      } else {
        _this.infoPageContainer = document.createElement('div');
        _this.infoPageContainer.className = "c4g-sideboard c4g-infopage-container ol-unselectable c4g-close";

        _this.$overlaycontainer_stopevent.append(_this.infoPageContainer);
      }
    } // measuretools container


    if (mapData.measuretools.enable) {
      if (mapData.measuretools.div) {
        _this.measuretoolsContainer = document.querySelector("." + mapData.measuretools.div);

        if (!_this.measuretoolsContainer) {
          _this.measuretoolsContainer = document.createElement('div');
          _this.measuretoolsContainer.className = "c4g-sideboard c4g-measuretools-container ol-unselectable c4g-close";

          _this.$overlaycontainer_stopevent.append(_this.measuretoolsContainer);
        } else {
          _this.measuretoolsContainer.className += " c4g-external c4g-measuretools-container ol-unselectable";
        }
      } else {
        _this.measuretoolsContainer = document.createElement('div');
        _this.measuretoolsContainer.className = "c4g-sideboard c4g-measuretools-container ol-unselectable c4g-close";

        _this.$overlaycontainer_stopevent.append(_this.measuretoolsContainer);
      }
    } // permalink container


    if (mapData.permalink.enable) {
      if (mapData.permalink.div) {
        _this.permalinkContainer = document.querySelector(".c4g-external-permalink-container");

        if (!_this.permalinkContainer) {
          _this.permalinkContainer = document.createElement('div');
          _this.permalinkContainer.className = "c4g-sideboard c4g-permalink-container ol-unselectable c4g-close";

          _this.$overlaycontainer_stopevent.append(_this.permalinkContainer);
        } else {
          _this.permalinkContainer.className += " c4g-external";
        }
      } else {
        _this.permalinkContainer = document.createElement('div');
        _this.permalinkContainer.className = "c4g-sideboard c4g-permalink-container ol-unselectable c4g-close";

        _this.$overlaycontainer_stopevent.append(_this.permalinkContainer);
      }
    }

    if (mapData.overviewmap) {
      _this.overviewContainer = document.createElement("div");
      _this.overviewContainer.className = "c4g-sideboard c4g-overviewmap-container c4g-close";

      _this.$overlaycontainer_stopevent.append(_this.overviewContainer);
    } // @ToDo mapData.additionalPanel is always true, because it is set as an new object in the beginning. Therefore the second parameter of the boolean is requested, which throws an error
    // additionalPanel is furthermore not found anywhere in Maps and should be loaded over a hook
    // starboard


    if (mapData.geopicker && mapData.geopicker.type === "backend") {
      enableStarboard = false;
    } // popup margin
    //this.leftSlideElements.push('.ol-overlay-container');
    //this.rightSlideElements.push('.ol-overlay-container');
    // if (typeof Starboard === 'function' && enableStarboard && !this.controls.starboard) {
    //   // this.initializeStarboard();
    // }
    //themeData


    if (mapData.themeData) {
      domMapDiv = document.getElementById(mapData.mapDiv);

      if (mapData.themeData['useglobal']) {
        domMapDiv = document.getElementById('wrapper');
      }

      var mapWidth = "100%";
      var mapHeight = "100%";

      if (mapData.width) {
        mapWidth = mapData.width;
      }

      if (mapData.height) {
        mapHeight = mapData.height;
      } else {
        var divHeight = domMapDiv && domMapDiv.offsetHeight ? domMapDiv.offsetHeight : false;

        if (!divHeight) {
          mapHeight = "100vh";
        } else {
          mapHeight = '100%';
        }
      }

      if (domMapDiv && domMapDiv.style) {
        domMapDiv.style.setProperty('--map-height', mapHeight);
        domMapDiv.style.setProperty('--map-width', mapWidth);
      }

      if (mapData.themeData['maincolor']) {
        var mainColor = _c4gMapsUtils.utils.getRgbaFromHexAndOpacity(mapData.themeData['maincolor'], mapData.themeData['mainopacity']);

        var fontColor = _c4gMapsUtils.utils.getRgbaFromHexAndOpacity(mapData.themeData['fontcolor'], mapData.themeData['fontopacity']);

        var shadowColor = _c4gMapsUtils.utils.getRgbaFromHexAndOpacity(mapData.themeData['shadowcolor'], mapData.themeData['shadowopacity']);

        var popupMainColor = _c4gMapsUtils.utils.getRgbaFromHexAndOpacity(mapData.themeData['popupMaincolor'], mapData.themeData['popupMainopacity']);

        var popupFontColor = _c4gMapsUtils.utils.getRgbaFromHexAndOpacity(mapData.themeData['popupFontcolor'], mapData.themeData['popupFontopacity']);

        if (domMapDiv && domMapDiv.style) {
          domMapDiv.style.setProperty('--main-color', mainColor);
          domMapDiv.style.setProperty('--font-color', fontColor);
          domMapDiv.style.setProperty('--pu-main-color', popupMainColor);
          domMapDiv.style.setProperty('--pu-font-color', popupFontColor);
          domMapDiv.style.setProperty('--shadow-color', shadowColor);
        }
      }

      if (domMapDiv && mapData.themeData['buttonradius']) {
        domMapDiv.style.setProperty('--button-radius-percent', mapData.themeData['buttonradius'] + '%');
        domMapDiv.style.setProperty('--button-radius-pixel', mapData.themeData['buttonradius'] + 'px');
      }

      if (domMapDiv && mapData.themeData['buttonsize']) {
        domMapDiv.style.setProperty('--button-size-pixel', mapData.themeData['buttonsize'] + 'px');
      }

      if (domMapDiv && mapData.themeData['fontsize']) {
        domMapDiv.style.setProperty('--button-fontsize-pixel', mapData.themeData['fontsize'] + 'px');
      }

      if (domMapDiv && mapData.themeData['popupMaxWidth']) {
        domMapDiv.style.setProperty('--popup-max-width', mapData.themeData['popupMaxWidth'] + '%');
      }
    }

    var scope = (0, _assertThisInitialized2["default"])(_this);

    _this.map.on("change:size", function () {
      scope.setState({});

      if (scope.map && scope.map.getSize()) {
        domMapDiv.style.setProperty('--map-height', scope.map.getSize()[1] + "px");
      }
    });

    return _this;
  }

  (0, _createClass2["default"])(MapController, [{
    key: "setLayersInitial",
    value: function setLayersInitial(objLayers, arrLayers) {
      this.setState({
        objLayers: objLayers,
        arrLayerStates: arrLayers
      });
    }
  }, {
    key: "setObjLayers",
    value: function setObjLayers(objLayers) {
      this.setState({
        objLayers: objLayers
      });
    }
  }, {
    key: "setLocStyles",
    value: function setLocStyles(styleData) {
      this.setState({
        styleData: styleData
      });
    }
  }, {
    key: "setLayerStates",
    value: function setLayerStates(arrLayerStates) {
      if (this._isMounted) {
        this.setState({
          arrLayerStates: arrLayerStates
        });
      }
    }
  }, {
    key: "setLayerStateWithId",
    value: function setLayerStateWithId(id, active) {
      var arrLayerStates = this.state.arrLayerStates;

      for (var i in arrLayerStates) {
        if (arrLayerStates.hasOwnProperty(i)) {
          arrLayerStates[i] = this.getLayerStateWithId(arrLayerStates[i], id, active);
        }
      }

      this.setState({
        arrLayerStates: arrLayerStates
      });
    }
  }, {
    key: "getLayerStateWithId",
    value: function getLayerStateWithId(layerState, id, active) {
      if (layerState.id === id) {
        layerState.active = active;
      }

      for (var i in layerState.childStates) {
        if (layerState.childStates.hasOwnProperty(i)) {
          layerState.childStates[i] = this.getLayerStateWithId(layerState.childStates[i], id, active);
        }
      }

      return layerState;
    }
  }, {
    key: "changeActiveLayers",
    value: function changeActiveLayers(baseLayerId) {
      var newLayerState = this.state.arrLayerStates;

      for (var stateId in newLayerState) {
        if (newLayerState.hasOwnProperty(stateId)) {
          if (this.state.objLayers[stateId].activateWithBl !== "all") {
            var oldState = newLayerState[stateId].active;
            newLayerState[stateId].active = !!this.state.objLayers[stateId].activateWithBl.find(function (element) {
              return element === baseLayerId;
            });

            if (oldState !== newLayerState[stateId].active) {
              if (newLayerState[stateId].active) {
                this.proxy.layerController.show(this.state.objLayers[stateId].id, this.state.objLayers[stateId].features || this.state.objLayers[stateId].vectorLayer);
              } else {
                this.proxy.layerController.hide(this.state.objLayers[stateId].id, this.state.objLayers[stateId].features || this.state.objLayers[stateId].vectorLayer);
              }
            }
          }

          for (var childId in newLayerState[stateId].childStates) {
            if (newLayerState[stateId].childStates.hasOwnProperty(childId)) {
              newLayerState[stateId].childStates[childId] = this.changeActiveLayerChilds(newLayerState[stateId].childStates[childId], this.state.objLayers[stateId].childs[childId], baseLayerId);
            }
          }
        }
      }

      this.setState({
        arrLayerStates: newLayerState
      });
    }
  }, {
    key: "changeActiveLayerChilds",
    value: function changeActiveLayerChilds(childState, child, baseLayerId) {
      if (child.activateWithBl !== "all") {
        var oldState = childState.active;
        childState.active = !!child.activateWithBl.find(function (element) {
          return element === baseLayerId;
        });

        if (oldState !== childState.active) {
          if (childState.active) {
            this.proxy.layerController.show(child.id, child.features || child.vectorLayer);
          } else {
            this.proxy.layerController.hide(child.id, child.features || child.vectorLayer);
          }
        }
      }

      for (var stateId in childState.childStates) {
        if (childState.childStates.hasOwnProperty(stateId)) {
          childState.childStates[stateId] = this.changeActiveLayerChilds(childState.childStates[stateId], child.childs[stateId], baseLayerId);
        }
      }

      return childState;
    }
  }, {
    key: "setTabLayers",
    value: function setTabLayers(layers, states) {
      this.setState({
        objTabLayers: layers,
        arrTabLayerStates: states
      });
    }
  }, {
    key: "setTabStates",
    value: function setTabStates(states) {
      this.setState({
        arrTabLayerStates: states
      });
    }
  }, {
    key: "hideOtherComponents",
    value: function hideOtherComponents(objComponent) {
      var components = this.components;

      for (var key in components) {
        if (components.hasOwnProperty(key)) {
          if (components[key] && components[key] !== objComponent) {
            components[key].setState({
              open: false
            });
          }
        }
      }
    }
  }, {
    key: "changeCollapseState",
    value: function changeCollapseState(id, state) {
      var newState = this.state.arrLayerStates;
      newState[id] = state;
      this.setState({
        arrLayerStates: newState
      });
    }
  }, {
    key: "hideOtherBottomComponents",
    value: function hideOtherBottomComponents(objComponent) {
      var components = this.components;

      for (var key in components) {
        if (components.hasOwnProperty(key)) {
          if (components[key] && components[key] !== objComponent) {
            components[key].setState({
              openResults: false
            });
          }
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var scope = this;
      var mapData = this.data;
      var target = document.querySelector('#' + mapData.mapDiv + ' .c4g-control-container-top-left');
      var components = [{
        name: "layerswitcher",
        sort: mapData.layerswitcher.enable
      }, {
        name: "geosearch",
        sort: mapData.geosearch.enable
      }, {
        name: "legend",
        sort: mapData.legend.enable
      }, {
        name: "baselayerswitcher",
        sort: mapData.baselayerswitcher.enable
      }, {
        name: "measuretools",
        sort: mapData.measuretools.enable
      }, {
        name: "permalink",
        sort: mapData.permalink.enable
      }, {
        name: "zoom",
        sort: mapData.zoom
      }, {
        name: "zoomPosition",
        sort: mapData.zoomPosition
      }, {
        name: "zoomHome",
        sort: mapData.zoomHome
      }, {
        name: "zoomExtent",
        sort: mapData.zoomExtent
      }, {
        name: "fullscreen",
        sort: mapData.fullscreen
      }, {
        name: "print",
        sort: mapData.print
      }, {
        name: "rotate",
        sort: mapData.rotate
      }, {
        name: "graticule",
        sort: mapData.graticule
      }, {
        name: "overview",
        sort: mapData.overviewmap
      }, {
        name: "router",
        sort: mapData.router_enable
      }, {
        name: "editor",
        sort: mapData.editor.enable
      }];
      var sbPortal = "";

      if (mapData.layerswitcher.enable) {
        sbPortal = /*#__PURE__*/_reactDom["default"].createPortal( /*#__PURE__*/_react["default"].createElement(_react.Suspense, {
          fallback: /*#__PURE__*/_react["default"].createElement("div", null, "\"Loool")
        }, /*#__PURE__*/_react["default"].createElement(StarboardPanel, {
          ref: function ref(node) {
            _this2.components.starboard = node;
          },
          target: target,
          mapController: this,
          objLayers: this.state.objLayers,
          styleData: this.state.styleData,
          tabLayers: this.state.objTabLayers,
          tabStates: this.state.arrTabLayerStates,
          layerStates: this.state.arrLayerStates,
          parentCallback: this.setLayerStates,
          tabCallback: this.setTabStates,
          direction: "right",
          open: this.props.mapData.initial_open_comp === "starboard",
          changeCollapseState: this.changeCollapseState,
          external: this.reactContainer.className.indexOf("c4g-external") !== -1
        })), this.reactContainer);
      }

      var searchPortal = "";

      if (mapData.geosearch.enable) {
        var geoSearchOptions = this.createGeosearchOptions();

        geoSearchOptions.ref = function (node) {
          _this2.components.geosearch = node;
        };

        searchPortal = /*#__PURE__*/_reactDom["default"].createPortal( /*#__PURE__*/_react["default"].createElement(_c4gGeosearch["default"], geoSearchOptions), this.searchContainer);
      }

      var infoPortal = "";

      if (mapData.infopage && mapData.legend.enable) {
        infoPortal = /*#__PURE__*/_reactDom["default"].createPortal( /*#__PURE__*/_react["default"].createElement(_react.Suspense, {
          fallback: /*#__PURE__*/_react["default"].createElement("div", null, "\"LOOOL\"")
        }, /*#__PURE__*/_react["default"].createElement(Infopage, {
          ref: function ref(node) {
            _this2.components.infopage = node;
          },
          target: target,
          external: this.infoPageContainer.className.indexOf("c4g-external") !== -1,
          infoContent: mapData.infopage,
          mapController: this,
          open: mapData.initial_open_comp === "legend"
        })), this.infoPageContainer);
      }

      var blsPortal = "";

      if (mapData.baselayerswitcher.enable) {
        blsPortal = /*#__PURE__*/_reactDom["default"].createPortal( /*#__PURE__*/_react["default"].createElement(_react.Suspense, {
          fallback: /*#__PURE__*/_react["default"].createElement("div", null, "\"LOOOL\"")
        }, /*#__PURE__*/_react["default"].createElement(BaselayerSwitcher, {
          ref: function ref(node) {
            _this2.components.baselayerSwitcher = node;
          },
          target: target,
          open: mapData.initial_open_comp === "baselayers",
          changeActiveLayers: this.changeActiveLayers,
          external: this.baselayerContainer.className.indexOf("c4g-external") !== -1,
          mapController: this,
          baselayerController: this.proxy.baselayerController
        })), this.baselayerContainer);
      }

      var measurePortal = "";

      if (mapData.measuretools.enable) {
        measurePortal = /*#__PURE__*/_reactDom["default"].createPortal( /*#__PURE__*/_react["default"].createElement(_react.Suspense, {
          fallback: /*#__PURE__*/_react["default"].createElement("div", null, "\"Lool\"")
        }, /*#__PURE__*/_react["default"].createElement(Measuretools, {
          ref: function ref(node) {
            _this2.components.measuretools = node;
          },
          target: target,
          external: this.measuretoolsContainer.className.indexOf("c4g-external") !== -1,
          mapController: this,
          open: mapData.initial_open_comp === "measuretools"
        })), this.measuretoolsContainer);
      }

      var permaPortal = "";

      if (mapData.permalink.enable) {
        permaPortal = /*#__PURE__*/_reactDom["default"].createPortal( /*#__PURE__*/_react["default"].createElement(_react.Suspense, {
          fallback: /*#__PURE__*/_react["default"].createElement("div", null, "\"loading...\"")
        }, /*#__PURE__*/_react["default"].createElement(Permalink, {
          ref: function ref(node) {
            _this2.components.permalink = node;
          },
          saveIds: mapData.permalink.saveIds,
          mapController: this,
          target: target,
          external: this.permalinkContainer.className.indexOf("c4g-external") !== -1
        })), this.permalinkContainer);
      }

      var overviewPortal = "";

      if (mapData.overviewmap) {
        var layers = [];

        if (this.proxy.baselayers_loaded) {
          layers = [this.proxy.baselayerController.arrBaselayers[this.proxy.activeBaselayerId].layer];
        }

        overviewPortal = /*#__PURE__*/_reactDom["default"].createPortal( /*#__PURE__*/_react["default"].createElement(_react.Suspense, {
          fallback: /*#__PURE__*/_react["default"].createElement("div", null, "Loading...")
        }, /*#__PURE__*/_react["default"].createElement(OverviewMap, {
          ref: function ref(node) {
            _this2.components.overviewMap = node;
          },
          mapController: this,
          target: target,
          layers: layers,
          ovmTarget: this.overviewContainer,
          collapsed: true,
          key: 23
        })), this.overviewContainer); // overviewPortal = ReactDOM.createPortal(overviewPortal, this.overviewContainer);

        this.proxy.hook_baselayer_visibility = this.proxy.hook_baselayer_visibility || [];
        this.proxy.hook_baselayer_visibility.push(function (baselayerConfig) {
          var id = baselayerConfig.id;
          var currentBaselayer = scope.proxy.baselayerController.arrBaselayers[id];
          var currentSource;

          if (currentBaselayer.layer instanceof _layer.Group) {
            currentSource = currentBaselayer.layer.getLayers().getArray()[0].getSource();
          } else {
            currentSource = currentBaselayer.layer.getSource();
          }

          if (scope.components.overviewMap) {
            scope.components.overviewMap.addLayer(new _Tile["default"]({
              source: currentSource
            }), id);
          } else {
            // TODO better solution to wait for overviewmap to be rendered?
            var intervalId = window.setInterval(function () {
              if (scope.components.overviewMap) {
                scope.components.overviewMap.addLayer(new _Tile["default"]({
                  source: currentSource
                }), id);
                window.clearInterval(intervalId);
              }
            }, 1000);
          }
        });
      }

      var result = [];
      components.sort(function (a, b) {
        return a.sort > b.sort ? 1 : -1;
      });

      for (var i = 0; i < components.length; i++) {
        switch (components[i].name) {
          case "measuretools":
            result.push(measurePortal);
            break;

          case "baselayerswitcher":
            result.push(blsPortal);
            break;

          case "geosearch":
            result.push(searchPortal);
            break;

          case "layerswitcher":
            result.push(sbPortal);
            break;

          case "legend":
            result.push(infoPortal);
            break;

          case "permalink":
            result.push(permaPortal);
            break;

          case 'zoom':
            if (mapData.zoom) {
              result.push( /*#__PURE__*/_react["default"].createElement(_react.Suspense, {
                key: i,
                fallback: /*#__PURE__*/_react["default"].createElement("div", null, "\"loading...")
              }, /*#__PURE__*/_react["default"].createElement(Zoom, {
                mapController: this,
                target: target,
                key: i
              })));
            }

            break;

          case 'zoomExtent':
            if (mapData.zoomExtent) {
              result.push( /*#__PURE__*/_react["default"].createElement(_react.Suspense, {
                key: i,
                fallback: /*#__PURE__*/_react["default"].createElement("div", null, "\"loading...")
              }, /*#__PURE__*/_react["default"].createElement(ZoomExtent, {
                mapController: this,
                target: target,
                key: i
              })));
            }

            break;

          case 'zoomHome':
            if (mapData.zoomHome) {
              result.push( /*#__PURE__*/_react["default"].createElement(_react.Suspense, {
                key: i,
                fallback: /*#__PURE__*/_react["default"].createElement("div", null, "\"loading...")
              }, /*#__PURE__*/_react["default"].createElement(ZoomHome, {
                mapController: this,
                target: target,
                key: i
              })));
            }

            break;

          case 'zoomPosition':
            if (mapData.zoomPosition) {
              result.push( /*#__PURE__*/_react["default"].createElement(_react.Suspense, {
                key: i,
                fallback: /*#__PURE__*/_react["default"].createElement("div", null, "\"loading...")
              }, /*#__PURE__*/_react["default"].createElement(ZoomPosition, {
                mapController: this,
                target: target,
                key: i
              })));
            }

            break;

          case 'fullscreen':
            if (mapData.fullscreen) {
              result.push( /*#__PURE__*/_react["default"].createElement(_react.Suspense, {
                key: i,
                fallback: /*#__PURE__*/_react["default"].createElement("div", null, "\"loading...")
              }, /*#__PURE__*/_react["default"].createElement(Fullscreen, {
                mapController: this,
                target: target,
                key: i
              })));
            }

            break;

          case 'print':
            if (mapData.print) {
              result.push( /*#__PURE__*/_react["default"].createElement(_react.Suspense, {
                key: i,
                fallback: /*#__PURE__*/_react["default"].createElement("div", null, "\"loading...")
              }, /*#__PURE__*/_react["default"].createElement(Print, {
                mapController: this,
                target: target,
                key: i
              })));
            }

            break;

          case 'rotate':
            if (mapData.rotate) {
              result.push( /*#__PURE__*/_react["default"].createElement(_react.Suspense, {
                key: i,
                fallback: /*#__PURE__*/_react["default"].createElement("div", null, "\"loading...")
              }, /*#__PURE__*/_react["default"].createElement(Rotate, {
                mapController: this,
                target: target,
                key: i
              })));
            }

            break;

          case 'graticule':
            if (mapData.graticule) {
              result.push( /*#__PURE__*/_react["default"].createElement(_react.Suspense, {
                key: i,
                fallback: /*#__PURE__*/_react["default"].createElement("div", null, "\"loading...")
              }, /*#__PURE__*/_react["default"].createElement(Grid, {
                mapController: this,
                target: target,
                key: i
              })));
            }

            break;

          case 'overview':
            if (mapData.overviewmap) {
              result.push(overviewPortal);
            }

            break;

          case 'router':
            // if (window.c4gMapsHooks !== undefined && Array.isArray(window.c4gMapsHooks.mapController_addControls)) {
            //   utils.callHookFunctions(window.c4gMapsHooks.mapController_addControls, {
            //     mapController: this,
            //     Container: this.mapsControls.controlContainerTopLeft,
            //     component: "router",
            //     arrComps: result
            //   });
            // }

            /**
             * test
             */
            // const params = {
            //   mapController: this,
            //   Container: this.mapsControls.controlContainerTopLeft,
            //   component: "router",
            //   arrComps: result
            // };
            if (this.data.router_enable) {
              if (typeof this.data !== 'undefined') {
                if (this.data.lang === "de") {
                  langRouteConstants = _routingConstantI18nDe.routingConstantsGerman;
                } else if (this.data.lang === "en") {
                  langRouteConstants = _routingConstantI18nEn.routingConstantsEnglish;
                } else {
                  // fallback
                  langRouteConstants = _routingConstantI18nEn.routingConstantsEnglish;
                }
              }

              var routerControlProps = {
                target: document.querySelector('#' + this.data.mapDiv + ' .c4g-control-container-top-left'),
                mapController: this,
                direction: "top",
                withPosition: false,
                detourRoute: this.data.detourRoute,
                detourArea: this.data.detourArea,
                containerAddresses: containerAddresses,
                langConstants: langRouteConstants,
                ref: function ref(node) {
                  _this2.components.router = node;
                },
                key: 22,
                open: this.data.initial_open_comp === "routing"
              };
              var openRouter = this.data.initial_open_comp === "routing";

              if (!this.routerContainer) {
                if (this.data.router_div) {
                  this.routerContainer = document.querySelector("." + this.data.router_div);

                  if (!this.routerContainer) {
                    this.routerContainer = document.createElement('div');
                    this.routerContainer.className = "c4g-sideboard c4g-router-container-right " + (openRouter ? "c4g-open" : "c4g-close");
                    jQuery(".ol-overlaycontainer-stopevent").append(this.routerContainer);
                  } else {
                    this.routerContainer.className += " c4g-external";
                  }
                } else {
                  this.routerContainer = document.createElement('div');
                  this.routerContainer.className = "c4g-sideboard c4g-router-container-right " + (openRouter ? "c4g-open" : "c4g-close");
                  jQuery(".ol-overlaycontainer-stopevent").append(this.routerContainer);
                }
              }

              if (_c4gRouterView.RouterView && routerControlProps) {
                var view = /*#__PURE__*/_react["default"].createElement(_c4gRouterView.RouterView, routerControlProps);

                if (view && this && this.routerContainer) {
                  var portal = /*#__PURE__*/_reactDom["default"].createPortal(view, this.routerContainer);

                  if (portal) {
                    result.push(portal);
                  }
                }
              }
            }
            /**
             * end test
             */


            break;

          case 'editor':
            if (mapData.feEditorProfile && mapData.feEditorProfile !== "0") {
              if (!this.editorContainer) {
                if (this.data.editor_div) {
                  this.editorContainer = document.querySelector("." + this.data.editor_div);

                  if (!this.editorContainer) {
                    this.editorContainer = document.createElement('div');
                    this.editorContainer.className = "c4g-sideboard c4g-editor-container-right c4g-close";
                    jQuery(".ol-overlaycontainer-stopevent").append(this.editorContainer);
                  } else {
                    this.editorContainer.className += " c4g-external";
                  }
                } else {
                  this.editorContainer = document.createElement('div');
                  this.editorContainer.className = "c4g-sideboard c4g-editor-container-right c4g-close";
                  jQuery(".ol-overlaycontainer-stopevent").append(this.editorContainer);
                }
              }

              var editorProps = {
                tipLabel: langConstants.CTRL_EDITOR,
                type: mapData.editor.type || 'frontend',
                inputField: mapData.editor.inputField || false,
                target: mapData.editor.target || document.querySelector('#' + this.data.mapDiv + ' .c4g-control-container-top-left'),
                initOpen: mapData.editor.open || false,
                config: mapData.editor.config || false,
                dataField: mapData.editor.data_field || false,
                caching: mapData.caching,
                mapController: this
              };
              result.push( /*#__PURE__*/_reactDom["default"].createPortal( /*#__PURE__*/_react["default"].createElement(EditorComponent, editorProps), this.editorContainer));
            } else if (mapData.editor.type == "backend") {
              if (!this.editorContainer) {
                if (this.data.editor_div) {
                  this.editorContainer = document.querySelector("." + this.data.editor_div);

                  if (!this.editorContainer) {
                    this.editorContainer = document.createElement('div');
                    this.editorContainer.className = "c4g-sideboard c4g-editor-container-right c4g-close";
                    jQuery(".ol-overlaycontainer-stopevent").append(this.editorContainer);
                  } else {
                    this.editorContainer.className += " c4g-external";
                  }
                } else {
                  this.editorContainer = document.createElement('div');
                  this.editorContainer.className = "c4g-sideboard c4g-editor-container-right c4g-close";
                  jQuery(".ol-overlaycontainer-stopevent").append(this.editorContainer);
                }
              }

              var _editorProps = {
                tipLabel: langConstants.CTRL_EDITOR,
                type: mapData.editor.type || 'frontend',
                inputField: mapData.editor.inputField || "#c4gGeoEditorGeoData",
                target: mapData.editor.target || document.querySelector('#' + this.data.mapDiv + ' .c4g-control-container-top-left'),
                initOpen: mapData.editor.open || false,
                config: mapData.editor.config || false,
                dataField: mapData.editor.data_field || false,
                caching: mapData.caching,
                mapController: this
              };
              result.push( /*#__PURE__*/_reactDom["default"].createPortal( /*#__PURE__*/_react["default"].createElement(EditorComponent, _editorProps), this.editorContainer));
            }

            break;
        }
      }

      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, result);
    }
  }, {
    key: "setOpenComponent",
    value: function setOpenComponent(component) {
      var _this3 = this;

      var scope = this;
      this.setState({
        openComponent: component
      }, function () {
        for (var key in _this3.components) {
          if (_this3.components.hasOwnProperty(key)) {
            var currentComp = _this3.components[key];

            if (currentComp && currentComp !== component) {
              currentComp.setState({
                open: false
              });
            }
          }
        }

        if (scope.data.caching) {
          _c4gMapsUtils.utils.storeValue('panel', component.constructor.name);
        }
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this._isMounted = true;

      if (this.data.caching) {
        var storedPanel = _c4gMapsUtils.utils.getValue('panel');

        if (storedPanel) {
          for (var key in this.components) {
            if (this.components.hasOwnProperty(key)) {
              if (this.components[key] && this.components[key].constructor.name === storedPanel) {
                this.components[key].setState({
                  open: true
                });
                storedPanel = this.components[key];
              }
            }
          }

          this.setOpenComponent(storedPanel);
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._isMounted = false;
    }
  }, {
    key: "createGeosearchOptions",
    value: function createGeosearchOptions() {
      var mapData = this.data; // geosearch

      var geosearchOptions = {};

      if (mapData.geosearch && mapData.geosearch.enable) {
        if (!this.searchContainer) {
          if (mapData.geosearch.div) {
            this.searchContainer = document.querySelector("." + mapData.geosearch.div);
            this.searchContainer.className += " c4g-external";

            if (!this.searchContainer) {
              this.searchContainer = document.createElement('div');
              this.searchContainer.className = "c4g-sideboard c4g-geosearch-container-right ";
              this.searchContainer.className += "c4g-close";
              this.$overlaycontainer_stopevent.append(this.searchContainer);
            }
          } else {
            this.searchContainer = document.createElement('div');
            this.searchContainer.className = "c4g-sideboard c4g-geosearch-container-right ";
            this.searchContainer.className += "c4g-close";
          }

          if (!mapData.geosearch.div) {
            this.$overlaycontainer_stopevent.append(this.searchContainer);
          }
        }

        geosearchOptions = {
          mapController: this,
          target: document.querySelector('#' + mapData.mapDiv + ' .c4g-control-container-top-left'),
          extDiv: mapData.geosearch.div || false,
          collapsible: true,
          collapsed: mapData.initial_open_comp !== "search",
          label: ' ',
          collapsedLabel: '',
          // engineUrl: mapData.geosearch.engine,
          searchZoom: mapData.geosearch.searchzoom,
          zoomBounds: mapData.geosearch.zoombounds,
          quicksearch: true,
          animate: mapData.geosearch.animate,
          animateDuration: mapData.geosearch.animate_duration,
          markResult: mapData.geosearch.markresult,
          resultDuration: mapData.geosearch.result_duration,
          popup: mapData.geosearch.popup,
          autopick: mapData.geopicker,
          caching: mapData.caching,
          results: mapData.geosearch.results,
          resultCount: mapData.geosearch.result_count,
          resultsHeadline: mapData.geosearch.results_headline,
          headline: mapData.geosearch.headline,
          resultStyle: mapData.geosearch.result_locstyle,
          placeholder: mapData.geosearch.placeholder,
          external: this.searchContainer.className.indexOf("c4g-external") !== -1
        };
      }

      return geosearchOptions;
    }
  }]);
  return MapController;
}(_react.Component);

exports.default = MapController;

/***/ }),

/***/ "./Resources/public/js/components/c4g-router-popup-buttons.jsx":
/*!*********************************************************************!*\
  !*** ./Resources/public/js/components/c4g-router-popup-buttons.jsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.RouterPopupButtons = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _c4gAutocompleteInput = __webpack_require__(/*! ./c4g-autocomplete-input.jsx */ "./Resources/public/js/components/c4g-autocomplete-input.jsx");

var _geom = __webpack_require__(/*! ol/geom */ "./node_modules/ol/geom.js");

var _routingConstantI18n = __webpack_require__(/*! ./../routing-constant-i18n */ "./Resources/public/js/routing-constant-i18n.js");

var _proj = __webpack_require__(/*! ol/proj */ "./node_modules/ol/proj.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var RouterPopupButtons = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(RouterPopupButtons, _Component);

  var _super = _createSuper(RouterPopupButtons);

  function RouterPopupButtons(props) {
    (0, _classCallCheck2["default"])(this, RouterPopupButtons);
    return _super.call(this, props);
  }

  (0, _createClass2["default"])(RouterPopupButtons, [{
    key: "render",
    value: function render() {
      var _this = this;

      var scope = this;
      var geometry = this.props.config.feature.getGeometry();

      if (geometry instanceof _geom.LineString) {
        var editRoute = function editRoute() {
          var coordinates = geometry.getCoordinates();
          var i = 1;

          while (coordinates.length > 15) {
            geometry = geometry.simplify(i);
            coordinates = geometry.getCoordinates();
            i += 2;

            if (i > 42) {
              //prevent endless loop & magic number is magic
              Promise.all(/*! import() */[__webpack_require__.e("vendors-CoreBundle_node_modules_sweetalert2_dist_sweetalert2_all_js"), __webpack_require__.e("CoreBundle_Resources_public_vendor_js_AlertHandler_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./../../../../../CoreBundle/Resources/public/vendor/js/AlertHandler */ "../CoreBundle/Resources/public/vendor/js/AlertHandler.js")).then(function (module) {
                var alertHandler = new module.AlertHandler();
                alertHandler.showInfoDialog(scope.props.config.router.languageConstants.ROUTER_VIEW_ALERT_ERROR, scope.props.config.router.languageConstants.ROUTER_ERROR_LINESTRING);
              });
              return;
            }
          }

          ;

          _this.props.config.router.openControls(true);

          _this.props.config.router.setMode("route");

          var fromCoordinate = (0, _proj.toLonLat)(coordinates[0], "EPSG:3857");

          _this.props.config.router.setRouteFrom(fromCoordinate[0], fromCoordinate[1]);

          for (var _i = 1; _i < coordinates.length; _i++) {
            var overCoordinate = (0, _proj.toLonLat)(coordinates[_i], "EPSG:3857");

            _this.props.config.router.addOverPoint(overCoordinate[0], overCoordinate[1], _i - 1, true);
          }

          var toCoordinate = (0, _proj.toLonLat)(coordinates[coordinates.length - 1], "EPSG:3857");

          _this.props.config.router.setRouteTo(toCoordinate[0], toCoordinate[1]);
        };

        return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("button", {
          className: "c4g-icon c4g-popup-route-edit",
          title: this.props.config.router.languageConstants.POPUP_ROUTE_EDIT,
          onMouseUp: function onMouseUp() {
            editRoute();
          }
        }));
      } else {
        var coordinates;

        if (geometry instanceof _geom.Polygon) {
          var extent = geometry.getExtent();
          coordinates = [(extent[0] + extent[2]) / 2, (extent[1] + extent[3]) / 2];
        } else {
          coordinates = geometry.getCoordinates();
        }

        var routeFrom = function routeFrom() {
          _this.props.config.router.openControls(true);

          _this.props.config.router.setMode("route"); // from address


          var fromCoords = (0, _proj.toLonLat)(coordinates, "EPSG:3857");

          _this.props.config.router.setRouteFrom(fromCoords[0], fromCoords[1]);
        };

        var routeTo = function routeTo() {
          _this.props.config.router.openControls(true);

          _this.props.config.router.setMode("route"); // to address


          var toCoords = (0, _proj.toLonLat)(coordinates, "EPSG:3857");

          _this.props.config.router.setRouteTo(toCoords[0], toCoords[1]);
        };

        return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("button", {
          className: "c4g-icon c4g-popup-route-from",
          title: this.props.config.router.languageConstants.POPUP_ROUTE_FROM,
          onMouseUp: function onMouseUp() {
            routeFrom();
          }
        }), /*#__PURE__*/_react["default"].createElement("button", {
          className: "c4g-icon c4g-popup-route-to",
          title: this.props.config.router.languageConstants.POPUP_ROUTE_TO,
          onMouseUp: function onMouseUp() {
            routeTo();
          }
        }));
      }
    }
  }]);
  return RouterPopupButtons;
}(_react.Component);

exports.RouterPopupButtons = RouterPopupButtons;

/***/ }),

/***/ "./Resources/public/js/components/c4g-router-result-container.jsx":
/*!************************************************************************!*\
  !*** ./Resources/public/js/components/c4g-router-result-container.jsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.RouterResultContainer = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _GPX = _interopRequireDefault(__webpack_require__(/*! ol/format/GPX */ "./node_modules/ol/format/GPX.js"));

var _c4gRouterTimeConversions = __webpack_require__(/*! ../c4g-router-time-conversions */ "./Resources/public/js/c4g-router-time-conversions.js");

var _c4gTitlebar = __webpack_require__(/*! ./c4g-titlebar.jsx */ "./Resources/public/js/components/c4g-titlebar.jsx");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var RouterInstructionsContainer = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "Resources_public_js_components_c4g-router-instructions-container_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./c4g-router-instructions-container.jsx */ "./Resources/public/js/components/c4g-router-instructions-container.jsx"));
});

var RouterFeatureList = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "Resources_public_js_components_c4g-router-feature-list_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./c4g-router-feature-list.jsx */ "./Resources/public/js/components/c4g-router-feature-list.jsx"));
});

var RouterResultContainer = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(RouterResultContainer, _Component);

  var _super = _createSuper(RouterResultContainer);

  function RouterResultContainer(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, RouterResultContainer);
    _this = _super.call(this, props);
    _this.clickControl = _this.clickControl.bind((0, _assertThisInitialized2["default"])(_this));
    _this.profileTranslation = {
      0: "car",
      1: "hgv",
      2: "bike",
      3: "bike",
      4: "bike",
      5: "bike",
      6: "bike",
      7: "bike",
      8: "foot",
      9: "foot",
      10: "wheelchair",
      11: "hgv",
      12: "scooter",
      13: "scooter"
    };
    window.c4gMapsHooks.hook_map_click = window.c4gMapsHooks.hook_map_click || [];

    var scrolltoElement = function scrolltoElement(clickEvent) {
      var feature = _this.props.mapController.map.forEachFeatureAtPixel(clickEvent.pixel, function (feature, layer) {
        return feature;
      });

      if (feature && feature.get('tid')) {
        var zoomToId = feature.get('tid');

        _this.props.setResultFeat(clickEvent);

        _this.props.setActiveId(zoomToId);
      }
    };

    window.c4gMapsHooks.hook_map_click.push(scrolltoElement);
    return _this;
  }

  (0, _createClass2["default"])(RouterResultContainer, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var result = "";
      var time = "";
      var distance = "";
      var detour = "";
      var featureCount = "";

      if (this.props.routerInstructions && this.props.routerInstructions.instructions && this.props.mode === "route") {
        time = (0, _c4gRouterTimeConversions.toHumanTime)(this.props.routerInstructions.time);
        distance = (0, _c4gRouterTimeConversions.toHumanDistance)(this.props.routerInstructions.distance);
      } else if (this.props.featureList && this.props.mode === "area") {
        detour = this.props.detour;
        featureCount = this.props.featureList.features.length;
      }

      var routerHeaderContent = "";

      var printFunction = function printFunction() {
        var querySelector = _this2.props.resultMode === "instr" ? '.c4g-route-instructions-wrapper' : '.c4g-route-feature-wrapper';
        var prtContent = document.querySelector(querySelector).cloneNode(true);

        if (_this2.props.resultMode === "instr") {
          var fromAddress = _this2.props.router.state.fromAddress;
          var divFromAddress = document.createElement('div');
          var labelFromAddress = document.createElement('label');
          labelFromAddress.innerHTML = _this2.props.lang.ROUTER_FROM + ": ";
          var emFromAddress = document.createElement('em');
          emFromAddress.innerHTML = fromAddress;
          divFromAddress.appendChild(labelFromAddress);
          divFromAddress.appendChild(emFromAddress);
          divFromAddress.appendChild(document.createElement('em'));
          var toAddress = _this2.props.router.state.toAddress;
          var divToAddress = document.createElement('div');
          var labelToAddress = document.createElement('label');
          labelToAddress.innerHTML = _this2.props.lang.ROUTER_FROM + ": ";
          var emToAddress = document.createElement('em');
          emToAddress.innerHTML = toAddress;
          divToAddress.appendChild(labelToAddress);
          divToAddress.appendChild(emToAddress);
          divToAddress.appendChild(document.createElement('em'));
          prtContent.querySelector('.c4g-router-instructions-header').appendChild(divFromAddress);
          prtContent.querySelector('.c4g-router-instructions-header').appendChild(divToAddress);
        }

        prtContent.querySelector('.c4g-router-print').remove();
        var WinPrint = window.open('', '', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0');
        WinPrint.document.write(prtContent.innerHTML);
        WinPrint.document.close();
        WinPrint.focus();
        WinPrint.print();
        WinPrint.close();
      };

      if (time && distance && this.props.mode === "route") {
        routerHeaderContent = /*#__PURE__*/_react["default"].createElement("div", {
          className: "c4g-router-instructions-header"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "c4g-router-route-time"
        }, /*#__PURE__*/_react["default"].createElement("label", null, this.props.lang.ROUTER_VIEW_LABEL_TIME), /*#__PURE__*/_react["default"].createElement("em", null, time)), /*#__PURE__*/_react["default"].createElement("div", {
          className: "c4g-router-route-distance"
        }, /*#__PURE__*/_react["default"].createElement("label", null, this.props.lang.ROUTER_VIEW_LABEL_DISTANCE), /*#__PURE__*/_react["default"].createElement("em", null, distance)), /*#__PURE__*/_react["default"].createElement("button", {
          className: "c4g-router-download",
          title: this.props.lang.ROUTER_DOWNLOAD,
          onMouseUp: function onMouseUp() {
            _this2.exportGpx();
          }
        }), /*#__PURE__*/_react["default"].createElement("button", {
          className: "c4g-router-print",
          title: this.props.lang.ROUTER_PRINT,
          onMouseUp: function onMouseUp() {
            printFunction();
          }
        }));
      } else if (detour && featureCount && this.props.mode === "area") {
        routerHeaderContent = /*#__PURE__*/_react["default"].createElement("div", {
          className: "c4g-router-instructions-header"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "c4g-router-area-detour"
        }, /*#__PURE__*/_react["default"].createElement("label", null, this.props.lang.AREA_DETOUR, ":"), /*#__PURE__*/_react["default"].createElement("em", null, detour, " km")), /*#__PURE__*/_react["default"].createElement("div", {
          className: "c4g-router-area-featurecount"
        }, /*#__PURE__*/_react["default"].createElement("label", null, this.props.lang.AREA_FEATURECOUNT, ":"), /*#__PURE__*/_react["default"].createElement("em", null, featureCount)), /*#__PURE__*/_react["default"].createElement("button", {
          className: "c4g-router-print",
          onMouseUp: function onMouseUp() {
            printFunction();
          }
        }));
      }

      if (this.props.resultMode === "instr" && this.props.routerInstructions && this.props.mode === "route") {
        result = /*#__PURE__*/_react["default"].createElement(_react.Suspense, {
          fallback: /*#__PURE__*/_react["default"].createElement("div", null, "\"loading..\"")
        }, /*#__PURE__*/_react["default"].createElement(RouterInstructionsContainer, {
          className: "c4g-route-instructions-wrapper",
          mapController: this.props.mapController,
          routerInstructions: this.props.routerInstructions,
          routerWaySource: this.props.routerWaySource,
          routerHintSource: this.props.routerHintSource,
          open: this.props.open,
          header: routerHeaderContent
        }));
      } else if (this.props.resultMode === "feat" || this.props.mode === "area" || !this.props.routerInstructions && this.props.featureList) {
        result = /*#__PURE__*/_react["default"].createElement(_react.Suspense, {
          fallback: /*#__PURE__*/_react["default"].createElement("div", null, "\"loading..\"")
        }, /*#__PURE__*/_react["default"].createElement(RouterFeatureList, {
          className: "c4g-route-feature-wrapper",
          activeId: this.props.activeId,
          setActiveId: this.props.setActiveId,
          routeMode: this.props.mode,
          layerRoute: this.props.layerRoute,
          layerArea: this.props.layerArea,
          featureList: this.props.featureList,
          mapController: this.props.mapController,
          featureSource: this.props.featureSource,
          layerValueRoute: this.props.layerValueRoute,
          layerValueArea: this.props.layerValueArea,
          header: routerHeaderContent
        }));
      }

      if (this.props.open) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: this.props.className + (this.props.open ? " c4g-open" : " c4g-close") + (this.props.open ? " c4g-details-open" : "")
        }, result);
      } else {
        return null;
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var className = this.props.className + (this.props.open ? " c4g-open" : " c4g-close");
      var container = document.getElementsByClassName(className)[0];
      var controlContainer = document.querySelector(".c4g-router-panel.c4g-open");

      if (controlContainer) {
        controlContainer = controlContainer[0];
      }

      var mapContainer = document.querySelector(".c4g_map") ? document.querySelector(".c4g_map")[0] : false;
      var scope = this;

      if (mapContainer && container) {
        if (controlContainer) {
          if (container.offsetHeight + controlContainer.offsetHeight + 84 > mapContainer.offsetHeight) {
            container.style.height = mapContainer.offsetHeight - controlContainer.offsetHeight;
          }
        }
      }

      if (this.props.mode === "area" && this.props.resultMode !== "feat") {
        this.props.router.setState({
          resultMode: "feat"
        });
      }
    }
  }, {
    key: "open",
    value: function open() {
      this.props.setOpen(true);
    }
  }, {
    key: "close",
    value: function close() {
      this.props.setOpen(false);
    }
  }, {
    key: "clickControl",
    value: function clickControl() {
      if (this.props.open) {
        this.close();
      } else {
        this.open();
      }
    }
  }, {
    key: "exportGpx",
    value: function exportGpx() {
      var source = this.props.router.routerWaySource;
      var format = new _GPX["default"]();

      if (source && source.getFeatures && source.getFeatures()) {
        var strExport = format.writeFeatures(source.getFeatures(), {
          featureProjection: "EPSG:3857",
          dataProjection: "EPSG:4326",
          decimals: 3
        });
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/xml;charset=utf-8,' + encodeURIComponent(strExport));
        element.setAttribute('download', "route.gpx");
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
        console.log(strExport);
      }
    }
  }, {
    key: "slideInCollidingElements",
    value: function slideInCollidingElements() {// override parent method
    }
  }, {
    key: "slideOutCollidingElements",
    value: function slideOutCollidingElements() {// override parent method
    }
  }]);
  return RouterResultContainer;
}(_react.Component);

exports.RouterResultContainer = RouterResultContainer;

/***/ }),

/***/ "./Resources/public/js/components/c4g-router-view.jsx":
/*!************************************************************!*\
  !*** ./Resources/public/js/components/c4g-router-view.jsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.RouterView = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _c4gRouterResultContainer = __webpack_require__(/*! ./c4g-router-result-container.jsx */ "./Resources/public/js/components/c4g-router-result-container.jsx");

var _routingConstants = __webpack_require__(/*! ./../routing-constants */ "./Resources/public/js/routing-constants.js");

var _ol = __webpack_require__(/*! ol */ "./node_modules/ol/index.js");

var _geom = __webpack_require__(/*! ol/geom */ "./node_modules/ol/geom.js");

var _format = __webpack_require__(/*! ol/format */ "./node_modules/ol/format.js");

var _proj = __webpack_require__(/*! ol/proj */ "./node_modules/ol/proj.js");

var _style = __webpack_require__(/*! ol/style */ "./node_modules/ol/style.js");

var _layer = __webpack_require__(/*! ol/layer */ "./node_modules/ol/layer.js");

var _source = __webpack_require__(/*! ol/source */ "./node_modules/ol/source.js");

var _interaction = __webpack_require__(/*! ol/interaction */ "./node_modules/ol/interaction.js");

var _c4gRoutingPermalink = __webpack_require__(/*! ./../c4g-routing-permalink */ "./Resources/public/js/c4g-routing-permalink.js");

var _routingConstantI18n = __webpack_require__(/*! ./../routing-constant-i18n */ "./Resources/public/js/routing-constant-i18n.js");

var _c4gMapsConstant = __webpack_require__(/*! ./../c4g-maps-constant */ "./Resources/public/js/c4g-maps-constant.js");

var _c4gMapsUtils = __webpack_require__(/*! ./../c4g-maps-utils */ "./Resources/public/js/c4g-maps-utils.js");

var _c4gRouterPopupButtons = __webpack_require__(/*! ./c4g-router-popup-buttons.jsx */ "./Resources/public/js/components/c4g-router-popup-buttons.jsx");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Titlebar = /*#__PURE__*/_react["default"].lazy(function () {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./c4g-titlebar.jsx */ "./Resources/public/js/components/c4g-titlebar.jsx"));
});

//const RouterPopupButtons = React.lazy(() => import('./c4g-router-popup-buttons.jsx'));
var RouterControls = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "Resources_public_js_components_c4g-router-controls_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./c4g-router-controls.jsx */ "./Resources/public/js/components/c4g-router-controls.jsx"));
});

var RouterProfileSelection = /*#__PURE__*/_react["default"].lazy(function () {
  return __webpack_require__.e(/*! import() */ "Resources_public_js_components_c4g-router-profile-selection_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ./c4g-router-profile-selection.jsx */ "./Resources/public/js/components/c4g-router-profile-selection.jsx"));
});

var osmtogeojson = __webpack_require__(/*! osmtogeojson */ "./node_modules/osmtogeojson/index.js");
/**
 * Main router component. It consists of the RouterControls and RouterResultContainer components, and holds the
 * connection to the router model, which is propagated down to the actually needing components.
 */


var RouterView = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(RouterView, _Component);

  var _super = _createSuper(RouterView);

  function RouterView(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, RouterView);
    _this = _super.call(this, props);
    _this.setActiveId = _this.setActiveId.bind((0, _assertThisInitialized2["default"])(_this));
    _this.setOpen = _this.setOpen.bind((0, _assertThisInitialized2["default"])(_this));
    _this.close = _this.close.bind((0, _assertThisInitialized2["default"])(_this));
    _this.openControls = _this.openControls.bind((0, _assertThisInitialized2["default"])(_this));
    _this.resetFromPoint = _this.resetFromPoint.bind((0, _assertThisInitialized2["default"])(_this));
    _this.resetToPoint = _this.resetToPoint.bind((0, _assertThisInitialized2["default"])(_this));
    _this.resetAreaPoint = _this.resetAreaPoint.bind((0, _assertThisInitialized2["default"])(_this));
    _this.toggleResultDetails = _this.toggleResultDetails.bind((0, _assertThisInitialized2["default"])(_this));
    _this.setResultInstr = _this.setResultInstr.bind((0, _assertThisInitialized2["default"])(_this));
    _this.setResultFeat = _this.setResultFeat.bind((0, _assertThisInitialized2["default"])(_this));
    _this.recalculateRoute = _this.recalculateRoute.bind((0, _assertThisInitialized2["default"])(_this));
    var mapController = _this.props.mapController;
    var arrProfiles = [];
    _this.languageConstants = (0, _routingConstantI18n.getLanguage)(mapController.data);

    for (var key in mapController.data.router_profiles) {
      if (mapController.data.router_profiles.hasOwnProperty(key)) {
        arrProfiles.push({
          id: key,
          text: mapController.data.router_profiles[key]
        });
      }
    }

    var layerRoute = null;
    var layerArea = null;
    var layerValueRoute = null;
    var layerValueArea = null;

    if (mapController.data.showFeatures) {
      var routerLayers = mapController.data.routerLayers;

      for (var _key in routerLayers) {
        if (routerLayers.hasOwnProperty(_key)) {
          layerRoute = layerRoute || _key;
          layerValueRoute = Object.keys(routerLayers[layerRoute])[0] || layerValueRoute;
          layerArea = layerArea || _key;
          layerValueArea = Object.keys(routerLayers[layerArea])[0] || layerValueArea;
        }
      }
    }

    _this.state = {
      router: props.router,
      objSettings: {
        "proxyUrl": mapController && mapController.data ? mapController.data.proxyUrl : '',
        "keyAutocomplete": mapController && mapController.data ? mapController.data.autocomplete : '',
        "center": function center() {
          var center = mapController.map.getView().getCenter();
          center = (0, _proj.transform)(center, "EPSG:3857", "EPSG:4326");
          return center;
        },
        "geosearchParams": mapController.data.geosearch.params
      },
      activeId: null,
      openResults: false,
      containerAddresses: {
        arrFromPositions: [],
        arrFromNames: [],
        arrToPositions: [],
        arrToNames: [],
        arrAreaPositions: [],
        arrAreaNames: [],
        arrOverPositions: {},
        arrOverNames: {}
      },
      fromAddress: "",
      toAddress: "",
      areaAddress: "",
      layerRoute: layerRoute,
      layerArea: layerArea,
      layerValueRoute: layerValueRoute,
      layerValueArea: layerValueArea,
      detourRoute: props.detourRoute.initial,
      detourArea: props.detourArea.initial,
      featureList: {
        features: [],
        type: ""
      },
      mode: mapController.data.initialMode,
      overPtCtr: 0,
      overAddresses: [],
      featureSource: undefined,
      routerWaySource: undefined,
      routerHintSource: undefined,
      areaPoint: null,
      fromPoint: null,
      toPoint: null,
      overPoints: [],
      profiles: arrProfiles ? arrProfiles : [],
      currentProfile: arrProfiles && arrProfiles[0] && arrProfiles[0].id ? arrProfiles[0].id : 0,
      open: props.mapController.data.initial_open_comp === "routing" || false,
      //ToDO
      openSettings: props.mapController.data.initial_open_comp === "routing" || false,
      //ToDO
      routerInstructions: {},
      resultMode: props.mapController.data.initialResultMode || "instr"
    };
    _this.popupRouteButtonWrapper = ""; // this is needed because of the different popup handlings

    _this.swapPoints = _this.swapPoints.bind((0, _assertThisInitialized2["default"])(_this));

    if (mapController.data.usePermalink) {
      _this.permalink = new _c4gRoutingPermalink.RoutingPermalink((0, _assertThisInitialized2["default"])(_this));
    }

    _this.profileTranslation = {
      0: "car",
      1: "hgv",
      2: "bike",
      3: "bike",
      4: "bike",
      5: "bike",
      6: "bike",
      7: "bike",
      8: "foot",
      9: "foot",
      10: "wheelchair",
      11: "hgv",
      12: "scooter",
      13: "scooter"
    };

    _this.init();

    return _this;
  }

  (0, _createClass2["default"])(RouterView, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var scope = this;
      var mapData = this.props.mapController.data;
      var sources = {
        waySource: this.state.routerWaySource,
        hintSource: this.state.routerHintSource,
        featureSource: this.state.featureSource
      };
      var sliderOptions = {};

      if (this.state.mode === "route") {
        sliderOptions = {
          min: mapData.detourRoute.min,
          max: mapData.detourRoute.max,
          value: this.state.detourRoute,
          router: this
        };
      } else if (this.state.mode === "area") {
        sliderOptions = {
          min: mapData.detourArea.min,
          max: mapData.detourArea.max,
          value: this.state.detourArea,
          router: this
        };
      }

      var resetFunctions = {
        from: this.resetFromPoint,
        to: this.resetToPoint,
        area: this.resetAreaPoint
      };
      var overSettings = this.createOverSettings();
      var headline = "";

      if (this.state.mode === "route") {
        headline = this.props.mapController.data.routerHeadline || this.languageConstants.ROUTER_DEFAULT_HEADLINE_ROUTE;
      } else if (this.state.mode === "area") {
        headline = this.props.mapController.data.areaHeadline || this.languageConstants.ROUTER_DEFAULT_HEADLINE_AREA;
      }

      var instructions = this.state.routerInstructions.instructions;
      var resultSwitcher = "";
      var switcherButtons = [];

      if (this.state.featureList.features.length > 0 && (this.state.fromAddress && this.state.toAddress && this.state.mode === "route" || this.state.areaAddress && this.state.mode === "area")) {
        switcherButtons.push( /*#__PURE__*/_react["default"].createElement("button", {
          id: "c4g-router-button-feature",
          className: this.state.resultMode === "feat" && this.state.openResults ? "c4g-active" : "c4g-inactive",
          onMouseUp: this.setResultFeat,
          key: 1,
          title: "Ergebnisliste anzeigen"
        }));
      }

      if (instructions && instructions.length > 0 && this.state.mode === "route") {
        switcherButtons.push( /*#__PURE__*/_react["default"].createElement("button", {
          id: "c4g-router-button-instructions",
          className: this.state.resultMode === "instr" && this.state.openResults ? "c4g-active" : "c4g-inactive",
          onMouseUp: this.setResultInstr,
          key: 2,
          title: "Routenhinweise anzeigen"
        }));
      }

      if (switcherButtons.length > 0) {
        resultSwitcher = /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("button", {
          className: "c4g-router-hide-form-button " + (this.state.openSettings ? "c4g-active" : "c4g-inactive"),
          onMouseUp: function onMouseUp() {
            _this2.setState({
              openSettings: !_this2.state.openSettings
            });
          },
          title: this.languageConstants.ROUTER_SETTINGS
        }), /*#__PURE__*/_react["default"].createElement("div", {
          className: "c4g-router-mode-switch"
        }, switcherButtons));
      }

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "c4g-router-wrapper"
      }, /*#__PURE__*/_react["default"].createElement(_react.Suspense, {
        fallback: /*#__PURE__*/_react["default"].createElement("div", null, "Loading...")
      }, /*#__PURE__*/_react["default"].createElement(Titlebar, {
        wrapperClass: "c4g-router-header",
        header: headline,
        headerClass: "c4g-router-headline",
        detailBtnClass: "c4g-router-extended-options",
        hideContainer: ".c4g-router-container-right",
        detailBtnCb: this.toggleDetails,
        closeBtnClass: "c4g-router-close",
        closeBtnCb: this.close,
        closeBtnTitle: this.languageConstants.CLOSE
      })), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "c4g-router-switcher"
      }, /*#__PURE__*/_react["default"].createElement("div", null, resultSwitcher), /*#__PURE__*/_react["default"].createElement(_react.Suspense, {
        fallback: /*#__PURE__*/_react["default"].createElement("div", null, "\"loading...\"")
      }, /*#__PURE__*/_react["default"].createElement(RouterProfileSelection, {
        profiles: this.state.profiles,
        router: this,
        currentProfile: this.state.currentProfile
      })))), /*#__PURE__*/_react["default"].createElement(_react.Suspense, {
        fallback: /*#__PURE__*/_react["default"].createElement("div", null, "\"loading\"")
      }, /*#__PURE__*/_react["default"].createElement(RouterControls, {
        router: this,
        open: this.state.open && this.state.openSettings,
        setOpen: this.openControls,
        profiles: this.state.profiles,
        className: "c4g-router-panel",
        objSettings: this.state.objSettings,
        objFunctions: this.objFunctions,
        overSettings: overSettings,
        enableOverPoints: this.props.mapController.data.enableOverPoints,
        sources: sources,
        layers: this.props.mapController.data.routerLayers,
        containerAddresses: this.state.containerAddresses,
        resetFunctions: resetFunctions,
        mapController: this.props.mapController,
        currentProfile: this.state.currentProfile,
        fromAddress: this.state.fromAddress,
        switchTargets: this.props.mapController.data.enableTargetSwitch,
        toAddress: this.state.toAddress,
        areaAddress: this.state.areaAddress,
        mode: this.state.mode,
        sliderOptions: sliderOptions,
        title: this.languageConstants.CTRL_ROUTER,
        target: this.props.target
      })), /*#__PURE__*/_react["default"].createElement(_react.Suspense, {
        fallback: /*#__PURE__*/_react["default"].createElement("div", null, "\"loading\"")
      }, /*#__PURE__*/_react["default"].createElement(_c4gRouterResultContainer.RouterResultContainer, {
        visible: this.state.open,
        open: this.state.open && this.state.openResults,
        setOpen: this.setOpen,
        direction: "bottom",
        className: "c4g-router-result-container",
        mapController: this.props.mapController,
        mode: this.state.mode,
        setResultFeat: this.setResultFeat,
        routerInstructions: this.state.routerInstructions,
        featureList: this.state.featureList,
        routerWaySource: this.state.routerWaySource,
        detour: this.state.detourArea,
        layerRoute: this.state.layerRoute,
        layerValueRoute: this.state.layerValueRoute,
        layerArea: this.state.layerArea,
        resultMode: this.state.resultMode,
        router: this,
        layerValueArea: this.state.layerValueArea,
        routerHintSource: this.state.routerHintSource,
        featureSource: this.state.featureSource,
        profile: this.state.currentProfile,
        activeId: this.state.activeId,
        setActiveId: this.setActiveId,
        detailOpen: this.state.resultDetailOpen,
        toggleDetailOpen: this.toggleResultDetails,
        headline: "Router Ergebnisse",
        lang: this.languageConstants
      })));
    }
  }, {
    key: "setResultInstr",
    value: function setResultInstr(event) {
      event.stopPropagation();
      this.setState({
        resultMode: "instr",
        openResults: true
      });
    }
  }, {
    key: "setResultFeat",
    value: function setResultFeat(event) {
      event.stopPropagation();
      this.setState({
        resultMode: "feat",
        openResults: true
      });
    }
  }, {
    key: "close",
    value: function close() {
      this.openControls(false);
      jQuery(this.props.mapController.routerContainer).removeClass("c4g-open").addClass("c4g-close");
    }
  }, {
    key: "getProfileById",
    value: function getProfileById(id) {
      for (var i = 0; i < this.state.profiles.length; i++) {
        if (parseInt(this.state.profiles[i].id, 10) === parseInt(id, 10)) {
          return this.state.profiles[i];
        }
      }

      return null;
    }
  }, {
    key: "toggleResultDetails",
    value: function toggleResultDetails() {
      if (this.state.resultDetailOpen) {
        this.setState({
          resultDetailOpen: false
        });
      } else {
        this.setState({
          resultDetailOpen: true
        });
      }
    }
  }, {
    key: "openControls",
    value: function openControls(open) {
      if (open) {
        this.props.mapController.setOpenComponent(this);
        this.setState({
          open: true,
          openSettings: true
        });
        jQuery(this.props.mapController.routerContainer).removeClass("c4g-close").addClass("c4g-open");
      } else {
        this.setState({
          open: false
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.mapController.data.usePermalink) {
        this.permalink.handleInitialParams();
      }

      if (this.props.mapController.data.router_div) {
        this.setState({
          open: true
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if (this.props.mapController.data.usePermalink) {
        var fragments = this.permalink.linkFragments;

        if (this.state.fromPoint && fragments.fromAddress !== this.state.fromPoint.getCoordinates()) {
          this.permalink.updateLinkFragments("fromAddress", this.state.fromPoint.getCoordinates());
        }

        if (this.state.toPoint && fragments.toAddress !== this.state.toPoint.getCoordinates()) {
          this.permalink.updateLinkFragments("toAddress", this.state.toPoint.getCoordinates());
        }

        if (fragments.mode !== this.state.mode) {
          this.permalink.updateLinkFragments("mode", this.state.mode);
        }

        if (fragments.detourArea !== this.state.detourArea) {
          this.permalink.updateLinkFragments("detourArea", this.state.detourArea);
        }

        if (fragments.detourRoute !== this.state.detourRoute) {
          this.permalink.updateLinkFragments("detourRoute", this.state.detourRoute);
        }
      }

      if (prevState.open === true && this.state.open === false) {
        this.routerLayerGroup.setVisible(false);
        this.modWayInteraction.setActive(false);
        jQuery(this.props.mapController.routerContainer).removeClass("c4g-open").addClass("c4g-close");
      }

      if (this.state.open && !prevState.open) {
        this.props.mapController.hideOtherComponents(this);
        this.routerLayerGroup.setVisible(true);
        this.modWayInteraction.setActive(true);
        jQuery(this.props.mapController.routerContainer).addClass("c4g-open").removeClass("c4g-close");

        if (!this.state.openSettings && !this.state.openResults) {
          this.setState({
            openSettings: true
          });
        }
      }

      if (this.state.openSettings && !prevState.openSettings) {
        this.setState({
          openResults: false
        });
      }

      if (this.state.openResults && !prevState.openResults) {
        this.setState({
          openSettings: false
        });
      }

      if (!this.state.openResults && !this.state.openSettings && prevState.openSettings) {
        this.setState({
          openSettings: true
        });
      }

      if (!this.state.openSettings && !this.state.openResults && prevState.openResults) {
        this.setState({
          openResults: true
        });
      }

      if (this.state.mode === "route" && (!this.state.fromAddress || !this.state.toAddress) && this.state.openResults && prevState.mode === "area") {
        this.setState({
          openResults: false
        });
      }

      if (this.props.mapController.data.caching && !this.state.open) {
        var panelVal = _c4gMapsUtils.utils.getValue('panel');

        if (panelVal === this.constructor.name) {
          _c4gMapsUtils.utils.storeValue('panel', "");
        }
      }
    }
  }, {
    key: "setProfile",
    value: function setProfile(profile) {
      this.setState({
        currentProfile: profile
      }, this.updateRouteLayersAndPoints);
    }
  }, {
    key: "setLayer",
    value: function setLayer(layer) {
      var routerLayers = this.props.mapController.data.routerLayers;
      var layerValues = routerLayers[layer];
      var newDefaultLayerValue = Object.keys(layerValues)[0];

      if (this.state.mode === "route") {
        this.setState({
          layerRoute: layer,
          layerValueRoute: newDefaultLayerValue
        }, this.recalculateRoute);
      } else {
        this.setState({
          layerArea: layer,
          layerValueArea: newDefaultLayerValue
        }, this.performArea);
      }
    }
  }, {
    key: "setLayerValue",
    value: function setLayerValue(layerValue) {
      var scope = this;

      if (this.state.mode === "route") {
        this.setState({
          layerValueRoute: layerValue
        }, function () {
          scope.showFeatures(scope.state.featureList.features, scope.state.featureList.type, "router", false);
        });
      } else if (this.state.mode === "area") {
        this.setState({
          layerValueArea: layerValue
        }, function () {
          scope.showFeatures(scope.state.featureList.features, scope.state.featureList.type, "area", false);
        });
      }
    }
  }, {
    key: "setActiveId",
    value: function setActiveId(activeId) {
      this.setState({
        "activeId": activeId
      });
    }
  }, {
    key: "setOpen",
    value: function setOpen(bool) {
      this.setState({
        "openResults": bool
      });
    }
  }, {
    key: "setAreaPoint",
    value: function setAreaPoint(longitude, latitude) {
      var scope = this;
      this.performReverseSearch("areaAddress", [longitude, latitude]);
      var point = new _geom.Point([longitude, latitude]);
      this.setState({
        areaPoint: point
      }, function () {
        return scope.updateRouteLayersAndPoints();
      });
    }
  }, {
    key: "setRouteFrom",
    value: function setRouteFrom(longitude, latitude) {
      var scope = this;
      this.performReverseSearch("fromAddress", [longitude, latitude]);
      var point = new _geom.Point([longitude, latitude]);
      this.setState({
        fromPoint: point
      }, function () {
        scope.updateRouteLayersAndPoints();
      });
    }
  }, {
    key: "setRouteTo",
    value: function setRouteTo(longitude, latitude) {
      var scope = this;
      this.performReverseSearch("toAddress", [longitude, latitude]);
      var point = new _geom.Point([longitude, latitude]);
      this.setState({
        toPoint: point
      }, function () {
        return scope.updateRouteLayersAndPoints();
      });
    }
  }, {
    key: "addOverPoint",
    value: function addOverPoint(longitude, latitude, index) {
      var dontSearch = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var scope = this;
      var overAddresses = this.state.overAddresses;

      if (!dontSearch) {
        this.performReverseSearch("overAddress", [longitude, latitude], index);
      } else {
        //display coordinates instead of
        overAddresses.splice(index, 1, longitude + ", " + latitude);
      }

      var point = new _geom.Point([longitude, latitude]);
      var overPoints = this.state.overPoints;
      overPoints.splice(index, 1, point); // overPoints[index] = point;

      this.setState({
        overPoints: overPoints,
        overAddresses: overAddresses
      }, function () {
        return scope.updateRouteLayersAndPoints();
      });
    }
  }, {
    key: "setMode",
    value: function setMode(mode) {
      var _this3 = this;

      if (this.state.mode !== mode) {
        var sources = {
          waySource: this.state.routerWaySource,
          hintSource: this.state.routerHintSource,
          featureSource: this.state.featureSource,
          locationSource: this.locationsSource
        };
        this.setState({
          mode: mode
        }, function () {
          for (var key in sources) {
            if (sources.hasOwnProperty(key) && sources[key]) {
              sources[key].clear();
            }
          }

          _this3.updateRouteLayersAndPoints();
        });
      }
    }
  }, {
    key: "swapPoints",
    value: function swapPoints() {
      var newFromPoint = this.state.toPoint;
      var newFromAddress = this.state.toAddress;
      var newToPoint = this.state.fromPoint;
      var newToAddress = this.state.fromAddress;
      var containerAddresses = this.state.containerAddresses;
      var tmpNames = containerAddresses.arrFromNames;
      var tmpPos = containerAddresses.arrFromPositions;
      containerAddresses.arrFromNames = containerAddresses.arrToNames;
      containerAddresses.arrFromPositions = containerAddresses.arrToPositions;
      containerAddresses.arrToNames = tmpNames;
      containerAddresses.arrToPositions = tmpPos;
      this.setState({
        fromPoint: newFromPoint,
        fromAddress: newFromAddress,
        toPoint: newToPoint,
        toAddress: newToAddress,
        containerAddresses: containerAddresses
      }, this.updateRouteLayersAndPoints);
    }
  }, {
    key: "createOverSettings",
    value: function createOverSettings() {
      var scope = this;
      var objSettings = {};
      objSettings.overAddresses = this.state.overAddresses;
      objSettings.overPoints = this.state.overPoints;
      objSettings.overPtCtr = this.state.overPtCtr; // increments the overPtCtr so the popup can render additional overFields

      objSettings.overFunction = function () {
        var containerAddresses = scope.state.containerAddresses;
        containerAddresses.arrOverNames[scope.state.overPtCtr] = [];
        containerAddresses.arrOverPositions[scope.state.overPtCtr] = [];
        scope.setState({
          overPtCtr: scope.state.overPtCtr + 1,
          containerAddresses: containerAddresses
        });
      };

      objSettings.swapPoints = this.swapPoints;
      objSettings.objFunctions = {};

      for (var i = 0; i < this.state.overPtCtr; i++) {
        objSettings.objFunctions[i] = this.createAutocompleteFunctionsForOverField(i);

        if (!objSettings.overAddresses[i]) {
          objSettings.overAddresses[i] = "";
        }

        if (!objSettings.overPoints[i]) {
          objSettings.overPoints[i] = null;
        }
      }

      return objSettings;
    }
  }, {
    key: "createAutocompleteFunctionsForOverField",
    value: function createAutocompleteFunctionsForOverField(fieldId) {
      var scope = this; // set listener for the autocomplete from field

      var deleteOverListener = function deleteOverListener(event) {
        var containerAddresses = scope.state.containerAddresses;
        containerAddresses.arrOverPositions[fieldId] = [];
        containerAddresses.arrOverNames[fieldId] = [];
        var overPoints = scope.state.overPoints;
        overPoints.splice(fieldId, 1); // delete overPoints[fieldId];

        var overAddresses = scope.state.overAddresses;
        overAddresses.splice(fieldId, 1); // delete overAddresses[fieldId];

        scope.setState({
          overPoints: overPoints,
          containerAddresses: containerAddresses,
          overAddresses: overAddresses,
          overPtCtr: scope.state.overPtCtr - 1
        }, function () {
          scope.updateRouteLayersAndPoints();
        });
      };

      var selectOverListener = function selectOverListener(event, ui) {
        var overAddresses, overPoints, overValue;
        var value = ui.item.value;
        var index = scope.state.containerAddresses.arrOverNames[fieldId].findIndex(function (danger) {
          return danger === value;
        });
        var coord = scope.state.containerAddresses.arrOverPositions[fieldId][index];
        overAddresses = scope.state.overAddresses;
        overAddresses[fieldId] = scope.state.containerAddresses.arrOverNames[fieldId][index];
        overValue = new _geom.Point([coord[1], coord[0]]);
        overPoints = scope.state.overPoints;
        overPoints[fieldId] = overValue;
        scope.setState({
          overPoints: overPoints,
          overAddresses: overAddresses
        }, function () {
          scope.updateRouteLayersAndPoints();
        });
      };

      var changeOverListener = function changeOverListener() {// self.fromValue = null;
      };

      return {
        "selectListener": selectOverListener,
        "deleteFunction": deleteOverListener,
        "changeListener": changeOverListener
      };
    }
  }, {
    key: "updateRouteLayersAndPoints",
    value: function updateRouteLayersAndPoints() {
      var _this4 = this;

      var scope = this;
      this.locationsSource.clear();
      this.areaSource.clear();

      if (this.state.mode === "route") {
        if (this.state.fromPoint) {
          var tmpFeature = new _ol.Feature({
            geometry: this.state.fromPoint.clone().transform('EPSG:4326', 'EPSG:3857')
          });

          if (this.props.mapController.data.router_from_locstyle && this.props.mapController.proxy.locationStyleController.arrLocStyles[this.props.mapController.data.router_from_locstyle]) {
            tmpFeature.setStyle(this.props.mapController.proxy.locationStyleController.arrLocStyles[this.props.mapController.data.router_from_locstyle].style);
          } else {
            var doneFunction = function doneFunction() {
              tmpFeature.setStyle(_this4.props.mapController.proxy.locationStyleController.arrLocStyles[_this4.props.mapController.data.router_from_locstyle].style);
            };

            this.props.mapController.proxy.locationStyleController.loadLocationStyles([this.props.mapController.data.router_from_locstyle], {
              "done": doneFunction
            });
          }

          this.locationsSource.addFeature(tmpFeature);
        }

        if (this.state.toPoint) {
          var _tmpFeature = new _ol.Feature({
            geometry: this.state.toPoint.clone().transform('EPSG:4326', 'EPSG:3857')
          });

          if (this.props.mapController.data.router_to_locstyle && this.props.mapController.proxy.locationStyleController.arrLocStyles[this.props.mapController.data.router_to_locstyle]) {
            _tmpFeature.setStyle(this.props.mapController.proxy.locationStyleController.arrLocStyles[this.props.mapController.data.router_to_locstyle].style);
          } else {
            var _doneFunction = function _doneFunction() {
              _tmpFeature.setStyle(_this4.props.mapController.proxy.locationStyleController.arrLocStyles[_this4.props.mapController.data.router_to_locstyle].style);
            };

            this.props.mapController.proxy.locationStyleController.loadLocationStyles([this.props.mapController.data.router_to_locstyle], {
              "done": _doneFunction
            });
          }

          this.locationsSource.addFeature(_tmpFeature);
        }

        if (!(this.state.fromPoint && this.state.toPoint)) {
          this.routerWaySource.clear();
        }

        if (this.state.overPoints && Object.keys(this.state.overPoints).length > 0) {
          for (var key in this.state.overPoints) {
            if (this.state.overPoints.hasOwnProperty(key) && this.state.overPoints[key] !== null) {
              var _tmpFeature2 = new _ol.Feature({
                geometry: this.state.overPoints[key].clone().transform('EPSG:4326', 'EPSG:3857')
              });

              if (this.props.mapController.data.router_interim_locstyle && this.props.mapController.proxy.locationStyleController.arrLocStyles[this.props.mapController.data.router_interim_locstyle]) {
                _tmpFeature2.setStyle(this.props.mapController.proxy.locationStyleController.arrLocStyles[this.props.mapController.data.router_interim_locstyle].style);
              }

              this.locationsSource.addFeature(_tmpFeature2);
            }
          }
        }

        if (!this.props.mapController.data.routeStartButton) {
          this.recalculateRoute();
        }
      } else if (this.state.mode === "area") {
        if (this.state.areaPoint) {
          var _tmpFeature3 = new _ol.Feature({
            geometry: this.state.areaPoint.clone().transform('EPSG:4326', 'EPSG:3857')
          });

          if (this.props.mapController.data.router_point_locstyle && this.props.mapController.proxy.locationStyleController.arrLocStyles[this.props.mapController.data.router_point_locstyle]) {
            _tmpFeature3.setStyle(this.props.mapController.proxy.locationStyleController.arrLocStyles[this.props.mapController.data.router_point_locstyle].style);
          } else {
            this.props.mapController.proxy.locationStyleController.loadLocationStyles([this.props.mapController.data.router_point_locstyle], {
              done: function done() {
                _tmpFeature3.setStyle(this.props.mapController.proxy.locationStyleController.arrLocStyles[scope.props.mapController.data.router_point_locstyle].style);
              }
            });
          }

          this.areaSource.addFeature(_tmpFeature3);
        }

        this.performArea();
      }
    }
  }, {
    key: "resetFromPoint",
    value: function resetFromPoint() {
      var scope = this;
      var containerAddresses = scope.state.containerAddresses;
      containerAddresses.arrFromPositions = [];
      containerAddresses.arrFromNames = [];
      this.setState({
        fromPoint: null,
        containerAddresses: containerAddresses,
        fromAddress: ""
      }, function () {
        scope.updateRouteLayersAndPoints();
      });
    }
  }, {
    key: "resetToPoint",
    value: function resetToPoint() {
      var scope = this;
      var containerAddresses = scope.state.containerAddresses;
      containerAddresses.arrToPositions = [];
      containerAddresses.arrToNames = [];
      this.setState({
        toPoint: null,
        containerAddresses: containerAddresses,
        toAddress: ""
      }, function () {
        scope.updateRouteLayersAndPoints();
      });
    }
  }, {
    key: "resetAreaPoint",
    value: function resetAreaPoint() {
      var scope = this;
      var containerAddresses = scope.state.containerAddresses;
      containerAddresses.arrAreaPositions = [];
      containerAddresses.arrAreaNames = [];
      this.setState({
        areaPoint: null,
        containerAddresses: containerAddresses,
        areaAddress: ""
      }, function () {
        scope.updateRouteLayersAndPoints();
      });
    }
  }, {
    key: "createAutocompleteFunctions",
    value: function createAutocompleteFunctions() {
      var objFunctions = {};
      var scope = this; // set listener for the autocomplete from field

      var deleteFromListener = function deleteFromListener(event) {
        scope.resetFromPoint();
      };

      var selectFromListener = function selectFromListener(event, ui) {
        var value = ui.item.value;
        var index = scope.state.containerAddresses.arrFromNames.findIndex(function (danger) {
          return danger === value;
        });
        var coord = scope.state.containerAddresses.arrFromPositions[index];
        var fromValue = new _geom.Point([coord[1], coord[0]]);
        scope.setState({
          fromPoint: fromValue,
          fromAddress: scope.state.containerAddresses.arrFromNames[index]
        }, function () {
          scope.updateRouteLayersAndPoints();
          scope.recalculateRoute();
        });
      };

      var changeFromListener = function changeFromListener() {// self.fromValue = null;
      };

      objFunctions.fromFunctions = {
        "selectListener": selectFromListener,
        "deleteFunction": deleteFromListener,
        "changeListener": changeFromListener
      }; // set listener for the autocomplete to field

      var deleteToListener = function deleteToListener(event) {
        scope.resetToPoint();
      };

      var selectToListener = function selectToListener(event, ui) {
        var value = ui.item.value;
        var index = scope.state.containerAddresses.arrToNames.findIndex(function (danger) {
          return danger === value;
        });
        var coord = scope.state.containerAddresses.arrToPositions[index];
        var toValue = new _geom.Point([coord[1], coord[0]]);
        scope.setState({
          toPoint: toValue,
          toAddress: scope.state.containerAddresses.arrToNames[index]
        }, function () {
          scope.updateRouteLayersAndPoints();
          scope.recalculateRoute();
        });
      };

      var changeToListener = function changeToListener() {// self.fromValue = null;
      };

      objFunctions.toFunctions = {
        "selectListener": selectToListener,
        "deleteFunction": deleteToListener,
        "changeListener": changeToListener
      }; // set listener for the autocomplete to field

      var deleteAreaListener = function deleteAreaListener(event) {
        var containerAddresses = scope.state.containerAddresses;
        containerAddresses.arrAreaPositions = [];
        containerAddresses.arrAreaNames = [];
        scope.setState({
          areaPoint: null,
          containerAddresses: containerAddresses,
          areaAddress: ""
        }, function () {});
      };

      var selectAreaListener = function selectAreaListener(event, ui) {
        var value = ui.item.value;
        var index = scope.state.containerAddresses.arrAreaNames.findIndex(function (danger) {
          return danger === value;
        });
        var coord = scope.state.containerAddresses.arrAreaPositions[index];
        var areaValue = new _geom.Point([coord[1], coord[0]]);
        scope.setState({
          areaPoint: areaValue,
          areaAddress: scope.state.containerAddresses.arrAreaNames[index]
        }, function () {
          scope.updateRouteLayersAndPoints();
          scope.performArea();
        });
      };

      var changeAreaListener = function changeAreaListener() {// self.fromValue = null;
      };

      objFunctions.areaFunctions = {
        "selectListener": selectAreaListener,
        "deleteFunction": deleteAreaListener,
        "changeListener": changeAreaListener
      };
      return objFunctions;
    }
  }, {
    key: "addPopupHook",
    value: function addPopupHook() {
      var scope = this;

      var createPopupWrapper = function createPopupWrapper(objPopup) {
        var feature = objPopup.feature;
        var router = scope;

        var routingHandler = function routingHandler(event) {
          router.openControls(true);
          router.setMode("route");

          if (jQuery(event.currentTarget).hasClass(_c4gMapsConstant.cssConstants.POPUP_ROUTE_FROM)) {
            // from address
            var fromCoords = (0, _proj.toLonLat)(feature.getGeometry().getCoordinates(), "EPSG:3857");
            router.setRouteFrom(fromCoords[0], fromCoords[1]);
          } else {
            // to address
            var toCoords = (0, _proj.toLonLat)(feature.getGeometry().getCoordinates(), "EPSG:3857");
            router.setRouteTo(toCoords[0], toCoords[1]);
          }
        }; // end of "routingHandler()"


        var routeButtonWrapper = document.createElement('div');
        routeButtonWrapper.className = _c4gMapsConstant.cssConstants.POPUP_ROUTE_WRAPPER;
        var routeFromButton = document.createElement('button');
        routeFromButton.className = _c4gMapsConstant.cssConstants.ICON + ' ' + _c4gMapsConstant.cssConstants.POPUP_ROUTE_FROM;
        jQuery(routeFromButton).click(routingHandler);
        routeButtonWrapper.appendChild(routeFromButton);
        var routeFromButtonSpan = document.createElement('span'); // routeFromButtonSpan.innerHTML = scope.languageConstants.POPUP_ROUTE_FROM;

        routeFromButton.appendChild(routeFromButtonSpan);
        var routeToButton = document.createElement('button');
        routeToButton.className = _c4gMapsConstant.cssConstants.ICON + ' ' + _c4gMapsConstant.cssConstants.POPUP_ROUTE_TO;
        jQuery(routeToButton).click(routingHandler);
        routeButtonWrapper.appendChild(routeToButton);
        var routeToButtonSpan = document.createElement('span'); // routeToButtonSpan.innerHTML = scope.languageConstants.POPUP_ROUTE_TO;

        routeToButton.appendChild(routeToButtonSpan);
        return routeButtonWrapper;
      };

      window.c4gMapsHooks.proxy_appendPopup = window.c4gMapsHooks.proxy_appendPopup || [];
      window.c4gMapsHooks.proxy_appendPopup.push(function (params) {
        var mapController = params.mapController;
        var objPopup = params.popup;

        if (mapController.components.router && objPopup.popup.routing_link) {
          if (parseInt(mapController.data.popupHandling, 10) !== 3) {
            var routeButtonWrapper = createPopupWrapper(objPopup);
            window.c4gMapsPopup.$content.append(routeButtonWrapper);
          } else {
            var config = {
              feature: objPopup.feature,
              router: scope
            };
            params.comp.setAddButtons(_c4gRouterPopupButtons.RouterPopupButtons, config);
          }
        }
      });
    }
  }, {
    key: "init",
    value: function init() {
      var self = this;
      var styles = [this.props.mapController.data.router_from_locstyle, this.props.mapController.data.router_to_locstyle, this.props.mapController.data.router_point_locstyle, this.props.mapController.data.areaCenterLocstyle, this.props.mapController.data.clickLocstyle];

      if (this.props.mapController.data.priorityFeatures && this.props.mapController.data.priorityLocstyle) {
        styles.push(this.props.mapController.data.priorityLocstyle);
      } // check and load location styles via map-proxy


      this.props.mapController.proxy.locationStyleController.loadLocationStyles(styles);
      var mapData = this.props.mapController.data; // create router layer object

      this.objLayers = {};

      for (var key in mapData.routerLayers) {
        if (mapData.routerLayers.hasOwnProperty(key)) {
          this.objLayers[key] = mapData.routerLayers[key][Object.keys(mapData.routerLayers[key])[0]];
        }
      } // Add router layer(s)


      this.routingAltWaySource = new _source.Vector();
      this.routerWaySource = new _source.Vector();
      this.routerWayLayer = new _layer.Vector({
        source: this.routerWaySource,
        zIndex: 1,
        style: [new _style.Style({
          stroke: new _style.Stroke({
            color: 'rgba(255, 255, 255, 0.6)',
            width: 8
          })
        }), new _style.Style({
          stroke: new _style.Stroke({
            color: 'rgba(0, 51, 119, 0.9)',
            width: 4
          })
        })]
      });
      this.routerAltWayLayer = new _layer.Vector({
        source: this.routingAltWaySource,
        zIndex: 0,
        style: [new _style.Style({
          stroke: new _style.Stroke({
            color: 'rgba(255, 255, 255, 0.6)',
            width: 8
          })
        }), new _style.Style({
          stroke: new _style.Stroke({
            color: 'rgba(0, 51, 119, 0.4)',
            width: 4
          })
        })]
      });
      var selectInteraction = new _interaction.Select({
        style: [new _style.Style({
          stroke: new _style.Stroke({
            color: 'rgba(255, 255, 255, 0.0)',
            width: 8
          })
        }), new _style.Style({
          stroke: new _style.Stroke({
            color: 'rgba(255, 51, 119, 0.0)',
            width: 4
          })
        })]
      });
      selectInteraction.on('select', function (event) {
        var feature = event.selected[0];

        if (feature) {
          var geometry = feature.getGeometry();

          if (geometry && geometry.getType() === 'LineString') {
            self.showAltRoute(self.response, feature.getId());
          } else {
            if (feature) {
              self.clickFeatureEntryForFeature(feature);
            }
          }
        }
      });
      this.mapSelectInteraction = selectInteraction;
      this.modWayInteraction = new _interaction.Modify({
        source: this.routerWaySource,
        style: [new _style.Style({
          stroke: new _style.Stroke({
            color: 'rgba(255, 255, 255, 0.0)',
            width: 8
          })
        }), new _style.Style({
          stroke: new _style.Stroke({
            color: 'rgba(255, 51, 119, 0.0)',
            width: 4
          })
        })]
      });
      this.modWayInteraction.on('modifystart', function (event) {
        if (self.state.open !== true) {
          return;
        }

        self.modifyStartPoint = new _geom.Point(event.mapBrowserEvent.coordinate).transform("EPSG:3857", "EPSG:4326");
      });
      this.modWayInteraction.on('modifyend', function (event) {
        if (self.state.open !== true) {
          return;
        }

        var overPoint = new _geom.Point(event.mapBrowserEvent.coordinate).transform("EPSG:3857", "EPSG:4326");
        var minDistance = Infinity;
        var insertId;
        var arrKeys = Object.keys(self.state.overPoints);

        if (arrKeys.length > 0) {
          for (var id in self.state.overPoints) {
            if (self.state.overPoints.hasOwnProperty(id)) {
              var dist = self.calcDistance(self.modifyStartPoint.getCoordinates(), self.state.overPoints[id].getCoordinates());

              if (dist < minDistance) {
                minDistance = dist;
                insertId = id;
              }
            }
          }

          var distStart = self.calcDistance(self.state.fromPoint.getCoordinates(), self.modifyStartPoint.getCoordinates());
          var distEnd = self.calcDistance(self.state.toPoint.getCoordinates(), self.modifyStartPoint.getCoordinates());
          var distStartOld = self.calcDistance(self.state.fromPoint.getCoordinates(), self.state.overPoints[0].getCoordinates());
          var overEndIndex = arrKeys[arrKeys.length - 1];
          var distEndOld = self.calcDistance(self.state.toPoint.getCoordinates(), self.state.overPoints[overEndIndex].getCoordinates());

          if (distStart < distStartOld) {
            insertId = 0;
          } else if (distEnd < distEndOld) {
            insertId++;
          }
        } else {
          insertId = 0;
        }

        self.performReverseSearch("overAddress", overPoint.getCoordinates(), insertId);
        self.addOverPoint(overPoint.getCoordinates()[0], overPoint.getCoordinates()[1], insertId);
      });
      self.props.mapController.map.addInteraction(selectInteraction);

      if (this.props.mapController.data.enableOverPoints) {
        self.props.mapController.map.addInteraction(this.modWayInteraction);
      }

      selectInteraction.setActive(false);
      this.routerHintSource = new _source.Vector();
      this.routerHintLayer = new _layer.Vector({
        source: this.routerHintSource,
        style: function style(feature, resolution) {
          return !self.props.mapController.proxy || self.props.mapController.proxy.locationStyleController.arrLocStyles[self.props.mapController.data.router_point_locstyle].style(feature, resolution);
        }
      });
      this.mapData = this.props.mapController.data;
      this.locationsSource = new _source.Vector();
      this.locationsLayer = new _layer.Vector({
        source: this.locationsSource,
        zIndex: 2
      });
      this.areaSource = new _source.Vector();
      this.areaLayer = new _layer.Vector({
        source: this.areaSource,
        zIndex: 2
      });
      this.routerFeaturesSource = new _source.Vector();
      this.routerFeaturesLayer = new _layer.Vector({
        source: this.routerFeaturesSource,
        zIndex: 20 // declutter: true

      });
      this.routerLayerGroup = new _layer.Group({
        layers: new _ol.Collection([this.routerWayLayer, this.routerAltWayLayer, this.locationsLayer, this.routerHintLayer, this.routerFeaturesLayer, this.locationsLayer, this.areaLayer]),
        visible: true
      });
      this.props.mapController.map.addLayer(this.routerLayerGroup); // this.viewRouter = this.addRouterInterface();

      if (this.props.mapController.data.initialMode === "route" || !this.viewArea) {// this.viewRouter.activate();
      } // id => array of instructions, for each route one entry


      this.routeInstructions = {}; // store some vars for ajax-requests

      var profileId = this.props.mapController.data.profile;
      this.geoSearchApi = this.props.mapController.data.api.geosearch + '/' + profileId;
      this.geoReverseSearchApi = this.props.mapController.data.api.geosearch_reverse + '/' + profileId;
      this.routingApi = this.props.mapController.data.api.routing + '/' + profileId;

      if (this.usePermalink) {
        this.permalinkHandler.handleInitialParams();
      }

      this.objFunctions = this.createAutocompleteFunctions();
      this.addPopupHook();
      this.addMapInputInteraction();
    }
    /**
     * Calculates the euclidean distance between two points.
     * @param point1
     * @param point2
     */

  }, {
    key: "calcDistance",
    value: function calcDistance(point1, point2) {
      var square1, square2;
      square1 = Math.pow(point1[0] - point2[0], 2);
      square2 = Math.pow(point1[1] - point2[1], 2);
      return Math.sqrt(square1 + square2);
    }
    /**
     * Displays the route instructions in the portside router.
     * @param routeResponse
     * @param routeNumber
     */

  }, {
    key: "showRouteInstructions",
    value: function showRouteInstructions(routeResponse, routeNumber, routerWaySource, routerHintSource) {
      var scope,
          routerInstruction,
          routerInstructionsHeader,
          routerInstructionsHtml,
          instr,
          strType,
          strMod,
          rowstyle,
          routeNumber = routeNumber || 0,
          i,
          j,
          route_name_0 = "",
          route_name_1 = "",
          total_distance = "",
          total_time = "";
      scope = this;

      if (!this.props.mapController.data.showInstructions) {
        return;
      }

      routerInstructionsHeader = document.createElement('div');
      routerInstructionsHeader.className = _routingConstants.routingConstants.ROUTER_INSTRUCTIONS_HEADER;

      if (routeResponse) {
        if (!(routeResponse.features && routeResponse.features.length > 0) || !this.props.mapController.data.showFeatures) {
          jQuery(".c4g-router-instructions-wrapper").css('display', 'block');
        }

        if (this.props.mapController.data.router_api_selection == '1' || routeResponse.routeType == '1') {
          //OSRM-API:5.x
          if (routeResponse.routes[routeNumber].legs[0].summary) {
            route_name_0 = routeResponse.routes[routeNumber].legs[0].summary.split(",")[0];
            route_name_1 = routeResponse.routes[routeNumber].legs[0].summary.split(",")[1];

            if (routeResponse.routes[routeNumber].legs[1]) {
              route_name_1 = routeResponse.routes[routeNumber].legs[1].summary.split(",")[1];
            }
          }

          total_distance = routeResponse.routes[routeNumber].distance;
          total_time = routeResponse.routes[routeNumber].duration;
        } else if (this.props.mapController.data.router_api_selection == '0' || routeResponse.routeType == '0') {
          //OSRM-API:<5
          if (routeResponse.route_name) {
            route_name_0 = routeResponse.route_name[0];
            route_name_1 = routeResponse.route_name[1];
          }

          if (routeResponse.route_summary) {
            total_distance = routeResponse.route_summary.total_distance;
            total_time = routeResponse.route_summary.total_time;
          }
        } else if (this.props.mapController.data.router_api_selection == '2' || routeResponse.routeType == '2') {
          //ORS-API
          total_time = routeResponse.routes[routeNumber].summary.duration;
          total_distance = routeResponse.routes[routeNumber].summary.distance;
          var instructions = [];
          var segments = routeResponse.routes[routeNumber].segments;

          for (var _i = 0; _i < segments.length; _i++) {
            var currentSegment = segments[_i];

            for (var _j = 0; _j < currentSegment.steps.length; _j++) {
              var currentStep = currentSegment.steps[_j];
              currentStep.length = currentStep.distance / 1000;
              instructions.push(currentStep);
            }
          }

          this.routeInstructions[routeNumber] = {
            time: total_time,
            distance: total_distance,
            instructions: instructions
          };
          this.setState({
            routerInstructions: this.routeInstructions[routeNumber],
            "routerWaySource": routerWaySource,
            "routerHintSource": routerHintSource
          });
        } else if (this.props.mapController.data.router_api_selection == '3' || routeResponse.routeType == '3') {
          //Graphhopper
          total_distance = routeResponse.paths[routeNumber].distance;
          total_time = routeResponse.paths[routeNumber].time / 1000;
          var _instructions = [];
          var _segments = routeResponse.paths[routeNumber].instructions;

          for (var _i2 = 0; _i2 < _segments.length; _i2++) {
            var currentInstruction = _segments[_i2];
            currentInstruction.length = currentInstruction.distance / 1000;
            currentInstruction.instruction = currentInstruction.text;
            currentInstruction.type = currentInstruction.sign;

            _instructions.push(currentInstruction);
          }

          this.routeInstructions[routeNumber] = {
            time: total_time,
            distance: total_distance,
            instructions: _instructions
          };
          this.setState({
            routerInstructions: this.routeInstructions[routeNumber],
            "routerWaySource": routerWaySource,
            "routerHintSource": routerHintSource
          });
        } else if (this.props.mapController.data.router_api_selection == '4' || routeResponse.routeType == '4') {
          //Valhalla
          total_distance = routeResponse.trip.summary.length * 1000;
          total_time = routeResponse.trip.summary.time;
          this.routeInstructions[routeNumber] = {
            time: total_time,
            distance: total_distance,
            instructions: routeResponse.trip.legs[routeNumber].maneuvers
          };
          this.setState({
            routerInstructions: this.routeInstructions[routeNumber],
            "routerWaySource": routerWaySource,
            "routerHintSource": routerHintSource
          });
        }

        if (route_name_0 && route_name_1) {
          routerInstructionsHeader.innerHTML = '<label>' + this.languageConstants.ROUTER_VIEW_LABEL_ROUTE + '</label> <em>' + route_name_0 + ' &#8594; ' + route_name_1 + '</em><br>' + '<label>' + this.languageConstants.ROUTER_VIEW_LABEL_DISTANCE + '</label> <em>' + total_distance + '</em><br>' + '<label>' + this.languageConstants.ROUTER_VIEW_LABEL_TIME + '</label> <em>' + total_time + '</em><br>';
        } else if (this.routeProfile && this.routeProfile.active && Array.isArray(this.routeProfile.active)) {
          routerInstructionsHeader.innerHTML = '<label>' + this.languageConstants.ROUTER_VIEW_LABEL_PROFILE + '</label> <em>' + this.props.mapController.data.router_profiles[this.routeProfile.active] + '</em><br>' + '<label>' + this.languageConstants.ROUTER_VIEW_LABEL_DISTANCE + '</label> <em>' + total_distance + '</em><br>' + '<label>' + this.languageConstants.ROUTER_VIEW_LABEL_TIME + '</label> <em>' + total_time + '</em><br>';
        }

        routerInstruction = document.createElement('div');
        routerInstructionsHtml = '<table class="' + _routingConstants.routingConstants.ROUTER_INSTRUCTIONS_TABLE + '" cellpadding="0" cellspacing="0">';

        if (this.props.mapController.data.router_api_selection === '1' || routeResponse.routeType == '1') {//OSRM-API:5.x
        } else if (this.props.mapController.data.router_api_selection === '0' || routeResponse.routeType == '0') {//OSRM-API:<5
        } else if (this.props.mapController.data.router_api_selection === '2' || routeResponse.routeType == '2') {//OpenRouteService
        } else if (this.props.mapController.data.router_api_selection === '3' || routeResponse.routeType == '3') {// Graphhopper
        } else if (this.props.mapController.data.router_api_selection === '4' || routeResponse.routeType == '4') {// Valhalla
        }

        routerInstructionsHtml += '</table>';
        routerInstruction.innerHTML = routerInstructionsHtml;
        this.adjustInstructionMapInteraction();
      }
    }
    /**
     * Asynchronous implementation of the forward geosearch.
     */

  }, {
    key: "performGeoSearch",
    value: function () {
      var _performGeoSearch = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(address) {
        var scope, url;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                scope = this;
                url = scope.geoSearchApi + '?format=json&limit=1&q=' + encodeURI(address);

                if (this.mapData && this.mapData.geosearch && this.mapData.geosearch.searchKey && this.mapData.geosearch.url) {
                  url = this.mapData.geosearch.url + "search.php?key=" + this.mapData.geosearch.searchKey + '&format=json&limit=1&q=' + encodeURI(address);
                }

                _context.next = 5;
                return fetch(url).then(function (response) {
                  if (response) {
                    return response.json().then(function (data) {
                      return [parseFloat(data[0].lon), parseFloat(data[0].lat)];
                    }); // return [parseFloat(response[0].lon), parseFloat(response[0].lat)];
                  } else {
                    // show error hint
                    Promise.all(/*! import() */[__webpack_require__.e("vendors-CoreBundle_node_modules_sweetalert2_dist_sweetalert2_all_js"), __webpack_require__.e("CoreBundle_Resources_public_vendor_js_AlertHandler_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./../../../../../CoreBundle/Resources/public/vendor/js/AlertHandler */ "../CoreBundle/Resources/public/vendor/js/AlertHandler.js")).then(function (module) {
                      var alertHandler = new module.AlertHandler();
                      alertHandler.showInfoDialog(scope.props.langConstants.ROUTER_VIEW_ALERT_ERROR, scope.props.langConstants.ROUTER_VIEW_ALERT_ADDRESS);
                    });
                  }
                })["catch"](function () {
                  Promise.all(/*! import() */[__webpack_require__.e("vendors-CoreBundle_node_modules_sweetalert2_dist_sweetalert2_all_js"), __webpack_require__.e("CoreBundle_Resources_public_vendor_js_AlertHandler_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./../../../../../CoreBundle/Resources/public/vendor/js/AlertHandler */ "../CoreBundle/Resources/public/vendor/js/AlertHandler.js")).then(function (module) {
                    var alertHandler = new module.AlertHandler();
                    alertHandler.showInfoDialog(scope.props.langConstants.ROUTER_VIEW_ALERT_ERROR, scope.props.langConstants.ROUTER_VIEW_ALERT_ADDRESS);
                  });
                });

              case 5:
                return _context.abrupt("return", _context.sent);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function performGeoSearch(_x) {
        return _performGeoSearch.apply(this, arguments);
      }

      return performGeoSearch;
    }()
    /**
     * Searches the geo-coordinates for a given location.
     * @param $input        The input field containing the location.
     * @param value         The property in which the resulting coordinate should be stored.
     * @param opt_callback  Optional callback. Is executed after successful search.
     * @returns {string}
     */

  }, {
    key: "performSearch",
    value: function performSearch($input, value, opt_callback) {
      var map, bounds, viewbox, scope, url;
      scope = this;

      if ($input.val() === "") {
        delete scope[value];
        return "";
      }

      map = scope.props.mapController.map;
      bounds = map.getView().calculateExtent(map.getSize());
      bounds = (0, _proj.transformExtent)(bounds, map.getView().getProjection(), 'EPSG:4326');
      viewbox = '&viewbox=' + bounds[0] + ',' + bounds[1] + ',' + bounds[2] + ',' + bounds[3];
      url = scope.geoSearchApi + '?format=json&limit=1&q=' + encodeURI($input.val()) + viewbox;

      if (this.mapData && this.mapData.geosearch && this.mapData.geosearch.searchKey && this.mapData.geosearch.url) {
        url = this.mapData.geosearch.url + "search.php?key=" + this.mapData.geosearch.searchKey + '&format=json&limit=1&q=' + encodeURI($input.val()) + viewbox;
      }

      if (this.mapData.geosearch.params) {
        for (var param in this.mapData.geosearch.params) {
          if (this.mapData.geosearch.params.hasOwnProperty(param)) {
            url += "&" + param + "=" + this.mapData.geosearch.params[param];
          }
        }
      }

      jQuery.ajax({
        'url': url
      }).done(function (response) {
        if (response.length > 0) {
          if (value === "overValue") {
            if (!scope.overValue) {
              scope.overValue = [];
            }

            var overPoint = new _geom.Point([parseFloat(response[0].lon), parseFloat(response[0].lat)]);
            var deleteButton = $input.next()[0]; // traverse the dom level until the delete button is found

            while (!jQuery(deleteButton).hasClass('c4g-router-input-clear')) {
              deleteButton = jQuery(deleteButton).next()[0];
            }

            deleteButton.id = overPoint['ol_uid'];
            scope.overValue.push(overPoint);
            scope.$buttonOver.prop("disabled", false);
          } else {
            var coords = [parseFloat(response[0].lon), parseFloat(response[0].lat)];
            var point = new _geom.Point(coords);

            if (value === "fromValue") {
              scope.setState({
                fromPoint: point,
                fromAddress: $input.val()
              }, function () {
                return scope.updateRouteLayersAndPoints();
              });
            } else if (value === "toValue") {
              scope.setState({
                toPoint: point,
                toAddress: $input.val()
              }, function () {
                return scope.updateRouteLayersAndPoints();
              });
            } // TODO wieder einbauen
            // switch(value) {
            //   case "fromValue":
            //     scope.updateLinkFragments("addressFrom", coords);
            //     break;
            //   case "toValue":
            //     scope.updateLinkFragments("addressTo", coords);
            //     break;
            //   case "areaValue":
            //     scope.updateLinkFragments("addressArea", coords);
            //     break;
            //   default:
            //     break;
            // }

          }
        } else {
          // show error hint
          Promise.all(/*! import() */[__webpack_require__.e("vendors-CoreBundle_node_modules_sweetalert2_dist_sweetalert2_all_js"), __webpack_require__.e("CoreBundle_Resources_public_vendor_js_AlertHandler_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./../../../../../CoreBundle/Resources/public/vendor/js/AlertHandler */ "../CoreBundle/Resources/public/vendor/js/AlertHandler.js")).then(function (module) {
            var alertHandler = new module.AlertHandler();
            alertHandler.showInfoDialog(scope.props.langConstants.ROUTER_VIEW_ALERT_ERROR, scope.props.langConstants.ROUTER_VIEW_ALERT_ADDRESS);
          });
        }

        if (opt_callback && typeof opt_callback === "function") {
          opt_callback();
        }
      }).fail(function () {
        Promise.all(/*! import() */[__webpack_require__.e("vendors-CoreBundle_node_modules_sweetalert2_dist_sweetalert2_all_js"), __webpack_require__.e("CoreBundle_Resources_public_vendor_js_AlertHandler_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./../../../../../CoreBundle/Resources/public/vendor/js/AlertHandler */ "../CoreBundle/Resources/public/vendor/js/AlertHandler.js")).then(function (module) {
          var alertHandler = new module.AlertHandler();
          alertHandler.showInfoDialog(scope.props.langConstants.ROUTER_VIEW_ALERT_ERROR, scope.props.langConstants.ROUTER_VIEW_ALERT_ADDRESS);
        });
      });
      return "";
    }
    /**
     * Converts a given coordinate into the corresponding location.
     * @param stateProp     The state property of this where the address should be stored.
     * @param value         The property that contains the coordinates.
     * @param opt_index     The index for the overAddress (over points only)
     */

  }, {
    key: "performReverseSearch",
    value: function performReverseSearch(stateProp, value, opt_index) {
      var self = this,
          url;
      url = this.geoReverseSearchApi + '?format=json&lat=' + value[1] + '&lon=' + value[0];

      if (this.mapData && this.mapData.geosearch && this.mapData.geosearch.reverseKey && this.mapData.geosearch.url) {
        url = this.mapData.geosearch.url + "reverse.php?key=" + this.mapData.geosearch.reverseKey + '&format=json&lat=' + value[1] + '&lon=' + value[0];
      }

      jQuery.ajax({
        'url': url
      }).done(function (response) {
        if (response) {
          var value = "";

          if (response.address) {
            if (response.address.road || response.address.path || response.address.pedestrian) {
              value += response.address.road || response.address.path || response.address.pedestrian;

              if (response.address.house_number) {
                value += " " + response.address.house_number;
              }
            }

            if (response.address.city || response.address.town) {
              value += value ? ", " : "";
              value += response.address.city || response.address.town;
            }
          }

          if (value === "") {
            value = response.display_name;
          } // TODO update router permalink


          switch (stateProp) {
            case "areaAddress":
              self.setState({
                areaAddress: value
              }, function () {
                if (jQuery("#areaFrom").val() === "") {
                  jQuery("#areaFrom").val(value);
                }
              }); // self.updateLinkFragments("addressArea", value);

              break;

            case "fromAddress":
              self.setState({
                fromAddress: value
              }, function () {
                if (jQuery("#routingFrom").val() === "") {
                  jQuery("#routingFrom").val(value);
                }
              }); // update address in link
              // self.updateLinkFragments("addressFrom", value);

              break;

            case "toAddress":
              self.setState({
                toAddress: value
              }, function () {
                if (jQuery("#routingTo").val() === "") {
                  jQuery("#routingTo").val(value);
                }
              }); // update address in link
              // self.updateLinkFragments("addressTo", value);

              break;

            case "overAddress":
              var overAddresses = self.state.overAddresses;
              overAddresses.splice(opt_index, 1, value);
              self.setState({
                overAddresses: overAddresses
              });
              break;
          }
        }
      });
    }
    /**
     * Executes an area search with the given point as center. If there are any, the features in the perimeter will be
     * drawn onto the map and displayed in the feature container.
     */

  }, {
    key: "performArea",
    value: function performArea() {
      var self = this;
      var fromPoint = this.state.areaPoint;

      if (!fromPoint) {
        return;
      }

      var fromCoord = [fromPoint.getCoordinates()[1], fromPoint.getCoordinates()[0]];
      var profileId = this.props.mapController.data.profile;
      var url = 'con4gis/areaService/' + profileId + '/' + this.state.layerArea + '/' + this.state.detourArea + '/' + fromCoord;
      url += '?profile=' + this.state.currentProfile;

      if (self.areaAjax) {
        self.areaAjax.abort();
      } // this.spinner.show();


      self.areaAjax = jQuery.ajax({
        'url': url
      }).done(function (response) {
        self.response = response;

        if (response) {
          // const routerLayers = self.options.mapController.data.routerLayers;
          // const chosenOption = self.activeLayerValueArea;
          // this should be changed soon, as it totally messes up the logic of the structure
          var sortedFeatures = self.showFeatures(response[0], response[1], "area");
          self.setState({
            "featureList": {
              "features": sortedFeatures,
              "type": response[1]
            },
            "featureSource": self.routerFeaturesSource,
            "openResults": true
          });
        }
      });
    }
    /**
     * Executes a route search with the given from and to points. Displays features and feature entries on success. Uses
     * overpoints, if any are given.
     * @param fromPoint
     * @param toPoint
     * @param overPoint
     * @returns {string}
     */

  }, {
    key: "performViaRoute",
    value: function performViaRoute(fromPoint, toPoint, overPoint) {
      var url, scope, fromCoord, toCoord, overCoord;
      scope = this;

      if (this.state.featureSource) {
        this.state.featureSource.clear();
      } // this.areaSource.clear();


      this.mapSelectInteraction.getFeatures().clear();

      if (!fromPoint) {
        fromPoint = this.fromPoint;

        if (!fromPoint) {
          return;
        }
      }

      if (!toPoint) {
        if (!toPoint) {
          return;
        }

        toPoint = this.toPoint;
      }

      if (!overPoint) {
        if (this.overPoints) {
          overPoint = this.overPoints;
        }
      }

      fromCoord = [fromPoint.getCoordinates()[1], fromPoint.getCoordinates()[0]];
      toCoord = [toPoint.getCoordinates()[1], toPoint.getCoordinates()[0]];

      if (overPoint && Object.keys(overPoint).length > 0) {
        overCoord = [];

        for (var propt in overPoint) {
          if (overPoint.hasOwnProperty(propt) && overPoint[propt]) {
            overCoord.push([overPoint[propt].getCoordinates()[1], overPoint[propt].getCoordinates()[0]]);
          }
        }
      }

      if (this.props.mapController.data.router_api_selection >= '1') {
        //OSRM-API:5.x or ORS- API
        var _profileId = this.props.mapController.data.profile;
        url = 'con4gis/routeService/' + this.props.mapController.data.lang + '/' + _profileId + '/' + this.state.layerRoute + '/' + this.state.detourRoute + '/' + fromCoord;

        if (overPoint) {
          for (var i = 0; i < overCoord.length; i++) {
            url += ';' + overCoord[i];
          }
        }

        url += ';' + toCoord; // if (this.state.currentProfile) {

        url += '?profile=' + this.state.currentProfile; // }

        if (scope.routeAjax) {
          scope.routeAjax.abort();
        }

        scope.routeAjax = jQuery.ajax({
          'url': url
        }).done(function (response) {
          scope.response = response;

          if (response) {
            if (response.error) {
              Promise.all(/*! import() */[__webpack_require__.e("vendors-CoreBundle_node_modules_sweetalert2_dist_sweetalert2_all_js"), __webpack_require__.e("CoreBundle_Resources_public_vendor_js_AlertHandler_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./../../../../../CoreBundle/Resources/public/vendor/js/AlertHandler */ "../CoreBundle/Resources/public/vendor/js/AlertHandler.js")).then(function (module) {
                var alertHandler = new module.AlertHandler();
                alertHandler.showInfoDialog(scope.props.langConstants[response.error]);
              });
            } else {
              scope.showRouteLayer(response);
              scope.showRouteInstructions(response, 0, scope.routerWaySource, scope.routerHintSource);

              if (response.features && (response.features.elements || response.features.length > 0)) {
                var sortedFeatures = scope.showFeatures(response.features, response.type, "router");
                scope.setState({
                  "featureList": {
                    "features": sortedFeatures,
                    "type": response.type
                  },
                  "featureSource": scope.routerFeaturesSource,
                  "openResults": true
                });
              } else {
                scope.setState({
                  "openResults": true
                });
              }
            }
          }
        }).always(function () {
          scope.routeAjax = undefined;

          if (scope.props.mapController.data.closeAfterSearch) {}
        });
        return '';
      } else {
        //OSRM-API:<5
        try {
          url = 'con4gis/routeService/' + profileId + '?output=json&instructions=true&alt=false&loc_from=' + fromCoord + '&loc_to=' + toCoord;
          jQuery.ajax({
            'url': url
          }).done(function (response) {
            if (response) {
              scope.showRoute(response);
            }
          });
          return '';
        } catch (Exception) {
          console.log("Please use a more modern API-Version for the Routeservice");
        }
      }
    }
    /**
     * Checks the routing properties and triggers a new route search, when the mandatory parameters are set.
     */

  }, {
    key: "recalculateRoute",
    value: function recalculateRoute() {
      if (this.state.fromPoint && this.state.toPoint) {
        if (this.state.overPoints && Object.keys(this.state.overPoints).length > 0) {
          this.performViaRoute(this.state.fromPoint, this.state.toPoint, this.state.overPoints);
        } else {
          this.performViaRoute(this.state.fromPoint, this.state.toPoint);
        }
      }
    }
  }, {
    key: "getActiveLayer",
    value: function getActiveLayer(layerId) {
      return this.objLayers[layerId];
    }
    /**
     * Clears the current features from the map and displays the given new features. The features are sorted by the configured
     * property. The function takes the backend configuration according to prioritized features into account.
     * @param features
     * @param type
     * @param mode
     * @param noClear
     * @returns {*}
     */

  }, {
    key: "showFeatures",
    value: function showFeatures(features) {
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "table";
      var mode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "router";
      var noClear = arguments.length > 3 ? arguments[3] : undefined;
      var self = this;

      if (!noClear) {
        this.routerFeaturesSource.clear();
      } // interim clear of feature selection


      if (!features || features.length === 0) {
        return [];
      }

      var mapData = this.mapData;
      var layerId = this.state.mode === "route" ? this.state.layerRoute : this.state.layerArea;
      var activeLayer = this.state.mode === "route" ? this.state.layerValueRoute : this.state.layerValueArea;
      var layer = this.getActiveLayer(layerId).layerData;
      var unstyledFeatures = [];
      var contentFeatures = [];
      var missingStyles = [];
      var priceSortedFeatures = features.length ? features.slice() : features.elements.slice();
      var bestFeatures = [];
      this.bestFeatureIds = [];

      if (mapData.priorityFeatures && mapData.priorityLocstyle && features.length > 0) {
        // sort by selected value for the map label ascending
        priceSortedFeatures.sort(function (a, b) {
          return parseFloat(a[mapData.routerLayers[layerId][activeLayer]['mapLabel']]) - parseFloat(b[mapData.routerLayers[layerId][activeLayer]['mapLabel']]);
        });
        var featureCount = parseInt(mapData.priorityFeatures, 10);
        var upperBound = featureCount > priceSortedFeatures.length ? priceSortedFeatures.length : featureCount;

        for (var i = 0; i < upperBound; i++) {
          bestFeatures[i] = priceSortedFeatures[i];
          this.bestFeatureIds.push(priceSortedFeatures[i]['id']);
        }
      }

      if (type === "petrols" && mode !== "area") {
        features = features.elements;
      }

      if (type !== "overpass") {
        featureLoop: for (var _i3 = 0; features && _i3 < features.length; _i3++) {
          if (!features[_i3].id) {
            continue;
          }

          var label = "";
          var feature = features[_i3];
          var resultCoordinate = void 0;
          var contentFeature = void 0;
          resultCoordinate = (0, _proj.transform)([parseFloat(feature['geox']), parseFloat(feature['geoy'])], 'EPSG:4326', 'EPSG:3857');
          var point = new _geom.Point(resultCoordinate);
          contentFeature = new _ol.Feature(point);
          contentFeature.setId(feature.id);
          contentFeature.set('loc_linkurl', layer.loc_linkurl);
          contentFeature.set('locstyle', layer.locstyle);
          contentFeature.set('hover_location', layer.hover_location);
          contentFeature.set('hover_style', layer.hover_style);
          contentFeature.set('zoom_onclick', layer.zoom_onclick);
          contentFeature.set('tid', feature.id);

          if (mapData.routerLayers[layerId] && mapData.routerLayers[layerId][activeLayer] && mapData.routerLayers[layerId][activeLayer]['mapLabel'] && feature[mapData.routerLayers[layerId][activeLayer]['mapLabel']]) {
            label = feature[mapData.routerLayers[layerId][activeLayer]['mapLabel']];
          } else if (mapData.routerLayers[layerId] && mapData.routerLayers[layerId][activeLayer] && mapData.routerLayers[layerId][activeLayer]['mapLabel'] && feature.tags && feature.tags[mapData.routerLayers[layerId][activeLayer]['mapLabel']]) {
            label = feature.tags[mapData.routerLayers[layerId][activeLayer]['mapLabel']];
          }

          var locstyle = feature['locstyle'] || layer.locstyle;

          if (mapData.priorityFeatures && mapData.priorityLocstyle) {
            if (bestFeatures.includes(feature)) {
              locstyle = mapData.priorityLocstyle;
            }
          }

          contentFeature.set('locationStyle', locstyle);
          contentFeature.set('zIndex', _i3);
          contentFeature.set('label', label);

          if (locstyle && self.props.mapController.proxy.locationStyleController.arrLocStyles[locstyle] && self.props.mapController.proxy.locationStyleController.arrLocStyles[locstyle].style) {
            contentFeature.setStyle(self.props.mapController.proxy.locationStyleController.arrLocStyles[locstyle].style);

            if (self.props.mapController.data.hideFeaturesWithoutLabel) {
              if (label && label !== "") {
                contentFeatures.push(contentFeature);
              }
            } else {
              contentFeatures.push(contentFeature);
            }
          } else {
            contentFeature.set('styleId', locstyle);

            if (self.props.mapController.data.hideFeaturesWithoutLabel) {
              if (label && label !== "") {
                unstyledFeatures.push(contentFeature);
                missingStyles[locstyle] = locstyle;
              }
            } else {
              unstyledFeatures.push(contentFeature);
              missingStyles[locstyle] = locstyle;
            }
          }

          for (var tag in feature.tags) {
            if (feature.tags.hasOwnProperty(tag)) {
              contentFeature.set(tag, feature.tags[tag]);
            }
          }
        }
      } else {
        var geojson;

        if (features.elements) {
          geojson = osmtogeojson(features);
          this.geoJsonFeatures = geojson;
        } else {
          geojson = this.geoJsonFeatures;
        }

        var mapProj = self.props.mapController.map.getView().getProjection();
        contentFeatures = new _format.GeoJSON().readFeatures(geojson, {
          dataProjection: 'EPSG:4326',
          featureProjection: mapProj
        });
        var labelKey = mapData.routerLayers[layerId][activeLayer]['mapLabel'];

        for (var id in contentFeatures) {
          if (contentFeatures.hasOwnProperty(id)) {
            contentFeatures[id].set('loc_linkurl', layer.loc_linkurl);
            contentFeatures[id].set('locstyle', layer.locstyle);
            contentFeatures[id].set('hover_location', layer.hover_location);
            contentFeatures[id].set('hover_style', layer.hover_style);
            contentFeatures[id].set('zoom_onclick', layer.zoom_onclick);
            contentFeatures[id].set('tid', parseInt(contentFeatures[id].get('id').split('/')[1]));
            contentFeatures[id].set('label', contentFeatures[id].get(labelKey));

            if (self.props.mapController.proxy.locationStyleController.arrLocStyles[layer.locstyle]) {
              contentFeatures[id].setStyle(self.props.mapController.proxy.locationStyleController.arrLocStyles[layer.locstyle].style);
            }
          }
        }
      }

      if (missingStyles && missingStyles.length > 0) {
        self.props.mapController.proxy.locationStyleController.loadLocationStyles(missingStyles, {
          done: function done() {
            for (var _i4 = 0; _i4 < unstyledFeatures.length; _i4++) {
              var styleId = unstyledFeatures[_i4].get('styleId');

              unstyledFeatures[_i4].setStyle(self.props.mapController.proxy.locationStyleController.arrLocStyles[styleId].style);

              self.routerFeaturesSource.addFeature(unstyledFeatures[_i4]);
            }

            missingStyles = undefined;
          }
        });
      }

      if (contentFeatures && contentFeatures.length > 0) {
        this.routerFeaturesSource.addFeatures(contentFeatures);
      }

      return priceSortedFeatures;
    }
    /**
     * Displays the main route.
     * @param routeResponse
     */

  }, {
    key: "showRoute",
    value: function showRoute(routeResponse) {
      this.showRouteLayer(routeResponse, 0);
      this.showRouteInstructions(routeResponse, 0);
    }
    /**
     * Show an alternate route.
     * @param routeResponse
     * @param routeNumber
     */

  }, {
    key: "showAltRoute",
    value: function showAltRoute(routeResponse, routeNumber) {
      this.showRouteLayer(routeResponse, routeNumber);
      this.showRouteInstructions(routeResponse, routeNumber);
    }
    /**
     * Displays a route on the map.
     * @param routeResponse
     * @param routeNumber
     */

  }, {
    key: "showRouteLayer",
    value: function showRouteLayer(routeResponse, routeNumber) {
      var mapView,
          wayPolyline,
          routeFeatures,
          altRouteFeatures,
          rightPadding,
          leftPadding,
          routeNumber = routeNumber || 0;

      if (routeResponse) {
        this.routerWaySource.clear();
        this.routingAltWaySource.clear();
        mapView = this.props.mapController.map.getView();

        if (this.props.mapController.data.router_api_selection == '1' || this.props.mapController.data.router_api_selection == '2' || routeResponse.routeType == '1' || routeResponse.routeType == '2') {
          //OSRM-API:5.x
          wayPolyline = new _format.Polyline(); // add route

          if (routeResponse.routes) {
            //check for alternative route
            if (routeResponse.routes[1]) {
              if (routeNumber === 1) {
                altRouteFeatures = wayPolyline.readFeatures(routeResponse.routes[0].geometry, {
                  dataProjection: 'EPSG:4326',
                  featureProjection: mapView.getProjection()
                });
                altRouteFeatures[0].setId(0);
              } else {
                altRouteFeatures = wayPolyline.readFeatures(routeResponse.routes[1].geometry, {
                  dataProjection: 'EPSG:4326',
                  featureProjection: mapView.getProjection()
                });
                altRouteFeatures[0].setId(1);
              }
            }

            routeFeatures = wayPolyline.readFeatures(routeResponse.routes[routeNumber].geometry, {
              dataProjection: 'EPSG:4326',
              featureProjection: mapView.getProjection()
            });
            routeFeatures[0].setId(routeNumber);
          }
        } else if (this.props.mapController.data.router_api_selection == '0' || routeResponse.routeType == '0') {
          //OSRM-API:<5
          wayPolyline = new _format.Polyline({
            'factor': this.props.mapController.data.router_viaroute_precision || 1e6
          }); // add route

          routeFeatures = wayPolyline.readFeatures(routeResponse.route_geometry, {
            dataProjection: 'EPSG:4326',
            featureProjection: mapView.getProjection()
          });
        } else if (this.props.mapController.data.router_api_selection == '3') {
          wayPolyline = new _format.Polyline();

          if (routeResponse.paths && routeResponse.paths[1]) {
            //check for alternative route
            if (routeNumber == 1) {
              altRouteFeatures = wayPolyline.readFeatures(routeResponse.paths[0].points, {
                dataProjection: 'EPSG:4326',
                featureProjection: mapView.getProjection()
              });
              altRouteFeatures[0].setId(0);
            } else {
              altRouteFeatures = wayPolyline.readFeatures(routeResponse.paths[1].points, {
                dataProjection: 'EPSG:4326',
                featureProjection: mapView.getProjection()
              });
              altRouteFeatures[0].setId(1);
            }
          }

          routeFeatures = wayPolyline.readFeatures(routeResponse.paths[routeNumber].points, {
            dataProjection: 'EPSG:4326',
            featureProjection: mapView.getProjection()
          });
          routeFeatures[0].setId(routeNumber);
        } else if (this.props.mapController.data.router_api_selection == "4" || routeResponse.routeType == '4') {
          wayPolyline = new _format.Polyline({
            'factor': 1e6
          });

          if (routeResponse.trip && routeResponse.trip.legs && routeResponse.trip.legs[1]) {
            //check for alternative route
            if (routeNumber == 1) {
              altRouteFeatures = wayPolyline.readFeatures(routeResponse.trip.legs[1].shape, {
                dataProjection: 'EPSG:4326',
                featureProjection: mapView.getProjection()
              });
              altRouteFeatures[0].setId(0);
            } else {
              altRouteFeatures = wayPolyline.readFeatures(routeResponse.trip.legs[1].shape, {
                dataProjection: 'EPSG:4326',
                featureProjection: mapView.getProjection()
              });
              altRouteFeatures[0].setId(1);
            }
          }

          routeFeatures = wayPolyline.readFeatures(routeResponse.trip.legs[routeNumber].shape, {
            dataProjection: 'EPSG:4326',
            featureProjection: mapView.getProjection()
          });
          routeFeatures[0].setId(routeNumber);
        }

        if (this.props.mapController.data.router_alternative == '1') {
          if (routeResponse.routes && routeResponse.routes.length > 1 && routeResponse.routes[1] || routeResponse.paths && routeResponse.paths.length > 1 && routeResponse.paths[1]) {
            this.routingAltWaySource.addFeatures(altRouteFeatures);
          }
        }

        if (routeFeatures) {
          this.routerWaySource.addFeatures(routeFeatures); // render view
          // so the route gets drawn before the animation starts

          this.props.mapController.map.renderSync(); // animation

          mapView.animate({
            start: +new Date(),
            duration: 2000,
            resolution: mapView.getResolution(),
            center: [0, 0] //rotation: Math.PI

          }); // calculate padding

          var width = jQuery(".c4g-starboard-container").css('width');

          if (width) {
            width = width.split(".");
            width = Array.isArray(width) ? width[0] : width;
            width = parseInt(width) + 50;
          } else {
            width = 50;
          } // center on route


          mapView.fit(routeFeatures[0].getGeometry(), {
            size: this.props.mapController.map.getSize(),
            padding: [50, width, 50, 50]
          });
        }
      }
    }
    /**
     * Creates an interaction for routing instructions. When hovering the instructions in the portside container, the
     * location of the instruction is highlighted on the route.
     * @param routerInstruction
     */

  }, {
    key: "adjustInstructionMapInteraction",
    value: function adjustInstructionMapInteraction(routerInstruction) {
      var self = this,
          fnItemClick,
          fnItemOver,
          fnItemOut;

      fnItemClick = function fnItemClick(element) {
        self.routerHintSource.clear();
        var feature = self.routerWaySource.getFeatures()[0];
        var coordinates = feature.getGeometry().getCoordinates();
        var coordLonLat = element.data('pos');

        if (coordLonLat) {
          var stringlonlat = coordLonLat.split(",");
          stringlonlat[0] = parseFloat(stringlonlat[0]);
          stringlonlat[1] = parseFloat(stringlonlat[1]);
          var newCoord = (0, _proj.fromLonLat)(stringlonlat);
          var currentHintFeature = new _ol.Feature({
            geometry: new _geom.Point(newCoord)
          });
          self.routerHintSource.addFeature(currentHintFeature);
          self.options.mapController.map.getView().setCenter(newCoord);
        }

        if (coordinates) {
          var start = element.data('start');
          var end = element.data('end');

          if (start, end) {
            var geom = new _geom.LineString(coordinates.slice(start, end));
            var currentHintFeature = new _ol.Feature({
              geometry: geom
            });
            currentHintFeature.setStyle(new _style.Style({
              stroke: new _style.Stroke({
                color: 'rgba(255, 0, 0, 1)',
                width: 20
              })
            }));
            var currentZoom = self.options.mapController.map.getView().getZoom();
            self.routerHintSource.addFeature(currentHintFeature);
            self.options.mapController.map.getView().fit(geom);
            var afterZoom = self.options.mapController.map.getView().getZoom();
            var endZoom = Math.round((currentZoom + afterZoom) / 2);
            endZoom = endZoom > afterZoom ? afterZoom : endZoom;
            self.options.mapController.map.getView().setZoom(endZoom);
          }
        }
      };

      fnItemOver = function fnItemOver(element) {
        if (self.routerWaySource && self.routerWaySource.getFeatures() && self.options.mapController.data.router_api_selection == '0') {
          var feature = self.routerWaySource.getFeatures()[0];

          if (feature) {
            self.routerHintSource.clear();
            var currentHintFeature = new _ol.Feature({
              geometry: new _geom.Point(feature.getGeometry().getCoordinates()[element.data('pos')])
            });
            self.routerHintSource.addFeature(currentHintFeature);
          }
        }

        if (self.routerWaySource && self.routerWaySource.getFeatures() && self.options.mapController.data.router_api_selection >= '1') {
          var feature = self.routerWaySource.getFeatures()[0];

          if (feature) {
            self.routerHintSource.clear();
            var coordLonLat = element.data('pos');

            if (coordLonLat) {
              var stringlonlat = coordLonLat.split(",");
              stringlonlat[0] = parseFloat(stringlonlat[0]);
              stringlonlat[1] = parseFloat(stringlonlat[1]);
              var newCoord = (0, _proj.fromLonLat)(stringlonlat);
              var currentHintFeature = new _ol.Feature({
                geometry: new _geom.Point(newCoord)
              });
              self.routerHintSource.addFeature(currentHintFeature);
            }

            feature = self.routerWaySource.getFeatures()[0];
            var coordinates = feature.getGeometry().getCoordinates();

            if (coordinates) {
              var start = element.data('start');
              var end = element.data('end');

              if (start, end) {
                var currentHintFeature = new _ol.Feature({
                  geometry: new _geom.LineString(coordinates.slice(start, end))
                });
                currentHintFeature.setStyle(new _style.Style({
                  stroke: new _style.Stroke({
                    color: 'rgba(255, 0, 0, 1)',
                    width: 15
                  })
                }));
                self.routerHintSource.addFeature(currentHintFeature);
              }
            }
          }
        }
      };

      fnItemOut = function fnItemOut() {
        self.routerHintSource.clear();
      };

      jQuery('[data-start]', routerInstruction).each(function (index, element) {
        var $element = jQuery(element);
        $element.click(function () {
          fnItemClick($element);
        });
        $element.on('mouseenter', function () {
          fnItemOver($element);
        });
        $element.on('mouseleave', function () {
          fnItemOut();
        });
      });
      jQuery('[data-pos]', routerInstruction).each(function (index, element) {
        var $element = jQuery(element);
        $element.click(function () {
          fnItemClick($element);
        });
        $element.on('mouseenter', function () {
          fnItemOver($element);
        });
        $element.on('mouseleave', function () {
          fnItemOut();
        });
      });
    }
    /**
     * Adds a click interaction for the router. Upon map click, the clicked points are converted to locations and the
     * route search is started, as long as all mandatory properties are set.
     */

  }, {
    key: "addMapInputInteraction",
    value: function addMapInputInteraction() {
      var self = this,
          coordinate;

      self.fnMapRouterInteraction = function (evt) {
        if (self.state.open !== true) {
          return;
        }

        var feature = self.props.mapController.map.forEachFeatureAtPixel(evt.pixel, function (feature, layer) {
          return feature;
        });

        if (feature && feature.getId()) {
          var activeId = feature.getId().search && feature.getId().search('/') ? parseFloat(feature.getId().substring(feature.getId().search('/') + 1)) : feature.getId();
          self.setState({
            activeId: activeId,
            openResults: true
          }, function () {
            // TODO behaves differently for route or area search
            if (document.querySelector(".c4g-route-feature-wrapper")) {
              var featureWrapper = document.querySelector(".c4g-route-feature-wrapper");
              var activeFeature = document.querySelector("li.route-features-list-element.c4g-active");

              if (featureWrapper && activeFeature) {
                featureWrapper.scrollTo(0, activeFeature.offsetTop);
              }
            }
          });
        } else {
          coordinate = (0, _proj.toLonLat)(evt.coordinate); // clear old features

          self.areaSource.clear();

          if (self.state.mode === "route") {
            // TODO router permalink wieder aktualisieren
            if (self.state.fromAddress === "") {
              self.setRouteFrom(coordinate[0], coordinate[1]); // self.updateLinkFragments("addressFrom", coordinate);

              self.recalculateRoute();
            } else if (self.state.toAddress === "") {
              self.setRouteTo(coordinate[0], coordinate[1]); // self.updateLinkFragments("addressTo", coordinate);

              self.recalculateRoute();
            } else if (self.state.overPtCtr > 0) {
              for (var i = 0; i < self.state.overPtCtr; i++) {
                if (!self.state.overPoints[i]) {
                  self.addOverPoint(coordinate[0], coordinate[1], i);
                  break;
                }
              }
            }
          } else if (self.state.mode === "area" && self.state.areaAddress === "") {
            self.setAreaPoint(coordinate[0], coordinate[1]);
          }
        }
      };

      this.props.mapController.map.on('click', self.fnMapRouterInteraction);
    }
  }]);
  return RouterView;
}(_react.Component);

exports.RouterView = RouterView;

/***/ }),

/***/ "./Resources/public/js/components/c4g-titlebar.jsx":
/*!*********************************************************!*\
  !*** ./Resources/public/js/components/c4g-titlebar.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Titlebar = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Titlebar, _Component);

  var _super = _createSuper(Titlebar);

  function Titlebar(props) {
    (0, _classCallCheck2["default"])(this, Titlebar);
    return _super.call(this, props);
  }

  (0, _createClass2["default"])(Titlebar, [{
    key: "render",
    value: function render() {
      var _this = this;

      var detailButton = "";

      if (this.props.detailBtnClass && this.props.detailBtnCb) {
        detailButton = /*#__PURE__*/_react["default"].createElement("button", {
          className: this.props.detailBtnClass,
          onMouseUp: this.props.detailBtnCb
        });
      }

      var closeButton = "";

      if (this.props.closeBtnClass && this.props.closeBtnCb) {
        closeButton = /*#__PURE__*/_react["default"].createElement("button", {
          className: this.props.closeBtnClass,
          onMouseUp: this.props.closeBtnCb,
          title: this.props.closeBtnTitle
        });
      }

      var minimizeButton = "";

      if (this.props.hideContainer) {
        var minimize = function minimize() {
          // this.props.removeComponent();
          jQuery(_this.props.hideContainer).removeClass("c4g-open").addClass("c4g-close");
        };

        minimizeButton = /*#__PURE__*/_react["default"].createElement("button", {
          className: 'c4g-sideboard-hide',
          onMouseUp: function onMouseUp() {
            return minimize();
          }
        });
      }

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: this.props.wrapperClass
      }, /*#__PURE__*/_react["default"].createElement("span", {
        className: this.props.headerClass
      }, this.props.header), minimizeButton, closeButton, detailButton, this.props.children);
    }
  }]);
  return Titlebar;
}(_react.Component);

exports.default = Titlebar;

/***/ }),

/***/ "./Resources/public/js/routing-constant-i18n-de.js":
/*!*********************************************************!*\
  !*** ./Resources/public/js/routing-constant-i18n-de.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

/**
 *  constants
 */

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.routingConstantsGerman = void 0;
var routingConstantsGerman = {
  CTRL_ROUTER: 'Router öffnen/schließen',
  ROUTER_VIEW_ADDRESS_INPUT: 'Route finden',
  ROUTER_FROM_LABEL: 'Start',
  ROUTER_OVER_LABEL: 'Zwischenziel',
  ROUTER_TO_LABEL: 'Ziel',
  ROUTER_CLEAR_TITLE: 'Löschen',
  ROUTER_CLEAR_HTML: '',
  ROUTER_Label_Interim: 'Zwischenziel',
  ROUTER_DEFAULT_HEADLINE_ROUTE: 'Router',
  ROUTER_DEFAULT_HEADLINE_AREA: 'Umkreissuche',
  ROUTER_SWITCH: 'Wechsel von Start und Ziel',
  ROUTER_OVER: 'Zwischenziel hinzufügen',
  ROUTER_PRINT: 'Routenbeschreibung drucken',
  ROUTER_DOWNLOAD: 'Route als GPX herunterladen',
  ROUTER_VIEW_LABEL_ROUTE: 'Route:',
  ROUTER_VIEW_LABEL_DISTANCE: 'Entfernung:',
  ROUTER_VIEW_LABEL_TIME: 'Zeit:',
  ROUTER_VIEW_LABEL_PROFILE: 'Profil:',
  ROUTER_VIEW_ALERT_ERROR: 'Fehler',
  ROUTER_VIEW_ALERT_ADDRESS: 'Adresse nicht gefunden.',
  ROUTER_VIEW_ALERT_GOCODING: 'Zugriff auf Geocoder fehlgeschlagen.',
  ROUTER_ERROR_POLYLINE: 'Route konnte nicht berechnet werden.',
  ROUTER_ERROR_LINESTRING: 'Strecke lässt sich nicht im Router.',
  POPUP_ROUTE_FROM: 'Route von hier',
  POPUP_ROUTE_TO: 'Route hierhin',
  POPUP_ROUTE_EDIT: 'Strecke im Router öffnen',
  ROUTER: 'Router',
  ROUTER_N: 'Norden',
  ROUTER_E: 'Ost',
  ROUTER_S: 'Süden',
  ROUTER_W: 'Westen',
  ROUTER_NE: 'Nordost',
  ROUTER_SE: 'Südost',
  ROUTER_SW: 'Südwest',
  ROUTER_NW: 'Nordwest',
  ROUTER_DIRECTION_0: 'Unbekannte Anweisung[ auf <b>%s</b>]',
  ROUTER_DIRECTION_1: 'Geradeaus weiterfahren[ auf <b>%s</b>]',
  ROUTER_DIRECTION_2: 'Leicht rechts abbiegen [auf <b>%s</b>]',
  ROUTER_DIRECTION_3: 'Rechts abbiegen[ auf <b>%s</b>]',
  ROUTER_DIRECTION_4: 'Scharf rechts abbiegen[ auf <b>%s</b>]',
  ROUTER_DIRECTION_5: 'Wenden[ auf <b>%s</b>]',
  ROUTER_DIRECTION_6: 'Scharf links abbiegen[ auf <b>%s</b>]',
  ROUTER_DIRECTION_7: 'Links abbiegen[ auf <b>%s</b>]',
  ROUTER_DIRECTION_8: 'Leicht links abbiegen[ auf <b>%s</b>]',
  ROUTER_DIRECTION_10: 'Fahren Sie Richtung <b>%d</b>[ auf <b>%s</b>]',
  'ROUTER_DIRECTION_11-1': 'In den Kreisverkehr einfahren und bei erster Möglichkeit[ in Richtung <b>%s</b>] verlassen',
  'ROUTER_DIRECTION_11-2': 'In den Kreisverkehr einfahren und bei zweiter Möglichkeit[ in Richtung <b>%s</b>] verlassen',
  'ROUTER_DIRECTION_11-3': 'In den Kreisverkehr einfahren und bei dritter Möglichkeit[ in Richtung <b>%s</b>] verlassen',
  'ROUTER_DIRECTION_11-4': 'In den Kreisverkehr einfahren und bei vierter Möglichkeit[ in Richtung <b>%s</b>] verlassen',
  'ROUTER_DIRECTION_11-5': 'In den Kreisverkehr einfahren und bei fünfter Möglichkeit[ in Richtung <b>%s</b>] verlassen',
  'ROUTER_DIRECTION_11-6': 'In den Kreisverkehr einfahren und bei sechster Möglichkeit[ in Richtung <b>%s</b>] verlassen',
  'ROUTER_DIRECTION_11-7': 'In den Kreisverkehr einfahren und bei siebter Möglichkeit[ in Richtung <b>%s</b>] verlassen',
  'ROUTER_DIRECTION_11-8': 'In den Kreisverkehr einfahren und bei achter Möglichkeit[ in Richtung <b>%s</b>] verlassen',
  'ROUTER_DIRECTION_11-9': 'In den Kreisverkehr einfahren und bei neunter Möglichkeit[ in Richtung <b>%s</b>] verlassen',
  'ROUTER_DIRECTION_11-x': 'In den Kreisverkehr einfahren und bei einer der vielen Möglichkeiten[ in Richtung <b>%s</b>] verlassen',
  ROUTER_DIRECTION_15: 'Sie haben Ihr Ziel erreicht',
  'ROUTER_5.X_TYPE_0': ' %m fahren[ auf <b>%s</b>]',
  'ROUTER_5.X_TYPE_1': ' %m dem Straßenverlauf folgen[ als <b>%s</b>]',
  'ROUTER_5.X_TYPE_2': ' Fahren Sie[ auf <b>%s</b>] los',
  'ROUTER_5.X_TYPE_3': ' Das Ziel befindet sich <b>%m</b>',
  'ROUTER_5.X_TYPE_4': ' Weiterfahren[ auf <b>%s</b>]',
  'ROUTER_5.X_TYPE_5': ' %m [auf <b>%s</b> ]auffahren',
  'ROUTER_5.X_TYPE_6': ' %m [auf <b>%s</b> ]abfahren',
  'ROUTER_5.X_TYPE_7': ' Den Fahrstreifen %m benutzen [auf <b>%s</b>]',
  'ROUTER_5.X_TYPE_8': ' %m abbiegen [auf <b>%s</b>]',
  'ROUTER_5.X_TYPE_9': ' Den Fahrstreifen %m benutzen [auf <b>%s</b>]',
  'ROUTER_5.X_TYPE_10': ' %m fahren um auf der Straße zu bleiben',
  'ROUTER_5.X_TYPE_11': ' Im Kreisverkehr die <b>%z.</b> Ausfahrt nehmen [auf <b>%s</b>]',
  'ROUTER_5.X_TYPE_12': ' Im Kreisverkehr die <b>%z.</b> Ausfahrt nehmen [auf <b>%s</b>]',
  'ROUTER_5.X_TYPE_13': ' %m fahren [auf <b>%s</b>]',
  'ROUTER_5.X_TYPE_14': ' abbiegen[ auf <b>%s</b>]',
  'ROUTER_5.X_MOD_0': 'Uturn',
  'ROUTER_5.X_MOD_1': 'Scharf rechts',
  'ROUTER_5.X_MOD_2': 'Rechts',
  'ROUTER_5.X_MOD_3': 'Leicht rechts',
  'ROUTER_5.X_MOD_4': 'Geradeaus',
  'ROUTER_5.X_MOD_5': 'Leicht links',
  'ROUTER_5.X_MOD_6': 'Links',
  'ROUTER_5.X_MOD_7': 'Scharf links',
  'ROUTER_5.X_MOD_8': 'in der Nähe',
  ROUTER_FROM: 'Start',
  ROUTER_TO: 'Ziel',
  ROUTER_CENTER: 'Zentrum',
  ROUTER_FIND_ROUTE: 'Route finden',
  ROUTER_LOC_ROUTE_TO: 'Route hierhin',
  ROUTER_ROUTEDESC: 'Routenbeschreibung',
  ROUTER_ROUTENAME: 'Route',
  ROUTER_DISTANCE: 'Distanz',
  ROUTER_TIME: 'Zeit',
  ROUTER_REV_GEOCODING: 'Ermittle Adresse...',
  ROUTER_ERROR_REV_GEOCODING: 'Fehler beim Ermitteln der Adresse',
  ROUTER_SEARCHING: 'Suche Adresse...',
  ROUTER_ERROR_SEARCHING: 'Fehler beim Suchen der Adresse',
  ROUTER_CALC_ROUTE: 'Berechne Route...',
  ROUTER_ERROR_CALC_ROUTE: 'Fehler beim Berechnen der Route',
  ROUTER_SETTINGS: 'Routeneinstellungen',
  //new Router
  AREA_NAME: 'Umkreissuche',
  AREA_PROFILE: 'Profil',
  AREA_FEATURECOUNT: 'Gefundene Elemente',
  ROUTE_DETOUR: 'Umweg',
  AREA_DETOUR: 'Radius',
  INSTRUCTION_HEADLINE: 'Routenbeschreibung',
  FEATURES_HEADLINE: 'Lokationen',
  ROUTE_POSITION: 'Position ermitteln',
  START_ROUTE: 'Suche starten',
  REMOVE_ADDRESS: 'Adresse löschen',
  CAR: 'Auto',
  BIKE: 'Fahrrad',
  ROADBIKE: 'Rennrad',
  MOUNTAINBIKE: 'Mountainbike',
  ELECTRICBIKE: 'E-Bike',
  TRUCK: 'Lastkraftwagen',
  WALK: 'FußgängerIn',
  WANDER: 'WandererIn',
  WHEEL: 'Rollstuhl',
  SCOOT: 'Roller',
  MOTORBIKE: 'Motorrad',
  CLOSE: 'Schließen',
  NONE: '' // last line

}; // end of "css constants" ---

exports.routingConstantsGerman = routingConstantsGerman;

/***/ }),

/***/ "./Resources/public/js/routing-constant-i18n-en.js":
/*!*********************************************************!*\
  !*** ./Resources/public/js/routing-constant-i18n-en.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

/**
 *  constants
 */

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.routingConstantsEnglish = void 0;
var routingConstantsEnglish = {
  ROUTER_VIEW_ADDRESS_INPUT: 'Find route',
  ROUTER_FROM_LABEL: 'Start',
  ROUTER_TO_LABEL: 'End',
  ROUTER_CLEAR_TITLE: 'Delete',
  ROUTER_CLEAR_HTML: '',
  ROUTER_Label_Interim: 'Interim Goal',
  ROUTER_DEFAULT_HEADLINE_ROUTE: 'Router',
  ROUTER_DEFAULT_HEADLINE_AREA: 'Area search',
  ROUTER_SWITCH: 'Switch between Start and End',
  ROUTER_OVER: 'Add interim goal',
  ROUTER_PRINT: 'Print route description',
  ROUTER_DOWNLOAD: 'Download route as GPX',
  POPUP_ROUTE_FROM: 'Route from here',
  POPUP_ROUTE_TO: 'Route to here',
  POPUP_ROUTE_EDIT: 'Open line in router',
  ROUTER_VIEW_LABEL_ROUTE: 'Route:',
  ROUTER_VIEW_LABEL_DISTANCE: 'Distance:',
  ROUTER_VIEW_LABEL_TIME: 'Time:',
  ROUTER_VIEW_LABEL_PROFILE: 'Profile',
  ROUTER_VIEW_ALERT_Error: 'Error',
  ROUTER_VIEW_ALERT_ADDRESS: 'Address not found.',
  ROUTER_VIEW_ALERT_GOCODING: 'No access to geocoding.',
  ROUTER_ERROR_POLYLINE: 'Could not calculate route.',
  ROUTER_ERROR_LINESTRING: 'Could not open line in router.',
  ROUTER: 'Router',
  ROUTER_N: 'Head north',
  ROUTER_E: 'Head east',
  ROUTER_S: 'Head south',
  ROUTER_W: 'Head west',
  ROUTER_NE: 'Head northeast',
  ROUTER_SE: 'Head southeast',
  ROUTER_SW: 'Head southwest',
  ROUTER_NW: 'Head northwest',
  ROUTER_DIRECTION_0: 'unknown direction[ onto <b>%s</b>]',
  ROUTER_DIRECTION_1: 'straight ahead[ onto <b>%s</b>]',
  ROUTER_DIRECTION_2: 'slight right[ onto <b>%s</b>]',
  ROUTER_DIRECTION_3: 'right[ onto <b>%s</b>]',
  ROUTER_DIRECTION_4: 'sharp right[ onto <b>%s</b>]',
  ROUTER_DIRECTION_5: 'turn[ onto <b>%s</b>]',
  ROUTER_DIRECTION_6: 'sharp turn left[ onto <b>%s</b>]',
  ROUTER_DIRECTION_7: 'turn left[ onto <b>%s</b>]',
  ROUTER_DIRECTION_8: 'light turn left[ onto <b>%s</b>]',
  ROUTER_DIRECTION_10: 'drive in direction of <b>%d</b>[ onto <b>%s</b>]',
  'ROUTER_DIRECTION_11-1': 'Take the first exit in the roundabout[ onto <b>%s</b>]',
  'ROUTER_DIRECTION_11-2': 'Take the 2nd exit in the roundabout[ onto <b>%s</b>]',
  'ROUTER_DIRECTION_11-3': 'Take the 3rd exit in the roundabout[ onto <b>%s</b>]',
  'ROUTER_DIRECTION_11-4': 'Take the 4th exit in the roundabout[ onto <b>%s</b>]',
  'ROUTER_DIRECTION_11-5': 'Take the 5th exit in the roundabout[ onto <b>%s</b>]',
  'ROUTER_DIRECTION_11-6': 'Take the 6th exit in the roundabout[ onto <b>%s</b>]',
  'ROUTER_DIRECTION_11-7': 'Take the 7th exit in the roundabout[ onto <b>%s</b>]',
  'ROUTER_DIRECTION_11-8': 'Take the 8th exit in the roundabout[ onto <b>%s</b>]',
  'ROUTER_DIRECTION_11-9': 'Take the 9th exit in the roundabout[ onto <b>%s</b>]',
  'ROUTER_DIRECTION_11-x': 'Take one of the exits in the roundabout[ onto <b>%s</b>]',
  ROUTER_DIRECTION_15: 'Destination reached',
  'ROUTER_5.X_TYPE_0': ' Turn %m on[ <b>%s</b>]',
  'ROUTER_5.X_TYPE_1': ' Follow the course of the road %m[ as <b>%s</b>]',
  'ROUTER_5.X_TYPE_2': ' Depart[ on <b>%s</b>]',
  'ROUTER_5.X_TYPE_3': ' Arrive <b>%m</b>',
  'ROUTER_5.X_TYPE_4': ' Continue driving[ on <b>%s</b>]',
  'ROUTER_5.X_TYPE_5': ' Take the ramp %m[ on <b>%s</b>]',
  'ROUTER_5.X_TYPE_6': ' Take the ramp %m[ to exit on<b>%s</b>]',
  'ROUTER_5.X_TYPE_7': ' Take the %m site of the fork to[ <b>%s</b>]',
  'ROUTER_5.X_TYPE_8': ' Turn %m[ on <b>%s</b>]',
  'ROUTER_5.X_TYPE_9': ' Take the lane %m[ on <b>%s</b>]',
  'ROUTER_5.X_TYPE_10': ' Turn %m to stay on the road',
  'ROUTER_5.X_TYPE_11': ' Leave the roundabout on the %z. exit[ to <b>%s</b>]',
  'ROUTER_5.X_TYPE_12': ' Leave the roundabout on the %z. exit[ to <b>%s</b>]',
  'ROUTER_5.X_TYPE_13': ' Turn %m[ on <b>%s</b>]',
  'ROUTER_5.X_TYPE_14': ' Follow the road %m',
  'ROUTER_5.X_MOD_0': 'Uturn',
  'ROUTER_5.X_MOD_1': 'sharp right',
  'ROUTER_5.X_MOD_2': 'right',
  'ROUTER_5.X_MOD_3': 'slight right',
  'ROUTER_5.X_MOD_4': 'straight',
  'ROUTER_5.X_MOD_5': 'slight left',
  'ROUTER_5.X_MOD_6': 'left',
  'ROUTER_5.X_MOD_7': 'sharp left',
  'ROUTER_5.X_MOD_8': 'somehow',
  ROUTER_FROM: 'Start',
  ROUTER_TO: 'End',
  ROUTER_CENTER: 'Center',
  ROUTER_FIND_ROUTE: 'Find route',
  ROUTER_LOC_ROUTE_TO: 'Route to here',
  ROUTER_ROUTEDESC: 'Description',
  ROUTER_ROUTENAME: 'Route',
  ROUTER_DISTANCE: 'Distance',
  ROUTER_TIME: 'Time',
  ROUTER_REV_GEOCODING: 'Identified address...',
  ROUTER_ERROR_REV_GEOCODING: 'Fault! Can not identifiy address',
  ROUTER_SEARCHING: 'Search address...',
  ROUTER_ERROR_SEARCHING: 'Fault! Can not find address',
  ROUTER_CALC_ROUTE: 'Calc route...',
  ROUTER_ERROR_CALC_ROUTE: 'Fault! Can not calc address',
  ROUTER_SETTINGS: 'Routing settings',
  CTRL_ROUTER: 'Toggle router',
  //new Router
  AREA_NAME: 'Search perimeter',
  AREA_PROFILE: 'Profile',
  AREA_FEATURECOUNT: 'Found features',
  ROUTE_DETOUR: 'Detour',
  AREA_DETOUR: 'Radius',
  INSTRUCTION_HEADLINE: 'Route Instructions',
  FEATURES_HEADLINE: 'Locations',
  ROUTE_POSITION: 'Get user position',
  START_ROUTE: 'Start search',
  CAR: 'Car',
  BIKE: 'Bike',
  ROADBIKE: 'Road bike',
  MOUNTAINBIKE: 'Mountain bike',
  ELECTRICBIKE: 'E-Bike',
  TRUCK: 'Truck',
  WALK: 'Pedestrian',
  WANDER: 'Wanderer',
  WHEEL: 'Wheelchair',
  SCOOT: 'Router',
  MOTORBIKE: 'Motorbike',
  CLOSE: 'Close',
  NONE: '' // last line

}; // end of "css constants" ---

exports.routingConstantsEnglish = routingConstantsEnglish;

/***/ }),

/***/ "./Resources/public/js/routing-constant-i18n.js":
/*!******************************************************!*\
  !*** ./Resources/public/js/routing-constant-i18n.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getLanguage = getLanguage;

var _routingConstantI18nDe = __webpack_require__(/*! ./routing-constant-i18n-de */ "./Resources/public/js/routing-constant-i18n-de.js");

var _routingConstantI18nEn = __webpack_require__(/*! ./routing-constant-i18n-en */ "./Resources/public/js/routing-constant-i18n-en.js");

/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */
function getLanguage(mapData) {
  if (typeof mapData !== 'undefined') {
    switch (mapData.lang) {
      case "de":
        return _routingConstantI18nDe.routingConstantsGerman;

      case "en":
        return _routingConstantI18nEn.routingConstantsEnglish;

      default:
        return _routingConstantI18nEn.routingConstantsEnglish;
    }
  }
}

/***/ }),

/***/ "./Resources/public/js/routing-constants.js":
/*!**************************************************!*\
  !*** ./Resources/public/js/routing-constants.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

/**
 *  constants
 */

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.routingConstants = void 0;
var routingConstants = {
  ROUTER_INPUT_WRAPPER: 'c4g-router-input-wrapper',
  ROUTER_PROFILE_WRAPPER: 'c4g-router-profile-wrapper',
  ROUTER_INPUT_FROM: 'c4g-router-input-from',
  ROUTER_INPUT_TO: 'c4g-router-input-to',
  ROUTER_INPUT_OVER: 'c4g-router-input-over',
  ROUTER_INPUT_CLEAR: 'c4g-router-input-clear',
  ROUTER_BUTTONBAR: 'c4g-router-buttonbar',
  ROUTER_ATTRIBUTION_WRAPPER: 'c4g-router-attribution-wrapper',
  ROUTER_INSTRUCTIONS_WRAPPER: 'c4g-router-instructions-wrapper',
  ROUTER_INSTRUCTIONS_HEADER: 'c4g-router-instructions-header',
  ROUTER_SWITCH: 'c4g-router-switch',
  ROUTER_OVER: 'c4g-router-over',
  ROUTER_PRINT: 'c4g-router-print',
  ROUTER_PROFILE_CAR: 'c4g-router-profile-car',
  ROUTER_PROFILE_TRUCK: 'c4g-router-profile-hgv',
  ROUTER_PROFILE_BIKE: 'c4g-router-profile-bike',
  ROUTER_PROFILE_FOOT: 'c4g-router-profile-foot',
  ROUTER_PROFILE_WHEELCHAIR: 'c4g-router-profile-wheelchair',
  ROUTER_PROFILE_SCOOTER: 'c4g-router-profile-scooter',
  ROUTER_INSTRUCTIONS_TABLE: 'c4g-router-instruction-table',
  ROUTER_INSTRUCTIONS_ITEM: 'c4g-router-instruction-item',
  ROUTER_INSTRUCTIONS_ITEM_ODD: 'c4g-router-instruction-item--odd',
  ROUTER_INSTRUCTIONS_ITEM_EVEN: 'c4g-router-instruction-item--even',
  ROUTER_INSTRUCTIONS_ITEM_DIRECTION: 'c4g-router-instruction-item_direction',
  ROUTER_INSTRUCTIONS_ITEM_DIRECTION_ICON: 'c4g-router-instruction-item_direction-icon',
  ROUTER_INSTRUCTIONS_ITEM_DIRECTION_TEXT: 'c4g-router-instruction-item_text',
  ROUTER_INSTRUCTIONS_ITEM_DIRECTION_DISTANCE: 'c4g-router-instruction-item_distance',
  ROUTE_LAYER_VALUES: 'c4g-routing-layer-values',
  ROUTE_LAYERS_SELECT: 'c4g-routing-layers-select',
  ROUTE_TOGGLE: 'c4g-routing-toggle',
  OUTPUT_DETOUR: 'c4g-routing-output',
  ROUTE_START_BUTTON: 'c4g-route-search-start',
  ROUTER_SEARCH: 'c4g-router-search',
  ROUTE_POSITION: 'c4g-router-position',
  ROUTE_ERROR: 'c4g-routing-error',
  NONE: '' // last line

}; // end of "css constants" ---

exports.routingConstants = routingConstants;

/***/ })

}]);