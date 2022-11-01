const menuToggle = document.querySelector('.menu-toggle input');
conts nav = ducument.querySelector('nav ul');

menuToggle.addEventListener('click', function() {
    nav.classList.toggle('slide');
});