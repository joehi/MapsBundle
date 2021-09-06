/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2021, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

import React, {Component, Suspense} from "react";
import {Control} from "ol/control";
import {cssConstants} from "./../c4g-maps-constant.js";
import {Cluster} from "ol/source";
import {StarboardScopeItem} from "./c4g-starboard-scope-item.jsx";
import {getLanguage} from "./../c4g-maps-i18n";
const Titlebar = React.lazy(() => import("./c4g-titlebar.jsx"));
import {utils} from "../c4g-maps-utils";


export default class StarboardScope extends Component {

  constructor(props) {
    super(props);
    const scope = this;

    //specific code for the control
    let element = document.createElement('div');
    let button = document.createElement('button');
    this.langConstants = getLanguage(props.mapController.data);
    button.title = this.langConstants.CTRL_STARBOARDSCOPE;
    element.className = "c4g-starboardscope-control ol-unselectable ol-control ";
    if (props.open) {
      element.className += "c4g-open";
    } else {
      element.className += "c4g-close";
    }
    button.innerText = "*";
    element.appendChild(button);
    jQuery(element).on('click', function (event) {
      if (scope.state.open) {
        scope.close();
      } else {
        scope.open();
      }
    });
    let mapController = props.mapController;
    let control = new Control({element: element, target: props.target});
    mapController.mapsControls.controls.baselayerSwitcher = control;
    mapController.map.addControl(control);
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);


    this.getFeaturesInScope = this.getFeaturesInScope.bind(this)
    this.setSingleFeature = this.setSingleFeature.bind(this)
    this.view = props.mapController.map.getView();
    this.view.on('change', (evt) => {
      this.getFeaturesInScope(evt)
    })
    this.state = {
      open: props.open || false,
      className: props.className || "c4g-starboardscope-panel",
      control: control,
      features: []
    };
  }

  getFeaturesInScope (evt) {
    const mapController = this.props.mapController;
    const layerController = mapController.proxy.layerController;

    if (this.state.open && this._isMounted) {
      let source = layerController.vectorSource instanceof Cluster ? layerController.vectorSource.getSource(): layerController.vectorSource;
      let extent = evt.target.calculateExtent();
      let features = source.getFeaturesInExtent(extent);
      this.setState({
        features: features
      });
    }
  }
  setSingleFeature (feature, id) {
    let features = this.state.features;
    features[id] = feature;
    this.setState({features: features});
  }

  render() {
    if (this.state.open) {
      jQuery(this.state.control.element).addClass("c4g-open").removeClass("c4g-close");
      jQuery(".c4g-starboardscope-container").addClass("c4g-open").removeClass("c4g-close");
    } else {
      jQuery(this.state.control.element).removeClass("c4g-open").addClass("c4g-close");
      jQuery(".c4g-starboardscope-container").removeClass("c4g-open").addClass("c4g-close");
    }
    return (
      <div className={cssConstants.STARBOARD_WRAPPER}>
        <Suspense fallback={<div>Loading...</div>}>
          <Titlebar wrapperClass={"c4g-starboardscope-header"} headerClass={"c4g-starboardscope-headline"}
                    header={this.langConstants.ELEMENTS_SCOPE} closeBtnClass={"c4g-starboardscope-close"} closeBtnCb={this.close} closeBtnTitle={this.langConstants.CLOSE}/>
        </Suspense>
        <div className={"c4g-starboardscope-content-container"}>
          <ul>
            {this.state.features.map((feature, index) => {
              if (index < 20) {
                return <StarboardScopeItem mapController={this.props.mapController} setSingleFeature={this.setSingleFeature} index={index} key={index} feature={feature}/>
              }
            })}
          </ul>
        </div>
      </div>
    );
  }

  open() {
    this.setState({open: true}, () => {
      let evt = {};
      evt.target = this.view;
      this.getFeaturesInScope(evt);
    });
    this.props.mapController.setOpenComponent(this);
  }

  close() {
    this.setState({open: false});
  }
  componentDidMount() {
    this._isMounted = true;
  }
  componentWillUnmount() {
    this._isMounted = false;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.mapController.data.caching && !this.state.open) {
      let panelVal = utils.getValue('panel');
      if (panelVal === this.constructor.name) {
        utils.storeValue('panel', "");
      }
    }
  }
}