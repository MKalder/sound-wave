const burger = document.querySelector(".burger");

const nav = document.querySelector(".navigation");

const overlay = document.querySelector(".overlay");

burger.addEventListener("click", () => {

    nav.classList.toggle("active");

    overlay.classList.toggle("active");

});

overlay.addEventListener("click", () => {

    nav.classList.remove("active");

    overlay.classList.remove("active");

});