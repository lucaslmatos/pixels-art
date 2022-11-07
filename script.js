// chamada dos botões e outros eventos importantes:

const bloco1 = document.getElementById('blackColor');
const bloco2 = document.getElementById('redColor');
const bloco3 = document.getElementById('greenColor');
const bloco4 = document.getElementById('blueColor');
const buttonRandom = document.querySelector('#button-random-color');
const mem2 = JSON.parse(localStorage.getItem('pixelBoard'));

// Função que irá retornar e salvar as cores aleatórias da paleta.

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

// Função para definir o tamanho do board de pixels.

function pixelBoardSize(size) {
  const sizeI = size;
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

// Lógica utilizada a baixo para sempre ter o valor inicial 5, mesmo sendo o primeiro carregamento da página

let boardSize = Number(JSON.parse(localStorage.getItem('boardSize')));
if (boardSize < 5) {
  boardSize = 5;
}
pixelBoardSize(boardSize);

// Itens para retornar os valores salvos ao iniciar a página.

if (localStorage.getItem('colorPalette') !== null) {
  const mem = JSON.parse(localStorage.getItem('colorPalette'));
  bloco2.style.backgroundColor = `rgb(${mem[0]}, ${mem[1]}, ${mem[2]})`;
  bloco3.style.backgroundColor = `rgb(${mem[3]}, ${mem[4]}, ${mem[5]})`;
  bloco4.style.backgroundColor = `rgb(${mem[6]}, ${mem[7]}, ${mem[8]})`;
}
if (localStorage.getItem('pixelBoard') !== null) {
  const allPixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < allPixels.length; i += 1) {
    allPixels[i].style.backgroundColor = mem2[i];
  }
}

// Função para salvar as cores dos pixels clicados

function addLocalStorage(name, obj) {
  localStorage.setItem(name, JSON.stringify(obj));
}

// Função para selecinar a cor desejada.

function selectColor(event) {
  const procSelected = document.querySelector('.selected');
  procSelected.classList.remove('selected');
  event.target.classList.add('selected');
}

bloco1.addEventListener('click', selectColor);
bloco2.addEventListener('click', selectColor);
bloco3.addEventListener('click', selectColor);
bloco4.addEventListener('click', selectColor);

// Função para pintar o pixel clicado.

function paintColor(event) {
  const procSelected = document.querySelector('.selected');
  const bgc = getComputedStyle(procSelected).backgroundColor;
  const evento = event.target;
  evento.style.backgroundColor = bgc;
}

// Função utilizada para adicionar valores salvos junto com os novos

const saved = JSON.parse(localStorage.getItem('pixelBoard'));
const allPixels = document.querySelectorAll('.pixel');

if (saved === null) {
  const savedColors = [];
  addLocalStorage('pixelBoard', savedColors);

  for (let i4 = 0; i4 < allPixels.length; i4 += 1) {
    allPixels[i4].addEventListener('click', (evt) => {
      paintColor(evt);
      savedColors[i4] = allPixels[i4].style.backgroundColor;
      addLocalStorage('pixelBoard', savedColors);
    });
  }
} else {
  const savedColors = saved;
  addLocalStorage('pixelBoard', savedColors);

  for (let i4 = 0; i4 < allPixels.length; i4 += 1) {
    allPixels[i4].addEventListener('click', (evnt) => {
      paintColor(evnt);
      savedColors[i4] = allPixels[i4].style.backgroundColor;
      addLocalStorage('pixelBoard', savedColors);
    });
  }
}

// Função para criar botão que limpa a tela.

function clearAll() {
  for (let i5 = 0; i5 < allPixels.length; i5 += 1) {
    allPixels[i5].style.backgroundColor = ('white');
  }
}

const buttonClear = document.querySelector('#clear-board');
buttonClear.addEventListener('click', clearAll);

// Função para impor limite do tamanho do grid, e qual atividade realizar ao clicar no botão

const input = document.getElementById('board-size');

const vqvButton = document.getElementById('generate-board');

vqvButton.addEventListener('click', () => {
  const linhas = document.querySelector('#pixel-board');
  linhas.innerHTML = '';
  if (input.value === '') {
    window.alert('Board inválido!');
    input.value = 5;
    pixelBoardSize(input.value);
    linhas.innerHTML = '';
    localStorage.setItem('boardSize', input.value);
  } else if (input.value < 5) {
    input.value = 5;
    localStorage.setItem('boardSize', input.value);
  } else if (input.value > 50) {
    input.value = 50;
    localStorage.setItem('boardSize', input.value);
  } localStorage.setItem('boardSize', input.value);
  pixelBoardSize(input.value);
  localStorage.removeItem('pixelBoard');
  window.location.reload();
});
