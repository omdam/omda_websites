/* global src */

$(document).ready(function() {

    new WOW().init();

    $(".main").onepage_scroll({
        dotstyle: "hop", //hop ,fillup ,puff
        sectionContainer: "section",
        responsiveFallback: false,
        loop: true
    });

    $('.trade .trade-img').click(function(){
        var data = $(this).attr('data-id');
        $('#' + data).addClass('trade-go');
    });

     $('.trade .back-bt p').click(function(){
        $('.trade .trade-mark').removeClass('trade-go');
    });

    // pl-moda###########################################
    $('#bt-modal').click(function(){;
        $('#pl-modal').addClass('modal-go');
        $('.place .overlay').fadeIn();
    });

    $('.place .overlay , .place .pl-modal .mod-close').click(function(){;
        $('#pl-modal').removeClass('modal-go');
        $('.place .overlay').hide();
    });

    // site menu ###########################################
    $('#site-bt').click(function(){;
        $('#site-men').stop().addClass('men-go');
        $('.menu .overlay').fadeIn();
    });

    $('.menu .overlay , .navbar-default .navbar-collapse > img').click(function(){;
        $('#site-men').removeClass('men-go');
        $('.menu .overlay').hide();
    });

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

    $('.navbar-default .navbar-nav > li > a').click(function(event){
        event.preventDefault();

        var viwe_p = $(this).attr('href');
        var view_s = viwe_p.split('');

        $('.dotstyle li').eq(view_s[1]).trigger('click');
    });

});