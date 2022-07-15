function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalContent = modalbg.querySelector(".content");

const modalOpenBtn = document.querySelector(".modal-btn");
const modalCloseBtn = document.querySelector(".modal-close");

const formData = document.querySelectorAll(".formData");

// launch modal event
modalOpenBtn.addEventListener("click", launchModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal listener for both background and the close button
modalbg.addEventListener("click", closeModal);
modalCloseBtn.addEventListener("click", closeModal);

// Close Modal function
function closeModal() {
  modalbg.style.display = "none";
}
