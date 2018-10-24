lib.breadcrumb = HMENU
lib.breadcrumb {
    special = rootline
    special.range = {$plugin.tx_typo3_base_ext.settings.breadcrumb_navigation}
    wrap = <nav aria-label="breadcrumb"><ol class="breadcrumb">|</ol></nav>

    1 = TMENU
    1.NO {
        stdWrap.htmlSpecialChars = 1
        linkWrap = <li class="breadcrumb-item">|</li> |*| <li class="breadcrumb-item"> |*| <li class="breadcrumb-item active" aria-current="page">|</li>
        doNotLinkIt = 0 |*| 0 |*| 1
    }
}
