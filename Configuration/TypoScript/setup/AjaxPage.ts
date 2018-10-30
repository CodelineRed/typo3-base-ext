// Ajax page in general
ajax_page = PAGE
ajax_page {
    typeNum = 5975

    config {
        disableAllHeaderCode = 1
        additionalHeaders = Content-type:application/json
        xhtml_cleaning = 0
        admPanel = 0
        debug = 0
        no_cache = 0
        cache = 1
    }

    10 = FLUIDTEMPLATE
    10 {
        file = EXT:imhh_t3base/Resources/Private/Templates/Ajax.html
        layoutRootPath = EXT:imhh_t3base/Resources/Private/AjaxLayouts/
        partialRootPath = EXT:imhh_t3base/Resources/Private/Partials/

        variables < page.10.variables
    }
}
