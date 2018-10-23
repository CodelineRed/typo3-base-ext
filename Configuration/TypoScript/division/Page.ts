// Default PAGE object

page = PAGE
page {
    typeNum = 0

    includeCSS {
        styles = {$imhh.base}/Resources/Public/Css/styles.css
    }

    includeJSFooter {
        scripts = {$imhh.base}/Resources/Public/Js/scripts.js
        scripts.forceOnTop = 1
    }

    meta {
        keywords = {$imhh.keywords}
        keywords.override.field = keywords

        description = {$imhh.description}
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
        dataWrap = <body id="uid_{field:uid}" class="subpage parent_{field:pid} frontend_{field:layout}" data-langid="{$sys_language_uid}">
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
        noTrimWrap = |<title>| &raquo; {$imhh.title}</title>|
    }

    headerData.25 = TEXT
    headerData.25 {
        field = title // subtitle
        wrap = <meta property="og:locale" content="{$imhh.facebook_locale}" /><meta property="og:title" content="|&nbsp;- {$imhh.title}" />
    }

    headerData.30 = TEXT
    headerData.30.value = {$imhh.facebook_img}
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