(self["webpackChunkmapsbundle"] = self["webpackChunkmapsbundle"] || []).push([["Resources_public_js_components_c4g-router-profile-selection_jsx"],{

/***/ "./Resources/public/js/components/c4g-router-profile-selection.jsx":
/*!*************************************************************************!*\
  !*** ./Resources/public/js/components/c4g-router-profile-selection.jsx ***!
  \*************************************************************************/
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

var _routingConstantI18n = __webpack_require__(/*! ./../routing-constant-i18n */ "./Resources/public/js/routing-constant-i18n.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var RouterProfileSelection = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(RouterProfileSelection, _Component);

  var _super = _createSuper(RouterProfileSelection);

  function RouterProfileSelection(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, RouterProfileSelection);
    _this = _super.call(this, props);
    _this.setProfile = _this.setProfile.bind((0, _assertThisInitialized2["default"])(_this));
    _this.profileTranslation = {
      0: "car",
      1: "hgv",
      2: "bike",
      3: "roadbike",
      4: "bike",
      5: "mountainbike",
      6: "bike",
      7: "electricbike",
      8: "foot",
      9: "wander",
      10: "wheelchair",
      11: "hgv",
      12: "scooter",
      13: "motorbike"
    };
    _this.languageConstants = (0, _routingConstantI18n.getLanguage)(props.router.props.mapController.data);
    _this.profileLang = {
      "car": _this.languageConstants.CAR,
      "hgv": _this.languageConstants.TRUCK,
      "bike": _this.languageConstants.BIKE,
      "roadbike": _this.languageConstants.ROADBIKE,
      "mountainbike": _this.languageConstants.MOUNTAINBIKE,
      "electricbike": _this.languageConstants.ELECTRICBIKE,
      "foot": _this.languageConstants.WALK,
      "wander": _this.languageConstants.WANDER,
      "wheelchair": _this.languageConstants.WHEEL,
      "scooter": _this.languageConstants.SCOOT,
      "motorbike": _this.languageConstants.MOTORBIKE
    };
    _this.state = {
      showPopup: !!props.router.mapData.router_profiles_initial
    };
    return _this;
  }

  (0, _createClass2["default"])(RouterProfileSelection, [{
    key: "setProfile",
    value: function setProfile(profile) {
      this.props.router.setProfile(parseInt(profile.id, 10));

      if (!this.props.router.mapData.router_profiles_initial) {
        this.setState({
          showPopup: false
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      if (this.props.profiles.length === 1) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "c4g-router-profile-wrapper"
        }, /*#__PURE__*/_react["default"].createElement("button", {
          className: "c4g-router-profile-" + this.profileTranslation[this.props.currentProfile] + " c4g-active",
          key: this.props.currentProfile,
          title: this.profileLang[this.profileTranslation[this.props.currentProfile]]
        }));
      } else {
        if (this.state.showPopup) {
          return /*#__PURE__*/_react["default"].createElement("div", {
            className: "c4g-router-profile-wrapper c4g-popup"
          }, /*#__PURE__*/_react["default"].createElement("button", {
            className: "c4g-titlebar-close",
            onMouseUp: function onMouseUp() {
              return _this2.setState({
                showPopup: false
              });
            }
          }), this.props.profiles.map(function (item) {
            return /*#__PURE__*/_react["default"].createElement("button", {
              onMouseUp: function onMouseUp() {
                return _this2.setProfile(item);
              },
              className: "c4g-router-profile-" + _this2.profileTranslation[item.id] + (parseInt(item.id, 10) === _this2.props.currentProfile ? " c4g-active" : " c4g-inactive"),
              key: item.id,
              title: _this2.profileLang[_this2.profileTranslation[item.id]]
            });
          }));
        } else {
          return /*#__PURE__*/_react["default"].createElement("div", {
            className: "c4g-router-profile-wrapper"
          }, /*#__PURE__*/_react["default"].createElement("button", {
            onMouseUp: function onMouseUp() {
              return _this2.setState({
                showPopup: true
              });
            },
            className: "c4g-router-profile-" + this.profileTranslation[this.props.currentProfile] + " c4g-active",
            key: this.props.currentProfile,
            title: this.profileLang[this.profileTranslation[this.props.currentProfile]]
          }));
        }
      }
    }
  }, {
    key: "showProfileSelection",
    value: function showProfileSelection() {
      this.setState({
        showPopup: true
      });
    }
  }]);
  return RouterProfileSelection;
}(_react.Component);

exports.default = RouterProfileSelection;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXBzYnVuZGxlLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy9jb21wb25lbnRzL2M0Zy1yb3V0ZXItcHJvZmlsZS1zZWxlY3Rpb24uanN4Il0sIm5hbWVzIjpbIlJvdXRlclByb2ZpbGVTZWxlY3Rpb24iLCJwcm9wcyIsInNldFByb2ZpbGUiLCJiaW5kIiwicHJvZmlsZVRyYW5zbGF0aW9uIiwibGFuZ3VhZ2VDb25zdGFudHMiLCJyb3V0ZXIiLCJtYXBDb250cm9sbGVyIiwiZGF0YSIsInByb2ZpbGVMYW5nIiwiQ0FSIiwiVFJVQ0siLCJCSUtFIiwiUk9BREJJS0UiLCJNT1VOVEFJTkJJS0UiLCJFTEVDVFJJQ0JJS0UiLCJXQUxLIiwiV0FOREVSIiwiV0hFRUwiLCJTQ09PVCIsIk1PVE9SQklLRSIsInN0YXRlIiwic2hvd1BvcHVwIiwibWFwRGF0YSIsInJvdXRlcl9wcm9maWxlc19pbml0aWFsIiwicHJvZmlsZSIsInBhcnNlSW50IiwiaWQiLCJzZXRTdGF0ZSIsInByb2ZpbGVzIiwibGVuZ3RoIiwiY3VycmVudFByb2ZpbGUiLCJtYXAiLCJpdGVtIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVBOztBQUNBOzs7Ozs7Ozs7O0lBRXFCQSxzQjs7Ozs7QUFFbkIsa0NBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTtBQUNqQiw4QkFBTUEsS0FBTjtBQUVBLFVBQUtDLFVBQUwsR0FBa0IsTUFBS0EsVUFBTCxDQUFnQkMsSUFBaEIsZ0RBQWxCO0FBRUEsVUFBS0Msa0JBQUwsR0FBMEI7QUFDeEIsU0FBRyxLQURxQjtBQUV4QixTQUFHLEtBRnFCO0FBR3hCLFNBQUcsTUFIcUI7QUFJeEIsU0FBRyxVQUpxQjtBQUt4QixTQUFHLE1BTHFCO0FBTXhCLFNBQUcsY0FOcUI7QUFPeEIsU0FBRyxNQVBxQjtBQVF4QixTQUFHLGNBUnFCO0FBU3hCLFNBQUcsTUFUcUI7QUFVeEIsU0FBRyxRQVZx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LEtBQUwsQ0FBVzhCLGNBQXJDLEdBQXNELGFBQXRELEdBQXNFLGVBQWxJLENBRG5CO0FBRVEsaUJBQUcsRUFBRUUsSUFBSSxDQUFDTixFQUZsQjtBQUVzQixtQkFBSyxFQUFFLE1BQUksQ0FBQ2xCLFdBQUwsQ0FBaUIsTUFBSSxDQUFDTCxrQkFBTCxDQUF3QjZCLElBQUksQ0FBQ04sRUFBN0IsQ0FBakI7QUFGN0IsY0FBUDtBQUdELFdBSkEsQ0FGSCxDQURGO0FBVUQsU0FYRCxNQVdPO0FBQ0wsOEJBQVE7QUFBSyxxQkFBUyxFQUFDO0FBQWYsMEJBQ047QUFBUSxxQkFBUyxFQUFFO0FBQUEscUJBQU0sTUFBSSxDQUFDQyxRQUFMLENBQWM7QUFBQ04seUJBQVMsRUFBRTtBQUFaLGVBQWQsQ0FBTjtBQUFBLGFBQW5CO0FBQTJELHFCQUFTLEVBQUUsd0JBQXdCLEtBQUtsQixrQkFBTCxDQUF3QixLQUFLSCxLQUFMLENBQVc4QixjQUFuQyxDQUF4QixHQUE2RSxhQUFuSjtBQUNRLGVBQUcsRUFBRSxLQUFLOUIsS0FBTCxDQUFXOEIsY0FEeEI7QUFDd0MsaUJBQUssRUFBRSxLQUFLdEIsV0FBTCxDQUFpQixLQUFLTCxrQkFBTCxDQUF3QixLQUFLSCxLQUFMLENBQVc4QixjQUFuQyxDQUFqQjtBQUQvQyxZQURNLENBQVI7QUFJRDtBQUVGO0FBQ0Y7OztXQUVELGdDQUF1QjtBQUNyQixXQUFLSCxRQUFMLENBQWM7QUFBQ04saUJBQVMsRUFBRTtBQUFaLE9BQWQ7QUFDRDs7O0VBbEZpRFksZ0IiLCJmaWxlIjoiUmVzb3VyY2VzX3B1YmxpY19qc19jb21wb25lbnRzX2M0Zy1yb3V0ZXItcHJvZmlsZS1zZWxlY3Rpb25fanN4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLCB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqIEBwYWNrYWdlIGNvbjRnaXNcbiAqIEB2ZXJzaW9uIDhcbiAqIEBhdXRob3IgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAoYykgMjAxMC0yMDIxLCBieSBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2dldExhbmd1YWdlfSBmcm9tIFwiLi8uLi9yb3V0aW5nLWNvbnN0YW50LWkxOG5cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyUHJvZmlsZVNlbGVjdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnNldFByb2ZpbGUgPSB0aGlzLnNldFByb2ZpbGUuYmluZCh0aGlzKTtcblxuICAgIHRoaXMucHJvZmlsZVRyYW5zbGF0aW9uID0ge1xuICAgICAgMDogXCJjYXJcIixcbiAgICAgIDE6IFwiaGd2XCIsXG4gICAgICAyOiBcImJpa2VcIixcbiAgICAgIDM6IFwicm9hZGJpa2VcIixcbiAgICAgIDQ6IFwiYmlrZVwiLFxuICAgICAgNTogXCJtb3VudGFpbmJpa2VcIixcbiAgICAgIDY6IFwiYmlrZVwiLFxuICAgICAgNzogXCJlbGVjdHJpY2Jpa2VcIixcbiAgICAgIDg6IFwiZm9vdFwiLFxuICAgICAgOTogXCJ3YW5kZXJcIixcbiAgICAgIDEwOiBcIndoZWVsY2hhaXJcIixcbiAgICAgIDExOiBcImhndlwiLFxuICAgICAgMTI6IFwic2Nvb3RlclwiLFxuICAgICAgMTM6IFwibW90b3JiaWtlXCJcbiAgICB9O1xuXG4gICAgdGhpcy5sYW5ndWFnZUNvbnN0YW50cyA9IGdldExhbmd1YWdlKHByb3BzLnJvdXRlci5wcm9wcy5tYXBDb250cm9sbGVyLmRhdGEpO1xuXG4gICAgdGhpcy5wcm9maWxlTGFuZyA9IHtcbiAgICAgIFwiY2FyXCI6IHRoaXMubGFuZ3VhZ2VDb25zdGFudHMuQ0FSLFxuICAgICAgXCJoZ3ZcIjogdGhpcy5sYW5ndWFnZUNvbnN0YW50cy5UUlVDSyxcbiAgICAgIFwiYmlrZVwiOiB0aGlzLmxhbmd1YWdlQ29uc3RhbnRzLkJJS0UsXG4gICAgICBcInJvYWRiaWtlXCI6IHRoaXMubGFuZ3VhZ2VDb25zdGFudHMuUk9BREJJS0UsXG4gICAgICBcIm1vdW50YWluYmlrZVwiOiB0aGlzLmxhbmd1YWdlQ29uc3RhbnRzLk1PVU5UQUlOQklLRSxcbiAgICAgIFwiZWxlY3RyaWNiaWtlXCI6IHRoaXMubGFuZ3VhZ2VDb25zdGFudHMuRUxFQ1RSSUNCSUtFLFxuICAgICAgXCJmb290XCI6IHRoaXMubGFuZ3VhZ2VDb25zdGFudHMuV0FMSyxcbiAgICAgIFwid2FuZGVyXCI6IHRoaXMubGFuZ3VhZ2VDb25zdGFudHMuV0FOREVSLFxuICAgICAgXCJ3aGVlbGNoYWlyXCI6IHRoaXMubGFuZ3VhZ2VDb25zdGFudHMuV0hFRUwsXG4gICAgICBcInNjb290ZXJcIjogdGhpcy5sYW5ndWFnZUNvbnN0YW50cy5TQ09PVCxcbiAgICAgIFwibW90b3JiaWtlXCI6IHRoaXMubGFuZ3VhZ2VDb25zdGFudHMuTU9UT1JCSUtFXG4gICAgfTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzaG93UG9wdXA6ICEhcHJvcHMucm91dGVyLm1hcERhdGEucm91dGVyX3Byb2ZpbGVzX2luaXRpYWxcbiAgICB9XG4gIH1cblxuICBzZXRQcm9maWxlKHByb2ZpbGUpIHtcbiAgICB0aGlzLnByb3BzLnJvdXRlci5zZXRQcm9maWxlKHBhcnNlSW50KHByb2ZpbGUuaWQsIDEwKSk7XG4gICAgaWYgKCF0aGlzLnByb3BzLnJvdXRlci5tYXBEYXRhLnJvdXRlcl9wcm9maWxlc19pbml0aWFsKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtzaG93UG9wdXA6IGZhbHNlfSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGlmICh0aGlzLnByb3BzLnByb2ZpbGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT1cImM0Zy1yb3V0ZXItcHJvZmlsZS13cmFwcGVyXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtcImM0Zy1yb3V0ZXItcHJvZmlsZS1cIiArIHRoaXMucHJvZmlsZVRyYW5zbGF0aW9uW3RoaXMucHJvcHMuY3VycmVudFByb2ZpbGVdICsgXCIgYzRnLWFjdGl2ZVwifVxuICAgICAgICAgICAgICAgICAgICAgIGtleT17dGhpcy5wcm9wcy5jdXJyZW50UHJvZmlsZX0gdGl0bGU9e3RoaXMucHJvZmlsZUxhbmdbdGhpcy5wcm9maWxlVHJhbnNsYXRpb25bdGhpcy5wcm9wcy5jdXJyZW50UHJvZmlsZV1dfS8+XG4gICAgICA8L2Rpdj4pO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5zaG93UG9wdXApIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImM0Zy1yb3V0ZXItcHJvZmlsZS13cmFwcGVyIGM0Zy1wb3B1cFwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e1wiYzRnLXRpdGxlYmFyLWNsb3NlXCJ9IG9uTW91c2VVcD17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7c2hvd1BvcHVwOiBmYWxzZX0pfS8+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5wcm9maWxlcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIDxidXR0b24gb25Nb3VzZVVwPXsoKSA9PiB0aGlzLnNldFByb2ZpbGUoaXRlbSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJjNGctcm91dGVyLXByb2ZpbGUtXCIgKyB0aGlzLnByb2ZpbGVUcmFuc2xhdGlvbltpdGVtLmlkXSArIChwYXJzZUludChpdGVtLmlkLCAxMCkgPT09IHRoaXMucHJvcHMuY3VycmVudFByb2ZpbGUgPyBcIiBjNGctYWN0aXZlXCIgOiBcIiBjNGctaW5hY3RpdmVcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5pZH0gdGl0bGU9e3RoaXMucHJvZmlsZUxhbmdbdGhpcy5wcm9maWxlVHJhbnNsYXRpb25baXRlbS5pZF1dfS8+XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJjNGctcm91dGVyLXByb2ZpbGUtd3JhcHBlclwiPlxuICAgICAgICAgIDxidXR0b24gb25Nb3VzZVVwPXsoKSA9PiB0aGlzLnNldFN0YXRlKHtzaG93UG9wdXA6IHRydWV9KX0gY2xhc3NOYW1lPXtcImM0Zy1yb3V0ZXItcHJvZmlsZS1cIiArIHRoaXMucHJvZmlsZVRyYW5zbGF0aW9uW3RoaXMucHJvcHMuY3VycmVudFByb2ZpbGVdICsgXCIgYzRnLWFjdGl2ZVwifVxuICAgICAgICAgICAgICAgICAga2V5PXt0aGlzLnByb3BzLmN1cnJlbnRQcm9maWxlfSB0aXRsZT17dGhpcy5wcm9maWxlTGFuZ1t0aGlzLnByb2ZpbGVUcmFuc2xhdGlvblt0aGlzLnByb3BzLmN1cnJlbnRQcm9maWxlXV19Lz5cbiAgICAgICAgPC9kaXY+KTtcbiAgICAgIH1cblxuICAgIH1cbiAgfVxuXG4gIHNob3dQcm9maWxlU2VsZWN0aW9uKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe3Nob3dQb3B1cDogdHJ1ZX0pO1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==