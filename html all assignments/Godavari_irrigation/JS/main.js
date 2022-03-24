jQuery(document).ready(function($){

    $('#news-images').owlCarousel({
        items : 3,
        loop:true,
        margin:10,
        center:true,
        nav:true,
        slideBy: 1,
        rewind: false,
        navSpeed: 200,
        autoplay:true,
        autoplayTimeout:4000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })
    })
    
  
  
 