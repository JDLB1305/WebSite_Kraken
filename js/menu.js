const menuIcon = document.getElementById('iconoMenu');
const menu1 = document.getElementById('menu1');
const menu2 = document.getElementById('menu2');

menuIcon.addEventListener('click', () => {
    menu1.classList.toggle('show'); // Alterna la clase 'show' en el primer menú
    menu2.classList.toggle('show'); // Alterna la clase 'show' en el segundo menú
});