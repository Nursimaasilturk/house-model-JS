const frenchHome = document.querySelector("#french");
const tudorHome = document.querySelector("#tudor");
const mediHome = document.querySelector("#medi");
const victorianHome = document.querySelector("#victorian");
frenchHome.addEventListener("click", function (e) {
  window.setTimeout(function () {
    location.href =
      "https://www.bhg.com/home-improvement/exteriors/curb-appeal/country-french-style/";
  }, 500);
});
tudorHome.addEventListener("click", function (e) {
  window.setTimeout(function () {
    location.href =
      "https://www.bhg.com/home-improvement/exteriors/curb-appeal/tudor-style-home/";
  }, 500);
});
mediHome.addEventListener("click", function (e) {
  window.setTimeout(function () {
    location.href =
      "https://www.bhg.com/home-improvement/exteriors/curb-appeal/mediterranean-style-home/";
  }, 500);
});
victorianHome.addEventListener("click", function (e) {
  window.setTimeout(function () {
    location.href =
      "https://www.bhg.com/home-improvement/exteriors/curb-appeal/victorian-style-home-ideas/";
  }, 500);
});

$(function () {
  $(".tab-panels .tabs li").on("click", function () {
    var $panel = $(this).closest(".tab-panels");
    $panel.find(".tabs li.active").removeClass("active");
    $(this).addClass("active");
    //figure out which panel to show
    var panelToShow = $(this).attr("rel");

    //hide current panel
    $panel.find(".panel.active").slideUp(400, showNextPanel);
    //show new panel
    function showNextPanel() {
      $(this).removeClass("active");
      $("#" + panelToShow).slideDown(400, function () {
        $(this).addClass("active");
      });
    }
  });
});
