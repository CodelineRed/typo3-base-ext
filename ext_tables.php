<?php
if (!defined('TYPO3_MODE')) {
	die('Access denied.');
}

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($_EXTKEY, 'Configuration/TypoScript', 'InsanityMeetsHH Base Extension');

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addFieldsToPalette('tt_content','header','--linebreak--,subheader;LLL:EXT:cms/locallang_ttc.xlf:subheader_formlabel','after:header');

$GLOBALS['TCA']['tx_news_domain_model_news']['columns']['fal_media']['config']['appearance']['showSynchronizationLink'] = 1;
$GLOBALS['TCA']['tx_news_domain_model_news']['columns']['fal_media']['config']['appearance']['showAllLocalizationLink'] = 1;
$GLOBALS['TCA']['tx_news_domain_model_news']['columns']['fal_media']['config']['appearance']['showPossibleLocalizationRecords'] = 1;

$GLOBALS['TCA']['tx_news_domain_model_news']['columns']['fal_related_files']['config']['appearance']['showSynchronizationLink'] = 1;
$GLOBALS['TCA']['tx_news_domain_model_news']['columns']['fal_related_files']['config']['appearance']['showAllLocalizationLink'] = 1;
$GLOBALS['TCA']['tx_news_domain_model_news']['columns']['fal_related_files']['config']['appearance']['showPossibleLocalizationRecords'] = 1;

$configuration = $GLOBALS['TYPO3_CONF_VARS']['EXT']['extConf']['imhh_t3base'];
$loginArray = [];
$backendArray = [];

if (is_string($configuration)) {
    $configuration = @unserialize($configuration);
} else {
    $configuration['loginStyle'] = '1';
    $configuration['backendStyle'] = '1';
}

if (intval($configuration['loginStyle'])) {
    $loginArray = [
        'loginLogo'            => 'EXT:imhh_t3base/Resources/Public/Img/favicons/favicon-96x96.png',
        'loginBackgroundImage' => 'EXT:imhh_t3base/Resources/Public/Img/backend-bg.png',
        'loginHighlightColor'  => '#2e97bf',
    ];
    
    $GLOBALS['TBE_STYLES']['skins']['imhh_t3base'] = array (
        'name' => 'imhh_t3base',
        'stylesheetDirectories' => array(
            'css' => 'EXT:' . $_EXTKEY . '/Resources/Public/LoginStyle/'
        )
    );
}

if (intval($configuration['backendStyle'])) {
    $backendArray = [
        'backendLogo'    => 'EXT:imhh_t3base/Resources/Public/Img/favicons/favicon-36x36.png',
        'backendFavicon' => 'EXT:imhh_t3base/Resources/Public/Img/favicons/favicon.ico',
    ];
}

$GLOBALS['TYPO3_CONF_VARS']['EXT']['extConf']['backend'] = serialize(array_merge($loginArray, $backendArray));
