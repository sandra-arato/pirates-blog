/**
 * Main JS file for Casper behaviours
 */

/* globals jQuery, document */
(function ($, window, undefined) {
    "use strict";

    var $document = $(document),

        // debouncing function from John Hann
        // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
        debounce = function (func, threshold, execAsap) {
            var timeout;

            return function debounced () {
                var obj = this, args = arguments;
                function delayed () {
                    if (!execAsap) {
                        func.apply(obj, args);
                    }
                    timeout = null;
                }

                if (timeout) {
                    clearTimeout(timeout);
                } else if (execAsap) {
                    func.apply(obj, args);
                }

                timeout = setTimeout(delayed, threshold || 100);
            };
        },

        changeColor = function(e) {
            var top = $('.main-header').height();
            if ( e.currentTarget.scrollY > top) {
                $('.main-header nav a').addClass('highlight');
            } else {
                $('.main-header nav a').removeClass('highlight');
            }
        },
        
        scrollPosition = 0,
        rotation = 45,
        vertical = 210;
    
    $document.ready(function () {
        
        $(window).scroll(function(e){
            
            // adapts menu icon color to background once
            // user scrolls below header image
            if ( $('body').hasClass('post-template') ) {
                debounce(changeColor(e), 300);
            }

        });

    });
})(jQuery, window);
