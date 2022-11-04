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
  const mem = [r2, g2, b2, r3, g3, b3, r4, g4, b4];
  localStorage.setItem('colorPalette', JSON.stringify(mem));
}

buttonRandom.addEventListener('click', rColor);

window.onload = function memCor() {
  if (localStorage.length !== 0) {
    const mem = JSON.parse(localStorage.getItem('colorPalette'));
    bloco2.style.backgroundColor = `rgb(${mem[0]}, ${mem[1]}, ${mem[2]})`;
    bloco3.style.backgroundColor = `rgb(${mem[3]}, ${mem[4]}, ${mem[5]})`;
    bloco4.style.backgroundColor = `rgb(${mem[6]}, ${mem[7]}, ${mem[8]})`;
    console.log(mem);
  }
};

function pixelBoardSize(size) {
  let sizeI = size;
  if (sizeI < 5) sizeI = 5;
  if (sizeI > 50) sizeI = 50;
  for (let i = 0; i < sizeI; i += 1) {
    const localGrade = document.getElementById('pixel-board');
    const linha = document.createElement('section');
    linha.className = 'linha';
    localGrade.appendChild(linha);
    for (let i2 = 0; i2 < sizeI; i2 += 1) {
      const bloco = document.createElement('div');
      bloco.className = 'pixel';
      linha.appendChild(bloco);
    }
  }
}

pixelBoardSize(5);
