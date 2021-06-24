$(document).ready(function(){

    // animation ############################################################
    new WOW().init();

    $('.pc-slider').each(function(){
        $(this).carousel({
            interval: false
        });
    });

   //smooth scrolling#################################

    $('.scroll-smooth').click(function(){
        //var atr = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1000);

        return false;
    });

    // scrool-top ############################################################
    $('footer .go-top').click(function(){
        $("html,body").animate({scrollTop : 0},1000);
        return false;
    });

    // package ############################################################
    $('.product-bl .product-info button').click(function(){
        var dat_pack = $(this).attr('data-pack');
        $('.package .pc-slider .pack-ind li').eq(dat_pack).trigger( "click" );
    });

    $('.package .pc-slider .pack-ind li').click(function(){
        var dat_sl = $(this).attr('data-slide-to');
        $('#myslide-3 .carousel-inner > div.item').eq(dat_sl).addClass('active').siblings().removeClass('active');
    });
});

// $(window).load(function(){
    
//     // loading#######################################
//     $('.loading-overlay .load').fadeOut(2000,
//     function()
//     {    
//         $('.loading-overlay').fadeOut(1000,function(){ 
//             $(this).remove();
//         });

//     });

// });
