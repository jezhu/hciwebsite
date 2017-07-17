// Freelancer Theme JavaScript

(function($) {
    "use strict"; // Start of use strict

    windowResize();

    $(document).ready(function(){
        $(this).scrollTop(0);
    });

    $(window).resize(function(){
        windowResize();
        navColorChange();
    })

    $(document).scroll(function() {   
        navColorChange();
    });

    /* Changes color of menu in smaller screens */
    function windowResize() {
        if( $(window).width() < 768 ) {
            $(".navbar-custom").css("background-color", "black"); 
            $(".navbar-custom .navbar-nav li a").css("text-align", "center"); 
        }
        else
            $(".navbar-custom").css("background-color", "rgba(255,255,255,0)");
    }


    function navColorChange(){
        if( $(window).width() > 768 ) {
            var scroll_start = $(document).scrollTop();
            if(scroll_start > 85) {
                $(".navbar-custom").css("background-color", "rgba(188,23,56,1)");
                $(".navbar-nav .page-scroll a").mouseover(function(){
                    $(this).css("color", "rgba(65,23,56,0.7)" );
                }).mouseout(function(){
                    $(this).css("color", "rgba(255,255,255,1)" );
                });
            }
            else {
                $(".navbar-custom").css("background-color", "transparent");
                $(".navbar-nav .page-scroll a").mouseover(function(){
                    $(this).css("color", "rgba(188,23,56,1)" );
                }).mouseout(function(){
                    $(this).css("color", "rgba(255,255,255,1)" );
                });
            }
        }
    }

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 100)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){ 
        $('.navbar-toggle:visible').click();
    });
    
})(jQuery); // End of use strict
