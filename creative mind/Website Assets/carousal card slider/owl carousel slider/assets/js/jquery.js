$(document).ready(function () {
  $(".owl-carousel.sliderOne").owlCarousel({
    loop: true,
    margin: 10,
    dots: true,
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
    },
  });
});
