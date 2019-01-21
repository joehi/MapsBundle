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

/**
 * Table tl_c4g_map_tables
 */
$GLOBALS['TL_DCA']['tl_c4g_map_tables'] =
[

    // Config
    'config' =>
    [
        'dataContainer'               => 'Table',
        'enableVersioning'            => true,
        'sql'                         =>
        [
            'keys' =>
            [
                'id' => 'primary'
            ]
        ],
        'onload_callback' => [['con4gis\MapsBundle\Classes\Contao\Callbacks\TlC4gMapSettings','addDefaultTables']]
    ],
    'list' => array
    (

        'sorting' => array
        (
            'mode'                    => 2,
            'panelLayout'             => 'filter;sort,search,limit',
            'headerFields'            => array('id','name'),
            'icon'                    => 'bundels/con4gisMapsBundle/images/core.png'
        ),
        'label' => array
        (
            'fields'                  => array('id','name'),
            'showColums'              => true
        ),
        'global_operations' => array
        (
            'all' => array
            (
                'label'               => &$GLOBALS['TL_LANG']['MSC']['all'],
                'href'                => 'act=select',
                'class'               => 'header_edit_all',
                'attributes'          => 'onclick="Backend.getScrollOffset();" accesskey="e"'
            )
        ),
        'operations' => array
        (
            'edit' => array
            (
                'label'               => &$GLOBALS['TL_LANG']['tl_c4g_map_tables']['edit'],
                'href'                => 'act=edit',
                'icon'                => 'edit.gif'
            ),
            'copy' => array
            (
                'label'               => &$GLOBALS['TL_LANG']['tl_c4g_map_tables']['copy'],
                'href'                => 'act=copy',
                'icon'                => 'copy.gif'
            ),
            'delete' => array
            (
                'label'               => &$GLOBALS['TL_LANG']['tl_c4g_map_tables']['delete'],
                'href'                => 'act=delete',
                'icon'                => 'delete.gif',
                'attributes'          => 'onclick="if (!confirm(\'' . $GLOBALS['TL_LANG']['MSC']['deleteConfirm'] . '\')) return false; Backend.getScrollOffset();"'
            ),
            'show' => array
            (
                'label'               => &$GLOBALS['TL_LANG']['tl_c4g_map_tables']['show'],
                'href'                => 'act=show',
                'icon'                => 'show.gif'
            )
        )
    ),
    'palettes' =>
    [
        'default' => '{default_legend},name,tableSource,ptable,ptableOption,ptableField,ptableCompareField;{table_information},geox,geoy,geolocation,label,locstyle,tooltip;',
    ],

    // Fields
    'fields' =>
    [
        'id' =>
        [
            'sql'                     => "int(10) unsigned NOT NULL auto_increment"
        ],
        'tstamp' =>
        [
            'sql'                     => "int(10) unsigned NOT NULL default '0'"
        ],
        'name' =>
        [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_tables']['tableSource'],
            'exclude'                 => true,
            'inputType'               => 'text',
            'sql'                     => "text NULL"
            ],
        'tableSource' =>
        [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_tables']['tableSource'],
            'exclude'                 => true,
            'inputType'               => 'select',
            'options_callback'        => array('tl_c4g_map_tables','getDatabaseTables'),
            'eval'                    => array('mandatory'=>false, 'multiple'=>false, 'chosen' => true, 'submitOnChange' => true),
            'sql'                     => "text NULL"
        ],
        'ptable' =>
        [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_tables']['ptable'],
            'exclude'                 => true,
            'inputType'               => 'select',
            'options_callback'        => array('tl_c4g_map_tables','getDatabaseTables'),
            'eval'                    => array('mandatory'=>false, 'multiple'=>true, 'size' => 2, 'chosen' => true, 'submitOnChange' => true),
            'sql'                     => "text NULL"
        ],
        'ptableOptions' =>
        [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_tables']['ptableOptions'],
            'exclude'                 => true,
            'inputType'               => 'select',
            'options_callback'        => array('tl_c4g_map_tables','getParentTablesFields'),
            'eval'                    => array('mandatory'=>false, 'multiple'=>true,'size' => 2, 'chosen' => true),
            'sql'                     => "text NULL"
        ],
        'ptableBlob' =>
        [
            'sql'                     => "text NULL"
        ],
        'ptableField' =>
        [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_tables']['ptableField'],
            'exclude'                 => true,
            'inputType'               => 'select',
            'options_callback'        => array('tl_c4g_map_tables','getSourceTableFields'),
            'eval'                    => array('mandatory'=>false, 'multiple'=>true, 'size' => 2, 'chosen' => true),
            'sql'                     => "text NULL"
        ],
        'ptableCompareField' =>
        [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_tables']['ptableCompareField'],
            'exclude'                 => true,
            'inputType'               => 'select',
            'options_callback'        => array('tl_c4g_map_tables','getParentTablesFields', 'includeBlankOption' => true),
            'eval'                    => array('mandatory'=>false, 'multiple'=>true, 'chosen' => true, 'size' => 2),
            'sql'                     => "text NULL"
        ],
        'geox' =>
        [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_tables']['geox'],
            'exclude'                 => true,
            'inputType'               => 'select',
            'options_callback'        => array('tl_c4g_map_tables','getSourceTableFields'),
            'eval'                    => array('mandatory'=>false, 'multiple'=>false, 'includeBlankOption' => true),
            'sql'                     => "text NULL"
        ],
        'geoy' =>
        [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_tables']['geoy'],
            'exclude'                 => true,
            'inputType'               => 'select',
            'options_callback'        => array('tl_c4g_map_tables','getSourceTableFields'),
            'eval'                    => array('mandatory'=>false, 'multiple'=>false, 'includeBlankOption' => true),
            'sql'                     => "text NULL"
        ],
        'geolocation' =>
        [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_tables']['geolocation'],
            'exclude'                 => true,
            'inputType'               => 'select',
            'options_callback'        => array('tl_c4g_map_tables','getSourceTableFields'),
            'eval'                    => array('mandatory'=>false, 'multiple'=>false, 'includeBlankOption' => true),
            'sql'                     => "text NULL"
        ],
        'label' =>
        [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_tables']['label'],
            'exclude'                 => true,
            'inputType'               => 'select',
            'options_callback'        => array('tl_c4g_map_tables','getSourceTableFields'),
            'eval'                    => array('mandatory'=>false, 'multiple'=>false, 'includeBlankOption' => true),
            'sql'                     => "text NULL"
        ],
        'locstyle' =>
        [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_tables']['locstyle'],
            'exclude'                 => true,
            'inputType'               => 'select',
            'options_callback'        => array('tl_c4g_map_tables','getSourceTableFields'),
            'eval'                    => array('mandatory'=>false, 'multiple'=>false, 'includeBlankOption' => true),
            'sql'                     => "text NULL"
        ],
        'popup' =>
        [
            'sql'                     => "text NULL"
        ],
        'tooltip' =>
        [
            'label'                   => &$GLOBALS['TL_LANG']['tl_c4g_map_tables']['tooltip'],
            'exclude'                 => true,
            'inputType'               => 'select',
            'options_callback'        => array('tl_c4g_map_tables','getSourceTableFields'),
            'eval'                    => array('mandatory'=>false, 'multiple'=>false, 'chosen' => true, 'includeBlankOption' => true),
            'sql'                     => "text NULL"
        ]
    ]

];

class tl_c4g_map_tables extends Backend
{
    public function getDatabaseTables(DataContainer $dc) {
        $options = $this->Database->listTables();
        return  $options;
    }
    public function getSourceTableFields(DataContainer $dc){
        $tableName = $dc->activeRecord->tableSource;
        $options = $this->Database->getFieldNames($tableName);
        return $options;
    }
    public function getParentTablesFields(DataContainer $dc){
        $tableNames = unserialize($dc->activeRecord->ptable);
        $options = [];
        foreach ($tableNames as $tableName){
            $tableOptions = $this->Database->getFieldNames($tableName);
            foreach ($tableOptions as $tableOption){
                $options[$tableName.':'.$tableOption] = $tableName.':'.$tableOption;
            }
        }
        return $options;
    }
}