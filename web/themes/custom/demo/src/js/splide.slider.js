"use strict";

(function (Drupal, once) {
  Drupal.behaviors.splideInit = {
    attach: function attach(context, settings) {
      once('splideInit', '.splide', context).forEach(function (splideElement) {
        var splide = new Splide(splideElement, {
          type: 'loop',
          perPage: 4,
          gap: "16px",
          pagination: false,
          arrows: true,
          autoHeight: true,
          breakpoints: {
            992: {
              arrows: false,
              pagination: true
            }
          }
        });
        splide.mount();
      });
    }
  };
})(Drupal, once);