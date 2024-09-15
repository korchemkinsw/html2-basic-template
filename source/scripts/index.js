/* eslint-disable no-console */
/* в этот файл добавляет скрипты*/
import './toggler.js';
import './slider.js';

const sliderElement = document.querySelector('.level-form__slider');

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 80,
});
