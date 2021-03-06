const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function () {
  nav.classList.toggle('slide');
});

//javascript for navigation bar effect on scroll
window.addEventListener('scroll', function () {
  var header = document.querySelector('nav');
  header.classList.toggle('sticky', window.scrollY > 0);
});

//li active
var selector = '.nav li';

$(selector).on('click', function () {
  $(selector).removeClass('active');
  $(this).addClass('active');
});
