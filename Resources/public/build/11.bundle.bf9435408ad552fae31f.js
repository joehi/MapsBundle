(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{429:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(17),l=((r=a)&&r.__esModule,n(90)),u=(n(38),n(89));
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
var i=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),r=(0,u.getLanguage)(e.mapController.data),o=new l.FullScreen({label:" ",labelActive:" ",tipLabel:r.CTRL_FULLSCREEN,target:n.props.target}),a=e.mapController;return a.mapsControls.controls.fullscreen=o,a.map.addControl(o),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"render",value:function(){return null}}]),t}(a.Component);t.default=i}}]);