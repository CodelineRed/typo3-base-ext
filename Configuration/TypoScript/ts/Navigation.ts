lib.navigation_ul = HMENU
lib.navigation_ul {
    wrap = |
    special = directory
    special.value = {$plugin.tx_typo3_base_ext.settings.main_navigation}

    1 = TMENU
    1 {
        expAll = 1
        NO {
            ATagTitle.field = description // subtitle // title
            ATagParams = class="nav-link"
            ATagParams.insertData = 1
            wrapItemAndSub = <li class="nav-item first">|</li> |*| <li class="nav-item">|</li> |*| <li class="nav-item last">|</li>

            # Add class active to ATagParams if shortcut is pointing to current page
            ATagParams.override.cObject = COA
            ATagParams.override.cObject {
                if {
                    value = 4
                    equals.field = doktype
                    isTrue = 1
                    isTrue.if {
                        value.data = TSFE:page|uid
                        equals.field = shortcut
                    }
                }
                10 = TEXT
                10.value = class="nav-link active"
            }
        }

        CUR < .NO
        CUR = 1
        CUR {
            ATagParams = class="nav-link current active"
        }

        ACT < .NO
        ACT = 1
        ACT {
            ATagParams = class="nav-link active"
        }

        IFSUB < .NO
        IFSUB = 1
        IFSUB {
            wrapItemAndSub = <li class="nav-item dropdown first">|</li> |*| <li class="nav-item dropdown">|</li> |*| <li class="nav-item dropdown last">|</li>
            ATagParams = class="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
        }

        CURIFSUB < .IFSUB
        CURIFSUB = 1
        CURIFSUB {
            ATagParams = class="nav-link dropdown-toggle current active" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
        }

        ACTIFSUB < .IFSUB
        ACTIFSUB = 1
        ACTIFSUB {
            ATagParams = class="nav-link dropdown-toggle active" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
        }
    }

    2 < .1
    2 {
        wrap = <div class="dropdown-menu">|</div>
        wrap.insertData = 1

        NO {
            ATagTitle.field = description // subtitle // title
            ATagParams = class="dropdown-item first" |*| class="dropdown-item" |*| class="dropdown-item last"
            wrapItemAndSub = |  |*| | |*| |

            ATagParams.override.cObject {
                10.value = class="dropdown-item active first" |*| class="dropdown-item active" |*| class="dropdown-item active last"
            }
        }

        CUR < .NO
        CUR = 1
        CUR {
            ATagParams = class="dropdown-item current active first" |*| class="dropdown-item current active" |*| class="dropdown-item current active last"
        }

        ACT < .NO
        ACT = 1
        ACT {
            ATagParams = class="dropdown-item active first" |*| class="dropdown-item active" |*| class="dropdown-item active last"
        }

        IFSUB >
        CURIFSUB >
        ACTIFSUB >
    }
}

lib.navigation = COA
lib.navigation {
    wrap = <nav class="navbar navbar-expand-lg navbar-dark bg-dark my-3">|</div></nav>

    5 = TEXT
    5.value = <a class="navbar-brand" href="#">{$plugin.tx_typo3_base_ext.settings.title}</a>
    5.stdWrap.insertData = 0

    10 = TEXT
    10.value (
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
    )

    15 = COA
    15 {
        wrap = <ul class="navbar-nav mr-auto">|</ul>
        5 < lib.navigation_ul
        10 < lib.langswitch
    }

    20 < lib.search
}