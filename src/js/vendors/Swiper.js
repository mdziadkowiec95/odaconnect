// import { Swiper, Navigation, Pagination, Autoplay, EffectFade } from 'swiper/dist/js/swiper.esm.js';


// Swiper.use([Navigation, Pagination, Autoplay, EffectFade]);

import Swiper from 'swiper/dist/js/swiper'

const swiper = new Swiper('.swiper-container', {
  // autoplay: {
  //   delay: 5000,
  // },
  effect: 'fade',
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
    arrows: true,
  },
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});  