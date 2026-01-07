const images = document.querySelectorAll('img');

images.forEach((img) => {
  img.addEventListener('mouseenter', () => {
    img.classList.add('grayscale');
  });

  img.addEventListener('mouseleave', () => {
    img.classList.remove('grayscale');
  });
});

window.addEventListener('keydown', (event) => {
  const body = document.body;

  body.classList.remove('theme1', 'theme2', 'theme3');

  if (event.key === '1') {
    body.classList.add('theme1');
  } else if (event.key === '2') {
    body.classList.add('theme2');
  } else if (event.key === '3') {
    body.classList.add('theme3');
  } else if (event.key === 'Escape') {
    body.classList.remove('theme1', 'theme2', 'theme3');
  }
});

const input = document.querySelector('input');
const button = document.querySelector('button');

input.addEventListener('input', () => {
  input.value = input.value.toUpperCase();

  if (input.value.length > 5) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
});

const form = document.querySelector('form');
const inputField = document.querySelector('input');
const submitResult = document.getElementById('submitResult');
const submitButton = document.querySelector('button');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  submitResult.textContent = `${inputField.value} başarı ile kaydedildi...`;

  inputField.value = '';
  submitButton.disabled = true;
});