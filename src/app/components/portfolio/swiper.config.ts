import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

export const swiperConfig: SwiperConfigInterface = {
  direction: 'horizontal',
  // loop: true,
  speed: 800,
  slidesPerView: 3,
  spaceBetween: 50,
  navigation: true,
  keyboard: true,
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
