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