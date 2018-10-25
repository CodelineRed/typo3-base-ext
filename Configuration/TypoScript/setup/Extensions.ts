# override page title with news title
[globalVar = GP:tx_news_pi1|news > 0]
    lib.newstitle = RECORDS
    lib.newsTitle {
        source = {GP:tx_news_pi1|news}
        source.insertData = 1
        tables = tx_news_domain_model_news
        conf.tx_news_domain_model_news >
        conf.tx_news_domain_model_news = TEXT
        conf.tx_news_domain_model_news.field=title
        wrap = <title>|&nbsp;&raquo; {$plugin.tx_imhh_t3base.settings.title}</title>
    }
    page.config.noPageTitle = 2
    page.headerData.20 >
    page.headerData.20 < lib.newstitle
[global]

plugin.tx_indexedsearch {
    settings {
        displayRules = 0
        displayAdvancedSearchLink = 0
        displayLevel1Sections = 0
        defaultOptions {
            languageUid < config.sys_language_uid
        }
    }
}


