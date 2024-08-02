$(document).ready(function () {
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
