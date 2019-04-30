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
    1200: {
      slidesPerView: 3,
      spaceBetween: 10
    },
    768: {
      slidesPerView: 2
    },
    480: {
      slidesPerView: 1
    }
  }
};
