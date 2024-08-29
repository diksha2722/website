// Manually initialize the carousel
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.nav-dot');

let currentIndex = 0;

function updateCarousel() {
    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        dots[index].classList.remove('active');
    });
    slides[currentIndex].classList.add('active');
    dots[currentIndex].classList.add('active');
    document.querySelector('.slides').style.transform = `translateX(-${currentIndex * 100}%)`;
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel();
    });
});

updateCarousel();
