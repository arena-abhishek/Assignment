$(document).ready(function () {
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
});
