import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

export const swiperConfig: SwiperConfigInterface = {
  direction: 'horizontal',
  resistanceRatio: 0,
  navigation: true,
  keyboard: true,
  slideToClickedSlide: false,
  grabCursor: true,
  preventInteractionOnTransition: true,
  observer: true,
  simulateTouch: false,
  breakpoints: {
    1100: {
      slidesPerView: 3,
      spaceBetween: 30,
      speed: 800
    },
    991: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 35,
      speed: 200
    },
    560: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    410: {
      slidesPerView: 1.4,
      spaceBetween: 20
    },

    320: {
      slidesPerView: 1.15,
      spaceBetween: 15,
      speed: 250
    }
  }
};
