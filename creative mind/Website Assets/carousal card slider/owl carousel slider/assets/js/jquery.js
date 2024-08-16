$(document).ready(function () {
  $(".sliderOne").owlCarousel({
    loop: true,

    dots:true,
    autoplay: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 3,
        nav: false,
      },
      1000: {
        items: 4,
        nav: true,
        loop: false,
      },
      1030: {
        items: 5,
        nav: true,
        loop: false,
      },
    },
  });
});