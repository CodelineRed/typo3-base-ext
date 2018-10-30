// SEO Canonical
lib.canonical = COA
lib.canonical {
    10 = TEXT
    10 {
        typolink {
            parameter.data = TSFE:id
            returnLast = url
        }
        wrap = <link rel="canonical" href="{$plugin.tx_imhh_t3base.settings.domain}|" />
    }
}

// add canonical tag
[globalVar = TSFE:id = {$plugin.tx_imhh_t3base.settings.root}]
    #lib.canonical.10.typolink.parameter.data = TSFE:baseUrl
    #lib.canonical.10.wrap = <link rel="canonical" href="{$plugin.tx_imhh_t3base.settings.domain}" />
[global]
page.headerData.100 < lib.canonical
