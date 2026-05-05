const openModal = document.querySelectorAll(".openModal");
const overlay = document.querySelector(".overlay");
const closeModal = document.getElementById("close-modal-btn");

//For a single button only
// openModal.addEventListener("click", (event) => {
//     event.preventDefault();
//     overlay.classList.remove("hidden");
// });

openModal.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        overlay.classList.remove("hidden");
    });
});

closeModal.addEventListener("click", () => {
    overlay.classList.add("hidden");
});


