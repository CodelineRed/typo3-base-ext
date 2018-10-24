config {
    baseURL = {$plugin.tx_typo3_base_ext.settings.domain}

    no_cache = 1
    cache = 1

    removeDefaultJS = 0

    #meaningfulTempFilePrefix = 50

    prefixLocalAnchors = all
    simulateStaticDocuments = 0
    tx_realurl_enable = 1

    doctype = html5
    xmlprologue = none
    #xhtml_cleaning = all
    metaCharset = utf-8

    concatenateJs    = 1
    concatenateCss   = 1
    compressJs       = 1
    compressCss      = 1

    index_enable = 1
    index_externals = 1
    #noPageTitle = 1

    linkVars = L
    sys_language_mode = strict
    #sys_language_mode = content_fallback
    sys_language_overlay = hideNonTranslated

    spamProtectEmailAddresses = 2
    spamProtectEmailAddresses_atSubst = (at)
}

# ======================================================================
# Default
# ======================================================================

config {
    sys_language_uid = 0
    language = en
    locale_all = en_US.utf8
    htmlTag_langKey = en_US
}

# ======================================================================
# German
# ======================================================================
[globalVar = GP:L = 1]
    config {
        sys_language_uid = 1
        language = de
        locale_all = de_DE.utf8
        htmlTag_langKey = de-DE
    }
[global]

