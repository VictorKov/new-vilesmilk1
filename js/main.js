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

var swiper_1 = new Swiper(".mySwiper-1", {
  grabCursor: true,

  autoplay: {
    delay: 6500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});