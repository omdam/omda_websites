$(document).ready(function(){

    // animation ############################################################
    new WOW().init();


    // slider 1 ############################################################
    $('.slide-2').owlCarousel({
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        transitionStyle: true,
        smartSpeed: 1000,
        rtl:true,
        loop:true,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:3
            },
            1199:{
                items:5
            }
        }
    });

    // slider 2 ############################################################
    $('.slide-3').owlCarousel({
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        transitionStyle: true,
        smartSpeed: 1000,
        rtl:true,
        mouseDrag:false,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:2
            },
            380:{
                items:3
            },
            530:{
                items:4
            },
            768:{
                items:6
            },
            1199:{
                items:7
            }
        }
    });

    // map ############################################################
    var locations = [
        ['Bondi Beach', -33.890542, 151.274856, 4],
        ['Coogee Beach', -33.923036, 151.259052, 5],
        ['Cronulla Beach', -34.028249, 151.157507, 3],
        ['Manly Beach', -33.80010128657071, 151.28747820854187, 2],
        ['Maroubra Beach', -33.950198, 151.259302, 1]
    ];

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: new google.maps.LatLng(-33.92, 151.25),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {  
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map
        });

        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infowindow.setContent(locations[i][0]);
                infowindow.open(map, marker);
            }
        })(marker, i));
    }

    // scrool-top ############################################################
    $('.rights .up-icon').click(function(){
        $("html,body").animate({scrollTop : 0},1000)
    });

    // side menu ##############################################################
    $('header .nav-mc').click(function(){
        $('header .nav-c').addClass('nav-go');
        $('#overlay').show();
    });

    $('#overlay').click(function(){
        $('header .nav-c').removeClass('nav-go');
        $('header .f-search').removeClass('sh-act');
        $('#overlay').hide();
    });

    // search ##############################################################
    $('header .search-bt button.sh-bt').click(function(){
        $('header .f-search').addClass('sh-act');
        $('#overlay').show();
    });

});
