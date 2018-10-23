# tx_news Detailansichten mit Artikel Seitentitel versehen
[globalVar = GP:tx_news_pi1|news > 0]
    lib.newstitle = RECORDS
    temp.newsTitle {
        source = {GP:tx_news_pi1|news}
        source.insertData = 1
        tables = tx_news_domain_model_news
        conf.tx_news_domain_model_news >
        conf.tx_news_domain_model_news = TEXT
        conf.tx_news_domain_model_news.field=title
        wrap = <title>|&nbsp;&raquo; {$plugin.tx_typo3_base_ext.settings.title}</title>
    }
    page.config.noPageTitle = 2
    page.headerData.20 >
    page.headerData.20 < lib.newstitle
[global]