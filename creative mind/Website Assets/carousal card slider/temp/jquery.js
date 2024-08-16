/* var multipleCardCarousel = document.querySelector("#carouselCardControls");

if (window.matchMedia("(min-width: 768px)").matches) {
  // Code for desktop and tablet views
  var carousel = new bootstrap.Carousel(multipleCardCarousel, {
    interval: false,
  });
  var carouselWidth = $(".carousel-inner-category")[0].scrollWidth;
  var cardWidth = $(".item-category").width();
  var scrollPosition = 0;

  $("#carouselCardControls .carousel-control-next").on("click", function () {
    if (scrollPosition < carouselWidth - cardWidth * 4) {
      scrollPosition += cardWidth;
      $("#carouselCardControls .carousel-inner-category").animate(
        { scrollLeft: scrollPosition },
        600
      );
    }
  });

  $("#carouselCardControls .carousel-control-prev").on("click", function () {
    if (scrollPosition > 0) {
      scrollPosition -= cardWidth;
      $("#carouselCardControls .carousel-inner-category").animate(
        { scrollLeft: scrollPosition },
        600
      );
    }
  });

  // Drag event for desktop view
  var isMouseDown = false;
  var startX, scrollLeft;

  $("#carouselCardControls .carousel-inner-category").mousedown(function (e) {
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
    $("#carouselCardControls .carousel-inner-category").scrollLeft(scrollLeft - scroll);
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

  $("#carouselCardControls .carousel-inner-category").on("touchstart", function (e) {
    touchStartX = e.originalEvent.touches[0].pageX;
  });

  $("#carouselCardControls .carousel-inner-category").on("touchend", function (e) {
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
} */

$(document).ready(function () {
  var multipleCardCarousel = document.querySelector("#carouselCardsControls");
  if (window.matchMedia("(min-width: 768px)").matches) {
    var carousel = new bootstrap.Carousel(multipleCardCarousel, {
      interval: false,
    });
    var carouselWidth = $(".carousel-inner-category")[0].scrollWidth;
    var cardWidth = $(".carousel-item").width();
    var scrollPosition = 0;
    $("#carouselCardsControls .carousel-control-next").on("click", function () {
      if (scrollPosition < carouselWidth - cardWidth * 4) {
        scrollPosition += cardWidth;
        $("#carouselCardsControls .carousel-inner-category").animate(
          { scrollLeft: scrollPosition },
          600
        );
      }
    });
    $("#carouselCardsControls .carousel-control-prev").on("click", function () {
      if (scrollPosition > 0) {
        scrollPosition -= cardWidth;
        $("#carouselCardsControls .carousel-inner-category").animate(
          { scrollLeft: scrollPosition },
          600
        );
      }
    });
  } else {
    $(multipleCardCarousel).addClass("slide");
  }
});
