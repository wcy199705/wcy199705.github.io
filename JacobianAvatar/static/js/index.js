window.HELP_IMPROVE_VIDEOJS = false;

$(document).ready(function () {
  // Navbar burger (kept for template compatibility).
  $(".navbar-burger").click(function () {
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });

  // Carousels (used by the Results section).
  var options = {
    slidesToScroll: 1,
    slidesToShow: 1,
    loop: true,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 3000,
  };
  if (window.bulmaCarousel) {
    bulmaCarousel.attach('.carousel', options);
  }
  if (window.bulmaSlider) {
    bulmaSlider.attach();
  }
});

// Qualitative Results: play the orbit clips 1.3x faster (applies to webm and mp4 alike).
$(document).ready(function () {
  document.querySelectorAll('.qual-grid video').forEach(function (v) {
    v.playbackRate = 1.3;
    v.addEventListener('loadedmetadata', function () { v.playbackRate = 1.3; });
  });
});
