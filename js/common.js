"use strict";

/*=require ./includes/blocks/*.js*/
var $bannerSliderEl = $('[data-banner-slide]');
var bannerSlider = new Swiper($bannerSliderEl, {
  slidesPerView: 1,
  resistanceRatio: 0,
  pagination: {
    el: '[data-banner-slider-pag]',
    clickable: true
  },
  navigation: {
    nextEl: '[data-banner-slider-next]',
    prevEl: '[data-banner-slider-prev]'
  }
});
var $projectSliderEl = $('[data-project-slider]');
$projectSliderEl.each(function (index, el) {
  var $sliderEl = $(el);
  new Swiper($sliderEl, {
    slidesPerView: 1,
    resistanceRatio: 0,
    pagination: {
      el: $sliderEl.parent().find('[data-project-slider-pag]'),
      clickable: true
    },
    navigation: {
      nextEl: $sliderEl.find('[data-project-slider-next]'),
      prevEl: $sliderEl.find('[data-project-slider-prev]')
    }
  });
});
//# sourceMappingURL=common.js.map
