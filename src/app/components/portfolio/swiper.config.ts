import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

export const swiperConfig: SwiperConfigInterface = {
  direction: 'horizontal',
  resistanceRatio: 0,
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
      slidesPerView: 2
    },
    768: {
      slidesPerView: 1,
      centeredSlides: true
    }
  }
};
