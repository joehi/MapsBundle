(self["webpackChunkmapsbundle"] = self["webpackChunkmapsbundle"] || []).push([["Resources_public_js_components_c4g-measuretools_jsx"],{

/***/ "./Resources/public/js/components/c4g-measuretools-feature.jsx":
/*!*********************************************************************!*\
  !*** ./Resources/public/js/components/c4g-measuretools-feature.jsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.MeasuredFeature = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var MeasuredFeature = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(MeasuredFeature, _Component);

  var _super = _createSuper(MeasuredFeature);

  function MeasuredFeature(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, MeasuredFeature);
    _this = _super.call(this, props);
    _this.changeFeatureLabel = _this.changeFeatureLabel.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(MeasuredFeature, [{
    key: "render",
    value: function render() {
      var scope = this;
<<<<<<< refs/remotes/origin/main
      return _react["default"].createElement("div", null, _react["default"].createElement("div", null, _react["default"].createElement("label", {
        htmlFor: "measureElement_" + this.props.idx
      }, "Name: "), _react["default"].createElement("input", {
=======
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("label", {
        htmlFor: "measureElement_" + this.props.idx
      }, "Name: "), /*#__PURE__*/_react["default"].createElement("input", {
>>>>>>> Several version preps
        type: "text",
        name: "measureElement_" + this.props.idx,
        defaultValue: this.props.label,
        onInput: this.changeFeatureLabel
      })), Object.keys(this.props.measuredValues).map(function (element, index) {
        var obj = scope.props.measuredValues[element];
        var hrValue = 0.0;

        switch (element) {
          case "line":
          case "radius":
            hrValue = scope.convertMetersToKm(obj.value);
            break;

          case "area":
            hrValue = scope.convertSquareMetersToSquareKm(obj.value);
            break;
        }

<<<<<<< refs/remotes/origin/main
        return _react["default"].createElement("p", {
          key: index
        }, _react["default"].createElement("strong", null, obj.description), _react["default"].createElement("span", {
=======
        return /*#__PURE__*/_react["default"].createElement("p", {
          key: index
        }, /*#__PURE__*/_react["default"].createElement("strong", null, obj.description), /*#__PURE__*/_react["default"].createElement("span", {
>>>>>>> Several version preps
          className: "c4g-measure-value-" + scope.props.idx
        }, hrValue));
      }));
    }
  }, {
    key: "changeFeatureLabel",
    value: function changeFeatureLabel() {
      var feature = this.props.feature;
      feature.label = document.querySelector('input[name="measureElement_' + this.props.idx + '"]').value;
      this.props.modifyFeature(feature, feature.id);
    }
  }, {
    key: "convertMetersToKm",
    value: function convertMetersToKm(distance) {
      var kmValue = distance / 1000;

      if (kmValue > 0) {
        return kmValue + " km";
      } else {
        return distance + " m";
      }
    }
  }, {
    key: "convertSquareMetersToSquareKm",
    value: function convertSquareMetersToSquareKm(area) {
      var kmValue = area / 1000000;

      if (kmValue > 0) {
        return kmValue + " km²";
      } else {
        return area + " m²";
      }
    }
  }]);
  return MeasuredFeature;
}(_react.Component);

exports.MeasuredFeature = MeasuredFeature;

/***/ }),

/***/ "./Resources/public/js/components/c4g-measuretools-view.jsx":
/*!******************************************************************!*\
  !*** ./Resources/public/js/components/c4g-measuretools-view.jsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.MeasuretoolsView = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _c4gMapsI18n = __webpack_require__(/*! ../c4g-maps-i18n */ "./Resources/public/js/c4g-maps-i18n.js");

var _ol = __webpack_require__(/*! ol */ "./node_modules/ol/index.js");

var _interaction = __webpack_require__(/*! ol/interaction */ "./node_modules/ol/interaction.js");

var _c4gMapsUtils = __webpack_require__(/*! ../c4g-maps-utils */ "./Resources/public/js/c4g-maps-utils.js");

var _c4gMapsMiscTooltippopup = __webpack_require__(/*! ../c4g-maps-misc-tooltippopup */ "./Resources/public/js/c4g-maps-misc-tooltippopup.js");

