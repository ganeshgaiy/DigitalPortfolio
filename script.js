// script.js
let currentSlides = {};

function showSlide(carouselId, index) {
    const carousel = document.getElementById(carouselId);
    const slides = carousel.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        currentSlides[carouselId] = 0;
    } else if (index < 0) {
        currentSlides[carouselId] = totalSlides - 1;
    } else {
        currentSlides[carouselId] = index;
    }

    const carouselInner = carousel.querySelector('.carousel-inner');
    carouselInner.style.transform = `translateX(-${currentSlides[carouselId] * 100}%)`;
}

function nextSlide(carouselId) {
    console.log(carouselId)
    showSlide(carouselId, currentSlides[carouselId] + 1);
}

function prevSlide(carouselId) {
    console.log(carouselId)
    showSlide(carouselId, currentSlides[carouselId] - 1);
}

document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach(carousel => {
        const carouselId = carousel.id;
        currentSlides[carouselId] = 0;
        showSlide(carouselId, 0);
    });
});
