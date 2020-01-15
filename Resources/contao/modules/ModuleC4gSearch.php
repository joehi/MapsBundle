<?php


namespace con4gis\MapsBundle\Resources\contao\modules;


use con4gis\CoreBundle\Classes\C4GUtils;
use con4gis\CoreBundle\Classes\ResourceLoader;
use con4gis\CoreBundle\Resources\contao\models\C4gSettingsModel;
use con4gis\MapsBundle\Resources\contao\models\C4gMapProfilesModel;
use Contao\Controller;
use Contao\System;

class ModuleC4gSearch extends \Module
{
    /**
     * Template
     * @var string
     */
    protected $strTemplate = 'c4g_search';

    /**
     * Generate content element
     */
    public function generate()
    {
        if (TL_MODE == 'BE') {
            $objTemplate = new \BackendTemplate('be_wildcard');
            $objTemplate->wildcard = '### '.$GLOBALS['TL_LANG']['FMD']['c4g_travel_costs'][0].' ###';
            $objTemplate->title = $this->headline;
            $objTemplate->id = $this->id;
            $objTemplate->link = $this->title;
            $objTemplate->href = 'contao/main.php?do=themes&amp;table=tl_module&amp;act=edit&amp;id=' . $this->id;
            return $objTemplate->parse();
        }
        return parent::generate();
    }

    /**
     * Generate module
     */
    protected function compile()
    {
        $pageId = $this->mapPage;
        $pageUrl = Controller::replaceInsertTags("{{link_url::" . $pageId . "}}");
        ResourceLoader::loadJavaScriptDeferred('c4g-search', "/bundles/con4gismaps/build/c4g-search.js");
        ResourceLoader::loadCssResourceDeferred("/bundles/con4gismaps/css/c4g-search-general.css");

        //ToDo use contao components
        ResourceLoader::loadJavaScriptDeferred('jquery-ui', "/bundles/con4giscore/vendor/jQuery/jquery-ui-1.12.1.custom/jquery-ui.js");
        ResourceLoader::loadCssRessource('jquery-ui-css', "/bundles/con4giscore/vendor/jQuery/jquery-ui-1.12.1.custom/jquery-ui.css");

        $template = $this->Template;
        $objSettings = C4gSettingsModel::findSettings();
        $objMapsProfile = C4gMapProfilesModel::findByPk($objSettings->defaultprofile);
        $urlMap = Controller::replaceInsertTags("{{link_url::" . $this->c4g_map_site_id . "}}");
        $arrSettings = [];
        if($objMapsProfile->geosearchParams){
            $arrSettings['geosearchParams'] = [];
            foreach(unserialize($objMapsProfile->geosearchParams) as $geosearchParam){
                $arrSettings['geosearchParams'] = array_merge($arrSettings['geosearchParams'], [$geosearchParam['keys'] => $geosearchParam['params']]);
            }
        }
        $arrSettings['mapUrl'] = $urlMap;
        $arrSettings['moduleId'] = $this->id;
        $arrSettings['searchPlaceholder'] = $this->c4g_map_placeholder;
        $arrSettings['zoomLevel'] = $this->c4g_map_zoomlevel ?: 10;
        $arrSettings['proxyUrl'] = $objSettings->con4gisIoUrl;
        $arrSettings['keyForward'] = C4GUtils::getKey($objSettings,2);
        $arrSettings['keyAutocomplete'] = C4GUtils::getKey($objSettings,7);

        $template->objSettings = $arrSettings;
    }
}