var _c4gMeasuretoolsFeature = __webpack_require__(/*! ./c4g-measuretools-feature.jsx */ "./Resources/public/js/components/c4g-measuretools-feature.jsx");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var MeasuretoolsView = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(MeasuretoolsView, _Component);

  var _super = _createSuper(MeasuretoolsView);

  function MeasuretoolsView(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, MeasuretoolsView);
    _this = _super.call(this, props);
    var langConstants = (0, _c4gMapsI18n.getLanguage)(_this.props.mapController.data);
    _this.headlines = {
      "select": langConstants.MEASURETOOLS_VIEW_TRIGGER_SELECT,
      "line": langConstants.MEASURETOOLS_VIEW_TRIGGER_DRAW_LINESTRING,
      "polygon": langConstants.MEASURETOOLS_VIEW_TRIGGER_DRAW_POLYGON,
      "circle": langConstants.MEASURETOOLS_VIEW_TRIGGER_DRAW_CIRCLE,
      "freehand": langConstants.MEASURETOOLS_VIEW_TRIGGER_DRAW_FREEHAND
    };
    _this.featureIdCtr = _this.props.featureId;
    _this.updateFunctions = _this.createMeasureFunctions();
    _this.modifyFeature = _this.modifyFeature.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(MeasuretoolsView, [{
    key: "render",
    value: function render() {
      var scope = this;

      if (this.props.active) {
        if (this.props.mode === "select") {
<<<<<<< refs/remotes/origin/main
          return _react["default"].createElement("div", {
            className: "c4g-measuretools-content"
          }, _react["default"].createElement("p", null, this.props.lang.MEASURETOOLS_INFO), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement("sub", null, this.props.lang.MEASURETOOLS_INFO_ADDITIONAL));
        } else {
          // measure view
          return _react["default"].createElement("div", {
            className: "c4g-measuretools-content"
          }, _react["default"].createElement("div", {
            className: "contentHeadline"
          }, this.headlines[this.props.mode]), _react["default"].createElement("div", null, Object.keys(this.props.features).map(function (element, index) {
            var feat = scope.props.features[element];
            return _react["default"].createElement(_c4gMeasuretoolsFeature.MeasuredFeature, {
=======
          return /*#__PURE__*/_react["default"].createElement("div", {
            className: "c4g-measuretools-content"
          }, /*#__PURE__*/_react["default"].createElement("p", null, this.props.lang.MEASURETOOLS_INFO), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("sub", null, this.props.lang.MEASURETOOLS_INFO_ADDITIONAL));
        } else {
          // measure view
          return /*#__PURE__*/_react["default"].createElement("div", {
            className: "c4g-measuretools-content"
          }, /*#__PURE__*/_react["default"].createElement("div", {
            className: "contentHeadline"
          }, this.headlines[this.props.mode]), /*#__PURE__*/_react["default"].createElement("div", null, Object.keys(this.props.features).map(function (element, index) {
            var feat = scope.props.features[element];
            return /*#__PURE__*/_react["default"].createElement(_c4gMeasuretoolsFeature.MeasuredFeature, {
>>>>>>> Several version preps
              key: index,
              idx: index,
              label: feat.label,
              feature: feat,
              measuredValues: feat.measuredValues,
              modifyFeature: scope.modifyFeature
            });
          })));
        }
      } else {
        // not active
        return null;
      }
    }
  }, {
    key: "modifyFeature",
    value: function modifyFeature(feature, id) {
      var arrFeatures = this.props.features;

      for (var i = 0; i < arrFeatures.length; i++) {
        if (arrFeatures[i].id === id) {
          arrFeatures[i].olFeature.set('featureLabel', feature.label);
          this.updateMeasureFeature(arrFeatures[i].olFeature);
          break;
        }
      }

      this.props.modifyFeature(feature, id);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.mode !== "select") {
        this.updateFunctions.initFunction();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if (this.props.mode !== "select") {
        if (!prevProps.active && this.props.active) {
          this.updateFunctions.activateFunction();
        }

        if (prevProps.active && !this.props.active) {
          this.updateFunctions.deactivateFunction();
        }

        this.props.mapController.mapHover.deactivate();
      }

      if (this.props.mode === "select" || !this.props.measureTools.state.open) {
        this.props.mapController.mapHover.activate();
      }

      this.featureIdCtr = this.props.featureId;
    }
  }, {
    key: "createMeasureFunctions",
    value: function createMeasureFunctions() {
      var source, features, olType, interaction;
      var scope = this;
      return {
        initFunction: function initFunction() {
          var featureIdCount, activeSketch, activeTooltip, addMeasureFeature, updateMeasureFeature, getValueOfGeometry, getLengthOfMeasure, removeMeasureFeature;
          featureIdCount = scope.featureIdCtr;

          if (scope.props.mode.toLowerCase() === 'freehand') {
            source = scope.props.measureTools.measureFreehandLayer.getSource();
          } else if (scope.props.mode.toLowerCase() === 'circle') {
            source = scope.props.measureTools.measureCircleLayer.getSource();
          } else if (scope.props.mode.toLowerCase() === 'polygon') {
            source = scope.props.measureTools.measurePolygonLayer.getSource();
          } else {
            source = scope.props.measureTools.measureLineLayer.getSource();
          }

          features = new _ol.Collection();

          if (scope.props.mode.toLowerCase() === "select") {
            return;
          }

          switch (scope.props.mode) {
            case "line":
              olType = "LineString";
              break;

            case "polygon":
              olType = "Polygon";
              break;

            case "circle":
              olType = "Circle";
              break;

            case "freehand":
              olType = "LineString";
              break;
          }

          interaction = new _interaction.Draw({
            features: features,
            source: source,
            type: olType,
            freehand: scope.props.mode === 'freehand' // @TODO: use custom style? (BE-option)
            // style: use default style

          });

          addMeasureFeature = function addMeasureFeature(feature) {
            var inputElement, strLabel, strType, measureArea, measureRadius, measureLine;

            if (!feature) {
              return false;
            } // check feature-type


            if (feature.getGeometry().getType() === 'LineString') {
              strLabel = scope.props.lang.LENGTH;
              strType = scope.props.lang.LINE;
              measureArea = false;
              measureRadius = false;
              measureLine = true;
            } else if (feature.getGeometry().getType() === 'Polygon') {
              strLabel = scope.props.lang.PERIMETER;
              strType = scope.props.lang.POLYGON;
              measureArea = true;
              measureRadius = false;
              measureLine = false;
            } else if (feature.getGeometry().getType() === 'Circle') {
              strLabel = scope.props.lang.RADIUS;
              strType = scope.props.lang.CIRCLE;
              measureArea = true;
              measureRadius = true;
              measureLine = false;
            } else {
              //freehand is LineString too
              strLabel = scope.props.lang.LENGTH;
              strType = scope.props.lang.FREEHAND;
              measureArea = false;
              measureRadius = false;
              measureLine = true;
            } // feature.set('listElementValueName', inputElement);


            featureIdCount = scope.featureIdCtr;
            feature.set('featureId', featureIdCount);
            var measuredFeature = {};
            measuredFeature.id = featureIdCount;
            measuredFeature.label = strType + " " + featureIdCount;
            feature.set('featureLabel', measuredFeature.label);
            measuredFeature.measuredValues = {};

            if (measureLine) {
              measuredFeature.measuredValues['line'] = {
                description: "Länge: ",
                value: 0
              };
            }

            if (measureRadius) {
              measuredFeature.measuredValues['radius'] = {
                description: "Radius: ",
                value: 0
              };
            }

            if (measureArea) {
              measuredFeature.measuredValues['area'] = {
                description: "Flächeninhalt: ",
                value: 0
              };
            }

            measuredFeature.olFeature = feature;
            scope.props.addFeature(measuredFeature); // increase the id-counter

            scope.props.incrFeatId(); // scope.update();
          }; // end of "addMeasureFeature()"


          updateMeasureFeature = function updateMeasureFeature(feature) {
            var featureTooltip, newContent, name, length, area, radius;
            featureTooltip = feature.get('tooltip');
            name = feature.get('featureLabel');
            length = _c4gMapsUtils.utils.measureGeometry(feature.getGeometry(), true);
            feature.set('measuredLength', length.rawValue);
            featureTooltip.setContent("<strong>" + name + "</strong>" + "<br>" + length.htmlValue);
            var featureId = feature.get('featureId');
            var newFeature = {};
            newFeature.label = name;
            newFeature.id = featureId;
            newFeature.measuredValues = {};
            newFeature.olFeature = feature;

            if (length && feature.get('geometryType') !== 'circle' && feature.get('geometryType') !== 'polygon') {
              newFeature.measuredValues.line = {};
              newFeature.measuredValues['line'].description = "Länge: ";
              newFeature.measuredValues['line'].value = length.rawValue;
            }

            if (feature.get('geometryType') === 'circle') {
              radius = _c4gMapsUtils.utils.measureGeometry(feature.getGeometry());
              newFeature.measuredValues['radius'] = {
                description: "Radius: ",
                value: 0
              };
              newFeature.measuredValues['radius'].value = radius.rawValue;
              featureTooltip.setContent("<strong>" + name + "</strong>" + "<br>" + newFeature.measuredValues['radius'].description + radius.htmlValue);
            }

            if (feature.get('geometryType') === 'polygon' || feature.get('geometryType') === 'circle') {
              area = _c4gMapsUtils.utils.measureGeometry(feature.getGeometry(), false, true);
              newFeature.measuredValues['area'] = {
                description: "Flächeninhalt: ",
                value: 0
              };
              newFeature.measuredValues['area'].value = area.rawValue;
              featureTooltip.setContent("<strong>" + name + "</strong>" + "<br>" + newFeature.measuredValues['area'].description + area.htmlValue);
            }

            feature.set('tooltip', featureTooltip);
            scope.props.modifyFeature(newFeature, newFeature.id);
          }; // end of "updateMeasureFeature()"


          scope.updateMeasureFeature = updateMeasureFeature;

          removeMeasureFeature = function removeMeasureFeature(feature) {
            scope.props.removeFeature(feature.get('featureId'));
          }; // end of "removeMeasureFeature()"
          //Start Workaround


          getValueOfGeometry = function getValueOfGeometry(feature) {
            var leng = _c4gMapsUtils.utils.measureGeometry(feature.getGeometry(), true); // feature.set('measuredLength', length);


            var val = leng.htmlValue;
            var valuenumb = val.match(/\d/g);
            valuenumb = valuenumb.join("");
            return valuenumb;
          };

          getLengthOfMeasure = function getLengthOfMeasure() {
            var length = '0.00 m';
            var lengthnumb = length.match(/\d/g);
            lengthnumb = lengthnumb.join("");
            lengthnumb = +8;
            return lengthnumb;
          }; // End Workaround


          interaction.on('drawstart', function (event) {
            activeSketch = event.feature; // create tooltip

            activeTooltip = new _c4gMapsMiscTooltippopup.TooltipPopUp({
              map: scope.props.mapController.map,
              position: event.coordinate,
              horizontal: true,
              closeable: true,
              closeFunction: function closeFunction() {
                //Workaround, for small or zero values of Freehand
                var val = getValueOfGeometry(event.feature);
                var leng = getLengthOfMeasure();

                if (val !== leng && val > leng) {
                  removeMeasureFeature(event.feature);
                  source.removeFeature(event.feature);
                } else {
                  removeMeasureFeature(event.feature);
                }
              }
            });
            activeSketch.set('tooltip', activeTooltip);
            activeSketch.set('geometryType', scope.props.mode.toLowerCase());
            addMeasureFeature(activeSketch);
          }, scope);
          scope.props.mapController.map.on('pointermove', function (event) {
            if (activeSketch && activeTooltip) {
              activeTooltip.setPosition(event.coordinate);
              updateMeasureFeature(activeSketch);
            }
          }, scope);
          interaction.on('drawend', function (event) {
            if (activeSketch && activeTooltip) {
              updateMeasureFeature(activeSketch);
              activeSketch = null;
              activeTooltip = null;
            }
          }, scope);
          return true;
        },
        activateFunction: function activateFunction() {
          features.clear(); // Enable interaction

          scope.props.mapController.map.addInteraction(interaction);
        },
        deactivateFunction: function deactivateFunction() {
          if (scope.props.mode.toLowerCase() !== 'point') {
            try {
              interaction.finishDrawing();
            } catch (ignore) {// 0_o
            }
          } // Remove from map


          scope.props.mapController.map.removeInteraction(interaction);
        }
      };
    }
  }]);
  return MeasuretoolsView;
}(_react.Component);

exports.MeasuretoolsView = MeasuretoolsView;

/***/ }),

/***/ "./Resources/public/js/components/c4g-measuretools.jsx":
/*!*************************************************************!*\
  !*** ./Resources/public/js/components/c4g-measuretools.jsx ***!
  \*************************************************************/
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

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _c4gTitlebar = __webpack_require__(/*! ./c4g-titlebar.jsx */ "./Resources/public/js/components/c4g-titlebar.jsx");

var _c4gMapsI18n = __webpack_require__(/*! ../c4g-maps-i18n */ "./Resources/public/js/c4g-maps-i18n.js");

var _control = __webpack_require__(/*! ol/control */ "./node_modules/ol/control.js");

var _c4gMeasuretoolsView = __webpack_require__(/*! ./c4g-measuretools-view.jsx */ "./Resources/public/js/components/c4g-measuretools-view.jsx");

var _layer = __webpack_require__(/*! ol/layer */ "./node_modules/ol/layer.js");

var _source = __webpack_require__(/*! ol/source */ "./node_modules/ol/source.js");

var _ol = __webpack_require__(/*! ol */ "./node_modules/ol/index.js");

var _c4gMapsUtils = __webpack_require__(/*! ../c4g-maps-utils */ "./Resources/public/js/c4g-maps-utils.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Measuretools = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Measuretools, _Component);

  var _super = _createSuper(Measuretools);

  function Measuretools(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Measuretools);
    _this = _super.call(this, props);
    var scope = (0, _assertThisInitialized2["default"])(_this); // create control to toggle the panel

    var element = document.createElement('div');
    var button = document.createElement('button');
    _this.langConstants = (0, _c4gMapsI18n.getLanguage)(props.mapController.data);
    button.title = _this.langConstants.CTRL_MEASURETOOLS;
    element.className = "c4g-measuretools-control ol-unselectable ol-control ";

    if (props.open) {
      element.className += "c4g-open";
    } else {
      element.className += "c4g-close";
    }

    if (props.external) {
      element.className += " c4g-external";
    }

    element.appendChild(button);
    jQuery(element).on('click', function (event) {
      var hidden = scope.props.mapController.measuretoolsContainer.className.includes('c4g-close');

      if (scope.state.open) {
        if (!hidden) {
          scope.close();
        } else {
          jQuery(scope.props.mapController.measuretoolsContainer).removeClass('c4g-close').addClass('c4g-open');
        }
      } else {
        scope.open();
      }
    });
    var mapController = props.mapController;
    var control = new _control.Control({
      element: element,
      target: props.target
    });
    mapController.mapsControls.controls.measuretools = control;
    mapController.map.addControl(control);
    _this.close = _this.close.bind((0, _assertThisInitialized2["default"])(_this));
    _this.open = _this.open.bind((0, _assertThisInitialized2["default"])(_this));
    _this.addMeasuredFeature = _this.addMeasuredFeature.bind((0, _assertThisInitialized2["default"])(_this));
    _this.modifyMeasuredFeature = _this.modifyMeasuredFeature.bind((0, _assertThisInitialized2["default"])(_this));
    _this.removeMeasuredFeature = _this.removeMeasuredFeature.bind((0, _assertThisInitialized2["default"])(_this));
    _this.incrementFeatureId = _this.incrementFeatureId.bind((0, _assertThisInitialized2["default"])(_this));
    _this.modes = ["select", "line", "polygon", "circle", "freehand"];
    _this.state = {
      open: props.open || false,
      currentMode: "select",
      control: control,
      measuredFeatures: [],
      featureIdCtr: 0
    };

    _this.init();

    return _this;
  }

  (0, _createClass2["default"])(Measuretools, [{
    key: "render",
    value: function render() {
      var scope = this;
      var arrTooltips = {
        "select": this.langConstants.MEASURETOOLS_VIEW_TRIGGER_SELECT,
        "line": this.langConstants.MEASURETOOLS_VIEW_TRIGGER_DRAW_LINESTRING,
        "polygon": this.langConstants.MEASURETOOLS_VIEW_TRIGGER_DRAW_POLYGON,
        "circle": this.langConstants.MEASURETOOLS_VIEW_TRIGGER_DRAW_CIRCLE,
        "freehand": this.langConstants.MEASURETOOLS_VIEW_TRIGGER_DRAW_FREEHAND
      };
<<<<<<< refs/remotes/origin/main
      return _react["default"].createElement("div", {
        className: "c4g-measuretools-wrapper"
      }, _react["default"].createElement(_c4gTitlebar.Titlebar, {
=======
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "c4g-measuretools-wrapper"
      }, /*#__PURE__*/_react["default"].createElement(_c4gTitlebar.Titlebar, {
>>>>>>> Several version preps
        wrapperClass: "c4g-measuretools-header",
        headerClass: "c4g-measuretools-headline",
        hideContainer: ".c4g-measuretools-container",
        header: this.langConstants.MEASURETOOLS,
        closeBtnClass: "c4g-titlebar-close",
        closeBtnCb: this.close,
        closeBtnTitle: this.langConstants.CLOSE
<<<<<<< refs/remotes/origin/main
      }), _react["default"].createElement("div", {
        className: "c4g-measuretools-mode-switcher"
      }, this.modes.map(function (element, index) {
        return _react["default"].createElement("button", {
=======
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: "c4g-measuretools-mode-switcher"
      }, this.modes.map(function (element, index) {
        return /*#__PURE__*/_react["default"].createElement("button", {
>>>>>>> Several version preps
          key: index,
          className: "c4g-measure-" + element + " " + (element === scope.state.currentMode ? "c4g-active" : "c4g-inactive"),
          onMouseUp: function onMouseUp() {
            return scope.setState({
              currentMode: element
            });
          },
          title: arrTooltips[element]
        });
<<<<<<< refs/remotes/origin/main
      })), _react["default"].createElement(_c4gMeasuretoolsView.MeasuretoolsView, {
=======
      })), /*#__PURE__*/_react["default"].createElement(_c4gMeasuretoolsView.MeasuretoolsView, {
>>>>>>> Several version preps
        mode: "select",
        measureTools: this,
        active: this.state.currentMode === "select" && this.state.open,
        featureId: this.state.featureIdCtr,
        lang: this.langConstants,
        addFeature: this.addMeasuredFeature,
        features: this.state.measuredFeatures,
        incrFeatId: this.incrementFeatureId,
        modifyFeature: this.modifyMeasuredFeature,
        mapController: this.props.mapController,
        removeFeature: this.removeMeasuredFeature
<<<<<<< refs/remotes/origin/main
      }), _react["default"].createElement(_c4gMeasuretoolsView.MeasuretoolsView, {
=======
      }), /*#__PURE__*/_react["default"].createElement(_c4gMeasuretoolsView.MeasuretoolsView, {
>>>>>>> Several version preps
        mode: "line",
        measureTools: this,
        active: this.state.currentMode === "line" && this.state.open,
        featureId: this.state.featureIdCtr,
        lang: this.langConstants,
        addFeature: this.addMeasuredFeature,
        features: this.state.measuredFeatures,
        incrFeatId: this.incrementFeatureId,
        modifyFeature: this.modifyMeasuredFeature,
        mapController: this.props.mapController,
        removeFeature: this.removeMeasuredFeature
<<<<<<< refs/remotes/origin/main
      }), _react["default"].createElement(_c4gMeasuretoolsView.MeasuretoolsView, {
=======
      }), /*#__PURE__*/_react["default"].createElement(_c4gMeasuretoolsView.MeasuretoolsView, {
>>>>>>> Several version preps
        mode: "polygon",
        measureTools: this,
        active: this.state.currentMode === "polygon" && this.state.open,
        featureId: this.state.featureIdCtr,
        lang: this.langConstants,
        addFeature: this.addMeasuredFeature,
        features: this.state.measuredFeatures,
        incrFeatId: this.incrementFeatureId,
        modifyFeature: this.modifyMeasuredFeature,
        mapController: this.props.mapController,
        removeFeature: this.removeMeasuredFeature
<<<<<<< refs/remotes/origin/main
      }), _react["default"].createElement(_c4gMeasuretoolsView.MeasuretoolsView, {
=======
      }), /*#__PURE__*/_react["default"].createElement(_c4gMeasuretoolsView.MeasuretoolsView, {
>>>>>>> Several version preps
        mode: "circle",
        measureTools: this,
        active: this.state.currentMode === "circle" && this.state.open,
        featureId: this.state.featureIdCtr,
        lang: this.langConstants,
        addFeature: this.addMeasuredFeature,
        features: this.state.measuredFeatures,
        incrFeatId: this.incrementFeatureId,
        modifyFeature: this.modifyMeasuredFeature,
        mapController: this.props.mapController,
        removeFeature: this.removeMeasuredFeature
<<<<<<< refs/remotes/origin/main
      }), _react["default"].createElement(_c4gMeasuretoolsView.MeasuretoolsView, {
=======
      }), /*#__PURE__*/_react["default"].createElement(_c4gMeasuretoolsView.MeasuretoolsView, {
>>>>>>> Several version preps
        mode: "freehand",
        measureTools: this,
        active: this.state.currentMode === "freehand" && this.state.open,
        featureId: this.state.featureIdCtr,
        lang: this.langConstants,
        addFeature: this.addMeasuredFeature,
        features: this.state.measuredFeatures,
        incrFeatId: this.incrementFeatureId,
        modifyFeature: this.modifyMeasuredFeature,
        mapController: this.props.mapController,
        removeFeature: this.removeMeasuredFeature
      }));
    }
  }, {
    key: "incrementFeatureId",
    value: function incrementFeatureId() {
      this.setState({
        featureIdCtr: this.state.featureIdCtr + 1
      });
    }
  }, {
    key: "addMeasuredFeature",
    value: function addMeasuredFeature(feature) {
      var features = this.state.measuredFeatures;
      features.push(feature);
      this.setState({
        measuredFeatures: features
      });
    }
  }, {
    key: "modifyMeasuredFeature",
    value: function modifyMeasuredFeature(newFeature, id) {
      var features = this.state.measuredFeatures;

      for (var i = 0; i < features.length; i++) {
        if (features[i].id === id) {
          features[i] = newFeature;
        }
      }

      this.setState({
        measuredFeatures: features
      });
    }
  }, {
    key: "removeMeasuredFeature",
    value: function removeMeasuredFeature(id) {
      var features = this.state.measuredFeatures;

      for (var i = 0; i < features.length; i++) {
        if (features[i].id === id) {
          features.splice(i, 1);
          break;
        }
      }

      this.setState({
        measuredFeatures: features
      });
    }
  }, {
    key: "setCurrentMode",
    value: function setCurrentMode(newMode) {
      if (this.modes.includes(newMode)) {
        this.setState({
          currentMode: newMode
        });
      } else {
        console.warn("The specified mode is not available");
      }
    }
  }, {
    key: "open",
    value: function open() {
      this.setState({
        open: true
      });
      this.props.mapController.setOpenComponent(this);
    }
  }, {
    key: "close",
    value: function close() {
      this.setState({
        open: false
      });
    }
    /**
     * Executed when the panel will be opened for the first time.
     * [init description]
     *
     * @return  {boolean}  Returns |true| on success
     */

  }, {
    key: "init",
    value: function init() {
      // Add measure layers
      this.measureLineLayer = new _layer.Vector({
        source: new _source.Vector()
      });
      this.measurePolygonLayer = new _layer.Vector({
        source: new _source.Vector()
      });
      this.measureCircleLayer = new _layer.Vector({
        source: new _source.Vector()
      });
      this.measureFreehandLayer = new _layer.Vector({
        source: new _source.Vector()
      });
      this.measureLayerGroup = new _layer.Group({
        layers: new _ol.Collection([this.measureFreehandLayer, this.measureCircleLayer, this.measurePolygonLayer, this.measureLineLayer]),
        visible: true
      });
      this.props.mapController.map.addLayer(this.measureLayerGroup); // this.spinner.hide();

      return true;
    } // end of "init()"

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if (prevState.open && !this.state.open) {
        // measuretools were closed
        jQuery(this.state.control.element).removeClass("c4g-open").addClass("c4g-close");
        jQuery(".c4g-measuretools-container").removeClass("c4g-open").addClass("c4g-close");
        this.props.mapController.map.removeLayer(this.measureLayerGroup);
        this.removeTooltips();
        this.removedOnce = true;
      } else if (!prevState.open && this.state.open) {
        jQuery(this.state.control.element).addClass("c4g-open").removeClass("c4g-close");
        jQuery(".c4g-measuretools-container").addClass("c4g-open").removeClass("c4g-close");

        if (this.removedOnce) {
          try {
            this.props.mapController.map.addLayer(this.measureLayerGroup);
          } catch (e) {
            console.warn(e);
          }
        }

        this.addTooltips();
      }

      if (this.props.mapController.data.caching && !this.state.open) {
        var panelVal = _c4gMapsUtils.utils.getValue('panel');

        if (panelVal === this.constructor.name) {
          _c4gMapsUtils.utils.storeValue('panel', "");
        }
      }
    }
  }, {
    key: "removeTooltips",
    value: function removeTooltips() {
      var arrLayers = this.measureLayerGroup.getLayersArray();

      for (var i = 0; i < arrLayers.length; i++) {
        var layer = arrLayers[i];
        var arrFeatures = layer.getSource().getFeatures();

        if (arrFeatures) {
          for (var j = 0; j < arrFeatures.length; j++) {
            var feature = arrFeatures[j];
            feature.get('tooltip').hide();
          }
        }
      }
    }
  }, {
    key: "addTooltips",
    value: function addTooltips() {
      var arrLayers = this.measureLayerGroup.getLayersArray();

      for (var i = 0; i < arrLayers.length; i++) {
        var layer = arrLayers[i];
        var arrFeatures = layer.getSource().getFeatures();

        if (arrFeatures) {
          for (var j = 0; j < arrFeatures.length; j++) {
            var feature = arrFeatures[j];
            feature.get('tooltip').show();
          }
        }
      }
    }
  }]);
  return Measuretools;
}(_react.Component);

exports.default = Measuretools;

/***/ })

}]);
<<<<<<< refs/remotes/origin/main
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1tZWFzdXJldG9vbHMtZmVhdHVyZS5qc3giLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctbWVhc3VyZXRvb2xzLXZpZXcuanN4Iiwid2VicGFjazovL21hcHNidW5kbGUvLi9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLW1lYXN1cmV0b29scy5qc3giXSwibmFtZXMiOlsiTWVhc3VyZWRGZWF0dXJlIiwicHJvcHMiLCJjaGFuZ2VGZWF0dXJlTGFiZWwiLCJiaW5kIiwic2NvcGUiLCJpZHgiLCJsYWJlbCIsIk9iamVjdCIsImtleXMiLCJtZWFzdXJlZFZhbHVlcyIsIm1hcCIsImVsZW1lbnQiLCJpbmRleCIsIm9iaiIsImhyVmFsdWUiLCJjb252ZXJ0TWV0ZXJzVG9LbSIsInZhbHVlIiwiY29udmVydFNxdWFyZU1ldGVyc1RvU3F1YXJlS20iLCJkZXNjcmlwdGlvbiIsImZlYXR1cmUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJtb2RpZnlGZWF0dXJlIiwiaWQiLCJkaXN0YW5jZSIsImttVmFsdWUiLCJhcmVhIiwiQ29tcG9uZW50IiwiTWVhc3VyZXRvb2xzVmlldyIsImxhbmdDb25zdGFudHMiLCJtYXBDb250cm9sbGVyIiwiZGF0YSIsImhlYWRsaW5lcyIsIk1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfU0VMRUNUIiwiTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX0xJTkVTVFJJTkciLCJNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfUE9MWUdPTiIsIk1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19DSVJDTEUiLCJNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfRlJFRUhBTkQiLCJmZWF0dXJlSWRDdHIiLCJmZWF0dXJlSWQiLCJ1cGRhdGVGdW5jdGlvbnMiLCJjcmVhdGVNZWFzdXJlRnVuY3Rpb25zIiwiYWN0aXZlIiwibW9kZSIsImxhbmciLCJNRUFTVVJFVE9PTFNfSU5GTyIsIk1FQVNVUkVUT09MU19JTkZPX0FERElUSU9OQUwiLCJmZWF0dXJlcyIsImZlYXQiLCJhcnJGZWF0dXJlcyIsImkiLCJsZW5ndGgiLCJvbEZlYXR1cmUiLCJzZXQiLCJ1cGRhdGVNZWFzdXJlRmVhdHVyZSIsImluaXRGdW5jdGlvbiIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsInNuYXBzaG90IiwiYWN0aXZhdGVGdW5jdGlvbiIsImRlYWN0aXZhdGVGdW5jdGlvbiIsIm1hcEhvdmVyIiwiZGVhY3RpdmF0ZSIsIm1lYXN1cmVUb29scyIsInN0YXRlIiwib3BlbiIsImFjdGl2YXRlIiwic291cmNlIiwib2xUeXBlIiwiaW50ZXJhY3Rpb24iLCJmZWF0dXJlSWRDb3VudCIsImFjdGl2ZVNrZXRjaCIsImFjdGl2ZVRvb2x0aXAiLCJhZGRNZWFzdXJlRmVhdHVyZSIsImdldFZhbHVlT2ZHZW9tZXRyeSIsImdldExlbmd0aE9mTWVhc3VyZSIsInJlbW92ZU1lYXN1cmVGZWF0dXJlIiwidG9Mb3dlckNhc2UiLCJtZWFzdXJlRnJlZWhhbmRMYXllciIsImdldFNvdXJjZSIsIm1lYXN1cmVDaXJjbGVMYXllciIsIm1lYXN1cmVQb2x5Z29uTGF5ZXIiLCJtZWFzdXJlTGluZUxheWVyIiwiQ29sbGVjdGlvbiIsIkRyYXciLCJ0eXBlIiwiZnJlZWhhbmQiLCJpbnB1dEVsZW1lbnQiLCJzdHJMYWJlbCIsInN0clR5cGUiLCJtZWFzdXJlQXJlYSIsIm1lYXN1cmVSYWRpdXMiLCJtZWFzdXJlTGluZSIsImdldEdlb21ldHJ5IiwiZ2V0VHlwZSIsIkxFTkdUSCIsIkxJTkUiLCJQRVJJTUVURVIiLCJQT0xZR09OIiwiUkFESVVTIiwiQ0lSQ0xFIiwiRlJFRUhBTkQiLCJtZWFzdXJlZEZlYXR1cmUiLCJhZGRGZWF0dXJlIiwiaW5jckZlYXRJZCIsImZlYXR1cmVUb29sdGlwIiwibmV3Q29udGVudCIsIm5hbWUiLCJyYWRpdXMiLCJnZXQiLCJ1dGlscyIsIm1lYXN1cmVHZW9tZXRyeSIsInJhd1ZhbHVlIiwic2V0Q29udGVudCIsImh0bWxWYWx1ZSIsIm5ld0ZlYXR1cmUiLCJsaW5lIiwicmVtb3ZlRmVhdHVyZSIsImxlbmciLCJ2YWwiLCJ2YWx1ZW51bWIiLCJtYXRjaCIsImpvaW4iLCJsZW5ndGhudW1iIiwib24iLCJldmVudCIsIlRvb2x0aXBQb3BVcCIsInBvc2l0aW9uIiwiY29vcmRpbmF0ZSIsImhvcml6b250YWwiLCJjbG9zZWFibGUiLCJjbG9zZUZ1bmN0aW9uIiwic2V0UG9zaXRpb24iLCJjbGVhciIsImFkZEludGVyYWN0aW9uIiwiZmluaXNoRHJhd2luZyIsImlnbm9yZSIsInJlbW92ZUludGVyYWN0aW9uIiwiTWVhc3VyZXRvb2xzIiwiY3JlYXRlRWxlbWVudCIsImJ1dHRvbiIsInRpdGxlIiwiQ1RSTF9NRUFTVVJFVE9PTFMiLCJjbGFzc05hbWUiLCJleHRlcm5hbCIsImFwcGVuZENoaWxkIiwialF1ZXJ5IiwiaGlkZGVuIiwibWVhc3VyZXRvb2xzQ29udGFpbmVyIiwiaW5jbHVkZXMiLCJjbG9zZSIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJjb250cm9sIiwiQ29udHJvbCIsInRhcmdldCIsIm1hcHNDb250cm9scyIsImNvbnRyb2xzIiwibWVhc3VyZXRvb2xzIiwiYWRkQ29udHJvbCIsImFkZE1lYXN1cmVkRmVhdHVyZSIsIm1vZGlmeU1lYXN1cmVkRmVhdHVyZSIsInJlbW92ZU1lYXN1cmVkRmVhdHVyZSIsImluY3JlbWVudEZlYXR1cmVJZCIsIm1vZGVzIiwiY3VycmVudE1vZGUiLCJtZWFzdXJlZEZlYXR1cmVzIiwiaW5pdCIsImFyclRvb2x0aXBzIiwiTUVBU1VSRVRPT0xTIiwiQ0xPU0UiLCJzZXRTdGF0ZSIsInB1c2giLCJzcGxpY2UiLCJuZXdNb2RlIiwiY29uc29sZSIsIndhcm4iLCJzZXRPcGVuQ29tcG9uZW50IiwiVmVjdG9yIiwiVmVjdG9yU291cmNlIiwibWVhc3VyZUxheWVyR3JvdXAiLCJHcm91cCIsImxheWVycyIsInZpc2libGUiLCJhZGRMYXllciIsInJlbW92ZUxheWVyIiwicmVtb3ZlVG9vbHRpcHMiLCJyZW1vdmVkT25jZSIsImUiLCJhZGRUb29sdGlwcyIsImNhY2hpbmciLCJwYW5lbFZhbCIsImdldFZhbHVlIiwiY29uc3RydWN0b3IiLCJzdG9yZVZhbHVlIiwiYXJyTGF5ZXJzIiwiZ2V0TGF5ZXJzQXJyYXkiLCJsYXllciIsImdldEZlYXR1cmVzIiwiaiIsImhpZGUiLCJzaG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVlBOzs7Ozs7Ozs7O0lBRWFBLGU7Ozs7O0FBRVgsMkJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTtBQUNqQiw4QkFBTUEsS0FBTjtBQUVBLFVBQUtDLGtCQUFMLEdBQTBCLE1BQUtBLGtCQUFMLENBQXdCQyxJQUF4QixnREFBMUI7QUFIaUI7QUFJbEI7Ozs7V0FFRCxrQkFBUztBQUNQLFVBQU1DLEtBQUssR0FBRyxJQUFkO0FBQ0EsYUFDRSw2Q0FDRSw2Q0FDRTtBQUFPLGVBQU8sRUFBRSxvQkFBb0IsS0FBS0gsS0FBTCxDQUFXSTtBQUEvQyxrQkFERixFQUVFO0FBQU8sWUFBSSxFQUFDLE1BQVo7QUFBbUIsWUFBSSxFQUFFLG9CQUFvQixLQUFLSixLQUFMLENBQVdJLEdBQXhEO0FBQTZELG9CQUFZLEVBQUUsS0FBS0osS0FBTCxDQUFXSyxLQUF0RjtBQUNRLGVBQU8sRUFBRSxLQUFLSjtBQUR0QixRQUZGLENBREYsRUFNR0ssTUFBTSxDQUFDQyxJQUFQLENBQVksS0FBS1AsS0FBTCxDQUFXUSxjQUF2QixFQUF1Q0MsR0FBdkMsQ0FBMkMsVUFBU0MsT0FBVCxFQUFrQkMsS0FBbEIsRUFBeUI7QUFDbkUsWUFBSUMsR0FBRyxHQUFHVCxLQUFLLENBQUNILEtBQU4sQ0FBWVEsY0FBWixDQUEyQkUsT0FBM0IsQ0FBVjtBQUNBLFlBQUlHLE9BQU8sR0FBRyxH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U0FBUyxDQUFDaEosTUFBOUIsRUFBc0NELENBQUMsRUFBdkMsRUFBMkM7QUFDekMsWUFBSW1KLEtBQUssR0FBR0YsU0FBUyxDQUFDakosQ0FBRCxDQUFyQjtBQUNBLFlBQUlELFdBQVcsR0FBR29KLEtBQUssQ0FBQ3RILFNBQU4sR0FBa0J1SCxXQUFsQixFQUFsQjs7QUFDQSxZQUFJckosV0FBSixFQUFpQjtBQUNmLGVBQUssSUFBSXNKLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUd0SixXQUFXLENBQUNFLE1BQWhDLEVBQXdDb0osQ0FBQyxFQUF6QyxFQUE2QztBQUMzQyxnQkFBSXBMLE9BQU8sR0FBRzhCLFdBQVcsQ0FBQ3NKLENBQUQsQ0FBekI7QUFDQXBMLG1CQUFPLENBQUMwRixHQUFSLENBQVksU0FBWixFQUF1QjRGLElBQXZCO0FBQ0Q7QUFDRjtBQUNGO0FBQ0Y7OztFQWxPdUM5SyxnQiIsImZpbGUiOiJSZXNvdXJjZXNfcHVibGljX2pzX2NvbXBvbmVudHNfYzRnLW1lYXN1cmV0b29sc19qc3guYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsXG4gKiB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqXG4gKiBAcGFja2FnZSAgIFx0Y29uNGdpc1xuICogQHZlcnNpb24gICAgICAgIDZcbiAqIEBhdXRob3IgIFx0ICAgIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgXHQgICAgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgXHRLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgICAgICAgICAgICAgIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKlxuICovXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgY2xhc3MgTWVhc3VyZWRGZWF0dXJlIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuY2hhbmdlRmVhdHVyZUxhYmVsID0gdGhpcy5jaGFuZ2VGZWF0dXJlTGFiZWwuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e1wibWVhc3VyZUVsZW1lbnRfXCIgKyB0aGlzLnByb3BzLmlkeH0+TmFtZTogPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPXtcIm1lYXN1cmVFbGVtZW50X1wiICsgdGhpcy5wcm9wcy5pZHh9IGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5sYWJlbH1cbiAgICAgICAgICAgICAgICAgIG9uSW5wdXQ9e3RoaXMuY2hhbmdlRmVhdHVyZUxhYmVsfS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7T2JqZWN0LmtleXModGhpcy5wcm9wcy5tZWFzdXJlZFZhbHVlcykubWFwKGZ1bmN0aW9uKGVsZW1lbnQsIGluZGV4KSB7XG4gICAgICAgICAgbGV0IG9iaiA9IHNjb3BlLnByb3BzLm1lYXN1cmVkVmFsdWVzW2VsZW1lbnRdO1xuICAgICAgICAgIGxldCBoclZhbHVlID0gMC4wO1xuICAgICAgICAgIHN3aXRjaCAoZWxlbWVudCkge1xuICAgICAgICAgICAgY2FzZSBcImxpbmVcIjpcbiAgICAgICAgICAgIGNhc2UgXCJyYWRpdXNcIjpcbiAgICAgICAgICAgICAgaHJWYWx1ZSA9IHNjb3BlLmNvbnZlcnRNZXRlcnNUb0ttKG9iai52YWx1ZSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImFyZWFcIjpcbiAgICAgICAgICAgICAgaHJWYWx1ZSA9IHNjb3BlLmNvbnZlcnRTcXVhcmVNZXRlcnNUb1NxdWFyZUttKG9iai52YWx1ZSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gKDxwIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgPHN0cm9uZz57b2JqLmRlc2NyaXB0aW9ufTwvc3Ryb25nPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtcImM0Zy1tZWFzdXJlLXZhbHVlLVwiICsgc2NvcGUucHJvcHMuaWR4fT57aHJWYWx1ZX08L3NwYW4+XG4gICAgICAgICAgPC9wPilcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgY2hhbmdlRmVhdHVyZUxhYmVsKCkge1xuICAgIGxldCBmZWF0dXJlID0gdGhpcy5wcm9wcy5mZWF0dXJlO1xuICAgIGZlYXR1cmUubGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwibWVhc3VyZUVsZW1lbnRfJyArIHRoaXMucHJvcHMuaWR4ICsgJ1wiXScpLnZhbHVlO1xuICAgIHRoaXMucHJvcHMubW9kaWZ5RmVhdHVyZShmZWF0dXJlLCBmZWF0dXJlLmlkKTtcbiAgfVxuXG4gIGNvbnZlcnRNZXRlcnNUb0ttKGRpc3RhbmNlKSB7XG4gICAgbGV0IGttVmFsdWUgPSBkaXN0YW5jZSAvIDEwMDA7XG4gICAgaWYgKGttVmFsdWUgPiAwKSB7XG4gICAgICByZXR1cm4ga21WYWx1ZSArIFwiIGttXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBkaXN0YW5jZSArIFwiIG1cIjtcbiAgICB9XG4gIH1cblxuICBjb252ZXJ0U3F1YXJlTWV0ZXJzVG9TcXVhcmVLbShhcmVhKSB7XG4gICAgbGV0IGttVmFsdWUgPSBhcmVhIC8gMTAwMDAwMDtcbiAgICBpZiAoa21WYWx1ZSA+IDApIHtcbiAgICAgIHJldHVybiBrbVZhbHVlICsgXCIga23CslwiO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYXJlYSArIFwiIG3CslwiO1xuICAgIH1cbiAgfVxuXG59IiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsXG4gKiB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqXG4gKiBAcGFja2FnZSAgIFx0Y29uNGdpc1xuICogQHZlcnNpb24gICAgICAgIDZcbiAqIEBhdXRob3IgIFx0ICAgIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgXHQgICAgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgXHRLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgICAgICAgICAgICAgIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKlxuICovXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtnZXRMYW5ndWFnZX0gZnJvbSBcIi4uL2M0Zy1tYXBzLWkxOG5cIjtcbmltcG9ydCB7Q29sbGVjdGlvbn0gZnJvbSBcIm9sXCI7XG5pbXBvcnQge0RyYXd9IGZyb20gXCJvbC9pbnRlcmFjdGlvblwiO1xuaW1wb3J0IHt1dGlsc30gZnJvbSBcIi4uL2M0Zy1tYXBzLXV0aWxzXCI7XG5pbXBvcnQge1Rvb2x0aXBQb3BVcH0gZnJvbSBcIi4uL2M0Zy1tYXBzLW1pc2MtdG9vbHRpcHBvcHVwXCI7XG5pbXBvcnQge01lYXN1cmVkRmVhdHVyZX0gZnJvbSBcIi4vYzRnLW1lYXN1cmV0b29scy1mZWF0dXJlLmpzeFwiO1xuXG5leHBvcnQgY2xhc3MgTWVhc3VyZXRvb2xzVmlldyBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICBsZXQgbGFuZ0NvbnN0YW50cyA9IGdldExhbmd1YWdlKHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhKTtcblxuICAgIHRoaXMuaGVhZGxpbmVzID0ge1xuICAgICAgXCJzZWxlY3RcIjogbGFuZ0NvbnN0YW50cy5NRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX1NFTEVDVCxcbiAgICAgIFwibGluZVwiOiBsYW5nQ29uc3RhbnRzLk1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19MSU5FU1RSSU5HLFxuICAgICAgXCJwb2x5Z29uXCI6IGxhbmdDb25zdGFudHMuTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX1BPTFlHT04sXG4gICAgICBcImNpcmNsZVwiOiBsYW5nQ29uc3RhbnRzLk1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19DSVJDTEUsXG4gICAgICBcImZyZWVoYW5kXCI6IGxhbmdDb25zdGFudHMuTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX0ZSRUVIQU5ELFxuICAgIH07XG4gICAgdGhpcy5mZWF0dXJlSWRDdHIgPSB0aGlzLnByb3BzLmZlYXR1cmVJZDtcbiAgICB0aGlzLnVwZGF0ZUZ1bmN0aW9ucyA9IHRoaXMuY3JlYXRlTWVhc3VyZUZ1bmN0aW9ucygpO1xuICAgIHRoaXMubW9kaWZ5RmVhdHVyZSA9IHRoaXMubW9kaWZ5RmVhdHVyZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBpZiAodGhpcy5wcm9wcy5hY3RpdmUpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLm1vZGUgPT09IFwic2VsZWN0XCIpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjNGctbWVhc3VyZXRvb2xzLWNvbnRlbnRcIn0+XG4gICAgICAgICAgICA8cD57dGhpcy5wcm9wcy5sYW5nLk1FQVNVUkVUT09MU19JTkZPfTwvcD5cbiAgICAgICAgICAgIDxici8+PGJyLz5cbiAgICAgICAgICAgIDxzdWI+e3RoaXMucHJvcHMubGFuZy5NRUFTVVJFVE9PTFNfSU5GT19BRERJVElPTkFMfTwvc3ViPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gbWVhc3VyZSB2aWV3XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLW1lYXN1cmV0b29scy1jb250ZW50XCJ9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiY29udGVudEhlYWRsaW5lXCJ9Pnt0aGlzLmhlYWRsaW5lc1t0aGlzLnByb3BzLm1vZGVdfTwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAge09iamVjdC5rZXlzKHRoaXMucHJvcHMuZmVhdHVyZXMpLm1hcChmdW5jdGlvbihlbGVtZW50LCBpbmRleCkge1xuICAgICAgICAgICAgICAgIGxldCBmZWF0ID0gc2NvcGUucHJvcHMuZmVhdHVyZXNbZWxlbWVudF07XG4gICAgICAgICAgICAgICAgcmV0dXJuICg8TWVhc3VyZWRGZWF0dXJlIGtleT17aW5kZXh9IGlkeD17aW5kZXh9IGxhYmVsPXtmZWF0LmxhYmVsfSBmZWF0dXJlPXtmZWF0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZWFzdXJlZFZhbHVlcz17ZmVhdC5tZWFzdXJlZFZhbHVlc30gbW9kaWZ5RmVhdHVyZT17c2NvcGUubW9kaWZ5RmVhdHVyZX0vPik7XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIG5vdCBhY3RpdmVcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICB9XG5cbiAgbW9kaWZ5RmVhdHVyZShmZWF0dXJlLCBpZCkge1xuICAgIGxldCBhcnJGZWF0dXJlcyA9IHRoaXMucHJvcHMuZmVhdHVyZXM7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJGZWF0dXJlcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGFyckZlYXR1cmVzW2ldLmlkID09PSBpZCkge1xuICAgICAgICBhcnJGZWF0dXJlc1tpXS5vbEZlYXR1cmUuc2V0KCdmZWF0dXJlTGFiZWwnLCBmZWF0dXJlLmxhYmVsKTtcbiAgICAgICAgdGhpcy51cGRhdGVNZWFzdXJlRmVhdHVyZShhcnJGZWF0dXJlc1tpXS5vbEZlYXR1cmUpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5wcm9wcy5tb2RpZnlGZWF0dXJlKGZlYXR1cmUsIGlkKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmICh0aGlzLnByb3BzLm1vZGUgIT09IFwic2VsZWN0XCIpIHtcbiAgICAgIHRoaXMudXBkYXRlRnVuY3Rpb25zLmluaXRGdW5jdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSwgc25hcHNob3QpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5tb2RlICE9PSBcInNlbGVjdFwiKSB7XG4gICAgICBpZiAoIXByZXZQcm9wcy5hY3RpdmUgJiYgdGhpcy5wcm9wcy5hY3RpdmUpIHtcbiAgICAgICAgdGhpcy51cGRhdGVGdW5jdGlvbnMuYWN0aXZhdGVGdW5jdGlvbigpO1xuICAgICAgfVxuICAgICAgaWYgKHByZXZQcm9wcy5hY3RpdmUgJiYgIXRoaXMucHJvcHMuYWN0aXZlKSB7XG4gICAgICAgIHRoaXMudXBkYXRlRnVuY3Rpb25zLmRlYWN0aXZhdGVGdW5jdGlvbigpO1xuICAgICAgfVxuICAgICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLm1hcEhvdmVyLmRlYWN0aXZhdGUoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMubW9kZSA9PT0gXCJzZWxlY3RcIiB8fCAhdGhpcy5wcm9wcy5tZWFzdXJlVG9vbHMuc3RhdGUub3Blbikge1xuICAgICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLm1hcEhvdmVyLmFjdGl2YXRlKCk7XG4gICAgfVxuICAgIHRoaXMuZmVhdHVyZUlkQ3RyID0gdGhpcy5wcm9wcy5mZWF0dXJlSWQ7XG4gIH1cblxuICBjcmVhdGVNZWFzdXJlRnVuY3Rpb25zKCkge1xuICAgIGxldCBzb3VyY2UsIGZlYXR1cmVzLCBvbFR5cGUsIGludGVyYWN0aW9uO1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICByZXR1cm4ge1xuICAgICAgaW5pdEZ1bmN0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgZmVhdHVyZUlkQ291bnQsXG4gICAgICAgIGFjdGl2ZVNrZXRjaCxcbiAgICAgICAgYWN0aXZlVG9vbHRpcCxcbiAgICAgICAgYWRkTWVhc3VyZUZlYXR1cmUsXG4gICAgICAgIHVwZGF0ZU1lYXN1cmVGZWF0dXJlLFxuICAgICAgICBnZXRWYWx1ZU9mR2VvbWV0cnksXG4gICAgICAgIGdldExlbmd0aE9mTWVhc3VyZSxcbiAgICAgICAgcmVtb3ZlTWVhc3VyZUZlYXR1cmU7XG5cbiAgICAgIGZlYXR1cmVJZENvdW50ID0gc2NvcGUuZmVhdHVyZUlkQ3RyO1xuXG4gICAgICBpZiAoc2NvcGUucHJvcHMubW9kZS50b0xvd2VyQ2FzZSgpID09PSAnZnJlZWhhbmQnKSB7XG4gICAgICAgIHNvdXJjZSA9IHNjb3BlLnByb3BzLm1lYXN1cmVUb29scy5tZWFzdXJlRnJlZWhhbmRMYXllci5nZXRTb3VyY2UoKTtcbiAgICAgIH0gZWxzZSBpZiAoc2NvcGUucHJvcHMubW9kZS50b0xvd2VyQ2FzZSgpID09PSAnY2lyY2xlJykge1xuICAgICAgICBzb3VyY2UgPSBzY29wZS5wcm9wcy5tZWFzdXJlVG9vbHMubWVhc3VyZUNpcmNsZUxheWVyLmdldFNvdXJjZSgpO1xuICAgICAgfSBlbHNlIGlmIChzY29wZS5wcm9wcy5tb2RlLnRvTG93ZXJDYXNlKCkgPT09ICdwb2x5Z29uJykge1xuICAgICAgICBzb3VyY2UgPSBzY29wZS5wcm9wcy5tZWFzdXJlVG9vbHMubWVhc3VyZVBvbHlnb25MYXllci5nZXRTb3VyY2UoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNvdXJjZSA9IHNjb3BlLnByb3BzLm1lYXN1cmVUb29scy5tZWFzdXJlTGluZUxheWVyLmdldFNvdXJjZSgpO1xuICAgICAgfVxuXG4gICAgICBmZWF0dXJlcyA9IG5ldyBDb2xsZWN0aW9uKCk7XG4gICAgICBpZiAoc2NvcGUucHJvcHMubW9kZS50b0xvd2VyQ2FzZSgpID09PSBcInNlbGVjdFwiKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc3dpdGNoIChzY29wZS5wcm9wcy5tb2RlKSB7XG4gICAgICAgIGNhc2UgXCJsaW5lXCI6XG4gICAgICAgICAgb2xUeXBlID0gXCJMaW5lU3RyaW5nXCI7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJwb2x5Z29uXCI6XG4gICAgICAgICAgb2xUeXBlID0gXCJQb2x5Z29uXCI7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJjaXJjbGVcIjpcbiAgICAgICAgICBvbFR5cGUgPSBcIkNpcmNsZVwiO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiZnJlZWhhbmRcIjpcbiAgICAgICAgICBvbFR5cGUgPSBcIkxpbmVTdHJpbmdcIjtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgaW50ZXJhY3Rpb24gPSBuZXcgRHJhdyh7XG4gICAgICAgIGZlYXR1cmVzOiBmZWF0dXJlcyxcbiAgICAgICAgc291cmNlOiBzb3VyY2UsXG4gICAgICAgIHR5cGU6IG9sVHlwZSxcbiAgICAgICAgZnJlZWhhbmQ6IHNjb3BlLnByb3BzLm1vZGUgPT09ICdmcmVlaGFuZCcsXG4gICAgICAgIC8vIEBUT0RPOiB1c2UgY3VzdG9tIHN0eWxlPyAoQkUtb3B0aW9uKVxuICAgICAgICAvLyBzdHlsZTogdXNlIGRlZmF1bHQgc3R5bGVcbiAgICAgIH0pO1xuXG4gICAgICBhZGRNZWFzdXJlRmVhdHVyZSA9IGZ1bmN0aW9uIChmZWF0dXJlKSB7XG4gICAgICAgIHZhciBpbnB1dEVsZW1lbnQsXG4gICAgICAgICAgc3RyTGFiZWwsXG4gICAgICAgICAgc3RyVHlwZSxcbiAgICAgICAgICBtZWFzdXJlQXJlYSxcbiAgICAgICAgICBtZWFzdXJlUmFkaXVzLFxuICAgICAgICAgIG1lYXN1cmVMaW5lO1xuXG4gICAgICAgIGlmICghZmVhdHVyZSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNoZWNrIGZlYXR1cmUtdHlwZVxuICAgICAgICBpZiAoZmVhdHVyZS5nZXRHZW9tZXRyeSgpLmdldFR5cGUoKSA9PT0gJ0xpbmVTdHJpbmcnKSB7XG4gICAgICAgICAgc3RyTGFiZWwgPSBzY29wZS5wcm9wcy5sYW5nLkxFTkdUSDtcbiAgICAgICAgICBzdHJUeXBlID0gc2NvcGUucHJvcHMubGFuZy5MSU5FO1xuICAgICAgICAgIG1lYXN1cmVBcmVhID0gZmFsc2U7XG4gICAgICAgICAgbWVhc3VyZVJhZGl1cyA9IGZhbHNlO1xuICAgICAgICAgIG1lYXN1cmVMaW5lID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChmZWF0dXJlLmdldEdlb21ldHJ5KCkuZ2V0VHlwZSgpID09PSAnUG9seWdvbicpIHtcbiAgICAgICAgICBzdHJMYWJlbCA9IHNjb3BlLnByb3BzLmxhbmcuUEVSSU1FVEVSO1xuICAgICAgICAgIHN0clR5cGUgPSBzY29wZS5wcm9wcy5sYW5nLlBPTFlHT047XG4gICAgICAgICAgbWVhc3VyZUFyZWEgPSB0cnVlO1xuICAgICAgICAgIG1lYXN1cmVSYWRpdXMgPSBmYWxzZTtcbiAgICAgICAgICBtZWFzdXJlTGluZSA9IGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKGZlYXR1cmUuZ2V0R2VvbWV0cnkoKS5nZXRUeXBlKCkgPT09ICdDaXJjbGUnKSB7XG4gICAgICAgICAgc3RyTGFiZWwgPSBzY29wZS5wcm9wcy5sYW5nLlJBRElVUztcbiAgICAgICAgICBzdHJUeXBlID0gc2NvcGUucHJvcHMubGFuZy5DSVJDTEU7XG4gICAgICAgICAgbWVhc3VyZUFyZWEgPSB0cnVlO1xuICAgICAgICAgIG1lYXN1cmVSYWRpdXMgPSB0cnVlO1xuICAgICAgICAgIG1lYXN1cmVMaW5lID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy9mcmVlaGFuZCBpcyBMaW5lU3RyaW5nIHRvb1xuICAgICAgICAgIHN0ckxhYmVsID0gc2NvcGUucHJvcHMubGFuZy5MRU5HVEg7XG4gICAgICAgICAgc3RyVHlwZSA9IHNjb3BlLnByb3BzLmxhbmcuRlJFRUhBTkQ7XG4gICAgICAgICAgbWVhc3VyZUFyZWEgPSBmYWxzZTtcbiAgICAgICAgICBtZWFzdXJlUmFkaXVzID0gZmFsc2U7XG4gICAgICAgICAgbWVhc3VyZUxpbmUgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZmVhdHVyZS5zZXQoJ2xpc3RFbGVtZW50VmFsdWVOYW1lJywgaW5wdXRFbGVtZW50KTtcbiAgICAgICAgZmVhdHVyZUlkQ291bnQgPSBzY29wZS5mZWF0dXJlSWRDdHI7XG4gICAgICAgIGZlYXR1cmUuc2V0KCdmZWF0dXJlSWQnLCBmZWF0dXJlSWRDb3VudCk7XG4gICAgICAgIGxldCBtZWFzdXJlZEZlYXR1cmUgPSB7fTtcbiAgICAgICAgbWVhc3VyZWRGZWF0dXJlLmlkID0gZmVhdHVyZUlkQ291bnQ7XG4gICAgICAgIG1lYXN1cmVkRmVhdHVyZS5sYWJlbCA9IHN0clR5cGUgKyBcIiBcIiArIGZlYXR1cmVJZENvdW50O1xuICAgICAgICBmZWF0dXJlLnNldCgnZmVhdHVyZUxhYmVsJywgbWVhc3VyZWRGZWF0dXJlLmxhYmVsKTtcbiAgICAgICAgbWVhc3VyZWRGZWF0dXJlLm1lYXN1cmVkVmFsdWVzID0ge307XG4gICAgICAgIGlmIChtZWFzdXJlTGluZSkge1xuICAgICAgICAgIG1lYXN1cmVkRmVhdHVyZS5tZWFzdXJlZFZhbHVlc1snbGluZSddID0ge1xuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiTMOkbmdlOiBcIixcbiAgICAgICAgICAgIHZhbHVlOiAwXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWVhc3VyZVJhZGl1cykge1xuICAgICAgICAgIG1lYXN1cmVkRmVhdHVyZS5tZWFzdXJlZFZhbHVlc1sncmFkaXVzJ10gPSB7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJSYWRpdXM6IFwiLFxuICAgICAgICAgICAgdmFsdWU6IDBcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGlmIChtZWFzdXJlQXJlYSkge1xuICAgICAgICAgIG1lYXN1cmVkRmVhdHVyZS5tZWFzdXJlZFZhbHVlc1snYXJlYSddID0ge1xuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiRmzDpGNoZW5pbmhhbHQ6IFwiLFxuICAgICAgICAgICAgdmFsdWU6IDBcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIG1lYXN1cmVkRmVhdHVyZS5vbEZlYXR1cmUgPSBmZWF0dXJlO1xuICAgICAgICBzY29wZS5wcm9wcy5hZGRGZWF0dXJlKG1lYXN1cmVkRmVhdHVyZSk7XG4gICAgICAgIC8vIGluY3JlYXNlIHRoZSBpZC1jb3VudGVyXG4gICAgICAgIHNjb3BlLnByb3BzLmluY3JGZWF0SWQoKTtcbiAgICAgICAgLy8gc2NvcGUudXBkYXRlKCk7XG4gICAgICB9OyAvLyBlbmQgb2YgXCJhZGRNZWFzdXJlRmVhdHVyZSgpXCJcblxuICAgICAgdXBkYXRlTWVhc3VyZUZlYXR1cmUgPSBmdW5jdGlvbiAoZmVhdHVyZSkge1xuICAgICAgICB2YXIgZmVhdHVyZVRvb2x0aXAsXG4gICAgICAgICAgbmV3Q29udGVudCxcbiAgICAgICAgICBuYW1lLFxuICAgICAgICAgIGxlbmd0aCxcbiAgICAgICAgICBhcmVhLFxuICAgICAgICAgIHJhZGl1cztcblxuICAgICAgICBmZWF0dXJlVG9vbHRpcCA9IGZlYXR1cmUuZ2V0KCd0b29sdGlwJyk7XG4gICAgICAgIG5hbWUgPSBmZWF0dXJlLmdldCgnZmVhdHVyZUxhYmVsJyk7XG4gICAgICAgIGxlbmd0aCA9IHV0aWxzLm1lYXN1cmVHZW9tZXRyeShmZWF0dXJlLmdldEdlb21ldHJ5KCksIHRydWUpO1xuICAgICAgICBmZWF0dXJlLnNldCgnbWVhc3VyZWRMZW5ndGgnLCBsZW5ndGgucmF3VmFsdWUpO1xuICAgICAgICBmZWF0dXJlVG9vbHRpcC5zZXRDb250ZW50KFwiPHN0cm9uZz5cIiArIG5hbWUgKyBcIjwvc3Ryb25nPlwiICsgXCI8YnI+XCIgKyBsZW5ndGguaHRtbFZhbHVlKTtcbiAgICAgICAgbGV0IGZlYXR1cmVJZCA9IGZlYXR1cmUuZ2V0KCdmZWF0dXJlSWQnKTtcbiAgICAgICAgbGV0IG5ld0ZlYXR1cmUgPSB7fTtcbiAgICAgICAgbmV3RmVhdHVyZS5sYWJlbCA9IG5hbWU7XG4gICAgICAgIG5ld0ZlYXR1cmUuaWQgPSBmZWF0dXJlSWQ7XG4gICAgICAgIG5ld0ZlYXR1cmUubWVhc3VyZWRWYWx1ZXMgPSB7fTtcbiAgICAgICAgbmV3RmVhdHVyZS5vbEZlYXR1cmUgPSBmZWF0dXJlO1xuICAgICAgICBpZiAobGVuZ3RoICYmIGZlYXR1cmUuZ2V0KCdnZW9tZXRyeVR5cGUnKSAhPT0gJ2NpcmNsZSdcbiAgICAgICAgICAmJiBmZWF0dXJlLmdldCgnZ2VvbWV0cnlUeXBlJykgIT09ICdwb2x5Z29uJykge1xuICAgICAgICAgIG5ld0ZlYXR1cmUubWVhc3VyZWRWYWx1ZXMubGluZSA9IHt9O1xuICAgICAgICAgIG5ld0ZlYXR1cmUubWVhc3VyZWRWYWx1ZXNbJ2xpbmUnXS5kZXNjcmlwdGlvbiA9IFwiTMOkbmdlOiBcIjtcbiAgICAgICAgICBuZXdGZWF0dXJlLm1lYXN1cmVkVmFsdWVzWydsaW5lJ10udmFsdWUgPSBsZW5ndGgucmF3VmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZmVhdHVyZS5nZXQoJ2dlb21ldHJ5VHlwZScpID09PSAnY2lyY2xlJykge1xuICAgICAgICAgIHJhZGl1cyA9IHV0aWxzLm1lYXN1cmVHZW9tZXRyeShmZWF0dXJlLmdldEdlb21ldHJ5KCkpO1xuICAgICAgICAgIG5ld0ZlYXR1cmUubWVhc3VyZWRWYWx1ZXNbJ3JhZGl1cyddID0ge1xuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiUmFkaXVzOiBcIixcbiAgICAgICAgICAgIHZhbHVlOiAwXG4gICAgICAgICAgfTtcbiAgICAgICAgICBuZXdGZWF0dXJlLm1lYXN1cmVkVmFsdWVzWydyYWRpdXMnXS52YWx1ZSA9IHJhZGl1cy5yYXdWYWx1ZTtcbiAgICAgICAgICBmZWF0dXJlVG9vbHRpcC5zZXRDb250ZW50KFwiPHN0cm9uZz5cIiArIG5hbWUgKyBcIjwvc3Ryb25nPlwiICsgXCI8YnI+XCJcbiAgICAgICAgICAgICsgbmV3RmVhdHVyZS5tZWFzdXJlZFZhbHVlc1sncmFkaXVzJ10uZGVzY3JpcHRpb24gKyByYWRpdXMuaHRtbFZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZmVhdHVyZS5nZXQoJ2dlb21ldHJ5VHlwZScpID09PSAncG9seWdvbidcbiAgICAgICAgICB8fCBmZWF0dXJlLmdldCgnZ2VvbWV0cnlUeXBlJykgPT09ICdjaXJjbGUnKSB7XG4gICAgICAgICAgYXJlYSA9IHV0aWxzLm1lYXN1cmVHZW9tZXRyeShmZWF0dXJlLmdldEdlb21ldHJ5KCksIGZhbHNlLCB0cnVlKTtcbiAgICAgICAgICBuZXdGZWF0dXJlLm1lYXN1cmVkVmFsdWVzWydhcmVhJ10gPSB7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJGbMOkY2hlbmluaGFsdDogXCIsXG4gICAgICAgICAgICB2YWx1ZTogMFxuICAgICAgICAgIH07XG4gICAgICAgICAgbmV3RmVhdHVyZS5tZWFzdXJlZFZhbHVlc1snYXJlYSddLnZhbHVlID0gYXJlYS5yYXdWYWx1ZTtcbiAgICAgICAgICBmZWF0dXJlVG9vbHRpcC5zZXRDb250ZW50KFwiPHN0cm9uZz5cIiArIG5hbWUgKyBcIjwvc3Ryb25nPlwiICsgXCI8YnI+XCJcbiAgICAgICAgICAgICsgbmV3RmVhdHVyZS5tZWFzdXJlZFZhbHVlc1snYXJlYSddLmRlc2NyaXB0aW9uICsgYXJlYS5odG1sVmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGZlYXR1cmUuc2V0KCd0b29sdGlwJywgZmVhdHVyZVRvb2x0aXApO1xuICAgICAgICBzY29wZS5wcm9wcy5tb2RpZnlGZWF0dXJlKG5ld0ZlYXR1cmUsIG5ld0ZlYXR1cmUuaWQpO1xuICAgICAgfTsgLy8gZW5kIG9mIFwidXBkYXRlTWVhc3VyZUZlYXR1cmUoKVwiXG5cbiAgICAgIHNjb3BlLnVwZGF0ZU1lYXN1cmVGZWF0dXJlID0gdXBkYXRlTWVhc3VyZUZlYXR1cmU7XG5cbiAgICAgIHJlbW92ZU1lYXN1cmVGZWF0dXJlID0gZnVuY3Rpb24gKGZlYXR1cmUpIHtcbiAgICAgICAgc2NvcGUucHJvcHMucmVtb3ZlRmVhdHVyZShmZWF0dXJlLmdldCgnZmVhdHVyZUlkJykpO1xuICAgICAgfTsgLy8gZW5kIG9mIFwicmVtb3ZlTWVhc3VyZUZlYXR1cmUoKVwiXG5cbiAgICAgIC8vU3RhcnQgV29ya2Fyb3VuZFxuICAgICAgZ2V0VmFsdWVPZkdlb21ldHJ5ID0gZnVuY3Rpb24gKGZlYXR1cmUpIHtcbiAgICAgICAgdmFyIGxlbmcgPSB1dGlscy5tZWFzdXJlR2VvbWV0cnkoZmVhdHVyZS5nZXRHZW9tZXRyeSgpLCB0cnVlKTtcbiAgICAgICAgLy8gZmVhdHVyZS5zZXQoJ21lYXN1cmVkTGVuZ3RoJywgbGVuZ3RoKTtcbiAgICAgICAgdmFyIHZhbCA9IGxlbmcuaHRtbFZhbHVlO1xuICAgICAgICB2YXIgdmFsdWVudW1iID0gdmFsLm1hdGNoKC9cXGQvZyk7XG4gICAgICAgIHZhbHVlbnVtYiA9IHZhbHVlbnVtYi5qb2luKFwiXCIpO1xuICAgICAgICByZXR1cm4gdmFsdWVudW1iO1xuICAgICAgfTtcblxuICAgICAgZ2V0TGVuZ3RoT2ZNZWFzdXJlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbGVuZ3RoID0gJzAuMDAgbSc7XG4gICAgICAgIHZhciBsZW5ndGhudW1iID0gbGVuZ3RoLm1hdGNoKC9cXGQvZyk7XG4gICAgICAgIGxlbmd0aG51bWIgPSBsZW5ndGhudW1iLmpvaW4oXCJcIik7XG4gICAgICAgIGxlbmd0aG51bWIgPSArODtcbiAgICAgICAgcmV0dXJuIGxlbmd0aG51bWI7XG4gICAgICB9Oy8vIEVuZCBXb3JrYXJvdW5kXG5cbiAgICAgIGludGVyYWN0aW9uLm9uKCdkcmF3c3RhcnQnLFxuICAgICAgICBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICBhY3RpdmVTa2V0Y2ggPSBldmVudC5mZWF0dXJlO1xuICAgICAgICAgIC8vIGNyZWF0ZSB0b29sdGlwXG4gICAgICAgICAgYWN0aXZlVG9vbHRpcCA9IG5ldyBUb29sdGlwUG9wVXAoe1xuICAgICAgICAgICAgbWFwOiBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLm1hcCxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBldmVudC5jb29yZGluYXRlLFxuICAgICAgICAgICAgaG9yaXpvbnRhbDogdHJ1ZSxcbiAgICAgICAgICAgIGNsb3NlYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNsb3NlRnVuY3Rpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgLy9Xb3JrYXJvdW5kLCBmb3Igc21hbGwgb3IgemVybyB2YWx1ZXMgb2YgRnJlZWhhbmRcbiAgICAgICAgICAgICAgdmFyIHZhbCA9IGdldFZhbHVlT2ZHZW9tZXRyeShldmVudC5mZWF0dXJlKTtcbiAgICAgICAgICAgICAgdmFyIGxlbmcgPSBnZXRMZW5ndGhPZk1lYXN1cmUoKTtcbiAgICAgICAgICAgICAgaWYgKHZhbCAhPT0gbGVuZyAmJiB2YWwgPiBsZW5nKSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlTWVhc3VyZUZlYXR1cmUoZXZlbnQuZmVhdHVyZSk7XG4gICAgICAgICAgICAgICAgc291cmNlLnJlbW92ZUZlYXR1cmUoZXZlbnQuZmVhdHVyZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlTWVhc3VyZUZlYXR1cmUoZXZlbnQuZmVhdHVyZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGFjdGl2ZVNrZXRjaC5zZXQoJ3Rvb2x0aXAnLCBhY3RpdmVUb29sdGlwKTtcbiAgICAgICAgICBhY3RpdmVTa2V0Y2guc2V0KCdnZW9tZXRyeVR5cGUnLCBzY29wZS5wcm9wcy5tb2RlLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICAgIGFkZE1lYXN1cmVGZWF0dXJlKGFjdGl2ZVNrZXRjaCk7XG4gICAgICAgIH0sIHNjb3BlKTtcblxuICAgICAgc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5tYXAub24oJ3BvaW50ZXJtb3ZlJyxcbiAgICAgICAgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgaWYgKGFjdGl2ZVNrZXRjaCAmJiBhY3RpdmVUb29sdGlwKSB7XG4gICAgICAgICAgICBhY3RpdmVUb29sdGlwLnNldFBvc2l0aW9uKGV2ZW50LmNvb3JkaW5hdGUpO1xuICAgICAgICAgICAgdXBkYXRlTWVhc3VyZUZlYXR1cmUoYWN0aXZlU2tldGNoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHNjb3BlKTtcblxuICAgICAgaW50ZXJhY3Rpb24ub24oJ2RyYXdlbmQnLFxuICAgICAgICBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICBpZiAoYWN0aXZlU2tldGNoICYmIGFjdGl2ZVRvb2x0aXApIHtcbiAgICAgICAgICAgIHVwZGF0ZU1lYXN1cmVGZWF0dXJlKGFjdGl2ZVNrZXRjaCk7XG4gICAgICAgICAgICBhY3RpdmVTa2V0Y2ggPSBudWxsO1xuICAgICAgICAgICAgYWN0aXZlVG9vbHRpcCA9IG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBzY29wZSk7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG4gICAgICBhY3RpdmF0ZUZ1bmN0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZlYXR1cmVzLmNsZWFyKCk7XG4gICAgICAgIC8vIEVuYWJsZSBpbnRlcmFjdGlvblxuICAgICAgICBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLm1hcC5hZGRJbnRlcmFjdGlvbihpbnRlcmFjdGlvbik7XG4gICAgICB9LFxuICAgICAgZGVhY3RpdmF0ZUZ1bmN0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChzY29wZS5wcm9wcy5tb2RlLnRvTG93ZXJDYXNlKCkgIT09ICdwb2ludCcpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgaW50ZXJhY3Rpb24uZmluaXNoRHJhd2luZygpO1xuICAgICAgICAgIH0gY2F0Y2ggKGlnbm9yZSkge1xuICAgICAgICAgICAgLy8gMF9vXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFJlbW92ZSBmcm9tIG1hcFxuICAgICAgICBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLm1hcC5yZW1vdmVJbnRlcmFjdGlvbihpbnRlcmFjdGlvbik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbn0iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcyxcbiAqIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICpcbiAqIEBwYWNrYWdlICAgXHRjb240Z2lzXG4gKiBAdmVyc2lvbiAgICAgICAgNlxuICogQGF1dGhvciAgXHQgICAgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBcdCAgICBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCBcdEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayAgICAgICAgICAgICAgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7VGl0bGViYXJ9IGZyb20gXCIuL2M0Zy10aXRsZWJhci5qc3hcIjtcbmltcG9ydCB7Z2V0TGFuZ3VhZ2V9IGZyb20gXCIuLi9jNGctbWFwcy1pMThuXCI7XG5pbXBvcnQge0NvbnRyb2x9IGZyb20gXCJvbC9jb250cm9sXCI7XG5pbXBvcnQge01lYXN1cmV0b29sc1ZpZXd9IGZyb20gXCIuL2M0Zy1tZWFzdXJldG9vbHMtdmlldy5qc3hcIjtcbmltcG9ydCB7R3JvdXAsIFZlY3Rvcn0gZnJvbSBcIm9sL2xheWVyXCI7XG5pbXBvcnQge1ZlY3RvciBhcyBWZWN0b3JTb3VyY2V9IGZyb20gXCJvbC9zb3VyY2VcIjtcbmltcG9ydCB7Q29sbGVjdGlvbn0gZnJvbSBcIm9sXCI7XG5pbXBvcnQge3V0aWxzfSBmcm9tIFwiLi4vYzRnLW1hcHMtdXRpbHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVhc3VyZXRvb2xzIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICAvLyBjcmVhdGUgY29udHJvbCB0byB0b2dnbGUgdGhlIHBhbmVsXG4gICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdGhpcy5sYW5nQ29uc3RhbnRzID0gZ2V0TGFuZ3VhZ2UocHJvcHMubWFwQ29udHJvbGxlci5kYXRhKTtcbiAgICBidXR0b24udGl0bGUgPSB0aGlzLmxhbmdDb25zdGFudHMuQ1RSTF9NRUFTVVJFVE9PTFM7XG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSBcImM0Zy1tZWFzdXJldG9vbHMtY29udHJvbCBvbC11bnNlbGVjdGFibGUgb2wtY29udHJvbCBcIjtcbiAgICBpZiAocHJvcHMub3Blbikge1xuICAgICAgZWxlbWVudC5jbGFzc05hbWUgKz0gXCJjNGctb3BlblwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtZW50LmNsYXNzTmFtZSArPSBcImM0Zy1jbG9zZVwiO1xuICAgIH1cbiAgICBpZiAocHJvcHMuZXh0ZXJuYWwpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9IFwiIGM0Zy1leHRlcm5hbFwiO1xuICAgIH1cbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgalF1ZXJ5KGVsZW1lbnQpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgbGV0IGhpZGRlbiA9IHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIubWVhc3VyZXRvb2xzQ29udGFpbmVyLmNsYXNzTmFtZS5pbmNsdWRlcygnYzRnLWNsb3NlJyk7XG4gICAgICBpZiAoc2NvcGUuc3RhdGUub3Blbikge1xuICAgICAgICBpZiAoIWhpZGRlbikge1xuICAgICAgICAgIHNjb3BlLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgalF1ZXJ5KHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIubWVhc3VyZXRvb2xzQ29udGFpbmVyKS5yZW1vdmVDbGFzcygnYzRnLWNsb3NlJykuYWRkQ2xhc3MoJ2M0Zy1vcGVuJyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNjb3BlLm9wZW4oKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBsZXQgbWFwQ29udHJvbGxlciA9IHByb3BzLm1hcENvbnRyb2xsZXI7XG4gICAgbGV0IGNvbnRyb2wgPSBuZXcgQ29udHJvbCh7ZWxlbWVudDogZWxlbWVudCwgdGFyZ2V0OiBwcm9wcy50YXJnZXR9KTtcbiAgICBtYXBDb250cm9sbGVyLm1hcHNDb250cm9scy5jb250cm9scy5tZWFzdXJldG9vbHMgPSBjb250cm9sO1xuICAgIG1hcENvbnRyb2xsZXIubWFwLmFkZENvbnRyb2woY29udHJvbCk7XG4gICAgdGhpcy5jbG9zZSA9IHRoaXMuY2xvc2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9wZW4gPSB0aGlzLm9wZW4uYmluZCh0aGlzKTtcbiAgICB0aGlzLmFkZE1lYXN1cmVkRmVhdHVyZSA9IHRoaXMuYWRkTWVhc3VyZWRGZWF0dXJlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5tb2RpZnlNZWFzdXJlZEZlYXR1cmUgPSB0aGlzLm1vZGlmeU1lYXN1cmVkRmVhdHVyZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMucmVtb3ZlTWVhc3VyZWRGZWF0dXJlID0gdGhpcy5yZW1vdmVNZWFzdXJlZEZlYXR1cmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmluY3JlbWVudEZlYXR1cmVJZCA9IHRoaXMuaW5jcmVtZW50RmVhdHVyZUlkLmJpbmQodGhpcyk7XG4gICAgdGhpcy5tb2RlcyA9IFtcInNlbGVjdFwiLCBcImxpbmVcIiwgXCJwb2x5Z29uXCIsIFwiY2lyY2xlXCIsIFwiZnJlZWhhbmRcIl07XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgb3BlbjogcHJvcHMub3BlbiB8fCBmYWxzZSxcbiAgICAgIGN1cnJlbnRNb2RlOiBcInNlbGVjdFwiLFxuICAgICAgY29udHJvbDogY29udHJvbCxcbiAgICAgIG1lYXN1cmVkRmVhdHVyZXM6IFtdLFxuICAgICAgZmVhdHVyZUlkQ3RyOiAwXG4gICAgfTtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgbGV0IGFyclRvb2x0aXBzID0ge1xuICAgICAgXCJzZWxlY3RcIjogdGhpcy5sYW5nQ29uc3RhbnRzLk1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfU0VMRUNULFxuICAgICAgXCJsaW5lXCI6IHRoaXMubGFuZ0NvbnN0YW50cy5NRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfTElORVNUUklORyxcbiAgICAgIFwicG9seWdvblwiOiB0aGlzLmxhbmdDb25zdGFudHMuTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX1BPTFlHT04sXG4gICAgICBcImNpcmNsZVwiOiB0aGlzLmxhbmdDb25zdGFudHMuTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX0NJUkNMRSxcbiAgICAgIFwiZnJlZWhhbmRcIjogdGhpcy5sYW5nQ29uc3RhbnRzLk1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19GUkVFSEFORFxuICAgIH07XG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1tZWFzdXJldG9vbHMtd3JhcHBlclwifT5cbiAgICAgICAgPFRpdGxlYmFyIHdyYXBwZXJDbGFzcz17XCJjNGctbWVhc3VyZXRvb2xzLWhlYWRlclwifSBoZWFkZXJDbGFzcz17XCJjNGctbWVhc3VyZXRvb2xzLWhlYWRsaW5lXCJ9IGhpZGVDb250YWluZXI9e1wiLmM0Zy1tZWFzdXJldG9vbHMtY29udGFpbmVyXCJ9XG4gICAgICAgICAgICAgICAgICBoZWFkZXI9e3RoaXMubGFuZ0NvbnN0YW50cy5NRUFTVVJFVE9PTFN9IGNsb3NlQnRuQ2xhc3M9e1wiYzRnLXRpdGxlYmFyLWNsb3NlXCJ9IGNsb3NlQnRuQ2I9e3RoaXMuY2xvc2V9IGNsb3NlQnRuVGl0bGU9e3RoaXMubGFuZ0NvbnN0YW50cy5DTE9TRX0+XG4gICAgICAgIDwvVGl0bGViYXI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1tZWFzdXJldG9vbHMtbW9kZS1zd2l0Y2hlclwifT5cbiAgICAgICAgICB7dGhpcy5tb2Rlcy5tYXAoZnVuY3Rpb24oZWxlbWVudCwgaW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiA8YnV0dG9uIGtleT17aW5kZXh9IGNsYXNzTmFtZT17XCJjNGctbWVhc3VyZS1cIiArIGVsZW1lbnQgKyBcIiBcIiArIChlbGVtZW50ID09PSBzY29wZS5zdGF0ZS5jdXJyZW50TW9kZSA/IFwiYzRnLWFjdGl2ZVwiIDogXCJjNGctaW5hY3RpdmVcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlVXA9eygpID0+IHNjb3BlLnNldFN0YXRlKHtjdXJyZW50TW9kZTogZWxlbWVudH0pfSB0aXRsZT17YXJyVG9vbHRpcHNbZWxlbWVudF19Lz47XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8TWVhc3VyZXRvb2xzVmlldyBtb2RlPXtcInNlbGVjdFwifSBtZWFzdXJlVG9vbHM9e3RoaXN9IGFjdGl2ZT17dGhpcy5zdGF0ZS5jdXJyZW50TW9kZSA9PT0gXCJzZWxlY3RcIiAmJiB0aGlzLnN0YXRlLm9wZW59IGZlYXR1cmVJZD17dGhpcy5zdGF0ZS5mZWF0dXJlSWRDdHJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmc9e3RoaXMubGFuZ0NvbnN0YW50c30gYWRkRmVhdHVyZT17dGhpcy5hZGRNZWFzdXJlZEZlYXR1cmV9IGZlYXR1cmVzPXt0aGlzLnN0YXRlLm1lYXN1cmVkRmVhdHVyZXN9IGluY3JGZWF0SWQ9e3RoaXMuaW5jcmVtZW50RmVhdHVyZUlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RpZnlGZWF0dXJlPXt0aGlzLm1vZGlmeU1lYXN1cmVkRmVhdHVyZX0gbWFwQ29udHJvbGxlcj17dGhpcy5wcm9wcy5tYXBDb250cm9sbGVyfSByZW1vdmVGZWF0dXJlPXt0aGlzLnJlbW92ZU1lYXN1cmVkRmVhdHVyZX0vPlxuICAgICAgICA8TWVhc3VyZXRvb2xzVmlldyBtb2RlPXtcImxpbmVcIn0gbWVhc3VyZVRvb2xzPXt0aGlzfSBhY3RpdmU9e3RoaXMuc3RhdGUuY3VycmVudE1vZGUgPT09IFwibGluZVwiICYmIHRoaXMuc3RhdGUub3Blbn0gZmVhdHVyZUlkPXt0aGlzLnN0YXRlLmZlYXR1cmVJZEN0cn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFuZz17dGhpcy5sYW5nQ29uc3RhbnRzfSBhZGRGZWF0dXJlPXt0aGlzLmFkZE1lYXN1cmVkRmVhdHVyZX0gZmVhdHVyZXM9e3RoaXMuc3RhdGUubWVhc3VyZWRGZWF0dXJlc30gaW5jckZlYXRJZD17dGhpcy5pbmNyZW1lbnRGZWF0dXJlSWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmeUZlYXR1cmU9e3RoaXMubW9kaWZ5TWVhc3VyZWRGZWF0dXJlfSBtYXBDb250cm9sbGVyPXt0aGlzLnByb3BzLm1hcENvbnRyb2xsZXJ9IHJlbW92ZUZlYXR1cmU9e3RoaXMucmVtb3ZlTWVhc3VyZWRGZWF0dXJlfS8+XG4gICAgICAgIDxNZWFzdXJldG9vbHNWaWV3IG1vZGU9e1wicG9seWdvblwifSBtZWFzdXJlVG9vbHM9e3RoaXN9IGFjdGl2ZT17dGhpcy5zdGF0ZS5jdXJyZW50TW9kZSA9PT0gXCJwb2x5Z29uXCIgJiYgdGhpcy5zdGF0ZS5vcGVufSBmZWF0dXJlSWQ9e3RoaXMuc3RhdGUuZmVhdHVyZUlkQ3RyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYW5nPXt0aGlzLmxhbmdDb25zdGFudHN9IGFkZEZlYXR1cmU9e3RoaXMuYWRkTWVhc3VyZWRGZWF0dXJlfSBmZWF0dXJlcz17dGhpcy5zdGF0ZS5tZWFzdXJlZEZlYXR1cmVzfSBpbmNyRmVhdElkPXt0aGlzLmluY3JlbWVudEZlYXR1cmVJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZ5RmVhdHVyZT17dGhpcy5tb2RpZnlNZWFzdXJlZEZlYXR1cmV9IG1hcENvbnRyb2xsZXI9e3RoaXMucHJvcHMubWFwQ29udHJvbGxlcn0gcmVtb3ZlRmVhdHVyZT17dGhpcy5yZW1vdmVNZWFzdXJlZEZlYXR1cmV9Lz5cbiAgICAgICAgPE1lYXN1cmV0b29sc1ZpZXcgbW9kZT17XCJjaXJjbGVcIn0gbWVhc3VyZVRvb2xzPXt0aGlzfSBhY3RpdmU9e3RoaXMuc3RhdGUuY3VycmVudE1vZGUgPT09IFwiY2lyY2xlXCIgJiYgdGhpcy5zdGF0ZS5vcGVufSBmZWF0dXJlSWQ9e3RoaXMuc3RhdGUuZmVhdHVyZUlkQ3RyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYW5nPXt0aGlzLmxhbmdDb25zdGFudHN9IGFkZEZlYXR1cmU9e3RoaXMuYWRkTWVhc3VyZWRGZWF0dXJlfSBmZWF0dXJlcz17dGhpcy5zdGF0ZS5tZWFzdXJlZEZlYXR1cmVzfSBpbmNyRmVhdElkPXt0aGlzLmluY3JlbWVudEZlYXR1cmVJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZ5RmVhdHVyZT17dGhpcy5tb2RpZnlNZWFzdXJlZEZlYXR1cmV9IG1hcENvbnRyb2xsZXI9e3RoaXMucHJvcHMubWFwQ29udHJvbGxlcn0gcmVtb3ZlRmVhdHVyZT17dGhpcy5yZW1vdmVNZWFzdXJlZEZlYXR1cmV9Lz5cbiAgICAgICAgPE1lYXN1cmV0b29sc1ZpZXcgbW9kZT17XCJmcmVlaGFuZFwifSBtZWFzdXJlVG9vbHM9e3RoaXN9IGFjdGl2ZT17dGhpcy5zdGF0ZS5jdXJyZW50TW9kZSA9PT0gXCJmcmVlaGFuZFwiICYmIHRoaXMuc3RhdGUub3Blbn0gZmVhdHVyZUlkPXt0aGlzLnN0YXRlLmZlYXR1cmVJZEN0cn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFuZz17dGhpcy5sYW5nQ29uc3RhbnRzfSBhZGRGZWF0dXJlPXt0aGlzLmFkZE1lYXN1cmVkRmVhdHVyZX0gZmVhdHVyZXM9e3RoaXMuc3RhdGUubWVhc3VyZWRGZWF0dXJlc30gaW5jckZlYXRJZD17dGhpcy5pbmNyZW1lbnRGZWF0dXJlSWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmeUZlYXR1cmU9e3RoaXMubW9kaWZ5TWVhc3VyZWRGZWF0dXJlfSBtYXBDb250cm9sbGVyPXt0aGlzLnByb3BzLm1hcENvbnRyb2xsZXJ9IHJlbW92ZUZlYXR1cmU9e3RoaXMucmVtb3ZlTWVhc3VyZWRGZWF0dXJlfS8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgaW5jcmVtZW50RmVhdHVyZUlkKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe2ZlYXR1cmVJZEN0cjogdGhpcy5zdGF0ZS5mZWF0dXJlSWRDdHIgKyAxfSk7XG4gIH1cblxuICBhZGRNZWFzdXJlZEZlYXR1cmUoZmVhdHVyZSkge1xuICAgIGxldCBmZWF0dXJlcyA9IHRoaXMuc3RhdGUubWVhc3VyZWRGZWF0dXJlcztcbiAgICBmZWF0dXJlcy5wdXNoKGZlYXR1cmUpO1xuICAgIHRoaXMuc2V0U3RhdGUoe21lYXN1cmVkRmVhdHVyZXM6IGZlYXR1cmVzfSk7XG4gIH1cblxuICBtb2RpZnlNZWFzdXJlZEZlYXR1cmUobmV3RmVhdHVyZSwgaWQpIHtcbiAgICBsZXQgZmVhdHVyZXMgPSB0aGlzLnN0YXRlLm1lYXN1cmVkRmVhdHVyZXM7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmZWF0dXJlcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGZlYXR1cmVzW2ldLmlkID09PSBpZCkge1xuICAgICAgICBmZWF0dXJlc1tpXSA9IG5ld0ZlYXR1cmU7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe21lYXN1cmVkRmVhdHVyZXM6IGZlYXR1cmVzfSk7XG4gIH1cblxuICByZW1vdmVNZWFzdXJlZEZlYXR1cmUoaWQpIHtcbiAgICBsZXQgZmVhdHVyZXMgPSB0aGlzLnN0YXRlLm1lYXN1cmVkRmVhdHVyZXM7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmZWF0dXJlcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGZlYXR1cmVzW2ldLmlkID09PSBpZCkge1xuICAgICAgICBmZWF0dXJlcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHttZWFzdXJlZEZlYXR1cmVzOiBmZWF0dXJlc30pO1xuICB9XG5cbiAgc2V0Q3VycmVudE1vZGUobmV3TW9kZSkge1xuICAgIGlmICh0aGlzLm1vZGVzLmluY2x1ZGVzKG5ld01vZGUpKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtjdXJyZW50TW9kZTogbmV3TW9kZX0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJUaGUgc3BlY2lmaWVkIG1vZGUgaXMgbm90IGF2YWlsYWJsZVwiKTtcbiAgICB9XG4gIH1cblxuICBvcGVuKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe29wZW46IHRydWV9KTtcbiAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuc2V0T3BlbkNvbXBvbmVudCh0aGlzKTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe29wZW46IGZhbHNlfSk7XG4gIH1cblxuICAvKipcbiAgICogRXhlY3V0ZWQgd2hlbiB0aGUgcGFuZWwgd2lsbCBiZSBvcGVuZWQgZm9yIHRoZSBmaXJzdCB0aW1lLlxuICAgKiBbaW5pdCBkZXNjcmlwdGlvbl1cbiAgICpcbiAgICogQHJldHVybiAge2Jvb2xlYW59ICBSZXR1cm5zIHx0cnVlfCBvbiBzdWNjZXNzXG4gICAqL1xuICBpbml0KCkge1xuICAgIC8vIEFkZCBtZWFzdXJlIGxheWVyc1xuICAgIHRoaXMubWVhc3VyZUxpbmVMYXllciA9IG5ldyBWZWN0b3Ioe3NvdXJjZTogbmV3IFZlY3RvclNvdXJjZSgpfSk7XG4gICAgdGhpcy5tZWFzdXJlUG9seWdvbkxheWVyID0gbmV3IFZlY3Rvcih7c291cmNlOiBuZXcgVmVjdG9yU291cmNlKCl9KTtcbiAgICB0aGlzLm1lYXN1cmVDaXJjbGVMYXllciA9IG5ldyBWZWN0b3Ioe3NvdXJjZTogbmV3IFZlY3RvclNvdXJjZSgpfSk7XG4gICAgdGhpcy5tZWFzdXJlRnJlZWhhbmRMYXllciA9IG5ldyBWZWN0b3Ioe3NvdXJjZTogbmV3IFZlY3RvclNvdXJjZSgpfSk7XG5cbiAgICB0aGlzLm1lYXN1cmVMYXllckdyb3VwID0gbmV3IEdyb3VwKHtcbiAgICAgIGxheWVyczogbmV3IENvbGxlY3Rpb24oW1xuICAgICAgICB0aGlzLm1lYXN1cmVGcmVlaGFuZExheWVyLFxuICAgICAgICB0aGlzLm1lYXN1cmVDaXJjbGVMYXllcixcbiAgICAgICAgdGhpcy5tZWFzdXJlUG9seWdvbkxheWVyLFxuICAgICAgICB0aGlzLm1lYXN1cmVMaW5lTGF5ZXIsXG4gICAgICBdKSxcbiAgICAgIHZpc2libGU6IHRydWVcbiAgICB9KTtcbiAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLmFkZExheWVyKHRoaXMubWVhc3VyZUxheWVyR3JvdXApO1xuXG4gICAgLy8gdGhpcy5zcGlubmVyLmhpZGUoKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSAvLyBlbmQgb2YgXCJpbml0KClcIlxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSwgc25hcHNob3QpIHtcbiAgICBpZiAocHJldlN0YXRlLm9wZW4gJiYgIXRoaXMuc3RhdGUub3Blbikge1xuICAgICAgLy8gbWVhc3VyZXRvb2xzIHdlcmUgY2xvc2VkXG4gICAgICBqUXVlcnkodGhpcy5zdGF0ZS5jb250cm9sLmVsZW1lbnQpLnJlbW92ZUNsYXNzKFwiYzRnLW9wZW5cIikuYWRkQ2xhc3MoXCJjNGctY2xvc2VcIik7XG4gICAgICBqUXVlcnkoXCIuYzRnLW1lYXN1cmV0b29scy1jb250YWluZXJcIikucmVtb3ZlQ2xhc3MoXCJjNGctb3BlblwiKS5hZGRDbGFzcyhcImM0Zy1jbG9zZVwiKTtcbiAgICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5tYXAucmVtb3ZlTGF5ZXIodGhpcy5tZWFzdXJlTGF5ZXJHcm91cCk7XG4gICAgICB0aGlzLnJlbW92ZVRvb2x0aXBzKCk7XG4gICAgICB0aGlzLnJlbW92ZWRPbmNlID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKCFwcmV2U3RhdGUub3BlbiAmJiB0aGlzLnN0YXRlLm9wZW4pIHtcbiAgICAgIGpRdWVyeSh0aGlzLnN0YXRlLmNvbnRyb2wuZWxlbWVudCkuYWRkQ2xhc3MoXCJjNGctb3BlblwiKS5yZW1vdmVDbGFzcyhcImM0Zy1jbG9zZVwiKTtcbiAgICAgIGpRdWVyeShcIi5jNGctbWVhc3VyZXRvb2xzLWNvbnRhaW5lclwiKS5hZGRDbGFzcyhcImM0Zy1vcGVuXCIpLnJlbW92ZUNsYXNzKFwiYzRnLWNsb3NlXCIpO1xuICAgICAgaWYgKHRoaXMucmVtb3ZlZE9uY2UpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLmFkZExheWVyKHRoaXMubWVhc3VyZUxheWVyR3JvdXApO1xuICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuYWRkVG9vbHRpcHMoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmNhY2hpbmcgJiYgIXRoaXMuc3RhdGUub3Blbikge1xuICAgICAgbGV0IHBhbmVsVmFsID0gdXRpbHMuZ2V0VmFsdWUoJ3BhbmVsJyk7XG4gICAgICBpZiAocGFuZWxWYWwgPT09IHRoaXMuY29uc3RydWN0b3IubmFtZSkge1xuICAgICAgICB1dGlscy5zdG9yZVZhbHVlKCdwYW5lbCcsIFwiXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlbW92ZVRvb2x0aXBzKCkge1xuICAgIGxldCBhcnJMYXllcnMgPSB0aGlzLm1lYXN1cmVMYXllckdyb3VwLmdldExheWVyc0FycmF5KCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJMYXllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBsYXllciA9IGFyckxheWVyc1tpXTtcbiAgICAgIGxldCBhcnJGZWF0dXJlcyA9IGxheWVyLmdldFNvdXJjZSgpLmdldEZlYXR1cmVzKCk7XG4gICAgICBpZiAoYXJyRmVhdHVyZXMpIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBhcnJGZWF0dXJlcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGxldCBmZWF0dXJlID0gYXJyRmVhdHVyZXNbal07XG4gICAgICAgICAgZmVhdHVyZS5nZXQoJ3Rvb2x0aXAnKS5oaWRlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhZGRUb29sdGlwcygpIHtcbiAgICBsZXQgYXJyTGF5ZXJzID0gdGhpcy5tZWFzdXJlTGF5ZXJHcm91cC5nZXRMYXllcnNBcnJheSgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyTGF5ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgbGF5ZXIgPSBhcnJMYXllcnNbaV07XG4gICAgICBsZXQgYXJyRmVhdHVyZXMgPSBsYXllci5nZXRTb3VyY2UoKS5nZXRGZWF0dXJlcygpO1xuICAgICAgaWYgKGFyckZlYXR1cmVzKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYXJyRmVhdHVyZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBsZXQgZmVhdHVyZSA9IGFyckZlYXR1cmVzW2pdO1xuICAgICAgICAgIGZlYXR1cmUuZ2V0KCd0b29sdGlwJykuc2hvdygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbn0iXSwic291cmNlUm9vdCI6IiJ9
=======
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1tZWFzdXJldG9vbHMtZmVhdHVyZS5qc3giLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctbWVhc3VyZXRvb2xzLXZpZXcuanN4Iiwid2VicGFjazovL21hcHNidW5kbGUvLi9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLW1lYXN1cmV0b29scy5qc3giXSwibmFtZXMiOlsiTWVhc3VyZWRGZWF0dXJlIiwicHJvcHMiLCJjaGFuZ2VGZWF0dXJlTGFiZWwiLCJiaW5kIiwic2NvcGUiLCJpZHgiLCJsYWJlbCIsIk9iamVjdCIsImtleXMiLCJtZWFzdXJlZFZhbHVlcyIsIm1hcCIsImVsZW1lbnQiLCJpbmRleCIsIm9iaiIsImhyVmFsdWUiLCJjb252ZXJ0TWV0ZXJzVG9LbSIsInZhbHVlIiwiY29udmVydFNxdWFyZU1ldGVyc1RvU3F1YXJlS20iLCJkZXNjcmlwdGlvbiIsImZlYXR1cmUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJtb2RpZnlGZWF0dXJlIiwiaWQiLCJkaXN0YW5jZSIsImttVmFsdWUiLCJhcmVhIiwiQ29tcG9uZW50IiwiTWVhc3VyZXRvb2xzVmlldyIsImxhbmdDb25zdGFudHMiLCJtYXBDb250cm9sbGVyIiwiZGF0YSIsImhlYWRsaW5lcyIsIk1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfU0VMRUNUIiwiTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX0xJTkVTVFJJTkciLCJNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfUE9MWUdPTiIsIk1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19DSVJDTEUiLCJNRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfRlJFRUhBTkQiLCJmZWF0dXJlSWRDdHIiLCJmZWF0dXJlSWQiLCJ1cGRhdGVGdW5jdGlvbnMiLCJjcmVhdGVNZWFzdXJlRnVuY3Rpb25zIiwiYWN0aXZlIiwibW9kZSIsImxhbmciLCJNRUFTVVJFVE9PTFNfSU5GTyIsIk1FQVNVUkVUT09MU19JTkZPX0FERElUSU9OQUwiLCJmZWF0dXJlcyIsImZlYXQiLCJhcnJGZWF0dXJlcyIsImkiLCJsZW5ndGgiLCJvbEZlYXR1cmUiLCJzZXQiLCJ1cGRhdGVNZWFzdXJlRmVhdHVyZSIsImluaXRGdW5jdGlvbiIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsInNuYXBzaG90IiwiYWN0aXZhdGVGdW5jdGlvbiIsImRlYWN0aXZhdGVGdW5jdGlvbiIsIm1hcEhvdmVyIiwiZGVhY3RpdmF0ZSIsIm1lYXN1cmVUb29scyIsInN0YXRlIiwib3BlbiIsImFjdGl2YXRlIiwic291cmNlIiwib2xUeXBlIiwiaW50ZXJhY3Rpb24iLCJmZWF0dXJlSWRDb3VudCIsImFjdGl2ZVNrZXRjaCIsImFjdGl2ZVRvb2x0aXAiLCJhZGRNZWFzdXJlRmVhdHVyZSIsImdldFZhbHVlT2ZHZW9tZXRyeSIsImdldExlbmd0aE9mTWVhc3VyZSIsInJlbW92ZU1lYXN1cmVGZWF0dXJlIiwidG9Mb3dlckNhc2UiLCJtZWFzdXJlRnJlZWhhbmRMYXllciIsImdldFNvdXJjZSIsIm1lYXN1cmVDaXJjbGVMYXllciIsIm1lYXN1cmVQb2x5Z29uTGF5ZXIiLCJtZWFzdXJlTGluZUxheWVyIiwiQ29sbGVjdGlvbiIsIkRyYXciLCJ0eXBlIiwiZnJlZWhhbmQiLCJpbnB1dEVsZW1lbnQiLCJzdHJMYWJlbCIsInN0clR5cGUiLCJtZWFzdXJlQXJlYSIsIm1lYXN1cmVSYWRpdXMiLCJtZWFzdXJlTGluZSIsImdldEdlb21ldHJ5IiwiZ2V0VHlwZSIsIkxFTkdUSCIsIkxJTkUiLCJQRVJJTUVURVIiLCJQT0xZR09OIiwiUkFESVVTIiwiQ0lSQ0xFIiwiRlJFRUhBTkQiLCJtZWFzdXJlZEZlYXR1cmUiLCJhZGRGZWF0dXJlIiwiaW5jckZlYXRJZCIsImZlYXR1cmVUb29sdGlwIiwibmV3Q29udGVudCIsIm5hbWUiLCJyYWRpdXMiLCJnZXQiLCJ1dGlscyIsIm1lYXN1cmVHZW9tZXRyeSIsInJhd1ZhbHVlIiwic2V0Q29udGVudCIsImh0bWxWYWx1ZSIsIm5ld0ZlYXR1cmUiLCJsaW5lIiwicmVtb3ZlRmVhdHVyZSIsImxlbmciLCJ2YWwiLCJ2YWx1ZW51bWIiLCJtYXRjaCIsImpvaW4iLCJsZW5ndGhudW1iIiwib24iLCJldmVudCIsIlRvb2x0aXBQb3BVcCIsInBvc2l0aW9uIiwiY29vcmRpbmF0ZSIsImhvcml6b250YWwiLCJjbG9zZWFibGUiLCJjbG9zZUZ1bmN0aW9uIiwic2V0UG9zaXRpb24iLCJjbGVhciIsImFkZEludGVyYWN0aW9uIiwiZmluaXNoRHJhd2luZyIsImlnbm9yZSIsInJlbW92ZUludGVyYWN0aW9uIiwiTWVhc3VyZXRvb2xzIiwiY3JlYXRlRWxlbWVudCIsImJ1dHRvbiIsInRpdGxlIiwiQ1RSTF9NRUFTVVJFVE9PTFMiLCJjbGFzc05hbWUiLCJleHRlcm5hbCIsImFwcGVuZENoaWxkIiwialF1ZXJ5IiwiaGlkZGVuIiwibWVhc3VyZXRvb2xzQ29udGFpbmVyIiwiaW5jbHVkZXMiLCJjbG9zZSIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJjb250cm9sIiwiQ29udHJvbCIsInRhcmdldCIsIm1hcHNDb250cm9scyIsImNvbnRyb2xzIiwibWVhc3VyZXRvb2xzIiwiYWRkQ29udHJvbCIsImFkZE1lYXN1cmVkRmVhdHVyZSIsIm1vZGlmeU1lYXN1cmVkRmVhdHVyZSIsInJlbW92ZU1lYXN1cmVkRmVhdHVyZSIsImluY3JlbWVudEZlYXR1cmVJZCIsIm1vZGVzIiwiY3VycmVudE1vZGUiLCJtZWFzdXJlZEZlYXR1cmVzIiwiaW5pdCIsImFyclRvb2x0aXBzIiwiTUVBU1VSRVRPT0xTIiwiQ0xPU0UiLCJzZXRTdGF0ZSIsInB1c2giLCJzcGxpY2UiLCJuZXdNb2RlIiwiY29uc29sZSIsIndhcm4iLCJzZXRPcGVuQ29tcG9uZW50IiwiVmVjdG9yIiwiVmVjdG9yU291cmNlIiwibWVhc3VyZUxheWVyR3JvdXAiLCJHcm91cCIsImxheWVycyIsInZpc2libGUiLCJhZGRMYXllciIsInJlbW92ZUxheWVyIiwicmVtb3ZlVG9vbHRpcHMiLCJyZW1vdmVkT25jZSIsImUiLCJhZGRUb29sdGlwcyIsImNhY2hpbmciLCJwYW5lbFZhbCIsImdldFZhbHVlIiwiY29uc3RydWN0b3IiLCJzdG9yZVZhbHVlIiwiYXJyTGF5ZXJzIiwiZ2V0TGF5ZXJzQXJyYXkiLCJsYXllciIsImdldEZlYXR1cmVzIiwiaiIsImhpZGUiLCJzaG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNBOzs7Ozs7Ozs7O0lBRWFBLGU7Ozs7O0FBRVgsMkJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTtBQUNqQiw4QkFBTUEsS0FBTjtBQUVBLFVBQUtDLGtCQUFMLEdBQTBCLE1BQUtBLGtCQUFMLENBQXdCQyxJQUF4QixnREFBMUI7QUFIaUI7QUFJbEI7Ozs7V0FFRCxrQkFBUztBQUNQLFVBQU1DLEtBQUssR0FBRyxJQUFkO0FBQ0EsMEJBQ0UsMERBQ0UsMERBQ0U7QUFBTyxlQUFPLEVBQUUsb0JBQW9CLEtBQUtILEtBQUwsQ0FBV0k7QUFBL0Msa0JBREYsZUFFRTtBQUFPLFlBQUksRUFBQyxNQUFaO0FBQW1CLFlBQUksRUFBRSxvQkFBb0IsS0FBS0osS0FBTCxDQUFXSSxHQUF4RDtBQUE2RCxvQkFBWSxFQUFFLEtBQUtKLEtBQUwsQ0FBV0ssS0FBdEY7QUFDUSxlQUFPLEVBQUUsS0FBS0o7QUFEdEIsUUFGRixDQURGLEVBTUdLLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLEtBQUtQLEtBQUwsQ0FBV1EsY0FBdkIsRUFBdUNDLEdBQXZDLENBQTJDLFVBQVNDLE9BQVQsRUFBa0JDLEtBQWxCLEVBQXlCO0FBQ25FLFlBQUlDLEdBQUcsR0FBR1QsS0FBSyxDQUFDSCxLQUFOLENBQVlRLGNBQVosQ0FBMkJFLE9BQTNCLENBQVY7QUFDQSxZQUFJRyxPQUFPLEdBQUcs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LEdBQUdpSixTQUFTLENBQUNoSixNQUE5QixFQUFzQ0QsQ0FBQyxFQUF2QyxFQUEyQztBQUN6QyxZQUFJbUosS0FBSyxHQUFHRixTQUFTLENBQUNqSixDQUFELENBQXJCO0FBQ0EsWUFBSUQsV0FBVyxHQUFHb0osS0FBSyxDQUFDdEgsU0FBTixHQUFrQnVILFdBQWxCLEVBQWxCOztBQUNBLFlBQUlySixXQUFKLEVBQWlCO0FBQ2YsZUFBSyxJQUFJc0osQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR3RKLFdBQVcsQ0FBQ0UsTUFBaEMsRUFBd0NvSixDQUFDLEVBQXpDLEVBQTZDO0FBQzNDLGdCQUFJcEwsT0FBTyxHQUFHOEIsV0FBVyxDQUFDc0osQ0FBRCxDQUF6QjtBQUNBcEwsbUJBQU8sQ0FBQzBGLEdBQVIsQ0FBWSxTQUFaLEVBQXVCNEYsSUFBdkI7QUFDRDtBQUNGO0FBQ0Y7QUFDRjs7O0VBbE91QzlLLGdCIiwiZmlsZSI6IlJlc291cmNlc19wdWJsaWNfanNfY29tcG9uZW50c19jNGctbWVhc3VyZXRvb2xzX2pzeC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA4XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyMSwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBjbGFzcyBNZWFzdXJlZEZlYXR1cmUgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5jaGFuZ2VGZWF0dXJlTGFiZWwgPSB0aGlzLmNoYW5nZUZlYXR1cmVMYWJlbC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17XCJtZWFzdXJlRWxlbWVudF9cIiArIHRoaXMucHJvcHMuaWR4fT5OYW1lOiA8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9e1wibWVhc3VyZUVsZW1lbnRfXCIgKyB0aGlzLnByb3BzLmlkeH0gZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgb25JbnB1dD17dGhpcy5jaGFuZ2VGZWF0dXJlTGFiZWx9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtPYmplY3Qua2V5cyh0aGlzLnByb3BzLm1lYXN1cmVkVmFsdWVzKS5tYXAoZnVuY3Rpb24oZWxlbWVudCwgaW5kZXgpIHtcbiAgICAgICAgICBsZXQgb2JqID0gc2NvcGUucHJvcHMubWVhc3VyZWRWYWx1ZXNbZWxlbWVudF07XG4gICAgICAgICAgbGV0IGhyVmFsdWUgPSAwLjA7XG4gICAgICAgICAgc3dpdGNoIChlbGVtZW50KSB7XG4gICAgICAgICAgICBjYXNlIFwibGluZVwiOlxuICAgICAgICAgICAgY2FzZSBcInJhZGl1c1wiOlxuICAgICAgICAgICAgICBoclZhbHVlID0gc2NvcGUuY29udmVydE1ldGVyc1RvS20ob2JqLnZhbHVlKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYXJlYVwiOlxuICAgICAgICAgICAgICBoclZhbHVlID0gc2NvcGUuY29udmVydFNxdWFyZU1ldGVyc1RvU3F1YXJlS20ob2JqLnZhbHVlKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiAoPHAga2V5PXtpbmRleH0+XG4gICAgICAgICAgICA8c3Ryb25nPntvYmouZGVzY3JpcHRpb259PC9zdHJvbmc+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e1wiYzRnLW1lYXN1cmUtdmFsdWUtXCIgKyBzY29wZS5wcm9wcy5pZHh9PntoclZhbHVlfTwvc3Bhbj5cbiAgICAgICAgICA8L3A+KVxuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBjaGFuZ2VGZWF0dXJlTGFiZWwoKSB7XG4gICAgbGV0IGZlYXR1cmUgPSB0aGlzLnByb3BzLmZlYXR1cmU7XG4gICAgZmVhdHVyZS5sYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJtZWFzdXJlRWxlbWVudF8nICsgdGhpcy5wcm9wcy5pZHggKyAnXCJdJykudmFsdWU7XG4gICAgdGhpcy5wcm9wcy5tb2RpZnlGZWF0dXJlKGZlYXR1cmUsIGZlYXR1cmUuaWQpO1xuICB9XG5cbiAgY29udmVydE1ldGVyc1RvS20oZGlzdGFuY2UpIHtcbiAgICBsZXQga21WYWx1ZSA9IGRpc3RhbmNlIC8gMTAwMDtcbiAgICBpZiAoa21WYWx1ZSA+IDApIHtcbiAgICAgIHJldHVybiBrbVZhbHVlICsgXCIga21cIjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGRpc3RhbmNlICsgXCIgbVwiO1xuICAgIH1cbiAgfVxuXG4gIGNvbnZlcnRTcXVhcmVNZXRlcnNUb1NxdWFyZUttKGFyZWEpIHtcbiAgICBsZXQga21WYWx1ZSA9IGFyZWEgLyAxMDAwMDAwO1xuICAgIGlmIChrbVZhbHVlID4gMCkge1xuICAgICAgcmV0dXJuIGttVmFsdWUgKyBcIiBrbcKyXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBhcmVhICsgXCIgbcKyXCI7XG4gICAgfVxuICB9XG5cbn0iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA4XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyMSwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2dldExhbmd1YWdlfSBmcm9tIFwiLi4vYzRnLW1hcHMtaTE4blwiO1xuaW1wb3J0IHtDb2xsZWN0aW9ufSBmcm9tIFwib2xcIjtcbmltcG9ydCB7RHJhd30gZnJvbSBcIm9sL2ludGVyYWN0aW9uXCI7XG5pbXBvcnQge3V0aWxzfSBmcm9tIFwiLi4vYzRnLW1hcHMtdXRpbHNcIjtcbmltcG9ydCB7VG9vbHRpcFBvcFVwfSBmcm9tIFwiLi4vYzRnLW1hcHMtbWlzYy10b29sdGlwcG9wdXBcIjtcbmltcG9ydCB7TWVhc3VyZWRGZWF0dXJlfSBmcm9tIFwiLi9jNGctbWVhc3VyZXRvb2xzLWZlYXR1cmUuanN4XCI7XG5cbmV4cG9ydCBjbGFzcyBNZWFzdXJldG9vbHNWaWV3IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIGxldCBsYW5nQ29uc3RhbnRzID0gZ2V0TGFuZ3VhZ2UodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEpO1xuXG4gICAgdGhpcy5oZWFkbGluZXMgPSB7XG4gICAgICBcInNlbGVjdFwiOiBsYW5nQ29uc3RhbnRzLk1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfU0VMRUNULFxuICAgICAgXCJsaW5lXCI6IGxhbmdDb25zdGFudHMuTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX0xJTkVTVFJJTkcsXG4gICAgICBcInBvbHlnb25cIjogbGFuZ0NvbnN0YW50cy5NRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfUE9MWUdPTixcbiAgICAgIFwiY2lyY2xlXCI6IGxhbmdDb25zdGFudHMuTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX0NJUkNMRSxcbiAgICAgIFwiZnJlZWhhbmRcIjogbGFuZ0NvbnN0YW50cy5NRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfRlJFRUhBTkQsXG4gICAgfTtcbiAgICB0aGlzLmZlYXR1cmVJZEN0ciA9IHRoaXMucHJvcHMuZmVhdHVyZUlkO1xuICAgIHRoaXMudXBkYXRlRnVuY3Rpb25zID0gdGhpcy5jcmVhdGVNZWFzdXJlRnVuY3Rpb25zKCk7XG4gICAgdGhpcy5tb2RpZnlGZWF0dXJlID0gdGhpcy5tb2RpZnlGZWF0dXJlLmJpbmQodGhpcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGlmICh0aGlzLnByb3BzLmFjdGl2ZSkge1xuICAgICAgaWYgKHRoaXMucHJvcHMubW9kZSA9PT0gXCJzZWxlY3RcIikge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImM0Zy1tZWFzdXJldG9vbHMtY29udGVudFwifT5cbiAgICAgICAgICAgIDxwPnt0aGlzLnByb3BzLmxhbmcuTUVBU1VSRVRPT0xTX0lORk99PC9wPlxuICAgICAgICAgICAgPGJyLz48YnIvPlxuICAgICAgICAgICAgPHN1Yj57dGhpcy5wcm9wcy5sYW5nLk1FQVNVUkVUT09MU19JTkZPX0FERElUSU9OQUx9PC9zdWI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBtZWFzdXJlIHZpZXdcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjNGctbWVhc3VyZXRvb2xzLWNvbnRlbnRcIn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJjb250ZW50SGVhZGxpbmVcIn0+e3RoaXMuaGVhZGxpbmVzW3RoaXMucHJvcHMubW9kZV19PC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICB7T2JqZWN0LmtleXModGhpcy5wcm9wcy5mZWF0dXJlcykubWFwKGZ1bmN0aW9uKGVsZW1lbnQsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgbGV0IGZlYXQgPSBzY29wZS5wcm9wcy5mZWF0dXJlc1tlbGVtZW50XTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKDxNZWFzdXJlZEZlYXR1cmUga2V5PXtpbmRleH0gaWR4PXtpbmRleH0gbGFiZWw9e2ZlYXQubGFiZWx9IGZlYXR1cmU9e2ZlYXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lYXN1cmVkVmFsdWVzPXtmZWF0Lm1lYXN1cmVkVmFsdWVzfSBtb2RpZnlGZWF0dXJlPXtzY29wZS5tb2RpZnlGZWF0dXJlfS8+KTtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gbm90IGFjdGl2ZVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gIH1cblxuICBtb2RpZnlGZWF0dXJlKGZlYXR1cmUsIGlkKSB7XG4gICAgbGV0IGFyckZlYXR1cmVzID0gdGhpcy5wcm9wcy5mZWF0dXJlcztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyckZlYXR1cmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoYXJyRmVhdHVyZXNbaV0uaWQgPT09IGlkKSB7XG4gICAgICAgIGFyckZlYXR1cmVzW2ldLm9sRmVhdHVyZS5zZXQoJ2ZlYXR1cmVMYWJlbCcsIGZlYXR1cmUubGFiZWwpO1xuICAgICAgICB0aGlzLnVwZGF0ZU1lYXN1cmVGZWF0dXJlKGFyckZlYXR1cmVzW2ldLm9sRmVhdHVyZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnByb3BzLm1vZGlmeUZlYXR1cmUoZmVhdHVyZSwgaWQpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMubW9kZSAhPT0gXCJzZWxlY3RcIikge1xuICAgICAgdGhpcy51cGRhdGVGdW5jdGlvbnMuaW5pdEZ1bmN0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlLCBzbmFwc2hvdCkge1xuICAgIGlmICh0aGlzLnByb3BzLm1vZGUgIT09IFwic2VsZWN0XCIpIHtcbiAgICAgIGlmICghcHJldlByb3BzLmFjdGl2ZSAmJiB0aGlzLnByb3BzLmFjdGl2ZSkge1xuICAgICAgICB0aGlzLnVwZGF0ZUZ1bmN0aW9ucy5hY3RpdmF0ZUZ1bmN0aW9uKCk7XG4gICAgICB9XG4gICAgICBpZiAocHJldlByb3BzLmFjdGl2ZSAmJiAhdGhpcy5wcm9wcy5hY3RpdmUpIHtcbiAgICAgICAgdGhpcy51cGRhdGVGdW5jdGlvbnMuZGVhY3RpdmF0ZUZ1bmN0aW9uKCk7XG4gICAgICB9XG4gICAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIubWFwSG92ZXIuZGVhY3RpdmF0ZSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5tb2RlID09PSBcInNlbGVjdFwiIHx8ICF0aGlzLnByb3BzLm1lYXN1cmVUb29scy5zdGF0ZS5vcGVuKSB7XG4gICAgICB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIubWFwSG92ZXIuYWN0aXZhdGUoKTtcbiAgICB9XG4gICAgdGhpcy5mZWF0dXJlSWRDdHIgPSB0aGlzLnByb3BzLmZlYXR1cmVJZDtcbiAgfVxuXG4gIGNyZWF0ZU1lYXN1cmVGdW5jdGlvbnMoKSB7XG4gICAgbGV0IHNvdXJjZSwgZmVhdHVyZXMsIG9sVHlwZSwgaW50ZXJhY3Rpb247XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIHJldHVybiB7XG4gICAgICBpbml0RnVuY3Rpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBmZWF0dXJlSWRDb3VudCxcbiAgICAgICAgYWN0aXZlU2tldGNoLFxuICAgICAgICBhY3RpdmVUb29sdGlwLFxuICAgICAgICBhZGRNZWFzdXJlRmVhdHVyZSxcbiAgICAgICAgdXBkYXRlTWVhc3VyZUZlYXR1cmUsXG4gICAgICAgIGdldFZhbHVlT2ZHZW9tZXRyeSxcbiAgICAgICAgZ2V0TGVuZ3RoT2ZNZWFzdXJlLFxuICAgICAgICByZW1vdmVNZWFzdXJlRmVhdHVyZTtcblxuICAgICAgZmVhdHVyZUlkQ291bnQgPSBzY29wZS5mZWF0dXJlSWRDdHI7XG5cbiAgICAgIGlmIChzY29wZS5wcm9wcy5tb2RlLnRvTG93ZXJDYXNlKCkgPT09ICdmcmVlaGFuZCcpIHtcbiAgICAgICAgc291cmNlID0gc2NvcGUucHJvcHMubWVhc3VyZVRvb2xzLm1lYXN1cmVGcmVlaGFuZExheWVyLmdldFNvdXJjZSgpO1xuICAgICAgfSBlbHNlIGlmIChzY29wZS5wcm9wcy5tb2RlLnRvTG93ZXJDYXNlKCkgPT09ICdjaXJjbGUnKSB7XG4gICAgICAgIHNvdXJjZSA9IHNjb3BlLnByb3BzLm1lYXN1cmVUb29scy5tZWFzdXJlQ2lyY2xlTGF5ZXIuZ2V0U291cmNlKCk7XG4gICAgICB9IGVsc2UgaWYgKHNjb3BlLnByb3BzLm1vZGUudG9Mb3dlckNhc2UoKSA9PT0gJ3BvbHlnb24nKSB7XG4gICAgICAgIHNvdXJjZSA9IHNjb3BlLnByb3BzLm1lYXN1cmVUb29scy5tZWFzdXJlUG9seWdvbkxheWVyLmdldFNvdXJjZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc291cmNlID0gc2NvcGUucHJvcHMubWVhc3VyZVRvb2xzLm1lYXN1cmVMaW5lTGF5ZXIuZ2V0U291cmNlKCk7XG4gICAgICB9XG5cbiAgICAgIGZlYXR1cmVzID0gbmV3IENvbGxlY3Rpb24oKTtcbiAgICAgIGlmIChzY29wZS5wcm9wcy5tb2RlLnRvTG93ZXJDYXNlKCkgPT09IFwic2VsZWN0XCIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBzd2l0Y2ggKHNjb3BlLnByb3BzLm1vZGUpIHtcbiAgICAgICAgY2FzZSBcImxpbmVcIjpcbiAgICAgICAgICBvbFR5cGUgPSBcIkxpbmVTdHJpbmdcIjtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcInBvbHlnb25cIjpcbiAgICAgICAgICBvbFR5cGUgPSBcIlBvbHlnb25cIjtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImNpcmNsZVwiOlxuICAgICAgICAgIG9sVHlwZSA9IFwiQ2lyY2xlXCI7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJmcmVlaGFuZFwiOlxuICAgICAgICAgIG9sVHlwZSA9IFwiTGluZVN0cmluZ1wiO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBpbnRlcmFjdGlvbiA9IG5ldyBEcmF3KHtcbiAgICAgICAgZmVhdHVyZXM6IGZlYXR1cmVzLFxuICAgICAgICBzb3VyY2U6IHNvdXJjZSxcbiAgICAgICAgdHlwZTogb2xUeXBlLFxuICAgICAgICBmcmVlaGFuZDogc2NvcGUucHJvcHMubW9kZSA9PT0gJ2ZyZWVoYW5kJyxcbiAgICAgICAgLy8gQFRPRE86IHVzZSBjdXN0b20gc3R5bGU/IChCRS1vcHRpb24pXG4gICAgICAgIC8vIHN0eWxlOiB1c2UgZGVmYXVsdCBzdHlsZVxuICAgICAgfSk7XG5cbiAgICAgIGFkZE1lYXN1cmVGZWF0dXJlID0gZnVuY3Rpb24gKGZlYXR1cmUpIHtcbiAgICAgICAgdmFyIGlucHV0RWxlbWVudCxcbiAgICAgICAgICBzdHJMYWJlbCxcbiAgICAgICAgICBzdHJUeXBlLFxuICAgICAgICAgIG1lYXN1cmVBcmVhLFxuICAgICAgICAgIG1lYXN1cmVSYWRpdXMsXG4gICAgICAgICAgbWVhc3VyZUxpbmU7XG5cbiAgICAgICAgaWYgKCFmZWF0dXJlKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY2hlY2sgZmVhdHVyZS10eXBlXG4gICAgICAgIGlmIChmZWF0dXJlLmdldEdlb21ldHJ5KCkuZ2V0VHlwZSgpID09PSAnTGluZVN0cmluZycpIHtcbiAgICAgICAgICBzdHJMYWJlbCA9IHNjb3BlLnByb3BzLmxhbmcuTEVOR1RIO1xuICAgICAgICAgIHN0clR5cGUgPSBzY29wZS5wcm9wcy5sYW5nLkxJTkU7XG4gICAgICAgICAgbWVhc3VyZUFyZWEgPSBmYWxzZTtcbiAgICAgICAgICBtZWFzdXJlUmFkaXVzID0gZmFsc2U7XG4gICAgICAgICAgbWVhc3VyZUxpbmUgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKGZlYXR1cmUuZ2V0R2VvbWV0cnkoKS5nZXRUeXBlKCkgPT09ICdQb2x5Z29uJykge1xuICAgICAgICAgIHN0ckxhYmVsID0gc2NvcGUucHJvcHMubGFuZy5QRVJJTUVURVI7XG4gICAgICAgICAgc3RyVHlwZSA9IHNjb3BlLnByb3BzLmxhbmcuUE9MWUdPTjtcbiAgICAgICAgICBtZWFzdXJlQXJlYSA9IHRydWU7XG4gICAgICAgICAgbWVhc3VyZVJhZGl1cyA9IGZhbHNlO1xuICAgICAgICAgIG1lYXN1cmVMaW5lID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAoZmVhdHVyZS5nZXRHZW9tZXRyeSgpLmdldFR5cGUoKSA9PT0gJ0NpcmNsZScpIHtcbiAgICAgICAgICBzdHJMYWJlbCA9IHNjb3BlLnByb3BzLmxhbmcuUkFESVVTO1xuICAgICAgICAgIHN0clR5cGUgPSBzY29wZS5wcm9wcy5sYW5nLkNJUkNMRTtcbiAgICAgICAgICBtZWFzdXJlQXJlYSA9IHRydWU7XG4gICAgICAgICAgbWVhc3VyZVJhZGl1cyA9IHRydWU7XG4gICAgICAgICAgbWVhc3VyZUxpbmUgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvL2ZyZWVoYW5kIGlzIExpbmVTdHJpbmcgdG9vXG4gICAgICAgICAgc3RyTGFiZWwgPSBzY29wZS5wcm9wcy5sYW5nLkxFTkdUSDtcbiAgICAgICAgICBzdHJUeXBlID0gc2NvcGUucHJvcHMubGFuZy5GUkVFSEFORDtcbiAgICAgICAgICBtZWFzdXJlQXJlYSA9IGZhbHNlO1xuICAgICAgICAgIG1lYXN1cmVSYWRpdXMgPSBmYWxzZTtcbiAgICAgICAgICBtZWFzdXJlTGluZSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBmZWF0dXJlLnNldCgnbGlzdEVsZW1lbnRWYWx1ZU5hbWUnLCBpbnB1dEVsZW1lbnQpO1xuICAgICAgICBmZWF0dXJlSWRDb3VudCA9IHNjb3BlLmZlYXR1cmVJZEN0cjtcbiAgICAgICAgZmVhdHVyZS5zZXQoJ2ZlYXR1cmVJZCcsIGZlYXR1cmVJZENvdW50KTtcbiAgICAgICAgbGV0IG1lYXN1cmVkRmVhdHVyZSA9IHt9O1xuICAgICAgICBtZWFzdXJlZEZlYXR1cmUuaWQgPSBmZWF0dXJlSWRDb3VudDtcbiAgICAgICAgbWVhc3VyZWRGZWF0dXJlLmxhYmVsID0gc3RyVHlwZSArIFwiIFwiICsgZmVhdHVyZUlkQ291bnQ7XG4gICAgICAgIGZlYXR1cmUuc2V0KCdmZWF0dXJlTGFiZWwnLCBtZWFzdXJlZEZlYXR1cmUubGFiZWwpO1xuICAgICAgICBtZWFzdXJlZEZlYXR1cmUubWVhc3VyZWRWYWx1ZXMgPSB7fTtcbiAgICAgICAgaWYgKG1lYXN1cmVMaW5lKSB7XG4gICAgICAgICAgbWVhc3VyZWRGZWF0dXJlLm1lYXN1cmVkVmFsdWVzWydsaW5lJ10gPSB7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJMw6RuZ2U6IFwiLFxuICAgICAgICAgICAgdmFsdWU6IDBcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGlmIChtZWFzdXJlUmFkaXVzKSB7XG4gICAgICAgICAgbWVhc3VyZWRGZWF0dXJlLm1lYXN1cmVkVmFsdWVzWydyYWRpdXMnXSA9IHtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlJhZGl1czogXCIsXG4gICAgICAgICAgICB2YWx1ZTogMFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1lYXN1cmVBcmVhKSB7XG4gICAgICAgICAgbWVhc3VyZWRGZWF0dXJlLm1lYXN1cmVkVmFsdWVzWydhcmVhJ10gPSB7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJGbMOkY2hlbmluaGFsdDogXCIsXG4gICAgICAgICAgICB2YWx1ZTogMFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgbWVhc3VyZWRGZWF0dXJlLm9sRmVhdHVyZSA9IGZlYXR1cmU7XG4gICAgICAgIHNjb3BlLnByb3BzLmFkZEZlYXR1cmUobWVhc3VyZWRGZWF0dXJlKTtcbiAgICAgICAgLy8gaW5jcmVhc2UgdGhlIGlkLWNvdW50ZXJcbiAgICAgICAgc2NvcGUucHJvcHMuaW5jckZlYXRJZCgpO1xuICAgICAgICAvLyBzY29wZS51cGRhdGUoKTtcbiAgICAgIH07IC8vIGVuZCBvZiBcImFkZE1lYXN1cmVGZWF0dXJlKClcIlxuXG4gICAgICB1cGRhdGVNZWFzdXJlRmVhdHVyZSA9IGZ1bmN0aW9uIChmZWF0dXJlKSB7XG4gICAgICAgIHZhciBmZWF0dXJlVG9vbHRpcCxcbiAgICAgICAgICBuZXdDb250ZW50LFxuICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgbGVuZ3RoLFxuICAgICAgICAgIGFyZWEsXG4gICAgICAgICAgcmFkaXVzO1xuXG4gICAgICAgIGZlYXR1cmVUb29sdGlwID0gZmVhdHVyZS5nZXQoJ3Rvb2x0aXAnKTtcbiAgICAgICAgbmFtZSA9IGZlYXR1cmUuZ2V0KCdmZWF0dXJlTGFiZWwnKTtcbiAgICAgICAgbGVuZ3RoID0gdXRpbHMubWVhc3VyZUdlb21ldHJ5KGZlYXR1cmUuZ2V0R2VvbWV0cnkoKSwgdHJ1ZSk7XG4gICAgICAgIGZlYXR1cmUuc2V0KCdtZWFzdXJlZExlbmd0aCcsIGxlbmd0aC5yYXdWYWx1ZSk7XG4gICAgICAgIGZlYXR1cmVUb29sdGlwLnNldENvbnRlbnQoXCI8c3Ryb25nPlwiICsgbmFtZSArIFwiPC9zdHJvbmc+XCIgKyBcIjxicj5cIiArIGxlbmd0aC5odG1sVmFsdWUpO1xuICAgICAgICBsZXQgZmVhdHVyZUlkID0gZmVhdHVyZS5nZXQoJ2ZlYXR1cmVJZCcpO1xuICAgICAgICBsZXQgbmV3RmVhdHVyZSA9IHt9O1xuICAgICAgICBuZXdGZWF0dXJlLmxhYmVsID0gbmFtZTtcbiAgICAgICAgbmV3RmVhdHVyZS5pZCA9IGZlYXR1cmVJZDtcbiAgICAgICAgbmV3RmVhdHVyZS5tZWFzdXJlZFZhbHVlcyA9IHt9O1xuICAgICAgICBuZXdGZWF0dXJlLm9sRmVhdHVyZSA9IGZlYXR1cmU7XG4gICAgICAgIGlmIChsZW5ndGggJiYgZmVhdHVyZS5nZXQoJ2dlb21ldHJ5VHlwZScpICE9PSAnY2lyY2xlJ1xuICAgICAgICAgICYmIGZlYXR1cmUuZ2V0KCdnZW9tZXRyeVR5cGUnKSAhPT0gJ3BvbHlnb24nKSB7XG4gICAgICAgICAgbmV3RmVhdHVyZS5tZWFzdXJlZFZhbHVlcy5saW5lID0ge307XG4gICAgICAgICAgbmV3RmVhdHVyZS5tZWFzdXJlZFZhbHVlc1snbGluZSddLmRlc2NyaXB0aW9uID0gXCJMw6RuZ2U6IFwiO1xuICAgICAgICAgIG5ld0ZlYXR1cmUubWVhc3VyZWRWYWx1ZXNbJ2xpbmUnXS52YWx1ZSA9IGxlbmd0aC5yYXdWYWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmZWF0dXJlLmdldCgnZ2VvbWV0cnlUeXBlJykgPT09ICdjaXJjbGUnKSB7XG4gICAgICAgICAgcmFkaXVzID0gdXRpbHMubWVhc3VyZUdlb21ldHJ5KGZlYXR1cmUuZ2V0R2VvbWV0cnkoKSk7XG4gICAgICAgICAgbmV3RmVhdHVyZS5tZWFzdXJlZFZhbHVlc1sncmFkaXVzJ10gPSB7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJSYWRpdXM6IFwiLFxuICAgICAgICAgICAgdmFsdWU6IDBcbiAgICAgICAgICB9O1xuICAgICAgICAgIG5ld0ZlYXR1cmUubWVhc3VyZWRWYWx1ZXNbJ3JhZGl1cyddLnZhbHVlID0gcmFkaXVzLnJhd1ZhbHVlO1xuICAgICAgICAgIGZlYXR1cmVUb29sdGlwLnNldENvbnRlbnQoXCI8c3Ryb25nPlwiICsgbmFtZSArIFwiPC9zdHJvbmc+XCIgKyBcIjxicj5cIlxuICAgICAgICAgICAgKyBuZXdGZWF0dXJlLm1lYXN1cmVkVmFsdWVzWydyYWRpdXMnXS5kZXNjcmlwdGlvbiArIHJhZGl1cy5odG1sVmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmZWF0dXJlLmdldCgnZ2VvbWV0cnlUeXBlJykgPT09ICdwb2x5Z29uJ1xuICAgICAgICAgIHx8IGZlYXR1cmUuZ2V0KCdnZW9tZXRyeVR5cGUnKSA9PT0gJ2NpcmNsZScpIHtcbiAgICAgICAgICBhcmVhID0gdXRpbHMubWVhc3VyZUdlb21ldHJ5KGZlYXR1cmUuZ2V0R2VvbWV0cnkoKSwgZmFsc2UsIHRydWUpO1xuICAgICAgICAgIG5ld0ZlYXR1cmUubWVhc3VyZWRWYWx1ZXNbJ2FyZWEnXSA9IHtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkZsw6RjaGVuaW5oYWx0OiBcIixcbiAgICAgICAgICAgIHZhbHVlOiAwXG4gICAgICAgICAgfTtcbiAgICAgICAgICBuZXdGZWF0dXJlLm1lYXN1cmVkVmFsdWVzWydhcmVhJ10udmFsdWUgPSBhcmVhLnJhd1ZhbHVlO1xuICAgICAgICAgIGZlYXR1cmVUb29sdGlwLnNldENvbnRlbnQoXCI8c3Ryb25nPlwiICsgbmFtZSArIFwiPC9zdHJvbmc+XCIgKyBcIjxicj5cIlxuICAgICAgICAgICAgKyBuZXdGZWF0dXJlLm1lYXN1cmVkVmFsdWVzWydhcmVhJ10uZGVzY3JpcHRpb24gKyBhcmVhLmh0bWxWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZmVhdHVyZS5zZXQoJ3Rvb2x0aXAnLCBmZWF0dXJlVG9vbHRpcCk7XG4gICAgICAgIHNjb3BlLnByb3BzLm1vZGlmeUZlYXR1cmUobmV3RmVhdHVyZSwgbmV3RmVhdHVyZS5pZCk7XG4gICAgICB9OyAvLyBlbmQgb2YgXCJ1cGRhdGVNZWFzdXJlRmVhdHVyZSgpXCJcblxuICAgICAgc2NvcGUudXBkYXRlTWVhc3VyZUZlYXR1cmUgPSB1cGRhdGVNZWFzdXJlRmVhdHVyZTtcblxuICAgICAgcmVtb3ZlTWVhc3VyZUZlYXR1cmUgPSBmdW5jdGlvbiAoZmVhdHVyZSkge1xuICAgICAgICBzY29wZS5wcm9wcy5yZW1vdmVGZWF0dXJlKGZlYXR1cmUuZ2V0KCdmZWF0dXJlSWQnKSk7XG4gICAgICB9OyAvLyBlbmQgb2YgXCJyZW1vdmVNZWFzdXJlRmVhdHVyZSgpXCJcblxuICAgICAgLy9TdGFydCBXb3JrYXJvdW5kXG4gICAgICBnZXRWYWx1ZU9mR2VvbWV0cnkgPSBmdW5jdGlvbiAoZmVhdHVyZSkge1xuICAgICAgICB2YXIgbGVuZyA9IHV0aWxzLm1lYXN1cmVHZW9tZXRyeShmZWF0dXJlLmdldEdlb21ldHJ5KCksIHRydWUpO1xuICAgICAgICAvLyBmZWF0dXJlLnNldCgnbWVhc3VyZWRMZW5ndGgnLCBsZW5ndGgpO1xuICAgICAgICB2YXIgdmFsID0gbGVuZy5odG1sVmFsdWU7XG4gICAgICAgIHZhciB2YWx1ZW51bWIgPSB2YWwubWF0Y2goL1xcZC9nKTtcbiAgICAgICAgdmFsdWVudW1iID0gdmFsdWVudW1iLmpvaW4oXCJcIik7XG4gICAgICAgIHJldHVybiB2YWx1ZW51bWI7XG4gICAgICB9O1xuXG4gICAgICBnZXRMZW5ndGhPZk1lYXN1cmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBsZW5ndGggPSAnMC4wMCBtJztcbiAgICAgICAgdmFyIGxlbmd0aG51bWIgPSBsZW5ndGgubWF0Y2goL1xcZC9nKTtcbiAgICAgICAgbGVuZ3RobnVtYiA9IGxlbmd0aG51bWIuam9pbihcIlwiKTtcbiAgICAgICAgbGVuZ3RobnVtYiA9ICs4O1xuICAgICAgICByZXR1cm4gbGVuZ3RobnVtYjtcbiAgICAgIH07Ly8gRW5kIFdvcmthcm91bmRcblxuICAgICAgaW50ZXJhY3Rpb24ub24oJ2RyYXdzdGFydCcsXG4gICAgICAgIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIGFjdGl2ZVNrZXRjaCA9IGV2ZW50LmZlYXR1cmU7XG4gICAgICAgICAgLy8gY3JlYXRlIHRvb2x0aXBcbiAgICAgICAgICBhY3RpdmVUb29sdGlwID0gbmV3IFRvb2x0aXBQb3BVcCh7XG4gICAgICAgICAgICBtYXA6IHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLFxuICAgICAgICAgICAgcG9zaXRpb246IGV2ZW50LmNvb3JkaW5hdGUsXG4gICAgICAgICAgICBob3Jpem9udGFsOiB0cnVlLFxuICAgICAgICAgICAgY2xvc2VhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY2xvc2VGdW5jdGlvbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAvL1dvcmthcm91bmQsIGZvciBzbWFsbCBvciB6ZXJvIHZhbHVlcyBvZiBGcmVlaGFuZFxuICAgICAgICAgICAgICB2YXIgdmFsID0gZ2V0VmFsdWVPZkdlb21ldHJ5KGV2ZW50LmZlYXR1cmUpO1xuICAgICAgICAgICAgICB2YXIgbGVuZyA9IGdldExlbmd0aE9mTWVhc3VyZSgpO1xuICAgICAgICAgICAgICBpZiAodmFsICE9PSBsZW5nICYmIHZhbCA+IGxlbmcpIHtcbiAgICAgICAgICAgICAgICByZW1vdmVNZWFzdXJlRmVhdHVyZShldmVudC5mZWF0dXJlKTtcbiAgICAgICAgICAgICAgICBzb3VyY2UucmVtb3ZlRmVhdHVyZShldmVudC5mZWF0dXJlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZW1vdmVNZWFzdXJlRmVhdHVyZShldmVudC5mZWF0dXJlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgYWN0aXZlU2tldGNoLnNldCgndG9vbHRpcCcsIGFjdGl2ZVRvb2x0aXApO1xuICAgICAgICAgIGFjdGl2ZVNrZXRjaC5zZXQoJ2dlb21ldHJ5VHlwZScsIHNjb3BlLnByb3BzLm1vZGUudG9Mb3dlckNhc2UoKSk7XG4gICAgICAgICAgYWRkTWVhc3VyZUZlYXR1cmUoYWN0aXZlU2tldGNoKTtcbiAgICAgICAgfSwgc2NvcGUpO1xuXG4gICAgICBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLm1hcC5vbigncG9pbnRlcm1vdmUnLFxuICAgICAgICBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICBpZiAoYWN0aXZlU2tldGNoICYmIGFjdGl2ZVRvb2x0aXApIHtcbiAgICAgICAgICAgIGFjdGl2ZVRvb2x0aXAuc2V0UG9zaXRpb24oZXZlbnQuY29vcmRpbmF0ZSk7XG4gICAgICAgICAgICB1cGRhdGVNZWFzdXJlRmVhdHVyZShhY3RpdmVTa2V0Y2gpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgc2NvcGUpO1xuXG4gICAgICBpbnRlcmFjdGlvbi5vbignZHJhd2VuZCcsXG4gICAgICAgIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIGlmIChhY3RpdmVTa2V0Y2ggJiYgYWN0aXZlVG9vbHRpcCkge1xuICAgICAgICAgICAgdXBkYXRlTWVhc3VyZUZlYXR1cmUoYWN0aXZlU2tldGNoKTtcbiAgICAgICAgICAgIGFjdGl2ZVNrZXRjaCA9IG51bGw7XG4gICAgICAgICAgICBhY3RpdmVUb29sdGlwID0gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHNjb3BlKTtcblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcbiAgICAgIGFjdGl2YXRlRnVuY3Rpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZmVhdHVyZXMuY2xlYXIoKTtcbiAgICAgICAgLy8gRW5hYmxlIGludGVyYWN0aW9uXG4gICAgICAgIHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLmFkZEludGVyYWN0aW9uKGludGVyYWN0aW9uKTtcbiAgICAgIH0sXG4gICAgICBkZWFjdGl2YXRlRnVuY3Rpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHNjb3BlLnByb3BzLm1vZGUudG9Mb3dlckNhc2UoKSAhPT0gJ3BvaW50Jykge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpbnRlcmFjdGlvbi5maW5pc2hEcmF3aW5nKCk7XG4gICAgICAgICAgfSBjYXRjaCAoaWdub3JlKSB7XG4gICAgICAgICAgICAvLyAwX29cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmVtb3ZlIGZyb20gbWFwXG4gICAgICAgIHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLnJlbW92ZUludGVyYWN0aW9uKGludGVyYWN0aW9uKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxufSIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDhcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDIxLCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtUaXRsZWJhcn0gZnJvbSBcIi4vYzRnLXRpdGxlYmFyLmpzeFwiO1xuaW1wb3J0IHtnZXRMYW5ndWFnZX0gZnJvbSBcIi4uL2M0Zy1tYXBzLWkxOG5cIjtcbmltcG9ydCB7Q29udHJvbH0gZnJvbSBcIm9sL2NvbnRyb2xcIjtcbmltcG9ydCB7TWVhc3VyZXRvb2xzVmlld30gZnJvbSBcIi4vYzRnLW1lYXN1cmV0b29scy12aWV3LmpzeFwiO1xuaW1wb3J0IHtHcm91cCwgVmVjdG9yfSBmcm9tIFwib2wvbGF5ZXJcIjtcbmltcG9ydCB7VmVjdG9yIGFzIFZlY3RvclNvdXJjZX0gZnJvbSBcIm9sL3NvdXJjZVwiO1xuaW1wb3J0IHtDb2xsZWN0aW9ufSBmcm9tIFwib2xcIjtcbmltcG9ydCB7dXRpbHN9IGZyb20gXCIuLi9jNGctbWFwcy11dGlsc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZWFzdXJldG9vbHMgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIC8vIGNyZWF0ZSBjb250cm9sIHRvIHRvZ2dsZSB0aGUgcGFuZWxcbiAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0aGlzLmxhbmdDb25zdGFudHMgPSBnZXRMYW5ndWFnZShwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEpO1xuICAgIGJ1dHRvbi50aXRsZSA9IHRoaXMubGFuZ0NvbnN0YW50cy5DVFJMX01FQVNVUkVUT09MUztcbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9IFwiYzRnLW1lYXN1cmV0b29scy1jb250cm9sIG9sLXVuc2VsZWN0YWJsZSBvbC1jb250cm9sIFwiO1xuICAgIGlmIChwcm9wcy5vcGVuKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTmFtZSArPSBcImM0Zy1vcGVuXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9IFwiYzRnLWNsb3NlXCI7XG4gICAgfVxuICAgIGlmIChwcm9wcy5leHRlcm5hbCkge1xuICAgICAgZWxlbWVudC5jbGFzc05hbWUgKz0gXCIgYzRnLWV4dGVybmFsXCI7XG4gICAgfVxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICBqUXVlcnkoZWxlbWVudCkub24oJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBsZXQgaGlkZGVuID0gc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5tZWFzdXJldG9vbHNDb250YWluZXIuY2xhc3NOYW1lLmluY2x1ZGVzKCdjNGctY2xvc2UnKTtcbiAgICAgIGlmIChzY29wZS5zdGF0ZS5vcGVuKSB7XG4gICAgICAgIGlmICghaGlkZGVuKSB7XG4gICAgICAgICAgc2NvcGUuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBqUXVlcnkoc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5tZWFzdXJldG9vbHNDb250YWluZXIpLnJlbW92ZUNsYXNzKCdjNGctY2xvc2UnKS5hZGRDbGFzcygnYzRnLW9wZW4nKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2NvcGUub3BlbigpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGxldCBtYXBDb250cm9sbGVyID0gcHJvcHMubWFwQ29udHJvbGxlcjtcbiAgICBsZXQgY29udHJvbCA9IG5ldyBDb250cm9sKHtlbGVtZW50OiBlbGVtZW50LCB0YXJnZXQ6IHByb3BzLnRhcmdldH0pO1xuICAgIG1hcENvbnRyb2xsZXIubWFwc0NvbnRyb2xzLmNvbnRyb2xzLm1lYXN1cmV0b29scyA9IGNvbnRyb2w7XG4gICAgbWFwQ29udHJvbGxlci5tYXAuYWRkQ29udHJvbChjb250cm9sKTtcbiAgICB0aGlzLmNsb3NlID0gdGhpcy5jbG9zZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub3BlbiA9IHRoaXMub3Blbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYWRkTWVhc3VyZWRGZWF0dXJlID0gdGhpcy5hZGRNZWFzdXJlZEZlYXR1cmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLm1vZGlmeU1lYXN1cmVkRmVhdHVyZSA9IHRoaXMubW9kaWZ5TWVhc3VyZWRGZWF0dXJlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5yZW1vdmVNZWFzdXJlZEZlYXR1cmUgPSB0aGlzLnJlbW92ZU1lYXN1cmVkRmVhdHVyZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaW5jcmVtZW50RmVhdHVyZUlkID0gdGhpcy5pbmNyZW1lbnRGZWF0dXJlSWQuYmluZCh0aGlzKTtcbiAgICB0aGlzLm1vZGVzID0gW1wic2VsZWN0XCIsIFwibGluZVwiLCBcInBvbHlnb25cIiwgXCJjaXJjbGVcIiwgXCJmcmVlaGFuZFwiXTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBvcGVuOiBwcm9wcy5vcGVuIHx8IGZhbHNlLFxuICAgICAgY3VycmVudE1vZGU6IFwic2VsZWN0XCIsXG4gICAgICBjb250cm9sOiBjb250cm9sLFxuICAgICAgbWVhc3VyZWRGZWF0dXJlczogW10sXG4gICAgICBmZWF0dXJlSWRDdHI6IDBcbiAgICB9O1xuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBsZXQgYXJyVG9vbHRpcHMgPSB7XG4gICAgICBcInNlbGVjdFwiOiB0aGlzLmxhbmdDb25zdGFudHMuTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9TRUxFQ1QsXG4gICAgICBcImxpbmVcIjogdGhpcy5sYW5nQ29uc3RhbnRzLk1FQVNVUkVUT09MU19WSUVXX1RSSUdHRVJfRFJBV19MSU5FU1RSSU5HLFxuICAgICAgXCJwb2x5Z29uXCI6IHRoaXMubGFuZ0NvbnN0YW50cy5NRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfUE9MWUdPTixcbiAgICAgIFwiY2lyY2xlXCI6IHRoaXMubGFuZ0NvbnN0YW50cy5NRUFTVVJFVE9PTFNfVklFV19UUklHR0VSX0RSQVdfQ0lSQ0xFLFxuICAgICAgXCJmcmVlaGFuZFwiOiB0aGlzLmxhbmdDb25zdGFudHMuTUVBU1VSRVRPT0xTX1ZJRVdfVFJJR0dFUl9EUkFXX0ZSRUVIQU5EXG4gICAgfTtcbiAgICBcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLW1lYXN1cmV0b29scy13cmFwcGVyXCJ9PlxuICAgICAgICA8VGl0bGViYXIgd3JhcHBlckNsYXNzPXtcImM0Zy1tZWFzdXJldG9vbHMtaGVhZGVyXCJ9IGhlYWRlckNsYXNzPXtcImM0Zy1tZWFzdXJldG9vbHMtaGVhZGxpbmVcIn0gaGlkZUNvbnRhaW5lcj17XCIuYzRnLW1lYXN1cmV0b29scy1jb250YWluZXJcIn1cbiAgICAgICAgICAgICAgICAgIGhlYWRlcj17dGhpcy5sYW5nQ29uc3RhbnRzLk1FQVNVUkVUT09MU30gY2xvc2VCdG5DbGFzcz17XCJjNGctdGl0bGViYXItY2xvc2VcIn0gY2xvc2VCdG5DYj17dGhpcy5jbG9zZX0gY2xvc2VCdG5UaXRsZT17dGhpcy5sYW5nQ29uc3RhbnRzLkNMT1NFfT5cbiAgICAgICAgPC9UaXRsZWJhcj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiYzRnLW1lYXN1cmV0b29scy1tb2RlLXN3aXRjaGVyXCJ9PlxuICAgICAgICAgIHt0aGlzLm1vZGVzLm1hcChmdW5jdGlvbihlbGVtZW50LCBpbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuIDxidXR0b24ga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtcImM0Zy1tZWFzdXJlLVwiICsgZWxlbWVudCArIFwiIFwiICsgKGVsZW1lbnQgPT09IHNjb3BlLnN0YXRlLmN1cnJlbnRNb2RlID8gXCJjNGctYWN0aXZlXCIgOiBcImM0Zy1pbmFjdGl2ZVwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VVcD17KCkgPT4gc2NvcGUuc2V0U3RhdGUoe2N1cnJlbnRNb2RlOiBlbGVtZW50fSl9IHRpdGxlPXthcnJUb29sdGlwc1tlbGVtZW50XX0vPjtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxNZWFzdXJldG9vbHNWaWV3IG1vZGU9e1wic2VsZWN0XCJ9IG1lYXN1cmVUb29scz17dGhpc30gYWN0aXZlPXt0aGlzLnN0YXRlLmN1cnJlbnRNb2RlID09PSBcInNlbGVjdFwiICYmIHRoaXMuc3RhdGUub3Blbn0gZmVhdHVyZUlkPXt0aGlzLnN0YXRlLmZlYXR1cmVJZEN0cn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFuZz17dGhpcy5sYW5nQ29uc3RhbnRzfSBhZGRGZWF0dXJlPXt0aGlzLmFkZE1lYXN1cmVkRmVhdHVyZX0gZmVhdHVyZXM9e3RoaXMuc3RhdGUubWVhc3VyZWRGZWF0dXJlc30gaW5jckZlYXRJZD17dGhpcy5pbmNyZW1lbnRGZWF0dXJlSWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmeUZlYXR1cmU9e3RoaXMubW9kaWZ5TWVhc3VyZWRGZWF0dXJlfSBtYXBDb250cm9sbGVyPXt0aGlzLnByb3BzLm1hcENvbnRyb2xsZXJ9IHJlbW92ZUZlYXR1cmU9e3RoaXMucmVtb3ZlTWVhc3VyZWRGZWF0dXJlfS8+XG4gICAgICAgIDxNZWFzdXJldG9vbHNWaWV3IG1vZGU9e1wibGluZVwifSBtZWFzdXJlVG9vbHM9e3RoaXN9IGFjdGl2ZT17dGhpcy5zdGF0ZS5jdXJyZW50TW9kZSA9PT0gXCJsaW5lXCIgJiYgdGhpcy5zdGF0ZS5vcGVufSBmZWF0dXJlSWQ9e3RoaXMuc3RhdGUuZmVhdHVyZUlkQ3RyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYW5nPXt0aGlzLmxhbmdDb25zdGFudHN9IGFkZEZlYXR1cmU9e3RoaXMuYWRkTWVhc3VyZWRGZWF0dXJlfSBmZWF0dXJlcz17dGhpcy5zdGF0ZS5tZWFzdXJlZEZlYXR1cmVzfSBpbmNyRmVhdElkPXt0aGlzLmluY3JlbWVudEZlYXR1cmVJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZ5RmVhdHVyZT17dGhpcy5tb2RpZnlNZWFzdXJlZEZlYXR1cmV9IG1hcENvbnRyb2xsZXI9e3RoaXMucHJvcHMubWFwQ29udHJvbGxlcn0gcmVtb3ZlRmVhdHVyZT17dGhpcy5yZW1vdmVNZWFzdXJlZEZlYXR1cmV9Lz5cbiAgICAgICAgPE1lYXN1cmV0b29sc1ZpZXcgbW9kZT17XCJwb2x5Z29uXCJ9IG1lYXN1cmVUb29scz17dGhpc30gYWN0aXZlPXt0aGlzLnN0YXRlLmN1cnJlbnRNb2RlID09PSBcInBvbHlnb25cIiAmJiB0aGlzLnN0YXRlLm9wZW59IGZlYXR1cmVJZD17dGhpcy5zdGF0ZS5mZWF0dXJlSWRDdHJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmc9e3RoaXMubGFuZ0NvbnN0YW50c30gYWRkRmVhdHVyZT17dGhpcy5hZGRNZWFzdXJlZEZlYXR1cmV9IGZlYXR1cmVzPXt0aGlzLnN0YXRlLm1lYXN1cmVkRmVhdHVyZXN9IGluY3JGZWF0SWQ9e3RoaXMuaW5jcmVtZW50RmVhdHVyZUlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RpZnlGZWF0dXJlPXt0aGlzLm1vZGlmeU1lYXN1cmVkRmVhdHVyZX0gbWFwQ29udHJvbGxlcj17dGhpcy5wcm9wcy5tYXBDb250cm9sbGVyfSByZW1vdmVGZWF0dXJlPXt0aGlzLnJlbW92ZU1lYXN1cmVkRmVhdHVyZX0vPlxuICAgICAgICA8TWVhc3VyZXRvb2xzVmlldyBtb2RlPXtcImNpcmNsZVwifSBtZWFzdXJlVG9vbHM9e3RoaXN9IGFjdGl2ZT17dGhpcy5zdGF0ZS5jdXJyZW50TW9kZSA9PT0gXCJjaXJjbGVcIiAmJiB0aGlzLnN0YXRlLm9wZW59IGZlYXR1cmVJZD17dGhpcy5zdGF0ZS5mZWF0dXJlSWRDdHJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmc9e3RoaXMubGFuZ0NvbnN0YW50c30gYWRkRmVhdHVyZT17dGhpcy5hZGRNZWFzdXJlZEZlYXR1cmV9IGZlYXR1cmVzPXt0aGlzLnN0YXRlLm1lYXN1cmVkRmVhdHVyZXN9IGluY3JGZWF0SWQ9e3RoaXMuaW5jcmVtZW50RmVhdHVyZUlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RpZnlGZWF0dXJlPXt0aGlzLm1vZGlmeU1lYXN1cmVkRmVhdHVyZX0gbWFwQ29udHJvbGxlcj17dGhpcy5wcm9wcy5tYXBDb250cm9sbGVyfSByZW1vdmVGZWF0dXJlPXt0aGlzLnJlbW92ZU1lYXN1cmVkRmVhdHVyZX0vPlxuICAgICAgICA8TWVhc3VyZXRvb2xzVmlldyBtb2RlPXtcImZyZWVoYW5kXCJ9IG1lYXN1cmVUb29scz17dGhpc30gYWN0aXZlPXt0aGlzLnN0YXRlLmN1cnJlbnRNb2RlID09PSBcImZyZWVoYW5kXCIgJiYgdGhpcy5zdGF0ZS5vcGVufSBmZWF0dXJlSWQ9e3RoaXMuc3RhdGUuZmVhdHVyZUlkQ3RyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYW5nPXt0aGlzLmxhbmdDb25zdGFudHN9IGFkZEZlYXR1cmU9e3RoaXMuYWRkTWVhc3VyZWRGZWF0dXJlfSBmZWF0dXJlcz17dGhpcy5zdGF0ZS5tZWFzdXJlZEZlYXR1cmVzfSBpbmNyRmVhdElkPXt0aGlzLmluY3JlbWVudEZlYXR1cmVJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZ5RmVhdHVyZT17dGhpcy5tb2RpZnlNZWFzdXJlZEZlYXR1cmV9IG1hcENvbnRyb2xsZXI9e3RoaXMucHJvcHMubWFwQ29udHJvbGxlcn0gcmVtb3ZlRmVhdHVyZT17dGhpcy5yZW1vdmVNZWFzdXJlZEZlYXR1cmV9Lz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBpbmNyZW1lbnRGZWF0dXJlSWQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7ZmVhdHVyZUlkQ3RyOiB0aGlzLnN0YXRlLmZlYXR1cmVJZEN0ciArIDF9KTtcbiAgfVxuXG4gIGFkZE1lYXN1cmVkRmVhdHVyZShmZWF0dXJlKSB7XG4gICAgbGV0IGZlYXR1cmVzID0gdGhpcy5zdGF0ZS5tZWFzdXJlZEZlYXR1cmVzO1xuICAgIGZlYXR1cmVzLnB1c2goZmVhdHVyZSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7bWVhc3VyZWRGZWF0dXJlczogZmVhdHVyZXN9KTtcbiAgfVxuXG4gIG1vZGlmeU1lYXN1cmVkRmVhdHVyZShuZXdGZWF0dXJlLCBpZCkge1xuICAgIGxldCBmZWF0dXJlcyA9IHRoaXMuc3RhdGUubWVhc3VyZWRGZWF0dXJlcztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZlYXR1cmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoZmVhdHVyZXNbaV0uaWQgPT09IGlkKSB7XG4gICAgICAgIGZlYXR1cmVzW2ldID0gbmV3RmVhdHVyZTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7bWVhc3VyZWRGZWF0dXJlczogZmVhdHVyZXN9KTtcbiAgfVxuXG4gIHJlbW92ZU1lYXN1cmVkRmVhdHVyZShpZCkge1xuICAgIGxldCBmZWF0dXJlcyA9IHRoaXMuc3RhdGUubWVhc3VyZWRGZWF0dXJlcztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZlYXR1cmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoZmVhdHVyZXNbaV0uaWQgPT09IGlkKSB7XG4gICAgICAgIGZlYXR1cmVzLnNwbGljZShpLCAxKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe21lYXN1cmVkRmVhdHVyZXM6IGZlYXR1cmVzfSk7XG4gIH1cblxuICBzZXRDdXJyZW50TW9kZShuZXdNb2RlKSB7XG4gICAgaWYgKHRoaXMubW9kZXMuaW5jbHVkZXMobmV3TW9kZSkpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2N1cnJlbnRNb2RlOiBuZXdNb2RlfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUud2FybihcIlRoZSBzcGVjaWZpZWQgbW9kZSBpcyBub3QgYXZhaWxhYmxlXCIpO1xuICAgIH1cbiAgfVxuXG4gIG9wZW4oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7b3BlbjogdHJ1ZX0pO1xuICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5zZXRPcGVuQ29tcG9uZW50KHRoaXMpO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7b3BlbjogZmFsc2V9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeGVjdXRlZCB3aGVuIHRoZSBwYW5lbCB3aWxsIGJlIG9wZW5lZCBmb3IgdGhlIGZpcnN0IHRpbWUuXG4gICAqIFtpbml0IGRlc2NyaXB0aW9uXVxuICAgKlxuICAgKiBAcmV0dXJuICB7Ym9vbGVhbn0gIFJldHVybnMgfHRydWV8IG9uIHN1Y2Nlc3NcbiAgICovXG4gIGluaXQoKSB7XG4gICAgLy8gQWRkIG1lYXN1cmUgbGF5ZXJzXG4gICAgdGhpcy5tZWFzdXJlTGluZUxheWVyID0gbmV3IFZlY3Rvcih7c291cmNlOiBuZXcgVmVjdG9yU291cmNlKCl9KTtcbiAgICB0aGlzLm1lYXN1cmVQb2x5Z29uTGF5ZXIgPSBuZXcgVmVjdG9yKHtzb3VyY2U6IG5ldyBWZWN0b3JTb3VyY2UoKX0pO1xuICAgIHRoaXMubWVhc3VyZUNpcmNsZUxheWVyID0gbmV3IFZlY3Rvcih7c291cmNlOiBuZXcgVmVjdG9yU291cmNlKCl9KTtcbiAgICB0aGlzLm1lYXN1cmVGcmVlaGFuZExheWVyID0gbmV3IFZlY3Rvcih7c291cmNlOiBuZXcgVmVjdG9yU291cmNlKCl9KTtcblxuICAgIHRoaXMubWVhc3VyZUxheWVyR3JvdXAgPSBuZXcgR3JvdXAoe1xuICAgICAgbGF5ZXJzOiBuZXcgQ29sbGVjdGlvbihbXG4gICAgICAgIHRoaXMubWVhc3VyZUZyZWVoYW5kTGF5ZXIsXG4gICAgICAgIHRoaXMubWVhc3VyZUNpcmNsZUxheWVyLFxuICAgICAgICB0aGlzLm1lYXN1cmVQb2x5Z29uTGF5ZXIsXG4gICAgICAgIHRoaXMubWVhc3VyZUxpbmVMYXllcixcbiAgICAgIF0pLFxuICAgICAgdmlzaWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5tYXAuYWRkTGF5ZXIodGhpcy5tZWFzdXJlTGF5ZXJHcm91cCk7XG5cbiAgICAvLyB0aGlzLnNwaW5uZXIuaGlkZSgpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIGVuZCBvZiBcImluaXQoKVwiXG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlLCBzbmFwc2hvdCkge1xuICAgIGlmIChwcmV2U3RhdGUub3BlbiAmJiAhdGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICAvLyBtZWFzdXJldG9vbHMgd2VyZSBjbG9zZWRcbiAgICAgIGpRdWVyeSh0aGlzLnN0YXRlLmNvbnRyb2wuZWxlbWVudCkucmVtb3ZlQ2xhc3MoXCJjNGctb3BlblwiKS5hZGRDbGFzcyhcImM0Zy1jbG9zZVwiKTtcbiAgICAgIGpRdWVyeShcIi5jNGctbWVhc3VyZXRvb2xzLWNvbnRhaW5lclwiKS5yZW1vdmVDbGFzcyhcImM0Zy1vcGVuXCIpLmFkZENsYXNzKFwiYzRnLWNsb3NlXCIpO1xuICAgICAgdGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLm1hcC5yZW1vdmVMYXllcih0aGlzLm1lYXN1cmVMYXllckdyb3VwKTtcbiAgICAgIHRoaXMucmVtb3ZlVG9vbHRpcHMoKTtcbiAgICAgIHRoaXMucmVtb3ZlZE9uY2UgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoIXByZXZTdGF0ZS5vcGVuICYmIHRoaXMuc3RhdGUub3Blbikge1xuICAgICAgalF1ZXJ5KHRoaXMuc3RhdGUuY29udHJvbC5lbGVtZW50KS5hZGRDbGFzcyhcImM0Zy1vcGVuXCIpLnJlbW92ZUNsYXNzKFwiYzRnLWNsb3NlXCIpO1xuICAgICAgalF1ZXJ5KFwiLmM0Zy1tZWFzdXJldG9vbHMtY29udGFpbmVyXCIpLmFkZENsYXNzKFwiYzRnLW9wZW5cIikucmVtb3ZlQ2xhc3MoXCJjNGctY2xvc2VcIik7XG4gICAgICBpZiAodGhpcy5yZW1vdmVkT25jZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5tYXAuYWRkTGF5ZXIodGhpcy5tZWFzdXJlTGF5ZXJHcm91cCk7XG4gICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5hZGRUb29sdGlwcygpO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuY2FjaGluZyAmJiAhdGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICBsZXQgcGFuZWxWYWwgPSB1dGlscy5nZXRWYWx1ZSgncGFuZWwnKTtcbiAgICAgIGlmIChwYW5lbFZhbCA9PT0gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lKSB7XG4gICAgICAgIHV0aWxzLnN0b3JlVmFsdWUoJ3BhbmVsJywgXCJcIik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlVG9vbHRpcHMoKSB7XG4gICAgbGV0IGFyckxheWVycyA9IHRoaXMubWVhc3VyZUxheWVyR3JvdXAuZ2V0TGF5ZXJzQXJyYXkoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyckxheWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGxheWVyID0gYXJyTGF5ZXJzW2ldO1xuICAgICAgbGV0IGFyckZlYXR1cmVzID0gbGF5ZXIuZ2V0U291cmNlKCkuZ2V0RmVhdHVyZXMoKTtcbiAgICAgIGlmIChhcnJGZWF0dXJlcykge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGFyckZlYXR1cmVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgbGV0IGZlYXR1cmUgPSBhcnJGZWF0dXJlc1tqXTtcbiAgICAgICAgICBmZWF0dXJlLmdldCgndG9vbHRpcCcpLmhpZGUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFkZFRvb2x0aXBzKCkge1xuICAgIGxldCBhcnJMYXllcnMgPSB0aGlzLm1lYXN1cmVMYXllckdyb3VwLmdldExheWVyc0FycmF5KCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJMYXllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBsYXllciA9IGFyckxheWVyc1tpXTtcbiAgICAgIGxldCBhcnJGZWF0dXJlcyA9IGxheWVyLmdldFNvdXJjZSgpLmdldEZlYXR1cmVzKCk7XG4gICAgICBpZiAoYXJyRmVhdHVyZXMpIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBhcnJGZWF0dXJlcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGxldCBmZWF0dXJlID0gYXJyRmVhdHVyZXNbal07XG4gICAgICAgICAgZmVhdHVyZS5nZXQoJ3Rvb2x0aXAnKS5zaG93KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxufSJdLCJzb3VyY2VSb290IjoiIn0=
>>>>>>> Several version preps