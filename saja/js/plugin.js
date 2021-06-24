//pre loader
// $(window).load(function () {
//     // loading#######################################
//     $('.loading-overlay .load').fadeOut(2000,
//         function () {
//             $('body').css('overflow', 'auto')
//             $('.loading-overlay').fadeOut(1000, function () {
//                 $(this).remove();

//             });
//         });

// });


$(document).ready(function () {
    // navbar and search 
    $('.nav-button-sj').on('click', function () {
        $('.nav-om-sj').addClass('nav-om-sj-active');
        $('body').css('overflow', 'hidden');
    });

    $('.nav-close').on('click', function () {
        $('.nav-om-sj').removeClass('nav-om-sj-active');
        $('body').css('overflow', 'auto');
    });

    // search 
    $('.search-sj-fom-om').on('click', function (e) {
        e.preventDefault();
        $('.overlay').addClass('overlay-active');
        $('.search-form-sj').addClass('search-form-active');
        $('body').css('overflow', 'hidden');
    });

    $('.overlay').on('click', function () {
        $('.nav-bar-om').removeClass('nav-active');
        $(this).removeClass('overlay-active');
        $('.search-form-sj').removeClass('search-form-active');

        $('body').css('overflow', 'auto');
    });

    // preventDefault history 
    $('.year-history-pg .year-cont-pg').on('click', function (e) {
        e.preventDefault();
    });
    // footer collapse 
    $('footer h2 , .products-filters-pg h3').on('click', function () {
        $(this).closest('.foot-js-coll').children('.foot-list-coll').toggleClass('foot-list-active');
        $(this).closest('.products-filters-pg').children('.filters-checks').toggleClass('filters-checks-actv');
        // $(this).parent().
    });


    $('.sj-loc').on('click', function () {


        if ($(window).width() < 991) {
            $(this).addClass('active');
            $('body').css('overflow', 'hidden');
            $('.overlay-map').addClass('active');
        }
    });

    $('.sj-loc .map-close').on('click', function (e) {

        if ($(window).width() < 991) {
            e.stopPropagation();
            $('.sj-loc').removeClass('active');
            $('body').css('overflow', 'visible');
            $('.overlay-map').removeClass('active');
        }
    });


    //sliders /////////////////////////////
    // $(window).bind("resize", function () {
    //     console.log($(this).width())
    //     if ($(this).width() < 991) {
    //         $('.par-warper').addClass('owl-carousel');
    //     } else {
    //         $('.par-warper').removeClass('owl-carousel');
    //     }
    // }).trigger('resize');

    $('.slider .owl-carousel').owlCarousel({
        rtl: $('html').attr('lang') == 'ar' ? true : false,
        loop: true,
        margin: 10,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        lazyLoad: true,
        mouseDrag: false,
        nav: true,
        navText: ["<img src='images/arrow.png' alt = 'next'/>", "<img src='images/arrow.png' alt = 'prev'/>"],
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

    $('.post-silder .owl-carousel').owlCarousel({
        rtl: $('html').attr('lang') == 'ar' ? true : false,
        loop: true,
        margin: 10,
        lazyLoad: true,
        mouseDrag: true,
        nav: true,
        navText: ["<img src='images/arrow-post.png' alt = 'next'/>", "<img src='images/arrow-post.png' alt = 'prev'/>"],
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

    $('.media-slider .owl-carousel , .banner-slid .owl-carousel').owlCarousel({
        rtl: $('html').attr('lang') == 'ar' ? true : false,
        loop: true,
        margin: 10,
        lazyLoad: true,
        mouseDrag: true,
        nav: true,
        navText: ["<img src='images/arrow-2.png' alt = 'next'/>", "<img src='images/arrow-2.png' alt = 'prev'/>"],
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

    if ($(window).width() < 991) {
        // console.log($(".gal-con-item gal-browse").remove());

        // add classes owl 
        $('.par-warper').addClass('owl-carousel');
        $('.vision-sj-slider-xs').addClass('owl-carousel');
        // $('.slide-products-xs').addClass('owl-carousel');
        // $('.services-sec-container').addClass('owl-carousel');
        $('.advnt-slide-xs').addClass('owl-carousel');
        $('.gallary-container').addClass('owl-carousel');
        $('.companies-sj').addClass('owl-carousel');

        $('.media-gallary .gal-cont-2').unwrap()

        $('.vision-sj-slider-xs').removeClass('row');
        // $('.slide-products-xs').removeClass('row');
        $('.advnt-slide-xs').removeClass('row');
        // $('.year-history-pg').addClass('owl-carousel');
        // initiate owls 
        $('.par-warper.owl-carousel').owlCarousel({
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
                    items: 4
                },
                1000: {
                    items: 4
                }
            },
        });
        $('.vision-sj-slider-xs.owl-carousel , .companies-sj.owl-carousel , .gallary-container.owl-carousel  , .advnt-slide-xs.owl-carousel').owlCarousel({
            rtl: $('html').attr('lang') == 'ar' ? true : false,
            loop: false,
            margin: 10,
            lazyLoad: true,
            mouseDrag: true,
            autoHeight: false,
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



    // animation ############################################################
    new WOW().init();

    // fixed header 
    window.onscroll = function () { myFunction() };

    // Get the header
    let header = document.querySelector("header");

    // Get the offset position of the navbar
    let sticky = header.offsetTop;

    // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
        if (window.pageYOffset > sticky) {
            header.classList.add("nav-sticky");
        } else {
            header.classList.remove("nav-sticky");
        }
    }


    // file-input 
    var inputs = document.querySelectorAll('.file-input')

    for (var i = 0, len = inputs.length; i < len; i++) {
        customInput(inputs[i])
    }

    function customInput(el) {
        const fileInput = el.querySelector('[type="file"]')
        const label = el.querySelector('[data-js-label]')

        fileInput.onchange =
            fileInput.onmouseout = function () {
                if (!fileInput.value) return

                var value = fileInput.value.replace(/^.*[\\\/]/, '')
                el.className += ' -chosen'
                label.innerText = value
            }
    }

    $('.check-label').on('click', function () {
        if ($(this).hasClass('other-lable')) {
            $('#order-tx').addClass('order-tx-active');
        } else {
            $('#order-tx').removeClass('order-tx-active');
        }
    });

    //scroll-top && sticky
    var a = 0;
    // var previousScroll = 0;
    $(window).scroll(function () {
        var scrollVal = $(this).scrollTop();
        $('.slider .img-block img').css('top', scrollVal);
        $('.pg-header').css('background-position', '0 ' + scrollVal + 'px');


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
                        duration: 4000,
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

    // Instantiate MixItUp ######################################################
    $('#filters-products').mixItUp(
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


