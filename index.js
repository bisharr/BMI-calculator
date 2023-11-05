'strict';
const buttonEl = document.querySelector('.btn');
const weightEl = document.getElementById('weight');
const heightEl = document.getElementById('height');
const answerEl = document.querySelector('.answer');

console.log(buttonEl, heightEl, weightEl, answerEl);

buttonEl.addEventListener('click', function () {
  const WeightValue = weightEl.value;
  const HeightValue = heightEl.value;

  const Bmi = WeightValue / (HeightValue * HeightValue);

  answerEl.textContent = `Your BMi is ${Bmi.toFixed(2)}`;
});

const icon = document.querySelector('.icon');

icon.addEventListener('click', function () {
  document.body.classList.toggle('dark-theme');

  if (document.body.classList.contains('dark-theme')) {
    icon.src = 'moon.png';
  } else {
    icon.src = 'sun.png';
  }
});
