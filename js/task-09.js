function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const backgroundColorRef = document.querySelector('.color');
const buttonChangeColorRef = document.querySelector('.change-color');

const colorHandler = function () {
  const randomColor = getRandomHexColor();

  document.body.style.backgroundColor = randomColor;
  backgroundColorRef.textContent = randomColor;
};

buttonChangeColorRef.addEventListener('click', colorHandler);
