/*
 * This file is part of con4gis,
 * the gis-kit for Contao CMS.
 *
 * @package   	con4gis
 * @version        6
 * @author  	    con4gis contributors (see "authors.txt")
 * @license 	    LGPL-3.0-or-later
 * @copyright 	    Küstenschmiede GmbH Software & Design
 * @link            https://www.con4gis.org
 *
 */

import React, { Component } from "react";
import {cssConstants} from "./../c4g-maps-constant.js";
import {C4gStarboardLayerElement} from "./c4g-starboard-layer-element";

export class StarboardLayerswitcher extends Component {

  constructor(props) {
    super(props);
    const scope = this;
    this.state = {
      initialized: false,
      layers: [],
      layerStates: {}
    };
    let funcHook = function (itemData) {
      itemData = itemData.layerIds;
      let arrLayers = [];
      let objLayerStates = {};
      for (let i = 0; i < scope.props.mapController.proxy.layerController.rawData.layer.length; i++) {
        let layer = scope.props.mapController.proxy.layerController.rawData.layer[i];
        let childs = false;
        if (layer.childs.length > 0) {
          childs = scope.addChildStates(layer);
        }
        else if (layer.content && layer.content.length > 0) {
          childs = scope.addContentChildStates(layer)
        }
        objLayerStates[layer.id] = {
          name: layer.name,
          hide: !!layer.hide,
          childs: childs
        };
      }
      let tempLayers = scope.props.mapController.proxy.layerController.arrLayers;
      for (let i = 0; i < itemData.length; i++) {
        arrLayers.push(tempLayers[itemData[i]]);
      }
      if (scope.updater.isMounted(scope)) {
        scope.setState({
          "layers": arrLayers,
          "layerStates": objLayerStates
        });
      }
      else{
        scope.state.layers = arrLayers;
        scope.state.layerStates = objLayerStates;
      }
    };
    window.c4gMapsHooks.proxy_layer_drawn.push(funcHook)

  };

  componentDidMount() {
    if (this.props.open) {
      // ToDo there must be a better solution to this...
      window.setTimeout(() => this.props.openfunc(), 500);
    }
  }

  addChildStates (layerElement) {
    let objChildStates = {};
    for (let i = 0; i < layerElement.childs.length; i++) {
      let childs = false;
      if (layerElement.childs[i].childs && layerElement.childs[i].childs.length > 0) {
        childs = this.addChildStates(layerElement.childs[i]);
      }
      else if (layerElement.childs[i].content && layerElement.childs[i].content.length > 0) {
        childs = this.addContentChildStates(layerElement.childs[i])
      }
      objChildStates[layerElement.childs[i].id] = {
        name: layerElement.childs[i].name,
        hide: !!layerElement.childs[i].hide,
        childs: childs,
        content: layerElement.childs[i].content[0],
        contentFeature : false
      };
    }
    return objChildStates;
  };
  addContentChildStates (layerElement) {
    let objChildStates = {};
    if (layerElement.content[0].combinedJSON) {
      let vectorLayer = this.props.mapController.proxy.layerController.arrLayers[layerElement.id].vectorLayer;
      let vectorSource = this.getSource(vectorLayer);
      for (let i = 0; i < layerElement.content[0].data.features.length; i++) {
        let feature = layerElement.content[0].data.features[i];
        let olFeature = vectorSource.getFeatureById(feature.properties.id);
        objChildStates[feature.properties.id] = {
          name: feature.properties.title,
          hide: !!layerElement.hide,
          childs: false,
          content: false,
          contentFeature : olFeature
        }
      }
    }

    return objChildStates;
  };

  getSource = (layer) => {
    if (layer.getSource && layer.getSource()) {
      return layer.getSource();
    }
    else if (layer.getLayers && layer.getLayers()) {
      let layers = layer.getLayers().getArray();
      for (let singleLayer in layers) {
        if(layers.hasOwnProperty(singleLayer)) {
          return this.getSource(layers[singleLayer]);
        }
      }
    }
  };

  callbackFunction = (childData) => {
    this.setState({layerStates: childData})
  };

  render() {
    let closeStarboard = function(){
      let button = jQuery("." + cssConstants.STARBOARD_CONTROL + "> button");
      button.trigger('click');
    };
    return (
      <div className={cssConstants.STARBOARD_WRAPPER}>
        <div className={cssConstants.STARBOARD_TITLEBAR}>
          <div className={cssConstants.CONTROL + " " + cssConstants.STARBOARD_BUTTONBAR}>
            <button
              className={cssConstants.STARBOARD_CLOSE}
              onMouseUp={closeStarboard}
            />
          </div>
        </div>
        <div className={cssConstants.STARBOARD_CONTENT_CONTAINER}>
          <div className="contentHeadline"/>
          <div className={cssConstants.STARBOARD_CONTENT_LAYERSWITCHER}>
            <div className={cssConstants.STARBOARD_LAYERTREE}>
              <ul>
                {this.state.layers.map(item => {
                  if (item.pid === this.props.mapController.data.id) //skip childs of layers
                    return <C4gStarboardLayerElement key={item.id} id={item.id} mapController={this.props.mapController}
                                                     objStates={this.state.layerStates} parentCallback={this.callbackFunction}
                                                     name={item.name} collapsed={!item.initial_opened}/>;
                  return null;
                })}
              </ul>
            </div>
          </div>
        </div>

      </div>
    );
  }
}