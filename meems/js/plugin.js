$(document).ready(function () {


    $('.logo-search .menue-button').on('click',function(e){
        e.preventDefault();
        $('.nav-bar-om').addClass('active');
        $('.overlay-om').addClass('active');
        $('body').css('overflow','hidden');
        
    });

    $('.overlay-om , .lang-close-xs .close-xs').on('click',function(){
        $('.nav-bar-om').removeClass('active');
        $('.overlay-om').removeClass('active');
        $('body').css('overflow','auto');
    });

     //slider ################################################################################
     $('.slider .owl-carousel').owlCarousel({
        rtl: $('html').attr('lang') == 'ar' ? true : false,
        loop: true,
        margin: 10,
        lazyLoad: true,
        mouseDrag: true,
        // autoHeight:true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        },
    });

    $('.products-om .owl-carousel').owlCarousel({
        rtl: $('html').attr('lang') == 'ar' ? true : false,
        loop: true,
        margin: 10,
        lazyLoad: true,
        mouseDrag: true,
        nav: true,
        navText: [ "<span class='lnr lnr-chevron-right'></span>", "<span class='lnr lnr-chevron-left'></span>"],
        // autoHeight:true,
        responsive: {
            0: {
                items: 1
            },
            700: {
                items: 3
            },
            1199: {
                items: 5
            }
        },
    });

    $('.companies .owl-carousel').owlCarousel({
        rtl: $('html').attr('lang') == 'ar' ? true : false,
        loop: true,
        margin: 10,
        lazyLoad: true,
        mouseDrag: true,
        nav: true,
        navText: ["<span class='lnr lnr-chevron-right'></span>" , "<span class='lnr lnr-chevron-left'></span>"],
        // autoHeight:true,
        responsive: {
            0: {
                items: 1
            },
            700: {
                items: 5
            },
            1199: {
                items: 7
            }
        },
    });

    // footer collapse 
    $('.foot-ls .footer-head, .footer-mail-social .footer-head').on('click', function () {
        $(this).closest('.foot-js-coll').children('.foot-collapse').toggleClass('foot-list-active');
        $(this).toggleClass('head-active')
        // $(this).parent().
    });

    // if ($(window).width() < 800) {
    //     $('.features-container').addClass('owl-carousel');
    //     $('.features-container.owl-carousel').owlCarousel({
    //         rtl: $('html').attr('lang') == 'ar' ? true : false,
    //         loop: true,
    //         margin: 10,
    //         lazyLoad: true,
    //         mouseDrag: true,
    //         autoHeight: true,
    //         responsive: {
    //             0: {
    //                 items: 1
    //             },
    //             600: {
    //                 items: 4
    //             },
    //             1000: {
    //                 items: 4
    //             }
    //         },
    //     });
    // }
    // animation ############################################################
    new WOW().init();
    
    //scroll-top
    $(window).scroll(function (){
        $(this).scrollTop() >= 500 ? $('.go-top').fadeIn() : $('.go-top').finish().fadeOut();
    });
    $('.go-top').click(function (e) {
        e.preventDefault();
        $("html,body").stop().animate({ scrollTop: 0 }, 1000);
    });

});

//pre loader
$(window).load(function(){   
    // loading#######################################
    
    $('.loading-overlay .load').fadeOut(2000,
    function()
    {   
        $('body').css('overflow','auto') 
        $('.loading-overlay').fadeOut(1000,function(){ 
            $(this).remove();
            
        });

    });

});
