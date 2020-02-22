/*
 * This file is part of con4gis,
 * the gis-kit for Contao CMS.
 *
 * @package    con4gis
 * @version    7
 * @author     con4gis contributors (see "authors.txt")
 * @license    LGPL-3.0-or-later
 * @copyright  Küstenschmiede GmbH Software & Design
 * @link       https://www.con4gis.org
 */

import {cssConstants} from "./c4g-maps-constant";
import {getLanguage} from "./c4g-maps-i18n";
import {Control} from "ol/control";
import {Graticule} from "ol";

'use strict';
export class Grid extends Control {

  /**
   * Control to toggle a grid on the map.
   *
   * @constructor
   * @extends  {ol.control.Control}
   *
   * @param    {Object}              opt_options  *optional* control options.
   */
  constructor (opt_options) {
    var options = opt_options || {};

    var element,
        button;

    let langConstants = getLanguage(options.mapController.data);
    // default options
    options = jQuery.extend({
      className: cssConstants.GRATICULE,
      switchable: true,
      tipLabel: langConstants.CTRL_GRID,
      label: '#',
      disableLabel: '[]',
      showLabels: true,
      map: options.mapController.map,
      visible: false
    }, options);
    super(opt_options);
    var self = this;
    var objGrid = new Graticule(options);

    // @TODO move functions to prototype?
    //
    // function to enable the grid
    var enable = function () {
      objGrid.setVisible(true);
      jQuery(element).addClass(cssConstants.ENABLED);
      // if (options.caching) {
      //     c4g.maps.utils.storeValue('grid', '1');
      // }
    };

    // function to disable the grid
    var disable = function () {
      objGrid.setVisible(false);
      jQuery(element).removeClass(cssConstants.ENABLED);
      // if (options.caching) {
      //     c4g.maps.utils.storeValue('grid', '0');
      // }
    };

    // function to toggle the grid
    var toggle = function (event) {
      event.stopPropagation();
      // loose focus, otherwise it looks messy
      this.blur();
      if (objGrid.getVisible()) {
        disable();
      } else {
        enable();
      }
    };

    // wrapper div
    element = document.createElement('div');
    element.className = options.className + ' ' + cssConstants.OL_UNSELECTABLE + ' ' + cssConstants.OL_CONTROL;

    if (options.switchable) {
      // button
      button = document.createElement('button');
      button.title = options.tipLabel;
      element.appendChild(button);

      // set onClick to the toggle-function
      button.addEventListener('click', toggle, {useCapture: false, passive: true});
      button.addEventListener('touchstart', toggle, {useCapture: false, passive: true});
    }

    options.mapController.map.addLayer(objGrid);

    // inheritance-stuff
    Control.call(this, {
      element: element,
      target: options.target
    });
  }

}