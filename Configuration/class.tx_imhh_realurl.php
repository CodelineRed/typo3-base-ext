<?php
class tx_imhh_realurl {
    /**
     * @var string $extname
     */
    protected $extname = 'tx_news_pi1';
    
    /**
     * @param array $params
     * @param mixed $pObj
     * @return array
     */
    public function config(array $params, &$pObj) {
        $configuration = $GLOBALS['TYPO3_CONF_VARS']['EXT']['extConf']['imhh_t3base'];

        if (is_string($configuration)) {
            $configuration = @unserialize($configuration);
            
            if (isset($configuration['newsDetailList'])) {
                $configuration['newsDetailList'] = explode(',', $configuration['newsDetailList']);
            } else {
                $configuration['newsDetailList'] = [];
            }
            
            if (isset($configuration['languageList'])) {
                $configuration['languageList'] = explode(',', $configuration['languageList']);
            } else {
                $configuration['languageList'] = [];
            }
        } else {
            $configuration['newsDetailList'] = [];
            $configuration['languageList'] = [];
        }
        
        unset($params['config']['preVars']);
        $imhhRealurl = [
            'postVarSets' => [
                '_DEFAULT' => [
                    // news article
                    'article' => [
                        [
                            'GETvar' => $this->extname . '[news]',
                            'lookUpTable' => [
                                'table' => 'tx_news_domain_model_news',
                                'id_field' => 'uid',
                                'alias_field' => 'title',
                                'addWhereClause' => ' AND NOT deleted',
                                'useUniqueCache' => 1,
                                'useUniqueCache_conf' => [
                                    'strtolower' => 1,
                                    'spaceCharacter' => '-',
                                ],
                            ],
                        ],
                    ],
                ],
            ],
            'fixedPostVars' => [
                'article' => [
                    [
                        'GETvar' => $this->extname . '[news]',
                        'lookUpTable' => [
                            'table' => 'tx_news_domain_model_news',
                            'id_field' => 'uid',
                            'alias_field' => 'title',
                            'addWhereClause' => ' AND NOT deleted',
                            'useUniqueCache' => 1,
                            'useUniqueCache_conf' => [
                                'strtolower' => 1,
                                'spaceCharacter' => '-',
                            ],
                        ],
                    ],
                 ],
//                 1 => 'article', # key = page id - value = name of fixedPostVars
            ],
            'preVars' => [
                [
                    'GETvar' => 'no_cache',
                    'valueMap' => [
                        #'nc' => 1,
                    ],
                    'noMatch' => 'bypass',
                ],
                [
                    'GETvar' => 'L',
                    'valueMap' => [
                        #'en' => '0',
                        #'de' => '1',
                    ],
                    #'valueDefault' => 'en',
                    'noMatch' => 'bypass',
                ],
                [
                    'GETvar' => 'tx_news_pi1[controller]',
                    'valueMap' => [
                        #'news' => 'News',
                    ],
                    'valueDefault' => 'News',
                    'noMatch' => 'bypass',
                ],
                [
                    'GETvar' => 'tx_news_pi1[action]',
                    'valueMap' => [
                        #'action' => 'detail',
                    ],
                    'valueDefault' => 'detail',
                    'noMatch' => 'bypass',
                ],
            ],
        ];
        
        // adds newsDetailList to fixedPostVars
        foreach ($configuration['newsDetailList'] as $value) {
            $imhhRealurl['fixedPostVars'][intval($value)] = 'article';
        }
        
        // adds languageList to preVars
        foreach ($configuration['languageList'] as $key => $value) {
            list($uid, $url) = explode('#', $value);
            
            // if is first language
            if ($key === 0) {
                $imhhRealurl['preVars'][1]['valueDefault'] = $url;
            } else {
                $imhhRealurl['preVars'][1]['valueMap'][$url] = $uid;
            }
        }
        
        return array_merge_recursive($params['config'], $imhhRealurl);
    }
}
