const refs = {
  decrementButton: document.querySelector('[data-action=decrement]'),
  incrementButton: document.querySelector('[data-action=increment]'),
  value: document.querySelector('#value'),
};

let counterValue = 0;

const increaseValue = () => (refs.value.textContent = counterValue += 1);
const decreaseValue = () => (refs.value.textContent = counterValue -= 1);

refs.decrementButton.addEventListener('click', decreaseValue);
refs.incrementButton.addEventListener('click', increaseValue);
