const track = document.querySelector(".carousel__track");

const slides = document.querySelectorAll(".slide");

let index = 0;

function goToSlide(i) {
    index = i;

    const slideWidth = slides[0].offsetWidth;

    track.scrollTo({
        left: slideWidth * index,

        behavior: "smooth",
    });
}

document.querySelector(".next").addEventListener("click", () => {
    if (index < slides.length - 1) {
        goToSlide(index + 1);
    }
});

document.querySelector(".prev").addEventListener("click", () => {
    if (index > 0) {
        goToSlide(index - 1);
    }
});


// BURGER-MENU

const burger = document.querySelector(".burger");
const nav = document.querySelector(".navigation");

burger.addEventListener("click", () => {
    nav.classList.toggle("active");
});

document.addEventListener("click", (e) => {
    if (!nav.contains(e.target) && !burger.contains(e.target)) {
        nav.classList.remove("active");
    }
});