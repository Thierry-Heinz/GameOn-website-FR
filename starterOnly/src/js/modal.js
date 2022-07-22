// DOM Elements
const modalbg = document.querySelector(".bground");

const modalOpenBtns = document.querySelectorAll(".modal-btn");
const modalCloseBtn = document.querySelector(".modal-close");

// launch modal event on each buttons
for (const button of modalOpenBtns) {
  button.addEventListener("click", launchModal);
}

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  modalbg.querySelector("#successHolder").textContent = "";
  modalbg.querySelector("form").style.display = "block";
}

// Close modal listener for both background and the close button
modalbg.addEventListener("click", closeModal);
modalCloseBtn.addEventListener("click", closeModal);

// Close Modal function
function closeModal(event) {
  if (event.target === this) {
    modalbg.style.display = "none";
  }
}
