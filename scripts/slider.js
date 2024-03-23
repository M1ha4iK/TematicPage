document.addEventListener('DOMContentLoaded', function() {
    // Получаем необходимые элементы из DOM
const slider = document.querySelector(".sights-img-list");
const prevBtn = document.querySelector(".sights-contorls img:first-child");
const nextBtn = document.querySelector(".sights-contorls img:last-child");

// Устанавливаем начальное значение индекса слайда
let slideIndex = 1;
const slideWidth = slider.children[1].offsetWidth;

// Добавляем обработчики событий на кнопки влево и вправо
prevBtn.addEventListener("click", slideLeft);
nextBtn.addEventListener("click", slideRight);

// Функция для листания слайдов влево
function slideLeft() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slider.children.length - 3;
  }
  updateSliderPosition();
}

// Функция для листания слайдов вправо
function slideRight() {
  slideIndex++;
  if (slideIndex >= slider.children.length - 2) {
    slideIndex = 0;
  }
  updateSliderPosition();
}

// Функция для обновления позиции слайдера
function updateSliderPosition() {
  const slideOffset = slideWidth * slideIndex;
  slider.style.transform = `translateX(-${slideOffset}px)`;
}

// Инициализация начальной позиции слайдера
updateSliderPosition();
});