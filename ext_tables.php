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