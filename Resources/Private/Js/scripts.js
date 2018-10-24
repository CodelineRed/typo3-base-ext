'use strict';

// jQuery.noConflict();
(function($) {
    $(document).ready(function() {
        $('html').removeClass('no-js');
        $('[data-toggle="tooltip"]').tooltip();
        $('.image-embed-item').addClass('img-fluid');
        $('.navbar-brand').click(function(e) {
            e.preventDefault();
        });
        
        var lazyLoad = new LazyLoad({
            //elements_selector: ".lazyload"
        });
    });
})(jQuery);
