$(document).ready(function () {


    $('.menue-butt-nav').on('click', function (e) {
        e.preventDefault();
        $('nav .nav-warper .nav-om').addClass('nav-om-active');
        $('.overlay-om').addClass('overlay-om-active');
        $('body').css('overflow', 'hidden');

    });

    $('.overlay-om , .lang-close-xs .close-xs').on('click', function () {
        $('nav .nav-warper .nav-om').removeClass('nav-om-active');
        $('.overlay-om').removeClass('overlay-om-active');
        $('body').css('overflow', 'auto');
    });

    // drop-down-om 
    $('.drop-down-om > a').on('click', function (e) {
        e.preventDefault();
        $(this).closest('.drop-down-om').toggleClass('down-active')

    });

    //slider ################################################################################
    $('.slider-om .owl-carousel').owlCarousel({
        rtl: $('html').attr('lang') == 'ar' ? true : false,
        loop: true,
        margin: 0,
        lazyLoad: true,
        autoplay: true,
        mouseDrag: false,
        animateOut: 'fadeOut',
        autoplayTimeout: 7000,
        animateIn: 'fadeIn',
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

    $('.clients-slider .owl-carousel').owlCarousel({
        rtl: $('html').attr('lang') == 'ar' ? true : false,
        loop: true,
        margin: 10,
        lazyLoad: true,
        mouseDrag: true,
        nav: true,
        navText: ["<span class='lnr lnr-chevron-right'></span>", "<span class='lnr lnr-chevron-left'></span>"],
        // autoHeight:true,
        responsive: {
            0: {
                items: 1
            },
            700: {
                items: 4
            },
            1199: {
                items: 6
            }
        },
    });

    try {
        // Parallax Effect
        $(window).on("scroll", function () {
            // if ($(window).width() >= 767) {
            var ypos = (window.pageYOffset) - $("header").innerHeight(),
                img = $(".slider-om .block");
            if (img && $(window).scrollTop() >= $("header").innerHeight() && $(window).width() > 991) {
                img.css("top", ypos * 1 + "px");
            }
            else {
                img.css("top", "0px");
            }
            // }
        });
    } catch (error) { }

    //scroll-top && sticky
    var a = 0;
    // var previousScroll = 0;
    $(window).scroll(function () {
        var oTop = $('.counters , footer').offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
            $('.number').each(function () {
                var $this = $(this),
                    countTo = $this.attr('data-count');
                $({
                    countNum: $this.text()
                }).animate({
                    countNum: countTo
                },
                    {
                        duration: 2000,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function () {
                            $this.text(this.countNum);
                        }
                    });
            });
            a = 1;
        }

    });


    if ($(window).width() < 991) {

        // $('.slider-latest-xs').removeClass('row');
        // $('.latest-added .latest-added-content').unwrap()
        // $('.slider-latest-xs').addClass('owl-carousel');

        $('.lat-news-slider-xs').removeClass('row');
        $('.latest-news .news-block').unwrap()
        $('.lat-news-slider-xs').addClass('owl-carousel');


        $('.lat-news-slider-xs.owl-carousel').owlCarousel({
            rtl: $('html').attr('lang') == 'ar' ? true : false,
            loop: true,
            margin: 10,
            lazyLoad: true,
            mouseDrag: true,
            autoHeight: true,
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

    }


    // footer collapse 
    $('.footer-info .footer-head').on('click', function () {
        $(this).closest('.foot-js-coll').toggleClass('foot-collaps-active');
        // $(this).parent()..children('.foot-collapse')
    });



    // animation ############################################################
    new WOW().init();

    // fixed header 
    window.onscroll = function () { myFunction() };

    // Get the header
    let header = document.querySelector("nav");

    // Get the offset position of the navbar
    let sticky = header.offsetTop;

    // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
        if (window.pageYOffset > sticky + 200) {
            header.classList.add("nav-sticky");
        } else {
            header.classList.remove("nav-sticky");
        }
    }


    // Instantiate MixItUp ######################################################
    $('#filters-container').mixItUp(
        {

            "animation": {
                "duration": 518,
                "nudge": true,
                "reverseOut": false,
                "effects": "fade translateX(20%)"
            }

        }
    );

});

//pre loader
$(window).load(function () {
    // loading#######################################

    $('.loading-overlay .load').fadeOut(2000,
        function () {
            $('body').css('overflow', 'auto')
            $('.loading-overlay').fadeOut(1000, function () {
                $(this).remove();
            });

        });

});
