console.log('main.js loaded');

//navbar efect
window.addEventListener('scroll', function () {
  var navbar = document.getElementById('navbar');
  console.log(window.scrollY);
  if (window.scrollY > 0) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
})

//contador produtos
const displayElement = document.getElementById('display');
const btnAdd = document.getElementById('btnAdd');
const btnSubtract = document.getElementById('btnSubtract');

let count = 0;

//atualiza o display
function updateDisplay() {
  displayElement.value = count;
}

//adiciona 1 ao contador
function add() {
  count++;
  updateDisplay();
}

//subtrai 1 do contador
function subtract() {
  if (count > 0) {
    count--;
    updateDisplay();
  }
}

//adiciona evento de click ao botão de adicionar
btnAdd.addEventListener('click', add);
btnSubtract.addEventListener('click', subtract);