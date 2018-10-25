<?php
if (!defined('TYPO3_MODE')) {
	die('Access denied.');
}

// RealURL autoconfiguration
$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['ext/realurl/class.tx_realurl_autoconfgen.php']['extensionConfiguration']['imhh_t3base'] = 'EXT:imhh_t3base/Configuration/class.tx_imhh_realurl.php:tx_imhh_realurl->config';
