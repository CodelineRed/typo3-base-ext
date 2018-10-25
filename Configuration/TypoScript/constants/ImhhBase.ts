plugin.tx_imhh_t3base {
    view {
        # cat=plugin.tx_imhh_t3base/file; type=string; label=Path to template root (FE)
        templateRootPath = EXT:imhh_t3base/Resources/Private/Templates/

        # cat=plugin.tx_imhh_t3base/file; type=string; label=Path to template partials (FE)
        partialRootPath = EXT:imhh_t3base/Resources/Private/Partials/

        # cat=plugin.tx_imhh_t3base/file; type=string; label=Path to template layouts (FE)
        layoutRootPath = EXT:imhh_t3base/Resources/Private/Layouts/
    }

    settings {
        # cat=plugin.tx_imhh_t3base/general/01; type=string; label=Title of Website
        title = 

        # cat=plugin.tx_imhh_t3base/general/02; type=string; label=Domain of Website
        domain = 

        # cat=plugin.tx_imhh_t3base/general/03; type=string; label=Keywords of Website
        keywords = 

        # cat=plugin.tx_imhh_t3base/general/04; type=string; label=Description of Website
        description = 

        # cat=plugin.tx_imhh_t3base/general/05; type=string; label=Path to Base Extension
        base = EXT:imhh_t3base/

        # cat=plugin.tx_imhh_t3base/general/06; type=string; label=Path to folder with CSS, JavaScript, Image, ...
        files = EXT:imhh_t3base/Resources/Public/

        # cat=plugin.tx_imhh_t3base/general/07; type=string; label=PID of news detail page
        news_detail = 

        # cat=plugin.tx_imhh_t3base/general/08; type=string; label=PID of main navigation
        main_navigation = 

        # cat=plugin.tx_imhh_t3base/general/09; type=string; label=PID of footer navigation
        footer_navigation = 

        # cat=plugin.tx_imhh_t3base/general/10; type=string; label=Range of breadcrumb navigation
        breadcrumb_navigation = 0|-1

        # cat=plugin.tx_imhh_t3base/general/11; type=string; label=IDs of active translations
        langswitch_navigation = 0,1

        # cat=plugin.tx_imhh_t3base/general/10; type=string; label=Langswitch labels
        langswitch_label = English || Deutsch

        # cat=plugin.tx_imhh_t3base/general/30; type=string; label=Facebook image
        facebook_img = 

        # cat=plugin.tx_imhh_t3base/general/31; type=string; label=Facebook locale
        facebook_locale = en_US
    }
}
