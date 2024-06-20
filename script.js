let currentIndex = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.carousel-item');
  const totalSlides = slides.length;

  if (index >= totalSlides) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalSlides - 1;
  } else {
    currentIndex = index;
  }

  // Update the carousel's transform property to show the correct slide
  const carousel = document.querySelector('.carousel');
  carousel.style.transform = `translateX(${-currentIndex * 100}%)`;

  // Update the active class for slides
  slides.forEach((slide, idx) => {
    if (idx === currentIndex) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });
}

document.querySelector('.prev').addEventListener('click', () => {
  showSlide(currentIndex - 1);
});

document.querySelector('.next').addEventListener('click', () => {
  showSlide(currentIndex + 1);
});

document.addEventListener('DOMContentLoaded', () => {
  showSlide(currentIndex);
});







// scripts.js

let ci = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.team-image');
  const totalSlides = Math.ceil(slides.length / 3);

  if (index >= totalSlides) {
    ci = 0;
  } else if (index < 0) {
    ci = totalSlides - 1;
  } else {
    ci = index;
  }

  const carousel = document.querySelector('.team1');
  carousel.style.transform = `translateX(${-ci * 100}%)`;

  updateDots();
}

function updateDots() {
  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot, idx) => {
    if (idx === ci) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  showSlide(ci);
});

function currentSlide(index) {
  showSlide(index);
}

