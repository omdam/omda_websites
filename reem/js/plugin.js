$(document).ready(function(){

    // owl-sliders  ############################################################
    $("#slider-1").owlCarousel({
        navigation : false, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true,
    });
 
    $(".carousel-2").owlCarousel({
        itemsCustom : [
            [0, 1],
            [450, 2],
            [600, 3],
            [700, 3],
            [1000, 4],
            [1200, 5],
            [1400, 5],
            [1600, 5]
          ],
        navigation : false
        
    });


    // Instantiate MixItUp ######################################################
    $('#Container-1').mixItUp({
        layout: {
            display: 'block'
        },
        selectors: {
            filter: '.filter-1'
        }
    });

    $('#Container-2').mixItUp({
        layout: {
            display: 'block'
        },
        selectors: {
            filter: '.filter-2'
        }
    });
});
