const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('img'));
const slideCount = slides.length;
let slideIndex = 0;

const createDots = () => {
  const dotContainer = document.querySelector('.slider-dots');
  slides.forEach((_, index) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (index === slideIndex) {
      dot.classList.add('active');
    }
    dot.addEventListener('click', () => {
      slideIndex = index;
      slide();
      updateDots();
    });
    dotContainer.appendChild(dot);
  });
};

const updateDots = () => {
  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot, index) => {
    if (index === slideIndex) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
};

createDots();

prevButton.addEventListener('click', () => {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  slide();
  updateDots();
});

nextButton.addEventListener('click', () => {
  slideIndex = (slideIndex + 1) % slideCount;
  slide();
  updateDots();
});


const slide = () => {
  const imageWidth = slider.clientWidth;
  const slideOffset = -slideIndex * imageWidth;
  slider.style.transform = `translateX(${slideOffset}px)`;
}

window.addEventListener('load', () => {
  slide();
});