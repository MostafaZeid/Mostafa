$(document).ready(function () {
    "use strict";
   //show color option when click on gear 
    $('.gear-check').click(function () {
        $('.color-option').fadeToggle(900);
        $('.gear-check').fadeOut(900);
        $('.gear-check').fadeIn(2000);
        
    });
    
    //change theme color on click 
    var colorLi = $('.color-option ul li');
    
    colorLi
        .eq(0).css('background', "#3498db").end()
        .eq(1).css('background', "#ce4642").end()
        .eq(2).css('background', "#5fd94f").end()
        .eq(3).css('background', "#435258");
    
    colorLi.click(function () {
        
        $('link[href*="theme"]').attr('href', $(this).attr('data-value'));
    });
});

$(window).load(function () {
    
    $('.loading-overlay .spinner').fadeOut(1000, function () {

        $(this).parent().fadeOut(2000, function () {
     
            $("body").css('overflow', 'auto');
            $(this).remove();
            $('.loading-overlay').fadeOut(1200);
        
        });
    });
});
