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
