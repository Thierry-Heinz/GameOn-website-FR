// DOM Elements
const modalbg = document.querySelector(".bground");
const modalOpenBtns = document.querySelectorAll(".modal-launch-func");
const modalCloseBtns = document.querySelectorAll(".modal-close-func");

// launch modal event on each buttons
for (const button of modalOpenBtns) {
  button.addEventListener("click", launchModal);
}

// close modal event on each buttons
for (const button of modalCloseBtns) {
  button.addEventListener("click", closeModal);
}
// Close listeners for the background
modalbg.addEventListener("click", closeModal);

// Launch modal function
function launchModal() {
  modalbg.style.display = "block";
  modalbg.querySelector("#successHolder").style.display = "none";
  modalbg.querySelector(".successHolder__message").textContent = "";
  modalbg.querySelector("form").style.display = "block";
}

// Close Modal function (if exactly clicked on the el)
function closeModal(event) {
  if (event.target === this) {
    modalbg.style.display = "none";
  }
}
