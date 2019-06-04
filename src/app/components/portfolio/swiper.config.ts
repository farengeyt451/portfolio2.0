import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

export const swiperConfig: SwiperConfigInterface = {
  direction: 'horizontal',
  resistanceRatio: 0,
  simulateTouch: false,
  speed: 800,
  slidesPerView: 3,
  spaceBetween: 50,
  navigation: true,
  keyboard: true,
  slideToClickedSlide: false,
  breakpoints: {
    1100: {
      spaceBetween: 35
    },
    991: {
      slidesPerView: 2,
      spaceBetween: 35
    },
    768: {
      slidesPerView: 'auto',
      spaceBetween: 35,
      speed: 200
    },
    479: {
      slidesPerView: 'auto',
      spaceBetween: 25,
      speed: 250
    }
  }
};
