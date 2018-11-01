'use strict';

// jQuery.noConflict();
(function($) {
    $(document).ready(function() {
        $('html').removeClass('no-js');
        $('main table').wrap('<div class="table-responsive"></div>');
        
        $('main [title]').tooltip({
            placement: 'bottom'
        });
        
        $('.navbar-brand').click(function(e) {
            e.preventDefault();
        });
        
        var lazyLoad = new LazyLoad({
            //elements_selector: ".lazyload"
        });
    });
})(jQuery);
