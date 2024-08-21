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

/* navigation bar  */
$(document).ready(function () {
  $(".navItems").click(function () {
    $(".navItems").removeClass("active");
    $(this).addClass("active");
  });
});

/* carousel card slider */

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

$(document).ready(function () {
  $(".sliderOne").owlCarousel({
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
        items: 2,
        nav: false,
        margin:5,
      },
      1000: {
        items: 3,
        nav: true,
        loop: false,
      },
      1030: {
        items: 4,
        nav: true,
        loop: false,
      },
    },
  });
});


/* hero section slider */
$(document).ready(function () {
  $(".heroSlider").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    animateOut: "fadeOut",
  });
});

/* search icon */

$(document).ready(function () {
  $("#searchInput").hide();
  $("#searchPanel").hide();

  $(".searchIcon").on("click", function () {
    $("#searchPanel")
      .addClass("searchPanelBg")
      .animate(
        {
          width: "toggle",
          opacity: "toggle",
        },
        {
          duration: 500,
          easing: "swing",
          complete: function () {
            $(this).focus();
          },
        }
      );
    $("#searchInput").animate(
      {
        width: "toggle",
        opacity: "toggle",
      },
      {
        duration: 500,
        easing: "swing",
        complete: function () {
          $(this).focus();
        },
      }
    );
  });
});
