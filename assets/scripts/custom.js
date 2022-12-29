$(document).ready(function () { 
    $(document).click(function () {
       // if($(".navbar-collapse").hasClass("in")){
         $('.navbar-collapse').collapse('hide');
       // }
    });
  });



$('#expertise-slider').owlCarousel({
    loop: true,
    autoplay:true,
    rewind: true,
    // autoplayTimeout:5000,
    autoplayHoverPause:true,
    margin: 20,
    dots: false,
    // navContainer: '#experties-sec',
    nav: true,
    navText:["<div class='nav-btn prev-slide fas fa-chevron-left'></div>","<div class='nav-btn next-slide fas fa-chevron-right'></div>"],
    items: 3,
    responsiveClass: true,
    responsive:{
        0:{
            items:1
        },
        400:{
            items:2
        },
        567:{
            items:3
        },
        991: {
            items:4
        },
    }
});