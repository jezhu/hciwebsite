// Freelancer Theme JavaScript

(function($) {
    "use strict"; // Start of use strict

    windowResize();

    $(window).resize(function(){
        windowResize();
    })

    $(document).ready(function(){
        $(this).scrollTop(0);
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

    var scroll_start = 0;
    var startchange = $("#main-content");
    var offset = startchange.offset();
    console.log(offset);
    $(document).scroll(function() {
        if( $(window).width() > 768 ) {
          scroll_start = $(this).scrollTop();
          console.log(scroll_start);
          if(scroll_start < 100) {
              $(".navbar-custom").css("background-color", "transparent");
                $(".navbar-nav .page-scroll a").mouseover(function(){
                    $(this).css("color", "#bc1738" );
                }).mouseout(function(){
                    $(this).css("color", "rgba(255,255,255,1)" );
                });
           } else {
                $(".navbar-custom").css("background-color", "#bc1738");
                $(".navbar-nav .page-scroll a").mouseover(function(){
                    $(this).css("color", "rgba(255,255,255,0.25)" );
                }).mouseout(function(){
                    $(this).css("color", "rgba(255,255,255,1)" );
                });
           }
        }
    });

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
