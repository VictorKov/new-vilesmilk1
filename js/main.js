'use strict'

var swiper = new Swiper(".mySwiper", {
    autoplay: {
        delay: 6500,
        disableOnInteraction: false,
      },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
  });