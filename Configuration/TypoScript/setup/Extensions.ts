# override page title with news title
[globalVar = GP:tx_news_pi1|news > 0]
    lib.news_title = RECORDS
    lib.news_title {
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
    page.headerData.20 < lib.news_title
[global]

plugin.tx_indexedsearch {
    settings {
        displayRules = 0
        displayAdvancedSearchLink = 0
        displayLevel1Sections = 0

        blind {
            numberOfResults = 6
        }

        defaultOptions {
            languageUid < config.sys_language_uid
        }
    }
}

lib.parseFunc_RTE.externalBlocks.table.stdWrap.HTMLparser.tags.table.fixAttrib.class {
    default = table table-striped table-dark
    list = table table-striped table-dark
}

lib.contentElement.settings.media.popup.linkParams.ATagParams {
    dataWrap = data-fancybox="gallery" class="{$styles.content.textmedia.linkWrap.lightboxCssClass}" rel="{$styles.content.textmedia.linkWrap.lightboxRelAttribute}"
}
