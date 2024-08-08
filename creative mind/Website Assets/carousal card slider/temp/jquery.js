var multipleCardCarousel = document.querySelector("#carouselExampleControls");

if (window.matchMedia("(min-width: 768px)").matches) {
  // Code for desktop and tablet views
  var carousel = new bootstrap.Carousel(multipleCardCarousel, {
    interval: false,
  });
  var carouselWidth = $(".carousel-inner")[0].scrollWidth;
  var cardWidth = $(".carousel-item").width();
  var scrollPosition = 0;

  $("#carouselExampleControls .carousel-control-next").on("click", function () {
    if (scrollPosition < carouselWidth - cardWidth * 3) {
      scrollPosition += cardWidth;
      $("#carouselExampleControls .carousel-inner").animate(
        { scrollLeft: scrollPosition },
        600
      );
    }
  });

  $("#carouselExampleControls .carousel-control-prev").on("click", function () {
    if (scrollPosition > 0) {
      scrollPosition -= cardWidth;
      $("#carouselExampleControls .carousel-inner").animate(
        { scrollLeft: scrollPosition },
        600
      );
    }
  });

  // Drag event for desktop view
  var isMouseDown = false;
  var startX, scrollLeft;

  $("#carouselExampleControls .carousel-inner").mousedown(function (e) {
    isMouseDown = true;
    startX = e.pageX - this.offsetLeft;
    scrollLeft = this.scrollLeft;
  });

  $(document).mouseup(function () {
    isMouseDown = false;
  });

  $(document).mousemove(function (e) {
    if (!isMouseDown) return;
    e.preventDefault();
    var x = e.pageX - this.offsetLeft;
    var scroll = (x - startX) * 1.5;
    $("#carouselExampleControls .carousel-inner").scrollLeft(scrollLeft - scroll);
  });
} else {
  // Code for mobile view
  $(multipleCardCarousel).carousel({
    interval: 4000,
  });

  // Touch event for mobile view
  var touchStartX = 0;
  var touchEndX = 0;
  var minSwipeDistance = 50;

  $("#carouselExampleControls .carousel-inner").on("touchstart", function (e) {
    touchStartX = e.originalEvent.touches[0].pageX;
  });

  $("#carouselExampleControls .carousel-inner").on("touchend", function (e) {
    touchEndX = e.originalEvent.changedTouches[0].pageX;
    var swipeDistance = touchStartX - touchEndX;

    if (Math.abs(swipeDistance) >= minSwipeDistance) {
      if (swipeDistance > 0) {
        $(multipleCardCarousel).carousel("next");
      } else {
        $(multipleCardCarousel).carousel("prev");
      }
    }
  });
}