<?php

/**
 * con4gis - the gis-kit
 *
 * @version   php 7
 * @package   con4gis
 * @author    con4gis contributors (see "authors.txt")
 * @license   GNU/LGPL http://opensource.org/licenses/lgpl-3.0.html
 * @copyright Küstenschmiede GmbH Software & Design 2011 - 2018
 * @link      https://www.kuestenschmiede.de
 */

namespace con4gis\MapsBundle\Resources\contao\modules\api;


use con4gis\MapsBundle\Resources\contao\models\C4gMapsModel;

if (!defined('TL_ROOT')) die('You cannot access this file directly!');

/**
 * Class LayerContentDataApi
 * @package con4gis\MapsBundle\Resources\contao\modules\api
 */
class LayerContentDataApi extends \Frontend
{
    /**
     * Fetches the content data with a certain bounding box.
     *
     * @param  array $arrInput Fragments from request uri
     * @return mixed           JSON data
     */

    public function __construct()
    {
        $this->import('con4gis\MapsBundle\Resources\contao\modules\api\InfoWindowApi');
    }

    public function generate($layerId, $extent)
    {
        return $this->getLayerData($layerId, $extent);
    }

    /**
     * Returns the layer data, if in extent.
     *
     * @param int $id
     */
    protected function getLayerData($intId, $extent)
    {
        $objLayer = C4gMapsModel::findById($intId);
        $sourceTable = $objLayer->tab_source;
        $arrConfig = $GLOBALS['con4gis']['maps']['sourcetable'][$sourceTable];
        $minX = explode(',',explode(';',$extent)[0])[0];
        $minY = explode(',',explode(';',$extent)[0])[1];
        $maxX = explode(',',explode(';',$extent)[1])[0];
        $maxY = explode(',',explode(';',$extent)[1])[1];
        $andbewhereclause = $objLayer->tab_whereclause ? ' AND ' .$objLayer->tab_whereclause : '';
        $sqlLoc = " WHERE ".$arrConfig['geox'].">".$minX." AND ".$arrConfig['geox']."<".$maxX." AND ".$arrConfig['geoy'].">".$minY." AND ".$arrConfig['geoy']."<".$maxY;
        $sqlSelect = $arrConfig['geox']." AS geox,".$arrConfig['geoy']." AS geoy";
        $sqlSelect = $arrConfig['locstyle'] ? $sqlSelect . ", " . $arrConfig['locstyle'] . " AS locstyle" : $sqlSelect;
        $sqlSelect = $arrConfig['label'] ? $sqlSelect . ", " . $arrConfig['label'] . " AS label" : $sqlSelect;
        $sqlSelect = $arrConfig['tooltip'] ? $sqlSelect . ", " . $arrConfig['tooltip'] . " AS tooltip" : $sqlSelect;
        $sqlWhere = $arrConfig['sqlwhere'] ? $arrConfig['sqlwhere'] : '';
        $sqlAnd = $sqlWhere ? ' AND ' : '';
        $strQuery = "SELECT id,". $sqlSelect ." FROM ".$sourceTable . $sqlLoc . $sqlAnd . $sqlWhere .$andbewhereclause;
        $result = \Database::getInstance()->prepare($strQuery)->execute()->fetchAllAssoc();
        $arrContent = [];

        return $result;
    }

}
