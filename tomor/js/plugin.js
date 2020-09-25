$(document).ready(function () {


    $('.logo-search .nav-menu').on('click',function(){
        $('.nav-bar-om').addClass('nav-active');
        $('.navoverlay').addClass('navoverlay-active');
        $('body').css('overflow','hidden');
        
    });

    $('.navoverlay').on('click',function(){
        $('.nav-bar-om').removeClass('nav-active');
        $('.navoverlay').removeClass('navoverlay-active');
        $('body').css('overflow','auto');
    });

    // animation ############################################################
    new WOW().init();


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
