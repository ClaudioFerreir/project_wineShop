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