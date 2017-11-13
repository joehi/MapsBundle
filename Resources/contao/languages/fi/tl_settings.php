<?php

/**
 * con4gis - the gis-kit
 *
 * @version   php 7
 * @package   con4gis
 * @author    con4gis contributors (see "authors.txt")
 * @license   GNU/LGPL http://opensource.org/licenses/lgpl-3.0.html
 * @copyright Küstenschmiede GmbH Software & Design 2011 - 2017.
 * @link      https://www.kuestenschmiede.de
 */

$GLOBALS['TL_LANG']['tl_settings']['disabledC4gMapObjects'] = array("Deaktivoidut lähteet", "Valitse lähteet jotka haluat poistaa backendissa." );
$GLOBALS['TL_LANG']['tl_settings']['c4g_maps_legend'] = "Kartat (con4gis)";

$GLOBALS['TL_LANG']['tl_settings']['caching'] = array("Activate caching", "Activate caching for con4gis-services. Usability depends on the special case and may need testing.");

/** References */
$GLOBALS['TL_LANG']['tl_settings']['references']['baseLayerService'] ='Baselayer';
$GLOBALS['TL_LANG']['tl_settings']['references']['layerService'] ='Map structures';
$GLOBALS['TL_LANG']['tl_settings']['references']['layerContentService'] ='Map data';
$GLOBALS['TL_LANG']['tl_settings']['references']['editorService'] ='editor';
$GLOBALS['TL_LANG']['tl_settings']['references']['locationStyleService'] ='Location styles';
$GLOBALS['TL_LANG']['tl_settings']['references']['infoWindowService'] ='Popup data';
$GLOBALS['TL_LANG']['tl_settings']['references']['nominatimService'] ='Nominatim search';
$GLOBALS['TL_LANG']['tl_settings']['references']['reverseNominatimService'] ='Nominatim reverse search';
$GLOBALS['TL_LANG']['tl_settings']['references']['routingService'] ='Routing';