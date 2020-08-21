"use strict";

var $projectSliderEl = $('[data-project-slider]');
var projectSlider = new Swiper($projectSliderEl, {
  slidesPerView: 1,
  resistanceRatio: 0,
  pagination: {
    el: '[data-project-slider-pag]'
  },
  navigation: {
    nextEl: '[data-project-slider-next]',
    prevEl: '[data-project-slider-prev]'
  }
});
//# sourceMappingURL=development.js.map
