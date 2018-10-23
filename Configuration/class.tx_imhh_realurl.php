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
        unset($params['config']['preVars']);
        return array_merge_recursive($params['config'], array(
            'postVarSets' => array(
                '_DEFAULT' => array(
                    // news article
                    'article' => array(
                        array(
                            'GETvar' => $this->extname . '[news]',
                            'lookUpTable' => array(
                                'table' => 'tx_news_domain_model_news',
                                'id_field' => 'uid',
                                'alias_field' => 'title',
                                'addWhereClause' => ' AND NOT deleted',
                                'useUniqueCache' => 1,
                                'useUniqueCache_conf' => array(
                                    'strtolower' => 1,
                                    'spaceCharacter' => '-',
                                ),
                            ),
                        ),
                    ),
                )
            ),
            'fixedPostVars' => array(
                'article' => array(
                    array(
                        'GETvar' => $this->extname . '[news]',
                        'lookUpTable' => array(
                            'table' => 'tx_news_domain_model_news',
                            'id_field' => 'uid',
                            'alias_field' => 'title',
                            'addWhereClause' => ' AND NOT deleted',
                            'useUniqueCache' => 1,
                            'useUniqueCache_conf' => array(
                                'strtolower' => 1,
                                'spaceCharacter' => '-',
                            ),
                        ),
                    ),
                 ),
//                 1 => 'article',
//                 2 => 'article'
            ),
            'preVars' => array(
                array(
                    'GETvar' => 'no_cache',
                    'valueMap' => array(
                        #'nc' => 1,
                    ),
                    'noMatch' => 'bypass',
                ),
                array(
                    'GETvar' => 'L',
                    'valueMap' => array(
                        #'en' => '0',
                        'de' => '1',
                    ),
                    'valueDefault' => 'de',
                    'noMatch' => 'bypass',
                ),
                array(
                    'GETvar' => 'tx_news_pi1[controller]',
                    'valueMap' => array(
                        #'news' => 'News',
                    ),
                    'valueDefault' => 'News',
                    'noMatch' => 'bypass',
                ),
                array(
                    'GETvar' => 'tx_news_pi1[action]',
                    'valueMap' => array(
                        #'action' => 'detail',
                    ),
                    'valueDefault' => 'detail',
                    'noMatch' => 'bypass',
                ),
            ),
        ));
    }
}
