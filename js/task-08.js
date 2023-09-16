// Вариант через elements

// const formRef = document.querySelector('.login-form');

// let formResponse = {};

// const formHandler = event => {
//   event.preventDefault();

//   const elements = event.currentTarget.elements;

//   console.log(elements);

//   const emailValue = elements.email.value;
//   const passwordValue = elements.password.value;

//   if (emailValue === '') {
//     alert('Поле Email должно быть заполнено!');

//     return;
//   }

//   if (passwordValue === '') {
//     alert('Поле Password должно быть заполнено!');

//     return;
//   }

//   formResponse.email = emailValue;
//   formResponse.password = passwordValue;

//   console.log(formResponse);

//   formRef.reset();
// };

// console.log(formResponse);

// formRef.addEventListener('submit', formHandler);

// ___________________________________________________________________________________

// Вариант через FormData

const formRef = document.querySelector('.login-form');

const formHandler = event => {
  event.preventDefault();

  const response = {};

  const formData = new FormData(event.currentTarget);

  formData.forEach((value, name) => (response[name] = value));

  if (response.email === '') {
    alert('Поле Password должно быть заполнено!');

    return;
  }

  if (response.password === '') {
    alert('Поле Password должно быть заполнено!');

    return;
  }

  console.log(response);

  formRef.reset();
};

formRef.addEventListener('submit', formHandler);
