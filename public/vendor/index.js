

$(document).on("click", ".pricing .pricing-top-btn button", function () {
  $(".pricing .pricing-top-btn button").removeClass("active");
  $(this).addClass("active");
});

$(document).on("click", ".pricing .pricing-top-btn #purple", () => {
  $("#purple-show").show();
  $("#metal-show").hide();
  $("#premium-show").hide();
});

$(document).on("click", ".pricing .pricing-top-btn #premium", () => {
  $("#purple-show").hide();
  $("#metal-show").hide();
  $("#premium-show").show();
});

$(document).on("click", ".pricing .pricing-top-btn #metal", () => {
  $("#purple-show").hide();
  $("#metal-show").show();
  $("#premium-show").hide();
});
