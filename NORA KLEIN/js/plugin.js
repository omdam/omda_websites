$(document).ready(function(){

    // animation ############################################################
    new WOW().init();

    // slider 1 ############################################################
    $('.slide-1').owlCarousel({
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        transitionStyle: true,
        smartSpeed: 1000,
        rtl:true,
        margin:10,
        loop:true,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:1
            },
            1199:{
                items:1
            }
        },
        navText: [
            "<img src = 'images/pr-nx.png' alt = 'icon'/>",
            "<img src = 'images/pr-prev.png' alt = 'icon'/>"
        ]
    });


});
