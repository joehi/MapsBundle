<?php
/*
 * This file is part of con4gis,
 * the gis-kit for Contao CMS.
 *
 * @package    con4gis
 * @version    6
 * @author     con4gis contributors (see "authors.txt")
 * @license    LGPL-3.0-or-later
 * @copyright  Küstenschmiede GmbH Software & Design
 * @link       https://www.con4gis.org
 */
namespace con4gis\MapsBundle\Controller;

use con4gis\CoreBundle\Controller\BaseController;
use con4gis\MapsBundle\Classes\Caches\C4GLayerApiCache;
use con4gis\MapsBundle\Classes\Events\LoadLayersEvent;
use con4gis\MapsBundle\Resources\contao\classes\GeoEditor;
use con4gis\MapsBundle\Resources\contao\classes\GeoPicker;
use con4gis\MapsBundle\Resources\contao\modules\api\BaseLayerApi;
use con4gis\MapsBundle\Resources\contao\modules\api\BaseLayerTileApi;
use con4gis\MapsBundle\Resources\contao\modules\api\EditorApi;
use con4gis\MapsBundle\Resources\contao\modules\api\InfoWindowApi;
use con4gis\MapsBundle\Resources\contao\modules\api\LayerApi;
use con4gis\MapsBundle\Resources\contao\modules\api\LayerContentApi;
use con4gis\MapsBundle\Resources\contao\modules\api\LayerContentDataApi;
use con4gis\MapsBundle\Resources\contao\modules\api\LocationStyleApi;
use con4gis\MapsBundle\Resources\contao\modules\api\NominatimApi;
use con4gis\MapsBundle\Resources\contao\modules\api\ReverseNominatimApi;
use con4gis\MapsBundle\Resources\contao\modules\api\RoutingApi;
use Contao\Database;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use con4gis\CoreBundle\Resources\contao\classes\C4GApiCache;

class MapsController extends BaseController
{
    protected $cacheInstance;

    protected function initialize($withEntityManager = true)
    {
        parent::initialize(false); // TODO: Change the autogenerated stub
    }

    public function infoWindowAction(Request $request, $popupString)
    {
        $response = new JsonResponse();
        if (strpos($popupString, ":") === false) {
            $response->setStatusCode(400);
            return $response;
        } else {
            $infoWindowApi = new InfoWindowApi();
            $returnData = $infoWindowApi->generate($popupString);
            $response->setData($returnData);
            return $response;
        }
    }

    public function nominatimAction(Request $request, $profileId)
    {
        $response = new Response();
        $getParams = $request->query->all();
        $nominatimApi = new NominatimApi();
        $returnData = $nominatimApi->generate($profileId, $getParams);
        $response->setContent($returnData);
        $response->headers->set('Content-Type', 'application/json');
        return $response;
    }

    public function reverseNominatimAction(Request $request, $profileId)
    {
        $response = new Response();
        $getParams = $request->query->all();
        $reverseNominatimApi = new ReverseNominatimApi();
        $returnData = $reverseNominatimApi->generate($profileId, $getParams);
        $response->setContent($returnData);
        $response->headers->set('Content-Type', 'application/json');
        return $response;
    }

    public function routingAction(Request $request, $profileId, $locations)
    {
        $response = new Response();
        $routingApi = new RoutingApi();
        $locations = explode('/', $locations);
        if($request->query->get('profile') !== null){
            $profile = $request->query->get('profile');
        }
        $returnData = $routingApi->generate($profileId, $locations, $profile);
        $response->setContent($returnData);
        $response->headers->set('Content-Type', 'application/json');
        return $response;
    }

    public function oldRoutingAction(Request $request, $profileId)
    {
        $response = new Response();
        $routingApi = new RoutingApi();
        $returnData = $routingApi->generate($profileId, array());
        $response->setContent($returnData);
        $response->headers->set('Content-Type', 'application/json');
        return $response;
    }

    public function geopickerAction(Request $request)
    {
        $geopicker = new GeoPicker();
        $strResponse = $geopicker->generate();
        $response = new Response($strResponse['data'], 200, array('Content-Type: Document'));
        return $response;
    }
}