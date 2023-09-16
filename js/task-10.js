// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// const refs = {
//   controlsEl: document.querySelector('#controls'),
//   createBtn: document.querySelector('[data-create]'),
//   destroyBtn: document.querySelector('[data-destroy]'),
//   boxesContainer: document.querySelector('#boxes'),
// };

// const inputEl = refs.controlsEl.firstElementChild;

// let inputValue = 0;
// let width = 30;
// let height = 30;

// const getInputValue = e => {
//   inputValue = Number(e.target.value);
// };

// inputEl.addEventListener('input', getInputValue);

// const destroyAll = () => {
//   refs.boxesContainer.innerHTML = '';
//   width = 30;
//   height = 30;
// };

// const createBoxes = amount => {
//   inputEl.value = '';

//   let arr = [];

//   for (let i = 0; i < amount; i += 1) {
//     if (amount === 0) {
//       return;
//     }

//     const randomColor = getRandomHexColor();
//     const boxEl = `<div style="background-color: ${randomColor};
//         width: ${width}px;
//         height: ${height}px;"></div>`;

//     arr = [...arr, boxEl];

//     width += 10;
//     height += 10;
//   }

//   refs.boxesContainer.insertAdjacentHTML('beforeend', arr.join(''));
// };

// refs.createBtn.addEventListener('click', () => createBoxes(inputValue));

// refs.destroyBtn.addEventListener('click', destroyAll);

// ______________________________________________________________

// Рефакторинг

// Получили ссылки на элементы

const refs = {
  controlsEl: document.querySelector('#controls'),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  boxesContainer: document.querySelector('#boxes'),
  inputEl: document.querySelector('#controls [type="number"]'),
};

// Объявили нужные свойства

const props = {
  inputValue: 0,
  width: 30,
  height: 30,
};

// Создали функцию получения значения инпута и повесили обработчик. Значение инпута строка, приводим ее к числу.

const getInputValue = e => {
  props.inputValue = Number(e.target.value);
};

refs.inputEl.addEventListener('input', getInputValue);

// рандомизатор цвета
const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

// функция очистки и сброса значений
const destroyAll = () => {
  refs.boxesContainer.innerHTML = '';
  props.width = 30;
  props.height = 30;
};

// функция создания боксов
const createBoxes = amount => {
  refs.inputEl.value = '';

  let arr = [];

  for (let i = 0; i < amount; i += 1) {
    if (amount === 0) {
      return;
    }

    const randomColor = getRandomHexColor();
    const boxEl = `<div style="background-color: ${randomColor};
        width: ${props.width}px;
        height: ${props.height}px;"></div>`;

    arr = [...arr, boxEl];

    props.width += 10;
    props.height += 10;
  }

  refs.boxesContainer.insertAdjacentHTML('beforeend', arr.join(''));
};

refs.createBtn.addEventListener('click', () => createBoxes(props.inputValue));

refs.destroyBtn.addEventListener('click', destroyAll);
