const fontControlRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

const changeFontSize = event =>
  (textRef.style.fontSize = `${event.target.value}px`);

fontControlRef.addEventListener('input', changeFontSize);
