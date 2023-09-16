const refs = {
  input: document.querySelector('#name-input'),
  nameValue: document.querySelector('#name-output'),
};

const getNameValue = event => {
  const {
    target: { value },
  } = event;

  refs.nameValue.textContent = value ? value : 'Anonymous';
};

refs.input.addEventListener('input', getNameValue);
