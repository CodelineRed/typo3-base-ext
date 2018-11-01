# display language flag
mod.SHARED {
   defaultLanguageFlag = multiple
   defaultLanguageLabel = Standard
}

RTE {
    default {
        preset = imhh_t3base
    }
}

TCEFORM {
    tt_content {
        header_layout {
            #removeItems = 0
        }

        layout {
            removeItems = 1,2,3
        }

        frame_class {
            removeItems = ruler-before,ruler-after,indent,indent-left,indent-right,none
        }

        space_before_class {
            removeItems = extra-small,small,medium,large,extra-large
        }

        space_after_class {
            removeItems = extra-small,small,medium,large,extra-large
        }
    }

    pages {
        layout {
            removeItems = 1,2,3
        }
    }
}
