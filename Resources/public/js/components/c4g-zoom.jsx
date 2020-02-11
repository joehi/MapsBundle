/*
 * This file is part of con4gis,
 * the gis-kit for Contao CMS.
 *
 * @package   	con4gis
 * @version        6
 * @author  	    con4gis contributors (see "authors.txt")
 * @license 	    LGPL-3.0-or-later
 * @copyright 	Küstenschmiede GmbH Software & Design
 * @link              https://www.con4gis.org
 *
 */
import React, { Component } from "react";
import ReactDOM from "react-dom";
import {Control} from "ol/control";
import {cssConstants} from "./../c4g-maps-constant";
import {utils} from "../c4g-maps-utils";
import {getLanguage} from "../c4g-maps-i18n";
import {Zoom as OlZoom} from "ol/control";

export class Zoom extends Component {
  constructor(props) {
    super(props);

    let controlContainerTopLeft = document.querySelector('.' + cssConstants.CONTROL_CONTAINER_TL + ' .' + cssConstants.OL_UNSELECTABLE);
    let langConstants = getLanguage(props.mapController.data);
    let control = new OlZoom({
      zoomInLabel: ' ',
      zoomOutLabel: ' ',
      zoomInTipLabel: langConstants.CTRL_ZOOM_IN,
      zoomOutTipLabel: langConstants.CTRL_ZOOM_OUT,
      target: controlContainerTopLeft
    });

    let mapController = props.mapController;
    mapController.mapsControls.controls.zoom = control;
    mapController.map.addControl(control);
  }

  render() {
    return null;
  }

}