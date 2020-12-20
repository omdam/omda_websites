$(document).ready(function () {

    // navbar menu button in small screen 
    $('.men-butt-om').on("click", function (e) {
        e.preventDefault();
        $(".nav-xs-om").addClass("active");
        $(".overlay-om").addClass("active");
        $('body').addClass("kjdf").css('overflow', 'hidden');
    });

    // collapse-dropdown in small screen  
    $('.cd-head-om').on("click", function (e) {
        e.preventDefault();
        if ($(window).width() < 991) {
            $(this).closest('.collapse-drop-om').children(".cd-list-om").slideToggle();
            $(this).toggleClass("arr-rotate")
        }

    });

    // search 
    $('.search-butt-om').on("click", function (e) {
        e.preventDefault();
        $(".search-st-abaya").toggleClass('active');
        $(this).toggleClass('colse-act-om');
    });

    // $('.colse-act-om').on("click" , function(e){
    //     e.preventDefault();
        
    // });

    // overlay
    $('.overlay-om , header nav .close-xs').on("click", function (e) {
        $(".search-om-form").removeClass("active");
        $(".overlay-om").removeClass("active");
        $(".search-st-omcot .close-om").removeClass("active");
        $('body').css('overflow', 'auto');
        $(".nav-xs-om").removeClass("active");
    });

    // footer collapse in small screen
    $('.collapse-head').on('click', function () {
        if ($(window).width() < 991) {
            $(this).closest('.foot-block').children('.foot-collapse').slideToggle();
            $(this).toggleClass('arr-rotate');
        }
    });


    //sliders ################################################################################
    $('.products-om .owl-carousel').owlCarousel({
        rtl: $('html').attr('lang') == 'ar' ? true : false,
        loop: true,
        margin: 30,
        lazyLoad: true,
        mouseDrag: true,
        nav: true,
        navText: ["<span class='lnr lnr-chevron-left'></span>", "<span class='lnr lnr-chevron-right'></span>"],
        // autoHeight:true,
        responsive: {
            0: {
                items: 1
            },
            700: {
                items: 1
            },
            900: {
                items: 3
            },
            1199: {
                items: 4
            }
        },
    });

    //lazy load 
    lazyLoad();
    function lazyLoad() {
        const images = document.querySelectorAll('.lazy-omd');

        const imageObserver = new IntersectionObserver((enteries) => {
            enteries.forEach(entery => {
                if (!entery.isIntersecting) {
                    return;
                } else {
                    preloadImage(entery.target);
                    imageObserver.unobserve(entery.target);
                }
            });

        });

        images.forEach(image => {
            imageObserver.observe(image)
        });
    }

    function preloadImage(img) {
        img.src = img.getAttribute('data-src');
        img.onload = () => {
            img.parentElement.classList.remove('loading-omd');
            img.parentElement.classList.add("loaded-omd");
            img.parentElement.parentElement.classList.add("lazy-head-om");
        }
    }



    // animation ############################################################
    // new WOW().init();
});


