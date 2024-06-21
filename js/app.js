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

/** Script para slider de rutas*/
document.addEventListener("DOMContentLoaded", function() {
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    const slides = document.querySelector(".sliders");
    const slideItems = document.querySelectorAll(".sliders li");

    let currentIndex = 0;
    const totalSlides = slideItems.length;
    const slideWidth = slideItems[0].clientWidth;

    // Al hacer clic en el botón next//
    nextBtn.addEventListener("click", function() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlidePosition();
    });

    // Al hacer clic en el botón prev//
    prevBtn.addEventListener("click", function() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSlidePosition();
    });

    // Función para actualizar la posición de los sliders//
    function updateSlidePosition() {
        const newPosition = -currentIndex * slideWidth;
        slides.style.transform = `translateX(${newPosition}px)`;
    }
});