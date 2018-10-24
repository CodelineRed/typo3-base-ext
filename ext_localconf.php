<?php
if (!defined('TYPO3_MODE')) {
	die('Access denied.');
}

// RealURL autoconfiguration
$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['ext/realurl/class.tx_realurl_autoconfgen.php']['extensionConfiguration']['typo3_base_ext'] = 'EXT:typo3_base_ext/Configuration/class.tx_imhh_realurl.php:tx_imhh_realurl->config';
