jQuery(function($) {
    $("#tel").mask("+7(999) - 999 - 99 - 99");
});   

$(document).ready(function(){
    var $header = $("#header");
    $(window).scroll(function(){
        if ( $(this).scrollTop() > 100 && $header.hasClass("default") ){
            $header.fadeOut('fast',function(){
                $(this).removeClass("default")
                        .addClass("fixed")
                        .fadeIn('fast');
            });
        } else if($(this).scrollTop() <= 100 && $header.hasClass("fixed")) {
            $header.fadeOut('fast',function(){
                $(this).removeClass("fixed")
                        .addClass("default")
                        .fadeIn('fast');
            });
        }
    });        
});

