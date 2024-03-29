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
    
    $('.product__img-slick').slick({
        dots: false,
        infinite: true,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="/image/arrow-left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="/image/arrow-right.svg"></button>',
        speed: 300,
        slidesToScroll: 1,
        slidesToShow: 3
    });
           
});

document.addEventListener('DOMContentLoaded', function() {
    var expandImg = document.getElementById("expandedImg");
    var imgs = document.querySelectorAll('.enterImg');
    //expandImg.src = imgs[1].src;
    imgs.forEach(function(item) {
        item.addEventListener('click', function(elem) {
            expandImg.src = elem.target.src;
        });
    });
});

var menuToggle = document.getElementById('menu__toggle');

window.addEventListener('popstate', function() {
    if (menuToggle) menuToggle.checked = false;
});

menuToggle.addEventListener("change", function(e) {
    if (this.checked) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "scroll";
    }
});


