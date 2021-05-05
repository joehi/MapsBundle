(self["webpackChunkmapsbundle"] = self["webpackChunkmapsbundle"] || []).push([["Resources_public_js_components_c4g-router-feature-list_jsx"],{

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/***/ ((module) => {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

module.exports = _iterableToArray;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/***/ ((module) => {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./Resources/public/js/components/c4g-router-feature-list-item.jsx":
/*!*************************************************************************!*\
  !*** ./Resources/public/js/components/c4g-router-feature-list-item.jsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.RouterFeatureListItem = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _geom = _interopRequireDefault(__webpack_require__(/*! ol/geom */ "./node_modules/ol/geom.js"));

var _c4gMapsConstant = __webpack_require__(/*! ./../../../../../MapsBundle/Resources/public/js/c4g-maps-constant */ "./Resources/public/js/c4g-maps-constant.js");

var _proj = __webpack_require__(/*! ol/proj */ "./node_modules/ol/proj.js");

var popupFunctionsDE = _interopRequireWildcard(__webpack_require__(/*! ./../../../../../MapsBundle/Resources/public/js/c4g-maps-popup-info-de */ "./Resources/public/js/c4g-maps-popup-info-de.js"));

var popupFunctionsEN = _interopRequireWildcard(__webpack_require__(/*! ./../../../../../MapsBundle/Resources/public/js/c4g-maps-popup-info-en */ "./Resources/public/js/c4g-maps-popup-info-en.js"));

var _c4gMapsUtils = __webpack_require__(/*! ./../../../../../MapsBundle/Resources/public/js/c4g-maps-utils */ "./Resources/public/js/c4g-maps-utils.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var RouterFeatureListItem = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(RouterFeatureListItem, _Component);

  var _super = _createSuper(RouterFeatureListItem);

  function RouterFeatureListItem(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, RouterFeatureListItem);
    _this = _super.call(this, props);
    _this.popupFunctions = props.mapController.data.lang === "de" ? popupFunctionsDE : popupFunctionsEN;
    _this.clickFeature = _this.clickFeature.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(RouterFeatureListItem, [{
    key: "clickFeature",
    value: function clickFeature(event) {
      var scope = this;
      scope.props.setActiveId(scope.props.feature.id);
      scope.props.featureSource.forEachFeature(function (tmpFeature) {
        var layer = undefined;
        var routerLayers = scope.props.mapController.data.routerLayers;

        if (scope.props.routeMode === "area") {
          layer = routerLayers[scope.props.layerArea][scope.props.layerValueArea].layerData;
        } else if (scope.props.routeMode === "route") {
          layer = routerLayers[scope.props.layerRoute][scope.props.layerValueRoute].layerData;
        }

        if (tmpFeature.get('tid') === scope.props.feature.id) {
          var clickStyleId = scope.props.mapController.data.clickLocstyle;

          if (clickStyleId) {
            if (!scope.props.mapController.proxy.locationStyleController.arrLocStyles[clickStyleId]) {
              scope.props.mapController.proxy.locationStyleController.loadLocationStyles([clickStyleId], {
                done: function done() {
                  var style = scope.props.mapController.proxy.locationStyleController.arrLocStyles[clickStyleId].style; // check if feature is still clicked

                  scope.mapSelectInteraction.getFeatures().forEach(function (elem, index, array) {
                    if (elem === tmpFeature) {
                      // feature is still clicked, style it accordingly
                      tmpFeature.setStyle(style);
                    }
                  });
                }
              });
            } else {
              var style = scope.props.mapController.proxy.locationStyleController.arrLocStyles[clickStyleId].style;
              tmpFeature.setStyle(style);

              if (tmpFeature.getGeometry().getType() == "Polygon") {
                scope.props.mapController.map.getView().fit(tmpFeature.getGeometry().getExtent());
              } else {
                scope.props.mapController.map.getView().setCenter(tmpFeature.getGeometry().getCoordinates());
              }
            }
          }
        } else {
          if (false) { var locstyle; } else {
            tmpFeature.setStyle(scope.props.mapController.proxy.locationStyleController.arrLocStyles[layer.locstyle].style);
          }
        }
      }); // refresh css classes

      jQuery(this).parent().children('li').each(function (index, element) {
        jQuery(element).addClass(_c4gMapsConstant.cssConstants.INACTIVE).removeClass(_c4gMapsConstant.cssConstants.ACTIVE);
      });
      jQuery(this).addClass(_c4gMapsConstant.cssConstants.ACTIVE).removeClass(_c4gMapsConstant.cssConstants.INACTIVE); // jQuery("div.c4g-portside-content-container").animate({scrollTop: entry.offsetTop - 300});
    }
  }, {
    key: "render",
    value: function render() {
      var scope = this;
      var currentFeature = null;
      this.props.featureSource.forEachFeature(function (feature) {
        if (feature.get('tid') === scope.props.feature.id) {
          currentFeature = feature;
        }
      });
      var featureEntryContent = "";
      var objHook = null;

      if (currentFeature) {
        if (this.props.type === "overpass") {
          if (currentFeature.get('locstyle')) {
            var styleId = currentFeature.get('locstyle');
            var styleSrc = '';
            var locstyle = this.props.mapController.proxy.locationStyleController.arrLocStyles[styleId];

            if (locstyle && locstyle.locStyleArr) {
              styleSrc = locstyle.locStyleArr.styletype === "cust_icon" ? locstyle.locStyleArr.icon_src : locstyle.locStyleArr.styletype === "cust_icon_svg" ? locstyle.locStyleArr.svgSrc : "";
            }

            featureEntryContent = this.popupFunctions.fnStandardInfoPopup(currentFeature, styleSrc);
          }
        } else if (this.props.type === "notOverpass") {
          if (this.props.feature && this.props.feature.popup) {
            featureEntryContent = this.props.feature.popup;
          }
        } else {
          var layerValue = this.props.routeMode === "route" ? this.props.layerValueRoute : this.props.layerValueArea;
          objHook = {
            entry: "",
            feature: this.props.feature,
            // values: values,
            labels: ['name'],
            // router: scope,
            activeLayerValue: layerValue
          };

          _c4gMapsUtils.utils.callHookFunctions(window.c4gMapsHooks.routePluginEntry, objHook);

          featureEntryContent = objHook.entry;
        }

        var element = {
          __html: featureEntryContent + "<br>"
        };
<<<<<<< refs/remotes/origin/main
        return _react["default"].createElement("li", {
=======
        return /*#__PURE__*/_react["default"].createElement("li", {
>>>>>>> Several version preps
          ref: this.props.refProp,
          dangerouslySetInnerHTML: element,
          className: this.props.active ? "route-features-list-element c4g-active" : "route-features-list-element c4g-inactive",
          onMouseUp: this.clickFeature
        });
      }

      return null;
    }
  }]);
  return RouterFeatureListItem;
}(_react.Component);

exports.RouterFeatureListItem = RouterFeatureListItem;

/***/ }),

/***/ "./Resources/public/js/components/c4g-router-feature-list.jsx":
/*!********************************************************************!*\
  !*** ./Resources/public/js/components/c4g-router-feature-list.jsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _c4gRouterFeatureListItem = __webpack_require__(/*! ./c4g-router-feature-list-item.jsx */ "./Resources/public/js/components/c4g-router-feature-list-item.jsx");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var RouterFeatureList = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(RouterFeatureList, _Component);

  var _super = _createSuper(RouterFeatureList);

  function RouterFeatureList(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, RouterFeatureList);
    _this = _super.call(this, props);
    _this.setActiveId = _this.setActiveId.bind((0, _assertThisInitialized2["default"])(_this));
    _this.features = {};
    return _this;
  }

  (0, _createClass2["default"])(RouterFeatureList, [{
    key: "setActiveId",
    value: function setActiveId(activeId) {
      this.setState({
        "activeId": activeId
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var sortedFeatures = this.sortFeatures();

      if (!sortedFeatures) {
<<<<<<< refs/remotes/origin/main
        return _react["default"].createElement("div", {
=======
        return /*#__PURE__*/_react["default"].createElement("div", {
>>>>>>> Several version preps
          className: this.props.className
        });
      }

<<<<<<< refs/remotes/origin/main
      return _react["default"].createElement("div", {
        className: this.props.className
      }, this.props.header, this.props.switcher, _react["default"].createElement("ul", null, sortedFeatures.map(function (feature, index) {
        _this2.features[feature.id] = _react["default"].createRef();
        return _react["default"].createElement(_c4gRouterFeatureListItem.RouterFeatureListItem, {
=======
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: this.props.className
      }, this.props.header, this.props.switcher, /*#__PURE__*/_react["default"].createElement("ul", null, sortedFeatures.map(function (feature, index) {
        _this2.features[feature.id] = /*#__PURE__*/_react["default"].createRef();
        return /*#__PURE__*/_react["default"].createElement(_c4gRouterFeatureListItem.RouterFeatureListItem, {
>>>>>>> Several version preps
          feature: feature,
          refProp: _this2.features[feature.id],
          type: _this2.props.featureList.type,
          active: _this2.props.activeId === feature.id,
          setActiveId: _this2.props.setActiveId,
          routeMode: _this2.props.routeMode,
          mapController: _this2.props.mapController,
          layerRoute: _this2.props.layerRoute,
          layerArea: _this2.props.layerArea,
          featureSource: _this2.props.featureSource,
          key: index,
          layerValueRoute: _this2.props.layerValueRoute,
          layerValueArea: _this2.props.layerValueArea
        });
      })));
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if (prevProps.activeId !== this.props.activeId) {
        if (this.props.activeId) {
          var ref = this.features[this.props.activeId]; // ref.current.scrollIntoView({behavior: 'smooth', block: 'start'});

          var scrollElement = document.querySelector(".c4g-router-result-container");
          scrollElement.scrollTo(0, ref.current.offsetTop);
        }
      }
    }
  }, {
    key: "sortFeatures",
    value: function sortFeatures() {
      var routerLayers = this.props.mapController.data.routerLayers;
      var currentLayer = this.props.routeMode === "area" ? this.props.layerArea : this.props.layerRoute;
      var currentLayerValue = this.props.routeMode === "area" ? this.props.layerValueArea : this.props.layerValueRoute;

      if (!routerLayers) {
        return;
      }

      var currentLabelProp = routerLayers[currentLayer][currentLayerValue]['mapLabel'];
      var features = (0, _toConsumableArray2["default"])(this.props.featureList.features);
      return features.sort(function (a, b) {
        var aValues = a,
            bValues = b;

        if (a.tags && b.tags) {
          aValues = a.tags;
          bValues = b.tags;
        }

        if (isNaN(aValues[currentLabelProp])) {
          // string values
          return aValues[currentLabelProp] < bValues[currentLabelProp] ? -1 : 1;
        } else {
          // numeric values
          return aValues[currentLabelProp] - bValues[currentLabelProp];
        }
      });
    }
  }]);
  return RouterFeatureList;
}(_react.Component);

exports.default = RouterFeatureList;

/***/ })

}]);
<<<<<<< refs/remotes/origin/main
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvbm9uSXRlcmFibGVTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovL21hcHNidW5kbGUvLi9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLXJvdXRlci1mZWF0dXJlLWxpc3QtaXRlbS5qc3giLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctcm91dGVyLWZlYXR1cmUtbGlzdC5qc3giXSwibmFtZXMiOlsiUm91dGVyRmVhdHVyZUxpc3RJdGVtIiwicHJvcHMiLCJwb3B1cEZ1bmN0aW9ucyIsIm1hcENvbnRyb2xsZXIiLCJkYXRhIiwibGFuZyIsInBvcHVwRnVuY3Rpb25zREUiLCJwb3B1cEZ1bmN0aW9uc0VOIiwiY2xpY2tGZWF0dXJlIiwiYmluZCIsImV2ZW50Iiwic2NvcGUiLCJzZXRBY3RpdmVJZCIsImZlYXR1cmUiLCJpZCIsImZlYXR1cmVTb3VyY2UiLCJmb3JFYWNoRmVhdHVyZSIsInRtcEZlYXR1cmUiLCJsYXllciIsInVuZGVmaW5lZCIsInJvdXRlckxheWVycyIsInJvdXRlTW9kZSIsImxheWVyQXJlYSIsImxheWVyVmFsdWVBcmVhIiwibGF5ZXJEYXRhIiwibGF5ZXJSb3V0ZSIsImxheWVyVmFsdWVSb3V0ZSIsImdldCIsImNsaWNrU3R5bGVJZCIsImNsaWNrTG9jc3R5bGUiLCJwcm94eSIsImxvY2F0aW9uU3R5bGVDb250cm9sbGVyIiwiYXJyTG9jU3R5bGVzIiwibG9hZExvY2F0aW9uU3R5bGVzIiwiZG9uZSIsInN0eWxlIiwibWFwU2VsZWN0SW50ZXJhY3Rpb24iLCJnZXRGZWF0dXJlcyIsImZvckVhY2giLCJlbGVtIiwiaW5kZXgiLCJhcnJheSIsInNldFN0eWxlIiwiZ2V0R2VvbWV0cnkiLCJnZXRUeXBlIiwibWFwIiwiZ2V0VmlldyIsImZpdCIsImdldEV4dGVudCIsInNldENlbnRlciIsImdldENvb3JkaW5hdGVzIiwibG9jc3R5bGUiLCJqUXVlcnkiLCJwYXJlbnQiLCJjaGlsZHJlbiIsImVhY2giLCJlbGVtZW50IiwiYWRkQ2xhc3MiLCJjc3NDb25zdGFudHMiLCJJTkFDVElWRSIsInJlbW92ZUNsYXNzIiwiQUNUSVZFIiwiY3VycmVudEZlYXR1cmUiLCJmZWF0dXJlRW50cnlDb250ZW50Iiwib2JqSG9vayIsInR5cGUiLCJzdHlsZUlkIiwic3R5bGVTcmMiLCJsb2NTdHlsZUFyciIsInN0eWxldHlwZSIsImljb25fc3JjIiwic3ZnU3JjIiwiZm5TdGFuZGFyZEluZm9Qb3B1cCIsInBvcHVwIiwibGF5ZXJWYWx1ZSIsImVudHJ5IiwibGFiZWxzIiwiYWN0aXZlTGF5ZXJWYWx1ZSIsInV0aWxzIiwiY2FsbEhvb2tGdW5jdGlvbnMiLCJ3aW5kb3ciLCJjNGdNYXBzSG9va3MiLCJyb3V0ZVBsdWdpbkVudHJ5IiwiX19odG1sIiwicmVmUHJvcCIsImFjdGl2ZSIsIkNvbXBvbmVudCIsIlJvdXRlckZlYXR1cmVMaXN0IiwiZmVhdHVyZXMiLCJhY3RpdmVJZCIsInNldFN0YXRlIiwic29ydGVkRmVhdHVyZXMiLCJzb3J0RmVhdHVyZXMiLCJjbGFzc05hbWUiLCJoZWFkZXIiLCJzd2l0Y2hlciIsIlJlYWN0IiwiY3JlYXRlUmVmIiwiZmVhdHVyZUxpc3QiLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJzbmFwc2hvdCIsInJlZiIsInNjcm9sbEVsZW1lbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzY3JvbGxUbyIsImN1cnJlbnQiLCJvZmZzZXRUb3AiLCJjdXJyZW50TGF5ZXIiLCJjdXJyZW50TGF5ZXJWYWx1ZSIsImN1cnJlbnRMYWJlbFByb3AiLCJzb3J0IiwiYSIsImIiLCJhVmFsdWVzIiwiYlZhbHVlcyIsInRhZ3MiLCJpc05hTiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSx1QkFBdUIsbUJBQU8sQ0FBQyx3RkFBdUI7O0FBRXREO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUF5QixtQkFBbUIseUJBQXlCLFE7Ozs7Ozs7Ozs7QUNQckU7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXlCLG1CQUFtQix5QkFBeUIsUTs7Ozs7Ozs7OztBQ0xyRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBeUIsbUJBQW1CLHlCQUF5QixROzs7Ozs7Ozs7O0FDTHJFLHdCQUF3QixtQkFBTyxDQUFDLDBGQUF3Qjs7QUFFeEQsc0JBQXNCLG1CQUFPLENBQUMsc0ZBQXNCOztBQUVwRCxpQ0FBaUMsbUJBQU8sQ0FBQyw0R0FBaUM7O0FBRTFFLHdCQUF3QixtQkFBTyxDQUFDLDBGQUF3Qjs7QUFFeEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXlCLG1CQUFtQix5QkFBeUIsUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FyRTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztJQUdhQSxxQjs7Ozs7QUFFWCxpQ0FBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBO0FBQ2pCLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsY0FBTCxHQUFzQkQsS0FBSyxDQUFDRSxhQUFOLENBQW9CQyxJQUFwQixDQUF5QkMsSUFBekIsS0FBa0MsSUFBbEMsR0FBeUNDLGdCQUF6QyxHQUE0REMsZ0JBQWxGO0FBQ0EsVUFBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCQyxJQUFsQixnREFBcEI7QUFIaUI7QUFLbEI7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c3RfanN4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiKTtcblxuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhvdXRIb2xlcztcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgaXRlcltTeW1ib2wuaXRlcmF0b3JdICE9IG51bGwgfHwgaXRlcltcIkBAaXRlcmF0b3JcIl0gIT0gbnVsbCkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheTtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVNwcmVhZDtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgYXJyYXlXaXRob3V0SG9sZXMgPSByZXF1aXJlKFwiLi9hcnJheVdpdGhvdXRIb2xlcy5qc1wiKTtcblxudmFyIGl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2l0ZXJhYmxlVG9BcnJheS5qc1wiKTtcblxudmFyIHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanNcIik7XG5cbnZhciBub25JdGVyYWJsZVNwcmVhZCA9IHJlcXVpcmUoXCIuL25vbkl0ZXJhYmxlU3ByZWFkLmpzXCIpO1xuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgbm9uSXRlcmFibGVTcHJlYWQoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdG9Db25zdW1hYmxlQXJyYXk7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsXG4gKiB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqXG4gKiBAcGFja2FnZSAgIFx0Y29uNGdpc1xuICogQHZlcnNpb24gICAgICAgIDZcbiAqIEBhdXRob3IgIFx0ICAgIMKvXFxfKOODhClfL8KvXG4gKiBAbGljZW5zZSBcdCAgICBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCBcdCAgICBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgICAgICAgICAgICBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICpcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUG9seWdvbiBmcm9tIFwib2wvZ2VvbVwiO1xuaW1wb3J0IFBvaW50IGZyb20gXCJvbC9nZW9tXCI7XG5pbXBvcnQge2Nzc0NvbnN0YW50c30gZnJvbSBcIi4vLi4vLi4vLi4vLi4vLi4vTWFwc0J1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1tYXBzLWNvbnN0YW50XCI7XG5pbXBvcnQge3RyYW5zZm9ybSwgdG9Mb25MYXQsIGZyb21Mb25MYXQsIHRyYW5zZm9ybUV4dGVudH0gZnJvbSBcIm9sL3Byb2pcIjtcbmltcG9ydCAqIGFzIHBvcHVwRnVuY3Rpb25zREUgZnJvbSBcIi4vLi4vLi4vLi4vLi4vLi4vTWFwc0J1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1tYXBzLXBvcHVwLWluZm8tZGVcIjtcbmltcG9ydCAqIGFzIHBvcHVwRnVuY3Rpb25zRU4gZnJvbSBcIi4vLi4vLi4vLi4vLi4vLi4vTWFwc0J1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1tYXBzLXBvcHVwLWluZm8tZW5cIjtcbmltcG9ydCB7dXRpbHN9IGZyb20gXCIuLy4uLy4uLy4uLy4uLy4uL01hcHNCdW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy11dGlsc1wiO1xuXG5cbmV4cG9ydCBjbGFzcyBSb3V0ZXJGZWF0dXJlTGlzdEl0ZW0gZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMucG9wdXBGdW5jdGlvbnMgPSBwcm9wcy5tYXBDb250cm9sbGVyLmRhdGEubGFuZyA9PT0gXCJkZVwiID8gcG9wdXBGdW5jdGlvbnNERSA6IHBvcHVwRnVuY3Rpb25zRU47XG4gICAgdGhpcy5jbGlja0ZlYXR1cmUgPSB0aGlzLmNsaWNrRmVhdHVyZS5iaW5kKHRoaXMpO1xuXG4gIH1cbiAgY2xpY2tGZWF0dXJlIChldmVudCkge1xuICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICBzY29wZS5wcm9wcy5zZXRBY3RpdmVJZChzY29wZS5wcm9wcy5mZWF0dXJlLmlkKTtcbiAgICBzY29wZS5wcm9wcy5mZWF0dXJlU291cmNlLmZvckVhY2hGZWF0dXJlKCh0bXBGZWF0dXJlKSA9PiB7XG4gICAgICBsZXQgbGF5ZXIgPSB1bmRlZmluZWQ7XG4gICAgICBsZXQgcm91dGVyTGF5ZXJzID0gc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlckxheWVycztcbiAgICAgIGlmIChzY29wZS5wcm9wcy5yb3V0ZU1vZGUgPT09IFwiYXJlYVwiKSB7XG4gICAgICAgIGxheWVyID0gcm91dGVyTGF5ZXJzW3Njb3BlLnByb3BzLmxheWVyQXJlYV1bc2NvcGUucHJvcHMubGF5ZXJWYWx1ZUFyZWFdLmxheWVyRGF0YTtcbiAgICAgIH0gZWxzZSBpZiAoc2NvcGUucHJvcHMucm91dGVNb2RlID09PSBcInJvdXRlXCIpIHtcbiAgICAgICAgbGF5ZXIgPSByb3V0ZXJMYXllcnNbc2NvcGUucHJvcHMubGF5ZXJSb3V0ZV1bc2NvcGUucHJvcHMubGF5ZXJWYWx1ZVJvdXRlXS5sYXllckRhdGE7XG4gICAgICB9XG4gICAgICBpZiAodG1wRmVhdHVyZS5nZXQoJ3RpZCcpID09PSBzY29wZS5wcm9wcy5mZWF0dXJlLmlkKSB7XG4gICAgICAgIGxldCBjbGlja1N0eWxlSWQgPSBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEuY2xpY2tMb2NzdHlsZTtcbiAgICAgICAgaWYgKGNsaWNrU3R5bGVJZCkge1xuICAgICAgICAgIGlmICghc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5hcnJMb2NTdHlsZXNbY2xpY2tTdHlsZUlkXSkge1xuICAgICAgICAgICAgc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5sb2FkTG9jYXRpb25TdHlsZXMoW2NsaWNrU3R5bGVJZF0sIHtcbiAgICAgICAgICAgICAgZG9uZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGxldCBzdHlsZSA9IHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIuYXJyTG9jU3R5bGVzW2NsaWNrU3R5bGVJZF0uc3R5bGU7XG4gICAgICAgICAgICAgICAgLy8gY2hlY2sgaWYgZmVhdHVyZSBpcyBzdGlsbCBjbGlja2VkXG4gICAgICAgICAgICAgICAgc2NvcGUubWFwU2VsZWN0SW50ZXJhY3Rpb24uZ2V0RmVhdHVyZXMoKS5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtLCBpbmRleCwgYXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChlbGVtID09PSB0bXBGZWF0dXJlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGZlYXR1cmUgaXMgc3RpbGwgY2xpY2tlZCwgc3R5bGUgaXQgYWNjb3JkaW5nbHlcbiAgICAgICAgICAgICAgICAgICAgdG1wRmVhdHVyZS5zZXRTdHlsZShzdHlsZSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgc3R5bGUgPSBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1tjbGlja1N0eWxlSWRdLnN0eWxlO1xuICAgICAgICAgICAgdG1wRmVhdHVyZS5zZXRTdHlsZShzdHlsZSk7XG4gICAgICAgICAgICBpZiAodG1wRmVhdHVyZS5nZXRHZW9tZXRyeSgpLmdldFR5cGUoKSA9PSBcIlBvbHlnb25cIikge1xuICAgICAgICAgICAgICBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLm1hcC5nZXRWaWV3KCkuZml0KHRtcEZlYXR1cmUuZ2V0R2VvbWV0cnkoKS5nZXRFeHRlbnQoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5tYXAuZ2V0VmlldygpLnNldENlbnRlcih0bXBGZWF0dXJlLmdldEdlb21ldHJ5KCkuZ2V0Q29vcmRpbmF0ZXMoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChmYWxzZSAmJiBzY29wZS5iZXN0RmVhdHVyZUlkcy5pbmNsdWRlcyh0bXBGZWF0dXJlLmdldCgndGlkJykpKSB7XG4gICAgICAgICAgbGV0IGxvY3N0eWxlID0gc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnByaW9yaXR5TG9jc3R5bGU7XG4gICAgICAgICAgdG1wRmVhdHVyZS5zZXRTdHlsZShzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1tsb2NzdHlsZV0uc3R5bGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRtcEZlYXR1cmUuc2V0U3R5bGUoc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5hcnJMb2NTdHlsZXNbbGF5ZXIubG9jc3R5bGVdLnN0eWxlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIC8vIHJlZnJlc2ggY3NzIGNsYXNzZXNcbiAgICBqUXVlcnkodGhpcykucGFyZW50KCkuY2hpbGRyZW4oJ2xpJykuZWFjaChmdW5jdGlvbiAoaW5kZXgsIGVsZW1lbnQpIHtcbiAgICAgIGpRdWVyeShlbGVtZW50KS5hZGRDbGFzcyhjc3NDb25zdGFudHMuSU5BQ1RJVkUpLnJlbW92ZUNsYXNzKGNzc0NvbnN0YW50cy5BQ1RJVkUpO1xuICAgIH0pO1xuICAgIGpRdWVyeSh0aGlzKS5hZGRDbGFzcyhjc3NDb25zdGFudHMuQUNUSVZFKS5yZW1vdmVDbGFzcyhjc3NDb25zdGFudHMuSU5BQ1RJVkUpO1xuICAgIC8vIGpRdWVyeShcImRpdi5jNGctcG9ydHNpZGUtY29udGVudC1jb250YWluZXJcIikuYW5pbWF0ZSh7c2Nyb2xsVG9wOiBlbnRyeS5vZmZzZXRUb3AgLSAzMDB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgbGV0IGN1cnJlbnRGZWF0dXJlID0gbnVsbDtcbiAgICB0aGlzLnByb3BzLmZlYXR1cmVTb3VyY2UuZm9yRWFjaEZlYXR1cmUoZnVuY3Rpb24gKGZlYXR1cmUpIHtcbiAgICAgIGlmIChmZWF0dXJlLmdldCgndGlkJykgPT09IHNjb3BlLnByb3BzLmZlYXR1cmUuaWQpIHtcbiAgICAgICAgY3VycmVudEZlYXR1cmUgPSBmZWF0dXJlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGxldCBmZWF0dXJlRW50cnlDb250ZW50ID0gXCJcIjtcbiAgICBsZXQgb2JqSG9vayA9IG51bGw7XG4gICAgaWYgKGN1cnJlbnRGZWF0dXJlKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy50eXBlID09PSBcIm92ZXJwYXNzXCIpIHtcbiAgICAgICAgaWYgKGN1cnJlbnRGZWF0dXJlLmdldCgnbG9jc3R5bGUnKSkge1xuICAgICAgICAgIGxldCBzdHlsZUlkID0gY3VycmVudEZlYXR1cmUuZ2V0KCdsb2NzdHlsZScpO1xuICAgICAgICAgIGxldCBzdHlsZVNyYyA9ICcnO1xuICAgICAgICAgIGxldCBsb2NzdHlsZSA9IHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5hcnJMb2NTdHlsZXNbc3R5bGVJZF07XG4gICAgICAgICAgaWYgKGxvY3N0eWxlICYmIGxvY3N0eWxlLmxvY1N0eWxlQXJyKSB7XG4gICAgICAgICAgICBzdHlsZVNyYyA9IGxvY3N0eWxlLmxvY1N0eWxlQXJyLnN0eWxldHlwZSA9PT0gXCJjdXN0X2ljb25cIiA/IGxvY3N0eWxlLmxvY1N0eWxlQXJyLmljb25fc3JjIDogbG9jc3R5bGUubG9jU3R5bGVBcnIuc3R5bGV0eXBlID09PSBcImN1c3RfaWNvbl9zdmdcIiA/IGxvY3N0eWxlLmxvY1N0eWxlQXJyLnN2Z1NyYyA6IFwiXCI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZlYXR1cmVFbnRyeUNvbnRlbnQgPSB0aGlzLnBvcHVwRnVuY3Rpb25zLmZuU3RhbmRhcmRJbmZvUG9wdXAoY3VycmVudEZlYXR1cmUsIHN0eWxlU3JjKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLnR5cGUgPT09IFwibm90T3ZlcnBhc3NcIikge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5mZWF0dXJlICYmIHRoaXMucHJvcHMuZmVhdHVyZS5wb3B1cCkge1xuICAgICAgICAgIGZlYXR1cmVFbnRyeUNvbnRlbnQgPSB0aGlzLnByb3BzLmZlYXR1cmUucG9wdXA7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBsYXllclZhbHVlID0gdGhpcy5wcm9wcy5yb3V0ZU1vZGUgPT09IFwicm91dGVcIiA/IHRoaXMucHJvcHMubGF5ZXJWYWx1ZVJvdXRlIDogdGhpcy5wcm9wcy5sYXllclZhbHVlQXJlYTtcbiAgICAgICAgb2JqSG9vayA9ICB7XG4gICAgICAgICAgZW50cnk6IFwiXCIsXG4gICAgICAgICAgZmVhdHVyZTogdGhpcy5wcm9wcy5mZWF0dXJlLFxuICAgICAgICAgIC8vIHZhbHVlczogdmFsdWVzLFxuICAgICAgICAgIGxhYmVsczogWyduYW1lJ10sXG4gICAgICAgICAgLy8gcm91dGVyOiBzY29wZSxcbiAgICAgICAgICBhY3RpdmVMYXllclZhbHVlOiBsYXllclZhbHVlXG4gICAgICAgIH07XG4gICAgICAgIHV0aWxzLmNhbGxIb29rRnVuY3Rpb25zKHdpbmRvdy5jNGdNYXBzSG9va3Mucm91dGVQbHVnaW5FbnRyeSwgb2JqSG9vayk7XG4gICAgICAgIGZlYXR1cmVFbnRyeUNvbnRlbnQgPSBvYmpIb29rLmVudHJ5O1xuICAgICAgfVxuICAgICAgbGV0IGVsZW1lbnQgPSB7X19odG1sOiBmZWF0dXJlRW50cnlDb250ZW50ICsgXCI8YnI+XCJ9O1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGxpIHJlZj17dGhpcy5wcm9wcy5yZWZQcm9wfSBkYW5nZXJvdXNseVNldElubmVySFRNTD17ZWxlbWVudH0gY2xhc3NOYW1lPXt0aGlzLnByb3BzLmFjdGl2ZSA/IFwicm91dGUtZmVhdHVyZXMtbGlzdC1lbGVtZW50IGM0Zy1hY3RpdmVcIjogXCJyb3V0ZS1mZWF0dXJlcy1saXN0LWVsZW1lbnQgYzRnLWluYWN0aXZlXCJ9IG9uTW91c2VVcD17dGhpcy5jbGlja0ZlYXR1cmV9Lz5cbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG59IiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsXG4gKiB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqXG4gKiBAcGFja2FnZSAgIFx0Y29uNGdpc1xuICogQHZlcnNpb24gICAgICAgIDZcbiAqIEBhdXRob3IgIFx0ICAgIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgXHQgICAgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgXHQgICAgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rICAgICAgICAgICAgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtSb3V0ZXJGZWF0dXJlTGlzdEl0ZW19IGZyb20gXCIuL2M0Zy1yb3V0ZXItZmVhdHVyZS1saXN0LWl0ZW0uanN4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlckZlYXR1cmVMaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnNldEFjdGl2ZUlkID0gdGhpcy5zZXRBY3RpdmVJZC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZmVhdHVyZXMgPSB7fTtcbiAgfVxuXG4gIHNldEFjdGl2ZUlkKGFjdGl2ZUlkKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcImFjdGl2ZUlkXCI6IGFjdGl2ZUlkfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgc29ydGVkRmVhdHVyZXMgPSB0aGlzLnNvcnRGZWF0dXJlcygpO1xuICAgIGlmICghc29ydGVkRmVhdHVyZXMpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lfT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZX0+XG4gICAgICAgIHt0aGlzLnByb3BzLmhlYWRlcn1cbiAgICAgICAge3RoaXMucHJvcHMuc3dpdGNoZXJ9XG4gICAgICAgIDx1bD5cbiAgICAgICAgICB7c29ydGVkRmVhdHVyZXMubWFwKChmZWF0dXJlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5mZWF0dXJlc1tmZWF0dXJlLmlkXSA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICAgICAgICAgICAgcmV0dXJuIDxSb3V0ZXJGZWF0dXJlTGlzdEl0ZW0gZmVhdHVyZT17ZmVhdHVyZX0gcmVmUHJvcD17dGhpcy5mZWF0dXJlc1tmZWF0dXJlLmlkXX0gdHlwZT17dGhpcy5wcm9wcy5mZWF0dXJlTGlzdC50eXBlfSBhY3RpdmU9e3RoaXMucHJvcHMuYWN0aXZlSWQgPT09IGZlYXR1cmUuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBY3RpdmVJZD17dGhpcy5wcm9wcy5zZXRBY3RpdmVJZH0gcm91dGVNb2RlPXt0aGlzLnByb3BzLnJvdXRlTW9kZX0gbWFwQ29udHJvbGxlcj17dGhpcy5wcm9wcy5tYXBDb250cm9sbGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJSb3V0ZT17dGhpcy5wcm9wcy5sYXllclJvdXRlfSBsYXllckFyZWE9e3RoaXMucHJvcHMubGF5ZXJBcmVhfSBmZWF0dXJlU291cmNlPXt0aGlzLnByb3BzLmZlYXR1cmVTb3VyY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fSBsYXllclZhbHVlUm91dGU9e3RoaXMucHJvcHMubGF5ZXJWYWx1ZVJvdXRlfSBsYXllclZhbHVlQXJlYT17dGhpcy5wcm9wcy5sYXllclZhbHVlQXJlYX0vPlxuICAgICAgICAgIH0pfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUsIHNuYXBzaG90KSB7XG4gICAgaWYgKHByZXZQcm9wcy5hY3RpdmVJZCAhPT0gdGhpcy5wcm9wcy5hY3RpdmVJZCkge1xuICAgICAgaWYgKHRoaXMucHJvcHMuYWN0aXZlSWQpIHtcbiAgICAgICAgY29uc3QgcmVmID0gdGhpcy5mZWF0dXJlc1t0aGlzLnByb3BzLmFjdGl2ZUlkXTtcbiAgICAgICAgLy8gcmVmLmN1cnJlbnQuc2Nyb2xsSW50b1ZpZXcoe2JlaGF2aW9yOiAnc21vb3RoJywgYmxvY2s6ICdzdGFydCd9KTtcbiAgICAgICAgbGV0IHNjcm9sbEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmM0Zy1yb3V0ZXItcmVzdWx0LWNvbnRhaW5lclwiKTtcbiAgICAgICAgc2Nyb2xsRWxlbWVudC5zY3JvbGxUbygwLCByZWYuY3VycmVudC5vZmZzZXRUb3ApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNvcnRGZWF0dXJlcygpIHtcbiAgICBjb25zdCByb3V0ZXJMYXllcnMgPSB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJMYXllcnM7XG4gICAgY29uc3QgY3VycmVudExheWVyID0gdGhpcy5wcm9wcy5yb3V0ZU1vZGUgPT09IFwiYXJlYVwiID8gdGhpcy5wcm9wcy5sYXllckFyZWEgOiB0aGlzLnByb3BzLmxheWVyUm91dGU7XG4gICAgY29uc3QgY3VycmVudExheWVyVmFsdWUgPSB0aGlzLnByb3BzLnJvdXRlTW9kZSA9PT0gXCJhcmVhXCIgPyB0aGlzLnByb3BzLmxheWVyVmFsdWVBcmVhIDogdGhpcy5wcm9wcy5sYXllclZhbHVlUm91dGU7XG5cbiAgICBpZiAoIXJvdXRlckxheWVycykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGN1cnJlbnRMYWJlbFByb3AgPSByb3V0ZXJMYXllcnNbY3VycmVudExheWVyXVtjdXJyZW50TGF5ZXJWYWx1ZV1bJ21hcExhYmVsJ107XG4gICAgbGV0IGZlYXR1cmVzID0gWy4uLnRoaXMucHJvcHMuZmVhdHVyZUxpc3QuZmVhdHVyZXNdO1xuICAgIHJldHVybiBmZWF0dXJlcy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICBsZXQgYVZhbHVlcyA9IGEsIGJWYWx1ZXMgPSBiO1xuICAgICAgaWYgKGEudGFncyAmJiBiLnRhZ3MpIHtcbiAgICAgICAgYVZhbHVlcyA9IGEudGFncztcbiAgICAgICAgYlZhbHVlcyA9IGIudGFncztcbiAgICAgIH1cbiAgICAgIGlmIChpc05hTihhVmFsdWVzW2N1cnJlbnRMYWJlbFByb3BdKSkge1xuICAgICAgICAvLyBzdHJpbmcgdmFsdWVzXG4gICAgICAgIHJldHVybiBhVmFsdWVzW2N1cnJlbnRMYWJlbFByb3BdIDwgYlZhbHVlc1tjdXJyZW50TGFiZWxQcm9wXSA/IC0xIDogMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIG51bWVyaWMgdmFsdWVzXG4gICAgICAgIHJldHVybiBhVmFsdWVzW2N1cnJlbnRMYWJlbFByb3BdIC0gYlZhbHVlc1tjdXJyZW50TGFiZWxQcm9wXTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=
=======
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvbm9uSXRlcmFibGVTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovL21hcHNidW5kbGUvLi9SZXNvdXJjZXMvcHVibGljL2pzL2NvbXBvbmVudHMvYzRnLXJvdXRlci1mZWF0dXJlLWxpc3QtaXRlbS5qc3giLCJ3ZWJwYWNrOi8vbWFwc2J1bmRsZS8uL1Jlc291cmNlcy9wdWJsaWMvanMvY29tcG9uZW50cy9jNGctcm91dGVyLWZlYXR1cmUtbGlzdC5qc3giXSwibmFtZXMiOlsiUm91dGVyRmVhdHVyZUxpc3RJdGVtIiwicHJvcHMiLCJwb3B1cEZ1bmN0aW9ucyIsIm1hcENvbnRyb2xsZXIiLCJkYXRhIiwibGFuZyIsInBvcHVwRnVuY3Rpb25zREUiLCJwb3B1cEZ1bmN0aW9uc0VOIiwiY2xpY2tGZWF0dXJlIiwiYmluZCIsImV2ZW50Iiwic2NvcGUiLCJzZXRBY3RpdmVJZCIsImZlYXR1cmUiLCJpZCIsImZlYXR1cmVTb3VyY2UiLCJmb3JFYWNoRmVhdHVyZSIsInRtcEZlYXR1cmUiLCJsYXllciIsInVuZGVmaW5lZCIsInJvdXRlckxheWVycyIsInJvdXRlTW9kZSIsImxheWVyQXJlYSIsImxheWVyVmFsdWVBcmVhIiwibGF5ZXJEYXRhIiwibGF5ZXJSb3V0ZSIsImxheWVyVmFsdWVSb3V0ZSIsImdldCIsImNsaWNrU3R5bGVJZCIsImNsaWNrTG9jc3R5bGUiLCJwcm94eSIsImxvY2F0aW9uU3R5bGVDb250cm9sbGVyIiwiYXJyTG9jU3R5bGVzIiwibG9hZExvY2F0aW9uU3R5bGVzIiwiZG9uZSIsInN0eWxlIiwibWFwU2VsZWN0SW50ZXJhY3Rpb24iLCJnZXRGZWF0dXJlcyIsImZvckVhY2giLCJlbGVtIiwiaW5kZXgiLCJhcnJheSIsInNldFN0eWxlIiwiZ2V0R2VvbWV0cnkiLCJnZXRUeXBlIiwibWFwIiwiZ2V0VmlldyIsImZpdCIsImdldEV4dGVudCIsInNldENlbnRlciIsImdldENvb3JkaW5hdGVzIiwibG9jc3R5bGUiLCJqUXVlcnkiLCJwYXJlbnQiLCJjaGlsZHJlbiIsImVhY2giLCJlbGVtZW50IiwiYWRkQ2xhc3MiLCJjc3NDb25zdGFudHMiLCJJTkFDVElWRSIsInJlbW92ZUNsYXNzIiwiQUNUSVZFIiwiY3VycmVudEZlYXR1cmUiLCJmZWF0dXJlRW50cnlDb250ZW50Iiwib2JqSG9vayIsInR5cGUiLCJzdHlsZUlkIiwic3R5bGVTcmMiLCJsb2NTdHlsZUFyciIsInN0eWxldHlwZSIsImljb25fc3JjIiwic3ZnU3JjIiwiZm5TdGFuZGFyZEluZm9Qb3B1cCIsInBvcHVwIiwibGF5ZXJWYWx1ZSIsImVudHJ5IiwibGFiZWxzIiwiYWN0aXZlTGF5ZXJWYWx1ZSIsInV0aWxzIiwiY2FsbEhvb2tGdW5jdGlvbnMiLCJ3aW5kb3ciLCJjNGdNYXBzSG9va3MiLCJyb3V0ZVBsdWdpbkVudHJ5IiwiX19odG1sIiwicmVmUHJvcCIsImFjdGl2ZSIsIkNvbXBvbmVudCIsIlJvdXRlckZlYXR1cmVMaXN0IiwiZmVhdHVyZXMiLCJhY3RpdmVJZCIsInNldFN0YXRlIiwic29ydGVkRmVhdHVyZXMiLCJzb3J0RmVhdHVyZXMiLCJjbGFzc05hbWUiLCJoZWFkZXIiLCJzd2l0Y2hlciIsIlJlYWN0IiwiY3JlYXRlUmVmIiwiZmVhdHVyZUxpc3QiLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJzbmFwc2hvdCIsInJlZiIsInNjcm9sbEVsZW1lbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzY3JvbGxUbyIsImN1cnJlbnQiLCJvZmZzZXRUb3AiLCJjdXJyZW50TGF5ZXIiLCJjdXJyZW50TGF5ZXJWYWx1ZSIsImN1cnJlbnRMYWJlbFByb3AiLCJzb3J0IiwiYSIsImIiLCJhVmFsdWVzIiwiYlZhbHVlcyIsInRhZ3MiLCJpc05hTiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSx1QkFBdUIsbUJBQU8sQ0FBQyx3RkFBdUI7O0FBRXREO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUF5QixtQkFBbUIseUJBQXlCLFE7Ozs7Ozs7Ozs7QUNQckU7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXlCLG1CQUFtQix5QkFBeUIsUTs7Ozs7Ozs7OztBQ0xyRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBeUIsbUJBQW1CLHlCQUF5QixROzs7Ozs7Ozs7O0FDTHJFLHdCQUF3QixtQkFBTyxDQUFDLDBGQUF3Qjs7QUFFeEQsc0JBQXNCLG1CQUFPLENBQUMsc0ZBQXNCOztBQUVwRCxpQ0FBaUMsbUJBQU8sQ0FBQyw0R0FBaUM7O0FBRTFFLHdCQUF3QixtQkFBTyxDQUFDLDBGQUF3Qjs7QUFFeEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXlCLG1CQUFtQix5QkFBeUIsUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hyRTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztJQUdhQSxxQjs7Ozs7QUFFWCxpQ0FBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBO0FBQ2pCLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsY0FBTCxHQUFzQkQsS0FBSyxDQUFDRSxhQUFOLENBQW9CQyxJQUFwQixDQUF5QkMsSUFBekIsS0FBa0MsSUFBbEMsR0FBeUNDLGdCQUF6QyxHQUE0REMsZ0JBQWxGO0FBQ0EsVUFBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCQyxJQUFsQixnREFBcEI7QUFIaUI7QUFLbEI7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cmUtbGlzdF9qc3guYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCIpO1xuXG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KGFycik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aG91dEhvbGVzO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBpdGVyW1N5bWJvbC5pdGVyYXRvcl0gIT0gbnVsbCB8fCBpdGVyW1wiQEBpdGVyYXRvclwiXSAhPSBudWxsKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXRlcmFibGVUb0FycmF5O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX25vbkl0ZXJhYmxlU3ByZWFkO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsInZhciBhcnJheVdpdGhvdXRIb2xlcyA9IHJlcXVpcmUoXCIuL2FycmF5V2l0aG91dEhvbGVzLmpzXCIpO1xuXG52YXIgaXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vaXRlcmFibGVUb0FycmF5LmpzXCIpO1xuXG52YXIgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qc1wiKTtcblxudmFyIG5vbkl0ZXJhYmxlU3ByZWFkID0gcmVxdWlyZShcIi4vbm9uSXRlcmFibGVTcHJlYWQuanNcIik7XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aG91dEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5KGFycikgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBub25JdGVyYWJsZVNwcmVhZCgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90b0NvbnN1bWFibGVBcnJheTtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcywgdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKiBAcGFja2FnZSBjb240Z2lzXG4gKiBAdmVyc2lvbiA4XG4gKiBAYXV0aG9yIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgKGMpIDIwMTAtMjAyMSwgYnkgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFBvbHlnb24gZnJvbSBcIm9sL2dlb21cIjtcbmltcG9ydCBQb2ludCBmcm9tIFwib2wvZ2VvbVwiO1xuaW1wb3J0IHtjc3NDb25zdGFudHN9IGZyb20gXCIuLy4uLy4uLy4uLy4uLy4uL01hcHNCdW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1jb25zdGFudFwiO1xuaW1wb3J0IHt0cmFuc2Zvcm0sIHRvTG9uTGF0LCBmcm9tTG9uTGF0LCB0cmFuc2Zvcm1FeHRlbnR9IGZyb20gXCJvbC9wcm9qXCI7XG5pbXBvcnQgKiBhcyBwb3B1cEZ1bmN0aW9uc0RFIGZyb20gXCIuLy4uLy4uLy4uLy4uLy4uL01hcHNCdW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1wb3B1cC1pbmZvLWRlXCI7XG5pbXBvcnQgKiBhcyBwb3B1cEZ1bmN0aW9uc0VOIGZyb20gXCIuLy4uLy4uLy4uLy4uLy4uL01hcHNCdW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctbWFwcy1wb3B1cC1pbmZvLWVuXCI7XG5pbXBvcnQge3V0aWxzfSBmcm9tIFwiLi8uLi8uLi8uLi8uLi8uLi9NYXBzQnVuZGxlL1Jlc291cmNlcy9wdWJsaWMvanMvYzRnLW1hcHMtdXRpbHNcIjtcblxuXG5leHBvcnQgY2xhc3MgUm91dGVyRmVhdHVyZUxpc3RJdGVtIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnBvcHVwRnVuY3Rpb25zID0gcHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmxhbmcgPT09IFwiZGVcIiA/IHBvcHVwRnVuY3Rpb25zREUgOiBwb3B1cEZ1bmN0aW9uc0VOO1xuICAgIHRoaXMuY2xpY2tGZWF0dXJlID0gdGhpcy5jbGlja0ZlYXR1cmUuYmluZCh0aGlzKTtcblxuICB9XG4gIGNsaWNrRmVhdHVyZSAoZXZlbnQpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgc2NvcGUucHJvcHMuc2V0QWN0aXZlSWQoc2NvcGUucHJvcHMuZmVhdHVyZS5pZCk7XG4gICAgc2NvcGUucHJvcHMuZmVhdHVyZVNvdXJjZS5mb3JFYWNoRmVhdHVyZSgodG1wRmVhdHVyZSkgPT4ge1xuICAgICAgbGV0IGxheWVyID0gdW5kZWZpbmVkO1xuICAgICAgbGV0IHJvdXRlckxheWVycyA9IHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5yb3V0ZXJMYXllcnM7XG4gICAgICBpZiAoc2NvcGUucHJvcHMucm91dGVNb2RlID09PSBcImFyZWFcIikge1xuICAgICAgICBsYXllciA9IHJvdXRlckxheWVyc1tzY29wZS5wcm9wcy5sYXllckFyZWFdW3Njb3BlLnByb3BzLmxheWVyVmFsdWVBcmVhXS5sYXllckRhdGE7XG4gICAgICB9IGVsc2UgaWYgKHNjb3BlLnByb3BzLnJvdXRlTW9kZSA9PT0gXCJyb3V0ZVwiKSB7XG4gICAgICAgIGxheWVyID0gcm91dGVyTGF5ZXJzW3Njb3BlLnByb3BzLmxheWVyUm91dGVdW3Njb3BlLnByb3BzLmxheWVyVmFsdWVSb3V0ZV0ubGF5ZXJEYXRhO1xuICAgICAgfVxuICAgICAgaWYgKHRtcEZlYXR1cmUuZ2V0KCd0aWQnKSA9PT0gc2NvcGUucHJvcHMuZmVhdHVyZS5pZCkge1xuICAgICAgICBsZXQgY2xpY2tTdHlsZUlkID0gc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLmNsaWNrTG9jc3R5bGU7XG4gICAgICAgIGlmIChjbGlja1N0eWxlSWQpIHtcbiAgICAgICAgICBpZiAoIXNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIuYXJyTG9jU3R5bGVzW2NsaWNrU3R5bGVJZF0pIHtcbiAgICAgICAgICAgIHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIubG9hZExvY2F0aW9uU3R5bGVzKFtjbGlja1N0eWxlSWRdLCB7XG4gICAgICAgICAgICAgIGRvbmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBsZXQgc3R5bGUgPSBzY29wZS5wcm9wcy5tYXBDb250cm9sbGVyLnByb3h5LmxvY2F0aW9uU3R5bGVDb250cm9sbGVyLmFyckxvY1N0eWxlc1tjbGlja1N0eWxlSWRdLnN0eWxlO1xuICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlmIGZlYXR1cmUgaXMgc3RpbGwgY2xpY2tlZFxuICAgICAgICAgICAgICAgIHNjb3BlLm1hcFNlbGVjdEludGVyYWN0aW9uLmdldEZlYXR1cmVzKCkuZm9yRWFjaChmdW5jdGlvbiAoZWxlbSwgaW5kZXgsIGFycmF5KSB7XG4gICAgICAgICAgICAgICAgICBpZiAoZWxlbSA9PT0gdG1wRmVhdHVyZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBmZWF0dXJlIGlzIHN0aWxsIGNsaWNrZWQsIHN0eWxlIGl0IGFjY29yZGluZ2x5XG4gICAgICAgICAgICAgICAgICAgIHRtcEZlYXR1cmUuc2V0U3R5bGUoc3R5bGUpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IHN0eWxlID0gc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5hcnJMb2NTdHlsZXNbY2xpY2tTdHlsZUlkXS5zdHlsZTtcbiAgICAgICAgICAgIHRtcEZlYXR1cmUuc2V0U3R5bGUoc3R5bGUpO1xuICAgICAgICAgICAgaWYgKHRtcEZlYXR1cmUuZ2V0R2VvbWV0cnkoKS5nZXRUeXBlKCkgPT0gXCJQb2x5Z29uXCIpIHtcbiAgICAgICAgICAgICAgc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5tYXAuZ2V0VmlldygpLmZpdCh0bXBGZWF0dXJlLmdldEdlb21ldHJ5KCkuZ2V0RXh0ZW50KCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIubWFwLmdldFZpZXcoKS5zZXRDZW50ZXIodG1wRmVhdHVyZS5nZXRHZW9tZXRyeSgpLmdldENvb3JkaW5hdGVzKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZmFsc2UgJiYgc2NvcGUuYmVzdEZlYXR1cmVJZHMuaW5jbHVkZXModG1wRmVhdHVyZS5nZXQoJ3RpZCcpKSkge1xuICAgICAgICAgIGxldCBsb2NzdHlsZSA9IHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIuZGF0YS5wcmlvcml0eUxvY3N0eWxlO1xuICAgICAgICAgIHRtcEZlYXR1cmUuc2V0U3R5bGUoc2NvcGUucHJvcHMubWFwQ29udHJvbGxlci5wcm94eS5sb2NhdGlvblN0eWxlQ29udHJvbGxlci5hcnJMb2NTdHlsZXNbbG9jc3R5bGVdLnN0eWxlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0bXBGZWF0dXJlLnNldFN0eWxlKHNjb3BlLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIuYXJyTG9jU3R5bGVzW2xheWVyLmxvY3N0eWxlXS5zdHlsZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICAvLyByZWZyZXNoIGNzcyBjbGFzc2VzXG4gICAgalF1ZXJ5KHRoaXMpLnBhcmVudCgpLmNoaWxkcmVuKCdsaScpLmVhY2goZnVuY3Rpb24gKGluZGV4LCBlbGVtZW50KSB7XG4gICAgICBqUXVlcnkoZWxlbWVudCkuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLklOQUNUSVZFKS5yZW1vdmVDbGFzcyhjc3NDb25zdGFudHMuQUNUSVZFKTtcbiAgICB9KTtcbiAgICBqUXVlcnkodGhpcykuYWRkQ2xhc3MoY3NzQ29uc3RhbnRzLkFDVElWRSkucmVtb3ZlQ2xhc3MoY3NzQ29uc3RhbnRzLklOQUNUSVZFKTtcbiAgICAvLyBqUXVlcnkoXCJkaXYuYzRnLXBvcnRzaWRlLWNvbnRlbnQtY29udGFpbmVyXCIpLmFuaW1hdGUoe3Njcm9sbFRvcDogZW50cnkub2Zmc2V0VG9wIC0gMzAwfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGxldCBjdXJyZW50RmVhdHVyZSA9IG51bGw7XG4gICAgdGhpcy5wcm9wcy5mZWF0dXJlU291cmNlLmZvckVhY2hGZWF0dXJlKGZ1bmN0aW9uIChmZWF0dXJlKSB7XG4gICAgICBpZiAoZmVhdHVyZS5nZXQoJ3RpZCcpID09PSBzY29wZS5wcm9wcy5mZWF0dXJlLmlkKSB7XG4gICAgICAgIGN1cnJlbnRGZWF0dXJlID0gZmVhdHVyZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBsZXQgZmVhdHVyZUVudHJ5Q29udGVudCA9IFwiXCI7XG4gICAgbGV0IG9iakhvb2sgPSBudWxsO1xuICAgIGlmIChjdXJyZW50RmVhdHVyZSkge1xuICAgICAgaWYgKHRoaXMucHJvcHMudHlwZSA9PT0gXCJvdmVycGFzc1wiKSB7XG4gICAgICAgIGlmIChjdXJyZW50RmVhdHVyZS5nZXQoJ2xvY3N0eWxlJykpIHtcbiAgICAgICAgICBsZXQgc3R5bGVJZCA9IGN1cnJlbnRGZWF0dXJlLmdldCgnbG9jc3R5bGUnKTtcbiAgICAgICAgICBsZXQgc3R5bGVTcmMgPSAnJztcbiAgICAgICAgICBsZXQgbG9jc3R5bGUgPSB0aGlzLnByb3BzLm1hcENvbnRyb2xsZXIucHJveHkubG9jYXRpb25TdHlsZUNvbnRyb2xsZXIuYXJyTG9jU3R5bGVzW3N0eWxlSWRdO1xuICAgICAgICAgIGlmIChsb2NzdHlsZSAmJiBsb2NzdHlsZS5sb2NTdHlsZUFycikge1xuICAgICAgICAgICAgc3R5bGVTcmMgPSBsb2NzdHlsZS5sb2NTdHlsZUFyci5zdHlsZXR5cGUgPT09IFwiY3VzdF9pY29uXCIgPyBsb2NzdHlsZS5sb2NTdHlsZUFyci5pY29uX3NyYyA6IGxvY3N0eWxlLmxvY1N0eWxlQXJyLnN0eWxldHlwZSA9PT0gXCJjdXN0X2ljb25fc3ZnXCIgPyBsb2NzdHlsZS5sb2NTdHlsZUFyci5zdmdTcmMgOiBcIlwiO1xuICAgICAgICAgIH1cbiAgICAgICAgICBmZWF0dXJlRW50cnlDb250ZW50ID0gdGhpcy5wb3B1cEZ1bmN0aW9ucy5mblN0YW5kYXJkSW5mb1BvcHVwKGN1cnJlbnRGZWF0dXJlLCBzdHlsZVNyYyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy50eXBlID09PSBcIm5vdE92ZXJwYXNzXCIpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZmVhdHVyZSAmJiB0aGlzLnByb3BzLmZlYXR1cmUucG9wdXApIHtcbiAgICAgICAgICBmZWF0dXJlRW50cnlDb250ZW50ID0gdGhpcy5wcm9wcy5mZWF0dXJlLnBvcHVwO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgbGF5ZXJWYWx1ZSA9IHRoaXMucHJvcHMucm91dGVNb2RlID09PSBcInJvdXRlXCIgPyB0aGlzLnByb3BzLmxheWVyVmFsdWVSb3V0ZSA6IHRoaXMucHJvcHMubGF5ZXJWYWx1ZUFyZWE7XG4gICAgICAgIG9iakhvb2sgPSAge1xuICAgICAgICAgIGVudHJ5OiBcIlwiLFxuICAgICAgICAgIGZlYXR1cmU6IHRoaXMucHJvcHMuZmVhdHVyZSxcbiAgICAgICAgICAvLyB2YWx1ZXM6IHZhbHVlcyxcbiAgICAgICAgICBsYWJlbHM6IFsnbmFtZSddLFxuICAgICAgICAgIC8vIHJvdXRlcjogc2NvcGUsXG4gICAgICAgICAgYWN0aXZlTGF5ZXJWYWx1ZTogbGF5ZXJWYWx1ZVxuICAgICAgICB9O1xuICAgICAgICB1dGlscy5jYWxsSG9va0Z1bmN0aW9ucyh3aW5kb3cuYzRnTWFwc0hvb2tzLnJvdXRlUGx1Z2luRW50cnksIG9iakhvb2spO1xuICAgICAgICBmZWF0dXJlRW50cnlDb250ZW50ID0gb2JqSG9vay5lbnRyeTtcbiAgICAgIH1cbiAgICAgIGxldCBlbGVtZW50ID0ge19faHRtbDogZmVhdHVyZUVudHJ5Q29udGVudCArIFwiPGJyPlwifTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxsaSByZWY9e3RoaXMucHJvcHMucmVmUHJvcH0gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e2VsZW1lbnR9IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5hY3RpdmUgPyBcInJvdXRlLWZlYXR1cmVzLWxpc3QtZWxlbWVudCBjNGctYWN0aXZlXCI6IFwicm91dGUtZmVhdHVyZXMtbGlzdC1lbGVtZW50IGM0Zy1pbmFjdGl2ZVwifSBvbk1vdXNlVXA9e3RoaXMuY2xpY2tGZWF0dXJlfS8+XG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufSIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDhcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDIxLCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1JvdXRlckZlYXR1cmVMaXN0SXRlbX0gZnJvbSBcIi4vYzRnLXJvdXRlci1mZWF0dXJlLWxpc3QtaXRlbS5qc3hcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyRmVhdHVyZUxpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc2V0QWN0aXZlSWQgPSB0aGlzLnNldEFjdGl2ZUlkLmJpbmQodGhpcyk7XG4gICAgdGhpcy5mZWF0dXJlcyA9IHt9O1xuICB9XG5cbiAgc2V0QWN0aXZlSWQoYWN0aXZlSWQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1wiYWN0aXZlSWRcIjogYWN0aXZlSWR9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBzb3J0ZWRGZWF0dXJlcyA9IHRoaXMuc29ydEZlYXR1cmVzKCk7XG4gICAgaWYgKCFzb3J0ZWRGZWF0dXJlcykge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWV9PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lfT5cbiAgICAgICAge3RoaXMucHJvcHMuaGVhZGVyfVxuICAgICAgICB7dGhpcy5wcm9wcy5zd2l0Y2hlcn1cbiAgICAgICAgPHVsPlxuICAgICAgICAgIHtzb3J0ZWRGZWF0dXJlcy5tYXAoKGZlYXR1cmUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmZlYXR1cmVzW2ZlYXR1cmUuaWRdID0gUmVhY3QuY3JlYXRlUmVmKCk7XG4gICAgICAgICAgICByZXR1cm4gPFJvdXRlckZlYXR1cmVMaXN0SXRlbSBmZWF0dXJlPXtmZWF0dXJlfSByZWZQcm9wPXt0aGlzLmZlYXR1cmVzW2ZlYXR1cmUuaWRdfSB0eXBlPXt0aGlzLnByb3BzLmZlYXR1cmVMaXN0LnR5cGV9IGFjdGl2ZT17dGhpcy5wcm9wcy5hY3RpdmVJZCA9PT0gZmVhdHVyZS5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZUlkPXt0aGlzLnByb3BzLnNldEFjdGl2ZUlkfSByb3V0ZU1vZGU9e3RoaXMucHJvcHMucm91dGVNb2RlfSBtYXBDb250cm9sbGVyPXt0aGlzLnByb3BzLm1hcENvbnRyb2xsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXllclJvdXRlPXt0aGlzLnByb3BzLmxheWVyUm91dGV9IGxheWVyQXJlYT17dGhpcy5wcm9wcy5sYXllckFyZWF9IGZlYXR1cmVTb3VyY2U9e3RoaXMucHJvcHMuZmVhdHVyZVNvdXJjZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9IGxheWVyVmFsdWVSb3V0ZT17dGhpcy5wcm9wcy5sYXllclZhbHVlUm91dGV9IGxheWVyVmFsdWVBcmVhPXt0aGlzLnByb3BzLmxheWVyVmFsdWVBcmVhfS8+XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSwgc25hcHNob3QpIHtcbiAgICBpZiAocHJldlByb3BzLmFjdGl2ZUlkICE9PSB0aGlzLnByb3BzLmFjdGl2ZUlkKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5hY3RpdmVJZCkge1xuICAgICAgICBjb25zdCByZWYgPSB0aGlzLmZlYXR1cmVzW3RoaXMucHJvcHMuYWN0aXZlSWRdO1xuICAgICAgICAvLyByZWYuY3VycmVudC5zY3JvbGxJbnRvVmlldyh7YmVoYXZpb3I6ICdzbW9vdGgnLCBibG9jazogJ3N0YXJ0J30pO1xuICAgICAgICBsZXQgc2Nyb2xsRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYzRnLXJvdXRlci1yZXN1bHQtY29udGFpbmVyXCIpO1xuICAgICAgICBzY3JvbGxFbGVtZW50LnNjcm9sbFRvKDAsIHJlZi5jdXJyZW50Lm9mZnNldFRvcCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc29ydEZlYXR1cmVzKCkge1xuICAgIGNvbnN0IHJvdXRlckxheWVycyA9IHRoaXMucHJvcHMubWFwQ29udHJvbGxlci5kYXRhLnJvdXRlckxheWVycztcbiAgICBjb25zdCBjdXJyZW50TGF5ZXIgPSB0aGlzLnByb3BzLnJvdXRlTW9kZSA9PT0gXCJhcmVhXCIgPyB0aGlzLnByb3BzLmxheWVyQXJlYSA6IHRoaXMucHJvcHMubGF5ZXJSb3V0ZTtcbiAgICBjb25zdCBjdXJyZW50TGF5ZXJWYWx1ZSA9IHRoaXMucHJvcHMucm91dGVNb2RlID09PSBcImFyZWFcIiA/IHRoaXMucHJvcHMubGF5ZXJWYWx1ZUFyZWEgOiB0aGlzLnByb3BzLmxheWVyVmFsdWVSb3V0ZTtcblxuICAgIGlmICghcm91dGVyTGF5ZXJzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgY3VycmVudExhYmVsUHJvcCA9IHJvdXRlckxheWVyc1tjdXJyZW50TGF5ZXJdW2N1cnJlbnRMYXllclZhbHVlXVsnbWFwTGFiZWwnXTtcbiAgICBsZXQgZmVhdHVyZXMgPSBbLi4udGhpcy5wcm9wcy5mZWF0dXJlTGlzdC5mZWF0dXJlc107XG4gICAgcmV0dXJuIGZlYXR1cmVzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIGxldCBhVmFsdWVzID0gYSwgYlZhbHVlcyA9IGI7XG4gICAgICBpZiAoYS50YWdzICYmIGIudGFncykge1xuICAgICAgICBhVmFsdWVzID0gYS50YWdzO1xuICAgICAgICBiVmFsdWVzID0gYi50YWdzO1xuICAgICAgfVxuICAgICAgaWYgKGlzTmFOKGFWYWx1ZXNbY3VycmVudExhYmVsUHJvcF0pKSB7XG4gICAgICAgIC8vIHN0cmluZyB2YWx1ZXNcbiAgICAgICAgcmV0dXJuIGFWYWx1ZXNbY3VycmVudExhYmVsUHJvcF0gPCBiVmFsdWVzW2N1cnJlbnRMYWJlbFByb3BdID8gLTEgOiAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gbnVtZXJpYyB2YWx1ZXNcbiAgICAgICAgcmV0dXJuIGFWYWx1ZXNbY3VycmVudExhYmVsUHJvcF0gLSBiVmFsdWVzW2N1cnJlbnRMYWJlbFByb3BdO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==
>>>>>>> Several version preps