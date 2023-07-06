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
function Contador(elementoId) {
  const displayElement = document.getElementById(elementoId);
  let count = 1;

  //atualiza o display
  function updateDisplay() {
    displayElement.value = count;
  }

  //adiciona 1 ao contador
  this.increment = function() {
    count++;
    updateDisplay();
  }

  //subtrai 1 do contador
  this.decrement = function() {
    if (count > 1) {
      count--;
      updateDisplay();
    }
  }
}

const counter1 = new Contador('counter1');
const counter2 = new Contador('counter2');
const counter3 = new Contador('counter3');
const counter4 = new Contador('counter4');
const counter5 = new Contador('counter5');
const counter6 = new Contador('counter6');