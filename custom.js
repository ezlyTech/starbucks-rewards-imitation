// $('.slider').slick({
//     dots: true,
//     infinite: false,
//     slidesToShow: 1,
//     prevArrow: '<span class="priv_arrow"><i class="fas fa-angle-left fa-2x"></i></i></span>',
//     nextArrow: '<span class="next_arrow"><i class="fas fa-angle-right fa-2x"></i></span>',
// });


$(document).ready(function(){
    $('.your-class').slick({
        dots: true,
        infinite: false,
        prevArrow: '<span class="priv_arrow"><i class="fas fa-chevron-left"></i></span>',
        nextArrow: '<span class="next_arrow"><i class="fas fa-chevron-right"></i></span>',
    });
  });
  
$('.modal').on('shown.bs.modal', function (e) {
    $('.your-class').slick('setPosition');
    $('.wrap-modal-slider').addClass('open');
  });

$('.your-class').on('afterChange', function(event, slick, currentSlide) {
    console.log(slick, currentSlide);
    if (slick.$slides.length-1 == currentSlide) {
        console.log("Last slide");
        $(".ok").css("visibility", "visible");
    }
    else {
        $(".ok").css("visibility", "hidden");
    }
  })