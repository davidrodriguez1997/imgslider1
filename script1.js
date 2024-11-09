let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

// Show the first slide by default
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? "block" : "none";
    });
}

function moveSlide(step) {
    currentSlide = (currentSlide + step + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Initialize the slideshow
document.addEventListener("DOMContentLoaded", () => {
    showSlide(currentSlide);

    // Optionally, auto-change slides every 5 seconds
    setInterval(() => {
        moveSlide(1);
    }, 5000);
});
