const burger = document.querySelector(".burger");
const nav = document.querySelector(".navigation");
const closeBtn = document.querySelector("#close-btn");


burger.addEventListener("click", () => {
    nav.classList.toggle("active");
    overlay.classList.toggle("active");
});

closeBtn.addEventListener("click", () => {
    nav.classList.remove("active");
    overlay.classList.remove("active");
});