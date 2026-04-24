const track = document.querySelector(".carousel-track");
const slides = Array.from(document.querySelectorAll(".slide"));

const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentIndex = 0;

function updateSlide() {
    const offset = -currentIndex * 100;
    track.style.transform = `translateX(${offset}%)`;
}

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlide();
});

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlide();
});