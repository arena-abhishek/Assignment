$(document).ready(function () {
  /* show details  */

  $(".epsBtn").click(function () {
    var $fqs = $(this).closest(".container").find(".episodes");
    $fqs.slideToggle("fast");
    var $icon = $(this).find("i");
    if ($icon.hasClass("bi-arrow-down-short")) {
      $icon.removeClass("bi-arrow-down-short").addClass("bi-arrow-up-short");
    } else {
      $icon.removeClass("bi-arrow-up-short").addClass("bi-arrow-down-short");
    }
  });

  /* faqs */
  $(".faqBtn").click(function () {
    console.log("this is run");
    var $fqs = $(this).closest(".row").find(".fqs");
    $fqs.slideToggle("slow");
    var $icon = $(this).find("i");
    if ($icon.hasClass("bi-plus")) {
      $icon.removeClass("bi-plus").addClass("bi-dash");
    } else {
      $icon.removeClass("bi-dash").addClass("bi-plus");
    }
  });
});

/* movies and shows hero section touch swiping */

$(document).ready(function () {
  const carousel = $("#carouselExampleCaptions");
  const carouselInstance = new bootstrap.Carousel(carousel);

  // Mouse events
  carousel.on("mousedown", function (event) {
    const startX = event.clientX;
    const startY = event.clientY;
    // console.log("run")
    $(document).on("mousemove", function (event) {
      const deltaX = event.clientX - startX;
      const deltaY = event.clientY - startY;
      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        // horizontal drag
        if (deltaX > 50) {
          carouselInstance.prev();
        } else if (deltaX < -50) {
          carouselInstance.next();
        }
      }
      $(document).off("mousemove");
    });
  });

  // Touch events
  carousel.on("touchstart", function (event) {
    const startX = event.originalEvent.touches[0].clientX;
    const startY = event.originalEvent.touches[0].clientY;
    $(document).on("touchmove", function (event) {
      const deltaX = event.originalEvent.touches[0].clientX - startX;
      const deltaY = event.originalEvent.touches[0].clientY - startY;
      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        // horizontal drag
        if (deltaX > 50) {
          carouselInstance.prev();
        } else if (deltaX < -50) {
          carouselInstance.next();
        }
      }
      $(document).off("touchmove");
    });
  });

  // Swipe gestures
  carousel.on("swipeleft", function () {
    carouselInstance.next();
  });

  carousel.on("swiperight", function () {
    carouselInstance.prev();
  });
});

/* navigation bar */
$(document).ready(function () {
  $(".navItems").click(function () {
    $(".navItems").removeClass("active");
    $(this).addClass("active");
  });
});
