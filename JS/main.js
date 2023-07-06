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
const counter7 = new Contador('counter7');
const counter8 = new Contador('counter8');
const counter9 = new Contador('counter9');
const counter10 = new Contador('counter10');
const counter11 = new Contador('counter11');
const counter12 = new Contador('counter12');
const counter13 = new Contador('counter13');
const counter14 = new Contador('counter14');
const counter15 = new Contador('counter15');
const counter16 = new Contador('counter16');
const counter17 = new Contador('counter17');
const counter18 = new Contador('counter18');

//copiar link do PIX
function copiarCodigo() {
  const codigoElement = document.getElementById('codigo');

  codigoElement.select();
  codigoElement.setSelectionRange(0, 99999); //para dispositivos moveis 

  document.execCommand('copy');
  alert('Código copiado: ' + codigoElement.value);
}