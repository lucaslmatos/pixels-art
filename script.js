const bloco2 = document.getElementById('redColor');
const bloco3 = document.getElementById('greenColor');
const bloco4 = document.getElementById('blueColor');
const buttonRandom = document.querySelector('#button-random-color');

function rColor() {
  const r2 = parseInt(Math.random() * 255, 10);
  const g2 = parseInt(Math.random() * 255, 10);
  const b2 = parseInt(Math.random() * 255, 10);
  bloco2.style.backgroundColor = `rgb(${r2}, ${g2}, ${b2})`;
  const r3 = parseInt(Math.random() * 255, 10);
  const g3 = parseInt(Math.random() * 255, 10);
  const b3 = parseInt(Math.random() * 255, 10);
  bloco3.style.backgroundColor = `rgb(${r3}, ${g3}, ${b3})`;
  const r4 = parseInt(Math.random() * 255, 10);
  const g4 = parseInt(Math.random() * 255, 10);
  const b4 = parseInt(Math.random() * 255, 10);
  bloco4.style.backgroundColor = `rgb(${r4}, ${g4}, ${b4})`;
}

buttonRandom.addEventListener('click', rColor);
