import { SwiperConfigInterface, SwiperNavigationInterface } from 'ngx-swiper-wrapper';

export const swiperConfig: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 3,
  spaceBetween: 40,
  navigation: true,
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
