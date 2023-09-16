const inputRef = document.querySelector('#validation-input');
const inputMaxLength = Number(inputRef.dataset.length);

const inputHandler = event => {
  const {
    target: { value },
  } = event;

  const { classList } = inputRef;

  if (value === '') {
    // inputRef.removeAttribute('class');
    classList.remove('invalid');
    classList.remove('valid');
    return;
  }

  if (value.length < inputMaxLength || value.length > inputMaxLength) {
    classList.remove('valid');
    classList.add('invalid');
    return;
  }

  if (value.length === inputMaxLength) {
    classList.remove('invalid');
    classList.add('valid');
    return;
  }
};

inputRef.addEventListener('blur', inputHandler);
