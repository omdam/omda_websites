$(document).ready(function () {

    $('.nav-men-bt').on('click', function () {
        $('.nav-bar-om').addClass('nav-active');
        // $('.navoverlay').addClass('navoverlay-active');
        $('body').css('overflow', 'hidden');

    });

    $('.navoverlay, .nav-bar-om .close').on('click', function () {
        $('.nav-bar-om').removeClass('nav-active');
        $('.navoverlay').removeClass('navoverlay-active');
        $('.header-sh-lang').removeClass('header-sh-active');
        $('body').css('overflow', 'auto');
    });

    $('.search-xs-om').on('click', function () {
        $('.header-sh-lang').addClass('header-sh-active');
        $('.navoverlay').addClass('navoverlay-active');
        $('body').css('overflow', 'hidden');
    });
    // Instantiate MixItUp ######################################################
    $('.collection-imgs').mixItUp(
        {

            "animation": {
                "duration": 518,
                "nudge": true,
                "reverseOut": false,
                "effects": "fade translateX(20%)"
            },
            load: {
                filter: '.category-1'
            }

        }
    );

    // fixed header 
    window.onscroll = function () { myFunction() };

    // Get the header
    let header = document.querySelector("#nav-header");

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


    $('.input-contact').focus(function () {
        // console.log($(this).parent().find(".floating-label"));
        $(this).parent().find(".floating-label").addClass('label-active');
    });

    $(".input-contact").focusout(function () {
        if ($(this).val() == '') {
            $(this).parent().find(".floating-label").removeClass('label-active');
        };
    });


    // animation ############################################################
    new WOW().init();


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
