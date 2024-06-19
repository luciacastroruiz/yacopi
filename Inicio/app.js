/**
 * Función que maneja el evento de clic en el botón de hamburguesa.
 * Abre o cierra el menú de navegación y aplica una animación de desvanecimiento a los enlaces.
 */
const hamburger = document.querySelector('.hamburger'); 
const navLinks = document.querySelector('.nav-Links');
const links = document.querySelectorAll('.nav-Links li');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    links.forEach(link => {
        link.classList.toggle('fade')
    })
})