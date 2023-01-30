import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import { EffectFade } from 'swiper';
import Swiper, { Autoplay } from 'swiper';
Swiper.use([Autoplay]);

const swiper = new Swiper('.form-swiper', {
  modules: [EffectFade, Autoplay],
  effect: 'fade',
  loop: true,
  slidesPerView: 1,
  slidesPerGroup: 1,
  fadeEffect: {
    crossFade: true,
  },
  autoplay: {
    delay: 3000,
  },
});
