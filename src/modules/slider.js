import Swiper, { Autoplay, Pagination, Navigation, EffectFade } from 'swiper';

export default {
  init() {
    const swiper = new Swiper('.swiper', {
      modules: [Navigation, Pagination, Autoplay, EffectFade],
      speed: 900,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      slidesPerView: 1,
      spaceBetween: 0,
      effect: 'fade',
      loop: true,
 /*      autoplay: {
        delay: 3000,
      }, */
      fadeEffect: { crossFade: true },
      autoHeight: true,
    });


    const swiperMob = new Swiper('.swiper-mob', {
      modules: [Navigation, Pagination, Autoplay, EffectFade],
      speed: 900,

      pagination: {
        el: '.swiper-pagination-mob',
        clickable: true,
      },
      slidesPerView: 1,
      spaceBetween: 10,
      loop: false,
      autoHeight: true,
    });

    


  }
}