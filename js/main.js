/* Маска для телефона */
jQuery(function($) {
    $("#tel").mask("+7(999) - 999 - 99 - 99");
});   
/* Маска для телефона */

$(document).ready(function(){
    var $header = $("#header");     
    $(window).scroll(function(){
        if ( $(this).scrollTop() > 120 && $header.hasClass("default") ){
            $header.fadeOut('fast',function(){
                $(this).removeClass("default")
                        .addClass("fixed")
                        .fadeIn('fast');
            });
        } else if($(this).scrollTop() <= 120 && $header.hasClass("fixed")) {
            $header.fadeOut('fast',function(){
                $(this).removeClass("fixed")
                        .addClass("default")
                        .fadeIn('fast');
            });
        }
    });        
});

