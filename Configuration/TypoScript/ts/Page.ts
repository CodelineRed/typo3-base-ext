// Default PAGE object

page = PAGE
page {
    typeNum = 0
    10 = FLUIDTEMPLATE
    10 {
        file.cObject = CASE
        file.cObject {
            key.field = backend_layout
            key.ifEmpty.data = levelfield:-1,backend_layout_next_level,slide
            #key.override.field = backend_layout

            default = TEXT
            default.value = EXT:typo3_base_ext/Resources/Private/Templates/Layout_01.html

            pagets__bl1 = TEXT
            pagets__bl1.value = EXT:typo3_base_ext/Resources/Private/Templates/Layout_01.html

            pagets__bl2 = TEXT
            pagets__bl2.value = EXT:typo3_base_ext/Resources/Private/Templates/Layout_02.html

            pagets__bl3 = TEXT
            pagets__bl3.value = EXT:typo3_base_ext/Resources/Private/Templates/Layout_03.html

            pagets__bl4 = TEXT
            pagets__bl4.value = EXT:typo3_base_ext/Resources/Private/Templates/Layout_04.html

            pagets__bl5 = TEXT
            pagets__bl5.value = EXT:typo3_base_ext/Resources/Private/Templates/Layout_05.html

            pagets__bl6 = TEXT
            pagets__bl6.value = EXT:typo3_base_ext/Resources/Private/Templates/Layout_06.html

            pagets__bl7 = TEXT
            pagets__bl7.value = EXT:typo3_base_ext/Resources/Private/Templates/Layout_07.html
        }

        templateRootPaths.0 = {$plugin.tx_typo3_base_ext.view.templateRootPath}
        layoutRootPaths.0 = {$plugin.tx_typo3_base_ext.view.layoutRootPath}
        partialRootPaths.0 = {$plugin.tx_typo3_base_ext.view.partialRootPath}

        variables {
            content0 < styles.content.get
            content0.select.where = colPos=0
            content0.select.includeRecordsWithoutDefaultTranslation = 1

            content1 < .content0
            content1.select.where = colPos=1

            content2 < .content0
            content2.select.where = colPos=2

            content3 < .content0
            content3.select.where = colPos=3

            content4 < .content0
            content4.select.where = colPos=4

            content5 < .content0
            content5.select.where = colPos=5

            content6 < .content0
            content6.select.where = colPos=6

            content7 < .content0
            content7.select.where = colPos=7

            content8 < .content0
            content8.select.where = colPos=8

            content9 < .content0
            content9.select.where = colPos=9

            content10 < .content0
            content10.select.where = colPos=10

            navigation < lib.navigation
            breadcrumb < lib.breadcrumb
            footer < lib.footer
            langswitch < lib.langswitch
        }

        settings {
            title = {$plugin.tx_typo3_base_ext.settings.title}
            domain = {$plugin.tx_typo3_base_ext.settings.domain}
            keywords = {$plugin.tx_typo3_base_ext.settings.keywords}
            description = {$plugin.tx_typo3_base_ext.settings.title}
            base = {$plugin.tx_typo3_base_ext.settings.base}
            news_detail = {$plugin.tx_typo3_base_ext.settings.news_detail}
            facebook_img = {$plugin.tx_typo3_base_ext.settings.facebook_img}
            facebook_locale = {$plugin.tx_typo3_base_ext.settings.facebook_locale}
        }
    }

    includeCSS {
        flexslider2 >
        styles = {$plugin.tx_typo3_base_ext.settings.files}Css/styles.css
    }

    includeJSFooter {
        scripts = {$plugin.tx_typo3_base_ext.settings.files}Js/scripts.js
        scripts.forceOnTop = 1
    }

    includeJSFooterlibs.flexslider2 >

    meta {
        keywords = {$plugin.tx_typo3_base_ext.settings.keywords}
        keywords.override.field = keywords

        description = {$plugin.tx_typo3_base_ext.settings.description}
        description.override.field  = description

        #distribution = Global
        #rating = General
        robots = all
        #revisit = 7 days
        #resource-type = document
    }

    # den Body die Seiten id mit geben
    bodyTagCObject = TEXT
    bodyTagCObject {
        dataWrap = <body id="page-{field:uid}" class="subpage parent-{field:pid} frontend-{field:layout}" data-langid="{GP:L}">
    }

    headerData.10 = TEXT
    headerData.10.value = <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />

    headerData.15 = TEXT
    headerData.15.value = <meta http-equiv="X-UA-Compatible" content="IE=edge"/>

    # Neuen title in headerData setzen
    config.noPageTitle = 2
    headerData.20 = TEXT
    headerData.20 {
        field = title // subtitle
        noTrimWrap = |<title>| &raquo; {$plugin.tx_typo3_base_ext.settings.title}</title>|
    }

    headerData.25 = TEXT
    headerData.25 {
        field = title // subtitle
        wrap = <meta property="og:locale" content="{$plugin.tx_typo3_base_ext.settings.facebook_locale}" /><meta property="og:title" content="|&nbsp;- {$plugin.tx_typo3_base_ext.settings.title}" />
    }

    headerData.30 = TEXT
    headerData.30.value = {$plugin.tx_typo3_base_ext.settings.facebook_img}
    headerData.30.wrap = <link rel="image_src" href="|" />
       
    headerData.35 < page.headerData.30
    headerData.35.wrap = <meta property="og:image" content="|" />

    config{
        index_enable = 1
        index_externals = 1
    }

    shortcutIcon = favicon.ico
}


// Ajax page in general
ajaxpage = PAGE
ajaxpage {
    config {
        disableAllHeaderCode = 1
        additionalHeaders = Content-type:application/json
        xhtml_cleaning = 0
        admPanel = 0
        debug = 0
        no_cache = 0
        cache = 1
    }
}


// add canonical tag
[globalVar = TSFE:id=4]
    lib.canonical.10.typolink.parameter.data = TSFE:baseUrl
[global]
page.headerData.100 < lib.canonical


# neu ab t3 4.7
tt_content.stdWrap.innerWrap.cObject.default.20.10.noTrimWrap = || csc-default layout-{field:layout} frame-{field:section_frame}  |
tt_content.stdWrap.innerWrap.cObject.default.20.10.insertData = 1

#tt_content.stdWrap.prepend >


// Enable lightbox with typoscript
tt_content.image.20.1.imageLinkWrap {
    JSwindow = 0
    directImageLink = 1
    linkParams.ATagParams {
        dataWrap = class="fancybox" rel="fancybox{field:uid}"
    }
    height =
    width =
}


# allow html-Tags in headers of content-elements
lib.stdheader.10.setCurrent.htmlSpecialChars = 0

// display subheader
TCEFORM.tt_content.subheader.disabled = 0

lib.stdheader.20.1.htmlSpecialChars = 0
lib.stdheader.20.2.htmlSpecialChars = 0
lib.stdheader.20.3.htmlSpecialChars = 0
lib.stdheader.20.4.htmlSpecialChars = 0
lib.stdheader.20.5.htmlSpecialChars = 0
lib.stdheader.20.default.htmlSpecialChars = 0


# remove comments
# http://t3n.de/magazin/23-tipps-tricks-schnelleres-typo3-typo3-turbo-edition-225282/3/
config.disablePrefixComment = 1
lib.stdheader.5.prefixComment >
lib.stdheader.stdWrap.prefixComment >
tt_content.stdWrap.prefixComment >
tt_content.stdWrap.prepend >