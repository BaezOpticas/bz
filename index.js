document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.slide');
    const slider = document.querySelector('.slider');

    let currentSlide = 0;

    function goToSlide(slideIndex) {
        if (slideIndex < 0 || slideIndex >= slides.length) return;
        slider.style.transform = `translateX(-${slideIndex * 100}%)`;
        currentSlide = slideIndex;
    }

    function nextSlide() {
        if (currentSlide === slides.length - 1) {
            goToSlide(0);
        } else {
            goToSlide(currentSlide + 1);
        }
    }

    function prevSlide() {
        if (currentSlide === 0) {
            goToSlide(slides.length - 1);
        } else {
            goToSlide(currentSlide - 1);
        }
    }

    setInterval(nextSlide, 5000); // Cambiar de slide automáticamente cada 5 segundos
});
