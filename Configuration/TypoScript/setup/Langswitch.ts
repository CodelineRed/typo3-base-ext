lib.langswitch = HMENU
lib.langswitch {
    wrap (
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="fas fa-globe"></i>
        </a>
        <div class="dropdown-menu">|</div>
    )
    special = language
    special.value = {$plugin.tx_imhh_t3base.settings.langswitch_navigation}

    1 = TMENU
    1 {
        expAll = 0
        wrap = |
        NO = 1
        NO {
            stdWrap.cObject = TEXT
            stdWrap.cObject {
                value =  {$plugin.tx_imhh_t3base.settings.langswitch_label}
            }
            ATagParams = class="dropdown-item first" |*| class="dropdown-item" |*| class="dropdown-item last"
            allWrap = |
        }

        ACT < .NO
        ACT = 1
        ACT {
            ATagParams = class="dropdown-item active first" |*| class="dropdown-item active" |*| class="dropdown-item active last"
        }

        USERDEF1 < .NO
        USERDEF1.allWrap =  <span class="d-none">|</span>
        USERDEF1.doNotLinkIt = 1    

        USERDEF1 < .ACT
        USERDEF1.allWrap =  <span class="d-none">|</span>
        USERDEF1.doNotLinkIt = 1
    }
}
