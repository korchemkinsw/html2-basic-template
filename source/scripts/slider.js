import SLIDER_IMAGES from './data.js';

const slider = document.querySelector('.slider');
const prewButton = slider.querySelector('.button--prew');
const nextButton = slider.querySelector('.button--next');
const sliderSteps = slider.querySelectorAll('.slider-step');
const sliderImg = slider.querySelector('.slide__image');
const slidersImages = SLIDER_IMAGES;

let currentSlide = 0;

slider.querySelector('.slider-step--current').classList.remove('slider-step--current');
sliderSteps[currentSlide].classList.add('slider-step--current');
sliderImg.src = slidersImages[currentSlide];

prewButton.addEventListener('click', ()=>{
  sliderSteps[currentSlide].classList.remove('slider-step--current');
  currentSlide = currentSlide - 1;
  if (currentSlide < 0) {
    currentSlide = slidersImages.length
     - 1;
  }
  sliderSteps[currentSlide].classList.add('slider-step--current');
  sliderImg.src = slidersImages[currentSlide];
});
nextButton.addEventListener('click', ()=>{
  sliderSteps[currentSlide].classList.remove('slider-step--current');
  currentSlide = currentSlide + 1;
  if (currentSlide === slidersImages.length

  ) {
    currentSlide = 0;
  }
  sliderSteps[currentSlide].classList.add('slider-step--current');
  sliderImg.src = slidersImages[currentSlide];
});

sliderSteps.forEach((step, index) => {
  step.addEventListener('click', ()=>{
    sliderSteps[currentSlide].classList.remove('slider-step--current');
    currentSlide = index;
    sliderSteps[currentSlide].classList.add('slider-step--current');
    sliderImg.src = slidersImages[currentSlide];
  });
});
